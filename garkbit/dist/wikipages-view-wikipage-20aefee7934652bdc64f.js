(self.webpackJsonp=self.webpackJsonp||[]).push([[117],{616:function(t,e,o){"use strict";var n,i,r,u,a,c=function(t,e,o){return e&&f(t.prototype,e),o&&f(t,o),t};function f(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}o(1),i=o(2),u=o(3),o(32),o(5).navigate_to_url,r=100,a=u.renderable(function(t){return u.div(".row.listview-list-entry.text-center",function(){return u.strong(t.name)}),u.div(".zoom-out.btn.btn-default.fa.fa-minus"),u.div(".zoom-in.btn.btn-default.fa.fa-plus"),u.div(".row.listview-list-entry",function(){return u.div(".wikipage",{style:"font-size: "+r+"%;"},function(){return u.raw(t.content)})})}),n=function(){var t=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.View),c(e,[{key:"zoomInPage",value:function(){return r<=500&&(r+=10),this.ui.wikipage.css({"font-size":r+"%"})}},{key:"zoomOutPage",value:function(){return 30<=r&&(r-=10),this.ui.wikipage.css({"font-size":r+"%"})}}]),e);function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return t.prototype.template=a,t.prototype.ui={wikipage:".wikipage",zoomIn:".zoom-in",zoomOut:".zoom-out"},t.prototype.events={"click @ui.zoomIn":"zoomInPage","click @ui.zoomOut":"zoomOutPage"},t}.call(void 0),t.exports=n}}]);
//# sourceMappingURL=wikipages-view-wikipage-20aefee7934652bdc64f.js.map