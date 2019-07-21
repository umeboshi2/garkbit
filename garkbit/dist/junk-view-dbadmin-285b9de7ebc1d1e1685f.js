(self.webpackJsonp=self.webpackJsonp||[]).push([[46],{517:function(t,e,n){"use strict";var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u,s,p,l,d,c,f,b,h,v,y;n(4),u=n(1),b=n(2),y=n(3),d=n(95),n(96),p=n(138),n(34).default,c=u.Radio.channel("global"),h=u.Radio.channel("messages"),u.Radio.channel("ebcsv"),y.renderable(function(t){return y.div(".listview-list-entry",function(){return y.h2(t.name),y.div(".btn-group",function(){return y.button(".view.btn.btn-success",{type:"button"},"View"),y.button(".export.btn.btn-primary",{type:"button"},"Export"),y.button(".import.btn.btn-info",{type:"button"},"Import")}),y.div(".dbview")})}),v=y.renderable(function(t){return y.div(".card",function(){return y.div(".card-header",function(){return y.h2(t.name)}),y.div(".card-body",function(){return y.div(".file-status",function(){return y.text("Drop a .json exported database to import.")}),y.button(".view.btn.btn-success",{type:"button"},"View"),y.button(".export.btn.btn-primary",{type:"button"},"Export"),y.div(".import.btn.btn-info",{type:"button",style:"display:none"},function(){return y.text("Import Database")}),y.input(".db-file-input.input",{type:"file"}),y.button(".import-chosen.btn.btn-info",{style:"display:none"},function(){return y.text("Import input file")}),y.div(".dbview")})})}),s=function(){var t=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,b.View),i(e,[{key:"onDomRefresh",value:function(){var t;return t=this.model.toJSON(),this.jsonView=new d(t),this.ui.body.prepend(this.jsonView.dom)}}]),e}();return t.prototype.template=y.renderable(function(t){return y.div(function(){return y.div(".body")})}),t.prototype.ui={body:".body"},t}.call(void 0),l=function(){var t=function(t){function e(){o(this,e);var t=r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.fileReaderOnLoad=t.fileReaderOnLoad.bind(t),t}return a(e,b.View),i(e,[{key:"fileInputClicked",value:function(t){return this.ui.fileInput.val(null),this.ui.importChosenButton.hide()}},{key:"fileInputChanged",value:function(t){return this.ui.importChosenButton.show()}},{key:"handleDrop",value:function(t){var e,n;return t.preventDefault(),this.$el.css("border","0px"),e=t.originalEvent.dataTransfer.files[0],this.droppedFile=e,n="File: "+e.name,this.ui.fileStatus.text(n),this.ui.importButton.show()}},{key:"handleDragOver",value:function(t){return t.preventDefault(),t.stopPropagation()}},{key:"handleDragEnter",value:function(t){return t.stopPropagation(),t.preventDefault(),this.$el.css("border","2px dotted")}},{key:"handleDragExit",value:function(t){return t.stopPropagation(),t.preventDefault(),this.$el.css("border","0px")}},{key:"_exportDatabase",value:function(){return this.model.get("conn").export()}},{key:"viewDatabase",value:function(){var t=this;return this._exportDatabase().then(function(e){var n;return n=new s({model:new u.Model({data:e})}),t.showChildView("dbView",n),t.ui.viewButton.hide()})}},{key:"exportDatabase",value:function(){var t=this;return this._exportDatabase().then(function(e){var n,i,o;return i=t.model.get("name"),o={type:"data:text/json;charset=utf-8",data:JSON.stringify(e),filename:i+"-idb.json"},n=new Blob([o.data],{type:o.type}),p.saveAs(n,o.filename),h.request("primary","Exported Database "+i)})}},{key:"fileReaderOnLoad",value:function(t){var n,i=this;return function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")}(this,e),n=JSON.parse(t.target.result),this.ui.fileStatus.text("Database file loaded, now importing...."),this.model.get("conn").import(n).then(function(){return i.viewDatabase()})}},{key:"importDatabase",value:function(){var t;return h.request("info","Import Database "+this.model.get("name")),this.ui.fileStatus.text("Reading dabase file....."),(t=new FileReader).onload=this.fileReaderOnLoad,t.readAsText(this.droppedFile),this.ui.importButton.hide()}}]),e}();return t.prototype.template=v,t.prototype.ui={viewButton:".view",exportButton:".export",importButton:".import",dbView:".dbview",fileInput:".db-file-input",importChosenButton:".import-chosen",fileStatus:".file-status"},t.prototype.regions={dbView:"@ui.dbView"},t.prototype.events={dragover:"handleDragOver",dragenter:"handleDragEnter",dragexit:"handleDragExit",drop:"handleDrop","click @ui.viewButton":"viewDatabase","click @ui.exportButton":"exportDatabase","click @ui.importButton":"importDatabase","click @ui.importChosenButton":"importChosenFile","click @ui.fileInput":"fileInputClicked","change @ui.fileInput":"fileInputChanged"},t}.call(void 0),f=function(){var t=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,b.View),i(e,[{key:"onRender",value:function(){var t,e,n,i=this;return t=c.request("main:app:object"),e=t.dbConn,this.collection=new u.Collection,n=new b.CollectionView({collection:this.collection,childView:l}),this.showChildView("body",n),Object.keys(e).forEach(function(t){return i.collection.add({id:t,name:t,conn:e[t]})})}}]),e}();return t.prototype.regions={body:".body"},t.prototype.template=y.renderable(function(t){return y.div(".listview-header",function(){return y.text("Indexed Database Admin")}),y.div(".body")}),t}.call(void 0),t.exports=f}}]);
//# sourceMappingURL=junk-view-dbadmin-285b9de7ebc1d1e1685f.js.map