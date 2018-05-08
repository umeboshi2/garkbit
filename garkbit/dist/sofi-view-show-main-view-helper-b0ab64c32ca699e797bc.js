(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{269:function(e,t,o){"use strict";var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,c,l,u,h,d,f,p,m,b,v,y,g=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};o(3),v=o(4),c=o(0),h=o(1),o(76),y=o(2),o(78),o(6),o(103);var w=o(95);f=w.ProgressModel,p=w.ProgressView,c.Radio.channel("global"),d=c.Radio.channel("messages"),l=(a=c.Radio.channel("sofi")).request("db:clzcomic:collectionClass"),m=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,l),t}(),u=function(){var e=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.initialize=e.initialize.bind(e),e}return s(t,h.Object),n(t,[{key:"initialize",value:function(e){return g(this,t),console.log("ComicScanner",e),this.modelName=e.modelName||"clzcomic",this.modelId=e.modelId||"comic_id",this.dbPrefix="db:"+this.modelName,this.collection=new m,this.currentItems=v.clone(e.items),this.progressModel=e.progressModel,this.progressModel.set("valuemax",this.currentItems.length),this.channel=this.getChannel(),this.on("comic:scanned",this.scanItems)}},{key:"scanItem",value:function(e){var t,o=this;return this.collection.reset(),(t=this.collection.fetch({data:{where:{comic_id:e.id}}})).fail(function(){var e;return e="There was a problem talking to the server",d.request("warning",e)}),t.done(function(){var t;return t=a.request("get-comics").get(e.id),o.collection.length?t.set("inDatabase",!0):t.set("inDatabase",!1),o.trigger("comic:scanned")})}},{key:"scanItems",value:function(){var e,t;return t=this.progressModel.get("valuemax")-this.currentItems.length,this.progressModel.set("valuenow",t),this.currentItems.length?(e=this.currentItems.pop(),this.scanItem(e)):this.trigger("scan:completed")}}]),t}();return e.prototype.channelName="sofi",e.prototype.events={"comic:scanned":"scanItems"},e}.call(void 0),b=function(){var e=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.scanCompleted=e.scanCompleted.bind(e),e}return s(t,h.View),n(t,[{key:"initialize",value:function(e){return this.comics=a.request("get-comics"),this.currentItems=this.comics.toJSON()}},{key:"showScannerProgressBar",value:function(){var e;return this.progressModel=new f,e=new p({model:this.progressModel}),this.showChildView("scanProgress",e)}},{key:"scanItems",value:function(){return this._mgr=new u({modelName:"clzcomic",items:this.currentItems,progressModel:this.progressModel,modelId:"comic_id"}),this._mgr.on("scan:completed",this.scanCompleted),this._mgr.scanItems()}},{key:"scanCompleted",value:function(){return g(this,t),console.log("SCAN COMPLETED!!!!!!!!!!!!"),delete this._mgr,this.currentItems=[],this.comicClones=void 0,this.trigger("scan:completed")}},{key:"onRender",value:function(){return this.showScannerProgressBar(),this.scanItems()}}]),t}();return e.prototype.regions={body:".body",scanProgress:".scan-progress"},e.prototype.template=y.renderable(function(e){return y.div(".listview-header",function(){return y.text("Compare CLZ XML to Database")}),y.div(".scan-progress"),y.div(".body")}),e}.call(void 0),e.exports=b},270:function(e,t,o){"use strict";var n,r,i=[].indexOf;n=o(103),r=function(e){if(e){if(i.call(e,"/")>=0){if(3===e.split("/").length)return n(e,"M/D/YYYY");throw"Couldn't parse "+e+"!",new Error("Couldn't parse "+e+"!")}return"string"==typeof e&&4===e.length?n("1/1/"+e,"M/D/YYYY"):n(e,"MMM YYYY")}return e=null},e.exports=r},271:function(e,t,o){"use strict";var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,c,l,u,h,d,f,p,m,b,v,y=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};o(3),m=o(4),c=o(0),l=o(1),o(76),v=o(2);var g=o(95);h=g.ProgressModel,d=g.ProgressView,b=o(270),c.Radio.channel("global"),u=c.Radio.channel("messages"),a=c.Radio.channel("sofi"),f=function(){var e=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.initialize=e.initialize.bind(e),e.restore_items=e.restore_items.bind(e),e.restore_items_now=e.restore_items_now.bind(e),e}return s(t,l.Object),n(t,[{key:"initialize",value:function(e){return y(this,t),this.modelName=e.modelName||"clzcomic",this.modelId=e.modelId||"comic_id",this.dbPrefix="db:"+this.modelName,this.collection=a.request(this.dbPrefix+":collection"),this.currentItems=m.clone(e.items),this.progressModel=e.progressModel,this.progressModel.set("valuemax",this.currentItems.length),this.channel=this.getChannel(),this.channel.on(this.dbPrefix+":inserted",this.restore_items_now),this.channel.on(this.dbPrefix+":updated",this.restore_items_now),console.log("channel is",this.channel)}},{key:"insert_item",value:function(e){if(this.collection.length)throw new Error("We cannot insert!!!!");return this.channel.request(this.dbPrefix+":add",e)}},{key:"update_item",value:function(e){var t;if(1!==this.collection.length)throw new Error("Not unique error!!!");return t=this.collection.models[0],this.channel.request(this.dbPrefix+":updatePassed",t,e).fail(function(){var t;return t=e.series+" "+e.issue+" id:"+e.comic_id,u.request("danger","Unable to update "+t)})}},{key:"restore_item",value:function(e){var t,o,n,r,i=this;return this.collection.reset(),(t=this.collection.fetch({data:{where:(o={},n=""+this.modelId,r=e[this.modelId],n in o?Object.defineProperty(o,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[n]=r,o)}})).fail(function(){var e;return e="There was a problem talking to the server",u.request("warning",e)}),t.done(function(){return i.collection.length>1&&u.request("warning",name+" is not unique!"),i.collection.length?i.update_item(e):i.insert_item(e)})}},{key:"restore_items",value:function(){var e,o;return y(this,t),o=this.progressModel.get("valuemax")-this.currentItems.length,this.progressModel.set("valuenow",o),this.currentItems.length?(e=this.currentItems.pop(),this.restore_item(e)):(u.request("success","Restoration Successful"),console.log("Stop Listening!!!!!!!!!!!!!!!!!!!!!!!"),this.channel.off(this.dbPrefix+":inserted"),this.channel.off(this.dbPrefix+":updated"),this.trigger("upload:completed"))}},{key:"restore_items_now",value:function(){return y(this,t),this.restore_items()}}]),t}();return e.prototype.channelName="sofi",e}.call(void 0),p=function(){var e=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.uploadCompleted=e.uploadCompleted.bind(e),e}return s(t,l.View),n(t,[{key:"initialize",value:function(e){return this.comics=a.request("get-comics")}},{key:"showUploadProgressBar",value:function(){var e;return this.uploadModel=new h,e=new d({model:this.uploadModel}),this.showChildView("uploadProgress",e)}},{key:"showCreateProgressBar",value:function(){var e;return this.createModel=new h,e=new d({model:this.createModel}),this.showChildView("createProgress",e)}},{key:"_createAttributes",value:function(e){var t,o,n,r,i,s,a;return t={comic_id:e.id,index:e.index,list_id:e.collectionstatus.$.listid,bpcomicid:e.bpcomicid,bpseriesid:e.bpseriesid,rare:!1,publisher:null!=e&&null!=(n=e.publisher)?n.displayname:void 0,releasedate:b(e.releasedate.date),seriesgroup:(null!=e&&null!=(r=e.seriesgroup)?r.displayname:void 0)||"UNGROUPED",series:e.mainsection.series.displayname,quantity:e.quantity,currentprice:e.currentpricefloat,content:e},(a=null!=e&&null!=(i=e.links)&&null!=(s=i.link)?s.url:void 0)&&(t.url=a),o=e.issue,e.issueext&&(t.issueext=e.issueext,(o=e.issue).endsWith(e.issueext)?o=o.split(e.issueext)[0]:console.warn("THIS IS BAD",o,e.issueext)),o||(o=0),t.issue=o,t}},{key:"createComicDbItem",value:function(e){var t,o=this;return t=this._createAttributes(e),this.currentItems.push(t),this.createModel.set("valuenow",this.currentItems.length),this.currentItems.length!==this.comics.length?setTimeout(function(){return o.createAnotherItem()},5):(console.log("FINISHED CREATING"),this.uploadItems())}},{key:"createAnotherItem",value:function(){var e;if(this.comicClones.length)return e=this.comicClones.pop(),this.createComicDbItem(e)}},{key:"createItems",value:function(){var e,t;return this.comics,e=m.clone(this.comics),this.comicClones=e.toJSON(),this.createModel.set("valuemax",this.comicClones.length),this.createModel.set("valuenow",0),this.currentItems=[],t=this.comicClones.pop(),this.createComicDbItem(t)}},{key:"uploadItems",value:function(){return this._mgr=new f({modelName:"clzcomic",items:this.currentItems,progressModel:this.uploadModel,modelId:"comic_id"}),this._mgr.on("upload:completed",this.uploadCompleted),this._mgr.restore_items()}},{key:"uploadCompleted",value:function(){return y(this,t),console.log("UPLOAD COMPLETED!!!!!!!!!!!!"),delete this._mgr,this.currentItems=[],this.comicClones=void 0}},{key:"onRender",value:function(){return this.showCreateProgressBar(),this.showUploadProgressBar()}},{key:"onDomRefresh",value:function(){var e=this;return console.log("onDomRefresh UploadView"),setTimeout(function(){return e.createItems()},10)}}]),t}();return e.prototype.regions={body:".body",createProgress:".create-progress",uploadProgress:".upload-progress"},e.prototype.template=v.renderable(function(e){return v.div(".listview-header",function(){return v.text("CLZ XML to EBay File Exchange CSV")}),v.div(".create-progress"),v.div(".upload-progress"),v.div(".body")}),e.prototype.events={"item:created":"create_items"},e}.call(void 0),e.exports=p},272:function(e,t,o){"use strict";var n,r,i,s;o(0),n=o(1),s=o(2),i=o(31),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.View),t}();return e.prototype.template=s.renderable(function(e){return s.article(".document-view.content.col-sm-8.col-sm-offset-2",function(){return s.div(".body",function(){return s.raw(i(e.content))})})}),e}.call(void 0),e.exports=r},273:function(e,t,o){"use strict";var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,c,l,u,h,d,f,p,m,b,v,y,g,w,_,C;o(3),o(4),c=o(0),p=o(1),o(76),_=o(2),v=o(37),o(5);var O=o(30);O.make_field_input,O.make_field_select,o(39),g=o(84).default,u=o(124),m=o(272),w=o(271),y=o(269),f=c.Radio.channel("global"),b=c.Radio.channel("messages"),a=c.Radio.channel("sofi"),d=function(){var e=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,v),t}();return e.prototype.mode="client",e}.call(void 0),l=function(){var e=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,g),n(t,[{key:"onChildviewToolbarEntryClicked",value:function(){}},{key:"somethinChanged",value:function(){return console.log("somethinChanged")}}]),t}();return e.prototype.childViewTriggers={"toolbar:entry:clicked":"toolbar:entry:clicked"},e.prototype.modelEvents={change:"somethinChanged"},e}.call(void 0),C=[{id:"main",label:"Main View",icon:".fa.fa-home"},{id:"curlist",label:"Current Comics",icon:".fa.fa-list"},{id:"scandb",label:"Scan Database for Comics",icon:".fa.fa-search.fa-spin"},{id:"upload",label:"Upload Comics",icon:".fa.fa-upload"}],h=function(){var e=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.showLocalList=e.showLocalList.bind(e),e}return s(t,p.View),n(t,[{key:"_updateLocalComicsButton",value:function(){var e;return e=a.request("get-comics").length+" Local Comics",this.toolbarEntries.get("curlist").set("label",e)}},{key:"showToolbar",value:function(){var e;return this.toolbarEntries=new c.Collection(C),e=new l({collection:this.toolbarEntries}),this.showChildView("toolbar",e)}},{key:"showMainDoc",value:function(){var e,t,o=this;return(t=(e=f.request("main:app:get-document","sofi-main")).fetch()).done(function(){var t;return t=new m({model:e}),o.showChildView("body",t)}),t.fail(function(){return b.request("danger","failed to get document")})}},{key:"showLocalList",value:function(){var e,o,n;return function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),o=a.request("get-comics"),e=new d(o.toJSON()),n=new u({collection:e}),this.showChildView("body",n)}},{key:"showUploadView",value:function(){var e;return e=new w,this.showChildView("body",e)}},{key:"showScannerView",value:function(){var e;return(e=new y).on("scan:completed",this.showLocalList),this.showChildView("body",e)}},{key:"onRender",value:function(){return a.request("get-comics").length&&this.showToolbar(),this.showMainDoc()}},{key:"onChildviewToolbarEntryClicked",value:function(e){var t;return this._updateLocalComicsButton(),"curlist"===(t=e.model.id)?this.showLocalList():"main"===t?this.showMainDoc():"scandb"===t?this.showScannerView():"upload"===t?this.showUploadView():b.request("danger","No good, dude.")}}]),t}();return e.prototype.regions={toolbar:".toolbar",body:".body"},e.prototype.template=_.renderable(function(e){return _.div(".listview-header",function(){return _.text("CLZ XML to EBay File Exchange CSV")}),_.div(".toolbar"),_.div(".body")}),e}.call(void 0),e.exports=h},95:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProgressView=t.ProgressModel=void 0;var n,r,i=c(o(0)),s=c(o(1)),a=c(o(2));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.ProgressModel=n=function(){var e=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,i.default.Model),t}();return e.prototype.defaults={valuemin:0,valuemax:100,valuenow:0},e}.call(void 0),t.ProgressView=r=function(){var e=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,s.default.View),t}();return e.prototype.template=a.default.renderable(function(e){return a.default.div(".progress",function(){var t;return{valuemin:e.valuemin,valuemax:e.valuemax,valuenow:e.valuenow},t=Math.floor(e.valuenow/e.valuemax*100+.5),a.default.div(".progress-bar.progress-bar-striped",{role:"progressbar",style:"width: "+t+"%"},function(){return a.default.span({style:"color:black;"},e.valuenow+" of "+e.valuemax+".")})})}),e.prototype.modelEvents={change:"render"},e}.call(void 0),t.ProgressModel=n,t.ProgressView=r}}]);
//# sourceMappingURL=sofi-view-show-main-view-helper-b0ab64c32ca699e797bc.js.map