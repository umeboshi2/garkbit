(self.webpackJsonp=self.webpackJsonp||[]).push([[7],{17:function(e,t,n){"use strict";var o=f(n(4)),r=(f(n(0)),f(n(1))),i=n(2);f(n(9));n(60),n(62),n(63);var a,l,u,s=f(n(44)),c=f(n(48));function f(e){return e&&e.__esModule?e:{default:e}}n(64),n(65),l=r.default.Radio.channel("global"),r.default.Radio.channel("messages"),null===localStorage.getItem("page-size")&&localStorage.setItem("page-size",10),l.reply("main:app:set-pagesize",function(e){return localStorage.setItem("page-size",e)}),l.reply("main:app:get-pagesize",function(){return localStorage.getItem("page-size")}),n(66),n(71),l.reply("main:app:switch-theme",function(e){var t;return t="/assets/stylesheets/bootstrap-"+e+".css",(0,o.default)('head link[href^="/assets/stylesheets/bootstrap-"]').attr("href",t)}),l.reply("main:app:set-theme",function(e){return localStorage.setItem("main-theme",e)}),l.reply("main:app:get-theme",function(){return localStorage.getItem("main-theme")}),l.reply("export-to-file",function(e){return(0,c.default)(e)}),a=function(){var e=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.View),t);function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.behaviors=[s.default],e.prototype.ui={close_btn:"#close-modal div"},e}.call(void 0),l.reply("main:app:BaseModalView",function(){return a}),u=function(e,t){var n,o=1<arguments.length&&void 0!==t&&t;return(n=l.request("main:app:object").getView().getRegion("modal")).backdrop=o,n.show(e)},l.reply("show-modal",function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];return console.warn("show-modal",t),u(e,!1)})},18:function(e){e.exports={name:"garkbit",version:"0.1.0",description:"The waiter at the end of the universe.",main:"index.js",directories:{doc:"docs",test:"tests"},scripts:{build:"NODE_ENV=production webpack --mode production --progress --colors",watch:"webpack --config webpack.config.coffee -d --progress --colors --watch",starthot:"NODE_ENV=development webpack-dev-server --hot --mode development",start:"NODE_ENV=development webpack-dev-server --mode development",test:'echo "Error: no test specified" && exit 1'},repository:{type:"git",url:"git+https://github.com/umeboshi2/garkbit.git"},author:"Joseph Rawson <joseph.rawson.works@gmail.com>",license:"UNLICENSED",bugs:{url:"https://github.com/umeboshi2/garkbit/issues"},homepage:"https://github.com/umeboshi2/garkbit#readme",devDependencies:{"applet-bumblr":"github:umeboshi2/applet-bumblr","applet-moviedb":"github:umeboshi2/applet-moviedb","b64-to-blob":"^1.2.19","babel-core":"^6.26.3","babel-minify-webpack-plugin":"^0.3.1","babel-plugin-dynamic-import-webpack":"^1.1.0","babel-preset-env":"^1.7.0","backbone.localstorage":"^2.0.2","backbone.lovefield":"^0.1.6","backbone.themoviedb":"github:umeboshi2/backbone.themoviedb",bootstrap:"^4.3.1","bootstrap-fileinput":"^5.0.3","bootstrap-star-rating":"^4.0.6",bower:"^1.8.8","chunk-manifest-webpack-plugin":"^1.1.2","clean-webpack-plugin":"^3.0.0","coffee-loader":"^0.9.0",coffeescript:"^2.4.1","compression-webpack-plugin":"^2.0.0","css-loader":"^2.1.1",elizabot:"0.0.2","exports-loader":"^0.7.0","expose-loader":"^0.7.5","extract-loader":"^3.1.0","extract-text-webpack-plugin":"^4.0.0-beta.0","favicons-webpack-plugin":"0.0.9","file-loader":"^3.0.1","file-saver":"^2.0.2","font-awesome":"^4.7.0",fullcalendar:"^3.10.0",gentelella:"^1.4.0","google-fonts-webpack-plugin":"^0.4.4",gulp:"^4.0.2","gulp-coffee":"^3.0.3","gulp-concat":"^2.6.1","gulp-nodemon":"^2.4.2","gulp-size":"^3.0.0","gulp-sourcemaps":"^2.6.5","gulp-uglify":"^3.0.2","gulp-util":"^3.0.8",handlebars:"^4.1.2","html-webpack-harddisk-plugin":"^1.0.1","html-webpack-plugin":"github:umeboshi2/html-webpack-plugin#issue-218","imports-loader":"^0.8.0",ini:"^1.3.5","jquery-ui":"^1.12.1","js-beautify":"^1.10.0","json-view":"github:umeboshi2/json-view",keycode:"^2.2.0",leaflet:"^1.5.1",lovefield:"^2.1.12","mini-css-extract-plugin":"^0.7.0",minimist:"^1.2.0",mocha:"^6.1.4","mocha-webpack":"^1.1.0",moment:"^2.24.0","node-noto-emoji":"^0.1.1","node-sass":"^4.12.0","optimize-css-assets-webpack-plugin":"^5.0.1",packery:"^2.1.2","pdfjs-dist":"^2.0.943","popper.js":"^1.15.0",pug:"^2.0.3","raw-loader":"^2.0.0","resolve-url-loader":"^3.1.0","sass-loader":"^7.1.0",shelljs:"^0.8.3","stats-webpack-plugin":"^0.7.0","style-loader":"^0.23.1",tbirds:"^0.4.30","themoviedb-javascript-library":"^3.0.3","uglifyjs-webpack-plugin":"^2.1.3","url-loader":"^1.1.2",webpack:"^4.33.0","webpack-bundle-analyzer":"^3.3.2","webpack-cli":"^3.3.2","webpack-dev-server":"^3.5.1","webpack-manifest-plugin":"^2.0.4","worker-loader":"^2.0.0","xml2js-parseonly":"github:umeboshi2/node-xml2js",xterm:"^3.14.2"}}},28:function(e,t,n){"use strict";e.exports=function(e){return 0===Object.keys(e).length&&e.constructor===Object}},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.confirmDeleteTemplateFactory=void 0;var o,r,i,a,l,u=p(n(1)),s=p(n(3)),c=(p(n(34)),n(33)),f=n(20),d=p(n(19));function p(e){return e&&e.__esModule?e:{default:e}}o=u.default.Radio.channel("global"),a=function(n){return s.default.renderable(function(t){var e;return e=".btn.btn-secondary.btn-sm",s.default.span(".mr-auto",function(){var e;return e="#"+n.routeName+"/"+n.name+"/view/"+t.id,s.default.a({href:e},t[n.entryField])}),s.default.span(".ml-auto.btn-group.pull-right",function(){return s.default.button(".edit-item."+e+".btn-info.fa.fa-edit"," edit"),s.default.button(".delete-item."+e+".btn-danger.fa.fa-close"," delete")})})},l=function(t){return s.default.renderable(function(e){return s.default.div(".listview-header",function(){return s.default.text((0,d.default)(t.name))}),s.default.hr(),s.default.div("#"+t.name+"-container.list-group")})},i=function(i){return s.default.renderable(function(e){var t,n,o,r;for(s.default.div(".listview-header",e[i.entryField]),n=0,o=(r=i.fieldList).length;n<o;n++)t=r[n],(0,c.make_field_input)(t)(e);return s.default.input(".btn.btn-default",{type:"submit",value:"Submit"}),s.default.div(".spinner.fa.fa-spinner.fa-spin")})},t.confirmDeleteTemplateFactory=r=function(t){return s.default.renderable(function(e){return s.default.div(".modal-dialog",function(){return s.default.div(".modal-content",function(){return s.default.h3("Do you really want to delete "+e[t.entryField]+"?"),s.default.div(".modal-body",function(){return s.default.div("#selected-children")}),s.default.div(".modal-footer",function(){return s.default.ul(".list-inline",function(){return"btn.btn-default.btn-sm",s.default.li("#confirm-delete-button",function(){return(0,f.modal_close_button)("OK","check")}),s.default.li("#cancel-delete-button",function(){return(0,f.modal_close_button)("Cancel")})})})})})})},o.reply("crud:template:item",function(e){return a(e)}),o.reply("crud:template:list",function(e){return l(e)}),o.reply("crud:template:form",function(e){return i(e)}),t.confirmDeleteTemplateFactory=r},30:function(e,t,n){"use strict";var o,r,i,a,l;o=n(1),i=n(2),l=n(3),n(10),n(6),n(5),n(14),n(17),a=n(18),new o.Model(a),n(31),o.Radio.channel("global"),o.Radio.channel("messages"),r=function(){var e=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.View),t);function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=l.renderable(function(t){return".col-sm-2.col-sm-offset-10",".col-sm-2.col-sm-offset-1",l.div(".col-sm-10.col-sm-offset-1",function(){return l.table(".table",function(){return l.tr(function(){var e;return 0<=t.remaining?(86400,e=Math.floor(t.remaining/86400),l.td(e+" days left for "+t.token.name)):l.td("Time expired for "+t.token.name),l.td("Version: "+t.version)})})})}),e}.call(void 0),e.exports=r},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a=n(32),l=(o=a)&&o.__esModule?o:{default:o};r={id:"demo-menu",label:"Demos",menu:[{label:"Taxes",url:"#taxes",icon:".fa.fa-dollar"},{label:"ELIZA Terminal",url:"#eliza",icon:".fa.fa-terminal.text-light.bg-dark"},{label:"Movie DB API Demo",url:"#moviedb"},{label:"TVMaze API/IndexedDb Demo",url:"#tvmaze"}]},i={id:"misc-menu",label:"Misc Applets",menu:[{label:"Old Time Radio",url:"#netark/otrr/list"},{label:"Bumblr",url:"#bumblr"},{label:"Todos",url:"#todos",needUser:!0},{label:"TestUpload",url:"#frontdoor/upload",needUser:!0},{label:"hubby",url:"#hubby",needUser:!0},{label:"sofi",url:"#sofi",needUser:!0},{label:"wikipages",url:"#wikipages",needUser:!0}]},l.default.navbarEntries=[r,i],t.default=l.default},32:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=f(n(3)),a=f(n(12)),l=f(n(72)),u=f(n(11)),s=f(n(49)),c=f(n(76));function f(e){return e&&e.__esModule?e:{default:e}}o=function(){var e=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default),t);function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=i.default.renderable(function(){return i.default.div("#modal"),i.default.div(".container-fluid",function(){return i.default.div("#navbar-view-container"),i.default.div(".row.fixed-bottom",function(){return i.default.div(".col-md-4",function(){return i.default.div("#messages")})}),i.default.div("#applet-content"),i.default.div("#footer")})}),e.prototype.regions={messages:"#messages",navbar:"#navbar-view-container",modal:a.default,applet:"#applet-content",footer:"#footer"},e}.call(void 0),r=i.default.renderable(function(t){var e;return e=".pt-2.pl-2.pr-2",e+=".mb-0.rounded.border.border-secondary","/assets/Cartoon-Concierge.svg",i.default.a(".navbar-brand.bg-body-d5"+e,{href:t.url},function(){var e;return i.default.img(".mb-2",{src:"/assets/Cartoon-Concierge.svg",style:"width:1.5rem;height:1.5rem"}),e=s.default.get("tm"),i.default.span(".mt-2",""+t.label+e)}),i.default.span(".toggle-container")}),l.default.userMenuApp=c.default,l.default.layout=o,l.default.hasUser=!0,l.default.appletRoutes.profile="userprofile",l.default.brand.label="Garkbit",l.default.brand.url="#",l.default.navbarBrandTemplate=r,l.default.authToken.refreshInterval="5m",l.default.authToken.refreshIntervalMultiple=3,l.default.authToken.loginUrl="#frontdoor/login",l.default.appRegion="#root-div",t.default=l.default},65:function(e,t,n){},66:function(e,t,n){"use strict";n(67),n(29),n(68)},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}f(n(4));var i,a,l,u=f(n(0)),s=f(n(1)),c=(f(n(2)),f(n(3)),f(n(6)),n(36));function f(e){return e&&e.__esModule?e:{default:e}}a=s.default.Radio.channel("global"),l=s.default.Radio.channel("messages"),i=function(){var e=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.ExtraController),o(t,[{key:"setupLayoutIfNeeded",value:function(){return this.mainController.setupLayoutIfNeeded()}},{key:"showChildView",value:function(e,t){return this.mainController.layout.showChildView(e,t)}},{key:"listItems",value:function(n){var o,e,r=this;return this.setupLayoutIfNeeded(),(e=(o=this.getChannel().request("db:"+this.viewOptions.modelName+":collection")).fetch({data:{columns:this.defaultColumns}})).done(function(){var e,t;return e=u.default.extend({collection:o},r.viewOptions),t=new n(e),r.showChildView("content",t),r.scrollTop()}),e.fail(function(){return l.request("danger","Failed to get "+r.viewOptions.label+"s!")})}},{key:"viewItem",value:function(t,e){var n,o,r=this;return this.setupLayoutIfNeeded(),(o=(n=this.getChannel().request("db:"+this.viewOptions.modelName+":get",e)).fetch()).done(function(){var e;return e=new t({model:n}),r.showChildView("content",e),r.scrollTop()}),o.fail(function(){return l.request("danger","Failed to get "+r.viewOptions.label+"!")})}},{key:"_formViewOptions",value:function(e){return e=e||{},(e=u.default.extend(e,this.viewOptions)).template=a.request("crud:template:form",e),e.channelName=this.getOption("channelName"),e}},{key:"addItem",value:function(e){var t;return this.setupLayoutIfNeeded(),t=new e(this._formViewOptions()),this.showChildView("content",t),this.scrollTop()}},{key:"editItem",value:function(t,e,n){var o,r,i=this;return this.setupLayoutIfNeeded(),n=this._formViewOptions(n),o=this.getChannel().request("db:"+this.viewOptions.modelName+":get",e),(r=(n.model=o).fetch()).done(function(){var e;return e=new t(n),i.showChildView("content",e),i.scrollTop()}),r.fail(function(){return l.request("danger","Failed to get "+i.viewOptions.label+"!")})}}]),t);function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.defaultColumns=["id","name"],e.prototype.channelName="global",e.prototype.viewOptions={fieldList:["name"],entryField:"name",modelName:"model",label:"Model"},e}.call(void 0),a.reply("main:app:CrudController",function(){return console.warn("use crud:Controller instead"),i}),a.reply("crud:Controller",function(){return i}),t.default=i},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseEditFormView=t.BaseNewFormView=t.BaseListView=t.BaseItemView=void 0;var o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i,a,l,u,s,c,f,d,p,m=g(n(1)),b=g(n(2)),h=(g(n(3)),g(n(35))),y=g(n(5)),v=g(n(40));function g(e){return e&&e.__esModule?e:{default:e}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(12),n(20).modal_close_button;var k=n(29);function j(){return w(this,j),_(this,(j.__proto__||Object.getPrototypeOf(j)).apply(this,arguments))}function P(){return w(this,P),_(this,(P.__proto__||Object.getPrototypeOf(P)).apply(this,arguments))}function V(){return w(this,V),_(this,(V.__proto__||Object.getPrototypeOf(V)).apply(this,arguments))}function N(){return w(this,N),_(this,(N.__proto__||Object.getPrototypeOf(N)).apply(this,arguments))}p=k.confirmDeleteTemplateFactory,f=m.default.Radio.channel("global"),d=m.default.Radio.channel("messages"),c=function(){var e=(O(t,b.default.View),o(t,[{key:"events",value:function(){return{"click @ui.confirm_delete":"confirm_delete"}}},{key:"confirm_delete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done(function(){return d.request("success",e+" deleted.")}),t.fail(function(){return d.request("danger",e+" NOT deleted.")})}}]),t);function t(){return w(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.ui={confirm_delete:"#confirm-delete-button",cancel_button:"#cancel-delete-button"},e}.call(void 0),t.BaseItemView=l=function(){var e=(O(t,b.default.View),o(t,[{key:"className",value:function(){return"list-group-item "+this.item_type+"-item row"}},{key:"ui",value:function(){return{edit_item:".edit-item",delete_item:".delete-item",item:".list-item"}}},{key:"events",value:function(){return{"click @ui.edit_item":"edit_item","click @ui.delete_item":"delete_item"}}},{key:"edit_item",value:function(){return(0,y.default)("#"+this.route_name+"/"+this.item_type+"/edit/"+this.model.id)}},{key:"_show_modal",value:function(e,t){var n;return(n=f.request("main:app:object").getView().getRegion("modal")).backdrop=t,n.show(e)}},{key:"delete_item",value:function(){var e;return e=new c({model:this.model,template:p(this.options)}),this._show_modal(e,!0)}}]),t);function t(){return w(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.tagName="li",e}.call(void 0),t.BaseListView=(O(j,b.default.View),o(j,[{key:"regions",value:function(){return{itemList:"#"+this.item_type+"-container"}}},{key:"ui",value:function(){return{addItem:"#add-"+this.item_type}}},{key:"onRender",value:function(){var e;return e=new b.default.CollectionView({tagName:"ul",className:"list-group",collection:this.collection,childView:this.childView,childViewOptions:this.options}),this.showChildView("itemList",e)}},{key:"events",value:function(){return{"click @ui.addItem":"addItem"}}},{key:"addItem",value:function(){return(0,y.default)("#"+this.route_name+"/"+this.item_type+"/add")}}]),u=j),O(P,h.default),o(P,[{key:"ui",value:function(){return(0,v.default)(this.getOption("fieldList"))}},{key:"updateModel",value:function(){var e,t,n,o,r;for(r=[],n=0,o=(t=this.getOption("fieldList")).length;n<o;n++)e=t[n],r.push(this.model.set(e,this.ui[e].val()));return r}},{key:"getViewUrl",value:function(){return"#"+this.options.routeName+"/"+this.options.modelName+"/view/"+this.model.id}},{key:"onSuccess",value:function(e){var t;return t=this.model.get(this.options.entryField)+" saved successfully.",d.request("success",t),(0,y.default)(this.getViewUrl())}}]),a=P,t.BaseNewFormView=(O(V,a),o(V,[{key:"createModel",value:function(){var e;return e=this.getOption("modelName"),m.default.Radio.channel(this.getOption("channelName")).request("db:"+e+":new")}},{key:"saveModel",value:function(){var e;return e=this.getOption("modelName"),m.default.Radio.channel(this.getOption("channelName")).request("db:"+e+":collection").add(this.model),function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0}(V.prototype.__proto__||Object.getPrototypeOf(V.prototype),"saveModel",this).call(this)}}]),s=V),t.BaseEditFormView=(O(N,a),o(N,[{key:"createModel",value:function(){return this.model}}]),i=N),f.reply("crud:view:item",function(){return l}),f.reply("crud:view:list",function(){return u}),f.reply("crud:view:new-item",function(){return s}),f.reply("crud:view:edit-item",function(){return i}),t.BaseItemView=l,t.BaseListView=u,t.BaseNewFormView=s,t.BaseEditFormView=i},71:function(e,t,n){"use strict";var o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i,a,l,u;function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}n(4),u=n(0),i=n(1),n(2),a=i.Radio.channel("global"),i.Radio.channel("messages"),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,i.Model),o(s,[{key:"url",value:function(){return"/assets/documents/"+this.id+".md"}},{key:"fetch",value:function(e){return e=u.extend(e||{},{dataType:"text"}),function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0}(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"fetch",this).call(this,e)}},{key:"parse",value:function(e){return{content:e}}}]),l=s,a.reply("main:app:get-document",function(e){return new l({id:e})}),e.exports={StaticDocument:l}},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=s(n(1)),a=s(n(2)),l=s(n(7)),u=s(n(3));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p,m,b,h,y,v,g=[].indexOf;function w(){return c(this,w),f(this,(w.__proto__||Object.getPrototypeOf(w)).apply(this,arguments))}p=i.default.Radio.channel("global"),h=".navbar-entry.nav-link.dropdown-item",y=u.default.renderable(function(e){return u.default.li(".nav-item.dropdown",function(){return u.default.a(".nav-link.dropdown-toggle",{"data-toggle":"dropdown"},function(){return u.default.text(e.guestUserName),u.default.b(".caret")}),u.default.ul(".dropdown-menu",function(){return u.default.li(function(){return u.default.a(h,{href:e.loginUrl},"login")})})})}),v=u.default.renderable(function(e){return u.default.li(".nav-item.dropdown",function(){return u.default.a(".nav-link.dropdown-toggle",{"data-toggle":"dropdown"},function(){return u.default.text(e.name),u.default.b(".caret")}),u.default.ul(".dropdown-menu",function(){return u.default.li(function(){return u.default.a(h,{href:"#profile"},"User Profile")}),0<=g.call(e.groups,"admin")&&(u.default.li(function(){return u.default.a(h,{href:"/admin"},"Administration")}),u.default.li(function(){return u.default.a(h,{href:"#dbadmin"},"Database")})),u.default.li(function(){return u.default.a(h,{href:"#frontdoor/logout"},"logout")})})})}),b=function(){var e=(d(t,a.default.View),o(t,[{key:"templateContext",value:function(){return{loginUrl:this.options.appConfig.loginUrl,guestUserName:this.options.appConfig.guestUserName,model:this.model||new i.default.Model,options:this.options}}},{key:"template",value:function(e){return(null!=e?e.name:void 0)?v(e):y(e)}}]),t);function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.tagName="ul",e.prototype.className="navbar-nav ml-auto",e}.call(void 0),d(w,l.default.App),o(w,[{key:"initialize",value:function(e){var t,n;return t=p.request("main:app:decode-auth-token"),(null!=(this.options.user=t)?t.groups:void 0)||(t.groups=[]),n=new b({appConfig:this.getOption("appConfig"),model:new i.default.Model(this.getOption("user"))}),this.showView(n)}}]),m=w,t.default=m}}]);
//# sourceMappingURL=admin~index-c0d895f4047e4cd6431e.js.map