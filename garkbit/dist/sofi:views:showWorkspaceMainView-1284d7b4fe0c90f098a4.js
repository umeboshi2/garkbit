(self.webpackJsonp=self.webpackJsonp||[]).push([[81],{539:function(e,t,n){"use strict";var r,o,i,a,c,u,p,s,d,l=function(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e};function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(4),o=n(1),c=n(2),n(83),s=n(3),n(85),n(128),p=n(5),i=n(107),n(97),o.Radio.channel("global"),o.Radio.channel("messages"),r=o.Radio.channel("sofi"),s.renderable(function(e){return s.div("default_entry_template")}),r.request("dbComicColumns"),function(){var e=(h(t,c.NextCollectionView),t);function t(){return w(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.childView=i,e.prototype.childViewOptions={workspaceView:!0},e.prototype.childViewTriggers={"workspace:add:comic":"workspace:add:comic"},e}.call(void 0),d=new(r.request("db:unattached:collectionClass")),window.uc=d,u=function(){var e=(h(t,c.View),l(t,[{key:"initialize",value:function(e){return e||{}}},{key:"createNewWorkspace",value:function(){var e;if(e=this.ui.workspace_input.val())return p("#sofi/comics/workspace/create/"+e)}},{key:"addClicked",value:function(e){var t;return t=e.target.getAttribute("data-workspace"),p("#sofi/comics/workspace/create/"+t)}}]),t);function t(){return w(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.ui={workspace_input:"input[name='workspace']",newworkspace_btn:".new-workspace-button",add_btn:".add-button"},e.prototype.events={"click @ui.newworkspace_btn":"createNewWorkspace","click @ui.add_btn":"addClicked"},e.prototype.template=s.renderable(function(i){return s.div(".listview-header","Workspaces"),s.div(".input-group",function(){return s.span(".input-group-btn",function(){return s.button(".new-workspace-button.btn.btn-default",function(){return s.text("Create workspace")})}),s.input(".form-control",{type:"text",name:"workspace"})}),s.div(".workspaces",function(){var e,t,n,o,r;for(r=[],e=0,n=(o=i.items).length;e<n;e++)t=o[e],r.push(s.div(".panel",function(){return s.div(".panel-body",function(){return s.a({href:"#sofi/comics/workspace/view/"+t.name},t.name),s.button(".add-button.btn.btn-default.btn-xs.pull-right",{"data-workspace":t.name},"Add Comics")})}));return r})}),e}.call(void 0),a=function(){var e=(h(t,c.View),l(t,[{key:"onRender",value:function(){var e,t,n,o=this;return e=r.request("db:ebcomicworkspace:WorkspaceCollection"),t=new e,n=new u({collection:t}),t.fetch().done(function(){return t.length?t.fetch({data:{distinct:"name",sort:"name"}}).done(function(){return o.showChildView("body",n)}):o.showChildView("body",n)})}}]),t);function t(){return w(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=s.renderable(function(e){return s.div(".listview-header",function(){return s.text("Workspace")}),s.div(".row",function(){return s.div(".body")})}),e.prototype.ui={body:".body",sidebar:".sidebar"},e.prototype.regions={body:"@ui.body",sidebar:"@ui.sidebar"},e.prototype.childViewEvents={"workspace:add:comic":"onWorkspaceAddComic","workspace:changed":"onWorkspaceChanged"},e}.call(void 0),e.exports=a}}]);
//# sourceMappingURL=sofi:views:showWorkspaceMainView-1284d7b4fe0c90f098a4.js.map