(self.webpackJsonp=self.webpackJsonp||[]).push([[55],{108:function(e,t,r){"use strict";var o,n,i,s,a,u,l,c,h=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=r(1),u=r(2),c=r(3);var y=r(30);y.make_field_input,y.make_field_select;var v=r(17);l=v.modal_close_button,a=o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("sofi"),n=a.request("main:app:BaseModalView"),s=function(){var e=function(e){function t(){return p(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,n),t}();return e.prototype.template=c.renderable(function(e){return e.mainsection,c.div(".modal-dialog",function(){return c.div(".modal-content",function(){return c.div(".modal-body",function(){return c.img({src:e.image_src})}),c.div(".modal-footer",function(){return c.ul(".list-inline",function(){return"btn.btn-default.btn-sm",c.li("#close-modal",function(){return l("Close","check")})})})})})}),e}.call(void 0),i=function(e){function t(){return p(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,u.Behavior),h(t,[{key:"onShowImageModal",value:function(){var e;return e=new s({model:this.view.model}),a.request("show-modal",e)}}]),t}(),e.exports=i},137:function(e,t,r){"use strict";var o,n,i,s,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();r(1),n=r(2),i=r(81),s=r(84),o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Behavior),a(t,[{key:"ui",value:function(){return{list:this.getOption("listContainer")}}},{key:"setMasonry",value:function(){var e,t;return e=this.getOption("listContainer"),t=this.getOption("masonryOptions"),this.view.masonry=new i(e,t)}},{key:"setMasonryLayout",value:function(){var e,t,r=this;return t=this.getOption("masonryOptions"),e=this.$(t.itemSelector),s(e,function(){return r.view.masonry.reloadItems(),r.view.masonry.layout()})}},{key:"onBeforeDestroy",value:function(){return this.view.masonry.destroy()}},{key:"onDomRefresh",value:function(){var e;if(this.setMasonry(),this.setMasonryLayout(),null!=(e=this.view)?e.afterDomRefresh:void 0)return this.view.afterDomRefresh()}}]),t}();return e.prototype.options={listContainer:".list-container",channel:"global",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},e.prototype.regions={list:"@ui.list"},e}.call(void 0),e.exports=o},273:function(e,t,r){"use strict";var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,l,c,h,p,f,d,y,v,m,g,b,w,_,k,O,j,E,C,I,x,L,P,T,B=[].indexOf;j=r(0),u=r(1),w=r(2),r(81),r(84),P=r(3),d=r(39),O=r(86),r(5);var R=r(30);R.make_field_input,R.make_field_select,r(30).form_group_input_div,m=r(137),v=r(108),y=r(90),b=u.Radio.channel("global"),_=u.Radio.channel("messages"),a=u.Radio.channel("sofi"),T=[{id:"server",label:"Server Images",url:"#sofi",icon:".fa.fa-server"},{id:"browser",label:"Browser Images",url:"#sofi",icon:".fa.fa-internet-explorer"}],p=function(){var e=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,O),o(t,[{key:"onChildviewToolbarEntryClicked",value:function(e){return this.trigger("toolbar:"+e.model.id+":click",e)}},{key:"onDomRefresh",value:function(){return console.log("onDomRefresh",this.regions),this.getChildView("entries").$el.removeClass("btn-group-justified")}}]),t}();return e.prototype.options={entryTemplate:P.renderable(function(e){return P.i(e.icon),P.text(" "),P.text(e.label)})},e}.call(void 0),c=function(){var e=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,w.View),t}();return e.prototype.ui={image:"img"},e.prototype.triggers={"click @ui.image":"show:image:modal"},e.prototype.behaviors=[v],e.prototype.template=P.renderable(function(e){var t;return t=a.request("fix-image-url",e.image_src),P.div(".item",function(){return P.img({src:t})})}),e}.call(void 0),l=function(){var e=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,w.CollectionView),t}();return e.prototype.childView=c,e.prototype.emptyView=d,e}.call(void 0),E={browser:[{id:"destroy",label:"Delete All",icon:".fa.fa-erase"}],server:[{id:"backup",label:"Backup",icon:".fa.fa-download"},{id:"restore",label:"Restore",icon:".fa.fa-upload"}]},g=function(){var e=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,O),o(t,[{key:"onChildviewToolbarEntryClicked",value:function(){}}]),t}();return e.prototype.childViewTriggers={"toolbar:entry:clicked":"toolbar:entry:clicked"},e}.call(void 0),I={gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!1},h=function(){var e=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,w.View),o(t,[{key:"ui",value:function(){return{toolbar:".toolbar",list:".list-container",header:".listview-header"}}},{key:"onRender",value:function(){var e,t,r;return t=new l({collection:this.collection}),this.showChildView("list",t),e=this.getOption("cacheType"),r=new g({collection:new u.Collection(E[e]),cacheType:e}),this.showChildView("toolbar",r),this.triggerMethod("set:header",this.collection.length+" images stored in the "+this.getOption("cacheType"))}},{key:"onChildviewToolbarEntryClicked",value:function(e){var t,r;return t=this.getOption("cacheType"),r=["browser","server"],B.call(r,t)>=0?this[t+"ButtonClicked"](e):this.toolbarButtonClicked(e)}},{key:"toolbarButtonClicked",value:function(e){return console.warn("we don't have a cacheType on this toolbar")}},{key:"browserButtonClicked",value:function(e){if("destroy"===e.model.id)return this.destroyLocalImages()}},{key:"serverButtonClicked",value:function(e){var t;return"backup"===(t=e.model.id)?this.backupServerImages():"restore"===t?this.restoreServerImages():void 0}},{key:"backupServerImages",value:function(){var e,t=this;return(e=this.collection.fetch()).done(function(){var e,r,o,n,i,s;for(o=[],e=0,n=(s=t.collection.toJSON()).length;e<n;e++)delete(r=s[e]).id,o.push(r);return i={type:"data:text/json;charset=utf-8",data:JSON.stringify({items:o}),el_id:"exported-urls-anchor",filename:"url-backup.json"},b.request("export-to-file",i)}),e.fail(function(){return _.request("danger","Failed to get image urls!")})}},{key:"restoreServerImages",value:function(){return this.trigger("restore:server:images")}},{key:"destroyLocalImages",value:function(){return a.request("clear-comic-image-urls"),this.collection.reset()}}]),t}();return e.prototype.regions={toolbar:"@ui.toolbar",list:"@ui.list"},e.prototype.behaviors={HasMasonryView:{behaviorClass:m,listContainer:".list-container",masonryOptions:I},HasHeader:{behaviorClass:y}},e.prototype.template=P.renderable(function(e){return P.div(function(){return P.div(".listview-header"),P.div(".toolbar"),P.div(".list-container")})}),e}.call(void 0),C=function(e,t){var r;return r=t.collection,console.log("insert_model",r,e),r.create(e)},L=function(e,t){var r,o;return(o=(r=t.collection).fetch({data:{where:{url:e.url}}})).fail(function(){var e;return e="There was a problem talking to the server",_.request("warning",e)}),o.done(function(){if(!r.length)return C(e,t)})},x=function(e){var t,r;return t=a.request("db:clzpage:collection"),r={collection:t},e.forEach(function(e){return L(e,r)})},k=function(){var e=function(e){function t(){n(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.jsonReaderOnLoad=e.jsonReaderOnLoad.bind(e),e}return s(t,w.View),o(t,[{key:"restore_changed",value:function(e){var t;return this.ui.restore_btn.hide(),this.ui.upload_btn.show(),this.ui.restore_lbl.hide(),this.ui.restore_lbl.removeClass("btn btn-default"),t=e.target.files[0].name,this.ui.upload_btn.text("Upload "+t)}},{key:"reset_restore_button",value:function(){return this.ui.restore_btn.hide(),this.ui.restore_lbl.show(),this.ui.restore_lbl.addClass("btn btn-default"),this.ui.restore_lbl.val(""),this.ui.upload_btn.hide()}},{key:"upload_items",value:function(){var e,t;return e=this.ui.restore_btn[0].files[0],(t=new FileReader).onload=this.jsonReaderOnLoad,t.readAsText(e)}},{key:"jsonReaderOnLoad",value:function(e){var r,o;return function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),r=e.target.result,(null!=(o=JSON.parse(r))?o.items:void 0)?x(o.items):this.reset_restore_button(),this.reset_restore_button()}}]),t}();return e.prototype.ui={restore_btn:".restore-button",restore_lbl:".restore-label",upload_btn:".upload-button"},e.prototype.events={"click @ui.upload_btn":"upload_items","change @ui.restore_btn":"restore_changed"},e.prototype.template=P.renderable(function(e){return P.div(".listview-header",function(){return P.div("Restore the image urls to the server.")}),P.label(".restore-label.btn.btn-default.btn-file",function(){return P.span("restore "),P.input(".restore-button.input",{type:"file",style:"display:none"})}),P.button(".upload-button.btn.btn-default",{style:"display:none"})}),e}.call(void 0),f=function(){var e=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,w.View),o(t,[{key:"onRender",value:function(){var e;return e=new p({collection:new u.Collection(T)}),this.showChildView("toolbar",e),this.triggerMethod("set:header","Cached Comic Cover Images")}},{key:"restore_server_images",value:function(){var e;return e=new k,this.showChildView("content",e)}},{key:"view_local_storage",value:function(){var e,t,r;return e=new u.Collection,delete(t=j.clone(a.request("get-comic-image-urls"))).id,Object.keys(t).forEach(function(r){var o;return o={url:r,image_src:t[r]},e.add(o)}),r=new h({collection:e,cacheType:"browser"}),this.showChildView("content",r)}},{key:"view_server_storage",value:function(){var e,t,r=this;return(t=(e=a.request("db:clzpage:collection")).fetch()).done(function(){var t;return t=new h({collection:e,cacheType:"server"}),r.showChildView("content",t)}),t.fail(function(){return _.request("danger","Failed to get cached comics")})}}]),t}();return e.prototype.ui={content:".content-container",toolbar:".images-toolbar",header:".listview-header"},e.prototype.regions={content:"@ui.content",toolbar:"@ui.toolbar"},e.prototype.behaviors=[y],e.prototype.template=P.renderable(function(e){return P.div(function(){return P.div(".listview-header"),P.div(".images-toolbar"),P.div(".content-container")})}),e.prototype.childViewEvents={"toolbar:browser:click":"view_local_storage","toolbar:server:click":"view_server_storage","restore:server:images":"restore_server_images"},e}.call(void 0),e.exports=f},84:function(e,t,r){var o,n;
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(i,s){"use strict";o=[r(96)],void 0===(n=function(e){return function(e,t){var r=e.jQuery,o=e.console;function n(e,t){for(var r in t)e[r]=t[r];return e}var i=Array.prototype.slice;function s(e,t,a){if(!(this instanceof s))return new s(e,t,a);var u=e;"string"==typeof e&&(u=document.querySelectorAll(e)),u?(this.elements=function(e){if(Array.isArray(e))return e;if("object"==typeof e&&"number"==typeof e.length)return i.call(e);return[e]}(u),this.options=n({},this.options),"function"==typeof t?a=t:n(this.options,t),a&&this.on("always",a),this.getImages(),r&&(this.jqDeferred=new r.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(u||e))}s.prototype=Object.create(t.prototype),s.prototype.options={},s.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},s.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&a[t]){for(var r=e.querySelectorAll("img"),o=0;o<r.length;o++){var n=r[o];this.addImage(n)}if("string"==typeof this.options.background){var i=e.querySelectorAll(this.options.background);for(o=0;o<i.length;o++){var s=i[o];this.addElementBackgroundImages(s)}}}};var a={1:!0,9:!0,11:!0};function u(e){this.img=e}function l(e,t){this.url=e,this.element=t,this.img=new Image}return s.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var r=/url\((['"])?(.*?)\1\)/gi,o=r.exec(t.backgroundImage);null!==o;){var n=o&&o[2];n&&this.addBackground(n,e),o=r.exec(t.backgroundImage)}},s.prototype.addImage=function(e){var t=new u(e);this.images.push(t)},s.prototype.addBackground=function(e,t){var r=new l(e,t);this.images.push(r)},s.prototype.check=function(){var e=this;function t(t,r,o){setTimeout(function(){e.progress(t,r,o)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},s.prototype.progress=function(e,t,r){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+r,e,t)},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},u.prototype=Object.create(t.prototype),u.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},u.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},u.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},u.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},u.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},u.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},u.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype=Object.create(u.prototype),l.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},l.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},s.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((r=t).fn.imagesLoaded=function(e,t){return new s(this,e,t).jqDeferred.promise(r(this))})},s.makeJQueryPlugin(),s}(i,e)}.apply(t,o))||(e.exports=n)}("undefined"!=typeof window?window:this)},90:function(e,t,r){"use strict";var o,n,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();r(1),n=r(2),r(3),o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Behavior),i(t,[{key:"onSetHeader",value:function(e){return this.ui.header.text(e)}}]),t}(),e.exports=o}}]);
//# sourceMappingURL=sofi-view-cached-comics-view-b7f50eeb6baaa328b607.js.map