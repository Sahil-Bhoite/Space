(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var f0={exports:{}},Vc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function My(){if(Xv)return Vc;Xv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:f,ref:o!==void 0?o:null,props:c}}return Vc.Fragment=t,Vc.jsx=n,Vc.jsxs=n,Vc}var Wv;function Sy(){return Wv||(Wv=1,f0.exports=My()),f0.exports}var st=Sy(),h0={exports:{}},je={};/**
 * @license React

 *
 *
 */var jv;function by(){if(jv)return je;jv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function M(I,mt,Jt){this.props=I,this.context=mt,this.refs=w,this.updater=Jt||y}M.prototype.isReactComponent={},M.prototype.setState=function(I,mt){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,mt,"setState")},M.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function _(){}_.prototype=M.prototype;function N(I,mt,Jt){this.props=I,this.context=mt,this.refs=w,this.updater=Jt||y}var U=N.prototype=new _;U.constructor=N,b(U,M.prototype),U.isPureReactComponent=!0;var A=Array.isArray,O={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function G(I,mt,Jt,ie,Q,yt){return Jt=yt.ref,{$$typeof:r,type:I,key:mt,ref:Jt!==void 0?Jt:null,props:yt}}function W(I,mt){return G(I.type,mt,void 0,void 0,void 0,I.props)}function T(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function E(I){var mt={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Jt){return mt[Jt]})}var k=/\/+/g;function gt(I,mt){return typeof I=="object"&&I!==null&&I.key!=null?E(""+I.key):mt.toString(36)}function dt(){}function Et(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(dt,dt):(I.status="pending",I.then(function(mt){I.status==="pending"&&(I.status="fulfilled",I.value=mt)},function(mt){I.status==="pending"&&(I.status="rejected",I.reason=mt)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function bt(I,mt,Jt,ie,Q){var yt=typeof I;(yt==="undefined"||yt==="boolean")&&(I=null);var Dt=!1;if(I===null)Dt=!0;else switch(yt){case"bigint":case"string":case"number":Dt=!0;break;case"object":switch(I.$$typeof){case r:case t:Dt=!0;break;case g:return Dt=I._init,bt(Dt(I._payload),mt,Jt,ie,Q)}}if(Dt)return Q=Q(I),Dt=ie===""?"."+gt(I,0):ie,A(Q)?(Jt="",Dt!=null&&(Jt=Dt.replace(k,"$&/")+"/"),bt(Q,mt,Jt,"",function(ce){return ce})):Q!=null&&(T(Q)&&(Q=W(Q,Jt+(Q.key==null||I&&I.key===Q.key?"":(""+Q.key).replace(k,"$&/")+"/")+Dt)),mt.push(Q)),1;Dt=0;var Ut=ie===""?".":ie+":";if(A(I))for(var ae=0;ae<I.length;ae++)ie=I[ae],yt=Ut+gt(ie,ae),Dt+=bt(ie,mt,Jt,yt,Q);else if(ae=x(I),typeof ae=="function")for(I=ae.call(I),ae=0;!(ie=I.next()).done;)ie=ie.value,yt=Ut+gt(ie,ae++),Dt+=bt(ie,mt,Jt,yt,Q);else if(yt==="object"){if(typeof I.then=="function")return bt(Et(I),mt,Jt,ie,Q);throw mt=String(I),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return Dt}function Y(I,mt,Jt){if(I==null)return I;var ie=[],Q=0;return bt(I,ie,"","",function(yt){return mt.call(Jt,yt,Q++)}),ie}function _t(I){if(I._status===-1){var mt=I._result;mt=mt(),mt.then(function(Jt){(I._status===0||I._status===-1)&&(I._status=1,I._result=Jt)},function(Jt){(I._status===0||I._status===-1)&&(I._status=2,I._result=Jt)}),I._status===-1&&(I._status=0,I._result=mt)}if(I._status===1)return I._result.default;throw I._result}var et=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Wt(){}return je.Children={map:Y,forEach:function(I,mt,Jt){Y(I,function(){mt.apply(this,arguments)},Jt)},count:function(I){var mt=0;return Y(I,function(){mt++}),mt},toArray:function(I){return Y(I,function(mt){return mt})||[]},only:function(I){if(!T(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},je.Component=M,je.Fragment=n,je.Profiler=o,je.PureComponent=N,je.StrictMode=a,je.Suspense=m,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,je.act=function(){throw Error("act(...) is not supported in production builds of React.")},je.cache=function(I){return function(){return I.apply(null,arguments)}},je.cloneElement=function(I,mt,Jt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var ie=b({},I.props),Q=I.key,yt=void 0;if(mt!=null)for(Dt in mt.ref!==void 0&&(yt=void 0),mt.key!==void 0&&(Q=""+mt.key),mt)!H.call(mt,Dt)||Dt==="key"||Dt==="__self"||Dt==="__source"||Dt==="ref"&&mt.ref===void 0||(ie[Dt]=mt[Dt]);var Dt=arguments.length-2;if(Dt===1)ie.children=Jt;else if(1<Dt){for(var Ut=Array(Dt),ae=0;ae<Dt;ae++)Ut[ae]=arguments[ae+2];ie.children=Ut}return G(I.type,Q,void 0,void 0,yt,ie)},je.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},je.createElement=function(I,mt,Jt){var ie,Q={},yt=null;if(mt!=null)for(ie in mt.key!==void 0&&(yt=""+mt.key),mt)H.call(mt,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(Q[ie]=mt[ie]);var Dt=arguments.length-2;if(Dt===1)Q.children=Jt;else if(1<Dt){for(var Ut=Array(Dt),ae=0;ae<Dt;ae++)Ut[ae]=arguments[ae+2];Q.children=Ut}if(I&&I.defaultProps)for(ie in Dt=I.defaultProps,Dt)Q[ie]===void 0&&(Q[ie]=Dt[ie]);return G(I,yt,void 0,void 0,null,Q)},je.createRef=function(){return{current:null}},je.forwardRef=function(I){return{$$typeof:h,render:I}},je.isValidElement=T,je.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:_t}},je.memo=function(I,mt){return{$$typeof:p,type:I,compare:mt===void 0?null:mt}},je.startTransition=function(I){var mt=O.T,Jt={};O.T=Jt;try{var ie=I(),Q=O.S;Q!==null&&Q(Jt,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(Wt,et)}catch(yt){et(yt)}finally{O.T=mt}},je.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},je.use=function(I){return O.H.use(I)},je.useActionState=function(I,mt,Jt){return O.H.useActionState(I,mt,Jt)},je.useCallback=function(I,mt){return O.H.useCallback(I,mt)},je.useContext=function(I){return O.H.useContext(I)},je.useDebugValue=function(){},je.useDeferredValue=function(I,mt){return O.H.useDeferredValue(I,mt)},je.useEffect=function(I,mt){return O.H.useEffect(I,mt)},je.useId=function(){return O.H.useId()},je.useImperativeHandle=function(I,mt,Jt){return O.H.useImperativeHandle(I,mt,Jt)},je.useInsertionEffect=function(I,mt){return O.H.useInsertionEffect(I,mt)},je.useLayoutEffect=function(I,mt){return O.H.useLayoutEffect(I,mt)},je.useMemo=function(I,mt){return O.H.useMemo(I,mt)},je.useOptimistic=function(I,mt){return O.H.useOptimistic(I,mt)},je.useReducer=function(I,mt,Jt){return O.H.useReducer(I,mt,Jt)},je.useRef=function(I){return O.H.useRef(I)},je.useState=function(I){return O.H.useState(I)},je.useSyncExternalStore=function(I,mt,Jt){return O.H.useSyncExternalStore(I,mt,Jt)},je.useTransition=function(){return O.H.useTransition()},je.version="19.0.0",je}var qv;function qm(){return qv||(qv=1,h0.exports=by()),h0.exports}var we=qm(),d0={exports:{}},kc={},m0={exports:{}},p0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function Ey(){return Yv||(Yv=1,function(r){function t(Y,_t){var et=Y.length;Y.push(_t);t:for(;0<et;){var Wt=et-1>>>1,I=Y[Wt];if(0<o(I,_t))Y[Wt]=_t,Y[et]=I,et=Wt;else break t}}function n(Y){return Y.length===0?null:Y[0]}function a(Y){if(Y.length===0)return null;var _t=Y[0],et=Y.pop();if(et!==_t){Y[0]=et;t:for(var Wt=0,I=Y.length,mt=I>>>1;Wt<mt;){var Jt=2*(Wt+1)-1,ie=Y[Jt],Q=Jt+1,yt=Y[Q];if(0>o(ie,et))Q<I&&0>o(yt,ie)?(Y[Wt]=yt,Y[Q]=et,Wt=Q):(Y[Wt]=ie,Y[Jt]=et,Wt=Jt);else if(Q<I&&0>o(yt,et))Y[Wt]=yt,Y[Q]=et,Wt=Q;else break t}}return _t}function o(Y,_t){var et=Y.sortIndex-_t.sortIndex;return et!==0?et:Y.id-_t.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,v=null,x=3,y=!1,b=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(Y){for(var _t=n(p);_t!==null;){if(_t.callback===null)a(p);else if(_t.startTime<=Y)a(p),_t.sortIndex=_t.expirationTime,t(m,_t);else break;_t=n(p)}}function A(Y){if(w=!1,U(Y),!b)if(n(m)!==null)b=!0,Et();else{var _t=n(p);_t!==null&&bt(A,_t.startTime-Y)}}var O=!1,H=-1,G=5,W=-1;function T(){return!(r.unstable_now()-W<G)}function E(){if(O){var Y=r.unstable_now();W=Y;var _t=!0;try{t:{b=!1,w&&(w=!1,_(H),H=-1),y=!0;var et=x;try{e:{for(U(Y),v=n(m);v!==null&&!(v.expirationTime>Y&&T());){var Wt=v.callback;if(typeof Wt=="function"){v.callback=null,x=v.priorityLevel;var I=Wt(v.expirationTime<=Y);if(Y=r.unstable_now(),typeof I=="function"){v.callback=I,U(Y),_t=!0;break e}v===n(m)&&a(m),U(Y)}else a(m);v=n(m)}if(v!==null)_t=!0;else{var mt=n(p);mt!==null&&bt(A,mt.startTime-Y),_t=!1}}break t}finally{v=null,x=et,y=!1}_t=void 0}}finally{_t?k():O=!1}}}var k;if(typeof N=="function")k=function(){N(E)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,dt=gt.port2;gt.port1.onmessage=E,k=function(){dt.postMessage(null)}}else k=function(){M(E,0)};function Et(){O||(O=!0,k())}function bt(Y,_t){H=M(function(){Y(r.unstable_now())},_t)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_continueExecution=function(){b||y||(b=!0,Et())},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return n(m)},r.unstable_next=function(Y){switch(x){case 1:case 2:case 3:var _t=3;break;default:_t=x}var et=x;x=_t;try{return Y()}finally{x=et}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Y,_t){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var et=x;x=Y;try{return _t()}finally{x=et}},r.unstable_scheduleCallback=function(Y,_t,et){var Wt=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?Wt+et:Wt):et=Wt,Y){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=et+I,Y={id:g++,callback:_t,priorityLevel:Y,startTime:et,expirationTime:I,sortIndex:-1},et>Wt?(Y.sortIndex=et,t(p,Y),n(m)===null&&Y===n(p)&&(w?(_(H),H=-1):w=!0,bt(A,et-Wt))):(Y.sortIndex=I,t(m,Y),b||y||(b=!0,Et())),Y},r.unstable_shouldYield=T,r.unstable_wrapCallback=function(Y){var _t=x;return function(){var et=x;x=_t;try{return Y.apply(this,arguments)}finally{x=et}}}}(p0)),p0}var Zv;function wy(){return Zv||(Zv=1,m0.exports=Ey()),m0.exports}var g0={exports:{}},Ei={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function Ty(){if(Kv)return Ei;Kv=1;var r=qm();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ei.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ei.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Ei.flushSync=function(m){var p=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=g,a.d.f()}},Ei.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Ei.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Ei.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&a.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ei.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Ei.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ei.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Ei.requestFormReset=function(m){a.d.r(m)},Ei.unstable_batchedUpdates=function(m,p){return m(p)},Ei.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Ei.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ei.version="19.0.0",Ei}var Qv;function Ay(){if(Qv)return g0.exports;Qv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),g0.exports=Ty(),g0.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function Cy(){if(Jv)return kc;Jv=1;var r=wy(),t=qm(),n=Ay();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),A=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var G=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===G?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case h:return"Portal";case g:return"Profiler";case p:return"StrictMode";case w:return"Suspense";case M:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case b:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return i=e.displayName||null,i!==null?i:W(e.type)||"Memo";case N:i=e._payload,e=e._init;try{return W(e(i))}catch{}}return null}var T=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=Object.assign,k,gt;function dt(e){if(k===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||"",gt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+e+gt}var Et=!1;function bt(e,i){if(!e||Et)return"";Et=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Gt=function(){throw Error()};if(Object.defineProperty(Gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Gt,[])}catch(wt){var pt=wt}Reflect.construct(e,[],Gt)}else{try{Gt.call()}catch(wt){pt=wt}e.call(Gt.prototype)}}else{try{throw Error()}catch(wt){pt=wt}(Gt=e())&&typeof Gt.catch=="function"&&Gt.catch(function(){})}}catch(wt){if(wt&&pt&&typeof wt.stack=="string")return[wt.stack,pt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],P=d[1];if(S&&P){var B=S.split(`
`),Z=P.split(`
`);for(u=l=0;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;for(;u<Z.length&&!Z[u].includes("DetermineComponentFrameRoot");)u++;if(l===B.length||u===Z.length)for(l=B.length-1,u=Z.length-1;1<=l&&0<=u&&B[l]!==Z[u];)u--;for(;1<=l&&0<=u;l--,u--)if(B[l]!==Z[u]){if(l!==1||u!==1)do if(l--,u--,0>u||B[l]!==Z[u]){var Tt=`
`+B[l].replace(" at new "," at ");return e.displayName&&Tt.includes("<anonymous>")&&(Tt=Tt.replace("<anonymous>",e.displayName)),Tt}while(1<=l&&0<=u);break}}}finally{Et=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?dt(s):""}function Y(e){switch(e.tag){case 26:case 27:case 5:return dt(e.type);case 16:return dt("Lazy");case 13:return dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return e=bt(e.type,!1),e;case 11:return e=bt(e.type.render,!1),e;case 1:return e=bt(e.type,!0),e;default:return""}}function _t(e){try{var i="";do i+=Y(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function et(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function Wt(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function I(e){if(et(e)!==e)throw Error(a(188))}function mt(e){var i=e.alternate;if(!i){if(i=et(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return I(u),e;if(d===l)return I(u),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=u,l=d;else{for(var S=!1,P=u.child;P;){if(P===s){S=!0,s=u,l=d;break}if(P===l){S=!0,l=u,s=d;break}P=P.sibling}if(!S){for(P=d.child;P;){if(P===s){S=!0,s=d,l=u;break}if(P===l){S=!0,l=d,s=u;break}P=P.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function Jt(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=Jt(e),i!==null)return i;e=e.sibling}return null}var ie=Array.isArray,Q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},Dt=[],Ut=-1;function ae(e){return{current:e}}function ce(e){0>Ut||(e.current=Dt[Ut],Dt[Ut]=null,Ut--)}function he(e,i){Ut++,Dt[Ut]=e.current,e.current=i}var Ye=ae(null),Qe=ae(null),Ge=ae(null),V=ae(null);function Hn(e,i){switch(he(Ge,i),he(Qe,e),he(Ye,null),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?xv(i):0;break;default:if(e=e===8?i.parentNode:i,i=e.tagName,e=e.namespaceURI)e=xv(e),i=yv(e,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ce(Ye),he(Ye,i)}function Ve(){ce(Ye),ce(Qe),ce(Ge)}function Fe(e){e.memoizedState!==null&&he(V,e);var i=Ye.current,s=yv(i,e.type);i!==s&&(he(Qe,e),he(Ye,s))}function oe(e){Qe.current===e&&(ce(Ye),ce(Qe)),V.current===e&&(ce(V),Ic._currentValue=yt)}var sn=Object.prototype.hasOwnProperty,ve=r.unstable_scheduleCallback,z=r.unstable_cancelCallback,C=r.unstable_shouldYield,lt=r.unstable_requestPaint,St=r.unstable_now,zt=r.unstable_getCurrentPriorityLevel,At=r.unstable_ImmediatePriority,Ae=r.unstable_UserBlockingPriority,le=r.unstable_NormalPriority,Se=r.unstable_LowPriority,Je=r.unstable_IdlePriority,Qt=r.log,be=r.unstable_setDisableYieldValue,Oe=null,Ce=null;function J(e){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Oe,e,void 0,(e.current.flags&128)===128)}catch{}}function Bt(e){if(typeof Qt=="function"&&be(e),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(Oe,e)}catch{}}var Vt=Math.clz32?Math.clz32:Ht,de=Math.log,F=Math.LN2;function Ht(e){return e>>>=0,e===0?32:31-(de(e)/F|0)|0}var ut=128,xt=4194304;function kt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,i){var s=e.pendingLanes;if(s===0)return 0;var l=0,u=e.suspendedLanes,d=e.pingedLanes,S=e.warmLanes;e=e.finishedLanes!==0;var P=s&134217727;return P!==0?(s=P&~u,s!==0?l=kt(s):(d&=P,d!==0?l=kt(d):e||(S=P&~S,S!==0&&(l=kt(S))))):(P=s&~u,P!==0?l=kt(P):d!==0?l=kt(d):e||(S=s&~S,S!==0&&(l=kt(S)))),l===0?0:i!==0&&i!==l&&(i&u)===0&&(u=l&-l,S=i&-i,u>=S||u===32&&(S&4194176)!==0)?i:l}function ye(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function He(e,i){switch(e){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var e=ut;return ut<<=1,(ut&4194176)===0&&(ut=128),e}function ke(){var e=xt;return xt<<=1,(xt&62914560)===0&&(xt=4194304),e}function On(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Ln(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $a(e,i,s,l,u,d){var S=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var P=e.entanglements,B=e.expirationTimes,Z=e.hiddenUpdates;for(s=S&~s;0<s;){var Tt=31-Vt(s),Gt=1<<Tt;P[Tt]=0,B[Tt]=-1;var pt=Z[Tt];if(pt!==null)for(Z[Tt]=null,Tt=0;Tt<pt.length;Tt++){var wt=pt[Tt];wt!==null&&(wt.lane&=-536870913)}s&=~Gt}l!==0&&Pa(e,l,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function Pa(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Vt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194218}function gi(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Vt(s),u=1<<l;u&i|e[l]&i&&(e[l]|=i),s&=~u}}function Ua(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ga(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Bv(e.type))}function Ue(e,i){var s=Q.p;try{return Q.p=e,i()}finally{Q.p=s}}var jn=Math.random().toString(36).slice(2),yn="__reactFiber$"+jn,zn="__reactProps$"+jn,zi="__reactContainer$"+jn,Na="__reactEvents$"+jn,Ii="__reactListeners$"+jn,Bs="__reactHandles$"+jn,ts="__reactResources$"+jn,va="__reactMarker$"+jn;function es(e){delete e[yn],delete e[zn],delete e[Na],delete e[Ii],delete e[Bs]}function Yi(e){var i=e[yn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[zi]||s[yn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=bv(e);e!==null;){if(s=e[yn])return s;e=bv(e)}return i}e=s,s=e.parentNode}return null}function D(e){if(e=e[yn]||e[zi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function K(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function ht(e){var i=e[ts];return i||(i=e[ts]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ot(e){e[va]=!0}var tt=new Set,Yt={};function se(e,i){_e(e,i),_e(e+"Capture",i)}function _e(e,i){for(Yt[e]=i,e=0;e<i.length;e++)tt.add(i[e])}var fe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),j={},it={};function at(e){return sn.call(it,e)?!0:sn.call(j,e)?!1:Ie.test(e)?it[e]=!0:(j[e]=!0,!1)}function Nt(e,i,s){if(at(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function R(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function ct(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mt(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function te(e){var i=Mt(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,d=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(S){l=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(S){l=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function X(e){e._valueTracker||(e._valueTracker=te(e))}function ee(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Mt(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $t=/[\n"\\]/g;function Pt(e){return e.replace($t,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ct(e,i,s,l,u,d,S,P){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+rt(i)):e.value!==""+rt(i)&&(e.value=""+rt(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?re(e,S,rt(i)):s!=null?re(e,S,rt(s)):l!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),P!=null&&typeof P!="function"&&typeof P!="symbol"&&typeof P!="boolean"?e.name=""+rt(P):e.removeAttribute("name")}function Lt(e,i,s,l,u,d,S,P){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;s=s!=null?""+rt(s):"",i=i!=null?""+rt(i):s,P||i===e.value||(e.value=i),e.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=P?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function re(e,i,s){i==="number"&&Kt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function me(e,i,s,l){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&l&&(e[s].defaultSelected=!0)}else{for(s=""+rt(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Zt(e,i,s){if(i!=null&&(i=""+rt(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+rt(s):""}function Xt(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ie(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=rt(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function It(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Me=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pe(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Me.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Ee(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&pe(e,u,l)}else for(var d in i)i.hasOwnProperty(d)&&pe(e,d,i[d])}function xe(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $e(e){return fn.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Mn=null;function mn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vn=null,rn=null;function Dn(e){var i=D(e);if(i&&(e=i.stateNode)){var s=e[zn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ct(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Pt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var u=l[zn]||null;if(!u)throw Error(a(90));Ct(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&ee(l)}break t;case"textarea":Zt(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&me(e,!!s.multiple,i,!1)}}}var Gn=!1;function Bi(e,i,s){if(Gn)return e(i,s);Gn=!0;try{var l=e(i);return l}finally{if(Gn=!1,(vn!==null||rn!==null)&&(rf(),vn&&(i=vn,e=rn,rn=vn=null,Dn(i),e)))for(i=0;i<e.length;i++)Dn(e[i])}}function La(e,i){var s=e.stateNode;if(s===null)return null;var l=s[zn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var sa=!1;if(fe)try{var ns={};Object.defineProperty(ns,"passive",{get:function(){sa=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{sa=!1}var Fi=null,wr=null,Tr=null;function Mo(){if(Tr)return Tr;var e,i=wr,s=i.length,l,u="value"in Fi?Fi.value:Fi.textContent,d=u.length;for(e=0;e<s&&i[e]===u[e];e++);var S=s-e;for(l=1;l<=S&&i[s-l]===u[d-l];l++);return Tr=u.slice(e,1<l?1-l:void 0)}function Ar(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function vu(){return!1}function Mi(e){function i(s,l,u,d,S){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var P in e)e.hasOwnProperty(P)&&(s=e[P],this[P]=s?s(d):d[P]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Cr:vu,this.isPropagationStopped=vu,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=Mi(is),Rr=E({},is,{view:0,detail:0}),Sh=Mi(Rr),Wl,bo,Dr,Eo=E({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ur,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dr&&(Dr&&e.type==="mousemove"?(Wl=e.screenX-Dr.screenX,bo=e.screenY-Dr.screenY):bo=Wl=0,Dr=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:bo}}),Pr=Mi(Eo),wo=E({},Eo,{dataTransfer:0}),jl=Mi(wo),ql=E({},Rr,{relatedTarget:0}),Fs=Mi(ql),_u=E({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Yl=Mi(_u),Oa=E({},is,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bh=Mi(Oa),Zl=E({},is,{data:0}),To=Mi(Zl),Ao={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Co={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ql(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Co[e])?!!i[e]:!1}function Ur(){return Ql}var xu=E({},Rr,{key:function(e){if(e.key){var i=Ao[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kl[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ur,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yu=Mi(xu),Mu=E({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jl=Mi(Mu),Su=E({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ur}),Eh=Mi(Su),bu=E({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),wh=Mi(bu),Th=E({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ro=Mi(Th),Eu=E({},is,{newState:0,oldState:0}),wu=Mi(Eu),Tu=[9,13,27,32],as=fe&&"CompositionEvent"in window,za=null;fe&&"documentMode"in document&&(za=document.documentMode);var $l=fe&&"TextEvent"in window&&!za,Do=fe&&(!as||za&&8<za&&11>=za),Po=" ",tc=!1;function Uo(e,i){switch(e){case"keyup":return Tu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ah(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ss=!1;function Au(e,i){switch(e){case"compositionend":return Ah(i);case"keypress":return i.which!==32?null:(tc=!0,Po);case"textInput":return e=i.data,e===Po&&tc?null:e;default:return null}}function Ch(e,i){if(ss)return e==="compositionend"||!as&&Uo(e,i)?(e=Mo(),Tr=wr=Fi=null,ss=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Do&&i.locale!=="ko"?null:i.data;default:return null}}var Rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Rh[e.type]:i==="textarea"}function No(e,i,s,l){vn?rn?rn.push(l):rn=[l]:vn=l,i=ff(i,"onChange"),0<i.length&&(s=new So("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var rs=null,Hs=null;function Lo(e){mv(e,0)}function Nr(e){var i=K(e);if(ee(i))return e}function ec(e,i){if(e==="change")return i}var Lr=!1;if(fe){var Oo;if(fe){var _a="oninput"in document;if(!_a){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),_a=typeof Ru.oninput=="function"}Oo=_a}else Oo=!1;Lr=Oo&&(!document.documentMode||9<document.documentMode)}function Or(){rs&&(rs.detachEvent("onpropertychange",nc),Hs=rs=null)}function nc(e){if(e.propertyName==="value"&&Nr(Hs)){var i=[];No(i,Hs,e,mn(e)),Bi(Lo,i)}}function Du(e,i,s){e==="focusin"?(Or(),rs=i,Hs=s,rs.attachEvent("onpropertychange",nc)):e==="focusout"&&Or()}function Pu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nr(Hs)}function Dh(e,i){if(e==="click")return Nr(i)}function Uu(e,i){if(e==="input"||e==="change")return Nr(i)}function ic(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Ri=typeof Object.is=="function"?Object.is:ic;function zr(e,i){if(Ri(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!sn.call(i,u)||!Ri(e[u],i[u]))return!1}return!0}function zo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ac(e,i){var s=zo(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=zo(s)}}function Ir(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Ir(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Br(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Kt(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Kt(e.document)}return i}function Fr(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function sc(e,i){var s=Br(i);i=e.focusedElem;var l=e.selectionRange;if(s!==i&&i&&i.ownerDocument&&Ir(i.ownerDocument.documentElement,i)){if(l!==null&&Fr(i)){if(e=l.start,s=l.end,s===void 0&&(s=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(s,i.value.length);else if(s=(e=i.ownerDocument||document)&&e.defaultView||window,s.getSelection){s=s.getSelection();var u=i.textContent.length,d=Math.min(l.start,u);l=l.end===void 0?d:Math.min(l.end,u),!s.extend&&d>l&&(u=l,l=d,d=u),u=ac(i,d);var S=ac(i,l);u&&S&&(s.rangeCount!==1||s.anchorNode!==u.node||s.anchorOffset!==u.offset||s.focusNode!==S.node||s.focusOffset!==S.offset)&&(e=e.createRange(),e.setStart(u.node,u.offset),s.removeAllRanges(),d>l?(s.addRange(e),s.extend(S.node,S.offset)):(e.setEnd(S.node,S.offset),s.addRange(e)))}}for(e=[],s=i;s=s.parentNode;)s.nodeType===1&&e.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)s=e[i],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var Io=fe&&"documentMode"in document&&11>=document.documentMode,os=null,ra=null,ls=null,Bo=!1;function rc(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Bo||os==null||os!==Kt(l)||(l=os,"selectionStart"in l&&Fr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ls&&zr(ls,l)||(ls=l,l=ff(ra,"onSelect"),0<l.length&&(i=new So("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=os)))}function Ia(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Gs={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},Vs={},Nu={};fe&&(Nu=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function cs(e){if(Vs[e])return Vs[e];if(!Gs[e])return e;var i=Gs[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Nu)return Vs[e]=i[s];return e}var Ph=cs("animationend"),Fo=cs("animationiteration"),xa=cs("animationstart"),Uh=cs("transitionrun"),oc=cs("transitionstart"),Lu=cs("transitioncancel"),Ho=cs("transitionend"),lc=new Map,Hr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Hi(e,i){lc.set(e,i),se(i,[e])}var Di=[],us=0,Gr=0;function Vr(){for(var e=us,i=Gr=us=0;i<e;){var s=Di[i];Di[i++]=null;var l=Di[i];Di[i++]=null;var u=Di[i];Di[i++]=null;var d=Di[i];if(Di[i++]=null,l!==null&&u!==null){var S=l.pending;S===null?u.next=u:(u.next=S.next,S.next=u),l.pending=u}d!==0&&Vo(s,u,d)}}function cc(e,i,s,l){Di[us++]=e,Di[us++]=i,Di[us++]=s,Di[us++]=l,Gr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Go(e,i,s,l){return cc(e,i,s,l),ks(e)}function ya(e,i){return cc(e,null,null,i),ks(e)}function Vo(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var u=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;u&&i!==null&&e.tag===3&&(d=e.stateNode,u=31-Vt(s),d=d.hiddenUpdates,e=d[u],e===null?d[u]=[i]:e.push(i),i.lane=s|536870912)}function ks(e){if(50<Dc)throw Dc=0,Od=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ba={},Fa=new WeakMap;function Gi(e,i){if(typeof e=="object"&&e!==null){var s=Fa.get(e);return s!==void 0?s:(i={value:e,source:i,stack:_t(i)},Fa.set(e,i),i)}return{value:e,source:i,stack:_t(i)}}var Ha=[],Ga=0,fs=null,Xs=0,Vi=[],ki=0,hs=null,Xi=1,Zi="";function Va(e,i){Ha[Ga++]=Xs,Ha[Ga++]=fs,fs=e,Xs=i}function Nh(e,i,s){Vi[ki++]=Xi,Vi[ki++]=Zi,Vi[ki++]=hs,hs=e;var l=Xi;e=Zi;var u=32-Vt(l)-1;l&=~(1<<u),s+=1;var d=32-Vt(i)+u;if(30<d){var S=u-u%5;d=(l&(1<<S)-1).toString(32),l>>=S,u-=S,Xi=1<<32-Vt(i)+u|s<<u|l,Zi=d+e}else Xi=1<<d|s<<u|l,Zi=e}function kr(e){e.return!==null&&(Va(e,1),Nh(e,1,0))}function ko(e){for(;e===fs;)fs=Ha[--Ga],Ha[Ga]=null,Xs=Ha[--Ga],Ha[Ga]=null;for(;e===hs;)hs=Vi[--ki],Vi[ki]=null,Zi=Vi[--ki],Vi[ki]=null,Xi=Vi[--ki],Vi[ki]=null}var Kn=null,ti=null,ln=!1,Pi=null,Ki=!1,uc=Error(a(519));function Ma(e){var i=Error(a(418,""));throw tn(Gi(i,e)),uc}function Rt(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[yn]=e,i[zn]=l,s){case"dialog":cn("cancel",i),cn("close",i);break;case"iframe":case"object":case"embed":cn("load",i);break;case"video":case"audio":for(s=0;s<Uc.length;s++)cn(Uc[s],i);break;case"source":cn("error",i);break;case"img":case"image":case"link":cn("error",i),cn("load",i);break;case"details":cn("toggle",i);break;case"input":cn("invalid",i),Lt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),X(i);break;case"select":cn("invalid",i);break;case"textarea":cn("invalid",i),Xt(i,l.value,l.defaultValue,l.children),X(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||_v(i.textContent,s)?(l.popover!=null&&(cn("beforetoggle",i),cn("toggle",i)),l.onScroll!=null&&cn("scroll",i),l.onScrollEnd!=null&&cn("scrollend",i),l.onClick!=null&&(i.onclick=hf),i=!0):i=!1,i||Ma(e)}function Ft(e){for(Kn=e.return;Kn;)switch(Kn.tag){case 3:case 27:Ki=!0;return;case 5:case 13:Ki=!1;return;default:Kn=Kn.return}}function ue(e){if(e!==Kn)return!1;if(!ln)return Ft(e),ln=!0,!1;var i=!1,s;if((s=e.tag!==3&&e.tag!==27)&&((s=e.tag===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Jd(e.type,e.memoizedProps)),s=!s),s&&(i=!0),i&&ti&&Ma(e),Ft(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){ti=ba(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}ti=null}}else ti=Kn?ba(e.stateNode.nextSibling):null;return!0}function Xe(){ti=Kn=null,ln=!1}function tn(e){Pi===null?Pi=[e]:Pi.push(e)}var Sn=Error(a(460)),Vn=Error(a(474)),Ui={then:function(){}};function ka(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Si(){}function Xa(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Si,Si),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===Sn?Error(a(483)):e;default:if(typeof i.status=="string")i.then(Si,Si);else{if(e=Un,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===Sn?Error(a(483)):e}throw In=i,Sn}}var In=null;function vi(){if(In===null)throw Error(a(459));var e=In;return In=null,e}var Wi=null,fc=0;function Ou(e){var i=fc;return fc+=1,Wi===null&&(Wi=[]),Xa(Wi,e,i)}function hc(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function zu(e,i){throw i.$$typeof===c?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function pp(e){var i=e._init;return i(e._payload)}function gp(e){function i(nt,q){if(e){var ft=nt.deletions;ft===null?(nt.deletions=[q],nt.flags|=16):ft.push(q)}}function s(nt,q){if(!e)return null;for(;q!==null;)i(nt,q),q=q.sibling;return null}function l(nt){for(var q=new Map;nt!==null;)nt.key!==null?q.set(nt.key,nt):q.set(nt.index,nt),nt=nt.sibling;return q}function u(nt,q){return nt=nr(nt,q),nt.index=0,nt.sibling=null,nt}function d(nt,q,ft){return nt.index=ft,e?(ft=nt.alternate,ft!==null?(ft=ft.index,ft<q?(nt.flags|=33554434,q):ft):(nt.flags|=33554434,q)):(nt.flags|=1048576,q)}function S(nt){return e&&nt.alternate===null&&(nt.flags|=33554434),nt}function P(nt,q,ft,Ot){return q===null||q.tag!==6?(q=Ad(ft,nt.mode,Ot),q.return=nt,q):(q=u(q,ft),q.return=nt,q)}function B(nt,q,ft,Ot){var Te=ft.type;return Te===m?Tt(nt,q,ft.props.children,Ot,ft.key):q!==null&&(q.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===N&&pp(Te)===q.type)?(q=u(q,ft.props),hc(q,ft),q.return=nt,q):(q=tf(ft.type,ft.key,ft.props,null,nt.mode,Ot),hc(q,ft),q.return=nt,q)}function Z(nt,q,ft,Ot){return q===null||q.tag!==4||q.stateNode.containerInfo!==ft.containerInfo||q.stateNode.implementation!==ft.implementation?(q=Cd(ft,nt.mode,Ot),q.return=nt,q):(q=u(q,ft.children||[]),q.return=nt,q)}function Tt(nt,q,ft,Ot,Te){return q===null||q.tag!==7?(q=$r(ft,nt.mode,Ot,Te),q.return=nt,q):(q=u(q,ft),q.return=nt,q)}function Gt(nt,q,ft){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Ad(""+q,nt.mode,ft),q.return=nt,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case f:return ft=tf(q.type,q.key,q.props,null,nt.mode,ft),hc(ft,q),ft.return=nt,ft;case h:return q=Cd(q,nt.mode,ft),q.return=nt,q;case N:var Ot=q._init;return q=Ot(q._payload),Gt(nt,q,ft)}if(ie(q)||H(q))return q=$r(q,nt.mode,ft,null),q.return=nt,q;if(typeof q.then=="function")return Gt(nt,Ou(q),ft);if(q.$$typeof===y)return Gt(nt,Qu(nt,q),ft);zu(nt,q)}return null}function pt(nt,q,ft,Ot){var Te=q!==null?q.key:null;if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return Te!==null?null:P(nt,q,""+ft,Ot);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case f:return ft.key===Te?B(nt,q,ft,Ot):null;case h:return ft.key===Te?Z(nt,q,ft,Ot):null;case N:return Te=ft._init,ft=Te(ft._payload),pt(nt,q,ft,Ot)}if(ie(ft)||H(ft))return Te!==null?null:Tt(nt,q,ft,Ot,null);if(typeof ft.then=="function")return pt(nt,q,Ou(ft),Ot);if(ft.$$typeof===y)return pt(nt,q,Qu(nt,ft),Ot);zu(nt,ft)}return null}function wt(nt,q,ft,Ot,Te){if(typeof Ot=="string"&&Ot!==""||typeof Ot=="number"||typeof Ot=="bigint")return nt=nt.get(ft)||null,P(q,nt,""+Ot,Te);if(typeof Ot=="object"&&Ot!==null){switch(Ot.$$typeof){case f:return nt=nt.get(Ot.key===null?ft:Ot.key)||null,B(q,nt,Ot,Te);case h:return nt=nt.get(Ot.key===null?ft:Ot.key)||null,Z(q,nt,Ot,Te);case N:var an=Ot._init;return Ot=an(Ot._payload),wt(nt,q,ft,Ot,Te)}if(ie(Ot)||H(Ot))return nt=nt.get(ft)||null,Tt(q,nt,Ot,Te,null);if(typeof Ot.then=="function")return wt(nt,q,ft,Ou(Ot),Te);if(Ot.$$typeof===y)return wt(nt,q,ft,Qu(q,Ot),Te);zu(q,Ot)}return null}function De(nt,q,ft,Ot){for(var Te=null,an=null,Ne=q,Be=q=0,di=null;Ne!==null&&Be<ft.length;Be++){Ne.index>Be?(di=Ne,Ne=null):di=Ne.sibling;var pn=pt(nt,Ne,ft[Be],Ot);if(pn===null){Ne===null&&(Ne=di);break}e&&Ne&&pn.alternate===null&&i(nt,Ne),q=d(pn,q,Be),an===null?Te=pn:an.sibling=pn,an=pn,Ne=di}if(Be===ft.length)return s(nt,Ne),ln&&Va(nt,Be),Te;if(Ne===null){for(;Be<ft.length;Be++)Ne=Gt(nt,ft[Be],Ot),Ne!==null&&(q=d(Ne,q,Be),an===null?Te=Ne:an.sibling=Ne,an=Ne);return ln&&Va(nt,Be),Te}for(Ne=l(Ne);Be<ft.length;Be++)di=wt(Ne,nt,Be,ft[Be],Ot),di!==null&&(e&&di.alternate!==null&&Ne.delete(di.key===null?Be:di.key),q=d(di,q,Be),an===null?Te=di:an.sibling=di,an=di);return e&&Ne.forEach(function(cr){return i(nt,cr)}),ln&&Va(nt,Be),Te}function We(nt,q,ft,Ot){if(ft==null)throw Error(a(151));for(var Te=null,an=null,Ne=q,Be=q=0,di=null,pn=ft.next();Ne!==null&&!pn.done;Be++,pn=ft.next()){Ne.index>Be?(di=Ne,Ne=null):di=Ne.sibling;var cr=pt(nt,Ne,pn.value,Ot);if(cr===null){Ne===null&&(Ne=di);break}e&&Ne&&cr.alternate===null&&i(nt,Ne),q=d(cr,q,Be),an===null?Te=cr:an.sibling=cr,an=cr,Ne=di}if(pn.done)return s(nt,Ne),ln&&Va(nt,Be),Te;if(Ne===null){for(;!pn.done;Be++,pn=ft.next())pn=Gt(nt,pn.value,Ot),pn!==null&&(q=d(pn,q,Be),an===null?Te=pn:an.sibling=pn,an=pn);return ln&&Va(nt,Be),Te}for(Ne=l(Ne);!pn.done;Be++,pn=ft.next())pn=wt(Ne,nt,Be,pn.value,Ot),pn!==null&&(e&&pn.alternate!==null&&Ne.delete(pn.key===null?Be:pn.key),q=d(pn,q,Be),an===null?Te=pn:an.sibling=pn,an=pn);return e&&Ne.forEach(function(yy){return i(nt,yy)}),ln&&Va(nt,Be),Te}function Zn(nt,q,ft,Ot){if(typeof ft=="object"&&ft!==null&&ft.type===m&&ft.key===null&&(ft=ft.props.children),typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case f:t:{for(var Te=ft.key;q!==null;){if(q.key===Te){if(Te=ft.type,Te===m){if(q.tag===7){s(nt,q.sibling),Ot=u(q,ft.props.children),Ot.return=nt,nt=Ot;break t}}else if(q.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===N&&pp(Te)===q.type){s(nt,q.sibling),Ot=u(q,ft.props),hc(Ot,ft),Ot.return=nt,nt=Ot;break t}s(nt,q);break}else i(nt,q);q=q.sibling}ft.type===m?(Ot=$r(ft.props.children,nt.mode,Ot,ft.key),Ot.return=nt,nt=Ot):(Ot=tf(ft.type,ft.key,ft.props,null,nt.mode,Ot),hc(Ot,ft),Ot.return=nt,nt=Ot)}return S(nt);case h:t:{for(Te=ft.key;q!==null;){if(q.key===Te)if(q.tag===4&&q.stateNode.containerInfo===ft.containerInfo&&q.stateNode.implementation===ft.implementation){s(nt,q.sibling),Ot=u(q,ft.children||[]),Ot.return=nt,nt=Ot;break t}else{s(nt,q);break}else i(nt,q);q=q.sibling}Ot=Cd(ft,nt.mode,Ot),Ot.return=nt,nt=Ot}return S(nt);case N:return Te=ft._init,ft=Te(ft._payload),Zn(nt,q,ft,Ot)}if(ie(ft))return De(nt,q,ft,Ot);if(H(ft)){if(Te=H(ft),typeof Te!="function")throw Error(a(150));return ft=Te.call(ft),We(nt,q,ft,Ot)}if(typeof ft.then=="function")return Zn(nt,q,Ou(ft),Ot);if(ft.$$typeof===y)return Zn(nt,q,Qu(nt,ft),Ot);zu(nt,ft)}return typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint"?(ft=""+ft,q!==null&&q.tag===6?(s(nt,q.sibling),Ot=u(q,ft),Ot.return=nt,nt=Ot):(s(nt,q),Ot=Ad(ft,nt.mode,Ot),Ot.return=nt,nt=Ot),S(nt)):s(nt,q)}return function(nt,q,ft,Ot){try{fc=0;var Te=Zn(nt,q,ft,Ot);return Wi=null,Te}catch(Ne){if(Ne===Sn)throw Ne;var an=ua(29,Ne,null,nt.mode);return an.lanes=Ot,an.return=nt,an}finally{}}}var Xr=gp(!0),vp=gp(!1),Xo=ae(null),Iu=ae(0);function _p(e,i){e=bs,he(Iu,e),he(Xo,i),bs=e|i.baseLanes}function Lh(){he(Iu,bs),he(Xo,Xo.current)}function Oh(){bs=Iu.current,ce(Xo),ce(Iu)}var oa=ae(null),Wa=null;function Ws(e){var i=e.alternate;he(si,si.current&1),he(oa,e),Wa===null&&(i===null||Xo.current!==null||i.memoizedState!==null)&&(Wa=e)}function xp(e){if(e.tag===22){if(he(si,si.current),he(oa,e),Wa===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Wa=e)}}else js()}function js(){he(si,si.current),he(oa,oa.current)}function ds(e){ce(oa),Wa===e&&(Wa=null),ce(si)}var si=ae(0);function Bu(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ox=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},lx=r.unstable_scheduleCallback,cx=r.unstable_NormalPriority,ri={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zh(){return{controller:new ox,data:new Map,refCount:0}}function dc(e){e.refCount--,e.refCount===0&&lx(cx,function(){e.controller.abort()})}var mc=null,Ih=0,Wo=0,jo=null;function ux(e,i){if(mc===null){var s=mc=[];Ih=0,Wo=kd(),jo={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Ih++,i.then(yp,yp),i}function yp(){if(--Ih===0&&mc!==null){jo!==null&&(jo.status="fulfilled");var e=mc;mc=null,Wo=0,jo=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function fx(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var Mp=T.S;T.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&ux(e,i),Mp!==null&&Mp(e,i)};var Wr=ae(null);function Bh(){var e=Wr.current;return e!==null?e:Un.pooledCache}function Fu(e,i){i===null?he(Wr,Wr.current):he(Wr,i.pool)}function Sp(){var e=Bh();return e===null?null:{parent:ri._currentValue,pool:e}}var qs=0,en=null,bn=null,ei=null,Hu=!1,qo=!1,jr=!1,Gu=0,pc=0,Yo=null,hx=0;function Qn(){throw Error(a(321))}function Fh(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Ri(e[s],i[s]))return!1;return!0}function Hh(e,i,s,l,u,d){return qs=d,en=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,T.H=e===null||e.memoizedState===null?qr:Ys,jr=!1,d=s(l,u),jr=!1,qo&&(d=Ep(i,s,l,u)),bp(e),d}function bp(e){T.H=ja;var i=bn!==null&&bn.next!==null;if(qs=0,ei=bn=en=null,Hu=!1,pc=0,Yo=null,i)throw Error(a(300));e===null||fi||(e=e.dependencies,e!==null&&Ku(e)&&(fi=!0))}function Ep(e,i,s,l){en=e;var u=0;do{if(qo&&(Yo=null),pc=0,qo=!1,25<=u)throw Error(a(301));if(u+=1,ei=bn=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}T.H=Yr,d=i(s,l)}while(qo);return d}function dx(){var e=T.H,i=e.useState()[0];return i=typeof i.then=="function"?gc(i):i,e=e.useState()[0],(bn!==null?bn.memoizedState:null)!==e&&(en.flags|=1024),i}function Gh(){var e=Gu!==0;return Gu=0,e}function Vh(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function kh(e){if(Hu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Hu=!1}qs=0,ei=bn=en=null,qo=!1,pc=Gu=0,Yo=null}function ji(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ei===null?en.memoizedState=ei=e:ei=ei.next=e,ei}function ni(){if(bn===null){var e=en.alternate;e=e!==null?e.memoizedState:null}else e=bn.next;var i=ei===null?en.memoizedState:ei.next;if(i!==null)ei=i,bn=e;else{if(e===null)throw en.alternate===null?Error(a(467)):Error(a(310));bn=e,e={memoizedState:bn.memoizedState,baseState:bn.baseState,baseQueue:bn.baseQueue,queue:bn.queue,next:null},ei===null?en.memoizedState=ei=e:ei=ei.next=e}return ei}var Vu;Vu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function gc(e){var i=pc;return pc+=1,Yo===null&&(Yo=[]),e=Xa(Yo,e,i),i=en,(ei===null?i.memoizedState:ei.next)===null&&(i=i.alternate,T.H=i===null||i.memoizedState===null?qr:Ys),e}function ku(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gc(e);if(e.$$typeof===y)return bi(e)}throw Error(a(438,String(e)))}function Xh(e){var i=null,s=en.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=en.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Vu(),en.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=A;return i.index++,s}function ms(e,i){return typeof i=="function"?i(e):i}function Xu(e){var i=ni();return Wh(i,bn,e)}function Wh(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var u=e.baseQueue,d=l.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}i.baseQueue=u=d,l.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var P=S=null,B=null,Z=i,Tt=!1;do{var Gt=Z.lane&-536870913;if(Gt!==Z.lane?(hn&Gt)===Gt:(qs&Gt)===Gt){var pt=Z.revertLane;if(pt===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),Gt===Wo&&(Tt=!0);else if((qs&pt)===pt){Z=Z.next,pt===Wo&&(Tt=!0);continue}else Gt={lane:0,revertLane:Z.revertLane,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},B===null?(P=B=Gt,S=d):B=B.next=Gt,en.lanes|=pt,ir|=pt;Gt=Z.action,jr&&s(d,Gt),d=Z.hasEagerState?Z.eagerState:s(d,Gt)}else pt={lane:Gt,revertLane:Z.revertLane,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},B===null?(P=B=pt,S=d):B=B.next=pt,en.lanes|=Gt,ir|=Gt;Z=Z.next}while(Z!==null&&Z!==i);if(B===null?S=d:B.next=P,!Ri(d,e.memoizedState)&&(fi=!0,Tt&&(s=jo,s!==null)))throw s;e.memoizedState=d,e.baseState=S,e.baseQueue=B,l.lastRenderedState=d}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function jh(e){var i=ni(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);Ri(d,i.memoizedState)||(fi=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function wp(e,i,s){var l=en,u=ni(),d=ln;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!Ri((bn||u).memoizedState,s);if(S&&(u.memoizedState=s,fi=!0),u=u.queue,Zh(Cp.bind(null,l,u,e),[e]),u.getSnapshot!==i||S||ei!==null&&ei.memoizedState.tag&1){if(l.flags|=2048,Zo(9,Ap.bind(null,l,u,s,i),{destroy:void 0},null),Un===null)throw Error(a(349));d||(qs&60)!==0||Tp(l,i,s)}return s}function Tp(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=en.updateQueue,i===null?(i=Vu(),en.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Ap(e,i,s,l){i.value=s,i.getSnapshot=l,Rp(i)&&Dp(e)}function Cp(e,i,s){return s(function(){Rp(i)&&Dp(e)})}function Rp(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Ri(e,s)}catch{return!0}}function Dp(e){var i=ya(e,2);i!==null&&Ni(i,e,2)}function qh(e){var i=ji();if(typeof e=="function"){var s=e;if(e=s(),jr){Bt(!0);try{s()}finally{Bt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:e},i}function Pp(e,i,s,l){return e.baseState=s,Wh(e,bn,typeof l=="function"?l:ms)}function mx(e,i,s,l,u){if(qu(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};T.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,Up(i,d)):(d.next=s.next,i.pending=s.next=d)}}function Up(e,i){var s=i.action,l=i.payload,u=e.state;if(i.isTransition){var d=T.T,S={};T.T=S;try{var P=s(u,l),B=T.S;B!==null&&B(S,P),Np(e,i,P)}catch(Z){Yh(e,i,Z)}finally{T.T=d}}else try{d=s(u,l),Np(e,i,d)}catch(Z){Yh(e,i,Z)}}function Np(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Lp(e,i,l)},function(l){return Yh(e,i,l)}):Lp(e,i,s)}function Lp(e,i,s){i.status="fulfilled",i.value=s,Op(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Up(e,s)))}function Yh(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Op(i),i=i.next;while(i!==l)}e.action=null}function Op(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function zp(e,i){return i}function Ip(e,i){if(ln){var s=Un.formState;if(s!==null){t:{var l=en;if(ln){if(ti){e:{for(var u=ti,d=Ki;u.nodeType!==8;){if(!d){u=null;break e}if(u=ba(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){ti=ba(u.nextSibling),l=u.data==="F!";break t}}Ma(l)}l=!1}l&&(i=s[0])}}return s=ji(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zp,lastRenderedState:i},s.queue=l,s=eg.bind(null,en,l),l.dispatch=s,l=qh(!1),d=td.bind(null,en,!1,l.queue),l=ji(),u={state:i,dispatch:null,action:e,pending:null},l.queue=u,s=mx.bind(null,en,u,d,s),u.dispatch=s,l.memoizedState=e,[i,s,!1]}function Bp(e){var i=ni();return Fp(i,bn,e)}function Fp(e,i,s){i=Wh(e,i,zp)[0],e=Xu(ms)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?gc(i):i;var l=ni(),u=l.queue,d=u.dispatch;return s!==l.memoizedState&&(en.flags|=2048,Zo(9,px.bind(null,u,s),{destroy:void 0},null)),[i,d,e]}function px(e,i){e.action=i}function Hp(e){var i=ni(),s=bn;if(s!==null)return Fp(i,s,e);ni(),i=i.memoizedState,s=ni();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Zo(e,i,s,l){return e={tag:e,create:i,inst:s,deps:l,next:null},i=en.updateQueue,i===null&&(i=Vu(),en.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function Gp(){return ni().memoizedState}function Wu(e,i,s,l){var u=ji();en.flags|=e,u.memoizedState=Zo(1|i,s,{destroy:void 0},l===void 0?null:l)}function ju(e,i,s,l){var u=ni();l=l===void 0?null:l;var d=u.memoizedState.inst;bn!==null&&l!==null&&Fh(l,bn.memoizedState.deps)?u.memoizedState=Zo(i,s,d,l):(en.flags|=e,u.memoizedState=Zo(1|i,s,d,l))}function Vp(e,i){Wu(8390656,8,e,i)}function Zh(e,i){ju(2048,8,e,i)}function kp(e,i){return ju(4,2,e,i)}function Xp(e,i){return ju(4,4,e,i)}function Wp(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function jp(e,i,s){s=s!=null?s.concat([e]):null,ju(4,4,Wp.bind(null,i,e),s)}function Kh(){}function qp(e,i){var s=ni();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Fh(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function Yp(e,i){var s=ni();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Fh(i,l[1]))return l[0];if(l=e(),jr){Bt(!0);try{e()}finally{Bt(!1)}}return s.memoizedState=[l,i],l}function Qh(e,i,s){return s===void 0||(qs&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Kg(),en.lanes|=e,ir|=e,s)}function Zp(e,i,s,l){return Ri(s,i)?s:Xo.current!==null?(e=Qh(e,s,l),Ri(e,i)||(fi=!0),e):(qs&42)===0?(fi=!0,e.memoizedState=s):(e=Kg(),en.lanes|=e,ir|=e,i)}function Kp(e,i,s,l,u){var d=Q.p;Q.p=d!==0&&8>d?d:8;var S=T.T,P={};T.T=P,td(e,!1,i,s);try{var B=u(),Z=T.S;if(Z!==null&&Z(P,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var Tt=fx(B,l);vc(e,i,Tt,ta(e))}else vc(e,i,l,ta(e))}catch(Gt){vc(e,i,{then:function(){},status:"rejected",reason:Gt},ta())}finally{Q.p=d,T.T=S}}function gx(){}function Jh(e,i,s,l){if(e.tag!==5)throw Error(a(476));var u=Qp(e).queue;Kp(e,u,i,yt,s===null?gx:function(){return Jp(e),s(l)})}function Qp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:yt},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Jp(e){var i=Qp(e).next.queue;vc(e,i,{},ta())}function $h(){return bi(Ic)}function $p(){return ni().memoizedState}function tg(){return ni().memoizedState}function vx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ta();e=Qs(s);var l=Js(i,e,s);l!==null&&(Ni(l,i,s),yc(l,i,s)),i={cache:zh()},e.payload=i;return}i=i.return}}function _x(e,i,s){var l=ta();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},qu(e)?ng(i,s):(s=Go(e,i,s,l),s!==null&&(Ni(s,e,l),ig(s,i,l)))}function eg(e,i,s){var l=ta();vc(e,i,s,l)}function vc(e,i,s,l){var u={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(qu(e))ng(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,P=d(S,s);if(u.hasEagerState=!0,u.eagerState=P,Ri(P,S))return cc(e,i,u,0),Un===null&&Vr(),!1}catch{}finally{}if(s=Go(e,i,u,l),s!==null)return Ni(s,e,l),ig(s,i,l),!0}return!1}function td(e,i,s,l){if(l={lane:2,revertLane:kd(),action:l,hasEagerState:!1,eagerState:null,next:null},qu(e)){if(i)throw Error(a(479))}else i=Go(e,s,l,2),i!==null&&Ni(i,e,2)}function qu(e){var i=e.alternate;return e===en||i!==null&&i===en}function ng(e,i){qo=Hu=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function ig(e,i,s){if((s&4194176)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,gi(e,s)}}var ja={readContext:bi,use:ku,useCallback:Qn,useContext:Qn,useEffect:Qn,useImperativeHandle:Qn,useLayoutEffect:Qn,useInsertionEffect:Qn,useMemo:Qn,useReducer:Qn,useRef:Qn,useState:Qn,useDebugValue:Qn,useDeferredValue:Qn,useTransition:Qn,useSyncExternalStore:Qn,useId:Qn};ja.useCacheRefresh=Qn,ja.useMemoCache=Qn,ja.useHostTransitionStatus=Qn,ja.useFormState=Qn,ja.useActionState=Qn,ja.useOptimistic=Qn;var qr={readContext:bi,use:ku,useCallback:function(e,i){return ji().memoizedState=[e,i===void 0?null:i],e},useContext:bi,useEffect:Vp,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Wu(4194308,4,Wp.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Wu(4194308,4,e,i)},useInsertionEffect:function(e,i){Wu(4,2,e,i)},useMemo:function(e,i){var s=ji();i=i===void 0?null:i;var l=e();if(jr){Bt(!0);try{e()}finally{Bt(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=ji();if(s!==void 0){var u=s(i);if(jr){Bt(!0);try{s(i)}finally{Bt(!1)}}}else u=i;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=_x.bind(null,en,e),[l.memoizedState,e]},useRef:function(e){var i=ji();return e={current:e},i.memoizedState=e},useState:function(e){e=qh(e);var i=e.queue,s=eg.bind(null,en,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Kh,useDeferredValue:function(e,i){var s=ji();return Qh(s,e,i)},useTransition:function(){var e=qh(!1);return e=Kp.bind(null,en,e.queue,!0,!1),ji().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=en,u=ji();if(ln){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Un===null)throw Error(a(349));(hn&60)!==0||Tp(l,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,Vp(Cp.bind(null,l,d,e),[e]),l.flags|=2048,Zo(9,Ap.bind(null,l,d,s,i),{destroy:void 0},null),s},useId:function(){var e=ji(),i=Un.identifierPrefix;if(ln){var s=Zi,l=Xi;s=(l&~(1<<32-Vt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=Gu++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=hx++,i=":"+i+"r"+s.toString(32)+":";return e.memoizedState=i},useCacheRefresh:function(){return ji().memoizedState=vx.bind(null,en)}};qr.useMemoCache=Xh,qr.useHostTransitionStatus=$h,qr.useFormState=Ip,qr.useActionState=Ip,qr.useOptimistic=function(e){var i=ji();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=td.bind(null,en,!0,s),s.dispatch=i,[e,i]};var Ys={readContext:bi,use:ku,useCallback:qp,useContext:bi,useEffect:Zh,useImperativeHandle:jp,useInsertionEffect:kp,useLayoutEffect:Xp,useMemo:Yp,useReducer:Xu,useRef:Gp,useState:function(){return Xu(ms)},useDebugValue:Kh,useDeferredValue:function(e,i){var s=ni();return Zp(s,bn.memoizedState,e,i)},useTransition:function(){var e=Xu(ms)[0],i=ni().memoizedState;return[typeof e=="boolean"?e:gc(e),i]},useSyncExternalStore:wp,useId:$p};Ys.useCacheRefresh=tg,Ys.useMemoCache=Xh,Ys.useHostTransitionStatus=$h,Ys.useFormState=Bp,Ys.useActionState=Bp,Ys.useOptimistic=function(e,i){var s=ni();return Pp(s,bn,e,i)};var Yr={readContext:bi,use:ku,useCallback:qp,useContext:bi,useEffect:Zh,useImperativeHandle:jp,useInsertionEffect:kp,useLayoutEffect:Xp,useMemo:Yp,useReducer:jh,useRef:Gp,useState:function(){return jh(ms)},useDebugValue:Kh,useDeferredValue:function(e,i){var s=ni();return bn===null?Qh(s,e,i):Zp(s,bn.memoizedState,e,i)},useTransition:function(){var e=jh(ms)[0],i=ni().memoizedState;return[typeof e=="boolean"?e:gc(e),i]},useSyncExternalStore:wp,useId:$p};Yr.useCacheRefresh=tg,Yr.useMemoCache=Xh,Yr.useHostTransitionStatus=$h,Yr.useFormState=Hp,Yr.useActionState=Hp,Yr.useOptimistic=function(e,i){var s=ni();return bn!==null?Pp(s,bn,e,i):(s.baseState=e,[e,s.queue.dispatch])};function ed(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:E({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var nd={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,i,s){e=e._reactInternals;var l=ta(),u=Qs(l);u.payload=i,s!=null&&(u.callback=s),i=Js(e,u,l),i!==null&&(Ni(i,e,l),yc(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=ta(),u=Qs(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Js(e,u,l),i!==null&&(Ni(i,e,l),yc(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ta(),l=Qs(s);l.tag=2,i!=null&&(l.callback=i),i=Js(e,l,s),i!==null&&(Ni(i,e,s),yc(i,e,s))}};function ag(e,i,s,l,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,S):i.prototype&&i.prototype.isPureReactComponent?!zr(s,l)||!zr(u,d):!0}function sg(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&nd.enqueueReplaceState(i,i.state,null)}function Zr(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=E({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var Yu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function rg(e){Yu(e)}function og(e){console.error(e)}function lg(e){Yu(e)}function Zu(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function cg(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function id(e,i,s){return s=Qs(s),s.tag=3,s.payload={element:null},s.callback=function(){Zu(e,i)},s}function ug(e){return e=Qs(e),e.tag=3,e}function fg(e,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;e.payload=function(){return u(d)},e.callback=function(){cg(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){cg(i,s,l),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var P=l.stack;this.componentDidCatch(l.value,{componentStack:P!==null?P:""})})}function xx(e,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&xc(i,s,u,!0),s=oa.current,s!==null){switch(s.tag){case 13:return Wa===null?Bd():s.alternate===null&&Yn===0&&(Yn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===Ui?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Hd(e,l,u)),!1;case 22:return s.flags|=65536,l===Ui?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Hd(e,l,u)),!1}throw Error(a(435,s.tag))}return Hd(e,l,u),Bd(),!1}if(ln)return i=oa.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==uc&&(e=Error(a(422),{cause:l}),tn(Gi(e,s)))):(l!==uc&&(i=Error(a(423),{cause:l}),tn(Gi(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=Gi(l,s),u=id(e.stateNode,l,u),_d(e,u),Yn!==4&&(Yn=2)),!1;var d=Error(a(520),{cause:l});if(d=Gi(d,s),Cc===null?Cc=[d]:Cc.push(d),Yn!==4&&(Yn=2),i===null)return!0;l=Gi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=id(s.stateNode,l,e),_d(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ar===null||!ar.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=ug(u),fg(u,e,s,l),_d(s,u),!1}s=s.return}while(s!==null);return!1}var hg=Error(a(461)),fi=!1;function _i(e,i,s,l){i.child=e===null?vp(i,null,s,l):Xr(i,e.child,s,l)}function dg(e,i,s,l,u){s=s.render;var d=i.ref;if("ref"in l){var S={};for(var P in l)P!=="ref"&&(S[P]=l[P])}else S=l;return Qr(i),l=Hh(e,i,s,S,d,u),P=Gh(),e!==null&&!fi?(Vh(e,i,u),ps(e,i,u)):(ln&&P&&kr(i),i.flags|=1,_i(e,i,l,u),i.child)}function mg(e,i,s,l,u){if(e===null){var d=s.type;return typeof d=="function"&&!Td(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,pg(e,i,d,l,u)):(e=tf(s.type,null,l,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!hd(e,u)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:zr,s(S,l)&&e.ref===i.ref)return ps(e,i,u)}return i.flags|=1,e=nr(d,l),e.ref=i.ref,e.return=i,i.child=e}function pg(e,i,s,l,u){if(e!==null){var d=e.memoizedProps;if(zr(d,l)&&e.ref===i.ref)if(fi=!1,i.pendingProps=l=d,hd(e,u))(e.flags&131072)!==0&&(fi=!0);else return i.lanes=e.lanes,ps(e,i,u)}return ad(e,i,s,l,u)}function gg(e,i,s){var l=i.pendingProps,u=l.children,d=(i.stateNode._pendingVisibility&2)!==0,S=e!==null?e.memoizedState:null;if(_c(e,i),l.mode==="hidden"||d){if((i.flags&128)!==0){if(l=S!==null?S.baseLanes|s:s,e!==null){for(u=i.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return vg(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fu(i,S!==null?S.cachePool:null),S!==null?_p(i,S):Lh(),xp(i);else return i.lanes=i.childLanes=536870912,vg(e,i,S!==null?S.baseLanes|s:s,s)}else S!==null?(Fu(i,S.cachePool),_p(i,S),js(),i.memoizedState=null):(e!==null&&Fu(i,null),Lh(),js());return _i(e,i,u,s),i.child}function vg(e,i,s,l){var u=Bh();return u=u===null?null:{parent:ri._currentValue,pool:u},i.memoizedState={baseLanes:s,cachePool:u},e!==null&&Fu(i,null),Lh(),xp(i),e!==null&&xc(e,i,l,!0),null}function _c(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=2097664)}}function ad(e,i,s,l,u){return Qr(i),s=Hh(e,i,s,l,void 0,u),l=Gh(),e!==null&&!fi?(Vh(e,i,u),ps(e,i,u)):(ln&&l&&kr(i),i.flags|=1,_i(e,i,s,u),i.child)}function _g(e,i,s,l,u,d){return Qr(i),i.updateQueue=null,s=Ep(i,l,s,u),bp(e),l=Gh(),e!==null&&!fi?(Vh(e,i,d),ps(e,i,d)):(ln&&l&&kr(i),i.flags|=1,_i(e,i,s,d),i.child)}function xg(e,i,s,l,u){if(Qr(i),i.stateNode===null){var d=Ba,S=s.contextType;typeof S=="object"&&S!==null&&(d=bi(S)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=nd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},gd(i),S=s.contextType,d.context=typeof S=="object"&&S!==null?bi(S):Ba,d.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(ed(i,s,S,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&nd.enqueueReplaceState(d,d.state,null),Sc(i,l,d,u),Mc(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var P=i.memoizedProps,B=Zr(s,P);d.props=B;var Z=d.context,Tt=s.contextType;S=Ba,typeof Tt=="object"&&Tt!==null&&(S=bi(Tt));var Gt=s.getDerivedStateFromProps;Tt=typeof Gt=="function"||typeof d.getSnapshotBeforeUpdate=="function",P=i.pendingProps!==P,Tt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(P||Z!==S)&&sg(i,d,l,S),Ks=!1;var pt=i.memoizedState;d.state=pt,Sc(i,l,d,u),Mc(),Z=i.memoizedState,P||pt!==Z||Ks?(typeof Gt=="function"&&(ed(i,s,Gt,l),Z=i.memoizedState),(B=Ks||ag(i,s,B,l,pt,Z,S))?(Tt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=Z),d.props=l,d.state=Z,d.context=S,l=B):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,vd(e,i),S=i.memoizedProps,Tt=Zr(s,S),d.props=Tt,Gt=i.pendingProps,pt=d.context,Z=s.contextType,B=Ba,typeof Z=="object"&&Z!==null&&(B=bi(Z)),P=s.getDerivedStateFromProps,(Z=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Gt||pt!==B)&&sg(i,d,l,B),Ks=!1,pt=i.memoizedState,d.state=pt,Sc(i,l,d,u),Mc();var wt=i.memoizedState;S!==Gt||pt!==wt||Ks||e!==null&&e.dependencies!==null&&Ku(e.dependencies)?(typeof P=="function"&&(ed(i,s,P,l),wt=i.memoizedState),(Tt=Ks||ag(i,s,Tt,l,pt,wt,B)||e!==null&&e.dependencies!==null&&Ku(e.dependencies))?(Z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,wt,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,wt,B)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&pt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&pt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=wt),d.props=l,d.state=wt,d.context=B,l=Tt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&pt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&pt===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,_c(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Xr(i,e.child,null,u),i.child=Xr(i,null,s,u)):_i(e,i,s,u),i.memoizedState=d.state,e=i.child):e=ps(e,i,u),e}function yg(e,i,s,l){return Xe(),i.flags|=256,_i(e,i,s,l),i.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function rd(e){return{baseLanes:e,cachePool:Sp()}}function od(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=fa),e}function Mg(e,i,s){var l=i.pendingProps,u=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(si.current&2)!==0),S&&(u=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(ln){if(u?Ws(i):js(),ln){var P=ti,B;if(B=P){t:{for(B=P,P=Ki;B.nodeType!==8;){if(!P){P=null;break t}if(B=ba(B.nextSibling),B===null){P=null;break t}}P=B}P!==null?(i.memoizedState={dehydrated:P,treeContext:hs!==null?{id:Xi,overflow:Zi}:null,retryLane:536870912},B=ua(18,null,null,0),B.stateNode=P,B.return=i,i.child=B,Kn=i,ti=null,B=!0):B=!1}B||Ma(i)}if(P=i.memoizedState,P!==null&&(P=P.dehydrated,P!==null))return P.data==="$!"?i.lanes=16:i.lanes=536870912,null;ds(i)}return P=l.children,l=l.fallback,u?(js(),u=i.mode,P=cd({mode:"hidden",children:P},u),l=$r(l,u,s,null),P.return=i,l.return=i,P.sibling=l,i.child=P,u=i.child,u.memoizedState=rd(s),u.childLanes=od(e,S,s),i.memoizedState=sd,l):(Ws(i),ld(i,P))}if(B=e.memoizedState,B!==null&&(P=B.dehydrated,P!==null)){if(d)i.flags&256?(Ws(i),i.flags&=-257,i=ud(e,i,s)):i.memoizedState!==null?(js(),i.child=e.child,i.flags|=128,i=null):(js(),u=l.fallback,P=i.mode,l=cd({mode:"visible",children:l.children},P),u=$r(u,P,s,null),u.flags|=2,l.return=i,u.return=i,l.sibling=u,i.child=l,Xr(i,e.child,null,s),l=i.child,l.memoizedState=rd(s),l.childLanes=od(e,S,s),i.memoizedState=sd,i=u);else if(Ws(i),P.data==="$!"){if(S=P.nextSibling&&P.nextSibling.dataset,S)var Z=S.dgst;S=Z,l=Error(a(419)),l.stack="",l.digest=S,tn({value:l,source:null,stack:null}),i=ud(e,i,s)}else if(fi||xc(e,i,s,!1),S=(s&e.childLanes)!==0,fi||S){if(S=Un,S!==null){if(l=s&-s,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(S.suspendedLanes|s))!==0?0:l,l!==0&&l!==B.retryLane)throw B.retryLane=l,ya(e,l),Ni(S,e,l),hg}P.data==="$?"||Bd(),i=ud(e,i,s)}else P.data==="$?"?(i.flags|=128,i.child=e.child,i=Lx.bind(null,e),P._reactRetry=i,i=null):(e=B.treeContext,ti=ba(P.nextSibling),Kn=i,ln=!0,Pi=null,Ki=!1,e!==null&&(Vi[ki++]=Xi,Vi[ki++]=Zi,Vi[ki++]=hs,Xi=e.id,Zi=e.overflow,hs=i),i=ld(i,l.children),i.flags|=4096);return i}return u?(js(),u=l.fallback,P=i.mode,B=e.child,Z=B.sibling,l=nr(B,{mode:"hidden",children:l.children}),l.subtreeFlags=B.subtreeFlags&31457280,Z!==null?u=nr(Z,u):(u=$r(u,P,s,null),u.flags|=2),u.return=i,l.return=i,l.sibling=u,i.child=l,l=u,u=i.child,P=e.child.memoizedState,P===null?P=rd(s):(B=P.cachePool,B!==null?(Z=ri._currentValue,B=B.parent!==Z?{parent:Z,pool:Z}:B):B=Sp(),P={baseLanes:P.baseLanes|s,cachePool:B}),u.memoizedState=P,u.childLanes=od(e,S,s),i.memoizedState=sd,l):(Ws(i),s=e.child,e=s.sibling,s=nr(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=s,i.memoizedState=null,s)}function ld(e,i){return i=cd({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function cd(e,i){return qg(e,i,0,null)}function ud(e,i,s){return Xr(i,e.child,null,s),e=ld(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Sg(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),md(e.return,i,s)}function fd(e,i,s,l,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=u)}function bg(e,i,s){var l=i.pendingProps,u=l.revealOrder,d=l.tail;if(_i(e,i,l.children,s),l=si.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sg(e,s,i);else if(e.tag===19)Sg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(he(si,l),u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&Bu(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),fd(i,!1,u,s,d);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Bu(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}fd(i,!0,s,null,d);break;case"together":fd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ps(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),ir|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(xc(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=nr(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=nr(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function hd(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ku(e)))}function yx(e,i,s){switch(i.tag){case 3:Hn(i,i.stateNode.containerInfo),Zs(i,ri,e.memoizedState.cache),Xe();break;case 27:case 5:Fe(i);break;case 4:Hn(i,i.stateNode.containerInfo);break;case 10:Zs(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ws(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Mg(e,i,s):(Ws(i),e=ps(e,i,s),e!==null?e.sibling:null);Ws(i);break;case 19:var u=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(xc(e,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return bg(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),he(si,si.current),l)break;return null;case 22:case 23:return i.lanes=0,gg(e,i,s);case 24:Zs(i,ri,e.memoizedState.cache)}return ps(e,i,s)}function Eg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)fi=!0;else{if(!hd(e,s)&&(i.flags&128)===0)return fi=!1,yx(e,i,s);fi=(e.flags&131072)!==0}else fi=!1,ln&&(i.flags&1048576)!==0&&Nh(i,Xs,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,u=l._init;if(l=u(l._payload),i.type=l,typeof l=="function")Td(l)?(e=Zr(l,e),i.tag=1,i=xg(null,i,l,e,s)):(i.tag=0,i=ad(null,i,l,e,s));else{if(l!=null){if(u=l.$$typeof,u===b){i.tag=11,i=dg(null,i,l,e,s);break t}else if(u===_){i.tag=14,i=mg(null,i,l,e,s);break t}}throw i=W(l)||l,Error(a(306,i,""))}}return i;case 0:return ad(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=Zr(l,i.pendingProps),xg(e,i,l,u,s);case 3:t:{if(Hn(i,i.stateNode.containerInfo),e===null)throw Error(a(387));var d=i.pendingProps;u=i.memoizedState,l=u.element,vd(e,i),Sc(i,d,null,s);var S=i.memoizedState;if(d=S.cache,Zs(i,ri,d),d!==u.cache&&pd(i,[ri],s,!0),Mc(),d=S.element,u.isDehydrated)if(u={element:d,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=u,i.memoizedState=u,i.flags&256){i=yg(e,i,d,s);break t}else if(d!==l){l=Gi(Error(a(424)),i),tn(l),i=yg(e,i,d,s);break t}else for(ti=ba(i.stateNode.containerInfo.firstChild),Kn=i,ln=!0,Pi=null,Ki=!0,s=vp(i,null,d,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Xe(),d===l){i=ps(e,i,s);break t}_i(e,i,d,s)}i=i.child}return i;case 26:return _c(e,i),e===null?(s=Av(i.type,null,i.pendingProps,null))?i.memoizedState=s:ln||(s=i.type,e=i.pendingProps,l=df(Ge.current).createElement(s),l[yn]=i,l[zn]=e,xi(l,s,e),ot(l),i.stateNode=l):i.memoizedState=Av(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Fe(i),e===null&&ln&&(l=i.stateNode=Ev(i.type,i.pendingProps,Ge.current),Kn=i,Ki=!0,ti=ba(l.firstChild)),l=i.pendingProps.children,e!==null||ln?_i(e,i,l,s):i.child=Xr(i,null,l,s),_c(e,i),i.child;case 5:return e===null&&ln&&((u=l=ti)&&(l=Kx(l,i.type,i.pendingProps,Ki),l!==null?(i.stateNode=l,Kn=i,ti=ba(l.firstChild),Ki=!1,u=!0):u=!1),u||Ma(i)),Fe(i),u=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,l=d.children,Jd(u,d)?l=null:S!==null&&Jd(u,S)&&(i.flags|=32),i.memoizedState!==null&&(u=Hh(e,i,dx,null,null,s),Ic._currentValue=u),_c(e,i),_i(e,i,l,s),i.child;case 6:return e===null&&ln&&((e=s=ti)&&(s=Qx(s,i.pendingProps,Ki),s!==null?(i.stateNode=s,Kn=i,ti=null,e=!0):e=!1),e||Ma(i)),null;case 13:return Mg(e,i,s);case 4:return Hn(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Xr(i,null,l,s):_i(e,i,l,s),i.child;case 11:return dg(e,i,i.type,i.pendingProps,s);case 7:return _i(e,i,i.pendingProps,s),i.child;case 8:return _i(e,i,i.pendingProps.children,s),i.child;case 12:return _i(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Zs(i,i.type,l.value),_i(e,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,Qr(i),u=bi(u),l=l(u),i.flags|=1,_i(e,i,l,s),i.child;case 14:return mg(e,i,i.type,i.pendingProps,s);case 15:return pg(e,i,i.type,i.pendingProps,s);case 19:return bg(e,i,s);case 22:return gg(e,i,s);case 24:return Qr(i),l=bi(ri),e===null?(u=Bh(),u===null&&(u=Un,d=zh(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:l,cache:u},gd(i),Zs(i,ri,u)):((e.lanes&s)!==0&&(vd(e,i),Sc(i,null,null,s),Mc()),u=e.memoizedState,d=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Zs(i,ri,l)):(l=d.cache,Zs(i,ri,l),l!==u.cache&&pd(i,[ri],s,!0))),_i(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}var dd=ae(null),Kr=null,gs=null;function Zs(e,i,s){he(dd,i._currentValue),i._currentValue=s}function vs(e){e._currentValue=dd.current,ce(dd)}function md(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function pd(e,i,s,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var P=d;d=u;for(var B=0;B<i.length;B++)if(P.context===i[B]){d.lanes|=s,P=d.alternate,P!==null&&(P.lanes|=s),md(d.return,s,e),l||(S=null);break t}d=P.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(a(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),md(S,s,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function xc(e,i,s,l){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var P=u.type;Ri(u.pendingProps.value,S.value)||(e!==null?e.push(P):e=[P])}}else if(u===V.current){if(S=u.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ic):e=[Ic])}u=u.return}e!==null&&pd(i,e,s,l),i.flags|=262144}function Ku(e){for(e=e.firstContext;e!==null;){if(!Ri(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qr(e){Kr=e,gs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bi(e){return wg(Kr,e)}function Qu(e,i){return Kr===null&&Qr(e),wg(e,i)}function wg(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},gs===null){if(e===null)throw Error(a(308));gs=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else gs=gs.next=i;return s}var Ks=!1;function gd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vd(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Js(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Xn&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=ks(e),Vo(e,null,s),i}return cc(e,l,i,s),ks(e)}function yc(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194176)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,gi(e,s)}}function _d(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var xd=!1;function Mc(){if(xd){var e=jo;if(e!==null)throw e}}function Sc(e,i,s,l){xd=!1;var u=e.updateQueue;Ks=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,P=u.shared.pending;if(P!==null){u.shared.pending=null;var B=P,Z=B.next;B.next=null,S===null?d=Z:S.next=Z,S=B;var Tt=e.alternate;Tt!==null&&(Tt=Tt.updateQueue,P=Tt.lastBaseUpdate,P!==S&&(P===null?Tt.firstBaseUpdate=Z:P.next=Z,Tt.lastBaseUpdate=B))}if(d!==null){var Gt=u.baseState;S=0,Tt=Z=B=null,P=d;do{var pt=P.lane&-536870913,wt=pt!==P.lane;if(wt?(hn&pt)===pt:(l&pt)===pt){pt!==0&&pt===Wo&&(xd=!0),Tt!==null&&(Tt=Tt.next={lane:0,tag:P.tag,payload:P.payload,callback:null,next:null});t:{var De=e,We=P;pt=i;var Zn=s;switch(We.tag){case 1:if(De=We.payload,typeof De=="function"){Gt=De.call(Zn,Gt,pt);break t}Gt=De;break t;case 3:De.flags=De.flags&-65537|128;case 0:if(De=We.payload,pt=typeof De=="function"?De.call(Zn,Gt,pt):De,pt==null)break t;Gt=E({},Gt,pt);break t;case 2:Ks=!0}}pt=P.callback,pt!==null&&(e.flags|=64,wt&&(e.flags|=8192),wt=u.callbacks,wt===null?u.callbacks=[pt]:wt.push(pt))}else wt={lane:pt,tag:P.tag,payload:P.payload,callback:P.callback,next:null},Tt===null?(Z=Tt=wt,B=Gt):Tt=Tt.next=wt,S|=pt;if(P=P.next,P===null){if(P=u.shared.pending,P===null)break;wt=P,P=wt.next,wt.next=null,u.lastBaseUpdate=wt,u.shared.pending=null}}while(!0);Tt===null&&(B=Gt),u.baseState=B,u.firstBaseUpdate=Z,u.lastBaseUpdate=Tt,d===null&&(u.shared.lanes=0),ir|=S,e.lanes=S,e.memoizedState=Gt}}function Tg(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Ag(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Tg(s[e],i)}function bc(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&e)===e){l=void 0;var d=s.create,S=s.inst;l=d(),S.destroy=l}s=s.next}while(s!==u)}}catch(P){Pn(i,i.return,P)}}function $s(e,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&e)===e){var S=l.inst,P=S.destroy;if(P!==void 0){S.destroy=void 0,u=i;var B=s;try{P()}catch(Z){Pn(u,B,Z)}}}l=l.next}while(l!==d)}}catch(Z){Pn(i,i.return,Z)}}function Cg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Ag(i,s)}catch(l){Pn(e,e.return,l)}}}function Rg(e,i,s){s.props=Zr(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Pn(e,i,l)}}function Jr(e,i){try{var s=e.ref;if(s!==null){var l=e.stateNode;switch(e.tag){case 26:case 27:case 5:var u=l;break;default:u=l}typeof s=="function"?e.refCleanup=s(u):s.current=u}}catch(d){Pn(e,i,d)}}function Qi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){Pn(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Pn(e,i,u)}else s.current=null}function Dg(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){Pn(e,e.return,u)}}function Pg(e,i,s){try{var l=e.stateNode;Wx(l,e.type,s,i),l[zn]=i}catch(u){Pn(e,e.return,u)}}function Ug(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function yd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ug(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Md(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(e,i):s.insertBefore(e,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(e,s)):(i=s,i.appendChild(e)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=hf));else if(l!==4&&l!==27&&(e=e.child,e!==null))for(Md(e,i,s),e=e.sibling;e!==null;)Md(e,i,s),e=e.sibling}function Ju(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&l!==27&&(e=e.child,e!==null))for(Ju(e,i,s),e=e.sibling;e!==null;)Ju(e,i,s),e=e.sibling}var _s=!1,qn=!1,Sd=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,hi=null,Lg=!1;function Mx(e,i){if(e=e.containerInfo,Kd=xf,e=Br(e),Fr(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var S=0,P=-1,B=-1,Z=0,Tt=0,Gt=e,pt=null;e:for(;;){for(var wt;Gt!==s||u!==0&&Gt.nodeType!==3||(P=S+u),Gt!==d||l!==0&&Gt.nodeType!==3||(B=S+l),Gt.nodeType===3&&(S+=Gt.nodeValue.length),(wt=Gt.firstChild)!==null;)pt=Gt,Gt=wt;for(;;){if(Gt===e)break e;if(pt===s&&++Z===u&&(P=S),pt===d&&++Tt===l&&(B=S),(wt=Gt.nextSibling)!==null)break;Gt=pt,pt=Gt.parentNode}Gt=wt}s=P===-1||B===-1?null:{start:P,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(Qd={focusedElem:e,selectionRange:s},xf=!1,hi=i;hi!==null;)if(i=hi,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,hi=e;else for(;hi!==null;){switch(i=hi,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var De=Zr(s.type,u,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(De,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(We){Pn(s,s.return,We)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)e0(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":e0(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,hi=e;break}hi=i.return}return De=Lg,Lg=!1,De}function Og(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ys(e,s),l&4&&bc(5,s);break;case 1:if(ys(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(P){Pn(s,s.return,P)}else{var u=Zr(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(P){Pn(s,s.return,P)}}l&64&&Cg(s),l&512&&Jr(s,s.return);break;case 3:if(ys(e,s),l&64&&(l=s.updateQueue,l!==null)){if(e=null,s.child!==null)switch(s.child.tag){case 27:case 5:e=s.child.stateNode;break;case 1:e=s.child.stateNode}try{Ag(l,e)}catch(P){Pn(s,s.return,P)}}break;case 26:ys(e,s),l&512&&Jr(s,s.return);break;case 27:case 5:ys(e,s),i===null&&l&4&&Dg(s),l&512&&Jr(s,s.return);break;case 12:ys(e,s);break;case 13:ys(e,s),l&4&&Bg(e,s);break;case 22:if(u=s.memoizedState!==null||_s,!u){i=i!==null&&i.memoizedState!==null||qn;var d=_s,S=qn;_s=u,(qn=i)&&!S?tr(e,s,(s.subtreeFlags&8772)!==0):ys(e,s),_s=d,qn=S}l&512&&(s.memoizedProps.mode==="manual"?Jr(s,s.return):Qi(s,s.return));break;default:ys(e,s)}}function zg(e){var i=e.alternate;i!==null&&(e.alternate=null,zg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&es(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ii=null,Ji=!1;function xs(e,i,s){for(s=s.child;s!==null;)Ig(e,i,s),s=s.sibling}function Ig(e,i,s){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Oe,s)}catch{}switch(s.tag){case 26:qn||Qi(s,i),xs(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:qn||Qi(s,i);var l=ii,u=Ji;for(ii=s.stateNode,xs(e,i,s),s=s.stateNode,i=s.attributes;i.length;)s.removeAttributeNode(i[0]);es(s),ii=l,Ji=u;break;case 5:qn||Qi(s,i);case 6:u=ii;var d=Ji;if(ii=null,xs(e,i,s),ii=u,Ji=d,ii!==null)if(Ji)try{e=ii,l=s.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)}catch(S){Pn(s,i,S)}else try{ii.removeChild(s.stateNode)}catch(S){Pn(s,i,S)}break;case 18:ii!==null&&(Ji?(i=ii,s=s.stateNode,i.nodeType===8?t0(i.parentNode,s):i.nodeType===1&&t0(i,s),Gc(i)):t0(ii,s.stateNode));break;case 4:l=ii,u=Ji,ii=s.stateNode.containerInfo,Ji=!0,xs(e,i,s),ii=l,Ji=u;break;case 0:case 11:case 14:case 15:qn||$s(2,s,i),qn||$s(4,s,i),xs(e,i,s);break;case 1:qn||(Qi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Rg(s,i,l)),xs(e,i,s);break;case 21:xs(e,i,s);break;case 22:qn||Qi(s,i),qn=(l=qn)||s.memoizedState!==null,xs(e,i,s),qn=l;break;default:xs(e,i,s)}}function Bg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gc(e)}catch(s){Pn(i,i.return,s)}}function Sx(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ng),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ng),i;default:throw Error(a(435,e.tag))}}function bd(e,i){var s=Sx(e);i.forEach(function(l){var u=Ox.bind(null,e,l);s.has(l)||(s.add(l),l.then(u,u))})}function la(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],d=e,S=i,P=S;t:for(;P!==null;){switch(P.tag){case 27:case 5:ii=P.stateNode,Ji=!1;break t;case 3:ii=P.stateNode.containerInfo,Ji=!0;break t;case 4:ii=P.stateNode.containerInfo,Ji=!0;break t}P=P.return}if(ii===null)throw Error(a(160));Ig(d,S,u),ii=null,Ji=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Fg(i,e),i=i.sibling}var Sa=null;function Fg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:la(i,e),ca(e),l&4&&($s(3,e,e.return),bc(3,e),$s(5,e,e.return));break;case 1:la(i,e),ca(e),l&512&&(qn||s===null||Qi(s,s.return)),l&64&&_s&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=Sa;if(la(i,e),ca(e),l&512&&(qn||s===null||Qi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[va]||d[yn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),xi(d,l,s),d[yn]=e,ot(d),l=d;break t;case"link":var S=Dv("link","href",u).get(l+(s.href||""));if(S){for(var P=0;P<S.length;P++)if(d=S[P],d.getAttribute("href")===(s.href==null?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(P,1);break e}}d=u.createElement(l),xi(d,l,s),u.head.appendChild(d);break;case"meta":if(S=Dv("meta","content",u).get(l+(s.content||""))){for(P=0;P<S.length;P++)if(d=S[P],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(P,1);break e}}d=u.createElement(l),xi(d,l,s),u.head.appendChild(d);break;default:throw Error(a(468,l))}d[yn]=e,ot(d),l=d}e.stateNode=l}else Pv(u,e.type,e.stateNode);else e.stateNode=Rv(u,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?Pv(u,e.type,e.stateNode):Rv(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Pg(e,e.memoizedProps,s.memoizedProps)}break;case 27:if(l&4&&e.alternate===null){u=e.stateNode,d=e.memoizedProps;try{for(var B=u.firstChild;B;){var Z=B.nextSibling,Tt=B.nodeName;B[va]||Tt==="HEAD"||Tt==="BODY"||Tt==="SCRIPT"||Tt==="STYLE"||Tt==="LINK"&&B.rel.toLowerCase()==="stylesheet"||u.removeChild(B),B=Z}for(var Gt=e.type,pt=u.attributes;pt.length;)u.removeAttributeNode(pt[0]);xi(u,Gt,d),u[yn]=e,u[zn]=d}catch(De){Pn(e,e.return,De)}}case 5:if(la(i,e),ca(e),l&512&&(qn||s===null||Qi(s,s.return)),e.flags&32){u=e.stateNode;try{It(u,"")}catch(De){Pn(e,e.return,De)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Pg(e,u,s!==null?s.memoizedProps:u)),l&1024&&(Sd=!0);break;case 6:if(la(i,e),ca(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(De){Pn(e,e.return,De)}}break;case 3:if(gf=null,u=Sa,Sa=mf(i.containerInfo),la(i,e),Sa=u,ca(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Gc(i.containerInfo)}catch(De){Pn(e,e.return,De)}Sd&&(Sd=!1,Hg(e));break;case 4:l=Sa,Sa=mf(e.stateNode.containerInfo),la(i,e),ca(e),Sa=l;break;case 12:la(i,e),ca(e);break;case 13:la(i,e),ca(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ud=St()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bd(e,l)));break;case 22:if(l&512&&(qn||s===null||Qi(s,s.return)),B=e.memoizedState!==null,Z=s!==null&&s.memoizedState!==null,Tt=_s,Gt=qn,_s=Tt||B,qn=Gt||Z,la(i,e),qn=Gt,_s=Tt,ca(e),i=e.stateNode,i._current=e,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,l&8192&&(i._visibility=B?i._visibility&-2:i._visibility|1,B&&(i=_s||qn,s===null||Z||i||Ko(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(s=null,i=e;;){if(i.tag===5||i.tag===26||i.tag===27){if(s===null){Z=s=i;try{if(u=Z.stateNode,B)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{S=Z.stateNode,P=Z.memoizedProps.style;var wt=P!=null&&P.hasOwnProperty("display")?P.display:null;S.style.display=wt==null||typeof wt=="boolean"?"":(""+wt).trim()}}catch(De){Pn(Z,Z.return,De)}}}else if(i.tag===6){if(s===null){Z=i;try{Z.stateNode.nodeValue=B?"":Z.memoizedProps}catch(De){Pn(Z,Z.return,De)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,bd(e,s))));break;case 19:la(i,e),ca(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bd(e,l)));break;case 21:break;default:la(i,e),ca(e)}}function ca(e){var i=e.flags;if(i&2){try{if(e.tag!==27){t:{for(var s=e.return;s!==null;){if(Ug(s)){var l=s;break t}s=s.return}throw Error(a(160))}switch(l.tag){case 27:var u=l.stateNode,d=yd(e);Ju(e,d,u);break;case 5:var S=l.stateNode;l.flags&32&&(It(S,""),l.flags&=-33);var P=yd(e);Ju(e,P,S);break;case 3:case 4:var B=l.stateNode.containerInfo,Z=yd(e);Md(e,Z,B);break;default:throw Error(a(161))}}}catch(Tt){Pn(e,e.return,Tt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Hg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ys(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Og(e,i.alternate,i),i=i.sibling}function Ko(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:$s(4,i,i.return),Ko(i);break;case 1:Qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Rg(i,i.return,s),Ko(i);break;case 26:case 27:case 5:Qi(i,i.return),Ko(i);break;case 22:Qi(i,i.return),i.memoizedState===null&&Ko(i);break;default:Ko(i)}e=e.sibling}}function tr(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:tr(u,d,s),bc(4,d);break;case 1:if(tr(u,d,s),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Z){Pn(l,l.return,Z)}if(l=d,u=l.updateQueue,u!==null){var P=l.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Tg(B[u],P)}catch(Z){Pn(l,l.return,Z)}}s&&S&64&&Cg(d),Jr(d,d.return);break;case 26:case 27:case 5:tr(u,d,s),s&&l===null&&S&4&&Dg(d),Jr(d,d.return);break;case 12:tr(u,d,s);break;case 13:tr(u,d,s),s&&S&4&&Bg(u,d);break;case 22:d.memoizedState===null&&tr(u,d,s),Jr(d,d.return);break;default:tr(u,d,s)}i=i.sibling}}function Ed(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&dc(s))}function wd(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&dc(e))}function er(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Gg(e,i,s,l),i=i.sibling}function Gg(e,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:er(e,i,s,l),u&2048&&bc(9,i);break;case 3:er(e,i,s,l),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&dc(e)));break;case 12:if(u&2048){er(e,i,s,l),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,P=d.onPostCommit;typeof P=="function"&&P(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Pn(i,i.return,B)}}else er(e,i,s,l);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?er(e,i,s,l):Ec(e,i):d._visibility&4?er(e,i,s,l):(d._visibility|=4,Qo(e,i,s,l,(i.subtreeFlags&10256)!==0)),u&2048&&Ed(i.alternate,i);break;case 24:er(e,i,s,l),u&2048&&wd(i.alternate,i);break;default:er(e,i,s,l)}}function Qo(e,i,s,l,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,S=i,P=s,B=l,Z=S.flags;switch(S.tag){case 0:case 11:case 15:Qo(d,S,P,B,u),bc(8,S);break;case 23:break;case 22:var Tt=S.stateNode;S.memoizedState!==null?Tt._visibility&4?Qo(d,S,P,B,u):Ec(d,S):(Tt._visibility|=4,Qo(d,S,P,B,u)),u&&Z&2048&&Ed(S.alternate,S);break;case 24:Qo(d,S,P,B,u),u&&Z&2048&&wd(S.alternate,S);break;default:Qo(d,S,P,B,u)}i=i.sibling}}function Ec(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,u=l.flags;switch(l.tag){case 22:Ec(s,l),u&2048&&Ed(l.alternate,l);break;case 24:Ec(s,l),u&2048&&wd(l.alternate,l);break;default:Ec(s,l)}i=i.sibling}}var wc=8192;function Jo(e){if(e.subtreeFlags&wc)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 26:Jo(e),e.flags&wc&&e.memoizedState!==null&&uy(Sa,e.memoizedState,e.memoizedProps);break;case 5:Jo(e);break;case 3:case 4:var i=Sa;Sa=mf(e.stateNode.containerInfo),Jo(e),Sa=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=wc,wc=16777216,Jo(e),wc=i):Jo(e));break;default:Jo(e)}}function kg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Tc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];hi=l,Wg(l,e)}kg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xg(e),e=e.sibling}function Xg(e){switch(e.tag){case 0:case 11:case 15:Tc(e),e.flags&2048&&$s(9,e,e.return);break;case 3:Tc(e);break;case 12:Tc(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&4&&(e.return===null||e.return.tag!==13)?(i._visibility&=-5,$u(e)):Tc(e);break;default:Tc(e)}}function $u(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];hi=l,Wg(l,e)}kg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:$s(8,i,i.return),$u(i);break;case 22:s=i.stateNode,s._visibility&4&&(s._visibility&=-5,$u(i));break;default:$u(i)}e=e.sibling}}function Wg(e,i){for(;hi!==null;){var s=hi;switch(s.tag){case 0:case 11:case 15:$s(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:dc(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,hi=l;else t:for(s=e;hi!==null;){l=hi;var u=l.sibling,d=l.return;if(zg(l),l===s){hi=null;break t}if(u!==null){u.return=d,hi=u;break t}hi=d}}}function bx(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ua(e,i,s,l){return new bx(e,i,s,l)}function Td(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nr(e,i){var s=e.alternate;return s===null?(s=ua(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&31457280,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function jg(e,i){e.flags&=31457282;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function tf(e,i,s,l,u,d){var S=0;if(l=e,typeof e=="function")Td(e)&&(S=1);else if(typeof e=="string")S=ly(e,s,Ye.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return $r(s.children,u,d,i);case p:S=8,u|=24;break;case g:return e=ua(12,s,i,u|2),e.elementType=g,e.lanes=d,e;case w:return e=ua(13,s,i,u),e.elementType=w,e.lanes=d,e;case M:return e=ua(19,s,i,u),e.elementType=M,e.lanes=d,e;case U:return qg(s,u,d,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case y:S=10;break t;case x:S=9;break t;case b:S=11;break t;case _:S=14;break t;case N:S=16,l=null;break t}S=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=ua(S,s,i,u),i.elementType=e,i.type=l,i.lanes=d,i}function $r(e,i,s,l){return e=ua(7,e,l,i),e.lanes=s,e}function qg(e,i,s,l){e=ua(22,e,l,i),e.elementType=U,e.lanes=s;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=u._current;if(d===null)throw Error(a(456));if((u._pendingVisibility&2)===0){var S=ya(d,2);S!==null&&(u._pendingVisibility|=2,Ni(S,d,2))}},attach:function(){var d=u._current;if(d===null)throw Error(a(456));if((u._pendingVisibility&2)!==0){var S=ya(d,2);S!==null&&(u._pendingVisibility&=-3,Ni(S,d,2))}}};return e.stateNode=u,e}function Ad(e,i,s){return e=ua(6,e,null,i),e.lanes=s,e}function Cd(e,i,s){return i=ua(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function Ms(e){e.flags|=4}function Yg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Uv(i)){if(i=oa.current,i!==null&&((hn&4194176)===hn?Wa!==null:(hn&62914560)!==hn&&(hn&536870912)===0||i!==Wa))throw In=Ui,Vn;e.flags|=8192}}function ef(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ke():536870912,e.lanes|=i,tl|=i)}function Ac(e,i){if(!ln)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function kn(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&31457280,l|=u.flags&31457280,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function Ex(e,i,s){var l=i.pendingProps;switch(ko(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kn(i),null;case 1:return kn(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),vs(ri),Ve(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ue(i)?Ms(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Pi!==null&&(zd(Pi),Pi=null))),kn(i),null;case 26:return s=i.memoizedState,e===null?(Ms(i),s!==null?(kn(i),Yg(i,s)):(kn(i),i.flags&=-16777217)):s?s!==e.memoizedState?(Ms(i),kn(i),Yg(i,s)):(kn(i),i.flags&=-16777217):(e.memoizedProps!==l&&Ms(i),kn(i),i.flags&=-16777217),null;case 27:oe(i),s=Ge.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ms(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return kn(i),null}e=Ye.current,ue(i)?Rt(i):(e=Ev(u,l,s),i.stateNode=e,Ms(i))}return kn(i),null;case 5:if(oe(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ms(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return kn(i),null}if(e=Ye.current,ue(i))Rt(i);else{switch(u=df(Ge.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(s,{is:l.is}):u.createElement(s)}}e[yn]=i,e[zn]=l;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(xi(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ms(i)}}return kn(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ms(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=Ge.current,ue(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,u=Kn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[yn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||_v(e.nodeValue,s)),e||Ma(i)}else e=df(e).createTextNode(l),e[yn]=i,i.stateNode=e}return kn(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ue(i),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[yn]=i}else Xe(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;kn(i),u=!1}else Pi!==null&&(zd(Pi),Pi=null),u=!0;if(!u)return i.flags&256?(ds(i),i):(ds(i),null)}if(ds(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),ef(i,i.updateQueue),kn(i),null;case 4:return Ve(),e===null&&qd(i.stateNode.containerInfo),kn(i),null;case 10:return vs(i.type),kn(i),null;case 19:if(ce(si),u=i.memoizedState,u===null)return kn(i),null;if(l=(i.flags&128)!==0,d=u.rendering,d===null)if(l)Ac(u,!1);else{if(Yn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Bu(e),d!==null){for(i.flags|=128,Ac(u,!1),e=d.updateQueue,i.updateQueue=e,ef(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)jg(s,e),s=s.sibling;return he(si,si.current&1|2),i.child}e=e.sibling}u.tail!==null&&St()>nf&&(i.flags|=128,l=!0,Ac(u,!1),i.lanes=4194304)}else{if(!l)if(e=Bu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,ef(i,e),Ac(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!ln)return kn(i),null}else 2*St()-u.renderingStartTime>nf&&s!==536870912&&(i.flags|=128,l=!0,Ac(u,!1),i.lanes=4194304);u.isBackwards?(d.sibling=i.child,i.child=d):(e=u.last,e!==null?e.sibling=d:i.child=d,u.last=d)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=St(),i.sibling=null,e=si.current,he(si,l?e&1|2:e&1),i):(kn(i),null);case 22:case 23:return ds(i),Oh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(kn(i),i.subtreeFlags&6&&(i.flags|=8192)):kn(i),s=i.updateQueue,s!==null&&ef(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&ce(Wr),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),vs(ri),kn(i),null;case 25:return null}throw Error(a(156,i.tag))}function wx(e,i){switch(ko(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return vs(ri),Ve(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return oe(i),null;case 13:if(ds(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Xe()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return ce(si),null;case 4:return Ve(),null;case 10:return vs(i.type),null;case 22:case 23:return ds(i),Oh(),e!==null&&ce(Wr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return vs(ri),null;case 25:return null;default:return null}}function Zg(e,i){switch(ko(i),i.tag){case 3:vs(ri),Ve();break;case 26:case 27:case 5:oe(i);break;case 4:Ve();break;case 13:ds(i);break;case 19:ce(si);break;case 10:vs(i.type);break;case 22:case 23:ds(i),Oh(),e!==null&&ce(Wr);break;case 24:vs(ri)}}var Tx={getCacheForType:function(e){var i=bi(ri),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},Ax=typeof WeakMap=="function"?WeakMap:Map,Xn=0,Un=null,on=null,hn=0,Nn=0,$i=null,Ss=!1,$o=!1,Rd=!1,bs=0,Yn=0,ir=0,to=0,Dd=0,fa=0,tl=0,Cc=null,qa=null,Pd=!1,Ud=0,nf=1/0,af=null,ar=null,sf=!1,eo=null,Rc=0,Nd=0,Ld=null,Dc=0,Od=null;function ta(){if((Xn&2)!==0&&hn!==0)return hn&-hn;if(T.T!==null){var e=Wo;return e!==0?e:kd()}return ga()}function Kg(){fa===0&&(fa=(hn&536870912)===0||ln?Ze():536870912);var e=oa.current;return e!==null&&(e.flags|=32),fa}function Ni(e,i,s){(e===Un&&Nn===2||e.cancelPendingCommit!==null)&&(el(e,0),Es(e,hn,fa,!1)),Ln(e,s),((Xn&2)===0||e!==Un)&&(e===Un&&((Xn&2)===0&&(to|=s),Yn===4&&Es(e,hn,fa,!1)),Ya(e))}function Qg(e,i,s){if((Xn&6)!==0)throw Error(a(327));var l=!s&&(i&60)===0&&(i&e.expiredLanes)===0||ye(e,i),u=l?Dx(e,i):Fd(e,i,!0),d=l;do{if(u===0){$o&&!l&&Es(e,i,0,!1);break}else if(u===6)Es(e,i,0,!Ss);else{if(s=e.current.alternate,d&&!Cx(s)){u=Fd(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var P=e;u=Cc;var B=P.current.memoizedState.isDehydrated;if(B&&(el(P,S).flags|=256),S=Fd(P,S,!1),S!==2){if(Rd&&!B){P.errorRecoveryDisabledLanes|=d,to|=d,u=4;break t}d=qa,qa=u,d!==null&&zd(d)}u=S}if(d=!1,u!==2)continue}}if(u===1){el(e,0),Es(e,i,0,!0);break}t:{switch(l=e,u){case 0:case 1:throw Error(a(345));case 4:if((i&4194176)===i){Es(l,i,fa,!Ss);break t}break;case 2:qa=null;break;case 3:case 5:break;default:throw Error(a(329))}if(l.finishedWork=s,l.finishedLanes=i,(i&62914560)===i&&(d=Ud+300-St(),10<d)){if(Es(l,i,fa,!Ss),jt(l,0)!==0)break t;l.timeoutHandle=Mv(Jg.bind(null,l,s,qa,af,Pd,i,fa,to,tl,Ss,2,-0,0),d);break t}Jg(l,s,qa,af,Pd,i,fa,to,tl,Ss,0,-0,0)}}break}while(!0);Ya(e)}function zd(e){qa===null?qa=e:qa.push.apply(qa,e)}function Jg(e,i,s,l,u,d,S,P,B,Z,Tt,Gt,pt){var wt=i.subtreeFlags;if((wt&8192||(wt&16785408)===16785408)&&(zc={stylesheets:null,count:0,unsuspend:cy},Vg(i),i=fy(),i!==null)){e.cancelPendingCommit=i(sv.bind(null,e,s,l,u,S,P,B,1,Gt,pt)),Es(e,d,S,!Z);return}sv(e,s,l,u,S,P,B,Tt,Gt,pt)}function Cx(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],d=u.getSnapshot;u=u.value;try{if(!Ri(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Es(e,i,s,l){i&=~Dd,i&=~to,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var u=i;0<u;){var d=31-Vt(u),S=1<<d;l[d]=-1,u&=~S}s!==0&&Pa(e,s,i)}function rf(){return(Xn&6)===0?(Pc(0),!1):!0}function Id(){if(on!==null){if(Nn===0)var e=on.return;else e=on,gs=Kr=null,kh(e),Wi=null,fc=0,e=on;for(;e!==null;)Zg(e.alternate,e),e=e.return;on=null}}function el(e,i){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,qx(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Id(),Un=e,on=s=nr(e.current,null),hn=i,Nn=0,$i=null,Ss=!1,$o=ye(e,i),Rd=!1,tl=fa=Dd=to=ir=Yn=0,qa=Cc=null,Pd=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var u=31-Vt(l),d=1<<u;i|=e[u],l&=~d}return bs=i,Vr(),s}function $g(e,i){en=null,T.H=ja,i===Sn?(i=vi(),Nn=3):i===Vn?(i=vi(),Nn=4):Nn=i===hg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,$i=i,on===null&&(Yn=1,Zu(e,Gi(i,e.current)))}function tv(){var e=T.H;return T.H=ja,e===null?ja:e}function ev(){var e=T.A;return T.A=Tx,e}function Bd(){Yn=4,Ss||(hn&4194176)!==hn&&oa.current!==null||($o=!0),(ir&134217727)===0&&(to&134217727)===0||Un===null||Es(Un,hn,fa,!1)}function Fd(e,i,s){var l=Xn;Xn|=2;var u=tv(),d=ev();(Un!==e||hn!==i)&&(af=null,el(e,i)),i=!1;var S=Yn;t:do try{if(Nn!==0&&on!==null){var P=on,B=$i;switch(Nn){case 8:Id(),S=6;break t;case 3:case 2:case 6:oa.current===null&&(i=!0);var Z=Nn;if(Nn=0,$i=null,nl(e,P,B,Z),s&&$o){S=0;break t}break;default:Z=Nn,Nn=0,$i=null,nl(e,P,B,Z)}}Rx(),S=Yn;break}catch(Tt){$g(e,Tt)}while(!0);return i&&e.shellSuspendCounter++,gs=Kr=null,Xn=l,T.H=u,T.A=d,on===null&&(Un=null,hn=0,Vr()),S}function Rx(){for(;on!==null;)nv(on)}function Dx(e,i){var s=Xn;Xn|=2;var l=tv(),u=ev();Un!==e||hn!==i?(af=null,nf=St()+500,el(e,i)):$o=ye(e,i);t:do try{if(Nn!==0&&on!==null){i=on;var d=$i;e:switch(Nn){case 1:Nn=0,$i=null,nl(e,i,d,1);break;case 2:if(ka(d)){Nn=0,$i=null,iv(i);break}i=function(){Nn===2&&Un===e&&(Nn=7),Ya(e)},d.then(i,i);break t;case 3:Nn=7;break t;case 4:Nn=5;break t;case 7:ka(d)?(Nn=0,$i=null,iv(i)):(Nn=0,$i=null,nl(e,i,d,7));break;case 5:var S=null;switch(on.tag){case 26:S=on.memoizedState;case 5:case 27:var P=on;if(!S||Uv(S)){Nn=0,$i=null;var B=P.sibling;if(B!==null)on=B;else{var Z=P.return;Z!==null?(on=Z,of(Z)):on=null}break e}}Nn=0,$i=null,nl(e,i,d,5);break;case 6:Nn=0,$i=null,nl(e,i,d,6);break;case 8:Id(),Yn=6;break t;default:throw Error(a(462))}}Px();break}catch(Tt){$g(e,Tt)}while(!0);return gs=Kr=null,T.H=l,T.A=u,Xn=s,on!==null?0:(Un=null,hn=0,Vr(),Yn)}function Px(){for(;on!==null&&!C();)nv(on)}function nv(e){var i=Eg(e.alternate,e,bs);e.memoizedProps=e.pendingProps,i===null?of(e):on=i}function iv(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=_g(s,i,i.pendingProps,i.type,void 0,hn);break;case 11:i=_g(s,i,i.pendingProps,i.type.render,i.ref,hn);break;case 5:kh(i);default:Zg(s,i),i=on=jg(i,bs),i=Eg(s,i,bs)}e.memoizedProps=e.pendingProps,i===null?of(e):on=i}function nl(e,i,s,l){gs=Kr=null,kh(i),Wi=null,fc=0;var u=i.return;try{if(xx(e,u,i,s,hn)){Yn=1,Zu(e,Gi(s,e.current)),on=null;return}}catch(d){if(u!==null)throw on=u,d;Yn=1,Zu(e,Gi(s,e.current)),on=null;return}i.flags&32768?(ln||l===1?e=!0:$o||(hn&536870912)!==0?e=!1:(Ss=e=!0,(l===2||l===3||l===6)&&(l=oa.current,l!==null&&l.tag===13&&(l.flags|=16384))),av(i,e)):of(i)}function of(e){var i=e;do{if((i.flags&32768)!==0){av(i,Ss);return}e=i.return;var s=Ex(i.alternate,i,bs);if(s!==null){on=s;return}if(i=i.sibling,i!==null){on=i;return}on=i=e}while(i!==null);Yn===0&&(Yn=5)}function av(e,i){do{var s=wx(e.alternate,e);if(s!==null){s.flags&=32767,on=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){on=e;return}on=e=s}while(e!==null);Yn=6,on=null}function sv(e,i,s,l,u,d,S,P,B,Z){var Tt=T.T,Gt=Q.p;try{Q.p=2,T.T=null,Ux(e,i,s,l,Gt,u,d,S,P,B,Z)}finally{T.T=Tt,Q.p=Gt}}function Ux(e,i,s,l,u,d,S,P){do il();while(eo!==null);if((Xn&6)!==0)throw Error(a(327));var B=e.finishedWork;if(l=e.finishedLanes,B===null)return null;if(e.finishedWork=null,e.finishedLanes=0,B===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var Z=B.lanes|B.childLanes;if(Z|=Gr,$a(e,l,Z,d,S,P),e===Un&&(on=Un=null,hn=0),(B.subtreeFlags&10256)===0&&(B.flags&10256)===0||sf||(sf=!0,Nd=Z,Ld=s,zx(le,function(){return il(),null})),s=(B.flags&15990)!==0,(B.subtreeFlags&15990)!==0||s?(s=T.T,T.T=null,d=Q.p,Q.p=2,S=Xn,Xn|=4,Mx(e,B),Fg(B,e),sc(Qd,e.containerInfo),xf=!!Kd,Qd=Kd=null,e.current=B,Og(e,B.alternate,B),lt(),Xn=S,Q.p=d,T.T=s):e.current=B,sf?(sf=!1,eo=e,Rc=l):rv(e,Z),Z=e.pendingLanes,Z===0&&(ar=null),J(B.stateNode),Ya(e),i!==null)for(u=e.onRecoverableError,B=0;B<i.length;B++)Z=i[B],u(Z.value,{componentStack:Z.stack});return(Rc&3)!==0&&il(),Z=e.pendingLanes,(l&4194218)!==0&&(Z&42)!==0?e===Od?Dc++:(Dc=0,Od=e):Dc=0,Pc(0),null}function rv(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,dc(i)))}function il(){if(eo!==null){var e=eo,i=Nd;Nd=0;var s=Ua(Rc),l=T.T,u=Q.p;try{if(Q.p=32>s?32:s,T.T=null,eo===null)var d=!1;else{s=Ld,Ld=null;var S=eo,P=Rc;if(eo=null,Rc=0,(Xn&6)!==0)throw Error(a(331));var B=Xn;if(Xn|=4,Xg(S.current),Gg(S,S.current,P,s),Xn=B,Pc(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Oe,S)}catch{}d=!0}return d}finally{Q.p=u,T.T=l,rv(e,i)}}return!1}function ov(e,i,s){i=Gi(s,i),i=id(e.stateNode,i,2),e=Js(e,i,2),e!==null&&(Ln(e,2),Ya(e))}function Pn(e,i,s){if(e.tag===3)ov(e,e,s);else for(;i!==null;){if(i.tag===3){ov(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){e=Gi(s,e),s=ug(2),l=Js(i,s,2),l!==null&&(fg(s,l,i,e),Ln(l,2),Ya(l));break}}i=i.return}}function Hd(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new Ax;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(Rd=!0,u.add(s),e=Nx.bind(null,e,i,s),i.then(e,e))}function Nx(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Un===e&&(hn&s)===s&&(Yn===4||Yn===3&&(hn&62914560)===hn&&300>St()-Ud?(Xn&2)===0&&el(e,0):Dd|=s,tl===hn&&(tl=0)),Ya(e)}function lv(e,i){i===0&&(i=ke()),e=ya(e,i),e!==null&&(Ln(e,i),Ya(e))}function Lx(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),lv(e,s)}function Ox(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),lv(e,s)}function zx(e,i){return ve(e,i)}var lf=null,al=null,Gd=!1,cf=!1,Vd=!1,no=0;function Ya(e){e!==al&&e.next===null&&(al===null?lf=al=e:al=al.next=e),cf=!0,Gd||(Gd=!0,Bx(Ix))}function Pc(e,i){if(!Vd&&cf){Vd=!0;do for(var s=!1,l=lf;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var S=l.suspendedLanes,P=l.pingedLanes;d=(1<<31-Vt(42|e)+1)-1,d&=u&~(S&~P),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(s=!0,fv(l,d))}else d=hn,d=jt(l,l===Un?d:0),(d&3)===0||ye(l,d)||(s=!0,fv(l,d));l=l.next}while(s);Vd=!1}}function Ix(){cf=Gd=!1;var e=0;no!==0&&(jx()&&(e=no),no=0);for(var i=St(),s=null,l=lf;l!==null;){var u=l.next,d=cv(l,i);d===0?(l.next=null,s===null?lf=u:s.next=u,u===null&&(al=s)):(s=l,(e!==0||(d&3)!==0)&&(cf=!0)),l=u}Pc(e)}function cv(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Vt(d),P=1<<S,B=u[S];B===-1?((P&s)===0||(P&l)!==0)&&(u[S]=He(P,i)):B<=i&&(e.expiredLanes|=P),d&=~P}if(i=Un,s=hn,s=jt(e,e===i?s:0),l=e.callbackNode,s===0||e===i&&Nn===2||e.cancelPendingCommit!==null)return l!==null&&l!==null&&z(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||ye(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&z(l),Ua(s)){case 2:case 8:s=Ae;break;case 32:s=le;break;case 268435456:s=Je;break;default:s=le}return l=uv.bind(null,e),s=ve(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&z(l),e.callbackPriority=2,e.callbackNode=null,2}function uv(e,i){var s=e.callbackNode;if(il()&&e.callbackNode!==s)return null;var l=hn;return l=jt(e,e===Un?l:0),l===0?null:(Qg(e,l,i),cv(e,St()),e.callbackNode!=null&&e.callbackNode===s?uv.bind(null,e):null)}function fv(e,i){if(il())return null;Qg(e,i,!0)}function Bx(e){Yx(function(){(Xn&6)!==0?ve(At,e):e()})}function kd(){return no===0&&(no=Ze()),no}function hv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$e(""+e)}function dv(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Fx(e,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var d=hv((u[zn]||null).action),S=l.submitter;S&&(i=(i=S[zn]||null)?hv(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var P=new So("action","action",null,l,u);e.push({event:P,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(no!==0){var B=S?dv(u,S):new FormData(u);Jh(s,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(P.preventDefault(),B=S?dv(u,S):new FormData(u),Jh(s,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Xd=0;Xd<Hr.length;Xd++){var Wd=Hr[Xd],Hx=Wd.toLowerCase(),Gx=Wd[0].toUpperCase()+Wd.slice(1);Hi(Hx,"on"+Gx)}Hi(Ph,"onAnimationEnd"),Hi(Fo,"onAnimationIteration"),Hi(xa,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi(Uh,"onTransitionRun"),Hi(oc,"onTransitionStart"),Hi(Lu,"onTransitionCancel"),Hi(Ho,"onTransitionEnd"),_e("onMouseEnter",["mouseout","mouseover"]),_e("onMouseLeave",["mouseout","mouseover"]),_e("onPointerEnter",["pointerout","pointerover"]),_e("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uc));function mv(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],u=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var S=l.length-1;0<=S;S--){var P=l[S],B=P.instance,Z=P.currentTarget;if(P=P.listener,B!==d&&u.isPropagationStopped())break t;d=P,u.currentTarget=Z;try{d(u)}catch(Tt){Yu(Tt)}u.currentTarget=null,d=B}else for(S=0;S<l.length;S++){if(P=l[S],B=P.instance,Z=P.currentTarget,P=P.listener,B!==d&&u.isPropagationStopped())break t;d=P,u.currentTarget=Z;try{d(u)}catch(Tt){Yu(Tt)}u.currentTarget=null,d=B}}}}function cn(e,i){var s=i[Na];s===void 0&&(s=i[Na]=new Set);var l=e+"__bubble";s.has(l)||(pv(i,e,2,!1),s.add(l))}function jd(e,i,s){var l=0;i&&(l|=4),pv(s,e,l,i)}var uf="_reactListening"+Math.random().toString(36).slice(2);function qd(e){if(!e[uf]){e[uf]=!0,tt.forEach(function(s){s!=="selectionchange"&&(Vx.has(s)||jd(s,!1,e),jd(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[uf]||(i[uf]=!0,jd("selectionchange",!1,i))}}function pv(e,i,s,l){switch(Bv(i)){case 2:var u=my;break;case 8:u=py;break;default:u=r0}s=u.bind(null,i,s,e),u=void 0,!sa||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function Yd(e,i,s,l,u){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var P=l.stateNode.containerInfo;if(P===u||P.nodeType===8&&P.parentNode===u)break;if(S===4)for(S=l.return;S!==null;){var B=S.tag;if((B===3||B===4)&&(B=S.stateNode.containerInfo,B===u||B.nodeType===8&&B.parentNode===u))return;S=S.return}for(;P!==null;){if(S=Yi(P),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){l=d=S;continue t}P=P.parentNode}}l=l.return}Bi(function(){var Z=d,Tt=mn(s),Gt=[];t:{var pt=lc.get(e);if(pt!==void 0){var wt=So,De=e;switch(e){case"keypress":if(Ar(s)===0)break t;case"keydown":case"keyup":wt=yu;break;case"focusin":De="focus",wt=Fs;break;case"focusout":De="blur",wt=Fs;break;case"beforeblur":case"afterblur":wt=Fs;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":wt=Pr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":wt=jl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":wt=Eh;break;case Ph:case Fo:case xa:wt=Yl;break;case Ho:wt=wh;break;case"scroll":case"scrollend":wt=Sh;break;case"wheel":wt=Ro;break;case"copy":case"cut":case"paste":wt=bh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":wt=Jl;break;case"toggle":case"beforetoggle":wt=wu}var We=(i&4)!==0,Zn=!We&&(e==="scroll"||e==="scrollend"),nt=We?pt!==null?pt+"Capture":null:pt;We=[];for(var q=Z,ft;q!==null;){var Ot=q;if(ft=Ot.stateNode,Ot=Ot.tag,Ot!==5&&Ot!==26&&Ot!==27||ft===null||nt===null||(Ot=La(q,nt),Ot!=null&&We.push(Nc(q,Ot,ft))),Zn)break;q=q.return}0<We.length&&(pt=new wt(pt,De,null,s,Tt),Gt.push({event:pt,listeners:We}))}}if((i&7)===0){t:{if(pt=e==="mouseover"||e==="pointerover",wt=e==="mouseout"||e==="pointerout",pt&&s!==Mn&&(De=s.relatedTarget||s.fromElement)&&(Yi(De)||De[zi]))break t;if((wt||pt)&&(pt=Tt.window===Tt?Tt:(pt=Tt.ownerDocument)?pt.defaultView||pt.parentWindow:window,wt?(De=s.relatedTarget||s.toElement,wt=Z,De=De?Yi(De):null,De!==null&&(Zn=et(De),We=De.tag,De!==Zn||We!==5&&We!==27&&We!==6)&&(De=null)):(wt=null,De=Z),wt!==De)){if(We=Pr,Ot="onMouseLeave",nt="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(We=Jl,Ot="onPointerLeave",nt="onPointerEnter",q="pointer"),Zn=wt==null?pt:K(wt),ft=De==null?pt:K(De),pt=new We(Ot,q+"leave",wt,s,Tt),pt.target=Zn,pt.relatedTarget=ft,Ot=null,Yi(Tt)===Z&&(We=new We(nt,q+"enter",De,s,Tt),We.target=ft,We.relatedTarget=Zn,Ot=We),Zn=Ot,wt&&De)e:{for(We=wt,nt=De,q=0,ft=We;ft;ft=sl(ft))q++;for(ft=0,Ot=nt;Ot;Ot=sl(Ot))ft++;for(;0<q-ft;)We=sl(We),q--;for(;0<ft-q;)nt=sl(nt),ft--;for(;q--;){if(We===nt||nt!==null&&We===nt.alternate)break e;We=sl(We),nt=sl(nt)}We=null}else We=null;wt!==null&&gv(Gt,pt,wt,We,!1),De!==null&&Zn!==null&&gv(Gt,Zn,De,We,!0)}}t:{if(pt=Z?K(Z):window,wt=pt.nodeName&&pt.nodeName.toLowerCase(),wt==="select"||wt==="input"&&pt.type==="file")var Te=ec;else if(Cu(pt))if(Lr)Te=Uu;else{Te=Pu;var an=Du}else wt=pt.nodeName,!wt||wt.toLowerCase()!=="input"||pt.type!=="checkbox"&&pt.type!=="radio"?Z&&xe(Z.elementType)&&(Te=ec):Te=Dh;if(Te&&(Te=Te(e,Z))){No(Gt,Te,s,Tt);break t}an&&an(e,pt,Z),e==="focusout"&&Z&&pt.type==="number"&&Z.memoizedProps.value!=null&&re(pt,"number",pt.value)}switch(an=Z?K(Z):window,e){case"focusin":(Cu(an)||an.contentEditable==="true")&&(os=an,ra=Z,ls=null);break;case"focusout":ls=ra=os=null;break;case"mousedown":Bo=!0;break;case"contextmenu":case"mouseup":case"dragend":Bo=!1,rc(Gt,s,Tt);break;case"selectionchange":if(Io)break;case"keydown":case"keyup":rc(Gt,s,Tt)}var Ne;if(as)t:{switch(e){case"compositionstart":var Be="onCompositionStart";break t;case"compositionend":Be="onCompositionEnd";break t;case"compositionupdate":Be="onCompositionUpdate";break t}Be=void 0}else ss?Uo(e,s)&&(Be="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Be="onCompositionStart");Be&&(Do&&s.locale!=="ko"&&(ss||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&ss&&(Ne=Mo()):(Fi=Tt,wr="value"in Fi?Fi.value:Fi.textContent,ss=!0)),an=ff(Z,Be),0<an.length&&(Be=new To(Be,e,null,s,Tt),Gt.push({event:Be,listeners:an}),Ne?Be.data=Ne:(Ne=Ah(s),Ne!==null&&(Be.data=Ne)))),(Ne=$l?Au(e,s):Ch(e,s))&&(Be=ff(Z,"onBeforeInput"),0<Be.length&&(an=new To("onBeforeInput","beforeinput",null,s,Tt),Gt.push({event:an,listeners:Be}),an.data=Ne)),Fx(Gt,e,Z,s,Tt)}mv(Gt,i)})}function Nc(e,i,s){return{instance:e,listener:i,currentTarget:s}}function ff(e,i){for(var s=i+"Capture",l=[];e!==null;){var u=e,d=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=La(e,s),u!=null&&l.unshift(Nc(e,u,d)),u=La(e,i),u!=null&&l.push(Nc(e,u,d))),e=e.return}return l}function sl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gv(e,i,s,l,u){for(var d=i._reactName,S=[];s!==null&&s!==l;){var P=s,B=P.alternate,Z=P.stateNode;if(P=P.tag,B!==null&&B===l)break;P!==5&&P!==26&&P!==27||Z===null||(B=Z,u?(Z=La(s,d),Z!=null&&S.unshift(Nc(s,Z,B))):u||(Z=La(s,d),Z!=null&&S.push(Nc(s,Z,B)))),s=s.return}S.length!==0&&e.push({event:i,listeners:S})}var kx=/\r\n?/g,Xx=/\u0000|\uFFFD/g;function vv(e){return(typeof e=="string"?e:""+e).replace(kx,`
`).replace(Xx,"")}function _v(e,i){return i=vv(i),vv(e)===i}function hf(){}function En(e,i,s,l,u,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||It(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&It(e,""+l);break;case"className":R(e,"class",l);break;case"tabIndex":R(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":R(e,s,l);break;case"style":Ee(e,l,d);break;case"data":if(i!=="object"){R(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=$e(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&En(e,i,"name",u.name,u,null),En(e,i,"formEncType",u.formEncType,u,null),En(e,i,"formMethod",u.formMethod,u,null),En(e,i,"formTarget",u.formTarget,u,null)):(En(e,i,"encType",u.encType,u,null),En(e,i,"method",u.method,u,null),En(e,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=$e(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=hf);break;case"onScroll":l!=null&&cn("scroll",e);break;case"onScrollEnd":l!=null&&cn("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=$e(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":cn("beforetoggle",e),cn("toggle",e),Nt(e,"popover",l);break;case"xlinkActuate":ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ct(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ct(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ct(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ct(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Nt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Re.get(s)||s,Nt(e,s,l))}}function Zd(e,i,s,l,u,d){switch(s){case"style":Ee(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?It(e,l):(typeof l=="number"||typeof l=="bigint")&&It(e,""+l);break;case"onScroll":l!=null&&cn("scroll",e);break;case"onScrollEnd":l!=null&&cn("scrollend",e);break;case"onClick":l!=null&&(e.onclick=hf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=e[zn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,u);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Nt(e,s,l)}}}function xi(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":cn("error",e),cn("load",e);var l=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:En(e,i,d,S,s,null)}}u&&En(e,i,"srcSet",s.srcSet,s,null),l&&En(e,i,"src",s.src,s,null);return;case"input":cn("invalid",e);var P=d=S=u=null,B=null,Z=null;for(l in s)if(s.hasOwnProperty(l)){var Tt=s[l];if(Tt!=null)switch(l){case"name":u=Tt;break;case"type":S=Tt;break;case"checked":B=Tt;break;case"defaultChecked":Z=Tt;break;case"value":d=Tt;break;case"defaultValue":P=Tt;break;case"children":case"dangerouslySetInnerHTML":if(Tt!=null)throw Error(a(137,i));break;default:En(e,i,l,Tt,s,null)}}Lt(e,d,P,B,Z,S,u,!1),X(e);return;case"select":cn("invalid",e),l=S=d=null;for(u in s)if(s.hasOwnProperty(u)&&(P=s[u],P!=null))switch(u){case"value":d=P;break;case"defaultValue":S=P;break;case"multiple":l=P;default:En(e,i,u,P,s,null)}i=d,s=S,e.multiple=!!l,i!=null?me(e,!!l,i,!1):s!=null&&me(e,!!l,s,!0);return;case"textarea":cn("invalid",e),d=u=l=null;for(S in s)if(s.hasOwnProperty(S)&&(P=s[S],P!=null))switch(S){case"value":l=P;break;case"defaultValue":u=P;break;case"children":d=P;break;case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(91));break;default:En(e,i,S,P,s,null)}Xt(e,l,u,d),X(e);return;case"option":for(B in s)if(s.hasOwnProperty(B)&&(l=s[B],l!=null))switch(B){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:En(e,i,B,l,s,null)}return;case"dialog":cn("cancel",e),cn("close",e);break;case"iframe":case"object":cn("load",e);break;case"video":case"audio":for(l=0;l<Uc.length;l++)cn(Uc[l],e);break;case"image":cn("error",e),cn("load",e);break;case"details":cn("toggle",e);break;case"embed":case"source":case"link":cn("error",e),cn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in s)if(s.hasOwnProperty(Z)&&(l=s[Z],l!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:En(e,i,Z,l,s,null)}return;default:if(xe(i)){for(Tt in s)s.hasOwnProperty(Tt)&&(l=s[Tt],l!==void 0&&Zd(e,i,Tt,l,s,void 0));return}}for(P in s)s.hasOwnProperty(P)&&(l=s[P],l!=null&&En(e,i,P,l,s,null))}function Wx(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,P=null,B=null,Z=null,Tt=null;for(wt in s){var Gt=s[wt];if(s.hasOwnProperty(wt)&&Gt!=null)switch(wt){case"checked":break;case"value":break;case"defaultValue":B=Gt;default:l.hasOwnProperty(wt)||En(e,i,wt,null,l,Gt)}}for(var pt in l){var wt=l[pt];if(Gt=s[pt],l.hasOwnProperty(pt)&&(wt!=null||Gt!=null))switch(pt){case"type":d=wt;break;case"name":u=wt;break;case"checked":Z=wt;break;case"defaultChecked":Tt=wt;break;case"value":S=wt;break;case"defaultValue":P=wt;break;case"children":case"dangerouslySetInnerHTML":if(wt!=null)throw Error(a(137,i));break;default:wt!==Gt&&En(e,i,pt,wt,l,Gt)}}Ct(e,S,P,B,Z,Tt,d,u);return;case"select":wt=S=P=pt=null;for(d in s)if(B=s[d],s.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":wt=B;default:l.hasOwnProperty(d)||En(e,i,d,null,l,B)}for(u in l)if(d=l[u],B=s[u],l.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":pt=d;break;case"defaultValue":P=d;break;case"multiple":S=d;default:d!==B&&En(e,i,u,d,l,B)}i=P,s=S,l=wt,pt!=null?me(e,!!s,pt,!1):!!l!=!!s&&(i!=null?me(e,!!s,i,!0):me(e,!!s,s?[]:"",!1));return;case"textarea":wt=pt=null;for(P in s)if(u=s[P],s.hasOwnProperty(P)&&u!=null&&!l.hasOwnProperty(P))switch(P){case"value":break;case"children":break;default:En(e,i,P,null,l,u)}for(S in l)if(u=l[S],d=s[S],l.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":pt=u;break;case"defaultValue":wt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&En(e,i,S,u,l,d)}Zt(e,pt,wt);return;case"option":for(var De in s)if(pt=s[De],s.hasOwnProperty(De)&&pt!=null&&!l.hasOwnProperty(De))switch(De){case"selected":e.selected=!1;break;default:En(e,i,De,null,l,pt)}for(B in l)if(pt=l[B],wt=s[B],l.hasOwnProperty(B)&&pt!==wt&&(pt!=null||wt!=null))switch(B){case"selected":e.selected=pt&&typeof pt!="function"&&typeof pt!="symbol";break;default:En(e,i,B,pt,l,wt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var We in s)pt=s[We],s.hasOwnProperty(We)&&pt!=null&&!l.hasOwnProperty(We)&&En(e,i,We,null,l,pt);for(Z in l)if(pt=l[Z],wt=s[Z],l.hasOwnProperty(Z)&&pt!==wt&&(pt!=null||wt!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:En(e,i,Z,pt,l,wt)}return;default:if(xe(i)){for(var Zn in s)pt=s[Zn],s.hasOwnProperty(Zn)&&pt!==void 0&&!l.hasOwnProperty(Zn)&&Zd(e,i,Zn,void 0,l,pt);for(Tt in l)pt=l[Tt],wt=s[Tt],!l.hasOwnProperty(Tt)||pt===wt||pt===void 0&&wt===void 0||Zd(e,i,Tt,pt,l,wt);return}}for(var nt in s)pt=s[nt],s.hasOwnProperty(nt)&&pt!=null&&!l.hasOwnProperty(nt)&&En(e,i,nt,null,l,pt);for(Gt in l)pt=l[Gt],wt=s[Gt],!l.hasOwnProperty(Gt)||pt===wt||pt==null&&wt==null||En(e,i,Gt,pt,l,wt)}var Kd=null,Qd=null;function df(e){return e.nodeType===9?e:e.ownerDocument}function xv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Jd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var $d=null;function jx(){var e=window.event;return e&&e.type==="popstate"?e===$d?!1:($d=e,!0):($d=null,!1)}var Mv=typeof setTimeout=="function"?setTimeout:void 0,qx=typeof clearTimeout=="function"?clearTimeout:void 0,Sv=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Sv<"u"?function(e){return Sv.resolve(null).then(e).catch(Zx)}:Mv;function Zx(e){setTimeout(function(){throw e})}function t0(e,i){var s=i,l=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(l===0){e.removeChild(u),Gc(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=u}while(s);Gc(i)}function e0(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":e0(s),es(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Kx(e,i,s,l){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[va])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ba(e.nextSibling),e===null)break}return null}function Qx(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ba(e.nextSibling),e===null))return null;return e}function ba(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}function bv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function Ev(e,i,s){switch(i=df(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}var ha=new Map,wv=new Set;function mf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var ws=Q.d;Q.d={f:Jx,r:$x,D:ty,C:ey,L:ny,m:iy,X:sy,S:ay,M:ry};function Jx(){var e=ws.f(),i=rf();return e||i}function $x(e){var i=D(e);i!==null&&i.tag===5&&i.type==="form"?Jp(i):ws.r(e)}var rl=typeof document>"u"?null:document;function Tv(e,i,s){var l=rl;if(l&&typeof i=="string"&&i){var u=Pt(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),wv.has(u)||(wv.add(u),e={rel:e,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),xi(i,"link",e),ot(i),l.head.appendChild(i)))}}function ty(e){ws.D(e),Tv("dns-prefetch",e,null)}function ey(e,i){ws.C(e,i),Tv("preconnect",e,i)}function ny(e,i,s){ws.L(e,i,s);var l=rl;if(l&&e&&i){var u='link[rel="preload"][as="'+Pt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Pt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Pt(s.imageSizes)+'"]')):u+='[href="'+Pt(e)+'"]';var d=u;switch(i){case"style":d=ol(e);break;case"script":d=ll(e)}ha.has(d)||(e=E({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),ha.set(d,e),l.querySelector(u)!==null||i==="style"&&l.querySelector(Lc(d))||i==="script"&&l.querySelector(Oc(d))||(i=l.createElement("link"),xi(i,"link",e),ot(i),l.head.appendChild(i)))}}function iy(e,i){ws.m(e,i);var s=rl;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Pt(l)+'"][href="'+Pt(e)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ll(e)}if(!ha.has(d)&&(e=E({rel:"modulepreload",href:e},i),ha.set(d,e),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Oc(d)))return}l=s.createElement("link"),xi(l,"link",e),ot(l),s.head.appendChild(l)}}}function ay(e,i,s){ws.S(e,i,s);var l=rl;if(l&&e){var u=ht(l).hoistableStyles,d=ol(e);i=i||"default";var S=u.get(d);if(!S){var P={loading:0,preload:null};if(S=l.querySelector(Lc(d)))P.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},s),(s=ha.get(d))&&n0(e,s);var B=S=l.createElement("link");ot(B),xi(B,"link",e),B._p=new Promise(function(Z,Tt){B.onload=Z,B.onerror=Tt}),B.addEventListener("load",function(){P.loading|=1}),B.addEventListener("error",function(){P.loading|=2}),P.loading|=4,pf(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:P},u.set(d,S)}}}function sy(e,i){ws.X(e,i);var s=rl;if(s&&e){var l=ht(s).hoistableScripts,u=ll(e),d=l.get(u);d||(d=s.querySelector(Oc(u)),d||(e=E({src:e,async:!0},i),(i=ha.get(u))&&i0(e,i),d=s.createElement("script"),ot(d),xi(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function ry(e,i){ws.M(e,i);var s=rl;if(s&&e){var l=ht(s).hoistableScripts,u=ll(e),d=l.get(u);d||(d=s.querySelector(Oc(u)),d||(e=E({src:e,async:!0,type:"module"},i),(i=ha.get(u))&&i0(e,i),d=s.createElement("script"),ot(d),xi(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function Av(e,i,s,l){var u=(u=Ge.current)?mf(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=ol(s.href),s=ht(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=ol(s.href);var d=ht(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(Lc(e)))&&!d._p&&(S.instance=d,S.state.loading=5),ha.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ha.set(e,s),d||oy(u,e,s,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ll(s),s=ht(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function ol(e){return'href="'+Pt(e)+'"'}function Lc(e){return'link[rel="stylesheet"]['+e+"]"}function Cv(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function oy(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),xi(i,"link",s),ot(i),e.head.appendChild(i))}function ll(e){return'[src="'+Pt(e)+'"]'}function Oc(e){return"script[async]"+e}function Rv(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Pt(s.href)+'"]');if(l)return i.instance=l,ot(l),l;var u=E({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ot(l),xi(l,"style",u),pf(l,s.precedence,e),i.instance=l;case"stylesheet":u=ol(s.href);var d=e.querySelector(Lc(u));if(d)return i.state.loading|=4,i.instance=d,ot(d),d;l=Cv(s),(u=ha.get(u))&&n0(l,u),d=(e.ownerDocument||e).createElement("link"),ot(d);var S=d;return S._p=new Promise(function(P,B){S.onload=P,S.onerror=B}),xi(d,"link",l),i.state.loading|=4,pf(d,s.precedence,e),i.instance=d;case"script":return d=ll(s.src),(u=e.querySelector(Oc(d)))?(i.instance=u,ot(u),u):(l=s,(u=ha.get(d))&&(l=E({},s),i0(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),ot(u),xi(u,"link",l),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,pf(l,s.precedence,e));return i.instance}function pf(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,S=0;S<l.length;S++){var P=l[S];if(P.dataset.precedence===i)d=P;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function n0(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function i0(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var gf=null;function Dv(e,i,s){if(gf===null){var l=new Map,u=gf=new Map;u.set(s,l)}else u=gf,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var d=s[u];if(!(d[va]||d[yn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var P=l.get(S);P?P.push(d):l.set(S,[d])}}return l}function Pv(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function ly(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Uv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var zc=null;function cy(){}function uy(e,i,s){if(zc===null)throw Error(a(475));var l=zc;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=ol(s.href),d=e.querySelector(Lc(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=vf.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,ot(d);return}d=e.ownerDocument||e,s=Cv(s),(u=ha.get(u))&&n0(s,u),d=d.createElement("link"),ot(d);var S=d;S._p=new Promise(function(P,B){S.onload=P,S.onerror=B}),xi(d,"link",s),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=vf.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function fy(){if(zc===null)throw Error(a(475));var e=zc;return e.stylesheets&&e.count===0&&a0(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&a0(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function vf(){if(this.count--,this.count===0){if(this.stylesheets)a0(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _f=null;function a0(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_f=new Map,i.forEach(hy,e),_f=null,vf.call(e))}function hy(e,i){if(!(i.state.loading&4)){var s=_f.get(e);if(s)var l=s.get(null);else{s=new Map,_f.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}u=i.instance,S=u.getAttribute("data-precedence"),d=s.get(S)||l,d===l&&s.set(null,u),s.set(S,u),this.count++,l=vf.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Ic={$$typeof:y,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function dy(e,i,s,l,u,d,S,P){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=On(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=On(0),this.hiddenUpdates=On(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function Nv(e,i,s,l,u,d,S,P,B,Z,Tt,Gt){return e=new dy(e,i,s,S,P,B,Z,Gt),i=1,d===!0&&(i|=24),d=ua(3,null,null,i),e.current=d,d.stateNode=e,i=zh(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},gd(d),e}function Lv(e){return e?(e=Ba,e):Ba}function Ov(e,i,s,l,u,d){u=Lv(u),l.context===null?l.context=u:l.pendingContext=u,l=Qs(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Js(e,l,i),s!==null&&(Ni(s,e,i),yc(s,e,i))}function zv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function s0(e,i){zv(e,i),(e=e.alternate)&&zv(e,i)}function Iv(e){if(e.tag===13){var i=ya(e,67108864);i!==null&&Ni(i,e,67108864),s0(e,67108864)}}var xf=!0;function my(e,i,s,l){var u=T.T;T.T=null;var d=Q.p;try{Q.p=2,r0(e,i,s,l)}finally{Q.p=d,T.T=u}}function py(e,i,s,l){var u=T.T;T.T=null;var d=Q.p;try{Q.p=8,r0(e,i,s,l)}finally{Q.p=d,T.T=u}}function r0(e,i,s,l){if(xf){var u=o0(l);if(u===null)Yd(e,i,l,yf,s),Fv(e,l);else if(vy(u,e,i,s,l))l.stopPropagation();else if(Fv(e,l),i&4&&-1<gy.indexOf(e)){for(;u!==null;){var d=D(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=kt(d.pendingLanes);if(S!==0){var P=d;for(P.pendingLanes|=2,P.entangledLanes|=2;S;){var B=1<<31-Vt(S);P.entanglements[1]|=B,S&=~B}Ya(d),(Xn&6)===0&&(nf=St()+500,Pc(0))}}break;case 13:P=ya(d,2),P!==null&&Ni(P,d,2),rf(),s0(d,2)}if(d=o0(l),d===null&&Yd(e,i,l,yf,s),d===u)break;u=d}u!==null&&l.stopPropagation()}else Yd(e,i,l,null,s)}}function o0(e){return e=mn(e),l0(e)}var yf=null;function l0(e){if(yf=null,e=Yi(e),e!==null){var i=et(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=Wt(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return yf=e,null}function Bv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zt()){case At:return 2;case Ae:return 8;case le:case Se:return 32;case Je:return 268435456;default:return 32}default:return 32}}var c0=!1,sr=null,rr=null,or=null,Bc=new Map,Fc=new Map,lr=[],gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fv(e,i){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Bc.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fc.delete(i.pointerId)}}function Hc(e,i,s,l,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},i!==null&&(i=D(i),i!==null&&Iv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function vy(e,i,s,l,u){switch(i){case"focusin":return sr=Hc(sr,e,i,s,l,u),!0;case"dragenter":return rr=Hc(rr,e,i,s,l,u),!0;case"mouseover":return or=Hc(or,e,i,s,l,u),!0;case"pointerover":var d=u.pointerId;return Bc.set(d,Hc(Bc.get(d)||null,e,i,s,l,u)),!0;case"gotpointercapture":return d=u.pointerId,Fc.set(d,Hc(Fc.get(d)||null,e,i,s,l,u)),!0}return!1}function Hv(e){var i=Yi(e.target);if(i!==null){var s=et(i);if(s!==null){if(i=s.tag,i===13){if(i=Wt(s),i!==null){e.blockedOn=i,Ue(e.priority,function(){if(s.tag===13){var l=ta(),u=ya(s,l);u!==null&&Ni(u,s,l),s0(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mf(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=o0(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Mn=l,s.target.dispatchEvent(l),Mn=null}else return i=D(s),i!==null&&Iv(i),e.blockedOn=s,!1;i.shift()}return!0}function Gv(e,i,s){Mf(e)&&s.delete(i)}function _y(){c0=!1,sr!==null&&Mf(sr)&&(sr=null),rr!==null&&Mf(rr)&&(rr=null),or!==null&&Mf(or)&&(or=null),Bc.forEach(Gv),Fc.forEach(Gv)}function Sf(e,i){e.blockedOn===i&&(e.blockedOn=null,c0||(c0=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,_y)))}var bf=null;function Vv(e){bf!==e&&(bf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){bf===e&&(bf=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],u=e[i+2];if(typeof l!="function"){if(l0(l||s)===null)continue;break}var d=D(s);d!==null&&(e.splice(i,3),i-=3,Jh(d,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Gc(e){function i(B){return Sf(B,e)}sr!==null&&Sf(sr,e),rr!==null&&Sf(rr,e),or!==null&&Sf(or,e),Bc.forEach(i),Fc.forEach(i);for(var s=0;s<lr.length;s++){var l=lr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<lr.length&&(s=lr[0],s.blockedOn===null);)Hv(s),s.blockedOn===null&&lr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],d=s[l+1],S=u[zn]||null;if(typeof d=="function")S||Vv(s);else if(S){var P=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[zn]||null)P=S.formAction;else if(l0(u)!==null)continue}else P=S.action;typeof P=="function"?s[l+1]=P:(s.splice(l,3),l-=3),Vv(s)}}}function u0(e){this._internalRoot=e}Ef.prototype.render=u0.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ta();Ov(s,l,e,i,null,null)},Ef.prototype.unmount=u0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;e.tag===0&&il(),Ov(e.current,2,null,e,null,null),rf(),i[zi]=null}};function Ef(e){this._internalRoot=e}Ef.prototype.unstable_scheduleHydration=function(e){if(e){var i=ga();e={blockedOn:null,target:e,priority:i};for(var s=0;s<lr.length&&i!==0&&i<lr[s].priority;s++);lr.splice(s,0,e),s===0&&Hv(e)}};var kv=t.version;if(kv!=="19.0.0")throw Error(a(527,kv,"19.0.0"));Q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=mt(i),e=e!==null?Jt(e):null,e=e===null?null:e.stateNode,e};var xy={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:T,findFiberByHostInstance:Yi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wf.isDisabled&&wf.supportsFiber)try{Oe=wf.inject(xy),Ce=wf}catch{}}return kc.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",u=rg,d=og,S=lg,P=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(P=i.unstable_transitionCallbacks)),i=Nv(e,1,!1,null,null,s,l,u,d,S,P,null),e[zi]=i.current,qd(e.nodeType===8?e.parentNode:e),new u0(i)},kc.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,u="",d=rg,S=og,P=lg,B=null,Z=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(P=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(B=s.unstable_transitionCallbacks),s.formState!==void 0&&(Z=s.formState)),i=Nv(e,1,!0,i,s??null,l,u,d,S,P,B,Z),i.context=Lv(null),s=i.current,l=ta(),u=Qs(l),u.callback=null,Js(s,u,l),i.current.lanes=l,Ln(i,l),Ya(i),e[zi]=i.current,qd(e),new Ef(i)},kc.version="19.0.0",kc}var $v;function Ry(){if($v)return d0.exports;$v=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),d0.exports=Cy(),d0.exports}var Dy=Ry();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ym="174",Ul={ROTATE:0,DOLLY:1,PAN:2},Cl={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Py=0,t1=1,Uy=2,x_=1,Ny=2,Ps=3,br=0,Bn=1,ze=2,Mr=0,Nl=1,Ai=2,e1=3,n1=4,im=5,xr=100,Ly=101,Oy=102,zy=103,Iy=104,By=200,y_=201,Fy=202,Hy=203,fh=204,ru=205,Gy=206,Vy=207,ky=208,Xy=209,Wy=210,jy=211,qy=212,Yy=213,Zy=214,am=0,sm=1,rm=2,zl=3,om=4,lm=5,cm=6,um=7,M_=0,Ky=1,Qy=2,Sr=0,Jy=1,$y=2,tM=3,S_=4,eM=5,nM=6,iM=7,b_=300,Il=301,Bl=302,fm=303,hm=304,xh=306,ou=1e3,mo=1001,dm=1002,Ra=1003,aM=1004,Tf=1005,Aa=1006,v0=1007,po=1008,Is=1009,E_=1010,w_=1011,lu=1012,Zm=1013,go=1014,Ns=1015,du=1016,Km=1017,Qm=1018,Fl=1020,T_=35902,A_=1021,C_=1022,Ca=1023,R_=1024,D_=1025,Ll=1026,Hl=1027,P_=1028,Jm=1029,U_=1030,$m=1031,tp=1033,ah=33776,sh=33777,rh=33778,oh=33779,mm=35840,pm=35841,gm=35842,vm=35843,_m=36196,xm=37492,ym=37496,Mm=37808,Sm=37809,bm=37810,Em=37811,wm=37812,Tm=37813,Am=37814,Cm=37815,Rm=37816,Dm=37817,Pm=37818,Um=37819,Nm=37820,Lm=37821,lh=36492,Om=36494,zm=36495,N_=36283,Im=36284,Bm=36285,Fm=36286,sM=3200,rM=3201,L_=0,oM=1,yr="",ma="srgb",Gl="srgb-linear",hh="linear",wn="srgb",cl=7680,i1=519,lM=512,cM=513,uM=514,O_=515,fM=516,hM=517,dM=518,mM=519,Hm=35044,a1="300 es",Ls=2e3,dh=2001;class yo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,t);t.target=null}}}const wi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ch=Math.PI/180,Gm=180/Math.PI;function Os(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(wi[r&255]+wi[r>>8&255]+wi[r>>16&255]+wi[r>>24&255]+"-"+wi[t&255]+wi[t>>8&255]+"-"+wi[t>>16&15|64]+wi[t>>24&255]+"-"+wi[n&63|128]+wi[n>>8&255]+"-"+wi[n>>16&255]+wi[n>>24&255]+wi[a&255]+wi[a>>8&255]+wi[a>>16&255]+wi[a>>24&255]).toLowerCase()}function nn(r,t,n){return Math.max(t,Math.min(n,r))}function pM(r,t){return(r%t+t)%t}function _0(r,t,n){return(1-n)*r+n*t}function Ka(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const gM={DEG2RAD:ch};class ne{constructor(t=0,n=0){ne.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=nn(this.x,t.x,n.x),this.y=nn(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=nn(this.x,t,n),this.y=nn(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(nn(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(nn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*o+t.x,this.y=c*o+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(t,n,a,o,c,f,h,m,p){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,f,h,m,p)}set(t,n,a,o,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,f=a[0],h=a[3],m=a[6],p=a[1],g=a[4],v=a[7],x=a[2],y=a[5],b=a[8],w=o[0],M=o[3],_=o[6],N=o[1],U=o[4],A=o[7],O=o[2],H=o[5],G=o[8];return c[0]=f*w+h*N+m*O,c[3]=f*M+h*U+m*H,c[6]=f*_+h*A+m*G,c[1]=p*w+g*N+v*O,c[4]=p*M+g*U+v*H,c[7]=p*_+g*A+v*G,c[2]=x*w+y*N+b*O,c[5]=x*M+y*U+b*H,c[8]=x*_+y*A+b*G,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return n*f*g-n*h*p-a*c*g+a*h*m+o*c*p-o*f*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=g*f-h*p,x=h*m-g*c,y=p*c-f*m,b=n*v+a*x+o*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=v*w,t[1]=(o*p-g*a)*w,t[2]=(h*a-o*f)*w,t[3]=x*w,t[4]=(g*n-o*m)*w,t[5]=(o*c-h*n)*w,t[6]=y*w,t[7]=(a*m-p*n)*w,t[8]=(f*n-a*c)*w,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*h)+f+t,-o*p,o*m,-o*(-p*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(x0.makeScale(t,n)),this}rotate(t){return this.premultiply(x0.makeRotation(-t)),this}translate(t,n){return this.premultiply(x0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const x0=new qe;function z_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function cu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vM(){const r=cu("canvas");return r.style.display="block",r}const s1={};function uo(r){r in s1||(s1[r]=!0,console.warn(r))}function _M(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function xM(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yM(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const r1=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o1=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function MM(){const r={enabled:!0,workingColorSpace:Gl,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===wn&&(o.r=zs(o.r),o.g=zs(o.g),o.b=zs(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===wn&&(o.r=Ol(o.r),o.g=Ol(o.g),o.b=Ol(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===yr?hh:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Gl]:{primaries:t,whitePoint:a,transfer:hh,toXYZ:r1,fromXYZ:o1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ma},outputColorSpaceConfig:{drawingBufferColorSpace:ma}},[ma]:{primaries:t,whitePoint:a,transfer:wn,toXYZ:r1,fromXYZ:o1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ma}}}),r}const gn=MM();function zs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ol(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ul;class SM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ul===void 0&&(ul=cu("canvas")),ul.width=t.width,ul.height=t.height;const a=ul.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),n=ul}return n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=cu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=zs(c[f]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(zs(n[a]/255)*255):n[a]=zs(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bM=0;class ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(y0(o[f].image)):c.push(y0(o[f]))}else c=y0(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function y0(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?SM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EM=0;class Ci extends yo{constructor(t=Ci.DEFAULT_IMAGE,n=Ci.DEFAULT_MAPPING,a=mo,o=mo,c=Aa,f=po,h=Ca,m=Is,p=Ci.DEFAULT_ANISOTROPY,g=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Os(),this.name="",this.source=new ep(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==b_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ou:t.x=t.x-Math.floor(t.x);break;case mo:t.x=t.x<0?0:1;break;case dm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ou:t.y=t.y-Math.floor(t.y);break;case mo:t.y=t.y<0?0:1;break;case dm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ci.DEFAULT_IMAGE=null;Ci.DEFAULT_MAPPING=b_;Ci.DEFAULT_ANISOTROPY=1;class Cn{constructor(t=0,n=0,a=0,o=1){Cn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*o+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],b=m[9],w=m[2],M=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+w)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,A=(y+1)/2,O=(_+1)/2,H=(g+x)/4,G=(v+w)/4,W=(b+M)/4;return U>A&&U>O?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=H/a,c=G/a):A>O?A<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),a=H/o,c=W/o):O<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),a=G/c,o=W/c),this.set(a,o,c,n),this}let N=Math.sqrt((M-b)*(M-b)+(v-w)*(v-w)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(M-b)/N,this.y=(v-w)/N,this.z=(x-g)/N,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=nn(this.x,t.x,n.x),this.y=nn(this.y,t.y,n.y),this.z=nn(this.z,t.z,n.z),this.w=nn(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=nn(this.x,t,n),this.y=nn(this.y,t,n),this.z=nn(this.z,t,n),this.w=nn(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(nn(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wM extends yo{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Cn(0,0,t,n),this.scissorTest=!1,this.viewport=new Cn(0,0,t,n);const o={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Aa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Ci(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new ep(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vo extends wM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class I_ extends Ci{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Ra,this.minFilter=Ra,this.wrapR=mo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class TM extends Ci{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Ra,this.minFilter=Ra,this.wrapR=mo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _o{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,f,h){let m=a[o+0],p=a[o+1],g=a[o+2],v=a[o+3];const x=c[f+0],y=c[f+1],b=c[f+2],w=c[f+3];if(h===0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=x,t[n+1]=y,t[n+2]=b,t[n+3]=w;return}if(v!==w||m!==x||p!==y||g!==b){let M=1-h;const _=m*x+p*y+g*b+v*w,N=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const O=Math.sqrt(U),H=Math.atan2(O,_*N);M=Math.sin(M*H)/O,h=Math.sin(h*H)/O}const A=h*N;if(m=m*M+x*A,p=p*M+y*A,g=g*M+b*A,v=v*M+w*A,M===1-h){const O=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=O,p*=O,g*=O,v*=O}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,o,c,f){const h=a[o],m=a[o+1],p=a[o+2],g=a[o+3],v=c[f],x=c[f+1],y=c[f+2],b=c[f+3];return t[n]=h*b+g*v+m*y-p*x,t[n+1]=m*b+g*x+p*v-h*y,t[n+2]=p*b+g*y+h*x-m*v,t[n+3]=g*b-h*v-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(a/2),g=h(o/2),v=h(c/2),x=m(a/2),y=m(o/2),b=m(c/2);switch(f){case"XYZ":this._x=x*g*v+p*y*b,this._y=p*y*v-x*g*b,this._z=p*g*b+x*y*v,this._w=p*g*v-x*y*b;break;case"YXZ":this._x=x*g*v+p*y*b,this._y=p*y*v-x*g*b,this._z=p*g*b-x*y*v,this._w=p*g*v+x*y*b;break;case"ZXY":this._x=x*g*v-p*y*b,this._y=p*y*v+x*g*b,this._z=p*g*b+x*y*v,this._w=p*g*v-x*y*b;break;case"ZYX":this._x=x*g*v-p*y*b,this._y=p*y*v+x*g*b,this._z=p*g*b-x*y*v,this._w=p*g*v+x*y*b;break;case"YZX":this._x=x*g*v+p*y*b,this._y=p*y*v+x*g*b,this._z=p*g*b-x*y*v,this._w=p*g*v-x*y*b;break;case"XZY":this._x=x*g*v-p*y*b,this._y=p*y*v-x*g*b,this._z=p*g*b+x*y*v,this._w=p*g*v+x*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],g=n[6],v=n[10],x=a+h+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-o)*y}else if(a>h&&a>v){const y=2*Math.sqrt(1+a-h-v);this._w=(g-m)/y,this._x=.25*y,this._y=(o+f)/y,this._z=(c+p)/y}else if(h>v){const y=2*Math.sqrt(1+h-a-v);this._w=(c-p)/y,this._x=(o+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-a-h);this._w=(f-o)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,f=t._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+f*h+o*p-c*m,this._y=o*g+f*m+c*h-a*p,this._z=c*g+f*p+a*m-o*h,this._w=f*g-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,f=this._w;let h=f*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=a,this._y=o,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*a+n*this._x,this._y=y*o+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-n)*g)/p,x=Math.sin(n*g)/p;return this._w=f*v+this._w*x,this._x=a*v+this._x*x,this._y=o*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,n=0,a=0){L.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(l1.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(l1.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,f=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*o-h*a),g=2*(h*n-c*o),v=2*(c*a-f*n);return this.x=n+m*p+f*v-h*g,this.y=a+m*g+h*p-c*v,this.z=o+m*v+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=nn(this.x,t.x,n.x),this.y=nn(this.y,t.y,n.y),this.z=nn(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=nn(this.x,t,n),this.y=nn(this.y,t,n),this.z=nn(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(nn(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,f=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*f-a*m,this.z=a*h-o*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return M0.copy(this).projectOnVector(t),this.sub(M0)}reflect(t){return this.sub(M0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(nn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const M0=new L,l1=new _o;class mu{constructor(t=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ea.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ea.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ea.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ea):Ea.fromBufferAttribute(c,f),Ea.applyMatrix4(t.matrixWorld),this.expandByPoint(Ea);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Af.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Af.copy(a.boundingBox)),Af.applyMatrix4(t.matrixWorld),this.union(Af)}const o=t.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ea),Ea.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xc),Cf.subVectors(this.max,Xc),fl.subVectors(t.a,Xc),hl.subVectors(t.b,Xc),dl.subVectors(t.c,Xc),ur.subVectors(hl,fl),fr.subVectors(dl,hl),io.subVectors(fl,dl);let n=[0,-ur.z,ur.y,0,-fr.z,fr.y,0,-io.z,io.y,ur.z,0,-ur.x,fr.z,0,-fr.x,io.z,0,-io.x,-ur.y,ur.x,0,-fr.y,fr.x,0,-io.y,io.x,0];return!S0(n,fl,hl,dl,Cf)||(n=[1,0,0,0,1,0,0,0,1],!S0(n,fl,hl,dl,Cf))?!1:(Rf.crossVectors(ur,fr),n=[Rf.x,Rf.y,Rf.z],S0(n,fl,hl,dl,Cf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ea).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ea).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ts),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ts=[new L,new L,new L,new L,new L,new L,new L,new L],Ea=new L,Af=new mu,fl=new L,hl=new L,dl=new L,ur=new L,fr=new L,io=new L,Xc=new L,Cf=new L,Rf=new L,ao=new L;function S0(r,t,n,a,o){for(let c=0,f=r.length-3;c<=f;c+=3){ao.fromArray(r,c);const h=o.x*Math.abs(ao.x)+o.y*Math.abs(ao.y)+o.z*Math.abs(ao.z),m=t.dot(ao),p=n.dot(ao),g=a.dot(ao);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const AM=new mu,Wc=new L,b0=new L;class pu{constructor(t=new L,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):AM.setFromPoints(t).getCenter(a);let o=0;for(let c=0,f=t.length;c<f;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wc.subVectors(t,this.center);const n=Wc.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Wc,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(b0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wc.copy(t.center).add(b0)),this.expandByPoint(Wc.copy(t.center).sub(b0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const As=new L,E0=new L,Df=new L,hr=new L,w0=new L,Pf=new L,T0=new L;class gu{constructor(t=new L,n=new L(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,As)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=As.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(As.copy(this.origin).addScaledVector(this.direction,n),As.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){E0.copy(t).add(n).multiplyScalar(.5),Df.copy(n).sub(t).normalize(),hr.copy(this.origin).sub(E0);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Df),h=hr.dot(this.direction),m=-hr.dot(Df),p=hr.lengthSq(),g=Math.abs(1-f*f);let v,x,y,b;if(g>0)if(v=f*m-h,x=f*h-m,b=c*g,v>=0)if(x>=-b)if(x<=b){const w=1/g;v*=w,x*=w,y=v*(v+f*x+2*h)+x*(f*v+x+2*m)+p}else x=c,v=Math.max(0,-(f*x+h)),y=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(f*x+h)),y=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-f*c+h)),x=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(v=Math.max(0,-(f*c+h)),x=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p);else x=f>0?-c:c,v=Math.max(0,-(f*x+h)),y=-v*v+x*(x+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(E0).addScaledVector(Df,x),y}intersectSphere(t,n){As.subVectors(t.center,this.origin);const a=As.dot(this.direction),o=As.dot(As)-a*a,c=t.radius*t.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(a=(t.min.x-x.x)*p,o=(t.max.x-x.x)*p):(a=(t.max.x-x.x)*p,o=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),a>f||c>o||((c>a||isNaN(a))&&(a=c),(f<o||isNaN(o))&&(o=f),v>=0?(h=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(h=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,As)!==null}intersectTriangle(t,n,a,o,c){w0.subVectors(n,t),Pf.subVectors(a,t),T0.crossVectors(w0,Pf);let f=this.direction.dot(T0),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;hr.subVectors(this.origin,t);const m=h*this.direction.dot(Pf.crossVectors(hr,Pf));if(m<0)return null;const p=h*this.direction.dot(w0.cross(hr));if(p<0||m+p>f)return null;const g=-h*hr.dot(T0);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rn{constructor(t,n,a,o,c,f,h,m,p,g,v,x,y,b,w,M){Rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,f,h,m,p,g,v,x,y,b,w,M)}set(t,n,a,o,c,f,h,m,p,g,v,x,y,b,w,M){const _=this.elements;return _[0]=t,_[4]=n,_[8]=a,_[12]=o,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=b,_[11]=w,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/ml.setFromMatrixColumn(t,0).length(),c=1/ml.setFromMatrixColumn(t,1).length(),f=1/ml.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=f*g,y=f*v,b=h*g,w=h*v;n[0]=m*g,n[4]=-m*v,n[8]=p,n[1]=y+b*p,n[5]=x-w*p,n[9]=-h*m,n[2]=w-x*p,n[6]=b+y*p,n[10]=f*m}else if(t.order==="YXZ"){const x=m*g,y=m*v,b=p*g,w=p*v;n[0]=x+w*h,n[4]=b*h-y,n[8]=f*p,n[1]=f*v,n[5]=f*g,n[9]=-h,n[2]=y*h-b,n[6]=w+x*h,n[10]=f*m}else if(t.order==="ZXY"){const x=m*g,y=m*v,b=p*g,w=p*v;n[0]=x-w*h,n[4]=-f*v,n[8]=b+y*h,n[1]=y+b*h,n[5]=f*g,n[9]=w-x*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const x=f*g,y=f*v,b=h*g,w=h*v;n[0]=m*g,n[4]=b*p-y,n[8]=x*p+w,n[1]=m*v,n[5]=w*p+x,n[9]=y*p-b,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,b=h*m,w=h*p;n[0]=m*g,n[4]=w-x*v,n[8]=b*v+y,n[1]=v,n[5]=f*g,n[9]=-h*g,n[2]=-p*g,n[6]=y*v+b,n[10]=x-w*v}else if(t.order==="XZY"){const x=f*m,y=f*p,b=h*m,w=h*p;n[0]=m*g,n[4]=-v,n[8]=p*g,n[1]=x*v+w,n[5]=f*g,n[9]=y*v-b,n[2]=b*v-y,n[6]=h*g,n[10]=w*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(CM,t,RM)}lookAt(t,n,a){const o=this.elements;return ea.subVectors(t,n),ea.lengthSq()===0&&(ea.z=1),ea.normalize(),dr.crossVectors(a,ea),dr.lengthSq()===0&&(Math.abs(a.z)===1?ea.x+=1e-4:ea.z+=1e-4,ea.normalize(),dr.crossVectors(a,ea)),dr.normalize(),Uf.crossVectors(ea,dr),o[0]=dr.x,o[4]=Uf.x,o[8]=ea.x,o[1]=dr.y,o[5]=Uf.y,o[9]=ea.y,o[2]=dr.z,o[6]=Uf.z,o[10]=ea.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,f=a[0],h=a[4],m=a[8],p=a[12],g=a[1],v=a[5],x=a[9],y=a[13],b=a[2],w=a[6],M=a[10],_=a[14],N=a[3],U=a[7],A=a[11],O=a[15],H=o[0],G=o[4],W=o[8],T=o[12],E=o[1],k=o[5],gt=o[9],dt=o[13],Et=o[2],bt=o[6],Y=o[10],_t=o[14],et=o[3],Wt=o[7],I=o[11],mt=o[15];return c[0]=f*H+h*E+m*Et+p*et,c[4]=f*G+h*k+m*bt+p*Wt,c[8]=f*W+h*gt+m*Y+p*I,c[12]=f*T+h*dt+m*_t+p*mt,c[1]=g*H+v*E+x*Et+y*et,c[5]=g*G+v*k+x*bt+y*Wt,c[9]=g*W+v*gt+x*Y+y*I,c[13]=g*T+v*dt+x*_t+y*mt,c[2]=b*H+w*E+M*Et+_*et,c[6]=b*G+w*k+M*bt+_*Wt,c[10]=b*W+w*gt+M*Y+_*I,c[14]=b*T+w*dt+M*_t+_*mt,c[3]=N*H+U*E+A*Et+O*et,c[7]=N*G+U*k+A*bt+O*Wt,c[11]=N*W+U*gt+A*Y+O*I,c[15]=N*T+U*dt+A*_t+O*mt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],y=t[14],b=t[3],w=t[7],M=t[11],_=t[15];return b*(+c*m*v-o*p*v-c*h*x+a*p*x+o*h*y-a*m*y)+w*(+n*m*y-n*p*x+c*f*x-o*f*y+o*p*g-c*m*g)+M*(+n*p*v-n*h*y-c*f*v+a*f*y+c*h*g-a*p*g)+_*(-o*h*g-n*m*v+n*h*x+o*f*v-a*f*x+a*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],y=t[11],b=t[12],w=t[13],M=t[14],_=t[15],N=v*M*p-w*x*p+w*m*y-h*M*y-v*m*_+h*x*_,U=b*x*p-g*M*p-b*m*y+f*M*y+g*m*_-f*x*_,A=g*w*p-b*v*p+b*h*y-f*w*y-g*h*_+f*v*_,O=b*v*m-g*w*m-b*h*x+f*w*x+g*h*M-f*v*M,H=n*N+a*U+o*A+c*O;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/H;return t[0]=N*G,t[1]=(w*x*c-v*M*c-w*o*y+a*M*y+v*o*_-a*x*_)*G,t[2]=(h*M*c-w*m*c+w*o*p-a*M*p-h*o*_+a*m*_)*G,t[3]=(v*m*c-h*x*c-v*o*p+a*x*p+h*o*y-a*m*y)*G,t[4]=U*G,t[5]=(g*M*c-b*x*c+b*o*y-n*M*y-g*o*_+n*x*_)*G,t[6]=(b*m*c-f*M*c-b*o*p+n*M*p+f*o*_-n*m*_)*G,t[7]=(f*x*c-g*m*c+g*o*p-n*x*p-f*o*y+n*m*y)*G,t[8]=A*G,t[9]=(b*v*c-g*w*c-b*a*y+n*w*y+g*a*_-n*v*_)*G,t[10]=(f*w*c-b*h*c+b*a*p-n*w*p-f*a*_+n*h*_)*G,t[11]=(g*h*c-f*v*c-g*a*p+n*v*p+f*a*y-n*h*y)*G,t[12]=O*G,t[13]=(g*w*o-b*v*o+b*a*x-n*w*x-g*a*M+n*v*M)*G,t[14]=(b*h*o-f*w*o-b*a*m+n*w*m+f*a*M-n*h*M)*G,t[15]=(f*v*o-g*h*o+g*a*m-n*v*m-f*a*x+n*h*x)*G,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+a,p*h-o*m,p*m+o*h,0,p*h+o*m,g*h+a,g*m-o*f,0,p*m-o*h,g*m+o*f,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,f){return this.set(1,a,c,0,t,1,f,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,g=f+f,v=h+h,x=c*p,y=c*g,b=c*v,w=f*g,M=f*v,_=h*v,N=m*p,U=m*g,A=m*v,O=a.x,H=a.y,G=a.z;return o[0]=(1-(w+_))*O,o[1]=(y+A)*O,o[2]=(b-U)*O,o[3]=0,o[4]=(y-A)*H,o[5]=(1-(x+_))*H,o[6]=(M+N)*H,o[7]=0,o[8]=(b+U)*G,o[9]=(M-N)*G,o[10]=(1-(x+w))*G,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=ml.set(o[0],o[1],o[2]).length();const f=ml.set(o[4],o[5],o[6]).length(),h=ml.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],wa.copy(this);const p=1/c,g=1/f,v=1/h;return wa.elements[0]*=p,wa.elements[1]*=p,wa.elements[2]*=p,wa.elements[4]*=g,wa.elements[5]*=g,wa.elements[6]*=g,wa.elements[8]*=v,wa.elements[9]*=v,wa.elements[10]*=v,n.setFromRotationMatrix(wa),a.x=c,a.y=f,a.z=h,this}makePerspective(t,n,a,o,c,f,h=Ls){const m=this.elements,p=2*c/(n-t),g=2*c/(a-o),v=(n+t)/(n-t),x=(a+o)/(a-o);let y,b;if(h===Ls)y=-(f+c)/(f-c),b=-2*f*c/(f-c);else if(h===dh)y=-f/(f-c),b=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,a,o,c,f,h=Ls){const m=this.elements,p=1/(n-t),g=1/(a-o),v=1/(f-c),x=(n+t)*p,y=(a+o)*g;let b,w;if(h===Ls)b=(f+c)*v,w=-2*v;else if(h===dh)b=c*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=w,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const ml=new L,wa=new Rn,CM=new L(0,0,0),RM=new L(1,1,1),dr=new L,Uf=new L,ea=new L,c1=new Rn,u1=new _o;class Qa{constructor(t=0,n=0,a=0,o=Qa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],f=o[4],h=o[8],m=o[1],p=o[5],g=o[9],v=o[2],x=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(nn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-nn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(nn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return c1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(c1,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return u1.setFromEuler(this),this.setFromQuaternion(u1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qa.DEFAULT_ORDER="XYZ";class np{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let DM=0;const f1=new L,pl=new _o,Cs=new Rn,Nf=new L,jc=new L,PM=new L,UM=new _o,h1=new L(1,0,0),d1=new L(0,1,0),m1=new L(0,0,1),p1={type:"added"},NM={type:"removed"},gl={type:"childadded",child:null},A0={type:"childremoved",child:null};class $n extends yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const t=new L,n=new Qa,a=new _o,o=new L(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Rn},normalMatrix:{value:new qe}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return pl.setFromAxisAngle(t,n),this.quaternion.multiply(pl),this}rotateOnWorldAxis(t,n){return pl.setFromAxisAngle(t,n),this.quaternion.premultiply(pl),this}rotateX(t){return this.rotateOnAxis(h1,t)}rotateY(t){return this.rotateOnAxis(d1,t)}rotateZ(t){return this.rotateOnAxis(m1,t)}translateOnAxis(t,n){return f1.copy(t).applyQuaternion(this.quaternion),this.position.add(f1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(h1,t)}translateY(t){return this.translateOnAxis(d1,t)}translateZ(t){return this.translateOnAxis(m1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cs.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Nf.copy(t):Nf.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),jc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cs.lookAt(jc,Nf,this.up):Cs.lookAt(Nf,jc,this.up),this.quaternion.setFromRotationMatrix(Cs),o&&(Cs.extractRotation(o.matrixWorld),pl.setFromRotationMatrix(Cs),this.quaternion.premultiply(pl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(p1),gl.child=t,this.dispatchEvent(gl),gl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(NM),A0.child=t,this.dispatchEvent(A0),A0.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(p1),gl.child=t,this.dispatchEvent(gl),gl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jc,t,PM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jc,UM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),v=f(t.shapes),x=f(t.skeletons),y=f(t.animations),b=f(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),x.length>0&&(a.skeletons=x),y.length>0&&(a.animations=y),b.length>0&&(a.nodes=b)}return a.object=o,a;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}$n.DEFAULT_UP=new L(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ta=new L,Rs=new L,C0=new L,Ds=new L,vl=new L,_l=new L,g1=new L,R0=new L,D0=new L,P0=new L,U0=new Cn,N0=new Cn,L0=new Cn;class pa{constructor(t=new L,n=new L,a=new L){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Ta.subVectors(t,n),o.cross(Ta);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Ta.subVectors(o,n),Rs.subVectors(a,n),C0.subVectors(t,n);const f=Ta.dot(Ta),h=Ta.dot(Rs),m=Ta.dot(C0),p=Rs.dot(Rs),g=Rs.dot(C0),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const x=1/v,y=(p*m-h*g)*x,b=(f*g-h*m)*x;return c.set(1-y-b,b,y)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Ds)===null?!1:Ds.x>=0&&Ds.y>=0&&Ds.x+Ds.y<=1}static getInterpolation(t,n,a,o,c,f,h,m){return this.getBarycoord(t,n,a,o,Ds)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ds.x),m.addScaledVector(f,Ds.y),m.addScaledVector(h,Ds.z),m)}static getInterpolatedAttribute(t,n,a,o,c,f){return U0.setScalar(0),N0.setScalar(0),L0.setScalar(0),U0.fromBufferAttribute(t,n),N0.fromBufferAttribute(t,a),L0.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(U0,c.x),f.addScaledVector(N0,c.y),f.addScaledVector(L0,c.z),f}static isFrontFacing(t,n,a,o){return Ta.subVectors(a,n),Rs.subVectors(t,n),Ta.cross(Rs).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ta.subVectors(this.c,this.b),Rs.subVectors(this.a,this.b),Ta.cross(Rs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return pa.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return pa.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return pa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let f,h;vl.subVectors(o,a),_l.subVectors(c,a),R0.subVectors(t,a);const m=vl.dot(R0),p=_l.dot(R0);if(m<=0&&p<=0)return n.copy(a);D0.subVectors(t,o);const g=vl.dot(D0),v=_l.dot(D0);if(g>=0&&v<=g)return n.copy(o);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(a).addScaledVector(vl,f);P0.subVectors(t,c);const y=vl.dot(P0),b=_l.dot(P0);if(b>=0&&y<=b)return n.copy(c);const w=y*p-m*b;if(w<=0&&p>=0&&b<=0)return h=p/(p-b),n.copy(a).addScaledVector(_l,h);const M=g*b-y*v;if(M<=0&&v-g>=0&&y-b>=0)return g1.subVectors(c,o),h=(v-g)/(v-g+(y-b)),n.copy(o).addScaledVector(g1,h);const _=1/(M+w+x);return f=w*_,h=x*_,n.copy(a).addScaledVector(vl,f).addScaledVector(_l,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Lf={h:0,s:0,l:0};function O0(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class qt{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ma){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,gn.toWorkingColorSpace(this,n),this}setRGB(t,n,a,o=gn.workingColorSpace){return this.r=t,this.g=n,this.b=a,gn.toWorkingColorSpace(this,o),this}setHSL(t,n,a,o=gn.workingColorSpace){if(t=pM(t,1),n=nn(n,0,1),a=nn(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=O0(f,c,t+1/3),this.g=O0(f,c,t),this.b=O0(f,c,t-1/3)}return gn.toWorkingColorSpace(this,o),this}setStyle(t,n=ma){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ma){const a=B_[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}copyLinearToSRGB(t){return this.r=Ol(t.r),this.g=Ol(t.g),this.b=Ol(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ma){return gn.fromWorkingColorSpace(Ti.copy(this),t),Math.round(nn(Ti.r*255,0,255))*65536+Math.round(nn(Ti.g*255,0,255))*256+Math.round(nn(Ti.b*255,0,255))}getHexString(t=ma){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=gn.workingColorSpace){gn.fromWorkingColorSpace(Ti.copy(this),n);const a=Ti.r,o=Ti.g,c=Ti.b,f=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case a:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-a)/v+2;break;case c:m=(a-o)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=gn.workingColorSpace){return gn.fromWorkingColorSpace(Ti.copy(this),n),t.r=Ti.r,t.g=Ti.g,t.b=Ti.b,t}getStyle(t=ma){gn.fromWorkingColorSpace(Ti.copy(this),t);const n=Ti.r,a=Ti.g,o=Ti.b;return t!==ma?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(mr),this.setHSL(mr.h+t,mr.s+n,mr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(mr),t.getHSL(Lf);const a=_0(mr.h,Lf.h,n),o=_0(mr.s,Lf.s,n),c=_0(mr.l,Lf.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ti=new qt;qt.NAMES=B_;let LM=0;class Er extends yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Nl,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=ru,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cl,this.stencilZFail=cl,this.stencilZPass=cl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Nl&&(a.blending=this.blending),this.side!==br&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==fh&&(a.blendSrc=this.blendSrc),this.blendDst!==ru&&(a.blendDst=this.blendDst),this.blendEquation!==xr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==zl&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i1&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cl&&(a.stencilFail=this.stencilFail),this.stencilZFail!==cl&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==cl&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=o(t.textures),f=o(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jn extends Er{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qa,this.combine=M_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ai=new L,Of=new ne;let OM=0;class li{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Hm,this.updateRanges=[],this.gpuType=Ns,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Of.fromBufferAttribute(this,n),Of.applyMatrix3(t),this.setXY(n,Of.x,Of.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)ai.fromBufferAttribute(this,n),ai.applyMatrix3(t),this.setXYZ(n,ai.x,ai.y,ai.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)ai.fromBufferAttribute(this,n),ai.applyMatrix4(t),this.setXYZ(n,ai.x,ai.y,ai.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)ai.fromBufferAttribute(this,n),ai.applyNormalMatrix(t),this.setXYZ(n,ai.x,ai.y,ai.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)ai.fromBufferAttribute(this,n),ai.transformDirection(t),this.setXYZ(n,ai.x,ai.y,ai.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Ka(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Tn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ka(n,this.array)),n}setX(t,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ka(n,this.array)),n}setY(t,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ka(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ka(n,this.array)),n}setW(t,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Tn(n,this.array),a=Tn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Tn(n,this.array),a=Tn(a,this.array),o=Tn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=Tn(n,this.array),a=Tn(a,this.array),o=Tn(o,this.array),c=Tn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hm&&(t.usage=this.usage),t}}class F_ extends li{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class H_ extends li{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class xn extends li{constructor(t,n,a){super(new Float32Array(t),n,a)}}let zM=0;const da=new Rn,z0=new $n,xl=new L,na=new mu,qc=new mu,mi=new L;class Fn extends yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(z_(t)?H_:F_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new qe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return da.makeRotationFromQuaternion(t),this.applyMatrix4(da),this}rotateX(t){return da.makeRotationX(t),this.applyMatrix4(da),this}rotateY(t){return da.makeRotationY(t),this.applyMatrix4(da),this}rotateZ(t){return da.makeRotationZ(t),this.applyMatrix4(da),this}translate(t,n,a){return da.makeTranslation(t,n,a),this.applyMatrix4(da),this}scale(t,n,a){return da.makeScale(t,n,a),this.applyMatrix4(da),this}lookAt(t){return z0.lookAt(t),z0.updateMatrix(),this.applyMatrix4(z0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xl).negate(),this.translate(xl.x,xl.y,xl.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const f=t[o];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new xn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];na.setFromBufferAttribute(c),this.morphTargetsRelative?(mi.addVectors(this.boundingBox.min,na.min),this.boundingBox.expandByPoint(mi),mi.addVectors(this.boundingBox.max,na.max),this.boundingBox.expandByPoint(mi)):(this.boundingBox.expandByPoint(na.min),this.boundingBox.expandByPoint(na.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const a=this.boundingSphere.center;if(na.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];qc.setFromBufferAttribute(h),this.morphTargetsRelative?(mi.addVectors(na.min,qc.min),na.expandByPoint(mi),mi.addVectors(na.max,qc.max),na.expandByPoint(mi)):(na.expandByPoint(qc.min),na.expandByPoint(qc.max))}na.getCenter(a);let o=0;for(let c=0,f=t.count;c<f;c++)mi.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(mi));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)mi.fromBufferAttribute(h,p),m&&(xl.fromBufferAttribute(t,p),mi.add(xl)),o=Math.max(o,a.distanceToSquared(mi))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let W=0;W<a.count;W++)h[W]=new L,m[W]=new L;const p=new L,g=new L,v=new L,x=new ne,y=new ne,b=new ne,w=new L,M=new L;function _(W,T,E){p.fromBufferAttribute(a,W),g.fromBufferAttribute(a,T),v.fromBufferAttribute(a,E),x.fromBufferAttribute(c,W),y.fromBufferAttribute(c,T),b.fromBufferAttribute(c,E),g.sub(p),v.sub(p),y.sub(x),b.sub(x);const k=1/(y.x*b.y-b.x*y.y);isFinite(k)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(k),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(k),h[W].add(w),h[T].add(w),h[E].add(w),m[W].add(M),m[T].add(M),m[E].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let W=0,T=N.length;W<T;++W){const E=N[W],k=E.start,gt=E.count;for(let dt=k,Et=k+gt;dt<Et;dt+=3)_(t.getX(dt+0),t.getX(dt+1),t.getX(dt+2))}const U=new L,A=new L,O=new L,H=new L;function G(W){O.fromBufferAttribute(o,W),H.copy(O);const T=h[W];U.copy(T),U.sub(O.multiplyScalar(O.dot(T))).normalize(),A.crossVectors(H,T);const k=A.dot(m[W])<0?-1:1;f.setXYZW(W,U.x,U.y,U.z,k)}for(let W=0,T=N.length;W<T;++W){const E=N[W],k=E.start,gt=E.count;for(let dt=k,Et=k+gt;dt<Et;dt+=3)G(t.getX(dt+0)),G(t.getX(dt+1)),G(t.getX(dt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let x=0,y=a.count;x<y;x++)a.setXYZ(x,0,0,0);const o=new L,c=new L,f=new L,h=new L,m=new L,p=new L,g=new L,v=new L;if(t)for(let x=0,y=t.count;x<y;x+=3){const b=t.getX(x+0),w=t.getX(x+1),M=t.getX(x+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,w),f.fromBufferAttribute(n,M),g.subVectors(f,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(a,b),m.fromBufferAttribute(a,w),p.fromBufferAttribute(a,M),h.add(g),m.add(g),p.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(w,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=n.count;x<y;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,c),v.subVectors(o,c),g.cross(v),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)mi.fromBufferAttribute(t,n),mi.normalize(),t.setXYZ(n,mi.x,mi.y,mi.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let y=0,b=0;for(let w=0,M=m.length;w<M;w++){h.isInterleavedBufferAttribute?y=m[w]*h.data.stride+h.offset:y=m[w]*g;for(let _=0;_<g;_++)x[b++]=p[y++]}return new li(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fn,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=t(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=t(x,a);m.push(y)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(t.data))}g.length>0&&(o[m]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(n));const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v1=new Rn,so=new gu,zf=new pu,_1=new L,If=new L,Bf=new L,Ff=new L,I0=new L,Hf=new L,x1=new L,Gf=new L;class $ extends $n{constructor(t=new Fn,n=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Hf.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&(I0.fromBufferAttribute(v,t),f?Hf.addScaledVector(I0,g):Hf.addScaledVector(I0.sub(n),g))}n.add(Hf)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),zf.copy(a.boundingSphere),zf.applyMatrix4(c),so.copy(t.ray).recast(t.near),!(zf.containsPoint(so.origin)===!1&&(so.intersectSphere(zf,_1)===null||so.origin.distanceToSquared(_1)>(t.far-t.near)**2))&&(v1.copy(c).invert(),so.copy(t.ray).applyMatrix4(v1),!(a.boundingBox!==null&&so.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,so)))}_computeIntersections(t,n,a){let o;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,w=x.length;b<w;b++){const M=x[b],_=f[M.materialIndex],N=Math.max(M.start,y.start),U=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let A=N,O=U;A<O;A+=3){const H=h.getX(A),G=h.getX(A+1),W=h.getX(A+2);o=Vf(this,_,t,a,p,g,v,H,G,W),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let M=b,_=w;M<_;M+=3){const N=h.getX(M),U=h.getX(M+1),A=h.getX(M+2);o=Vf(this,f,t,a,p,g,v,N,U,A),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,w=x.length;b<w;b++){const M=x[b],_=f[M.materialIndex],N=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let A=N,O=U;A<O;A+=3){const H=A,G=A+1,W=A+2;o=Vf(this,_,t,a,p,g,v,H,G,W),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=b,_=w;M<_;M+=3){const N=M,U=M+1,A=M+2;o=Vf(this,f,t,a,p,g,v,N,U,A),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function IM(r,t,n,a,o,c,f,h){let m;if(t.side===Bn?m=a.intersectTriangle(f,c,o,!0,h):m=a.intersectTriangle(o,c,f,t.side===br,h),m===null)return null;Gf.copy(h),Gf.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Gf);return p<n.near||p>n.far?null:{distance:p,point:Gf.clone(),object:r}}function Vf(r,t,n,a,o,c,f,h,m,p){r.getVertexPosition(h,If),r.getVertexPosition(m,Bf),r.getVertexPosition(p,Ff);const g=IM(r,t,n,a,If,Bf,Ff,x1);if(g){const v=new L;pa.getBarycoord(x1,If,Bf,Ff,v),o&&(g.uv=pa.getInterpolatedAttribute(o,h,m,p,v,new ne)),c&&(g.uv1=pa.getInterpolatedAttribute(c,h,m,p,v,new ne)),f&&(g.normal=pa.getInterpolatedAttribute(f,h,m,p,v,new L),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new L,materialIndex:0};pa.getNormal(If,Bf,Ff,x.normal),g.face=x,g.barycoord=v}return g}class Pe extends Fn{constructor(t=1,n=1,a=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],v=[];let x=0,y=0;b("z","y","x",-1,-1,a,n,t,f,c,0),b("z","y","x",1,-1,a,n,-t,f,c,1),b("x","z","y",1,1,t,a,n,o,f,2),b("x","z","y",1,-1,t,a,-n,o,f,3),b("x","y","z",1,-1,t,n,a,o,c,4),b("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new xn(p,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(v,2));function b(w,M,_,N,U,A,O,H,G,W,T){const E=A/G,k=O/W,gt=A/2,dt=O/2,Et=H/2,bt=G+1,Y=W+1;let _t=0,et=0;const Wt=new L;for(let I=0;I<Y;I++){const mt=I*k-dt;for(let Jt=0;Jt<bt;Jt++){const ie=Jt*E-gt;Wt[w]=ie*N,Wt[M]=mt*U,Wt[_]=Et,p.push(Wt.x,Wt.y,Wt.z),Wt[w]=0,Wt[M]=0,Wt[_]=H>0?1:-1,g.push(Wt.x,Wt.y,Wt.z),v.push(Jt/G),v.push(1-I/W),_t+=1}}for(let I=0;I<W;I++)for(let mt=0;mt<G;mt++){const Jt=x+mt+bt*I,ie=x+mt+bt*(I+1),Q=x+(mt+1)+bt*(I+1),yt=x+(mt+1)+bt*I;m.push(Jt,ie,yt),m.push(ie,Q,yt),et+=6}h.addGroup(y,et,T),y+=et,x+=_t}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vl(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Oi(r){const t={};for(let n=0;n<r.length;n++){const a=Vl(r[n]);for(const o in a)t[o]=a[o]}return t}function BM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function G_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:gn.workingColorSpace}const FM={clone:Vl,merge:Oi};var HM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Er{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vl(t.uniforms),this.uniformsGroups=BM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class V_ extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=Ls}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new L,y1=new ne,M1=new ne;class aa extends V_{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Gm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ch*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gm*2*Math.atan(Math.tan(ch*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-t/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(pr.x,pr.y).multiplyScalar(-t/pr.z)}getViewSize(t,n){return this.getViewBounds(t,y1,M1),n.subVectors(M1,y1)}setViewOffset(t,n,a,o,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ch*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*o/m,n-=f.offsetY*a/p,o*=f.width/m,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const yl=-90,Ml=1;class VM extends $n{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new aa(yl,Ml,t,n);o.layers=this.layers,this.add(o);const c=new aa(yl,Ml,t,n);c.layers=this.layers,this.add(c);const f=new aa(yl,Ml,t,n);f.layers=this.layers,this.add(f);const h=new aa(yl,Ml,t,n);h.layers=this.layers,this.add(h);const m=new aa(yl,Ml,t,n);m.layers=this.layers,this.add(m);const p=new aa(yl,Ml,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,f,h,m]=n;for(const p of n)this.remove(p);if(t===Ls)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===dh)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,f),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,m),t.setRenderTarget(a,4,o),t.render(n,p),a.texture.generateMipmaps=w,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(v,x,y),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class k_ extends Ci{constructor(t,n,a,o,c,f,h,m,p,g){t=t!==void 0?t:[],n=n!==void 0?n:Il,super(t,n,a,o,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kM extends vo{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new k_(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Aa}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Pe(5,5,5),c=new dn({name:"CubemapFromEquirect",uniforms:Vl(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Bn,blending:Mr});c.uniforms.tEquirect.value=n;const f=new $(o,c),h=n.minFilter;return n.minFilter===po&&(n.minFilter=Aa),new VM(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n,a,o){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,o);t.setRenderTarget(c)}}class un extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XM={type:"move"};class B0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const M=n.getJointPose(w,a),_=this._getHandJoint(p,w);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(XM)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new un;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class WM extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qa,this.environmentIntensity=1,this.environmentRotation=new Qa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class jM{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Hm,this.updateRanges=[],this.version=0,this.uuid=Os()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[t+o]=n.array[a+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Os()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Os()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Li=new L;class mh{constructor(t,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)Li.fromBufferAttribute(this,n),Li.applyMatrix4(t),this.setXYZ(n,Li.x,Li.y,Li.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Li.fromBufferAttribute(this,n),Li.applyNormalMatrix(t),this.setXYZ(n,Li.x,Li.y,Li.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Li.fromBufferAttribute(this,n),Li.transformDirection(t),this.setXYZ(n,Li.x,Li.y,Li.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=Ka(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Tn(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=Tn(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Tn(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Tn(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Tn(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Ka(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Ka(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Ka(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Ka(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Tn(n,this.array),a=Tn(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=Tn(n,this.array),a=Tn(a,this.array),o=Tn(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=Tn(n,this.array),a=Tn(a,this.array),o=Tn(o,this.array),c=Tn(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new li(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new mh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Al extends Er{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Sl;const Yc=new L,bl=new L,El=new L,wl=new ne,Zc=new ne,X_=new Rn,kf=new L,Kc=new L,Xf=new L,S1=new ne,F0=new ne,b1=new ne;class Qc extends $n{constructor(t=new Al){if(super(),this.isSprite=!0,this.type="Sprite",Sl===void 0){Sl=new Fn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new jM(n,5);Sl.setIndex([0,1,2,0,2,3]),Sl.setAttribute("position",new mh(a,3,0,!1)),Sl.setAttribute("uv",new mh(a,2,3,!1))}this.geometry=Sl,this.material=t,this.center=new ne(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bl.setFromMatrixScale(this.matrixWorld),X_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),El.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bl.multiplyScalar(-El.z);const a=this.material.rotation;let o,c;a!==0&&(c=Math.cos(a),o=Math.sin(a));const f=this.center;Wf(kf.set(-.5,-.5,0),El,f,bl,o,c),Wf(Kc.set(.5,-.5,0),El,f,bl,o,c),Wf(Xf.set(.5,.5,0),El,f,bl,o,c),S1.set(0,0),F0.set(1,0),b1.set(1,1);let h=t.ray.intersectTriangle(kf,Kc,Xf,!1,Yc);if(h===null&&(Wf(Kc.set(-.5,.5,0),El,f,bl,o,c),F0.set(0,1),h=t.ray.intersectTriangle(kf,Xf,Kc,!1,Yc),h===null))return;const m=t.ray.origin.distanceTo(Yc);m<t.near||m>t.far||n.push({distance:m,point:Yc.clone(),uv:pa.getInterpolation(Yc,kf,Kc,Xf,S1,F0,b1,new ne),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Wf(r,t,n,a,o,c){wl.subVectors(r,n).addScalar(.5).multiply(a),o!==void 0?(Zc.x=c*wl.x-o*wl.y,Zc.y=o*wl.x+c*wl.y):Zc.copy(wl),r.copy(t),r.x+=Zc.x,r.y+=Zc.y,r.applyMatrix4(X_)}const H0=new L,qM=new L,YM=new qe;class _r{constructor(t=new L(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=H0.subVectors(a,n).cross(qM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(H0),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||YM.getNormalMatrix(t),o=this.coplanarPoint(H0).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ro=new pu,jf=new L;class ip{constructor(t=new _r,n=new _r,a=new _r,o=new _r,c=new _r,f=new _r){this.planes=[t,n,a,o,c,f]}set(t,n,a,o,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Ls){const a=this.planes,o=t.elements,c=o[0],f=o[1],h=o[2],m=o[3],p=o[4],g=o[5],v=o[6],x=o[7],y=o[8],b=o[9],w=o[10],M=o[11],_=o[12],N=o[13],U=o[14],A=o[15];if(a[0].setComponents(m-c,x-p,M-y,A-_).normalize(),a[1].setComponents(m+c,x+p,M+y,A+_).normalize(),a[2].setComponents(m+f,x+g,M+b,A+N).normalize(),a[3].setComponents(m-f,x-g,M-b,A-N).normalize(),a[4].setComponents(m-h,x-v,M-w,A-U).normalize(),n===Ls)a[5].setComponents(m+h,x+v,M+w,A+U).normalize();else if(n===dh)a[5].setComponents(h,v,w,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ro.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ro)}intersectsSprite(t){return ro.center.set(0,0,0),ro.radius=.7071067811865476,ro.applyMatrix4(t.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(jf.x=o.normal.x>0?t.max.x:t.min.x,jf.y=o.normal.y>0?t.max.y:t.min.y,jf.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(jf)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rl extends Er{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ph=new L,gh=new L,E1=new Rn,Jc=new gu,qf=new pu,G0=new L,w1=new L;class $c extends $n{constructor(t=new Fn,n=new Rl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)ph.fromBufferAttribute(n,o-1),gh.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=ph.distanceTo(gh);t.setAttribute("lineDistance",new xn(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),qf.copy(a.boundingSphere),qf.applyMatrix4(o),qf.radius+=c,t.ray.intersectsSphere(qf)===!1)return;E1.copy(o).invert(),Jc.copy(t.ray).applyMatrix4(E1);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=a.index,x=a.attributes.position;if(g!==null){const y=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let w=y,M=b-1;w<M;w+=p){const _=g.getX(w),N=g.getX(w+1),U=Yf(this,t,Jc,m,_,N,w);U&&n.push(U)}if(this.isLineLoop){const w=g.getX(b-1),M=g.getX(y),_=Yf(this,t,Jc,m,w,M,b-1);_&&n.push(_)}}else{const y=Math.max(0,f.start),b=Math.min(x.count,f.start+f.count);for(let w=y,M=b-1;w<M;w+=p){const _=Yf(this,t,Jc,m,w,w+1,w);_&&n.push(_)}if(this.isLineLoop){const w=Yf(this,t,Jc,m,b-1,y,b-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Yf(r,t,n,a,o,c,f){const h=r.geometry.attributes.position;if(ph.fromBufferAttribute(h,o),gh.fromBufferAttribute(h,c),n.distanceSqToSegment(ph,gh,G0,w1)>a)return;G0.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(G0);if(!(p<t.near||p>t.far))return{distance:p,point:w1.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class ZM extends Er{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const T1=new Rn,Vm=new gu,Zf=new pu,Kf=new L;class A1 extends $n{constructor(t=new Fn,n=new ZM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Zf.copy(a.boundingSphere),Zf.applyMatrix4(o),Zf.radius+=c,t.ray.intersectsSphere(Zf)===!1)return;T1.copy(o).invert(),Vm.copy(t.ray).applyMatrix4(T1);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=a.index,v=a.attributes.position;if(p!==null){const x=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let b=x,w=y;b<w;b++){const M=p.getX(b);Kf.fromBufferAttribute(v,M),C1(Kf,M,m,o,t,n,this)}}else{const x=Math.max(0,f.start),y=Math.min(v.count,f.start+f.count);for(let b=x,w=y;b<w;b++)Kf.fromBufferAttribute(v,b),C1(Kf,b,m,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function C1(r,t,n,a,o,c,f){const h=Vm.distanceSqToPoint(r);if(h<n){const m=new L;Vm.closestPointToPoint(r,m),m.applyMatrix4(a);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class oo extends Ci{constructor(t,n,a,o,c,f,h,m,p){super(t,n,a,o,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class W_ extends Ci{constructor(t,n,a,o,c,f,h,m,p,g=Ll){if(g!==Ll&&g!==Hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&g===Ll&&(a=go),a===void 0&&g===Hl&&(a=Fl),super(null,o,c,f,h,m,g,a,p),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=h!==void 0?h:Ra,this.minFilter=m!==void 0?m:Ra,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ep(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ja{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let f;n?f=n:f=t*a[c-1];let h=0,m=c-1,p;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),p=a[o]-f,p<0)h=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,a[o]===f)return o/(c-1);const g=a[o],x=a[o+1]-g,y=(f-g)/x;return(o+y)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const f=this.getPoint(o),h=this.getPoint(c),m=n||(f.isVector2?new ne:new L);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new L,o=[],c=[],f=[],h=new L,m=new Rn;for(let y=0;y<=t;y++){const b=y/t;o[y]=this.getTangentAt(b,new L)}c[0]=new L,f[0]=new L;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),x=Math.abs(o[0].z);g<=p&&(p=g,a.set(1,0,0)),v<=p&&(p=v,a.set(0,1,0)),x<=p&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),f[0].crossVectors(o[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),h.crossVectors(o[y-1],o[y]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(nn(o[y-1].dot(o[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(h,b))}f[y].crossVectors(o[y],c[y])}if(n===!0){let y=Math.acos(nn(c[0].dot(c[t]),-1,1));y/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(o[b],y*b)),f[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ap extends Ja{constructor(t=0,n=0,a=1,o=1,c=0,f=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=m}getPoint(t,n=new ne){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(f?c=0:c=o),this.aClockwise===!0&&!f&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=m-this.aX,y=p-this.aY;m=x*g-y*v+this.aX,p=x*v+y*g+this.aY}return a.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class KM extends ap{constructor(t,n,a,o,c,f){super(t,n,a,a,o,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function sp(){let r=0,t=0,n=0,a=0;function o(c,f,h,m){r=c,t=h,n=-3*c+3*f-2*h-m,a=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){o(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,g,v){let x=(f-c)/p-(h-c)/(p+g)+(h-f)/g,y=(h-f)/g-(m-f)/(g+v)+(m-h)/v;x*=g,y*=g,o(f,h,x,y)},calc:function(c){const f=c*c,h=f*c;return r+t*c+n*f+a*h}}}const Qf=new L,V0=new sp,k0=new sp,X0=new sp;class QM extends Ja{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new L){const a=n,o=this.points,c=o.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=o[(h-1)%c]:(Qf.subVectors(o[0],o[1]).add(o[0]),p=Qf);const v=o[h%c],x=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(Qf.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Qf),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(v),y),w=Math.pow(v.distanceToSquared(x),y),M=Math.pow(x.distanceToSquared(g),y);w<1e-4&&(w=1),b<1e-4&&(b=w),M<1e-4&&(M=w),V0.initNonuniformCatmullRom(p.x,v.x,x.x,g.x,b,w,M),k0.initNonuniformCatmullRom(p.y,v.y,x.y,g.y,b,w,M),X0.initNonuniformCatmullRom(p.z,v.z,x.z,g.z,b,w,M)}else this.curveType==="catmullrom"&&(V0.initCatmullRom(p.x,v.x,x.x,g.x,this.tension),k0.initCatmullRom(p.y,v.y,x.y,g.y,this.tension),X0.initCatmullRom(p.z,v.z,x.z,g.z,this.tension));return a.set(V0.calc(m),k0.calc(m),X0.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new L().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function R1(r,t,n,a,o){const c=(a-t)*.5,f=(o-n)*.5,h=r*r,m=r*h;return(2*n-2*a+c+f)*m+(-3*n+3*a-2*c-f)*h+c*r+n}function JM(r,t){const n=1-r;return n*n*t}function $M(r,t){return 2*(1-r)*r*t}function t2(r,t){return r*r*t}function iu(r,t,n,a){return JM(r,t)+$M(r,n)+t2(r,a)}function e2(r,t){const n=1-r;return n*n*n*t}function n2(r,t){const n=1-r;return 3*n*n*r*t}function i2(r,t){return 3*(1-r)*r*r*t}function a2(r,t){return r*r*r*t}function au(r,t,n,a,o){return e2(r,t)+n2(r,n)+i2(r,a)+a2(r,o)}class j_ extends Ja{constructor(t=new ne,n=new ne,a=new ne,o=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new ne){const a=n,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(au(t,o.x,c.x,f.x,h.x),au(t,o.y,c.y,f.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class s2 extends Ja{constructor(t=new L,n=new L,a=new L,o=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new L){const a=n,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(au(t,o.x,c.x,f.x,h.x),au(t,o.y,c.y,f.y,h.y),au(t,o.z,c.z,f.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class q_ extends Ja{constructor(t=new ne,n=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new ne){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new ne){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class r2 extends Ja{constructor(t=new L,n=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new L){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new L){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Y_ extends Ja{constructor(t=new ne,n=new ne,a=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new ne){const a=n,o=this.v0,c=this.v1,f=this.v2;return a.set(iu(t,o.x,c.x,f.x),iu(t,o.y,c.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class o2 extends Ja{constructor(t=new L,n=new L,a=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new L){const a=n,o=this.v0,c=this.v1,f=this.v2;return a.set(iu(t,o.x,c.x,f.x),iu(t,o.y,c.y,f.y),iu(t,o.z,c.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Z_ extends Ja{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new ne){const a=n,o=this.points,c=(o.length-1)*t,f=Math.floor(c),h=c-f,m=o[f===0?f:f-1],p=o[f],g=o[f>o.length-2?o.length-1:f+1],v=o[f>o.length-3?o.length-1:f+2];return a.set(R1(h,m.x,p.x,g.x,v.x),R1(h,m.y,p.y,g.y,v.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new ne().fromArray(o))}return this}}var D1=Object.freeze({__proto__:null,ArcCurve:KM,CatmullRomCurve3:QM,CubicBezierCurve:j_,CubicBezierCurve3:s2,EllipseCurve:ap,LineCurve:q_,LineCurve3:r2,QuadraticBezierCurve:Y_,QuadraticBezierCurve3:o2,SplineCurve:Z_});class l2 extends Ja{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new D1[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const f=o[c]-a,h=this.curves[c],m=h.getLength(),p=m===0?0:1-f/m;return h.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const f=c[o],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(h);for(let p=0;p<m.length;p++){const g=m[p];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new D1[o.type]().fromJSON(o))}return this}}class P1 extends l2{constructor(t){super(),this.type="Path",this.currentPoint=new ne,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new q_(this.currentPoint.clone(),new ne(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const c=new Y_(this.currentPoint.clone(),new ne(t,n),new ne(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,c,f){const h=new j_(this.currentPoint.clone(),new ne(t,n),new ne(a,o),new ne(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new Z_(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,c,f){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,n+m,a,o,c,f),this}absarc(t,n,a,o,c,f){return this.absellipse(t,n,a,a,o,c,f),this}ellipse(t,n,a,o,c,f,h,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,n+g,a,o,c,f,h,m),this}absellipse(t,n,a,o,c,f,h,m){const p=new ap(t,n,a,o,c,f,h,m);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ia extends Fn{constructor(t=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const c=[],f=[],h=[],m=[],p=new L,g=new ne;f.push(0,0,0),h.push(0,0,1),m.push(.5,.5);for(let v=0,x=3;v<=n;v++,x+=3){const y=a+v/n*o;p.x=t*Math.cos(y),p.y=t*Math.sin(y),f.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(f[x]/t+1)/2,g.y=(f[x+1]/t+1)/2,m.push(g.x,g.y)}for(let v=1;v<=n;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new xn(f,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Le extends Fn{constructor(t=1,n=1,a=1,o=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;o=Math.floor(o),c=Math.floor(c);const g=[],v=[],x=[],y=[];let b=0;const w=[],M=a/2;let _=0;N(),f===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new xn(v,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(y,2));function N(){const A=new L,O=new L;let H=0;const G=(n-t)/a;for(let W=0;W<=c;W++){const T=[],E=W/c,k=E*(n-t)+t;for(let gt=0;gt<=o;gt++){const dt=gt/o,Et=dt*m+h,bt=Math.sin(Et),Y=Math.cos(Et);O.x=k*bt,O.y=-E*a+M,O.z=k*Y,v.push(O.x,O.y,O.z),A.set(bt,G,Y).normalize(),x.push(A.x,A.y,A.z),y.push(dt,1-E),T.push(b++)}w.push(T)}for(let W=0;W<o;W++)for(let T=0;T<c;T++){const E=w[T][W],k=w[T+1][W],gt=w[T+1][W+1],dt=w[T][W+1];(t>0||T!==0)&&(g.push(E,k,dt),H+=3),(n>0||T!==c-1)&&(g.push(k,gt,dt),H+=3)}p.addGroup(_,H,0),_+=H}function U(A){const O=b,H=new ne,G=new L;let W=0;const T=A===!0?t:n,E=A===!0?1:-1;for(let gt=1;gt<=o;gt++)v.push(0,M*E,0),x.push(0,E,0),y.push(.5,.5),b++;const k=b;for(let gt=0;gt<=o;gt++){const Et=gt/o*m+h,bt=Math.cos(Et),Y=Math.sin(Et);G.x=T*Y,G.y=M*E,G.z=T*bt,v.push(G.x,G.y,G.z),x.push(0,E,0),H.x=bt*.5+.5,H.y=Y*.5*E+.5,y.push(H.x,H.y),b++}for(let gt=0;gt<o;gt++){const dt=O+gt,Et=k+gt;A===!0?g.push(Et,Et+1,dt):g.push(Et+1,Et,dt),W+=3}p.addGroup(_,W,A===!0?1:2),_+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rp extends Le{constructor(t=1,n=1,a=32,o=1,c=!1,f=0,h=Math.PI*2){super(0,t,n,a,o,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new rp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kl extends Fn{constructor(t=[],n=[],a=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:o};const c=[],f=[];h(o),p(a),g(),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(c.slice(),3)),this.setAttribute("uv",new xn(f,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(N){const U=new L,A=new L,O=new L;for(let H=0;H<n.length;H+=3)y(n[H+0],U),y(n[H+1],A),y(n[H+2],O),m(U,A,O,N)}function m(N,U,A,O){const H=O+1,G=[];for(let W=0;W<=H;W++){G[W]=[];const T=N.clone().lerp(A,W/H),E=U.clone().lerp(A,W/H),k=H-W;for(let gt=0;gt<=k;gt++)gt===0&&W===H?G[W][gt]=T:G[W][gt]=T.clone().lerp(E,gt/k)}for(let W=0;W<H;W++)for(let T=0;T<2*(H-W)-1;T++){const E=Math.floor(T/2);T%2===0?(x(G[W][E+1]),x(G[W+1][E]),x(G[W][E])):(x(G[W][E+1]),x(G[W+1][E+1]),x(G[W+1][E]))}}function p(N){const U=new L;for(let A=0;A<c.length;A+=3)U.x=c[A+0],U.y=c[A+1],U.z=c[A+2],U.normalize().multiplyScalar(N),c[A+0]=U.x,c[A+1]=U.y,c[A+2]=U.z}function g(){const N=new L;for(let U=0;U<c.length;U+=3){N.x=c[U+0],N.y=c[U+1],N.z=c[U+2];const A=M(N)/2/Math.PI+.5,O=_(N)/Math.PI+.5;f.push(A,1-O)}b(),v()}function v(){for(let N=0;N<f.length;N+=6){const U=f[N+0],A=f[N+2],O=f[N+4],H=Math.max(U,A,O),G=Math.min(U,A,O);H>.9&&G<.1&&(U<.2&&(f[N+0]+=1),A<.2&&(f[N+2]+=1),O<.2&&(f[N+4]+=1))}}function x(N){c.push(N.x,N.y,N.z)}function y(N,U){const A=N*3;U.x=t[A+0],U.y=t[A+1],U.z=t[A+2]}function b(){const N=new L,U=new L,A=new L,O=new L,H=new ne,G=new ne,W=new ne;for(let T=0,E=0;T<c.length;T+=9,E+=6){N.set(c[T+0],c[T+1],c[T+2]),U.set(c[T+3],c[T+4],c[T+5]),A.set(c[T+6],c[T+7],c[T+8]),H.set(f[E+0],f[E+1]),G.set(f[E+2],f[E+3]),W.set(f[E+4],f[E+5]),O.copy(N).add(U).add(A).divideScalar(3);const k=M(O);w(H,E+0,N,k),w(G,E+2,U,k),w(W,E+4,A,k)}}function w(N,U,A,O){O<0&&N.x===1&&(f[U]=N.x-1),A.x===0&&A.z===0&&(f[U]=O/2/Math.PI+.5)}function M(N){return Math.atan2(N.z,-N.x)}function _(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.vertices,t.indices,t.radius,t.details)}}class vh extends kl{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,o=1/a,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-a,0,-o,a,0,o,-a,0,o,a,-o,-a,0,-o,a,0,o,-a,0,o,a,0,-a,0,-o,a,0,-o,-a,0,o,a,0,o],f=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,f,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new vh(t.radius,t.detail)}}class K_ extends P1{constructor(t){super(t),this.uuid=Os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new P1().fromJSON(o))}return this}}class c2{static triangulate(t,n,a=2){const o=n&&n.length,c=o?n[0]*a:t.length;let f=Q_(t,0,c,a,!0);const h=[];if(!f||f.next===f.prev)return h;let m,p,g,v,x,y,b;if(o&&(f=m2(t,n,f,a)),t.length>80*a){m=g=t[0],p=v=t[1];for(let w=a;w<c;w+=a)x=t[w],y=t[w+1],x<m&&(m=x),y<p&&(p=y),x>g&&(g=x),y>v&&(v=y);b=Math.max(g-m,v-p),b=b!==0?32767/b:0}return uu(f,h,a,m,p,b,0),h}}function Q_(r,t,n,a,o){let c,f;if(o===w2(r,t,n,a)>0)for(c=t;c<n;c+=a)f=U1(c,r[c],r[c+1],f);else for(c=n-a;c>=t;c-=a)f=U1(c,r[c],r[c+1],f);return f&&yh(f,f.next)&&(hu(f),f=f.next),f}function xo(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(yh(n,n.next)||Wn(n.prev,n,n.next)===0)){if(hu(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function uu(r,t,n,a,o,c,f){if(!r)return;!f&&c&&x2(r,a,o,c);let h=r,m,p;for(;r.prev!==r.next;){if(m=r.prev,p=r.next,c?f2(r,a,o,c):u2(r)){t.push(m.i/n|0),t.push(r.i/n|0),t.push(p.i/n|0),hu(r),r=p.next,h=p.next;continue}if(r=p,r===h){f?f===1?(r=h2(xo(r),t,n),uu(r,t,n,a,o,c,2)):f===2&&d2(r,t,n,a,o,c):uu(xo(r),t,n,a,o,c,1);break}}}function u2(r){const t=r.prev,n=r,a=r.next;if(Wn(t,n,a)>=0)return!1;const o=t.x,c=n.x,f=a.x,h=t.y,m=n.y,p=a.y,g=o<c?o<f?o:f:c<f?c:f,v=h<m?h<p?h:p:m<p?m:p,x=o>c?o>f?o:f:c>f?c:f,y=h>m?h>p?h:p:m>p?m:p;let b=a.next;for(;b!==t;){if(b.x>=g&&b.x<=x&&b.y>=v&&b.y<=y&&Dl(o,h,c,m,f,p,b.x,b.y)&&Wn(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function f2(r,t,n,a){const o=r.prev,c=r,f=r.next;if(Wn(o,c,f)>=0)return!1;const h=o.x,m=c.x,p=f.x,g=o.y,v=c.y,x=f.y,y=h<m?h<p?h:p:m<p?m:p,b=g<v?g<x?g:x:v<x?v:x,w=h>m?h>p?h:p:m>p?m:p,M=g>v?g>x?g:x:v>x?v:x,_=km(y,b,t,n,a),N=km(w,M,t,n,a);let U=r.prevZ,A=r.nextZ;for(;U&&U.z>=_&&A&&A.z<=N;){if(U.x>=y&&U.x<=w&&U.y>=b&&U.y<=M&&U!==o&&U!==f&&Dl(h,g,m,v,p,x,U.x,U.y)&&Wn(U.prev,U,U.next)>=0||(U=U.prevZ,A.x>=y&&A.x<=w&&A.y>=b&&A.y<=M&&A!==o&&A!==f&&Dl(h,g,m,v,p,x,A.x,A.y)&&Wn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;U&&U.z>=_;){if(U.x>=y&&U.x<=w&&U.y>=b&&U.y<=M&&U!==o&&U!==f&&Dl(h,g,m,v,p,x,U.x,U.y)&&Wn(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;A&&A.z<=N;){if(A.x>=y&&A.x<=w&&A.y>=b&&A.y<=M&&A!==o&&A!==f&&Dl(h,g,m,v,p,x,A.x,A.y)&&Wn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function h2(r,t,n){let a=r;do{const o=a.prev,c=a.next.next;!yh(o,c)&&J_(o,a,a.next,c)&&fu(o,c)&&fu(c,o)&&(t.push(o.i/n|0),t.push(a.i/n|0),t.push(c.i/n|0),hu(a),hu(a.next),a=r=c),a=a.next}while(a!==r);return xo(a)}function d2(r,t,n,a,o,c){let f=r;do{let h=f.next.next;for(;h!==f.prev;){if(f.i!==h.i&&S2(f,h)){let m=$_(f,h);f=xo(f,f.next),m=xo(m,m.next),uu(f,t,n,a,o,c,0),uu(m,t,n,a,o,c,0);return}h=h.next}f=f.next}while(f!==r)}function m2(r,t,n,a){const o=[];let c,f,h,m,p;for(c=0,f=t.length;c<f;c++)h=t[c]*a,m=c<f-1?t[c+1]*a:r.length,p=Q_(r,h,m,a,!1),p===p.next&&(p.steiner=!0),o.push(M2(p));for(o.sort(p2),c=0;c<o.length;c++)n=g2(o[c],n);return n}function p2(r,t){return r.x-t.x}function g2(r,t){const n=v2(r,t);if(!n)return t;const a=$_(n,r);return xo(a,a.next),xo(n,n.next)}function v2(r,t){let n=t,a=-1/0,o;const c=r.x,f=r.y;do{if(f<=n.y&&f>=n.next.y&&n.next.y!==n.y){const x=n.x+(f-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(x<=c&&x>a&&(a=x,o=n.x<n.next.x?n:n.next,x===c))return o}n=n.next}while(n!==t);if(!o)return null;const h=o,m=o.x,p=o.y;let g=1/0,v;n=o;do c>=n.x&&n.x>=m&&c!==n.x&&Dl(f<p?c:a,f,m,p,f<p?a:c,f,n.x,n.y)&&(v=Math.abs(f-n.y)/(c-n.x),fu(n,r)&&(v<g||v===g&&(n.x>o.x||n.x===o.x&&_2(o,n)))&&(o=n,g=v)),n=n.next;while(n!==h);return o}function _2(r,t){return Wn(r.prev,r,t.prev)<0&&Wn(t.next,r,r.next)<0}function x2(r,t,n,a){let o=r;do o.z===0&&(o.z=km(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,y2(o)}function y2(r){let t,n,a,o,c,f,h,m,p=1;do{for(n=r,r=null,c=null,f=0;n;){for(f++,a=n,h=0,t=0;t<p&&(h++,a=a.nextZ,!!a);t++);for(m=p;h>0||m>0&&a;)h!==0&&(m===0||!a||n.z<=a.z)?(o=n,n=n.nextZ,h--):(o=a,a=a.nextZ,m--),c?c.nextZ=o:r=o,o.prevZ=c,c=o;n=a}c.nextZ=null,p*=2}while(f>1);return r}function km(r,t,n,a,o){return r=(r-n)*o|0,t=(t-a)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function M2(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function Dl(r,t,n,a,o,c,f,h){return(o-f)*(t-h)>=(r-f)*(c-h)&&(r-f)*(a-h)>=(n-f)*(t-h)&&(n-f)*(c-h)>=(o-f)*(a-h)}function S2(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!b2(r,t)&&(fu(r,t)&&fu(t,r)&&E2(r,t)&&(Wn(r.prev,r,t.prev)||Wn(r,t.prev,t))||yh(r,t)&&Wn(r.prev,r,r.next)>0&&Wn(t.prev,t,t.next)>0)}function Wn(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function yh(r,t){return r.x===t.x&&r.y===t.y}function J_(r,t,n,a){const o=$f(Wn(r,t,n)),c=$f(Wn(r,t,a)),f=$f(Wn(n,a,r)),h=$f(Wn(n,a,t));return!!(o!==c&&f!==h||o===0&&Jf(r,n,t)||c===0&&Jf(r,a,t)||f===0&&Jf(n,r,a)||h===0&&Jf(n,t,a))}function Jf(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function $f(r){return r>0?1:r<0?-1:0}function b2(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&J_(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function fu(r,t){return Wn(r.prev,r,r.next)<0?Wn(r,t,r.next)>=0&&Wn(r,r.prev,t)>=0:Wn(r,t,r.prev)<0||Wn(r,r.next,t)<0}function E2(r,t){let n=r,a=!1;const o=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function $_(r,t){const n=new Xm(r.i,r.x,r.y),a=new Xm(t.i,t.x,t.y),o=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function U1(r,t,n,a){const o=new Xm(r,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function hu(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Xm(r,t,n){this.i=r,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function w2(r,t,n,a){let o=0;for(let c=t,f=n-a;c<n;c+=a)o+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return o}class su{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return su.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];N1(t),L1(a,t);let f=t.length;n.forEach(N1);for(let m=0;m<n.length;m++)o.push(f),f+=n[m].length,L1(a,n[m]);const h=c2.triangulate(a,o);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function N1(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function L1(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class _h extends kl{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,o=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new _h(t.radius,t.detail)}}class op extends kl{constructor(t=1,n=0){const a=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(a,o,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new op(t.radius,t.detail)}}class pi extends Fn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,f=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,g=m+1,v=t/h,x=n/m,y=[],b=[],w=[],M=[];for(let _=0;_<g;_++){const N=_*x-f;for(let U=0;U<p;U++){const A=U*v-c;b.push(A,-N,0),w.push(0,0,1),M.push(U/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let N=0;N<h;N++){const U=N+p*_,A=N+p*(_+1),O=N+1+p*(_+1),H=N+1+p*_;y.push(U,A,H),y.push(A,O,H)}this.setIndex(y),this.setAttribute("position",new xn(b,3)),this.setAttribute("normal",new xn(w,3)),this.setAttribute("uv",new xn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Us extends Fn{constructor(t=.5,n=1,a=32,o=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:a,phiSegments:o,thetaStart:c,thetaLength:f},a=Math.max(3,a),o=Math.max(1,o);const h=[],m=[],p=[],g=[];let v=t;const x=(n-t)/o,y=new L,b=new ne;for(let w=0;w<=o;w++){for(let M=0;M<=a;M++){const _=c+M/a*f;y.x=v*Math.cos(_),y.y=v*Math.sin(_),m.push(y.x,y.y,y.z),p.push(0,0,1),b.x=(y.x/n+1)/2,b.y=(y.y/n+1)/2,g.push(b.x,b.y)}v+=x}for(let w=0;w<o;w++){const M=w*(a+1);for(let _=0;_<a;_++){const N=_+M,U=N,A=N+a+1,O=N+a+2,H=N+1;h.push(U,A,H),h.push(A,O,H)}}this.setIndex(h),this.setAttribute("position",new xn(m,3)),this.setAttribute("normal",new xn(p,3)),this.setAttribute("uv",new xn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class lp extends Fn{constructor(t=new K_([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const a=[],o=[],c=[],f=[];let h=0,m=0;if(Array.isArray(t)===!1)p(t);else for(let g=0;g<t.length;g++)p(t[g]),this.addGroup(h,m,g),h+=m,m=0;this.setIndex(a),this.setAttribute("position",new xn(o,3)),this.setAttribute("normal",new xn(c,3)),this.setAttribute("uv",new xn(f,2));function p(g){const v=o.length/3,x=g.extractPoints(n);let y=x.shape;const b=x.holes;su.isClockWise(y)===!1&&(y=y.reverse());for(let M=0,_=b.length;M<_;M++){const N=b[M];su.isClockWise(N)===!0&&(b[M]=N.reverse())}const w=su.triangulateShape(y,b);for(let M=0,_=b.length;M<_;M++){const N=b[M];y=y.concat(N)}for(let M=0,_=y.length;M<_;M++){const N=y[M];o.push(N.x,N.y,0),c.push(0,0,1),f.push(N.x,N.y)}for(let M=0,_=w.length;M<_;M++){const N=w[M],U=N[0]+v,A=N[1]+v,O=N[2]+v;a.push(U,A,O),m+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return T2(n,t)}static fromJSON(t,n){const a=[];for(let o=0,c=t.shapes.length;o<c;o++){const f=n[t.shapes[o]];a.push(f)}return new lp(a,t.curveSegments)}}function T2(r,t){if(t.shapes=[],Array.isArray(r))for(let n=0,a=r.length;n<a;n++){const o=r[n];t.shapes.push(o.uuid)}else t.shapes.push(r.uuid);return t}class _n extends Fn{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(f+h,Math.PI);let p=0;const g=[],v=new L,x=new L,y=[],b=[],w=[],M=[];for(let _=0;_<=a;_++){const N=[],U=_/a;let A=0;_===0&&f===0?A=.5/n:_===a&&m===Math.PI&&(A=-.5/n);for(let O=0;O<=n;O++){const H=O/n;v.x=-t*Math.cos(o+H*c)*Math.sin(f+U*h),v.y=t*Math.cos(f+U*h),v.z=t*Math.sin(o+H*c)*Math.sin(f+U*h),b.push(v.x,v.y,v.z),x.copy(v).normalize(),w.push(x.x,x.y,x.z),M.push(H+A,1-U),N.push(p++)}g.push(N)}for(let _=0;_<a;_++)for(let N=0;N<n;N++){const U=g[_][N+1],A=g[_][N],O=g[_+1][N],H=g[_+1][N+1];(_!==0||f>0)&&y.push(U,A,H),(_!==a-1||m<Math.PI)&&y.push(A,O,H)}this.setIndex(y),this.setAttribute("position",new xn(b,3)),this.setAttribute("normal",new xn(w,3)),this.setAttribute("uv",new xn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cp extends kl{constructor(t=1,n=0){const a=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],o=[2,1,0,0,3,2,1,3,0,2,3,1];super(a,o,t,n),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new cp(t.radius,t.detail)}}class up extends Fn{constructor(t=1,n=.4,a=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:o,arc:c},a=Math.floor(a),o=Math.floor(o);const f=[],h=[],m=[],p=[],g=new L,v=new L,x=new L;for(let y=0;y<=a;y++)for(let b=0;b<=o;b++){const w=b/o*c,M=y/a*Math.PI*2;v.x=(t+n*Math.cos(M))*Math.cos(w),v.y=(t+n*Math.cos(M))*Math.sin(w),v.z=n*Math.sin(M),h.push(v.x,v.y,v.z),g.x=t*Math.cos(w),g.y=t*Math.sin(w),x.subVectors(v,g).normalize(),m.push(x.x,x.y,x.z),p.push(b/o),p.push(y/a)}for(let y=1;y<=a;y++)for(let b=1;b<=o;b++){const w=(o+1)*y+b-1,M=(o+1)*(y-1)+b-1,_=(o+1)*(y-1)+b,N=(o+1)*y+b;f.push(w,M,N),f.push(M,_,N)}this.setIndex(f),this.setAttribute("position",new xn(h,3)),this.setAttribute("normal",new xn(m,3)),this.setAttribute("uv",new xn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new up(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class vt extends Er{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=L_,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class A2 extends Er{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class C2 extends Er{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class R2 extends Rl{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const O1={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class D2{constructor(t,n,a){const o=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,o.onProgress!==void 0&&o.onProgress(g,f,h),f===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const y=p[v],b=p[v+1];if(y.global&&(y.lastIndex=0),y.test(g))return b}return null}}}const P2=new D2;class fp{constructor(t){this.manager=t!==void 0?t:P2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const a=this;return new Promise(function(o,c){a.load(t,o,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}fp.DEFAULT_MATERIAL_NAME="__DEFAULT";class U2 extends fp{constructor(t){super(t)}load(t,n,a,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=O1.get(t);if(f!==void 0)return c.manager.itemStart(t),setTimeout(function(){n&&n(f),c.manager.itemEnd(t)},0),f;const h=cu("img");function m(){g(),O1.add(t,this),n&&n(this),c.manager.itemEnd(t)}function p(v){g(),o&&o(v),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),c.manager.itemStart(t),h.src=t,h}}class N2 extends fp{constructor(t){super(t)}load(t,n,a,o){const c=new Ci,f=new U2(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class hp extends $n{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class L2 extends hp{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const W0=new Rn,z1=new L,I1=new L;class O2{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ip,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;z1.setFromMatrixPosition(t.matrixWorld),n.position.copy(z1),I1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(I1),n.updateMatrixWorld(),W0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(W0),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(W0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const B1=new Rn,tu=new L,j0=new L;class z2 extends O2{constructor(){super(new aa(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Cn(2,1,1,1),new Cn(0,1,1,1),new Cn(3,1,1,1),new Cn(1,1,1,1),new Cn(3,0,1,1),new Cn(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,o=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),tu.setFromMatrixPosition(t.matrixWorld),a.position.copy(tu),j0.copy(a.position),j0.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(j0),a.updateMatrixWorld(),o.makeTranslation(-tu.x,-tu.y,-tu.z),B1.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(B1)}}class yi extends hp{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new z2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class I2 extends V_{constructor(t=-1,n=1,a=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,f=a+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class B2 extends hp{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class F2 extends aa{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}let H2=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=F1(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=F1();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}};function F1(){return performance.now()}const H1=new Rn;class G2{constructor(t,n,a=0,o=1/0){this.ray=new gu(t,n),this.near=a,this.far=o,this.camera=null,this.layers=new np,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return H1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(H1),this}intersectObject(t,n=!0,a=[]){return Wm(t,this,a,n),a.sort(G1),a}intersectObjects(t,n=!0,a=[]){for(let o=0,c=t.length;o<c;o++)Wm(t[o],this,a,n);return a.sort(G1),a}}function G1(r,t){return r.distance-t.distance}function Wm(r,t,n,a){let o=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)Wm(c[f],t,n,!0)}}class V1{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=nn(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(nn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class V2 extends yo{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function k1(r,t,n,a){const o=k2(a);switch(n){case A_:return r*t;case R_:return r*t;case D_:return r*t*2;case P_:return r*t/o.components*o.byteLength;case Jm:return r*t/o.components*o.byteLength;case U_:return r*t*2/o.components*o.byteLength;case $m:return r*t*2/o.components*o.byteLength;case C_:return r*t*3/o.components*o.byteLength;case Ca:return r*t*4/o.components*o.byteLength;case tp:return r*t*4/o.components*o.byteLength;case ah:case sh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case rh:case oh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pm:case vm:return Math.max(r,16)*Math.max(t,8)/4;case mm:case gm:return Math.max(r,8)*Math.max(t,8)/2;case _m:case xm:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ym:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mm:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sm:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case bm:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Em:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case wm:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Tm:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Am:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Cm:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Rm:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Dm:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Pm:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Um:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Nm:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Lm:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case lh:case Om:case zm:return Math.ceil(r/4)*Math.ceil(t/4)*16;case N_:case Im:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Bm:case Fm:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function k2(r){switch(r){case Is:case E_:return{byteLength:1,components:1};case lu:case w_:case du:return{byteLength:2,components:1};case Km:case Qm:return{byteLength:2,components:4};case go:case Zm:case Ns:return{byteLength:4,components:1};case T_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ym}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ym);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tx(){let r=null,t=!1,n=null,a=null;function o(c,f){n(c,f),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function X2(r){const t=new WeakMap;function n(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,g);else{v.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<v.length;y++){const b=v[x],w=v[y];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++x,v[x]=w)}v.length=x+1;for(let y=0,b=v.length;y<b;y++){const w=v[y];r.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:f}}var W2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_S=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MS="gl_FragColor = linearToOutputTexel( gl_FragColor );",SS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,US=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$S=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ib=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$b=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:W2,alphahash_pars_fragment:j2,alphamap_fragment:q2,alphamap_pars_fragment:Y2,alphatest_fragment:Z2,alphatest_pars_fragment:K2,aomap_fragment:Q2,aomap_pars_fragment:J2,batching_pars_vertex:$2,batching_vertex:tS,begin_vertex:eS,beginnormal_vertex:nS,bsdfs:iS,iridescence_fragment:aS,bumpmap_pars_fragment:sS,clipping_planes_fragment:rS,clipping_planes_pars_fragment:oS,clipping_planes_pars_vertex:lS,clipping_planes_vertex:cS,color_fragment:uS,color_pars_fragment:fS,color_pars_vertex:hS,color_vertex:dS,common:mS,cube_uv_reflection_fragment:pS,defaultnormal_vertex:gS,displacementmap_pars_vertex:vS,displacementmap_vertex:_S,emissivemap_fragment:xS,emissivemap_pars_fragment:yS,colorspace_fragment:MS,colorspace_pars_fragment:SS,envmap_fragment:bS,envmap_common_pars_fragment:ES,envmap_pars_fragment:wS,envmap_pars_vertex:TS,envmap_physical_pars_fragment:IS,envmap_vertex:AS,fog_vertex:CS,fog_pars_vertex:RS,fog_fragment:DS,fog_pars_fragment:PS,gradientmap_pars_fragment:US,lightmap_pars_fragment:NS,lights_lambert_fragment:LS,lights_lambert_pars_fragment:OS,lights_pars_begin:zS,lights_toon_fragment:BS,lights_toon_pars_fragment:FS,lights_phong_fragment:HS,lights_phong_pars_fragment:GS,lights_physical_fragment:VS,lights_physical_pars_fragment:kS,lights_fragment_begin:XS,lights_fragment_maps:WS,lights_fragment_end:jS,logdepthbuf_fragment:qS,logdepthbuf_pars_fragment:YS,logdepthbuf_pars_vertex:ZS,logdepthbuf_vertex:KS,map_fragment:QS,map_pars_fragment:JS,map_particle_fragment:$S,map_particle_pars_fragment:tb,metalnessmap_fragment:eb,metalnessmap_pars_fragment:nb,morphinstance_vertex:ib,morphcolor_vertex:ab,morphnormal_vertex:sb,morphtarget_pars_vertex:rb,morphtarget_vertex:ob,normal_fragment_begin:lb,normal_fragment_maps:cb,normal_pars_fragment:ub,normal_pars_vertex:fb,normal_vertex:hb,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:mb,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:gb,iridescence_pars_fragment:vb,opaque_fragment:_b,packing:xb,premultiplied_alpha_fragment:yb,project_vertex:Mb,dithering_fragment:Sb,dithering_pars_fragment:bb,roughnessmap_fragment:Eb,roughnessmap_pars_fragment:wb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:Ab,shadowmap_vertex:Cb,shadowmask_pars_fragment:Rb,skinbase_vertex:Db,skinning_pars_vertex:Pb,skinning_vertex:Ub,skinnormal_vertex:Nb,specularmap_fragment:Lb,specularmap_pars_fragment:Ob,tonemapping_fragment:zb,tonemapping_pars_fragment:Ib,transmission_fragment:Bb,transmission_pars_fragment:Fb,uv_pars_fragment:Hb,uv_pars_vertex:Gb,uv_vertex:Vb,worldpos_vertex:kb,background_vert:Xb,background_frag:Wb,backgroundCube_vert:jb,backgroundCube_frag:qb,cube_vert:Yb,cube_frag:Zb,depth_vert:Kb,depth_frag:Qb,distanceRGBA_vert:Jb,distanceRGBA_frag:$b,equirect_vert:tE,equirect_frag:eE,linedashed_vert:nE,linedashed_frag:iE,meshbasic_vert:aE,meshbasic_frag:sE,meshlambert_vert:rE,meshlambert_frag:oE,meshmatcap_vert:lE,meshmatcap_frag:cE,meshnormal_vert:uE,meshnormal_frag:fE,meshphong_vert:hE,meshphong_frag:dE,meshphysical_vert:mE,meshphysical_frag:pE,meshtoon_vert:gE,meshtoon_frag:vE,points_vert:_E,points_frag:xE,shadow_vert:yE,shadow_frag:ME,sprite_vert:SE,sprite_frag:bE},ge={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Za={basic:{uniforms:Oi([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Oi([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Oi([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Oi([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Oi([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Oi([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Oi([ge.points,ge.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Oi([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Oi([ge.common,ge.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Oi([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Oi([ge.sprite,ge.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Oi([ge.common,ge.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Oi([ge.lights,ge.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Za.physical={uniforms:Oi([Za.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const th={r:0,b:0,g:0},lo=new Qa,EE=new Rn;function wE(r,t,n,a,o,c,f){const h=new qt(0);let m=c===!0?0:1,p,g,v=null,x=0,y=null;function b(U){let A=U.isScene===!0?U.background:null;return A&&A.isTexture&&(A=(U.backgroundBlurriness>0?n:t).get(A)),A}function w(U){let A=!1;const O=b(U);O===null?_(h,m):O&&O.isColor&&(_(O,1),A=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?a.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(r.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,A){const O=b(A);O&&(O.isCubeTexture||O.mapping===xh)?(g===void 0&&(g=new $(new Pe(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Vl(Za.backgroundCube.uniforms),vertexShader:Za.backgroundCube.vertexShader,fragmentShader:Za.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,G,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),lo.copy(A.backgroundRotation),lo.x*=-1,lo.y*=-1,lo.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(lo.y*=-1,lo.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(EE.makeRotationFromEuler(lo)),g.material.toneMapped=gn.getTransfer(O.colorSpace)!==wn,(v!==O||x!==O.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,v=O,x=O.version,y=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new $(new pi(2,2),new dn({name:"BackgroundMaterial",uniforms:Vl(Za.background.uniforms),vertexShader:Za.background.vertexShader,fragmentShader:Za.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=gn.getTransfer(O.colorSpace)!==wn,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||x!==O.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,v=O,x=O.version,y=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,A){U.getRGB(th,G_(r)),a.buffers.color.setClear(th.r,th.g,th.b,A,f)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,A=1){h.set(U),m=A,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:w,addToRenderList:M,dispose:N}}function TE(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=x(null);let c=o,f=!1;function h(E,k,gt,dt,Et){let bt=!1;const Y=v(dt,gt,k);c!==Y&&(c=Y,p(c.object)),bt=y(E,dt,gt,Et),bt&&b(E,dt,gt,Et),Et!==null&&t.update(Et,r.ELEMENT_ARRAY_BUFFER),(bt||f)&&(f=!1,A(E,k,gt,dt),Et!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Et).buffer))}function m(){return r.createVertexArray()}function p(E){return r.bindVertexArray(E)}function g(E){return r.deleteVertexArray(E)}function v(E,k,gt){const dt=gt.wireframe===!0;let Et=a[E.id];Et===void 0&&(Et={},a[E.id]=Et);let bt=Et[k.id];bt===void 0&&(bt={},Et[k.id]=bt);let Y=bt[dt];return Y===void 0&&(Y=x(m()),bt[dt]=Y),Y}function x(E){const k=[],gt=[],dt=[];for(let Et=0;Et<n;Et++)k[Et]=0,gt[Et]=0,dt[Et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:gt,attributeDivisors:dt,object:E,attributes:{},index:null}}function y(E,k,gt,dt){const Et=c.attributes,bt=k.attributes;let Y=0;const _t=gt.getAttributes();for(const et in _t)if(_t[et].location>=0){const I=Et[et];let mt=bt[et];if(mt===void 0&&(et==="instanceMatrix"&&E.instanceMatrix&&(mt=E.instanceMatrix),et==="instanceColor"&&E.instanceColor&&(mt=E.instanceColor)),I===void 0||I.attribute!==mt||mt&&I.data!==mt.data)return!0;Y++}return c.attributesNum!==Y||c.index!==dt}function b(E,k,gt,dt){const Et={},bt=k.attributes;let Y=0;const _t=gt.getAttributes();for(const et in _t)if(_t[et].location>=0){let I=bt[et];I===void 0&&(et==="instanceMatrix"&&E.instanceMatrix&&(I=E.instanceMatrix),et==="instanceColor"&&E.instanceColor&&(I=E.instanceColor));const mt={};mt.attribute=I,I&&I.data&&(mt.data=I.data),Et[et]=mt,Y++}c.attributes=Et,c.attributesNum=Y,c.index=dt}function w(){const E=c.newAttributes;for(let k=0,gt=E.length;k<gt;k++)E[k]=0}function M(E){_(E,0)}function _(E,k){const gt=c.newAttributes,dt=c.enabledAttributes,Et=c.attributeDivisors;gt[E]=1,dt[E]===0&&(r.enableVertexAttribArray(E),dt[E]=1),Et[E]!==k&&(r.vertexAttribDivisor(E,k),Et[E]=k)}function N(){const E=c.newAttributes,k=c.enabledAttributes;for(let gt=0,dt=k.length;gt<dt;gt++)k[gt]!==E[gt]&&(r.disableVertexAttribArray(gt),k[gt]=0)}function U(E,k,gt,dt,Et,bt,Y){Y===!0?r.vertexAttribIPointer(E,k,gt,Et,bt):r.vertexAttribPointer(E,k,gt,dt,Et,bt)}function A(E,k,gt,dt){w();const Et=dt.attributes,bt=gt.getAttributes(),Y=k.defaultAttributeValues;for(const _t in bt){const et=bt[_t];if(et.location>=0){let Wt=Et[_t];if(Wt===void 0&&(_t==="instanceMatrix"&&E.instanceMatrix&&(Wt=E.instanceMatrix),_t==="instanceColor"&&E.instanceColor&&(Wt=E.instanceColor)),Wt!==void 0){const I=Wt.normalized,mt=Wt.itemSize,Jt=t.get(Wt);if(Jt===void 0)continue;const ie=Jt.buffer,Q=Jt.type,yt=Jt.bytesPerElement,Dt=Q===r.INT||Q===r.UNSIGNED_INT||Wt.gpuType===Zm;if(Wt.isInterleavedBufferAttribute){const Ut=Wt.data,ae=Ut.stride,ce=Wt.offset;if(Ut.isInstancedInterleavedBuffer){for(let he=0;he<et.locationSize;he++)_(et.location+he,Ut.meshPerAttribute);E.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let he=0;he<et.locationSize;he++)M(et.location+he);r.bindBuffer(r.ARRAY_BUFFER,ie);for(let he=0;he<et.locationSize;he++)U(et.location+he,mt/et.locationSize,Q,I,ae*yt,(ce+mt/et.locationSize*he)*yt,Dt)}else{if(Wt.isInstancedBufferAttribute){for(let Ut=0;Ut<et.locationSize;Ut++)_(et.location+Ut,Wt.meshPerAttribute);E.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=Wt.meshPerAttribute*Wt.count)}else for(let Ut=0;Ut<et.locationSize;Ut++)M(et.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,ie);for(let Ut=0;Ut<et.locationSize;Ut++)U(et.location+Ut,mt/et.locationSize,Q,I,mt*yt,mt/et.locationSize*Ut*yt,Dt)}}else if(Y!==void 0){const I=Y[_t];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(et.location,I);break;case 3:r.vertexAttrib3fv(et.location,I);break;case 4:r.vertexAttrib4fv(et.location,I);break;default:r.vertexAttrib1fv(et.location,I)}}}}N()}function O(){W();for(const E in a){const k=a[E];for(const gt in k){const dt=k[gt];for(const Et in dt)g(dt[Et].object),delete dt[Et];delete k[gt]}delete a[E]}}function H(E){if(a[E.id]===void 0)return;const k=a[E.id];for(const gt in k){const dt=k[gt];for(const Et in dt)g(dt[Et].object),delete dt[Et];delete k[gt]}delete a[E.id]}function G(E){for(const k in a){const gt=a[k];if(gt[E.id]===void 0)continue;const dt=gt[E.id];for(const Et in dt)g(dt[Et].object),delete dt[Et];delete gt[E.id]}}function W(){T(),f=!0,c!==o&&(c=o,p(c.object))}function T(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:W,resetDefaultState:T,dispose:O,releaseStatesOfGeometry:H,releaseStatesOfProgram:G,initAttributes:w,enableAttribute:M,disableUnusedAttributes:N}}function AE(r,t,n){let a;function o(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function f(p,g,v){v!==0&&(r.drawArraysInstanced(a,p,g,v),n.update(g,a,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,v);let y=0;for(let b=0;b<v;b++)y+=g[b];n.update(y,a,1)}function m(p,g,v,x){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],g[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,g,0,x,0,v);let b=0;for(let w=0;w<v;w++)b+=g[w]*x[w];n.update(b,a,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function CE(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const G=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(G){return!(G!==Ca&&a.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(G){const W=G===du&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==Is&&a.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==Ns&&!W)}function m(G){if(G==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=b>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:A,vertexTextures:O,maxSamples:H}}function RE(r){const t=this;let n=null,a=0,o=!1,c=!1;const f=new _r,h=new qe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||a!==0||o;return o=x,a=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){n=g(v,x,0)},this.setState=function(v,x,y){const b=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,_=r.get(v);if(!o||b===null||b.length===0||c&&!M)c?g(null):p();else{const N=c?0:a,U=N*4;let A=_.clippingState||null;m.value=A,A=g(b,x,U,y);for(let O=0;O!==U;++O)A[O]=n[O];_.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,x,y,b){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,b!==!0||M===null){const _=y+w*4,N=x.matrixWorldInverse;h.getNormalMatrix(N),(M===null||M.length<_)&&(M=new Float32Array(_));for(let U=0,A=y;U!==w;++U,A+=4)f.copy(v[U]).applyMatrix4(N,h),f.normal.toArray(M,A),M[A+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}function DE(r){let t=new WeakMap;function n(f,h){return h===fm?f.mapping=Il:h===hm&&(f.mapping=Bl),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===fm||h===hm)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new kM(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",o),n(p.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Pl=4,X1=[.125,.215,.35,.446,.526,.582],ho=20,q0=new I2,W1=new qt;let Y0=null,Z0=0,K0=0,Q0=!1;const fo=(1+Math.sqrt(5))/2,Tl=1/fo,j1=[new L(-fo,Tl,0),new L(fo,Tl,0),new L(-Tl,0,fo),new L(Tl,0,fo),new L(0,fo,-Tl),new L(0,fo,Tl),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],PE=new L;class q1{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100,c={}){const{size:f=256,position:h=PE}=c;Y0=this._renderer.getRenderTarget(),Z0=this._renderer.getActiveCubeFace(),K0=this._renderer.getActiveMipmapLevel(),Q0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Y0,Z0,K0),this._renderer.xr.enabled=Q0,t.scissorTest=!1,eh(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Il||t.mapping===Bl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Y0=this._renderer.getRenderTarget(),Z0=this._renderer.getActiveCubeFace(),K0=this._renderer.getActiveMipmapLevel(),Q0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Aa,minFilter:Aa,generateMipmaps:!1,type:du,format:Ca,colorSpace:Gl,depthBuffer:!1},o=Y1(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y1(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UE(c)),this._blurMaterial=NE(c,t,n)}return o}_compileMaterial(t){const n=new $(this._lodPlanes[0],t);this._renderer.compile(n,q0)}_sceneToCubeUV(t,n,a,o,c){const m=new aa(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(W1),v.toneMapping=Sr,v.autoClear=!1;const b=new Jn({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),w=new $(new Pe,b);let M=!1;const _=t.background;_?_.isColor&&(b.color.copy(_),t.background=null,M=!0):(b.color.copy(W1),M=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const A=this._cubeSize;eh(o,U*A,N>2?A:0,A,A),v.setRenderTarget(o),M&&v.render(w,m),v.render(t,m)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=y,v.autoClear=x,t.background=_}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Il||t.mapping===Bl;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=K1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z1());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new $(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;eh(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,q0)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=j1[(o-c-1)%j1.length];this._blur(t,c-1,c,f,h)}n.autoClear=a}_blur(t,n,a,o,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,o,"latitudinal",c),this._halfBlur(f,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new $(this._lodPlanes[o],p),x=p.uniforms,y=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ho-1),w=c/b,M=isFinite(c)?1+Math.floor(g*w):ho;M>ho&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ho}`);const _=[];let N=0;for(let G=0;G<ho;++G){const W=G/w,T=Math.exp(-W*W/2);_.push(T),G===0?N+=T:G<M&&(N+=2*T)}for(let G=0;G<_.length;G++)_[G]=_[G]/N;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-a;const A=this._sizeLods[o],O=3*A*(o>U-Pl?o-U+Pl:0),H=4*(this._cubeSize-A);eh(n,O,H,3*A,2*A),m.setRenderTarget(n),m.render(v,q0)}}function UE(r){const t=[],n=[],a=[];let o=r;const c=r-Pl+1+X1.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);n.push(h);let m=1/h;f>r-Pl?m=X1[f-r+Pl-1]:f===0&&(m=0),a.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,b=6,w=3,M=2,_=1,N=new Float32Array(w*b*y),U=new Float32Array(M*b*y),A=new Float32Array(_*b*y);for(let H=0;H<y;H++){const G=H%3*2/3-1,W=H>2?0:-1,T=[G,W,0,G+2/3,W,0,G+2/3,W+1,0,G,W,0,G+2/3,W+1,0,G,W+1,0];N.set(T,w*b*H),U.set(x,M*b*H);const E=[H,H,H,H,H,H];A.set(E,_*b*H)}const O=new Fn;O.setAttribute("position",new li(N,w)),O.setAttribute("uv",new li(U,M)),O.setAttribute("faceIndex",new li(A,_)),t.push(O),o>Pl&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function Y1(r,t,n){const a=new vo(r,t,n);return a.texture.mapping=xh,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function eh(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function NE(r,t,n){const a=new Float32Array(ho),o=new L(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:ho,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Z1(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function K1(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function dp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LE(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,p=m===fm||m===hm,g=m===Il||m===Bl;if(p||g){let v=t.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new q1(r)),v=p?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new q1(r)),v=p?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function OE(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&uo("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function zE(r,t,n,a){const o={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete o[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(v,x){return o[x.id]===!0||(x.addEventListener("dispose",f),o[x.id]=!0,n.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,b=v.attributes.position;let w=0;if(y!==null){const N=y.array;w=y.version;for(let U=0,A=N.length;U<A;U+=3){const O=N[U+0],H=N[U+1],G=N[U+2];x.push(O,H,H,G,G,O)}}else if(b!==void 0){const N=b.array;w=b.version;for(let U=0,A=N.length/3-1;U<A;U+=3){const O=U+0,H=U+1,G=U+2;x.push(O,H,H,G,G,O)}}else return;const M=new(z_(x)?H_:F_)(x,1);M.version=w;const _=c.get(v);_&&t.remove(_),c.set(v,M)}function g(v){const x=c.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function IE(r,t,n){let a;function o(x){a=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,y){r.drawElements(a,y,c,x*f),n.update(y,a,1)}function p(x,y,b){b!==0&&(r.drawElementsInstanced(a,y,c,x*f,b),n.update(y,a,b))}function g(x,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,x,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];n.update(M,a,1)}function v(x,y,b,w){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/f,y[_],w[_]);else{M.multiDrawElementsInstancedWEBGL(a,y,0,c,x,0,w,0,b);let _=0;for(let N=0;N<b;N++)_+=y[N]*w[N];n.update(_,a,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function BE(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function FE(r,t,n){const a=new WeakMap,o=new Cn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=a.get(h);if(x===void 0||x.count!==v){let E=function(){W.dispose(),a.delete(h),h.removeEventListener("dispose",E)};var y=E;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let A=0;b===!0&&(A=1),w===!0&&(A=2),M===!0&&(A=3);let O=h.attributes.position.count*A,H=1;O>t.maxTextureSize&&(H=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const G=new Float32Array(O*H*4*v),W=new I_(G,O,H,v);W.type=Ns,W.needsUpdate=!0;const T=A*4;for(let k=0;k<v;k++){const gt=_[k],dt=N[k],Et=U[k],bt=O*H*4*k;for(let Y=0;Y<gt.count;Y++){const _t=Y*T;b===!0&&(o.fromBufferAttribute(gt,Y),G[bt+_t+0]=o.x,G[bt+_t+1]=o.y,G[bt+_t+2]=o.z,G[bt+_t+3]=0),w===!0&&(o.fromBufferAttribute(dt,Y),G[bt+_t+4]=o.x,G[bt+_t+5]=o.y,G[bt+_t+6]=o.z,G[bt+_t+7]=0),M===!0&&(o.fromBufferAttribute(Et,Y),G[bt+_t+8]=o.x,G[bt+_t+9]=o.y,G[bt+_t+10]=o.z,G[bt+_t+11]=Et.itemSize===4?o.w:1)}}x={count:v,texture:W,size:new ne(O,H)},a.set(h,x),h.addEventListener("dispose",E)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const w=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function HE(r,t,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,v=t.get(m,g);if(o.get(v)!==p&&(t.update(v),o.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return v}function f(){o=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const ex=new Ci,Q1=new W_(1,1),nx=new I_,ix=new TM,ax=new k_,J1=[],$1=[],t_=new Float32Array(16),e_=new Float32Array(9),n_=new Float32Array(4);function Xl(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=J1[o];if(c===void 0&&(c=new Float32Array(o),J1[o]=c),t!==0){a.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function ci(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function ui(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function Mh(r,t){let n=$1[t];n===void 0&&(n=new Int32Array(t),$1[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function GE(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function VE(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ci(n,t))return;r.uniform2fv(this.addr,t),ui(n,t)}}function kE(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ci(n,t))return;r.uniform3fv(this.addr,t),ui(n,t)}}function XE(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ci(n,t))return;r.uniform4fv(this.addr,t),ui(n,t)}}function WE(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(ci(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),ui(n,t)}else{if(ci(n,a))return;n_.set(a),r.uniformMatrix2fv(this.addr,!1,n_),ui(n,a)}}function jE(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(ci(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),ui(n,t)}else{if(ci(n,a))return;e_.set(a),r.uniformMatrix3fv(this.addr,!1,e_),ui(n,a)}}function qE(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(ci(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),ui(n,t)}else{if(ci(n,a))return;t_.set(a),r.uniformMatrix4fv(this.addr,!1,t_),ui(n,a)}}function YE(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function ZE(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ci(n,t))return;r.uniform2iv(this.addr,t),ui(n,t)}}function KE(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ci(n,t))return;r.uniform3iv(this.addr,t),ui(n,t)}}function QE(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ci(n,t))return;r.uniform4iv(this.addr,t),ui(n,t)}}function JE(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function $E(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ci(n,t))return;r.uniform2uiv(this.addr,t),ui(n,t)}}function t3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ci(n,t))return;r.uniform3uiv(this.addr,t),ui(n,t)}}function e3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ci(n,t))return;r.uniform4uiv(this.addr,t),ui(n,t)}}function n3(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Q1.compareFunction=O_,c=Q1):c=ex,n.setTexture2D(t||c,o)}function i3(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||ix,o)}function a3(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||ax,o)}function s3(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||nx,o)}function r3(r){switch(r){case 5126:return GE;case 35664:return VE;case 35665:return kE;case 35666:return XE;case 35674:return WE;case 35675:return jE;case 35676:return qE;case 5124:case 35670:return YE;case 35667:case 35671:return ZE;case 35668:case 35672:return KE;case 35669:case 35673:return QE;case 5125:return JE;case 36294:return $E;case 36295:return t3;case 36296:return e3;case 35678:case 36198:case 36298:case 36306:case 35682:return n3;case 35679:case 36299:case 36307:return i3;case 35680:case 36300:case 36308:case 36293:return a3;case 36289:case 36303:case 36311:case 36292:return s3}}function o3(r,t){r.uniform1fv(this.addr,t)}function l3(r,t){const n=Xl(t,this.size,2);r.uniform2fv(this.addr,n)}function c3(r,t){const n=Xl(t,this.size,3);r.uniform3fv(this.addr,n)}function u3(r,t){const n=Xl(t,this.size,4);r.uniform4fv(this.addr,n)}function f3(r,t){const n=Xl(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function h3(r,t){const n=Xl(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function d3(r,t){const n=Xl(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function m3(r,t){r.uniform1iv(this.addr,t)}function p3(r,t){r.uniform2iv(this.addr,t)}function g3(r,t){r.uniform3iv(this.addr,t)}function v3(r,t){r.uniform4iv(this.addr,t)}function _3(r,t){r.uniform1uiv(this.addr,t)}function x3(r,t){r.uniform2uiv(this.addr,t)}function y3(r,t){r.uniform3uiv(this.addr,t)}function M3(r,t){r.uniform4uiv(this.addr,t)}function S3(r,t,n){const a=this.cache,o=t.length,c=Mh(n,o);ci(a,c)||(r.uniform1iv(this.addr,c),ui(a,c));for(let f=0;f!==o;++f)n.setTexture2D(t[f]||ex,c[f])}function b3(r,t,n){const a=this.cache,o=t.length,c=Mh(n,o);ci(a,c)||(r.uniform1iv(this.addr,c),ui(a,c));for(let f=0;f!==o;++f)n.setTexture3D(t[f]||ix,c[f])}function E3(r,t,n){const a=this.cache,o=t.length,c=Mh(n,o);ci(a,c)||(r.uniform1iv(this.addr,c),ui(a,c));for(let f=0;f!==o;++f)n.setTextureCube(t[f]||ax,c[f])}function w3(r,t,n){const a=this.cache,o=t.length,c=Mh(n,o);ci(a,c)||(r.uniform1iv(this.addr,c),ui(a,c));for(let f=0;f!==o;++f)n.setTexture2DArray(t[f]||nx,c[f])}function T3(r){switch(r){case 5126:return o3;case 35664:return l3;case 35665:return c3;case 35666:return u3;case 35674:return f3;case 35675:return h3;case 35676:return d3;case 5124:case 35670:return m3;case 35667:case 35671:return p3;case 35668:case 35672:return g3;case 35669:case 35673:return v3;case 5125:return _3;case 36294:return x3;case 36295:return y3;case 36296:return M3;case 35678:case 36198:case 36298:case 36306:case 35682:return S3;case 35679:case 36299:case 36307:return b3;case 35680:case 36300:case 36308:case 36293:return E3;case 36289:case 36303:case 36311:case 36292:return w3}}class A3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=r3(n.type)}}class C3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=T3(n.type)}}class R3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const J0=/(\w+)(\])?(\[|\.)?/g;function i_(r,t){r.seq.push(t),r.map[t.id]=t}function D3(r,t,n){const a=r.name,o=a.length;for(J0.lastIndex=0;;){const c=J0.exec(a),f=J0.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===o){i_(n,p===void 0?new A3(h,r,t):new C3(h,r,t));break}else{let v=n.map[h];v===void 0&&(v=new R3(h),i_(n,v)),n=v}}}class uh{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),f=t.getUniformLocation(n,c.name);D3(c,f,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const f=t[o];f.id in n&&a.push(f)}return a}}function a_(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const P3=37297;let U3=0;function N3(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=o;f<c;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const s_=new qe;function L3(r){gn._getMatrix(s_,gn.workingColorSpace,r);const t=`mat3( ${s_.elements.map(n=>n.toFixed(4))} )`;switch(gn.getTransfer(r)){case hh:return[t,"LinearTransferOETF"];case wn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function r_(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),o=r.getShaderInfoLog(t).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+N3(r.getShaderSource(t),f)}else return o}function O3(r,t){const n=L3(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function z3(r,t){let n;switch(t){case Jy:n="Linear";break;case $y:n="Reinhard";break;case tM:n="Cineon";break;case S_:n="ACESFilmic";break;case nM:n="AgX";break;case iM:n="Neutral";break;case eM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nh=new L;function I3(){gn.getLuminanceCoefficients(nh);const r=nh.x.toFixed(4),t=nh.y.toFixed(4),n=nh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B3(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nu).join(`
`)}function F3(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function H3(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function nu(r){return r!==""}function o_(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function l_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const G3=/^[ \t]*#include +<([\w\d./]+)>/gm;function jm(r){return r.replace(G3,k3)}const V3=new Map;function k3(r,t){let n=Ke[t];if(n===void 0){const a=V3.get(t);if(a!==void 0)n=Ke[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return jm(n)}const X3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c_(r){return r.replace(X3,W3)}function W3(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function u_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function j3(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===x_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ny?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ps&&(t="SHADOWMAP_TYPE_VSM"),t}function q3(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Il:case Bl:t="ENVMAP_TYPE_CUBE";break;case xh:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y3(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Bl:t="ENVMAP_MODE_REFRACTION";break}return t}function Z3(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case M_:t="ENVMAP_BLENDING_MULTIPLY";break;case Ky:t="ENVMAP_BLENDING_MIX";break;case Qy:t="ENVMAP_BLENDING_ADD";break}return t}function K3(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function Q3(r,t,n,a){const o=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=j3(n),p=q3(n),g=Y3(n),v=Z3(n),x=K3(n),y=B3(n),b=F3(c),w=o.createProgram();let M,_,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(nu).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(nu).join(`
`),_.length>0&&(_+=`
`)):(M=[u_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nu).join(`
`),_=[u_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sr?"#define TONE_MAPPING":"",n.toneMapping!==Sr?Ke.tonemapping_pars_fragment:"",n.toneMapping!==Sr?z3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,O3("linearToOutputTexel",n.outputColorSpace),I3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(nu).join(`
`)),f=jm(f),f=o_(f,n),f=l_(f,n),h=jm(h),h=o_(h,n),h=l_(h,n),f=c_(f),h=c_(h),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",n.glslVersion===a1?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===a1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=N+M+f,A=N+_+h,O=a_(o,o.VERTEX_SHADER,U),H=a_(o,o.FRAGMENT_SHADER,A);o.attachShader(w,O),o.attachShader(w,H),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function G(k){if(r.debug.checkShaderErrors){const gt=o.getProgramInfoLog(w).trim(),dt=o.getShaderInfoLog(O).trim(),Et=o.getShaderInfoLog(H).trim();let bt=!0,Y=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(bt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,w,O,H);else{const _t=r_(o,O,"vertex"),et=r_(o,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+gt+`
`+_t+`
`+et)}else gt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",gt):(dt===""||Et==="")&&(Y=!1);Y&&(k.diagnostics={runnable:bt,programLog:gt,vertexShader:{log:dt,prefix:M},fragmentShader:{log:Et,prefix:_}})}o.deleteShader(O),o.deleteShader(H),W=new uh(o,w),T=H3(o,w)}let W;this.getUniforms=function(){return W===void 0&&G(this),W};let T;this.getAttributes=function(){return T===void 0&&G(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=o.getProgramParameter(w,P3)),E},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=U3++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=H,this}let J3=0;class $3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new tw(t),n.set(t,a)),a}}class tw{constructor(t){this.id=J3++,this.code=t,this.usedTimes=0}}function ew(r,t,n,a,o,c,f){const h=new np,m=new $3,p=new Set,g=[],v=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return p.add(T),T===0?"uv":`uv${T}`}function M(T,E,k,gt,dt){const Et=gt.fog,bt=dt.geometry,Y=T.isMeshStandardMaterial?gt.environment:null,_t=(T.isMeshStandardMaterial?n:t).get(T.envMap||Y),et=_t&&_t.mapping===xh?_t.image.height:null,Wt=b[T.type];T.precision!==null&&(y=o.getMaxPrecision(T.precision),y!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const I=bt.morphAttributes.position||bt.morphAttributes.normal||bt.morphAttributes.color,mt=I!==void 0?I.length:0;let Jt=0;bt.morphAttributes.position!==void 0&&(Jt=1),bt.morphAttributes.normal!==void 0&&(Jt=2),bt.morphAttributes.color!==void 0&&(Jt=3);let ie,Q,yt,Dt;if(Wt){const ke=Za[Wt];ie=ke.vertexShader,Q=ke.fragmentShader}else ie=T.vertexShader,Q=T.fragmentShader,m.update(T),yt=m.getVertexShaderID(T),Dt=m.getFragmentShaderID(T);const Ut=r.getRenderTarget(),ae=r.state.buffers.depth.getReversed(),ce=dt.isInstancedMesh===!0,he=dt.isBatchedMesh===!0,Ye=!!T.map,Qe=!!T.matcap,Ge=!!_t,V=!!T.aoMap,Hn=!!T.lightMap,Ve=!!T.bumpMap,Fe=!!T.normalMap,oe=!!T.displacementMap,sn=!!T.emissiveMap,ve=!!T.metalnessMap,z=!!T.roughnessMap,C=T.anisotropy>0,lt=T.clearcoat>0,St=T.dispersion>0,zt=T.iridescence>0,At=T.sheen>0,Ae=T.transmission>0,le=C&&!!T.anisotropyMap,Se=lt&&!!T.clearcoatMap,Je=lt&&!!T.clearcoatNormalMap,Qt=lt&&!!T.clearcoatRoughnessMap,be=zt&&!!T.iridescenceMap,Oe=zt&&!!T.iridescenceThicknessMap,Ce=At&&!!T.sheenColorMap,J=At&&!!T.sheenRoughnessMap,Bt=!!T.specularMap,Vt=!!T.specularColorMap,de=!!T.specularIntensityMap,F=Ae&&!!T.transmissionMap,Ht=Ae&&!!T.thicknessMap,ut=!!T.gradientMap,xt=!!T.alphaMap,kt=T.alphaTest>0,jt=!!T.alphaHash,ye=!!T.extensions;let He=Sr;T.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(He=r.toneMapping);const Ze={shaderID:Wt,shaderType:T.type,shaderName:T.name,vertexShader:ie,fragmentShader:Q,defines:T.defines,customVertexShaderID:yt,customFragmentShaderID:Dt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:he,batchingColor:he&&dt._colorsTexture!==null,instancing:ce,instancingColor:ce&&dt.instanceColor!==null,instancingMorph:ce&&dt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ut===null?r.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:Gl,alphaToCoverage:!!T.alphaToCoverage,map:Ye,matcap:Qe,envMap:Ge,envMapMode:Ge&&_t.mapping,envMapCubeUVHeight:et,aoMap:V,lightMap:Hn,bumpMap:Ve,normalMap:Fe,displacementMap:x&&oe,emissiveMap:sn,normalMapObjectSpace:Fe&&T.normalMapType===oM,normalMapTangentSpace:Fe&&T.normalMapType===L_,metalnessMap:ve,roughnessMap:z,anisotropy:C,anisotropyMap:le,clearcoat:lt,clearcoatMap:Se,clearcoatNormalMap:Je,clearcoatRoughnessMap:Qt,dispersion:St,iridescence:zt,iridescenceMap:be,iridescenceThicknessMap:Oe,sheen:At,sheenColorMap:Ce,sheenRoughnessMap:J,specularMap:Bt,specularColorMap:Vt,specularIntensityMap:de,transmission:Ae,transmissionMap:F,thicknessMap:Ht,gradientMap:ut,opaque:T.transparent===!1&&T.blending===Nl&&T.alphaToCoverage===!1,alphaMap:xt,alphaTest:kt,alphaHash:jt,combine:T.combine,mapUv:Ye&&w(T.map.channel),aoMapUv:V&&w(T.aoMap.channel),lightMapUv:Hn&&w(T.lightMap.channel),bumpMapUv:Ve&&w(T.bumpMap.channel),normalMapUv:Fe&&w(T.normalMap.channel),displacementMapUv:oe&&w(T.displacementMap.channel),emissiveMapUv:sn&&w(T.emissiveMap.channel),metalnessMapUv:ve&&w(T.metalnessMap.channel),roughnessMapUv:z&&w(T.roughnessMap.channel),anisotropyMapUv:le&&w(T.anisotropyMap.channel),clearcoatMapUv:Se&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:Je&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:J&&w(T.sheenRoughnessMap.channel),specularMapUv:Bt&&w(T.specularMap.channel),specularColorMapUv:Vt&&w(T.specularColorMap.channel),specularIntensityMapUv:de&&w(T.specularIntensityMap.channel),transmissionMapUv:F&&w(T.transmissionMap.channel),thicknessMapUv:Ht&&w(T.thicknessMap.channel),alphaMapUv:xt&&w(T.alphaMap.channel),vertexTangents:!!bt.attributes.tangent&&(Fe||C),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!bt.attributes.color&&bt.attributes.color.itemSize===4,pointsUvs:dt.isPoints===!0&&!!bt.attributes.uv&&(Ye||xt),fog:!!Et,useFog:T.fog===!0,fogExp2:!!Et&&Et.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:ae,skinning:dt.isSkinnedMesh===!0,morphTargets:bt.morphAttributes.position!==void 0,morphNormals:bt.morphAttributes.normal!==void 0,morphColors:bt.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Jt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,decodeVideoTexture:Ye&&T.map.isVideoTexture===!0&&gn.getTransfer(T.map.colorSpace)===wn,decodeVideoTextureEmissive:sn&&T.emissiveMap.isVideoTexture===!0&&gn.getTransfer(T.emissiveMap.colorSpace)===wn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ze,flipSided:T.side===Bn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ye&&T.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&T.extensions.multiDraw===!0||he)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ze.vertexUv1s=p.has(1),Ze.vertexUv2s=p.has(2),Ze.vertexUv3s=p.has(3),p.clear(),Ze}function _(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)E.push(k),E.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(N(E,T),U(E,T),E.push(r.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function N(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function U(T,E){h.disableAll(),E.supportsVertexTextures&&h.enable(0),E.instancing&&h.enable(1),E.instancingColor&&h.enable(2),E.instancingMorph&&h.enable(3),E.matcap&&h.enable(4),E.envMap&&h.enable(5),E.normalMapObjectSpace&&h.enable(6),E.normalMapTangentSpace&&h.enable(7),E.clearcoat&&h.enable(8),E.iridescence&&h.enable(9),E.alphaTest&&h.enable(10),E.vertexColors&&h.enable(11),E.vertexAlphas&&h.enable(12),E.vertexUv1s&&h.enable(13),E.vertexUv2s&&h.enable(14),E.vertexUv3s&&h.enable(15),E.vertexTangents&&h.enable(16),E.anisotropy&&h.enable(17),E.alphaHash&&h.enable(18),E.batching&&h.enable(19),E.dispersion&&h.enable(20),E.batchingColor&&h.enable(21),T.push(h.mask),h.disableAll(),E.fog&&h.enable(0),E.useFog&&h.enable(1),E.flatShading&&h.enable(2),E.logarithmicDepthBuffer&&h.enable(3),E.reverseDepthBuffer&&h.enable(4),E.skinning&&h.enable(5),E.morphTargets&&h.enable(6),E.morphNormals&&h.enable(7),E.morphColors&&h.enable(8),E.premultipliedAlpha&&h.enable(9),E.shadowMapEnabled&&h.enable(10),E.doubleSided&&h.enable(11),E.flipSided&&h.enable(12),E.useDepthPacking&&h.enable(13),E.dithering&&h.enable(14),E.transmission&&h.enable(15),E.sheen&&h.enable(16),E.opaque&&h.enable(17),E.pointsUvs&&h.enable(18),E.decodeVideoTexture&&h.enable(19),E.decodeVideoTextureEmissive&&h.enable(20),E.alphaToCoverage&&h.enable(21),T.push(h.mask)}function A(T){const E=b[T.type];let k;if(E){const gt=Za[E];k=FM.clone(gt.uniforms)}else k=T.uniforms;return k}function O(T,E){let k;for(let gt=0,dt=g.length;gt<dt;gt++){const Et=g[gt];if(Et.cacheKey===E){k=Et,++k.usedTimes;break}}return k===void 0&&(k=new Q3(r,E,T,c),g.push(k)),k}function H(T){if(--T.usedTimes===0){const E=g.indexOf(T);g[E]=g[g.length-1],g.pop(),T.destroy()}}function G(T){m.remove(T)}function W(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:A,acquireProgram:O,releaseProgram:H,releaseShaderCache:G,programs:g,dispose:W}}function nw(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function o(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function iw(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function f_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function h_(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function f(v,x,y,b,w,M){let _=r[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:b,renderOrder:v.renderOrder,z:w,group:M},r[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=w,_.group=M),t++,_}function h(v,x,y,b,w,M){const _=f(v,x,y,b,w,M);y.transmission>0?a.push(_):y.transparent===!0?o.push(_):n.push(_)}function m(v,x,y,b,w,M){const _=f(v,x,y,b,w,M);y.transmission>0?a.unshift(_):y.transparent===!0?o.unshift(_):n.unshift(_)}function p(v,x){n.length>1&&n.sort(v||iw),a.length>1&&a.sort(x||f_),o.length>1&&o.sort(x||f_)}function g(){for(let v=t,x=r.length;v<x;v++){const y=r[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:m,finish:g,sort:p}}function aw(){let r=new WeakMap;function t(a,o){const c=r.get(a);let f;return c===void 0?(f=new h_,r.set(a,[f])):o>=c.length?(f=new h_,c.push(f)):f=c[o],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function sw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new L,color:new qt};break;case"SpotLight":n={position:new L,direction:new L,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":n={color:new qt,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=n,n}}}function rw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let ow=0;function lw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function cw(r){const t=new sw,n=rw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new L);const o=new L,c=new Rn,f=new Rn;function h(p){let g=0,v=0,x=0;for(let T=0;T<9;T++)a.probe[T].set(0,0,0);let y=0,b=0,w=0,M=0,_=0,N=0,U=0,A=0,O=0,H=0,G=0;p.sort(lw);for(let T=0,E=p.length;T<E;T++){const k=p[T],gt=k.color,dt=k.intensity,Et=k.distance,bt=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=gt.r*dt,v+=gt.g*dt,x+=gt.b*dt;else if(k.isLightProbe){for(let Y=0;Y<9;Y++)a.probe[Y].addScaledVector(k.sh.coefficients[Y],dt);G++}else if(k.isDirectionalLight){const Y=t.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const _t=k.shadow,et=n.get(k);et.shadowIntensity=_t.intensity,et.shadowBias=_t.bias,et.shadowNormalBias=_t.normalBias,et.shadowRadius=_t.radius,et.shadowMapSize=_t.mapSize,a.directionalShadow[y]=et,a.directionalShadowMap[y]=bt,a.directionalShadowMatrix[y]=k.shadow.matrix,N++}a.directional[y]=Y,y++}else if(k.isSpotLight){const Y=t.get(k);Y.position.setFromMatrixPosition(k.matrixWorld),Y.color.copy(gt).multiplyScalar(dt),Y.distance=Et,Y.coneCos=Math.cos(k.angle),Y.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Y.decay=k.decay,a.spot[w]=Y;const _t=k.shadow;if(k.map&&(a.spotLightMap[O]=k.map,O++,_t.updateMatrices(k),k.castShadow&&H++),a.spotLightMatrix[w]=_t.matrix,k.castShadow){const et=n.get(k);et.shadowIntensity=_t.intensity,et.shadowBias=_t.bias,et.shadowNormalBias=_t.normalBias,et.shadowRadius=_t.radius,et.shadowMapSize=_t.mapSize,a.spotShadow[w]=et,a.spotShadowMap[w]=bt,A++}w++}else if(k.isRectAreaLight){const Y=t.get(k);Y.color.copy(gt).multiplyScalar(dt),Y.halfWidth.set(k.width*.5,0,0),Y.halfHeight.set(0,k.height*.5,0),a.rectArea[M]=Y,M++}else if(k.isPointLight){const Y=t.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),Y.distance=k.distance,Y.decay=k.decay,k.castShadow){const _t=k.shadow,et=n.get(k);et.shadowIntensity=_t.intensity,et.shadowBias=_t.bias,et.shadowNormalBias=_t.normalBias,et.shadowRadius=_t.radius,et.shadowMapSize=_t.mapSize,et.shadowCameraNear=_t.camera.near,et.shadowCameraFar=_t.camera.far,a.pointShadow[b]=et,a.pointShadowMap[b]=bt,a.pointShadowMatrix[b]=k.shadow.matrix,U++}a.point[b]=Y,b++}else if(k.isHemisphereLight){const Y=t.get(k);Y.skyColor.copy(k.color).multiplyScalar(dt),Y.groundColor.copy(k.groundColor).multiplyScalar(dt),a.hemi[_]=Y,_++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ge.LTC_FLOAT_1,a.rectAreaLTC2=ge.LTC_FLOAT_2):(a.rectAreaLTC1=ge.LTC_HALF_1,a.rectAreaLTC2=ge.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=x;const W=a.hash;(W.directionalLength!==y||W.pointLength!==b||W.spotLength!==w||W.rectAreaLength!==M||W.hemiLength!==_||W.numDirectionalShadows!==N||W.numPointShadows!==U||W.numSpotShadows!==A||W.numSpotMaps!==O||W.numLightProbes!==G)&&(a.directional.length=y,a.spot.length=w,a.rectArea.length=M,a.point.length=b,a.hemi.length=_,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=A+O-H,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=H,a.numLightProbes=G,W.directionalLength=y,W.pointLength=b,W.spotLength=w,W.rectAreaLength=M,W.hemiLength=_,W.numDirectionalShadows=N,W.numPointShadows=U,W.numSpotShadows=A,W.numSpotMaps=O,W.numLightProbes=G,a.version=ow++)}function m(p,g){let v=0,x=0,y=0,b=0,w=0;const M=g.matrixWorldInverse;for(let _=0,N=p.length;_<N;_++){const U=p[_];if(U.isDirectionalLight){const A=a.directional[v];A.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(M),v++}else if(U.isSpotLight){const A=a.spot[y];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(M),A.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const A=a.rectArea[b];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),A.halfWidth.set(U.width*.5,0,0),A.halfHeight.set(0,U.height*.5,0),A.halfWidth.applyMatrix4(f),A.halfHeight.applyMatrix4(f),b++}else if(U.isPointLight){const A=a.point[x];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(M),x++}else if(U.isHemisphereLight){const A=a.hemi[w];A.direction.setFromMatrixPosition(U.matrixWorld),A.direction.transformDirection(M),w++}}}return{setup:h,setupView:m,state:a}}function d_(r){const t=new cw(r),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function uw(r){let t=new WeakMap;function n(o,c=0){const f=t.get(o);let h;return f===void 0?(h=new d_(r),t.set(o,[h])):c>=f.length?(h=new d_(r),f.push(h)):h=f[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dw(r,t,n){let a=new ip;const o=new ne,c=new ne,f=new Cn,h=new A2({depthPacking:rM}),m=new C2,p={},g=n.maxTextureSize,v={[br]:Bn,[Bn]:br,[ze]:ze},x=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:fw,fragmentShader:hw}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new Fn;b.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new $(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x_;let _=this.type;this.render=function(H,G,W){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const T=r.getRenderTarget(),E=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),gt=r.state;gt.setBlending(Mr),gt.buffers.color.setClear(1,1,1,1),gt.buffers.depth.setTest(!0),gt.setScissorTest(!1);const dt=_!==Ps&&this.type===Ps,Et=_===Ps&&this.type!==Ps;for(let bt=0,Y=H.length;bt<Y;bt++){const _t=H[bt],et=_t.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",_t,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;o.copy(et.mapSize);const Wt=et.getFrameExtents();if(o.multiply(Wt),c.copy(et.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Wt.x),o.x=c.x*Wt.x,et.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Wt.y),o.y=c.y*Wt.y,et.mapSize.y=c.y)),et.map===null||dt===!0||Et===!0){const mt=this.type!==Ps?{minFilter:Ra,magFilter:Ra}:{};et.map!==null&&et.map.dispose(),et.map=new vo(o.x,o.y,mt),et.map.texture.name=_t.name+".shadowMap",et.camera.updateProjectionMatrix()}r.setRenderTarget(et.map),r.clear();const I=et.getViewportCount();for(let mt=0;mt<I;mt++){const Jt=et.getViewport(mt);f.set(c.x*Jt.x,c.y*Jt.y,c.x*Jt.z,c.y*Jt.w),gt.viewport(f),et.updateMatrices(_t,mt),a=et.getFrustum(),A(G,W,et.camera,_t,this.type)}et.isPointLightShadow!==!0&&this.type===Ps&&N(et,W),et.needsUpdate=!1}_=this.type,M.needsUpdate=!1,r.setRenderTarget(T,E,k)};function N(H,G){const W=t.update(w);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new vo(o.x,o.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(G,null,W,x,w,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(G,null,W,y,w,null)}function U(H,G,W,T){let E=null;const k=W.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(k!==void 0)E=k;else if(E=W.isPointLight===!0?m:h,r.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0){const gt=E.uuid,dt=G.uuid;let Et=p[gt];Et===void 0&&(Et={},p[gt]=Et);let bt=Et[dt];bt===void 0&&(bt=E.clone(),Et[dt]=bt,G.addEventListener("dispose",O)),E=bt}if(E.visible=G.visible,E.wireframe=G.wireframe,T===Ps?E.side=G.shadowSide!==null?G.shadowSide:G.side:E.side=G.shadowSide!==null?G.shadowSide:v[G.side],E.alphaMap=G.alphaMap,E.alphaTest=G.alphaTest,E.map=G.map,E.clipShadows=G.clipShadows,E.clippingPlanes=G.clippingPlanes,E.clipIntersection=G.clipIntersection,E.displacementMap=G.displacementMap,E.displacementScale=G.displacementScale,E.displacementBias=G.displacementBias,E.wireframeLinewidth=G.wireframeLinewidth,E.linewidth=G.linewidth,W.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const gt=r.properties.get(E);gt.light=W}return E}function A(H,G,W,T,E){if(H.visible===!1)return;if(H.layers.test(G.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&E===Ps)&&(!H.frustumCulled||a.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,H.matrixWorld);const dt=t.update(H),Et=H.material;if(Array.isArray(Et)){const bt=dt.groups;for(let Y=0,_t=bt.length;Y<_t;Y++){const et=bt[Y],Wt=Et[et.materialIndex];if(Wt&&Wt.visible){const I=U(H,Wt,T,E);H.onBeforeShadow(r,H,G,W,dt,I,et),r.renderBufferDirect(W,null,dt,I,H,et),H.onAfterShadow(r,H,G,W,dt,I,et)}}}else if(Et.visible){const bt=U(H,Et,T,E);H.onBeforeShadow(r,H,G,W,dt,bt,null),r.renderBufferDirect(W,null,dt,bt,H,null),H.onAfterShadow(r,H,G,W,dt,bt,null)}}const gt=H.children;for(let dt=0,Et=gt.length;dt<Et;dt++)A(gt[dt],G,W,T,E)}function O(H){H.target.removeEventListener("dispose",O);for(const W in p){const T=p[W],E=H.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const mw={[am]:sm,[rm]:cm,[om]:um,[zl]:lm,[sm]:am,[cm]:rm,[um]:om,[lm]:zl};function pw(r,t){function n(){let F=!1;const Ht=new Cn;let ut=null;const xt=new Cn(0,0,0,0);return{setMask:function(kt){ut!==kt&&!F&&(r.colorMask(kt,kt,kt,kt),ut=kt)},setLocked:function(kt){F=kt},setClear:function(kt,jt,ye,He,Ze){Ze===!0&&(kt*=He,jt*=He,ye*=He),Ht.set(kt,jt,ye,He),xt.equals(Ht)===!1&&(r.clearColor(kt,jt,ye,He),xt.copy(Ht))},reset:function(){F=!1,ut=null,xt.set(-1,0,0,0)}}}function a(){let F=!1,Ht=!1,ut=null,xt=null,kt=null;return{setReversed:function(jt){if(Ht!==jt){const ye=t.get("EXT_clip_control");Ht?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT);const He=kt;kt=null,this.setClear(He)}Ht=jt},getReversed:function(){return Ht},setTest:function(jt){jt?Ut(r.DEPTH_TEST):ae(r.DEPTH_TEST)},setMask:function(jt){ut!==jt&&!F&&(r.depthMask(jt),ut=jt)},setFunc:function(jt){if(Ht&&(jt=mw[jt]),xt!==jt){switch(jt){case am:r.depthFunc(r.NEVER);break;case sm:r.depthFunc(r.ALWAYS);break;case rm:r.depthFunc(r.LESS);break;case zl:r.depthFunc(r.LEQUAL);break;case om:r.depthFunc(r.EQUAL);break;case lm:r.depthFunc(r.GEQUAL);break;case cm:r.depthFunc(r.GREATER);break;case um:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xt=jt}},setLocked:function(jt){F=jt},setClear:function(jt){kt!==jt&&(Ht&&(jt=1-jt),r.clearDepth(jt),kt=jt)},reset:function(){F=!1,ut=null,xt=null,kt=null,Ht=!1}}}function o(){let F=!1,Ht=null,ut=null,xt=null,kt=null,jt=null,ye=null,He=null,Ze=null;return{setTest:function(ke){F||(ke?Ut(r.STENCIL_TEST):ae(r.STENCIL_TEST))},setMask:function(ke){Ht!==ke&&!F&&(r.stencilMask(ke),Ht=ke)},setFunc:function(ke,On,Ln){(ut!==ke||xt!==On||kt!==Ln)&&(r.stencilFunc(ke,On,Ln),ut=ke,xt=On,kt=Ln)},setOp:function(ke,On,Ln){(jt!==ke||ye!==On||He!==Ln)&&(r.stencilOp(ke,On,Ln),jt=ke,ye=On,He=Ln)},setLocked:function(ke){F=ke},setClear:function(ke){Ze!==ke&&(r.clearStencil(ke),Ze=ke)},reset:function(){F=!1,Ht=null,ut=null,xt=null,kt=null,jt=null,ye=null,He=null,Ze=null}}}const c=new n,f=new a,h=new o,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],b=null,w=!1,M=null,_=null,N=null,U=null,A=null,O=null,H=null,G=new qt(0,0,0),W=0,T=!1,E=null,k=null,gt=null,dt=null,Et=null;const bt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,_t=0;const et=r.getParameter(r.VERSION);et.indexOf("WebGL")!==-1?(_t=parseFloat(/^WebGL (\d)/.exec(et)[1]),Y=_t>=1):et.indexOf("OpenGL ES")!==-1&&(_t=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),Y=_t>=2);let Wt=null,I={};const mt=r.getParameter(r.SCISSOR_BOX),Jt=r.getParameter(r.VIEWPORT),ie=new Cn().fromArray(mt),Q=new Cn().fromArray(Jt);function yt(F,Ht,ut,xt){const kt=new Uint8Array(4),jt=r.createTexture();r.bindTexture(F,jt),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ye=0;ye<ut;ye++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(Ht,0,r.RGBA,1,1,xt,0,r.RGBA,r.UNSIGNED_BYTE,kt):r.texImage2D(Ht+ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,kt);return jt}const Dt={};Dt[r.TEXTURE_2D]=yt(r.TEXTURE_2D,r.TEXTURE_2D,1),Dt[r.TEXTURE_CUBE_MAP]=yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[r.TEXTURE_2D_ARRAY]=yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Dt[r.TEXTURE_3D]=yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Ut(r.DEPTH_TEST),f.setFunc(zl),Ve(!1),Fe(t1),Ut(r.CULL_FACE),V(Mr);function Ut(F){g[F]!==!0&&(r.enable(F),g[F]=!0)}function ae(F){g[F]!==!1&&(r.disable(F),g[F]=!1)}function ce(F,Ht){return v[F]!==Ht?(r.bindFramebuffer(F,Ht),v[F]=Ht,F===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ht),F===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ht),!0):!1}function he(F,Ht){let ut=y,xt=!1;if(F){ut=x.get(Ht),ut===void 0&&(ut=[],x.set(Ht,ut));const kt=F.textures;if(ut.length!==kt.length||ut[0]!==r.COLOR_ATTACHMENT0){for(let jt=0,ye=kt.length;jt<ye;jt++)ut[jt]=r.COLOR_ATTACHMENT0+jt;ut.length=kt.length,xt=!0}}else ut[0]!==r.BACK&&(ut[0]=r.BACK,xt=!0);xt&&r.drawBuffers(ut)}function Ye(F){return b!==F?(r.useProgram(F),b=F,!0):!1}const Qe={[xr]:r.FUNC_ADD,[Ly]:r.FUNC_SUBTRACT,[Oy]:r.FUNC_REVERSE_SUBTRACT};Qe[zy]=r.MIN,Qe[Iy]=r.MAX;const Ge={[By]:r.ZERO,[y_]:r.ONE,[Fy]:r.SRC_COLOR,[fh]:r.SRC_ALPHA,[Wy]:r.SRC_ALPHA_SATURATE,[ky]:r.DST_COLOR,[Gy]:r.DST_ALPHA,[Hy]:r.ONE_MINUS_SRC_COLOR,[ru]:r.ONE_MINUS_SRC_ALPHA,[Xy]:r.ONE_MINUS_DST_COLOR,[Vy]:r.ONE_MINUS_DST_ALPHA,[jy]:r.CONSTANT_COLOR,[qy]:r.ONE_MINUS_CONSTANT_COLOR,[Yy]:r.CONSTANT_ALPHA,[Zy]:r.ONE_MINUS_CONSTANT_ALPHA};function V(F,Ht,ut,xt,kt,jt,ye,He,Ze,ke){if(F===Mr){w===!0&&(ae(r.BLEND),w=!1);return}if(w===!1&&(Ut(r.BLEND),w=!0),F!==im){if(F!==M||ke!==T){if((_!==xr||A!==xr)&&(r.blendEquation(r.FUNC_ADD),_=xr,A=xr),ke)switch(F){case Nl:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ai:r.blendFunc(r.ONE,r.ONE);break;case e1:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case n1:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Nl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ai:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case e1:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case n1:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}N=null,U=null,O=null,H=null,G.set(0,0,0),W=0,M=F,T=ke}return}kt=kt||Ht,jt=jt||ut,ye=ye||xt,(Ht!==_||kt!==A)&&(r.blendEquationSeparate(Qe[Ht],Qe[kt]),_=Ht,A=kt),(ut!==N||xt!==U||jt!==O||ye!==H)&&(r.blendFuncSeparate(Ge[ut],Ge[xt],Ge[jt],Ge[ye]),N=ut,U=xt,O=jt,H=ye),(He.equals(G)===!1||Ze!==W)&&(r.blendColor(He.r,He.g,He.b,Ze),G.copy(He),W=Ze),M=F,T=!1}function Hn(F,Ht){F.side===ze?ae(r.CULL_FACE):Ut(r.CULL_FACE);let ut=F.side===Bn;Ht&&(ut=!ut),Ve(ut),F.blending===Nl&&F.transparent===!1?V(Mr):V(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),f.setFunc(F.depthFunc),f.setTest(F.depthTest),f.setMask(F.depthWrite),c.setMask(F.colorWrite);const xt=F.stencilWrite;h.setTest(xt),xt&&(h.setMask(F.stencilWriteMask),h.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),h.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),sn(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ut(r.SAMPLE_ALPHA_TO_COVERAGE):ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(F){E!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),E=F)}function Fe(F){F!==Py?(Ut(r.CULL_FACE),F!==k&&(F===t1?r.cullFace(r.BACK):F===Uy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ae(r.CULL_FACE),k=F}function oe(F){F!==gt&&(Y&&r.lineWidth(F),gt=F)}function sn(F,Ht,ut){F?(Ut(r.POLYGON_OFFSET_FILL),(dt!==Ht||Et!==ut)&&(r.polygonOffset(Ht,ut),dt=Ht,Et=ut)):ae(r.POLYGON_OFFSET_FILL)}function ve(F){F?Ut(r.SCISSOR_TEST):ae(r.SCISSOR_TEST)}function z(F){F===void 0&&(F=r.TEXTURE0+bt-1),Wt!==F&&(r.activeTexture(F),Wt=F)}function C(F,Ht,ut){ut===void 0&&(Wt===null?ut=r.TEXTURE0+bt-1:ut=Wt);let xt=I[ut];xt===void 0&&(xt={type:void 0,texture:void 0},I[ut]=xt),(xt.type!==F||xt.texture!==Ht)&&(Wt!==ut&&(r.activeTexture(ut),Wt=ut),r.bindTexture(F,Ht||Dt[F]),xt.type=F,xt.texture=Ht)}function lt(){const F=I[Wt];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function St(){try{r.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(){try{r.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{r.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{r.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{r.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Je(){try{r.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qt(){try{r.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{r.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{r.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(F){ie.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),ie.copy(F))}function J(F){Q.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Q.copy(F))}function Bt(F,Ht){let ut=p.get(Ht);ut===void 0&&(ut=new WeakMap,p.set(Ht,ut));let xt=ut.get(F);xt===void 0&&(xt=r.getUniformBlockIndex(Ht,F.name),ut.set(F,xt))}function Vt(F,Ht){const xt=p.get(Ht).get(F);m.get(Ht)!==xt&&(r.uniformBlockBinding(Ht,xt,F.__bindingPointIndex),m.set(Ht,xt))}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Wt=null,I={},v={},x=new WeakMap,y=[],b=null,w=!1,M=null,_=null,N=null,U=null,A=null,O=null,H=null,G=new qt(0,0,0),W=0,T=!1,E=null,k=null,gt=null,dt=null,Et=null,ie.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Ut,disable:ae,bindFramebuffer:ce,drawBuffers:he,useProgram:Ye,setBlending:V,setMaterial:Hn,setFlipSided:Ve,setCullFace:Fe,setLineWidth:oe,setPolygonOffset:sn,setScissorTest:ve,activeTexture:z,bindTexture:C,unbindTexture:lt,compressedTexImage2D:St,compressedTexImage3D:zt,texImage2D:be,texImage3D:Oe,updateUBOMapping:Bt,uniformBlockBinding:Vt,texStorage2D:Je,texStorage3D:Qt,texSubImage2D:At,texSubImage3D:Ae,compressedTexSubImage2D:le,compressedTexSubImage3D:Se,scissor:Ce,viewport:J,reset:de}}function gw(r,t,n,a,o,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ne,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,C){return y?new OffscreenCanvas(z,C):cu("canvas")}function w(z,C,lt){let St=1;const zt=ve(z);if((zt.width>lt||zt.height>lt)&&(St=lt/Math.max(zt.width,zt.height)),St<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const At=Math.floor(St*zt.width),Ae=Math.floor(St*zt.height);v===void 0&&(v=b(At,Ae));const le=C?b(At,Ae):v;return le.width=At,le.height=Ae,le.getContext("2d").drawImage(z,0,0,At,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+zt.width+"x"+zt.height+") to ("+At+"x"+Ae+")."),le}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+zt.width+"x"+zt.height+")."),z;return z}function M(z){return z.generateMipmaps}function _(z){r.generateMipmap(z)}function N(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(z,C,lt,St,zt=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let At=C;if(C===r.RED&&(lt===r.FLOAT&&(At=r.R32F),lt===r.HALF_FLOAT&&(At=r.R16F),lt===r.UNSIGNED_BYTE&&(At=r.R8)),C===r.RED_INTEGER&&(lt===r.UNSIGNED_BYTE&&(At=r.R8UI),lt===r.UNSIGNED_SHORT&&(At=r.R16UI),lt===r.UNSIGNED_INT&&(At=r.R32UI),lt===r.BYTE&&(At=r.R8I),lt===r.SHORT&&(At=r.R16I),lt===r.INT&&(At=r.R32I)),C===r.RG&&(lt===r.FLOAT&&(At=r.RG32F),lt===r.HALF_FLOAT&&(At=r.RG16F),lt===r.UNSIGNED_BYTE&&(At=r.RG8)),C===r.RG_INTEGER&&(lt===r.UNSIGNED_BYTE&&(At=r.RG8UI),lt===r.UNSIGNED_SHORT&&(At=r.RG16UI),lt===r.UNSIGNED_INT&&(At=r.RG32UI),lt===r.BYTE&&(At=r.RG8I),lt===r.SHORT&&(At=r.RG16I),lt===r.INT&&(At=r.RG32I)),C===r.RGB_INTEGER&&(lt===r.UNSIGNED_BYTE&&(At=r.RGB8UI),lt===r.UNSIGNED_SHORT&&(At=r.RGB16UI),lt===r.UNSIGNED_INT&&(At=r.RGB32UI),lt===r.BYTE&&(At=r.RGB8I),lt===r.SHORT&&(At=r.RGB16I),lt===r.INT&&(At=r.RGB32I)),C===r.RGBA_INTEGER&&(lt===r.UNSIGNED_BYTE&&(At=r.RGBA8UI),lt===r.UNSIGNED_SHORT&&(At=r.RGBA16UI),lt===r.UNSIGNED_INT&&(At=r.RGBA32UI),lt===r.BYTE&&(At=r.RGBA8I),lt===r.SHORT&&(At=r.RGBA16I),lt===r.INT&&(At=r.RGBA32I)),C===r.RGB&&lt===r.UNSIGNED_INT_5_9_9_9_REV&&(At=r.RGB9_E5),C===r.RGBA){const Ae=zt?hh:gn.getTransfer(St);lt===r.FLOAT&&(At=r.RGBA32F),lt===r.HALF_FLOAT&&(At=r.RGBA16F),lt===r.UNSIGNED_BYTE&&(At=Ae===wn?r.SRGB8_ALPHA8:r.RGBA8),lt===r.UNSIGNED_SHORT_4_4_4_4&&(At=r.RGBA4),lt===r.UNSIGNED_SHORT_5_5_5_1&&(At=r.RGB5_A1)}return(At===r.R16F||At===r.R32F||At===r.RG16F||At===r.RG32F||At===r.RGBA16F||At===r.RGBA32F)&&t.get("EXT_color_buffer_float"),At}function A(z,C){let lt;return z?C===null||C===go||C===Fl?lt=r.DEPTH24_STENCIL8:C===Ns?lt=r.DEPTH32F_STENCIL8:C===lu&&(lt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===go||C===Fl?lt=r.DEPTH_COMPONENT24:C===Ns?lt=r.DEPTH_COMPONENT32F:C===lu&&(lt=r.DEPTH_COMPONENT16),lt}function O(z,C){return M(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ra&&z.minFilter!==Aa?Math.log2(Math.max(C.width,C.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?C.mipmaps.length:1}function H(z){const C=z.target;C.removeEventListener("dispose",H),W(C),C.isVideoTexture&&g.delete(C)}function G(z){const C=z.target;C.removeEventListener("dispose",G),E(C)}function W(z){const C=a.get(z);if(C.__webglInit===void 0)return;const lt=z.source,St=x.get(lt);if(St){const zt=St[C.__cacheKey];zt.usedTimes--,zt.usedTimes===0&&T(z),Object.keys(St).length===0&&x.delete(lt)}a.remove(z)}function T(z){const C=a.get(z);r.deleteTexture(C.__webglTexture);const lt=z.source,St=x.get(lt);delete St[C.__cacheKey],f.memory.textures--}function E(z){const C=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(C.__webglFramebuffer[St]))for(let zt=0;zt<C.__webglFramebuffer[St].length;zt++)r.deleteFramebuffer(C.__webglFramebuffer[St][zt]);else r.deleteFramebuffer(C.__webglFramebuffer[St]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[St])}else{if(Array.isArray(C.__webglFramebuffer))for(let St=0;St<C.__webglFramebuffer.length;St++)r.deleteFramebuffer(C.__webglFramebuffer[St]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let St=0;St<C.__webglColorRenderbuffer.length;St++)C.__webglColorRenderbuffer[St]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[St]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const lt=z.textures;for(let St=0,zt=lt.length;St<zt;St++){const At=a.get(lt[St]);At.__webglTexture&&(r.deleteTexture(At.__webglTexture),f.memory.textures--),a.remove(lt[St])}a.remove(z)}let k=0;function gt(){k=0}function dt(){const z=k;return z>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+o.maxTextures),k+=1,z}function Et(z){const C=[];return C.push(z.wrapS),C.push(z.wrapT),C.push(z.wrapR||0),C.push(z.magFilter),C.push(z.minFilter),C.push(z.anisotropy),C.push(z.internalFormat),C.push(z.format),C.push(z.type),C.push(z.generateMipmaps),C.push(z.premultiplyAlpha),C.push(z.flipY),C.push(z.unpackAlignment),C.push(z.colorSpace),C.join()}function bt(z,C){const lt=a.get(z);if(z.isVideoTexture&&oe(z),z.isRenderTargetTexture===!1&&z.version>0&&lt.__version!==z.version){const St=z.image;if(St===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(lt,z,C);return}}n.bindTexture(r.TEXTURE_2D,lt.__webglTexture,r.TEXTURE0+C)}function Y(z,C){const lt=a.get(z);if(z.version>0&&lt.__version!==z.version){Q(lt,z,C);return}n.bindTexture(r.TEXTURE_2D_ARRAY,lt.__webglTexture,r.TEXTURE0+C)}function _t(z,C){const lt=a.get(z);if(z.version>0&&lt.__version!==z.version){Q(lt,z,C);return}n.bindTexture(r.TEXTURE_3D,lt.__webglTexture,r.TEXTURE0+C)}function et(z,C){const lt=a.get(z);if(z.version>0&&lt.__version!==z.version){yt(lt,z,C);return}n.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture,r.TEXTURE0+C)}const Wt={[ou]:r.REPEAT,[mo]:r.CLAMP_TO_EDGE,[dm]:r.MIRRORED_REPEAT},I={[Ra]:r.NEAREST,[aM]:r.NEAREST_MIPMAP_NEAREST,[Tf]:r.NEAREST_MIPMAP_LINEAR,[Aa]:r.LINEAR,[v0]:r.LINEAR_MIPMAP_NEAREST,[po]:r.LINEAR_MIPMAP_LINEAR},mt={[lM]:r.NEVER,[mM]:r.ALWAYS,[cM]:r.LESS,[O_]:r.LEQUAL,[uM]:r.EQUAL,[dM]:r.GEQUAL,[fM]:r.GREATER,[hM]:r.NOTEQUAL};function Jt(z,C){if(C.type===Ns&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Aa||C.magFilter===v0||C.magFilter===Tf||C.magFilter===po||C.minFilter===Aa||C.minFilter===v0||C.minFilter===Tf||C.minFilter===po)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,Wt[C.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,Wt[C.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,Wt[C.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,I[C.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,I[C.minFilter]),C.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,mt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Ra||C.minFilter!==Tf&&C.minFilter!==po||C.type===Ns&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||a.get(C).__currentAnisotropy){const lt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(z,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),a.get(C).__currentAnisotropy=C.anisotropy}}}function ie(z,C){let lt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,C.addEventListener("dispose",H));const St=C.source;let zt=x.get(St);zt===void 0&&(zt={},x.set(St,zt));const At=Et(C);if(At!==z.__cacheKey){zt[At]===void 0&&(zt[At]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,lt=!0),zt[At].usedTimes++;const Ae=zt[z.__cacheKey];Ae!==void 0&&(zt[z.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(C)),z.__cacheKey=At,z.__webglTexture=zt[At].texture}return lt}function Q(z,C,lt){let St=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(St=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(St=r.TEXTURE_3D);const zt=ie(z,C),At=C.source;n.bindTexture(St,z.__webglTexture,r.TEXTURE0+lt);const Ae=a.get(At);if(At.version!==Ae.__version||zt===!0){n.activeTexture(r.TEXTURE0+lt);const le=gn.getPrimaries(gn.workingColorSpace),Se=C.colorSpace===yr?null:gn.getPrimaries(C.colorSpace),Je=C.colorSpace===yr||le===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Qt=w(C.image,!1,o.maxTextureSize);Qt=sn(C,Qt);const be=c.convert(C.format,C.colorSpace),Oe=c.convert(C.type);let Ce=U(C.internalFormat,be,Oe,C.colorSpace,C.isVideoTexture);Jt(St,C);let J;const Bt=C.mipmaps,Vt=C.isVideoTexture!==!0,de=Ae.__version===void 0||zt===!0,F=At.dataReady,Ht=O(C,Qt);if(C.isDepthTexture)Ce=A(C.format===Hl,C.type),de&&(Vt?n.texStorage2D(r.TEXTURE_2D,1,Ce,Qt.width,Qt.height):n.texImage2D(r.TEXTURE_2D,0,Ce,Qt.width,Qt.height,0,be,Oe,null));else if(C.isDataTexture)if(Bt.length>0){Vt&&de&&n.texStorage2D(r.TEXTURE_2D,Ht,Ce,Bt[0].width,Bt[0].height);for(let ut=0,xt=Bt.length;ut<xt;ut++)J=Bt[ut],Vt?F&&n.texSubImage2D(r.TEXTURE_2D,ut,0,0,J.width,J.height,be,Oe,J.data):n.texImage2D(r.TEXTURE_2D,ut,Ce,J.width,J.height,0,be,Oe,J.data);C.generateMipmaps=!1}else Vt?(de&&n.texStorage2D(r.TEXTURE_2D,Ht,Ce,Qt.width,Qt.height),F&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Qt.width,Qt.height,be,Oe,Qt.data)):n.texImage2D(r.TEXTURE_2D,0,Ce,Qt.width,Qt.height,0,be,Oe,Qt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Vt&&de&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Ce,Bt[0].width,Bt[0].height,Qt.depth);for(let ut=0,xt=Bt.length;ut<xt;ut++)if(J=Bt[ut],C.format!==Ca)if(be!==null)if(Vt){if(F)if(C.layerUpdates.size>0){const kt=k1(J.width,J.height,C.format,C.type);for(const jt of C.layerUpdates){const ye=J.data.subarray(jt*kt/J.data.BYTES_PER_ELEMENT,(jt+1)*kt/J.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,jt,J.width,J.height,1,be,ye)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,Qt.depth,be,J.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ut,Ce,J.width,J.height,Qt.depth,0,J.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?F&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,Qt.depth,be,Oe,J.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ut,Ce,J.width,J.height,Qt.depth,0,be,Oe,J.data)}else{Vt&&de&&n.texStorage2D(r.TEXTURE_2D,Ht,Ce,Bt[0].width,Bt[0].height);for(let ut=0,xt=Bt.length;ut<xt;ut++)J=Bt[ut],C.format!==Ca?be!==null?Vt?F&&n.compressedTexSubImage2D(r.TEXTURE_2D,ut,0,0,J.width,J.height,be,J.data):n.compressedTexImage2D(r.TEXTURE_2D,ut,Ce,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?F&&n.texSubImage2D(r.TEXTURE_2D,ut,0,0,J.width,J.height,be,Oe,J.data):n.texImage2D(r.TEXTURE_2D,ut,Ce,J.width,J.height,0,be,Oe,J.data)}else if(C.isDataArrayTexture)if(Vt){if(de&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Ce,Qt.width,Qt.height,Qt.depth),F)if(C.layerUpdates.size>0){const ut=k1(Qt.width,Qt.height,C.format,C.type);for(const xt of C.layerUpdates){const kt=Qt.data.subarray(xt*ut/Qt.data.BYTES_PER_ELEMENT,(xt+1)*ut/Qt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,Qt.width,Qt.height,1,be,Oe,kt)}C.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Qt.width,Qt.height,Qt.depth,be,Oe,Qt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ce,Qt.width,Qt.height,Qt.depth,0,be,Oe,Qt.data);else if(C.isData3DTexture)Vt?(de&&n.texStorage3D(r.TEXTURE_3D,Ht,Ce,Qt.width,Qt.height,Qt.depth),F&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Qt.width,Qt.height,Qt.depth,be,Oe,Qt.data)):n.texImage3D(r.TEXTURE_3D,0,Ce,Qt.width,Qt.height,Qt.depth,0,be,Oe,Qt.data);else if(C.isFramebufferTexture){if(de)if(Vt)n.texStorage2D(r.TEXTURE_2D,Ht,Ce,Qt.width,Qt.height);else{let ut=Qt.width,xt=Qt.height;for(let kt=0;kt<Ht;kt++)n.texImage2D(r.TEXTURE_2D,kt,Ce,ut,xt,0,be,Oe,null),ut>>=1,xt>>=1}}else if(Bt.length>0){if(Vt&&de){const ut=ve(Bt[0]);n.texStorage2D(r.TEXTURE_2D,Ht,Ce,ut.width,ut.height)}for(let ut=0,xt=Bt.length;ut<xt;ut++)J=Bt[ut],Vt?F&&n.texSubImage2D(r.TEXTURE_2D,ut,0,0,be,Oe,J):n.texImage2D(r.TEXTURE_2D,ut,Ce,be,Oe,J);C.generateMipmaps=!1}else if(Vt){if(de){const ut=ve(Qt);n.texStorage2D(r.TEXTURE_2D,Ht,Ce,ut.width,ut.height)}F&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,be,Oe,Qt)}else n.texImage2D(r.TEXTURE_2D,0,Ce,be,Oe,Qt);M(C)&&_(St),Ae.__version=At.version,C.onUpdate&&C.onUpdate(C)}z.__version=C.version}function yt(z,C,lt){if(C.image.length!==6)return;const St=ie(z,C),zt=C.source;n.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+lt);const At=a.get(zt);if(zt.version!==At.__version||St===!0){n.activeTexture(r.TEXTURE0+lt);const Ae=gn.getPrimaries(gn.workingColorSpace),le=C.colorSpace===yr?null:gn.getPrimaries(C.colorSpace),Se=C.colorSpace===yr||Ae===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Je=C.isCompressedTexture||C.image[0].isCompressedTexture,Qt=C.image[0]&&C.image[0].isDataTexture,be=[];for(let xt=0;xt<6;xt++)!Je&&!Qt?be[xt]=w(C.image[xt],!0,o.maxCubemapSize):be[xt]=Qt?C.image[xt].image:C.image[xt],be[xt]=sn(C,be[xt]);const Oe=be[0],Ce=c.convert(C.format,C.colorSpace),J=c.convert(C.type),Bt=U(C.internalFormat,Ce,J,C.colorSpace),Vt=C.isVideoTexture!==!0,de=At.__version===void 0||St===!0,F=zt.dataReady;let Ht=O(C,Oe);Jt(r.TEXTURE_CUBE_MAP,C);let ut;if(Je){Vt&&de&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,Bt,Oe.width,Oe.height);for(let xt=0;xt<6;xt++){ut=be[xt].mipmaps;for(let kt=0;kt<ut.length;kt++){const jt=ut[kt];C.format!==Ca?Ce!==null?Vt?F&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,0,0,jt.width,jt.height,Ce,jt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,Bt,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?F&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,0,0,jt.width,jt.height,Ce,J,jt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,Bt,jt.width,jt.height,0,Ce,J,jt.data)}}}else{if(ut=C.mipmaps,Vt&&de){ut.length>0&&Ht++;const xt=ve(be[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,Bt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Qt){Vt?F&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,be[xt].width,be[xt].height,Ce,J,be[xt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Bt,be[xt].width,be[xt].height,0,Ce,J,be[xt].data);for(let kt=0;kt<ut.length;kt++){const ye=ut[kt].image[xt].image;Vt?F&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,0,0,ye.width,ye.height,Ce,J,ye.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,Bt,ye.width,ye.height,0,Ce,J,ye.data)}}else{Vt?F&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ce,J,be[xt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Bt,Ce,J,be[xt]);for(let kt=0;kt<ut.length;kt++){const jt=ut[kt];Vt?F&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,0,0,Ce,J,jt.image[xt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,Bt,Ce,J,jt.image[xt])}}}M(C)&&_(r.TEXTURE_CUBE_MAP),At.__version=zt.version,C.onUpdate&&C.onUpdate(C)}z.__version=C.version}function Dt(z,C,lt,St,zt,At){const Ae=c.convert(lt.format,lt.colorSpace),le=c.convert(lt.type),Se=U(lt.internalFormat,Ae,le,lt.colorSpace),Je=a.get(C),Qt=a.get(lt);if(Qt.__renderTarget=C,!Je.__hasExternalTextures){const be=Math.max(1,C.width>>At),Oe=Math.max(1,C.height>>At);zt===r.TEXTURE_3D||zt===r.TEXTURE_2D_ARRAY?n.texImage3D(zt,At,Se,be,Oe,C.depth,0,Ae,le,null):n.texImage2D(zt,At,Se,be,Oe,0,Ae,le,null)}n.bindFramebuffer(r.FRAMEBUFFER,z),Fe(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,St,zt,Qt.__webglTexture,0,Ve(C)):(zt===r.TEXTURE_2D||zt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&zt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,St,zt,Qt.__webglTexture,At),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(z,C,lt){if(r.bindRenderbuffer(r.RENDERBUFFER,z),C.depthBuffer){const St=C.depthTexture,zt=St&&St.isDepthTexture?St.type:null,At=A(C.stencilBuffer,zt),Ae=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=Ve(C);Fe(C)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,At,C.width,C.height):lt?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,At,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,At,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ae,r.RENDERBUFFER,z)}else{const St=C.textures;for(let zt=0;zt<St.length;zt++){const At=St[zt],Ae=c.convert(At.format,At.colorSpace),le=c.convert(At.type),Se=U(At.internalFormat,Ae,le,At.colorSpace),Je=Ve(C);lt&&Fe(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Se,C.width,C.height):Fe(C)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Je,Se,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Se,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ae(z,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,z),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=a.get(C.depthTexture);St.__renderTarget=C,(!St.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),bt(C.depthTexture,0);const zt=St.__webglTexture,At=Ve(C);if(C.depthTexture.format===Ll)Fe(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,zt,0,At):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,zt,0);else if(C.depthTexture.format===Hl)Fe(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,zt,0,At):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,zt,0);else throw new Error("Unknown depthTexture format")}function ce(z){const C=a.get(z),lt=z.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==z.depthTexture){const St=z.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),St){const zt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,St.removeEventListener("dispose",zt)};St.addEventListener("dispose",zt),C.__depthDisposeCallback=zt}C.__boundDepthTexture=St}if(z.depthTexture&&!C.__autoAllocateDepthBuffer){if(lt)throw new Error("target.depthTexture not supported in Cube render targets");ae(C.__webglFramebuffer,z)}else if(lt){C.__webglDepthbuffer=[];for(let St=0;St<6;St++)if(n.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[St]),C.__webglDepthbuffer[St]===void 0)C.__webglDepthbuffer[St]=r.createRenderbuffer(),Ut(C.__webglDepthbuffer[St],z,!1);else{const zt=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=C.__webglDepthbuffer[St];r.bindRenderbuffer(r.RENDERBUFFER,At),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,At)}}else if(n.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),Ut(C.__webglDepthbuffer,z,!1);else{const St=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,zt),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,zt)}n.bindFramebuffer(r.FRAMEBUFFER,null)}function he(z,C,lt){const St=a.get(z);C!==void 0&&Dt(St.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),lt!==void 0&&ce(z)}function Ye(z){const C=z.texture,lt=a.get(z),St=a.get(C);z.addEventListener("dispose",G);const zt=z.textures,At=z.isWebGLCubeRenderTarget===!0,Ae=zt.length>1;if(Ae||(St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture()),St.__version=C.version,f.memory.textures++),At){lt.__webglFramebuffer=[];for(let le=0;le<6;le++)if(C.mipmaps&&C.mipmaps.length>0){lt.__webglFramebuffer[le]=[];for(let Se=0;Se<C.mipmaps.length;Se++)lt.__webglFramebuffer[le][Se]=r.createFramebuffer()}else lt.__webglFramebuffer[le]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){lt.__webglFramebuffer=[];for(let le=0;le<C.mipmaps.length;le++)lt.__webglFramebuffer[le]=r.createFramebuffer()}else lt.__webglFramebuffer=r.createFramebuffer();if(Ae)for(let le=0,Se=zt.length;le<Se;le++){const Je=a.get(zt[le]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),f.memory.textures++)}if(z.samples>0&&Fe(z)===!1){lt.__webglMultisampledFramebuffer=r.createFramebuffer(),lt.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,lt.__webglMultisampledFramebuffer);for(let le=0;le<zt.length;le++){const Se=zt[le];lt.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,lt.__webglColorRenderbuffer[le]);const Je=c.convert(Se.format,Se.colorSpace),Qt=c.convert(Se.type),be=U(Se.internalFormat,Je,Qt,Se.colorSpace,z.isXRRenderTarget===!0),Oe=Ve(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,be,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,lt.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(lt.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut(lt.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(At){n.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),Jt(r.TEXTURE_CUBE_MAP,C);for(let le=0;le<6;le++)if(C.mipmaps&&C.mipmaps.length>0)for(let Se=0;Se<C.mipmaps.length;Se++)Dt(lt.__webglFramebuffer[le][Se],z,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se);else Dt(lt.__webglFramebuffer[le],z,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);M(C)&&_(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let le=0,Se=zt.length;le<Se;le++){const Je=zt[le],Qt=a.get(Je);n.bindTexture(r.TEXTURE_2D,Qt.__webglTexture),Jt(r.TEXTURE_2D,Je),Dt(lt.__webglFramebuffer,z,Je,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),M(Je)&&_(r.TEXTURE_2D)}n.unbindTexture()}else{let le=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(le=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(le,St.__webglTexture),Jt(le,C),C.mipmaps&&C.mipmaps.length>0)for(let Se=0;Se<C.mipmaps.length;Se++)Dt(lt.__webglFramebuffer[Se],z,C,r.COLOR_ATTACHMENT0,le,Se);else Dt(lt.__webglFramebuffer,z,C,r.COLOR_ATTACHMENT0,le,0);M(C)&&_(le),n.unbindTexture()}z.depthBuffer&&ce(z)}function Qe(z){const C=z.textures;for(let lt=0,St=C.length;lt<St;lt++){const zt=C[lt];if(M(zt)){const At=N(z),Ae=a.get(zt).__webglTexture;n.bindTexture(At,Ae),_(At),n.unbindTexture()}}}const Ge=[],V=[];function Hn(z){if(z.samples>0){if(Fe(z)===!1){const C=z.textures,lt=z.width,St=z.height;let zt=r.COLOR_BUFFER_BIT;const At=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=a.get(z),le=C.length>1;if(le)for(let Se=0;Se<C.length;Se++)n.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Se=0;Se<C.length;Se++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(zt|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(zt|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);const Je=a.get(C[Se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Je,0)}r.blitFramebuffer(0,0,lt,St,0,0,lt,St,zt,r.NEAREST),m===!0&&(Ge.length=0,V.length=0,Ge.push(r.COLOR_ATTACHMENT0+Se),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Ge.push(At),V.push(At),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,V)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let Se=0;Se<C.length;Se++){n.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);const Je=a.get(C[Se]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,Je,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const C=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function Ve(z){return Math.min(o.maxSamples,z.samples)}function Fe(z){const C=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function oe(z){const C=f.render.frame;g.get(z)!==C&&(g.set(z,C),z.update())}function sn(z,C){const lt=z.colorSpace,St=z.format,zt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||lt!==Gl&&lt!==yr&&(gn.getTransfer(lt)===wn?(St!==Ca||zt!==Is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",lt)),C}function ve(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=dt,this.resetTextureUnits=gt,this.setTexture2D=bt,this.setTexture2DArray=Y,this.setTexture3D=_t,this.setTextureCube=et,this.rebindTextures=he,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Hn,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Fe}function vw(r,t){function n(a,o=yr){let c;const f=gn.getTransfer(o);if(a===Is)return r.UNSIGNED_BYTE;if(a===Km)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Qm)return r.UNSIGNED_SHORT_5_5_5_1;if(a===T_)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===E_)return r.BYTE;if(a===w_)return r.SHORT;if(a===lu)return r.UNSIGNED_SHORT;if(a===Zm)return r.INT;if(a===go)return r.UNSIGNED_INT;if(a===Ns)return r.FLOAT;if(a===du)return r.HALF_FLOAT;if(a===A_)return r.ALPHA;if(a===C_)return r.RGB;if(a===Ca)return r.RGBA;if(a===R_)return r.LUMINANCE;if(a===D_)return r.LUMINANCE_ALPHA;if(a===Ll)return r.DEPTH_COMPONENT;if(a===Hl)return r.DEPTH_STENCIL;if(a===P_)return r.RED;if(a===Jm)return r.RED_INTEGER;if(a===U_)return r.RG;if(a===$m)return r.RG_INTEGER;if(a===tp)return r.RGBA_INTEGER;if(a===ah||a===sh||a===rh||a===oh)if(f===wn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===ah)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===sh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===rh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===oh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===ah)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===sh)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===rh)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===oh)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===mm||a===pm||a===gm||a===vm)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===mm)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===pm)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===gm)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===vm)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===_m||a===xm||a===ym)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===_m||a===xm)return f===wn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===ym)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Mm||a===Sm||a===bm||a===Em||a===wm||a===Tm||a===Am||a===Cm||a===Rm||a===Dm||a===Pm||a===Um||a===Nm||a===Lm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Mm)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Sm)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===bm)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Em)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===wm)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Tm)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Am)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Cm)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Rm)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Dm)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Pm)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Um)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Nm)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Lm)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===lh||a===Om||a===zm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===lh)return f===wn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Om)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===zm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===N_||a===Im||a===Bm||a===Fm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===lh)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Im)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Bm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Fm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Fl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const _w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const o=new Ci,c=t.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new dn({vertexShader:_w,fragmentShader:xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $(new pi(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mw extends yo{constructor(t,n){super();const a=this;let o=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,b=null;const w=new yw,M=n.getContextAttributes();let _=null,N=null;const U=[],A=[],O=new ne;let H=null;const G=new aa;G.viewport=new Cn;const W=new aa;W.viewport=new Cn;const T=[G,W],E=new F2;let k=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let yt=U[Q];return yt===void 0&&(yt=new B0,U[Q]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(Q){let yt=U[Q];return yt===void 0&&(yt=new B0,U[Q]=yt),yt.getGripSpace()},this.getHand=function(Q){let yt=U[Q];return yt===void 0&&(yt=new B0,U[Q]=yt),yt.getHandSpace()};function dt(Q){const yt=A.indexOf(Q.inputSource);if(yt===-1)return;const Dt=U[yt];Dt!==void 0&&(Dt.update(Q.inputSource,Q.frame,p||f),Dt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Et(){o.removeEventListener("select",dt),o.removeEventListener("selectstart",dt),o.removeEventListener("selectend",dt),o.removeEventListener("squeeze",dt),o.removeEventListener("squeezestart",dt),o.removeEventListener("squeezeend",dt),o.removeEventListener("end",Et),o.removeEventListener("inputsourceschange",bt);for(let Q=0;Q<U.length;Q++){const yt=A[Q];yt!==null&&(A[Q]=null,U[Q].disconnect(yt))}k=null,gt=null,w.reset(),t.setRenderTarget(_),y=null,x=null,v=null,o=null,N=null,ie.stop(),a.isPresenting=!1,t.setPixelRatio(H),t.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(_=t.getRenderTarget(),o.addEventListener("select",dt),o.addEventListener("selectstart",dt),o.addEventListener("selectend",dt),o.addEventListener("squeeze",dt),o.addEventListener("squeezestart",dt),o.addEventListener("squeezeend",dt),o.addEventListener("end",Et),o.addEventListener("inputsourceschange",bt),M.xrCompatible!==!0&&await n.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(O),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Ut=null,ae=null;M.depth&&(ae=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Dt=M.stencil?Hl:Ll,Ut=M.stencil?Fl:go);const ce={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:c};v=new XRWebGLBinding(o,n),x=v.createProjectionLayer(ce),o.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),N=new vo(x.textureWidth,x.textureHeight,{format:Ca,type:Is,depthTexture:new W_(x.textureWidth,x.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Dt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Dt),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new vo(y.framebufferWidth,y.framebufferHeight,{format:Ca,type:Is,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await o.requestReferenceSpace(h),ie.setContext(o),ie.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function bt(Q){for(let yt=0;yt<Q.removed.length;yt++){const Dt=Q.removed[yt],Ut=A.indexOf(Dt);Ut>=0&&(A[Ut]=null,U[Ut].disconnect(Dt))}for(let yt=0;yt<Q.added.length;yt++){const Dt=Q.added[yt];let Ut=A.indexOf(Dt);if(Ut===-1){for(let ce=0;ce<U.length;ce++)if(ce>=A.length){A.push(Dt),Ut=ce;break}else if(A[ce]===null){A[ce]=Dt,Ut=ce;break}if(Ut===-1)break}const ae=U[Ut];ae&&ae.connect(Dt)}}const Y=new L,_t=new L;function et(Q,yt,Dt){Y.setFromMatrixPosition(yt.matrixWorld),_t.setFromMatrixPosition(Dt.matrixWorld);const Ut=Y.distanceTo(_t),ae=yt.projectionMatrix.elements,ce=Dt.projectionMatrix.elements,he=ae[14]/(ae[10]-1),Ye=ae[14]/(ae[10]+1),Qe=(ae[9]+1)/ae[5],Ge=(ae[9]-1)/ae[5],V=(ae[8]-1)/ae[0],Hn=(ce[8]+1)/ce[0],Ve=he*V,Fe=he*Hn,oe=Ut/(-V+Hn),sn=oe*-V;if(yt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(sn),Q.translateZ(oe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ae[10]===-1)Q.projectionMatrix.copy(yt.projectionMatrix),Q.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const ve=he+oe,z=Ye+oe,C=Ve-sn,lt=Fe+(Ut-sn),St=Qe*Ye/z*ve,zt=Ge*Ye/z*ve;Q.projectionMatrix.makePerspective(C,lt,St,zt,ve,z),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Wt(Q,yt){yt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(yt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let yt=Q.near,Dt=Q.far;w.texture!==null&&(w.depthNear>0&&(yt=w.depthNear),w.depthFar>0&&(Dt=w.depthFar)),E.near=W.near=G.near=yt,E.far=W.far=G.far=Dt,(k!==E.near||gt!==E.far)&&(o.updateRenderState({depthNear:E.near,depthFar:E.far}),k=E.near,gt=E.far),G.layers.mask=Q.layers.mask|2,W.layers.mask=Q.layers.mask|4,E.layers.mask=G.layers.mask|W.layers.mask;const Ut=Q.parent,ae=E.cameras;Wt(E,Ut);for(let ce=0;ce<ae.length;ce++)Wt(ae[ce],Ut);ae.length===2?et(E,G,W):E.projectionMatrix.copy(G.projectionMatrix),I(Q,E,Ut)};function I(Q,yt,Dt){Dt===null?Q.matrix.copy(yt.matrixWorld):(Q.matrix.copy(Dt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(yt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(yt.projectionMatrix),Q.projectionMatrixInverse.copy(yt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Gm*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(E)};let mt=null;function Jt(Q,yt){if(g=yt.getViewerPose(p||f),b=yt,g!==null){const Dt=g.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let Ut=!1;Dt.length!==E.cameras.length&&(E.cameras.length=0,Ut=!0);for(let he=0;he<Dt.length;he++){const Ye=Dt[he];let Qe=null;if(y!==null)Qe=y.getViewport(Ye);else{const V=v.getViewSubImage(x,Ye);Qe=V.viewport,he===0&&(t.setRenderTargetTextures(N,V.colorTexture,x.ignoreDepthValues?void 0:V.depthStencilTexture),t.setRenderTarget(N))}let Ge=T[he];Ge===void 0&&(Ge=new aa,Ge.layers.enable(he),Ge.viewport=new Cn,T[he]=Ge),Ge.matrix.fromArray(Ye.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ye.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),he===0&&(E.matrix.copy(Ge.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ut===!0&&E.cameras.push(Ge)}const ae=o.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const he=v.getDepthInformation(Dt[0]);he&&he.isValid&&he.texture&&w.init(t,he,o.renderState)}}for(let Dt=0;Dt<U.length;Dt++){const Ut=A[Dt],ae=U[Dt];Ut!==null&&ae!==void 0&&ae.update(Ut,yt,p||f)}mt&&mt(Q,yt),yt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:yt}),b=null}const ie=new tx;ie.setAnimationLoop(Jt),this.setAnimationLoop=function(Q){mt=Q},this.dispose=function(){}}}const co=new Qa,Sw=new Rn;function bw(r,t){function n(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function a(M,_){_.color.getRGB(M.fogColor.value,G_(r)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function o(M,_,N,U,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&y(M,_,A)):_.isMeshMatcapMaterial?(c(M,_),b(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),w(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(f(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,N,U):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,n(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Bn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,n(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Bn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,n(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,n(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const N=t.get(_),U=N.envMap,A=N.envMapRotation;U&&(M.envMap.value=U,co.copy(A),co.x*=-1,co.y*=-1,co.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(co.y*=-1,co.z*=-1),M.envMapRotation.value.setFromMatrix4(Sw.makeRotationFromEuler(co)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,M.aoMapTransform))}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,N,U){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*N,M.scale.value=U*.5,_.map&&(M.map.value=_.map,n(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,N){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function w(M,_){const N=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Ew(r,t,n,a){let o={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,U){const A=U.program;a.uniformBlockBinding(N,A)}function p(N,U){let A=o[N.id];A===void 0&&(b(N),A=g(N),o[N.id]=A,N.addEventListener("dispose",M));const O=U.program;a.updateUBOMapping(N,O);const H=t.render.frame;c[N.id]!==H&&(x(N),c[N.id]=H)}function g(N){const U=v();N.__bindingPointIndex=U;const A=r.createBuffer(),O=N.__size,H=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,O,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,A),A}function v(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const U=o[N.id],A=N.uniforms,O=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let H=0,G=A.length;H<G;H++){const W=Array.isArray(A[H])?A[H]:[A[H]];for(let T=0,E=W.length;T<E;T++){const k=W[T];if(y(k,H,T,O)===!0){const gt=k.__offset,dt=Array.isArray(k.value)?k.value:[k.value];let Et=0;for(let bt=0;bt<dt.length;bt++){const Y=dt[bt],_t=w(Y);typeof Y=="number"||typeof Y=="boolean"?(k.__data[0]=Y,r.bufferSubData(r.UNIFORM_BUFFER,gt+Et,k.__data)):Y.isMatrix3?(k.__data[0]=Y.elements[0],k.__data[1]=Y.elements[1],k.__data[2]=Y.elements[2],k.__data[3]=0,k.__data[4]=Y.elements[3],k.__data[5]=Y.elements[4],k.__data[6]=Y.elements[5],k.__data[7]=0,k.__data[8]=Y.elements[6],k.__data[9]=Y.elements[7],k.__data[10]=Y.elements[8],k.__data[11]=0):(Y.toArray(k.__data,Et),Et+=_t.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,gt,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(N,U,A,O){const H=N.value,G=U+"_"+A;if(O[G]===void 0)return typeof H=="number"||typeof H=="boolean"?O[G]=H:O[G]=H.clone(),!0;{const W=O[G];if(typeof H=="number"||typeof H=="boolean"){if(W!==H)return O[G]=H,!0}else if(W.equals(H)===!1)return W.copy(H),!0}return!1}function b(N){const U=N.uniforms;let A=0;const O=16;for(let G=0,W=U.length;G<W;G++){const T=Array.isArray(U[G])?U[G]:[U[G]];for(let E=0,k=T.length;E<k;E++){const gt=T[E],dt=Array.isArray(gt.value)?gt.value:[gt.value];for(let Et=0,bt=dt.length;Et<bt;Et++){const Y=dt[Et],_t=w(Y),et=A%O,Wt=et%_t.boundary,I=et+Wt;A+=Wt,I!==0&&O-I<_t.storage&&(A+=O-I),gt.__data=new Float32Array(_t.storage/Float32Array.BYTES_PER_ELEMENT),gt.__offset=A,A+=_t.storage}}}const H=A%O;return H>0&&(A+=O-H),N.__size=A,N.__cache={},this}function w(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function M(N){const U=N.target;U.removeEventListener("dispose",M);const A=f.indexOf(U.__bindingPointIndex);f.splice(A,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function _(){for(const N in o)r.deleteBuffer(o[N]);f=[],o={},c={}}return{bind:m,update:p,dispose:_}}class ww{constructor(t={}){const{canvas:n=vM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=f;const b=new Uint32Array(4),w=new Int32Array(4);let M=null,_=null;const N=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ma,this.toneMapping=Sr,this.toneMappingExposure=1;const A=this;let O=!1,H=0,G=0,W=null,T=-1,E=null;const k=new Cn,gt=new Cn;let dt=null;const Et=new qt(0);let bt=0,Y=n.width,_t=n.height,et=1,Wt=null,I=null;const mt=new Cn(0,0,Y,_t),Jt=new Cn(0,0,Y,_t);let ie=!1;const Q=new ip;let yt=!1,Dt=!1;this.transmissionResolutionScale=1;const Ut=new Rn,ae=new Rn,ce=new L,he=new Cn,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Ge(){return W===null?et:1}let V=a;function Hn(D,K){return n.getContext(D,K)}try{const D={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ym}`),n.addEventListener("webglcontextlost",xt,!1),n.addEventListener("webglcontextrestored",kt,!1),n.addEventListener("webglcontextcreationerror",jt,!1),V===null){const K="webgl2";if(V=Hn(K,D),V===null)throw Hn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ve,Fe,oe,sn,ve,z,C,lt,St,zt,At,Ae,le,Se,Je,Qt,be,Oe,Ce,J,Bt,Vt,de,F;function Ht(){Ve=new OE(V),Ve.init(),Vt=new vw(V,Ve),Fe=new CE(V,Ve,t,Vt),oe=new pw(V,Ve),Fe.reverseDepthBuffer&&x&&oe.buffers.depth.setReversed(!0),sn=new BE(V),ve=new nw,z=new gw(V,Ve,oe,ve,Fe,Vt,sn),C=new DE(A),lt=new LE(A),St=new X2(V),de=new TE(V,St),zt=new zE(V,St,sn,de),At=new HE(V,zt,St,sn),Ce=new FE(V,Fe,z),Qt=new RE(ve),Ae=new ew(A,C,lt,Ve,Fe,de,Qt),le=new bw(A,ve),Se=new aw,Je=new uw(Ve),Oe=new wE(A,C,lt,oe,At,y,m),be=new dw(A,At,Fe),F=new Ew(V,sn,Fe,oe),J=new AE(V,Ve,sn),Bt=new IE(V,Ve,sn),sn.programs=Ae.programs,A.capabilities=Fe,A.extensions=Ve,A.properties=ve,A.renderLists=Se,A.shadowMap=be,A.state=oe,A.info=sn}Ht();const ut=new Mw(A,V);this.xr=ut,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=Ve.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ve.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(D){D!==void 0&&(et=D,this.setSize(Y,_t,!1))},this.getSize=function(D){return D.set(Y,_t)},this.setSize=function(D,K,ht=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=D,_t=K,n.width=Math.floor(D*et),n.height=Math.floor(K*et),ht===!0&&(n.style.width=D+"px",n.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(Y*et,_t*et).floor()},this.setDrawingBufferSize=function(D,K,ht){Y=D,_t=K,et=ht,n.width=Math.floor(D*ht),n.height=Math.floor(K*ht),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(k)},this.getViewport=function(D){return D.copy(mt)},this.setViewport=function(D,K,ht,ot){D.isVector4?mt.set(D.x,D.y,D.z,D.w):mt.set(D,K,ht,ot),oe.viewport(k.copy(mt).multiplyScalar(et).round())},this.getScissor=function(D){return D.copy(Jt)},this.setScissor=function(D,K,ht,ot){D.isVector4?Jt.set(D.x,D.y,D.z,D.w):Jt.set(D,K,ht,ot),oe.scissor(gt.copy(Jt).multiplyScalar(et).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(D){oe.setScissorTest(ie=D)},this.setOpaqueSort=function(D){Wt=D},this.setTransparentSort=function(D){I=D},this.getClearColor=function(D){return D.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(D=!0,K=!0,ht=!0){let ot=0;if(D){let tt=!1;if(W!==null){const Yt=W.texture.format;tt=Yt===tp||Yt===$m||Yt===Jm}if(tt){const Yt=W.texture.type,se=Yt===Is||Yt===go||Yt===lu||Yt===Fl||Yt===Km||Yt===Qm,_e=Oe.getClearColor(),fe=Oe.getClearAlpha(),Ie=_e.r,j=_e.g,it=_e.b;se?(b[0]=Ie,b[1]=j,b[2]=it,b[3]=fe,V.clearBufferuiv(V.COLOR,0,b)):(w[0]=Ie,w[1]=j,w[2]=it,w[3]=fe,V.clearBufferiv(V.COLOR,0,w))}else ot|=V.COLOR_BUFFER_BIT}K&&(ot|=V.DEPTH_BUFFER_BIT),ht&&(ot|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xt,!1),n.removeEventListener("webglcontextrestored",kt,!1),n.removeEventListener("webglcontextcreationerror",jt,!1),Oe.dispose(),Se.dispose(),Je.dispose(),ve.dispose(),C.dispose(),lt.dispose(),At.dispose(),de.dispose(),F.dispose(),Ae.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",$a),ut.removeEventListener("sessionend",Pa),gi.stop()};function xt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const D=sn.autoReset,K=be.enabled,ht=be.autoUpdate,ot=be.needsUpdate,tt=be.type;Ht(),sn.autoReset=D,be.enabled=K,be.autoUpdate=ht,be.needsUpdate=ot,be.type=tt}function jt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ye(D){const K=D.target;K.removeEventListener("dispose",ye),He(K)}function He(D){Ze(D),ve.remove(D)}function Ze(D){const K=ve.get(D).programs;K!==void 0&&(K.forEach(function(ht){Ae.releaseProgram(ht)}),D.isShaderMaterial&&Ae.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ht,ot,tt,Yt){K===null&&(K=Ye);const se=tt.isMesh&&tt.matrixWorld.determinant()<0,_e=Ii(D,K,ht,ot,tt);oe.setMaterial(ot,se);let fe=ht.index,Ie=1;if(ot.wireframe===!0){if(fe=zt.getWireframeAttribute(ht),fe===void 0)return;Ie=2}const j=ht.drawRange,it=ht.attributes.position;let at=j.start*Ie,Nt=(j.start+j.count)*Ie;Yt!==null&&(at=Math.max(at,Yt.start*Ie),Nt=Math.min(Nt,(Yt.start+Yt.count)*Ie)),fe!==null?(at=Math.max(at,0),Nt=Math.min(Nt,fe.count)):it!=null&&(at=Math.max(at,0),Nt=Math.min(Nt,it.count));const R=Nt-at;if(R<0||R===1/0)return;de.setup(tt,ot,_e,ht,fe);let ct,rt=J;if(fe!==null&&(ct=St.get(fe),rt=Bt,rt.setIndex(ct)),tt.isMesh)ot.wireframe===!0?(oe.setLineWidth(ot.wireframeLinewidth*Ge()),rt.setMode(V.LINES)):rt.setMode(V.TRIANGLES);else if(tt.isLine){let Mt=ot.linewidth;Mt===void 0&&(Mt=1),oe.setLineWidth(Mt*Ge()),tt.isLineSegments?rt.setMode(V.LINES):tt.isLineLoop?rt.setMode(V.LINE_LOOP):rt.setMode(V.LINE_STRIP)}else tt.isPoints?rt.setMode(V.POINTS):tt.isSprite&&rt.setMode(V.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)uo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))rt.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Mt=tt._multiDrawStarts,te=tt._multiDrawCounts,X=tt._multiDrawCount,ee=fe?St.get(fe).bytesPerElement:1,Kt=ve.get(ot).currentProgram.getUniforms();for(let $t=0;$t<X;$t++)Kt.setValue(V,"_gl_DrawID",$t),rt.render(Mt[$t]/ee,te[$t])}else if(tt.isInstancedMesh)rt.renderInstances(at,R,tt.count);else if(ht.isInstancedBufferGeometry){const Mt=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,te=Math.min(ht.instanceCount,Mt);rt.renderInstances(at,R,te)}else rt.render(at,R)};function ke(D,K,ht){D.transparent===!0&&D.side===ze&&D.forceSinglePass===!1?(D.side=Bn,D.needsUpdate=!0,zn(D,K,ht),D.side=br,D.needsUpdate=!0,zn(D,K,ht),D.side=ze):zn(D,K,ht)}this.compile=function(D,K,ht=null){ht===null&&(ht=D),_=Je.get(ht),_.init(K),U.push(_),ht.traverseVisible(function(tt){tt.isLight&&tt.layers.test(K.layers)&&(_.pushLight(tt),tt.castShadow&&_.pushShadow(tt))}),D!==ht&&D.traverseVisible(function(tt){tt.isLight&&tt.layers.test(K.layers)&&(_.pushLight(tt),tt.castShadow&&_.pushShadow(tt))}),_.setupLights();const ot=new Set;return D.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Yt=tt.material;if(Yt)if(Array.isArray(Yt))for(let se=0;se<Yt.length;se++){const _e=Yt[se];ke(_e,ht,tt),ot.add(_e)}else ke(Yt,ht,tt),ot.add(Yt)}),_=U.pop(),ot},this.compileAsync=function(D,K,ht=null){const ot=this.compile(D,K,ht);return new Promise(tt=>{function Yt(){if(ot.forEach(function(se){ve.get(se).currentProgram.isReady()&&ot.delete(se)}),ot.size===0){tt(D);return}setTimeout(Yt,10)}Ve.get("KHR_parallel_shader_compile")!==null?Yt():setTimeout(Yt,10)})};let On=null;function Ln(D){On&&On(D)}function $a(){gi.stop()}function Pa(){gi.start()}const gi=new tx;gi.setAnimationLoop(Ln),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(D){On=D,ut.setAnimationLoop(D),D===null?gi.stop():gi.start()},ut.addEventListener("sessionstart",$a),ut.addEventListener("sessionend",Pa),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(K),K=ut.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,K,W),_=Je.get(D,U.length),_.init(K),U.push(_),ae.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Q.setFromProjectionMatrix(ae),Dt=this.localClippingEnabled,yt=Qt.init(this.clippingPlanes,Dt),M=Se.get(D,N.length),M.init(),N.push(M),ut.enabled===!0&&ut.isPresenting===!0){const Yt=A.xr.getDepthSensingMesh();Yt!==null&&Ua(Yt,K,-1/0,A.sortObjects)}Ua(D,K,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(Wt,I),Qe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Qe&&Oe.addToRenderList(M,D),this.info.render.frame++,yt===!0&&Qt.beginShadows();const ht=_.state.shadowsArray;be.render(ht,D,K),yt===!0&&Qt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,tt=M.transmissive;if(_.setupLights(),K.isArrayCamera){const Yt=K.cameras;if(tt.length>0)for(let se=0,_e=Yt.length;se<_e;se++){const fe=Yt[se];Ue(ot,tt,D,fe)}Qe&&Oe.render(D);for(let se=0,_e=Yt.length;se<_e;se++){const fe=Yt[se];ga(M,D,fe,fe.viewport)}}else tt.length>0&&Ue(ot,tt,D,K),Qe&&Oe.render(D),ga(M,D,K);W!==null&&G===0&&(z.updateMultisampleRenderTarget(W),z.updateRenderTargetMipmap(W)),D.isScene===!0&&D.onAfterRender(A,D,K),de.resetDefaultState(),T=-1,E=null,U.pop(),U.length>0?(_=U[U.length-1],yt===!0&&Qt.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?M=N[N.length-1]:M=null};function Ua(D,K,ht,ot){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ht=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Q.intersectsSprite(D)){ot&&he.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ae);const se=At.update(D),_e=D.material;_e.visible&&M.push(D,se,_e,ht,he.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Q.intersectsObject(D))){const se=At.update(D),_e=D.material;if(ot&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),he.copy(D.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),he.copy(se.boundingSphere.center)),he.applyMatrix4(D.matrixWorld).applyMatrix4(ae)),Array.isArray(_e)){const fe=se.groups;for(let Ie=0,j=fe.length;Ie<j;Ie++){const it=fe[Ie],at=_e[it.materialIndex];at&&at.visible&&M.push(D,se,at,ht,he.z,it)}}else _e.visible&&M.push(D,se,_e,ht,he.z,null)}}const Yt=D.children;for(let se=0,_e=Yt.length;se<_e;se++)Ua(Yt[se],K,ht,ot)}function ga(D,K,ht,ot){const tt=D.opaque,Yt=D.transmissive,se=D.transparent;_.setupLightsView(ht),yt===!0&&Qt.setGlobalState(A.clippingPlanes,ht),ot&&oe.viewport(k.copy(ot)),tt.length>0&&jn(tt,K,ht),Yt.length>0&&jn(Yt,K,ht),se.length>0&&jn(se,K,ht),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Ue(D,K,ht,ot){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ot.id]===void 0&&(_.state.transmissionRenderTarget[ot.id]=new vo(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?du:Is,minFilter:po,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gn.workingColorSpace}));const Yt=_.state.transmissionRenderTarget[ot.id],se=ot.viewport||k;Yt.setSize(se.z*A.transmissionResolutionScale,se.w*A.transmissionResolutionScale);const _e=A.getRenderTarget();A.setRenderTarget(Yt),A.getClearColor(Et),bt=A.getClearAlpha(),bt<1&&A.setClearColor(16777215,.5),A.clear(),Qe&&Oe.render(ht);const fe=A.toneMapping;A.toneMapping=Sr;const Ie=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),_.setupLightsView(ot),yt===!0&&Qt.setGlobalState(A.clippingPlanes,ot),jn(D,ht,ot),z.updateMultisampleRenderTarget(Yt),z.updateRenderTargetMipmap(Yt),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let j=!1;for(let it=0,at=K.length;it<at;it++){const Nt=K[it],R=Nt.object,ct=Nt.geometry,rt=Nt.material,Mt=Nt.group;if(rt.side===ze&&R.layers.test(ot.layers)){const te=rt.side;rt.side=Bn,rt.needsUpdate=!0,yn(R,ht,ot,ct,rt,Mt),rt.side=te,rt.needsUpdate=!0,j=!0}}j===!0&&(z.updateMultisampleRenderTarget(Yt),z.updateRenderTargetMipmap(Yt))}A.setRenderTarget(_e),A.setClearColor(Et,bt),Ie!==void 0&&(ot.viewport=Ie),A.toneMapping=fe}function jn(D,K,ht){const ot=K.isScene===!0?K.overrideMaterial:null;for(let tt=0,Yt=D.length;tt<Yt;tt++){const se=D[tt],_e=se.object,fe=se.geometry,Ie=ot===null?se.material:ot,j=se.group;_e.layers.test(ht.layers)&&yn(_e,K,ht,fe,Ie,j)}}function yn(D,K,ht,ot,tt,Yt){D.onBeforeRender(A,K,ht,ot,tt,Yt),D.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),tt.onBeforeRender(A,K,ht,ot,D,Yt),tt.transparent===!0&&tt.side===ze&&tt.forceSinglePass===!1?(tt.side=Bn,tt.needsUpdate=!0,A.renderBufferDirect(ht,K,ot,tt,D,Yt),tt.side=br,tt.needsUpdate=!0,A.renderBufferDirect(ht,K,ot,tt,D,Yt),tt.side=ze):A.renderBufferDirect(ht,K,ot,tt,D,Yt),D.onAfterRender(A,K,ht,ot,tt,Yt)}function zn(D,K,ht){K.isScene!==!0&&(K=Ye);const ot=ve.get(D),tt=_.state.lights,Yt=_.state.shadowsArray,se=tt.state.version,_e=Ae.getParameters(D,tt.state,Yt,K,ht),fe=Ae.getProgramCacheKey(_e);let Ie=ot.programs;ot.environment=D.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(D.isMeshStandardMaterial?lt:C).get(D.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,Ie===void 0&&(D.addEventListener("dispose",ye),Ie=new Map,ot.programs=Ie);let j=Ie.get(fe);if(j!==void 0){if(ot.currentProgram===j&&ot.lightsStateVersion===se)return Na(D,_e),j}else _e.uniforms=Ae.getUniforms(D),D.onBeforeCompile(_e,A),j=Ae.acquireProgram(_e,fe),Ie.set(fe,j),ot.uniforms=_e.uniforms;const it=ot.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(it.clippingPlanes=Qt.uniform),Na(D,_e),ot.needsLights=ts(D),ot.lightsStateVersion=se,ot.needsLights&&(it.ambientLightColor.value=tt.state.ambient,it.lightProbe.value=tt.state.probe,it.directionalLights.value=tt.state.directional,it.directionalLightShadows.value=tt.state.directionalShadow,it.spotLights.value=tt.state.spot,it.spotLightShadows.value=tt.state.spotShadow,it.rectAreaLights.value=tt.state.rectArea,it.ltc_1.value=tt.state.rectAreaLTC1,it.ltc_2.value=tt.state.rectAreaLTC2,it.pointLights.value=tt.state.point,it.pointLightShadows.value=tt.state.pointShadow,it.hemisphereLights.value=tt.state.hemi,it.directionalShadowMap.value=tt.state.directionalShadowMap,it.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,it.spotShadowMap.value=tt.state.spotShadowMap,it.spotLightMatrix.value=tt.state.spotLightMatrix,it.spotLightMap.value=tt.state.spotLightMap,it.pointShadowMap.value=tt.state.pointShadowMap,it.pointShadowMatrix.value=tt.state.pointShadowMatrix),ot.currentProgram=j,ot.uniformsList=null,j}function zi(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=uh.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function Na(D,K){const ht=ve.get(D);ht.outputColorSpace=K.outputColorSpace,ht.batching=K.batching,ht.batchingColor=K.batchingColor,ht.instancing=K.instancing,ht.instancingColor=K.instancingColor,ht.instancingMorph=K.instancingMorph,ht.skinning=K.skinning,ht.morphTargets=K.morphTargets,ht.morphNormals=K.morphNormals,ht.morphColors=K.morphColors,ht.morphTargetsCount=K.morphTargetsCount,ht.numClippingPlanes=K.numClippingPlanes,ht.numIntersection=K.numClipIntersection,ht.vertexAlphas=K.vertexAlphas,ht.vertexTangents=K.vertexTangents,ht.toneMapping=K.toneMapping}function Ii(D,K,ht,ot,tt){K.isScene!==!0&&(K=Ye),z.resetTextureUnits();const Yt=K.fog,se=ot.isMeshStandardMaterial?K.environment:null,_e=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Gl,fe=(ot.isMeshStandardMaterial?lt:C).get(ot.envMap||se),Ie=ot.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,j=!!ht.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),it=!!ht.morphAttributes.position,at=!!ht.morphAttributes.normal,Nt=!!ht.morphAttributes.color;let R=Sr;ot.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(R=A.toneMapping);const ct=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,rt=ct!==void 0?ct.length:0,Mt=ve.get(ot),te=_.state.lights;if(yt===!0&&(Dt===!0||D!==E)){const me=D===E&&ot.id===T;Qt.setState(ot,D,me)}let X=!1;ot.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==te.state.version||Mt.outputColorSpace!==_e||tt.isBatchedMesh&&Mt.batching===!1||!tt.isBatchedMesh&&Mt.batching===!0||tt.isBatchedMesh&&Mt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Mt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Mt.instancing===!1||!tt.isInstancedMesh&&Mt.instancing===!0||tt.isSkinnedMesh&&Mt.skinning===!1||!tt.isSkinnedMesh&&Mt.skinning===!0||tt.isInstancedMesh&&Mt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Mt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Mt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Mt.instancingMorph===!1&&tt.morphTexture!==null||Mt.envMap!==fe||ot.fog===!0&&Mt.fog!==Yt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Qt.numPlanes||Mt.numIntersection!==Qt.numIntersection)||Mt.vertexAlphas!==Ie||Mt.vertexTangents!==j||Mt.morphTargets!==it||Mt.morphNormals!==at||Mt.morphColors!==Nt||Mt.toneMapping!==R||Mt.morphTargetsCount!==rt)&&(X=!0):(X=!0,Mt.__version=ot.version);let ee=Mt.currentProgram;X===!0&&(ee=zn(ot,K,tt));let Kt=!1,$t=!1,Pt=!1;const Ct=ee.getUniforms(),Lt=Mt.uniforms;if(oe.useProgram(ee.program)&&(Kt=!0,$t=!0,Pt=!0),ot.id!==T&&(T=ot.id,$t=!0),Kt||E!==D){oe.buffers.depth.getReversed()?(Ut.copy(D.projectionMatrix),xM(Ut),yM(Ut),Ct.setValue(V,"projectionMatrix",Ut)):Ct.setValue(V,"projectionMatrix",D.projectionMatrix),Ct.setValue(V,"viewMatrix",D.matrixWorldInverse);const Zt=Ct.map.cameraPosition;Zt!==void 0&&Zt.setValue(V,ce.setFromMatrixPosition(D.matrixWorld)),Fe.logarithmicDepthBuffer&&Ct.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ct.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),E!==D&&(E=D,$t=!0,Pt=!0)}if(tt.isSkinnedMesh){Ct.setOptional(V,tt,"bindMatrix"),Ct.setOptional(V,tt,"bindMatrixInverse");const me=tt.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),Ct.setValue(V,"boneTexture",me.boneTexture,z))}tt.isBatchedMesh&&(Ct.setOptional(V,tt,"batchingTexture"),Ct.setValue(V,"batchingTexture",tt._matricesTexture,z),Ct.setOptional(V,tt,"batchingIdTexture"),Ct.setValue(V,"batchingIdTexture",tt._indirectTexture,z),Ct.setOptional(V,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ct.setValue(V,"batchingColorTexture",tt._colorsTexture,z));const re=ht.morphAttributes;if((re.position!==void 0||re.normal!==void 0||re.color!==void 0)&&Ce.update(tt,ht,ee),($t||Mt.receiveShadow!==tt.receiveShadow)&&(Mt.receiveShadow=tt.receiveShadow,Ct.setValue(V,"receiveShadow",tt.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Lt.envMap.value=fe,Lt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(Lt.envMapIntensity.value=K.environmentIntensity),$t&&(Ct.setValue(V,"toneMappingExposure",A.toneMappingExposure),Mt.needsLights&&Bs(Lt,Pt),Yt&&ot.fog===!0&&le.refreshFogUniforms(Lt,Yt),le.refreshMaterialUniforms(Lt,ot,et,_t,_.state.transmissionRenderTarget[D.id]),uh.upload(V,zi(Mt),Lt,z)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(uh.upload(V,zi(Mt),Lt,z),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ct.setValue(V,"center",tt.center),Ct.setValue(V,"modelViewMatrix",tt.modelViewMatrix),Ct.setValue(V,"normalMatrix",tt.normalMatrix),Ct.setValue(V,"modelMatrix",tt.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const me=ot.uniformsGroups;for(let Zt=0,Xt=me.length;Zt<Xt;Zt++){const It=me[Zt];F.update(It,ee),F.bind(It,ee)}}return ee}function Bs(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function ts(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(D,K,ht){ve.get(D.texture).__webglTexture=K,ve.get(D.depthTexture).__webglTexture=ht;const ot=ve.get(D);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=ht===void 0,ot.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,K){const ht=ve.get(D);ht.__webglFramebuffer=K,ht.__useDefaultFramebuffer=K===void 0};const va=V.createFramebuffer();this.setRenderTarget=function(D,K=0,ht=0){W=D,H=K,G=ht;let ot=!0,tt=null,Yt=!1,se=!1;if(D){const fe=ve.get(D);if(fe.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(V.FRAMEBUFFER,null),ot=!1;else if(fe.__webglFramebuffer===void 0)z.setupRenderTarget(D);else if(fe.__hasExternalTextures)z.rebindTextures(D,ve.get(D.texture).__webglTexture,ve.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const it=D.depthTexture;if(fe.__boundDepthTexture!==it){if(it!==null&&ve.has(it)&&(D.width!==it.image.width||D.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(D)}}const Ie=D.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(se=!0);const j=ve.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(j[K])?tt=j[K][ht]:tt=j[K],Yt=!0):D.samples>0&&z.useMultisampledRTT(D)===!1?tt=ve.get(D).__webglMultisampledFramebuffer:Array.isArray(j)?tt=j[ht]:tt=j,k.copy(D.viewport),gt.copy(D.scissor),dt=D.scissorTest}else k.copy(mt).multiplyScalar(et).floor(),gt.copy(Jt).multiplyScalar(et).floor(),dt=ie;if(ht!==0&&(tt=va),oe.bindFramebuffer(V.FRAMEBUFFER,tt)&&ot&&oe.drawBuffers(D,tt),oe.viewport(k),oe.scissor(gt),oe.setScissorTest(dt),Yt){const fe=ve.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe.__webglTexture,ht)}else if(se){const fe=ve.get(D.texture),Ie=K;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,fe.__webglTexture,ht,Ie)}else if(D!==null&&ht!==0){const fe=ve.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,fe.__webglTexture,ht)}T=-1},this.readRenderTargetPixels=function(D,K,ht,ot,tt,Yt,se){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=ve.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&se!==void 0&&(_e=_e[se]),_e){oe.bindFramebuffer(V.FRAMEBUFFER,_e);try{const fe=D.texture,Ie=fe.format,j=fe.type;if(!Fe.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-ot&&ht>=0&&ht<=D.height-tt&&V.readPixels(K,ht,ot,tt,Vt.convert(Ie),Vt.convert(j),Yt)}finally{const fe=W!==null?ve.get(W).__webglFramebuffer:null;oe.bindFramebuffer(V.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(D,K,ht,ot,tt,Yt,se){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ve.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&se!==void 0&&(_e=_e[se]),_e){const fe=D.texture,Ie=fe.format,j=fe.type;if(!Fe.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=D.width-ot&&ht>=0&&ht<=D.height-tt){oe.bindFramebuffer(V.FRAMEBUFFER,_e);const it=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,it),V.bufferData(V.PIXEL_PACK_BUFFER,Yt.byteLength,V.STREAM_READ),V.readPixels(K,ht,ot,tt,Vt.convert(Ie),Vt.convert(j),0);const at=W!==null?ve.get(W).__webglFramebuffer:null;oe.bindFramebuffer(V.FRAMEBUFFER,at);const Nt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await _M(V,Nt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,it),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Yt),V.deleteBuffer(it),V.deleteSync(Nt),Yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,K=null,ht=0){D.isTexture!==!0&&(uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,D=arguments[1]);const ot=Math.pow(2,-ht),tt=Math.floor(D.image.width*ot),Yt=Math.floor(D.image.height*ot),se=K!==null?K.x:0,_e=K!==null?K.y:0;z.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,ht,0,0,se,_e,tt,Yt),oe.unbindTexture()};const es=V.createFramebuffer(),Yi=V.createFramebuffer();this.copyTextureToTexture=function(D,K,ht=null,ot=null,tt=0,Yt=null){D.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,D=arguments[1],K=arguments[2],Yt=arguments[3]||0,ht=null),Yt===null&&(tt!==0?(uo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Yt=tt,tt=0):Yt=0);let se,_e,fe,Ie,j,it,at,Nt,R;const ct=D.isCompressedTexture?D.mipmaps[Yt]:D.image;if(ht!==null)se=ht.max.x-ht.min.x,_e=ht.max.y-ht.min.y,fe=ht.isBox3?ht.max.z-ht.min.z:1,Ie=ht.min.x,j=ht.min.y,it=ht.isBox3?ht.min.z:0;else{const re=Math.pow(2,-tt);se=Math.floor(ct.width*re),_e=Math.floor(ct.height*re),D.isDataArrayTexture?fe=ct.depth:D.isData3DTexture?fe=Math.floor(ct.depth*re):fe=1,Ie=0,j=0,it=0}ot!==null?(at=ot.x,Nt=ot.y,R=ot.z):(at=0,Nt=0,R=0);const rt=Vt.convert(K.format),Mt=Vt.convert(K.type);let te;K.isData3DTexture?(z.setTexture3D(K,0),te=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(z.setTexture2DArray(K,0),te=V.TEXTURE_2D_ARRAY):(z.setTexture2D(K,0),te=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const X=V.getParameter(V.UNPACK_ROW_LENGTH),ee=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Kt=V.getParameter(V.UNPACK_SKIP_PIXELS),$t=V.getParameter(V.UNPACK_SKIP_ROWS),Pt=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,ct.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ct.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ie),V.pixelStorei(V.UNPACK_SKIP_ROWS,j),V.pixelStorei(V.UNPACK_SKIP_IMAGES,it);const Ct=D.isDataArrayTexture||D.isData3DTexture,Lt=K.isDataArrayTexture||K.isData3DTexture;if(D.isDepthTexture){const re=ve.get(D),me=ve.get(K),Zt=ve.get(re.__renderTarget),Xt=ve.get(me.__renderTarget);oe.bindFramebuffer(V.READ_FRAMEBUFFER,Zt.__webglFramebuffer),oe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let It=0;It<fe;It++)Ct&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ve.get(D).__webglTexture,tt,it+It),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ve.get(K).__webglTexture,Yt,R+It)),V.blitFramebuffer(Ie,j,se,_e,at,Nt,se,_e,V.DEPTH_BUFFER_BIT,V.NEAREST);oe.bindFramebuffer(V.READ_FRAMEBUFFER,null),oe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(tt!==0||D.isRenderTargetTexture||ve.has(D)){const re=ve.get(D),me=ve.get(K);oe.bindFramebuffer(V.READ_FRAMEBUFFER,es),oe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Yi);for(let Zt=0;Zt<fe;Zt++)Ct?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,re.__webglTexture,tt,it+Zt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,re.__webglTexture,tt),Lt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,me.__webglTexture,Yt,R+Zt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,me.__webglTexture,Yt),tt!==0?V.blitFramebuffer(Ie,j,se,_e,at,Nt,se,_e,V.COLOR_BUFFER_BIT,V.NEAREST):Lt?V.copyTexSubImage3D(te,Yt,at,Nt,R+Zt,Ie,j,se,_e):V.copyTexSubImage2D(te,Yt,at,Nt,Ie,j,se,_e);oe.bindFramebuffer(V.READ_FRAMEBUFFER,null),oe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Lt?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(te,Yt,at,Nt,R,se,_e,fe,rt,Mt,ct.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(te,Yt,at,Nt,R,se,_e,fe,rt,ct.data):V.texSubImage3D(te,Yt,at,Nt,R,se,_e,fe,rt,Mt,ct):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Yt,at,Nt,se,_e,rt,Mt,ct.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Yt,at,Nt,ct.width,ct.height,rt,ct.data):V.texSubImage2D(V.TEXTURE_2D,Yt,at,Nt,se,_e,rt,Mt,ct);V.pixelStorei(V.UNPACK_ROW_LENGTH,X),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ee),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Kt),V.pixelStorei(V.UNPACK_SKIP_ROWS,$t),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Pt),Yt===0&&K.generateMipmaps&&V.generateMipmap(te),oe.unbindTexture()},this.copyTextureToTexture3D=function(D,K,ht=null,ot=null,tt=0){return D.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ht=arguments[0]||null,ot=arguments[1]||null,D=arguments[2],K=arguments[3],tt=arguments[4]||0),uo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,K,ht,ot,tt)},this.initRenderTarget=function(D){ve.get(D).__webglFramebuffer===void 0&&z.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?z.setTextureCube(D,0):D.isData3DTexture?z.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?z.setTexture2DArray(D,0):z.setTexture2D(D,0),oe.unbindTexture()},this.resetState=function(){H=0,G=0,W=null,oe.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ls}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=gn._getDrawingBufferColorSpace(t),n.unpackColorSpace=gn._getUnpackColorSpace()}}const m_={type:"change"},mp={type:"start"},sx={type:"end"},ih=new gu,p_=new _r,Tw=Math.cos(70*gM.DEG2RAD),oi=new L,qi=2*Math.PI,An={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$0=1e-6;class eu extends V2{constructor(t,n=null){super(t,n),this.state=An.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ul.ROTATE,MIDDLE:Ul.DOLLY,RIGHT:Ul.PAN},this.touches={ONE:Cl.ROTATE,TWO:Cl.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new _o,this._lastTargetPosition=new L,this._quat=new _o().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new V1,this._sphericalDelta=new V1,this._scale=1,this._panOffset=new L,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new L,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Cw.bind(this),this._onPointerDown=Aw.bind(this),this._onPointerUp=Rw.bind(this),this._onContextMenu=zw.bind(this),this._onMouseWheel=Uw.bind(this),this._onKeyDown=Nw.bind(this),this._onTouchStart=Lw.bind(this),this._onTouchMove=Ow.bind(this),this._onMouseDown=Dw.bind(this),this._onMouseMove=Pw.bind(this),this._interceptControlDown=Iw.bind(this),this._interceptControlUp=Bw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(m_),this.update(),this.state=An.NONE}update(t=null){const n=this.object.position;oi.copy(n).sub(this.target),oi.applyQuaternion(this._quat),this._spherical.setFromVector3(oi),this.autoRotate&&this.state===An.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=qi:a>Math.PI&&(a-=qi),o<-Math.PI?o+=qi:o>Math.PI&&(o-=qi),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(oi.setFromSpherical(this._spherical),oi.applyQuaternion(this._quatInverse),n.copy(this.target).add(oi),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=oi.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new L(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new L(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=oi.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(ih.origin.copy(this.object.position),ih.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ih.direction))<Tw?this.object.lookAt(this.target):(p_.setFromNormalAndCoplanarPoint(this.object.up,this.target),ih.intersectPlane(p_,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>$0||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$0||this._lastTargetPosition.distanceToSquared(this.target)>$0?(this.dispatchEvent(m_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qi/60*this.autoRotateSpeed*t:qi/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){oi.setFromMatrixColumn(n,0),oi.multiplyScalar(-t),this._panOffset.add(oi)}_panUp(t,n){this.screenSpacePanning===!0?oi.setFromMatrixColumn(n,1):(oi.setFromMatrixColumn(n,0),oi.crossVectors(this.object.up,oi)),oi.multiplyScalar(t),this._panOffset.add(oi)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;oi.copy(o).sub(this.target);let c=oi.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,f=a.width,h=a.height;this._mouse.x=o/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(qi*this._rotateDelta.x/n.clientHeight),this._rotateUp(qi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(qi*this._rotateDelta.x/n.clientHeight),this._rotateUp(qi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new ne,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function Aw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Cw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Rw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sx),this.state=An.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Dw(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ul.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=An.DOLLY;break;case Ul.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=An.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=An.ROTATE}break;case Ul.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=An.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=An.PAN}break;default:this.state=An.NONE}this.state!==An.NONE&&this.dispatchEvent(mp)}function Pw(r){switch(this.state){case An.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case An.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case An.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Uw(r){this.enabled===!1||this.enableZoom===!1||this.state!==An.NONE||(r.preventDefault(),this.dispatchEvent(mp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(sx))}function Nw(r){this.enabled!==!1&&this._handleKeyDown(r)}function Lw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Cl.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=An.TOUCH_ROTATE;break;case Cl.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=An.TOUCH_PAN;break;default:this.state=An.NONE}break;case 2:switch(this.touches.TWO){case Cl.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=An.TOUCH_DOLLY_PAN;break;case Cl.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=An.TOUCH_DOLLY_ROTATE;break;default:this.state=An.NONE}break;default:this.state=An.NONE}this.state!==An.NONE&&this.dispatchEvent(mp)}function Ow(r){switch(this._trackPointer(r),this.state){case An.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case An.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case An.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case An.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=An.NONE}}function zw(r){this.enabled!==!1&&r.preventDefault()}function Iw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rx=(...r)=>r.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=we.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:o="",children:c,iconNode:f,...h},m)=>we.createElement("svg",{ref:m,...Hw,width:t,height:t,stroke:r,strokeWidth:a?Number(n)*24/Number(t):n,className:rx("lucide",o),...h},[...f.map(([p,g])=>we.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=(r,t)=>{const n=we.forwardRef(({className:a,...o},c)=>we.createElement(Gw,{ref:c,iconNode:t,className:rx(`lucide-${Fw(r)}`,a),...o}));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],kw=Da("Atom",Vw);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Ww=Da("Calendar",Xw);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]],g_=Da("CircleDashed",jw);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],v_=Da("Clock",qw);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Zw=Da("Github",Yw);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],tm=Da("Globe",Kw);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Jw=Da("Moon",Qw);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],tT=Da("Orbit",$w);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],em=Da("Rocket",eT);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],iT=Da("Star",nT);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],sT=Da("X",aT),rT=new Date("2000-01-01T12:00:00Z"),gr=Math.PI/180,nm=20,oT=36525,vr={Mercury:[.38709927,.20563593,7.00497902,252.2503235,77.45779628,48.33076593,.240846,37e-8,1906e-8,-.00594749,149472.67411175,.16047689,-.12534081],Venus:[.72333566,.00677672,3.39467605,181.9790995,131.60246718,76.67984255,.615198,39e-7,-4107e-8,-7889e-7,58517.81538729,.00268329,-.27769418],Earth:[1.00000261,.01671123,-1531e-8,100.46457166,102.93768193,0,1,562e-8,-4392e-8,-.01294668,35999.37244981,.32327364,0],Mars:[1.52371034,.0933941,1.85061,355.45332631,336.04084219,49.57854927,1.880848,1847e-8,7882e-8,-.00813131,19140.30268499,.44441088,-.29257343],Jupiter:[5.202887,.04838624,1.30439695,34.39644051,14.72847983,100.47390909,11.86,-11607e-8,-13253e-8,-.00183714,3034.74612775,.21252668,.20469106],Saturn:[9.53667594,.05386179,2.48599187,49.95424423,92.59887831,113.66242448,29.457,-.0012506,-50991e-8,.00193609,1222.49362201,-.41897216,-.28867794],Uranus:[19.18916464,.04725744,.77263783,313.23810451,170.9542763,74.01692503,84.01,-.00196176,-4397e-8,-.00242939,428.48202785,.40805281,.04240589],Neptune:[30.06992276,.00859048,1.77004347,304.88003451,44.96476227,131.78422574,164.79,26291e-8,5105e-8,35372e-8,218.45945325,-.32241464,-.00508664],Pluto:[39.48211675,.2488273,17.14001206,238.92903833,224.06891629,110.30393684,248.09,-31596e-8,517e-7,4818e-8,145.20780515,-.04062942,-.01183482],Ceres:[2.7691651,.0760567,10.5934,72.5898,80.3293,73.9519,4.6,0,0,0,0,0,0],Haumea:[43.1340851,.19126,28.19,203.8,236.87,122.1,284.12,0,0,0,0,0,0],Makemake:[45.7911589,.16254,28.96,297,79.4,144.5,309.88,0,0,0,0,0,0],Eris:[67.781,.44068,44.19,204.16,151.64,35.95,557,0,0,0,0,0,0]},__={Mercury:58.65,Venus:-243.02,Earth:1,Mars:1.03,Jupiter:.41,Saturn:.44,Uranus:-.72,Neptune:.67,Pluto:-6.39,Ceres:.38,Haumea:.16,Makemake:.95,Eris:1.08},lT=r=>Math.sign(r)*(.006/Math.abs(r)),cT=()=>(we.useEffect(()=>{const r=document.createElement("script");r.async=!0,r.src="https://www.googletagmanager.com/gtag/js?id=G-QPSWXB04YW",document.head.appendChild(r),window.dataLayer=window.dataLayer||[];function t(){window.dataLayer.push(arguments)}t("js",new Date),t("config","G-QPSWXB04YW")},[]),null),uT=()=>{const r=we.useRef(null),t=we.useRef(null),n=we.useRef(null),[a,o]=we.useState(!0),[c,f]=we.useState(!0),[h,m]=we.useState(!0),[p,g]=we.useState(!0),[v,x]=we.useState(!1),[y,b]=we.useState(!0),[w,M]=we.useState(!0),[_,N]=we.useState(null),[U,A]=we.useState(null),[O,H]=we.useState(!1),[G,W]=we.useState(1),[T,E]=we.useState(!0),[k,gt]=we.useState(!0),[dt,Et]=we.useState(!1),[bt,Y]=we.useState(null),[_t,et]=we.useState(new Date().toISOString().split("T")[0]),[Wt,I]=we.useState(!1),[mt,Jt]=we.useState(!0),ie=we.useRef(null),Q=we.useRef({x:0,y:0}),yt=we.useRef(null),Dt=we.useRef(null),Ut=we.useRef(null),ae=we.useRef(null),ce=we.useRef({}),he=we.useRef([]),Ye=we.useRef({}),Qe=we.useRef(null),Ge=we.useRef(new G2),V=we.useRef(1),Hn=we.useRef(null),Ve=we.useRef([]),Fe=we.useRef(null),oe=we.useRef({}),sn=we.useRef(null),ve=we.useRef({showPlanets:!0,showOrbits:!0,showMoons:!0});we.useEffect(()=>{ve.current={showPlanets:a,showOrbits:y,showMoons:w,showSpacecraft:k,showStars:mt,showAsteroids:h,showConstellations:c}},[a,y,w,k,mt,h,c]),we.useEffect(()=>{bt&&ce.current&&Je(bt)},[bt]),we.useEffect(()=>{V.current=G},[G]),we.useEffect(()=>{if(ce.current)if(Object.values(ce.current).forEach(J=>{J.label&&(J.label.visible=!1)}),oe.current&&Object.values(oe.current).forEach(J=>{J.label&&(J.label.visible=!1),J.highlightSphere&&(J.highlightSphere.visible=!1)}),_&&ce.current[_]&&ce.current[_].label&&(ce.current[_].label.visible=!0),_&&oe.current&&oe.current[_]){if(oe.current[_].label&&(oe.current[_].label.visible=!0),oe.current[_].highlightSphere){oe.current[_].highlightSphere.visible=!0;const J=()=>{const Bt=performance.now()*.001,Vt=1+Math.sin(Bt*2)*.2;oe.current&&oe.current[_]&&oe.current[_].highlightSphere&&oe.current[_].highlightSphere.scale.set(Vt,Vt,Vt),sn.current=requestAnimationFrame(J)};sn.current&&cancelAnimationFrame(sn.current),sn.current=requestAnimationFrame(J)}}else sn.current&&(cancelAnimationFrame(sn.current),sn.current=null)},[_]),we.useEffect(()=>{const J=()=>{H(window.innerWidth<=768)};return J(),window.addEventListener("resize",J),()=>{window.removeEventListener("resize",J)}},[]);const z=we.useCallback(J=>{const Bt=J.touches?J.touches[0].clientX:J.clientX,Vt=J.touches?J.touches[0].clientY:J.clientY;if(ie.current){const de=document.getElementById("planet-tooltip");de&&(de.style.left=`${Bt+15}px`,de.style.top=`${Vt-15}px`)}Hn.current&&clearTimeout(Hn.current),Hn.current=setTimeout(()=>{var xt;const de=(xt=ae.current)==null?void 0:xt.domElement;if(!de)return;const F=de.getBoundingClientRect(),Ht=(Bt-F.left)/de.clientWidth*2-1,ut=-((Vt-F.top)/de.clientHeight)*2+1;if(Q.current={x:Bt,y:Vt},Ut.current&&Ge.current&&Dt.current){Ge.current.setFromCamera({x:Ht,y:ut},Ut.current);const kt=[];ce.current&&Object.entries(ce.current).forEach(([He,Ze])=>{Ze.mesh&&(kt.push(Ze.mesh),Ze.mesh.userData.planetName=He)});const jt=Ge.current.intersectObjects(kt),ye=jt.length>0?jt[0].object.userData.planetName:null;ie.current!==ye&&(ie.current=ye,A(ye))}},60)},[]),C=we.useCallback(J=>{const Bt=ie.current;Bt&&(N(Bt),At(Bt))},[]),lt=we.useRef(null),St=we.useRef(null);we.useEffect(()=>{lt.current&&cancelAnimationFrame(lt.current),St.current&&cancelAnimationFrame(St.current);const J=new WM;Dt.current=J;const Bt=O?24:64,Vt=95,de=new aa(Vt,window.innerWidth/window.innerHeight,.1,1e7);de.position.set(0,30,100),Ut.current=de;const F=new ww({antialias:!0,powerPreference:"high-performance",alpha:!0});F.sortObjects=!0,F.physicallyCorrectLights=!0,F.setSize(window.innerWidth,window.innerHeight),F.setPixelRatio(O?Math.min(window.devicePixelRatio,1.5):Math.min(window.devicePixelRatio,2)),F.setClearColor(0),F.outputEncoding=void 0,F.toneMapping=S_,F.toneMappingExposure=.8,r.current.firstChild&&r.current.removeChild(r.current.firstChild),r.current.appendChild(F.domElement),ae.current=F;const Ht=F.domElement;Ht.addEventListener("pointermove",z,{passive:!0}),Ht.addEventListener("pointerup",C,{passive:!0});const ut=new B2(4473924);J.add(ut);const xt=new yi(16777215,2.5,0,1);xt.position.set(0,0,0),J.add(xt);const kt=new L2(7368816,5263440,.7);J.add(kt);const jt=new eu(de,F.domElement);jt.enableDamping=!0,jt.dampingFactor=.05,jt.rotateSpeed=O?.5:1,jt.zoomSpeed=O?.7:1,jt.minDistance=15,jt.maxDistance=1/0,yt.current=jt;const ye=new _n(10,128,128),He=new dn({uniforms:{time:{value:0},baseColor:{value:new qt(16768324)},hotspotColor:{value:new qt(16777215)},midColor:{value:new qt(16746514)},deepColor:{value:new qt(14500864)}},vertexShader:`
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    void main() {
      vUv = uv;
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform float time;
    uniform vec3 baseColor;
    uniform vec3 hotspotColor;
    uniform vec3 midColor;
    uniform vec3 deepColor;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    float hash(vec3 p) {
      p = fract(p * vec3(443.8975, 397.2973, 491.1871));
      p += dot(p.zxy, p.yxz + 19.27);
      return fract(p.x * p.y * p.z);
    }
    
    float noise(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float a = hash(i);
      float b = hash(i + vec3(1.0, 0.0, 0.0));
      float c = hash(i + vec3(0.0, 1.0, 0.0));
      float d = hash(i + vec3(1.0, 1.0, 0.0));
      float e = hash(i + vec3(0.0, 0.0, 1.0));
      float f2 = hash(i + vec3(1.0, 0.0, 1.0));
      float g = hash(i + vec3(0.0, 1.0, 1.0));
      float h = hash(i + vec3(1.0, 1.0, 1.0));
      
      return mix(
        mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
        mix(mix(e, f2, f.x), mix(g, h, f.x), f.y),
        f.z
      );
    }
    
    float fbm(vec3 p) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      
      for (int i = 0; i < 6; i++) {
        value += amplitude * noise(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
      }
      
      return value;
    }
    
    float voronoi(vec3 p) {
      vec3 baseCell = floor(p);
      float minDistSq = 1.0;
      
      for (int x = -1; x <= 1; x++) {
        for (int y = -1; y <= 1; y++) {
          for (int z = -1; z <= 1; z++) {
            vec3 cell = baseCell + vec3(float(x), float(y), float(z));
            vec3 cellPosition = cell + hash(cell);
            vec3 toCell = cellPosition - p;
            float distSq = dot(toCell, toCell);
            minDistSq = min(minDistSq, distSq);
          }
        }
      }
      
      return sqrt(minDistSq);
    }
    
    float solarFlare(vec3 p, float time) {
      float angle = atan(p.z, p.x);
      float latitude = asin(p.y / length(p));
      
      float flare1 = smoothstep(0.05, 0.0, abs(angle - time * 0.2));
      float flare2 = smoothstep(0.08, 0.0, abs(angle - time * 0.1 + 2.0));
      float flare3 = smoothstep(0.07, 0.0, abs(angle - time * 0.3 - 1.0));
      
      float latitudeEffect = 1.0 - smoothstep(0.0, 0.35, abs(latitude));
      
      return (flare1 + flare2 * 0.7 + flare3 * 0.5) * latitudeEffect * 0.8;
    }
    
    vec3 computeSunColor(vec3 p, float time) {
      vec3 np = normalize(p);
      float slowTime = time * 0.05;
      float fastTime = time * 0.2;
      
      float largeNoise = fbm(np * 3.0 + vec3(0.0, slowTime, 0.0));
      float mediumNoise = fbm(np * 8.0 + vec3(slowTime * 0.5, 0.0, slowTime));
      float smallNoise = fbm(np * 20.0 + vec3(fastTime, fastTime, 0.0));
      
      float cells = voronoi(np * 15.0 + vec3(slowTime * 0.2));
      cells = smoothstep(0.0, 0.8, cells);
      
      float combinedNoise = largeNoise * 0.6 + mediumNoise * 0.3 + smallNoise * 0.1;
      
      float flare = solarFlare(np, time);
      
      float sunspot1 = smoothstep(0.05, 0.2, length(np - vec3(0.4, 0.3, 0.5)));
      float sunspot2 = smoothstep(0.03, 0.15, length(np - vec3(-0.3, 0.1, 0.6)));
      float sunspot3 = smoothstep(0.06, 0.2, length(np - vec3(0.2, -0.4, -0.3)));
      float sunspots = min(min(sunspot1, sunspot2), sunspot3);
      
      float plasma = fbm(np * 5.0 + vec3(0.0, 0.0, time * 0.1));
      plasma = smoothstep(0.4, 0.6, plasma);
      
      float hotspots = smoothstep(0.6, 0.9, combinedNoise) * 0.8 + flare;
      float midtones = smoothstep(0.3, 0.6, combinedNoise) - hotspots;
      float deeptones = (1.0 - smoothstep(0.3, 0.5, combinedNoise)) * 0.7 * sunspots;
      
      vec3 color = baseColor;
      color = mix(color, hotspotColor, hotspots * (0.8 + 0.2 * sin(time * 2.0)));
      color = mix(color, midColor, midtones * (0.8 + 0.2 * cos(time)));
      color = mix(color, deepColor, deeptones);
      
      float pulse = 0.97 + 0.03 * sin(time);
      color *= pulse;
      
      float edge = 1.0 - abs(dot(np, vNormal));
      color += vec3(1.0, 0.7, 0.3) * pow(edge, 5.0) * 0.3;
      
      return color;
    }
    
    void main() {
      vec3 finalColor = computeSunColor(vPosition, time);
      
      float limb = max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0)));
      finalColor *= (0.8 + limb * 0.3);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `}),Ze=new $(ye,He);J.add(Ze);const ke=new _n(16,64,64),On=new dn({uniforms:{time:{value:0}},vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        varying vec3 vNormal;
        
        vec3 glowColorInner = vec3(1.0, 0.8, 0.3);
        vec3 glowColorOuter = vec3(1.0, 0.4, 0.0);
        
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          float pulse = sin(time * 1.5) * 0.1 + 0.9;
          vec3 glow = mix(glowColorInner, glowColorOuter, intensity) * pulse;
          gl_FragColor = vec4(glow, intensity * 0.7);
        }
      `,transparent:!0,blending:Ai,side:Bn}),Ln=new $(ke,On);J.add(Ln);const $a=()=>{const j={daymap:"https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",normalmap:"https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg",specularmap:"https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg",cloudmap:"https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_2048.jpg",nightmap:"https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_lights_2048.jpg",moonmap:"https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg"},it=new N2,at={};for(const[Nt,R]of Object.entries(j)){const ct=it.load(R);ct.wrapS=ou,ct.wrapT=ou,at[Nt]=ct}return at},Pa=()=>{if(!Ut.current||!Dt.current||!Dt.current.userData.galaxySystem)return;const j=Ut.current.position.length();j>5e4?F.setPixelRatio(Math.min(window.devicePixelRatio,1)):F.setPixelRatio(O?Math.min(window.devicePixelRatio,1.5):Math.min(window.devicePixelRatio,2));const it=Dt.current.userData.galaxySystem,at=1e3,R=j>at&&j<1e5;it.visible=R&&ve.current.showStars,R&&it.children.forEach(ct=>{const rt=Ut.current.position.distanceTo(ct.position);ct.visible=j>at&&rt>ct.userData.size*2;const Mt=Math.min(1,Math.max(.2,1e4/rt));ct.type==="points"?ct.material.opacity=Mt:ct.children&&ct.children.forEach(te=>{te.material&&te.material.opacity!==void 0&&(te.material.opacity=Mt)}),ct.userData.label&&(ct.userData.label.visible=rt<1e5&&j>5e3)})},gi=[{name:"Mercury",radius:0.383,distance:38.7,color:16742144,emissive:0x554400,roughness:0.8,metalness:.5,speed:.01245,tilt:6e-4,eccentricity:.206,orbitColor:16733440,description:"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its heavily cratered surface resembles our Moon. With extreme temperature variations, the dayside can reach 430°C while the nightside plunges to -180°C.",moons:[]},{name:"Venus",radius:0.949,distance:72.3,color:16115611,emissive:3813146,roughness:.5,metalness:.1,speed:.00488,tilt:3.1,eccentricity:.007,orbitColor:16763904,description:"Venus is the hottest planet in our Solar System, with a thick, toxic atmosphere that traps heat. It has extreme greenhouse effect.",atmosphere:!0,atmosphereColor:16114623,customShader:!0,moons:[]},{name:"Earth",radius:1,distance:100,color:2859992,emissive:1718874,roughness:.4,metalness:.1,speed:.003,tilt:.41,eccentricity:.017,atmosphere:!0,atmosphereColor:9230847,textured:!0,customShader:!0,orbitColor:3381759,description:"Earth is our home planet, the only known place in the universe with life. It has liquid water, an atmosphere, and a protective magnetic field.",moons:[{name:"Moon",radius:.273,distance:2.57,color:16119285,emissive:3289650,roughness:.8,metalness:.1,speed:.04,inclination:5.145*gr,textured:!0,thinOrbit:!0}]},{name:"Mars",radius:0.532,distance:152.4,color:16153660,emissive:5384986,roughness:.7,metalness:0,speed:.00159,tilt:.44,eccentricity:.093,atmosphere:!0,atmosphereColor:16168328,orbitColor:14500864,customShader:!0,description:"Mars is known as the Red Planet due to iron oxide (rust) on its surface. It has polar ice caps and was once more Earth-like with flowing water.",moons:[{name:"Phobos",radius:.011,distance:0.0009,color:13682601,emissive:3355432,roughness:.9,metalness:.1,speed:.45,thinOrbit:!0},{name:"Deimos",radius:.006,distance:0.0023,color:13946307,emissive:3355432,roughness:.9,metalness:.1,speed:.1,thinOrbit:!0}]},{name:"Jupiter",radius:10.97,distance:520,color:16038013,emissive:5059609,roughness:.5,metalness:.1,speed:253e-6,tilt:.055,eccentricity:.049,bands:!0,jupiterRealistic:!0,orbitColor:16755268,description:"Jupiter is the largest planet in our Solar System. It's a gas giant with a distinctive Great Red Spot, which is a giant, persistent storm.",moons:[{name:"Io",radius:0.286,distance:4.22,color:15851354,emissive:5063964,roughness:.6,metalness:.2,speed:.06,thinOrbit:!0},{name:"Europa",radius:.245,distance:6.71,color:16119290,emissive:3487042,roughness:.4,metalness:.3,speed:.03,thinOrbit:!0},{name:"Ganymede",radius:0.413,distance:10.7,color:15987699,emissive:3289650,roughness:.7,metalness:.2,speed:.015,thinOrbit:!0},{name:"Callisto",radius:0.378,distance:18.8,color:10789019,emissive:3289650,roughness:.8,metalness:.1,speed:.007,thinOrbit:!0}]},{name:"Saturn",radius:9.14,distance:950,color:16375702,emissive:5063199,roughness:.5,metalness:.2,speed:102e-6,tilt:.47,eccentricity:.054,bands:!0,saturnRealistic:!0,enhancedRings:!0,orbitColor:15124623,description:"Saturn is famous for its stunning ring system. It's a gas giant composed mainly of hydrogen and helium.",rings:!0,moons:[{name:"Titan",radius:0.404,distance:12.222,color:16767848,emissive:4405789,roughness:.6,metalness:.2,speed:.005,thinOrbit:!0},{name:"Enceladus",radius:.063,distance:3.95,color:16777215,emissive:3289657,roughness:.3,metalness:.4,speed:.01,thinOrbit:!0}]},{name:"Uranus",radius:3.98,distance:1920,color:4973294,emissive:1658190,roughness:.5,metalness:.3,speed:357e-7,tilt:1.71,eccentricity:.047,atmosphere:!0,atmosphereColor:10091262,customShader:!0,rings:!0,orbitColor:52445,description:"Uranus is an ice giant with a unique feature - it rotates on its side, likely due to a massive collision in its early history.",moons:[{name:"Titania",radius:.123,distance:4.36,color:13948116,emissive:3289650,roughness:.7,metalness:.1,speed:.008,thinOrbit:!0},{name:"Oberon",radius:.119,distance:5.83,color:9605778,emissive:3289650,roughness:.8,metalness:.1,speed:.006,thinOrbit:!0}]},{name:"Neptune",radius:3.86,distance:3010,color:2842110,emissive:1517149,roughness:.5,metalness:.3,speed:182e-7,tilt:.49,eccentricity:.009,atmosphere:!0,atmosphereColor:7316474,customShader:!0,orbitColor:3359999,description:"Neptune is the farthest planet from the Sun. It's an ice giant with the strongest winds in the Solar System, reaching speeds of 2,100 km/h.",moons:[{name:"Triton",radius:0.212,distance:3.54,color:16777215,emissive:3289659,roughness:.6,metalness:.2,speed:.009,thinOrbit:!0}]},{name:"Pluto",radius:0.187,distance:3940,color:13082761,emissive:3681574,roughness:.85,metalness:.1,speed:2e-5,tilt:.41,eccentricity:.009,customShader:!0,orbitColor:10053290,isDwarf:!0,description:"Pluto, once considered the ninth planet, is now classified as a dwarf planet. Its reddish surface features methane ice and the distinctive heart-shaped Tombaugh Regio. With a highly eccentric and inclined orbit, Pluto takes 248 Earth years to orbit the Sun.",moons:[{name:"Charon",radius:.095,distance:0.19,color:10724259,emissive:3355443,roughness:.9,metalness:.1,speed:.01,textured:!1,thinOrbit:!0}]},{name:"Ceres",radius:.074,distance:276.9,color:10132122,emissive:4539717,roughness:.85,metalness:.1,speed:45e-5,tilt:.18,eccentricity:.0760567,orbitColor:16416882,description:"Ceres is the largest object in the asteroid belt and the only dwarf planet in the inner solar system. It is a rock-ice body approximately 940 kilometers in diameter with a surface covered in clay and carbonates.",isDwarf:!0,customShader:!0,moons:[]},{name:"Haumea",radius:.115,distance:4313.4,color:15790320,emissive:3355443,roughness:.6,metalness:.3,speed:19e-6,tilt:.49,eccentricity:.19126,orbitColor:16416882,description:"Haumea is a dwarf planet in the Kuiper belt known for its unusual elongated shape. It rotates rapidly, completing a full rotation in about 4 hours. Its bright surface is covered with crystalline water ice.",isDwarf:!0,customShader:!0,moons:[{name:"Hi'iaka",radius:.016,distance:49.8,color:16777215,emissive:3355443,roughness:.8,metalness:.1,speed:.01,thinOrbit:!0},{name:"Namaka",radius:.01,distance:25.7,color:15658734,emissive:3355443,roughness:.9,metalness:.1,speed:.007,thinOrbit:!0}]},{name:"Makemake",radius:.11,distance:4579.1,color:12746324,emissive:3416600,roughness:.8,metalness:.1,speed:18e-6,tilt:.51,eccentricity:.16254,orbitColor:16416882,description:"Makemake is a dwarf planet in the Kuiper belt. It has a reddish-brown color, likely due to the presence of methane and ethane ices on its surface. It has very little atmosphere and is similar in size to Haumea.",isDwarf:!0,customShader:!0,moons:[{name:"S/2015",radius:.008,distance:21.1,color:13421772,emissive:3355443,roughness:.9,metalness:.1,speed:.008,thinOrbit:!0}]},{name:"Eris",radius:.19,distance:6778.1,color:16777215,emissive:4473924,roughness:.6,metalness:.2,speed:12e-6,tilt:.77,eccentricity:.44068,orbitColor:16416882,description:"Eris is the most massive and second-largest known dwarf planet in the Solar System. Its discovery led to the reclassification of Pluto as a dwarf planet. Its highly eccentric orbit takes it from 38 to 98 astronomical units from the Sun.",isDwarf:!0,customShader:!0,moons:[{name:"Dysnomia",radius:.014,distance:37.4,color:11184810,emissive:3355443,roughness:.9,metalness:.1,speed:.008,thinOrbit:!0}]}],Ua=()=>{ce.current&&Object.entries(ce.current).forEach(([j,it])=>{if(!vr[j])return;const at=vr[j];at[0];const Nt=at[1],R=at[2]*gr;it.data.eccentricity=Nt,it.data.inclination=R,it.angle=Math.random()*Math.PI*2;const ct=it.data.distance,rt=ct*Math.sqrt(1-Nt*Nt),Mt=ct*Nt,te=ct*Math.cos(it.angle)+Mt,X=rt*Math.sin(it.angle),ee=-X*Math.sin(R),Kt=X*Math.cos(R);it.container.position.set(te,ee,Kt)})};gi.forEach(j=>{__[j.name]?j.rotationSpeed=lT(__[j.name]):j.rotationSpeed=.003,j.name==="Uranus"?j.rotationAxis=new L(1,0,0):j.rotationAxis=new L(0,1,0)}),gi.forEach(j=>{if(vr[j.name]){const it=vr[j.name][2];j.inclination=it*gr,console.log(`Set ${j.name} inclination: ${it}° (${j.inclination.toFixed(4)} rad)`)}});const ga=[{name:"Voyager 1",modelType:"voyager",startPlanet:null,startPosition:new L(111.37,174.01,-104.41),orbitType:"escape",escapeVector:new L(.48,.75,-.45).normalize(),scale:2.5,speed:15e-5,distance:230,angle:Math.PI*.7,description:"Launched in 1977, now in interstellar space, the furthest human-made object from Earth."},{name:"Voyager 2",modelType:"voyager",startPlanet:null,startPosition:new L(-63.64,-156.82,-152.27),orbitType:"escape",escapeVector:new L(-.28,-.69,-.67).normalize(),scale:2.5,speed:14e-5,distance:210,angle:Math.PI*1.3,description:"Launched in 1977, the only spacecraft to have visited Uranus and Neptune."},{name:"New Horizons",modelType:"newHorizons",startPlanet:null,startPosition:new L(-37.7,-54.45,-198.95),orbitType:"escape",escapeVector:new L(-.18,-.26,-.95).normalize(),scale:2,speed:16e-5,distance:190,angle:Math.PI*1.8,description:"Flew by Pluto in 2015, now exploring the Kuiper Belt."},{name:"Parker Solar Probe",modelType:"parker",startPlanet:null,startPosition:new L(-15,0,10),orbitType:"elliptical",orbitParams:{semiMajor:18,semiMinor:12,center:new L(3,0,0),incline:.12,period:5e3},scale:1,speed:.015,angle:0,description:"Studying the Sun's corona, the closest any spacecraft has been to the Sun."},{name:"James Webb",modelType:"jwst",startPlanet:"Earth",orbitType:"l2",distance:10,angle:Math.PI*.5,scale:1.8,speed:.004,description:"Space telescope operating at L2, 1.5 million km from Earth."},{name:"ISS",modelType:"iss",startPlanet:"Earth",orbitType:"planetary",distance:5,scale:.3,speed:.05,angle:0,height:.1,description:"International Space Station, continuously inhabited since 2000."},{name:"Perseverance",modelType:"rover",startPlanet:"Mars",orbitType:"landed",landLocation:new L(.8,0,.5).normalize(),scale:.4,description:"NASA rover that landed on Mars in 2021, searching for signs of ancient life."},{name:"Cassini",modelType:"cassini",startPlanet:"Saturn",orbitType:"planetary",distance:12,scale:1.5,speed:.01,angle:Math.PI*.3,description:"Studied Saturn and its moons from 2004 to 2017 before its Grand Finale descent."},{name:"Aditya L1",modelType:"adityaL1",startPlanet:null,orbitType:"l1",startPosition:new L(35,0,0),distance:15,scale:1.2,speed:.003,angle:Math.PI*.1,description:"India's first space-based solar observatory positioned at the L1 Lagrangian point between Earth and Sun, studying solar corona, solar emissions, and solar winds."},{name:"Mangalyaan",modelType:"mangalyaan",startPlanet:"Mars",orbitType:"planetary",distance:6,scale:.4,speed:.008,angle:Math.PI*.7,description:"India's first interplanetary mission and the first Asian mission to reach Mars orbit. The Mars Orbiter Mission studies the Martian atmosphere and surface mineralogy."}],Ue={},jn=[],yn={},zn=()=>new Jn({color:"0x50a0ff",side:ze,transparent:!0,opacity:.3,blending:Ai}),zi=(j,it,at,Nt=5284095)=>{const ct=[];for(let X=0;X<=128;X++){const ee=X/128*Math.PI*2,Kt=j,$t=j*Math.sqrt(1-it*it),Pt=Kt*it-1,Ct=Kt*Math.cos(ee)+Pt,Lt=$t*Math.sin(ee),re=-Math.sin(at)*Lt,me=Math.cos(at)*Lt;ct.push(new L(Ct,re,me))}const rt=new Fn().setFromPoints(ct),Mt=new Rl({color:"0x50a0ff",side:ze,transparent:!0,opacity:.4,blending:Ai});return new $c(rt,Mt)},Na=(j,it,at,Nt=16416882)=>{const ct=j,rt=j*Math.sqrt(1-it*it),Mt=ct*it,te=[];for(let $t=0;$t<=128;$t++){const Pt=$t/128*Math.PI*2,Ct=ct*Math.cos(Pt)+Mt,Lt=rt*Math.sin(Pt),re=-Math.sin(at)*Lt,me=Math.cos(at)*Lt;te.push(new L(Ct,re,me))}const X=new Fn().setFromPoints(te),ee=new R2({color:Nt,dashSize:3,gapSize:1.5,linewidth:1,transparent:!0,opacity:.7}),Kt=new $c(X,ee);return Kt.computeLineDistances(),Kt},Ii=$a();gi.forEach(j=>{if(vr[j.name]){const X=vr[j.name][2];j.inclination=X*gr,console.log(`Set ${j.name} inclination: ${X}° (${j.inclination.toFixed(4)} rad)`)}if(j.isDwarf){const X=Na(j.distance,j.eccentricity||.05,j.inclination||0,16416882);J.add(X),jn.push(X)}else{const X=zi(j.distance,j.eccentricity||.05,j.inclination||0,j.orbitColor||5284095);J.add(X),jn.push(X)}const it=new _n(j.radius,Bt,Bt);let at;j.name==="Mercury"&&j.customShader?at=new dn({uniforms:{baseColor:{value:new qt(j.color)},emissiveColor:{value:new qt(j.emissive||0)},time:{value:0},roughness:{value:j.roughness||.7},metalness:{value:j.metalness||.1}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform vec3 baseColor;
            uniform vec3 emissiveColor;
            uniform float time;
            uniform float roughness;
            uniform float metalness;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            float noise(vec2 n) {
              const vec2 d = vec2(0.0, 1.0);
              vec2 b = floor(n);
              vec2 f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
              return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
            }
            
            float rand(vec2 n) { 
              return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
            }
            
            void main() {
              vec3 lightDir = normalize(vec3(0.0, 0.0, 1.0));
              float lightIntensity = max(0.1, dot(vNormal, lightDir));
              
              float crater1 = smoothstep(0.4, 0.5, noise(vUv * 20.0));
              float crater2 = smoothstep(0.6, 0.7, noise(vUv * 10.0 + 5.0));
              float crater3 = smoothstep(0.5, 0.6, noise(vUv * 30.0 - 8.0));
              
              float craterEffect = crater1 * 0.3 + crater2 * 0.4 + crater3 * 0.3;
              
              float surfaceVariation = noise(vUv * 50.0) * 0.1;
              
              vec3 surfaceColor = baseColor;
              surfaceColor = mix(surfaceColor, surfaceColor * 0.7, craterEffect);
              surfaceColor = mix(surfaceColor, surfaceColor * 1.1, surfaceVariation);
              
              vec3 finalColor = surfaceColor * lightIntensity;
              finalColor += emissiveColor * 0.3;
              
              float atmosphereFactor = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0) * 0.2;
              finalColor = mix(finalColor, vec3(0.6, 0.5, 0.4), atmosphereFactor);
              
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}):j.name==="Earth"&&j.textured?at=new dn({uniforms:{dayTexture:{value:Ii.daymap},normalTexture:{value:Ii.normalmap},specularTexture:{value:Ii.specularmap},sunDirection:{value:new L(1,0,0)},normalScale:{value:new ne(.85,.85)}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vViewPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
              vViewPosition = -mvPosition.xyz;
              gl_Position = projectionMatrix * mvPosition;
            }
          `,fragmentShader:`
            uniform sampler2D dayTexture;
            uniform sampler2D normalTexture;
            uniform sampler2D specularTexture;
            uniform vec3 sunDirection;
            uniform vec2 normalScale;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vViewPosition;
            
            void main() {
              vec3 normal = normalize(vNormal);
              vec3 sunDir = normalize(sunDirection);
              
              vec4 normalColor = texture2D(normalTexture, vUv);
              vec3 normalMap = normalColor.xyz * 2.0 - 1.0;
              normalMap.xy *= normalScale;
              
              vec3 finalNormal = normalize(normal + vec3(normalMap.x, normalMap.y, normalMap.z));
              
              float lightIntensity = max(0.1, dot(finalNormal, sunDir));
              
              vec4 dayColor = texture2D(dayTexture, vUv);
              vec4 specColor = texture2D(specularTexture, vUv);
              
              float specularIntensity = specColor.r;
              
              vec3 viewDirection = normalize(vViewPosition);
              vec3 halfVector = normalize(sunDir + viewDirection);
              float specularFactor = max(0.0, dot(finalNormal, halfVector));
              float specularValue = pow(specularFactor, 30.0) * specularIntensity;
              
              float dayFactor = smoothstep(-0.1, 0.1, dot(finalNormal, sunDir));
              
              vec3 diffuseColor = dayColor.rgb * (lightIntensity * 1.5);
              vec3 highlightColor = vec3(1.0, 0.98, 0.9) * specularValue;
              
              vec3 finalColor = diffuseColor + highlightColor;
              
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}):j.name==="Saturn"&&j.saturnRealistic?at=new dn({uniforms:{baseColor:{value:new qt(j.color)},emissiveColor:{value:new qt(j.emissive||0)},time:{value:0}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform vec3 baseColor;
            uniform vec3 emissiveColor;
            uniform float time;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            float hash(vec3 p) {
              p = fract(p * vec3(443.8975, 397.2973, 491.1871));
              p += dot(p.zxy, p.yxz + 19.27);
              return fract(p.x * p.y * p.z);
            }
            
            float noise(vec3 p) {
              vec3 i = floor(p);
              vec3 f = fract(p);
              f = f * f * (3.0 - 2.0 * f);
              
              float a = hash(i);
              float b = hash(i + vec3(1.0, 0.0, 0.0));
              float c = hash(i + vec3(0.0, 1.0, 0.0));
              float d = hash(i + vec3(1.0, 1.0, 0.0));
              float e = hash(i + vec3(0.0, 0.0, 1.0));
              float f2 = hash(i + vec3(1.0, 0.0, 1.0));
              float g = hash(i + vec3(0.0, 1.0, 1.0));
              float h = hash(i + vec3(1.0, 1.0, 1.0));
              
              return mix(
                mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
                mix(mix(e, f2, f.x), mix(g, h, f.x), f.y),
                f.z
              );
            }
            
            float fbm(vec3 p) {
              float value = 0.0;
              float amplitude = 0.5;
              float frequency = 1.0;
              
              for (int i = 0; i < 6; i++) {
                value += amplitude * noise(p * frequency);
                amplitude *= 0.5;
                frequency *= 2.0;
              }
              
              return value;
            }
            
            void main() {
              vec3 nPos = normalize(vPosition);
              float lat = asin(nPos.y);
              float lon = atan(nPos.z, nPos.x);
              
              vec3 saturnBase = vec3(0.92, 0.87, 0.67);
              vec3 bandLight = vec3(0.96, 0.90, 0.72);
              vec3 bandDark = vec3(0.82, 0.73, 0.52);
              vec3 stormColor = vec3(0.98, 0.95, 0.82);
              vec3 shadowColor = vec3(0.65, 0.60, 0.45);
              
              float bandPattern = sin(lat * 14.0 + fbm(vec3(lon * 2.0, lat * 20.0, time * 0.05)) * 1.5);
              bandPattern = bandPattern * 0.5 + 0.5;
              
              bandPattern = mix(0.4, bandPattern, 0.6);
              
              float cloudDetail = fbm(vec3(lon * 4.0 + time * 0.02, lat * 10.0, time * 0.01));
              cloudDetail = cloudDetail * 0.5 + 0.5;
              
              float latFactor = cos(lat * 2.0);
              float flowSpeed = 0.03 * latFactor;
              float flowPattern = fbm(vec3(lon * 5.0 + time * flowSpeed, lat * 15.0, time * 0.01));
              
              float northPole = smoothstep(0.75, 0.95, lat);
              
              float hexFactor = 6.0;
              float hexAngle = atan(nPos.z, nPos.x);
              float hexPattern = cos(hexAngle * hexFactor + time * 0.1);
              hexPattern = smoothstep(0.0, 0.2, hexPattern) * northPole;
              
              float southPole = smoothstep(0.75, 0.95, -lat);
              float vortex = fbm(vec3(lon * 3.0 + time * 0.05, -lat * 5.0, time * 0.01)) * southPole;
              
              float storm1 = smoothstep(0.12, 0.05, length(vec2(lon - 1.5, (lat - 0.3) * 2.0)));
              float storm2 = smoothstep(0.10, 0.04, length(vec2(lon - 3.0, (lat + 0.4) * 1.8)));
              float allStorms = max(storm1, storm2);
              
              float ringShadow = 0.0;
              
              float tiltFactor = 0.47;
              
              float shadowY = nPos.y / tan(tiltFactor);
              float shadowX = nPos.x;
              float shadowZ = nPos.z;
              
              float shadowDist = sqrt(shadowX * shadowX + shadowZ * shadowZ);
              
              float innerShadow = smoothstep(0.8, 0.85, shadowDist);
              float outerShadow = 1.0 - smoothstep(1.3, 1.4, shadowDist);
              
              float equatorFactor = 1.0 - abs(lat) * 2.0;
              equatorFactor = max(0.0, equatorFactor);
              
              ringShadow = max(0.0, innerShadow * outerShadow * equatorFactor * 0.5);
              
              vec3 saturnColor = saturnBase;
              
              saturnColor = mix(bandDark, bandLight, bandPattern * cloudDetail);
              
              saturnColor = mix(saturnColor, mix(bandLight, bandDark, 0.5), cloudDetail * 0.3);
              
              saturnColor = mix(saturnColor, mix(bandLight, saturnColor, 0.7), flowPattern * 0.2);
              
              saturnColor = mix(saturnColor, mix(bandDark, bandLight, hexPattern), hexPattern * 0.3);
              
              saturnColor = mix(saturnColor, bandDark, vortex * 0.4);
              
              saturnColor = mix(saturnColor, stormColor, allStorms * 0.5);
              
              float detailNoise = fbm(vec3(lon * 30.0, lat * 40.0, time * 0.01));
              saturnColor = mix(saturnColor, mix(bandLight, bandDark, detailNoise), detailNoise * 0.1);
              
              saturnColor = mix(saturnColor, shadowColor, ringShadow);
              
              float limb = pow(1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
              saturnColor = mix(saturnColor, mix(bandDark, saturnBase, 0.5), limb * 0.4);
              
              float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
              saturnColor += rim * vec3(0.8, 0.7, 0.5) * 0.2;
              
              float lightFactor = max(0.2, dot(vNormal, vec3(0.0, 0.0, 1.0)));
              saturnColor *= lightFactor * 1.3;
              
              saturnColor += emissiveColor * 0.12;
              
              gl_FragColor = vec4(saturnColor, 1.0);
            }
          `}):j.name==="Jupiter"&&j.jupiterRealistic?at=new dn({uniforms:{baseColor:{value:new qt(j.color)},emissiveColor:{value:new qt(j.emissive||0)},time:{value:0}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform vec3 baseColor;
            uniform vec3 emissiveColor;
            uniform float time;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            float hash(vec3 p) {
              p = fract(p * vec3(443.8975, 397.2973, 491.1871));
              p += dot(p.zxy, p.yxz + 19.27);
              return fract(p.x * p.y * p.z);
            }
            
            float noise(vec3 p) {
              vec3 i = floor(p);
              vec3 f = fract(p);
              f = f * f * (3.0 - 2.0 * f);
              
              float a = hash(i);
              float b = hash(i + vec3(1.0, 0.0, 0.0));
              float c = hash(i + vec3(0.0, 1.0, 0.0));
              float d = hash(i + vec3(1.0, 1.0, 0.0));
              float e = hash(i + vec3(0.0, 0.0, 1.0));
              float f2 = hash(i + vec3(1.0, 0.0, 1.0));
              float g = hash(i + vec3(0.0, 1.0, 1.0));
              float h = hash(i + vec3(1.0, 1.0, 1.0));
              
              return mix(
                mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
                mix(mix(e, f2, f.x), mix(g, h, f.x), f.y),
                f.z
              );
            }
            
            float fbm(vec3 p) {
              float value = 0.0;
              float amplitude = 0.5;
              float frequency = 1.0;
              
              for (int i = 0; i < 6; i++) {
                value += amplitude * noise(p * frequency);
                amplitude *= 0.5;
                frequency *= 2.0;
              }
              
              return value;
            }
            
            float voronoi(vec3 p) {
              vec3 b, r, g = floor(p);
              p = fract(p);
              float d = 1.0;
              
              for(int j = -1; j <= 1; j++) {
                for(int i = -1; i <= 1; i++) {
                  for(int k = -1; k <= 1; k++) {
                    b = vec3(float(i), float(j), float(k));
                    r = b - p + hash(g + b);
                    d = min(d, dot(r, r));
                  }
                }
              }
              
              return sqrt(d);
            }
            
            void main() {
              vec3 nPos = normalize(vPosition);
              float lat = asin(nPos.y);
              float lon = atan(nPos.z, nPos.x);
              
              vec3 darkBrown = vec3(0.48, 0.29, 0.15);
              vec3 mediumBrown = vec3(0.65, 0.45, 0.25);
              vec3 orangeTan = vec3(0.82, 0.58, 0.35);
              vec3 creamColor = vec3(0.92, 0.80, 0.55);
              vec3 redspotDark = vec3(0.72, 0.25, 0.12);
              vec3 redspotLight = vec3(0.85, 0.35, 0.15);
              vec3 stormWhite = vec3(0.95, 0.93, 0.85);
              
              float equator = smoothstep(0.05, -0.05, abs(lat));
              
              float NEB = smoothstep(0.15, 0.05, lat) - equator;
              float NTB = smoothstep(0.35, 0.25, lat) - smoothstep(0.45, 0.35, lat);
              float NNTB = smoothstep(0.6, 0.5, lat) - smoothstep(0.7, 0.6, lat);
              
              float SEB = smoothstep(0.05, 0.15, -lat) - equator;
              float STB = smoothstep(0.25, 0.35, -lat) - smoothstep(0.35, 0.45, -lat);
              float SSTB = smoothstep(0.5, 0.6, -lat) - smoothstep(0.6, 0.7, -lat);
              
              float timeScale = time * 0.1;
              float NEBflow = fbm(vec3(lon * 3.0 + timeScale * 0.3, lat * 30.0, timeScale * 0.5)) * NEB;
              float SEBflow = fbm(vec3(lon * 4.0 - timeScale * 0.4, lat * 35.0, timeScale * 0.6)) * SEB;
              float NTBflow = fbm(vec3(lon * 2.5 + timeScale * 0.2, lat * 25.0, timeScale * 0.3)) * NTB;
              float STBflow = fbm(vec3(lon * 3.5 - timeScale * 0.25, lat * 28.0, timeScale * 0.4)) * STB;
              
              float equatorTurbulence = fbm(vec3(lon * 6.0 + timeScale, lat * 50.0, timeScale * 0.1)) * 0.7 * equator;
              float NEBturbulence = fbm(vec3(lon * 8.0 + timeScale * 0.7, lat * 60.0, timeScale * 0.2)) * 0.8 * NEB;
              float SEBturbulence = fbm(vec3(lon * 9.0 - timeScale * 0.8, lat * 65.0, timeScale * 0.3)) * 0.8 * SEB;
              
              float grsLon = 0.6 + timeScale * 0.03;
              float grsLat = -0.22;
              
              vec2 grsPos = vec2(lon - grsLon, (lat - grsLat) * 2.5);
              float grsDistance = length(grsPos);
              
              float grsCore = smoothstep(0.35, 0.05, grsDistance);
              float grsEdge = smoothstep(0.45, 0.35, grsDistance) - grsCore;
              float grsOuter = smoothstep(0.55, 0.45, grsDistance) - grsEdge - grsCore;
              
              float grsDetail = fbm(vec3(
                grsPos.x * 10.0 + time * 0.05, 
                grsPos.y * 10.0, 
                time * 0.05
              )) * grsCore * 0.5;
              
              float oval1 = smoothstep(0.15, 0.05, length(vec2(lon - 2.3, (lat - 0.35) * 2.0)));
              float oval2 = smoothstep(0.12, 0.04, length(vec2(lon - (3.5 + sin(time * 0.1) * 0.2), (lat + 0.28) * 1.8)));
              float oval3 = smoothstep(0.14, 0.05, length(vec2(lon - 1.7, (lat - 0.4) * 1.9)));
              
              float allOvals = max(oval1, max(oval2, oval3));
              
              float smallVortices = 0.0;
              for (int i = 0; i < 8; i++) {
                float idx = float(i);
                float vortexLon = idx * 0.8 + sin(idx * 0.7 + time * 0.1) * 0.3;
                float vortexLat = mix(0.4, -0.4, fract(idx * 0.27)) + sin(idx * 0.9) * 0.1;
                float vortexSize = mix(0.03, 0.08, fract(idx * 0.543));
                
                smallVortices = max(
                  smallVortices, 
                  smoothstep(vortexSize, vortexSize * 0.4, length(vec2(lon - vortexLon, (lat - vortexLat) * 1.5)))
                );
              }
              
              float cellPattern = voronoi(vec3(lon * 20.0, lat * 20.0, time * 0.02));
              cellPattern = smoothstep(0.0, 0.3, cellPattern);
              
              float detailNoise = fbm(vec3(lon * 30.0, lat * 30.0, time * 0.01));
              
              vec3 jupiterColor = orangeTan;
              
              jupiterColor = mix(jupiterColor, darkBrown, NEB * 0.8);
              jupiterColor = mix(jupiterColor, darkBrown, SEB * 0.7);
              jupiterColor = mix(jupiterColor, mediumBrown, NTB * 0.7);
              jupiterColor = mix(jupiterColor, mediumBrown, STB * 0.7);
              jupiterColor = mix(jupiterColor, mediumBrown, NNTB * 0.6);
              jupiterColor = mix(jupiterColor, mediumBrown, SSTB * 0.6);
              
              jupiterColor = mix(jupiterColor, creamColor, equator * 0.4);
              
              jupiterColor = mix(jupiterColor, darkBrown, NEBflow * 0.3);
              jupiterColor = mix(jupiterColor, darkBrown, SEBflow * 0.3);
              jupiterColor = mix(jupiterColor, mix(darkBrown, orangeTan, 0.5), NTBflow * 0.2);
              jupiterColor = mix(jupiterColor, mix(darkBrown, orangeTan, 0.5), STBflow * 0.2);
              
              jupiterColor = mix(jupiterColor, orangeTan, equatorTurbulence * 0.5);
              jupiterColor = mix(jupiterColor, darkBrown, NEBturbulence * 0.5);
              jupiterColor = mix(jupiterColor, darkBrown, SEBturbulence * 0.5);
              
              jupiterColor = mix(jupiterColor, redspotDark, grsCore * 0.85);
              jupiterColor = mix(jupiterColor, redspotLight, grsEdge * 0.7);
              jupiterColor = mix(jupiterColor, mix(redspotLight, orangeTan, 0.6), grsOuter * 0.5);
              jupiterColor = mix(jupiterColor, vec3(0.85, 0.3, 0.1), grsDetail);
              
              jupiterColor = mix(jupiterColor, stormWhite, allOvals * 0.75);
              
              jupiterColor = mix(jupiterColor, stormWhite, smallVortices * 0.6);
              
              jupiterColor = mix(jupiterColor, creamColor, cellPattern * 0.15);
              
              jupiterColor = mix(jupiterColor, mix(orangeTan, darkBrown, 0.5), detailNoise * 0.15);
              
              float northPole = smoothstep(0.7, 0.85, lat);
              float southPole = smoothstep(0.7, 0.85, -lat);
              vec3 polarColor = mix(mediumBrown, darkBrown, 0.7);
              jupiterColor = mix(jupiterColor, polarColor, northPole);
              jupiterColor = mix(jupiterColor, polarColor, southPole);
              
              float limb = pow(1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
              jupiterColor = mix(jupiterColor, mix(orangeTan, darkBrown, 0.5), limb * 0.5);
              
              float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
              jupiterColor += rim * vec3(0.7, 0.5, 0.3) * 0.3;
              
              jupiterColor += emissiveColor * 0.1;
              
              float lightFactor = max(0.2, dot(vNormal, vec3(0.0, 0.0, 1.0)));
              jupiterColor *= lightFactor * 1.4;
              
              gl_FragColor = vec4(jupiterColor, 1.0);
            }
          `}):j.bands?at=new dn({uniforms:{baseColor:{value:new qt(j.color)},emissiveColor:{value:new qt(j.emissive||0)},time:{value:0},roughness:{value:j.roughness||.7},metalness:{value:j.metalness||.1}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform vec3 baseColor;
            uniform vec3 emissiveColor;
            uniform float time;
            uniform float roughness;
            uniform float metalness;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              float latitude = vPosition.y * 20.0;
              float band = sin(latitude + time * 0.2);
              
              float flow = sin(vUv.y * 50.0 + time * 0.5 + sin(vUv.y * 20.0) * 5.0) * 0.5 + 0.5;
              
              vec3 bandColor = baseColor * (0.9 + band * 0.2);
              vec3 darkBandColor = baseColor * 0.8;
              vec3 finalColor = mix(darkBandColor, bandColor, flow);
              
              finalColor *= 0.85 + 0.25 * sin(vUv.x * 30.0 + time);
              
              finalColor += emissiveColor * 0.3;
              
              float edgeSoftness = max(0.3, dot(vNormal, vec3(0.0, 0.0, 1.0)));
              finalColor *= edgeSoftness * 1.3;
              
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}):j.name==="Mars"&&j.customShader?at=new dn({uniforms:{time:{value:0},baseColor:{value:new qt(16153660)},polarColor:{value:new qt(16777215)},highlightColor:{value:new qt(15255968)},lowlandColor:{value:new qt(12211510)},emissiveColor:{value:new qt(5384986)}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            uniform vec3 baseColor;
            uniform vec3 polarColor;
            uniform vec3 highlightColor;
            uniform vec3 lowlandColor;
            uniform vec3 emissiveColor;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            // Perlin-like noise function for terrain features
            float hash(vec3 p) {
              p = fract(p * vec3(443.8975, 397.2973, 491.1871));
              p += dot(p.zxy, p.yxz + 19.27);
              return fract(p.x * p.y * p.z);
            }
            
            float noise(vec3 p) {
              vec3 i = floor(p);
              vec3 f = fract(p);
              f = f * f * (3.0 - 2.0 * f);
              
              float a = hash(i);
              float b = hash(i + vec3(1.0, 0.0, 0.0));
              float c = hash(i + vec3(0.0, 1.0, 0.0));
              float d = hash(i + vec3(1.0, 1.0, 0.0));
              float e = hash(i + vec3(0.0, 0.0, 1.0));
              float f2 = hash(i + vec3(1.0, 0.0, 1.0));
              float g = hash(i + vec3(0.0, 1.0, 1.0));
              float h = hash(i + vec3(1.0, 1.0, 1.0));
              
              return mix(
                mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
                mix(mix(e, f2, f.x), mix(g, h, f.x), f.y),
                f.z
              );
            }
            
            // FBM (Fractal Brownian Motion) for realistic terrain
            float fbm(vec3 p) {
              float value = 0.0;
              float amplitude = 0.5;
              float frequency = 1.0;
              
              for (int i = 0; i < 4; i++) {
                value += amplitude * noise(p * frequency);
                amplitude *= 0.5;
                frequency *= 2.0;
              }
              
              return value;
            }
            
            void main() {
              // Basic lighting
              vec3 lightDir = normalize(vec3(0.0, 0.0, 1.0));
              float lightIntensity = max(0.2, dot(vNormal, lightDir));
              
              // Create polar ice caps
              float polarCap = smoothstep(0.85, 0.95, abs(vPosition.y / length(vPosition)));
              
              // Generate surface features
              float elevation = fbm(vPosition * 3.0 + vec3(time * 0.1)); // Slow rotation
              
              // Olympus Mons - large volcano
              float olympusDist = length(vec2(vUv.x - 0.4, vUv.y - 0.55) * 2.0);
              float olympus = smoothstep(0.2, 0.5, olympusDist);
              
              // Valles Marineris - large canyon system
              float vallesY = abs(vUv.y - 0.5) * 20.0;
              float vallesX = mod(vUv.x + time * 0.01, 1.0);
              float valles = smoothstep(0.0, 0.1, vallesY) * step(0.35, vallesX) * step(vallesX, 0.65);
              
              // Combine features
              vec3 surfaceColor = mix(lowlandColor, baseColor, elevation);
              surfaceColor = mix(surfaceColor, highlightColor, (1.0 - olympus) * 0.6);
              surfaceColor = mix(surfaceColor, lowlandColor * 0.8, (1.0 - valles) * 0.3);
              
              // Add dust storms that move over time
              float dustStorm = fbm(vec3(vUv * 10.0, time * 0.1));
              surfaceColor = mix(surfaceColor, vec3(0.9, 0.7, 0.5), dustStorm * 0.15);
              
              // Mix in polar caps
              surfaceColor = mix(surfaceColor, polarColor, polarCap);
              
              // Apply lighting
              vec3 finalColor = surfaceColor * lightIntensity;
              finalColor += emissiveColor * 0.15;
              
              // Add subtle atmospheric edge glow
              float rim = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
              finalColor = mix(finalColor, vec3(0.9, 0.6, 0.5), pow(rim, 4.0) * 0.3);
              
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}):j.name==="Venus"&&j.customShader?at=new dn({uniforms:{time:{value:0},resolution:{value:new ne(1024,1024)},baseColor:{value:new qt(16115611)},cloudColor1:{value:new qt(15784354)},cloudColor2:{value:new qt(15454867)},cloudColor3:{value:new qt(13744765)},emissiveColor:{value:new qt(3813146)}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            uniform vec2 resolution;
            uniform vec3 baseColor;
            uniform vec3 cloudColor1;
            uniform vec3 cloudColor2;
            uniform vec3 cloudColor3;
            uniform vec3 emissiveColor;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            float hash(vec2 p) {
              return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }
            
            float noise(vec2 p) {
              vec2 i = floor(p);
              vec2 f = fract(p);
              f = f * f * (3.0 - 2.0 * f);
              
              float a = hash(i);
              float b = hash(i + vec2(1.0, 0.0));
              float c = hash(i + vec2(0.0, 1.0));
              float d = hash(i + vec2(1.0, 1.0));
              
              return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
            }
            
            float fbm(vec2 p) {
              float value = 0.0;
              float amplitude = 0.5;
              float frequency = 1.0;
              
              for (int i = 0; i < 6; i++) {
                value += amplitude * noise(p * frequency);
                amplitude *= 0.5;
                frequency *= 2.0;
              }
              
              return value;
            }
            
            void main() {
              vec3 lightDir = normalize(vec3(0.0, 0.0, 1.0));
              float light = max(0.2, dot(vNormal, lightDir));
              
              float lat = asin(vPosition.y / length(vPosition));
              float lon = atan(vPosition.z, vPosition.x);
              
              vec2 cloudCoord1 = vec2(lon + time * 0.03, lat);
              vec2 cloudCoord2 = vec2(lon - time * 0.015, lat + time * 0.02);
              vec2 cloudCoord3 = vec2(lon + time * 0.02, lat - time * 0.01);
              
              float cloudPattern1 = fbm(cloudCoord1 * 2.0);
              float cloudPattern2 = fbm(cloudCoord2 * 4.0 + vec2(100.0, 100.0));
              float cloudPattern3 = fbm(cloudCoord3 * 6.0 + vec2(300.0, 200.0));
              
              float yBands = sin(lat * 10.0 + cloudPattern1 * 2.0) * 0.5 + 0.5;
              
              float vortex1 = length(vec2(lon, lat * 3.0) - vec2(0.5, 0.7)) * 2.0;
              float vortex2 = length(vec2(lon + time * 0.02, lat * 2.0) - vec2(2.0, -0.5)) * 3.0;
              
              float vortexPattern1 = smoothstep(0.5, 1.5, vortex1);
              float vortexPattern2 = smoothstep(0.4, 1.2, vortex2);
              
              float cloudDensity = cloudPattern1 * 0.5 + cloudPattern2 * 0.3 + cloudPattern3 * 0.2;
              cloudDensity = cloudDensity * (0.8 + yBands * 0.4) * vortexPattern1 * vortexPattern2;
              
              vec3 cloudColor = mix(cloudColor1, cloudColor2, cloudPattern1);
              cloudColor = mix(cloudColor, cloudColor3, cloudPattern2 * cloudPattern3);
              
              vec3 surfaceColor = mix(baseColor, cloudColor, cloudDensity);
              
              float equatorHighlight = pow(cos(lat), 4.0) * 0.1;
              surfaceColor += vec3(equatorHighlight);
              
              float rimLight = pow(1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0) * 0.3;
              vec3 rimColor = mix(vec3(1.0, 0.95, 0.8), vec3(0.9, 0.7, 0.3), cloudDensity);
              
              vec3 finalColor = surfaceColor * light * (1.0 + rimLight * rimColor);
              finalColor += emissiveColor * 0.2;
              
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}):j.name==="Neptune"&&j.customShader?at=new dn({uniforms:{time:{value:0},baseColor:{value:new qt(2842110)},darkColor:{value:new qt(1718924)},brightColor:{value:new qt(7316474)},spotColor:{value:new qt(1521527)}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            uniform vec3 baseColor;
            uniform vec3 darkColor;
            uniform vec3 brightColor;
            uniform vec3 spotColor;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            float hash(vec2 p) {
              return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }
            
            float noise(vec2 p) {
              vec2 i = floor(p);
              vec2 f = fract(p);
              f = f * f * (3.0 - 2.0 * f);
              return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                         mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
            }
            
            float fbm(vec2 p) {
              float value = 0.0;
              float amplitude = 0.5;
              float frequency = 1.0;
              for (int i = 0; i < 6; i++) {
                value += amplitude * noise(p * frequency);
                amplitude *= 0.5;
                frequency *= 2.0;
              }
              return value;
            }
            
            void main() {
              vec3 lightDir = normalize(vec3(0.0, 0.0, 1.0));
              float light = max(0.3, dot(vNormal, lightDir));
              
              vec3 normalizedPos = normalize(vPosition);
              float lat = asin(normalizedPos.y);
              float lon = atan(normalizedPos.z, normalizedPos.x);
              
              // Create bands with varying speeds based on latitude
              float bandSpeed = cos(lat * 2.0) * 2.0;
              vec2 windOffset = vec2(time * 0.02 * bandSpeed, 0.0);
              
              // Create cloud bands
              float bandPattern = sin(lat * 20.0 + time * 0.1) * 0.5 + 0.5;
              bandPattern *= sin(lat * 10.0 - time * 0.05) * 0.5 + 0.5;
              
              // Cloud patterns with different speeds per latitude
              vec2 cloudUV = vec2(lon * 0.1, lat * 0.5) + windOffset;
              float cloudPattern1 = fbm(cloudUV * 5.0 + vec2(time * 0.03, 0.0));
              float cloudPattern2 = fbm(cloudUV * 10.0 - vec2(time * 0.02, 0.0));
              float cloudPattern3 = fbm(cloudUV * 20.0 + vec2(0.0, time * 0.01));
              
              float cloudMix = cloudPattern1 * 0.6 + cloudPattern2 * 0.3 + cloudPattern3 * 0.1;
              cloudMix = cloudMix * 0.8 + 0.2;
              
              // Create the Great Dark Spot
              float spotDist = length(vec2(lon, lat * 2.0) - vec2(0.4 + sin(time * 0.1) * 0.1, 0.2));
              float darkSpot = smoothstep(0.5, 0.1, spotDist);
              
              // Create smaller atmospheric storms
              float storm1 = smoothstep(0.3, 0.05, length(vec2(lon, lat * 2.0) - vec2(-0.8, -0.3)));
              float storm2 = smoothstep(0.2, 0.05, length(vec2(lon, lat * 2.0) - vec2(1.2, 0.5)));
              
              // Combine cloud features
              float stormFeatures = max(darkSpot, max(storm1, storm2));
              
              // Create atmospheric bands with turbulence
              float bandY = lat * 10.0;
              float turbulence = fbm(vec2(lon * 3.0 + time * 0.05, bandY));
              float bands = sin(bandY + turbulence * 2.0) * 0.5 + 0.5;
              
              // Combine all atmospheric features
              float mixFactor = cloudMix * (0.8 + bands * 0.4);
              
              // Color the planet based on features
              vec3 cloudColor = mix(baseColor, brightColor, cloudMix);
              vec3 bandColor = mix(baseColor, darkColor, bands * 0.5);
              vec3 surfaceColor = mix(bandColor, cloudColor, mixFactor);
              
              // Apply storm coloration
              surfaceColor = mix(surfaceColor, spotColor, darkSpot * 0.7);
              surfaceColor = mix(surfaceColor, brightColor, storm1 * 0.3);
              surfaceColor = mix(surfaceColor, brightColor, storm2 * 0.3);
              
              // Apply lighting
              vec3 finalColor = surfaceColor * light;
              
              // Add bright limb (edge) effects
              float limb = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
              finalColor += limb * vec3(0.3, 0.5, 0.8) * 0.3;
              
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}):j.name==="Uranus"&&j.customShader?at=new dn({uniforms:{time:{value:0},baseColor:{value:new qt(4973294)},atmosphereColor:{value:new qt(10155775)},polarColor:{value:new qt(7590104)}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            uniform vec3 baseColor;
            uniform vec3 atmosphereColor;
            uniform vec3 polarColor;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            float hash(vec2 p) {
              return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }
            
            float noise(vec2 p) {
              vec2 i = floor(p);
              vec2 f = fract(p);
              f = f * f * (3.0 - 2.0 * f);
              return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                         mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
            }
            
            float fbm(vec2 p) {
              float value = 0.0;
              float amplitude = 0.5;
              float frequency = 1.0;
              for (int i = 0; i < 5; i++) {
                value += amplitude * noise(p * frequency);
                amplitude *= 0.5;
                frequency *= 2.0;
              }
              return value;
            }
            
            void main() {
              vec3 lightDir = normalize(vec3(0.0, 0.0, 1.0));
              float light = max(0.3, dot(vNormal, lightDir));
              
              vec3 normalizedPos = normalize(vPosition);
              float lat = asin(normalizedPos.y);
              float lon = atan(normalizedPos.z, normalizedPos.x);
              
              // Create subtle bands (Uranus has very faint bands compared to other gas giants)
              float bandY = lat * 8.0;
              float bandNoise = fbm(vec2(lon * 2.0 + time * 0.01, bandY * 0.5)) * 0.1;
              float bands = sin(bandY + bandNoise) * 0.5 + 0.5;
              bands = pow(bands, 2.0) * 0.15; // Make bands very subtle
              
              // Create polar regions with slightly different coloration
              float polarRegion = smoothstep(0.6, 0.8, abs(lat) / 1.57);
              
              // Create extremely subtle cloud features
              float cloudPattern1 = fbm(vec2(lon * 3.0 + time * 0.003, lat * 2.0)) * 0.05;
              float cloudPattern2 = fbm(vec2(lon * 5.0 - time * 0.002, lat * 3.0 + time * 0.001)) * 0.03;
              
              // Create occasional discrete clouds (extremely rare on Uranus)
              float discreteCloud = 0.0;
              if (fbm(vec2(lon * 10.0, lat * 5.0 + time * 0.05)) > 0.75) {
                vec2 cloudPos = vec2(
                  hash(vec2(floor(time * 0.01), 1.0)) * 2.0 - 1.0,
                  hash(vec2(floor(time * 0.01), 2.0)) * 2.0 - 1.0
                );
                float cloudDist = length(vec2(lon, lat * 2.0) - cloudPos);
                discreteCloud = smoothstep(0.4, 0.1, cloudDist) * 0.08;
              }
              
              // Create seasonal variation based on the extreme axial tilt
              float season = sin(time * 0.1) * 0.5 + 0.5; // Full seasonal cycle
              float seasonalVariation = mix(1.0, 1.1, season * polarRegion);
              
              // Combine all features
              vec3 surfaceColor = mix(baseColor, atmosphereColor, bands + cloudPattern1 + cloudPattern2);
              surfaceColor = mix(surfaceColor, polarColor, polarRegion * 0.3);
              surfaceColor = mix(surfaceColor, atmosphereColor * 1.1, discreteCloud);
              surfaceColor *= seasonalVariation;
              
              // Apply lighting
              vec3 finalColor = surfaceColor * light;
              
              // Add limb darkening and subtle atmospheric haze
              float limb = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
              finalColor = mix(finalColor, atmosphereColor * 0.8, limb * 0.2);
              
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}):j.name==="Pluto"&&j.customShader?at=new dn({uniforms:{time:{value:0},baseColor:{value:new qt(13082761)},craterColor:{value:new qt(10188645)},iceColor:{value:new qt(14801361)}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            uniform vec3 baseColor;
            uniform vec3 craterColor;
            uniform vec3 iceColor;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            float hash(vec3 p) {
              p = fract(p * vec3(443.8975, 397.2973, 491.1871));
              p += dot(p.zxy, p.yxz + 19.27);
              return fract(p.x * p.y * p.z);
            }
            
            float noise(vec3 p) {
              vec3 i = floor(p);
              vec3 f = fract(p);
              f = f * f * (3.0 - 2.0 * f);
              
              float a = hash(i);
              float b = hash(i + vec3(1.0, 0.0, 0.0));
              float c = hash(i + vec3(0.0, 1.0, 0.0));
              float d = hash(i + vec3(1.0, 1.0, 0.0));
              float e = hash(i + vec3(0.0, 0.0, 1.0));
              float f2 = hash(i + vec3(1.0, 0.0, 1.0));
              float g = hash(i + vec3(0.0, 1.0, 1.0));
              float h = hash(i + vec3(1.0, 1.0, 1.0));
              
              return mix(
                mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
                mix(mix(e, f2, f.x), mix(g, h, f.x), f.y),
                f.z
              );
            }
            
            float fbm(vec3 p) {
              float value = 0.0;
              float amplitude = 0.5;
              float frequency = 1.0;
              
              for (int i = 0; i < 5; i++) {
                value += amplitude * noise(p * frequency);
                amplitude *= 0.5;
                frequency *= 2.0;
              }
              
              return value;
            }
            
            void main() {
              vec3 lightDir = normalize(vec3(0.0, 0.0, 1.0));
              float light = max(0.2, dot(vNormal, lightDir));
              
              vec3 nPos = normalize(vPosition);
              float lat = asin(nPos.y);
              float lon = atan(nPos.z, nPos.x);
              
              float heartDist = length(vec2(lon, lat * 1.5) - vec2(0.1, -0.4));
              float heartShape = smoothstep(0.8, 0.4, heartDist);
              
              float elevation = fbm(vPosition * 5.0 + vec3(time * 0.05, 0.0, 0.0));
              float smallDetail = fbm(vPosition * 15.0);
              
              float craters = fbm(vPosition * 8.0) * 0.5 + 0.5;
              craters = pow(craters, 2.0) * 0.7;
              
              vec3 surfaceColor = mix(baseColor, craterColor, craters * (1.0 - heartShape * 0.8));
              surfaceColor = mix(surfaceColor, iceColor, heartShape * 0.95);
              
              float iceDetail = fbm(vPosition * 20.0) * 0.2;
              surfaceColor = mix(surfaceColor, vec3(0.95, 0.95, 0.95), heartShape * iceDetail);
              
              float redRegion = fbm(vPosition * 4.0 + vec3(time * 0.03, 0.0, 0.0));
              surfaceColor = mix(surfaceColor, vec3(0.7, 0.4, 0.3), redRegion * 0.3 * (1.0 - heartShape));
              
              vec3 finalColor = surfaceColor * (light * 0.8 + 0.2);
              
              float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
              finalColor = mix(finalColor, vec3(0.4, 0.3, 0.25), rim * 0.2);
              
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}):j.name==="Ceres"&&j.customShader?at=new dn({uniforms:{time:{value:0},baseColor:{value:new qt(10132122)},spotColor:{value:new qt(15132390)}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            uniform vec3 baseColor;
            uniform vec3 spotColor;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            float hash(vec3 p) {
              p = fract(p * vec3(443.8975, 397.2973, 491.1871));
              p += dot(p.zxy, p.yxz + 19.27);
              return fract(p.x * p.y * p.z);
            }
            
            float noise(vec3 p) {
              vec3 i = floor(p);
              vec3 f = fract(p);
              f = f * f * (3.0 - 2.0 * f);
              
              float a = hash(i);
              float b = hash(i + vec3(1.0, 0.0, 0.0));
              float c = hash(i + vec3(0.0, 1.0, 0.0));
              float d = hash(i + vec3(1.0, 1.0, 0.0));
              float e = hash(i + vec3(0.0, 0.0, 1.0));
              float f2 = hash(i + vec3(1.0, 0.0, 1.0));
              float g = hash(i + vec3(0.0, 1.0, 1.0));
              float h = hash(i + vec3(1.0, 1.0, 1.0));
              
              return mix(
                mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
                mix(mix(e, f2, f.x), mix(g, h, f.x), f.y),
                f.z
              );
            }
            
            float fbm(vec3 p) {
              float value = 0.0;
              float amplitude = 0.5;
              float frequency = 1.0;
              
              for (int i = 0; i < 4; i++) {
                value += amplitude * noise(p * frequency);
                amplitude *= 0.5;
                frequency *= 2.0;
              }
              
              return value;
            }
            
            void main() {
              vec3 lightDir = normalize(vec3(0.0, 0.0, 1.0));
              float lightIntensity = max(0.2, dot(vNormal, lightDir));
              
              vec3 nPos = normalize(vPosition);
              float lat = asin(nPos.y);
              float lon = atan(nPos.z, nPos.x);
              
              float occatorDist = length(vec2(lon - 0.3, lat * 3.0 - 0.2));
              float occatorCrater = smoothstep(0.4, 0.1, occatorDist);
              
              float elevation = fbm(vPosition * 8.0 + vec3(time * 0.05, 0.0, 0.0));
              float smallDetail = fbm(vPosition * 20.0);
              
              vec3 surfaceColor = mix(baseColor, spotColor, occatorCrater * 0.8);
              surfaceColor = mix(surfaceColor, baseColor * 0.9, elevation * 0.6);
              surfaceColor = mix(surfaceColor, baseColor * 1.1, smallDetail * 0.3);
              
              vec3 finalColor = surfaceColor * lightIntensity;
              
              float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
              finalColor = mix(finalColor, vec3(0.3, 0.3, 0.3), rim * 0.2);
              
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}):j.name==="Haumea"&&j.customShader?at=new dn({uniforms:{time:{value:0},baseColor:{value:new qt(15790320)},iceColor:{value:new qt(14217983)}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            uniform vec3 baseColor;
            uniform vec3 iceColor;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            float hash(vec2 p) {
              return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }
            
            float noise(vec2 p) {
              vec2 i = floor(p);
              vec2 f = fract(p);
              f = f * f * (3.0 - 2.0 * f);
              
              float a = hash(i);
              float b = hash(i + vec2(1.0, 0.0));
              float c = hash(i + vec2(0.0, 1.0));
              float d = hash(i + vec2(1.0, 1.0));
              
              return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
            }
            
            void main() {
              float rotationAngle = time * 20.0; // Fast rotation
              float adjustedX = vPosition.x * cos(rotationAngle) - vPosition.z * sin(rotationAngle);
              float adjustedZ = vPosition.x * sin(rotationAngle) + vPosition.z * cos(rotationAngle);
              
              float icePattern = noise(vec2(adjustedX * 25.0, adjustedZ * 25.0 + vPosition.y * 15.0));
              float largerPattern = noise(vec2(adjustedX * 10.0, adjustedZ * 10.0 + vPosition.y * 5.0));
              
              vec3 lightDir = normalize(vec3(0.0, 0.0, 1.0));
              float lightIntensity = max(0.3, dot(vNormal, lightDir));
              
              vec3 color = mix(baseColor, iceColor, icePattern * 0.5 + largerPattern * 0.5);
              
              float specular = pow(max(0.0, dot(reflect(-lightDir, vNormal), vec3(0.0, 0.0, -1.0))), 20.0);
              color += vec3(0.5, 0.7, 1.0) * specular * 0.4;
              
              vec3 finalColor = color * (lightIntensity * 0.7 + 0.3);
              
              float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
              finalColor += vec3(0.8, 0.9, 1.0) * rim * 0.3;
              
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}):j.name==="Makemake"&&j.customShader?at=new dn({uniforms:{time:{value:0},baseColor:{value:new qt(12746324)},methaneColor:{value:new qt(9198140)}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            uniform vec3 baseColor;
            uniform vec3 methaneColor;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            float hash(vec3 p) {
              p = fract(p * vec3(443.8975, 397.2973, 491.1871));
              p += dot(p.zxy, p.yxz + 19.27);
              return fract(p.x * p.y * p.z);
            }
            
            float noise(vec3 p) {
              vec3 i = floor(p);
              vec3 f = fract(p);
              f = f * f * (3.0 - 2.0 * f);
              
              float a = hash(i);
              float b = hash(i + vec3(1.0, 0.0, 0.0));
              float c = hash(i + vec3(0.0, 1.0, 0.0));
              float d = hash(i + vec3(1.0, 1.0, 0.0));
              float e = hash(i + vec3(0.0, 0.0, 1.0));
              float f2 = hash(i + vec3(1.0, 0.0, 1.0));
              float g = hash(i + vec3(0.0, 1.0, 1.0));
              float h = hash(i + vec3(1.0, 1.0, 1.0));
              
              return mix(
                mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
                mix(mix(e, f2, f.x), mix(g, h, f.x), f.y),
                f.z
              );
            }
            
            float fbm(vec3 p) {
              float value = 0.0;
              float amplitude = 0.5;
              float frequency = 1.0;
              
              for (int i = 0; i < 5; i++) {
                value += amplitude * noise(p * frequency);
                amplitude *= 0.5;
                frequency *= 2.0;
              }
              
              return value;
            }
            
            void main() {
              vec3 nPos = normalize(vPosition);
              float lat = asin(nPos.y);
              float lon = atan(nPos.z, nPos.x);
              
              float methaneDist1 = length(vec2(lon - 0.5, lat * 2.0 - 0.3));
              float methaneDist2 = length(vec2(lon + 0.8, lat * 2.0 + 0.5));
              float methaneDist3 = length(vec2(lon + 0.2, lat * 2.0 - 0.8));
              
              float methanePatches = smoothstep(0.4, 0.1, methaneDist1) + 
                                    smoothstep(0.5, 0.2, methaneDist2) +
                                    smoothstep(0.6, 0.3, methaneDist3);
              methanePatches = min(1.0, methanePatches);
              
              float surfaceDetail = fbm(vPosition * 10.0 + vec3(time * 0.05, 0.0, 0.0));
              float microDetail = fbm(vPosition * 30.0);
              
              vec3 surfaceColor = mix(baseColor, methaneColor, methanePatches * 0.7);
              surfaceColor = mix(surfaceColor, mix(baseColor, methaneColor, 0.5), surfaceDetail * 0.4);
              surfaceColor = mix(surfaceColor, baseColor * 1.1, microDetail * 0.2);
              
              vec3 lightDir = normalize(vec3(0.0, 0.0, 1.0));
              float lightIntensity = max(0.2, dot(vNormal, lightDir));
              vec3 finalColor = surfaceColor * lightIntensity;
              
              float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
              finalColor = mix(finalColor, vec3(0.8, 0.5, 0.3), rim * 0.15);
              
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}):j.name==="Eris"&&j.customShader?at=new dn({uniforms:{time:{value:0},baseColor:{value:new qt(16777215)},frostColor:{value:new qt(15267071)}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            uniform vec3 baseColor;
            uniform vec3 frostColor;
            
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            float hash(vec3 p) {
              p = fract(p * vec3(443.8975, 397.2973, 491.1871));
              p += dot(p.zxy, p.yxz + 19.27);
              return fract(p.x * p.y * p.z);
            }
            
            float noise(vec3 p) {
              vec3 i = floor(p);
              vec3 f = fract(p);
              f = f * f * (3.0 - 2.0 * f);
              
              float a = hash(i);
              float b = hash(i + vec3(1.0, 0.0, 0.0));
              float c = hash(i + vec3(0.0, 1.0, 0.0));
              float d = hash(i + vec3(1.0, 1.0, 0.0));
              float e = hash(i + vec3(0.0, 0.0, 1.0));
              float f2 = hash(i + vec3(1.0, 0.0, 1.0));
              float g = hash(i + vec3(0.0, 1.0, 1.0));
              float h = hash(i + vec3(1.0, 1.0, 1.0));
              
              return mix(
                mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
                mix(mix(e, f2, f.x), mix(g, h, f.x), f.y),
                f.z
              );
            }
            
            float fbm(vec3 p) {
              float value = 0.0;
              float amplitude = 0.5;
              float frequency = 1.0;
              
              for (int i = 0; i < 4; i++) {
                value += amplitude * noise(p * frequency);
                amplitude *= 0.5;
                frequency *= 2.0;
              }
              
              return value;
            }
            
            void main() {
              float frostPattern = fbm(vPosition * 15.0 + vec3(time * 0.02, 0.0, 0.0));
              float largePattern = fbm(vPosition * 5.0);
              
              vec3 surfaceColor = mix(baseColor, frostColor, frostPattern * 0.2 + largePattern * 0.1);
              
              vec3 lightDir = normalize(vec3(0.0, 0.0, 1.0));
              float lightIntensity = max(0.4, dot(vNormal, lightDir));
              
              float specular = pow(max(0.0, dot(reflect(-lightDir, vNormal), vec3(0.0, 0.0, -1.0))), 30.0);
              vec3 finalColor = surfaceColor * lightIntensity + vec3(1.0) * specular * 0.5;
              
              float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
              finalColor += vec3(0.9, 0.95, 1.0) * rim * 0.2;
              
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}):at=new vt({color:j.color,roughness:j.roughness||.7,metalness:j.metalness||.1,emissive:new qt(j.emissive||0),emissiveIntensity:.4,flatShading:!1,envMapIntensity:.9});const Nt=new $(it,at),R=new $n;R.rotation.x=j.tilt;const ct=Math.random()*Math.PI*2,rt=j.distance*Math.cos(ct),Mt=j.distance*Math.sin(ct);if(R.position.set(rt,0,Mt),R.add(Nt),J.add(R),j.name==="Earth"&&j.textured){const X=new _n(j.radius*1.02,Bt,Bt),ee=new vt({map:Ii.cloudmap,transparent:!0,opacity:.8,alphaMap:Ii.cloudmap,blending:im,blendSrc:y_,blendDst:ru}),Kt=new $(X,ee);Nt.add(Kt);const $t=new _n(j.radius*1.001,Bt,Bt),Pt=new dn({uniforms:{nightTexture:{value:Ii.nightmap},sunDirection:{value:new L(0,0,0)}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vSunDir;
            uniform vec3 sunDirection;
            
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vSunDir = normalize(sunDirection);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform sampler2D nightTexture;
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vSunDir;
            
            void main() {
              float cosAngle = dot(vNormal, vSunDir);
              
              float twilightZone = smoothstep(-0.3, 0.0, cosAngle);
              float nightZone = 1.0 - twilightZone;
              
              vec3 nightColor = texture2D(nightTexture, vUv).rgb;
              
              float intensity = nightZone * (1.0 + abs(cosAngle) * 0.5);
              
              gl_FragColor = vec4(nightColor * intensity, intensity * 0.9);
            }
          `,transparent:!0,blending:Ai}),Ct=new $($t,Pt);Nt.add(Ct),Nt.userData.cloudMesh=Kt,Nt.userData.nightMesh=Ct}if(j.atmosphere){const X=new _n(j.radius*1.1,Bt,Bt);if(j.name==="Earth"){const ee=new dn({uniforms:{sunPosition:{value:new L(0,0,0)},atmosphereColor:{value:new qt(j.atmosphereColor||35071)},time:{value:0}},vertexShader:`
              varying vec3 vNormal;
              varying vec3 vPosition;
              varying vec2 vUv;
              
              void main() {
                vNormal = normalize(normalMatrix * normal);
                vPosition = position;
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,fragmentShader:`
              uniform vec3 sunPosition;
              uniform vec3 atmosphereColor;
              uniform float time;
              varying vec3 vNormal;
              varying vec3 vPosition;
              varying vec2 vUv;
              
              void main() {
                vec3 sunDir = normalize(sunPosition);
                float cosAngle = dot(vNormal, normalize(sunDir));
                
                // Scattering effect - stronger at grazing angles (Rayleigh scattering)
                float scatteringFactor = pow(1.0 - abs(cosAngle), 5.0) * 0.8 + 0.2;
                
                // Edge glow
                float edgeGlow = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
                
                // Cloud-like variations
                float clouds = sin(vUv.y * 15.0 + time * 0.1) * sin(vUv.x * 15.0 + time * 0.15) * 0.1;
                
                // Combine effects
                vec3 finalColor = mix(atmosphereColor, vec3(1.0, 1.0, 1.0), scatteringFactor * 0.5);
                
                // Create a subtle blue shadow on the dark side
                if (cosAngle < 0.0) {
                  finalColor = mix(finalColor, vec3(0.1, 0.1, 0.3), -cosAngle * 0.5);
                }
                
                // Add subtle time variation
                float timePulse = sin(time * 0.5) * 0.05 + 0.95;
                
                float alpha = (edgeGlow + clouds) * 0.6 * timePulse;
                
                gl_FragColor = vec4(finalColor, alpha);
              }
            `,transparent:!0,blending:Ai,side:Bn}),Kt=new $(X,ee);Nt.add(Kt)}else if(j.name==="Mars"){const ee=new dn({uniforms:{time:{value:0}},vertexShader:`
              varying vec3 vNormal;
              varying vec2 vUv;
              
              void main() {
                vNormal = normalize(normalMatrix * normal);
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,fragmentShader:`
              uniform float time;
              varying vec3 vNormal;
              varying vec2 vUv;
              
              void main() {
                // Martian atmosphere is very thin
                float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
                
                // Create subtle dust storm patterns
                float storm = sin(vUv.x * 20.0 + time * 0.3) * sin(vUv.y * 20.0 + time * 0.2) * 0.5 + 0.5;
                float stormPattern = sin(vUv.x * 15.0 - time * 0.1) * sin(vUv.y * 15.0 + time * 0.2) * 0.5 + 0.5;
                
                // Martian orange-pink atmospheric color
                vec3 atmosphereColor = vec3(0.9, 0.6, 0.5);
                vec3 stormColor = vec3(0.8, 0.7, 0.5);
                
                vec3 finalColor = mix(atmosphereColor, stormColor, storm * stormPattern * 0.3);
                
                // Very thin atmosphere - almost transparent
                float alpha = intensity * 0.3 * storm;
                
                gl_FragColor = vec4(finalColor, alpha);
              }
            `,transparent:!0,blending:Ai,side:Bn}),Kt=new $(X,ee);Nt.add(Kt)}else if(j.name==="Venus"){const ee=new dn({uniforms:{time:{value:0}},vertexShader:`
              varying vec3 vNormal;
              varying vec2 vUv;
              
              void main() {
                vNormal = normalize(normalMatrix * normal);
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,fragmentShader:`
              uniform float time;
              varying vec3 vNormal;
              varying vec2 vUv;
              
              float hash(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
              }
              
              float noise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                
                float a = hash(i);
                float b = hash(i + vec2(1.0, 0.0));
                float c = hash(i + vec2(0.0, 1.0));
                float d = hash(i + vec2(1.0, 1.0));
                
                return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
              }
              
              float fbm(vec2 p) {
                float value = 0.0;
                float amplitude = 0.5;
                float frequency = 1.0;
                
                for (int i = 0; i < 4; i++) {
                  value += amplitude * noise(p * frequency);
                  amplitude *= 0.5;
                  frequency *= 2.0;
                }
                
                return value;
              }
              
              void main() {
                float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 1.7);
                
                vec2 cloudCoord = vUv * 4.0 + vec2(time * 0.02, time * 0.01);
                float cloudPattern = fbm(cloudCoord);
                
                vec2 swirls = vUv * 8.0 - vec2(time * 0.01, 0.0);
                float swirlPattern = fbm(swirls) * 0.5 + 0.5;
                
                float patternMix = cloudPattern * swirlPattern;
                
                vec3 yellowColor = vec3(0.95, 0.85, 0.55);
                vec3 orangeColor = vec3(0.9, 0.7, 0.4);
                
                vec3 atmosphereColor = mix(yellowColor, orangeColor, patternMix);
                
                float pulse = 0.95 + sin(time * 0.5) * 0.05;
                float alpha = intensity * (0.6 + patternMix * 0.2) * pulse;
                
                gl_FragColor = vec4(atmosphereColor, alpha);
              }
            `,transparent:!0,blending:Ai,side:Bn}),Kt=new $(X,ee);Nt.add(Kt);const $t=new _n(j.radius*1.18,Bt,Bt),Pt=new dn({uniforms:{time:{value:0}},vertexShader:`
              varying vec3 vNormal;
              varying vec2 vUv;
              
              void main() {
                vNormal = normalize(normalMatrix * normal);
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,fragmentShader:`
              uniform float time;
              varying vec3 vNormal;
              varying vec2 vUv;
              
              float hash(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
              }
              
              float noise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                
                float a = hash(i);
                float b = hash(i + vec2(1.0, 0.0));
                float c = hash(i + vec2(0.0, 1.0));
                float d = hash(i + vec2(1.0, 1.0));
                
                return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
              }
              
              void main() {
                float intensity = pow(0.4 - dot(vNormal, vec3(0, 0, 1.0)), 3.0);
                
                vec2 cloudCoord = vUv * 3.0 + vec2(time * 0.01, 0.0);
                float cloudPattern = noise(cloudCoord) * 0.5 + 0.5;
                
                vec3 yellowColor = vec3(0.92, 0.8, 0.5);
                float alpha = intensity * cloudPattern * 0.35;
                
                gl_FragColor = vec4(yellowColor, alpha);
              }
            `,transparent:!0,blending:Ai,side:Bn}),Ct=new $($t,Pt);Nt.add(Ct)}else{const ee=new dn({uniforms:{atmosphereColor:{value:new qt(j.atmosphereColor||35071)},glowColor:{value:new qt(j.atmosphereColor||35071).multiplyScalar(1.6)},time:{value:0}},vertexShader:`
              varying vec3 vNormal;
              varying vec2 vUv;
              
              void main() {
                vNormal = normalize(normalMatrix * normal);
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,fragmentShader:`
              uniform vec3 atmosphereColor;
              uniform vec3 glowColor;
              uniform float time;
              varying vec3 vNormal;
              varying vec2 vUv;
              
              void main() {
                float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 1.5);
                float glowPulse = 0.96 + sin(time * 0.5) * 0.06;
                
                float clouds = sin(vUv.y * 10.0 + time * 0.1) * sin(vUv.x * 8.0 + time * 0.2) * 0.15;
                
                vec3 glow = mix(atmosphereColor, glowColor, intensity) * glowPulse;
                
                float edgeSoftness = smoothstep(0.0, 0.4, intensity);
                float alpha = edgeSoftness * (0.5 + clouds);
                
                gl_FragColor = vec4(glow, alpha);
              }
            `,transparent:!0,blending:Ai,side:Bn}),Kt=new $(X,ee);Nt.add(Kt)}}Ue[j.name]={mesh:Nt,container:R,data:j,angle:ct};const te=[];j.moons&&j.moons.length>0&&j.moons.forEach(X=>{const ee=new _n(X.radius,Bt/2,Bt/2);let Kt;if(j.name==="Earth"&&X.name==="Moon"&&X.textured){const re=Ii.moonmap;Kt=new vt({map:re,normalMap:re,normalScale:new ne(.5,.5),roughness:.85,metalness:0,bumpMap:re,bumpScale:.02})}else Kt=new vt({color:X.color,roughness:.7,metalness:.2,emissive:new qt(X.emissive||2236962),emissiveIntensity:.3,flatShading:!1});const $t=new $(ee,Kt),Pt=new Us(X.distance-(X.thinOrbit?.05:.1),X.distance+(X.thinOrbit?.05:.1),64),Ct=X.thinOrbit?new Jn({color:5284095,side:ze,transparent:!0,opacity:.4,blending:Ai,depthWrite:!1}):zn(),Lt=new $(Pt,Ct);Lt.rotation.x=Math.PI/2,X.inclination&&(Lt.rotation.y=X.inclination),Nt.add(Lt),Nt.add($t),te.push({mesh:$t,orbit:Lt,data:X,angle:Math.random()*Math.PI*2})}),yn[j.name]=te}),O||(()=>{const it=[],at=[],R=new $n;J.add(R);const ct=85,rt=83,Mt=10,te=[{position:87.5,width:.8},{position:90.2,width:1},{position:92.4,width:.7},{position:95.8,width:1.2},{position:99.5,width:.9}],ee=(()=>{const Pt=[],Ct=(It,Me,pe)=>{const Ee=document.createElement("canvas");Ee.width=256,Ee.height=256;const xe=Ee.getContext("2d");xe.fillStyle=It,xe.fillRect(0,0,256,256);for(let mn=0;mn<5e3;mn++){const vn=Math.random()*256,rn=Math.random()*256,Dn=Math.random()*2+.5,Gn=Math.floor(Math.random()*40-20);xe.fillStyle=Lt(It,Gn),xe.beginPath(),xe.arc(vn,rn,Dn,0,Math.PI*2),xe.fill()}for(let mn=0;mn<Me;mn++){const vn=Math.random()*256,rn=Math.random()*256,Dn=Math.random()*20+5,Gn=Math.floor(Math.random()*30-15);xe.fillStyle=Lt(It,Gn-20),xe.beginPath(),xe.arc(vn,rn,Dn,0,Math.PI*2),xe.fill()}for(let mn=0;mn<pe;mn++){const vn=Math.random()*256,rn=Math.random()*256,Dn=Math.random()*12+3,Gn=Math.floor(Math.random()*60-30);xe.fillStyle=Lt(It,Gn-30),xe.beginPath(),xe.arc(vn,rn,Dn,0,Math.PI*2),xe.fill(),xe.strokeStyle=Lt(It,15),xe.lineWidth=1,xe.beginPath(),xe.arc(vn,rn,Dn,0,Math.PI*2),xe.stroke()}const Re=new oo(Ee),fn=document.createElement("canvas");fn.width=256,fn.height=256;const $e=fn.getContext("2d");$e.fillStyle="#8080ff",$e.fillRect(0,0,256,256);for(let mn=0;mn<pe;mn++){const vn=Math.random()*256,rn=Math.random()*256,Dn=Math.random()*12+3,Gn=$e.createRadialGradient(vn,rn,0,vn,rn,Dn);Gn.addColorStop(0,"#4040ff"),Gn.addColorStop(.7,"#8080ff"),Gn.addColorStop(.9,"#c0c0ff"),Gn.addColorStop(1,"#8080ff"),$e.fillStyle=Gn,$e.beginPath(),$e.arc(vn,rn,Dn,0,Math.PI*2),$e.fill()}const Mn=new oo(fn);return{map:Re,normalMap:Mn}};function Lt(It,Me){const pe=parseInt(It.slice(1,3),16),Ee=parseInt(It.slice(3,5),16),xe=parseInt(It.slice(5,7),16);return`rgb(${Math.min(255,Math.max(0,pe+Me))}, 
                         ${Math.min(255,Math.max(0,Ee+Me))}, 
                         ${Math.min(255,Math.max(0,xe+Me))})`}const re=Ct("#e0cfa0",15,8);Pt.push(new vt({map:re.map,normalMap:re.normalMap,roughness:.95,metalness:.05,flatShading:!0,depthWrite:!0,transparent:!1}));const me=Ct("#f0ddb0",20,12);Pt.push(new vt({map:me.map,normalMap:me.normalMap,roughness:.85,metalness:.15,flatShading:!0,depthWrite:!0,transparent:!1}));const Zt=Ct("#f5e4c0",10,5);Pt.push(new vt({map:Zt.map,normalMap:Zt.normalMap,roughness:.6,metalness:.7,flatShading:!0,depthWrite:!0,transparent:!1}));const Xt=Ct("#faf0d0",12,10);return Pt.push(new vt({map:Xt.map,normalMap:Xt.normalMap,roughness:.75,metalness:.25,flatShading:!0,depthWrite:!0,transparent:!1})),Pt})(),Kt=[];for(let Pt=0;Pt<4;Pt++){const Ct=Math.random()*.3+.3;let Lt;const re=Math.floor(Math.random()*5);if(re===0)Lt=new _h(Ct,1);else if(re===1)Lt=new vh(Ct,0);else if(re===2)Lt=new cp(Ct,1);else if(re===3)Lt=new op(Ct,1);else{const Zt=new _h(Ct,0),Xt=new vh(Ct*.8,0);new L((Math.random()-.5)*Ct*.5,(Math.random()-.5)*Ct*.5,(Math.random()-.5)*Ct*.5),Lt=$t([Zt,Xt])}const me=Lt.attributes.position;for(let Zt=0;Zt<me.count;Zt++){const Xt=new L;Xt.fromBufferAttribute(me,Zt);const It=.2+Math.random()*.3;Xt.x+=(Math.random()-.5)*It*Ct,Xt.y+=(Math.random()-.5)*It*Ct,Xt.z+=(Math.random()-.5)*It*Ct,me.setXYZ(Zt,Xt.x,Xt.y,Xt.z)}me.needsUpdate=!0,Lt.computeVertexNormals(),Kt.push(Lt)}function $t(Pt){const Ct=Pt.reduce((It,Me)=>It+Me.attributes.position.count,0),Lt=new Float32Array(Ct*3),re=new Float32Array(Ct*3),me=new Float32Array(Ct*2);let Zt=0;for(let It=0;It<Pt.length;It++){const Me=Pt[It],pe=Me.attributes.position,Ee=Me.attributes.normal,xe=Me.attributes.uv;for(let Re=0;Re<pe.count;Re++)Lt[(Zt+Re)*3]=pe.getX(Re),Lt[(Zt+Re)*3+1]=pe.getY(Re),Lt[(Zt+Re)*3+2]=pe.getZ(Re),re[(Zt+Re)*3]=Ee.getX(Re),re[(Zt+Re)*3+1]=Ee.getY(Re),re[(Zt+Re)*3+2]=Ee.getZ(Re),xe&&(me[(Zt+Re)*2]=xe.getX(Re),me[(Zt+Re)*2+1]=xe.getY(Re));Zt+=pe.count}const Xt=new Fn;return Xt.setAttribute("position",new li(Lt,3)),Xt.setAttribute("normal",new li(re,3)),Xt.setAttribute("uv",new li(me,2)),Xt}for(let Pt=0;Pt<3e3;Pt++){const Ct=Kt[Math.floor(Math.random()*Kt.length)];let Lt;const re=Math.random();re<.75?Lt=0:re<.92?Lt=1:re<.99?Lt=2:Lt=3;let me=ee[Lt].clone();const Zt=new $(Ct,me);let Xt,It,Me,pe=!0;for(;pe;){const rn=Math.random(),Gn=Math.pow(Math.sin(rn*Math.PI),.5);Xt=ct+Gn*(rt-ct),pe=!1;for(const Bi of te)if(Math.abs(Xt-Bi.position)<Bi.width){pe=!0;break}if(pe&&Math.random()<.2&&(pe=!1),!pe){It=Math.random()*Math.PI*2;const Bi=(Xt-ct)/(rt-ct),La=Mt*(1-Math.pow(2*Bi-1,2));Me=(Math.random()-.5)*La;const sa=(Me+Mt/2)/Mt;sa<.25?Lt=0:sa<.5?Lt=1:sa<.75?Lt=2:Lt=3,me=ee[Lt].clone(),Zt.material=me}}if(Math.random()<.3){let rn=!1;for(let Dn=Math.max(0,Pt-100);Dn<Pt&&!rn;Dn++)at[Dn]&&Math.random()<.4&&(Xt=at[Dn].radius+(Math.random()-.5)*2,It=at[Dn].angle+(Math.random()-.5)*.3,Me=at[Dn].height+(Math.random()-.5)*1,Lt=at[Dn].type,me=ee[Lt].clone(),Zt.material=me,rn=!0)}const Ee=Xt*Math.cos(It),xe=Me,Re=Xt*Math.sin(It);Zt.position.set(Ee,xe,Re);const fn=Math.random();let $e;fn>.998?$e=Math.random()*.5+1.2:fn>.99?$e=Math.random()*.3+.9:fn>.97?$e=Math.random()*.3+.7:fn>.9?$e=Math.random()*.2+.6:fn>.7?$e=Math.random()*.2+.5:$e=Math.random()*.2+.3,Zt.scale.set($e,$e,$e),Zt.rotation.x=Math.random()*Math.PI*2,Zt.rotation.y=Math.random()*Math.PI*2,Zt.rotation.z=Math.random()*Math.PI*2;const Mn=.001*Math.pow(Xt/rt,-1.5),mn=.008/$e,vn={x:(Math.random()-.5)*mn,y:(Math.random()-.5)*mn,z:(Math.random()-.5)*mn};R.add(Zt),at.push({mesh:Zt,orbitSpeed:Mn,rotationSpeed:vn,radius:Xt,height:Me,angle:It,size:$e,type:Lt})}it.push(...at),Ve.current=it,Fe.current={mainBelt:R}})();const Bs=()=>{const j={},it=(at,Nt)=>{const R=new un;switch(at){case"adityaL1":const rt=new un,Mt=new $(new Pe(.7,.7,1),new vt({color:16777215,metalness:.8,roughness:.2,envMapIntensity:2,emissive:5592405,emissiveIntensity:.3}));rt.add(Mt);const te=new vt({color:16766720,metalness:1,roughness:.2,emissive:16746496,emissiveIntensity:.5}),X=new $(new Pe(.72,.72,1.02),te);X.position.z=0,X.scale.set(.9,.9,.3),Mt.add(X);const ee=new $(new Pe(3,.05,1.2),new vt({color:3368703,metalness:.7,roughness:.3,emissive:13260,emissiveIntensity:.6}));ee.position.set(1.8,0,0),rt.add(ee);const Kt=new un;for(let Rt=0;Rt<8;Rt++)for(let Ft=0;Ft<4;Ft++){const ue=new $(new pi(.34,.25),new vt({color:2245887,metalness:.8,roughness:.2,emissive:13311,emissiveIntensity:.5,side:ze}));ue.position.set(-1.4+Rt*.36,.03,-.55+Ft*.27),ue.rotation.x=Math.PI/2,Kt.add(ue)}ee.add(Kt);const $t=new $(new Pe(3,.05,1.2),new vt({color:3368703,metalness:.7,roughness:.3,emissive:13260,emissiveIntensity:.6}));$t.position.set(-1.8,0,0),rt.add($t);const Pt=Kt.clone();$t.add(Pt);const Ct=new $(new Le(.2,.25,.4,16),new vt({color:4473924,metalness:.6,roughness:.4,emissive:2236962,emissiveIntensity:.3}));Ct.rotation.x=Math.PI/2,Ct.position.set(0,.2,.6),rt.add(Ct);const Lt=new $(new ia(.15,16),new vt({color:0,metalness:.9,roughness:.1,emissive:0,side:ze}));Lt.position.z=.21,Lt.rotation.y=Math.PI/2,Ct.add(Lt);const re=new $(new Pe(.25,.25,.3),new vt({color:6710886,metalness:.7,roughness:.3,emissive:3355443,emissiveIntensity:.3}));re.position.set(.3,.3,.5),rt.add(re);const me=new $(new Le(.04,.04,.8,8),new vt({color:14540253,metalness:.8,roughness:.2,emissive:7829367,emissiveIntensity:.3}));me.rotation.x=Math.PI/2,me.position.set(0,-.4,.3),rt.add(me);const Zt=new $(new _n(.3,32,16,0,Math.PI*2,0,Math.PI/2),new vt({color:16777215,metalness:.8,roughness:.2,emissive:11184810,emissiveIntensity:.5,side:ze}));Zt.rotation.x=Math.PI,Zt.position.set(0,-.4,.7),rt.add(Zt);const Xt=new $(new ia(.15,16),new vt({color:16737792,emissive:16724736,emissiveIntensity:.8,side:ze}));Xt.position.set(0,.36,.51),Xt.rotation.x=Math.PI/2,rt.add(Xt);const It=new un;It.position.set(-.35,.36,.51);const Me=new $(new pi(.15,.1),new Jn({side:ze}));Me.rotation.x=Math.PI/2;const pe=new $(new pi(.15,.033),new Jn({color:16750899,side:ze,emissive:16737792,emissiveIntensity:.5}));pe.position.y=.033,pe.rotation.x=Math.PI/2;const Ee=new $(new pi(.15,.033),new Jn({color:16777215,side:ze,emissive:11184810,emissiveIntensity:.3}));Ee.rotation.x=Math.PI/2;const xe=new $(new pi(.15,.033),new Jn({color:1280008,side:ze,emissive:678916,emissiveIntensity:.5}));xe.position.y=-.033,xe.rotation.x=Math.PI/2,It.add(pe),It.add(Ee),It.add(xe),rt.add(It);const Re=new yi(4500223,2,8);Re.position.set(0,0,0),rt.add(Re);const fn=new yi(16755268,1.5,5);fn.position.set(0,0,.7),rt.add(fn);const $e=new $(new _n(1,16,16),new Jn({color:4491519,transparent:!0,opacity:.1,side:Bn}));rt.add($e),R.add(rt);break;case"mangalyaan":const Mn=new $(new Pe(.6,.4,.8),new vt({color:16766720,metalness:.9,roughness:.2,emissive:11171584,emissiveIntensity:.4,envMapIntensity:2}));R.add(Mn);const mn=new vt({color:16763972,metalness:1,roughness:.2,emissive:14522624,emissiveIntensity:.5}),vn=new $(new Pe(.55,.35,.75),mn);vn.position.y=.01,R.add(vn);const rn=new $(new Pe(1.5,.05,.6),new vt({color:3368703,metalness:.7,roughness:.3,emissive:13260,emissiveIntensity:.6}));rn.position.set(1,0,0),R.add(rn);const Dn=new $(new Pe(1.5,.05,.6),new vt({color:3368703,metalness:.7,roughness:.3,emissive:13260,emissiveIntensity:.6}));Dn.position.set(-1,0,0),R.add(Dn);const Gn=new un;for(let Rt=0;Rt<5;Rt++)for(let Ft=0;Ft<3;Ft++){const ue=new $(new pi(.25,.15),new vt({color:2245887,metalness:.8,roughness:.2,emissive:13311,emissiveIntensity:.5,side:ze}));ue.position.set(-.6+Rt*.27,.03,-.3+Ft*.17),ue.rotation.x=Math.PI/2,Gn.add(ue)}rn.add(Gn);const Bi=Gn.clone();Dn.add(Bi);const La=new $(new Le(.2,.2,.15,16),new vt({color:16763904,metalness:1,roughness:.1,emissive:16746496,emissiveIntensity:.5}));La.position.y=.3,R.add(La);const sa=new $(new _n(.35,32,16,0,Math.PI*2,0,Math.PI/2),new vt({color:16766720,metalness:1,roughness:.1,emissive:16755200,emissiveIntensity:.3,side:ze}));sa.scale.set(1,1,.2),sa.position.set(0,.5,.2),sa.rotation.x=Math.PI,R.add(sa);const ns=new $(new ia(.15,16),new vt({color:16737792,emissive:16724736,emissiveIntensity:.8,side:ze}));ns.position.set(0,0,.41),ns.rotation.x=Math.PI/2,R.add(ns);const Fi=new un;Fi.position.set(-.3,0,.41);const wr=new $(new pi(.15,.05),new Jn({color:16750899,side:ze,emissive:16737792,emissiveIntensity:.5}));wr.position.y=.05,wr.rotation.x=Math.PI/2,Fi.add(wr);const Tr=new $(new pi(.15,.05),new Jn({color:16777215,side:ze,emissive:11184810,emissiveIntensity:.3}));Tr.rotation.x=Math.PI/2,Fi.add(Tr);const Mo=new $(new pi(.15,.05),new Jn({color:1280008,side:ze,emissive:678916,emissiveIntensity:.5}));Mo.position.y=-.05,Mo.rotation.x=Math.PI/2,Fi.add(Mo),R.add(Fi);const Ar=new $(new Pe(.25,.1,.15),new vt({color:14531447,metalness:.8,roughness:.2,emissive:10048785,emissiveIntensity:.3}));Ar.position.set(.25,.15,.35),R.add(Ar);const Cr=new yi(16763972,2.5,6);Cr.position.set(0,0,0),R.add(Cr);const vu=new _n(1,16,16),Mi=new Jn({color:16768341,transparent:!0,opacity:.15,side:Bn}),is=new $(vu,Mi);R.add(is);break;case"voyager":const So=new Pe(.7,.3,1.2),Rr=new vt({color:16769126,metalness:.9,roughness:.2,emissive:11171584,emissiveIntensity:.4,envMapIntensity:2.5}),Sh=new $(So,Rr);R.add(Sh);const Wl=new vt({color:16766720,metalness:1,roughness:.2,emissive:14522624,emissiveIntensity:.5}),bo=new $(new Pe(.65,.25,1.1),Wl);bo.position.y=.01,R.add(bo);const Dr=new _n(1,32,32,0,Math.PI*2,0,Math.PI/2),Eo=new vt({color:16774880,metalness:.9,roughness:.1,side:ze,emissive:14531447,emissiveIntensity:.5}),Pr=new $(Dr,Eo);Pr.rotation.x=Math.PI/2,Pr.position.z=.7,Pr.scale.set(1.2,1.2,.3),R.add(Pr);const wo=new $(new _n(.95,32,32,0,Math.PI*2,0,Math.PI/2),new vt({color:16776166,metalness:.9,roughness:.1,side:ze,emissive:11180373,emissiveIntensity:.3}));wo.position.z=.65,wo.rotation.x=Math.PI/2,wo.scale.set(1,1,.25),R.add(wo);for(let Rt=0;Rt<4;Rt++){const Ft=Rt/4*Math.PI*2,ue=new $(new Le(.015,.015,.35,8),new vt({color:13417352,metalness:.9,roughness:.2,emissive:10057557,emissiveIntensity:.3}));ue.position.set(Math.cos(Ft)*.4,Math.sin(Ft)*.4,.45),ue.rotation.x=Math.PI/6,R.add(ue)}const jl=new $(new Le(.1,.15,.2,16),new vt({color:15127992,metalness:.8,roughness:.2,emissive:11180390,emissiveIntensity:.3}));jl.rotation.x=Math.PI/2,jl.position.z=.55,R.add(jl);const ql=new $(new Le(.04,.04,2,12),new vt({color:14535833,metalness:.7,roughness:.3,emissive:10057557,emissiveIntensity:.2}));ql.rotation.z=Math.PI/2,ql.position.x=-1.1,R.add(ql);const Fs=new $(new Le(.12,.12,.6,24),new vt({color:14528623,metalness:.9,roughness:.2,emissive:8930304,emissiveIntensity:.3}));Fs.position.set(-1.9,0,0),Fs.rotation.z=Math.PI/2,R.add(Fs);for(let Rt=0;Rt<18;Rt++){const Ft=new $(new Pe(.08,.5,.015),new vt({color:13938487,metalness:.9,roughness:.2,emissive:5583616,emissiveIntensity:.3}));Ft.position.set(-1.9,0,0),Ft.rotation.z=Math.PI/2,Ft.rotation.y=Rt/18*Math.PI*2,Fs.add(Ft)}const _u=new $(new _n(.08,16,16),new vt({color:16746496,emissive:16733440,emissiveIntensity:2}));_u.position.set(-2.2,0,0),R.add(_u);const Yl=new $(new Le(.03,.03,2.2,12),new vt({color:14535833,metalness:.7,roughness:.3,emissive:10057557,emissiveIntensity:.2}));Yl.position.set(1,0,0),Yl.rotation.z=Math.PI/2,R.add(Yl);const Oa=new un;Oa.position.set(2,0,0);const bh=new $(new Pe(.3,.3,.3),new vt({color:12628096,metalness:.7,roughness:.2,emissive:8939059,emissiveIntensity:.2}));Oa.add(bh);const Zl=new $(new Le(.1,.12,.2,16),new vt({color:13280370,metalness:.6,roughness:.3,emissive:7820595,emissiveIntensity:.2}));Zl.rotation.x=Math.PI/2,Zl.position.set(.1,.2,.2),Oa.add(Zl);const To=new $(new Le(.08,.1,.15,16),new vt({color:13940330,metalness:.6,roughness:.3,emissive:8939042,emissiveIntensity:.2}));To.rotation.x=Math.PI/2,To.position.set(0,0,.25),Oa.add(To);const Ao=new $(new Le(.07,.09,.13,16),new vt({color:13940330,metalness:.6,roughness:.3,emissive:8939042,emissiveIntensity:.2}));Ao.rotation.x=Math.PI/2,Ao.rotation.z=Math.PI/6,Ao.position.set(.15,.05,.2),Oa.add(Ao);const Kl=new $(new ia(.065,24),new vt({color:8900331,metalness:.9,roughness:.1,emissive:6591981,emissiveIntensity:1}));Kl.position.set(0,0,.33),Kl.rotation.x=Math.PI/2,Oa.add(Kl);const Co=new $(new ia(.055,24),new vt({color:8900331,metalness:.9,roughness:.1,emissive:6591981,emissiveIntensity:1}));Co.position.set(.15,.05,.27),Co.rotation.x=Math.PI/2,Co.rotation.z=Math.PI/6,Oa.add(Co),R.add(Oa);const Ql=new $(new Le(.01,.01,.8,8),new vt({color:15125657,metalness:.8,roughness:.3,emissive:10057557,emissiveIntensity:.2}));Ql.position.set(0,.3,-.3),Ql.rotation.x=Math.PI/4,R.add(Ql);const Ur=new $(new Le(.01,.01,.8,8),new vt({color:15125657,metalness:.8,roughness:.3,emissive:10057557,emissiveIntensity:.2}));Ur.position.set(0,-.3,-.3),Ur.rotation.x=-Math.PI/4,R.add(Ur);const xu=new yi(16746496,3,5);xu.position.set(-1.9,0,0),R.add(xu);const yu=new yi(16764006,1,4);yu.position.set(0,0,0),R.add(yu);const Mu=new yi(16777164,.7,2.5);Mu.position.set(.3,.2,.3),R.add(Mu);break;case"newHorizons":const Jl=new $(new Le(.55,.55,.8,24),new vt({color:16770688,metalness:.7,roughness:.3,emissive:10057523,emissiveIntensity:.4,envMapIntensity:1.5}));Jl.position.y=.1,R.add(Jl);const Su=new $(new Le(.56,.56,.4,24),new vt({color:16765488,metalness:.5,roughness:.5,emissive:13399808,emissiveIntensity:.4}));Su.position.y=.2,R.add(Su);const Eh=new vt({color:16766720,metalness:.9,roughness:.3,emissive:11171584,emissiveIntensity:.5}),bu=new $(new Le(.54,.54,.78,24),Eh);bu.position.y=.1,R.add(bu);const wh=new _n(.9,32,16,0,Math.PI*2,0,Math.PI/2),Th=new vt({color:16770726,metalness:1,roughness:.1,side:ze,emissive:13938487,emissiveIntensity:.3}),Ro=new $(wh,Th);Ro.scale.set(1.2,1.2,.2),Ro.position.y=.55,Ro.rotation.x=-Math.PI/2,R.add(Ro);for(let Rt=0;Rt<12;Rt++){const Ft=Rt/12*Math.PI*2,ue=new $(new Pe(.02,.01,.9),new vt({color:15127947,metalness:.8,roughness:.2,emissive:11180390,emissiveIntensity:.2}));ue.position.y=.54,ue.rotation.x=-Math.PI/2,ue.rotation.z=Ft,R.add(ue)}for(let Rt=.2;Rt<.9;Rt+=.2){const Ft=new $(new Us(Rt,Rt+.02,32),new vt({color:15125657,metalness:.8,roughness:.2,emissive:13938487,emissiveIntensity:.2,side:ze}));Ft.position.y=.53,Ft.rotation.x=-Math.PI/2,R.add(Ft)}const Eu=new $(new Le(.06,.12,.18,16),new vt({color:14270583,metalness:.9,roughness:.2,emissive:10057540,emissiveIntensity:.2}));Eu.position.y=.4,R.add(Eu);const wu=new $(new Pe(.4,.5,.4),new vt({color:13938487,metalness:.8,roughness:.2,emissive:10053120,emissiveIntensity:.2}));wu.position.set(-.7,-.15,0),R.add(wu);for(let Rt=0;Rt<8;Rt++){const Ft=new $(new Pe(.4,.5,.03),new vt({color:12626528,metalness:.9,roughness:.2,emissive:8939042,emissiveIntensity:.2}));Ft.position.set(-.7,-.15,0),Ft.rotation.y=Rt/8*Math.PI,R.add(Ft)}const Tu=new yi(16750899,3,5);Tu.position.set(-.7,-.15,0),R.add(Tu);const as=new un;as.position.set(0,.2,.4);const za=new $(new Le(.08,.08,.3,16),new vt({color:15124874,metalness:.7,roughness:.3,emissive:10057540,emissiveIntensity:.2}));za.rotation.x=Math.PI/2,za.position.z=.15,as.add(za);const $l=new $(new ia(.06,24),new vt({color:8900331,metalness:.9,roughness:.1,emissive:6591981,emissiveIntensity:.3}));$l.position.z=.31,$l.rotation.x=Math.PI/2,za.add($l);const Do=new $(new Pe(.15,.15,.2),new vt({color:15125648,metalness:.7,roughness:.3,emissive:10057540,emissiveIntensity:.2}));Do.position.set(.2,.1,0),as.add(Do);const Po=new $(new ia(.05,16),new vt({color:8900331,metalness:.9,roughness:.1,emissive:6591981,emissiveIntensity:.3,side:ze}));Po.position.z=.11,Po.rotation.x=Math.PI/2,Do.add(Po);const tc=new $(new Pe(.12,.12,.15),new vt({color:14270583,metalness:.7,roughness:.3,emissive:10057540,emissiveIntensity:.2}));tc.position.set(-.2,.05,0),as.add(tc),R.add(as);const Uo=new $(new Le(.04,.05,.1,12),new vt({color:13218155,metalness:.6,roughness:.3,emissive:10057540,emissiveIntensity:.2}));Uo.position.set(.4,.2,0),Uo.rotation.z=Math.PI/2,R.add(Uo),[{x:0,y:-.3,z:.4},{x:0,y:-.3,z:-.4},{x:.4,y:-.3,z:0},{x:-.4,y:-.3,z:0}].forEach(Rt=>{const Ft=new $(new Le(.06,.08,.12,12),new vt({color:12626032,metalness:.9,roughness:.2,emissive:10057540,emissiveIntensity:.2}));Ft.position.set(Rt.x,Rt.y,Rt.z),Ft.rotation.x=Math.PI/2,R.add(Ft)});const ss=new yi(16766720,1.2,4);ss.position.set(0,0,0),R.add(ss);const Au=new yi(16777164,.8,3);Au.position.set(.2,.3,.2),R.add(Au);break;case"parker":const Ch=new $(new Pe(.4,.4,.5),new vt({color:16777215,metalness:.7,roughness:.3,envMapIntensity:1.5}));R.add(Ch);const Rh=new Le(1,1,.1,32),Cu=new vt({color:2236962,metalness:.2,roughness:.9,emissive:3342336,emissiveIntensity:.3}),No=new $(Rh,Cu);No.rotation.x=Math.PI/2,No.position.z=-.4,R.add(No);const rs=new $(new Us(.4,.95,32),new vt({color:4473924,metalness:.3,roughness:.8,side:ze,emissive:2228224,emissiveIntensity:.2}));rs.position.z=-.39,rs.rotation.x=Math.PI/2,R.add(rs);for(let Rt=0;Rt<8;Rt++){const Ft=Rt/8*Math.PI*2,ue=.7,Xe=new $(new up(ue,.02,8,12,Math.PI/4),new vt({color:5592405,metalness:.7,roughness:.3}));Xe.position.z=-.35,Xe.rotation.x=Math.PI/2,Xe.rotation.z=Ft,R.add(Xe)}const Hs=new $(new Pe(2,.05,.6),new vt({color:8947848,metalness:.9,roughness:.3}));Hs.position.x=1.1,R.add(Hs);const Lo=new $(new Pe(1.9,.02,.5),new vt({color:2245802,metalness:.7,roughness:.3,emissive:4403,emissiveIntensity:.3}));Lo.position.x=1.1,Lo.position.y=.02,R.add(Lo);const Nr=new un;for(let Rt=0;Rt<10;Rt++)for(let Ft=0;Ft<5;Ft++){const ue=new $(new pi(.17,.09),new vt({color:1127338,metalness:.8,roughness:.2,emissive:4403,emissiveIntensity:.2,side:ze}));ue.position.set(-.85+Rt*.19,0,-.2+Ft*.1),ue.rotation.x=Math.PI/2,Nr.add(ue)}Lo.add(Nr);const ec=new $(new Pe(2,.05,.6),new vt({color:8947848,metalness:.9,roughness:.3}));ec.position.x=-1.1,R.add(ec);const Lr=new $(new Pe(1.9,.02,.5),new vt({color:2245802,metalness:.7,roughness:.3,emissive:4403,emissiveIntensity:.3}));Lr.position.x=-1.1,Lr.position.y=.02,R.add(Lr);const Oo=new un;for(let Rt=0;Rt<10;Rt++)for(let Ft=0;Ft<5;Ft++){const ue=new $(new pi(.17,.09),new vt({color:1127338,metalness:.8,roughness:.2,emissive:4403,emissiveIntensity:.2,side:ze}));ue.position.set(-.85+Rt*.19,0,-.2+Ft*.1),ue.rotation.x=Math.PI/2,Oo.add(ue)}Lr.add(Oo);const _a=new un;_a.position.set(0,.3,0);const Ru=new $(new Le(.08,.08,.15,16),new vt({color:13421772,metalness:.8,roughness:.2}));_a.add(Ru);const Or=new $(new _n(.15,16,8,0,Math.PI*2,0,Math.PI/2),new vt({color:16777215,metalness:.7,roughness:.3,side:ze}));Or.scale.set(1,1,.2),Or.position.y=.15,Or.rotation.x=-Math.PI/2,_a.add(Or);const nc=new $(new Pe(.1,.1,.15),new vt({color:2236962,metalness:.7,roughness:.3}));nc.position.set(.2,0,.2),_a.add(nc);const Du=new $(new Pe(.3,.05,.2),new vt({color:16777215,metalness:.8,roughness:.2,emissive:3355443,emissiveIntensity:.1}));Du.position.set(-.2,-.05,.15),_a.add(Du);for(let Rt=0;Rt<5;Rt++){const Ft=new $(new Pe(.28,.01,.02),new vt({color:14540253,metalness:.9,roughness:.1}));Ft.position.set(-.2,-.05,.15-.04*Rt),_a.add(Ft)}R.add(_a);for(let Rt=0;Rt<4;Rt++){const Ft=Rt/4*Math.PI*2,ue=Math.cos(Ft)*.5,Xe=Math.sin(Ft)*.5,tn=new $(new Le(.02,.02,.5,8),new vt({color:8947848,metalness:.7,roughness:.3}));tn.position.set(ue,Xe,-.15),tn.rotation.x=Math.PI/6,R.add(tn)}const Pu=new yi(16729088,.8,1.5);Pu.position.set(0,0,-.5),R.add(Pu);break;case"jwst":const Dh=new $(new Pe(.5,.5,.9),new vt({color:14540253,metalness:.8,roughness:.2,envMapIntensity:1.5}));R.add(Dh);const Uu=new $(new Pe(.45,.45,.85),new vt({color:15257968,metalness:1,roughness:.2,emissive:5587968,emissiveIntensity:.1}));Uu.position.y=.01,R.add(Uu);const ic=new un;ic.position.set(0,0,.65);const Ri=new Le(.08,.08,.05,6),zr=new vt({color:16766720,metalness:1,roughness:.05,emissive:6706432,emissiveIntensity:.2,envMapIntensity:2.5}),zo=[[0,0],[.17,0],[.085,.147],[-.085,.147],[-.17,0],[-.085,-.147],[.085,-.147],[.34,0],[.255,.147],[.17,.294],[.085,.441],[0,.294],[-.085,.441],[-.17,.294],[-.255,.147],[-.34,0],[-.255,-.147],[-.17,-.294],[-.085,-.441],[0,-.294],[.085,-.441],[.17,-.294],[.255,-.147]];for(let Rt=0;Rt<zo.length;Rt++){const Ft=new $(Ri,zr);Ft.position.set(zo[Rt][0],zo[Rt][1],0),Ft.rotation.x=-Math.PI/2;const ue=new $(new Le(.075,.075,.01,6),new Jn({color:16777215,transparent:!0,opacity:.3}));ue.position.z=.026,Ft.add(ue),ic.add(Ft)}R.add(ic);const ac=new $(new Pe(.03,.03,1.2),new vt({color:13421772,metalness:.8,roughness:.2}));ac.position.z=1.2,R.add(ac);const Ir=new $(new Le(.015,.015,.8,6),new vt({color:10066329,metalness:.8,roughness:.2}));Ir.position.set(.2,.2,1),Ir.rotation.x=Math.PI/6,Ir.rotation.z=-Math.PI/8,R.add(Ir);const Br=new $(new Le(.015,.015,.8,6),new vt({color:10066329,metalness:.8,roughness:.2}));Br.position.set(-.2,.2,1),Br.rotation.x=Math.PI/6,Br.rotation.z=Math.PI/8,R.add(Br);const Fr=new $(new Le(.015,.015,.8,6),new vt({color:10066329,metalness:.8,roughness:.2}));Fr.position.set(0,-.2,1),Fr.rotation.x=-Math.PI/6,R.add(Fr);const sc=new $(new Le(.12,.12,.03,16),new vt({color:16766720,metalness:1,roughness:.05,emissive:6706432,emissiveIntensity:.2,side:ze}));sc.position.set(0,0,1.8),sc.rotation.x=-Math.PI/2,R.add(sc);const Io=new un;Io.position.set(0,-1,0),Io.rotation.x=Math.PI/2;const os=[14535850,15654314,16772795,16777164,16777198],ra=new K_;ra.moveTo(-1,-1),ra.lineTo(1,-1),ra.lineTo(1.2,0),ra.lineTo(1,1),ra.lineTo(-1,1),ra.lineTo(-1.2,0),ra.lineTo(-1,-1);for(let Rt=0;Rt<5;Rt++){const Ft=new $(new lp(ra),new vt({color:os[Rt],metalness:.4,roughness:.6,side:ze,transparent:!0,opacity:.95,emissive:os[Rt],emissiveIntensity:.05}));Ft.position.z=Rt*.025,Ft.rotation.z=(Math.random()-.5)*.05,Ft.position.x=(Math.random()-.5)*.02,Ft.position.y=(Math.random()-.5)*.02,Io.add(Ft)}R.add(Io);for(let Rt=0;Rt<2;Rt++){const Ft=Rt===0?-.8:.8,ue=new $(new Le(.02,.02,2,8),new vt({color:8947848,metalness:.7,roughness:.3}));ue.position.set(Ft,-.5,0),ue.rotation.x=Math.PI/2,R.add(ue)}const ls=new $(new Pe(.7,.02,.7),new vt({color:2245802,metalness:.7,roughness:.3,emissive:4403,emissiveIntensity:.3}));ls.position.y=-.6,R.add(ls);const Bo=new un;for(let Rt=0;Rt<5;Rt++)for(let Ft=0;Ft<5;Ft++){const ue=new $(new pi(.12,.12),new vt({color:1127338,metalness:.8,roughness:.2,emissive:4403,emissiveIntensity:.2,side:ze}));ue.position.set(-.3+Rt*.13,.015,-.3+Ft*.13),ue.rotation.x=-Math.PI/2,Bo.add(ue)}ls.add(Bo);const rc=new yi(16777164,.3,3);rc.position.set(0,0,.2),R.add(rc);break;case"iss":const Ia=new $(new Pe(3.5,.15,.15),new vt({color:13421772,metalness:.9,roughness:.2,envMapIntensity:1.5}));R.add(Ia);const Gs=Rt=>{const Ft=new un;Ft.position.x=Rt;const ue=new $(new Le(.015,.015,.3,8),new vt({color:11184810,metalness:.9,roughness:.2}));ue.position.set(0,0,.1),Ft.add(ue);const Xe=new $(new Le(.015,.015,.3,8),new vt({color:11184810,metalness:.9,roughness:.2}));Xe.position.set(0,0,-.1),Ft.add(Xe);const tn=new $(new Le(.008,.008,.3,8),new vt({color:10066329,metalness:.9,roughness:.3}));tn.rotation.x=Math.PI/4,Ft.add(tn);const Sn=new $(new Le(.008,.008,.3,8),new vt({color:10066329,metalness:.9,roughness:.3}));return Sn.rotation.x=-Math.PI/4,Ft.add(Sn),Ft};for(let Rt=-1.6;Rt<=1.6;Rt+=.4)Ia.add(Gs(Rt));const Vs=[{x:-1.2,y:0,z:0,type:"cylinder",scale:1,color:14540253},{x:-.6,y:0,z:0,type:"cylinder",scale:.9,color:13421772},{x:0,y:0,z:0,type:"sphere",scale:1.2,color:15658734},{x:.6,y:.1,z:0,type:"cylinder",scale:.95,color:12303291},{x:1.2,y:0,z:0,type:"cylinder",scale:1,color:14540253}];Vs.forEach(({x:Rt,y:Ft,z:ue,type:Xe,scale:tn,color:Sn},Vn)=>{let Ui;Xe==="cylinder"?Ui=new Le(.2*tn,.2*tn,.5,24):Ui=new _n(.25*tn,24,24);const ka=new vt({color:Sn,metalness:.8,roughness:.3,envMapIntensity:1.5}),Si=new $(Ui,ka);if(Xe==="cylinder"&&(Si.rotation.z=Math.PI/2),Si.position.set(Rt,Ft,ue),Vn>0){const In=new $(new Le(.1,.1,.1,16),new vt({color:6710886,metalness:.7,roughness:.4}));In.rotation.z=Math.PI/2,In.position.x=(Rt+Vs[Vn-1].x)/2,In.position.y=(Ft+Vs[Vn-1].y)/2,In.scale.x=Math.abs(Rt-Vs[Vn-1].x)*1.5,R.add(In)}const Xa=new $(new Le(.07,.07,.08,16),new vt({color:4473924,metalness:.6,roughness:.4}));if(Xa.rotation.x=Math.PI/2,Xa.position.z=.3,Si.add(Xa),Xe==="cylinder")for(let In=0;In<2;In++){const vi=new $(new ia(.04,16),new vt({color:8965375,metalness:.9,roughness:.1,emissive:4487082,emissiveIntensity:.5,side:ze}));vi.position.y=.1-In*.2,vi.rotation.y=Math.PI/2,vi.position.x=.2,Si.add(vi);const Wi=new yi(13426175,.2,.3);Wi.position.set(.2,.1-In*.2,0),Si.add(Wi)}if(Vn%2===0)for(let In=0;In<4;In++){const vi=In/4*Math.PI*2,Wi=new $(new Pe(.15,.01,.02),new vt({color:16777215,metalness:.7,roughness:.3}));Wi.position.set(Xe==="cylinder"?0:Math.cos(vi)*.25*tn,Math.sin(vi)*.2*tn,Xe==="cylinder"?Math.sin(vi)*.2*tn:0),Wi.rotation.x=Xe==="cylinder"?0:-vi,Wi.rotation.z=Xe==="cylinder"?vi:0,Si.add(Wi)}R.add(Si)});const Nu=[-2,-1.6,1.6,2],cs=[.6,-.6];Nu.forEach(Rt=>{cs.forEach(Ft=>{const ue=new un;ue.position.set(Rt,0,0),R.add(ue);const Xe=new $(new _n(.06,16,16),new vt({color:8947848,metalness:.9,roughness:.2}));ue.add(Xe);const tn=new $(new Pe(.1,.1,.7),new vt({color:10066329,metalness:.8,roughness:.2}));tn.position.set(0,0,Ft/2),ue.add(tn);const Sn=new $(new _n(.05,16,16),new vt({color:8947848,metalness:.9,roughness:.2}));Sn.position.set(0,0,Ft),ue.add(Sn);const Vn=new $(new Pe(.65,.05,.05),new vt({color:7829367,metalness:.9,roughness:.2}));Vn.position.set(0,0,Ft),ue.add(Vn);const Ui=new $(new Pe(.6,.02,.4),new vt({color:2245802,metalness:.7,roughness:.3,emissive:4403,emissiveIntensity:.4,side:ze}));Ui.position.set(0,0,Ft),Ui.rotation.y=Math.PI/2;const ka=new un;for(let Xa=0;Xa<12;Xa++)for(let In=0;In<8;In++){const vi=new $(new pi(.045,.045),new Jn({color:13226,side:ze}));vi.position.set(-.27+Xa*.05,.011,-.18+In*.05),vi.rotation.x=Math.PI/2,ka.add(vi)}Ui.add(ka);const Si=new $(new pi(.58,.38),new Jn({color:22015,transparent:!0,opacity:.15,side:ze}));Si.position.set(0,.011,0),Si.rotation.x=Math.PI/2,Ui.add(Si),ue.add(Ui)})}),[-.9,.9].forEach(Rt=>{const Ft=new $(new Pe(.5,.01,.4),new vt({color:16777215,metalness:.5,roughness:.4,side:ze,emissive:5592405,emissiveIntensity:.1}));Ft.position.set(Rt,-.2,0),Ft.rotation.x=Math.PI/2;const ue=new un;for(let Xe=0;Xe<8;Xe++){const tn=new $(new Pe(.5,.005,.002),new Jn({color:13421772}));tn.position.y=.006,tn.position.z=-.18+Xe*.05,ue.add(tn)}Ft.add(ue),R.add(Ft)});const Fo=(Rt,Ft,ue)=>{const Xe=new yi(ue,.7,.4);Xe.position.set(Rt,0,Ft);const tn=new $(new _n(.02,8,8),new Jn({color:ue,emissive:ue,emissiveIntensity:.8}));tn.position.set(Rt,0,Ft),R.add(tn);const Sn=.5+Math.random()*1,Vn=()=>{const Ui=Date.now()*.001,ka=.5+.5*Math.sin(Ui*Sn);Xe.intensity=.3+ka*.5,tn.material.emissiveIntensity=.4+ka*.6,requestAnimationFrame(Vn)};Vn(),R.add(Xe)};Fo(-1.7,0,16711680),Fo(1.7,0,65280),Fo(0,.2,16777215);const xa=new un;xa.position.set(.4,.1,.3);const Uh=new $(new _n(.05,16,16),new vt({color:16777215,metalness:.7,roughness:.3}));xa.add(Uh);const oc=new $(new Le(.02,.02,.5,8),new vt({color:16777215,metalness:.7,roughness:.3}));oc.position.set(0,0,.25),oc.rotation.x=Math.PI/2,xa.add(oc);const Lu=new $(new _n(.04,16,16),new vt({color:16777215,metalness:.7,roughness:.3}));Lu.position.set(0,0,.5),xa.add(Lu);const Ho=new $(new Le(.018,.018,.4,8),new vt({color:16777215,metalness:.7,roughness:.3}));Ho.position.set(0,-.2,.5),Ho.rotation.x=-Math.PI/4,xa.add(Ho);const lc=new $(new _n(.035,16,16),new vt({color:16777215,metalness:.7,roughness:.3}));lc.position.set(0,-.4,.3),xa.add(lc);const Hr=new un;Hr.position.set(0,-.4,.3);const Hi=new $(new Le(.03,.025,.08,8),new vt({color:14540253,metalness:.7,roughness:.3}));Hi.rotation.x=Math.PI/2,Hr.add(Hi),[-1,1].forEach(Rt=>{const Ft=new $(new Pe(.01,.06,.02),new vt({color:8947848,metalness:.8,roughness:.2}));Ft.position.set(Rt*.02,0,.06),Hr.add(Ft)}),xa.add(Hr),R.add(xa);break;case"rover":const Di=new $(new Pe(.4,.15,.5),new vt({color:14540253,metalness:.7,roughness:.3,envMapIntensity:1}));Di.position.y=.2,R.add(Di);const us=new $(new Pe(.35,.08,.45),new vt({color:13421772,metalness:.8,roughness:.2}));us.position.y=.25,R.add(us);const Gr=new $(new Le(.06,.06,.2,12),new vt({color:7829367,metalness:.8,roughness:.2}));Gr.position.set(-.22,.2,-.2),R.add(Gr);for(let Rt=0;Rt<8;Rt++){const Ft=new $(new Pe(.15,.01,.04),new vt({color:6710886,metalness:.7,roughness:.3}));Ft.position.y=.2,Ft.rotation.y=Rt/8*Math.PI*2,Gr.add(Ft)}const Vr=new yi(16738816,.4,.3);Vr.position.set(-.22,.2,-.2),R.add(Vr),[[-.22,.12,.22],[-.22,.12,-.22],[0,.12,.22],[0,.12,-.22],[.22,.12,.22],[.22,.12,-.22]].forEach(Rt=>{const Ft=new un;Ft.position.set(Rt[0],Rt[1],Rt[2]);const ue=new $(new Le(.1,.1,.05,16),new vt({color:3355443,metalness:.5,roughness:.7,envMapIntensity:.8}));ue.rotation.z=Math.PI/2,Ft.add(ue);for(let Sn=0;Sn<12;Sn++){const Vn=new $(new Pe(.06,.11,.02),new vt({color:2236962,metalness:.6,roughness:.6}));Vn.rotation.z=Sn/12*Math.PI*2,Vn.position.x=Math.sin(Sn/12*Math.PI*2)*.1,Vn.position.y=Math.cos(Sn/12*Math.PI*2)*.1,ue.add(Vn)}const Xe=new $(new ia(.06,12),new vt({color:5592405,metalness:.8,roughness:.3,side:ze}));Xe.rotation.y=Math.PI/2,Xe.position.x=.025,ue.add(Xe);const tn=new $(new Pe(.1,.02,.02),new vt({color:6710886,metalness:.7,roughness:.4}));tn.position.x=-.05,tn.position.y=.05,Ft.add(tn),R.add(Ft)});const Go=new $(new Le(.02,.025,.3,8),new vt({color:10066329,metalness:.7,roughness:.3}));Go.position.set(0,.35,0),R.add(Go);const ya=new $(new Pe(.1,.08,.08),new vt({color:3355443,metalness:.7,roughness:.3}));ya.position.set(0,.5,0),R.add(ya);const Vo=new $(new Le(.015,.015,.02,16),new vt({color:1118481,metalness:.8,roughness:.2,emissive:2236962,emissiveIntensity:.2}));Vo.rotation.x=Math.PI/2,Vo.position.set(-.03,.5,.05),R.add(Vo);const ks=new $(new Le(.015,.015,.02,16),new vt({color:1118481,metalness:.8,roughness:.2,emissive:2236962,emissiveIntensity:.2}));ks.rotation.x=Math.PI/2,ks.position.set(.03,.5,.05),R.add(ks);const Ba=new $(new Pe(.3,.01,.3),new vt({color:2245802,metalness:.7,roughness:.3,emissive:4403,emissiveIntensity:.2,side:ze}));Ba.position.set(0,.35,.15),Ba.rotation.x=-Math.PI/6,R.add(Ba);const Fa=new un;Fa.position.set(.2,.25,.1);const Gi=new $(new Le(.02,.03,.04,8),new vt({color:8947848,metalness:.7,roughness:.3}));Fa.add(Gi);const Ha=new $(new Pe(.15,.02,.02),new vt({color:7829367,metalness:.8,roughness:.2}));Ha.position.x=.08,Ha.position.y=.05,Fa.add(Ha);const Ga=new $(new _n(.02,8,8),new vt({color:6710886,metalness:.6,roughness:.4}));Ga.position.x=.16,Ga.position.y=.05,Fa.add(Ga);const fs=new $(new Pe(.12,.02,.02),new vt({color:7829367,metalness:.8,roughness:.2}));fs.position.x=.16,fs.position.y=.12,fs.rotation.z=Math.PI/3,Fa.add(fs);const Xs=new $(new Pe(.04,.04,.03),new vt({color:4473924,metalness:.7,roughness:.3}));Xs.position.x=.23,Xs.position.y=.18,Fa.add(Xs),R.add(Fa);break;case"cassini":const Vi=new $(new Le(.2,.2,.4,16),new vt({color:14540253,metalness:.7,roughness:.3,envMapIntensity:1.2}));R.add(Vi);const ki=new _n(.4,32,16,0,Math.PI*2,0,Math.PI/2),hs=new vt({color:15658734,metalness:.8,roughness:.2,side:ze}),Xi=new $(ki,hs);Xi.scale.set(1,1,.2),Xi.position.y=.35,Xi.rotation.x=Math.PI,R.add(Xi);const Zi=new $(new ia(.38,32),new vt({color:14540253,metalness:.7,roughness:.3,side:ze}));Zi.position.y=.32,Zi.rotation.x=Math.PI,R.add(Zi);const Va=new $(new Le(.03,.02,.1,8),new vt({color:10066329,metalness:.8,roughness:.2}));Va.position.y=.22,R.add(Va),[[.3,-.1,0],[-.3,-.1,0]].forEach((Rt,Ft)=>{const ue=new $(new Le(.02,.02,.6,8),new vt({color:10066329,metalness:.7,roughness:.3}));ue.rotation.z=Math.PI/2,ue.position.set(Rt[0],Rt[1],Rt[2]),R.add(ue);const Xe=new $(new Le(.05,.05,.3,12),new vt({color:6710886,metalness:.7,roughness:.3}));Xe.position.set(Rt[0]+(Ft===0?.35:-.35),Rt[1],Rt[2]),Xe.rotation.z=Math.PI/2,R.add(Xe);for(let Sn=0;Sn<8;Sn++){const Vn=new $(new Pe(.15,.01,.04),new vt({color:5592405,metalness:.8,roughness:.2}));Vn.position.y=0,Vn.rotation.y=Sn/8*Math.PI*2,Xe.add(Vn)}const tn=new yi(16738816,.5,.4);tn.position.set(Rt[0]+(Ft===0?.35:-.35),Rt[1],Rt[2]),R.add(tn)});const kr=new $(new Le(.015,.015,.8,8),new vt({color:10066329,metalness:.7,roughness:.3}));kr.position.set(0,0,-.5),kr.rotation.x=Math.PI/2,R.add(kr);const ko=new $(new Pe(.07,.07,.07),new vt({color:3355443,metalness:.7,roughness:.3}));ko.position.set(0,0,-.85),R.add(ko);const Kn=new un;Kn.position.set(0,-.25,.2);const ti=new $(new rp(.12,.15,16),new vt({color:13408614,metalness:.5,roughness:.5,envMapIntensity:1}));ti.rotation.x=Math.PI,Kn.add(ti);const ln=new $(new ia(.12,16),new vt({color:11171669,metalness:.3,roughness:.8,side:ze}));ln.position.y=.075,ln.rotation.x=Math.PI/2,Kn.add(ln);const Pi=new $(new Us(.04,.11,16),new vt({color:10048819,metalness:.3,roughness:.8,side:ze}));Pi.position.y=.076,Pi.rotation.x=Math.PI/2,Kn.add(Pi),R.add(Kn);const Ki=new $(new Le(.18,.18,.05,16),new vt({color:12303291,metalness:.7,roughness:.3}));Ki.position.y=-.1,R.add(Ki);for(let Rt=0;Rt<8;Rt++){const Ft=Rt/8*Math.PI*2,ue=.13,Xe=Math.cos(Ft)*ue,tn=Math.sin(Ft)*ue,Sn=new $(new Pe(.04,.04,.04),new vt({color:4473924,metalness:.7,roughness:.3,envMapIntensity:1}));Sn.position.set(Xe,-.08,tn),R.add(Sn)}break;default:const uc=new $(new Pe(.3,.3,.6),new vt({color:Nt,metalness:.7,roughness:.3,envMapIntensity:1}));R.add(uc);const Ma=new $(new Le(.3,.3,.05,16),new vt({color:15658734,metalness:.7,roughness:.3,envMapIntensity:1.2}));Ma.rotation.x=Math.PI/2,Ma.position.z=.3,R.add(Ma)}const ct=new yi(4487167,.5,1.5);return ct.position.set(0,0,0),R.add(ct),R};return ga.forEach(at=>{O&&(at.scale*=.8);const Nt=it(at.modelType,14540253);O&&(at.scale*=.8),Nt.scale.set(at.scale,at.scale,at.scale);let R=new L;if(at.startPlanet&&Ue[at.startPlanet]){const Ct=Ue[at.startPlanet].container.position.clone();if(at.orbitType==="landed"){const Lt=at.landLocation.clone().multiplyScalar(Ue[at.startPlanet].data.radius);R.copy(Ct).add(Lt),Nt.up=new L(0,1,0),Nt.lookAt(Ct)}else{const Lt=at.distance||Ue[at.startPlanet].data.radius*2.5,re=at.angle||Math.random()*Math.PI*2,me=at.height||0,Zt=Lt*Math.cos(re),Xt=Lt*Math.sin(re);R=new L(Ct.x+Zt,Ct.y+me,Ct.z+Xt);const It=new L(-Xt,0,Zt).normalize(),Me=new L(Zt,0,Xt).normalize();Nt.up=Me,Nt.lookAt(Nt.position.clone().add(It))}}else if(at.startPosition)R.copy(at.startPosition),at.orbitType==="escape"&&Nt.lookAt(Nt.position.clone().add(at.escapeVector));else{const Ct=at.distance||100,Lt=at.angle||Math.random()*Math.PI*2;R.set(Ct*Math.cos(Lt),(Math.random()-.5)*20,Ct*Math.sin(Lt))}const ct=new $n;ct.position.copy(R),ct.add(Nt),J.add(ct);let rt;if(at.orbitType!=="landed"){const Ct=new Rl({color:4491519,transparent:!0,opacity:.8,linewidth:2}),Lt=new Fn,re=new Float32Array(200*3);Lt.setAttribute("position",new li(re,3)),rt=new $c(Lt,Ct),J.add(rt);const me=new Rl({color:7851263,transparent:!0,opacity:.4,linewidth:4}),Zt=new Fn;Zt.setAttribute("position",new li(re.slice(),3));const Xt=new $c(Zt,me);J.add(Xt),at.trailGlow=Xt}const Mt=document.createElement("canvas"),te=Mt.getContext("2d");Mt.width=256,Mt.height=64,te.font="Bold 24px Arial",te.textAlign="center",te.fillStyle="rgba(255, 255, 255, 1.0)",te.fillText(at.name,128,32);const X=new oo(Mt),ee=new Al({map:X,transparent:!0,depthTest:!1,depthWrite:!1}),Kt=new Qc(ee),$t=3;Kt.scale.set($t,$t/4,1),Kt.position.set(0,Nt.scale.y*2.5,0),Kt.visible=!1,Nt.add(Kt);const Pt=new $(new _n(2,16,16),new Jn({color:4491519,transparent:!0,opacity:.2,side:Bn}));Pt.visible=!1,Nt.add(Pt),at.highlightSphere=Pt,j[at.name]={mesh:Nt,container:ct,data:at,trail:rt,trailPositions:[],angle:at.angle||0,label:Kt}}),j};if(Ue.Saturn&&Ue.Saturn.data.rings){const j=Ue.Saturn.mesh;if(Ue.Saturn.data.enhancedRings){const it=new un;j.add(it);const at=(Mt,te,X,ee)=>{const Kt=new Us(Mt,te,X,8),$t=Kt.attributes.position,Pt=new L,Ct=[];for(let re=0;re<$t.count;re++){Pt.fromBufferAttribute($t,re);const Zt=(Math.sqrt(Pt.x*Pt.x+Pt.y*Pt.y+Pt.z*Pt.z)-Mt)/(te-Mt);Ct.push(Zt,0)}Kt.setAttribute("uv",new xn(Ct,2));const Lt=new $(Kt,ee);return Lt.rotation.x=Math.PI/2,it.add(Lt),Lt},Nt=Mt=>new dn({uniforms:{time:{value:0},innerColor:{value:new qt(Mt.innerColor||16442816)},outerColor:{value:new qt(Mt.outerColor||12750940)},opacity:{value:Mt.opacity||.9},detail:{value:Mt.detail||1},noiseStrength:{value:Mt.noiseStrength||.4},twistStrength:{value:Mt.twistStrength||.5}},vertexShader:`
              varying vec2 vUv;
              varying vec3 vPosition;
              varying vec3 vNormal;
              
              void main() {
                vUv = uv;
                vPosition = position;
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,fragmentShader:`
              uniform float time;
              uniform vec3 innerColor;
              uniform vec3 outerColor;
              uniform float opacity;
              uniform float detail;
              uniform float noiseStrength;
              uniform float twistStrength;
              
              varying vec2 vUv;
              varying vec3 vPosition;
              varying vec3 vNormal;
              
              float hash(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
              }
              
              float noise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                
                float a = hash(i);
                float b = hash(i + vec2(1.0, 0.0));
                float c = hash(i + vec2(0.0, 1.0));
                float d = hash(i + vec2(1.0, 1.0));
                
                return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
              }
              
              float fbm(vec2 p) {
                float value = 0.0;
                float amplitude = 0.5;
                float frequency = 1.0;
                
                for (int i = 0; i < 5; i++) {
                  value += amplitude * noise(p * frequency);
                  amplitude *= 0.5;
                  frequency *= 2.0;
                }
                
                return value;
              }
              
              void main() {
                float r = vUv.x;
                
                float gaps = 0.0;
                
                if (r > 0.48 && r < 0.55) {
                  gaps = smoothstep(0.48, 0.5, r) - smoothstep(0.53, 0.55, r);
                  gaps = pow(gaps, 0.5) * 0.9;
                }
                
                if (r > 0.73 && r < 0.75) {
                  gaps += smoothstep(0.73, 0.735, r) - smoothstep(0.745, 0.75, r);
                  gaps = min(1.0, gaps);
                }
                
                if (r > 0.88 && r < 0.89) {
                  gaps += smoothstep(0.88, 0.883, r) - smoothstep(0.887, 0.89, r);
                  gaps = min(1.0, gaps);
                }
                
                if (r > 0.3 && r < 0.32) {
                  gaps += smoothstep(0.3, 0.305, r) - smoothstep(0.315, 0.32, r);
                  gaps = min(1.0, gaps);
                }
                
                float ringletAngularFreq = 500.0 * detail;
                float angularPos = atan(vPosition.z, vPosition.x);
                float ringletPattern = sin(angularPos * ringletAngularFreq + r * 100.0 * twistStrength + time * 0.1);
                
                float densityWaves = sin(r * 120.0 * detail + ringletPattern * 0.1 + time * 0.05);
                densityWaves = densityWaves * 0.5 + 0.5;
                
                float detailNoise = fbm(vec2(angularPos * 20.0, r * 200.0 * detail + time * 0.02));
                float largeNoise = fbm(vec2(angularPos * 5.0 + time * 0.01, r * 30.0));
                
                float combinedNoise = mix(detailNoise, largeNoise, 0.5) * noiseStrength;
                
                float ringDensity = 1.0;
                
                if (r < 0.4) {
                  ringDensity = mix(0.3, 0.7, r / 0.4);
                } 
                else if (r < 0.55) {
                  ringDensity = 0.9;
                } 
                else {
                  ringDensity = mix(0.8, 0.7, (r - 0.55) / 0.45);
                }
                
                ringDensity *= (0.8 + detailNoise * 0.4);
                
                float spokeEffect = 0.0;
                for (int i = 0; i < 5; i++) {
                  float idx = float(i);
                  float spokeLoc = mod(time * 0.02 + idx * 1.2, 6.28);
                  float spokeWidth = 0.2 + idx * 0.05;
                  float spokeDist = abs(angularPos - spokeLoc);
                  spokeDist = min(spokeDist, 6.28 - spokeDist);
                  
                  spokeEffect += (1.0 - smoothstep(0.0, spokeWidth, spokeDist)) * 0.2;
                }
                spokeEffect *= smoothstep(0.4, 0.5, r) - smoothstep(0.7, 0.8, r);
                
                float finalDensity = ringDensity;
                finalDensity = max(0.0, finalDensity - gaps);
                finalDensity *= (0.85 + densityWaves * 0.15);
                
                vec3 ringColor = mix(innerColor, outerColor, r * r);
                
                ringColor = mix(ringColor, vec3(0.9, 0.9, 0.85), spokeEffect);
                
                vec3 finalColor = ringColor;
                finalColor *= (0.8 + combinedNoise * 0.4);
                
                vec3 viewDirection = normalize(cameraPosition - vPosition);
                float specularIntensity = pow(max(0.0, dot(reflect(-vec3(0.0, 0.0, 1.0), vNormal), viewDirection)), 50.0);
                
                finalColor += vec3(0.8, 0.7, 0.6) * specularIntensity * 0.2;
                
                float lightFactor = max(0.2, abs(vNormal.z)) * 1.2;
                finalColor *= lightFactor;
                
                float finalOpacity = finalDensity * opacity;
                finalOpacity = max(0.0, min(1.0, finalOpacity));
                
                gl_FragColor = vec4(finalColor, finalOpacity);
              }
            `,side:ze,transparent:!0,blending:im,blendSrc:fh,blendDst:ru,blendEquation:xr,depthWrite:!1});at(5,7.2,128,Nt({innerColor:11637361,outerColor:14141598,opacity:.7,detail:.9,noiseStrength:.5,twistStrength:.3})),at(7.2,8.5,128,Nt({innerColor:15062453,outerColor:15786176,opacity:.9,detail:1.3,noiseStrength:.6,twistStrength:.5})),at(8.5,10,128,Nt({innerColor:14272416,outerColor:12757637,opacity:.8,detail:1.1,noiseStrength:.4,twistStrength:.4})),at(10.1,10.4,128,Nt({innerColor:13482134,outerColor:12231550,opacity:.6,detail:1.5,noiseStrength:.7,twistStrength:.9}));const R=new Us(4.8,10.5,128,2),ct=new dn({uniforms:{time:{value:0}},vertexShader:`
            varying vec2 vUv;
            
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            varying vec2 vUv;
            
            void main() {
              float r = vUv.x;
              float alpha = (1.0 - abs(r * 2.0 - 1.0)) * 0.15;
              
              if (r < 0.4) alpha *= r / 0.4;
              if (r > 0.9) alpha *= (1.0 - (r - 0.9) / 0.1);
              
              vec3 hazeColor = vec3(0.95, 0.9, 0.8);
              gl_FragColor = vec4(hazeColor, alpha);
            }
          `,side:ze,transparent:!0,blending:Ai,depthWrite:!1}),rt=new $(R,ct);rt.rotation.x=Math.PI/2,it.add(rt),Ue.Saturn.ringMaterials=it.children.map(Mt=>Mt.material)}else{const it=new Us(5,10,128),at=it.attributes.position,Nt=new L,R=[];for(let Mt=0;Mt<at.count;Mt++){Nt.fromBufferAttribute(at,Mt);const X=(Math.sqrt(Nt.x*Nt.x+Nt.y*Nt.y+Nt.z*Nt.z)-5)/5;R.push(X,0)}it.setAttribute("uv",new xn(R,2));const ct=new dn({uniforms:{time:{value:0}},vertexShader:`
            varying vec2 vUv;
            
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float time;
            varying vec2 vUv;
            
            void main() {
              float r = smoothstep(0.0, 1.0, vUv.x);
              
              float bands = 
                  smoothstep(0.1, 0.2, vUv.x) -
                  smoothstep(0.3, 0.4, vUv.x) +
                  smoothstep(0.45, 0.55, vUv.x) -
                  smoothstep(0.6, 0.7, vUv.x) +
                  smoothstep(0.75, 0.8, vUv.x) -
                  smoothstep(0.85, 0.95, vUv.x);
                      
              float noise = sin(vUv.x * 100.0 + time * 0.2) * 0.5 + 0.5;
              float detail = sin(vUv.x * 200.0) * 0.5 + 0.5;
              
              vec3 inner = vec3(0.98, 0.88, 0.65);
              vec3 middle = vec3(0.99, 0.93, 0.75);
              vec3 outer = vec3(0.95, 0.85, 0.55);
              
              vec3 color = mix(inner, middle, r);
              color = mix(color, outer, r * r);
              
              color = mix(color * 0.75, color * 1.25, bands * noise * detail);
              
              float edgeFade = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x);
              
              float alpha = mix(0.85, 0.35, r) * (0.85 + 0.25 * bands) * edgeFade;
              
              if (vUv.x > 0.42 && vUv.x < 0.48) {
                alpha *= 0.3;
              }
              
              gl_FragColor = vec4(color, alpha);
            }
          `,side:ze,transparent:!0,blending:Ai}),rt=new $(it,ct);rt.rotation.x=Math.PI/2,j.add(rt),Ue.Saturn.ringMaterials=[ct]}}const ts=[{name:"Ursa Major (Big Dipper)",stars:[{x:.8,y:.5,z:-.9,magnitude:1.8,name:"Dubhe"},{x:.7,y:.55,z:-.85,magnitude:2.3,name:"Merak"},{x:.6,y:.6,z:-.8,magnitude:2.4,name:"Phecda"},{x:.5,y:.6,z:-.75,magnitude:2.5,name:"Megrez"},{x:.45,y:.65,z:-.7,magnitude:1.9,name:"Alioth"},{x:.35,y:.7,z:-.65,magnitude:2.1,name:"Mizar"},{x:.2,y:.8,z:-.6,magnitude:2.2,name:"Alkaid"}],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]],scale:15e4,color:6591981},{name:"Orion",stars:[{x:-.2,y:.3,z:.9,magnitude:.5,name:"Betelgeuse"},{x:-.3,y:.4,z:.85,magnitude:1.7,name:"Bellatrix"},{x:-.25,y:.2,z:.9,magnitude:2.8,name:"Mintaka"},{x:-.3,y:.15,z:.85,magnitude:2.2,name:"Alnilam"},{x:-.35,y:.1,z:.8,magnitude:1.9,name:"Alnitak"},{x:-.15,y:0,z:.9,magnitude:.1,name:"Rigel"},{x:-.23,y:.15,z:.88,magnitude:2.1,name:"Saiph"}],lines:[[0,1],[1,2],[2,3],[3,4],[4,6],[6,5],[5,0]],scale:18e4,color:16729344},{name:"Cassiopeia",stars:[{x:.5,y:.7,z:.5,magnitude:2.2,name:"Schedar"},{x:.6,y:.75,z:.45,magnitude:2.3,name:"Caph"},{x:.4,y:.65,z:.55,magnitude:2.1,name:"Gamma Cas"},{x:.35,y:.6,z:.6,magnitude:2.4,name:"Ruchbah"},{x:.3,y:.55,z:.65,magnitude:2.5,name:"Segin"}],lines:[[0,1],[0,2],[2,3],[3,4]],scale:14e4,color:16753920},{name:"Cygnus (Northern Cross)",stars:[{x:-.1,y:.85,z:.3,magnitude:1.2,name:"Deneb"},{x:-.15,y:.7,z:.25,magnitude:2.2,name:"Sadr"},{x:-.2,y:.5,z:.2,magnitude:2.5,name:"Albireo"},{x:-.3,y:.7,z:.25,magnitude:2.3,name:"Delta Cygni"},{x:0,y:.7,z:.25,magnitude:2.4,name:"Gienah"}],lines:[[0,1],[1,2],[1,3],[1,4]],scale:16e4,color:49151},{name:"Lyra",stars:[{x:.1,y:.8,z:.2,magnitude:0,name:"Vega"},{x:.13,y:.75,z:.18,magnitude:3.2,name:"Sheliak"},{x:.16,y:.72,z:.16,magnitude:3.5,name:"Sulafat"},{x:.12,y:.77,z:.15,magnitude:4.3,name:"Delta Lyrae"},{x:.09,y:.78,z:.17,magnitude:4.4,name:"Zeta Lyrae"}],lines:[[0,1],[1,2],[0,3],[0,4]],scale:12e4,color:9662683},{name:"Scorpius",stars:[{x:.6,y:-.5,z:.5,magnitude:.9,name:"Antares"},{x:.55,y:-.45,z:.55,magnitude:2.3,name:"Acrab"},{x:.5,y:-.4,z:.6,magnitude:2.5,name:"Dschubba"},{x:.45,y:-.35,z:.65,magnitude:2.6,name:"Pi Scorpii"},{x:.4,y:-.3,z:.7,magnitude:2.8,name:"Sigma Scorpii"},{x:.35,y:-.25,z:.75,magnitude:3,name:"Tau Scorpii"},{x:.65,y:-.55,z:.45,magnitude:1.6,name:"Shaula"},{x:.7,y:-.6,z:.4,magnitude:1.9,name:"Lesath"}],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[0,6],[6,7]],scale:17e4,color:16737095},{name:"Leo",stars:[{x:-.5,y:.3,z:-.6,magnitude:1.4,name:"Regulus"},{x:-.4,y:.35,z:-.65,magnitude:2.1,name:"Algieba"},{x:-.3,y:.4,z:-.7,magnitude:2.9,name:"Adhafera"},{x:-.2,y:.45,z:-.75,magnitude:3.4,name:"Rasalas"},{x:-.45,y:.2,z:-.65,magnitude:2.6,name:"Zosma"},{x:-.5,y:.1,z:-.6,magnitude:2.5,name:"Denebola"}],lines:[[0,1],[1,2],[2,3],[1,4],[4,5],[5,0]],scale:145e3,color:2142890},{name:"Sagittarius (Teapot)",stars:[{x:.7,y:-.4,z:.1,magnitude:2.6,name:"Kaus Media"},{x:.75,y:-.45,z:.05,magnitude:2.8,name:"Kaus Australis"},{x:.65,y:-.35,z:.15,magnitude:2.9,name:"Kaus Borealis"},{x:.8,y:-.5,z:.1,magnitude:3.2,name:"Ascella"},{x:.75,y:-.55,z:.2,magnitude:3.3,name:"Nunki"},{x:.7,y:-.6,z:.25,magnitude:3.5,name:"Tau Sagittarii"},{x:.65,y:-.55,z:.3,magnitude:3.8,name:"Phi Sagittarii"}],lines:[[0,1],[0,2],[1,3],[1,4],[4,5],[5,6],[6,2]],scale:155e3,color:16766720}],va=()=>{const j=new un;j.name="constellations";const it=2;return ts.forEach(at=>{const Nt=new un;Nt.name=at.name;const R=new un,ct=[];at.stars.forEach((Xt,It)=>{const Me=Math.max(2,7-Xt.magnitude)*2.5;let pe;Xt.magnitude<1?pe=new qt(14215167):Xt.magnitude<2?pe=new qt(16316415):Xt.magnitude<3?pe=new qt(16774376):pe=new qt(16772829),ct[It]=pe;const Ee=new _n(Me,16,16),xe=new Jn({color:pe,emissive:pe,emissiveIntensity:1}),Re=new $(Ee,xe);Re.position.set(Xt.x*at.scale*it,Xt.y*at.scale*it,Xt.z*at.scale*it);const fn=new _n(Me*2,16,16),$e=new Jn({color:pe,transparent:!0,opacity:.3,side:Bn}),Mn=new $(fn,$e);Re.add(Mn),R.add(Re)}),Nt.add(R);const rt=new un;at.lines.forEach(Xt=>{const It=at.stars[Xt[0]],Me=at.stars[Xt[1]],pe=[new L(It.x*at.scale*it,It.y*at.scale*it,It.z*at.scale*it),new L(Me.x*at.scale*it,Me.y*at.scale*it,Me.z*at.scale*it)],Ee=new Fn().setFromPoints(pe),xe=new qt().copy(ct[Xt[0]]).lerp(ct[Xt[1]],.5),Re=new Rl({color:xe,transparent:!0,opacity:.6,linewidth:2}),fn=new $c(Ee,Re);rt.add(fn)}),Nt.add(rt);const Mt=new qt(16777215);at.stars.forEach((Xt,It)=>{Mt.lerp(ct[It],1/(It+1))});const te=Math.floor(Mt.r*255),X=Math.floor(Mt.g*255),ee=Math.floor(Mt.b*255),Kt=`rgba(${te}, ${X}, ${ee}, 0.9)`,$t=document.createElement("canvas");$t.width=512,$t.height=128;const Pt=$t.getContext("2d");Pt.fillStyle="rgba(0, 0, 0, 0)",Pt.fillRect(0,0,512,128),Pt.font="bold 48px Arial",Pt.textAlign="center",Pt.fillStyle=Kt,Pt.fillText(at.name,256,64);const Ct=new oo($t),Lt=new Al({map:Ct,transparent:!0,depthTest:!1,depthWrite:!1}),re=new Qc(Lt),me=new L;at.stars.forEach(Xt=>{me.add(new L(Xt.x*at.scale*it,Xt.y*at.scale*it,Xt.z*at.scale*it))}),me.divideScalar(at.stars.length),re.position.copy(me),re.position.y+=at.scale*.1*it;const Zt=at.scale*.2*it;re.scale.set(Zt,Zt*.25,1),re.visible=!1,Nt.userData.label=re,Nt.add(re),j.add(Nt)}),j},es=(j,it,at)=>{if(!j)return;const Nt=5e4,R=8e5,ct=1e5,rt=at&&it>Nt&&it<R;if(j.visible=rt,rt){let Mt=1;it<Nt+2e4?Mt=(it-Nt)/2e4:it>R-4e4&&(Mt=(R-it)/4e4),j.children.forEach(te=>{te.children[1].children.forEach(ee=>{ee.material&&(ee.material.opacity=Mt*.7)}),te.userData.label&&(te.userData.label.visible=rt&&it>ct,te.userData.label.visible&&(te.userData.label.material.opacity=Math.min(1,(it-ct)/2e4)))})}},Yi=()=>{const at=new un;J.add(at);for(let X=1;X<=5;X++){const ee=Math.pow(10,X)*1e3,Kt=Math.min(1e5,Math.ceil(Math.pow(X,2)*1e4/X)),$t=Nt(Kt,ee,X);at.add($t)}function Nt(X,ee,Kt){const $t=new un;$t.userData.layer=Kt;const Pt=new Fn,Ct=new Float32Array(X*3),Lt=new Float32Array(X*3),re=new Float32Array(X);for(let Xt=0;Xt<X;Xt++){const It=(Math.random()-.5)*ee*2,Me=(Math.random()-.5)*ee*2,pe=(Math.random()-.5)*ee*2;Ct[Xt*3]=It,Ct[Xt*3+1]=Me,Ct[Xt*3+2]=pe;const Ee=Math.random();let xe,Re,fn;Ee<.1?(xe=.9+Math.random()*.1,Re=.2+Math.random()*.4,fn=.1+Math.random()*.2):Ee<.2?(xe=.9+Math.random()*.1,Re=.6+Math.random()*.3,fn=.1+Math.random()*.2):Ee<.3?(xe=.9+Math.random()*.1,Re=.9+Math.random()*.1,fn=.3+Math.random()*.5):Ee<.7?(xe=.8+Math.random()*.2,Re=.8+Math.random()*.2,fn=.9+Math.random()*.1):(xe=.5+Math.random()*.3,Re=.7+Math.random()*.3,fn=.9+Math.random()*.1),Lt[Xt*3]=xe,Lt[Xt*3+1]=Re,Lt[Xt*3+2]=fn;const $e=6-Kt,Mn=Math.random(),mn=Mn>.99?$e*3:Mn>.95?$e*2:$e;re[Xt]=Math.max(1,mn)}Pt.setAttribute("position",new li(Ct,3)),Pt.setAttribute("color",new li(Lt,3)),Pt.setAttribute("size",new li(re,1));const me=new dn({uniforms:{time:{value:0},cameraDistance:{value:0},layerFactor:{value:1/Kt}},vertexShader:`
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            uniform float time;
            uniform float cameraDistance;
            uniform float layerFactor;
            
            void main() {
              vColor = color;
              
              
              float twinkle = 0.8 + 0.2 * sin(time * (0.5 + 0.5 * fract(position.x * position.y * position.z)));
              
             
              float distanceFactor = 1.0 + cameraDistance * 0.00001 * layerFactor;
              float finalSize = size * twinkle / distanceFactor;
              
             
              vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = finalSize;
              gl_Position = projectionMatrix * mvPosition;
            }
          `,fragmentShader:`
            varying vec3 vColor;
            
            void main() {
              float d = length(gl_PointCoord - vec2(0.5, 0.5)) * 2.0;
              
              if (d > 1.0) {
                discard; 
              }
              
              float intensity = 1.0 - d;
              intensity = pow(intensity, 1.5);
              
              gl_FragColor = vec4(vColor * intensity, intensity);
            }
          `,transparent:!0,depthWrite:!1,blending:Ai}),Zt=new A1(Pt,me);return $t.add(Zt),$t}const R=()=>{const X=new un,ee=250,Kt=[{shape:"spiral",subtype:"grand-design",colors:[{core:16774368,arms:16759688,dust:5583633},{core:16777164,arms:16750950,dust:6702114},{core:16772829,arms:16755319,dust:7816243}],frequency:.35},{shape:"spiral",subtype:"barred",colors:[{core:16777198,arms:14527095,dust:6702114,bar:16777130},{core:16777181,arms:16759654,dust:5583633,bar:16772795},{core:16774886,arms:15644015,dust:7029795,bar:16772812}],frequency:.35},{shape:"elliptical",colors:[{inner:16777198,outer:16768443},{inner:16777181,outer:15654348},{inner:16774368,outer:13945272}],frequency:.2},{shape:"irregular",colors:[{bright:11193599,medium:7842559,dark:3359880},{bright:16755404,medium:16746666,dark:8926020},{bright:11197934,medium:8960989,dark:4478310}],frequency:.1}],$t=[];for(Kt.forEach(Pt=>{const Ct=Math.floor(ee*Pt.frequency);for(let Lt=0;Lt<Ct;Lt++)$t.push(Pt)});$t.length<ee;)$t.push(Kt[0]);for(let Pt=$t.length-1;Pt>0;Pt--){const Ct=Math.floor(Math.random()*(Pt+1));[$t[Pt],$t[Ct]]=[$t[Ct],$t[Pt]]}for(let Pt=0;Pt<ee;Pt++){let Ct,Lt,re;if(Math.random()<.3){const mn=1e6+Math.random()*9e6,vn=Math.acos(2*Math.random()-1),rn=Math.random()*Math.PI*2;Ct=mn+Math.random()*2e5,Lt=vn+(Math.random()-.5)*.2,re=rn+(Math.random()-.5)*.2}else Ct=1e6+Math.random()*9e6,Lt=Math.acos(2*Math.random()-1),re=Math.random()*Math.PI*2;const me=Ct*Math.sin(Lt)*Math.cos(re),Zt=Ct*Math.sin(Lt)*Math.sin(re),Xt=Ct*Math.cos(Lt),It=$t[Pt],Me=It.colors[Math.floor(Math.random()*It.colors.length)];let pe=25e3+Math.random()*5e4;It.shape==="elliptical"&&(pe*=1.5);const Ee=pe*(.8+Math.random()*.4),xe=document.createElement("canvas");xe.width=256,xe.height=256;const Re=xe.getContext("2d");It.shape==="spiral"?ct(Re,It.subtype,Me):It.shape==="elliptical"?rt(Re,Me):It.shape==="irregular"&&Mt(Re,Me);const fn=new oo(xe);fn.minFilter=Aa;const $e=new Al({map:fn,color:16777215,transparent:!0,opacity:.9,blending:Ai,depthWrite:!1}),Mn=new Qc($e);if(Mn.position.set(me,Zt,Xt),Mn.scale.set(Ee,Ee,1),Mn.userData.isGalaxy=!0,Mn.userData.distance=Ct,Mn.userData.size=Ee,Math.random()<.05){const mn=["Andromeda-like Galaxy","Triangulum-like Galaxy","Whirlpool-like Galaxy","Sombrero-like Galaxy","Pinwheel-like Galaxy","Cartwheel-like Galaxy","Black Eye-like Galaxy","Cigar-like Galaxy","Antennae-like Galaxy","Tadpole-like Galaxy","Hoag's Object-like Galaxy","Centaurus A-like Galaxy"],vn=document.createElement("canvas");vn.width=256,vn.height=64;const rn=vn.getContext("2d");rn.fillStyle="rgba(0, 0, 0, 0)",rn.fillRect(0,0,256,64),rn.font="bold 20px Arial",rn.textAlign="center",rn.fillStyle="rgba(255, 255, 255, 0.9)",rn.fillText(mn[Math.floor(Math.random()*mn.length)],128,32);const Dn=new oo(vn),Gn=new Al({map:Dn,transparent:!0,depthTest:!1,depthWrite:!1,opacity:.7}),Bi=new Qc(Gn);Bi.position.set(0,Ee*.6,0),Bi.scale.set(Ee*.5,Ee*.125,1),Mn.add(Bi),Mn.userData.label=Bi}X.add(Mn)}return X};function ct(X,ee,Kt){X.clearRect(0,0,256,256),X.fillStyle="rgba(0, 0, 0, 0)",X.fillRect(0,0,256,256);const $t=X.createRadialGradient(128,128,0,128,128,60),Pt=new qt(Kt.core);$t.addColorStop(0,`rgba(${Math.floor(Pt.r*255)}, ${Math.floor(Pt.g*255)}, ${Math.floor(Pt.b*255)}, 0.95)`),$t.addColorStop(.5,`rgba(${Math.floor(Pt.r*255)}, ${Math.floor(Pt.g*255)}, ${Math.floor(Pt.b*255)}, 0.6)`),$t.addColorStop(1,`rgba(${Math.floor(Pt.r*255)}, ${Math.floor(Pt.g*255)}, ${Math.floor(Pt.b*255)}, 0)`),X.fillStyle=$t,X.beginPath(),X.arc(128,128,60,0,Math.PI*2),X.fill();const Ct=ee==="barred"?2:2+Math.floor(Math.random()*4),Lt=new qt(Kt.arms),re=new qt(Kt.dust);if(X.globalCompositeOperation="screen",ee==="barred"){const It=new qt(Kt.bar),Me=X.createLinearGradient(48,128,208,128);Me.addColorStop(0,`rgba(${Math.floor(It.r*255)}, ${Math.floor(It.g*255)}, ${Math.floor(It.b*255)}, 0)`),Me.addColorStop(.2,`rgba(${Math.floor(It.r*255)}, ${Math.floor(It.g*255)}, ${Math.floor(It.b*255)}, 0.7)`),Me.addColorStop(.5,`rgba(${Math.floor(It.r*255)}, ${Math.floor(It.g*255)}, ${Math.floor(It.b*255)}, 0.9)`),Me.addColorStop(.8,`rgba(${Math.floor(It.r*255)}, ${Math.floor(It.g*255)}, ${Math.floor(It.b*255)}, 0.7)`),Me.addColorStop(1,`rgba(${Math.floor(It.r*255)}, ${Math.floor(It.g*255)}, ${Math.floor(It.b*255)}, 0)`),X.fillStyle=Me,X.save(),X.translate(128,128),X.fillRect(-80,-15/2,80*2,15),X.restore()}for(let Zt=0;Zt<Ct;Zt++){const Xt=Zt/Ct*Math.PI*2,It=.2+Math.random()*.2;X.strokeStyle=`rgba(${Math.floor(Lt.r*255)}, ${Math.floor(Lt.g*255)}, ${Math.floor(Lt.b*255)}, 0.8)`,X.lineWidth=8,X.beginPath();const Me=ee==="barred"?70:40;for(let pe=Me;pe<120;pe+=1){const Ee=Xt+pe/30*Math.PI*It*2,xe=128+pe*Math.cos(Ee),Re=128+pe*Math.sin(Ee);pe===Me?X.moveTo(xe,Re):X.lineTo(xe,Re)}X.stroke();for(let pe=0;pe<80;pe++){const Ee=Me+Math.random()*(120-Me),xe=(Math.random()-.5)*.3,Re=Xt+Ee/30*Math.PI*It*2+xe,fn=128+Ee*Math.cos(Re),$e=128+Ee*Math.sin(Re),Mn=1+Math.random()*3,mn=.7+Math.random()*.3;X.fillStyle=`rgba(${Math.floor(Lt.r*255)}, ${Math.floor(Lt.g*255)}, ${Math.floor(Lt.b*255)}, ${mn})`,X.beginPath(),X.arc(fn,$e,Mn,0,Math.PI*2),X.fill()}X.strokeStyle=`rgba(${Math.floor(re.r*255)}, ${Math.floor(re.g*255)}, ${Math.floor(re.b*255)}, 0.4)`,X.lineWidth=6,X.beginPath();for(let pe=Me+10;pe<120;pe+=1){const Ee=Xt+pe/30*Math.PI*It*2-.1,xe=128+pe*Math.cos(Ee),Re=128+pe*Math.sin(Ee);pe===Me+10?X.moveTo(xe,Re):X.lineTo(xe,Re)}X.globalCompositeOperation="multiply",X.stroke(),X.globalCompositeOperation="screen"}for(let Zt=0;Zt<150;Zt++){const Xt=Math.random()*Math.PI*2,It=Math.pow(Math.random(),2)*120,Me=128+It*Math.cos(Xt),pe=128+It*Math.sin(Xt),Ee=1+Math.random()*2,xe=(.4+Math.random()*.6)*(1-It/120);X.fillStyle=`rgba(255, 255, 255, ${xe})`,X.beginPath(),X.arc(Me,pe,Ee,0,Math.PI*2),X.fill()}const me=X.createRadialGradient(128,128,100,128,128,128);me.addColorStop(0,`rgba(${Math.floor(Lt.r*255*.8)}, ${Math.floor(Lt.g*255*.8)}, ${Math.floor(Lt.b*255*.8)}, 0.3)`),me.addColorStop(1,"rgba(0, 0, 0, 0)"),X.globalCompositeOperation="destination-over",X.fillStyle=me,X.fillRect(0,0,256,256)}function rt(X,ee){X.clearRect(0,0,256,256);const Kt=.7+Math.random()*.3,$t=Math.random()*Math.PI,Pt=new qt(ee.inner),Ct=new qt(ee.outer),Lt=X.createRadialGradient(128,128,0,128,128,100);Lt.addColorStop(0,`rgba(${Math.floor(Pt.r*255)}, ${Math.floor(Pt.g*255)}, ${Math.floor(Pt.b*255)}, 0.9)`),Lt.addColorStop(.7,`rgba(${Math.floor(Ct.r*255)}, ${Math.floor(Ct.g*255)}, ${Math.floor(Ct.b*255)}, 0.5)`),Lt.addColorStop(1,"rgba(0, 0, 0, 0)"),X.fillStyle=Lt,X.beginPath(),X.save(),X.translate(128,128),X.rotate($t),X.scale(1,Kt),X.arc(0,0,100,0,Math.PI*2),X.restore(),X.fill();for(let re=0;re<200;re++){const me=Math.random()*Math.PI*2,Zt=Math.pow(Math.random(),.5)*90,Xt=Zt*Math.cos(me)*Math.cos($t)-Zt*Math.sin(me)*Kt*Math.sin($t),It=Zt*Math.cos(me)*Math.sin($t)+Zt*Math.sin(me)*Kt*Math.cos($t),Me=128+Xt,pe=128+It,Ee=1+Math.random()*1.5,xe=1-Zt/90,Re=.3+Math.random()*.7*xe;X.fillStyle=`rgba(255, 255, 255, ${Re})`,X.beginPath(),X.arc(Me,pe,Ee,0,Math.PI*2),X.fill()}if(Math.random()<.3){const re=1+Math.floor(Math.random()*3);for(let me=0;me<re;me++){const Zt=Math.random()*Math.PI*2,Xt=60+Math.random()*40,It=10+Math.random()*20,Me=128+Math.cos(Zt)*Xt,pe=128+Math.sin(Zt)*Xt*Kt,Ee=X.createRadialGradient(Me,pe,0,Me,pe,It);Ee.addColorStop(0,`rgba(${Math.floor(Pt.r*255)}, ${Math.floor(Pt.g*255)}, ${Math.floor(Pt.b*255)}, 0.2)`),Ee.addColorStop(1,"rgba(0, 0, 0, 0)"),X.fillStyle=Ee,X.beginPath(),X.arc(Me,pe,It,0,Math.PI*2),X.fill()}}}function Mt(X,ee){X.clearRect(0,0,256,256);const Kt=new qt(ee.bright),$t=new qt(ee.medium),Pt=new qt(ee.dark),Ct=3+Math.floor(Math.random()*4),Lt=[];for(let Zt=0;Zt<Ct;Zt++){const Xt=128+(Math.random()-.5)*80,It=128+(Math.random()-.5)*80,Me=30+Math.random()*50;Lt.push({x:Xt,y:It,r:Me});const pe=Math.random();let Ee;pe<.33?Ee=Kt:pe<.66?Ee=$t:Ee=Pt;const xe=X.createRadialGradient(Xt,It,0,Xt,It,Me);xe.addColorStop(0,`rgba(${Math.floor(Ee.r*255)}, ${Math.floor(Ee.g*255)}, ${Math.floor(Ee.b*255)}, ${.5+Math.random()*.5})`),xe.addColorStop(1,"rgba(0, 0, 0, 0)"),X.globalCompositeOperation="lighter",X.fillStyle=xe,X.beginPath(),X.arc(Xt,It,Me,0,Math.PI*2),X.fill()}const re=5+Math.floor(Math.random()*10);for(let Zt=0;Zt<re;Zt++){const Xt=Lt[Math.floor(Math.random()*Lt.length)],It=Math.random()*Xt.r,Me=Math.random()*Math.PI*2,pe=Xt.x+Math.cos(Me)*It,Ee=Xt.y+Math.sin(Me)*It,xe=5+Math.random()*15,Re=X.createRadialGradient(pe,Ee,0,pe,Ee,xe);Re.addColorStop(0,`rgba(255, 255, 255, ${.7+Math.random()*.3})`),Re.addColorStop(.6,`rgba(${Math.floor(Kt.r*255)}, ${Math.floor(Kt.g*255)}, ${Math.floor(Kt.b*255)}, 0.5)`),Re.addColorStop(1,"rgba(0, 0, 0, 0)"),X.fillStyle=Re,X.beginPath(),X.arc(pe,Ee,xe,0,Math.PI*2),X.fill();for(let fn=0;fn<15;fn++){const $e=Math.random()*xe,Mn=Math.random()*Math.PI*2,mn=pe+Math.cos(Mn)*$e,vn=Ee+Math.sin(Mn)*$e,rn=1+Math.random()*2;X.fillStyle=`rgba(255, 255, 255, ${.5+Math.random()*.5})`,X.beginPath(),X.arc(mn,vn,rn,0,Math.PI*2),X.fill()}}X.globalCompositeOperation="multiply";const me=2+Math.floor(Math.random()*3);for(let Zt=0;Zt<me;Zt++){const Xt=50+Math.random()*156,It=50+Math.random()*156,Me=50+Math.random()*156,pe=50+Math.random()*156,Ee=50+Math.random()*156,xe=50+Math.random()*156;X.beginPath(),X.moveTo(Xt,It),X.quadraticCurveTo(Me,pe,Ee,xe),X.lineWidth=5+Math.random()*15,X.strokeStyle=`rgba(20, 10, 5, ${.2+Math.random()*.3})`,X.stroke()}X.globalCompositeOperation="screen";for(let Zt=0;Zt<100;Zt++){const Xt=20+Math.random()*216,It=20+Math.random()*216,Me=1+Math.random()*1.5;X.fillStyle=`rgba(255, 255, 255, ${.3+Math.random()*.7})`,X.beginPath(),X.arc(Xt,It,Me,0,Math.PI*2),X.fill()}}const te=R();return at.add(te),Qe.current=at,at},D=()=>{if(!Qe.current||!Ut.current)return;const j=Ut.current.position.length();Qe.current.traverse(it=>{if(it instanceof A1&&it.material&&it.material.uniforms&&(it.material.uniforms.time.value=performance.now()*5e-4,it.material.uniforms.cameraDistance.value=j),it.userData&&it.userData.isGalaxy&&(it.visible=ve.current.showStars&&j>1e5,it.material)){const at=Math.min(1,Math.max(0,(j-1e5)/9e5));it.material.opacity=at*.7}if(it.userData&&it.userData.isNebula&&(it.visible=ve.current.showStars&&j>2e4&&j<5e5,it.material)){let at;j<5e4?at=(j-2e4)/3e4:j>3e5?at=1-(j-3e5)/2e5:at=1,it.material.opacity=Math.min(1,Math.max(0,at))*.7}})};(()=>{const j=eu.prototype.zoomIn,it=eu.prototype.zoomOut;eu.prototype.zoomIn=function(at){j.call(this,at)},eu.prototype.zoomOut=function(at){const Nt=this.object.position.length();if(Nt>1e4){const R=Math.min(1,1e4/Nt);it.call(this,at*R)}else it.call(this,at)}})(),Yi(),Ua(),(()=>{Object.entries(Ue).forEach(([j,it])=>{const at=document.createElement("canvas"),Nt=at.getContext("2d");at.width=256,at.height=128,Nt.font="Bold 40px Arial",Nt.textAlign="center",Nt.fillStyle="rgba(255, 255, 255, 1.0)",Nt.fillText(j,128,64);const R=new oo(at),ct=new Al({map:R,transparent:!0,depthTest:!1,depthWrite:!1}),rt=new Qc(ct),Mt=it.data.radius*4;rt.scale.set(Mt,Mt/2,1),rt.position.set(0,it.data.radius*2.2,0),rt.visible=!1,it.mesh.add(rt),it.label=rt})})();const ot=va();J.add(ot),Dt.current.userData.constellationsGroup=ot,ce.current=Ue,he.current=jn,Ye.current=yn;const tt=Bs();oe.current=tt;const Yt=new H2;let se=0;const _e=O?2:0,fe=()=>{const j=requestAnimationFrame(fe);if(lt.current=j,O&&(se=(se+1)%_e,se!==0))return;performance.now();const it=Yt.getDelta();if(He&&He.uniforms&&He.uniforms.time&&(He.uniforms.time.value+=it),Ln&&Ln.material&&Ln.material.uniforms&&Ln.material.uniforms.time&&(Ln.material.uniforms.time.value+=it),oe.current&&ve.current){const R=ve.current;Object.values(oe.current).forEach(ct=>{ct.container.visible=R.showSpacecraft,ct.trail&&(ct.trail.visible=R.showSpacecraft&&R.showOrbits)})}if(ce.current&&ve.current){const R=ve.current;Object.values(ce.current).forEach(ct=>{ct.container&&(ct.container.visible=R.showPlanets)})}if(Qe.current&&ve.current&&(Qe.current.visible=ve.current.showStars),Qe.current&&(Qe.current.rotation.y+=5e-4*it*60*V.current,Qe.current.rotation.x+=1e-4*it*60*V.current,Qe.current.rotation.z+=2e-4*it*60*V.current),zt.current&&ce.current[zt.current]){const R=ce.current[zt.current],ct=new L;R.container.getWorldPosition(ct);let rt=100,Mt=0;Ye.current[zt.current]&&Ye.current[zt.current].length>0&&Ye.current[zt.current].forEach(ee=>{ee.data.distance>Mt&&(Mt=ee.data.distance)}),rt=R.data.radius*3+Mt*2.5;const te=new L;te.subVectors(Ut.current.position,yt.current.target),te.normalize().multiplyScalar(rt),yt.current.target.copy(ct);const X=new L().addVectors(ct,te);Ut.current.position.lerp(X,.05),D(),yt.current.update()}if(Ue.Earth&&Ue.Earth.mesh){const R=Ue.Earth.mesh;if(R.userData.cloudMesh&&(R.userData.cloudMesh.rotation.y+=3e-4*V.current),R.userData.nightMesh){const ct=R.userData.nightMesh.material;if(ct.uniforms&&ct.uniforms.sunDirection){const rt=new L(0,0,0).sub(Ue.Earth.container.position).normalize();ct.uniforms.sunDirection.value=rt}}if(R.material&&R.material.uniforms&&R.material.uniforms.sunDirection){const ct=new L(0,0,0).sub(Ue.Earth.container.position).normalize();R.material.uniforms.sunDirection.value=ct}R.children.forEach(ct=>{if(ct.material&&ct.material.uniforms&&ct.material.uniforms.sunPosition){const rt=new L;ct.material.uniforms.sunPosition.value=rt.sub(Ue.Earth.container.position).normalize()}})}if(Ue.Mars&&Ue.Mars.mesh){const R=Ue.Mars.mesh;R.material&&R.material.uniforms&&R.material.uniforms.time&&(R.material.uniforms.time.value+=it)}if(Ue.Venus&&Ue.Venus.mesh){const R=Ue.Venus.mesh;R.material&&R.material.uniforms&&R.material.uniforms.time&&(R.material.uniforms.time.value+=it),R.children.forEach(ct=>{ct.material&&ct.material.uniforms&&ct.material.uniforms.time&&(ct.material.uniforms.time.value+=it)})}if(Ue.Neptune&&Ue.Neptune.mesh){const R=Ue.Neptune.mesh;R.material&&R.material.uniforms&&R.material.uniforms.time&&(R.material.uniforms.time.value+=it),R.children.forEach(ct=>{ct.material&&ct.material.uniforms&&ct.material.uniforms.time&&(ct.material.uniforms.time.value+=it)})}if(Ue.Uranus&&Ue.Uranus.mesh){const R=Ue.Uranus.mesh;R.material&&R.material.uniforms&&R.material.uniforms.time&&(R.material.uniforms.time.value+=it),R.children.forEach(ct=>{ct.material&&ct.material.uniforms&&ct.material.uniforms.time&&(ct.material.uniforms.time.value+=it)})}if(Object.values(ce.current).forEach(R=>{R.mesh&&R.mesh.material&&R.mesh.material.uniforms&&R.mesh.material.uniforms.time&&(R.mesh.material.uniforms.time.value+=it),R.mesh.children.forEach(ct=>{ct.material&&ct.material.uniforms&&ct.material.uniforms.time&&(ct.material.uniforms.time.value+=it)})}),Ue.Saturn&&Ue.Saturn.mesh&&(Ue.Saturn.mesh.children.forEach(R=>{R.material&&R.material.uniforms&&R.material.uniforms.time&&(R.material.uniforms.time.value+=it)}),Ue.Saturn.ringMaterials&&Ue.Saturn.ringMaterials.forEach(R=>{R.uniforms&&R.uniforms.time&&(R.uniforms.time.value+=it)})),Ue.Jupiter&&Ue.Jupiter.mesh){const R=Ue.Jupiter.mesh;R.material&&R.material.uniforms&&R.material.uniforms.time&&(R.material.uniforms.time.value+=it)}Dt.current&&Dt.current.userData.animateGalaxies&&Dt.current.userData.animateGalaxies(it),Pa(),Dt.current&&Dt.current.userData.constellationsGroup&&es(Dt.current.userData.constellationsGroup,Ut.current.position.length(),ve.current.showConstellations);const at=V.current,Nt=ve.current;if(he.current&&he.current.forEach(R=>{R.visible=Nt.showOrbits}),Object.values(Ue).forEach(R=>{if(!bt){R.angle+=R.data.speed*V.current;const ct=R.data.distance,rt=R.data.eccentricity||.01,Mt=R.data.inclination||0,te=ct,X=te*Math.sqrt(1-rt*rt),ee=te*rt,Kt=te*Math.cos(R.angle)+ee,$t=X*Math.sin(R.angle),Pt=-$t*Math.sin(Mt),Ct=$t*Math.cos(Mt);R.container.position.set(Kt,Pt,Ct),R.data.rotationAxis&&R.data.rotationAxis.equals(new L(1,0,0))?R.mesh.rotation.x+=R.data.rotationSpeed*V.current:R.mesh.rotation.y+=R.data.rotationSpeed*V.current}}),Object.entries(yn).forEach(([R,ct])=>{Array.isArray(ct)&&ct.forEach(rt=>{if(rt.mesh){rt.angle+=rt.data.speed*V.current;const Mt=rt.data.distance,te=rt.data.inclination||0,X=Mt*Math.cos(rt.angle),ee=Mt*Math.sin(rt.angle);if(te){const Kt=X*Math.cos(te)-ee*Math.sin(te),$t=X*Math.sin(te)+ee*Math.cos(te);rt.mesh.position.x=Kt,rt.mesh.position.z=$t}else rt.mesh.position.x=X,rt.mesh.position.z=ee;rt.mesh.rotation.y+=rt.data.speed*3*V.current}})}),yt.current.update(),Ve.current.length>0){const R=V.current,ct=ve.current.showAsteroids;Fe.current&&(Fe.current.mainBelt&&(Fe.current.mainBelt.rotation.y+=9e-4*it*R,Fe.current.mainBelt.visible=ve.current.showOrbits&&ct,Fe.current.mainBelt.renderOrder=-1),Fe.current.kuiperBelt&&(Fe.current.kuiperBelt.rotation.y+=15e-5*it*R,Fe.current.kuiperBelt.visible=ve.current.showOrbits&&ct,Fe.current.kuiperBelt.renderOrder=-1)),Ve.current.forEach(rt=>{if(rt.mesh&&(rt.mesh.visible=ct,rt.mesh.renderOrder=-1,ct))if(rt.mesh.rotation.x+=rt.rotationSpeed.x*it*R,rt.mesh.rotation.y+=rt.rotationSpeed.y*it*R,rt.mesh.rotation.z+=rt.rotationSpeed.z*it*R,rt.angle+=rt.orbitSpeed*it*R*3,rt.inclination){const Mt=rt.radius*Math.cos(rt.angle),te=rt.radius*Math.sin(rt.angle);rt.mesh.position.set(Mt,rt.height+te*Math.sin(rt.inclination),te*Math.cos(rt.inclination))}else{const Mt=rt.radius*Math.cos(rt.angle),te=rt.radius*Math.sin(rt.angle);rt.mesh.position.set(Mt,rt.height||0,te)}})}oe.current&&Object.values(oe.current).forEach(R=>{if(R.data.orbitType==="landed"){if(R.data.startPlanet&&Ue[R.data.startPlanet]){const ct=Ue[R.data.startPlanet].container.position.clone(),rt=R.data.landLocation.clone().multiplyScalar(Ue[R.data.startPlanet].data.radius);R.container.position.copy(ct).add(rt),R.mesh.lookAt(ct)}}else if(R.data.orbitType==="planetary"){if(R.data.startPlanet&&Ue[R.data.startPlanet]){const ct=Ue[R.data.startPlanet].container.position.clone();R.angle+=R.data.speed*at;const rt=R.data.distance||Ue[R.data.startPlanet].data.radius*2.5,Mt=R.data.height||0,te=rt*Math.cos(R.angle),X=rt*Math.sin(R.angle);R.container.position.set(ct.x+te,ct.y+Mt,ct.z+X);const ee=new L(-X,0,te).normalize(),Kt=new L(te,0,X).normalize();if(R.mesh.up=Kt,R.mesh.lookAt(R.mesh.position.clone().add(ee)),R.trail){R.trailPositions.push(R.container.position.clone()),R.trailPositions.length>(O?100:200)&&R.trailPositions.shift();const $t=R.trail.geometry.attributes.position.array;for(let Pt=0;Pt<R.trailPositions.length;Pt++){const Ct=R.trailPositions[Pt];$t[Pt*3]=Ct.x,$t[Pt*3+1]=Ct.y,$t[Pt*3+2]=Ct.z}R.trail.geometry.attributes.position.needsUpdate=!0,R.trail.geometry.setDrawRange(0,R.trailPositions.length),R.trailGlow&&(R.trailGlow.geometry.attributes.position.array.set($t),R.trailGlow.geometry.attributes.position.needsUpdate=!0,R.trailGlow.geometry.setDrawRange(0,R.trailPositions.length))}}}else if(R.data.orbitType==="elliptical"){const ct=R.data.orbitParams;R.angle+=R.data.speed*at%(Math.PI*2);const rt=ct.semiMajor*Math.cos(R.angle),Mt=ct.semiMinor*Math.sin(R.angle),te=new L(rt,0,Mt);te.applyAxisAngle(new L(1,0,0),ct.incline||0),te.add(ct.center||new L(0,0,0)),R.container.position.copy(te);const X=new L(-ct.semiMajor*Math.sin(R.angle),0,ct.semiMinor*Math.cos(R.angle)).normalize();if(X.applyAxisAngle(new L(1,0,0),ct.incline||0),R.mesh.lookAt(R.container.position.clone().add(X)),R.trail){R.trailPositions.push(R.container.position.clone()),R.trailPositions.length>100&&R.trailPositions.shift();const ee=R.trail.geometry.attributes.position.array;for(let Kt=0;Kt<R.trailPositions.length;Kt++){const $t=R.trailPositions[Kt];ee[Kt*3]=$t.x,ee[Kt*3+1]=$t.y,ee[Kt*3+2]=$t.z}R.trail.geometry.attributes.position.needsUpdate=!0,R.trail.geometry.setDrawRange(0,R.trailPositions.length)}}else if(R.data.orbitType==="escape"){const ct=R.data.escapeVector||new L(1,0,0);if(R.container.position.add(ct.clone().multiplyScalar(R.data.speed*at)),R.trail){R.trailPositions.push(R.container.position.clone()),R.trailPositions.length>100&&R.trailPositions.shift();const rt=R.trail.geometry.attributes.position.array;for(let Mt=0;Mt<R.trailPositions.length;Mt++){const te=R.trailPositions[Mt];rt[Mt*3]=te.x,rt[Mt*3+1]=te.y,rt[Mt*3+2]=te.z}R.trail.geometry.attributes.position.needsUpdate=!0,R.trail.geometry.setDrawRange(0,R.trailPositions.length)}}else if(R.data.orbitType==="l2"&&R.data.startPlanet&&Ue[R.data.startPlanet]){const ct=Ue[R.data.startPlanet].container.position.clone(),rt=ct.clone().normalize(),Mt=ct.clone().add(rt.multiplyScalar(R.data.distance||10));R.container.position.copy(Mt),R.mesh.lookAt(Mt.clone().add(rt))}_===R.data.name?R.label.visible=!0:R.label.visible=!1}),F.render(J,de)};fe();const Ie=()=>{de.aspect=window.innerWidth/window.innerHeight,de.updateProjectionMatrix(),F.setSize(window.innerWidth,window.innerHeight),H(window.innerWidth<=768)};return window.addEventListener("resize",Ie),()=>{window.removeEventListener("resize",Ie),Ht&&(Ht.removeEventListener("pointermove",z),Ht.removeEventListener("pointerup",C)),lt.current&&(cancelAnimationFrame(lt.current),lt.current=null),St.current&&(cancelAnimationFrame(St.current),St.current=null),Hn.current&&clearTimeout(Hn.current),J.traverse(j=>{j.geometry&&j.geometry.dispose(),j.material&&(Array.isArray(j.material)?j.material.forEach(it=>it.dispose()):j.material.dispose())}),F.dispose(),r.current&&r.current.contains(F.domElement)&&r.current.removeChild(F.domElement)}},[O,z,C]),setTimeout(()=>{x(!0),setTimeout(()=>{g(!1)},500)},2500);const zt=we.useRef(null),At=we.useCallback(J=>{if(!Ut.current||!yt.current)return;St.current&&cancelAnimationFrame(St.current),zt.current=J;const Bt=oe.current&&oe.current[J];if(ce.current&&ce.current[J],Bt){const Vt=()=>{const de=oe.current[J];if(!de||!Ut.current||!yt.current){St.current&&(cancelAnimationFrame(St.current),St.current=null);return}const F=new L;if(de.container.getWorldPosition(F),de.data.startPlanet&&de.data.orbitType==="planetary"){const Ht=ce.current[de.data.startPlanet];if(Ht){const ut=new L;Ht.container.getWorldPosition(ut);const xt=new L().addVectors(F,ut).multiplyScalar(.5),kt=F.distanceTo(ut)*1.5,ye=new L().subVectors(Ut.current.position,xt).normalize().multiplyScalar(kt);yt.current.target.lerp(xt,.05),Ut.current.position.lerp(new L().addVectors(xt,ye),.05)}else{yt.current.target.lerp(F,.05);const ut=de.data.scale*20,kt=new L().subVectors(Ut.current.position,F).normalize().multiplyScalar(ut);Ut.current.position.lerp(new L().addVectors(F,kt),.05)}}else{yt.current.target.lerp(F,.05);const Ht=de.data.scale*20,xt=new L().subVectors(Ut.current.position,F).normalize().multiplyScalar(Ht);Ut.current.position.lerp(new L().addVectors(F,xt),.05)}yt.current.update(),St.current=requestAnimationFrame(Vt)};Vt()}else{const Vt=J?ce.current[J]:null,de=new L;if(Vt){if(Vt.container.getWorldPosition(de),Vt.mesh){const Ze=new L;Vt.mesh.getWorldPosition(Ze),Vt.container.getWorldPosition(de)}}else de.set(0,0,0);let F=100;if(Vt){let Ze=0;Ye.current[J]&&Ye.current[J].length>0&&Ye.current[J].forEach(ke=>{ke.data.distance>Ze&&(Ze=ke.data.distance)}),F=Vt.data.radius*3+Ze*2.5}const Ht=new L(F,F*.7,F),ut=Ut.current.position.clone(),xt=yt.current.target.clone(),kt=Vt?new L().addVectors(de,Ht):new L(0,30,100);let jt=0;const ye=100,He=()=>{if(jt<=ye){const Ze=jt/ye,ke=1-Math.pow(1-Ze,3);Ut.current.position.lerpVectors(ut,kt,ke);const On=new L().lerpVectors(xt,de,ke);yt.current.target.copy(On),yt.current.update(),ae.current&&Dt.current&&ae.current.render(Dt.current,Ut.current),jt++,St.current=requestAnimationFrame(He)}};He()}},[]),Ae=(J,Bt)=>{const Vt=vr[J];if(!Vt)return null;const[de,F,Ht,ut,xt,kt,jt,ye,He,Ze,ke,On,Ln]=Vt;return{a:de+ye*Bt,e:F+He*Bt,i:(Ht+Ze*Bt)*gr,L:(ut+ke*Bt)%360,long_peri:(xt+On*Bt)%360,long_node:(kt+Ln*Bt)%360,period:jt}},le=(J,Bt)=>{J=J%(2*Math.PI),J<0&&(J+=2*Math.PI);let Vt;Bt<.8?Vt=J+Bt*Math.sin(J)*(1+Bt*Math.cos(J)):Vt=Math.PI;const de=1e-12;let F=1,Ht=0;const ut=50;for(;Math.abs(F)>de&&Ht<ut;)F=(Vt-Bt*Math.sin(Vt)-J)/(1-Bt*Math.cos(Vt)),Vt-=F,Ht++,Bt>.9&&Ht<3&&(F*=.5);return Vt},Se=(J,Bt)=>{const F=(J.getTime()-rT.getTime())/(1e3*60*60*24)/oT;Object.entries(Bt).forEach(([Ht,ut])=>{if(!ut||!ut.data)return;const xt=Ht;if(!vr[xt]){console.log(`No orbital elements for ${xt}`);return}const kt=Ae(xt,F),{a:jt,e:ye,i:He,L:Ze,long_peri:ke,long_node:On,period:Ln}=kt,$a=(Ze-ke)*gr,Pa=le($a,ye),gi=Math.cos(Pa),Ua=Math.sin(Pa),ga=Math.atan2(Math.sqrt(1-ye*ye)*Ua,gi-ye),Ue=jt*(1-ye*gi),jn=(ke-On)*gr,yn=On*gr,zn=Ue*Math.cos(ga),zi=Ue*Math.sin(ga),Na=zn*Math.cos(jn)-zi*Math.sin(jn),Ii=zn*Math.sin(jn)+zi*Math.cos(jn),Bs=Na,ts=Ii*Math.cos(He),va=Ii*Math.sin(He),es=Bs*Math.cos(yn)-ts*Math.sin(yn),Yi=Bs*Math.sin(yn)+ts*Math.cos(yn),D=va,K=es*nm,ht=D*nm,ot=Yi*nm;ut.container.position.set(K,ht,ot),ut.angle=ga})},Je=J=>{if(!ce.current)return;const Bt=new Date(J);Bt.setUTCHours(12,0,0,0),Se(Bt,ce.current)},Qt=J=>{Y(J),J?Je(J):be()},be=()=>{ce.current&&Object.values(ce.current).forEach(J=>{J.angle=Math.random()*Math.PI*2;const Bt=J.data.distance,Vt=J.data.eccentricity||.01,de=J.data.inclination||0,F=Bt,Ht=F*Math.sqrt(1-Vt*Vt),ut=F*Vt,xt=F*Math.cos(J.angle)+ut,kt=Ht*Math.sin(J.angle),jt=-kt*Math.sin(de),ye=kt*Math.cos(de);J.container.position.set(xt,jt,ye)})};we.useEffect(()=>{const J=()=>{document.hidden&&O?lt.current&&(cancelAnimationFrame(lt.current),lt.current=null):lt.current||(lt.current=requestAnimationFrame(animate))};return document.addEventListener("visibilitychange",J),()=>{document.removeEventListener("visibilitychange",J)}},[O]),we.useEffect(()=>{if(!O||!T)return;const J=Bt=>{t.current&&!t.current.contains(Bt.target)&&n.current&&!n.current.contains(Bt.target)&&E(!1)};return document.addEventListener("mousedown",J),document.addEventListener("touchstart",J),()=>{document.removeEventListener("mousedown",J),document.removeEventListener("touchstart",J)}},[O,T]);const Oe=()=>{E(!T)},Ce=({onDateChange:J})=>{const[Bt,Vt]=we.useState(new Date().toISOString().split("T")[0]),[de,F]=we.useState(!1),Ht=we.useRef(null),ut=we.useRef(null);we.useEffect(()=>{if(!O)return;const He=Ze=>{Ht.current&&!Ht.current.contains(Ze.target)&&ut.current&&!ut.current.contains(Ze.target)&&F(!1)};return document.addEventListener("mousedown",He),document.addEventListener("touchstart",He),()=>{document.removeEventListener("mousedown",He),document.removeEventListener("touchstart",He)}},[O]);const xt=He=>{Vt(He.target.value)},kt=()=>{J(new Date(Bt)),O&&F(!1)},jt=()=>{J(new Date),O&&F(!1)},ye=()=>{F(!de)};return st.jsxs(st.Fragment,{children:[st.jsxs("div",{className:"fixed inset-0 pointer-events-none overflow-hidden opacity-30 z-10",children:[st.jsx("div",{className:"stars-small"}),st.jsx("div",{className:"stars-medium"}),st.jsx("div",{className:"stars-large"})]}),st.jsxs("div",{className:`fixed ${O?"bottom-3 right-3":"bottom-4 right-4"} z-20`,children:[st.jsx("button",{onClick:ye,className:`cosmic-btn rounded-full ${O?"w-12 h-12":"w-14 h-14"} flex items-center justify-center shadow-xl transition-all duration-500 ${de?"bg-purple-600 rotate-45 scale-110":"bg-purple-500 hover:scale-110"}`,style:{boxShadow:de?"0 0 15px rgba(168, 85, 247, 0.7), 0 0 30px rgba(168, 85, 247, 0.4)":"0 0 10px rgba(168, 85, 247, 0.4), 0 0 20px rgba(168, 85, 247, 0.2)"},children:st.jsxs("div",{className:"relative",children:[st.jsx(Ww,{size:O?22:26,className:"text-white",strokeWidth:2.5}),st.jsx("div",{className:`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${de?"opacity-0":"opacity-100"}`,children:st.jsx("div",{className:"absolute w-7 h-7 rounded-full bg-pink-500/20 animate-ping"})})]})}),st.jsxs("div",{className:`absolute right-0 bottom-16 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform ${de?"scale-100 opacity-100":"scale-90 opacity-0 pointer-events-none"}`,style:{width:O?"220px":"340px",background:"linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(17, 24, 39, 0.98))",backdropFilter:"blur(12px)",border:"1px solid rgba(139, 92, 246, 0.3)",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(30, 27, 75, 0.5)"},children:[st.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/70 via-purple-500/70 to-violet-500/70"}),st.jsx("div",{className:"absolute top-1 left-4 w-2 h-2 rounded-full bg-blue-400 animate-pulse"}),st.jsx("div",{className:"absolute top-1 right-4 w-2 h-2 rounded-full bg-purple-400 animate-pulse"}),st.jsxs("div",{className:`${O?"p-3":"p-4"}`,children:[st.jsxs("div",{className:"flex items-center justify-between mb-3",children:[st.jsxs("h3",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-sm font-medium flex items-center",children:[st.jsxs("svg",{className:"w-4 h-4 mr-1.5",viewBox:"0 0 24 24",fill:"none",children:[st.jsx("path",{d:"M12 4V2M12 20v2M6.31 6.31L4.9 4.9M17.69 17.69l1.41 1.41M4 12H2M20 12h2M6.31 17.69L4.9 19.1M17.69 6.31l1.41-4.9",stroke:"url(#timeGradient)",strokeWidth:"2",strokeLinecap:"round"}),st.jsxs("linearGradient",{id:"timeGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[st.jsx("stop",{offset:"0%",stopColor:"#818cf8"}),st.jsx("stop",{offset:"100%",stopColor:"#c084fc"})]})]}),"Cosmic Calendar"]}),st.jsx("button",{onClick:ye,className:"text-violet-400 hover:text-white transition-colors p-1 hover:bg-purple-900/30 rounded-full",children:st.jsx(sT,{size:16,strokeWidth:2.5})})]}),st.jsxs("div",{className:"mb-3 relative",children:[st.jsx("label",{htmlFor:"date-picker",className:"text-xs text-indigo-300 mb-1 block",children:"Select Cosmic Date"}),st.jsxs("div",{className:"relative",children:[st.jsx("input",{id:"date-picker",type:"date",value:Bt,onChange:xt,className:`w-full bg-indigo-950/60 border border-violet-700/30 rounded-lg px-2 ${O?"py-1.5 text-sm":"py-2.5 text-sm"} text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all`}),st.jsx("div",{className:"absolute inset-0 pointer-events-none rounded-lg",style:{background:"linear-gradient(145deg, rgba(139, 92, 246, 0.05), transparent)",boxShadow:"inset 0 1px 1px rgba(255, 255, 255, 0.1)"}})]})]}),st.jsxs("div",{className:"flex gap-2",children:[st.jsxs("button",{onClick:kt,className:"flex-1 relative overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-violet-700 hover:from-indigo-600 hover:via-purple-600 hover:to-violet-600 text-white text-xs px-2 py-1.5 rounded-lg transition-all duration-300 flex items-center justify-center group",style:{boxShadow:"0 4px 10px rgba(139, 92, 246, 0.3)"},children:[st.jsx("div",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500/0 via-white/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full"}),st.jsxs("svg",{className:"w-3 h-3 mr-1",viewBox:"0 0 24 24",fill:"none",children:[st.jsx("path",{d:"M13 5l9 7-9 7V5z",fill:"white"}),st.jsx("path",{d:"M2 18V6a2 2 0 012-2h3a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2z",fill:"white"})]}),"Navigate"]}),bt&&st.jsxs("button",{onClick:jt,className:"flex-1 relative overflow-hidden bg-indigo-900/40 hover:bg-indigo-800/60 text-indigo-300 hover:text-white text-xs py-1.5 rounded-lg border border-indigo-700/30 transition-all duration-300 flex items-center justify-center",children:[st.jsx(v_,{size:12,strokeWidth:2.5,className:"mr-1"}),"Reset"]})]})]})]}),bt&&st.jsx("div",{className:`fixed ${O?"top-3":"top-4"} left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-full z-10 transition-all duration-500 ${bt?"opacity-100 translate-y-0":"opacity-0 -translate-y-4 pointer-events-none"}`,style:{background:"linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(17, 24, 39, 0.95))",backdropFilter:"blur(8px)",border:"1px solid rgba(139, 92, 246, 0.3)",boxShadow:"0 6px 16px rgba(0, 0, 0, 0.4), 0 0 12px rgba(139, 92, 246, 0.2), inset 0 0 2px rgba(255, 255, 255, 0.1)"},children:st.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[st.jsxs("div",{className:"relative",children:[st.jsx(v_,{size:O?14:18,strokeWidth:2,className:"text-violet-400"}),st.jsx("div",{className:"absolute w-5 h-5 rounded-full bg-violet-500/20 animate-ping opacity-60",style:{top:"-3px",left:"-3px"}})]}),st.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 font-medium text-xs",children:bt.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]})})]}),st.jsx("style",{jsx:!0,children:`
          .cosmic-btn {
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
          .cosmic-btn::after {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(
              circle,
              rgba(168, 85, 247, 0.4) 0%,
              transparent 50%
            );
            opacity: 0;
            transition: opacity 0.6s;
            z-index: -1;
            transform: rotate(30deg);
          }
          .cosmic-btn:hover::after {
            opacity: 1;
          }

          @keyframes twinkle {
            0%,
            100% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
          }

          .stars-small,
          .stars-medium,
          .stars-large {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .stars-small::after,
          .stars-medium::after,
          .stars-large::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            animation: twinkle linear infinite;
          }

          .stars-small::after {
            background-image: radial-gradient(
                1px 1px at 10px 10px,
                white,
                transparent
              ),
              radial-gradient(1px 1px at 20px 50px, white, transparent),
              radial-gradient(1px 1px at 30px 100px, white, transparent),
              radial-gradient(1px 1px at 90px 40px, white, transparent),
              radial-gradient(1px 1px at 130px 80px, white, transparent),
              radial-gradient(1px 1px at 160px 120px, white, transparent);
            background-repeat: repeat;
            background-size: 200px 200px;
            animation-duration: 5s;
          }

          .stars-medium::after {
            background-image: radial-gradient(
                1.5px 1.5px at 50px 160px,
                rgba(255, 255, 255, 0.9),
                transparent
              ),
              radial-gradient(
                1.5px 1.5px at 90px 40px,
                rgba(255, 255, 255, 0.9),
                transparent
              ),
              radial-gradient(
                1.5px 1.5px at 130px 80px,
                rgba(255, 255, 255, 0.9),
                transparent
              ),
              radial-gradient(
                1.5px 1.5px at 170px 120px,
                rgba(255, 255, 255, 0.9),
                transparent
              );
            background-repeat: repeat;
            background-size: 300px 300px;
            animation-duration: 7s;
            animation-delay: 0.5s;
          }

          .stars-large::after {
            background-image: radial-gradient(
                2px 2px at 100px 50px,
                rgba(255, 255, 255, 0.8),
                transparent
              ),
              radial-gradient(
                2px 2px at 200px 100px,
                rgba(255, 255, 255, 0.8),
                transparent
              ),
              radial-gradient(
                2px 2px at 300px 150px,
                rgba(255, 255, 255, 0.8),
                transparent
              );
            background-repeat: repeat;
            background-size: 400px 400px;
            animation-duration: 10s;
            animation-delay: 1s;
          }
        `})]})};return st.jsxs(st.Fragment,{children:[st.jsx(cT,{}),p&&st.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${v?"opacity-0":"opacity-100"}`,style:{background:"#09051a"},children:[st.jsxs("div",{className:"absolute inset-0 bg-black overflow-hidden",children:[st.jsx("div",{className:"absolute inset-0 dynamic-stars"}),st.jsx("div",{className:"absolute inset-0 cosmic-dust"})]}),st.jsxs("div",{className:"relative flex flex-col items-center justify-center w-full h-full overflow-hidden",children:[st.jsx("div",{className:"relative mb-24",children:st.jsxs("div",{className:"cosmic-portal",children:[st.jsx("div",{className:"portal-outer-ring"}),st.jsxs("div",{className:"portal-vortex",children:[st.jsx("div",{className:"vortex-spiral"}),st.jsx("div",{className:"vortex-core"}),st.jsx("div",{className:"vortex-light-rays"}),[...Array(24)].map((J,Bt)=>st.jsx("div",{className:"energy-particle",style:{transform:`rotate(${Bt*15}deg)`,animationDelay:`${Bt*.07}s`}},`energy-particle-${Bt}`))]}),st.jsxs("div",{className:"orbital-system",children:[st.jsx("div",{className:"orbit orbit-1",children:st.jsx("div",{className:"planet planet-1"})}),st.jsx("div",{className:"orbit orbit-2",children:st.jsx("div",{className:"planet planet-2"})}),st.jsx("div",{className:"orbit orbit-3",children:st.jsx("div",{className:"planet planet-3"})})]}),st.jsx("div",{className:"energy-streams",children:[...Array(8)].map((J,Bt)=>st.jsx("div",{className:"energy-stream",style:{transform:`rotate(${Bt*45}deg)`,animationDelay:`${Bt*.25}s`}},`stream-${Bt}`))}),st.jsxs("div",{className:"pulse-rings",children:[st.jsx("div",{className:"pulse-ring pulse-ring-1"}),st.jsx("div",{className:"pulse-ring pulse-ring-2"}),st.jsx("div",{className:"pulse-ring pulse-ring-3"})]})]})}),st.jsxs("div",{className:"logo-container",children:[st.jsx("h1",{className:"text-5xl sm:text-6xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-200 to-violet-300",children:"SPACE"}),st.jsx("div",{className:"mt-2 h-px w-40 mx-auto",style:{background:"linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.6), transparent)"}})]}),st.jsx("div",{className:"mt-8 relative",children:st.jsxs("div",{className:"flex items-center justify-center text-sm font-light tracking-wider text-violet-300/80",children:[st.jsx("span",{className:"relative pr-3",children:"Entering into a small "}),st.jsxs("div",{className:"flex space-x-1 items-center",children:[st.jsx("div",{className:"dot-pulse dot-1"}),st.jsx("div",{className:"dot-pulse dot-2"}),st.jsx("div",{className:"dot-pulse dot-3"})]})]})}),st.jsx("style",{jsx:!0,children:`
              .dynamic-stars {
                position: absolute;
                inset: 0;
                background-image: radial-gradient(
                    1px 1px at 25% 25%,
                    white 100%,
                    transparent
                  ),
                  radial-gradient(1px 1px at 75% 75%, white 100%, transparent),
                  radial-gradient(
                    1.5px 1.5px at 10% 50%,
                    white 100%,
                    transparent
                  ),
                  radial-gradient(
                    1.5px 1.5px at 50% 10%,
                    white 100%,
                    transparent
                  ),
                  radial-gradient(
                    1.5px 1.5px at 90% 50%,
                    white 100%,
                    transparent
                  ),
                  radial-gradient(
                    1.5px 1.5px at 50% 95%,
                    white 100%,
                    transparent
                  ),
                  radial-gradient(2px 2px at 30% 80%, white 100%, transparent),
                  radial-gradient(2px 2px at 70% 30%, white 100%, transparent);
                background-size: 200% 200%;
                opacity: 0.5;
                animation: stars-drift 120s linear infinite;
              }

              .cosmic-dust {
                position: absolute;
                inset: 0;
                background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjAxIiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiBzZWVkPSI0MiIgLz4KICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAuMiIgLz4KICAgIDxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IlNvdXJjZUdyYXBoaWMiIG1vZGU9Im11bHRpcGx5IiAvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIC8+Cjwvc3ZnPg==");
                background-size: 150% 150%;
                opacity: 0.12;
                animation: dust-drift 180s linear infinite;
                mix-blend-mode: screen;
              }

              .cosmic-portal {
                position: relative;
                width: 300px;
                height: 300px;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .portal-outer-ring {
                position: absolute;
                width: 280px;
                height: 280px;
                border: 2px solid rgba(139, 92, 246, 0.2);
                border-radius: 50%;
                box-shadow: 0 0 40px 5px rgba(139, 92, 246, 0.3),
                  inset 0 0 20px 5px rgba(139, 92, 246, 0.2);
                animation: ring-pulse 4s ease-in-out infinite;
              }

              .portal-vortex {
                position: absolute;
                width: 200px;
                height: 200px;
                border-radius: 50%;
                overflow: hidden;
                box-shadow: 0 0 60px 10px rgba(139, 92, 246, 0.4);
              }

              .vortex-spiral {
                position: absolute;
                inset: 0;
                background: conic-gradient(
                  from 0deg,
                  #2d1b69,
                  #4c249c,
                  #7e22ce,
                  #a855f7,
                  #7e22ce,
                  #4c249c,
                  #2d1b69
                );
                animation: spiral-spin 8s linear infinite;
                border-radius: 50%;
                filter: blur(5px);
              }

              .vortex-spiral::before {
                content: "";
                position: absolute;
                inset: 25%;
                background: black;
                border-radius: 50%;
                z-index: 10;
                box-shadow: 0 0 40px 10px rgba(0, 0, 0, 0.7);
              }

              .vortex-spiral::after {
                content: "";
                position: absolute;
                inset: 0;
                background: radial-gradient(
                  circle at center,
                  transparent 35%,
                  rgba(0, 0, 0, 0.4) 100%
                );
                border-radius: 50%;
                z-index: 5;
              }

              .vortex-core {
                position: absolute;
                inset: 40%;
                background: radial-gradient(
                  circle at center,
                  #c4b5fd 0%,
                  #a855f7 50%,
                  #7e22ce 100%
                );
                border-radius: 50%;
                filter: blur(10px);
                opacity: 0.8;
                z-index: 15;
                animation: core-pulse 3s ease-in-out infinite;
              }

              .vortex-light-rays {
                position: absolute;
                inset: 0;
                background-image: radial-gradient(
                  circle at center,
                  transparent 40%,
                  rgba(139, 92, 246, 0.1) 40.5%,
                  transparent 41%,
                  transparent 45%,
                  rgba(139, 92, 246, 0.1) 45.5%,
                  transparent 46%,
                  transparent 50%,
                  rgba(139, 92, 246, 0.1) 50.5%,
                  transparent 51%,
                  transparent 55%,
                  rgba(139, 92, 246, 0.1) 55.5%,
                  transparent 56%,
                  transparent 60%,
                  rgba(139, 92, 246, 0.1) 60.5%,
                  transparent 61%,
                  transparent 70%,
                  rgba(139, 92, 246, 0.1) 70.5%,
                  transparent 71%,
                  transparent 80%,
                  rgba(139, 92, 246, 0.1) 80.5%,
                  transparent 81%,
                  transparent 90%,
                  rgba(139, 92, 246, 0.1) 90.5%,
                  transparent 91%
                );
                filter: blur(1px);
                animation: rays-rotation 15s linear infinite;
                z-index: 12;
                opacity: 0.7;
              }

              .energy-particle {
                position: absolute;
                width: 100px;
                height: 2px;
                background: linear-gradient(
                  90deg,
                  transparent,
                  rgba(139, 92, 246, 0.8),
                  transparent
                );
                transform-origin: center;
                animation: particle-travel 3s ease-in-out infinite;
                opacity: 0.7;
                border-radius: 50%;
                filter: blur(1px);
                z-index: 20;
              }

              .orbital-system {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 30;
              }

              .orbit {
                position: absolute;
                border-radius: 50%;
                border: 1px solid rgba(139, 92, 246, 0.1);
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }

              .orbit-1 {
                width: 280px;
                height: 280px;
                animation: orbit-rotate 25s linear infinite;
              }

              .orbit-2 {
                width: 340px;
                height: 340px;
                animation: orbit-rotate 40s linear infinite reverse;
              }

              .orbit-3 {
                width: 400px;
                height: 400px;
                animation: orbit-rotate 55s linear infinite;
              }

              .planet {
                position: absolute;
                border-radius: 50%;
              }

              .planet-1 {
                width: 16px;
                height: 16px;
                background: radial-gradient(
                  circle at 30% 30%,
                  #c4b5fd 0%,
                  #8b5cf6 100%
                );
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                box-shadow: 0 0 15px 3px rgba(139, 92, 246, 0.5);
              }

              .planet-2 {
                width: 12px;
                height: 12px;
                background: radial-gradient(
                  circle at 30% 30%,
                  #ddd6fe 0%,
                  #a78bfa 100%
                );
                top: 70%;
                left: 85%;
                box-shadow: 0 0 12px 2px rgba(139, 92, 246, 0.4);
              }

              .planet-3 {
                width: 20px;
                height: 20px;
                background: radial-gradient(
                  circle at 30% 30%,
                  #7e22ce 0%,
                  #581c87 100%
                );
                top: 25%;
                left: 10%;
                box-shadow: 0 0 20px 4px rgba(126, 34, 206, 0.5);
              }

              .energy-streams {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 25;
              }

              .energy-stream {
                position: absolute;
                width: 150px;
                height: 3px;
                background: linear-gradient(
                  90deg,
                  rgba(139, 92, 246, 0.01),
                  rgba(139, 92, 246, 0.5)
                );
                top: 50%;
                left: 50%;
                transform-origin: left;
                animation: energy-flow 3s ease-in-out infinite;
                border-radius: 10px;
                filter: blur(1px);
              }

              .pulse-rings {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 15;
              }

              .pulse-ring {
                position: absolute;
                border-radius: 50%;
                border: 1px solid rgba(139, 92, 246, 0.3);
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
              }

              .pulse-ring-1 {
                animation: pulse-expand 4s ease-out infinite;
              }

              .pulse-ring-2 {
                animation: pulse-expand 4s ease-out infinite 1.3s;
              }

              .pulse-ring-3 {
                animation: pulse-expand 4s ease-out infinite 2.6s;
              }

              .logo-container {
                animation: float-subtle 6s ease-in-out infinite;
              }

              .dot-pulse {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: rgba(139, 92, 246, 0.8);
                animation: dot-pulse 1.5s ease-in-out infinite;
              }

              .dot-2 {
                animation-delay: 0.2s;
              }

              .dot-3 {
                animation-delay: 0.4s;
              }

              @keyframes stars-drift {
                0% {
                  background-position: 0% 0%;
                }
                100% {
                  background-position: 100% 100%;
                }
              }

              @keyframes dust-drift {
                0% {
                  background-position: 0% 0%;
                }
                100% {
                  background-position: 100% 100%;
                }
              }

              @keyframes ring-pulse {
                0%,
                100% {
                  transform: scale(1);
                  opacity: 0.6;
                }
                50% {
                  transform: scale(1.05);
                  opacity: 0.8;
                }
              }

              @keyframes spiral-spin {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }

              @keyframes core-pulse {
                0%,
                100% {
                  transform: scale(0.8);
                  opacity: 0.6;
                  filter: blur(8px);
                }
                50% {
                  transform: scale(1.2);
                  opacity: 0.9;
                  filter: blur(12px);
                }
              }

              @keyframes rays-rotation {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }

              @keyframes particle-travel {
                0% {
                  opacity: 0;
                  width: 0;
                  transform: rotate(var(--rotation)) translateX(10px);
                }

                50% {
                  opacity: 0.7;
                  width: 100px;
                }

                100% {
                  opacity: 0;
                  width: 0;
                  transform: rotate(var(--rotation)) translateX(100px);
                }
              }

              @keyframes orbit-rotate {
                0% {
                  transform: translate(-50%, -50%) rotate(0deg);
                }
                100% {
                  transform: translate(-50%, -50%) rotate(360deg);
                }
              }

              @keyframes energy-flow {
                0% {
                  opacity: 0;
                  transform: rotate(var(--rotation)) scaleX(0.3);
                }

                50% {
                  opacity: 0.7;
                  transform: rotate(var(--rotation)) scaleX(1);
                }

                100% {
                  opacity: 0;
                  transform: rotate(var(--rotation)) scaleX(0.3);
                }
              }

              @keyframes pulse-expand {
                0% {
                  width: 200px;
                  height: 200px;
                  opacity: 0.6;
                }

                100% {
                  width: 500px;
                  height: 500px;
                  opacity: 0;
                }
              }

              @keyframes float-subtle {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
              }

              @keyframes dot-pulse {
                0%,
                100% {
                  transform: scale(0.5);
                  opacity: 0.3;
                }
                50% {
                  transform: scale(1.2);
                  opacity: 1;
                }
              }
            `})]})]}),st.jsxs("div",{className:"w-full h-screen bg-[#050714] relative overflow-hidden",children:[st.jsx("div",{ref:r,className:"w-full h-full"}),U&&st.jsx("div",{id:"planet-tooltip",className:"absolute bg-[#0a0d1e]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-sm font-medium z-50 pointer-events-none transform-gpu",style:{left:Q.current.x+15,top:Q.current.y-15,border:"1px solid rgba(138, 43, 226, 0.3)",boxShadow:"0 4px 10px rgba(138, 43, 226, 0.4)",opacity:.95,transition:"opacity 0.15s ease, transform 0.1s ease-out"},children:st.jsx("span",{className:"whitespace-nowrap",children:U})}),O&&st.jsx("div",{className:"absolute top-3 right-3 z-30",children:st.jsx("button",{ref:n,onClick:Oe,className:"control-toggle-button bg-[#0a0d1e]/80 text-[#e4c6ff] h-11 w-11 rounded-full flex items-center justify-center shadow-lg border border-[#9d4edd]/70",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:st.jsx("span",{style:{fontSize:"28px",fontWeight:"bold",lineHeight:"28px",height:"28px",width:"28px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",top:T?"-1px":"0"},children:T?"×":"☰"})})}),st.jsxs("div",{ref:t,className:`absolute ${O?"top-3 left-3 right-16 max-w-xs":"top-4 left-4 max-w-xs"} 
    bg-[#0a0d1e]/80 ${O?"p-3":"p-4"} rounded-xl text-white shadow-xl backdrop-filter backdrop-blur-md 
    border border-[#9d4edd]/40 transition-all duration-300 transform z-20
    ${O&&!T?"-translate-y-full opacity-0":"translate-y-0 opacity-100"}`,style:{boxShadow:"0 8px 24px rgba(0, 0, 0, 0.7), 0 0 15px rgba(138, 43, 226, 0.3)",background:"linear-gradient(135deg, rgba(10, 13, 30, 0.85), rgba(6, 7, 20, 0.95))"},children:[st.jsx("h2",{className:`${O?"text-lg":"text-xl"} font-bold ${O?"mb-3":"mb-4"} text-center relative`,children:st.jsxs("span",{className:"relative inline-block",style:{letterSpacing:O?"0.02em":"0.04em",fontSize:O?"1.75rem":"2.25rem"},children:[st.jsx("span",{className:"relative z-10 bg-gradient-to-r from-[#e4c6ff] via-[#c77dff] to-[#9d4edd] text-transparent bg-clip-text",style:{textShadow:"0 0 15px rgba(138, 43, 226, 0.5)"},children:"Space"}),st.jsx("div",{className:"absolute -bottom-1 left-0 right-0 bg-gradient-to-r from-transparent via-[#c77dff] to-transparent",style:{height:"1px",boxShadow:"0 0 8px rgba(138, 43, 226, 0.6)"}})]})}),st.jsx("div",{className:`${O?"space-y-3":"space-y-4"}`,children:st.jsx("div",{className:`grid ${O?"grid-cols-5":"grid-cols-6"} gap-3`,children:[{label:"Planets",icon:tm,checked:a,setter:o},{label:"Orbits",icon:tT,checked:y,setter:b},{label:"Moons",icon:Jw,checked:w,setter:M},{label:"Spacecraft",icon:em,checked:k,setter:gt},{label:"Stars",icon:iT,checked:mt,setter:Jt},...O?[]:[{label:"Asteroids",icon:kw,checked:h,setter:m}]].map((J,Bt)=>st.jsxs("label",{className:"flex items-center justify-center space-x-1 cursor-pointer group",title:J.label,children:[st.jsx(J.icon,{className:"w-4 h-4 text-[#c77dff] group-hover:text-[#e4c6ff] transition-colors duration-200"}),st.jsxs("div",{className:"relative",children:[st.jsx("input",{type:"checkbox",checked:J.checked,onChange:Vt=>J.setter(Vt.target.checked),className:"opacity-0 absolute h-5 w-5"}),st.jsx("div",{className:`border-2 rounded-md h-4 w-4 flex flex-shrink-0 justify-center items-center
                ${J.checked?"bg-gradient-to-r from-[#9d4edd] to-[#7b2cbf] border-transparent":"border-[#c77dff]/50 bg-[#0a0d1e]/50"}`,children:st.jsx("svg",{className:`h-3 w-3 text-white ${J.checked?"opacity-100":"opacity-0"}`,viewBox:"0 0 20 20",fill:"currentColor",children:st.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})]})]},Bt))})}),st.jsxs("div",{className:`${O?"mt-3":"mt-4"} mb-3`,children:[st.jsxs("p",{className:"text-xs font-medium text-[#c77dff] mb-1.5 flex items-center",children:[st.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3 mr-1.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:st.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Orbital Speed"]}),st.jsxs("div",{className:"flex items-center space-x-3",children:[st.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-[#c77dff]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:st.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),st.jsxs("div",{className:"relative w-full",children:[st.jsx("div",{className:"w-full h-1.5 bg-[#1e153a] rounded-full overflow-hidden",children:st.jsx("div",{className:"h-full bg-gradient-to-r from-[#7b2cbf] via-[#9d4edd] to-[#c77dff]",style:{width:`${G/3*100}%`}})}),st.jsx("input",{type:"range",min:"0.2",max:"3",step:"0.1",value:G,onChange:J=>W(parseFloat(J.target.value)),className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"})]}),st.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-[#c77dff]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:st.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})})]})]}),st.jsxs("div",{className:`${O?"mt-3":"mt-4"}`,children:[st.jsxs("p",{className:"text-xs font-medium text-[#c77dff] mb-1.5 flex items-center",children:[st.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3 mr-1.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:st.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),"Focus Target"]}),st.jsxs("div",{className:"relative w-full",children:[st.jsxs("button",{onClick:()=>Et(!dt),className:"w-full flex items-center justify-between bg-[#0a0d1e]/90 text-white font-semibold text-base py-2.5 px-4 rounded-lg border border-[#9d4edd]/40 hover:border-[#c77dff]/60 shadow-[0_0_10px_rgba(138,43,226,0.15)] hover:shadow-[0_0_15px_rgba(138,43,226,0.25)] transition-all duration-300 relative overflow-hidden group",children:[st.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#7b2cbf]/10 via-[#9d4edd]/5 to-[#c77dff]/10 opacity-30 group-hover:opacity-50 transition-opacity duration-300"}),st.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-transparent via-[#9d4edd]/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-out"}),st.jsxs("div",{className:"flex items-center space-x-2.5",children:[st.jsx("span",{className:"text-[#c77dff] transform group-hover:scale-110 transition-transform duration-300",children:_?_.includes("Voyager")||_.includes("Horizons")||_.includes("Parker")||_.includes("James")||_.includes("ISS")||_.includes("Perseverance")||_.includes("Cassini")||_.includes("Aditya")||_.includes("Mangalyaan")?st.jsx(em,{className:"h-5 w-5"}):st.jsx(g_,{className:"h-5 w-5"}):st.jsx(tm,{className:"h-5 w-5"})}),st.jsx("span",{className:"bg-gradient-to-br from-white via-[#e4c6ff] to-[#c77dff] text-transparent bg-clip-text truncate",children:_||"Solar System"})]}),st.jsx("div",{className:"relative z-10 rounded-full p-1.5 bg-[#7b2cbf]/40 group-hover:bg-[#9d4edd]/50 transition-colors duration-300",children:st.jsx("svg",{className:"w-4 h-4 text-[#e4c6ff] transform transition-all duration-300 group-hover:rotate-180",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:st.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:dt?"M5 15l7-7 7 7":"M19 9l-7 7-7-7"})})})]}),dt&&st.jsxs("div",{className:"absolute z-50 w-full mt-2 bg-[#0a0d1e]/95 rounded-lg shadow-lg border border-[#9d4edd]/30 overflow-hidden",style:{maxHeight:O?"220px":"280px",overflowY:"auto",backdropFilter:"blur(10px)",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.8), 0 0 15px rgba(138, 43, 226, 0.3)"},children:[st.jsx("div",{className:"px-4 py-2.5 cursor-pointer hover:bg-[#7b2cbf]/20 transition-colors border-b border-[#9d4edd]/20",onClick:()=>{if(N(null),Et(!1),Ut.current&&yt.current){const J=new L(0,30,100),Bt=new L(0,0,0);St.current&&(cancelAnimationFrame(St.current),St.current=null),zt.current=null;let Vt=0;const de=100,F=Ut.current.position.clone(),Ht=yt.current.target.clone(),ut=()=>{if(Vt<=de){const xt=Vt/de,kt=1-Math.pow(1-xt,3);Ut.current.position.lerpVectors(F,J,kt),yt.current.target.lerpVectors(Ht,Bt,kt),yt.current.update(),Vt++,St.current=requestAnimationFrame(ut)}};ut()}yt.current.enableDamping=!0,yt.current.enableRotate=!0,yt.current.enableZoom=!0,O&&E(!1)},children:st.jsxs("div",{className:"flex items-center",children:[st.jsx(tm,{className:"w-4 h-4 mr-2 text-yellow-300"}),st.jsx("span",{children:"Solar System"})]})}),st.jsxs("div",{className:"border-b border-[#9d4edd]/20",children:[st.jsx("div",{className:"px-4 py-1.5 text-xs text-[#c77dff] font-medium bg-[#7b2cbf]/20",children:"Planets"}),["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"].map(J=>st.jsx("div",{className:"px-4 py-2.5 pl-7 cursor-pointer hover:bg-[#7b2cbf]/20 transition-colors",onClick:()=>{N(J),Et(!1),At(J),O&&E(!1)},children:st.jsxs("div",{className:"flex items-center",children:[st.jsx(g_,{className:"w-3.5 h-3.5 mr-2 text-[#7da6ff]"}),st.jsx("span",{children:J})]})},J))]}),st.jsxs("div",{className:"border-b border-[#9d4edd]/20",children:[st.jsx("div",{className:"px-4 py-1.5 text-xs text-[#c77dff] font-medium bg-[#7b2cbf]/20",children:"Dwarf Planets"}),["Pluto","Ceres","Haumea","Makemake","Eris"].map(J=>st.jsx("div",{className:"px-4 py-2.5 pl-7 cursor-pointer hover:bg-[#7b2cbf]/20 transition-colors",onClick:()=>{N(J),Et(!1),At(J),O&&E(!1)},children:st.jsxs("div",{className:"flex items-center",children:[st.jsx("svg",{className:"w-3.5 h-3.5 mr-2 text-[#fa8072]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:st.jsx("circle",{cx:"12",cy:"12",r:"10",strokeDasharray:"4 2"})}),st.jsx("span",{children:J})]})},J))]}),st.jsxs("div",{children:[st.jsx("div",{className:"px-4 py-1.5 text-xs text-[#c77dff] font-medium bg-[#7b2cbf]/20",children:"Spacecrafts"}),["Voyager 1","Voyager 2","New Horizons","Parker Solar Probe","James Webb","ISS","Perseverance","Cassini","Aditya L1","Mangalyaan"].map(J=>st.jsx("div",{className:"px-4 py-2 pl-7 cursor-pointer hover:bg-[#7b2cbf]/20 transition-colors",onClick:()=>{N(J),Et(!1),At(J),O&&E(!1)},children:st.jsxs("div",{className:"flex items-center",children:[st.jsx(em,{className:"w-3.5 h-3.5 mr-2 text-[#c77dff]"}),st.jsx("span",{className:"whitespace-nowrap overflow-hidden text-ellipsis",children:J})]})},J))]})]})]})]}),st.jsxs("div",{className:`mt-3 text-xs text-center border-t border-gray-700/50 ${O?"pt-2":"pt-2.5"} flex items-center justify-center space-x-2`,children:[st.jsxs("span",{children:["Made by"," ",st.jsx("a",{href:"https://sahil-bhoite.github.io/Website/",target:"_blank",rel:"noopener noreferrer",className:"text-[#c77dff] hover:text-[#e4c6ff] transition-colors",children:"Sahil"})]}),st.jsx("a",{href:"https://sahil-bhoite.github.io/Website/",target:"_blank",rel:"noopener noreferrer",className:"text-[#c77dff] hover:text-[#e4c6ff] transition-colors",children:st.jsx(Zw,{size:14})})]})]}),!p&&st.jsx(Ce,{onDateChange:Qt})]})," "]})};Dy.createRoot(document.getElementById("root")).render(st.jsx(we.StrictMode,{children:st.jsx(uT,{})}));
