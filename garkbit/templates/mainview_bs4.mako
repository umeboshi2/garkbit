<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="pyramid web application">
    <meta name="author" content="Pylons Project">
    <link href="https://fonts.googleapis.com/css?family=Architects+Daughter" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Rambla" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet" type="text/css">
    <%
      assets = list()
      icon_links = req.favicon_stats['html']
      stats  = req.webpack_entrypoints
      assets = stats['entrypoints'][appname]['assets']
      styles = [a for a in assets if a.endswith('.css')]
      scripts = [a for a in assets if a.endswith('.js')]
    %>
    %for link in icon_links:
    ${link|n}
    %endfor
    %for style in styles:
    <link href="${style}" rel="stylesheet", type="text/css">
    %endfor
    
  </head>
  <body>
    <div id="root-div" class="container-fluid">
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-6 jumbotron">
                <h1>Loading ...<i class="fa fa-spinner fa-spin"></i></h1>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>
    %for script in scripts:
    <script type="text/javascript" charset="utf-8" src="${script}"></script>
    %endfor
  </body>
</html>
