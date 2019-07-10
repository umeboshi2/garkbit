(self.webpackJsonp=self.webpackJsonp||[]).push([[28],{404:function(e,t,n){"use strict";var r=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e};function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}var a,p,d,c,f,h,v,b,g,y,m,w,_,k,x,O;p=n(1),m=n(2),x=n(3),n(32),b=n(92),n(93),h=n(150),_=n(199),n(5).navigate_to_url,g=p.Radio.channel("global"),w=p.Radio.channel("messages"),p.Radio.channel("dbadmin"),a=g.request("main:app:AuthModel"),g.request("main:app:AuthCollection"),f=function(){var e=(u(t,a),t);function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.url="/api/dev/dbadmin/export-models",e}.call(void 0),v=function(){var e=(u(t,a),t);function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.url="/api/dev/dbadmin/import-models",e}.call(void 0),d=function(){var e=(u(t,a),t);function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.url="/api/dev/dbadmin/delete-models",e}.call(void 0),k=x.renderable(function(e){return x.div(".dropzone.card",function(){return x.div(".card-header",function(){return x.text("drop a dump of the database to upload")}),x.div(".card-body",function(){return x.div(".parse-btn.btn.btn-primary",{style:"display:none"},function(){return x.text("upload dropped data dump")}),x.input(".file-input.input",{type:"file"}),x.span(".parse-chosen-btn.btn.btn-primary",{style:"display:none"},function(){return x.text("Parse dropped meetings")})})})}),c=function(){var e=(u(a,m.View),r(a,[{key:"fileInputClicked",value:function(e){return console.log("file_input_clicked",e),this.ui.fileInput.val(null),this.ui.chosenBtn.hide()}},{key:"fileInputChanged",value:function(e){return console.log("file_input_changed",e),this.ui.chosenBtn.show()}},{key:"handleDrop",value:function(e){var t;return e.preventDefault(),this.ui.dropzone.css("border","0px"),t=e.originalEvent.dataTransfer.files[0],this.ui.statusMsg.text("File: "+t.name),this.droppedFile=t,this.ui.parseBtn.show()}},{key:"handleDragOver",value:function(e){return e.preventDefault(),e.stopPropagation()}},{key:"handleDragEnter",value:function(e){return e.stopPropagation(),e.preventDefault(),this.ui.dropzone.css("border","2px dotted")}},{key:"successfulParse",value:function(){return l(this,a),this.ui.statusMsg.text("Parse Successful"),w.request("success","successfulParse")}},{key:"fileReaderOnLoad",value:function(e){var t,n,r,i,o=this;return l(this,a),t=e.target.result,n=e.target.fileObject.name,this.ui.statusMsg.text("Retrieved file content of "+n),i=(r=new v({content:btoa(t)})).save(),this.ui.statusMsg.text("Uploaded "+n+"."),i.fail(function(){return w.request("warning","failed to save model")}),i.done(function(){return console.log("MODEL",r),r.get("data"),r.get("output"),w.request("success","Finished import"),o.ui.statusMsg.text("Finished import")})}},{key:"readFile",value:function(e){var t;return(t=new FileReader).onload=this.fileReaderOnLoad,t.fileObject=e,t.readAsBinaryString(e)}},{key:"handleChosenFile",value:function(){var e,t;return t=this.ui.fileInput.val(),this.ui.statusMsg.text("Reading chosen file...("+t+")"),e=this.ui.fileInput[0].files[0],this.ui.parseBtn.hide(),this.readFile(e)}},{key:"handleDroppedFile",value:function(){return this.ui.statusMsg.text("Reading dropped file... ("+this.droppedFile.name+")"),this.ui.parseBtn.hide(),this.readFile(this.droppedFile)}}]),a);function a(){o(this,a);var e=s(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments));return e.successfulParse=e.successfulParse.bind(e),e.fileReaderOnLoad=e.fileReaderOnLoad.bind(e),e}return e.prototype.template=k,e.prototype.ui={fileInput:".file-input",parseBtn:".parse-btn",chosenBtn:".parse-chosen-btn",dropzone:".dropzone",statusMsg:".card-header"},e.prototype.events={"dragover @ui.dropzone":"handleDragOver","dragenter @ui.dropzone":"handleDragEnter","drop @ui.dropzone":"handleDrop","click @ui.fileInput":"fileInputClicked","change @ui.fileInput":"fileInputChanged","click @ui.parseBtn":"handleDroppedFile","click @ui.chosenBtn":"handleChosenFile"},e}.call(void 0),O=x.renderable(function(e){return x.div(".row.listview-header","Garkbit Dbadmin"),x.button(".delete-btn.btn.btn-danger","Delete"),x.button(".export-btn.btn.btn-info","Export"),x.div(".row.status-message"),x.div(".row.dropfile-view")}),y=function(){var e=(u(t,m.View),r(t,[{key:"onRender",value:function(){var e;return e=new c,this.showChildView("dropFile",e)}},{key:"deleteBtnClicked",value:function(){var e;return console.log("deleteBtnClicked"),(e=new d).fetch().done(function(){return w.request("success",e.get("result"))})}},{key:"exportDatabase",value:function(){var n,r=this;return this.ui.statusMsg.text("Exporting database..."),(n=new f).fetch().done(function(){var e,t;return t={filename:"dbdump-production-"+n.get("sha256sum").slice(0,5)+".json.xz",type:"application/octet-stream",data:n.get("content")},e=_(t.data,t.type),console.log("BLOB",e),h.saveAs(e,t.filename),w.request("success","Exported database...."),r.ui.statusMsg.text("")})}},{key:"IgnoreonDomRefresh",value:function(){return this.jsonView=new b(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),t);function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=O,e.prototype.templateContext={appName:"dbadmin"},e.prototype.ui={exportBtn:".export-btn",deleteBtn:".delete-btn",statusMsg:".status-message",dropFile:".dropfile-view"},e.prototype.regions={dropFile:"@ui.dropFile"},e.prototype.events={"click @ui.exportBtn":"exportDatabase","click @ui.deleteBtn":"deleteBtnClicked"},e}.call(void 0),e.exports=y}}]);
//# sourceMappingURL=dbadmin-view-index-84b1ab2243ec9194669b.js.map