/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';(function(v,m){"object"===typeof exports&&"undefined"!==typeof module?module.exports=m():"function"===typeof define&&define.amd?define(m):v.React=m()})(this,function(){function v(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(a,
b,c){this.props=a;this.context=b;this.refs=da;this.updater=c||ea}function fa(){}function M(a,b,c){this.props=a;this.context=b;this.refs=da;this.updater=c||ea}function ha(a,b,c){var d,e={},p=null,f=null;if(null!=b)for(d in void 0!==b.ref&&(f=b.ref),void 0!==b.key&&(p=""+b.key),b)ia.call(b,d)&&!ja.hasOwnProperty(d)&&(e[d]=b[d]);var g=arguments.length-2;if(1===g)e.children=c;else if(1<g){for(var k=Array(g),h=0;h<g;h++)k[h]=arguments[h+2];e.children=k}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===
e[d]&&(e[d]=g[d]);return{$$typeof:y,type:a,key:p,ref:f,props:e,_owner:N.current}}function wa(a,b){return{$$typeof:y,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===y}function xa(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}function ka(a,b,c,d){if(D.length){var e=D.pop();e.result=a;e.keyPrefix=b;e.func=c;e.context=d;e.count=0;return e}return{result:a,keyPrefix:b,func:c,context:d,count:0}}
function la(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>D.length&&D.push(a)}function P(a,b,c,d){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var p=!1;if(null===a)p=!0;else switch(e){case "string":case "number":p=!0;break;case "object":switch(a.$$typeof){case y:case ya:p=!0}}if(p)return c(d,a,""===b?"."+Q(a,0):b),1;p=0;b=""===b?".":b+":";if(Array.isArray(a))for(var f=0;f<a.length;f++){e=a[f];var g=b+Q(e,f);p+=P(e,g,c,d)}else if(null===a||"object"!==typeof a?
g=null:(g=ma&&a[ma]||a["@@iterator"],g="function"===typeof g?g:null),"function"===typeof g)for(a=g.call(a),f=0;!(e=a.next()).done;)e=e.value,g=b+Q(e,f++),p+=P(e,g,c,d);else if("object"===e)throw c=""+a,Error(v(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return p}function R(a,b,c){return null==a?0:P(a,"",b,c)}function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?xa(a.key):b.toString(36)}function za(a,b,c){a.func.call(a.context,b,a.count++)}function Aa(a,
b,c){var d=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?S(a,d,c,function(a){return a}):null!=a&&(O(a)&&(a=wa(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(na,"$&/")+"/")+c)),d.push(a))}function S(a,b,c,d,e){var f="";null!=c&&(f=(""+c).replace(na,"$&/")+"/");b=ka(b,f,d,e);R(a,Aa,b);la(b)}function t(){var a=oa.current;if(null===a)throw Error(v(321));return a}function T(a,b){var c=a.length;a.push(b);a:for(;;){var d=Math.floor((c-1)/2),e=a[d];if(void 0!==e&&0<E(e,
b))a[d]=b,a[c]=e,c=d;else break a}}function n(a){a=a[0];return void 0===a?null:a}function F(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var f=2*(d+1)-1,h=a[f],g=f+1,k=a[g];if(void 0!==h&&0>E(h,c))void 0!==k&&0>E(k,h)?(a[d]=k,a[g]=c,d=g):(a[d]=h,a[f]=c,d=f);else if(void 0!==k&&0>E(k,c))a[d]=k,a[g]=c,d=g;else break a}}return b}return null}function E(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}function G(a){for(var b=n(u);null!==b;){if(null===
b.callback)F(u);else if(b.startTime<=a)F(u),b.sortIndex=b.expirationTime,T(q,b);else break;b=n(u)}}function U(a){z=!1;G(a);if(!w)if(null!==n(q))w=!0,A(V);else{var b=n(u);null!==b&&H(U,b.startTime-a)}}function V(a,b){w=!1;z&&(z=!1,W());I=!0;var c=h;try{G(b);for(l=n(q);null!==l&&(!(l.expirationTime>b)||a&&!X());){var d=l.callback;if(null!==d){l.callback=null;h=l.priorityLevel;var e=d(l.expirationTime<=b);b=r();"function"===typeof e?l.callback=e:l===n(q)&&F(q);G(b)}else F(q);l=n(q)}if(null!==l)var f=
!0;else{var m=n(u);null!==m&&H(U,m.startTime-b);f=!1}return f}finally{l=null,h=c,I=!1}}function pa(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var f="function"===typeof Symbol&&Symbol.for,y=f?Symbol.for("react.element"):60103,ya=f?Symbol.for("react.portal"):60106,x=f?Symbol.for("react.fragment"):60107,Y=f?Symbol.for("react.strict_mode"):60108,Ba=f?Symbol.for("react.profiler"):60114,Ca=f?Symbol.for("react.provider"):60109,Da=f?Symbol.for("react.context"):
60110,Ea=f?Symbol.for("react.forward_ref"):60112,Fa=f?Symbol.for("react.suspense"):60113;f&&Symbol.for("react.suspense_list");var Ga=f?Symbol.for("react.memo"):60115,Ha=f?Symbol.for("react.lazy"):60116;f&&Symbol.for("react.fundamental");f&&Symbol.for("react.responder");f&&Symbol.for("react.scope");var ma="function"===typeof Symbol&&Symbol.iterator,qa=Object.getOwnPropertySymbols,Ia=Object.prototype.hasOwnProperty,Ja=Object.prototype.propertyIsEnumerable,J=function(){try{if(!Object.assign)return!1;
var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return!1;var b={};for(a=0;10>a;a++)b["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(b).map(function(a){return b[a]}).join(""))return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},c)).join("")?!1:!0}catch(d){return!1}}()?Object.assign:function(a,b){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");
var c=Object(a);for(var d,e=1;e<arguments.length;e++){var f=Object(arguments[e]);for(var h in f)Ia.call(f,h)&&(c[h]=f[h]);if(qa){d=qa(f);for(var g=0;g<d.length;g++)Ja.call(f,d[g])&&(c[d[g]]=f[d[g]])}}return c},ea={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,c){},enqueueReplaceState:function(a,b,c,d){},enqueueSetState:function(a,b,c,d){}},da={};m.prototype.isReactComponent={};m.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(v(85));
this.updater.enqueueSetState(this,a,b,"setState")};m.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};fa.prototype=m.prototype;f=M.prototype=new fa;f.constructor=M;J(f,m.prototype);f.isPureReactComponent=!0;var oa={current:null},N={current:null},ia=Object.prototype.hasOwnProperty,ja={key:!0,ref:!0,__self:!0,__source:!0},na=/\/+/g,D=[],Z;if("undefined"===typeof window||"function"!==typeof MessageChannel){var B=null,ra=null,sa=function(){if(null!==B)try{var a=
r();B(!0,a);B=null}catch(b){throw setTimeout(sa,0),b;}},Ka=Date.now();var r=function(){return Date.now()-Ka};var A=function(a){null!==B?setTimeout(A,0,a):(B=a,setTimeout(sa,0))};var H=function(a,b){ra=setTimeout(a,b)};var W=function(){clearTimeout(ra)};var X=function(){return!1};f=Z=function(){}}else{var aa=window.performance,ta=window.Date,La=window.setTimeout,Ma=window.clearTimeout;"undefined"!==typeof console&&(f=window.cancelAnimationFrame,"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof f&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));if("object"===typeof aa&&"function"===typeof aa.now)r=function(){return aa.now()};else{var Na=ta.now();r=function(){return ta.now()-Na}}var K=!1,L=null,ba=-1,ua=5,va=0;X=function(){return r()>=va};f=function(){};Z=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):
ua=0<a?Math.floor(1E3/a):5};var C=new MessageChannel,ca=C.port2;C.port1.onmessage=function(){if(null!==L){var a=r();va=a+ua;try{L(!0,a)?ca.postMessage(null):(K=!1,L=null)}catch(b){throw ca.postMessage(null),b;}}else K=!1};A=function(a){L=a;K||(K=!0,ca.postMessage(null))};H=function(a,b){ba=La(function(){a(r())},b)};W=function(){Ma(ba);ba=-1}}var q=[],u=[],Oa=1,l=null,h=3,I=!1,w=!1,z=!1,Pa=0;C={ReactCurrentDispatcher:oa,ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:J};J(C,{Scheduler:{unstable_ImmediatePriority:1,
unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=h;h=a;try{return b()}finally{h=c}},unstable_next:function(a){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var c=h;h=b;try{return a()}finally{h=c}},unstable_scheduleCallback:function(a,b,c){var d=r();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+
e:d;c="number"===typeof c.timeout?c.timeout:pa(a)}else c=pa(a),e=d;c=e+c;a={id:Oa++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,T(u,a),null===n(q)&&a===n(u)&&(z?W():z=!0,H(U,e-d))):(a.sortIndex=c,T(q,a),w||I||(w=!0,A(V)));return a},unstable_cancelCallback:function(a){a.callback=null},unstable_wrapCallback:function(a){var b=h;return function(){var c=h;h=b;try{return a.apply(this,arguments)}finally{h=c}}},unstable_getCurrentPriorityLevel:function(){return h},
unstable_shouldYield:function(){var a=r();G(a);var b=n(q);return b!==l&&null!==l&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<l.expirationTime||X()},unstable_requestPaint:f,unstable_continueExecution:function(){w||I||(w=!0,A(V))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return n(q)},get unstable_now(){return r},get unstable_forceFrameRate(){return Z},unstable_Profiling:null},SchedulerTracing:{get __interactionsRef(){return null},get __subscriberRef(){return null},
unstable_clear:function(a){return a()},unstable_getCurrent:function(){return null},unstable_getThreadID:function(){return++Pa},unstable_trace:function(a,b,c){return c()},unstable_wrap:function(a){return a},unstable_subscribe:function(a){},unstable_unsubscribe:function(a){}}});x={Children:{map:function(a,b,c){if(null==a)return a;var d=[];S(a,d,null,b,c);return d},forEach:function(a,b,c){if(null==a)return a;b=ka(null,null,b,c);R(a,za,b);la(b)},count:function(a){return R(a,function(){return null},null)},
toArray:function(a){var b=[];S(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(v(143));return a}},createRef:function(){return{current:null}},Component:m,PureComponent:M,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:Da,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:Ca,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:Ea,render:a}},lazy:function(a){return{$$typeof:Ha,
_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:Ga,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return t().useCallback(a,b)},useContext:function(a,b){return t().useContext(a,b)},useEffect:function(a,b){return t().useEffect(a,b)},useImperativeHandle:function(a,b,c){return t().useImperativeHandle(a,b,c)},useDebugValue:function(a,b){},useLayoutEffect:function(a,b){return t().useLayoutEffect(a,b)},useMemo:function(a,b){return t().useMemo(a,b)},useReducer:function(a,
b,c){return t().useReducer(a,b,c)},useRef:function(a){return t().useRef(a)},useState:function(a){return t().useState(a)},Fragment:x,Profiler:Ba,StrictMode:Y,Suspense:Fa,createElement:ha,cloneElement:function(a,b,c){if(null===a||void 0===a)throw Error(v(267,a));var d=J({},a.props),e=a.key,f=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(f=b.ref,h=N.current);void 0!==b.key&&(e=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(k in b)ia.call(b,k)&&!ja.hasOwnProperty(k)&&(d[k]=void 0===
b[k]&&void 0!==g?g[k]:b[k])}var k=arguments.length-2;if(1===k)d.children=c;else if(1<k){g=Array(k);for(var l=0;l<k;l++)g[l]=arguments[l+2];d.children=g}return{$$typeof:y,type:a.type,key:e,ref:f,props:d,_owner:h}},createFactory:function(a){var b=ha.bind(null,a);b.type=a;return b},isValidElement:O,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:C};x=(Y={default:x},x)||Y;return x.default||x});

/** @license React v16.12.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';(function(la,m){"object"===typeof exports&&"undefined"!==typeof module?module.exports=m(require("react")):"function"===typeof define&&define.amd?define(["react"],m):la.ReactDOM=m(la.React)})(this,function(la){function m(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function uf(){if(qc)for(var a in bb){var b=bb[a],c=qc.indexOf(a);if(!(-1<c))throw Error(m(96,a));if(!rc[c]){if(!b.extractEvents)throw Error(m(97,a));rc[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(wd.hasOwnProperty(h))throw Error(m(99,h));wd[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&vf(k[e],g,h);e=!0}else f.registrationName?(vf(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(m(98,d,a));}}}}function vf(a,b,c){if(cb[a])throw Error(m(100,
a));cb[a]=b;xd[a]=b.eventTypes[c].dependencies}function Ai(a,b,c,d,e,f,g,h,k){Cb=!1;sc=null;Bi.apply(Ci,arguments)}function Di(a,b,c,d,e,f,g,h,k){Ai.apply(this,arguments);if(Cb){if(Cb){var l=sc;Cb=!1;sc=null}else throw Error(m(198));tc||(tc=!0,yd=l)}}function wf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=xf(c);Di(d,b,void 0,a);a.currentTarget=null}function db(a,b){if(null==b)throw Error(m(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);
return a}return Array.isArray(b)?[a].concat(b):[a,b]}function zd(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}function uc(a){null!==a&&(Db=db(Db,a));a=Db;Db=null;if(a){zd(a,Ei);if(Db)throw Error(m(95));if(tc)throw a=yd,tc=!1,yd=null,a;}}function yf(a,b){var c=a.stateNode;if(!c)return null;var d=Ad(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=
!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(m(231,b,typeof c));return c}function Eb(a){if(null===a||"object"!==typeof a)return null;a=zf&&a[zf]||a["@@iterator"];return"function"===typeof a?a:null}function Fi(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=
2,a._result=b)})}}function ua(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case va:return"Fragment";case eb:return"Portal";case vc:return"Profiler";case Af:return"StrictMode";case wc:return"Suspense";case Bd:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Bf:return"Context.Consumer";case Cf:return"Context.Provider";case Cd:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?
"ForwardRef("+b+")":"ForwardRef");case Dd:return ua(a.type);case Df:if(a=1===a._status?a._result:null)return ua(a)}return null}function Ed(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=ua(a.type);c=null;d&&(c=ua(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Gi,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}function Ef(a){if(a=Ff(a)){if("function"!==
typeof Fd)throw Error(m(280));var b=Ad(a.stateNode);Fd(a.stateNode,a.type,b)}}function Gf(a){fb?gb?gb.push(a):gb=[a]:fb=a}function Hf(){if(fb){var a=fb,b=gb;gb=fb=null;Ef(a);if(b)for(a=0;a<b.length;a++)Ef(b[a])}}function Gd(){if(null!==fb||null!==gb)Hd(),Hf()}function Hi(a){if(If.call(Jf,a))return!0;if(If.call(Kf,a))return!1;if(Ii.test(a))return Jf[a]=!0;Kf[a]=!0;return!1}function Ji(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;
if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function Ki(a,b,c,d){if(null===b||"undefined"===typeof b||Ji(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function E(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=
f}function wa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Id(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ki(b,c,e,d)&&(c=null),d||null===e?Hi(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===
c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}function Lf(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}function Li(a){var b=Lf(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,
get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=null;delete a[b]}}}}function xc(a){a._valueTracker||(a._valueTracker=Li(a))}function Mf(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Lf(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Jd(a,
b){var c=b.checked;return J({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Nf(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=wa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Of(a,b){b=b.checked;null!=b&&Id(a,"checked",b,!1)}function Kd(a,b){Of(a,b);var c=wa(b.value),
d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Ld(a,b.type,c):b.hasOwnProperty("defaultValue")&&Ld(a,b.type,wa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}function Pf(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==
d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}function Ld(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Mi(a){var b="";la.Children.forEach(a,function(a){null!=a&&(b+=a)});
return b}function Md(a,b){a=J({children:void 0},b);if(b=Mi(b.children))a.children=b;return a}function hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+wa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}function Nd(a,b){if(null!=
b.dangerouslySetInnerHTML)throw Error(m(91));return J({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Qf(a,b){var c=b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw Error(m(92));if(Array.isArray(b)){if(!(1>=b.length))throw Error(m(93));b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:wa(c)}}function Rf(a,b){var c=wa(b.value),d=wa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==
c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Sf(a,b){b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function Tf(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Od(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Tf(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}function yc(a,b){var c=
{};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}function zc(a){if(Pd[a])return Pd[a];if(!ib[a])return a;var b=ib[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Uf)return Pd[a]=b[c];return a}function Na(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Vf(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));
if(null!==b)return b.dehydrated}return null}function Wf(a){if(Na(a)!==a)throw Error(m(188));}function Ni(a){var b=a.alternate;if(!b){b=Na(a);if(null===b)throw Error(m(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Wf(e),a;if(f===d)return Wf(e),b;f=f.sibling}throw Error(m(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===
c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(m(189));}}if(c.alternate!==d)throw Error(m(190));}if(3!==c.tag)throw Error(m(188));return c.stateNode.current===c?a:b}function Xf(a){a=Ni(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=
b.return;b=b.sibling}}return null}function Oi(a){var b=Qd(a);Rd.forEach(function(c){Sd(c,a,b)});Pi.forEach(function(c){Sd(c,a,b)})}function Td(a,b,c,d){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:d}}function Yf(a,b){switch(a){case "focus":case "blur":xa=null;break;case "dragenter":case "dragleave":ya=null;break;case "mouseover":case "mouseout":za=null;break;case "pointerover":case "pointerout":Fb.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Gb.delete(b.pointerId)}}
function Hb(a,b,c,d,e){if(null===a||a.nativeEvent!==e)return a=Td(b,c,d,e),null!==b&&(b=Ib(b),null!==b&&Zf(b)),a;a.eventSystemFlags|=d;return a}function Qi(a,b,c,d){switch(b){case "focus":return xa=Hb(xa,a,b,c,d),!0;case "dragenter":return ya=Hb(ya,a,b,c,d),!0;case "mouseover":return za=Hb(za,a,b,c,d),!0;case "pointerover":var e=d.pointerId;Fb.set(e,Hb(Fb.get(e)||null,a,b,c,d));return!0;case "gotpointercapture":return e=d.pointerId,Gb.set(e,Hb(Gb.get(e)||null,a,b,c,d)),!0}return!1}function Ri(a){var b=
Jb(a.target);if(null!==b){var c=Na(b);if(null!==c)if(b=c.tag,13===b){if(b=Vf(c),null!==b){a.blockedOn=b;Ud(a.priority,function(){Si(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Ac(a){if(null!==a.blockedOn)return!1;var b=Vd(a.topLevelType,a.eventSystemFlags,a.nativeEvent);if(null!==b){var c=Ib(b);null!==c&&Zf(c);a.blockedOn=b;return!1}return!0}function $f(a,b,c){Ac(a)&&c.delete(b)}function Ti(){for(Wd=!1;0<ba.length;){var a=
ba[0];if(null!==a.blockedOn){a=Ib(a.blockedOn);null!==a&&Ui(a);break}var b=Vd(a.topLevelType,a.eventSystemFlags,a.nativeEvent);null!==b?a.blockedOn=b:ba.shift()}null!==xa&&Ac(xa)&&(xa=null);null!==ya&&Ac(ya)&&(ya=null);null!==za&&Ac(za)&&(za=null);Fb.forEach($f);Gb.forEach($f)}function Kb(a,b){a.blockedOn===b&&(a.blockedOn=null,Wd||(Wd=!0,ag(bg,Ti)))}function cg(a){if(0<ba.length){Kb(ba[0],a);for(var b=1;b<ba.length;b++){var c=ba[b];c.blockedOn===a&&(c.blockedOn=null)}}null!==xa&&Kb(xa,a);null!==
ya&&Kb(ya,a);null!==za&&Kb(za,a);b=function(b){return Kb(b,a)};Fb.forEach(b);Gb.forEach(b);for(b=0;b<Lb.length;b++)c=Lb[b],c.blockedOn===a&&(c.blockedOn=null);for(;0<Lb.length&&(b=Lb[0],null===b.blockedOn);)Ri(b),null===b.blockedOn&&Lb.shift()}function Xd(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function ma(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function dg(a,b,c){if(b=yf(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=
db(c._dispatchListeners,b),c._dispatchInstances=db(c._dispatchInstances,a)}function Vi(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=ma(b);for(b=c.length;0<b--;)dg(c[b],"captured",a);for(b=0;b<c.length;b++)dg(c[b],"bubbled",a)}}function Yd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=yf(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=db(c._dispatchListeners,b),c._dispatchInstances=db(c._dispatchInstances,a))}function Wi(a){a&&a.dispatchConfig.registrationName&&
Yd(a._targetInst,null,a)}function jb(a){zd(a,Vi)}function Bc(){return!0}function Cc(){return!1}function M(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?Bc:Cc;this.isPropagationStopped=Cc;return this}function Xi(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();
this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function Yi(a){if(!(a instanceof this))throw Error(m(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function eg(a){a.eventPool=[];a.getPooled=Xi;a.release=Yi}function Dc(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function Zi(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=$i[a])?!!b[a]:!1}function Zd(a){return Zi}function aj(a){var b=
a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=Jb(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Xd(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=a.eventSystemFlags,h=null,k=0;k<rc.length;k++){var l=rc[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=db(h,l))}uc(h)}}function x(a,b){Mb(b,a,
!1)}function Mb(a,b,c){switch(bj(b)){case 0:var d=cj.bind(null,b,1);break;case 1:d=dj.bind(null,b,1);break;default:d=Ec.bind(null,b,1)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function cj(a,b,c){Oa||Hd();var d=Ec,e=Oa;Oa=!0;try{fg(d,a,b,c)}finally{(Oa=e)||Gd()}}function dj(a,b,c){ej(fj,Ec.bind(null,a,b,c))}function gg(a,b,c,d){if(Fc.length){var e=Fc.pop();e.topLevelType=a;e.eventSystemFlags=b;e.nativeEvent=c;e.targetInst=d;a=e}else a={topLevelType:a,eventSystemFlags:b,nativeEvent:c,
targetInst:d,ancestors:[]};try{if(b=aj,c=a,$d)b(c,void 0);else{$d=!0;try{hg(b,c,void 0)}finally{$d=!1,Gd()}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,Fc.length<gj&&Fc.push(a)}}function Ec(a,b,c){if(Gc)if(0<ba.length&&-1<Rd.indexOf(a))a=Td(null,a,b,c),ba.push(a);else{var d=Vd(a,b,c);null===d?Yf(a,c):-1<Rd.indexOf(a)?(a=Td(d,a,b,c),ba.push(a)):Qi(d,a,b,c)||(Yf(a,c),gg(a,b,c,null))}}function Vd(a,b,c){var d=Xd(c);d=Jb(d);if(null!==d){var e=Na(d);if(null===
e)d=null;else{var f=e.tag;if(13===f){d=Vf(e);if(null!==d)return d;d=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;d=null}else e!==d&&(d=null)}}gg(a,b,c,d);return null}function ig(a){if(!Aa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Qd(a){var b=jg.get(a);void 0===b&&(b=new Set,jg.set(a,b));return b}function Sd(a,b,c){if(!c.has(a)){switch(a){case "scroll":Mb(b,
"scroll",!0);break;case "focus":case "blur":Mb(b,"focus",!0);Mb(b,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":ig(a)&&Mb(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===Nb.indexOf(a)&&x(a,b)}c.add(a)}}function kg(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||Ob.hasOwnProperty(a)&&Ob[a]?(""+b).trim():b+"px"}function lg(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=kg(c,
b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}function ae(a,b){if(b){if(hj[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(m(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(m(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(m(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(m(62,""));}}function be(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;
default:return!0}}function na(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Qd(a);b=xd[b];for(var d=0;d<b.length;d++)Sd(b[d],a,c)}function Hc(){}function ce(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function mg(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function ng(a,b){var c=mg(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,
offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=mg(c)}}function og(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?og(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function pg(){for(var a=window,b=ce();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=ce(a.document)}return b}
function de(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}function qg(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function ee(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&
null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function kb(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function rg(a){a=a.previousSibling;for(var b=0;a;){if(a.nodeType===Pa){var c=a.data;if(c===sg||c===fe||c===ge){if(0===b)return a;b--}else c===tg&&b++}a=a.previousSibling}return null}function Jb(a){var b=a[Ba];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Pb]||c[Ba]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=rg(a);null!==
a;){if(c=a[Ba])return c;a=rg(a)}return b}a=c;c=a.parentNode}return null}function Ib(a){a=a[Ba]||a[Pb];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Qa(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(m(33));}function he(a){return a[Ic]||null}function ug(){if(Jc)return Jc;var a,b=ie,c=b.length,d,e="value"in Ca?Ca.value:Ca.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return Jc=e.slice(a,1<d?1-d:void 0)}function vg(a,
b){switch(a){case "keyup":return-1!==ij.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function wg(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}function jj(a,b){switch(a){case "compositionend":return wg(b);case "keypress":if(32!==b.which)return null;xg=!0;return yg;case "textInput":return a=b.data,a===yg&&xg?null:a;default:return null}}function kj(a,b){if(lb)return"compositionend"===a||!je&&vg(a,b)?
(a=ug(),Jc=ie=Ca=null,lb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return zg&&"ko"!==b.locale?null:b.data;default:return null}}function Ag(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!lj[a.type]:"textarea"===b?!0:!1}function Bg(a,b,c){a=M.getPooled(Cg.change,a,b,c);a.type="change";
Gf(c);jb(a);return a}function mj(a){uc(a)}function Kc(a){var b=Qa(a);if(Mf(b))return a}function nj(a,b){if("change"===a)return b}function Dg(){Qb&&(Qb.detachEvent("onpropertychange",Eg),Rb=Qb=null)}function Eg(a){if("value"===a.propertyName&&Kc(Rb))if(a=Bg(Rb,a,Xd(a)),Oa)uc(a);else{Oa=!0;try{ke(mj,a)}finally{Oa=!1,Gd()}}}function oj(a,b,c){"focus"===a?(Dg(),Qb=b,Rb=c,Qb.attachEvent("onpropertychange",Eg)):"blur"===a&&Dg()}function pj(a,b){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Kc(Rb)}
function qj(a,b){if("click"===a)return Kc(b)}function rj(a,b){if("input"===a||"change"===a)return Kc(b)}function sj(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function Sb(a,b){if(Ra(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!tj.call(b,c[d])||!Ra(a[c[d]],b[c[d]]))return!1;return!0}function Fg(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;
if(le||null==mb||mb!==ce(c))return null;c=mb;"selectionStart"in c&&de(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Tb&&Sb(Tb,c)?null:(Tb=c,a=M.getPooled(Gg.select,me,a,b),a.type="select",a.target=mb,jb(a),a)}function B(a,b){0>nb||(a.current=ne[nb],ne[nb]=null,nb--)}function y(a,b,c){nb++;ne[nb]=a.current;a.current=
b}function ob(a,b){var c=a.type.contextTypes;if(!c)return Da;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function K(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Lc(a){B(Q,a);B(L,a)}function oe(a){B(Q,a);B(L,a)}function Hg(a,b,c){if(L.current!==Da)throw Error(m(168));
y(L,b,a);y(Q,c,a)}function Ig(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(m(108,ua(b)||"Unknown",e));return J({},c,{},d)}function Mc(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Da;Sa=L.current;y(L,b,a);y(Q,Q.current,a);return!0}function Jg(a,b,c){var d=a.stateNode;if(!d)throw Error(m(169));c?(b=Ig(a,b,Sa),d.__reactInternalMemoizedMergedChildContext=b,B(Q,a),
B(L,a),y(L,b,a)):B(Q,a);y(Q,c,a)}function pe(){switch(uj()){case Nc:return 99;case Kg:return 98;case Lg:return 97;case Mg:return 96;case Ng:return 95;default:throw Error(m(332));}}function Og(a){switch(a){case 99:return Nc;case 98:return Kg;case 97:return Lg;case 96:return Mg;case 95:return Ng;default:throw Error(m(332));}}function pb(a,b){a=Og(a);return vj(a,b)}function Pg(a,b,c){a=Og(a);return qe(a,b,c)}function Qg(a){null===oa?(oa=[a],Oc=qe(Nc,Rg)):oa.push(a);return Sg}function ca(){if(null!==
Oc){var a=Oc;Oc=null;Tg(a)}Rg()}function Rg(){if(!re&&null!==oa){re=!0;var a=0;try{var b=oa;pb(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});oa=null}catch(c){throw null!==oa&&(oa=oa.slice(a+1)),qe(Nc,ca),c;}finally{re=!1}}}function Pc(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function V(a,b){if(a&&a.defaultProps){b=J({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}function se(){Qc=qb=Rc=null}function Ug(a,b){var c=a.type._context;
y(te,c._currentValue,a);c._currentValue=b}function ue(a){var b=te.current;B(te,a);a.type._context._currentValue=b}function Vg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function rb(a,b){Rc=a;Qc=qb=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(da=!0),a.firstContext=null)}function ea(a,
b){if(Qc!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Qc=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===qb){if(null===Rc)throw Error(m(308));qb=b;Rc.dependencies={expirationTime:0,firstContext:b,responders:null}}else qb=qb.next=b}return a._currentValue}function Sc(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function ve(a){return{baseState:a.baseState,
firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Ea(a,b){return{expirationTime:a,suspenseConfig:b,tag:Wg,payload:null,callback:null,next:null,nextEffect:null}}function Tc(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}function Fa(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=
Sc(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Sc(a.memoizedState),e=c.updateQueue=Sc(c.memoizedState)):d=a.updateQueue=ve(e):null===e&&(e=c.updateQueue=ve(d));null===e||d===e?Tc(d,b):null===d.lastUpdate||null===e.lastUpdate?(Tc(d,b),Tc(e,b)):(Tc(d,b),e.lastUpdate=b)}function Xg(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Sc(a.memoizedState):Yg(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=
b,c.lastCapturedUpdate=b)}function Yg(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ve(b));return b}function Zg(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-4097|64;case Wg:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return J({},d,e);case Uc:Ga=!0}return d}function Ub(a,b,c,d,e){Ga=!1;b=Yg(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=
k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):($g(m,k.suspenseConfig),l=Zg(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var n=k.expirationTime;n<e?(null===m&&(m=k,null===g&&(f=l)),h<n&&(h=n)):(l=Zg(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=
k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;Vc(h);a.expirationTime=h;a.memoizedState=l}function ah(a,b,c,d){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);bh(b.firstEffect,c);b.firstEffect=
b.lastEffect=null;bh(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function bh(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw Error(m(191,c));c.call(d)}a=a.nextEffect}}function Wc(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:J({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}function ch(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?
a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Sb(c,d)||!Sb(e,f):!0}function dh(a,b,c,d){var e=!1;d=Da;var f=b.contextType;"object"===typeof f&&null!==f?f=ea(f):(d=K(b)?Sa:L.current,e=b.contextTypes,f=(e=null!==e&&void 0!==e)?ob(a,d):Da);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Xc;a.stateNode=b;b._reactInternalFiber=a;e&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=d,a.__reactInternalMemoizedMaskedChildContext=
f);return b}function eh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Xc.enqueueReplaceState(b,b.state,null)}function we(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=fh;var f=b.contextType;"object"===typeof f&&null!==f?e.context=ea(f):(f=K(b)?Sa:L.current,e.context=ob(a,f));f=a.updateQueue;null!==f&&(Ub(a,f,c,e,d),
e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Wc(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Xc.enqueueReplaceState(e,e.state,
null),f=a.updateQueue,null!==f&&(Ub(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}function Vb(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(m(309));var d=c.stateNode}if(!d)throw Error(m(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===fh&&(b=d.refs={});null===a?delete b[e]:b[e]=a};
b._stringRef=e;return b}if("string"!==typeof a)throw Error(m(284));if(!c._owner)throw Error(m(290,a));}return a}function Yc(a,b){if("textarea"!==a.type)throw Error(m(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}function gh(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;
return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Ta(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xe(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,
b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Vb(a,b,c),d.return=a,d;d=Zc(c.type,c.key,c.props,null,a.mode,d);d.ref=Vb(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=ye(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function p(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ha(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}
function n(a,b,c){if("string"===typeof b||"number"===typeof b)return b=xe(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case $c:return c=Zc(b.type,b.key,b.props,null,a.mode,c),c.ref=Vb(a,null,b),c.return=a,c;case eb:return b=ye(b,a.mode,c),b.return=a,b}if(ad(b)||Eb(b))return b=Ha(b,a.mode,c,null),b.return=a,b;Yc(a,b)}return null}function q(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===
typeof c&&null!==c){switch(c.$$typeof){case $c:return c.key===e?c.type===va?p(a,b,c.props.children,d,e):k(a,b,c,d):null;case eb:return c.key===e?l(a,b,c,d):null}if(ad(c)||Eb(c))return null!==e?null:p(a,b,c,d,null);Yc(a,c)}return null}function v(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case $c:return a=a.get(null===d.key?c:d.key)||null,d.type===va?p(b,a,d.props.children,e,d.key):k(b,a,d,e);case eb:return a=
a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(ad(d)||Eb(d))return a=a.get(c)||null,p(b,a,d,e,null);Yc(b,d)}return null}function x(e,g,h,k){for(var l=null,m=null,p=g,t=g=0,z=null;null!==p&&t<h.length;t++){p.index>t?(z=p,p=null):z=p.sibling;var W=q(e,p,h[t],k);if(null===W){null===p&&(p=z);break}a&&p&&null===W.alternate&&b(e,p);g=f(W,g,t);null===m?l=W:m.sibling=W;m=W;p=z}if(t===h.length)return c(e,p),l;if(null===p){for(;t<h.length;t++)p=n(e,h[t],k),null!==p&&(g=f(p,g,t),null===m?l=p:m.sibling=p,m=
p);return l}for(p=d(e,p);t<h.length;t++)z=v(p,e,t,h[t],k),null!==z&&(a&&null!==z.alternate&&p.delete(null===z.key?t:z.key),g=f(z,g,t),null===m?l=z:m.sibling=z,m=z);a&&p.forEach(function(a){return b(e,a)});return l}function A(e,g,h,k){var l=Eb(h);if("function"!==typeof l)throw Error(m(150));h=l.call(h);if(null==h)throw Error(m(151));for(var p=l=null,t=g,z=g=0,W=null,r=h.next();null!==t&&!r.done;z++,r=h.next()){t.index>z?(W=t,t=null):W=t.sibling;var sb=q(e,t,r.value,k);if(null===sb){null===t&&(t=W);
break}a&&t&&null===sb.alternate&&b(e,t);g=f(sb,g,z);null===p?l=sb:p.sibling=sb;p=sb;t=W}if(r.done)return c(e,t),l;if(null===t){for(;!r.done;z++,r=h.next())r=n(e,r.value,k),null!==r&&(g=f(r,g,z),null===p?l=r:p.sibling=r,p=r);return l}for(t=d(e,t);!r.done;z++,r=h.next())r=v(t,e,z,r.value,k),null!==r&&(a&&null!==r.alternate&&t.delete(null===r.key?z:r.key),g=f(r,g,z),null===p?l=r:p.sibling=r,p=r);a&&t.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==
f&&f.type===va&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case $c:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===va:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===va?f.props.children:f.props,h);d.ref=Vb(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=k.sibling}f.type===va?(d=Ha(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Zc(f.type,f.key,f.props,null,a.mode,h),h.ref=Vb(a,d,f),h.return=a,a=h)}return g(a);
case eb:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=ye(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=xe(f,a.mode,h),d.return=a,a=d),g(a);if(ad(f))return x(a,d,f,h);if(Eb(f))return A(a,
d,f,h);l&&Yc(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(m(152,a.displayName||a.name||"Component"));}return c(a,d)}}function Ua(a){if(a===Wb)throw Error(m(174));return a}function ze(a,b){y(Xb,b,a);y(Yb,a,a);y(fa,Wb,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Od(null,"");break;default:c=c===Pa?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Od(b,c)}B(fa,a);y(fa,b,a)}function tb(a){B(fa,a);B(Yb,a);B(Xb,a)}function hh(a){Ua(Xb.current);
var b=Ua(fa.current);var c=Od(b,a.type);b!==c&&(y(Yb,a,a),y(fa,c,a))}function Ae(a){Yb.current===a&&(B(fa,a),B(Yb,a))}function bd(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===ge||c.data===fe))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;
b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}function N(){throw Error(m(321));}function Be(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!Ra(a[c],b[c]))return!1;return!0}function Ce(a,b,c,d,e,f){Zb=f;Ia=b;ha=null!==a?a.memoizedState:null;cd.current=null===ha?wj:jh;b=c(d,e);if($b){do $b=!1,ac+=1,ha=null!==a?a.memoizedState:null,ub=vb,ia=O=H=null,cd.current=jh,b=c(d,e);while($b);pa=null;ac=0}cd.current=dd;a=Ia;a.memoizedState=
vb;a.expirationTime=wb;a.updateQueue=ia;a.effectTag|=bc;a=null!==H&&null!==H.next;Zb=0;ub=O=vb=ha=H=Ia=null;wb=0;ia=null;bc=0;if(a)throw Error(m(300));return b}function kh(){cd.current=dd;Zb=0;ub=O=vb=ha=H=Ia=null;wb=0;ia=null;bc=0;$b=!1;pa=null;ac=0}function xb(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===O?vb=O=a:O=O.next=a;return O}function cc(){if(null!==ub)O=ub,ub=O.next,H=ha,ha=null!==H?H.next:null;else{if(null===ha)throw Error(m(310));H=ha;var a={memoizedState:H.memoizedState,
baseState:H.baseState,queue:H.queue,baseUpdate:H.baseUpdate,next:null};O=null===O?vb=a:O.next=a;ha=H.next}return O}function lh(a,b){return"function"===typeof b?b(a):b}function mh(a,b,c){b=cc();c=b.queue;if(null===c)throw Error(m(311));c.lastRenderedReducer=a;if(0<ac){var d=c.dispatch;if(null!==pa){var e=pa.get(c);if(void 0!==e){pa.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);Ra(f,b.memoizedState)||(da=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=
f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==d){var h=e=null,k=d,l=!1;do{var p=k.expirationTime;p<Zb?(l||(l=!0,h=g,e=f),p>wb&&(wb=p,Vc(wb))):($g(p,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));g=k;k=k.next}while(null!==k&&k!==d);l||(h=g,e=f);Ra(f,b.memoizedState)||(da=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,
c.dispatch]}function De(a){var b=xb();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,lastRenderedReducer:lh,lastRenderedState:a};a=a.dispatch=nh.bind(null,Ia,a);return[b.memoizedState,a]}function Ee(a){return mh(lh,a)}function Fe(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ia?(ia={lastEffect:null},ia.lastEffect=a.next=a):(b=ia.lastEffect,null===b?ia.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,ia.lastEffect=a));return a}function Ge(a,
b,c,d){var e=xb();bc|=a;e.memoizedState=Fe(b,c,void 0,void 0===d?null:d)}function He(a,b,c,d){var e=cc();d=void 0===d?null:d;var f=void 0;if(null!==H){var g=H.memoizedState;f=g.destroy;if(null!==d&&Be(d,g.deps)){Fe(0,c,f,d);return}}bc|=a;e.memoizedState=Fe(b,c,f,d)}function oh(a,b){return Ge(516,192,a,b)}function ph(a,b){return He(516,192,a,b)}function qh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function rh(a,b){}function sh(a,b){xb().memoizedState=[a,void 0===b?null:b];return a}function th(a,b){var c=cc();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Be(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function nh(a,b,c){if(!(25>ac))throw Error(m(301));var d=a.alternate;if(a===Ia||null!==d&&d===Ia)if($b=!0,a={expirationTime:Zb,suspenseConfig:null,action:c,eagerReducer:null,eagerState:null,next:null},null===pa&&(pa=new Map),c=pa.get(b),void 0===c)pa.set(b,a);else{for(b=
c;null!==b.next;)b=b.next;b.next=a}else{var e=X(),f=dc.suspense;e=Va(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(Ra(l,k))return}catch(p){}finally{}Ja(a,e)}}function uh(a,b){var c=ja(5,null,
null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function vh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}function Ie(a){if(Wa){var b=Ka;if(b){var c=
b;if(!vh(a,b)){b=kb(c.nextSibling);if(!b||!vh(a,b)){a.effectTag=a.effectTag&-1025|2;Wa=!1;qa=a;return}uh(qa,c)}qa=a;Ka=kb(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Wa=!1,qa=a}}function wh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;qa=a}function ed(a){if(a!==qa)return!1;if(!Wa)return wh(a),Wa=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!ee(b,a.memoizedProps))for(b=Ka;b;)uh(a,b),b=kb(b.nextSibling);wh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?
a.dehydrated:null;if(!a)throw Error(m(317));a:{a=a.nextSibling;for(b=0;a;){if(a.nodeType===Pa){var c=a.data;if(c===tg){if(0===b){Ka=kb(a.nextSibling);break a}b--}else c!==sg&&c!==fe&&c!==ge||b++}a=a.nextSibling}Ka=null}}else Ka=qa?kb(a.stateNode.nextSibling):null;return!0}function Je(){Ka=qa=null;Wa=!1}function P(a,b,c,d){b.child=null===a?Ke(b,null,c,d):yb(b,a.child,c,d)}function xh(a,b,c,d,e){c=c.render;var f=b.ref;rb(b,e);d=Ce(a,b,c,d,f,e);if(null!==a&&!da)return b.updateQueue=a.updateQueue,b.effectTag&=
-517,a.expirationTime<=e&&(a.expirationTime=0),ra(a,b,e);b.effectTag|=1;P(a,b,d,e);return b.child}function yh(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Le(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,zh(a,b,g,d,e,f);a=Zc(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Sb,c(e,d)&&a.ref===b.ref))return ra(a,b,f);b.effectTag|=1;a=Ta(g,d,f);a.ref=
b.ref;a.return=b;return b.child=a}function zh(a,b,c,d,e,f){return null!==a&&Sb(a.memoizedProps,d)&&a.ref===b.ref&&(da=!1,e<f)?ra(a,b,f):Me(a,b,c,d,f)}function Ah(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Me(a,b,c,d,e){var f=K(c)?Sa:L.current;f=ob(b,f);rb(b,e);c=Ce(a,b,c,d,f,e);if(null!==a&&!da)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),ra(a,b,e);b.effectTag|=1;P(a,b,c,e);return b.child}function Bh(a,b,
c,d,e){if(K(c)){var f=!0;Mc(b)}else f=!1;rb(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),dh(b,c,d,e),we(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=ea(l):(l=K(c)?Sa:L.current,l=ob(b,l));var m=c.getDerivedStateFromProps,n="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;n||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==
typeof g.componentWillReceiveProps||(h!==d||k!==l)&&eh(b,g,d,l);Ga=!1;var q=b.memoizedState;k=g.state=q;var v=b.updateQueue;null!==v&&(Ub(b,v,d,g,e),k=b.memoizedState);h!==d||q!==k||Q.current||Ga?("function"===typeof m&&(Wc(b,c,m,d),k=b.memoizedState),(h=Ga||ch(b,c,h,d,q,k,l))?(n||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),
"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:V(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=ea(l):(l=K(c)?Sa:L.current,l=ob(b,l)),m=c.getDerivedStateFromProps,(n="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&eh(b,g,d,l),Ga=!1,k=b.memoizedState,q=g.state=k,v=b.updateQueue,null!==v&&(Ub(b,v,d,g,e),q=b.memoizedState),h!==d||k!==q||Q.current||Ga?("function"===typeof m&&(Wc(b,c,m,d),q=b.memoizedState),(m=Ga||ch(b,c,h,d,k,q,l))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&
g.componentWillUpdate(d,q,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,q,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=q),g.props=d,g.state=
q,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return Ne(a,b,c,d,f,e)}function Ne(a,b,c,d,e,f){Ah(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Jg(b,c,!1),ra(a,b,f);d=b.stateNode;xj.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=yb(b,a.child,
null,f),b.child=yb(b,null,h,f)):P(a,b,h,f);b.memoizedState=d.state;e&&Jg(b,c,!0);return b.child}function Ch(a){var b=a.stateNode;b.pendingContext?Hg(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hg(a,b.context,!1);ze(a,b.containerInfo)}function Dh(a,b,c){var d=b.mode,e=b.pendingProps,f=A.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||
(f|=1);y(A,f&1,b);if(null===a){void 0!==e.fallback&&Ie(b);if(g){g=e.fallback;e=Ha(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Ha(g,d,c,null);c.return=b;e.sibling=c;b.memoizedState=Oe;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Ke(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Ta(a,a.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?
b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Ta(d,e,d.expirationTime);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=Oe;b.child=c;return d}c=yb(b,a.child,e.children,c);b.memoizedState=null;return b.child=c}a=a.child;if(g){g=e.fallback;e=Ha(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Ha(g,d,c,null);c.return=b;e.sibling=
c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=Oe;b.child=e;return c}b.memoizedState=null;return b.child=yb(b,a,e.children,c)}function Eh(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);Vg(a.return,b)}function Pe(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.last=d,g.tail=c,g.tailExpiration=
0,g.tailMode=e,g.lastEffect=f)}function Fh(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;P(a,b,d.children,c);d=A.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&Eh(a,c);else if(19===a.tag)Eh(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}y(A,
d,b);if(0===(b.mode&2))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===bd(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Pe(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===bd(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}Pe(b,!0,c,null,f,b.lastEffect);break;case "together":Pe(b,!1,null,null,void 0,b.lastEffect);
break;default:b.memoizedState=null}return b.child}function ra(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Vc(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(m(153));if(null!==b.child){a=b.child;c=Ta(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ta(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}function zb(a){a.effectTag|=4}function fd(a,b){switch(a.tailMode){case "hidden":b=
a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}function yj(a,b){switch(a.tag){case 1:return K(a.type)&&Lc(a),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 3:tb(a);oe(a);b=a.effectTag;if(0!==(b&64))throw Error(m(285));a.effectTag=b&-4097|64;return a;case 5:return Ae(a),
null;case 13:return B(A,a),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return B(A,a),null;case 4:return tb(a),null;case 10:return ue(a),null;default:return null}}function Qe(a,b){return{value:a,source:b,stack:Ed(b)}}function Re(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Ed(c));null!==c&&ua(c.type);b=b.value;null!==a&&1===a.tag&&ua(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function zj(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,
b.componentWillUnmount()}catch(c){Xa(a,c)}}function Gh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Xa(a,c)}else b.current=null}function Aj(a,b){switch(b.tag){case 0:case 11:case 15:ec(2,0,b);break;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:V(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break;case 3:case 5:case 6:case 4:case 17:break;default:throw Error(m(163));
}}function ec(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if(0!==(d.tag&a)){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}0!==(d.tag&b)&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}function Hh(a,b,c){"function"===typeof Se&&Se(b);switch(b.tag){case 0:case 11:case 14:case 15:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;pb(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Xa(g,h)}}a=a.next}while(a!==
d)})}break;case 1:Gh(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&zj(b,c);break;case 5:Gh(b);break;case 4:Ih(a,b,c)}}function Jh(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;null!==b&&Jh(b)}function Kh(a){return 5===a.tag||3===a.tag||4===a.tag}function Lh(a){a:{for(var b=a.return;null!==b;){if(Kh(b)){var c=b;break a}b=b.return}throw Error(m(160));
}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(m(161));}c.effectTag&16&&(fc(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Kh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;
break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f){var g=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var h=g;g=c;f.nodeType===Pa?f.parentNode.insertBefore(h,g):f.insertBefore(h,g)}else b.insertBefore(g,c);else d?(h=b,h.nodeType===Pa?(f=h.parentNode,f.insertBefore(g,h)):(f=h,f.appendChild(g)),h=h._reactRootContainer,null!==h&&void 0!==h||null!==f.onclick||(f.onclick=Hc)):b.appendChild(g)}else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===
e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}function Ih(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(m(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,p=k;;)if(Hh(h,p,l),null!==p.child&&4!==p.tag)p.child.return=p,p=p.child;else{if(p===k)break;for(;null===p.sibling;){if(null===p.return||
p.return===k)break a;p=p.return}p.sibling.return=p.return;p=p.sibling}g?(h=f,k=d.stateNode,h.nodeType===Pa?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Hh(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Te(a,b){switch(b.tag){case 0:case 11:case 14:case 15:ec(4,8,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ic]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Of(c,d);be(a,e);b=be(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?lg(c,h):"dangerouslySetInnerHTML"===g?Mh(c,h):"children"===g?fc(c,h):Id(c,g,h,b)}switch(a){case "input":Kd(c,d);break;case "textarea":Rf(c,
d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?hb(c,!!d.multiple,d.defaultValue,!0):hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw Error(m(162));b.stateNode.nodeValue=b.memoizedProps;break;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,cg(b.containerInfo));break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,Ue=Y());
if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=kg("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=
a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Nh(b);break;case 19:Nh(b);break;case 17:break;case 20:break;case 21:break;default:throw Error(m(163));}}function Nh(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bj);b.forEach(function(b){var d=Cj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}function Oh(a,b,c){c=Ea(c,null);c.tag=3;c.payload=
{element:null};var d=b.value;c.callback=function(){gd||(gd=!0,Ve=d);Re(a,b)};return c}function Ph(a,b,c){c=Ea(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Re(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===La?La=new Set([this]):La.add(this),Re(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function X(){return(q&(Z|ka))!==F?1073741821-(Y()/10|0):0!==hd?hd:hd=1073741821-(Y()/10|0)}function Va(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=pe();if(0===(b&4))return 99===d?1073741823:1073741822;if((q&Z)!==F)return R;if(null!==c)a=Pc(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=Pc(a,150,100);break;case 97:case 96:a=Pc(a,5E3,250);break;case 95:a=2;break;default:throw Error(m(326));}null!==S&&a===R&&--a;return a}function id(a,b){a.expirationTime<b&&(a.expirationTime=
b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(S===e&&(Vc(b),G===jd&&Ya(e,R)),Qh(e,b));return e}function kd(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Rh(a,b))return b;b=
a.lastPingedTime;a=a.nextKnownPendingLevel;return b>a?b:a}function T(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=Qg(We.bind(null,a));else{var b=kd(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=X();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===
b&&e>=d)return;c!==Sg&&Tg(c)}a.callbackExpirationTime=b;a.callbackPriority=d;b=1073741823===b?Qg(We.bind(null,a)):Pg(d,Sh.bind(null,a),{timeout:10*(1073741821-b)-Y()});a.callbackNode=b}}}function Sh(a,b){hd=0;if(b)return b=X(),Xe(a,b),T(a),null;var c=kd(a);if(0!==c){b=a.callbackNode;if((q&(Z|ka))!==F)throw Error(m(327));Ab();a===S&&c===R||Za(a,c);if(null!==v){var d=q;q|=Z;var e=Th(a);do try{Dj();break}catch(h){Uh(a,h)}while(1);se();q=d;ld.current=e;if(G===md)throw b=nd,Za(a,c),Ya(a,c),T(a),b;if(null===
v)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=G,S=null,d){case $a:case md:throw Error(m(345));case Vh:Xe(a,2<c?2:c);break;case od:Ya(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ye(e));if(1073741823===sa&&(e=Ue+Wh-Y(),10<e)){if(pd){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Za(a,c);break}}f=kd(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Ze(Ma.bind(null,a),e);break}Ma(a);break;case jd:Ya(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ye(e));if(pd&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Za(a,c);break}e=kd(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}1073741823!==gc?d=10*(1073741821-gc)-Y():1073741823===sa?d=0:(d=10*(1073741821-sa)-5E3,e=Y(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*Ej(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Ze(Ma.bind(null,a),d);break}Ma(a);break;case $e:if(1073741823!==
sa&&null!==qd){f=sa;var g=qd;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=Y()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){Ya(a,c);a.timeoutHandle=Ze(Ma.bind(null,a),d);break}}Ma(a);break;default:throw Error(m(329));}T(a);if(a.callbackNode===b)return Sh.bind(null,a)}}return null}function We(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if(a.finishedExpirationTime===b)Ma(a);else{if((q&(Z|ka))!==F)throw Error(m(327));Ab();a===S&&b===R||Za(a,b);if(null!==v){var c=q;q|=
Z;var d=Th(a);do try{Fj();break}catch(e){Uh(a,e)}while(1);se();q=c;ld.current=d;if(G===md)throw c=nd,Za(a,b),Ya(a,b),T(a),c;if(null!==v)throw Error(m(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;S=null;Ma(a);T(a)}}return null}function Gj(){if(null!==ab){var a=ab;ab=null;a.forEach(function(a,c){Xe(c,a);T(c)});ca()}}function Xh(a,b){var c=q;q|=1;try{return a(b)}finally{q=c,q===F&&ca()}}function Yh(a,b){var c=q;q&=-2;q|=af;try{return a(b)}finally{q=c,q===F&&ca()}}function Za(a,
b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Hj(c));if(null!==v)for(c=v.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Lc(d);break;case 3:tb(d);oe(d);break;case 5:Ae(d);break;case 4:tb(d);break;case 13:B(A,d);break;case 19:B(A,d);break;case 10:ue(d)}c=c.return}S=a;v=Ta(a.current,null,b);R=b;G=$a;nd=null;gc=sa=1073741823;qd=null;hc=0;pd=!1}function Uh(a,b){do{try{se();kh();if(null===v||null===
v.return)return G=md,nd=b,null;a:{var c=a,d=v.return,e=v,f=b;b=R;e.effectTag|=2048;e.firstEffect=e.lastEffect=null;if(null!==f&&"object"===typeof f&&"function"===typeof f.then){var g=f,h=0!==(A.current&1),k=d;do{var l;if(l=13===k.tag){var m=k.memoizedState;if(null!==m)l=null!==m.dehydrated?!0:!1;else{var n=k.memoizedProps;l=void 0===n.fallback?!1:!0!==n.unstable_avoidThisFallback?!0:h?!1:!0}}if(l){var q=k.updateQueue;if(null===q){var x=new Set;x.add(g);k.updateQueue=x}else q.add(g);if(0===(k.mode&
2)){k.effectTag|=64;e.effectTag&=-2981;if(1===e.tag)if(null===e.alternate)e.tag=17;else{var B=Ea(1073741823,null);B.tag=Uc;Fa(e,B)}e.expirationTime=1073741823;break a}f=void 0;e=b;var y=c.pingCache;null===y?(y=c.pingCache=new Ij,f=new Set,y.set(g,f)):(f=y.get(g),void 0===f&&(f=new Set,y.set(g,f)));if(!f.has(e)){f.add(e);var t=Jj.bind(null,c,g,e);g.then(t,t)}k.effectTag|=4096;k.expirationTime=b;break a}k=k.return}while(null!==k);f=Error((ua(e.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
Ed(e))}G!==$e&&(G=Vh);f=Qe(f,e);k=d;do{switch(k.tag){case 3:g=f;k.effectTag|=4096;k.expirationTime=b;var z=Oh(k,g,b);Xg(k,z);break a;case 1:g=f;var F=k.type,r=k.stateNode;if(0===(k.effectTag&64)&&("function"===typeof F.getDerivedStateFromError||null!==r&&"function"===typeof r.componentDidCatch&&(null===La||!La.has(r)))){k.effectTag|=4096;k.expirationTime=b;var u=Ph(k,g,b);Xg(k,u);break a}}k=k.return}while(null!==k)}v=Zh(v)}catch(w){b=w;continue}break}while(1)}function Th(a){a=ld.current;ld.current=
dd;return null===a?dd:a}function $g(a,b){a<sa&&2<a&&(sa=a);null!==b&&a<gc&&2<a&&(gc=a,qd=b)}function Vc(a){a>hc&&(hc=a)}function Fj(){for(;null!==v;)v=$h(v)}function Dj(){for(;null!==v&&!Kj();)v=$h(v)}function $h(a){var b=Lj(a.alternate,a,R);a.memoizedProps=a.pendingProps;null===b&&(b=Zh(a));ai.current=null;return b}function Zh(a){v=a;do{var b=v.alternate;a=v.return;if(0===(v.effectTag&2048)){a:{var c=b;b=v;var d=R;var e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;
case 1:K(b.type)&&Lc(b);break;case 3:tb(b);oe(b);e=b.stateNode;e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null);(null===c||null===c.child)&&ed(b)&&zb(b);bi(b);break;case 5:Ae(b);var f=Ua(Xb.current);d=b.type;if(null!==c&&null!=b.stateNode)Mj(c,b,d,e,f),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var g=Ua(fa.current);if(ed(b)){e=b;c=e.stateNode;var h=e.type;g=e.memoizedProps;c[Ba]=e;c[Ic]=g;d=void 0;switch(h){case "iframe":case "object":case "embed":x("load",c);break;case "video":case "audio":for(var k=
0;k<Nb.length;k++)x(Nb[k],c);break;case "source":x("error",c);break;case "img":case "image":case "link":x("error",c);x("load",c);break;case "form":x("reset",c);x("submit",c);break;case "details":x("toggle",c);break;case "input":Nf(c,g);x("invalid",c);na(f,"onChange");break;case "select":c._wrapperState={wasMultiple:!!g.multiple};x("invalid",c);na(f,"onChange");break;case "textarea":Qf(c,g),x("invalid",c),na(f,"onChange")}ae(h,g);k=null;for(d in g)if(g.hasOwnProperty(d)){var l=g[d];"children"===d?
"string"===typeof l?c.textContent!==l&&(k=["children",l]):"number"===typeof l&&c.textContent!==""+l&&(k=["children",""+l]):cb.hasOwnProperty(d)&&null!=l&&na(f,d)}switch(h){case "input":xc(c);Pf(c,g,!0);break;case "textarea":xc(c);Sf(c,g);break;case "select":case "option":break;default:"function"===typeof g.onClick&&(c.onclick=Hc)}f=k;e.updateQueue=f;e=null!==f?!0:!1;e&&zb(b)}else{h=b;c=9===f.nodeType?f:f.ownerDocument;"http://www.w3.org/1999/xhtml"===g&&(g=Tf(d));"http://www.w3.org/1999/xhtml"===
g?"script"===d?(c=c.createElement("div"),c.innerHTML="<script>\x3c/script>",c=c.removeChild(c.firstChild)):"string"===typeof e.is?c=c.createElement(d,{is:e.is}):(c=c.createElement(d),"select"===d&&(g=c,e.multiple?g.multiple=!0:e.size&&(g.size=e.size))):c=c.createElementNS(g,d);c[Ba]=h;c[Ic]=e;Nj(c,b,!1,!1);b.stateNode=c;var p=be(d,e);switch(d){case "iframe":case "object":case "embed":x("load",c);h=e;break;case "video":case "audio":for(h=0;h<Nb.length;h++)x(Nb[h],c);h=e;break;case "source":x("error",
c);h=e;break;case "img":case "image":case "link":x("error",c);x("load",c);h=e;break;case "form":x("reset",c);x("submit",c);h=e;break;case "details":x("toggle",c);h=e;break;case "input":Nf(c,e);h=Jd(c,e);x("invalid",c);na(f,"onChange");break;case "option":h=Md(c,e);break;case "select":c._wrapperState={wasMultiple:!!e.multiple};h=J({},e,{value:void 0});x("invalid",c);na(f,"onChange");break;case "textarea":Qf(c,e);h=Nd(c,e);x("invalid",c);na(f,"onChange");break;default:h=e}ae(d,h);g=void 0;k=d;l=c;var n=
h;for(g in n)if(n.hasOwnProperty(g)){var q=n[g];"style"===g?lg(l,q):"dangerouslySetInnerHTML"===g?(q=q?q.__html:void 0,null!=q&&Mh(l,q)):"children"===g?"string"===typeof q?("textarea"!==k||""!==q)&&fc(l,q):"number"===typeof q&&fc(l,""+q):"suppressContentEditableWarning"!==g&&"suppressHydrationWarning"!==g&&"autoFocus"!==g&&(cb.hasOwnProperty(g)?null!=q&&na(f,g):null!=q&&Id(l,g,q,p))}switch(d){case "input":xc(c);Pf(c,e,!1);break;case "textarea":xc(c);Sf(c,e);break;case "option":null!=e.value&&c.setAttribute("value",
""+wa(e.value));break;case "select":f=c;c=e;f.multiple=!!c.multiple;h=c.value;null!=h?hb(f,!!c.multiple,h,!1):null!=c.defaultValue&&hb(f,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof h.onClick&&(c.onclick=Hc)}qg(d,e)&&zb(b)}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw Error(m(166));break;case 6:if(c&&null!=b.stateNode)Oj(c,b,c.memoizedProps,e);else{if("string"!==typeof e&&null===b.stateNode)throw Error(m(166));d=Ua(Xb.current);Ua(fa.current);ed(b)?(e=b,f=e.stateNode,
d=e.memoizedProps,f[Ba]=e,(e=f.nodeValue!==d)&&zb(b)):(f=b,e=(9===d.nodeType?d:d.ownerDocument).createTextNode(e),e[Ba]=f,b.stateNode=e)}break;case 11:break;case 13:B(A,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=d;break a}e=null!==e;f=!1;null===c?void 0!==b.memoizedProps.fallback&&ed(b):(d=c.memoizedState,f=null!==d,e||null===d||(d=c.child.sibling,null!==d&&(h=b.firstEffect,null!==h?(b.firstEffect=d,d.nextEffect=h):(b.firstEffect=b.lastEffect=d,d.nextEffect=null),d.effectTag=8)));
if(e&&!f&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(A.current&1))G===$a&&(G=od);else{if(G===$a||G===od)G=jd;0!==hc&&null!==S&&(Ya(S,R),Qh(S,hc))}if(e||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:tb(b);bi(b);break;case 10:ue(b);break;case 9:break;case 14:break;case 17:K(b.type)&&Lc(b);break;case 19:B(A,b);e=b.memoizedState;if(null===e)break;f=0!==(b.effectTag&64);h=e.rendering;if(null===h)if(f)fd(e,!1);else{if(G!==$a||null!==c&&0!==
(c.effectTag&64))for(c=b.child;null!==c;){h=bd(c);if(null!==h){b.effectTag|=64;fd(e,!1);f=h.updateQueue;null!==f&&(b.updateQueue=f,b.effectTag|=4);null===e.lastEffect&&(b.firstEffect=null);b.lastEffect=e.lastEffect;e=d;for(f=b.child;null!==f;)d=f,c=e,d.effectTag&=2,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null,h=d.alternate,null===h?(d.childExpirationTime=0,d.expirationTime=c,d.child=null,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null):(d.childExpirationTime=
h.childExpirationTime,d.expirationTime=h.expirationTime,d.child=h.child,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,c=h.dependencies,d.dependencies=null===c?null:{expirationTime:c.expirationTime,firstContext:c.firstContext,responders:c.responders}),f=f.sibling;y(A,A.current&1|2,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=bd(h),null!==c){if(b.effectTag|=64,f=!0,d=c.updateQueue,null!==d&&(b.updateQueue=d,b.effectTag|=4),fd(e,!0),null===e.tail&&"hidden"===
e.tailMode&&!h.alternate){b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else Y()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,fd(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(h.sibling=b.child,b.child=h):(d=e.last,null!==d?d.sibling=h:b.child=h,e.last=h)}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=Y()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;e.lastEffect=b.lastEffect;d.sibling=null;e=A.current;e=f?e&1|2:e&1;y(A,e,b);b=d;break a}break;case 20:break;
case 21:break;default:throw Error(m(156,b.tag));}b=null}e=v;if(1===R||1!==e.childExpirationTime){f=0;for(d=e.child;null!==d;)c=d.expirationTime,h=d.childExpirationTime,c>f&&(f=c),h>f&&(f=h),d=d.sibling;e.childExpirationTime=f}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=v.firstEffect),null!==v.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=v.firstEffect),a.lastEffect=v.lastEffect),1<v.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=
v:a.firstEffect=v,a.lastEffect=v))}else{b=yj(v,R);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=v.sibling;if(null!==b)return b;v=a}while(null!==v);G===$a&&(G=$e);return null}function Ye(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Ma(a){var b=pe();pb(99,Pj.bind(null,a,b));return null}function Pj(a,b){do Ab();while(null!==ic);if((q&(Z|ka))!==F)throw Error(m(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===
c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(m(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ye(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===S&&(v=S=null,R=0);1<c.effectTag?null!==c.lastEffect?
(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=q;q|=ka;ai.current=null;bf=Gc;var g=pg();if(de(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,p=k.focusNode;k=k.focusOffset;try{h.nodeType,p.nodeType}catch(Bb){h=null;break a}var x=0,y=-1,A=-1,B=0,G=0,t=g,z=null;b:for(;;){for(var C;;){t!==
h||0!==l&&3!==t.nodeType||(y=x+l);t!==p||0!==k&&3!==t.nodeType||(A=x+k);3===t.nodeType&&(x+=t.nodeValue.length);if(null===(C=t.firstChild))break;z=t;t=C}for(;;){if(t===g)break b;z===h&&++B===l&&(y=x);z===p&&++G===k&&(A=x);if(null!==(C=t.nextSibling))break;t=z;z=t.parentNode}t=C}h=-1===y||-1===A?null:{start:y,end:A}}else h=null}h=h||{start:0,end:0}}else h=null;cf={focusedElem:g,selectionRange:h};Gc=!1;n=e;do try{Qj()}catch(Bb){if(null===n)throw Error(m(330));Xa(n,Bb);n=n.nextEffect}while(null!==n);
n=e;do try{for(g=a,h=b;null!==n;){var r=n.effectTag;r&16&&fc(n.stateNode,"");if(r&128){var u=n.alternate;if(null!==u){var w=u.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(r&1038){case 2:Lh(n);n.effectTag&=-3;break;case 6:Lh(n);n.effectTag&=-3;Te(n.alternate,n);break;case 1024:n.effectTag&=-1025;break;case 1028:n.effectTag&=-1025;Te(n.alternate,n);break;case 4:Te(n.alternate,n);break;case 8:l=n,Ih(g,l,h),Jh(l)}n=n.nextEffect}}catch(Bb){if(null===n)throw Error(m(330));Xa(n,Bb);
n=n.nextEffect}while(null!==n);w=cf;u=pg();r=w.focusedElem;h=w.selectionRange;if(u!==r&&r&&r.ownerDocument&&og(r.ownerDocument.documentElement,r)){null!==h&&de(r)&&(u=h.start,w=h.end,void 0===w&&(w=u),"selectionStart"in r?(r.selectionStart=u,r.selectionEnd=Math.min(w,r.value.length)):(w=(u=r.ownerDocument||document)&&u.defaultView||window,w.getSelection&&(w=w.getSelection(),l=r.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=ng(r,g),p=
ng(r,h),l&&p&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==p.node||w.focusOffset!==p.offset)&&(u=u.createRange(),u.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(u),w.extend(p.node,p.offset)):(u.setEnd(p.node,p.offset),w.addRange(u))))));u=[];for(w=r;w=w.parentNode;)1===w.nodeType&&u.push({element:w,left:w.scrollLeft,top:w.scrollTop});"function"===typeof r.focus&&r.focus();for(r=0;r<u.length;r++)w=u[r],w.element.scrollLeft=w.left,w.element.scrollTop=
w.top}cf=null;Gc=!!bf;bf=null;a.current=c;n=e;do try{for(r=d;null!==n;){var H=n.effectTag;if(H&36){var D=n.alternate;u=n;w=r;switch(u.tag){case 0:case 11:case 15:ec(16,32,u);break;case 1:var E=u.stateNode;if(u.effectTag&4)if(null===D)E.componentDidMount();else{var J=u.elementType===u.type?D.memoizedProps:V(u.type,D.memoizedProps);E.componentDidUpdate(J,D.memoizedState,E.__reactInternalSnapshotBeforeUpdate)}var K=u.updateQueue;null!==K&&ah(u,K,E,w);break;case 3:var L=u.updateQueue;if(null!==L){g=null;
if(null!==u.child)switch(u.child.tag){case 5:g=u.child.stateNode;break;case 1:g=u.child.stateNode}ah(u,L,g,w)}break;case 5:var O=u.stateNode;null===D&&u.effectTag&4&&qg(u.type,u.memoizedProps)&&O.focus();break;case 6:break;case 4:break;case 12:break;case 13:if(null===u.memoizedState){var M=u.alternate;if(null!==M){var N=M.memoizedState;if(null!==N){var P=N.dehydrated;null!==P&&cg(P)}}}break;case 19:case 17:case 20:case 21:break;default:throw Error(m(163));}}if(H&128){u=void 0;var I=n.ref;if(null!==
I){var Q=n.stateNode;switch(n.tag){case 5:u=Q;break;default:u=Q}"function"===typeof I?I(u):I.current=u}}n=n.nextEffect}}catch(Bb){if(null===n)throw Error(m(330));Xa(n,Bb);n=n.nextEffect}while(null!==n);n=null;Rj();q=f}else a.current=c;if(rd)rd=!1,ic=a,jc=b;else for(n=e;null!==n;)b=n.nextEffect,n.nextEffect=null,n=b;b=a.firstPendingTime;0===b&&(La=null);1073741823===b?a===df?kc++:(kc=0,df=a):kc=0;"function"===typeof ef&&ef(c.stateNode,d);T(a);if(gd)throw gd=!1,a=Ve,Ve=null,a;if((q&af)!==F)return null;
ca();return null}function Qj(){for(;null!==n;){var a=n.effectTag;0!==(a&256)&&Aj(n.alternate,n);0===(a&512)||rd||(rd=!0,Pg(97,function(){Ab();return null}));n=n.nextEffect}}function Ab(){if(90!==jc){var a=97<jc?97:jc;jc=90;return pb(a,Sj)}}function Sj(){if(null===ic)return!1;var a=ic;ic=null;if((q&(Z|ka))!==F)throw Error(m(331));var b=q;q|=ka;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:ec(128,0,c),ec(0,64,c)}}catch(d){if(null===
a)throw Error(m(330));Xa(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}q=b;ca();return!0}function ci(a,b,c){b=Qe(c,b);b=Oh(a,b,1073741823);Fa(a,b);a=id(a,1073741823);null!==a&&T(a)}function Xa(a,b){if(3===a.tag)ci(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){ci(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===La||!La.has(d))){a=Qe(b,a);a=Ph(c,a,1073741823);Fa(c,a);c=id(c,1073741823);null!==
c&&T(c);break}}c=c.return}}function Jj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);S===a&&R===c?G===jd||G===od&&1073741823===sa&&Y()-Ue<Wh?Za(a,R):pd=!0:Rh(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),T(a)))}function Cj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=X(),b=Va(b,a,null));a=id(a,b);null!==a&&T(a)}function Tj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=
__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);ef=function(a,e){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(f){}};Se=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}function Uj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=
null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Le(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Vj(a){if("function"===typeof a)return Le(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Cd)return 11;if(a===Dd)return 14}return 2}function Ta(a,b,c){c=a.alternate;null===c?(c=ja(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=
a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function Zc(a,b,c,d,e,
f){var g=2;d=a;if("function"===typeof a)Le(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case va:return Ha(c.children,e,f,b);case Wj:g=8;e|=7;break;case Af:g=8;e|=1;break;case vc:return a=ja(12,c,b,e|8),a.elementType=vc,a.type=vc,a.expirationTime=f,a;case wc:return a=ja(13,c,b,e),a.type=wc,a.elementType=wc,a.expirationTime=f,a;case Bd:return a=ja(19,c,b,e),a.elementType=Bd,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Cf:g=10;break a;case Bf:g=
9;break a;case Cd:g=11;break a;case Dd:g=14;break a;case Df:g=16;d=null;break a}throw Error(m(130,null==a?a:typeof a,""));}b=ja(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ha(a,b,c,d){a=ja(7,a,d,b);a.expirationTime=c;return a}function xe(a,b,c){a=ja(6,a,null,b);a.expirationTime=c;return a}function ye(a,b,c){b=ja(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Xj(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Rh(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==
c&&c>=b&&a<=b}function Ya(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}function Qh(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=
b))}function Xe(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}function sd(a,b,c,d){var e=b.current,f=X(),g=dc.suspense;f=Va(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(Na(c)!==c||1!==c.tag)throw Error(m(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(K(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(m(171));}if(1===c.tag){var k=c.type;if(K(k)){c=Ig(c,k,h);break a}}c=h}else c=Da;null===
b.context?b.context=c:b.pendingContext=c;b=Ea(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);Fa(e,b);Ja(e,f);return f}function ff(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function di(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function gf(a,b){di(a,b);(a=a.alternate)&&di(a,b)}function hf(a,b,c){c=null!=c&&!0===c.hydrate;var d=new Xj(a,b,c),e=ja(3,null,
null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;a[Pb]=d.current;c&&0!==b&&Oi(9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}function lc(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(a.nodeType!==Pa||" react-mount-point-unstable "!==a.nodeValue))}function Yj(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new hf(a,0,b?{hydrate:!0}:void 0)}function td(a,
b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ff(g);h.call(a)}}sd(b,g,a,e)}else{f=c._reactRootContainer=Yj(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ff(g);k.call(a)}}Yh(function(){sd(b,g,a,e)})}return ff(g)}function Zj(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:eb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}function ei(a,b){var c=
2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!lc(b))throw Error(m(200));return Zj(a,b,null,c)}if(!la)throw Error(m(227));var qc=null,bb={},rc=[],wd={},cb={},xd={},Bi=function(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(p){this.onError(p)}},Cb=!1,sc=null,tc=!1,yd=null,Ci={onError:function(a){Cb=!0;sc=a}},Ad=null,Ff=null,xf=null,Db=null,Ei=function(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<
b.length&&!a.isPropagationStopped();d++)wf(a,b[d],c[d]);else b&&wf(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}},jf={injectEventPluginOrder:function(a){if(qc)throw Error(m(101));qc=Array.prototype.slice.call(a);uf()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!bb.hasOwnProperty(c)||bb[c]!==d){if(bb[c])throw Error(m(102,c));bb[c]=d;b=!0}}b&&uf()}},aa=la.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
aa.hasOwnProperty("ReactCurrentDispatcher")||(aa.ReactCurrentDispatcher={current:null});aa.hasOwnProperty("ReactCurrentBatchConfig")||(aa.ReactCurrentBatchConfig={suspense:null});var Gi=/^(.*)[\\\/]/,D="function"===typeof Symbol&&Symbol.for,$c=D?Symbol.for("react.element"):60103,eb=D?Symbol.for("react.portal"):60106,va=D?Symbol.for("react.fragment"):60107,Af=D?Symbol.for("react.strict_mode"):60108,vc=D?Symbol.for("react.profiler"):60114,Cf=D?Symbol.for("react.provider"):60109,Bf=D?Symbol.for("react.context"):
60110,Wj=D?Symbol.for("react.concurrent_mode"):60111,Cd=D?Symbol.for("react.forward_ref"):60112,wc=D?Symbol.for("react.suspense"):60113,Bd=D?Symbol.for("react.suspense_list"):60120,Dd=D?Symbol.for("react.memo"):60115,Df=D?Symbol.for("react.lazy"):60116;D&&Symbol.for("react.fundamental");D&&Symbol.for("react.responder");D&&Symbol.for("react.scope");var zf="function"===typeof Symbol&&Symbol.iterator,Aa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),
J=la.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.assign,Fd=null,fb=null,gb=null,ke=function(a,b){return a(b)},fg=function(a,b,c,d){return a(b,c,d)},Hd=function(){},hg=ke,Oa=!1,$d=!1,I=la.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,ak=I.unstable_cancelCallback,kf=I.unstable_now,ag=I.unstable_scheduleCallback,bk=I.unstable_shouldYield,fi=I.unstable_requestPaint,Ud=I.unstable_runWithPriority,ud=I.unstable_next,ck=I.unstable_getCurrentPriorityLevel,dk=I.unstable_ImmediatePriority,
gi=I.unstable_UserBlockingPriority,bg=I.unstable_NormalPriority,ek=I.unstable_LowPriority,fk=I.unstable_IdlePriority;new Map;var Ii=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,If=Object.prototype.hasOwnProperty,
Kf={},Jf={},C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new E(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new E(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new E(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new E(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new E(a,3,!1,a.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(a){C[a]=new E(a,3,!0,a,null,
!1)});["capture","download"].forEach(function(a){C[a]=new E(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new E(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new E(a,5,!1,a.toLowerCase(),null,!1)});var lf=/[\-:]([a-z])/g,mf=function(a){return a[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=
a.replace(lf,mf);C[b]=new E(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(lf,mf);C[b]=new E(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(lf,mf);C[b]=new E(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new E(a,1,!1,a.toLowerCase(),null,!1)});C.xlinkHref=new E("xlinkHref",1,
!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new E(a,1,!1,a.toLowerCase(),null,!0)});var vd,Mh=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{vd=vd||document.createElement("div");vd.innerHTML="<svg>"+b.valueOf().toString()+
"</svg>";for(b=vd.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}),Pa=8,fc=function(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b},ib={animationend:yc("Animation","AnimationEnd"),animationiteration:yc("Animation","AnimationIteration"),animationstart:yc("Animation","AnimationStart"),transitionend:yc("Transition","TransitionEnd")},Pd={},Uf={};Aa&&(Uf=document.createElement("div").style,
"AnimationEvent"in window||(delete ib.animationend.animation,delete ib.animationiteration.animation,delete ib.animationstart.animation),"TransitionEvent"in window||delete ib.transitionend.transition);var hi=zc("animationend"),ii=zc("animationiteration"),ji=zc("animationstart"),ki=zc("transitionend"),Nb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
Wd=!1,ba=[],xa=null,ya=null,za=null,Fb=new Map,Gb=new Map,Lb=[],Rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Pi="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");J(M.prototype,{preventDefault:function(){this.defaultPrevented=
!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=Bc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=Bc)},persist:function(){this.isPersistent=Bc},isPersistent:Cc,destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=
null;this.isPropagationStopped=this.isDefaultPrevented=Cc;this._dispatchInstances=this._dispatchListeners=null}});M.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};M.extend=function(a){function b(){return c.apply(this,arguments)}var c=this,d=function(){};d.prototype=c.prototype;d=new d;J(d,b.prototype);b.prototype=d;b.prototype.constructor=
b;b.Interface=J({},c.Interface,a);b.extend=c.extend;eg(b);return b};eg(M);var gk=M.extend({animationName:null,elapsedTime:null,pseudoElement:null}),hk=M.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),mc=M.extend({view:null,detail:null}),ik=mc.extend({relatedTarget:null}),jk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",
MozPrintableKey:"Unidentified"},kk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$i={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},
lk=mc.extend({key:function(a){if(a.key){var b=jk[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=Dc(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?kk[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Zd,charCode:function(a){return"keypress"===a.type?Dc(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?Dc(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),li=0,mi=0,ni=!1,oi=!1,nc=mc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Zd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=li;li=a.screenX;return ni?"mousemove"===a.type?a.screenX-
b:0:(ni=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;var b=mi;mi=a.screenY;return oi?"mousemove"===a.type?a.screenY-b:0:(oi=!0,0)}}),pi=nc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),mk=nc.extend({dataTransfer:null}),nk=mc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Zd}),ok=M.extend({propertyName:null,
elapsedTime:null,pseudoElement:null}),pk=nc.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),qi=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",
0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",
0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove","mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",
2],[hi,"animationEnd",2],[ii,"animationIteration",2],[ji,"animationStart",2],["canplay","canPlay",2],["canplaythrough","canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress",
"progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",2],[ki,"transitionEnd",2],["waiting","waiting",2]],ri={},nf={},of=0;for(;of<qi.length;of++){var pf=qi[of],si=pf[0],qf=pf[1],qk=pf[2],ti="on"+(qf[0].toUpperCase()+qf.slice(1)),ui={phasedRegistrationNames:{bubbled:ti,captured:ti+"Capture"},dependencies:[si],eventPriority:qk};ri[qf]=ui;nf[si]=ui}var vi={eventTypes:ri,getEventPriority:function(a){a=nf[a];return void 0!==a?a.eventPriority:2},
extractEvents:function(a,b,c,d,e){e=nf[a];if(!e)return null;switch(a){case "keypress":if(0===Dc(c))return null;case "keydown":case "keyup":a=lk;break;case "blur":case "focus":a=ik;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=nc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=mk;break;
case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=nk;break;case hi:case ii:case ji:a=gk;break;case ki:a=ok;break;case "scroll":a=mc;break;case "wheel":a=pk;break;case "copy":case "cut":case "paste":a=hk;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=pi;break;default:a=M}b=a.getPooled(e,b,c,d);jb(b);return b}},fj=gi,ej=Ud,bj=vi.getEventPriority,gj=10,Fc=
[],Gc=!0,jg=new ("function"===typeof WeakMap?WeakMap:Map),Ob={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,
tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rk=["Webkit","ms","Moz","O"];Object.keys(Ob).forEach(function(a){rk.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Ob[b]=Ob[a]})});var hj=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),sg="$",tg="/$",ge="$?",fe="$!",
bf=null,cf=null,Ze="function"===typeof setTimeout?setTimeout:void 0,Hj="function"===typeof clearTimeout?clearTimeout:void 0,rf=Math.random().toString(36).slice(2),Ba="__reactInternalInstance$"+rf,Ic="__reactEventHandlers$"+rf,Pb="__reactContainere$"+rf,Ca=null,ie=null,Jc=null,sk=M.extend({data:null}),tk=M.extend({data:null}),ij=[9,13,27,32],je=Aa&&"CompositionEvent"in window,oc=null;Aa&&"documentMode"in document&&(oc=document.documentMode);var uk=Aa&&"TextEvent"in window&&!oc,zg=Aa&&(!je||oc&&8<oc&&
11>=oc),yg=String.fromCharCode(32),ta={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},
compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},xg=!1,lb=!1,vk={eventTypes:ta,extractEvents:function(a,b,c,d,e){var f;if(je)b:{switch(a){case "compositionstart":var g=ta.compositionStart;break b;case "compositionend":g=ta.compositionEnd;break b;case "compositionupdate":g=ta.compositionUpdate;break b}g=void 0}else lb?vg(a,c)&&(g=ta.compositionEnd):"keydown"===
a&&229===c.keyCode&&(g=ta.compositionStart);g?(zg&&"ko"!==c.locale&&(lb||g!==ta.compositionStart?g===ta.compositionEnd&&lb&&(f=ug()):(Ca=d,ie="value"in Ca?Ca.value:Ca.textContent,lb=!0)),e=sk.getPooled(g,b,c,d),f?e.data=f:(f=wg(c),null!==f&&(e.data=f)),jb(e),f=e):f=null;(a=uk?jj(a,c):kj(a,c))?(b=tk.getPooled(ta.beforeInput,b,c,d),b.data=a,jb(b)):b=null;return null===f?b:null===b?f:[f,b]}},lj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,
tel:!0,text:!0,time:!0,url:!0,week:!0},Cg={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}},Qb=null,Rb=null,sf=!1;Aa&&(sf=ig("input")&&(!document.documentMode||9<document.documentMode));var wk={eventTypes:Cg,_isInputEventSupported:sf,extractEvents:function(a,b,c,d,e){e=b?Qa(b):window;var f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=nj;
else if(Ag(e))if(sf)g=rj;else{g=pj;var h=oj}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=qj);if(g&&(g=g(a,b)))return Bg(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Ld(e,"number",e.value)}},pc={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout",
"pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},tf,xk={eventTypes:pc,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?Jb(b):null,null!==b&&(f=Na(b),b!==f||5!==b.tag&&6!==b.tag))b=null}else g=
null;if(g===b)return null;if("mouseout"===a||"mouseover"===a){var h=nc;var k=pc.mouseLeave;var l=pc.mouseEnter;var m="mouse"}else if("pointerout"===a||"pointerover"===a)h=pi,k=pc.pointerLeave,l=pc.pointerEnter,m="pointer";a=null==g?e:Qa(g);e=null==b?e:Qa(b);k=h.getPooled(k,g,c,d);k.type=m+"leave";k.target=a;k.relatedTarget=e;d=h.getPooled(l,b,c,d);d.type=m+"enter";d.target=e;d.relatedTarget=a;h=g;m=b;if(h&&m)a:{l=h;a=m;g=0;for(b=l;b;b=ma(b))g++;b=0;for(e=a;e;e=ma(e))b++;for(;0<g-b;)l=ma(l),g--;for(;0<
b-g;)a=ma(a),b--;for(;g--;){if(l===a||l===a.alternate)break a;l=ma(l);a=ma(a)}l=null}else l=null;a=l;for(l=[];h&&h!==a;){g=h.alternate;if(null!==g&&g===a)break;l.push(h);h=ma(h)}for(h=[];m&&m!==a;){g=m.alternate;if(null!==g&&g===a)break;h.push(m);m=ma(m)}for(m=0;m<l.length;m++)Yd(l[m],"bubbled",k);for(m=h.length;0<m--;)Yd(h[m],"captured",d);if(c===tf)return tf=null,[k];tf=c;return[k,d]}},Ra="function"===typeof Object.is?Object.is:sj,tj=Object.prototype.hasOwnProperty,yk=Aa&&"documentMode"in document&&
11>=document.documentMode,Gg={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},mb=null,me=null,Tb=null,le=!1,zk={eventTypes:Gg,extractEvents:function(a,b,c,d,e){e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument;var f;if(!(f=!e)){a:{e=Qd(e);f=xd.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Qa(b):window;
switch(a){case "focus":if(Ag(e)||"true"===e.contentEditable)mb=e,me=b,Tb=null;break;case "blur":Tb=me=mb=null;break;case "mousedown":le=!0;break;case "contextmenu":case "mouseup":case "dragend":return le=!1,Fg(c,d);case "selectionchange":if(yk)break;case "keydown":case "keyup":return Fg(c,d)}return null}};jf.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));(function(a,b,c){Ad=a;Ff=b;xf=c})(he,
Ib,Qa);jf.injectEventPluginsByName({SimpleEventPlugin:vi,EnterLeaveEventPlugin:xk,ChangeEventPlugin:wk,SelectEventPlugin:zk,BeforeInputEventPlugin:vk});new Set;var ne=[],nb=-1,Da={},L={current:Da},Q={current:!1},Sa=Da,vj=Ud,qe=ag,Tg=ak,uj=ck,Nc=dk,Kg=gi,Lg=bg,Mg=ek,Ng=fk,Sg={},Kj=bk,Rj=void 0!==fi?fi:function(){},oa=null,Oc=null,re=!1,wi=kf(),Y=1E4>wi?kf:function(){return kf()-wi},Ak=3,te={current:null},Rc=null,qb=null,Qc=null,Wg=0,Uc=2,Ga=!1,dc=aa.ReactCurrentBatchConfig,fh=(new la.Component).refs,
Xc={isMounted:function(a){return(a=a._reactInternalFiber)?Na(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=X(),e=dc.suspense;d=Va(d,a,e);e=Ea(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Fa(a,e);Ja(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=X(),e=dc.suspense;d=Va(d,a,e);e=Ea(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Fa(a,e);Ja(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=X(),d=dc.suspense;
c=Va(c,a,d);d=Ea(c,d);d.tag=Uc;void 0!==b&&null!==b&&(d.callback=b);Fa(a,d);Ja(a,c)}},ad=Array.isArray,yb=gh(!0),Ke=gh(!1),Wb={},fa={current:Wb},Yb={current:Wb},Xb={current:Wb},A={current:0},cd=aa.ReactCurrentDispatcher,U=aa.ReactCurrentBatchConfig,Zb=0,Ia=null,H=null,ha=null,vb=null,O=null,ub=null,wb=0,ia=null,bc=0,$b=!1,pa=null,ac=0,dd={readContext:ea,useCallback:N,useContext:N,useEffect:N,useImperativeHandle:N,useLayoutEffect:N,useMemo:N,useReducer:N,useRef:N,useState:N,useDebugValue:N,useResponder:N,
useDeferredValue:N,useTransition:N},wj={readContext:ea,useCallback:sh,useContext:ea,useEffect:oh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ge(4,36,qh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ge(4,36,a,b)},useMemo:function(a,b){var c=xb();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=xb();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};
a=a.dispatch=nh.bind(null,Ia,a);return[d.memoizedState,a]},useRef:function(a){var b=xb();a={current:a};return b.memoizedState=a},useState:De,useDebugValue:rh,useResponder:ih,useDeferredValue:function(a,b){var c=De(a),d=c[0],e=c[1];oh(function(){ud(function(){var c=U.suspense;U.suspense=void 0===b?null:b;try{e(a)}finally{U.suspense=c}})},[a,b]);return d},useTransition:function(a){var b=De(!1),c=b[0],d=b[1];return[sh(function(b){d(!0);ud(function(){var c=U.suspense;U.suspense=void 0===a?null:a;try{d(!1),
b()}finally{U.suspense=c}})},[a,c]),c]}},jh={readContext:ea,useCallback:th,useContext:ea,useEffect:ph,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return He(4,36,qh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return He(4,36,a,b)},useMemo:function(a,b){var c=cc();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Be(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:mh,useRef:function(a){return cc().memoizedState},useState:Ee,useDebugValue:rh,
useResponder:ih,useDeferredValue:function(a,b){var c=Ee(a),d=c[0],e=c[1];ph(function(){ud(function(){var c=U.suspense;U.suspense=void 0===b?null:b;try{e(a)}finally{U.suspense=c}})},[a,b]);return d},useTransition:function(a){var b=Ee(!1),c=b[0],d=b[1];return[th(function(b){d(!0);ud(function(){var c=U.suspense;U.suspense=void 0===a?null:a;try{d(!1),b()}finally{U.suspense=c}})},[a,c]),c]}},qa=null,Ka=null,Wa=!1,xj=aa.ReactCurrentOwner,da=!1,Oe={dehydrated:null,retryTime:0};var Nj=function(a,b,c,d){for(c=
b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};var bi=function(a){};var Mj=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;Ua(fa.current);a=null;switch(c){case "input":f=Jd(g,f);d=Jd(g,d);a=[];break;case "option":f=Md(g,f);d=Md(g,d);a=[];break;case "select":f=
J({},f,{value:void 0});d=J({},d,{value:void 0});a=[];break;case "textarea":f=Nd(g,f);d=Nd(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=Hc)}ae(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(cb.hasOwnProperty(h)?
a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,""+l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||
(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(cb.hasOwnProperty(h)?(null!=l&&na(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;(b.updateQueue=e)&&zb(b)}};var Oj=function(a,b,c,d){c!==d&&zb(b)};var Bj="function"===typeof WeakSet?WeakSet:Set,Ij="function"===typeof WeakMap?WeakMap:Map,Ej=Math.ceil,ld=aa.ReactCurrentDispatcher,ai=aa.ReactCurrentOwner,F=0,af=8,Z=16,ka=32,$a=0,md=1,Vh=2,od=3,jd=4,$e=5,q=F,S=null,v=null,R=0,G=
$a,nd=null,sa=1073741823,gc=1073741823,qd=null,hc=0,pd=!1,Ue=0,Wh=500,n=null,gd=!1,Ve=null,La=null,rd=!1,ic=null,jc=90,ab=null,kc=0,df=null,hd=0,Ja=function(a,b){if(50<kc)throw kc=0,df=null,Error(m(185));a=id(a,b);if(null!==a){var c=pe();1073741823===b?(q&af)!==F&&(q&(Z|ka))===F?We(a):(T(a),q===F&&ca()):T(a);(q&4)===F||98!==c&&99!==c||(null===ab?ab=new Map([[a,b]]):(c=ab.get(a),(void 0===c||c>b)&&ab.set(a,b)))}};var Lj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==
e||Q.current)da=!0;else{if(d<c){da=!1;switch(b.tag){case 3:Ch(b);Je();break;case 5:hh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:K(b.type)&&Mc(b);break;case 4:ze(b,b.stateNode.containerInfo);break;case 10:Ug(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Dh(a,b,c);y(A,A.current&1,b);b=ra(a,b,c);return null!==b?b.sibling:null}y(A,A.current&1,b);break;case 19:d=b.childExpirationTime>=
c;if(0!==(a.effectTag&64)){if(d)return Fh(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);y(A,A.current,b);if(!d)return null}return ra(a,b,c)}da=!1}}else da=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=ob(b,L.current);rb(b,c);e=Ce(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;kh();if(K(d)){var f=!0;Mc(b)}else f=
!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Wc(b,d,g,a);e.updater=Xc;b.stateNode=e;e._reactInternalFiber=b;we(b,d,a,c);b=Ne(null,b,d,!0,f,c)}else b.tag=0,P(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;Fi(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Vj(e);a=V(e,a);switch(f){case 0:b=Me(null,b,e,a,c);break;case 1:b=Bh(null,
b,e,a,c);break;case 11:b=xh(null,b,e,a,c);break;case 14:b=yh(null,b,e,V(e.type,a),d,c);break;default:throw Error(m(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:V(d,e),Me(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:V(d,e),Bh(a,b,d,e,c);case 3:Ch(b);d=b.updateQueue;if(null===d)throw Error(m(282));e=b.memoizedState;e=null!==e?e.element:null;Ub(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Je(),b=ra(a,b,c);else{if(e=b.stateNode.hydrate)Ka=
kb(b.stateNode.containerInfo.firstChild),qa=b,e=Wa=!0;if(e)for(c=Ke(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else P(a,b,d,c),Je();b=b.child}return b;case 5:return hh(b),null===a&&Ie(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,ee(d,e)?g=null:null!==f&&ee(d,f)&&(b.effectTag|=16),Ah(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(P(a,b,g,c),b=b.child),b;case 6:return null===a&&Ie(b),null;case 13:return Dh(a,b,
c);case 4:return ze(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=yb(b,null,d,c):P(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:V(d,e),xh(a,b,d,e,c);case 7:return P(a,b,b.pendingProps,c),b.child;case 8:return P(a,b,b.pendingProps.children,c),b.child;case 12:return P(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Ug(b,f);if(null!==g){var h=g.value;f=Ra(h,f)?0:("function"===typeof d._calculateChangedBits?
d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!Q.current){b=ra(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=Ea(c,null),l.tag=Uc,Fa(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);Vg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=
l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}P(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,rb(b,c),e=ea(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,P(a,b,d,c),b.child;case 14:return e=b.type,f=V(e,b.pendingProps),f=V(e.type,f),yh(a,b,e,f,d,c);case 15:return zh(a,b,b.type,b.pendingProps,d,c);case 17:return d=
b.type,e=b.pendingProps,e=b.elementType===d?e:V(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,K(d)?(a=!0,Mc(b)):a=!1,rb(b,c),dh(b,d,e,c),we(b,d,e,c),Ne(null,b,d,!0,a,c);case 19:return Fh(a,b,c)}throw Error(m(156,b.tag));};var ef=null,Se=null,ja=function(a,b,c,d){return new Uj(a,b,c,d)};hf.prototype.render=function(a,b){sd(a,this._internalRoot,null,void 0===b?null:b)};hf.prototype.unmount=function(a){var b=this._internalRoot,c=void 0===a?null:a,d=b.containerInfo;sd(null,
b,null,function(){d[Pb]=null;null!==c&&c()})};var Ui=function(a){if(13===a.tag){var b=Pc(X(),150,100);Ja(a,b);gf(a,b)}};var Zf=function(a){if(13===a.tag){X();var b=Ak++;Ja(a,b);gf(a,b)}};var Si=function(a){if(13===a.tag){var b=X();b=Va(b,a,null);Ja(a,b);gf(a,b)}};Fd=function(a,b,c){switch(b){case "input":Kd(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==
a&&d.form===a.form){var e=he(d);if(!e)throw Error(m(90));Mf(d);Kd(d,e)}}}break;case "textarea":Rf(a,c);break;case "select":b=c.value,null!=b&&hb(a,!!c.multiple,b,!1)}};(function(a,b,c,d){ke=a;fg=b;Hd=c;hg=d})(Xh,function(a,b,c,d){var e=q;q|=4;try{return pb(98,a.bind(null,b,c,d))}finally{q=e,q===F&&ca()}},function(){(q&(1|Z|ka))===F&&(Gj(),Ab())},function(a,b){var c=q;q|=2;try{return a(b)}finally{q=c,q===F&&ca()}});var xi={createPortal:ei,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;
var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(m(188));throw Error(m(268,Object.keys(a)));}a=Xf(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){if(!lc(b))throw Error(m(200));return td(null,a,b,!0,c)},render:function(a,b,c){if(!lc(b))throw Error(m(200));return td(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!lc(c))throw Error(m(200));if(null==a||void 0===a._reactInternalFiber)throw Error(m(38));return td(a,b,c,!1,
d)},unmountComponentAtNode:function(a){if(!lc(a))throw Error(m(40));return a._reactRootContainer?(Yh(function(){td(null,null,a,!1,function(){a._reactRootContainer=null;a[Pb]=null})}),!0):!1},unstable_createPortal:function(){return ei.apply(void 0,arguments)},unstable_batchedUpdates:Xh,flushSync:function(a,b){if((q&(Z|ka))!==F)throw Error(m(187));var c=q;q|=1;try{return pb(99,a.bind(null,b))}finally{q=c,ca()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ib,Qa,he,jf.injectEventPluginsByName,
wd,jb,function(a){zd(a,Wi)},Gf,Hf,Ec,uc,Ab,{current:!1}]}};(function(a){var b=a.findFiberByHostInstance;return Tj(J({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:aa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Xf(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Jb,
bundleType:0,version:"16.12.0",rendererPackageName:"react-dom"});var yi={default:xi},zi=yi&&xi||yi;return zi.default||zi});

/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),a=o(n(1)),c=o(n(3)),u=o(n(4));function o(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function o(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return n.resolveOptions(e),n.listenClick(t),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,c.default),i(o,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===r(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,u.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return s("action",t)}},{key:"defaultTarget",value:function(t){var e=s("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return s("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),o}();function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=l},function(t,e,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),a=n(2),c=(o=a)&&o.__esModule?o:{default:o};var u=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,c.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,c.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),e}();t.exports=u},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var d=n(5),h=n(6);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(l=t).addEventListener(s,f),{destroy:function(){l.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,u=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,u)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,u)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,u,l,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(7);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])});
/**
 * @license
 * Copyright (C) 2006 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * some functions for browser-side pretty printing of code contained in html.
 *
 * <p>
 * For a fairly comprehensive set of languages see the
 * <a href="https://github.com/google/code-prettify#for-which-languages-does-it-work">README</a>
 * file that came with this source.  At a minimum, the lexer should work on a
 * number of languages including C and friends, Java, Python, Bash, SQL, HTML,
 * XML, CSS, Javascript, and Makefiles.  It works passably on Ruby, PHP and Awk
 * and a subset of Perl, but, because of commenting conventions, doesn't work on
 * Smalltalk, Lisp-like, or CAML-like languages without an explicit lang class.
 * <p>
 * Usage: <ol>
 * <li> include this source file in an html page via
 *   {@code <script type="text/javascript" src="/path/to/prettify.js"></script>}
 * <li> define style rules.  See the example page for examples.
 * <li> mark the {@code <pre>} and {@code <code>} tags in your source with
 *    {@code class=prettyprint.}
 *    You can also use the (html deprecated) {@code <xmp>} tag, but the pretty
 *    printer needs to do more substantial DOM manipulations to support that, so
 *    some css styles may not be preserved.
 * </ol>
 * That's it.  I wanted to keep the API as simple as possible, so there's no
 * need to specify which language the code is in, but if you wish, you can add
 * another class to the {@code <pre>} or {@code <code>} element to specify the
 * language, as in {@code <pre class="prettyprint lang-java">}.  Any class that
 * starts with "lang-" followed by a file extension, specifies the file type.
 * See the "lang-*.js" files in this directory for code that implements
 * per-language file handlers.
 * <p>
 * Change log:<br>
 * cbeust, 2006/08/22
 * <blockquote>
 *   Java annotations (start with "@") are now captured as literals ("lit")
 * </blockquote>
 * @requires console
 */

// JSLint declarations
/*global console, document, navigator, setTimeout, window, define */

/**
 * @typedef {!Array.<number|string>}
 * Alternating indices and the decorations that should be inserted there.
 * The indices are monotonically increasing.
 */
var DecorationsT;

/**
 * @typedef {!{
 *   sourceNode: !Element,
 *   pre: !(number|boolean),
 *   langExtension: ?string,
 *   numberLines: ?(number|boolean),
 *   sourceCode: ?string,
 *   spans: ?(Array.<number|Node>),
 *   basePos: ?number,
 *   decorations: ?DecorationsT
 * }}
 * <dl>
 *  <dt>sourceNode<dd>the element containing the source
 *  <dt>sourceCode<dd>source as plain text
 *  <dt>pre<dd>truthy if white-space in text nodes
 *     should be considered significant.
 *  <dt>spans<dd> alternating span start indices into source
 *     and the text node or element (e.g. {@code <BR>}) corresponding to that
 *     span.
 *  <dt>decorations<dd>an array of style classes preceded
 *     by the position at which they start in job.sourceCode in order
 *  <dt>basePos<dd>integer position of this.sourceCode in the larger chunk of
 *     source.
 * </dl>
 */
var JobT;

/**
 * @typedef {!{
 *   sourceCode: string,
 *   spans: !(Array.<number|Node>)
 * }}
 * <dl>
 *  <dt>sourceCode<dd>source as plain text
 *  <dt>spans<dd> alternating span start indices into source
 *     and the text node or element (e.g. {@code <BR>}) corresponding to that
 *     span.
 * </dl>
 */
var SourceSpansT;

/** @define {boolean} */
var IN_GLOBAL_SCOPE = true;


/**
 * {@type !{
 *   'createSimpleLexer': function (Array, Array): (function (JobT)),
 *   'registerLangHandler': function (function (JobT), Array.<string>),
 *   'PR_ATTRIB_NAME': string,
 *   'PR_ATTRIB_NAME': string,
 *   'PR_ATTRIB_VALUE': string,
 *   'PR_COMMENT': string,
 *   'PR_DECLARATION': string,
 *   'PR_KEYWORD': string,
 *   'PR_LITERAL': string,
 *   'PR_NOCODE': string,
 *   'PR_PLAIN': string,
 *   'PR_PUNCTUATION': string,
 *   'PR_SOURCE': string,
 *   'PR_STRING': string,
 *   'PR_TAG': string,
 *   'PR_TYPE': string,
 *   'prettyPrintOne': function (string, string, number|boolean),
 *   'prettyPrint': function (?function, ?(HTMLElement|HTMLDocument))
 * }}
 * @const
 */
var PR;

/**
 * Split {@code prettyPrint} into multiple timeouts so as not to interfere with
 * UI events.
 * If set to {@code false}, {@code prettyPrint()} is synchronous.
 */
var PR_SHOULD_USE_CONTINUATION = true
if (typeof window !== 'undefined') {
  window['PR_SHOULD_USE_CONTINUATION'] = PR_SHOULD_USE_CONTINUATION;
}

/**
 * Pretty print a chunk of code.
 * @param {string} sourceCodeHtml The HTML to pretty print.
 * @param {string} opt_langExtension The language name to use.
 *     Typically, a filename extension like 'cpp' or 'java'.
 * @param {number|boolean} opt_numberLines True to number lines,
 *     or the 1-indexed number of the first line in sourceCodeHtml.
 * @return {string} code as html, but prettier
 */
var prettyPrintOne;
/**
 * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
 * {@code class=prettyprint} and prettify them.
 *
 * @param {Function} opt_whenDone called when prettifying is done.
 * @param {HTMLElement|HTMLDocument} opt_root an element or document
 *   containing all the elements to pretty print.
 *   Defaults to {@code document.body}.
 */
var prettyPrint;


(function () {
  var win = (typeof window !== 'undefined') ? window : {};
  // Keyword lists for various languages.
  // We use things that coerce to strings to make them compact when minified
  // and to defeat aggressive optimizers that fold large string constants.
  var FLOW_CONTROL_KEYWORDS = ["break,continue,do,else,for,if,return,while"];
  var C_KEYWORDS = [FLOW_CONTROL_KEYWORDS,"auto,case,char,const,default," +
      "double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed," +
      "sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"];
  var COMMON_KEYWORDS = [C_KEYWORDS,"catch,class,delete,false,import," +
      "new,operator,private,protected,public,this,throw,true,try,typeof"];
  var CPP_KEYWORDS = [COMMON_KEYWORDS,"alignas,alignof,align_union,asm,axiom,bool," +
      "concept,concept_map,const_cast,constexpr,decltype,delegate," +
      "dynamic_cast,explicit,export,friend,generic,late_check," +
      "mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert," +
      "static_cast,template,typeid,typename,using,virtual,where"];
  var JAVA_KEYWORDS = [COMMON_KEYWORDS,
      "abstract,assert,boolean,byte,extends,finally,final,implements,import," +
      "instanceof,interface,null,native,package,strictfp,super,synchronized," +
      "throws,transient"];
  var CSHARP_KEYWORDS = [COMMON_KEYWORDS,
      "abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending," +
      "dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface," +
      "internal,into,is,join,let,lock,null,object,out,override,orderby,params," +
      "partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong," +
      "unchecked,unsafe,ushort,value,var,virtual,where,yield"];
  var COFFEE_KEYWORDS = "all,and,by,catch,class,else,extends,false,finally," +
      "for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then," +
      "throw,true,try,unless,until,when,while,yes";
  var JSCRIPT_KEYWORDS = [COMMON_KEYWORDS,
      "abstract,async,await,constructor,debugger,enum,eval,export,from,function," +
      "get,import,implements,instanceof,interface,let,null,of,set,undefined," +
      "var,with,yield,Infinity,NaN"];
  var PERL_KEYWORDS = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for," +
      "goto,if,import,last,local,my,next,no,our,print,package,redo,require," +
      "sub,undef,unless,until,use,wantarray,while,BEGIN,END";
  var PYTHON_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "and,as,assert,class,def,del," +
      "elif,except,exec,finally,from,global,import,in,is,lambda," +
      "nonlocal,not,or,pass,print,raise,try,with,yield," +
      "False,True,None"];
  var RUBY_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "alias,and,begin,case,class," +
      "def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo," +
      "rescue,retry,self,super,then,true,undef,unless,until,when,yield," +
      "BEGIN,END"];
  var SH_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "case,done,elif,esac,eval,fi," +
      "function,in,local,set,then,until"];
  var ALL_KEYWORDS = [
      CPP_KEYWORDS, CSHARP_KEYWORDS, JAVA_KEYWORDS, JSCRIPT_KEYWORDS,
      PERL_KEYWORDS, PYTHON_KEYWORDS, RUBY_KEYWORDS, SH_KEYWORDS];
  var C_TYPES = /^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/;

  // token style names.  correspond to css classes
  /**
   * token style for a string literal
   * @const
   */
  var PR_STRING = 'str';
  /**
   * token style for a keyword
   * @const
   */
  var PR_KEYWORD = 'kwd';
  /**
   * token style for a comment
   * @const
   */
  var PR_COMMENT = 'com';
  /**
   * token style for a type
   * @const
   */
  var PR_TYPE = 'typ';
  /**
   * token style for a literal value.  e.g. 1, null, true.
   * @const
   */
  var PR_LITERAL = 'lit';
  /**
   * token style for a punctuation string.
   * @const
   */
  var PR_PUNCTUATION = 'pun';
  /**
   * token style for plain text.
   * @const
   */
  var PR_PLAIN = 'pln';

  /**
   * token style for an sgml tag.
   * @const
   */
  var PR_TAG = 'tag';
  /**
   * token style for a markup declaration such as a DOCTYPE.
   * @const
   */
  var PR_DECLARATION = 'dec';
  /**
   * token style for embedded source.
   * @const
   */
  var PR_SOURCE = 'src';
  /**
   * token style for an sgml attribute name.
   * @const
   */
  var PR_ATTRIB_NAME = 'atn';
  /**
   * token style for an sgml attribute value.
   * @const
   */
  var PR_ATTRIB_VALUE = 'atv';

  /**
   * A class that indicates a section of markup that is not code, e.g. to allow
   * embedding of line numbers within code listings.
   * @const
   */
  var PR_NOCODE = 'nocode';


  // Regex pattern below is automatically generated by regexpPrecederPatterns.pl
  // Do not modify, your changes will be erased.

  // CAVEAT: this does not properly handle the case where a regular
  // expression immediately follows another since a regular expression may
  // have flags for case-sensitivity and the like.  Having regexp tokens
  // adjacent is not valid in any language I'm aware of, so I'm punting.
  // TODO: maybe style special characters inside a regexp as punctuation.

  /**
   * A set of tokens that can precede a regular expression literal in
   * javascript
   * http://web.archive.org/web/20070717142515/http://www.mozilla.org/js/language/js20/rationale/syntax.html
   * has the full list, but I've removed ones that might be problematic when
   * seen in languages that don't support regular expression literals.
   *
   * Specifically, I've removed any keywords that can't precede a regexp
   * literal in a syntactically legal javascript program, and I've removed the
   * "in" keyword since it's not a keyword in many languages, and might be used
   * as a count of inches.
   *
   * The link above does not accurately describe EcmaScript rules since
   * it fails to distinguish between (a=++/b/i) and (a++/b/i) but it works
   * very well in practice.
   *
   * @private
   * @const
   */
  var REGEXP_PRECEDER_PATTERN = '(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*';


  /**
   * Given a group of {@link RegExp}s, returns a {@code RegExp} that globally
   * matches the union of the sets of strings matched by the input RegExp.
   * Since it matches globally, if the input strings have a start-of-input
   * anchor (/^.../), it is ignored for the purposes of unioning.
   * @param {Array.<RegExp>} regexs non multiline, non-global regexs.
   * @return {RegExp} a global regex.
   */
  function combinePrefixPatterns(regexs) {
    var capturedGroupIndex = 0;

    var needToFoldCase = false;
    var ignoreCase = false;
    for (var i = 0, n = regexs.length; i < n; ++i) {
      var regex = regexs[i];
      if (regex.ignoreCase) {
        ignoreCase = true;
      } else if (/[a-z]/i.test(regex.source.replace(
                     /\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ''))) {
        needToFoldCase = true;
        ignoreCase = false;
        break;
      }
    }

    var escapeCharToCodeUnit = {
      'b': 8,
      't': 9,
      'n': 0xa,
      'v': 0xb,
      'f': 0xc,
      'r': 0xd
    };

    function decodeEscape(charsetPart) {
      var cc0 = charsetPart.charCodeAt(0);
      if (cc0 !== 92 /* \\ */) {
        return cc0;
      }
      var c1 = charsetPart.charAt(1);
      cc0 = escapeCharToCodeUnit[c1];
      if (cc0) {
        return cc0;
      } else if ('0' <= c1 && c1 <= '7') {
        return parseInt(charsetPart.substring(1), 8);
      } else if (c1 === 'u' || c1 === 'x') {
        return parseInt(charsetPart.substring(2), 16);
      } else {
        return charsetPart.charCodeAt(1);
      }
    }

    function encodeEscape(charCode) {
      if (charCode < 0x20) {
        return (charCode < 0x10 ? '\\x0' : '\\x') + charCode.toString(16);
      }
      var ch = String.fromCharCode(charCode);
      return (ch === '\\' || ch === '-' || ch === ']' || ch === '^')
          ? "\\" + ch : ch;
    }

    function caseFoldCharset(charSet) {
      var charsetParts = charSet.substring(1, charSet.length - 1).match(
          new RegExp(
              '\\\\u[0-9A-Fa-f]{4}'
              + '|\\\\x[0-9A-Fa-f]{2}'
              + '|\\\\[0-3][0-7]{0,2}'
              + '|\\\\[0-7]{1,2}'
              + '|\\\\[\\s\\S]'
              + '|-'
              + '|[^-\\\\]',
              'g'));
      var ranges = [];
      var inverse = charsetParts[0] === '^';

      var out = ['['];
      if (inverse) { out.push('^'); }

      for (var i = inverse ? 1 : 0, n = charsetParts.length; i < n; ++i) {
        var p = charsetParts[i];
        if (/\\[bdsw]/i.test(p)) {  // Don't muck with named groups.
          out.push(p);
        } else {
          var start = decodeEscape(p);
          var end;
          if (i + 2 < n && '-' === charsetParts[i + 1]) {
            end = decodeEscape(charsetParts[i + 2]);
            i += 2;
          } else {
            end = start;
          }
          ranges.push([start, end]);
          // If the range might intersect letters, then expand it.
          // This case handling is too simplistic.
          // It does not deal with non-latin case folding.
          // It works for latin source code identifiers though.
          if (!(end < 65 || start > 122)) {
            if (!(end < 65 || start > 90)) {
              ranges.push([Math.max(65, start) | 32, Math.min(end, 90) | 32]);
            }
            if (!(end < 97 || start > 122)) {
              ranges.push([Math.max(97, start) & ~32, Math.min(end, 122) & ~32]);
            }
          }
        }
      }

      // [[1, 10], [3, 4], [8, 12], [14, 14], [16, 16], [17, 17]]
      // -> [[1, 12], [14, 14], [16, 17]]
      ranges.sort(function (a, b) { return (a[0] - b[0]) || (b[1]  - a[1]); });
      var consolidatedRanges = [];
      var lastRange = [];
      for (var i = 0; i < ranges.length; ++i) {
        var range = ranges[i];
        if (range[0] <= lastRange[1] + 1) {
          lastRange[1] = Math.max(lastRange[1], range[1]);
        } else {
          consolidatedRanges.push(lastRange = range);
        }
      }

      for (var i = 0; i < consolidatedRanges.length; ++i) {
        var range = consolidatedRanges[i];
        out.push(encodeEscape(range[0]));
        if (range[1] > range[0]) {
          if (range[1] + 1 > range[0]) { out.push('-'); }
          out.push(encodeEscape(range[1]));
        }
      }
      out.push(']');
      return out.join('');
    }

    function allowAnywhereFoldCaseAndRenumberGroups(regex) {
      // Split into character sets, escape sequences, punctuation strings
      // like ('(', '(?:', ')', '^'), and runs of characters that do not
      // include any of the above.
      var parts = regex.source.match(
          new RegExp(
              '(?:'
              + '\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]'  // a character set
              + '|\\\\u[A-Fa-f0-9]{4}'  // a unicode escape
              + '|\\\\x[A-Fa-f0-9]{2}'  // a hex escape
              + '|\\\\[0-9]+'  // a back-reference or octal escape
              + '|\\\\[^ux0-9]'  // other escape sequence
              + '|\\(\\?[:!=]'  // start of a non-capturing group
              + '|[\\(\\)\\^]'  // start/end of a group, or line start
              + '|[^\\x5B\\x5C\\(\\)\\^]+'  // run of other characters
              + ')',
              'g'));
      var n = parts.length;

      // Maps captured group numbers to the number they will occupy in
      // the output or to -1 if that has not been determined, or to
      // undefined if they need not be capturing in the output.
      var capturedGroups = [];

      // Walk over and identify back references to build the capturedGroups
      // mapping.
      for (var i = 0, groupIndex = 0; i < n; ++i) {
        var p = parts[i];
        if (p === '(') {
          // groups are 1-indexed, so max group index is count of '('
          ++groupIndex;
        } else if ('\\' === p.charAt(0)) {
          var decimalValue = +p.substring(1);
          if (decimalValue) {
            if (decimalValue <= groupIndex) {
              capturedGroups[decimalValue] = -1;
            } else {
              // Replace with an unambiguous escape sequence so that
              // an octal escape sequence does not turn into a backreference
              // to a capturing group from an earlier regex.
              parts[i] = encodeEscape(decimalValue);
            }
          }
        }
      }

      // Renumber groups and reduce capturing groups to non-capturing groups
      // where possible.
      for (var i = 1; i < capturedGroups.length; ++i) {
        if (-1 === capturedGroups[i]) {
          capturedGroups[i] = ++capturedGroupIndex;
        }
      }
      for (var i = 0, groupIndex = 0; i < n; ++i) {
        var p = parts[i];
        if (p === '(') {
          ++groupIndex;
          if (!capturedGroups[groupIndex]) {
            parts[i] = '(?:';
          }
        } else if ('\\' === p.charAt(0)) {
          var decimalValue = +p.substring(1);
          if (decimalValue && decimalValue <= groupIndex) {
            parts[i] = '\\' + capturedGroups[decimalValue];
          }
        }
      }

      // Remove any prefix anchors so that the output will match anywhere.
      // ^^ really does mean an anchored match though.
      for (var i = 0; i < n; ++i) {
        if ('^' === parts[i] && '^' !== parts[i + 1]) { parts[i] = ''; }
      }

      // Expand letters to groups to handle mixing of case-sensitive and
      // case-insensitive patterns if necessary.
      if (regex.ignoreCase && needToFoldCase) {
        for (var i = 0; i < n; ++i) {
          var p = parts[i];
          var ch0 = p.charAt(0);
          if (p.length >= 2 && ch0 === '[') {
            parts[i] = caseFoldCharset(p);
          } else if (ch0 !== '\\') {
            // TODO: handle letters in numeric escapes.
            parts[i] = p.replace(
                /[a-zA-Z]/g,
                function (ch) {
                  var cc = ch.charCodeAt(0);
                  return '[' + String.fromCharCode(cc & ~32, cc | 32) + ']';
                });
          }
        }
      }

      return parts.join('');
    }

    var rewritten = [];
    for (var i = 0, n = regexs.length; i < n; ++i) {
      var regex = regexs[i];
      if (regex.global || regex.multiline) { throw new Error('' + regex); }
      rewritten.push(
          '(?:' + allowAnywhereFoldCaseAndRenumberGroups(regex) + ')');
    }

    return new RegExp(rewritten.join('|'), ignoreCase ? 'gi' : 'g');
  }


  /**
   * Split markup into a string of source code and an array mapping ranges in
   * that string to the text nodes in which they appear.
   *
   * <p>
   * The HTML DOM structure:</p>
   * <pre>
   * (Element   "p"
   *   (Element "b"
   *     (Text  "print "))       ; #1
   *   (Text    "'Hello '")      ; #2
   *   (Element "br")            ; #3
   *   (Text    "  + 'World';")) ; #4
   * </pre>
   * <p>
   * corresponds to the HTML
   * {@code <p><b>print </b>'Hello '<br>  + 'World';</p>}.</p>
   *
   * <p>
   * It will produce the output:</p>
   * <pre>
   * {
   *   sourceCode: "print 'Hello '\n  + 'World';",
   *   //                     1          2
   *   //           012345678901234 5678901234567
   *   spans: [0, #1, 6, #2, 14, #3, 15, #4]
   * }
   * </pre>
   * <p>
   * where #1 is a reference to the {@code "print "} text node above, and so
   * on for the other text nodes.
   * </p>
   *
   * <p>
   * The {@code} spans array is an array of pairs.  Even elements are the start
   * indices of substrings, and odd elements are the text nodes (or BR elements)
   * that contain the text for those substrings.
   * Substrings continue until the next index or the end of the source.
   * </p>
   *
   * @param {Node} node an HTML DOM subtree containing source-code.
   * @param {boolean|number} isPreformatted truthy if white-space in
   *    text nodes should be considered significant.
   * @return {SourceSpansT} source code and the nodes in which they occur.
   */
  function extractSourceSpans(node, isPreformatted) {
    var nocode = /(?:^|\s)nocode(?:\s|$)/;

    var chunks = [];
    var length = 0;
    var spans = [];
    var k = 0;

    function walk(node) {
      var type = node.nodeType;
      if (type == 1) {  // Element
        if (nocode.test(node.className)) { return; }
        for (var child = node.firstChild; child; child = child.nextSibling) {
          walk(child);
        }
        var nodeName = node.nodeName.toLowerCase();
        if ('br' === nodeName || 'li' === nodeName) {
          chunks[k] = '\n';
          spans[k << 1] = length++;
          spans[(k++ << 1) | 1] = node;
        }
      } else if (type == 3 || type == 4) {  // Text
        var text = node.nodeValue;
        if (text.length) {
          if (!isPreformatted) {
            text = text.replace(/[ \t\r\n]+/g, ' ');
          } else {
            text = text.replace(/\r\n?/g, '\n');  // Normalize newlines.
          }
          // TODO: handle tabs here?
          chunks[k] = text;
          spans[k << 1] = length;
          length += text.length;
          spans[(k++ << 1) | 1] = node;
        }
      }
    }

    walk(node);

    return {
      sourceCode: chunks.join('').replace(/\n$/, ''),
      spans: spans
    };
  }


  /**
   * Apply the given language handler to sourceCode and add the resulting
   * decorations to out.
   * @param {!Element} sourceNode
   * @param {number} basePos the index of sourceCode within the chunk of source
   *    whose decorations are already present on out.
   * @param {string} sourceCode
   * @param {function(JobT)} langHandler
   * @param {DecorationsT} out
   */
  function appendDecorations(
      sourceNode, basePos, sourceCode, langHandler, out) {
    if (!sourceCode) { return; }
    /** @type {JobT} */
    var job = {
      sourceNode: sourceNode,
      pre: 1,
      langExtension: null,
      numberLines: null,
      sourceCode: sourceCode,
      spans: null,
      basePos: basePos,
      decorations: null
    };
    langHandler(job);
    out.push.apply(out, job.decorations);
  }

  var notWs = /\S/;

  /**
   * Given an element, if it contains only one child element and any text nodes
   * it contains contain only space characters, return the sole child element.
   * Otherwise returns undefined.
   * <p>
   * This is meant to return the CODE element in {@code <pre><code ...>} when
   * there is a single child element that contains all the non-space textual
   * content, but not to return anything where there are multiple child elements
   * as in {@code <pre><code>...</code><code>...</code></pre>} or when there
   * is textual content.
   */
  function childContentWrapper(element) {
    var wrapper = undefined;
    for (var c = element.firstChild; c; c = c.nextSibling) {
      var type = c.nodeType;
      wrapper = (type === 1)  // Element Node
          ? (wrapper ? element : c)
          : (type === 3)  // Text Node
          ? (notWs.test(c.nodeValue) ? element : wrapper)
          : wrapper;
    }
    return wrapper === element ? undefined : wrapper;
  }

  /** Given triples of [style, pattern, context] returns a lexing function,
    * The lexing function interprets the patterns to find token boundaries and
    * returns a decoration list of the form
    * [index_0, style_0, index_1, style_1, ..., index_n, style_n]
    * where index_n is an index into the sourceCode, and style_n is a style
    * constant like PR_PLAIN.  index_n-1 <= index_n, and style_n-1 applies to
    * all characters in sourceCode[index_n-1:index_n].
    *
    * The stylePatterns is a list whose elements have the form
    * [style : string, pattern : RegExp, DEPRECATED, shortcut : string].
    *
    * Style is a style constant like PR_PLAIN, or can be a string of the
    * form 'lang-FOO', where FOO is a language extension describing the
    * language of the portion of the token in $1 after pattern executes.
    * E.g., if style is 'lang-lisp', and group 1 contains the text
    * '(hello (world))', then that portion of the token will be passed to the
    * registered lisp handler for formatting.
    * The text before and after group 1 will be restyled using this decorator
    * so decorators should take care that this doesn't result in infinite
    * recursion.  For example, the HTML lexer rule for SCRIPT elements looks
    * something like ['lang-js', /<[s]cript>(.+?)<\/script>/].  This may match
    * '<script>foo()<\/script>', which would cause the current decorator to
    * be called with '<script>' which would not match the same rule since
    * group 1 must not be empty, so it would be instead styled as PR_TAG by
    * the generic tag rule.  The handler registered for the 'js' extension would
    * then be called with 'foo()', and finally, the current decorator would
    * be called with '<\/script>' which would not match the original rule and
    * so the generic tag rule would identify it as a tag.
    *
    * Pattern must only match prefixes, and if it matches a prefix, then that
    * match is considered a token with the same style.
    *
    * Context is applied to the last non-whitespace, non-comment token
    * recognized.
    *
    * Shortcut is an optional string of characters, any of which, if the first
    * character, gurantee that this pattern and only this pattern matches.
    *
    * @param {Array} shortcutStylePatterns patterns that always start with
    *   a known character.  Must have a shortcut string.
    * @param {Array} fallthroughStylePatterns patterns that will be tried in
    *   order if the shortcut ones fail.  May have shortcuts.
    *
    * @return {function (JobT)} a function that takes an undecorated job and
    *   attaches a list of decorations.
    */
  function createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns) {
    var shortcuts = {};
    var tokenizer;
    (function () {
      var allPatterns = shortcutStylePatterns.concat(fallthroughStylePatterns);
      var allRegexs = [];
      var regexKeys = {};
      for (var i = 0, n = allPatterns.length; i < n; ++i) {
        var patternParts = allPatterns[i];
        var shortcutChars = patternParts[3];
        if (shortcutChars) {
          for (var c = shortcutChars.length; --c >= 0;) {
            shortcuts[shortcutChars.charAt(c)] = patternParts;
          }
        }
        var regex = patternParts[1];
        var k = '' + regex;
        if (!regexKeys.hasOwnProperty(k)) {
          allRegexs.push(regex);
          regexKeys[k] = null;
        }
      }
      allRegexs.push(/[\0-\uffff]/);
      tokenizer = combinePrefixPatterns(allRegexs);
    })();

    var nPatterns = fallthroughStylePatterns.length;

    /**
     * Lexes job.sourceCode and attaches an output array job.decorations of
     * style classes preceded by the position at which they start in
     * job.sourceCode in order.
     *
     * @type{function (JobT)}
     */
    var decorate = function (job) {
      var sourceCode = job.sourceCode, basePos = job.basePos;
      var sourceNode = job.sourceNode;
      /** Even entries are positions in source in ascending order.  Odd enties
        * are style markers (e.g., PR_COMMENT) that run from that position until
        * the end.
        * @type {DecorationsT}
        */
      var decorations = [basePos, PR_PLAIN];
      var pos = 0;  // index into sourceCode
      var tokens = sourceCode.match(tokenizer) || [];
      var styleCache = {};

      for (var ti = 0, nTokens = tokens.length; ti < nTokens; ++ti) {
        var token = tokens[ti];
        var style = styleCache[token];
        var match = void 0;

        var isEmbedded;
        if (typeof style === 'string') {
          isEmbedded = false;
        } else {
          var patternParts = shortcuts[token.charAt(0)];
          if (patternParts) {
            match = token.match(patternParts[1]);
            style = patternParts[0];
          } else {
            for (var i = 0; i < nPatterns; ++i) {
              patternParts = fallthroughStylePatterns[i];
              match = token.match(patternParts[1]);
              if (match) {
                style = patternParts[0];
                break;
              }
            }

            if (!match) {  // make sure that we make progress
              style = PR_PLAIN;
            }
          }

          isEmbedded = style.length >= 5 && 'lang-' === style.substring(0, 5);
          if (isEmbedded && !(match && typeof match[1] === 'string')) {
            isEmbedded = false;
            style = PR_SOURCE;
          }

          if (!isEmbedded) { styleCache[token] = style; }
        }

        var tokenStart = pos;
        pos += token.length;

        if (!isEmbedded) {
          decorations.push(basePos + tokenStart, style);
        } else {  // Treat group 1 as an embedded block of source code.
          var embeddedSource = match[1];
          var embeddedSourceStart = token.indexOf(embeddedSource);
          var embeddedSourceEnd = embeddedSourceStart + embeddedSource.length;
          if (match[2]) {
            // If embeddedSource can be blank, then it would match at the
            // beginning which would cause us to infinitely recurse on the
            // entire token, so we catch the right context in match[2].
            embeddedSourceEnd = token.length - match[2].length;
            embeddedSourceStart = embeddedSourceEnd - embeddedSource.length;
          }
          var lang = style.substring(5);
          // Decorate the left of the embedded source
          appendDecorations(
              sourceNode,
              basePos + tokenStart,
              token.substring(0, embeddedSourceStart),
              decorate, decorations);
          // Decorate the embedded source
          appendDecorations(
              sourceNode,
              basePos + tokenStart + embeddedSourceStart,
              embeddedSource,
              langHandlerForExtension(lang, embeddedSource),
              decorations);
          // Decorate the right of the embedded section
          appendDecorations(
              sourceNode,
              basePos + tokenStart + embeddedSourceEnd,
              token.substring(embeddedSourceEnd),
              decorate, decorations);
        }
      }
      job.decorations = decorations;
    };
    return decorate;
  }

  /** returns a function that produces a list of decorations from source text.
    *
    * This code treats ", ', and ` as string delimiters, and \ as a string
    * escape.  It does not recognize perl's qq() style strings.
    * It has no special handling for double delimiter escapes as in basic, or
    * the tripled delimiters used in python, but should work on those regardless
    * although in those cases a single string literal may be broken up into
    * multiple adjacent string literals.
    *
    * It recognizes C, C++, and shell style comments.
    *
    * @param {Object} options a set of optional parameters.
    * @return {function (JobT)} a function that examines the source code
    *     in the input job and builds a decoration list which it attaches to
    *     the job.
    */
  function sourceDecorator(options) {
    var shortcutStylePatterns = [], fallthroughStylePatterns = [];
    if (options['tripleQuotedStrings']) {
      // '''multi-line-string''', 'single-line-string', and double-quoted
      shortcutStylePatterns.push(
          [PR_STRING,  /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
           null, '\'"']);
    } else if (options['multiLineStrings']) {
      // 'multi-line-string', "multi-line-string"
      shortcutStylePatterns.push(
          [PR_STRING,  /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,
           null, '\'"`']);
    } else {
      // 'single-line-string', "single-line-string"
      shortcutStylePatterns.push(
          [PR_STRING,
           /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,
           null, '"\'']);
    }
    if (options['verbatimStrings']) {
      // verbatim-string-literal production from the C# grammar.  See issue 93.
      fallthroughStylePatterns.push(
          [PR_STRING, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
    }
    var hc = options['hashComments'];
    if (hc) {
      if (options['cStyleComments']) {
        if (hc > 1) {  // multiline hash comments
          shortcutStylePatterns.push(
              [PR_COMMENT, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, '#']);
        } else {
          // Stop C preprocessor declarations at an unclosed open comment
          shortcutStylePatterns.push(
              [PR_COMMENT, /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
               null, '#']);
        }
        // #include <stdio.h>
        fallthroughStylePatterns.push(
            [PR_STRING,
             /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,
             null]);
      } else {
        shortcutStylePatterns.push([PR_COMMENT, /^#[^\r\n]*/, null, '#']);
      }
    }
    if (options['cStyleComments']) {
      fallthroughStylePatterns.push([PR_COMMENT, /^\/\/[^\r\n]*/, null]);
      fallthroughStylePatterns.push(
          [PR_COMMENT, /^\/\*[\s\S]*?(?:\*\/|$)/, null]);
    }
    var regexLiterals = options['regexLiterals'];
    if (regexLiterals) {
      /**
       * @const
       */
      var regexExcls = regexLiterals > 1
        ? ''  // Multiline regex literals
        : '\n\r';
      /**
       * @const
       */
      var regexAny = regexExcls ? '.' : '[\\S\\s]';
      /**
       * @const
       */
      var REGEX_LITERAL = (
          // A regular expression literal starts with a slash that is
          // not followed by * or / so that it is not confused with
          // comments.
          '/(?=[^/*' + regexExcls + '])'
          // and then contains any number of raw characters,
          + '(?:[^/\\x5B\\x5C' + regexExcls + ']'
          // escape sequences (\x5C),
          +    '|\\x5C' + regexAny
          // or non-nesting character sets (\x5B\x5D);
          +    '|\\x5B(?:[^\\x5C\\x5D' + regexExcls + ']'
          +             '|\\x5C' + regexAny + ')*(?:\\x5D|$))+'
          // finally closed by a /.
          + '/');
      fallthroughStylePatterns.push(
          ['lang-regex',
           RegExp('^' + REGEXP_PRECEDER_PATTERN + '(' + REGEX_LITERAL + ')')
           ]);
    }

    var types = options['types'];
    if (types) {
      fallthroughStylePatterns.push([PR_TYPE, types]);
    }

    var keywords = ("" + options['keywords']).replace(/^ | $/g, '');
    if (keywords.length) {
      fallthroughStylePatterns.push(
          [PR_KEYWORD,
           new RegExp('^(?:' + keywords.replace(/[\s,]+/g, '|') + ')\\b'),
           null]);
    }

    shortcutStylePatterns.push([PR_PLAIN,       /^\s+/, null, ' \r\n\t\xA0']);

    var punctuation =
      // The Bash man page says

      // A word is a sequence of characters considered as a single
      // unit by GRUB. Words are separated by metacharacters,
      // which are the following plus space, tab, and newline: { }
      // | & $ ; < >
      // ...

      // A word beginning with # causes that word and all remaining
      // characters on that line to be ignored.

      // which means that only a '#' after /(?:^|[{}|&$;<>\s])/ starts a
      // comment but empirically
      // $ echo {#}
      // {#}
      // $ echo \$#
      // $#
      // $ echo }#
      // }#

      // so /(?:^|[|&;<>\s])/ is more appropriate.

      // http://gcc.gnu.org/onlinedocs/gcc-2.95.3/cpp_1.html#SEC3
      // suggests that this definition is compatible with a
      // default mode that tries to use a single token definition
      // to recognize both bash/python style comments and C
      // preprocessor directives.

      // This definition of punctuation does not include # in the list of
      // follow-on exclusions, so # will not be broken before if preceeded
      // by a punctuation character.  We could try to exclude # after
      // [|&;<>] but that doesn't seem to cause many major problems.
      // If that does turn out to be a problem, we should change the below
      // when hc is truthy to include # in the run of punctuation characters
      // only when not followint [|&;<>].
      '^.[^\\s\\w.$@\'"`/\\\\]*';
    if (options['regexLiterals']) {
      punctuation += '(?!\s*\/)';
    }

    fallthroughStylePatterns.push(
        // TODO(mikesamuel): recognize non-latin letters and numerals in idents
        [PR_LITERAL,     /^@[a-z_$][a-z_$@0-9]*/i, null],
        [PR_TYPE,        /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null],
        [PR_PLAIN,       /^[a-z_$][a-z_$@0-9]*/i, null],
        [PR_LITERAL,
         new RegExp(
             '^(?:'
             // A hex number
             + '0x[a-f0-9]+'
             // or an octal or decimal number,
             + '|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)'
             // possibly in scientific notation
             + '(?:e[+\\-]?\\d+)?'
             + ')'
             // with an optional modifier like UL for unsigned long
             + '[a-z]*', 'i'),
         null, '0123456789'],
        // Don't treat escaped quotes in bash as starting strings.
        // See issue 144.
        [PR_PLAIN,       /^\\[\s\S]?/, null],
        [PR_PUNCTUATION, new RegExp(punctuation), null]);

    return createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns);
  }

  var decorateSource = sourceDecorator({
        'keywords': ALL_KEYWORDS,
        'hashComments': true,
        'cStyleComments': true,
        'multiLineStrings': true,
        'regexLiterals': true
      });

  /**
   * Given a DOM subtree, wraps it in a list, and puts each line into its own
   * list item.
   *
   * @param {Node} node modified in place.  Its content is pulled into an
   *     HTMLOListElement, and each line is moved into a separate list item.
   *     This requires cloning elements, so the input might not have unique
   *     IDs after numbering.
   * @param {number|null|boolean} startLineNum
   *     If truthy, coerced to an integer which is the 1-indexed line number
   *     of the first line of code.  The number of the first line will be
   *     attached to the list.
   * @param {boolean} isPreformatted true iff white-space in text nodes should
   *     be treated as significant.
   */
  function numberLines(node, startLineNum, isPreformatted) {
    var nocode = /(?:^|\s)nocode(?:\s|$)/;
    var lineBreak = /\r\n?|\n/;

    var document = node.ownerDocument;

    var li = document.createElement('li');
    while (node.firstChild) {
      li.appendChild(node.firstChild);
    }
    // An array of lines.  We split below, so this is initialized to one
    // un-split line.
    var listItems = [li];

    function walk(node) {
      var type = node.nodeType;
      if (type == 1 && !nocode.test(node.className)) {  // Element
        if ('br' === node.nodeName.toLowerCase()) {
          breakAfter(node);
          // Discard the <BR> since it is now flush against a </LI>.
          if (node.parentNode) {
            node.parentNode.removeChild(node);
          }
        } else {
          for (var child = node.firstChild; child; child = child.nextSibling) {
            walk(child);
          }
        }
      } else if ((type == 3 || type == 4) && isPreformatted) {  // Text
        var text = node.nodeValue;
        var match = text.match(lineBreak);
        if (match) {
          var firstLine = text.substring(0, match.index);
          node.nodeValue = firstLine;
          var tail = text.substring(match.index + match[0].length);
          if (tail) {
            var parent = node.parentNode;
            parent.insertBefore(
              document.createTextNode(tail), node.nextSibling);
          }
          breakAfter(node);
          if (!firstLine) {
            // Don't leave blank text nodes in the DOM.
            node.parentNode.removeChild(node);
          }
        }
      }
    }

    // Split a line after the given node.
    function breakAfter(lineEndNode) {
      // If there's nothing to the right, then we can skip ending the line
      // here, and move root-wards since splitting just before an end-tag
      // would require us to create a bunch of empty copies.
      while (!lineEndNode.nextSibling) {
        lineEndNode = lineEndNode.parentNode;
        if (!lineEndNode) { return; }
      }

      function breakLeftOf(limit, copy) {
        // Clone shallowly if this node needs to be on both sides of the break.
        var rightSide = copy ? limit.cloneNode(false) : limit;
        var parent = limit.parentNode;
        if (parent) {
          // We clone the parent chain.
          // This helps us resurrect important styling elements that cross lines.
          // E.g. in <i>Foo<br>Bar</i>
          // should be rewritten to <li><i>Foo</i></li><li><i>Bar</i></li>.
          var parentClone = breakLeftOf(parent, 1);
          // Move the clone and everything to the right of the original
          // onto the cloned parent.
          var next = limit.nextSibling;
          parentClone.appendChild(rightSide);
          for (var sibling = next; sibling; sibling = next) {
            next = sibling.nextSibling;
            parentClone.appendChild(sibling);
          }
        }
        return rightSide;
      }

      var copiedListItem = breakLeftOf(lineEndNode.nextSibling, 0);

      // Walk the parent chain until we reach an unattached LI.
      for (var parent;
           // Check nodeType since IE invents document fragments.
           (parent = copiedListItem.parentNode) && parent.nodeType === 1;) {
        copiedListItem = parent;
      }
      // Put it on the list of lines for later processing.
      listItems.push(copiedListItem);
    }

    // Split lines while there are lines left to split.
    for (var i = 0;  // Number of lines that have been split so far.
         i < listItems.length;  // length updated by breakAfter calls.
         ++i) {
      walk(listItems[i]);
    }

    // Make sure numeric indices show correctly.
    if (startLineNum === (startLineNum|0)) {
      listItems[0].setAttribute('value', startLineNum);
    }

    var ol = document.createElement('ol');
    ol.className = 'linenums';
    var offset = Math.max(0, ((startLineNum - 1 /* zero index */)) | 0) || 0;
    for (var i = 0, n = listItems.length; i < n; ++i) {
      li = listItems[i];
      // Stick a class on the LIs so that stylesheets can
      // color odd/even rows, or any other row pattern that
      // is co-prime with 10.
      li.className = 'L' + ((i + offset) % 10);
      if (!li.firstChild) {
        li.appendChild(document.createTextNode('\xA0'));
      }
      ol.appendChild(li);
    }

    node.appendChild(ol);
  }


  /**
   * Breaks {@code job.sourceCode} around style boundaries in
   * {@code job.decorations} and modifies {@code job.sourceNode} in place.
   * @param {JobT} job
   * @private
   */
  function recombineTagsAndDecorations(job) {
    var isIE8OrEarlier = /\bMSIE\s(\d+)/.exec(navigator.userAgent);
    isIE8OrEarlier = isIE8OrEarlier && +isIE8OrEarlier[1] <= 8;
    var newlineRe = /\n/g;

    var source = job.sourceCode;
    var sourceLength = source.length;
    // Index into source after the last code-unit recombined.
    var sourceIndex = 0;

    var spans = job.spans;
    var nSpans = spans.length;
    // Index into spans after the last span which ends at or before sourceIndex.
    var spanIndex = 0;

    var decorations = job.decorations;
    var nDecorations = decorations.length;
    // Index into decorations after the last decoration which ends at or before
    // sourceIndex.
    var decorationIndex = 0;

    // Remove all zero-length decorations.
    decorations[nDecorations] = sourceLength;
    var decPos, i;
    for (i = decPos = 0; i < nDecorations;) {
      if (decorations[i] !== decorations[i + 2]) {
        decorations[decPos++] = decorations[i++];
        decorations[decPos++] = decorations[i++];
      } else {
        i += 2;
      }
    }
    nDecorations = decPos;

    // Simplify decorations.
    for (i = decPos = 0; i < nDecorations;) {
      var startPos = decorations[i];
      // Conflate all adjacent decorations that use the same style.
      var startDec = decorations[i + 1];
      var end = i + 2;
      while (end + 2 <= nDecorations && decorations[end + 1] === startDec) {
        end += 2;
      }
      decorations[decPos++] = startPos;
      decorations[decPos++] = startDec;
      i = end;
    }

    nDecorations = decorations.length = decPos;

    var sourceNode = job.sourceNode;
    var oldDisplay = "";
    if (sourceNode) {
      oldDisplay = sourceNode.style.display;
      sourceNode.style.display = 'none';
    }
    try {
      var decoration = null;
      while (spanIndex < nSpans) {
        var spanStart = spans[spanIndex];
        var spanEnd = /** @type{number} */ (spans[spanIndex + 2])
            || sourceLength;

        var decEnd = decorations[decorationIndex + 2] || sourceLength;

        var end = Math.min(spanEnd, decEnd);

        var textNode = /** @type{Node} */ (spans[spanIndex + 1]);
        var styledText;
        if (textNode.nodeType !== 1  // Don't muck with <BR>s or <LI>s
            // Don't introduce spans around empty text nodes.
            && (styledText = source.substring(sourceIndex, end))) {
          // This may seem bizarre, and it is.  Emitting LF on IE causes the
          // code to display with spaces instead of line breaks.
          // Emitting Windows standard issue linebreaks (CRLF) causes a blank
          // space to appear at the beginning of every line but the first.
          // Emitting an old Mac OS 9 line separator makes everything spiffy.
          if (isIE8OrEarlier) {
            styledText = styledText.replace(newlineRe, '\r');
          }
          textNode.nodeValue = styledText;
          var document = textNode.ownerDocument;
          var span = document.createElement('span');
          span.className = decorations[decorationIndex + 1];
          var parentNode = textNode.parentNode;
          parentNode.replaceChild(span, textNode);
          span.appendChild(textNode);
          if (sourceIndex < spanEnd) {  // Split off a text node.
            spans[spanIndex + 1] = textNode
                // TODO: Possibly optimize by using '' if there's no flicker.
                = document.createTextNode(source.substring(end, spanEnd));
            parentNode.insertBefore(textNode, span.nextSibling);
          }
        }

        sourceIndex = end;

        if (sourceIndex >= spanEnd) {
          spanIndex += 2;
        }
        if (sourceIndex >= decEnd) {
          decorationIndex += 2;
        }
      }
    } finally {
      if (sourceNode) {
        sourceNode.style.display = oldDisplay;
      }
    }
  }


  /** Maps language-specific file extensions to handlers. */
  var langHandlerRegistry = {};
  /** Register a language handler for the given file extensions.
    * @param {function (JobT)} handler a function from source code to a list
    *      of decorations.  Takes a single argument job which describes the
    *      state of the computation and attaches the decorations to it.
    * @param {Array.<string>} fileExtensions
    */
  function registerLangHandler(handler, fileExtensions) {
    for (var i = fileExtensions.length; --i >= 0;) {
      var ext = fileExtensions[i];
      if (!langHandlerRegistry.hasOwnProperty(ext)) {
        langHandlerRegistry[ext] = handler;
      } else if (win['console']) {
        console['warn']('cannot override language handler %s', ext);
      }
    }
  }
  function langHandlerForExtension(extension, source) {
    if (!(extension && langHandlerRegistry.hasOwnProperty(extension))) {
      // Treat it as markup if the first non whitespace character is a < and
      // the last non-whitespace character is a >.
      extension = /^\s*</.test(source)
          ? 'default-markup'
          : 'default-code';
    }
    return langHandlerRegistry[extension];
  }
  registerLangHandler(decorateSource, ['default-code']);
  registerLangHandler(
      createSimpleLexer(
          [],
          [
           [PR_PLAIN,       /^[^<?]+/],
           [PR_DECLARATION, /^<!\w[^>]*(?:>|$)/],
           [PR_COMMENT,     /^<\!--[\s\S]*?(?:-\->|$)/],
           // Unescaped content in an unknown language
           ['lang-',        /^<\?([\s\S]+?)(?:\?>|$)/],
           ['lang-',        /^<%([\s\S]+?)(?:%>|$)/],
           [PR_PUNCTUATION, /^(?:<[%?]|[%?]>)/],
           ['lang-',        /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
           // Unescaped content in javascript.  (Or possibly vbscript).
           ['lang-js',      /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
           // Contains unescaped stylesheet content
           ['lang-css',     /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
           ['lang-in.tag',  /^(<\/?[a-z][^<>]*>)/i]
          ]),
      ['default-markup', 'htm', 'html', 'mxml', 'xhtml', 'xml', 'xsl']);
  registerLangHandler(
      createSimpleLexer(
          [
           [PR_PLAIN,        /^[\s]+/, null, ' \t\r\n'],
           [PR_ATTRIB_VALUE, /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, '\"\'']
           ],
          [
           [PR_TAG,          /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
           [PR_ATTRIB_NAME,  /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
           ['lang-uq.val',   /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
           [PR_PUNCTUATION,  /^[=<>\/]+/],
           ['lang-js',       /^on\w+\s*=\s*\"([^\"]+)\"/i],
           ['lang-js',       /^on\w+\s*=\s*\'([^\']+)\'/i],
           ['lang-js',       /^on\w+\s*=\s*([^\"\'>\s]+)/i],
           ['lang-css',      /^style\s*=\s*\"([^\"]+)\"/i],
           ['lang-css',      /^style\s*=\s*\'([^\']+)\'/i],
           ['lang-css',      /^style\s*=\s*([^\"\'>\s]+)/i]
           ]),
      ['in.tag']);
  registerLangHandler(
      createSimpleLexer([], [[PR_ATTRIB_VALUE, /^[\s\S]+/]]), ['uq.val']);
  registerLangHandler(sourceDecorator({
          'keywords': CPP_KEYWORDS,
          'hashComments': true,
          'cStyleComments': true,
          'types': C_TYPES
        }), ['c', 'cc', 'cpp', 'cxx', 'cyc', 'm']);
  registerLangHandler(sourceDecorator({
          'keywords': 'null,true,false'
        }), ['json']);
  registerLangHandler(sourceDecorator({
          'keywords': CSHARP_KEYWORDS,
          'hashComments': true,
          'cStyleComments': true,
          'verbatimStrings': true,
          'types': C_TYPES
        }), ['cs']);
  registerLangHandler(sourceDecorator({
          'keywords': JAVA_KEYWORDS,
          'cStyleComments': true
        }), ['java']);
  registerLangHandler(sourceDecorator({
          'keywords': SH_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true
        }), ['bash', 'bsh', 'csh', 'sh']);
  registerLangHandler(sourceDecorator({
          'keywords': PYTHON_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true,
          'tripleQuotedStrings': true
        }), ['cv', 'py', 'python']);
  registerLangHandler(sourceDecorator({
          'keywords': PERL_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true,
          'regexLiterals': 2  // multiline regex literals
        }), ['perl', 'pl', 'pm']);
  registerLangHandler(sourceDecorator({
          'keywords': RUBY_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true,
          'regexLiterals': true
        }), ['rb', 'ruby']);
  registerLangHandler(sourceDecorator({
          'keywords': JSCRIPT_KEYWORDS,
          'cStyleComments': true,
          'regexLiterals': true
        }), ['javascript', 'js', 'ts', 'typescript']);
  registerLangHandler(sourceDecorator({
          'keywords': COFFEE_KEYWORDS,
          'hashComments': 3,  // ### style block comments
          'cStyleComments': true,
          'multilineStrings': true,
          'tripleQuotedStrings': true,
          'regexLiterals': true
        }), ['coffee']);
  registerLangHandler(
      createSimpleLexer([], [[PR_STRING, /^[\s\S]+/]]), ['regex']);

  /** @param {JobT} job */
  function applyDecorator(job) {
    var opt_langExtension = job.langExtension;

    try {
      // Extract tags, and convert the source code to plain text.
      var sourceAndSpans = extractSourceSpans(job.sourceNode, job.pre);
      /** Plain text. @type {string} */
      var source = sourceAndSpans.sourceCode;
      job.sourceCode = source;
      job.spans = sourceAndSpans.spans;
      job.basePos = 0;

      // Apply the appropriate language handler
      langHandlerForExtension(opt_langExtension, source)(job);

      // Integrate the decorations and tags back into the source code,
      // modifying the sourceNode in place.
      recombineTagsAndDecorations(job);
    } catch (e) {
      if (win['console']) {
        console['log'](e && e['stack'] || e);
      }
    }
  }

  /**
   * Pretty print a chunk of code.
   * @param sourceCodeHtml {string} The HTML to pretty print.
   * @param opt_langExtension {string} The language name to use.
   *     Typically, a filename extension like 'cpp' or 'java'.
   * @param opt_numberLines {number|boolean} True to number lines,
   *     or the 1-indexed number of the first line in sourceCodeHtml.
   */
  function $prettyPrintOne(sourceCodeHtml, opt_langExtension, opt_numberLines) {
    /** @type{number|boolean} */
    var nl = opt_numberLines || false;
    /** @type{string|null} */
    var langExtension = opt_langExtension || null;
    /** @type{!Element} */
    var container = document.createElement('div');
    // This could cause images to load and onload listeners to fire.
    // E.g. <img onerror="alert(1337)" src="nosuchimage.png">.
    // We assume that the inner HTML is from a trusted source.
    // The pre-tag is required for IE8 which strips newlines from innerHTML
    // when it is injected into a <pre> tag.
    // http://stackoverflow.com/questions/451486/pre-tag-loses-line-breaks-when-setting-innerhtml-in-ie
    // http://stackoverflow.com/questions/195363/inserting-a-newline-into-a-pre-tag-ie-javascript
    container.innerHTML = '<pre>' + sourceCodeHtml + '</pre>';
    container = /** @type{!Element} */(container.firstChild);
    if (nl) {
      numberLines(container, nl, true);
    }

    /** @type{JobT} */
    var job = {
      langExtension: langExtension,
      numberLines: nl,
      sourceNode: container,
      pre: 1,
      sourceCode: null,
      basePos: null,
      spans: null,
      decorations: null
    };
    applyDecorator(job);
    return container.innerHTML;
  }

   /**
    * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
    * {@code class=prettyprint} and prettify them.
    *
    * @param {Function} opt_whenDone called when prettifying is done.
    * @param {HTMLElement|HTMLDocument} opt_root an element or document
    *   containing all the elements to pretty print.
    *   Defaults to {@code document.body}.
    */
  function $prettyPrint(opt_whenDone, opt_root) {
    var root = opt_root || document.body;
    var doc = root.ownerDocument || document;
    function byTagName(tn) { return root.getElementsByTagName(tn); }
    // fetch a list of nodes to rewrite
    var codeSegments = [byTagName('pre'), byTagName('code'), byTagName('xmp')];
    var elements = [];
    for (var i = 0; i < codeSegments.length; ++i) {
      for (var j = 0, n = codeSegments[i].length; j < n; ++j) {
        elements.push(codeSegments[i][j]);
      }
    }
    codeSegments = null;

    var clock = Date;
    if (!clock['now']) {
      clock = { 'now': function () { return +(new Date); } };
    }

    // The loop is broken into a series of continuations to make sure that we
    // don't make the browser unresponsive when rewriting a large page.
    var k = 0;

    var langExtensionRe = /\blang(?:uage)?-([\w.]+)(?!\S)/;
    var prettyPrintRe = /\bprettyprint\b/;
    var prettyPrintedRe = /\bprettyprinted\b/;
    var preformattedTagNameRe = /pre|xmp/i;
    var codeRe = /^code$/i;
    var preCodeXmpRe = /^(?:pre|code|xmp)$/i;
    var EMPTY = {};

    function doWork() {
      var endTime = (win['PR_SHOULD_USE_CONTINUATION'] ?
                     clock['now']() + 250 /* ms */ :
                     Infinity);
      for (; k < elements.length && clock['now']() < endTime; k++) {
        var cs = elements[k];

        // Look for a preceding comment like
        // <?prettify lang="..." linenums="..."?>
        var attrs = EMPTY;
        {
          for (var preceder = cs; (preceder = preceder.previousSibling);) {
            var nt = preceder.nodeType;
            // <?foo?> is parsed by HTML 5 to a comment node (8)
            // like <!--?foo?-->, but in XML is a processing instruction
            var value = (nt === 7 || nt === 8) && preceder.nodeValue;
            if (value
                ? !/^\??prettify\b/.test(value)
                : (nt !== 3 || /\S/.test(preceder.nodeValue))) {
              // Skip over white-space text nodes but not others.
              break;
            }
            if (value) {
              attrs = {};
              value.replace(
                  /\b(\w+)=([\w:.%+-]+)/g,
                function (_, name, value) { attrs[name] = value; });
              break;
            }
          }
        }

        var className = cs.className;
        if ((attrs !== EMPTY || prettyPrintRe.test(className))
            // Don't redo this if we've already done it.
            // This allows recalling pretty print to just prettyprint elements
            // that have been added to the page since last call.
            && !prettyPrintedRe.test(className)) {

          // make sure this is not nested in an already prettified element
          var nested = false;
          for (var p = cs.parentNode; p; p = p.parentNode) {
            var tn = p.tagName;
            if (preCodeXmpRe.test(tn)
                && p.className && prettyPrintRe.test(p.className)) {
              nested = true;
              break;
            }
          }
          if (!nested) {
            // Mark done.  If we fail to prettyprint for whatever reason,
            // we shouldn't try again.
            cs.className += ' prettyprinted';

            // If the classes includes a language extensions, use it.
            // Language extensions can be specified like
            //     <pre class="prettyprint lang-cpp">
            // the language extension "cpp" is used to find a language handler
            // as passed to PR.registerLangHandler.
            // HTML5 recommends that a language be specified using "language-"
            // as the prefix instead.  Google Code Prettify supports both.
            // http://dev.w3.org/html5/spec-author-view/the-code-element.html
            var langExtension = attrs['lang'];
            if (!langExtension) {
              langExtension = className.match(langExtensionRe);
              // Support <pre class="prettyprint"><code class="language-c">
              var wrapper;
              if (!langExtension && (wrapper = childContentWrapper(cs))
                  && codeRe.test(wrapper.tagName)) {
                langExtension = wrapper.className.match(langExtensionRe);
              }

              if (langExtension) { langExtension = langExtension[1]; }
            }

            var preformatted;
            if (preformattedTagNameRe.test(cs.tagName)) {
              preformatted = 1;
            } else {
              var currentStyle = cs['currentStyle'];
              var defaultView = doc.defaultView;
              var whitespace = (
                  currentStyle
                  ? currentStyle['whiteSpace']
                  : (defaultView
                     && defaultView.getComputedStyle)
                  ? defaultView.getComputedStyle(cs, null)
                  .getPropertyValue('white-space')
                  : 0);
              preformatted = whitespace
                  && 'pre' === whitespace.substring(0, 3);
            }

            // Look for a class like linenums or linenums:<n> where <n> is the
            // 1-indexed number of the first line.
            var lineNums = attrs['linenums'];
            if (!(lineNums = lineNums === 'true' || +lineNums)) {
              lineNums = className.match(/\blinenums\b(?::(\d+))?/);
              lineNums =
                lineNums
                ? lineNums[1] && lineNums[1].length
                  ? +lineNums[1] : true
                : false;
            }
            if (lineNums) { numberLines(cs, lineNums, preformatted); }

            // do the pretty printing
            var prettyPrintingJob = {
              langExtension: langExtension,
              sourceNode: cs,
              numberLines: lineNums,
              pre: preformatted,
              sourceCode: null,
              basePos: null,
              spans: null,
              decorations: null
            };
            applyDecorator(prettyPrintingJob);
          }
        }
      }
      if (k < elements.length) {
        // finish up in a continuation
        win.setTimeout(doWork, 250);
      } else if ('function' === typeof opt_whenDone) {
        opt_whenDone();
      }
    }

    doWork();
  }

  /**
   * Contains functions for creating and registering new language handlers.
   * @type {Object}
   */
  var PR = win['PR'] = {
        'createSimpleLexer': createSimpleLexer,
        'registerLangHandler': registerLangHandler,
        'sourceDecorator': sourceDecorator,
        'PR_ATTRIB_NAME': PR_ATTRIB_NAME,
        'PR_ATTRIB_VALUE': PR_ATTRIB_VALUE,
        'PR_COMMENT': PR_COMMENT,
        'PR_DECLARATION': PR_DECLARATION,
        'PR_KEYWORD': PR_KEYWORD,
        'PR_LITERAL': PR_LITERAL,
        'PR_NOCODE': PR_NOCODE,
        'PR_PLAIN': PR_PLAIN,
        'PR_PUNCTUATION': PR_PUNCTUATION,
        'PR_SOURCE': PR_SOURCE,
        'PR_STRING': PR_STRING,
        'PR_TAG': PR_TAG,
        'PR_TYPE': PR_TYPE,
        'prettyPrintOne':
           IN_GLOBAL_SCOPE
             ? (win['prettyPrintOne'] = $prettyPrintOne)
             : (prettyPrintOne = $prettyPrintOne),
        'prettyPrint':
           IN_GLOBAL_SCOPE
             ? (win['prettyPrint'] = $prettyPrint)
             : (prettyPrint = $prettyPrint)
      };

  // Make PR available via the Asynchronous Module Definition (AMD) API.
  // Per https://github.com/amdjs/amdjs-api/wiki/AMD:
  // The Asynchronous Module Definition (AMD) API specifies a
  // mechanism for defining modules such that the module and its
  // dependencies can be asynchronously loaded.
  // ...
  // To allow a clear indicator that a global define function (as
  // needed for script src browser loading) conforms to the AMD API,
  // any global define function SHOULD have a property called "amd"
  // whose value is an object. This helps avoid conflict with any
  // other existing JavaScript code that could have defined a define()
  // function that does not conform to the AMD API.
  var define = win['define'];
  if (typeof define === "function" && define['amd']) {
    define("google-code-prettify", [], function () {
      return PR;
    });
  }
})();

/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Mark=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(n){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;t(this,e),this.ctx=n,this.iframes=r,this.exclude=i,this.iframesTimeout=o}return n(e,[{key:"getContexts",value:function(){var e=[];return(void 0!==this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"==typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[]).forEach(function(t){var n=e.filter(function(e){return e.contains(t)}).length>0;-1!==e.indexOf(t)||n||e.push(t)}),e}},{key:"getIframeContents",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=void 0;try{var i=e.contentWindow;if(r=i.document,!i||!r)throw new Error("iframe inaccessible")}catch(e){n()}r&&t(r)}},{key:"isIframeBlank",value:function(e){var t=e.getAttribute("src").trim();return"about:blank"===e.contentWindow.location.href&&"about:blank"!==t&&t}},{key:"observeIframeLoad",value:function(e,t,n){var r=this,i=!1,o=null,a=function a(){if(!i){i=!0,clearTimeout(o);try{r.isIframeBlank(e)||(e.removeEventListener("load",a),r.getIframeContents(e,t,n))}catch(e){n()}}};e.addEventListener("load",a),o=setTimeout(a,this.iframesTimeout)}},{key:"onIframeReady",value:function(e,t,n){try{"complete"===e.contentWindow.document.readyState?this.isIframeBlank(e)?this.observeIframeLoad(e,t,n):this.getIframeContents(e,t,n):this.observeIframeLoad(e,t,n)}catch(e){n()}}},{key:"waitForIframes",value:function(e,t){var n=this,r=0;this.forEachIframe(e,function(){return!0},function(e){r++,n.waitForIframes(e.querySelector("html"),function(){--r||t()})},function(e){e||t()})}},{key:"forEachIframe",value:function(t,n,r){var i=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=t.querySelectorAll("iframe"),s=a.length,c=0;a=Array.prototype.slice.call(a);var u=function(){--s<=0&&o(c)};s||u(),a.forEach(function(t){e.matches(t,i.exclude)?u():i.onIframeReady(t,function(e){n(t)&&(c++,r(e)),u()},u)})}},{key:"createIterator",value:function(e,t,n){return document.createNodeIterator(e,t,n,!1)}},{key:"createInstanceOnIframe",value:function(t){return new e(t.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(e,t,n){if(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING){if(null===t)return!0;if(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING)return!0}return!1}},{key:"getIteratorNode",value:function(e){var t=e.previousNode();return{prevNode:t,node:null===t?e.nextNode():e.nextNode()&&e.nextNode()}}},{key:"checkIframeFilter",value:function(e,t,n,r){var i=!1,o=!1;return r.forEach(function(e,t){e.val===n&&(i=t,o=e.handled)}),this.compareNodeIframe(e,t,n)?(!1!==i||o?!1===i||o||(r[i].handled=!0):r.push({val:n,handled:!0}),!0):(!1===i&&r.push({val:n,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(e,t,n,r){var i=this;e.forEach(function(e){e.handled||i.getIframeContents(e.val,function(e){i.createInstanceOnIframe(e).forEachNode(t,n,r)})})}},{key:"iterateThroughNodes",value:function(e,t,n,r,i){for(var o,a=this,s=this.createIterator(t,e,r),c=[],u=[],l=void 0,h=void 0;void 0,o=a.getIteratorNode(s),h=o.prevNode,l=o.node;)this.iframes&&this.forEachIframe(t,function(e){return a.checkIframeFilter(l,h,e,c)},function(t){a.createInstanceOnIframe(t).forEachNode(e,function(e){return u.push(e)},r)}),u.push(l);u.forEach(function(e){n(e)}),this.iframes&&this.handleOpenIframes(c,e,n,r),i()}},{key:"forEachNode",value:function(e,t,n){var r=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},o=this.getContexts(),a=o.length;a||i(),o.forEach(function(o){var s=function(){r.iterateThroughNodes(e,o,t,n,function(){--a<=0&&i()})};r.iframes?r.waitForIframes(o,s):s()})}}],[{key:"matches",value:function(e,t){var n="string"==typeof t?[t]:t,r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(r){var i=!1;return n.every(function(t){return!r.call(e,t)||(i=!0,!1)}),i}return!1}}]),e}(),o=function(){function o(e){t(this,o),this.ctx=e,this.ie=!1;var n=window.navigator.userAgent;(n.indexOf("MSIE")>-1||n.indexOf("Trident")>-1)&&(this.ie=!0)}return n(o,[{key:"log",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"debug",r=this.opt.log;this.opt.debug&&"object"===(void 0===r?"undefined":e(r))&&"function"==typeof r[n]&&r[n]("mark.js: "+t)}},{key:"escapeStr",value:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createRegExp",value:function(e){return"disabled"!==this.opt.wildcards&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),"disabled"!==this.opt.wildcards&&(e=this.createWildcardsRegExp(e)),e=this.createAccuracyRegExp(e)}},{key:"createSynonymsRegExp",value:function(e){var t=this.opt.synonyms,n=this.opt.caseSensitive?"":"i",r=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(var i in t)if(t.hasOwnProperty(i)){var o=t[i],a="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(i):this.escapeStr(i),s="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(o):this.escapeStr(o);""!==a&&""!==s&&(e=e.replace(new RegExp("("+this.escapeStr(a)+"|"+this.escapeStr(s)+")","gm"+n),r+"("+this.processSynomyms(a)+"|"+this.processSynomyms(s)+")"+r))}return e}},{key:"processSynomyms",value:function(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}},{key:"setupWildcardsRegExp",value:function(e){return(e=e.replace(/(?:\\)*\?/g,function(e){return"\\"===e.charAt(0)?"?":""})).replace(/(?:\\)*\*/g,function(e){return"\\"===e.charAt(0)?"*":""})}},{key:"createWildcardsRegExp",value:function(e){var t="withSpaces"===this.opt.wildcards;return e.replace(/\u0001/g,t?"[\\S\\s]?":"\\S?").replace(/\u0002/g,t?"[\\S\\s]*?":"\\S*")}},{key:"setupIgnoreJoinersRegExp",value:function(e){return e.replace(/[^(|)\\]/g,function(e,t,n){var r=n.charAt(t+1);return/[(|)\\]/.test(r)||""===r?e:e+"\0"})}},{key:"createJoinersRegExp",value:function(e){var t=[],n=this.opt.ignorePunctuation;return Array.isArray(n)&&n.length&&t.push(this.escapeStr(n.join(""))),this.opt.ignoreJoiners&&t.push("\\u00ad\\u200b\\u200c\\u200d"),t.length?e.split(/\u0000+/).join("["+t.join("")+"]*"):e}},{key:"createDiacriticsRegExp",value:function(e){var t=this.opt.caseSensitive?"":"i",n=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"],r=[];return e.split("").forEach(function(i){n.every(function(n){if(-1!==n.indexOf(i)){if(r.indexOf(n)>-1)return!1;e=e.replace(new RegExp("["+n+"]","gm"+t),"["+n+"]"),r.push(n)}return!0})}),e}},{key:"createMergedBlanksRegExp",value:function(e){return e.replace(/[\s]+/gim,"[\\s]+")}},{key:"createAccuracyRegExp",value:function(e){var t=this,n=this.opt.accuracy,r="string"==typeof n?n:n.value,i="";switch(("string"==typeof n?[]:n.limiters).forEach(function(e){i+="|"+t.escapeStr(e)}),r){case"partially":default:return"()("+e+")";case"complementary":return"()([^"+(i="\\s"+(i||this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿")))+"]*"+e+"[^"+i+"]*)";case"exactly":return"(^|\\s"+i+")("+e+")(?=$|\\s"+i+")"}}},{key:"getSeparatedKeywords",value:function(e){var t=this,n=[];return e.forEach(function(e){t.opt.separateWordSearch?e.split(" ").forEach(function(e){e.trim()&&-1===n.indexOf(e)&&n.push(e)}):e.trim()&&-1===n.indexOf(e)&&n.push(e)}),{keywords:n.sort(function(e,t){return t.length-e.length}),length:n.length}}},{key:"isNumeric",value:function(e){return Number(parseFloat(e))==e}},{key:"checkRanges",value:function(e){var t=this;if(!Array.isArray(e)||"[object Object]"!==Object.prototype.toString.call(e[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(e),[];var n=[],r=0;return e.sort(function(e,t){return e.start-t.start}).forEach(function(e){var i=t.callNoMatchOnInvalidRanges(e,r),o=i.start,a=i.end;i.valid&&(e.start=o,e.length=a-o,n.push(e),r=a)}),n}},{key:"callNoMatchOnInvalidRanges",value:function(e,t){var n=void 0,r=void 0,i=!1;return e&&void 0!==e.start?(r=(n=parseInt(e.start,10))+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&r-t>0&&r-n>0?i=!0:(this.log("Ignoring invalid or overlapping range: "+JSON.stringify(e)),this.opt.noMatch(e))):(this.log("Ignoring invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:n,end:r,valid:i}}},{key:"checkWhitespaceRanges",value:function(e,t,n){var r=void 0,i=!0,o=n.length,a=t-o,s=parseInt(e.start,10)-a;return(r=(s=s>o?o:s)+parseInt(e.length,10))>o&&(r=o,this.log("End range automatically set to the max value of "+o)),s<0||r-s<0||s>o||r>o?(i=!1,this.log("Invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)):""===n.substring(s,r).replace(/\s+/g,"")&&(i=!1,this.log("Skipping whitespace only range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:s,end:r,valid:i}}},{key:"getTextNodes",value:function(e){var t=this,n="",r=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,function(e){r.push({start:n.length,end:(n+=e.textContent).length,node:e})},function(e){return t.matchesExclude(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},function(){e({value:n,nodes:r})})}},{key:"matchesExclude",value:function(e){return i.matches(e,this.opt.exclude.concat(["script","style","title","head","html"]))}},{key:"wrapRangeInTextNode",value:function(e,t,n){var r=this.opt.element?this.opt.element:"mark",i=e.splitText(t),o=i.splitText(n-t),a=document.createElement(r);return a.setAttribute("data-markjs","true"),this.opt.className&&a.setAttribute("class",this.opt.className),a.textContent=i.textContent,i.parentNode.replaceChild(a,i),o}},{key:"wrapRangeInMappedTextNode",value:function(e,t,n,r,i){var o=this;e.nodes.every(function(a,s){var c=e.nodes[s+1];if(void 0===c||c.start>t){if(!r(a.node))return!1;var u=t-a.start,l=(n>a.end?a.end:n)-a.start,h=e.value.substr(0,a.start),f=e.value.substr(l+a.start);if(a.node=o.wrapRangeInTextNode(a.node,u,l),e.value=h+f,e.nodes.forEach(function(t,n){n>=s&&(e.nodes[n].start>0&&n!==s&&(e.nodes[n].start-=l),e.nodes[n].end-=l)}),n-=l,i(a.node.previousSibling,a.start),!(n>a.end))return!1;t=a.end}return!0})}},{key:"wrapMatches",value:function(e,t,n,r,i){var o=this,a=0===t?0:t+1;this.getTextNodes(function(t){t.nodes.forEach(function(t){t=t.node;for(var i=void 0;null!==(i=e.exec(t.textContent))&&""!==i[a];)if(n(i[a],t)){var s=i.index;if(0!==a)for(var c=1;c<a;c++)s+=i[c].length;t=o.wrapRangeInTextNode(t,s,s+i[a].length),r(t.previousSibling),e.lastIndex=0}}),i()})}},{key:"wrapMatchesAcrossElements",value:function(e,t,n,r,i){var o=this,a=0===t?0:t+1;this.getTextNodes(function(t){for(var s=void 0;null!==(s=e.exec(t.value))&&""!==s[a];){var c=s.index;if(0!==a)for(var u=1;u<a;u++)c+=s[u].length;var l=c+s[a].length;o.wrapRangeInMappedTextNode(t,c,l,function(e){return n(s[a],e)},function(t,n){e.lastIndex=n,r(t)})}i()})}},{key:"wrapRangeFromIndex",value:function(e,t,n,r){var i=this;this.getTextNodes(function(o){var a=o.value.length;e.forEach(function(e,r){var s=i.checkWhitespaceRanges(e,a,o.value),c=s.start,u=s.end;s.valid&&i.wrapRangeInMappedTextNode(o,c,u,function(n){return t(n,e,o.value.substring(c,u),r)},function(t){n(t,e)})}),r()})}},{key:"unwrapMatches",value:function(e){for(var t=e.parentNode,n=document.createDocumentFragment();e.firstChild;)n.appendChild(e.removeChild(e.firstChild));t.replaceChild(n,e),this.ie?this.normalizeTextNode(t):t.normalize()}},{key:"normalizeTextNode",value:function(e){if(e){if(3===e.nodeType)for(;e.nextSibling&&3===e.nextSibling.nodeType;)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}},{key:"markRegExp",value:function(e,t){var n=this;this.opt=t,this.log('Searching with expression "'+e+'"');var r=0,i="wrapMatches";this.opt.acrossElements&&(i="wrapMatchesAcrossElements"),this[i](e,this.opt.ignoreGroups,function(e,t){return n.opt.filter(t,e,r)},function(e){r++,n.opt.each(e)},function(){0===r&&n.opt.noMatch(e),n.opt.done(r)})}},{key:"mark",value:function(e,t){var n=this;this.opt=t;var r=0,i="wrapMatches",o=this.getSeparatedKeywords("string"==typeof e?[e]:e),a=o.keywords,s=o.length,c=this.opt.caseSensitive?"":"i";this.opt.acrossElements&&(i="wrapMatchesAcrossElements"),0===s?this.opt.done(r):function e(t){var o=new RegExp(n.createRegExp(t),"gm"+c),u=0;n.log('Searching with expression "'+o+'"'),n[i](o,1,function(e,i){return n.opt.filter(i,t,r,u)},function(e){u++,r++,n.opt.each(e)},function(){0===u&&n.opt.noMatch(t),a[s-1]===t?n.opt.done(r):e(a[a.indexOf(t)+1])})}(a[0])}},{key:"markRanges",value:function(e,t){var n=this;this.opt=t;var r=0,i=this.checkRanges(e);i&&i.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(i)),this.wrapRangeFromIndex(i,function(e,t,r,i){return n.opt.filter(e,t,r,i)},function(e,t){r++,n.opt.each(e,t)},function(){n.opt.done(r)})):this.opt.done(r)}},{key:"unmark",value:function(e){var t=this;this.opt=e;var n=this.opt.element?this.opt.element:"*";n+="[data-markjs]",this.opt.className&&(n+="."+this.opt.className),this.log('Removal selector "'+n+'"'),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,function(e){t.unwrapMatches(e)},function(e){var r=i.matches(e,n),o=t.matchesExclude(e);return!r||o?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},this.opt.done)}},{key:"opt",set:function(e){this._opt=r({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:"disabled",each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:window.console},e)},get:function(){return this._opt}},{key:"iterator",get:function(){return new i(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}}]),o}();return function(e){var t=this,n=new o(e);return this.mark=function(e,r){return n.mark(e,r),t},this.markRegExp=function(e,r){return n.markRegExp(e,r),t},this.markRanges=function(e,r){return n.markRanges(e,r),t},this.unmark=function(e){return n.unmark(e),t},this}});
