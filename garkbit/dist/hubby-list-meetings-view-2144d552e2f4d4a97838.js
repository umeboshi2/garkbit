(self.webpackJsonp=self.webpackJsonp||[]).push([[44],{374:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u,c,p,l,a;u=n(1),p=n(2),a=n(3),u.Radio.channel("hubby"),l=function(){var t=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,p.View),e}();return t.prototype.template=a.renderable(function(t){return"meeting",".btn.btn-default.btn-xs",a.li(".list-group-item.meeting-item",function(){return a.span(function(){return a.a({href:"#hubby/viewmeeting/"+t.id},t.title)})})}),t}.call(void 0),c=function(){var t=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,p.CollectionView),e}();return t.prototype.childView=l,t.prototype.template=a.renderable(function(){return a.div(".listview-header",function(){return a.text("Council Meetings")}),a.hr(),a.ul("#meetings-container.list-group")}),t}.call(void 0),t.exports=c}}]);
//# sourceMappingURL=hubby-list-meetings-view-2144d552e2f4d4a97838.js.map