(self.webpackJsonp=self.webpackJsonp||[]).push([[52],{397:function(e,t,n){"use strict";var o,r,i,a,l,u,c,s,f,d,p,h,m,b,y,v=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();n(4),o=n(1),a=n(2),h=n(3),f=n(35),n(5).default,l=n(90).default,n(398).default,u=n(201),c=n(202);var g=n(203);b=g.tvSearchForm,o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("moviedb"),s=n(407),m=n(204),n(205);var w=n(92);d=w.posterImage,y=w.tvShowDescription,p=h.renderable(function(e){return h.div(".card.bg-body-d10",function(){return h.div(".row",function(){return h.div(".col-lg-3",function(){return d(e),h.button(".select-result.btn.btn-primary",{style:"display:none"},"Select this show")}),h.div(".card-block.col-lg-8.ml-2",function(){return y(e)})})})}),r=h.renderable(function(e){return h.article(".document-view.content",function(){return h.div(".body",function(){return h.div(".listview-header.bg-moviedb-logo",function(){return h.a({href:"https://developers.themoviedb.org",target:"_blank"},function(){return h.h1(".d-inline.color-moviedb-logo","TheMovieDb API Demo"),h.img(".bg-moviedb-logo.d-inline",{src:m,style:"max-width:4rem;"})})}),h.raw(f(s)),h.div(".search-form.listview-list-entry"),h.div(".paginate-bar"),h.div(".search-results")})})}),i=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.View),v(t,[{key:"doSomething",value:function(e){var t,n,o,r;return(r=this.getChildView("searchResults")).ui.header.is(":visible")||r.ui.header.show(),t=r.collection.state.totalRecords+'  results for "'+e.get("query")+'"',r.triggerMethod("set:header",t),o=this.getRegion("paginateBar"),1<this.collection.state.totalPages?(n=new l({collection:this.collection,setKeyHandler:!0}),o.show(n)):o.hasView()?o.empty():void 0}},{key:"onRender",value:function(){var e,t;return t=new u({collection:this.collection,template:b}),this.showChildView("searchForm",t),e=new c({collection:this.collection,entryTemplate:p,entryUrlRoot:"#moviedb/tv/shows/view",entryImgClass:".mr-3.bg-light.rounded"}),this.showChildView("searchResults",e),window.listAnchor=this.ui.sampleListAnchor,console.log("sampleListAnchor",this.ui.sampleListAnchor)}}]),t}();return e.prototype.template=r,e.prototype.templateContext={appName:"moviedb"},e.prototype.ui={searchForm:".search-form",paginateBar:".paginate-bar",searchResults:".search-results",sampleListAnchor:".sample-list-anchor"},e.prototype.childViewEvents={"save:form:success":"doSomething"},e.prototype.regions={searchForm:"@ui.searchForm",paginateBar:"@ui.paginateBar",searchResults:"@ui.searchResults"},e}.call(void 0),e.exports=i},398:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a,l=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),u=f(n(1)),c=f(n(2)),s=f(n(3));function f(e){return e&&e.__esModule?e:{default:e}}r=u.default.Radio.channel("messages"),a=s.default.renderable(function(e){return s.default.h3(".modal-title",function(){return s.default.text("Do you really want to delete this?")}),s.default.button(".close",{type:"button",data:{dismiss:"modal"}},function(){return s.default.span({"aria-hidden":"true"},function(){return s.default.raw("&times")})})}),i=s.default.renderable(function(e){return s.default.div()}),o=s.default.renderable(function(e){return s.default.div(".modal-content",function(){return s.default.div(".modal-header",function(){return(e.headerTemplate||a)(e)}),s.default.div(".modal-body",function(){return(e.modalBodyTemplate||i)(e)}),s.default.div(".modal-footer",function(){return s.default.button(".confirm-delete.btn.btn-primary",{type:"button",data:{dismiss:"modal"}},function(){return s.default.i(".fa.fa-check"),s.default.text("OK")}),s.default.button(".cancel-delete.btn.btn-danger",{type:"button",data:{dismiss:"modal"}},function(){return s.default.i(".fa.fa-close"),s.default.text("Cancel")})})})}),t.default=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.View),l(t,[{key:"events",value:function(){return{"click @ui.confirmDelete":"confirmDelete"}}},{key:"confirmDelete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done(function(){return r.request("success",e+" deleted.")}),t.fail(function(){return r.request("danger",e+" NOT deleted.")})}}]),t}();return e.prototype.template=o,e.prototype.className="modal-dialog",e.prototype.ui={confirmDelete:".confirm-delete",cancelButton:".cancel-delete"},e}.call(void 0)},407:function(e,t){e.exports="You can **search** for a TV show, or choose from this \n<a href=\"#pages/sample-moviedb-tvshows\" class='sample-list-anchor'>list:</a>\n\n"}}]);
//# sourceMappingURL=moviedb-view-index-ebca198c416e2084650b.js.map