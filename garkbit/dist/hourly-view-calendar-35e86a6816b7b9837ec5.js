(self.webpackJsonp=self.webpackJsonp||[]).push([[51],{1051:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadingCalendarEvents=void 0;var r,a,o,i,u,l,d,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=w(n(7)),s=n(1),p=n(3),h=w(n(6)),y=n(396),v=w(n(406)),g=w(n(416)),b=w(n(57));function w(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(417),n(418),n(419),n(420),u=s.Radio.channel("global"),l=s.Radio.channel("messages"),r=s.Radio.channel("hourly"),a=u.request("main:app:AuthCollection"),i=function(){var e=function(e){function t(){return _(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,e),t}(a);return e.prototype.url="/api/dev/hourly/calendar",e}.call(void 0),d=function(e,t,n,r){var a,o;return(o=(a=new i).fetch({data:{start:e.startStr,end:e.endStr}})).done((function(){var e,n;return n=a.toJSON(),console.log("returned these events",n),e=[],a.forEach((function(n){var r;return r={start:n.start,end:n.end,id:n.id},e.push(r),t(e)}))})),o.fail((function(){return n("error"),l.request("danger","an error")})),o};var C=t.loadingCalendarEvents=function(e){var t,n;return n=(0,c.default)("loading"),t=(0,c.default)(".fc-toolbar"),e?(n.show(),t.hide()):(n.hide(),t.show())};o=function(){var e=function(e){function t(){return _(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,e),f(t,[{key:"onBeforeDestroy",value:function(){this.fullCalendar.destroy()}},{key:"onDomRefresh",value:function(){var e,t,n=this;return e=function(e){var t,a;return n.getOption("minicalendar")?t={layout:n.options.layout,id:e.id}:(a="#hourly/viewevent/"+e.id,(0,b.default)(a)),r.request("view-event",t)},t=r.request("maincalendar:get-date"),console.log("@ui.calendar",this.ui.calendar.get(0)),this.fullCalendar=new y.Calendar(this.ui.calendar.get(0),{plugins:[v.default,g.default],defaultDate:t,header:{left:"prevYear, nextYear",center:"title",right:"prev, next, dayGridDay, dayGridWeek, dayGridMonth"},events:d,loading:C,eventClick:e}),this.fullCalendar.render()}}]),t}(p.View);return e.prototype.template=h.default.renderable((function(){return h.default.div(".listview-header","Punching the Clock"),h.default.div("#loading",(function(){return h.default.h2((function(){return h.default.i(".fa.fa-spinner.fa-spin"),h.default.text("Loading Work Sessions")}))})),h.default.div("#maincalendar")})),e.prototype.ui={calendar:"#maincalendar",loading:"#loading",header:".fc-toolbar",daytop:".fc-day-top"},e.prototype.options={minicalendar:!1,layout:!1},e}.call(void 0),t.default=o}}]);
//# sourceMappingURL=hourly-view-calendar-35e86a6816b7b9837ec5.js.map