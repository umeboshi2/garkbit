(self.webpackJsonp=self.webpackJsonp||[]).push([[45],{123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseListView=t.BaseItemView=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=_(n(1)),r=_(n(2)),u=_(n(3)),l=_(n(5));n(11);var a,c,d,f,s,p,m=n(17);function _(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}s=i.default.Radio.channel("global"),p=i.default.Radio.channel("messages"),f=u.default.renderable(function(e){return u.default.div(".modal-dialog",function(){return u.default.div(".modal-content",function(){return u.default.h3("Do you really want to delete "+e.name+"?"),u.default.div(".modal-body",function(){return u.default.div("#selected-children")}),u.default.div(".modal-footer",function(){return u.default.ul(".list-inline",function(){return"btn.btn-secondary.btn-sm",u.default.li("#confirm-delete-button",function(){return(0,m.modal_close_button)("OK","check")}),u.default.li("#cancel-delete-button",function(){return(0,m.modal_close_button)("Cancel")})})})})})}),d=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,r.default.View),o(t,[{key:"events",value:function(){return{"click @ui.confirm_delete":"confirm_delete"}}},{key:"confirm_delete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done(function(){return p.request("success",e+" deleted.")}),t.fail(function(){return p.request("danger",e+" NOT deleted.")})}}]),t}();return e.prototype.template=f,e.prototype.ui={confirm_delete:"#confirm-delete-button",cancel_button:"#cancel-delete-button"},e}.call(void 0),t.BaseItemView=a=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,r.default.View),o(t,[{key:"events",value:function(){return{"click @ui.edit_item":"edit_item","click @ui.delete_item":"delete_item"}}},{key:"edit_item",value:function(){return(0,l.default)("#"+this.route_name+"/"+this.item_type+"s/edit/"+this.model.id)}},{key:"delete_item",value:function(){var e;return e=new d({model:this.model}),show_modal(e,!0),s.request("main:app:show-modal",e,{backdrop:!0})}}]),t}();return e.prototype.ui={edit_item:".edit-item",delete_item:".delete-item",item:".list-item"},e}.call(void 0),t.BaseListView=c=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,r.default.View),o(t,[{key:"regions",value:function(){return{itemlist:"#"+this.item_type+"-container"}}},{key:"ui",value:function(){return{make_new_item:"#new-"+this.item_type}}},{key:"onRender",value:function(){var e;return e=new r.default.CollectionView({collection:this.collection,childView:this.childView}),this.showChildView("itemlist",e)}},{key:"events",value:function(){return{"click @ui.make_new_item":"make_new_item"}}},{key:"_show_modal",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(t=s.request("main:app:get-region","modal")).backdrop=n,t.show(e)}},{key:"make_new_item",value:function(){return(0,l.default)("#"+this.route_name+"/"+this.item_type+"s/new")}}]),t}(),t.BaseItemView=a,t.BaseListView=c},258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i,r,u,l,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=_(n(1)),d=_(n(3)),f=m(n(88)),s=m(n(123)),p=_(n(5));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r=c.default.Radio.channel("global"),u=c.default.Radio.channel("messages"),c.default.Radio.channel("todos"),l=function(e,t){return d.default.renderable(function(n){return".btn.btn-default.btn-xs",d.default.li(".list-group-item."+e+"-item",function(){return d.default.span(".edit-button.btn.btn-default.btn-xs","Edit"),d.default.text(" "),d.default.span(function(){return d.default.a({href:"#"+t+"/"+e+"s/view/"+n.id},n.name)}),d.default.div(".todo-completed.checkbox.pull-right",function(){return d.default.label(function(){var e;return e={type:"checkbox"},n.completed&&(e.checked=""),d.default.input(".todo-checkbox",e),d.default.text("done")})})})})},o=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,s.BaseItemView),a(t,[{key:"events",value:function(){return{"click @ui.edit_item":"edit_item","click @ui.delete_item":"delete_item","change @ui.completed":"todo_completed"}}},{key:"edit_item",value:function(){return(0,p.default)("#"+this.route_name+"/"+this.item_type+"s/edit/"+this.model.id)}},{key:"delete_item",value:function(){var e;return e=new ConfirmDeleteModal({model:this.model}),show_modal(e,!0)}},{key:"todo_completed",value:function(e){var t,n=this;return t=0^e.target.checked,this.model.set("completed",t),this.model.save().done(function(){var t,o,i;return t=r.request("main:applet:get-applet","todos"),u.request("success","Updated "+n.model.get("name")),i=t.router.controller,o=!e.target.checked,i.list_certain_todos(0^o)})}}]),t}();return e.prototype.route_name="todos",e.prototype.template=l("todo","todos"),e.prototype.item_type="todo",e.prototype.ui={edit_item:".edit-button",delete_item:".delete-item",item:".list-item",completed:".todo-checkbox"},e}.call(void 0),i=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,s.BaseListView),t}();return e.prototype.route_name="todos",e.prototype.childView=o,e.prototype.template=f.base_list_template("todo"),e.prototype.childViewContainer="#todo-container",e.prototype.item_type="todo",e}.call(void 0),t.default=i},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.base_list_template=t.base_item_template=void 0;var o,i,r=l(n(3)),u=(l(n(31)),n(30),l(n(18)));function l(e){return e&&e.__esModule?e:{default:e}}t.base_item_template=o=function(e,t){return r.default.renderable(function(n){var o;return o=".btn.btn-secondary.btn-sm",r.default.li(".list-group-item."+e+"-item",function(){return r.default.span(function(){return r.default.a({href:"#"+t+"/"+e+"s/view/"+n.id},n.name)}),r.default.span(".btn-group.pull-right",function(){return r.default.button(".edit-item."+o+".btn-info.fa.fa-edit","edit"),r.default.button(".delete-item."+o+".btn-danger.fa.fa-close","delete")})})})},t.base_list_template=i=function(e){return r.default.renderable(function(t){return r.default.div(".listview-header",function(){return r.default.text((0,u.default)(e))}),r.default.hr(),r.default.ul("#"+e+"-container.list-group")})},t.base_item_template=o,t.base_list_template=i}}]);
//# sourceMappingURL=todos-list-todos-85cf68cbc454630e098c.js.map