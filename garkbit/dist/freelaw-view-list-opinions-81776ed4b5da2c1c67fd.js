(self.webpackJsonp=self.webpackJsonp||[]).push([[39],{194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=i(n(4)),f=i(n(1)),a=i(n(2)),d=i(n(3));function i(e){return e&&e.__esModule?e:{default:e}}f.default.Radio.channel("global"),f.default.Radio.channel("messages"),t.default=function(){var e=function(e){function i(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a.default.View),o(i,[{key:"options",value:function(){return{setKeyHandler:!1,barLength:15,barStopAt:7}}},{key:"templateContext",value:function(){return{collection:this.collection,barLength:this.getOption("barLength"),barStopAt:this.getOption("barStopAt")}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=(0,r.default)(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var e,t,n,o;return o=this.collection.state,n=this.ui.prevButton.parent(),o.currentPage===o.firstPage?n.hasClass("disabled")||n.addClass("disabled"):n.hasClass("disabled")&&n.removeClass("disabled"),t=this.ui.nextButton.parent(),o.currentPage===o.lastPage?t.hasClass("disabled")||t.addClass("disabled"):t.addClass("disabled")&&t.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),this.ui.numberedPage.removeClass("text-white"),this.ui.numberedPage.addClass("text-dark"),(e=(0,r.default)('[data-pagenumber="'+o.currentPage+'"]')).parent().addClass("active"),e.removeClass("text-dark"),e.addClass("text-white")}},{key:"getAnotherPage",value:function(e){var t,n,o,r;if(n=(r=this.collection.state).currentPage===r.lastPage,t=r.currentPage===r.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error("bad direction '"+e+"'")}o=this.collection.getNextPage()}else r.currentPage!==r.firstPage&&(o=this.collection.getPreviousPage());return this.updateNavButtons(),o}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var t,n,o,r;for(t in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,i),o=[],n=this.keycommands)r=n[t],e.keyCode===r?o.push(this.handleKeyCommand(t)):o.push(void 0);return o}},{key:"onRenderHandleKeys",value:function(){return(0,r.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,r.default)("html").unbind("keydown",this.keydownHandler)}}]),i}();return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=d.default.renderable(function(e){var t,n,o,r,i,a,l,u,s,c,p;for(c=e instanceof f.default.Collection?e.state:e.collection.state,console.log("pbar state",c),c.totalPages,o=c.firstPage,t=!1,(i=c.lastPage)>e.barLength&&(t=!0,p=e.barStopAt,s=i-e.barStopAt),d.default.li(".page-item",function(){return d.default.a(".prev.page-link.bg-body-d5",function(){return d.default.i(".fa.fa-arrow-left")})}),n=!1,a=r=l=o,u=i;l<=u?r<=u:u<=r;a=l<=u?++r:--r)t&&p<=a&&a<=s?n||(n=!0,d.default.li(".page-item",function(){return d.default.a(".ellipsis-page.page-link.bg-body-d5.text-dark","...")})):d.default.li(".page-item",function(){return d.default.a(".numbered-page.page-link.bg-body-d5.text-dark",{href:"#",data:{pageNumber:a}},a)});return d.default.li(".page-item",function(){return d.default.a(".next.page-link.bg-body-d5",function(){return d.default.i(".fa.fa-arrow-right")})})}),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(void 0)},367:function(e,t,n){"use strict";var o,r,i,a,l,u,s,c,p,f,d,h,g=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(1),l=n(2),d=n(3),p=n(35),i=n(85),n(86),f=n(137),u=n(194).default,n(5).navigate_to_url,s=function(e){var t,n,o,r,i;for(i=null,n=0,o=(r=["html_with_citations","html_lawbox","html"]).length;n<o;n++)if(e[t=r[n]]){i=t;break}return i},h=d.renderable(function(e){return d.div(".paginate-bar"),d.div(".opinion-list"),d.div(".row.listview-list-entry",function(){return d.raw(p("# JSON view."))}),d.div(".jsonview"),console.log("MODEL",e)}),d.renderable(function(t){var n;return n=s(t),d.span(".col",function(){var e;return e=f.basename(t.absolute_url),t[n]?d.a(".text-link",{href:""},function(){return d.text("("+n+")"+e)}):d.span(e),d.span(".jsonview"),d.div(".full-text.listview-list-entry",function(){if(t[n])return d.raw(t[n])})})}),c=d.renderable(function(t){var n;return n=s(t),d.span(".mr-auto",function(){var e;return e=f.basename(t.absolute_url),t[n]?d.a(".text-link",{href:""},function(){return d.text("("+n+")"+e)}):d.span(e),d.a({href:"http://127.0.0.1:9000/"+t.local_path},function(){return d.small(".bg-info.text-white","  local")}),d.span(".jsonview"),d.div(".full-text.listview-list-entry",function(){if(t[n])return d.raw(t[n])})})}),d.renderable(function(e){return d.div(".listview-header",function(){return d.text("Opinions")}),d.hr(),d.div(".opinionlist-container.list-group")}),r=function(){var e=function(e){function t(){return y(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,l.View),g(t,[{key:"onDomRefresh",value:function(){return this.jsonView=new i(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}},{key:"onRender",value:function(){return this.ui.fullText.hide()}},{key:"toggleTextView",value:function(e){return e.preventDefault(),this.FullTextVisible?(this.ui.fullText.hide(),this.FullTextVisible=!1):(this.ui.fullText.show(),this.FullTextVisible=!0)}}]),t}();return e.prototype.tagName="li",e.prototype.className="list-group-item row",e.prototype.template=c,e.prototype.ui={jsonView:".jsonview",fullText:".full-text",textToggle:".text-link"},e.prototype.FullTextVisible=!1,e.prototype.events={"click @ui.textToggle":"toggleTextView"},e}.call(void 0),o=function(){var e=function(e){function t(){return y(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,l.CollectionView),t}();return e.prototype.tagName="ul",e.prototype.childView=r,e.prototype.className="list-group",e}.call(void 0),a=function(){var e=function(e){function t(){return y(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,l.View),g(t,[{key:"onRender",value:function(){var e,t;if(t=new o({collection:this.collection}),this.showChildView("opinionList",t),console.log("Total pages",this.collection.state.totalPages),1<this.collection.state.totalPages)return e=new u({collection:this.collection,setKeyHandler:!0}),this.getRegion("paginateBar").show(e)}},{key:"onDomRefresh",value:function(){return this.jsonView=new i(this.collection.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),t}();return e.prototype.template=h,e.prototype.templateContext={appName:"freelaw"},e.prototype.ui={jsonView:".jsonview",opinionList:".opinion-list",paginateBar:".paginate-bar"},e.prototype.regions={opinionList:"@ui.opinionList",paginateBar:"@ui.paginateBar"},e}.call(void 0),e.exports=a},368:function(e,t,n){"use strict";var o,r,i,a,l,u,s,c,p,f,d,h=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(1),l=n(2),f=n(3),p=n(35),i=n(85),n(86),u=n(194).default,n(5).navigate_to_url,s=function(e){var t,n,o,r,i;for(i=null,n=0,o=(r=["html_with_citations","html_lawbox","html"]).length;n<o;n++)if(e[t=r[n]]){i=t;break}return i},d=f.renderable(function(e){return f.div(".paginate-bar"),f.div(".cluster-list"),f.div(".row.listview-list-entry",function(){return f.raw(p("# JSON view."))}),f.div(".jsonview"),console.log("MODEL",e)}),c=f.renderable(function(t){var n;return n=s(t),f.span(".mr-auto",function(){var e;return e=t.case_name,t[n]?f.a(".text-link",{href:""},function(){return f.text("("+n+")"+e)}):f.span(e),f.a({href:"http://127.0.0.1:9000/"+t.local_path},function(){return f.small(".bg-info.text-white","  local")}),f.span(".jsonview"),f.div(".full-text.listview-list-entry",function(){if(t[n])return f.raw(t[n])})})}),f.renderable(function(e){return f.div(".listview-header",function(){return f.text("Clusters")}),f.hr(),f.div(".clusterlist-container.list-group")}),r=function(){var e=function(e){function t(){return g(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,l.View),h(t,[{key:"onDomRefresh",value:function(){return this.jsonView=new i(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}},{key:"onRender",value:function(){return this.ui.fullText.hide()}},{key:"toggleTextView",value:function(e){return e.preventDefault(),this.FullTextVisible?(this.ui.fullText.hide(),this.FullTextVisible=!1):(this.ui.fullText.show(),this.FullTextVisible=!0)}}]),t}();return e.prototype.tagName="li",e.prototype.className="list-group-item row",e.prototype.template=c,e.prototype.ui={jsonView:".jsonview",fullText:".full-text",textToggle:".text-link"},e.prototype.FullTextVisible=!1,e.prototype.events={"click @ui.textToggle":"toggleTextView"},e}.call(void 0),o=function(){var e=function(e){function t(){return g(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,l.CollectionView),t}();return e.prototype.tagName="ul",e.prototype.childView=r,e.prototype.className="list-group",e}.call(void 0),a=function(){var e=function(e){function t(){return g(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,l.View),h(t,[{key:"onRender",value:function(){var e,t;if(t=new o({collection:this.collection}),this.showChildView("clusterList",t),console.log("Total pages",this.collection.state.totalPages),1<this.collection.state.totalPages)return e=new u({collection:this.collection,setKeyHandler:!0}),this.getRegion("paginateBar").show(e)}},{key:"onDomRefresh",value:function(){return this.jsonView=new i(this.collection.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),t}();return e.prototype.template=d,e.prototype.templateContext={appName:"freelaw"},e.prototype.ui={jsonView:".jsonview",clusterList:".cluster-list",paginateBar:".paginate-bar"},e.prototype.regions={clusterList:"@ui.clusterList",paginateBar:"@ui.paginateBar"},e}.call(void 0),e.exports=a}}]);
//# sourceMappingURL=freelaw-view-list-opinions-81776ed4b5da2c1c67fd.js.map