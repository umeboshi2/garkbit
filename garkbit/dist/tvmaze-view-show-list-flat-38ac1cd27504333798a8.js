(self.webpackJsonp=self.webpackJsonp||[]).push([[94],{1158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,a,i,u,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=(y(n(7)),n(1)),f=n(3),d=y(n(6)),p=y(n(230)),h=y(n(575));function y(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}i=s.Radio.channel("global"),u=d.default.renderable((function(e){return d.default.li(".list-group-item",(function(){return d.default.span((function(){return d.default.a({href:"#tvmaze/view/show/"+e.id},e.content.name)})),d.default.span(".btn-group.pull-right",(function(){return d.default.button(".delete-item.btn.btn-sm.btn-danger.fa.fa-close",{style:"display:none"},"delete")}))}))})),l=d.default.renderable((function(e){return console.log("listTemplate",e),d.default.div(".listview-header",(function(){return d.default.text("TV Shows")})),d.default.nav(".paginate-bar"),d.default.ul(".list-group")})),o=function(){var e=function(e){function t(){return b(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),c(t,[{key:"showRole",value:function(e){return e.preventDefault(),s.history.navigate("#tvmaze/shows/view/"+this.model.id,{trigger:!0})}},{key:"_show_modal",value:function(e,t){var n;return(n=i.request("main:app:object").getView().getRegion("modal")).backdrop=t,n.show(e)}},{key:"deleteItem",value:function(){var e;return e=new h.default({model:this.model}),this._show_modal(e,!0)}}]),t}(f.View);return e.prototype.template=u,e.prototype.ui={item:".list-group-item",link:"a",deleteItem:".delete-item"},e.prototype.events={"click @ui.link":"showRole","click @ui.deleteItem":"deleteItem"},e}.call(void 0),r=function(){var e=function(e){function t(){return b(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),t}(f.CollectionView);return e.prototype.childView=o,e}.call(void 0),a=function(){var e=function(e){function t(){return b(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),c(t,[{key:"templateContext",value:function(){return{collection:this.collection}}},{key:"onRender",value:function(){var e;return e=new r({collection:this.collection}),this.showChildView("itemList",e),e=new p.default({collection:this.collection}),this.showChildView("paginateBar",e)}}]),t}(f.View);return e.prototype.template=l,e.prototype.ui={header:".listview-header",paginateBar:".paginate-bar",itemList:".list-group"},e.prototype.regions={paginateBar:"@ui.paginateBar",itemList:"@ui.itemList"},e}.call(void 0),t.default=a},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(7)),a=n(1),i=n(3),u=l(n(6));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f;f=function(){var e=function(e){function t(){c(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"options",value:function(){return{setKeyHandler:!1,barLength:15,barStopAt:7}}},{key:"templateContext",value:function(){return{collection:this.collection,barLength:this.getOption("barLength"),barStopAt:this.getOption("barStopAt")}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=(0,o.default)(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var e,t,n;return n=this.collection.state,t=this.ui.prevButton.parent(),n.currentPage===n.firstPage?t.hasClass("disabled")||t.addClass("disabled"):t.hasClass("disabled")&&t.removeClass("disabled"),e=this.ui.nextButton.parent(),n.currentPage===n.lastPage?e.hasClass("disabled")||e.addClass("disabled"):e.addClass("disabled")&&e.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),(0,o.default)('[data-pagenumber="'+n.currentPage+'"]').parent().addClass("active")}},{key:"getAnotherPage",value:function(e){var t,n,r,o;if(n=(o=this.collection.state).currentPage===o.lastPage,t=o.currentPage===o.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error("bad direction '"+e+"'")}r=this.collection.getNextPage()}else o.currentPage!==o.firstPage&&(r=this.collection.getPreviousPage());return this.updateNavButtons(),r}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var n,r,o,a;for(n in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),o=[],r=this.keycommands)a=r[n],e.keyCode===a?o.push(this.handleKeyCommand(n)):o.push(void 0);return o}},{key:"onRenderHandleKeys",value:function(){return(0,o.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,o.default)("html").unbind("keydown",this.keydownHandler)}}]),t}(i.View);return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=u.default.renderable((function(e){var t,n,r,o,i,l,c,s,f,d,p;for(r=(d=e instanceof a.Collection?e.state:e.collection.state).firstPage,t=!1,(i=d.lastPage)>e.barLength&&(t=!0,p=e.barStopAt,f=i-e.barStopAt),u.default.li(".page-item",(function(){return u.default.a(".prev.page-link",(function(){return u.default.i(".fa.fa-arrow-left")}))})),n=!1,l=o=c=r,s=i;c<=s?o<=s:o>=s;l=c<=s?++o:--o)t&&l>=p&&l<=f?n||(n=!0,u.default.li(".page-item",(function(){return u.default.a(".ellipsis-page.page-link","...")}))):u.default.li(".page-item",(function(){return u.default.a(".numbered-page.page-link",{href:"#",data:{pageNumber:l}},l)}));return u.default.li(".page-item",(function(){return u.default.a(".next.page-link",(function(){return u.default.i(".fa.fa-arrow-right")}))}))})),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(void 0),t.default=f},575:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,a,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=n(3),s=n(6),f=(r=s)&&r.__esModule?r:{default:r};function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}i=l.Radio.channel("messages"),a=f.default.renderable((function(e){return f.default.div(".modal-content",(function(){return f.default.div(".modal-header",(function(){return f.default.h3(".modal-title",(function(){return f.default.text("Do you really want to delete "+e.content.name+"?"),f.default.img({src:e.content.image.medium})})),f.default.button(".close",{type:"button",data:{dismiss:"modal"}},(function(){return f.default.span({"aria-hidden":"true"},(function(){return f.default.raw("&times")}))}))})),f.default.div(".modal-body",(function(){return f.default.div("#selected-children")})),f.default.div(".modal-footer",(function(){return f.default.button(".confirm-delete.btn.btn-primary",{type:"button",data:{dismiss:"modal"}},(function(){return f.default.i(".fa.fa-check"),f.default.text("OK")})),f.default.button(".cancel-delete.btn.btn-danger",{type:"button",data:{dismiss:"modal"}},(function(){return f.default.i(".fa.fa-close"),f.default.text("Cancel")}))}))}))})),o=function(){var e=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"events",value:function(){return{"click @ui.confirmDelete":"confirmDelete"}}},{key:"confirmDelete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done((function(){return i.request("success",e+" deleted.")})),t.fail((function(){return i.request("danger",e+" NOT deleted.")}))}}]),t}(c.View);return e.prototype.template=a,e.prototype.className="modal-dialog",e.prototype.ui={confirmDelete:".confirm-delete",cancelButton:".cancel-delete"},e}.call(void 0),t.default=o}}]);
//# sourceMappingURL=tvmaze-view-show-list-flat-38ac1cd27504333798a8.js.map