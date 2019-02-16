/** @license React v16.8.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';(function(N,q){"object"===typeof exports&&"undefined"!==typeof module?module.exports=q():"function"===typeof define&&define.amd?define(q):N.React=q()})(this,function(){function N(a,b,d,g,p,c,e,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var n=[d,g,p,c,e,h],f=0;a=Error(b.replace(/%s/g,function(){return n[f++]}));a.name="Invariant Violation"}a.framesToPop=1;
throw a;}}function q(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,g=0;g<b;g++)d+="&args[]="+encodeURIComponent(arguments[g+1]);N(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}function t(a,b,d){this.props=a;this.context=b;this.refs=ba;this.updater=d||ca}function da(){}function O(a,b,d){this.props=a;this.context=b;this.refs=ba;this.updater=d||
ca}function u(){if(!x){var a=c.expirationTime;C?P():C=!0;D(ta,a)}}function Q(){var a=c,b=c.next;if(c===b)c=null;else{var d=c.previous;c=d.next=b;b.previous=d}a.next=a.previous=null;d=a.callback;b=a.expirationTime;a=a.priorityLevel;var g=f,p=E;f=a;E=b;try{var n=d()}finally{f=g,E=p}if("function"===typeof n)if(n={callback:n,priorityLevel:a,expirationTime:b,next:null,previous:null},null===c)c=n.next=n.previous=n;else{d=null;a=c;do{if(a.expirationTime>=b){d=a;break}a=a.next}while(a!==c);null===d?d=c:d===
c&&(c=n,u());b=d.previous;b.next=d.previous=n;n.next=d;n.previous=b}}function F(){if(-1===k&&null!==c&&1===c.priorityLevel){x=!0;try{do Q();while(null!==c&&1===c.priorityLevel)}finally{x=!1,null!==c?u():C=!1}}}function ta(a){x=!0;var b=G;G=a;try{if(a)for(;null!==c;){var d=l();if(c.expirationTime<=d){do Q();while(null!==c&&c.expirationTime<=d)}else break}else if(null!==c){do Q();while(null!==c&&!H())}}finally{x=!1,G=b,null!==c?u():C=!1,F()}}function ea(a,b,d){var g=void 0,p={},c=null,e=null;if(null!=
b)for(g in void 0!==b.ref&&(e=b.ref),void 0!==b.key&&(c=""+b.key),b)fa.call(b,g)&&!ha.hasOwnProperty(g)&&(p[g]=b[g]);var h=arguments.length-2;if(1===h)p.children=d;else if(1<h){for(var f=Array(h),k=0;k<h;k++)f[k]=arguments[k+2];p.children=f}if(a&&a.defaultProps)for(g in h=a.defaultProps,h)void 0===p[g]&&(p[g]=h[g]);return{$$typeof:y,type:a,key:c,ref:e,props:p,_owner:R.current}}function ua(a,b){return{$$typeof:y,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function S(a){return"object"===
typeof a&&null!==a&&a.$$typeof===y}function va(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}function ia(a,b,d,g){if(I.length){var c=I.pop();c.result=a;c.keyPrefix=b;c.func=d;c.context=g;c.count=0;return c}return{result:a,keyPrefix:b,func:d,context:g,count:0}}function ja(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>I.length&&I.push(a)}function T(a,b,d,g){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;var e=!1;if(null===
a)e=!0;else switch(c){case "string":case "number":e=!0;break;case "object":switch(a.$$typeof){case y:case wa:e=!0}}if(e)return d(g,a,""===b?"."+U(a,0):b),1;e=0;b=""===b?".":b+":";if(Array.isArray(a))for(var f=0;f<a.length;f++){c=a[f];var h=b+U(c,f);e+=T(c,h,d,g)}else if(null===a||"object"!==typeof a?h=null:(h=ka&&a[ka]||a["@@iterator"],h="function"===typeof h?h:null),"function"===typeof h)for(a=h.call(a),f=0;!(c=a.next()).done;)c=c.value,h=b+U(c,f++),e+=T(c,h,d,g);else"object"===c&&(d=""+a,q("31",
"[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return e}function V(a,b,d){return null==a?0:T(a,"",b,d)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?va(a.key):b.toString(36)}function xa(a,b,d){a.func.call(a.context,b,a.count++)}function ya(a,b,d){var g=a.result,c=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,g,d,function(a){return a}):null!=a&&(S(a)&&(a=ua(a,c+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(la,"$&/")+"/")+
d)),g.push(a))}function W(a,b,d,g,c){var e="";null!=d&&(e=(""+d).replace(la,"$&/")+"/");b=ia(b,e,g,c);V(a,ya,b);ja(b)}function m(){var a=ma.current;null===a?q("307"):void 0;return a}var e="function"===typeof Symbol&&Symbol.for,y=e?Symbol.for("react.element"):60103,wa=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,X=e?Symbol.for("react.strict_mode"):60108,za=e?Symbol.for("react.profiler"):60114,Aa=e?Symbol.for("react.provider"):60109,Ba=e?Symbol.for("react.context"):60110,
Ca=e?Symbol.for("react.concurrent_mode"):60111,Da=e?Symbol.for("react.forward_ref"):60112,Ea=e?Symbol.for("react.suspense"):60113,Fa=e?Symbol.for("react.memo"):60115,Ga=e?Symbol.for("react.lazy"):60116,ka="function"===typeof Symbol&&Symbol.iterator,na=Object.getOwnPropertySymbols,Ha=Object.prototype.hasOwnProperty,Ia=Object.prototype.propertyIsEnumerable,J=function(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return!1;var b={};for(a=
0;10>a;a++)b["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(b).map(function(a){return b[a]}).join(""))return!1;var d={};"abcdefghijklmnopqrst".split("").forEach(function(a){d[a]=a});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},d)).join("")?!1:!0}catch(g){return!1}}()?Object.assign:function(a,b){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");var d=Object(a);for(var c,e=1;e<arguments.length;e++){var f=Object(arguments[e]);
for(var k in f)Ha.call(f,k)&&(d[k]=f[k]);if(na){c=na(f);for(var h=0;h<c.length;h++)Ia.call(f,c[h])&&(d[c[h]]=f[c[h]])}}return d},ca={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,d){},enqueueReplaceState:function(a,b,d,c){},enqueueSetState:function(a,b,d,c){}},ba={};t.prototype.isReactComponent={};t.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?q("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};t.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,
a,"forceUpdate")};da.prototype=t.prototype;e=O.prototype=new da;e.constructor=O;J(e,t.prototype);e.isPureReactComponent=!0;var c=null,G=!1,f=3,k=-1,E=-1,x=!1,C=!1,Ja=Date,Ka="function"===typeof setTimeout?setTimeout:void 0,La="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,pa="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,qa,ra,Y=function(a){qa=oa(function(b){La(ra);a(b)});ra=Ka(function(){pa(qa);
a(l())},100)};if("object"===typeof performance&&"function"===typeof performance.now){var Ma=performance;var l=function(){return Ma.now()}}else l=function(){return Ja.now()};e=null;"undefined"!==typeof window?e=window:"undefined"!==typeof global&&(e=global);if(e&&e._schedMock){e=e._schedMock;var D=e[0];var P=e[1];var H=e[2];l=e[3]}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var v=null,Na=function(a){if(null!==v)try{v(a)}finally{v=null}};D=function(a,b){null!==v?setTimeout(D,
0,a):(v=a,setTimeout(Na,0,!1))};P=function(){v=null};H=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof oa&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof pa&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var w=null,K=!1,z=-1,A=!1,Z=!1,L=0,
M=33,B=33;H=function(){return L<=l()};e=new MessageChannel;var sa=e.port2;e.port1.onmessage=function(a){K=!1;a=w;var b=z;w=null;z=-1;var d=l(),c=!1;if(0>=L-d)if(-1!==b&&b<=d)c=!0;else{A||(A=!0,Y(aa));w=a;z=b;return}if(null!==a){Z=!0;try{a(c)}finally{Z=!1}}};var aa=function(a){if(null!==w){Y(aa);var b=a-L+B;b<B&&M<B?(8>b&&(b=8),B=b<M?M:b):M=b;L=a+B;K||(K=!0,sa.postMessage(void 0))}else A=!1};D=function(a,b){w=a;z=b;Z||0>b?sa.postMessage(void 0):A||(A=!0,Y(aa))};P=function(){w=null;K=!1;z=-1}}var Oa=
0,ma={current:null},R={current:null};e={ReactCurrentDispatcher:ma,ReactCurrentOwner:R,assign:J};J(e,{Scheduler:{unstable_cancelCallback:function(a){var b=a.next;if(null!==b){if(b===a)c=null;else{a===c&&(c=b);var d=a.previous;d.next=b;b.previous=d}a.next=a.previous=null}},unstable_shouldYield:function(){return!G&&(null!==c&&c.expirationTime<E||H())},unstable_now:l,unstable_scheduleCallback:function(a,b){var d=-1!==k?k:l();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=d+b.timeout;
else switch(f){case 1:b=d+-1;break;case 2:b=d+250;break;case 5:b=d+1073741823;break;case 4:b=d+1E4;break;default:b=d+5E3}a={callback:a,priorityLevel:f,expirationTime:b,next:null,previous:null};if(null===c)c=a.next=a.previous=a,u();else{d=null;var g=c;do{if(g.expirationTime>b){d=g;break}g=g.next}while(g!==c);null===d?d=c:d===c&&(c=a,u());b=d.previous;b.next=d.previous=a;a.next=d;a.previous=b}return a},unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=
3}var d=f,c=k;f=a;k=l();try{return b()}finally{f=d,k=c,F()}},unstable_next:function(a){switch(f){case 1:case 2:case 3:var b=3;break;default:b=f}var d=f,c=k;f=b;k=l();try{return a()}finally{f=d,k=c,F()}},unstable_wrapCallback:function(a){var b=f;return function(){var d=f,c=k;f=b;k=l();try{return a.apply(this,arguments)}finally{f=d,k=c,F()}}},unstable_getFirstCallbackNode:function(){return c},unstable_pauseExecution:function(){},unstable_continueExecution:function(){null!==c&&u()},unstable_getCurrentPriorityLevel:function(){return f}},
SchedulerTracing:{__interactionsRef:null,__subscriberRef:null,unstable_clear:function(a){return a()},unstable_getCurrent:function(){return null},unstable_getThreadID:function(){return++Oa},unstable_subscribe:function(a){},unstable_trace:function(a,b,d){return d()},unstable_unsubscribe:function(a){},unstable_wrap:function(a){return a}}});var fa=Object.prototype.hasOwnProperty,ha={key:!0,ref:!0,__self:!0,__source:!0},la=/\/+/g,I=[];r={Children:{map:function(a,b,d){if(null==a)return a;var c=[];W(a,c,
null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=ia(null,null,b,d);V(a,xa,b);ja(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){S(a)?void 0:q("143");return a}},createRef:function(){return{current:null}},Component:t,PureComponent:O,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:Ba,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,
Consumer:null};a.Provider={$$typeof:Aa,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:Da,render:a}},lazy:function(a){return{$$typeof:Ga,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:Fa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return m().useCallback(a,b)},useContext:function(a,b){return m().useContext(a,b)},useEffect:function(a,b){return m().useEffect(a,b)},useImperativeHandle:function(a,b,d){return m().useImperativeHandle(a,b,d)},
useDebugValue:function(a,b){},useLayoutEffect:function(a,b){return m().useLayoutEffect(a,b)},useMemo:function(a,b){return m().useMemo(a,b)},useReducer:function(a,b,d){return m().useReducer(a,b,d)},useRef:function(a){return m().useRef(a)},useState:function(a){return m().useState(a)},Fragment:r,StrictMode:X,Suspense:Ea,createElement:ea,cloneElement:function(a,b,d){null===a||void 0===a?q("267",a):void 0;var c=void 0,e=J({},a.props),f=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=R.current);
void 0!==b.key&&(f=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)fa.call(b,c)&&!ha.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:y,type:a.type,key:f,ref:k,props:e,_owner:h}},createFactory:function(a){var b=ea.bind(null,a);b.type=a;return b},isValidElement:S,version:"16.8.2",unstable_ConcurrentMode:Ca,
unstable_Profiler:za,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:e};r=(X={default:r},r)||X;return r.default||r});

/** @license React v16.8.2
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
'use strict';(function(da,pb){"object"===typeof exports&&"undefined"!==typeof module?module.exports=pb(require("react")):"function"===typeof define&&define.amd?define(["react"],pb):da.ReactDOM=pb(da.React)})(this,function(da){function pb(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));
a.name="Invariant Violation"}a.framesToPop=1;throw a;}}function n(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);pb(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}function rh(a,b,c,d,e,f,g,h,l){qb=!1;$b=null;sh.apply(th,arguments)}function uh(a,b,c,d,e,f,g,h,l){rh.apply(this,arguments);
if(qb){if(qb){var k=$b;qb=!1;$b=null}else n("198"),k=void 0;ac||(ac=!0,Yc=k)}}function Ee(){if(bc)for(var a in Na){var b=Na[a],c=bc.indexOf(a);-1<c?void 0:n("96",a);if(!cc[c]){b.extractEvents?void 0:n("97",a);cc[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;Zc.hasOwnProperty(h)?n("99",h):void 0;Zc[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&Fe(l[e],g,h);e=!0}else f.registrationName?(Fe(f.registrationName,g,h),e=!0):e=!1;e?void 0:n("98",d,a)}}}}
function Fe(a,b,c){Oa[a]?n("100",a):void 0;Oa[a]=b;$c[a]=b.eventTypes[c].dependencies}function Ge(a,b,c){var d=a.type||"unknown-event";a.currentTarget=He(c);uh(d,b,void 0,a);a.currentTarget=null}function Pa(a,b){null==b?n("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function ad(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}function Ie(a,b){var c=a.stateNode;if(!c)return null;
var d=bd(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?n("231",b,typeof c):void 0;return c}function cd(a){null!==a&&(rb=Pa(rb,a));a=rb;
rb=null;if(a&&(ad(a,vh),rb?n("95"):void 0,ac))throw a=Yc,ac=!1,Yc=null,a;}function dc(a){if(a[ea])return a[ea];for(;!a[ea];)if(a.parentNode)a=a.parentNode;else return null;a=a[ea];return 5===a.tag||6===a.tag?a:null}function Je(a){a=a[ea];return!a||5!==a.tag&&6!==a.tag?null:a}function Da(a){if(5===a.tag||6===a.tag)return a.stateNode;n("33")}function dd(a){return a[ec]||null}function fa(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ke(a,b,c){if(b=Ie(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=
Pa(c._dispatchListeners,b),c._dispatchInstances=Pa(c._dispatchInstances,a)}function wh(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=fa(b);for(b=c.length;0<b--;)Ke(c[b],"captured",a);for(b=0;b<c.length;b++)Ke(c[b],"bubbled",a)}}function ed(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ie(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Pa(c._dispatchListeners,b),c._dispatchInstances=Pa(c._dispatchInstances,a))}function xh(a){a&&a.dispatchConfig.registrationName&&
ed(a._targetInst,null,a)}function Qa(a){ad(a,wh)}function fc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}function gc(a){if(fd[a])return fd[a];if(!Ra[a])return a;var b=Ra[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Le)return fd[a]=b[c];return a}function Me(){if(hc)return hc;var a,b=gd,c=b.length,d,e="value"in qa?qa.value:qa.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return hc=e.slice(a,
1<d?1-d:void 0)}function ic(){return!0}function jc(){return!1}function J(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?ic:jc;this.isPropagationStopped=jc;return this}function yh(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);
return e}return new this(a,b,c,d)}function zh(a){a instanceof this?void 0:n("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function Ne(a){a.eventPool=[];a.getPooled=yh;a.release=zh}function Oe(a,b){switch(a){case "keyup":return-1!==Ah.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Pe(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}function Bh(a,b){switch(a){case "compositionend":return Pe(b);
case "keypress":if(32!==b.which)return null;Qe=!0;return Re;case "textInput":return a=b.data,a===Re&&Qe?null:a;default:return null}}function Ch(a,b){if(Sa)return"compositionend"===a||!hd&&Oe(a,b)?(a=Me(),hc=gd=qa=null,Sa=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return Se&&"ko"!==b.locale?null:b.data;
default:return null}}function Te(a){if(a=Ue(a)){"function"!==typeof id?n("280"):void 0;var b=bd(a.stateNode);id(a.stateNode,a.type,b)}}function Ve(a){Ta?Ua?Ua.push(a):Ua=[a]:Ta=a}function We(){if(Ta){var a=Ta,b=Ua;Ua=Ta=null;Te(a);if(b)for(a=0;a<b.length;a++)Te(b[a])}}function Xe(a,b){if(jd)return a(b);jd=!0;try{return Ye(a,b)}finally{if(jd=!1,null!==Ta||null!==Ua)Ze(),We()}}function $e(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Dh[a.type]:"textarea"===b?!0:!1}function kd(a){a=
a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function af(a){if(!ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function bf(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}function Eh(a){var b=bf(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=
""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=null;delete a[b]}}}}function kc(a){a._valueTracker||(a._valueTracker=Eh(a))}function cf(a){if(!a)return!1;
var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=bf(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function sb(a){if(null===a||"object"!==typeof a)return null;a=df&&a[df]||a["@@iterator"];return"function"===typeof a?a:null}function sa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ld:return"ConcurrentMode";case ta:return"Fragment";case Va:return"Portal";case lc:return"Profiler";
case md:return"StrictMode";case nd:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ef:return"Context.Consumer";case ff:return"Context.Provider";case od:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case pd:return sa(a.type);case gf:if(a=1===a._status?a._result:null)return sa(a)}return null}function qd(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=
a._debugSource,f=sa(a.type);c=null;d&&(c=sa(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Fh,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}function Gh(a){if(hf.call(jf,a))return!0;if(hf.call(kf,a))return!1;if(Hh.test(a))return jf[a]=!0;kf[a]=!0;return!1}function Ih(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;
a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function Jh(a,b,c,d){if(null===b||"undefined"===typeof b||Ih(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function K(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}function rd(a,b,c,d){var e=A.hasOwnProperty(b)?
A[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Jh(b,c,e,d)&&(c=null),d||null===e?Gh(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}function ua(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;
default:return""}}function sd(a,b){var c=b.checked;return B({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function lf(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=ua(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function mf(a,b){b=b.checked;null!=b&&rd(a,"checked",b,!1)}function td(a,
b){mf(a,b);var c=ua(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?ud(a,b.type,c):b.hasOwnProperty("defaultValue")&&ud(a,b.type,ua(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}function nf(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;
if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}function ud(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function of(a,b,c){a=J.getPooled(pf.change,a,b,
c);a.type="change";Ve(c);Qa(a);return a}function Kh(a){cd(a)}function mc(a){var b=Da(a);if(cf(b))return a}function Lh(a,b){if("change"===a)return b}function qf(){tb&&(tb.detachEvent("onpropertychange",rf),ub=tb=null)}function rf(a){"value"===a.propertyName&&mc(ub)&&(a=of(ub,a,kd(a)),Xe(Kh,a))}function Mh(a,b,c){"focus"===a?(qf(),tb=b,ub=c,tb.attachEvent("onpropertychange",rf)):"blur"===a&&qf()}function Nh(a,b){if("selectionchange"===a||"keyup"===a||"keydown"===a)return mc(ub)}function Oh(a,b){if("click"===
a)return mc(b)}function Ph(a,b){if("input"===a||"change"===a)return mc(b)}function Qh(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rh[a])?!!b[a]:!1}function vd(a){return Qh}function Ea(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function vb(a,b){if(Ea(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Sh.call(b,c[d])||!Ea(a[c[d]],
b[c[d]]))return!1;return!0}function wb(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function sf(a){2!==wb(a)?n("188"):void 0}function Th(a){var b=a.alternate;if(!b)return b=wb(a),3===b?n("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return sf(e),a;if(g===d)return sf(e),b;g=
g.sibling}n("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?void 0:n("189")}}c.alternate!==d?n("190"):void 0}3!==c.tag?n("188"):void 0;return c.stateNode.current===c?a:b}function tf(a){a=Th(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;
for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}function nc(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function uf(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};vf[a]=b;wd[c]=b}function Uh(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);
break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=dc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=kd(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<cc.length;h++){var l=cc[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=Pa(g,l))}cd(g)}}function r(a,b){if(!b)return null;var c=(wf(a)?xf:oc).bind(null,a);b.addEventListener(a,c,!1)}function pc(a,b){if(!b)return null;var c=(wf(a)?xf:oc).bind(null,a);
b.addEventListener(a,c,!0)}function xf(a,b){yf(oc,a,b)}function oc(a,b){if(qc){var c=kd(b);c=dc(c);null===c||"number"!==typeof c.tag||2===wb(c)||(c=null);if(rc.length){var d=rc.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Xe(Uh,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>rc.length&&rc.push(a)}}}function zf(a){Object.prototype.hasOwnProperty.call(a,sc)||(a[sc]=Vh++,Af[a[sc]]=
{});return Af[a[sc]]}function xd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Bf(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function Cf(a,b){var c=Bf(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Bf(c)}}function Df(a,b){return a&&b?a===
b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Df(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function Ef(){for(var a=window,b=xd();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=xd(a.document)}return b}function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||
"true"===a.contentEditable)}function Wh(){var a=Ef();if(yd(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(cj){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,n=null;b:for(;;){for(var p;;){m!==b||0!==d&&3!==m.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=
f+c);3===m.nodeType&&(f+=m.nodeValue.length);if(null===(p=m.firstChild))break;n=m;m=p}for(;;){if(m===a)break b;n===b&&++l===d&&(g=f);n===e&&++k===c&&(h=f);if(null!==(p=m.nextSibling))break;m=n;n=m.parentNode}m=p}b=-1===g||-1===h?null:{start:g,end:h}}else b=null}b=b||{start:0,end:0}}else b=null;return{focusedElem:a,selectionRange:b}}function Xh(a){var b=Ef(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Df(c.ownerDocument.documentElement,c)){if(null!==d&&yd(c))if(b=d.start,a=d.end,
void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Cf(c,f);var g=Cf(c,d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),
a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}function Gf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(zd||null==Wa||Wa!==xd(c))return null;c=Wa;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,
end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return xb&&vb(xb,c)?null:(xb=c,a=J.getPooled(Hf.select,Ad,a,b),a.type="select",a.target=Wa,Qa(a),a)}function Yh(a){var b="";da.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Bd(a,b){a=B({children:void 0},b);if(b=Yh(b.children))a.children=b;return a}function Xa(a,b,c,d){a=a.options;if(b){b=
{};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+ua(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}function Cd(a,b){null!=b.dangerouslySetInnerHTML?n("91"):void 0;return B({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}
function If(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?n("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:n("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:ua(c)}}function Jf(a,b){var c=ua(b.value),d=ua(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Kf(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";
default:return"http://www.w3.org/1999/xhtml"}}function Dd(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Kf(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}function Lf(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||yb.hasOwnProperty(a)&&yb[a]?(""+b).trim():b+"px"}function Mf(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=Lf(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,
e):a[c]=e}}function Ed(a,b){b&&(Zh[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?n("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?n("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:n("61")),null!=b.style&&"object"!==typeof b.style?n("62",""):void 0)}function Fd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;
default:return!0}}function ha(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=zf(a);b=$c[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":pc("scroll",a);break;case "focus":case "blur":pc("focus",a);pc("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":af(e)&&pc(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===zb.indexOf(e)&&r(e,a)}c[e]=!0}}}function tc(){}function Nf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function $h(a,b,c,d,e,f){a[ec]=e;"input"===c&&"radio"===e.type&&null!=e.name&&mf(a,e);Fd(c,d);d=Fd(c,e);for(f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?Mf(a,h):"dangerouslySetInnerHTML"===g?Of(a,h):"children"===g?Ab(a,h):rd(a,g,h,d)}switch(c){case "input":td(a,
e);break;case "textarea":Jf(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?Xa(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?Xa(a,!!e.multiple,e.defaultValue,!0):Xa(a,!!e.multiple,e.multiple?[]:"",!1))}}function Hd(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Pf(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function D(a,b){0>Ya||(a.current=
Id[Ya],Id[Ya]=null,Ya--)}function L(a,b,c){Ya++;Id[Ya]=a.current;a.current=b}function Za(a,b){var c=a.type.contextTypes;if(!c)return va;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function E(a){a=a.childContextTypes;return null!==a&&void 0!==a}function uc(a){D(M,a);
D(F,a)}function Jd(a){D(M,a);D(F,a)}function Qf(a,b,c){F.current!==va?n("168"):void 0;L(F,b,a);L(M,c,a)}function Rf(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:n("108",sa(b)||"Unknown",e);return B({},c,d)}function vc(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||va;Fa=F.current;L(F,b,a);L(M,M.current,a);return!0}function Sf(a,b,c){var d=a.stateNode;d?void 0:n("169");c?(b=
Rf(a,b,Fa),d.__reactInternalMemoizedMergedChildContext=b,D(M,a),D(F,a),L(F,b,a)):D(M,a);L(M,c,a)}function Tf(a){return function(b){try{return a(b)}catch(c){}}}function ai(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Kd=Tf(function(a){return b.onCommitFiberRoot(c,a)});Ld=Tf(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}function bi(a,b,c,d){this.tag=a;this.key=
c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Md(a){a=a.prototype;return!(!a||!a.isReactComponent)}function ci(a){if("function"===typeof a)return Md(a)?1:0;if(void 0!==a&&
null!==a){a=a.$$typeof;if(a===od)return 11;if(a===pd)return 14}return 2}function Ga(a,b,c){c=a.alternate;null===c?(c=S(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;
c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function wc(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Md(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ta:return wa(c.children,e,f,b);case ld:return Uf(c,e|3,f,b);case md:return Uf(c,e|2,f,b);case lc:return a=S(12,c,b,e|4),a.elementType=lc,a.type=lc,a.expirationTime=f,a;case nd:return a=S(13,c,b,e),b=nd,a.elementType=b,a.type=b,a.expirationTime=f,a;default:if("object"===typeof a&&
null!==a)switch(a.$$typeof){case ff:g=10;break a;case ef:g=9;break a;case od:g=11;break a;case pd:g=14;break a;case gf:g=16;d=null;break a}n("130",null==a?a:typeof a,"")}b=S(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function wa(a,b,c,d){a=S(7,a,d,b);a.expirationTime=c;return a}function Uf(a,b,c,d){a=S(8,a,d,b);b=0===(b&1)?md:ld;a.elementType=b;a.type=b;a.expirationTime=c;return a}function Nd(a,b,c){a=S(6,a,null,b);a.expirationTime=c;return a}function Od(a,b,c){b=S(4,null!==a.children?
a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Bb(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);xc(b,a)}function di(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0;else{b<
a.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?Bb(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,Bb(a,b)):b>c&&Bb(a,b)}xc(0,a)}function Vf(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=
d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);xc(b,a)}function Wf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function xc(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&
c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}function P(a,b){if(a&&a.defaultProps){b=B({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}function ei(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;
}a._result=b;throw b;}}function yc(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:B({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}function Xf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!vb(c,d)||!vb(e,f):!0}function Yf(a,b,c,d){var e=!1;d=va;var f=b.contextType;"object"===typeof f&&null!==f?f=T(f):(d=E(b)?Fa:F.current,e=b.contextTypes,
f=(e=null!==e&&void 0!==e)?Za(a,d):va);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=zc;a.stateNode=b;b._reactInternalFiber=a;e&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=d,a.__reactInternalMemoizedMaskedChildContext=f);return b}function Zf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==
a&&zc.enqueueReplaceState(b,b.state,null)}function Pd(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=$f;var f=b.contextType;"object"===typeof f&&null!==f?e.context=T(f):(f=E(b)?Fa:F.current,e.context=Za(a,f));f=a.updateQueue;null!==f&&(Cb(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(yc(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&
"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&zc.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Cb(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}function Db(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==
c.tag?n("309"):void 0,d=c.stateNode);d?void 0:n("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===$f&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?n("284"):void 0;c._owner?void 0:n("290",a)}return a}function Ac(a,b){"textarea"!==a.type&&n("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}function ag(a){function b(b,
c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Ga(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=2,c):d;b.effectTag=
2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Nd(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Db(a,b,c),d.return=a,d;d=wc(c.type,c.key,c.props,null,a.mode,d);d.ref=Db(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Od(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=wa(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function Ff(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Nd(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Bc:return c=wc(b.type,b.key,b.props,null,a.mode,c),c.ref=Db(a,null,b),c.return=a,c;case Va:return b=Od(b,a.mode,c),b.return=a,b}if(Cc(b)||sb(b))return b=
wa(b,a.mode,c,null),b.return=a,b;Ac(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Bc:return c.key===e?c.type===ta?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Va:return c.key===e?k(a,b,c,d):null}if(Cc(c)||sb(c))return null!==e?null:m(a,b,c,d,null);Ac(a,c)}return null}function r(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Bc:return a=a.get(null===d.key?c:d.key)||null,d.type===ta?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(Cc(d)||sb(d))return a=a.get(c)||null,m(b,a,d,e,null);Ac(b,d)}return null}function u(e,g,h,k){for(var l=null,m=null,n=g,q=g=0,v=null;null!==n&&q<h.length;q++){n.index>q?(v=n,n=null):v=n.sibling;var Q=p(e,n,h[q],k);if(null===Q){null===n&&(n=v);break}a&&
n&&null===Q.alternate&&b(e,n);g=f(Q,g,q);null===m?l=Q:m.sibling=Q;m=Q;n=v}if(q===h.length)return c(e,n),l;if(null===n){for(;q<h.length;q++)if(n=Ff(e,h[q],k))g=f(n,g,q),null===m?l=n:m.sibling=n,m=n;return l}for(n=d(e,n);q<h.length;q++)if(v=r(n,e,q,h[q],k))a&&null!==v.alternate&&n.delete(null===v.key?q:v.key),g=f(v,g,q),null===m?l=v:m.sibling=v,m=v;a&&n.forEach(function(a){return b(e,a)});return l}function x(e,g,h,k){var l=sb(h);"function"!==typeof l?n("150"):void 0;h=l.call(h);null==h?n("151"):void 0;
for(var m=l=null,q=g,v=g=0,Q=null,t=h.next();null!==q&&!t.done;v++,t=h.next()){q.index>v?(Q=q,q=null):Q=q.sibling;var u=p(e,q,t.value,k);if(null===u){q||(q=Q);break}a&&q&&null===u.alternate&&b(e,q);g=f(u,g,v);null===m?l=u:m.sibling=u;m=u;q=Q}if(t.done)return c(e,q),l;if(null===q){for(;!t.done;v++,t=h.next())t=Ff(e,t.value,k),null!==t&&(g=f(t,g,v),null===m?l=t:m.sibling=t,m=t);return l}for(q=d(e,q);!t.done;v++,t=h.next())t=r(q,e,v,t.value,k),null!==t&&(a&&null!==t.alternate&&q.delete(null===t.key?
v:t.key),g=f(t,g,v),null===m?l=t:m.sibling=t,m=t);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ta&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Bc:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===ta:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ta?f.props.children:f.props,h);d.ref=Db(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);
k=k.sibling}f.type===ta?(d=wa(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=wc(f.type,f.key,f.props,null,a.mode,h),h.ref=Db(a,d,f),h.return=a,a=h)}return g(a);case Va:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Od(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===
typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=Nd(f,a.mode,h),d.return=a,a=d),g(a);if(Cc(f))return u(a,d,f,h);if(sb(f))return x(a,d,f,h);l&&Ac(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,n("152",h.displayName||h.name||"Component")}return c(a,d)}}function Ha(a){a===Eb?n("174"):void 0;return a}function Qd(a,b){L(Fb,b,a);L(Gb,a,a);L(U,Eb,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Dd(null,
"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Dd(b,c)}D(U,a);L(U,b,a)}function $a(a){D(U,a);D(Gb,a);D(Fb,a)}function bg(a){Ha(Fb.current);var b=Ha(U.current);var c=Dd(b,a.type);b!==c&&(L(Gb,a,a),L(U,c,a))}function Rd(a){Gb.current===a&&(D(U,a),D(Gb,a))}function V(){n("307")}function Sd(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!Ea(a[c],b[c]))return!1;return!0}function Td(a,b,c,d,e,f){Hb=f;xa=b;W=null!==a?a.memoizedState:null;Dc.current=null===
W?fi:cg;b=c(d,e);if(Ib){do Ib=!1,Jb+=1,W=null!==a?a.memoizedState:null,ab=bb,X=G=y=null,Dc.current=cg,b=c(d,e);while(Ib);ia=null;Jb=0}Dc.current=Ud;a=xa;a.memoizedState=bb;a.expirationTime=Kb;a.updateQueue=X;a.effectTag|=Lb;a=null!==y&&null!==y.next;Hb=0;ab=G=bb=W=y=xa=null;Kb=0;X=null;Lb=0;a?n("300"):void 0;return b}function Vd(){Dc.current=Ud;Hb=0;ab=G=bb=W=y=xa=null;Kb=0;X=null;Lb=0;Ib=!1;ia=null;Jb=0}function cb(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};
null===G?bb=G=a:G=G.next=a;return G}function Mb(){if(null!==ab)G=ab,ab=G.next,y=W,W=null!==y?y.next:null;else{null===W?n("310"):void 0;y=W;var a={memoizedState:y.memoizedState,baseState:y.baseState,queue:y.queue,baseUpdate:y.baseUpdate,next:null};G=null===G?bb=a:G.next=a;W=y.next}return G}function dg(a,b){return"function"===typeof b?b(a):b}function eg(a,b,c){b=Mb();c=b.queue;null===c?n("311"):void 0;if(0<Jb){var d=c.dispatch;if(null!==ia){var e=ia.get(c);if(void 0!==e){ia.delete(c);var f=b.memoizedState;
do f=a(f,e.action),e=e.next;while(null!==e);Ea(f,b.memoizedState)||(ja=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Hb?(k||(k=!0,h=g,e=f),m>Kb&&(Kb=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next}while(null!==l&&l!==d);k||(h=g,e=f);Ea(f,b.memoizedState)||(ja=
!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.eagerReducer=a;c.eagerState=f}return[b.memoizedState,c.dispatch]}function Wd(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===X?(X={lastEffect:null},X.lastEffect=a.next=a):(b=X.lastEffect,null===b?X.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,X.lastEffect=a));return a}function Xd(a,b,c,d){var e=cb();Lb|=a;e.memoizedState=Wd(b,c,void 0,void 0===d?null:d)}function Yd(a,b,c,d){var e=Mb();d=void 0===d?null:d;var f=void 0;if(null!==
y){var g=y.memoizedState;f=g.destroy;if(null!==d&&Sd(d,g.deps)){Wd(db,c,f,d);return}}Lb|=a;e.memoizedState=Wd(b,c,f,d)}function fg(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function gg(a,b){}function hg(a,b,c){25>Jb?void 0:n("301");var d=a.alternate;if(a===xa||null!==d&&d===xa)if(Ib=!0,a={expirationTime:Hb,action:c,eagerReducer:null,eagerState:null,next:null},null===ia&&(ia=new Map),c=ia.get(b),void 0===
c)ia.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{eb();var e=ka();e=fb(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.eagerReducer,null!==d))try{var l=b.eagerState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(Ea(k,l))return}catch(m){}finally{}ya(a,e)}}function ig(a,b){var c=S(5,null,null,0);c.elementType=
"DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function jg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}function kg(a){if(Ia){var b=gb;if(b){var c=b;if(!jg(a,b)){b=Hd(c);
if(!b||!jg(a,b)){a.effectTag|=2;Ia=!1;la=a;return}ig(la,c)}la=a;gb=Pf(b)}else a.effectTag|=2,Ia=!1,la=a}}function lg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;la=a}function Zd(a){if(a!==la)return!1;if(!Ia)return lg(a),Ia=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=gb;b;)ig(a,b),b=Hd(b);lg(a);gb=la?Hd(a.stateNode):null;return!0}function $d(){gb=la=null;Ia=!1}function N(a,b,c,d){b.child=null===a?ae(b,null,c,d):hb(b,a.child,c,d)}
function mg(a,b,c,d,e){c=c.render;var f=b.ref;ib(b,e);d=Td(a,b,c,d,f,e);if(null!==a&&!ja)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),ma(a,b,e);b.effectTag|=1;N(a,b,d,e);return b.child}function ng(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Md(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,og(a,b,g,d,e,f);a=wc(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=
a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:vb,c(e,d)&&a.ref===b.ref))return ma(a,b,f);b.effectTag|=1;a=Ga(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}function og(a,b,c,d,e,f){return null!==a&&vb(a.memoizedProps,d)&&a.ref===b.ref&&(ja=!1,e<f)?ma(a,b,f):be(a,b,c,d,f)}function pg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function be(a,b,c,d,e){var f=E(c)?Fa:F.current;f=Za(b,f);ib(b,e);c=Td(a,b,c,d,f,e);if(null!==a&&!ja)return b.updateQueue=a.updateQueue,
b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),ma(a,b,e);b.effectTag|=1;N(a,b,c,e);return b.child}function qg(a,b,c,d,e){if(E(c)){var f=!0;vc(b)}else f=!1;ib(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Yf(b,c,d,e),Pd(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=T(k):(k=E(c)?Fa:F.current,k=Za(b,k));var m=c.getDerivedStateFromProps,n="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate;n||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&Zf(b,g,d,k);za=!1;var p=b.memoizedState;l=g.state=p;var r=b.updateQueue;null!==r&&(Cb(b,r,d,g,e),l=b.memoizedState);h!==d||p!==l||M.current||za?("function"===typeof m&&(yc(b,c,m,d),l=b.memoizedState),(h=za||Xf(b,c,h,d,p,l,k))?(n||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||
("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:P(b.type,h),l=g.context,k=c.contextType,
"object"===typeof k&&null!==k?k=T(k):(k=E(c)?Fa:F.current,k=Za(b,k)),m=c.getDerivedStateFromProps,(n="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&Zf(b,g,d,k),za=!1,l=b.memoizedState,p=g.state=l,r=b.updateQueue,null!==r&&(Cb(b,r,d,g,e),p=b.memoizedState),h!==d||l!==p||M.current||za?("function"===typeof m&&(yc(b,c,m,d),p=b.memoizedState),(m=za||Xf(b,c,h,
d,l,p,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,p,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,p,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==
typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=p),g.props=d,g.state=p,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return ce(a,b,c,d,f,e)}function ce(a,b,c,d,e,f){pg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Sf(b,c,!1),ma(a,
b,f);d=b.stateNode;gi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=hb(b,a.child,null,f),b.child=hb(b,null,h,f)):N(a,b,h,f);b.memoizedState=d.state;e&&Sf(b,c,!0);return b.child}function rg(a){var b=a.stateNode;b.pendingContext?Qf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Qf(a,b.context,!1);Qd(a,b.containerInfo)}function sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;
var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=wa(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=wa(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=ae(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=Ga(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Ga(h,c,h.expirationTime),
c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=hb(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=wa(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=wa(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=hb(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}function ma(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;
null!==a&&b.child!==a.child?n("153"):void 0;if(null!==b.child){a=b.child;c=Ga(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ga(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}function hi(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||M.current)ja=!0;else{if(d<c){ja=!1;switch(b.tag){case 3:rg(b);$d();break;case 5:bg(b);break;case 1:E(b.type)&&vc(b);break;case 4:Qd(b,b.stateNode.containerInfo);
break;case 10:tg(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return sg(a,b,c);b=ma(a,b,c);return null!==b?b.sibling:null}}return ma(a,b,c)}}else ja=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Za(b,F.current);ib(b,c);e=Td(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=
1;Vd();if(E(d)){var f=!0;vc(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&yc(b,d,g,a);e.updater=zc;b.stateNode=e;e._reactInternalFiber=b;Pd(b,d,a,c);b=ce(null,b,d,!0,f,c)}else b.tag=0,N(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=ei(e);b.type=a;e=b.tag=ci(a);f=P(a,f);g=void 0;switch(e){case 0:g=be(null,b,a,f,c);break;case 1:g=
qg(null,b,a,f,c);break;case 11:g=mg(null,b,a,f,c);break;case 14:g=ng(null,b,a,P(a.type,f),d,c);break;default:n("306",a,"")}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),be(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),qg(a,b,d,e,c);case 3:rg(b);d=b.updateQueue;null===d?n("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;Cb(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)$d(),b=ma(a,b,c);else{e=b.stateNode;if(e=
(null===a||null===a.child)&&e.hydrate)gb=Pf(b.stateNode.containerInfo),la=b,e=Ia=!0;e?(b.effectTag|=2,b.child=ae(b,null,d,c)):(N(a,b,d,c),$d());b=b.child}return b;case 5:return bg(b),null===a&&kg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),pg(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(N(a,b,g,c),b=b.child),b;case 6:return null===a&&kg(b),null;case 13:return sg(a,b,c);case 4:return Qd(b,
b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=hb(b,null,d,c):N(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),mg(a,b,d,e,c);case 7:return N(a,b,b.pendingProps,c),b.child;case 8:return N(a,b,b.pendingProps.children,c),b.child;case 12:return N(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;tg(b,f);if(null!==g){var h=g.value;f=Ea(h,f)?0:("function"===typeof d._calculateChangedBits?
d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!M.current){b=ma(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==(k.observedBits&f)){1===h.tag&&(k=Aa(c),k.tag=Ec,na(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<
k)m.childExpirationTime=k,null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}N(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,
d=f.children,ib(b,c),e=T(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,N(a,b,d,c),b.child;case 14:return e=b.type,f=P(e,b.pendingProps),f=P(e.type,f),ng(a,b,e,f,d,c);case 15:return og(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,E(d)?(a=!0,vc(b)):a=!1,ib(b,c),Yf(b,d,e,c),Pd(b,d,e,c),ce(null,b,d,!0,a,c)}n("156")}function tg(a,b){var c=a.type._context;L(de,c._currentValue,
a);c._currentValue=b}function ee(a){var b=de.current;D(de,a);a.type._context._currentValue=b}function ib(a,b){Nb=a;Ob=Ja=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(ja=!0);a.contextDependencies=null}function T(a,b){if(Ob!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Ob=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Ja?(null===Nb?n("308"):void 0,Ja=b,Nb.contextDependencies={first:b,expirationTime:0}):Ja=Ja.next=b}return a._currentValue}function Fc(a){return{baseState:a,
firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function fe(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Aa(a){return{expirationTime:a,tag:ug,payload:null,callback:null,next:null,nextEffect:null}}function Gc(a,
b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}function na(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Fc(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Fc(a.memoizedState),e=c.updateQueue=Fc(c.memoizedState)):d=a.updateQueue=fe(e):null===e&&(e=c.updateQueue=fe(d));null===e||d===e?Gc(d,b):null===d.lastUpdate||null===e.lastUpdate?(Gc(d,b),Gc(e,b)):(Gc(d,b),e.lastUpdate=
b)}function vg(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Fc(a.memoizedState):wg(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function wg(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=fe(b));return b}function xg(a,b,c,d,e,f){switch(c.tag){case yg:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case ge:a.effectTag=a.effectTag&-2049|64;case ug:a=c.payload;e="function"===typeof a?
a.call(f,d,e):a;if(null===e||void 0===e)break;return B({},d,e);case Ec:za=!0}return d}function Cb(a,b,c,d,e){za=!1;b=wg(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=xg(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next}m=null;for(l=b.firstCapturedUpdate;null!==l;){var n=l.expirationTime;n<e?(null===
m&&(m=l,null===g&&(f=k)),h<n&&(h=n)):(k=xg(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k}function zg(a,b,c,d){null!==b.firstCapturedUpdate&&
(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Ag(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Ag(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function Ag(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?n("191",c):void 0;c.call(d)}a=a.nextEffect}}function Hc(a,b){return{value:a,source:b,stack:qd(b)}}function Pb(a){a.effectTag|=
4}function Bg(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qd(c));null!==c&&sa(c.type);b=b.value;null!==a&&1===a.tag&&sa(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Cg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ka(a,c)}else b.current=null}function Qb(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==db){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==db&&(e=d.create,
d.destroy=e());d=d.next}while(d!==c)}}function ii(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=Lf("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===
c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}function Dg(a){"function"===typeof Ld&&Ld(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d()}catch(f){Ka(e,f)}}c=c.next}while(c!==b)}break;case 1:Cg(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){Ka(a,
f)}break;case 5:Cg(a);break;case 4:Eg(a)}}function Fg(a){return 5===a.tag||3===a.tag||4===a.tag}function Gg(a){a:{for(var b=a.return;null!==b;){if(Fg(b)){var c=b;break a}b=b.return}n("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:n("161")}c.effectTag&16&&(Ab(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Fg(c.return)){c=null;break a}c=
c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),
g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=tc)):b.appendChild(e.stateNode);else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}function Eg(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?n("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;
break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(Dg(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=
b;b=b.child;continue}}else if(Dg(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}function Hg(a,b){switch(b.tag){case 0:case 11:case 14:case 15:Qb(Rb,ji,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&$h(c,f,e,a,d,b)}break;case 6:null===
b.stateNode?n("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=ka()));null!==a&&ii(a,d);c=b.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ki);c.forEach(function(a){var c=li.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:n("163")}}function he(a,b,c){c=Aa(c);c.tag=ge;c.payload={element:null};
var d=b.value;c.callback=function(){ie(d);Bg(a,b)};return c}function Ig(a,b,c){c=Aa(c);c.tag=ge;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ba?Ba=new Set([this]):Ba.add(this));var c=b.value,e=b.stack;Bg(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}function mi(a,b){switch(a.tag){case 1:return E(a.type)&&
uc(a),b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return $a(a),Jd(a),b=a.effectTag,0!==(b&64)?n("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Rd(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return $a(a),null;case 10:return ee(a),null;default:return null}}function Jg(){if(null!==x)for(var a=x.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&uc(b);break;case 3:$a(b);Jd(b);
break;case 5:Rd(b);break;case 4:$a(b);break;case 10:ee(b)}a=a.return}Y=null;H=0;La=-1;je=!1;x=null}function ni(){for(;null!==p;){var a=p.effectTag;a&16&&Ab(p.stateNode,"");if(a&128){var b=p.alternate;null!==b&&(b=b.ref,null!==b&&("function"===typeof b?b(null):b.current=null))}switch(a&14){case 2:Gg(p);p.effectTag&=-3;break;case 6:Gg(p);p.effectTag&=-3;Hg(p.alternate,p);break;case 4:Hg(p.alternate,p);break;case 8:a=p,Eg(a),a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null,a=a.alternate,
null!==a&&(a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null)}p=p.nextEffect}}function oi(){for(;null!==p;){if(p.effectTag&256)a:{var a=p.alternate,b=p;switch(b.tag){case 0:case 11:case 15:Qb(pi,db,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:P(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break a;case 3:case 5:case 6:case 4:case 17:break a;default:n("163")}}p=p.nextEffect}}
function qi(a,b){for(;null!==p;){var c=p.effectTag;if(c&36){var d=p.alternate,e=p,f=b;switch(e.tag){case 0:case 11:case 15:Qb(ri,Sb,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:P(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}d=e.updateQueue;null!==d&&zg(e,d,g,f);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=
e.child.stateNode;break;case 1:g=e.child.stateNode}zg(e,d,g,f)}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&Nf(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:n("163")}}c&128&&(e=p.ref,null!==e&&(f=p.stateNode,"function"===typeof e?e(f):e.current=f));c&512&&(ke=a);p=p.nextEffect}}function si(a,b){Ic=Jc=ke=null;var c=w;w=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;Qb(le,db,f);Qb(db,me,f)}catch(g){d=!0,e=g}d&&Ka(b,
e)}b=b.nextEffect}while(null!==b);w=c;c=a.expirationTime;0!==c&&Kc(a,c);z||w||Z(1073741823,!1)}function eb(){null!==Jc&&ti(Jc);null!==Ic&&Ic()}function ui(a,b){Lc=Ca=!0;a.current===b?n("177"):void 0;var c=a.pendingCommitExpirationTime;0===c?n("261"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;di(a,e>d?e:d);Kg.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ne=qc;oe=Wh();qc=!1;for(p=d;null!==
p;){e=!1;var f=void 0;try{oi()}catch(h){e=!0,f=h}e&&(null===p?n("178"):void 0,Ka(p,f),null!==p&&(p=p.nextEffect))}for(p=d;null!==p;){e=!1;f=void 0;try{ni()}catch(h){e=!0,f=h}e&&(null===p?n("178"):void 0,Ka(p,f),null!==p&&(p=p.nextEffect))}Xh(oe);oe=null;qc=!!ne;ne=null;a.current=b;for(p=d;null!==p;){e=!1;f=void 0;try{qi(a,c)}catch(h){e=!0,f=h}e&&(null===p?n("178"):void 0,Ka(p,f),null!==p&&(p=p.nextEffect))}if(null!==d&&null!==ke){var g=si.bind(null,a,d);Jc=Mc(Lg,function(){return vi(g)});Ic=g}Ca=
Lc=!1;"function"===typeof Kd&&Kd(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=b>c?b:c;0===b&&(Ba=null);wi(a,b)}function Mg(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){x=a;a:{var e=b;b=a;var f=H;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:E(b.type)&&uc(b);break;case 3:$a(b);Jd(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Zd(b),b.effectTag&=
-3;pe(b);break;case 5:Rd(b);var h=Ha(Fb.current);f=b.type;if(null!==e&&null!=b.stateNode)Ng(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=128);else if(g){var l=Ha(U.current);if(Zd(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[ea]=g;e[ec]=m;f=void 0;h=k;switch(h){case "iframe":case "object":r("load",e);break;case "video":case "audio":for(k=0;k<zb.length;k++)r(zb[k],e);break;case "source":r("error",e);break;case "img":case "image":case "link":r("error",e);r("load",e);break;case "form":r("reset",
e);r("submit",e);break;case "details":r("toggle",e);break;case "input":lf(e,m);r("invalid",e);ha(p,"onChange");break;case "select":e._wrapperState={wasMultiple:!!m.multiple};r("invalid",e);ha(p,"onChange");break;case "textarea":If(e,m),r("invalid",e),ha(p,"onChange")}Ed(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f],"children"===f?"string"===typeof l?e.textContent!==l&&(k=["children",l]):"number"===typeof l&&e.textContent!==""+l&&(k=["children",""+l]):Oa.hasOwnProperty(f)&&null!=l&&ha(p,f));
switch(h){case "input":kc(e);nf(e,m,!0);break;case "textarea":kc(e);f=e.textContent;f===e._wrapperState.initialValue&&(e.value=f);break;case "select":case "option":break;default:"function"===typeof m.onClick&&(e.onclick=tc)}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&Pb(b)}else{m=b;e=f;p=g;k=9===h.nodeType?h:h.ownerDocument;"http://www.w3.org/1999/xhtml"===l&&(l=Kf(e));"http://www.w3.org/1999/xhtml"===l?"script"===e?(e=k.createElement("div"),e.innerHTML="<script>\x3c/script>",k=e.removeChild(e.firstChild)):
"string"===typeof p.is?k=k.createElement(e,{is:p.is}):(k=k.createElement(e),"select"===e&&p.multiple&&(k.multiple=!0)):k=k.createElementNS(l,e);e=k;e[ea]=m;e[ec]=g;Og(e,b,!1,!1);m=e;k=f;p=g;var t=h,y=Fd(k,p);switch(k){case "iframe":case "object":r("load",m);h=p;break;case "video":case "audio":for(h=0;h<zb.length;h++)r(zb[h],m);h=p;break;case "source":r("error",m);h=p;break;case "img":case "image":case "link":r("error",m);r("load",m);h=p;break;case "form":r("reset",m);r("submit",m);h=p;break;case "details":r("toggle",
m);h=p;break;case "input":lf(m,p);h=sd(m,p);r("invalid",m);ha(t,"onChange");break;case "option":h=Bd(m,p);break;case "select":m._wrapperState={wasMultiple:!!p.multiple};h=B({},p,{value:void 0});r("invalid",m);ha(t,"onChange");break;case "textarea":If(m,p);h=Cd(m,p);r("invalid",m);ha(t,"onChange");break;default:h=p}Ed(k,h);l=void 0;var u=k,w=m,v=h;for(l in v)if(v.hasOwnProperty(l)){var q=v[l];"style"===l?Mf(w,q):"dangerouslySetInnerHTML"===l?(q=q?q.__html:void 0,null!=q&&Of(w,q)):"children"===l?"string"===
typeof q?("textarea"!==u||""!==q)&&Ab(w,q):"number"===typeof q&&Ab(w,""+q):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(Oa.hasOwnProperty(l)?null!=q&&ha(t,l):null!=q&&rd(w,l,q,y))}switch(k){case "input":kc(m);nf(m,p,!1);break;case "textarea":kc(m);h=m.textContent;h===m._wrapperState.initialValue&&(m.value=h);break;case "option":null!=p.value&&m.setAttribute("value",""+ua(p.value));break;case "select":h=m;m=p;h.multiple=!!m.multiple;p=m.value;null!=p?Xa(h,
!!m.multiple,p,!1):null!=m.defaultValue&&Xa(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(m.onclick=tc)}(g=Nf(f,g))&&Pb(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?n("166"):void 0;break;case 6:e&&null!=b.stateNode?Pg(e,b,e.memoizedProps,g):("string"!==typeof g&&(null===b.stateNode?n("166"):void 0),e=Ha(Fb.current),Ha(U.current),Zd(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[ea]=g,(g=f.nodeValue!==e)&&Pb(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),
g[ea]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;x=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:$a(b);pe(b);break;case 10:ee(b);break;case 9:break;case 14:break;case 17:E(b.type)&&
uc(b);break;case 18:break;default:n("156")}x=null}b=a;if(1===H||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==x)return x;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=
a,c.lastEffect=a))}else{a=mi(a,H);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}function Qg(a){var b=hi(a.alternate,a,H);a.memoizedProps=a.pendingProps;null===b&&(b=Mg(a));Kg.current=null;return b}function Rg(a,b){Ca?n("243"):void 0;eb();Ca=!0;var c=qe.current;qe.current=Ud;var d=a.nextExpirationTimeToWorkOn;if(d!==H||a!==Y||null===x)Jg(),Y=a,H=d,x=Ga(Y.current,null,H),a.pendingCommitExpirationTime=
0;var e=!1;do{try{if(b)for(;null!==x&&!Nc();)x=Qg(x);else for(;null!==x;)x=Qg(x)}catch(v){if(Ob=Ja=Nb=null,Vd(),null===x)e=!0,ie(v);else{null===x?n("271"):void 0;var f=x,g=f.return;if(null===g)e=!0,ie(v);else{a:{var h=a,l=g,k=f,m=v;g=H;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==m&&"object"===typeof m&&"function"===typeof m.then){var p=m;m=l;var t=-1,r=-1;do{if(13===m.tag){var u=m.alternate;if(null!==u&&(u=u.memoizedState,null!==u)){r=10*(1073741822-u.timedOutAt);break}u=m.pendingProps.maxDuration;
if("number"===typeof u)if(0>=u)t=0;else if(-1===t||u<t)t=u}m=m.return}while(null!==m);m=l;do{if(u=13===m.tag)u=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(u){l=m.updateQueue;null===l?(l=new Set,l.add(p),m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=Aa(1073741823),g.tag=Ec,na(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var w=k.pingCache;null===w?(w=k.pingCache=new xi,u=new Set,w.set(p,u)):(u=w.get(p),
void 0===u&&(u=new Set,w.set(p,u)));u.has(l)||(u.add(l),k=yi.bind(null,k,p,l),p.then(k,k));-1===t?h=1073741823:(-1===r&&(r=10*(1073741822-Wf(h,g))-5E3),h=r+t);0<=h&&La<h&&(La=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error((sa(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qd(k))}je=!0;m=Hc(m,k);h=
l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=he(h,m,g);vg(h,g);break a;case 1:if(t=m,r=h.type,k=h.stateNode,0===(h.effectTag&64)&&("function"===typeof r.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===Ba||!Ba.has(k)))){h.effectTag|=2048;h.expirationTime=g;g=Ig(h,t,g);vg(h,g);break a}}h=h.return}while(null!==h)}x=Mg(f);continue}}}break}while(1);Ca=!1;qe.current=c;Ob=Ja=Nb=null;Vd();if(e)Y=null,a.finishedWork=null;else if(null!==x)a.finishedWork=
null;else{c=a.current.alternate;null===c?n("281"):void 0;Y=null;if(je){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){Vf(a,d);re(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;b=a.expirationTime=1073741823;re(a,c,d,b,-1);return}}b&&-1!==La?(Vf(a,d),b=10*(1073741822-Wf(a,d)),b<La&&(La=b),b=10*(1073741822-ka()),b=La-b,re(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d,a.finishedWork=
c)}}function Ka(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ba||!Ba.has(d))){a=Hc(b,a);a=Ig(c,a,1073741823);na(c,a);ya(c,1073741823);return}break;case 3:a=Hc(b,a);a=he(c,a,1073741823);na(c,a);ya(c,1073741823);return}c=c.return}3===a.tag&&(c=Hc(b,a),c=he(a,c,1073741823),na(a,c),ya(a,1073741823))}function fb(a,b){var c=zi(),d=void 0;if(0===(b.mode&1))d=1073741823;else if(Ca&&
!Lc)d=H;else{switch(c){case se:d=1073741823;break;case te:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case Lg:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case Ai:case Bi:d=1;break;default:n("313")}null!==Y&&d===H&&--d}c===te&&(0===oa||d<oa)&&(oa=d);return d}function yi(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Y&&H===c)Y=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=
c;xc(c,a);c=a.expirationTime;0!==c&&Kc(a,c)}}function li(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=ka();b=fb(b,a);a=Sg(a,b);null!==a&&(Bb(a,b),b=a.expirationTime,0!==b&&Kc(a,b))}function Sg(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=
b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}function ya(a,b){a=Sg(a,b);null!==a&&(!Ca&&0!==H&&b>H&&Jg(),Bb(a,b),Ca&&!Lc&&Y===a||Kc(a,a.expirationTime),Tb>Ci&&(Tb=0,n("185")))}function Tg(a,b,c,d,e){return Mc(se,function(){return a(b,c,d,e)})}function Ub(){aa=1073741822-((ue()-ve)/10|0)}function Ug(a,b){if(0!==Oc){if(b<Oc)return;null!==Pc&&Vg(Pc)}Oc=b;a=ue()-ve;Pc=Wg(Di,{timeout:10*(1073741822-b)-a})}function re(a,b,c,d,e){a.expirationTime=d;0!==e||Nc()?0<e&&(a.timeoutHandle=
Ei(Fi.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Fi(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;Ub();jb=aa;Xg(a,c)}function wi(a,b){a.expirationTime=b;a.finishedWork=null}function ka(){if(w)return jb;Qc();if(0===C||1===C)Ub(),jb=aa;return jb}function Kc(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===I?(ba=I=a,a.nextScheduledRoot=a):(I=I.nextScheduledRoot=a,I.nextScheduledRoot=ba)):b>a.expirationTime&&(a.expirationTime=b);w||(z?Rc&&(ca=
a,C=1073741823,Sc(a,1073741823,!1)):1073741823===b?Z(1073741823,!1):Ug(a,b))}function Qc(){var a=0,b=null;if(null!==I)for(var c=I,d=ba;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===I?n("244"):void 0;if(d===d.nextScheduledRoot){ba=I=d.nextScheduledRoot=null;break}else if(d===ba)ba=e=d.nextScheduledRoot,I.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===I){I=c;I.nextScheduledRoot=ba;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=
null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===I)break;if(1073741823===a)break;c=d;d=d.nextScheduledRoot}}ca=b;C=a}function Nc(){return Tc?!0:Gi()?Tc=!0:!1}function Di(){try{if(!Nc()&&null!==ba){Ub();var a=ba;do{var b=a.expirationTime;0!==b&&aa<=b&&(a.nextExpirationTimeToWorkOn=aa);a=a.nextScheduledRoot}while(a!==ba)}Z(0,!0)}finally{Tc=!1}}function Z(a,b){Qc();if(b)for(Ub(),jb=aa;null!==ca&&0!==C&&a<=C&&!(Tc&&aa>C);)Sc(ca,C,aa>C),Qc(),Ub(),jb=aa;else for(;null!==ca&&0!==C&&a<=C;)Sc(ca,C,!1),
Qc();b&&(Oc=0,Pc=null);0!==C&&Ug(ca,C);Tb=0;we=null;if(null!==kb)for(a=kb,kb=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){lb||(lb=!0,Uc=d)}}if(lb)throw a=Uc,Uc=null,lb=!1,a;}function Xg(a,b){w?n("253"):void 0;ca=a;C=b;Sc(a,b,!1);Z(1073741823,!1)}function Sc(a,b,c){w?n("245"):void 0;w=!0;if(c){var d=a.finishedWork;null!==d?Vc(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Yg(d)),Rg(a,c),d=a.finishedWork,null!==d&&(Nc()?a.finishedWork=d:Vc(a,d,b)))}else d=
a.finishedWork,null!==d?Vc(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Yg(d)),Rg(a,c),d=a.finishedWork,null!==d&&Vc(a,d,b));w=!1}function Vc(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===kb?kb=[d]:kb.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===we?Tb++:(we=a,Tb=0);Mc(se,function(){ui(a,b)})}function ie(a){null===ca?n("246"):void 0;ca.expirationTime=0;lb||(lb=!0,Uc=a)}function Zg(a,b){var c=z;z=!0;try{return a(b)}finally{(z=
c)||w||Z(1073741823,!1)}}function $g(a,b){if(z&&!Rc){Rc=!0;try{return a(b)}finally{Rc=!1}}return a(b)}function ah(a,b,c){z||w||0===oa||(Z(oa,!1),oa=0);var d=z;z=!0;try{return Mc(te,function(){return a(b,c)})}finally{(z=d)||w||Z(1073741823,!1)}}function bh(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===wb(c)&&1===c.tag?void 0:n("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(E(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=
g.return}while(null!==g);n("171");g=void 0}if(1===c.tag){var h=c.type;if(E(h)){c=Rf(c,h,g);break a}}c=g}else c=va;null===b.context?b.context=c:b.pendingContext=c;b=e;e=Aa(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);eb();na(f,e);ya(f,d);return d}function xe(a,b,c,d){var e=b.current,f=ka();e=fb(f,e);return bh(a,b,c,e,d)}function ye(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Hi(a,b,c){var d=
3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Va,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}function Vb(a){var b=1073741822-25*(((1073741822-ka()+500)/25|0)+1);b>=ze&&(b=ze-1);this._expirationTime=ze=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}function mb(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}function nb(a,b,c){b=S(3,null,null,
b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}function ob(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||
" react-mount-point-unstable "!==a.nodeValue))}function Ii(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new nb(a,!1,b)}function Wc(a,b,c,d,e){var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=ye(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Ii(c,d);if("function"===
typeof e){var h=e;e=function(){var a=ye(f._internalRoot);h.call(a)}}$g(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return ye(f._internalRoot)}function ch(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;ob(b)?void 0:n("200");return Hi(a,b,null,c)}da?void 0:n("227");var sh=function(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k)}catch(m){this.onError(m)}},qb=!1,$b=null,ac=!1,Yc=null,th={onError:function(a){qb=
!0;$b=a}},bc=null,Na={},cc=[],Zc={},Oa={},$c={},bd=null,Ue=null,He=null,rb=null,vh=function(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)Ge(a,b[d],c[d]);else b&&Ge(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}},Ae={injectEventPluginOrder:function(a){bc?n("101"):void 0;bc=Array.prototype.slice.call(a);Ee()},injectEventPluginsByName:function(a){var b=!1,c;
for(c in a)if(a.hasOwnProperty(c)){var d=a[c];Na.hasOwnProperty(c)&&Na[c]===d||(Na[c]?n("102",c):void 0,Na[c]=d,b=!0)}b&&Ee()}},dh=Math.random().toString(36).slice(2),ea="__reactInternalInstance$"+dh,ec="__reactEventHandlers$"+dh,ra=!("undefined"===typeof window||!window.document||!window.document.createElement),Ra={animationend:fc("Animation","AnimationEnd"),animationiteration:fc("Animation","AnimationIteration"),animationstart:fc("Animation","AnimationStart"),transitionend:fc("Transition","TransitionEnd")},
fd={},Le={};ra&&(Le=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);var eh=gc("animationend"),fh=gc("animationiteration"),gh=gc("animationstart"),hh=gc("transitionend"),zb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
qa=null,gd=null,hc=null,B=da.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.assign;B(J.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){this.isPersistent=
ic},isPersistent:jc,destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=jc;this._dispatchInstances=this._dispatchListeners=null}});J.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};J.extend=function(a){function b(){return c.apply(this,
arguments)}var c=this,d=function(){};d.prototype=c.prototype;d=new d;B(d,b.prototype);b.prototype=d;b.prototype.constructor=b;b.Interface=B({},c.Interface,a);b.extend=c.extend;Ne(b);return b};Ne(J);var Ji=J.extend({data:null}),Ki=J.extend({data:null}),Ah=[9,13,27,32],hd=ra&&"CompositionEvent"in window,Wb=null;ra&&"documentMode"in document&&(Wb=document.documentMode);var Li=ra&&"TextEvent"in window&&!Wb,Se=ra&&(!hd||Wb&&8<Wb&&11>=Wb),Re=String.fromCharCode(32),pa={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",
captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",
captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Qe=!1,Sa=!1,Mi={eventTypes:pa,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(hd)b:{switch(a){case "compositionstart":e=pa.compositionStart;break b;case "compositionend":e=pa.compositionEnd;break b;case "compositionupdate":e=pa.compositionUpdate;break b}e=void 0}else Sa?Oe(a,c)&&(e=pa.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=pa.compositionStart);e?(Se&&
"ko"!==c.locale&&(Sa||e!==pa.compositionStart?e===pa.compositionEnd&&Sa&&(f=Me()):(qa=d,gd="value"in qa?qa.value:qa.textContent,Sa=!0)),e=Ji.getPooled(e,b,c,d),f?e.data=f:(f=Pe(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=Li?Bh(a,c):Ch(a,c))?(b=Ki.getPooled(pa.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},id=null,Ta=null,Ua=null,Ye=function(a,b){return a(b)},yf=function(a,b,c){return a(b,c)},Ze=function(){},jd=!1,Dh={color:!0,date:!0,datetime:!0,"datetime-local":!0,
email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Ma=da.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ma.hasOwnProperty("ReactCurrentDispatcher")||(Ma.ReactCurrentDispatcher={current:null});var Fh=/^(.*)[\\\/]/,O="function"===typeof Symbol&&Symbol.for,Bc=O?Symbol.for("react.element"):60103,Va=O?Symbol.for("react.portal"):60106,ta=O?Symbol.for("react.fragment"):60107,md=O?Symbol.for("react.strict_mode"):60108,lc=O?Symbol.for("react.profiler"):60114,
ff=O?Symbol.for("react.provider"):60109,ef=O?Symbol.for("react.context"):60110,ld=O?Symbol.for("react.concurrent_mode"):60111,od=O?Symbol.for("react.forward_ref"):60112,nd=O?Symbol.for("react.suspense"):60113,pd=O?Symbol.for("react.memo"):60115,gf=O?Symbol.for("react.lazy"):60116,df="function"===typeof Symbol&&Symbol.iterator,Hh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
hf=Object.prototype.hasOwnProperty,kf={},jf={},A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){A[a]=new K(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];A[b]=new K(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){A[a]=new K(a,2,!1,
a.toLowerCase(),null)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){A[a]=new K(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){A[a]=new K(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){A[a]=new K(a,3,!0,a,null)});["capture",
"download"].forEach(function(a){A[a]=new K(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){A[a]=new K(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){A[a]=new K(a,5,!1,a.toLowerCase(),null)});var Be=/[\-:]([a-z])/g,Ce=function(a){return a[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=
a.replace(Be,Ce);A[b]=new K(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Be,Ce);A[b]=new K(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Be,Ce);A[b]=new K(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});["tabIndex","crossOrigin"].forEach(function(a){A[a]=new K(a,1,!1,a.toLowerCase(),null)});var pf={change:{phasedRegistrationNames:{bubbled:"onChange",
captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}},tb=null,ub=null,De=!1;ra&&(De=af("input")&&(!document.documentMode||9<document.documentMode));var Ni={eventTypes:pf,_isInputEventSupported:De,extractEvents:function(a,b,c,d){var e=b?Da(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Lh:$e(e)?De?f=Ph:(f=Nh,g=Mh):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||
"radio"===e.type)&&(f=Oh);if(f&&(f=f(a,b)))return of(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&ud(e,"number",e.value)}},Xb=J.extend({view:null,detail:null}),Rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},ih=0,jh=0,kh=!1,lh=!1,Yb=Xb.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:vd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||
(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=ih;ih=a.screenX;return kh?"mousemove"===a.type?a.screenX-b:0:(kh=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;var b=jh;jh=a.screenY;return lh?"mousemove"===a.type?a.screenY-b:0:(lh=!0,0)}}),mh=Yb.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Zb={mouseEnter:{registrationName:"onMouseEnter",
dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Oi={eventTypes:Zb,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===
d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?dc(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if("mouseout"===a||"mouseover"===a)g=Yb,h=Zb.mouseLeave,l=Zb.mouseEnter,k="mouse";else if("pointerout"===a||"pointerover"===a)g=mh,h=Zb.pointerLeave,l=Zb.pointerEnter,k="pointer";var m=null==f?e:Da(f);e=null==b?e:Da(b);a=g.getPooled(h,f,c,d);a.type=k+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=
k+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=fa(g))k++;g=0;for(l=e;l;l=fa(l))g++;for(;0<k-g;)b=fa(b),k--;for(;0<g-k;)e=fa(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=fa(b);e=fa(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){k=f.alternate;if(null!==k&&k===e)break;b.push(f);f=fa(f)}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=fa(d)}for(d=0;d<b.length;d++)ed(b[d],"bubbled",a);for(d=f.length;0<d--;)ed(f[d],"captured",c);return[a,c]}},
Sh=Object.prototype.hasOwnProperty,Pi=J.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Qi=J.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Ri=Xb.extend({relatedTarget:null}),Si={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ti={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",
16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ui=Xb.extend({key:function(a){if(a.key){var b=Si[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=nc(a),13===a?"Enter":
String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Ti[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:vd,charCode:function(a){return"keypress"===a.type?nc(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?nc(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Vi=Yb.extend({dataTransfer:null}),Wi=Xb.extend({touches:null,targetTouches:null,
changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:vd}),Xi=J.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Yi=Yb.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Zi=[["abort","abort"],[eh,"animationEnd"],[fh,"animationIteration"],[gh,"animationStart"],["canplay",
"canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],
["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[hh,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],vf={},wd={};[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu",
"contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset",
"reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){uf(a,!0)});Zi.forEach(function(a){uf(a,!1)});var nh={eventTypes:vf,isInteractiveTopLevelEventType:function(a){a=wd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=wd[a];if(!e)return null;switch(a){case "keypress":if(0===nc(c))return null;case "keydown":case "keyup":a=Ui;break;case "blur":case "focus":a=
Ri;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=Yb;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=Vi;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=Wi;break;case eh:case fh:case gh:a=Pi;break;case hh:a=Xi;break;case "scroll":a=Xb;break;case "wheel":a=
Yi;break;case "copy":case "cut":case "paste":a=Qi;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=mh;break;default:a=J}b=a.getPooled(e,b,c,d);Qa(b);return b}},wf=nh.isInteractiveTopLevelEventType,rc=[],qc=!0,Af={},Vh=0,sc="_reactListenersID"+(""+Math.random()).slice(2),$i=ra&&"documentMode"in document&&11>=document.documentMode,Hf={select:{phasedRegistrationNames:{bubbled:"onSelect",
captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Wa=null,Ad=null,xb=null,zd=!1,aj={eventTypes:Hf,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=zf(e);f=$c.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Da(b):window;switch(a){case "focus":if($e(e)||"true"===e.contentEditable)Wa=
e,Ad=b,xb=null;break;case "blur":xb=Ad=Wa=null;break;case "mousedown":zd=!0;break;case "contextmenu":case "mouseup":case "dragend":return zd=!1,Gf(c,d);case "selectionchange":if($i)break;case "keydown":case "keyup":return Gf(c,d)}return null}};Ae.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));(function(a,b,c){bd=a;Ue=b;He=c})(dd,Je,Da);Ae.injectEventPluginsByName({SimpleEventPlugin:nh,EnterLeaveEventPlugin:Oi,
ChangeEventPlugin:Ni,SelectEventPlugin:aj,BeforeInputEventPlugin:Mi});var Xc=void 0,Of=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{Xc=Xc||document.createElement("div");Xc.innerHTML="<svg>"+b+"</svg>";for(b=Xc.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}),
Ab=function(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b},yb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,
lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bj=["Webkit","ms","Moz","O"];Object.keys(yb).forEach(function(a){bj.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);yb[b]=yb[a]})});var Zh=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,
source:!0,track:!0,wbr:!0}),R=da.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Vg=R.unstable_cancelCallback,ue=R.unstable_now,Wg=R.unstable_scheduleCallback,Gi=R.unstable_shouldYield,Mc=R.unstable_runWithPriority,zi=R.unstable_getCurrentPriorityLevel,se=R.unstable_ImmediatePriority,te=R.unstable_UserBlockingPriority,Lg=R.unstable_NormalPriority,Ai=R.unstable_LowPriority,Bi=R.unstable_IdlePriority,ne=null,oe=null,Ei="function"===typeof setTimeout?setTimeout:void 0,Yg="function"===typeof clearTimeout?
clearTimeout:void 0,vi=Wg,ti=Vg;new Set;var Id=[],Ya=-1,va={},F={current:va},M={current:!1},Fa=va,Kd=null,Ld=null,S=function(a,b,c,d){return new bi(a,b,c,d)},$f=(new da.Component).refs,zc={isMounted:function(a){return(a=a._reactInternalFiber)?2===wb(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=ka();d=fb(d,a);var e=Aa(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);eb();na(a,e);ya(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=ka();d=fb(d,a);var e=
Aa(d);e.tag=yg;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);eb();na(a,e);ya(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=ka();c=fb(c,a);var d=Aa(c);d.tag=Ec;void 0!==b&&null!==b&&(d.callback=b);eb();na(a,d);ya(a,c)}},Cc=Array.isArray,hb=ag(!0),ae=ag(!1),Eb={},U={current:Eb},Gb={current:Eb},Fb={current:Eb},db=0,pi=2,Rb=4,ji=8,ri=16,Sb=32,me=64,le=128,Dc=Ma.ReactCurrentDispatcher,Hb=0,xa=null,y=null,W=null,bb=null,G=null,ab=null,Kb=0,X=null,Lb=0,Ib=!1,ia=null,Jb=0,Ud={readContext:T,
useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V},fi={readContext:T,useCallback:function(a,b){cb().memoizedState=[a,void 0===b?null:b];return a},useContext:T,useEffect:function(a,b){return Xd(516,le|me,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Xd(4,Rb|Sb,fg.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Xd(4,Rb|Sb,a,b)},useMemo:function(a,b){var c=cb();
b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=cb();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,eagerReducer:a,eagerState:b};a=a.dispatch=hg.bind(null,xa,a);return[d.memoizedState,a]},useRef:function(a){var b=cb();a={current:a};return b.memoizedState=a},useState:function(a){var b=cb();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,eagerReducer:dg,eagerState:a};a=a.dispatch=
hg.bind(null,xa,a);return[b.memoizedState,a]},useDebugValue:gg},cg={readContext:T,useCallback:function(a,b){var c=Mb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Sd(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:T,useEffect:function(a,b){return Yd(516,le|me,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Yd(4,Rb|Sb,fg.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Yd(4,Rb|Sb,a,b)},useMemo:function(a,b){var c=
Mb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Sd(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:eg,useRef:function(a){return Mb().memoizedState},useState:function(a){return eg(dg,a)},useDebugValue:gg},la=null,gb=null,Ia=!1,gi=Ma.ReactCurrentOwner,ja=!1,de={current:null},Nb=null,Ja=null,Ob=null,ug=0,yg=1,Ec=2,ge=3,za=!1,Og=void 0,pe=void 0,Ng=void 0,Pg=void 0;Og=function(a,b,c,d){for(c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);
else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};pe=function(a){};Ng=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;Ha(U.current);a=null;switch(c){case "input":f=sd(g,f);d=sd(g,d);a=[];break;case "option":f=Bd(g,f);d=Bd(g,d);a=[];break;case "select":f=B({},f,{value:void 0});d=B({},d,{value:void 0});a=[];break;case "textarea":f=
Cd(g,f);d=Cd(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=tc)}Ed(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(Oa.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=
d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if("style"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||(h={}),h[g]=k[g])}else h||(a||(a=[]),a.push(c,h)),h=k;else"dangerouslySetInnerHTML"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,""+k)):"children"===c?l===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(c,""+k):"suppressContentEditableWarning"!==
c&&"suppressHydrationWarning"!==c&&(Oa.hasOwnProperty(c)?(null!=k&&ha(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&Pb(b)}};Pg=function(a,b,c,d){c!==d&&Pb(b)};var ki="function"===typeof WeakSet?WeakSet:Set,xi="function"===typeof WeakMap?WeakMap:Map,qe=Ma.ReactCurrentDispatcher,Kg=Ma.ReactCurrentOwner,ze=1073741822,Ca=!1,x=null,Y=null,H=0,La=-1,je=!1,p=null,Lc=!1,ke=null,Jc=null,Ic=null,Ba=null,ba=null,I=null,Oc=0,Pc=void 0,w=!1,ca=null,C=0,oa=0,lb=
!1,Uc=null,z=!1,Rc=!1,kb=null,ve=ue(),aa=1073741822-(ve/10|0),jb=aa,Ci=50,Tb=0,we=null,Tc=!1;id=function(a,b,c){switch(b){case "input":td(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=dd(d);e?void 0:n("90");cf(d);td(d,e)}}}break;case "textarea":Jf(a,c);break;case "select":b=c.value,null!=b&&Xa(a,!!c.multiple,b,!1)}};Vb.prototype.render=
function(a){this._defer?void 0:n("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new mb;bh(a,b,null,c,d._onCommit);return d};Vb.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};Vb.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:n("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&
(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?n("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Xg(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};Vb.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};mb.prototype.then=
function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};mb.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?n("191",c):void 0;c()}}};nb.prototype.render=function(a,b){var c=this._internalRoot,d=new mb;b=void 0===b?null:b;null!==b&&d.then(b);xe(a,c,null,d._onCommit);return d};nb.prototype.unmount=function(a){var b=this._internalRoot,
c=new mb;a=void 0===a?null:a;null!==a&&c.then(a);xe(null,b,null,c._onCommit);return c};nb.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new mb;c=void 0===c?null:c;null!==c&&e.then(c);xe(b,d,a,e._onCommit);return e};nb.prototype.createBatch=function(){var a=new Vb(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};
(function(a,b,c){Ye=a;yf=b;Ze=c})(Zg,ah,function(){w||0===oa||(Z(oa,!1),oa=0)});var oh={createPortal:ch,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?n("188"):n("268",Object.keys(a)));a=tf(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){ob(b)?void 0:n("200");return Wc(null,a,b,!0,c)},render:function(a,b,c){ob(b)?void 0:n("200");return Wc(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,
b,c,d){ob(c)?void 0:n("200");null==a||void 0===a._reactInternalFiber?n("38"):void 0;return Wc(a,b,c,!1,d)},unmountComponentAtNode:function(a){ob(a)?void 0:n("40");return a._reactRootContainer?($g(function(){Wc(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return ch.apply(void 0,arguments)},unstable_batchedUpdates:Zg,unstable_interactiveUpdates:ah,flushSync:function(a,b){w?n("187"):void 0;var c=z;z=!0;try{return Tg(a,b)}finally{z=c,Z(1073741823,!1)}},
unstable_createRoot:function(a,b){ob(a)?void 0:n("299","unstable_createRoot");return new nb(a,!0,null!=b&&!0===b.hydrate)},unstable_flushControlled:function(a){var b=z;z=!0;try{Tg(a)}finally{(z=b)||w||Z(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Je,Da,dd,Ae.injectEventPluginsByName,Zc,Qa,function(a){ad(a,xh)},Ve,We,oc,cd]}};(function(a){var b=a.findFiberByHostInstance;return ai(B({},a,{overrideProps:null,currentDispatcherRef:Ma.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=
tf(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:dc,bundleType:0,version:"16.8.2",rendererPackageName:"react-dom"});var ph={default:oh},qh=ph&&oh||ph;return qh.default||qh});

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
