(self.webpackJsonp=self.webpackJsonp||[]).push([[60],{561:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,u,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=s(n(1)),c=s(n(2)),f=s(n(3));s(n(28));function s(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(6).navigate_to_url,l.default.Radio.channel("global"),l.default.Radio.channel("places"),i=f.default.renderable(function(e){return".btn.btn-secondary.btn-sm",f.default.span(".mr-auto",function(){return f.default.a({href:"#places/view/"+e.id},e.name)})}),r=function(){var e=function(e){function t(){return p(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,c.default.View),a(t,[{key:"className",value:function(){return"list-group-item location-item row"}}]),t}();return e.prototype.template=i,e.prototype.tagName="li",e}.call(void 0),u=f.default.renderable(function(){return f.default.div(".listview-header",function(){return f.default.text("Your Places")}),f.default.hr(),f.default.div(".places-container.list-group")}),o=function(){var e=function(e){function t(){return p(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,c.default.View),a(t,[{key:"ui",value:function(){return{itemList:".places-container"}}},{key:"regions",value:function(){return{itemList:"@ui.itemList"}}},{key:"onRender",value:function(){var e;return e=new c.default.CollectionView({tagName:"ul",className:"list-group",collection:this.collection,childView:r}),this.showChildView("itemList",e)}}]),t}();return e.prototype.template=u,e}.call(void 0),t.default=o}}]);
//# sourceMappingURL=places-view-list-places-f41a859f128d9c6b7c34.js.map