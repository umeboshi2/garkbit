(self.webpackJsonp=self.webpackJsonp||[]).push([[102],{116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(1)),u=s(n(2)),l=s(n(3));function s(e){return e&&e.__esModule?e:{default:e}}o=i.default.Radio.channel("messages"),r=l.default.renderable(function(e){return l.default.div(".modal-content",function(){return l.default.div(".modal-header",function(){return l.default.h3(".modal-title",function(){return l.default.text("Do you really want to delete "+e.content.name+"?"),l.default.img({src:e.content.image.medium})}),l.default.button(".close",{type:"button",data:{dismiss:"modal"}},function(){return l.default.span({"aria-hidden":"true"},function(){return l.default.raw("&times")})})}),l.default.div(".modal-body",function(){return l.default.div("#selected-children")}),l.default.div(".modal-footer",function(){return l.default.button(".confirm-delete.btn.btn-primary",{type:"button",data:{dismiss:"modal"}},function(){return l.default.i(".fa.fa-check"),l.default.text("OK")}),l.default.button(".cancel-delete.btn.btn-danger",{type:"button",data:{dismiss:"modal"}},function(){return l.default.i(".fa.fa-close"),l.default.text("Cancel")})})})}),t.default=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.View),a(t,[{key:"events",value:function(){return{"click @ui.confirmDelete":"confirmDelete"}}},{key:"confirmDelete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done(function(){return o.request("success",e+" deleted.")}),t.fail(function(){return o.request("danger",e+" NOT deleted.")})}}]),t}();return e.prototype.template=r,e.prototype.className="modal-dialog",e.prototype.ui={confirmDelete:".confirm-delete",cancelButton:".cancel-delete"},e}.call(void 0)},667:function(e,t,n){"use strict";var r,o,a,i,u,l,s,c,f,d,p,h,y,b,g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(4),r=n(1),s=n(2),y=n(3),p=n(32),h=n(5).default,c=n(99).default,o=n(116).default,l=r.Radio.channel("global"),r.Radio.channel("messages"),f=y.renderable(function(e){return".btn.btn-sm",y.li(".list-group-item",function(){return y.span(function(){return y.a({href:"#tvmaze/view/show/"+e.id},e.content.name)}),y.span(".btn-group.pull-right",function(){return y.button(".delete-item.btn.btn-sm.btn-danger.fa.fa-close",{style:"display:none"},"delete")})})}),d=y.renderable(function(e){return console.log("listTemplate",e),e.collection.state.totalPages,e.collection.state.firstPage,e.collection.state.lastPage,y.div(".listview-header",function(){return y.text("TV Shows")}),y.nav(".paginate-bar"),y.ul(".list-group")}),i=function(){var e=function(e){function t(){return m(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,s.View),g(t,[{key:"showRole",value:function(e){return e.preventDefault(),h("#tvmaze/shows/view/"+this.model.id)}},{key:"_show_modal",value:function(e,t){var n;return(n=l.request("main:app:object").getView().getRegion("modal")).backdrop=t,n.show(e)}},{key:"deleteItem",value:function(){var e;return e=new o({model:this.model}),this._show_modal(e,!0)}}]),t}();return e.prototype.template=f,e.prototype.ui={item:".list-group-item",link:"a",deleteItem:".delete-item"},e.prototype.events={"click @ui.link":"showRole","click @ui.deleteItem":"deleteItem"},e}.call(void 0),a=function(){var e=function(e){function t(){return m(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,s.CollectionView),t}();return e.prototype.childView=i,e}.call(void 0),u=function(){var e=function(e){function t(){return m(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,s.View),g(t,[{key:"templateContext",value:function(){return{collection:this.collection}}},{key:"onRender",value:function(){var e;return e=new a({collection:this.collection}),this.showChildView("itemList",e),e=new c({collection:this.collection}),this.showChildView("paginateBar",e)}}]),t}();return e.prototype.template=d,e.prototype.ui={header:".listview-header",paginateBar:".paginate-bar",itemList:".list-group"},e.prototype.regions={paginateBar:"@ui.paginateBar",itemList:"@ui.itemList"},e}.call(void 0),b=y.renderable(function(e){return y.div(".row.listview-list-entry",function(){return y.raw(p("# "+e.appName+" started."))})}),function(){var e=function(e){function t(){return m(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,s.View),t}();return e.prototype.template=b,e.prototype.templateContext={appName:"tvmaze"},e}.call(void 0),e.exports=u},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(4)),a=l(n(1)),i=n(2),u=l(n(3));function l(e){return e&&e.__esModule?e:{default:e}}a.default.Radio.channel("global"),a.default.Radio.channel("messages"),t.default=function(){var e=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.View),r(t,[{key:"options",value:function(){return{setKeyHandler:!1,barLength:15,barStopAt:7}}},{key:"templateContext",value:function(){return{collection:this.collection,barLength:this.getOption("barLength"),barStopAt:this.getOption("barStopAt")}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=(0,o.default)(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var e,t,n,r;return r=this.collection.state,n=this.ui.prevButton.parent(),r.currentPage===r.firstPage?n.hasClass("disabled")||n.addClass("disabled"):n.hasClass("disabled")&&n.removeClass("disabled"),t=this.ui.nextButton.parent(),r.currentPage===r.lastPage?t.hasClass("disabled")||t.addClass("disabled"):t.addClass("disabled")&&t.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),this.ui.numberedPage.removeClass("text-white"),this.ui.numberedPage.addClass("text-dark"),(e=(0,o.default)('[data-pagenumber="'+r.currentPage+'"]')).parent().addClass("active"),e.removeClass("text-dark"),e.addClass("text-white")}},{key:"getAnotherPage",value:function(e){var t,n,r,o;if(n=(o=this.collection.state).currentPage===o.lastPage,t=o.currentPage===o.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error("bad direction '"+e+"'")}r=this.collection.getNextPage()}else o.currentPage!==o.firstPage&&(r=this.collection.getPreviousPage());return this.updateNavButtons(),r}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var n,r,o,a;for(n in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),o=[],r=this.keycommands)a=r[n],e.keyCode===a?o.push(this.handleKeyCommand(n)):o.push(void 0);return o}},{key:"onRenderHandleKeys",value:function(){return(0,o.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,o.default)("html").unbind("keydown",this.keydownHandler)}}]),t}();return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=u.default.renderable(function(e){var t,n,r,o,i,l,s,c,f,d,p;for((d=e instanceof a.default.Collection?e.state:e.collection.state).totalPages,r=d.firstPage,t=!1,(i=d.lastPage)>e.barLength&&(t=!0,p=e.barStopAt,f=i-e.barStopAt),u.default.li(".page-item",function(){return u.default.a(".prev.page-link.bg-body-d5",function(){return u.default.i(".fa.fa-arrow-left")})}),n=!1,l=o=s=r,c=i;s<=c?o<=c:o>=c;l=s<=c?++o:--o)t&&l>=p&&l<=f?n||(n=!0,u.default.li(".page-item",function(){return u.default.a(".ellipsis-page.page-link.bg-body-d5.text-dark","...")})):u.default.li(".page-item",function(){return u.default.a(".numbered-page.page-link.bg-body-d5.text-dark",{href:"#",data:{pageNumber:l}},l)});return u.default.li(".page-item",function(){return u.default.a(".next.page-link.bg-body-d5",function(){return u.default.i(".fa.fa-arrow-right")})})}),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(void 0)}}]);
//# sourceMappingURL=tvmaze-view-show-list-flat-79abb62039029e0f1e31.js.map