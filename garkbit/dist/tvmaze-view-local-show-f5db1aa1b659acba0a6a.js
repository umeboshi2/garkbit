(self.webpackJsonp=self.webpackJsonp||[]).push([[36],{241:function(e,t,n){"use strict";var o,r,i,s,u,a,c,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=n(1),u=n(2),c=n(3),s=n(100),n(99),n(5).navigate_to_url,n(30).form_group_input_div,n(82).default,o.Radio.channel("messages"),o.Radio.channel("tvmaze"),a=c.renderable(function(e){return c.div(".card.bg-body-d10",function(){return c.div(".card-header",function(){return e.summary||e.img_med?c.span(".text-local-secondary",{href:"#"},e.name):c.span(".text-light",e.name),c.span(".bg-body-d5.pull-right",function(){return e.season&&(c.span("Season "+e.season),c.raw("&nbsp;&nbsp;&nbsp;")),c.span(".bg-body-d10",e.airdate.toDateString())})}),c.div(".card-block",function(){return c.div(".summary.row",{style:"display:none"},function(){return(null!=e?e.img_med:void 0)?(c.div(".col-md-7",function(){return c.raw(e.summary)}),c.div(".col-md-5",function(){return c.img(".card-img-bottom.pull-right",{src:e.img_med})})):c.div(".col-md-12",function(){return c.raw(e.summary)})}),c.div(".jsonview")})})}),i=function(){var e=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,u.View),l(t,[{key:"canShowSummary",value:function(){var e,t;return t=this.model.get("summary"),e=this.model.get("img_med"),t||e}},{key:"showEpisodeSummary",value:function(e){if(e.preventDefault(),this.canShowSummary())return this.ui.summary.toggle()}},{key:"onDomRefreshJsonVIew",value:function(){return this.jsonview=new s(this.model.toJSON()),this.ui.objectContainer.prepend(this.jsonview.dom)}},{key:"handleHover",value:function(){if(this.canShowSummary())return this.$el.css({cursor:"pointer"})}}]),t}();return e.prototype.template=a,e.prototype.ui={summary:".summary",objectContainer:".jsonview"},e.prototype.regions={summary:"@ui.summary",objectContainer:"@ui.objectContainer"},e.prototype.events={click:"showEpisodeSummary",mouseenter:"handleHover"},e}.call(void 0),r=function(){var e=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,u.View),l(t,[{key:"onRender",value:function(){var e;return e=new u.CollectionView({collection:this.collection,childView:i}),this.showChildView("itemList",e)}}]),t}();return e.prototype.template=c.renderable(function(e){return c.div(".listview-header",function(){return c.text("Episodes")}),c.div(".episode-list")}),e.prototype.ui={header:".listview-header",itemList:".episode-list"},e.prototype.regions={itemList:"@ui.itemList"},e}.call(void 0),e.exports=r},242:function(e,t,n){"use strict";var o,r,i,s,u,a,c,l,d,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(4),r=n(1),u=n(2),d=n(3),n(31),s=n(100),n(99),n(32).default,n(5).navigate_to_url,n(30).form_group_input_div,l=n(82).default,i=n(241),a=r.Radio.channel("messages"),o=r.Radio.channel("tvmaze"),c=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.View),p(t,[{key:"onDomRefresh",value:function(){var e;return this.jsonView=new s(this.model.toJSON().content),this.ui.body.prepend(this.jsonView.dom),e=o.request("get-local-episode-collection"),this.localEpisodes=new e,this.showLocalEpisodes()}},{key:"showLocalEpisodes",value:function(){var e=this;return this.localEpisodes.fetch({data:{show_id:this.model.get("id")}}).done(function(){var t,n;return e.localEpisodes.isEmpty()?(a.request("info","Retrieving episodes..."),t=o.request("get-remote-episodes",e.model.id),t.fetch().done(function(){return e.saveEpisodes(t)})):(n=new i({collection:e.localEpisodes}),e.showChildView("episodes",n))})}},{key:"saveEpisodes",value:function(e){var t,n,r=this;return n=this.model.get("id"),t=[],e.models.forEach(function(e){var r,i;return r={id:e.get("id"),show_id:n,content:e.toJSON()},i=o.request("save-local-episode",r),t.push(i)}),Promise.all(t).then(function(e){return t.length&&r.showLocalEpisodes(),a.request("success","Retrieved "+t.length+" episodes.")})}}]),t}();return e.prototype.template=d.renderable(function(e){var t;return t=e.content,d.div(".card.bg-body-d5",function(){return d.div(".row",function(){return d.div(".col-md-2",function(){var n;return(null!=(n=t.image)?n.medium:void 0)?d.img(".card-img-bottom",{src:e.content.image.medium}):l("5x")}),d.div(".col-md-9",function(){return d.div(".card-block",function(){return d.h3(".card-title",e.content.name),d.raw(e.content.summary)})})}),d.div(".row",function(){return d.div(".col-md-8",function(){return d.div(".episode-list-region")}),d.div(".col-md-4",function(){return d.div(".listview-header","ShowObject"),d.div(".jsonview.listview-list-entry",{style:"overflow:auto"})})})})}),e.prototype.ui={body:".jsonview",episodesButton:".episodes-button",saveEpisodesButton:".save-episodes",episodesList:".episode-list-region"},e.prototype.regions={episodes:"@ui.episodesList"},e}.call(void 0),e.exports=c},82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(3),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default.renderable(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"5x";return i.default.span(".fa-stack.fa-"+e,function(){return i.default.i(".fa.fa-image.fa-stack-1x"),i.default.i(".fa.fa-ban.fa-stack-2x.text-danger")})})}}]);
//# sourceMappingURL=tvmaze-view-local-show-f5db1aa1b659acba0a6a.js.map