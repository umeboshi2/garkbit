(self.webpackJsonp=self.webpackJsonp||[]).push([[9],{13:function(e){e.exports={name:"garkbit",version:"0.1.0",description:"The waiter at the end of the universe.",main:"index.js",directories:{doc:"docs",test:"tests"},scripts:{build:"NODE_ENV=production webpack --mode production --progress --colors",watch:"webpack --config webpack.config.coffee -d --progress --colors --watch",starthot:"NODE_ENV=development webpack-dev-server --hot --mode development",start:"NODE_ENV=development webpack-dev-server --mode development",test:'echo "Error: no test specified" && exit 1'},repository:{type:"git",url:"git+https://github.com/umeboshi2/garkbit.git"},author:"Joseph Rawson <joseph.rawson.works@gmail.com>",license:"UNLICENSED",bugs:{url:"https://github.com/umeboshi2/garkbit/issues"},homepage:"https://github.com/umeboshi2/garkbit#readme",devDependencies:{"applet-bumblr":"github:umeboshi2/applet-bumblr","applet-moviedb":"github:umeboshi2/applet-moviedb","babel-core":"^6.26.3","babel-minify-webpack-plugin":"^0.3.1","babel-plugin-dynamic-import-webpack":"^1.0.2","babel-preset-env":"^1.7.0","backbone.localstorage":"^2.0.2","backbone.lovefield":"^0.1.5","backbone.themoviedb":"github:umeboshi2/backbone.themoviedb",bootstrap:"^4.1.1","bootstrap-fileinput":"^4.4.8","bootstrap-star-rating":"^4.0.2",bower:"^1.8.4","chunk-manifest-webpack-plugin":"^1.1.2","clean-webpack-plugin":"^0.1.19","coffee-loader":"^0.9.0",coffeescript:"^2.3.1","compression-webpack-plugin":"^1.1.11","css-loader":"^0.28.11","exports-loader":"^0.7.0","expose-loader":"^0.7.5","extract-loader":"^2.0.1","extract-text-webpack-plugin":"^4.0.0-beta.0","favicons-webpack-plugin":"0.0.9","file-loader":"^1.1.11","file-saver":"^1.3.8","font-awesome":"^4.7.0",fullcalendar:"^3.9.0",gentelella:"^1.4.0","google-fonts-webpack-plugin":"^0.4.4",gulp:"^3.9.1","gulp-coffee":"^3.0.2","gulp-concat":"^2.6.1","gulp-nodemon":"^2.2.1","gulp-size":"^3.0.0","gulp-sourcemaps":"^2.6.4","gulp-uglify":"^3.0.0","gulp-util":"^3.0.8",handlebars:"^4.0.11","html-webpack-harddisk-plugin":"^0.2.0","html-webpack-plugin":"github:umeboshi2/html-webpack-plugin#issue-218","imports-loader":"^0.8.0",ini:"^1.3.5","jquery-ui":"^1.12.1","js-beautify":"^1.7.5","json-view":"github:umeboshi2/json-view",keycode:"^2.2.0",leaflet:"^1.3.1",lovefield:"^2.1.12","mini-css-extract-plugin":"^0.4.1",minimist:"^1.2.0",mocha:"^5.2.0","mocha-webpack":"^1.1.0","node-noto-emoji":"^0.1.1","node-sass":"^4.9.0","optimize-css-assets-webpack-plugin":"^4.0.3",packery:"^2.1.2","pdfjs-dist":"^2.0.489","popper.js":"^1.14.3",pug:"^2.0.3","raw-loader":"^0.5.1","resolve-url-loader":"^2.3.0","sass-loader":"^7.0.3",shelljs:"^0.8.2","stats-webpack-plugin":"^0.6.2","style-loader":"^0.21.0",tbirds:"^0.4.20","themoviedb-javascript-library":"^3.0.2","uglifyjs-webpack-plugin":"^1.2.7","url-loader":"^1.0.1",webpack:"^4.14.0","webpack-bundle-analyzer":"^2.13.1","webpack-cli":"^3.0.8","webpack-dev-server":"^3.1.4","webpack-manifest-plugin":"^2.0.3","worker-loader":"^2.0.0","xml2js-parseonly":"github:umeboshi2/node-xml2js"},dependencies:{}}},14:function(e,t,n){"use strict";var o=f(n(4)),r=(f(n(0)),f(n(1))),i=f(n(2));f(n(8));n(69),n(67),n(65);var a,u,l,s=f(n(41)),c=f(n(44));function f(e){return e&&e.__esModule?e:{default:e}}n(64),u=r.default.Radio.channel("global"),r.default.Radio.channel("messages"),null===localStorage.getItem("page-size")&&localStorage.setItem("page-size",10),u.reply("main:app:set-pagesize",function(e){return localStorage.setItem("page-size",e)}),u.reply("main:app:get-pagesize",function(){return localStorage.getItem("page-size")}),n(62),n(57),u.reply("main:app:switch-theme",function(e){var t;return t="/assets/stylesheets/bootstrap-"+e+".css",(0,o.default)('head link[href^="/assets/stylesheets/bootstrap-"]').attr("href",t)}),u.reply("main:app:set-theme",function(e){return localStorage.setItem("main-theme",e)}),u.reply("main:app:get-theme",function(){return localStorage.getItem("main-theme")}),u.reply("export-to-file",function(e){return(0,c.default)(e)}),a=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.View),t}();return e.prototype.behaviors=[s.default],e.prototype.ui={close_btn:"#close-modal div"},e}.call(void 0),u.reply("main:app:BaseModalView",function(){return a}),l=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(t=u.request("main:app:object").getView().getRegion("modal")).backdrop=n,t.show(e)},u.reply("show-modal",function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return console.warn("show-modal",t),l(e,!1)})},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=c(n(3)),a=c(n(11)),u=c(n(56)),l=c(n(15)),s=c(n(43));function c(e){return e&&e.__esModule?e:{default:e}}o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default),t}();return e.prototype.template=i.default.renderable(function(){return i.default.div("#modal"),i.default.div(".container-fluid",function(){return i.default.div("#navbar-view-container"),i.default.div(".row.fixed-bottom",function(){return i.default.div(".col-md-4",function(){return i.default.div("#messages")})}),i.default.div("#applet-content"),i.default.div("#footer")})}),e.prototype.regions={messages:"#messages",navbar:"#navbar-view-container",modal:a.default,applet:"#applet-content",footer:"#footer"},e}.call(void 0),r=i.default.renderable(function(e){var t,n;return t=".pt-2.pl-2.pr-2",t+=".mb-0.rounded.border.border-secondary",n="/assets/Cartoon-Concierge.svg",i.default.a(".navbar-brand.bg-body-d5"+t,{href:e.url},function(){var t;return i.default.img(".mb-2",{src:n,style:"width:1.5rem;height:1.5rem"}),t=s.default.get("tm"),i.default.span(".mt-2",""+e.label+t)}),i.default.span(".toggle-container")}),u.default.userMenuApp=n(52),u.default.layout=o,u.default.hasUser=!0,u.default.appletRoutes.profile="userprofile",u.default.brand.label="Garkbit",u.default.brand.url="#",u.default.navbarBrandTemplate=r,u.default.authToken.refreshInterval="5m",u.default.authToken.refreshIntervalMultiple=3,u.default.authToken.loginUrl="#frontdoor/login",u.default.appRegion="#root-div",t.default=u.default},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=n(19),a=(o=i)&&o.__esModule?o:{default:o};r={id:"misc-menu",label:"Misc Applets",menu:[{label:"Movie DB API Demo",url:"#moviedb"},{label:"Old Time Radio",url:"#netark/otrr/list"},{label:"TVMaze API/IndexedDb Demo",url:"#tvmaze"},{label:"Bumblr",url:"#bumblr"},{label:"Todos",url:"#todos",needUser:!0},{label:"TestUpload",url:"#frontdoor/upload",needUser:!0},{label:"hubby",url:"#hubby",needUser:!0},{label:"sofi",url:"#sofi",needUser:!0},{label:"wikipages",url:"#wikipages",needUser:!0}]},a.default.navbarEntries=[r],t.default=a.default},21:function(e,t,n){"use strict";var o,r,i,a,u;o=n(1),i=n(2),u=n(3),n(10),n(6),n(5),n(16),n(14),a=n(13),new o.Model(a),n(20),o.Radio.channel("global"),o.Radio.channel("messages"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.View),t}();return e.prototype.template=u.renderable(function(e){return".col-sm-2.col-sm-offset-10",".col-sm-2.col-sm-offset-1",u.div(".col-sm-10.col-sm-offset-1",function(){return u.table(".table",function(){return u.tr(function(){var t,n;return e.remaining>=0?(n=86400,t=Math.floor(e.remaining/n),u.td(t+" days left for "+e.token.name)):u.td("Time expired for "+e.token.name),u.td("Version: "+e.version)})})})}),e}.call(void 0),e.exports=r},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.confirmDeleteTemplateFactory=void 0;var o,r,i,a,u,l=d(n(1)),s=d(n(3)),c=(d(n(31)),n(30)),f=n(17),p=d(n(18));function d(e){return e&&e.__esModule?e:{default:e}}o=l.default.Radio.channel("global"),a=function(e){return s.default.renderable(function(t){var n;return n=".btn.btn-secondary.btn-sm",s.default.span(".mr-auto",function(){var n;return n="#"+e.routeName+"/"+e.name+"/view/"+t.id,s.default.a({href:n},t[e.entryField])}),s.default.span(".ml-auto.btn-group.pull-right",function(){return s.default.button(".edit-item."+n+".btn-info.fa.fa-edit"," edit"),s.default.button(".delete-item."+n+".btn-danger.fa.fa-close"," delete")})})},u=function(e){return s.default.renderable(function(t){return s.default.div(".listview-header",function(){return s.default.text((0,p.default)(e.name))}),s.default.hr(),s.default.div("#"+e.name+"-container.list-group")})},i=function(e){return s.default.renderable(function(t){var n,o,r,i;for(s.default.div(".listview-header",t[e.entryField]),o=0,r=(i=e.fieldList).length;o<r;o++)n=i[o],(0,c.make_field_input)(n)(t);return s.default.input(".btn.btn-default",{type:"submit",value:"Submit"}),s.default.div(".spinner.fa.fa-spinner.fa-spin")})},t.confirmDeleteTemplateFactory=r=function(e){return s.default.renderable(function(t){return s.default.div(".modal-dialog",function(){return s.default.div(".modal-content",function(){return s.default.h3("Do you really want to delete "+t[e.entryField]+"?"),s.default.div(".modal-body",function(){return s.default.div("#selected-children")}),s.default.div(".modal-footer",function(){return s.default.ul(".list-inline",function(){return"btn.btn-default.btn-sm",s.default.li("#confirm-delete-button",function(){return(0,f.modal_close_button)("OK","check")}),s.default.li("#cancel-delete-button",function(){return(0,f.modal_close_button)("Cancel")})})})})})})},o.reply("crud:template:item",function(e){return a(e)}),o.reply("crud:template:list",function(e){return u(e)}),o.reply("crud:template:form",function(e){return i(e)}),t.confirmDeleteTemplateFactory=r},23:function(e,t,n){"use strict";e.exports=function(e){return 0===Object.keys(e).length&&e.constructor===Object}},52:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,l,s,c,f,p,d,m,b,h,y=[].indexOf;u=n(1),s=n(2),c=n(9),b=n(3),l=u.Radio.channel("global"),d=".navbar-entry.nav-link.dropdown-item",m=b.renderable(function(e){return b.li(".nav-item.dropdown",function(){return b.a(".nav-link.dropdown-toggle",{"data-toggle":"dropdown"},function(){return b.text(e.guestUserName),b.b(".caret")}),b.ul(".dropdown-menu",function(){return b.li(function(){return b.a(d,{href:e.loginUrl},"login")})})})}),h=b.renderable(function(e){return b.li(".nav-item.dropdown",function(){return b.a(".nav-link.dropdown-toggle",{"data-toggle":"dropdown"},function(){return b.text(e.name),b.b(".caret")}),b.ul(".dropdown-menu",function(){return b.li(function(){return b.a(d,{href:"#profile"},"User Profile")}),y.call(e.groups,"admin")>=0&&(b.li(function(){return b.a(d,{href:"/admin"},"Administration")}),b.li(function(){return b.a(d,{href:"#dbadmin"},"Database")})),b.li(function(){return b.a(d,{href:"#frontdoor/logout"},"logout")})})})}),p=function(){var e=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,s.View),o(t,[{key:"templateContext",value:function(){return{loginUrl:this.options.appConfig.loginUrl,guestUserName:this.options.appConfig.guestUserName,model:this.model||new u.Model,options:this.options}}},{key:"template",value:function(e){return(null!=e?e.name:void 0)?h(e):m(e)}}]),t}();return e.prototype.tagName="ul",e.prototype.className="navbar-nav ml-auto",e}.call(void 0),f=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,c.App),o(t,[{key:"onBeforeStart",value:function(){var e;return this.setRegion(this.options.parentApp.getView().getRegion("userEntries")),e=l.request("main:app:decode-auth-token"),this.options.user=e}},{key:"onStart",value:function(){var e,t;return l,e=this.options.appConfig,t=new p({appConfig:e,model:new u.Model(this.options.user)}),this.showView(t)}}]),t}(),e.exports=f},57:function(e,t,n){"use strict";var o,r,i,a,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(4),a=n(0),o=n(1),n(2),r=o.Radio.channel("global"),o.Radio.channel("messages"),i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Model),u(t,[{key:"url",value:function(){return"/assets/documents/"+this.id+".md"}},{key:"fetch",value:function(e){return e=a.extend(e||{},{dataType:"text"}),function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"fetch",this).call(this,e)}},{key:"parse",value:function(e){return{content:e}}}]),t}(),r.reply("main:app:get-document",function(e){return new i({id:e})}),e.exports={StaticDocument:i}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseEditFormView=t.BaseNewFormView=t.BaseListView=t.BaseItemView=void 0;var o,r,i,a,u,l,s,c,f,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=v(n(1)),m=v(n(2)),b=(v(n(3)),v(n(32))),h=v(n(5)),y=v(n(37));function v(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(11),n(17).modal_close_button;var O=n(22);f=O.confirmDeleteTemplateFactory,s=d.default.Radio.channel("global"),c=d.default.Radio.channel("messages"),l=function(){var e=function(e){function t(){return g(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,m.default.View),p(t,[{key:"events",value:function(){return{"click @ui.confirm_delete":"confirm_delete"}}},{key:"confirm_delete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done(function(){return c.request("success",e+" deleted.")}),t.fail(function(){return c.request("danger",e+" NOT deleted.")})}}]),t}();return e.prototype.ui={confirm_delete:"#confirm-delete-button",cancel_button:"#cancel-delete-button"},e}.call(void 0),t.BaseItemView=i=function(){var e=function(e){function t(){return g(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,m.default.View),p(t,[{key:"className",value:function(){return"list-group-item "+this.item_type+"-item row"}},{key:"events",value:function(){return{"click @ui.edit_item":"edit_item","click @ui.delete_item":"delete_item"}}},{key:"edit_item",value:function(){return(0,h.default)("#"+this.route_name+"/"+this.item_type+"/edit/"+this.model.id)}},{key:"_show_modal",value:function(e,t){var n;return(n=s.request("main:app:object").getView().getRegion("modal")).backdrop=t,n.show(e)}},{key:"delete_item",value:function(){var e;return e=new l({model:this.model,template:f(this.options)}),this._show_modal(e,!0)}}]),t}();return e.prototype.tagName="li",e.prototype.ui={edit_item:".edit-item",delete_item:".delete-item",item:".list-item"},e}.call(void 0),t.BaseListView=a=function(e){function t(){return g(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,m.default.View),p(t,[{key:"regions",value:function(){return{itemList:"#"+this.item_type+"-container"}}},{key:"ui",value:function(){return{addItem:"#add-"+this.item_type}}},{key:"onRender",value:function(){var e;return e=new m.default.CollectionView({tagName:"ul",className:"list-group",collection:this.collection,childView:this.childView,childViewOptions:this.options}),this.showChildView("itemList",e)}},{key:"events",value:function(){return{"click @ui.addItem":"addItem"}}},{key:"addItem",value:function(){return(0,h.default)("#"+this.route_name+"/"+this.item_type+"/add")}}]),t}(),r=function(e){function t(){return g(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,b.default),p(t,[{key:"ui",value:function(){return(0,y.default)(this.getOption("fieldList"))}},{key:"updateModel",value:function(){var e,t,n,o,r;for(r=[],n=0,o=(t=this.getOption("fieldList")).length;n<o;n++)e=t[n],r.push(this.model.set(e,this.ui[e].val()));return r}},{key:"getViewUrl",value:function(){return"#"+this.options.routeName+"/"+this.options.modelName+"/view/"+this.model.id}},{key:"onSuccess",value:function(e){var t;return t=this.model.get(this.options.entryField)+" saved successfully.",c.request("success",t),(0,h.default)(this.getViewUrl())}}]),t}(),t.BaseNewFormView=u=function(e){function t(){return g(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,r),p(t,[{key:"createModel",value:function(){var e;return e=this.getOption("modelName"),d.default.Radio.channel(this.getOption("channelName")).request("db:"+e+":new")}},{key:"saveModel",value:function(){var e;return e=this.getOption("modelName"),d.default.Radio.channel(this.getOption("channelName")).request("db:"+e+":collection").add(this.model),function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"saveModel",this).call(this)}}]),t}(),t.BaseEditFormView=o=function(e){function t(){return g(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,r),p(t,[{key:"createModel",value:function(){return this.model}}]),t}(),s.reply("crud:view:item",function(){return i}),s.reply("crud:view:list",function(){return a}),s.reply("crud:view:new-item",function(){return u}),s.reply("crud:view:edit-item",function(){return o}),t.BaseItemView=i,t.BaseListView=a,t.BaseNewFormView=u,t.BaseEditFormView=o},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=(c(n(4)),c(n(0))),l=c(n(1)),s=(c(n(2)),c(n(3)),c(n(6)),n(33));function c(e){return e&&e.__esModule?e:{default:e}}r=l.default.Radio.channel("global"),i=l.default.Radio.channel("messages"),o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.ExtraController),a(t,[{key:"setupLayoutIfNeeded",value:function(){return this.mainController.setupLayoutIfNeeded()}},{key:"showChildView",value:function(e,t){return this.mainController.layout.showChildView(e,t)}},{key:"listItems",value:function(e){var t,n,o=this;return this.setupLayoutIfNeeded(),(n=(t=this.getChannel().request("db:"+this.viewOptions.modelName+":collection")).fetch({data:{columns:this.defaultColumns}})).done(function(){var n,r;return n=u.default.extend({collection:t},o.viewOptions),r=new e(n),o.showChildView("content",r),o.scrollTop()}),n.fail(function(){return i.request("danger","Failed to get "+o.viewOptions.label+"s!")})}},{key:"viewItem",value:function(e,t){var n,o,r=this;return this.setupLayoutIfNeeded(),(o=(n=this.getChannel().request("db:"+this.viewOptions.modelName+":get",t)).fetch()).done(function(){var t;return t=new e({model:n}),r.showChildView("content",t),r.scrollTop()}),o.fail(function(){return i.request("danger","Failed to get "+r.viewOptions.label+"!")})}},{key:"_formViewOptions",value:function(e){return e=e||{},(e=u.default.extend(e,this.viewOptions)).template=r.request("crud:template:form",e),e.channelName=this.getOption("channelName"),e}},{key:"addItem",value:function(e){var t;return this.setupLayoutIfNeeded(),t=new e(this._formViewOptions()),this.showChildView("content",t),this.scrollTop()}},{key:"editItem",value:function(e,t,n){var o,r,a=this;return this.setupLayoutIfNeeded(),n=this._formViewOptions(n),o=this.getChannel().request("db:"+this.viewOptions.modelName+":get",t),n.model=o,(r=o.fetch()).done(function(){var t;return t=new e(n),a.showChildView("content",t),a.scrollTop()}),r.fail(function(){return i.request("danger","Failed to get "+a.viewOptions.label+"!")})}}]),t}();return e.prototype.defaultColumns=["id","name"],e.prototype.channelName="global",e.prototype.viewOptions={fieldList:["name"],entryField:"name",modelName:"model",label:"Model"},e}.call(void 0),r.reply("main:app:CrudController",function(){return console.warn("use crud:Controller instead"),o}),r.reply("crud:Controller",function(){return o}),t.default=o},62:function(e,t,n){"use strict";n(61),n(22),n(60)}}]);
//# sourceMappingURL=admin~index-a3bdaccd4395d73e4b7c.js.map