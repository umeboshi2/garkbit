(self.webpackJsonp=self.webpackJsonp||[]).push([[108],{609:function(e,t,o){"use strict";var n=function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e};function r(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}var a,c,u,s,l,p;a=o(1),s=o(2),p=o(3),c=o(252),o(253),o(5),a.Radio.channel("global"),l=p.renderable(function(e){return p.div(function(){return p.h2("Map View"),p.div("#map-view",{style:"height:20em;"})})}),u=function(){var e=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,s.View),n(o,[{key:"onDomRefresh",value:function(){var e,t;return this.Map=c.map("map-view"),t=[31.33,-89.28],(e=c.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png")).addTo(this.Map),console.log("MAP, LAYER",this.Map,e),this.Map.on("moveend",this.getCenter),this.Map.on("locationerror",this.onLocationError),this.Map.on("locationfound",this.onLocationFound),this.Map.locate({setView:!0,watch:!0,timeout:1e3}),c.circle(t,200).addTo(this.Map)}},{key:"getCenter",value:function(e){return i(this,o),console.log(this.Map.getCenter())}},{key:"onLocationError",value:function(e){var t;return i(this,o),console.log("unable to get location"),t=[31.33,-89.28],this.Map.setView(t,13)}},{key:"onLocationFound",value:function(e){return console.log("location found",e)}}]),o);function o(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments));return e.getCenter=e.getCenter.bind(e),e.onLocationError=e.onLocationError.bind(e),e}return e.prototype.template=l,e.prototype.ui={map:"#map-view"},e}.call(void 0),e.exports=u}}]);
//# sourceMappingURL=userprofile-view-map-view-b63579a7e7ee387c916f.js.map