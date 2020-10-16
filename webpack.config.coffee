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
# buildCssLoader = require 'tbirds/webpack-config/sass-loader-chain'
woffRule = require 'tbirds/webpack-config/woff-rule'
imgVersionedRule = require 'tbirds/webpack-config/img-file-loader-versioned'

makeEntrypointsPlugin = require 'tbirds/webpack-config/entrypoints-plugin'
makeIgnoreMomentLocales = require 'tbirds/webpack-config/ignore-moment-locales-plugin' #noqa
makeFaviconPlugin = require 'tbirds/webpack-config/favicon-plugin'

########################################################


sassOptions =
  includePaths: [
    'node_modules/compass-mixins/lib'
    'node_modules/bootstrap/scss'
  ]

buildCssLoader =
  development: [
    {
      loader: 'style-loader'
    },{
      loader: 'css-loader'
    },{
      loader: 'sass-loader'
      options:
        sassOptions: sassOptions
    }
  ]
  production:
    [
      MiniCssExtractPlugin.loader
      {
        loader: 'css-loader'
      },{
        loader: "sass-loader"
        options:
          sassOptions: sassOptions
      }
    ]

########################################################



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
  #target: 'self'
  # FIXME: why are we using globalObject?
  globalObject: 'self'
  
    
loadCssRule =
  test: /\.css$/
  use: ['style-loader', 'css-loader']

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
  new FaviconPlugin
    logo: './assets/Cartoon-Concierge.svg'
    title: 'Garkbit'
    icons:
      android: false
      appleIcon: false
      appleStartup: false
      favicons: true
      firefox: false
      opengraph: false
      twitter: false
      yandex: false
      windows: false
  #new HtmlPlugin
  #  template: './client/templates/index.coffee'
  #  filename: adminPage[BuildEnvironment]
  #  entryPoint: 'admin'
  #  inject: true
  new HtmlPlugin
    template: './client/templates/index.coffee'
    filename: 'index.html'
    entryPoint: 'index'
    inject: true
  ]


extraPlugins = []

WebPackOptimization =
  splitChunks:
    chunks: 'all'

terserPluginOptions =
  sourceMap: true
  parallel: true
  terserOptions:
    warnings: true

cleanWebpackOpts =
  verbose: true

if BuildEnvironment is 'production'
  { CleanWebpackPlugin } = require 'clean-webpack-plugin'
  CompressionPlugin = require 'compression-webpack-plugin'
  UglifyJsPlugin = require 'uglifyjs-webpack-plugin'
  OptimizeCssAssetsPlugin = require 'optimize-css-assets-webpack-plugin'
  TerserPlugin = require 'terser-webpack-plugin'
  
  extraPlugins.push new CleanWebpackPlugin(cleanWebpackOpts)
  WebPackOptimization.minimizer = [
   new OptimizeCssAssetsPlugin()
   new TerserPlugin terserPluginOptions

  ]
  
AllPlugins = common_plugins.concat extraPlugins


WebPackConfig =
  devtool: 'source-map'
  mode: BuildEnvironment
  optimization: WebPackOptimization
  entry:
    index: './client/entries/index.coffee'
  output: WebPackOutput
  plugins: AllPlugins
  module:
    rules: [
      loadCssRule
      {
        test: /\.scss$/
        use: buildCssLoader[BuildEnvironment]
      }
      #coffeeLoaderRule[BuildEnvironment]
      coffeeLoaderRule.production
      woffRule
      imgVersionedRule
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
      common: path.join __dirname, 'client/common'
  stats:
    colors: true
    modules: false
    chunks: true
    #maxModules: 9999
    #reasons: true


if BuildEnvironment is 'development'
  WebPackConfig.devtool = 'source-map'
  WebPackConfig.watch = true
  WebPackConfig.watchOptions =
    ignored: [
      'node_modules'
      '^\/.#'
    ]
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
