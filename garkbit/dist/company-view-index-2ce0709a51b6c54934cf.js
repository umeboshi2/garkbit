(self.webpackJsonp=self.webpackJsonp||[]).push([[21],{150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,a,u,l,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=(p(n(4)),p(n(2)),p(n(3))),c=(n(10),p(n(17))),f=p(n(19));p(n(6));function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=n(16);l=y.form_group_input_div,r=Backbone.Radio.channel("global"),Backbone.Radio.channel("messages"),Backbone.Radio.channel("site-nav"),u=s.default.renderable(function(e){return s.default.div(".modal-dialog.modal-md",function(){return s.default.div(".modal-content",function(){return s.default.h3("Please Name Boss"),s.default.div(".modal-body",function(){return l({input_id:"input_name",label:"Name",input_attributes:{name:"name",value:e.namePlaceholder}}),s.default.div(".spinner.fa.fa-spinner.fa-spin")}),s.default.div(".modal-footer",function(){return s.default.button(".btn.btn-warning.fa.fa-close.mr-auto",{data:{dismiss:"modal"}},"Cancel"),s.default.input(".btn.btn-primary.ml-auto.login-btn",{type:"submit",value:"Submit"})})})})}),o=function(e){function t(){return d(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,c.default),i(t,[{key:"ui",value:function(){return(0,f.default)(this.getOption("fieldList"))}},{key:"createModel",value:function(){return this.model}},{key:"emptyModal",value:function(){return r.request("main:app:object").getView().getRegion("modal").empty()}}]),t}(),a=function(){var e=function(e){function t(){return d(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,o),i(t,[{key:"templateContext",value:function(){return{namePlaceholder:r.request("main:app:decode-auth-token").name}}},{key:"updateModel",value:function(){return this.model.set("name",this.ui.name.val()),console.log("model updated",this.model)}},{key:"saveModel",value:function(){var e,t=this;return e={success:function(){return t.trigger("save:form:success",t.model)},error:function(){return t.trigger("save:form:failure",t.model)},type:"POST",url:this.model.urlRoot},this.model.save(null,e)}},{key:"onSuccess",value:function(){var e;return this.emptyModal(),console.log("onSuccess"),e=r.request("main:applet:get-applet","company"),console.log("applet",e),e.getController().addBoss()}}]),t}();return e.prototype.template=u,e.prototype.fieldList=["name"],e}.call(void 0),t.default=a},341:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=c(n(1)),a=c(n(2)),u=c(n(3)),l=c(n(29)),i=c(n(6)),s=c(n(150));function c(e){return e&&e.__esModule?e:{default:e}}var f,p,d,m,b,y=[].indexOf;p=r.default.Radio.channel("global"),m=r.default.Radio.channel("messages"),f=r.default.Radio.channel("company"),b=u.default.renderable(function(e){return u.default.div(".row.listview-list-entry",function(){return u.default.raw((0,l.default)("# "+e.appName+" started."))})}),d=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.View),o(t,[{key:"getBossObject",value:function(e){var t,n;return f.request("db:boss:collection"),(n=(t=f.request("db:boss:new",{id:e.uid})).fetch()).fail(function(t){var n,o;return 404===t.status?(n=f.request("db:boss:new",{id:e.uid}),o=new s.default({model:n}),p.request("main:app:show-modal",o)):(t.responseJSON.message,m.request("xhr-error",t))}),{response:n,model:t}}},{key:"getCompanyObject",value:function(e){var t,n;return(n=(t=f.request("db:company:collection")).fetch()).fail(function(e){return m.request("xhr-error",e)}),{response:n,collection:t}}},{key:"onRender",value:function(){var e,t,n=this;return t=p.request("main:app:decode-auth-token"),y.call(t.groups,"boss")>=0?this.getBossObject(t).response.done(function(e){var o;return console.log("get boss",e),e.id,(o=n.getCompanyObject(t)).response.done(function(){var e,t;return e=o.collection,console.log("collection",e),e.length?1===e.length?(t=e.at(0).get("id"),(0,i.default)("#company/company/view/"+t)):(0,i.default)("#company/company/list"):(0,i.default)("#company/company/add")})}):(e=t.name+' is not in the "boss" group.',m.request("warning",e)),console.log("onRender")}}]),t}();return e.prototype.template=b,e.prototype.templateContext={appName:"company"},e}.call(void 0),t.default=d}}]);
//# sourceMappingURL=company-view-index-2ce0709a51b6c54934cf.js.map