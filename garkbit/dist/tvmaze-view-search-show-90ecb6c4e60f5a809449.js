(self.webpackJsonp=self.webpackJsonp||[]).push([[37],{243:function(e,t,n){"use strict";var o,r,u,i,a,s,l,f,c,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(4),n(0),r=n(1),n(2),c=n(3),n(31),u=n(32).default,l=n(5).default;var h=n(30);s=h.form_group_input_div,i=r.Radio.channel("messages"),o=r.Radio.channel("tvmaze"),f=c.renderable(function(){return s({input_id:"input_show",label:"TV Show",input_attributes:{name:"tv_show",placeholder:"tiny toons"}}),c.input(".btn.btn-default.btn-sm",{type:"submit",value:"Search"}),c.div(".spinner.fa.fa-spinner.fa-spin")}),a=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u),p(t,[{key:"createModel",value:function(){return new(o.request("get-local-tvshow-model"))}},{key:"updateModel",value:function(){return this.tvshow=this.ui.tvShow.val()}},{key:"saveModel",value:function(){var e,t,n=this;return(e=(t=o.request("single-show-search",this.tvshow)).fetch()).done(function(){return o.request("save-local-show",t.toJSON()).then(function(e){return l("#tvmaze/shows/view/"+t.id)})}),e.fail(function(){return i.request("warning",n.tvshow+" not found."),n.trigger("save:form:failure",n.model)})}}]),t}();return e.prototype.template=f,e.prototype.ui={tvShow:'[name="tv_show"]'},e}.call(void 0),e.exports=a}}]);
//# sourceMappingURL=tvmaze-view-search-show-90ecb6c4e60f5a809449.js.map