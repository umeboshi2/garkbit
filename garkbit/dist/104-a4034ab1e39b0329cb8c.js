(self.webpackJsonp=self.webpackJsonp||[]).push([[104],{375:function(t,e,n){"use strict";var o,r,i,u,l,c=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}();function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}o=n(1),i=n(2),l=n(3),o.Radio.channel("hubby"),function(){var t=function(t){function e(){return p(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,i.View),e}();return t.prototype.template=l.renderable(function(t){return"meeting",".btn.btn-default.btn-xs",l.li(".list-group-item.meeting-item",function(){return l.span(function(){return l.a({href:"#hubby/viewperson/"+t.id},t.title)})})}),t}.call(void 0),u=function(){var t=function(t){function e(){return p(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,i.View),e}();return t.prototype.template=l.renderable(function(t){return".btn.btn-default.btn-sm",console.log("MODEL",t),l.div(".listview-list-entry",function(){if(l.span(t.firstname+" "+t.lastname),t.photo_link)return l.span(".badge.badge-info","Has Photo")})}),t}.call(void 0),r=function(){var t=function(t){function e(){return p(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,i.View),c(e,[{key:"onRender",value:function(){var t;return t=new i.CollectionView({childView:u,collection:this.getOption("collection")}),this.showChildView("list",t)}}]),e}();return t.prototype.template=l.renderable(function(){return l.div(".listview-header",function(){return l.text("People")}),l.hr(),l.ul(".list-group")}),t.prototype.ui={listEl:".list-group"},t.prototype.regions={list:"@ui.listEl"},t}.call(void 0),t.exports=r}}]);
//# sourceMappingURL=104-a4034ab1e39b0329cb8c.js.map