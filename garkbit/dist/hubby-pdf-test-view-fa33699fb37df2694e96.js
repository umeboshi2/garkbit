(self.webpackJsonp=self.webpackJsonp||[]).push([[70],{152:function(e,t,n){"use strict";var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,s,p,l,g,c,d,h;u=n(4),s=n(1),p=n(2),h=n(3),d=n(198),s.Radio.channel("global"),s.Radio.channel("messages"),s.Radio.channel("hubby"),l=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,p.View),a(t,[{key:"template",value:function(){}},{key:"onRender",value:function(){var e,t,n,a;return 1.5,n=this.getOption("page"),e=this.el,a=n.getViewport(1.5),e.height=a.height,e.width=a.width,t=e.getContext("2d"),n.render({canvasContext:t,viewport:a})}}]),t}();return e.prototype.tagName="canvas",e.prototype.className="canvas",e}.call(void 0),c=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,p.View),a(t,[{key:"templateContext",value:function(){return{pdf:this.getOption("pdf"),barLength:10,barStopAt:4}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"getNextPage",value:function(e){return this.getAnotherPage(e,"next")}},{key:"getPreviousPage",value:function(e){return this.getAnotherPage(e,"prev")}},{key:"updateNavButtons",value:function(){var e,t,n,a,r,o,i;return r=this.getOption("page"),o=this.getOption("pdf"),r.pageIndex,t=r.pageIndex+1,1,n=o.numPages,i=this.ui.prevButton.parent(),1===t?i.hasClass("disabled")||i.addClass("disabled"):i.hasClass("disabled")&&i.removeClass("disabled"),a=this.ui.nextButton.parent(),t===n?a.hasClass("disabled")||a.addClass("disabled"):a.addClass("disabled")&&a.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),this.ui.numberedPage.removeClass("text-white"),this.ui.numberedPage.addClass("text-dark"),(e=u('[data-pagenumber="'+t+'"]')).parent().addClass("active"),e.removeClass("text-dark"),e.addClass("text-white")}},{key:"getAnotherPage",value:function(e,t){return e.preventDefault(),this.page,this.trigger("another:page",t)}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=u(e.target).attr("data-pagenumber"),this.trigger("turn:page",t)}}]),t}();return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=h.renderable(function(e){var t,n,a,r,o,i,u,s;for(1,(r=e.pdf.numPages)>e.barLength&&(t=!0,s=e.barStopAt,u=r-e.barStopAt),h.li(".page-item",function(){return h.a(".prev.page-link.bg-body-d5",function(){return h.i(".fa.fa-arrow-left")})}),n=!1,o=a=1,i=r;1<=i?a<=i:a>=i;o=1<=i?++a:--a)t&&o>=s&&o<=u?n||(n=!0,h.li(".page-item",function(){return h.a(".ellipsis-page.page-link.bg-body-d5.text-dark","...")})):h.li(".page-item",function(){return h.a(".numbered-page.page-link.bg-body-d5.text-dark",{data:{pagenumber:o}},o)});return h.li(function(){return h.a(".next.page-link.bg-body-d5",function(){return h.i(".fa.fa-arrow-right")})})}),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e}.call(void 0),g=function(){var e=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.showPage=e.showPage.bind(e),e}return i(t,p.View),a(t,[{key:"showPage",value:function(e){var n,a;return function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),this.page=e,this.options.page=e,a=new l({pdf:this.pdf,page:e}),this.showChildView("content",a),n=new c({pdf:this.pdf,page:e}),this.showChildView("toolbar",n)}},{key:"onRender",value:function(){var e,t,n=this;return e=new p.View({template:h.renderable(function(){return h.text("status")})}),this.showChildView("status",e),t=this.model.get("url"),d.getDocument(t).then(function(e){return n.pdf=e,e.getPage(1).then(function(e){return n.showPage(e)})})}},{key:"onChildviewTurnPage",value:function(e){var t,n,a=this;return e=parseInt(e),console.log("onChildviewTurnPage",e),n=this.getOption("pdf"),console.log("number is",e),t=this.getOption("page").pageIndex+1,e=e||0,console.log("number",e),e>t&&console.log("another page",t),e!==t&&(t=e),n.getPage(t).then(function(e){return a.showPage(e)})}},{key:"onChildviewAnotherPage",value:function(e){var t,n,a=this;return n=this.getOption("pdf"),t=this.getOption("page").pageIndex+1,"next"===e&&t<n.numPages?t+=1:"prev"===e&&(t-=1),n.getPage(t).then(function(e){return a.showPage(e)})}}]),t}();return e.prototype.template=h.renderable(function(e){return h.div(".toolbar"),h.div(".content"),h.div(".status")}),e.prototype.ui={toolbar:".toolbar",content:".content",status:".status"},e.prototype.regions={toolbar:"@ui.toolbar",content:"@ui.content",status:"@ui.status"},e}.call(void 0),e.exports=g},192:function(e,t){},193:function(e,t){},194:function(e,t){}}]);
//# sourceMappingURL=hubby-pdf-test-view-fa33699fb37df2694e96.js.map