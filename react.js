!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("fbjs/lib/shallowEqual")):"function"==typeof define&&define.amd?define(["exports","react","fbjs/lib/shallowEqual"],t):t(e["k-simple-state-react"]={},e.React,e.shallowEqual)}(this,function(e,t,n){"use strict";var r="default"in t?t.default:t;n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e){return e.displayName||e.name||e.constructor&&e.constructor.name||"Unknown"},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};e.inject=function(e){return function(l){var f,p;return p=f=function(t){function o(t,r){i(this,o);var u=s(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t,r));return u.inject=function(){var t=u.state.injectedProps,r=e(u.context.store,u.props);n(t,r)||u.setState(function(e){return c({},e,{injectedProps:r})})},u.state={injectedProps:{}},u}return a(o,t),u(o,[{key:"componentWillMount",value:function(){var e=this;this.unsubscribe=this.context.store.subscribe(function(){e.inject()}),this.inject()}},{key:"componentWillReceiveProps",value:function(e){this.readStore(e)()}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return r.createElement(l,c({},this.props,this.state.injectedProps))}}]),o}(t.Component),f.displayName="inject("+o(l),f.contextTypes={store:function(){return null}},p}},e.provider=function(e){return function(n){var c,l;return l=c=function(t){function o(){return i(this,o),s(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return a(o,t),u(o,[{key:"getChildContext",value:function(){return{store:e}}},{key:"render",value:function(){return r.createElement(n,this.props)}}]),o}(t.Component),c.displayName="provider("+o(n)+")",c.childContextTypes={store:function(){return null}},l}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=react.js.map
