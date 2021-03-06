import os
from datetime import datetime
import base64
import io
import contextlib

# from webob import Response
from cornice.resource import resource
from pyramid.security import Allow
# from pyramid.security import Authenticated
from pyramid.httpexceptions import HTTPNotFound

from hornstone.alchemy import export_models
from trumpet.views.base import BaseManagementResource
from trumpet.views.base import BaseViewCallable
from trumpet.views.resourceviews import BaseResource

from hattie.managers.basic import DepartmentManager, PersonManager
from hattie.managers.main import MeetingManager, ActionManager, ItemManager
from hattie.dbmanager import DatabaseManager
from hattie.collector.main import ZipCollector

from hattie.database import Department, Person
from hattie.database import Meeting, Item, MeetingItem
from hattie.database import ItemAction, Action, ActionVote
from hattie.database import Attachment


hattie_models = [Attachment, ActionVote, ItemAction, Action,
                 MeetingItem, Item, Meeting, Department, Person]

APIROOT = '/rest/v0'
rscroot = os.path.join(APIROOT, 'main')

dbadmin_route = '/rest/v0/main/hubby/dbadmin'


@resource(collection_path=dbadmin_route,
          path=os.path.join(dbadmin_route, '{view}'),
          permission='dbadmin')
class DbManagerView(BaseResource):
    def __init__(self, request, context=None):
        super(DbManagerView, self).__init__(request, context=context)
        self.mgr = DatabaseManager(self.request.dbsession, 'ignore')
        self.output = io.BytesIO()

    def __acl__(self):
        return [(Allow, 'group:admin', 'dbadmin')]

    def get(self):
        v = self.request.matchdict['view']
        if v == 'delete-all':
            return self.delete_all()
        if v == 'testme':
            return self.export_database()
        return HTTPNotFound

    def export_database(self):
        content = export_models(self.request.dbsession, hattie_models)
        return dict(content=base64.encodebytes(content))

    def import_zipfile(self):
        text = self.request.json['content']
        content = base64.decodestring(text.encode())
        zfile = io.BytesIO(content)
        collector = ZipCollector(zfile)
        self.mgr = DatabaseManager(self.request.dbsession, collector)
        if 'data/people.pickle' in collector.zfile.namelist():
            self.mgr.add_people()
        if 'data/departments.pickle' in collector.zfile.namelist():
            self.mgr.add_departments()
        rssfiles = [f for f in collector.zfile.namelist()
                    if f.endswith('.rss')]
        if len(rssfiles) != 1:
            # FIXME return a better error
            return HTTPNotFound
        rssfile = rssfiles[0]
        # chop .rss
        prefix = rssfile[:-4]
        year = prefix[-4:]
        self.mgr.add_meetings_for_year(year)
        self.mgr.add_zipped_meetings()
        del content
        del zfile
        del collector
        del self.mgr
        return dict(result='ok', data=dict(year=year))

    def post(self):
        v = self.request.matchdict['view']
        if v == 'testme':
            output = io.StringIO()
            with contextlib.redirect_stdout(output):
                data = self.import_zipfile()
            data['output'] = output.getvalue()
            return data

    def delete_all(self):
        self.mgr.delete_all()
        return dict(result='ok')


dept_path = os.path.join(rscroot, 'department')


@resource(collection_path=dept_path,
          path=os.path.join(dept_path, '{id}'))
class MainDepartmentResource(BaseManagementResource):
    mgrclass = DepartmentManager


person_path = os.path.join(rscroot, 'person')


@resource(collection_path=person_path,
          path=os.path.join(person_path, '{id}'))
class MainPersonResource(BaseManagementResource):
    mgrclass = PersonManager


meeting_path = os.path.join(rscroot, 'meeting')


@resource(collection_path=meeting_path,
          path=os.path.join(meeting_path, '{id}'),
          cors_origins=('*',))
class MeetingResource(BaseManagementResource):
    mgrclass = MeetingManager

    def collection_get(self):
        meetings = [m.serialize() for m in self.mgr.get_meeting_list()]
        for m in meetings:
            if 'rss' in m:
                del m['rss']
        return dict(data=meetings, total_count=len(meetings), result='success')

    def get(self):
        id = int(self.request.matchdict['id'])
        m = self.mgr.get(id)
        if m is None:
            # FIXME
            raise HTTPNotFound('{} unavailable.'.format(id))
        mdata = m.serialize()
        # remove rss object
        try:
            del mdata['rss']
        except KeyError:
            pass
        mdata['meeting_items'] = []
        if len(m.meeting_items):
            meeting_items = []
            for mi in m.meeting_items:
                meeting_items.append(mi.serialize())
            mdata['meeting_items'] = meeting_items
        if len(m.items):
            items = dict()
            for i in m.items:
                idata = i.serialize()
                if len(i.attachments):
                    attachments = []
                    for a in i.attachments:
                        atdata = a.serialize()
                        atdata['url'] = a.get_link()
                        attachments.append(atdata)
                    idata['attachments'] = attachments
                if len(i.actions):
                    actions = []
                    for a in i.actions:
                        actions.append(a.serialize())
                    idata['actions'] = actions
                items[i.id] = idata
            mdata['items'] = items
        # extra stuff
        mdata['dept'] = m.dept.name
        mdata['prettydate'] = m.date.strftime("%A, %B %d, %Y")
        return dict(data=mdata, result='success')


itemaction_path = os.path.join(rscroot, 'itemaction')


@resource(collection_path=itemaction_path,
          path=os.path.join(itemaction_path, '{id}'),
          cors_origins=('*',))
class ItemActionResource(BaseManagementResource):
    mgrclass = ItemManager

    def collection_get(self):
        return dict(data=[], result='notyet')

    def get(self):
        id = int(self.request.matchdict['id'])
        item = self.mgr.get(id)
        if item is None:
            # FIXME
            raise RuntimeError('404')
        actions = list()
        for a in item.actions:
            actions.append(a.serialize())
        return dict(data=actions, result='success')


action_path = os.path.join(rscroot, 'action')


@resource(collection_path=action_path,
          path=os.path.join(action_path, '{id}'),
          cors_origins=('*',))
class ActionResource(BaseManagementResource):
    mgrclass = ActionManager

    def collection_get(self):
        return dict(data=[], result='notyet')

    def get(self):
        id = int(self.request.matchdict['id'])
        a = self.mgr.get(id)
        if a is None:
            # FIXME
            raise RuntimeError('404')
        adata = a.serialize()
        return dict(data=adata, result='success')


# json view for calendar
class MeetingCalendarViewer(BaseViewCallable):
    def __init__(self, request):
        super(MeetingCalendarViewer, self).__init__(request)
        self.mgr = MeetingManager(self.request.dbsession)
        start, end = self._bare_start_end()
        timestamps = True
        if '-' in start and '-' in end:
            timestamps = False
        self.get_ranged_meetings(timestamps=timestamps)

    def _bare_start_end(self):
        start = self.request.GET['start']
        end = self.request.GET['end']
        print("START, END", start, end)
        return start, end

    def _get_start_end_from_request(self, timestamps):
        start, end = self._bare_start_end()
        if not timestamps:
            year, month, day = [int(p) for p in start.split('-')]
            start = datetime(year, month, day)
        if not timestamps:
            year, month, day = [int(p) for p in end.split('-')]
            end = datetime(year, month, day)
        return start, end

    # json responses should not be lists
    # this method is for the fullcalendar
    # widget. Fullcalendar v2 uses yyyy-mm-dd
    # for start and end parameters, rather than
    # timestamps.
    def get_ranged_meetings(self, timestamps=False):
        start, end = self._get_start_end_from_request(timestamps)
        meetings = self.mgr.get_ranged_meetings(start, end,
                                                timestamps=timestamps)
        mlist = list()
        for m in meetings:
            mdata = m.serialize()
            # remove rss object
            try:
                del mdata['rss']
            except KeyError:
                pass
            mlist.append(mdata)
        headers = [('Access-Control-Allow-Origin', '*')]
        self.request.response.headerlist.extend(headers)
        self.response = mlist
