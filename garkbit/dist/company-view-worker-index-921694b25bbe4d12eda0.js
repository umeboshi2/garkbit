(self.webpackJsonp=self.webpackJsonp||[]).push([[28],{375:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,u,a,i,l,c,s,f,d,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=k(n(1)),w=k(n(2)),b=k(n(3)),v=(k(n(28)),k(n(118))),y=(k(n(5)),k(n(376)));function k(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}h.default.Radio.channel("global"),h.default.Radio.channel("messages"),o=h.default.Radio.channel("company"),l=o.request("TimeClock"),c=b.default.renderable(function(e){return b.default.div(".row.listview-list-entry",function(){return b.default.text("You are not a worker.")})}),u=function(){var e=function(e){function t(){return g(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,w.default.View),t}();return e.prototype.template=c,e}.call(void 0),s=b.default.renderable(function(e){return b.default.div(function(){var t,n,o,r;return n=e.session,r=e.worker.status,n?"off"===r&&n.end?(t=(0,v.default)(n.end),b.default.text("Your last session ended "+t.fromNow())):"on"===r?(o=(0,v.default)(n.start),b.default.text("You have been working since "+o.fromNow())):void 0:b.default.text("You have never clocked in.")})}),a=function(){var e=function(e){function t(){return g(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,w.default.View),p(t,[{key:"onSomething",value:function(){var e;return e=this.model.get("id"),new l({worker_id:e})}}]),t}();return e.prototype.template=s,e}.call(void 0),f=b.default.renderable(function(e){var t;return t={action:"in",btnClass:".clock-btn.btn.btn-info.fa.fa-clock-o"},"in","on"===e.status&&(t.action="out",t.btnClass=".clock-btn.btn.btn-warning.fa.fa-clock-o"),b.default.div(".row",function(){return b.default.div(".col.work-session")}),b.default.div(".btn-group",function(){return b.default.div(".clock-btn-container"),b.default.button(".calendar-btn.btn.btn-success.fa.fa-calendar","Calendar")}),b.default.div(".row.calendar")}),i=function(){var e=function(e){function t(){return g(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,w.default.View),p(t,[{key:"ui",value:function(){return{calendarBtn:".calendar-btn",workSessionRegion:".work-session",calendarRegion:".calendar",clockBtnRegion:".clock-btn-container"}}},{key:"events",value:function(){return{"click @ui.calendarBtn":"showCalendar"}}},{key:"onRender",value:function(){var e,t,n=this;return this.model,(e=new l).fetch().done(function(){var t;return console.log("clock is",e),t=new a({model:e}),n.showChildView("workSessionRegion",t)}),t=new y.default({model:this.model}),this.showChildView("clockBtnRegion",t)}},{key:"showCalendar",value:function(){var e=this;return console.log("showCalendar"),Promise.all([n.e(3),n.e(5)]).then(function(){var t;return t=new(0,n(206).default),e.showChildView("calendarRegion",t)}.bind(null,n)).catch(n.oe)}}]),t}();return e.prototype.template=f,e.prototype.regions={workSessionRegion:"@ui.workSessionRegion",calendarRegion:"@ui.calendarRegion",clockBtnRegion:"@ui.clockBtnRegion"},e.prototype.childViewEvents={"worker:status:change":"render"},e}.call(void 0),d=b.default.renderable(function(e){return b.default.div(".row.status")}),r=function(){var e=function(e){function t(){return g(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,w.default.View),p(t,[{key:"ui",value:function(){return{status:".status"}}},{key:"onRender",value:function(){var e,t=this;return(e=this.model.fetch()).done(function(){var e;return e=new i({model:t.model}),t.showChildView("status",e)}),e.fail(function(){var e;return e=new u({model:t.model}),t.showChildView("status",e)})}}]),t}();return e.prototype.template=d,e.prototype.regions={status:"@ui.status"},e}.call(void 0),t.default=r},376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,u,a,i,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=d(n(1)),s=d(n(2)),f=d(n(3));d(n(28)),d(n(118)),d(n(5));function d(e){return e&&e.__esModule?e:{default:e}}c.default.Radio.channel("global"),u=c.default.Radio.channel("messages"),o=c.default.Radio.channel("company"),a=o.request("TimeClock"),i={on:"out",off:"in"},r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.View),l(t,[{key:"templateContext",value:function(){}},{key:"onRender",value:function(){return"on"===this.model.get("status")?(this.$el.removeClass("btn-info"),this.$el.addClass("btn-warning")):(this.$el.removeClass("btn-warning"),this.$el.addClass("btn-info"))}},{key:"punchClock",value:function(){var e;return this.model,"off"===(e=this.model.get("status"))||null===e?this.punchIn():"on"===e?this.punchOut():u.request("warning","Bad worker status "+e)}},{key:"punchIn",value:function(){var e,t,n=this;return this.model.get("id"),e=new a,(t=e.save(null,{type:"POST",url:e.urlRoot})).done(function(){return n.updateLocalStatus("on")}),t.fail(function(){return u.request("warning",t.responseJSON.code)})}},{key:"punchOut",value:function(){var e,t,n=this;return t=this.model.get("id"),(e=new a({worker_id:t})).fetch().done(function(){var t;return(t=e.save()).done(function(){return n.updateLocalStatus("off")}),t.fail(function(){return u.request("warning",t.responseJSON.code)})})}},{key:"updateLocalStatus",value:function(e){return this.model.set("status",e),this.render(),this.trigger("worker:status:change")}}]),t}();return e.prototype.tagName="button",e.prototype.className="btn btn-info fa fa-clock-o",e.prototype.template=f.default.renderable(function(e){return f.default.text("Clock "+i[e.status])}),e.prototype.events={click:"punchClock"},e}.call(void 0),t.default=r}}]);
//# sourceMappingURL=company-view-worker-index-921694b25bbe4d12eda0.js.map