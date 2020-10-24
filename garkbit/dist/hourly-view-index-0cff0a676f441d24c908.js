(self.webpackJsonp=self.webpackJsonp||[]).push([[52],{1049:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,r,o,u,a,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),l=n(1),c=n(3),f=p(n(6)),j=p(n(224)),d=p(n(1050));function p(t){return t&&t.__esModule?t:{default:t}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r=l.Radio.channel("messages"),o=function(){var t=function(t){function e(){return h(this,e),b(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,t),e}(c.View);return t.prototype.template=f.default.renderable((function(){return f.default.div(".row.listview-list-entry",(function(){return f.default.text("You are not a worker.")}))})),t}.call(void 0),u=function(){var t=function(t){function e(){return h(this,e),b(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,t),i(e,[{key:"onSomething",value:function(){var t;t=this.model.get("id"),new d.default({worker_id:t})}}]),e}(c.View);return t.prototype.template=f.default.renderable((function(t){return f.default.div((function(){var e,n,s,r;return n=t.session,"off"===(r=t.worker.status)&&n.end?(e=(0,j.default)(n.end),f.default.text("Your last session ended "+e.fromNow())):"on"===r?(s=(0,j.default)(n.start),f.default.text("You have been working since "+s.fromNow())):void 0}))})),t}.call(void 0),a=function(){var t=function(t){function e(){return h(this,e),b(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,t),i(e,[{key:"ui",value:function(){return{clockBtn:".clock-btn",workSessionRegion:".work-session"}}},{key:"events",value:function(){return{"click @ui.clockBtn":"punchClock"}}},{key:"onRender",value:function(){var t,e=this;return(t=new d.default).fetch().done((function(){var n;return n=new u({model:t}),e.showChildView("workSessionRegion",n)}))}},{key:"punchClock",value:function(){var t;return"off"===(t=this.model.get("status"))||null===t?this.punchIn():"on"===t?this.punchOut():r.request("warning","Bad worker status "+t)}},{key:"punchIn",value:function(){var t,e,n=this;return t=new d.default,(e=t.save(null,{type:"POST",url:t.urlRoot})).done((function(){return n.updateLocalStatus("on")})),e.fail((function(){return r.request("warning",e.responseJSON.code)}))}},{key:"punchOut",value:function(){var t,e,n=this;return e=this.model.get("id"),(t=new d.default({worker_id:e})).fetch().done((function(){var e;return(e=t.save()).done((function(){return n.updateLocalStatus("off")})),e.fail((function(){return r.request("warning",e.responseJSON.code)}))}))}},{key:"updateLocalStatus",value:function(t){return this.model.set("status",t),this.render()}}]),e}(c.View);return t.prototype.template=f.default.renderable((function(t){var e;return f.default.div(".row.listview-list-entry",(function(){return f.default.text(t.user.fullname+" is a worker.")})),f.default.div(".row.listview-list-entry.work-session"),e={action:"in",btnClass:".clock-btn.btn.btn-info.fa.fa-clock-o"},null===t.status&&f.default.div(".row.listview-list-entry",(function(){return f.default.text(t.user.fullname+" has never clocked in.")})),"on"===t.status&&(e.action="out",e.btnClass=".clock-btn.btn.btn-warning.fa.fa-clock-o"),f.default.div(".row",(function(){return f.default.button(e.btnClass,(function(){return f.default.text("Clock "+e.action)}))}))})),t.prototype.regions={workSessionRegion:"@ui.workSessionRegion"},t}.call(void 0),s=function(){var t=function(t){function e(){return h(this,e),b(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,t),i(e,[{key:"ui",value:function(){return{status:".status"}}},{key:"onRender",value:function(){var t,e=this;return(t=this.model.fetch()).done((function(){var t;return t=new a({model:e.model}),e.showChildView("status",t)})),t.fail((function(){var t;return t=new o({model:e.model}),e.showChildView("status",t)}))}}]),e}(c.View);return t.prototype.template=f.default.renderable((function(){return f.default.div(".row.status")})),t.prototype.regions={status:"@ui.status"},t.prototype.templateContext={appName:"hourly"},t}.call(void 0),e.default=s},1050:function(t,e,n){"use strict";var s,r,o;function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),r=n(1).Radio.channel("global"),s=r.request("main:app:AuthModel"),o=function(){var t=function(t){function e(){return u(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(s);return t.prototype.urlRoot="/api/dev/hourly/time-clock",t}.call(void 0),e.default=o},405:function(t,e,n){var s={"./af":239,"./af.js":239,"./ar":240,"./ar-dz":241,"./ar-dz.js":241,"./ar-kw":242,"./ar-kw.js":242,"./ar-ly":243,"./ar-ly.js":243,"./ar-ma":244,"./ar-ma.js":244,"./ar-sa":245,"./ar-sa.js":245,"./ar-tn":246,"./ar-tn.js":246,"./ar.js":240,"./az":247,"./az.js":247,"./be":248,"./be.js":248,"./bg":249,"./bg.js":249,"./bm":250,"./bm.js":250,"./bn":251,"./bn-bd":252,"./bn-bd.js":252,"./bn.js":251,"./bo":253,"./bo.js":253,"./br":254,"./br.js":254,"./bs":255,"./bs.js":255,"./ca":256,"./ca.js":256,"./cs":257,"./cs.js":257,"./cv":258,"./cv.js":258,"./cy":259,"./cy.js":259,"./da":260,"./da.js":260,"./de":261,"./de-at":262,"./de-at.js":262,"./de-ch":263,"./de-ch.js":263,"./de.js":261,"./dv":264,"./dv.js":264,"./el":265,"./el.js":265,"./en-au":266,"./en-au.js":266,"./en-ca":267,"./en-ca.js":267,"./en-gb":268,"./en-gb.js":268,"./en-ie":269,"./en-ie.js":269,"./en-il":270,"./en-il.js":270,"./en-in":271,"./en-in.js":271,"./en-nz":272,"./en-nz.js":272,"./en-sg":273,"./en-sg.js":273,"./eo":274,"./eo.js":274,"./es":275,"./es-do":276,"./es-do.js":276,"./es-mx":277,"./es-mx.js":277,"./es-us":278,"./es-us.js":278,"./es.js":275,"./et":279,"./et.js":279,"./eu":280,"./eu.js":280,"./fa":281,"./fa.js":281,"./fi":282,"./fi.js":282,"./fil":283,"./fil.js":283,"./fo":284,"./fo.js":284,"./fr":285,"./fr-ca":286,"./fr-ca.js":286,"./fr-ch":287,"./fr-ch.js":287,"./fr.js":285,"./fy":288,"./fy.js":288,"./ga":289,"./ga.js":289,"./gd":290,"./gd.js":290,"./gl":291,"./gl.js":291,"./gom-deva":292,"./gom-deva.js":292,"./gom-latn":293,"./gom-latn.js":293,"./gu":294,"./gu.js":294,"./he":295,"./he.js":295,"./hi":296,"./hi.js":296,"./hr":297,"./hr.js":297,"./hu":298,"./hu.js":298,"./hy-am":299,"./hy-am.js":299,"./id":300,"./id.js":300,"./is":301,"./is.js":301,"./it":302,"./it-ch":303,"./it-ch.js":303,"./it.js":302,"./ja":304,"./ja.js":304,"./jv":305,"./jv.js":305,"./ka":306,"./ka.js":306,"./kk":307,"./kk.js":307,"./km":308,"./km.js":308,"./kn":309,"./kn.js":309,"./ko":310,"./ko.js":310,"./ku":311,"./ku.js":311,"./ky":312,"./ky.js":312,"./lb":313,"./lb.js":313,"./lo":314,"./lo.js":314,"./lt":315,"./lt.js":315,"./lv":316,"./lv.js":316,"./me":317,"./me.js":317,"./mi":318,"./mi.js":318,"./mk":319,"./mk.js":319,"./ml":320,"./ml.js":320,"./mn":321,"./mn.js":321,"./mr":322,"./mr.js":322,"./ms":323,"./ms-my":324,"./ms-my.js":324,"./ms.js":323,"./mt":325,"./mt.js":325,"./my":326,"./my.js":326,"./nb":327,"./nb.js":327,"./ne":328,"./ne.js":328,"./nl":329,"./nl-be":330,"./nl-be.js":330,"./nl.js":329,"./nn":331,"./nn.js":331,"./oc-lnc":332,"./oc-lnc.js":332,"./pa-in":333,"./pa-in.js":333,"./pl":334,"./pl.js":334,"./pt":335,"./pt-br":336,"./pt-br.js":336,"./pt.js":335,"./ro":337,"./ro.js":337,"./ru":338,"./ru.js":338,"./sd":339,"./sd.js":339,"./se":340,"./se.js":340,"./si":341,"./si.js":341,"./sk":342,"./sk.js":342,"./sl":343,"./sl.js":343,"./sq":344,"./sq.js":344,"./sr":345,"./sr-cyrl":346,"./sr-cyrl.js":346,"./sr.js":345,"./ss":347,"./ss.js":347,"./sv":348,"./sv.js":348,"./sw":349,"./sw.js":349,"./ta":350,"./ta.js":350,"./te":351,"./te.js":351,"./tet":352,"./tet.js":352,"./tg":353,"./tg.js":353,"./th":354,"./th.js":354,"./tk":355,"./tk.js":355,"./tl-ph":356,"./tl-ph.js":356,"./tlh":357,"./tlh.js":357,"./tr":358,"./tr.js":358,"./tzl":359,"./tzl.js":359,"./tzm":360,"./tzm-latn":361,"./tzm-latn.js":361,"./tzm.js":360,"./ug-cn":362,"./ug-cn.js":362,"./uk":363,"./uk.js":363,"./ur":364,"./ur.js":364,"./uz":365,"./uz-latn":366,"./uz-latn.js":366,"./uz.js":365,"./vi":367,"./vi.js":367,"./x-pseudo":368,"./x-pseudo.js":368,"./yo":369,"./yo.js":369,"./zh-cn":370,"./zh-cn.js":370,"./zh-hk":371,"./zh-hk.js":371,"./zh-mo":372,"./zh-mo.js":372,"./zh-tw":373,"./zh-tw.js":373};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id=405}}]);
//# sourceMappingURL=hourly-view-index-0cff0a676f441d24c908.js.map