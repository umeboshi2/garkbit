(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(e,t,n){"use strict";var o,r,i,a,s,u,l,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=n(1),u=n(2),c=n(3);var m=n(30);m.make_field_input,m.make_field_select;var y=n(17);l=y.modal_close_button,s=o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("sofi"),r=s.request("main:app:BaseModalView"),a=function(){var e=function(e){function t(){return p(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,r),t}();return e.prototype.template=c.renderable(function(e){return e.mainsection,c.div(".modal-dialog",function(){return c.div(".modal-content",function(){return c.div(".modal-body",function(){return c.img({src:e.image_src})}),c.div(".modal-footer",function(){return c.ul(".list-inline",function(){return"btn.btn-default.btn-sm",c.li("#close-modal",function(){return l("Close","check")})})})})})}),e}.call(void 0),i=function(e){function t(){return p(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,u.Behavior),f(t,[{key:"onShowImageModal",value:function(){var e;return e=new a({model:this.view.model}),s.request("show-modal",e)}}]),t}(),e.exports=i},115:function(e,t,n){"use strict";var o,r,i,a,s,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(4),r=n(1),n(2),n(81),s=n(3),n(5);var l=n(30);l.make_field_input,l.make_field_select,n(17).modal_close_button,a=n(103),r.Radio.channel("global"),r.Radio.channel("messages"),o=r.Radio.channel("sofi"),i=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Marionette.View),u(t,[{key:"onDomRefresh",value:function(){return this.trigger("show:image")}}]),t}();return e.prototype.template=s.renderable(function(e){var t;return t=o.request("fix-image-url",e.image_src),s.img(".thumb.media-object",{src:t})}),e.prototype.ui={image:"img"},e.prototype.triggers={"click @ui.image":"show:image:modal"},e.prototype.behaviors=[a],e}.call(void 0),e.exports=i},122:function(e,t,n){"use strict";var o,r,i,a,s,u,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(0),o=n(1),n(2),u=n(3),i=n(86),n(85),n(31),r=n(41);var c=n(17);s=c.modal_close_button,o.Radio.channel("global"),o.Radio.channel("sofi"),a=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Marionette.View),l(t,[{key:"expand_view",value:function(){return this.expanded_view?(this.json_view.collapse(!0),this.expanded_view=!1,this.ui.expand_btn.text("Expand")):(this.json_view.expand(!0),this.expanded_view=!0,this.ui.expand_btn.text("Collapse"))}},{key:"onDomRefresh",value:function(){var e;return this.expanded_view=!1,e=this.model.has("content")?this.model.get("content"):this.model.toJSON(),this.json_view=new i(e),this.ui.body.prepend(this.json_view.dom)}}]),t}();return e.prototype.behaviors=[r],e.prototype.template=u.renderable(function(e){var t;return e=(null!=e?e.content:void 0)||e,t=e.mainsection,u.div(".modal-dialog",function(){return u.div(".modal-content",function(){return u.h3(t.series.displayname+" #"+t.issue),u.div(".modal-body",function(){return u.div(".expand-button.btn.btn-default","Expand"),u.div(".panel")}),u.div(".modal-footer",function(){return u.ul(".list-inline",function(){return"btn.btn-default.btn-sm",u.li("#close-modal",function(){return s("Close","check")})})})})})}),e.prototype.ui={body:".panel",expand_btn:".expand-button",close_btn:"#close-modal div"},e.prototype.events={"click @ui.expand_btn":"expand_view"},e}.call(void 0),e.exports=a},133:function(e,t,n){"use strict";var o,r,i,a,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(1),r=n(2),i=n(81),a=n(84),o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Behavior),s(t,[{key:"ui",value:function(){return{list:this.getOption("listContainer")}}},{key:"setMasonry",value:function(){var e,t;return e=this.getOption("listContainer"),t=this.getOption("masonryOptions"),this.view.masonry=new i(e,t)}},{key:"setMasonryLayout",value:function(){var e,t,n=this;return t=this.getOption("masonryOptions"),e=this.$(t.itemSelector),a(e,function(){return n.view.masonry.reloadItems(),n.view.masonry.layout()})}},{key:"onBeforeDestroy",value:function(){return this.view.masonry.destroy()}},{key:"onDomRefresh",value:function(){var e;if(this.setMasonry(),this.setMasonryLayout(),null!=(e=this.view)?e.afterDomRefresh:void 0)return this.view.afterDomRefresh()}}]),t}();return e.prototype.options={listContainer:".list-container",channel:"global",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},e.prototype.regions={list:"@ui.list"},e}.call(void 0),e.exports=o},134:function(e,t,n){"use strict";var o,r,i,a,s,u;n(4),o=n(1),n(2),n(81),u=n(3),n(5);var l=n(30);l.make_field_input,l.make_field_select;var c=n(17);s=c.modal_close_button,n(103),a=o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("sofi"),r=a.request("main:app:BaseModalView"),i=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r),t}();return e.prototype.template=u.renderable(function(e){return e.mainsection,u.div(".modal-dialog.modal-lg",function(){return u.div(".modal-content",function(){return u.div(".modal-body",function(){var t;return t=e.src.replace("http://","//"),u.iframe({style:"width:97%;height:75vh;",src:t})}),u.div(".modal-footer",function(){return u.ul(".list-inline",function(){return"btn.btn-default.btn-sm",u.li("#close-modal",function(){return s("Close","check")})})})})})}),e}.call(void 0),e.exports=i},135:function(e,t,n){"use strict";var o,r,i,a,s,u,l,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(4),o=n(1),l=n(2),n(81),c=n(3),n(5);var p=n(30);p.make_field_input,p.make_field_select,n(17).modal_close_button,a=n(134),i=n(115),s=n(122),u=o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("sofi"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.View),f(t,[{key:"ui",value:function(){return{info_btn:".info-button",clz_link:".clz-link",item:".item",image:".comic-image"}}},{key:"regions",value:function(){return{image:"@ui.image"}}},{key:"events",value:function(){return{"click @ui.info_btn":"showJsonView","click @ui.clz_link":"showIframeView"}}},{key:"showIframeView",value:function(e){var t,n;if(e.preventDefault(),"A"===(t=e.target).tagName)return n=new a({model:new o.Model({src:t.href})}),u.request("show-modal",n)}},{key:"showJsonView",value:function(e){var t;return t=new s({model:this.model}),u.request("show-modal",t)}},{key:"showComicImage",value:function(e){var t;return t=new i({model:e}),this.showChildView("image",t)}}]),t}();return e.prototype.template=c.renderable(function(e){var t;return t=e.issue,(null!=e?e.issueext:void 0)&&(t=""+e.issue+e.issueext),c.div(e.entryClasses+"."+e.columnClass,function(){return c.div(".comic-image",function(){return c.i(".fa.fa-spinner.fa-spin"),c.text(" loading...")}),c.div(".caption",function(){return c.span(function(){return c.i(".info-button"+e.infoButtonClasses),c.h5({style:"text-overflow: ellipsis;"},e.series+" #"+t)}),"UNAVAILABLE"!==e.url?c.a(".clz-link",{href:""+e.url,target:"_blank"},"cloud link"):(console.log("MODEL.URL",e.url),c.span(".alert.alert-danger","URL UNAVAILABLE"))})})}),e}.call(void 0),e.exports=r},136:function(e,t,n){"use strict";var o,r,i,a,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(4),o=n(1),n(2),n(81),a=n(3),n(5);var u=n(30);u.make_field_input,u.make_field_select,n(17).modal_close_button,n(115),i=n(135),o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("sofi"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i),s(t,[{key:"templateContext",value:function(){var e,t,n,o,r;return t={entryClasses:".item.listview-list-entry.thumbnail",columnClass:"col-sm-2",infoButtonClasses:".fa.fa-info.fa-pull-left.btn.btn-default.btn-sm"},this.model.has("inDatabase")&&(this.model.get("inDatabase")?(console.log("MODEL IN DATABASE"),t.entryClasses=".item.alert.alert-success"):t.entryClasses=".item.alert.alert-danger"),this.getOption("workspace")?this.workspaceContext(t):((null!=(e=this.model.toJSON())?e.series:void 0)||(t.series=e.mainsection.series.displayname),(null!=e?e.issue:void 0)||(t.issue=e.issue),(null!=e?e.issueext:void 0)||(null!=e?e.issueext:void 0)&&(t.issueext=e.issueext),(null!=e?e.url:void 0)||(r=null!=e&&null!=(n=e.links)&&null!=(o=n.link)?o.url:void 0,t.url=r||"UNAVAILABLE"),t)}},{key:"workspaceContext",value:function(e){var t;return t=this.model.get("comic"),e.series=t.series,e.issue=t.issue,e.issueext=t.issueext,e.url=t.url,e}}]),t}();return e.prototype.template=a.renderable(function(e){var t;return t=e.issue,(null!=e?e.issueext:void 0)&&(t=""+e.issue+e.issueext),a.div(e.entryClasses+"."+e.columnClass,function(){return a.div(".comic-image",function(){return a.i(".fa.fa-spinner.fa-spin"),a.text(" loading...")}),a.div(".caption",function(){return a.span(function(){return a.i(".info-button"+e.infoButtonClasses),a.h5({style:"text-overflow: ellipsis;"},e.series+" #"+t)}),"UNAVAILABLE"!==e.url?a.a(".clz-link",{href:""+e.url,target:"_blank"},"cloud link"):(console.log("MODEL.URL",e.url),a.span(".alert.alert-danger","URL UNAVAILABLE"))})})}),e}.call(void 0),e.exports=r},137:function(e,t,n){"use strict";var o,r,i,a,s,u,l,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(4),o=n(1),n(2),n(81),n(84),c=n(3),s=n(39),n(5);var m=n(30);m.make_field_input,m.make_field_select,i=n(182),l=n(133),o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("sofi"),u=function(e){function t(){return p(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,l),f(t,[{key:"onChildviewShowImage",value:function(e){return this.setMasonryLayout()}}]),t}(),r=function(){var e=function(e){function t(){return p(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,o.Marionette.CollectionView),t}();return e.prototype.childView=i,e.prototype.emptyView=s,e.prototype.childViewTriggers={"show:image":"show:image"},e}.call(void 0),a=function(){var e=function(e){function t(){return p(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,o.Marionette.View),f(t,[{key:"ui",value:function(){return{list:this.getOption("listContainer")}}},{key:"onRender",value:function(){var e;return e=new r({collection:this.collection}),this.showChildView("list",e)}}]),t}();return e.prototype.options={listContainer:"#comiclist-container"},e.prototype.regions={list:"@ui.list"},e.prototype.behaviors={HasLateImages:{behaviorClass:u,listContainer:"#comiclist-container",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!1}}},e.prototype.template=c.renderable(function(e){return c.div("#comiclist-container")}),e}.call(void 0),e.exports=a},182:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r,i,a,s,u,l;r=n(4),a=n(1),n(2),n(81),n(3),n(5);var c=n(30);c.make_field_input,c.make_field_select,n(17).modal_close_button,s=n(136),a.Radio.channel("global"),l=a.Radio.channel("messages"),i=a.Radio.channel("sofi"),u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.parseContentShowImage=e.parseContentShowImage.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s),o(t,[{key:"onDomRefresh",value:function(){var e,t,n;if(n=null!=(e=this.model.get("links"))&&null!=(t=e.link)?t.url:void 0)return this._prepareShowComicImage(n)}},{key:"_prepareShowComicImage",value:function(e){var t,n;return(n=i.request("get-comic-image-urls"))[e]?(t=new a.Model({image_src:n[e],url:e}),this.showComicImage(t)):this._get_comic_from_db()}},{key:"_retrieveCloudPage",value:function(e,t){var n,o;return n=new URL(e),(o=a.ajax({type:"GET",dataType:"html",url:"/clzcore"+n.pathname})).done(function(){return t(e,o.responseText)}),o.fail(function(){return l.request("warning","Couldn't get the info")})}},{key:"parseContentShowImage",value:function(e,n){var o,s,u,c,f,p,h;for(function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),p=[],u=0,f=(o=r.parseHTML(n)).length;u<f;u++)"LINK"===(s=o[u]).tagName&&"image_src"===s.rel&&p.push(s);return p.length>1&&l.request("warning","Too many links for this comic."),c=p[0].href,i.request("add-comic-image-url",e,c),h=new a.Model({url:e,image_src:c}),this.showComicImage(h)}},{key:"_get_comic_from_db",value:function(){var e,t,n,o,r,a=this;return n=this.model.get("links"),r=n.link.url,new URL(r),t=i.request("db:clzcomic:collectionClass"),(o=(e=new t).fetch({data:{where:{url:r}}})).fail(function(){var e;return e="There was a problem talking to the server",l.request("warning",e)}),o.done(function(){var t;return e.length>1&&l.request("warning",r+" is not unique!"),e.length?(t=e.models[0],a.showComicImage(t)):a._retrieveCloudPage(r,a.parseContentShowImage)})}},{key:"show_comic",value:function(){var e,t,n,o,r=this;return t=this.model.get("links"),o=t.link.url,(n=(e=i.request("db:clzcomic:collection")).fetch({data:{where:{url:o}}})).fail(function(){var e;return e="There was a problem talking to the server",l.request("warning",e)}),n.done(function(){if(e.length>1&&l.request("warning",o+" is not unique!"),!e.length)return r._retrieveCloudPage(o,r.parseContentShowImage)})}}]),t}(),e.exports=u},84:function(e,t,n){var o,r;
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
!function(i,a){"use strict";o=[n(96)],void 0===(r=function(e){return function(e,t){var n=e.jQuery,o=e.console;function r(e,t){for(var n in t)e[n]=t[n];return e}var i=Array.prototype.slice;function a(e,t,s){if(!(this instanceof a))return new a(e,t,s);var u=e;"string"==typeof e&&(u=document.querySelectorAll(e)),u?(this.elements=function(e){if(Array.isArray(e))return e;if("object"==typeof e&&"number"==typeof e.length)return i.call(e);return[e]}(u),this.options=r({},this.options),"function"==typeof t?s=t:r(this.options,t),s&&this.on("always",s),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(u||e))}a.prototype=Object.create(t.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&s[t]){for(var n=e.querySelectorAll("img"),o=0;o<n.length;o++){var r=n[o];this.addImage(r)}if("string"==typeof this.options.background){var i=e.querySelectorAll(this.options.background);for(o=0;o<i.length;o++){var a=i[o];this.addElementBackgroundImages(a)}}}};var s={1:!0,9:!0,11:!0};function u(e){this.img=e}function l(e,t){this.url=e,this.element=t,this.img=new Image}return a.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,o=n.exec(t.backgroundImage);null!==o;){var r=o&&o[2];r&&this.addBackground(r,e),o=n.exec(t.backgroundImage)}},a.prototype.addImage=function(e){var t=new u(e);this.images.push(t)},a.prototype.addBackground=function(e,t){var n=new l(e,t);this.images.push(n)},a.prototype.check=function(){var e=this;function t(t,n,o){setTimeout(function(){e.progress(t,n,o)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},a.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+n,e,t)},a.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},u.prototype=Object.create(t.prototype),u.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},u.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},u.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},u.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},u.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},u.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},u.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype=Object.create(u.prototype),l.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},l.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},a.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((n=t).fn.imagesLoaded=function(e,t){return new a(this,e,t).jqDeferred.promise(n(this))})},a.makeJQueryPlugin(),a}(i,e)}.apply(t,o))||(e.exports=r)}("undefined"!=typeof window?window:this)}}]);
//# sourceMappingURL=sofi:views:-a4e7d45d3a2d4526756d.js.map