import os

from pyramid.renderers import render

def curly_brace_param(param):
    return '{{{}}}'.format(param)


# for cornice
# @resource(**make_resource(path, ident='name'))
def make_resource(rpath, ident='id', cross_site=True):
    path = os.path.join(rpath, curly_brace_param(ident))
    data = dict(collection_path=rpath, path=path)
    if cross_site:
        data['cors_origins'] = ('*',)
    return data


def apply_pagination(request, query):
    GET = request.GET
    if 'offset' in GET:
        offset = int(GET.get('offset'))
        query = query.offset(offset)
    if 'limit' in GET:
        limit = int(GET.get('limit'))
        query = query.limit(limit)
    return query
