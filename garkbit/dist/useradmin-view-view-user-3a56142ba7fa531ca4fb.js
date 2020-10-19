(self.webpackJsonp=self.webpackJsonp||[]).push([[99],{1166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),u=n(3),i=s(n(6)),a=s(n(1167)),l=s(n(1168));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,p,h,m=[].indexOf;d=o.Radio.channel("useradmin"),h=i.default.renderable((function(e){return i.default.div(".row",(function(){return i.default.div(".col",(function(){return i.default.dl((function(){return i.default.dt("Name"),i.default.dd(e.fullname),i.default.dt("Login"),i.default.dd(e.username)}))})),i.default.div(".col",(function(){return i.default.div("Current groups"),i.default.div(".current-groups")})),i.default.div(".col",(function(){return i.default.div("Available groups"),i.default.div(".available-groups")}))})),i.default.div(".row",(function(){return i.default.a({href:"#useradmin/user/list"},(function(){return i.default.button(".btn.btn-sm.btn-info","Users")}))}))})),p=function(){var e=function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"groupsChanged",value:function(){var e=this;return console.log("groupsChanged"),this.model.fetch().done((function(){return e.render()}))}},{key:"showCurrentGroups",value:function(){var e,t,n;return n=this.model,e=new o.Collection(n.get("groups")),t=new u.CollectionView({tagname:"ul",className:"list-group",collection:e,childView:l.default,childViewOptions:{user:this.model},childViewTriggers:{"user:groups:change":"user:groups:change"}}),this.showChildView("current",t),t.on("user:groups:change",this.somethingHappened)}},{key:"showAvailableGroups",value:function(e){var t,n,r,i,l,s;return l=this.model,r=l.get("groups"),n=function(){var e,t,n;for(n=[],e=0,t=r.length;e<t;e++)i=r[e],n.push(i.id);return n}(),t=new o.Collection,e.forEach((function(e){var r;if(r=e.id,m.call(n,r)<0)return t.add(e)})),s=new u.CollectionView({channelName:"useradmin",tagName:"ul",className:"list-group",collection:t,childView:a.default,childViewOptions:{user:this.model},childViewTriggers:{"user:groups:change":"user:groups:change"}}),this.showChildView("available",s)}},{key:"onRender",value:function(){var e,t=this;return this.showCurrentGroups(),(e=d.request("db:group:collection")).fetch().done((function(){return t.showAvailableGroups(e)}))}}]),t}(u.View);return e.prototype.channelName="useradmin",e.prototype.template=h,e.prototype.ui={available:".available-groups",current:".current-groups"},e.prototype.regions={available:"@ui.available",current:"@ui.current"},e.prototype.childViewEvents={"user:groups:change":"groupsChanged"},e}.call(void 0),t.default=p},1167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,u,i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=f(n(1)),s=f(n(3)),c=f(n(6));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}u=l.default.Radio.channel("messages"),r=l.default.Radio.channel("useradmin"),i=c.default.renderable((function(e){return c.default.span(".mr-auto",(function(){return c.default.text(e.name)})),c.default.span(".ml-auto.btn-group.pull-right",(function(){return c.default.button(".add-item.btn.btn-sm.btn-info.fa.fa-plus","add")}))})),o=function(){var e=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"className",value:function(){return"list-group-item row"}},{key:"ui",value:function(){return{addItem:".add-item",item:".list-group-item"}}},{key:"events",value:function(){return{"click @ui.addItem":"addItem"}}},{key:"addItem",value:function(){var e,t,n,o=this;return n=this.getOption("user"),e=this.model,(t=new(r.request("db:usergroup:modelClass"))({group_id:e.id,user_id:n.id}).save()).fail((function(){return u.request("danger","failed to save model")})),t.done((function(){return o.trigger("user:groups:change")}))}}]),t}(s.default.View);return e.prototype.tagname="li",e.prototype.template=i,e}.call(void 0),t.default=o},1168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,u,i,a,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),c=n(3),f=n(6),d=(r=f)&&r.__esModule?r:{default:r};function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}i=s.Radio.channel("messages"),o=s.Radio.channel("useradmin"),a=d.default.renderable((function(e){return d.default.span(".mr-auto",(function(){return d.default.text(e.name)})),d.default.span(".ml-auto.btn-group.pull-right",(function(){return d.default.button(".remove-item.btn.btn-sm.btn-info.fa.fa-minus","remove")}))})),u=function(){var e=function(e){function t(){return p(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"className",value:function(){return"list-group-item row"}},{key:"ui",value:function(){return{removeItem:".remove-item",item:".list-group-item"}}},{key:"events",value:function(){return{"click @ui.removeItem":"removeItem"}}},{key:"removeItem",value:function(){var e,t,n,r,u,a=this;return r=this.getOption("user"),t=this.model,e=o.request("db:usergroup:modelClass"),(n=(u=new e({group_id:t.id,user_id:r.id})).fetch()).fail((function(){return i.request("danger","failed to retrieve model")})),n.done((function(){var e;return(e=u.destroy()).done((function(){return a.trigger("user:groups:change")})),e.fail((function(){return i.request("danger","failed to remove it")}))}))}}]),t}(c.View);return e.prototype.tagname="li",e.prototype.template=a,e}.call(void 0),t.default=u}}]);
//# sourceMappingURL=useradmin-view-view-user-3a56142ba7fa531ca4fb.js.map