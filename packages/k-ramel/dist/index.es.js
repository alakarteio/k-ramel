import{combineReducers,applyMiddleware,compose,createStore}from"redux";export{applyMiddleware,compose}from"redux";import{factory}from"k-redux-factory";function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){_defineProperty(e,r,t[r])})}return e}function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_nonIterableRest()}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _iterableToArrayLimit(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(t.push(c.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return t}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var getFromPath=function(e,r){return r.split(".").reduce(function(e,r){return e&&e[r]},e)},reduxFactory=function(e){return function r(t,n){if(void 0===t)return Object.keys(e).map(function(e){return _defineProperty({},e,r(e,""))}).reduce(function(e,r){return _objectSpread({},e,r)},{});var o="".concat(n?"".concat(n,"."):"").concat(t),i=getFromPath(e,o);return i.type?factory(_objectSpread({name:t,path:n,prefix:n&&n.replace(/\./g,"_")||""},i)):"function"==typeof i?i:Object.keys(i).map(function(e){return _defineProperty({},e,r(e,o))}).reduce(function(e,r){return _objectSpread({},e,r)},{})}()},withParams=["get","getBy","hasKey"],keysConfig={keyValue:[["set","add","update","addOrUpdate","remove","reset"],["get","getBy","getKeys","getAsArray","getLength","isInitialized","getState","hasKey"]],simple:[["set","update","reset"],["get","isInitialized"]]};keysConfig.simpleObject=keysConfig.simple,keysConfig["simple.object"]=keysConfig.simple,keysConfig["simple.array"]=keysConfig.simple,keysConfig["simple.bool"]=keysConfig.simple,keysConfig["simple.string"]=keysConfig.simple,keysConfig["simple.number"]=keysConfig.simple;var toContext=function(e,r){return function t(n,o){if(void 0===n)return Object.keys(e).map(function(e){return _defineProperty({},e,t(e,""))}).reduce(function(e,r){return _objectSpread({},e,r)},{});var i="".concat(o?"".concat(o,"."):"").concat(n),c=getFromPath(e,i);if("RESET"===n)return c;if("function"==typeof c&&void 0===c.krfType)return c;if(void 0!==c.krfType){var a=_slicedToArray(keysConfig[c.krfType],2),u=a[0],s=a[1],d=u.map(function(e){var t=c[e];return _defineProperty({},e,function(){return r.dispatch(t.apply(void 0,arguments))})}).reduce(function(e,r){return _objectSpread({},e,r)},{}),p=s.map(function(e){var t=c[e];return _defineProperty({},e,function(){return withParams.includes(e)?t.apply(void 0,arguments)(r.getState()):t(r.getState())})}).reduce(function(e,r){return _objectSpread({},e,r)},{});return Object.assign(c,d,p)}return Object.keys(c).map(function(e){return _defineProperty({},e,t(e,i))}).reduce(function(e,r){return _objectSpread({},e,r)},{})}()},TYPE="@@krml/RESET",resetFactory=function(e){return function(){return{type:TYPE,payload:e}}},addResetFactory=function(e,r){return function(t,n){var o=resetFactory(n);if(e.hideRedux){var i=o;o=function(){return r(i())}}return t.reset=o,t.RESET=TYPE,t}},addReset=function(e){return function(r,t){var n=addResetFactory(e,t.dispatch);return function e(t,o){if(void 0===t)return Object.keys(r).map(function(r){return _defineProperty({},r,e(r,""))}).reduce(function(e,r){return _objectSpread({},e,r)},{});var i="".concat(o?"".concat(o,"."):"").concat(t),c=getFromPath(r,i),a=c;return"function"!=typeof c&&"RESET"!==t&&(a=Object.keys(c).map(function(r){return _defineProperty({},r,e(r,i))}).reduce(function(e,r){return _objectSpread({},e,r)},{})),n(c,i),a}(),n(r)}},reseter=function(e,r){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case TYPE:return r.startsWith(n.payload||"")?e(void 0,{}):t;default:return e(t,n)}}},combine=function(e){return function e(r,t){var n=Object.keys(r).map(function(n){var o=r[n],i="".concat(t?"".concat(t,"."):"").concat(n);return _defineProperty({},n,"function"==typeof o?reseter(o,i):e(o,i))}).reduce(function(e,r){return _objectSpread({},e,r)},{});return combineReducers(n)}(e,"")},getReduxDevToolsEnhancer=function(e){if("undefined"!=typeof window){var r=e.name,t=e.trace,n=e.traceLimit;return window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__({name:r,trace:t,traceLimit:n}):void 0}},getDevTools=function(e){var r=e.devtools;if(!1!==r&&(void 0!==r||"undefined"==typeof process||!process.env||"production"!==process.env.NODE_ENV))return getReduxDevToolsEnhancer(e)},listenFactory=function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>2?arguments[2]:void 0,n=[r];return{setStore:function(r){e=r},addListeners:function(e){n=_toConsumableArray(n).concat([e])},removeListeners:function(e){n=n.filter(function(r){return r!==e})},enhancer:applyMiddleware(function(){return function(r){return function(o){var i=t&&o.action||o,c=r(o);return n.forEach(function(r){try{r.forEach(function(r){r(i,e,e.drivers)})}catch(r){e.dispatch({type:"@@krml/EXCEPTION",payload:{from:o,exception:r,message:r.message}})}}),c}}})}},enhanceRedux=function(e){var r=e.listeners,t=e.drivers,n=e.enhancer,o=getDevTools(e),i=listenFactory(r,t,!!o),c=[n,o,i.enhancer].filter(Boolean);return{enhancer:compose.apply(void 0,_toConsumableArray(c)),listen:i}},defaultOptions={hideRedux:!0,enhancer:void 0,init:{},listeners:void 0,devtools:void 0,trace:!1,traceLimit:25,name:"store",drivers:{}},createStore$1=function(definition){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:defaultOptions,innerOptions=_objectSpread({},defaultOptions,options,{drivers:_objectSpread({},defaultOptions.drivers,options.drivers)}),init=innerOptions.init,hideRedux=innerOptions.hideRedux,drivers=innerOptions.drivers,definitionWithDrivers=_objectSpread({},definition),driversEnhancers=[],driversInits=[];Object.values(drivers).forEach(function(driver){if(driver.getReducer){var _driver$getReducer=driver.getReducer(),reducer=_driver$getReducer.reducer,path=_driver$getReducer.path;eval("definitionWithDrivers".concat(path.length>0?".":"").concat(path,"=reducer"))}driver.getEnhancer&&driversEnhancers.push(driver.getEnhancer()),driver.init&&driversInits.push(driver.init)}),innerOptions.enhancer&&driversEnhancers.push(innerOptions.enhancer),innerOptions.enhancer=compose.apply(void 0,driversEnhancers);var reducerTree=reduxFactory(definitionWithDrivers),_enhanceRedux=enhanceRedux(innerOptions),enhancer=_enhanceRedux.enhancer,listen=_enhanceRedux.listen,reduxStore=createStore(combine(reducerTree),init,enhancer);reducerTree=addReset(innerOptions)(reducerTree,reduxStore),hideRedux&&(reducerTree=toContext(reducerTree,reduxStore));var store=_objectSpread({},reducerTree,reduxStore,{listeners:{add:listen.addListeners,remove:listen.removeListeners}});store.drivers=Object.keys(drivers).reduce(function(e,r){return _objectSpread({},e,_defineProperty({},r,drivers[r].getDriver(store)))},{});var reduxDispatch=store.dispatch;return store.dispatch=function(e){if("string"==typeof e)return reduxDispatch({type:e});for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return reduxDispatch.apply(void 0,[e].concat(t))},listen.setStore(store),store.dispatch("@@krml/INIT"),driversInits.forEach(function(e){return e(store)}),store},types={array:function(e){return _objectSpread({},e,{type:"simple.array"})},bool:function(e){return _objectSpread({},e,{type:"simple.bool"})},string:function(e){return _objectSpread({},e,{type:"simple.string"})},object:function(e){return _objectSpread({},e,{type:"simple.object"})},number:function(e){return _objectSpread({},e,{type:"simple.number"})},keyValue:function(e){return _objectSpread({},e,{type:"keyValue"})}},keyValue=function(e){return console.warn('/k-ramel/ You are using a deprecated "keyValue" import. We recommend using `types` : types.object, types.array, types.bool, types.string or types.keyValue'),_objectSpread({},e,{type:"keyValue"})},simpleObject=function(e){return console.warn('/k-ramel/ You are using a deprecated "simpleObject" import. We recommend using `types` : types.object, types.array, types.bool, types.string or types.keyValue'),_objectSpread({},e,{type:"simple.object"})},isMatching=function(e,r){return function(t){return("string"==typeof t||t instanceof String)&&e.type===t||("function"==typeof t||t instanceof Function)&&t(e,r)||t instanceof RegExp&&e.type.match(t)}},_when=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return function(t,n,o){return!!r.reduce(function(e,r){return e&&isMatching(t,n)(r)},!0)&&e(t,n,o)}}},reaction=function(e){return Object.assign(e,{when:function(){return _when.apply(void 0,arguments)(e)}})},reactions=function(e){return Object.keys(e).reduce(function(r,t){return _objectSpread({},r,_defineProperty({},t,reaction(e[t])))},{})};export{createStore$1 as createStore,types,keyValue,simpleObject,_when as when,reaction,reactions};
