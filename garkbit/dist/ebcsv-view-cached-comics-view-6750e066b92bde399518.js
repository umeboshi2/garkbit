(self.webpackJsonp=self.webpackJsonp||[]).push([[29],{149:function(e,t,o){"use strict";var r,n,i,s,a,c,l,u,h=function(){function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r=o(1),c=o(2),u=o(3);var y=o(34);y.make_field_input,y.make_field_select;var v=o(20);l=v.modal_close_button,a=r.Radio.channel("global"),r.Radio.channel("messages"),r.Radio.channel("ebcsv"),n=a.request("main:app:BaseModalView"),s=function(){var e=function(e){function t(){return p(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,n),t}();return e.prototype.template=u.renderable(function(e){return e.mainsection,u.div(".modal-dialog",function(){return u.div(".modal-content",function(){return u.div(".modal-body",function(){return u.img({src:e.image_src})}),u.div(".modal-footer",function(){return u.ul(".list-inline",function(){return"btn.btn-default.btn-sm",u.li("#close-modal",function(){return l("Close","check")})})})})})}),e}.call(void 0),i=function(e){function t(){return p(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,c.Behavior),h(t,[{key:"onShowImageModal",value:function(){var e;return e=new s({model:this.view.model}),a.request("show-modal",e)}}]),t}(),e.exports=i},150:function(e,t,o){"use strict";var r,n,i,s,a=function(){function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}}();o(1),n=o(2),i=o(82),s=o(87),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Behavior),a(t,[{key:"ui",value:function(){return{list:this.getOption("listContainer")}}},{key:"setMasonry",value:function(){var e,t;return e=this.getOption("listContainer"),t=this.getOption("masonryOptions"),this.view.masonry=new i(e,t)}},{key:"setMasonryLayout",value:function(){var e,t,o=this;return t=this.getOption("masonryOptions"),e=this.$(t.itemSelector),s(e,function(){return o.view.masonry.reloadItems(),o.view.masonry.layout()})}},{key:"onBeforeDestroy",value:function(){return this.view.masonry.destroy()}},{key:"onDomRefresh",value:function(){var e;if(this.setMasonry(),this.setMasonryLayout(),null!=(e=this.view)?e.afterDomRefresh:void 0)return this.view.afterDomRefresh()}}]),t}();return e.prototype.options={listContainer:".list-container",channel:"global",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},e.prototype.regions={list:"@ui.list"},e}.call(void 0),e.exports=r},359:function(e,t,o){"use strict";var r=function(){function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}}();function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,c,l,u,h,p,f,d,y,v,g,m,b,w,k,_,O,C,E,j,I,T=[].indexOf;O=o(0),c=o(1),w=o(2),o(82),o(87),j=o(3),d=o(44),_=o(89),o(5);var B=o(34);B.make_field_input,B.make_field_select,o(34).form_group_input_div,g=o(150),v=o(149),y=o(360),b=c.Radio.channel("global"),k=c.Radio.channel("messages"),a=c.Radio.channel("ebcsv"),I=[{id:"server",label:"Server Images",url:"#ebcsv",icon:".fa.fa-server"},{id:"browser",label:"Browser Images",url:"#ebcsv",icon:".fa.fa-internet-explorer"}],p=function(){var e=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,_),r(t,[{key:"onChildviewToolbarEntryClicked",value:function(e){return this.trigger("toolbar:"+e.model.id+":click",e),console.log("onChildviewToolbarEntryClicked",e.model.id)}},{key:"onDomRefresh",value:function(){var e;return console.log("onDomRefresh",this.regions),e=this.getChildView("entries").$el,console.log("el is",e),e.removeClass("btn-group-justified")}}]),t}();return e.prototype.options={entryTemplate:j.renderable(function(e){return j.i(e.icon),j.text(" "),j.text(e.label)})},e}.call(void 0),u=function(){var e=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,w.View),t}();return e.prototype.ui={image:"img"},e.prototype.triggers={"click @ui.image":"show:image:modal"},e.prototype.behaviors=[v],e.prototype.template=j.renderable(function(e){var t;return t=(t=e.image_src.replace("/lg/","/sm/")).replace("http://","//"),j.div(".item",function(){return j.img({src:t})})}),e}.call(void 0),l=function(){var e=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,w.CollectionView),t}();return e.prototype.childView=u,e.prototype.emptyView=d,e}.call(void 0),C={browser:[{id:"destroy",label:"Delete All",icon:".fa.fa-erase"}],server:[{id:"backup",label:"Backup",icon:".fa.fa-download"},{id:"restore",label:"Restore",icon:".fa.fa-upload"}]},function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}s(t,_),r(t,[{key:"onChildviewToolbarEntryClicked",value:function(e){var t,o;return console.log("a button pressed",e),console.log(this.getOption("cacheType")+" toolbar"),t=this.getOption("cacheType"),o=["browser","server"],0<=T.call(o,t)?this[t+"ButtonClicked"](e):this.toolbarButtonClicked(e)}},{key:"toolbarButtonClicked",value:function(e){return console.warn("we don't have a cacheType on this toolbar")}},{key:"browserButtonClicked",value:function(e){return console.log("browser button",e)}},{key:"serverButtonClicked",value:function(e){return console.log("server button",e)}}])}(),m=function(){var e=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,_),r(t,[{key:"onChildviewToolbarEntryClicked",value:function(){}}]),t}();return e.prototype.childViewTriggers={"toolbar:entry:clicked":"toolbar:entry:clicked"},e}.call(void 0),E=".list-container",h=function(){var e=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,w.View),r(t,[{key:"ui",value:function(){return{toolbar:".toolbar",list:E,header:".listview-header"}}},{key:"onRender",value:function(){var e,t,o;return t=new l({collection:this.collection}),this.showChildView("list",t),e=this.getOption("cacheType"),o=new m({collection:new c.Collection(C[e]),cacheType:e}),this.showChildView("toolbar",o),this.triggerMethod("set:header",this.collection.length+" images stored in the "+this.getOption("cacheType"))}},{key:"onChildviewToolbarEntryClicked",value:function(e){var t,o;return console.log("a button pressed",e),console.log(this.getOption("cacheType")+" toolbar"),t=this.getOption("cacheType"),o=["browser","server"],0<=T.call(o,t)?this[t+"ButtonClicked"](e):this.toolbarButtonClicked(e)}},{key:"toolbarButtonClicked",value:function(e){return console.warn("we don't have a cacheType on this toolbar")}},{key:"browserButtonClicked",value:function(e){if("destroy"===e.model.id)return this.destroyLocalImages()}},{key:"serverButtonClicked",value:function(e){var t;return"backup"===(t=e.model.id)?this.backupServerImages():"restore"===t?this.restoreServerImages():void 0}},{key:"backupServerImages",value:function(){var e,s=this;return(e=this.collection.fetch()).done(function(){var e,t,o,r,n,i;for(o=[],e=0,r=(i=s.collection.toJSON()).length;e<r;e++)delete(t=i[e]).id,o.push(t);return console.log("ITEMS",o),n={type:"data:text/json;charset=utf-8",data:JSON.stringify({items:o}),el_id:"exported-urls-anchor",filename:"url-backup.json"},b.request("export-to-file",n)}),e.fail(function(){return k.request("danger","Failed to get image urls!")})}},{key:"restoreServerImages",value:function(){return console.warn("restoreServerImages")}},{key:"destroyLocalImages",value:function(){return a.request("clear-comic-image-urls"),this.collection.reset()}}]),t}();return e.prototype.regions={toolbar:"@ui.toolbar",list:"@ui.list"},e.prototype.behaviors={HasMasonryView:{behaviorClass:g,listContainer:E,masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!1}},HasHeader:{behaviorClass:y}},e.prototype.template=j.renderable(function(e){return j.div(function(){return j.div(".listview-header"),j.div(".toolbar"),j.div(E)})}),e}.call(void 0),f=function(){var e=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,w.View),r(t,[{key:"onRender",value:function(){var e;return e=new p({collection:new c.Collection(I)}),this.showChildView("toolbar",e),this.triggerMethod("set:header","Cached Comic Cover Images")}},{key:"view_local_storage",value:function(){var o,r,e;return o=new c.Collection,delete(r=O.clone(a.request("get-comic-image-urls"))).id,Object.keys(r).forEach(function(e){var t;return t={url:e,image_src:r[e]},o.add(t)}),e=new h({collection:o,cacheType:"browser"}),this.showChildView("content",e)}},{key:"view_server_storage",value:function(){var t,e,o=this;return(e=(t=a.request("clzpage-collection")).fetch()).done(function(){var e;return e=new h({collection:t,cacheType:"server"}),o.showChildView("content",e)}),e.fail(function(){return k.request("danger","Failed to get cached comics")})}}]),t}();return e.prototype.ui={content:".content-container",toolbar:".images-toolbar",header:".listview-header"},e.prototype.regions={content:"@ui.content",toolbar:"@ui.toolbar"},e.prototype.behaviors=[y],e.prototype.template=j.renderable(function(e){return j.div(function(){return j.div(".listview-header"),j.div(".images-toolbar"),j.div(".content-container")})}),e.prototype.childViewEvents={"toolbar:browser:click":"view_local_storage","toolbar:server:click":"view_server_storage"},e}.call(void 0),e.exports=f},360:function(e,t,o){"use strict";var r,n,i=function(){function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}}();o(1),n=o(2),o(3),r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Behavior),i(t,[{key:"onSetHeader",value:function(e){return this.ui.header.text(e)}}]),t}(),e.exports=r},87:function(o,r,n){var i,s;
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
!function(t,e){"use strict";i=[n(96)],void 0===(s=function(e){return function(t,e){var n=t.jQuery,i=t.console;function s(e,t){for(var o in t)e[o]=t[o];return e}var a=Array.prototype.slice;function c(e,t,o){if(!(this instanceof c))return new c(e,t,o);var r=e;"string"==typeof e&&(r=document.querySelectorAll(e)),r?(this.elements=function(e){if(Array.isArray(e))return e;return"object"!=typeof e||"number"!=typeof e.length?[e]:a.call(e)}(r),this.options=s({},this.options),"function"==typeof t?o=t:s(this.options,t),o&&this.on("always",o),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):i.error("Bad element for imagesLoaded "+(r||e))}(c.prototype=Object.create(e.prototype)).options={},c.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},c.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&l[t]){for(var o=e.querySelectorAll("img"),r=0;r<o.length;r++){var n=o[r];this.addImage(n)}if("string"==typeof this.options.background){var i=e.querySelectorAll(this.options.background);for(r=0;r<i.length;r++){var s=i[r];this.addElementBackgroundImages(s)}}}};var l={1:!0,9:!0,11:!0};function o(e){this.img=e}function r(e,t){this.url=e,this.element=t,this.img=new Image}return c.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var o=/url\((['"])?(.*?)\1\)/gi,r=o.exec(t.backgroundImage);null!==r;){var n=r&&r[2];n&&this.addBackground(n,e),r=o.exec(t.backgroundImage)}},c.prototype.addImage=function(e){var t=new o(e);this.images.push(t)},c.prototype.addBackground=function(e,t){var o=new r(e,t);this.images.push(o)},c.prototype.check=function(){var r=this;function t(e,t,o){setTimeout(function(){r.progress(e,t,o)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},c.prototype.progress=function(e,t,o){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&i&&i.log("progress: "+o,e,t)},c.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},(o.prototype=Object.create(e.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},o.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},o.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},o.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},o.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},o.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},o.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(r.prototype=Object.create(o.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},r.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},c.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((n=e).fn.imagesLoaded=function(e,t){return new c(this,e,t).jqDeferred.promise(n(this))})},c.makeJQueryPlugin(),c}(t,e)}.apply(r,i))||(o.exports=s)}("undefined"!=typeof window?window:this)}}]);
//# sourceMappingURL=ebcsv-view-cached-comics-view-6750e066b92bde399518.js.map