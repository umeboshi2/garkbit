(self.webpackJsonp=self.webpackJsonp||[]).push([[9],{242:function(e,t,n){"use strict";var r,i,o,a,u,l,c,p,s,f,d,m,h,v,y,b,_,g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}i=n(1),n(2),_=n(3),n(32),a=n(33).default,b=n(5).default;var k=n(31);m=k.form_group_input_div;var R=n(31);h=R.make_field_input,R.make_field_select,l=i.Radio.channel("messages"),r=i.Radio.channel("ebcsv"),s=r.request("csv-req-fieldnames"),p=r.request("csv-opt-fieldnames"),d={format:(y=function(e,t,n){return{input_id:"input_"+e,label:t,input_attributes:{name:e,placeholder:n}}})("format","Format","FixedPrice"),location:y("location","Location","90210"),returnsacceptedoption:y("returnsacceptedoption","Returns Accepted Option","ReturnsAccepted"),duration:y("duration","Duration","GTC"),quantity:y("quantity","Quantity","1"),startprice:y("startprice","Start Price","1.25"),dispatchtimemax:y("dispatchtimemax","Dispatch Time Max","2"),conditionid:y("conditionid","Condition ID","0"),postalcode:y("postalcode","Postal Code","90210"),paymentprofilename:y("paymentprofilename","Payment Profile Name","PayNowPal"),returnprofilename:y("returnprofilename","Return Profile Name","Return30ExChangeReStock20"),shippingprofilename:y("shippingprofilename","Shipping Profile Name","Raw Comic Shipments"),scheduletime:y("scheduletime","Listing Delay Time","0d")},v=_.renderable(function(e,t,n){var r,i,o;return i=n.content||{},r=t[e],o=i[e],r.input_attributes.value=null!=o&&""!==o?i[e]:r.input_attributes.placeholder,m(r)}),f=_.renderable(function(e){return _.div(".panel.panel-default",function(){return _.div(".panel-heading","Config Name"),_.div(".panel-body",function(){return h("name")(e)})}),_.div(".panel.panel-default",function(){return _.div(".panel-heading","Required Fields"),_.div(".panel-body",function(){var t,n,r,i;for(i=[],n=0,r=s.length;n<r;n++)t=s[n],i.push(v(t,d,e));return i})}),_.div(".panel.panel-default",function(){return _.div(".panel-heading","Optional Fields"),_.div(".panel-body",function(){var t,n,r,i;for(i=[],n=0,r=p.length;n<r;n++)t=p[n],i.push(v(t,d,e));return i})}),_.input(".btn.btn-default",{type:"submit",value:"Submit"})}),o=function(e){function t(){return w(this,t),P(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,a),g(t,[{key:"ui",value:function(){var e,t;for(t in e={},this.form_data)e[t]='[name="'+t+'"]';return e.name='[name="name"]',e}},{key:"updateModel",value:function(){var e,t;for(t in e={},this.form_data)e[t]=this.ui[t].val();return this.model.set("content",e),this.model.set("name",this.ui.name.val()),console.log("@model",this.model)}},{key:"onSuccess",value:function(e){var t;return t=e.get("name"),l.request("success",t+" saved successfully."),b("#ebcsv/configs/view/"+e.id)}}]),t}(),u=function(){var e=function(e){function t(){return w(this,t),P(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,o),g(t,[{key:"createModel",value:function(){return this.model}}]),t}();return e.prototype.template=f,e.prototype.form_data=d,e}.call(void 0),c=function(){var e=function(e){function t(){return w(this,t),P(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,o),g(t,[{key:"createModel",value:function(){return new(r.request("get_local_configs").model)}}]),t}();return e.prototype.template=f,e.prototype.form_data=d,e}.call(void 0),e.exports={EditFormView:u,NewFormView:c}}}]);
//# sourceMappingURL=ebcsv-edit-config-7298ac2423fb24c1442c.js.map