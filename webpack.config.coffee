path = require 'path'

webpack = require 'webpack'

ManifestPlugin = require 'webpack-manifest-plugin'
StatsPlugin = require 'stats-webpack-plugin'
MiniCssExtractPlugin = require 'mini-css-extract-plugin'
HtmlPlugin = require 'html-webpack-plugin'
FaviconPlugin = require 'favicons-webpack-plugin'

BuildEnvironment = require 'tbirds/webpack-config/buildenv'
DefinePluginOpts = require 'tbirds/webpack-config/define-opts'
coffeeLoaderRule = require 'tbirds/webpack-config/coffee-loader-rule'
buildCssLoader = require 'tbirds/webpack-config/sass-loader-chain'
woffRule = require 'tbirds/webpack-config/woff-rule'
imgPlainRule = require 'tbirds/webpack-config/img-file-loader-plain'
imgVersionedRule = require 'tbirds/webpack-config/img-file-loader-versioned'


makeEntrypointsPlugin = require 'tbirds/webpack-config/entrypoints-plugin'
makeIgnoreMomentLocales = require 'tbirds/webpack-config/ignore-moment-locales-plugin' #noqa
makeFaviconPlugin = require 'tbirds/webpack-config/favicon-plugin'

# handles output filename for js and css
outputFilename = (ext) ->
  d = "[name].#{ext}"
  p = "[name]-[chunkhash].#{ext}"
  return
    development: d
    production: p
    
# set output filenames
WebPackOutputFilename = outputFilename 'js'
CssOutputFilename = outputFilename 'css'

# path to build directory
localBuildDir =
  development: "dist"
  production: "garkbit/dist"


# set publicPath
publicPath = localBuildDir[BuildEnvironment]
if not publicPath.endsWith '/'
  publicPath = "#{publicPath}/"
  
WebPackOutput =
  filename: WebPackOutputFilename[BuildEnvironment]
  path: path.join __dirname, localBuildDir[BuildEnvironment]
  #publicPath: publicPath

    
loadCssRule =
  test: /\.css$/
  use: ['style-loader', 'css-loader']

# workaround for html on dev server
adminPage =
  development: 'admin'
  production: 'admin.html'

common_plugins = [
  new webpack.DefinePlugin DefinePluginOpts[BuildEnvironment]
  new StatsPlugin 'stats.json',
    chunkModules: true
    source: false
  makeEntrypointsPlugin()
  new ManifestPlugin()
  makeIgnoreMomentLocales()
  new MiniCssExtractPlugin
    filename: CssOutputFilename[BuildEnvironment]
  new HtmlPlugin
    template: './index.coffee'
    filename: 'index.html'
    entryPoint: 'index'
  new HtmlPlugin
    template: './index.coffee'
    filename: adminPage[BuildEnvironment]
    entryPoint: 'admin'
  makeFaviconPlugin
    logo: './assets/zuki.png'
    title: 'Zuki'
  ]
    

extraPlugins = []

WebPackOptimization =
  splitChunks:
    chunks: 'all'

uglifyOptions =
  sourceMap: true
  uglifyOptions:
    compress:
      warnings: true
    warnings: true


if BuildEnvironment is 'production'
  CleanPlugin = require 'clean-webpack-plugin'
  CompressionPlugin = require 'compression-webpack-plugin'
  UglifyJsPlugin = require 'uglifyjs-webpack-plugin'
  OptimizeCssAssetsPlugin = require 'optimize-css-assets-webpack-plugin'
  extraPlugins.push new CleanPlugin(localBuildDir[BuildEnvironment])
  #extraPlugins.push new CompressionPlugin()
  WebPackOptimization.minimizer = [
   new OptimizeCssAssetsPlugin()
   new UglifyJsPlugin uglifyOptions
  ]
  
AllPlugins = common_plugins.concat extraPlugins


WebPackConfig =
  devtool: 'source-map'
  mode: BuildEnvironment
  optimization: WebPackOptimization
  entry:
    index: './client/entries/index.coffee'
    admin: './client/entries/admin.coffee'
  output: WebPackOutput
  plugins: AllPlugins
  module:
    rules: [
      loadCssRule
      {
        test: /\.scss$/
        use: buildCssLoader[BuildEnvironment]
      }
      coffeeLoaderRule[BuildEnvironment]
      woffRule
      # FIXME combine next two rules
      imgVersionedRule
      imgPlainRule
    ]
  resolve:
    extensions: [".wasm", ".mjs", ".js", ".json", ".coffee"]
    alias:
      applets: path.join __dirname, 'client/applets'
      sass: path.join __dirname, 'sass'
      compass: "node_modules/compass-mixins/lib/compass"
      tbirds: 'tbirds/src'
      # https://github.com/wycats/handlebars.js/issues/953
      handlebars: 'handlebars/dist/handlebars'
  stats:
    colors: true
    modules: false
    chunks: true
    #maxModules: 9999
    #reasons: true


if BuildEnvironment is 'development'
  WebPackConfig.devtool = 'source-map'
  WebPackConfig.devServer =
    host: 'localhost'
    #host: '0.0.0.0'
    disableHostCheck: true
    port: 8080
    index: 'index.html'
    historyApiFallback: true
    # cors for using a server on another port
    headers: {"Access-Control-Allow-Origin": "*"}
    proxy:
      '/api/*': 'http://localhost:8081'
      '/rest/*': 'http://localhost:8081'
      '/auth/*': 'http://localhost:8081'
      '/static/*': 'http://localhost:8081'
      '/assets/*': 'http://localhost:8081'
      '/login': 'http://localhost:8081'
      #'/admin': 'http://localhost:8081'
      '/photos': 'http://localhost:8081'
      '/thumbs': 'http://localhost:8081'
    stats:
      colors: true
      modules: false
      chunks: true
      #maxModules: 9999
      #reasons: true
      
module.exports = WebPackConfig
