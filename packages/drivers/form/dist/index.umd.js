!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("k-ramel")):"function"==typeof define&&define.amd?define(["k-ramel"],r):e["@k-ramel/form"]=r(null)}(this,function(e){"use strict";var r=function(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e},n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=t.path,o=void 0===u?"form":u,i=t.getState,f=void 0===i?function(e){return e.form}:i,a=t.key,c=void 0===a?"@@form-name":a;return{getReducer:function(){return{path:o,reducer:{values:e.types.keyValue({key:c}),errors:e.types.keyValue({key:c})}}},getDriver:function(e){var t=f(e);return Object.assign(function(e){return n({},function(e){return function(t){return function(u){var o=function(o){return function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t[o].addOrUpdate(n(r({},e,u),i))}};return{set:o("values"),setErrors:o("errors"),clearErrors:function(){return t.errors.reset(u)},update:function(n){return function(o){var i;return t.values.update((r(i={},e,u),r(i,n,o),i))}},remove:function(){return t.values.remove(u)&&t.errors.remove(u)}}}}}(c)(t)(e),function(e){return function(r){return function(t){var u=function(u){return function(o){var i=r[u].get(t);if(!o&&i){var f=n({},i);return delete f[e],f}return i&&i[o]||""}};return{exists:function(){return!!r.values.get(t)},get:u("values"),getErrors:u("errors")}}}}(c)(t)(e))},function(e){return{find:function(r){return e.values.getKeys().filter(function(e){return e.match(r)})},remove:function(r){return e.values.remove(r)&&e.errors.remove(r)}}}(t))}}}});
