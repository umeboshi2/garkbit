(self.webpackJsonp=self.webpackJsonp||[]).push([[38],{167:function(e,t,n){},168:function(e,t,n){e.exports=function(){return new Worker(n.p+"59f3c6b9e24299edc265.worker.js")}},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),o=w(n(1)),i=w(n(2)),a=w(n(3)),l=(w(n(35)),n(162)),u=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n(166));n(167);var c,s,f,p,d,y,h,b,m=w(n(168));function w(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}l.Terminal.applyAddon(u),new m.default;var O=n(5);h=O.navigate_to_url,o.default.Radio.channel("messages"),o.default.Radio.channel("eliza"),b=[{id:"destroy",label:"close",icon:".fa.fa-close",buttonClassName:"btn btn-danger text-light"},{id:"create",label:"Talk to Eliza",icon:".fa.fa-terminal.text-light.bg-dark"}],y=a.default.renderable(function(e){return a.default.i(e.icon),a.default.text(" "),a.default.text(e.label)}),d="btn btn-outline-primary",s=function(){var e=function(e){function t(){return v(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,i.default.View),r(t,[{key:"className",value:function(){var e;return(e=this.model.get("buttonClassName"))||(e=this.getOption("buttonClassName")||d),e}}]),t}();return e.prototype.tagName="button",e.prototype.triggers={click:"button:clicked"},e.prototype.modelEvents={change:"render"},e}.call(void 0),f=function(){var e=function(e){function t(){return v(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,i.default.CollectionView),r(t,[{key:"childViewOptions",value:function(){return{template:this.getOption("entryTemplate"),buttonClassName:this.getOption("buttonClassName")}}}]),t}();return e.prototype.childView=s,e.prototype.className="btn-group btn-group-justified",e.prototype.childViewTriggers={"button:clicked":"toolbar:entry:clicked"},e}.call(void 0),p=function(){var e=function(e){function t(){return v(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,i.default.View),r(t,[{key:"onRender",value:function(){var e,t,n;return t=this.getOption("entryTemplate")||y,e=this.getOption("buttonClassName")||d,n=new f({collection:this.collection,entryTemplate:t,buttonClassName:e}),this.showChildView("entries",n)}},{key:"onChildviewToolbarEntryClicked",value:function(e){return h(e.model.get("url"))}}]),t}();return e.prototype.template=a.default.renderable(function(){return a.default.div(".toolbar-entries")}),e.prototype.regions={entries:{el:".toolbar-entries"}},e}.call(void 0),c=function(){var e=function(e){function t(){return v(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,p),t}();return e.prototype.collection=new o.default.Collection(b),e.prototype.childViewTriggers={"toolbar:entry:clicked":"toolbar:entry:clicked"},e.prototype.buttonClassName="btn btn-outline-success",e}.call(void 0),t.default=c},393:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),o=m(n(1)),i=m(n(2)),a=m(n(3)),l=m(n(35)),u=(m(n(85)),m(n(211))),c=m(n(427)),s=n(162),f=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n(166));n(167);var p,d,y,h=m(n(168)),b=m(n(428));function m(e){return e&&e.__esModule?e:{default:e}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}s.Terminal.applyAddon(f),new h.default,n(5).navigate_to_url,d=o.default.Radio.channel("messages"),o.default.Radio.channel("eliza"),function(){var e=function(e){function t(){return w(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,i.default.View),t}();return e.prototype.template=a.default.renderable(function(e){return a.default.article(function(){return a.default.raw((0,l.default)(b.default))})}),e}.call(void 0),y=a.default.renderable(function(e){return a.default.div(".row.listview-header.justify-content-center","ELIZA Terminal"),a.default.div(".row.intro"),a.default.div(".row.justify-content-center",function(){return a.default.div(".terminal-container.col-md-10")}),a.default.div(".row.toolbar")}),p=function(){var e=function(e){function t(){return w(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,i.default.View),r(t,[{key:"onRender",value:function(){var e,t;return t=new u.default,this.showChildView("toolbar",t),e=new i.default.View({template:a.default.renderable(function(e){return a.default.raw((0,l.default)(b.default))})}),this.showChildView("intro",e)}},{key:"toolbarClicked",value:function(e){var t;return"create"===(t=e.model.id)?this.createTerminal():"destroy"===t?this.destroyTerminal():d.request("warning","Bad action "+t)}},{key:"createTerminal",value:function(){var e;return e=new c.default,this.showChildView("terminal",e),this.getChildView("terminal").startTerminal()}},{key:"destroyTerminal",value:function(){var e;if(e=this.getChildView("terminal"))return e.terminal.dispose(),e.destroy()}}]),t}();return e.prototype.template=y,e.prototype.templateContext={appName:"eliza"},e.prototype.ui={toolbar:".toolbar",terminal:".terminal-container",intro:".intro"},e.prototype.regions={toolbar:"@ui.toolbar",terminal:"@ui.terminal",intro:"@ui.intro"},e.prototype.childViewEvents={"toolbar:entry:clicked":"toolbarClicked"},e}.call(void 0),t.default=p},427:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),o=d(n(1)),i=d(n(2)),a=(d(n(3)),d(n(35)),d(n(85)),d(n(211)),n(162)),l=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n(166));n(167);var u,c,s,f,p=d(n(168));function d(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a.Terminal.applyAddon(l),f=new p.default,n(5).navigate_to_url,o.default.Radio.channel("messages"),o.default.Radio.channel("eliza"),u=function(e){function t(){return y(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,a.Terminal),r(t,[{key:"prompt",value:function(){this.write("\r\n->")}}]),t}(),s=function(){var r,o;return o=new u,r="",o.on("key",function(e,t){var n;if(n=!(t.altKey||t.altGraphKey||t.ctrlKey||t.metaKey),13===t.keyCode)return o.write("\r\n"),f.postMessage({content:r}),r="";if(8===t.keyCode){if(r.length)return o.write("\b \b"),r=r.slice(0,-1)}else if(n)return o.write(e),r+=e}),o},c=function(){var e=function(e){function t(){return y(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,i.default.View),r(t,[{key:"startTerminal",value:function(){var t=this;return this.terminal=s(),this.terminal.open(this.el),this.terminal.setOption("fontSize",14),this.terminal.setOption("fontFamily","Mono"),this.terminal.resize(80,15),this.terminal.fit(),console.log("@terminal",this.terminal),f.onmessage=function(e){return t.terminal.write(e.data.content),t.terminal.prompt()},f.postMessage({content:"getInitial"})}},{key:"onBeforeDestroy",value:function(){if(this.terminal)return this.terminal.dispose(),console.log("Terminal disposed.")}}]),t}();return e.prototype.template=!1,e.prototype.className="my-xterm",e.prototype.ui={terminal:".my-xterm"},e}.call(void 0),t.default=c},428:function(e,t){e.exports='## ELIZA\n\nEliza is a very old program that simulates a conversation, created \nto "demonstrate that the communication between man and machine \nwas superficial" ([wikipedia](https://en.wikipedia.org/wiki/ELIZA)).  The \n[elizabot](https://www.masswerk.at/elizabot/) javascript implementation is \nbeing used in this demo.\n'}}]);
//# sourceMappingURL=eliza-view-index-7a661964bf1eb2cc9716.js.map