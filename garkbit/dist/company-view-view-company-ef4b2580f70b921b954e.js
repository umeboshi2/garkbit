(self.webpackJsonp=self.webpackJsonp||[]).push([[26],{364:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=p(n(1)),c=p(n(2)),f=p(n(3)),s=(p(n(28)),p(n(6)),p(n(365)));function p(e){return e&&e.__esModule?e:{default:e}}r=u.default.Radio.channel("global"),a=u.default.Radio.channel("messages"),o=u.default.Radio.channel("company"),i=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.View),l(t,[{key:"onRender",value:function(){var e,t;return this.ui.potentialBtn.hide(),this.checkPotentialWorkers(),this.collection=o.request("db:worker:collection"),(e=this.collection.fetch({data:{where:{company_id:this.model.get("id")}}})).fail(function(){return a.request("xhr-error",e)}),t=new s.default({collection:this.collection,model:this.model}),this.showChildView("workers",t)}},{key:"checkPotentialWorkers",value:function(){var e,t,n=this;return e=o.request("get-potential-workers"),(t=e.fetch({data:{company_id:this.model.get("id")}})).done(function(){return console.log("pworkers fetched",e,e.length?n.ui.potentialBtn.show():void 0)}),t.fail(function(){return a.request("xhr-error",t)})}},{key:"potentialBtnClicked",value:function(){var e=this;return n.e(86).then(function(){var t;return t=new(0,n(603).default)({model:e.model}),r.request("main:app:show-modal",t)}.bind(null,n)).catch(n.oe)}}]),t}();return e.prototype.template=f.default.renderable(function(e){return f.default.div(".listview-header",e.name),f.default.div(e.description),f.default.button(".potential-btn.btn.btn-primary.fa.fa-plus",function(){return f.default.text("Add potential workers")}),f.default.div(".row",function(){return f.default.div(".workers.col-md-6"),f.default.div(".potential-workers.col-md-6")})}),e.prototype.templateContext={appName:"company"},e.prototype.ui={potentialBtn:".potential-btn",workers:".workers",potentialWorkers:".potential-workers"},e.prototype.regions={workers:"@ui.workers",potentialWorkers:"@ui.potentialWorkers"},e.prototype.events={"click @ui.potentialBtn":"potentialBtnClicked"},e}.call(void 0),t.default=i},365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=f(n(1)),u=f(n(2)),c=f(n(3));function f(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}l.default.Radio.channel("global"),o=l.default.Radio.channel("messages"),l.default.Radio.channel("company"),r=function(){var e=function(e){function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,u.default.View),a(t,[{key:"className",value:function(){return"list-group-item worker-item row"}}]),t}();return e.prototype.template=c.default.renderable(function(e){return c.default.div(e.user.username)}),e.prototype.tagName="li",e}.call(void 0),i=function(){var e=function(e){function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,u.default.View),a(t,[{key:"regions",value:function(){return{itemList:"@ui.itemList"}}},{key:"onRender",value:function(){var e,t;return(e=this.collection.fetch({data:{where:{company_id:this.model.get("id")}}})).fail(function(){return o.request("xhr-error",e)}),t=new u.default.CollectionView({tagName:"ul",className:"list-group",collection:this.collection,childView:r}),this.showChildView("itemList",t)}}]),t}();return e.prototype.template=c.default.renderable(function(e){return c.default.div(e.name+" workers"),c.default.div(".workers-container.listgroup")}),e.prototype.ui={itemList:".workers-container"},e}.call(void 0),t.default=i}}]);
//# sourceMappingURL=company-view-view-company-ef4b2580f70b921b954e.js.map