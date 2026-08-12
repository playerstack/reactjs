var renderPlayerStack=(()=>{var s6=Object.create;var Sl=Object.defineProperty;var a6=Object.getOwnPropertyDescriptor;var u6=Object.getOwnPropertyNames;var c6=Object.getPrototypeOf,d6=Object.prototype.hasOwnProperty;var p6=(e,t,n)=>t in e?Sl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var pt=(e,t)=>()=>(e&&(t=e(e=0)),t);var Dt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),sm=(e,t)=>{for(var n in t)Sl(e,n,{get:t[n],enumerable:!0})},am=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of u6(t))!d6.call(e,o)&&o!==n&&Sl(e,o,{get:()=>t[o],enumerable:!(r=a6(t,o))||r.enumerable});return e};var b=(e,t,n)=>(n=e!=null?s6(c6(e)):{},am(t||!e||!e.__esModule?Sl(n,"default",{value:e,enumerable:!0}):n,e)),f6=e=>am(Sl({},"__esModule",{value:!0}),e);var F=(e,t,n)=>(p6(e,typeof t!="symbol"?t+"":t,n),n);var wm=Dt(Z=>{"use strict";var wl=Symbol.for("react.element"),m6=Symbol.for("react.portal"),h6=Symbol.for("react.fragment"),y6=Symbol.for("react.strict_mode"),g6=Symbol.for("react.profiler"),v6=Symbol.for("react.provider"),S6=Symbol.for("react.context"),w6=Symbol.for("react.forward_ref"),x6=Symbol.for("react.suspense"),C6=Symbol.for("react.memo"),k6=Symbol.for("react.lazy"),um=Symbol.iterator;function b6(e){return e===null||typeof e!="object"?null:(e=um&&e[um]||e["@@iterator"],typeof e=="function"?e:null)}var pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fm=Object.assign,mm={};function ti(e,t,n){this.props=e,this.context=t,this.refs=mm,this.updater=n||pm}ti.prototype.isReactComponent={};ti.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ti.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hm(){}hm.prototype=ti.prototype;function td(e,t,n){this.props=e,this.context=t,this.refs=mm,this.updater=n||pm}var nd=td.prototype=new hm;nd.constructor=td;fm(nd,ti.prototype);nd.isPureReactComponent=!0;var cm=Array.isArray,ym=Object.prototype.hasOwnProperty,rd={current:null},gm={key:!0,ref:!0,__self:!0,__source:!0};function vm(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ym.call(t,r)&&!gm.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:wl,type:e,key:i,ref:l,props:o,_owner:rd.current}}function P6(e,t){return{$$typeof:wl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function od(e){return typeof e=="object"&&e!==null&&e.$$typeof===wl}function T6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var dm=/\/+/g;function ed(e,t){return typeof e=="object"&&e!==null&&e.key!=null?T6(""+e.key):t.toString(36)}function ia(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case wl:case m6:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ed(l,0):r,cm(o)?(n="",e!=null&&(n=e.replace(dm,"$&/")+"/"),ia(o,t,n,"",function(u){return u})):o!=null&&(od(o)&&(o=P6(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(dm,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",cm(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+ed(i,s);l+=ia(i,t,n,a,o)}else if(a=b6(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+ed(i,s++),l+=ia(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function oa(e,t,n){if(e==null)return e;var r=[],o=0;return ia(e,r,"","",function(i){return t.call(n,i,o++)}),r}function E6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var kt={current:null},la={transition:null},L6={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:la,ReactCurrentOwner:rd};function Sm(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:oa,forEach:function(e,t,n){oa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oa(e,function(){t++}),t},toArray:function(e){return oa(e,function(t){return t})||[]},only:function(e){if(!od(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=ti;Z.Fragment=h6;Z.Profiler=g6;Z.PureComponent=td;Z.StrictMode=y6;Z.Suspense=x6;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L6;Z.act=Sm;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fm({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=rd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)ym.call(t,a)&&!gm.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:wl,type:e.type,key:o,ref:i,props:r,_owner:l}};Z.createContext=function(e){return e={$$typeof:S6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:v6,_context:e},e.Consumer=e};Z.createElement=vm;Z.createFactory=function(e){var t=vm.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:w6,render:e}};Z.isValidElement=od;Z.lazy=function(e){return{$$typeof:k6,_payload:{_status:-1,_result:e},_init:E6}};Z.memo=function(e,t){return{$$typeof:C6,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=la.transition;la.transition={};try{e()}finally{la.transition=t}};Z.unstable_act=Sm;Z.useCallback=function(e,t){return kt.current.useCallback(e,t)};Z.useContext=function(e){return kt.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return kt.current.useDeferredValue(e)};Z.useEffect=function(e,t){return kt.current.useEffect(e,t)};Z.useId=function(){return kt.current.useId()};Z.useImperativeHandle=function(e,t,n){return kt.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return kt.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return kt.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return kt.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return kt.current.useReducer(e,t,n)};Z.useRef=function(e){return kt.current.useRef(e)};Z.useState=function(e){return kt.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return kt.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return kt.current.useTransition()};Z.version="18.3.1"});var I=Dt((q4,xm)=>{"use strict";xm.exports=wm()});var Om=Dt(ve=>{"use strict";function ad(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<sa(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Cn(e){return e.length===0?null:e[0]}function ua(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],a=l+1,u=e[a];if(0>sa(s,n))a<o&&0>sa(u,s)?(e[r]=u,e[a]=n,r=a):(e[r]=s,e[l]=n,r=l);else if(a<o&&0>sa(u,n))e[r]=u,e[a]=n,r=a;else break e}}return t}function sa(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Cm=performance,ve.unstable_now=function(){return Cm.now()}):(id=Date,km=id.now(),ve.unstable_now=function(){return id.now()-km});var Cm,id,km,qn=[],Rr=[],M6=1,ln=null,ft=3,ca=!1,fo=!1,Cl=!1,Tm=typeof setTimeout=="function"?setTimeout:null,Em=typeof clearTimeout=="function"?clearTimeout:null,bm=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ud(e){for(var t=Cn(Rr);t!==null;){if(t.callback===null)ua(Rr);else if(t.startTime<=e)ua(Rr),t.sortIndex=t.expirationTime,ad(qn,t);else break;t=Cn(Rr)}}function cd(e){if(Cl=!1,ud(e),!fo)if(Cn(qn)!==null)fo=!0,pd(dd);else{var t=Cn(Rr);t!==null&&fd(cd,t.startTime-e)}}function dd(e,t){fo=!1,Cl&&(Cl=!1,Em(kl),kl=-1),ca=!0;var n=ft;try{for(ud(t),ln=Cn(qn);ln!==null&&(!(ln.expirationTime>t)||e&&!Im());){var r=ln.callback;if(typeof r=="function"){ln.callback=null,ft=ln.priorityLevel;var o=r(ln.expirationTime<=t);t=ve.unstable_now(),typeof o=="function"?ln.callback=o:ln===Cn(qn)&&ua(qn),ud(t)}else ua(qn);ln=Cn(qn)}if(ln!==null)var i=!0;else{var l=Cn(Rr);l!==null&&fd(cd,l.startTime-t),i=!1}return i}finally{ln=null,ft=n,ca=!1}}var da=!1,aa=null,kl=-1,Lm=5,Mm=-1;function Im(){return!(ve.unstable_now()-Mm<Lm)}function ld(){if(aa!==null){var e=ve.unstable_now();Mm=e;var t=!0;try{t=aa(!0,e)}finally{t?xl():(da=!1,aa=null)}}else da=!1}var xl;typeof bm=="function"?xl=function(){bm(ld)}:typeof MessageChannel!="undefined"?(sd=new MessageChannel,Pm=sd.port2,sd.port1.onmessage=ld,xl=function(){Pm.postMessage(null)}):xl=function(){Tm(ld,0)};var sd,Pm;function pd(e){aa=e,da||(da=!0,xl())}function fd(e,t){kl=Tm(function(){e(ve.unstable_now())},t)}ve.unstable_IdlePriority=5;ve.unstable_ImmediatePriority=1;ve.unstable_LowPriority=4;ve.unstable_NormalPriority=3;ve.unstable_Profiling=null;ve.unstable_UserBlockingPriority=2;ve.unstable_cancelCallback=function(e){e.callback=null};ve.unstable_continueExecution=function(){fo||ca||(fo=!0,pd(dd))};ve.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Lm=0<e?Math.floor(1e3/e):5};ve.unstable_getCurrentPriorityLevel=function(){return ft};ve.unstable_getFirstCallbackNode=function(){return Cn(qn)};ve.unstable_next=function(e){switch(ft){case 1:case 2:case 3:var t=3;break;default:t=ft}var n=ft;ft=t;try{return e()}finally{ft=n}};ve.unstable_pauseExecution=function(){};ve.unstable_requestPaint=function(){};ve.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=ft;ft=e;try{return t()}finally{ft=n}};ve.unstable_scheduleCallback=function(e,t,n){var r=ve.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:M6++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,ad(Rr,e),Cn(qn)===null&&e===Cn(Rr)&&(Cl?(Em(kl),kl=-1):Cl=!0,fd(cd,n-r))):(e.sortIndex=o,ad(qn,e),fo||ca||(fo=!0,pd(dd))),e};ve.unstable_shouldYield=Im;ve.unstable_wrapCallback=function(e){var t=ft;return function(){var n=ft;ft=t;try{return e.apply(this,arguments)}finally{ft=n}}}});var Rm=Dt((j4,Am)=>{"use strict";Am.exports=Om()});var By=Dt(Gt=>{"use strict";var I6=I(),Yt=Rm();function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V0=new Set,Ul={};function To(e,t){Ci(e,t),Ci(e+"Capture",t)}function Ci(e,t){for(Ul[e]=t,e=0;e<t.length;e++)V0.add(t[e])}var dr=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Nd=Object.prototype.hasOwnProperty,O6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_m={},Dm={};function A6(e){return Nd.call(Dm,e)?!0:Nd.call(_m,e)?!1:O6.test(e)?Dm[e]=!0:(_m[e]=!0,!1)}function R6(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _6(e,t,n,r){if(t===null||typeof t=="undefined"||R6(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Tt(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ot[e]=new Tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ot[t]=new Tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ot[e]=new Tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ot[e]=new Tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ot[e]=new Tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ot[e]=new Tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ot[e]=new Tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ot[e]=new Tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ot[e]=new Tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Lp=/[\-:]([a-z])/g;function Mp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Lp,Mp);ot[t]=new Tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Lp,Mp);ot[t]=new Tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Lp,Mp);ot[t]=new Tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ot[e]=new Tt(e,1,!1,e.toLowerCase(),null,!1,!1)});ot.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ot[e]=new Tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ip(e,t,n,r){var o=ot.hasOwnProperty(t)?ot[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_6(t,n,o,r)&&(n=null),r||o===null?A6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hr=I6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),oi=Symbol.for("react.portal"),ii=Symbol.for("react.fragment"),Op=Symbol.for("react.strict_mode"),Bd=Symbol.for("react.profiler"),$0=Symbol.for("react.provider"),q0=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),zd=Symbol.for("react.suspense_list"),Rp=Symbol.for("react.memo"),Dr=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var H0=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Nm=Symbol.iterator;function bl(e){return e===null||typeof e!="object"?null:(e=Nm&&e[Nm]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,md;function Al(e){if(md===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);md=t&&t[1]||""}return`
`+md+e}var hd=!1;function yd(e,t){if(!e||hd)return"";hd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{hd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Al(e):""}function D6(e){switch(e.tag){case 5:return Al(e.type);case 16:return Al("Lazy");case 13:return Al("Suspense");case 19:return Al("SuspenseList");case 0:case 2:case 15:return e=yd(e.type,!1),e;case 11:return e=yd(e.type.render,!1),e;case 1:return e=yd(e.type,!0),e;default:return""}}function Vd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ii:return"Fragment";case oi:return"Portal";case Bd:return"Profiler";case Op:return"StrictMode";case Fd:return"Suspense";case zd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case q0:return(e.displayName||"Context")+".Consumer";case $0:return(e._context.displayName||"Context")+".Provider";case Ap:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rp:return t=e.displayName||null,t!==null?t:Vd(e.type)||"Memo";case Dr:t=e._payload,e=e._init;try{return Vd(e(t))}catch{}}return null}function N6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vd(t);case 8:return t===Op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function j0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function B6(e){var t=j0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fa(e){e._valueTracker||(e._valueTracker=B6(e))}function U0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=j0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $a(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function $d(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Bm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function W0(e,t){t=t.checked,t!=null&&Ip(e,"checked",t,!1)}function qd(e,t){W0(e,t);var n=Xr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hd(e,t.type,Xr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hd(e,t,n){(t!=="number"||$a(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rl=Array.isArray;function yi(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function jd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Rl(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xr(n)}}function Q0(e,t){var n=Xr(t.value),r=Xr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Y0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ud(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Y0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ma,X0=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F6=["Webkit","ms","Moz","O"];Object.keys(Nl).forEach(function(e){F6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nl[t]=Nl[e]})});function G0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nl.hasOwnProperty(e)&&Nl[e]?(""+t).trim():t+"px"}function K0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=G0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var z6=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wd(e,t){if(t){if(z6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Qd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yd=null;function _p(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xd=null,gi=null,vi=null;function $m(e){if(e=cs(e)){if(typeof Xd!="function")throw Error(A(280));var t=e.stateNode;t&&(t=hu(t),Xd(e.stateNode,e.type,t))}}function Z0(e){gi?vi?vi.push(e):vi=[e]:gi=e}function J0(){if(gi){var e=gi,t=vi;if(vi=gi=null,$m(e),t)for(e=0;e<t.length;e++)$m(t[e])}}function eh(e,t){return e(t)}function th(){}var gd=!1;function nh(e,t,n){if(gd)return e(t,n);gd=!0;try{return eh(e,t,n)}finally{gd=!1,(gi!==null||vi!==null)&&(th(),J0())}}function Ql(e,t){var n=e.stateNode;if(n===null)return null;var r=hu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Gd=!1;if(dr)try{ni={},Object.defineProperty(ni,"passive",{get:function(){Gd=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{Gd=!1}var ni;function V6(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Bl=!1,qa=null,Ha=!1,Kd=null,$6={onError:function(e){Bl=!0,qa=e}};function q6(e,t,n,r,o,i,l,s,a){Bl=!1,qa=null,V6.apply($6,arguments)}function H6(e,t,n,r,o,i,l,s,a){if(q6.apply(this,arguments),Bl){if(Bl){var u=qa;Bl=!1,qa=null}else throw Error(A(198));Ha||(Ha=!0,Kd=u)}}function Eo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qm(e){if(Eo(e)!==e)throw Error(A(188))}function j6(e){var t=e.alternate;if(!t){if(t=Eo(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return qm(o),e;if(i===r)return qm(o),t;i=i.sibling}throw Error(A(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function oh(e){return e=j6(e),e!==null?ih(e):null}function ih(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ih(e);if(t!==null)return t;e=e.sibling}return null}var lh=Yt.unstable_scheduleCallback,Hm=Yt.unstable_cancelCallback,U6=Yt.unstable_shouldYield,W6=Yt.unstable_requestPaint,Ne=Yt.unstable_now,Q6=Yt.unstable_getCurrentPriorityLevel,Dp=Yt.unstable_ImmediatePriority,sh=Yt.unstable_UserBlockingPriority,ja=Yt.unstable_NormalPriority,Y6=Yt.unstable_LowPriority,ah=Yt.unstable_IdlePriority,du=null,Wn=null;function X6(e){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(du,e,void 0,(e.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:Z6,G6=Math.log,K6=Math.LN2;function Z6(e){return e>>>=0,e===0?32:31-(G6(e)/K6|0)|0}var ha=64,ya=4194304;function _l(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ua(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=_l(s):(i&=l,i!==0&&(r=_l(i)))}else l=n&~o,l!==0?r=_l(l):i!==0&&(r=_l(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-En(t),o=1<<n,r|=e[n],t&=~o;return r}function J6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ex(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-En(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=J6(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Zd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uh(){var e=ha;return ha<<=1,!(ha&4194240)&&(ha=64),e}function vd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function as(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-En(t),e[t]=n}function tx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-En(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Np(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-En(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ue=0;function ch(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dh,Bp,ph,fh,mh,Jd=!1,ga=[],$r=null,qr=null,Hr=null,Yl=new Map,Xl=new Map,Br=[],nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jm(e,t){switch(e){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":Yl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xl.delete(t.pointerId)}}function Pl(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=cs(t),t!==null&&Bp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rx(e,t,n,r,o){switch(t){case"focusin":return $r=Pl($r,e,t,n,r,o),!0;case"dragenter":return qr=Pl(qr,e,t,n,r,o),!0;case"mouseover":return Hr=Pl(Hr,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Yl.set(i,Pl(Yl.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Xl.set(i,Pl(Xl.get(i)||null,e,t,n,r,o)),!0}return!1}function hh(e){var t=yo(e.target);if(t!==null){var n=Eo(t);if(n!==null){if(t=n.tag,t===13){if(t=rh(n),t!==null){e.blockedOn=t,mh(e.priority,function(){ph(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ep(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yd=r,n.target.dispatchEvent(r),Yd=null}else return t=cs(n),t!==null&&Bp(t),e.blockedOn=n,!1;t.shift()}return!0}function Um(e,t,n){Oa(e)&&n.delete(t)}function ox(){Jd=!1,$r!==null&&Oa($r)&&($r=null),qr!==null&&Oa(qr)&&(qr=null),Hr!==null&&Oa(Hr)&&(Hr=null),Yl.forEach(Um),Xl.forEach(Um)}function Tl(e,t){e.blockedOn===t&&(e.blockedOn=null,Jd||(Jd=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,ox)))}function Gl(e){function t(o){return Tl(o,e)}if(0<ga.length){Tl(ga[0],e);for(var n=1;n<ga.length;n++){var r=ga[n];r.blockedOn===e&&(r.blockedOn=null)}}for($r!==null&&Tl($r,e),qr!==null&&Tl(qr,e),Hr!==null&&Tl(Hr,e),Yl.forEach(t),Xl.forEach(t),n=0;n<Br.length;n++)r=Br[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Br.length&&(n=Br[0],n.blockedOn===null);)hh(n),n.blockedOn===null&&Br.shift()}var Si=hr.ReactCurrentBatchConfig,Wa=!0;function ix(e,t,n,r){var o=ue,i=Si.transition;Si.transition=null;try{ue=1,Fp(e,t,n,r)}finally{ue=o,Si.transition=i}}function lx(e,t,n,r){var o=ue,i=Si.transition;Si.transition=null;try{ue=4,Fp(e,t,n,r)}finally{ue=o,Si.transition=i}}function Fp(e,t,n,r){if(Wa){var o=ep(e,t,n,r);if(o===null)Pd(e,t,r,Qa,n),jm(e,r);else if(rx(o,e,t,n,r))r.stopPropagation();else if(jm(e,r),t&4&&-1<nx.indexOf(e)){for(;o!==null;){var i=cs(o);if(i!==null&&dh(i),i=ep(e,t,n,r),i===null&&Pd(e,t,r,Qa,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Pd(e,t,r,null,n)}}var Qa=null;function ep(e,t,n,r){if(Qa=null,e=_p(r),e=yo(e),e!==null)if(t=Eo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qa=e,null}function yh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q6()){case Dp:return 1;case sh:return 4;case ja:case Y6:return 16;case ah:return 536870912;default:return 16}default:return 16}}var zr=null,zp=null,Aa=null;function gh(){if(Aa)return Aa;var e,t=zp,n=t.length,r,o="value"in zr?zr.value:zr.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Aa=o.slice(e,1<r?1-r:void 0)}function Ra(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function va(){return!0}function Wm(){return!1}function Xt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?va:Wm,this.isPropagationStopped=Wm,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),t}var Mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vp=Xt(Mi),us=Me({},Mi,{view:0,detail:0}),sx=Xt(us),Sd,wd,El,pu=Me({},us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$p,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==El&&(El&&e.type==="mousemove"?(Sd=e.screenX-El.screenX,wd=e.screenY-El.screenY):wd=Sd=0,El=e),Sd)},movementY:function(e){return"movementY"in e?e.movementY:wd}}),Qm=Xt(pu),ax=Me({},pu,{dataTransfer:0}),ux=Xt(ax),cx=Me({},us,{relatedTarget:0}),xd=Xt(cx),dx=Me({},Mi,{animationName:0,elapsedTime:0,pseudoElement:0}),px=Xt(dx),fx=Me({},Mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mx=Xt(fx),hx=Me({},Mi,{data:0}),Ym=Xt(hx),yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vx[e])?!!t[e]:!1}function $p(){return Sx}var wx=Me({},us,{key:function(e){if(e.key){var t=yx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ra(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$p,charCode:function(e){return e.type==="keypress"?Ra(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ra(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xx=Xt(wx),Cx=Me({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=Xt(Cx),kx=Me({},us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$p}),bx=Xt(kx),Px=Me({},Mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Xt(Px),Ex=Me({},pu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lx=Xt(Ex),Mx=[9,13,27,32],qp=dr&&"CompositionEvent"in window,Fl=null;dr&&"documentMode"in document&&(Fl=document.documentMode);var Ix=dr&&"TextEvent"in window&&!Fl,vh=dr&&(!qp||Fl&&8<Fl&&11>=Fl),Gm=" ",Km=!1;function Sh(e,t){switch(e){case"keyup":return Mx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var li=!1;function Ox(e,t){switch(e){case"compositionend":return wh(t);case"keypress":return t.which!==32?null:(Km=!0,Gm);case"textInput":return e=t.data,e===Gm&&Km?null:e;default:return null}}function Ax(e,t){if(li)return e==="compositionend"||!qp&&Sh(e,t)?(e=gh(),Aa=zp=zr=null,li=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vh&&t.locale!=="ko"?null:t.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rx[e.type]:t==="textarea"}function xh(e,t,n,r){Z0(r),t=Ya(t,"onChange"),0<t.length&&(n=new Vp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zl=null,Kl=null;function _x(e){Ah(e,0)}function fu(e){var t=ui(e);if(U0(t))return e}function Dx(e,t){if(e==="change")return t}var Ch=!1;dr&&(dr?(wa="oninput"in document,wa||(Cd=document.createElement("div"),Cd.setAttribute("oninput","return;"),wa=typeof Cd.oninput=="function"),Sa=wa):Sa=!1,Ch=Sa&&(!document.documentMode||9<document.documentMode));var Sa,wa,Cd;function Jm(){zl&&(zl.detachEvent("onpropertychange",kh),Kl=zl=null)}function kh(e){if(e.propertyName==="value"&&fu(Kl)){var t=[];xh(t,Kl,e,_p(e)),nh(_x,t)}}function Nx(e,t,n){e==="focusin"?(Jm(),zl=t,Kl=n,zl.attachEvent("onpropertychange",kh)):e==="focusout"&&Jm()}function Bx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fu(Kl)}function Fx(e,t){if(e==="click")return fu(t)}function zx(e,t){if(e==="input"||e==="change")return fu(t)}function Vx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mn=typeof Object.is=="function"?Object.is:Vx;function Zl(e,t){if(Mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Nd.call(t,o)||!Mn(e[o],t[o]))return!1}return!0}function e0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function t0(e,t){var n=e0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=e0(n)}}function bh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ph(){for(var e=window,t=$a();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$a(e.document)}return t}function Hp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $x(e){var t=Ph(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bh(n.ownerDocument.documentElement,n)){if(r!==null&&Hp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=t0(n,i);var l=t0(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qx=dr&&"documentMode"in document&&11>=document.documentMode,si=null,tp=null,Vl=null,np=!1;function n0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;np||si==null||si!==$a(r)||(r=si,"selectionStart"in r&&Hp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vl&&Zl(Vl,r)||(Vl=r,r=Ya(tp,"onSelect"),0<r.length&&(t=new Vp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=si)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ai={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},kd={},Th={};dr&&(Th=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function mu(e){if(kd[e])return kd[e];if(!ai[e])return e;var t=ai[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Th)return kd[e]=t[n];return e}var Eh=mu("animationend"),Lh=mu("animationiteration"),Mh=mu("animationstart"),Ih=mu("transitionend"),Oh=new Map,r0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(e,t){Oh.set(e,t),To(t,[e])}for(Ca=0;Ca<r0.length;Ca++)ka=r0[Ca],o0=ka.toLowerCase(),i0=ka[0].toUpperCase()+ka.slice(1),Kr(o0,"on"+i0);var ka,o0,i0,Ca;Kr(Eh,"onAnimationEnd");Kr(Lh,"onAnimationIteration");Kr(Mh,"onAnimationStart");Kr("dblclick","onDoubleClick");Kr("focusin","onFocus");Kr("focusout","onBlur");Kr(Ih,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);To("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));To("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));To("onBeforeInput",["compositionend","keypress","textInput","paste"]);To("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));To("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));To("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dl));function l0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,H6(r,t,void 0,e),e.currentTarget=null}function Ah(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;l0(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;l0(o,s,u),i=a}}}if(Ha)throw e=Kd,Ha=!1,Kd=null,e}function we(e,t){var n=t[sp];n===void 0&&(n=t[sp]=new Set);var r=e+"__bubble";n.has(r)||(Rh(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Rh(n,e,r,t)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Jl(e){if(!e[ba]){e[ba]=!0,V0.forEach(function(n){n!=="selectionchange"&&(Hx.has(n)||bd(n,!1,e),bd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ba]||(t[ba]=!0,bd("selectionchange",!1,t))}}function Rh(e,t,n,r){switch(yh(t)){case 1:var o=ix;break;case 4:o=lx;break;default:o=Fp}n=o.bind(null,t,n,e),o=void 0,!Gd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Pd(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=yo(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}nh(function(){var u=i,p=_p(n),c=[];e:{var m=Oh.get(e);if(m!==void 0){var y=Vp,g=e;switch(e){case"keypress":if(Ra(n)===0)break e;case"keydown":case"keyup":y=xx;break;case"focusin":g="focus",y=xd;break;case"focusout":g="blur",y=xd;break;case"beforeblur":case"afterblur":y=xd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=bx;break;case Eh:case Lh:case Mh:y=px;break;case Ih:y=Tx;break;case"scroll":y=sx;break;case"wheel":y=Lx;break;case"copy":case"cut":case"paste":y=mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Xm}var S=(t&4)!==0,k=!S&&e==="scroll",h=S?m!==null?m+"Capture":null:m;S=[];for(var d=u,f;d!==null;){f=d;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,h!==null&&(w=Ql(d,h),w!=null&&S.push(es(d,w,f)))),k)break;d=d.return}0<S.length&&(m=new y(m,g,null,n,p),c.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Yd&&(g=n.relatedTarget||n.fromElement)&&(yo(g)||g[pr]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?yo(g):null,g!==null&&(k=Eo(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(S=Qm,w="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=Xm,w="onPointerLeave",h="onPointerEnter",d="pointer"),k=y==null?m:ui(y),f=g==null?m:ui(g),m=new S(w,d+"leave",y,n,p),m.target=k,m.relatedTarget=f,w=null,yo(p)===u&&(S=new S(h,d+"enter",g,n,p),S.target=f,S.relatedTarget=k,w=S),k=w,y&&g)t:{for(S=y,h=g,d=0,f=S;f;f=ri(f))d++;for(f=0,w=h;w;w=ri(w))f++;for(;0<d-f;)S=ri(S),d--;for(;0<f-d;)h=ri(h),f--;for(;d--;){if(S===h||h!==null&&S===h.alternate)break t;S=ri(S),h=ri(h)}S=null}else S=null;y!==null&&s0(c,m,y,S,!1),g!==null&&k!==null&&s0(c,k,g,S,!0)}}e:{if(m=u?ui(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var x=Dx;else if(Zm(m))if(Ch)x=zx;else{x=Bx;var C=Nx}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=Fx);if(x&&(x=x(e,u))){xh(c,x,n,p);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Hd(m,"number",m.value)}switch(C=u?ui(u):window,e){case"focusin":(Zm(C)||C.contentEditable==="true")&&(si=C,tp=u,Vl=null);break;case"focusout":Vl=tp=si=null;break;case"mousedown":np=!0;break;case"contextmenu":case"mouseup":case"dragend":np=!1,n0(c,n,p);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":n0(c,n,p)}var T;if(qp)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else li?Sh(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(vh&&n.locale!=="ko"&&(li||M!=="onCompositionStart"?M==="onCompositionEnd"&&li&&(T=gh()):(zr=p,zp="value"in zr?zr.value:zr.textContent,li=!0)),C=Ya(u,M),0<C.length&&(M=new Ym(M,e,null,n,p),c.push({event:M,listeners:C}),T?M.data=T:(T=wh(n),T!==null&&(M.data=T)))),(T=Ix?Ox(e,n):Ax(e,n))&&(u=Ya(u,"onBeforeInput"),0<u.length&&(p=new Ym("onBeforeInput","beforeinput",null,n,p),c.push({event:p,listeners:u}),p.data=T))}Ah(c,t)})}function es(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ya(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ql(e,n),i!=null&&r.unshift(es(e,i,o)),i=Ql(e,t),i!=null&&r.push(es(e,i,o))),e=e.return}return r}function ri(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function s0(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Ql(n,i),a!=null&&l.unshift(es(n,a,s))):o||(a=Ql(n,i),a!=null&&l.push(es(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var jx=/\r\n?/g,Ux=/\u0000|\uFFFD/g;function a0(e){return(typeof e=="string"?e:""+e).replace(jx,`
`).replace(Ux,"")}function Pa(e,t,n){if(t=a0(t),a0(e)!==t&&n)throw Error(A(425))}function Xa(){}var rp=null,op=null;function ip(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lp=typeof setTimeout=="function"?setTimeout:void 0,Wx=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof u0!="undefined"?function(e){return u0.resolve(null).then(e).catch(Yx)}:lp;function Yx(e){setTimeout(function(){throw e})}function Td(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Gl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Gl(t)}function jr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function c0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ii=Math.random().toString(36).slice(2),Un="__reactFiber$"+Ii,ts="__reactProps$"+Ii,pr="__reactContainer$"+Ii,sp="__reactEvents$"+Ii,Xx="__reactListeners$"+Ii,Gx="__reactHandles$"+Ii;function yo(e){var t=e[Un];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pr]||n[Un]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=c0(e);e!==null;){if(n=e[Un])return n;e=c0(e)}return t}e=n,n=e.parentNode}return null}function cs(e){return e=e[Un]||e[pr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ui(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function hu(e){return e[ts]||null}var ap=[],ci=-1;function Zr(e){return{current:e}}function xe(e){0>ci||(e.current=ap[ci],ap[ci]=null,ci--)}function Se(e,t){ci++,ap[ci]=e.current,e.current=t}var Gr={},gt=Zr(Gr),Ft=Zr(!1),xo=Gr;function ki(e,t){var n=e.type.contextTypes;if(!n)return Gr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function zt(e){return e=e.childContextTypes,e!=null}function Ga(){xe(Ft),xe(gt)}function d0(e,t,n){if(gt.current!==Gr)throw Error(A(168));Se(gt,t),Se(Ft,n)}function _h(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(A(108,N6(e)||"Unknown",o));return Me({},n,r)}function Ka(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gr,xo=gt.current,Se(gt,e),Se(Ft,Ft.current),!0}function p0(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=_h(e,t,xo),r.__reactInternalMemoizedMergedChildContext=e,xe(Ft),xe(gt),Se(gt,e)):xe(Ft),Se(Ft,n)}var sr=null,yu=!1,Ed=!1;function Dh(e){sr===null?sr=[e]:sr.push(e)}function Kx(e){yu=!0,Dh(e)}function Jr(){if(!Ed&&sr!==null){Ed=!0;var e=0,t=ue;try{var n=sr;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sr=null,yu=!1}catch(o){throw sr!==null&&(sr=sr.slice(e+1)),lh(Dp,Jr),o}finally{ue=t,Ed=!1}}return null}var di=[],pi=0,Za=null,Ja=0,sn=[],an=0,Co=null,ar=1,ur="";function mo(e,t){di[pi++]=Ja,di[pi++]=Za,Za=e,Ja=t}function Nh(e,t,n){sn[an++]=ar,sn[an++]=ur,sn[an++]=Co,Co=e;var r=ar;e=ur;var o=32-En(r)-1;r&=~(1<<o),n+=1;var i=32-En(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ar=1<<32-En(t)+o|n<<o|r,ur=i+e}else ar=1<<i|n<<o|r,ur=e}function jp(e){e.return!==null&&(mo(e,1),Nh(e,1,0))}function Up(e){for(;e===Za;)Za=di[--pi],di[pi]=null,Ja=di[--pi],di[pi]=null;for(;e===Co;)Co=sn[--an],sn[an]=null,ur=sn[--an],sn[an]=null,ar=sn[--an],sn[an]=null}var Qt=null,Wt=null,be=!1,Tn=null;function Bh(e,t){var n=un(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function f0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qt=e,Wt=jr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qt=e,Wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Co!==null?{id:ar,overflow:ur}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=un(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qt=e,Wt=null,!0):!1;default:return!1}}function up(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cp(e){if(be){var t=Wt;if(t){var n=t;if(!f0(e,t)){if(up(e))throw Error(A(418));t=jr(n.nextSibling);var r=Qt;t&&f0(e,t)?Bh(r,n):(e.flags=e.flags&-4097|2,be=!1,Qt=e)}}else{if(up(e))throw Error(A(418));e.flags=e.flags&-4097|2,be=!1,Qt=e}}}function m0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qt=e}function Ta(e){if(e!==Qt)return!1;if(!be)return m0(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ip(e.type,e.memoizedProps)),t&&(t=Wt)){if(up(e))throw Fh(),Error(A(418));for(;t;)Bh(e,t),t=jr(t.nextSibling)}if(m0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Wt=jr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Wt=null}}else Wt=Qt?jr(e.stateNode.nextSibling):null;return!0}function Fh(){for(var e=Wt;e;)e=jr(e.nextSibling)}function bi(){Wt=Qt=null,be=!1}function Wp(e){Tn===null?Tn=[e]:Tn.push(e)}var Zx=hr.ReactCurrentBatchConfig;function Ll(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Ea(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function h0(e){var t=e._init;return t(e._payload)}function zh(e){function t(h,d){if(e){var f=h.deletions;f===null?(h.deletions=[d],h.flags|=16):f.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function o(h,d){return h=Yr(h,d),h.index=0,h.sibling=null,h}function i(h,d,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<d?(h.flags|=2,d):f):(h.flags|=2,d)):(h.flags|=1048576,d)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,d,f,w){return d===null||d.tag!==6?(d=_d(f,h.mode,w),d.return=h,d):(d=o(d,f),d.return=h,d)}function a(h,d,f,w){var x=f.type;return x===ii?p(h,d,f.props.children,w,f.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Dr&&h0(x)===d.type)?(w=o(d,f.props),w.ref=Ll(h,d,f),w.return=h,w):(w=Va(f.type,f.key,f.props,null,h.mode,w),w.ref=Ll(h,d,f),w.return=h,w)}function u(h,d,f,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Dd(f,h.mode,w),d.return=h,d):(d=o(d,f.children||[]),d.return=h,d)}function p(h,d,f,w,x){return d===null||d.tag!==7?(d=wo(f,h.mode,w,x),d.return=h,d):(d=o(d,f),d.return=h,d)}function c(h,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=_d(""+d,h.mode,f),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pa:return f=Va(d.type,d.key,d.props,null,h.mode,f),f.ref=Ll(h,null,d),f.return=h,f;case oi:return d=Dd(d,h.mode,f),d.return=h,d;case Dr:var w=d._init;return c(h,w(d._payload),f)}if(Rl(d)||bl(d))return d=wo(d,h.mode,f,null),d.return=h,d;Ea(h,d)}return null}function m(h,d,f,w){var x=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:s(h,d,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case pa:return f.key===x?a(h,d,f,w):null;case oi:return f.key===x?u(h,d,f,w):null;case Dr:return x=f._init,m(h,d,x(f._payload),w)}if(Rl(f)||bl(f))return x!==null?null:p(h,d,f,w,null);Ea(h,f)}return null}function y(h,d,f,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(f)||null,s(d,h,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case pa:return h=h.get(w.key===null?f:w.key)||null,a(d,h,w,x);case oi:return h=h.get(w.key===null?f:w.key)||null,u(d,h,w,x);case Dr:var C=w._init;return y(h,d,f,C(w._payload),x)}if(Rl(w)||bl(w))return h=h.get(f)||null,p(d,h,w,x,null);Ea(d,w)}return null}function g(h,d,f,w){for(var x=null,C=null,T=d,M=d=0,L=null;T!==null&&M<f.length;M++){T.index>M?(L=T,T=null):L=T.sibling;var E=m(h,T,f[M],w);if(E===null){T===null&&(T=L);break}e&&T&&E.alternate===null&&t(h,T),d=i(E,d,M),C===null?x=E:C.sibling=E,C=E,T=L}if(M===f.length)return n(h,T),be&&mo(h,M),x;if(T===null){for(;M<f.length;M++)T=c(h,f[M],w),T!==null&&(d=i(T,d,M),C===null?x=T:C.sibling=T,C=T);return be&&mo(h,M),x}for(T=r(h,T);M<f.length;M++)L=y(T,h,M,f[M],w),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?M:L.key),d=i(L,d,M),C===null?x=L:C.sibling=L,C=L);return e&&T.forEach(function(_){return t(h,_)}),be&&mo(h,M),x}function S(h,d,f,w){var x=bl(f);if(typeof x!="function")throw Error(A(150));if(f=x.call(f),f==null)throw Error(A(151));for(var C=x=null,T=d,M=d=0,L=null,E=f.next();T!==null&&!E.done;M++,E=f.next()){T.index>M?(L=T,T=null):L=T.sibling;var _=m(h,T,E.value,w);if(_===null){T===null&&(T=L);break}e&&T&&_.alternate===null&&t(h,T),d=i(_,d,M),C===null?x=_:C.sibling=_,C=_,T=L}if(E.done)return n(h,T),be&&mo(h,M),x;if(T===null){for(;!E.done;M++,E=f.next())E=c(h,E.value,w),E!==null&&(d=i(E,d,M),C===null?x=E:C.sibling=E,C=E);return be&&mo(h,M),x}for(T=r(h,T);!E.done;M++,E=f.next())E=y(T,h,M,E.value,w),E!==null&&(e&&E.alternate!==null&&T.delete(E.key===null?M:E.key),d=i(E,d,M),C===null?x=E:C.sibling=E,C=E);return e&&T.forEach(function(P){return t(h,P)}),be&&mo(h,M),x}function k(h,d,f,w){if(typeof f=="object"&&f!==null&&f.type===ii&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case pa:e:{for(var x=f.key,C=d;C!==null;){if(C.key===x){if(x=f.type,x===ii){if(C.tag===7){n(h,C.sibling),d=o(C,f.props.children),d.return=h,h=d;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Dr&&h0(x)===C.type){n(h,C.sibling),d=o(C,f.props),d.ref=Ll(h,C,f),d.return=h,h=d;break e}n(h,C);break}else t(h,C);C=C.sibling}f.type===ii?(d=wo(f.props.children,h.mode,w,f.key),d.return=h,h=d):(w=Va(f.type,f.key,f.props,null,h.mode,w),w.ref=Ll(h,d,f),w.return=h,h=w)}return l(h);case oi:e:{for(C=f.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(h,d.sibling),d=o(d,f.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=Dd(f,h.mode,w),d.return=h,h=d}return l(h);case Dr:return C=f._init,k(h,d,C(f._payload),w)}if(Rl(f))return g(h,d,f,w);if(bl(f))return S(h,d,f,w);Ea(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(h,d.sibling),d=o(d,f),d.return=h,h=d):(n(h,d),d=_d(f,h.mode,w),d.return=h,h=d),l(h)):n(h,d)}return k}var Pi=zh(!0),Vh=zh(!1),eu=Zr(null),tu=null,fi=null,Qp=null;function Yp(){Qp=fi=tu=null}function Xp(e){var t=eu.current;xe(eu),e._currentValue=t}function dp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wi(e,t){tu=e,Qp=fi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Bt=!0),e.firstContext=null)}function dn(e){var t=e._currentValue;if(Qp!==e)if(e={context:e,memoizedValue:t,next:null},fi===null){if(tu===null)throw Error(A(308));fi=e,tu.dependencies={lanes:0,firstContext:e}}else fi=fi.next=e;return t}var go=null;function Gp(e){go===null?go=[e]:go.push(e)}function $h(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Gp(t)):(n.next=o.next,o.next=n),t.interleaved=n,fr(e,r)}function fr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nr=!1;function Kp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,fr(e,n)}return o=r.interleaved,o===null?(t.next=t,Gp(r)):(t.next=o.next,o.next=t),r.interleaved=t,fr(e,n)}function _a(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Np(e,n)}}function y0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nu(e,t,n,r){var o=e.updateQueue;Nr=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(i!==null){var c=o.baseState;l=0,p=u=a=null,s=i;do{var m=s.lane,y=s.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,S=s;switch(m=t,y=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){c=g.call(y,c,m);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,m=typeof g=="function"?g.call(y,c,m):g,m==null)break e;c=Me({},c,m);break e;case 2:Nr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=y,a=c):p=p.next=y,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(a=c),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);bo|=l,e.lanes=l,e.memoizedState=c}}function g0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(A(191,o));o.call(r)}}}var ds={},Qn=Zr(ds),ns=Zr(ds),rs=Zr(ds);function vo(e){if(e===ds)throw Error(A(174));return e}function Zp(e,t){switch(Se(rs,t),Se(ns,e),Se(Qn,ds),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ud(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ud(t,e)}xe(Qn),Se(Qn,t)}function Ti(){xe(Qn),xe(ns),xe(rs)}function Hh(e){vo(rs.current);var t=vo(Qn.current),n=Ud(t,e.type);t!==n&&(Se(ns,e),Se(Qn,n))}function Jp(e){ns.current===e&&(xe(Qn),xe(ns))}var Ee=Zr(0);function ru(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ld=[];function ef(){for(var e=0;e<Ld.length;e++)Ld[e]._workInProgressVersionPrimary=null;Ld.length=0}var Da=hr.ReactCurrentDispatcher,Md=hr.ReactCurrentBatchConfig,ko=0,Le=null,Ye=null,Je=null,ou=!1,$l=!1,os=0,Jx=0;function mt(){throw Error(A(321))}function tf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mn(e[n],t[n]))return!1;return!0}function nf(e,t,n,r,o,i){if(ko=i,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Da.current=e===null||e.memoizedState===null?rC:oC,e=n(r,o),$l){i=0;do{if($l=!1,os=0,25<=i)throw Error(A(301));i+=1,Je=Ye=null,t.updateQueue=null,Da.current=iC,e=n(r,o)}while($l)}if(Da.current=iu,t=Ye!==null&&Ye.next!==null,ko=0,Je=Ye=Le=null,ou=!1,t)throw Error(A(300));return e}function rf(){var e=os!==0;return os=0,e}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Le.memoizedState=Je=e:Je=Je.next=e,Je}function pn(){if(Ye===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=Je===null?Le.memoizedState:Je.next;if(t!==null)Je=t,Ye=e;else{if(e===null)throw Error(A(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Je===null?Le.memoizedState=Je=e:Je=Je.next=e}return Je}function is(e,t){return typeof t=="function"?t(e):t}function Id(e){var t=pn(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ye,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var p=u.lane;if((ko&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=c,l=r):a=a.next=c,Le.lanes|=p,bo|=p}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,Mn(r,t.memoizedState)||(Bt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Le.lanes|=i,bo|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Od(e){var t=pn(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Mn(i,t.memoizedState)||(Bt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function jh(){}function Uh(e,t){var n=Le,r=pn(),o=t(),i=!Mn(r.memoizedState,o);if(i&&(r.memoizedState=o,Bt=!0),r=r.queue,of(Yh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,ls(9,Qh.bind(null,n,r,o,t),void 0,null),et===null)throw Error(A(349));ko&30||Wh(n,t,o)}return o}function Wh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qh(e,t,n,r){t.value=n,t.getSnapshot=r,Xh(t)&&Gh(e)}function Yh(e,t,n){return n(function(){Xh(t)&&Gh(e)})}function Xh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mn(e,n)}catch{return!0}}function Gh(e){var t=fr(e,1);t!==null&&Ln(t,e,1,-1)}function v0(e){var t=jn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},t.queue=e,e=e.dispatch=nC.bind(null,Le,e),[t.memoizedState,e]}function ls(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kh(){return pn().memoizedState}function Na(e,t,n,r){var o=jn();Le.flags|=e,o.memoizedState=ls(1|t,n,void 0,r===void 0?null:r)}function gu(e,t,n,r){var o=pn();r=r===void 0?null:r;var i=void 0;if(Ye!==null){var l=Ye.memoizedState;if(i=l.destroy,r!==null&&tf(r,l.deps)){o.memoizedState=ls(t,n,i,r);return}}Le.flags|=e,o.memoizedState=ls(1|t,n,i,r)}function S0(e,t){return Na(8390656,8,e,t)}function of(e,t){return gu(2048,8,e,t)}function Zh(e,t){return gu(4,2,e,t)}function Jh(e,t){return gu(4,4,e,t)}function ey(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ty(e,t,n){return n=n!=null?n.concat([e]):null,gu(4,4,ey.bind(null,t,e),n)}function lf(){}function ny(e,t){var n=pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ry(e,t){var n=pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function oy(e,t,n){return ko&21?(Mn(n,t)||(n=uh(),Le.lanes|=n,bo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Bt=!0),e.memoizedState=n)}function eC(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=Md.transition;Md.transition={};try{e(!1),t()}finally{ue=n,Md.transition=r}}function iy(){return pn().memoizedState}function tC(e,t,n){var r=Qr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ly(e))sy(t,n);else if(n=$h(e,t,n,r),n!==null){var o=Pt();Ln(n,e,r,o),ay(n,t,r)}}function nC(e,t,n){var r=Qr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ly(e))sy(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Mn(s,l)){var a=t.interleaved;a===null?(o.next=o,Gp(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=$h(e,t,o,r),n!==null&&(o=Pt(),Ln(n,e,r,o),ay(n,t,r))}}function ly(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function sy(e,t){$l=ou=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ay(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Np(e,n)}}var iu={readContext:dn,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},rC={readContext:dn,useCallback:function(e,t){return jn().memoizedState=[e,t===void 0?null:t],e},useContext:dn,useEffect:S0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Na(4194308,4,ey.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Na(4194308,4,e,t)},useInsertionEffect:function(e,t){return Na(4,2,e,t)},useMemo:function(e,t){var n=jn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tC.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=jn();return e={current:e},t.memoizedState=e},useState:v0,useDebugValue:lf,useDeferredValue:function(e){return jn().memoizedState=e},useTransition:function(){var e=v0(!1),t=e[0];return e=eC.bind(null,e[1]),jn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,o=jn();if(be){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),et===null)throw Error(A(349));ko&30||Wh(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,S0(Yh.bind(null,r,i,e),[e]),r.flags|=2048,ls(9,Qh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=jn(),t=et.identifierPrefix;if(be){var n=ur,r=ar;n=(r&~(1<<32-En(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=os++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},oC={readContext:dn,useCallback:ny,useContext:dn,useEffect:of,useImperativeHandle:ty,useInsertionEffect:Zh,useLayoutEffect:Jh,useMemo:ry,useReducer:Id,useRef:Kh,useState:function(){return Id(is)},useDebugValue:lf,useDeferredValue:function(e){var t=pn();return oy(t,Ye.memoizedState,e)},useTransition:function(){var e=Id(is)[0],t=pn().memoizedState;return[e,t]},useMutableSource:jh,useSyncExternalStore:Uh,useId:iy,unstable_isNewReconciler:!1},iC={readContext:dn,useCallback:ny,useContext:dn,useEffect:of,useImperativeHandle:ty,useInsertionEffect:Zh,useLayoutEffect:Jh,useMemo:ry,useReducer:Od,useRef:Kh,useState:function(){return Od(is)},useDebugValue:lf,useDeferredValue:function(e){var t=pn();return Ye===null?t.memoizedState=e:oy(t,Ye.memoizedState,e)},useTransition:function(){var e=Od(is)[0],t=pn().memoizedState;return[e,t]},useMutableSource:jh,useSyncExternalStore:Uh,useId:iy,unstable_isNewReconciler:!1};function bn(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function pp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vu={isMounted:function(e){return(e=e._reactInternals)?Eo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pt(),o=Qr(e),i=cr(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ur(e,i,o),t!==null&&(Ln(t,e,o,r),_a(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pt(),o=Qr(e),i=cr(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ur(e,i,o),t!==null&&(Ln(t,e,o,r),_a(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pt(),r=Qr(e),o=cr(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ur(e,o,r),t!==null&&(Ln(t,e,r,n),_a(t,e,r))}};function w0(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Zl(n,r)||!Zl(o,i):!0}function uy(e,t,n){var r=!1,o=Gr,i=t.contextType;return typeof i=="object"&&i!==null?i=dn(i):(o=zt(t)?xo:gt.current,r=t.contextTypes,i=(r=r!=null)?ki(e,o):Gr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function x0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vu.enqueueReplaceState(t,t.state,null)}function fp(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Kp(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=dn(i):(i=zt(t)?xo:gt.current,o.context=ki(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(pp(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&vu.enqueueReplaceState(o,o.state,null),nu(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ei(e,t){try{var n="",r=t;do n+=D6(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ad(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function mp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lC=typeof WeakMap=="function"?WeakMap:Map;function cy(e,t,n){n=cr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){su||(su=!0,bp=r),mp(e,t)},n}function dy(e,t,n){n=cr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){mp(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){mp(e,t),typeof r!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function C0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lC;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=wC.bind(null,e,t,n),t.then(e,e))}function k0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function b0(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=cr(-1,1),t.tag=2,Ur(n,t,1))),n.lanes|=1),e)}var sC=hr.ReactCurrentOwner,Bt=!1;function bt(e,t,n,r){t.child=e===null?Vh(t,null,n,r):Pi(t,e.child,n,r)}function P0(e,t,n,r,o){n=n.render;var i=t.ref;return wi(t,o),r=nf(e,t,n,r,i,o),n=rf(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mr(e,t,o)):(be&&n&&jp(t),t.flags|=1,bt(e,t,r,o),t.child)}function T0(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!mf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,py(e,t,i,r,o)):(e=Va(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zl,n(l,r)&&e.ref===t.ref)return mr(e,t,o)}return t.flags|=1,e=Yr(i,r),e.ref=t.ref,e.return=t,t.child=e}function py(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Zl(i,r)&&e.ref===t.ref)if(Bt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Bt=!0);else return t.lanes=e.lanes,mr(e,t,o)}return hp(e,t,n,r,o)}function fy(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(hi,Ut),Ut|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(hi,Ut),Ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Se(hi,Ut),Ut|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Se(hi,Ut),Ut|=r;return bt(e,t,o,n),t.child}function my(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hp(e,t,n,r,o){var i=zt(n)?xo:gt.current;return i=ki(t,i),wi(t,o),n=nf(e,t,n,r,i,o),r=rf(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mr(e,t,o)):(be&&r&&jp(t),t.flags|=1,bt(e,t,n,o),t.child)}function E0(e,t,n,r,o){if(zt(n)){var i=!0;Ka(t)}else i=!1;if(wi(t,o),t.stateNode===null)Ba(e,t),uy(t,n,r),fp(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=dn(u):(u=zt(n)?xo:gt.current,u=ki(t,u));var p=n.getDerivedStateFromProps,c=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&x0(t,l,r,u),Nr=!1;var m=t.memoizedState;l.state=m,nu(t,r,l,o),a=t.memoizedState,s!==r||m!==a||Ft.current||Nr?(typeof p=="function"&&(pp(t,n,p,r),a=t.memoizedState),(s=Nr||w0(t,n,s,r,m,a,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,qh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:bn(t.type,s),l.props=u,c=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=dn(a):(a=zt(n)?xo:gt.current,a=ki(t,a));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==c||m!==a)&&x0(t,l,r,a),Nr=!1,m=t.memoizedState,l.state=m,nu(t,r,l,o);var g=t.memoizedState;s!==c||m!==g||Ft.current||Nr?(typeof y=="function"&&(pp(t,n,y,r),g=t.memoizedState),(u=Nr||w0(t,n,u,r,m,g,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return yp(e,t,n,r,i,o)}function yp(e,t,n,r,o,i){my(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&p0(t,n,!1),mr(e,t,i);r=t.stateNode,sC.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Pi(t,e.child,null,i),t.child=Pi(t,null,s,i)):bt(e,t,s,i),t.memoizedState=r.state,o&&p0(t,n,!0),t.child}function hy(e){var t=e.stateNode;t.pendingContext?d0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&d0(e,t.context,!1),Zp(e,t.containerInfo)}function L0(e,t,n,r,o){return bi(),Wp(o),t.flags|=256,bt(e,t,n,r),t.child}var gp={dehydrated:null,treeContext:null,retryLane:0};function vp(e){return{baseLanes:e,cachePool:null,transitions:null}}function yy(e,t,n){var r=t.pendingProps,o=Ee.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Se(Ee,o&1),e===null)return cp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=xu(l,r,0,null),e=wo(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=vp(n),t.memoizedState=gp,e):sf(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return aC(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Yr(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Yr(s,i):(i=wo(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?vp(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=gp,r}return i=e.child,e=i.sibling,r=Yr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sf(e,t){return t=xu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function La(e,t,n,r){return r!==null&&Wp(r),Pi(t,e.child,null,n),e=sf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function aC(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ad(Error(A(422))),La(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=xu({mode:"visible",children:r.children},o,0,null),i=wo(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Pi(t,e.child,null,l),t.child.memoizedState=vp(l),t.memoizedState=gp,i);if(!(t.mode&1))return La(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(A(419)),r=Ad(i,r,void 0),La(e,t,l,r)}if(s=(l&e.childLanes)!==0,Bt||s){if(r=et,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,fr(e,o),Ln(r,e,o,-1))}return ff(),r=Ad(Error(A(421))),La(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=xC.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Wt=jr(o.nextSibling),Qt=t,be=!0,Tn=null,e!==null&&(sn[an++]=ar,sn[an++]=ur,sn[an++]=Co,ar=e.id,ur=e.overflow,Co=t),t=sf(t,r.children),t.flags|=4096,t)}function M0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),dp(e.return,t,n)}function Rd(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function gy(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(bt(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&M0(e,n,t);else if(e.tag===19)M0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ru(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Rd(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ru(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Rd(t,!0,n,null,i);break;case"together":Rd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ba(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Yr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uC(e,t,n){switch(t.tag){case 3:hy(t),bi();break;case 5:Hh(t);break;case 1:zt(t.type)&&Ka(t);break;case 4:Zp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Se(eu,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Se(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?yy(e,t,n):(Se(Ee,Ee.current&1),e=mr(e,t,n),e!==null?e.sibling:null);Se(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gy(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Se(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,fy(e,t,n)}return mr(e,t,n)}var vy,Sp,Sy,wy;vy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sp=function(){};Sy=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,vo(Qn.current);var i=null;switch(n){case"input":o=$d(e,o),r=$d(e,r),i=[];break;case"select":o=Me({},o,{value:void 0}),r=Me({},r,{value:void 0}),i=[];break;case"textarea":o=jd(e,o),r=jd(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xa)}Wd(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ul.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ul.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&we("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};wy=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ml(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ht(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cC(e,t,n){var r=t.pendingProps;switch(Up(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(t),null;case 1:return zt(t.type)&&Ga(),ht(t),null;case 3:return r=t.stateNode,Ti(),xe(Ft),xe(gt),ef(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ta(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Tn!==null&&(Ep(Tn),Tn=null))),Sp(e,t),ht(t),null;case 5:Jp(t);var o=vo(rs.current);if(n=t.type,e!==null&&t.stateNode!=null)Sy(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return ht(t),null}if(e=vo(Qn.current),Ta(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Un]=t,r[ts]=i,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(o=0;o<Dl.length;o++)we(Dl[o],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Bm(r,i),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},we("invalid",r);break;case"textarea":zm(r,i),we("invalid",r)}Wd(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Pa(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Pa(r.textContent,s,e),o=["children",""+s]):Ul.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&we("scroll",r)}switch(n){case"input":fa(r),Fm(r,i,!0);break;case"textarea":fa(r),Vm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Y0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Un]=t,e[ts]=r,vy(e,t,!1,!1),t.stateNode=e;e:{switch(l=Qd(n,r),n){case"dialog":we("cancel",e),we("close",e),o=r;break;case"iframe":case"object":case"embed":we("load",e),o=r;break;case"video":case"audio":for(o=0;o<Dl.length;o++)we(Dl[o],e);o=r;break;case"source":we("error",e),o=r;break;case"img":case"image":case"link":we("error",e),we("load",e),o=r;break;case"details":we("toggle",e),o=r;break;case"input":Bm(e,r),o=$d(e,r),we("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Me({},r,{value:void 0}),we("invalid",e);break;case"textarea":zm(e,r),o=jd(e,r),we("invalid",e);break;default:o=r}Wd(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?K0(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&X0(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Wl(e,a):typeof a=="number"&&Wl(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ul.hasOwnProperty(i)?a!=null&&i==="onScroll"&&we("scroll",e):a!=null&&Ip(e,i,a,l))}switch(n){case"input":fa(e),Fm(e,r,!1);break;case"textarea":fa(e),Vm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xr(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?yi(e,!!r.multiple,i,!1):r.defaultValue!=null&&yi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ht(t),null;case 6:if(e&&t.stateNode!=null)wy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=vo(rs.current),vo(Qn.current),Ta(t)){if(r=t.stateNode,n=t.memoizedProps,r[Un]=t,(i=r.nodeValue!==n)&&(e=Qt,e!==null))switch(e.tag){case 3:Pa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pa(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Un]=t,t.stateNode=r}return ht(t),null;case 13:if(xe(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&Wt!==null&&t.mode&1&&!(t.flags&128))Fh(),bi(),t.flags|=98560,i=!1;else if(i=Ta(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[Un]=t}else bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ht(t),i=!1}else Tn!==null&&(Ep(Tn),Tn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?Xe===0&&(Xe=3):ff())),t.updateQueue!==null&&(t.flags|=4),ht(t),null);case 4:return Ti(),Sp(e,t),e===null&&Jl(t.stateNode.containerInfo),ht(t),null;case 10:return Xp(t.type._context),ht(t),null;case 17:return zt(t.type)&&Ga(),ht(t),null;case 19:if(xe(Ee),i=t.memoizedState,i===null)return ht(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Ml(i,!1);else{if(Xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ru(e),l!==null){for(t.flags|=128,Ml(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(Ee,Ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ne()>Li&&(t.flags|=128,r=!0,Ml(i,!1),t.lanes=4194304)}else{if(!r)if(e=ru(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ml(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!be)return ht(t),null}else 2*Ne()-i.renderingStartTime>Li&&n!==1073741824&&(t.flags|=128,r=!0,Ml(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ne(),t.sibling=null,n=Ee.current,Se(Ee,r?n&1|2:n&1),t):(ht(t),null);case 22:case 23:return pf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ut&1073741824&&(ht(t),t.subtreeFlags&6&&(t.flags|=8192)):ht(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function dC(e,t){switch(Up(t),t.tag){case 1:return zt(t.type)&&Ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ti(),xe(Ft),xe(gt),ef(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Jp(t),null;case 13:if(xe(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ee),null;case 4:return Ti(),null;case 10:return Xp(t.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var Ma=!1,yt=!1,pC=typeof WeakSet=="function"?WeakSet:Set,z=null;function mi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function wp(e,t,n){try{n()}catch(r){Ae(e,t,r)}}var I0=!1;function fC(e,t){if(rp=Wa,e=Ph(),Hp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,p=0,c=e,m=null;t:for(;;){for(var y;c!==n||o!==0&&c.nodeType!==3||(s=l+o),c!==i||r!==0&&c.nodeType!==3||(a=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(y=c.firstChild)!==null;)m=c,c=y;for(;;){if(c===e)break t;if(m===n&&++u===o&&(s=l),m===i&&++p===r&&(a=l),(y=c.nextSibling)!==null)break;c=m,m=c.parentNode}c=y}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(op={focusedElem:e,selectionRange:n},Wa=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,k=g.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?S:bn(t.type,S),k);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){Ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return g=I0,I0=!1,g}function ql(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&wp(t,n,i)}o=o.next}while(o!==r)}}function Su(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xy(e){var t=e.alternate;t!==null&&(e.alternate=null,xy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Un],delete t[ts],delete t[sp],delete t[Xx],delete t[Gx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cy(e){return e.tag===5||e.tag===3||e.tag===4}function O0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xa));else if(r!==4&&(e=e.child,e!==null))for(Cp(e,t,n),e=e.sibling;e!==null;)Cp(e,t,n),e=e.sibling}function kp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kp(e,t,n),e=e.sibling;e!==null;)kp(e,t,n),e=e.sibling}var nt=null,Pn=!1;function _r(e,t,n){for(n=n.child;n!==null;)ky(e,t,n),n=n.sibling}function ky(e,t,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 5:yt||mi(n,t);case 6:var r=nt,o=Pn;nt=null,_r(e,t,n),nt=r,Pn=o,nt!==null&&(Pn?(e=nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(Pn?(e=nt,n=n.stateNode,e.nodeType===8?Td(e.parentNode,n):e.nodeType===1&&Td(e,n),Gl(e)):Td(nt,n.stateNode));break;case 4:r=nt,o=Pn,nt=n.stateNode.containerInfo,Pn=!0,_r(e,t,n),nt=r,Pn=o;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&wp(n,t,l),o=o.next}while(o!==r)}_r(e,t,n);break;case 1:if(!yt&&(mi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ae(n,t,s)}_r(e,t,n);break;case 21:_r(e,t,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,_r(e,t,n),yt=r):_r(e,t,n);break;default:_r(e,t,n)}}function A0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pC),t.forEach(function(r){var o=CC.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function kn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:nt=s.stateNode,Pn=!1;break e;case 3:nt=s.stateNode.containerInfo,Pn=!0;break e;case 4:nt=s.stateNode.containerInfo,Pn=!0;break e}s=s.return}if(nt===null)throw Error(A(160));ky(i,l,o),nt=null,Pn=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){Ae(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)by(t,e),t=t.sibling}function by(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kn(t,e),Hn(e),r&4){try{ql(3,e,e.return),Su(3,e)}catch(S){Ae(e,e.return,S)}try{ql(5,e,e.return)}catch(S){Ae(e,e.return,S)}}break;case 1:kn(t,e),Hn(e),r&512&&n!==null&&mi(n,n.return);break;case 5:if(kn(t,e),Hn(e),r&512&&n!==null&&mi(n,n.return),e.flags&32){var o=e.stateNode;try{Wl(o,"")}catch(S){Ae(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&W0(o,i),Qd(s,l);var u=Qd(s,i);for(l=0;l<a.length;l+=2){var p=a[l],c=a[l+1];p==="style"?K0(o,c):p==="dangerouslySetInnerHTML"?X0(o,c):p==="children"?Wl(o,c):Ip(o,p,c,u)}switch(s){case"input":qd(o,i);break;case"textarea":Q0(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?yi(o,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?yi(o,!!i.multiple,i.defaultValue,!0):yi(o,!!i.multiple,i.multiple?[]:"",!1))}o[ts]=i}catch(S){Ae(e,e.return,S)}}break;case 6:if(kn(t,e),Hn(e),r&4){if(e.stateNode===null)throw Error(A(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){Ae(e,e.return,S)}}break;case 3:if(kn(t,e),Hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gl(t.containerInfo)}catch(S){Ae(e,e.return,S)}break;case 4:kn(t,e),Hn(e);break;case 13:kn(t,e),Hn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(cf=Ne())),r&4&&A0(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(yt=(u=yt)||p,kn(t,e),yt=u):kn(t,e),Hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(z=e,p=e.child;p!==null;){for(c=z=p;z!==null;){switch(m=z,y=m.child,m.tag){case 0:case 11:case 14:case 15:ql(4,m,m.return);break;case 1:mi(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(S){Ae(r,n,S)}}break;case 5:mi(m,m.return);break;case 22:if(m.memoizedState!==null){_0(c);continue}}y!==null?(y.return=m,z=y):_0(c)}p=p.sibling}e:for(p=null,c=e;;){if(c.tag===5){if(p===null){p=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=c.stateNode,a=c.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=G0("display",l))}catch(S){Ae(e,e.return,S)}}}else if(c.tag===6){if(p===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(S){Ae(e,e.return,S)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;p===c&&(p=null),c=c.return}p===c&&(p=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:kn(t,e),Hn(e),r&4&&A0(e);break;case 21:break;default:kn(t,e),Hn(e)}}function Hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cy(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wl(o,""),r.flags&=-33);var i=O0(e);kp(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=O0(e);Cp(e,s,l);break;default:throw Error(A(161))}}catch(a){Ae(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mC(e,t,n){z=e,Py(e,t,n)}function Py(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Ma;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||yt;s=Ma;var u=yt;if(Ma=l,(yt=a)&&!u)for(z=o;z!==null;)l=z,a=l.child,l.tag===22&&l.memoizedState!==null?D0(o):a!==null?(a.return=l,z=a):D0(o);for(;i!==null;)z=i,Py(i,t,n),i=i.sibling;z=o,Ma=s,yt=u}R0(e,t,n)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):R0(e,t,n)}}function R0(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:yt||Su(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!yt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:bn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&g0(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}g0(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var c=p.dehydrated;c!==null&&Gl(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}yt||t.flags&512&&xp(t)}catch(m){Ae(t,t.return,m)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function _0(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function D0(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Su(4,t)}catch(a){Ae(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){Ae(t,o,a)}}var i=t.return;try{xp(t)}catch(a){Ae(t,i,a)}break;case 5:var l=t.return;try{xp(t)}catch(a){Ae(t,l,a)}}}catch(a){Ae(t,t.return,a)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var hC=Math.ceil,lu=hr.ReactCurrentDispatcher,af=hr.ReactCurrentOwner,cn=hr.ReactCurrentBatchConfig,ie=0,et=null,Ve=null,rt=0,Ut=0,hi=Zr(0),Xe=0,ss=null,bo=0,wu=0,uf=0,Hl=null,Nt=null,cf=0,Li=1/0,lr=null,su=!1,bp=null,Wr=null,Ia=!1,Vr=null,au=0,jl=0,Pp=null,Fa=-1,za=0;function Pt(){return ie&6?Ne():Fa!==-1?Fa:Fa=Ne()}function Qr(e){return e.mode&1?ie&2&&rt!==0?rt&-rt:Zx.transition!==null?(za===0&&(za=uh()),za):(e=ue,e!==0||(e=window.event,e=e===void 0?16:yh(e.type)),e):1}function Ln(e,t,n,r){if(50<jl)throw jl=0,Pp=null,Error(A(185));as(e,n,r),(!(ie&2)||e!==et)&&(e===et&&(!(ie&2)&&(wu|=n),Xe===4&&Fr(e,rt)),Vt(e,r),n===1&&ie===0&&!(t.mode&1)&&(Li=Ne()+500,yu&&Jr()))}function Vt(e,t){var n=e.callbackNode;ex(e,t);var r=Ua(e,e===et?rt:0);if(r===0)n!==null&&Hm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hm(n),t===1)e.tag===0?Kx(N0.bind(null,e)):Dh(N0.bind(null,e)),Qx(function(){!(ie&6)&&Jr()}),n=null;else{switch(ch(r)){case 1:n=Dp;break;case 4:n=sh;break;case 16:n=ja;break;case 536870912:n=ah;break;default:n=ja}n=Ry(n,Ty.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ty(e,t){if(Fa=-1,za=0,ie&6)throw Error(A(327));var n=e.callbackNode;if(xi()&&e.callbackNode!==n)return null;var r=Ua(e,e===et?rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=uu(e,r);else{t=r;var o=ie;ie|=2;var i=Ly();(et!==e||rt!==t)&&(lr=null,Li=Ne()+500,So(e,t));do try{vC();break}catch(s){Ey(e,s)}while(!0);Yp(),lu.current=i,ie=o,Ve!==null?t=0:(et=null,rt=0,t=Xe)}if(t!==0){if(t===2&&(o=Zd(e),o!==0&&(r=o,t=Tp(e,o))),t===1)throw n=ss,So(e,0),Fr(e,r),Vt(e,Ne()),n;if(t===6)Fr(e,r);else{if(o=e.current.alternate,!(r&30)&&!yC(o)&&(t=uu(e,r),t===2&&(i=Zd(e),i!==0&&(r=i,t=Tp(e,i))),t===1))throw n=ss,So(e,0),Fr(e,r),Vt(e,Ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:ho(e,Nt,lr);break;case 3:if(Fr(e,r),(r&130023424)===r&&(t=cf+500-Ne(),10<t)){if(Ua(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Pt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=lp(ho.bind(null,e,Nt,lr),t);break}ho(e,Nt,lr);break;case 4:if(Fr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-En(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hC(r/1960))-r,10<r){e.timeoutHandle=lp(ho.bind(null,e,Nt,lr),r);break}ho(e,Nt,lr);break;case 5:ho(e,Nt,lr);break;default:throw Error(A(329))}}}return Vt(e,Ne()),e.callbackNode===n?Ty.bind(null,e):null}function Tp(e,t){var n=Hl;return e.current.memoizedState.isDehydrated&&(So(e,t).flags|=256),e=uu(e,t),e!==2&&(t=Nt,Nt=n,t!==null&&Ep(t)),e}function Ep(e){Nt===null?Nt=e:Nt.push.apply(Nt,e)}function yC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Mn(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fr(e,t){for(t&=~uf,t&=~wu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-En(t),r=1<<n;e[n]=-1,t&=~r}}function N0(e){if(ie&6)throw Error(A(327));xi();var t=Ua(e,0);if(!(t&1))return Vt(e,Ne()),null;var n=uu(e,t);if(e.tag!==0&&n===2){var r=Zd(e);r!==0&&(t=r,n=Tp(e,r))}if(n===1)throw n=ss,So(e,0),Fr(e,t),Vt(e,Ne()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ho(e,Nt,lr),Vt(e,Ne()),null}function df(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Li=Ne()+500,yu&&Jr())}}function Po(e){Vr!==null&&Vr.tag===0&&!(ie&6)&&xi();var t=ie;ie|=1;var n=cn.transition,r=ue;try{if(cn.transition=null,ue=1,e)return e()}finally{ue=r,cn.transition=n,ie=t,!(ie&6)&&Jr()}}function pf(){Ut=hi.current,xe(hi)}function So(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wx(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Up(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ga();break;case 3:Ti(),xe(Ft),xe(gt),ef();break;case 5:Jp(r);break;case 4:Ti();break;case 13:xe(Ee);break;case 19:xe(Ee);break;case 10:Xp(r.type._context);break;case 22:case 23:pf()}n=n.return}if(et=e,Ve=e=Yr(e.current,null),rt=Ut=t,Xe=0,ss=null,uf=wu=bo=0,Nt=Hl=null,go!==null){for(t=0;t<go.length;t++)if(n=go[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}go=null}return e}function Ey(e,t){do{var n=Ve;try{if(Yp(),Da.current=iu,ou){for(var r=Le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ou=!1}if(ko=0,Je=Ye=Le=null,$l=!1,os=0,af.current=null,n===null||n.return===null){Xe=1,ss=t,Ve=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=rt,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,c=p.tag;if(!(p.mode&1)&&(c===0||c===11||c===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=k0(l);if(y!==null){y.flags&=-257,b0(y,l,s,i,t),y.mode&1&&C0(i,u,t),t=y,a=u;var g=t.updateQueue;if(g===null){var S=new Set;S.add(a),t.updateQueue=S}else g.add(a);break e}else{if(!(t&1)){C0(i,u,t),ff();break e}a=Error(A(426))}}else if(be&&s.mode&1){var k=k0(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),b0(k,l,s,i,t),Wp(Ei(a,s));break e}}i=a=Ei(a,s),Xe!==4&&(Xe=2),Hl===null?Hl=[i]:Hl.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=cy(i,a,t);y0(i,h);break e;case 1:s=a;var d=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wr===null||!Wr.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=dy(i,s,t);y0(i,w);break e}}i=i.return}while(i!==null)}Iy(n)}catch(x){t=x,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function Ly(){var e=lu.current;return lu.current=iu,e===null?iu:e}function ff(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),et===null||!(bo&268435455)&&!(wu&268435455)||Fr(et,rt)}function uu(e,t){var n=ie;ie|=2;var r=Ly();(et!==e||rt!==t)&&(lr=null,So(e,t));do try{gC();break}catch(o){Ey(e,o)}while(!0);if(Yp(),ie=n,lu.current=r,Ve!==null)throw Error(A(261));return et=null,rt=0,Xe}function gC(){for(;Ve!==null;)My(Ve)}function vC(){for(;Ve!==null&&!U6();)My(Ve)}function My(e){var t=Ay(e.alternate,e,Ut);e.memoizedProps=e.pendingProps,t===null?Iy(e):Ve=t,af.current=null}function Iy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=dC(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,Ve=null;return}}else if(n=cC(n,t,Ut),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Xe===0&&(Xe=5)}function ho(e,t,n){var r=ue,o=cn.transition;try{cn.transition=null,ue=1,SC(e,t,n,r)}finally{cn.transition=o,ue=r}return null}function SC(e,t,n,r){do xi();while(Vr!==null);if(ie&6)throw Error(A(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(tx(e,i),e===et&&(Ve=et=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ia||(Ia=!0,Ry(ja,function(){return xi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=cn.transition,cn.transition=null;var l=ue;ue=1;var s=ie;ie|=4,af.current=null,fC(e,n),by(n,e),$x(op),Wa=!!rp,op=rp=null,e.current=n,mC(n,e,o),W6(),ie=s,ue=l,cn.transition=i}else e.current=n;if(Ia&&(Ia=!1,Vr=e,au=o),i=e.pendingLanes,i===0&&(Wr=null),X6(n.stateNode,r),Vt(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(su)throw su=!1,e=bp,bp=null,e;return au&1&&e.tag!==0&&xi(),i=e.pendingLanes,i&1?e===Pp?jl++:(jl=0,Pp=e):jl=0,Jr(),null}function xi(){if(Vr!==null){var e=ch(au),t=cn.transition,n=ue;try{if(cn.transition=null,ue=16>e?16:e,Vr===null)var r=!1;else{if(e=Vr,Vr=null,au=0,ie&6)throw Error(A(331));var o=ie;for(ie|=4,z=e.current;z!==null;){var i=z,l=i.child;if(z.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(z=u;z!==null;){var p=z;switch(p.tag){case 0:case 11:case 15:ql(8,p,i)}var c=p.child;if(c!==null)c.return=p,z=c;else for(;z!==null;){p=z;var m=p.sibling,y=p.return;if(xy(p),p===u){z=null;break}if(m!==null){m.return=y,z=m;break}z=y}}}var g=i.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var k=S.sibling;S.sibling=null,S=k}while(S!==null)}}z=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,z=l;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ql(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,z=h;break e}z=i.return}}var d=e.current;for(z=d;z!==null;){l=z;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,z=f;else e:for(l=d;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Su(9,s)}}catch(x){Ae(s,s.return,x)}if(s===l){z=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,z=w;break e}z=s.return}}if(ie=o,Jr(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(du,e)}catch{}r=!0}return r}finally{ue=n,cn.transition=t}}return!1}function B0(e,t,n){t=Ei(n,t),t=cy(e,t,1),e=Ur(e,t,1),t=Pt(),e!==null&&(as(e,1,t),Vt(e,t))}function Ae(e,t,n){if(e.tag===3)B0(e,e,n);else for(;t!==null;){if(t.tag===3){B0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))){e=Ei(n,e),e=dy(t,e,1),t=Ur(t,e,1),e=Pt(),t!==null&&(as(t,1,e),Vt(t,e));break}}t=t.return}}function wC(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pt(),e.pingedLanes|=e.suspendedLanes&n,et===e&&(rt&n)===n&&(Xe===4||Xe===3&&(rt&130023424)===rt&&500>Ne()-cf?So(e,0):uf|=n),Vt(e,t)}function Oy(e,t){t===0&&(e.mode&1?(t=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):t=1);var n=Pt();e=fr(e,t),e!==null&&(as(e,t,n),Vt(e,n))}function xC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Oy(e,n)}function CC(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Oy(e,n)}var Ay;Ay=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ft.current)Bt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Bt=!1,uC(e,t,n);Bt=!!(e.flags&131072)}else Bt=!1,be&&t.flags&1048576&&Nh(t,Ja,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ba(e,t),e=t.pendingProps;var o=ki(t,gt.current);wi(t,n),o=nf(null,t,r,e,o,n);var i=rf();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zt(r)?(i=!0,Ka(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Kp(t),o.updater=vu,t.stateNode=o,o._reactInternals=t,fp(t,r,e,n),t=yp(null,t,r,!0,i,n)):(t.tag=0,be&&i&&jp(t),bt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ba(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=bC(r),e=bn(r,e),o){case 0:t=hp(null,t,r,e,n);break e;case 1:t=E0(null,t,r,e,n);break e;case 11:t=P0(null,t,r,e,n);break e;case 14:t=T0(null,t,r,bn(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:bn(r,o),hp(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:bn(r,o),E0(e,t,r,o,n);case 3:e:{if(hy(t),e===null)throw Error(A(387));r=t.pendingProps,i=t.memoizedState,o=i.element,qh(e,t),nu(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ei(Error(A(423)),t),t=L0(e,t,r,n,o);break e}else if(r!==o){o=Ei(Error(A(424)),t),t=L0(e,t,r,n,o);break e}else for(Wt=jr(t.stateNode.containerInfo.firstChild),Qt=t,be=!0,Tn=null,n=Vh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bi(),r===o){t=mr(e,t,n);break e}bt(e,t,r,n)}t=t.child}return t;case 5:return Hh(t),e===null&&cp(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ip(r,o)?l=null:i!==null&&ip(r,i)&&(t.flags|=32),my(e,t),bt(e,t,l,n),t.child;case 6:return e===null&&cp(t),null;case 13:return yy(e,t,n);case 4:return Zp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pi(t,null,r,n):bt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:bn(r,o),P0(e,t,r,o,n);case 7:return bt(e,t,t.pendingProps,n),t.child;case 8:return bt(e,t,t.pendingProps.children,n),t.child;case 12:return bt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Se(eu,r._currentValue),r._currentValue=l,i!==null)if(Mn(i.value,l)){if(i.children===o.children&&!Ft.current){t=mr(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=cr(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),dp(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(A(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),dp(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}bt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,wi(t,n),o=dn(o),r=r(o),t.flags|=1,bt(e,t,r,n),t.child;case 14:return r=t.type,o=bn(r,t.pendingProps),o=bn(r.type,o),T0(e,t,r,o,n);case 15:return py(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:bn(r,o),Ba(e,t),t.tag=1,zt(r)?(e=!0,Ka(t)):e=!1,wi(t,n),uy(t,r,o),fp(t,r,o,n),yp(null,t,r,!0,e,n);case 19:return gy(e,t,n);case 22:return fy(e,t,n)}throw Error(A(156,t.tag))};function Ry(e,t){return lh(e,t)}function kC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,t,n,r){return new kC(e,t,n,r)}function mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bC(e){if(typeof e=="function")return mf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ap)return 11;if(e===Rp)return 14}return 2}function Yr(e,t){var n=e.alternate;return n===null?(n=un(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Va(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")mf(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ii:return wo(n.children,o,i,t);case Op:l=8,o|=8;break;case Bd:return e=un(12,n,t,o|2),e.elementType=Bd,e.lanes=i,e;case Fd:return e=un(13,n,t,o),e.elementType=Fd,e.lanes=i,e;case zd:return e=un(19,n,t,o),e.elementType=zd,e.lanes=i,e;case H0:return xu(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $0:l=10;break e;case q0:l=9;break e;case Ap:l=11;break e;case Rp:l=14;break e;case Dr:l=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=un(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function wo(e,t,n,r){return e=un(7,e,r,t),e.lanes=n,e}function xu(e,t,n,r){return e=un(22,e,r,t),e.elementType=H0,e.lanes=n,e.stateNode={isHidden:!1},e}function _d(e,t,n){return e=un(6,e,null,t),e.lanes=n,e}function Dd(e,t,n){return t=un(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function PC(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vd(0),this.expirationTimes=vd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vd(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function hf(e,t,n,r,o,i,l,s,a){return e=new PC(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=un(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kp(i),e}function TC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _y(e){if(!e)return Gr;e=e._reactInternals;e:{if(Eo(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(zt(n))return _h(e,n,t)}return t}function Dy(e,t,n,r,o,i,l,s,a){return e=hf(n,r,!0,e,o,i,l,s,a),e.context=_y(null),n=e.current,r=Pt(),o=Qr(n),i=cr(r,o),i.callback=t!=null?t:null,Ur(n,i,o),e.current.lanes=o,as(e,o,r),Vt(e,r),e}function Cu(e,t,n,r){var o=t.current,i=Pt(),l=Qr(o);return n=_y(n),t.context===null?t.context=n:t.pendingContext=n,t=cr(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ur(o,t,l),e!==null&&(Ln(e,o,l,i),_a(e,o,l)),l}function cu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function F0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yf(e,t){F0(e,t),(e=e.alternate)&&F0(e,t)}function EC(){return null}var Ny=typeof reportError=="function"?reportError:function(e){console.error(e)};function gf(e){this._internalRoot=e}ku.prototype.render=gf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Cu(e,t,null,null)};ku.prototype.unmount=gf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Po(function(){Cu(null,e,null,null)}),t[pr]=null}};function ku(e){this._internalRoot=e}ku.prototype.unstable_scheduleHydration=function(e){if(e){var t=fh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Br.length&&t!==0&&t<Br[n].priority;n++);Br.splice(n,0,e),n===0&&hh(e)}};function vf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function z0(){}function LC(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=cu(l);i.call(u)}}var l=Dy(t,r,e,0,null,!1,!1,"",z0);return e._reactRootContainer=l,e[pr]=l.current,Jl(e.nodeType===8?e.parentNode:e),Po(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=cu(a);s.call(u)}}var a=hf(e,0,!1,null,null,!1,!1,"",z0);return e._reactRootContainer=a,e[pr]=a.current,Jl(e.nodeType===8?e.parentNode:e),Po(function(){Cu(t,a,n,r)}),a}function Pu(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=cu(l);s.call(a)}}Cu(t,l,e,o)}else l=LC(n,t,e,o,r);return cu(l)}dh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_l(t.pendingLanes);n!==0&&(Np(t,n|1),Vt(t,Ne()),!(ie&6)&&(Li=Ne()+500,Jr()))}break;case 13:Po(function(){var r=fr(e,1);if(r!==null){var o=Pt();Ln(r,e,1,o)}}),yf(e,1)}};Bp=function(e){if(e.tag===13){var t=fr(e,134217728);if(t!==null){var n=Pt();Ln(t,e,134217728,n)}yf(e,134217728)}};ph=function(e){if(e.tag===13){var t=Qr(e),n=fr(e,t);if(n!==null){var r=Pt();Ln(n,e,t,r)}yf(e,t)}};fh=function(){return ue};mh=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};Xd=function(e,t,n){switch(t){case"input":if(qd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=hu(r);if(!o)throw Error(A(90));U0(r),qd(r,o)}}}break;case"textarea":Q0(e,n);break;case"select":t=n.value,t!=null&&yi(e,!!n.multiple,t,!1)}};eh=df;th=Po;var MC={usingClientEntryPoint:!1,Events:[cs,ui,hu,Z0,J0,df]},Il={findFiberByHostInstance:yo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},IC={bundleType:Il.bundleType,version:Il.version,rendererPackageName:Il.rendererPackageName,rendererConfig:Il.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=oh(e),e===null?null:e.stateNode},findFiberByHostInstance:Il.findFiberByHostInstance||EC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ol.isDisabled&&Ol.supportsFiber))try{du=Ol.inject(IC),Wn=Ol}catch{}var Ol;Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MC;Gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vf(t))throw Error(A(200));return TC(e,t,null,n)};Gt.createRoot=function(e,t){if(!vf(e))throw Error(A(299));var n=!1,r="",o=Ny;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=hf(e,1,!1,null,null,n,!1,r,o),e[pr]=t.current,Jl(e.nodeType===8?e.parentNode:e),new gf(t)};Gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=oh(t),e=e===null?null:e.stateNode,e};Gt.flushSync=function(e){return Po(e)};Gt.hydrate=function(e,t,n){if(!bu(t))throw Error(A(200));return Pu(null,e,t,!0,n)};Gt.hydrateRoot=function(e,t,n){if(!vf(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Ny;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Dy(t,null,e,1,n!=null?n:null,o,!1,i,l),e[pr]=t.current,Jl(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ku(t)};Gt.render=function(e,t,n){if(!bu(t))throw Error(A(200));return Pu(null,e,t,!1,n)};Gt.unmountComponentAtNode=function(e){if(!bu(e))throw Error(A(40));return e._reactRootContainer?(Po(function(){Pu(null,null,e,!1,function(){e._reactRootContainer=null,e[pr]=null})}),!0):!1};Gt.unstable_batchedUpdates=df;Gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bu(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Pu(e,t,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426"});var Vy=Dt((W4,zy)=>{"use strict";function Fy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fy)}catch(e){console.error(e)}}Fy(),zy.exports=By()});var qy=Dt(Sf=>{"use strict";var $y=Vy();Sf.createRoot=$y.createRoot,Sf.hydrateRoot=$y.hydrateRoot;var Q4});var Uy=Dt((X4,jy)=>{jy.exports=function(t,n,r){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof n=="function"&&(r=n,n={}),n=n||{},r=r||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async="async"in n?!!n.async:!0,i.src=t,n.attrs&&OC(i,n.attrs),n.text&&(i.text=""+n.text);var l="onload"in i?Hy:AC;l(i,r),i.onload||Hy(i,r),o.appendChild(i)};function OC(e,t){for(var n in t)e.setAttribute(n,t[n])}function Hy(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function AC(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}});function Oi(e){var t,n;return typeof window=="undefined"?null:window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:(n=(t=window.module)==null?void 0:t.exports)!=null&&n[e]?window.module.exports[e]:null}function Mo(e,t,n=null,r=()=>!0,o=Wy.default){let i=Oi(t);return i&&r&&r(i)?Promise.resolve(i):new Promise((l,s)=>{if(Lo[e]){Lo[e].push({resolve:l,reject:s});return}Lo[e]=[{resolve:l,reject:s}];let a=u=>{Lo[e].forEach(p=>p.resolve(u)),Lo[e]=null};if(n){let u=window[n];window[n]=function(){u&&u(),a(Oi(t))}}o(e,u=>{u?(Lo[e].forEach(p=>p.reject(u)),Lo[e]=null):n||a(Oi(t))})})}var Wy,Lo,Qy=pt(()=>{Wy=b(Uy());Lo={}});function In(e){return typeof window!="undefined"&&typeof window.MediaStream!="undefined"&&e instanceof window.MediaStream}function ps(e){return/^blob:/.test(e)}function fs(e){return(e==null?void 0:e.mozHasAudio)||(e==null?void 0:e.webkitAudioDecodedByteCount)>0||(e==null?void 0:e.audioTracks)!==void 0&&e.audioTracks.length>0}function yr(e){let t=e||document.createElement("video"),n=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&n}var wf=pt(()=>{});function Cf(e){return!e||typeof e!="string"?!1:xf.test(e)}function Ai(e,t){if(t&&t.length>0)return!0;if(!e)return!1;if(In(e)||ps(e))return!0;let n=e;return Yy.test(n)||xf.test(n)||Tu.test(n)||Eu.test(n)||Lu.test(n)}var Yy,xf,Tu,Eu,Lu,Xy=pt(()=>{wf();Yy=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,xf=/\.(mp3|wav|flac|aac|ogg|m4a|opus|wma)(#t=[,\d+]+)?($|\?)/i,Tu=/\.(m3u8)($|\?)/i,Eu=/\.(mpd)($|\?)/i,Lu=/\.(flv)($|\?)/i});var Mu,Gy,Iu,kf,bf,Pf,Tf,Ef,Lf,Mf,Ky=pt(()=>{Mu=typeof navigator!="undefined",Gy=Mu&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Iu=Mu&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||Gy)&&!window.MSStream,kf=Mu&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,bf="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",Pf="Hls",Tf="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",Ef="dashjs",Lf="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",Mf="flvjs"});function Ri(e){if(typeof document=="undefined")return null;let t=`${Zy}${e}=`,n=document.cookie.split(";");for(let r=0;r<n.length;r++){let o=n[r];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)try{return decodeURIComponent(o.substring(t.length,o.length))}catch{return o.substring(t.length,o.length)}}return null}function _i(e,t,n){if(typeof document=="undefined")return;let r="";if(n){let o=new Date;o.setTime(o.getTime()+n*24*60*60*1e3),r=`; expires=${o.toUTCString()}`}document.cookie=`${Zy}${e}=${encodeURIComponent(t||"")}${r}; path=/`}var Zy,Jy=pt(()=>{Zy="rmp_"});function RC(){if(If)return;if(typeof window=="undefined"||typeof navigator=="undefined"){If=!0;return}let e=window.navigator.userAgent.toLowerCase(),t="ontouchstart"in window||navigator.maxTouchPoints>0,n=/iphone|ipod|android.*mobile|windows phone|blackberry/.test(e),r=/ipad|android(?!.*mobile)|silk|kindle|tablet/.test(e),o=!t&&/mac|windows|linux|cros/.test(e);n||r?(e2=!1,Of=!0):(e2=o,Of=!o),If=!0}var e2,Of,If,Ou,t2=pt(()=>{e2=!1,Of=!1,If=!1;RC();Ou=Of});function Ge(e){let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),o=t%60;return n>0?`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`}function ms(e,t){return e.reduce((n,r)=>{let o=String(r[t]);return n[o]=r,n},{})}function Au(e,t){let n={},r=Object.keys(e);for(let o of r)t.indexOf(o)===-1&&(n[o]=e[o]);return n}var n2=pt(()=>{});function r2(e){let t=e.trim().split(":");if(t.length===3){let[n,r,o]=t;return parseFloat(n)*3600+parseFloat(r)*60+parseFloat(o)}if(t.length===2){let[n,r]=t;return parseFloat(n)*60+parseFloat(r)}return 0}function Ru(e){let t=[],n=e.split(`
`),r=0;for(;r<n.length;){let o=n[r].trim();if(o.includes(" --> ")){let[i,l]=o.split(" --> "),s=r2(i),a=r2(l.split(" ")[0]),u=[];for(r++;r<n.length&&n[r].trim()!=="";)u.push(n[r].trim()),r++;u.length>0&&t.push({startTime:s,endTime:a,text:u.join(`
`)})}else r++}return t}function _u(e,t){return e.filter(n=>t>=n.startTime&&t<=n.endTime)}function Di(e,t){let n=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16),i=parseInt(t)/100;return`rgba(${n}, ${r}, ${o}, ${i})`}function Du(e,t){switch(e){case"dropshadow":return`2px 2px 3px ${t}, 2px 2px 4px ${t}`;case"raised":return`1px 1px 0 ${t}, 2px 2px 0 ${t}`;case"depressed":return`-1px -1px 0 ${t}, -2px -2px 0 ${t}`;case"uniform":return`0 0 3px ${t}, 0 0 3px ${t}, 0 0 3px ${t}, 0 0 3px ${t}`;default:return"none"}}var eo,hs,o2=pt(()=>{eo={fontFamily:"sans-serif",fontColor:"#ffffff",fontSize:"100%",fontOpacity:"100%",backgroundColor:"#000000",backgroundOpacity:"75%",windowColor:"#000000",windowOpacity:"0%",edgeStyle:"none"},hs={fontFamily:[{label:"Proportional Sans-Serif",value:"sans-serif"},{label:"Monospace Sans-Serif",value:"monospace"},{label:"Proportional Serif",value:"serif"},{label:"Monospace Serif",value:'"Courier New", monospace'},{label:"Casual",value:'"Comic Sans MS", cursive'},{label:"Cursive",value:'"Brush Script MT", cursive'},{label:"Small Capitals",value:"small-caps"}],fontColor:[{label:"White",value:"#ffffff"},{label:"Yellow",value:"#ffff00"},{label:"Green",value:"#00ff00"},{label:"Cyan",value:"#00ffff"},{label:"Blue",value:"#0000ff"},{label:"Magenta",value:"#ff00ff"},{label:"Red",value:"#ff0000"},{label:"Black",value:"#000000"}],fontSize:[{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"},{label:"150%",value:"150%"},{label:"200%",value:"200%"},{label:"300%",value:"300%"},{label:"400%",value:"400%"}],fontOpacity:[{label:"25%",value:"25%"},{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"}],backgroundColor:[{label:"Black",value:"#000000"},{label:"White",value:"#ffffff"},{label:"Yellow",value:"#ffff00"},{label:"Green",value:"#00ff00"},{label:"Cyan",value:"#00ffff"},{label:"Blue",value:"#0000ff"},{label:"Magenta",value:"#ff00ff"},{label:"Red",value:"#ff0000"}],backgroundOpacity:[{label:"0%",value:"0%"},{label:"25%",value:"25%"},{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"}],windowColor:[{label:"Black",value:"#000000"},{label:"White",value:"#ffffff"},{label:"Red",value:"#ff0000"},{label:"Green",value:"#00ff00"},{label:"Blue",value:"#0000ff"},{label:"Yellow",value:"#ffff00"},{label:"Magenta",value:"#ff00ff"},{label:"Cyan",value:"#00ffff"}],windowOpacity:[{label:"0%",value:"0%"},{label:"25%",value:"25%"},{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"}],edgeStyle:[{label:"None",value:"none"},{label:"Drop Shadow",value:"dropshadow"},{label:"Raised",value:"raised"},{label:"Depressed",value:"depressed"},{label:"Uniform",value:"uniform"}]}});var i2=pt(()=>{wf();Jy();t2();n2();Qy();o2()});var to,l2=pt(()=>{to={exitFullScreenMode:"Exit full screen mode (f)",fullScreen:"Full screen",exitFullscreen:"Exit full screen",fullscreen:"Full screen",play:"Play",replay:"Replay",pause:"Pause",previous:"Previous",next:"Next",normal:"Normal",settings:"Settings",speed:"Speed",quality:"Quality",auto:"Auto",hd:"HD",live:"Live",seconds:"seconds",clickToUnmute:"Click to unmute",playbackStuckClickResumePlayback:"Playback is stuck, click to resume playback.",mute:"Mute (m)",activateSound:"Activate sound",thisVideoHasNoSound:"This video has no sound",timeBar:"Time bar",loop:"Loop",pictureInPicture:"Picture in picture",captions:"Captions",off:"Off",captionOptions:"Options",fontFamily:"Font family",fontColor:"Font color",fontSize:"Font size",fontOpacity:"Font opacity",backgroundColor:"Background color",backgroundOpacity:"Background opacity",windowColor:"Window color",windowOpacity:"Window opacity",edgeStyle:"Character edge style",reset:"Reset",skipBack:"Back 10s",skipForward:"Forward 10s",unmute:"Unmute",close:"Close",back:"Back"}});var no,s2=pt(()=>{no={exitFullScreenMode:"Salir de pantalla completa (f)",fullScreen:"Pantalla completa",exitFullscreen:"Salir de pantalla completa",fullscreen:"Pantalla completa",play:"Reproducir",replay:"Repetir",pause:"Pausar",previous:"Anterior",next:"Siguiente",normal:"Normal",settings:"Ajustes",speed:"Velocidad",quality:"Calidad",auto:"Auto",hd:"HD",live:"En vivo",seconds:"segundos",clickToUnmute:"Haz clic para activar el sonido",playbackStuckClickResumePlayback:"La reproducci\xF3n se ha detenido, haz clic para continuar.",mute:"Silenciar (m)",activateSound:"Activar sonido",thisVideoHasNoSound:"Este video no tiene sonido",timeBar:"Barra de tiempo",loop:"Repetir",pictureInPicture:"Imagen en imagen",captions:"Subt\xEDtulos",off:"Desactivado",captionOptions:"Opciones",fontFamily:"Familia de fuente",fontColor:"Color de fuente",fontSize:"Tama\xF1o de fuente",fontOpacity:"Opacidad de fuente",backgroundColor:"Color de fondo",backgroundOpacity:"Opacidad de fondo",windowColor:"Color de ventana",windowOpacity:"Opacidad de ventana",edgeStyle:"Estilo de borde",reset:"Restablecer",skipBack:"Retroceder 10s",skipForward:"Avanzar 10s",unmute:"Activar sonido",close:"Cerrar",back:"Atr\xE1s"}});var a2=pt(()=>{l2();s2()});var it=pt(()=>{Xy();Ky();i2();a2()});var u2,c2,Af=pt(()=>{u2=b(I());it();c2=e=>(0,u2.lazy)(async()=>{let t=await e();return typeof t.default=="function"?t:t.default})});function d2(e,...t){let n=[].concat(...t);return Au(e,n)}function p2(e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n&&(n.current=t)})}}var Yn=pt(()=>{it();it()});var f2={};sm(f2,{default:()=>Ni});var Nu,Ni,m2=pt(()=>{Nu=b(I());it();Yn();Af();Ni=class extends Nu.default.Component{constructor(){super(...arguments);F(this,"onReady",n=>this.props.onReady(n));F(this,"onPlay",n=>this.props.onPlay({...n,hasAudio:fs(this.player)}));F(this,"onBuffer",n=>this.props.onBuffer(n));F(this,"onBufferEnd",n=>this.props.onBufferEnd(n));F(this,"onPause",n=>this.props.onPause(n));F(this,"onEnded",n=>this.props.onEnded(n));F(this,"onError",(n,r,o,i)=>this.props.onError(n,r,o,i));F(this,"onPlayBackRateChange",n=>{this.props.onPlayBackRateChange(n.target.playbackRate)});F(this,"onEnablePIP",n=>this.props.onEnablePIP(n));F(this,"onDisablePIP",n=>{let{onDisablePIP:r,playing:o}=this.props;r&&r(n),o&&this.play()});F(this,"onPresentationModeChange",n=>{if(this.player&&yr(this.player)){let{webkitPresentationMode:r}=this.player;r==="picture-in-picture"?this.onEnablePIP(n):r==="inline"&&this.onDisablePIP(n)}});F(this,"onSeek",n=>{var r;this.props.onSeek((r=n.target)==null?void 0:r.currentTime)});F(this,"mute",()=>{this.player.muted=!0});F(this,"unmute",()=>{this.player.muted=!1});F(this,"renderTrack",(n,r)=>Nu.default.createElement("track",{key:r,...n}));F(this,"ref",n=>{this.player&&(this.prevPlayer=this.player),this.player=n})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);let n=this.getSource(this.props.url);n&&(this.player.src=n),(Iu||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(n){this.prevPlayer&&this.prevPlayer!==this.player&&(this.removeListeners(this.prevPlayer),this.listenersAttached=!1),this.listenersAttached||this.addListeners(this.player),this.props.url!==n.url&&In(this.props.url)===!1&&(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.hls&&(this.hls.destroy(),this.hls=null),this.dash&&(this.dash.reset(),this.dash=null),this.flv&&(this.flv.unload(),this.flv.detachMediaElement(),this.flv.destroy(),this.flv=null),this.removeListeners(this.player),this.listenersAttached=!1}addListeners(n){let{url:r,playsinline:o}=this.props;n&&(this.removeListeners(n),this.listenersAttached=!0,n.addEventListener("play",this.onPlay),n.addEventListener("waiting",this.onBuffer),n.addEventListener("playing",this.onBufferEnd),n.addEventListener("pause",this.onPause),n.addEventListener("seeked",this.onSeek),n.addEventListener("ended",this.onEnded),n.addEventListener("error",this.onError),n.addEventListener("ratechange",this.onPlayBackRateChange),n.addEventListener("enterpictureinpicture",this.onEnablePIP),n.addEventListener("leavepictureinpicture",this.onDisablePIP),n.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(r)===!1&&n.addEventListener("canplay",this.onReady),o&&(n.setAttribute("playsinline",""),n.setAttribute("webkit-playsinline",""),n.setAttribute("x5-playsinline","")))}removeListeners(n){n&&(n.removeEventListener("canplay",this.onReady),n.removeEventListener("play",this.onPlay),n.removeEventListener("waiting",this.onBuffer),n.removeEventListener("playing",this.onBufferEnd),n.removeEventListener("pause",this.onPause),n.removeEventListener("seeked",this.onSeek),n.removeEventListener("ended",this.onEnded),n.removeEventListener("error",this.onError),n.removeEventListener("ratechange",this.onPlayBackRateChange),n.removeEventListener("enterpictureinpicture",this.onEnablePIP),n.removeEventListener("leavepictureinpicture",this.onDisablePIP),n.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange))}shouldUseHLS(n){return kf&&this.props.config.forceSafariHLS||this.props.config.forceHLS?!0:Iu||this.props.config.forceDisableHls?!1:Tu.test(n)}shouldUseDASH(n){return Eu.test(n)||this.props.config.forceDASH}shouldUseFLV(n){return Lu.test(n)||this.props.config.forceFLV}load(n,r){let{hlsVersion:o,hlsOptions:i,dashVersion:l,flvVersion:s}=this.props.config;if(r===!1)return;this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.flv&&this.flv.unload(),this.loadSequence=(this.loadSequence||0)+1;let a=this.loadSequence;if(this.shouldUseHLS(n))Mo(bf.replace("VERSION",o),Pf).then(u=>{a===this.loadSequence&&(this.hls=new u(i),this.hls.on(u.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(u.Events.ERROR,(p,c)=>{this.props.onError(p,c,this.hls,u)}),this.hls.loadSource(n),this.hls.attachMedia(this.player),this.props.onLoaded())}).catch(u=>this.props.onError(u));else if(this.shouldUseDASH(n))Mo(Tf.replace("VERSION",l),Ef).then(u=>{a===this.loadSequence&&(this.dash=u.MediaPlayer().create(),this.dash.initialize(this.player,n,this.props.playing),this.dash.on("error",p=>{this.props.onError(p,null,this.dash,u)}),parseInt(l)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:u.LogLevel.LOG_LEVEL_NONE}}),this.props.onLoaded())}).catch(u=>this.props.onError(u));else if(this.shouldUseFLV(n))Mo(Lf.replace("VERSION",s),Mf).then(u=>{a===this.loadSequence&&(this.flv=u.createPlayer({type:"flv",url:n}),this.flv.attachMediaElement(this.player),this.flv.on(u.Events.ERROR,(p,c)=>{this.props.onError(p,c,this.flv,u)}),this.flv.load(),this.props.onLoaded())}).catch(u=>this.props.onError(u));else if(In(n))try{this.player.srcObject=n}catch{this.player.src=window.URL.createObjectURL(n)}}getPlayer(){return this.player}play(){let n=this.player.play();n&&n.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.hls&&(this.hls.destroy(),this.hls=null),this.dash&&(this.dash.reset(),this.dash=null),this.flv&&(this.flv.unload(),this.flv.detachMediaElement(),this.flv.destroy(),this.flv=null)}seekTo(n,r=!0){this.player.currentTime=n,r===!1&&this.pause()}setVolume(n){this.player.volume=n}enablePIP(){if(this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player){let n=this.player.requestPictureInPicture();n&&n.catch&&n.catch(r=>this.props.onError(r))}else yr(this.player)&&this.player.webkitPresentationMode!=="picture-in-picture"&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():yr(this.player)&&this.player.webkitPresentationMode!=="inline"&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(n){try{this.player.playbackRate=n}catch(r){this.props.onError(r)}}getDuration(){if(!this.player)return null;let{duration:n,seekable:r}=this.player;return n===1/0&&r.length>0?r.end(r.length-1):n}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;let{buffered:n}=this.player;if(n.length===0)return 0;let r=n.end(n.length-1),o=this.getDuration();return o!==null&&r>o?o:r}getSource(n){if(!(In(n)||this.shouldUseHLS(n)||this.shouldUseDASH(n)||this.shouldUseFLV(n)))return n}render(){var y;let{url:n,playing:r,loop:o,muted:i,config:l,width:s,height:a,viewType:u}=this.props,p=u==="audio",c=p?{display:"none"}:{width:s==="auto"?s:"100%",height:a==="auto"?a:"100%"};return Nu.default.createElement(p?"audio":"video",{"data-testid":p?"audio-element":"video-element",ref:this.ref,src:this.getSource(n),style:c,preload:"auto",autoPlay:r||void 0,controls:!1,muted:i,loop:o,...l.attributes},(y=l.tracks)==null?void 0:y.map(this.renderTrack))}};F(Ni,"displayName","PlayerCore"),F(Ni,"canPlay",Ai)});var S2=Dt((F9,v2)=>{"use strict";var NC=function(t){return BC(t)&&!FC(t)};function BC(e){return!!e&&typeof e=="object"}function FC(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||$C(e)}var zC=typeof Symbol=="function"&&Symbol.for,VC=zC?Symbol.for("react.element"):60103;function $C(e){return e.$$typeof===VC}function qC(e){return Array.isArray(e)?[]:{}}function ys(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Bi(qC(e),e,t):e}function HC(e,t,n){return e.concat(t).map(function(r){return ys(r,n)})}function jC(e,t){if(!t.customMerge)return Bi;var n=t.customMerge(e);return typeof n=="function"?n:Bi}function UC(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function y2(e){return Object.keys(e).concat(UC(e))}function g2(e,t){try{return t in e}catch{return!1}}function WC(e,t){return g2(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function QC(e,t,n){var r={};return n.isMergeableObject(e)&&y2(e).forEach(function(o){r[o]=ys(e[o],n)}),y2(t).forEach(function(o){WC(e,o)||(g2(e,o)&&n.isMergeableObject(t[o])?r[o]=jC(o,n)(e[o],t[o],n):r[o]=ys(t[o],n))}),r}function Bi(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||HC,n.isMergeableObject=n.isMergeableObject||NC,n.cloneUnlessOtherwiseSpecified=ys;var r=Array.isArray(t),o=Array.isArray(e),i=r===o;return i?r?n.arrayMerge(e,t,n):QC(e,t,n):ys(t,n)}Bi.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,o){return Bi(r,o,n)},{})};var YC=Bi;v2.exports=YC});var vs=Dt((V9,x2)=>{var ZC=typeof Element!="undefined",JC=typeof Map=="function",ek=typeof Set=="function",tk=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Bu(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Bu(e[r],t[r]))return!1;return!0}var i;if(JC&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!Bu(r.value[1],t.get(r.value[0])))return!1;return!0}if(ek&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(tk&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(ZC&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!Bu(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}x2.exports=function(t,n){try{return Bu(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}});var k2=Dt(($9,C2)=>{"use strict";var nk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";C2.exports=nk});var E2=Dt((q9,T2)=>{"use strict";var rk=k2();function b2(){}function P2(){}P2.resetWarningCache=b2;T2.exports=function(){function e(r,o,i,l,s,a){if(a!==rk){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:P2,resetWarningCache:b2};return n.PropTypes=n,n}});var J=Dt((U9,L2)=>{L2.exports=E2()();var H9,j9});var F2=Dt((o8,B2)=>{B2.exports=function(t,n,r,o){var i=r?r.call(o,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var l=Object.keys(t),s=Object.keys(n);if(l.length!==s.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(n),u=0;u<l.length;u++){var p=l[u];if(!a(p))return!1;var c=t[p],m=n[p];if(i=r?r.call(o,c,m,p):void 0,i===!1||i===void 0&&c!==m)return!1}return!0}});var z4={};sm(z4,{default:()=>t6});var Jw=b(I()),e6=b(qy());it();Af();var h2={key:"core",name:"PlayerCore",canPlay:Ai,canEnablePIP:e=>Ai(e)&&(document.pictureInPictureEnabled||yr()),lazyPlayer:c2(()=>Promise.resolve().then(()=>(m2(),f2)))};var Zo=b(I()),Gw=b(S2());var w2=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function XC(e,t){return!!(e===t||w2(e)&&w2(t))}function GC(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!XC(e[n],t[n]))return!1;return!0}function KC(e,t){t===void 0&&(t=GC);var n,r=[],o,i=!1;function l(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];return i&&n===this&&t(s,r)||(o=e.apply(this,s),i=!0,n=this,r=s),o}return l}var gs=KC;var om=b(vs());var ne=b(J());it();var ok={en:to,es:no},{string:On,bool:Lt,number:Ss,array:ik,oneOfType:Rf,shape:M2,object:I2,func:Ke}=ne.default,O2=Object.keys(ok),lk={url:On,playing:Lt,loop:Lt,volume:Ss,muted:Lt,playbackRate:Ss,width:Rf([On,Ss]),height:Rf([On,Ss]),progressInterval:Ss,playsinline:Lt,language:ne.default.oneOf(O2),stopOnUnmount:Lt,fallback:ne.node,waiting:Lt,prevented:Lt,wrapper:Rf([On,Ke,M2({render:Ke.isRequired})]),skinMode:ne.default.oneOf(["auto","mobile","desktop"]),config:M2({attributes:I2,tracks:ik,forceHLS:Lt,forceSafariHLS:Lt,forceDisableHls:Lt,forceDASH:Lt,forceFLV:Lt,hlsOptions:I2,hlsVersion:On,dashVersion:On,flvVersion:On}),onReady:Ke,onStart:Ke,onPlay:Ke,onPause:Ke,onBuffer:Ke,onBufferEnd:Ke,onEnded:Ke,onError:Ke,onDuration:Ke,onSeek:Ke,onPlayBackRateChange:Ke,onProgress:Ke,onPrevious:Ke,onNext:Ke,showNavButtons:Lt},sk={sources:ne.default.arrayOf(ne.default.shape({src:ne.default.string.isRequired,resolution:ne.default.number.isRequired}).isRequired),fullHDQualityBreak:ne.default.number,spriteVTTFile:ne.default.string,chapters:ne.default.arrayOf(ne.default.shape({title:ne.default.string.isRequired,startTime:ne.default.number.isRequired})),captions:ne.default.arrayOf(ne.default.shape({src:ne.default.string.isRequired,label:ne.default.string.isRequired,language:ne.default.string.isRequired,kind:ne.default.string})),heatmapData:ne.default.arrayOf(ne.default.shape({startTime:ne.default.number.isRequired,endTime:ne.default.number.isRequired,value:ne.default.number.isRequired})),live:Lt,poster:On,pip:Lt,onPlayBackQualityChange:Ke,onEnablePIP:Ke,onDisablePIP:Ke},ak={title:On,artist:On,poster:On,captions:ne.default.arrayOf(ne.default.shape({src:ne.default.string.isRequired,label:ne.default.string.isRequired,language:ne.default.string.isRequired,kind:ne.default.string}))},_f={viewType:ne.default.oneOf(["video","audio"]),...lk,...sk,...ak},Et=()=>{},Fu={viewType:"video",url:"",sources:[],chapters:[],captions:[],heatmapData:[],playing:!1,loop:!1,live:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,fallback:null,waiting:!1,prevented:!1,wrapper:"div",skinMode:"auto",language:O2[0],poster:"",title:"",artist:"",config:{attributes:{},tracks:[],forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:Et,onStart:Et,onPlay:Et,onPause:Et,onBuffer:Et,onBufferEnd:Et,onEnded:Et,onError:Et,onDuration:Et,onSeek:Et,onPlayBackRateChange:Et,onPlayBackQualityChange:Et,onProgress:Et,onEnablePIP:Et,onDisablePIP:Et};var Ze=b(I()),q3=b(vs());var Df=b(I()),N2=b(vs());var zu=b(J()),{string:Fi,bool:fn,number:ws,array:uk,oneOfType:A2,shape:ck,object:R2,func:Mt}=zu.default,_2={url:Fi,fullHDQualityBreak:zu.default.number,spriteVTTFile:zu.default.string,playing:fn,loop:fn,volume:ws,muted:fn,playbackRate:ws,width:A2([Fi,ws]),height:A2([Fi,ws]),progressInterval:ws,playsinline:fn,pip:fn,stopOnUnmount:fn,config:ck({attributes:R2,tracks:uk,forceVideo:fn,forceHLS:fn,forceSafariHLS:fn,forceDisableHls:fn,forceDASH:fn,forceFLV:fn,hlsOptions:R2,hlsVersion:Fi,dashVersion:Fi,flvVersion:Fi}),onReady:Mt,onStart:Mt,onPlay:Mt,onPause:Mt,onBuffer:Mt,onBufferEnd:Mt,onEnded:Mt,onError:Mt,onDuration:Mt,onSeek:Mt,onPlayBackRateChange:Mt,onPlayBackQualityChange:Mt,onProgress:Mt,onEnablePIP:Mt,onDisablePIP:Mt},It=()=>{},D2={playing:!1,loop:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:It,onStart:It,onPlay:It,onPause:It,onBuffer:It,onBufferEnd:It,onEnded:It,onError:It,onDuration:It,onSeek:It,onPlayBackRateChange:It,onPlayBackQualityChange:It,onProgress:It,onEnablePIP:It,onDisablePIP:It};Yn();var dk=5e3,mn=class extends Df.default.Component{constructor(){super(...arguments);F(this,"progressTimeout",0);F(this,"durationCheckTimeout",0);F(this,"seekOnPlayTimeout",0);F(this,"volumeTimeout",0);F(this,"prevPlayed",0);F(this,"prevLoaded",0);F(this,"player",null);F(this,"loadOnReady",null);F(this,"seekOnPlay",null);F(this,"mounted",!1);F(this,"isReady",!1);F(this,"isPlaying",!1);F(this,"isLoading",!0);F(this,"isSwitchingQuality",!1);F(this,"startOnPlay",!0);F(this,"onDurationCalled",!1);F(this,"handlePlayerMount",n=>{this.player=n,this.player.load(this.props.url),this.progress()});F(this,"getInternalPlayer",n=>this.player?this.player[n]:null);F(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady&&this.mounted){let n=this.getCurrentTime()||0,r=this.getSecondsLoaded(),o=this.getDuration();if(o){let i={playedSeconds:n,played:n/o,loadedSeconds:null};r!==null&&(i.loadedSeconds=r,i.loaded=r/o),(i.playedSeconds!==this.prevPlayed||i.loadedSeconds!==this.prevLoaded)&&this.props.onProgress({loaded:i.loaded,loadedSeconds:i.loadedSeconds,played:i.played,playedSeconds:i.playedSeconds}),this.prevPlayed=i.playedSeconds,i.loadedSeconds!==void 0&&(this.prevLoaded=i.loadedSeconds)}}this.isPlaying&&this.mounted&&(this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval))});F(this,"handleReady",()=>{if(this.mounted===!1)return;this.isReady=!0,this.isLoading=!1;let{onReady:n,playing:r,volume:o,muted:i}=this.props;n&&n(),!i&&o!==null&&this.player.setVolume(o),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):(r||this.isSwitchingQuality)&&this.player.play(),this.handleDurationCheck()});F(this,"handlePlay",n=>{this.isPlaying=!0,this.isLoading=!1,this.isSwitchingQuality=!1;let{onStart:r,onPlay:o,playbackRate:i}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&i!==1&&this.player.setPlaybackRate(i),r&&r(),this.startOnPlay=!1),o&&o(n),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck(),clearTimeout(this.progressTimeout),this.progress()});F(this,"handlePause",n=>{this.isPlaying=!1,!this.isLoading&&!this.isSwitchingQuality&&this.props.onPause&&this.props.onPause(n)});F(this,"handleEnded",()=>{let{activePlayer:n,loop:r,onEnded:o}=this.props;if(r===!0){n.defaultProps!==void 0&&n.defaultProps.config!==void 0&&n.defaultProps.config.loopOnEnded&&this.seekTo(0);return}this.isPlaying=!1,o&&o()});F(this,"handleError",(n,r,o,i)=>{this.isLoading=!1,this.props.onError&&this.props.onError(n,r,o,i)});F(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);let n=this.getDuration();n?!this.onDurationCalled&&this.props.onDuration&&(this.props.onDuration(n),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)});F(this,"handleLoaded",()=>{this.isReady&&!this.startOnPlay&&(this.isLoading=!1)})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),clearTimeout(this.seekOnPlayTimeout),clearTimeout(this.volumeTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(n){if(!this.player)return;let{url:r,playing:o,volume:i,muted:l,playbackRate:s,playbackQuality:a,pip:u,activePlayer:p,disableDeferredLoading:c}=this.props;if((0,N2.default)(n.url,r)===!1){if(clearTimeout(this.progressTimeout),this.isLoading&&!(p!=null&&p.forceLoad)&&!c&&!In(r)){console.warn(`PlayerStack: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,n.playbackQuality!==a&&(this.seekOnPlay=this.prevPlayed,this.isSwitchingQuality=!0),this.player.load(r,this.isReady);return}if(n.playing===!1&&o&&this.isPlaying===!1&&this.player.play(),n.playing&&o===!1&&this.isPlaying&&this.player.pause(),n.pip===!1&&u&&this.player.enablePIP&&this.player.enablePIP(),n.pip&&u===!1&&this.player.disablePIP&&this.player.disablePIP(),n.volume!==i&&i!==null&&this.player.setVolume(i),n.muted!==l&&(l?this.player.mute():(this.player.unmute(),i!==null&&(clearTimeout(this.volumeTimeout),this.volumeTimeout=setTimeout(()=>{this.mounted&&this.player&&this.player.setVolume(i)})))),n.playbackRate!==s&&this.player.setPlaybackRate&&this.player.setPlaybackRate(s),n.activeCaption!==this.props.activeCaption){let m=this.player.getPlayer();if(m&&m.textTracks)for(let y=0;y<m.textTracks.length;y++){let g=m.textTracks[y];this.props.activeCaption===null?g.mode="disabled":g.language===this.props.activeCaption?g.mode="hidden":g.mode="disabled"}}}getDuration(){return this.isReady===!1?null:this.player.getDuration()}getCurrentTime(){return this.isReady===!1?null:this.player.getCurrentTime()}getSecondsLoaded(){return this.isReady===!1?null:this.player.getSecondsLoaded()}getPlayer(){return this.player.getPlayer()}seekTo(n,r,o){if(this.isReady===!1){n!==0&&(this.seekOnPlay=n,this.seekOnPlayTimeout=setTimeout(()=>{this.seekOnPlay=null},dk));return}if(r?r==="fraction":n>0&&n<1){let l=this.player.getDuration();if(!l){console.warn("PlayerStack: could not seek using fraction \u2013\xA0duration not yet available");return}this.player.seekTo(l*n,o);return}this.player.seekTo(n,o)}render(){let n=this.props.activePlayer;return n?Df.default.createElement(n,{loop:this.props.loop,muted:this.props.muted,playsinline:this.props.playsinline,url:this.props.url,width:this.props.width,height:this.props.height,playing:this.props.playing,viewType:this.props.viewType,config:this.props.config,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onEnablePIP:this.props.onEnablePIP,onPlayBackRateChange:this.props.onPlayBackRateChange,onSeek:this.props.onSeek}):null}};F(mn,"displayName","PlayerProxy"),F(mn,"propTypes",_2),F(mn,"defaultProps",D2);var ta=b(I()),te=b(J());var ea=b(I()),V=b(J());var oe=b(I());var $t=b(I()),No=b(J());var vt=function(){return vt=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vt.apply(this,arguments)};function zi(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var _e=b(I()),yg=b(F2());var he="-ms-",Io="-moz-",le="-webkit-",Vu="comm",ro="rule",Vi="decl";var z2="@import";var $u="@keyframes";var V2="@layer";var Nf=Math.abs,xs=String.fromCharCode,Cs=Object.assign;function $2(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function qu(e){return e.trim()}function An(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,n){return e.replace(t,n)}function $i(e,t,n){return e.indexOf(t,n)}function Re(e,t){return e.charCodeAt(t)|0}function Xn(e,t,n){return e.slice(t,n)}function Ot(e){return e.length}function Hu(e){return e.length}function Oo(e,t){return t.push(e),e}function q2(e,t){return e.map(t).join("")}function Bf(e,t){return e.filter(function(n){return!An(n,t)})}var ju=1,qi=1,H2=0,hn=0,$e=0,Hi="";function ks(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ju,column:qi,length:l,return:"",siblings:s}}function gr(e,t){return Cs(ks("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ao(e){for(;e.root;)e=gr(e.root,{children:[e]});Oo(e,e.siblings)}function j2(){return $e}function U2(){return $e=hn>0?Re(Hi,--hn):0,qi--,$e===10&&(qi=1,ju--),$e}function yn(){return $e=hn<H2?Re(Hi,hn++):0,qi++,$e===10&&(qi=1,ju++),$e}function oo(){return Re(Hi,hn)}function bs(){return hn}function Uu(e,t){return Xn(Hi,e,t)}function Ff(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W2(e){return ju=qi=1,H2=Ot(Hi=e),hn=0,[]}function Q2(e){return Hi="",e}function Wu(e){return qu(Uu(hn-1,zf(e===91?e+2:e===40?e+1:e)))}function Y2(e){for(;($e=oo())&&$e<33;)yn();return Ff(e)>2||Ff($e)>3?"":" "}function X2(e,t){for(;--t&&yn()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return Uu(e,bs()+(t<6&&oo()==32&&yn()==32))}function zf(e){for(;yn();)switch($e){case e:return hn;case 34:case 39:e!==34&&e!==39&&zf($e);break;case 40:e===41&&zf(e);break;case 92:yn();break}return hn}function G2(e,t){for(;yn()&&e+$e!==57;)if(e+$e===84&&oo()===47)break;return"/*"+Uu(t,hn-1)+"*"+xs(e===47?e:yn())}function K2(e){for(;!Ff(oo());)yn();return Uu(e,hn)}function eg(e){return Q2(Qu("",null,null,null,[""],e=W2(e),0,[0],e))}function Qu(e,t,n,r,o,i,l,s,a){for(var u=0,p=0,c=l,m=0,y=0,g=0,S=1,k=1,h=1,d=0,f="",w=o,x=i,C=r,T=f;k;)switch(g=d,d=yn()){case 40:if(g!=108&&Re(T,c-1)==58){$i(T+=Q(Wu(d),"&","&\f"),"&\f",Nf(u?s[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:T+=Wu(d);break;case 9:case 10:case 13:case 32:T+=Y2(g);break;case 92:T+=X2(bs()-1,7);continue;case 47:switch(oo()){case 42:case 47:Oo(pk(G2(yn(),bs()),t,n,a),a);break;default:T+="/"}break;case 123*S:s[u++]=Ot(T)*h;case 125*S:case 59:case 0:switch(d){case 0:case 125:k=0;case 59+p:h==-1&&(T=Q(T,/\f/g,"")),y>0&&Ot(T)-c&&Oo(y>32?J2(T+";",r,n,c-1,a):J2(Q(T," ","")+";",r,n,c-2,a),a);break;case 59:T+=";";default:if(Oo(C=Z2(T,t,n,u,p,o,s,f,w=[],x=[],c,i),i),d===123)if(p===0)Qu(T,t,C,C,w,i,c,s,x);else switch(m===99&&Re(T,3)===110?100:m){case 100:case 108:case 109:case 115:Qu(e,C,C,r&&Oo(Z2(e,C,C,0,0,o,s,f,o,w=[],c,x),x),o,x,c,s,r?w:x);break;default:Qu(T,C,C,C,[""],x,0,s,x)}}u=p=y=0,S=h=1,f=T="",c=l;break;case 58:c=1+Ot(T),y=g;default:if(S<1){if(d==123)--S;else if(d==125&&S++==0&&U2()==125)continue}switch(T+=xs(d),d*S){case 38:h=p>0?1:(T+="\f",-1);break;case 44:s[u++]=(Ot(T)-1)*h,h=1;break;case 64:oo()===45&&(T+=Wu(yn())),m=oo(),p=c=Ot(f=T+=K2(bs())),d++;break;case 45:g===45&&Ot(T)==2&&(S=0)}}return i}function Z2(e,t,n,r,o,i,l,s,a,u,p,c){for(var m=o-1,y=o===0?i:[""],g=Hu(y),S=0,k=0,h=0;S<r;++S)for(var d=0,f=Xn(e,m+1,m=Nf(k=l[S])),w=e;d<g;++d)(w=qu(k>0?y[d]+" "+f:Q(f,/&\f/g,y[d])))&&(a[h++]=w);return ks(e,t,n,o===0?ro:s,a,u,p,c)}function pk(e,t,n,r){return ks(e,t,n,Vu,xs(j2()),Xn(e,2,-2),0,r)}function J2(e,t,n,r,o){return ks(e,t,n,Vi,Xn(e,0,r),Xn(e,r+1,-1),r,o)}function Vf(e,t,n){switch($2(e,t)){case 5103:return le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return le+e+e;case 4789:return Io+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return le+e+Io+e+he+e+e;case 5936:switch(Re(e,t+11)){case 114:return le+e+he+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return le+e+he+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return le+e+he+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return le+e+he+e+e;case 6165:return le+e+he+"flex-"+e+e;case 5187:return le+e+Q(e,/(\w+).+(:[^]+)/,le+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return le+e+he+"flex-item-"+Q(e,/flex-|-self/g,"")+(An(e,/flex-|baseline/)?"":he+"grid-row-"+Q(e,/flex-|-self/g,""))+e;case 4675:return le+e+he+"flex-line-pack"+Q(e,/align-content|flex-|-self/g,"")+e;case 5548:return le+e+he+Q(e,"shrink","negative")+e;case 5292:return le+e+he+Q(e,"basis","preferred-size")+e;case 6060:return le+"box-"+Q(e,"-grow","")+le+e+he+Q(e,"grow","positive")+e;case 4554:return le+Q(e,/([^-])(transform)/g,"$1"+le+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+le+e+e;case 4200:if(!An(e,/flex-|baseline/))return he+"grid-column-align"+Xn(e,t)+e;break;case 2592:case 3360:return he+Q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,An(r.props,/grid-\w+-end/)})?~$i(e+(n=n[t].value),"span",0)?e:he+Q(e,"-start","")+e+he+"grid-row-span:"+(~$i(n,"span",0)?An(n,/\d+/):+An(n,/\d+/)-+An(e,/\d+/))+";":he+Q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return An(r.props,/grid-\w+-start/)})?e:he+Q(Q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ot(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+Io+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$i(e,"stretch",0)?Vf(Q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,u){return he+o+":"+i+u+(l?he+o+"-span:"+(s?a:+a-+i)+u:"")+e});case 4949:if(Re(e,t+6)===121)return Q(e,":",":"+le)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return Q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+le+(Re(e,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+he+"$2box$3")+e;case 100:return Q(e,":",":"+he)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(e,"scroll-","scroll-snap-")+e}return e}function ji(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function tg(e,t,n,r){switch(e.type){case V2:if(e.children.length)break;case z2:case Vi:return e.return=e.return||e.value;case Vu:return"";case $u:return e.return=e.value+"{"+ji(e.children,r)+"}";case ro:if(!Ot(e.value=e.props.join(",")))return""}return Ot(n=ji(e.children,r))?e.return=e.value+"{"+n+"}":""}function ng(e){var t=Hu(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function rg(e){return function(t){t.root||(t=t.return)&&e(t)}}function og(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Vi:e.return=Vf(e.value,e.length,n);return;case $u:return ji([gr(e,{value:Q(e.value,"@","@"+le)})],r);case ro:if(e.length)return q2(n=e.props,function(o){switch(An(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ao(gr(e,{props:[Q(o,/:(read-\w+)/,":"+Io+"$1")]})),Ao(gr(e,{props:[o]})),Cs(e,{props:Bf(n,r)});break;case"::placeholder":Ao(gr(e,{props:[Q(o,/:(plac\w+)/,":"+le+"input-$1")]})),Ao(gr(e,{props:[Q(o,/:(plac\w+)/,":"+Io+"$1")]})),Ao(gr(e,{props:[Q(o,/:(plac\w+)/,he+"input-$1")]})),Ao(gr(e,{props:[o]})),Cs(e,{props:Bf(n,r)});break}return""})}}var ig={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var Sr=typeof process!="undefined"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",gg="active",Zu="data-styled-version",Wi="6.1.14",Gf=`/*!sc*/
`,Ju=typeof window!="undefined"&&"HTMLElement"in window,fk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY);var tc=Object.freeze([]),Qi=Object.freeze({});function mk(e,t,n){return n===void 0&&(n=Qi),e.theme!==n.theme&&e.theme||t||n.theme}var vg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yk=/(^-|-$)/g;function lg(e){return e.replace(hk,"-").replace(yk,"")}var gk=/(a)(d)/gi,Yu=52,sg=function(e){return String.fromCharCode(e+(e>25?39:97))};function jf(e){var t,n="";for(t=Math.abs(e);t>Yu;t=t/Yu|0)n=sg(t%Yu)+n;return(sg(t%Yu)+n).replace(gk,"$1-$2")}var $f,Sg=5381,Ui=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},wg=function(e){return Ui(Sg,e)};function xg(e){return jf(wg(e)>>>0)}function vk(e){return e.displayName||e.name||"Component"}function qf(e){return typeof e=="string"&&!0}var Cg=typeof Symbol=="function"&&Symbol.for,kg=Cg?Symbol.for("react.memo"):60115,Sk=Cg?Symbol.for("react.forward_ref"):60112,wk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ck=(($f={})[Sk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$f[kg]=bg,$f);function ag(e){return("type"in(t=e)&&t.type.$$typeof)===kg?bg:"$$typeof"in e?Ck[e.$$typeof]:wk;var t}var kk=Object.defineProperty,bk=Object.getOwnPropertyNames,ug=Object.getOwnPropertySymbols,Pk=Object.getOwnPropertyDescriptor,Tk=Object.getPrototypeOf,cg=Object.prototype;function Pg(e,t,n){if(typeof t!="string"){if(cg){var r=Tk(t);r&&r!==cg&&Pg(e,r,n)}var o=bk(t);ug&&(o=o.concat(ug(t)));for(var i=ag(e),l=ag(t),s=0;s<o.length;++s){var a=o[s];if(!(a in xk||n&&n[a]||l&&a in l||i&&a in i)){var u=Pk(t,a);try{kk(e,a,u)}catch{}}}}return e}function Yi(e){return typeof e=="function"}function Kf(e){return typeof e=="object"&&"styledComponentId"in e}function Ro(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ps(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ts(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Uf(e,t,n){if(n===void 0&&(n=!1),!n&&!Ts(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Uf(e[r],t[r]);else if(Ts(t))for(var r in t)e[r]=Uf(e[r],t[r]);return e}function Zf(e,t){Object.defineProperty(e,"toString",{value:t})}function vr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ek=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw vr(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(Gf);return n},e}(),_8=1<<30,Gu=new Map,ec=new Map,Ku=1,Xu=function(e){if(Gu.has(e))return Gu.get(e);for(;ec.has(Ku);)Ku++;var t=Ku++;return Gu.set(e,t),ec.set(t,e),t},Lk=function(e,t){Ku=t+1,Gu.set(e,t),ec.set(t,e)},Mk="style[".concat(Sr,"][").concat(Zu,'="').concat(Wi,'"]'),Ik=new RegExp("^".concat(Sr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ok=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Ak=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Gf),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(Ik);if(a){var u=0|parseInt(a[1],10),p=a[2];u!==0&&(Lk(p,u),Ok(e,p,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}},dg=function(e){for(var t=document.querySelectorAll(Mk),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Sr)!==gg&&(Ak(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Wf(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Tg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var a=Array.from(s.querySelectorAll("style[".concat(Sr,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Sr,gg),r.setAttribute(Zu,Wi);var l=Wf();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Rk=function(){function e(t){this.element=Tg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw vr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),_k=function(){function e(t){this.element=Tg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Dk=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),pg=Ju,Nk={isServer:!Ju,useCSSOMInjection:!fk},Es=function(){function e(t,n,r){t===void 0&&(t=Qi),n===void 0&&(n={});var o=this;this.options=vt(vt({},Nk),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ju&&pg&&(pg=!1,dg(this)),Zf(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",u=function(c){var m=function(h){return ec.get(h)}(c);if(m===void 0)return"continue";var y=i.names.get(m),g=l.getGroup(c);if(y===void 0||!y.size||g.length===0)return"continue";var S="".concat(Sr,".g").concat(c,'[id="').concat(m,'"]'),k="";y!==void 0&&y.forEach(function(h){h.length>0&&(k+="".concat(h,","))}),a+="".concat(g).concat(S,'{content:"').concat(k,'"}').concat(Gf)},p=0;p<s;p++)u(p);return a}(o)})}return e.registerId=function(t){return Xu(t)},e.prototype.rehydrate=function(){!this.server&&Ju&&dg(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(vt(vt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Dk(o):r?new Rk(o):new _k(o)}(this.options),new Ek(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Xu(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Xu(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Xu(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Bk=/&/g,Fk=/^\s*\/\/.*$/gm;function Eg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Eg(n.children,t)),n})}function Lg(e){var t,n,r,o=e===void 0?Qi:e,i=o.options,l=i===void 0?Qi:i,s=o.plugins,a=s===void 0?tc:s,u=function(m,y,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):m},p=a.slice();p.push(function(m){m.type===ro&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Bk,n).replace(r,u))}),l.prefix&&p.push(og),p.push(tg);var c=function(m,y,g,S){y===void 0&&(y=""),g===void 0&&(g=""),S===void 0&&(S="&"),t=S,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var k=m.replace(Fk,""),h=eg(g||y?"".concat(g," ").concat(y," { ").concat(k," }"):k);l.namespace&&(h=Eg(h,l.namespace));var d=[];return ji(h,ng(p.concat(rg(function(f){return d.push(f)})))),d};return c.hash=a.length?a.reduce(function(m,y){return y.name||vr(15),Ui(m,y.name)},Sg).toString():"",c}var zk=new Es,Qf=Lg(),Jf=_e.default.createContext({shouldForwardProp:void 0,styleSheet:zk,stylis:Qf}),D8=Jf.Consumer,Vk=_e.default.createContext(void 0);function Yf(){return(0,_e.useContext)(Jf)}function $k(e){var t=(0,_e.useState)(e.stylisPlugins),n=t[0],r=t[1],o=Yf().styleSheet,i=(0,_e.useMemo)(function(){var a=o;return e.sheet?a=e.sheet:e.target&&(a=a.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(a=a.reconstructWithOptions({useCSSOMInjection:!1})),a},[e.disableCSSOMInjection,e.sheet,e.target,o]),l=(0,_e.useMemo)(function(){return Lg({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,_e.useEffect)(function(){(0,yg.default)(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,_e.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}},[e.shouldForwardProp,i,l]);return _e.default.createElement(Jf.Provider,{value:s},_e.default.createElement(Vk.Provider,{value:l},e.children))}var Mg=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Qf);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Zf(this,function(){throw vr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qf),this.name+t.hash},e}(),qk=function(e){return e>="A"&&e<="Z"};function fg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;qk(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ig=function(e){return e==null||e===!1||e===""},Og=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Ig(i)&&(Array.isArray(i)&&i.isCss||Yi(i)?r.push("".concat(fg(o),":"),i,";"):Ts(i)?r.push.apply(r,zi(zi(["".concat(o," {")],Og(i),!1),["}"],!1)):r.push("".concat(fg(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ig||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function io(e,t,n,r){if(Ig(e))return[];if(Kf(e))return[".".concat(e.styledComponentId)];if(Yi(e)){if(!Yi(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return io(o,t,n,r)}var i;return e instanceof Mg?n?(e.inject(n,r),[e.getName(r)]):[e]:Ts(e)?Og(e):Array.isArray(e)?Array.prototype.concat.apply(tc,e.map(function(l){return io(l,t,n,r)})):[e.toString()]}function Ag(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Yi(n)&&!Kf(n))return!1}return!0}var Hk=wg(Wi),jk=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ag(t),this.componentId=n,this.baseHash=Ui(Hk,n),this.baseStyle=r,Es.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Ro(o,this.staticRulesId);else{var i=Ps(io(this.rules,t,n,r)),l=jf(Ui(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=Ro(o,l),this.staticRulesId=l}else{for(var a=Ui(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var c=this.rules[p];if(typeof c=="string")u+=c;else if(c){var m=Ps(io(c,t,n,r));a=Ui(a,m+p),u+=m}}if(u){var y=jf(a>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),o=Ro(o,y)}}return o},e}(),Rg=_e.default.createContext(void 0),N8=Rg.Consumer;var Hf={};function Uk(e,t,n){var r=Kf(e),o=e,i=!qf(e),l=t.attrs,s=l===void 0?tc:l,a=t.componentId,u=a===void 0?function(w,x){var C=typeof w!="string"?"sc":lg(w);Hf[C]=(Hf[C]||0)+1;var T="".concat(C,"-").concat(xg(Wi+C+Hf[C]));return x?"".concat(x,"-").concat(T):T}(t.displayName,t.parentComponentId):a,p=t.displayName,c=p===void 0?function(w){return qf(w)?"styled.".concat(w):"Styled(".concat(vk(w),")")}(e):p,m=t.displayName&&t.componentId?"".concat(lg(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var S=o.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;g=function(w,x){return S(w,x)&&k(w,x)}}else g=S}var h=new jk(n,m,r?o.componentStyle:void 0);function d(w,x){return function(C,T,M){var L=C.attrs,E=C.componentStyle,_=C.defaultProps,P=C.foldedComponentIds,O=C.styledComponentId,B=C.target,W=_e.default.useContext(Rg),U=Yf(),X=C.shouldForwardProp||U.shouldForwardProp,me=mk(T,W,_)||Qi,R=function(De,Oe,st){for(var at,ut=vt(vt({},Oe),{className:void 0,theme:st}),tn=0;tn<De.length;tn+=1){var Ht=Yi(at=De[tn])?at(ut):at;for(var We in Ht)ut[We]=We==="className"?Ro(ut[We],Ht[We]):We==="style"?vt(vt({},ut[We]),Ht[We]):Ht[We]}return Oe.className&&(ut.className=Ro(ut.className,Oe.className)),ut}(L,T,me),N=R.as||B,ae={};for(var j in R)R[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&R.theme===me||(j==="forwardedAs"?ae.as=R.forwardedAs:X&&!X(j,N)||(ae[j]=R[j]));var ye=function(De,Oe){var st=Yf(),at=De.generateAndInjectStyles(Oe,st.styleSheet,st.stylis);return at}(E,R),ge=Ro(P,O);return ye&&(ge+=" "+ye),R.className&&(ge+=" "+R.className),ae[qf(N)&&!vg.has(N)?"class":"className"]=ge,M&&(ae.ref=M),(0,_e.createElement)(N,ae)}(f,w,x)}d.displayName=c;var f=_e.default.forwardRef(d);return f.attrs=y,f.componentStyle=h,f.displayName=c,f.shouldForwardProp=g,f.foldedComponentIds=r?Ro(o.foldedComponentIds,o.styledComponentId):"",f.styledComponentId=m,f.target=r?o.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(x){for(var C=[],T=1;T<arguments.length;T++)C[T-1]=arguments[T];for(var M=0,L=C;M<L.length;M++)Uf(x,L[M],!0);return x}({},o.defaultProps,w):w}}),Zf(f,function(){return".".concat(f.styledComponentId)}),i&&Pg(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function mg(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var hg=function(e){return Object.assign(e,{isCss:!0})};function Y(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Yi(e)||Ts(e))return hg(io(mg(tc,zi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?io(r):hg(io(mg(r,t)))}function Xf(e,t,n){if(n===void 0&&(n=Qi),!t)throw vr(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Y.apply(void 0,zi([o],i,!1)))};return r.attrs=function(o){return Xf(e,t,vt(vt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Xf(e,t,vt(vt({},n),o))},r}var _g=function(e){return Xf(Uk,e)},v=_g;vg.forEach(function(e){v[e]=_g(e)});var B8=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ag(t),Es.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Ps(io(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Es.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function nc(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ps(Y.apply(void 0,zi([e],t,!1))),o=xg(r);return new Mg(o,r)}var F8=function(){function e(){var t=this;this._emitSheetCSS=function(){var n=t.instance.toString();if(!n)return"";var r=Wf(),o=Ps([r&&'nonce="'.concat(r,'"'),"".concat(Sr,'="true"'),"".concat(Zu,'="').concat(Wi,'"')].filter(Boolean)," ");return"<style ".concat(o,">").concat(n,"</style>")},this.getStyleTags=function(){if(t.sealed)throw vr(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw vr(2);var r=t.instance.toString();if(!r)return[];var o=((n={})[Sr]="",n[Zu]=Wi,n.dangerouslySetInnerHTML={__html:r},n),i=Wf();return i&&(o.nonce=i),[_e.default.createElement("style",vt({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Es({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw vr(2);return _e.default.createElement($k,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw vr(3)},e}();var z8="__sc-".concat(Sr,"__");var Do=b(I());var _o=b(J()),ee={width:_o.default.oneOfType([_o.default.number,_o.default.string]),height:_o.default.oneOfType([_o.default.number,_o.default.string])},re=(e,t)=>e.width===t.width&&e.height===t.height;var e1=({width:e=36,height:t=36})=>Do.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Do.default.createElement("path",{d:"M 22.5 18 C 22.5 16.235 21.48 14.71 20 13.975 L 20 16.185 L 22.455 18.64 C 22.485 18.43 22.5 18.215 22.5 18 Z"}),Do.default.createElement("path",{d:"M 25 18 C 25 18.94 24.795 19.825 24.46 20.64 L 25.975 22.155 C 26.625 20.91 27 19.5 27 18 C 27 13.72 24.005 10.14 20 9.23 L 20 11.295 C 22.89 12.155 25 14.83 25 18 Z"}),Do.default.createElement("polygon",{points:"18 10 15.91 12.09 18 14.18"}),Do.default.createElement("path",{d:"M 10.275 9 L 9 10.275 L 13.725 15 L 9 15 L 9 21 L 13 21 L 18 26 L 18 19.275 L 22.255 23.53 C 21.585 24.045 20.83 24.46 20 24.71 L 20 26.775 C 21.375 26.46 22.63 25.83 23.685 24.965 L 25.725 27 L 27 25.725 L 18 16.725 L 10.275 9 Z"}));e1.displayName="MutedIcon";e1.propTypes=ee;var Xi=Do.default.memo(e1,re);var rc=b(I());var t1=({width:e=36,height:t=36})=>rc.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},rc.default.createElement("path",{d:"M 23.804 18.319 L 12.478 25.924 C 12.347 26.014 12.235 26.024 12.141 25.955 C 12.047 25.886 12 25.763 12 25.584 L 12 10.416 C 12 10.237 12.047 10.113 12.141 10.045 C 12.235 9.976 12.347 9.986 12.478 10.076 L 23.804 17.68 C 23.935 17.77 24 17.876 24 18 C 24 18.124 23.935 18.23 23.804 18.319 Z"}));t1.displayName="PlayIcon";t1.propTypes=ee;var Gi=rc.default.memo(t1,re);var n1=v.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 15px;
  left: 15px;
  padding: 8px;
  width: auto;
  height: auto;
  font-size: 14px;
  line-height: 1.5em;
  border-radius: 2px;
  color: #fff;
  background: rgba(15, 15, 15, 0.8);
  cursor: pointer;
  z-index: 6;
`,Dg=Y`
  font-size: 20px;
  margin-right: 8px;
`,Ng=v(Gi)`
  ${Dg}
`,Bg=v(Xi)`
  ${Dg}
`,Fg=v.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 5;
`;var Vg=b(I());var zg=b(I()),r1={captionDragging:!1,contextMenuVisible:!1,controlsHovering:!1,timeSliding:!1,volumeSliding:!1,hiding:!1,menuVisible:!1,subMenuVisible:!1,fullscreen:!1,playerRef:null,videoRef:null},Ki=(0,zg.createContext)({state:r1,dispatch:()=>null});var Wk=()=>{let{state:e}=(0,Vg.useContext)(Ki);return e},q=Wk;var $g=({hasResource:e=!1,prevented:t,paused:n,muted:r,currentTime:o,onClick:i})=>{let{i18n:l}=q(),[s,a]=$t.default.useState(!1),u=$t.default.useCallback(()=>{if(e===!1||t===!1||n)return null;if(r===!0&&!s){let c=m=>{a(!0),i(m)};return $t.default.createElement($t.default.Fragment,{key:"preventedClickedTip"},$t.default.createElement(Fg,{onClick:c}),$t.default.createElement(n1,null,$t.default.createElement(Bg,null),l.clickToUnmute))}return null},[e,t,s,i,l.clickToUnmute,r,n]);return[$t.default.useCallback(()=>e===!1||t===!1?null:o===0&&n?$t.default.createElement($t.default.Fragment,{key:"preventedTip"},$t.default.createElement(n1,null,$t.default.createElement(Ng,null),l.playbackStuckClickResumePlayback)):null,[o,n,e,l.playbackStuckClickResumePlayback,t])(),u()]};$g.propTypes={hasResource:No.default.bool.isRequired,prevented:No.default.bool.isRequired,paused:No.default.bool.isRequired,muted:No.default.bool.isRequired,currentTime:No.default.number.isRequired,onClick:No.default.func.isRequired};var Ls=$t.default.memo($g,(e,t)=>e.hasResource===t.hasResource&&e.prevented===t.prevented&&e.paused===t.paused&&e.muted===t.muted&&e.currentTime===t.currentTime&&e.onClick===t.onClick);var Ji=b(I()),wr=b(J());var o1=b(I());var qg=o1.default.forwardRef(({showing:e,...t},n)=>o1.default.createElement("button",{ref:n,...t}));qg.displayName="PlayButton";var Hg=v(qg)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  color: #fff;
  border: 0;
  background: rgba(0, 0, 0, 0.5) !important;
  font-size: 64px;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.3s;
  ${({showing:e})=>e?`
    opacity: 1;
    cursor: pointer;
  `:`
    opacity: 0;
    cursor: default;
  `}
`;var oc=b(I());var i1=({width:e=36,height:t=36})=>oc.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},oc.default.createElement("path",{d:"M 18 12.3 L 18 8.5 L 13 13.25 L 18 18 L 18 14.2 C 21.3 14.2 24 16.765 24 19.9 C 24 23.035 21.3 25.6 18 25.6 C 14.7 25.6 12 23.035 12 19.9 L 10 19.9 C 10 24.08 13.6 27.5 18 27.5 C 22.4 27.5 26 24.08 26 19.9 C 26 15.72 22.4 12.3 18 12.3 Z"}));i1.displayName="ReplayIcon";i1.propTypes=ee;var Zi=oc.default.memo(i1,re);var ic=b(I());var Qk=v.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
`,Yk=v.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
`,Xk=v.div`
  @keyframes loading-spinner {
    0% {
      transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  width: 48px;
  height: 48px;
  border-width: 3px;
  border-top-color: rgba(255, 255, 255, 0.15);
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-right-color: rgba(255, 255, 255, 0.15);
  border-left-color: #fff;
  border-style: solid;
  border-radius: 50%;
  animation: loading-spinner 0.5s linear infinite;
`,Gk=()=>ic.default.createElement(Qk,null,ic.default.createElement(Yk,null,ic.default.createElement(Xk,null))),lc=Gk;var jg=({hasResource:e,loading:t,paused:n,ended:r,seeking:o,waiting:i,kernelMsg:l,onClick:s})=>e===!1||t||l?null:i?Ji.default.createElement(lc,null):Ji.default.createElement(Hg,{showing:n||r,onClick:s},r?Ji.default.createElement(Zi,{width:"14%",height:"100%"}):Ji.default.createElement(Gi,{width:"20%",height:"100%"}));jg.propTypes={hasResource:wr.default.bool.isRequired,loading:wr.default.bool.isRequired,paused:wr.default.bool.isRequired,ended:wr.default.bool.isRequired,seeking:wr.default.bool.isRequired,waiting:wr.default.bool.isRequired,kernelMsg:wr.default.object,onClick:wr.default.func.isRequired};var Ug=Ji.default.memo(jg,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.kernelMsg===t.kernelMsg&&e.onClick===t.onClick);var ac=b(I()),sc=b(J());var Wg=v.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 2em;
  background: rgba(0, 0, 0, 0.65);
`;var Qg=({hasResource:e,loading:t=!1,kernelMsg:n=null})=>e===!1?null:n?ac.default.createElement(Wg,null,n.type,": ",n.detail):t?ac.default.createElement(lc,null):null;Qg.propTypes={hasResource:sc.default.bool.isRequired,loading:sc.default.bool,kernelMsg:sc.default.object};var Ms=ac.default.memo(Qg,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.kernelMsg===t.kernelMsg);var el=Y`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;var Is=v.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
`,Os=v.div`
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
`;var Gn=v.div`
  ${el}
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`,Yg=v.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  height: 55px !important;
  z-index: 2;
`,Xg=v.div`
  padding: 10px 20px;
  font-size: 140%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  border-radius: 3px;
  color: #eee;
`;var qe=(e=!1)=>e?{width:54,height:54}:{width:36,height:36};var uc={32:"SPACE_KEY",27:"ESCAPE_KEY",37:"ARROW_LEFT_KEY",39:"ARROW_RIGHT_KEY",38:"ARROW_UP_KEY",40:"ARROW_DOWN_KEY",77:"MUTE_KEY",16:"SHIFT_KEY",67:"SUBTITLES_KEY",70:"F_KEY",84:"T_KEY",78:"N_KEY"},cc={" ":"SPACE_KEY",Escape:"ESCAPE_KEY",ArrowLeft:"ARROW_LEFT_KEY",ArrowRight:"ARROW_RIGHT_KEY",ArrowUp:"ARROW_UP_KEY",ArrowDown:"ARROW_DOWN_KEY",m:"MUTE_KEY",Shift:"SHIFT_KEY",c:"SUBTITLES_KEY",f:"F_KEY",t:"T_KEY",n:"N_KEY"},Rn=e=>e?83:55;var Rs=b(I()),As=b(J());var l1=b(I());var Gg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuQAAADyCAQAAACvvRhBAAADYklEQVR42u3cwY3DQAwEQdlQ/jE7BvEhor1VIdyjMeCtdV+fC4Cw258AQMgBWA250wqARQ6ARQ6ARQ5gkQNgkQMg5AA8DLnTCoBFDoBFDoBFDmCRA2CRA2CRA2CRA1jkAFjkAFjkAFjkABY5ABY5ABY5ABY5gEUOgEUOgEUOgJAD/FvIAbDIAbDIAbDIAYQcgGTIAbDIAbDIAbDIAYQcgGTIAbDIARByAMYhB8AiB0DIARiHHAAhB2Az5E4rAEIOwGbIAbDIARByAIQcQMgBSIYcAIscACEHYBxyACxyAIQcgHHIAbDIARByAMYhByAe8q8/AoBFDsBiyN3IAYQcgM2QA2CRAyDkAAg5wKkhB8AiB0DIARiHHIB4yH1rBcAiB2Az5G7kAEIOgJADMA45ABY5AEIOgJADCDkAyZADEA+5n+gDWOQAbIbcjRxAyAEQcgDGIQcgHnKvVgAscgA2Q+5GDiDkAAg5AOOQAxAPuVcrABY5AJshdyMHEHIAhBwAIQcQcgCSIQcgHnLvyAEscgA2Q+5GDiDkAAg5AEIOcGrIAYiH3PNDAIscAIscAIsc4NSQe7UCIOQACDkAQg4g5AAIOQBCDoCQAwg5AKGQAxAPuW+tAFjkAGyG3I0cQMgBEHIAhBxAyAEQcgCEHAAhBxByAEIhByAect9aAbDIAbDIAbDIAU4NuVcrAEIOgJADIOQAQg6AkAMg5AAIOYCQAyDkAAg5AEIOcELIAYiH3GdsASxyADZD7kYOEA+50wpAPOQAWOQAWOQAjEPun50A8ZA7rQDEQw5APOROKwBCDoCQAyDkAKeGHIB4yD0/BIiH3GkFQMgBEHIAxiEHIB5y/+wEsMgB2Ay5GzlAPOROKwDxkAMQD7nTCoCQAyDkAAg5gJADIOQACDkAQg4g5ACEQg5APOS+tQJgkQNgkQNgkQOcGnKvVgDiIXdaAYiHHIB4yJ1WAIQcACEHQMgBhBwAIQfg/ZADEA+5HwQBWOQAbIbcjRwgHnKnFYB4yAGIh9xpBUDIARByAIQcQMgBEHIA3g85APGQ+0EQgEUOgEUOgEUOcGrIvVoBEHIAhBwAIQcQcgCSIQfAIgdAyAEQcgAhB0DIARByAB6GHIB4yH3GFsAiB2Az5G7kAEIOgJADMA45AGk/i98EjA2eeD8AAAAASUVORK5CYII=";var Kg=l1.default.forwardRef(({hiding:e,...t},n)=>l1.default.createElement("div",{ref:n,...t}));Kg.displayName="Controls";var Zg=v(Kg)`
  display: flex;
  bottom: 0;
  position: absolute;
  width: 100%;
  transition: opacity 0.3s;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 2000%;
    pointer-events: none;
    background-repeat: repeat-x;
    background-position: bottom;
    background-image: url(${Gg});
    transition: opacity 0.3s;
  }
  ${({hiding:e})=>e?`
      opacity: 0;
    `:`
      opacity: 1;
    `}
`;var dc=b(I());var Kk=()=>{let{state:e,dispatch:t}=dc.default.useContext(Ki),n=dc.default.useRef(e);return n.current=e,dc.default.useCallback(o=>{if(typeof o=="function"){let i=o(n.current);t(i)}else t(o)},[t])},Pe=Kk;var Jg=({children:e})=>{let t=q(),n=Pe(),r=Rs.default.useCallback(()=>{if(typeof window!="undefined"&&window.matchMedia){let i=window.matchMedia("(hover: none), (pointer: coarse)");if(i&&i.matches)return}n({type:"controlsHovering",payload:!0})},[n]),o=Rs.default.useCallback(()=>{n({type:"controlsHovering",payload:!1})},[n]);return Rs.default.createElement(Zg,{hiding:t.hiding,onMouseEnter:r,onMouseLeave:o},e)};Jg.propTypes={children:As.default.oneOfType([As.default.arrayOf(As.default.node),As.default.node]).isRequired};var ev=Rs.default.memo(Jg,(e,t)=>e.children===t.children);var _s=b(I()),Bo=b(J());var pc=b(I());var tv=(0,pc.forwardRef)(({isFullscreen:e,...t},n)=>pc.default.createElement("div",{ref:n,...t}));tv.displayName="ControlBar";var nv=v(tv)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  z-index: 6;
  ${({isFullscreen:e})=>e?`
    height: 54px;
  `:`
    height: 36px;
  `}
`,rv=Y`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  flex: 1;
`,ov=v.div`
  ${rv}
  justify-content: flex-start;
  margin-left: 15px;
`,iv=v.div`
  ${rv}
  justify-content: flex-end;
  margin-right: 15px;
`;var lv=({children:e,extra:t,fullscreen:n})=>_s.default.createElement(nv,{isFullscreen:n},_s.default.createElement(ov,null,e),_s.default.createElement(iv,null,t));lv.propTypes={children:Bo.default.oneOfType([Bo.default.arrayOf(Bo.default.node),Bo.default.node]).isRequired,extra:Bo.default.node.isRequired,fullscreen:Bo.default.bool.isRequired};var sv=_s.default.memo(lv,(e,t)=>e.fullscreen===t.fullscreen&&e.children===t.children&&e.extra===t.extra);var Fe=b(I()),St=b(J());var $o=b(I());var Fo=b(I());var av=Fo.default.forwardRef(({isFullscreen:e,hasChapters:t,...n},r)=>Fo.default.createElement("div",{ref:r,...n}));av.displayName="Tooltip";var fc=v(av)`
  display: none;
  position: absolute;
  left: 0;
  width: 100%;
  pointer-events: none;
  ${({isFullscreen:e})=>e?`
    bottom: 13px;
  `:`
    bottom: 10px;
  `}
`,uv=Fo.default.forwardRef(({isFullscreen:e,...t},n)=>Fo.default.createElement("div",{ref:n,...t}));uv.displayName="Tip";var cv=v(uv)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4em 0.8em;
  transform: translateX(-50%);
  font-weight: 500;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  ${({isFullscreen:e})=>e?`
    font-size: 18px;
  `:`
    font-size: 12px;
  `}
`,dv=Fo.default.forwardRef(({isFullscreen:e,...t},n)=>Fo.default.createElement("span",{ref:n,...t}));dv.displayName="ChapterLabel";var pv=v(dv)`
  display: block;
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
  margin-top: 4px;
  ${({isFullscreen:e})=>e?`
    font-size: 14px;
  `:`
    font-size: 11px;
  `}
`;var mc=Y`
  &,
  :where(&) *,
  :where(&) *::before,
  :where(&) *::after {
    box-sizing: border-box;
  }

  :where(&) button {
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    padding: 0;
    margin: 0;
    cursor: pointer;
    outline: none;
  }

  :where(&) ul,
  :where(&) ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  :where(&) li {
    margin: 0;
    padding: 0;
  }

  :where(&) a {
    color: inherit;
    text-decoration: none;
  }
`;var Kn=v.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    PingFang SC,
    Hiragino Sans GB,
    Microsoft YaHei,
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;

  ${mc}

  & video::cue {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 1.1em;
    line-height: 1.4;
  }
`;var zo=v.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
`,mv=$o.default.forwardRef(({isFullscreen:e,...t},n)=>$o.default.createElement("button",{ref:n,...t}));mv.displayName="SliderHandle";var Vo=v(mv)`
  ${Kn} ${Gn} & {
    position: absolute;
    cursor: pointer;
    padding: 0;
    margin: 0;
    pointer-events: none;
    outline: 0 transparent none;
    border: transparent 0 none;
    box-shadow: none;
    border-radius: 50%;
    background-color: #cb0e0b !important;
    -moz-transition: -moz-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -ms-transition: -ms-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -webkit-transform: scale(0);
    ${({isFullscreen:e})=>e?`
      width: 20px;
      height: 20px;
      top: -3px;
      right: -9px;
    `:`
      width: 12px;
      height: 12px;
      top: 0px;
      right: -6px;
    `}
  }
`,fv=`
  -moz-transform: none !important;
  -ms-transform: none !important;
  -webkit-transform: none !important;
  transform: none !important;
  -moz-transition: -moz-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  -webkit-transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  -ms-transition: -ms-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  box-shadow: 0 0 0 5px rgba(255, 0, 0, 0.2);
  outline: 0 transparent none;
  pointer-events: auto;
  opacity: 1;
`,hv=$o.default.forwardRef(({isSliding:e,isFullscreen:t,...n},r)=>$o.default.createElement("div",{ref:r,...n}));hv.displayName="Slider";var yv=v(hv)`
  width: 100%;
  flex-grow: 1;
  position: absolute;
  top: -5px;
  z-index: 6;
  cursor: pointer;
  user-select: none;
  &:focus {
    outline: 0 transparent none;
  }
  ${({isFullscreen:e})=>e?`
    height: 6px;
  `:`
    height: 4px;
  `}
  & ${zo} {
    -moz-transform: scaleY(0.6);
    -ms-transform: scaleY(0.6);
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
    -moz-transition: -moz-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -ms-transition: -ms-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
  }
  & ${Vo} {
    @media (hover: none), (pointer: coarse) {
      pointer-events: auto;
      opacity: 1;
      box-shadow: none;
    }
  }
  ${({isSliding:e})=>e?`
          & ${zo} {
            -moz-transform: none;
            -ms-transform: none;
            -webkit-transform: none;
            transform: none;
          }
          & ${Vo} {
            ${fv}
          }
          & ${fc} {
            display: block;
          }
        `:`
        &:focus ${zo},
        &:hover ${zo} {
          -moz-transform: none;
          -ms-transform: none;
          -webkit-transform: none;
          transform: none;
        }
        &:focus ${Vo},
        &:hover ${Vo} {
          ${fv}
        }
      `}
`,gv=$o.default.forwardRef(({isFullscreen:e,...t},n)=>$o.default.createElement("div",{ref:n,...t}));gv.displayName="SlideRail";var vv=v(gv)`
  position: absolute;
  top: 0px;
  left: 0;
  overflow: hidden;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  ${({isFullscreen:e})=>e?`
    height: 6px;
  `:`
    height: 4px;
  `}
`,Sv=v.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: center left;
  background-color: rgba(255, 255, 255, 0.5);
`,wv=v.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(-100%, 0);
  background: #f00;
`,s1=v.div`
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 12px;
  transform: translate(-100%, 0);
  z-index: 4;
`;var At=b(I()),xr=b(J());var a1=b(I());var xv=a1.default.forwardRef(({isFullscreen:e,showing:t,hasChapters:n,...r},o)=>a1.default.createElement("div",{ref:o,...r}));xv.displayName="TimelensThumbnail";var Cv=v(xv)`
  background: #fff;
  border: solid #fff 2px !important;
  border-radius: 2px;
  background-clip: content-box;
  width: 0;
  height: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  transition:
    opacity 0.2s,
    z-index 0.2s;
  transform: translateY(-100%) translateY(${({hasChapters:e})=>e?"-14px":"-7px"});
  ${({isFullscreen:e})=>e?`
      top: -45px;
    `:`
      top: -35px;
    `}
  ${({showing:e})=>e?`
        opacity: 1;
    `:`
        opacity: 0;
    `}
`,kv=v.div`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  z-index: 4;
`;var Zk=e=>"changedTouches"in e&&e.changedTouches&&1<=e.changedTouches.length?e.changedTouches[0].pageX:"clientX"in e?e.clientX:0,Ds=(e,t,n)=>{let r=Zk(e)-t.left;return 0>=r?0:r>=t.width?n:Math.round(n*r/t.width)},Pv=({duration:e,currentTime:t,sliderWidth:n,elementWidth:r,offset:o=0})=>{if(e<=0||n<=0||r<=0)return 0;let i=t/e*n,l=r/2,s=l+o,a=n-l-o;return Math.min(a,Math.max(s,i))},Tv=({duration:e,currentTime:t,sliderWidth:n,handleWidth:r})=>{if(e===0)return{trackTranslateX:"-100",handleTranslateX:"-100"};let o=Pv({duration:e,currentTime:t,sliderWidth:n,elementWidth:r,offset:0}),i=(100*t/e-100).toFixed(1),l=(o/n*100-100).toFixed(1);return{trackTranslateX:i,handleTranslateX:l}},Ev=({duration:e,currentTime:t,sliderWidth:n,tooltipWidth:r})=>(Pv({duration:e,currentTime:t,sliderWidth:n,elementWidth:r,offset:5})/n*100).toFixed(1),bv=e=>{if(typeof e!="string")throw new TypeError("Time must be a string");if(e.indexOf(";")>0&&(e=e.replace(";",":"),!/\d{2}(:\d{2}){0,3}/i.test(e)))throw new TypeError("Time code must have the format `00:00:00`");let t=e.split(":"),n=0,r=0,o=0,i=0,l=25,s=Math.round(l),a=3600*s,u=60*s;switch(t.length){default:case 1:o=parseInt(t[0],10);break;case 2:r=parseInt(t[0],10),o=parseInt(t[1],10);break;case 3:n=parseInt(t[0],10),r=parseInt(t[1],10),o=parseInt(t[2],10);break;case 4:n=parseInt(t[0],10),r=parseInt(t[1],10),o=parseInt(t[2],10),i=parseInt(t[3],10)}let p=(a*n+u*r+l*o+i)/l;return parseFloat(p.toFixed(3))},Lv=e=>{var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+r,left:t.left+n}},hc=e=>{let t=0,n=0,r=[];for(var o of e.split(`
`))if(/-->/.test(o)){let[i,l]=(o.match(/(.*) --> (.*)/)||[]).slice(1);t=bv(i),n=bv(l)}else if(/\.(png|jpg|jpeg|webp)/i.test(o)){let i=o.match(/(.*)[#?]xywh=(.*),(.*),(.*),(.*)/);if(i){let[,l,s,a,u,p]=i;r.push({from:t,to:n,file:l,x:s,y:a,w:u,h:p})}}return r};var u1=At.default.forwardRef(({spriteVTTFile:e,sliderRef:t,duration:n=0,fullscreen:r,hasChapters:o=!1},i)=>{let l=q(),[s,a]=At.default.useState([]),u=At.default.useRef(null),[p,c]=At.default.useState(!1),[m,y]=At.default.useState({backgroundImage:"",backgroundPosition:"-480px -360px",width:"160px",height:"90px",marginLeft:"0px"});At.default.useEffect(()=>{(async()=>{try{let k=await fetch(e).then(w=>w.text()),h=e.substring(0,e.lastIndexOf("/")+1),d=k.replace(/^([^#?\n]+\.(png|jpg|jpeg|webp))/gim,w=>w.startsWith("http")?w:`${h}${w}`),f=hc(d);a(f)}catch(k){console.error("Error parsing VTT file: ",k)}})()},[e]);let g=At.default.useCallback(async k=>{var w;let h=u==null?void 0:u.current,d=t==null?void 0:t.current;if(h&&d&&s.length>0&&l.menuVisible===!1&&l.subMenuVisible===!1){let x=Lv(d),C=k==null?void 0:k.pageX;k!=null&&k.originalEvent&&((w=k==null?void 0:k.originalEvent)!=null&&w.changedTouches)?C=k.originalEvent.changedTouches[0].pageX:k!=null&&k.changedTouches&&(C=k.changedTouches[0].pageX);let M=(C-x.left-d.offsetLeft)/d.offsetWidth,L=M*n,E=M*d.offsetWidth;for(var f of s)if(L>=f.from&&L<=f.to){let _=Math.min(Math.max(0,E-h.offsetWidth/2),d.offsetWidth-h.offsetWidth);y({backgroundImage:`url(${f.file})`,backgroundPosition:-f.x+"px "+-f.y+"px",width:f.w+"px",height:f.h+"px",marginLeft:_+"px"});break}c(!0)}},[u,t,n,s,l.menuVisible,l.subMenuVisible]),S=At.default.useCallback(()=>{c(!1)},[]);return At.default.useImperativeHandle(i,()=>({handleTimelens:g,setShowTimelens:c})),At.default.createElement(At.default.Fragment,null,At.default.createElement(kv,{onMouseMove:g,onMouseEnter:g,onMouseLeave:S}),At.default.createElement(Cv,{ref:u,showing:p||l.timeSliding,isFullscreen:r,hasChapters:o,style:m}))});u1.displayName="Timelens";u1.propTypes={sliderRef:xr.default.oneOfType([xr.default.func,xr.default.shape({current:xr.default.instanceOf(HTMLDivElement)})]),spriteVTTFile:xr.default.string.isRequired,duration:xr.default.number.isRequired,fullscreen:xr.default.bool.isRequired,hasChapters:xr.default.bool};var Mv=At.default.memo(u1,(e,t)=>e.fullscreen===t.fullscreen&&e.sliderRef===t.sliderRef&&e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration&&e.hasChapters===t.hasChapters);var lo=b(I()),Zn=b(J());it();var Iv=({sliderRef:e,duration:t,tooltip:n,showTooltip:r,chapterTitle:o,fullscreen:i})=>{let l=lo.default.useRef(null),[s,a]=lo.default.useState("0");return lo.default.useLayoutEffect(()=>{var p,c;let u=Ev({duration:t,currentTime:n,sliderWidth:((p=e.current)==null?void 0:p.offsetWidth)||0,tooltipWidth:((c=l.current)==null?void 0:c.offsetWidth)||0});a(u)},[t,n,o,e]),lo.default.createElement(fc,{style:{display:r?"block":"",transform:`translateX(${s}%)`},isFullscreen:i},lo.default.createElement(cv,{ref:l,isFullscreen:i},o&&lo.default.createElement(pv,{isFullscreen:i},o),Ge(n)))};Iv.propTypes={sliderRef:Zn.default.oneOfType([Zn.default.func,Zn.default.shape({current:Zn.default.instanceOf(HTMLDivElement)})]),duration:Zn.default.number.isRequired,tooltip:Zn.default.number.isRequired,showTooltip:Zn.default.bool.isRequired,chapterTitle:Zn.default.string,fullscreen:Zn.default.bool.isRequired};var Ov=lo.default.memo(Iv,(e,t)=>e.sliderRef===t.sliderRef&&e.duration===t.duration&&e.tooltip===t.tooltip&&e.showTooltip===t.showTooltip&&e.chapterTitle===t.chapterTitle&&e.fullscreen===t.fullscreen);var tl=b(I()),Kt=b(J());var Ns=b(I());var Av=Ns.default.forwardRef(({isFullscreen:e,...t},n)=>Ns.default.createElement("div",{ref:n,...t}));Av.displayName="ChapterSegmentsContainer";var Rv=v(Av)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2px;
  z-index: 3;
  overflow: visible;
  pointer-events: none;
  ${({isFullscreen:e})=>e?`
    height: 6px;
  `:`
    height: 4px;
  `}
`,_v=Ns.default.forwardRef(({isFullscreen:e,isHovered:t,...n},r)=>Ns.default.createElement("div",{ref:r,...n}));_v.displayName="ChapterSegment";var Dv=v(_v)`
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1px;
  transition: transform 0.1s ease;
  transform-origin: center center;
  ${({isFullscreen:e})=>e?`
    height: 6px;
  `:`
    height: 4px;
  `}
  ${({isHovered:e,isFullscreen:t})=>e&&(t?`
    transform: scaleY(1.8);
  `:`
    transform: scaleY(2);
  `)}
`,Nv=v.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`,Bv=v.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #f00;
`;var Fv=({segments:e,currentTime:t,duration:n,bufferedScaleX:r,hoveredIndex:o,fullscreen:i})=>e.length===0||n<=0?null:tl.default.createElement(Rv,{isFullscreen:i},e.map((l,s)=>{let a=l.endTime-l.startTime,u=a/n*100,p=0;t>=l.endTime?p=100:t>l.startTime&&(p=(t-l.startTime)/a*100);let c=r*n,m=0;return c>=l.endTime?m=100:c>l.startTime&&(m=(c-l.startTime)/a*100),tl.default.createElement(Dv,{key:s,style:{width:`${u}%`},title:l.title,isFullscreen:i,isHovered:o===s},tl.default.createElement(Nv,{style:{width:`${m}%`}}),tl.default.createElement(Bv,{style:{width:`${p}%`}}))}));Fv.propTypes={segments:Kt.default.arrayOf(Kt.default.shape({title:Kt.default.string.isRequired,startTime:Kt.default.number.isRequired,endTime:Kt.default.number.isRequired,startPercent:Kt.default.number.isRequired,endPercent:Kt.default.number.isRequired})).isRequired,currentTime:Kt.default.number.isRequired,duration:Kt.default.number.isRequired,bufferedScaleX:Kt.default.number.isRequired,hoveredIndex:Kt.default.number,fullscreen:Kt.default.bool.isRequired};var zv=tl.default.memo(Fv);var Jn=b(I()),qo=b(J());var c1=b(I());var Vv=c1.default.forwardRef(({isFullscreen:e,bottomOffset:t,visible:n,...r},o)=>c1.default.createElement("div",{ref:o,...r}));Vv.displayName="HeatmapContainer";var $v=v(Vv)`
  position: absolute;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: 2;
  bottom: ${({bottomOffset:e})=>e!=null?`${e}px`:"6px"};
  transform-origin: bottom center;
  transition:
    opacity 0.25s ease-out,
    transform 0.25s ease-out;
  ${({visible:e})=>e?`
    opacity: 1;
    transform: scaleY(1);
  `:`
    opacity: 0;
    transform: scaleY(0);
  `}
  ${({isFullscreen:e})=>e?`
    height: 40px;
  `:`
    height: 30px;
  `}
`,qv=v.svg`
  display: block;
  width: 100%;
  height: 100%;
`;var Hv=({strokePath:e,currentTime:t,duration:n,isFullscreen:r,bottomOffset:o,visible:i})=>{let s=`heatmap-played-${Jn.default.useId()}`,a=n>0?t/n*100:0;return Jn.default.createElement($v,{isFullscreen:r,bottomOffset:o,visible:i},Jn.default.createElement(qv,{viewBox:"0 0 100 100",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},Jn.default.createElement("defs",null,Jn.default.createElement("clipPath",{id:s},Jn.default.createElement("rect",{x:"0",y:"0",width:a,height:"100"}))),Jn.default.createElement("path",{d:e,fill:"none",stroke:"rgba(255, 255, 255, 0.75)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"}),Jn.default.createElement("path",{d:e,fill:"none",stroke:"rgba(255, 255, 255, 1)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",clipPath:`url(#${s})`})))};Hv.propTypes={strokePath:qo.default.string.isRequired,currentTime:qo.default.number.isRequired,duration:qo.default.number.isRequired,isFullscreen:qo.default.bool.isRequired,bottomOffset:qo.default.number,visible:qo.default.bool};var yc=Jn.default.memo(Hv,(e,t)=>e.strokePath===t.strokePath&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.isFullscreen===t.isFullscreen&&e.bottomOffset===t.bottomOffset&&e.visible===t.visible);var Be=b(I());var Jk=({timelensRef:e,currentTime:t,duration:n,onChange:r,onSeeking:o})=>{let i=Pe(),l=Be.default.useRef(null),s=Be.default.useRef(null),[a,u]=Be.default.useState(!1),[p,c]=Be.default.useState(!1),[m,y]=Be.default.useState({left:0,width:0}),[g,S]=Be.default.useState({value:0,tooltip:0}),k=Be.default.useCallback(P=>{P.preventDefault();let O=P.currentTarget.getBoundingClientRect(),B=Ds(P,O,n);i({type:"timeSliding",payload:!1}),c(!1),r(B),o(!1),e.current&&e.current.handleTimelens(P)},[r,n,i,e,o]),h=Be.default.useCallback(P=>{if(P.preventDefault(),l.current!==null){let O=l.current.getBoundingClientRect();i({type:"timeSliding",payload:!0}),y(B=>({...B,left:O.left,width:O.width})),e.current&&e.current.handleTimelens(P),c(!0),o(!0)}},[e,i,o]),d=Be.default.useCallback(P=>{var B,W,U,X,me,R,N,ae;P.preventDefault();let O=Ds(P,{left:m.left,width:m.width},n);if(i({type:"timeSliding",payload:!1}),c(!1),S(j=>({...j,value:O})),r(O),o(!1),e.current&&e.current.setShowTimelens(!1),l.current){let j=l.current.getBoundingClientRect(),ye=(X=(U=P.clientX)!=null?U:(W=(B=P.changedTouches)==null?void 0:B[0])==null?void 0:W.clientX)!=null?X:0,ge=(ae=(N=P.clientY)!=null?N:(R=(me=P.changedTouches)==null?void 0:me[0])==null?void 0:R.clientY)!=null?ae:0;(ye<j.left||ye>j.right||ge<j.top||ge>j.bottom)&&u(!1)}},[r,n,m,i,o,e]),f=Be.default.useRef(null),w=Be.default.useCallback(P=>{var W,U,X,me,R,N,ae,j;P.preventDefault(),f.current&&cancelAnimationFrame(f.current);let O=(me=(X=P.clientX)!=null?X:(U=(W=P.touches)==null?void 0:W[0])==null?void 0:U.clientX)!=null?me:0,B=(j=(ae=P.pageX)!=null?ae:(N=(R=P.touches)==null?void 0:R[0])==null?void 0:N.pageX)!=null?j:0;f.current=requestAnimationFrame(()=>{let ye=Ds({clientX:O},{left:m.left,width:m.width},n);S(ge=>({...ge,value:ye})),r(ye),e.current&&e.current.handleTimelens({clientX:O,pageX:B}),f.current=null})},[n,m,e,r]);Be.default.useEffect(()=>(p&&(document.addEventListener("mousemove",w),document.addEventListener("mouseup",d),document.addEventListener("touchmove",w),document.addEventListener("touchcancel",d),document.addEventListener("touchend",d)),()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",w),document.removeEventListener("touchcancel",d),document.removeEventListener("touchend",d),f.current&&(cancelAnimationFrame(f.current),f.current=null)}),[p,w,d]);let x=Be.default.useCallback(P=>{if(P.preventDefault(),l.current!==null){let O=l.current.getBoundingClientRect();y(B=>({...B,left:O.left,width:O.width})),e.current&&e.current.handleTimelens(P)}},[e]),C=Be.default.useCallback(P=>{P.preventDefault();let O=Ds(P,{left:m.left,width:m.width},n);S(B=>({...B,tooltip:O})),e.current&&e.current.handleTimelens(P)},[n,m.left,m.width,e]),T=Be.default.useRef(null),M=Be.default.useCallback(()=>{T.current&&clearTimeout(T.current),T.current=setTimeout(()=>{if(!l||!l.current)return;let P=l.current.getBoundingClientRect();y(O=>({...O,left:P.left,width:P.width})),T.current=null},100)},[]),L=Be.default.useCallback(P=>{e.current&&e.current.handleTimelens(P),u(!0)},[e]),E=Be.default.useCallback(()=>{e.current&&e.current.setShowTimelens(!1),u(!1)},[e]);Be.default.useEffect(()=>{if(typeof window!="undefined")return window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M),T.current&&clearTimeout(T.current)}},[M]);let _=Be.default.useMemo(()=>{var P;return Tv({duration:n,currentTime:p?g.value:t,sliderWidth:m.width,handleWidth:((P=s.current)==null?void 0:P.offsetWidth)||0})},[n,t,g.value,p,s,m]);return{sliderRef:l,handleRef:s,showTooltip:a,timeSliderSliding:p,timeSliderState:g,trackTranslateX:{track:_.trackTranslateX,handle:_.handleTranslateX},onClick:k,onMouseDown:h,onSliderMouseOver:x,onSliderMouseMove:C,onMouseEnter:L,onMouseLeave:E}},jv=Jk;var d1=b(I());var Uv=b(I()),Wv=b(vs());function Ho(e){let t=Uv.default.useRef(e);return(0,Wv.default)(e,t.current)||(t.current=e),t.current}var e4=({chapters:e,duration:t})=>{let n=Ho(e),r=d1.default.useMemo(()=>{if(!n||n.length===0||t<=0)return[];let i=[...n].filter(l=>l.startTime<t).sort((l,s)=>l.startTime-s.startTime);return i.map((l,s)=>{let a=s<i.length-1?i[s+1].startTime:t,u=Math.min(a,t);return{title:l.title,startTime:l.startTime,endTime:u,startPercent:l.startTime/t*100,endPercent:u/t*100}})},[n,t]),o=d1.default.useCallback(i=>{if(r.length===0)return null;for(let l=r.length-1;l>=0;l--)if(i>=r[l].startTime)return r[l];return r[0]},[r]);return{segments:r,getChapterAtTime:o}},so=e4;var Qv=b(I());var t4=({heatmapData:e,duration:t})=>{let n=Ho(e),r=Qv.default.useMemo(()=>{if(!n||n.length===0||t<=0)return{svgPath:"",strokePath:""};let i=n.map(c=>{let y=(c.startTime+c.endTime)/2/t*100,S=100-Math.max(0,Math.min(1,c.value))*100;return{x:y,y:S}});if(i.length<2)return{svgPath:"",strokePath:""};let l=6,s=i.length+2,a=c=>c<=0?{x:0,y:100}:c>=s-1?{x:100,y:100}:i[c-1],u=`M ${a(0).x},${a(0).y}`;for(let c=0;c<s-1;c++){let m=a(c-1),y=a(c),g=a(c+1),S=a(c+2),k=y.x+(g.x-m.x)/l,h=y.y+(g.y-m.y)/l,d=g.x-(S.x-y.x)/l,f=g.y-(S.y-y.y)/l;u+=` C ${k},${h} ${d},${f} ${g.x},${g.y}`}return{strokePath:u}},[n,t]),o=r.strokePath.length>0;return{strokePath:r.strokePath,hasHeatmap:o}},gc=t4;Yn();var Yv=({spriteVTTFile:e,chapters:t,heatmapData:n,currentTime:r,duration:o,buffered:i,onChange:l,onSeeking:s,fullscreen:a})=>{let{i18n:u,captionDragging:p}=q(),c=Fe.default.useRef(null),{sliderRef:m,handleRef:y,showTooltip:g,timeSliderSliding:S,timeSliderState:k,trackTranslateX:h,onClick:d,onMouseDown:f,onSliderMouseOver:w,onSliderMouseMove:x,onMouseEnter:C,onMouseLeave:T}=jv({timelensRef:c,currentTime:r,duration:o,onChange:l,onSeeking:s}),{segments:M,getChapterAtTime:L}=so({chapters:t,duration:o}),E=M.length>0,{strokePath:_,hasHeatmap:P}=gc({heatmapData:n,duration:o}),O=Fe.default.useMemo(()=>{let W=S?k.value:k.tooltip;return L(W)},[S,k.value,k.tooltip,L]),B=Fe.default.useMemo(()=>!O||!g?-1:M.findIndex(W=>W.startTime===O.startTime),[O,g,M]);return Fe.default.createElement(yv,{ref:m,role:"slider","aria-label":u.timeBar,"aria-valuemin":0,"aria-valuemax":o,"aria-valuenow":r,"aria-valuetext":Ge(Math.round(r)),tabIndex:0,onClick:d,onMouseDown:f,onTouchStart:f,onKeyDown:()=>{},onMouseOver:w,onMouseMove:x,onMouseEnter:C,onMouseLeave:T,onFocus:()=>{},isSliding:S,isFullscreen:a,style:p?{pointerEvents:"none"}:void 0},E?Fe.default.createElement(Fe.default.Fragment,null,Fe.default.createElement(zo,null,Fe.default.createElement(zv,{segments:M,currentTime:S?k.value:r,duration:o,bufferedScaleX:i,hoveredIndex:B,fullscreen:a}),Fe.default.createElement(s1,{style:{transform:`translateX(${h.handle}%)`}},Fe.default.createElement(Vo,{ref:y,type:"button",onMouseDown:f,onTouchStart:f,isFullscreen:a})))):Fe.default.createElement(zo,null,Fe.default.createElement(vv,{isFullscreen:a},Fe.default.createElement(Sv,{style:{transform:`scaleX(${i})`}}),Fe.default.createElement(wv,{style:{transform:`translateX(${h.track}%)`}})),Fe.default.createElement(s1,{style:{transform:`translateX(${h.handle}%)`}},Fe.default.createElement(Vo,{ref:y,type:"button",onMouseDown:f,onTouchStart:f,isFullscreen:a}))),Fe.default.createElement(Ov,{sliderRef:m,showTooltip:g,duration:o,tooltip:S?k.value:k.tooltip,chapterTitle:O==null?void 0:O.title,fullscreen:a}),P&&Fe.default.createElement(yc,{strokePath:_,currentTime:S?k.value:r,duration:o,isFullscreen:a,visible:g||S}),e&&Fe.default.createElement(Mv,{ref:c,sliderRef:m,duration:o,spriteVTTFile:e,fullscreen:a,hasChapters:E}))};Yv.propTypes={spriteVTTFile:St.default.string,chapters:St.default.arrayOf(St.default.shape({title:St.default.string.isRequired,startTime:St.default.number.isRequired})),heatmapData:St.default.arrayOf(St.default.shape({startTime:St.default.number.isRequired,endTime:St.default.number.isRequired,value:St.default.number.isRequired})),currentTime:St.default.number.isRequired,duration:St.default.number.isRequired,buffered:St.default.number.isRequired||null,onChange:St.default.func.isRequired,fullscreen:St.default.bool.isRequired};var Xv=Fe.default.memo(Yv,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.buffered===t.buffered&&e.onChange===t.onChange&&e.onSeeking===t.onSeeking&&e.fullscreen===t.fullscreen);var Dn=b(I()),Wo=b(J());var Fs=b(I());var gn=b(I());var Bs=v.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,n4=Y`
  font-size: 130%;
  margin-bottom: 10px;
`,r4=Y`
  font-size: 90%;
  margin-bottom: 6px;
`,o4=v.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  background-color: rgba(15, 15, 15, 0.9);
  border-radius: 4px;
  padding: 5px 10px;
  white-space: nowrap;
  font-weight: 500;
  color: #fff;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s ease;
  z-index: 10;
  ${({$fullscreen:e})=>e?n4:r4}

  ${Bs}:hover & {
    opacity: 1;
  }

  &[data-suppressed='true'] {
    opacity: 0 !important;
  }

  ${Bs}:has([aria-expanded='true']) & {
    opacity: 0 !important;
  }
`,Gv=({label:e,children:t,disabled:n=!1,fullscreen:r=!1,...o})=>{let i=q(),l=gn.default.useRef(null),s=gn.default.useRef(null),[a,u]=gn.default.useState(!1),[p,c]=gn.default.useState(0),m=gn.default.useRef(null),y=gn.default.useCallback(()=>{var h;let k=(h=i.playerRef)==null?void 0:h.current;if(k&&k.querySelectorAll('[aria-expanded="true"]').length>0){u(!0);return}u(!1),m.current&&cancelAnimationFrame(m.current),m.current=requestAnimationFrame(()=>{m.current=null;let d=l.current,f=s.current;if(!d||!f||!k){c(0);return}let w=d.getBoundingClientRect(),x=k.getBoundingClientRect(),C=8;w.left<x.left+C?c(x.left+C-w.left):w.right>x.right-C?c(x.right-C-w.right):c(0)})},[i.playerRef]),g=gn.default.useCallback(()=>{m.current&&(cancelAnimationFrame(m.current),m.current=null),u(!1),c(0)},[]),S=gn.default.useCallback(()=>{u(!0)},[]);return!e||n?t:gn.default.createElement(Bs,{ref:s,onMouseEnter:y,onMouseLeave:g,onClick:S,...o},t,gn.default.createElement(o4,{ref:l,$fullscreen:r,"data-suppressed":a,style:{transform:`translateX(calc(-50% + ${p}px))`}},e))};Gv.displayName="Tooltip";var Ie=gn.default.memo(Gv);var Kv=Fs.default.forwardRef(({isFullscreen:e,...t},n)=>Fs.default.createElement("div",{ref:n,...t}));Kv.displayName="SliderWrapper";var nl=v(Kv)`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 0px;
  overflow: hidden;
  -webkit-user-drag: element;
  -webkit-user-select: none;
  -moz-transition:
    margin 0.2s cubic-bezier(0.4, 0, 1, 1),
    width 0.2s cubic-bezier(0.4, 0, 1, 1);
  -webkit-transition:
    margin 0.2s cubic-bezier(0.4, 0, 1, 1),
    width 0.2s cubic-bezier(0.4, 0, 1, 1);
  transition:
    margin 0.2s cubic-bezier(0.4, 0, 1, 1),
    width 0.2s cubic-bezier(0.4, 0, 1, 1);
  ${({isFullscreen:e})=>e?`
    height: 54px;
  `:`
    height: 36px;
  `}
`,Zv=Fs.default.forwardRef(({isSliding:e,isFullscreen:t,...n},r)=>Fs.default.createElement("div",{ref:r,...n}));Zv.displayName="SliderContainer";var Jv=v(Zv)`
  display: flex;
  padding-right: 3px;
  position: relative;
  @media (max-width: 575px) {
    display: none;
  }

  ${({isSliding:e,isFullscreen:t})=>e?`
      & ${nl} {
        width: ${Rn(t)}px;
        -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
      }
      `:`
          & ${Bs}:hover ~ ${nl},
          &:hover ${nl},
          & ${nl}:hover {
              width: ${Rn(t)}px;
              -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
          }
      `}
`;var p1=b(I());var i4=Y`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  cursor: pointer;
  opacity: 0.8;
  &:focus,
  &:hover {
    opacity: 1;
  }
  &:disabled {
    cursor: not-allowed;
    color: #a4a4a4;
  }
  & * {
    pointer-events: none;
  }
`,l4=Y`
  align-items: center;
  padding: 0 8px;
  font-size: 14px;
`,s4=Y`
  width: 54px;
  height: 54px;
`,a4=Y`
  width: 36px;
  height: 36px;
`,u4=Y`
  font-size: 145% !important;
`,e5=p1.default.forwardRef(({isText:e,isFullscreen:t=!1,isFakeDisabled:n=!1,title:r,...o},i)=>p1.default.createElement("button",{ref:i,...o},o.children));e5.displayName="GeneralButton";var c4=v(e5)`
  ${Kn} ${Gn} & {
    ${i4}
    ${({isFullscreen:e,isText:t})=>!t&&(e?s4:a4)}
    ${({isFullscreen:e,isText:t})=>e&&t&&u4}
    ${({isText:e})=>e&&l4}
    ${({isFakeDisabled:e})=>e&&`
      color: #a4a4a4;
    `}
  }
`,se=c4;var rl=b(I()),Uo=b(J());var _n=b(I());var vc=({clientX:e,sliderRef:t,isFullcreen:n})=>{if(!t.current)return 0;let r=t.current.getBoundingClientRect(),i=(e-r.left)/Rn(n)*100;return i<0?i=0:i>100&&(i=100),i};var d4=({fullscreen:e,value:t,onChange:n})=>{let r=q(),o=Pe(),i=_n.default.useRef(null),l=_n.default.useRef(null),[s,a]=_n.default.useState(0);_n.default.useEffect(()=>{if(i!=null&&i.current&&(l!=null&&l.current)){let g=l.current.getBoundingClientRect(),S=t/100*Rn(e)-g.width/2,k=S;S<0?k=0:S>Rn(e)-g.width&&(k=Rn(e)-g.width),a(k)}},[t,e]);let u=_n.default.useCallback(g=>{if(n){let S=vc({clientX:g.clientX,sliderRef:i,isFullcreen:e});n(S)}},[n,e]),p=_n.default.useCallback(g=>{g.preventDefault(),i!=null&&i.current&&o({type:"volumeSliding",payload:!0})},[o]),c=_n.default.useCallback(g=>{g.preventDefault(),o({type:"volumeSliding",payload:!1});let S=vc({clientX:g.clientX,sliderRef:i,isFullcreen:e});n(S)},[n,e,o]),m=_n.default.useRef(null),y=_n.default.useCallback(g=>{var k,h,d,f;if(g.preventDefault(),!r.volumeSliding)return;m.current&&cancelAnimationFrame(m.current);let S=(f=(d=g.clientX)!=null?d:(h=(k=g.touches)==null?void 0:k[0])==null?void 0:h.clientX)!=null?f:0;m.current=requestAnimationFrame(()=>{let w=vc({clientX:S,sliderRef:i,isFullcreen:e});n(w),m.current=null})},[r.volumeSliding,e,n]);return _n.default.useEffect(()=>(r.volumeSliding&&(document.addEventListener("mousemove",y),document.addEventListener("mouseup",c),document.addEventListener("touchmove",y),document.addEventListener("touchcancel",c),document.addEventListener("touchend",c)),()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",y),document.removeEventListener("touchcancel",c),document.removeEventListener("touchend",c),m.current&&(cancelAnimationFrame(m.current),m.current=null)}),[r.volumeSliding,y,c]),{thumbLeft:s,sliderRef:i,thumbRef:l,onMouseDown:p,onMouseMove:y,handleChange:u}},t5=d4;var jo=b(I());var n5=jo.default.forwardRef(({isFullscreen:e,...t},n)=>jo.default.createElement("div",{ref:n,...t}));n5.displayName="SliderContainer";var r5=v(n5)`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  ${({isFullscreen:e})=>e?`
          height: 4px;
        `:`
          height: 2px;
        `}
`,o5=jo.default.forwardRef(({isFullscreen:e,isDisabled:t,...n},r)=>jo.default.createElement("div",{ref:r,...n}));o5.displayName="SliderTrack";var i5=v(o5)`
  border-radius: 2px;
  ${({isDisabled:e})=>e?`
    background-color: #a4a4a4;
  `:`
    background-color: #fff;
  `}
  ${({isFullscreen:e})=>e?`
          height: 4px;
        `:`
          height: 2px;
        `}
`,l5=jo.default.forwardRef(({isFullscreen:e,isDisabled:t,...n},r)=>jo.default.createElement("div",{ref:r,...n}));l5.displayName="SliderThumb";var s5=v(l5)`
  ${Kn} ${Gn} & {
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc(50% - 10px);
    ${({isDisabled:e})=>e?`
      background-color: #a4a4a4;
    `:`
      background-color: #fff;
    `}
    ${({isFullscreen:e})=>e?`
      width: 18px;
      height: 18px;
    `:`
      width: 14px;
      height: 14px;
    `}
  }
`;var a5=({fullscreen:e,value:t,isDisabled:n,onChange:r,onMouseEnter:o,onMouseLeave:i})=>{let{thumbLeft:l,sliderRef:s,thumbRef:a,onMouseMove:u,onMouseDown:p,handleChange:c}=t5({fullscreen:e,value:t,onChange:r});return rl.default.createElement(nl,{ref:s,role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":Math.round(t),"aria-valuetext":`${Math.round(t)}%`,onClick:c,onMouseDown:p,onTouchStart:p,onMouseEnter:o,onMouseLeave:i,isFullscreen:e},rl.default.createElement(r5,{onMouseMove:u,isFullscreen:e},rl.default.createElement(i5,{style:{width:`${t}%`},isFullscreen:e,isDisabled:n}),rl.default.createElement(s5,{ref:a,style:{left:`${l}px`},onMouseDown:p,onTouchStart:p,isFullscreen:e,isDisabled:n})))};a5.propTypes={value:Uo.default.number.isRequired,onChange:Uo.default.func.isRequired,isDisabled:Uo.default.bool.isRequired,fullscreen:Uo.default.bool.isRequired,onMouseEnter:Uo.default.func,onMouseLeave:Uo.default.func};var u5=rl.default.memo(a5,(e,t)=>e.fullscreen===t.fullscreen&&e.value===t.value&&e.onChange===t.onChange&&e.isDisabled===t.isDisabled&&e.onMouseEnter===t.onMouseEnter&&e.onMouseLeave===t.onMouseLeave);var Cr=b(I());var ol=b(I());var f1=({width:e=36,height:t=36})=>ol.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},ol.default.createElement("path",{d:"M 22.5 18 C 22.5 16.189 21.48 14.624 20 13.87 L 20 22.136 C 21.48 21.377 22.5 19.812 22.5 18 Z"}),ol.default.createElement("polygon",{points:"9 14.922 9 21.078 13 21.078 18 26.21 18 9.79 13 14.922"}),ol.default.createElement("path",{d:"M 20 9 L 20 11.119 C 22.89 12.002 25 14.747 25 18 C 25 21.253 22.89 23.999 20 24.881 L 20 27 C 24.005 26.066 27 22.398 27 18 C 27 13.603 24.005 9.934 20 9 Z"}));f1.displayName="UnmutedIcon";f1.propTypes=ee;var Sc=ol.default.memo(f1,re);var p4=({fullscreen:e,isMuted:t,volume:n,forceMuted:r,changeVolume:o,onMutedClick:i})=>{let l=q(),s=Cr.default.useMemo(()=>qe(e),[e]),a=Cr.default.useMemo(()=>t===!0||n===0||r,[t,n,r]),u=Cr.default.useCallback(()=>a?Cr.default.createElement(Xi,{...s}):Cr.default.createElement(Sc,{...s}),[a,s]),p=Cr.default.useMemo(()=>r?l.i18n.thisVideoHasNoSound:a?l.i18n.activateSound:l.i18n.mute,[a,r,l.i18n]),c=Cr.default.useCallback(y=>{r===!1&&o(y/100)},[o,r]),m=Cr.default.useCallback(()=>{r===!1&&i(a)},[i,a,r]);return{titleMemorized:p,renderIcon:u,handleOnClick:m,handleChange:c}},c5=p4;var d5=v.div`
  position: absolute;
  bottom: 100%;
  transform: translateX(-50%);
  margin-bottom: 4px;
  background-color: rgba(15, 15, 15, 0.9);
  border-radius: 4px;
  padding: 4px 8px;
  white-space: nowrap;
  font-weight: 500;
  color: #fff;
  pointer-events: none;
  z-index: 10;
  ${({$fullscreen:e})=>e?`
    font-size: 130%;
  `:`
    font-size: 90%;
  `}
`;var p5=({fullscreen:e,isMuted:t,volume:n,forceMuted:r,changeVolume:o,onMutedClick:i})=>{let l=q(),[s,a]=Dn.default.useState(!1),{titleMemorized:u,renderIcon:p,handleOnClick:c,handleChange:m}=c5({fullscreen:e,isMuted:t,volume:n,forceMuted:r,changeVolume:o,onMutedClick:i}),y=Dn.default.useCallback(()=>a(!0),[]),g=Dn.default.useCallback(()=>{l.volumeSliding||a(!1)},[l.volumeSliding]);Dn.default.useEffect(()=>{l.volumeSliding||a(!1)},[l.volumeSliding]);let S=s||l.volumeSliding,k=t?0:n,d=(e?54:36)+k*Rn(e);return Dn.default.createElement(Jv,{isSliding:l.volumeSliding,isFullscreen:e},Dn.default.createElement(Ie,{label:u,fullscreen:e,disabled:l.volumeSliding||s},Dn.default.createElement(se,{type:"button","aria-label":u,onClick:c,isFullscreen:e,isFakeDisabled:r},p())),Dn.default.createElement(u5,{fullscreen:e,value:k*100,isDisabled:r,onChange:m,onMouseEnter:y,onMouseLeave:g}),S&&!r&&Dn.default.createElement(d5,{style:{left:`${d}px`},$fullscreen:e},Math.round(k*100),"%"))};p5.propTypes={fullscreen:Wo.default.bool.isRequired,isMuted:Wo.default.bool.isRequired,volume:Wo.default.number.isRequired,onMutedClick:Wo.default.func.isRequired,forceMuted:Wo.default.bool.isRequired,changeVolume:Wo.default.func.isRequired};var f5=Dn.default.memo(p5,(e,t)=>e.fullscreen===t.fullscreen&&e.isMuted===t.isMuted&&e.volume===t.volume&&e.forceMuted===t.forceMuted&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume);var il=b(I()),zs=b(J());var m1=v.div`
  display: inline-block;
  height: 36px;
  padding: 0 5px;
  font-size: 13px;
  line-height: 35px;
  white-space: nowrap;
`,m5=v.span`
  position: relative;
  top: -2px;
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 50%;
  background: #ff0000;
`,h5=v.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
`;Yn();var y5=({live:e,duration:t,currentTime:n,chapterTitle:r})=>{let{i18n:o}=q();return il.default.createElement(m1,{role:"timer","aria-live":"off"},Ge(Math.round(n)),e?il.default.createElement(m1,null,il.default.createElement(m5,null),o.live):` / ${Ge(Math.round(t))}`,r&&il.default.createElement(h5,null," \xB7 ",r))};y5.propTypes={live:zs.default.bool.isRequired,duration:zs.default.number.isRequired,currentTime:zs.default.number.isRequired,chapterTitle:zs.default.string};var g5=il.default.memo(y5,(e,t)=>e.live===t.live&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.chapterTitle===t.chapterTitle);var vn=b(I()),ll=b(J());var Vs=b(I());var h1=({width:e=36,height:t=36})=>Vs.default.createElement("svg",{height:e,width:t,version:"1.1",viewBox:"0 0 36 36",fill:"currentColor"},Vs.default.createElement("rect",{x:"12",y:"10",width:"3",height:"16"}),Vs.default.createElement("rect",{x:"21",y:"10",width:"3",height:"16"}));h1.displayName="PauseIcon";h1.propTypes=ee;var v5=Vs.default.memo(h1,re);var S5=({fullscreen:e,paused:t,ended:n,onPlayClick:r,onPauseClick:o})=>{let{i18n:i}=q(),l=vn.default.useMemo(()=>qe(e),[e]);return n?vn.default.createElement(Ie,{label:i.replay,fullscreen:e},vn.default.createElement(se,{type:"button","aria-label":i.replay,onClick:r,isFullscreen:e},vn.default.createElement(Zi,{...l}))):t?vn.default.createElement(Ie,{label:i.play,fullscreen:e},vn.default.createElement(se,{type:"button","aria-label":i.play,onClick:r,isFullscreen:e},vn.default.createElement(Gi,{...l}))):vn.default.createElement(Ie,{label:i.pause,fullscreen:e},vn.default.createElement(se,{type:"button","aria-label":i.pause,onClick:o,isFullscreen:e},vn.default.createElement(v5,{...l})))};S5.propTypes={fullscreen:ll.default.bool.isRequired,paused:ll.default.bool.isRequired,ended:ll.default.bool.isRequired,onPlayClick:ll.default.func.isRequired,onPauseClick:ll.default.func.isRequired};var w5=vn.default.memo(S5,(e,t)=>e.fullscreen===t.fullscreen&&e.paused===t.paused&&e.ended===t.ended&&e.onPlayClick===t.onPlayClick&&e.onPauseClick===t.onPauseClick);var Nn=b(I()),Qo=b(J());var wc=b(I());var y1=({width:e=36,height:t=36})=>wc.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},wc.default.createElement("path",{d:"M 22.789 12.113 C 22.918 12.014 23.028 11.98 23.117 12.011 C 23.206 12.042 23.25 12.126 23.25 12.261 L 23.25 23.739 C 23.25 23.874 23.206 23.958 23.117 23.989 C 23.028 24.02 22.918 23.986 22.789 23.887 L 15.508 18.351 C 15.447 18.304 15.402 18.255 15.375 18.203 L 15.375 23.49 C 15.375 23.625 15.31 23.742 15.18 23.841 C 15.05 23.939 14.896 23.989 14.719 23.989 L 13.406 23.989 C 13.229 23.989 13.075 23.939 12.945 23.841 C 12.815 23.742 12.75 23.625 12.75 23.49 L 12.75 12.51 C 12.75 12.375 12.815 12.258 12.945 12.159 C 13.075 12.061 13.229 12.011 13.406 12.011 L 14.719 12.011 C 14.896 12.011 15.05 12.061 15.18 12.159 C 15.31 12.258 15.375 12.375 15.375 12.51 L 15.375 17.797 C 15.402 17.745 15.447 17.696 15.508 17.649 Z"}));y1.displayName="PreviousTrackIcon";y1.propTypes=ee;var x5=wc.default.memo(y1,re);var xc=b(I());var g1=({width:e=36,height:t=36})=>xc.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},xc.default.createElement("path",{d:"M 13.211 12.113 C 13.082 12.014 12.972 11.98 12.883 12.011 C 12.794 12.042 12.75 12.126 12.75 12.261 L 12.75 23.739 C 12.75 23.874 12.794 23.958 12.883 23.989 C 12.972 24.02 13.082 23.986 13.211 23.887 L 20.492 17.649 C 20.553 17.696 20.598 17.745 20.625 17.797 L 20.625 12.51 C 20.625 12.375 20.69 12.258 20.82 12.159 C 20.95 12.061 21.104 12.011 21.281 12.011 L 22.594 12.011 C 22.771 12.011 22.925 12.061 23.055 12.159 C 23.185 12.258 23.25 12.375 23.25 12.51 L 23.25 23.49 C 23.25 23.625 23.185 23.742 23.055 23.841 C 22.925 23.939 22.771 23.989 22.594 23.989 L 21.281 23.989 C 21.104 23.989 20.95 23.939 20.82 23.841 C 20.69 23.742 20.625 23.625 20.625 23.49 L 20.625 18.203 C 20.598 18.255 20.553 18.304 20.492 18.351 Z"}));g1.displayName="NextTrackIcon";g1.propTypes=ee;var C5=xc.default.memo(g1,re);var Cc=Nn.default.memo(({fullscreen:e,onPrevious:t,showNavButtons:n=!1})=>{let{i18n:r}=q(),o=Nn.default.useMemo(()=>qe(e),[e]),i=typeof t=="function";return!i&&!n?null:Nn.default.createElement(Ie,{label:r.previous,fullscreen:e},Nn.default.createElement(se,{type:"button","aria-label":r.previous,onClick:i?t:void 0,isFullscreen:e,isFakeDisabled:!i},Nn.default.createElement(x5,{...o})))});Cc.displayName="PreviousButton";Cc.propTypes={fullscreen:Qo.default.bool.isRequired,onPrevious:Qo.default.func,showNavButtons:Qo.default.bool};var kc=Nn.default.memo(({fullscreen:e,onNext:t,showNavButtons:n=!1})=>{let{i18n:r}=q(),o=Nn.default.useMemo(()=>qe(e),[e]),i=typeof t=="function";return!i&&!n?null:Nn.default.createElement(Ie,{label:r.next,fullscreen:e},Nn.default.createElement(se,{type:"button","aria-label":r.next,onClick:i?t:void 0,isFullscreen:e,isFakeDisabled:!i},Nn.default.createElement(C5,{...o})))});kc.displayName="NextButton";kc.propTypes={fullscreen:Qo.default.bool.isRequired,onNext:Qo.default.func,showNavButtons:Qo.default.bool};var kr=b(I()),Tc=b(J());var bc=b(I());var v1=({width:e=36,height:t=36})=>bc.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36"},bc.default.createElement("path",{fill:"currentColor",d:"M 12 20.667 L 10 20.667 L 10 26 L 15.333 26 L 15.333 24 L 12 24 L 12 20.667 Z M 10 15.333 L 12 15.333 L 12 12 L 15.333 12 L 15.333 10 L 10 10 L 10 15.333 Z M 24 24 L 20.667 24 L 20.667 26 L 26 26 L 26 20.667 L 24 20.667 L 24 24 Z M 20.667 10 L 20.667 12 L 24 12 L 24 15.333 L 26 15.333 L 26 10 L 20.667 10 Z"}));v1.displayName="FullscreenIcon";v1.propTypes=ee;var k5=bc.default.memo(v1,re);var Pc=b(I());var S1=({width:e=36,height:t=36})=>Pc.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},Pc.default.createElement("path",{d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"}));S1.displayName="UnfullscreenIcon";S1.propTypes=ee;var b5=Pc.default.memo(S1,re);var P5=({fullscreen:e,requestFullscreen:t,exitFullscreen:n})=>{let{i18n:r}=q(),o=kr.default.useMemo(()=>qe(e),[e]);return e?kr.default.createElement(Ie,{label:r.exitFullScreenMode,fullscreen:!0},kr.default.createElement(se,{type:"button","aria-label":r.exitFullScreenMode,onClick:n,isFullscreen:!0},kr.default.createElement(b5,{...o}))):kr.default.createElement(Ie,{label:r.fullScreen},kr.default.createElement(se,{type:"button","aria-label":r.fullScreen,onClick:t},kr.default.createElement(k5,{...o})))};P5.propTypes={fullscreen:Tc.default.bool.isRequired,requestFullscreen:Tc.default.func.isRequired,exitFullscreen:Tc.default.func.isRequired};var T5=kr.default.memo(P5,(e,t)=>e.fullscreen===t.fullscreen&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen);var ao=b(I());var f4=3*1e3,m4=({hasResource:e,loading:t,prevented:n,paused:r,ended:o,waiting:i,seeking:l,kernelMsg:s})=>{let{controlsHovering:a,timeSliding:u,menuVisible:p,subMenuVisible:c}=q(),m=Pe(),y=ao.default.useRef(void 0),g=e===!1||t||n||r||o||i||l||u||p||c||a||s,S=ao.default.useRef(g);S.current=g;let k=e===!1||t||n||r||o||i||l||u||p||c||s,h=ao.default.useRef(k);h.current=k;let d=ao.default.useCallback(()=>{typeof window!="undefined"&&window.clearTimeout(y.current),m({type:"hiding",payload:!1}),!S.current&&(y.current=window.setTimeout(()=>{m({type:"hiding",payload:!0})},f4))},[m]),f=ao.default.useCallback(()=>{if(typeof window!="undefined"&&window.clearTimeout(y.current),m({type:"controlsHovering",payload:!1}),h.current){m({type:"hiding",payload:!1});return}m({type:"hiding",payload:!0})},[m]);return ao.default.useEffect(()=>{typeof window!="undefined"&&(r||o)?(window.clearTimeout(y.current),m({type:"hiding",payload:!1})):!r&&!o&&d()},[r,o,d,m]),ao.default.useEffect(()=>()=>{typeof window!="undefined"&&window.clearTimeout(y.current)},[]),{showControls:d,hideControls:f}},E5=m4;var br=b(I()),$s=b(J());var L5=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: #000;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.15s ease;
  ${({$visible:e})=>e?Y`
          opacity: 1;
          pointer-events: none;
        `:Y`
          opacity: 0;
          pointer-events: none;
        `}
`,M5=v.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`;var I5=({spriteVTTFile:e,duration:t,seekTime:n,visible:r})=>{let[o,i]=br.default.useState([]),[l,s]=br.default.useState({}),a=br.default.useRef(null);br.default.useEffect(()=>{if(!e)return;let p=!1;return(async()=>{try{let c=await fetch(e).then(h=>h.text());if(p)return;let m=e.substring(0,e.lastIndexOf("/")+1),y=c.replace(/^([^#?\n]+\.(png|jpg|jpeg|webp))/gim,h=>h.startsWith("http")?h:`${m}${h}`),g=hc(y);i(g);let S=[...new Set(g.map(h=>h.file))],k={};await Promise.all(S.map(h=>new Promise(d=>{let f=new Image;f.onload=()=>{k[h]={w:f.naturalWidth,h:f.naturalHeight},d()},f.onerror=d,f.src=h}))),p||s(k)}catch(c){console.error("SpritePreview: Error parsing VTT file:",c)}})(),()=>{p=!0}},[e]);let u=br.default.useMemo(()=>{if(!r||o.length===0||t<=0)return null;let p=a.current;if(!p)return null;let c=p.offsetWidth,m=p.offsetHeight;if(!c||!m)return null;for(let y of o)if(n>=y.from&&n<=y.to){let g=Number(y.w),S=Number(y.h),k=Number(y.x),h=Number(y.y),d=l[y.file];if(!g||!S||!d)return null;let f=c/g,w=m/S,x=Math.max(f,w),C=d.w*x,T=d.h*x,M=-(k*x),L=-(h*x),E=g*x,_=S*x,P=(c-E)/2,O=(m-_)/2;return{backgroundImage:`url(${y.file})`,backgroundSize:`${C}px ${T}px`,backgroundPosition:`${M+P}px ${L+O}px`}}return null},[r,o,t,n,l]);return e?br.default.createElement(L5,{ref:a,$visible:r&&u!==null},u&&br.default.createElement(M5,{style:u})):null};I5.propTypes={spriteVTTFile:$s.default.string,duration:$s.default.number.isRequired,seekTime:$s.default.number.isRequired,visible:$s.default.bool.isRequired};var qs=br.default.memo(I5,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration&&e.seekTime===t.seekTime&&e.visible===t.visible);var tt=b(I()),Zt=b(J());var Hs=b(I());var O5=v.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,A5=Hs.default.forwardRef(({singleOption:e,hiding:t,isFullscreen:n,...r},o)=>Hs.default.createElement("div",{ref:o,...r}));A5.displayName="DropdownOverlay";var R5=v(A5)`
  width: 250px;
  position: absolute;
  overflow: hidden;
  z-index: 8;
  background: rgba(15, 15, 15, 0.9);
  ${({isFullscreen:e})=>e?`
      right: -52px;
      bottom: 75px;
    `:`
      right: -35px;
      bottom: 55px;
    `}
  ${({hiding:e})=>e?`
      display: block;
    `:`
      display: none;
    `}
  ${({singleOption:e})=>`
      height: auto;
    `}
`,_5=v.ul`
  min-width: 250px;
  padding: 10px 0;
`,D5=v.li`
  & ${se} {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    cursor: pointer;
    opacity: 1;
  }
  & ${se}:focus, & ${se}:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`,N5=v.div`
  margin-right: auto;
`,B5=v.div`
  font-size: 87%;
`,F5=v.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`,w1=Hs.default.forwardRef(({isFullHD:e=!1,isExpanded:t=!1,isFullscreen:n=!1,...r},o)=>Hs.default.createElement(se,{ref:o,isFullscreen:n,...r}));w1.displayName="DropdownButton";w1.displayName="DropdownButton";var z5=v(w1)`
  ${({isExpanded:e})=>e&&`
    & svg {
      transform: rotate(45deg);
      transition: all 0.2s ease-in-out;
    }
  `}
  ${({isFullHD:e})=>e&&`
      &:after {
        content: "HD";
        position: absolute;
        top: 9px;
        right: 4px;
        background-color: #cb0e0b;
        border-radius: 1px;
        font-weight: 700;
      }
    `}
  ${({isFullscreen:e})=>e?`
    &:after {
      width: 20px;
      height: 16px;
      font-size: 11px;
      line-height: 15px;
    }
  `:`
    &:after {
      width: 13px;
      height: 9px;
      font-size: 7px;
      line-height: 10px;
    }
  `}
`;var Ec=b(I());var x1=({width:e=36,height:t=36})=>Ec.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},Ec.default.createElement("path",{d:"M 25.089 17.774 C 25.056 17.032 24.908 16.3 24.649 15.604 L 25.796 14.535 C 26.013 14.326 26.065 13.997 25.921 13.732 C 25.463 12.886 24.874 12.117 24.177 11.453 C 23.965 11.247 23.641 11.211 23.39 11.366 L 22.034 12.21 C 21.424 11.786 20.75 11.461 20.039 11.247 L 19.9 9.677 C 19.877 9.375 19.646 9.13 19.345 9.09 C 18.927 9.029 18.505 8.999 18.082 9 C 17.543 8.998 17.006 9.045 16.476 9.141 C 16.19 9.187 15.97 9.419 15.939 9.706 L 15.772 11.311 C 15.117 11.533 14.498 11.849 13.934 12.249 L 12.614 11.398 C 12.362 11.236 12.032 11.269 11.817 11.478 C 11.108 12.158 10.512 12.947 10.053 13.816 C 9.913 14.076 9.961 14.398 10.172 14.606 L 11.329 15.72 C 11.115 16.314 10.981 16.933 10.93 17.563 L 9.44 18.086 C 9.155 18.18 8.974 18.459 9.003 18.757 C 9.068 19.751 9.296 20.727 9.677 21.646 C 9.786 21.924 10.073 22.091 10.368 22.048 L 11.93 21.823 C 12.234 22.337 12.602 22.811 13.025 23.232 L 12.473 24.754 C 12.372 25.032 12.468 25.342 12.707 25.515 C 13.505 26.099 14.394 26.548 15.338 26.844 C 15.625 26.937 15.938 26.818 16.09 26.559 L 16.897 25.207 C 17.245 25.265 17.597 25.297 17.95 25.303 C 18.215 25.305 18.48 25.292 18.744 25.261 L 19.55 26.658 C 19.69 26.921 19.991 27.054 20.28 26.979 C 21.228 26.728 22.128 26.321 22.943 25.775 C 23.195 25.609 23.302 25.293 23.203 25.008 L 22.686 23.512 C 23.198 23.057 23.643 22.532 24.006 21.951 L 25.568 22.202 C 25.862 22.25 26.151 22.089 26.265 21.813 C 26.657 20.921 26.903 19.971 26.994 19.001 C 27.034 18.698 26.855 18.41 26.567 18.311 Z M 25.266 20.834 L 23.37 20.532 L 22.917 21.258 C 22.62 21.735 22.257 22.167 21.838 22.542 L 21.195 23.123 L 21.838 24.947 C 21.392 25.208 20.92 25.423 20.431 25.589 L 19.467 23.9 L 18.641 23.984 C 18.428 24.009 18.213 24.02 17.999 24.019 C 17.708 24.013 17.418 23.986 17.131 23.939 L 16.238 23.769 L 15.255 25.438 C 14.764 25.253 14.294 25.017 13.854 24.732 L 14.526 22.898 L 13.931 22.311 C 13.587 21.962 13.286 21.573 13.035 21.152 L 12.595 20.413 L 10.696 20.686 C 10.526 20.188 10.406 19.674 10.336 19.152 L 12.158 18.51 L 12.216 17.668 C 12.255 17.154 12.364 16.648 12.537 16.163 L 12.816 15.366 L 11.422 14.021 C 11.69 13.582 12.001 13.17 12.35 12.792 L 13.957 13.832 L 14.66 13.328 C 15.122 13.002 15.629 12.743 16.164 12.56 L 16.951 12.297 L 17.154 10.352 C 17.458 10.311 17.765 10.289 18.072 10.284 C 18.268 10.284 18.464 10.284 18.664 10.313 L 18.834 12.239 L 19.672 12.493 C 20.254 12.668 20.805 12.933 21.304 13.28 L 21.995 13.761 L 23.634 12.74 C 23.973 13.107 24.276 13.504 24.54 13.928 L 23.139 15.244 L 23.46 16.063 C 23.67 16.632 23.792 17.23 23.82 17.835 L 23.859 18.705 L 25.664 19.364 C 25.581 19.866 25.447 20.358 25.266 20.834 Z M 17.979 21.2 C 15.506 21.2 13.96 18.524 15.197 16.384 C 16.434 14.244 19.525 14.244 20.762 16.384 C 21.048 16.88 21.197 17.443 21.192 18.015 C 21.189 19.783 19.748 21.211 17.979 21.2 Z M 18.021 16.063 C 16.537 16.046 15.591 17.64 16.318 18.933 C 17.045 20.226 18.9 20.248 19.657 18.972 C 19.833 18.675 19.926 18.335 19.926 17.99 C 19.926 16.934 19.077 16.075 18.021 16.063 Z"}));x1.displayName="SettingsIcon";x1.propTypes=ee;var Lc=Ec.default.memo(x1,re);var pe=b(I()),js=b(J());it();var Bn=b(I());var V5=Bn.default.forwardRef(({isFullscreen:e,...t},n)=>Bn.default.createElement("div",{ref:n,...t}));V5.displayName="OptionsContainer";var C1=v(V5)`
  width: 280px;
  max-height: 280px;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  z-index: 9;
  background: rgba(15, 15, 15, 0.95);
  border-radius: 6px;
  padding: 4px 0;
  ${({isFullscreen:e})=>e?"right: -52px; bottom: 60px;":"right: -35px; bottom: 45px;"}
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #333;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #666;
    border-radius: 3px;
  }
`,$5=Bn.default.forwardRef(({isFullscreen:e,...t},n)=>Bn.default.createElement("div",{ref:n,...t}));$5.displayName="OptionsHeader";var k1=v($5)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0;
  height: 57px;
  & button {
    font-size: 91%;
    padding: 20px 5px;
    height: 57px;
    width: 100%;
    display: flex;
    align-items: center;
  }
`,q5=Bn.default.forwardRef(({selected:e,isFullscreen:t,...n},r)=>Bn.default.createElement("div",{ref:r,...n}));q5.displayName="OptionsItem";var Mc=v(q5)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 40px;
  cursor: pointer;
  font-size: 13px;
  color: #fff;
  ${({selected:e})=>e&&"color: #4da6ff;"}
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  ${({isFullscreen:e})=>e?"height: 49px;":""}
`,b1=v.span`
  flex: 1;
`,H5=v.span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
`,j5=Bn.default.forwardRef(({isFullscreen:e,...t},n)=>Bn.default.createElement("button",{ref:n,...t}));j5.displayName="ResetButton";var OT=v(j5)`
  display: block;
  width: calc(100% - 24px);
  margin: 8px 12px;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background: transparent;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,U5=Bn.default.forwardRef(({show:e,...t},n)=>Bn.default.createElement("div",{ref:n,...t}));U5.displayName="OptionsContent";var P1=v(U5)`
  opacity: 0;
  transform: translate(100px, 0);
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
  ${({show:e})=>e&&`
    opacity: 1;
    transform: translate(0, 0);
  `}
`;var Ic=b(I());var T1=({width:e=36,height:t=36})=>Ic.default.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},Ic.default.createElement("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"}));T1.displayName="ArrowLeftIcon";T1.propTypes=ee;var Yo=Ic.default.memo(T1,re);var Oc=b(I());var E1=({width:e=36,height:t=36})=>Oc.default.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},Oc.default.createElement("path",{fill:"currentColor",d:"M 15.7 12 C 15.7 12.105 15.658 12.196 15.573 12.277 L 9.648 17.88 C 9.563 17.96 9.466 18 9.355 18 C 9.245 18 9.148 17.96 9.063 17.88 L 8.427 17.278 C 8.342 17.199 8.3 17.106 8.3 17.002 C 8.3 16.898 8.342 16.806 8.427 16.725 L 13.424 12 L 8.427 7.275 C 8.342 7.194 8.3 7.102 8.3 6.998 C 8.3 6.894 8.342 6.801 8.427 6.722 L 9.063 6.12 C 9.148 6.04 9.245 6 9.355 6 C 9.466 6 9.563 6.04 9.648 6.12 L 15.573 11.723 C 15.658 11.804 15.7 11.895 15.7 12 Z"}));E1.displayName="ArrowRightIcon";E1.propTypes=ee;var sl=Oc.default.memo(E1,re);var W5=({captionStyle:e,onStyleChange:t,onClose:n,isFullscreen:r})=>{let{i18n:o}=q(),[i,l]=pe.default.useState(null),[s,a]=pe.default.useState(!1);pe.default.useEffect(()=>{let y=setTimeout(()=>a(!0),50);return()=>clearTimeout(y)},[]);let u=pe.default.useMemo(()=>[{key:"fontFamily",label:o.fontFamily},{key:"fontColor",label:o.fontColor},{key:"fontSize",label:o.fontSize},{key:"fontOpacity",label:o.fontOpacity},{key:"backgroundColor",label:o.backgroundColor},{key:"backgroundOpacity",label:o.backgroundOpacity},{key:"windowColor",label:o.windowColor},{key:"windowOpacity",label:o.windowOpacity},{key:"edgeStyle",label:o.edgeStyle}],[o]),p=pe.default.useCallback(()=>{t(eo)},[t]),c=pe.default.useCallback((y,g)=>{t({...e,[y]:g}),l(null)},[e,t]),m=pe.default.useCallback(y=>{let g=hs[y],S=g==null?void 0:g.find(k=>k.value===e[y]);return(S==null?void 0:S.label)||e[y]},[e]);if(i){let y=hs[i.key],g=u.find(S=>S.key===i.key);return pe.default.createElement(C1,{isFullscreen:r},pe.default.createElement(k1,{isFullscreen:r},pe.default.createElement(se,{onClick:()=>l(null),isFullscreen:r,isText:!0},pe.default.createElement(Yo,{width:28,height:28}),pe.default.createElement("span",null,g==null?void 0:g.label))),pe.default.createElement(P1,{show:s},y==null?void 0:y.map(S=>pe.default.createElement(Mc,{key:S.value,selected:e[i.key]===S.value,onClick:()=>c(i.key,S.value),isFullscreen:r},e[i.key]===S.value&&"\u2713 ",S.label))))}return pe.default.createElement(C1,{isFullscreen:r},pe.default.createElement(k1,{isFullscreen:r},pe.default.createElement(se,{onClick:n,isFullscreen:r,isText:!0},pe.default.createElement(Yo,{width:28,height:28}),pe.default.createElement("span",null,o.captionOptions))),pe.default.createElement(P1,{show:s},u.map(y=>pe.default.createElement(Mc,{key:y.key,onClick:()=>l(y),isFullscreen:r},pe.default.createElement(b1,null,y.label),pe.default.createElement(H5,null,m(y.key)," ",pe.default.createElement(sl,{width:16,height:16})))),pe.default.createElement(Mc,{onClick:p,isFullscreen:r},pe.default.createElement(b1,null,o.reset))))};W5.propTypes={captionStyle:js.default.object.isRequired,onStyleChange:js.default.func.isRequired,onClose:js.default.func.isRequired,isFullscreen:js.default.bool};var Q5=pe.default.memo(W5);var Us=b(I());var Rt=b(I());var Y5=Rt.default.forwardRef(({title:e,options:t,value:n,hiding:r,isFullscreen:o,onClick:i,goBack:l,showOptionsButton:s,onOptionsClick:a,...u},p)=>{let{i18n:c}=q(),[m,y]=Rt.default.useState(!1);return Rt.default.useEffect(()=>{y(!1),r&&setTimeout(()=>{y(!0)},100)},[r]),Rt.default.createElement("div",{ref:p,...u},Rt.default.createElement(G5,null,Rt.default.createElement(se,{onClick:l,isFullscreen:o,isText:!0,style:s?{width:"auto"}:void 0},Rt.default.createElement(Yo,{width:28,height:28}),Rt.default.createElement("span",null,e)),s&&a&&Rt.default.createElement(se,{onClick:a,isFullscreen:o,isText:!0,style:{marginLeft:"auto",fontSize:"12px",textDecoration:"underline",opacity:.8,width:"auto",padding:"20px 15px"}},c.captionOptions)),Rt.default.createElement(K5,{show:m},Rt.default.createElement(Z5,null,t.map((g,S)=>Rt.default.createElement(J5,{key:S,selected:g.value===n,isFullscreen:o},Rt.default.createElement(se,{onClick:()=>i(g.value),isFullscreen:o,isText:!0},g.label,"isFullHD"in g&&g.isFullHD&&Rt.default.createElement(eS,null,c.hd)))))))});Y5.displayName="DropdownOverlay";var X5=Y5;var tS=v(X5)`
  width: 250px;
  height: auto;
  max-height: 283.5px;
  position: absolute;
  overflow: hidden;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgba(15, 15, 15, 0.9);
  ${({isFullscreen:e})=>e?`
      right: -52px;
      bottom: 75px;
    `:`
      right: -35px;
      bottom: 55px;
    `}
  ${({hiding:e})=>e?`
      display: block;
    `:`
      display: none;
    `}
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #4c4c4c;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #909090;
    border-radius: 10px;
  }
`,G5=v.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  & ${se} {
    width: 100%;
    font-size: 91%;
    padding: 20px 5px;
    height: 57px;
  }
`,nS=Us.default.forwardRef(({show:e,...t},n)=>Us.default.createElement("div",{ref:n,...t}));nS.displayName="DropdownContent";var K5=v(nS)`
  opacity: 0;
  -webkit-transform: translate(100px, 0);
  -ms-transform: translate(100px, 0);
  transform: translate(100px, 0);
  transition:
    opacity 0.15s linear,
    -webkit-transform 0.15s ease-out;
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out,
    -webkit-transform 0.15s ease-out;
  ${({show:e})=>e?`
      opacity: 1;
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    `:""}
`,Z5=v.ul`
  padding: 10px 0;
`,rS=Us.default.forwardRef(({selected:e,isFullscreen:t,...n},r)=>Us.default.createElement("li",{ref:r,...n}));rS.displayName="DropdownItem";var J5=v(rS)`
  ${Kn} ${Gn} & {
    padding: 0 15px;

    & ${se} {
      border-radius: 8px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      width: 100%;
      line-height: 40px;
      padding: 0 15px;
      margin: 0;
      ${({isFullscreen:e})=>e?`
        height: 49px;
      `:`
        height: 40px;
      `}
      ${({selected:e})=>e?"background-color: rgb(204, 54, 43, 0.4) !important;":""}
    }
    & ${se}:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }
  }
`,eS=v.sub`
  font-size: 10px;
  font-weight: 500;
  color: #cb0e0b;
  margin-left: 3px;
`;var He=b(I());var Ws={generalMenu:!1,speed:!1,quality:!1,captions:!1};var al=({label:e,value:t,i18n:n})=>e==="quality"?t==="0"?n.auto:`${t}p`:e==="speed"&&t==="1"?n.normal:t;var oS=({qualityOptions:e,captionOptions:t,live:n,i18n:r})=>{let o=[];return n||o.push({label:r.speed,value:"speed",options:[{label:"2",value:"2"},{label:"1.5",value:"1.5"},{label:"1.25",value:"1.25"},{label:"Normal",value:"1"},{label:"0.75",value:"0.75"},{label:"0.5",value:"0.5"},{label:"0.25",value:"0.25"}]}),e.length>0&&o.push({label:r.quality,value:"quality",options:[...e,{label:r.auto,value:"0",isFullHD:!1}]}),t&&t.length>0&&o.push({label:r.captions,value:"captions",options:[{label:r.off,value:"off"},...t]}),o};var h4=({live:e,fullHDQualityBreak:t,qualities:n,captions:r,activeCaption:o,playbackRate:i,playbackQuality:l,changeSettings:s,onCaptionChange:a,fullscreen:u})=>{let{i18n:p}=q(),c=Pe(),m=He.default.useRef(null),y=He.default.useRef(l);y.current=l;let[g,S]=He.default.useState(Ws),[k,h]=He.default.useState(!0),[d,f]=He.default.useState({quality:{label:p.auto,value:"0",isFullHD:!1},speed:{label:p.normal,value:"1"},captions:{label:p.off,value:"off"}});(0,He.useEffect)(()=>{let P=i.toString();f(O=>({...O,speed:{label:al({label:"speed",value:P,i18n:p}),value:P}}))},[p,i]),(0,He.useEffect)(()=>{var O;let P=(O=d.captions)==null?void 0:O.value;if(o===null&&P!=="off")f(B=>({...B,captions:{label:p.off,value:"off"}}));else if(o&&P!==o){let B=r==null?void 0:r.find(U=>U.language===o),W=(B==null?void 0:B.label)||o;f(U=>({...U,captions:{label:W,value:o}}))}},[o,r,p]),(0,He.useEffect)(()=>{if(l==null||l===0||n.length===0)return;let P=l.toString();if(k){let O=`${p.auto} (${P}p)`;f(B=>{var W,U;return((W=B.quality)==null?void 0:W.value)==="0"&&((U=B.quality)==null?void 0:U.label)===O?B:{...B,quality:{label:O,value:"0",isFullHD:t!==void 0&&Number(P)>=t}}})}},[l,n,p,t,k]);let w=He.default.useCallback(P=>{P.stopPropagation(),c(O=>({menuVisible:O.subMenuVisible?!1:!O.menuVisible,subMenuVisible:!1})),S(O=>({...Ws,generalMenu:!O.speed&&!O.quality&&!O.captions?!O.generalMenu:!1}))},[c]),x=He.default.useCallback(P=>O=>{if(P==="quality")if(O==="0"){h(!0);let B=y.current,W=B&&B!==0?`${p.auto} (${B}p)`:p.auto;f(U=>({...U,quality:{label:W,value:"0",isFullHD:t!==void 0&&Number(B!=null?B:0)>=t}}))}else h(!1),f(B=>({...B,quality:{label:al({label:"quality",value:O,i18n:p}),value:O,isFullHD:t!==void 0&&Number(O!=null?O:"0")>=t}}));else if(P==="captions"){let B=r==null?void 0:r.find(U=>U.language===O),W=O==="off"?p.off:(B==null?void 0:B.label)||O;f(U=>({...U,captions:{label:W,value:O}})),a&&a(O==="off"?null:O)}else f(B=>({...B,[P]:{label:al({label:P,value:O,i18n:p}),value:O,isFullHD:t!==void 0&&Number(O!=null?O:"0")>=t}}));c({menuVisible:!1,subMenuVisible:!1}),S(Ws)},[t,p,c,r,a]),C=He.default.useCallback(P=>{c({menuVisible:!1,subMenuVisible:!0}),S(O=>({...O,generalMenu:!1,[P]:!0}))},[c]),T=He.default.useCallback(P=>()=>{c({menuVisible:!0,subMenuVisible:!1}),S(O=>({...O,generalMenu:!0,[P]:!1}))},[c]);He.default.useEffect(()=>{let P=O=>{if(!m.current)return;(O.composedPath?O.composedPath():[]).includes(m.current)||m.current.contains(O.target)||(c({menuVisible:!1,subMenuVisible:!1}),S(Ws))};return document.body.addEventListener("click",P),()=>document.body.removeEventListener("click",P)},[c]);let M=He.default.useMemo(()=>!r||r.length===0?[]:r.map(P=>({label:P.label,value:P.language})),[r]),L=He.default.useMemo(()=>oS({qualityOptions:n,captionOptions:M,live:e,i18n:p}),[e,n,M,p]),E=He.default.useMemo(()=>qe(u),[u]),_=He.default.useRef(d);return He.default.useEffect(()=>{var O,B,W,U;let P=_.current;if(P!==d){_.current=d;let X={};((O=P.speed)==null?void 0:O.value)!==((B=d.speed)==null?void 0:B.value)&&(X.speed=d.speed),((W=P.quality)==null?void 0:W.value)!==((U=d.quality)==null?void 0:U.value)&&(X.quality=d.quality),(X.speed||X.quality)&&s(X)}},[d,s]),{dropdownRef:m,settings:g,values:d,iconProps:E,settingsOptions:L,handleButtonClick:w,handleMenuItemClick:C,handleMenuClick:x,handleGoBack:T}},iS=h4;var lS=({live:e,qualities:t,captions:n,activeCaption:r,playbackRate:o,playbackQuality:i,fullHDQualityBreak:l,changeSettings:s,onCaptionChange:a,captionStyle:u,onCaptionStyleChange:p,fullscreen:c})=>{var M;let{i18n:m}=q(),[y,g]=tt.default.useState(!1),{dropdownRef:S,settings:k,values:h,iconProps:d,settingsOptions:f,handleButtonClick:w,handleMenuItemClick:x,handleMenuClick:C,handleGoBack:T}=iS({live:e,fullHDQualityBreak:l,qualities:t,captions:n,activeCaption:r,playbackRate:o,playbackQuality:i,changeSettings:s,onCaptionChange:a,fullscreen:c});return tt.default.useEffect(()=>{!k.captions&&y&&g(!1)},[k.captions,y]),tt.default.createElement(O5,{ref:S},tt.default.createElement(Ie,{label:m.settings,fullscreen:c},tt.default.createElement(z5,{type:"button","aria-label":m.settings,"aria-expanded":k.generalMenu,onClick:w,isFullscreen:c,isFullHD:(M=h.quality)==null?void 0:M.isFullHD,isExpanded:k.generalMenu},tt.default.createElement(Lc,{...d}))),tt.default.createElement(R5,{hiding:k.generalMenu,singleOption:e||t.length===0&&(!n||n.length===0),isFullscreen:c},tt.default.createElement(_5,null,f.map((L,E)=>{var _;return tt.default.createElement(D5,{key:E},tt.default.createElement(se,{onClick:()=>x(L.value),isFullscreen:c,isText:!0},tt.default.createElement(N5,null,L.label),tt.default.createElement(F5,null,tt.default.createElement(B5,null,(_=h[L.value])==null?void 0:_.label),tt.default.createElement(sl,{width:28,height:28}))))}))),f.map((L,E)=>{var _;return tt.default.createElement(tS,{key:E,hiding:k[L.value]&&!(L.value==="captions"&&y),title:L.label,options:L.options,value:(_=h[L.value])==null?void 0:_.value,isFullscreen:c,onClick:L.value==="captions"?P=>{P==="__options__"?g(!0):C(L.value)(P)}:C(L.value),goBack:T(L.value),showOptionsButton:L.value==="captions",onOptionsClick:P=>{P.stopPropagation(),g(!0)}})}),y&&u&&tt.default.createElement(Q5,{captionStyle:u,onStyleChange:p,onClose:()=>{g(!1),x("captions")},isFullscreen:c}))};lS.propTypes={live:Zt.default.bool.isRequired,qualities:Zt.default.arrayOf(Zt.default.shape({label:Zt.default.string.isRequired,value:Zt.default.string.isRequired}).isRequired).isRequired,captions:Zt.default.array,playbackRate:Zt.default.number.isRequired,playbackQuality:Zt.default.number,fullHDQualityBreak:Zt.default.number,changeSettings:Zt.default.func.isRequired,onCaptionChange:Zt.default.func,fullscreen:Zt.default.bool.isRequired};var sS=tt.default.memo(lS,(e,t)=>e.live===t.live&&e.qualities===t.qualities&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.changeSettings===t.changeSettings&&e.onCaptionChange===t.onCaptionChange&&e.captionStyle===t.captionStyle&&e.onCaptionStyleChange===t.onCaptionStyleChange&&e.fullscreen===t.fullscreen);var Pr=b(I()),Qs=b(J());var ul=b(I());var L1=({width:e=36,height:t=36,active:n=!1})=>n?ul.default.createElement("svg",{height:t,width:e,viewBox:"-6 -6 36 36",fill:"currentColor"},ul.default.createElement("path",{d:"M21.20 3.01L21 3H3L2.79 3.01C2.30 3.06 1.84 3.29 1.51 3.65C1.18 4.02 .99 4.50 1 5V19L1.01 19.20C1.05 19.66 1.26 20.08 1.58 20.41C1.91 20.73 2.33 20.94 2.79 20.99L3 21H21L21.20 20.98C21.66 20.94 22.08 20.73 22.41 20.41C22.73 20.08 22.94 19.66 22.99 19.20L23 19V5C23.00 4.50 22.81 4.02 22.48 3.65C22.15 3.29 21.69 3.06 21.20 3.01ZM9.03 8.08L9.29 8.16C9.79 8.35 10.24 8.65 10.60 9.05L10.77 9.26L10.83 9.34C10.96 9.55 11.01 9.80 10.96 10.05C10.92 10.29 10.79 10.51 10.59 10.66C10.40 10.81 10.15 10.89 9.91 10.87C9.66 10.85 9.43 10.74 9.26 10.57L9.19 10.49L9.11 10.39C8.98 10.24 8.81 10.12 8.62 10.05L8.54 10.02C8.32 9.97 8.10 10.00 7.91 10.11C7.67 10.24 7.48 10.43 7.35 10.67L7.28 10.79C7.09 11.16 6.99 11.58 7 12L7.00 12.16C7.02 12.52 7.11 12.88 7.28 13.20L7.35 13.32C7.48 13.56 7.67 13.75 7.91 13.88L7.99 13.92C8.16 14.00 8.35 14.02 8.54 13.97L8.62 13.94C8.85 13.85 9.05 13.70 9.19 13.50L9.26 13.43C9.44 13.24 9.68 13.13 9.93 13.12C10.19 13.11 10.44 13.20 10.63 13.37C10.82 13.53 10.94 13.77 10.97 14.02C11.00 14.27 10.93 14.53 10.77 14.73C10.39 15.23 9.88 15.61 9.29 15.83L9.03 15.91C8.43 16.06 7.79 16.01 7.21 15.77L6.97 15.65C6.42 15.35 5.95 14.90 5.64 14.36L5.50 14.12C5.21 13.55 5.04 12.92 5.00 12.27L5 12C4.99 11.26 5.17 10.53 5.50 9.87L5.64 9.63C5.96 9.09 6.42 8.64 6.97 8.34C7.60 8.00 8.34 7.91 9.03 8.08ZM17.03 8.08L17.29 8.16C17.79 8.35 18.24 8.65 18.60 9.05L18.77 9.26L18.83 9.34C18.96 9.55 19.01 9.80 18.96 10.05C18.92 10.29 18.79 10.51 18.59 10.66C18.40 10.81 18.15 10.89 17.91 10.87C17.66 10.85 17.43 10.74 17.26 10.57L17.19 10.49L17.11 10.39C16.98 10.24 16.81 10.12 16.62 10.05L16.54 10.02C16.32 9.97 16.10 10.00 15.91 10.11C15.67 10.24 15.48 10.43 15.35 10.67L15.28 10.79C15.09 11.16 14.99 11.58 15 12L15.00 12.16C15.02 12.52 15.11 12.88 15.28 13.20L15.35 13.32C15.48 13.56 15.67 13.75 15.91 13.88L15.99 13.92C16.16 14.00 16.35 14.02 16.54 13.97L16.62 13.94C16.85 13.85 17.05 13.70 17.19 13.50L17.26 13.43C17.44 13.24 17.68 13.13 17.93 13.12C18.19 13.11 18.44 13.20 18.63 13.37C18.82 13.53 18.94 13.77 18.97 14.02C19.00 14.27 18.93 14.53 18.77 14.73C18.39 15.23 17.88 15.61 17.29 15.83L17.03 15.91C16.43 16.06 15.79 16.01 15.21 15.77L14.97 15.65C14.42 15.35 13.95 14.90 13.64 14.36L13.50 14.12C13.21 13.55 13.04 12.92 13.00 12.27L13 12C12.99 11.26 13.17 10.53 13.50 9.87L13.64 9.63C13.96 9.09 14.42 8.64 14.97 8.34C15.60 8.00 16.34 7.91 17.03 8.08Z"})):ul.default.createElement("svg",{height:t,width:e,viewBox:"-6 -6 36 36",fill:"currentColor"},ul.default.createElement("path",{d:"M21.20 3.01L21 3H3L2.79 3.01C2.30 3.06 1.84 3.29 1.51 3.65C1.18 4.02 .99 4.50 1 5V19L1.01 19.20C1.05 19.66 1.26 20.08 1.58 20.41C1.91 20.73 2.33 20.94 2.79 20.99L3 21H21L21.20 20.98C21.66 20.94 22.08 20.73 22.41 20.41C22.73 20.08 22.94 19.66 22.99 19.20L23 19V5C23.00 4.50 22.81 4.02 22.48 3.65C22.15 3.29 21.69 3.06 21.20 3.01ZM3 19V5H21V19H3ZM6.97 8.34C6.42 8.64 5.96 9.09 5.64 9.63L5.50 9.87C5.16 10.53 4.99 11.26 5 12L5.00 12.27C5.04 12.92 5.21 13.55 5.50 14.12L5.64 14.36C5.96 14.90 6.42 15.35 6.97 15.65L7.21 15.77C7.79 16.01 8.43 16.06 9.03 15.91L9.29 15.83C9.88 15.61 10.39 15.23 10.77 14.73C10.93 14.53 11.00 14.27 10.97 14.02C10.94 13.77 10.82 13.53 10.63 13.37C10.44 13.20 10.19 13.11 9.93 13.12C9.68 13.13 9.44 13.24 9.26 13.43L9.19 13.50C9.05 13.70 8.85 13.85 8.62 13.94L8.54 13.97C8.35 14.02 8.16 14.00 7.99 13.92L7.91 13.88C7.67 13.75 7.48 13.56 7.35 13.32L7.28 13.20C7.11 12.88 7.02 12.52 7.00 12.16L7 12C6.99 11.58 7.09 11.16 7.28 10.79L7.35 10.67C7.48 10.43 7.67 10.24 7.91 10.11C8.10 10.00 8.32 9.97 8.54 10.02L8.62 10.05C8.81 10.12 8.98 10.24 9.11 10.39L9.19 10.49L9.26 10.57C9.43 10.74 9.66 10.85 9.91 10.87C10.15 10.89 10.40 10.81 10.59 10.66C10.79 10.51 10.92 10.29 10.96 10.05C11.01 9.80 10.96 9.55 10.83 9.34L10.77 9.26L10.60 9.05C10.24 8.65 9.79 8.35 9.29 8.16L9.03 8.08C8.34 7.91 7.60 8.00 6.97 8.34ZM14.97 8.34C14.42 8.64 13.96 9.09 13.64 9.63L13.50 9.87C13.16 10.53 12.99 11.26 13 12L13.00 12.27C13.04 12.92 13.21 13.55 13.50 14.12L13.64 14.36C13.96 14.90 14.42 15.35 14.97 15.65L15.21 15.77C15.79 16.01 16.43 16.06 17.03 15.91L17.29 15.83C17.88 15.61 18.39 15.23 18.77 14.73C18.93 14.53 19.00 14.27 18.97 14.02C18.94 13.77 18.82 13.53 18.63 13.37C18.44 13.20 18.19 13.11 17.93 13.12C17.68 13.13 17.44 13.24 17.26 13.43L17.19 13.50C17.05 13.70 16.85 13.85 16.62 13.94L16.54 13.97C16.35 14.02 16.16 14.00 15.99 13.92L15.91 13.88C15.67 13.75 15.48 13.56 15.35 13.32L15.28 13.20C15.11 12.88 15.02 12.52 15.00 12.16L15 12C14.99 11.58 15.09 11.16 15.28 10.79L15.35 10.67C15.48 10.43 15.67 10.24 15.91 10.11C16.10 10.00 16.32 9.97 16.54 10.02L16.62 10.05C16.81 10.12 16.98 10.24 17.11 10.39L17.19 10.49L17.26 10.57C17.43 10.74 17.66 10.85 17.91 10.87C18.15 10.89 18.40 10.81 18.59 10.66C18.79 10.51 18.92 10.29 18.96 10.05C19.01 9.80 18.96 9.55 18.83 9.34L18.77 9.26L18.60 9.05C18.24 8.65 17.79 8.35 17.29 8.16L17.03 8.08C16.34 7.91 15.60 8.00 14.97 8.34Z"}));L1.displayName="CaptionsIcon";L1.propTypes=ee;var Ac=ul.default.memo(L1,(e,t)=>e.width===t.width&&e.height===t.height&&e.active===t.active);var aS=({fullscreen:e,captions:t,activeCaption:n,onCaptionChange:r})=>{let{i18n:o}=q(),i=Pr.default.useMemo(()=>qe(e),[e]),l=Pr.default.useRef(null);Pr.default.useEffect(()=>{n&&(l.current=n)},[n]);let s=Pr.default.useCallback(a=>{var u,p;if(a.stopPropagation(),n)r(null);else{let c=l.current||((p=(u=t[0])==null?void 0:u.language)!=null?p:null);c&&r(c)}},[n,t,r]);return!t||t.length===0?null:Pr.default.createElement(Ie,{label:o.captions,fullscreen:e},Pr.default.createElement(se,{type:"button","aria-label":o.captions,onClick:s,isFullscreen:e},Pr.default.createElement(Ac,{...i,active:!!n})))};aS.propTypes={fullscreen:Qs.default.bool.isRequired,captions:Qs.default.array,activeCaption:Qs.default.string,onCaptionChange:Qs.default.func.isRequired};var uS=Pr.default.memo(aS,(e,t)=>e.fullscreen===t.fullscreen&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.onCaptionChange===t.onCaptionChange);var Ys=b(I());var y4=({fullscreen:e,contextMenuRef:t,pictureInPictureEnabled:n,pip:r,loop:o=!1,requestPictureInPicture:i,exitPictureInPicture:l,onLoopClick:s})=>{let a=Pe(),{i18n:u}=q(),[p,c]=Ys.default.useState({x:0,y:0}),m=Ys.default.useCallback(S=>{var L,E;S.preventDefault();let k=((L=t.current)==null?void 0:L.offsetWidth)||0,h=((E=t.current)==null?void 0:E.offsetHeight)||0,d=S.currentTarget.getBoundingClientRect(),f=S.clientX-d.left,w=S.clientY-d.top,x=d.width,C=d.height,T=f+k>x?f-k:f,M=w+h>C?w-h:w;c({x:T,y:M}),a({type:"contextMenuVisible",payload:!0})},[t,a]),y=Ys.default.useMemo(()=>qe(e),[e]),g=Ys.default.useMemo(()=>{let S=[{action:s,label:u.loop,iconType:"loop",iconProps:y,isCheckable:!0,defaultChecked:o}];return n&&S.push({action:r?l:i,label:u.pictureInPicture,iconType:"pip",iconProps:y,isCheckable:!1,defaultChecked:!1}),S},[y,u,n,r,o,i,l,s]);return{handleContextMenu:m,contextMenuPosition:p,contextMenuItems:g}},Rc=y4;var Fn=b(I());var Xs=b(I());var cS=Xs.default.forwardRef(({showing:e,positionX:t,positionY:n,...r},o)=>Xs.default.createElement("div",{ref:o,...r}));cS.displayName="StyledContextMenu";var dS=v(cS)`
  position: absolute;
  border-radius: 4px;
  background: rgba(15, 15, 15, 0.9);
  transition: all 0.1s;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  padding: 8px 0;
  z-index: 9999;
  color: #fff;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    PingFang SC,
    Hiragino Sans GB,
    Microsoft YaHei,
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol;
  font-variant: tabular-nums;
  font-size: 11px;
  line-height: 1.5;

  ${({showing:e,positionX:t,positionY:n})=>`
        display: ${e?"block":"none"};
        top: ${n}px;
        left: ${t}px;
    `}
`,pS=Xs.default.forwardRef(({isFullscreen:e,...t},n)=>Xs.default.createElement("div",{ref:n,...t}));pS.displayName="ContextMenuItem";var fS=v(pS)`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  height: 40px;
  &:hover {
    background: rgba(255, 255, 255, 0.1) !important;
  }
  ${({isFullscreen:e})=>e?`
    height: 49px;
    `:`
    height: 40px;
  `}
`,mS=v.span`
  padding: 0 12px;
  font-size: 118%;
`,hS=v.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  font-size: 109%;
  margin-right: 12px;
  margin-left: auto;
`;Yn();var _c=b(I());var M1=({width:e=36,height:t=36})=>_c.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},_c.default.createElement("path",{d:"M4.8 19.582 13.237 28.05 31.2 9.877 29.295 7.95 13.237 24.197 6.705 17.586Z"}));M1.displayName="CheckedIcon";M1.propTypes=ee;var yS=_c.default.memo(M1,re);var Dc=b(I());var I1=({width:e=36,height:t=36})=>Dc.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Dc.default.createElement("path",{d:"M 21.333 23.666 C 21.333 23.758 21.3 23.835 21.235 23.902 C 21.168 23.967 21.091 24 21 24 L 11 24 C 10.944 24 10.898 23.995 10.859 23.979 C 10.821 23.966 10.789 23.942 10.765 23.906 C 10.741 23.871 10.723 23.844 10.708 23.822 C 10.695 23.803 10.684 23.762 10.678 23.703 C 10.671 23.644 10.667 23.604 10.667 23.583 L 10.667 17.335 L 8.667 17.335 C 8.487 17.335 8.329 17.266 8.198 17.134 C 8.067 17.004 8 16.846 8 16.666 C 8 16.5 8.052 16.358 8.156 16.239 L 11.489 12.24 C 11.621 12.087 11.792 12.01 12 12.01 C 12.208 12.01 12.379 12.087 12.511 12.24 L 15.844 16.239 C 15.948 16.358 16 16.5 16 16.666 C 16 16.846 15.933 17.004 15.803 17.134 C 15.671 17.266 15.513 17.335 15.333 17.335 L 13.333 17.335 L 13.333 21.334 L 19.333 21.334 C 19.444 21.334 19.532 21.372 19.593 21.448 L 21.26 23.448 C 21.309 23.518 21.333 23.59 21.333 23.666 Z M 28 19.334 C 28 19.5 27.948 19.642 27.844 19.761 L 24.511 23.76 C 24.372 23.92 24.201 24 24 24 C 23.799 24 23.628 23.92 23.489 23.76 L 20.156 19.761 C 20.052 19.642 20 19.5 20 19.334 C 20 19.154 20.067 18.996 20.198 18.866 C 20.329 18.734 20.487 18.667 20.667 18.667 L 22.667 18.667 L 22.667 14.666 L 16.667 14.666 C 16.556 14.666 16.468 14.626 16.407 14.542 L 14.74 12.542 C 14.691 12.478 14.667 12.41 14.667 12.334 C 14.667 12.243 14.7 12.166 14.765 12.098 C 14.832 12.034 14.909 12 15 12 L 25 12 C 25.056 12 25.103 12.007 25.141 12.022 C 25.179 12.034 25.211 12.058 25.235 12.094 C 25.259 12.13 25.278 12.156 25.292 12.178 C 25.305 12.199 25.316 12.238 25.323 12.298 C 25.329 12.356 25.333 12.396 25.333 12.418 L 25.333 18.667 L 27.333 18.667 C 27.513 18.667 27.671 18.734 27.803 18.866 C 27.933 18.996 28 19.154 28 19.334 Z"}));I1.displayName="InLoopIcon";I1.propTypes=ee;var gS=Dc.default.memo(I1,re);var Nc=b(I());var O1=({width:e=36,height:t=36})=>Nc.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},Nc.default.createElement("path",{d:"M25 17H17v6H25zM29 25V10.981a1.989 1.989 0 0 0 -2 -1.981H9a1.989 1.989 0 0 0 -2 1.981V25c0 1.1 0.9 2 2 2h18c1.1 0 2 -0.9 2 -2m-2 0.019H9V10.969h18z"}));O1.displayName="PipIcon";O1.propTypes=ee;var vS=Nc.default.memo(O1,re);var g4={loop:gS,pip:vS},SS=Fn.default.forwardRef(({fullscreen:e,position:t,menuItems:n},r)=>{let o=q(),i=Pe(),l=Fn.default.useRef();return Fn.default.useEffect(()=>{let s=a=>{var c;let u=a.composedPath?a.composedPath():[];l.current&&u.includes(l.current)||((c=l.current)==null?void 0:c.contains(a.target))||i({type:"contextMenuVisible",payload:!1})};return window.addEventListener("click",s),()=>{window.removeEventListener("click",s)}},[i,l]),Fn.default.createElement(dS,{ref:p2([r,l]),showing:o.contextMenuVisible,positionX:t.x,positionY:t.y,"data-itemindex":"0","aria-checked":o.contextMenuVisible},n.map((s,a)=>{let u=g4[s.iconType];return Fn.default.createElement(fS,{key:a,onClick:()=>{s.action(),i({type:"contextMenuVisible",payload:!1})},isFullscreen:e},u&&Fn.default.createElement(u,{...s.iconProps}),Fn.default.createElement(mS,null,s.label),s.isCheckable&&s.defaultChecked&&Fn.default.createElement(hS,null,Fn.default.createElement(yS,{width:24,height:24})))}))});SS.displayName="ContextMenu";var Gs=Fn.default.memo(SS,(e,t)=>e.fullscreen===t.fullscreen&&e.position===t.position&&e.menuItems===t.menuItems);var wt=b(I()),cl=b(J());it();var Ks=b(I());var wS=Ks.default.forwardRef(({positionX:e,positionY:t,isDragging:n,...r},o)=>Ks.default.createElement("div",{ref:o,...r}));wS.displayName="CaptionContainer";var xS=v(wS)`
  position: absolute;
  pointer-events: auto;
  user-select: none;
  touch-action: none;
  transform: translateX(-50%);
  text-align: center;
  ${({positionX:e,positionY:t})=>`
    left: ${e}%;
    top: ${t}%;
  `}
  ${({isDragging:e})=>e?"cursor: grabbing; transition: none; z-index: 9;":"cursor: grab; transition: top 0.3s ease; z-index: 6;"}
`,CS=Ks.default.forwardRef(({backgroundColor:e,...t},n)=>Ks.default.createElement("div",{ref:n,...t}));CS.displayName="CaptionWindow";var kS=v(CS)`
  padding: 4px 8px;
  border-radius: 4px;
  width: max-content;
  max-width: 80vw;
  ${({backgroundColor:e})=>`background-color: ${e};`}
`,bS=v.span`
  display: block;
  padding: 2px 6px;
  border-radius: 2px;
  line-height: 1.4;
  font-weight: 500;
  white-space: pre-wrap;
  word-wrap: break-word;
`;var v4=74,S4=88,PS=74,w4=88,TS=12,A1=42,R1=58,x4=40,C4=60,ES=({cues:e,currentTime:t,captionStyle:n,isFullscreen:r,controlsVisible:o})=>{let i=wt.default.useRef(null),{hiding:l}=q(),s=Pe(),a=o||!l,u=a?v4:S4,[p,c]=wt.default.useState({x:50,y:PS}),[m,y]=wt.default.useState(!1),g=wt.default.useRef(!1),S=wt.default.useRef({x:0,y:0,startX:0,startY:0}),k=wt.default.useMemo(()=>!e||e.length===0?[]:_u(e,t),[e,t]),h=wt.default.useCallback(P=>{var W,U,X,me,R,N,ae,j;P.preventDefault(),P.stopPropagation();let O=(me=(X=P.clientX)!=null?X:(U=(W=P.touches)==null?void 0:W[0])==null?void 0:U.clientX)!=null?me:0,B=(j=(ae=P.clientY)!=null?ae:(N=(R=P.touches)==null?void 0:R[0])==null?void 0:N.clientY)!=null?j:0;S.current={x:O,y:B,startX:p.x,startY:p.y},y(!0),s({type:"captionDragging",payload:!0})},[p,s]),d=wt.default.useCallback(P=>{var ye,ge,De,Oe,st,at,ut,tn;if(!m||!i.current)return;let O=i.current.parentElement;if(!O)return;let B=(Oe=(De=P.clientX)!=null?De:(ge=(ye=P.touches)==null?void 0:ye[0])==null?void 0:ge.clientX)!=null?Oe:0,W=(tn=(ut=P.clientY)!=null?ut:(at=(st=P.touches)==null?void 0:st[0])==null?void 0:at.clientY)!=null?tn:0,U=O.getBoundingClientRect(),me=i.current.getBoundingClientRect().width/2/U.width*100,R=(B-S.current.x)/U.width*100,N=(W-S.current.y)/U.height*100,ae=Math.max(me,Math.min(100-me,S.current.startX+R)),j=Math.max(TS,Math.min(u,S.current.startY+N));if(a&&i.current){let Ht=i.current.offsetHeight/U.height*100,We=i.current.offsetWidth/U.width*100,Sn=j,Lr=j+Ht,rr=ae-We/2;if(ae+We/2>x4&&rr<C4&&Lr>A1&&Sn<R1){let nn=Lr-A1,wn=R1-Sn;nn<=wn?j=A1-Ht:j=R1,j=Math.max(TS,Math.min(u,j))}}c({x:ae,y:j})},[m,u,a]),f=wt.default.useCallback(()=>{y(!1),s({type:"captionDragging",payload:!1}),c(P=>{let B=P.y>=u-6;return g.current=!B,P})},[u,s]);if(wt.default.useEffect(()=>{c(P=>g.current?{...P,y:Math.min(P.y,u)}:{...P,y:a?PS:w4})},[u,a]),wt.default.useEffect(()=>(m&&(document.addEventListener("mousemove",d),document.addEventListener("mouseup",f),document.addEventListener("touchmove",d),document.addEventListener("touchend",f)),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",f)}),[m,d,f]),k.length===0)return null;let w=parseInt(n.fontSize)/100,C=`${(r?24:16)*w}px`,T=Di(n.fontColor,n.fontOpacity),M=Di(n.backgroundColor,n.backgroundOpacity),L=Di(n.windowColor,n.windowOpacity),E=Du(n.edgeStyle,"rgba(0,0,0,0.8)"),_=n.fontFamily==="small-caps"?{fontFamily:"sans-serif",fontVariant:"small-caps"}:{fontFamily:n.fontFamily,fontVariant:"normal"};return wt.default.createElement(xS,{ref:i,positionX:p.x,positionY:p.y,onMouseDown:h,onTouchStart:h,isDragging:m},wt.default.createElement(kS,{backgroundColor:L},k.map((P,O)=>wt.default.createElement(bS,{key:`${P.startTime}-${O}`,style:{fontSize:C,color:T,backgroundColor:M,textShadow:E,..._}},P.text))))};ES.propTypes={cues:cl.default.array,currentTime:cl.default.number.isRequired,captionStyle:cl.default.object.isRequired,isFullscreen:cl.default.bool,controlsVisible:cl.default.bool};var Bc=wt.default.memo(ES);var Zs=b(I());it();var LS="caption_style",k4=({captions:e,activeCaption:t})=>{let[n,r]=Zs.default.useState([]),[o,i]=Zs.default.useState(()=>{let s=Ri(LS);if(s)try{return{...eo,...JSON.parse(s)}}catch{return eo}return eo});Zs.default.useEffect(()=>{if(!t||!e||e.length===0){r([]);return}let s=e.find(u=>u.language===t);if(!s){r([]);return}let a=!1;return(async()=>{try{let p=await(await fetch(s.src)).text();if(a)return;let c=Ru(p);r(c)}catch(u){console.error("Failed to load caption file:",u),a||r([])}})(),()=>{a=!0}},[t,e]);let l=Zs.default.useCallback(s=>{i(s),_i(LS,JSON.stringify(s),365)},[]);return{cues:n,captionStyle:o,updateCaptionStyle:l}},Fc=k4;var MS=oe.default.forwardRef(({videoRef:e,playerRef:t,live:n=!1,hasResource:r=!1,hasAudio:o,prevented:i,loading:l,paused:s,ended:a,seeking:u,waiting:p,duration:c,buffered:m=null,currentTime:y,muted:g,volume:S,pictureInPictureEnabled:k,pip:h,fullscreen:d,qualities:f,captions:w,activeCaption:x,spriteVTTFile:C,chapters:T,heatmapData:M,fullHDQualityBreak:L,playbackRate:E,playbackQuality:_,loop:P,poster:O,onPlayClick:B,onPauseClick:W,onTogglePlay:U,changePlaybackRate:X,changePlayBackQuality:me,changeVolume:R,onMutedClick:N,changeCurrentTime:ae,requestPictureInPicture:j,exitPictureInPicture:ye,requestFullscreen:ge,exitFullscreen:De,onSeeking:Oe,onLoopClick:st,onCaptionChange:at,onPreventedClick:ut,onPrevious:tn,onNext:Ht,showNavButtons:We,kernelMsg:Sn=null},Lr)=>{let rr=Pe(),[Vn,or]=oe.default.useState(!1),nn=oe.default.useRef(),wn=oe.default.useRef(null),{showControls:rn,hideControls:Mr}=E5({hasResource:r,loading:l,prevented:i,paused:s,ended:a,waiting:p,seeking:u,kernelMsg:Sn}),{contextMenuItems:co,contextMenuPosition:Jo,handleContextMenu:yl}=Rc({fullscreen:d,contextMenuRef:wn,pip:h,loop:P,pictureInPictureEnabled:k,requestPictureInPicture:j,exitPictureInPicture:ye,onLoopClick:st}),{getChapterAtTime:Ir}=so({chapters:T,duration:c}),Or=oe.default.useMemo(()=>Ir(y),[Ir,y]),{cues:jt,captionStyle:po,updateCaptionStyle:gl}=Fc({captions:w,activeCaption:x});oe.default.useEffect(()=>{rr({videoRef:e,playerRef:t})},[e,t,rr]),oe.default.useImperativeHandle(Lr,()=>({showControls:rn,hideControls:Mr}),[rn,Mr]),oe.default.useEffect(()=>{if(t.current){let ir=t.current,on=Qe=>{let xn=uc[Qe.which||Qe.keyCode]||cc[Qe.key];clearTimeout(nn.current),xn==="ARROW_UP_KEY"||xn==="ARROW_DOWN_KEY"?(or(!0),nn.current=setTimeout(()=>or(!1),2e3)):or(!1)};return ir.addEventListener("keydown",on),()=>{clearTimeout(nn.current),ir.removeEventListener("keydown",on)}}},[g,S,t]);let ei=oe.default.useCallback(({quality:ir,speed:on})=>{var Qe;if(on&&X(Number((Qe=on.value)!=null?Qe:1)),ir){let xn=Number(ir.value);me(Number.isNaN(xn)?0:xn)}},[X,me]);return oe.default.createElement(Gn,{onContextMenu:yl,onMouseLeave:Mr,onMouseMove:rn,onTouchStart:rn,onMouseEnter:rn,onClick:rn},oe.default.createElement(Ls,{hasResource:r,prevented:i,paused:s,muted:g,currentTime:y,onClick:ut}),O&&oe.default.createElement(Is,{style:{opacity:y<=0||a?1:0}},oe.default.createElement(Os,{style:{backgroundImage:`url(${O})`}})),oe.default.createElement(Yg,null,oe.default.createElement(Xg,{style:{display:Vn?"inline-block":"none"}},Math.round(S*100),"%")),oe.default.createElement(Gs,{ref:wn,fullscreen:d,position:Jo,menuItems:co}),C&&oe.default.createElement(qs,{spriteVTTFile:C,duration:c,seekTime:y,visible:u}),x&&jt.length>0&&oe.default.createElement(Bc,{cues:jt,currentTime:y,captionStyle:po,isFullscreen:d,controlsVisible:s||a||l||p}),oe.default.createElement(Ug,{hasResource:r,loading:l,paused:s,ended:a,waiting:p,seeking:u,kernelMsg:Sn,onClick:U}),oe.default.createElement(ev,null,n===!1&&oe.default.createElement(Xv,{spriteVTTFile:C,chapters:T,heatmapData:M,currentTime:y,duration:c,buffered:m,onChange:ae,onSeeking:Oe,fullscreen:d}),oe.default.createElement(sv,{extra:oe.default.createElement(oe.default.Fragment,null,oe.default.createElement(uS,{fullscreen:d,captions:w,activeCaption:x,onCaptionChange:at}),oe.default.createElement(sS,{live:n,qualities:f,captions:w,activeCaption:x,playbackRate:E,playbackQuality:_,fullscreen:d,fullHDQualityBreak:L,changeSettings:ei,onCaptionChange:at,captionStyle:po,onCaptionStyleChange:gl}),oe.default.createElement(T5,{fullscreen:d,requestFullscreen:ge,exitFullscreen:De})),fullscreen:d},oe.default.createElement(Cc,{fullscreen:d,onPrevious:tn,showNavButtons:We}),oe.default.createElement(w5,{fullscreen:d,paused:s,ended:a,onPauseClick:W,onPlayClick:B}),oe.default.createElement(kc,{fullscreen:d,onNext:Ht,showNavButtons:We}),oe.default.createElement(f5,{fullscreen:d,isMuted:g,forceMuted:!o,volume:S,onMutedClick:N,changeVolume:R}),oe.default.createElement(g5,{live:n,currentTime:y,duration:c,chapterTitle:Or==null?void 0:Or.title}))),oe.default.createElement(Ms,{hasResource:r,loading:l,kernelMsg:Sn}))});MS.displayName="DesktopPlayerSkin";var IS=MS;var ke=b(I()),$=b(J());var OS=v.div`
  ${el}
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #eee;
  touch-action: manipulation;
  font-family: Helvetica, Arial, sans-serif;
`,AS=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  pointer-events: none;
  ${({$visible:e})=>e?Y`
          opacity: 1;
        `:Y`
          opacity: 0;
        `}
`;var uo=b(I()),Go=b(J());var RS=v.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 7;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${({$visible:e})=>e?Y`
          opacity: 1;
          pointer-events: auto;
        `:Y`
          opacity: 0;
          pointer-events: none;
        `}
`,_1=v.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;var fe=b(I());var _S=()=>fe.default.createElement(Zi,{width:"100%",height:"100%"}),DS=({width:e="100%",height:t="100%"}={})=>fe.default.createElement("svg",{viewBox:"0 0 56 56",preserveAspectRatio:"xMidYMid meet",fill:"none",width:e,height:t},fe.default.createElement("path",{fill:"currentColor",d:"M 41.543 28.638 L 15.115 43.848 C 14.81 44.028 14.548 44.048 14.329 43.91 C 14.11 43.772 14 43.526 14 43.168 L 14 12.832 C 14 12.474 14.11 12.226 14.329 12.09 C 14.548 11.952 14.81 11.972 15.115 12.152 L 41.543 27.36 C 41.848 27.54 42 27.752 42 28 C 42 28.248 41.848 28.46 41.543 28.638 Z"})),NS=({width:e="100%",height:t="100%"}={})=>fe.default.createElement("svg",{viewBox:"0 0 56 56",preserveAspectRatio:"xMidYMid meet",fill:"none",width:e,height:t},fe.default.createElement("rect",{fill:"currentColor",x:"12",y:"12",width:"8",height:"32"}),fe.default.createElement("rect",{fill:"currentColor",x:"36",y:"12",width:"8",height:"32"})),BS=({width:e="100%",height:t="100%"}={})=>fe.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},fe.default.createElement("path",{fill:"currentColor",d:"M 25.184 9.17 C 25.377 9.021 25.542 8.97 25.676 9.017 C 25.809 9.063 25.875 9.189 25.875 9.392 L 25.875 26.608 C 25.875 26.811 25.809 26.937 25.676 26.983 C 25.542 27.03 25.377 26.979 25.184 26.83 L 14.262 18.526 C 14.17 18.456 14.103 18.382 14.063 18.304 L 14.063 26.235 C 14.063 26.437 13.965 26.613 13.77 26.761 C 13.575 26.908 13.344 26.983 13.078 26.983 L 11.109 26.983 C 10.843 26.983 10.612 26.908 10.418 26.761 C 10.223 26.613 10.125 26.437 10.125 26.235 L 10.125 9.765 C 10.125 9.563 10.223 9.387 10.418 9.239 C 10.612 9.092 10.843 9.017 11.109 9.017 L 13.078 9.017 C 13.344 9.017 13.575 9.092 13.77 9.239 C 13.965 9.387 14.063 9.563 14.063 9.765 L 14.063 17.695 C 14.103 17.617 14.17 17.544 14.262 17.473 Z"})),FS=({width:e="100%",height:t="100%"}={})=>fe.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},fe.default.createElement("path",{fill:"currentColor",d:"M 10.816 9.17 C 10.623 9.021 10.458 8.97 10.324 9.017 C 10.191 9.063 10.125 9.189 10.125 9.392 L 10.125 26.608 C 10.125 26.811 10.191 26.937 10.324 26.983 C 10.458 27.03 10.623 26.979 10.816 26.83 L 21.738 18.526 C 21.83 18.456 21.897 18.382 21.937 18.304 L 21.937 26.235 C 21.937 26.437 22.035 26.613 22.23 26.761 C 22.425 26.908 22.656 26.983 22.922 26.983 L 24.891 26.983 C 25.157 26.983 25.388 26.908 25.582 26.761 C 25.777 26.613 25.875 26.437 25.875 26.235 L 25.875 9.765 C 25.875 9.563 25.777 9.387 25.582 9.239 C 25.388 9.092 25.157 9.017 24.891 9.017 L 22.922 9.017 C 22.656 9.017 22.425 9.092 22.23 9.239 C 22.035 9.387 21.937 9.563 21.937 9.765 L 21.937 17.695 C 21.897 17.617 21.83 17.544 21.738 17.473 Z"})),zS=({width:e="100%",height:t="100%"}={})=>fe.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},fe.default.createElement("path",{fill:"currentColor",d:"M 10 16 L 10 10.5 C 10 10.224 10.224 10 10.5 10 L 16 10 L 16 12 L 12 12 L 12 16 Z M 26 16 L 26 12 L 22 12 L 22 10 L 26.5 10 C 26.776 10 27 10.224 27 10.5 L 27 16 Z M 26 20 L 27 20 L 27 25.5 C 27 25.776 26.776 26 26.5 26 L 22 26 L 22 24 L 26 24 Z M 10 20 L 10 25.5 C 10 25.776 10.224 26 10.5 26 L 16 26 L 16 24 L 12 24 L 12 20 Z"})),VS=({width:e="100%",height:t="100%"}={})=>fe.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},fe.default.createElement("path",{fill:"currentColor",d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"})),Js=({width:e="100%",height:t="100%"}={})=>fe.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},fe.default.createElement("path",{fill:"currentColor",d:"M 27.452 17.699 C 27.408 16.709 27.211 15.734 26.866 14.806 L 28.396 13.381 C 28.685 13.102 28.753 12.663 28.561 12.31 C 27.951 11.182 27.166 10.156 26.237 9.27 C 25.954 8.996 25.522 8.948 25.187 9.154 L 23.379 10.28 C 22.566 9.715 21.667 9.282 20.72 8.996 L 20.534 6.903 C 20.504 6.5 20.195 6.173 19.794 6.12 C 19.237 6.039 18.673 5.999 18.11 6 C 17.391 5.997 16.675 6.061 15.969 6.188 C 15.587 6.249 15.293 6.558 15.253 6.941 L 15.029 9.081 C 14.156 9.378 13.331 9.798 12.579 10.333 L 10.819 9.197 C 10.483 8.981 10.043 9.025 9.757 9.304 C 8.811 10.21 8.016 11.262 7.405 12.422 C 7.218 12.768 7.281 13.198 7.563 13.475 L 9.105 14.96 C 8.821 15.752 8.641 16.578 8.573 17.418 L 6.586 18.115 C 6.207 18.24 5.966 18.613 6.004 19.009 C 6.091 20.334 6.394 21.637 6.903 22.862 C 7.048 23.232 7.431 23.454 7.824 23.398 L 9.907 23.098 C 10.312 23.783 10.803 24.414 11.367 24.977 L 10.631 27.005 C 10.496 27.377 10.624 27.79 10.943 28.021 C 12.006 28.799 13.192 29.398 14.451 29.793 C 14.833 29.917 15.251 29.758 15.454 29.413 L 16.53 27.61 C 16.993 27.687 17.463 27.73 17.933 27.738 C 18.287 27.74 18.641 27.723 18.993 27.682 L 20.067 29.544 C 20.254 29.895 20.655 30.072 21.041 29.972 C 22.305 29.638 23.505 29.094 24.591 28.367 C 24.927 28.146 25.07 27.724 24.937 27.344 L 24.249 25.349 C 24.931 24.743 25.525 24.043 26.009 23.269 L 28.091 23.603 C 28.483 23.667 28.868 23.452 29.021 23.084 C 29.543 21.894 29.871 20.629 29.993 19.335 C 30.046 18.931 29.807 18.547 29.423 18.414 Z M 27.689 21.779 L 25.161 21.376 L 24.556 22.344 C 24.161 22.981 23.677 23.557 23.118 24.056 L 22.261 24.831 L 23.118 27.263 C 22.523 27.611 21.894 27.898 21.241 28.119 L 19.957 25.867 L 18.855 25.979 C 18.571 26.012 18.284 26.027 17.999 26.026 C 17.611 26.017 17.224 25.982 16.842 25.919 L 15.651 25.693 L 14.341 27.917 C 13.685 27.671 13.059 27.356 12.472 26.976 L 13.368 24.531 L 12.575 23.749 C 12.116 23.283 11.715 22.765 11.38 22.203 L 10.794 21.217 L 8.261 21.581 C 8.035 20.918 7.875 20.232 7.781 19.536 L 10.211 18.68 L 10.288 17.558 C 10.34 16.872 10.486 16.198 10.717 15.551 L 11.088 14.488 L 9.23 12.695 C 9.587 12.11 10.002 11.56 10.467 11.056 L 12.61 12.442 L 13.547 11.77 C 14.163 11.336 14.838 10.991 15.552 10.747 L 16.602 10.396 L 16.872 7.803 C 17.278 7.748 17.687 7.719 18.096 7.712 C 18.358 7.712 18.619 7.712 18.886 7.751 L 19.113 10.319 L 20.23 10.657 C 21.005 10.891 21.74 11.245 22.406 11.707 L 23.327 12.349 L 25.512 10.987 C 25.964 11.476 26.369 12.005 26.721 12.571 L 24.853 14.326 L 25.281 15.417 C 25.56 16.176 25.723 16.973 25.761 17.78 L 25.813 18.94 L 28.219 19.819 C 28.109 20.488 27.93 21.144 27.689 21.779 Z M 17.972 22.267 C 14.675 22.267 12.614 18.699 14.262 15.845 C 15.912 12.992 20.034 12.992 21.683 15.845 C 22.065 16.507 22.263 17.257 22.257 18.02 C 22.252 20.377 20.331 22.282 17.972 22.267 Z M 18.028 15.417 C 16.05 15.395 14.788 17.52 15.758 19.244 C 16.727 20.968 19.2 20.998 20.209 19.296 C 20.444 18.901 20.568 18.447 20.568 17.987 C 20.568 16.579 19.436 15.433 18.028 15.417 Z"})),$S=({width:e="100%",height:t="100%"}={})=>fe.default.createElement("svg",{viewBox:"0 0 36 36",width:e,height:t},fe.default.createElement("path",{fill:"currentColor",d:"M 24.344 15.999 L 19.6 20.544 L 19.169 20.956 L 18.613 20.807 C 18.389 20.746 18.228 20.723 17.998 20.724 C 17.263 20.682 16.798 20.925 16.316 21.387 C 15.84 21.844 15.601 22.235 15.653 22.903 C 15.65 23.104 15.671 23.237 15.732 23.441 L 15.921 24.07 L 15.436 24.536 L 14.105 25.811 C 13.991 25.972 13.943 26.063 13.937 26.177 C 13.932 26.29 13.954 26.362 14.1 26.539 C 14.267 26.702 14.454 26.723 14.587 26.73 C 14.72 26.736 14.824 26.733 15.067 26.545 L 16.4 25.266 L 16.831 24.854 L 17.387 25.003 C 17.611 25.064 17.777 25.087 18.001 25.085 C 18.737 25.128 19.202 24.884 19.684 24.422 C 20.16 23.966 20.399 23.576 20.346 22.906 C 20.345 22.701 20.328 22.567 20.268 22.37 L 20.076 21.743 L 20.564 21.275 L 25.308 16.73 C 25.454 16.554 25.497 16.41 25.455 16.238 C 25.414 16.065 25.322 15.903 25.01 15.835 C 24.703 15.762 24.571 15.802 24.345 15.997 M 18.101 6 C 18.101 6 16.905 6.031 16.356 6.084 C 15.807 6.137 15.292 6.213 14.761 6.317 C 13.701 6.526 12.725 6.818 11.75 7.213 C 9.801 8.002 8.134 9.089 6.662 10.499 C 3.715 13.324 1.949 16.988 2.001 21.269 C 1.967 24.34 2.871 27.191 4.685 29.726 C 4.82 29.961 4.985 30.022 5.284 29.994 C 5.583 29.965 5.703 29.913 5.825 29.665 C 5.895 29.443 5.902 29.37 5.784 29.167 C 2.764 24.665 2.661 19.146 4.809 14.968 C 6.952 10.799 11.515 7.546 17.036 7.115 C 22.565 6.846 27.525 9.492 30.218 13.351 C 32.916 17.219 33.57 22.701 31.19 27.546 C 30.907 28.096 30.57 28.655 30.217 29.164 C 30.164 29.383 30.097 29.407 30.175 29.662 C 30.25 29.906 30.341 29.989 30.708 29.989 C 30.683 29.99 30.723 29.992 30.765 29.992 C 31.033 29.992 31.173 29.907 31.315 29.726 C 33.128 27.19 34.033 24.344 33.999 21.273 C 34.051 16.991 32.284 13.324 29.337 10.499 C 26.384 7.67 22.505 5.962 18 6.004"})),qS=({width:e=24,height:t=24}={})=>fe.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},fe.default.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),fe.default.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),HS=({width:e=24,height:t=24}={})=>fe.default.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},fe.default.createElement("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"})),Xo=({width:e=20,height:t=20}={})=>fe.default.createElement("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",width:e,height:t},fe.default.createElement("path",{fill:"#ccc",d:"M8 5v14l11-7z"})),jS=({width:e="100%",height:t="100%"}={})=>fe.default.createElement("svg",{viewBox:"-6 -6 36 36",fill:"currentColor",width:e,height:t},fe.default.createElement("path",{d:"M21.20 3.01L21 3H3L2.79 3.01C2.30 3.06 1.84 3.29 1.51 3.65C1.18 4.02 .99 4.50 1 5V19L1.01 19.20C1.05 19.66 1.26 20.08 1.58 20.41C1.91 20.73 2.33 20.94 2.79 20.99L3 21H21L21.20 20.98C21.66 20.94 22.08 20.73 22.41 20.41C22.73 20.08 22.94 19.66 22.99 19.20L23 19V5C23.00 4.50 22.81 4.02 22.48 3.65C22.15 3.29 21.69 3.06 21.20 3.01ZM3 19V5H21V19H3ZM6.97 8.34C6.42 8.64 5.96 9.09 5.64 9.63L5.50 9.87C5.16 10.53 4.99 11.26 5 12L5.00 12.27C5.04 12.92 5.21 13.55 5.50 14.12L5.64 14.36C5.96 14.90 6.42 15.35 6.97 15.65L7.21 15.77C7.79 16.01 8.43 16.06 9.03 15.91L9.29 15.83C9.88 15.61 10.39 15.23 10.77 14.73C10.93 14.53 11.00 14.27 10.97 14.02C10.94 13.77 10.82 13.53 10.63 13.37C10.44 13.20 10.19 13.11 9.93 13.12C9.68 13.13 9.44 13.24 9.26 13.43L9.19 13.50C9.05 13.70 8.85 13.85 8.62 13.94L8.54 13.97C8.35 14.02 8.16 14.00 7.99 13.92L7.91 13.88C7.67 13.75 7.48 13.56 7.35 13.32L7.28 13.20C7.11 12.88 7.02 12.52 7.00 12.16L7 12C6.99 11.58 7.09 11.16 7.28 10.79L7.35 10.67C7.48 10.43 7.67 10.24 7.91 10.11C8.10 10.00 8.32 9.97 8.54 10.02L8.62 10.05C8.81 10.12 8.98 10.24 9.11 10.39L9.19 10.49L9.26 10.57C9.43 10.74 9.66 10.85 9.91 10.87C10.15 10.89 10.40 10.81 10.59 10.66C10.79 10.51 10.92 10.29 10.96 10.05C11.01 9.80 10.96 9.55 10.83 9.34L10.77 9.26L10.60 9.05C10.24 8.65 9.79 8.35 9.29 8.16L9.03 8.08C8.34 7.91 7.60 8.00 6.97 8.34ZM14.97 8.34C14.42 8.64 13.96 9.09 13.64 9.63L13.50 9.87C13.16 10.53 12.99 11.26 13 12L13.00 12.27C13.04 12.92 13.21 13.55 13.50 14.12L13.64 14.36C13.96 14.90 14.42 15.35 14.97 15.65L15.21 15.77C15.79 16.01 16.43 16.06 17.03 15.91L17.29 15.83C17.88 15.61 18.39 15.23 18.77 14.73C18.93 14.53 19.00 14.27 18.97 14.02C18.94 13.77 18.82 13.53 18.63 13.37C18.44 13.20 18.19 13.11 17.93 13.12C17.68 13.13 17.44 13.24 17.26 13.43L17.19 13.50C17.05 13.70 16.85 13.85 16.62 13.94L16.54 13.97C16.35 14.02 16.16 14.00 15.99 13.92L15.91 13.88C15.67 13.75 15.48 13.56 15.35 13.32L15.28 13.20C15.11 12.88 15.02 12.52 15.00 12.16L15 12C14.99 11.58 15.09 11.16 15.28 10.79L15.35 10.67C15.48 10.43 15.67 10.24 15.91 10.11C16.10 10.00 16.32 9.97 16.54 10.02L16.62 10.05C16.81 10.12 16.98 10.24 17.11 10.39L17.19 10.49L17.26 10.57C17.43 10.74 17.66 10.85 17.91 10.87C18.15 10.89 18.40 10.81 18.59 10.66C18.79 10.51 18.92 10.29 18.96 10.05C19.01 9.80 18.96 9.55 18.83 9.34L18.77 9.26L18.60 9.05C18.24 8.65 17.79 8.35 17.29 8.16L17.03 8.08C16.34 7.91 15.60 8.00 14.97 8.34Z"}));var US=({visible:e,captions:t,activeCaption:n,onCaptionChange:r,onOpenSettings:o,settingsLabel:i,captionsLabel:l})=>{let s=t&&t.length>0,a=uo.default.useCallback(u=>{u.stopPropagation(),n?r(null):t&&t.length>0&&r(t[0].language)},[n,t,r]);return uo.default.createElement(RS,{$visible:e},s&&uo.default.createElement(_1,{onClick:a,"aria-label":l||"Captions"},uo.default.createElement(Ac,{width:24,height:24,active:!!n})),uo.default.createElement(_1,{onClick:o,"aria-label":i},uo.default.createElement(Js,null)))};US.propTypes={visible:Go.default.bool.isRequired,captions:Go.default.array,activeCaption:Go.default.string,onCaptionChange:Go.default.func,onOpenSettings:Go.default.func.isRequired,settingsLabel:Go.default.string.isRequired};var WS=uo.default.memo(US);var xt=b(I()),qt=b(J());var QS=v.div`
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  z-index: 7;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${({$visible:e})=>e?Y`
          opacity: 1;
          pointer-events: auto;
        `:Y`
          opacity: 0;
          pointer-events: none;
        `}
`,YS=v.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`,D1=v.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0.85;
  &:hover:not(:disabled) {
    opacity: 1;
  }
  &:disabled {
    color: #757575 !important;
    opacity: 1;
    cursor: default;
  }
`,b4=nc`
  to {
    transform: rotate(360deg);
  }
`,XS=v.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: ${b4} 0.8s linear infinite;
  }
`;var GS=({visible:e,isLoading:t,paused:n,ended:r,onPlayPause:o,onPrevious:i,onNext:l,showNavButtons:s=!1,i18n:a})=>{let u=typeof i=="function",p=typeof l=="function",c=u||s,m=p||s,y=xt.default.useCallback(k=>{k.stopPropagation(),u&&i()},[u,i]),g=xt.default.useCallback(k=>{k.stopPropagation(),p&&l()},[p,l]),S=xt.default.useCallback(k=>{k.stopPropagation(),o()},[o]);return xt.default.createElement(QS,{$visible:e},c&&xt.default.createElement(D1,{"aria-label":a.previous,onClick:y,disabled:!u},xt.default.createElement(BS,null)),t?xt.default.createElement(XS,{onClick:k=>k.stopPropagation()},xt.default.createElement("div",null)):xt.default.createElement(YS,{"aria-label":n?a.play:a.pause,onClick:S},r?xt.default.createElement(_S,null):n?xt.default.createElement(DS,null):xt.default.createElement(NS,null)),m&&xt.default.createElement(D1,{"aria-label":a.next,onClick:g,disabled:!p},xt.default.createElement(FS,null)))};GS.propTypes={visible:qt.default.bool.isRequired,isLoading:qt.default.bool.isRequired,paused:qt.default.bool.isRequired,ended:qt.default.bool.isRequired,onPlayPause:qt.default.func.isRequired,onPrevious:qt.default.func,onNext:qt.default.func,showNavButtons:qt.default.bool,i18n:qt.default.shape({previous:qt.default.string,next:qt.default.string,play:qt.default.string,pause:qt.default.string}).isRequired};var KS=xt.default.memo(GS);var zn=b(I()),Ce=b(J());var ZS=v.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 7;
  display: flex;
  align-items: center;
  padding: 0px 16px 8px 16px;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${({$visible:e})=>e?Y`
          opacity: 1;
          pointer-events: auto;
        `:Y`
          opacity: 0;
          pointer-events: none;
        `}
`,JS=v.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 12px 0 16px;
`,e3=v.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  flex-shrink: 0;
`,t3=v.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0.8;
  flex-shrink: 0;
  margin-left: 4px;
  & > svg {
    width: 36px;
    height: 36px;
  }
  &:hover {
    opacity: 1;
  }
`;var je=b(I()),lt=b(J());var n3=v.div`
  flex: 1;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  touch-action: none;
`,r3=v.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
`,o3=v.div`
  position: absolute;
  left: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1px;
  transform-origin: left;
`,i3=v.div`
  position: absolute;
  left: 0;
  height: 2px;
  background: #cb0e0b;
  border-radius: 1px;
  transform-origin: left;
`,l3=v.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #cb0e0b;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 4;
`,s3=v.div`
  position: absolute;
  bottom: 20px;
  transform: translateX(-50%);
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  padding: 4px 0;
  white-space: pre-line;
  text-align: center;
  pointer-events: none;
  line-height: 1.3;
  z-index: 10;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
`;var dl=b(I()),er=b(J());var a3=v.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: stretch;
  gap: 2px;
  height: 2px;
`,u3=v.div`
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
  height: 2px;
  transition: transform 0.1s ease;
  transform-origin: center center;
`,c3=v.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`,d3=v.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #cb0e0b;
`;var p3=({segments:e,currentTime:t,duration:n,buffered:r,hoveredIndex:o})=>{if(e.length===0||n<=0)return null;let i=(r||0)*n;return dl.default.createElement(a3,null,e.map((l,s)=>{let a=l.endTime-l.startTime,u=a/n*100,p=0;t>=l.endTime?p=100:t>l.startTime&&(p=(t-l.startTime)/a*100);let c=0;i>=l.endTime?c=100:i>l.startTime&&(c=(i-l.startTime)/a*100);let m=o===s;return dl.default.createElement(u3,{key:s,style:{width:`${u}%`,transform:m?"scaleY(2.5)":"none"}},dl.default.createElement(c3,{style:{width:`${c}%`}}),dl.default.createElement(d3,{style:{width:`${p}%`}}))}))};p3.propTypes={segments:er.default.arrayOf(er.default.shape({title:er.default.string.isRequired,startTime:er.default.number.isRequired,endTime:er.default.number.isRequired})).isRequired,currentTime:er.default.number.isRequired,duration:er.default.number.isRequired,buffered:er.default.number,hoveredIndex:er.default.number};var f3=dl.default.memo(p3);Yn();var m3=({currentTime:e,duration:t,buffered:n,chapters:r,heatmapData:o,getChapterAtTime:i,onChange:l,onSeeking:s})=>{let a=je.default.useRef(null),u=je.default.useRef(!1),[p,c]=je.default.useState(!1),{i18n:m}=q(),y=t>0?e/t:0,g=n||0,S=r&&r.length>0,{strokePath:k,hasHeatmap:h}=gc({heatmapData:o,duration:t}),d=je.default.useMemo(()=>!S||!i?null:i(e),[S,i,e]),f=je.default.useCallback(C=>{if(!a.current||!t)return;let T=a.current.getBoundingClientRect(),L=Math.max(0,Math.min(1,(C-T.left)/T.width))*t;l(L)},[t,l]),w=je.default.useCallback(C=>{u.current=!0,c(!0),s&&s(!0),f(C.clientX);let T=L=>{u.current&&f(L.clientX)},M=()=>{u.current=!1,c(!1),s&&s(!1),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",M)},[f,s]),x=je.default.useCallback(C=>{C.preventDefault(),u.current=!0,c(!0),s&&s(!0);let T=C.touches[0];f(T.clientX);let M=E=>{E.preventDefault(),u.current&&E.touches[0]&&f(E.touches[0].clientX)},L=()=>{u.current=!1,c(!1),s&&s(!1),document.removeEventListener("touchmove",M),document.removeEventListener("touchend",L)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",L)},[f,s]);return je.default.useEffect(()=>{let C=a.current;if(C)return C.addEventListener("touchstart",x,{passive:!1}),()=>{C.removeEventListener("touchstart",x)}},[x]),je.default.createElement(n3,{ref:a,role:"slider","aria-label":m.timeBar,"aria-valuemin":0,"aria-valuemax":Math.round(t),"aria-valuenow":Math.round(e),"aria-valuetext":Ge(Math.round(e)),tabIndex:0,onMouseDown:w},S?je.default.createElement(f3,{segments:r,currentTime:e,duration:t,buffered:n,hoveredIndex:p&&d?r.findIndex(C=>C.startTime===d.startTime):-1}):je.default.createElement(je.default.Fragment,null,je.default.createElement(r3,null),je.default.createElement(o3,{style:{width:`${g*100}%`}}),je.default.createElement(i3,{style:{width:`${y*100}%`}})),je.default.createElement(l3,{style:{left:`${y*100}%`}}),h&&je.default.createElement(yc,{strokePath:k,currentTime:e,duration:t,isFullscreen:!1,bottomOffset:14,visible:p}),S&&p&&d&&je.default.createElement(s3,{style:{left:`${y*100}%`}},d.title,`
`,Ge(Math.round(e))))};m3.propTypes={currentTime:lt.default.number.isRequired,duration:lt.default.number.isRequired,buffered:lt.default.number,chapters:lt.default.arrayOf(lt.default.shape({title:lt.default.string.isRequired,startTime:lt.default.number.isRequired,endTime:lt.default.number.isRequired})),heatmapData:lt.default.arrayOf(lt.default.shape({startTime:lt.default.number.isRequired,endTime:lt.default.number.isRequired,value:lt.default.number.isRequired})),getChapterAtTime:lt.default.func,onChange:lt.default.func.isRequired,onSeeking:lt.default.func};var h3=je.default.memo(m3);Yn();var y3=({visible:e,live:t,currentTime:n,duration:r,buffered:o,fullscreen:i,chapters:l,heatmapData:s,getChapterAtTime:a,i18n:u,onChangeCurrentTime:p,onSeeking:c,onRequestFullscreen:m,onExitFullscreen:y})=>zn.default.createElement(ZS,{$visible:e,onClick:g=>g.stopPropagation()},t===!1&&zn.default.createElement(zn.default.Fragment,null,zn.default.createElement(e3,null,Ge(Math.round(n))," / ",Ge(Math.round(r))),zn.default.createElement(JS,null,zn.default.createElement(h3,{currentTime:n,duration:r,buffered:o,chapters:l,heatmapData:s,getChapterAtTime:a,onChange:p,onSeeking:c}))),zn.default.createElement(t3,{"aria-label":i?u.exitFullscreen:u.fullscreen,onClick:i?y:m},i?zn.default.createElement(VS,null):zn.default.createElement(zS,null)));y3.propTypes={visible:Ce.default.bool.isRequired,live:Ce.default.bool.isRequired,currentTime:Ce.default.number.isRequired,duration:Ce.default.number.isRequired,buffered:Ce.default.number,fullscreen:Ce.default.bool.isRequired,chapters:Ce.default.arrayOf(Ce.default.shape({title:Ce.default.string.isRequired,startTime:Ce.default.number.isRequired,endTime:Ce.default.number.isRequired})),heatmapData:Ce.default.arrayOf(Ce.default.shape({startTime:Ce.default.number.isRequired,endTime:Ce.default.number.isRequired,value:Ce.default.number.isRequired})),getChapterAtTime:Ce.default.func,i18n:Ce.default.shape({exitFullscreen:Ce.default.string,fullscreen:Ce.default.string}).isRequired,onChangeCurrentTime:Ce.default.func.isRequired,onSeeking:Ce.default.func,onRequestFullscreen:Ce.default.func.isRequired,onExitFullscreen:Ce.default.func.isRequired};var g3=zn.default.memo(y3);var Ue=b(I()),Tr=b(J());var P4=nc`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`,N1=v.div`
  position: absolute;
  top: 0;
  ${({direction:e})=>e==="forward"?"right: 0;":"left: 0;"}
  width: 55%;
  height: 100%;
  z-index: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  ${({direction:e})=>e==="forward"?Y`
          background: linear-gradient(to left, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%);
        `:Y`
          background: linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%);
        `}
`,B1=v.div`
  display: flex;
  align-items: center;
  ${({direction:e})=>e==="backward"?"transform: rotate(180deg);":""}
  & > svg {
    width: 20px;
    height: 20px;
    animation: ${P4} 1s infinite;
    opacity: 0;
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }
`,F1=v.span`
  font-size: 12px;
  color: #ccc;
  margin-top: 4px;
`,z1=v.button`
  position: absolute;
  top: 0;
  ${({direction:e})=>e==="forward"?"right: 0;":"left: 0;"}
  width: 50%;
  height: 100%;
  z-index: 6;
  background: none;
  border: none;
  padding: 0;
  cursor: default;
  -webkit-tap-highlight-color: transparent;
`;var v3=({skipState:e,onTapLeft:t,onTapRight:n,i18n:r})=>{let o=(r==null?void 0:r.seconds)||"seconds",i=Ue.default.useCallback(s=>{s.stopPropagation(),t()},[t]),l=Ue.default.useCallback(s=>{s.stopPropagation(),n()},[n]);return Ue.default.createElement(Ue.default.Fragment,null,Ue.default.createElement(z1,{direction:"backward",onClick:i,"aria-label":(r==null?void 0:r.skipBackward)||"Skip backward"}),Ue.default.createElement(z1,{direction:"forward",onClick:l,"aria-label":(r==null?void 0:r.skipForward)||"Skip forward"}),e.visible&&e.direction==="backward"&&Ue.default.createElement(N1,{direction:"backward"},Ue.default.createElement(B1,{direction:"backward"},Ue.default.createElement(Xo,null),Ue.default.createElement(Xo,null),Ue.default.createElement(Xo,null)),Ue.default.createElement(F1,null,e.seconds," ",o)),e.visible&&e.direction==="forward"&&Ue.default.createElement(N1,{direction:"forward"},Ue.default.createElement(B1,{direction:"forward"},Ue.default.createElement(Xo,null),Ue.default.createElement(Xo,null),Ue.default.createElement(Xo,null)),Ue.default.createElement(F1,null,e.seconds," ",o)))};v3.propTypes={skipState:Tr.default.shape({direction:Tr.default.oneOf(["forward","backward",null]),visible:Tr.default.bool.isRequired,seconds:Tr.default.number.isRequired}).isRequired,onTapLeft:Tr.default.func.isRequired,onTapRight:Tr.default.func.isRequired,i18n:Tr.default.shape({seconds:Tr.default.string})};var S3=Ue.default.memo(v3);var H=b(I()),tr=b(J());var w3=v.div`
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  left: 50%;
  top: 50%;
  opacity: ${({$visible:e})=>e?1:0};
  transform: ${({$visible:e})=>e?"translate(-50%, -50%)":"translate(-50%, -100%)"};
  pointer-events: ${({$visible:e})=>e?"auto":"none"};
  transition: all 0.4s ease;
  will-change: transform;
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  box-sizing: border-box;
`,x3=v.div`
  padding: 9px 18px 9px 36px;
  font-size: 20px;
  line-height: 28px;
  white-space: nowrap;
  height: 42px;
  width: 100%;
  color: #fff;
  position: relative;
  z-index: 6;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`,C3=v.span`
  flex: 1;
  font-weight: 400;
`,zc=v.button`
  position: absolute;
  top: 8px;
  border: 0;
  background: none;
  color: #fff;
  cursor: pointer;
  z-index: 6;
  padding: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({$position:e})=>e==="left"?Y`
          left: 6px;
        `:Y`
          right: 6px;
        `}
`,k3=v.ul`
  padding: 4px 0;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  list-style: none;
`,Vc=v.li`
  width: 86px;
  height: 78px;
  overflow: hidden;
  padding: 4px;
  cursor: pointer;
  text-align: center;
  position: relative;
  border-radius: 6px;
  font-size: 15px;
  line-height: 1;
  display: block;
  box-sizing: border-box;
  white-space: nowrap;
  color: #fff;
`,$c=v.div`
  display: block;
  width: 36px;
  height: 36px;
  margin: 0 auto 5px;
  position: relative;
  top: 5px;
`,qc=v.span`
  display: block;
  font-size: 15px;
  color: #fff;
`,Hc=v.div`
  font-size: 11px;
  color: #ccc;
  line-height: 1;
  display: block;
  margin: 6px 0 0;
  padding: 0;
  text-align: center;
`,b3=v.div`
  width: 100%;
  flex: 1;
  position: relative;
  overflow: hidden;
  opacity: ${({$visible:e})=>e?1:0};
  pointer-events: ${({$visible:e})=>e?"auto":"none"};
  transform: ${({$visible:e})=>e?"translateX(0)":"translateX(100%)"};
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
`,P3=v.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 6px 0;
`,pl=v.li`
  padding: 5px 25px;
  margin: 0;
  font-size: 16px;
  line-height: 23px;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 6px;
  position: relative;
  list-style: none;
  color: #fff;
  ${({active:e})=>e&&Y`
      background: rgba(180, 60, 60, 0.6);
    `}
`,jc=v.ul`
  margin: 0;
  padding: 6px 0;
  list-style: none;
`,T3=v.div`
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
  ${({hidden:e})=>e?Y`
          opacity: 0;
          pointer-events: none;
          transform: translateX(-100%);
        `:Y`
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
        `}
`;var E3=[{label:"2",value:2},{label:"1.5",value:1.5},{label:"1.25",value:1.25},{label:"Normal",value:1},{label:"0.75",value:.75},{label:"0.5",value:.5},{label:"0.25",value:.25}],L3=({visible:e,qualities:t,captions:n,activeCaption:r,playbackRate:o,playbackQuality:i,onChangeSettings:l,onCaptionChange:s,onClose:a})=>{var M;let{i18n:u}=q(),[p,c]=H.default.useState(null),[m,y]=H.default.useState(!0),[g,S]=H.default.useState(null);H.default.useEffect(()=>{if(i==null||i===0||t.length===0)return;let L=i.toString();t.find(_=>_.value===L)&&m&&S(L)},[i,t]);let k=H.default.useCallback(L=>{L.stopPropagation(),c(null),a()},[a]),h=H.default.useCallback(L=>{L.stopPropagation(),c(null)},[]),d=H.default.useCallback(L=>E=>{E.stopPropagation(),l({quality:{value:String(L)}}),L===0?y(!0):(y(!1),S(String(L))),c(null),a()},[l,a]),f=H.default.useCallback(L=>E=>{E.stopPropagation(),l({speed:{value:String(L)}}),c(null),a()},[l,a]),w=H.default.useCallback(L=>E=>{E.stopPropagation(),s(L),c(null),a()},[s,a]),x=H.default.useMemo(()=>{if(!r||!n||n.length===0)return u.off;let L=n.find(E=>E.language===r);return L?L.label:u.off},[r,n,u]),C=H.default.useMemo(()=>{let L=E3.find(E=>E.value===o);return L?L.label:"Normal"},[o]);H.default.useEffect(()=>{e&&c(null)},[e]);let T=p!==null;return H.default.createElement(w3,{$visible:e,onClick:L=>L.stopPropagation()},H.default.createElement(x3,null,T?H.default.createElement(zc,{$position:"left",onClick:h,"aria-label":u.back},H.default.createElement(HS,null)):H.default.createElement(zc,{$position:"left","aria-label":u.settings},H.default.createElement(Js,null)),H.default.createElement(C3,null,T?p==="quality"?u.quality:p==="captions"?u.captions:u.speed:u.settings),H.default.createElement(zc,{$position:"right",onClick:k,"aria-label":u.close},H.default.createElement(qS,null))),H.default.createElement(T3,{hidden:T},H.default.createElement(k3,null,t.length>0&&H.default.createElement(Vc,{onClick:()=>c("quality")},H.default.createElement($c,null,H.default.createElement(Js,null)),H.default.createElement(qc,null,u.quality),H.default.createElement(Hc,null,m?g?`${u.auto} (${g}p)`:u.auto:((M=t.find(L=>L.value===g))==null?void 0:M.label)||g)),H.default.createElement(Vc,{onClick:()=>c("speed")},H.default.createElement($c,null,H.default.createElement($S,null)),H.default.createElement(qc,null,u.speed),H.default.createElement(Hc,null,C)),n&&n.length>0&&H.default.createElement(Vc,{onClick:()=>c("captions")},H.default.createElement($c,null,H.default.createElement(jS,null)),H.default.createElement(qc,null,u.captions),H.default.createElement(Hc,null,x)))),H.default.createElement(b3,{$visible:T},H.default.createElement(P3,null,p==="quality"&&H.default.createElement(jc,null,t.map(L=>H.default.createElement(pl,{key:L.value,active:!m&&L.value===g,onClick:d(L.value)},L.label)),H.default.createElement(pl,{active:m,onClick:d(0)},u.auto)),p==="speed"&&H.default.createElement(jc,null,E3.map(L=>H.default.createElement(pl,{key:L.value,active:L.value===o,onClick:f(L.value)},L.label))),p==="captions"&&H.default.createElement(jc,null,H.default.createElement(pl,{active:r===null,onClick:w(null)},u.off),(n||[]).map(L=>H.default.createElement(pl,{key:L.language,active:r===L.language,onClick:w(L.language)},L.label))))))};L3.propTypes={visible:tr.default.bool.isRequired,qualities:tr.default.array.isRequired,captions:tr.default.array,activeCaption:tr.default.string,playbackRate:tr.default.number.isRequired,playbackQuality:tr.default.number,onChangeSettings:tr.default.func.isRequired,onCaptionChange:tr.default.func,onClose:tr.default.func.isRequired};var M3=H.default.memo(L3);var _t=b(I());var T4=3e3;function V1({hasResource:e,loading:t,prevented:n,paused:r,ended:o,waiting:i,seeking:l}){let[s,a]=(0,_t.useState)(!0),u=(0,_t.useRef)(null),p=Pe(),c=!e||t||n||r||o||i||l;(0,_t.useEffect)(()=>{p({type:"hiding",payload:!s})},[s,p]);let m=(0,_t.useCallback)(()=>{clearTimeout(u.current),u.current=setTimeout(()=>{a(!1)},T4)},[]),y=(0,_t.useCallback)(()=>{clearTimeout(u.current)},[]),g=(0,_t.useCallback)(()=>{a(h=>{let d=!h;return d&&!c&&m(),d})},[c,m]),S=(0,_t.useCallback)(()=>{a(!0),c||m()},[c,m]),k=(0,_t.useCallback)(()=>{c||(a(!1),y())},[c,y]);return(0,_t.useEffect)(()=>{c?(a(!0),y()):s&&m()},[c,s,m,y]),(0,_t.useEffect)(()=>{!l&&!r&&!o&&s&&m()},[l,r,o,s,m]),(0,_t.useEffect)(()=>()=>{clearTimeout(u.current)},[]),{controlsVisible:s,toggleControls:g,showControls:S,hideControls:k}}var Ct=b(I()),I3=300,Uc=10,E4=1e3;function $1({currentTime:e,duration:t,changeCurrentTime:n,showControls:r}){let[o,i]=(0,Ct.useState)({direction:null,visible:!1,seconds:0}),l=(0,Ct.useRef)(null),s=(0,Ct.useRef)(null),a=(0,Ct.useRef)(0),u=(0,Ct.useRef)(0),p=(0,Ct.useRef)(null),c=(0,Ct.useRef)(e);c.current=e;let m=(0,Ct.useRef)(t);m.current=t;let y=(0,Ct.useCallback)(k=>{let h=m.current,d=c.current;if(isNaN(h)||h<=0)return;let f=k==="forward"?Uc:-Uc,w=Math.max(0,Math.min(h,d+f));n(w),i(x=>({direction:k,visible:!0,seconds:x.direction===k&&x.visible?x.seconds+Uc:Uc})),clearTimeout(p.current),p.current=setTimeout(()=>{i({direction:null,visible:!1,seconds:0})},E4)},[n]),g=(0,Ct.useCallback)(()=>{a.current+=1,a.current===1?l.current=setTimeout(()=>{a.current=0,r&&r()},I3):(clearTimeout(l.current),a.current=0,y("backward"))},[y,r]),S=(0,Ct.useCallback)(()=>{u.current+=1,u.current===1?s.current=setTimeout(()=>{u.current=0,r&&r()},I3):(clearTimeout(s.current),u.current=0,y("forward"))},[y,r]);return(0,Ct.useEffect)(()=>()=>{clearTimeout(l.current),clearTimeout(s.current),clearTimeout(p.current)},[]),{skipState:o,handleTapLeft:g,handleTapRight:S}}var q1=ke.default.forwardRef(({videoRef:e,playerRef:t,live:n=!1,hasResource:r=!1,hasAudio:o,prevented:i,loading:l,paused:s,ended:a,seeking:u,waiting:p,duration:c,buffered:m=null,currentTime:y,muted:g,volume:S,pictureInPictureEnabled:k,pip:h,fullscreen:d,qualities:f,spriteVTTFile:w,chapters:x,heatmapData:C,fullHDQualityBreak:T,playbackRate:M,playbackQuality:L,loop:E,poster:_,captions:P,activeCaption:O,onCaptionChange:B,onPlayClick:W,onPauseClick:U,onTogglePlay:X,changePlaybackRate:me,changePlayBackQuality:R,changeVolume:N,onMutedClick:ae,changeCurrentTime:j,requestPictureInPicture:ye,exitPictureInPicture:ge,requestFullscreen:De,exitFullscreen:Oe,onSeeking:st,onLoopClick:at,onPreventedClick:ut,onPrevious:tn,onNext:Ht,showNavButtons:We,kernelMsg:Sn=null},Lr)=>{let rr=Pe(),{i18n:Vn}=q(),or=ke.default.useRef(null),{controlsVisible:nn,toggleControls:wn,showControls:rn,hideControls:Mr}=V1({hasResource:r,loading:l,prevented:i,paused:s,ended:a,waiting:p,seeking:u}),{skipState:co,handleTapLeft:Jo,handleTapRight:yl}=$1({currentTime:y,duration:c,changeCurrentTime:j,showControls:wn}),{contextMenuItems:Ir,contextMenuPosition:Or,handleContextMenu:jt}=Rc({fullscreen:d,contextMenuRef:or,pip:h,loop:E,pictureInPictureEnabled:k,requestPictureInPicture:ye,exitPictureInPicture:ge,onLoopClick:at}),{segments:po,getChapterAtTime:gl}=so({chapters:x,duration:c}),{cues:ei,captionStyle:ir}=Fc({captions:P,activeCaption:O});ke.default.useEffect(()=>{rr({videoRef:e,playerRef:t})},[e,t,rr]),ke.default.useImperativeHandle(Lr,()=>({showControls:rn,hideControls:Mr}),[rn,Mr]);let on=ke.default.useCallback(({quality:de,speed:Te})=>{var ct;if(Te&&me(Number((ct=Te.value)!=null?ct:1)),de){let dt=Number(de.value);R(Number.isNaN(dt)?0:dt)}},[me,R]),[Qe,xn]=ke.default.useState(!1),vl=ke.default.useCallback(de=>{de.stopPropagation(),xn(!0)},[]),ra=ke.default.useCallback(()=>{xn(!1)},[]),Zc=ke.default.useCallback(()=>{s||a?W():U()},[s,a,W,U]),K=(p||u&&!w||l)&&!s&&!a;return ke.default.createElement(OS,{onContextMenu:jt,onClick:wn},ke.default.createElement(Ls,{hasResource:r,prevented:i,paused:s,muted:g,currentTime:y,onClick:ut}),_&&ke.default.createElement(Is,{style:{opacity:y<=0||a?1:0}},ke.default.createElement(Os,{style:{backgroundImage:`url(${_})`}})),ke.default.createElement(Gs,{ref:or,fullscreen:d,position:Or,menuItems:Ir}),w&&ke.default.createElement(qs,{spriteVTTFile:w,duration:c,seekTime:y,visible:u}),ke.default.createElement(AS,{$visible:nn&&r&&!a&&!i}),ke.default.createElement(S3,{skipState:co,onTapLeft:Jo,onTapRight:yl,i18n:Vn}),O&&ei.length>0&&ke.default.createElement(Bc,{cues:ei,currentTime:y,captionStyle:ir,isFullscreen:d,controlsVisible:s||a||l||p}),ke.default.createElement(WS,{visible:nn&&!Qe,captions:P,activeCaption:O,onCaptionChange:B,onOpenSettings:vl,settingsLabel:Vn.settings,captionsLabel:Vn.captions}),ke.default.createElement(M3,{visible:Qe,qualities:f,captions:P,activeCaption:O,playbackRate:M,playbackQuality:L,onChangeSettings:on,onCaptionChange:B,onClose:ra}),ke.default.createElement(KS,{visible:nn&&!Qe,isLoading:K,paused:s,ended:a,onPlayPause:Zc,onPrevious:tn,onNext:Ht,showNavButtons:We,i18n:Vn}),ke.default.createElement(g3,{visible:nn&&!Qe,live:n,currentTime:y,duration:c,buffered:m,fullscreen:d,chapters:po,heatmapData:C,getChapterAtTime:gl,i18n:Vn,onChangeCurrentTime:j,onSeeking:st,onRequestFullscreen:De,onExitFullscreen:Oe}),ke.default.createElement(Ms,{hasResource:r,kernelMsg:Sn}))});q1.displayName="MobilePlayerSkin";q1.propTypes={spriteVTTFile:$.default.string,videoRef:$.default.oneOfType([$.default.func,$.default.shape({current:$.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:$.default.oneOfType([$.default.func,$.default.shape({current:$.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:$.default.bool,waiting:$.default.bool,live:$.default.bool.isRequired,hasResource:$.default.bool.isRequired,loading:$.default.bool.isRequired,paused:$.default.bool.isRequired,ended:$.default.bool.isRequired,seeking:$.default.bool.isRequired,onPlayClick:$.default.func.isRequired,onPauseClick:$.default.func.isRequired,onTogglePlay:$.default.func.isRequired,duration:$.default.number.isRequired,buffered:$.default.number.isRequired||null,currentTime:$.default.number.isRequired,changeCurrentTime:$.default.func.isRequired,muted:$.default.bool.isRequired,volume:$.default.number.isRequired,changeVolume:$.default.func.isRequired,onMutedClick:$.default.func.isRequired,changePlaybackRate:$.default.func.isRequired,changePlayBackQuality:$.default.func.isRequired,pictureInPictureEnabled:$.default.bool.isRequired,pip:$.default.bool.isRequired,requestPictureInPicture:$.default.func.isRequired,exitPictureInPicture:$.default.func.isRequired,fullscreen:$.default.bool.isRequired,qualities:$.default.arrayOf($.default.shape({label:$.default.string.isRequired,value:$.default.string.isRequired,isFullHD:$.default.bool.isRequired}).isRequired).isRequired,playbackRate:$.default.number.isRequired,loop:$.default.bool.isRequired,requestFullscreen:$.default.func.isRequired,exitFullscreen:$.default.func.isRequired,onLoopClick:$.default.func.isRequired,onPreventedClick:$.default.func.isRequired,onPrevious:$.default.func,onNext:$.default.func,showNavButtons:$.default.bool,kernelMsg:$.default.oneOfType([$.default.shape({type:$.default.string.isRequired,detail:$.default.string.isRequired}),$.default.oneOf([void 0])]),fullHDQualityBreak:$.default.number,poster:$.default.string.isRequired,hasAudio:$.default.bool,captions:$.default.array,activeCaption:$.default.string,onCaptionChange:$.default.func};var O3=ke.default.memo(q1,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.onTogglePlay===t.onTogglePlay&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.changePlayBackQuality===t.changePlayBackQuality&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onPreventedClick===t.onPreventedClick&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.onCaptionChange===t.onCaptionChange);it();var H1=ea.default.forwardRef((e,t)=>{let{skinMode:n,...r}=e;return n==="mobile"||n!=="desktop"&&Ou?ea.default.createElement(O3,{ref:t,...r}):ea.default.createElement(IS,{ref:t,...r})});H1.displayName="PlayerSkin";H1.propTypes={spriteVTTFile:V.default.string,chapters:V.default.arrayOf(V.default.shape({title:V.default.string.isRequired,startTime:V.default.number.isRequired})),heatmapData:V.default.arrayOf(V.default.shape({startTime:V.default.number.isRequired,endTime:V.default.number.isRequired,value:V.default.number.isRequired})),videoRef:V.default.oneOfType([V.default.func,V.default.shape({current:V.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:V.default.oneOfType([V.default.func,V.default.shape({current:V.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:V.default.bool,waiting:V.default.bool,live:V.default.bool.isRequired,hasResource:V.default.bool.isRequired,loading:V.default.bool.isRequired,paused:V.default.bool.isRequired,ended:V.default.bool.isRequired,seeking:V.default.bool.isRequired,onPlayClick:V.default.func.isRequired,onPauseClick:V.default.func.isRequired,duration:V.default.number.isRequired,buffered:V.default.number.isRequired||null,currentTime:V.default.number.isRequired,changeCurrentTime:V.default.func.isRequired,muted:V.default.bool.isRequired,volume:V.default.number.isRequired,changeVolume:V.default.func.isRequired,onMutedClick:V.default.func.isRequired,changePlaybackRate:V.default.func.isRequired,pictureInPictureEnabled:V.default.bool.isRequired,pip:V.default.bool.isRequired,requestPictureInPicture:V.default.func.isRequired,exitPictureInPicture:V.default.func.isRequired,fullscreen:V.default.bool.isRequired,qualities:V.default.arrayOf(V.default.shape({label:V.default.string.isRequired,value:V.default.string.isRequired,isFullHD:V.default.bool.isRequired}).isRequired).isRequired,playbackRate:V.default.number.isRequired,loop:V.default.bool.isRequired,requestFullscreen:V.default.func.isRequired,exitFullscreen:V.default.func.isRequired,onLoopClick:V.default.func.isRequired,onPreventedClick:V.default.func.isRequired,kernelMsg:V.default.oneOfType([V.default.shape({type:V.default.string.isRequired,detail:V.default.string.isRequired}),V.default.oneOf([void 0])]),fullHDQualityBreak:V.default.number,poster:V.default.string.isRequired,skinMode:V.default.oneOf(["auto","mobile","desktop"])};var A3=ea.default.memo(H1,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.skinMode===t.skinMode&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.onTogglePlay===t.onTogglePlay&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onCaptionChange===t.onCaptionChange&&e.onPreventedClick===t.onPreventedClick&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);var Wc=b(I());var j1=["i18n","captionDragging","contextMenuVisible","controlsHovering","hiding","menuVisible","subMenuVisible","timeSliding","volumeSliding","videoRef","playerRef"];function U1(e,t){try{if(!e||!t)throw new Error("Reducer params has not been provided!");if(typeof t=="function"){let n=t(e);return!n||typeof n!="object"?e:U1(e,n)}if("type"in t){let{type:n,payload:r}=t;if(j1.includes(n)===!1)throw new Error(`Invalid type "${n}" in action payload!`);return e[n]===r?e:{...e,[n]:r}}else if(typeof t=="object"){if(Object.keys(t).length===0)throw new Error("Reducer action object is empty!");let n=!1,r={...e};for(let o in t){let i=t[o];if(j1.includes(o)===!1)throw new Error(`Invalid type "${o}" in action object!`);e[o]!==i&&(n=!0,r={...r,[o]:i})}return n?r:e}return e}catch(n){return console.error("Error in AppReducer: ",n),e}}it();var L4={en:to,es:no},Qc=({children:e,language:t})=>{let[n,r]=Wc.default.useReducer(U1,{...r1,i18n:L4[t]}),o=Wc.default.useMemo(()=>({state:n,dispatch:r}),[n,r]);return Wc.default.createElement(Ki.Provider,{value:o},e)};it();var Jt=b(I());var Er=b(I()),M4=({prevented:e,muted:t,videoRef:n,src:r,updateState:o})=>{let i=Er.default.useRef(.8),l=Er.default.useRef(!1),s=Er.default.useCallback(c=>{if(!n.current||l.current)return;let m=c.target.muted;c.target.volume===0&&(m=!0),o({volume:c.target.volume,muted:m})},[n,o]),a=Er.default.useCallback(()=>{if(!n.current)return;let c=n.current;if(!c)return;let m=!c.muted;if(l.current=!0,m)c.volume>0&&(i.current=c.volume),c.muted=!0,o({volume:c.volume,muted:!0});else{let y=i.current||.8;c.muted=!1,c.volume=y,o({volume:y,muted:!1})}setTimeout(()=>{l.current=!1},0)},[n,o]),u=Er.default.useCallback(c=>{if(!n.current)return;let m=n.current,y=c===0;m&&(m.volume=c),c!==0&&m.muted===!0&&(y=!1,m.muted=!1),c>0&&(i.current=c),o({volume:c,muted:y})},[n,o]),p=Er.default.useCallback(c=>{if(!n.current)return;let y=n.current.volume,g=c(y);u(g)},[n,u]);return Er.default.useEffect(()=>{if(!n.current)return()=>{};let c=n.current;return c?(c.addEventListener("volumechange",s),()=>{c.removeEventListener("volumechange",s)}):()=>{}},[s,n]),Er.default.useEffect(()=>{if(!n.current)return;let c=n.current;c&&(t?c.muted=!0:c.muted=!1)},[r,n,t]),{onMutedClick:a,changeVolume:u,updateVolumeWithCallback:p}},Yc=M4;var fl=b(I()),I4=({updateState:e,videoRef:t,playerRef:n})=>{let r=fl.default.useCallback(()=>{let s=n==null?void 0:n.current,a=t==null?void 0:t.current;if(!s){console.error("useVideoFullscreen: the player element is not ready");return}if(s.requestFullscreen){let u=s.requestFullscreen();u&&u.catch&&u.catch(()=>{})}else s.msRequestFullscreen?s.msRequestFullscreen():s.webkitRequestFullscreen?s.webkitRequestFullscreen():a&&a.webkitEnterFullScreen&&a.webkitEnterFullScreen()},[t,n]),o=fl.default.useCallback(()=>{document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},[]),i=fl.default.useCallback(()=>{let s=n==null?void 0:n.current;(document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement)===s?o():r()},[n,o,r]),l=fl.default.useCallback(()=>{let s=n==null?void 0:n.current,a=document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement;e({fullscreen:!!s&&a===s})},[e,n]);return fl.default.useEffect(()=>(document.addEventListener("fullscreenchange",l),document.addEventListener("webkitfullscreenchange",l),document.onmsfullscreenchange=l,()=>{document.removeEventListener("fullscreenchange",l),document.removeEventListener("webkitfullscreenchange",l),document.onmsfullscreenchange=null}),[l]),{requestFullscreen:r,exitFullscreen:o,requestToggleFullscreen:i}},R3=I4;var _3=(e,t)=>({...e,seeking:t,isEnded:!1,playing:t?e.playing:!0});var O4=({ref:e,playerRef:t,url:n,player:r,fullHDQualityBreak:o,sources:i,prevented:l,muted:s,updateState:a})=>{let{i18n:u}=q(),p=Jt.default.useRef(null),c=Jt.default.useRef(null),m=Jt.default.useCallback(({fullscreen:E})=>{a(_=>({..._,isFullScreen:E}))},[a]),{requestFullscreen:y,exitFullscreen:g,requestToggleFullscreen:S}=R3({updateState:m,videoRef:p,playerRef:t}),k=Jt.default.useMemo(()=>i.length>0?i.map(E=>({label:al({label:"quality",value:E.resolution.toString(),i18n:u}),value:E.resolution.toString(),isFullHD:o!==void 0&&E.resolution>=o})):[],[i,o,u]),{onMutedClick:h,changeVolume:d,updateVolumeWithCallback:f}=Yc({prevented:l,muted:s,videoRef:p,src:n,updateState:({muted:E,volume:_})=>a(P=>({...P,isMuted:E!=null?E:!1,volume:_!=null?_:0}))}),w=Jt.default.useCallback(E=>{r&&(a(_=>({..._,played:E})),r.seekTo(E))},[r,a]),x=Jt.default.useCallback(E=>{if(!r)return;let _=r.getCurrentTime()||0,P=r.getDuration()||0,O=E(_,P);w(O)},[r,w]),C=Jt.default.useRef(h);C.current=h;let T=Jt.default.useRef(w);T.current=w;let M=Jt.default.useMemo(()=>({onPlayClick:()=>a(E=>({...E,playing:!0})),onPauseClick:()=>a(E=>({...E,playing:!1})),onTogglePlay:()=>a(E=>({...E,playing:!E.playing})),changePlaybackRate:E=>a(_=>({..._,playbackRate:E})),changePlayBackQuality:E=>{a(_=>({..._,playbackQuality:E}))},requestPictureInPicture:()=>a(E=>({...E,isPIP:!0})),exitPictureInPicture:()=>a(E=>({...E,isPIP:!1})),onSeeking:E=>a(_=>_3(_,E)),onMutedClick:()=>C.current(),onLoopClick:()=>a(E=>({...E,loop:!E.loop})),onCaptionChange:E=>a(_=>({..._,activeCaption:E})),onPreventedClick:()=>a(E=>({...E,isMuted:!1,volume:1})),changeCurrentTime:E=>T.current(E)}),[a]),L=Jt.default.useCallback(E=>{var P;E.preventDefault(),E.stopPropagation();let _=uc[E.which||E.keyCode]||cc[E.key];if(r)switch((P=c.current)==null||P.showControls(),_){case"SPACE_KEY":{a(O=>({...O,playing:!O.playing}));break}case"F_KEY":{S();break}case"MUTE_KEY":{h();break}case"ARROW_LEFT_KEY":{x(O=>{let B=O-5;return B<0?0:B});break}case"ARROW_RIGHT_KEY":{x((O,B)=>{let W=O+5;return W>=B?B:W});break}case"ARROW_UP_KEY":{f(O=>{let B=O+.1;return B>=1?1:B});break}case"ARROW_DOWN_KEY":{f(O=>{let B=O-.1;return B<0?0:B});break}default:break}},[r,a,S,h,x,f]);return Jt.default.useImperativeHandle(e,()=>({handleKeyDown:L})),Jt.default.useEffect(()=>{var E;p.current=(E=r==null?void 0:r.getPlayer())!=null?E:null},[r]),{playerSkinRef:c,videoRef:p,qualities:k,memorizedProps:M,handleKeyDown:L,requestFullscreen:y,exitFullscreen:g,changeVolume:d}},D3=O4;var A4={en:to,es:no},W1=ta.default.forwardRef(({url:e,sources:t,playerRef:n,player:r,hasAudio:o,fullHDQualityBreak:i,live:l=!1,language:s=Object.keys(A4)[0],hasResource:a=!1,buffered:u=null,kernelMsg:p=null,updateState:c,waiting:m=!1,prevented:y=!1,muted:g=!1,...S},k)=>{let{playerSkinRef:h,videoRef:d,qualities:f,memorizedProps:w,handleKeyDown:x,requestFullscreen:C,exitFullscreen:T,changeVolume:M}=D3({ref:k,playerRef:n,url:e,player:r,fullHDQualityBreak:i,sources:t,prevented:y,muted:g,updateState:c});return ta.default.createElement(Qc,{language:s},ta.default.createElement(A3,{ref:h,videoRef:d,playerRef:n,qualities:f,hasAudio:o,handleKeyDown:x,requestFullscreen:C,exitFullscreen:T,changeVolume:M,fullHDQualityBreak:i,live:l,hasResource:a,buffered:u,kernelMsg:p,prevented:y,waiting:m,muted:g,...S,...w}))});W1.displayName="PlayerSkinWrapper";W1.propTypes={playerRef:te.default.oneOfType([te.default.func,te.default.shape({current:te.default.instanceOf(HTMLDivElement)})]).isRequired,player:te.default.instanceOf(mn),live:te.default.bool,prevented:te.default.bool,waiting:te.default.bool,hasResource:te.default.bool.isRequired,hasAudio:te.default.bool.isRequired,loading:te.default.bool.isRequired,paused:te.default.bool.isRequired,ended:te.default.bool.isRequired,seeking:te.default.bool.isRequired,duration:te.default.number.isRequired,buffered:te.default.number.isRequired||null,currentTime:te.default.number.isRequired,muted:te.default.bool.isRequired,volume:te.default.number.isRequired,playbackRate:te.default.number.isRequired,pictureInPictureEnabled:te.default.bool.isRequired,fullHDQualityBreak:te.default.number,pip:te.default.bool.isRequired,fullscreen:te.default.bool.isRequired,kernelMsg:te.default.oneOfType([te.default.shape({type:te.default.string.isRequired,detail:te.default.string.isRequired}),te.default.oneOf([void 0])]),url:te.default.string,sources:te.default.arrayOf(te.default.shape({src:te.default.string.isRequired,resolution:te.default.number.isRequired}).isRequired).isRequired,loop:te.default.bool.isRequired};var N3=ta.default.memo(W1,(e,t)=>e.playerRef===t.playerRef&&e.player===t.player&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.kernelMsg===t.kernelMsg&&e.url===t.url&&e.sources===t.sources&&e.chapters===t.chapters&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.poster===t.poster&&e.skinMode===t.skinMode);var nr={kernelError:null,seeking:!1,seek:0,played:0,loaded:0,duration:0,isFullScreen:!1,isEnded:!1,isPIP:!1,isLoading:!0,isBuffering:!1,volume:.8,playbackRate:1,playbackQuality:null,videoUrl:null,hasAudio:!0,loop:!1,playing:!1,isMuted:!1,activeCaption:null};var Q1=b(I());var B3=Q1.default.forwardRef(({children:e,style:t,...n},r)=>Q1.default.createElement(Kn,{ref:r,style:t,...n},e));B3.displayName="MediaPlayerWrapper";var F3=B3;var en=b(I());Yn();it();var z3=async()=>{let e="https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js";try{let n=Ri("internet_speed");if(n){let m=parseFloat(n);if(!isNaN(m)&&m>0)return m}let r=new AbortController,o=setTimeout(()=>r.abort(),1e4),i=performance.now(),s=await(await fetch(e,{signal:r.signal,cache:"no-store"})).blob();clearTimeout(o);let a=performance.now(),u=s.size*8||1638400,p=(a-i)/1e3,c=u/(p*1024*1024);return _i("internet_speed",c.toString(),7),c}catch(n){return n.name!=="AbortError"&&console.error("An error occurred while measuring the network speed: ",n),null}},V3=(e,t)=>{let n=[{quality:144,minSpeed:.3},{quality:270,minSpeed:.5},{quality:360,minSpeed:.7},{quality:480,minSpeed:1},{quality:720,minSpeed:2.5},{quality:1080,minSpeed:5},{quality:2160,minSpeed:20}],r;for(let o=n.length-1;o>=0;o--){let i=n[o];if(e>=i.minSpeed){r=i.quality;break}}if(r&&t.includes(r))return r;if(r)for(let o=n.length-1;o>=0;o--){let i=n[o];if(i.quality<=r&&t.includes(i.quality))return i.quality}for(let o=0;o<n.length;o++){let i=n[o];if(t.includes(i.quality))return i.quality}return t.length>0?t[0]:void 0};var R4=({onBuffer:e,onBufferEnd:t,onDisablePIP:n,onDuration:r,onEnablePIP:o,onEnded:i,onError:l,onPause:s,onPlay:a,onPlayBackQualityChange:u,onPlayBackRateChange:p,onProgress:c,onReady:m,onSeek:y,onStart:g,onLoaded:S,onMount:k,updateState:h,playerState:d,extraProps:{url:f,sources:w,fullHDQualityBreak:x,prevented:C}})=>{let[T,M]=en.default.useState(null),L=Ho(w),E=en.default.useMemo(()=>L.length>0?ms(L,"resolution"):null,[L]),_=en.default.useRef(h);_.current=h;let P=en.default.useRef({onBuffer:e,onBufferEnd:t,onDisablePIP:n,onDuration:r,onEnablePIP:o,onEnded:i,onError:l,onPause:s,onPlay:a,onPlayBackQualityChange:u,onPlayBackRateChange:p,onProgress:c,onReady:m,onSeek:y,onStart:g,onLoaded:S,onMount:k});P.current={onBuffer:e,onBufferEnd:t,onDisablePIP:n,onDuration:r,onEnablePIP:o,onEnded:i,onError:l,onPause:s,onPlay:a,onPlayBackQualityChange:u,onPlayBackRateChange:p,onProgress:c,onReady:m,onSeek:y,onStart:g,onLoaded:S,onMount:k};let O=en.default.useRef(C);O.current=C;let B=en.default.useRef(d.seeking);B.current=d.seeking,en.default.useEffect(()=>{if(E&&x!==void 0&&!(x in E)){let R=Object.keys(E).join(", ");console.error(`PlayerStack: Invalid fullHDQualityBreak value "${x}". Accepted resolutions are: ${R}. Falling back to highest available.`)}},[E,x]),en.default.useEffect(()=>{if(!E){M(null);return}let R=!1;return(async()=>{var N,ae;try{let j=await z3();if(R)return;let ye=Object.keys(E).map(Number),ge=V3(j||0,ye),De=L[0];j!==null&&ge?(M((ae=(N=E[ge])==null?void 0:N.src)!=null?ae:De.src),W.current=ge,_.current(Oe=>({...Oe,playbackQuality:ge}))):(M(De.src),W.current=De.resolution,_.current(Oe=>({...Oe,playbackQuality:De.resolution})))}catch{if(R)return;let j=L[0];M(j.src),W.current=j.resolution,_.current(ye=>({...ye,playbackQuality:j.resolution}))}})(),()=>{R=!0}},[L]);let W=en.default.useRef(null),{playbackQuality:U}=d;en.default.useEffect(()=>{U===0&&W.current!==null&&_.current(R=>({...R,playbackQuality:W.current}))},[U]);let X=en.default.useMemo(()=>{var R,N;return E?U==null||U===0?T!=null?T:L[0].src:(N=(R=E[U])==null?void 0:R.src)!=null?N:L[0].src:f},[f,L,E,U,T]);return{...en.default.useMemo(()=>({onBuffer:(...R)=>{P.current.onBuffer&&P.current.onBuffer(...R),_.current(N=>({...N,isBuffering:!0}))},onBufferEnd:(...R)=>{P.current.onBufferEnd&&P.current.onBufferEnd(...R),_.current(N=>({...N,isBuffering:!1}))},onDisablePIP:R=>{P.current.onDisablePIP&&P.current.onDisablePIP(R),_.current(N=>({...N,isPIP:!1}))},onDuration:R=>{P.current.onDuration&&P.current.onDuration(R),_.current(N=>({...N,duration:R}))},onEnablePIP:R=>{P.current.onEnablePIP&&P.current.onEnablePIP(R),_.current(N=>({...N,isPIP:!0}))},onEnded:R=>{P.current.onEnded&&P.current.onEnded(R),_.current(N=>({...N,isEnded:!0}))},onError:(R,N,ae,j)=>{P.current.onError&&P.current.onError(R,N,ae,j);let ye=["networkError"],ge=["bufferStalledError","bufferNudgeOnStall","bufferAppendError","fragParsingError"];ye.includes(N==null?void 0:N.type)||(N==null?void 0:N.type)==="mediaError"&&ge.includes(N==null?void 0:N.details)||_.current(Oe=>{var st;return{...Oe,kernelError:N?{type:(N==null?void 0:N.type)||"UnknownError",detail:((st=N==null?void 0:N.error)==null?void 0:st.message)||"Something was wrong with the playback. Please try again."}:null,isLoading:!1,playing:!1}})},onPause:R=>{P.current.onPause&&P.current.onPause(R),_.current(N=>({...N,playing:!1}))},onPlay:R=>{P.current.onPlay&&P.current.onPlay(R),_.current(N=>{var ye;let ae=(ye=R==null?void 0:R.hasAudio)!=null?ye:!1,j=O.current?!0:ae||N.hasAudio||!1;return{...N,playing:!0,isEnded:!1,hasAudio:j}})},onPlayBackQualityChange:R=>{P.current.onPlayBackQualityChange&&P.current.onPlayBackQualityChange(R),_.current(N=>({...N,playbackQuality:R}))},onPlayBackRateChange:R=>{P.current.onPlayBackRateChange&&P.current.onPlayBackRateChange(R),_.current(N=>({...N,playbackRate:R}))},onProgress:R=>{P.current.onProgress&&P.current.onProgress(R),B.current||_.current(N=>({...N,played:R.playedSeconds,loaded:R.loaded}))},onReady:R=>{P.current.onReady&&P.current.onReady(R),_.current(N=>({...N,isLoading:!1}))},onSeek:R=>{P.current.onSeek&&P.current.onSeek(R),_.current(N=>({...N,seek:R}))},onStart:()=>{P.current.onStart&&P.current.onStart()},onLoaded:(...R)=>{P.current.onLoaded&&P.current.onLoaded(...R)},onMount:(...R)=>{P.current.onMount&&P.current.onMount(...R)}}),[]),videoUrl:X!=null?X:T}},Xc=R4;var $3=v.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  margin: auto;
`;var H3=Ze.default.forwardRef((e,t)=>{var h;let[n,r]=Ze.default.useState({width:e.width||"100%",height:e.height||"100%"}),[o,i]=Ze.default.useState({...nr,isPIP:e.pip,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(h=e.volume)!=null?h:nr.volume}),[l,s]=Ze.default.useState({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume});(e.pip!==l.pip||e.playbackRate!==l.playbackRate||e.loop!==l.loop||e.playing!==l.playing||e.muted!==l.muted||e.volume!==l.volume)&&(s({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume}),i(d=>{var w,x;let f={...d};return e.pip!==l.pip&&(f.isPIP=e.pip),e.playbackRate!==l.playbackRate&&(f.playbackRate=e.playbackRate),e.loop!==l.loop&&(f.loop=e.loop),e.playing!==l.playing&&(f.playing=e.playing),e.muted!==l.muted&&(f.isMuted=e.muted,f.volume=e.muted?0:(w=e.volume)!=null?w:nr.volume),e.volume!==l.volume&&!e.muted&&(f.volume=(x=e.volume)!=null?x:nr.volume),f}));let a=Ze.default.useRef(null),u=Ze.default.useRef(null),p=Ze.default.useRef(e.url),c=Ze.default.useRef(e.sources);Ze.default.useEffect(()=>{let d=p.current!==e.url,f=!(0,q3.default)(c.current,e.sources);(d||f)&&(p.current=e.url,c.current=e.sources,r({width:e.width||"100%",height:e.height||"100%"}),i(w=>({...w,isLoading:!0,isBuffering:!1,duration:0,played:0,loaded:0,seek:0,isEnded:!1,kernelError:null,seeking:!1})))},[e.url,e.sources,e.width,e.height]);let m=Ze.default.useCallback(d=>{var f,w;(w=(f=a.current)==null?void 0:f.handleKeyDown)==null||w.call(f,d)},[]),y=Ze.default.useMemo(()=>e.prevented||e.playing&&e.muted,[e.muted,e.playing,e.prevented]);Ze.default.useEffect(()=>{if(e.player&&o.isLoading===!1){let f=e.player.getPlayer(),w=()=>{let T=f.offsetWidth,M=f.offsetHeight;T>0&&M>0?r({width:`${T}px`,height:`${M}px`}):r({width:e.width||"100%",height:e.height||"100%"})},x=setTimeout(w,500),C=()=>w();return f.addEventListener("loadedmetadata",C),()=>{clearTimeout(x),f.removeEventListener("loadedmetadata",C)}}},[e.player,e.width,e.height,o.isLoading]);let{videoUrl:g,...S}=Xc({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDisablePIP:e.onDisablePIP,onDuration:e.onDuration,onEnablePIP:e.onEnablePIP,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackQualityChange:e.onPlayBackQualityChange,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:i,playerState:o,extraProps:{url:e.url,sources:e.sources,fullHDQualityBreak:e.fullHDQualityBreak,prevented:y}}),k=Ze.default.useMemo(()=>({attributes:e.config.attributes,tracks:e.config.tracks,forceVideo:e.config.forceVideo,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceLoad:e.config.forceLoad,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS,loopOnEnded:e.config.loopOnEnded}),[e.config]);return Ze.default.createElement(F3,{tabIndex:0,role:"application",dir:"ltr",ref:u,onKeyDown:m,style:n},Ze.default.createElement($3,null,g&&Ze.default.createElement(mn,{ref:t,activePlayer:e.activePlayer,loop:o.loop,muted:o.isMuted,pip:o.isPIP,playbackRate:o.playbackRate,playbackQuality:o.playbackQuality,playsinline:e.playsinline,progressInterval:e.progressInterval,stopOnUnmount:e.stopOnUnmount,volume:o.volume,url:g,width:e.width,height:e.height,playing:o.playing,activeCaption:o.activeCaption,viewType:"video",config:k,disableDeferredLoading:e.disableDeferredLoading,progressFrequency:e.progressFrequency,...S})),Ze.default.createElement(N3,{ref:a,playerRef:u,url:g,sources:e.sources,hasAudio:o.hasAudio,spriteVTTFile:e.spriteVTTFile,chapters:e.chapters,captions:e.captions,heatmapData:e.heatmapData,hasResource:typeof g=="string"||e.sources.length>0,kernelMsg:o.kernelError,loading:o.isLoading,prevented:y,muted:o.isMuted,paused:o.playing===!1,live:e.live,buffered:o.loaded,ended:o.isEnded,seeking:o.seeking,waiting:o.isBuffering||e.waiting,duration:o.duration,currentTime:o.played,volume:o.volume,playbackRate:o.playbackRate,playbackQuality:o.playbackQuality,pictureInPictureEnabled:!0,pip:o.isPIP,loop:o.loop,activeCaption:o.activeCaption,fullscreen:o.isFullScreen,fullHDQualityBreak:e.fullHDQualityBreak,language:e.language,poster:e.poster,updateState:i,player:e.player,skinMode:e.skinMode,onPrevious:e.onPrevious,onNext:e.onNext,showNavButtons:e.showNavButtons}))});H3.displayName="MediaPlayerSkin";var j3=Ze.default.memo(H3,(e,t)=>e.url===t.url&&e.sources===t.sources&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.prevented===t.prevented&&e.waiting===t.waiting&&e.playing===t.playing&&e.loop===t.loop&&e.volume===t.volume&&e.muted===t.muted&&e.paused===t.paused&&e.live===t.live&&e.pip===t.pip&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.height===t.height&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.pipeline===t.pipeline&&e.stopOnUnmount===t.stopOnUnmount&&e.activePlayer===t.activePlayer&&e.player===t.player&&e.progressFrequency===t.progressFrequency&&e.disableDeferredLoading===t.disableDeferredLoading&&e.language===t.language&&e.poster===t.poster&&e.config===t.config&&e.skinMode===t.skinMode&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onPlayBackQualityChange===t.onPlayBackQualityChange&&e.onProgress===t.onProgress&&e.onEnablePIP===t.onEnablePIP&&e.onDisablePIP===t.onDisablePIP&&e.onLoaded===t.onLoaded&&e.onMount===t.onMount&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);var ze=b(I());var D=b(I()),G=b(J());it();var Gc=b(I()),U3=({width:e=36,height:t=36})=>Gc.default.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:t},Gc.default.createElement("path",{d:"M13 10.15C13 9.5 13.72 9.1 14.27 9.46L25.97 17.31C26.46 17.64 26.46 18.36 25.97 18.69L14.27 26.54C13.72 26.9 13 26.5 13 25.85V10.15Z",fill:"currentColor"}));U3.displayName="AudioPlayIcon";var W3=Gc.default.memo(U3);var na=b(I()),Q3=({width:e=36,height:t=36})=>na.default.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:t},na.default.createElement("path",{d:"M11 9.5C11 9.08 11.34 8.75 11.75 8.75H14.75C15.16 8.75 15.5 9.08 15.5 9.5V26.5C15.5 26.92 15.16 27.25 14.75 27.25H11.75C11.34 27.25 11 26.92 11 26.5V9.5Z",fill:"currentColor"}),na.default.createElement("path",{d:"M20.5 9.5C20.5 9.08 20.84 8.75 21.25 8.75H24.25C24.66 8.75 25 9.08 25 9.5V26.5C25 26.92 24.66 27.25 24.25 27.25H21.25C20.84 27.25 20.5 26.92 20.5 26.5V9.5Z",fill:"currentColor"}));Q3.displayName="AudioPauseIcon";var Y3=na.default.memo(Q3);var Kc=b(I()),X3=({width:e=36,height:t=36})=>Kc.default.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:t},Kc.default.createElement("path",{d:"M18 9V5.25L12.75 10.5L18 15.75V12C21.73 12 24.75 15.02 24.75 18.75C24.75 22.48 21.73 25.5 18 25.5C14.27 25.5 11.25 22.48 11.25 18.75H8.75C8.75 23.86 12.89 28 18 28C23.11 28 27.25 23.86 27.25 18.75C27.25 13.64 23.11 9.5 18 9.5V9Z",fill:"currentColor"}));X3.displayName="AudioReplayIcon";var G3=Kc.default.memo(X3);var ml=b(I());var Y1=({width:e=36,height:t=36})=>ml.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},ml.default.createElement("path",{d:"M18 9V4.5L12 10.5L18 16.5V12C22.14 12 25.5 15.36 25.5 19.5C25.5 23.64 22.14 27 18 27C13.86 27 10.5 23.64 10.5 19.5H7.5C7.5 25.29 12.21 30 18 30C23.79 30 28.5 25.29 28.5 19.5C28.5 13.71 23.79 9 18 9Z"}),ml.default.createElement("path",{d:"M16.83 22.5H15.555V18.615L14.04 19.08V18.045L16.695 17.1H16.83V22.5Z"}),ml.default.createElement("path",{d:"M22.095 19.695C22.095 20.31 22.02 20.835 21.87 21.27C21.72 21.69 21.495 22.02 21.21 22.26C20.925 22.5 20.565 22.62 20.145 22.62C19.725 22.62 19.365 22.5 19.08 22.26C18.795 22.02 18.57 21.69 18.42 21.27C18.27 20.835 18.195 20.31 18.195 19.695C18.195 19.08 18.27 18.555 18.42 18.12C18.57 17.7 18.795 17.37 19.08 17.13C19.365 16.89 19.725 16.77 20.145 16.77C20.565 16.77 20.925 16.89 21.21 17.13C21.495 17.37 21.72 17.7 21.87 18.12C22.02 18.555 22.095 19.08 22.095 19.695ZM20.82 19.695C20.82 19.245 20.775 18.87 20.7 18.6C20.625 18.33 20.505 18.12 20.355 17.985C20.205 17.85 20.01 17.775 19.785 17.775H20.505C20.28 17.775 20.085 17.85 19.935 17.985C19.785 18.12 19.665 18.33 19.59 18.6C19.515 18.87 19.47 19.245 19.47 19.695C19.47 20.145 19.515 20.52 19.59 20.79C19.665 21.06 19.785 21.27 19.935 21.405C20.085 21.54 20.28 21.615 20.505 21.615H19.785C20.01 21.615 20.205 21.54 20.355 21.405C20.505 21.27 20.625 21.06 20.7 20.79C20.775 20.52 20.82 20.145 20.82 19.695Z"}));Y1.displayName="SkipBackIcon";Y1.propTypes=ee;var K3=ml.default.memo(Y1,re);var hl=b(I());var X1=({width:e=36,height:t=36})=>hl.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},hl.default.createElement("path",{d:"M18 9C12.21 9 7.5 13.71 7.5 19.5C7.5 25.29 12.21 30 18 30C23.79 30 28.5 25.29 28.5 19.5H25.5C25.5 23.64 22.14 27 18 27C13.86 27 10.5 23.64 10.5 19.5C10.5 15.36 13.86 12 18 12V16.5L24 10.5L18 4.5V9Z"}),hl.default.createElement("path",{d:"M16.83 22.5H15.555V18.615L14.04 19.08V18.045L16.695 17.1H16.83V22.5Z"}),hl.default.createElement("path",{d:"M22.095 19.695C22.095 20.31 22.02 20.835 21.87 21.27C21.72 21.69 21.495 22.02 21.21 22.26C20.925 22.5 20.565 22.62 20.145 22.62C19.725 22.62 19.365 22.5 19.08 22.26C18.795 22.02 18.57 21.69 18.42 21.27C18.27 20.835 18.195 20.31 18.195 19.695C18.195 19.08 18.27 18.555 18.42 18.12C18.57 17.7 18.795 17.37 19.08 17.13C19.365 16.89 19.725 16.77 20.145 16.77C20.565 16.77 20.925 16.89 21.21 17.13C21.495 17.37 21.72 17.7 21.87 18.12C22.02 18.555 22.095 19.08 22.095 19.695ZM20.82 19.695C20.82 19.245 20.775 18.87 20.7 18.6C20.625 18.33 20.505 18.12 20.355 17.985C20.205 17.85 20.01 17.775 19.785 17.775H20.505C20.28 17.775 20.085 17.85 19.935 17.985C19.785 18.12 19.665 18.33 19.59 18.6C19.515 18.87 19.47 19.245 19.47 19.695C19.47 20.145 19.515 20.52 19.59 20.79C19.665 21.06 19.785 21.27 19.935 21.405C20.085 21.54 20.28 21.615 20.505 21.615H19.785C20.01 21.615 20.205 21.54 20.355 21.405C20.505 21.27 20.625 21.06 20.7 20.79C20.775 20.52 20.82 20.145 20.82 19.695Z"}));X1.displayName="SkipForwardIcon";X1.propTypes=ee;var Z3=hl.default.memo(X1,re);var ce=b(I()),G1=b(J());var Ko=b(I());var J3=v.div`
  position: relative;
  display: inline-flex;
`,ew=v.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  padding: 0;
  opacity: 0.8;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 1;
  }

  & svg {
    transition: transform 0.2s ease-in-out;
    transform: ${({$expanded:e})=>e?"rotate(45deg)":"rotate(0)"};
  }

  & * {
    pointer-events: none;
  }
`,tw=Ko.default.forwardRef(({$visible:e,...t},n)=>Ko.default.createElement("div",{ref:n,...t}));tw.displayName="MenuOverlay";var nw=v(tw)`
  position: absolute;
  bottom: 55px;
  right: 0;
  min-width: 250px;
  background: rgba(20, 20, 20, 0.97);
  overflow: hidden;
  z-index: 99999;
  display: ${({$visible:e})=>e?"block":"none"};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.4;
`,rw=v.ul`
  padding: 10px 0;
`,ow=v.li`
  & > button {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0 24px;
    border: none;
    background: transparent;
    color: #eee;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1) !important;
    }
  }
`,iw=v.span`
  margin-right: auto;
`,lw=v.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 87%;
  color: #fff;
`,sw=Ko.default.forwardRef(({$visible:e,...t},n)=>Ko.default.createElement("div",{ref:n,...t}));sw.displayName="SubMenuOverlay";var aw=v(sw)`
  position: absolute;
  bottom: 55px;
  right: 0;
  width: 250px;
  max-height: 250px;
  overflow-y: auto;
  background: rgba(20, 20, 20, 0.97);
  z-index: 99999;
  display: ${({$visible:e})=>e?"block":"none"};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.4;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #4c4c4c;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #909090;
    border-radius: 10px;
  }
`,uw=v.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  position: sticky;
  top: 0;
  background: rgba(20, 20, 20, 0.97);
  z-index: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  & svg {
    opacity: 0.7;
  }
`,cw=v.div`
  opacity: ${({$show:e})=>e?1:0};
  transform: ${({$show:e})=>e?"translateX(0)":"translateX(50px)"};
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
`,dw=v.ul`
  padding: 8px 0;
`,pw=Ko.default.forwardRef(({$selected:e,...t},n)=>Ko.default.createElement("li",{ref:n,...t}));pw.displayName="SubMenuItem";var fw=v(pw)`
  padding: 0 10px;

  & > button {
    display: flex;
    align-items: center;
    width: 100%;
    height: 32px;
    padding: 0 12px;
    border: none;
    border-radius: 6px;
    background: ${({$selected:e})=>e?"rgba(204, 54, 43, 0.4)":"transparent"};
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background: ${({$selected:e})=>e?"rgba(204, 54, 43, 0.5)":"rgba(255, 255, 255, 0.08)"};
    }
  }
`;var _4=[2,1.5,1.25,1,.75,.5],mw=({playbackRate:e,changePlaybackRate:t})=>{let n=ce.default.useRef(null),[r,o]=ce.default.useState(!1),[i,l]=ce.default.useState(!1),[s,a]=ce.default.useState(!1),{i18n:u}=q(),p=qe(),c=ce.default.useCallback(k=>{k.stopPropagation(),o(h=>(h&&(l(!1),a(!1)),!h))},[]),m=ce.default.useCallback(()=>{l(!0),requestAnimationFrame(()=>a(!0))},[]),y=ce.default.useCallback(()=>{a(!1),setTimeout(()=>l(!1),150)},[]),g=ce.default.useCallback(k=>{t(k),a(!1),setTimeout(()=>{l(!1),o(!1)},150)},[t]);ce.default.useEffect(()=>{if(!r)return;let k=h=>{if(!n.current)return;(h.composedPath?h.composedPath():[]).includes(n.current)||n.current.contains(h.target)||(o(!1),l(!1),a(!1))};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[r]);let S=e===1?u.normal:`${e}x`;return ce.default.createElement(J3,{ref:n},ce.default.createElement(Ie,{label:u.settings},ce.default.createElement(ew,{type:"button","aria-label":u.settings,"aria-expanded":r,onClick:c,$expanded:r},ce.default.createElement(Lc,{...p}))),ce.default.createElement(nw,{$visible:r&&!i},ce.default.createElement(rw,null,ce.default.createElement(ow,null,ce.default.createElement("button",{type:"button",onClick:m},ce.default.createElement(iw,null,u.speed),ce.default.createElement(lw,null,S,ce.default.createElement(sl,{width:20,height:20})))))),ce.default.createElement(aw,{$visible:i},ce.default.createElement(uw,{onClick:y},ce.default.createElement(Yo,{width:16,height:16}),u.speed),ce.default.createElement(cw,{$show:s},ce.default.createElement(dw,null,_4.map(k=>ce.default.createElement(fw,{key:k,$selected:e===k},ce.default.createElement("button",{type:"button",onClick:()=>g(k)},k===1?u.normal:`${k}`)))))))};mw.propTypes={playbackRate:G1.default.number.isRequired,changePlaybackRate:G1.default.func.isRequired};var hw=ce.default.memo(mw);var yw=(e,t,n)=>{var i;let o=("changedTouches"in e&&((i=e.changedTouches)==null?void 0:i.length)>=1?e.changedTouches[0].pageX:e.clientX||0)-t.left;return o<=0?0:o>=t.width?n:Math.round(n*o/t.width)};var gw=v.div`
  ${el}
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #0f0f0f;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: visible;
  color: #eee;
  user-select: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,vw=v.div`
  position: absolute;
  bottom: calc(100% - 16px);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  background: none;
  border: none;
  border-radius: 0;
  padding: 0;
  pointer-events: none;
  white-space: nowrap;
  z-index: 9999;
`,Sw=v.span`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
`,ww=v.span`
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: #fff;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
`,xw=v.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 0;
  position: relative;
`,K1=v.div`
  overflow: hidden;
  max-width: ${({$visible:e})=>e?"36px":"0"};
  opacity: ${({$visible:e})=>e?1:0};
  transition:
    max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s ease;
`,Cw=v.div`
  grid-area: 1 / 1;
  display: flex;
  align-items: center;
  opacity: ${({$visible:e})=>e?1:0};
  pointer-events: ${({$visible:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease ${({$visible:e})=>e?"0.3s":"0s"};
  overflow: hidden;
  padding-left: 4px;
`,kw=v.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`,bw=v.span`
  color: rgba(255, 255, 255, 0.6);
`,Pw=v.div`
  flex: 1;
  min-width: 0;
  display: grid;
  align-items: center;
  margin-left: 6px;
`,Tw=v.div`
  grid-area: 1 / 1;
  min-width: 0;
  clip-path: ${({$visible:e})=>e?"inset(0 0 0 0)":"inset(0 100% 0 0)"};
  pointer-events: ${({$visible:e})=>e?"auto":"none"};
  transition: clip-path 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`,Ew=v.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  min-width: 36px;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  padding: 0;
  opacity: 0.8;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  & * {
    pointer-events: none;
  }
`,Z1=v.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  min-width: 36px;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  padding: 0;
  opacity: 0.8;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  & * {
    pointer-events: none;
  }
`,Lw=v.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  height: 28px;
  padding: 0 4px;
`,J1=v.div`
  position: relative;
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`,Mw=v.div`
  position: relative;
  width: 100%;
  height: 4px;
  display: flex;
  align-items: center;
  gap: 2px;
  transition: height 0.1s ease;

  ${J1}:hover & {
    height: 6px;
  }
`,Iw=v.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
`,Ow=v.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
  border-radius: 4px;
`,Aw=v.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: transform 0.1s ease;
  transform-origin: center center;
  transform: ${({$hovered:e})=>e?"scaleY(1.5)":"scaleY(1)"};
`,Rw=v.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
`,_w=v.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
`,Dw=v.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
`,em=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: repeating-linear-gradient(
    -60deg,
    transparent,
    transparent 3px,
    rgba(255, 255, 255, 0.15) 3px,
    rgba(255, 255, 255, 0.15) 6px
  );
  background-size: 200% 100%;
  animation: audioLoadingStripes 1.5s linear infinite;
  pointer-events: none;

  @keyframes audioLoadingStripes {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 24px 0;
    }
  }
`,Nw=v.span`
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  min-width: 48px;
  text-align: right;
  flex-shrink: 0;
  margin-right: 8px;
`,Bw=v.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-left: auto;
  margin-right: -4px;

  & > button {
    width: 28px;
    height: 28px;
  }
`,Fw=v.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  padding: 0;
  opacity: 0.8;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  & * {
    pointer-events: none;
  }
`,tm=v.div`
  display: flex;
  align-items: center;
  gap: 0;
  position: relative;
`,zw=v.div`
  overflow: hidden;
  max-width: ${({$dragging:e})=>e?"80px":"0"};
  opacity: ${({$dragging:e})=>e?1:0};
  transition:
    max-width 0.25s ease,
    opacity 0.25s ease;
  display: flex;
  justify-content: flex-end;

  ${tm}:hover & {
    max-width: 80px;
    opacity: 1;
  }
`,Vw=v.div`
  position: relative;
  width: 80px;
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: auto;

  &::after {
    content: '';
    position: absolute;
    left: 6px;
    right: 6px;
    top: 50%;
    height: 4px;
    transform: translateY(-50%);
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.2);
  }
`,$w=v.div`
  position: absolute;
  top: 50%;
  right: 6px;
  height: 4px;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 2px;
  pointer-events: none;
`,qw=v.div`
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  transform: translate(50%, -50%);
  pointer-events: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
`,Hw=v.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 6px;
  background: rgba(15, 15, 15, 0.9);
  border-radius: 4px;
  padding: 3px 6px;
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
`,iO=v.div`
  position: absolute;
  bottom: 100%;
  right: 8px;
  margin-bottom: 8px;
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 8px 0;
  min-width: 160px;
  z-index: 10;
  display: ${({$visible:e})=>e?"block":"none"};
`,lO=v.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: ${({$active:e})=>e?"rgba(255, 255, 255, 0.08)":"transparent"};
  color: #eee;
  font-size: 13px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,sO=v.span`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  padding: 4px 16px 2px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;var nm=D.default.forwardRef(({videoRef:e,playerRef:t,hasResource:n=!1,loading:r,paused:o,ended:i,seeking:l,waiting:s,duration:a,buffered:u=null,currentTime:p,muted:c,volume:m,playbackRate:y,loop:g,poster:S,title:k,artist:h,chapters:d,onPlayClick:f,onPauseClick:w,onTogglePlay:x,changeVolume:C,onMutedClick:T,changeCurrentTime:M,changePlaybackRate:L,onSeeking:E,onPrevious:_,onNext:P,showNavButtons:O,kernelMsg:B=null},W)=>{let U=Pe(),{i18n:X}=q(),me=D.default.useRef(null),{segments:R,getChapterAtTime:N}=so({chapters:d,duration:a}),ae=D.default.useMemo(()=>{let K=N(p);return K?K.title:null},[N,p]);D.default.useEffect(()=>{U({videoRef:e,playerRef:t})},[e,t,U]),D.default.useImperativeHandle(W,()=>({showControls:()=>{},hideControls:()=>{}}),[]);let j=D.default.useCallback(K=>{if(!me.current||!a)return;let de=me.current.getBoundingClientRect(),Te=Math.max(0,Math.min(1,(K.clientX-de.left)/de.width));M(Te*a)},[a,M]),ye=D.default.useCallback(K=>{if(!a)return;E==null||E(!0),j(K);let de=ct=>j(ct),Te=()=>{E==null||E(!1),document.removeEventListener("mousemove",de),document.removeEventListener("mouseup",Te)};document.addEventListener("mousemove",de),document.addEventListener("mouseup",Te)},[a,j,E]),[ge,De]=D.default.useState(!1),[Oe,st]=D.default.useState(0),[at,ut]=D.default.useState(null),[tn,Ht]=D.default.useState(0),We=D.default.useRef(null),Sn=D.default.useRef(null),Lr=D.default.useCallback(K=>{var lm;if(!me.current||!a)return;let de=me.current.getBoundingClientRect(),Te=yw(K,de,a),ct=We.current,dt=ct?ct.getBoundingClientRect():de,$n=(((lm=Sn.current)==null?void 0:lm.offsetWidth)||0)/2,Jc=K.clientX-dt.left,n6=de.left-dt.left,r6=de.right-dt.left,o6=n6+$n,i6=r6-$n,l6=Math.max(o6,Math.min(i6,Jc));st(Te),Ht(l6),De(!0);let im=N(Te);ut(im?im.title:null)},[a,N]),rr=D.default.useCallback(()=>{De(!1)},[]),Vn=D.default.useMemo(()=>{if(!ge||R.length===0)return-1;let K=N(Oe);return K?R.findIndex(de=>de.startTime===K.startTime):-1},[ge,Oe,R,N]),or=D.default.useCallback(()=>{if(!a)return;let K=Math.max(0,p-10);M(K)},[p,a,M]),nn=D.default.useCallback(()=>{if(!a)return;let K=Math.min(a,p+10);M(K)},[p,a,M]),wn=D.default.useRef(null),rn=D.default.useRef(null),[Mr,co]=D.default.useState(!1),[Jo,yl]=D.default.useState(null),Ir=D.default.useCallback(K=>{let de=rn.current;if(!de)return;let Te=de.getBoundingClientRect(),ct=Math.max(0,Math.min(Te.width,K-Te.left));yl(ct)},[]),Or=D.default.useCallback(K=>{let de=K.currentTarget||wn.current;if(!de)return;let Te=de.getBoundingClientRect(),ct=Te.width-12,dt=K.clientX-Te.left-6,Ar=Math.max(0,Math.min(1,1-dt/ct));C(Ar)},[C]),[jt,po]=D.default.useState(!1),gl=D.default.useCallback(K=>{wn.current=K.currentTarget,Or(K),po(!0),Ir(K.clientX);let de=ct=>{let dt=wn.current.getBoundingClientRect(),Ar=dt.width-12,$n=ct.clientX-dt.left-6,Jc=Math.max(0,Math.min(1,1-$n/Ar));C(Jc),Ir(ct.clientX)},Te=()=>{po(!1),document.removeEventListener("mousemove",de),document.removeEventListener("mouseup",Te)};document.addEventListener("mousemove",de),document.addEventListener("mouseup",Te)},[Or,C,Ir]),ei=D.default.useCallback(()=>{co(!0)},[]),ir=D.default.useCallback(()=>{jt||co(!1)},[jt]);D.default.useEffect(()=>{jt||co(!1)},[jt]);let on=!o&&!i,Qe=qe(),xn=a>0?p/a*100:0,vl=u!=null?u*100:0,ra=a>0?Math.max(0,a-p):0,Zc=a>0&&ra>0?`-${Ge(ra)}`:"0:00";return D.default.createElement(gw,{ref:We},ge&&D.default.createElement(vw,{ref:Sn,style:{left:`${tn}px`}},at&&D.default.createElement(Sw,null,at),D.default.createElement(ww,null,Ge(Oe))),D.default.createElement(xw,null,D.default.createElement(Ie,{label:X.skipBack},D.default.createElement(K1,{$visible:on},D.default.createElement(Z1,{onClick:or,"aria-label":X.skipBack},D.default.createElement(K3,{...Qe})))),D.default.createElement(Ie,{label:i?X.replay:o?X.play:X.pause},D.default.createElement(Ew,{onClick:o||i?f:w,"aria-label":i?X.replay:o?X.play:X.pause},i?D.default.createElement(G3,{...Qe}):o?D.default.createElement(W3,{...Qe}):D.default.createElement(Y3,{...Qe}))),D.default.createElement(Ie,{label:X.skipForward},D.default.createElement(K1,{$visible:on},D.default.createElement(Z1,{onClick:nn,"aria-label":X.skipForward},D.default.createElement(Z3,{...Qe})))),D.default.createElement(Pw,null,D.default.createElement(Cw,{$visible:!on},D.default.createElement(kw,null,D.default.createElement(bw,null,i?"Replay: ":"Play: "),k||"",ae&&` \u2022 ${ae}`)),D.default.createElement(Tw,{$visible:on},D.default.createElement(Lw,null,D.default.createElement(J1,{ref:me,onMouseDown:ye,onMouseMove:Lr,onMouseLeave:rr},D.default.createElement(Mw,null,R.length>0?R.map((K,de)=>{let Te=K.endTime-K.startTime,ct=Te/a*100,dt=0;p>=K.endTime?dt=100:p>K.startTime&&(dt=(p-K.startTime)/Te*100);let Ar=u!=null?u*a:0,$n=0;return Ar>=K.endTime?$n=100:Ar>K.startTime&&($n=(Ar-K.startTime)/Te*100),D.default.createElement(Aw,{key:K.startTime,style:{width:`${ct}%`},$hovered:Vn===de},D.default.createElement(_w,{style:{width:`${$n}%`}}),D.default.createElement(Rw,{style:{width:`${dt}%`}}),s&&$n<100&&D.default.createElement(em,{style:{clipPath:`inset(0 0 0 ${Math.max($n,dt)}%)`}}))}):D.default.createElement(Dw,null,D.default.createElement(Iw,{style:{width:`${vl}%`}}),D.default.createElement(Ow,{style:{width:`${xn}%`}}),s&&vl<100&&D.default.createElement(em,{style:{clipPath:`inset(0 0 0 ${Math.max(vl,xn)}%)`}}))))))),D.default.createElement(Nw,null,Zc),D.default.createElement(Bw,null,D.default.createElement(tm,{ref:rn},D.default.createElement(zw,{$dragging:jt,onMouseEnter:ei,onMouseLeave:ir},D.default.createElement(Vw,{onMouseDown:gl,role:"slider","aria-label":"Volume","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":c?0:Math.round(m*100)},D.default.createElement($w,{style:{width:`${c?0:m*68}px`}}),D.default.createElement(qw,{style:{right:`${6+(c?0:m*68)}px`}}))),(Mr||jt)&&D.default.createElement(Hw,{style:Jo!=null&&jt?{left:`${Jo}px`,transform:"translateX(-50%)"}:{left:`${6+68*(1-(c?0:m))}px`,transform:"translateX(-50%)"}},c?0:Math.round(m*100),"%"),D.default.createElement(Ie,{label:c?X.unmute:X.mute,disabled:jt},D.default.createElement(Fw,{onClick:T,"aria-label":c?X.unmute:X.mute},c||m===0?D.default.createElement(Xi,{...Qe}):D.default.createElement(Sc,{...Qe})))),D.default.createElement(hw,{playbackRate:y,changePlaybackRate:L}))))});nm.displayName="AudioPlayerSkin";nm.propTypes={videoRef:G.default.oneOfType([G.default.func,G.default.shape({current:G.default.any})]).isRequired,playerRef:G.default.oneOfType([G.default.func,G.default.shape({current:G.default.any})]).isRequired,hasResource:G.default.bool,loading:G.default.bool,paused:G.default.bool.isRequired,ended:G.default.bool.isRequired,seeking:G.default.bool,waiting:G.default.bool,duration:G.default.number.isRequired,buffered:G.default.number,currentTime:G.default.number.isRequired,muted:G.default.bool.isRequired,volume:G.default.number.isRequired,playbackRate:G.default.number,loop:G.default.bool,poster:G.default.string,title:G.default.string,artist:G.default.string,chapters:G.default.arrayOf(G.default.shape({title:G.default.string.isRequired,startTime:G.default.number.isRequired})),onPlayClick:G.default.func.isRequired,onPauseClick:G.default.func.isRequired,onTogglePlay:G.default.func,changeVolume:G.default.func.isRequired,onMutedClick:G.default.func.isRequired,changeCurrentTime:G.default.func.isRequired,changePlaybackRate:G.default.func.isRequired,onSeeking:G.default.func,kernelMsg:G.default.any,onPrevious:G.default.func,onNext:G.default.func,showNavButtons:G.default.bool};var jw=D.default.memo(nm,(e,t)=>e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.hasResource===t.hasResource&&e.loading===t.loading&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.poster===t.poster&&e.title===t.title&&e.artist===t.artist&&e.chapters===t.chapters&&e.kernelMsg===t.kernelMsg&&e.onPlayClick===t.onPlayClick&&e.onPauseClick===t.onPauseClick&&e.onTogglePlay===t.onTogglePlay&&e.changeVolume===t.changeVolume&&e.onMutedClick===t.onMutedClick&&e.changeCurrentTime===t.changeCurrentTime&&e.changePlaybackRate===t.changePlaybackRate&&e.onSeeking===t.onSeeking&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);var rm=b(I());var Uw=v.div`
  position: relative;
  width: 100%;
  outline: none;
  overflow: visible;

  ${mc}
`;var Ww=rm.default.forwardRef(({children:e,...t},n)=>rm.default.createElement(Uw,{ref:n,...t},e));Ww.displayName="AudioPlayerWrapper";var Qw=Ww;var Yw=ze.default.forwardRef((e,t)=>{var w;let[n,r]=ze.default.useState({...nr,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(w=e.volume)!=null?w:nr.volume}),[o,i]=ze.default.useState({playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume});(e.playbackRate!==o.playbackRate||e.loop!==o.loop||e.playing!==o.playing||e.muted!==o.muted||e.volume!==o.volume)&&(i({playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume}),r(x=>{var T,M;let C={...x};return e.playbackRate!==o.playbackRate&&(C.playbackRate=e.playbackRate),e.loop!==o.loop&&(C.loop=e.loop),e.playing!==o.playing&&(C.playing=e.playing),e.muted!==o.muted&&(C.isMuted=e.muted,C.volume=e.muted?0:(T=e.volume)!=null?T:nr.volume),e.volume!==o.volume&&!e.muted&&(C.volume=(M=e.volume)!=null?M:nr.volume),C}));let l=ze.default.useRef(null),s=ze.default.useRef(null),a=ze.default.useRef(e.url);ze.default.useEffect(()=>{a.current!==e.url&&(a.current=e.url,r(x=>({...x,isLoading:!0,isBuffering:!1,duration:0,played:0,loaded:0,isEnded:!1,kernelError:null,seeking:!1})))},[e.url]);let{videoUrl:u,...p}=Xc({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDuration:e.onDuration,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:r,playerState:n,extraProps:{url:e.url,sources:[],prevented:!1}}),c=ze.default.useMemo(()=>({attributes:e.config.attributes,tracks:e.config.tracks,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS}),[e.config]),{onMutedClick:m,changeVolume:y}=Yc({prevented:!1,muted:n.isMuted,videoRef:s,src:u,updateState:({muted:x,volume:C})=>r(T=>({...T,isMuted:x!=null?x:!1,volume:C!=null?C:0}))});ze.default.useEffect(()=>{var x;e.player&&(s.current=(x=e.player.getPlayer())!=null?x:null)},[e.player]);let g=ze.default.useCallback(()=>{r(x=>({...x,playing:!0}))},[]),S=ze.default.useCallback(()=>{r(x=>({...x,playing:!1}))},[]),k=ze.default.useCallback(()=>{r(x=>({...x,playing:!x.playing}))},[]),h=ze.default.useCallback(x=>{e.player&&(r(C=>({...C,played:x})),e.player.seekTo(x))},[e.player]),d=ze.default.useCallback(x=>{r(C=>({...C,seeking:x}))},[]),f=ze.default.useCallback(x=>{r(C=>({...C,playbackRate:x}))},[]);return ze.default.createElement(Qc,{language:e.language},ze.default.createElement(Qw,{ref:l,tabIndex:0,role:"application",dir:"ltr"},u&&ze.default.createElement(mn,{ref:t,activePlayer:e.activePlayer,loop:n.loop,muted:n.isMuted,playbackRate:n.playbackRate,playsinline:e.playsinline,progressInterval:e.progressInterval,stopOnUnmount:e.stopOnUnmount,volume:n.volume,url:u,width:"0",height:"0",playing:n.playing,viewType:"audio",config:c,...p}),ze.default.createElement(jw,{videoRef:s,playerRef:l,hasResource:typeof u=="string",hasAudio:!0,loading:n.isLoading,paused:n.playing===!1,ended:n.isEnded,seeking:n.seeking,waiting:n.isBuffering||e.waiting,duration:n.duration,buffered:n.loaded,currentTime:n.played,muted:n.isMuted,volume:n.volume,playbackRate:n.playbackRate,loop:n.loop,poster:e.poster,title:e.title,artist:e.artist,chapters:e.chapters,onPlayClick:g,onPauseClick:S,onTogglePlay:k,changeVolume:y,onMutedClick:m,changeCurrentTime:h,changePlaybackRate:f,onSeeking:d,onPrevious:e.onPrevious,onNext:e.onNext,showNavButtons:e.showNavButtons})))});Yw.displayName="AudioMediaPlayerSkin";var Xw=ze.default.memo(Yw,(e,t)=>e.url===t.url&&e.playing===t.playing&&e.loop===t.loop&&e.volume===t.volume&&e.muted===t.muted&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.stopOnUnmount===t.stopOnUnmount&&e.activePlayer===t.activePlayer&&e.player===t.player&&e.waiting===t.waiting&&e.language===t.language&&e.poster===t.poster&&e.title===t.title&&e.artist===t.artist&&e.config===t.config&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onProgress===t.onProgress&&e.onLoaded===t.onLoaded&&e.onMount===t.onMount&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);Yn();it();var D4=typeof window!="undefined"&&window.document&&typeof document!="undefined",N4=typeof global!="undefined"&&global.window&&global.window.document,B4=Object.keys(_f),F4=D4||N4?Zo.default.Suspense:()=>null,Kw=e=>{var t;return t=class extends Zo.default.Component{constructor(){super(...arguments);F(this,"player",null);F(this,"state",{});F(this,"references",{wrapper:o=>{this.wrapper=o},player:o=>{o&&o!==this.player&&(this.player=o,this.forceUpdate())}});F(this,"getDuration",()=>this.player?this.player.getDuration():null);F(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null);F(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null);F(this,"getInternalPlayer",(o="player")=>this.player?this.player.getInternalPlayer(o):null);F(this,"seekTo",(o,i,l)=>{if(!this.player)return null;this.player.seekTo(o,i,l)});F(this,"handleReady",()=>{this.props.onReady&&this.props.onReady(this)});F(this,"getActivePlayer",gs((o,i)=>e.canPlay(o,i)?e:null));F(this,"getConfig",gs((o,i,l)=>{let{config:s}=this.props;return Gw.default.all([Fu.config,Fu.config[l]||{},s,s[l]||{}])}));F(this,"getAttributes",gs(()=>d2(this.props,B4)));F(this,"getPlayerConfig",gs(o=>{let i=(this.props.captions||[]).map(s=>({kind:s.kind||"subtitles",src:s.src,srcLang:s.language,label:s.label})),l=[...o.tracks||[],...i];return{attributes:o.attributes,tracks:l,forceVideo:o.forceVideo,forceHLS:o.forceHLS,dashVersion:o.dashVersion,forceDASH:o.forceDASH,forceFLV:o.forceFLV,flvVersion:o.flvVersion,forceLoad:o.forceLoad,forceDisableHls:o.forceDisableHls,hlsOptions:o.hlsOptions,hlsVersion:o.hlsVersion,forceSafariHLS:o.forceSafariHLS,loopOnEnded:o.loopOnEnded}}));F(this,"getSourceProps",()=>"sources"in this.props&&this.props.sources!==void 0?{sources:this.props.sources,fullHDQualityBreak:this.props.fullHDQualityBreak}:{sources:[]});F(this,"getUrlProp",()=>"url"in this.props&&this.props.url!==void 0?this.props.url:"");F(this,"getEffectiveViewType",()=>{if(this.props.viewType==="audio")return"audio";let o=this.getUrlProp();return o&&Cf(o)?"audio":"video"});F(this,"renderActivePlayer",(o,i)=>{if(!o&&!i)return null;let l=this.getActivePlayer(o,i);if(!l)return null;let s=this.getConfig(o,i,l.key),a=this.getPlayerConfig(s),u=this.getSourceProps(),p=this.getUrlProp();return this.getEffectiveViewType()==="audio"?Zo.default.createElement(Xw,{key:`${l.key}-audio`,ref:this.references.player,activePlayer:l.lazyPlayer,player:this.player,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,muted:this.props.muted,loop:this.props.loop,url:p,width:this.props.width,playing:this.props.playing,waiting:this.props.waiting,config:a,language:this.props.language,poster:this.props.poster,title:this.props.title,artist:this.props.artist,chapters:this.props.chapters,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDuration:this.props.onDuration,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackRateChange:this.props.onPlayBackRateChange,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,onPrevious:this.props.onPrevious,onNext:this.props.onNext,showNavButtons:this.props.showNavButtons}):Zo.default.createElement(j3,{key:l.key,ref:this.references.player,activePlayer:l.lazyPlayer,player:this.player,loop:this.props.loop,muted:this.props.muted,pip:this.props.pip,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,url:p,sources:u.sources,width:this.props.width,height:this.props.height,playing:this.props.playing,config:a,prevented:this.props.prevented,waiting:this.props.waiting,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onDuration:this.props.onDuration,onEnablePIP:this.props.onEnablePIP,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackQualityChange:this.props.onPlayBackQualityChange,onPlayBackRateChange:this.props.onPlayBackRateChange,onPrevious:this.props.onPrevious,onNext:this.props.onNext,showNavButtons:this.props.showNavButtons,fullHDQualityBreak:u.fullHDQualityBreak,language:this.props.language,live:this.props.live,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,disableDeferredLoading:this.props.disableDeferredLoading,progressFrequency:this.props.progressFrequency,spriteVTTFile:this.props.spriteVTTFile,chapters:this.props.chapters,captions:this.props.captions,heatmapData:this.props.heatmapData,poster:this.props.poster,skinMode:this.props.skinMode})})}shouldComponentUpdate(o,i){return!(0,om.default)(this.props,o)||!(0,om.default)(this.state,i)}componentDidUpdate(){}render(){let{wrapper:o}=this.props,i=this.getUrlProp(),l=this.getSourceProps(),{className:s,...a}=this.getAttributes(),u=typeof o=="string"?this.references.wrapper:void 0;return Zo.default.createElement(o,{ref:u,"data-testid":"media-player-skin",className:`playerstack${s?` ${s}`:""}`,...a},Zo.default.createElement(F4,{fallback:this.props.fallback},this.renderActivePlayer(i,l.sources)))}},F(t,"displayName","MediaPlayer"),F(t,"propTypes",_f),F(t,"defaultProps",Fu),F(t,"canPlay",(o,i)=>!!e.canPlay(o,i)),F(t,"canEnablePIP",o=>!!(e.canEnablePIP&&e.canEnablePIP(o))),t};var Zw=Kw(h2);function t6(e,t){(0,e6.createRoot)(e).render(Jw.default.createElement(Zw,{...t}))}return f6(z4);})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
renderPlayerStack=renderPlayerStack.default
//# sourceMappingURL=PlayerStack.standalone.js.map
