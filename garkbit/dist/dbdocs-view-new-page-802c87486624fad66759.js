(self.webpackJsonp=self.webpackJsonp||[]).push([[8],{188:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EditPageView=t.NewPageView=void 0;var n,r,i,u,a,l,s,c=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),f=_(o(0)),d=_(o(1)),p=_(o(3)),h=_(o(36)),v=_(o(42)),y=(_(o(5)),_(o(143))),b=o(34);function _(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}d.default.Radio.channel("global"),u=d.default.Radio.channel("messages"),l=d.default.Radio.channel("resources"),s=["name","title","description"],r=p.default.renderable(function(e){var t,o,n;for(p.default.div(".listview-header","Document"),o=0,n=s.length;o<n;o++)t=s[o],(0,b.make_field_input)(t)(e);return(0,b.make_field_select)(t,["html","markdown"])(e),p.default.div("#ace-editor",{style:"position:relative;width:100%;height:40em;"}),p.default.input(".btn.btn-default",{type:"submit",value:"Submit"}),p.default.div(".spinner.fa.fa-spinner.fa-spin")}),n=function(){var e=function(e){function t(){return m(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,h.default),c(t,[{key:"ui",value:function(){var e;return e=(0,v.default)(this.fieldList),f.default.extend(e,{editor:"#ace-editor"}),e}},{key:"afterDomRefresh",value:function(){var e;if(this.model.has("content"))return e=this.model.get("content"),this.editor.setValue(e)}},{key:"updateModel",value:function(){var e,t,o,n;for(t=0,o=(n=this.fieldList).length;t<o;t++)e=n[t],this.model.set(e,this.ui[e].val());return this.model.set("content",this.editor.getValue())}},{key:"onSuccess",value:function(e){var t;return t=this.model.get("name"),u.request("success",t+" saved successfully.")}}]),t}();return e.prototype.editorMode="html",e.prototype.editorContainer="ace-editor",e.prototype.fieldList=s,e.prototype.template=r,e.prototype.behaviors={HasAceEditor:{behaviorClass:y.default}},e}.call(void 0),t.NewPageView=a=function(e){function t(){return m(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,n),c(t,[{key:"createModel",value:function(){return l.request("new-document")}},{key:"saveModel",value:function(){return l.request("document-collection").add(this.model),function e(t,o,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,o);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,o,n)}if("value"in r)return r.value;var u=r.get;return void 0!==u?u.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"saveModel",this).apply(this,arguments)}}]),t}(),t.EditPageView=i=function(e){function t(){return m(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,n),c(t,[{key:"createModel",value:function(){return this.model}}]),t}(),t.NewPageView=a,t.EditPageView=i}}]);
//# sourceMappingURL=dbdocs-view-new-page-802c87486624fad66759.js.map