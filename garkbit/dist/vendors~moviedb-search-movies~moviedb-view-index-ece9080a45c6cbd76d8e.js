(self.webpackJsonp=self.webpackJsonp||[]).push([[19],{127:function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},132:function(e,t,n){e.exports=n.p+"no-image-available-37ba7a15e349d60317d3883123b01f95.svg"},181:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(2);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}t.default=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,i.Behavior),r(o,[{key:"onSetHeader",value:function(e){return this.ui.header.text(e)}}]),o)},237:function(e,t,n){"use strict";var r=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i,o,l,s,u,c;function f(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments));return e.autoClickSubmit=e.autoClickSubmit.bind(e),e}n(4),c=n(0),i=n(1),n(2),n(3),n(32),n(38),o=n(33).default,n(31).form_group_input_div,s=n(493),l=i.Radio.channel("messages"),i.Radio.channel("moviedb"),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(f,o),r(f,[{key:"ui",value:function(){return{query:'[name="query"]'}}},{key:"initialize",value:function(e){return function e(t,n,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(r):void 0}(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"initialize",this).call(this,e)}},{key:"initializeAutoSubmit",value:function(e){var t=this;return this.autoClickSubmitOnce=c.once(this.autoClickSubmit),setTimeout(function(){return t.autoClickSubmitOnce()},1e3)}},{key:"createModel",value:function(){return console.log("UIUI",this.ui),new s}},{key:"updateModel",value:function(){return this.model.set("query",this.ui.query.val())}},{key:"saveModel",value:function(){var e,t=this;return this.model.get("query"),this.collection.queryParams.query=this.model.get("query"),(e=this.collection.fetch()).done(function(){return console.log("saveModel response",e,t.collection),t.trigger("save:form:success",t.model)}),e.fail(function(){return l.request("warning",t.tvshow+" not found."),t.trigger("save:form:failure",t.model)})}},{key:"autoClickSubmit",value:function(){return function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,f),this.ui.submitButton.click(),console.log("Submit clicked")}}]),u=f,e.exports=u},238:function(e,t,n){"use strict";var r,a,i,o,l,s,u,c,f=function(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e};function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r=n(4),a=n(1),o=n(2),c=n(3),n(93),n(94),window.jQuery=r,n(494),n(497),n(499),n(500),u=n(5).default,n(91).default,i=n(181).default;var v=n(99);v.posterImage,v.tvShowDescription,a.Radio.channel("messages"),a.Radio.channel("moviedb"),l=function(){var e=(h(t,o.View),f(t,[{key:"inLocalCollection",value:function(){var e;return e=this.model.toJSON().show.id,this.getOption("localCollection").get(e)}},{key:"onRender",value:function(){return this.ui.selectResult.show(),this.model.get("vote_average"),this.ui.rating.rating({min:1,max:10,theme:"krajee-fa",readonly:!0,size:"xs"})}},{key:"handleImageHover",value:function(){return this.ui.mainImage.css({cursor:"pointer"})}},{key:"selectResult",value:function(){var e,t;return e=this.model.toJSON().id,t=this.getOption("entryUrlRoot"),u(t+"/"+e)}}]),t);function t(){return d(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.ui={selectResult:".select-result",rating:".rating"},e.prototype.events={"click @ui.selectResult":"selectResult"},e}.call(void 0),s=function(){var e=(h(t,o.View),f(t,[{key:"onRender",value:function(){var e;return this.ui.header.hide(),e=new o.CollectionView({collection:this.collection,childView:l,childViewOptions:{localCollection:new a.Collection,entryUrlRoot:this.getOption("entryUrlRoot"),template:this.getOption("entryTemplate"),templateContext:{imgClass:this.getOption("entryImgClass")}}}),this.showChildView("itemList",e)}}]),t);function t(){return d(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.template=c.renderable(function(e){return c.div(".results-header.listview-header",function(){return c.text("Matched Movies")}),c.div(".result-list")}),e.prototype.ui={header:".results-header",itemList:".result-list"},e.prototype.regions={itemList:"@ui.itemList"},e.prototype.behaviors={HasHeader:{behaviorClass:i}},e}.call(void 0),e.exports=s},239:function(e,t,n){"use strict";var r,a,i,o;i=n(3);var l=n(31);r=l.form_group_input_div,o=i.renderable(function(){return r({input_id:"input_query",label:"TV Show",input_attributes:{name:"query",placeholder:"Enter a TV show","data-validation":"query"}}),i.input(".submit-btn.btn.btn-primary.btn-sm",{type:"submit",value:"Search"}),i.div(".spinner.fa.fa-spinner.fa-spin.text-primary")}),a=i.renderable(function(){return r({input_id:"input_query",label:"Movie Search",input_attributes:{name:"query",placeholder:'Enter a query such as "gone with the wine"'}}),i.input(".submit-btn.btn.btn-primary.btn-sm",{type:"submit",value:"Search"}),i.div(".spinner.fa.fa-spinner.fa-spin.text-primary")}),e.exports={tvSearchForm:o,movieSearchForm:a}},240:function(e,t,n){"use strict";var r;r="https://www.themoviedb.org/assets/2/v4/logos/powered-by-square-green-11c0c7f8e03c4f44aa54d5e91d9531aa9860a9161c49f5fa741b730c5b21a1f2.svg",e.exports=r},241:function(e,t,n){},493:function(e,t,n){"use strict";var r,a;n(4),n(0),(r=n(1)).Radio.channel("messages"),r.Radio.channel("moviedb"),a=function(){var e=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Model),t);function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return e.prototype.validation={query:{required:!0,minLength:11}},e}.call(void 0),e.exports=a},494:function(e,t,n){var r=n(495);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(120)(r,a);r.locals&&(e.exports=r.locals)},495:function(e,t,n){t=e.exports=n(119)(!1);var r=n(127)(n(496));t.push([e.i,"/*!\r\n * bootstrap-star-rating v4.0.6\r\n * http://plugins.krajee.com/star-rating\r\n *\r\n * Author: Kartik Visweswaran\r\n * Copyright: 2013 - 2019, Kartik Visweswaran, Krajee.com\r\n *\r\n * Licensed under the BSD 3-Clause\r\n * https://github.com/kartik-v/bootstrap-star-rating/blob/master/LICENSE.md\r\n */\r\n.rating-loading {\r\n    width: 25px;\r\n    height: 25px;\r\n    font-size: 0;\r\n    color: #fff;\r\n    background: transparent url("+r+") top left no-repeat;\r\n    border: none;\r\n}\r\n\r\n/*\r\n * Stars & Input\r\n */\r\n.rating-container .rating-stars {\r\n    position: relative;\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.rating-container .rating-input {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    height: 1px;\r\n    bottom: 0;\r\n    left: 0;\r\n    font-size: 1px;\r\n    border: none;\r\n    background: none;\r\n    opacity: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.rating-container.is-display-only .rating-input,\r\n.rating-container.is-display-only .rating-stars {\r\n    cursor: default;\r\n}\r\n\r\n.rating-disabled .rating-input, .rating-disabled .rating-stars {\r\n    cursor: not-allowed;\r\n}\r\n\r\n.rating-container .star {\r\n    display: inline-block;\r\n    margin: 0 2px;\r\n    text-align: center;\r\n}\r\n\r\n.rating-container .empty-stars {\r\n    color: #aaa;\r\n}\r\n\r\n.rating-container .filled-stars {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    margin: auto;\r\n    color: #fde16d;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    -webkit-text-stroke: 1px #777;\r\n    text-shadow: 1px 1px #999;\r\n}\r\n\r\n.rating-rtl {\r\n    float: right;\r\n}\r\n\r\n.rating-animate .filled-stars {\r\n    transition: width 0.25s ease;\r\n}\r\n\r\n.rating-rtl .filled-stars {\r\n    left: auto;\r\n    right: 0;\r\n    transition: none;\r\n    -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);\r\n    transform: matrix(-1, 0, 0, 1, 0, 0);\r\n}\r\n\r\n.rating-rtl.is-star .filled-stars {\r\n    right: 0.06em;\r\n}\r\n\r\n.rating-rtl.is-heart .empty-stars {\r\n    margin-right: 0.07em;\r\n}\r\n\r\n/**\r\n * Clear\r\n */\r\n.rating-container .clear-rating {\r\n    color: #aaa;\r\n    cursor: not-allowed;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    font-size: 60%;\r\n}\r\n\r\n.clear-rating-active {\r\n    cursor: pointer !important;\r\n}\r\n\r\n.clear-rating-active:hover {\r\n    color: #843534;\r\n}\r\n\r\n.rating-container .clear-rating {\r\n    padding-right: 5px;\r\n}\r\n\r\n/**\r\n * Caption\r\n */\r\n\r\n/* extend support to BS4 */\r\n.rating-container .caption .label {\r\n    display: inline-block;\r\n    padding: .25em .4em;\r\n    line-height: 1;\r\n    text-align: center;\r\n    vertical-align: baseline;\r\n    border-radius: .25rem;\r\n}\r\n\r\n.rating-container .caption {\r\n    color: #999;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    line-height: 1;\r\n}\r\n\r\n.rating-container .caption {\r\n    margin-left: 5px;\r\n    margin-right: 0;\r\n}\r\n\r\n.rating-rtl .caption {\r\n    margin-right: 5px;\r\n    margin-left: 0;\r\n}\r\n\r\n/**\r\n * Print\r\n */\r\n@media print {\r\n    .rating-container .clear-rating {\r\n        display: none;\r\n    }\r\n}\r\n\r\n/**\r\n * Sizes\r\n */\r\n.rating-xl  {\r\n    font-size: 48px;\r\n}\r\n.rating-lg  {\r\n    font-size: 40px;\r\n}\r\n.rating-md  {\r\n    font-size: 32px;\r\n}\r\n.rating-sm  {\r\n    font-size: 24px;\r\n}\r\n.rating-xs  {\r\n    font-size: 16px;\r\n}\r\n\r\n.rating-xl .caption {\r\n    font-size: 20px;\r\n}\r\n.rating-lg .caption {\r\n    font-size: 18px;\r\n}\r\n.rating-md .caption {\r\n    font-size: 16px;\r\n}\r\n.rating-sm .caption {\r\n    font-size: 14px;\r\n}\r\n.rating-xs .caption {\r\n    font-size: 12px;\r\n}\r\n",""])},496:function(e,t,n){e.exports=n.p+"loading-13630905267b809161e71d0f8a0c017b.gif"},497:function(e,t,n){var r=n(498);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(120)(r,a);r.locals&&(e.exports=r.locals)},498:function(e,t,n){(e.exports=n(119)(!1)).push([e.i,"/*!\r\n * Krajee Font Awesome Theme styling for bootstrap-star-rating.\r\n * This file must be loaded after 'star-rating.css'.\r\n *\r\n * @see http://github.com/kartik-v/bootstrap-star-rating\r\n * @author Kartik Visweswaran <kartikv2@gmail.com>\r\n */\r\n.theme-krajee-fa .star {\r\n    font-size: 1.1em;\r\n}",""])},499:function(e,t,n){var r,a,i;
/*!
 * bootstrap-star-rating v4.0.6
 * http://plugins.krajee.com/star-rating
 *
 * Author: Kartik Visweswaran
 * Copyright: 2013 - 2019, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD 3-Clause
 * https://github.com/kartik-v/bootstrap-star-rating/blob/master/LICENSE.md
 */
/*!
 * bootstrap-star-rating v4.0.6
 * http://plugins.krajee.com/star-rating
 *
 * Author: Kartik Visweswaran
 * Copyright: 2013 - 2019, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD 3-Clause
 * https://github.com/kartik-v/bootstrap-star-rating/blob/master/LICENSE.md
 */
!function(){"use strict";a=[n(4)],void 0===(i="function"==typeof(r=function(f){"use strict";var p,d;f.fn.ratingLocales={},f.fn.ratingThemes={},p={NAMESPACE:".rating",DEFAULT_MIN:0,DEFAULT_MAX:5,DEFAULT_STEP:.5,isEmpty:function(e,t){return e===null||e===undefined||e.length===0||t&&f.trim(e)===""},getCss:function(e,t){return e?" "+t:""},addCss:function(e,t){e.removeClass(t).addClass(t)},getDecimalPlaces:function(e){var t=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return!t?0:Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0))},applyPrecision:function(e,t){return parseFloat(e.toFixed(t))},handler:function(e,t,n,r,a){var i=a?t:t.split(" ").join(p.NAMESPACE+" ")+p.NAMESPACE;if(!r){e.off(i)}e.on(i,n)}},(d=function(e,t){var n=this;n.$element=f(e);n._init(t)}).prototype={constructor:d,_parseAttr:function(e,t){var n=this,r=n.$element,a=r.attr("type"),i,o,l,s;if(a==="range"||a==="number"){o=t[e]||r.data(e)||r.attr(e);switch(e){case"min":l=p.DEFAULT_MIN;break;case"max":l=p.DEFAULT_MAX;break;default:l=p.DEFAULT_STEP}i=p.isEmpty(o)?l:o;s=parseFloat(i)}else{s=parseFloat(t[e])}return isNaN(s)?l:s},_parseValue:function(e){var t=this,n=parseFloat(e);if(isNaN(n)){n=t.clearValue}return t.zeroAsNull&&(n===0||n==="0")?null:n},_setDefault:function(e,t){var n=this;if(p.isEmpty(n[e])){n[e]=t}},_initSlider:function(e){var t=this,n=t.$element.val();t.initialValue=p.isEmpty(n)?0:n;t._setDefault("min",t._parseAttr("min",e));t._setDefault("max",t._parseAttr("max",e));t._setDefault("step",t._parseAttr("step",e));if(isNaN(t.min)||p.isEmpty(t.min)){t.min=p.DEFAULT_MIN}if(isNaN(t.max)||p.isEmpty(t.max)){t.max=p.DEFAULT_MAX}if(isNaN(t.step)||p.isEmpty(t.step)||t.step===0){t.step=p.DEFAULT_STEP}t.diff=t.max-t.min},_initHighlight:function(e){var t=this,n,r=t._getCaption();if(!e){e=t.$element.val()}n=t.getWidthFromValue(e)+"%";t.$filledStars.width(n);t.cache={caption:r,width:n,val:e}},_getContainerCss:function(){var e=this;return"rating-container"+p.getCss(e.theme,"theme-"+e.theme)+p.getCss(e.rtl,"rating-rtl")+p.getCss(e.size,"rating-"+e.size)+p.getCss(e.animate,"rating-animate")+p.getCss(e.disabled||e.readonly,"rating-disabled")+p.getCss(e.containerClass,e.containerClass)+(e.displayOnly?" is-display-only":"")},_checkDisabled:function(){var e=this,t=e.$element,n=e.options;e.disabled=n.disabled===undefined?t.attr("disabled")||false:n.disabled;e.readonly=n.readonly===undefined?t.attr("readonly")||false:n.readonly;e.inactive=e.disabled||e.readonly;t.attr({disabled:e.disabled,readonly:e.readonly})},_addContent:function(e,t){var n=this,r=n.$container,a=e==="clear";if(n.rtl){return a?r.append(t):r.prepend(t)}else{return a?r.prepend(t):r.append(t)}},_generateRating:function(){var e=this,t=e.$element,n,r,a;r=e.$container=f(document.createElement("div")).insertBefore(t);p.addCss(r,e._getContainerCss());e.$rating=n=f(document.createElement("div")).attr("class","rating-stars").appendTo(r).append(e._getStars("empty")).append(e._getStars("filled"));e.$emptyStars=n.find(".empty-stars");e.$filledStars=n.find(".filled-stars");e._renderCaption();e._renderClear();e._initHighlight();e._initCaptionTitle();r.append(t);if(e.rtl){a=Math.max(e.$emptyStars.outerWidth(),e.$filledStars.outerWidth());e.$emptyStars.width(a)}t.appendTo(n)},_getCaption:function(){var e=this;return e.$caption&&e.$caption.length?e.$caption.html():e.defaultCaption},_setCaption:function(e){var t=this;if(t.$caption&&t.$caption.length){t.$caption.html(e)}},_renderCaption:function(){var e=this,t=e.$element.val(),n,r=e.captionElement?f(e.captionElement):"";if(!e.showCaption){return}n=e.fetchCaption(t);if(r&&r.length){p.addCss(r,"caption");r.html(n);e.$caption=r;return}e._addContent("caption",'<div class="caption">'+n+"</div>");e.$caption=e.$container.find(".caption")},_renderClear:function(){var e=this,t,n=e.clearElement?f(e.clearElement):"";if(!e.showClear){return}t=e._getClearClass();if(n.length){p.addCss(n,t);n.attr({title:e.clearButtonTitle}).html(e.clearButton);e.$clear=n;return}e._addContent("clear",'<div class="'+t+'" title="'+e.clearButtonTitle+'">'+e.clearButton+"</div>");e.$clear=e.$container.find("."+e.clearButtonBaseClass)},_getClearClass:function(){var e=this;return e.clearButtonBaseClass+" "+(e.inactive?"":e.clearButtonActiveClass)},_toggleHover:function(e){var t=this,n,r,a;if(!e){return}if(t.hoverChangeStars){n=t.getWidthFromValue(t.clearValue);r=e.val<=t.clearValue?n+"%":e.width;t.$filledStars.css("width",r)}if(t.hoverChangeCaption){a=e.val<=t.clearValue?t.fetchCaption(t.clearValue):e.caption;if(a){t._setCaption(a+"")}}},_init:function(e){var n=this,t=n.$element.addClass("rating-input"),r;n.options=e;f.each(e,function(e,t){n[e]=t});if(n.rtl||t.attr("dir")==="rtl"){n.rtl=true;t.attr("dir","rtl")}n.starClicked=false;n.clearClicked=false;n._initSlider(e);n._checkDisabled();if(n.displayOnly){n.inactive=true;n.showClear=false;n.hoverEnabled=false;n.hoverChangeCaption=false;n.hoverChangeStars=false}n._generateRating();n._initEvents();n._listen();r=n._parseValue(t.val());t.val(r);return t.removeClass("rating-loading")},_initCaptionTitle:function(){var e=this,t;if(e.showCaptionAsTitle){t=e.fetchCaption(e.$element.val());e.$rating.attr("title",f(t).text())}},_trigChange:function(e){var t=this;t._initCaptionTitle();t.$element.trigger("change").trigger("rating:change",e)},_initEvents:function(){var f=this;f.events={_getTouchPosition:function(e){var t=p.isEmpty(e.pageX)?e.originalEvent.touches[0].pageX:e.pageX;return t-f.$rating.offset().left},_listenClick:function(e,t){e.stopPropagation();e.preventDefault();if(e.handled!==true){t(e);e.handled=true}else{return false}},_noMouseAction:function(e){return!f.hoverEnabled||f.inactive||e&&e.isDefaultPrevented()},initTouch:function(e){var t,n,r,a,i,o,l,s,u=f.clearValue||0,c="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch;if(!c||f.inactive){return}t=e.originalEvent;n=!p.isEmpty(t.touches)?t.touches:t.changedTouches;r=f.events._getTouchPosition(n[0]);if(e.type==="touchend"){f._setStars(r);s=[f.$element.val(),f._getCaption()];f._trigChange(s);f.starClicked=true}else{a=f.calculate(r);i=a.val<=u?f.fetchCaption(u):a.caption;o=f.getWidthFromValue(u);l=a.val<=u?o+"%":a.width;f._setCaption(i);f.$filledStars.css("width",l)}},starClick:function(e){var t,n;f.events._listenClick(e,function(e){if(f.inactive){return false}t=f.events._getTouchPosition(e);f._setStars(t);n=[f.$element.val(),f._getCaption()];f._trigChange(n);f.starClicked=true})},clearClick:function(e){f.events._listenClick(e,function(){if(!f.inactive){f.clear();f.clearClicked=true}})},starMouseMove:function(e){var t,n;if(f.events._noMouseAction(e)){return}f.starClicked=false;t=f.events._getTouchPosition(e);n=f.calculate(t);f._toggleHover(n);f.$element.trigger("rating:hover",[n.val,n.caption,"stars"])},starMouseLeave:function(e){var t;if(f.events._noMouseAction(e)||f.starClicked){return}t=f.cache;f._toggleHover(t);f.$element.trigger("rating:hoverleave",["stars"])},clearMouseMove:function(e){var t,n,r,a;if(f.events._noMouseAction(e)||!f.hoverOnClear){return}f.clearClicked=false;t='<span class="'+f.clearCaptionClass+'">'+f.clearCaption+"</span>";n=f.clearValue;r=f.getWidthFromValue(n)||0;a={caption:t,width:r,val:n};f._toggleHover(a);f.$element.trigger("rating:hover",[n,t,"clear"])},clearMouseLeave:function(e){var t;if(f.events._noMouseAction(e)||f.clearClicked||!f.hoverOnClear){return}t=f.cache;f._toggleHover(t);f.$element.trigger("rating:hoverleave",["clear"])},resetForm:function(e){if(e&&e.isDefaultPrevented()){return}if(!f.inactive){f.reset()}}}},_listen:function(){var e=this,t=e.$element,n=t.closest("form"),r=e.$rating,a=e.$clear,i=e.events;p.handler(r,"touchstart touchmove touchend",f.proxy(i.initTouch,e));p.handler(r,"click touchstart",f.proxy(i.starClick,e));p.handler(r,"mousemove",f.proxy(i.starMouseMove,e));p.handler(r,"mouseleave",f.proxy(i.starMouseLeave,e));if(e.showClear&&a.length){p.handler(a,"click touchstart",f.proxy(i.clearClick,e));p.handler(a,"mousemove",f.proxy(i.clearMouseMove,e));p.handler(a,"mouseleave",f.proxy(i.clearMouseLeave,e))}if(n.length){p.handler(n,"reset",f.proxy(i.resetForm,e),true)}return t},_getStars:function(e){var t=this,n='<span class="'+e+'-stars">',r;for(r=1;r<=t.stars;r++){n+='<span class="star">'+t[e+"Star"]+"</span>"}return n+"</span>"},_setStars:function(e){var t=this,n=arguments.length?t.calculate(e):t.calculate(),r=t.$element,a=t._parseValue(n.val);r.val(a);t.$filledStars.css("width",n.width);t._setCaption(n.caption);t.cache=n;return r},showStars:function(e){var t=this,n=t._parseValue(e);t.$element.val(n);t._initCaptionTitle();return t._setStars()},calculate:function(e){var t=this,n=p.isEmpty(t.$element.val())?0:t.$element.val(),r=arguments.length?t.getValueFromPosition(e):n,a=t.fetchCaption(r),i=t.getWidthFromValue(r);i+="%";return{caption:a,width:i,val:r}},getValueFromPosition:function(e){var t=this,n=p.getDecimalPlaces(t.step),r,a,i=t.$rating.width();a=t.diff*e/(i*t.step);a=t.rtl?Math.floor(a):Math.ceil(a);r=p.applyPrecision(parseFloat(t.min+a*t.step),n);r=Math.max(Math.min(r,t.max),t.min);return t.rtl?t.max-r:r},getWidthFromValue:function(e){var t=this,n=t.min,r=t.max,a,i=t.$emptyStars,o;if(!e||e<=n||n===r){return 0}o=i.outerWidth();a=o?i.width()/o:1;if(e>=r){return 100}return(e-n)*a*100/(r-n)},fetchCaption:function(e){var t=this,n=parseFloat(e)||t.clearValue,r,a,i,o,l,s=t.starCaptions,u=t.starCaptionClasses,c=t.getWidthFromValue(n);if(n&&n!==t.clearValue){n=p.applyPrecision(n,p.getDecimalPlaces(t.step))}o=typeof u==="function"?u(n,c):u[n];i=typeof s==="function"?s(n,c):s[n];a=p.isEmpty(i)?t.defaultCaption.replace(/\{rating}/g,n):i;r=p.isEmpty(o)?t.clearCaptionClass:o;l=n===t.clearValue?t.clearCaption:a;return'<span class="'+r+'">'+l+"</span>"},destroy:function(){var e=this,t=e.$element;if(!p.isEmpty(e.$container)){e.$container.before(t).remove()}f.removeData(t.get(0));return t.off("rating").removeClass("rating rating-input")},create:function(e){var t=this,n=e||t.options||{};return t.destroy().rating(n)},clear:function(){var e=this,t='<span class="'+e.clearCaptionClass+'">'+e.clearCaption+"</span>";if(!e.inactive){e._setCaption(t)}return e.showStars(e.clearValue).trigger("change").trigger("rating:clear")},reset:function(){var e=this;return e.showStars(e.initialValue).trigger("rating:reset")},update:function(e){var t=this;return arguments.length?t.showStars(e):t.$element},refresh:function(e){var t=this,n=t.$element;if(!e){return n}return t.destroy().rating(f.extend(true,t.options,e)).trigger("rating:refresh")}},f.fn.rating=function(s){var u=Array.apply(null,arguments),c=[];u.shift();this.each(function(){var e=f(this),t=e.data("rating"),n=typeof s==="object"&&s,r=n.theme||e.data("theme"),a=n.language||e.data("language")||"en",i={},o={},l;if(!t){if(r){i=f.fn.ratingThemes[r]||{}}if(a!=="en"&&!p.isEmpty(f.fn.ratingLocales[a])){o=f.fn.ratingLocales[a]}l=f.extend(true,{},f.fn.rating.defaults,i,f.fn.ratingLocales.en,o,n,e.data());t=new d(this,l);e.data("rating",t)}if(typeof s==="string"){c.push(t[s].apply(t,u))}});switch(c.length){case 0:return this;case 1:return c[0]===undefined?this:c[0];default:return c}},f.fn.rating.defaults={theme:"",language:"en",stars:5,filledStar:'<i class="glyphicon glyphicon-star"></i>',emptyStar:'<i class="glyphicon glyphicon-star-empty"></i>',containerClass:"",size:"md",animate:true,displayOnly:false,rtl:false,showClear:true,showCaption:true,starCaptionClasses:{.5:"label label-danger badge-danger",1:"label label-danger badge-danger",1.5:"label label-warning badge-warning",2:"label label-warning badge-warning",2.5:"label label-info badge-info",3:"label label-info badge-info",3.5:"label label-primary badge-primary",4:"label label-primary badge-primary",4.5:"label label-success badge-success",5:"label label-success badge-success"},clearButton:'<i class="glyphicon glyphicon-minus-sign"></i>',clearButtonBaseClass:"clear-rating",clearButtonActiveClass:"clear-rating-active",clearCaptionClass:"label label-default badge-secondary",clearValue:null,captionElement:null,clearElement:null,showCaptionAsTitle:true,hoverEnabled:true,hoverChangeCaption:true,hoverChangeStars:true,hoverOnClear:true,zeroAsNull:true},f.fn.ratingLocales.en={defaultCaption:"{rating} Stars",starCaptions:{.5:"Half Star",1:"One Star",1.5:"One & Half Star",2:"Two Stars",2.5:"Two & Half Stars",3:"Three Stars",3.5:"Three & Half Stars",4:"Four Stars",4.5:"Four & Half Stars",5:"Five Stars"},clearButtonTitle:"Clear",clearCaption:"Not Rated"},f.fn.rating.Constructor=d,f(document).ready(function(){var e=f("input.rating");if(e.length){e.removeClass("rating-loading").addClass("rating-loading").rating()}})})?r.apply(t,a):r)||(e.exports=i)}()},500:function(e,t){
/*!
 * Krajee Font Awesome Theme configuration for bootstrap-star-rating.
 * This file must be loaded after 'star-rating.js'.
 *
 * @see http://github.com/kartik-v/bootstrap-star-rating
 * @author Kartik Visweswaran <kartikv2@gmail.com>
 */
!function(){"use strict";window.jQuery.fn.ratingThemes["krajee-fa"]={filledStar:'<i class="fa fa-star"></i>',emptyStar:'<i class="fa fa-star-o"></i>',clearButton:'<i class="fa fa-lg fa-minus-circle"></i>'}}()},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(3),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default.renderable(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"5x";return i.default.span(".fa-stack.fa-"+e,function(){return i.default.i(".fa.fa-image.fa-stack-1x"),i.default.i(".fa.fa-ban.fa-stack-2x.text-danger")})})},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=i(n(4)),p=i(n(1)),l=n(2),d=i(n(3));function i(e){return e&&e.__esModule?e:{default:e}}p.default.Radio.channel("global"),p.default.Radio.channel("messages"),t.default=function(){var e=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,l.View),r(i,[{key:"options",value:function(){return{setKeyHandler:!1,barLength:15,barStopAt:7}}},{key:"templateContext",value:function(){return{collection:this.collection,barLength:this.getOption("barLength"),barStopAt:this.getOption("barStopAt")}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=(0,o.default)(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var e,t,n,r;return r=this.collection.state,n=this.ui.prevButton.parent(),r.currentPage===r.firstPage?n.hasClass("disabled")||n.addClass("disabled"):n.hasClass("disabled")&&n.removeClass("disabled"),t=this.ui.nextButton.parent(),r.currentPage===r.lastPage?t.hasClass("disabled")||t.addClass("disabled"):t.addClass("disabled")&&t.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),this.ui.numberedPage.removeClass("text-white"),this.ui.numberedPage.addClass("text-dark"),(e=(0,o.default)('[data-pagenumber="'+r.currentPage+'"]')).parent().addClass("active"),e.removeClass("text-dark"),e.addClass("text-white")}},{key:"getAnotherPage",value:function(e){var t,n,r,a;if(n=(a=this.collection.state).currentPage===a.lastPage,t=a.currentPage===a.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error("bad direction '"+e+"'")}r=this.collection.getNextPage()}else a.currentPage!==a.firstPage&&(r=this.collection.getPreviousPage());return this.updateNavButtons(),r}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var t,n,r,a;for(t in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,i),r=[],n=this.keycommands)a=n[t],e.keyCode===a?r.push(this.handleKeyCommand(t)):r.push(void 0);return r}},{key:"onRenderHandleKeys",value:function(){return(0,o.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,o.default)("html").unbind("keydown",this.keydownHandler)}}]),i);function i(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=d.default.renderable(function(e){var t,n,r,a,i,o,l,s,u,c,f;for((c=e instanceof p.default.Collection?e.state:e.collection.state).totalPages,r=c.firstPage,t=!1,(i=c.lastPage)>e.barLength&&(t=!0,f=e.barStopAt,u=i-e.barStopAt),d.default.li(".page-item",function(){return d.default.a(".prev.page-link.bg-body-d5",function(){return d.default.i(".fa.fa-arrow-left")})}),n=!1,o=a=l=r,s=i;l<=s?a<=s:s<=a;o=l<=s?++a:--a)t&&f<=o&&o<=u?n||(n=!0,d.default.li(".page-item",function(){return d.default.a(".ellipsis-page.page-link.bg-body-d5.text-dark","...")})):d.default.li(".page-item",function(){return d.default.a(".numbered-page.page-link.bg-body-d5.text-dark",{href:"#",data:{pageNumber:o}},o)});return d.default.li(".page-item",function(){return d.default.a(".next.page-link.bg-body-d5",function(){return d.default.i(".fa.fa-arrow-right")})})}),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(void 0)},99:function(e,t,n){"use strict";var r,a,i,o,l,s,u,c,f,p;n(4),n(1),n(2),f=n(3),o=n(132),s=f.renderable(function(e){var t,n,r;return e.noImageSize||"5x",t=e.imgClass||".mr-3",n=e.imgWidth||200,r=(null!=e?e.poster_path:void 0)?"https://image.tmdb.org/t/p/w"+n+e.poster_path:o,f.img(t,{src:r,style:"width:"+n+"px"})}),p=f.renderable(function(e){var t,n;return f.h3(".mt-0",e.name),"Invalid Date"!==(n=new Date(e.first_air_date).toDateString())&&f.h5("Premiered: "+n),"Invalid Date"!==(t=new Date(e.last_air_date).toDateString())&&f.h5("Ended: "+t),f.input(".rating",{type:"number",style:"display:none",value:e.vote_average}),f.p(e.overview)}),r=f.renderable(function(e){var t,n;return f.h3(".mt-0",e.title),(null!=e?e.tagline:void 0)&&f.h5(""+e.tagline),"Invalid Date"!==(n=new Date(e.release_date).toDateString())&&f.h5("Released: "+n),"Invalid Date"!==(t=new Date(e.last_air_date).toDateString())&&f.h4("Ended: "+t),f.input(".rating",{type:"number",style:"display:none",value:e.vote_average}),f.p(e.overview)}),l=f.renderable(function(){return f.div(".jsonview.listview-list-entry",{style:"overflow:auto"})}),c=f.renderable(function(e){return f.div(".card.bg-body-d5",function(){return f.div(".row",function(){return f.div(".col-lg-3",function(){return s(e)}),f.div(".card-block.col-lg-8",function(){return p(e)})})})}),u=f.renderable(function(e){return c(e),f.div(".seasons-row.row"),f.div(".row",function(){return f.div(".col-md-12",function(){return l()})})}),i=f.renderable(function(e){return f.div(".card.bg-body-d5",function(){return f.div(".row",function(){return f.div(".col-lg-3",function(){return s(e)}),f.div(".card-block.col-lg-8",function(){return r(e)})})})}),a=f.renderable(function(e){return i(e),f.div(".row",function(){return f.div(".col-md-12",function(){return l()})})}),e.exports={noImage:o,posterImage:s,tvShowDescription:p,objectJsonTemplate:l,showTemplateCard:c,showTemplate:u,movieTemplateCard:i,movieTemplate:a}}}]);
//# sourceMappingURL=vendors~moviedb-search-movies~moviedb-view-index-ece9080a45c6cbd76d8e.js.map