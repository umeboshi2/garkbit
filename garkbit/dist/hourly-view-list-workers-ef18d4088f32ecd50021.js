(self.webpackJsonp=self.webpackJsonp||[]).push([[53],{1052:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,u,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(3),l=n(6),s=(r=l)&&r.__esModule?r:{default:r};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=function(){var e=function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,e),i(t,[{key:"className",value:function(){return"list-group-item worker-item row"}},{key:"ui",value:function(){return{addItem:".add-item"}}},{key:"events",value:function(){return{"click @ui.addItem":"addItem"}}},{key:"addItem",value:function(){return console.log("addItem called",this.model)}}]),t}(a.View);return e.prototype.tagName="li",e.prototype.template=s.default.renderable((function(e){var t,n,r;return".btn.btn-secondary.btn-sm",r={on:"btn-success",off:"btn-warning"},s.default.span(".mr-auto",(function(){return e.user.username})),e.status?(t=e.status,n=".btn.btn-secondary.btn-sm."+r[t]):(t="No status set.",n=".btn.btn-secondary.btn-sm"),s.default.span(".ml-auto.btn-group.pull-right",(function(){return console.log("model.status",t),console.log(n),s.default.button(".add-item."+n,t)}))})),e}.call(void 0),u=function(){var e=function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,e),i(t,[{key:"ui",value:function(){return{itemList:".workers-container"}}},{key:"regions",value:function(){return{itemList:"@ui.itemList"}}},{key:"onRender",value:function(){var e;return e=new a.CollectionView({tagName:"ul",className:"list-group",collection:this.collection,childView:o}),this.showChildView("itemList",e)}}]),t}(a.View);return e.prototype.template=s.default.renderable((function(){return s.default.div(".listview-header",(function(){return s.default.text("Current Workers")})),s.default.hr(),s.default.div(".workers-container.list-group")})),e}.call(void 0),t.default=u}}]);
//# sourceMappingURL=hourly-view-list-workers-ef18d4088f32ecd50021.js.map