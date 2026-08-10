var PlayerStack=(()=>{var md=Object.create;var _r=Object.defineProperty;var hd=Object.getOwnPropertyDescriptor;var yd=Object.getOwnPropertyNames;var gd=Object.getPrototypeOf,bd=Object.prototype.hasOwnProperty;var vd=(e,t,r)=>t in e?_r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Vr=(e,t)=>()=>(e&&(t=e(e=0)),t);var ft=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),ds=(e,t)=>{for(var r in t)_r(e,r,{get:t[r],enumerable:!0})},fs=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of yd(t))!bd.call(e,n)&&n!==r&&_r(e,n,{get:()=>t[n],enumerable:!(o=hd(t,n))||o.enumerable});return e};var y=(e,t,r)=>(r=e!=null?md(gd(e)):{},fs(t||!e||!e.__esModule?_r(r,"default",{value:e,enumerable:!0}):r,e)),Sd=e=>fs(_r({},"__esModule",{value:!0}),e);var I=(e,t,r)=>(vd(e,typeof t!="symbol"?t+"":t,r),r);var k=ft((Sm,ms)=>{ms.exports=globalThis.React});var gs=ft((xm,ys)=>{ys.exports=function(t,r,o){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof r=="function"&&(o=r,r={}),r=r||{},o=o||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async="async"in r?!!r.async:!0,i.src=t,r.attrs&&xd(i,r.attrs),r.text&&(i.text=""+r.text);var s="onload"in i?hs:wd;s(i,o),i.onload||hs(i,o),n.appendChild(i)};function xd(e,t){for(var r in t)e.setAttribute(r,t[r])}function hs(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function wd(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}});function Hn(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}function xs(e){return(e==null?void 0:e.mozHasAudio)||(e==null?void 0:e.webkitAudioDecodedByteCount)>0||(e==null?void 0:e.audioTracks)!==void 0&&e.audioTracks.length>0}function ur(e){let t=e||document.createElement("video"),r=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&r}var bs,vs,Ss,Ft,Io,zn=Vr(()=>{bs=y(k()),vs=y(gs()),Ss=e=>(0,bs.lazy)(async()=>{let t=await e();return typeof t.default=="function"?t:t.default});Ft={},Io=function(t,r,o=null,n=()=>!0,i=vs.default){let s=Hn(r);return s&&n&&n(s)?Promise.resolve(s):new Promise((l,a)=>{if(Ft[t]){Ft[t].push({resolve:l,reject:a});return}Ft[t]=[{resolve:l,reject:a}];let u=p=>{Ft[t].forEach(c=>c.resolve(p)),Ft[t]=null};if(o){let p=window[o];window[o]=function(){p&&p(),u(Hn(r))}}i(t,p=>{p?(Ft[t].forEach(c=>c.reject(p)),Ft[t]=null):o||u(Hn(r))})})}});function ws(e,...t){let o=[].concat(...t),n={},i=Object.keys(e);for(let s of i)o.indexOf(s)===-1&&(n[s]=e[s]);return n}function Mt(e){return typeof window!="undefined"&&typeof window.MediaStream!="undefined"&&e instanceof window.MediaStream}function Cs(e){return/^blob:/.test(e)}function ks(e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r&&(r.current=t)})}}var Ve,Ps,Qe=Vr(()=>{Ve=e=>{let t=Math.floor(e),r=Math.floor(t/3600),o=Math.floor(t%3600/60),n=t%60;return r>0?`${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`},Ps=(e,t)=>e.reduce((r,o)=>(r[o[t]]=o,r),{})});var Cd,jn,Qn,Un,kd,$r,Wn=Vr(()=>{Qe();Cd=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,jn=/\.(m3u8)($|\?)/i,Qn=/\.(mpd)($|\?)/i,Un=/\.(flv)($|\?)/i,kd=(e,t)=>t&&t.length>0||Mt(e)||Cs(e)?!0:Cd.test(e)||jn.test(e)||Qn.test(e)||Un.test(e),$r=kd});var Yn,Pd,Gn,Ts,Es,Ls,Ms,As,Is,Rs,Os=Vr(()=>{Yn=typeof navigator!="undefined",Pd=Yn&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Gn=Yn&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||Pd)&&!window.MSStream,Ts=Yn&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,Es="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",Ls="Hls",Ms="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",As="dashjs",Is="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",Rs="flvjs"});var Ds={};ds(Ds,{default:()=>cr});var Ro,cr,Bs=Vr(()=>{Ro=y(k());Os();Qe();zn();Wn();cr=class extends Ro.default.Component{constructor(){super(...arguments);I(this,"onReady",r=>this.props.onReady(r));I(this,"onPlay",r=>this.props.onPlay({...r,hasAudio:xs(this.player)}));I(this,"onBuffer",r=>this.props.onBuffer(r));I(this,"onBufferEnd",r=>this.props.onBufferEnd(r));I(this,"onPause",r=>this.props.onPause(r));I(this,"onEnded",r=>this.props.onEnded(r));I(this,"onError",(r,o,n,i)=>this.props.onError(r,o,n,i));I(this,"onPlayBackRateChange",r=>{this.props.onPlayBackRateChange(r.target.playbackRate)});I(this,"onEnablePIP",r=>this.props.onEnablePIP(r));I(this,"onDisablePIP",r=>{let{onDisablePIP:o,playing:n}=this.props;o&&o(r),n&&this.play()});I(this,"onPresentationModeChange",r=>{if(this.player&&ur(this.player)){let{webkitPresentationMode:o}=this.player;o==="picture-in-picture"?this.onEnablePIP(r):o==="inline"&&this.onDisablePIP(r)}});I(this,"onSeek",r=>{var o;this.props.onSeek((o=r.target)==null?void 0:o.currentTime)});I(this,"mute",()=>{this.player.muted=!0});I(this,"unmute",()=>{this.player.muted=!1});I(this,"renderTrack",(r,o)=>Ro.default.createElement("track",{key:o,...r}));I(this,"ref",r=>{this.player&&(this.prevPlayer=this.player),this.player=r})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);let r=this.getSource(this.props.url);r&&(this.player.src=r),(Gn||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(r){this.prevPlayer&&this.prevPlayer!==this.player&&(this.removeListeners(this.prevPlayer),this.listenersAttached=!1),this.listenersAttached||this.addListeners(this.player),this.props.url!==r.url&&Mt(this.props.url)===!1&&(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.hls&&(this.hls.destroy(),this.hls=null),this.dash&&(this.dash.reset(),this.dash=null),this.flv&&(this.flv.unload(),this.flv.detachMediaElement(),this.flv.destroy(),this.flv=null),this.removeListeners(this.player),this.listenersAttached=!1}addListeners(r){let{url:o,playsinline:n}=this.props;r&&(this.removeListeners(r),this.listenersAttached=!0,r.addEventListener("play",this.onPlay),r.addEventListener("waiting",this.onBuffer),r.addEventListener("playing",this.onBufferEnd),r.addEventListener("pause",this.onPause),r.addEventListener("seeked",this.onSeek),r.addEventListener("ended",this.onEnded),r.addEventListener("error",this.onError),r.addEventListener("ratechange",this.onPlayBackRateChange),r.addEventListener("enterpictureinpicture",this.onEnablePIP),r.addEventListener("leavepictureinpicture",this.onDisablePIP),r.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(o)===!1&&r.addEventListener("canplay",this.onReady),n&&(r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.setAttribute("x5-playsinline","")))}removeListeners(r){r&&(r.removeEventListener("canplay",this.onReady),r.removeEventListener("play",this.onPlay),r.removeEventListener("waiting",this.onBuffer),r.removeEventListener("playing",this.onBufferEnd),r.removeEventListener("pause",this.onPause),r.removeEventListener("seeked",this.onSeek),r.removeEventListener("ended",this.onEnded),r.removeEventListener("error",this.onError),r.removeEventListener("ratechange",this.onPlayBackRateChange),r.removeEventListener("enterpictureinpicture",this.onEnablePIP),r.removeEventListener("leavepictureinpicture",this.onDisablePIP),r.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange))}shouldUseHLS(r){return Ts&&this.props.config.forceSafariHLS||this.props.config.forceHLS?!0:Gn||this.props.config.forceDisableHls?!1:jn.test(r)}shouldUseDASH(r){return Qn.test(r)||this.props.config.forceDASH}shouldUseFLV(r){return Un.test(r)||this.props.config.forceFLV}load(r,o){let{hlsVersion:n,hlsOptions:i,dashVersion:s,flvVersion:l}=this.props.config;if(o===!1)return;this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.flv&&this.flv.unload(),this.loadSequence=(this.loadSequence||0)+1;let a=this.loadSequence;if(this.shouldUseHLS(r))Io(Es.replace("VERSION",n),Ls).then(u=>{a===this.loadSequence&&(this.hls=new u(i),this.hls.on(u.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(u.Events.ERROR,(p,c)=>{this.props.onError(p,c,this.hls,u)}),this.hls.loadSource(r),this.hls.attachMedia(this.player),this.props.onLoaded())}).catch(u=>this.props.onError(u));else if(this.shouldUseDASH(r))Io(Ms.replace("VERSION",s),As).then(u=>{a===this.loadSequence&&(this.dash=u.MediaPlayer().create(),this.dash.initialize(this.player,r,this.props.playing),this.dash.on("error",p=>{this.props.onError(p,null,this.dash,u)}),parseInt(s)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:u.LogLevel.LOG_LEVEL_NONE}}),this.props.onLoaded())}).catch(u=>this.props.onError(u));else if(this.shouldUseFLV(r))Io(Is.replace("VERSION",l),Rs).then(u=>{a===this.loadSequence&&(this.flv=u.createPlayer({type:"flv",url:r}),this.flv.attachMediaElement(this.player),this.flv.on(u.Events.ERROR,(p,c)=>{this.props.onError(p,c,this.flv,u)}),this.flv.load(),this.props.onLoaded())}).catch(u=>this.props.onError(u));else if(Mt(r))try{this.player.srcObject=r}catch{this.player.src=window.URL.createObjectURL(r)}}getPlayer(){return this.player}play(){let r=this.player.play();r&&r.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.hls&&(this.hls.destroy(),this.hls=null),this.dash&&(this.dash.reset(),this.dash=null),this.flv&&(this.flv.unload(),this.flv.detachMediaElement(),this.flv.destroy(),this.flv=null)}seekTo(r,o=!0){this.player.currentTime=r,o===!1&&this.pause()}setVolume(r){this.player.volume=r}enablePIP(){if(this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player){let r=this.player.requestPictureInPicture();r&&r.catch&&r.catch(o=>this.props.onError(o))}else ur(this.player)&&this.player.webkitPresentationMode!=="picture-in-picture"&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():ur(this.player)&&this.player.webkitPresentationMode!=="inline"&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(r){try{this.player.playbackRate=r}catch(o){this.props.onError(o)}}getDuration(){if(!this.player)return null;let{duration:r,seekable:o}=this.player;return r===1/0&&o.length>0?o.end(o.length-1):r}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;let{buffered:r}=this.player;if(r.length===0)return 0;let o=r.end(r.length-1),n=this.getDuration();return n!==null&&o>n?n:o}getSource(r){if(!(Mt(r)||this.shouldUseHLS(r)||this.shouldUseDASH(r)||this.shouldUseFLV(r)))return r}render(){var p;let{url:r,playing:o,loop:n,muted:i,config:s,width:l,height:a}=this.props,u={width:l==="auto"?l:"100%",height:a==="auto"?a:"100%"};return Ro.default.createElement("video",{"data-testid":"video-element",ref:this.ref,src:this.getSource(r),style:u,preload:"auto",autoPlay:o||void 0,controls:!1,muted:i,loop:n,...s.attributes},(p=s.tracks)==null?void 0:p.map(this.renderTrack))}};I(cr,"displayName","PlayerCore"),I(cr,"canPlay",$r)});var Vs=ft((Bm,_s)=>{"use strict";var Td=function(t){return Ed(t)&&!Ld(t)};function Ed(e){return!!e&&typeof e=="object"}function Ld(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Id(e)}var Md=typeof Symbol=="function"&&Symbol.for,Ad=Md?Symbol.for("react.element"):60103;function Id(e){return e.$$typeof===Ad}function Rd(e){return Array.isArray(e)?[]:{}}function Hr(e,t){return t.clone!==!1&&t.isMergeableObject(e)?pr(Rd(e),e,t):e}function Od(e,t,r){return e.concat(t).map(function(o){return Hr(o,r)})}function Dd(e,t){if(!t.customMerge)return pr;var r=t.customMerge(e);return typeof r=="function"?r:pr}function Bd(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function Ns(e){return Object.keys(e).concat(Bd(e))}function Fs(e,t){try{return t in e}catch{return!1}}function qd(e,t){return Fs(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function Nd(e,t,r){var o={};return r.isMergeableObject(e)&&Ns(e).forEach(function(n){o[n]=Hr(e[n],r)}),Ns(t).forEach(function(n){qd(e,n)||(Fs(e,n)&&r.isMergeableObject(t[n])?o[n]=Dd(n,r)(e[n],t[n],r):o[n]=Hr(t[n],r))}),o}function pr(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Od,r.isMergeableObject=r.isMergeableObject||Td,r.cloneUnlessOtherwiseSpecified=Hr;var o=Array.isArray(t),n=Array.isArray(e),i=o===n;return i?o?r.arrayMerge(e,t,r):Nd(e,t,r):Hr(t,r)}pr.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(o,n){return pr(o,n,r)},{})};var Fd=pr;_s.exports=Fd});var Do=ft((Nm,Hs)=>{var Hd=typeof Element!="undefined",zd=typeof Map=="function",jd=typeof Set=="function",Qd=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Oo(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,o,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(o=r;o--!==0;)if(!Oo(e[o],t[o]))return!1;return!0}var i;if(zd&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return!1;for(i=e.entries();!(o=i.next()).done;)if(!Oo(o.value[1],t.get(o.value[0])))return!1;return!0}if(jd&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return!1;return!0}if(Qd&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(o=r;o--!==0;)if(e[o]!==t[o])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[o]))return!1;if(Hd&&e instanceof Element)return!1;for(o=r;o--!==0;)if(!((n[o]==="_owner"||n[o]==="__v"||n[o]==="__o")&&e.$$typeof)&&!Oo(e[n[o]],t[n[o]]))return!1;return!0}return e!==e&&t!==t}Hs.exports=function(t,r){try{return Oo(t,r)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}});var js=ft((Fm,zs)=>{"use strict";var Ud="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";zs.exports=Ud});var Ys=ft((_m,Ws)=>{"use strict";var Wd=js();function Qs(){}function Us(){}Us.resetWarningCache=Qs;Ws.exports=function(){function e(o,n,i,s,l,a){if(a!==Wd){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Us,resetWarningCache:Qs};return r.PropTypes=r,r}});var U=ft((Hm,Gs)=>{Gs.exports=Ys()();var Vm,$m});var aa=ft((sh,sa)=>{sa.exports=function(t,r,o,n){var i=o?o.call(n,t,r):void 0;if(i!==void 0)return!!i;if(t===r)return!0;if(typeof t!="object"||!t||typeof r!="object"||!r)return!1;var s=Object.keys(t),l=Object.keys(r);if(s.length!==l.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(r),u=0;u<s.length;u++){var p=s[u];if(!a(p))return!1;var c=t[p],d=r[p];if(i=o?o.call(n,c,d,p):void 0,i===!1||i===void 0&&c!==d)return!1}return!0}});var Mc=ft((tg,Lc)=>{Lc.exports=globalThis.ReactDOM});var bm={};ds(bm,{default:()=>gm});zn();Wn();var qs={key:"core",name:"PlayerCore",canPlay:$r,canEnablePIP:e=>$r(e)&&(document.pictureInPictureEnabled||ur()),lazyPlayer:Ss(()=>Promise.resolve().then(()=>(Bs(),Ds)))};var qr=y(k()),ld=y(Vs());var $s=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function _d(e,t){return!!(e===t||$s(e)&&$s(t))}function Vd(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!_d(e[r],t[r]))return!1;return!0}function $d(e,t){t===void 0&&(t=Vd);var r,o=[],n,i=!1;function s(){for(var l=[],a=0;a<arguments.length;a++)l[a]=arguments[a];return i&&r===this&&t(l,o)||(n=e.apply(this,l),i=!0,r=this,o=l),n}return s}var zr=$d;var as=y(Do());var le=y(U());var Xs={exitFullScreenMode:"Salir del modo de pantalla completa (f)",fullScreen:"Pantalla completa",exitFullscreen:"Salir de pantalla completa",fullscreen:"Pantalla completa",play:"Reproducir",replay:"Volver a reproducir",pause:"Pausar",previous:"Anterior",next:"Siguiente",normal:"Normal",settings:"Configuraci\xF3n",speed:"Velocidad",quality:"Calidad",auto:"Autom\xE1tica",hd:"HD",live:"En vivo",seconds:"segundos",clickToUnmute:"Haga clic para desactivar el silencio",playbackStuckClickResumePlayback:"La reproducci\xF3n est\xE1 bloqueada, haga clic para reanudar la reproducci\xF3n.",mute:"Silenciar (m)",activateSound:"Activar sonido",thisVideoHasNoSound:"Este video no tiene sonido",timeBar:"Barra de tiempo",loop:"En Bucle",pictureInPicture:"Pantalla en pantalla"};var Ks={exitFullScreenMode:"Exit full screen mode (f)",fullScreen:"Full screen",exitFullscreen:"Exit full screen",fullscreen:"Full screen",play:"Play",replay:"Replay",pause:"Pause",previous:"Previous",next:"Next",normal:"Normal",settings:"Settings",speed:"Speed",quality:"Quality",auto:"Auto",hd:"HD",live:"Live",seconds:"seconds",clickToUnmute:"Click to unmute",playbackStuckClickResumePlayback:"Playback is stuck, click to resume playback.",mute:"Mute (m)",activateSound:"Activate sound",thisVideoHasNoSound:"This video has no sound",timeBar:"Time bar",loop:"Loop",pictureInPicture:"Picture in picture"};var dr={en:Ks,es:Xs};var{string:At,bool:Se,number:jr,array:Yd,oneOfType:Xn,shape:Zs,object:Js,func:fe}=le.default,ea=Object.keys(dr),Kn={url:At,sources:le.default.arrayOf(le.default.shape({src:le.default.string.isRequired,resolution:le.default.number.isRequired}).isRequired),fullHDQualityBreak:le.default.number,spriteVTTFile:le.default.string,chapters:le.default.arrayOf(le.default.shape({title:le.default.string.isRequired,startTime:le.default.number.isRequired})),heatmapData:le.default.arrayOf(le.default.shape({startTime:le.default.number.isRequired,endTime:le.default.number.isRequired,value:le.default.number.isRequired})),playing:Se,loop:Se,volume:jr,muted:Se,playbackRate:jr,width:Xn([At,jr]),height:Xn([At,jr]),progressInterval:jr,playsinline:Se,language:le.default.oneOf(ea),poster:At,pip:Se,stopOnUnmount:Se,fallback:le.node,waiting:Se,prevented:Se,wrapper:Xn([At,fe,Zs({render:fe.isRequired})]),forceMobile:Se,config:Zs({attributes:Js,tracks:Yd,forceVideo:Se,forceHLS:Se,forceSafariHLS:Se,forceDisableHls:Se,forceDASH:Se,forceFLV:Se,hlsOptions:Js,hlsVersion:At,dashVersion:At,flvVersion:At}),onReady:fe,onStart:fe,onPlay:fe,onPause:fe,onBuffer:fe,onBufferEnd:fe,onEnded:fe,onError:fe,onDuration:fe,onSeek:fe,onPlayBackRateChange:fe,onPlayBackQualityChange:fe,onProgress:fe,onEnablePIP:fe,onDisablePIP:fe,onPrevious:fe,onNext:fe,showNavButtons:Se},Ee=()=>{},Bo={url:"",sources:[],chapters:[],heatmapData:[],playing:!1,loop:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,fallback:null,waiting:!1,prevented:!1,wrapper:"div",forceMobile:void 0,language:ea[0],poster:"",config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:Ee,onStart:Ee,onPlay:Ee,onPause:Ee,onBuffer:Ee,onBufferEnd:Ee,onEnded:Ee,onError:Ee,onDuration:Ee,onSeek:Ee,onPlayBackRateChange:Ee,onPlayBackQualityChange:Ee,onProgress:Ee,onEnablePIP:Ee,onDisablePIP:Ee};var ke=y(k());var Zn=y(k()),ia=y(Do());var qo=y(U()),{string:fr,bool:Ue,number:Qr,array:Gd,oneOfType:ta,shape:Xd,object:ra,func:Le}=qo.default,oa={url:fr,fullHDQualityBreak:qo.default.number,spriteVTTFile:qo.default.string,playing:Ue,loop:Ue,volume:Qr,muted:Ue,playbackRate:Qr,width:ta([fr,Qr]),height:ta([fr,Qr]),progressInterval:Qr,playsinline:Ue,pip:Ue,stopOnUnmount:Ue,config:Xd({attributes:ra,tracks:Gd,forceVideo:Ue,forceHLS:Ue,forceSafariHLS:Ue,forceDisableHls:Ue,forceDASH:Ue,forceFLV:Ue,hlsOptions:ra,hlsVersion:fr,dashVersion:fr,flvVersion:fr}),onReady:Le,onStart:Le,onPlay:Le,onPause:Le,onBuffer:Le,onBufferEnd:Le,onEnded:Le,onError:Le,onDuration:Le,onSeek:Le,onPlayBackRateChange:Le,onPlayBackQualityChange:Le,onProgress:Le,onEnablePIP:Le,onDisablePIP:Le},Me=()=>{},na={playing:!1,loop:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:Me,onStart:Me,onPlay:Me,onPause:Me,onBuffer:Me,onBufferEnd:Me,onEnded:Me,onError:Me,onDuration:Me,onSeek:Me,onPlayBackRateChange:Me,onPlayBackQualityChange:Me,onProgress:Me,onEnablePIP:Me,onDisablePIP:Me};Qe();var Kd=5e3,nt=class extends Zn.default.Component{constructor(){super(...arguments);I(this,"progressTimeout",0);I(this,"durationCheckTimeout",0);I(this,"seekOnPlayTimeout",0);I(this,"volumeTimeout",0);I(this,"prevPlayed",0);I(this,"prevLoaded",0);I(this,"player",null);I(this,"loadOnReady",null);I(this,"seekOnPlay",null);I(this,"mounted",!1);I(this,"isReady",!1);I(this,"isPlaying",!1);I(this,"isLoading",!0);I(this,"isSwitchingQuality",!1);I(this,"startOnPlay",!0);I(this,"onDurationCalled",!1);I(this,"handlePlayerMount",r=>{this.player=r,this.player.load(this.props.url),this.progress()});I(this,"getInternalPlayer",r=>this.player?this.player[r]:null);I(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady&&this.mounted){let r=this.getCurrentTime()||0,o=this.getSecondsLoaded(),n=this.getDuration();if(n){let i={playedSeconds:r,played:r/n,loadedSeconds:null};o!==null&&(i.loadedSeconds=o,i.loaded=o/n),(i.playedSeconds!==this.prevPlayed||i.loadedSeconds!==this.prevLoaded)&&this.props.onProgress({loaded:i.loaded,loadedSeconds:i.loadedSeconds,played:i.played,playedSeconds:i.playedSeconds}),this.prevPlayed=i.playedSeconds,i.loadedSeconds!==void 0&&(this.prevLoaded=i.loadedSeconds)}}this.isPlaying&&this.mounted&&(this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval))});I(this,"handleReady",()=>{if(this.mounted===!1)return;this.isReady=!0,this.isLoading=!1;let{onReady:r,playing:o,volume:n,muted:i}=this.props;r&&r(),!i&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):(o||this.isSwitchingQuality)&&this.player.play(),this.handleDurationCheck()});I(this,"handlePlay",r=>{this.isPlaying=!0,this.isLoading=!1,this.isSwitchingQuality=!1;let{onStart:o,onPlay:n,playbackRate:i}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&i!==1&&this.player.setPlaybackRate(i),o&&o(),this.startOnPlay=!1),n&&n(r),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck(),clearTimeout(this.progressTimeout),this.progress()});I(this,"handlePause",r=>{this.isPlaying=!1,!this.isLoading&&!this.isSwitchingQuality&&this.props.onPause&&this.props.onPause(r)});I(this,"handleEnded",()=>{let{activePlayer:r,loop:o,onEnded:n}=this.props;if(o===!0){r.defaultProps!==void 0&&r.defaultProps.config!==void 0&&r.defaultProps.config.loopOnEnded&&this.seekTo(0);return}this.isPlaying=!1,n&&n()});I(this,"handleError",(r,o,n,i)=>{this.isLoading=!1,this.props.onError&&this.props.onError(r,o,n,i)});I(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);let r=this.getDuration();r?!this.onDurationCalled&&this.props.onDuration&&(this.props.onDuration(r),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)});I(this,"handleLoaded",()=>{this.isReady&&!this.startOnPlay&&(this.isLoading=!1)})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),clearTimeout(this.seekOnPlayTimeout),clearTimeout(this.volumeTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(r){if(!this.player)return;let{url:o,playing:n,volume:i,muted:s,playbackRate:l,playbackQuality:a,pip:u,activePlayer:p,disableDeferredLoading:c}=this.props;if((0,ia.default)(r.url,o)===!1){if(clearTimeout(this.progressTimeout),this.isLoading&&!(p!=null&&p.forceLoad)&&!c&&!Mt(o)){console.warn(`PlayerStack: the attempt to load ${o} is being deferred until the player has loaded`),this.loadOnReady=o;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,r.playbackQuality!==a&&(this.seekOnPlay=this.prevPlayed,this.isSwitchingQuality=!0),this.player.load(o,this.isReady);return}r.playing===!1&&n&&this.isPlaying===!1&&this.player.play(),r.playing&&n===!1&&this.isPlaying&&this.player.pause(),r.pip===!1&&u&&this.player.enablePIP&&this.player.enablePIP(),r.pip&&u===!1&&this.player.disablePIP&&this.player.disablePIP(),r.volume!==i&&i!==null&&this.player.setVolume(i),r.muted!==s&&(s?this.player.mute():(this.player.unmute(),i!==null&&(clearTimeout(this.volumeTimeout),this.volumeTimeout=setTimeout(()=>{this.mounted&&this.player&&this.player.setVolume(i)})))),r.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l)}getDuration(){return this.isReady===!1?null:this.player.getDuration()}getCurrentTime(){return this.isReady===!1?null:this.player.getCurrentTime()}getSecondsLoaded(){return this.isReady===!1?null:this.player.getSecondsLoaded()}getPlayer(){return this.player.getPlayer()}seekTo(r,o,n){if(this.isReady===!1){r!==0&&(this.seekOnPlay=r,this.seekOnPlayTimeout=setTimeout(()=>{this.seekOnPlay=null},Kd));return}if(o?o==="fraction":r>0&&r<1){let s=this.player.getDuration();if(!s){console.warn("PlayerStack: could not seek using fraction \u2013\xA0duration not yet available");return}this.player.seekTo(s*r,n);return}this.player.seekTo(r,n)}render(){let r=this.props.activePlayer;return r?Zn.default.createElement(r,{loop:this.props.loop,muted:this.props.muted,playsinline:this.props.playsinline,url:this.props.url,width:this.props.width,height:this.props.height,playing:this.props.playing,config:this.props.config,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onEnablePIP:this.props.onEnablePIP,onPlayBackRateChange:this.props.onPlayBackRateChange,onSeek:this.props.onSeek}):null}};I(nt,"displayName","PlayerProxy"),I(nt,"propTypes",oa),I(nt,"defaultProps",na);var Eo=y(k()),z=y(U());var To=y(k()),O=y(U());var Q=y(k());var Oe=y(k()),Ut=y(U());var he=function(){return he=Object.assign||function(t){for(var r,o=1,n=arguments.length;o<n;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},he.apply(this,arguments)};function _t(e,t,r){if(r||arguments.length===2)for(var o=0,n=t.length,i;o<n;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return e.concat(i||Array.prototype.slice.call(t))}var ee=y(k()),_a=y(aa());var J="-ms-",Vt="-moz-",W="-webkit-",No="comm",It="rule",mr="decl";var la="@import";var Fo="@keyframes";var ua="@layer";var Jn=Math.abs,Ur=String.fromCharCode,Wr=Object.assign;function ca(e,t){return ie(e,0)^45?(((t<<2^ie(e,0))<<2^ie(e,1))<<2^ie(e,2))<<2^ie(e,3):0}function _o(e){return e.trim()}function Ze(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,r){return e.replace(t,r)}function hr(e,t,r){return e.indexOf(t,r)}function ie(e,t){return e.charCodeAt(t)|0}function it(e,t,r){return e.slice(t,r)}function Ae(e){return e.length}function Vo(e){return e.length}function $t(e,t){return t.push(e),e}function pa(e,t){return e.map(t).join("")}function ei(e,t){return e.filter(function(r){return!Ze(r,t)})}var $o=1,yr=1,da=0,We=0,ue=0,gr="";function Yr(e,t,r,o,n,i,s,l){return{value:e,root:t,parent:r,type:o,props:n,children:i,line:$o,column:yr,length:s,return:"",siblings:l}}function mt(e,t){return Wr(Yr("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ht(e){for(;e.root;)e=mt(e.root,{children:[e]});$t(e,e.siblings)}function fa(){return ue}function ma(){return ue=We>0?ie(gr,--We):0,yr--,ue===10&&(yr=1,$o--),ue}function Ye(){return ue=We<da?ie(gr,We++):0,yr++,ue===10&&(yr=1,$o++),ue}function Rt(){return ie(gr,We)}function Gr(){return We}function Ho(e,t){return it(gr,e,t)}function ti(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ha(e){return $o=yr=1,da=Ae(gr=e),We=0,[]}function ya(e){return gr="",e}function zo(e){return _o(Ho(We-1,ri(e===91?e+2:e===40?e+1:e)))}function ga(e){for(;(ue=Rt())&&ue<33;)Ye();return ti(e)>2||ti(ue)>3?"":" "}function ba(e,t){for(;--t&&Ye()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return Ho(e,Gr()+(t<6&&Rt()==32&&Ye()==32))}function ri(e){for(;Ye();)switch(ue){case e:return We;case 34:case 39:e!==34&&e!==39&&ri(ue);break;case 40:e===41&&ri(e);break;case 92:Ye();break}return We}function va(e,t){for(;Ye()&&e+ue!==57;)if(e+ue===84&&Rt()===47)break;return"/*"+Ho(t,We-1)+"*"+Ur(e===47?e:Ye())}function Sa(e){for(;!ti(Rt());)Ye();return Ho(e,We)}function Ca(e){return ya(jo("",null,null,null,[""],e=ha(e),0,[0],e))}function jo(e,t,r,o,n,i,s,l,a){for(var u=0,p=0,c=s,d=0,m=0,v=0,g=1,w=1,x=1,h=0,P="",S=n,T=i,M=o,E=P;w;)switch(v=h,h=Ye()){case 40:if(v!=108&&ie(E,c-1)==58){hr(E+=F(zo(h),"&","&\f"),"&\f",Jn(u?l[u-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:E+=zo(h);break;case 9:case 10:case 13:case 32:E+=ga(v);break;case 92:E+=ba(Gr()-1,7);continue;case 47:switch(Rt()){case 42:case 47:$t(Zd(va(Ye(),Gr()),t,r,a),a);break;default:E+="/"}break;case 123*g:l[u++]=Ae(E)*x;case 125*g:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+p:x==-1&&(E=F(E,/\f/g,"")),m>0&&Ae(E)-c&&$t(m>32?wa(E+";",o,r,c-1,a):wa(F(E," ","")+";",o,r,c-2,a),a);break;case 59:E+=";";default:if($t(M=xa(E,t,r,u,p,n,l,P,S=[],T=[],c,i),i),h===123)if(p===0)jo(E,t,M,M,S,i,c,l,T);else switch(d===99&&ie(E,3)===110?100:d){case 100:case 108:case 109:case 115:jo(e,M,M,o&&$t(xa(e,M,M,0,0,n,l,P,n,S=[],c,T),T),n,T,c,l,o?S:T);break;default:jo(E,M,M,M,[""],T,0,l,T)}}u=p=m=0,g=x=1,P=E="",c=s;break;case 58:c=1+Ae(E),m=v;default:if(g<1){if(h==123)--g;else if(h==125&&g++==0&&ma()==125)continue}switch(E+=Ur(h),h*g){case 38:x=p>0?1:(E+="\f",-1);break;case 44:l[u++]=(Ae(E)-1)*x,x=1;break;case 64:Rt()===45&&(E+=zo(Ye())),d=Rt(),p=c=Ae(P=E+=Sa(Gr())),h++;break;case 45:v===45&&Ae(E)==2&&(g=0)}}return i}function xa(e,t,r,o,n,i,s,l,a,u,p,c){for(var d=n-1,m=n===0?i:[""],v=Vo(m),g=0,w=0,x=0;g<o;++g)for(var h=0,P=it(e,d+1,d=Jn(w=s[g])),S=e;h<v;++h)(S=_o(w>0?m[h]+" "+P:F(P,/&\f/g,m[h])))&&(a[x++]=S);return Yr(e,t,r,n===0?It:l,a,u,p,c)}function Zd(e,t,r,o){return Yr(e,t,r,No,Ur(fa()),it(e,2,-2),0,o)}function wa(e,t,r,o,n){return Yr(e,t,r,mr,it(e,0,o),it(e,o+1,-1),o,n)}function oi(e,t,r){switch(ca(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 4789:return Vt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+Vt+e+J+e+e;case 5936:switch(ie(e,t+11)){case 114:return W+e+J+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+J+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+J+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+J+e+e;case 6165:return W+e+J+"flex-"+e+e;case 5187:return W+e+F(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+J+"flex-$1$2")+e;case 5443:return W+e+J+"flex-item-"+F(e,/flex-|-self/g,"")+(Ze(e,/flex-|baseline/)?"":J+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return W+e+J+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+J+F(e,"shrink","negative")+e;case 5292:return W+e+J+F(e,"basis","preferred-size")+e;case 6060:return W+"box-"+F(e,"-grow","")+W+e+J+F(e,"grow","positive")+e;case 4554:return W+F(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+J+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4200:if(!Ze(e,/flex-|baseline/))return J+"grid-column-align"+it(e,t)+e;break;case 2592:case 3360:return J+F(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(o,n){return t=n,Ze(o.props,/grid-\w+-end/)})?~hr(e+(r=r[t].value),"span",0)?e:J+F(e,"-start","")+e+J+"grid-row-span:"+(~hr(r,"span",0)?Ze(r,/\d+/):+Ze(r,/\d+/)-+Ze(e,/\d+/))+";":J+F(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(o){return Ze(o.props,/grid-\w+-start/)})?e:J+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ae(e)-1-t>6)switch(ie(e,t+1)){case 109:if(ie(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+Vt+(ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~hr(e,"stretch",0)?oi(F(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,n,i,s,l,a,u){return J+n+":"+i+u+(s?J+n+"-span:"+(l?a:+a-+i)+u:"")+e});case 4949:if(ie(e,t+6)===121)return F(e,":",":"+W)+e;break;case 6444:switch(ie(e,ie(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(ie(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+J+"$2box$3")+e;case 100:return F(e,":",":"+J)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function br(e,t){for(var r="",o=0;o<e.length;o++)r+=t(e[o],o,e,t)||"";return r}function ka(e,t,r,o){switch(e.type){case ua:if(e.children.length)break;case la:case mr:return e.return=e.return||e.value;case No:return"";case Fo:return e.return=e.value+"{"+br(e.children,o)+"}";case It:if(!Ae(e.value=e.props.join(",")))return""}return Ae(r=br(e.children,o))?e.return=e.value+"{"+r+"}":""}function Pa(e){var t=Vo(e);return function(r,o,n,i){for(var s="",l=0;l<t;l++)s+=e[l](r,o,n,i)||"";return s}}function Ta(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ea(e,t,r,o){if(e.length>-1&&!e.return)switch(e.type){case mr:e.return=oi(e.value,e.length,r);return;case Fo:return br([mt(e,{value:F(e.value,"@","@"+W)})],o);case It:if(e.length)return pa(r=e.props,function(n){switch(Ze(n,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ht(mt(e,{props:[F(n,/:(read-\w+)/,":"+Vt+"$1")]})),Ht(mt(e,{props:[n]})),Wr(e,{props:ei(r,o)});break;case"::placeholder":Ht(mt(e,{props:[F(n,/:(plac\w+)/,":"+W+"input-$1")]})),Ht(mt(e,{props:[F(n,/:(plac\w+)/,":"+Vt+"$1")]})),Ht(mt(e,{props:[F(n,/:(plac\w+)/,J+"input-$1")]})),Ht(mt(e,{props:[n]})),Wr(e,{props:ei(r,o)});break}return""})}}var La={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var yt=typeof process!="undefined"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Va="active",Go="data-styled-version",Sr="6.1.14",di=`/*!sc*/
`,Xo=typeof window!="undefined"&&"HTMLElement"in window,Jd=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY),ef={};var Jo=Object.freeze([]),xr=Object.freeze({});function $a(e,t,r){return r===void 0&&(r=xr),e.theme!==r.theme&&e.theme||t||r.theme}var Ha=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tf=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rf=/(^-|-$)/g;function Ma(e){return e.replace(tf,"-").replace(rf,"")}var of=/(a)(d)/gi,Qo=52,Aa=function(e){return String.fromCharCode(e+(e>25?39:97))};function ai(e){var t,r="";for(t=Math.abs(e);t>Qo;t=t/Qo|0)r=Aa(t%Qo)+r;return(Aa(t%Qo)+r).replace(of,"$1-$2")}var ni,za=5381,vr=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},ja=function(e){return vr(za,e)};function fi(e){return ai(ja(e)>>>0)}function nf(e){return e.displayName||e.name||"Component"}function ii(e){return typeof e=="string"&&!0}var Qa=typeof Symbol=="function"&&Symbol.for,Ua=Qa?Symbol.for("react.memo"):60115,sf=Qa?Symbol.for("react.forward_ref"):60112,af={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lf={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Wa={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uf=((ni={})[sf]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ni[Ua]=Wa,ni);function Ia(e){return("type"in(t=e)&&t.type.$$typeof)===Ua?Wa:"$$typeof"in e?uf[e.$$typeof]:af;var t}var cf=Object.defineProperty,pf=Object.getOwnPropertyNames,Ra=Object.getOwnPropertySymbols,df=Object.getOwnPropertyDescriptor,ff=Object.getPrototypeOf,Oa=Object.prototype;function Ya(e,t,r){if(typeof t!="string"){if(Oa){var o=ff(t);o&&o!==Oa&&Ya(e,o,r)}var n=pf(t);Ra&&(n=n.concat(Ra(t)));for(var i=Ia(e),s=Ia(t),l=0;l<n.length;++l){var a=n[l];if(!(a in lf||r&&r[a]||s&&a in s||i&&a in i)){var u=df(t,a);try{cf(e,a,u)}catch{}}}}return e}function wr(e){return typeof e=="function"}function mi(e){return typeof e=="object"&&"styledComponentId"in e}function zt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Xr(e,t){if(e.length===0)return"";for(var r=e[0],o=1;o<e.length;o++)r+=t?t+e[o]:e[o];return r}function Kr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function li(e,t,r){if(r===void 0&&(r=!1),!r&&!Kr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=li(e[o],t[o]);else if(Kr(t))for(var o in t)e[o]=li(e[o],t[o]);return e}function hi(e,t){Object.defineProperty(e,"toString",{value:t})}function ht(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var mf=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,o=0;o<t;o++)r+=this.groupSizes[o];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var o=this.groupSizes,n=o.length,i=n;t>=i;)if((i<<=1)<0)throw ht(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var s=n;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,r.length);s<a;s++)this.tag.insertRule(l,r[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],o=this.indexOfGroup(t),n=o+r;this.groupSizes[t]=0;for(var i=o;i<n;i++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var o=this.groupSizes[t],n=this.indexOfGroup(t),i=n+o,s=n;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(di);return r},e}(),qh=1<<30,Wo=new Map,Ko=new Map,Yo=1,Uo=function(e){if(Wo.has(e))return Wo.get(e);for(;Ko.has(Yo);)Yo++;var t=Yo++;return Wo.set(e,t),Ko.set(t,e),t},hf=function(e,t){Yo=t+1,Wo.set(e,t),Ko.set(t,e)},yf="style[".concat(yt,"][").concat(Go,'="').concat(Sr,'"]'),gf=new RegExp("^".concat(yt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bf=function(e,t,r){for(var o,n=r.split(","),i=0,s=n.length;i<s;i++)(o=n[i])&&e.registerName(t,o)},vf=function(e,t){for(var r,o=((r=t.textContent)!==null&&r!==void 0?r:"").split(di),n=[],i=0,s=o.length;i<s;i++){var l=o[i].trim();if(l){var a=l.match(gf);if(a){var u=0|parseInt(a[1],10),p=a[2];u!==0&&(hf(p,u),bf(e,p,a[3]),e.getTag().insertRules(u,n)),n.length=0}else n.push(l)}}},Da=function(e){for(var t=document.querySelectorAll(yf),r=0,o=t.length;r<o;r++){var n=t[r];n&&n.getAttribute(yt)!==Va&&(vf(e,n),n.parentNode&&n.parentNode.removeChild(n))}};function ui(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Ga=function(e){var t=document.head,r=e||t,o=document.createElement("style"),n=function(l){var a=Array.from(l.querySelectorAll("style[".concat(yt,"]")));return a[a.length-1]}(r),i=n!==void 0?n.nextSibling:null;o.setAttribute(yt,Va),o.setAttribute(Go,Sr);var s=ui();return s&&o.setAttribute("nonce",s),r.insertBefore(o,i),o},Sf=function(){function e(t){this.element=Ga(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,n=0,i=o.length;n<i;n++){var s=o[n];if(s.ownerNode===r)return s}throw ht(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),xf=function(){function e(t){this.element=Ga(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),wf=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ba=Xo,Cf={isServer:!Xo,useCSSOMInjection:!Jd},Zr=function(){function e(t,r,o){t===void 0&&(t=xr),r===void 0&&(r={});var n=this;this.options=he(he({},Cf),t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Xo&&Ba&&(Ba=!1,Da(this)),hi(this,function(){return function(i){for(var s=i.getTag(),l=s.length,a="",u=function(c){var d=function(x){return Ko.get(x)}(c);if(d===void 0)return"continue";var m=i.names.get(d),v=s.getGroup(c);if(m===void 0||!m.size||v.length===0)return"continue";var g="".concat(yt,".g").concat(c,'[id="').concat(d,'"]'),w="";m!==void 0&&m.forEach(function(x){x.length>0&&(w+="".concat(x,","))}),a+="".concat(v).concat(g,'{content:"').concat(w,'"}').concat(di)},p=0;p<l;p++)u(p);return a}(n)})}return e.registerId=function(t){return Uo(t)},e.prototype.rehydrate=function(){!this.server&&Xo&&Da(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(he(he({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var o=r.useCSSOMInjection,n=r.target;return r.isServer?new wf(n):o?new Sf(n):new xf(n)}(this.options),new mf(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Uo(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},e.prototype.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(Uo(t),o)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Uo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),kf=/&/g,Pf=/^\s*\/\/.*$/gm;function Xa(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(o){return"".concat(t," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Xa(r.children,t)),r})}function Ka(e){var t,r,o,n=e===void 0?xr:e,i=n.options,s=i===void 0?xr:i,l=n.plugins,a=l===void 0?Jo:l,u=function(d,m,v){return v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?".".concat(t):d},p=a.slice();p.push(function(d){d.type===It&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(kf,r).replace(o,u))}),s.prefix&&p.push(Ea),p.push(ka);var c=function(d,m,v,g){m===void 0&&(m=""),v===void 0&&(v=""),g===void 0&&(g="&"),t=g,r=m,o=new RegExp("\\".concat(r,"\\b"),"g");var w=d.replace(Pf,""),x=Ca(v||m?"".concat(v," ").concat(m," { ").concat(w," }"):w);s.namespace&&(x=Xa(x,s.namespace));var h=[];return br(x,Pa(p.concat(Ta(function(P){return h.push(P)})))),h};return c.hash=a.length?a.reduce(function(d,m){return m.name||ht(15),vr(d,m.name)},za).toString():"",c}var Tf=new Zr,ci=Ka(),yi=ee.default.createContext({shouldForwardProp:void 0,styleSheet:Tf,stylis:ci}),Nh=yi.Consumer,Ef=ee.default.createContext(void 0);function Zo(){return(0,ee.useContext)(yi)}function Lf(e){var t=(0,ee.useState)(e.stylisPlugins),r=t[0],o=t[1],n=Zo().styleSheet,i=(0,ee.useMemo)(function(){var a=n;return e.sheet?a=e.sheet:e.target&&(a=a.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(a=a.reconstructWithOptions({useCSSOMInjection:!1})),a},[e.disableCSSOMInjection,e.sheet,e.target,n]),s=(0,ee.useMemo)(function(){return Ka({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,ee.useEffect)(function(){(0,_a.default)(r,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,ee.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:s}},[e.shouldForwardProp,i,s]);return ee.default.createElement(yi.Provider,{value:l},ee.default.createElement(Ef.Provider,{value:s},e.children))}var Za=function(){function e(t,r){var o=this;this.inject=function(n,i){i===void 0&&(i=ci);var s=o.name+i.hash;n.hasNameForId(o.id,s)||n.insertRules(o.id,s,i(o.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,hi(this,function(){throw ht(12,String(o.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ci),this.name+t.hash},e}(),Mf=function(e){return e>="A"&&e<="Z"};function qa(e){for(var t="",r=0;r<e.length;r++){var o=e[r];if(r===1&&o==="-"&&e[0]==="-")return e;Mf(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var Ja=function(e){return e==null||e===!1||e===""},el=function(e){var t,r,o=[];for(var n in e){var i=e[n];e.hasOwnProperty(n)&&!Ja(i)&&(Array.isArray(i)&&i.isCss||wr(i)?o.push("".concat(qa(n),":"),i,";"):Kr(i)?o.push.apply(o,_t(_t(["".concat(n," {")],el(i),!1),["}"],!1)):o.push("".concat(qa(n),": ").concat((t=n,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in La||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function Ot(e,t,r,o){if(Ja(e))return[];if(mi(e))return[".".concat(e.styledComponentId)];if(wr(e)){if(!wr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var n=e(t);return Ot(n,t,r,o)}var i;return e instanceof Za?r?(e.inject(r,o),[e.getName(o)]):[e]:Kr(e)?el(e):Array.isArray(e)?Array.prototype.concat.apply(Jo,e.map(function(s){return Ot(s,t,r,o)})):[e.toString()]}function tl(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(wr(r)&&!mi(r))return!1}return!0}var Af=ja(Sr),If=function(){function e(t,r,o){this.rules=t,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&tl(t),this.componentId=r,this.baseHash=vr(Af,r),this.baseStyle=o,Zr.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,o){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))n=zt(n,this.staticRulesId);else{var i=Xr(Ot(this.rules,t,r,o)),s=ai(vr(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var l=o(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,l)}n=zt(n,s),this.staticRulesId=s}else{for(var a=vr(this.baseHash,o.hash),u="",p=0;p<this.rules.length;p++){var c=this.rules[p];if(typeof c=="string")u+=c;else if(c){var d=Xr(Ot(c,t,r,o));a=vr(a,d+p),u+=d}}if(u){var m=ai(a>>>0);r.hasNameForId(this.componentId,m)||r.insertRules(this.componentId,m,o(u,".".concat(m),void 0,this.componentId)),n=zt(n,m)}}return n},e}(),gi=ee.default.createContext(void 0),Fh=gi.Consumer;var si={};function Rf(e,t,r){var o=mi(e),n=e,i=!ii(e),s=t.attrs,l=s===void 0?Jo:s,a=t.componentId,u=a===void 0?function(S,T){var M=typeof S!="string"?"sc":Ma(S);si[M]=(si[M]||0)+1;var E="".concat(M,"-").concat(fi(Sr+M+si[M]));return T?"".concat(T,"-").concat(E):E}(t.displayName,t.parentComponentId):a,p=t.displayName,c=p===void 0?function(S){return ii(S)?"styled.".concat(S):"Styled(".concat(nf(S),")")}(e):p,d=t.displayName&&t.componentId?"".concat(Ma(t.displayName),"-").concat(t.componentId):t.componentId||u,m=o&&n.attrs?n.attrs.concat(l).filter(Boolean):l,v=t.shouldForwardProp;if(o&&n.shouldForwardProp){var g=n.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;v=function(S,T){return g(S,T)&&w(S,T)}}else v=g}var x=new If(r,d,o?n.componentStyle:void 0);function h(S,T){return function(M,E,L){var R=M.attrs,q=M.componentStyle,C=M.defaultProps,b=M.foldedComponentIds,N=M.styledComponentId,$=M.target,j=ee.default.useContext(gi),Z=Zo(),ve=M.shouldForwardProp||Z.shouldForwardProp,ze=$a(E,j,C)||xr,A=function(Pe,Te,Ke){for(var ct,je=he(he({},Te),{className:void 0,theme:Ke}),pt=0;pt<Pe.length;pt+=1){var Tt=wr(ct=Pe[pt])?ct(je):ct;for(var Re in Tt)je[Re]=Re==="className"?zt(je[Re],Tt[Re]):Re==="style"?he(he({},je[Re]),Tt[Re]):Tt[Re]}return Te.className&&(je.className=zt(je.className,Te.className)),je}(R,E,ze),D=A.as||$,ne={};for(var Y in A)A[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&A.theme===ze||(Y==="forwardedAs"?ne.as=A.forwardedAs:ve&&!ve(Y,D)||(ne[Y]=A[Y]));var me=function(Pe,Te){var Ke=Zo(),ct=Pe.generateAndInjectStyles(Te,Ke.styleSheet,Ke.stylis);return ct}(q,A),de=zt(b,N);return me&&(de+=" "+me),A.className&&(de+=" "+A.className),ne[ii(D)&&!Ha.has(D)?"class":"className"]=de,L&&(ne.ref=L),(0,ee.createElement)(D,ne)}(P,S,T)}h.displayName=c;var P=ee.default.forwardRef(h);return P.attrs=m,P.componentStyle=x,P.displayName=c,P.shouldForwardProp=v,P.foldedComponentIds=o?zt(n.foldedComponentIds,n.styledComponentId):"",P.styledComponentId=d,P.target=o?n.target:e,Object.defineProperty(P,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=o?function(T){for(var M=[],E=1;E<arguments.length;E++)M[E-1]=arguments[E];for(var L=0,R=M;L<R.length;L++)li(T,R[L],!0);return T}({},n.defaultProps,S):S}}),hi(P,function(){return".".concat(P.styledComponentId)}),i&&Ya(P,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),P}function Na(e,t){for(var r=[e[0]],o=0,n=t.length;o<n;o+=1)r.push(t[o],e[o+1]);return r}var Fa=function(e){return Object.assign(e,{isCss:!0})};function H(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(wr(e)||Kr(e))return Fa(Ot(Na(Jo,_t([e],t,!0))));var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Ot(o):Fa(Ot(Na(o,t)))}function pi(e,t,r){if(r===void 0&&(r=xr),!t)throw ht(1,t);var o=function(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,H.apply(void 0,_t([n],i,!1)))};return o.attrs=function(n){return pi(e,t,he(he({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},o.withConfig=function(n){return pi(e,t,he(he({},r),n))},o}var rl=function(e){return pi(Rf,e)},f=rl;Ha.forEach(function(e){f[e]=rl(e)});var Of=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=tl(t),Zr.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,o,n){var i=n(Xr(Ot(this.rules,r,o,n)),""),s=this.componentId+t;o.insertRules(s,s,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,o,n){t>2&&Zr.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,n)},e}();function ol(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=H.apply(void 0,_t([e],t,!1)),n="sc-global-".concat(fi(JSON.stringify(o))),i=new Of(o,n),s=function(a){var u=Zo(),p=ee.default.useContext(gi),c=ee.default.useRef(u.styleSheet.allocateGSInstance(n)).current;return u.styleSheet.server&&l(c,a,u.styleSheet,p,u.stylis),ee.default.useLayoutEffect(function(){if(!u.styleSheet.server)return l(c,a,u.styleSheet,p,u.stylis),function(){return i.removeStyles(c,u.styleSheet)}},[c,a,u.styleSheet,p,u.stylis]),null};function l(a,u,p,c,d){if(i.isStatic)i.renderStyles(a,ef,p,d);else{var m=he(he({},u),{theme:$a(u,c,s.defaultProps)});i.renderStyles(a,m,p,d)}}return ee.default.memo(s)}function en(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=Xr(H.apply(void 0,_t([e],t,!1))),n=fi(o);return new Za(n,o)}var _h=function(){function e(){var t=this;this._emitSheetCSS=function(){var r=t.instance.toString();if(!r)return"";var o=ui(),n=Xr([o&&'nonce="'.concat(o,'"'),"".concat(yt,'="true"'),"".concat(Go,'="').concat(Sr,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(r,"</style>")},this.getStyleTags=function(){if(t.sealed)throw ht(2);return t._emitSheetCSS()},this.getStyleElement=function(){var r;if(t.sealed)throw ht(2);var o=t.instance.toString();if(!o)return[];var n=((r={})[yt]="",r[Go]=Sr,r.dangerouslySetInnerHTML={__html:o},r),i=ui();return i&&(n.nonce=i),[ee.default.createElement("style",he({},n,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Zr({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw ht(2);return ee.default.createElement(Lf,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw ht(3)},e}();var Vh="__sc-".concat(yt,"__");var Qt=y(k());var jt=y(U()),G={width:jt.default.oneOfType([jt.default.number,jt.default.string]),height:jt.default.oneOfType([jt.default.number,jt.default.string])},X=(e,t)=>e.width===t.width&&e.height===t.height;var bi=({width:e=36,height:t=36})=>Qt.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Qt.default.createElement("path",{d:"M 22.5 18 C 22.5 16.235 21.48 14.71 20 13.975 L 20 16.185 L 22.455 18.64 C 22.485 18.43 22.5 18.215 22.5 18 Z"}),Qt.default.createElement("path",{d:"M 25 18 C 25 18.94 24.795 19.825 24.46 20.64 L 25.975 22.155 C 26.625 20.91 27 19.5 27 18 C 27 13.72 24.005 10.14 20 9.23 L 20 11.295 C 22.89 12.155 25 14.83 25 18 Z"}),Qt.default.createElement("polygon",{points:"18 10 15.91 12.09 18 14.18"}),Qt.default.createElement("path",{d:"M 10.275 9 L 9 10.275 L 13.725 15 L 9 15 L 9 21 L 13 21 L 18 26 L 18 19.275 L 22.255 23.53 C 21.585 24.045 20.83 24.46 20 24.71 L 20 26.775 C 21.375 26.46 22.63 25.83 23.685 24.965 L 25.725 27 L 27 25.725 L 18 16.725 L 10.275 9 Z"}));bi.displayName="MutedIcon";bi.propTypes=G;var tn=Qt.default.memo(bi,X);var rn=y(k());var vi=({width:e=36,height:t=36})=>rn.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},rn.default.createElement("path",{d:"M 23.804 18.319 L 12.478 25.924 C 12.347 26.014 12.235 26.024 12.141 25.955 C 12.047 25.886 12 25.763 12 25.584 L 12 10.416 C 12 10.237 12.047 10.113 12.141 10.045 C 12.235 9.976 12.347 9.986 12.478 10.076 L 23.804 17.68 C 23.935 17.77 24 17.876 24 18 C 24 18.124 23.935 18.23 23.804 18.319 Z"}));vi.displayName="PlayIcon";vi.propTypes=G;var Cr=rn.default.memo(vi,X);var Si=f.div`
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
`,nl=H`
  font-size: 20px;
  margin-right: 8px;
`,il=f(Cr)`
  ${nl}
`,sl=f(tn)`
  ${nl}
`,al=f.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 5;
`;var ul=y(k());var ll=y(k()),xi={contextMenuVisible:!1,controlsHovering:!1,timeSliding:!1,volumeSliding:!1,hiding:!1,menuVisible:!1,subMenuVisible:!1,fullscreen:!1,playerRef:null,videoRef:null},kr=(0,ll.createContext)({state:xi,dispatch:()=>null});var Df=()=>{let{state:e}=(0,ul.useContext)(kr);return e},_=Df;var cl=({hasResource:e=!1,prevented:t,paused:r,muted:o,currentTime:n,onClick:i})=>{let{i18n:s}=_(),[l,a]=Oe.default.useState(!1),u=Oe.default.useCallback(()=>{if(e===!1||t===!1||r)return null;if(o===!0&&!l){let c=d=>{a(!0),i(d)};return Oe.default.createElement(Oe.default.Fragment,{key:"preventedClickedTip"},Oe.default.createElement(al,{onClick:c}),Oe.default.createElement(Si,null,Oe.default.createElement(sl,null),s.clickToUnmute))}return null},[e,t,l,i,s.clickToUnmute,o,r]);return[Oe.default.useCallback(()=>e===!1||t===!1?null:n===0&&r?Oe.default.createElement(Oe.default.Fragment,{key:"preventedTip"},Oe.default.createElement(Si,null,Oe.default.createElement(il,null),s.playbackStuckClickResumePlayback)):null,[n,r,e,s.playbackStuckClickResumePlayback,t])(),u()]};cl.propTypes={hasResource:Ut.default.bool.isRequired,prevented:Ut.default.bool.isRequired,paused:Ut.default.bool.isRequired,muted:Ut.default.bool.isRequired,currentTime:Ut.default.number.isRequired,onClick:Ut.default.func.isRequired};var Jr=Oe.default.memo(cl,(e,t)=>e.hasResource===t.hasResource&&e.prevented===t.prevented&&e.paused===t.paused&&e.muted===t.muted&&e.currentTime===t.currentTime&&e.onClick===t.onClick);var Tr=y(k()),gt=y(U());var wi=y(k());var pl=wi.default.forwardRef(({showing:e,...t},r)=>wi.default.createElement("button",{ref:r,...t}));pl.displayName="PlayButton";var dl=f(pl)`
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
`;var on=y(k());var Ci=({width:e=36,height:t=36})=>on.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},on.default.createElement("path",{d:"M 18 12.3 L 18 8.5 L 13 13.25 L 18 18 L 18 14.2 C 21.3 14.2 24 16.765 24 19.9 C 24 23.035 21.3 25.6 18 25.6 C 14.7 25.6 12 23.035 12 19.9 L 10 19.9 C 10 24.08 13.6 27.5 18 27.5 C 22.4 27.5 26 24.08 26 19.9 C 26 15.72 22.4 12.3 18 12.3 Z"}));Ci.displayName="ReplayIcon";Ci.propTypes=G;var Pr=on.default.memo(Ci,X);var nn=y(k());var Bf=f.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
`,qf=f.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
`,Nf=f.div`
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
`,Ff=()=>nn.default.createElement(Bf,null,nn.default.createElement(qf,null,nn.default.createElement(Nf,null))),sn=Ff;var fl=({hasResource:e,loading:t,paused:r,ended:o,seeking:n,waiting:i,kernelMsg:s,onClick:l})=>e===!1||t||s?null:i?Tr.default.createElement(sn,null):Tr.default.createElement(dl,{showing:r||o,onClick:l},o?Tr.default.createElement(Pr,{width:"14%",height:"100%"}):Tr.default.createElement(Cr,{width:"20%",height:"100%"}));fl.propTypes={hasResource:gt.default.bool.isRequired,loading:gt.default.bool.isRequired,paused:gt.default.bool.isRequired,ended:gt.default.bool.isRequired,seeking:gt.default.bool.isRequired,waiting:gt.default.bool.isRequired,kernelMsg:gt.default.object,onClick:gt.default.func.isRequired};var ml=Tr.default.memo(fl,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.kernelMsg===t.kernelMsg&&e.onClick===t.onClick);var ln=y(k()),an=y(U());var hl=f.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 2em;
  background: rgba(0, 0, 0, 0.65);
`;var yl=({hasResource:e,loading:t=!1,kernelMsg:r=null})=>e===!1?null:r?ln.default.createElement(hl,null,r.type,": ",r.detail):t?ln.default.createElement(sn,null):null;yl.propTypes={hasResource:an.default.bool.isRequired,loading:an.default.bool,kernelMsg:an.default.object};var eo=ln.default.memo(yl,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.kernelMsg===t.kernelMsg);var gl=H`
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img,
  picture,
  video,
  canvas {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    font-style: italic;
    background-repeat: no-repeat;
    background-size: cover;
  }

  input,
  button,
  textarea,
  select {
    background: none !important;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }
`;var to=ol`
  * {
    margin: 0;
    padding: 0;
  }

  div[data-testid="media-player-skin"].playerstack {
    *, *::before, *::after {
      box-sizing: border-box;
    }
    ${gl}
  }
  body,
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  html:focus-within {
    scroll-behavior: smooth;
  }
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
      transition: none;
    }
  }
`,ro=f.div`
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
`,oo=f.div`
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
`;var st=f.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`,bl=f.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  height: 55px !important;
  z-index: 2;
`,vl=f.div`
  padding: 10px 20px;
  font-size: 140%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  border-radius: 3px;
  color: #eee;
`;var De=e=>e?{width:54,height:54}:{width:36,height:36};var un={32:"SPACE_KEY",27:"ESCAPE_KEY",37:"ARROW_LEFT_KEY",39:"ARROW_RIGHT_KEY",38:"ARROW_UP_KEY",40:"ARROW_DOWN_KEY",77:"MUTE_KEY",16:"SHIFT_KEY",67:"SUBTITLES_KEY",70:"F_KEY",84:"T_KEY",78:"N_KEY"},cn={" ":"SPACE_KEY",Escape:"ESCAPE_KEY",ArrowLeft:"ARROW_LEFT_KEY",ArrowRight:"ARROW_RIGHT_KEY",ArrowUp:"ARROW_UP_KEY",ArrowDown:"ARROW_DOWN_KEY",m:"MUTE_KEY",Shift:"SHIFT_KEY",c:"SUBTITLES_KEY",f:"F_KEY",t:"T_KEY",n:"N_KEY"},bt=e=>e?83:55;var io=y(k()),no=y(U());var ki=y(k());var Sl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuQAAADyCAQAAACvvRhBAAADYklEQVR42u3cwY3DQAwEQdlQ/jE7BvEhor1VIdyjMeCtdV+fC4Cw258AQMgBWA250wqARQ6ARQ6ARQ5gkQNgkQMg5AA8DLnTCoBFDoBFDoBFDmCRA2CRA2CRA2CRA1jkAFjkAFjkAFjkABY5ABY5ABY5ABY5gEUOgEUOgEUOgJAD/FvIAbDIAbDIAbDIAYQcgGTIAbDIAbDIAbDIAYQcgGTIAbDIARByAMYhB8AiB0DIARiHHAAhB2Az5E4rAEIOwGbIAbDIARByAIQcQMgBSIYcAIscACEHYBxyACxyAIQcgHHIAbDIARByAMYhByAe8q8/AoBFDsBiyN3IAYQcgM2QA2CRAyDkAAg5wKkhB8AiB0DIARiHHIB4yH1rBcAiB2Az5G7kAEIOgJADMA45ABY5AEIOgJADCDkAyZADEA+5n+gDWOQAbIbcjRxAyAEQcgDGIQcgHnKvVgAscgA2Q+5GDiDkAAg5AOOQAxAPuVcrABY5AJshdyMHEHIAhBwAIQcQcgCSIQcgHnLvyAEscgA2Q+5GDiDkAAg5AEIOcGrIAYiH3PNDAIscAIscAIsc4NSQe7UCIOQACDkAQg4g5AAIOQBCDoCQAwg5AKGQAxAPuW+tAFjkAGyG3I0cQMgBEHIAhBxAyAEQcgCEHAAhBxByAEIhByAect9aAbDIAbDIAbDIAU4NuVcrAEIOgJADIOQAQg6AkAMg5AAIOYCQAyDkAAg5AEIOcELIAYiH3GdsASxyADZD7kYOEA+50wpAPOQAWOQAWOQAjEPun50A8ZA7rQDEQw5APOROKwBCDoCQAyDkAKeGHIB4yD0/BIiH3GkFQMgBEHIAxiEHIB5y/+wEsMgB2Ay5GzlAPOROKwDxkAMQD7nTCoCQAyDkAAg5gJADIOQACDkAQg4g5ACEQg5APOS+tQJgkQNgkQNgkQOcGnKvVgDiIXdaAYiHHIB4yJ1WAIQcACEHQMgBhBwAIQfg/ZADEA+5HwQBWOQAbIbcjRwgHnKnFYB4yAGIh9xpBUDIARByAIQcQMgBEHIA3g85APGQ+0EQgEUOgEUOgEUOcGrIvVoBEHIAhBwAIQcQcgCSIQfAIgdAyAEQcgAhB0DIARByAB6GHIB4yH3GFsAiB2Az5G7kAEIOgJADMA45AGk/i98EjA2eeD8AAAAASUVORK5CYII=";var xl=ki.default.forwardRef(({hiding:e,...t},r)=>ki.default.createElement("div",{ref:r,...t}));xl.displayName="Controls";var wl=f(xl)`
  display: flex;
  bottom: 0;
  position: absolute;
  width: 100%;
  transition: opacity 0.3s;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    z-index: 4;
    width: 100%;
    height: 2000%;
    pointer-events: none;
    background-repeat: repeat-x;
    background-position: bottom;
    background-image: url(${Sl});
    transition: opacity 0.3s;
  }
  ${({hiding:e})=>e?`
      opacity: 0;
    `:`
      opacity: 1;
    `}
`;var pn=y(k());var _f=()=>{let{state:e,dispatch:t}=pn.default.useContext(kr),r=pn.default.useRef(e);return r.current=e,pn.default.useCallback(n=>{if(typeof n=="function"){let i=n(r.current);t(i)}else t(n)},[t])},ye=_f;var Cl=({children:e})=>{let t=_(),r=ye(),o=io.default.useCallback(()=>{if(typeof window!="undefined"&&window.matchMedia){let i=window.matchMedia("(hover: none), (pointer: coarse)");if(i&&i.matches)return}r({type:"controlsHovering",payload:!0})},[r]),n=io.default.useCallback(()=>{r({type:"controlsHovering",payload:!1})},[r]);return io.default.createElement(wl,{hiding:t.hiding,onMouseEnter:o,onMouseLeave:n},e)};Cl.propTypes={children:no.default.oneOfType([no.default.arrayOf(no.default.node),no.default.node]).isRequired};var kl=io.default.memo(Cl,(e,t)=>e.children===t.children);var so=y(k()),Wt=y(U());var dn=y(k());var Pl=(0,dn.forwardRef)(({isFullscreen:e,...t},r)=>dn.default.createElement("div",{ref:r,...t}));Pl.displayName="ControlBar";var Tl=f(Pl)`
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
`,El=H`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  flex: 1;
`,Ll=f.div`
  ${El}
  justify-content: flex-start;
  margin-left: 15px;
`,Ml=f.div`
  ${El}
  justify-content: flex-end;
  margin-right: 15px;
`;var Al=({children:e,extra:t,fullscreen:r})=>so.default.createElement(Tl,{isFullscreen:r},so.default.createElement(Ll,null,e),so.default.createElement(Ml,null,t));Al.propTypes={children:Wt.default.oneOfType([Wt.default.arrayOf(Wt.default.node),Wt.default.node]).isRequired,extra:Wt.default.node.isRequired,fullscreen:Wt.default.bool.isRequired};var Il=so.default.memo(Al,(e,t)=>e.fullscreen===t.fullscreen&&e.children===t.children&&e.extra===t.extra);var ae=y(k()),xe=y(U());var Kt=y(k());var Yt=y(k());var Rl=Yt.default.forwardRef(({isFullscreen:e,hasChapters:t,...r},o)=>Yt.default.createElement("div",{ref:o,...r}));Rl.displayName="Tooltip";var fn=f(Rl)`
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
`,Ol=Yt.default.forwardRef(({isFullscreen:e,showTooltipOnly:t,...r},o)=>Yt.default.createElement("div",{ref:o,...r}));Ol.displayName="Tip";var Dl=f(Ol)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4em 0.8em;
  transform: translateX(-50%);
  font-weight: 500;
  text-align: center;
  color: #fff;
  ${({showTooltipOnly:e})=>e&&`
    border-radius: 4px;
    background: #333;
    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #333 transparent transparent transparent;
    }
  `}
  ${({isFullscreen:e})=>e?`
    font-size: 18px;
  `:`
    font-size: 12px;
  `}
`,Bl=Yt.default.forwardRef(({isFullscreen:e,...t},r)=>Yt.default.createElement("span",{ref:r,...t}));Bl.displayName="ChapterLabel";var ql=f(Bl)`
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
`;var at=f.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
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
`;var Gt=f.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
`,Fl=Kt.default.forwardRef(({isFullscreen:e,...t},r)=>Kt.default.createElement("button",{ref:r,...t}));Fl.displayName="SliderHandle";var Xt=f(Fl)`
  ${at} ${st} & {
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
`,Nl=`
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
`,_l=Kt.default.forwardRef(({isSliding:e,isFullscreen:t,...r},o)=>Kt.default.createElement("div",{ref:o,...r}));_l.displayName="Slider";var Vl=f(_l)`
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
  & ${Gt} {
    -moz-transform: scaleY(0.6);
    -ms-transform: scaleY(0.6);
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
    -moz-transition: -moz-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -ms-transition: -ms-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
  }
  & ${Xt} {
    @media (hover: none), (pointer: coarse) {
      pointer-events: auto;
      opacity: 1;
      box-shadow: none;
    }
  }
  ${({isSliding:e})=>e?`
          & ${Gt} {
            -moz-transform: none;
            -ms-transform: none;
            -webkit-transform: none;
            transform: none;
          }
          & ${Xt} {
            ${Nl}
          }
          & ${fn} {
            display: block;
          }
        `:`
        &:focus ${Gt},
        &:hover ${Gt} {
          -moz-transform: none;
          -ms-transform: none;
          -webkit-transform: none;
          transform: none;
        }
        &:focus ${Xt},
        &:hover ${Xt} {
          ${Nl}
        }
      `}
`,$l=Kt.default.forwardRef(({isFullscreen:e,...t},r)=>Kt.default.createElement("div",{ref:r,...t}));$l.displayName="SlideRail";var Hl=f($l)`
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
`,zl=f.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: center left;
  background-color: rgba(255, 255, 255, 0.5);
`,jl=f.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(-100%, 0);
  background: #f00;
`,Pi=f.div`
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 12px;
  transform: translate(-100%, 0);
  z-index: 4;
`;var Ie=y(k()),vt=y(U());var Ti=y(k());var Ql=Ti.default.forwardRef(({isFullscreen:e,showing:t,hasChapters:r,...o},n)=>Ti.default.createElement("div",{ref:n,...o}));Ql.displayName="TimelensThumbnail";var Ul=f(Ql)`
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
`,Wl=f.div`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  z-index: 4;
`;var Vf=e=>"changedTouches"in e&&e.changedTouches&&1<=e.changedTouches.length?e.changedTouches[0].pageX:"clientX"in e?e.clientX:0,ao=(e,t,r)=>{let o=Vf(e)-t.left;return 0>=o?0:o>=t.width?r:Math.round(r*o/t.width)},Gl=({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:n=0})=>{if(e<=0||r<=0||o<=0)return 0;let i=t/e*r,s=o/2,l=s+n,a=r-s-n;return Math.min(a,Math.max(l,i))},Xl=({duration:e,currentTime:t,sliderWidth:r,handleWidth:o})=>{if(e===0)return{trackTranslateX:"-100",handleTranslateX:"-100"};let n=Gl({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:0}),i=(100*t/e-100).toFixed(1),s=(n/r*100-100).toFixed(1);return{trackTranslateX:i,handleTranslateX:s}},Kl=({duration:e,currentTime:t,sliderWidth:r,tooltipWidth:o})=>(Gl({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:5})/r*100).toFixed(1),Yl=e=>{if(typeof e!="string")throw new TypeError("Time must be a string");if(e.indexOf(";")>0&&(e=e.replace(";",":"),!/\d{2}(:\d{2}){0,3}/i.test(e)))throw new TypeError("Time code must have the format `00:00:00`");let t=e.split(":"),r=0,o=0,n=0,i=0,s=25,l=Math.round(s),a=3600*l,u=60*l;switch(t.length){default:case 1:n=parseInt(t[0],10);break;case 2:o=parseInt(t[0],10),n=parseInt(t[1],10);break;case 3:r=parseInt(t[0],10),o=parseInt(t[1],10),n=parseInt(t[2],10);break;case 4:r=parseInt(t[0],10),o=parseInt(t[1],10),n=parseInt(t[2],10),i=parseInt(t[3],10)}let p=(a*r+u*o+s*n+i)/s;return parseFloat(p.toFixed(3))},Zl=e=>{var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+r}},mn=e=>{let t=0,r=0,o=[];for(var n of e.split(`
`))if(/-->/.test(n)){let[i,s]=(n.match(/(.*) --> (.*)/)||[]).slice(1);t=Yl(i),r=Yl(s)}else if(/png/.test(n)){let[i,s,l,a,u]=(n.match(/(.*)\?xywh=(.*),(.*),(.*),(.*)/)||[]).slice(1);o.push({from:t,to:r,file:i,x:s,y:l,w:a,h:u})}return o};var Ei=Ie.default.forwardRef(({spriteVTTFile:e,sliderRef:t,duration:r=0,fullscreen:o,hasChapters:n=!1},i)=>{let s=_(),[l,a]=Ie.default.useState([]),u=Ie.default.useRef(null),[p,c]=Ie.default.useState(!1),[d,m]=Ie.default.useState({backgroundImage:"",backgroundPosition:"-480px -360px",width:"160px",height:"90px",marginLeft:"0px"});Ie.default.useEffect(()=>{(async()=>{try{let w=await fetch(e).then(h=>h.text()),x=mn(w);a(x)}catch(w){console.error("Error parsing VTT file: ",w)}})()},[e]);let v=Ie.default.useCallback(async w=>{var S;let x=u==null?void 0:u.current,h=t==null?void 0:t.current;if(x&&h&&l.length>0&&s.menuVisible===!1&&s.subMenuVisible===!1){let T=Zl(h),M=w==null?void 0:w.pageX;w!=null&&w.originalEvent&&((S=w==null?void 0:w.originalEvent)!=null&&S.changedTouches)?M=w.originalEvent.changedTouches[0].pageX:w!=null&&w.changedTouches&&(M=w.changedTouches[0].pageX);let L=(M-T.left-h.offsetLeft)/h.offsetWidth,R=L*r,q=L*h.offsetWidth;for(var P of l)if(R>=P.from&&R<=P.to){let C=Math.min(Math.max(0,q-x.offsetWidth/2),h.offsetWidth-x.offsetWidth);m({backgroundImage:`url(${P.file})`,backgroundPosition:-P.x+"px "+-P.y+"px",width:P.w+"px",height:P.h+"px",marginLeft:C+"px"});break}c(!0)}},[u,t,r,l,s.menuVisible,s.subMenuVisible]),g=Ie.default.useCallback(()=>{c(!1)},[]);return Ie.default.useImperativeHandle(i,()=>({handleTimelens:v,setShowTimelens:c})),Ie.default.createElement(Ie.default.Fragment,null,Ie.default.createElement(Wl,{onMouseMove:v,onMouseEnter:v,onMouseLeave:g}),Ie.default.createElement(Ul,{ref:u,showing:p||s.timeSliding,isFullscreen:o,hasChapters:n,style:d}))});Ei.displayName="Timelens";Ei.propTypes={sliderRef:vt.default.oneOfType([vt.default.func,vt.default.shape({current:vt.default.instanceOf(HTMLDivElement)})]),spriteVTTFile:vt.default.string.isRequired,duration:vt.default.number.isRequired,fullscreen:vt.default.bool.isRequired,hasChapters:vt.default.bool};var Jl=Ie.default.memo(Ei,(e,t)=>e.fullscreen===t.fullscreen&&e.sliderRef===t.sliderRef&&e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration&&e.hasChapters===t.hasChapters);var Dt=y(k()),Je=y(U());Qe();var eu=({sliderRef:e,duration:t,tooltip:r,showTooltip:o,showTooltipOnly:n=!1,chapterTitle:i,fullscreen:s})=>{let l=Dt.default.useRef(null),[a,u]=Dt.default.useState("0");return Dt.default.useLayoutEffect(()=>{var c,d;let p=Kl({duration:t,currentTime:r,sliderWidth:((c=e.current)==null?void 0:c.offsetWidth)||0,tooltipWidth:((d=l.current)==null?void 0:d.offsetWidth)||0});u(p)},[t,r,i,e]),Dt.default.createElement(fn,{style:{display:o?"block":"",transform:`translateX(${a}%)`},isFullscreen:s},Dt.default.createElement(Dl,{ref:l,isFullscreen:s,showTooltipOnly:n},i&&Dt.default.createElement(ql,{isFullscreen:s},i),Ve(r)))};eu.propTypes={sliderRef:Je.default.oneOfType([Je.default.func,Je.default.shape({current:Je.default.instanceOf(HTMLDivElement)})]),duration:Je.default.number.isRequired,tooltip:Je.default.number.isRequired,showTooltip:Je.default.bool.isRequired,showTooltipOnly:Je.default.bool,chapterTitle:Je.default.string,fullscreen:Je.default.bool.isRequired};var tu=Dt.default.memo(eu,(e,t)=>e.sliderRef===t.sliderRef&&e.duration===t.duration&&e.tooltip===t.tooltip&&e.showTooltip===t.showTooltip&&e.showTooltipOnly===t.showTooltipOnly&&e.chapterTitle===t.chapterTitle&&e.fullscreen===t.fullscreen);var Er=y(k()),$e=y(U());var lo=y(k());var ru=lo.default.forwardRef(({isFullscreen:e,...t},r)=>lo.default.createElement("div",{ref:r,...t}));ru.displayName="ChapterSegmentsContainer";var ou=f(ru)`
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
`,nu=lo.default.forwardRef(({isFullscreen:e,isHovered:t,...r},o)=>lo.default.createElement("div",{ref:o,...r}));nu.displayName="ChapterSegment";var iu=f(nu)`
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
`,su=f.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`,au=f.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #f00;
`;var lu=({segments:e,currentTime:t,duration:r,bufferedScaleX:o,hoveredIndex:n,fullscreen:i})=>e.length===0||r<=0?null:Er.default.createElement(ou,{isFullscreen:i},e.map((s,l)=>{let a=s.endTime-s.startTime,u=a/r*100,p=0;t>=s.endTime?p=100:t>s.startTime&&(p=(t-s.startTime)/a*100);let c=o*r,d=0;return c>=s.endTime?d=100:c>s.startTime&&(d=(c-s.startTime)/a*100),Er.default.createElement(iu,{key:l,style:{width:`${u}%`},title:s.title,isFullscreen:i,isHovered:n===l},Er.default.createElement(su,{style:{width:`${d}%`}}),Er.default.createElement(au,{style:{width:`${p}%`}}))}));lu.propTypes={segments:$e.default.arrayOf($e.default.shape({title:$e.default.string.isRequired,startTime:$e.default.number.isRequired,endTime:$e.default.number.isRequired,startPercent:$e.default.number.isRequired,endPercent:$e.default.number.isRequired})).isRequired,currentTime:$e.default.number.isRequired,duration:$e.default.number.isRequired,bufferedScaleX:$e.default.number.isRequired,hoveredIndex:$e.default.number,fullscreen:$e.default.bool.isRequired};var uu=Er.default.memo(lu);var lt=y(k()),Zt=y(U());var Li=y(k());var cu=Li.default.forwardRef(({isFullscreen:e,bottomOffset:t,visible:r,...o},n)=>Li.default.createElement("div",{ref:n,...o}));cu.displayName="HeatmapContainer";var pu=f(cu)`
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
`,du=f.svg`
  display: block;
  width: 100%;
  height: 100%;
`;var fu=({strokePath:e,currentTime:t,duration:r,isFullscreen:o,bottomOffset:n,visible:i})=>{let l=`heatmap-played-${lt.default.useId()}`,a=r>0?t/r*100:0;return lt.default.createElement(pu,{isFullscreen:o,bottomOffset:n,visible:i},lt.default.createElement(du,{viewBox:"0 0 100 100",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},lt.default.createElement("defs",null,lt.default.createElement("clipPath",{id:l},lt.default.createElement("rect",{x:"0",y:"0",width:a,height:"100"}))),lt.default.createElement("path",{d:e,fill:"none",stroke:"rgba(255, 255, 255, 0.75)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"}),lt.default.createElement("path",{d:e,fill:"none",stroke:"rgba(255, 255, 255, 1)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",clipPath:`url(#${l})`})))};fu.propTypes={strokePath:Zt.default.string.isRequired,currentTime:Zt.default.number.isRequired,duration:Zt.default.number.isRequired,isFullscreen:Zt.default.bool.isRequired,bottomOffset:Zt.default.number,visible:Zt.default.bool};var hn=lt.default.memo(fu,(e,t)=>e.strokePath===t.strokePath&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.isFullscreen===t.isFullscreen&&e.bottomOffset===t.bottomOffset&&e.visible===t.visible);var se=y(k());var $f=({timelensRef:e,currentTime:t,duration:r,onChange:o,onSeeking:n})=>{let i=ye(),s=se.default.useRef(null),l=se.default.useRef(null),[a,u]=se.default.useState(!1),[p,c]=se.default.useState(!1),[d,m]=se.default.useState({left:0,width:0}),[v,g]=se.default.useState({value:0,tooltip:0}),w=se.default.useCallback(b=>{b.preventDefault();let N=b.currentTarget.getBoundingClientRect(),$=ao(b,N,r);i({type:"timeSliding",payload:!1}),c(!1),o($),n(!1),e.current&&e.current.handleTimelens(b)},[o,r,i,e,n]),x=se.default.useCallback(b=>{if(b.preventDefault(),s.current!==null){let N=s.current.getBoundingClientRect();i({type:"timeSliding",payload:!0}),m($=>({...$,left:N.left,width:N.width})),e.current&&e.current.handleTimelens(b),c(!0),n(!0)}},[e,i,n]),h=se.default.useCallback(b=>{var $,j,Z,ve,ze,A,D,ne;b.preventDefault();let N=ao(b,{left:d.left,width:d.width},r);if(i({type:"timeSliding",payload:!1}),c(!1),g(Y=>({...Y,value:N})),o(N),n(!1),e.current&&e.current.setShowTimelens(!1),s.current){let Y=s.current.getBoundingClientRect(),me=(ve=(Z=b.clientX)!=null?Z:(j=($=b.changedTouches)==null?void 0:$[0])==null?void 0:j.clientX)!=null?ve:0,de=(ne=(D=b.clientY)!=null?D:(A=(ze=b.changedTouches)==null?void 0:ze[0])==null?void 0:A.clientY)!=null?ne:0;(me<Y.left||me>Y.right||de<Y.top||de>Y.bottom)&&u(!1)}},[o,r,d,i,n,e]),P=se.default.useRef(null),S=se.default.useCallback(b=>{var j,Z,ve,ze,A,D,ne,Y;b.preventDefault(),P.current&&cancelAnimationFrame(P.current);let N=(ze=(ve=b.clientX)!=null?ve:(Z=(j=b.touches)==null?void 0:j[0])==null?void 0:Z.clientX)!=null?ze:0,$=(Y=(ne=b.pageX)!=null?ne:(D=(A=b.touches)==null?void 0:A[0])==null?void 0:D.pageX)!=null?Y:0;P.current=requestAnimationFrame(()=>{let me=ao({clientX:N},{left:d.left,width:d.width},r);g(de=>({...de,value:me})),o(me),e.current&&e.current.handleTimelens({clientX:N,pageX:$}),P.current=null})},[r,d,e,o]);se.default.useEffect(()=>(p&&(document.addEventListener("mousemove",S),document.addEventListener("mouseup",h),document.addEventListener("touchmove",S),document.addEventListener("touchcancel",h),document.addEventListener("touchend",h)),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",h),document.removeEventListener("touchmove",S),document.removeEventListener("touchcancel",h),document.removeEventListener("touchend",h),P.current&&(cancelAnimationFrame(P.current),P.current=null)}),[p,S,h]);let T=se.default.useCallback(b=>{if(b.preventDefault(),s.current!==null){let N=s.current.getBoundingClientRect();m($=>({...$,left:N.left,width:N.width})),e.current&&e.current.handleTimelens(b)}},[e]),M=se.default.useCallback(b=>{b.preventDefault();let N=ao(b,{left:d.left,width:d.width},r);g($=>({...$,tooltip:N})),e.current&&e.current.handleTimelens(b)},[r,d.left,d.width,e]),E=se.default.useRef(null),L=se.default.useCallback(()=>{E.current&&clearTimeout(E.current),E.current=setTimeout(()=>{if(!s||!s.current)return;let b=s.current.getBoundingClientRect();m(N=>({...N,left:b.left,width:b.width})),E.current=null},100)},[]),R=se.default.useCallback(b=>{e.current&&e.current.handleTimelens(b),u(!0)},[e]),q=se.default.useCallback(()=>{e.current&&e.current.setShowTimelens(!1),u(!1)},[e]);se.default.useEffect(()=>{if(typeof window!="undefined")return window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L),E.current&&clearTimeout(E.current)}},[L]);let C=se.default.useMemo(()=>{var b;return Xl({duration:r,currentTime:p?v.value:t,sliderWidth:d.width,handleWidth:((b=l.current)==null?void 0:b.offsetWidth)||0})},[r,t,v.value,p,l,d]);return{sliderRef:s,handleRef:l,showTooltip:a,timeSliderSliding:p,timeSliderState:v,trackTranslateX:{track:C.trackTranslateX,handle:C.handleTranslateX},onClick:w,onMouseDown:x,onSliderMouseOver:T,onSliderMouseMove:M,onMouseEnter:R,onMouseLeave:q}},mu=$f;var Mi=y(k());var hu=y(k()),yu=y(Do());function Jt(e){let t=hu.default.useRef(e);return(0,yu.default)(e,t.current)||(t.current=e),t.current}var Hf=({chapters:e,duration:t})=>{let r=Jt(e),o=Mi.default.useMemo(()=>{if(!r||r.length===0||t<=0)return[];let i=[...r].filter(s=>s.startTime<t).sort((s,l)=>s.startTime-l.startTime);return i.map((s,l)=>{let a=l<i.length-1?i[l+1].startTime:t,u=Math.min(a,t);return{title:s.title,startTime:s.startTime,endTime:u,startPercent:s.startTime/t*100,endPercent:u/t*100}})},[r,t]),n=Mi.default.useCallback(i=>{if(o.length===0)return null;for(let s=o.length-1;s>=0;s--)if(i>=o[s].startTime)return o[s];return o[0]},[o]);return{segments:o,getChapterAtTime:n}},Lr=Hf;var gu=y(k());var zf=({heatmapData:e,duration:t})=>{let r=Jt(e),o=gu.default.useMemo(()=>{if(!r||r.length===0||t<=0)return{svgPath:"",strokePath:""};let i=r.map(c=>{let m=(c.startTime+c.endTime)/2/t*100,g=100-Math.max(0,Math.min(1,c.value))*100;return{x:m,y:g}});if(i.length<2)return{svgPath:"",strokePath:""};let s=6,l=i.length+2,a=c=>c<=0?{x:0,y:100}:c>=l-1?{x:100,y:100}:i[c-1],u=`M ${a(0).x},${a(0).y}`;for(let c=0;c<l-1;c++){let d=a(c-1),m=a(c),v=a(c+1),g=a(c+2),w=m.x+(v.x-d.x)/s,x=m.y+(v.y-d.y)/s,h=v.x-(g.x-m.x)/s,P=v.y-(g.y-m.y)/s;u+=` C ${w},${x} ${h},${P} ${v.x},${v.y}`}return{strokePath:u}},[r,t]),n=o.strokePath.length>0;return{strokePath:o.strokePath,hasHeatmap:n}},yn=zf;Qe();var bu=({spriteVTTFile:e,chapters:t,heatmapData:r,currentTime:o,duration:n,buffered:i,onChange:s,onSeeking:l,fullscreen:a})=>{let{i18n:u}=_(),p=ae.default.useRef(null),{sliderRef:c,handleRef:d,showTooltip:m,timeSliderSliding:v,timeSliderState:g,trackTranslateX:w,onClick:x,onMouseDown:h,onSliderMouseOver:P,onSliderMouseMove:S,onMouseEnter:T,onMouseLeave:M}=mu({timelensRef:p,currentTime:o,duration:n,onChange:s,onSeeking:l}),{segments:E,getChapterAtTime:L}=Lr({chapters:t,duration:n}),R=E.length>0,{strokePath:q,hasHeatmap:C}=yn({heatmapData:r,duration:n}),b=ae.default.useMemo(()=>{let $=v?g.value:g.tooltip;return L($)},[v,g.value,g.tooltip,L]),N=ae.default.useMemo(()=>!b||!m?-1:E.findIndex($=>$.startTime===b.startTime),[b,m,E]);return ae.default.createElement(Vl,{ref:c,role:"slider","aria-label":u.timeBar,"aria-valuemin":0,"aria-valuemax":n,"aria-valuenow":o,"aria-valuetext":Ve(Math.round(o)),tabIndex:0,onClick:x,onMouseDown:h,onTouchStart:h,onKeyDown:()=>{},onMouseOver:P,onMouseMove:S,onMouseEnter:T,onMouseLeave:M,onFocus:()=>{},isSliding:v,isFullscreen:a},R?ae.default.createElement(ae.default.Fragment,null,ae.default.createElement(Gt,null,ae.default.createElement(uu,{segments:E,currentTime:v?g.value:o,duration:n,bufferedScaleX:i,hoveredIndex:N,fullscreen:a}),ae.default.createElement(Pi,{style:{transform:`translateX(${w.handle}%)`}},ae.default.createElement(Xt,{ref:d,type:"button",onMouseDown:h,onTouchStart:h,isFullscreen:a})))):ae.default.createElement(Gt,null,ae.default.createElement(Hl,{isFullscreen:a},ae.default.createElement(zl,{style:{transform:`scaleX(${i})`}}),ae.default.createElement(jl,{style:{transform:`translateX(${w.track}%)`}})),ae.default.createElement(Pi,{style:{transform:`translateX(${w.handle}%)`}},ae.default.createElement(Xt,{ref:d,type:"button",onMouseDown:h,onTouchStart:h,isFullscreen:a}))),ae.default.createElement(tu,{sliderRef:c,showTooltip:m,duration:n,tooltip:v?g.value:g.tooltip,showTooltipOnly:!e,chapterTitle:b==null?void 0:b.title,fullscreen:a}),C&&ae.default.createElement(hn,{strokePath:q,currentTime:v?g.value:o,duration:n,isFullscreen:a,visible:m||v}),e&&ae.default.createElement(Jl,{ref:p,sliderRef:c,duration:n,spriteVTTFile:e,fullscreen:a,hasChapters:R}))};bu.propTypes={spriteVTTFile:xe.default.string,chapters:xe.default.arrayOf(xe.default.shape({title:xe.default.string.isRequired,startTime:xe.default.number.isRequired})),heatmapData:xe.default.arrayOf(xe.default.shape({startTime:xe.default.number.isRequired,endTime:xe.default.number.isRequired,value:xe.default.number.isRequired})),currentTime:xe.default.number.isRequired,duration:xe.default.number.isRequired,buffered:xe.default.number.isRequired||null,onChange:xe.default.func.isRequired,fullscreen:xe.default.bool.isRequired};var vu=ae.default.memo(bu,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.buffered===t.buffered&&e.onChange===t.onChange&&e.onSeeking===t.onSeeking&&e.fullscreen===t.fullscreen);var fo=y(k()),tr=y(U());var co=y(k());var Ge=y(k());var jf=H`
  display: flex;
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
`,Qf=H`
  align-items: center;
  padding: 0 8px;
  font-size: 14px;
`,Uf=H`
  width: 54px;
  height: 54px;
`,Wf=H`
  width: 36px;
  height: 36px;
`,Yf=H`
  font-size: 145% !important;
`,Su=Ge.default.forwardRef(({isFullscreen:e=!1,title:t,...r},o)=>Ge.default.createElement("div",{ref:o,...r}));Su.displayName="TooltipText";var Gf=f(Su)`
  display: flex;
  position: absolute;
  pointer-events: none;
  font-weight: 500;
  z-index: 7;
  background-color: rgba(15, 15, 15, 0.9);
  border-radius: 4px;
  padding: 5px 10px;
  min-height: 25px;
  white-space: pre;
  ${({isFullscreen:e})=>e?`
    top: -45px;
    font-size: 130%;
  `:`
    top: -35px;
    font-size: 90%;
  `}
`,xu=Ge.default.forwardRef(({isText:e,isFullscreen:t=!1,isTooltipActive:r=!1,isFakeDisabled:o=!1,title:n,...i},s)=>{let l=_(),a=Ge.default.useRef(null),[u,p]=Ge.default.useState(null),c=Ge.default.useCallback(g=>{var E;i.onMouseEnter&&i.onMouseEnter(g);let w=a==null?void 0:a.current,x=(E=l.playerRef)==null?void 0:E.current;if(!w||!x||x.querySelectorAll('[aria-expanded="true"]').length>0||r===!1){p(null);return}let h=w.getBoundingClientRect(),P=x.getBoundingClientRect(),S=g.target.hasAttribute("aria-expanded")?g.target.parentElement:g.target,T=(S==null?void 0:S.offsetWidth)||0,M=(S==null?void 0:S.offsetLeft)||0;M+T/2<=h.width/2?p(-M+15):M<=15?p(0):M+h.width/2>P.width-15?p(-1*(h.width-T)):p(-1*(h.width/2-T/2))},[r,i,l.playerRef]),d=Ge.default.useCallback(g=>{p(null),i.onMouseLeave&&i.onMouseLeave(g)},[i]),m=Ge.default.useCallback(g=>{o===!1&&p(null),i.onClick&&i.onClick(g)},[i,o]),v=Ge.default.useCallback(g=>{o===!1&&p(null),i.onMouseDown&&i.onMouseDown(g)},[i,o]);return Ge.default.createElement("button",{ref:s,title:n,onMouseEnter:c,onMouseLeave:d,onClick:m,onMouseDown:v,...i},i.children,Ge.default.createElement(Gf,{ref:a,isFullscreen:t,style:{opacity:u===null?0:1,left:u||0}},n))});xu.displayName="GeneralButton";var Xf=f(xu)`
  ${at} ${st} & {
    ${jf}
    ${({isFullscreen:e,isText:t})=>!t&&(e?Uf:Wf)}
    ${({isFullscreen:e,isText:t})=>e&&t&&Yf}
    ${({isText:e})=>e&&Qf}
    ${({isFakeDisabled:e})=>e&&`
      color: #a4a4a4;
    `}
  }
`,K=Xf;var wu=co.default.forwardRef(({isFullscreen:e,...t},r)=>co.default.createElement("div",{ref:r,...t}));wu.displayName="SliderWrapper";var uo=f(wu)`
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
`,Cu=co.default.forwardRef(({isSliding:e,isFullscreen:t,...r},o)=>co.default.createElement("div",{ref:o,...r}));Cu.displayName="SliderContainer";var ku=f(Cu)`
  display: flex;
  padding-right: 3px;
  @media (max-width: 575px) {
    display: none;
  }

  ${({isSliding:e,isFullscreen:t})=>e?`
      & ${uo} {
        width: ${bt(t)}px;
        -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
      }
      `:`
          & ${K}:hover ~ ${uo},
          & ${uo}:hover {
              width: ${bt(t)}px;
              -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
          }
      `}
`;var Mr=y(k()),po=y(U());var et=y(k());var gn=({clientX:e,sliderRef:t,isFullcreen:r})=>{if(!t.current)return 0;let o=t.current.getBoundingClientRect(),i=(e-o.left)/bt(r)*100;return i<0?i=0:i>100&&(i=100),i};var Kf=({fullscreen:e,value:t,onChange:r})=>{let o=_(),n=ye(),i=et.default.useRef(null),s=et.default.useRef(null),[l,a]=et.default.useState(0);et.default.useEffect(()=>{if(i!=null&&i.current&&(s!=null&&s.current)){let v=s.current.getBoundingClientRect(),g=t/100*bt(e)-v.width/2,w=g;g<0?w=0:g>bt(e)-v.width&&(w=bt(e)-v.width),a(w)}},[t,e]);let u=et.default.useCallback(v=>{if(r){let g=gn({clientX:v.clientX,sliderRef:i,isFullcreen:e});r(g)}},[r,e]),p=et.default.useCallback(v=>{v.preventDefault(),i!=null&&i.current&&n({type:"volumeSliding",payload:!0})},[n]),c=et.default.useCallback(v=>{v.preventDefault(),n({type:"volumeSliding",payload:!1});let g=gn({clientX:v.clientX,sliderRef:i,isFullcreen:e});r(g)},[r,e,n]),d=et.default.useRef(null),m=et.default.useCallback(v=>{var w,x,h,P;if(v.preventDefault(),!o.volumeSliding)return;d.current&&cancelAnimationFrame(d.current);let g=(P=(h=v.clientX)!=null?h:(x=(w=v.touches)==null?void 0:w[0])==null?void 0:x.clientX)!=null?P:0;d.current=requestAnimationFrame(()=>{let S=gn({clientX:g,sliderRef:i,isFullcreen:e});r(S),d.current=null})},[o.volumeSliding,e,r]);return et.default.useEffect(()=>(o.volumeSliding&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",c),document.addEventListener("touchmove",m),document.addEventListener("touchcancel",c),document.addEventListener("touchend",c)),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",m),document.removeEventListener("touchcancel",c),document.removeEventListener("touchend",c),d.current&&(cancelAnimationFrame(d.current),d.current=null)}),[o.volumeSliding,m,c]),{thumbLeft:l,sliderRef:i,thumbRef:s,onMouseDown:p,onMouseMove:m,handleChange:u}},Pu=Kf;var er=y(k());var Tu=er.default.forwardRef(({isFullscreen:e,...t},r)=>er.default.createElement("div",{ref:r,...t}));Tu.displayName="SliderContainer";var Eu=f(Tu)`
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
`,Lu=er.default.forwardRef(({isFullscreen:e,isDisabled:t,...r},o)=>er.default.createElement("div",{ref:o,...r}));Lu.displayName="SliderTrack";var Mu=f(Lu)`
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
`,Au=er.default.forwardRef(({isFullscreen:e,isDisabled:t,...r},o)=>er.default.createElement("div",{ref:o,...r}));Au.displayName="SliderThumb";var Iu=f(Au)`
  ${at} ${st} & {
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
`;var Ru=({fullscreen:e,value:t,isDisabled:r,onChange:o})=>{let{thumbLeft:n,sliderRef:i,thumbRef:s,onMouseMove:l,onMouseDown:a,handleChange:u}=Pu({fullscreen:e,value:t,onChange:o});return Mr.default.createElement(uo,{ref:i,role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":Math.round(t),"aria-valuetext":`${Math.round(t)}%`,onClick:u,onMouseDown:a,onTouchStart:a,isFullscreen:e},Mr.default.createElement(Eu,{onMouseMove:l,isFullscreen:e},Mr.default.createElement(Mu,{style:{width:`${t}%`},isFullscreen:e,isDisabled:r}),Mr.default.createElement(Iu,{ref:s,style:{left:`${n}px`},onMouseDown:a,onTouchStart:a,isFullscreen:e,isDisabled:r})))};Ru.propTypes={value:po.default.number.isRequired,onChange:po.default.func.isRequired,isDisabled:po.default.bool.isRequired,fullscreen:po.default.bool.isRequired};var Ou=Mr.default.memo(Ru,(e,t)=>e.fullscreen===t.fullscreen&&e.value===t.value&&e.onChange===t.onChange&&e.isDisabled===t.isDisabled);var St=y(k());var Ar=y(k());var Ai=({width:e=36,height:t=36})=>Ar.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Ar.default.createElement("path",{d:"M 22.5 18 C 22.5 16.189 21.48 14.624 20 13.87 L 20 22.136 C 21.48 21.377 22.5 19.812 22.5 18 Z"}),Ar.default.createElement("polygon",{points:"9 14.922 9 21.078 13 21.078 18 26.21 18 9.79 13 14.922"}),Ar.default.createElement("path",{d:"M 20 9 L 20 11.119 C 22.89 12.002 25 14.747 25 18 C 25 21.253 22.89 23.999 20 24.881 L 20 27 C 24.005 26.066 27 22.398 27 18 C 27 13.603 24.005 9.934 20 9 Z"}));Ai.displayName="UnmutedIcon";Ai.propTypes=G;var Du=Ar.default.memo(Ai,X);var Zf=({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i})=>{let s=_(),l=St.default.useMemo(()=>De(e),[e]),a=St.default.useMemo(()=>t===!0||r===0||o,[t,r,o]),u=St.default.useCallback(()=>a?St.default.createElement(tn,{...l}):St.default.createElement(Du,{...l}),[a,l]),p=St.default.useMemo(()=>o?s.i18n.thisVideoHasNoSound:a?s.i18n.activateSound:s.i18n.mute,[a,o,s.i18n]),c=St.default.useCallback(m=>{o===!1&&n(m/100)},[n,o]),d=St.default.useCallback(()=>{o===!1&&i(a)},[i,a,o]);return{titleMemorized:p,renderIcon:u,handleOnClick:d,handleChange:c}},Bu=Zf;var qu=({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i})=>{let s=_(),{titleMemorized:l,renderIcon:a,handleOnClick:u,handleChange:p}=Bu({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i});return fo.default.createElement(ku,{isSliding:s.volumeSliding,isFullscreen:e},fo.default.createElement(K,{type:"button","aria-label":l,title:l,onClick:u,isFullscreen:e,isFakeDisabled:o,isTooltipActive:!0},a()),fo.default.createElement(Ou,{fullscreen:e,value:r*100,isDisabled:o,onChange:p}))};qu.propTypes={fullscreen:tr.default.bool.isRequired,isMuted:tr.default.bool.isRequired,volume:tr.default.number.isRequired,onMutedClick:tr.default.func.isRequired,forceMuted:tr.default.bool.isRequired,changeVolume:tr.default.func.isRequired};var Nu=fo.default.memo(qu,(e,t)=>e.fullscreen===t.fullscreen&&e.isMuted===t.isMuted&&e.volume===t.volume&&e.forceMuted===t.forceMuted&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume);var Ir=y(k()),mo=y(U());var Ii=f.div`
  display: inline-block;
  height: 36px;
  padding: 0 5px;
  font-size: 13px;
  line-height: 35px;
  white-space: nowrap;
`,Fu=f.span`
  position: relative;
  top: -2px;
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 50%;
  background: #ff0000;
`,_u=f.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
`;Qe();var Vu=({live:e,duration:t,currentTime:r,chapterTitle:o})=>{let{i18n:n}=_();return Ir.default.createElement(Ii,{role:"timer","aria-live":"off"},Ve(Math.round(r)),e?Ir.default.createElement(Ii,null,Ir.default.createElement(Fu,null),n.live):` / ${Ve(Math.round(t))}`,o&&Ir.default.createElement(_u,null," \xB7 ",o))};Vu.propTypes={live:mo.default.bool.isRequired,duration:mo.default.number.isRequired,currentTime:mo.default.number.isRequired,chapterTitle:mo.default.string};var $u=Ir.default.memo(Vu,(e,t)=>e.live===t.live&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.chapterTitle===t.chapterTitle);var xt=y(k()),Rr=y(U());var ho=y(k());var Ri=({width:e=36,height:t=36})=>ho.default.createElement("svg",{height:e,width:t,version:"1.1",viewBox:"0 0 36 36",fill:"currentColor"},ho.default.createElement("rect",{x:"12",y:"10",width:"3",height:"16"}),ho.default.createElement("rect",{x:"21",y:"10",width:"3",height:"16"}));Ri.displayName="PauseIcon";Ri.propTypes=G;var Hu=ho.default.memo(Ri,X);var zu=({fullscreen:e,paused:t,ended:r,onPlayClick:o,onPauseClick:n})=>{let{i18n:i}=_(),s=xt.default.useMemo(()=>De(e),[e]);return r?xt.default.createElement(K,{type:"button","aria-label":i.replay,title:i.replay,onClick:o,isFullscreen:e,isTooltipActive:!0},xt.default.createElement(Pr,{...s})):t?xt.default.createElement(K,{type:"button","aria-label":i.play,title:i.play,onClick:o,isFullscreen:e,isTooltipActive:!0},xt.default.createElement(Cr,{...s})):xt.default.createElement(K,{type:"button","aria-label":i.pause,title:i.pause,onClick:n,isFullscreen:e,isTooltipActive:!0},xt.default.createElement(Hu,{...s}))};zu.propTypes={fullscreen:Rr.default.bool.isRequired,paused:Rr.default.bool.isRequired,ended:Rr.default.bool.isRequired,onPlayClick:Rr.default.func.isRequired,onPauseClick:Rr.default.func.isRequired};var ju=xt.default.memo(zu,(e,t)=>e.fullscreen===t.fullscreen&&e.paused===t.paused&&e.ended===t.ended&&e.onPlayClick===t.onPlayClick&&e.onPauseClick===t.onPauseClick);var wt=y(k()),rr=y(U());var bn=y(k());var Oi=({width:e=36,height:t=36})=>bn.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},bn.default.createElement("path",{d:"M 22.789 12.113 C 22.918 12.014 23.028 11.98 23.117 12.011 C 23.206 12.042 23.25 12.126 23.25 12.261 L 23.25 23.739 C 23.25 23.874 23.206 23.958 23.117 23.989 C 23.028 24.02 22.918 23.986 22.789 23.887 L 15.508 18.351 C 15.447 18.304 15.402 18.255 15.375 18.203 L 15.375 23.49 C 15.375 23.625 15.31 23.742 15.18 23.841 C 15.05 23.939 14.896 23.989 14.719 23.989 L 13.406 23.989 C 13.229 23.989 13.075 23.939 12.945 23.841 C 12.815 23.742 12.75 23.625 12.75 23.49 L 12.75 12.51 C 12.75 12.375 12.815 12.258 12.945 12.159 C 13.075 12.061 13.229 12.011 13.406 12.011 L 14.719 12.011 C 14.896 12.011 15.05 12.061 15.18 12.159 C 15.31 12.258 15.375 12.375 15.375 12.51 L 15.375 17.797 C 15.402 17.745 15.447 17.696 15.508 17.649 Z"}));Oi.displayName="PreviousTrackIcon";Oi.propTypes=G;var Qu=bn.default.memo(Oi,X);var vn=y(k());var Di=({width:e=36,height:t=36})=>vn.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},vn.default.createElement("path",{d:"M 13.211 12.113 C 13.082 12.014 12.972 11.98 12.883 12.011 C 12.794 12.042 12.75 12.126 12.75 12.261 L 12.75 23.739 C 12.75 23.874 12.794 23.958 12.883 23.989 C 12.972 24.02 13.082 23.986 13.211 23.887 L 20.492 17.649 C 20.553 17.696 20.598 17.745 20.625 17.797 L 20.625 12.51 C 20.625 12.375 20.69 12.258 20.82 12.159 C 20.95 12.061 21.104 12.011 21.281 12.011 L 22.594 12.011 C 22.771 12.011 22.925 12.061 23.055 12.159 C 23.185 12.258 23.25 12.375 23.25 12.51 L 23.25 23.49 C 23.25 23.625 23.185 23.742 23.055 23.841 C 22.925 23.939 22.771 23.989 22.594 23.989 L 21.281 23.989 C 21.104 23.989 20.95 23.939 20.82 23.841 C 20.69 23.742 20.625 23.625 20.625 23.49 L 20.625 18.203 C 20.598 18.255 20.553 18.304 20.492 18.351 Z"}));Di.displayName="NextTrackIcon";Di.propTypes=G;var Uu=vn.default.memo(Di,X);var Sn=wt.default.memo(({fullscreen:e,onPrevious:t,showNavButtons:r=!1})=>{let{i18n:o}=_(),n=wt.default.useMemo(()=>De(e),[e]),i=typeof t=="function";return!i&&!r?null:wt.default.createElement(K,{type:"button","aria-label":o.previous||"Previous",title:o.previous||"Previous",onClick:i?t:void 0,isFullscreen:e,isTooltipActive:!0,isFakeDisabled:!i},wt.default.createElement(Qu,{...n}))});Sn.displayName="PreviousButton";Sn.propTypes={fullscreen:rr.default.bool.isRequired,onPrevious:rr.default.func,showNavButtons:rr.default.bool};var xn=wt.default.memo(({fullscreen:e,onNext:t,showNavButtons:r=!1})=>{let{i18n:o}=_(),n=wt.default.useMemo(()=>De(e),[e]),i=typeof t=="function";return!i&&!r?null:wt.default.createElement(K,{type:"button","aria-label":o.next||"Next",title:o.next||"Next",onClick:i?t:void 0,isFullscreen:e,isTooltipActive:!0,isFakeDisabled:!i},wt.default.createElement(Uu,{...n}))});xn.displayName="NextButton";xn.propTypes={fullscreen:rr.default.bool.isRequired,onNext:rr.default.func,showNavButtons:rr.default.bool};var or=y(k()),kn=y(U());var wn=y(k());var Bi=({width:e=36,height:t=36})=>wn.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36"},wn.default.createElement("path",{fill:"currentColor",d:"M 12 20.667 L 10 20.667 L 10 26 L 15.333 26 L 15.333 24 L 12 24 L 12 20.667 Z M 10 15.333 L 12 15.333 L 12 12 L 15.333 12 L 15.333 10 L 10 10 L 10 15.333 Z M 24 24 L 20.667 24 L 20.667 26 L 26 26 L 26 20.667 L 24 20.667 L 24 24 Z M 20.667 10 L 20.667 12 L 24 12 L 24 15.333 L 26 15.333 L 26 10 L 20.667 10 Z"}));Bi.displayName="FullscreenIcon";Bi.propTypes=G;var Wu=wn.default.memo(Bi,X);var Cn=y(k());var qi=({width:e=36,height:t=36})=>Cn.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},Cn.default.createElement("path",{d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"}));qi.displayName="UnfullscreenIcon";qi.propTypes=G;var Yu=Cn.default.memo(qi,X);var Gu=({fullscreen:e,requestFullscreen:t,exitFullscreen:r})=>{let{i18n:o}=_(),n=or.default.useMemo(()=>De(e),[e]);return e?or.default.createElement(K,{type:"button","aria-label":o.exitFullScreenMode,title:o.exitFullScreenMode,onClick:r,isFullscreen:!0,isTooltipActive:!0},or.default.createElement(Yu,{...n})):or.default.createElement(K,{type:"button","aria-label":o.fullScreen,title:o.fullScreen,onClick:t,isTooltipActive:!0},or.default.createElement(Wu,{...n}))};Gu.propTypes={fullscreen:kn.default.bool.isRequired,requestFullscreen:kn.default.func.isRequired,exitFullscreen:kn.default.func.isRequired};var Xu=or.default.memo(Gu,(e,t)=>e.fullscreen===t.fullscreen&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen);var Bt=y(k());var Jf=3*1e3,em=({hasResource:e,loading:t,prevented:r,paused:o,ended:n,waiting:i,seeking:s,kernelMsg:l})=>{let{controlsHovering:a,timeSliding:u,menuVisible:p,subMenuVisible:c}=_(),d=ye(),m=Bt.default.useRef(void 0),v=e===!1||t||r||o||n||i||s||u||p||c||a||l,g=Bt.default.useRef(v);g.current=v;let w=e===!1||t||r||o||n||i||s||u||p||c||l,x=Bt.default.useRef(w);x.current=w;let h=Bt.default.useCallback(()=>{typeof window!="undefined"&&window.clearTimeout(m.current),d({type:"hiding",payload:!1}),!g.current&&(m.current=window.setTimeout(()=>{d({type:"hiding",payload:!0})},Jf))},[d]),P=Bt.default.useCallback(()=>{if(typeof window!="undefined"&&window.clearTimeout(m.current),d({type:"controlsHovering",payload:!1}),x.current){d({type:"hiding",payload:!1});return}d({type:"hiding",payload:!0})},[d]);return Bt.default.useEffect(()=>{typeof window!="undefined"&&(o||n)?(window.clearTimeout(m.current),d({type:"hiding",payload:!1})):!o&&!n&&h()},[o,n,h,d]),Bt.default.useEffect(()=>()=>{typeof window!="undefined"&&window.clearTimeout(m.current)},[]),{showControls:h,hideControls:P}},Ku=em;var Ct=y(k()),yo=y(U());var Zu=f.div`
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
  ${({$visible:e})=>e?H`
          opacity: 1;
          pointer-events: none;
        `:H`
          opacity: 0;
          pointer-events: none;
        `}
`,Ju=f.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`;var ec=({spriteVTTFile:e,duration:t,seekTime:r,visible:o})=>{let[n,i]=Ct.default.useState([]),[s,l]=Ct.default.useState({}),a=Ct.default.useRef(null);Ct.default.useEffect(()=>{if(!e)return;let p=!1;return(async()=>{try{let c=await fetch(e).then(g=>g.text());if(p)return;let d=mn(c);i(d);let m=[...new Set(d.map(g=>g.file))],v={};await Promise.all(m.map(g=>new Promise(w=>{let x=new Image;x.onload=()=>{v[g]={w:x.naturalWidth,h:x.naturalHeight},w()},x.onerror=w,x.src=g}))),p||l(v)}catch(c){console.error("SpritePreview: Error parsing VTT file:",c)}})(),()=>{p=!0}},[e]);let u=Ct.default.useMemo(()=>{if(!o||n.length===0||t<=0)return null;let p=a.current;if(!p)return null;let c=p.offsetWidth,d=p.offsetHeight;if(!c||!d)return null;for(let m of n)if(r>=m.from&&r<=m.to){let v=Number(m.w),g=Number(m.h),w=Number(m.x),x=Number(m.y),h=s[m.file];if(!v||!g||!h)return null;let P=c/v,S=d/g,T=Math.max(P,S),M=h.w*T,E=h.h*T,L=-(w*T),R=-(x*T),q=v*T,C=g*T,b=(c-q)/2,N=(d-C)/2;return{backgroundImage:`url(${m.file})`,backgroundSize:`${M}px ${E}px`,backgroundPosition:`${L+b}px ${R+N}px`}}return null},[o,n,t,r,s]);return e?Ct.default.createElement(Zu,{ref:a,$visible:o&&u!==null},u&&Ct.default.createElement(Ju,{style:u})):null};ec.propTypes={spriteVTTFile:yo.default.string,duration:yo.default.number.isRequired,seekTime:yo.default.number.isRequired,visible:yo.default.bool.isRequired};var go=Ct.default.memo(ec,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration&&e.seekTime===t.seekTime&&e.visible===t.visible);var qe=y(k()),tt=y(U());var bo=y(k());var tc=f.div`
  position: relative;
  display: inline-block;
`,rc=bo.default.forwardRef(({singleOption:e,hiding:t,isFullscreen:r,...o},n)=>bo.default.createElement("div",{ref:n,...o}));rc.displayName="DropdownOverlay";var oc=f(rc)`
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
  ${({singleOption:e})=>e?`
      height: 60px;
    `:`
      height: 100px;
    `}
`,nc=f.ul`
  min-width: 250px;
  padding: 10px 0;
`,ic=f.li`
  & ${K} {
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
  & ${K}:focus, & ${K}:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`,sc=f.div`
  margin-right: auto;
`,ac=f.div`
  font-size: 87%;
`,lc=f.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`,uc=bo.default.forwardRef(({isFullHD:e=!1,isExpanded:t=!1,isFullscreen:r=!1,...o},n)=>bo.default.createElement(K,{ref:n,isFullscreen:r,...o}));uc.displayName="DropdownButton";var cc=f(uc)`
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
`;var Pn=y(k());var Ni=({width:e=36,height:t=36})=>Pn.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},Pn.default.createElement("path",{d:"M 25.089 17.774 C 25.056 17.032 24.908 16.3 24.649 15.604 L 25.796 14.535 C 26.013 14.326 26.065 13.997 25.921 13.732 C 25.463 12.886 24.874 12.117 24.177 11.453 C 23.965 11.247 23.641 11.211 23.39 11.366 L 22.034 12.21 C 21.424 11.786 20.75 11.461 20.039 11.247 L 19.9 9.677 C 19.877 9.375 19.646 9.13 19.345 9.09 C 18.927 9.029 18.505 8.999 18.082 9 C 17.543 8.998 17.006 9.045 16.476 9.141 C 16.19 9.187 15.97 9.419 15.939 9.706 L 15.772 11.311 C 15.117 11.533 14.498 11.849 13.934 12.249 L 12.614 11.398 C 12.362 11.236 12.032 11.269 11.817 11.478 C 11.108 12.158 10.512 12.947 10.053 13.816 C 9.913 14.076 9.961 14.398 10.172 14.606 L 11.329 15.72 C 11.115 16.314 10.981 16.933 10.93 17.563 L 9.44 18.086 C 9.155 18.18 8.974 18.459 9.003 18.757 C 9.068 19.751 9.296 20.727 9.677 21.646 C 9.786 21.924 10.073 22.091 10.368 22.048 L 11.93 21.823 C 12.234 22.337 12.602 22.811 13.025 23.232 L 12.473 24.754 C 12.372 25.032 12.468 25.342 12.707 25.515 C 13.505 26.099 14.394 26.548 15.338 26.844 C 15.625 26.937 15.938 26.818 16.09 26.559 L 16.897 25.207 C 17.245 25.265 17.597 25.297 17.95 25.303 C 18.215 25.305 18.48 25.292 18.744 25.261 L 19.55 26.658 C 19.69 26.921 19.991 27.054 20.28 26.979 C 21.228 26.728 22.128 26.321 22.943 25.775 C 23.195 25.609 23.302 25.293 23.203 25.008 L 22.686 23.512 C 23.198 23.057 23.643 22.532 24.006 21.951 L 25.568 22.202 C 25.862 22.25 26.151 22.089 26.265 21.813 C 26.657 20.921 26.903 19.971 26.994 19.001 C 27.034 18.698 26.855 18.41 26.567 18.311 Z M 25.266 20.834 L 23.37 20.532 L 22.917 21.258 C 22.62 21.735 22.257 22.167 21.838 22.542 L 21.195 23.123 L 21.838 24.947 C 21.392 25.208 20.92 25.423 20.431 25.589 L 19.467 23.9 L 18.641 23.984 C 18.428 24.009 18.213 24.02 17.999 24.019 C 17.708 24.013 17.418 23.986 17.131 23.939 L 16.238 23.769 L 15.255 25.438 C 14.764 25.253 14.294 25.017 13.854 24.732 L 14.526 22.898 L 13.931 22.311 C 13.587 21.962 13.286 21.573 13.035 21.152 L 12.595 20.413 L 10.696 20.686 C 10.526 20.188 10.406 19.674 10.336 19.152 L 12.158 18.51 L 12.216 17.668 C 12.255 17.154 12.364 16.648 12.537 16.163 L 12.816 15.366 L 11.422 14.021 C 11.69 13.582 12.001 13.17 12.35 12.792 L 13.957 13.832 L 14.66 13.328 C 15.122 13.002 15.629 12.743 16.164 12.56 L 16.951 12.297 L 17.154 10.352 C 17.458 10.311 17.765 10.289 18.072 10.284 C 18.268 10.284 18.464 10.284 18.664 10.313 L 18.834 12.239 L 19.672 12.493 C 20.254 12.668 20.805 12.933 21.304 13.28 L 21.995 13.761 L 23.634 12.74 C 23.973 13.107 24.276 13.504 24.54 13.928 L 23.139 15.244 L 23.46 16.063 C 23.67 16.632 23.792 17.23 23.82 17.835 L 23.859 18.705 L 25.664 19.364 C 25.581 19.866 25.447 20.358 25.266 20.834 Z M 17.979 21.2 C 15.506 21.2 13.96 18.524 15.197 16.384 C 16.434 14.244 19.525 14.244 20.762 16.384 C 21.048 16.88 21.197 17.443 21.192 18.015 C 21.189 19.783 19.748 21.211 17.979 21.2 Z M 18.021 16.063 C 16.537 16.046 15.591 17.64 16.318 18.933 C 17.045 20.226 18.9 20.248 19.657 18.972 C 19.833 18.675 19.926 18.335 19.926 17.99 C 19.926 16.934 19.077 16.075 18.021 16.063 Z"}));Ni.displayName="SettingsIcon";Ni.propTypes=G;var pc=Pn.default.memo(Ni,X);var Tn=y(k());var Fi=({width:e=36,height:t=36})=>Tn.default.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},Tn.default.createElement("path",{fill:"currentColor",d:"M 15.7 12 C 15.7 12.105 15.658 12.196 15.573 12.277 L 9.648 17.88 C 9.563 17.96 9.466 18 9.355 18 C 9.245 18 9.148 17.96 9.063 17.88 L 8.427 17.278 C 8.342 17.199 8.3 17.106 8.3 17.002 C 8.3 16.898 8.342 16.806 8.427 16.725 L 13.424 12 L 8.427 7.275 C 8.342 7.194 8.3 7.102 8.3 6.998 C 8.3 6.894 8.342 6.801 8.427 6.722 L 9.063 6.12 C 9.148 6.04 9.245 6 9.355 6 C 9.466 6 9.563 6.04 9.648 6.12 L 15.573 11.723 C 15.658 11.804 15.7 11.895 15.7 12 Z"}));Fi.displayName="ArrowRightIcon";Fi.propTypes=G;var dc=Tn.default.memo(Fi,X);var vo=y(k());var Be=y(k());var En=y(k());var _i=({width:e=36,height:t=36})=>En.default.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},En.default.createElement("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"}));_i.displayName="ArrowLeftIcon";_i.propTypes=G;var fc=En.default.memo(_i,X);var mc=Be.default.forwardRef(({title:e,options:t,value:r,hiding:o,isFullscreen:n,onClick:i,goBack:s,...l},a)=>{let{i18n:u}=_(),[p,c]=Be.default.useState(!1);return Be.default.useEffect(()=>{c(!1),o&&setTimeout(()=>{c(!0)},100)},[o]),Be.default.createElement("div",{ref:a,...l},Be.default.createElement(yc,null,Be.default.createElement(K,{onClick:s,isFullscreen:n,isText:!0},Be.default.createElement(fc,{width:28,height:28}),Be.default.createElement("span",null,e))),Be.default.createElement(gc,{show:p},Be.default.createElement(bc,null,t.map((d,m)=>Be.default.createElement(vc,{key:m,selected:d.value===r,isFullscreen:n},Be.default.createElement(K,{onClick:()=>i(d.value),isFullscreen:n,isText:!0},d.label,"isFullHD"in d&&d.isFullHD&&Be.default.createElement(Sc,null,u.hd)))))))});mc.displayName="DropdownOverlay";var hc=mc;var xc=f(hc)`
  width: 250px;
  height: 283.5px;
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
`,yc=f.div`
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
  & ${K} {
    width: 100%;
    font-size: 91%;
    padding: 20px 5px;
    height: 57px;
  }
`,wc=vo.default.forwardRef(({show:e,...t},r)=>vo.default.createElement("div",{ref:r,...t}));wc.displayName="DropdownContent";var gc=f(wc)`
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
`,bc=f.ul`
  padding: 10px 0;
`,Cc=vo.default.forwardRef(({selected:e,isFullscreen:t,...r},o)=>vo.default.createElement("li",{ref:o,...r}));Cc.displayName="DropdownItem";var vc=f(Cc)`
  ${at} ${st} & {
    padding: 0 15px;

    & ${K} {
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
    & ${K}:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }
  }
`,Sc=f.sub`
  font-size: 10px;
  font-weight: 500;
  color: #cb0e0b;
  margin-left: 3px;
`;var ge=y(k());var So={generalMenu:!1,speed:!1,quality:!1};var Or=({label:e,value:t,i18n:r})=>e==="quality"?t==="0"?r.auto:`${t}p`:e==="speed"&&t==="1"?r.normal:t;var kc=({qualityOptions:e,live:t,i18n:r})=>{let o=[];return t||o.push({label:r.speed,value:"speed",options:[{label:"2",value:"2"},{label:"1.5",value:"1.5"},{label:"1.25",value:"1.25"},{label:"Normal",value:"1"},{label:"0.75",value:"0.75"},{label:"0.5",value:"0.5"},{label:"0.25",value:"0.25"}]}),e.length>0&&o.push({label:r.quality,value:"quality",options:[...e,{label:r.auto,value:"0",isFullHD:!1}]}),o};var tm=({live:e,fullHDQualityBreak:t,qualities:r,playbackRate:o,playbackQuality:n,changeSettings:i,fullscreen:s})=>{let{i18n:l}=_(),a=ye(),u=ge.default.useRef(null),p=ge.default.useRef(n);p.current=n;let[c,d]=ge.default.useState(So),[m,v]=ge.default.useState(!0),[g,w]=ge.default.useState({quality:{label:l.auto,value:"0",isFullHD:!1},speed:{label:l.normal,value:"1"}});(0,ge.useEffect)(()=>{let L=o.toString();w(R=>({...R,speed:{label:Or({label:"speed",value:L,i18n:l}),value:L}}))},[l,o]),(0,ge.useEffect)(()=>{if(n==null||n===0||r.length===0)return;let L=n.toString();if(m){let R=`${l.auto} (${L}p)`;w(q=>{var C,b;return((C=q.quality)==null?void 0:C.value)==="0"&&((b=q.quality)==null?void 0:b.label)===R?q:{...q,quality:{label:R,value:"0",isFullHD:t!==void 0&&Number(L)>=t}}})}},[n,r,l,t,m]);let x=ge.default.useCallback(L=>{L.stopPropagation(),a(R=>({menuVisible:R.subMenuVisible?!1:!R.menuVisible,subMenuVisible:!1})),d(R=>({...So,generalMenu:!R.speed&&!R.quality?!R.generalMenu:!1}))},[a]),h=ge.default.useCallback(L=>R=>{if(L==="quality")if(R==="0"){v(!0);let q=p.current,C=q&&q!==0?`${l.auto} (${q}p)`:l.auto;w(b=>({...b,quality:{label:C,value:"0",isFullHD:t!==void 0&&Number(q!=null?q:0)>=t}}))}else v(!1),w(q=>({...q,quality:{label:Or({label:"quality",value:R,i18n:l}),value:R,isFullHD:t!==void 0&&Number(R!=null?R:"0")>=t}}));else w(q=>({...q,[L]:{label:Or({label:L,value:R,i18n:l}),value:R,isFullHD:t!==void 0&&Number(R!=null?R:"0")>=t}}));a({menuVisible:!1,subMenuVisible:!1}),d(So)},[t,l,a]),P=ge.default.useCallback(L=>{a({menuVisible:!1,subMenuVisible:!0}),d(R=>({...R,generalMenu:!1,[L]:!0}))},[a]),S=ge.default.useCallback(L=>()=>{a({menuVisible:!0,subMenuVisible:!1}),d(R=>({...R,generalMenu:!0,[L]:!1}))},[a]);ge.default.useEffect(()=>{let L=R=>{u.current&&!u.current.contains(R.target)&&(a({menuVisible:!1,subMenuVisible:!1}),d(So))};return document.body.addEventListener("click",L),()=>document.body.removeEventListener("click",L)},[a]);let T=ge.default.useMemo(()=>kc({qualityOptions:r,live:e,i18n:l}),[e,r,l]),M=ge.default.useMemo(()=>De(s),[s]),E=ge.default.useRef(g);return ge.default.useEffect(()=>{var R,q,C,b;let L=E.current;if(L!==g){E.current=g;let N={};((R=L.speed)==null?void 0:R.value)!==((q=g.speed)==null?void 0:q.value)&&(N.speed=g.speed),((C=L.quality)==null?void 0:C.value)!==((b=g.quality)==null?void 0:b.value)&&(N.quality=g.quality),(N.speed||N.quality)&&i(N)}},[g,i]),{dropdownRef:u,settings:c,values:g,iconProps:M,settingsOptions:T,handleButtonClick:x,handleMenuItemClick:P,handleMenuClick:h,handleGoBack:S}},Pc=tm;var Tc=({live:e,qualities:t,playbackRate:r,playbackQuality:o,fullHDQualityBreak:n,changeSettings:i,fullscreen:s})=>{var x;let{i18n:l}=_(),{dropdownRef:a,settings:u,values:p,iconProps:c,settingsOptions:d,handleButtonClick:m,handleMenuItemClick:v,handleMenuClick:g,handleGoBack:w}=Pc({live:e,fullHDQualityBreak:n,qualities:t,playbackRate:r,playbackQuality:o,changeSettings:i,fullscreen:s});return qe.default.createElement(tc,{ref:a},qe.default.createElement(cc,{type:"button","aria-label":l.settings,title:l.settings,"aria-expanded":u.generalMenu,onClick:m,isFullscreen:s,isFullHD:(x=p.quality)==null?void 0:x.isFullHD,isExpanded:u.generalMenu,isTooltipActive:!0},qe.default.createElement(pc,{...c})),qe.default.createElement(oc,{hiding:u.generalMenu,singleOption:e||t.length===0,isFullscreen:s},qe.default.createElement(nc,null,d.map((h,P)=>{var S;return qe.default.createElement(ic,{key:P},qe.default.createElement(K,{onClick:()=>v(h.value),isFullscreen:s,isText:!0},qe.default.createElement(sc,null,h.label),qe.default.createElement(lc,null,qe.default.createElement(ac,null,(S=p[h.value])==null?void 0:S.label),qe.default.createElement(dc,{width:28,height:28}))))}))),d.map((h,P)=>{var S;return qe.default.createElement(xc,{key:P,hiding:u[h.value],title:h.label,options:h.options,value:(S=p[h.value])==null?void 0:S.value,isFullscreen:s,onClick:g(h.value),goBack:w(h.value)})}))};Tc.propTypes={live:tt.default.bool.isRequired,qualities:tt.default.arrayOf(tt.default.shape({label:tt.default.string.isRequired,value:tt.default.string.isRequired}).isRequired).isRequired,playbackRate:tt.default.number.isRequired,playbackQuality:tt.default.number,fullHDQualityBreak:tt.default.number,changeSettings:tt.default.func.isRequired,fullscreen:tt.default.bool.isRequired};var Ec=qe.default.memo(Tc,(e,t)=>e.live===t.live&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.changeSettings===t.changeSettings&&e.fullscreen===t.fullscreen);var xo=y(k());var rm=({fullscreen:e,contextMenuRef:t,pictureInPictureEnabled:r,pip:o,loop:n=!1,requestPictureInPicture:i,exitPictureInPicture:s,onLoopClick:l})=>{let a=ye(),{i18n:u}=_(),[p,c]=xo.default.useState({x:0,y:0}),d=xo.default.useCallback(g=>{var j,Z;g.preventDefault();let w=((j=t.current)==null?void 0:j.offsetWidth)||0,x=((Z=t.current)==null?void 0:Z.offsetHeight)||0,h=g.pageX,P=g.pageY,S=document.documentElement,T=S.scrollLeft||0,M=S.scrollTop||0,E=S.clientLeft||0,L=S.clientTop||0,R=window.innerWidth||0,q=window.innerHeight||0,C=(window.pageXOffset||T)-(E||0),b=(window.pageYOffset||M)-(L||0),N=h+w>R+C?h-w:h,$=P+x>q+b?P-x:P;c({x:N,y:$}),a({type:"contextMenuVisible",payload:!0})},[t,a]),m=xo.default.useMemo(()=>De(e),[e]),v=xo.default.useMemo(()=>{let g=[{action:l,label:u.loop,iconType:"loop",iconProps:m,isCheckable:!0,defaultChecked:n}];return r&&g.push({action:o?s:i,label:u.pictureInPicture,iconType:"pip",iconProps:m,isCheckable:!1,defaultChecked:!1}),g},[m,u,r,o,n,i,s,l]);return{handleContextMenu:d,contextMenuPosition:p,contextMenuItems:v}},Ln=rm;var Xe=y(k()),_c=y(Mc());var wo=y(k());var Ac=wo.default.forwardRef(({showing:e,positionX:t,positionY:r,...o},n)=>wo.default.createElement("div",{ref:n,...o}));Ac.displayName="StyledContextMenu";var Ic=f(Ac)`
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

  ${({showing:e,positionX:t,positionY:r})=>`
        display: ${e?"block":"none"};
        top: ${r}px;
        left: ${t}px;
    `}
`,Rc=wo.default.forwardRef(({isFullscreen:e,...t},r)=>wo.default.createElement("div",{ref:r,...t}));Rc.displayName="ContextMenuItem";var Oc=f(Rc)`
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
`,Dc=f.span`
  padding: 0 12px;
  font-size: 118%;
`,Bc=f.div`
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
`;Qe();var Mn=y(k());var Vi=({width:e=36,height:t=36})=>Mn.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Mn.default.createElement("path",{d:"M4.8 19.582 13.237 28.05 31.2 9.877 29.295 7.95 13.237 24.197 6.705 17.586Z"}));Vi.displayName="CheckedIcon";Vi.propTypes=G;var qc=Mn.default.memo(Vi,X);var An=y(k());var $i=({width:e=36,height:t=36})=>An.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},An.default.createElement("path",{d:"M 21.333 23.666 C 21.333 23.758 21.3 23.835 21.235 23.902 C 21.168 23.967 21.091 24 21 24 L 11 24 C 10.944 24 10.898 23.995 10.859 23.979 C 10.821 23.966 10.789 23.942 10.765 23.906 C 10.741 23.871 10.723 23.844 10.708 23.822 C 10.695 23.803 10.684 23.762 10.678 23.703 C 10.671 23.644 10.667 23.604 10.667 23.583 L 10.667 17.335 L 8.667 17.335 C 8.487 17.335 8.329 17.266 8.198 17.134 C 8.067 17.004 8 16.846 8 16.666 C 8 16.5 8.052 16.358 8.156 16.239 L 11.489 12.24 C 11.621 12.087 11.792 12.01 12 12.01 C 12.208 12.01 12.379 12.087 12.511 12.24 L 15.844 16.239 C 15.948 16.358 16 16.5 16 16.666 C 16 16.846 15.933 17.004 15.803 17.134 C 15.671 17.266 15.513 17.335 15.333 17.335 L 13.333 17.335 L 13.333 21.334 L 19.333 21.334 C 19.444 21.334 19.532 21.372 19.593 21.448 L 21.26 23.448 C 21.309 23.518 21.333 23.59 21.333 23.666 Z M 28 19.334 C 28 19.5 27.948 19.642 27.844 19.761 L 24.511 23.76 C 24.372 23.92 24.201 24 24 24 C 23.799 24 23.628 23.92 23.489 23.76 L 20.156 19.761 C 20.052 19.642 20 19.5 20 19.334 C 20 19.154 20.067 18.996 20.198 18.866 C 20.329 18.734 20.487 18.667 20.667 18.667 L 22.667 18.667 L 22.667 14.666 L 16.667 14.666 C 16.556 14.666 16.468 14.626 16.407 14.542 L 14.74 12.542 C 14.691 12.478 14.667 12.41 14.667 12.334 C 14.667 12.243 14.7 12.166 14.765 12.098 C 14.832 12.034 14.909 12 15 12 L 25 12 C 25.056 12 25.103 12.007 25.141 12.022 C 25.179 12.034 25.211 12.058 25.235 12.094 C 25.259 12.13 25.278 12.156 25.292 12.178 C 25.305 12.199 25.316 12.238 25.323 12.298 C 25.329 12.356 25.333 12.396 25.333 12.418 L 25.333 18.667 L 27.333 18.667 C 27.513 18.667 27.671 18.734 27.803 18.866 C 27.933 18.996 28 19.154 28 19.334 Z"}));$i.displayName="InLoopIcon";$i.propTypes=G;var Nc=An.default.memo($i,X);var In=y(k());var Hi=({width:e=36,height:t=36})=>In.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},In.default.createElement("path",{d:"M25 17H17v6H25zM29 25V10.981a1.989 1.989 0 0 0 -2 -1.981H9a1.989 1.989 0 0 0 -2 1.981V25c0 1.1 0.9 2 2 2h18c1.1 0 2 -0.9 2 -2m-2 0.019H9V10.969h18z"}));Hi.displayName="PipIcon";Hi.propTypes=G;var Fc=In.default.memo(Hi,X);var om={loop:Nc,pip:Fc},Vc=Xe.default.forwardRef(({fullscreen:e,position:t,menuItems:r},o)=>{let n=_(),i=ye(),s=Xe.default.useRef(),l=Xe.default.useMemo(()=>{var u;return e&&((u=n.playerRef)!=null&&u.current)?n.playerRef.current:document.body},[e,n.playerRef]);Xe.default.useEffect(()=>{let u=p=>{s.current&&!s.current.contains(p.target)&&i({type:"contextMenuVisible",payload:!1})};return window.addEventListener("click",u),()=>{window.removeEventListener("click",u)}},[i,s]);let a=Xe.default.createElement(Ic,{ref:ks([o,s]),showing:n.contextMenuVisible,positionX:t.x,positionY:t.y,"data-itemindex":"0","aria-checked":n.contextMenuVisible},r.map((u,p)=>{let c=om[u.iconType];return Xe.default.createElement(Oc,{key:p,onClick:()=>{u.action(),i({type:"contextMenuVisible",payload:!1})},isFullscreen:e},c&&Xe.default.createElement(c,{...u.iconProps}),Xe.default.createElement(Dc,null,u.label),u.isCheckable&&u.defaultChecked&&Xe.default.createElement(Bc,null,Xe.default.createElement(qc,{width:24,height:24})))}));return _c.default.createPortal(a,l)});Vc.displayName="ContextMenu";var Co=Xe.default.memo(Vc,(e,t)=>e.fullscreen===t.fullscreen&&e.position===t.position&&e.menuItems===t.menuItems);var $c=Q.default.forwardRef(({videoRef:e,playerRef:t,live:r=!1,hasResource:o=!1,hasAudio:n,prevented:i,loading:s,paused:l,ended:a,seeking:u,waiting:p,duration:c,buffered:d=null,currentTime:m,muted:v,volume:g,pictureInPictureEnabled:w,pip:x,fullscreen:h,qualities:P,spriteVTTFile:S,chapters:T,heatmapData:M,fullHDQualityBreak:E,playbackRate:L,playbackQuality:R,loop:q,poster:C,onPlayClick:b,onPauseClick:N,onTogglePlay:$,changePlaybackRate:j,changePlayBackQuality:Z,changeVolume:ve,onMutedClick:ze,changeCurrentTime:A,requestPictureInPicture:D,exitPictureInPicture:ne,requestFullscreen:Y,exitFullscreen:me,onSeeking:de,onLoopClick:Pe,onPreventedClick:Te,onPrevious:Ke,onNext:ct,showNavButtons:je,kernelMsg:pt=null},Tt)=>{let Re=ye(),[sr,ar]=Q.default.useState(!1),Et=Q.default.useRef(),Nr=Q.default.useRef(null),{showControls:dt,hideControls:lr}=Ku({hasResource:o,loading:s,prevented:i,paused:l,ended:a,waiting:p,seeking:u,kernelMsg:pt}),{contextMenuItems:Fn,contextMenuPosition:_n,handleContextMenu:Vn}=Ln({fullscreen:h,contextMenuRef:Nr,pip:x,loop:q,pictureInPictureEnabled:w,requestPictureInPicture:D,exitPictureInPicture:ne,onLoopClick:Pe}),{getChapterAtTime:Mo}=Lr({chapters:T,duration:c}),Fr=Q.default.useMemo(()=>Mo(m),[Mo,m]);Q.default.useEffect(()=>{Re({videoRef:e,playerRef:t})},[e,t,Re]),Q.default.useImperativeHandle(Tt,()=>({showControls:dt,hideControls:lr}),[dt,lr]),Q.default.useEffect(()=>{if(t.current){let qt=t.current,Nt=Lt=>{let ot=un[Lt.which||Lt.keyCode]||cn[Lt.key];clearTimeout(Et.current),ot==="ARROW_UP_KEY"||ot==="ARROW_DOWN_KEY"?(ar(!0),Et.current=setTimeout(()=>ar(!1),2e3)):ar(!1)};return qt.addEventListener("keydown",Nt),()=>{clearTimeout(Et.current),qt.removeEventListener("keydown",Nt)}}},[v,g,t]);let $n=Q.default.useCallback(({quality:qt,speed:Nt})=>{var Lt;if(Nt&&j(Number((Lt=Nt.value)!=null?Lt:1)),qt){let ot=Number(qt.value);Z(Number.isNaN(ot)?0:ot)}},[j,Z]);return Q.default.createElement(st,{onContextMenu:Vn,onMouseLeave:lr,onMouseMove:dt,onTouchStart:dt,onMouseEnter:dt,onClick:dt},Q.default.createElement(to,null),Q.default.createElement(Jr,{hasResource:o,prevented:i,paused:l,muted:v,currentTime:m,onClick:Te}),C&&Q.default.createElement(ro,{style:{opacity:m<=0||a?1:0}},Q.default.createElement(oo,{style:{backgroundImage:`url(${C})`}})),Q.default.createElement(bl,null,Q.default.createElement(vl,{style:{display:sr?"inline-block":"none"}},Math.round(g*100),"%")),Q.default.createElement(Co,{ref:Nr,fullscreen:h,position:_n,menuItems:Fn}),S&&Q.default.createElement(go,{spriteVTTFile:S,duration:c,seekTime:m,visible:u}),Q.default.createElement(ml,{hasResource:o,loading:s,paused:l,ended:a,waiting:p,seeking:u,kernelMsg:pt,onClick:$}),Q.default.createElement(kl,null,r===!1&&Q.default.createElement(vu,{spriteVTTFile:S,chapters:T,heatmapData:M,currentTime:m,duration:c,buffered:d,onChange:A,onSeeking:de,fullscreen:h}),Q.default.createElement(Il,{extra:Q.default.createElement(Q.default.Fragment,null,Q.default.createElement(Ec,{live:r,qualities:P,playbackRate:L,playbackQuality:R,fullscreen:h,fullHDQualityBreak:E,changeSettings:$n}),Q.default.createElement(Xu,{fullscreen:h,requestFullscreen:Y,exitFullscreen:me})),fullscreen:h},Q.default.createElement(Sn,{fullscreen:h,onPrevious:Ke,showNavButtons:je}),Q.default.createElement(ju,{fullscreen:h,paused:l,ended:a,onPauseClick:N,onPlayClick:b}),Q.default.createElement(xn,{fullscreen:h,onNext:ct,showNavButtons:je}),Q.default.createElement(Nu,{fullscreen:h,isMuted:v,forceMuted:!n,volume:g,onMutedClick:ze,changeVolume:ve}),Q.default.createElement($u,{live:r,currentTime:m,duration:c,chapterTitle:Fr==null?void 0:Fr.title}))),Q.default.createElement(eo,{hasResource:o,loading:s,kernelMsg:pt}))});$c.displayName="DesktopPlayerSkin";var Hc=$c;var oe=y(k()),B=y(U());var zc=f.div`
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
`,jc=f.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  pointer-events: none;
  ${({$visible:e})=>e?H`
          opacity: 1;
        `:H`
          opacity: 0;
        `}
`;var Po=y(k()),Rn=y(U());var Qc=f.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 7;
  padding: 8px;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${({$visible:e})=>e?H`
          opacity: 1;
          pointer-events: auto;
        `:H`
          opacity: 0;
          pointer-events: none;
        `}
`,Uc=f.button`
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
`;var te=y(k());var Wc=()=>te.default.createElement(Pr,{width:"100%",height:"100%"}),Yc=({width:e="100%",height:t="100%"}={})=>te.default.createElement("svg",{viewBox:"0 0 56 56",preserveAspectRatio:"xMidYMid meet",fill:"none",width:e,height:t},te.default.createElement("path",{fill:"currentColor",d:"M 41.543 28.638 L 15.115 43.848 C 14.81 44.028 14.548 44.048 14.329 43.91 C 14.11 43.772 14 43.526 14 43.168 L 14 12.832 C 14 12.474 14.11 12.226 14.329 12.09 C 14.548 11.952 14.81 11.972 15.115 12.152 L 41.543 27.36 C 41.848 27.54 42 27.752 42 28 C 42 28.248 41.848 28.46 41.543 28.638 Z"})),Gc=({width:e="100%",height:t="100%"}={})=>te.default.createElement("svg",{viewBox:"0 0 56 56",preserveAspectRatio:"xMidYMid meet",fill:"none",width:e,height:t},te.default.createElement("rect",{fill:"currentColor",x:"12",y:"12",width:"8",height:"32"}),te.default.createElement("rect",{fill:"currentColor",x:"36",y:"12",width:"8",height:"32"})),Xc=({width:e="100%",height:t="100%"}={})=>te.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},te.default.createElement("path",{fill:"currentColor",d:"M 25.184 9.17 C 25.377 9.021 25.542 8.97 25.676 9.017 C 25.809 9.063 25.875 9.189 25.875 9.392 L 25.875 26.608 C 25.875 26.811 25.809 26.937 25.676 26.983 C 25.542 27.03 25.377 26.979 25.184 26.83 L 14.262 18.526 C 14.17 18.456 14.103 18.382 14.063 18.304 L 14.063 26.235 C 14.063 26.437 13.965 26.613 13.77 26.761 C 13.575 26.908 13.344 26.983 13.078 26.983 L 11.109 26.983 C 10.843 26.983 10.612 26.908 10.418 26.761 C 10.223 26.613 10.125 26.437 10.125 26.235 L 10.125 9.765 C 10.125 9.563 10.223 9.387 10.418 9.239 C 10.612 9.092 10.843 9.017 11.109 9.017 L 13.078 9.017 C 13.344 9.017 13.575 9.092 13.77 9.239 C 13.965 9.387 14.063 9.563 14.063 9.765 L 14.063 17.695 C 14.103 17.617 14.17 17.544 14.262 17.473 Z"})),Kc=({width:e="100%",height:t="100%"}={})=>te.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},te.default.createElement("path",{fill:"currentColor",d:"M 10.816 9.17 C 10.623 9.021 10.458 8.97 10.324 9.017 C 10.191 9.063 10.125 9.189 10.125 9.392 L 10.125 26.608 C 10.125 26.811 10.191 26.937 10.324 26.983 C 10.458 27.03 10.623 26.979 10.816 26.83 L 21.738 18.526 C 21.83 18.456 21.897 18.382 21.937 18.304 L 21.937 26.235 C 21.937 26.437 22.035 26.613 22.23 26.761 C 22.425 26.908 22.656 26.983 22.922 26.983 L 24.891 26.983 C 25.157 26.983 25.388 26.908 25.582 26.761 C 25.777 26.613 25.875 26.437 25.875 26.235 L 25.875 9.765 C 25.875 9.563 25.777 9.387 25.582 9.239 C 25.388 9.092 25.157 9.017 24.891 9.017 L 22.922 9.017 C 22.656 9.017 22.425 9.092 22.23 9.239 C 22.035 9.387 21.937 9.563 21.937 9.765 L 21.937 17.695 C 21.897 17.617 21.83 17.544 21.738 17.473 Z"})),Zc=({width:e="100%",height:t="100%"}={})=>te.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},te.default.createElement("path",{fill:"currentColor",d:"M 10 16 L 10 10.5 C 10 10.224 10.224 10 10.5 10 L 16 10 L 16 12 L 12 12 L 12 16 Z M 26 16 L 26 12 L 22 12 L 22 10 L 26.5 10 C 26.776 10 27 10.224 27 10.5 L 27 16 Z M 26 20 L 27 20 L 27 25.5 C 27 25.776 26.776 26 26.5 26 L 22 26 L 22 24 L 26 24 Z M 10 20 L 10 25.5 C 10 25.776 10.224 26 10.5 26 L 16 26 L 16 24 L 12 24 L 12 20 Z"})),Jc=({width:e="100%",height:t="100%"}={})=>te.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},te.default.createElement("path",{fill:"currentColor",d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"})),ko=({width:e="100%",height:t="100%"}={})=>te.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},te.default.createElement("path",{fill:"currentColor",d:"M 27.452 17.699 C 27.408 16.709 27.211 15.734 26.866 14.806 L 28.396 13.381 C 28.685 13.102 28.753 12.663 28.561 12.31 C 27.951 11.182 27.166 10.156 26.237 9.27 C 25.954 8.996 25.522 8.948 25.187 9.154 L 23.379 10.28 C 22.566 9.715 21.667 9.282 20.72 8.996 L 20.534 6.903 C 20.504 6.5 20.195 6.173 19.794 6.12 C 19.237 6.039 18.673 5.999 18.11 6 C 17.391 5.997 16.675 6.061 15.969 6.188 C 15.587 6.249 15.293 6.558 15.253 6.941 L 15.029 9.081 C 14.156 9.378 13.331 9.798 12.579 10.333 L 10.819 9.197 C 10.483 8.981 10.043 9.025 9.757 9.304 C 8.811 10.21 8.016 11.262 7.405 12.422 C 7.218 12.768 7.281 13.198 7.563 13.475 L 9.105 14.96 C 8.821 15.752 8.641 16.578 8.573 17.418 L 6.586 18.115 C 6.207 18.24 5.966 18.613 6.004 19.009 C 6.091 20.334 6.394 21.637 6.903 22.862 C 7.048 23.232 7.431 23.454 7.824 23.398 L 9.907 23.098 C 10.312 23.783 10.803 24.414 11.367 24.977 L 10.631 27.005 C 10.496 27.377 10.624 27.79 10.943 28.021 C 12.006 28.799 13.192 29.398 14.451 29.793 C 14.833 29.917 15.251 29.758 15.454 29.413 L 16.53 27.61 C 16.993 27.687 17.463 27.73 17.933 27.738 C 18.287 27.74 18.641 27.723 18.993 27.682 L 20.067 29.544 C 20.254 29.895 20.655 30.072 21.041 29.972 C 22.305 29.638 23.505 29.094 24.591 28.367 C 24.927 28.146 25.07 27.724 24.937 27.344 L 24.249 25.349 C 24.931 24.743 25.525 24.043 26.009 23.269 L 28.091 23.603 C 28.483 23.667 28.868 23.452 29.021 23.084 C 29.543 21.894 29.871 20.629 29.993 19.335 C 30.046 18.931 29.807 18.547 29.423 18.414 Z M 27.689 21.779 L 25.161 21.376 L 24.556 22.344 C 24.161 22.981 23.677 23.557 23.118 24.056 L 22.261 24.831 L 23.118 27.263 C 22.523 27.611 21.894 27.898 21.241 28.119 L 19.957 25.867 L 18.855 25.979 C 18.571 26.012 18.284 26.027 17.999 26.026 C 17.611 26.017 17.224 25.982 16.842 25.919 L 15.651 25.693 L 14.341 27.917 C 13.685 27.671 13.059 27.356 12.472 26.976 L 13.368 24.531 L 12.575 23.749 C 12.116 23.283 11.715 22.765 11.38 22.203 L 10.794 21.217 L 8.261 21.581 C 8.035 20.918 7.875 20.232 7.781 19.536 L 10.211 18.68 L 10.288 17.558 C 10.34 16.872 10.486 16.198 10.717 15.551 L 11.088 14.488 L 9.23 12.695 C 9.587 12.11 10.002 11.56 10.467 11.056 L 12.61 12.442 L 13.547 11.77 C 14.163 11.336 14.838 10.991 15.552 10.747 L 16.602 10.396 L 16.872 7.803 C 17.278 7.748 17.687 7.719 18.096 7.712 C 18.358 7.712 18.619 7.712 18.886 7.751 L 19.113 10.319 L 20.23 10.657 C 21.005 10.891 21.74 11.245 22.406 11.707 L 23.327 12.349 L 25.512 10.987 C 25.964 11.476 26.369 12.005 26.721 12.571 L 24.853 14.326 L 25.281 15.417 C 25.56 16.176 25.723 16.973 25.761 17.78 L 25.813 18.94 L 28.219 19.819 C 28.109 20.488 27.93 21.144 27.689 21.779 Z M 17.972 22.267 C 14.675 22.267 12.614 18.699 14.262 15.845 C 15.912 12.992 20.034 12.992 21.683 15.845 C 22.065 16.507 22.263 17.257 22.257 18.02 C 22.252 20.377 20.331 22.282 17.972 22.267 Z M 18.028 15.417 C 16.05 15.395 14.788 17.52 15.758 19.244 C 16.727 20.968 19.2 20.998 20.209 19.296 C 20.444 18.901 20.568 18.447 20.568 17.987 C 20.568 16.579 19.436 15.433 18.028 15.417 Z"})),ep=({width:e="100%",height:t="100%"}={})=>te.default.createElement("svg",{viewBox:"0 0 36 36",width:e,height:t},te.default.createElement("path",{fill:"currentColor",d:"M 24.344 15.999 L 19.6 20.544 L 19.169 20.956 L 18.613 20.807 C 18.389 20.746 18.228 20.723 17.998 20.724 C 17.263 20.682 16.798 20.925 16.316 21.387 C 15.84 21.844 15.601 22.235 15.653 22.903 C 15.65 23.104 15.671 23.237 15.732 23.441 L 15.921 24.07 L 15.436 24.536 L 14.105 25.811 C 13.991 25.972 13.943 26.063 13.937 26.177 C 13.932 26.29 13.954 26.362 14.1 26.539 C 14.267 26.702 14.454 26.723 14.587 26.73 C 14.72 26.736 14.824 26.733 15.067 26.545 L 16.4 25.266 L 16.831 24.854 L 17.387 25.003 C 17.611 25.064 17.777 25.087 18.001 25.085 C 18.737 25.128 19.202 24.884 19.684 24.422 C 20.16 23.966 20.399 23.576 20.346 22.906 C 20.345 22.701 20.328 22.567 20.268 22.37 L 20.076 21.743 L 20.564 21.275 L 25.308 16.73 C 25.454 16.554 25.497 16.41 25.455 16.238 C 25.414 16.065 25.322 15.903 25.01 15.835 C 24.703 15.762 24.571 15.802 24.345 15.997 M 18.101 6 C 18.101 6 16.905 6.031 16.356 6.084 C 15.807 6.137 15.292 6.213 14.761 6.317 C 13.701 6.526 12.725 6.818 11.75 7.213 C 9.801 8.002 8.134 9.089 6.662 10.499 C 3.715 13.324 1.949 16.988 2.001 21.269 C 1.967 24.34 2.871 27.191 4.685 29.726 C 4.82 29.961 4.985 30.022 5.284 29.994 C 5.583 29.965 5.703 29.913 5.825 29.665 C 5.895 29.443 5.902 29.37 5.784 29.167 C 2.764 24.665 2.661 19.146 4.809 14.968 C 6.952 10.799 11.515 7.546 17.036 7.115 C 22.565 6.846 27.525 9.492 30.218 13.351 C 32.916 17.219 33.57 22.701 31.19 27.546 C 30.907 28.096 30.57 28.655 30.217 29.164 C 30.164 29.383 30.097 29.407 30.175 29.662 C 30.25 29.906 30.341 29.989 30.708 29.989 C 30.683 29.99 30.723 29.992 30.765 29.992 C 31.033 29.992 31.173 29.907 31.315 29.726 C 33.128 27.19 34.033 24.344 33.999 21.273 C 34.051 16.991 32.284 13.324 29.337 10.499 C 26.384 7.67 22.505 5.962 18 6.004"})),tp=({width:e=24,height:t=24}={})=>te.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},te.default.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),te.default.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),rp=({width:e=24,height:t=24}={})=>te.default.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},te.default.createElement("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"})),nr=({width:e=20,height:t=20}={})=>te.default.createElement("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",width:e,height:t},te.default.createElement("path",{fill:"#ccc",d:"M8 5v14l11-7z"}));var op=({visible:e,onOpenSettings:t,settingsLabel:r})=>Po.default.createElement(Qc,{$visible:e},Po.default.createElement(Uc,{onClick:t,"aria-label":r},Po.default.createElement(ko,null)));op.propTypes={visible:Rn.default.bool.isRequired,onOpenSettings:Rn.default.func.isRequired,settingsLabel:Rn.default.string.isRequired};var np=Po.default.memo(op);var we=y(k()),Ne=y(U());var ip=f.div`
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
  ${({$visible:e})=>e?H`
          opacity: 1;
          pointer-events: auto;
        `:H`
          opacity: 0;
          pointer-events: none;
        `}
`,sp=f.button`
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
`,zi=f.button`
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
`,nm=en`
  to {
    transform: rotate(360deg);
  }
`,ap=f.div`
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
    animation: ${nm} 0.8s linear infinite;
  }
`;var lp=({visible:e,isLoading:t,paused:r,ended:o,onPlayPause:n,onPrevious:i,onNext:s,showNavButtons:l=!1,i18n:a})=>{let u=typeof i=="function",p=typeof s=="function",c=u||l,d=p||l,m=we.default.useCallback(w=>{w.stopPropagation(),u&&i()},[u,i]),v=we.default.useCallback(w=>{w.stopPropagation(),p&&s()},[p,s]),g=we.default.useCallback(w=>{w.stopPropagation(),n()},[n]);return we.default.createElement(ip,{$visible:e},c&&we.default.createElement(zi,{"aria-label":a.previous||"Previous",onClick:m,disabled:!u},we.default.createElement(Xc,null)),t?we.default.createElement(ap,{onClick:w=>w.stopPropagation()},we.default.createElement("div",null)):we.default.createElement(sp,{"aria-label":r?a.play:a.pause,onClick:g},o?we.default.createElement(Wc,null):r?we.default.createElement(Yc,null):we.default.createElement(Gc,null)),d&&we.default.createElement(zi,{"aria-label":a.next||"Next",onClick:v,disabled:!p},we.default.createElement(Kc,null)))};lp.propTypes={visible:Ne.default.bool.isRequired,isLoading:Ne.default.bool.isRequired,paused:Ne.default.bool.isRequired,ended:Ne.default.bool.isRequired,onPlayPause:Ne.default.func.isRequired,onPrevious:Ne.default.func,onNext:Ne.default.func,showNavButtons:Ne.default.bool,i18n:Ne.default.shape({previous:Ne.default.string,next:Ne.default.string,play:Ne.default.string,pause:Ne.default.string}).isRequired};var up=we.default.memo(lp);var rt=y(k()),re=y(U());var cp=f.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 7;
  display: flex;
  align-items: center;
  padding: 0px 16px 8px 16px;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${({$visible:e})=>e?H`
          opacity: 1;
          pointer-events: auto;
        `:H`
          opacity: 0;
          pointer-events: none;
        `}
`,pp=f.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 12px 0 16px;
`,dp=f.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  flex-shrink: 0;
`,fp=f.button`
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
`;var ce=y(k()),be=y(U());var mp=f.div`
  flex: 1;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  touch-action: none;
`,hp=f.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
`,yp=f.div`
  position: absolute;
  left: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1px;
  transform-origin: left;
`,gp=f.div`
  position: absolute;
  left: 0;
  height: 2px;
  background: #cb0e0b;
  border-radius: 1px;
  transform-origin: left;
`,bp=f.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #cb0e0b;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 4;
`,vp=f.div`
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
`;var Dr=y(k()),ut=y(U());var Sp=f.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: stretch;
  gap: 2px;
  height: 2px;
`,xp=f.div`
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
  height: 2px;
  transition: transform 0.1s ease;
  transform-origin: center center;
`,wp=f.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`,Cp=f.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #cb0e0b;
`;var kp=({segments:e,currentTime:t,duration:r,buffered:o,hoveredIndex:n})=>{if(e.length===0||r<=0)return null;let i=(o||0)*r;return Dr.default.createElement(Sp,null,e.map((s,l)=>{let a=s.endTime-s.startTime,u=a/r*100,p=0;t>=s.endTime?p=100:t>s.startTime&&(p=(t-s.startTime)/a*100);let c=0;i>=s.endTime?c=100:i>s.startTime&&(c=(i-s.startTime)/a*100);let d=n===l;return Dr.default.createElement(xp,{key:l,style:{width:`${u}%`,transform:d?"scaleY(2.5)":"none"}},Dr.default.createElement(wp,{style:{width:`${c}%`}}),Dr.default.createElement(Cp,{style:{width:`${p}%`}}))}))};kp.propTypes={segments:ut.default.arrayOf(ut.default.shape({title:ut.default.string.isRequired,startTime:ut.default.number.isRequired,endTime:ut.default.number.isRequired})).isRequired,currentTime:ut.default.number.isRequired,duration:ut.default.number.isRequired,buffered:ut.default.number,hoveredIndex:ut.default.number};var Pp=Dr.default.memo(kp);Qe();var Tp=({currentTime:e,duration:t,buffered:r,chapters:o,heatmapData:n,getChapterAtTime:i,onChange:s,onSeeking:l})=>{let a=ce.default.useRef(null),u=ce.default.useRef(!1),[p,c]=ce.default.useState(!1),d=t>0?e/t:0,m=r||0,v=o&&o.length>0,{strokePath:g,hasHeatmap:w}=yn({heatmapData:n,duration:t}),x=ce.default.useMemo(()=>!v||!i?null:i(e),[v,i,e]),h=ce.default.useCallback(T=>{if(!a.current||!t)return;let M=a.current.getBoundingClientRect(),L=Math.max(0,Math.min(1,(T-M.left)/M.width))*t;s(L)},[t,s]),P=ce.default.useCallback(T=>{u.current=!0,c(!0),l&&l(!0),h(T.clientX);let M=L=>{u.current&&h(L.clientX)},E=()=>{u.current=!1,c(!1),l&&l(!1),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",E)},[h,l]),S=ce.default.useCallback(T=>{T.preventDefault(),u.current=!0,c(!0),l&&l(!0);let M=T.touches[0];h(M.clientX);let E=R=>{R.preventDefault(),u.current&&R.touches[0]&&h(R.touches[0].clientX)},L=()=>{u.current=!1,c(!1),l&&l(!1),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",L)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",L)},[h,l]);return ce.default.useEffect(()=>{let T=a.current;if(T)return T.addEventListener("touchstart",S,{passive:!1}),()=>{T.removeEventListener("touchstart",S)}},[S]),ce.default.createElement(mp,{ref:a,role:"slider","aria-label":"Barra de tiempo","aria-valuemin":0,"aria-valuemax":Math.round(t),"aria-valuenow":Math.round(e),"aria-valuetext":Ve(Math.round(e)),tabIndex:0,onMouseDown:P},v?ce.default.createElement(Pp,{segments:o,currentTime:e,duration:t,buffered:r,hoveredIndex:p&&x?o.findIndex(T=>T.startTime===x.startTime):-1}):ce.default.createElement(ce.default.Fragment,null,ce.default.createElement(hp,null),ce.default.createElement(yp,{style:{width:`${m*100}%`}}),ce.default.createElement(gp,{style:{width:`${d*100}%`}})),ce.default.createElement(bp,{style:{left:`${d*100}%`}}),w&&ce.default.createElement(hn,{strokePath:g,currentTime:e,duration:t,isFullscreen:!1,bottomOffset:14,visible:p}),v&&p&&x&&ce.default.createElement(vp,{style:{left:`${d*100}%`}},x.title,`
`,Ve(Math.round(e))))};Tp.propTypes={currentTime:be.default.number.isRequired,duration:be.default.number.isRequired,buffered:be.default.number,chapters:be.default.arrayOf(be.default.shape({title:be.default.string.isRequired,startTime:be.default.number.isRequired,endTime:be.default.number.isRequired})),heatmapData:be.default.arrayOf(be.default.shape({startTime:be.default.number.isRequired,endTime:be.default.number.isRequired,value:be.default.number.isRequired})),getChapterAtTime:be.default.func,onChange:be.default.func.isRequired,onSeeking:be.default.func};var Ep=ce.default.memo(Tp);Qe();var Lp=({visible:e,live:t,currentTime:r,duration:o,buffered:n,fullscreen:i,chapters:s,heatmapData:l,getChapterAtTime:a,i18n:u,onChangeCurrentTime:p,onSeeking:c,onRequestFullscreen:d,onExitFullscreen:m})=>rt.default.createElement(cp,{$visible:e,onClick:v=>v.stopPropagation()},t===!1&&rt.default.createElement(rt.default.Fragment,null,rt.default.createElement(dp,null,Ve(Math.round(r))," / ",Ve(Math.round(o))),rt.default.createElement(pp,null,rt.default.createElement(Ep,{currentTime:r,duration:o,buffered:n,chapters:s,heatmapData:l,getChapterAtTime:a,onChange:p,onSeeking:c}))),rt.default.createElement(fp,{"aria-label":i?u.exitFullscreen:u.fullscreen,onClick:i?m:d},i?rt.default.createElement(Jc,null):rt.default.createElement(Zc,null)));Lp.propTypes={visible:re.default.bool.isRequired,live:re.default.bool.isRequired,currentTime:re.default.number.isRequired,duration:re.default.number.isRequired,buffered:re.default.number,fullscreen:re.default.bool.isRequired,chapters:re.default.arrayOf(re.default.shape({title:re.default.string.isRequired,startTime:re.default.number.isRequired,endTime:re.default.number.isRequired})),heatmapData:re.default.arrayOf(re.default.shape({startTime:re.default.number.isRequired,endTime:re.default.number.isRequired,value:re.default.number.isRequired})),getChapterAtTime:re.default.func,i18n:re.default.shape({exitFullscreen:re.default.string,fullscreen:re.default.string}).isRequired,onChangeCurrentTime:re.default.func.isRequired,onSeeking:re.default.func,onRequestFullscreen:re.default.func.isRequired,onExitFullscreen:re.default.func.isRequired};var Mp=rt.default.memo(Lp);var pe=y(k()),kt=y(U());var im=en`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`,ji=f.div`
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
  ${({direction:e})=>e==="forward"?H`
          background: linear-gradient(to left, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%);
        `:H`
          background: linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%);
        `}
`,Qi=f.div`
  display: flex;
  align-items: center;
  ${({direction:e})=>e==="backward"?"transform: rotate(180deg);":""}
  & > svg {
    width: 20px;
    height: 20px;
    animation: ${im} 1s infinite;
    opacity: 0;
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }
`,Ui=f.span`
  font-size: 12px;
  color: #ccc;
  margin-top: 4px;
`,Wi=f.button`
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
`;var Ap=({skipState:e,onTapLeft:t,onTapRight:r,i18n:o})=>{let n=(o==null?void 0:o.seconds)||"seconds",i=pe.default.useCallback(l=>{l.stopPropagation(),t()},[t]),s=pe.default.useCallback(l=>{l.stopPropagation(),r()},[r]);return pe.default.createElement(pe.default.Fragment,null,pe.default.createElement(Wi,{direction:"backward",onClick:i,"aria-label":"Skip backward"}),pe.default.createElement(Wi,{direction:"forward",onClick:s,"aria-label":"Skip forward"}),e.visible&&e.direction==="backward"&&pe.default.createElement(ji,{direction:"backward"},pe.default.createElement(Qi,{direction:"backward"},pe.default.createElement(nr,null),pe.default.createElement(nr,null),pe.default.createElement(nr,null)),pe.default.createElement(Ui,null,e.seconds," ",n)),e.visible&&e.direction==="forward"&&pe.default.createElement(ji,{direction:"forward"},pe.default.createElement(Qi,{direction:"forward"},pe.default.createElement(nr,null),pe.default.createElement(nr,null),pe.default.createElement(nr,null)),pe.default.createElement(Ui,null,e.seconds," ",n)))};Ap.propTypes={skipState:kt.default.shape({direction:kt.default.oneOf(["forward","backward",null]),visible:kt.default.bool.isRequired,seconds:kt.default.number.isRequired}).isRequired,onTapLeft:kt.default.func.isRequired,onTapRight:kt.default.func.isRequired,i18n:kt.default.shape({seconds:kt.default.string})};var Ip=pe.default.memo(Ap);var V=y(k()),ir=y(U());var Rp=f.div`
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
`,Op=f.div`
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
`,Dp=f.span`
  flex: 1;
  font-weight: 400;
`,On=f.button`
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
  ${({$position:e})=>e==="left"?H`
          left: 6px;
        `:H`
          right: 6px;
        `}
`,Bp=f.ul`
  padding: 4px 0;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  list-style: none;
`,Yi=f.li`
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
`,Gi=f.div`
  display: block;
  width: 36px;
  height: 36px;
  margin: 0 auto 5px;
  position: relative;
  top: 5px;
`,Xi=f.span`
  display: block;
  font-size: 15px;
  color: #fff;
`,Ki=f.div`
  font-size: 11px;
  color: #ccc;
  line-height: 1;
  display: block;
  margin: 6px 0 0;
  padding: 0;
  text-align: center;
`,qp=f.div`
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
`,Np=f.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 6px 0;
`,Dn=f.li`
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
  ${({active:e})=>e&&H`
      background: rgba(180, 60, 60, 0.6);
    `}
`,Zi=f.ul`
  margin: 0;
  padding: 6px 0;
  list-style: none;
`,Fp=f.div`
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
  ${({hidden:e})=>e?H`
          opacity: 0;
          pointer-events: none;
          transform: translateX(-100%);
        `:H`
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
        `}
`;var _p=[{label:"2",value:2},{label:"1.5",value:1.5},{label:"1.25",value:1.25},{label:"Normal",value:1},{label:"0.75",value:.75},{label:"0.5",value:.5},{label:"0.25",value:.25}],Vp=({visible:e,qualities:t,playbackRate:r,playbackQuality:o,onChangeSettings:n,onClose:i})=>{var P;let{i18n:s}=_(),[l,a]=V.default.useState(null),[u,p]=V.default.useState(!0),[c,d]=V.default.useState(null);V.default.useEffect(()=>{if(o==null||o===0||t.length===0)return;let S=o.toString();t.find(M=>M.value===S)&&u&&d(S)},[o,t]);let m=V.default.useCallback(S=>{S.stopPropagation(),a(null),i()},[i]),v=V.default.useCallback(S=>{S.stopPropagation(),a(null)},[]),g=V.default.useCallback(S=>T=>{T.stopPropagation(),n({quality:{value:String(S)}}),S===0?p(!0):(p(!1),d(String(S))),a(null),i()},[n,i]),w=V.default.useCallback(S=>T=>{T.stopPropagation(),n({speed:{value:String(S)}}),a(null),i()},[n,i]),x=V.default.useMemo(()=>{let S=_p.find(T=>T.value===r);return S?S.label:"Normal"},[r]);V.default.useEffect(()=>{e&&a(null)},[e]);let h=l!==null;return V.default.createElement(Rp,{$visible:e,onClick:S=>S.stopPropagation()},V.default.createElement(Op,null,h?V.default.createElement(On,{$position:"left",onClick:v,"aria-label":"Back"},V.default.createElement(rp,null)):V.default.createElement(On,{$position:"left","aria-label":"Settings"},V.default.createElement(ko,null)),V.default.createElement(Dp,null,h?l==="quality"?s.quality:s.speed:s.settings),V.default.createElement(On,{$position:"right",onClick:m,"aria-label":"Close"},V.default.createElement(tp,null))),V.default.createElement(Fp,{hidden:h},V.default.createElement(Bp,null,t.length>0&&V.default.createElement(Yi,{onClick:()=>a("quality")},V.default.createElement(Gi,null,V.default.createElement(ko,null)),V.default.createElement(Xi,null,s.quality),V.default.createElement(Ki,null,u?c?`${s.auto} (${c}p)`:s.auto:((P=t.find(S=>S.value===c))==null?void 0:P.label)||c)),V.default.createElement(Yi,{onClick:()=>a("speed")},V.default.createElement(Gi,null,V.default.createElement(ep,null)),V.default.createElement(Xi,null,s.speed),V.default.createElement(Ki,null,x)))),V.default.createElement(qp,{$visible:h},V.default.createElement(Np,null,l==="quality"&&V.default.createElement(Zi,null,t.map(S=>V.default.createElement(Dn,{key:S.value,active:!u&&S.value===c,onClick:g(S.value)},S.label)),V.default.createElement(Dn,{active:u,onClick:g(0)},s.auto)),l==="speed"&&V.default.createElement(Zi,null,_p.map(S=>V.default.createElement(Dn,{key:S.value,active:S.value===r,onClick:w(S.value)},S.label))))))};Vp.propTypes={visible:ir.default.bool.isRequired,qualities:ir.default.array.isRequired,playbackRate:ir.default.number.isRequired,playbackQuality:ir.default.number,onChangeSettings:ir.default.func.isRequired,onClose:ir.default.func.isRequired};var $p=V.default.memo(Vp);var Fe=y(k()),sm=3e3;function Ji({hasResource:e,loading:t,prevented:r,paused:o,ended:n,waiting:i,seeking:s}){let[l,a]=(0,Fe.useState)(!0),u=(0,Fe.useRef)(null),p=!e||t||r||o||n||i||s,c=(0,Fe.useCallback)(()=>{clearTimeout(u.current),u.current=setTimeout(()=>{a(!1)},sm)},[]),d=(0,Fe.useCallback)(()=>{clearTimeout(u.current)},[]),m=(0,Fe.useCallback)(()=>{a(w=>{let x=!w;return x&&!p&&c(),x})},[p,c]),v=(0,Fe.useCallback)(()=>{a(!0),p||c()},[p,c]),g=(0,Fe.useCallback)(()=>{p||(a(!1),d())},[p,d]);return(0,Fe.useEffect)(()=>{p?(a(!0),d()):l&&c()},[p,l,c,d]),(0,Fe.useEffect)(()=>{!s&&!o&&!n&&l&&c()},[s,o,n,l,c]),(0,Fe.useEffect)(()=>()=>{clearTimeout(u.current)},[]),{controlsVisible:l,toggleControls:m,showControls:v,hideControls:g}}var Ce=y(k()),Hp=300,Bn=10,am=1e3;function es({currentTime:e,duration:t,changeCurrentTime:r,showControls:o}){let[n,i]=(0,Ce.useState)({direction:null,visible:!1,seconds:0}),s=(0,Ce.useRef)(null),l=(0,Ce.useRef)(null),a=(0,Ce.useRef)(0),u=(0,Ce.useRef)(0),p=(0,Ce.useRef)(null),c=(0,Ce.useRef)(e);c.current=e;let d=(0,Ce.useRef)(t);d.current=t;let m=(0,Ce.useCallback)(w=>{let x=d.current,h=c.current;if(isNaN(x)||x<=0)return;let P=w==="forward"?Bn:-Bn,S=Math.max(0,Math.min(x,h+P));r(S),i(T=>({direction:w,visible:!0,seconds:T.direction===w&&T.visible?T.seconds+Bn:Bn})),clearTimeout(p.current),p.current=setTimeout(()=>{i({direction:null,visible:!1,seconds:0})},am)},[r]),v=(0,Ce.useCallback)(()=>{a.current+=1,a.current===1?s.current=setTimeout(()=>{a.current=0,o&&o()},Hp):(clearTimeout(s.current),a.current=0,m("backward"))},[m,o]),g=(0,Ce.useCallback)(()=>{u.current+=1,u.current===1?l.current=setTimeout(()=>{u.current=0,o&&o()},Hp):(clearTimeout(l.current),u.current=0,m("forward"))},[m,o]);return(0,Ce.useEffect)(()=>()=>{clearTimeout(s.current),clearTimeout(l.current),clearTimeout(p.current)},[]),{skipState:n,handleTapLeft:v,handleTapRight:g}}var ts=oe.default.forwardRef(({videoRef:e,playerRef:t,live:r=!1,hasResource:o=!1,hasAudio:n,prevented:i,loading:s,paused:l,ended:a,seeking:u,waiting:p,duration:c,buffered:d=null,currentTime:m,muted:v,volume:g,pictureInPictureEnabled:w,pip:x,fullscreen:h,qualities:P,spriteVTTFile:S,chapters:T,heatmapData:M,fullHDQualityBreak:E,playbackRate:L,playbackQuality:R,loop:q,poster:C,onPlayClick:b,onPauseClick:N,onTogglePlay:$,changePlaybackRate:j,changePlayBackQuality:Z,changeVolume:ve,onMutedClick:ze,changeCurrentTime:A,requestPictureInPicture:D,exitPictureInPicture:ne,requestFullscreen:Y,exitFullscreen:me,onSeeking:de,onLoopClick:Pe,onPreventedClick:Te,onPrevious:Ke,onNext:ct,showNavButtons:je,kernelMsg:pt=null},Tt)=>{let Re=ye(),{i18n:sr}=_(),ar=oe.default.useRef(null),{controlsVisible:Et,toggleControls:Nr,showControls:dt,hideControls:lr}=Ji({hasResource:o,loading:s,prevented:i,paused:l,ended:a,waiting:p,seeking:u}),{skipState:Fn,handleTapLeft:_n,handleTapRight:Vn}=es({currentTime:m,duration:c,changeCurrentTime:A,showControls:Nr}),{contextMenuItems:Mo,contextMenuPosition:Fr,handleContextMenu:$n}=Ln({fullscreen:h,contextMenuRef:ar,pip:x,loop:q,pictureInPictureEnabled:w,requestPictureInPicture:D,exitPictureInPicture:ne,onLoopClick:Pe}),{segments:qt,getChapterAtTime:Nt}=Lr({chapters:T,duration:c});oe.default.useEffect(()=>{Re({videoRef:e,playerRef:t})},[e,t,Re]),oe.default.useImperativeHandle(Tt,()=>({showControls:dt,hideControls:lr}),[dt,lr]);let Lt=oe.default.useCallback(({quality:Ao,speed:us})=>{var cs;if(us&&j(Number((cs=us.value)!=null?cs:1)),Ao){let ps=Number(Ao.value);Z(Number.isNaN(ps)?0:ps)}},[j,Z]),[ot,ls]=oe.default.useState(!1),cd=oe.default.useCallback(Ao=>{Ao.stopPropagation(),ls(!0)},[]),pd=oe.default.useCallback(()=>{ls(!1)},[]),dd=oe.default.useCallback(()=>{l||a?b():N()},[l,a,b,N]),fd=(p||u&&!S||s)&&!l&&!a;return oe.default.createElement(zc,{onContextMenu:$n,onClick:Nr},oe.default.createElement(to,null),oe.default.createElement(Jr,{hasResource:o,prevented:i,paused:l,muted:v,currentTime:m,onClick:Te}),C&&oe.default.createElement(ro,{style:{opacity:m<=0||a?1:0}},oe.default.createElement(oo,{style:{backgroundImage:`url(${C})`}})),oe.default.createElement(Co,{ref:ar,fullscreen:h,position:Fr,menuItems:Mo}),S&&oe.default.createElement(go,{spriteVTTFile:S,duration:c,seekTime:m,visible:u}),oe.default.createElement(jc,{$visible:Et&&o&&!a&&!i}),oe.default.createElement(Ip,{skipState:Fn,onTapLeft:_n,onTapRight:Vn,i18n:sr}),oe.default.createElement(np,{visible:Et&&!ot,onOpenSettings:cd,settingsLabel:sr.settings||"Settings"}),oe.default.createElement($p,{visible:ot,qualities:P,playbackRate:L,playbackQuality:R,onChangeSettings:Lt,onClose:pd}),oe.default.createElement(up,{visible:Et&&!ot,isLoading:fd,paused:l,ended:a,onPlayPause:dd,onPrevious:Ke,onNext:ct,showNavButtons:je,i18n:sr}),oe.default.createElement(Mp,{visible:Et&&!ot,live:r,currentTime:m,duration:c,buffered:d,fullscreen:h,chapters:qt,heatmapData:M,getChapterAtTime:Nt,i18n:sr,onChangeCurrentTime:A,onSeeking:de,onRequestFullscreen:Y,onExitFullscreen:me}),oe.default.createElement(eo,{hasResource:o,kernelMsg:pt}))});ts.displayName="MobilePlayerSkin";ts.propTypes={spriteVTTFile:B.default.string,videoRef:B.default.oneOfType([B.default.func,B.default.shape({current:B.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:B.default.oneOfType([B.default.func,B.default.shape({current:B.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:B.default.bool,waiting:B.default.bool,live:B.default.bool.isRequired,hasResource:B.default.bool.isRequired,loading:B.default.bool.isRequired,paused:B.default.bool.isRequired,ended:B.default.bool.isRequired,seeking:B.default.bool.isRequired,onPlayClick:B.default.func.isRequired,onPauseClick:B.default.func.isRequired,onTogglePlay:B.default.func.isRequired,duration:B.default.number.isRequired,buffered:B.default.number.isRequired||null,currentTime:B.default.number.isRequired,changeCurrentTime:B.default.func.isRequired,muted:B.default.bool.isRequired,volume:B.default.number.isRequired,changeVolume:B.default.func.isRequired,onMutedClick:B.default.func.isRequired,changePlaybackRate:B.default.func.isRequired,changePlayBackQuality:B.default.func.isRequired,pictureInPictureEnabled:B.default.bool.isRequired,pip:B.default.bool.isRequired,requestPictureInPicture:B.default.func.isRequired,exitPictureInPicture:B.default.func.isRequired,fullscreen:B.default.bool.isRequired,qualities:B.default.arrayOf(B.default.shape({label:B.default.string.isRequired,value:B.default.string.isRequired,isFullHD:B.default.bool.isRequired}).isRequired).isRequired,playbackRate:B.default.number.isRequired,loop:B.default.bool.isRequired,requestFullscreen:B.default.func.isRequired,exitFullscreen:B.default.func.isRequired,onLoopClick:B.default.func.isRequired,onPreventedClick:B.default.func.isRequired,onPrevious:B.default.func,onNext:B.default.func,showNavButtons:B.default.bool,kernelMsg:B.default.oneOfType([B.default.shape({type:B.default.string.isRequired,detail:B.default.string.isRequired}),B.default.oneOf([void 0])]),fullHDQualityBreak:B.default.number,poster:B.default.string.isRequired,hasAudio:B.default.bool};var zp=oe.default.memo(ts,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.onTogglePlay===t.onTogglePlay&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.changePlayBackQuality===t.changePlayBackQuality&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onPreventedClick===t.onPreventedClick&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);var jp=!1,qn=!1;function lm(){if(typeof window=="undefined"||typeof navigator=="undefined")return;let e=window.navigator.userAgent.toLowerCase(),t="ontouchstart"in window||navigator.maxTouchPoints>0,r=/iphone|ipod|android.*mobile|windows phone|blackberry/.test(e),o=/ipad|android(?!.*mobile)|silk|kindle|tablet/.test(e),n=!t&&/mac|windows|linux|cros/.test(e);r||o?(jp=!1,qn=!0):(jp=n,qn=!n)}lm();var rs=To.default.forwardRef((e,t)=>{let{forceMobile:r,...o}=e;return(r!=null?r:qn)?To.default.createElement(zp,{ref:t,...o}):To.default.createElement(Hc,{ref:t,...o})});rs.displayName="PlayerSkin";rs.propTypes={spriteVTTFile:O.default.string,chapters:O.default.arrayOf(O.default.shape({title:O.default.string.isRequired,startTime:O.default.number.isRequired})),heatmapData:O.default.arrayOf(O.default.shape({startTime:O.default.number.isRequired,endTime:O.default.number.isRequired,value:O.default.number.isRequired})),videoRef:O.default.oneOfType([O.default.func,O.default.shape({current:O.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:O.default.oneOfType([O.default.func,O.default.shape({current:O.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:O.default.bool,waiting:O.default.bool,live:O.default.bool.isRequired,hasResource:O.default.bool.isRequired,loading:O.default.bool.isRequired,paused:O.default.bool.isRequired,ended:O.default.bool.isRequired,seeking:O.default.bool.isRequired,onPlayClick:O.default.func.isRequired,onPauseClick:O.default.func.isRequired,duration:O.default.number.isRequired,buffered:O.default.number.isRequired||null,currentTime:O.default.number.isRequired,changeCurrentTime:O.default.func.isRequired,muted:O.default.bool.isRequired,volume:O.default.number.isRequired,changeVolume:O.default.func.isRequired,onMutedClick:O.default.func.isRequired,changePlaybackRate:O.default.func.isRequired,pictureInPictureEnabled:O.default.bool.isRequired,pip:O.default.bool.isRequired,requestPictureInPicture:O.default.func.isRequired,exitPictureInPicture:O.default.func.isRequired,fullscreen:O.default.bool.isRequired,qualities:O.default.arrayOf(O.default.shape({label:O.default.string.isRequired,value:O.default.string.isRequired,isFullHD:O.default.bool.isRequired}).isRequired).isRequired,playbackRate:O.default.number.isRequired,loop:O.default.bool.isRequired,requestFullscreen:O.default.func.isRequired,exitFullscreen:O.default.func.isRequired,onLoopClick:O.default.func.isRequired,onPreventedClick:O.default.func.isRequired,kernelMsg:O.default.oneOfType([O.default.shape({type:O.default.string.isRequired,detail:O.default.string.isRequired}),O.default.oneOf([void 0])]),fullHDQualityBreak:O.default.number,poster:O.default.string.isRequired,forceMobile:O.default.bool};var Qp=To.default.memo(rs,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.forceMobile===t.forceMobile&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.onTogglePlay===t.onTogglePlay&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onPreventedClick===t.onPreventedClick&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);var Nn=y(k());var os=["i18n","contextMenuVisible","controlsHovering","hiding","menuVisible","subMenuVisible","timeSliding","volumeSliding","videoRef","playerRef"];function ns(e,t){try{if(!e||!t)throw new Error("Reducer params has not been provided!");if(typeof t=="function"){let r=t(e);return!r||typeof r!="object"?e:ns(e,r)}if("type"in t){let{type:r,payload:o}=t;if(os.includes(r)===!1)throw new Error(`Invalid type "${r}" in action payload!`);return e[r]===o?e:{...e,[r]:o}}else if(typeof t=="object"){if(Object.keys(t).length===0)throw new Error("Reducer action object is empty!");let r=!1,o={...e};for(let n in t){let i=t[n];if(os.includes(n)===!1)throw new Error(`Invalid type "${n}" in action object!`);e[n]!==i&&(r=!0,o={...o,[n]:i})}return r?o:e}return e}catch(r){return console.error("Error in AppReducer: ",r),e}}var Up=({children:e,language:t})=>{let[r,o]=Nn.default.useReducer(ns,{...xi,i18n:dr[t]}),n=Nn.default.useMemo(()=>({state:r,dispatch:o}),[r,o]);return Nn.default.createElement(kr.Provider,{value:n},e)};var _e=y(k());var Pt=y(k()),um=({prevented:e,muted:t,videoRef:r,src:o,updateState:n})=>{let i=Pt.default.useRef(.8),s=Pt.default.useRef(!1),l=Pt.default.useCallback(c=>{if(!r.current||s.current)return;let d=c.target.muted;c.target.volume===0&&(d=!0),n({volume:c.target.volume,muted:d})},[r,n]),a=Pt.default.useCallback(()=>{if(!r.current)return;let c=r.current;if(!c)return;let d=!c.muted;if(s.current=!0,d)c.volume>0&&(i.current=c.volume),c.muted=!0,n({volume:c.volume,muted:!0});else{let m=i.current||.8;c.muted=!1,c.volume=m,n({volume:m,muted:!1})}setTimeout(()=>{s.current=!1},0)},[r,n]),u=Pt.default.useCallback(c=>{if(!r.current)return;let d=r.current,m=c===0;d&&(d.volume=c),c!==0&&d.muted===!0&&(m=!1,d.muted=!1),c>0&&(i.current=c),n({volume:c,muted:m})},[r,n]),p=Pt.default.useCallback(c=>{if(!r.current)return;let m=r.current.volume,v=c(m);u(v)},[r,u]);return Pt.default.useEffect(()=>{if(!r.current)return()=>{};let c=r.current;return c?(c.addEventListener("volumechange",l),()=>{c.removeEventListener("volumechange",l)}):()=>{}},[l,r]),Pt.default.useEffect(()=>{if(!r.current)return;let c=r.current;c&&(t?c.muted=!0:c.muted=!1)},[o,r,t]),{onMutedClick:a,changeVolume:u,updateVolumeWithCallback:p}},Wp=um;var Br=y(k()),cm=({updateState:e,videoRef:t,playerRef:r})=>{let o=Br.default.useCallback(()=>{let l=r==null?void 0:r.current,a=t==null?void 0:t.current;if(!l){console.error("useVideoFullscreen: the player element is not ready");return}if(l.requestFullscreen){let u=l.requestFullscreen();u&&u.catch&&u.catch(()=>{})}else l.msRequestFullscreen?l.msRequestFullscreen():l.webkitRequestFullscreen?l.webkitRequestFullscreen():a&&a.webkitEnterFullScreen&&a.webkitEnterFullScreen()},[t,r]),n=Br.default.useCallback(()=>{document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},[]),i=Br.default.useCallback(()=>{let l=r==null?void 0:r.current;(document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement)===l?n():o()},[r,n,o]),s=Br.default.useCallback(()=>{let l=r==null?void 0:r.current,a=document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement;e({fullscreen:!!l&&a===l})},[e,r]);return Br.default.useEffect(()=>(document.addEventListener("fullscreenchange",s),document.addEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=s,()=>{document.removeEventListener("fullscreenchange",s),document.removeEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=null}),[s]),{requestFullscreen:o,exitFullscreen:n,requestToggleFullscreen:i}},Yp=cm;var Gp=(e,t)=>({...e,seeking:t,isEnded:!1,playing:t?e.playing:!0});var pm=({ref:e,playerRef:t,url:r,player:o,fullHDQualityBreak:n,sources:i,prevented:s,muted:l,updateState:a})=>{let{i18n:u}=_(),p=_e.default.useRef(null),c=_e.default.useRef(null),d=_e.default.useCallback(({fullscreen:C})=>{a(b=>({...b,isFullScreen:C}))},[a]),{requestFullscreen:m,exitFullscreen:v,requestToggleFullscreen:g}=Yp({updateState:d,videoRef:p,playerRef:t}),w=_e.default.useMemo(()=>i.length>0?i.map(C=>({label:Or({label:"quality",value:C.resolution.toString(),i18n:u}),value:C.resolution.toString(),isFullHD:n!==void 0&&C.resolution>=n})):[],[i,n,u]),{onMutedClick:x,changeVolume:h,updateVolumeWithCallback:P}=Wp({prevented:s,muted:l,videoRef:p,src:r,updateState:({muted:C,volume:b})=>a(N=>({...N,isMuted:C!=null?C:!1,volume:b!=null?b:0}))}),S=_e.default.useCallback(C=>{o&&(a(b=>({...b,played:C})),o.seekTo(C))},[o,a]),T=_e.default.useCallback(C=>{if(!o)return;let b=o.getCurrentTime()||0,N=o.getDuration()||0,$=C(b,N);S($)},[o,S]),M=_e.default.useRef(x);M.current=x;let E=_e.default.useRef(S);E.current=S;let L=_e.default.useRef(o);L.current=o;let R=_e.default.useMemo(()=>({onPlayClick:()=>L.current&&a(C=>({...C,playing:!0})),onPauseClick:()=>L.current&&a(C=>({...C,playing:!1})),onTogglePlay:()=>L.current&&a(C=>({...C,playing:!C.playing})),changePlaybackRate:C=>L.current&&a(b=>({...b,playbackRate:C})),changePlayBackQuality:C=>{L.current&&a(b=>({...b,playbackQuality:C}))},requestPictureInPicture:()=>L.current&&a(C=>({...C,isPIP:!0})),exitPictureInPicture:()=>L.current&&a(C=>({...C,isPIP:!1})),onSeeking:C=>L.current&&a(b=>Gp(b,C)),onMutedClick:()=>L.current&&M.current(),onLoopClick:()=>L.current&&a(C=>({...C,loop:!C.loop})),onPreventedClick:()=>a(C=>({...C,isMuted:!1,volume:1})),changeCurrentTime:C=>E.current(C)}),[a]),q=_e.default.useCallback(C=>{var N;C.preventDefault(),C.stopPropagation();let b=un[C.which||C.keyCode]||cn[C.key];if(o)switch((N=c.current)==null||N.showControls(),b){case"SPACE_KEY":{a($=>({...$,playing:!$.playing}));break}case"F_KEY":{g();break}case"MUTE_KEY":{x();break}case"ARROW_LEFT_KEY":{T($=>{let j=$-5;return j<0?0:j});break}case"ARROW_RIGHT_KEY":{T(($,j)=>{let Z=$+5;return Z>=j?j:Z});break}case"ARROW_UP_KEY":{P($=>{let j=$+.1;return j>=1?1:j});break}case"ARROW_DOWN_KEY":{P($=>{let j=$-.1;return j<0?0:j});break}default:break}},[o,a,g,x,T,P]);return _e.default.useImperativeHandle(e,()=>({handleKeyDown:q})),_e.default.useEffect(()=>{var C;p.current=(C=o==null?void 0:o.getPlayer())!=null?C:null},[o]),{playerSkinRef:c,videoRef:p,qualities:w,memorizedProps:R,handleKeyDown:q,requestFullscreen:m,exitFullscreen:v,changeVolume:h}},Xp=pm;var is=Eo.default.forwardRef(({url:e,sources:t,playerRef:r,player:o,hasAudio:n,fullHDQualityBreak:i,live:s=!1,language:l=Object.keys(dr)[0],hasResource:a=!1,buffered:u=null,kernelMsg:p=null,updateState:c,waiting:d=!1,prevented:m=!1,muted:v=!1,...g},w)=>{let{playerSkinRef:x,videoRef:h,qualities:P,memorizedProps:S,handleKeyDown:T,requestFullscreen:M,exitFullscreen:E,changeVolume:L}=Xp({ref:w,playerRef:r,url:e,player:o,fullHDQualityBreak:i,sources:t,prevented:m,muted:v,updateState:c});return Eo.default.createElement(Up,{language:l},Eo.default.createElement(Qp,{ref:x,videoRef:h,playerRef:r,qualities:P,hasAudio:n,handleKeyDown:T,requestFullscreen:M,exitFullscreen:E,changeVolume:L,fullHDQualityBreak:i,live:s,hasResource:a,buffered:u,kernelMsg:p,prevented:m,waiting:d,muted:v,...g,...S}))});is.displayName="PlayerSkinWrapper";is.propTypes={playerRef:z.default.oneOfType([z.default.func,z.default.shape({current:z.default.instanceOf(HTMLDivElement)})]).isRequired,player:z.default.instanceOf(nt),live:z.default.bool,prevented:z.default.bool,waiting:z.default.bool,hasResource:z.default.bool.isRequired,hasAudio:z.default.bool.isRequired,loading:z.default.bool.isRequired,paused:z.default.bool.isRequired,ended:z.default.bool.isRequired,seeking:z.default.bool.isRequired,duration:z.default.number.isRequired,buffered:z.default.number.isRequired||null,currentTime:z.default.number.isRequired,muted:z.default.bool.isRequired,volume:z.default.number.isRequired,playbackRate:z.default.number.isRequired,pictureInPictureEnabled:z.default.bool.isRequired,fullHDQualityBreak:z.default.number,pip:z.default.bool.isRequired,fullscreen:z.default.bool.isRequired,kernelMsg:z.default.oneOfType([z.default.shape({type:z.default.string.isRequired,detail:z.default.string.isRequired}),z.default.oneOf([void 0])]),url:z.default.string,sources:z.default.arrayOf(z.default.shape({src:z.default.string.isRequired,resolution:z.default.number.isRequired}).isRequired).isRequired,loop:z.default.bool.isRequired};var Kp=Eo.default.memo(is,(e,t)=>e.playerRef===t.playerRef&&e.player===t.player&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.kernelMsg===t.kernelMsg&&e.url===t.url&&e.sources===t.sources&&e.chapters===t.chapters&&e.poster===t.poster&&e.forceMobile===t.forceMobile);var Lo={kernelError:null,seeking:!1,seek:0,played:0,loaded:0,duration:0,isFullScreen:!1,isEnded:!1,isPIP:!1,isLoading:!0,volume:.8,playbackRate:1,playbackQuality:null,videoUrl:null,hasAudio:!0,loop:!1,playing:!1,isMuted:!1};var ss=y(k());var Zp=ss.default.forwardRef(({children:e,...t},r)=>ss.default.createElement(at,{ref:r,...t},e));Zp.displayName="MediaPlayerWrapper";var Jp=Zp;var He=y(k());Qe();var ed=e=>{if(typeof document=="undefined")return null;let t=`rmp_${e}=`,r=document.cookie.split(";");for(let o=0;o<r.length;o++){let n=r[o];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(t)===0)try{return decodeURIComponent(n.substring(t.length,n.length))}catch{return n.substring(t.length,n.length)}}return null},td=(e,t,r)=>{if(typeof document=="undefined")return;let o="";if(r){let n=new Date;n.setTime(n.getTime()+r*24*60*60*1e3),o=`; expires=${n.toUTCString()}`}document.cookie=`rmp_${e}=${encodeURIComponent(t||"")}${o}; path=/`};var rd=async()=>{let e="https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js";try{let r=ed("internet_speed");if(r){let d=parseFloat(r);if(!isNaN(d)&&d>0)return d}let o=new AbortController,n=setTimeout(()=>o.abort(),1e4),i=performance.now(),l=await(await fetch(e,{signal:o.signal,cache:"no-store"})).blob();clearTimeout(n);let a=performance.now(),u=l.size*8||1638400,p=(a-i)/1e3,c=u/(p*1024*1024);return td("internet_speed",c.toString(),7),c}catch(r){return r.name!=="AbortError"&&console.error("An error occurred while measuring the network speed: ",r),null}},od=(e,t)=>{let r=[{quality:144,minSpeed:.3},{quality:270,minSpeed:.5},{quality:360,minSpeed:.7},{quality:480,minSpeed:1},{quality:720,minSpeed:2.5},{quality:1080,minSpeed:5},{quality:2160,minSpeed:20}],o;for(let n=r.length-1;n>=0;n--){let i=r[n];if(e>=i.minSpeed){o=i.quality;break}}if(o&&t.includes(o))return o;if(o)for(let n=r.length-1;n>=0;n--){let i=r[n];if(i.quality<=o&&t.includes(i.quality))return i.quality}for(let n=0;n<r.length;n++){let i=r[n];if(t.includes(i.quality))return i.quality}return t.length>0?t[0]:void 0};var dm=({onBuffer:e,onBufferEnd:t,onDisablePIP:r,onDuration:o,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:u,onPlayBackRateChange:p,onProgress:c,onReady:d,onSeek:m,onStart:v,onLoaded:g,onMount:w,updateState:x,playerState:h,extraProps:{url:P,sources:S,fullHDQualityBreak:T,prevented:M}})=>{let[E,L]=He.default.useState(null),R=Jt(S),q=He.default.useMemo(()=>R.length>0?Ps(R,"resolution"):null,[R]),C=He.default.useRef(x);C.current=x;let b=He.default.useRef({onBuffer:e,onBufferEnd:t,onDisablePIP:r,onDuration:o,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:u,onPlayBackRateChange:p,onProgress:c,onReady:d,onSeek:m,onStart:v,onLoaded:g,onMount:w});b.current={onBuffer:e,onBufferEnd:t,onDisablePIP:r,onDuration:o,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:u,onPlayBackRateChange:p,onProgress:c,onReady:d,onSeek:m,onStart:v,onLoaded:g,onMount:w};let N=He.default.useRef(M);N.current=M;let $=He.default.useRef(h.seeking);$.current=h.seeking,He.default.useEffect(()=>{if(q&&T!==void 0&&!(T in q)){let A=Object.keys(q).join(", ");console.error(`PlayerStack: Invalid fullHDQualityBreak value "${T}". Accepted resolutions are: ${A}. Falling back to highest available.`)}},[q,T]),He.default.useEffect(()=>{if(!q){L(null);return}let A=!1;return(async()=>{var D,ne;try{let Y=await rd();if(A)return;let me=Object.keys(q).map(Number),de=od(Y||0,me),Pe=R[0];Y!==null&&de?(L((ne=(D=q[de])==null?void 0:D.src)!=null?ne:Pe.src),j.current=de,C.current(Te=>({...Te,playbackQuality:de}))):(L(Pe.src),j.current=Pe.resolution,C.current(Te=>({...Te,playbackQuality:Pe.resolution})))}catch{if(A)return;let Y=R[0];L(Y.src),j.current=Y.resolution,C.current(me=>({...me,playbackQuality:Y.resolution}))}})(),()=>{A=!0}},[R]);let j=He.default.useRef(null),{playbackQuality:Z}=h;He.default.useEffect(()=>{Z===0&&j.current!==null&&C.current(A=>({...A,playbackQuality:j.current}))},[Z]);let ve=He.default.useMemo(()=>{var A,D;return q?Z==null||Z===0?E!=null?E:R[0].src:(D=(A=q[Z])==null?void 0:A.src)!=null?D:R[0].src:P},[P,R,q,Z,E]);return{...He.default.useMemo(()=>({onBuffer:(...A)=>{b.current.onBuffer&&b.current.onBuffer(...A)},onBufferEnd:(...A)=>{b.current.onBufferEnd&&b.current.onBufferEnd(...A)},onDisablePIP:A=>{b.current.onDisablePIP&&b.current.onDisablePIP(A),C.current(D=>({...D,isPIP:!1}))},onDuration:A=>{b.current.onDuration&&b.current.onDuration(A),C.current(D=>({...D,duration:A}))},onEnablePIP:A=>{b.current.onEnablePIP&&b.current.onEnablePIP(A),C.current(D=>({...D,isPIP:!0}))},onEnded:A=>{b.current.onEnded&&b.current.onEnded(A),C.current(D=>({...D,isEnded:!0}))},onError:(A,D,ne,Y)=>{b.current.onError&&b.current.onError(A,D,ne,Y);let me=["networkError"],de=["bufferStalledError","bufferNudgeOnStall","bufferAppendError","fragParsingError"];me.includes(D==null?void 0:D.type)||(D==null?void 0:D.type)==="mediaError"&&de.includes(D==null?void 0:D.details)||C.current(Te=>{var Ke;return{...Te,kernelError:D?{type:(D==null?void 0:D.type)||"UnknownError",detail:((Ke=D==null?void 0:D.error)==null?void 0:Ke.message)||"Something was wrong with the playback. Please try again."}:null,isLoading:!1,playing:!1}})},onPause:A=>{b.current.onPause&&b.current.onPause(A),C.current(D=>({...D,playing:!1}))},onPlay:A=>{b.current.onPlay&&b.current.onPlay(A),C.current(D=>{var ne;return{...D,playing:!0,isEnded:!1,hasAudio:N.current?!0:(ne=A==null?void 0:A.hasAudio)!=null?ne:!1}})},onPlayBackQualityChange:A=>{b.current.onPlayBackQualityChange&&b.current.onPlayBackQualityChange(A),C.current(D=>({...D,playbackQuality:A}))},onPlayBackRateChange:A=>{b.current.onPlayBackRateChange&&b.current.onPlayBackRateChange(A),C.current(D=>({...D,playbackRate:A}))},onProgress:A=>{b.current.onProgress&&b.current.onProgress(A),$.current||C.current(D=>({...D,played:A.playedSeconds,loaded:A.loaded}))},onReady:A=>{b.current.onReady&&b.current.onReady(A),C.current(D=>({...D,isLoading:!1}))},onSeek:A=>{b.current.onSeek&&b.current.onSeek(A),C.current(D=>({...D,seek:A}))},onStart:()=>{b.current.onStart&&b.current.onStart()},onLoaded:(...A)=>{b.current.onLoaded&&b.current.onLoaded(...A)},onMount:(...A)=>{b.current.onMount&&b.current.onMount(...A)}}),[]),videoUrl:ve!=null?ve:E}},nd=dm;var id=f.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  margin: auto;
`;var sd=ke.default.forwardRef((e,t)=>{var g;let[r,o]=ke.default.useState({}),[n,i]=ke.default.useState({...Lo,isPIP:e.pip,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(g=e.volume)!=null?g:Lo.volume}),[s,l]=ke.default.useState({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume});(e.pip!==s.pip||e.playbackRate!==s.playbackRate||e.loop!==s.loop||e.playing!==s.playing||e.muted!==s.muted||e.volume!==s.volume)&&(l({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume}),i(w=>{var h,P;let x={...w};return e.pip!==s.pip&&(x.isPIP=e.pip),e.playbackRate!==s.playbackRate&&(x.playbackRate=e.playbackRate),e.loop!==s.loop&&(x.loop=e.loop),e.playing!==s.playing&&(x.playing=e.playing),e.muted!==s.muted&&(x.isMuted=e.muted,x.volume=e.muted?0:(h=e.volume)!=null?h:Lo.volume),e.volume!==s.volume&&!e.muted&&(x.volume=(P=e.volume)!=null?P:Lo.volume),x}));let a=ke.default.useRef(null),u=ke.default.useRef(null),p=ke.default.useCallback(w=>{var x,h;(h=(x=a.current)==null?void 0:x.handleKeyDown)==null||h.call(x,w)},[]),c=ke.default.useMemo(()=>e.prevented||e.playing&&e.muted,[e.muted,e.playing,e.prevented]);ke.default.useEffect(()=>{if(e.player&&n.isLoading===!1){let x=e.player.getPlayer(),h=()=>{let T=x.offsetWidth,M=x.offsetHeight;T>0&&M>0?o({width:`${T}px`,height:`${M}px`}):o({width:e.width||"100%",height:e.height||"100%"})},P=setTimeout(h,500),S=()=>h();return x.addEventListener("loadedmetadata",S),()=>{clearTimeout(P),x.removeEventListener("loadedmetadata",S)}}},[e.player,e.width,e.height,n.isLoading]);let{videoUrl:d,...m}=nd({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDisablePIP:e.onDisablePIP,onDuration:e.onDuration,onEnablePIP:e.onEnablePIP,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackQualityChange:e.onPlayBackQualityChange,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:i,playerState:n,extraProps:{url:e.url,sources:e.sources,fullHDQualityBreak:e.fullHDQualityBreak,prevented:c}}),v=ke.default.useMemo(()=>({attributes:e.config.attributes,tracks:e.config.tracks,forceVideo:e.config.forceVideo,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceLoad:e.config.forceLoad,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS,loopOnEnded:e.config.loopOnEnded}),[e.config]);return ke.default.createElement(Jp,{tabIndex:0,role:"application",dir:"ltr",ref:u,onKeyDown:p,style:r},ke.default.createElement(id,null,d&&ke.default.createElement(nt,{ref:t,activePlayer:e.activePlayer,loop:n.loop,muted:n.isMuted,pip:n.isPIP,playbackRate:n.playbackRate,playbackQuality:n.playbackQuality,playsinline:e.playsinline,progressInterval:e.progressInterval,stopOnUnmount:e.stopOnUnmount,volume:n.volume,url:d,width:e.width,height:e.height,playing:n.playing,config:v,disableDeferredLoading:e.disableDeferredLoading,progressFrequency:e.progressFrequency,...m})),ke.default.createElement(Kp,{ref:a,playerRef:u,url:d,sources:e.sources,hasAudio:n.hasAudio,spriteVTTFile:e.spriteVTTFile,chapters:e.chapters,heatmapData:e.heatmapData,hasResource:typeof d=="string"||e.sources.length>0,kernelMsg:n.kernelError,loading:n.isLoading,prevented:c,muted:n.isMuted,paused:n.playing===!1,live:e.live,buffered:n.loaded,ended:n.isEnded,seeking:n.seeking,waiting:e.waiting,duration:n.duration,currentTime:n.played,volume:n.volume,playbackRate:n.playbackRate,playbackQuality:n.playbackQuality,pictureInPictureEnabled:!0,pip:n.isPIP,loop:n.loop,fullscreen:n.isFullScreen,fullHDQualityBreak:e.fullHDQualityBreak,language:e.language,poster:e.poster,updateState:i,player:e.player,forceMobile:e.forceMobile,onPrevious:e.onPrevious,onNext:e.onNext,showNavButtons:e.showNavButtons}))});sd.displayName="MediaPlayerSkin";var ad=ke.default.memo(sd,(e,t)=>e.url===t.url&&e.sources===t.sources&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.prevented===t.prevented&&e.waiting===t.waiting&&e.playing===t.playing&&e.loop===t.loop&&e.volume===t.volume&&e.muted===t.muted&&e.paused===t.paused&&e.live===t.live&&e.pip===t.pip&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.height===t.height&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.pipeline===t.pipeline&&e.stopOnUnmount===t.stopOnUnmount&&e.activePlayer===t.activePlayer&&e.player===t.player&&e.progressFrequency===t.progressFrequency&&e.disableDeferredLoading===t.disableDeferredLoading&&e.language===t.language&&e.poster===t.poster&&e.config===t.config&&e.forceMobile===t.forceMobile&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onPlayBackQualityChange===t.onPlayBackQualityChange&&e.onProgress===t.onProgress&&e.onEnablePIP===t.onEnablePIP&&e.onDisablePIP===t.onDisablePIP&&e.onLoaded===t.onLoaded&&e.onMount===t.onMount&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);Qe();var fm=typeof window!="undefined"&&window.document&&typeof document!="undefined",mm=typeof global!="undefined"&&global.window&&global.window.document,hm=Object.keys(Kn),ym=fm||mm?qr.default.Suspense:()=>null,ud=e=>{var t;return t=class extends qr.default.Component{constructor(){super(...arguments);I(this,"player",null);I(this,"state",{});I(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{this.player=n}});I(this,"getDuration",()=>this.player?this.player.getDuration():null);I(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null);I(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null);I(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null);I(this,"seekTo",(n,i,s)=>{if(!this.player)return null;this.player.seekTo(n,i,s)});I(this,"handleReady",()=>{this.props.onReady&&this.props.onReady(this)});I(this,"getActivePlayer",zr((n,i)=>e.canPlay(n,i)?e:null));I(this,"getConfig",zr((n,i,s)=>{let{config:l}=this.props;return ld.default.all([Bo.config,Bo.config[s]||{},l,l[s]||{}])}));I(this,"getAttributes",zr(()=>ws(this.props,hm)));I(this,"getPlayerConfig",zr(n=>({attributes:n.attributes,tracks:n.tracks,forceVideo:n.forceVideo,forceHLS:n.forceHLS,dashVersion:n.dashVersion,forceDASH:n.forceDASH,forceFLV:n.forceFLV,flvVersion:n.flvVersion,forceLoad:n.forceLoad,forceDisableHls:n.forceDisableHls,hlsOptions:n.hlsOptions,hlsVersion:n.hlsVersion,forceSafariHLS:n.forceSafariHLS,loopOnEnded:n.loopOnEnded})));I(this,"getSourceProps",()=>"sources"in this.props&&this.props.sources!==void 0?{sources:this.props.sources,fullHDQualityBreak:this.props.fullHDQualityBreak}:{sources:[]});I(this,"getUrlProp",()=>"url"in this.props&&this.props.url!==void 0?this.props.url:"");I(this,"renderActivePlayer",(n,i)=>{if(!n&&!i)return null;let s=this.getActivePlayer(n,i);if(!s)return null;let l=this.getConfig(n,i,s.key),a=this.getPlayerConfig(l),u=this.getSourceProps(),p=this.getUrlProp();return qr.default.createElement(ad,{key:s.key,ref:this.references.player,activePlayer:s.lazyPlayer,player:this.player,loop:this.props.loop,muted:this.props.muted,pip:this.props.pip,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,url:p,sources:u.sources,width:this.props.width,height:this.props.height,playing:this.props.playing,config:a,prevented:this.props.prevented,waiting:this.props.waiting,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onDuration:this.props.onDuration,onEnablePIP:this.props.onEnablePIP,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackQualityChange:this.props.onPlayBackQualityChange,onPlayBackRateChange:this.props.onPlayBackRateChange,onPrevious:this.props.onPrevious,onNext:this.props.onNext,showNavButtons:this.props.showNavButtons,fullHDQualityBreak:u.fullHDQualityBreak,language:this.props.language,live:this.props.live,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,disableDeferredLoading:this.props.disableDeferredLoading,progressFrequency:this.props.progressFrequency,spriteVTTFile:this.props.spriteVTTFile,chapters:this.props.chapters,heatmapData:this.props.heatmapData,poster:this.props.poster,forceMobile:this.props.forceMobile})})}shouldComponentUpdate(n,i){return!(0,as.default)(this.props,n)||!(0,as.default)(this.state,i)}componentDidUpdate(){}render(){let{wrapper:n}=this.props,i=this.getUrlProp(),s=this.getSourceProps(),{className:l,...a}=this.getAttributes(),u=typeof n=="string"?this.references.wrapper:void 0;return qr.default.createElement(n,{ref:u,"data-testid":"media-player-skin",className:`playerstack${l?` ${l}`:""}`,...a},qr.default.createElement(ym,{fallback:this.props.fallback},this.renderActivePlayer(i,s.sources)))}},I(t,"displayName","MediaPlayer"),I(t,"propTypes",Kn),I(t,"defaultProps",Bo),I(t,"canPlay",(n,i)=>!!e.canPlay(n,i)),I(t,"canEnablePIP",n=>!!(e.canEnablePIP&&e.canEnablePIP(n))),t};var gm=ud(qs);return Sd(bm);})();
PlayerStack=PlayerStack.default
//# sourceMappingURL=PlayerStack.js.map
