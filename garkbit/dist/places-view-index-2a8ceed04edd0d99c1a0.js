(self.webpackJsonp=self.webpackJsonp||[]).push([[59],{560:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),r=i(o(1)),a=i(o(2)),u=i(o(3));i(o(6));function i(t){return t&&t.__esModule?t:{default:t}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var d,f,p,b,h,y;f=r.default.Radio.channel("global"),b=r.default.Radio.channel("messages"),d=r.default.Radio.channel("places"),y=["latitude","longitude","altitude","accuracy","altitudeAccuracy","heading","speed"],h=function(){var t=function(t){function e(){return c(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,a.default.View),n(e,[{key:"addLocationBtnClicked",value:function(){var t=this;return console.log("addLocationBtnClicked"),o.e(91).then(function(){var e;return e=new(0,o(612).default)({model:t.model}),f.request("main:app:show-modal",e)}.bind(null,o)).catch(o.oe)}}]),e}();return t.prototype.template=u.default.renderable(function(t){var e;return e=t.coords,u.default.div(".status",function(){return u.default.dt("Latitude"),u.default.dd(e.latitude),u.default.dt("Longitude"),u.default.dd(e.longitude)}),u.default.button(".add-location-btn.btn.btn-primary","Add location")}),t.prototype.ui={status:".status",addLocationBtn:".add-location-btn"},t.prototype.events={"click @ui.addLocationBtn":"addLocationBtnClicked"},t}.call(void 0),p=function(){var t=function(t){function e(){c(this,e);var t=l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.locationSuccess=t.locationSuccess.bind(t),t}return s(e,a.default.View),n(e,[{key:"onRender",value:function(){var t;return t={success:this.locationSuccess,error:this.locationError},f.request("main:app:getCurrentPosition",t)}},{key:"locationSuccess",value:function(t){var o,n,r,a;return function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")}(this,e),console.log("locationSuccess",t),r=t.coords,o={},y.forEach(function(t){var e;return e=r[t],o[t]=e}),n=new(d.request("db:userlocation:modelClass"))({coords:o}),a=new h({model:n}),this.showChildView("locationStatus",a)}},{key:"locationError",value:function(t){return console.log("locationError",t),b.request("warning",t.message)}}]),e}();return t.prototype.template=u.default.renderable(function(t){return u.default.div(".row.location-status")}),t.prototype.ui={locationStatus:".location-status"},t.prototype.regions={locationStatus:"@ui.locationStatus"},t}.call(void 0),e.default=p}}]);
//# sourceMappingURL=places-view-index-2a8ceed04edd0d99c1a0.js.map