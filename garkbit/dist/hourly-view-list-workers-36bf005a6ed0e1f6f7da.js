(self.webpackJsonp=self.webpackJsonp||[]).push([[53],{542:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,u,a,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=f(n(1)),s=f(n(2)),c=f(n(3));f(n(32));function f(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function b(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n(5).navigate_to_url,l.default.Radio.channel("global"),l.default.Radio.channel("hourly"),c.default.renderable(function(t){return".btn.btn-secondary.btn-sm",c.default.span(".mr-auto",function(){return t.username}),c.default.span(".ml-auto.btn-group.pull-right",function(){return c.default.button(".add-item..btn.btn-secondary.btn-sm.btn-info.fa.fa-plus")})}),u=c.default.renderable(function(t){var e,n,r;return".btn.btn-secondary.btn-sm",r={on:"btn-success",off:"btn-warning"},c.default.span(".mr-auto",function(){return t.user.username}),t.status?(e=t.status,n=".btn.btn-secondary.btn-sm."+r[e]):(e="No status set.",n=".btn.btn-secondary.btn-sm"),c.default.span(".ml-auto.btn-group.pull-right",function(){return console.log("model.status",e),console.log(n),c.default.button(".add-item."+n,e)})}),r=function(){var t=function(t){function e(){return d(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,s.default.View),i(e,[{key:"className",value:function(){return"list-group-item worker-item row"}},{key:"ui",value:function(){return{addItem:".add-item"}}},{key:"events",value:function(){return{"click @ui.addItem":"addItem"}}},{key:"addItem",value:function(){return console.log("addItem called",this.model)}}]),e}();return t.prototype.template=u,t.prototype.tagName="li",t}.call(void 0),a=c.default.renderable(function(){return c.default.div(".listview-header",function(){return c.default.text("Current Workers")}),c.default.hr(),c.default.div(".workers-container.list-group")}),o=function(){var t=function(t){function e(){return d(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,s.default.View),i(e,[{key:"ui",value:function(){return{itemList:".workers-container"}}},{key:"regions",value:function(){return{itemList:"@ui.itemList"}}},{key:"onRender",value:function(){var t;return t=new s.default.CollectionView({tagName:"ul",className:"list-group",collection:this.collection,childView:r}),this.showChildView("itemList",t)}}]),e}();return t.prototype.template=a,t}.call(void 0),e.default=o}}]);
//# sourceMappingURL=hourly-view-list-workers-36bf005a6ed0e1f6f7da.js.map