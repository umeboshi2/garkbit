(self.webpackJsonp=self.webpackJsonp||[]).push([[78],{641:function(e,t,n){"use strict";var i,r,o,c,u,s,a,p,d,l,f,b=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();r=n(1),c=n(2),f=n(3),p=n(32),n(33),l=n(5);var y=n(31);a=y.form_group_input_div,u=r.Radio.channel("messages"),i=r.Radio.channel("sofi"),d=function(e,t,n){return{input_id:"input_"+e,label:t,input_attributes:{name:e,placeholder:n}}},s=f.renderable(function(e){var t;return t=d("destname","New Description","newdescription"),f.div(".form-inline",function(){return a(t),f.div("#copy-dsc-btn.btn.btn-default","Copy"),f.div("#edit-dsc-btn.btn.btn-default","Edit")}),f.div(".listview-header",function(){return f.text("Viewing Description "+e.name)}),f.hr(),f.article(".document-view.content",function(){return f.div(".body",function(){return f.raw(p(e.content))})})}),o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.View),b(t,[{key:"edit_description",value:function(){return l("#sofi/dsc/edit/"+this.model.id)}},{key:"copy_description",value:function(){var e,t,n;if("bar",e=this.ui.destname_input.val())return(t=i.request("db:ebdsc:new")).set("name",e),t.set("title",this.model.get("title")),t.set("content",this.model.get("content")),i.request("db:ebdsc:collection").add(t),(n=t.save()).fail(function(){return u.request("danger","Failed to save new description!")}),n.done(function(){var e;return e="Copied new description "+t.get("name"),u.request("success",e),l("#sofi/dsc/view/"+t.id)});u.request("warning","Please input a new description name.")}}]),t}();return e.prototype.template=s,e.prototype.ui={copy_btn:"#copy-dsc-btn",edit_btn:"#edit-dsc-btn",destname_input:'input[name="destname"]'},e.prototype.events={"click @ui.copy_btn":"copy_description","click @ui.edit_btn":"edit_description"},e}.call(void 0),e.exports=o}}]);
//# sourceMappingURL=sofi-view-description-77d2119b4f1928363417.js.map