(self.webpackJsonp=self.webpackJsonp||[]).push([[68],{537:function(e,t,o){"use strict";var n=function(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),e};function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,p,c,s,d,f,h,m,y,v,g,b,w=[].indexOf;p=o(1),d=o(2),b=o(3),o(153),o(154),s=p.Radio.channel("global"),p.Radio.channel("messages"),a=p.Radio.channel("sofi"),o(35),o(5),o(33).form_group_input_div;var _=o(33);_.make_field_input,_.make_field_select,g=o(538),m=function(){var e=(u(t,d.View),n(t,[{key:"deleteClicked",value:function(){var e,t,o=this;return this.ui.deleteButton,window.deleteButton=this.ui.deleteButton,t="/api/dev/misc/delete-photo/"+this.model.id,console.log("URL",t),console.log("MODEL",this.model),(e=new(s.request("main:app:AuthModel"))({id:this.model.id})).urlRoot="/api/dev/misc/delete-photo/",e.destroy().done(function(){return console.log("done!",o.model.collection.remove(o.model))})}}]),t);function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=b.renderable(function(e){return b.div(".col-sm-2",function(){return b.div(".listview-header",e.name),b.div(".listview-list-entry",function(){return b.img(".img-responsive.img-thumbnail",{src:"/thumbs/"+e.filename}),b.button(".delete-btn.btn.btn-default",{data:{photoid:e.id}},"Delete")})})}),e.prototype.ui={deleteButton:".delete-btn"},e.prototype.events={"click @ui.deleteButton":"deleteClicked"},e}.call(void 0),h=function(){var e=(u(t,d.NextCollectionView),t);function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.childView=m,e}.call(void 0),y=function(){var e=(u(t,d.View),n(t,[{key:"onRender",value:function(){var e,t;return e=new p.Collection(this.model.get("photos")),t=new h({collection:e}),this.showChildView("body",t)}}]),t);function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=b.renderable(function(e){return b.div(".body.row")}),e.prototype.ui={body:".body",deleteButton:".delete-btn"},e.prototype.regions={body:"@ui.body"},e}.call(void 0),c=function(){var e=(u(t,d.View),n(t,[{key:"onDomRefresh",value:function(){var e,t=this;return e=this.model.get("comic_id"),this.ui.fileinput.fileinput({uploadUrl:"/api/dev/misc/upload-photo",uploadExtraData:{comic_id:e,name:this.getOption("photoName")},allowedFileTypes:["image"],allowedFileExtensions:["jpg","jpeg","png"],ajaxSettings:{beforeSend:s.request("main:app:authBeforeSend")}}).on("fileunlock",function(){return t.model.fetch().done(function(){return t.trigger("photo:uploaded")})})}},{key:"onBeforeDestroy",value:function(){return this.ui.fileinput.fileinput("destroy")}}]),t);function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=b.renderable(function(e){return b.input(".fileinput",{name:"comicphoto",type:"file"})}),e.prototype.ui={fileinput:".fileinput"},e}.call(void 0),f=function(){var e=(u(t,d.View),t);function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=b.renderable(function(l){return b.div(".form-group",function(){return b.label(".control-label",{for:"select_name"},"Name")}),b.select(".form-control",{name:"select_name"},function(){var e,t,o,n,i,r;for(r=[],e=0,n=(i=l.items).length;e<n;e++)o={value:(t=i[e]).name},"front"===t.name&&(o.selected=""),r.push(b.option(o,t.name));return r})}),e.prototype.ui={nameSelect:'select[name="select_name"]'},e.prototype.triggers={"change @ui.nameSelect":"name:changed"},e}.call(void 0),v=function(){var e=(u(t,d.View),n(t,[{key:"photoUploaded",value:function(){return this.showPhotoList(),this.getRegion("fileInputRegion").empty()}},{key:"showPhotoList",value:function(){var e;return e=new y({model:this.model}),this.showChildView("photoList",e)}},{key:"nameChanged",value:function(){var e,t,o;return e=this.getChildView("nameSelectRegion").ui.nameSelect.val(),console.log("nameChanged",e),this.model.toJSON(),t=g(this.model.toJSON()),e&&w.call(Object.keys(t),e)<0?(o=new c({model:this.model,photoName:e}),this.showChildView("fileInputRegion",o)):this.getRegion("fileInputRegion").empty()}},{key:"onRender",value:function(){var t,o=this;return(t=a.request("db:comicphotoname:collection")).fetch().done(function(){var e;return e=new f({collection:t}),o.showChildView("nameSelectRegion",e),o.showPhotoList()})}}]),t);function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=b.renderable(function(e){return b.div(".listview-header",function(){return b.text("Upload Photos for "+e.series+" #"+e.issue)}),b.div(".row",function(){return b.div(".col-sm-4",function(){return b.div(".name-select"),b.div(".file-div")}),b.div(".col-sm-8",function(){return b.div(".photo-list")})})}),e.prototype.ui={fileinput:".fileinput",photoList:".photo-list",fileInputRegion:".file-div",nameSelectRegion:".name-select"},e.prototype.regions={photoList:"@ui.photoList",fileInputRegion:"@ui.fileInputRegion",nameSelectRegion:"@ui.nameSelectRegion"},e.prototype.childViewEvents={"photo:uploaded":"photoUploaded","name:changed":"nameChanged"},e}.call(void 0),e.exports=v},538:function(e,t,o){"use strict";e.exports=function(e){var t;return t={},e.photos.forEach(function(e){return t[e.name]=e.filename}),t}}}]);
//# sourceMappingURL=sofi-manage-comic-photos-view-5e83e597b458c5907d52.js.map