(self.webpackJsonp=self.webpackJsonp||[]).push([[95],{367:function(e,t,n){"use strict";var r,o,i,u,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();r=n(1),n(2),u=n(3),n(168),n(167),o=r.Radio.channel("global"),u.renderable(function(e){}),i=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Marionette.View),a(t,[{key:"onDomRefresh",value:function(){return this.ui.fileinput.fileinput({uploadUrl:"/api/dev/misc/upload",ajaxSettings:{beforeSend:o.request("main:app:authBeforeSend")}})}}]),t}();return e.prototype.template=u.renderable(function(){return u.article(".document-view.content",function(){return u.div(".body",function(){return"Hello there"})}),u.div(".file-div",function(){return u.input(".fileinput",{name:"zathras",type:"file"})})}),e.prototype.ui={fileinput:".fileinput"},e}.call(void 0),e.exports=i},397:function(e,t,n){"use strict";var r,o,i,u,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();r=n(1),n(2),u=n(3),n(168),n(167),o=r.Radio.channel("global"),u.renderable(function(e){}),i=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Marionette.View),a(t,[{key:"onDomRefresh",value:function(){return this.ui.fileinput.fileinput({uploadUrl:"/api/dev/misc/upload-photos",ajaxSettings:{beforeSend:o.request("main:app:authBeforeSend")}})}}]),t}();return e.prototype.template=u.renderable(function(){return u.article(".document-view.content",function(){return u.div(".body",function(){return"Hello there"})}),u.div(".file-div",function(){return u.input(".fileinput",{name:"zathras",type:"file"})})}),e.prototype.ui={fileinput:".fileinput"},e}.call(void 0),e.exports=i}}]);
//# sourceMappingURL=frontdoor-upload-view-38df4ced6910c0e4b00a.js.map