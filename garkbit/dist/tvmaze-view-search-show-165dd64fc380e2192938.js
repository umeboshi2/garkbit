(self.webpackJsonp=self.webpackJsonp||[]).push([[92],{1159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,u,i,a,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=(p(n(7)),n(1)),f=p(n(6)),c=p(n(59));function p(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=n(58);i=d.form_group_input_div,r=l.Radio.channel("messages"),o=l.Radio.channel("tvmaze"),a=f.default.renderable((function(){return i({input_id:"input_show",label:"TV Show",input_attributes:{name:"tv_show",placeholder:"tiny toons"}}),f.default.input(".btn.btn-primary.btn-sm",{type:"submit",value:"Search"}),f.default.div(".spinner.fa.fa-spinner.fa-spin")})),u=function(){var e=function(e){function t(){return h(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"createModel",value:function(){return new(o.request("get-local-tvshow-model"))}},{key:"updateModel",value:function(){return this.tvshow=this.ui.tvShow.val()}},{key:"saveModel",value:function(){var e,t,n=this;return(e=(t=o.request("single-show-search",this.tvshow)).fetch()).done((function(){return o.request("save-local-show",t.toJSON()).then((function(){return l.history.navigate("#tvmaze/shows/view/"+t.id,{trigger:!0})}))})),e.fail((function(){return r.request("warning",n.tvshow+" not found."),n.trigger("save:form:failure",n.model)}))}}]),t}(c.default);return e.prototype.template=a,e.prototype.ui={tvShow:'[name="tv_show"]'},e}.call(void 0),t.default=u}}]);
//# sourceMappingURL=tvmaze-view-search-show-165dd64fc380e2192938.js.map