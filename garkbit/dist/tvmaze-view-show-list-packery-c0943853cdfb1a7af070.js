(self.webpackJsonp=self.webpackJsonp||[]).push([[61],{104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=c(n(1)),l=c(n(2)),u=c(n(3));function c(e){return e&&e.__esModule?e:{default:e}}r=a.default.Radio.channel("messages"),o=u.default.renderable(function(e){return u.default.div(".modal-content",function(){return u.default.div(".modal-header",function(){return u.default.h3(".modal-title",function(){return u.default.text("Do you really want to delete "+e.content.name+"?"),u.default.img({src:e.content.image.medium})}),u.default.button(".close",{type:"button",data:{dismiss:"modal"}},function(){return u.default.span({"aria-hidden":"true"},function(){return u.default.raw("&times")})})}),u.default.div(".modal-body",function(){return u.default.div("#selected-children")}),u.default.div(".modal-footer",function(){return u.default.button(".confirm-delete.btn.btn-primary",{type:"button",data:{dismiss:"modal"}},function(){return u.default.i(".fa.fa-check"),u.default.text("OK")}),u.default.button(".cancel-delete.btn.btn-danger",{type:"button",data:{dismiss:"modal"}},function(){return u.default.i(".fa.fa-close"),u.default.text("Cancel")})})})}),t.default=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.View),i(t,[{key:"events",value:function(){return{"click @ui.confirmDelete":"confirmDelete"}}},{key:"confirmDelete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done(function(){return r.request("success",e+" deleted.")}),t.fail(function(){return r.request("danger",e+" NOT deleted.")})}}]),t}();return e.prototype.template=o,e.prototype.className="modal-dialog",e.prototype.ui={confirmDelete:".confirm-delete",cancelButton:".cancel-delete"},e}.call(void 0)},125:function(e,t,n){"use strict";var o,r,i,a,l;l=n(3),n(29),a=n(86).default,r="width:20%;border-style:solid;border-width:3px",o="col-md-3.bg-body-d5",i=l.renderable(function(e){var t;return r=e.divStyle||r,o=e.cardClasses||o,t="#tvmaze/view/show/"+e.id,".btn.btn-sm",l.div(".show-item.card."+o,{style:r},function(){return l.div(".card-header",function(){var t;return l.strong(".card-title",null!=e&&null!=(t=e.content)?t.name:void 0)}),l.div(".card-block",function(){return l.a({href:t},function(){var t,n,o,r;return(null!=(t=e.content)&&null!=(n=t.image)?n.medium:void 0)?l.img(".card-img-bottom",{src:null!=(o=e.content)&&null!=(r=o.image)?r.medium:void 0}):a("4x")})})})}),e.exports=i},474:function(e,t,n){"use strict";var o,r,i,a,l,u,c,s,f,d,p,h,m,y,b,v=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(4),o=n(1),s=n(2),y=n(3),h=n(29),n(172).default,i=n(475).default,n(86).default,f=n(93).default,m=n(6).default,r=n(104).default,d=n(125),c=o.Radio.channel("global"),o.Radio.channel("messages"),p=y.renderable(function(){return console.log("SHOW ME"),y.div(".listview-header",function(){return y.text("TV Shows")}),y.nav(".paginate-bar"),y.button(".flat-list.btn.btn-info","Show flat list"),y.div(".show-list")}),l=function(){var e=function(e){function t(){return w(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,s.View),v(t,[{key:"showRole",value:function(e){return e.preventDefault(),m("#tvmaze/shows/view/"+this.model.id)}},{key:"_show_modal",value:function(e,t){var n;return(n=c.request("main:app:object").getView().getRegion("modal")).backdrop=t,n.show(e)}},{key:"deleteItem",value:function(){var e;return e=new r({model:this.model}),this._show_modal(e,!0)}}]),t}();return e.prototype.template=d,e.prototype.ui={item:".show-item",link:"a",deleteItem:".delete-item"},e.prototype.events={"click @ui.link":"showRole","click @ui.deleteItem":"deleteItem"},e}.call(void 0),a=function(){var e=function(e){function t(){return w(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,s.CollectionView),t}();return e.prototype.childView=l,e}.call(void 0),u=function(){var e=function(e){function t(){return w(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,s.View),v(t,[{key:"ui",value:function(){return{header:".listview-header",itemList:".show-list",flatListButton:".flat-list",paginateBar:".paginate-bar"}}},{key:"onRender",value:function(){var e,t;return t=new a({collection:this.collection}),this.showChildView("itemList",t),e=new f({collection:this.collection}),this.showChildView("paginateBar",e)}},{key:"onBeforeDestroy",value:function(){return this.collection.off("pageable:state:change")}},{key:"showFlatList",value:function(){return m("#tvmaze/shows/flat")}}]),t}();return e.prototype.template=p,e.prototype.options={listContainer:".show-list"},e.prototype.regions={paginateBar:"@ui.paginateBar",itemList:"@ui.itemList"},e.prototype.events={"click @ui.flatListButton":"showFlatList"},e.prototype.behaviors={HasPackeryView:{behaviorClass:i,listContainer:".show-list",hasPageableCollection:!0,packeryOptions:{itemSelector:".show-item",isInitLayout:!1,horizontalOrder:!0,columnWidth:100,stagger:30}}},e}.call(void 0),b=y.renderable(function(e){return y.div(".row.listview-list-entry",function(){return y.raw(h("# "+e.appName+" started."))})}),function(){var e=function(e){function t(){return w(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,s.View),t}();return e.prototype.template=b,e.prototype.templateContext={appName:"tvmaze"},e}.call(void 0),e.exports=u}}]);
//# sourceMappingURL=tvmaze-view-show-list-packery-c0943853cdfb1a7af070.js.map