(self.webpackJsonp=self.webpackJsonp||[]).push([[3],{103:function(e,t,n){"use strict";var o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(o):void 0};var c,i,s,a,l,p,f,d,h,u,m,v,b,_,g;h=n(0),c=n(4),i=n(1),f=n(2),n(82),g=n(3),n(128),n(121),_=n(5);var y=n(34);y.make_field_input,y.make_field_select,n(20).modal_close_button,s=n(167),l=n(130),p=i.Radio.channel("global"),d=i.Radio.channel("messages"),i.Radio.channel("sofi"),p.request("main:app:BaseModalView"),g.renderable(function(e,t){return g.dl(".dl-horizontal",function(){return g.dt(e),g.dd(t)})}),b=g.renderable(function(n){var e;if(e=".btn.btn-default",g.span(".info-button"+e,function(){return g.i(".fa.fa-info"," Info")}),g.span(".photos-button"+e,function(){var e,t;return t=" Photos",(null!=n&&null!=(e=n.photos)?e.length:void 0)&&(t=" "+n.photos.length+" Photos"),g.i(".fa.fa-photo",t)}),null!=n?n.workspaceView:void 0)return"add"===n.workspaceView?g.span(".workspace-button"+e,function(){return" Add",g.i(".fa.fa-plus-square",{style:"text-overflow:ellipsis;"}," Add")}):g.span(".workspace-button"+e,function(){return" Remove",g.i(".fa.fa-minus-square",{style:"text-overflow:ellipsis;"}," Remove")})}),m=["issue","currentprice","ReleaseDate","publisher","seriesgroup","series","quantity"],u=["table","table-striped","table-bordered","table-hover"],v=g.renderable(function(s){return g.div(".col-sm-8",function(){return g.table("."+u.join("."),function(){var e,t,n,o,i,r;for((null!=s&&null!=(o=s.workspace)?o.name:void 0)&&(r="#sofi/comics/workspace/view/"+s.workspace.name,g.tr(function(){return g.td(function(){return g.strong("Workspace")}),g.td(function(){return g.a({href:r},s.workspace.name)})})),i=[],t=0,n=m.length;t<n;t++)e=m[t],i.push(g.tr(function(){return g.td(function(){return g.strong(e)}),g.td(s[e])}));return i})})}),a=function(){var e=function(e){function u(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments));return e._scrapeAndSetImageSrc=e._scrapeAndSetImageSrc.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,s),o(u,[{key:"ui",value:function(){return h.extend(r(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"ui",this).call(this),{photos_btn:".photos-button",workspace_btn:".workspace-button"})}},{key:"events",value:function(){return h.extend(r(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"events",this).call(this),{"click @ui.photos_btn":"managePhotos","click @ui.workspace_btn":"addToWorkspace"})}},{key:"templateContext",value:function(){var e,t,n,o,i;return(t=r(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"templateContext",this).call(this)).workspaceView=this.getOption("workspaceView"),t.columnClass="col-sm-5",e=this.model.toJSON(),null==(null!=t?t.series:void 0)&&null==(null!=e?e.series:void 0)&&(t.series=e.mainsection.series.displayname),null!=(null!=t?t.issue:void 0)&&null==(null!=e?e.issue:void 0)||(t.issue=e.issue),null!=t&&t.url||null!=(null!=e?e.url:void 0)||(i=null!=e&&null!=(n=e.links)&&null!=(o=n.link)?o.url:void 0,t.url=i||"UNAVAILABLE"),t}},{key:"mouse_leave_item",value:function(e){return this.ui.info_btn.show()}},{key:"managePhotos",value:function(){var e;return e=this.model.get("comic_id"),_("#sofi/comics/photos/"+e)}},{key:"addToWorkspace",value:function(){return this.trigger("workspace:add:comic",this.model)}},{key:"showJsonView",value:function(){var n=this;return this.model.fetch().done(function(){var e,t;return n.model.has("comic")?(e=JSON.parse(n.model.get("comic").content),t=new l({model:new i.Model(e)}),p.request("show-modal",t)):r(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"showJsonView",n).call(n)})}},{key:"getComicRow",value:function(){return this.model.has("comic")?this.model.get("comic"):this.model.toJSON()}},{key:"onDomRefresh",value:function(){var e,t,n,o;return this.$el.draggable(),this.$el.droppable(),"UNAVAILABLE"!==(o=(e=this.getComicRow()).url)?"UNSET"===(t=e.image_src)||void 0===t?this._get_comic_data(o,this._scrapeAndSetImageSrc):(n=new i.Model({image_src:t,url:o}),this.showComicImage(n,!1)):(console.warn("NO IMAGE"),this._show_unavailable_image())}},{key:"_get_comic_data",value:function(e,t){var n,o;return console.warn("_get_comic_data",e),n=new URL(e),(o=i.ajax({type:"GET",dataType:"html",url:"/clzcore"+n.pathname})).done(function(){return t(e,o.responseText)}),o.fail(function(){return d.request("warning","Couldn't get the info")})}},{key:"_scrapeAndSetImageSrc",value:function(e,t){var n,o,i,r,s,a,l=this;for(function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,u),a=[],i=0,r=(n=c.parseHTML(t)).length;i<r;i++)"LINK"===(o=n[i]).tagName&&"image_src"===o.rel&&a.push(o);return 1<a.length&&d.request("warning","Too many links for this comic."),s=a[0],this.model.set("image_src",s.href),this.model.save().done(function(){return l.showComicImage(l.model)})}},{key:"_show_unavailable_image",value:function(){var e;return e=new f.View({template:g.renderable(function(){return g.i(".fa.fa-exclamation-triangle.fa-4x",{style:"width:74px;height:115px;"})})}),this.showChildView("image",e)}},{key:"show_comic",value:function(){var e;return e=this.model.get("image_src"),console.log("show_comic image_src",e)}}]),u}();return e.prototype.childViewTriggers={"show:image":"show:image"},e.prototype.template=g.renderable(function(e){var t;return t=e.issue,(null!=e?e.issueext:void 0)&&(t=""+e.issue+e.issueext),g.div(e.entryClasses+"."+e.columnClass,function(){return g.p(".text-center",function(){return g.strong(e.series+" #"+t)}),g.div(".row",function(){return g.div(".col-sm-2",function(){return g.div(".comic-image.thumb"),b(e)}),g.div(".col-sm-3.col-sm-offset-1",function(){return v(e)})})})}),e}.call(void 0),e.exports=a},107:function(e,t,n){"use strict";var o,i,r,s,a,l,u,c,p=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=n(1),l=n(2),c=n(3);var m=n(34);m.make_field_input,m.make_field_select;var v=n(20);u=v.modal_close_button,a=o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("sofi"),i=a.request("main:app:BaseModalView"),s=function(){var e=function(e){function t(){return f(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,i),t}();return e.prototype.template=c.renderable(function(e){return e.mainsection,c.div(".modal-dialog",function(){return c.div(".modal-content",function(){return c.div(".modal-body",function(){return c.img({src:e.image_src})}),c.div(".modal-footer",function(){return c.ul(".list-inline",function(){return"btn.btn-default.btn-sm",c.li("#close-modal",function(){return u("Close","check")})})})})})}),e}.call(void 0),r=function(e){function t(){return f(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,l.Behavior),p(t,[{key:"onShowImageModal",value:function(){var e;return e=new s({model:this.view.model}),a.request("show-modal",e)}}]),t}(),e.exports=r},120:function(e,t,n){"use strict";var o,i,r,s,a,l,u=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();n(4),i=n(1),a=n(2),n(82),l=n(3),n(5);var c=n(34);c.make_field_input,c.make_field_select,n(20).modal_close_button,s=n(107),i.Radio.channel("global"),i.Radio.channel("messages"),o=i.Radio.channel("sofi"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.View),u(t,[{key:"onDomRefresh",value:function(){return this.trigger("show:image")}}]),t}();return e.prototype.template=l.renderable(function(e){var t;return t=o.request("fix-image-url",e.image_src),l.img(".thumb.media-object",{src:t})}),e.prototype.ui={image:"img"},e.prototype.triggers={"click @ui.image":"show:image:modal"},e.prototype.behaviors=[s],e}.call(void 0),e.exports=r},121:function(e,t,n){var o,i,r;
/*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */i=[n(4),n(128),n(195),n(93),n(154)],void 0===(r="function"==typeof(o=function(a){a.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,t=this.options,n=t.accept;this.isover=!1,this.isout=!0,this.accept=a.isFunction(n)?n:function(e){return e.is(n)},this.proportions=function(){if(!arguments.length)return e||(e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight});e=arguments[0]},this._addToManager(t.scope),t.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){a.ui.ddmanager.droppables[e]=a.ui.ddmanager.droppables[e]||[],a.ui.ddmanager.droppables[e].push(this)},_splice:function(e){for(var t=0;t<e.length;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var e=a.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,t){if("accept"===e)this.accept=a.isFunction(t)?t:function(e){return e.is(t)};else if("scope"===e){var n=a.ui.ddmanager.droppables[this.options.scope];this._splice(n),this._addToManager(t)}this._super(e,t)},_activate:function(e){var t=a.ui.ddmanager.current;this._addActiveClass(),t&&this._trigger("activate",e,this.ui(t))},_deactivate:function(e){var t=a.ui.ddmanager.current;this._removeActiveClass(),t&&this._trigger("deactivate",e,this.ui(t))},_over:function(e){var t=a.ui.ddmanager.current;t&&(t.currentItem||t.element)[0]!==this.element[0]&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(t)))},_out:function(e){var t=a.ui.ddmanager.current;t&&(t.currentItem||t.element)[0]!==this.element[0]&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(t)))},_drop:function(t,e){var n=e||a.ui.ddmanager.current,o=!1;return!(!n||(n.currentItem||n.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=a(this).droppable("instance");if(e.options.greedy&&!e.options.disabled&&e.options.scope===n.options.scope&&e.accept.call(e.element[0],n.currentItem||n.element)&&l(n,a.extend(e,{offset:e.element.offset()}),e.options.tolerance,t))return!(o=!0)}),!o&&!!this.accept.call(this.element[0],n.currentItem||n.element)&&(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",t,this.ui(n)),this.element))},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var l=a.ui.intersect=function(){function f(e,t,n){return t<=e&&e<t+n}return function(e,t,n,o){if(!t.offset)return!1;var i=(e.positionAbs||e.position.absolute).left+e.margins.left,r=(e.positionAbs||e.position.absolute).top+e.margins.top,s=i+e.helperProportions.width,a=r+e.helperProportions.height,l=t.offset.left,u=t.offset.top,c=l+t.proportions().width,p=u+t.proportions().height;switch(n){case"fit":return l<=i&&s<=c&&u<=r&&a<=p;case"intersect":return l<i+e.helperProportions.width/2&&s-e.helperProportions.width/2<c&&u<r+e.helperProportions.height/2&&a-e.helperProportions.height/2<p;case"pointer":return f(o.pageY,u,t.proportions().height)&&f(o.pageX,l,t.proportions().width);case"touch":return(u<=r&&r<=p||u<=a&&a<=p||r<u&&p<a)&&(l<=i&&i<=c||l<=s&&s<=c||i<l&&c<s);default:return!1}}}();return!(a.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(e,t){var n,o,i=a.ui.ddmanager.droppables[e.options.scope]||[],r=t?t.type:null,s=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();e:for(n=0;n<i.length;n++)if(!(i[n].options.disabled||e&&!i[n].accept.call(i[n].element[0],e.currentItem||e.element))){for(o=0;o<s.length;o++)if(s[o]===i[n].element[0]){i[n].proportions().height=0;continue e}i[n].visible="none"!==i[n].element.css("display"),i[n].visible&&("mousedown"===r&&i[n]._activate.call(i[n],t),i[n].offset=i[n].element.offset(),i[n].proportions({width:i[n].element[0].offsetWidth,height:i[n].element[0].offsetHeight}))}},drop:function(e,t){var n=!1;return a.each((a.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&l(e,this,this.options.tolerance,t)&&(n=this._drop.call(this,t)||n),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,t)))}),n},dragStart:function(e,t){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||a.ui.ddmanager.prepareOffsets(e,t)})},drag:function(r,s){r.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(r,s),a.each(a.ui.ddmanager.droppables[r.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var e,t,n,o=l(r,this,this.options.tolerance,s),i=!o&&this.isover?"isout":o&&!this.isover?"isover":null;i&&(this.options.greedy&&(t=this.options.scope,(n=this.element.parents(":data(ui-droppable)").filter(function(){return a(this).droppable("instance").options.scope===t})).length&&((e=a(n[0]).droppable("instance")).greedyChild="isover"===i)),e&&"isover"===i&&(e.isover=!1,e.isout=!0,e._out.call(e,s)),this[i]=!0,this["isout"===i?"isover":"isout"]=!1,this["isover"===i?"_over":"_out"].call(this,s),e&&"isout"===i&&(e.isout=!1,e.isover=!0,e._over.call(e,s)))}})},dragStop:function(e,t){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||a.ui.ddmanager.prepareOffsets(e,t)}})!==a.uiBackCompat&&a.widget("ui.droppable",a.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),a.ui.droppable})?o.apply(t,i):o)||(e.exports=r)},130:function(e,t,n){"use strict";var o,i,r,s,a,l,u,c=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();n(0),o=n(1),a=n(2),u=n(3),r=n(85),n(86),n(35),i=n(45);var p=n(20);l=p.modal_close_button,o.Radio.channel("global"),o.Radio.channel("sofi"),s=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.View),c(t,[{key:"expand_view",value:function(){return this.expanded_view?(this.json_view.collapse(!0),this.expanded_view=!1,this.ui.expand_btn.text("Expand")):(this.json_view.expand(!0),this.expanded_view=!0,this.ui.expand_btn.text("Collapse"))}},{key:"onDomRefresh",value:function(){var e;return this.expanded_view=!1,e=this.model.has("content")?this.model.get("content"):this.model.toJSON(),this.json_view=new r(e),this.ui.body.prepend(this.json_view.dom)}}]),t}();return e.prototype.behaviors=[i],e.prototype.template=u.renderable(function(e){var t;return e=(null!=e?e.content:void 0)||e,t=e.mainsection,u.div(".modal-dialog",function(){return u.div(".modal-content",function(){return u.h3(t.series.displayname+" #"+t.issue),u.div(".modal-body",function(){return u.div(".expand-button.btn.btn-default","Expand"),u.div(".panel")}),u.div(".modal-footer",function(){return u.ul(".list-inline",function(){return"btn.btn-default.btn-sm",u.li("#close-modal",function(){return l("Close","check")})})})})})}),e.prototype.ui={body:".panel",expand_btn:".expand-button",close_btn:"#close-modal div"},e.prototype.events={"click @ui.expand_btn":"expand_view"},e}.call(void 0),e.exports=s},167:function(e,t,n){"use strict";var o,i,r,s,a=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();n(4),o=n(1),n(2),n(82),s=n(3),n(5);var l=n(34);l.make_field_input,l.make_field_select,n(20).modal_close_button,n(120),r=n(168),o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("sofi"),i=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r),a(t,[{key:"templateContext",value:function(){var e,t,n,o,i,r;return t={entryClasses:".item.listview-list-entry.thumbnail",columnClass:"col-sm-2",infoButtonClasses:".fa.fa-info.fa-pull-left.btn.btn-default.btn-sm"},this.model.has("inDatabase")&&(n=this.model.get("inDatabase"),t.entryClasses=n?(console.log("MODEL IN DATABASE"),".item.alert.alert-success"):".item.alert.alert-danger"),this.getOption("workspace")?this.workspaceContext(t):((null!=(e=this.model.toJSON())?e.series:void 0)||(t.series=e.mainsection.series.displayname),(null!=e?e.issue:void 0)||(t.issue=e.issue),(null!=e?e.issueext:void 0)||(null!=e?e.issueext:void 0)&&(t.issueext=e.issueext),(null!=e?e.url:void 0)||(r=null!=e&&null!=(o=e.links)&&null!=(i=o.link)?i.url:void 0,t.url=r||"UNAVAILABLE"),t)}},{key:"workspaceContext",value:function(e){var t;return t=this.model.get("comic"),e.series=t.series,e.issue=t.issue,e.issueext=t.issueext,e.url=t.url,e}}]),t}();return e.prototype.template=s.renderable(function(e){var t;return t=e.issue,(null!=e?e.issueext:void 0)&&(t=""+e.issue+e.issueext),s.div(e.entryClasses+"."+e.columnClass,function(){return s.div(".comic-image",function(){return s.i(".fa.fa-spinner.fa-spin"),s.text(" loading...")}),s.div(".caption",function(){return s.span(function(){return s.i(".info-button"+e.infoButtonClasses),s.h5({style:"text-overflow: ellipsis;"},e.series+" #"+t)}),"UNAVAILABLE"!==e.url?s.a(".clz-link",{href:""+e.url,target:"_blank"},"cloud link"):(console.log("MODEL.URL",e.url),s.span(".alert.alert-danger","URL UNAVAILABLE"))})})}),e}.call(void 0),e.exports=i},168:function(e,t,n){"use strict";var o,i,r,s,a,l,u,c,p=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();n(4),o=n(1),u=n(2),n(82),c=n(3),n(5);var f=n(34);f.make_field_input,f.make_field_select,n(20).modal_close_button,s=n(169),r=n(120),a=n(130),l=o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("sofi"),i=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.View),p(t,[{key:"ui",value:function(){return{info_btn:".info-button",clz_link:".clz-link",item:".item",image:".comic-image"}}},{key:"regions",value:function(){return{image:"@ui.image"}}},{key:"events",value:function(){return{"click @ui.info_btn":"showJsonView","click @ui.clz_link":"showIframeView"}}},{key:"showIframeView",value:function(e){var t,n;if(e.preventDefault(),"A"===(t=e.target).tagName)return n=new s({model:new o.Model({src:t.href})}),l.request("show-modal",n)}},{key:"showJsonView",value:function(e){var t;return t=new a({model:this.model}),l.request("show-modal",t)}},{key:"showComicImage",value:function(e){var t;return t=new r({model:e}),this.showChildView("image",t)}}]),t}();return e.prototype.template=c.renderable(function(e){var t;return t=e.issue,(null!=e?e.issueext:void 0)&&(t=""+e.issue+e.issueext),c.div(e.entryClasses+"."+e.columnClass,function(){return c.div(".comic-image",function(){return c.i(".fa.fa-spinner.fa-spin"),c.text(" loading...")}),c.div(".caption",function(){return c.span(function(){return c.i(".info-button"+e.infoButtonClasses),c.h5({style:"text-overflow: ellipsis;"},e.series+" #"+t)}),"UNAVAILABLE"!==e.url?c.a(".clz-link",{href:""+e.url,target:"_blank"},"cloud link"):(console.log("MODEL.URL",e.url),c.span(".alert.alert-danger","URL UNAVAILABLE"))})})}),e}.call(void 0),e.exports=i},169:function(e,t,n){"use strict";var o,i,r,s,a,l;n(4),o=n(1),n(2),n(82),l=n(3),n(5);var u=n(34);u.make_field_input,u.make_field_select;var c=n(20);a=c.modal_close_button,n(107),s=o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("sofi"),i=s.request("main:app:BaseModalView"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i),t}();return e.prototype.template=l.renderable(function(t){return t.mainsection,l.div(".modal-dialog.modal-lg",function(){return l.div(".modal-content",function(){return l.div(".modal-body",function(){var e;return e=t.src.replace("http://","//"),l.iframe({style:"width:97%;height:75vh;",src:e})}),l.div(".modal-footer",function(){return l.ul(".list-inline",function(){return"btn.btn-default.btn-sm",l.li("#close-modal",function(){return a("Close","check")})})})})})}),e}.call(void 0),e.exports=r},94:function(e,t,n){"use strict";var o,i,r=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();n(1),i=n(2),n(3),o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Behavior),r(t,[{key:"onSetHeader",value:function(e){return this.ui.header.text(e)}}]),t}(),e.exports=o}}]);
//# sourceMappingURL=sofi:views:createWorkspaceView~sofi:views:mainview~sofi:views:showWorkspaceMainView~sofi:views:showW~5c0629b8-d03cb4b31a73a482a6f3.js.map