(self.webpackJsonp=self.webpackJsonp||[]).push([[76],{130:function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},363:function(t,e){(function(e){t.exports=e}).call(this,{})},364:function(t,e,n){var o,r=r||function(t){"use strict";if(!(void 0===t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=function(){return t.URL||t.webkitURL||t},n=t.document.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in n,r=/constructor/i.test(t.HTMLElement)||t.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent),a=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},u=function(t){setTimeout(function(){"string"==typeof t?e().revokeObjectURL(t):t.remove()},4e4)},s=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},l=function(l,c,p){p||(l=s(l));var d,f=this,b="application/octet-stream"===l.type,h=function(){!function(t,e,n){for(var o=(e=[].concat(e)).length;o--;){var r=t["on"+e[o]];if("function"==typeof r)try{r.call(t,n||t)}catch(t){a(t)}}}(f,"writestart progress write writeend".split(" "))};if(f.readyState=f.INIT,o)return d=e().createObjectURL(l),void setTimeout(function(){var t,e;n.href=d,n.download=c,t=n,e=new MouseEvent("click"),t.dispatchEvent(e),h(),u(d),f.readyState=f.DONE});!function(){if((i||b&&r)&&t.FileReader){var n=new FileReader;return n.onloadend=function(){var e=i?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(e,"_blank")||(t.location.href=e),e=void 0,f.readyState=f.DONE,h()},n.readAsDataURL(l),void(f.readyState=f.INIT)}d||(d=e().createObjectURL(l)),b?t.location.href=d:t.open(d,"_blank")||(t.location.href=d);f.readyState=f.DONE,h(),u(d)}()},c=l.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=s(t)),navigator.msSaveOrOpenBlob(t,e)}:(c.abort=function(){},c.readyState=c.INIT=0,c.WRITING=1,c.DONE=2,c.error=c.onwritestart=c.onprogress=c.onwrite=c.onabort=c.onerror=c.onwriteend=null,function(t,e,n){return new l(t,e||t.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */void 0!==t&&t.exports?t.exports.saveAs=r:null!==n(130)&&null!==n(363)&&(void 0===(o=function(){return r}.call(e,n,e,t))||(t.exports=o))},365:function(t,e,n){"use strict";var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u,s,l,c,p,d,f,b,h,v,y;n(4),u=n(1),b=n(2),y=n(3),p=n(100),n(99),l=n(364),n(44).default,d=u.Radio.channel("global"),h=u.Radio.channel("messages"),u.Radio.channel("ebcsv"),y.renderable(function(t){return y.div(".listview-list-entry",function(){return y.h2(t.name),y.div(".btn-group",function(){return y.button(".view.btn.btn-success",{type:"button"},"View"),y.button(".export.btn.btn-primary",{type:"button"},"Export"),y.button(".import.btn.btn-info",{type:"button"},"Import")}),y.div(".dbview")})}),v=y.renderable(function(t){return y.div(".card",function(){return y.div(".card-header",function(){return y.h2(t.name)}),y.div(".card-body",function(){return y.div(".file-status",function(){return y.text("Drop a .json exported database to import.")}),y.button(".view.btn.btn-success",{type:"button"},"View"),y.button(".export.btn.btn-primary",{type:"button"},"Export"),y.div(".import.btn.btn-info",{type:"button",style:"display:none"},function(){return y.text("Import Database")}),y.input(".db-file-input.input",{type:"file"}),y.button(".import-chosen.btn.btn-info",{style:"display:none"},function(){return y.text("Import input file")}),y.div(".dbview")})})}),s=function(){var t=function(t){function e(){return r(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,b.View),o(e,[{key:"onDomRefresh",value:function(){var t;return t=this.model.toJSON(),this.jsonView=new p(t),this.ui.body.prepend(this.jsonView.dom)}}]),e}();return t.prototype.template=y.renderable(function(t){return y.div(function(){return y.div(".body")})}),t.prototype.ui={body:".body"},t}.call(void 0),c=function(){var t=function(t){function e(){r(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.fileReaderOnLoad=t.fileReaderOnLoad.bind(t),t}return a(e,b.View),o(e,[{key:"fileInputClicked",value:function(t){return this.ui.fileInput.val(null),this.ui.importChosenButton.hide()}},{key:"fileInputChanged",value:function(t){return this.ui.importChosenButton.show()}},{key:"handleDrop",value:function(t){var e,n;return t.preventDefault(),this.$el.css("border","0px"),e=t.originalEvent.dataTransfer.files[0],this.droppedFile=e,n="File: "+e.name,this.ui.fileStatus.text(n),this.ui.importButton.show()}},{key:"handleDragOver",value:function(t){return t.preventDefault(),t.stopPropagation()}},{key:"handleDragEnter",value:function(t){return t.stopPropagation(),t.preventDefault(),this.$el.css("border","2px dotted")}},{key:"handleDragExit",value:function(t){return t.stopPropagation(),t.preventDefault(),this.$el.css("border","0px")}},{key:"_exportDatabase",value:function(){return this.model.get("conn").export()}},{key:"viewDatabase",value:function(){var t=this;return this._exportDatabase().then(function(e){var n;return n=new s({model:new u.Model({data:e})}),t.showChildView("dbView",n),t.ui.viewButton.hide()})}},{key:"exportDatabase",value:function(){var t=this;return this._exportDatabase().then(function(e){var n,o,r;return o=t.model.get("name"),r={type:"data:text/json;charset=utf-8",data:JSON.stringify(e),filename:o+"-idb.json"},n=new Blob([r.data],{type:r.type}),l.saveAs(n,r.filename),h.request("primary","Exported Database "+o)})}},{key:"fileReaderOnLoad",value:function(t){var n,o=this;return function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")}(this,e),n=JSON.parse(t.target.result),this.ui.fileStatus.text("Database file loaded, now importing...."),this.model.get("conn").import(n).then(function(){return o.viewDatabase()})}},{key:"importDatabase",value:function(){var t;return h.request("info","Import Database "+this.model.get("name")),this.ui.fileStatus.text("Reading dabase file....."),(t=new FileReader).onload=this.fileReaderOnLoad,t.readAsText(this.droppedFile),this.ui.importButton.hide()}}]),e}();return t.prototype.template=v,t.prototype.ui={viewButton:".view",exportButton:".export",importButton:".import",dbView:".dbview",fileInput:".db-file-input",importChosenButton:".import-chosen",fileStatus:".file-status"},t.prototype.regions={dbView:"@ui.dbView"},t.prototype.events={dragover:"handleDragOver",dragenter:"handleDragEnter",dragexit:"handleDragExit",drop:"handleDrop","click @ui.viewButton":"viewDatabase","click @ui.exportButton":"exportDatabase","click @ui.importButton":"importDatabase","click @ui.importChosenButton":"importChosenFile","click @ui.fileInput":"fileInputClicked","change @ui.fileInput":"fileInputChanged"},t}.call(void 0),f=function(){var t=function(t){function e(){return r(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,u.Marionette.View),o(e,[{key:"onRender",value:function(){var t,e,n,o=this;return t=d.request("main:app:object"),e=t.getState("dbConn"),this.collection=new u.Collection,n=new b.CollectionView({collection:this.collection,childView:c}),this.showChildView("body",n),Object.keys(e).forEach(function(t){return o.collection.add({id:t,name:t,conn:e[t]})})}}]),e}();return t.prototype.regions={body:".body"},t.prototype.template=y.renderable(function(t){return y.div(".listview-header",function(){return y.text("Indexed Database Admin")}),y.div(".body")}),t}.call(void 0),t.exports=f}}]);
//# sourceMappingURL=frontdoor-view-dbadmin-ec643ecc50a21cb1aff3.js.map