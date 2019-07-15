(self.webpackJsonp=self.webpackJsonp||[]).push([[11],{182:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s,u,c,l,p,f,h,m,d,y,g,v,_,b;s=n(4),c=n(1),g=n(2),n(87),b=n(3),n(5);var w=n(31);w.make_field_input,w.make_field_select;var k=n(17);_=k.modal_close_button,d=n(474),h=n(183),y=c.Radio.channel("global"),v=c.Radio.channel("messages"),u=c.Radio.channel("ebcsv"),l=y.request("main:app:BaseModalView"),m=function(){var e=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,l),t}();return e.prototype.template=b.renderable(function(e){return e.mainsection,b.div(".modal-dialog.modal-lg",function(){return b.div(".modal-content",function(){return b.div(".modal-body",function(){var t;return t=e.src.replace("http://","//"),b.iframe({style:"width:97%;height:75vh;",src:t})}),b.div(".modal-footer",function(){return b.ul(".list-inline",function(){return"btn.btn-default.btn-sm",b.li("#close-modal",function(){return _("Close","check")})})})})})}),e}.call(void 0),f=function(){var e=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,g.View),o(t,[{key:"onDomRefresh",value:function(){return this.trigger("show:image")}}]),t}();return e.prototype.template=b.renderable(function(e){var t;return t=(t=e.image_src.replace("/lg/","/sm/")).replace("http://","//"),b.img({src:t})}),e.prototype.ui={image:"img"},e.prototype.triggers={"click @ui.image":"show:image:modal"},e.prototype.behaviors=[h],e}.call(void 0),p=function(){var e=function(e){function t(){i(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e._parse_html=e._parse_html.bind(e),e}return a(t,g.View),o(t,[{key:"mouse_enter_item",value:function(e){return this.ui.info_btn.show()}},{key:"mouse_leave_item",value:function(e){return this.ui.info_btn.hide()}},{key:"show_comic_json",value:function(e){var t;if("A"!==e.target.tagName)return t=new d({model:this.model}),y.request("show-modal",t)}},{key:"show_comic_page",value:function(e){var t,n;if(e.preventDefault(),"A"===(t=e.target).tagName)return n=new m({model:new c.Model({src:t.href})}),y.request("show-modal",n)}},{key:"_handleComicImage",value:function(e){var t,n,o,i=this;t=u.request("get-comic-url-model"),(o=(n=new t({url:e})).fetch({data:{url:e}})).then(function(t){return n.get("image_src")?i._show_comic_image(n,!1):i._get_comic_data(e,i._parse_html)}),o.fail(function(){return i._get_comic_data(e,i._parse_html)})}},{key:"_handleLocalUrls",value:function(e){var t,n;return(n=u.request("get-comic-image-urls"))[e]?(t=new c.Model({image_src:n[e],url:e}),this._show_comic_image(t,!1)):e?this._get_comic_data(e,this._parse_html):void 0}},{key:"onDomRefresh",value:function(){var e;return this.ui.info_btn.hide(),e=this.model.get("links").link.url,this._handleComicImage(e)}},{key:"_get_comic_data",value:function(e,t){var n;return console.log("_get_comic_data",e),new URL(e),(n=c.ajax({type:"GET",dataType:"html",url:"//cors-anywhere.herokuapp.com/"+e})).done(function(){return t(e,n.responseText)}),n.fail(function(){return v.request("warning","Couldn't get the info")})}},{key:"_parse_html",value:function(e,n){var o,i,r,a,c,l,p,f,h=this;for(function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),p=[],a=0,l=(i=s.parseHTML(n)).length;a<l;a++)"LINK"===(r=i[a]).tagName&&"image_src"===r.rel&&p.push(r);return p.length>1&&v.request("warning","Too many links for this comic."),c=p[0].href,o=u.request("get-comic-url-model"),(f=new o({url:e,image_src:c})).save().done(function(){return h._show_comic_image(f,!1)})}},{key:"_set_local_images_url",value:function(e){return e.get("url"),e.get("image_src")}},{key:"_show_comic_image",value:function(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n&&this._set_local_images_url(e),t=new f({model:e}),this.showChildView("image",t)}},{key:"show_comic",value:function(){var e,t,n,o,i=this;return t=this.model.get("links"),o=t.link.url,new URL(o),(n=(e=u.request("clzpage-collection")).fetch({data:{where:{url:o}}})).fail(function(){return"There was a problem talking to the server",v.request("warning","There was a problem talking to the server")}),n.done(function(){if(e.length>1&&v.request("warning",o+" is not unique!"),!e.length)return i._get_comic_data(o,i._add_comic_to_db)})}},{key:"get_comic_data",value:function(e){var t,n,o=this;return t=new URL(e),(n=c.ajax({type:"GET",dataType:"html",url:"/clzcore"+t.pathname})).done(function(){var e;return e=new g.View({template:n.responseText}),o.showChildView("info",e)}),n.fail(function(){return v.request("warning","Couldn't get the info")})}}]),t}();return e.prototype.template=b.renderable(function(e){var t;return t=e.mainsection,b.div(".item.listview-list-entry.thumbnail.col-md-2",function(){return b.div(".comic-image",function(){return b.i(".fa.fa-spinner.fa-spin"),b.text("loading")}),b.div(".caption",function(){var n,o;return b.span(function(){return b.i(".info-button.fa.fa-info.fa-pull-left.btn.btn-default.btn-sm"),b.h5({style:"text-overflow: ellipsis;"},t.series.displayname+" #"+e.issue)}),n=(n=(null!=t?t.title:void 0)||(null!=e&&null!=(o=e.edition)?o.displayname:void 0))||b.strong("UNTITLED"),b.a(".clz-link",{href:""+e.links.link.url,target:"_blank"},n)})})}),e.prototype.ui={info_btn:".info-button",clz_link:".clz-link",item:".item",image:".comic-image"},e.prototype.regions={image:"@ui.image"},e.prototype.events={"click @ui.info_btn":"show_comic_json","click @ui.clz_link":"show_comic_page","mouseenter @ui.item":"mouse_enter_item","mouseleave @ui.item":"mouse_leave_item"},e.prototype.childViewTriggers={"show:image":"show:image"},e}.call(void 0),e.exports=p},183:function(e,t,n){"use strict";var o,i,r,a,s,u,c,l,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=n(1),u=n(2),l=n(3);var d=n(31);d.make_field_input,d.make_field_select;var y=n(17);c=y.modal_close_button,s=o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("ebcsv"),i=s.request("main:app:BaseModalView"),a=function(){var e=function(e){function t(){return f(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,i),t}();return e.prototype.template=l.renderable(function(e){return e.mainsection,l.div(".modal-dialog",function(){return l.div(".modal-content",function(){return l.div(".modal-body",function(){return l.img({src:e.image_src})}),l.div(".modal-footer",function(){return l.ul(".list-inline",function(){return"btn.btn-default.btn-sm",l.li("#close-modal",function(){return c("Close","check")})})})})})}),e}.call(void 0),r=function(e){function t(){return f(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,u.Behavior),p(t,[{key:"onShowImageModal",value:function(){var e;return e=new a({model:this.view.model}),s.request("show-modal",e)}}]),t}(),e.exports=r},184:function(e,t,n){"use strict";var o,i,r,a,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(1),i=n(2),r=n(87),a=n(98),o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Behavior),s(t,[{key:"ui",value:function(){return{list:this.getOption("listContainer")}}},{key:"setMasonry",value:function(){var e,t;return e=this.getOption("listContainer"),t=this.getOption("masonryOptions"),this.view.masonry=new r(e,t)}},{key:"setMasonryLayout",value:function(){var e,t,n=this;return t=this.getOption("masonryOptions"),e=this.$(t.itemSelector),a(e,function(){return n.view.masonry.reloadItems(),n.view.masonry.layout()})}},{key:"onBeforeDestroy",value:function(){return this.view.masonry.destroy()}},{key:"onDomRefresh",value:function(){var e;if(this.setMasonry(),this.setMasonryLayout(),null!=(e=this.view)?e.afterDomRefresh:void 0)return this.view.afterDomRefresh()}}]),t}();return e.prototype.options={listContainer:".list-container",channel:"global",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},e.prototype.regions={list:"@ui.list"},e}.call(void 0),e.exports=o},241:function(e,t,n){"use strict";var o,i,r,a,s,u,c,l,p,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(4),o=n(1),l=n(2),n(87),n(98),p=n(3),s=n(40),n(5);var y=n(31);y.make_field_input,y.make_field_select,r=n(182),c=n(184),o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("ebcsv"),u=function(e){function t(){return h(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,c),f(t,[{key:"onChildviewShowImage",value:function(e){return this.setMasonryLayout()}}]),t}(),i=function(){var e=function(e){function t(){return h(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,l.CollectionView),t}();return e.prototype.childView=r,e.prototype.emptyView=s,e.prototype.childViewTriggers={"show:image":"show:image"},e}.call(void 0),a=function(){var e=function(e){function t(){return h(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,l.View),f(t,[{key:"ui",value:function(){return{list:this.getOption("listContainer")}}},{key:"onRender",value:function(){var e;return e=new i({collection:this.collection}),this.showChildView("list",e)}}]),t}();return e.prototype.options={listContainer:"#comiclist-container"},e.prototype.regions={list:"@ui.list"},e.prototype.behaviors={HasLateImages:{behaviorClass:u,listContainer:"#comiclist-container",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!1}}},e.prototype.template=p.renderable(function(e){return p.div("#comiclist-container")}),e}.call(void 0),e.exports=a},474:function(e,t,n){"use strict";var o,i,r,a,s,u,c,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(0),o=n(1),s=n(2),c=n(3),r=n(94),n(95),n(32);var p=n(17);u=p.modal_close_button,i=n(41).default,o.Radio.channel("global"),o.Radio.channel("ebcsv"),a=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.View),l(t,[{key:"expand_view",value:function(){return this.expanded_view?(this.json_view.collapse(!0),this.expanded_view=!1,this.ui.expand_btn.text("Expand")):(this.json_view.expand(!0),this.expanded_view=!0,this.ui.expand_btn.text("Collapse"))}},{key:"onDomRefresh",value:function(){return console.log("onDomRefresh->jsonview"),this.expanded_view=!1,this.json_view=new r(this.model.toJSON()),this.ui.body.prepend(this.json_view.dom)}}]),t}();return e.prototype.behaviors=[i],e.prototype.template=c.renderable(function(e){var t;return t=e.mainsection,c.div(".modal-dialog",function(){return c.div(".modal-content",function(){return c.h3(t.series.displayname+" #"+t.issue),c.div(".modal-body",function(){return c.div(".expand-button.btn.btn-default","Expand"),c.div(".panel")}),c.div(".modal-footer",function(){return c.ul(".list-inline",function(){return"btn.btn-default.btn-sm",c.li("#close-modal",function(){return u("Close","check")})})})})})}),e.prototype.ui={body:".panel",expand_btn:".expand-button",close_btn:"#close-modal div"},e.prototype.events={"click @ui.expand_btn":"expand_view"},e}.call(void 0),e.exports=a},98:function(e,t,n){var o,i;
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
!function(r,a){"use strict";o=[n(114)],void 0===(i=function(e){return function(e,t){var n=e.jQuery,o=e.console;function i(e,t){for(var n in t)e[n]=t[n];return e}var r=Array.prototype.slice;function a(e,t,s){if(!(this instanceof a))return new a(e,t,s);var u=e;"string"==typeof e&&(u=document.querySelectorAll(e)),u?(this.elements=function(e){if(Array.isArray(e))return e;if("object"==typeof e&&"number"==typeof e.length)return r.call(e);return[e]}(u),this.options=i({},this.options),"function"==typeof t?s=t:i(this.options,t),s&&this.on("always",s),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(u||e))}a.prototype=Object.create(t.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&s[t]){for(var n=e.querySelectorAll("img"),o=0;o<n.length;o++){var i=n[o];this.addImage(i)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(o=0;o<r.length;o++){var a=r[o];this.addElementBackgroundImages(a)}}}};var s={1:!0,9:!0,11:!0};function u(e){this.img=e}function c(e,t){this.url=e,this.element=t,this.img=new Image}return a.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,o=n.exec(t.backgroundImage);null!==o;){var i=o&&o[2];i&&this.addBackground(i,e),o=n.exec(t.backgroundImage)}},a.prototype.addImage=function(e){var t=new u(e);this.images.push(t)},a.prototype.addBackground=function(e,t){var n=new c(e,t);this.images.push(n)},a.prototype.check=function(){var e=this;function t(t,n,o){setTimeout(function(){e.progress(t,n,o)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},a.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+n,e,t)},a.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},u.prototype=Object.create(t.prototype),u.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},u.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},u.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},u.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},u.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},u.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},u.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype=Object.create(u.prototype),c.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},c.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},a.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((n=t).fn.imagesLoaded=function(e,t){return new a(this,e,t).jqDeferred.promise(n(this))})},a.makeJQueryPlugin(),a}(r,e)}.apply(t,o))||(e.exports=i)}("undefined"!=typeof window?window:this)}}]);
//# sourceMappingURL=ebcsv-view-main-view-helper~ebcsv-view-mkcsv-view-helper-6809a2d3cd6253ec2ea1.js.map