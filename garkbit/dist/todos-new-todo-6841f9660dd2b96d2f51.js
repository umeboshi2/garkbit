(self.webpackJsonp=self.webpackJsonp||[]).push([[15],{177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EditView=t.NewView=void 0;var o,r,i,u,a,l,c,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=w(n(0)),s=w(n(1)),d=w(n(32)),v=w(n(37)),y=w(n(5)),_=w(n(18)),b=w(n(3)),h=n(30);function w(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}s.default.Radio.channel("global"),u=s.default.Radio.channel("messages"),o=s.default.Radio.channel("todos"),l=b.default.renderable(function(e){var t,n,o,r;for(n=0,o=(r=["name"]).length;n<o;n++)t=r[n],(0,h.form_group_input_div)({input_id:"input_"+t,label:(0,_.default)(t),input_attributes:{name:t,placeholder:t,value:e[t]}});return t="description",(0,h.form_group_input_div)({input_id:"input_"+t,input_type:"textarea",label:(0,_.default)(t),input_attributes:{name:t,placeholder:t},content:e[t]})}),c=b.default.renderable(function(e){return l(e),b.default.input(".btn.btn-default",{type:"submit",value:"Submit"}),b.default.div(".spinner.fa.fa-spinner.fa-spin")}),r=function(){var e=function(e){function t(){return m(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,d.default),p(t,[{key:"ui",value:function(){var e;return e=(0,v.default)(this.fieldList),f.default.extend(e,{description:'textarea[name="description"]'}),e}},{key:"updateModel",value:function(){var e,t,n,o,r;for(r=[],t=0,n=(o=this.fieldList.concat(["description"])).length;t<n;t++)e=o[t],console.log("field",e,this.ui[e].val()),r.push(this.model.set(e,this.ui[e].val()));return r}},{key:"onSuccess",value:function(e){var t;return t=e.get("name"),u.request("success",t+" saved successfully.","grain"),(0,y.default)("#todos")}}]),t}();return e.prototype.template=c,e.prototype.fieldList=["name"],e}.call(void 0),t.NewView=a=function(e){function t(){return m(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,r),p(t,[{key:"createModel",value:function(){var e;return(e=o.request("new-todo")).set("completed",!1),e}},{key:"saveModel",value:function(){return o.request("todo-collection").add(this.model),function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var u=r.get;return void 0!==u?u.call(o):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"saveModel",this).apply(this,arguments)}}]),t}(),t.EditView=i=function(e){function t(){return m(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,r),p(t,[{key:"createModel",value:function(){return this.model}}]),t}(),t.NewView=a,t.EditView=i}}]);
//# sourceMappingURL=todos-new-todo-6841f9660dd2b96d2f51.js.map