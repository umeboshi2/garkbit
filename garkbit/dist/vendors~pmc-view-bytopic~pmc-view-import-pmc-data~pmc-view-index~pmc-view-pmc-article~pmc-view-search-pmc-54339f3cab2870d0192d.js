(self.webpackJsonp=self.webpackJsonp||[]).push([[3],{1154:function(module,exports){var indexOf=function(t,e){if(t.indexOf)return t.indexOf(e);for(var r=0;r<t.length;r++)if(t[r]===e)return r;return-1},Object_keys=function(t){if(Object.keys)return Object.keys(t);var e=[];for(var r in t)e.push(r);return e},forEach=function(t,e){if(t.forEach)return t.forEach(e);for(var r=0;r<t.length;r++)e(t[r],r,t)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(t,e,r){Object.defineProperty(t,e,{writable:!0,enumerable:!1,configurable:!0,value:r})}}catch(t){return function(t,e,r){t[e]=r}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];function Context(){}Context.prototype={};var Script=exports.Script=function(t){if(!(this instanceof Script))return new Script(t);this.code=t};Script.prototype.runInContext=function(t){if(!(t instanceof Context))throw new TypeError("needs a 'context' argument.");var e=document.createElement("iframe");e.style||(e.style={}),e.style.display="none",document.body.appendChild(e);var r=e.contentWindow,n=r.eval,o=r.execScript;!n&&o&&(o.call(r,"null"),n=r.eval),forEach(Object_keys(t),(function(e){r[e]=t[e]})),forEach(globals,(function(e){t[e]&&(r[e]=t[e])}));var a=Object_keys(r),u=n.call(r,this.code);return forEach(Object_keys(r),(function(e){(e in t||-1===indexOf(a,e))&&(t[e]=r[e])})),forEach(globals,(function(e){e in t||defineProp(t,e,r[e])})),document.body.removeChild(e),u},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(t){var e=Script.createContext(t),r=this.runInContext(e);return t&&forEach(Object_keys(e),(function(r){t[r]=e[r]})),r},forEach(Object_keys(Script.prototype),(function(t){exports[t]=Script[t]=function(e){var r=Script(e);return r[t].apply(r,[].slice.call(arguments,1))}})),exports.isContext=function(t){return t instanceof Context},exports.createScript=function(t){return exports.Script(t)},exports.createContext=Script.createContext=function(t){var e=new Context;return"object"==typeof t&&forEach(Object_keys(t),(function(r){e[r]=t[r]})),e}},383:function(t,e,r){"use strict";r.r(e),function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t,e,r){return(i=u()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&a(o,r.prototype),o}).apply(null,arguments)}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return i(t,arguments,o(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)})(t)}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"JSONPath",(function(){return d}));var h=Object.prototype.hasOwnProperty;d.nodeVMSupported=function(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(t){return!1}}();var y=d.nodeVMSupported?r(1154):{runInNewContext:function(t,e){var r=Object.keys(e),n=[];!function(t,e,r){for(var n=t.length,o=0;o<n;o++){r(t[o])&&e.push(t.splice(o--,1)[0])}}(r,n,(function(t){return"function"==typeof e[t]}));var o=r.map((function(t,r){return e[t]}));(t=n.reduce((function(t,r){var n=e[r].toString();return/function/.test(n)||(n="function "+n),"var "+r+"="+n+";"+t}),"")+t).match(/(["'])use strict\1/)||r.includes("arguments")||(t="var arguments = undefined;"+t);var a=(t=t.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/,"")).lastIndexOf(";"),u=a>-1?t.slice(0,a+1)+" return "+t.slice(a+1):" return "+t;return i(Function,s(r).concat([u])).apply(void 0,s(o))}};function b(t,e){return(t=t.slice()).push(e),t}function F(t,e){return(e=e.slice()).unshift(t),e}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(n,t);var e,r=(e=n,function(){var t,r=o(e);if(u()){var n=o(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return l(this,t)});function n(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(e=r.call(this,'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)')).avoidNew=!0,e.value=t,e.name="NewError",e}return n}(c(Error));function d(t,e,r,o,a){if(!(this instanceof d))try{return new d(t,e,r,o,a)}catch(t){if(!t.avoidNew)throw t;return t.value}"string"==typeof t&&(a=o,o=r,r=e,e=t,t=null);var u=t&&"object"===n(t);if(t=t||{},this.json=t.json||r,this.path=t.path||e,this.resultType=t.resultType||"value",this.flatten=t.flatten||!1,this.wrap=!h.call(t,"wrap")||t.wrap,this.sandbox=t.sandbox||{},this.preventEval=t.preventEval||!1,this.parent=t.parent||null,this.parentProperty=t.parentProperty||null,this.callback=t.callback||o||null,this.otherTypeCallback=t.otherTypeCallback||a||function(){throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.")},!1!==t.autostart){var i={path:u?t.path:e};u?"json"in t&&(i.json=t.json):i.json=r;var c=this.evaluate(i);if(!c||"object"!==n(c))throw new v(c);return c}}d.prototype.evaluate=function(t,e,r,o){var a=this,u=this.parent,i=this.parentProperty,c=this.flatten,l=this.wrap;if(this.currResultType=this.resultType,this.currPreventEval=this.preventEval,this.currSandbox=this.sandbox,r=r||this.callback,this.currOtherTypeCallback=o||this.otherTypeCallback,e=e||this.json,(t=t||this.path)&&"object"===n(t)&&!Array.isArray(t)){if(!t.path&&""!==t.path)throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');if(!h.call(t,"json"))throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');e=t.json,c=h.call(t,"flatten")?t.flatten:c,this.currResultType=h.call(t,"resultType")?t.resultType:this.currResultType,this.currSandbox=h.call(t,"sandbox")?t.sandbox:this.currSandbox,l=h.call(t,"wrap")?t.wrap:l,this.currPreventEval=h.call(t,"preventEval")?t.preventEval:this.currPreventEval,r=h.call(t,"callback")?t.callback:r,this.currOtherTypeCallback=h.call(t,"otherTypeCallback")?t.otherTypeCallback:this.currOtherTypeCallback,u=h.call(t,"parent")?t.parent:u,i=h.call(t,"parentProperty")?t.parentProperty:i,t=t.path}if(u=u||null,i=i||null,Array.isArray(t)&&(t=d.toPathString(t)),(t||""===t)&&e){this._obj=e;var s=d.toPathArray(t);"$"===s[0]&&s.length>1&&s.shift(),this._hasParentSelector=null;var p=this._trace(s,e,["$"],u,i,r).filter((function(t){return t&&!t.isParentSelector}));return p.length?l||1!==p.length||p[0].hasArrExpr?p.reduce((function(t,e){var r=a._getPreferredOutput(e);return c&&Array.isArray(r)?t=t.concat(r):t.push(r),t}),[]):this._getPreferredOutput(p[0]):l?[]:void 0}},d.prototype._getPreferredOutput=function(t){var e=this.currResultType;switch(e){default:throw new TypeError("Unknown result type");case"all":var r=Array.isArray(t.path)?t.path:d.toPathArray(t.path);return t.pointer=d.toPointer(r),t.path="string"==typeof t.path?t.path:d.toPathString(t.path),t;case"value":case"parent":case"parentProperty":return t[e];case"path":return d.toPathString(t[e]);case"pointer":return d.toPointer(t.path)}},d.prototype._handleCallback=function(t,e,r){if(e){var n=this._getPreferredOutput(t);t.path="string"==typeof t.path?t.path:d.toPathString(t.path),e(n,r,t)}},d.prototype._trace=function(t,e,r,o,a,u,i,c){var l,s=this;if(!t.length)return l={path:r,value:e,parent:o,parentProperty:a,hasArrExpr:i},this._handleCallback(l,u,"value"),l;var f=t[0],y=t.slice(1),v=[];function d(t){Array.isArray(t)?t.forEach((function(t){v.push(t)})):v.push(t)}if(("string"!=typeof f||c)&&e&&h.call(e,f))d(this._trace(y,e[f],b(r,f),e,f,u,i));else if("*"===f)this._walk(f,y,e,r,o,a,u,(function(t,e,r,n,o,a,u,i){d(s._trace(F(t,r),n,o,a,u,i,!0,!0))}));else if(".."===f)d(this._trace(y,e,r,o,a,u,i)),this._walk(f,y,e,r,o,a,u,(function(t,e,r,o,a,u,i,c){"object"===n(o[t])&&d(s._trace(F(e,r),o[t],b(a,t),o,t,c,!0))}));else{if("^"===f)return this._hasParentSelector=!0,{path:r.slice(0,-1),expr:y,isParentSelector:!0};if("~"===f)return l={path:b(r,f),value:a,parent:o,parentProperty:null},this._handleCallback(l,u,"property"),l;if("$"===f)d(this._trace(y,e,r,null,null,u,i));else if(/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(f))d(this._slice(f,y,e,r,o,a,u));else if(0===f.indexOf("?(")){if(this.currPreventEval)throw new Error("Eval [?(expr)] prevented in JSONPath expression.");this._walk(f,y,e,r,o,a,u,(function(t,e,r,n,o,a,u,i){s._eval(e.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/,"$1"),n[t],t,o,a,u)&&d(s._trace(F(t,r),n,o,a,u,i,!0))}))}else if("("===f[0]){if(this.currPreventEval)throw new Error("Eval [(expr)] prevented in JSONPath expression.");d(this._trace(F(this._eval(f,e,r[r.length-1],r.slice(0,-1),o,a),y),e,r,o,a,u,i))}else if("@"===f[0]){var g=!1,_=f.slice(1,-2);switch(_){default:throw new TypeError("Unknown value type "+_);case"scalar":e&&["object","function"].includes(n(e))||(g=!0);break;case"boolean":case"string":case"undefined":case"function":n(e)===_&&(g=!0);break;case"integer":!Number.isFinite(e)||e%1||(g=!0);break;case"number":Number.isFinite(e)&&(g=!0);break;case"nonFinite":"number"!=typeof e||Number.isFinite(e)||(g=!0);break;case"object":e&&n(e)===_&&(g=!0);break;case"array":Array.isArray(e)&&(g=!0);break;case"other":g=this.currOtherTypeCallback(e,r,o,a);break;case"null":null===e&&(g=!0)}if(g)return l={path:r,value:e,parent:o,parentProperty:a},this._handleCallback(l,u,"value"),l}else if("`"===f[0]&&e&&h.call(e,f.slice(1))){var D=f.slice(1);d(this._trace(y,e[D],b(r,D),e,D,u,i,!0))}else if(f.includes(",")){var w,x=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=p(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}(f.split(","));try{for(x.s();!(w=x.n()).done;){var m=w.value;d(this._trace(F(m,y),e,r,o,a,u,!0))}}catch(t){x.e(t)}finally{x.f()}}else!c&&e&&h.call(e,f)&&d(this._trace(y,e[f],b(r,f),e,f,u,i,!0))}if(this._hasParentSelector)for(var E=0;E<v.length;E++){var S=v[E];if(S&&S.isParentSelector){var P=s._trace(S.expr,e,S.path,o,a,u,i);if(Array.isArray(P)){v[E]=P[0];for(var O=P.length,j=1;j<O;j++)E++,v.splice(E,0,P[j])}else v[E]=P}}return v},d.prototype._walk=function(t,e,r,o,a,u,i,c){if(Array.isArray(r))for(var l=r.length,s=0;s<l;s++)c(s,t,e,r,o,a,u,i);else r&&"object"===n(r)&&Object.keys(r).forEach((function(n){c(n,t,e,r,o,a,u,i)}))},d.prototype._slice=function(t,e,r,n,o,a,u){if(Array.isArray(r)){var i=r.length,c=t.split(":"),l=c[2]&&Number.parseInt(c[2])||1,s=c[0]&&Number.parseInt(c[0])||0,p=c[1]&&Number.parseInt(c[1])||i;s=s<0?Math.max(0,s+i):Math.min(i,s),p=p<0?Math.max(0,p+i):Math.min(i,p);for(var f=[],h=s;h<p;h+=l){this._trace(F(h,e),r,n,o,a,u,!0).forEach((function(t){f.push(t)}))}return f}},d.prototype._eval=function(t,e,r,n,o,a){if(!this._obj||!e)return!1;t.includes("@parentProperty")&&(this.currSandbox._$_parentProperty=a,t=t.replace(/@parentProperty/g,"_$_parentProperty")),t.includes("@parent")&&(this.currSandbox._$_parent=o,t=t.replace(/@parent/g,"_$_parent")),t.includes("@property")&&(this.currSandbox._$_property=r,t=t.replace(/@property/g,"_$_property")),t.includes("@path")&&(this.currSandbox._$_path=d.toPathString(n.concat([r])),t=t.replace(/@path/g,"_$_path")),t.includes("@root")&&(this.currSandbox._$_root=this.json,t=t.replace(/@root/g,"_$_root")),t.match(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/)&&(this.currSandbox._$_v=e,t=t.replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g,"_$_v$1"));try{return y.runInNewContext(t,this.currSandbox)}catch(e){throw console.log(e),new Error("jsonPath: "+e.message+": "+t)}},d.cache={},d.toPathString=function(t){for(var e=t,r=e.length,n="$",o=1;o<r;o++)/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[o])||(n+=/^[\*0-9]+$/.test(e[o])?"["+e[o]+"]":"['"+e[o]+"']");return n},d.toPointer=function(t){for(var e=t,r=e.length,n="",o=1;o<r;o++)/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[o])||(n+="/"+e[o].toString().replace(/~/g,"~0").replace(/\//g,"~1"));return n},d.toPathArray=function(t){var e=d.cache;if(e[t])return e[t].concat();var r=[],n=t.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g,";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g,(function(t,e){return"[#"+(r.push(e)-1)+"]"})).replace(/\['((?:[\0-&\(-\\\^-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)'\]/g,(function(t,e){return"['"+e.replace(/\./g,"%@%").replace(/~/g,"%%@@%%")+"']"})).replace(/~/g,";~;").replace(/'?\.'?(?!(?:[\0-Z\\-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*\])|\['?/g,";").replace(/%@%/g,".").replace(/%%@@%%/g,"~").replace(/(?:;)?(\^+)(?:;)?/g,(function(t,e){return";"+e.split("").join(";")+";"})).replace(/;;;|;;/g,";..;").replace(/;$|'?\]|'$/g,"").split(";").map((function(t){var e=t.match(/#([0-9]+)/);return e&&e[1]?r[e[1]]:t}));return e[t]=n,e[t]}}.call(this,r(29))},407:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=r(0),u=r(3);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}n=function(){var t=function(t){function e(){return i(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"events",value:function(){var t,e,r;return e="mouseenter",(r=this.getOption("uiProperty"))&&(e="mouseenter @ui."+r),(t={})[e]="handleHover",t}},{key:"handleHover",value:function(){var t;(0,a.result)(this.options,"isClickable")&&((t=this.getOption("uiProperty"))?this.ui[t]:this.$el).css({cursor:this.getOption("cursor")})}}]),e}(u.Behavior);return t.prototype.options={uiProperty:"",isClickable:!0,cursor:"pointer"},t}.call(void 0),e.default=n}}]);
//# sourceMappingURL=vendors~pmc-view-bytopic~pmc-view-import-pmc-data~pmc-view-index~pmc-view-pmc-article~pmc-view-search-pmc-54339f3cab2870d0192d.js.map