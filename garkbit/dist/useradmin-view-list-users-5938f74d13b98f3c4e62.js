(self.webpackJsonp=self.webpackJsonp||[]).push([[97],{379:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p,a,u,s,c,l,f,y,m;p=o(1),o(2),o(3),o(5),l=p.Radio.channel("global"),p.Radio.channel("messages"),p.Radio.channel("useradmin"),a=l.request("crud:view:item"),u=l.request("crud:view:list"),m={name:"user",entryField:"fullname",routeName:"adminpanel"},f=l.request("crud:template:item",m),y=l.request("crud:template:list",m),s=function(){var e=(i(t,a),t);function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.route_name="adminpanel",e.prototype.template=f,e.prototype.item_type="user",e}.call(void 0),c=function(){var e=(i(t,u),t);function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.route_name="adminpanel",e.prototype.childView=s,e.prototype.template=y,e.prototype.childViewContainer="#user-container",e.prototype.item_type="user",e}.call(void 0),e.exports=c}}]);
//# sourceMappingURL=useradmin-view-list-users-5938f74d13b98f3c4e62.js.map