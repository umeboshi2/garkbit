(self.webpackJsonp=self.webpackJsonp||[]).push([[27],{705:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},l=n(1),c=n(706),f=(r=c)&&r.__esModule?r:{default:r};o=l.Radio.channel("company"),i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"createModel",value:function(){return o.request("db:company:new")}},{key:"saveModel",value:function(){return o.request("db:company:collection").add(this.model),u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"saveModel",this).call(this,arguments)}}]),t}(f.default),t.default=i},706:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=n(0),f=y(n(7)),s=y(n(90)),p=y(n(91)),d=n(89);function y(e){return e&&e.__esModule?e:{default:e}}var b=n(89);a=b.form_group_input_div,o=l.Radio.channel("global"),i=l.Radio.channel("messages"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"templateContext",value:function(){return{fieldList:this.fieldList}}},{key:"ui",value:function(){var e;return e=(0,p.default)(this.fieldList),(0,c.extend)(e,{description:'textarea[name="description"]'}),e}},{key:"updateModel",value:function(){var e,t,n,r,i,a;for(t=0,n=(r=this.fieldList.concat(["description"])).length;t<n;t++)e=r[t],a=this.ui[e].val(),this.model.set(e,a);return i=o.request("main:app:decode-auth-token"),this.model.set("boss_id",i.uid)}},{key:"onSuccess",value:function(e){var t;return t=e.get("name"),i.request("success",t+" saved successfully.","grain")}}]),t}(s.default);return e.prototype.fieldList=["name"],e.prototype.template=f.default.renderable((function(e){return f.default.div(".listview-header","New Company"),a({input_id:"input_name",label:"Name",input_attributes:{name:"name",type:"input",placeholder:"Enter a name","data-validation":"name"},invalidFeedback:"A name is needed."}),(0,d.make_field_textarea)("description")(e),f.default.input(".btn.btn-primary",{type:"submit",value:"Submit"}),f.default.div(".spinner.fa.fa-spinner.fa-spin")})),e}.call(void 0),t.default=r}}]);
//# sourceMappingURL=company-view-add-company-acec90e95f552c87c21e.js.map