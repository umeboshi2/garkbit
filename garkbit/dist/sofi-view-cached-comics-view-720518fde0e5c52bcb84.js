(self.webpackJsonp=self.webpackJsonp||[]).push([[69],{113:function(e,t,r){"use strict";var o,n,i,s,a,l,u,c,h=function(e,t,r){return t&&p(e.prototype,t),r&&p(e,r),e};function p(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=r(1),l=r(2),c=r(3);var v=r(33);v.make_field_input,v.make_field_select;var m=r(20);function g(){return f(this,g),d(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}u=m.modal_close_button,a=o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("sofi"),n=a.request("main:app:BaseModalView"),s=function(){var e=(y(t,n),t);function t(){return f(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=c.renderable(function(e){return e.mainsection,c.div(".modal-dialog",function(){return c.div(".modal-content",function(){return c.div(".modal-body",function(){return c.img({src:e.image_src})}),c.div(".modal-footer",function(){return c.ul(".list-inline",function(){return"btn.btn-default.btn-sm",c.li("#close-modal",function(){return u("Close","check")})})})})})}),e}.call(void 0),y(g,l.Behavior),h(g,[{key:"onShowImageModal",value:function(){var e;return e=new s({model:this.view.model}),a.request("show-modal",e)}}]),i=g,e.exports=i},189:function(e,t,r){"use strict";var o,n,i,s,a=function(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e};function l(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}r(1),n=r(2),i=r(83),s=r(90),o=function(){var e=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Behavior),a(t,[{key:"ui",value:function(){return{list:this.getOption("listContainer")}}},{key:"setMasonry",value:function(){var e,t;return e=this.getOption("listContainer"),t=this.getOption("masonryOptions"),this.view.masonry=new i(e,t)}},{key:"setMasonryLayout",value:function(){var e,t,r=this;return t=this.getOption("masonryOptions"),e=this.$(t.itemSelector),s(e,function(){return r.view.masonry.reloadItems(),r.view.masonry.layout()})}},{key:"onBeforeDestroy",value:function(){return this.view.masonry.destroy()}},{key:"onDomRefresh",value:function(){var e;if(this.setMasonry(),this.setMasonryLayout(),null!=(e=this.view)?e.afterDomRefresh:void 0)return this.view.afterDomRefresh()}}]),t);function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.options={listContainer:".list-container",channel:"global",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},e.prototype.regions={list:"@ui.list"},e}.call(void 0),e.exports=o},536:function(e,t,r){"use strict";var n=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e};function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,u,c,h,p,f,d,y,v,m,g,b,w,_,k,O,j,E,C,I,x,L,T,P,B,R,q=[].indexOf;E=r(0),u=r(1),_=r(2),r(83),r(90),B=r(3),y=r(43),j=r(84),r(5);var S=r(33);S.make_field_input,S.make_field_select,r(33).form_group_input_div,g=r(189),m=r(113),v=r(97),w=u.Radio.channel("global"),k=u.Radio.channel("messages"),l=u.Radio.channel("sofi"),R=[{id:"server",label:"Server Images",url:"#sofi",icon:".fa.fa-server"},{id:"browser",label:"Browser Images",url:"#sofi",icon:".fa.fa-internet-explorer"}],f=function(){var e=(a(t,j),n(t,[{key:"onChildviewToolbarEntryClicked",value:function(e){return this.trigger("toolbar:"+e.model.id+":click",e)}},{key:"onDomRefresh",value:function(){return console.log("onDomRefresh",this.regions),this.getChildView("entries").$el.removeClass("btn-group-justified")}}]),t);function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.options={entryTemplate:B.renderable(function(e){return B.i(e.icon),B.text(" "),B.text(e.label)})},e}.call(void 0),h=function(){var e=(a(t,_.View),t);function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.ui={image:"img"},e.prototype.triggers={"click @ui.image":"show:image:modal"},e.prototype.behaviors=[m],e.prototype.template=B.renderable(function(e){var t;return t=l.request("fix-image-url",e.image_src),B.div(".item",function(){return B.img({src:t})})}),e}.call(void 0),c=function(){var e=(a(t,_.CollectionView),t);function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.childView=h,e.prototype.emptyView=y,e}.call(void 0),C={browser:[{id:"destroy",label:"Delete All",icon:".fa.fa-erase"}],server:[{id:"backup",label:"Backup",icon:".fa.fa-download"},{id:"restore",label:"Restore",icon:".fa.fa-upload"}]},b=function(){var e=(a(t,j),n(t,[{key:"onChildviewToolbarEntryClicked",value:function(){}}]),t);function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.childViewTriggers={"toolbar:entry:clicked":"toolbar:entry:clicked"},e}.call(void 0),L={gutter:1,isInitLayout:!(x=".list-container"),itemSelector:".item",columnWidth:10,horizontalOrder:!1},p=function(){var e=(a(t,_.View),n(t,[{key:"ui",value:function(){return{toolbar:".toolbar",list:x,header:".listview-header"}}},{key:"onRender",value:function(){var e,t,r;return t=new c({collection:this.collection}),this.showChildView("list",t),e=this.getOption("cacheType"),r=new b({collection:new u.Collection(C[e]),cacheType:e}),this.showChildView("toolbar",r),this.triggerMethod("set:header",this.collection.length+" images stored in the "+this.getOption("cacheType"))}},{key:"onChildviewToolbarEntryClicked",value:function(e){var t,r;return t=this.getOption("cacheType"),r=["browser","server"],0<=q.call(r,t)?this[t+"ButtonClicked"](e):this.toolbarButtonClicked(e)}},{key:"toolbarButtonClicked",value:function(e){return console.warn("we don't have a cacheType on this toolbar")}},{key:"browserButtonClicked",value:function(e){if("destroy"===e.model.id)return this.destroyLocalImages()}},{key:"serverButtonClicked",value:function(e){var t;return"backup"===(t=e.model.id)?this.backupServerImages():"restore"===t?this.restoreServerImages():void 0}},{key:"backupServerImages",value:function(){var e,s=this;return(e=this.collection.fetch()).done(function(){var e,t,r,o,n,i;for(r=[],e=0,o=(i=s.collection.toJSON()).length;e<o;e++)delete(t=i[e]).id,r.push(t);return n={type:"data:text/json;charset=utf-8",data:JSON.stringify({items:r}),el_id:"exported-urls-anchor",filename:"url-backup.json"},w.request("export-to-file",n)}),e.fail(function(){return k.request("danger","Failed to get image urls!")})}},{key:"restoreServerImages",value:function(){return this.trigger("restore:server:images")}},{key:"destroyLocalImages",value:function(){return l.request("clear-comic-image-urls"),this.collection.reset()}}]),t);function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.regions={toolbar:"@ui.toolbar",list:"@ui.list"},e.prototype.behaviors={HasMasonryView:{behaviorClass:g,listContainer:x,masonryOptions:L},HasHeader:{behaviorClass:v}},e.prototype.template=B.renderable(function(e){return B.div(function(){return B.div(".listview-header"),B.div(".toolbar"),B.div(x)})}),e}.call(void 0),I=function(e,t){var r;return r=t.collection,console.log("insert_model",r,e),r.create(e)},P=function(e,t){var r,o;return(o=(r=t.collection).fetch({data:{where:{url:e.url}}})).fail(function(){return"There was a problem talking to the server",k.request("warning","There was a problem talking to the server")}),o.done(function(){if(!r.length)return I(e,t)})},T=function(e){var t,r;return t=l.request("db:clzpage:collection"),r={collection:t},e.forEach(function(e){return P(e,r)})},O=function(){var e=(a(o,_.View),n(o,[{key:"restore_changed",value:function(e){var t;return this.ui.restore_btn.hide(),this.ui.upload_btn.show(),this.ui.restore_lbl.hide(),this.ui.restore_lbl.removeClass("btn btn-default"),t=e.target.files[0].name,this.ui.upload_btn.text("Upload "+t)}},{key:"reset_restore_button",value:function(){return this.ui.restore_btn.hide(),this.ui.restore_lbl.show(),this.ui.restore_lbl.addClass("btn btn-default"),this.ui.restore_lbl.val(""),this.ui.upload_btn.hide()}},{key:"upload_items",value:function(){var e,t;return e=this.ui.restore_btn[0].files[0],(t=new FileReader).onload=this.jsonReaderOnLoad,t.readAsText(e)}},{key:"jsonReaderOnLoad",value:function(e){var t,r;return function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,o),t=e.target.result,(null!=(r=JSON.parse(t))?r.items:void 0)?T(r.items):this.reset_restore_button(),this.reset_restore_button()}}]),o);function o(){i(this,o);var e=s(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments));return e.jsonReaderOnLoad=e.jsonReaderOnLoad.bind(e),e}return e.prototype.ui={restore_btn:".restore-button",restore_lbl:".restore-label",upload_btn:".upload-button"},e.prototype.events={"click @ui.upload_btn":"upload_items","change @ui.restore_btn":"restore_changed"},e.prototype.template=B.renderable(function(e){return B.div(".listview-header",function(){return B.div("Restore the image urls to the server.")}),B.label(".restore-label.btn.btn-default.btn-file",function(){return B.span("restore "),B.input(".restore-button.input",{type:"file",style:"display:none"})}),B.button(".upload-button.btn.btn-default",{style:"display:none"})}),e}.call(void 0),d=function(){var e=(a(t,_.View),n(t,[{key:"onRender",value:function(){var e;return e=new f({collection:new u.Collection(R)}),this.showChildView("toolbar",e),this.triggerMethod("set:header","Cached Comic Cover Images")}},{key:"restore_server_images",value:function(){var e;return e=new O,this.showChildView("content",e)}},{key:"view_local_storage",value:function(){var r,o,e;return r=new u.Collection,delete(o=E.clone(l.request("get-comic-image-urls"))).id,Object.keys(o).forEach(function(e){var t;return t={url:e,image_src:o[e]},r.add(t)}),e=new p({collection:r,cacheType:"browser"}),this.showChildView("content",e)}},{key:"view_server_storage",value:function(){var t,e,r=this;return(e=(t=l.request("db:clzpage:collection")).fetch()).done(function(){var e;return e=new p({collection:t,cacheType:"server"}),r.showChildView("content",e)}),e.fail(function(){return k.request("danger","Failed to get cached comics")})}}]),t);function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.ui={content:".content-container",toolbar:".images-toolbar",header:".listview-header"},e.prototype.regions={content:"@ui.content",toolbar:"@ui.toolbar"},e.prototype.behaviors=[v],e.prototype.template=B.renderable(function(e){return B.div(function(){return B.div(".listview-header"),B.div(".images-toolbar"),B.div(".content-container")})}),e.prototype.childViewEvents={"toolbar:browser:click":"view_local_storage","toolbar:server:click":"view_server_storage","restore:server:images":"restore_server_images"},e}.call(void 0),e.exports=d},90:function(e,r,o){var n,i;
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
!function(t){"use strict";n=[o(99)],void 0===(i=function(e){return function(t,e){"use strict";var n=t.jQuery,i=t.console;function s(e,t){for(var r in t){e[r]=t[r]}return e}var r=Array.prototype.slice;function a(e){if(Array.isArray(e)){return e}var t=typeof e=="object"&&typeof e.length=="number";if(t){return r.call(e)}return[e]}function l(e,t,r){if(!(this instanceof l)){return new l(e,t,r)}var o=e;if(typeof e=="string"){o=document.querySelectorAll(e)}if(!o){i.error("Bad element for imagesLoaded "+(o||e));return}this.elements=a(o);this.options=s({},this.options);if(typeof t=="function"){r=t}else{s(this.options,t)}if(r){this.on("always",r)}this.getImages();if(n){this.jqDeferred=new n.Deferred}setTimeout(this.check.bind(this))}(l.prototype=Object.create(e.prototype)).options={},l.prototype.getImages=function(){this.images=[];this.elements.forEach(this.addElementImages,this)},l.prototype.addElementImages=function(e){if(e.nodeName=="IMG"){this.addImage(e)}if(this.options.background===true){this.addElementBackgroundImages(e)}var t=e.nodeType;if(!t||!u[t]){return}var r=e.querySelectorAll("img");for(var o=0;o<r.length;o++){var n=r[o];this.addImage(n)}if(typeof this.options.background=="string"){var i=e.querySelectorAll(this.options.background);for(o=0;o<i.length;o++){var s=i[o];this.addElementBackgroundImages(s)}}};var u={1:true,9:true,11:true};function o(e){this.img=e}function c(e,t){this.url=e;this.element=t;this.img=new Image}return l.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var r=/url\((['"])?(.*?)\1\)/gi,o=r.exec(t.backgroundImage);null!==o;){var n=o&&o[2];n&&this.addBackground(n,e),o=r.exec(t.backgroundImage)}},l.prototype.addImage=function(e){var t=new o(e);this.images.push(t)},l.prototype.addBackground=function(e,t){var r=new c(e,t);this.images.push(r)},l.prototype.check=function(){var o=this;function t(e,t,r){setTimeout(function(){o.progress(e,t,r)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},l.prototype.progress=function(e,t,r){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&i&&i.log("progress: "+r,e,t)},l.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},(o.prototype=Object.create(e.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},o.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},o.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},o.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},o.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},o.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},o.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(c.prototype=Object.create(o.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},c.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},l.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((n=e).fn.imagesLoaded=function(e,t){return new l(this,e,t).jqDeferred.promise(n(this))})},l.makeJQueryPlugin(),l}(t,e)}.apply(r,n))||(e.exports=i)}("undefined"!=typeof window?window:this)},97:function(e,t,r){"use strict";var o,n,i=function(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e};function s(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}r(1),n=r(2),r(3),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,n.Behavior),i(a,[{key:"onSetHeader",value:function(e){return this.ui.header.text(e)}}]),o=a,e.exports=o}}]);
//# sourceMappingURL=sofi-view-cached-comics-view-720518fde0e5c52bcb84.js.map