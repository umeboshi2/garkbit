(self.webpackJsonp=self.webpackJsonp||[]).push([[15],{761:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),r=o(3),i=u(o(6)),a=u(o(391));function u(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}o(420);var f,l=function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")};f=function(){var t=function(t){function e(){s(this,e);var t=c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.getCenter=t.getCenter.bind(t),t.onLocationError=t.onLocationError.bind(t),t.onLocationFound=t.onLocationFound.bind(t),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"onDomRefresh",value:function(){return this.Map=a.default.map("map-view"),a.default.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(this.Map),this.Map.on("moveend",this.getCenter),this.Map.on("locationerror",this.onLocationError),this.Map.on("locationfound",this.onLocationFound),this.Map.locate({setView:!0,watch:!1,timeout:1e3})}},{key:"getCenter",value:function(){return l(this,e),console.log(this.Map.getCenter())}},{key:"onLocationError",value:function(){var t;return l(this,e),this.ui.statusMsg.text("unable to get location"),t=[31.33,-89.28],this.Map.setView(t,13),a.default.circle(t,200).addTo(this.Map)}},{key:"onLocationFound",value:function(){l(this,e),this.ui.statusMsg.text("location found")}}]),e}(r.View);return t.prototype.template=i.default.renderable((function(){return i.default.div(".row",(function(){return i.default.h2("Map View")})),i.default.div(".row",(function(){return i.default.div(".col.status-message")})),i.default.div("#map-view.row",{style:"height:20em;"})})),t.prototype.ui={map:"#map-view",statusMsg:".status-message"},t}.call(void 0),e.default=f}}]);
//# sourceMappingURL=userprofile-view-map-view-8e7b018e5de77990b3f3.js.map