(self.webpackJsonp=self.webpackJsonp||[]).push([[32],{466:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,s,l,p,d,c,f,h,b,v,g,y,m,w,_,k,x=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};s=n(1),g=n(2),_=n(3),n(32),h=n(94),n(95),c=n(168),m=n(227),n(5).navigate_to_url,b=s.Radio.channel("global"),y=s.Radio.channel("messages"),s.Radio.channel("dbadmin"),u=b.request("main:app:AuthModel"),b.request("main:app:AuthCollection"),d=function(){var e=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,u),t}();return e.prototype.url="/api/dev/dbadmin/export-models",e}.call(void 0),f=function(){var e=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,u),t}();return e.prototype.url="/api/dev/dbadmin/import-models",e}.call(void 0),l=function(){var e=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,u),t}();return e.prototype.url="/api/dev/dbadmin/delete-models",e}.call(void 0),w=_.renderable(function(e){return _.div(".dropzone.card",function(){return _.div(".card-header",function(){return _.text("drop a dump of the database to upload")}),_.div(".card-body",function(){return _.div(".parse-btn.btn.btn-primary",{style:"display:none"},function(){return _.text("upload dropped data dump")}),_.input(".file-input.input.btn.btn-success",{type:"file"}),_.span(".parse-chosen-btn.btn.btn-primary",{style:"display:none"},function(){return _.text("Parse dropped meetings")})})})}),p=function(){var e=function(e){function t(){i(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.successfulParse=e.successfulParse.bind(e),e.fileReaderOnLoad=e.fileReaderOnLoad.bind(e),e}return a(t,g.View),r(t,[{key:"fileInputClicked",value:function(e){return console.log("file_input_clicked",e),this.ui.fileInput.val(null),this.ui.chosenBtn.hide()}},{key:"fileInputChanged",value:function(e){return console.log("file_input_changed",e),this.ui.chosenBtn.show()}},{key:"handleDrop",value:function(e){var t;return e.preventDefault(),this.ui.dropzone.css("border","0px"),t=e.originalEvent.dataTransfer.files[0],this.ui.statusMsg.text("File: "+t.name),this.droppedFile=t,this.ui.parseBtn.show()}},{key:"handleDragOver",value:function(e){return e.preventDefault(),e.stopPropagation()}},{key:"handleDragEnter",value:function(e){return e.stopPropagation(),e.preventDefault(),this.ui.dropzone.css("border","2px dotted")}},{key:"successfulParse",value:function(){return x(this,t),this.ui.statusMsg.text("Parse Successful"),y.request("success","successfulParse")}},{key:"fileReaderOnLoad",value:function(e){var n,r,i,o,a=this;return x(this,t),n=e.target.result,r=e.target.fileObject.name,this.ui.statusMsg.text("Retrieved file content of "+r),o=(i=new f({content:btoa(n)})).save(),this.ui.statusMsg.text("Uploaded "+r+"."),o.fail(function(){return y.request("warning","failed to save model")}),o.done(function(){return console.log("MODEL",i),i.get("data"),i.get("output"),y.request("success","Finished import"),a.ui.statusMsg.text("Finished import")})}},{key:"readFile",value:function(e){var t;return(t=new FileReader).onload=this.fileReaderOnLoad,t.fileObject=e,t.readAsBinaryString(e)}},{key:"handleChosenFile",value:function(){var e,t;return t=this.ui.fileInput.val(),this.ui.statusMsg.text("Reading chosen file...("+t+")"),e=this.ui.fileInput[0].files[0],this.ui.parseBtn.hide(),this.readFile(e)}},{key:"handleDroppedFile",value:function(){return this.ui.statusMsg.text("Reading dropped file... ("+this.droppedFile.name+")"),this.ui.parseBtn.hide(),this.readFile(this.droppedFile)}}]),t}();return e.prototype.template=w,e.prototype.ui={fileInput:".file-input",parseBtn:".parse-btn",chosenBtn:".parse-chosen-btn",dropzone:".dropzone",statusMsg:".card-header"},e.prototype.events={"dragover @ui.dropzone":"handleDragOver","dragenter @ui.dropzone":"handleDragEnter","drop @ui.dropzone":"handleDrop","click @ui.fileInput":"fileInputClicked","change @ui.fileInput":"fileInputChanged","click @ui.parseBtn":"handleDroppedFile","click @ui.chosenBtn":"handleChosenFile"},e}.call(void 0),k=_.renderable(function(e){return _.div(".row.listview-header","Garkbit Dbadmin"),_.button(".delete-btn.btn.btn-danger","Delete"),_.button(".export-btn.btn.btn-info","Export"),_.div(".row.status-message"),_.div(".row.dropfile-view")}),v=function(){var e=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,g.View),r(t,[{key:"onRender",value:function(){var e;return e=new p,this.showChildView("dropFile",e)}},{key:"deleteBtnClicked",value:function(){var e;return console.log("deleteBtnClicked"),(e=new l).fetch().done(function(){return y.request("success",e.get("result"))})}},{key:"exportDatabase",value:function(){var e,t=this;return this.ui.statusMsg.text("Exporting database..."),(e=new d).fetch().done(function(){var n,r;return"production",r={filename:"dbdump-production-"+e.get("sha256sum").slice(0,5)+".json.xz",type:"application/octet-stream",data:e.get("content")},n=m(r.data,r.type),console.log("BLOB",n),c.saveAs(n,r.filename),y.request("success","Exported database...."),t.ui.statusMsg.text("")})}},{key:"IgnoreonDomRefresh",value:function(){return this.jsonView=new h(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),t}();return e.prototype.template=k,e.prototype.templateContext={appName:"dbadmin"},e.prototype.ui={exportBtn:".export-btn",deleteBtn:".delete-btn",statusMsg:".status-message",dropFile:".dropfile-view"},e.prototype.regions={dropFile:"@ui.dropFile"},e.prototype.events={"click @ui.exportBtn":"exportDatabase","click @ui.deleteBtn":"deleteBtnClicked"},e}.call(void 0),e.exports=v}}]);
//# sourceMappingURL=dbadmin-view-index-711da8d131abee61952f.js.map