(self.webpackJsonp=self.webpackJsonp||[]).push([[112],{469:function(t,e,n){"use strict";var o,r,i,l,u,p=function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}o=n(1),i=n(2),u=n(3),o.Radio.channel("hubby"),function(){var t=(f(e,i.View),e);function e(){return c(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return t.prototype.template=u.renderable(function(t){return"meeting",".btn.btn-default.btn-xs",u.li(".list-group-item.meeting-item",function(){return u.span(function(){return u.a({href:"#hubby/viewperson/"+t.id},t.title)})})}),t}.call(void 0),l=function(){var t=(f(e,i.View),e);function e(){return c(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return t.prototype.template=u.renderable(function(t){return".btn.btn-default.btn-sm",console.log("MODEL",t),u.div(".listview-list-entry",function(){if(u.span(t.firstname+" "+t.lastname),t.photo_link)return u.span(".badge.badge-info","Has Photo")})}),t}.call(void 0),r=function(){var t=(f(e,i.View),p(e,[{key:"onRender",value:function(){var t;return t=new i.CollectionView({childView:l,collection:this.getOption("collection")}),this.showChildView("list",t)}}]),e);function e(){return c(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return t.prototype.template=u.renderable(function(){return u.div(".listview-header",function(){return u.text("People")}),u.hr(),u.ul(".list-group")}),t.prototype.ui={listEl:".list-group"},t.prototype.regions={list:"@ui.listEl"},t}.call(void 0),t.exports=r}}]);
//# sourceMappingURL=112-668cc8f6fc899d366905.js.map