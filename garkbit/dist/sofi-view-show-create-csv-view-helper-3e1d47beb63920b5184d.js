(self.webpackJsonp=self.webpackJsonp||[]).push([[70],{448:function(e,t,o){"use strict";var r,n,c,l,i,s,a,u,f,p,d,b,v=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}();function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n=o(1),i=o(2),o(82),b=o(3),d=o(5);var _=o(34);_.make_field_input,_.make_field_select,o(34).form_group_input_div,o(207),c=o(166),n.Radio.channel("global"),n.Radio.channel("messages"),r=n.Radio.channel("sofi"),u=b.renderable(function(){return b.div(".form-group",function(){return b.label(".control-label",{for:"select_action"},"Action")}),b.select(".form-control",{name:"select_action"},function(){var e,t,o,n,r;for(r=[],t=0,o=(n=["Add","VerifyAdd"]).length;t<o;t++)e=n[t],r.push(b.option({selected:null,value:e},e));return r})}),f=b.renderable(function(i){return b.div(".form-group",function(){return b.label(".control-label",{for:"select_cfg"},"Config")}),b.select(".form-control",{name:"select_cfg"},function(){var e,t,o,n,r,c,l;for(l=[],e=0,t=(c=i.models).length;e<t;e++)n=(o=c[e]).get("name"),r={value:o.id},"default"===n&&(r.selected=""),l.push(b.option(r,n));return l})}),p=b.renderable(function(i){return b.div(".form-group",function(){return b.label(".control-label",{for:"select_dsc"},"Description")}),b.select(".form-control",{name:"select_dsc"},function(){var e,t,o,n,r,c,l;for(l=[],e=0,t=(c=i.models).length;e<t;e++)n=(o=c[e]).get("name"),r={value:o.id},"default"===n&&(r.selected=""),l.push(b.option(r,n));return l})}),s=r.request("db:ebcomicworkspace:WorkspaceCollection"),a=function(){var e=function(e){function t(){return h(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,i.View),v(t,[{key:"initialize",value:function(){var e=this;return this.collection=new s,this.collection.fetch({data:{distinct:"name",sort:"name"}}).done(function(){return e.render()})}},{key:"templateContext",value:function(){return{collection:this.collection}}}]),t}();return e.prototype.ui={name_input:'select[name="select_workspace"]'},e.prototype.triggers={"change @ui.name_input":"workspace:changed"},e.prototype.template=b.renderable(function(l){return b.span(".input-group",function(){return b.label(".control-label",{for:"select_workspace"},"Workspace"),b.select(".form-control",{name:"select_workspace"},function(){var e,t,o,n,r,c;if(l.items.length){for(c=[],e=0,o=(r=l.items).length;e<o;e++)n={value:(t=r[e]).name},c.push(b.option(n,t.name));return c}return console.log("No workspaces!")})})}),e}.call(void 0),l=function(){var e=function(e){function t(){return h(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,i.View),v(t,[{key:"templateContext",value:function(){var e;return(e=this.options).ebcfgCollection=r.request("db:ebcfg:collection"),e.ebdscCollection=r.request("db:ebdsc:collection"),e}},{key:"onRender",value:function(){var e;return e=new a,this.showChildView("workspaceSelect",e)}},{key:"makeCsv",value:function(){var e,t,o,n;return e=this.ui.action_sel.val(),t=r.request("db:ebcfg:get",this.ui.cfg_sel.val()),o=r.request("db:ebdsc:get",this.ui.dsc_sel.val()),n=this.getChildView("workspaceSelect").ui.name_input.val(),console.log("makeCsv workspace",n),r.request("locals:set","currentCsvWorkspace",n),r.request("locals:set","currentCsvAction",e),r.request("locals:set","currentCsvCfg",t),r.request("locals:set","currentCsvDsc",o),d("#sofi/csv/preview")}},{key:"showComics",value:function(){var e;return e=new c({collection:this.collection}),this.showChildView("body",e)}}]),t}();return e.prototype.ui={mkcsv_btn:".mkcsv-button",show_btn:".show-comics-button",action_sel:'select[name="select_action"]',cfg_sel:'select[name="select_cfg"]',dsc_sel:'select[name="select_dsc"]',workspaceSelect:".workspace-select",body:".body"},e.prototype.regions={body:"@ui.body",workspaceSelect:"@ui.workspaceSelect"},e.prototype.events={"click @ui.mkcsv_btn":"makeCsv","click @ui.show_btn":"showComics"},e.prototype.template=b.renderable(function(e){return b.div(".listview-header",function(){return b.text("Create CSV")}),b.div(".mkcsv-form",function(){return u(),f(e.ebcfgCollection),p(e.ebdscCollection),b.div(".workspace-select")}),b.hr(),b.div(".mkcsv-button.btn.btn-default","Preview CSV Data"),b.div(".show-comics-button.btn.btn-default","Show Comics"),b.div(".body")}),e}.call(void 0),e.exports=l}}]);
//# sourceMappingURL=sofi-view-show-create-csv-view-helper-3e1d47beb63920b5184d.js.map