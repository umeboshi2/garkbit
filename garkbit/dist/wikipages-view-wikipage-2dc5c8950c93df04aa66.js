(self.webpackJsonp=self.webpackJsonp||[]).push([[103],{505:function(t,e,n){"use strict";var o,r,i,u,a,c=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}();n(1),r=n(2),u=n(3),n(35),n(5).navigate_to_url,i=100,a=u.renderable(function(t){return u.div(".row.listview-list-entry.text-center",function(){return u.strong(t.name)}),u.div(".zoom-out.btn.btn-default.fa.fa-minus"),u.div(".zoom-in.btn.btn-default.fa.fa-plus"),u.div(".row.listview-list-entry",function(){return u.div(".wikipage",{style:"font-size: "+i+"%;"},function(){return u.raw(t.content)})})}),o=function(){var t=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.View),c(e,[{key:"zoomInPage",value:function(){return i<=500&&(i+=10),this.ui.wikipage.css({"font-size":i+"%"})}},{key:"zoomOutPage",value:function(){return 30<=i&&(i-=10),this.ui.wikipage.css({"font-size":i+"%"})}}]),e}();return t.prototype.template=a,t.prototype.ui={wikipage:".wikipage",zoomIn:".zoom-in",zoomOut:".zoom-out"},t.prototype.events={"click @ui.zoomIn":"zoomInPage","click @ui.zoomOut":"zoomOutPage"},t}.call(void 0),t.exports=o}}]);
//# sourceMappingURL=wikipages-view-wikipage-2dc5c8950c93df04aa66.js.map