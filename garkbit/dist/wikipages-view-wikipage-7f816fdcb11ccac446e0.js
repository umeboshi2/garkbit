(self.webpackJsonp=self.webpackJsonp||[]).push([[112],{1249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(3),f=n(6),l=(o=f)&&o.__esModule?o:{default:o};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}i=100,r=function(){var e=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"zoomInPage",value:function(){return i<=500&&(i+=10),this.ui.wikipage.css({"font-size":i+"%"})}},{key:"zoomOutPage",value:function(){return i>=30&&(i-=10),this.ui.wikipage.css({"font-size":i+"%"})}}]),t}(a.View);return e.prototype.template=l.default.renderable((function(e){return l.default.div(".row.listview-list-entry.text-center",(function(){return l.default.strong(e.name)})),l.default.div(".zoom-out.btn.btn-primary.fa.fa-minus"),l.default.div(".zoom-in.btn.btn-primary.fa.fa-plus"),l.default.div(".row.listview-list-entry",(function(){return l.default.div(".wikipage",{style:"font-size: "+i+"%;"},(function(){return l.default.raw(e.content)}))}))})),e.prototype.ui={wikipage:".wikipage",zoomIn:".zoom-in",zoomOut:".zoom-out"},e.prototype.events={"click @ui.zoomIn":"zoomInPage","click @ui.zoomOut":"zoomOutPage"},e}.call(void 0),t.default=r}}]);
//# sourceMappingURL=wikipages-view-wikipage-7f816fdcb11ccac446e0.js.map