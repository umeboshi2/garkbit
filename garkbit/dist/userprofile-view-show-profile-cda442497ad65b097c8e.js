(self.webpackJsonp=self.webpackJsonp||[]).push([[84],{956:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),o=n(4),a=c(n(7)),u=c(n(957));function c(e){return e&&e.__esModule?e:{default:e}}var l,s,f;l=i.Radio.channel("userprofile"),f=a.default.renderable((function(e){return a.default.div(".card",{style:"width: 18rem;"},(function(){return a.default.img(".card-img-top",{style:"height: 50px;",src:u.default}),a.default.div(".card-body",(function(){return a.default.h5(".card-title",e.title),a.default.div(".card-text",(function(){return a.default.text("Groups"),a.default.ul(".list-group",(function(){var t,n,r,i,o;for(o=[],n=0,r=(i=e.groups).length;n<r;n++)t=i[n],o.push(a.default.li(".list-group-item",t));return o})),a.default.button(".chpass-btn.btn.btn-primary","Change Password"),a.default.button(".map-btn.btn.btn-info","Map")})),a.default.div(".card-text.child-container")}))}))})),s=function(){var e=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.mapBtnClicked=e.mapBtnClicked.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"_childButtonClicked",value:function(e,t){var n,r;if(r=!1,(n=this.getRegion("childContainer")).hasView()?(n.currentView.constructor.name!==e&&(r=!0),n.empty()):r=!0,r)return this[t]()}},{key:"mapBtnClicked",value:function(){return function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),this._childButtonClicked("MapView","showMapView")}},{key:"chpassBtnClicked",value:function(){return this._childButtonClicked("ChangePasswordView","showChpassView")}},{key:"showMapView",value:function(){var e=this;return Promise.all([n.e(0),n.e(12)]).then(function(){var t;return t=new(0,n(608).default),e.showChildView("childContainer",t)}.bind(null,n)).catch(n.oe)}},{key:"showChpassView",value:function(){var e=this;return Promise.all([n.e(5),n.e(18),n.e(11)]).then(function(){var t;return t=new(0,n(609).default)({model:l.request("new-password-model")}),e.showChildView("childContainer",t)}.bind(null,n)).catch(n.oe)}}]),t}(o.View);return e.prototype.template=f,e.prototype.ui={childContainer:".child-container",mapBtn:".map-btn",chpassContainer:".chpass-container",chpassBtn:".chpass-btn"},e.prototype.regions={childContainer:"@ui.childContainer"},e.prototype.events={"click @ui.mapBtn":"mapBtnClicked","click @ui.chpassBtn":"chpassBtnClicked"},e}.call(void 0),t.default=s},957:function(e,t,n){e.exports=n(958)},958:function(e,t,n){"use strict";n.r(t),t.default=n.p+"emoji_u1f468-4432b9b7291c23a5a33aff1cefe39ff2.svg"}}]);
//# sourceMappingURL=userprofile-view-show-profile-cda442497ad65b097c8e.js.map