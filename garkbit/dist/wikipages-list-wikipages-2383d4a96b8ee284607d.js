(self.webpackJsonp=self.webpackJsonp||[]).push([[119],{100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.base_list_template=t.base_item_template=void 0;var r,o,i=u(n(3)),a=(u(n(32)),n(31),u(n(16)));function u(e){return e&&e.__esModule?e:{default:e}}t.base_item_template=r=function(e,t){return i.default.renderable(function(n){var r;return r=".btn.btn-secondary.btn-sm",i.default.li(".list-group-item."+e+"-item",function(){return i.default.span(function(){return i.default.a({href:"#"+t+"/"+e+"s/view/"+n.id},n.name)}),i.default.span(".btn-group.pull-right",function(){return i.default.button(".edit-item."+r+".btn-info.fa.fa-edit","edit"),i.default.button(".delete-item."+r+".btn-danger.fa.fa-close","delete")})})})},t.base_list_template=o=function(e){return i.default.renderable(function(t){return i.default.div(".listview-header",function(){return i.default.text((0,a.default)(e))}),i.default.hr(),i.default.ul("#"+e+"-container.list-group")})},t.base_item_template=r,t.base_list_template=o},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseListView=t.BaseItemView=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=y(n(1)),i=n(2),a=y(n(3)),u=y(n(5));n(11);var l,s,c,f,d,p,h=n(17);function y(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}d=o.default.Radio.channel("global"),p=o.default.Radio.channel("messages"),f=a.default.renderable(function(e){return a.default.div(".modal-dialog",function(){return a.default.div(".modal-content",function(){return a.default.h3("Do you really want to delete "+e.name+"?"),a.default.div(".modal-body",function(){return a.default.div("#selected-children")}),a.default.div(".modal-footer",function(){return a.default.ul(".list-inline",function(){return"btn.btn-secondary.btn-sm",a.default.li("#confirm-delete-button",function(){return(0,h.modal_close_button)("OK","check")}),a.default.li("#cancel-delete-button",function(){return(0,h.modal_close_button)("Cancel")})})})})})}),c=function(){var e=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,i.View),r(t,[{key:"events",value:function(){return{"click @ui.confirm_delete":"confirm_delete"}}},{key:"confirm_delete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done(function(){return p.request("success",e+" deleted.")}),t.fail(function(){return p.request("danger",e+" NOT deleted.")})}}]),t}();return e.prototype.template=f,e.prototype.ui={confirm_delete:"#confirm-delete-button",cancel_button:"#cancel-delete-button"},e}.call(void 0),t.BaseItemView=l=function(){var e=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,i.View),r(t,[{key:"events",value:function(){return{"click @ui.edit_item":"edit_item","click @ui.delete_item":"delete_item"}}},{key:"edit_item",value:function(){return(0,u.default)("#"+this.route_name+"/"+this.item_type+"s/edit/"+this.model.id)}},{key:"delete_item",value:function(){var e;return e=new c({model:this.model}),show_modal(e,!0),d.request("main:app:show-modal",e,{backdrop:!0})}}]),t}();return e.prototype.ui={edit_item:".edit-item",delete_item:".delete-item",item:".list-item"},e}.call(void 0),t.BaseListView=s=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,i.View),r(t,[{key:"regions",value:function(){return{itemlist:"#"+this.item_type+"-container"}}},{key:"ui",value:function(){return{make_new_item:"#new-"+this.item_type}}},{key:"onRender",value:function(){var e;return e=new i.CollectionView({collection:this.collection,childView:this.childView}),this.showChildView("itemlist",e)}},{key:"events",value:function(){return{"click @ui.make_new_item":"make_new_item"}}},{key:"_show_modal",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(t=d.request("main:app:get-region","modal")).backdrop=n,t.show(e)}},{key:"make_new_item",value:function(){return(0,u.default)("#"+this.route_name+"/"+this.item_type+"s/new")}}]),t}(),t.BaseItemView=l,t.BaseListView=s},757:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a,u,l,s,c,f,d,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r=n(1),u=n(2),d=n(3),n(100),n(125),f=n(5).default,n(16).default,l=n(99).default,n(758),r.Radio.channel("global"),r.Radio.channel("messages"),r.Radio.channel("wikipages"),s=d.renderable(function(e){return d.li(".list-group-item.bg-body-d5",function(){return d.span(function(){return d.a({href:""},e.name)})})}),c=d.renderable(function(){return d.div(".listview-header",function(){return d.text("Wikipages")}),d.div(".paginate-bar"),d.ul(".list-group")}),i=function(){var e=function(e){function t(){return h(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,u.View),p(t,[{key:"showItem",value:function(e){return e.preventDefault(),f("#wikipages/view/"+this.model.get("name"))}}]),t}();return e.prototype.template=s,e.prototype.ui={item:".list-group-item",link:"a"},e.prototype.events={"click @ui.link":"showItem"},e}.call(void 0),o=function(){var e=function(e){function t(){return h(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,u.CollectionView),t}();return e.prototype.childView=i,e}.call(void 0),a=function(){var e=function(e){function t(){return h(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,u.View),p(t,[{key:"onRender",value:function(){var e;return e=new o({collection:this.collection}),console.log("View",e),this.showChildView("itemList",e),e=new l({collection:this.collection,setKeyHandler:!0}),this.showChildView("paginateBar",e)}}]),t}();return e.prototype.template=c,e.prototype.ui={header:".listview-header",itemList:".list-group",paginateBar:".paginate-bar"},e.prototype.regions={itemList:"@ui.itemList",paginateBar:"@ui.paginateBar",navBox:".navbox"},e}.call(void 0),t.default=a},758:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o,i,a,u;o=n(4),n(1),a=n(2),u=n(759),i=function(){var e=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Behavior),r(t,[{key:"handle_key_command",value:function(e){if("prev"===e||"next"===e)return this.get_another_page(e)}},{key:"keydownHandler",value:function(e){var n,r,o,i;for(n in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),o=[],r=this.keycommands)i=r[n],e.keyCode===i?o.push(this.handle_key_command(n)):o.push(void 0);return o}},{key:"update_nav_buttons",value:function(){var e,t;if((t=(e=this.view.getOption("collection")).state.currentPage)?this.ui.prev_li.show():this.ui.prev_li.hide(),t!==e.state.lastPage?this.ui.next_li.show():this.ui.next_li.hide(),0===e.state.totalRecords)return this.ui.prev_li.hide(),this.ui.next_li.hide()}},{key:"onRender",value:function(){var e=this;return this.update_nav_buttons(),this.view.getOption("collection").on("pageable:state:change",function(){return e.update_nav_buttons()}),o("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroy",value:function(){return this.view.getOption("collection").off("pageable:state:change"),o("html").unbind("keydown",this.keydownHandler)}},{key:"get_another_page",value:function(e){var t,n,r,o;if(r=(n=(t=this.view.getOption("collection")).state.currentPage)===t.state.lastPage,o=void 0,"prev"===e&&n?o=t.getPreviousPage():"next"!==e||r||(o=t.getNextPage()),o)return o.done(function(){return delete t.queryParams.where})}},{key:"get_prev_page",value:function(){return this.get_another_page("prev")}},{key:"get_next_page",value:function(){return this.get_another_page("next")}}]),t}();return e.prototype.ui={prev_li:".previous",next_li:".next",prev_button:".prev-page-button",next_button:".next-page-button"},e.prototype.events={"click @ui.prev_button":"get_prev_page","click @ui.next_button":"get_next_page"},e.prototype.keycommands={prev:u("left"),next:u("right")},e}.call(void 0),e.exports=i},759:function(e,t){function n(e){if(e&&"object"==typeof e){var t=e.which||e.keyCode||e.charCode;t&&(e=t)}if("number"==typeof e)return a[e];var n,i=String(e);return(n=r[i.toLowerCase()])?n:(n=o[i.toLowerCase()])||(1===i.length?i.charCodeAt(0):void 0)}n.isEventKey=function(e,t){if(e&&"object"==typeof e){var n=e.which||e.keyCode||e.charCode;if(null==n)return!1;if("string"==typeof t){var i;if(i=r[t.toLowerCase()])return i===n;if(i=o[t.toLowerCase()])return i===n}else if("number"==typeof t)return t===n;return!1}};var r=(t=e.exports=n).code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},o=t.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};
/*!
 * Programatically add the following
 */
for(i=97;i<123;i++)r[String.fromCharCode(i)]=i-32;for(var i=48;i<58;i++)r[i-48]=i;for(i=1;i<13;i++)r["f"+i]=i+111;for(i=0;i<10;i++)r["numpad "+i]=i+96;var a=t.names=t.title={};for(i in r)a[r[i]]=i;for(var u in o)r[u]=o[u]},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(4)),i=l(n(1)),a=n(2),u=l(n(3));function l(e){return e&&e.__esModule?e:{default:e}}i.default.Radio.channel("global"),i.default.Radio.channel("messages"),t.default=function(){var e=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.View),r(t,[{key:"options",value:function(){return{setKeyHandler:!1,barLength:15,barStopAt:7}}},{key:"templateContext",value:function(){return{collection:this.collection,barLength:this.getOption("barLength"),barStopAt:this.getOption("barStopAt")}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=(0,o.default)(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var e,t,n,r;return r=this.collection.state,n=this.ui.prevButton.parent(),r.currentPage===r.firstPage?n.hasClass("disabled")||n.addClass("disabled"):n.hasClass("disabled")&&n.removeClass("disabled"),t=this.ui.nextButton.parent(),r.currentPage===r.lastPage?t.hasClass("disabled")||t.addClass("disabled"):t.addClass("disabled")&&t.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),this.ui.numberedPage.removeClass("text-white"),this.ui.numberedPage.addClass("text-dark"),(e=(0,o.default)('[data-pagenumber="'+r.currentPage+'"]')).parent().addClass("active"),e.removeClass("text-dark"),e.addClass("text-white")}},{key:"getAnotherPage",value:function(e){var t,n,r,o;if(n=(o=this.collection.state).currentPage===o.lastPage,t=o.currentPage===o.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error("bad direction '"+e+"'")}r=this.collection.getNextPage()}else o.currentPage!==o.firstPage&&(r=this.collection.getPreviousPage());return this.updateNavButtons(),r}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var n,r,o,i;for(n in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),o=[],r=this.keycommands)i=r[n],e.keyCode===i?o.push(this.handleKeyCommand(n)):o.push(void 0);return o}},{key:"onRenderHandleKeys",value:function(){return(0,o.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,o.default)("html").unbind("keydown",this.keydownHandler)}}]),t}();return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=u.default.renderable(function(e){var t,n,r,o,a,l,s,c,f,d,p;for((d=e instanceof i.default.Collection?e.state:e.collection.state).totalPages,r=d.firstPage,t=!1,(a=d.lastPage)>e.barLength&&(t=!0,p=e.barStopAt,f=a-e.barStopAt),u.default.li(".page-item",function(){return u.default.a(".prev.page-link.bg-body-d5",function(){return u.default.i(".fa.fa-arrow-left")})}),n=!1,l=o=s=r,c=a;s<=c?o<=c:o>=c;l=s<=c?++o:--o)t&&l>=p&&l<=f?n||(n=!0,u.default.li(".page-item",function(){return u.default.a(".ellipsis-page.page-link.bg-body-d5.text-dark","...")})):u.default.li(".page-item",function(){return u.default.a(".numbered-page.page-link.bg-body-d5.text-dark",{href:"#",data:{pageNumber:l}},l)});return u.default.li(".page-item",function(){return u.default.a(".next.page-link.bg-body-d5",function(){return u.default.i(".fa.fa-arrow-right")})})}),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(void 0)}}]);
//# sourceMappingURL=wikipages-list-wikipages-2383d4a96b8ee284607d.js.map