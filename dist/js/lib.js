/** @license React v16.9.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';(function(t,q){"object"===typeof exports&&"undefined"!==typeof module?module.exports=q():"function"===typeof define&&define.amd?define(q):t.React=q()})(this,function(){function t(a){for(var b=a.message,c="https://reactjs.org/docs/error-decoder.html?invariant="+b,d=1;d<arguments.length;d++)c+="&args[]="+encodeURIComponent(arguments[d]);a.message="Minified React error #"+b+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";
return a}function q(a,b,c){this.props=a;this.context=b;this.refs=fa;this.updater=c||ha}function ia(){}function O(a,b,c){this.props=a;this.context=b;this.refs=fa;this.updater=c||ha}function ja(a,b,c){var d=void 0,g={},k=null,e=null;if(null!=b)for(d in void 0!==b.ref&&(e=b.ref),void 0!==b.key&&(k=""+b.key),b)ka.call(b,d)&&!la.hasOwnProperty(d)&&(g[d]=b[d]);var l=arguments.length-2;if(1===l)g.children=c;else if(1<l){for(var h=Array(l),f=0;f<l;f++)h[f]=arguments[f+2];g.children=h}if(a&&a.defaultProps)for(d in l=
a.defaultProps,l)void 0===g[d]&&(g[d]=l[d]);return{$$typeof:y,type:a,key:k,ref:e,props:g,_owner:P.current}}function Ba(a,b){return{$$typeof:y,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function Q(a){return"object"===typeof a&&null!==a&&a.$$typeof===y}function Ca(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}function ma(a,b,c,d){if(H.length){var g=H.pop();g.result=a;g.keyPrefix=b;g.func=c;g.context=d;g.count=0;return g}return{result:a,keyPrefix:b,
func:c,context:d,count:0}}function na(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>H.length&&H.push(a)}function R(a,b,c,d){var g=typeof a;if("undefined"===g||"boolean"===g)a=null;var k=!1;if(null===a)k=!0;else switch(g){case "string":case "number":k=!0;break;case "object":switch(a.$$typeof){case y:case Da:k=!0}}if(k)return c(d,a,""===b?"."+S(a,0):b),1;k=0;b=""===b?".":b+":";if(Array.isArray(a))for(var e=0;e<a.length;e++){g=a[e];var l=b+S(g,e);k+=R(g,l,c,d)}else if(null===
a||"object"!==typeof a?l=null:(l=oa&&a[oa]||a["@@iterator"],l="function"===typeof l?l:null),"function"===typeof l)for(a=l.call(a),e=0;!(g=a.next()).done;)g=g.value,l=b+S(g,e++),k+=R(g,l,c,d);else if("object"===g)throw c=""+a,t(Error(31),"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,"");return k}function T(a,b,c){return null==a?0:R(a,"",b,c)}function S(a,b){return"object"===typeof a&&null!==a&&null!=a.key?Ca(a.key):b.toString(36)}function Ea(a,b,c){a.func.call(a.context,
b,a.count++)}function Fa(a,b,c){var d=a.result,g=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?U(a,d,c,function(a){return a}):null!=a&&(Q(a)&&(a=Ba(a,g+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(pa,"$&/")+"/")+c)),d.push(a))}function U(a,b,c,d,g){var e="";null!=c&&(e=(""+c).replace(pa,"$&/")+"/");b=ma(b,e,d,g);T(a,Fa,b);na(b)}function r(){var a=qa.current;if(null===a)throw t(Error(321));return a}function ra(a,b){var c=a.next;if(c===a)e=null;else{a===e&&(e=c);var d=a.previous;
d.next=c;c.previous=d}a.next=a.previous=null;c=a.callback;d=m;var g=z;m=a.priorityLevel;z=a;try{var k=a.expirationTime<=b;switch(m){case 1:var f=c(k);break;case 2:f=c(k);break;case 3:f=c(k);break;case 4:f=c(k);break;case 5:f=c(k)}}catch(l){throw l;}finally{m=d,z=g}if("function"===typeof f)if(b=a.expirationTime,a.callback=f,null===e)e=a.next=a.previous=a;else{f=null;k=e;do{if(b<=k.expirationTime){f=k;break}k=k.next}while(k!==e);null===f?f=e:f===e&&(e=a);b=f.previous;b.next=f.previous=a;a.next=f;a.previous=
b}}function A(a){if(null!==f&&f.startTime<=a){do{var b=f,c=b.next;if(b===c)f=null;else{f=c;var d=b.previous;d.next=c;c.previous=d}b.next=b.previous=null;sa(b,b.expirationTime)}while(null!==f&&f.startTime<=a)}}function V(a){B=!1;A(a);u||(null!==e?(u=!0,w(W)):null!==f&&C(V,f.startTime-a))}function W(a,b){u=!1;B&&(B=!1,I());A(b);J=!0;try{if(!a)for(;null!==e&&e.expirationTime<=b;)ra(e,b),b=n(),A(b);else if(null!==e){do ra(e,b),b=n(),A(b);while(null!==e&&!K())}if(null!==e)return!0;null!==f&&C(V,f.startTime-
b);return!1}finally{J=!1}}function ta(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}function sa(a,b){if(null===e)e=a.next=a.previous=a;else{var c=null,d=e;do{if(b<d.expirationTime){c=d;break}d=d.next}while(d!==e);null===c?c=e:c===e&&(e=a);b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}}var h="function"===typeof Symbol&&Symbol.for,y=h?Symbol.for("react.element"):60103,Da=h?Symbol.for("react.portal"):60106,v=h?Symbol.for("react.fragment"):
60107,X=h?Symbol.for("react.strict_mode"):60108,Ga=h?Symbol.for("react.profiler"):60114,Ha=h?Symbol.for("react.provider"):60109,Ia=h?Symbol.for("react.context"):60110,Ja=h?Symbol.for("react.forward_ref"):60112,Ka=h?Symbol.for("react.suspense"):60113,La=h?Symbol.for("react.suspense_list"):60120,Ma=h?Symbol.for("react.memo"):60115,Na=h?Symbol.for("react.lazy"):60116;h&&Symbol.for("react.fundamental");h&&Symbol.for("react.responder");var oa="function"===typeof Symbol&&Symbol.iterator,ua=Object.getOwnPropertySymbols,
Oa=Object.prototype.hasOwnProperty,Pa=Object.prototype.propertyIsEnumerable,L=function(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return!1;var b={};for(a=0;10>a;a++)b["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(b).map(function(a){return b[a]}).join(""))return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},c)).join("")?
!1:!0}catch(d){return!1}}()?Object.assign:function(a,b){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");var c=Object(a);for(var d,g=1;g<arguments.length;g++){var e=Object(arguments[g]);for(var f in e)Oa.call(e,f)&&(c[f]=e[f]);if(ua){d=ua(e);for(var l=0;l<d.length;l++)Pa.call(e,d[l])&&(c[d[l]]=e[d[l]])}}return c},ha={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,c){},enqueueReplaceState:function(a,b,c,d){},enqueueSetState:function(a,
b,c,d){}},fa={};q.prototype.isReactComponent={};q.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw t(Error(85));this.updater.enqueueSetState(this,a,b,"setState")};q.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};ia.prototype=q.prototype;h=O.prototype=new ia;h.constructor=O;L(h,q.prototype);h.isPureReactComponent=!0;var qa={current:null},P={current:null},ka=Object.prototype.hasOwnProperty,la={key:!0,ref:!0,__self:!0,
__source:!0},pa=/\/+/g,H=[],w=void 0,C=void 0,I=void 0,K=void 0,n=h=void 0,Y=void 0;if("undefined"===typeof window||"function"!==typeof MessageChannel){var D=null,va=null,wa=function(){if(null!==D)try{var a=n();D(!0,a);D=null}catch(b){throw setTimeout(wa,0),b;}};n=function(){return Date.now()};w=function(a){null!==D?setTimeout(w,0,a):(D=a,setTimeout(wa,0))};C=function(a,b){va=setTimeout(a,b)};I=function(){clearTimeout(va)};K=function(){return!1};h=Y=function(){}}else{var Z=window.performance,Qa=window.Date,
aa=window.setTimeout,xa=window.clearTimeout,ba=window.requestAnimationFrame;h=window.cancelAnimationFrame;"undefined"!==typeof console&&("function"!==typeof ba&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof h&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));n="object"===
typeof Z&&"function"===typeof Z.now?function(){return Z.now()}:function(){return Qa.now()};var M=!1,E=null,ca=-1,da=-1,p=33.33,F=-1,x=-1,N=0,ea=!1;K=function(){return n()>=N};h=function(){};Y=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):0<a?(p=Math.floor(1E3/a),ea=!0):(p=33.33,ea=!1)};var za=function(){if(null!==E){var a=n(),b=0<N-a;try{E(b,a)||(E=null)}catch(c){throw ya.postMessage(null),c;
}}},G=new MessageChannel,ya=G.port2;G.port1.onmessage=za;var Aa=function(a){if(null===E)x=F=-1,M=!1;else{M=!0;ba(function(a){xa(ca);Aa(a)});var b=function(){N=n()+p/2;za();ca=aa(b,3*p)};ca=aa(b,3*p);if(-1!==F&&.1<a-F){var c=a-F;!ea&&-1!==x&&c<p&&x<p&&(p=c<x?x:c,8.33>p&&(p=8.33));x=c}F=a;N=a+p;ya.postMessage(null)}};w=function(a){E=a;M||(M=!0,ba(function(a){Aa(a)}))};C=function(a,b){da=aa(function(){a(n())},b)};I=function(){xa(da);da=-1}}var e=null,f=null,z=null,m=3,J=!1,u=!1,B=!1,Ra=0;G={ReactCurrentDispatcher:qa,
ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:L};L(G,{Scheduler:{unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=m;m=a;try{return b()}finally{m=c}},unstable_next:function(a){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m}var c=m;m=b;try{return a()}finally{m=c}},unstable_scheduleCallback:function(a,
b,c){var d=n();if("object"===typeof c&&null!==c){var g=c.delay;g="number"===typeof g&&0<g?d+g:d;c="number"===typeof c.timeout?c.timeout:ta(a)}else c=ta(a),g=d;c=g+c;a={callback:b,priorityLevel:a,startTime:g,expirationTime:c,next:null,previous:null};if(g>d){c=g;if(null===f)f=a.next=a.previous=a;else{b=null;var k=f;do{if(c<k.startTime){b=k;break}k=k.next}while(k!==f);null===b?b=f:b===f&&(f=a);c=b.previous;c.next=b.previous=a;a.next=b;a.previous=c}null===e&&f===a&&(B?I():B=!0,C(V,g-d))}else sa(a,c),
u||J||(u=!0,w(W));return a},unstable_cancelCallback:function(a){var b=a.next;if(null!==b){if(a===b)a===e?e=null:a===f&&(f=null);else{a===e?e=b:a===f&&(f=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}},unstable_wrapCallback:function(a){var b=m;return function(){var c=m;m=b;try{return a.apply(this,arguments)}finally{m=c}}},unstable_getCurrentPriorityLevel:function(){return m},unstable_shouldYield:function(){var a=n();A(a);return null!==z&&null!==e&&e.startTime<=a&&e.expirationTime<
z.expirationTime||K()},unstable_requestPaint:h,unstable_continueExecution:function(){u||J||(u=!0,w(W))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return e},get unstable_now(){return n},get unstable_forceFrameRate(){return Y}},SchedulerTracing:{get __interactionsRef(){return null},get __subscriberRef(){return null},unstable_clear:function(a){return a()},unstable_getCurrent:function(){return null},unstable_getThreadID:function(){return++Ra},unstable_trace:function(a,
b,c){return c()},unstable_wrap:function(a){return a},unstable_subscribe:function(a){},unstable_unsubscribe:function(a){}}});v={Children:{map:function(a,b,c){if(null==a)return a;var d=[];U(a,d,null,b,c);return d},forEach:function(a,b,c){if(null==a)return a;b=ma(null,null,b,c);T(a,Ea,b);na(b)},count:function(a){return T(a,function(){return null},null)},toArray:function(a){var b=[];U(a,b,null,function(a){return a});return b},only:function(a){if(!Q(a))throw t(Error(143));return a}},createRef:function(){return{current:null}},
Component:q,PureComponent:O,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:Ia,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:Ha,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:Ja,render:a}},lazy:function(a){return{$$typeof:Na,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:Ma,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return r().useCallback(a,b)},
useContext:function(a,b){return r().useContext(a,b)},useEffect:function(a,b){return r().useEffect(a,b)},useImperativeHandle:function(a,b,c){return r().useImperativeHandle(a,b,c)},useDebugValue:function(a,b){},useLayoutEffect:function(a,b){return r().useLayoutEffect(a,b)},useMemo:function(a,b){return r().useMemo(a,b)},useReducer:function(a,b,c){return r().useReducer(a,b,c)},useRef:function(a){return r().useRef(a)},useState:function(a){return r().useState(a)},Fragment:v,Profiler:Ga,StrictMode:X,Suspense:Ka,
unstable_SuspenseList:La,createElement:ja,cloneElement:function(a,b,c){if(null===a||void 0===a)throw t(Error(267),a);var d=void 0,e=L({},a.props),f=a.key,h=a.ref,l=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,l=P.current);void 0!==b.key&&(f=""+b.key);var m=void 0;a.type&&a.type.defaultProps&&(m=a.type.defaultProps);for(d in b)ka.call(b,d)&&!la.hasOwnProperty(d)&&(e[d]=void 0===b[d]&&void 0!==m?m[d]:b[d])}d=arguments.length-2;if(1===d)e.children=c;else if(1<d){m=Array(d);for(var n=0;n<d;n++)m[n]=
arguments[n+2];e.children=m}return{$$typeof:y,type:a.type,key:f,ref:h,props:e,_owner:l}},createFactory:function(a){var b=ja.bind(null,a);b.type=a;return b},isValidElement:Q,version:"16.9.0",unstable_withSuspenseConfig:function(a,b){a()},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:G};v=(X={default:v},v)||X;return v.default||v});

/** @license React v16.9.0
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
'use strict';(function(ka,m){"object"===typeof exports&&"undefined"!==typeof module?module.exports=m(require("react")):"function"===typeof define&&define.amd?define(["react"],m):ka.ReactDOM=m(ka.React)})(this,function(ka){function m(a){for(var b=a.message,c="https://reactjs.org/docs/error-decoder.html?invariant="+b,d=1;d<arguments.length;d++)c+="&args[]="+encodeURIComponent(arguments[d]);a.message="Minified React error #"+b+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";
return a}function Ze(){if(jc)for(var a in Xa){var b=Xa[a],c=jc.indexOf(a);if(!(-1<c))throw m(Error(96),a);if(!kc[c]){if(!b.extractEvents)throw m(Error(97),a);kc[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(kd.hasOwnProperty(h))throw m(Error(99),h);kd[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&$e(k[e],g,h);e=!0}else f.registrationName?($e(f.registrationName,g,h),e=!0):e=!1;if(!e)throw m(Error(98),d,a);}}}}function $e(a,b,c){if(Ya[a])throw m(Error(100),
a);Ya[a]=b;ld[a]=b.eventTypes[c].dependencies}function Uh(a,b,c,d,e,f,g,h,k){ub=!1;lc=null;Vh.apply(Wh,arguments)}function Xh(a,b,c,d,e,f,g,h,k){Uh.apply(this,arguments);if(ub){if(ub){var l=lc;ub=!1;lc=null}else throw m(Error(198));mc||(mc=!0,md=l)}}function af(a,b,c){var d=a.type||"unknown-event";a.currentTarget=bf(c);Xh(d,b,void 0,a);a.currentTarget=null}function Za(a,b){if(null==b)throw m(Error(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);
return a}return Array.isArray(b)?[a].concat(b):[a,b]}function nd(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}function nc(a){null!==a&&(vb=Za(vb,a));a=vb;vb=null;if(a){nd(a,Yh);if(vb)throw m(Error(95));if(mc)throw a=md,mc=!1,md=null,a;}}function cf(a,b){var c=a.stateNode;if(!c)return null;var d=od(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=
!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw m(Error(231),b,typeof c);return c}function oc(a){if(a[la])return a[la];for(;!a[la];)if(a.parentNode)a=a.parentNode;else return null;a=a[la];return 5===a.tag||6===a.tag?a:null}function df(a){a=a[la];return!a||5!==a.tag&&6!==a.tag?null:a}function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;throw m(Error(33));}function pd(a){return a[pc]||
null}function ma(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function ef(a,b,c){if(b=cf(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Za(c._dispatchListeners,b),c._dispatchInstances=Za(c._dispatchInstances,a)}function Zh(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=ma(b);for(b=c.length;0<b--;)ef(c[b],"captured",a);for(b=0;b<c.length;b++)ef(c[b],"bubbled",a)}}function qd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&
(b=cf(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Za(c._dispatchListeners,b),c._dispatchInstances=Za(c._dispatchInstances,a))}function $h(a){a&&a.dispatchConfig.registrationName&&qd(a._targetInst,null,a)}function $a(a){nd(a,Zh)}function qc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}function rc(a){if(rd[a])return rd[a];if(!ab[a])return a;var b=ab[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in ff)return rd[a]=b[c];return a}function gf(){if(sc)return sc;
var a,b=sd,c=b.length,d,e="value"in va?va.value:va.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return sc=e.slice(a,1<d?1-d:void 0)}function tc(){return!0}function uc(){return!1}function Q(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:
!1===c.returnValue)?tc:uc;this.isPropagationStopped=uc;return this}function ai(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function bi(a){if(!(a instanceof this))throw m(Error(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function hf(a){a.eventPool=[];a.getPooled=ai;a.release=bi}function jf(a,b){switch(a){case "keyup":return-1!==ci.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;
default:return!1}}function kf(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}function di(a,b){switch(a){case "compositionend":return kf(b);case "keypress":if(32!==b.which)return null;lf=!0;return mf;case "textInput":return a=b.data,a===mf&&lf?null:a;default:return null}}function ei(a,b){if(bb)return"compositionend"===a||!td&&jf(a,b)?(a=gf(),sc=sd=va=null,bb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&
1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return nf&&"ko"!==b.locale?null:b.data;default:return null}}function of(a){if(a=pf(a)){if("function"!==typeof ud)throw m(Error(280));var b=od(a.stateNode);ud(a.stateNode,a.type,b)}}function qf(a){cb?db?db.push(a):db=[a]:cb=a}function rf(){if(cb){var a=cb,b=db;db=cb=null;of(a);if(b)for(a=0;a<b.length;a++)of(b[a])}}function vd(){if(null!==cb||null!==db)wd(),rf()}function sf(a){var b=a&&a.nodeName&&
a.nodeName.toLowerCase();return"input"===b?!!fi[a.type]:"textarea"===b?!0:!1}function xd(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function tf(a){if(!wa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function uf(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}function gi(a){var b=
uf(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=null;
delete a[b]}}}}function vc(a){a._valueTracker||(a._valueTracker=gi(a))}function vf(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=uf(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function wb(a){if(null===a||"object"!==typeof a)return null;a=wf&&a[wf]||a["@@iterator"];return"function"===typeof a?a:null}function xa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;
switch(a){case ya:return"Fragment";case eb:return"Portal";case wc:return"Profiler";case xf:return"StrictMode";case xc:return"Suspense";case yd:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case yf:return"Context.Consumer";case zf:return"Context.Provider";case zd:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Ad:return xa(a.type);case Af:if(a=1===a._status?a._result:null)return xa(a)}return null}function Bd(a){var b=
"";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=xa(a.type);c=null;d&&(c=xa(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(hi,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}function ii(a){if(Bf.call(Cf,a))return!0;if(Bf.call(Df,a))return!1;if(ji.test(a))return Cf[a]=!0;Df[a]=!0;return!1}function ki(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;
case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function li(a,b,c,d){if(null===b||"undefined"===typeof b||ki(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=
a;this.type=b;this.sanitizeURL=f}function Cd(a,b,c,d){var e=H.hasOwnProperty(b)?H[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(li(b,c,e,d)&&(c=null),d||null===e?ii(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,
c))))}function za(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Dd(a,b){var c=b.checked;return K({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Ef(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=za(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===
b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Ff(a,b){b=b.checked;null!=b&&Cd(a,"checked",b,!1)}function Ed(a,b){Ff(a,b);var c=za(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Fd(a,b.type,c):b.hasOwnProperty("defaultValue")&&Fd(a,b.type,za(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=
!!b.defaultChecked)}function Gf(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}function Fd(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:
a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Hf(a,b,c){a=Q.getPooled(If.change,a,b,c);a.type="change";qf(c);$a(a);return a}function mi(a){nc(a)}function yc(a){var b=Ja(a);if(vf(b))return a}function ni(a,b){if("change"===a)return b}function Jf(){xb&&(xb.detachEvent("onpropertychange",Kf),yb=xb=null)}function Kf(a){if("value"===a.propertyName&&yc(yb))if(a=Hf(yb,a,xd(a)),Z)nc(a);else{Z=!0;try{Gd(mi,a)}finally{Z=!1,vd()}}}function oi(a,b,c){"focus"===a?(Jf(),xb=b,yb=c,xb.attachEvent("onpropertychange",
Kf)):"blur"===a&&Jf()}function pi(a,b){if("selectionchange"===a||"keyup"===a||"keydown"===a)return yc(yb)}function qi(a,b){if("click"===a)return yc(b)}function ri(a,b){if("input"===a||"change"===a)return yc(b)}function si(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=ti[a])?!!b[a]:!1}function Hd(a){return si}function Ka(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function zb(a,b){if(Ka(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===
b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!ui.call(b,c[d])||!Ka(a[c[d]],b[c[d]]))return!1;return!0}function Lf(a,b){return{responder:a,props:b}}function Ab(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function Mf(a){if(2!==Ab(a))throw m(Error(188));}function vi(a){var b=a.alternate;if(!b){b=Ab(a);if(3===b)throw m(Error(188));
return 1===b?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Mf(e),a;if(f===d)return Mf(e),b;f=f.sibling}throw m(Error(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw m(Error(189));
}}if(c.alternate!==d)throw m(Error(190));}if(3!==c.tag)throw m(Error(188));return c.stateNode.current===c?a:b}function Nf(a){a=vi(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}function zc(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:
0}function Of(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=oc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=xd(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<kc.length;h++){var k=kc[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=Za(g,k))}nc(g)}}function v(a,b){Bb(b,a,!1)}function Bb(a,b,c){switch(wi(b)){case 0:var d=xi.bind(null,b,1);
break;case 1:d=yi.bind(null,b,1);break;default:d=Ac.bind(null,b,1)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function xi(a,b,c){Z||wd();var d=Ac,e=Z;Z=!0;try{Pf(d,a,b,c)}finally{(Z=e)||vd()}}function yi(a,b,c){Ac(a,b,c)}function Ac(a,b,c){if(Bc){b=xd(c);b=oc(b);null===b||"number"!==typeof b.tag||2===Ab(b)||(b=null);if(Cc.length){var d=Cc.pop();d.topLevelType=a;d.nativeEvent=c;d.targetInst=b;a=d}else a={topLevelType:a,nativeEvent:c,targetInst:b,ancestors:[]};try{if(c=a,Z)Of(c,void 0);
else{Z=!0;try{Qf(Of,c,void 0)}finally{Z=!1,vd()}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Cc.length&&Cc.push(a)}}}function Rf(a){var b=Sf.get(a);void 0===b&&(b=new Set,Sf.set(a,b));return b}function Id(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Tf(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function Uf(a,b){var c=Tf(a);a=0;for(var d;c;){if(3===
c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Tf(c)}}function Vf(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Vf(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function Wf(){for(var a=window,b=Id();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=
!1}if(c)a=b.contentWindow;else break;b=Id(a.document)}return b}function Jd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}function Xf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Kd||null==fb||fb!==Id(c))return null;c=fb;"selectionStart"in c&&Jd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&
c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Cb&&zb(Cb,c)?null:(Cb=c,a=Q.getPooled(Yf.select,Ld,a,b),a.type="select",a.target=fb,$a(a),a)}function zi(a){var b="";ka.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Md(a,b){a=K({children:void 0},b);if(b=zi(b.children))a.children=b;return a}function gb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+
c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+za(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}function Nd(a,b){if(null!=b.dangerouslySetInnerHTML)throw m(Error(91));return K({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Zf(a,b){var c=
b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw m(Error(92));if(Array.isArray(b)){if(!(1>=b.length))throw m(Error(93));b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:za(c)}}function $f(a,b){var c=za(b.value),d=za(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function ag(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";
default:return"http://www.w3.org/1999/xhtml"}}function Od(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ag(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}function bg(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||Db.hasOwnProperty(a)&&Db[a]?(""+b).trim():b+"px"}function cg(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=bg(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,
e):a[c]=e}}function Pd(a,b){if(b){if(Ai[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw m(Error(137),a,"");if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw m(Error(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw m(Error(61));}if(null!=b.style&&"object"!==typeof b.style)throw m(Error(62),"");}}function Qd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;
default:return!0}}function na(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Rf(a);b=ld[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.has(e)){switch(e){case "scroll":Bb(a,"scroll",!0);break;case "focus":case "blur":Bb(a,"focus",!0);Bb(a,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":tf(e)&&Bb(a,e,!0);break;case "invalid":case "submit":case "reset":break;default:-1===Eb.indexOf(e)&&v(e,a)}c.add(e)}}}function Dc(){}function dg(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Rd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function Fb(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function w(a,b){0>hb||(a.current=Sd[hb],Sd[hb]=null,hb--)}function D(a,b,c){hb++;Sd[hb]=a.current;a.current=b}function ib(a,b){var c=a.type.contextTypes;if(!c)return Aa;
var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function G(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ec(a){w(M,a);w(I,a)}function Td(a){w(M,a);w(I,a)}function eg(a,b,c){if(I.current!==Aa)throw m(Error(168));D(I,b,a);D(M,c,a)}function fg(a,b,c){var d=
a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw m(Error(108),xa(b)||"Unknown",e);return K({},c,d)}function Fc(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Aa;La=I.current;D(I,b,a);D(M,M.current,a);return!0}function gg(a,b,c){var d=a.stateNode;if(!d)throw m(Error(169));c?(b=fg(a,b,La),d.__reactInternalMemoizedMergedChildContext=b,w(M,a),w(I,a),D(I,b,a)):w(M,a);D(M,c,a)}function Ud(){switch(Bi()){case Gc:return 99;
case hg:return 98;case ig:return 97;case jg:return 96;case kg:return 95;default:throw m(Error(332));}}function lg(a){switch(a){case 99:return Gc;case 98:return hg;case 97:return ig;case 96:return jg;case 95:return kg;default:throw m(Error(332));}}function Ma(a,b){a=lg(a);return Ci(a,b)}function Vd(a,b,c){a=lg(a);return Wd(a,b,c)}function Hc(a){null===oa?(oa=[a],Xd=Wd(Gc,mg)):oa.push(a);return ng}function V(){null!==Xd&&og(Xd);mg()}function mg(){if(!Yd&&null!==oa){Yd=!0;var a=0;try{var b=oa;Ma(99,
function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});oa=null}catch(c){throw null!==oa&&(oa=oa.slice(a+1)),Wd(Gc,V),c;}finally{Yd=!1}}}function Zd(a,b){if(1073741823===b)return 99;if(1===b)return 95;a=10*(1073741821-b)-10*(1073741821-a);return 0>=a?99:250>=a?98:5250>=a?97:95}function X(a,b){if(a&&a.defaultProps){b=K({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}function Di(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;
default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}function $d(){Ic=jb=Jc=null}function pg(a,b){var c=a.type._context;D(ae,c._currentValue,a);c._currentValue=b}function be(a){var b=ae.current;w(ae,a);a.type._context._currentValue=b}function qg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<
b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function kb(a,b){Jc=a;Ic=jb=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(pa=!0),a.firstContext=null)}function aa(a,b){if(Ic!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Ic=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===jb){if(null===Jc)throw m(Error(308));jb=b;
Jc.dependencies={expirationTime:0,firstContext:b,responders:null}}else jb=jb.next=b}return a._currentValue}function Kc(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function ce(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,
lastCapturedEffect:null}}function Ba(a,b){return{expirationTime:a,suspenseConfig:b,tag:rg,payload:null,callback:null,next:null,nextEffect:null}}function Lc(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}function Ca(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Kc(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Kc(a.memoizedState),e=c.updateQueue=Kc(c.memoizedState)):
d=a.updateQueue=ce(e):null===e&&(e=c.updateQueue=ce(d));null===e||d===e?Lc(d,b):null===d.lastUpdate||null===e.lastUpdate?(Lc(d,b),Lc(e,b)):(Lc(d,b),e.lastUpdate=b)}function sg(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Kc(a.memoizedState):tg(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function tg(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ce(b));return b}function ug(a,b,c,d,e,f){switch(c.tag){case 1:return a=
c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-2049|64;case rg:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return K({},d,e);case Mc:Da=!0}return d}function Gb(a,b,c,d,e){Da=!1;b=tg(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):(wg(m,k.suspenseConfig),l=ug(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=
b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var n=k.expirationTime;n<e?(null===m&&(m=k,null===g&&(f=l)),h<n&&(h=n)):(l=ug(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===
m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l}function xg(a,b,c,d){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);yg(b.firstEffect,c);b.firstEffect=b.lastEffect=null;yg(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function yg(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;
var d=b;if("function"!==typeof c)throw m(Error(191),c);c.call(d)}a=a.nextEffect}}function Nc(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:K({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}function zg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!zb(c,d)||!zb(e,f):!0}function Ag(a,b,c,d){var e=!1;d=Aa;var f=b.contextType;"object"===
typeof f&&null!==f?f=aa(f):(d=G(b)?La:I.current,e=b.contextTypes,f=(e=null!==e&&void 0!==e)?ib(a,d):Aa);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Oc;a.stateNode=b;b._reactInternalFiber=a;e&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=d,a.__reactInternalMemoizedMaskedChildContext=f);return b}function Bg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&
b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Oc.enqueueReplaceState(b,b.state,null)}function de(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Cg;var f=b.contextType;"object"===typeof f&&null!==f?e.context=aa(f):(f=G(b)?La:I.current,e.context=ib(a,f));f=a.updateQueue;null!==f&&(Gb(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Nc(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||
"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Oc.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Gb(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}function Hb(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=
c._owner;var d=void 0;if(c){if(1!==c.tag)throw m(Error(309));d=c.stateNode}if(!d)throw m(Error(147),a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Cg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw m(Error(284));if(!c._owner)throw m(Error(290),a);}return a}function Pc(a,b){if("textarea"!==a.type)throw m(Error(31),"[object Object]"===Object.prototype.toString.call(b)?
"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}function Dg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Na(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;
d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=ee(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Hb(a,b,c),d.return=a,d;d=Rc(c.type,c.key,c.props,null,a.mode,d);d.ref=Hb(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==
c.containerInfo||b.stateNode.implementation!==c.implementation)return b=fe(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ea(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function q(a,b,c){if("string"===typeof b||"number"===typeof b)return b=ee(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Sc:return c=Rc(b.type,b.key,b.props,null,a.mode,c),c.ref=Hb(a,null,b),c.return=a,c;
case eb:return b=fe(b,a.mode,c),b.return=a,b}if(Tc(b)||wb(b))return b=Ea(b,a.mode,c,null),b.return=a,b;Pc(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Sc:return c.key===e?c.type===ya?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case eb:return c.key===e?l(a,b,c,d):null}if(Tc(c)||wb(c))return null!==e?null:n(a,b,c,d,null);Pc(a,c)}return null}function u(a,
b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Sc:return a=a.get(null===d.key?c:d.key)||null,d.type===ya?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case eb:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Tc(d)||wb(d))return a=a.get(c)||null,n(b,a,d,e,null);Pc(b,d)}return null}function v(e,g,h,k){for(var l=null,m=null,n=g,r=g=0,y=null;null!==n&&r<h.length;r++){n.index>r?(y=n,n=null):y=n.sibling;
var p=x(e,n,h[r],k);if(null===p){null===n&&(n=y);break}a&&n&&null===p.alternate&&b(e,n);g=f(p,g,r);null===m?l=p:m.sibling=p;m=p;n=y}if(r===h.length)return c(e,n),l;if(null===n){for(;r<h.length;r++)n=q(e,h[r],k),null!==n&&(g=f(n,g,r),null===m?l=n:m.sibling=n,m=n);return l}for(n=d(e,n);r<h.length;r++)y=u(n,e,r,h[r],k),null!==y&&(a&&null!==y.alternate&&n.delete(null===y.key?r:y.key),g=f(y,g,r),null===m?l=y:m.sibling=y,m=y);a&&n.forEach(function(a){return b(e,a)});return l}function z(e,g,h,k){var l=wb(h);
if("function"!==typeof l)throw m(Error(150));h=l.call(h);if(null==h)throw m(Error(151));for(var n=l=null,r=g,y=g=0,Qc=null,p=h.next();null!==r&&!p.done;y++,p=h.next()){r.index>y?(Qc=r,r=null):Qc=r.sibling;var t=x(e,r,p.value,k);if(null===t){null===r&&(r=Qc);break}a&&r&&null===t.alternate&&b(e,r);g=f(t,g,y);null===n?l=t:n.sibling=t;n=t;r=Qc}if(p.done)return c(e,r),l;if(null===r){for(;!p.done;y++,p=h.next())p=q(e,p.value,k),null!==p&&(g=f(p,g,y),null===n?l=p:n.sibling=p,n=p);return l}for(r=d(e,r);!p.done;y++,
p=h.next())p=u(r,e,y,p.value,k),null!==p&&(a&&null!==p.alternate&&r.delete(null===p.key?y:p.key),g=f(p,g,y),null===n?l=p:n.sibling=p,n=p);a&&r.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ya&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Sc:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){if(7===k.tag?f.type===ya:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ya?f.props.children:
f.props,h);d.ref=Hb(a,k,f);d.return=a;a=d;break a}c(a,k);break}else b(a,k);k=k.sibling}f.type===ya?(d=Ea(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rc(f.type,f.key,f.props,null,a.mode,h),h.ref=Hb(a,d,f),h.return=a,a=h)}return g(a);case eb:a:{for(k=f.key;null!==d;){if(d.key===k){if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}c(a,d);break}else b(a,d);d=d.sibling}d=fe(f,a.mode,
h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=ee(f,a.mode,h),d.return=a,a=d),g(a);if(Tc(f))return v(a,d,f,h);if(wb(f))return z(a,d,f,h);l&&Pc(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,m(Error(152),a.displayName||a.name||"Component");}return c(a,d)}}function Oa(a){if(a===Ib)throw m(Error(174));return a}function ge(a,b){D(Jb,b,a);D(Kb,a,a);D(ba,Ib,a);
var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Od(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Od(b,c)}w(ba,a);D(ba,b,a)}function lb(a){w(ba,a);w(Kb,a);w(Jb,a)}function Fg(a){Oa(Jb.current);var b=Oa(ba.current);var c=Od(b,a.type);b!==c&&(D(Kb,a,a),D(ba,c,a))}function he(a){Kb.current===a&&(w(ba,a),w(Kb,a))}function Uc(a){for(var b=a;null!==b;){if(13===b.tag){if(null!==b.memoizedState)return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==
(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function S(){throw m(Error(321));}function ie(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!Ka(a[c],b[c]))return!1;return!0}function je(a,b,c,d,e,f){Lb=f;Fa=b;ca=null!==a?a.memoizedState:null;Vc.current=null===ca?Ei:Gg;b=c(d,e);if(Mb){do Mb=!1,Nb+=
1,ca=null!==a?a.memoizedState:null,mb=nb,da=R=F=null,Vc.current=Gg,b=c(d,e);while(Mb);qa=null;Nb=0}Vc.current=Wc;a=Fa;a.memoizedState=nb;a.expirationTime=Ob;a.updateQueue=da;a.effectTag|=Pb;a=null!==F&&null!==F.next;Lb=0;mb=R=nb=ca=F=Fa=null;Ob=0;da=null;Pb=0;if(a)throw m(Error(300));return b}function Hg(){Vc.current=Wc;Lb=0;mb=R=nb=ca=F=Fa=null;Ob=0;da=null;Pb=0;Mb=!1;qa=null;Nb=0}function ob(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===R?nb=R=a:R=R.next=
a;return R}function Qb(){if(null!==mb)R=mb,mb=R.next,F=ca,ca=null!==F?F.next:null;else{if(null===ca)throw m(Error(310));F=ca;var a={memoizedState:F.memoizedState,baseState:F.baseState,queue:F.queue,baseUpdate:F.baseUpdate,next:null};R=null===R?nb=a:R.next=a;ca=F.next}return R}function Ig(a,b){return"function"===typeof b?b(a):b}function Jg(a,b,c){b=Qb();c=b.queue;if(null===c)throw m(Error(311));c.lastRenderedReducer=a;if(0<Nb){var d=c.dispatch;if(null!==qa){var e=qa.get(c);if(void 0!==e){qa.delete(c);
var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);Ka(f,b.memoizedState)||(pa=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==d){var h=e=null,k=d,l=!1;do{var n=k.expirationTime;n<Lb?(l||(l=!0,h=g,e=f),n>Ob&&(Ob=n)):(wg(n,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));g=k;k=
k.next}while(null!==k&&k!==d);l||(h=g,e=f);Ka(f,b.memoizedState)||(pa=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}function ke(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===da?(da={lastEffect:null},da.lastEffect=a.next=a):(b=da.lastEffect,null===b?da.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,da.lastEffect=a));return a}function le(a,b,c,d){var e=ob();Pb|=a;e.memoizedState=ke(b,c,void 0,void 0===d?null:d)}function me(a,
b,c,d){var e=Qb();d=void 0===d?null:d;var f=void 0;if(null!==F){var g=F.memoizedState;f=g.destroy;if(null!==d&&ie(d,g.deps)){ke(pb,c,f,d);return}}Pb|=a;e.memoizedState=ke(b,c,f,d)}function Kg(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Lg(a,b){}function Mg(a,b,c){if(!(25>Nb))throw m(Error(301));var d=a.alternate;if(a===Fa||null!==d&&d===Fa)if(Mb=!0,a={expirationTime:Lb,suspenseConfig:null,
action:c,eagerReducer:null,eagerState:null,next:null},null===qa&&(qa=new Map),c=qa.get(b),void 0===c)qa.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{var e=ea(),f=Rb.suspense;e=qb(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,
l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(Ka(l,k))return}catch(vg){}finally{}Sb(a,e)}}function Ng(a,b){var c=fa(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Og(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?
null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}function Pg(a){if(Pa){var b=rb;if(b){var c=b;if(!Og(a,b)){b=Fb(c.nextSibling);if(!b||!Og(a,b)){a.effectTag|=2;Pa=!1;ra=a;return}Ng(ra,c)}ra=a;rb=Fb(b.firstChild)}else a.effectTag|=2,Pa=!1,ra=a}}function Qg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;ra=a}function Xc(a){if(a!==ra)return!1;if(!Pa)return Qg(a),Pa=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Rd(b,a.memoizedProps))for(b=rb;b;)Ng(a,
b),b=Fb(b.nextSibling);Qg(a);rb=ra?Fb(a.stateNode.nextSibling):null;return!0}function ne(){rb=ra=null;Pa=!1}function T(a,b,c,d){b.child=null===a?oe(b,null,c,d):sb(b,a.child,c,d)}function Rg(a,b,c,d,e){c=c.render;var f=b.ref;kb(b,e);d=je(a,b,c,d,f,e);if(null!==a&&!pa)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),sa(a,b,e);b.effectTag|=1;T(a,b,d,e);return b.child}function Sg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!pe(g)&&void 0===
g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Tg(a,b,g,d,e,f);a=Rc(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:zb,c(e,d)&&a.ref===b.ref))return sa(a,b,f);b.effectTag|=1;a=Na(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}function Tg(a,b,c,d,e,f){return null!==a&&zb(a.memoizedProps,d)&&a.ref===b.ref&&(pa=!1,e<f)?sa(a,b,f):qe(a,b,c,d,f)}function Ug(a,b){var c=b.ref;if(null===a&&
null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function qe(a,b,c,d,e){var f=G(c)?La:I.current;f=ib(b,f);kb(b,e);c=je(a,b,c,d,f,e);if(null!==a&&!pa)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),sa(a,b,e);b.effectTag|=1;T(a,b,c,e);return b.child}function Vg(a,b,c,d,e){if(G(c)){var f=!0;Fc(b)}else f=!1;kb(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Ag(b,c,d,e),de(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,
h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=aa(l):(l=G(c)?La:I.current,l=ib(b,l));var m=c.getDerivedStateFromProps,n="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;n||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Bg(b,g,d,l);Da=!1;var q=b.memoizedState;k=g.state=q;var u=b.updateQueue;null!==u&&(Gb(b,u,d,g,e),k=b.memoizedState);h!==d||q!==k||M.current||Da?
("function"===typeof m&&(Nc(b,c,m,d),k=b.memoizedState),(h=Da||zg(b,c,h,d,q,k,l))?(n||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=
l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:X(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=aa(l):(l=G(c)?La:I.current,l=ib(b,l)),m=c.getDerivedStateFromProps,(n="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Bg(b,g,d,l),Da=!1,k=b.memoizedState,
q=g.state=k,u=b.updateQueue,null!==u&&(Gb(b,u,d,g,e),q=b.memoizedState),h!==d||k!==q||M.current||Da?("function"===typeof m&&(Nc(b,c,m,d),q=b.memoizedState),(m=Da||zg(b,c,h,d,k,q,l))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,q,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,q,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===
typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=q),g.props=d,g.state=q,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&
k===a.memoizedState||(b.effectTag|=256),d=!1);return re(a,b,c,d,f,e)}function re(a,b,c,d,e,f){Ug(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&gg(b,c,!1),sa(a,b,f);d=b.stateNode;Fi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=sb(b,a.child,null,f),b.child=sb(b,null,h,f)):T(a,b,h,f);b.memoizedState=d.state;e&&gg(b,c,!0);return b.child}function Wg(a){var b=a.stateNode;b.pendingContext?eg(a,b.pendingContext,b.pendingContext!==
b.context):b.context&&eg(a,b.context,!1);ge(a,b.containerInfo)}function Xg(a,b,c){var d=b.mode,e=b.pendingProps,f=z.current,g=null,h=!1,k;(k=0!==(b.effectTag&64))||(k=0!==(f&Tb)&&(null===a||null!==a.memoizedState));k?(g=Gi,h=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=se);f&=Ga;D(z,f,b);if(null===a)if(h){e=e.fallback;a=Ea(null,d,0,null);a.return=b;if(0===(b.mode&2))for(h=null!==b.memoizedState?b.child.child:b.child,a.child=h;null!==
h;)h.return=a,h=h.sibling;c=Ea(e,d,c,null);c.return=b;a.sibling=c;d=a}else d=c=oe(b,null,e.children,c);else{if(null!==a.memoizedState)if(f=a.child,d=f.sibling,h){e=e.fallback;c=Na(f,f.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(h=null!==b.memoizedState?b.child.child:b.child,h!==f.child))for(c.child=h;null!==h;)h.return=c,h=h.sibling;e=Na(d,e,d.expirationTime);e.return=b;c.sibling=e;d=c;c.childExpirationTime=0;c=e}else d=c=sb(b,f.child,e.children,c);else if(f=a.child,h){h=e.fallback;e=Ea(null,d,
0,null);e.return=b;e.child=f;null!==f&&(f.return=e);if(0===(b.mode&2))for(f=null!==b.memoizedState?b.child.child:b.child,e.child=f;null!==f;)f.return=e,f=f.sibling;c=Ea(h,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;d=e;e.childExpirationTime=0}else c=d=sb(b,f,e.children,c);b.stateNode=a.stateNode}b.memoizedState=g;b.child=d;return c}function te(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e}:(f.isBackwards=b,f.rendering=
null,f.last=d,f.tail=c,f.tailExpiration=0,f.tailMode=e)}function Yg(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;T(a,b,d.children,c);d=z.current;if(0!==(d&Tb))d=d&Ga|Tb,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag){if(null!==a.memoizedState){a.expirationTime<c&&(a.expirationTime=c);var g=a.alternate;null!==g&&g.expirationTime<c&&(g.expirationTime=c);qg(a.return,c)}}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;
for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=Ga}D(z,d,b);if(0===(b.mode&2))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)d=c.alternate,null!==d&&null===Uc(d)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);te(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){d=e.alternate;if(null!==d&&null===Uc(d)){b.child=e;break}d=e.sibling;
e.sibling=c;c=e;e=d}te(b,!0,c,null,f);break;case "together":te(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function sa(a,b,c){null!==a&&(b.dependencies=a.dependencies);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw m(Error(153));if(null!==b.child){a=b.child;c=Na(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Na(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Ub(a){a.effectTag|=4}function Yc(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}function Hi(a,b){switch(a.tag){case 1:return G(a.type)&&Ec(a),b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 3:lb(a);Td(a);b=a.effectTag;
if(0!==(b&64))throw m(Error(285));a.effectTag=b&-2049|64;return a;case 5:return he(a),null;case 13:return w(z,a),b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 19:return w(z,a),null;case 4:return lb(a),null;case 10:return be(a),null;default:return null}}function ue(a,b){return{value:a,source:b,stack:Bd(b)}}function ve(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Bd(c));null!==c&&xa(c.type);b=b.value;null!==a&&1===a.tag&&xa(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;
})}}function Ii(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Qa(a,c)}}function Zg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Qa(a,c)}else b.current=null}function Vb(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==pb){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==pb&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}function $g(a,b){"function"===typeof we&&we(a);
switch(a.tag){case 0:case 11:case 14:case 15:var c=a.updateQueue;if(null!==c&&(c=c.lastEffect,null!==c)){var d=c.next;Ma(97<b?97:b,function(){var b=d;do{var c=b.destroy;if(void 0!==c){var g=a;try{c()}catch(h){Qa(g,h)}}b=b.next}while(b!==d)})}break;case 1:Zg(a);b=a.stateNode;"function"===typeof b.componentWillUnmount&&Ii(a,b);break;case 5:Zg(a);break;case 4:ah(a,b)}}function bh(a,b){for(var c=a;;)if($g(c,b),null!==c.child&&4!==c.tag)c.child.return=c,c=c.child;else{if(c===a)break;for(;null===c.sibling;){if(null===
c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}function ch(a){return 5===a.tag||3===a.tag||4===a.tag}function dh(a){a:{for(var b=a.return;null!==b;){if(ch(b)){var c=b;break a}b=b.return}throw m(Error(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw m(Error(161));}c.effectTag&16&&(Wb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ch(c.return)){c=
null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f||20===e.tag){var g=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var h=g;g=c;8===f.nodeType?f.parentNode.insertBefore(h,g):f.insertBefore(h,g)}else b.insertBefore(g,c);else d?(h=b,8===h.nodeType?(f=h.parentNode,
f.insertBefore(g,h)):(f=h,f.appendChild(g)),h=h._reactRootContainer,null!==h&&void 0!==h||null!==f.onclick||(f.onclick=Dc)):b.appendChild(g)}else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}function ah(a,b){for(var c=a,d=!1,e=void 0,f=void 0;;){if(!d){d=c.return;a:for(;;){if(null===d)throw m(Error(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;
case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag)if(bh(c,b),f){var g=e,h=c.stateNode;8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)}else e.removeChild(c.stateNode);else if(20===c.tag)h=c.stateNode.instance,bh(c,b),f?(g=e,8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(h);else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if($g(c,b),
null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}function eh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:Vb(Xb,Ji,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[pc]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Ff(c,d);
Qd(a,e);b=Qd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?cg(c,h):"dangerouslySetInnerHTML"===g?fh(c,h):"children"===g?Wb(c,h):Cd(c,g,h,b)}switch(a){case "input":Ed(c,d);break;case "textarea":$f(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?gb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?gb(c,!!d.multiple,d.defaultValue,!0):gb(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw m(Error(162));
b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,xe=Y());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=bg("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===
a.tag&&null!==a.memoizedState){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}gh(b);break;case 19:gh(b);break;case 17:break;case 20:break;default:throw m(Error(163));}}function gh(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ki);b.forEach(function(b){var d=Li.bind(null,
a,b);c.has(b)||(c.add(b),b.then(d,d))})}}function hh(a,b,c){c=Ba(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Zc||(Zc=!0,ye=d);ve(a,b)};return c}function ih(a,b,c){c=Ba(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){ve(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ha?Ha=new Set([this]):Ha.add(this),ve(a,b));
var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}function ea(){return(q&(ha|ia))!==J?1073741821-(Y()/10|0):0!==$c?$c:$c=1073741821-(Y()/10|0)}function qb(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=Ud();if(0===(b&4))return 99===d?1073741823:1073741822;if((q&ha)!==J)return W;if(null!==c)a=1073741821-25*(((1073741821-a+(c.timeoutMs|0||5E3)/10)/25|0)+1);else switch(d){case 99:a=1073741823;break;case 98:a=1073741821-10*(((1073741821-a+15)/10|0)+1);break;
case 97:case 96:a=1073741821-25*(((1073741821-a+500)/25|0)+1);break;case 95:a=1;break;default:throw m(Error(326));}null!==Ra&&a===W&&--a;return a}function ad(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===
d.tag){e=d.stateNode;break}d=d.return}null!==e&&(b>e.firstPendingTime&&(e.firstPendingTime=b),a=e.lastPendingTime,0===a||b<a)&&(e.lastPendingTime=b);return e}function Sa(a,b,c){if(a.callbackExpirationTime<c){var d=a.callbackNode;null!==d&&d!==ng&&og(d);a.callbackExpirationTime=c;1073741823===c?a.callbackNode=Hc(ze.bind(null,a,O.bind(null,a,c))):(d=null,1!==c&&(d={timeout:10*(1073741821-c)-Y()}),a.callbackNode=Vd(b,ze.bind(null,a,O.bind(null,a,c)),d))}}function ze(a,b,c){var d=a.callbackNode,e=null;
try{return e=b(c),null!==e?ze.bind(null,a,e):null}finally{null===e&&d===a.callbackNode&&(a.callbackNode=null,a.callbackExpirationTime=0)}}function Ae(){(q&(1|ha|ia))===J&&(Mi(),Yb())}function Ni(a,b){var c=a.firstBatch;return null!==c&&c._defer&&c._expirationTime>=b?(Vd(97,function(){c._onComplete();return null}),!0):!1}function Mi(){if(null!==Ta){var a=Ta;Ta=null;a.forEach(function(a,c){Hc(O.bind(null,c,a))});V()}}function jh(a,b){var c=q;q|=1;try{return a(b)}finally{q=c,q===J&&V()}}function Be(a,
b,c,d){var e=q;q|=4;try{return Ma(98,a.bind(null,b,c,d))}finally{q=e,q===J&&V()}}function kh(a,b){var c=q;q&=-2;q|=Ce;try{return a(b)}finally{q=c,q===J&&V()}}function Ua(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Oi(c));if(null!==u)for(c=u.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Ec(d);break;case 3:lb(d);Td(d);break;case 5:he(d);break;case 4:lb(d);break;case 13:w(z,d);break;case 19:w(z,
d);break;case 10:be(d)}c=c.return}Ra=a;u=Na(a.current,null,b);W=b;P=Va;Zb=ta=1073741823;bd=null;$b=!1}function O(a,b,c){if((q&(ha|ia))!==J)throw m(Error(327));if(a.firstPendingTime<b)return null;if(c&&a.finishedExpirationTime===b)return Ia.bind(null,a);Yb();if(a!==Ra||b!==W)Ua(a,b);else if(P===cd)if($b)Ua(a,b);else{var d=a.lastPendingTime;if(d<b)return O.bind(null,a,d)}if(null!==u){d=q;q|=ha;var e=dd.current;null===e&&(e=Wc);dd.current=Wc;if(c){if(1073741823!==b){var f=ea();if(f<b)return q=d,$d(),
dd.current=e,O.bind(null,a,f)}}else $c=0;do try{if(c)for(;null!==u;)u=lh(u);else for(;null!==u&&!Pi();)u=lh(u);break}catch(Eg){$d();Hg();f=u;if(null===f||null===f.return)throw Ua(a,b),q=d,Eg;a:{var g=a,h=f.return,k=f,l=Eg,n=W;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==l&&"object"===typeof l&&"function"===typeof l.then){var v=l,x=0!==(z.current&se);l=h;do{var w;if(w=13===l.tag)null!==l.memoizedState?w=!1:(w=l.memoizedProps,w=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?
!0:x?!1:!0);if(w){h=l.updateQueue;null===h?(h=new Set,h.add(v),l.updateQueue=h):h.add(v);if(0===(l.mode&2)){l.effectTag|=64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(n=Ba(1073741823,null),n.tag=Mc,Ca(k,n)));k.expirationTime=1073741823;break a}k=g;g=n;x=k.pingCache;null===x?(x=k.pingCache=new Qi,h=new Set,x.set(v,h)):(h=x.get(v),void 0===h&&(h=new Set,x.set(v,h)));h.has(g)||(h.add(g),k=Ri.bind(null,k,v,g),v.then(k,k));l.effectTag|=2048;l.expirationTime=n;break a}l=l.return}while(null!==
l);l=Error((xa(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+Bd(k))}P!==De&&(P=mh);l=ue(l,k);k=h;do{switch(k.tag){case 3:k.effectTag|=2048;k.expirationTime=n;n=hh(k,l,n);sg(k,n);break a;case 1:if(v=l,g=k.type,h=k.stateNode,0===(k.effectTag&64)&&("function"===typeof g.getDerivedStateFromError||null!==h&&"function"===typeof h.componentDidCatch&&
(null===Ha||!Ha.has(h)))){k.effectTag|=2048;k.expirationTime=n;n=ih(k,v,n);sg(k,n);break a}}k=k.return}while(null!==k)}u=nh(f)}while(1);q=d;$d();dd.current=e;if(null!==u)return O.bind(null,a,b)}a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;if(Ni(a,b))return null;Ra=null;switch(P){case Va:throw m(Error(328));case mh:return d=a.lastPendingTime,d<b?O.bind(null,a,d):c?Ia.bind(null,a):(Ua(a,b),Hc(O.bind(null,a,b)),null);case ed:if(1073741823===ta&&!c&&(c=xe+oh-Y(),10<c)){if($b)return Ua(a,
b),O.bind(null,a,b);d=a.lastPendingTime;if(d<b)return O.bind(null,a,d);a.timeoutHandle=Ee(Ia.bind(null,a),c);return null}return Ia.bind(null,a);case cd:if(!c){if($b)return Ua(a,b),O.bind(null,a,b);c=a.lastPendingTime;if(c<b)return O.bind(null,a,c);1073741823!==Zb?c=10*(1073741821-Zb)-Y():1073741823===ta?c=0:(c=10*(1073741821-ta)-5E3,d=Y(),b=10*(1073741821-b)-d,c=d-c,0>c&&(c=0),c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>c?4320:1960*Si(c/1960))-c,b<c&&(c=b));if(10<c)return a.timeoutHandle=
Ee(Ia.bind(null,a),c),null}return Ia.bind(null,a);case De:return!c&&1073741823!==ta&&null!==bd&&(d=ta,e=bd,b=e.busyMinDurationMs|0,0>=b?b=0:(c=e.busyDelayMs|0,d=Y()-(10*(1073741821-d)-(e.timeoutMs|0||5E3)),b=d<=c?0:c+b-d),10<b)?(a.timeoutHandle=Ee(Ia.bind(null,a),b),null):Ia.bind(null,a);default:throw m(Error(329));}}function wg(a,b){a<ta&&1<a&&(ta=a);null!==b&&a<Zb&&1<a&&(Zb=a,bd=b)}function lh(a){var b=ph(a.alternate,a,W);a.memoizedProps=a.pendingProps;null===b&&(b=nh(a));qh.current=null;return b}
function nh(a){u=a;do{var b=u.alternate;a=u.return;if(0===(u.effectTag&1024)){a:{var c=b;b=u;var d=W;var e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:G(b.type)&&Ec(b);break;case 3:lb(b);Td(b);e=b.stateNode;e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null);if(null===c||null===c.child)Xc(b),b.effectTag&=-3;Fe(b);break;case 5:he(b);var f=Oa(Jb.current);d=b.type;if(null!==c&&null!=b.stateNode)rh(c,b,d,e,f),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var g=
Oa(ba.current);if(Xc(b)){d=void 0;e=b.stateNode;c=b.type;g=b.memoizedProps;e[la]=b;e[pc]=g;switch(c){case "iframe":case "object":case "embed":v("load",e);break;case "video":case "audio":for(var h=0;h<Eb.length;h++)v(Eb[h],e);break;case "source":v("error",e);break;case "img":case "image":case "link":v("error",e);v("load",e);break;case "form":v("reset",e);v("submit",e);break;case "details":v("toggle",e);break;case "input":Ef(e,g);v("invalid",e);na(f,"onChange");break;case "select":e._wrapperState={wasMultiple:!!g.multiple};
v("invalid",e);na(f,"onChange");break;case "textarea":Zf(e,g),v("invalid",e),na(f,"onChange")}Pd(c,g);h=null;for(d in g)if(g.hasOwnProperty(d)){var k=g[d];"children"===d?"string"===typeof k?e.textContent!==k&&(h=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(h=["children",""+k]):Ya.hasOwnProperty(d)&&null!=k&&na(f,d)}switch(c){case "input":vc(e);Gf(e,g,!0);break;case "textarea":vc(e);d=e.textContent;d===e._wrapperState.initialValue&&(e.value=d);break;case "select":case "option":break;
default:"function"===typeof g.onClick&&(e.onclick=Dc)}e=h;b.updateQueue=e;(e=null!==e?!0:!1)&&Ub(b)}else{c=9===f.nodeType?f:f.ownerDocument;"http://www.w3.org/1999/xhtml"===g&&(g=ag(d));"http://www.w3.org/1999/xhtml"===g?"script"===d?(c=c.createElement("div"),c.innerHTML="<script>\x3c/script>",c=c.removeChild(c.firstChild)):"string"===typeof e.is?c=c.createElement(d,{is:e.is}):(c=c.createElement(d),"select"===d&&(g=c,e.multiple?g.multiple=!0:e.size&&(g.size=e.size))):c=c.createElementNS(g,d);c[la]=
b;c[pc]=e;sh(c,b,!1,!1);var l=Qd(d,e);switch(d){case "iframe":case "object":case "embed":v("load",c);g=e;break;case "video":case "audio":for(g=0;g<Eb.length;g++)v(Eb[g],c);g=e;break;case "source":v("error",c);g=e;break;case "img":case "image":case "link":v("error",c);v("load",c);g=e;break;case "form":v("reset",c);v("submit",c);g=e;break;case "details":v("toggle",c);g=e;break;case "input":Ef(c,e);g=Dd(c,e);v("invalid",c);na(f,"onChange");break;case "option":g=Md(c,e);break;case "select":c._wrapperState=
{wasMultiple:!!e.multiple};g=K({},e,{value:void 0});v("invalid",c);na(f,"onChange");break;case "textarea":Zf(c,e);g=Nd(c,e);v("invalid",c);na(f,"onChange");break;default:g=e}Pd(d,g);h=void 0;k=d;var n=c,q=g;for(h in q)if(q.hasOwnProperty(h)){var x=q[h];"style"===h?cg(n,x):"dangerouslySetInnerHTML"===h?(x=x?x.__html:void 0,null!=x&&fh(n,x)):"children"===h?"string"===typeof x?("textarea"!==k||""!==x)&&Wb(n,x):"number"===typeof x&&Wb(n,""+x):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==
h&&"autoFocus"!==h&&(Ya.hasOwnProperty(h)?null!=x&&na(f,h):null!=x&&Cd(n,h,x,l))}switch(d){case "input":vc(c);Gf(c,e,!1);break;case "textarea":vc(c);f=c.textContent;f===c._wrapperState.initialValue&&(c.value=f);break;case "option":null!=e.value&&c.setAttribute("value",""+za(e.value));break;case "select":f=c;g=e;f.multiple=!!g.multiple;h=g.value;null!=h?gb(f,!!g.multiple,h,!1):null!=g.defaultValue&&gb(f,!!g.multiple,g.defaultValue,!0);break;default:"function"===typeof g.onClick&&(c.onclick=Dc)}(e=
dg(d,e))&&Ub(b);b.stateNode=c}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw m(Error(166));break;case 6:if(c&&null!=b.stateNode)th(c,b,c.memoizedProps,e);else{if("string"!==typeof e&&null===b.stateNode)throw m(Error(166));d=Oa(Jb.current);Oa(ba.current);Xc(b)?(e=b.stateNode,d=b.memoizedProps,e[la]=b,e.nodeValue!==d&&Ub(b)):(e=(9===d.nodeType?d:d.ownerDocument).createTextNode(e),e[la]=b,b.stateNode=e)}break;case 11:break;case 13:w(z,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=
d;break a}e=null!==e;d=!1;null===c?Xc(b):(f=c.memoizedState,d=null!==f,e||null===f||(f=c.child.sibling,null!==f&&(g=b.firstEffect,null!==g?(b.firstEffect=f,f.nextEffect=g):(b.firstEffect=b.lastEffect=f,f.nextEffect=null),f.effectTag=8)));if(e&&!d&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(z.current&se))P===Va&&(P=ed);else if(P===Va||P===ed)P=cd;if(e||d)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:lb(b);Fe(b);break;case 10:be(b);break;
case 9:break;case 14:break;case 17:G(b.type)&&Ec(b);break;case 18:break;case 19:w(z,b);e=b.memoizedState;if(null===e)break;f=0!==(b.effectTag&64);g=e.rendering;if(null===g)if(f)Yc(e,!1);else{if(P!==Va||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){g=Uc(c);if(null!==g){b.effectTag|=64;Yc(e,!1);e=g.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);b.firstEffect=b.lastEffect=null;e=d;for(d=b.child;null!==d;)f=d,c=e,f.effectTag&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,
g=f.alternate,null===g?(f.childExpirationTime=0,f.expirationTime=c,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null):(f.childExpirationTime=g.childExpirationTime,f.expirationTime=g.expirationTime,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,c=g.dependencies,f.dependencies=null===c?null:{expirationTime:c.expirationTime,firstContext:c.firstContext,responders:c.responders}),d=d.sibling;D(z,z.current&
Ga|Tb,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=Uc(g),null!==c){if(b.effectTag|=64,f=!0,Yc(e,!0),null===e.tail&&"hidden"===e.tailMode){d=c.updateQueue;null!==d&&(b.updateQueue=d,b.effectTag|=4);b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else Y()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,Yc(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(g.sibling=b.child,b.child=g):(d=e.last,null!==d?d.sibling=g:b.child=g,e.last=g)}if(null!==e.tail){0===e.tailExpiration&&
(e.tailExpiration=Y()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;e.lastEffect=b.lastEffect;d.sibling=null;e=z.current;e=f?e&Ga|Tb:e&Ga;D(z,e,b);b=d;break a}break;case 20:break;default:throw m(Error(156));}b=null}e=u;if(1===W||1!==e.childExpirationTime){d=0;for(f=e.child;null!==f;)c=f.expirationTime,g=f.childExpirationTime,c>d&&(d=c),g>d&&(d=g),f=f.sibling;e.childExpirationTime=d}if(null!==b)return b;null!==a&&0===(a.effectTag&1024)&&(null===a.firstEffect&&(a.firstEffect=u.firstEffect),null!==u.lastEffect&&
(null!==a.lastEffect&&(a.lastEffect.nextEffect=u.firstEffect),a.lastEffect=u.lastEffect),1<u.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=u:a.firstEffect=u,a.lastEffect=u))}else{b=Hi(u,W);if(null!==b)return b.effectTag&=1023,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=1024)}b=u.sibling;if(null!==b)return b;u=a}while(null!==u);P===Va&&(P=De);return null}function Ia(a){var b=Ud();Ma(99,Ti.bind(null,a,b));null!==ac&&Vd(97,function(){Yb();return null});return null}function Ti(a,
b){Yb();if((q&(ha|ia))!==J)throw m(Error(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw m(Error(177));a.callbackNode=null;a.callbackExpirationTime=0;var e=c.expirationTime,f=c.childExpirationTime;e=f>e?f:e;a.firstPendingTime=e;e<a.lastPendingTime&&(a.lastPendingTime=e);a===Ra&&(u=Ra=null,W=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==
e){f=q;q|=ia;qh.current=null;Ge=Bc;var g=Wf();if(Jd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,v=k.focusNode;k=k.focusOffset;try{h.nodeType,v.nodeType}catch(tb){h=null;break a}var w=0,x=-1,z=-1,D=0,H=0,r=g,y=null;b:for(;;){for(var F;;){r!==h||0!==l&&3!==r.nodeType||(x=w+l);r!==v||0!==k&&3!==r.nodeType||(z=w+k);3===
r.nodeType&&(w+=r.nodeValue.length);if(null===(F=r.firstChild))break;y=r;r=F}for(;;){if(r===g)break b;y===h&&++D===l&&(x=w);y===v&&++H===k&&(z=w);if(null!==(F=r.nextSibling))break;r=y;y=r.parentNode}r=F}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=null;He={focusedElem:g,selectionRange:h};Bc=!1;n=e;do try{for(;null!==n;){if(0!==(n.effectTag&256)){var L=n.alternate;g=n;switch(g.tag){case 0:case 11:case 15:Vb(Ui,pb,g);break;case 1:if(g.effectTag&256&&null!==L){var E=
L.memoizedProps,B=L.memoizedState,K=g.stateNode,P=K.getSnapshotBeforeUpdate(g.elementType===g.type?E:X(g.type,E),B);K.__reactInternalSnapshotBeforeUpdate=P}break;case 3:case 5:case 6:case 4:case 17:break;default:throw m(Error(163));}}n=n.nextEffect}}catch(tb){if(null===n)throw m(Error(330));Qa(n,tb);n=n.nextEffect}while(null!==n);n=e;do try{for(L=b;null!==n;){var A=n.effectTag;A&16&&Wb(n.stateNode,"");if(A&128){var p=n.alternate;if(null!==p){var t=p.ref;null!==t&&("function"===typeof t?t(null):t.current=
null)}}switch(A&14){case 2:dh(n);n.effectTag&=-3;break;case 6:dh(n);n.effectTag&=-3;eh(n.alternate,n);break;case 4:eh(n.alternate,n);break;case 8:E=n;ah(E,L);E.return=null;E.child=null;E.memoizedState=null;E.updateQueue=null;E.dependencies=null;var N=E.alternate;null!==N&&(N.return=null,N.child=null,N.memoizedState=null,N.updateQueue=null,N.dependencies=null)}n=n.nextEffect}}catch(tb){if(null===n)throw m(Error(330));Qa(n,tb);n=n.nextEffect}while(null!==n);t=He;p=Wf();A=t.focusedElem;L=t.selectionRange;
if(p!==A&&A&&A.ownerDocument&&Vf(A.ownerDocument.documentElement,A)){null!==L&&Jd(A)&&(p=L.start,t=L.end,void 0===t&&(t=p),"selectionStart"in A?(A.selectionStart=p,A.selectionEnd=Math.min(t,A.value.length)):(t=(p=A.ownerDocument||document)&&p.defaultView||window,t.getSelection&&(t=t.getSelection(),E=A.textContent.length,N=Math.min(L.start,E),L=void 0===L.end?N:Math.min(L.end,E),!t.extend&&N>L&&(E=L,L=N,N=E),E=Uf(A,N),B=Uf(A,L),E&&B&&(1!==t.rangeCount||t.anchorNode!==E.node||t.anchorOffset!==E.offset||
t.focusNode!==B.node||t.focusOffset!==B.offset)&&(p=p.createRange(),p.setStart(E.node,E.offset),t.removeAllRanges(),N>L?(t.addRange(p),t.extend(B.node,B.offset)):(p.setEnd(B.node,B.offset),t.addRange(p))))));p=[];for(t=A;t=t.parentNode;)1===t.nodeType&&p.push({element:t,left:t.scrollLeft,top:t.scrollTop});"function"===typeof A.focus&&A.focus();for(A=0;A<p.length;A++)t=p[A],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}He=null;Bc=!!Ge;Ge=null;a.current=c;n=e;do try{for(A=d;null!==n;){var C=
n.effectTag;if(C&36){var G=n.alternate;p=n;t=A;switch(p.tag){case 0:case 11:case 15:Vb(Vi,bc,p);break;case 1:var I=p.stateNode;if(p.effectTag&4)if(null===G)I.componentDidMount();else{var R=p.elementType===p.type?G.memoizedProps:X(p.type,G.memoizedProps);I.componentDidUpdate(R,G.memoizedState,I.__reactInternalSnapshotBeforeUpdate)}var O=p.updateQueue;null!==O&&xg(p,O,I,t);break;case 3:var Q=p.updateQueue;if(null!==Q){N=null;if(null!==p.child)switch(p.child.tag){case 5:N=p.child.stateNode;break;case 1:N=
p.child.stateNode}xg(p,Q,N,t)}break;case 5:var T=p.stateNode;null===G&&p.effectTag&4&&(t=T,dg(p.type,p.memoizedProps)&&t.focus());break;case 6:break;case 4:break;case 12:break;case 13:case 19:case 17:case 20:break;default:throw m(Error(163));}}if(C&128){var M=n.ref;if(null!==M){var U=n.stateNode;switch(n.tag){case 5:var S=U;break;default:S=U}"function"===typeof M?M(S):M.current=S}}C&512&&(Ie=!0);n=n.nextEffect}}catch(tb){if(null===n)throw m(Error(330));Qa(n,tb);n=n.nextEffect}while(null!==n);n=null;
Wi();q=f}else a.current=c;if(Ie)Ie=!1,ac=a,Je=d,Ke=b;else for(n=e;null!==n;)b=n.nextEffect,n.nextEffect=null,n=b;b=a.firstPendingTime;0!==b?(C=ea(),C=Zd(C,b),Sa(a,C,b)):Ha=null;"function"===typeof Le&&Le(c.stateNode,d);1073741823===b?a===Me?cc++:(cc=0,Me=a):cc=0;if(Zc)throw Zc=!1,a=ye,ye=null,a;if((q&Ce)!==J)return null;V();return null}function Yb(){if(null===ac)return!1;var a=ac,b=Je,c=Ke;ac=null;Je=0;Ke=90;return Ma(97<c?97:c,Xi.bind(null,a,b))}function Xi(a,b){if((q&(ha|ia))!==J)throw m(Error(331));
b=q;q|=ia;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:Vb(Ne,pb,c),Vb(pb,Oe,c)}}catch(d){if(null===a)throw m(Error(330));Qa(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}q=b;V();return!0}function uh(a,b,c){b=ue(c,b);b=hh(a,b,1073741823);Ca(a,b);a=ad(a,1073741823);null!==a&&Sa(a,99,1073741823)}function Qa(a,b){if(3===a.tag)uh(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){uh(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===
typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ha||!Ha.has(d))){a=ue(b,a);a=ih(c,a,1073741823);Ca(c,a);c=ad(c,1073741823);null!==c&&Sa(c,99,1073741823);break}}c=c.return}}function Ri(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);Ra===a&&W===c?P===cd||P===ed&&1073741823===ta&&Y()-xe<oh?Ua(a,W):$b=!0:a.lastPendingTime<c||(b=a.pingTime,0!==b&&b<c||(a.pingTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),b=ea(),b=Zd(b,c),Sa(a,
b,c)))}function Li(a,b){var c=a.stateNode;null!==c&&c.delete(b);c=ea();b=qb(c,a,null);c=Zd(c,b);a=ad(a,b);null!==a&&Sa(a,c,b)}function Yi(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Le=function(a,e){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(f){}};we=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}function Zi(a,b,c,d){this.tag=
a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function pe(a){a=a.prototype;return!(!a||!a.isReactComponent)}function $i(a){if("function"===typeof a)return pe(a)?1:0;if(void 0!==
a&&null!==a){a=a.$$typeof;if(a===zd)return 11;if(a===Ad)return 14}return 2}function Na(a,b,c){c=a.alternate;null===c?(c=fa(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;
b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function Rc(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)pe(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ea(c.children,e,f,b);case aj:g=8;e|=7;break;case xf:g=8;e|=1;break;case wc:return a=fa(12,c,b,e|8),a.elementType=wc,a.type=wc,a.expirationTime=f,a;case xc:return a=fa(13,c,b,
e),a.type=xc,a.elementType=xc,a.expirationTime=f,a;case yd:return a=fa(19,c,b,e),a.elementType=yd,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case zf:g=10;break a;case yf:g=9;break a;case zd:g=11;break a;case Ad:g=14;break a;case Af:g=16;d=null;break a}throw m(Error(130),null==a?a:typeof a,"");}b=fa(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ea(a,b,c,d){a=fa(7,a,d,b);a.expirationTime=c;return a}function ee(a,b,c){a=fa(6,a,null,b);a.expirationTime=
c;return a}function fe(a,b,c){b=fa(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function bj(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=this.firstBatch=null;this.pingTime=this.lastPendingTime=
this.firstPendingTime=this.callbackExpirationTime=0}function vh(a,b,c){a=new bj(a,b,c);b=fa(3,null,null,2===b?7:1===b?3:0);a.current=b;return b.stateNode=a}function wh(a,b,c,d,e,f){var g=b.current;a:if(c){c=c._reactInternalFiber;b:{if(2!==Ab(c)||1!==c.tag)throw m(Error(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(G(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw m(Error(171));}if(1===c.tag){var k=c.type;if(G(k)){c=
fg(c,k,h);break a}}c=h}else c=Aa;null===b.context?b.context=c:b.pendingContext=c;b=f;e=Ba(d,e);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);Ca(g,e);Sb(g,d);return d}function fd(a,b,c,d){var e=b.current,f=ea(),g=Rb.suspense;e=qb(f,e,g);return wh(a,b,c,e,g,d)}function Pe(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function cj(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;
return{$$typeof:eb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}function dc(a){var b=1073741821-25*(((1073741821-ea()+500)/25|0)+1);b<=xh&&--b;this._expirationTime=xh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}function ec(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}function gd(a,b,c){this._internalRoot=vh(a,b,c)}function hd(a,b){this._internalRoot=vh(a,2,b)}function Wa(a){return!(!a||
1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function dj(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new gd(a,0,b)}function id(a,b,c,d,e){var f=c._reactRootContainer,g=void 0;if(f){g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=Pe(g);h.call(a)}}fd(b,g,a,e)}else{f=c._reactRootContainer=
dj(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=Pe(g);k.call(a)}}kh(function(){fd(b,g,a,e)})}return Pe(g)}function yh(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Wa(b))throw m(Error(200));return cj(a,b,null,c)}if(!ka)throw m(Error(227));var jc=null,Xa={},kc=[],kd={},Ya={},ld={},Vh=function(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(vg){this.onError(vg)}},ub=!1,lc=null,mc=!1,md=null,Wh={onError:function(a){ub=
!0;lc=a}},od=null,pf=null,bf=null,vb=null,Yh=function(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)af(a,b[d],c[d]);else b&&af(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}},Qe={injectEventPluginOrder:function(a){if(jc)throw m(Error(101));jc=Array.prototype.slice.call(a);Ze()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=
a[c];if(!Xa.hasOwnProperty(c)||Xa[c]!==d){if(Xa[c])throw m(Error(102),c);Xa[c]=d;b=!0}}b&&Ze()}},zh=Math.random().toString(36).slice(2),la="__reactInternalInstance$"+zh,pc="__reactEventHandlers$"+zh,wa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ab={animationend:qc("Animation","AnimationEnd"),animationiteration:qc("Animation","AnimationIteration"),animationstart:qc("Animation","AnimationStart"),transitionend:qc("Transition",
"TransitionEnd")},rd={},ff={};wa&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete ab.animationend.animation,delete ab.animationiteration.animation,delete ab.animationstart.animation),"TransitionEvent"in window||delete ab.transitionend.transition);var Ah=rc("animationend"),Bh=rc("animationiteration"),Ch=rc("animationstart"),Dh=rc("transitionend"),Eb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
va=null,sd=null,sc=null,K=ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.assign;K(Q.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){this.isPersistent=
tc},isPersistent:uc,destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=uc;this._dispatchInstances=this._dispatchListeners=null}});Q.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};Q.extend=function(a){function b(){return c.apply(this,
arguments)}var c=this,d=function(){};d.prototype=c.prototype;d=new d;K(d,b.prototype);b.prototype=d;b.prototype.constructor=b;b.Interface=K({},c.Interface,a);b.extend=c.extend;hf(b);return b};hf(Q);var ej=Q.extend({data:null}),fj=Q.extend({data:null}),ci=[9,13,27,32],td=wa&&"CompositionEvent"in window,fc=null;wa&&"documentMode"in document&&(fc=document.documentMode);var gj=wa&&"TextEvent"in window&&!fc,nf=wa&&(!td||fc&&8<fc&&11>=fc),mf=String.fromCharCode(32),ua={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",
captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",
captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},lf=!1,bb=!1,hj={eventTypes:ua,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(td)b:{switch(a){case "compositionstart":e=ua.compositionStart;break b;case "compositionend":e=ua.compositionEnd;break b;case "compositionupdate":e=ua.compositionUpdate;break b}e=void 0}else bb?jf(a,c)&&(e=ua.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=ua.compositionStart);e?(nf&&
"ko"!==c.locale&&(bb||e!==ua.compositionStart?e===ua.compositionEnd&&bb&&(f=gf()):(va=d,sd="value"in va?va.value:va.textContent,bb=!0)),e=ej.getPooled(e,b,c,d),f?e.data=f:(f=kf(c),null!==f&&(e.data=f)),$a(e),f=e):f=null;(a=gj?di(a,c):ei(a,c))?(b=fj.getPooled(ua.beforeInput,b,c,d),b.data=a,$a(b)):b=null;return null===f?b:null===b?f:[f,b]}},ud=null,cb=null,db=null,Gd=function(a,b){return a(b)},Pf=function(a,b,c,d){return a(b,c,d)},wd=function(){},Qf=Gd,Z=!1,fi={color:!0,date:!0,datetime:!0,"datetime-local":!0,
email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},ja=ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;ja.hasOwnProperty("ReactCurrentDispatcher")||(ja.ReactCurrentDispatcher={current:null});ja.hasOwnProperty("ReactCurrentBatchConfig")||(ja.ReactCurrentBatchConfig={suspense:null});var hi=/^(.*)[\\\/]/,C="function"===typeof Symbol&&Symbol.for,Sc=C?Symbol.for("react.element"):60103,eb=C?Symbol.for("react.portal"):60106,ya=C?Symbol.for("react.fragment"):
60107,xf=C?Symbol.for("react.strict_mode"):60108,wc=C?Symbol.for("react.profiler"):60114,zf=C?Symbol.for("react.provider"):60109,yf=C?Symbol.for("react.context"):60110,aj=C?Symbol.for("react.concurrent_mode"):60111,zd=C?Symbol.for("react.forward_ref"):60112,xc=C?Symbol.for("react.suspense"):60113,yd=C?Symbol.for("react.suspense_list"):60120,Ad=C?Symbol.for("react.memo"):60115,Af=C?Symbol.for("react.lazy"):60116;C&&Symbol.for("react.fundamental");C&&Symbol.for("react.responder");var wf="function"===
typeof Symbol&&Symbol.iterator,ji=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bf=Object.prototype.hasOwnProperty,Df={},Cf={},H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){H[a]=
new B(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];H[b]=new B(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){H[a]=new B(a,2,!1,a.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){H[a]=new B(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){H[a]=
new B(a,3,!1,a.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(a){H[a]=new B(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){H[a]=new B(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){H[a]=new B(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){H[a]=new B(a,5,!1,a.toLowerCase(),null,!1)});var Re=/[\-:]([a-z])/g,Se=function(a){return a[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=
a.replace(Re,Se);H[b]=new B(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Re,Se);H[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Re,Se);H[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){H[a]=new B(a,1,!1,a.toLowerCase(),null,!1)});H.xlinkHref=new B("xlinkHref",1,
!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){H[a]=new B(a,1,!1,a.toLowerCase(),null,!0)});var If={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}},xb=null,yb=null,Te=!1;wa&&(Te=tf("input")&&(!document.documentMode||9<document.documentMode));var ij={eventTypes:If,_isInputEventSupported:Te,extractEvents:function(a,b,c,d){var e=
b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=ni:sf(e)?Te?f=ri:(f=pi,g=oi):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=qi);if(f&&(f=f(a,b)))return Hf(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Fd(e,"number",e.value)}},gc=Q.extend({view:null,detail:null}),ti={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},Eh=0,Fh=0,Gh=!1,Hh=!1,
hc=gc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Hd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Eh;Eh=a.screenX;return Gh?"mousemove"===a.type?a.screenX-b:0:(Gh=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;var b=Fh;Fh=
a.screenY;return Hh?"mousemove"===a.type?a.screenY-b:0:(Hh=!0,0)}}),Ih=hc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),ic={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},jj={eventTypes:ic,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?oc(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=hc,h=ic.mouseLeave,k=ic.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=Ih,h=ic.pointerLeave,k=ic.pointerEnter,l="pointer";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=ma(g))l++;g=0;for(k=e;k;k=ma(k))g++;for(;0<l-g;)b=ma(b),l--;for(;0<g-l;)e=ma(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=ma(b);e=ma(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=ma(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=ma(d)}for(d=0;d<b.length;d++)qd(b[d],"bubbled",a);for(d=f.length;0<d--;)qd(f[d],"captured",c);return[a,c]}},ui=Object.prototype.hasOwnProperty,U=ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,kj=U.unstable_cancelCallback,Ue=U.unstable_now,lj=U.unstable_scheduleCallback,mj=U.unstable_shouldYield,Jh=U.unstable_requestPaint,nj=U.unstable_runWithPriority,oj=U.unstable_getCurrentPriorityLevel,
pj=U.unstable_ImmediatePriority,qj=U.unstable_UserBlockingPriority,rj=U.unstable_NormalPriority,sj=U.unstable_LowPriority,tj=U.unstable_IdlePriority;new Map;new Map;new Set;new Map;var uj=Q.extend({animationName:null,elapsedTime:null,pseudoElement:null}),vj=Q.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),wj=gc.extend({relatedTarget:null}),xj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",
Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},
zj=gc.extend({key:function(a){if(a.key){var b=xj[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=zc(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?yj[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Hd,charCode:function(a){return"keypress"===a.type?zc(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?zc(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Aj=hc.extend({dataTransfer:null}),Bj=gc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Hd}),Cj=Q.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Dj=hc.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?
-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Kh=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",
0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove",
"mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",2],[Ah,"animationEnd",2],[Bh,"animationIteration",2],[Ch,"animationStart",2],["canplay","canPlay",2],["canplaythrough","canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],
["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress","progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",2],[Dh,"transitionEnd",2],["waiting","waiting",2]],Lh={},Ve={},We=0;for(;We<Kh.length;We++){var Xe=Kh[We],Mh=
Xe[0],Ye=Xe[1],Ej=Xe[2],Nh="on"+(Ye[0].toUpperCase()+Ye.slice(1)),Oh={phasedRegistrationNames:{bubbled:Nh,captured:Nh+"Capture"},dependencies:[Mh],eventPriority:Ej};Lh[Ye]=Oh;Ve[Mh]=Oh}var Ph={eventTypes:Lh,getEventPriority:function(a){a=Ve[a];return void 0!==a?a.eventPriority:2},extractEvents:function(a,b,c,d){var e=Ve[a];if(!e)return null;switch(a){case "keypress":if(0===zc(c))return null;case "keydown":case "keyup":a=zj;break;case "blur":case "focus":a=wj;break;case "click":if(2===c.button)return null;
case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=hc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=Aj;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=Bj;break;case Ah:case Bh:case Ch:a=uj;break;case Dh:a=Cj;break;case "scroll":a=gc;break;case "wheel":a=Dj;break;case "copy":case "cut":case "paste":a=vj;
break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Ih;break;default:a=Q}b=a.getPooled(e,b,c,d);$a(b);return b}},wi=Ph.getEventPriority,Cc=[],Bc=!0,Sf=new ("function"===typeof WeakMap?WeakMap:Map),Fj=wa&&"documentMode"in document&&11>=document.documentMode,Yf={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},
fb=null,Ld=null,Cb=null,Kd=!1,Gj={eventTypes:Yf,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Rf(e);f=ld.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(sf(e)||"true"===e.contentEditable)fb=e,Ld=b,Cb=null;break;case "blur":Cb=Ld=fb=null;break;case "mousedown":Kd=!0;break;case "contextmenu":case "mouseup":case "dragend":return Kd=!1,Xf(c,d);case "selectionchange":if(Fj)break;
case "keydown":case "keyup":return Xf(c,d)}return null}};Qe.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));(function(a,b,c){od=a;pf=b;bf=c})(pd,df,Ja);Qe.injectEventPluginsByName({SimpleEventPlugin:Ph,EnterLeaveEventPlugin:jj,ChangeEventPlugin:ij,SelectEventPlugin:Gj,BeforeInputEventPlugin:hj});var jd=void 0,fh=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,
c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{jd=jd||document.createElement("div");jd.innerHTML="<svg>"+b+"</svg>";for(b=jd.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}),Wb=function(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b},Db={animationIterationCount:!0,
borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,
strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hj=["Webkit","ms","Moz","O"];Object.keys(Db).forEach(function(a){Hj.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Db[b]=Db[a]})});var Ai=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),Ge=null,He=null,Ee="function"===typeof setTimeout?setTimeout:void 0,Oi="function"===typeof clearTimeout?clearTimeout:
void 0;new Set;var Sd=[],hb=-1,Aa={},I={current:Aa},M={current:!1},La=Aa,Ci=nj,Wd=lj,og=kj,Bi=oj,Gc=pj,hg=qj,ig=rj,jg=sj,kg=tj,ng={},Pi=mj,Wi=void 0!==Jh?Jh:function(){},oa=null,Xd=null,Yd=!1,Qh=Ue(),Y=1E4>Qh?Ue:function(){return Ue()-Qh},ae={current:null},Jc=null,jb=null,Ic=null,rg=0,Mc=2,Da=!1,Rb=ja.ReactCurrentBatchConfig,Cg=(new ka.Component).refs,Oc={isMounted:function(a){return(a=a._reactInternalFiber)?2===Ab(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=ea(),e=Rb.suspense;
d=qb(d,a,e);e=Ba(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Ca(a,e);Sb(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=ea(),e=Rb.suspense;d=qb(d,a,e);e=Ba(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Ca(a,e);Sb(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=ea(),d=Rb.suspense;c=qb(c,a,d);d=Ba(c,d);d.tag=Mc;void 0!==b&&null!==b&&(d.callback=b);Ca(a,d);Sb(a,c)}},Tc=Array.isArray,sb=Dg(!0),oe=Dg(!1),Ib={},ba={current:Ib},Kb={current:Ib},
Jb={current:Ib},Ga=1,se=1,Tb=2,z={current:0},pb=0,Ui=2,Xb=4,Ji=8,Vi=16,bc=32,Oe=64,Ne=128,Vc=ja.ReactCurrentDispatcher,Lb=0,Fa=null,F=null,ca=null,nb=null,R=null,mb=null,Ob=0,da=null,Pb=0,Mb=!1,qa=null,Nb=0,Wc={readContext:aa,useCallback:S,useContext:S,useEffect:S,useImperativeHandle:S,useLayoutEffect:S,useMemo:S,useReducer:S,useRef:S,useState:S,useDebugValue:S,useResponder:S},Ei={readContext:aa,useCallback:function(a,b){ob().memoizedState=[a,void 0===b?null:b];return a},useContext:aa,useEffect:function(a,
b){return le(516,Ne|Oe,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return le(4,Xb|bc,Kg.bind(null,b,a),c)},useLayoutEffect:function(a,b){return le(4,Xb|bc,a,b)},useMemo:function(a,b){var c=ob();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ob();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Mg.bind(null,Fa,a);return[d.memoizedState,
a]},useRef:function(a){var b=ob();a={current:a};return b.memoizedState=a},useState:function(a){var b=ob();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,lastRenderedReducer:Ig,lastRenderedState:a};a=a.dispatch=Mg.bind(null,Fa,a);return[b.memoizedState,a]},useDebugValue:Lg,useResponder:Lf},Gg={readContext:aa,useCallback:function(a,b){var c=Qb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ie(b,d[1]))return d[0];c.memoizedState=[a,
b];return a},useContext:aa,useEffect:function(a,b){return me(516,Ne|Oe,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return me(4,Xb|bc,Kg.bind(null,b,a),c)},useLayoutEffect:function(a,b){return me(4,Xb|bc,a,b)},useMemo:function(a,b){var c=Qb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ie(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:Jg,useRef:function(a){return Qb().memoizedState},useState:function(a){return Jg(Ig,
a)},useDebugValue:Lg,useResponder:Lf},ra=null,rb=null,Pa=!1,Fi=ja.ReactCurrentOwner,pa=!1,Gi={},sh=void 0,Fe=void 0,rh=void 0,th=void 0;sh=function(a,b,c,d){for(c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(20===c.tag)a.appendChild(c.stateNode.instance);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Fe=function(a){};
rh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;Oa(ba.current);a=null;switch(c){case "input":f=Dd(g,f);d=Dd(g,d);a=[];break;case "option":f=Md(g,f);d=Md(g,d);a=[];break;case "select":f=K({},f,{value:void 0});d=K({},d,{value:void 0});a=[];break;case "textarea":f=Nd(g,f);d=Nd(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=Dc)}Pd(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(Ya.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
(h={}),h[g]=l[g])}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(Ya.hasOwnProperty(c)?(null!=l&&na(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&Ub(b)}};th=function(a,b,c,d){c!==d&&Ub(b)};var Ki=
"function"===typeof WeakSet?WeakSet:Set,Qi="function"===typeof WeakMap?WeakMap:Map,Si=Math.ceil,dd=ja.ReactCurrentDispatcher,qh=ja.ReactCurrentOwner,J=0,Ce=8,ha=16,ia=32,Va=0,mh=1,ed=2,cd=3,De=4,q=J,Ra=null,u=null,W=0,P=Va,ta=1073741823,Zb=1073741823,bd=null,$b=!1,xe=0,oh=500,n=null,Zc=!1,ye=null,Ha=null,Ie=!1,ac=null,Ke=90,Je=0,Ta=null,cc=0,Me=null,$c=0,xh=0,Sb=function(a,b){if(50<cc)throw cc=0,Me=null,m(Error(185));a=ad(a,b);if(null!==a){a.pingTime=0;var c=Ud();if(1073741823===b)if((q&Ce)!==J&&
(q&(ha|ia))===J)for(var d=O(a,1073741823,!0);null!==d;)d=d(!0);else Sa(a,99,1073741823),q===J&&V();else Sa(a,c,b);(q&4)===J||98!==c&&99!==c||(null===Ta?Ta=new Map([[a,b]]):(c=Ta.get(a),(void 0===c||c>b)&&Ta.set(a,b)))}},ph=void 0;ph=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||M.current)pa=!0;else if(d<c){pa=!1;switch(b.tag){case 3:Wg(b);ne();break;case 5:Fg(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;
case 1:G(b.type)&&Fc(b);break;case 4:ge(b,b.stateNode.containerInfo);break;case 10:pg(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Xg(a,b,c);D(z,z.current&Ga,b);b=sa(a,b,c);return null!==b?b.sibling:null}D(z,z.current&Ga,b);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Yg(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);D(z,z.current,b);if(!d)return null}return sa(a,
b,c)}}else pa=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=ib(b,I.current);kb(b,c);e=je(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;Hg();if(G(d)){var f=!0;Fc(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Nc(b,d,g,a);e.updater=Oc;b.stateNode=e;e._reactInternalFiber=
b;de(b,d,a,c);b=re(null,b,d,!0,f,c)}else b.tag=0,T(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Di(e);b.type=e;f=b.tag=$i(e);a=X(e,a);switch(f){case 0:b=qe(null,b,e,a,c);break;case 1:b=Vg(null,b,e,a,c);break;case 11:b=Rg(null,b,e,a,c);break;case 14:b=Sg(null,b,e,X(e.type,a),d,c);break;default:throw m(Error(306),e,"");}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:X(d,e),qe(a,b,d,e,c);
case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:X(d,e),Vg(a,b,d,e,c);case 3:Wg(b);d=b.updateQueue;if(null===d)throw m(Error(282));e=b.memoizedState;e=null!==e?e.element:null;Gb(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)ne(),b=sa(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)rb=Fb(b.stateNode.containerInfo.firstChild),ra=b,e=Pa=!0;e?(b.effectTag|=2,b.child=oe(b,null,d,c)):(T(a,b,d,c),ne());b=b.child}return b;case 5:return Fg(b),null===a&&Pg(b),
d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Rd(d,e)?g=null:null!==f&&Rd(d,f)&&(b.effectTag|=16),Ug(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(T(a,b,g,c),b=b.child),b;case 6:return null===a&&Pg(b),null;case 13:return Xg(a,b,c);case 4:return ge(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=sb(b,null,d,c):T(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:X(d,e),Rg(a,b,d,e,c);case 7:return T(a,
b,b.pendingProps,c),b.child;case 8:return T(a,b,b.pendingProps.children,c),b.child;case 12:return T(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;pg(b,f);if(null!==g){var h=g.value;f=Ka(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!M.current){b=sa(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=Ba(c,null),l.tag=Mc,Ca(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);qg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}}T(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,kb(b,c),e=aa(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,T(a,b,d,c),b.child;case 14:return e=b.type,f=X(e,b.pendingProps),f=X(e.type,f),Sg(a,b,e,f,d,c);case 15:return Tg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:X(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,G(d)?(a=!0,Fc(b)):a=!1,kb(b,c),Ag(b,d,e,c),de(b,d,e,c),re(null,
b,d,!0,a,c);case 19:return Yg(a,b,c)}throw m(Error(156));};var Le=null,we=null,fa=function(a,b,c,d){return new Zi(a,b,c,d)};ud=function(a,b,c){switch(b){case "input":Ed(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=pd(d);if(!e)throw m(Error(90));vf(d);Ed(d,e)}}}break;case "textarea":$f(a,c);break;case "select":b=c.value,null!=
b&&gb(a,!!c.multiple,b,!1)}};dc.prototype.render=function(a){if(!this._defer)throw m(Error(250));this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new ec;wh(a,b,null,c,null,d._onCommit);return d};dc.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};dc.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;if(!this._defer||null===b)throw m(Error(251));if(this._hasChildren){var c=
this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;if(null===d)throw m(Error(251));d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;if((q&(ha|ia))!==J)throw m(Error(253));Hc(O.bind(null,a,b));V();b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};dc.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=
!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};ec.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};ec.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];if("function"!==typeof c)throw m(Error(191),c);c()}}};hd.prototype.render=gd.prototype.render=function(a,b){var c=this._internalRoot,d=new ec;b=void 0===
b?null:b;null!==b&&d.then(b);fd(a,c,null,d._onCommit);return d};hd.prototype.unmount=gd.prototype.unmount=function(a){var b=this._internalRoot,c=new ec;a=void 0===a?null:a;null!==a&&c.then(a);fd(null,b,null,c._onCommit);return c};hd.prototype.createBatch=function(){var a=new dc(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};(function(a,b,c,
d){Gd=a;Pf=b;wd=c;Qf=d})(jh,Be,Ae,function(a,b){var c=q;q|=2;try{return a(b)}finally{q=c,q===J&&V()}});var Rh={createPortal:yh,findDOMNode:function(a){if(null==a)a=null;else if(1!==a.nodeType){var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw m(Error(188));throw m(Error(268),Object.keys(a));}a=Nf(b);a=null===a?null:a.stateNode}return a},hydrate:function(a,b,c){if(!Wa(b))throw m(Error(200));return id(null,a,b,!0,c)},render:function(a,b,c){if(!Wa(b))throw m(Error(200));
return id(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!Wa(c))throw m(Error(200));if(null==a||void 0===a._reactInternalFiber)throw m(Error(38));return id(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!Wa(a))throw m(Error(40));return a._reactRootContainer?(kh(function(){id(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return yh.apply(void 0,arguments)},unstable_batchedUpdates:jh,unstable_interactiveUpdates:function(a,
b,c,d){Ae();return Be(a,b,c,d)},unstable_discreteUpdates:Be,unstable_flushDiscreteUpdates:Ae,flushSync:function(a,b){if((q&(ha|ia))!==J)throw m(Error(187));var c=q;q|=1;try{return Ma(99,a.bind(null,b))}finally{q=c,V()}},unstable_createRoot:function(a,b){if(!Wa(a))throw m(Error(299),"unstable_createRoot");return new hd(a,null!=b&&!0===b.hydrate)},unstable_createSyncRoot:function(a,b){if(!Wa(a))throw m(Error(299),"unstable_createRoot");return new gd(a,1,null!=b&&!0===b.hydrate)},unstable_flushControlled:function(a){var b=
q;q|=1;try{Ma(99,a)}finally{q=b,q===J&&V()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[df,Ja,pd,Qe.injectEventPluginsByName,kd,$a,function(a){nd(a,$h)},qf,rf,Ac,nc,Yb,{current:!1}]}};(function(a){var b=a.findFiberByHostInstance;return Yi(K({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ja.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Nf(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?
b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:oc,bundleType:0,version:"16.9.0",rendererPackageName:"react-dom"});var Sh={default:Rh},Th=Sh&&Rh||Sh;return Th.default||Th});

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
