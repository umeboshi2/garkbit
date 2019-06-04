(self.webpackJsonp=self.webpackJsonp||[]).push([[44],{435:function(t,e,n){"use strict";var o=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s,p,l,d,i,c,f,b,h,v,y;n(4),s=n(1),b=n(2),y=n(3),i=n(86),n(87),l=n(192),n(49).default,c=s.Radio.channel("global"),h=s.Radio.channel("messages"),s.Radio.channel("ebcsv"),y.renderable(function(t){return y.div(".listview-list-entry",function(){return y.h2(t.name),y.div(".btn-group",function(){return y.button(".view.btn.btn-success",{type:"button"},"View"),y.button(".export.btn.btn-primary",{type:"button"},"Export"),y.button(".import.btn.btn-info",{type:"button"},"Import")}),y.div(".dbview")})}),v=y.renderable(function(t){return y.div(".card",function(){return y.div(".card-header",function(){return y.h2(t.name)}),y.div(".card-body",function(){return y.div(".file-status",function(){return y.text("Drop a .json exported database to import.")}),y.button(".view.btn.btn-success",{type:"button"},"View"),y.button(".export.btn.btn-primary",{type:"button"},"Export"),y.div(".import.btn.btn-info",{type:"button",style:"display:none"},function(){return y.text("Import Database")}),y.input(".db-file-input.input",{type:"file"}),y.button(".import-chosen.btn.btn-info",{style:"display:none"},function(){return y.text("Import input file")}),y.div(".dbview")})})}),p=function(){var t=function(t){function e(){return r(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return u(e,b.View),o(e,[{key:"onDomRefresh",value:function(){var t;return t=this.model.toJSON(),this.jsonView=new i(t),this.ui.body.prepend(this.jsonView.dom)}}]),e}();return t.prototype.template=y.renderable(function(t){return y.div(function(){return y.div(".body")})}),t.prototype.ui={body:".body"},t}.call(void 0),d=function(){var t=function(t){function i(){r(this,i);var t=a(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments));return t.fileReaderOnLoad=t.fileReaderOnLoad.bind(t),t}return u(i,b.View),o(i,[{key:"fileInputClicked",value:function(t){return this.ui.fileInput.val(null),this.ui.importChosenButton.hide()}},{key:"fileInputChanged",value:function(t){return this.ui.importChosenButton.show()}},{key:"handleDrop",value:function(t){var e,n;return t.preventDefault(),this.$el.css("border","0px"),e=t.originalEvent.dataTransfer.files[0],n="File: "+(this.droppedFile=e).name,this.ui.fileStatus.text(n),this.ui.importButton.show()}},{key:"handleDragOver",value:function(t){return t.preventDefault(),t.stopPropagation()}},{key:"handleDragEnter",value:function(t){return t.stopPropagation(),t.preventDefault(),this.$el.css("border","2px dotted")}},{key:"handleDragExit",value:function(t){return t.stopPropagation(),t.preventDefault(),this.$el.css("border","0px")}},{key:"_exportDatabase",value:function(){return this.model.get("conn").export()}},{key:"viewDatabase",value:function(){var n=this;return this._exportDatabase().then(function(t){var e;return e=new p({model:new s.Model({data:t})}),n.showChildView("dbView",e),n.ui.viewButton.hide()})}},{key:"exportDatabase",value:function(){var o=this;return this._exportDatabase().then(function(t){var e,n,i;return n=o.model.get("name"),i={type:"data:text/json;charset=utf-8",data:JSON.stringify(t),filename:n+"-idb.json"},e=new Blob([i.data],{type:i.type}),l.saveAs(e,i.filename),h.request("primary","Exported Database "+n)})}},{key:"fileReaderOnLoad",value:function(t){var e,n=this;return function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")}(this,i),e=JSON.parse(t.target.result),this.ui.fileStatus.text("Database file loaded, now importing...."),this.model.get("conn").import(e).then(function(){return n.viewDatabase()})}},{key:"importDatabase",value:function(){var t;return h.request("info","Import Database "+this.model.get("name")),this.ui.fileStatus.text("Reading dabase file....."),(t=new FileReader).onload=this.fileReaderOnLoad,t.readAsText(this.droppedFile),this.ui.importButton.hide()}}]),i}();return t.prototype.template=v,t.prototype.ui={viewButton:".view",exportButton:".export",importButton:".import",dbView:".dbview",fileInput:".db-file-input",importChosenButton:".import-chosen",fileStatus:".file-status"},t.prototype.regions={dbView:"@ui.dbView"},t.prototype.events={dragover:"handleDragOver",dragenter:"handleDragEnter",dragexit:"handleDragExit",drop:"handleDrop","click @ui.viewButton":"viewDatabase","click @ui.exportButton":"exportDatabase","click @ui.importButton":"importDatabase","click @ui.importChosenButton":"importChosenFile","click @ui.fileInput":"fileInputClicked","change @ui.fileInput":"fileInputChanged"},t}.call(void 0),f=function(){var t=function(t){function e(){return r(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return u(e,b.View),o(e,[{key:"onRender",value:function(){var t,e,n,i=this;return t=c.request("main:app:object"),e=t.getState("dbConn"),this.collection=new s.Collection,n=new b.CollectionView({collection:this.collection,childView:d}),this.showChildView("body",n),Object.keys(e).forEach(function(t){return i.collection.add({id:t,name:t,conn:e[t]})})}}]),e}();return t.prototype.regions={body:".body"},t.prototype.template=y.renderable(function(t){return y.div(".listview-header",function(){return y.text("Indexed Database Admin")}),y.div(".body")}),t}.call(void 0),t.exports=f}}]);
//# sourceMappingURL=frontdoor-view-dbadmin-83dd1f138a74d611b08c.js.map