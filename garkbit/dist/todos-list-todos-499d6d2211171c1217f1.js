(self.webpackJsonp=self.webpackJsonp||[]).push([[80],{121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseListView=t.BaseItemView=void 0;var o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=_(n(1)),r=_(n(2)),u=_(n(3)),l=_(n(5));n(13);var a,c,d,f,s,p,m=n(21);function _(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}s=i.default.Radio.channel("global"),p=i.default.Radio.channel("messages"),f=u.default.renderable(function(e){return u.default.div(".modal-dialog",function(){return u.default.div(".modal-content",function(){return u.default.h3("Do you really want to delete "+e.name+"?"),u.default.div(".modal-body",function(){return u.default.div("#selected-children")}),u.default.div(".modal-footer",function(){return u.default.ul(".list-inline",function(){return"btn.btn-secondary.btn-sm",u.default.li("#confirm-delete-button",function(){return(0,m.modal_close_button)("OK","check")}),u.default.li("#cancel-delete-button",function(){return(0,m.modal_close_button)("Cancel")})})})})})}),d=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,r.default.View),o(t,[{key:"events",value:function(){return{"click @ui.confirm_delete":"confirm_delete"}}},{key:"confirm_delete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done(function(){return p.request("success",e+" deleted.")}),t.fail(function(){return p.request("danger",e+" NOT deleted.")})}}]),t}();return e.prototype.template=f,e.prototype.ui={confirm_delete:"#confirm-delete-button",cancel_button:"#cancel-delete-button"},e}.call(void 0),t.BaseItemView=a=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,r.default.View),o(t,[{key:"events",value:function(){return{"click @ui.edit_item":"edit_item","click @ui.delete_item":"delete_item"}}},{key:"edit_item",value:function(){return(0,l.default)("#"+this.route_name+"/"+this.item_type+"s/edit/"+this.model.id)}},{key:"delete_item",value:function(){var e;return e=new d({model:this.model}),show_modal(e,!0),s.request("main:app:show-modal",e,{backdrop:!0})}}]),t}();return e.prototype.ui={edit_item:".edit-item",delete_item:".delete-item",item:".list-item"},e}.call(void 0),t.BaseListView=c=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,r.default.View),o(t,[{key:"regions",value:function(){return{itemlist:"#"+this.item_type+"-container"}}},{key:"ui",value:function(){return{make_new_item:"#new-"+this.item_type}}},{key:"onRender",value:function(){var e;return e=new r.default.CollectionView({collection:this.collection,childView:this.childView}),this.showChildView("itemlist",e)}},{key:"events",value:function(){return{"click @ui.make_new_item":"make_new_item"}}},{key:"_show_modal",value:function(e){var t,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];return(t=s.request("main:app:get-region","modal")).backdrop=n,t.show(e)}},{key:"make_new_item",value:function(){return(0,l.default)("#"+this.route_name+"/"+this.item_type+"s/new")}}]),t}(),t.BaseItemView=a,t.BaseListView=c},534:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i,r,u,l,a=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),c=_(n(1)),d=_(n(3)),f=m(n(91)),s=m(n(121)),p=_(n(5));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r=c.default.Radio.channel("global"),u=c.default.Radio.channel("messages"),c.default.Radio.channel("todos"),l=function(e,n){return d.default.renderable(function(t){return".btn.btn-default.btn-xs",d.default.li(".list-group-item."+e+"-item",function(){return d.default.span(".edit-button.btn.btn-default.btn-xs","Edit"),d.default.text(" "),d.default.span(function(){return d.default.a({href:"#"+n+"/"+e+"s/view/"+t.id},t.name)}),d.default.div(".todo-completed.checkbox.pull-right",function(){return d.default.label(function(){var e;return e={type:"checkbox"},t.completed&&(e.checked=""),d.default.input(".todo-checkbox",e),d.default.text("done")})})})})},o=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,s.BaseItemView),a(t,[{key:"events",value:function(){return{"click @ui.edit_item":"edit_item","click @ui.delete_item":"delete_item","change @ui.completed":"todo_completed"}}},{key:"edit_item",value:function(){return(0,p.default)("#"+this.route_name+"/"+this.item_type+"s/edit/"+this.model.id)}},{key:"delete_item",value:function(){var e;return e=new ConfirmDeleteModal({model:this.model}),show_modal(e,!0)}},{key:"todo_completed",value:function(o){var e,i=this;return e=0^o.target.checked,this.model.set("completed",e),this.model.save().done(function(){var e,t,n;return e=r.request("main:applet:get-applet","todos"),u.request("success","Updated "+i.model.get("name")),n=e.router.controller,t=!o.target.checked,n.list_certain_todos(0^t)})}}]),t}();return e.prototype.route_name="todos",e.prototype.template=l("todo","todos"),e.prototype.item_type="todo",e.prototype.ui={edit_item:".edit-button",delete_item:".delete-item",item:".list-item",completed:".todo-checkbox"},e}.call(void 0),i=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,s.BaseListView),t}();return e.prototype.route_name="todos",e.prototype.childView=o,e.prototype.template=f.base_list_template("todo"),e.prototype.childViewContainer="#todo-container",e.prototype.item_type="todo",e}.call(void 0),t.default=i},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.base_list_template=t.base_item_template=void 0;var o,i,r=l(n(3)),u=(l(n(35)),n(34),l(n(20)));function l(e){return e&&e.__esModule?e:{default:e}}t.base_item_template=o=function(n,o){return r.default.renderable(function(e){var t;return t=".btn.btn-secondary.btn-sm",r.default.li(".list-group-item."+n+"-item",function(){return r.default.span(function(){return r.default.a({href:"#"+o+"/"+n+"s/view/"+e.id},e.name)}),r.default.span(".btn-group.pull-right",function(){return r.default.button(".edit-item."+t+".btn-info.fa.fa-edit","edit"),r.default.button(".delete-item."+t+".btn-danger.fa.fa-close","delete")})})})},t.base_list_template=i=function(t){return r.default.renderable(function(e){return r.default.div(".listview-header",function(){return r.default.text((0,u.default)(t))}),r.default.hr(),r.default.ul("#"+t+"-container.list-group")})},t.base_item_template=o,t.base_list_template=i}}]);
//# sourceMappingURL=todos-list-todos-499d6d2211171c1217f1.js.map