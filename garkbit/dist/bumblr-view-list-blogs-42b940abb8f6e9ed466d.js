(self.webpackJsonp=self.webpackJsonp||[]).push([[25],{340:function(t,e,o){"use strict";var n,r,i,l,u,a,c,s,f,p,b=function(){function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}();function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}o(4),n=o(1),r=o(2),i=o(82),p=o(3),c=o(5).default,n.Radio.channel("bumblr"),a=p.renderable(function(t){return p.div(".modal-header",function(){return p.h2("This is a modal!")}),p.div(".modal-body",function(){return p.p("here is some content")}),p.div(".modal-footer",function(){return p.button("#modal-cancel-button.btn","cancel"),p.button("#modal-ok-button.btn.btn-default","Ok")})}),s=p.renderable(function(t){return p.div(".blog.listview-list-entry",function(){return p.i(".show-pix.fa.fa-eye.btn-default"),p.a({href:"#bumblr/viewblog/"+t.name},t.name),p.i(".delete-blog-button.fa.fa-close.btn-default",{blog:t.name})})}),f=p.renderable(function(){return p.div(function(){return p.a(".btn.btn-default",{href:"#bumblr/addblog"},"Add blog"),p.div("#bloglist-container.listview-list")})}),function(){var t=function(t){function e(){return d(this,e),h(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,r.View),e}();return t.prototype.template=a,t}.call(void 0),l=function(){var t=function(t){function e(){return d(this,e),h(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,r.View),b(e,[{key:"onDomRefresh",value:function(){var t,e,o=this;return t=function(t){return o.ui.deleteButton.show()},e=function(t){return o.ui.deleteButton.hide()},this.$el.hover(t,e),this.ui.deleteButton.hide()}},{key:"showPix",value:function(){var t;return t=this.model.get("name"),c("#bumblr/viewpix/"+t)}},{key:"deleteBlog",value:function(){var t;return console.log("deleteBlog",this.model),t=this.model.collection,this.model.destroy(),t.save()}}]),e}();return t.prototype.template=s,t.prototype.ui={deleteButton:".delete-blog-button",showPixButton:".show-pix"},t.prototype.events={"click @ui.showPixButton":"showPix","click @ui.deleteButton":"deleteBlog"},t}.call(void 0),u=function(){var t=function(t){function e(){return d(this,e),h(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,r.CollectionView),b(e,[{key:"onBeforeDestroy",value:function(){return this.masonry.destroy()}},{key:"onDomRefresh",value:function(){return console.log("onDomRefresh called on SimpleBlogListView"),this.masonry=new i("#bloglist-container",{gutter:2,isInitLayout:!1,itemSelector:".blog",columnWidth:100}),this.set_layout()}},{key:"set_layout",value:function(){return this.masonry.reloadItems(),this.masonry.layout()}}]),e}();return t.prototype.childView=l,t.prototype.template=f,t.prototype.childViewContainer="#bloglist-container",t.prototype.ui={blogs:"#bloglist-container"},t}.call(void 0),t.exports=u}}]);
//# sourceMappingURL=bumblr-view-list-blogs-42b940abb8f6e9ed466d.js.map