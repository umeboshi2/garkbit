(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),a=n(2),s=(o=a)&&o.__esModule?o:{default:o};t.default=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Behavior),i(t,[{key:"events",value:function(){var e,t,n;return t="mouseenter",(n=this.getOption("uiProperty"))&&(t="mouseenter @ui."+n),(e={})[t]="handleHover",e}},{key:"handleHover",value:function(){var e;if((0,r.result)(this.options,"isClickable"))return((e=this.getOption("uiProperty"))?this.ui[e]:this.$el).css({cursor:"pointer"})}}]),t}();return e.prototype.options={uiProperty:"",isClickable:"hello"},e}.call(void 0)},117:function(e,t,n){e.exports=n.p+"no-image-available-37ba7a15e349d60317d3883123b01f95.svg"},305:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s,u,l,c,d,f,p,h,v;n(4),u=n(1),d=n(2),v=n(3),n(31),c=n(86),n(85),n(32).default,n(5).navigate_to_url,n(30).form_group_input_div,n(82).default,n(107).default;var y=n(91);h=y.posterImage,u.Radio.channel("messages"),s=u.Radio.channel("moviedb"),l=function(){var e=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,d.View),o(t,[{key:"onDomRefresh",value:function(){return this.jsonView=new c(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),t}();return e.prototype.template=v.renderable(function(e){var t;return h(e),v.div(function(){return v.text(e.overview)}),e.air_date&&(t=new Date(e.air_date).toDateString(),v.span("Season started "+t)),v.div(".jview")}),e.prototype.ui={jsonView:".jview"},e}.call(void 0),f=function(){var e=function(e){function t(){i(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.showSeasonView=e.showSeasonView.bind(e),e}return a(t,d.View),o(t,[{key:"attributes",value:function(){return{data:{"season-id":this.model.id}}}},{key:"initialize",value:function(e){var n;return function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"initialize",this).call(this,e),n=s.request("TvSeasonDetails"),this.detailsModel=new n({id:this.model.get("season_number")}),this.detailsModel.tvId=this.getOption("tvId")}},{key:"episodesClicked",value:function(){var e,t=this;return(e=this.getRegion("seasonContainer")).hasView()?(console.log("seasonContainer",e),this.ui.seasonContainer.toggle()):(console.log("Checking model",this.detailsModel,this.detailsModel.has("name")),this.detailsModel.has("name")?this.showSeasonView():this.detailsModel.fetch({data:{append_to_response:"images"}}).done(function(){return t.showSeasonView(),t.ui.entryHeader.addClass("bg-dark text-white")}))}},{key:"infoClicked",value:function(){var e,t,n;return(e=this.getRegion("infoContainer")).hasView()?this.ui.infoContainer.toggle():(n=new l({model:this.model}),e.show(n)),"info"===(t=this.ui.infoButton.children("span")).text()?t.text("hide"):t.text("info")}},{key:"showSeasonView",value:function(){var e;return function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),e=new SeasonView({model:this.detailsModel}),this.showChildView("seasonContainer",e)}}]),t}();return e.prototype.className="season-entry listview-list-entry",e.prototype.template=v.renderable(function(e){return v.div(".entry-header",function(){return v.div(".btn-group",function(){return v.button(".info-button.btn.btn-info",{type:"button"},function(){return v.i(".fa.fa-info.mr-1"),v.span("info")}),v.button(".episodes-button.btn.btn-primary",{type:"button"},function(){return v.i(".fa.fa-tv.mr-1"),v.span("episodes")})}),v.span(".season-name.ml-3",function(){return v.text(e.name)})}),v.div(".info-container"),v.div(".season-container")}),e.prototype.ui={entryHeader:".entry-header",episodesButton:".episodes-button",infoButton:".info-button",seasonName:".season-name",seasonContainer:".season-container",infoContainer:".info-container"},e.prototype.regions={seasonContainer:"@ui.seasonContainer",infoContainer:"@ui.infoContainer"},e.prototype.events={"click @ui.episodesButton":"episodesClicked","click @ui.infoButton":"infoClicked"},e}.call(void 0),p=function(){var e=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,d.View),o(t,[{key:"ui",value:function(){return{seasonList:".season-list"}}},{key:"regions",value:function(){return{seasonList:"@ui.seasonList"}}},{key:"onRender",value:function(){var e;return e=new d.CollectionView({childView:f,childViewOptions:{tvId:this.model.id},collection:new u.Collection(this.model.get("seasons"))}),this.showChildView("seasonList",e)}}]),t}();return e.prototype.className="col-md-12",e.prototype.template=v.renderable(function(e){var t,n;return n="Seasons",1===(t=e.number_of_seasons||0)&&(n="Season"),v.div(".listview-header"," "+t+" "+n),v.div(".season-list")}),e}.call(void 0),e.exports=p},306:function(e,t,n){"use strict";var o,i,r,a,s,u,l,c,d,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(4),o=n(1),a=n(2),d=n(3),n(31),n(86),n(85),n(32).default,n(5).navigate_to_url,n(30).form_group_input_div,l=n(82).default,s=n(107).default,o.Radio.channel("messages"),o.Radio.channel("moviedb"),c=d.renderable(function(e){return d.a({href:"#moviedb/tv/shows/season/view/"+e.id},function(){return d.text(e.name)})}),d.renderable(function(e){return d.div(".season-entry.listview-list-entry",{data:{"season-id":e.id}},function(){return c(e)})}),r=function(){var e=function(e){function t(){return p(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,a.View),t}();return e.prototype.attributes={style:{width:"20%","border-style":"solid","border-width":"5px"}},e.prototype.className="card bg-body-d5",e.prototype.template=d.renderable(function(e){return d.div(".row",function(){return d.div(".col-lg-3",function(){return e.still_path?d.img({src:"https://image.tmdb.org/t/p/w200"+e.still_path}):l("4x")}),d.div(".col-lg-8.ml-1",function(){return d.span(e.overview)})})}),e}.call(void 0),i=function(){var e=function(e){function t(){return p(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,a.View),f(t,[{key:"entryClicked",value:function(){var e,t;return console.log("entryClicked"),(e=this.getRegion("episodeContainer")).hasView()?this.ui.episodeContainer.toggle():(t=new r({model:this.model}),e.show(t))}}]),t}();return e.prototype.className="listview-list-entry",e.prototype.template=d.renderable(function(e){return d.span(e.name),d.div(".episode-container")}),e.prototype.ui={episodeContainer:".episode-container"},e.prototype.regions={episodeContainer:"@ui.episodeContainer"},e.prototype.behaviors={PointerOnHover:{behaviorClass:s}},e.prototype.events={click:"entryClicked"},e}.call(void 0),u=function(){var e=function(e){function t(){return p(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,a.View),f(t,[{key:"ui",value:function(){return{episodeList:".episode-list"}}},{key:"regions",value:function(){return{episodeList:"@ui.episodeList"}}},{key:"onRender",value:function(){var e;return e=new a.CollectionView({childView:i,collection:new o.Collection(this.model.get("episodes"))}),this.showChildView("episodeList",e),console.log("EPisode VEW",e)}}]),t}();return e.prototype.template=d.renderable(function(e){return d.div(".episode-list")}),e}.call(void 0),e.exports=u},307:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s,u,l,c,d,f,p,h,v,y;n(4),u=n(1),d=n(2),y=n(3),n(31),c=n(86),n(85),n(32).default,n(5).navigate_to_url,n(30).form_group_input_div,n(82).default,n(107).default;var b=n(91);v=b.posterImage,p=n(306),u.Radio.channel("messages"),s=u.Radio.channel("moviedb"),l=function(){var e=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,d.View),o(t,[{key:"onDomRefresh",value:function(){return this.jsonView=new c(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),t}();return e.prototype.template=y.renderable(function(e){var t;return v(e),y.div(function(){return y.text(e.overview)}),e.air_date&&(t=new Date(e.air_date).toDateString(),y.span("Season started "+t)),y.div(".jview")}),e.prototype.ui={jsonView:".jview"},e}.call(void 0),f=function(){var e=function(e){function t(){i(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.showSeasonView=e.showSeasonView.bind(e),e}return a(t,d.View),o(t,[{key:"attributes",value:function(){return{data:{"season-id":this.model.id}}}},{key:"initialize",value:function(e){var n;return function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"initialize",this).call(this,e),n=s.request("TvSeasonDetails"),this.detailsModel=new n({id:this.model.get("season_number")}),this.detailsModel.tvId=this.getOption("tvId")}},{key:"episodesClicked",value:function(){var e,t=this;return(e=this.getRegion("seasonContainer")).hasView()?(console.log("seasonContainer",e),this.ui.seasonContainer.toggle()):(console.log("Checking model",this.detailsModel,this.detailsModel.has("name")),this.detailsModel.has("name")?this.showSeasonView():this.detailsModel.fetch({data:{append_to_response:"images"}}).done(function(){return t.showSeasonView(),t.ui.entryHeader.addClass("bg-dark text-white")}))}},{key:"infoClicked",value:function(){var e,t,n;return(e=this.getRegion("infoContainer")).hasView()?this.ui.infoContainer.toggle():(n=new l({model:this.model}),e.show(n)),"info"===(t=this.ui.infoButton.children("span")).text()?t.text("hide"):t.text("info")}},{key:"showSeasonView",value:function(){var e;return function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),e=new p({model:this.detailsModel}),this.showChildView("seasonContainer",e)}}]),t}();return e.prototype.className="season-entry listview-list-entry",e.prototype.template=y.renderable(function(e){return y.div(".entry-header",function(){return y.div(".btn-group",function(){return y.button(".info-button.btn.btn-info",{type:"button"},function(){return y.i(".fa.fa-info.mr-1"),y.span("info")}),y.button(".episodes-button.btn.btn-primary",{type:"button"},function(){return y.i(".fa.fa-tv.mr-1"),y.span("episodes")})}),y.span(".season-name.ml-3",function(){return y.text(e.name)})}),y.div(".info-container"),y.div(".season-container")}),e.prototype.ui={entryHeader:".entry-header",episodesButton:".episodes-button",infoButton:".info-button",seasonName:".season-name",seasonContainer:".season-container",infoContainer:".info-container"},e.prototype.regions={seasonContainer:"@ui.seasonContainer",infoContainer:"@ui.infoContainer"},e.prototype.events={"click @ui.episodesButton":"episodesClicked","click @ui.infoButton":"infoClicked"},e}.call(void 0),h=function(){var e=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,d.View),o(t,[{key:"ui",value:function(){return{seasonList:".season-list"}}},{key:"regions",value:function(){return{seasonList:"@ui.seasonList"}}},{key:"onRender",value:function(){var e;return e=new d.CollectionView({childView:f,childViewOptions:{tvId:this.model.id},collection:new u.Collection(this.model.get("seasons"))}),this.showChildView("seasonList",e)}}]),t}();return e.prototype.className="col-md-12",e.prototype.template=y.renderable(function(e){var t,n;return n="Seasons",1===(t=e.number_of_seasons||0)&&(n="Season"),y.div(".listview-header"," "+t+" "+n),y.div(".season-list")}),e}.call(void 0),e.exports=h},308:function(e,t,n){"use strict";var o,i,r,a,s,u,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(4),o=n(1),a=n(2),l=n(3),n(31),r=n(86),n(85),n(32).default,n(5).navigate_to_url,n(30).form_group_input_div,n(82).default;var d=n(91);u=d.movieTemplate,n(307),i=n(305),o.Radio.channel("messages"),o.Radio.channel("moviedb"),s=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.View),c(t,[{key:"onRender",value:function(){var e;return e=new i({model:this.model}),this.showChildView("credits",e)}},{key:"onDomRefresh",value:function(){return this.jsonView=new r(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),t}();return e.prototype.template=l.renderable(function(e){return u(e),l.div(".credits")}),e.prototype.templateContext={imgClass:".card-img-bottom"},e.prototype.ui={jsonView:".jsonview",creditsContainer:".credits"},e.prototype.regions={credits:"@ui.creditsContainer"},e}.call(void 0),e.exports=s},82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(3),r=(o=i)&&o.__esModule?o:{default:o};t.default=r.default.renderable(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"5x";return r.default.span(".fa-stack.fa-"+e,function(){return r.default.i(".fa.fa-image.fa-stack-1x"),r.default.i(".fa.fa-ban.fa-stack-2x.text-danger")})})},91:function(e,t,n){"use strict";var o,i,r,a,s,u,l,c,d,f;n(4),n(1),n(2),d=n(3),a=n(117),u=d.renderable(function(e){var t,n,o;return e.noImageSize||"5x",t=e.imgClass||".mr-3",n=e.imgWidth||200,o=(null!=e?e.poster_path:void 0)?"https://image.tmdb.org/t/p/w"+n+e.poster_path:a,d.img(t,{src:o,style:"width:"+n+"px"})}),f=d.renderable(function(e){var t,n;return d.h3(".mt-0",e.name),"Invalid Date"!==(n=new Date(e.first_air_date).toDateString())&&d.h5("Premiered: "+n),"Invalid Date"!==(t=new Date(e.last_air_date).toDateString())&&d.h5("Ended: "+t),d.input(".rating",{type:"number",style:"display:none",value:e.vote_average}),d.p(e.overview)}),o=d.renderable(function(e){var t,n;return d.h3(".mt-0",e.title),(null!=e?e.tagline:void 0)&&d.h5(""+e.tagline),"Invalid Date"!==(n=new Date(e.release_date).toDateString())&&d.h5("Released: "+n),"Invalid Date"!==(t=new Date(e.last_air_date).toDateString())&&d.h4("Ended: "+t),d.input(".rating",{type:"number",style:"display:none",value:e.vote_average}),d.p(e.overview)}),s=d.renderable(function(){return d.div(".jsonview.listview-list-entry",{style:"overflow:auto"})}),c=d.renderable(function(e){return d.div(".card.bg-body-d5",function(){return d.div(".row",function(){return d.div(".col-lg-3",function(){return u(e)}),d.div(".card-block.col-lg-8",function(){return f(e)})})})}),l=d.renderable(function(e){return c(e),d.div(".seasons-row.row"),d.div(".row",function(){return d.div(".col-md-12",function(){return s()})})}),r=d.renderable(function(e){return d.div(".card.bg-body-d5",function(){return d.div(".row",function(){return d.div(".col-lg-3",function(){return u(e)}),d.div(".card-block.col-lg-8",function(){return o(e)})})})}),i=d.renderable(function(e){return r(e),d.div(".row",function(){return d.div(".col-md-12",function(){return s()})})}),e.exports={noImage:a,posterImage:u,tvShowDescription:f,objectJsonTemplate:s,showTemplateCard:c,showTemplate:l,movieTemplateCard:r,movieTemplate:i}}}]);
//# sourceMappingURL=vendors~moviedb-view-movie-14799dd630917b2560ef.js.map