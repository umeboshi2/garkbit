(self.webpackJsonp=self.webpackJsonp||[]).push([[73],{454:function(e,t,n){"use strict";var i=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();var r,o,s,a,l,u,c,p=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};o=n(1),a=n(2),n(82),c=n(3),u=n(5);var f=n(34);f.make_field_input,f.make_field_select,o.Radio.channel("global"),o.Radio.channel("messages"),r=o.Radio.channel("sofi"),l=c.renderable(function(e){return c.article(".document-view.content",function(){return c.div(".body",function(){return c.div(".panel.panel-default",function(){return c.div(".panel-heading","Drop an xml file."),c.div(".panel-body",function(){return c.label(".checkbox-inline",function(){return c.input(".forsale-cbox.checkbox",{type:"checkbox"},c.text("Select only comics for sale."))}),c.div(".parse-btn.btn.btn-default",{style:"display:none"},function(){return c.text("Parse Dropped File")}),c.input(".xml-file-input.input",{type:"file"}),c.span(".parse-chosen-button.btn.btn-default",{style:"display:none"},function(){return c.text("Parse input file.")})})})})})}),s=function(){var e=function(e){function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.successfulParse=e.successfulParse.bind(e),e.xmlReaderOnLoad=e.xmlReaderOnLoad.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a.View),i(n,[{key:"file_input_clicked",value:function(e){return console.log("file_input_clicked",e),this.ui.file_input.val(null),this.ui.chosen_btn.hide()}},{key:"file_input_changed",value:function(e){return console.log("file_input_changed",e),this.ui.chosen_btn.show()}},{key:"handle_drop",value:function(e){var t;return e.preventDefault(),this.$el.css("border","0px"),t=e.originalEvent.dataTransfer.files[0],this.ui.status_msg.text("File: "+t.name),this.droppedFile=t,this.ui.parse_btn.show()}},{key:"handle_dragOver",value:function(e){return e.preventDefault(),e.stopPropagation()}},{key:"handle_dragEnter",value:function(e){return e.stopPropagation(),e.preventDefault(),this.$el.css("border","2px dotted")}},{key:"successfulParse",value:function(){return p(this,n),this.ui.status_msg.text("Parse Successful"),u("#sofi")}},{key:"parse_chosen_xml",value:function(){var e,t;return this.ui.status_msg.text("Reading xml file..."),this.ui.file_input.val(),this.ui.file_input,e=this.ui.file_input[0].files[0],(t=new FileReader).onload=this.xmlReaderOnLoad,t.readAsText(e),this.ui.parse_btn.hide()}},{key:"xmlReaderOnLoad",value:function(e){var t;return p(this,n),t=e.target.result,this.ui.status_msg.text("Parsing xml....."),console.log("hello there",this.ui.forsale_cbox),this.ui.forsale_cbox.is(":checked")?r.request("parse-comics-xml",t,this.successfulParse):r.request("parse-all-comics-xml",t,this.successfulParse)}},{key:"parse_xml",value:function(){var e;return this.ui.status_msg.text("Reading xml file..."),(e=new FileReader).onload=this.xmlReaderOnLoad,e.readAsText(this.droppedFile),this.ui.parse_btn.hide()}}]),n}();return e.prototype.template=l,e.prototype.droppedFile=null,e.prototype.ui={forsale_cbox:".forsale-cbox",status_msg:".panel-heading",file_input:".xml-file-input",parse_btn:".parse-btn",chosen_btn:".parse-chosen-button"},e.prototype.events={dragover:"handle_dragOver",dragenter:"handle_dragEnter",drop:"handle_drop","click @ui.parse_btn":"parse_xml","click @ui.file_input":"file_input_clicked","change @ui.file_input":"file_input_changed","click @ui.chosen_btn":"parse_chosen_xml"},e}.call(void 0),e.exports=s}}]);
//# sourceMappingURL=sofi-view-upload-xml-view-fd333638214840d4cdd6.js.map