(self.webpackJsonp=self.webpackJsonp||[]).push([[40],{176:function(e,t,n){},177:function(e,t,n){e.exports=function(){return new Worker(n.p+"78e4cc3ea6dcef896702.worker.js")}},217:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=v(n(1)),a=v(n(2)),l=v(n(3)),u=(v(n(32)),n(170)),c=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n(175));n(176);var s,f,p,d,y,h,b,m,w=v(n(177));function v(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}u.Terminal.applyAddon(c),new w.default;var k=n(5);b=k.navigate_to_url,i.default.Radio.channel("messages"),i.default.Radio.channel("eliza"),m=[{id:"destroy",label:"close",icon:".fa.fa-close",buttonClassName:"btn btn-danger text-light"},{id:"create",label:"Talk to Eliza",icon:".fa.fa-terminal.text-light.bg-dark"}],h=l.default.renderable(function(e){return l.default.i(e.icon),l.default.text(" "),l.default.text(e.label)}),y="btn btn-outline-primary",f=function(){var e=(O(t,a.default.View),r(t,[{key:"className",value:function(){return this.model.get("buttonClassName")||this.getOption("buttonClassName")||y}}]),t);function t(){return _(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.tagName="button",e.prototype.triggers={click:"button:clicked"},e.prototype.modelEvents={change:"render"},e}.call(void 0),p=function(){var e=(O(t,a.default.CollectionView),r(t,[{key:"childViewOptions",value:function(){return{template:this.getOption("entryTemplate"),buttonClassName:this.getOption("buttonClassName")}}}]),t);function t(){return _(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.childView=f,e.prototype.className="btn-group btn-group-justified",e.prototype.childViewTriggers={"button:clicked":"toolbar:entry:clicked"},e}.call(void 0),d=function(){var e=(O(t,a.default.View),r(t,[{key:"onRender",value:function(){var e,t,n;return t=this.getOption("entryTemplate")||h,e=this.getOption("buttonClassName")||y,n=new p({collection:this.collection,entryTemplate:t,buttonClassName:e}),this.showChildView("entries",n)}},{key:"onChildviewToolbarEntryClicked",value:function(e){return b(e.model.get("url"))}}]),t);function t(){return _(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=l.default.renderable(function(){return l.default.div(".toolbar-entries")}),e.prototype.regions={entries:{el:".toolbar-entries"}},e}.call(void 0),s=function(){var e=(O(t,d),t);function t(){return _(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.collection=new i.default.Collection(m),e.prototype.childViewTriggers={"toolbar:entry:clicked":"toolbar:entry:clicked"},e.prototype.buttonClassName="btn btn-outline-success",e}.call(void 0),t.default=s},421:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=w(n(1)),a=w(n(2)),l=w(n(3)),u=w(n(32)),c=(w(n(88)),w(n(217))),s=w(n(458)),f=n(170),p=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n(175));n(176);var d,y,h,b=w(n(177)),m=w(n(459));function w(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}f.Terminal.applyAddon(p),new b.default,n(5).navigate_to_url,y=i.default.Radio.channel("messages"),i.default.Radio.channel("eliza"),function(){var e=(g(t,a.default.View),t);function t(){return v(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=l.default.renderable(function(e){return l.default.article(function(){return l.default.raw((0,u.default)(m.default))})}),e}.call(void 0),h=l.default.renderable(function(e){return l.default.div(".row.listview-header.justify-content-center","ELIZA Terminal"),l.default.div(".row.intro"),l.default.div(".row.justify-content-center",function(){return l.default.div(".terminal-container.col-md-10")}),l.default.div(".row.toolbar")}),d=function(){var e=(g(t,a.default.View),r(t,[{key:"onRender",value:function(){var e,t;return t=new c.default,this.showChildView("toolbar",t),e=new a.default.View({template:l.default.renderable(function(e){return l.default.raw((0,u.default)(m.default))})}),this.showChildView("intro",e)}},{key:"toolbarClicked",value:function(e){var t;return"create"===(t=e.model.id)?this.createTerminal():"destroy"===t?this.destroyTerminal():y.request("warning","Bad action "+t)}},{key:"createTerminal",value:function(){var e;return e=new s.default,this.showChildView("terminal",e),this.getChildView("terminal").startTerminal()}},{key:"destroyTerminal",value:function(){var e;if(e=this.getChildView("terminal"))return e.terminal.dispose(),e.destroy()}}]),t);function t(){return v(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=h,e.prototype.templateContext={appName:"eliza"},e.prototype.ui={toolbar:".toolbar",terminal:".terminal-container",intro:".intro"},e.prototype.regions={toolbar:"@ui.toolbar",terminal:"@ui.terminal",intro:"@ui.intro"},e.prototype.childViewEvents={"toolbar:entry:clicked":"toolbarClicked"},e}.call(void 0),t.default=d},458:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=y(n(1)),a=y(n(2)),l=(y(n(3)),y(n(32)),y(n(88)),y(n(217)),n(170)),u=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n(175));n(176);var c,s,f,p,d=y(n(177));function y(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function w(){return h(this,w),b(this,(w.__proto__||Object.getPrototypeOf(w)).apply(this,arguments))}l.Terminal.applyAddon(u),p=new d.default,n(5).navigate_to_url,i.default.Radio.channel("messages"),i.default.Radio.channel("eliza"),m(w,l.Terminal),r(w,[{key:"prompt",value:function(){this.write("\r\n->")}}]),c=w,f=function(){var r,o;return o=new c,r="",o.on("key",function(e,t){var n;if(n=!(t.altKey||t.altGraphKey||t.ctrlKey||t.metaKey),13===t.keyCode)return o.write("\r\n"),p.postMessage({content:r}),r="";if(8===t.keyCode){if(r.length)return o.write("\b \b"),r=r.slice(0,-1)}else if(n)return o.write(e),r+=e}),o},s=function(){var e=(m(t,a.default.View),r(t,[{key:"startTerminal",value:function(){var t=this;return this.terminal=f(),this.terminal.open(this.el),this.terminal.setOption("fontSize",14),this.terminal.setOption("fontFamily","Mono"),this.terminal.resize(80,15),this.terminal.fit(),console.log("@terminal",this.terminal),p.onmessage=function(e){return t.terminal.write(e.data.content),t.terminal.prompt()},p.postMessage({content:"getInitial"})}},{key:"onBeforeDestroy",value:function(){if(this.terminal)return this.terminal.dispose(),console.log("Terminal disposed.")}}]),t);function t(){return h(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=!1,e.prototype.className="my-xterm",e.prototype.ui={terminal:".my-xterm"},e}.call(void 0),t.default=s},459:function(e,t,n){"use strict";n.r(t),t.default='## ELIZA\n\nEliza is a very old program that simulates a conversation, created \nto "demonstrate that the communication between man and machine \nwas superficial" ([wikipedia](https://en.wikipedia.org/wiki/ELIZA)).  The \n[elizabot](https://www.masswerk.at/elizabot/) javascript implementation is \nbeing used in this demo.\n'}}]);
//# sourceMappingURL=eliza-view-index-ee3910816701f7a5d1ea.js.map