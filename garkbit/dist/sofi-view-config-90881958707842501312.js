(self.webpackJsonp=self.webpackJsonp||[]).push([[48],{262:function(e,t,n){"use strict";var o,i,r,c,u,a,f,s,l,p,d,b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();i=n(1),n(2),d=n(3),n(31),n(32),p=n(5);var g=n(30);s=g.form_group_input_div,c=i.Radio.channel("messages"),o=i.Radio.channel("sofi"),a=o.request("csv-req-fieldnames"),u=o.request("csv-opt-fieldnames"),l=function(e,t,n){return{input_id:"input_"+e,label:t,input_attributes:{name:e,placeholder:n}}},f=d.renderable(function(e){return d.div(".form-inline",function(){return s(l("destname","New Config","newconfig")),d.div("#copy-cfg-btn.btn.btn-default","Copy Config"),d.div("#edit-cfg-btn.btn.btn-default","Edit Config")}),d.div(".listview-header",function(){return d.text("Viewing Config "+e.name)}),d.hr(),d.article(".document-view.content",function(){return d.div(".body",function(){return d.dl(".dl-horizontal",function(){var t,n,o,i;for(i=[],n=0,o=a.length;n<o;n++)t=a[n],d.dt(t),i.push(d.dd(e.content[t]));return i}),d.dl(".dl-horizontal",function(){var t,n,o,i;for(i=[],n=0,o=u.length;n<o;n++)t=u[n],d.dt(t),i.push(d.dd(e.content[t]));return i})})})}),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Marionette.View),b(t,[{key:"edit_config",value:function(){return p("#sofi/cfg/edit/"+this.model.id)}},{key:"copy_config",value:function(){var e,t,n;if("bar",e=this.ui.destname_input.val())return(t=o.request("db:ebcfg:new")).set("name",e),t.set("content",this.model.get("content")),o.request("db:ebcfg:collection").add(t),(n=t.save()).fail(function(){return c.request("danger","Failed to save new config!")}),n.done(function(){var e;return e="Copied new config "+t.get("name"),c.request("success",e),p("#sofi/cfg/view/"+t.id)});c.request("warning","Please input a new config name.")}}]),t}();return e.prototype.template=f,e.prototype.ui={copy_btn:"#copy-cfg-btn",edit_btn:"#edit-cfg-btn",destname_input:'input[name="destname"]'},e.prototype.events={"click @ui.copy_btn":"copy_config","click @ui.edit_btn":"edit_config"},e}.call(void 0),e.exports=r}}]);
//# sourceMappingURL=sofi-view-config-90881958707842501312.js.map