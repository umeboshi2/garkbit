(self.webpackJsonp=self.webpackJsonp||[]).push([[70],{110:function(e,t,o){"use strict";var n;n=o(3),e.exports=n.renderable(function(e){return n.div(".listview-header",function(){return n.img(".mr-3.mb-1",{src:e.leftIcon,style:"height:2rem;width:2rem"}),n.text(e.text),n.img(".ml-3.mb-1",{src:e.rightIcon,style:"height:2rem;width:2rem"})})})},533:function(e,t,o){"use strict";var n,r,i,s,l,c,a,u,p,f,h,y,m=function(e,t,o){return t&&v(e.prototype,t),o&&v(e,o),e};function v(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n=o(1),c=o(2),y=o(3),p=o(32),h=o(534),a=o(536),o(5).navigate_to_url,s=o(109),f=o(538),u=o(110),y.renderable(function(e){return y.div(".row.listview-list-entry",function(){return y.raw(p("# "+e.appName+" started."))})}),r=function(){var e=(w(t,c.View),m(t,[{key:"linkClicked",value:function(e){return console.log("show",this.model.id)}}]),t);function t(){return d(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.className="col-md-4",e.prototype.template=y.renderable(function(e){return y.div(".listview-list-entry",function(){return y.a({href:"#netark/view/"+e.id},e.name)})}),e.prototype.ui={link:"a"},e.prototype.events={"click @ui.link":"linkClicked"},e}.call(void 0),i=function(){var e=(w(t,c.CollectionView),t);function t(){return d(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.className="row",e.prototype.childView=r,e}.call(void 0),function(){var e=(w(t,c.View),t);function t(){return d(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=y.renderable(function(e){return y.div(".jsonview.listview-list-entry",{style:"overflow:auto"})}),e.prototype.behaviors={HasJsonView:{behaviorClass:s}},e}.call(void 0),l=function(){var e=(w(t,c.View),m(t,[{key:"onRender",value:function(){var e,t;return e=new n.Collection(f),console.log("Collection",e),t=new i({collection:e}),this.showChildView("itemList",t)}}]),t);function t(){return d(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=y.renderable(function(){return u({text:"Scifi Movies",leftIcon:h,rightIcon:a}),y.div(".items")}),e.prototype.ui={itemList:".items"},e.prototype.regions={itemList:"@ui.itemList"},e}.call(void 0),e.exports=l},534:function(e,t,o){e.exports=o(535)},535:function(e,t,o){e.exports=o.p+"emoji_u1f47e-f6f82c8f692328fa73065ebb21e7a8c2.svg"},536:function(e,t,o){e.exports=o(537)},537:function(e,t,o){e.exports=o.p+"emoji_u1f47d-286555a636937000a67bde92f54c4466.svg"},538:function(e,t,o){"use strict";e.exports=[{id:"Plan_9_from_Outer_Space_1959",name:"Plan 9 from Outer Space"},{id:"InvasionOfTheBeeGirls",name:"Invasion of the Bee Girls"},{id:"Cosmos_War_of_the_Planets",name:"Cosmos: War of the Planets"}]}}]);
//# sourceMappingURL=netark-view-scifi-movies-index-96ac8212d0fb77906b8b.js.map