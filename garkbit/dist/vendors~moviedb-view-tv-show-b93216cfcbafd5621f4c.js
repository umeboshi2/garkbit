(self.webpackJsonp=self.webpackJsonp||[]).push([[25],{112:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=t(0),a=t(2),s=(o=a)&&o.__esModule?o:{default:o};n.default=function(){var e=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,s.default.Behavior),r(n,[{key:"events",value:function(){var e,n,t;return n="mouseenter",(t=this.getOption("uiProperty"))&&(n="mouseenter @ui."+t),(e={})[n]="handleHover",e}},{key:"handleHover",value:function(){var e;if((0,i.result)(this.options,"isClickable"))return((e=this.getOption("uiProperty"))?this.ui[e]:this.$el).css({cursor:"pointer"})}}]),n}();return e.prototype.options={uiProperty:"",isClickable:"hello"},e}.call(void 0)},121:function(e,n,t){e.exports=t.p+"no-image-available-37ba7a15e349d60317d3883123b01f95.svg"},122:function(e,n,t){(e.exports=t(98)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: rgb(66, 66, 66);\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: rgb(136, 19, 145);\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: rgb(28, 0, 207);\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: rgb(196, 26, 22);\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.expand, .jsonView>.collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.expanded>.insert, .jsonView.expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}',""])},312:function(e,n,t){"use strict";var o,r,i,a,s,l,u,c,d,p=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();function f(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function v(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function b(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}t(4),o=t(1),a=t(2),d=t(3),t(31),t(92),t(91),t(32).default,t(5).navigate_to_url,t(30).form_group_input_div,s=t(112).default;var h=t(89);u=h.noImage,o.Radio.channel("messages"),o.Radio.channel("moviedb"),c=d.renderable(function(e){return d.a({href:"#moviedb/tv/shows/season/view/"+e.id},function(){return d.text(e.name)})}),d.renderable(function(e){return d.div(".season-entry.listview-list-entry",{data:{"season-id":e.id}},function(){return c(e)})}),i=function(){var e=function(e){function n(){return f(this,n),v(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return b(n,a.View),n}();return e.prototype.attributes={style:{width:"20%","border-style":"solid","border-width":"5px"}},e.prototype.className="card bg-body-d5",e.prototype.template=d.renderable(function(e){return d.div(".row",function(){return d.div(".col-lg-3",function(){return e.still_path?d.img({src:"https://image.tmdb.org/t/p/w200"+e.still_path}):d.img(".bg-light.rounded",{src:u,style:"width:50%;height:auto"})}),d.div(".col-lg-8.ml-1",function(){return d.span(e.overview)})})}),e}.call(void 0),r=function(){var e=function(e){function n(){return f(this,n),v(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return b(n,a.View),p(n,[{key:"entryClicked",value:function(){var e,n;return console.log("entryClicked"),(e=this.getRegion("episodeContainer")).hasView()?this.ui.episodeContainer.toggle():(n=new i({model:this.model}),e.show(n))}}]),n}();return e.prototype.className="listview-list-entry",e.prototype.template=d.renderable(function(e){return d.span(e.name),d.div(".episode-container")}),e.prototype.ui={episodeContainer:".episode-container"},e.prototype.regions={episodeContainer:"@ui.episodeContainer"},e.prototype.behaviors={PointerOnHover:{behaviorClass:s}},e.prototype.events={click:"entryClicked"},e}.call(void 0),l=function(){var e=function(e){function n(){return f(this,n),v(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return b(n,a.View),p(n,[{key:"ui",value:function(){return{episodeList:".episode-list"}}},{key:"regions",value:function(){return{episodeList:"@ui.episodeList"}}},{key:"onRender",value:function(){var e;return e=new a.CollectionView({childView:r,collection:new o.Collection(this.model.get("episodes"))}),this.showChildView("episodeList",e),console.log("EPisode VEW",e)}}]),n}();return e.prototype.template=d.renderable(function(e){return d.div(".episode-list")}),e}.call(void 0),e.exports=l},313:function(e,n,t){"use strict";var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var s,l,u,c,d,p,f,v,b,h;t(4),l=t(1),d=t(2),h=t(3),t(31),c=t(92),t(91),t(32).default,t(5).navigate_to_url,t(30).form_group_input_div,t(82).default,t(112).default;var m=t(89);b=m.posterImage,f=t(312),l.Radio.channel("messages"),s=l.Radio.channel("moviedb"),u=function(){var e=function(e){function n(){return r(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,d.View),o(n,[{key:"onDomRefresh",value:function(){return this.jsonView=new c(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),n}();return e.prototype.template=h.renderable(function(e){var n;return b(e),h.div(function(){return h.text(e.overview)}),e.air_date&&(n=new Date(e.air_date).toDateString(),h.span("Season started "+n)),h.div(".jview")}),e.prototype.templateContext={imgClass:".mr-3.bg-light"},e.prototype.ui={jsonView:".jview"},e}.call(void 0),p=function(){var e=function(e){function n(){r(this,n);var e=i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.showSeasonView=e.showSeasonView.bind(e),e}return a(n,d.View),o(n,[{key:"attributes",value:function(){return{data:{"season-id":this.model.id}}}},{key:"initialize",value:function(e){var t;return function e(n,t,o){null===n&&(n=Function.prototype);var r=Object.getOwnPropertyDescriptor(n,t);if(void 0===r){var i=Object.getPrototypeOf(n);return null===i?void 0:e(i,t,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0}(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"initialize",this).call(this,e),t=s.request("TvSeasonDetails"),this.detailsModel=new t({id:this.model.get("season_number")}),this.detailsModel.tvId=this.getOption("tvId")}},{key:"episodesClicked",value:function(){var e,n=this;return(e=this.getRegion("seasonContainer")).hasView()?(console.log("seasonContainer",e),this.ui.seasonContainer.toggle()):(console.log("Checking model",this.detailsModel,this.detailsModel.has("name")),this.detailsModel.has("name")?this.showSeasonView():this.detailsModel.fetch({data:{append_to_response:"images"}}).done(function(){return n.showSeasonView(),n.ui.entryHeader.addClass("bg-dark text-white")}))}},{key:"infoClicked",value:function(){var e,n,t;return(e=this.getRegion("infoContainer")).hasView()?this.ui.infoContainer.toggle():(t=new u({model:this.model}),e.show(t)),"info"===(n=this.ui.infoButton.children("span")).text()?n.text("hide"):n.text("info")}},{key:"showSeasonView",value:function(){var e;return function(e,n){if(!(e instanceof n))throw new Error("Bound instance method accessed before binding")}(this,n),e=new f({model:this.detailsModel}),this.showChildView("seasonContainer",e)}}]),n}();return e.prototype.className="season-entry listview-list-entry",e.prototype.template=h.renderable(function(e){return h.div(".entry-header",function(){return h.div(".btn-group",function(){return h.button(".info-button.btn.btn-info",{type:"button"},function(){return h.i(".fa.fa-info.mr-1"),h.span("info")}),h.button(".episodes-button.btn.btn-primary",{type:"button"},function(){return h.i(".fa.fa-tv.mr-1"),h.span("episodes")})}),h.span(".season-name.ml-3",function(){return h.text(e.name)})}),h.div(".info-container"),h.div(".season-container")}),e.prototype.ui={entryHeader:".entry-header",episodesButton:".episodes-button",infoButton:".info-button",seasonName:".season-name",seasonContainer:".season-container",infoContainer:".info-container"},e.prototype.regions={seasonContainer:"@ui.seasonContainer",infoContainer:"@ui.infoContainer"},e.prototype.events={"click @ui.episodesButton":"episodesClicked","click @ui.infoButton":"infoClicked"},e}.call(void 0),v=function(){var e=function(e){function n(){return r(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,d.View),o(n,[{key:"ui",value:function(){return{seasonList:".season-list"}}},{key:"regions",value:function(){return{seasonList:"@ui.seasonList"}}},{key:"onRender",value:function(){var e;return e=new d.CollectionView({childView:p,childViewOptions:{tvId:this.model.id},collection:new l.Collection(this.model.get("seasons"))}),this.showChildView("seasonList",e)}}]),n}();return e.prototype.className="col-md-12",e.prototype.template=h.renderable(function(e){var n,t;return t="Seasons",1===(n=e.number_of_seasons||0)&&(t="Season"),h.div(".listview-header"," "+n+" "+t),h.div(".season-list")}),e}.call(void 0),e.exports=v},314:function(e,n,t){"use strict";var o,r,i,a,s,l,u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();t(4),o=t(1),i=t(2),t(3),t(31),r=t(92),t(91),t(32).default,t(5).navigate_to_url,t(30).form_group_input_div,t(82).default;var c=t(89);l=c.showTemplate,a=t(313),o.Radio.channel("messages"),o.Radio.channel("moviedb"),s=function(){var e=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.View),u(n,[{key:"onRender",value:function(){var e;return e=new a({model:this.model}),this.showChildView("seasonsRow",e)}},{key:"onDomRefresh",value:function(){return this.jsonView=new r(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),n}();return e.prototype.template=l,e.prototype.templateContext={imgClass:".card-img-bottom"},e.prototype.ui={jsonView:".jsonview",episodesButton:".episodes-button",saveEpisodesButton:".save-episodes",episodesList:".episode-list-region",seasonsRow:".seasons-row"},e.prototype.regions={seasonsRow:".seasons-row",episodes:"@ui.episodesList"},e}.call(void 0),e.exports=s},82:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r=t(3),i=(o=r)&&o.__esModule?o:{default:o};n.default=i.default.renderable(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"5x";return i.default.span(".fa-stack.fa-"+e,function(){return i.default.i(".fa.fa-image.fa-stack-1x"),i.default.i(".fa.fa-ban.fa-stack-2x.text-danger")})})},89:function(e,n,t){"use strict";var o,r,i,a,s,l,u,c,d,p;t(4),t(1),t(2),d=t(3),a=t(121),l=d.renderable(function(e){var n,t,o;return e.noImageSize||"5x",n=e.imgClass||".mr-3",t=e.imgWidth||200,o=(null!=e?e.poster_path:void 0)?"https://image.tmdb.org/t/p/w"+t+e.poster_path:a,d.img(n,{src:o,style:"width:"+t+"px"})}),p=d.renderable(function(e){var n,t;return d.h3(".mt-0",e.name),"Invalid Date"!==(t=new Date(e.first_air_date).toDateString())&&d.h5("Premiered: "+t),"Invalid Date"!==(n=new Date(e.last_air_date).toDateString())&&d.h5("Ended: "+n),d.input(".rating",{type:"number",style:"display:none",value:e.vote_average}),d.p(e.overview)}),o=d.renderable(function(e){var n,t;return d.h3(".mt-0",e.title),(null!=e?e.tagline:void 0)&&d.h5(""+e.tagline),"Invalid Date"!==(t=new Date(e.release_date).toDateString())&&d.h5("Released: "+t),"Invalid Date"!==(n=new Date(e.last_air_date).toDateString())&&d.h4("Ended: "+n),d.input(".rating",{type:"number",style:"display:none",value:e.vote_average}),d.p(e.overview)}),s=d.renderable(function(){return d.div(".jsonview.listview-list-entry",{style:"overflow:auto"})}),c=d.renderable(function(e){return d.div(".card.bg-body-d5",function(){return d.div(".row",function(){return d.div(".col-lg-3",function(){return l(e)}),d.div(".card-block.col-lg-8",function(){return p(e)})})})}),u=d.renderable(function(e){return c(e),d.div(".seasons-row.row"),d.div(".row",function(){return d.div(".col-md-12",function(){return s()})})}),i=d.renderable(function(e){return d.div(".card.bg-body-d5",function(){return d.div(".row",function(){return d.div(".col-lg-3",function(){return l(e)}),d.div(".card-block.col-lg-8",function(){return o(e)})})})}),r=d.renderable(function(e){return i(e),d.div(".row",function(){return d.div(".col-md-12",function(){return s()})})}),e.exports={noImage:a,posterImage:l,tvShowDescription:p,objectJsonTemplate:s,showTemplateCard:c,showTemplate:u,movieTemplateCard:i,movieTemplate:r}},91:function(e,n,t){var o=t(122);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(97)(o,r);o.locals&&(e.exports=o.locals)},92:function(e,n,t){"use strict";var o=t(114),r=t(106).EventEmitter;function i(e,n){var t=this;r.call(t),arguments.length<2&&(n=e,e=void 0);var o,a,s,l=[],u=[],c=!1,d=!1,p=!1,f=!0,v=!0,b={container:document.createElement("div"),collapseExpand:document.createElement("div"),name:document.createElement("div"),separator:document.createElement("div"),value:document.createElement("div"),delete:document.createElement("div"),children:document.createElement("div"),insert:document.createElement("div")};function h(){var e="object"==s||"array"==s;u.forEach(function(e){e.refresh()}),b.collapseExpand.style.display=e?"":"none",c&&e?y():m()}function m(e){e&&u.forEach(function(e){e.collapse(!0)}),c=!1,b.children.style.display="none",b.collapseExpand.className="expand",b.container.classList.add("collapsed"),b.container.classList.remove("expanded")}function y(e){var n;n="object"==s?Object.keys(a):"array"==s?a.map(function(e,n){return n}):[];for(var t=u.length-1;t>=0;t--){var o=u[t];-1==n.indexOf(o.name)&&(u.splice(t,1),j(o))}if("object"!=s&&"array"!=s)return m();n.forEach(function(e){_(e,a[e])}),e&&u.forEach(function(e){e.expand(!0)}),c=!0,b.children.style.display="",b.collapseExpand.className="collapse",b.container.classList.add("expanded"),b.container.classList.remove("collapsed")}function w(e){var n=typeof e,r=o;if(e!==o){if("string"!=n&&"number"!=n)throw new Error("Name must be either string or number, "+e);b.name.innerText=e,o=e,t.emit("rename",t,r,e)}}function g(e){var n,r=a;switch(s=function(e){var n=typeof e;if("object"==n){if(null===e)return"null";if(Array.isArray(e))return"array"}return n}(e)){case"null":n="null";break;case"object":n="Object["+Object.keys(e).length+"]";break;case"array":n="Array["+e.length+"]";break;default:n=e}b.value.innerText=n,b.value.className="value "+s,e!==a&&(a=e,"array"!=s&&"object"!=s||(v=!1,"array"==s&&(f=!1)),h(),t.emit("change",o,r,e))}function _(e,n){for(var t,o=0,r=u.length;o<r;o++)if(u[o].name==e){t=u[o];break}return t?t.value=n:((t=new i(e,n)).once("rename",C),t.on("delete",P),t.on("change",E),u.push(t)),b.children.appendChild(t.dom),t}function j(e){e.dom.parentNode&&b.children.removeChild(e.dom),e.destroy(),e.removeAllListeners()}function k(e){var n="name"==e?f:v,t=b[e];n&&("value"==e&&"string"==s&&(t.innerText='"'+a+'"'),"name"==e&&(d=!0),"value"==e&&(p=!0),t.classList.add("edit"),t.setAttribute("contenteditable",!0),t.focus(),document.execCommand("selectAll",!1,null))}function x(e){var n=b[e];if("name"==e){if(!d)return;d=!1}if("value"==e){if(!p)return;p=!1}if("name"==e)w(n.innerText);else try{g(JSON.parse(n.innerText))}catch(e){g(n.innerText)}n.classList.remove("edit"),n.removeAttribute("contenteditable")}function V(e,n){switch(n.key){case"Escape":case"Enter":x(e)}}function O(e,n){"Tab"==n.key&&(x(e),"name"==e?(n.preventDefault(),k("value")):x(e))}function C(e,n,t){t&&"array"!=s&&!(t in a)?(a[t]=e.value,delete a[n]):void 0===n?j(e):e.name=n,e.once("rename",C)}function E(e,n,r,i){i||(a[e]=r),t.emit("change",o+"."+e,n,r,!0)}function P(e){var n=e.name;"array"==s?a.splice(n,1):delete a[n],h()}function S(e,n,t){e.addEventListener(n,t),l.push({element:e,name:n,fn:t})}Object.defineProperties(t,{dom:{value:b.container,enumerable:!0},name:{get:function(){return o},set:w,enumerable:!0},value:{get:function(){return a},set:g,enumerable:!0},type:{get:function(){return s},enumerable:!0},nameEditable:{get:function(){return f},set:function(e){f=!!e},enumerable:!0},valueEditable:{get:function(){return v},set:function(e){v=!!e},enumerable:!0},refresh:{value:h,enumerable:!0},collapse:{value:m,enumerable:!0},expand:{value:y,enumerable:!0},destroy:{value:function(){var e,n;for(;n=l.pop();)n.element.removeEventListener(n.name,n.fn);for(;e=u.pop();)j(e)},enumerable:!0},editName:{value:k.bind(null,"name"),enumerable:!0},editValue:{value:k.bind(null,"value"),enumerable:!0}}),Object.keys(b).forEach(function(e){var n=b[e];"container"!=e&&(n.className=e,b.container.appendChild(n))}),b.container.className="jsonView",S(b.collapseExpand,"click",function(){c?m():y()}),S(b.value,"click",y.bind(null,!1)),S(b.name,"click",y.bind(null,!1)),S(b.name,"dblclick",k.bind(null,"name")),S(b.name,"blur",x.bind(null,"name")),S(b.name,"keypress",V.bind(null,"name")),S(b.name,"keydown",O.bind(null,"name")),S(b.value,"dblclick",k.bind(null,"value")),S(b.value,"blur",x.bind(null,"value")),S(b.value,"keypress",V.bind(null,"value")),S(b.value,"keydown",O.bind(null,"value")),S(b.value,"keydown",function(e){var n,t=0;if("number"!=s)return;switch(e.key){case"ArrowDown":case"Down":t=-1;break;case"ArrowUp":case"Up":t=1}e.shiftKey&&(t*=10);(e.ctrlKey||e.metaKey)&&(t/=10);t&&(n=parseFloat(b.value.innerText),isNaN(n)||g(Number((n+t).toFixed(10))))}),S(b.insert,"click",function(){var e=_("array"==s?a.length:void 0,null);"array"==s?(a.push(null),e.editValue()):e.editName()}),S(b.delete,"click",function(){t.emit("delete",t)}),w(e),g(n)}e.exports=i,o.inherits(i,r)}}]);
//# sourceMappingURL=vendors~moviedb-view-tv-show-b93216cfcbafd5621f4c.js.map