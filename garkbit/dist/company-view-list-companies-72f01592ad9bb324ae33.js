(self.webpackJsonp=self.webpackJsonp||[]).push([[22],{150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,a,u,i,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=(d(n(4)),d(n(2)),d(n(3))),s=(n(10),d(n(17))),f=d(n(19));d(n(6));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=n(16);i=y.form_group_input_div,r=Backbone.Radio.channel("global"),Backbone.Radio.channel("messages"),Backbone.Radio.channel("site-nav"),u=c.default.renderable(function(e){return c.default.div(".modal-dialog.modal-md",function(){return c.default.div(".modal-content",function(){return c.default.h3("Please Name Boss"),c.default.div(".modal-body",function(){return i({input_id:"input_name",label:"Name",input_attributes:{name:"name",value:e.namePlaceholder}}),c.default.div(".spinner.fa.fa-spinner.fa-spin")}),c.default.div(".modal-footer",function(){return c.default.button(".btn.btn-warning.fa.fa-close.mr-auto",{data:{dismiss:"modal"}},"Cancel"),c.default.input(".btn.btn-primary.ml-auto.login-btn",{type:"submit",value:"Submit"})})})})}),o=function(e){function t(){return p(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,s.default),l(t,[{key:"ui",value:function(){return(0,f.default)(this.getOption("fieldList"))}},{key:"createModel",value:function(){return this.model}},{key:"emptyModal",value:function(){return r.request("main:app:object").getView().getRegion("modal").empty()}}]),t}(),a=function(){var e=function(e){function t(){return p(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,o),l(t,[{key:"templateContext",value:function(){return{namePlaceholder:r.request("main:app:decode-auth-token").name}}},{key:"updateModel",value:function(){return this.model.set("name",this.ui.name.val()),console.log("model updated",this.model)}},{key:"saveModel",value:function(){var e,t=this;return e={success:function(){return t.trigger("save:form:success",t.model)},error:function(){return t.trigger("save:form:failure",t.model)},type:"POST",url:this.model.urlRoot},this.model.save(null,e)}},{key:"onSuccess",value:function(){var e;return this.emptyModal(),console.log("onSuccess"),e=r.request("main:applet:get-applet","company"),console.log("applet",e),e.getController().addBoss()}}]),t}();return e.prototype.template=u,e.prototype.fieldList=["name"],e}.call(void 0),t.default=a},345:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,a,u,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=f(n(1)),c=f(n(2)),s=f(n(3));f(n(29));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(6).navigate_to_url,l.default.Radio.channel("global"),l.default.Radio.channel("company"),s.default.renderable(function(e){return".btn.btn-secondary.btn-sm",s.default.span(".mr-auto",function(){return e.name}),s.default.span(".ml-auto.btn-group.pull-right",function(){return s.default.button(".add-item..btn.btn-secondary.btn-sm.btn-info.fa.fa-plus")})}),a=s.default.renderable(function(e){return".btn.btn-info.btn-sm",s.default.span(".mr-auto",function(){return e.name}),s.default.span(".ml-auto.btn-group.pull-right",function(){return s.default.button(".edit-item..btn.btn-info.btn-sm","Edit")})}),o=function(){var e=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,c.default.View),i(t,[{key:"className",value:function(){return"list-group-item worker-item row"}},{key:"ui",value:function(){return{addItem:".add-item"}}},{key:"events",value:function(){return{"click @ui.addItem":"addItem"}}},{key:"addItem",value:function(){return console.log("addItem called",this.model)}}]),t}();return e.prototype.template=a,e.prototype.tagName="li",e}.call(void 0),u=s.default.renderable(function(){return s.default.div(".listview-header",function(){return s.default.text("Current Workers")}),s.default.hr(),s.default.div(".workers-container.list-group")}),r=function(){var e=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,c.default.View),i(t,[{key:"ui",value:function(){return{itemList:".workers-container"}}},{key:"regions",value:function(){return{itemList:"@ui.itemList"}}},{key:"onRender",value:function(){var e;return e=new c.default.CollectionView({tagName:"ul",className:"list-group",collection:this.collection,childView:o}),this.showChildView("itemList",e)}}]),t}();return e.prototype.template=u,e}.call(void 0),t.default=r},346:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=s(n(1)),a=s(n(2)),u=s(n(3)),i=s(n(29)),l=s(n(6)),c=s(n(150));function s(e){return e&&e.__esModule?e:{default:e}}var f,d,p,m,b,y=[].indexOf;d=r.default.Radio.channel("global"),m=r.default.Radio.channel("messages"),f=r.default.Radio.channel("company"),b=u.default.renderable(function(e){return u.default.div(".row.listview-list-entry",function(){return u.default.raw((0,i.default)("# View Company "+e.name+"."))})}),p=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.View),o(t,[{key:"getBossObject",value:function(e){var t,n;return f.request("db:boss:collection"),(n=(t=f.request("db:boss:new",{id:e.uid})).fetch()).fail(function(t){var n,o,r;return 404===t.status?(n=f.request("db:boss:new",{id:e.uid}),r=new c.default({model:n}),d.request("main:app:show-modal",r)):(o=t.responseJSON.message,m.request("danger",o))}),{response:n,model:t}}},{key:"getCompanyObject",value:function(e){var t,n;return(n=(t=f.request("db:company:collection")).fetch({data:{where:{boss_id:e.uid}}})).fail(function(e){var t;return t=e.responseJSON.message,m.request("danger",t)}),{response:n,collection:t}}},{key:"onRender",value:function(){var e,t,n=this;return t=d.request("main:app:decode-auth-token"),y.call(t.groups,"boss")>=0?this.getBossObject(t).response.done(function(e){var o;return console.log("get boss",e),e.id,(o=n.getCompanyObject(t)).response.done(function(){var e,t;return e=o.collection,console.log("collection",e),e.length?1===e.length?(t=e.at(0).get("id"),(0,l.default)("#company/company/view/"+t)):(0,l.default)("#company/company/list"):(0,l.default)("#company/company/add")})}):(e=t.name+' is not in the "boss" group.',m.request("warning",e)),console.log("onRender")}}]),t}();return e.prototype.template=b,e.prototype.templateContext={appName:"company"},e}.call(void 0),t.default=p}}]);
//# sourceMappingURL=company-view-list-companies-72f01592ad9bb324ae33.js.map