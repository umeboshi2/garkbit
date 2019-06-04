(self.webpackJsonp=self.webpackJsonp||[]).push([[90],{101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i,a,u=s(n(1)),l=s(n(2)),c=s(n(3));function s(e){return e&&e.__esModule?e:{default:e}}a=u.default.Radio.channel("messages"),i=c.default.renderable(function(e){return c.default.div(".modal-content",function(){return c.default.div(".modal-header",function(){return c.default.h3(".modal-title",function(){return c.default.text("Do you really want to delete "+e.content.name+"?"),c.default.img({src:e.content.image.medium})}),c.default.button(".close",{type:"button",data:{dismiss:"modal"}},function(){return c.default.span({"aria-hidden":"true"},function(){return c.default.raw("&times")})})}),c.default.div(".modal-body",function(){return c.default.div("#selected-children")}),c.default.div(".modal-footer",function(){return c.default.button(".confirm-delete.btn.btn-primary",{type:"button",data:{dismiss:"modal"}},function(){return c.default.i(".fa.fa-check"),c.default.text("OK")}),c.default.button(".cancel-delete.btn.btn-danger",{type:"button",data:{dismiss:"modal"}},function(){return c.default.i(".fa.fa-close"),c.default.text("Cancel")})})})}),t.default=function(){var e=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.View),o(t,[{key:"events",value:function(){return{"click @ui.confirmDelete":"confirmDelete"}}},{key:"confirmDelete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done(function(){return a.request("success",e+" deleted.")}),t.fail(function(){return a.request("danger",e+" NOT deleted.")})}}]),t);function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=i,e.prototype.className="modal-dialog",e.prototype.ui={confirmDelete:".confirm-delete",cancelButton:".cancel-delete"},e}.call(void 0)},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=n(2);function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}t.default=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,i.Behavior),o(a,[{key:"onSetHeader",value:function(e){return this.ui.header.text(e)}}]),a)},559:function(e,t,n){"use strict";var o,r,i,a,u,l,c,s,f,d=function(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e};function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n(4),o=n(1),a=n(2),f=n(3),s=n(34),n(5).default,n(101).default,u=n(560),l=n(561),o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("tvmaze"),c=n(562).default,f.renderable(function(e){return".btn.btn-sm",f.li(".list-group-item",function(){return f.span(function(){return f.a({href:"#tvmaze/view/show/"+e.id},e.content.name)}),f.span(".btn-group.pull-right",function(){return f.button(".delete-item.btn.btn-sm.btn-danger.fa.fa-close","delete")})})}),f.renderable(function(){return f.div(".listview-header",function(){return f.text("TV Shows")}),f.ul(".list-group")}),r=f.renderable(function(e){return f.article(".document-view.content",function(){return f.div(".body",function(){return f.h1("TV Maze API Demo"),f.div(".search-form.listview-list-entry"),f.div(".search-results"),f.raw(s(c))})})}),i=function(){var e=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.View),d(t,[{key:"doSomething",value:function(e){var t,n;return(n=this.getChildView("searchResults")).ui.header.is(":visible")||n.ui.header.show(),t=n.collection.length+'  results for "'+e.get("tvshow")+'"',n.triggerMethod("set:header",t)}},{key:"onRender",value:function(){var e,t;return t=new u({collection:this.collection}),this.showChildView("searchForm",t),e=new l({collection:this.collection}),this.showChildView("searchResults",e)}}]),t);function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=r,e.prototype.templateContext={appName:"tvmaze"},e.prototype.ui={searchForm:".search-form",searchResults:".search-results"},e.prototype.childViewEvents={"save:form:success":"doSomething"},e.prototype.regions={searchForm:"@ui.searchForm",searchResults:"@ui.searchResults"},e}.call(void 0),e.exports=i},560:function(e,t,n){"use strict";var o,r,i,a,u,l,c,s=function(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e};function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n(4),n(0),o=n(1),n(2),c=n(3),n(34),r=n(35).default,n(5).default;var d=n(33);u=d.form_group_input_div,i=o.Radio.channel("messages"),o.Radio.channel("tvmaze"),l=c.renderable(function(){return u({input_id:"input_show",label:"TV Show",input_attributes:{name:"tv_show",placeholder:"tiny toons"}}),c.input(".btn.btn-primary.btn-sm",{type:"submit",value:"Search"}),c.div(".spinner.fa.fa-spinner.fa-spin.text-primary")}),a=function(){var e=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r),s(t,[{key:"createModel",value:function(){return new o.Model}},{key:"updateModel",value:function(){return this.tvshow=this.ui.tvShow.val(),this.model.set("tvshow",this.tvshow)}},{key:"saveModel",value:function(){var e,t=this;return(e=this.collection.fetch({data:{q:this.tvshow}})).done(function(){return t.trigger("save:form:success",t.model)}),e.fail(function(){return i.request("warning",t.tvshow+" not found."),t.trigger("save:form:failure",t.model)})}}]),t);function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=l,e.prototype.ui={tvShow:'[name="tv_show"]'},e}.call(void 0),e.exports=a},561:function(e,t,n){"use strict";var o,r,i,a,u,l,c,s,f,d,p,h=function(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e};function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r=n(1),a=n(2),p=n(3),n(88),n(89),s=n(5).default,f=n(86).default,i=n(175).default,u=r.Radio.channel("messages"),o=r.Radio.channel("tvmaze"),d=p.renderable(function(e){var t;return t=e.show,p.div(".card.bg-body-d5",function(){return p.div(".row",function(){return p.div(".col-md-2",function(){var e;return(null!=(e=t.image)?e.medium:void 0)?p.img(".main-image.card-img-bottom",{src:t.image.medium}):f("5x")}),p.div(".col-md-9",function(){return p.div(".card-block.bg-body-d10",function(){return p.h3(".card-title",t.name),p.h4("Premiered: "+new Date(t.premiered).toDateString()),p.raw(t.summary)}),p.button(".select-show.btn.btn-primary",{style:"display:none"},"Select this show")})})})}),c=function(){var e=(y(t,a.View),h(t,[{key:"inLocalCollection",value:function(){var e;return e=this.model.toJSON().show.id,this.getOption("localCollection").get(e)}},{key:"onRender",value:function(){if(!this.inLocalCollection())return this.ui.selectShow.show()}},{key:"handleImageHover",value:function(){if(this.inLocalCollection())return this.ui.mainImage.css({cursor:"pointer"})}},{key:"viewShow",value:function(){var e;return e=this.model.toJSON().show.id,s("#tvmaze/shows/view/"+e)}},{key:"selectShow",value:function(){var t,e,n;return t=this.model.toJSON().show.id,(e=(n=o.request("get-remote-show",t)).fetch()).done(function(){return o.request("save-local-show",n.toJSON()).then(function(e){return s("#tvmaze/shows/view/"+t)})}),e.fail(function(){return u.request("danger","Bad move")})}}]),t);function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=d,e.prototype.ui={selectShow:".select-show",mainImage:".main-image"},e.prototype.events={"click @ui.selectShow":"selectShow","mouseenter @ui.mainImage":"handleImageHover","click @ui.mainImage":"viewShow"},e}.call(void 0),l=function(){var e=(y(t,a.View),h(t,[{key:"onRender",value:function(){var e;return this.ui.header.hide(),e=new a.CollectionView({collection:this.collection,childView:c,childViewOptions:{localCollection:o.request("get-local-tvshows")}}),this.showChildView("itemList",e)}}]),t);function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=p.renderable(function(e){return p.div(".listview-header",function(){return p.text("Matched TV Shows")}),p.div(".show-list")}),e.prototype.ui={header:".listview-header",itemList:".show-list"},e.prototype.regions={itemList:"@ui.itemList"},e.prototype.behaviors={HasHeader:{behaviorClass:i}},e}.call(void 0),e.exports=l},562:function(e,t,n){"use strict";n.r(t),t.default="\n\nYou can **search** for a TV show, or go directly \nto the [list of shows](#tvmaze/shows).\n\n"},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(3),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default.renderable(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"5x";return i.default.span(".fa-stack.fa-"+e,function(){return i.default.i(".fa.fa-image.fa-stack-1x"),i.default.i(".fa.fa-ban.fa-stack-2x.text-danger")})})}}]);
//# sourceMappingURL=tvmaze-view-index-feb4cfe32ac5429cf1fa.js.map