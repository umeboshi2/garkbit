(self.webpackJsonp=self.webpackJsonp||[]).push([[98,97],{663:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(3),c=f(n(6)),p=f(n(57));function f(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}i=c.default.renderable((function(e){return c.default.span(".mr-auto",(function(){var t;return t=e.itemViewUrl,c.default.a({href:t},e.itemLabel)})),c.default.span(".ml-auto.btn-group.pull-right",(function(){return c.default.button(".edit-item.btn.btn-sm.btn-info.fa.fa-edit","edit"),c.default.button(".delete-item.btn.btn-sm.btn-danger.fa.fa-close","delete")}))})),u=c.default.renderable((function(){return c.default.div(".item-container.col")})),o=function(){var e=function(e){function t(){return s(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),a(t,[{key:"className",value:function(){return"list-group-item row"}},{key:"templateContext",value:function(){return{itemLabel:this.model.itemLabel(),itemViewUrl:this.model.itemViewUrl()}}},{key:"ui",value:function(){return{editItem:".edit-item",deleteItem:".delete-item",item:".list-group-item"}}},{key:"events",value:function(){return{"click @ui.editItem":"editItem","click @ui.deleteItem":"deleteItem"}}},{key:"editItem",value:function(){return console.log("called editItem",this.options,this.model),(0,p.default)(this.model.itemEditUrl())}},{key:"deleteItem",value:function(){return console.log("called deleteItem")}}]),t}(l.View);return e.prototype.channelName="useradmin",e.prototype.tagName="li",e.prototype.template=i,e}.call(void 0),r=function(){var e=function(e){function t(){return s(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),a(t,[{key:"ui",value:function(){return{container:".item-container"}}},{key:"regions",value:function(){return{container:"@ui.container"}}},{key:"onRender",value:function(){var e;return e=new l.CollectionView({channelName:"useradmin",tagName:"ul",className:"list-group",collection:this.collection,childView:o}),this.showChildView("container",e)}}]),t}(l.View);return e.prototype.channelName="useradmin",e.prototype.template=u,e}.call(void 0),t.default=r},911:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,a,l,c,p,f,s,d,m;u=n(1),n(3),n(6),n(57),f=u.Radio.channel("global"),u.Radio.channel("messages"),u.Radio.channel("useradmin"),a=f.request("crud:view:item"),l=f.request("crud:view:list"),m={name:"user",entryField:"fullname",routeName:"admin"},s=f.request("crud:template:item",m),d=f.request("crud:template:list",m),c=function(){var e=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(a);return e.prototype.route_name="admin",e.prototype.template=s,e.prototype.item_type="user",e}.call(void 0),p=function(){var e=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(l);return e.prototype.route_name="admin",e.prototype.childView=c,e.prototype.template=d,e.prototype.childViewContainer="#user-container",e.prototype.item_type="user",e}.call(void 0),e.exports=p}}]);
//# sourceMappingURL=useradmin-view-list-users-b22dfd6419caf7ff7409.js.map