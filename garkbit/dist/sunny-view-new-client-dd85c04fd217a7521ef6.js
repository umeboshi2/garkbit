(self.webpackJsonp=self.webpackJsonp||[]).push([[15],{250:function(e,t,n){"use strict";var o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i,l,a,u,s,f=_(n(0)),c=_(n(1)),p=_(n(3)),d=_(n(33)),y=_(n(5)),h=_(n(37)),v=_(n(16)),b=n(31);function _(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function w(){return m(this,w),g(this,(w.__proto__||Object.getPrototypeOf(w)).apply(this,arguments))}function k(){return m(this,k),g(this,(k.__proto__||Object.getPrototypeOf(k)).apply(this,arguments))}c.default.Radio.channel("global"),u=c.default.Radio.channel("messages"),i=c.default.Radio.channel("sunny"),O(w,l=function(){var e=(O(t,d.default),o(t,[{key:"templateContext",value:function(){return{fieldList:this.fieldList}}},{key:"ui",value:function(){var e;return e=(0,h.default)(this.fieldList),f.default.extend(e,{description:'textarea[name="description"]'}),e}},{key:"updateModel",value:function(){var e,t,n,o,r,i;for(r=[],t=0,n=(o=this.fieldList.concat(["description"])).length;t<n;t++)e=o[t],i=this.ui[e].val(),console.log("field",e,i),"fullname"!==e||i||(console.log("no fullname here....."),i=(0,v.default)(this.model.get("name"))),r.push(this.model.set(e,i));return r}},{key:"onSuccess",value:function(e){var t;return t=e.get("name"),u.request("success",t+" saved successfully.","grain"),(0,y.default)("#sunny")}}]),t);function t(){return m(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.fieldList=["name","fullname","email"],e.prototype.template=p.default.renderable(function(e){var t,n,o,r;for(p.default.div(".listview-header","Client"),n=0,o=(r=e.fieldList).length;n<o;n++)t=r[n],(0,b.make_field_input)(t)(e);return(0,b.make_field_textarea)("description")(e),p.default.input(".btn.btn-default",{type:"submit",value:"Submit"}),p.default.div(".spinner.fa.fa-spinner.fa-spin")}),e}.call(void 0)),o(w,[{key:"createModel",value:function(){return i.request("new-client")}},{key:"saveModel",value:function(){return i.request("client-collection").add(this.model),function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var l=r.get;return void 0!==l?l.call(o):void 0}(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"saveModel",this).call(this,arguments)}}]),s=w,O(k,l),o(k,[{key:"createModel",value:function(){return this.model}}]),a=k,e.exports={NewClientView:s,EditClientView:a}}}]);
//# sourceMappingURL=sunny-view-new-client-dd85c04fd217a7521ef6.js.map