(self.webpackJsonp=self.webpackJsonp||[]).push([[62],{107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=(l(n(1)),l(n(2))),i=l(n(108)),u=l(n(89));function l(e){return e&&e.__esModule?e:{default:e}}o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.View),r(t,[{key:"regions",value:function(){return{itemList:"@ui.itemList",paginateBar:"@ui.paginateBar"}}},{key:"onRender",value:function(){var e,t,n;if(e=this.getOption("collection"),console.log("collection",e),n=new i.default({collection:e,childView:this.getOption("ItemView"),childViewTriggers:this.getOption("childViewTriggers")}),this.showChildView("itemList",n),(null!=e&&null!=(t=e.state)?t.totalPages:void 0)>1)return n=new u.default({collection:e,setKeyHandler:!0}),this.showChildView("paginateBar",n)}}]),t}(),t.default=o},108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(n(1));var o,r=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.CollectionView),t}();return e.prototype.tagName="ul",e.prototype.className="list-group",e}.call(void 0),t.default=o},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=g(n(1)),a=g(n(2)),i=g(n(3)),u=g(n(153));n(154);g(n(89));var l,c,s,f,p,d,h,y=g(n(107));function g(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}f=r.default.Radio.channel("global"),h=r.default.Radio.channel("messages"),l=r.default.Radio.channel("places"),c=function(){var e=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,a.default.View),o(t,[{key:"className",value:function(){return"list-group-item location-item row"}},{key:"onLocationSelected",value:function(){return console.log("onLocationSelected")}}]),t}();return e.prototype.template=i.default.renderable(function(e){return i.default.span(".mr-auto",e.name),console.log("MODEL",e)}),e.prototype.tagName="li",e.prototype.triggers={click:"location:selected"},e}.call(void 0),s=function(){var e=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,y.default),o(t,[{key:"ui",value:function(){return{itemList:".places-container",paginateBar:".paginate-bar"}}},{key:"regions",value:function(){return{itemList:"@ui.itemList",paginateBar:"@ui.paginateBar"}}}]),t}();return e.prototype.ItemView=c,e.prototype.template=i.default.renderable(function(){return i.default.div(".paginate-bar"),i.default.div(".places-container.list-group")}),e.prototype.childViewTriggers={"location:selected":"location:selected"},e}.call(void 0),d=function(){var e=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,a.default.View),o(t,[{key:"mapOpdtions",value:function(){return{minZoom:14}}},{key:"onDomRefresh",value:function(){this.Map=u.default.map("map-view",this.getOption("mapOptions")),u.default.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(this.Map),this.setLocation()}},{key:"setLocation",value:function(){var e,t,n;return 17,t=[(n=this.model.get("location")).latitude,n.longitude],this.Map.setView(t,17),(e=n.accuracy)>10&&(e=10),u.default.circle(t,e).addTo(this.Map)}},{key:"onModelChange",value:function(){var e;return console.log("model changed"),this.setLocation(),this.ui.title.text(this.model.get("name")),e="#places/view/"+this.model.get("id"),f.request("main:app:setLocationUrl",e)}}]),t}();return e.prototype.template=i.default.renderable(function(e){return i.default.div(".card",{style:"width: 18rem;"},function(){return i.default.div(".card-body",function(){return i.default.h5(".card-title",e.name),i.default.div("#map-view.card-text",{style:"height:20rem;"})})})}),e.prototype.ui={map:"#map-view",title:".card-title"},e.prototype.regions={workers:"@ui.workers",potentialWorkers:"@ui.potentialWorkers"},e.prototype.events={"click @ui.potentialBtn":"potentialBtnClicked"},e.prototype.modelEvents={change:"onModelChange"},e}.call(void 0),p=function(){var e=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,a.default.View),o(t,[{key:"onRender",value:function(){var e,t,n,o=this;return n=new d({model:this.model}),this.showChildView("mapContainer",n),e=l.request("db:userlocation:collection"),(t=e.fetch()).fail(function(){return h.request("xhr-error",t)}),t.done(function(){return n=new s({collection:e}),o.showChildView("placesContainer",n)})}},{key:"onLocationSelected",value:function(e){var t,n,o=this;return t=e.model,(n=t.fetch()).fail(function(){return h.request("xhr-error",n)}),n.done(function(){return console.log("MODEL",t),o.model.set(t.toJSON())})}}]),t}();return e.prototype.template=i.default.renderable(function(e){return i.default.div(".map-container.col"),i.default.div(".places-container.col")}),e.prototype.className="row",e.prototype.ui={mapContainer:".map-container",placesContainer:".places-container"},e.prototype.regions={mapContainer:"@ui.mapContainer",placesContainer:"@ui.placesContainer"},e.prototype.childViewTriggers={"location:selected":"location:selected"},e}.call(void 0),t.default=p},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=l(n(4)),a=l(n(1)),i=n(2),u=l(n(3));function l(e){return e&&e.__esModule?e:{default:e}}a.default.Radio.channel("global"),a.default.Radio.channel("messages"),t.default=function(){var e=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.View),o(t,[{key:"options",value:function(){return{setKeyHandler:!1,barLength:15,barStopAt:7}}},{key:"templateContext",value:function(){return{collection:this.collection,barLength:this.getOption("barLength"),barStopAt:this.getOption("barStopAt")}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=(0,r.default)(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var e,t,n,o;return o=this.collection.state,n=this.ui.prevButton.parent(),o.currentPage===o.firstPage?n.hasClass("disabled")||n.addClass("disabled"):n.hasClass("disabled")&&n.removeClass("disabled"),t=this.ui.nextButton.parent(),o.currentPage===o.lastPage?t.hasClass("disabled")||t.addClass("disabled"):t.addClass("disabled")&&t.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),this.ui.numberedPage.removeClass("text-white"),this.ui.numberedPage.addClass("text-dark"),(e=(0,r.default)('[data-pagenumber="'+o.currentPage+'"]')).parent().addClass("active"),e.removeClass("text-dark"),e.addClass("text-white")}},{key:"getAnotherPage",value:function(e){var t,n,o,r;if(n=(r=this.collection.state).currentPage===r.lastPage,t=r.currentPage===r.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error("bad direction '"+e+"'")}o=this.collection.getNextPage()}else r.currentPage!==r.firstPage&&(o=this.collection.getPreviousPage());return this.updateNavButtons(),o}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var n,o,r,a;for(n in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),r=[],o=this.keycommands)a=o[n],e.keyCode===a?r.push(this.handleKeyCommand(n)):r.push(void 0);return r}},{key:"onRenderHandleKeys",value:function(){return(0,r.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,r.default)("html").unbind("keydown",this.keydownHandler)}}]),t}();return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=u.default.renderable(function(e){var t,n,o,r,i,l,c,s,f,p,d;for((p=e instanceof a.default.Collection?e.state:e.collection.state).totalPages,o=p.firstPage,t=!1,(i=p.lastPage)>e.barLength&&(t=!0,d=e.barStopAt,f=i-e.barStopAt),u.default.li(".page-item",function(){return u.default.a(".prev.page-link.bg-body-d5",function(){return u.default.i(".fa.fa-arrow-left")})}),n=!1,l=r=c=o,s=i;c<=s?r<=s:r>=s;l=c<=s?++r:--r)t&&l>=d&&l<=f?n||(n=!0,u.default.li(".page-item",function(){return u.default.a(".ellipsis-page.page-link.bg-body-d5.text-dark","...")})):u.default.li(".page-item",function(){return u.default.a(".numbered-page.page-link.bg-body-d5.text-dark",{href:"#",data:{pageNumber:l}},l)});return u.default.li(".page-item",function(){return u.default.a(".next.page-link.bg-body-d5",function(){return u.default.i(".fa.fa-arrow-right")})})}),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(void 0)}}]);
//# sourceMappingURL=places-view-view-place-bdb48c836a1b66e461fc.js.map