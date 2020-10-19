(self.webpackJsonp=self.webpackJsonp||[]).push([[76],{301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(16)),a=n(1),i=n(4),u=l(n(7));function l(e){return e&&e.__esModule?e:{default:e}}var s;s=function(){var e=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"options",value:function(){return{setKeyHandler:!1,barLength:15,barStopAt:7}}},{key:"templateContext",value:function(){return{collection:this.collection,barLength:this.getOption("barLength"),barStopAt:this.getOption("barStopAt")}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=(0,o.default)(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var e,t,n;return n=this.collection.state,t=this.ui.prevButton.parent(),n.currentPage===n.firstPage?t.hasClass("disabled")||t.addClass("disabled"):t.hasClass("disabled")&&t.removeClass("disabled"),e=this.ui.nextButton.parent(),n.currentPage===n.lastPage?e.hasClass("disabled")||e.addClass("disabled"):e.addClass("disabled")&&e.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),(0,o.default)('[data-pagenumber="'+n.currentPage+'"]').parent().addClass("active")}},{key:"getAnotherPage",value:function(e){var t,n,r,o;if(n=(o=this.collection.state).currentPage===o.lastPage,t=o.currentPage===o.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error("bad direction '"+e+"'")}r=this.collection.getNextPage()}else o.currentPage!==o.firstPage&&(r=this.collection.getPreviousPage());return this.updateNavButtons(),r}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var n,r,o,a;for(n in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),o=[],r=this.keycommands)a=r[n],e.keyCode===a?o.push(this.handleKeyCommand(n)):o.push(void 0);return o}},{key:"onRenderHandleKeys",value:function(){return(0,o.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,o.default)("html").unbind("keydown",this.keydownHandler)}}]),t}(i.View);return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=u.default.renderable((function(e){var t,n,r,o,i,l,s,f,c,d,p;for(r=(d=e instanceof a.Collection?e.state:e.collection.state).firstPage,t=!1,(i=d.lastPage)>e.barLength&&(t=!0,p=e.barStopAt,c=i-e.barStopAt),u.default.li(".page-item",(function(){return u.default.a(".prev.page-link",(function(){return u.default.i(".fa.fa-arrow-left")}))})),n=!1,l=o=s=r,f=i;s<=f?o<=f:o>=f;l=s<=f?++o:--o)t&&l>=p&&l<=c?n||(n=!0,u.default.li(".page-item",(function(){return u.default.a(".ellipsis-page.page-link","...")}))):u.default.li(".page-item",(function(){return u.default.a(".numbered-page.page-link",{href:"#",data:{pageNumber:l}},l)}));return u.default.li(".page-item",(function(){return u.default.a(".next.page-link",(function(){return u.default.i(".fa.fa-arrow-right")}))}))})),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(void 0),t.default=s},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7),a=(r=o)&&r.__esModule?r:{default:r};t.default=a.default.renderable((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"5x";return a.default.span(".fa-stack.fa-"+e,(function(){return a.default.i(".fa.fa-image.fa-stack-1x"),a.default.i(".fa.fa-ban.fa-stack-2x.text-danger")}))}))},480:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,a,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),s=n(4),f=n(7),c=(r=f)&&r.__esModule?r:{default:r};i=l.Radio.channel("messages"),a=c.default.renderable((function(e){return c.default.div(".modal-content",(function(){return c.default.div(".modal-header",(function(){return c.default.h3(".modal-title",(function(){return c.default.text("Do you really want to delete "+e.content.name+"?"),c.default.img({src:e.content.image.medium})})),c.default.button(".close",{type:"button",data:{dismiss:"modal"}},(function(){return c.default.span({"aria-hidden":"true"},(function(){return c.default.raw("&times")}))}))})),c.default.div(".modal-body",(function(){return c.default.div("#selected-children")})),c.default.div(".modal-footer",(function(){return c.default.button(".confirm-delete.btn.btn-primary",{type:"button",data:{dismiss:"modal"}},(function(){return c.default.i(".fa.fa-check"),c.default.text("OK")})),c.default.button(".cancel-delete.btn.btn-danger",{type:"button",data:{dismiss:"modal"}},(function(){return c.default.i(".fa.fa-close"),c.default.text("Cancel")}))}))}))})),o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"events",value:function(){return{"click @ui.confirmDelete":"confirmDelete"}}},{key:"confirmDelete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done((function(){return i.request("success",e+" deleted.")})),t.fail((function(){return i.request("danger",e+" NOT deleted.")}))}}]),t}(s.View);return e.prototype.template=a,e.prototype.className="modal-dialog",e.prototype.ui={confirmDelete:".confirm-delete",cancelButton:".cancel-delete"},e}.call(void 0),t.default=o},941:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,a,i,u,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=n(4),c=y(n(7)),d=y(n(301)),p=y(n(480)),h=y(n(942));function y(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}i=s.Radio.channel("global"),u=c.default.renderable((function(){return c.default.div(".listview-header",(function(){return c.default.text("TV Shows")})),c.default.nav(".paginate-bar"),c.default.button(".flat-list.btn.btn-info","Show flat list"),c.default.div(".show-list")})),o=function(){var e=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,e),l(t,[{key:"showRole",value:function(e){return e.preventDefault(),s.history.navigate("#tvmaze/shows/view/"+this.model.id,{trigger:!0})}},{key:"_show_modal",value:function(e,t){var n;return(n=i.request("main:app:object").getView().getRegion("modal")).backdrop=t,n.show(e)}},{key:"deleteItem",value:function(){var e;return e=new p.default({model:this.model}),this._show_modal(e,!0)}}]),t}(f.View);return e.prototype.template=h.default,e.prototype.templateContext={divStyle:"border-style:solid;border-width:3px",cardClasses:".bg-body-d5"},e.prototype.className="col-md-2",e.prototype.ui={item:".show-item",link:"a",deleteItem:".delete-item"},e.prototype.events={"click @ui.link":"showRole","click @ui.deleteItem":"deleteItem"},e}.call(void 0),r=function(){var e=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,e),t}(f.CollectionView);return e.prototype.childView=o,e.prototype.className="row",e}.call(void 0),a=function(){var e=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,e),l(t,[{key:"ui",value:function(){return{header:".listview-header",itemList:".show-list",flatListButton:".flat-list",paginateBar:".paginate-bar"}}},{key:"onRender",value:function(){var e,t;return t=new r({collection:this.collection}),this.showChildView("itemList",t),e=new d.default({collection:this.collection}),this.showChildView("paginateBar",e)}},{key:"onBeforeDestroy",value:function(){return this.collection.off("pageable:state:change")}},{key:"showFlatList",value:function(){return s.history.navigate("#tvmaze/shows/flat",{trigger:!0})}}]),t}(f.View);return e.prototype.template=u,e.prototype.options={listContainer:".show-list"},e.prototype.regions={paginateBar:"@ui.paginateBar",itemList:"@ui.itemList"},e.prototype.events={"click @ui.flatListButton":"showFlatList"},e}.call(void 0),t.default=a},942:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,a,i=l(n(7)),u=l(n(305));function l(e){return e&&e.__esModule?e:{default:e}}o="width:20%;border-style:solid;border-width:3px",r="col-md-3.bg-body-d5",a=i.default.renderable((function(e){var t;return o=e.divStyle||o,r=e.cardClasses||r,t="#tvmaze/view/show/"+e.id,i.default.div(".show-item.card."+r,{style:o},(function(){return i.default.div(".card-header",(function(){var t;return i.default.strong(".card-title",null!=e&&null!=(t=e.content)?t.name:void 0)})),i.default.div(".card-block",(function(){return i.default.a({href:t},(function(){var t,n,r,o;return(null!=(t=e.content)&&null!=(n=t.image)?n.medium:void 0)?i.default.img(".card-img-bottom",{src:null!=(r=e.content)&&null!=(o=r.image)?o.medium:void 0}):(0,u.default)("4x")}))}))}))})),t.default=a}}]);
//# sourceMappingURL=tvmaze-view-show-list-cards-8f9840e5698190bb0cdf.js.map