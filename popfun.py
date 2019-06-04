#!/usr/bin/env python
# from hubby.legistar import RSS_THIS_MONTH
from hattie.legistar import RSS_YEARLY_FEEDS

import os
import pickle as Pickle
from pathlib import Path
import json
import datetime
import zipfile

import requests
from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy import Column, PickleType
import zope.sqlalchemy
import transaction

# from hornstone.models.base import BaseLongNameIdMixin

from hattie.database import Base
from hattie.database import Meeting
from hattie.util import make_true_date, legistar_id_guid

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
    # dburl = "postgresql://dbadmin@localhost/hubbytest"
    # dburl = "sqlite:///%(here)s/garkbit.sqlite" % dict(here=os.getcwd())
    dburl = 'postgresql://dbadmin@localhost/hubbytest'
    dburl = "sqlite:///%(here)s/hattie.sqlite" % dict(here=os.getcwd())

here = os.getcwd()
print("dburl", dburl)
settings = {'sqlalchemy.url': dburl}
engine = engine_from_config(settings)
Base.metadata.create_all(engine)
Session = sessionmaker()
Session.configure(bind=engine)
zope.sqlalchemy.register(Session, transaction.manager)
s = Session()


pc = PickleCollector()
if not os.path.isdir(pc.dir):
    os.makedirs(pc.dir)
#cc = ZipCollector(open('data.zip', 'rb'))
manager = DatabaseManager(s, pc)

# %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

# needs data/
def get_rss_content(year, url):
    filename = "data/rss-{}.rss".format(year)
    if os.path.isfile(filename):
        content = open(filename).read()
    else:
        print("NO DATA URL {} {}".format(year, url))
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




# needs data/
def get_pickle_file(prefix, id):
    filename = 'data/{}-{}.pickle'.format(prefix, id)
    if not os.path.isfile(filename):
        raise RuntimeError("{} not there.".format(filename))
    with open(filename, 'rb') as infile:
        content = Pickle.load(infile)
    return content['result']


# needs data/
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


# needs data/
def get_base_meeting(meeting_id):
    return get_pickle_file('meeting', meeting_id)


# needs data/
def get_base_item(item_id):
    return get_pickle_file('item', item_id)


# needs data/
def get_base_action(action_id):
    return get_pickle_file('action', action_id)


def get_item_id_from_meeting_item(item):
    query = parse_url(item['item_page']).query
    id = qsparser.parse(query)['ID']
    return id


# needs data/
def get_meeting_item_ids(meeting_id):
    items = get_base_meeting(meeting_id)['items']
    ids = []
    for item in items:
        ids.append(get_item_id_from_meeting_item(item))
    return ids


def get_action_id_from_action(action):
    query = parse_url(action).query
    id = qsparser.parse(query)['ID']
    return id


# needs data/
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


# needs data/
def get_meeting(meeting):
    meeting_id = meeting['id']
    bmeeting = get_base_meeting(meeting_id)
    bmeeting['meeting_items'] = bmeeting['items']
    for key in ['title', 'updated']:
        bmeeting['info'][key] = meeting[key]
    items = [get_item(id) for id in get_meeting_item_ids(meeting_id)]
    bmeeting['items'] = items
    return bmeeting


# needs data/
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


def delete_meetings(year, month):
    meetings = get_new_meetings(year, month)
    files = list()
    for meeting in meetings:
        mfiles = get_meeting_files(meeting)
        files += mfiles
    for fname in files:
        if os.path.isfile(fname):
            os.remove(fname)


def scrape_year(year, merge=True):
    url = RSS_YEARLY_FEEDS[year]
    content = get_rss_content(year, url)
    print("Adding meetings for {}".format(year))
    manager.add_rss_meetings('ignore', rss=feedparser.parse(content))
    if merge:
        manager.add_meetings(year=year)
    else:
        print("NO MERGE")

def add_meetings_scrapeit():
    years = list(RSS_YEARLY_FEEDS.keys())
    years.sort()
    for year in years:
        scrape_year(year, merge=False)
    manager.add_meetings()

    
def scrapeit():
    manager.add_people()
    manager.add_departments()
    add_meetings_scrapeit()


def get_pickled_meeting_files(meeting):
    files = list()
    info = meeting['info']
    meeting_id = info['id']
    mfilename = manager.collector.get_filename('meeting', meeting_id)
    files.append(mfilename)
    for item in meeting['items']:
        item_link = item['item_page']
        item_id, guid = legistar_id_guid(item_link)
        pitem = manager.collector.collect('item', link=item_link)
        files.append(manager.collector.get_filename('item', item_id))
        for action_link in pitem['action_details']:
            action_id, guid = legistar_id_guid(action_link)
            fname = manager.collector.get_filename('action', action_id)
            files.append(fname)
    return files


def make_year_package(year):
    collector = PickleCollector()
    meetings = get_meetings_from_rss(year)
    zfile = zipfile.ZipFile("data-{}.zip".format(year), 'w')
    # since agenda items can span multiple meetings
    # use a set to remove duplicates
    year_files = set()
    # add year rss file
    year_files.add('data/rss-{}.rss'.format(year))
    # add people and departments
    year_files.add('data/people.pickle')
    year_files.add('data/departments.pickle')
    for meeting in meetings:
        pmeeting = collector.collect('meeting', meeting['link'])
        file_list = get_pickled_meeting_files(pmeeting)
        year_files |= set(file_list)
    for filename in list(year_files):
        zfile.write(filename)


def make_year_packages():
    years = list(RSS_YEARLY_FEEDS.keys())
    years.sort()
    for year in years:
        print("Creating zip for {}.".format(year))
        make_year_package(year)


def handler(obj):
    if isinstance(obj, (datetime.datetime, datetime.date)):
        return obj.isoformat()
    else:
        return None


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
