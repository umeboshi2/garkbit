(self.webpackJsonp=self.webpackJsonp||[]).push([[94],{394:function(e,t,n){"use strict";var r,o,i,u,a,c,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();r=n(1),n(2),c=n(3),n(31),n(32),a=n(5),n(30).form_group_input_div,o=r.Radio.channel("messages"),r.Radio.channel("useradmin"),u=c.renderable(function(e){return c.div(".listview-header",function(){return c.text("Viewing User "+e.username)}),c.hr(),c.a({href:"#adminpanel/user/list"},"List Users"),c.article(".document-view.content",function(){return c.div(".body",function(){return c.text("This is "+e.fullname)})})}),i=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Marionette.View),s(t,[{key:"edit_user",value:function(){return a("#adminpanel/user/edit/"+this.model.id)}},{key:"copy_user",value:function(){o.request("warning","not implemented")}}]),t}();return e.prototype.template=u,e.prototype.ui={copy_btn:".copy-btn",edit_btn:".edit-btn",destname_input:'input[name="destname"]'},e.prototype.events={"click @ui.copy_btn":"copy_user","click @ui.edit_btn":"edit_user"},e}.call(void 0),e.exports=i}}]);
//# sourceMappingURL=useradmin-view-user-ef6ec57978d2e9f3e0aa.js.map