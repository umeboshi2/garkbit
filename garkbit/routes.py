from paste.deploy.converters import asbool


def includeme(config):
    settings = config.get_settings()

    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_static_view('assets', '../assets', cache_max_age=3600)

    # %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    # Auth views
    # %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    config.add_route('login', '/login')
    config.add_route('auth_refresh', '/auth/refresh')
    config.add_route('auth_chpass', '/auth/chpass')

    config.add_view('.views.auth.login', route_name='login',
                    request_method='POST', renderer='json')
    config.add_view('.views.auth.refresh', route_name='auth_refresh',
                    request_method='GET', renderer='json')
    config.add_view('.views.auth.chpass', route_name='auth_chpass',
                    request_method='POST', renderer='json')

    # %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    # DbAdmin views
    # %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    config.scan('.views.dbadmin')

    # %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    # Proxy view
    # %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    config.add_route('proxy', '/api/dev/proxy/{encoded}')
    config.add_view('.views.proxy.ProxyView', route_name='proxy')

    # muppy view
    config.scan('.views.memleak')

    use_pj = asbool(settings.get('api.use_pyramid_jsonapi', False))

    # FIXME it seems that cornice is also interfering
    # with "notfound" view?
    # https://cornice.readthedocs.io/en/stable/faq.html#cornice-registers-exception-handlers-how-do-i-deal-with-it # noqa
    # See if we can handle 404 with different views based on route
    # FIXME jsonapi has "notfound" view
    scan_views = [
        'sitecontent', 'auth', 'todos',
        'useradmin',
        'wikipages',
        'ebcsv',
        'sunny',
        'hourly',
        'company',
        'places',
    ]
    if not use_pj and False:
        scan_views.append('notfound')
    for view in scan_views:
        config.scan('.views.%s' % view)

    include_garkbit_hubby = True
    if include_garkbit_hubby:
        config.add_route('meeting_calendar', '/rest/v0/main/hubcal')
        config.add_view('.views.hubby.MeetingCalendarViewer',
                        route_name='meeting_calendar',
                        renderer='json',)

        config.add_route('meeting_calendar_ts', '/hubcal1')
        config.add_view('.views.hubby.MeetingCalendarViewer',
                        route_name='meeting_calendar_ts',
                        renderer='json',)
        config.scan('.views.hubby')

    config.add_route('home', '/')
    config.scan('.views.client')

    config.include("akhet.static")
    config.add_static_route('garkbit', 'dist')
