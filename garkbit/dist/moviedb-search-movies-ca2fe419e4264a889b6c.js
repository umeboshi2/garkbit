(self.webpackJsonp=self.webpackJsonp||[]).push([[60],{1006:function(e,t,o){"use strict";var r,n,i,s,a,l,c,u,h,p,f,d,m,v,b,g=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}();function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}o(7),r=o(1),s=o(3),m=o(6),h=o(233),o(57).default,a=o(230).default,l=o(718),c=o(719);var R=o(720);p=R.movieSearchForm,r.Radio.channel("global"),r.Radio.channel("messages"),r.Radio.channel("moviedb"),u=o(1007),v=o(721),o(722);var _=o(384);f=_.posterImage,b=_.tvShowDescription,d=m.renderable((function(e){return m.div(".card.bg-body-d10",(function(){return m.div(".row",(function(){return m.div(".col-lg-3",(function(){return f(e),m.button(".select-result.btn.btn-primary",{style:"display:none"},"Select this show")})),m.div(".card-block.col-lg-8.ml-2",(function(){return b(e)}))}))}))})),n=m.renderable((function(e){return m.article(".document-view.content",(function(){return m.div(".body",(function(){return m.div(".listview-header.bg-moviedb-logo",(function(){return m.a({href:"https://developers.themoviedb.org",target:"_blank"},(function(){return m.h1(".d-inline.color-moviedb-logo","TheMovieDb API Demo"),m.img(".bg-moviedb-logo.d-inline",{src:v,style:"max-width:4rem;"})}))})),m.raw(h(u)),m.div(".search-form.listview-list-entry"),m.div(".paginate-bar"),m.div(".search-results")}))}))})),i=function(){var e=function(e){function t(){return w(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),g(t,[{key:"doSomething",value:function(e){var t,o,r,n;return(n=this.getChildView("searchResults")).ui.header.is(":visible")||n.ui.header.show(),t=n.collection.state.totalRecords+'  results for "'+e.get("query")+'"',n.triggerMethod("set:header",t),r=this.getRegion("paginateBar"),this.collection.state.totalPages>1?(o=new a({collection:this.collection,setKeyHandler:!0}),r.show(o)):r.hasView()?r.empty():void 0}},{key:"onRender",value:function(){var e,t;return t=new l({collection:this.collection,template:p}),this.showChildView("searchForm",t),e=new c({collection:this.collection,entryTemplate:d,entryUrlRoot:"#moviedb/movies/view",entryImgClass:".mr-3.bg-light"}),this.showChildView("searchResults",e),window.listAnchor=this.ui.sampleListAnchor,console.log("sampleListAnchor",this.ui.sampleListAnchor)}}]),t}(s.View);return e.prototype.template=n,e.prototype.templateContext={appName:"tvmaze"},e.prototype.ui={searchForm:".search-form",paginateBar:".paginate-bar",searchResults:".search-results",sampleListAnchor:".sample-list-anchor"},e.prototype.childViewEvents={"save:form:success":"doSomething"},e.prototype.regions={searchForm:"@ui.searchForm",paginateBar:"@ui.paginateBar",searchResults:"@ui.searchResults"},e}.call(void 0),e.exports=i},1007:function(e,t,o){"use strict";o.r(t),t.default="You can **search** for a movie, or choose from this \n<a href=\"#pages/sample-moviedb-tvshows\" class='sample-list-anchor'>list:</a>\n\n"}}]);
//# sourceMappingURL=moviedb-search-movies-ca2fe419e4264a889b6c.js.map