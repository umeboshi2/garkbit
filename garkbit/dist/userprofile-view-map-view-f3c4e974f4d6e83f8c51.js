(self.webpackJsonp=self.webpackJsonp||[]).push([[108],{619:function(t,e,o){"use strict";var n=function(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),t};function r(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")}var a,s,u,c,p,l;a=o(1),c=o(2),l=o(3),s=o(253),o(254),o(5),a.Radio.channel("global"),p=l.renderable(function(t){return l.div(".row",function(){return l.h2("Map View")}),l.div(".row",function(){return l.div(".col.status-message")}),l.div("#map-view.row",{style:"height:20em;"})}),u=function(){var t=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,c.View),n(o,[{key:"onDomRefresh",value:function(){var t,e;return this.Map=s.map("map-view"),e=[31.33,-89.28],(t=s.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png")).addTo(this.Map),console.log("MAP, LAYER",this.Map,t),this.Map.on("moveend",this.getCenter),this.Map.on("locationerror",this.onLocationError),this.Map.on("locationfound",this.onLocationFound),this.Map.locate({setView:!0,watch:!1,timeout:1e3}),s.circle(e,200).addTo(this.Map)}},{key:"getCenter",value:function(t){return i(this,o),console.log(this.Map.getCenter())}},{key:"onLocationError",value:function(t){var e;return i(this,o),this.ui.statusMsg.text("unable to get location"),e=[31.33,-89.28],this.Map.setView(e,13)}},{key:"onLocationFound",value:function(t){i(this,o),this.ui.statusMsg.text("location found")}}]),o);function o(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments));return t.getCenter=t.getCenter.bind(t),t.onLocationError=t.onLocationError.bind(t),t.onLocationFound=t.onLocationFound.bind(t),t}return t.prototype.template=p,t.prototype.ui={map:"#map-view",statusMsg:".status-message"},t}.call(void 0),t.exports=u}}]);
//# sourceMappingURL=userprofile-view-map-view-f3c4e974f4d6e83f8c51.js.map