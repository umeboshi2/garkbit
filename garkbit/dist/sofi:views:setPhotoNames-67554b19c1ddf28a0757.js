(self.webpackJsonp=self.webpackJsonp||[]).push([[83],{563:function(e,t,o){"use strict";var n,r,i,a,u,c,p,l=function(e,t,o){return t&&s(e.prototype,t),o&&s(e,o),e};function s(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r=o(1),a=o(2),p=o(3),r.Radio.channel("global"),r.Radio.channel("messages"),n=r.Radio.channel("sofi"),c=function(){var e=(m(t,a.View),l(t,[{key:"removeName",value:function(){return this.model.destroy()}}]),t);function t(){return f(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=p.renderable(function(e){return p.div(".listview-list-entry",function(){return p.text(e.name+"  "),p.i(".remove-name-icon.fa.fa-minus-square")})}),e.prototype.ui={removeNameIcon:".remove-name-icon"},e.prototype.events={"click @ui.removeNameIcon":"removeName"},e}.call(void 0),u=function(){var e=(m(t,a.NextCollectionView),t);function t(){return f(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.childView=c,e}.call(void 0),i=function(){var e=(m(t,a.View),l(t,[{key:"newNameClicked",value:function(){var e;if(e=this.ui.photoNameInput.val())return console.log("Pname",e),this.collection.create({name:e}),this.ui.photoNameInput.val("")}},{key:"showPhotoNames",value:function(){var e;return e=new u({collection:this.collection}),this.showChildView("photoNames",e)}},{key:"onRender",value:function(){var e=this;return this.collection=n.request("db:comicphotoname:collection"),this.collection.fetch().done(function(){return e.showPhotoNames()})}}]),t);function t(){return f(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=p.renderable(function(e){return p.div(".listview-header",function(){return p.text("Set Photo Names")}),p.div(".row",function(){return p.div(".col-sm-4.col-sm-offset-4",function(){return p.div(".photo-names")}),p.div(".input-group",function(){return p.span(".input-group-btn",function(){return p.button(".new-button.btn.btn-default",function(){return p.text("Add Name "),p.i(".fa.fa-plus-square")})}),p.input(".form-control",{type:"text",name:"photoname"})})})}),e.prototype.ui={photoNames:".photo-names",newNameButton:".new-button",photoNameInput:'input[name="photoname"]'},e.prototype.regions={photoNames:"@ui.photoNames"},e.prototype.events={"click @ui.newNameButton":"newNameClicked"},e}.call(void 0),e.exports=i}}]);
//# sourceMappingURL=sofi:views:setPhotoNames-67554b19c1ddf28a0757.js.map