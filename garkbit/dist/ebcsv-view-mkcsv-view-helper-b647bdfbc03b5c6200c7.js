(self.webpackJsonp=self.webpackJsonp||[]).push([[42],{475:function(e,t,n){"use strict";var o,c,r,l,i,s,u,a,f,b,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();c=n(1),i=n(2),n(87),b=n(3),f=n(5);var d=n(31);d.make_field_input,d.make_field_select,n(31).form_group_input_div,n(182),r=n(241),c.Radio.channel("global"),c.Radio.channel("messages"),o=c.Radio.channel("ebcsv"),s=b.renderable(function(){return b.div(".form-group",function(){return b.label(".control-label",{for:"select_action"},"Action")}),b.select(".form-control",{name:"select_action"},function(){var e,t,n,o,c;for(c=[],t=0,n=(o=["Add","VerifyAdd"]).length;t<n;t++)e=o[t],c.push(b.option({selected:null,value:e},e));return c})}),u=b.renderable(function(e){return b.div(".form-group",function(){return b.label(".control-label",{for:"select_cfg"},"Config")}),b.select(".form-control",{name:"select_cfg"},function(){var t,n,o,c,r,l,i;for(i=[],t=0,n=(l=e.models).length;t<n;t++)c=(o=l[t]).get("name"),r={value:o.id},"default"===c&&(r.selected=""),i.push(b.option(r,c));return i})}),a=b.renderable(function(e){return b.div(".form-group",function(){return b.label(".control-label",{for:"select_dsc"},"Description")}),b.select(".form-control",{name:"select_dsc"},function(){var t,n,o,c,r,l,i;for(i=[],t=0,n=(l=e.models).length;t<n;t++)c=(o=l[t]).get("name"),r={value:o.id},"default"===c&&(r.selected=""),i.push(b.option(r,c));return i})}),l=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.View),p(t,[{key:"templateContext",value:function(){var e;return(e=this.options).ebcfg_collection=o.request("ebcfg-collection"),e.ebdsc_collection=o.request("ebdsc-collection"),e}},{key:"make_csv",value:function(){var e,t,n;return e=this.ui.action_sel.val(),t=o.request("get-ebcfg",this.ui.cfg_sel.val()),n=o.request("get-ebdsc",this.ui.dsc_sel.val()),o.request("set-current-csv-action",e),o.request("set-current-csv-cfg",t),o.request("set-current-csv-dsc",n),f("#ebcsv/csv/preview")}},{key:"show_comics",value:function(){var e;return e=new r({collection:this.collection}),this.showChildView("body",e)}}]),t}();return e.prototype.regions={body:".body"},e.prototype.template=b.renderable(function(e){return b.div(".listview-header",function(){return b.text("Create CSV")}),b.div(".mkcsv-form",function(){return s(),u(e.ebcfg_collection),a(e.ebdsc_collection)}),b.div(".mkcsv-button.btn.btn-default","Preview CSV Data"),b.div(".show-comics-button.btn.btn-default","Show Comics"),b.div(".body")}),e.prototype.ui={mkcsv_btn:".mkcsv-button",show_btn:".show-comics-button",action_sel:'select[name="select_action"]',cfg_sel:'select[name="select_cfg"]',dsc_sel:'select[name="select_dsc"]'},e.prototype.events={"click @ui.mkcsv_btn":"make_csv","click @ui.show_btn":"show_comics"},e}.call(void 0),e.exports=l}}]);
//# sourceMappingURL=ebcsv-view-mkcsv-view-helper-b647bdfbc03b5c6200c7.js.map