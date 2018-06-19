!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("k-redux-factory"),require("redux"),require("@k-ramel/driver-http"),require("lodash")):"function"==typeof define&&define.amd?define(["exports","k-redux-factory","redux","@k-ramel/driver-http","lodash"],r):r(e["k-ramel"]={},e["k-redux-factory"],e.Redux,e["@k-ramel/driver-http"],e._)}(this,function(exports,factory,redux,http,lodash){"use strict";factory=factory&&factory.hasOwnProperty("default")?factory.default:factory,http=http&&http.hasOwnProperty("default")?http.default:http;var defineProperty=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e},_extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},slicedToArray=function(){return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),toConsumableArray=function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)},reduxFactory=function(root){var subtree=function subtree(name,path){if(void 0===name)return Object.keys(root).map(function(e){return defineProperty({},e,subtree(e,""))}).reduce(function(e,r){return _extends({},e,r)},{});var nextPath=(path?path+".":"")+name,fullpath="root."+nextPath,options=eval(fullpath),type=options.type;return type?factory(_extends({name:name,path:path,prefix:path&&path.replace(/\./g,"_")||""},options)):"function"==typeof options?options:Object.keys(options).map(function(e){return defineProperty({},e,subtree(e,nextPath))}).reduce(function(e,r){return _extends({},e,r)},{})};return subtree()},withParams=["get","getBy","hasKey"],keysConfig={keyValue:[["set","add","update","addOrUpdate","remove","reset"],["get","getBy","getKeys","getAsArray","getLength","isInitialized","getState","hasKey"]],simple:[["set","update","reset"],["get","isInitialized"]]};keysConfig.simpleObject=keysConfig.simple,keysConfig["simple.object"]=keysConfig.simple,keysConfig["simple.array"]=keysConfig.simple,keysConfig["simple.bool"]=keysConfig.simple,keysConfig["simple.string"]=keysConfig.simple;var toContext=function(root,store){var subcontext=function subcontext(name,path){if(void 0===name)return Object.keys(root).map(function(e){return defineProperty({},e,subcontext(e,""))}).reduce(function(e,r){return _extends({},e,r)},{});var nextPath=(path?path+".":"")+name,fullpath="root."+nextPath,reducer=eval(fullpath);if(void 0!==reducer.krfType){var keys=keysConfig[reducer.krfType],_keys=slicedToArray(keys,2),actions=_keys[0],selectors=_keys[1],actionsObject=actions.map(function(e){var r=reducer[e];return defineProperty({},e,function(){return store.dispatch(r.apply(void 0,arguments))})}).reduce(function(e,r){return _extends({},e,r)},{}),selectorsObject=selectors.map(function(e){var r=reducer[e];return defineProperty({},e,function(){return withParams.includes(e)?r.apply(void 0,arguments)(store.getState()):r(store.getState())})}).reduce(function(e,r){return _extends({},e,r)},{});return Object.assign(reducer,actionsObject,selectorsObject)}return Object.keys(reducer).map(function(e){return defineProperty({},e,subcontext(e,nextPath))}).reduce(function(e,r){return _extends({},e,r)},{})};return subcontext()},combine=function(e){return function e(r){var t=Object.keys(r).map(function(t){var n=r[t];return defineProperty({},t,"function"==typeof n?n:e(n))}).reduce(function(e,r){return _extends({},e,r)},{});return redux.combineReducers(t)}(e)},getReduxDevToolsEnhancer=function(e){return window.devToolsExtension({name:e})},getDevTools=function(e){var r=e.name;if(e.devtools&&window&&window.devToolsExtension)return getReduxDevToolsEnhancer(r)},listenFactory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments[2],t=void 0,n=[e];return{setStore:function(e){t=e},addListeners:function(e){n=[].concat(toConsumableArray(n),[e])},removeListeners:function(e){n=n.filter(function(r){return r!==e})},enhancer:redux.applyMiddleware(function(){return function(e){return function(o){var i=r&&o.action||o,s=e(o);return n.forEach(function(e){try{e.forEach(function(e){e(i,t,t.drivers)})}catch(e){t.dispatch({type:"@@krml/EXCEPTION",payload:{from:o,exception:e,message:e.message}})}}),s}}})}},enhanceRedux=function(e){var r=e.listeners,t=e.drivers,n=e.enhancer,o=getDevTools(e),i=listenFactory(r,t,!!o),s=[n,o,i.enhancer].filter(Boolean);return{enhancer:redux.compose.apply(void 0,toConsumableArray(s)),listen:i}},defaultOptions={hideRedux:!0,enhancer:void 0,init:{},listeners:void 0,devtools:!0,name:"store",drivers:{http:http()}},createStore=function(definition){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:defaultOptions,innerOptions=_extends({},defaultOptions,options,{drivers:_extends({},defaultOptions.drivers,options.drivers)}),init=innerOptions.init,hideRedux=innerOptions.hideRedux,drivers=innerOptions.drivers,definitionWithDrivers=_extends({},definition),driversEnhancers=[],driversInits=[];Object.values(drivers).forEach(function(driver){if(driver.getReducer){var _driver$getReducer=driver.getReducer(),reducer=_driver$getReducer.reducer,path=_driver$getReducer.path;eval("definitionWithDrivers"+(path.length>0?".":"")+path+"=reducer")}driver.getEnhancer&&driversEnhancers.push(driver.getEnhancer()),driver.init&&driversInits.push(driver.init)}),innerOptions.enhancer&&driversEnhancers.push(innerOptions.enhancer),innerOptions.enhancer=redux.compose.apply(void 0,driversEnhancers);var reducerTree=reduxFactory(definitionWithDrivers),_enhanceRedux=enhanceRedux(innerOptions),enhancer=_enhanceRedux.enhancer,listen=_enhanceRedux.listen,reduxStore=redux.createStore(combine(reducerTree),init,enhancer);hideRedux&&(reducerTree=toContext(reducerTree,reduxStore));var store=_extends({},reducerTree,reduxStore,{listeners:{add:listen.addListeners,remove:listen.removeListeners}});store.drivers=Object.keys(drivers).reduce(function(e,r){return _extends({},e,defineProperty({},r,drivers[r].getDriver(store)))},{});var reduxDispatch=store.dispatch;return store.dispatch=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return"string"==typeof e?reduxDispatch({type:e}):reduxDispatch.apply(void 0,[e].concat(t))},listen.setStore(store),driversInits.forEach(function(e){return e(store)}),store},types={array:function(e){return _extends({},e,{type:"simple.array"})},bool:function(e){return _extends({},e,{type:"simple.bool"})},string:function(e){return _extends({},e,{type:"simple.string"})},object:function(e){return _extends({},e,{type:"simple.object"})},keyValue:function(e){return _extends({},e,{type:"keyValue"})}},keyValue=function(e){return console.warn('/k-ramel/ You are using a deprecated "keyValue" import. We recommend using `types` : types.object, types.array, types.bool, types.string or types.keyValue'),_extends({},e,{type:"keyValue"})},simpleObject=function(e){return console.warn('/k-ramel/ You are using a deprecated "simpleObject" import. We recommend using `types` : types.object, types.array, types.bool, types.string or types.keyValue'),_extends({},e,{type:"simple.object"})},isMatching=function(e,r){return function(t){return lodash.isString(t)&&e.type===t||lodash.isFunction(t)&&t(e,r)||lodash.isRegExp(t)&&e.type.match(t)}},_when=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return function(t,n,o){return!!r.reduce(function(e,r){return e&&isMatching(t,n)(r)},!0)&&e(t,n,o)}}},reaction=function(e){return Object.assign(e,{when:function(){return _when.apply(void 0,arguments)(e)}})},reactions=function(e){return Object.keys(e).reduce(function(r,t){return _extends({},r,defineProperty({},t,reaction(e[t])))},{})};exports.applyMiddleware=redux.applyMiddleware,exports.compose=redux.compose,exports.createStore=createStore,exports.types=types,exports.keyValue=keyValue,exports.simpleObject=simpleObject,exports.when=_when,exports.reaction=reaction,exports.reactions=reactions,Object.defineProperty(exports,"__esModule",{value:!0})});
//# sourceMappingURL=index.umd.js.map
