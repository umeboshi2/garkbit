(self.webpackJsonp=self.webpackJsonp||[]).push([[88],{630:function(e,t,n){"use strict";var o,r,i,c,a,u,p,s,d,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(4),r=n(1),a=n(2),n(87),s=n(3),n(92),n(142),p=n(5),i=n(121),n(110),r.Radio.channel("global"),r.Radio.channel("messages"),o=r.Radio.channel("sofi"),s.renderable(function(e){return s.div("default_entry_template")}),o.request("dbComicColumns"),function(){var e=function(e){function t(){return f(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,a.NextCollectionView),t}();return e.prototype.childView=i,e.prototype.childViewOptions={workspaceView:!0},e.prototype.childViewTriggers={"workspace:add:comic":"workspace:add:comic"},e}.call(void 0),d=new(o.request("db:unattached:collectionClass")),window.uc=d,u=function(){var e=function(e){function t(){return f(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,a.View),l(t,[{key:"initialize",value:function(e){return e||{}}},{key:"createNewWorkspace",value:function(){var e;if(e=this.ui.workspace_input.val())return p("#sofi/comics/workspace/create/"+e)}},{key:"addClicked",value:function(e){var t;return t=e.target.getAttribute("data-workspace"),p("#sofi/comics/workspace/create/"+t)}}]),t}();return e.prototype.ui={workspace_input:"input[name='workspace']",newworkspace_btn:".new-workspace-button",add_btn:".add-button"},e.prototype.events={"click @ui.newworkspace_btn":"createNewWorkspace","click @ui.add_btn":"addClicked"},e.prototype.template=s.renderable(function(e){return s.div(".listview-header","Workspaces"),s.div(".input-group",function(){return s.span(".input-group-btn",function(){return s.button(".new-workspace-button.btn.btn-default",function(){return s.text("Create workspace")})}),s.input(".form-control",{type:"text",name:"workspace"})}),s.div(".workspaces",function(){var t,n,o,r,i;for(i=[],t=0,o=(r=e.items).length;t<o;t++)n=r[t],i.push(s.div(".panel",function(){return s.div(".panel-body",function(){return s.a({href:"#sofi/comics/workspace/view/"+n.name},n.name),s.button(".add-button.btn.btn-default.btn-xs.pull-right",{"data-workspace":n.name},"Add Comics")})}));return i})}),e}.call(void 0),c=function(){var e=function(e){function t(){return f(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,a.View),l(t,[{key:"onRender",value:function(){var e,t,n,r=this;return e=o.request("db:ebcomicworkspace:WorkspaceCollection"),t=new e,n=new u({collection:t}),t.fetch().done(function(){return t.length?t.fetch({data:{distinct:"name",sort:"name"}}).done(function(){return r.showChildView("body",n)}):r.showChildView("body",n)})}}]),t}();return e.prototype.template=s.renderable(function(e){return s.div(".listview-header",function(){return s.text("Workspace")}),s.div(".row",function(){return s.div(".body")})}),e.prototype.ui={body:".body",sidebar:".sidebar"},e.prototype.regions={body:"@ui.body",sidebar:"@ui.sidebar"},e.prototype.childViewEvents={"workspace:add:comic":"onWorkspaceAddComic","workspace:changed":"onWorkspaceChanged"},e}.call(void 0),e.exports=c}}]);
//# sourceMappingURL=sofi:views:showWorkspaceMainView-3ec60ad5d8e79a341127.js.map