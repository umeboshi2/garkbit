(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{287:function(e,t,n){"use strict";e.exports=[{id:"Plan_9_from_Outer_Space_1959",name:"Plan 9 from Outer Space"},{id:"InvasionOfTheBeeGirls",name:"Invasion of the Bee Girls"},{id:"Cosmos_War_of_the_Planets",name:"Cosmos: War of the Planets"}]},288:function(e,t,n){e.exports=n.p+"emoji_u1f47d-2ef382b0a48666b41b822ad4e3acaf60.svg"},289:function(e,t,n){e.exports=n(288)},290:function(e,t,n){e.exports=n.p+"emoji_u1f47e-7d7a22a9740235bf55fb0e7e46080b45.svg"},291:function(e,t,n){e.exports=n(290)},292:function(e,t,n){"use strict";var o,r,i,s,u,c,a,l,p,f,h,y,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=n(1),c=n(2),y=n(3),p=n(31),h=n(291),a=n(289),n(5).navigate_to_url,s=n(100),f=n(287),l=n(99),y.renderable(function(e){return y.div(".row.listview-list-entry",function(){return y.raw(p("# "+e.appName+" started."))})}),r=function(){var e=function(e){function t(){return m(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,c.View),d(t,[{key:"linkClicked",value:function(e){return console.log("show",this.model.id)}}]),t}();return e.prototype.className="col-md-4",e.prototype.template=y.renderable(function(e){return y.div(".listview-list-entry",function(){return y.a({href:"#netark/view/"+e.id},e.name)})}),e.prototype.ui={link:"a"},e.prototype.events={"click @ui.link":"linkClicked"},e}.call(void 0),i=function(){var e=function(e){function t(){return m(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,c.CollectionView),t}();return e.prototype.className="row",e.prototype.childView=r,e}.call(void 0),function(){var e=function(e){function t(){return m(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,c.View),t}();return e.prototype.template=y.renderable(function(e){return y.div(".jsonview.listview-list-entry",{style:"overflow:auto"})}),e.prototype.behaviors={HasJsonView:{behaviorClass:s}},e}.call(void 0),u=function(){var e=function(e){function t(){return m(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,c.View),d(t,[{key:"onRender",value:function(){var e,t;return e=new o.Collection(f),console.log("Collection",e),t=new i({collection:e}),this.showChildView("itemList",t)}}]),t}();return e.prototype.template=y.renderable(function(){return l({text:"Scifi Movies",leftIcon:h,rightIcon:a}),y.div(".items")}),e.prototype.ui={itemList:".items"},e.prototype.regions={itemList:"@ui.itemList"},e}.call(void 0),e.exports=u},99:function(e,t,n){"use strict";var o;o=n(3),e.exports=o.renderable(function(e){return o.div(".listview-header",function(){return o.img(".mr-3.mb-1",{src:e.leftIcon,style:"height:2rem;width:2rem"}),o.text(e.text),o.img(".ml-3.mb-1",{src:e.rightIcon,style:"height:2rem;width:2rem"})})})}}]);
//# sourceMappingURL=netark-view-scifi-movies-index-d06f73f9677a223972e0.js.map