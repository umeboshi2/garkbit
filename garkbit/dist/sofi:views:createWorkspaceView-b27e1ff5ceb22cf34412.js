(self.webpackJsonp=self.webpackJsonp||[]).push([[51],{266:function(e,t,o){"use strict";var r,n,i,c,a,s,l,u,d,p,h,f,w,y=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o(4),n=o(1),u=o(2),o(81),w=o(3),o(83),o(118),o(5),i=o(102),a=o(182),s=o(90),n.Radio.channel("global"),n.Radio.channel("messages"),r=n.Radio.channel("sofi"),h=w.renderable(function(e){return w.div("default_entry_template")}),r.request("dbComicColumns"),f={asc:"ascending",desc:"descending"},c=function(){var e=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,u.NextCollectionView),t}();return e.prototype.childView=i,e.prototype.childViewOptions={workspaceView:"add"},e.prototype.childViewTriggers={"workspace:add:comic":"workspace:add:comic"},e}.call(void 0),d=r.request("db:unattached:collectionClass"),p=function(){var e=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,u.View),y(t,[{key:"updateHeader",value:function(){var e,t,o;return null!==(o=(t=this.collection.state).totalRecords)?(e=(e="Page "+(t.currentPage+1)+" of "+t.totalPages+", "+f[t.sortDirection])+" pages, with "+o+" comics total.",this.triggerMethod("set:header",e)):(e="No comics in workspace",this.triggerMethod("set:header",e))}},{key:"onRender",value:function(){var e,t=this;return e=this.options.entryTemplate||h,this.collectionView=new c({collection:this.collection,entryTemplate:e}),this.showChildView("entries",this.collectionView),this.updateHeader(),this.collection.on("pageable:state:change",function(){return t.updateHeader()})}},{key:"onBeforeDestroy",value:function(){return this.collection.off("pageable:state:change")}}]),t}();return e.prototype.behaviors=[s],e.prototype.ui={header:".listview-header",entries:".dbcomics-entries"},e.prototype.regions={entries:"@ui.entries"},e.prototype.template=w.renderable(function(e){return w.div(".listview-header"),w.div(".dbcomics-entries.row")}),e.prototype.childViewTriggers={"workspace:add:comic":"workspace:add:comic"},e}.call(void 0),l=function(){var e=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,u.View),y(t,[{key:"templateContext",value:function(){return{workspace:this.getOption("workspace")}}},{key:"showSidebar",value:function(e){var t;return t=new a({collection:e,workspaceSidebar:!0}),this.showChildView("sidebar",t)}},{key:"showBody",value:function(e){var t;return t=new p({collection:e}),this.showChildView("body",t)}},{key:"onRender",value:function(){return this.renderView()}},{key:"renderView",value:function(){var e,t=this;return d=r.request("db:unattached:collectionClass"),(e=new d).fetch().done(function(){return t.showSidebar(e),t.showBody(e)}),this.collection=e}},{key:"onWorkspaceAddComic",value:function(e){var t,o,n,i,c=this;return i=this.getOption("workspace"),console.log("MODEL",e),o=e.get("comic_id"),console.log("handle onWorkspaceAddComic",i,o),(t=r.request("db:ebcomicworkspace:collection")).on("add",function(){return c.collection.fetch(),t.off("add")}),n={comic_id:o,name:i},t.create(n,{wait:!0})}}]),t}();return e.prototype.template=w.renderable(function(e){return w.div(".listview-header",function(){return w.text("Create workspace "+e.workspace)}),w.div(".row",function(){return w.div(".sidebar.col-sm-4",{style:"height: calc(100% - 50px);"}),w.div(".body.col-sm-8"),w.div(".body")})}),e.prototype.ui={body:".body",sidebar:".sidebar"},e.prototype.regions={body:"@ui.body",sidebar:"@ui.sidebar"},e.prototype.childViewEvents={"workspace:add:comic":"onWorkspaceAddComic","workspace:changed":"onWorkspaceChanged"},e}.call(void 0),e.exports=l}}]);
//# sourceMappingURL=sofi:views:createWorkspaceView-b27e1ff5ceb22cf34412.js.map