(self.webpackJsonp=self.webpackJsonp||[]).push([[73],{120:function(e,t,n){"use strict";var i;i=n(3),e.exports=i.renderable(function(e){return i.div(".listview-header",function(){return i.img(".mr-3.mb-1",{src:e.leftIcon,style:"height:2rem;width:2rem"}),i.text(e.text),i.img(".ml-3.mb-1",{src:e.rightIcon,style:"height:2rem;width:2rem"})})})},140:function(e,t,n){"use strict";e.exports=[{id:"plague_ship_librivox",name:"Plague Ship"},{id:"projectmastodon_pc_librivox",name:"Project Mastodon"},{id:"voyagetoarcturus_mn_librivox",name:"Voyage to Arcturus"},{id:"voodoo_planet_mn_librivox",name:"Voodoo Planet"},{id:"talents_inc_mn_librivox",name:"Talents Inc."},{id:"people_minus_x_1511_librivox",name:"People Minux X"},{id:"time_crime_1305_librivox",name:"Time Crime"},{id:"my_man_jeeves_librivox",name:"My Man Jeeves"}]},161:function(e,t,n){e.exports=n(202)},202:function(e,t,n){e.exports=n.p+"emoji_u1f4fb-ee7b43f38ddc729b1a1abcdc3dccaba8.svg"},203:function(e,t,n){e.exports=n(204)},204:function(e,t,n){e.exports=n.p+"emoji_u1f3a4-231f474f420f57fa6bae900adc3c3e27.svg"},205:function(e,t,n){e.exports=n(206)},206:function(e,t,n){e.exports=n.p+"emoji_u1f4da-ef7dffd4e73274dffdd6d45b441ab4ad.svg"},600:function(e,t,n){"use strict";var i,o,r,a,l,s,c,u,p,f,_,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}i=n(1),s=n(2),_=n(3),n(32),p=n(161),u=n(601),n(5).navigate_to_url,a=n(119),f=n(603),c=n(120),o=function(){var e=function(e){function t(){return m(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,s.View),d(t,[{key:"linkClicked",value:function(e){return console.log("show",this.model.id)}}]),t}();return e.prototype.className="col-md-4",e.prototype.template=_.renderable(function(e){return _.div(".listview-list-entry",function(){return _.a({href:"#netark/view/"+e.id},e.name)})}),e.prototype.ui={link:"a"},e.prototype.events={"click @ui.link":"linkClicked"},e}.call(void 0),r=function(){var e=function(e){function t(){return m(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,s.CollectionView),t}();return e.prototype.className="row",e.prototype.childView=o,e}.call(void 0),function(){var e=function(e){function t(){return m(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,s.View),t}();return e.prototype.template=_.renderable(function(e){return _.div(".jsonview.listview-list-entry",{style:"overflow:auto"})}),e.prototype.behaviors={HasJsonView:{behaviorClass:a}},e}.call(void 0),l=function(){var e=function(e){function t(){return m(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,s.View),d(t,[{key:"onRender",value:function(){var e,t;return e=new i.Collection(f),t=new r({collection:e}),this.showChildView("itemList",t)}}]),t}();return e.prototype.template=_.renderable(function(){return c({text:"Old Time Radio",leftIcon:u,rightIcon:p}),_.div(".items")}),e.prototype.ui={itemList:".items"},e.prototype.regions={itemList:"@ui.itemList"},e}.call(void 0),e.exports=l},601:function(e,t,n){e.exports=n(602)},602:function(e,t,n){e.exports=n.p+"emoji_u1f399-c3265015dcbd60200c37916ae0b1165a.svg"},603:function(e,t,n){"use strict";e.exports=[{id:"OTRR_BCRC_Singles",name:"The Bing Crosby - Rosemary Clooney Show"},{id:"OTRR_Escape_Singles",name:"Escape"},{id:"OTRR_X_Minus_One_Singles",name:"X Minus One"},{id:"hhgttgall6",name:"The Hitchhikers Guide to the Galaxy (including latest Hexagonal)"},{id:"OTRR_Dr_Kildare_Singles",name:"Dr. Kildare"},{id:"OTRR_Mel_Blanc_Singles",name:"The Mel Blanc Show"},{id:"OTRR_Moon_Over_Africa_Singles",name:"Moon Over Africa"},{id:"OTRR_Suspense_Singles",name:"Suspense"},{id:"OTRR_Dimension_X_Singles",name:"Dimension X"},{id:"Otrr_The_Great_Gildersleeve_Singles",name:"The Great Gildersleeve"},{id:"OTRR_Box_13_Singles",name:"Box 13"},{id:"OTRR_Calling_All_Cars_Singles",name:"Calling All Cars"},{id:"OTRR_CBS_Radio_Workshop_Singles",name:"CBS Radio Workshop"},{id:"OTRR_Cloak_and_Dagger_Singles",name:"Cloak and Dagger"},{id:"Perry_Mason_Radio_Show",name:"The Perry Mason Radio Show"},{id:"151282703573644",name:"BBC Radio 4 Hercule Poirot"},{id:"IsaacAsimov-TheFoundationTrilogy",name:"Isaac Asimov's Foundation Trilogy (BBC Radio 4)"},{id:"BBCIAIR",name:"Isaac Asimov's I Robot (BBC Radio 4)"},{id:"OTRR_Incredible_But_True_Singles",name:"Incredible, But True"},{id:"OTRR_Inner_Sanctum_Mysteries_Singles",name:"Inner Sanctum Mysteries"},{id:"OTRR_Mysterious_Traveler_Singles",name:"Mysterious Traveler"},{id:"OTRR_Planet_Man_Ver2_Singles",name:"Planet Man"},{id:"OTRR_Space_Patrol_Singles",name:"Space Patrol"},{id:"Sci-fiRadio",name:"Sci-fiRadio"},{id:"Speed_Gibson_Of_The_International_Secret_Police",name:"Speed Gibson of the International Secret Police"}]},604:function(e,t,n){"use strict";var i,o,r,a,l,s,c,u,p,f,_,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}i=n(1),s=n(2),_=n(3),n(32),n(161),p=n(203),c=n(205),n(5).navigate_to_url,a=n(119),f=n(140),u=n(120),o=function(){var e=function(e){function t(){return m(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,s.View),d(t,[{key:"linkClicked",value:function(e){return console.log("show",this.model.id)}}]),t}();return e.prototype.className="col-md-4",e.prototype.template=_.renderable(function(e){return _.div(".listview-list-entry",function(){return _.a({href:"#netark/view/"+e.id},e.name)})}),e.prototype.ui={link:"a"},e.prototype.events={"click @ui.link":"linkClicked"},e}.call(void 0),r=function(){var e=function(e){function t(){return m(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,s.CollectionView),t}();return e.prototype.className="row",e.prototype.childView=o,e}.call(void 0),function(){var e=function(e){function t(){return m(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,s.View),t}();return e.prototype.template=_.renderable(function(e){return _.div(".jsonview.listview-list-entry",{style:"overflow:auto"})}),e.prototype.behaviors={HasJsonView:{behaviorClass:a}},e}.call(void 0),l=function(){var e=function(e){function t(){return m(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,s.View),d(t,[{key:"onRender",value:function(){var e,t;return e=new i.Collection(f),t=new r({collection:e}),this.showChildView("itemList",t)}}]),t}();return e.prototype.template=_.renderable(function(){return u({text:"Librivox Audiobooks",leftIcon:p,rightIcon:c}),_.div(".items")}),e.prototype.ui={itemList:".items"},e.prototype.regions={itemList:"@ui.itemList"},e.prototype.templateContext={appName:"netark"},e}.call(void 0),e.exports=l}}]);
//# sourceMappingURL=netark-view-otrr-list-9e336a911fb0454e6f64.js.map