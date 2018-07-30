#!/usr/bin/env python
# from hubby.legistar import RSS_THIS_MONTH
from hattie.legistar import RSS_YEARLY_FEEDS

import os
import pickle as Pickle
from pathlib import Path
import json
import datetime

import requests
from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, PickleType
from hornstone.models.base import BaseLongNameIdMixin

from hattie.database import Base
from hattie.util import make_true_date

# from hubby.collector.main import MainCollector
from hattie.collector.main import PickleCollector, ZipCollector
from hattie.dbmanager import DatabaseManager

# another place for this
import feedparser
from querystring_parser import parser as qsparser
from urllib3.util import parse_url


runtimedir_varname = 'XDG_RUNTIME_DIR'
if 'TMPHUBBYDB' in os.environ and runtimedir_varname in os.environ:
    runtimedir = os.environ[runtimedir_varname]
    hubbydir = os.path.join(runtimedir, 'hubby')
    if not os.path.isdir(hubbydir):
        os.makedirs(hubbydir)
    dburl = "sqlite:///%(hubbydir)s/hubby.sqlite"
    dburl = dburl % dict(hubbydir=hubbydir)

else:
    dburl = "sqlite:///%(here)s/hubby.sqlite" % dict(here=os.getcwd())
    # dburl = "postgresql://dbadmin@localhost/hubbytest"
    dburl = "sqlite:///%(here)s/garkbit.sqlite" % dict(here=os.getcwd())
    #dburl = 'postgresql://dbadmin@localhost/hubbytest'

here = os.getcwd()
print("dburl", dburl)
settings = {'sqlalchemy.url': dburl}
engine = engine_from_config(settings)
Base.metadata.create_all(engine)
Session = sessionmaker()
Session.configure(bind=engine)
s = Session()


pc = PickleCollector()
if not os.path.isdir(pc.dir):
    os.makedirs(pc.dir)
cc = ZipCollector(open('data.zip', 'rb'))


def get_rss_content(year, url):
    filename = "data/rss-{}.rss".format(year)
    if os.path.isfile(filename):
        content = open(filename).read()
    else:
        with open(filename, 'wb') as outfile:
            req = requests.get(url)
            if req.ok:
                outfile.write(req.content)
            else:
                msg = "Bad response from server {}".format(req.status)
                raise RuntimeError(msg)
        print("Saved {}".format(filename))
        content = req.content
    return content


def handler(obj):
    if isinstance(obj, (datetime.datetime, datetime.date)):
        return obj.isoformat()
    else:
        return None


manager = DatabaseManager(s, pc)


def get_pickle_file(prefix, id):
    filename = 'data/{}-{}.pickle'.format(prefix, id)
    if not os.path.isfile(filename):
        raise RuntimeError("{} not there.".format(filename))
    with open(filename, 'rb') as infile:
        content = Pickle.load(infile)
    return content['result']


def get_meetings_from_rss(year):
    rss = feedparser.parse(get_rss_content(year, RSS_YEARLY_FEEDS[year]))
    meetings = list()
    for entry in rss.entries:
        query = parse_url(entry['link']).query
        parsed_query = qsparser.parse(query)
        id = int(parsed_query['ID'])
        guid = parsed_query['GUID']
        data = dict(id=id, guid=guid, link=entry['link'],
                    title=entry['title'],
                    updated=datetime.datetime.now())
        meetings.append(data)
    return meetings

# meeting items from meeting page
# meeting items have agenda_num
def get_base_meeting(meeting_id):
    return get_pickle_file('meeting', meeting_id)


def get_item_id_from_meeting_item(item):
    query = parse_url(item['item_page']).query
    id = qsparser.parse(query)['ID']
    return id


def get_meeting_item_ids(meeting_id):
    items = get_base_meeting(meeting_id)['items']
    ids = []
    for item in items:
        ids.append(get_item_id_from_meeting_item(item))
    return ids


def get_base_item(item_id):
    return get_pickle_file('item', item_id)


def get_action_id_from_action(action):
    query = parse_url(action).query
    id = qsparser.parse(query)['ID']
    return id


def get_base_action(action_id):
    return get_pickle_file('action', action_id)


def get_item(item_id):
    item = get_base_item(item_id)
    actions = []
    for action in item['action_details']:
        action_id = get_action_id_from_action(action)
        actions.append(get_base_action(action_id))
    if 'actions' in item:
        raise RuntimeError("actions in item {}".format(item))
    item['actions'] = actions
    return item


def get_meeting(meeting):
    meeting_id = meeting['id']
    bmeeting = get_base_meeting(meeting_id)
    bmeeting['meeting_items'] = bmeeting['items']
    for key in ['title', 'updated']:
        bmeeting['info'][key] = meeting[key]
    items = [get_item(id) for id in get_meeting_item_ids(meeting_id)]
    bmeeting['items'] = items
    return bmeeting


def get_year_meetings(year):
    return (get_meeting(m) for m in get_meetings_from_rss(year))


def get_new_meetings(year, month):
    meetings = get_year_meetings(year)
    new_meetings = list()
    for meeting in meetings:
        dt = make_true_date(meeting['info']['date'])
        if dt.month >= month:
            new_meetings.append(meeting)
    return new_meetings


def get_meeting_files(meeting):
    files = list()
    info = meeting['info']
    meeting_id = info['id']
    mfilename = manager.collector.get_filename('meeting', meeting_id)
    # print(mfilename)
    files.append(mfilename)
    for item in meeting['items']:
        files.append(manager.collector.get_filename('item', item['id']))
        for action in item['actions']:
            fname = manager.collector.get_filename('action', action['id'])
            files.append(fname)
    return files

def remove_html_content():
    dirname = 'data'
    ls = os.listdir(dirname)
    pickles = [f for f in ls if f.endswith('.pickle')]
    print("{} pickle files".format(len(pickles)))
    for basename in pickles:
        filename = os.path.join('data', basename)
        data = Pickle.load(open(filename, 'rb'))
        if 'content' in data:
            del data['content']
            with open(filename, 'wb') as outfile:
                Pickle.dump(data, outfile)
            print("Removed content from {}".format(filename))
        print(data.keys())


def delete_meetings(year, month):
    meetings = get_new_meetings(year, month)
    files = list()
    for meeting in meetings:
        mfiles = get_meeting_files(meeting)
        files += mfiles
    for fname in files:
        if os.path.isfile(fname):
            os.remove(fname)


def make_years_files():
    years = list(RSS_YEARLY_FEEDS.keys())
    years.sort()
    for year in years:
        meetings = get_year_meetings(year)
        filename = 'Year-{}.pickle'.format(year)
        print("Creating {}".format(filename))
        with open(filename, 'wb') as outfile:
            Pickle.dump(list(meetings), outfile)


def make_years():
    data = dict()
    years = list(RSS_YEARLY_FEEDS.keys())
    years.sort()
    for year in years:
        meetings = get_year_meetings(year)
        data[year] = list(meetings)
    return data


def make_export():
    filename = "hubby-data.pickle"
    years = make_years()
    people = manager.collector.collect('people')
    depts = manager.collector.collect('depts')
    data = dict(meetings=years, people=people, depts=depts)
    with open(filename, 'wb') as outfile:
        Pickle.dump(data, outfile)


def import_data():
    filename = "hubby-data.pickle"
    if not os.path.isfile(filename):
        raise RuntimeError("{} missing".format(filename))
    data = Pickle.load(open(filename, 'rb'))
    manager.add_collected_people(data['people'])
    manager.add_collected_depts(data['depts'])
    years = list(data['meetings'].keys())
    years.sort()
    for year in years:
        print("Importing year {}...".format(year))
        meetings = data['meetings'][year]
        for meeting in meetings:
            print("Importing meeting {}...".format(meeting['info']['id']))
            manager.add_pickled_meeting(meeting)
    return data


def add_meetings_scrapeit():
    years = list(RSS_YEARLY_FEEDS.keys())
    years.sort()
    for year in years:
        url = RSS_YEARLY_FEEDS[year]
        content = get_rss_content(year, url)
        print("Adding meetings for {}".format(year))
        manager.add_rss_meetings('ignore', rss=feedparser.parse(content))
    manager.add_meetings()


def scrapeit():
    manager.add_people()
    manager.add_departments()
    add_meetings_scrapeit()


def split_content():
    dirname = 'data'

    dpath = Path(dirname)
    files = dpath.rglob('**/*')
    files = []

    outdir = 'json'
    htmldir = 'html'
    for dirname in [outdir, htmldir]:
        if not os.path.isdir(dirname):
            os.makedirs(dirname)

            good_endings = ['pickle', 'rss']
            for fpath in files:
                ftype = None
                for ending in good_endings:
                    if fpath.name.endswith('.{}'.format(ending)):
                        ftype = ending
                if ftype is None:
                    msg = "unable to handle file {}".format(fpath)
                    raise RuntimeError(msg)
                if ftype == 'pickle':
                    data = Pickle.load(fpath.open('rb'))
                    basename = fpath.name.split(fpath.suffix)[0]
                    html = os.path.join(htmldir, '{}.html'.format(basename))
                    with open(html, 'wb') as outfile:
                        outfile.write(data['content'])
                    jfile = os.path.join(outdir, '{}.json'.format(basename))
                    with open(jfile, 'w') as outfile:
                        json.dump(data['result'], outfile, default=handler)
                else:
                    data = fpath.open().read()
