var PlayerStack=(()=>{var e0=Object.create;var nn=Object.defineProperty;var t0=Object.getOwnPropertyDescriptor;var o0=Object.getOwnPropertyNames;var r0=Object.getPrototypeOf,n0=Object.prototype.hasOwnProperty;var i0=(e,t,o)=>t in e?nn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var $e=(e,t)=>()=>(e&&(t=e(e=0)),t);var vo=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),hl=(e,t)=>{for(var o in t)nn(e,o,{get:t[o],enumerable:!0})},yl=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of o0(t))!n0.call(e,n)&&n!==o&&nn(e,n,{get:()=>t[n],enumerable:!(r=t0(t,n))||r.enumerable});return e};var h=(e,t,o)=>(o=e!=null?e0(r0(e)):{},yl(t||!e||!e.__esModule?nn(o,"default",{value:e,enumerable:!0}):o,e)),s0=e=>yl(nn({},"__esModule",{value:!0}),e);var q=(e,t,o)=>(i0(e,typeof t!="symbol"?t+"":t,o),o);var Sl=vo((Ch,bl)=>{bl.exports=function(t,o,r){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof o=="function"&&(r=o,o={}),o=o||{},r=r||function(){},i.type=o.type||"text/javascript",i.charset=o.charset||"utf8",i.async="async"in o?!!o.async:!0,i.src=t,o.attrs&&a0(i,o.attrs),o.text&&(i.text=""+o.text);var s="onload"in i?gl:l0;s(i,r),i.onload||gl(i,r),n.appendChild(i)};function a0(e,t){for(var o in t)e.setAttribute(o,t[o])}function gl(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function l0(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}});function fr(e){var t,o;return typeof window=="undefined"?null:window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:(o=(t=window.module)==null?void 0:t.exports)!=null&&o[e]?window.module.exports[e]:null}function _o(e,t,o=null,r=()=>!0,n=vl.default){let i=fr(t);return i&&r&&r(i)?Promise.resolve(i):new Promise((s,l)=>{if(Fo[e]){Fo[e].push({resolve:s,reject:l});return}Fo[e]=[{resolve:s,reject:l}];let a=c=>{Fo[e].forEach(p=>p.resolve(c)),Fo[e]=null};if(o){let c=window[o];window[o]=function(){c&&c(),a(fr(t))}}n(e,c=>{c?(Fo[e].forEach(p=>p.reject(c)),Fo[e]=null):o||a(fr(t))})})}var vl,Fo,xl=$e(()=>{"use strict";vl=h(Sl());Fo={}});function Et(e){return typeof window!="undefined"&&typeof window.MediaStream!="undefined"&&e instanceof window.MediaStream}function sn(e){return/^blob:/.test(e)}function an(e){return(e==null?void 0:e.mozHasAudio)||(e==null?void 0:e.webkitAudioDecodedByteCount)>0||(e==null?void 0:e.audioTracks)!==void 0&&e.audioTracks.length>0}function to(e){let t=e||document.createElement("video"),o=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&o}var Ps=$e(()=>{"use strict"});function Ls(e){return!e||typeof e!="string"?!1:Ts.test(e)}function mr(e,t){if(t&&t.length>0)return!0;if(!e)return!1;if(Et(e)||sn(e))return!0;let o=e;return Cl.test(o)||Ts.test(o)||Kn.test(o)||Zn.test(o)||Qn.test(o)}var Cl,Ts,Kn,Zn,Qn,wl=$e(()=>{"use strict";Ps();Cl=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,Ts=/\.(mp3|wav|flac|aac|ogg|m4a|opus|wma)(#t=[,\d+]+)?($|\?)/i,Kn=/\.(m3u8)($|\?)/i,Zn=/\.(mpd)($|\?)/i,Qn=/\.(flv)($|\?)/i});var Jn,kl,ei,Es,Ms,Is,Os,As,Rs,Bs,Pl=$e(()=>{"use strict";Jn=typeof navigator!="undefined",kl=Jn&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ei=Jn&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||kl)&&!window.MSStream,Es=Jn&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,Ms="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",Is="Hls",Os="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",As="dashjs",Rs="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",Bs="flvjs"});function hr(e){if(typeof document=="undefined")return null;let t=`${Tl}${e}=`,o=document.cookie.split(";");for(let r=0;r<o.length;r++){let n=o[r];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(t)===0)try{return decodeURIComponent(n.substring(t.length,n.length))}catch{return n.substring(t.length,n.length)}}return null}function yr(e,t,o){if(typeof document=="undefined")return;let r="";if(o){let n=new Date;n.setTime(n.getTime()+o*24*60*60*1e3),r=`; expires=${n.toUTCString()}`}document.cookie=`${Tl}${e}=${encodeURIComponent(t||"")}${r}; path=/`}var Tl,Ll=$e(()=>{"use strict";Tl="rmp_"});function u0(){if(Ds)return;if(typeof window=="undefined"||typeof navigator=="undefined"){Ds=!0;return}let e=window.navigator.userAgent.toLowerCase(),t="ontouchstart"in window||navigator.maxTouchPoints>0,o=/iphone|ipod|android.*mobile|windows phone|blackberry/.test(e),r=/ipad|android(?!.*mobile)|silk|kindle|tablet/.test(e),n=!t&&/mac|windows|linux|cros/.test(e);o||r?(El=!1,qs=!0):(El=n,qs=!n),Ds=!0}var El,qs,Ds,ti,Ml=$e(()=>{"use strict";El=!1,qs=!1,Ds=!1;u0();ti=qs});function De(e){let t=Math.floor(e),o=Math.floor(t/3600),r=Math.floor(t%3600/60),n=t%60;return o>0?`${String(o).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function ln(e,t){return e.reduce((o,r)=>{let n=String(r[t]);return o[n]=r,o},{})}function oi(e,t){let o={},r=Object.keys(e);for(let n of r)t.indexOf(n)===-1&&(o[n]=e[n]);return o}var Il=$e(()=>{"use strict"});function Ol(e){let t=e.trim().split(":");if(t.length===3){let[o,r,n]=t;return parseFloat(o)*3600+parseFloat(r)*60+parseFloat(n)}if(t.length===2){let[o,r]=t;return parseFloat(o)*60+parseFloat(r)}return 0}function ri(e){let t=[],o=e.split(`
`),r=0;for(;r<o.length;){let n=o[r].trim();if(n.includes(" --> ")){let[i,s]=n.split(" --> "),l=Ol(i),a=Ol(s.split(" ")[0]),c=[];for(r++;r<o.length&&o[r].trim()!=="";)c.push(o[r].trim()),r++;c.length>0&&t.push({startTime:l,endTime:a,text:c.join(`
`)})}else r++}return t}function ni(e,t){return e.filter(o=>t>=o.startTime&&t<=o.endTime)}function gr(e,t){let o=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16),i=parseInt(t)/100;return`rgba(${o}, ${r}, ${n}, ${i})`}function ii(e,t){switch(e){case"dropshadow":return`2px 2px 3px ${t}, 2px 2px 4px ${t}`;case"raised":return`1px 1px 0 ${t}, 2px 2px 0 ${t}`;case"depressed":return`-1px -1px 0 ${t}, -2px -2px 0 ${t}`;case"uniform":return`0 0 3px ${t}, 0 0 3px ${t}, 0 0 3px ${t}, 0 0 3px ${t}`;default:return"none"}}var xo,un,Al=$e(()=>{"use strict";xo={fontFamily:"sans-serif",fontColor:"#ffffff",fontSize:"100%",fontOpacity:"100%",backgroundColor:"#000000",backgroundOpacity:"75%",windowColor:"#000000",windowOpacity:"0%",edgeStyle:"none"},un={fontFamily:[{label:"Proportional Sans-Serif",value:"sans-serif"},{label:"Monospace Sans-Serif",value:"monospace"},{label:"Proportional Serif",value:"serif"},{label:"Monospace Serif",value:'"Courier New", monospace'},{label:"Casual",value:'"Comic Sans MS", cursive'},{label:"Cursive",value:'"Brush Script MT", cursive'},{label:"Small Capitals",value:"small-caps"}],fontColor:[{label:"White",value:"#ffffff"},{label:"Yellow",value:"#ffff00"},{label:"Green",value:"#00ff00"},{label:"Cyan",value:"#00ffff"},{label:"Blue",value:"#0000ff"},{label:"Magenta",value:"#ff00ff"},{label:"Red",value:"#ff0000"},{label:"Black",value:"#000000"}],fontSize:[{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"},{label:"150%",value:"150%"},{label:"200%",value:"200%"},{label:"300%",value:"300%"},{label:"400%",value:"400%"}],fontOpacity:[{label:"25%",value:"25%"},{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"}],backgroundColor:[{label:"Black",value:"#000000"},{label:"White",value:"#ffffff"},{label:"Yellow",value:"#ffff00"},{label:"Green",value:"#00ff00"},{label:"Cyan",value:"#00ffff"},{label:"Blue",value:"#0000ff"},{label:"Magenta",value:"#ff00ff"},{label:"Red",value:"#ff0000"}],backgroundOpacity:[{label:"0%",value:"0%"},{label:"25%",value:"25%"},{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"}],windowColor:[{label:"Black",value:"#000000"},{label:"White",value:"#ffffff"},{label:"Red",value:"#ff0000"},{label:"Green",value:"#00ff00"},{label:"Blue",value:"#0000ff"},{label:"Yellow",value:"#ffff00"},{label:"Magenta",value:"#ff00ff"},{label:"Cyan",value:"#00ffff"}],windowOpacity:[{label:"0%",value:"0%"},{label:"25%",value:"25%"},{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"}],edgeStyle:[{label:"None",value:"none"},{label:"Drop Shadow",value:"dropshadow"},{label:"Raised",value:"raised"},{label:"Depressed",value:"depressed"},{label:"Uniform",value:"uniform"}]}});var Rl=$e(()=>{"use strict";Ps();Ll();Ml();Il();xl();Al()});var Co,Bl=$e(()=>{"use strict";Co={exitFullScreenMode:"Exit full screen mode (f)",fullScreen:"Full screen",exitFullscreen:"Exit full screen",fullscreen:"Full screen",play:"Play",replay:"Replay",pause:"Pause",previous:"Previous",next:"Next",normal:"Normal",settings:"Settings",speed:"Speed",quality:"Quality",auto:"Auto",hd:"HD",live:"Live",seconds:"seconds",clickToUnmute:"Click to unmute",playbackStuckClickResumePlayback:"Playback is stuck, click to resume playback.",mute:"Mute (m)",activateSound:"Activate sound",thisVideoHasNoSound:"This video has no sound",timeBar:"Time bar",loop:"Loop",pictureInPicture:"Picture in picture",captions:"Captions",off:"Off",captionOptions:"Options",fontFamily:"Font family",fontColor:"Font color",fontSize:"Font size",fontOpacity:"Font opacity",backgroundColor:"Background color",backgroundOpacity:"Background opacity",windowColor:"Window color",windowOpacity:"Window opacity",edgeStyle:"Character edge style",reset:"Reset",skipBack:"Back 10s",skipForward:"Forward 10s",unmute:"Unmute",close:"Close",back:"Back",skipAd:"Skip",ad:"Ad",sponsored:"Sponsored"}});var wo,Dl=$e(()=>{"use strict";wo={exitFullScreenMode:"Salir de pantalla completa (f)",fullScreen:"Pantalla completa",exitFullscreen:"Salir de pantalla completa",fullscreen:"Pantalla completa",play:"Reproducir",replay:"Repetir",pause:"Pausar",previous:"Anterior",next:"Siguiente",normal:"Normal",settings:"Ajustes",speed:"Velocidad",quality:"Calidad",auto:"Auto",hd:"HD",live:"En vivo",seconds:"segundos",clickToUnmute:"Haz clic para activar el sonido",playbackStuckClickResumePlayback:"La reproducci\xF3n se ha detenido, haz clic para continuar.",mute:"Silenciar (m)",activateSound:"Activar sonido",thisVideoHasNoSound:"Este video no tiene sonido",timeBar:"Barra de tiempo",loop:"Repetir",pictureInPicture:"Imagen en imagen",captions:"Subt\xEDtulos",off:"Desactivado",captionOptions:"Opciones",fontFamily:"Familia de fuente",fontColor:"Color de fuente",fontSize:"Tama\xF1o de fuente",fontOpacity:"Opacidad de fuente",backgroundColor:"Color de fondo",backgroundOpacity:"Opacidad de fondo",windowColor:"Color de ventana",windowOpacity:"Opacidad de ventana",edgeStyle:"Estilo de borde",reset:"Restablecer",skipBack:"Retroceder 10s",skipForward:"Avanzar 10s",unmute:"Activar sonido",close:"Cerrar",back:"Atr\xE1s",skipAd:"Omitir",ad:"Anuncio",sponsored:"Patrocinado"}});var ql=$e(()=>{"use strict";Bl();Dl()});var Ne=$e(()=>{"use strict";wl();Pl();Rl();ql()});var P=vo((Jh,Nl)=>{Nl.exports=globalThis.React});var Fl,_l,Ns=$e(()=>{Fl=h(P());Ne();_l=e=>(0,Fl.lazy)(async()=>{let t=await e();return typeof t.default=="function"?t:t.default})});function Vl(e,...t){let o=[].concat(...t);return oi(e,o)}function $l(e){return t=>{e.forEach(o=>{typeof o=="function"?o(t):o&&(o.current=t)})}}var Ht=$e(()=>{Ne();Ne()});var zl={};hl(zl,{default:()=>br});var si,br,Hl=$e(()=>{si=h(P());Ne();Ht();Ns();br=class extends si.default.Component{constructor(){super(...arguments);q(this,"onReady",o=>this.props.onReady(o));q(this,"onPlay",o=>this.props.onPlay({...o,hasAudio:an(this.player)}));q(this,"onBuffer",o=>this.props.onBuffer(o));q(this,"onBufferEnd",o=>this.props.onBufferEnd(o));q(this,"onPause",o=>this.props.onPause(o));q(this,"onEnded",o=>this.props.onEnded(o));q(this,"onError",(o,r,n,i)=>this.props.onError(o,r,n,i));q(this,"onPlayBackRateChange",o=>{this.props.onPlayBackRateChange(o.target.playbackRate)});q(this,"onEnablePIP",o=>this.props.onEnablePIP(o));q(this,"onDisablePIP",o=>{let{onDisablePIP:r,playing:n}=this.props;r&&r(o),n&&this.play()});q(this,"onPresentationModeChange",o=>{if(this.player&&to(this.player)){let{webkitPresentationMode:r}=this.player;r==="picture-in-picture"?this.onEnablePIP(o):r==="inline"&&this.onDisablePIP(o)}});q(this,"onSeek",o=>{var r;this.props.onSeek((r=o.target)==null?void 0:r.currentTime)});q(this,"mute",()=>{this.player.muted=!0});q(this,"unmute",()=>{this.player.muted=!1});q(this,"renderTrack",(o,r)=>si.default.createElement("track",{key:r,...o}));q(this,"ref",o=>{this.player&&(this.prevPlayer=this.player),this.player=o})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);let o=this.getSource(this.props.url);o&&(this.player.src=o),(ei||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(o){this.prevPlayer&&this.prevPlayer!==this.player&&(this.removeListeners(this.prevPlayer),this.listenersAttached=!1),this.listenersAttached||this.addListeners(this.player),this.props.url!==o.url&&Et(this.props.url)===!1&&(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.hls&&(this.hls.destroy(),this.hls=null),this.dash&&(this.dash.reset(),this.dash=null),this.flv&&(this.flv.unload(),this.flv.detachMediaElement(),this.flv.destroy(),this.flv=null),this.removeListeners(this.player),this.listenersAttached=!1}addListeners(o){let{url:r,playsinline:n}=this.props;o&&(this.removeListeners(o),this.listenersAttached=!0,o.addEventListener("play",this.onPlay),o.addEventListener("waiting",this.onBuffer),o.addEventListener("playing",this.onBufferEnd),o.addEventListener("pause",this.onPause),o.addEventListener("seeked",this.onSeek),o.addEventListener("ended",this.onEnded),o.addEventListener("error",this.onError),o.addEventListener("ratechange",this.onPlayBackRateChange),o.addEventListener("enterpictureinpicture",this.onEnablePIP),o.addEventListener("leavepictureinpicture",this.onDisablePIP),o.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(r)===!1&&o.addEventListener("canplay",this.onReady),n&&(o.setAttribute("playsinline",""),o.setAttribute("webkit-playsinline",""),o.setAttribute("x5-playsinline","")))}removeListeners(o){o&&(o.removeEventListener("canplay",this.onReady),o.removeEventListener("play",this.onPlay),o.removeEventListener("waiting",this.onBuffer),o.removeEventListener("playing",this.onBufferEnd),o.removeEventListener("pause",this.onPause),o.removeEventListener("seeked",this.onSeek),o.removeEventListener("ended",this.onEnded),o.removeEventListener("error",this.onError),o.removeEventListener("ratechange",this.onPlayBackRateChange),o.removeEventListener("enterpictureinpicture",this.onEnablePIP),o.removeEventListener("leavepictureinpicture",this.onDisablePIP),o.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange))}shouldUseHLS(o){return Es&&this.props.config.forceSafariHLS||this.props.config.forceHLS?!0:ei||this.props.config.forceDisableHls?!1:Kn.test(o)}shouldUseDASH(o){return Zn.test(o)||this.props.config.forceDASH}shouldUseFLV(o){return Qn.test(o)||this.props.config.forceFLV}load(o,r){let{hlsVersion:n,hlsOptions:i,dashVersion:s,flvVersion:l}=this.props.config;if(r===!1)return;this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.flv&&this.flv.unload(),this.loadSequence=(this.loadSequence||0)+1;let a=this.loadSequence;if(this.shouldUseHLS(o))_o(Ms.replace("VERSION",n),Is).then(c=>{a===this.loadSequence&&(this.hls=new c(i),this.hls.on(c.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(c.Events.ERROR,(p,u)=>{this.props.onError(p,u,this.hls,c)}),this.hls.loadSource(o),this.hls.attachMedia(this.player),this.props.onLoaded())}).catch(c=>this.props.onError(c));else if(this.shouldUseDASH(o))_o(Os.replace("VERSION",s),As).then(c=>{a===this.loadSequence&&(this.dash=c.MediaPlayer().create(),this.dash.initialize(this.player,o,this.props.playing),this.dash.on("error",p=>{this.props.onError(p,null,this.dash,c)}),parseInt(s)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:c.LogLevel.LOG_LEVEL_NONE}}),this.props.onLoaded())}).catch(c=>this.props.onError(c));else if(this.shouldUseFLV(o))_o(Rs.replace("VERSION",l),Bs).then(c=>{a===this.loadSequence&&(this.flv=c.createPlayer({type:"flv",url:o}),this.flv.attachMediaElement(this.player),this.flv.on(c.Events.ERROR,(p,u)=>{this.props.onError(p,u,this.flv,c)}),this.flv.load(),this.props.onLoaded())}).catch(c=>this.props.onError(c));else if(Et(o))try{this.player.srcObject=o}catch{this.player.src=window.URL.createObjectURL(o)}}getPlayer(){return this.player}play(){let o=this.player.play();o&&o.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.hls&&(this.hls.destroy(),this.hls=null),this.dash&&(this.dash.reset(),this.dash=null),this.flv&&(this.flv.unload(),this.flv.detachMediaElement(),this.flv.destroy(),this.flv=null)}seekTo(o,r=!0){this.player.currentTime=o,r===!1&&this.pause()}setVolume(o){this.player.volume=o}enablePIP(){if(this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player){let o=this.player.requestPictureInPicture();o&&o.catch&&o.catch(r=>this.props.onError(r))}else to(this.player)&&this.player.webkitPresentationMode!=="picture-in-picture"&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():to(this.player)&&this.player.webkitPresentationMode!=="inline"&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(o){try{this.player.playbackRate=o}catch(r){this.props.onError(r)}}getDuration(){if(!this.player)return null;let{duration:o,seekable:r}=this.player;return o===1/0&&r.length>0?r.end(r.length-1):o}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;let{buffered:o}=this.player;if(o.length===0)return 0;let r=o.end(o.length-1),n=this.getDuration();return n!==null&&r>n?n:r}getSource(o){if(!(Et(o)||this.shouldUseHLS(o)||this.shouldUseDASH(o)||this.shouldUseFLV(o)))return o}render(){var m;let{url:o,playing:r,loop:n,muted:i,config:s,width:l,height:a,viewType:c}=this.props,p=c==="audio",u=p?{display:"none"}:{width:l==="auto"?l:"100%",height:a==="auto"?a:"100%"};return si.default.createElement(p?"audio":"video",{"data-testid":p?"audio-element":"video-element",ref:this.ref,src:this.getSource(o),style:u,preload:"auto",autoPlay:r||void 0,controls:!1,muted:i,loop:n,...s.attributes},(m=s.tracks)==null?void 0:m.map(this.renderTrack))}};q(br,"displayName","PlayerCore"),q(br,"canPlay",mr)});var Yl=vo((dy,Xl)=>{"use strict";var d0=function(t){return f0(t)&&!m0(t)};function f0(e){return!!e&&typeof e=="object"}function m0(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||g0(e)}var h0=typeof Symbol=="function"&&Symbol.for,y0=h0?Symbol.for("react.element"):60103;function g0(e){return e.$$typeof===y0}function b0(e){return Array.isArray(e)?[]:{}}function cn(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Sr(b0(e),e,t):e}function S0(e,t,o){return e.concat(t).map(function(r){return cn(r,o)})}function v0(e,t){if(!t.customMerge)return Sr;var o=t.customMerge(e);return typeof o=="function"?o:Sr}function x0(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function Wl(e){return Object.keys(e).concat(x0(e))}function Ul(e,t){try{return t in e}catch{return!1}}function C0(e,t){return Ul(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function w0(e,t,o){var r={};return o.isMergeableObject(e)&&Wl(e).forEach(function(n){r[n]=cn(e[n],o)}),Wl(t).forEach(function(n){C0(e,n)||(Ul(e,n)&&o.isMergeableObject(t[n])?r[n]=v0(n,o)(e[n],t[n],o):r[n]=cn(t[n],o))}),r}function Sr(e,t,o){o=o||{},o.arrayMerge=o.arrayMerge||S0,o.isMergeableObject=o.isMergeableObject||d0,o.cloneUnlessOtherwiseSpecified=cn;var r=Array.isArray(t),n=Array.isArray(e),i=r===n;return i?r?o.arrayMerge(e,t,o):w0(e,t,o):cn(t,o)}Sr.all=function(t,o){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,n){return Sr(r,n,o)},{})};var k0=Sr;Xl.exports=k0});var dn=vo((my,Kl)=>{var E0=typeof Element!="undefined",M0=typeof Map=="function",I0=typeof Set=="function",O0=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ai(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,n;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!ai(e[r],t[r]))return!1;return!0}var i;if(M0&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!ai(r.value[1],t.get(r.value[0])))return!1;return!0}if(I0&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(O0&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),o=n.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[r]))return!1;if(E0&&e instanceof Element)return!1;for(r=o;r--!==0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&e.$$typeof)&&!ai(e[n[r]],t[n[r]]))return!1;return!0}return e!==e&&t!==t}Kl.exports=function(t,o){try{return ai(t,o)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}});var Ql=vo((hy,Zl)=>{"use strict";var A0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";Zl.exports=A0});var ou=vo((yy,tu)=>{"use strict";var R0=Ql();function Jl(){}function eu(){}eu.resetWarningCache=Jl;tu.exports=function(){function e(r,n,i,s,l,a){if(a!==R0){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:eu,resetWarningCache:Jl};return o.PropTypes=o,o}});var Q=vo((Sy,ru)=>{ru.exports=ou()();var gy,by});var fu=vo((Ay,du)=>{du.exports=function(t,o,r,n){var i=r?r.call(n,t,o):void 0;if(i!==void 0)return!!i;if(t===o)return!0;if(typeof t!="object"||!t||typeof o!="object"||!o)return!1;var s=Object.keys(t),l=Object.keys(o);if(s.length!==l.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(o),c=0;c<s.length;c++){var p=s[c];if(!a(p))return!1;var u=t[p],f=o[p];if(i=r?r.call(n,u,f,p):void 0,i===!1||i===void 0&&u!==f)return!1}return!0}});var vh={};hl(vh,{default:()=>Sh});Ne();Ns();var jl={key:"core",name:"PlayerCore",canPlay:mr,canEnablePIP:e=>mr(e)&&(document.pictureInPictureEnabled||to()),lazyPlayer:_l(()=>Promise.resolve().then(()=>(Hl(),zl)))};var sr=h(P()),Xm=h(Yl());var Gl=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function P0(e,t){return!!(e===t||Gl(e)&&Gl(t))}function T0(e,t){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o++)if(!P0(e[o],t[o]))return!1;return!0}function L0(e,t){t===void 0&&(t=T0);var o,r=[],n,i=!1;function s(){for(var l=[],a=0;a<arguments.length;a++)l[a]=arguments[a];return i&&o===this&&t(l,r)||(n=e.apply(this,l),i=!0,o=this,r=l),n}return s}var pn=L0;var dl=h(dn());var oe=h(Q());Ne();var B0={en:Co,es:wo},{string:Ke,bool:Ge,number:vr,array:D0,oneOfType:Fs,shape:nu,object:iu,func:ve}=oe.default,su=Object.keys(B0),q0={url:Ke,playing:Ge,loop:Ge,volume:vr,muted:Ge,playbackRate:vr,width:Fs([Ke,vr]),height:Fs([Ke,vr]),progressInterval:vr,playsinline:Ge,language:oe.default.oneOf(su),stopOnUnmount:Ge,fallback:oe.node,waiting:Ge,prevented:Ge,wrapper:Fs([Ke,ve,nu({render:ve.isRequired})]),skinMode:oe.default.oneOf(["auto","mobile","desktop"]),config:nu({attributes:iu,tracks:D0,forceHLS:Ge,forceSafariHLS:Ge,forceDisableHls:Ge,forceDASH:Ge,forceFLV:Ge,hlsOptions:iu,hlsVersion:Ke,dashVersion:Ke,flvVersion:Ke}),onReady:ve,onStart:ve,onPlay:ve,onPause:ve,onBuffer:ve,onBufferEnd:ve,onEnded:ve,onError:ve,onDuration:ve,onSeek:ve,onPlayBackRateChange:ve,onProgress:ve,onPrevious:ve,onNext:ve,showNavButtons:Ge},N0=oe.default.shape({title:Ke.isRequired,url:Ke.isRequired,buttonText:Ke.isRequired,icon:Ke,skipAfter:vr,onSkip:ve,onAdClick:ve,onAdComplete:ve}),F0={sources:oe.default.arrayOf(oe.default.shape({src:oe.default.string.isRequired,resolution:oe.default.number.isRequired}).isRequired),fullHDQualityBreak:oe.default.number,spriteVTTFile:oe.default.string,chapters:oe.default.arrayOf(oe.default.shape({title:oe.default.string.isRequired,startTime:oe.default.number.isRequired})),captions:oe.default.arrayOf(oe.default.shape({src:oe.default.string.isRequired,label:oe.default.string.isRequired,language:oe.default.string.isRequired,kind:oe.default.string})),heatmapData:oe.default.arrayOf(oe.default.shape({startTime:oe.default.number.isRequired,endTime:oe.default.number.isRequired,value:oe.default.number.isRequired})),ads:N0,live:Ge,poster:Ke,pip:Ge,onPlayBackQualityChange:ve,onEnablePIP:ve,onDisablePIP:ve},_0={title:Ke,artist:Ke,poster:Ke,captions:oe.default.arrayOf(oe.default.shape({src:oe.default.string.isRequired,label:oe.default.string.isRequired,language:oe.default.string.isRequired,kind:oe.default.string}))},_s={viewType:oe.default.oneOf(["video","audio"]),...q0,...F0,..._0},Ye=()=>{},li={viewType:"video",url:"",sources:[],chapters:[],captions:[],heatmapData:[],ads:null,playing:!1,loop:!1,live:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,fallback:null,waiting:!1,prevented:!1,wrapper:"div",skinMode:"auto",language:su[0],poster:"",title:"",artist:"",config:{attributes:{},tracks:[],forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:Ye,onStart:Ye,onPlay:Ye,onPause:Ye,onBuffer:Ye,onBufferEnd:Ye,onEnded:Ye,onError:Ye,onDuration:Ye,onSeek:Ye,onPlayBackRateChange:Ye,onPlayBackQualityChange:Ye,onProgress:Ye,onEnablePIP:Ye,onDisablePIP:Ye};var Pe=h(P()),_1=h(dn());var Vs=h(P()),pu=h(dn());var ui=h(Q()),{string:xr,bool:xt,number:fn,array:V0,oneOfType:au,shape:$0,object:lu,func:Ze}=ui.default,uu={url:xr,fullHDQualityBreak:ui.default.number,spriteVTTFile:ui.default.string,playing:xt,loop:xt,volume:fn,muted:xt,playbackRate:fn,width:au([xr,fn]),height:au([xr,fn]),progressInterval:fn,playsinline:xt,pip:xt,stopOnUnmount:xt,config:$0({attributes:lu,tracks:V0,forceVideo:xt,forceHLS:xt,forceSafariHLS:xt,forceDisableHls:xt,forceDASH:xt,forceFLV:xt,hlsOptions:lu,hlsVersion:xr,dashVersion:xr,flvVersion:xr}),onReady:Ze,onStart:Ze,onPlay:Ze,onPause:Ze,onBuffer:Ze,onBufferEnd:Ze,onEnded:Ze,onError:Ze,onDuration:Ze,onSeek:Ze,onPlayBackRateChange:Ze,onPlayBackQualityChange:Ze,onProgress:Ze,onEnablePIP:Ze,onDisablePIP:Ze},Qe=()=>{},cu={playing:!1,loop:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:Qe,onStart:Qe,onPlay:Qe,onPause:Qe,onBuffer:Qe,onBufferEnd:Qe,onEnded:Qe,onError:Qe,onDuration:Qe,onSeek:Qe,onPlayBackRateChange:Qe,onPlayBackQualityChange:Qe,onProgress:Qe,onEnablePIP:Qe,onDisablePIP:Qe};Ht();var z0=5e3,Ct=class extends Vs.default.Component{constructor(){super(...arguments);q(this,"progressTimeout",0);q(this,"durationCheckTimeout",0);q(this,"seekOnPlayTimeout",0);q(this,"volumeTimeout",0);q(this,"prevPlayed",0);q(this,"prevLoaded",0);q(this,"player",null);q(this,"loadOnReady",null);q(this,"seekOnPlay",null);q(this,"mounted",!1);q(this,"isReady",!1);q(this,"isPlaying",!1);q(this,"isLoading",!0);q(this,"isSwitchingQuality",!1);q(this,"startOnPlay",!0);q(this,"onDurationCalled",!1);q(this,"handlePlayerMount",o=>{this.player=o,this.player.load(this.props.url),this.progress()});q(this,"getInternalPlayer",o=>this.player?this.player[o]:null);q(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady&&this.mounted){let o=this.getCurrentTime()||0,r=this.getSecondsLoaded(),n=this.getDuration();if(n){let i={playedSeconds:o,played:o/n,loadedSeconds:null};r!==null&&(i.loadedSeconds=r,i.loaded=r/n),(i.playedSeconds!==this.prevPlayed||i.loadedSeconds!==this.prevLoaded)&&this.props.onProgress({loaded:i.loaded,loadedSeconds:i.loadedSeconds,played:i.played,playedSeconds:i.playedSeconds}),this.prevPlayed=i.playedSeconds,i.loadedSeconds!==void 0&&(this.prevLoaded=i.loadedSeconds)}}this.isPlaying&&this.mounted&&(this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval))});q(this,"handleReady",()=>{if(this.mounted===!1)return;this.isReady=!0,this.isLoading=!1;let{onReady:o,playing:r,volume:n,muted:i}=this.props;o&&o(),!i&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):(r||this.isSwitchingQuality)&&this.player.play(),this.handleDurationCheck()});q(this,"handlePlay",o=>{this.isPlaying=!0,this.isLoading=!1,this.isSwitchingQuality=!1;let{onStart:r,onPlay:n,playbackRate:i}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&i!==1&&this.player.setPlaybackRate(i),r&&r(),this.startOnPlay=!1),n&&n(o),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck(),clearTimeout(this.progressTimeout),this.progress()});q(this,"handlePause",o=>{this.isPlaying=!1,!this.isLoading&&!this.isSwitchingQuality&&this.props.onPause&&this.props.onPause(o)});q(this,"handleEnded",()=>{let{activePlayer:o,loop:r,onEnded:n}=this.props;if(r===!0){o.defaultProps!==void 0&&o.defaultProps.config!==void 0&&o.defaultProps.config.loopOnEnded&&this.seekTo(0);return}this.isPlaying=!1,n&&n()});q(this,"handleError",(o,r,n,i)=>{this.isLoading=!1,this.props.onError&&this.props.onError(o,r,n,i)});q(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);let o=this.getDuration();o?!this.onDurationCalled&&this.props.onDuration&&(this.props.onDuration(o),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)});q(this,"handleLoaded",()=>{this.isReady&&!this.startOnPlay&&(this.isLoading=!1)})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),clearTimeout(this.seekOnPlayTimeout),clearTimeout(this.volumeTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(o){if(!this.player)return;let{url:r,playing:n,volume:i,muted:s,playbackRate:l,playbackQuality:a,pip:c,activePlayer:p,disableDeferredLoading:u}=this.props;if((0,pu.default)(o.url,r)===!1){if(clearTimeout(this.progressTimeout),this.isLoading&&!(p!=null&&p.forceLoad)&&!u&&!Et(r)){console.warn(`PlayerStack: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,o.playbackQuality!==a&&(this.seekOnPlay=this.prevPlayed,this.isSwitchingQuality=!0),this.player.load(r,this.isReady);return}if(o.playing===!1&&n&&this.isPlaying===!1&&this.player.play(),o.playing&&n===!1&&this.isPlaying&&this.player.pause(),o.pip===!1&&c&&this.player.enablePIP&&this.player.enablePIP(),o.pip&&c===!1&&this.player.disablePIP&&this.player.disablePIP(),o.volume!==i&&i!==null&&this.player.setVolume(i),o.muted!==s&&(s?this.player.mute():(this.player.unmute(),i!==null&&(clearTimeout(this.volumeTimeout),this.volumeTimeout=setTimeout(()=>{this.mounted&&this.player&&this.player.setVolume(i)})))),o.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l),o.activeCaption!==this.props.activeCaption){let f=this.player.getPlayer();if(f&&f.textTracks)for(let m=0;m<f.textTracks.length;m++){let y=f.textTracks[m];this.props.activeCaption===null?y.mode="disabled":y.language===this.props.activeCaption?y.mode="hidden":y.mode="disabled"}}}getDuration(){return this.isReady===!1?null:this.player.getDuration()}getCurrentTime(){return this.isReady===!1?null:this.player.getCurrentTime()}getSecondsLoaded(){return this.isReady===!1?null:this.player.getSecondsLoaded()}getPlayer(){return this.player.getPlayer()}seekTo(o,r,n){if(this.isReady===!1){o!==0&&(this.seekOnPlay=o,this.seekOnPlayTimeout=setTimeout(()=>{this.seekOnPlay=null},z0));return}if(r?r==="fraction":o>0&&o<1){let s=this.player.getDuration();if(!s){console.warn("PlayerStack: could not seek using fraction \u2013\xA0duration not yet available");return}this.player.seekTo(s*o,n);return}this.player.seekTo(o,n)}render(){let o=this.props.activePlayer;return o?Vs.default.createElement(o,{loop:this.props.loop,muted:this.props.muted,playsinline:this.props.playsinline,url:this.props.url,width:this.props.width,height:this.props.height,playing:this.props.playing,viewType:this.props.viewType,config:this.props.config,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onEnablePIP:this.props.onEnablePIP,onPlayBackRateChange:this.props.onPlayBackRateChange,onSeek:this.props.onSeek}):null}};q(Ct,"displayName","PlayerProxy"),q(Ct,"propTypes",uu),q(Ct,"defaultProps",cu);var Yn=h(P()),ee=h(Q());var Xn=h(P()),F=h(Q());var K=h(P());var st=h(P()),Uo=h(Q());var ze=function(){return ze=Object.assign||function(t){for(var o,r=1,n=arguments.length;r<n;r++){o=arguments[r];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},ze.apply(this,arguments)};function Cr(e,t,o){if(o||arguments.length===2)for(var r=0,n=t.length,i;r<n;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Ce=h(P()),Wu=h(fu());var pe="-ms-",Vo="-moz-",ne="-webkit-",ci="comm",ko="rule",wr="decl";var mu="@import";var pi="@keyframes";var hu="@layer";var $s=Math.abs,mn=String.fromCharCode,hn=Object.assign;function yu(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function di(e){return e.trim()}function Mt(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,o){return e.replace(t,o)}function kr(e,t,o){return e.indexOf(t,o)}function xe(e,t){return e.charCodeAt(t)|0}function jt(e,t,o){return e.slice(t,o)}function Je(e){return e.length}function fi(e){return e.length}function $o(e,t){return t.push(e),e}function gu(e,t){return e.map(t).join("")}function zs(e,t){return e.filter(function(o){return!Mt(o,t)})}var mi=1,Pr=1,bu=0,wt=0,Me=0,Tr="";function yn(e,t,o,r,n,i,s,l){return{value:e,root:t,parent:o,type:r,props:n,children:i,line:mi,column:Pr,length:s,return:"",siblings:l}}function oo(e,t){return hn(yn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function zo(e){for(;e.root;)e=oo(e.root,{children:[e]});$o(e,e.siblings)}function Su(){return Me}function vu(){return Me=wt>0?xe(Tr,--wt):0,Pr--,Me===10&&(Pr=1,mi--),Me}function kt(){return Me=wt<bu?xe(Tr,wt++):0,Pr++,Me===10&&(Pr=1,mi++),Me}function Po(){return xe(Tr,wt)}function gn(){return wt}function hi(e,t){return jt(Tr,e,t)}function Hs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xu(e){return mi=Pr=1,bu=Je(Tr=e),wt=0,[]}function Cu(e){return Tr="",e}function yi(e){return di(hi(wt-1,js(e===91?e+2:e===40?e+1:e)))}function wu(e){for(;(Me=Po())&&Me<33;)kt();return Hs(e)>2||Hs(Me)>3?"":" "}function ku(e,t){for(;--t&&kt()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return hi(e,gn()+(t<6&&Po()==32&&kt()==32))}function js(e){for(;kt();)switch(Me){case e:return wt;case 34:case 39:e!==34&&e!==39&&js(Me);break;case 40:e===41&&js(e);break;case 92:kt();break}return wt}function Pu(e,t){for(;kt()&&e+Me!==57;)if(e+Me===84&&Po()===47)break;return"/*"+hi(t,wt-1)+"*"+mn(e===47?e:kt())}function Tu(e){for(;!Hs(Po());)kt();return hi(e,wt)}function Mu(e){return Cu(gi("",null,null,null,[""],e=xu(e),0,[0],e))}function gi(e,t,o,r,n,i,s,l,a){for(var c=0,p=0,u=s,f=0,m=0,y=0,v=1,S=1,T=1,b=0,x="",C=n,M=i,L=r,w=x;S;)switch(y=b,b=kt()){case 40:if(y!=108&&xe(w,u-1)==58){kr(w+=X(yi(b),"&","&\f"),"&\f",$s(c?l[c-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:w+=yi(b);break;case 9:case 10:case 13:case 32:w+=wu(y);break;case 92:w+=ku(gn()-1,7);continue;case 47:switch(Po()){case 42:case 47:$o(H0(Pu(kt(),gn()),t,o,a),a);break;default:w+="/"}break;case 123*v:l[c++]=Je(w)*T;case 125*v:case 59:case 0:switch(b){case 0:case 125:S=0;case 59+p:T==-1&&(w=X(w,/\f/g,"")),m>0&&Je(w)-u&&$o(m>32?Eu(w+";",r,o,u-1,a):Eu(X(w," ","")+";",r,o,u-2,a),a);break;case 59:w+=";";default:if($o(L=Lu(w,t,o,c,p,n,l,x,C=[],M=[],u,i),i),b===123)if(p===0)gi(w,t,L,L,C,i,u,l,M);else switch(f===99&&xe(w,3)===110?100:f){case 100:case 108:case 109:case 115:gi(e,L,L,r&&$o(Lu(e,L,L,0,0,n,l,x,n,C=[],u,M),M),n,M,u,l,r?C:M);break;default:gi(w,L,L,L,[""],M,0,l,M)}}c=p=m=0,v=T=1,x=w="",u=s;break;case 58:u=1+Je(w),m=y;default:if(v<1){if(b==123)--v;else if(b==125&&v++==0&&vu()==125)continue}switch(w+=mn(b),b*v){case 38:T=p>0?1:(w+="\f",-1);break;case 44:l[c++]=(Je(w)-1)*T,T=1;break;case 64:Po()===45&&(w+=yi(kt())),f=Po(),p=u=Je(x=w+=Tu(gn())),b++;break;case 45:y===45&&Je(w)==2&&(v=0)}}return i}function Lu(e,t,o,r,n,i,s,l,a,c,p,u){for(var f=n-1,m=n===0?i:[""],y=fi(m),v=0,S=0,T=0;v<r;++v)for(var b=0,x=jt(e,f+1,f=$s(S=s[v])),C=e;b<y;++b)(C=di(S>0?m[b]+" "+x:X(x,/&\f/g,m[b])))&&(a[T++]=C);return yn(e,t,o,n===0?ko:l,a,c,p,u)}function H0(e,t,o,r){return yn(e,t,o,ci,mn(Su()),jt(e,2,-2),0,r)}function Eu(e,t,o,r,n){return yn(e,t,o,wr,jt(e,0,r),jt(e,r+1,-1),r,n)}function Ws(e,t,o){switch(yu(e,t)){case 5103:return ne+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ne+e+e;case 4789:return Vo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ne+e+Vo+e+pe+e+e;case 5936:switch(xe(e,t+11)){case 114:return ne+e+pe+X(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ne+e+pe+X(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ne+e+pe+X(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ne+e+pe+e+e;case 6165:return ne+e+pe+"flex-"+e+e;case 5187:return ne+e+X(e,/(\w+).+(:[^]+)/,ne+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return ne+e+pe+"flex-item-"+X(e,/flex-|-self/g,"")+(Mt(e,/flex-|baseline/)?"":pe+"grid-row-"+X(e,/flex-|-self/g,""))+e;case 4675:return ne+e+pe+"flex-line-pack"+X(e,/align-content|flex-|-self/g,"")+e;case 5548:return ne+e+pe+X(e,"shrink","negative")+e;case 5292:return ne+e+pe+X(e,"basis","preferred-size")+e;case 6060:return ne+"box-"+X(e,"-grow","")+ne+e+pe+X(e,"grow","positive")+e;case 4554:return ne+X(e,/([^-])(transform)/g,"$1"+ne+"$2")+e;case 6187:return X(X(X(e,/(zoom-|grab)/,ne+"$1"),/(image-set)/,ne+"$1"),e,"")+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,ne+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,ne+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ne+e+e;case 4200:if(!Mt(e,/flex-|baseline/))return pe+"grid-column-align"+jt(e,t)+e;break;case 2592:case 3360:return pe+X(e,"template-","")+e;case 4384:case 3616:return o&&o.some(function(r,n){return t=n,Mt(r.props,/grid-\w+-end/)})?~kr(e+(o=o[t].value),"span",0)?e:pe+X(e,"-start","")+e+pe+"grid-row-span:"+(~kr(o,"span",0)?Mt(o,/\d+/):+Mt(o,/\d+/)-+Mt(e,/\d+/))+";":pe+X(e,"-start","")+e;case 4896:case 4128:return o&&o.some(function(r){return Mt(r.props,/grid-\w+-start/)})?e:pe+X(X(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,ne+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,"$1"+ne+"$2-$3$1"+Vo+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~kr(e,"stretch",0)?Ws(X(e,"stretch","fill-available"),t,o)+e:e}break;case 5152:case 5920:return X(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,i,s,l,a,c){return pe+n+":"+i+c+(s?pe+n+"-span:"+(l?a:+a-+i)+c:"")+e});case 4949:if(xe(e,t+6)===121)return X(e,":",":"+ne)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return X(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ne+(xe(e,14)===45?"inline-":"")+"box$3$1"+ne+"$2$3$1"+pe+"$2box$3")+e;case 100:return X(e,":",":"+pe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return X(e,"scroll-","scroll-snap-")+e}return e}function Lr(e,t){for(var o="",r=0;r<e.length;r++)o+=t(e[r],r,e,t)||"";return o}function Iu(e,t,o,r){switch(e.type){case hu:if(e.children.length)break;case mu:case wr:return e.return=e.return||e.value;case ci:return"";case pi:return e.return=e.value+"{"+Lr(e.children,r)+"}";case ko:if(!Je(e.value=e.props.join(",")))return""}return Je(o=Lr(e.children,r))?e.return=e.value+"{"+o+"}":""}function Ou(e){var t=fi(e);return function(o,r,n,i){for(var s="",l=0;l<t;l++)s+=e[l](o,r,n,i)||"";return s}}function Au(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ru(e,t,o,r){if(e.length>-1&&!e.return)switch(e.type){case wr:e.return=Ws(e.value,e.length,o);return;case pi:return Lr([oo(e,{value:X(e.value,"@","@"+ne)})],r);case ko:if(e.length)return gu(o=e.props,function(n){switch(Mt(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zo(oo(e,{props:[X(n,/:(read-\w+)/,":"+Vo+"$1")]})),zo(oo(e,{props:[n]})),hn(e,{props:zs(o,r)});break;case"::placeholder":zo(oo(e,{props:[X(n,/:(plac\w+)/,":"+ne+"input-$1")]})),zo(oo(e,{props:[X(n,/:(plac\w+)/,":"+Vo+"$1")]})),zo(oo(e,{props:[X(n,/:(plac\w+)/,pe+"input-$1")]})),zo(oo(e,{props:[n]})),hn(e,{props:zs(o,r)});break}return""})}}var Bu={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var no=typeof process!="undefined"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Uu="active",Ci="data-styled-version",Mr="6.1.14",ta=`/*!sc*/
`,wi=typeof window!="undefined"&&"HTMLElement"in window,j0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY);var Pi=Object.freeze([]),Ir=Object.freeze({});function W0(e,t,o){return o===void 0&&(o=Ir),e.theme!==o.theme&&e.theme||t||o.theme}var Xu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),U0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,X0=/(^-|-$)/g;function Du(e){return e.replace(U0,"-").replace(X0,"")}var Y0=/(a)(d)/gi,bi=52,qu=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gs(e){var t,o="";for(t=Math.abs(e);t>bi;t=t/bi|0)o=qu(t%bi)+o;return(qu(t%bi)+o).replace(Y0,"$1-$2")}var Us,Yu=5381,Er=function(e,t){for(var o=t.length;o;)e=33*e^t.charCodeAt(--o);return e},Gu=function(e){return Er(Yu,e)};function Ku(e){return Gs(Gu(e)>>>0)}function G0(e){return e.displayName||e.name||"Component"}function Xs(e){return typeof e=="string"&&!0}var Zu=typeof Symbol=="function"&&Symbol.for,Qu=Zu?Symbol.for("react.memo"):60115,K0=Zu?Symbol.for("react.forward_ref"):60112,Z0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Q0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ju={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J0=((Us={})[K0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Us[Qu]=Ju,Us);function Nu(e){return("type"in(t=e)&&t.type.$$typeof)===Qu?Ju:"$$typeof"in e?J0[e.$$typeof]:Z0;var t}var e2=Object.defineProperty,t2=Object.getOwnPropertyNames,Fu=Object.getOwnPropertySymbols,o2=Object.getOwnPropertyDescriptor,r2=Object.getPrototypeOf,_u=Object.prototype;function ec(e,t,o){if(typeof t!="string"){if(_u){var r=r2(t);r&&r!==_u&&ec(e,r,o)}var n=t2(t);Fu&&(n=n.concat(Fu(t)));for(var i=Nu(e),s=Nu(t),l=0;l<n.length;++l){var a=n[l];if(!(a in Q0||o&&o[a]||s&&a in s||i&&a in i)){var c=o2(t,a);try{e2(e,a,c)}catch{}}}}return e}function Or(e){return typeof e=="function"}function oa(e){return typeof e=="object"&&"styledComponentId"in e}function Ho(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function bn(e,t){if(e.length===0)return"";for(var o=e[0],r=1;r<e.length;r++)o+=t?t+e[r]:e[r];return o}function Sn(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ks(e,t,o){if(o===void 0&&(o=!1),!o&&!Sn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ks(e[r],t[r]);else if(Sn(t))for(var r in t)e[r]=Ks(e[r],t[r]);return e}function ra(e,t){Object.defineProperty(e,"toString",{value:t})}function ro(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var n2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var o=0,r=0;r<t;r++)o+=this.groupSizes[r];return o},e.prototype.insertRules=function(t,o){if(t>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;t>=i;)if((i<<=1)<0)throw ro(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=n;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,o.length);s<a;s++)this.tag.insertRule(l,o[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var o=this.groupSizes[t],r=this.indexOfGroup(t),n=r+o;this.groupSizes[t]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var o="";if(t>=this.length||this.groupSizes[t]===0)return o;for(var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r,s=n;s<i;s++)o+="".concat(this.tag.getRule(s)).concat(ta);return o},e}(),lg=1<<30,vi=new Map,ki=new Map,xi=1,Si=function(e){if(vi.has(e))return vi.get(e);for(;ki.has(xi);)xi++;var t=xi++;return vi.set(e,t),ki.set(t,e),t},i2=function(e,t){xi=t+1,vi.set(e,t),ki.set(t,e)},s2="style[".concat(no,"][").concat(Ci,'="').concat(Mr,'"]'),a2=new RegExp("^".concat(no,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),l2=function(e,t,o){for(var r,n=o.split(","),i=0,s=n.length;i<s;i++)(r=n[i])&&e.registerName(t,r)},u2=function(e,t){for(var o,r=((o=t.textContent)!==null&&o!==void 0?o:"").split(ta),n=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var a=l.match(a2);if(a){var c=0|parseInt(a[1],10),p=a[2];c!==0&&(i2(p,c),l2(e,p,a[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(l)}}},Vu=function(e){for(var t=document.querySelectorAll(s2),o=0,r=t.length;o<r;o++){var n=t[o];n&&n.getAttribute(no)!==Uu&&(u2(e,n),n.parentNode&&n.parentNode.removeChild(n))}};function Zs(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var tc=function(e){var t=document.head,o=e||t,r=document.createElement("style"),n=function(l){var a=Array.from(l.querySelectorAll("style[".concat(no,"]")));return a[a.length-1]}(o),i=n!==void 0?n.nextSibling:null;r.setAttribute(no,Uu),r.setAttribute(Ci,Mr);var s=Zs();return s&&r.setAttribute("nonce",s),o.insertBefore(r,i),r},c2=function(){function e(t){this.element=tc(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,n=0,i=r.length;n<i;n++){var s=r[n];if(s.ownerNode===o)return s}throw ro(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,o){try{return this.sheet.insertRule(o,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var o=this.sheet.cssRules[t];return o&&o.cssText?o.cssText:""},e}(),p2=function(){function e(t){this.element=tc(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,o){if(t<=this.length&&t>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),d2=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,o){return t<=this.length&&(this.rules.splice(t,0,o),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),$u=wi,f2={isServer:!wi,useCSSOMInjection:!j0},vn=function(){function e(t,o,r){t===void 0&&(t=Ir),o===void 0&&(o={});var n=this;this.options=ze(ze({},f2),t),this.gs=o,this.names=new Map(r),this.server=!!t.isServer,!this.server&&wi&&$u&&($u=!1,Vu(this)),ra(this,function(){return function(i){for(var s=i.getTag(),l=s.length,a="",c=function(u){var f=function(T){return ki.get(T)}(u);if(f===void 0)return"continue";var m=i.names.get(f),y=s.getGroup(u);if(m===void 0||!m.size||y.length===0)return"continue";var v="".concat(no,".g").concat(u,'[id="').concat(f,'"]'),S="";m!==void 0&&m.forEach(function(T){T.length>0&&(S+="".concat(T,","))}),a+="".concat(y).concat(v,'{content:"').concat(S,'"}').concat(ta)},p=0;p<l;p++)c(p);return a}(n)})}return e.registerId=function(t){return Si(t)},e.prototype.rehydrate=function(){!this.server&&wi&&Vu(this)},e.prototype.reconstructWithOptions=function(t,o){return o===void 0&&(o=!0),new e(ze(ze({},this.options),t),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(o){var r=o.useCSSOMInjection,n=o.target;return o.isServer?new d2(n):r?new c2(n):new p2(n)}(this.options),new n2(t)));var t},e.prototype.hasNameForId=function(t,o){return this.names.has(t)&&this.names.get(t).has(o)},e.prototype.registerName=function(t,o){if(Si(t),this.names.has(t))this.names.get(t).add(o);else{var r=new Set;r.add(o),this.names.set(t,r)}},e.prototype.insertRules=function(t,o,r){this.registerName(t,o),this.getTag().insertRules(Si(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Si(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),m2=/&/g,h2=/^\s*\/\/.*$/gm;function oc(e,t){return e.map(function(o){return o.type==="rule"&&(o.value="".concat(t," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(t," ")),o.props=o.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=oc(o.children,t)),o})}function rc(e){var t,o,r,n=e===void 0?Ir:e,i=n.options,s=i===void 0?Ir:i,l=n.plugins,a=l===void 0?Pi:l,c=function(f,m,y){return y.startsWith(o)&&y.endsWith(o)&&y.replaceAll(o,"").length>0?".".concat(t):f},p=a.slice();p.push(function(f){f.type===ko&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(m2,o).replace(r,c))}),s.prefix&&p.push(Ru),p.push(Iu);var u=function(f,m,y,v){m===void 0&&(m=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,o=m,r=new RegExp("\\".concat(o,"\\b"),"g");var S=f.replace(h2,""),T=Mu(y||m?"".concat(y," ").concat(m," { ").concat(S," }"):S);s.namespace&&(T=oc(T,s.namespace));var b=[];return Lr(T,Ou(p.concat(Au(function(x){return b.push(x)})))),b};return u.hash=a.length?a.reduce(function(f,m){return m.name||ro(15),Er(f,m.name)},Yu).toString():"",u}var y2=new vn,Qs=rc(),na=Ce.default.createContext({shouldForwardProp:void 0,styleSheet:y2,stylis:Qs}),ug=na.Consumer,g2=Ce.default.createContext(void 0);function Js(){return(0,Ce.useContext)(na)}function b2(e){var t=(0,Ce.useState)(e.stylisPlugins),o=t[0],r=t[1],n=Js().styleSheet,i=(0,Ce.useMemo)(function(){var a=n;return e.sheet?a=e.sheet:e.target&&(a=a.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(a=a.reconstructWithOptions({useCSSOMInjection:!1})),a},[e.disableCSSOMInjection,e.sheet,e.target,n]),s=(0,Ce.useMemo)(function(){return rc({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:o})},[e.enableVendorPrefixes,e.namespace,o]);(0,Ce.useEffect)(function(){(0,Wu.default)(o,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,Ce.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:s}},[e.shouldForwardProp,i,s]);return Ce.default.createElement(na.Provider,{value:l},Ce.default.createElement(g2.Provider,{value:s},e.children))}var nc=function(){function e(t,o){var r=this;this.inject=function(n,i){i===void 0&&(i=Qs);var s=r.name+i.hash;n.hasNameForId(r.id,s)||n.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=o,ra(this,function(){throw ro(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qs),this.name+t.hash},e}(),S2=function(e){return e>="A"&&e<="Z"};function zu(e){for(var t="",o=0;o<e.length;o++){var r=e[o];if(o===1&&r==="-"&&e[0]==="-")return e;S2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ic=function(e){return e==null||e===!1||e===""},sc=function(e){var t,o,r=[];for(var n in e){var i=e[n];e.hasOwnProperty(n)&&!ic(i)&&(Array.isArray(i)&&i.isCss||Or(i)?r.push("".concat(zu(n),":"),i,";"):Sn(i)?r.push.apply(r,Cr(Cr(["".concat(n," {")],sc(i),!1),["}"],!1)):r.push("".concat(zu(n),": ").concat((t=n,(o=i)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||t in Bu||t.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function To(e,t,o,r){if(ic(e))return[];if(oa(e))return[".".concat(e.styledComponentId)];if(Or(e)){if(!Or(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var n=e(t);return To(n,t,o,r)}var i;return e instanceof nc?o?(e.inject(o,r),[e.getName(r)]):[e]:Sn(e)?sc(e):Array.isArray(e)?Array.prototype.concat.apply(Pi,e.map(function(s){return To(s,t,o,r)})):[e.toString()]}function ac(e){for(var t=0;t<e.length;t+=1){var o=e[t];if(Or(o)&&!oa(o))return!1}return!0}var v2=Gu(Mr),x2=function(){function e(t,o,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ac(t),this.componentId=o,this.baseHash=Er(v2,o),this.baseStyle=r,vn.registerId(o)}return e.prototype.generateAndInjectStyles=function(t,o,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))n=Ho(n,this.staticRulesId);else{var i=bn(To(this.rules,t,o,r)),s=Gs(Er(this.baseHash,i)>>>0);if(!o.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);o.insertRules(this.componentId,s,l)}n=Ho(n,s),this.staticRulesId=s}else{for(var a=Er(this.baseHash,r.hash),c="",p=0;p<this.rules.length;p++){var u=this.rules[p];if(typeof u=="string")c+=u;else if(u){var f=bn(To(u,t,o,r));a=Er(a,f+p),c+=f}}if(c){var m=Gs(a>>>0);o.hasNameForId(this.componentId,m)||o.insertRules(this.componentId,m,r(c,".".concat(m),void 0,this.componentId)),n=Ho(n,m)}}return n},e}(),lc=Ce.default.createContext(void 0),cg=lc.Consumer;var Ys={};function C2(e,t,o){var r=oa(e),n=e,i=!Xs(e),s=t.attrs,l=s===void 0?Pi:s,a=t.componentId,c=a===void 0?function(C,M){var L=typeof C!="string"?"sc":Du(C);Ys[L]=(Ys[L]||0)+1;var w="".concat(L,"-").concat(Ku(Mr+L+Ys[L]));return M?"".concat(M,"-").concat(w):w}(t.displayName,t.parentComponentId):a,p=t.displayName,u=p===void 0?function(C){return Xs(C)?"styled.".concat(C):"Styled(".concat(G0(C),")")}(e):p,f=t.displayName&&t.componentId?"".concat(Du(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&n.attrs?n.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&n.shouldForwardProp){var v=n.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(C,M){return v(C,M)&&S(C,M)}}else y=v}var T=new x2(o,f,r?n.componentStyle:void 0);function b(C,M){return function(L,w,N){var $=L.attrs,E=L.componentStyle,k=L.defaultProps,g=L.foldedComponentIds,O=L.styledComponentId,I=L.target,D=Ce.default.useContext(lc),V=Js(),W=L.shouldForwardProp||V.shouldForwardProp,U=W0(w,D,k)||Ir,R=function(se,Te,Le){for(var _e,Ve=ze(ze({},Te),{className:void 0,theme:Le}),gt=0;gt<se.length;gt+=1){var nt=Or(_e=se[gt])?_e(Ve):_e;for(var Ee in nt)Ve[Ee]=Ee==="className"?Ho(Ve[Ee],nt[Ee]):Ee==="style"?ze(ze({},Ve[Ee]),nt[Ee]):nt[Ee]}return Te.className&&(Ve.className=Ho(Ve.className,Te.className)),Ve}($,w,U),B=R.as||I,te={};for(var j in R)R[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&R.theme===U||(j==="forwardedAs"?te.as=R.forwardedAs:W&&!W(j,B)||(te[j]=R[j]));var ce=function(se,Te){var Le=Js(),_e=se.generateAndInjectStyles(Te,Le.styleSheet,Le.stylis);return _e}(E,R),he=Ho(g,O);return ce&&(he+=" "+ce),R.className&&(he+=" "+R.className),te[Xs(B)&&!Xu.has(B)?"class":"className"]=he,N&&(te.ref=N),(0,Ce.createElement)(B,te)}(x,C,M)}b.displayName=u;var x=Ce.default.forwardRef(b);return x.attrs=m,x.componentStyle=T,x.displayName=u,x.shouldForwardProp=y,x.foldedComponentIds=r?Ho(n.foldedComponentIds,n.styledComponentId):"",x.styledComponentId=f,x.target=r?n.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(M){for(var L=[],w=1;w<arguments.length;w++)L[w-1]=arguments[w];for(var N=0,$=L;N<$.length;N++)Ks(M,$[N],!0);return M}({},n.defaultProps,C):C}}),ra(x,function(){return".".concat(x.styledComponentId)}),i&&ec(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Hu(e,t){for(var o=[e[0]],r=0,n=t.length;r<n;r+=1)o.push(t[r],e[r+1]);return o}var ju=function(e){return Object.assign(e,{isCss:!0})};function Y(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];if(Or(e)||Sn(e))return ju(To(Hu(Pi,Cr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?To(r):ju(To(Hu(r,t)))}function ea(e,t,o){if(o===void 0&&(o=Ir),!t)throw ro(1,t);var r=function(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,o,Y.apply(void 0,Cr([n],i,!1)))};return r.attrs=function(n){return ea(e,t,ze(ze({},o),{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return ea(e,t,ze(ze({},o),n))},r}var uc=function(e){return ea(C2,e)},d=uc;Xu.forEach(function(e){d[e]=uc(e)});var pg=function(){function e(t,o){this.rules=t,this.componentId=o,this.isStatic=ac(t),vn.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,o,r,n){var i=n(bn(To(this.rules,o,r,n)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,o){o.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,o,r,n){t>2&&vn.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,o,r,n)},e}();function Ti(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var r=bn(Y.apply(void 0,Cr([e],t,!1))),n=Ku(r);return new nc(n,r)}var dg=function(){function e(){var t=this;this._emitSheetCSS=function(){var o=t.instance.toString();if(!o)return"";var r=Zs(),n=bn([r&&'nonce="'.concat(r,'"'),"".concat(no,'="true"'),"".concat(Ci,'="').concat(Mr,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(o,"</style>")},this.getStyleTags=function(){if(t.sealed)throw ro(2);return t._emitSheetCSS()},this.getStyleElement=function(){var o;if(t.sealed)throw ro(2);var r=t.instance.toString();if(!r)return[];var n=((o={})[no]="",o[Ci]=Mr,o.dangerouslySetInnerHTML={__html:r},o),i=Zs();return i&&(n.nonce=i),[Ce.default.createElement("style",ze({},n,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new vn({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw ro(2);return Ce.default.createElement(b2,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw ro(3)},e}();var fg="__sc-".concat(no,"__");var Wo=h(P());var jo=h(Q()),J={width:jo.default.oneOfType([jo.default.number,jo.default.string]),height:jo.default.oneOfType([jo.default.number,jo.default.string])},re=(e,t)=>e.width===t.width&&e.height===t.height;var ia=({width:e=36,height:t=36})=>Wo.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Wo.default.createElement("path",{d:"M 22.5 18 C 22.5 16.235 21.48 14.71 20 13.975 L 20 16.185 L 22.455 18.64 C 22.485 18.43 22.5 18.215 22.5 18 Z"}),Wo.default.createElement("path",{d:"M 25 18 C 25 18.94 24.795 19.825 24.46 20.64 L 25.975 22.155 C 26.625 20.91 27 19.5 27 18 C 27 13.72 24.005 10.14 20 9.23 L 20 11.295 C 22.89 12.155 25 14.83 25 18 Z"}),Wo.default.createElement("polygon",{points:"18 10 15.91 12.09 18 14.18"}),Wo.default.createElement("path",{d:"M 10.275 9 L 9 10.275 L 13.725 15 L 9 15 L 9 21 L 13 21 L 18 26 L 18 19.275 L 22.255 23.53 C 21.585 24.045 20.83 24.46 20 24.71 L 20 26.775 C 21.375 26.46 22.63 25.83 23.685 24.965 L 25.725 27 L 27 25.725 L 18 16.725 L 10.275 9 Z"}));ia.displayName="MutedIcon";ia.propTypes=J;var Ar=Wo.default.memo(ia,re);var Li=h(P());var sa=({width:e=36,height:t=36})=>Li.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},Li.default.createElement("path",{d:"M 23.804 18.319 L 12.478 25.924 C 12.347 26.014 12.235 26.024 12.141 25.955 C 12.047 25.886 12 25.763 12 25.584 L 12 10.416 C 12 10.237 12.047 10.113 12.141 10.045 C 12.235 9.976 12.347 9.986 12.478 10.076 L 23.804 17.68 C 23.935 17.77 24 17.876 24 18 C 24 18.124 23.935 18.23 23.804 18.319 Z"}));sa.displayName="PlayIcon";sa.propTypes=J;var Rr=Li.default.memo(sa,re);var aa=d.div`
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
`,cc=Y`
  font-size: 20px;
  margin-right: 8px;
`,pc=d(Rr)`
  ${cc}
`,dc=d(Ar)`
  ${cc}
`,fc=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 5;
`;var hc=h(P());var mc=h(P()),la={captionDragging:!1,contextMenuVisible:!1,controlsHovering:!1,timeSliding:!1,volumeSliding:!1,hiding:!1,menuVisible:!1,subMenuVisible:!1,fullscreen:!1,playerRef:null,videoRef:null},Br=(0,mc.createContext)({state:la,dispatch:()=>null});var w2=()=>{let{state:e}=(0,hc.useContext)(Br);return e},z=w2;var yc=({hasResource:e=!1,prevented:t,paused:o,muted:r,currentTime:n,onClick:i})=>{let{i18n:s}=z(),[l,a]=st.default.useState(!1),c=st.default.useCallback(()=>{if(e===!1||t===!1||o)return null;if(r===!0&&!l){let u=f=>{a(!0),i(f)};return st.default.createElement(st.default.Fragment,{key:"preventedClickedTip"},st.default.createElement(fc,{onClick:u}),st.default.createElement(aa,null,st.default.createElement(dc,null),s.clickToUnmute))}return null},[e,t,l,i,s.clickToUnmute,r,o]);return[st.default.useCallback(()=>e===!1||t===!1?null:n===0&&o?st.default.createElement(st.default.Fragment,{key:"preventedTip"},st.default.createElement(aa,null,st.default.createElement(pc,null),s.playbackStuckClickResumePlayback)):null,[n,o,e,s.playbackStuckClickResumePlayback,t])(),c()]};yc.propTypes={hasResource:Uo.default.bool.isRequired,prevented:Uo.default.bool.isRequired,paused:Uo.default.bool.isRequired,muted:Uo.default.bool.isRequired,currentTime:Uo.default.number.isRequired,onClick:Uo.default.func.isRequired};var xn=st.default.memo(yc,(e,t)=>e.hasResource===t.hasResource&&e.prevented===t.prevented&&e.paused===t.paused&&e.muted===t.muted&&e.currentTime===t.currentTime&&e.onClick===t.onClick);var qr=h(P()),io=h(Q());var ua=h(P());var gc=ua.default.forwardRef(({showing:e,...t},o)=>ua.default.createElement("button",{ref:o,...t}));gc.displayName="PlayButton";var bc=d(gc)`
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
`;var Ei=h(P());var ca=({width:e=36,height:t=36})=>Ei.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Ei.default.createElement("path",{d:"M 18 12.3 L 18 8.5 L 13 13.25 L 18 18 L 18 14.2 C 21.3 14.2 24 16.765 24 19.9 C 24 23.035 21.3 25.6 18 25.6 C 14.7 25.6 12 23.035 12 19.9 L 10 19.9 C 10 24.08 13.6 27.5 18 27.5 C 22.4 27.5 26 24.08 26 19.9 C 26 15.72 22.4 12.3 18 12.3 Z"}));ca.displayName="ReplayIcon";ca.propTypes=J;var Dr=Ei.default.memo(ca,re);var Mi=h(P());var k2=d.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
`,P2=d.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
`,T2=d.div`
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
`,L2=()=>Mi.default.createElement(k2,null,Mi.default.createElement(P2,null,Mi.default.createElement(T2,null))),Ii=L2;var Sc=({hasResource:e,loading:t,paused:o,ended:r,seeking:n,waiting:i,kernelMsg:s,onClick:l})=>e===!1||t||s?null:i?qr.default.createElement(Ii,null):qr.default.createElement(bc,{showing:o||r,onClick:l},r?qr.default.createElement(Dr,{width:"14%",height:"100%"}):qr.default.createElement(Rr,{width:"20%",height:"100%"}));Sc.propTypes={hasResource:io.default.bool.isRequired,loading:io.default.bool.isRequired,paused:io.default.bool.isRequired,ended:io.default.bool.isRequired,seeking:io.default.bool.isRequired,waiting:io.default.bool.isRequired,kernelMsg:io.default.object,onClick:io.default.func.isRequired};var pa=qr.default.memo(Sc,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.kernelMsg===t.kernelMsg&&e.onClick===t.onClick);var Ai=h(P()),Oi=h(Q());var vc=d.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 2em;
  background: rgba(0, 0, 0, 0.65);
`;var xc=({hasResource:e,loading:t=!1,kernelMsg:o=null})=>e===!1?null:o?Ai.default.createElement(vc,null,o.type,": ",o.detail):t?Ai.default.createElement(Ii,null):null;xc.propTypes={hasResource:Oi.default.bool.isRequired,loading:Oi.default.bool,kernelMsg:Oi.default.object};var Cn=Ai.default.memo(xc,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.kernelMsg===t.kernelMsg);var Nr=Y`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;var wn=d.div`
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
`,kn=d.div`
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
`;var Wt=d.div`
  ${Nr}
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`,Cc=d.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  height: 55px !important;
  z-index: 2;
`,wc=d.div`
  padding: 10px 20px;
  font-size: 140%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  border-radius: 3px;
  color: #eee;
`,kc=d.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.7) 100%);
  transition: opacity 0.3s;
`;var Ie=(e=!1)=>e?{width:54,height:54}:{width:36,height:36};var Ri={32:"SPACE_KEY",27:"ESCAPE_KEY",37:"ARROW_LEFT_KEY",39:"ARROW_RIGHT_KEY",38:"ARROW_UP_KEY",40:"ARROW_DOWN_KEY",77:"MUTE_KEY",16:"SHIFT_KEY",67:"SUBTITLES_KEY",70:"F_KEY",84:"T_KEY",78:"N_KEY"},Bi={" ":"SPACE_KEY",Escape:"ESCAPE_KEY",ArrowLeft:"ARROW_LEFT_KEY",ArrowRight:"ARROW_RIGHT_KEY",ArrowUp:"ARROW_UP_KEY",ArrowDown:"ARROW_DOWN_KEY",m:"MUTE_KEY",Shift:"SHIFT_KEY",c:"SUBTITLES_KEY",f:"F_KEY",t:"T_KEY",n:"N_KEY"},It=e=>e?83:55;var Tn=h(P()),Pn=h(Q());var da=h(P());var Pc=da.default.forwardRef(({hiding:e,menuOpen:t,...o},r)=>da.default.createElement("div",{ref:r,...o}));Pc.displayName="Controls";var Tc=d(Pc)`
  display: flex;
  bottom: 0;
  position: absolute;
  width: 100%;
  transition: opacity 0.3s;
  ${({menuOpen:e})=>e?"z-index: 20;":""}
  ${({hiding:e})=>e?`
      opacity: 0;
    `:`
      opacity: 1;
    `}
`;var Di=h(P());var E2=()=>{let{state:e,dispatch:t}=Di.default.useContext(Br),o=Di.default.useRef(e);return o.current=e,Di.default.useCallback(n=>{if(typeof n=="function"){let i=n(o.current);t(i)}else t(n)},[t])},ye=E2;var Lc=({children:e})=>{let t=z(),o=ye(),r=Tn.default.useCallback(()=>{if(typeof window!="undefined"&&window.matchMedia){let i=window.matchMedia("(hover: none), (pointer: coarse)");if(i&&i.matches)return}o({type:"controlsHovering",payload:!0})},[o]),n=Tn.default.useCallback(()=>{o({type:"controlsHovering",payload:!1})},[o]);return Tn.default.createElement(Tc,{hiding:t.hiding,menuOpen:t.menuVisible||t.subMenuVisible,onMouseEnter:r,onMouseLeave:n},e)};Lc.propTypes={children:Pn.default.oneOfType([Pn.default.arrayOf(Pn.default.node),Pn.default.node]).isRequired};var Ec=Tn.default.memo(Lc,(e,t)=>e.children===t.children);var Ln=h(P()),Xo=h(Q());var qi=h(P());var Mc=(0,qi.forwardRef)(({isFullscreen:e,...t},o)=>qi.default.createElement("div",{ref:o,...t}));Mc.displayName="ControlBar";var Ic=d(Mc)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 11;
  ${({isFullscreen:e})=>e?`
    height: 54px;
  `:`
    height: 36px;
  `}
`,Oc=Y`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  flex: 1;
`,Ac=d.div`
  ${Oc}
  justify-content: flex-start;
  margin-left: 15px;
`,Rc=d.div`
  ${Oc}
  justify-content: flex-end;
  margin-right: 15px;
`;var Bc=({children:e,extra:t,fullscreen:o})=>Ln.default.createElement(Ic,{isFullscreen:o},Ln.default.createElement(Ac,null,e),Ln.default.createElement(Rc,null,t));Bc.propTypes={children:Xo.default.oneOfType([Xo.default.arrayOf(Xo.default.node),Xo.default.node]).isRequired,extra:Xo.default.node.isRequired,fullscreen:Xo.default.bool.isRequired};var Dc=Ln.default.memo(Bc,(e,t)=>e.fullscreen===t.fullscreen&&e.children===t.children&&e.extra===t.extra);var ke=h(P()),He=h(Q());var so=h(P());var Yo=h(P());var qc=Yo.default.forwardRef(({isFullscreen:e,hasChapters:t,...o},r)=>Yo.default.createElement("div",{ref:r,...o}));qc.displayName="Tooltip";var Ni=d(qc)`
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
`,Nc=Yo.default.forwardRef(({isFullscreen:e,...t},o)=>Yo.default.createElement("div",{ref:o,...t}));Nc.displayName="Tip";var Fc=d(Nc)`
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
`,_c=Yo.default.forwardRef(({isFullscreen:e,...t},o)=>Yo.default.createElement("span",{ref:o,...t}));_c.displayName="ChapterLabel";var Vc=d(_c)`
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
`;var Fi=Y`
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
`;var Ut=d.div`
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

  ${Fi}

  & video::cue {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 1.1em;
    line-height: 1.4;
  }
`;var Go=d.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
`,zc=so.default.forwardRef(({isFullscreen:e,...t},o)=>so.default.createElement("button",{ref:o,...t}));zc.displayName="SliderHandle";var Lo=d(zc)`
  ${Ut} ${Wt} & {
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
`,$c=`
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
`,Hc=so.default.forwardRef(({isSliding:e,isFullscreen:t,adMode:o,...r},n)=>so.default.createElement("div",{ref:n,...r}));Hc.displayName="Slider";var jc=d(Hc)`
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
  & ${Go} {
    -moz-transform: scaleY(0.6);
    -ms-transform: scaleY(0.6);
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
    -moz-transition: -moz-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -ms-transition: -ms-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
  }
  & ${Lo} {
    @media (hover: none), (pointer: coarse) {
      pointer-events: auto;
      opacity: 1;
      box-shadow: none;
    }
  }
  ${({isSliding:e})=>e?`
          & ${Go} {
            -moz-transform: none;
            -ms-transform: none;
            -webkit-transform: none;
            transform: none;
          }
          & ${Lo} {
            ${$c}
          }
          & ${Ni} {
            display: block;
          }
        `:`
        &:focus ${Go},
        &:hover ${Go} {
          -moz-transform: none;
          -ms-transform: none;
          -webkit-transform: none;
          transform: none;
        }
        &:focus ${Lo},
        &:hover ${Lo} {
          ${$c}
        }
      `}
  ${({adMode:e})=>e?`
    cursor: default;
    & ${Lo} {
      display: none !important;
    }
  `:""}
`,Wc=so.default.forwardRef(({isFullscreen:e,...t},o)=>so.default.createElement("div",{ref:o,...t}));Wc.displayName="SlideRail";var Uc=d(Wc)`
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
`,Xc=d.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: center left;
  background-color: rgba(255, 255, 255, 0.5);
`,Yc=so.default.forwardRef(({adMode:e,...t},o)=>so.default.createElement("div",{ref:o,...t}));Yc.displayName="Track";var Gc=d(Yc)`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(-100%, 0);
  background: ${({adMode:e})=>e?"#fc0":"#f00"};
`,fa=d.div`
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 12px;
  transform: translate(-100%, 0);
  z-index: 4;
`;var et=h(P()),ao=h(Q());var ma=h(P());var Kc=ma.default.forwardRef(({isFullscreen:e,showing:t,hasChapters:o,...r},n)=>ma.default.createElement("div",{ref:n,...r}));Kc.displayName="TimelensThumbnail";var Zc=d(Kc)`
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
`,Qc=d.div`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  z-index: 4;
`;var M2=e=>"changedTouches"in e&&e.changedTouches&&1<=e.changedTouches.length?e.changedTouches[0].pageX:"clientX"in e?e.clientX:0,En=(e,t,o)=>{let r=M2(e)-t.left;return 0>=r?0:r>=t.width?o:Math.round(o*r/t.width)},ep=({duration:e,currentTime:t,sliderWidth:o,elementWidth:r,offset:n=0})=>{if(e<=0||o<=0||r<=0)return 0;let i=t/e*o,s=r/2,l=s+n,a=o-s-n;return Math.min(a,Math.max(l,i))},tp=({duration:e,currentTime:t,sliderWidth:o,handleWidth:r})=>{if(e===0)return{trackTranslateX:"-100",handleTranslateX:"-100"};let n=ep({duration:e,currentTime:t,sliderWidth:o,elementWidth:r,offset:0}),i=(100*t/e-100).toFixed(1),s=(n/o*100-100).toFixed(1);return{trackTranslateX:i,handleTranslateX:s}},op=({duration:e,currentTime:t,sliderWidth:o,tooltipWidth:r})=>(ep({duration:e,currentTime:t,sliderWidth:o,elementWidth:r,offset:5})/o*100).toFixed(1),Jc=e=>{if(typeof e!="string")throw new TypeError("Time must be a string");if(e.indexOf(";")>0&&(e=e.replace(";",":"),!/\d{2}(:\d{2}){0,3}/i.test(e)))throw new TypeError("Time code must have the format `00:00:00`");let t=e.split(":"),o=0,r=0,n=0,i=0,s=25,l=Math.round(s),a=3600*l,c=60*l;switch(t.length){default:case 1:n=parseInt(t[0],10);break;case 2:r=parseInt(t[0],10),n=parseInt(t[1],10);break;case 3:o=parseInt(t[0],10),r=parseInt(t[1],10),n=parseInt(t[2],10);break;case 4:o=parseInt(t[0],10),r=parseInt(t[1],10),n=parseInt(t[2],10),i=parseInt(t[3],10)}let p=(a*o+c*r+s*n+i)/s;return parseFloat(p.toFixed(3))},rp=e=>{var t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+r,left:t.left+o}},_i=e=>{let t=0,o=0,r=[];for(var n of e.split(`
`))if(/-->/.test(n)){let[i,s]=(n.match(/(.*) --> (.*)/)||[]).slice(1);t=Jc(i),o=Jc(s)}else if(/\.(png|jpg|jpeg|webp)/i.test(n)){let i=n.match(/(.*)[#?]xywh=(.*),(.*),(.*),(.*)/);if(i){let[,s,l,a,c,p]=i;r.push({from:t,to:o,file:s,x:l,y:a,w:c,h:p})}}return r};var ha=et.default.forwardRef(({spriteVTTFile:e,sliderRef:t,duration:o=0,fullscreen:r,hasChapters:n=!1},i)=>{let s=z(),[l,a]=et.default.useState([]),c=et.default.useRef(null),[p,u]=et.default.useState(!1),[f,m]=et.default.useState({backgroundImage:"",backgroundPosition:"-480px -360px",width:"160px",height:"90px",marginLeft:"0px"});et.default.useEffect(()=>{(async()=>{try{let S=await fetch(e).then(C=>C.text()),T=e.substring(0,e.lastIndexOf("/")+1),b=S.replace(/^([^#?\n]+\.(png|jpg|jpeg|webp))/gim,C=>C.startsWith("http")?C:`${T}${C}`),x=_i(b);a(x)}catch(S){console.error("Error parsing VTT file: ",S)}})()},[e]);let y=et.default.useCallback(async S=>{var C;let T=c==null?void 0:c.current,b=t==null?void 0:t.current;if(T&&b&&l.length>0&&s.menuVisible===!1&&s.subMenuVisible===!1){let M=rp(b),L=S==null?void 0:S.pageX;S!=null&&S.originalEvent&&((C=S==null?void 0:S.originalEvent)!=null&&C.changedTouches)?L=S.originalEvent.changedTouches[0].pageX:S!=null&&S.changedTouches&&(L=S.changedTouches[0].pageX);let N=(L-M.left-b.offsetLeft)/b.offsetWidth,$=N*o,E=N*b.offsetWidth;for(var x of l)if($>=x.from&&$<=x.to){let k=Math.min(Math.max(0,E-T.offsetWidth/2),b.offsetWidth-T.offsetWidth);m({backgroundImage:`url(${x.file})`,backgroundPosition:-x.x+"px "+-x.y+"px",width:x.w+"px",height:x.h+"px",marginLeft:k+"px"});break}u(!0)}},[c,t,o,l,s.menuVisible,s.subMenuVisible]),v=et.default.useCallback(()=>{u(!1)},[]);return et.default.useImperativeHandle(i,()=>({handleTimelens:y,setShowTimelens:u})),et.default.createElement(et.default.Fragment,null,et.default.createElement(Qc,{onMouseMove:y,onMouseEnter:y,onMouseLeave:v}),et.default.createElement(Zc,{ref:c,showing:p||s.timeSliding,isFullscreen:r,hasChapters:n,style:f}))});ha.displayName="Timelens";ha.propTypes={sliderRef:ao.default.oneOfType([ao.default.func,ao.default.shape({current:ao.default.instanceOf(HTMLDivElement)})]),spriteVTTFile:ao.default.string.isRequired,duration:ao.default.number.isRequired,fullscreen:ao.default.bool.isRequired,hasChapters:ao.default.bool};var np=et.default.memo(ha,(e,t)=>e.fullscreen===t.fullscreen&&e.sliderRef===t.sliderRef&&e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration&&e.hasChapters===t.hasChapters);var Eo=h(P()),Xt=h(Q());Ne();var ip=({sliderRef:e,duration:t,tooltip:o,showTooltip:r,chapterTitle:n,fullscreen:i})=>{let s=Eo.default.useRef(null),[l,a]=Eo.default.useState("0");return Eo.default.useLayoutEffect(()=>{var p,u;let c=op({duration:t,currentTime:o,sliderWidth:((p=e.current)==null?void 0:p.offsetWidth)||0,tooltipWidth:((u=s.current)==null?void 0:u.offsetWidth)||0});a(c)},[t,o,n,e]),Eo.default.createElement(Ni,{style:{display:r?"block":"",transform:`translateX(${l}%)`},isFullscreen:i},Eo.default.createElement(Fc,{ref:s,isFullscreen:i},n&&Eo.default.createElement(Vc,{isFullscreen:i},n),De(o)))};ip.propTypes={sliderRef:Xt.default.oneOfType([Xt.default.func,Xt.default.shape({current:Xt.default.instanceOf(HTMLDivElement)})]),duration:Xt.default.number.isRequired,tooltip:Xt.default.number.isRequired,showTooltip:Xt.default.bool.isRequired,chapterTitle:Xt.default.string,fullscreen:Xt.default.bool.isRequired};var sp=Eo.default.memo(ip,(e,t)=>e.sliderRef===t.sliderRef&&e.duration===t.duration&&e.tooltip===t.tooltip&&e.showTooltip===t.showTooltip&&e.chapterTitle===t.chapterTitle&&e.fullscreen===t.fullscreen);var Fr=h(P()),dt=h(Q());var Mn=h(P());var ap=Mn.default.forwardRef(({isFullscreen:e,...t},o)=>Mn.default.createElement("div",{ref:o,...t}));ap.displayName="ChapterSegmentsContainer";var lp=d(ap)`
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
`,up=Mn.default.forwardRef(({isFullscreen:e,isHovered:t,...o},r)=>Mn.default.createElement("div",{ref:r,...o}));up.displayName="ChapterSegment";var cp=d(up)`
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
`,pp=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`,dp=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #f00;
`;var fp=({segments:e,currentTime:t,duration:o,bufferedScaleX:r,hoveredIndex:n,fullscreen:i})=>e.length===0||o<=0?null:Fr.default.createElement(lp,{isFullscreen:i},e.map((s,l)=>{let a=s.endTime-s.startTime,c=a/o*100,p=0;t>=s.endTime?p=100:t>s.startTime&&(p=(t-s.startTime)/a*100);let u=r*o,f=0;return u>=s.endTime?f=100:u>s.startTime&&(f=(u-s.startTime)/a*100),Fr.default.createElement(cp,{key:l,style:{width:`${c}%`},title:s.title,isFullscreen:i,isHovered:n===l},Fr.default.createElement(pp,{style:{width:`${f}%`}}),Fr.default.createElement(dp,{style:{width:`${p}%`}}))}));fp.propTypes={segments:dt.default.arrayOf(dt.default.shape({title:dt.default.string.isRequired,startTime:dt.default.number.isRequired,endTime:dt.default.number.isRequired,startPercent:dt.default.number.isRequired,endPercent:dt.default.number.isRequired})).isRequired,currentTime:dt.default.number.isRequired,duration:dt.default.number.isRequired,bufferedScaleX:dt.default.number.isRequired,hoveredIndex:dt.default.number,fullscreen:dt.default.bool.isRequired};var mp=Fr.default.memo(fp);var Yt=h(P()),Ko=h(Q());var ya=h(P());var hp=ya.default.forwardRef(({isFullscreen:e,bottomOffset:t,visible:o,...r},n)=>ya.default.createElement("div",{ref:n,...r}));hp.displayName="HeatmapContainer";var yp=d(hp)`
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
`,gp=d.svg`
  display: block;
  width: 100%;
  height: 100%;
`;var bp=({strokePath:e,currentTime:t,duration:o,isFullscreen:r,bottomOffset:n,visible:i})=>{let l=`heatmap-played-${Yt.default.useId()}`,a=o>0?t/o*100:0;return Yt.default.createElement(yp,{isFullscreen:r,bottomOffset:n,visible:i},Yt.default.createElement(gp,{viewBox:"0 0 100 100",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},Yt.default.createElement("defs",null,Yt.default.createElement("clipPath",{id:l},Yt.default.createElement("rect",{x:"0",y:"0",width:a,height:"100"}))),Yt.default.createElement("path",{d:e,fill:"none",stroke:"rgba(255, 255, 255, 0.75)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"}),Yt.default.createElement("path",{d:e,fill:"none",stroke:"rgba(255, 255, 255, 1)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",clipPath:`url(#${l})`})))};bp.propTypes={strokePath:Ko.default.string.isRequired,currentTime:Ko.default.number.isRequired,duration:Ko.default.number.isRequired,isFullscreen:Ko.default.bool.isRequired,bottomOffset:Ko.default.number,visible:Ko.default.bool};var Vi=Yt.default.memo(bp,(e,t)=>e.strokePath===t.strokePath&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.isFullscreen===t.isFullscreen&&e.bottomOffset===t.bottomOffset&&e.visible===t.visible);var we=h(P());var I2=({timelensRef:e,currentTime:t,duration:o,onChange:r,onSeeking:n})=>{let i=ye(),s=we.default.useRef(null),l=we.default.useRef(null),[a,c]=we.default.useState(!1),[p,u]=we.default.useState(!1),[f,m]=we.default.useState({left:0,width:0}),[y,v]=we.default.useState({value:0,tooltip:0}),S=we.default.useCallback(g=>{g.preventDefault();let O=g.currentTarget.getBoundingClientRect(),I=En(g,O,o);i({type:"timeSliding",payload:!1}),u(!1),r(I),n(!1),e.current&&e.current.handleTimelens(g)},[r,o,i,e,n]),T=we.default.useCallback(g=>{if(g.preventDefault(),s.current!==null){let O=s.current.getBoundingClientRect();i({type:"timeSliding",payload:!0}),m(I=>({...I,left:O.left,width:O.width})),e.current&&e.current.handleTimelens(g),u(!0),n(!0)}},[e,i,n]),b=we.default.useCallback(g=>{var I,D,V,W,U,R,B,te;g.preventDefault();let O=En(g,{left:f.left,width:f.width},o);if(i({type:"timeSliding",payload:!1}),u(!1),v(j=>({...j,value:O})),r(O),n(!1),e.current&&e.current.setShowTimelens(!1),s.current){let j=s.current.getBoundingClientRect(),ce=(W=(V=g.clientX)!=null?V:(D=(I=g.changedTouches)==null?void 0:I[0])==null?void 0:D.clientX)!=null?W:0,he=(te=(B=g.clientY)!=null?B:(R=(U=g.changedTouches)==null?void 0:U[0])==null?void 0:R.clientY)!=null?te:0;(ce<j.left||ce>j.right||he<j.top||he>j.bottom)&&c(!1)}},[r,o,f,i,n,e]),x=we.default.useRef(null),C=we.default.useCallback(g=>{var D,V,W,U,R,B,te,j;g.preventDefault(),x.current&&cancelAnimationFrame(x.current);let O=(U=(W=g.clientX)!=null?W:(V=(D=g.touches)==null?void 0:D[0])==null?void 0:V.clientX)!=null?U:0,I=(j=(te=g.pageX)!=null?te:(B=(R=g.touches)==null?void 0:R[0])==null?void 0:B.pageX)!=null?j:0;x.current=requestAnimationFrame(()=>{let ce=En({clientX:O},{left:f.left,width:f.width},o);v(he=>({...he,value:ce})),r(ce),e.current&&e.current.handleTimelens({clientX:O,pageX:I}),x.current=null})},[o,f,e,r]);we.default.useEffect(()=>(p&&(document.addEventListener("mousemove",C),document.addEventListener("mouseup",b),document.addEventListener("touchmove",C),document.addEventListener("touchcancel",b),document.addEventListener("touchend",b)),()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",C),document.removeEventListener("touchcancel",b),document.removeEventListener("touchend",b),x.current&&(cancelAnimationFrame(x.current),x.current=null)}),[p,C,b]);let M=we.default.useCallback(g=>{if(g.preventDefault(),s.current!==null){let O=s.current.getBoundingClientRect();m(I=>({...I,left:O.left,width:O.width})),e.current&&e.current.handleTimelens(g)}},[e]),L=we.default.useCallback(g=>{g.preventDefault();let O=En(g,{left:f.left,width:f.width},o);v(I=>({...I,tooltip:O})),e.current&&e.current.handleTimelens(g)},[o,f.left,f.width,e]),w=we.default.useRef(null),N=we.default.useCallback(()=>{w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{if(!s||!s.current)return;let g=s.current.getBoundingClientRect();m(O=>({...O,left:g.left,width:g.width})),w.current=null},100)},[]),$=we.default.useCallback(g=>{e.current&&e.current.handleTimelens(g),c(!0)},[e]),E=we.default.useCallback(()=>{e.current&&e.current.setShowTimelens(!1),c(!1)},[e]);we.default.useEffect(()=>{if(typeof window!="undefined")return window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N),w.current&&clearTimeout(w.current)}},[N]);let k=we.default.useMemo(()=>{var g;return tp({duration:o,currentTime:p?y.value:t,sliderWidth:f.width,handleWidth:((g=l.current)==null?void 0:g.offsetWidth)||0})},[o,t,y.value,p,l,f]);return{sliderRef:s,handleRef:l,showTooltip:a,timeSliderSliding:p,timeSliderState:y,trackTranslateX:{track:k.trackTranslateX,handle:k.handleTranslateX},onClick:S,onMouseDown:T,onSliderMouseOver:M,onSliderMouseMove:L,onMouseEnter:$,onMouseLeave:E}},Sp=I2;var ga=h(P());var vp=h(P()),xp=h(dn());function Zo(e){let t=vp.default.useRef(e);return(0,xp.default)(e,t.current)||(t.current=e),t.current}var O2=({chapters:e,duration:t})=>{let o=Zo(e),r=ga.default.useMemo(()=>{if(!o||o.length===0||t<=0)return[];let i=[...o].filter(s=>s.startTime<t).sort((s,l)=>s.startTime-l.startTime);return i.map((s,l)=>{let a=l<i.length-1?i[l+1].startTime:t,c=Math.min(a,t);return{title:s.title,startTime:s.startTime,endTime:c,startPercent:s.startTime/t*100,endPercent:c/t*100}})},[o,t]),n=ga.default.useCallback(i=>{if(r.length===0)return null;for(let s=r.length-1;s>=0;s--)if(i>=r[s].startTime)return r[s];return r[0]},[r]);return{segments:r,getChapterAtTime:n}},Mo=O2;var Cp=h(P());var A2=({heatmapData:e,duration:t})=>{let o=Zo(e),r=Cp.default.useMemo(()=>{if(!o||o.length===0||t<=0)return{svgPath:"",strokePath:""};let i=o.map(u=>{let m=(u.startTime+u.endTime)/2/t*100,v=100-Math.max(0,Math.min(1,u.value))*100;return{x:m,y:v}});if(i.length<2)return{svgPath:"",strokePath:""};let s=6,l=i.length+2,a=u=>u<=0?{x:0,y:100}:u>=l-1?{x:100,y:100}:i[u-1],c=`M ${a(0).x},${a(0).y}`;for(let u=0;u<l-1;u++){let f=a(u-1),m=a(u),y=a(u+1),v=a(u+2),S=m.x+(y.x-f.x)/s,T=m.y+(y.y-f.y)/s,b=y.x-(v.x-m.x)/s,x=y.y-(v.y-m.y)/s;c+=` C ${S},${T} ${b},${x} ${y.x},${y.y}`}return{strokePath:c}},[o,t]),n=r.strokePath.length>0;return{strokePath:r.strokePath,hasHeatmap:n}},$i=A2;Ht();var wp=({spriteVTTFile:e,chapters:t,heatmapData:o,currentTime:r,duration:n,buffered:i,onChange:s,onSeeking:l,fullscreen:a,disabled:c=!1,adMode:p=!1})=>{let{i18n:u,captionDragging:f}=z(),m=ke.default.useRef(null),{sliderRef:y,handleRef:v,showTooltip:S,timeSliderSliding:T,timeSliderState:b,trackTranslateX:x,onClick:C,onMouseDown:M,onSliderMouseOver:L,onSliderMouseMove:w,onMouseEnter:N,onMouseLeave:$}=Sp({timelensRef:m,currentTime:r,duration:n,onChange:s,onSeeking:l}),{segments:E,getChapterAtTime:k}=Mo({chapters:t,duration:n}),g=E.length>0,{strokePath:O,hasHeatmap:I}=$i({heatmapData:o,duration:n}),D=ke.default.useMemo(()=>{let W=T?b.value:b.tooltip;return k(W)},[T,b.value,b.tooltip,k]),V=ke.default.useMemo(()=>!D||!S?-1:E.findIndex(W=>W.startTime===D.startTime),[D,S,E]);return ke.default.createElement(jc,{ref:y,role:"slider","aria-label":u.timeBar,"aria-valuemin":0,"aria-valuemax":n,"aria-valuenow":r,"aria-valuetext":De(Math.round(r)),tabIndex:0,onClick:C,onMouseDown:M,onTouchStart:M,onKeyDown:()=>{},onMouseOver:L,onMouseMove:w,onMouseEnter:N,onMouseLeave:$,onFocus:()=>{},isSliding:T,isFullscreen:a,adMode:p,style:f||c?{pointerEvents:"none"}:void 0},g?ke.default.createElement(ke.default.Fragment,null,ke.default.createElement(Go,null,ke.default.createElement(mp,{segments:E,currentTime:T?b.value:r,duration:n,bufferedScaleX:i,hoveredIndex:V,fullscreen:a}),ke.default.createElement(fa,{style:{transform:`translateX(${x.handle}%)`}},ke.default.createElement(Lo,{ref:v,type:"button",onMouseDown:M,onTouchStart:M,isFullscreen:a})))):ke.default.createElement(Go,null,ke.default.createElement(Uc,{isFullscreen:a},ke.default.createElement(Xc,{style:{transform:`scaleX(${i})`}}),ke.default.createElement(Gc,{adMode:p,style:{transform:`translateX(${x.track}%)`}})),ke.default.createElement(fa,{style:{transform:`translateX(${x.handle}%)`}},ke.default.createElement(Lo,{ref:v,type:"button",onMouseDown:M,onTouchStart:M,isFullscreen:a}))),ke.default.createElement(sp,{sliderRef:y,showTooltip:S,duration:n,tooltip:T?b.value:b.tooltip,chapterTitle:D==null?void 0:D.title,fullscreen:a}),I&&ke.default.createElement(Vi,{strokePath:O,currentTime:T?b.value:r,duration:n,isFullscreen:a,visible:S||T}),e&&ke.default.createElement(np,{ref:m,sliderRef:y,duration:n,spriteVTTFile:e,fullscreen:a,hasChapters:g}))};wp.propTypes={spriteVTTFile:He.default.string,chapters:He.default.arrayOf(He.default.shape({title:He.default.string.isRequired,startTime:He.default.number.isRequired})),heatmapData:He.default.arrayOf(He.default.shape({startTime:He.default.number.isRequired,endTime:He.default.number.isRequired,value:He.default.number.isRequired})),currentTime:He.default.number.isRequired,duration:He.default.number.isRequired,buffered:He.default.number.isRequired||null,onChange:He.default.func.isRequired,fullscreen:He.default.bool.isRequired};var ba=ke.default.memo(wp,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.buffered===t.buffered&&e.onChange===t.onChange&&e.onSeeking===t.onSeeking&&e.fullscreen===t.fullscreen);var At=h(P()),er=h(Q());var On=h(P());var Pt=h(P());var In=d.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,R2=Y`
  font-size: 130%;
  margin-bottom: 10px;
`,B2=Y`
  font-size: 90%;
  margin-bottom: 6px;
`,D2=d.div`
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
  z-index: 12;
  ${({$fullscreen:e})=>e?R2:B2}

  ${In}:hover & {
    opacity: 1;
  }

  &[data-suppressed='true'] {
    opacity: 0 !important;
  }

  ${In}:has([aria-expanded='true']) & {
    opacity: 0 !important;
  }
`,kp=({label:e,children:t,disabled:o=!1,fullscreen:r=!1,...n})=>{let i=z(),s=Pt.default.useRef(null),l=Pt.default.useRef(null),[a,c]=Pt.default.useState(!1),[p,u]=Pt.default.useState(0),f=Pt.default.useRef(null),m=Pt.default.useCallback(()=>{var T;let S=(T=i.playerRef)==null?void 0:T.current;if(S&&S.querySelectorAll('[aria-expanded="true"]').length>0){c(!0);return}c(!1),f.current&&cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>{f.current=null;let b=s.current,x=l.current;if(!b||!x||!S){u(0);return}let C=b.getBoundingClientRect(),M=S.getBoundingClientRect(),L=8;C.left<M.left+L?u(M.left+L-C.left):C.right>M.right-L?u(M.right-L-C.right):u(0)})},[i.playerRef]),y=Pt.default.useCallback(()=>{f.current&&(cancelAnimationFrame(f.current),f.current=null),c(!1),u(0)},[]),v=Pt.default.useCallback(()=>{c(!0)},[]);return!e||o?t:Pt.default.createElement(In,{ref:l,onMouseEnter:m,onMouseLeave:y,onClick:v,...n},t,Pt.default.createElement(D2,{ref:s,$fullscreen:r,"data-suppressed":a,style:{transform:`translateX(calc(-50% + ${p}px))`}},e))};kp.displayName="Tooltip";var be=Pt.default.memo(kp);var Pp=On.default.forwardRef(({isFullscreen:e,...t},o)=>On.default.createElement("div",{ref:o,...t}));Pp.displayName="SliderWrapper";var _r=d(Pp)`
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
`,Tp=On.default.forwardRef(({isSliding:e,isFullscreen:t,...o},r)=>On.default.createElement("div",{ref:r,...o}));Tp.displayName="SliderContainer";var Lp=d(Tp)`
  display: flex;
  padding-right: 3px;
  position: relative;
  @media (max-width: 575px) {
    display: none;
  }

  ${({isSliding:e,isFullscreen:t})=>e?`
      & ${_r} {
        width: ${It(t)}px;
        -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
      }
      `:`
          & ${In}:hover ~ ${_r},
          &:hover ${_r},
          & ${_r}:hover {
              width: ${It(t)}px;
              -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
          }
      `}
`;var Sa=h(P());var q2=Y`
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
`,N2=Y`
  align-items: center;
  padding: 0 8px;
  font-size: 14px;
`,F2=Y`
  width: 54px;
  height: 54px;
`,_2=Y`
  width: 36px;
  height: 36px;
`,V2=Y`
  font-size: 145% !important;
`,Ep=Sa.default.forwardRef(({isText:e,isFullscreen:t=!1,isFakeDisabled:o=!1,title:r,...n},i)=>Sa.default.createElement("button",{ref:i,...n},n.children));Ep.displayName="GeneralButton";var $2=d(Ep)`
  ${Ut} ${Wt} & {
    ${q2}
    ${({isFullscreen:e,isText:t})=>!t&&(e?F2:_2)}
    ${({isFullscreen:e,isText:t})=>e&&t&&V2}
    ${({isText:e})=>e&&N2}
    ${({isFakeDisabled:e})=>e&&`
      color: #a4a4a4;
    `}
  }
`,ie=$2;var Vr=h(P()),Jo=h(Q());var Ot=h(P());var zi=({clientX:e,sliderRef:t,isFullcreen:o})=>{if(!t.current)return 0;let r=t.current.getBoundingClientRect(),i=(e-r.left)/It(o)*100;return i<0?i=0:i>100&&(i=100),i};var z2=({fullscreen:e,value:t,onChange:o})=>{let r=z(),n=ye(),i=Ot.default.useRef(null),s=Ot.default.useRef(null),[l,a]=Ot.default.useState(0);Ot.default.useEffect(()=>{if(i!=null&&i.current&&(s!=null&&s.current)){let y=s.current.getBoundingClientRect(),v=t/100*It(e)-y.width/2,S=v;v<0?S=0:v>It(e)-y.width&&(S=It(e)-y.width),a(S)}},[t,e]);let c=Ot.default.useCallback(y=>{if(o){let v=zi({clientX:y.clientX,sliderRef:i,isFullcreen:e});o(v)}},[o,e]),p=Ot.default.useCallback(y=>{y.preventDefault(),i!=null&&i.current&&n({type:"volumeSliding",payload:!0})},[n]),u=Ot.default.useCallback(y=>{y.preventDefault(),n({type:"volumeSliding",payload:!1});let v=zi({clientX:y.clientX,sliderRef:i,isFullcreen:e});o(v)},[o,e,n]),f=Ot.default.useRef(null),m=Ot.default.useCallback(y=>{var S,T,b,x;if(y.preventDefault(),!r.volumeSliding)return;f.current&&cancelAnimationFrame(f.current);let v=(x=(b=y.clientX)!=null?b:(T=(S=y.touches)==null?void 0:S[0])==null?void 0:T.clientX)!=null?x:0;f.current=requestAnimationFrame(()=>{let C=zi({clientX:v,sliderRef:i,isFullcreen:e});o(C),f.current=null})},[r.volumeSliding,e,o]);return Ot.default.useEffect(()=>(r.volumeSliding&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",u),document.addEventListener("touchmove",m),document.addEventListener("touchcancel",u),document.addEventListener("touchend",u)),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",u),document.removeEventListener("touchmove",m),document.removeEventListener("touchcancel",u),document.removeEventListener("touchend",u),f.current&&(cancelAnimationFrame(f.current),f.current=null)}),[r.volumeSliding,m,u]),{thumbLeft:l,sliderRef:i,thumbRef:s,onMouseDown:p,onMouseMove:m,handleChange:c}},Mp=z2;var Qo=h(P());var Ip=Qo.default.forwardRef(({isFullscreen:e,...t},o)=>Qo.default.createElement("div",{ref:o,...t}));Ip.displayName="SliderContainer";var Op=d(Ip)`
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
`,Ap=Qo.default.forwardRef(({isFullscreen:e,isDisabled:t,...o},r)=>Qo.default.createElement("div",{ref:r,...o}));Ap.displayName="SliderTrack";var Rp=d(Ap)`
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
`,Bp=Qo.default.forwardRef(({isFullscreen:e,isDisabled:t,...o},r)=>Qo.default.createElement("div",{ref:r,...o}));Bp.displayName="SliderThumb";var Dp=d(Bp)`
  ${Ut} ${Wt} & {
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
`;var qp=({fullscreen:e,value:t,isDisabled:o,onChange:r,onMouseEnter:n,onMouseLeave:i})=>{let{thumbLeft:s,sliderRef:l,thumbRef:a,onMouseMove:c,onMouseDown:p,handleChange:u}=Mp({fullscreen:e,value:t,onChange:r});return Vr.default.createElement(_r,{ref:l,role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":Math.round(t),"aria-valuetext":`${Math.round(t)}%`,onClick:u,onMouseDown:p,onTouchStart:p,onMouseEnter:n,onMouseLeave:i,isFullscreen:e},Vr.default.createElement(Op,{onMouseMove:c,isFullscreen:e},Vr.default.createElement(Rp,{style:{width:`${t}%`},isFullscreen:e,isDisabled:o}),Vr.default.createElement(Dp,{ref:a,style:{left:`${s}px`},onMouseDown:p,onTouchStart:p,isFullscreen:e,isDisabled:o})))};qp.propTypes={value:Jo.default.number.isRequired,onChange:Jo.default.func.isRequired,isDisabled:Jo.default.bool.isRequired,fullscreen:Jo.default.bool.isRequired,onMouseEnter:Jo.default.func,onMouseLeave:Jo.default.func};var Np=Vr.default.memo(qp,(e,t)=>e.fullscreen===t.fullscreen&&e.value===t.value&&e.onChange===t.onChange&&e.isDisabled===t.isDisabled&&e.onMouseEnter===t.onMouseEnter&&e.onMouseLeave===t.onMouseLeave);var lo=h(P());var $r=h(P());var va=({width:e=36,height:t=36})=>$r.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},$r.default.createElement("path",{d:"M 22.5 18 C 22.5 16.189 21.48 14.624 20 13.87 L 20 22.136 C 21.48 21.377 22.5 19.812 22.5 18 Z"}),$r.default.createElement("polygon",{points:"9 14.922 9 21.078 13 21.078 18 26.21 18 9.79 13 14.922"}),$r.default.createElement("path",{d:"M 20 9 L 20 11.119 C 22.89 12.002 25 14.747 25 18 C 25 21.253 22.89 23.999 20 24.881 L 20 27 C 24.005 26.066 27 22.398 27 18 C 27 13.603 24.005 9.934 20 9 Z"}));va.displayName="UnmutedIcon";va.propTypes=J;var Hi=$r.default.memo(va,re);var H2=({fullscreen:e,isMuted:t,volume:o,forceMuted:r,changeVolume:n,onMutedClick:i})=>{let s=z(),l=lo.default.useMemo(()=>Ie(e),[e]),a=lo.default.useMemo(()=>t===!0||o===0||r,[t,o,r]),c=lo.default.useCallback(()=>a?lo.default.createElement(Ar,{...l}):lo.default.createElement(Hi,{...l}),[a,l]),p=lo.default.useMemo(()=>r?s.i18n.thisVideoHasNoSound:a?s.i18n.activateSound:s.i18n.mute,[a,r,s.i18n]),u=lo.default.useCallback(m=>{r===!1&&n(m/100)},[n,r]),f=lo.default.useCallback(()=>{r===!1&&i(a)},[i,a,r]);return{titleMemorized:p,renderIcon:c,handleOnClick:f,handleChange:u}},Fp=H2;var _p=d.div`
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
`;var Vp=({fullscreen:e,isMuted:t,volume:o,forceMuted:r,changeVolume:n,onMutedClick:i})=>{let s=z(),[l,a]=At.default.useState(!1),{titleMemorized:c,renderIcon:p,handleOnClick:u,handleChange:f}=Fp({fullscreen:e,isMuted:t,volume:o,forceMuted:r,changeVolume:n,onMutedClick:i}),m=At.default.useCallback(()=>a(!0),[]),y=At.default.useCallback(()=>{s.volumeSliding||a(!1)},[s.volumeSliding]);At.default.useEffect(()=>{s.volumeSliding||a(!1)},[s.volumeSliding]);let v=l||s.volumeSliding,S=t?0:o,b=(e?54:36)+S*It(e);return At.default.createElement(Lp,{isSliding:s.volumeSliding,isFullscreen:e},At.default.createElement(be,{label:c,fullscreen:e,disabled:s.volumeSliding||l},At.default.createElement(ie,{type:"button","aria-label":c,onClick:u,isFullscreen:e,isFakeDisabled:r},p())),At.default.createElement(Np,{fullscreen:e,value:S*100,isDisabled:r,onChange:f,onMouseEnter:m,onMouseLeave:y}),v&&!r&&At.default.createElement(_p,{style:{left:`${b}px`},$fullscreen:e},Math.round(S*100),"%"))};Vp.propTypes={fullscreen:er.default.bool.isRequired,isMuted:er.default.bool.isRequired,volume:er.default.number.isRequired,onMutedClick:er.default.func.isRequired,forceMuted:er.default.bool.isRequired,changeVolume:er.default.func.isRequired};var $p=At.default.memo(Vp,(e,t)=>e.fullscreen===t.fullscreen&&e.isMuted===t.isMuted&&e.volume===t.volume&&e.forceMuted===t.forceMuted&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume);var zr=h(P()),An=h(Q());var xa=d.div`
  display: inline-block;
  height: 36px;
  padding: 0 5px;
  font-size: 13px;
  line-height: 35px;
  white-space: nowrap;
`,zp=d.span`
  position: relative;
  top: -2px;
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 50%;
  background: #ff0000;
`,Hp=d.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
`;Ht();var jp=({live:e,duration:t,currentTime:o,chapterTitle:r})=>{let{i18n:n}=z();return zr.default.createElement(xa,{role:"timer","aria-live":"off"},De(Math.round(o)),e?zr.default.createElement(xa,null,zr.default.createElement(zp,null),n.live):` / ${De(Math.round(t))}`,r&&zr.default.createElement(Hp,null," \xB7 ",r))};jp.propTypes={live:An.default.bool.isRequired,duration:An.default.number.isRequired,currentTime:An.default.number.isRequired,chapterTitle:An.default.string};var Wp=zr.default.memo(jp,(e,t)=>e.live===t.live&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.chapterTitle===t.chapterTitle);var Tt=h(P()),Hr=h(Q());var Rn=h(P());var Ca=({width:e=36,height:t=36})=>Rn.default.createElement("svg",{height:e,width:t,version:"1.1",viewBox:"0 0 36 36",fill:"currentColor"},Rn.default.createElement("rect",{x:"12",y:"10",width:"3",height:"16"}),Rn.default.createElement("rect",{x:"21",y:"10",width:"3",height:"16"}));Ca.displayName="PauseIcon";Ca.propTypes=J;var Up=Rn.default.memo(Ca,re);var Xp=({fullscreen:e,paused:t,ended:o,onPlayClick:r,onPauseClick:n})=>{let{i18n:i}=z(),s=Tt.default.useMemo(()=>Ie(e),[e]);return o?Tt.default.createElement(be,{label:i.replay,fullscreen:e},Tt.default.createElement(ie,{type:"button","aria-label":i.replay,onClick:r,isFullscreen:e},Tt.default.createElement(Dr,{...s}))):t?Tt.default.createElement(be,{label:i.play,fullscreen:e},Tt.default.createElement(ie,{type:"button","aria-label":i.play,onClick:r,isFullscreen:e},Tt.default.createElement(Rr,{...s}))):Tt.default.createElement(be,{label:i.pause,fullscreen:e},Tt.default.createElement(ie,{type:"button","aria-label":i.pause,onClick:n,isFullscreen:e},Tt.default.createElement(Up,{...s})))};Xp.propTypes={fullscreen:Hr.default.bool.isRequired,paused:Hr.default.bool.isRequired,ended:Hr.default.bool.isRequired,onPlayClick:Hr.default.func.isRequired,onPauseClick:Hr.default.func.isRequired};var Yp=Tt.default.memo(Xp,(e,t)=>e.fullscreen===t.fullscreen&&e.paused===t.paused&&e.ended===t.ended&&e.onPlayClick===t.onPlayClick&&e.onPauseClick===t.onPauseClick);var Rt=h(P()),tr=h(Q());var ji=h(P());var wa=({width:e=36,height:t=36})=>ji.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},ji.default.createElement("path",{d:"M 22.789 12.113 C 22.918 12.014 23.028 11.98 23.117 12.011 C 23.206 12.042 23.25 12.126 23.25 12.261 L 23.25 23.739 C 23.25 23.874 23.206 23.958 23.117 23.989 C 23.028 24.02 22.918 23.986 22.789 23.887 L 15.508 18.351 C 15.447 18.304 15.402 18.255 15.375 18.203 L 15.375 23.49 C 15.375 23.625 15.31 23.742 15.18 23.841 C 15.05 23.939 14.896 23.989 14.719 23.989 L 13.406 23.989 C 13.229 23.989 13.075 23.939 12.945 23.841 C 12.815 23.742 12.75 23.625 12.75 23.49 L 12.75 12.51 C 12.75 12.375 12.815 12.258 12.945 12.159 C 13.075 12.061 13.229 12.011 13.406 12.011 L 14.719 12.011 C 14.896 12.011 15.05 12.061 15.18 12.159 C 15.31 12.258 15.375 12.375 15.375 12.51 L 15.375 17.797 C 15.402 17.745 15.447 17.696 15.508 17.649 Z"}));wa.displayName="PreviousTrackIcon";wa.propTypes=J;var Gp=ji.default.memo(wa,re);var Wi=h(P());var ka=({width:e=36,height:t=36})=>Wi.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},Wi.default.createElement("path",{d:"M 13.211 12.113 C 13.082 12.014 12.972 11.98 12.883 12.011 C 12.794 12.042 12.75 12.126 12.75 12.261 L 12.75 23.739 C 12.75 23.874 12.794 23.958 12.883 23.989 C 12.972 24.02 13.082 23.986 13.211 23.887 L 20.492 17.649 C 20.553 17.696 20.598 17.745 20.625 17.797 L 20.625 12.51 C 20.625 12.375 20.69 12.258 20.82 12.159 C 20.95 12.061 21.104 12.011 21.281 12.011 L 22.594 12.011 C 22.771 12.011 22.925 12.061 23.055 12.159 C 23.185 12.258 23.25 12.375 23.25 12.51 L 23.25 23.49 C 23.25 23.625 23.185 23.742 23.055 23.841 C 22.925 23.939 22.771 23.989 22.594 23.989 L 21.281 23.989 C 21.104 23.989 20.95 23.939 20.82 23.841 C 20.69 23.742 20.625 23.625 20.625 23.49 L 20.625 18.203 C 20.598 18.255 20.553 18.304 20.492 18.351 Z"}));ka.displayName="NextTrackIcon";ka.propTypes=J;var Kp=Wi.default.memo(ka,re);var Ui=Rt.default.memo(({fullscreen:e,onPrevious:t,showNavButtons:o=!1})=>{let{i18n:r}=z(),n=Rt.default.useMemo(()=>Ie(e),[e]),i=typeof t=="function";return!i&&!o?null:Rt.default.createElement(be,{label:r.previous,fullscreen:e},Rt.default.createElement(ie,{type:"button","aria-label":r.previous,onClick:i?t:void 0,isFullscreen:e,isFakeDisabled:!i},Rt.default.createElement(Gp,{...n})))});Ui.displayName="PreviousButton";Ui.propTypes={fullscreen:tr.default.bool.isRequired,onPrevious:tr.default.func,showNavButtons:tr.default.bool};var Xi=Rt.default.memo(({fullscreen:e,onNext:t,showNavButtons:o=!1})=>{let{i18n:r}=z(),n=Rt.default.useMemo(()=>Ie(e),[e]),i=typeof t=="function";return!i&&!o?null:Rt.default.createElement(be,{label:r.next,fullscreen:e},Rt.default.createElement(ie,{type:"button","aria-label":r.next,onClick:i?t:void 0,isFullscreen:e,isFakeDisabled:!i},Rt.default.createElement(Kp,{...n})))});Xi.displayName="NextButton";Xi.propTypes={fullscreen:tr.default.bool.isRequired,onNext:tr.default.func,showNavButtons:tr.default.bool};var uo=h(P()),Ki=h(Q());var Yi=h(P());var Pa=({width:e=36,height:t=36})=>Yi.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36"},Yi.default.createElement("path",{fill:"currentColor",d:"M 12 20.667 L 10 20.667 L 10 26 L 15.333 26 L 15.333 24 L 12 24 L 12 20.667 Z M 10 15.333 L 12 15.333 L 12 12 L 15.333 12 L 15.333 10 L 10 10 L 10 15.333 Z M 24 24 L 20.667 24 L 20.667 26 L 26 26 L 26 20.667 L 24 20.667 L 24 24 Z M 20.667 10 L 20.667 12 L 24 12 L 24 15.333 L 26 15.333 L 26 10 L 20.667 10 Z"}));Pa.displayName="FullscreenIcon";Pa.propTypes=J;var Zp=Yi.default.memo(Pa,re);var Gi=h(P());var Ta=({width:e=36,height:t=36})=>Gi.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},Gi.default.createElement("path",{d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"}));Ta.displayName="UnfullscreenIcon";Ta.propTypes=J;var Qp=Gi.default.memo(Ta,re);var Jp=({fullscreen:e,requestFullscreen:t,exitFullscreen:o})=>{let{i18n:r}=z(),n=uo.default.useMemo(()=>Ie(e),[e]);return e?uo.default.createElement(be,{label:r.exitFullScreenMode,fullscreen:!0},uo.default.createElement(ie,{type:"button","aria-label":r.exitFullScreenMode,onClick:o,isFullscreen:!0},uo.default.createElement(Qp,{...n}))):uo.default.createElement(be,{label:r.fullScreen},uo.default.createElement(ie,{type:"button","aria-label":r.fullScreen,onClick:t},uo.default.createElement(Zp,{...n})))};Jp.propTypes={fullscreen:Ki.default.bool.isRequired,requestFullscreen:Ki.default.func.isRequired,exitFullscreen:Ki.default.func.isRequired};var ed=uo.default.memo(Jp,(e,t)=>e.fullscreen===t.fullscreen&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen);var Io=h(P());var j2=3*1e3,W2=({hasResource:e,loading:t,prevented:o,paused:r,ended:n,waiting:i,seeking:s,kernelMsg:l})=>{let{controlsHovering:a,timeSliding:c,menuVisible:p,subMenuVisible:u}=z(),f=ye(),m=Io.default.useRef(void 0),y=e===!1||t||o||r||n||i||s||c||p||u||a||l,v=Io.default.useRef(y);v.current=y;let S=e===!1||t||o||r||n||i||s||c||p||u||l,T=Io.default.useRef(S);T.current=S;let b=Io.default.useCallback(()=>{typeof window!="undefined"&&window.clearTimeout(m.current),f({type:"hiding",payload:!1}),!v.current&&(m.current=window.setTimeout(()=>{f({type:"hiding",payload:!0})},j2))},[f]),x=Io.default.useCallback(()=>{if(typeof window!="undefined"&&window.clearTimeout(m.current),f({type:"controlsHovering",payload:!1}),T.current){f({type:"hiding",payload:!1});return}f({type:"hiding",payload:!0})},[f]);return Io.default.useEffect(()=>{typeof window!="undefined"&&(r||n)?(window.clearTimeout(m.current),f({type:"hiding",payload:!1})):!r&&!n&&b()},[r,n,b,f]),Io.default.useEffect(()=>()=>{typeof window!="undefined"&&window.clearTimeout(m.current)},[]),{showControls:b,hideControls:x}},td=W2;var co=h(P()),Bn=h(Q());var od=d.div`
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
`,rd=d.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`;var nd=({spriteVTTFile:e,duration:t,seekTime:o,visible:r})=>{let[n,i]=co.default.useState([]),[s,l]=co.default.useState({}),a=co.default.useRef(null);co.default.useEffect(()=>{if(!e)return;let p=!1;return(async()=>{try{let u=await fetch(e).then(T=>T.text());if(p)return;let f=e.substring(0,e.lastIndexOf("/")+1),m=u.replace(/^([^#?\n]+\.(png|jpg|jpeg|webp))/gim,T=>T.startsWith("http")?T:`${f}${T}`),y=_i(m);i(y);let v=[...new Set(y.map(T=>T.file))],S={};await Promise.all(v.map(T=>new Promise(b=>{let x=new Image;x.onload=()=>{S[T]={w:x.naturalWidth,h:x.naturalHeight},b()},x.onerror=b,x.src=T}))),p||l(S)}catch(u){console.error("SpritePreview: Error parsing VTT file:",u)}})(),()=>{p=!0}},[e]);let c=co.default.useMemo(()=>{if(!r||n.length===0||t<=0)return null;let p=a.current;if(!p)return null;let u=p.offsetWidth,f=p.offsetHeight;if(!u||!f)return null;for(let m of n)if(o>=m.from&&o<=m.to){let y=Number(m.w),v=Number(m.h),S=Number(m.x),T=Number(m.y),b=s[m.file];if(!y||!v||!b)return null;let x=u/y,C=f/v,M=Math.max(x,C),L=b.w*M,w=b.h*M,N=-(S*M),$=-(T*M),E=y*M,k=v*M,g=(u-E)/2,O=(f-k)/2;return{backgroundImage:`url(${m.file})`,backgroundSize:`${L}px ${w}px`,backgroundPosition:`${N+g}px ${$+O}px`}}return null},[r,n,t,o,s]);return e?co.default.createElement(od,{ref:a,$visible:r&&c!==null},c&&co.default.createElement(rd,{style:c})):null};nd.propTypes={spriteVTTFile:Bn.default.string,duration:Bn.default.number.isRequired,seekTime:Bn.default.number.isRequired,visible:Bn.default.bool.isRequired};var Dn=co.default.memo(nd,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration&&e.seekTime===t.seekTime&&e.visible===t.visible);var qe=h(P()),ft=h(Q());var qn=h(P());var id=d.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,sd=qn.default.forwardRef(({singleOption:e,hiding:t,isFullscreen:o,...r},n)=>qn.default.createElement("div",{ref:n,...r}));sd.displayName="DropdownOverlay";var ad=d(sd)`
  width: 250px;
  position: absolute;
  overflow: hidden;
  z-index: 20;
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
`,ld=d.ul`
  min-width: 250px;
  padding: 10px 0;
`,ud=d.li`
  & ${ie} {
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
  & ${ie}:focus, & ${ie}:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`,cd=d.div`
  margin-right: auto;
`,pd=d.div`
  font-size: 87%;
`,dd=d.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`,La=qn.default.forwardRef(({isFullHD:e=!1,isExpanded:t=!1,isFullscreen:o=!1,...r},n)=>qn.default.createElement(ie,{ref:n,isFullscreen:o,...r}));La.displayName="DropdownButton";La.displayName="DropdownButton";var fd=d(La)`
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
`;var Zi=h(P());var Ea=({width:e=36,height:t=36})=>Zi.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},Zi.default.createElement("path",{d:"M 25.089 17.774 C 25.056 17.032 24.908 16.3 24.649 15.604 L 25.796 14.535 C 26.013 14.326 26.065 13.997 25.921 13.732 C 25.463 12.886 24.874 12.117 24.177 11.453 C 23.965 11.247 23.641 11.211 23.39 11.366 L 22.034 12.21 C 21.424 11.786 20.75 11.461 20.039 11.247 L 19.9 9.677 C 19.877 9.375 19.646 9.13 19.345 9.09 C 18.927 9.029 18.505 8.999 18.082 9 C 17.543 8.998 17.006 9.045 16.476 9.141 C 16.19 9.187 15.97 9.419 15.939 9.706 L 15.772 11.311 C 15.117 11.533 14.498 11.849 13.934 12.249 L 12.614 11.398 C 12.362 11.236 12.032 11.269 11.817 11.478 C 11.108 12.158 10.512 12.947 10.053 13.816 C 9.913 14.076 9.961 14.398 10.172 14.606 L 11.329 15.72 C 11.115 16.314 10.981 16.933 10.93 17.563 L 9.44 18.086 C 9.155 18.18 8.974 18.459 9.003 18.757 C 9.068 19.751 9.296 20.727 9.677 21.646 C 9.786 21.924 10.073 22.091 10.368 22.048 L 11.93 21.823 C 12.234 22.337 12.602 22.811 13.025 23.232 L 12.473 24.754 C 12.372 25.032 12.468 25.342 12.707 25.515 C 13.505 26.099 14.394 26.548 15.338 26.844 C 15.625 26.937 15.938 26.818 16.09 26.559 L 16.897 25.207 C 17.245 25.265 17.597 25.297 17.95 25.303 C 18.215 25.305 18.48 25.292 18.744 25.261 L 19.55 26.658 C 19.69 26.921 19.991 27.054 20.28 26.979 C 21.228 26.728 22.128 26.321 22.943 25.775 C 23.195 25.609 23.302 25.293 23.203 25.008 L 22.686 23.512 C 23.198 23.057 23.643 22.532 24.006 21.951 L 25.568 22.202 C 25.862 22.25 26.151 22.089 26.265 21.813 C 26.657 20.921 26.903 19.971 26.994 19.001 C 27.034 18.698 26.855 18.41 26.567 18.311 Z M 25.266 20.834 L 23.37 20.532 L 22.917 21.258 C 22.62 21.735 22.257 22.167 21.838 22.542 L 21.195 23.123 L 21.838 24.947 C 21.392 25.208 20.92 25.423 20.431 25.589 L 19.467 23.9 L 18.641 23.984 C 18.428 24.009 18.213 24.02 17.999 24.019 C 17.708 24.013 17.418 23.986 17.131 23.939 L 16.238 23.769 L 15.255 25.438 C 14.764 25.253 14.294 25.017 13.854 24.732 L 14.526 22.898 L 13.931 22.311 C 13.587 21.962 13.286 21.573 13.035 21.152 L 12.595 20.413 L 10.696 20.686 C 10.526 20.188 10.406 19.674 10.336 19.152 L 12.158 18.51 L 12.216 17.668 C 12.255 17.154 12.364 16.648 12.537 16.163 L 12.816 15.366 L 11.422 14.021 C 11.69 13.582 12.001 13.17 12.35 12.792 L 13.957 13.832 L 14.66 13.328 C 15.122 13.002 15.629 12.743 16.164 12.56 L 16.951 12.297 L 17.154 10.352 C 17.458 10.311 17.765 10.289 18.072 10.284 C 18.268 10.284 18.464 10.284 18.664 10.313 L 18.834 12.239 L 19.672 12.493 C 20.254 12.668 20.805 12.933 21.304 13.28 L 21.995 13.761 L 23.634 12.74 C 23.973 13.107 24.276 13.504 24.54 13.928 L 23.139 15.244 L 23.46 16.063 C 23.67 16.632 23.792 17.23 23.82 17.835 L 23.859 18.705 L 25.664 19.364 C 25.581 19.866 25.447 20.358 25.266 20.834 Z M 17.979 21.2 C 15.506 21.2 13.96 18.524 15.197 16.384 C 16.434 14.244 19.525 14.244 20.762 16.384 C 21.048 16.88 21.197 17.443 21.192 18.015 C 21.189 19.783 19.748 21.211 17.979 21.2 Z M 18.021 16.063 C 16.537 16.046 15.591 17.64 16.318 18.933 C 17.045 20.226 18.9 20.248 19.657 18.972 C 19.833 18.675 19.926 18.335 19.926 17.99 C 19.926 16.934 19.077 16.075 18.021 16.063 Z"}));Ea.displayName="SettingsIcon";Ea.propTypes=J;var Qi=Zi.default.memo(Ea,re);var le=h(P()),Nn=h(Q());Ne();var Bt=h(P());var md=Bt.default.forwardRef(({isFullscreen:e,...t},o)=>Bt.default.createElement("div",{ref:o,...t}));md.displayName="OptionsContainer";var Ma=d(md)`
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
`,hd=Bt.default.forwardRef(({isFullscreen:e,...t},o)=>Bt.default.createElement("div",{ref:o,...t}));hd.displayName="OptionsHeader";var Ia=d(hd)`
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
`,yd=Bt.default.forwardRef(({selected:e,isFullscreen:t,...o},r)=>Bt.default.createElement("div",{ref:r,...o}));yd.displayName="OptionsItem";var Ji=d(yd)`
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
`,Oa=d.span`
  flex: 1;
`,gd=d.span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
`,bd=Bt.default.forwardRef(({isFullscreen:e,...t},o)=>Bt.default.createElement("button",{ref:o,...t}));bd.displayName="ResetButton";var rS=d(bd)`
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
`,Sd=Bt.default.forwardRef(({show:e,...t},o)=>Bt.default.createElement("div",{ref:o,...t}));Sd.displayName="OptionsContent";var Aa=d(Sd)`
  opacity: 0;
  transform: translate(100px, 0);
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
  ${({show:e})=>e&&`
    opacity: 1;
    transform: translate(0, 0);
  `}
`;var es=h(P());var Ra=({width:e=36,height:t=36})=>es.default.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},es.default.createElement("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"}));Ra.displayName="ArrowLeftIcon";Ra.propTypes=J;var or=es.default.memo(Ra,re);var ts=h(P());var Ba=({width:e=36,height:t=36})=>ts.default.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},ts.default.createElement("path",{fill:"currentColor",d:"M 15.7 12 C 15.7 12.105 15.658 12.196 15.573 12.277 L 9.648 17.88 C 9.563 17.96 9.466 18 9.355 18 C 9.245 18 9.148 17.96 9.063 17.88 L 8.427 17.278 C 8.342 17.199 8.3 17.106 8.3 17.002 C 8.3 16.898 8.342 16.806 8.427 16.725 L 13.424 12 L 8.427 7.275 C 8.342 7.194 8.3 7.102 8.3 6.998 C 8.3 6.894 8.342 6.801 8.427 6.722 L 9.063 6.12 C 9.148 6.04 9.245 6 9.355 6 C 9.466 6 9.563 6.04 9.648 6.12 L 15.573 11.723 C 15.658 11.804 15.7 11.895 15.7 12 Z"}));Ba.displayName="ArrowRightIcon";Ba.propTypes=J;var jr=ts.default.memo(Ba,re);var vd=({captionStyle:e,onStyleChange:t,onClose:o,isFullscreen:r})=>{let{i18n:n}=z(),[i,s]=le.default.useState(null),[l,a]=le.default.useState(!1);le.default.useEffect(()=>{let m=setTimeout(()=>a(!0),50);return()=>clearTimeout(m)},[]);let c=le.default.useMemo(()=>[{key:"fontFamily",label:n.fontFamily},{key:"fontColor",label:n.fontColor},{key:"fontSize",label:n.fontSize},{key:"fontOpacity",label:n.fontOpacity},{key:"backgroundColor",label:n.backgroundColor},{key:"backgroundOpacity",label:n.backgroundOpacity},{key:"windowColor",label:n.windowColor},{key:"windowOpacity",label:n.windowOpacity},{key:"edgeStyle",label:n.edgeStyle}],[n]),p=le.default.useCallback(()=>{t(xo)},[t]),u=le.default.useCallback((m,y)=>{t({...e,[m]:y}),s(null)},[e,t]),f=le.default.useCallback(m=>{let y=un[m],v=y==null?void 0:y.find(S=>S.value===e[m]);return(v==null?void 0:v.label)||e[m]},[e]);if(i){let m=un[i.key],y=c.find(v=>v.key===i.key);return le.default.createElement(Ma,{isFullscreen:r},le.default.createElement(Ia,{isFullscreen:r},le.default.createElement(ie,{onClick:()=>s(null),isFullscreen:r,isText:!0},le.default.createElement(or,{width:28,height:28}),le.default.createElement("span",null,y==null?void 0:y.label))),le.default.createElement(Aa,{show:l},m==null?void 0:m.map(v=>le.default.createElement(Ji,{key:v.value,selected:e[i.key]===v.value,onClick:()=>u(i.key,v.value),isFullscreen:r},e[i.key]===v.value&&"\u2713 ",v.label))))}return le.default.createElement(Ma,{isFullscreen:r},le.default.createElement(Ia,{isFullscreen:r},le.default.createElement(ie,{onClick:o,isFullscreen:r,isText:!0},le.default.createElement(or,{width:28,height:28}),le.default.createElement("span",null,n.captionOptions))),le.default.createElement(Aa,{show:l},c.map(m=>le.default.createElement(Ji,{key:m.key,onClick:()=>s(m),isFullscreen:r},le.default.createElement(Oa,null,m.label),le.default.createElement(gd,null,f(m.key)," ",le.default.createElement(jr,{width:16,height:16})))),le.default.createElement(Ji,{onClick:p,isFullscreen:r},le.default.createElement(Oa,null,n.reset))))};vd.propTypes={captionStyle:Nn.default.object.isRequired,onStyleChange:Nn.default.func.isRequired,onClose:Nn.default.func.isRequired,isFullscreen:Nn.default.bool};var xd=le.default.memo(vd);var Fn=h(P());var tt=h(P());var Cd=tt.default.forwardRef(({title:e,options:t,value:o,hiding:r,isFullscreen:n,onClick:i,goBack:s,showOptionsButton:l,onOptionsClick:a,...c},p)=>{let{i18n:u}=z(),[f,m]=tt.default.useState(!1);return tt.default.useEffect(()=>{m(!1),r&&setTimeout(()=>{m(!0)},100)},[r]),tt.default.createElement("div",{ref:p,...c},tt.default.createElement(kd,null,tt.default.createElement(ie,{onClick:s,isFullscreen:n,isText:!0,style:l?{width:"auto"}:void 0},tt.default.createElement(or,{width:28,height:28}),tt.default.createElement("span",null,e)),l&&a&&tt.default.createElement(ie,{onClick:a,isFullscreen:n,isText:!0,style:{marginLeft:"auto",fontSize:"12px",textDecoration:"underline",opacity:.8,width:"auto",padding:"20px 15px"}},u.captionOptions)),tt.default.createElement(Pd,{show:f},tt.default.createElement(Td,null,t.map((y,v)=>tt.default.createElement(Ld,{key:v,selected:y.value===o,isFullscreen:n},tt.default.createElement(ie,{onClick:()=>i(y.value),isFullscreen:n,isText:!0},y.label,"isFullHD"in y&&y.isFullHD&&tt.default.createElement(Ed,null,u.hd)))))))});Cd.displayName="DropdownOverlay";var wd=Cd;var Md=d(wd)`
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
`,kd=d.div`
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
  & ${ie} {
    width: 100%;
    font-size: 91%;
    padding: 20px 5px;
    height: 57px;
    justify-content: flex-start !important;
  }
`,Id=Fn.default.forwardRef(({show:e,...t},o)=>Fn.default.createElement("div",{ref:o,...t}));Id.displayName="DropdownContent";var Pd=d(Id)`
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
`,Td=d.ul`
  padding: 10px 0;
`,Od=Fn.default.forwardRef(({selected:e,isFullscreen:t,...o},r)=>Fn.default.createElement("li",{ref:r,...o}));Od.displayName="DropdownItem";var Ld=d(Od)`
  ${Ut} ${Wt} & {
    padding: 0 15px;

    & ${ie} {
      border-radius: 8px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      width: 100%;
      line-height: 40px;
      padding: 0 15px;
      margin: 0;
      justify-content: flex-start;
      ${({isFullscreen:e})=>e?`
        height: 49px;
      `:`
        height: 40px;
      `}
      ${({selected:e})=>e?"background-color: rgb(204, 54, 43, 0.4) !important;":""}
    }
    & ${ie}:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }
  }
`,Ed=d.sub`
  font-size: 10px;
  font-weight: 500;
  color: #cb0e0b;
  margin-left: 3px;
`;var Oe=h(P());var _n={generalMenu:!1,speed:!1,quality:!1,captions:!1};var Wr=({label:e,value:t,i18n:o})=>e==="quality"?t==="0"?o.auto:`${t}p`:e==="speed"&&t==="1"?o.normal:t;var Ad=({qualityOptions:e,captionOptions:t,live:o,adMode:r=!1,i18n:n})=>{let i=[];return!o&&!r&&i.push({label:n.speed,value:"speed",options:[{label:"2",value:"2"},{label:"1.5",value:"1.5"},{label:"1.25",value:"1.25"},{label:"Normal",value:"1"},{label:"0.75",value:"0.75"},{label:"0.5",value:"0.5"},{label:"0.25",value:"0.25"}]}),e.length>0&&i.push({label:n.quality,value:"quality",options:[...e,{label:n.auto,value:"0",isFullHD:!1}]}),t&&t.length>0&&i.push({label:n.captions,value:"captions",options:[{label:n.off,value:"off"},...t]}),i};var U2=({live:e,fullHDQualityBreak:t,qualities:o,captions:r,activeCaption:n,playbackRate:i,playbackQuality:s,changeSettings:l,onCaptionChange:a,fullscreen:c,adMode:p=!1})=>{let{i18n:u}=z(),f=ye(),m=Oe.default.useRef(null),y=Oe.default.useRef(s);y.current=s;let[v,S]=Oe.default.useState(_n),[T,b]=Oe.default.useState(!0),[x,C]=Oe.default.useState({quality:{label:u.auto,value:"0",isFullHD:!1},speed:{label:u.normal,value:"1"},captions:{label:u.off,value:"off"}});(0,Oe.useEffect)(()=>{let O=i.toString();C(I=>({...I,speed:{label:Wr({label:"speed",value:O,i18n:u}),value:O}}))},[u,i]),(0,Oe.useEffect)(()=>{var I;let O=(I=x.captions)==null?void 0:I.value;if(n===null&&O!=="off")C(D=>({...D,captions:{label:u.off,value:"off"}}));else if(n&&O!==n){let D=r==null?void 0:r.find(W=>W.language===n),V=(D==null?void 0:D.label)||n;C(W=>({...W,captions:{label:V,value:n}}))}},[n,r,u]),(0,Oe.useEffect)(()=>{if(s==null||s===0||o.length===0)return;let O=s.toString();if(T){let I=`${u.auto} (${O}p)`;C(D=>{var V,W;return((V=D.quality)==null?void 0:V.value)==="0"&&((W=D.quality)==null?void 0:W.label)===I?D:{...D,quality:{label:I,value:"0",isFullHD:t!==void 0&&Number(O)>=t}}})}},[s,o,u,t,T]);let M=Oe.default.useCallback(O=>{O.stopPropagation(),f(I=>({menuVisible:I.subMenuVisible?!1:!I.menuVisible,subMenuVisible:!1})),S(I=>({..._n,generalMenu:!I.speed&&!I.quality&&!I.captions?!I.generalMenu:!1}))},[f]),L=Oe.default.useCallback(O=>I=>{if(O==="quality")if(I==="0"){b(!0);let D=y.current,V=D&&D!==0?`${u.auto} (${D}p)`:u.auto;C(W=>({...W,quality:{label:V,value:"0",isFullHD:t!==void 0&&Number(D!=null?D:0)>=t}}))}else b(!1),C(D=>({...D,quality:{label:Wr({label:"quality",value:I,i18n:u}),value:I,isFullHD:t!==void 0&&Number(I!=null?I:"0")>=t}}));else if(O==="captions"){let D=r==null?void 0:r.find(W=>W.language===I),V=I==="off"?u.off:(D==null?void 0:D.label)||I;C(W=>({...W,captions:{label:V,value:I}})),a&&a(I==="off"?null:I)}else C(D=>({...D,[O]:{label:Wr({label:O,value:I,i18n:u}),value:I,isFullHD:t!==void 0&&Number(I!=null?I:"0")>=t}}));f({menuVisible:!1,subMenuVisible:!1}),S(_n)},[t,u,f,r,a]),w=Oe.default.useCallback(O=>{f({menuVisible:!1,subMenuVisible:!0}),S(I=>({...I,generalMenu:!1,[O]:!0}))},[f]),N=Oe.default.useCallback(O=>()=>{f({menuVisible:!0,subMenuVisible:!1}),S(I=>({...I,generalMenu:!0,[O]:!1}))},[f]);Oe.default.useEffect(()=>{let O=I=>{if(!m.current)return;(I.composedPath?I.composedPath():[]).includes(m.current)||m.current.contains(I.target)||(f({menuVisible:!1,subMenuVisible:!1}),S(_n))};return document.body.addEventListener("click",O),()=>document.body.removeEventListener("click",O)},[f]);let $=Oe.default.useMemo(()=>!r||r.length===0?[]:r.map(O=>({label:O.label,value:O.language})),[r]),E=Oe.default.useMemo(()=>Ad({qualityOptions:o,captionOptions:$,live:e,adMode:p,i18n:u}),[e,p,o,$,u]),k=Oe.default.useMemo(()=>Ie(c),[c]),g=Oe.default.useRef(x);return Oe.default.useEffect(()=>{var I,D,V,W;let O=g.current;if(O!==x){g.current=x;let U={};((I=O.speed)==null?void 0:I.value)!==((D=x.speed)==null?void 0:D.value)&&(U.speed=x.speed),((V=O.quality)==null?void 0:V.value)!==((W=x.quality)==null?void 0:W.value)&&(U.quality=x.quality),(U.speed||U.quality)&&l(U)}},[x,l]),{dropdownRef:m,settings:v,values:x,iconProps:k,settingsOptions:E,handleButtonClick:M,handleMenuItemClick:w,handleMenuClick:L,handleGoBack:N}},Rd=U2;var Bd=({live:e,qualities:t,captions:o,activeCaption:r,playbackRate:n,playbackQuality:i,fullHDQualityBreak:s,changeSettings:l,onCaptionChange:a,captionStyle:c,onCaptionStyleChange:p,fullscreen:u,adMode:f=!1})=>{var $;let{i18n:m}=z(),[y,v]=qe.default.useState(!1),{dropdownRef:S,settings:T,values:b,iconProps:x,settingsOptions:C,handleButtonClick:M,handleMenuItemClick:L,handleMenuClick:w,handleGoBack:N}=Rd({live:e,fullHDQualityBreak:s,qualities:t,captions:o,activeCaption:r,playbackRate:n,playbackQuality:i,changeSettings:l,onCaptionChange:a,fullscreen:u,adMode:f});return qe.default.useEffect(()=>{!T.captions&&y&&v(!1)},[T.captions,y]),C.length===0?null:qe.default.createElement(id,{ref:S},qe.default.createElement(be,{label:m.settings,fullscreen:u},qe.default.createElement(fd,{type:"button","aria-label":m.settings,"aria-expanded":T.generalMenu,onClick:M,isFullscreen:u,isFullHD:($=b.quality)==null?void 0:$.isFullHD,isExpanded:T.generalMenu},qe.default.createElement(Qi,{...x}))),qe.default.createElement(ad,{hiding:T.generalMenu,singleOption:e||t.length===0&&(!o||o.length===0),isFullscreen:u},qe.default.createElement(ld,null,C.map((E,k)=>{var g;return qe.default.createElement(ud,{key:k},qe.default.createElement(ie,{onClick:()=>L(E.value),isFullscreen:u,isText:!0},qe.default.createElement(cd,null,E.label),qe.default.createElement(dd,null,qe.default.createElement(pd,null,(g=b[E.value])==null?void 0:g.label),qe.default.createElement(jr,{width:28,height:28}))))}))),C.map((E,k)=>{var g;return qe.default.createElement(Md,{key:k,hiding:T[E.value]&&!(E.value==="captions"&&y),title:E.label,options:E.options,value:(g=b[E.value])==null?void 0:g.value,isFullscreen:u,onClick:E.value==="captions"?O=>{O==="__options__"?v(!0):w(E.value)(O)}:w(E.value),goBack:N(E.value),showOptionsButton:E.value==="captions",onOptionsClick:O=>{O.stopPropagation(),v(!0)}})}),y&&c&&qe.default.createElement(xd,{captionStyle:c,onStyleChange:p,onClose:()=>{v(!1),L("captions")},isFullscreen:u}))};Bd.propTypes={live:ft.default.bool.isRequired,qualities:ft.default.arrayOf(ft.default.shape({label:ft.default.string.isRequired,value:ft.default.string.isRequired}).isRequired).isRequired,captions:ft.default.array,playbackRate:ft.default.number.isRequired,playbackQuality:ft.default.number,fullHDQualityBreak:ft.default.number,changeSettings:ft.default.func.isRequired,onCaptionChange:ft.default.func,fullscreen:ft.default.bool.isRequired};var Dd=qe.default.memo(Bd,(e,t)=>e.live===t.live&&e.qualities===t.qualities&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.changeSettings===t.changeSettings&&e.onCaptionChange===t.onCaptionChange&&e.captionStyle===t.captionStyle&&e.onCaptionStyleChange===t.onCaptionStyleChange&&e.fullscreen===t.fullscreen&&e.adMode===t.adMode);var po=h(P()),Vn=h(Q());var Ur=h(P());var Da=({width:e=36,height:t=36,active:o=!1})=>o?Ur.default.createElement("svg",{height:t,width:e,viewBox:"-6 -6 36 36",fill:"currentColor"},Ur.default.createElement("path",{d:"M21.20 3.01L21 3H3L2.79 3.01C2.30 3.06 1.84 3.29 1.51 3.65C1.18 4.02 .99 4.50 1 5V19L1.01 19.20C1.05 19.66 1.26 20.08 1.58 20.41C1.91 20.73 2.33 20.94 2.79 20.99L3 21H21L21.20 20.98C21.66 20.94 22.08 20.73 22.41 20.41C22.73 20.08 22.94 19.66 22.99 19.20L23 19V5C23.00 4.50 22.81 4.02 22.48 3.65C22.15 3.29 21.69 3.06 21.20 3.01ZM9.03 8.08L9.29 8.16C9.79 8.35 10.24 8.65 10.60 9.05L10.77 9.26L10.83 9.34C10.96 9.55 11.01 9.80 10.96 10.05C10.92 10.29 10.79 10.51 10.59 10.66C10.40 10.81 10.15 10.89 9.91 10.87C9.66 10.85 9.43 10.74 9.26 10.57L9.19 10.49L9.11 10.39C8.98 10.24 8.81 10.12 8.62 10.05L8.54 10.02C8.32 9.97 8.10 10.00 7.91 10.11C7.67 10.24 7.48 10.43 7.35 10.67L7.28 10.79C7.09 11.16 6.99 11.58 7 12L7.00 12.16C7.02 12.52 7.11 12.88 7.28 13.20L7.35 13.32C7.48 13.56 7.67 13.75 7.91 13.88L7.99 13.92C8.16 14.00 8.35 14.02 8.54 13.97L8.62 13.94C8.85 13.85 9.05 13.70 9.19 13.50L9.26 13.43C9.44 13.24 9.68 13.13 9.93 13.12C10.19 13.11 10.44 13.20 10.63 13.37C10.82 13.53 10.94 13.77 10.97 14.02C11.00 14.27 10.93 14.53 10.77 14.73C10.39 15.23 9.88 15.61 9.29 15.83L9.03 15.91C8.43 16.06 7.79 16.01 7.21 15.77L6.97 15.65C6.42 15.35 5.95 14.90 5.64 14.36L5.50 14.12C5.21 13.55 5.04 12.92 5.00 12.27L5 12C4.99 11.26 5.17 10.53 5.50 9.87L5.64 9.63C5.96 9.09 6.42 8.64 6.97 8.34C7.60 8.00 8.34 7.91 9.03 8.08ZM17.03 8.08L17.29 8.16C17.79 8.35 18.24 8.65 18.60 9.05L18.77 9.26L18.83 9.34C18.96 9.55 19.01 9.80 18.96 10.05C18.92 10.29 18.79 10.51 18.59 10.66C18.40 10.81 18.15 10.89 17.91 10.87C17.66 10.85 17.43 10.74 17.26 10.57L17.19 10.49L17.11 10.39C16.98 10.24 16.81 10.12 16.62 10.05L16.54 10.02C16.32 9.97 16.10 10.00 15.91 10.11C15.67 10.24 15.48 10.43 15.35 10.67L15.28 10.79C15.09 11.16 14.99 11.58 15 12L15.00 12.16C15.02 12.52 15.11 12.88 15.28 13.20L15.35 13.32C15.48 13.56 15.67 13.75 15.91 13.88L15.99 13.92C16.16 14.00 16.35 14.02 16.54 13.97L16.62 13.94C16.85 13.85 17.05 13.70 17.19 13.50L17.26 13.43C17.44 13.24 17.68 13.13 17.93 13.12C18.19 13.11 18.44 13.20 18.63 13.37C18.82 13.53 18.94 13.77 18.97 14.02C19.00 14.27 18.93 14.53 18.77 14.73C18.39 15.23 17.88 15.61 17.29 15.83L17.03 15.91C16.43 16.06 15.79 16.01 15.21 15.77L14.97 15.65C14.42 15.35 13.95 14.90 13.64 14.36L13.50 14.12C13.21 13.55 13.04 12.92 13.00 12.27L13 12C12.99 11.26 13.17 10.53 13.50 9.87L13.64 9.63C13.96 9.09 14.42 8.64 14.97 8.34C15.60 8.00 16.34 7.91 17.03 8.08Z"})):Ur.default.createElement("svg",{height:t,width:e,viewBox:"-6 -6 36 36",fill:"currentColor"},Ur.default.createElement("path",{d:"M21.20 3.01L21 3H3L2.79 3.01C2.30 3.06 1.84 3.29 1.51 3.65C1.18 4.02 .99 4.50 1 5V19L1.01 19.20C1.05 19.66 1.26 20.08 1.58 20.41C1.91 20.73 2.33 20.94 2.79 20.99L3 21H21L21.20 20.98C21.66 20.94 22.08 20.73 22.41 20.41C22.73 20.08 22.94 19.66 22.99 19.20L23 19V5C23.00 4.50 22.81 4.02 22.48 3.65C22.15 3.29 21.69 3.06 21.20 3.01ZM3 19V5H21V19H3ZM6.97 8.34C6.42 8.64 5.96 9.09 5.64 9.63L5.50 9.87C5.16 10.53 4.99 11.26 5 12L5.00 12.27C5.04 12.92 5.21 13.55 5.50 14.12L5.64 14.36C5.96 14.90 6.42 15.35 6.97 15.65L7.21 15.77C7.79 16.01 8.43 16.06 9.03 15.91L9.29 15.83C9.88 15.61 10.39 15.23 10.77 14.73C10.93 14.53 11.00 14.27 10.97 14.02C10.94 13.77 10.82 13.53 10.63 13.37C10.44 13.20 10.19 13.11 9.93 13.12C9.68 13.13 9.44 13.24 9.26 13.43L9.19 13.50C9.05 13.70 8.85 13.85 8.62 13.94L8.54 13.97C8.35 14.02 8.16 14.00 7.99 13.92L7.91 13.88C7.67 13.75 7.48 13.56 7.35 13.32L7.28 13.20C7.11 12.88 7.02 12.52 7.00 12.16L7 12C6.99 11.58 7.09 11.16 7.28 10.79L7.35 10.67C7.48 10.43 7.67 10.24 7.91 10.11C8.10 10.00 8.32 9.97 8.54 10.02L8.62 10.05C8.81 10.12 8.98 10.24 9.11 10.39L9.19 10.49L9.26 10.57C9.43 10.74 9.66 10.85 9.91 10.87C10.15 10.89 10.40 10.81 10.59 10.66C10.79 10.51 10.92 10.29 10.96 10.05C11.01 9.80 10.96 9.55 10.83 9.34L10.77 9.26L10.60 9.05C10.24 8.65 9.79 8.35 9.29 8.16L9.03 8.08C8.34 7.91 7.60 8.00 6.97 8.34ZM14.97 8.34C14.42 8.64 13.96 9.09 13.64 9.63L13.50 9.87C13.16 10.53 12.99 11.26 13 12L13.00 12.27C13.04 12.92 13.21 13.55 13.50 14.12L13.64 14.36C13.96 14.90 14.42 15.35 14.97 15.65L15.21 15.77C15.79 16.01 16.43 16.06 17.03 15.91L17.29 15.83C17.88 15.61 18.39 15.23 18.77 14.73C18.93 14.53 19.00 14.27 18.97 14.02C18.94 13.77 18.82 13.53 18.63 13.37C18.44 13.20 18.19 13.11 17.93 13.12C17.68 13.13 17.44 13.24 17.26 13.43L17.19 13.50C17.05 13.70 16.85 13.85 16.62 13.94L16.54 13.97C16.35 14.02 16.16 14.00 15.99 13.92L15.91 13.88C15.67 13.75 15.48 13.56 15.35 13.32L15.28 13.20C15.11 12.88 15.02 12.52 15.00 12.16L15 12C14.99 11.58 15.09 11.16 15.28 10.79L15.35 10.67C15.48 10.43 15.67 10.24 15.91 10.11C16.10 10.00 16.32 9.97 16.54 10.02L16.62 10.05C16.81 10.12 16.98 10.24 17.11 10.39L17.19 10.49L17.26 10.57C17.43 10.74 17.66 10.85 17.91 10.87C18.15 10.89 18.40 10.81 18.59 10.66C18.79 10.51 18.92 10.29 18.96 10.05C19.01 9.80 18.96 9.55 18.83 9.34L18.77 9.26L18.60 9.05C18.24 8.65 17.79 8.35 17.29 8.16L17.03 8.08C16.34 7.91 15.60 8.00 14.97 8.34Z"}));Da.displayName="CaptionsIcon";Da.propTypes=J;var os=Ur.default.memo(Da,(e,t)=>e.width===t.width&&e.height===t.height&&e.active===t.active);var qd=({fullscreen:e,captions:t,activeCaption:o,onCaptionChange:r})=>{let{i18n:n}=z(),i=po.default.useMemo(()=>Ie(e),[e]),s=po.default.useRef(null);po.default.useEffect(()=>{o&&(s.current=o)},[o]);let l=po.default.useCallback(a=>{var c,p;if(a.stopPropagation(),o)r(null);else{let u=s.current||((p=(c=t[0])==null?void 0:c.language)!=null?p:null);u&&r(u)}},[o,t,r]);return!t||t.length===0?null:po.default.createElement(be,{label:n.captions,fullscreen:e},po.default.createElement(ie,{type:"button","aria-label":n.captions,onClick:l,isFullscreen:e},po.default.createElement(os,{...i,active:!!o})))};qd.propTypes={fullscreen:Vn.default.bool.isRequired,captions:Vn.default.array,activeCaption:Vn.default.string,onCaptionChange:Vn.default.func.isRequired};var Nd=po.default.memo(qd,(e,t)=>e.fullscreen===t.fullscreen&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.onCaptionChange===t.onCaptionChange);var $n=h(P());var X2=({fullscreen:e,contextMenuRef:t,pictureInPictureEnabled:o,pip:r,loop:n=!1,requestPictureInPicture:i,exitPictureInPicture:s,onLoopClick:l})=>{let a=ye(),{i18n:c}=z(),[p,u]=$n.default.useState({x:0,y:0}),f=$n.default.useCallback(v=>{var $,E;v.preventDefault();let S=(($=t.current)==null?void 0:$.offsetWidth)||0,T=((E=t.current)==null?void 0:E.offsetHeight)||0,b=v.currentTarget.getBoundingClientRect(),x=v.clientX-b.left,C=v.clientY-b.top,M=b.width,L=b.height,w=x+S>M?x-S:x,N=C+T>L?C-T:C;u({x:w,y:N}),a({type:"contextMenuVisible",payload:!0})},[t,a]),m=$n.default.useMemo(()=>Ie(e),[e]),y=$n.default.useMemo(()=>{let v=[{action:l,label:c.loop,iconType:"loop",iconProps:m,isCheckable:!0,defaultChecked:n}];return o&&v.push({action:r?s:i,label:c.pictureInPicture,iconType:"pip",iconProps:m,isCheckable:!1,defaultChecked:!1}),v},[m,c,o,r,n,i,s,l]);return{handleContextMenu:f,contextMenuPosition:p,contextMenuItems:y}},rs=X2;var Dt=h(P());var zn=h(P());var Fd=zn.default.forwardRef(({showing:e,positionX:t,positionY:o,...r},n)=>zn.default.createElement("div",{ref:n,...r}));Fd.displayName="StyledContextMenu";var _d=d(Fd)`
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

  ${({showing:e,positionX:t,positionY:o})=>`
        display: ${e?"block":"none"};
        top: ${o}px;
        left: ${t}px;
    `}
`,Vd=zn.default.forwardRef(({isFullscreen:e,...t},o)=>zn.default.createElement("div",{ref:o,...t}));Vd.displayName="ContextMenuItem";var $d=d(Vd)`
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
`,zd=d.span`
  padding: 0 12px;
  font-size: 118%;
`,Hd=d.div`
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
`;Ht();var ns=h(P());var qa=({width:e=36,height:t=36})=>ns.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},ns.default.createElement("path",{d:"M4.8 19.582 13.237 28.05 31.2 9.877 29.295 7.95 13.237 24.197 6.705 17.586Z"}));qa.displayName="CheckedIcon";qa.propTypes=J;var jd=ns.default.memo(qa,re);var is=h(P());var Na=({width:e=36,height:t=36})=>is.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},is.default.createElement("path",{d:"M 21.333 23.666 C 21.333 23.758 21.3 23.835 21.235 23.902 C 21.168 23.967 21.091 24 21 24 L 11 24 C 10.944 24 10.898 23.995 10.859 23.979 C 10.821 23.966 10.789 23.942 10.765 23.906 C 10.741 23.871 10.723 23.844 10.708 23.822 C 10.695 23.803 10.684 23.762 10.678 23.703 C 10.671 23.644 10.667 23.604 10.667 23.583 L 10.667 17.335 L 8.667 17.335 C 8.487 17.335 8.329 17.266 8.198 17.134 C 8.067 17.004 8 16.846 8 16.666 C 8 16.5 8.052 16.358 8.156 16.239 L 11.489 12.24 C 11.621 12.087 11.792 12.01 12 12.01 C 12.208 12.01 12.379 12.087 12.511 12.24 L 15.844 16.239 C 15.948 16.358 16 16.5 16 16.666 C 16 16.846 15.933 17.004 15.803 17.134 C 15.671 17.266 15.513 17.335 15.333 17.335 L 13.333 17.335 L 13.333 21.334 L 19.333 21.334 C 19.444 21.334 19.532 21.372 19.593 21.448 L 21.26 23.448 C 21.309 23.518 21.333 23.59 21.333 23.666 Z M 28 19.334 C 28 19.5 27.948 19.642 27.844 19.761 L 24.511 23.76 C 24.372 23.92 24.201 24 24 24 C 23.799 24 23.628 23.92 23.489 23.76 L 20.156 19.761 C 20.052 19.642 20 19.5 20 19.334 C 20 19.154 20.067 18.996 20.198 18.866 C 20.329 18.734 20.487 18.667 20.667 18.667 L 22.667 18.667 L 22.667 14.666 L 16.667 14.666 C 16.556 14.666 16.468 14.626 16.407 14.542 L 14.74 12.542 C 14.691 12.478 14.667 12.41 14.667 12.334 C 14.667 12.243 14.7 12.166 14.765 12.098 C 14.832 12.034 14.909 12 15 12 L 25 12 C 25.056 12 25.103 12.007 25.141 12.022 C 25.179 12.034 25.211 12.058 25.235 12.094 C 25.259 12.13 25.278 12.156 25.292 12.178 C 25.305 12.199 25.316 12.238 25.323 12.298 C 25.329 12.356 25.333 12.396 25.333 12.418 L 25.333 18.667 L 27.333 18.667 C 27.513 18.667 27.671 18.734 27.803 18.866 C 27.933 18.996 28 19.154 28 19.334 Z"}));Na.displayName="InLoopIcon";Na.propTypes=J;var Wd=is.default.memo(Na,re);var ss=h(P());var Fa=({width:e=36,height:t=36})=>ss.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},ss.default.createElement("path",{d:"M25 17H17v6H25zM29 25V10.981a1.989 1.989 0 0 0 -2 -1.981H9a1.989 1.989 0 0 0 -2 1.981V25c0 1.1 0.9 2 2 2h18c1.1 0 2 -0.9 2 -2m-2 0.019H9V10.969h18z"}));Fa.displayName="PipIcon";Fa.propTypes=J;var Ud=ss.default.memo(Fa,re);var Y2={loop:Wd,pip:Ud},Xd=Dt.default.forwardRef(({fullscreen:e,position:t,menuItems:o},r)=>{let n=z(),i=ye(),s=Dt.default.useRef();return Dt.default.useEffect(()=>{let l=a=>{var u;let c=a.composedPath?a.composedPath():[];s.current&&c.includes(s.current)||((u=s.current)==null?void 0:u.contains(a.target))||i({type:"contextMenuVisible",payload:!1})};return window.addEventListener("click",l),()=>{window.removeEventListener("click",l)}},[i,s]),Dt.default.createElement(_d,{ref:$l([r,s]),showing:n.contextMenuVisible,positionX:t.x,positionY:t.y,"data-itemindex":"0","aria-checked":n.contextMenuVisible},o.map((l,a)=>{let c=Y2[l.iconType];return Dt.default.createElement($d,{key:a,onClick:()=>{l.action(),i({type:"contextMenuVisible",payload:!1})},isFullscreen:e},c&&Dt.default.createElement(c,{...l.iconProps}),Dt.default.createElement(zd,null,l.label),l.isCheckable&&l.defaultChecked&&Dt.default.createElement(Hd,null,Dt.default.createElement(jd,{width:24,height:24})))}))});Xd.displayName="ContextMenu";var Hn=Dt.default.memo(Xd,(e,t)=>e.fullscreen===t.fullscreen&&e.position===t.position&&e.menuItems===t.menuItems);var je=h(P()),Xr=h(Q());Ne();var jn=h(P());var Yd=jn.default.forwardRef(({positionX:e,positionY:t,isDragging:o,...r},n)=>jn.default.createElement("div",{ref:n,...r}));Yd.displayName="CaptionContainer";var Gd=d(Yd)`
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
`,Kd=jn.default.forwardRef(({backgroundColor:e,...t},o)=>jn.default.createElement("div",{ref:o,...t}));Kd.displayName="CaptionWindow";var Zd=d(Kd)`
  padding: 4px 8px;
  border-radius: 4px;
  width: max-content;
  max-width: 80vw;
  ${({backgroundColor:e})=>`background-color: ${e};`}
`,Qd=d.span`
  display: block;
  padding: 2px 6px;
  border-radius: 2px;
  line-height: 1.4;
  font-weight: 500;
  white-space: pre-wrap;
  word-wrap: break-word;
`;var G2=74,K2=88,Jd=74,Z2=88,ef=12,_a=42,Va=58,Q2=40,J2=60,tf=({cues:e,currentTime:t,captionStyle:o,isFullscreen:r,controlsVisible:n})=>{let i=je.default.useRef(null),{hiding:s}=z(),l=ye(),a=n||!s,c=a?G2:K2,[p,u]=je.default.useState({x:50,y:Jd}),[f,m]=je.default.useState(!1),y=je.default.useRef(!1),v=je.default.useRef({x:0,y:0,startX:0,startY:0}),S=je.default.useMemo(()=>!e||e.length===0?[]:ni(e,t),[e,t]),T=je.default.useCallback(g=>{var D,V,W,U,R,B,te,j;g.preventDefault(),g.stopPropagation();let O=(U=(W=g.clientX)!=null?W:(V=(D=g.touches)==null?void 0:D[0])==null?void 0:V.clientX)!=null?U:0,I=(j=(te=g.clientY)!=null?te:(B=(R=g.touches)==null?void 0:R[0])==null?void 0:B.clientY)!=null?j:0;v.current={x:O,y:I,startX:p.x,startY:p.y},m(!0),l({type:"captionDragging",payload:!0})},[p,l]),b=je.default.useCallback(g=>{var ce,he,se,Te,Le,_e,Ve,gt;if(!f||!i.current)return;let O=i.current.parentElement;if(!O)return;let I=(Te=(se=g.clientX)!=null?se:(he=(ce=g.touches)==null?void 0:ce[0])==null?void 0:he.clientX)!=null?Te:0,D=(gt=(Ve=g.clientY)!=null?Ve:(_e=(Le=g.touches)==null?void 0:Le[0])==null?void 0:_e.clientY)!=null?gt:0,V=O.getBoundingClientRect(),U=i.current.getBoundingClientRect().width/2/V.width*100,R=(I-v.current.x)/V.width*100,B=(D-v.current.y)/V.height*100,te=Math.max(U,Math.min(100-U,v.current.startX+R)),j=Math.max(ef,Math.min(c,v.current.startY+B));if(a&&i.current){let nt=i.current.offsetHeight/V.height*100,Ee=i.current.offsetWidth/V.width*100,Nt=j,lt=j+nt,ho=te-Ee/2;if(te+Ee/2>Q2&&ho<J2&&lt>_a&&Nt<Va){let Qt=lt-_a,Lt=Va-Nt;Qt<=Lt?j=_a-nt:j=Va,j=Math.max(ef,Math.min(c,j))}}u({x:te,y:j})},[f,c,a]),x=je.default.useCallback(()=>{m(!1),l({type:"captionDragging",payload:!1}),u(g=>{let I=g.y>=c-6;return y.current=!I,g})},[c,l]);if(je.default.useEffect(()=>{u(g=>y.current?{...g,y:Math.min(g.y,c)}:{...g,y:a?Jd:Z2})},[c,a]),je.default.useEffect(()=>(f&&(document.addEventListener("mousemove",b),document.addEventListener("mouseup",x),document.addEventListener("touchmove",b),document.addEventListener("touchend",x)),()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",x)}),[f,b,x]),S.length===0)return null;let C=parseInt(o.fontSize)/100,L=`${(r?24:16)*C}px`,w=gr(o.fontColor,o.fontOpacity),N=gr(o.backgroundColor,o.backgroundOpacity),$=gr(o.windowColor,o.windowOpacity),E=ii(o.edgeStyle,"rgba(0,0,0,0.8)"),k=o.fontFamily==="small-caps"?{fontFamily:"sans-serif",fontVariant:"small-caps"}:{fontFamily:o.fontFamily,fontVariant:"normal"};return je.default.createElement(Gd,{ref:i,positionX:p.x,positionY:p.y,onMouseDown:T,onTouchStart:T,isDragging:f},je.default.createElement(Zd,{backgroundColor:$},S.map((g,O)=>je.default.createElement(Qd,{key:`${g.startTime}-${O}`,style:{fontSize:L,color:w,backgroundColor:N,textShadow:E,...k}},g.text))))};tf.propTypes={cues:Xr.default.array,currentTime:Xr.default.number.isRequired,captionStyle:Xr.default.object.isRequired,isFullscreen:Xr.default.bool,controlsVisible:Xr.default.bool};var as=je.default.memo(tf);var Wn=h(P());Ne();var of="caption_style",eh=({captions:e,activeCaption:t})=>{let[o,r]=Wn.default.useState([]),[n,i]=Wn.default.useState(()=>{let l=hr(of);if(l)try{return{...xo,...JSON.parse(l)}}catch{return xo}return xo});Wn.default.useEffect(()=>{if(!t||!e||e.length===0){r([]);return}let l=e.find(c=>c.language===t);if(!l){r([]);return}let a=!1;return(async()=>{try{let p=await(await fetch(l.src)).text();if(a)return;let u=ri(p);r(u)}catch(c){console.error("Failed to load caption file:",c),a||r([])}})(),()=>{a=!0}},[t,e]);let s=Wn.default.useCallback(l=>{i(l),yr(of,JSON.stringify(l),365)},[]);return{cues:o,captionStyle:n,updateCaptionStyle:s}},ls=eh;var Oo=h(P()),th=({ads:e,currentTime:t,duration:o,ended:r,onPauseClick:n})=>{let i=e!=null,s=i&&typeof e.skipAfter=="number"&&e.skipAfter>0,l=Oo.default.useMemo(()=>!i||!s?!1:t>=e.skipAfter,[i,s,t,e]),a=Oo.default.useMemo(()=>{if(!i||!s)return 0;let m=Math.ceil(e.skipAfter-t);return m>0?m:0},[i,s,t,e]),c=Oo.default.useMemo(()=>{if(!i)return 0;if(s){let m=t/e.skipAfter;return m>1?1:m}return o>0?t/o:0},[i,s,t,o,e]),p=Oo.default.useRef(!1);Oo.default.useEffect(()=>{i&&r&&!p.current&&(p.current=!0,e.onAdComplete&&e.onAdComplete()),i||(p.current=!1)},[i,r,e]);let u=Oo.default.useCallback(()=>{i&&e.onSkip&&e.onSkip()},[i,e]),f=Oo.default.useCallback(()=>{i&&(n&&n(),e.onAdClick&&e.onAdClick(),e.url&&window.open(e.url,"_blank","noopener,noreferrer"))},[i,e,n]);return{isAdActive:i,hasSkipTimer:s,canSkip:l,skipCountdown:a,adProgress:c,onSkipClick:u,onAdClick:f}},Yr=th;var Ae=h(P()),ot=h(Q());var mt=h(P());var rf=mt.default.forwardRef(({hiding:e,isFullscreen:t,...o},r)=>mt.default.createElement("div",{ref:r,...o}));rf.displayName="AdBannerWrapper";var nf=d(rf)`
  position: absolute;
  left: 12px;
  z-index: 10;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  transition: bottom 0.25s cubic-bezier(0.4, 0, 1, 1);
  ${({hiding:e,isFullscreen:t})=>e?`
    bottom: 8px;
  `:t?`
    bottom: 64px;
  `:`
    bottom: 44px;
  `}
  ${({isFullscreen:e})=>e?`
    left: 20px;
    gap: 6px;
    font-size: 145% !important;
  `:""}
`,sf=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  padding: 6px 10px;
  pointer-events: auto;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`,af=d.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
`,lf=d.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
`,uf=d.span`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
`,cf=d.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
`,pf=d.button`
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition:
    background 0.2s,
    border-color 0.2s;
  text-shadow: none;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #fff;
  }
`,df=mt.default.forwardRef(({isFullscreen:e,...t},o)=>mt.default.createElement("div",{ref:o,...t}));df.displayName="SkipWrapper";var ff=d(df)`
  position: absolute;
  right: 0;
  z-index: 10;
  pointer-events: none;
  line-height: normal;
  ${({isFullscreen:e})=>e?`
    bottom: 92px;
  `:`
    bottom: 74px;
  `}
`,mf=mt.default.forwardRef(({canSkip:e=!0,isFullscreen:t,...o},r)=>mt.default.createElement("button",{ref:r,...o}));mf.displayName="SkipButton";var hf=d(mf)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 0;
  border-radius: 0;
  font-weight: 400;
  pointer-events: auto;
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s;
  text-shadow: none;
  line-height: 1;
  white-space: nowrap;
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid #fff;
    border-right: 0;
  }
  ${({isFullscreen:e})=>e?`
      font-size: 145% !important;
      width: 86px;
      height: 44px;
  `:`
      font-size: 15px;
      width: 70px;
      height: 38px;
  `}
`,yf=mt.default.forwardRef(({isFullscreen:e,...t},o)=>mt.default.createElement("div",{ref:o,...t}));yf.displayName="SkipMessage";var gf=d(yf)`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 0;
  pointer-events: none;
  transition: opacity 0.4s cubic-bezier(0, 0, 0.2, 1);
  ${({isFullscreen:e})=>e?`
    height: 50px;
    width: 110px;
  `:`
    height: 43px;
    width: 97px;
  `}
`,bf=mt.default.forwardRef(({isFullscreen:e,...t},o)=>mt.default.createElement("span",{ref:o,...t}));bf.displayName="SkipCountdownText";var Sf=d(bf)`
  display: inline-block;
  font-weight: 500;
  text-align: center;
  padding: 0 8px;
  vertical-align: middle;
  white-space: pre;
  color: #fff;
  ${({isFullscreen:e})=>e?`
    font-size: 20px;
  `:`
    font-size: 14px;
  `}
`,vf=d.img`
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 100%;
  object-fit: fill;
  border-radius: 2px;
  flex-shrink: 0;
`,xf=d.svg`
  width: 18px;
  height: 18px;
  fill: #fff;
  flex-shrink: 0;
`,Cf=d.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  display: flex;
  align-items: center;
  gap: 8px;
`,wf=mt.default.forwardRef(({hiding:e,isFullscreen:t,...o},r)=>mt.default.createElement("div",{ref:r,...o}));wf.displayName="AdTimeSliderWrapper";var kf=d(wf)`
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 9;
  transition: bottom 0.25s cubic-bezier(0.4, 0, 1, 1);
  ${({hiding:e,isFullscreen:t})=>e?`
    bottom: -1px;
  `:t?`
    bottom: 53px;
  `:`
    bottom: 35px;
  `}
`;var oh=()=>Ae.default.createElement(xf,{viewBox:"11 10 14 16",xmlns:"http://www.w3.org/2000/svg"},Ae.default.createElement("path",{d:"M 13.211 23.887 C 13.082 23.986 12.972 24.02 12.883 23.989 C 12.794 23.958 12.75 23.874 12.75 23.739 L 12.75 12.261 C 12.75 12.126 12.794 12.042 12.883 12.011 C 12.972 11.98 13.082 12.014 13.211 12.113 L 20.492 17.649 C 20.553 17.696 20.598 17.745 20.625 17.797 L 20.625 12.51 C 20.625 12.375 20.69 12.258 20.82 12.159 C 20.95 12.061 21.104 12.011 21.281 12.011 L 22.594 12.011 C 22.771 12.011 22.925 12.061 23.055 12.159 C 23.185 12.258 23.25 12.375 23.25 12.51 L 23.25 23.49 C 23.25 23.625 23.185 23.742 23.055 23.841 C 22.925 23.939 22.771 23.989 22.594 23.989 L 21.281 23.989 C 21.104 23.989 20.95 23.939 20.82 23.841 C 20.69 23.742 20.625 23.625 20.625 23.49 L 20.625 18.203 C 20.598 18.255 20.553 18.304 20.492 18.351 Z"})),Pf=({ads:e,canSkip:t,skipCountdown:o,hasSkipTimer:r,adProgress:n,onSkipClick:i,onAdClick:s,hiding:l,poster:a,menuOpen:c=!1,fullscreen:p=!1})=>{let{i18n:u}=z();if(!e)return null;let f=c?{zIndex:0}:void 0,m="";try{m=new URL(e.url).hostname}catch{m=e.url}return Ae.default.createElement(Ae.default.Fragment,null,Ae.default.createElement(nf,{hiding:l,isFullscreen:p,style:f},Ae.default.createElement(sf,{onClick:s,role:"link","aria-label":e.title},e.icon&&Ae.default.createElement(af,{src:e.icon,alt:""}),Ae.default.createElement(lf,null,Ae.default.createElement(uf,null,e.title),Ae.default.createElement(cf,null,m)),Ae.default.createElement(pf,{type:"button"},e.buttonText)),Ae.default.createElement(Cf,null,u.sponsored," \u2022 ",m)),r&&Ae.default.createElement(ff,{isFullscreen:p,style:f},t?Ae.default.createElement(hf,{onClick:i,"aria-label":u.skipAd,isFullscreen:p,canSkip:!0},u.skipAd,Ae.default.createElement(oh,null)):Ae.default.createElement(gf,{isFullscreen:p},Ae.default.createElement(Sf,{isFullscreen:p},o),a&&Ae.default.createElement(vf,{src:a,alt:"",width:"73",height:"41",draggable:"false"}))))};Pf.propTypes={ads:ot.default.shape({title:ot.default.string.isRequired,url:ot.default.string.isRequired,buttonText:ot.default.string.isRequired,icon:ot.default.string,skipAfter:ot.default.number}),canSkip:ot.default.bool.isRequired,skipCountdown:ot.default.number.isRequired,hasSkipTimer:ot.default.bool.isRequired,adProgress:ot.default.number.isRequired,onSkipClick:ot.default.func.isRequired,onAdClick:ot.default.func.isRequired,hiding:ot.default.bool.isRequired,poster:ot.default.string};var us=Ae.default.memo(Pf,(e,t)=>e.ads===t.ads&&e.canSkip===t.canSkip&&e.skipCountdown===t.skipCountdown&&e.hasSkipTimer===t.hasSkipTimer&&e.adProgress===t.adProgress&&e.onSkipClick===t.onSkipClick&&e.onAdClick===t.onAdClick&&e.hiding===t.hiding&&e.poster===t.poster&&e.fullscreen===t.fullscreen&&e.menuOpen===t.menuOpen);var Tf=K.default.forwardRef(({videoRef:e,playerRef:t,live:o=!1,hasResource:r=!1,hasAudio:n,prevented:i,loading:s,paused:l,ended:a,seeking:c,waiting:p,duration:u,buffered:f=null,currentTime:m,muted:y,volume:v,pictureInPictureEnabled:S,pip:T,fullscreen:b,qualities:x,captions:C,activeCaption:M,spriteVTTFile:L,chapters:w,heatmapData:N,fullHDQualityBreak:$,playbackRate:E,playbackQuality:k,loop:g,poster:O,onPlayClick:I,onPauseClick:D,onTogglePlay:V,changePlaybackRate:W,changePlayBackQuality:U,changeVolume:R,onMutedClick:B,changeCurrentTime:te,requestPictureInPicture:j,exitPictureInPicture:ce,requestFullscreen:he,exitFullscreen:se,onSeeking:Te,onLoopClick:Le,onCaptionChange:_e,onPreventedClick:Ve,onPrevious:gt,onNext:nt,showNavButtons:Ee,ads:Nt=null,kernelMsg:lt=null},ho)=>{let Ft=ye(),{hiding:bt,menuVisible:Qt,subMenuVisible:Lt}=z(),[ar,yo]=K.default.useState(!1),Jt=K.default.useRef(),Ro=K.default.useRef(null),{showControls:_t,hideControls:Bo}=td({hasResource:r,loading:s,prevented:i,paused:l,ended:a,waiting:p,seeking:c,kernelMsg:lt}),{contextMenuItems:en,contextMenuPosition:tn,handleContextMenu:on}=rs({fullscreen:b,contextMenuRef:Ro,pip:T,loop:g,pictureInPictureEnabled:S,requestPictureInPicture:j,exitPictureInPicture:ce,onLoopClick:Le}),{isAdActive:St,hasSkipTimer:lr,canSkip:ur,skipCountdown:Do,adProgress:it,onSkipClick:rn,onAdClick:qo}=Yr({ads:Nt,currentTime:m,duration:u,ended:a,onPauseClick:D}),No=K.default.useCallback(()=>{},[]),{getChapterAtTime:ut}=Mo({chapters:w,duration:u}),go=K.default.useMemo(()=>ut(m),[ut,m]),{cues:cr,captionStyle:pr,updateCaptionStyle:bo}=ls({captions:C,activeCaption:M});K.default.useEffect(()=>{Ft({videoRef:e,playerRef:t})},[e,t,Ft]),K.default.useImperativeHandle(ho,()=>({showControls:_t,hideControls:Bo}),[_t,Bo]),K.default.useEffect(()=>{if(t.current){let Xe=t.current,Vt=vt=>{let $t=Ri[vt.which||vt.keyCode]||Bi[vt.key];clearTimeout(Jt.current),$t==="ARROW_UP_KEY"||$t==="ARROW_DOWN_KEY"?(yo(!0),Jt.current=setTimeout(()=>yo(!1),2e3)):yo(!1)};return Xe.addEventListener("keydown",Vt),()=>{clearTimeout(Jt.current),Xe.removeEventListener("keydown",Vt)}}},[y,v,t]);let eo=K.default.useCallback(({quality:Xe,speed:Vt})=>{var vt;if(Vt&&W(Number((vt=Vt.value)!=null?vt:1)),Xe){let $t=Number(Xe.value);U(Number.isNaN($t)?0:$t)}},[W,U]);return K.default.createElement(Wt,{onContextMenu:on,onMouseLeave:Bo,onMouseMove:_t,onTouchStart:_t,onMouseEnter:_t,onClick:_t},K.default.createElement(xn,{hasResource:r,prevented:i,paused:l,muted:y,currentTime:m,onClick:Ve}),O&&K.default.createElement(wn,{style:{opacity:m<=0||a?1:0}},K.default.createElement(kn,{style:{backgroundImage:`url(${O})`}})),K.default.createElement(Cc,null,K.default.createElement(wc,{style:{display:ar?"inline-block":"none"}},Math.round(v*100),"%")),K.default.createElement(Hn,{ref:Ro,fullscreen:b,position:tn,menuItems:en}),L&&K.default.createElement(Dn,{spriteVTTFile:L,duration:u,seekTime:m,visible:c}),M&&cr.length>0&&K.default.createElement(as,{cues:cr,currentTime:m,captionStyle:pr,isFullscreen:b,controlsVisible:l||a||s||p}),!St&&K.default.createElement(pa,{hasResource:r,loading:s,paused:l,ended:a,waiting:p,seeking:c,kernelMsg:lt,onClick:V}),St&&K.default.createElement(pa,{hasResource:r,loading:s,paused:l,ended:!1,waiting:p,seeking:!1,kernelMsg:lt,onClick:V}),K.default.createElement(kc,{style:{opacity:bt?0:1}}),St&&o===!1&&K.default.createElement(kf,{hiding:bt,isFullscreen:b},K.default.createElement(ba,{spriteVTTFile:"",chapters:[],heatmapData:[],currentTime:m,duration:u,buffered:f,onChange:No,onSeeking:No,fullscreen:b,disabled:!0,adMode:!0})),St&&K.default.createElement(us,{ads:Nt,canSkip:ur,skipCountdown:Do,hasSkipTimer:lr,adProgress:it,onSkipClick:rn,onAdClick:qo,hiding:bt,poster:O,menuOpen:Qt||Lt,fullscreen:b}),K.default.createElement(Ec,null,o===!1&&!St&&K.default.createElement(ba,{spriteVTTFile:L,chapters:w,heatmapData:N,currentTime:m,duration:u,buffered:f,onChange:te,onSeeking:Te,fullscreen:b,disabled:!1,adMode:!1}),K.default.createElement(Dc,{extra:K.default.createElement(K.default.Fragment,null,K.default.createElement(Nd,{fullscreen:b,captions:C,activeCaption:M,onCaptionChange:_e}),K.default.createElement(Dd,{live:o,qualities:x,captions:C,activeCaption:M,playbackRate:E,playbackQuality:k,fullscreen:b,fullHDQualityBreak:$,changeSettings:eo,onCaptionChange:_e,captionStyle:pr,onCaptionStyleChange:bo,adMode:St}),K.default.createElement(ed,{fullscreen:b,requestFullscreen:he,exitFullscreen:se})),fullscreen:b},K.default.createElement(Ui,{fullscreen:b,onPrevious:gt,showNavButtons:Ee}),K.default.createElement(Yp,{fullscreen:b,paused:l,ended:a,onPauseClick:D,onPlayClick:I}),K.default.createElement(Xi,{fullscreen:b,onNext:nt,showNavButtons:Ee}),K.default.createElement($p,{fullscreen:b,isMuted:y,forceMuted:!n,volume:v,onMutedClick:B,changeVolume:R}),K.default.createElement(Wp,{live:o,currentTime:m,duration:u,chapterTitle:go==null?void 0:go.title}))),K.default.createElement(Cn,{hasResource:r,loading:s,kernelMsg:lt}))});Tf.displayName="DesktopPlayerSkin";var Lf=Tf;var fe=h(P()),_=h(Q());var Ef=d.div`
  ${Nr}
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
`,Mf=d.div`
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
`;var Ao=h(P()),nr=h(Q());var If=d.div`
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
`,$a=d.button`
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
`;var ue=h(P());var Of=()=>ue.default.createElement(Dr,{width:"100%",height:"100%"}),Af=({width:e="100%",height:t="100%"}={})=>ue.default.createElement("svg",{viewBox:"0 0 56 56",preserveAspectRatio:"xMidYMid meet",fill:"none",width:e,height:t},ue.default.createElement("path",{fill:"currentColor",d:"M 41.543 28.638 L 15.115 43.848 C 14.81 44.028 14.548 44.048 14.329 43.91 C 14.11 43.772 14 43.526 14 43.168 L 14 12.832 C 14 12.474 14.11 12.226 14.329 12.09 C 14.548 11.952 14.81 11.972 15.115 12.152 L 41.543 27.36 C 41.848 27.54 42 27.752 42 28 C 42 28.248 41.848 28.46 41.543 28.638 Z"})),Rf=({width:e="100%",height:t="100%"}={})=>ue.default.createElement("svg",{viewBox:"0 0 56 56",preserveAspectRatio:"xMidYMid meet",fill:"none",width:e,height:t},ue.default.createElement("rect",{fill:"currentColor",x:"12",y:"12",width:"8",height:"32"}),ue.default.createElement("rect",{fill:"currentColor",x:"36",y:"12",width:"8",height:"32"})),Bf=({width:e="100%",height:t="100%"}={})=>ue.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},ue.default.createElement("path",{fill:"currentColor",d:"M 25.184 9.17 C 25.377 9.021 25.542 8.97 25.676 9.017 C 25.809 9.063 25.875 9.189 25.875 9.392 L 25.875 26.608 C 25.875 26.811 25.809 26.937 25.676 26.983 C 25.542 27.03 25.377 26.979 25.184 26.83 L 14.262 18.526 C 14.17 18.456 14.103 18.382 14.063 18.304 L 14.063 26.235 C 14.063 26.437 13.965 26.613 13.77 26.761 C 13.575 26.908 13.344 26.983 13.078 26.983 L 11.109 26.983 C 10.843 26.983 10.612 26.908 10.418 26.761 C 10.223 26.613 10.125 26.437 10.125 26.235 L 10.125 9.765 C 10.125 9.563 10.223 9.387 10.418 9.239 C 10.612 9.092 10.843 9.017 11.109 9.017 L 13.078 9.017 C 13.344 9.017 13.575 9.092 13.77 9.239 C 13.965 9.387 14.063 9.563 14.063 9.765 L 14.063 17.695 C 14.103 17.617 14.17 17.544 14.262 17.473 Z"})),Df=({width:e="100%",height:t="100%"}={})=>ue.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},ue.default.createElement("path",{fill:"currentColor",d:"M 10.816 9.17 C 10.623 9.021 10.458 8.97 10.324 9.017 C 10.191 9.063 10.125 9.189 10.125 9.392 L 10.125 26.608 C 10.125 26.811 10.191 26.937 10.324 26.983 C 10.458 27.03 10.623 26.979 10.816 26.83 L 21.738 18.526 C 21.83 18.456 21.897 18.382 21.937 18.304 L 21.937 26.235 C 21.937 26.437 22.035 26.613 22.23 26.761 C 22.425 26.908 22.656 26.983 22.922 26.983 L 24.891 26.983 C 25.157 26.983 25.388 26.908 25.582 26.761 C 25.777 26.613 25.875 26.437 25.875 26.235 L 25.875 9.765 C 25.875 9.563 25.777 9.387 25.582 9.239 C 25.388 9.092 25.157 9.017 24.891 9.017 L 22.922 9.017 C 22.656 9.017 22.425 9.092 22.23 9.239 C 22.035 9.387 21.937 9.563 21.937 9.765 L 21.937 17.695 C 21.897 17.617 21.83 17.544 21.738 17.473 Z"})),qf=({width:e="100%",height:t="100%"}={})=>ue.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},ue.default.createElement("path",{fill:"currentColor",d:"M 10 16 L 10 10.5 C 10 10.224 10.224 10 10.5 10 L 16 10 L 16 12 L 12 12 L 12 16 Z M 26 16 L 26 12 L 22 12 L 22 10 L 26.5 10 C 26.776 10 27 10.224 27 10.5 L 27 16 Z M 26 20 L 27 20 L 27 25.5 C 27 25.776 26.776 26 26.5 26 L 22 26 L 22 24 L 26 24 Z M 10 20 L 10 25.5 C 10 25.776 10.224 26 10.5 26 L 16 26 L 16 24 L 12 24 L 12 20 Z"})),Nf=({width:e="100%",height:t="100%"}={})=>ue.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},ue.default.createElement("path",{fill:"currentColor",d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"})),Un=({width:e="100%",height:t="100%"}={})=>ue.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},ue.default.createElement("path",{fill:"currentColor",d:"M 27.452 17.699 C 27.408 16.709 27.211 15.734 26.866 14.806 L 28.396 13.381 C 28.685 13.102 28.753 12.663 28.561 12.31 C 27.951 11.182 27.166 10.156 26.237 9.27 C 25.954 8.996 25.522 8.948 25.187 9.154 L 23.379 10.28 C 22.566 9.715 21.667 9.282 20.72 8.996 L 20.534 6.903 C 20.504 6.5 20.195 6.173 19.794 6.12 C 19.237 6.039 18.673 5.999 18.11 6 C 17.391 5.997 16.675 6.061 15.969 6.188 C 15.587 6.249 15.293 6.558 15.253 6.941 L 15.029 9.081 C 14.156 9.378 13.331 9.798 12.579 10.333 L 10.819 9.197 C 10.483 8.981 10.043 9.025 9.757 9.304 C 8.811 10.21 8.016 11.262 7.405 12.422 C 7.218 12.768 7.281 13.198 7.563 13.475 L 9.105 14.96 C 8.821 15.752 8.641 16.578 8.573 17.418 L 6.586 18.115 C 6.207 18.24 5.966 18.613 6.004 19.009 C 6.091 20.334 6.394 21.637 6.903 22.862 C 7.048 23.232 7.431 23.454 7.824 23.398 L 9.907 23.098 C 10.312 23.783 10.803 24.414 11.367 24.977 L 10.631 27.005 C 10.496 27.377 10.624 27.79 10.943 28.021 C 12.006 28.799 13.192 29.398 14.451 29.793 C 14.833 29.917 15.251 29.758 15.454 29.413 L 16.53 27.61 C 16.993 27.687 17.463 27.73 17.933 27.738 C 18.287 27.74 18.641 27.723 18.993 27.682 L 20.067 29.544 C 20.254 29.895 20.655 30.072 21.041 29.972 C 22.305 29.638 23.505 29.094 24.591 28.367 C 24.927 28.146 25.07 27.724 24.937 27.344 L 24.249 25.349 C 24.931 24.743 25.525 24.043 26.009 23.269 L 28.091 23.603 C 28.483 23.667 28.868 23.452 29.021 23.084 C 29.543 21.894 29.871 20.629 29.993 19.335 C 30.046 18.931 29.807 18.547 29.423 18.414 Z M 27.689 21.779 L 25.161 21.376 L 24.556 22.344 C 24.161 22.981 23.677 23.557 23.118 24.056 L 22.261 24.831 L 23.118 27.263 C 22.523 27.611 21.894 27.898 21.241 28.119 L 19.957 25.867 L 18.855 25.979 C 18.571 26.012 18.284 26.027 17.999 26.026 C 17.611 26.017 17.224 25.982 16.842 25.919 L 15.651 25.693 L 14.341 27.917 C 13.685 27.671 13.059 27.356 12.472 26.976 L 13.368 24.531 L 12.575 23.749 C 12.116 23.283 11.715 22.765 11.38 22.203 L 10.794 21.217 L 8.261 21.581 C 8.035 20.918 7.875 20.232 7.781 19.536 L 10.211 18.68 L 10.288 17.558 C 10.34 16.872 10.486 16.198 10.717 15.551 L 11.088 14.488 L 9.23 12.695 C 9.587 12.11 10.002 11.56 10.467 11.056 L 12.61 12.442 L 13.547 11.77 C 14.163 11.336 14.838 10.991 15.552 10.747 L 16.602 10.396 L 16.872 7.803 C 17.278 7.748 17.687 7.719 18.096 7.712 C 18.358 7.712 18.619 7.712 18.886 7.751 L 19.113 10.319 L 20.23 10.657 C 21.005 10.891 21.74 11.245 22.406 11.707 L 23.327 12.349 L 25.512 10.987 C 25.964 11.476 26.369 12.005 26.721 12.571 L 24.853 14.326 L 25.281 15.417 C 25.56 16.176 25.723 16.973 25.761 17.78 L 25.813 18.94 L 28.219 19.819 C 28.109 20.488 27.93 21.144 27.689 21.779 Z M 17.972 22.267 C 14.675 22.267 12.614 18.699 14.262 15.845 C 15.912 12.992 20.034 12.992 21.683 15.845 C 22.065 16.507 22.263 17.257 22.257 18.02 C 22.252 20.377 20.331 22.282 17.972 22.267 Z M 18.028 15.417 C 16.05 15.395 14.788 17.52 15.758 19.244 C 16.727 20.968 19.2 20.998 20.209 19.296 C 20.444 18.901 20.568 18.447 20.568 17.987 C 20.568 16.579 19.436 15.433 18.028 15.417 Z"})),Ff=({width:e="100%",height:t="100%"}={})=>ue.default.createElement("svg",{viewBox:"0 0 36 36",width:e,height:t},ue.default.createElement("path",{fill:"currentColor",d:"M 24.344 15.999 L 19.6 20.544 L 19.169 20.956 L 18.613 20.807 C 18.389 20.746 18.228 20.723 17.998 20.724 C 17.263 20.682 16.798 20.925 16.316 21.387 C 15.84 21.844 15.601 22.235 15.653 22.903 C 15.65 23.104 15.671 23.237 15.732 23.441 L 15.921 24.07 L 15.436 24.536 L 14.105 25.811 C 13.991 25.972 13.943 26.063 13.937 26.177 C 13.932 26.29 13.954 26.362 14.1 26.539 C 14.267 26.702 14.454 26.723 14.587 26.73 C 14.72 26.736 14.824 26.733 15.067 26.545 L 16.4 25.266 L 16.831 24.854 L 17.387 25.003 C 17.611 25.064 17.777 25.087 18.001 25.085 C 18.737 25.128 19.202 24.884 19.684 24.422 C 20.16 23.966 20.399 23.576 20.346 22.906 C 20.345 22.701 20.328 22.567 20.268 22.37 L 20.076 21.743 L 20.564 21.275 L 25.308 16.73 C 25.454 16.554 25.497 16.41 25.455 16.238 C 25.414 16.065 25.322 15.903 25.01 15.835 C 24.703 15.762 24.571 15.802 24.345 15.997 M 18.101 6 C 18.101 6 16.905 6.031 16.356 6.084 C 15.807 6.137 15.292 6.213 14.761 6.317 C 13.701 6.526 12.725 6.818 11.75 7.213 C 9.801 8.002 8.134 9.089 6.662 10.499 C 3.715 13.324 1.949 16.988 2.001 21.269 C 1.967 24.34 2.871 27.191 4.685 29.726 C 4.82 29.961 4.985 30.022 5.284 29.994 C 5.583 29.965 5.703 29.913 5.825 29.665 C 5.895 29.443 5.902 29.37 5.784 29.167 C 2.764 24.665 2.661 19.146 4.809 14.968 C 6.952 10.799 11.515 7.546 17.036 7.115 C 22.565 6.846 27.525 9.492 30.218 13.351 C 32.916 17.219 33.57 22.701 31.19 27.546 C 30.907 28.096 30.57 28.655 30.217 29.164 C 30.164 29.383 30.097 29.407 30.175 29.662 C 30.25 29.906 30.341 29.989 30.708 29.989 C 30.683 29.99 30.723 29.992 30.765 29.992 C 31.033 29.992 31.173 29.907 31.315 29.726 C 33.128 27.19 34.033 24.344 33.999 21.273 C 34.051 16.991 32.284 13.324 29.337 10.499 C 26.384 7.67 22.505 5.962 18 6.004"})),_f=({width:e=24,height:t=24}={})=>ue.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},ue.default.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),ue.default.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Vf=({width:e=24,height:t=24}={})=>ue.default.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},ue.default.createElement("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"})),rr=({width:e=20,height:t=20}={})=>ue.default.createElement("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",width:e,height:t},ue.default.createElement("path",{fill:"#ccc",d:"M8 5v14l11-7z"})),$f=({width:e="100%",height:t="100%"}={})=>ue.default.createElement("svg",{viewBox:"-6 -6 36 36",fill:"currentColor",width:e,height:t},ue.default.createElement("path",{d:"M21.20 3.01L21 3H3L2.79 3.01C2.30 3.06 1.84 3.29 1.51 3.65C1.18 4.02 .99 4.50 1 5V19L1.01 19.20C1.05 19.66 1.26 20.08 1.58 20.41C1.91 20.73 2.33 20.94 2.79 20.99L3 21H21L21.20 20.98C21.66 20.94 22.08 20.73 22.41 20.41C22.73 20.08 22.94 19.66 22.99 19.20L23 19V5C23.00 4.50 22.81 4.02 22.48 3.65C22.15 3.29 21.69 3.06 21.20 3.01ZM3 19V5H21V19H3ZM6.97 8.34C6.42 8.64 5.96 9.09 5.64 9.63L5.50 9.87C5.16 10.53 4.99 11.26 5 12L5.00 12.27C5.04 12.92 5.21 13.55 5.50 14.12L5.64 14.36C5.96 14.90 6.42 15.35 6.97 15.65L7.21 15.77C7.79 16.01 8.43 16.06 9.03 15.91L9.29 15.83C9.88 15.61 10.39 15.23 10.77 14.73C10.93 14.53 11.00 14.27 10.97 14.02C10.94 13.77 10.82 13.53 10.63 13.37C10.44 13.20 10.19 13.11 9.93 13.12C9.68 13.13 9.44 13.24 9.26 13.43L9.19 13.50C9.05 13.70 8.85 13.85 8.62 13.94L8.54 13.97C8.35 14.02 8.16 14.00 7.99 13.92L7.91 13.88C7.67 13.75 7.48 13.56 7.35 13.32L7.28 13.20C7.11 12.88 7.02 12.52 7.00 12.16L7 12C6.99 11.58 7.09 11.16 7.28 10.79L7.35 10.67C7.48 10.43 7.67 10.24 7.91 10.11C8.10 10.00 8.32 9.97 8.54 10.02L8.62 10.05C8.81 10.12 8.98 10.24 9.11 10.39L9.19 10.49L9.26 10.57C9.43 10.74 9.66 10.85 9.91 10.87C10.15 10.89 10.40 10.81 10.59 10.66C10.79 10.51 10.92 10.29 10.96 10.05C11.01 9.80 10.96 9.55 10.83 9.34L10.77 9.26L10.60 9.05C10.24 8.65 9.79 8.35 9.29 8.16L9.03 8.08C8.34 7.91 7.60 8.00 6.97 8.34ZM14.97 8.34C14.42 8.64 13.96 9.09 13.64 9.63L13.50 9.87C13.16 10.53 12.99 11.26 13 12L13.00 12.27C13.04 12.92 13.21 13.55 13.50 14.12L13.64 14.36C13.96 14.90 14.42 15.35 14.97 15.65L15.21 15.77C15.79 16.01 16.43 16.06 17.03 15.91L17.29 15.83C17.88 15.61 18.39 15.23 18.77 14.73C18.93 14.53 19.00 14.27 18.97 14.02C18.94 13.77 18.82 13.53 18.63 13.37C18.44 13.20 18.19 13.11 17.93 13.12C17.68 13.13 17.44 13.24 17.26 13.43L17.19 13.50C17.05 13.70 16.85 13.85 16.62 13.94L16.54 13.97C16.35 14.02 16.16 14.00 15.99 13.92L15.91 13.88C15.67 13.75 15.48 13.56 15.35 13.32L15.28 13.20C15.11 12.88 15.02 12.52 15.00 12.16L15 12C14.99 11.58 15.09 11.16 15.28 10.79L15.35 10.67C15.48 10.43 15.67 10.24 15.91 10.11C16.10 10.00 16.32 9.97 16.54 10.02L16.62 10.05C16.81 10.12 16.98 10.24 17.11 10.39L17.19 10.49L17.26 10.57C17.43 10.74 17.66 10.85 17.91 10.87C18.15 10.89 18.40 10.81 18.59 10.66C18.79 10.51 18.92 10.29 18.96 10.05C19.01 9.80 18.96 9.55 18.83 9.34L18.77 9.26L18.60 9.05C18.24 8.65 17.79 8.35 17.29 8.16L17.03 8.08C16.34 7.91 15.60 8.00 14.97 8.34Z"}));var zf=({visible:e,captions:t,activeCaption:o,onCaptionChange:r,onOpenSettings:n,settingsLabel:i,captionsLabel:s,hideSettings:l=!1})=>{let a=t&&t.length>0,c=Ao.default.useCallback(p=>{p.stopPropagation(),o?r(null):t&&t.length>0&&r(t[0].language)},[o,t,r]);return Ao.default.createElement(If,{$visible:e},a&&Ao.default.createElement($a,{onClick:c,"aria-label":s||"Captions"},Ao.default.createElement(os,{width:24,height:24,active:!!o})),!l&&Ao.default.createElement($a,{onClick:n,"aria-label":i},Ao.default.createElement(Un,null)))};zf.propTypes={visible:nr.default.bool.isRequired,captions:nr.default.array,activeCaption:nr.default.string,onCaptionChange:nr.default.func,onOpenSettings:nr.default.func.isRequired,settingsLabel:nr.default.string.isRequired};var Hf=Ao.default.memo(zf);var We=h(P()),at=h(Q());var jf=d.div`
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
`,Wf=d.button`
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
`,za=d.button`
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
`,rh=Ti`
  to {
    transform: rotate(360deg);
  }
`,Uf=d.div`
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
    animation: ${rh} 0.8s linear infinite;
  }
`;var Xf=({visible:e,isLoading:t,paused:o,ended:r,onPlayPause:n,onPrevious:i,onNext:s,showNavButtons:l=!1,i18n:a})=>{let c=typeof i=="function",p=typeof s=="function",u=c||l,f=p||l,m=We.default.useCallback(S=>{S.stopPropagation(),c&&i()},[c,i]),y=We.default.useCallback(S=>{S.stopPropagation(),p&&s()},[p,s]),v=We.default.useCallback(S=>{S.stopPropagation(),n()},[n]);return We.default.createElement(jf,{$visible:e},u&&We.default.createElement(za,{"aria-label":a.previous,onClick:m,disabled:!c},We.default.createElement(Bf,null)),t?We.default.createElement(Uf,{onClick:S=>S.stopPropagation()},We.default.createElement("div",null)):We.default.createElement(Wf,{"aria-label":o?a.play:a.pause,onClick:v},r?We.default.createElement(Of,null):o?We.default.createElement(Af,null):We.default.createElement(Rf,null)),f&&We.default.createElement(za,{"aria-label":a.next,onClick:y,disabled:!p},We.default.createElement(Df,null)))};Xf.propTypes={visible:at.default.bool.isRequired,isLoading:at.default.bool.isRequired,paused:at.default.bool.isRequired,ended:at.default.bool.isRequired,onPlayPause:at.default.func.isRequired,onPrevious:at.default.func,onNext:at.default.func,showNavButtons:at.default.bool,i18n:at.default.shape({previous:at.default.string,next:at.default.string,play:at.default.string,pause:at.default.string}).isRequired};var Yf=We.default.memo(Xf);var qt=h(P()),me=h(Q());var Gf=d.div`
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
`,Kf=d.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 12px 0 16px;
`,Zf=d.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  flex-shrink: 0;
`,Qf=d.button`
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
`;var Re=h(P()),Fe=h(Q());var Jf=d.div`
  flex: 1;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  touch-action: none;
`,e1=d.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
`,t1=d.div`
  position: absolute;
  left: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1px;
  transform-origin: left;
`,o1=d.div`
  position: absolute;
  left: 0;
  height: 2px;
  background: #cb0e0b;
  border-radius: 1px;
  transform-origin: left;
`,r1=d.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #cb0e0b;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 4;
`,n1=d.div`
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
`;var Gr=h(P()),Gt=h(Q());var i1=d.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: stretch;
  gap: 2px;
  height: 2px;
`,s1=d.div`
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
  height: 2px;
  transition: transform 0.1s ease;
  transform-origin: center center;
`,a1=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`,l1=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #cb0e0b;
`;var u1=({segments:e,currentTime:t,duration:o,buffered:r,hoveredIndex:n})=>{if(e.length===0||o<=0)return null;let i=(r||0)*o;return Gr.default.createElement(i1,null,e.map((s,l)=>{let a=s.endTime-s.startTime,c=a/o*100,p=0;t>=s.endTime?p=100:t>s.startTime&&(p=(t-s.startTime)/a*100);let u=0;i>=s.endTime?u=100:i>s.startTime&&(u=(i-s.startTime)/a*100);let f=n===l;return Gr.default.createElement(s1,{key:l,style:{width:`${c}%`,transform:f?"scaleY(2.5)":"none"}},Gr.default.createElement(a1,{style:{width:`${u}%`}}),Gr.default.createElement(l1,{style:{width:`${p}%`}}))}))};u1.propTypes={segments:Gt.default.arrayOf(Gt.default.shape({title:Gt.default.string.isRequired,startTime:Gt.default.number.isRequired,endTime:Gt.default.number.isRequired})).isRequired,currentTime:Gt.default.number.isRequired,duration:Gt.default.number.isRequired,buffered:Gt.default.number,hoveredIndex:Gt.default.number};var c1=Gr.default.memo(u1);Ht();var p1=({currentTime:e,duration:t,buffered:o,chapters:r,heatmapData:n,getChapterAtTime:i,onChange:s,onSeeking:l,adMode:a=!1})=>{let c=Re.default.useRef(null),p=Re.default.useRef(!1),[u,f]=Re.default.useState(!1),{i18n:m}=z(),y=t>0?e/t:0,v=o||0,S=r&&r.length>0,{strokePath:T,hasHeatmap:b}=$i({heatmapData:n,duration:t}),x=Re.default.useMemo(()=>!S||!i?null:i(e),[S,i,e]),C=Re.default.useCallback(w=>{if(!c.current||!t)return;let N=c.current.getBoundingClientRect(),E=Math.max(0,Math.min(1,(w-N.left)/N.width))*t;s(E)},[t,s]),M=Re.default.useCallback(w=>{p.current=!0,f(!0),l&&l(!0),C(w.clientX);let N=E=>{p.current&&C(E.clientX)},$=()=>{p.current=!1,f(!1),l&&l(!1),document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",$)};document.addEventListener("mousemove",N),document.addEventListener("mouseup",$)},[C,l]),L=Re.default.useCallback(w=>{w.preventDefault(),p.current=!0,f(!0),l&&l(!0);let N=w.touches[0];C(N.clientX);let $=k=>{k.preventDefault(),p.current&&k.touches[0]&&C(k.touches[0].clientX)},E=()=>{p.current=!1,f(!1),l&&l(!1),document.removeEventListener("touchmove",$),document.removeEventListener("touchend",E)};document.addEventListener("touchmove",$,{passive:!1}),document.addEventListener("touchend",E)},[C,l]);return Re.default.useEffect(()=>{let w=c.current;if(w)return w.addEventListener("touchstart",L,{passive:!1}),()=>{w.removeEventListener("touchstart",L)}},[L]),Re.default.createElement(Jf,{ref:c,role:"slider","aria-label":m.timeBar,"aria-valuemin":0,"aria-valuemax":Math.round(t),"aria-valuenow":Math.round(e),"aria-valuetext":De(Math.round(e)),tabIndex:0,onMouseDown:M},S?Re.default.createElement(c1,{segments:r,currentTime:e,duration:t,buffered:o,hoveredIndex:u&&x?r.findIndex(w=>w.startTime===x.startTime):-1}):Re.default.createElement(Re.default.Fragment,null,Re.default.createElement(e1,null),Re.default.createElement(t1,{style:{width:`${v*100}%`}}),Re.default.createElement(o1,{style:{width:`${y*100}%`,background:a?"#fc0":void 0}})),!a&&Re.default.createElement(r1,{style:{left:`${y*100}%`}}),b&&Re.default.createElement(Vi,{strokePath:T,currentTime:e,duration:t,isFullscreen:!1,bottomOffset:14,visible:u}),S&&u&&x&&Re.default.createElement(n1,{style:{left:`${y*100}%`}},x.title,`
`,De(Math.round(e))))};p1.propTypes={currentTime:Fe.default.number.isRequired,duration:Fe.default.number.isRequired,buffered:Fe.default.number,chapters:Fe.default.arrayOf(Fe.default.shape({title:Fe.default.string.isRequired,startTime:Fe.default.number.isRequired,endTime:Fe.default.number.isRequired})),heatmapData:Fe.default.arrayOf(Fe.default.shape({startTime:Fe.default.number.isRequired,endTime:Fe.default.number.isRequired,value:Fe.default.number.isRequired})),getChapterAtTime:Fe.default.func,onChange:Fe.default.func.isRequired,onSeeking:Fe.default.func};var d1=Re.default.memo(p1);Ht();var f1=({visible:e,live:t,currentTime:o,duration:r,buffered:n,fullscreen:i,chapters:s,heatmapData:l,getChapterAtTime:a,i18n:c,onChangeCurrentTime:p,onSeeking:u,onRequestFullscreen:f,onExitFullscreen:m,adMode:y=!1})=>qt.default.createElement(Gf,{$visible:e,onClick:v=>v.stopPropagation()},t===!1&&qt.default.createElement(qt.default.Fragment,null,qt.default.createElement(Zf,null,De(Math.round(o))," / ",De(Math.round(r))),qt.default.createElement(Kf,{style:y?{pointerEvents:"none"}:void 0},qt.default.createElement(d1,{currentTime:o,duration:r,buffered:n,chapters:s,heatmapData:l,getChapterAtTime:a,onChange:p,onSeeking:u,adMode:y}))),qt.default.createElement(Qf,{"aria-label":i?c.exitFullscreen:c.fullscreen,onClick:i?m:f},i?qt.default.createElement(Nf,null):qt.default.createElement(qf,null)));f1.propTypes={visible:me.default.bool.isRequired,live:me.default.bool.isRequired,currentTime:me.default.number.isRequired,duration:me.default.number.isRequired,buffered:me.default.number,fullscreen:me.default.bool.isRequired,chapters:me.default.arrayOf(me.default.shape({title:me.default.string.isRequired,startTime:me.default.number.isRequired,endTime:me.default.number.isRequired})),heatmapData:me.default.arrayOf(me.default.shape({startTime:me.default.number.isRequired,endTime:me.default.number.isRequired,value:me.default.number.isRequired})),getChapterAtTime:me.default.func,i18n:me.default.shape({exitFullscreen:me.default.string,fullscreen:me.default.string}).isRequired,onChangeCurrentTime:me.default.func.isRequired,onSeeking:me.default.func,onRequestFullscreen:me.default.func.isRequired,onExitFullscreen:me.default.func.isRequired};var m1=qt.default.memo(f1);var Be=h(P()),fo=h(Q());var nh=Ti`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`,Ha=d.div`
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
`,ja=d.div`
  display: flex;
  align-items: center;
  ${({direction:e})=>e==="backward"?"transform: rotate(180deg);":""}
  & > svg {
    width: 20px;
    height: 20px;
    animation: ${nh} 1s infinite;
    opacity: 0;
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }
`,Wa=d.span`
  font-size: 12px;
  color: #ccc;
  margin-top: 4px;
`,Ua=d.button`
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
`;var h1=({skipState:e,onTapLeft:t,onTapRight:o,i18n:r})=>{let n=(r==null?void 0:r.seconds)||"seconds",i=Be.default.useCallback(l=>{l.stopPropagation(),t()},[t]),s=Be.default.useCallback(l=>{l.stopPropagation(),o()},[o]);return Be.default.createElement(Be.default.Fragment,null,Be.default.createElement(Ua,{direction:"backward",onClick:i,"aria-label":(r==null?void 0:r.skipBackward)||"Skip backward"}),Be.default.createElement(Ua,{direction:"forward",onClick:s,"aria-label":(r==null?void 0:r.skipForward)||"Skip forward"}),e.visible&&e.direction==="backward"&&Be.default.createElement(Ha,{direction:"backward"},Be.default.createElement(ja,{direction:"backward"},Be.default.createElement(rr,null),Be.default.createElement(rr,null),Be.default.createElement(rr,null)),Be.default.createElement(Wa,null,e.seconds," ",n)),e.visible&&e.direction==="forward"&&Be.default.createElement(Ha,{direction:"forward"},Be.default.createElement(ja,{direction:"forward"},Be.default.createElement(rr,null),Be.default.createElement(rr,null),Be.default.createElement(rr,null)),Be.default.createElement(Wa,null,e.seconds," ",n)))};h1.propTypes={skipState:fo.default.shape({direction:fo.default.oneOf(["forward","backward",null]),visible:fo.default.bool.isRequired,seconds:fo.default.number.isRequired}).isRequired,onTapLeft:fo.default.func.isRequired,onTapRight:fo.default.func.isRequired,i18n:fo.default.shape({seconds:fo.default.string})};var y1=Be.default.memo(h1);var H=h(P()),Kt=h(Q());var g1=d.div`
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
`,b1=d.div`
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
`,S1=d.span`
  flex: 1;
  font-weight: 400;
`,cs=d.button`
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
`,v1=d.ul`
  padding: 4px 0;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  list-style: none;
`,ps=d.li`
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
`,ds=d.div`
  display: block;
  width: 36px;
  height: 36px;
  margin: 0 auto 5px;
  position: relative;
  top: 5px;
`,fs=d.span`
  display: block;
  font-size: 15px;
  color: #fff;
`,ms=d.div`
  font-size: 11px;
  color: #ccc;
  line-height: 1;
  display: block;
  margin: 6px 0 0;
  padding: 0;
  text-align: center;
`,x1=d.div`
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
`,C1=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 6px 0;
`,Kr=d.li`
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
`,hs=d.ul`
  margin: 0;
  padding: 6px 0;
  list-style: none;
`,w1=d.div`
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
`;var k1=[{label:"2",value:2},{label:"1.5",value:1.5},{label:"1.25",value:1.25},{label:"Normal",value:1},{label:"0.75",value:.75},{label:"0.5",value:.5},{label:"0.25",value:.25}],P1=({visible:e,qualities:t,captions:o,activeCaption:r,playbackRate:n,playbackQuality:i,onChangeSettings:s,onCaptionChange:l,onClose:a,adMode:c=!1})=>{var $;let{i18n:p}=z(),[u,f]=H.default.useState(null),[m,y]=H.default.useState(!0),[v,S]=H.default.useState(null);H.default.useEffect(()=>{if(i==null||i===0||t.length===0)return;let E=i.toString();t.find(g=>g.value===E)&&m&&S(E)},[i,t]);let T=H.default.useCallback(E=>{E.stopPropagation(),f(null),a()},[a]),b=H.default.useCallback(E=>{E.stopPropagation(),f(null)},[]),x=H.default.useCallback(E=>k=>{k.stopPropagation(),s({quality:{value:String(E)}}),E===0?y(!0):(y(!1),S(String(E))),f(null),a()},[s,a]),C=H.default.useCallback(E=>k=>{k.stopPropagation(),s({speed:{value:String(E)}}),f(null),a()},[s,a]),M=H.default.useCallback(E=>k=>{k.stopPropagation(),l(E),f(null),a()},[l,a]),L=H.default.useMemo(()=>{if(!r||!o||o.length===0)return p.off;let E=o.find(k=>k.language===r);return E?E.label:p.off},[r,o,p]),w=H.default.useMemo(()=>{let E=k1.find(k=>k.value===n);return E?E.label:"Normal"},[n]);H.default.useEffect(()=>{e&&f(null)},[e]);let N=u!==null;return H.default.createElement(g1,{$visible:e,onClick:E=>E.stopPropagation()},H.default.createElement(b1,null,N?H.default.createElement(cs,{$position:"left",onClick:b,"aria-label":p.back},H.default.createElement(Vf,null)):H.default.createElement(cs,{$position:"left","aria-label":p.settings},H.default.createElement(Un,null)),H.default.createElement(S1,null,N?u==="quality"?p.quality:u==="captions"?p.captions:p.speed:p.settings),H.default.createElement(cs,{$position:"right",onClick:T,"aria-label":p.close},H.default.createElement(_f,null))),H.default.createElement(w1,{hidden:N},H.default.createElement(v1,null,t.length>0&&H.default.createElement(ps,{onClick:()=>f("quality")},H.default.createElement(ds,null,H.default.createElement(Un,null)),H.default.createElement(fs,null,p.quality),H.default.createElement(ms,null,m?v?`${p.auto} (${v}p)`:p.auto:(($=t.find(E=>E.value===v))==null?void 0:$.label)||v)),!c&&H.default.createElement(ps,{onClick:()=>f("speed")},H.default.createElement(ds,null,H.default.createElement(Ff,null)),H.default.createElement(fs,null,p.speed),H.default.createElement(ms,null,w)),o&&o.length>0&&H.default.createElement(ps,{onClick:()=>f("captions")},H.default.createElement(ds,null,H.default.createElement($f,null)),H.default.createElement(fs,null,p.captions),H.default.createElement(ms,null,L)))),H.default.createElement(x1,{$visible:N},H.default.createElement(C1,null,u==="quality"&&H.default.createElement(hs,null,t.map(E=>H.default.createElement(Kr,{key:E.value,active:!m&&E.value===v,onClick:x(E.value)},E.label)),H.default.createElement(Kr,{active:m,onClick:x(0)},p.auto)),u==="speed"&&H.default.createElement(hs,null,k1.map(E=>H.default.createElement(Kr,{key:E.value,active:E.value===n,onClick:C(E.value)},E.label))),u==="captions"&&H.default.createElement(hs,null,H.default.createElement(Kr,{active:r===null,onClick:M(null)},p.off),(o||[]).map(E=>H.default.createElement(Kr,{key:E.language,active:r===E.language,onClick:M(E.language)},E.label))))))};P1.propTypes={visible:Kt.default.bool.isRequired,qualities:Kt.default.array.isRequired,captions:Kt.default.array,activeCaption:Kt.default.string,playbackRate:Kt.default.number.isRequired,playbackQuality:Kt.default.number,onChangeSettings:Kt.default.func.isRequired,onCaptionChange:Kt.default.func,onClose:Kt.default.func.isRequired};var T1=H.default.memo(P1);var rt=h(P());var ih=3e3;function Xa({hasResource:e,loading:t,prevented:o,paused:r,ended:n,waiting:i,seeking:s}){let[l,a]=(0,rt.useState)(!0),c=(0,rt.useRef)(null),p=ye(),u=!e||t||o||r||n||i||s;(0,rt.useEffect)(()=>{p({type:"hiding",payload:!l})},[l,p]);let f=(0,rt.useCallback)(()=>{clearTimeout(c.current),c.current=setTimeout(()=>{a(!1)},ih)},[]),m=(0,rt.useCallback)(()=>{clearTimeout(c.current)},[]),y=(0,rt.useCallback)(()=>{a(T=>{let b=!T;return b&&!u&&f(),b})},[u,f]),v=(0,rt.useCallback)(()=>{a(!0),u||f()},[u,f]),S=(0,rt.useCallback)(()=>{u||(a(!1),m())},[u,m]);return(0,rt.useEffect)(()=>{u?(a(!0),m()):l&&f()},[u,l,f,m]),(0,rt.useEffect)(()=>{!s&&!r&&!n&&l&&f()},[s,r,n,l,f]),(0,rt.useEffect)(()=>()=>{clearTimeout(c.current)},[]),{controlsVisible:l,toggleControls:y,showControls:v,hideControls:S}}var Ue=h(P()),L1=300,ys=10,sh=1e3;function Ya({currentTime:e,duration:t,changeCurrentTime:o,showControls:r}){let[n,i]=(0,Ue.useState)({direction:null,visible:!1,seconds:0}),s=(0,Ue.useRef)(null),l=(0,Ue.useRef)(null),a=(0,Ue.useRef)(0),c=(0,Ue.useRef)(0),p=(0,Ue.useRef)(null),u=(0,Ue.useRef)(e);u.current=e;let f=(0,Ue.useRef)(t);f.current=t;let m=(0,Ue.useCallback)(S=>{let T=f.current,b=u.current;if(isNaN(T)||T<=0)return;let x=S==="forward"?ys:-ys,C=Math.max(0,Math.min(T,b+x));o(C),i(M=>({direction:S,visible:!0,seconds:M.direction===S&&M.visible?M.seconds+ys:ys})),clearTimeout(p.current),p.current=setTimeout(()=>{i({direction:null,visible:!1,seconds:0})},sh)},[o]),y=(0,Ue.useCallback)(()=>{a.current+=1,a.current===1?s.current=setTimeout(()=>{a.current=0,r&&r()},L1):(clearTimeout(s.current),a.current=0,m("backward"))},[m,r]),v=(0,Ue.useCallback)(()=>{c.current+=1,c.current===1?l.current=setTimeout(()=>{c.current=0,r&&r()},L1):(clearTimeout(l.current),c.current=0,m("forward"))},[m,r]);return(0,Ue.useEffect)(()=>()=>{clearTimeout(s.current),clearTimeout(l.current),clearTimeout(p.current)},[]),{skipState:n,handleTapLeft:y,handleTapRight:v}}var Ga=fe.default.forwardRef(({videoRef:e,playerRef:t,live:o=!1,hasResource:r=!1,hasAudio:n,prevented:i,loading:s,paused:l,ended:a,seeking:c,waiting:p,duration:u,buffered:f=null,currentTime:m,muted:y,volume:v,pictureInPictureEnabled:S,pip:T,fullscreen:b,qualities:x,spriteVTTFile:C,chapters:M,heatmapData:L,fullHDQualityBreak:w,playbackRate:N,playbackQuality:$,loop:E,poster:k,captions:g,activeCaption:O,onCaptionChange:I,onPlayClick:D,onPauseClick:V,onTogglePlay:W,changePlaybackRate:U,changePlayBackQuality:R,changeVolume:B,onMutedClick:te,changeCurrentTime:j,requestPictureInPicture:ce,exitPictureInPicture:he,requestFullscreen:se,exitFullscreen:Te,onSeeking:Le,onLoopClick:_e,onPreventedClick:Ve,onPrevious:gt,onNext:nt,showNavButtons:Ee,ads:Nt=null,kernelMsg:lt=null},ho)=>{let Ft=ye(),{i18n:bt}=z(),Qt=fe.default.useRef(null),{controlsVisible:Lt,toggleControls:ar,showControls:yo,hideControls:Jt}=Xa({hasResource:r,loading:s,prevented:i,paused:l,ended:a,waiting:p,seeking:c}),{skipState:Ro,handleTapLeft:_t,handleTapRight:Bo}=Ya({currentTime:m,duration:u,changeCurrentTime:j,showControls:ar}),{contextMenuItems:en,contextMenuPosition:tn,handleContextMenu:on}=rs({fullscreen:b,contextMenuRef:Qt,pip:T,loop:E,pictureInPictureEnabled:S,requestPictureInPicture:ce,exitPictureInPicture:he,onLoopClick:_e}),{segments:St,getChapterAtTime:lr}=Mo({chapters:M,duration:u}),{cues:ur,captionStyle:Do}=ls({captions:g,activeCaption:O}),{isAdActive:it,hasSkipTimer:rn,canSkip:qo,skipCountdown:No,adProgress:ut,onSkipClick:go,onAdClick:cr}=Yr({ads:Nt,currentTime:m,duration:u,ended:a,onPauseClick:V});fe.default.useEffect(()=>{Ft({videoRef:e,playerRef:t})},[e,t,Ft]),fe.default.useImperativeHandle(ho,()=>({showControls:yo,hideControls:Jt}),[yo,Jt]);let pr=fe.default.useCallback(({quality:dr,speed:Z})=>{var de;if(Z&&U(Number((de=Z.value)!=null?de:1)),dr){let ge=Number(dr.value);R(Number.isNaN(ge)?0:ge)}},[U,R]),[bo,eo]=fe.default.useState(!1),Xe=fe.default.useCallback(dr=>{dr.stopPropagation(),eo(!0)},[]),Vt=fe.default.useCallback(()=>{eo(!1)},[]),vt=fe.default.useCallback(()=>{l||a?D():V()},[l,a,D,V]),$t=(p||c&&!C||s)&&!l&&!a;return fe.default.createElement(Ef,{onContextMenu:on,onClick:ar},fe.default.createElement(xn,{hasResource:r,prevented:i,paused:l,muted:y,currentTime:m,onClick:Ve}),k&&fe.default.createElement(wn,{style:{opacity:m<=0||a?1:0}},fe.default.createElement(kn,{style:{backgroundImage:`url(${k})`}})),fe.default.createElement(Hn,{ref:Qt,fullscreen:b,position:tn,menuItems:en}),C&&fe.default.createElement(Dn,{spriteVTTFile:C,duration:u,seekTime:m,visible:c}),fe.default.createElement(Mf,{$visible:Lt&&r&&!a&&!i}),!it&&fe.default.createElement(y1,{skipState:Ro,onTapLeft:_t,onTapRight:Bo,i18n:bt}),O&&ur.length>0&&fe.default.createElement(as,{cues:ur,currentTime:m,captionStyle:Do,isFullscreen:b,controlsVisible:l||a||s||p}),fe.default.createElement(Hf,{visible:Lt&&!bo,captions:g,activeCaption:O,onCaptionChange:I,onOpenSettings:Xe,settingsLabel:bt.settings,captionsLabel:bt.captions,hideSettings:it&&x.length===0&&(!g||g.length===0)}),fe.default.createElement(T1,{visible:bo,qualities:x,captions:g,activeCaption:O,playbackRate:N,playbackQuality:$,onChangeSettings:pr,onCaptionChange:I,onClose:Vt,adMode:it}),fe.default.createElement(Yf,{visible:Lt&&!bo,isLoading:$t,paused:l,ended:a,onPlayPause:vt,onPrevious:gt,onNext:nt,showNavButtons:Ee,i18n:bt}),fe.default.createElement(m1,{visible:Lt&&!bo,live:o,currentTime:m,duration:u,buffered:f,fullscreen:b,chapters:it?[]:St,heatmapData:it?[]:L,getChapterAtTime:lr,i18n:bt,onChangeCurrentTime:it?()=>{}:j,onSeeking:it?()=>{}:Le,onRequestFullscreen:se,onExitFullscreen:Te,adMode:it}),it&&fe.default.createElement(us,{ads:Nt,canSkip:qo,skipCountdown:No,hasSkipTimer:rn,adProgress:ut,onSkipClick:go,onAdClick:cr,hiding:!Lt,poster:k,menuOpen:!1,fullscreen:!1}),fe.default.createElement(Cn,{hasResource:r,kernelMsg:lt}))});Ga.displayName="MobilePlayerSkin";Ga.propTypes={spriteVTTFile:_.default.string,videoRef:_.default.oneOfType([_.default.func,_.default.shape({current:_.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:_.default.oneOfType([_.default.func,_.default.shape({current:_.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:_.default.bool,waiting:_.default.bool,live:_.default.bool.isRequired,hasResource:_.default.bool.isRequired,loading:_.default.bool.isRequired,paused:_.default.bool.isRequired,ended:_.default.bool.isRequired,seeking:_.default.bool.isRequired,onPlayClick:_.default.func.isRequired,onPauseClick:_.default.func.isRequired,onTogglePlay:_.default.func.isRequired,duration:_.default.number.isRequired,buffered:_.default.number.isRequired||null,currentTime:_.default.number.isRequired,changeCurrentTime:_.default.func.isRequired,muted:_.default.bool.isRequired,volume:_.default.number.isRequired,changeVolume:_.default.func.isRequired,onMutedClick:_.default.func.isRequired,changePlaybackRate:_.default.func.isRequired,changePlayBackQuality:_.default.func.isRequired,pictureInPictureEnabled:_.default.bool.isRequired,pip:_.default.bool.isRequired,requestPictureInPicture:_.default.func.isRequired,exitPictureInPicture:_.default.func.isRequired,fullscreen:_.default.bool.isRequired,qualities:_.default.arrayOf(_.default.shape({label:_.default.string.isRequired,value:_.default.string.isRequired,isFullHD:_.default.bool.isRequired}).isRequired).isRequired,playbackRate:_.default.number.isRequired,loop:_.default.bool.isRequired,requestFullscreen:_.default.func.isRequired,exitFullscreen:_.default.func.isRequired,onLoopClick:_.default.func.isRequired,onPreventedClick:_.default.func.isRequired,onPrevious:_.default.func,onNext:_.default.func,showNavButtons:_.default.bool,kernelMsg:_.default.oneOfType([_.default.shape({type:_.default.string.isRequired,detail:_.default.string.isRequired}),_.default.oneOf([void 0])]),fullHDQualityBreak:_.default.number,poster:_.default.string.isRequired,hasAudio:_.default.bool,captions:_.default.array,activeCaption:_.default.string,onCaptionChange:_.default.func};var E1=fe.default.memo(Ga,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.onTogglePlay===t.onTogglePlay&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.changePlayBackQuality===t.changePlayBackQuality&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onPreventedClick===t.onPreventedClick&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.onCaptionChange===t.onCaptionChange&&e.ads===t.ads);Ne();var Ka=Xn.default.forwardRef((e,t)=>{let{skinMode:o,...r}=e;return o==="mobile"||o!=="desktop"&&ti?Xn.default.createElement(E1,{ref:t,...r}):Xn.default.createElement(Lf,{ref:t,...r})});Ka.displayName="PlayerSkin";Ka.propTypes={spriteVTTFile:F.default.string,chapters:F.default.arrayOf(F.default.shape({title:F.default.string.isRequired,startTime:F.default.number.isRequired})),heatmapData:F.default.arrayOf(F.default.shape({startTime:F.default.number.isRequired,endTime:F.default.number.isRequired,value:F.default.number.isRequired})),videoRef:F.default.oneOfType([F.default.func,F.default.shape({current:F.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:F.default.oneOfType([F.default.func,F.default.shape({current:F.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:F.default.bool,waiting:F.default.bool,live:F.default.bool.isRequired,hasResource:F.default.bool.isRequired,loading:F.default.bool.isRequired,paused:F.default.bool.isRequired,ended:F.default.bool.isRequired,seeking:F.default.bool.isRequired,onPlayClick:F.default.func.isRequired,onPauseClick:F.default.func.isRequired,duration:F.default.number.isRequired,buffered:F.default.number.isRequired||null,currentTime:F.default.number.isRequired,changeCurrentTime:F.default.func.isRequired,muted:F.default.bool.isRequired,volume:F.default.number.isRequired,changeVolume:F.default.func.isRequired,onMutedClick:F.default.func.isRequired,changePlaybackRate:F.default.func.isRequired,pictureInPictureEnabled:F.default.bool.isRequired,pip:F.default.bool.isRequired,requestPictureInPicture:F.default.func.isRequired,exitPictureInPicture:F.default.func.isRequired,fullscreen:F.default.bool.isRequired,qualities:F.default.arrayOf(F.default.shape({label:F.default.string.isRequired,value:F.default.string.isRequired,isFullHD:F.default.bool.isRequired}).isRequired).isRequired,playbackRate:F.default.number.isRequired,loop:F.default.bool.isRequired,requestFullscreen:F.default.func.isRequired,exitFullscreen:F.default.func.isRequired,onLoopClick:F.default.func.isRequired,onPreventedClick:F.default.func.isRequired,kernelMsg:F.default.oneOfType([F.default.shape({type:F.default.string.isRequired,detail:F.default.string.isRequired}),F.default.oneOf([void 0])]),fullHDQualityBreak:F.default.number,poster:F.default.string.isRequired,skinMode:F.default.oneOf(["auto","mobile","desktop"])};var M1=Xn.default.memo(Ka,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.skinMode===t.skinMode&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.onTogglePlay===t.onTogglePlay&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onCaptionChange===t.onCaptionChange&&e.onPreventedClick===t.onPreventedClick&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);var gs=h(P());var Za=["i18n","captionDragging","contextMenuVisible","controlsHovering","hiding","menuVisible","subMenuVisible","timeSliding","volumeSliding","videoRef","playerRef"];function Qa(e,t){try{if(!e||!t)throw new Error("Reducer params has not been provided!");if(typeof t=="function"){let o=t(e);return!o||typeof o!="object"?e:Qa(e,o)}if("type"in t){let{type:o,payload:r}=t;if(Za.includes(o)===!1)throw new Error(`Invalid type "${o}" in action payload!`);return e[o]===r?e:{...e,[o]:r}}else if(typeof t=="object"){if(Object.keys(t).length===0)throw new Error("Reducer action object is empty!");let o=!1,r={...e};for(let n in t){let i=t[n];if(Za.includes(n)===!1)throw new Error(`Invalid type "${n}" in action object!`);e[n]!==i&&(o=!0,r={...r,[n]:i})}return o?r:e}return e}catch(o){return console.error("Error in AppReducer: ",o),e}}Ne();var ah={en:Co,es:wo},bs=({children:e,language:t})=>{let[o,r]=gs.default.useReducer(Qa,{...la,i18n:ah[t]}),n=gs.default.useMemo(()=>({state:o,dispatch:r}),[o,r]);return gs.default.createElement(Br.Provider,{value:n},e)};Ne();var ht=h(P());var mo=h(P()),lh=({prevented:e,muted:t,videoRef:o,src:r,updateState:n})=>{let i=mo.default.useRef(.8),s=mo.default.useRef(!1),l=mo.default.useCallback(u=>{if(!o.current||s.current)return;let f=u.target.muted;u.target.volume===0&&(f=!0),n({volume:u.target.volume,muted:f})},[o,n]),a=mo.default.useCallback(()=>{if(!o.current)return;let u=o.current;if(!u)return;let f=!u.muted;if(s.current=!0,f)u.volume>0&&(i.current=u.volume),u.muted=!0,n({volume:u.volume,muted:!0});else{let m=i.current||.8;u.muted=!1,u.volume=m,n({volume:m,muted:!1})}setTimeout(()=>{s.current=!1},0)},[o,n]),c=mo.default.useCallback(u=>{if(!o.current)return;let f=o.current,m=u===0;f&&(f.volume=u),u!==0&&f.muted===!0&&(m=!1,f.muted=!1),u>0&&(i.current=u),n({volume:u,muted:m})},[o,n]),p=mo.default.useCallback(u=>{if(!o.current)return;let m=o.current.volume,y=u(m);c(y)},[o,c]);return mo.default.useEffect(()=>{if(!o.current)return()=>{};let u=o.current;return u?(u.addEventListener("volumechange",l),()=>{u.removeEventListener("volumechange",l)}):()=>{}},[l,o]),mo.default.useEffect(()=>{if(!o.current)return;let u=o.current;u&&(t?u.muted=!0:u.muted=!1)},[r,o,t]),{onMutedClick:a,changeVolume:c,updateVolumeWithCallback:p}},Ss=lh;var Zr=h(P()),uh=({updateState:e,videoRef:t,playerRef:o})=>{let r=Zr.default.useCallback(()=>{let l=o==null?void 0:o.current,a=t==null?void 0:t.current;if(!l){console.error("useVideoFullscreen: the player element is not ready");return}if(l.requestFullscreen){let c=l.requestFullscreen();c&&c.catch&&c.catch(()=>{})}else l.msRequestFullscreen?l.msRequestFullscreen():l.webkitRequestFullscreen?l.webkitRequestFullscreen():a&&a.webkitEnterFullScreen&&a.webkitEnterFullScreen()},[t,o]),n=Zr.default.useCallback(()=>{document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},[]),i=Zr.default.useCallback(()=>{let l=o==null?void 0:o.current;(document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement)===l?n():r()},[o,n,r]),s=Zr.default.useCallback(()=>{let l=o==null?void 0:o.current,a=document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement;e({fullscreen:!!l&&a===l})},[e,o]);return Zr.default.useEffect(()=>(document.addEventListener("fullscreenchange",s),document.addEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=s,()=>{document.removeEventListener("fullscreenchange",s),document.removeEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=null}),[s]),{requestFullscreen:r,exitFullscreen:n,requestToggleFullscreen:i}},I1=uh;var O1=(e,t)=>({...e,seeking:t,isEnded:!1,playing:t?e.playing:!0});var ch=({ref:e,playerRef:t,url:o,player:r,fullHDQualityBreak:n,sources:i,prevented:s,muted:l,updateState:a,ads:c})=>{let{i18n:p}=z(),u=ht.default.useRef(null),f=ht.default.useRef(null),m=ht.default.useCallback(({fullscreen:k})=>{a(g=>({...g,isFullScreen:k}))},[a]),{requestFullscreen:y,exitFullscreen:v,requestToggleFullscreen:S}=I1({updateState:m,videoRef:u,playerRef:t}),T=ht.default.useMemo(()=>i.length>0?i.map(k=>({label:Wr({label:"quality",value:k.resolution.toString(),i18n:p}),value:k.resolution.toString(),isFullHD:n!==void 0&&k.resolution>=n})):[],[i,n,p]),{onMutedClick:b,changeVolume:x,updateVolumeWithCallback:C}=Ss({prevented:s,muted:l,videoRef:u,src:o,updateState:({muted:k,volume:g})=>a(O=>({...O,isMuted:k!=null?k:!1,volume:g!=null?g:0}))}),M=ht.default.useCallback(k=>{r&&(a(g=>({...g,played:k})),r.seekTo(k))},[r,a]),L=ht.default.useCallback(k=>{if(!r)return;let g=r.getCurrentTime()||0,O=r.getDuration()||0,I=k(g,O);M(I)},[r,M]),w=ht.default.useRef(b);w.current=b;let N=ht.default.useRef(M);N.current=M;let $=ht.default.useMemo(()=>({onPlayClick:()=>a(k=>({...k,playing:!0})),onPauseClick:()=>a(k=>({...k,playing:!1})),onTogglePlay:()=>a(k=>({...k,playing:!k.playing})),changePlaybackRate:k=>a(g=>({...g,playbackRate:k})),changePlayBackQuality:k=>{a(g=>({...g,playbackQuality:k}))},requestPictureInPicture:()=>a(k=>({...k,isPIP:!0})),exitPictureInPicture:()=>a(k=>({...k,isPIP:!1})),onSeeking:k=>a(g=>O1(g,k)),onMutedClick:()=>w.current(),onLoopClick:()=>a(k=>({...k,loop:!k.loop})),onCaptionChange:k=>a(g=>({...g,activeCaption:k})),onPreventedClick:()=>a(k=>({...k,isMuted:!1,volume:1})),changeCurrentTime:k=>N.current(k)}),[a]),E=ht.default.useCallback(k=>{var I;k.preventDefault(),k.stopPropagation();let g=Ri[k.which||k.keyCode]||Bi[k.key];if(!(!r||c!=null&&(g==="ARROW_LEFT_KEY"||g==="ARROW_RIGHT_KEY")))switch((I=f.current)==null||I.showControls(),g){case"SPACE_KEY":{a(D=>({...D,playing:!D.playing}));break}case"F_KEY":{S();break}case"MUTE_KEY":{b();break}case"ARROW_LEFT_KEY":{L(D=>{let V=D-5;return V<0?0:V});break}case"ARROW_RIGHT_KEY":{L((D,V)=>{let W=D+5;return W>=V?V:W});break}case"ARROW_UP_KEY":{C(D=>{let V=D+.1;return V>=1?1:V});break}case"ARROW_DOWN_KEY":{C(D=>{let V=D-.1;return V<0?0:V});break}default:break}},[r,c,a,S,b,L,C]);return ht.default.useImperativeHandle(e,()=>({handleKeyDown:E})),ht.default.useEffect(()=>{var k;u.current=(k=r==null?void 0:r.getPlayer())!=null?k:null},[r]),{playerSkinRef:f,videoRef:u,qualities:T,memorizedProps:$,handleKeyDown:E,requestFullscreen:y,exitFullscreen:v,changeVolume:x}},A1=ch;var ph={en:Co,es:wo},Ja=Yn.default.forwardRef(({url:e,sources:t,playerRef:o,player:r,hasAudio:n,fullHDQualityBreak:i,live:s=!1,language:l=Object.keys(ph)[0],hasResource:a=!1,buffered:c=null,kernelMsg:p=null,updateState:u,waiting:f=!1,prevented:m=!1,muted:y=!1,...v},S)=>{let{playerSkinRef:T,videoRef:b,qualities:x,memorizedProps:C,handleKeyDown:M,requestFullscreen:L,exitFullscreen:w,changeVolume:N}=A1({ref:S,playerRef:o,url:e,player:r,fullHDQualityBreak:i,sources:t,prevented:m,muted:y,updateState:u,ads:v.ads||null});return Yn.default.createElement(bs,{language:l},Yn.default.createElement(M1,{ref:T,videoRef:b,playerRef:o,qualities:x,hasAudio:n,handleKeyDown:M,requestFullscreen:L,exitFullscreen:w,changeVolume:N,fullHDQualityBreak:i,live:s,hasResource:a,buffered:c,kernelMsg:p,prevented:m,waiting:f,muted:y,...v,...C}))});Ja.displayName="PlayerSkinWrapper";Ja.propTypes={playerRef:ee.default.oneOfType([ee.default.func,ee.default.shape({current:ee.default.instanceOf(HTMLDivElement)})]).isRequired,player:ee.default.instanceOf(Ct),live:ee.default.bool,prevented:ee.default.bool,waiting:ee.default.bool,hasResource:ee.default.bool.isRequired,hasAudio:ee.default.bool.isRequired,loading:ee.default.bool.isRequired,paused:ee.default.bool.isRequired,ended:ee.default.bool.isRequired,seeking:ee.default.bool.isRequired,duration:ee.default.number.isRequired,buffered:ee.default.number.isRequired||null,currentTime:ee.default.number.isRequired,muted:ee.default.bool.isRequired,volume:ee.default.number.isRequired,playbackRate:ee.default.number.isRequired,pictureInPictureEnabled:ee.default.bool.isRequired,fullHDQualityBreak:ee.default.number,pip:ee.default.bool.isRequired,fullscreen:ee.default.bool.isRequired,kernelMsg:ee.default.oneOfType([ee.default.shape({type:ee.default.string.isRequired,detail:ee.default.string.isRequired}),ee.default.oneOf([void 0])]),url:ee.default.string,sources:ee.default.arrayOf(ee.default.shape({src:ee.default.string.isRequired,resolution:ee.default.number.isRequired}).isRequired).isRequired,loop:ee.default.bool.isRequired};var R1=Yn.default.memo(Ja,(e,t)=>e.playerRef===t.playerRef&&e.player===t.player&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.kernelMsg===t.kernelMsg&&e.url===t.url&&e.sources===t.sources&&e.chapters===t.chapters&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.poster===t.poster&&e.skinMode===t.skinMode);var Zt={kernelError:null,seeking:!1,seek:0,played:0,loaded:0,duration:0,isFullScreen:!1,isEnded:!1,isPIP:!1,isLoading:!0,isBuffering:!1,volume:.8,playbackRate:1,playbackQuality:null,videoUrl:null,hasAudio:!0,loop:!1,playing:!1,isMuted:!1,activeCaption:null};var el=h(P());var B1=el.default.forwardRef(({children:e,style:t,...o},r)=>el.default.createElement(Ut,{ref:r,style:t,...o},e));B1.displayName="MediaPlayerWrapper";var D1=B1;var yt=h(P());Ht();Ne();var q1=async()=>{let e="https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js";try{let o=hr("internet_speed");if(o){let f=parseFloat(o);if(!isNaN(f)&&f>0)return f}let r=new AbortController,n=setTimeout(()=>r.abort(),1e4),i=performance.now(),l=await(await fetch(e,{signal:r.signal,cache:"no-store"})).blob();clearTimeout(n);let a=performance.now(),c=l.size*8||1638400,p=(a-i)/1e3,u=c/(p*1024*1024);return yr("internet_speed",u.toString(),7),u}catch(o){return o.name!=="AbortError"&&console.error("An error occurred while measuring the network speed: ",o),null}},N1=(e,t)=>{let o=[{quality:144,minSpeed:.3},{quality:270,minSpeed:.5},{quality:360,minSpeed:.7},{quality:480,minSpeed:1},{quality:720,minSpeed:2.5},{quality:1080,minSpeed:5},{quality:2160,minSpeed:20}],r;for(let n=o.length-1;n>=0;n--){let i=o[n];if(e>=i.minSpeed){r=i.quality;break}}if(r&&t.includes(r))return r;if(r)for(let n=o.length-1;n>=0;n--){let i=o[n];if(i.quality<=r&&t.includes(i.quality))return i.quality}for(let n=0;n<o.length;n++){let i=o[n];if(t.includes(i.quality))return i.quality}return t.length>0?t[0]:void 0};var dh=({onBuffer:e,onBufferEnd:t,onDisablePIP:o,onDuration:r,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:c,onPlayBackRateChange:p,onProgress:u,onReady:f,onSeek:m,onStart:y,onLoaded:v,onMount:S,updateState:T,playerState:b,extraProps:{url:x,sources:C,fullHDQualityBreak:M,prevented:L}})=>{let[w,N]=yt.default.useState(null),$=Zo(C),E=yt.default.useMemo(()=>$.length>0?ln($,"resolution"):null,[$]),k=yt.default.useRef(T);k.current=T;let g=yt.default.useRef({onBuffer:e,onBufferEnd:t,onDisablePIP:o,onDuration:r,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:c,onPlayBackRateChange:p,onProgress:u,onReady:f,onSeek:m,onStart:y,onLoaded:v,onMount:S});g.current={onBuffer:e,onBufferEnd:t,onDisablePIP:o,onDuration:r,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:c,onPlayBackRateChange:p,onProgress:u,onReady:f,onSeek:m,onStart:y,onLoaded:v,onMount:S};let O=yt.default.useRef(L);O.current=L;let I=yt.default.useRef(b.seeking);I.current=b.seeking,yt.default.useEffect(()=>{if(E&&M!==void 0&&!(M in E)){let R=Object.keys(E).join(", ");console.error(`PlayerStack: Invalid fullHDQualityBreak value "${M}". Accepted resolutions are: ${R}. Falling back to highest available.`)}},[E,M]),yt.default.useEffect(()=>{if(!E){N(null);return}let R=!1;return(async()=>{var B,te;try{let j=await q1();if(R)return;let ce=Object.keys(E).map(Number),he=N1(j||0,ce),se=$[0];j!==null&&he?(N((te=(B=E[he])==null?void 0:B.src)!=null?te:se.src),D.current=he,k.current(Te=>({...Te,playbackQuality:he}))):(N(se.src),D.current=se.resolution,k.current(Te=>({...Te,playbackQuality:se.resolution})))}catch{if(R)return;let j=$[0];N(j.src),D.current=j.resolution,k.current(ce=>({...ce,playbackQuality:j.resolution}))}})(),()=>{R=!0}},[$]);let D=yt.default.useRef(null),{playbackQuality:V}=b;yt.default.useEffect(()=>{V===0&&D.current!==null&&k.current(R=>({...R,playbackQuality:D.current}))},[V]);let W=yt.default.useMemo(()=>{var R,B;return E?V==null||V===0?w!=null?w:$[0].src:(B=(R=E[V])==null?void 0:R.src)!=null?B:$[0].src:x},[x,$,E,V,w]);return{...yt.default.useMemo(()=>({onBuffer:(...R)=>{g.current.onBuffer&&g.current.onBuffer(...R),k.current(B=>({...B,isBuffering:!0}))},onBufferEnd:(...R)=>{g.current.onBufferEnd&&g.current.onBufferEnd(...R),k.current(B=>({...B,isBuffering:!1}))},onDisablePIP:R=>{g.current.onDisablePIP&&g.current.onDisablePIP(R),k.current(B=>({...B,isPIP:!1}))},onDuration:R=>{g.current.onDuration&&g.current.onDuration(R),k.current(B=>({...B,duration:R}))},onEnablePIP:R=>{g.current.onEnablePIP&&g.current.onEnablePIP(R),k.current(B=>({...B,isPIP:!0}))},onEnded:R=>{g.current.onEnded&&g.current.onEnded(R),k.current(B=>({...B,isEnded:!0}))},onError:(R,B,te,j)=>{g.current.onError&&g.current.onError(R,B,te,j);let ce=["networkError"],he=["bufferStalledError","bufferNudgeOnStall","bufferAppendError","fragParsingError"];ce.includes(B==null?void 0:B.type)||(B==null?void 0:B.type)==="mediaError"&&he.includes(B==null?void 0:B.details)||k.current(Te=>{var Le;return{...Te,kernelError:B?{type:(B==null?void 0:B.type)||"UnknownError",detail:((Le=B==null?void 0:B.error)==null?void 0:Le.message)||"Something was wrong with the playback. Please try again."}:null,isLoading:!1,playing:!1}})},onPause:R=>{g.current.onPause&&g.current.onPause(R),k.current(B=>({...B,playing:!1}))},onPlay:R=>{g.current.onPlay&&g.current.onPlay(R),k.current(B=>{var ce;let te=(ce=R==null?void 0:R.hasAudio)!=null?ce:!1,j=O.current?!0:te||B.hasAudio||!1;return{...B,playing:!0,isEnded:!1,hasAudio:j}})},onPlayBackQualityChange:R=>{g.current.onPlayBackQualityChange&&g.current.onPlayBackQualityChange(R),k.current(B=>({...B,playbackQuality:R}))},onPlayBackRateChange:R=>{g.current.onPlayBackRateChange&&g.current.onPlayBackRateChange(R),k.current(B=>({...B,playbackRate:R}))},onProgress:R=>{g.current.onProgress&&g.current.onProgress(R),I.current||k.current(B=>({...B,played:R.playedSeconds,loaded:R.loaded}))},onReady:R=>{g.current.onReady&&g.current.onReady(R),k.current(B=>({...B,isLoading:!1}))},onSeek:R=>{g.current.onSeek&&g.current.onSeek(R),k.current(B=>({...B,seek:R}))},onStart:()=>{g.current.onStart&&g.current.onStart()},onLoaded:(...R)=>{g.current.onLoaded&&g.current.onLoaded(...R)},onMount:(...R)=>{g.current.onMount&&g.current.onMount(...R)}}),[]),videoUrl:W!=null?W:w}},vs=dh;var F1=d.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  margin: auto;
`;var V1=Pe.default.forwardRef((e,t)=>{var b;let[o,r]=Pe.default.useState({width:e.width||"100%",height:e.height||"100%"}),[n,i]=Pe.default.useState({...Zt,isPIP:e.pip,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(b=e.volume)!=null?b:Zt.volume}),[s,l]=Pe.default.useState({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume});(e.pip!==s.pip||e.playbackRate!==s.playbackRate||e.loop!==s.loop||e.playing!==s.playing||e.muted!==s.muted||e.volume!==s.volume)&&(l({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume}),i(x=>{var M,L;let C={...x};return e.pip!==s.pip&&(C.isPIP=e.pip),e.playbackRate!==s.playbackRate&&(C.playbackRate=e.playbackRate),e.loop!==s.loop&&(C.loop=e.loop),e.playing!==s.playing&&(C.playing=e.playing),e.muted!==s.muted&&(C.isMuted=e.muted,C.volume=e.muted?0:(M=e.volume)!=null?M:Zt.volume),e.volume!==s.volume&&!e.muted&&(C.volume=(L=e.volume)!=null?L:Zt.volume),C}));let a=Pe.default.useRef(null),c=Pe.default.useRef(null),p=Pe.default.useRef(e.url),u=Pe.default.useRef(e.sources);Pe.default.useEffect(()=>{let x=p.current!==e.url,C=!(0,_1.default)(u.current,e.sources);(x||C)&&(p.current=e.url,u.current=e.sources,r({width:e.width||"100%",height:e.height||"100%"}),i(M=>({...M,isLoading:!0,isBuffering:!1,duration:0,played:0,loaded:0,seek:0,isEnded:!1,kernelError:null,seeking:!1})))},[e.url,e.sources,e.width,e.height]);let f=Pe.default.useRef(e.ads);Pe.default.useEffect(()=>{let x=f.current!==null&&f.current!==void 0,C=e.ads!==null&&e.ads!==void 0;f.current=e.ads,x&&!C&&i(M=>({...M,playing:!0}))},[e.ads]);let m=Pe.default.useCallback(x=>{var C,M;(M=(C=a.current)==null?void 0:C.handleKeyDown)==null||M.call(C,x)},[]),y=Pe.default.useMemo(()=>e.prevented||e.playing&&e.muted,[e.muted,e.playing,e.prevented]);Pe.default.useEffect(()=>{if(e.player&&n.isLoading===!1){let C=e.player.getPlayer(),M=()=>{let N=C.offsetWidth,$=C.offsetHeight;N>0&&$>0?r({width:`${N}px`,height:`${$}px`}):r({width:e.width||"100%",height:e.height||"100%"})},L=setTimeout(M,500),w=()=>M();return C.addEventListener("loadedmetadata",w),()=>{clearTimeout(L),C.removeEventListener("loadedmetadata",w)}}},[e.player,e.width,e.height,n.isLoading]);let{videoUrl:v,...S}=vs({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDisablePIP:e.onDisablePIP,onDuration:e.onDuration,onEnablePIP:e.onEnablePIP,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackQualityChange:e.onPlayBackQualityChange,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:i,playerState:n,extraProps:{url:e.url,sources:e.sources,fullHDQualityBreak:e.fullHDQualityBreak,prevented:y}}),T=Pe.default.useMemo(()=>({attributes:e.config.attributes,tracks:e.config.tracks,forceVideo:e.config.forceVideo,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceLoad:e.config.forceLoad,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS,loopOnEnded:e.config.loopOnEnded}),[e.config]);return Pe.default.createElement(D1,{tabIndex:0,role:"application",dir:"ltr",ref:c,onKeyDown:m,style:o},Pe.default.createElement(F1,null,v&&Pe.default.createElement(Ct,{ref:t,activePlayer:e.activePlayer,loop:n.loop,muted:n.isMuted,pip:n.isPIP,playbackRate:n.playbackRate,playbackQuality:n.playbackQuality,playsinline:e.playsinline,progressInterval:e.progressInterval,stopOnUnmount:e.stopOnUnmount,volume:n.volume,url:v,width:e.width,height:e.height,playing:n.playing,activeCaption:n.activeCaption,viewType:"video",config:T,disableDeferredLoading:e.disableDeferredLoading,progressFrequency:e.progressFrequency,...S})),Pe.default.createElement(R1,{ref:a,playerRef:c,url:v,sources:e.sources,hasAudio:n.hasAudio,spriteVTTFile:e.spriteVTTFile,chapters:e.chapters,captions:e.captions,heatmapData:e.heatmapData,ads:e.ads,hasResource:typeof v=="string"||e.sources.length>0,kernelMsg:n.kernelError,loading:n.isLoading,prevented:y,muted:n.isMuted,paused:n.playing===!1,live:e.live,buffered:n.loaded,ended:n.isEnded,seeking:n.seeking,waiting:n.isBuffering||e.waiting,duration:n.duration,currentTime:n.played,volume:n.volume,playbackRate:n.playbackRate,playbackQuality:n.playbackQuality,pictureInPictureEnabled:!0,pip:n.isPIP,loop:n.loop,activeCaption:n.activeCaption,fullscreen:n.isFullScreen,fullHDQualityBreak:e.fullHDQualityBreak,language:e.language,poster:e.poster,updateState:i,player:e.player,skinMode:e.skinMode,onPrevious:e.onPrevious,onNext:e.onNext,showNavButtons:e.showNavButtons}))});V1.displayName="MediaPlayerSkin";var $1=Pe.default.memo(V1,(e,t)=>e.url===t.url&&e.sources===t.sources&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.ads===t.ads&&e.prevented===t.prevented&&e.waiting===t.waiting&&e.playing===t.playing&&e.loop===t.loop&&e.volume===t.volume&&e.muted===t.muted&&e.paused===t.paused&&e.live===t.live&&e.pip===t.pip&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.height===t.height&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.pipeline===t.pipeline&&e.stopOnUnmount===t.stopOnUnmount&&e.activePlayer===t.activePlayer&&e.player===t.player&&e.progressFrequency===t.progressFrequency&&e.disableDeferredLoading===t.disableDeferredLoading&&e.language===t.language&&e.poster===t.poster&&e.config===t.config&&e.skinMode===t.skinMode&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onPlayBackQualityChange===t.onPlayBackQualityChange&&e.onProgress===t.onProgress&&e.onEnablePIP===t.onEnablePIP&&e.onDisablePIP===t.onDisablePIP&&e.onLoaded===t.onLoaded&&e.onMount===t.onMount&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);var Se=h(P());var A=h(P()),G=h(Q());Ne();var xs=h(P()),z1=({width:e=36,height:t=36})=>xs.default.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:t},xs.default.createElement("path",{d:"M13 10.15C13 9.5 13.72 9.1 14.27 9.46L25.97 17.31C26.46 17.64 26.46 18.36 25.97 18.69L14.27 26.54C13.72 26.9 13 26.5 13 25.85V10.15Z",fill:"currentColor"}));z1.displayName="AudioPlayIcon";var H1=xs.default.memo(z1);var Gn=h(P()),j1=({width:e=36,height:t=36})=>Gn.default.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:t},Gn.default.createElement("path",{d:"M11 9.5C11 9.08 11.34 8.75 11.75 8.75H14.75C15.16 8.75 15.5 9.08 15.5 9.5V26.5C15.5 26.92 15.16 27.25 14.75 27.25H11.75C11.34 27.25 11 26.92 11 26.5V9.5Z",fill:"currentColor"}),Gn.default.createElement("path",{d:"M20.5 9.5C20.5 9.08 20.84 8.75 21.25 8.75H24.25C24.66 8.75 25 9.08 25 9.5V26.5C25 26.92 24.66 27.25 24.25 27.25H21.25C20.84 27.25 20.5 26.92 20.5 26.5V9.5Z",fill:"currentColor"}));j1.displayName="AudioPauseIcon";var W1=Gn.default.memo(j1);var Cs=h(P()),U1=({width:e=36,height:t=36})=>Cs.default.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:t},Cs.default.createElement("path",{d:"M18 9V5.25L12.75 10.5L18 15.75V12C21.73 12 24.75 15.02 24.75 18.75C24.75 22.48 21.73 25.5 18 25.5C14.27 25.5 11.25 22.48 11.25 18.75H8.75C8.75 23.86 12.89 28 18 28C23.11 28 27.25 23.86 27.25 18.75C27.25 13.64 23.11 9.5 18 9.5V9Z",fill:"currentColor"}));U1.displayName="AudioReplayIcon";var X1=Cs.default.memo(U1);var Qr=h(P());var tl=({width:e=36,height:t=36})=>Qr.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Qr.default.createElement("path",{d:"M18 9V4.5L12 10.5L18 16.5V12C22.14 12 25.5 15.36 25.5 19.5C25.5 23.64 22.14 27 18 27C13.86 27 10.5 23.64 10.5 19.5H7.5C7.5 25.29 12.21 30 18 30C23.79 30 28.5 25.29 28.5 19.5C28.5 13.71 23.79 9 18 9Z"}),Qr.default.createElement("path",{d:"M16.83 22.5H15.555V18.615L14.04 19.08V18.045L16.695 17.1H16.83V22.5Z"}),Qr.default.createElement("path",{d:"M22.095 19.695C22.095 20.31 22.02 20.835 21.87 21.27C21.72 21.69 21.495 22.02 21.21 22.26C20.925 22.5 20.565 22.62 20.145 22.62C19.725 22.62 19.365 22.5 19.08 22.26C18.795 22.02 18.57 21.69 18.42 21.27C18.27 20.835 18.195 20.31 18.195 19.695C18.195 19.08 18.27 18.555 18.42 18.12C18.57 17.7 18.795 17.37 19.08 17.13C19.365 16.89 19.725 16.77 20.145 16.77C20.565 16.77 20.925 16.89 21.21 17.13C21.495 17.37 21.72 17.7 21.87 18.12C22.02 18.555 22.095 19.08 22.095 19.695ZM20.82 19.695C20.82 19.245 20.775 18.87 20.7 18.6C20.625 18.33 20.505 18.12 20.355 17.985C20.205 17.85 20.01 17.775 19.785 17.775H20.505C20.28 17.775 20.085 17.85 19.935 17.985C19.785 18.12 19.665 18.33 19.59 18.6C19.515 18.87 19.47 19.245 19.47 19.695C19.47 20.145 19.515 20.52 19.59 20.79C19.665 21.06 19.785 21.27 19.935 21.405C20.085 21.54 20.28 21.615 20.505 21.615H19.785C20.01 21.615 20.205 21.54 20.355 21.405C20.505 21.27 20.625 21.06 20.7 20.79C20.775 20.52 20.82 20.145 20.82 19.695Z"}));tl.displayName="SkipBackIcon";tl.propTypes=J;var Y1=Qr.default.memo(tl,re);var Jr=h(P());var ol=({width:e=36,height:t=36})=>Jr.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Jr.default.createElement("path",{d:"M18 9C12.21 9 7.5 13.71 7.5 19.5C7.5 25.29 12.21 30 18 30C23.79 30 28.5 25.29 28.5 19.5H25.5C25.5 23.64 22.14 27 18 27C13.86 27 10.5 23.64 10.5 19.5C10.5 15.36 13.86 12 18 12V16.5L24 10.5L18 4.5V9Z"}),Jr.default.createElement("path",{d:"M16.83 22.5H15.555V18.615L14.04 19.08V18.045L16.695 17.1H16.83V22.5Z"}),Jr.default.createElement("path",{d:"M22.095 19.695C22.095 20.31 22.02 20.835 21.87 21.27C21.72 21.69 21.495 22.02 21.21 22.26C20.925 22.5 20.565 22.62 20.145 22.62C19.725 22.62 19.365 22.5 19.08 22.26C18.795 22.02 18.57 21.69 18.42 21.27C18.27 20.835 18.195 20.31 18.195 19.695C18.195 19.08 18.27 18.555 18.42 18.12C18.57 17.7 18.795 17.37 19.08 17.13C19.365 16.89 19.725 16.77 20.145 16.77C20.565 16.77 20.925 16.89 21.21 17.13C21.495 17.37 21.72 17.7 21.87 18.12C22.02 18.555 22.095 19.08 22.095 19.695ZM20.82 19.695C20.82 19.245 20.775 18.87 20.7 18.6C20.625 18.33 20.505 18.12 20.355 17.985C20.205 17.85 20.01 17.775 19.785 17.775H20.505C20.28 17.775 20.085 17.85 19.935 17.985C19.785 18.12 19.665 18.33 19.59 18.6C19.515 18.87 19.47 19.245 19.47 19.695C19.47 20.145 19.515 20.52 19.59 20.79C19.665 21.06 19.785 21.27 19.935 21.405C20.085 21.54 20.28 21.615 20.505 21.615H19.785C20.01 21.615 20.205 21.54 20.355 21.405C20.505 21.27 20.625 21.06 20.7 20.79C20.775 20.52 20.82 20.145 20.82 19.695Z"}));ol.displayName="SkipForwardIcon";ol.propTypes=J;var G1=Jr.default.memo(ol,re);var rl=h(P()),fh=({width:e=24,height:t=24,...o})=>rl.default.createElement("svg",{viewBox:"11 10 14 16",xmlns:"http://www.w3.org/2000/svg",width:e,height:t,fill:"currentColor",...o},rl.default.createElement("path",{d:"M 13.211 23.887 C 13.082 23.986 12.972 24.02 12.883 23.989 C 12.794 23.958 12.75 23.874 12.75 23.739 L 12.75 12.261 C 12.75 12.126 12.794 12.042 12.883 12.011 C 12.972 11.98 13.082 12.014 13.211 12.113 L 20.492 17.649 C 20.553 17.696 20.598 17.745 20.625 17.797 L 20.625 12.51 C 20.625 12.375 20.69 12.258 20.82 12.159 C 20.95 12.061 21.104 12.011 21.281 12.011 L 22.594 12.011 C 22.771 12.011 22.925 12.061 23.055 12.159 C 23.185 12.258 23.25 12.375 23.25 12.51 L 23.25 23.49 C 23.25 23.625 23.185 23.742 23.055 23.841 C 22.925 23.939 22.771 23.989 22.594 23.989 L 21.281 23.989 C 21.104 23.989 20.95 23.939 20.82 23.841 C 20.69 23.742 20.625 23.625 20.625 23.49 L 20.625 18.203 C 20.598 18.255 20.553 18.304 20.492 18.351 Z"})),K1=fh;var ae=h(P()),nl=h(Q());var ir=h(P());var Z1=d.div`
  position: relative;
  display: inline-flex;
`,Q1=d.button`
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
`,J1=ir.default.forwardRef(({$visible:e,...t},o)=>ir.default.createElement("div",{ref:o,...t}));J1.displayName="MenuOverlay";var em=d(J1)`
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
`,tm=d.ul`
  padding: 10px 0;
`,om=d.li`
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
`,rm=d.span`
  margin-right: auto;
`,nm=d.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 87%;
  color: #fff;
`,im=ir.default.forwardRef(({$visible:e,...t},o)=>ir.default.createElement("div",{ref:o,...t}));im.displayName="SubMenuOverlay";var sm=d(im)`
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
`,am=d.div`
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
`,lm=d.div`
  opacity: ${({$show:e})=>e?1:0};
  transform: ${({$show:e})=>e?"translateX(0)":"translateX(50px)"};
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
`,um=d.ul`
  padding: 8px 0;
`,cm=ir.default.forwardRef(({$selected:e,...t},o)=>ir.default.createElement("li",{ref:o,...t}));cm.displayName="SubMenuItem";var pm=d(cm)`
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
`;var mh=[2,1.5,1.25,1,.75,.5],dm=({playbackRate:e,changePlaybackRate:t})=>{let o=ae.default.useRef(null),[r,n]=ae.default.useState(!1),[i,s]=ae.default.useState(!1),[l,a]=ae.default.useState(!1),{i18n:c}=z(),p=Ie(),u=ae.default.useCallback(S=>{S.stopPropagation(),n(T=>(T&&(s(!1),a(!1)),!T))},[]),f=ae.default.useCallback(()=>{s(!0),requestAnimationFrame(()=>a(!0))},[]),m=ae.default.useCallback(()=>{a(!1),setTimeout(()=>s(!1),150)},[]),y=ae.default.useCallback(S=>{t(S),a(!1),setTimeout(()=>{s(!1),n(!1)},150)},[t]);ae.default.useEffect(()=>{if(!r)return;let S=T=>{if(!o.current)return;(T.composedPath?T.composedPath():[]).includes(o.current)||o.current.contains(T.target)||(n(!1),s(!1),a(!1))};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[r]);let v=e===1?c.normal:`${e}x`;return ae.default.createElement(Z1,{ref:o},ae.default.createElement(be,{label:c.settings},ae.default.createElement(Q1,{type:"button","aria-label":c.settings,"aria-expanded":r,onClick:u,$expanded:r},ae.default.createElement(Qi,{...p}))),ae.default.createElement(em,{$visible:r&&!i},ae.default.createElement(tm,null,ae.default.createElement(om,null,ae.default.createElement("button",{type:"button",onClick:f},ae.default.createElement(rm,null,c.speed),ae.default.createElement(nm,null,v,ae.default.createElement(jr,{width:20,height:20})))))),ae.default.createElement(sm,{$visible:i},ae.default.createElement(am,{onClick:m},ae.default.createElement(or,{width:16,height:16}),c.speed),ae.default.createElement(lm,{$show:l},ae.default.createElement(um,null,mh.map(S=>ae.default.createElement(pm,{key:S,$selected:e===S},ae.default.createElement("button",{type:"button",onClick:()=>y(S)},S===1?c.normal:`${S}`)))))))};dm.propTypes={playbackRate:nl.default.number.isRequired,changePlaybackRate:nl.default.func.isRequired};var fm=ae.default.memo(dm);var mm=(e,t,o)=>{var i;let n=("changedTouches"in e&&((i=e.changedTouches)==null?void 0:i.length)>=1?e.changedTouches[0].pageX:e.clientX||0)-t.left;return n<=0?0:n>=t.width?o:Math.round(o*n/t.width)};var hm=d.div`
  ${Nr}
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
`,ym=d.div`
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
`,gm=d.span`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
`,bm=d.span`
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: #fff;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
`,Sm=d.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 0;
  position: relative;
`,ws=d.div`
  overflow: hidden;
  max-width: ${({$visible:e})=>e?"36px":"0"};
  opacity: ${({$visible:e})=>e?1:0};
  transition:
    max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s ease;
`,vm=d.div`
  grid-area: 1 / 1;
  display: flex;
  align-items: center;
  opacity: ${({$visible:e})=>e?1:0};
  pointer-events: ${({$visible:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease ${({$visible:e})=>e?"0.3s":"0s"};
  overflow: hidden;
  padding-left: 4px;
`,xm=d.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`,Cm=d.span`
  color: rgba(255, 255, 255, 0.6);
`,wm=d.div`
  flex: 1;
  min-width: 0;
  display: grid;
  align-items: center;
  margin-left: 6px;
`,km=d.div`
  grid-area: 1 / 1;
  min-width: 0;
  clip-path: ${({$visible:e})=>e?"inset(0 0 0 0)":"inset(0 100% 0 0)"};
  pointer-events: ${({$visible:e})=>e?"auto":"none"};
  transition: clip-path 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`,il=d.button`
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
`,sl=d.button`
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
`,Pm=d.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  height: 28px;
  padding: 0 4px;
`,al=d.div`
  position: relative;
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`,Tm=d.div`
  position: relative;
  width: 100%;
  height: 4px;
  display: flex;
  align-items: center;
  gap: 2px;
  transition: height 0.1s ease;

  ${al}:hover & {
    height: 6px;
  }
`,Lm=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
`,Em=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
  border-radius: 4px;
`,Mm=d.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: transform 0.1s ease;
  transform-origin: center center;
  transform: ${({$hovered:e})=>e?"scaleY(1.5)":"scaleY(1)"};
`,Im=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
`,Om=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
`,Am=d.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
`,ll=d.div`
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
`,Rm=d.span`
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  min-width: 48px;
  text-align: right;
  flex-shrink: 0;
  margin-right: 8px;
`,Bm=d.div`
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
`,Dm=d.button`
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
`,ul=d.div`
  display: flex;
  align-items: center;
  gap: 0;
  position: relative;
`,qm=d.div`
  overflow: hidden;
  max-width: ${({$dragging:e})=>e?"80px":"0"};
  opacity: ${({$dragging:e})=>e?1:0};
  transition:
    max-width 0.25s ease,
    opacity 0.25s ease;
  display: flex;
  justify-content: flex-end;

  ${ul}:hover & {
    max-width: 80px;
    opacity: 1;
  }
`,Nm=d.div`
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
`,Fm=d.div`
  position: absolute;
  top: 50%;
  right: 6px;
  height: 4px;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 2px;
  pointer-events: none;
`,_m=d.div`
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  transform: translate(50%, -50%);
  pointer-events: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
`,Vm=d.div`
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
`,j9=d.div`
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
`,W9=d.button`
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
`,U9=d.span`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  padding: 4px 16px 2px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;var cl=A.default.forwardRef(({videoRef:e,playerRef:t,hasResource:o=!1,loading:r,paused:n,ended:i,seeking:s,waiting:l,duration:a,buffered:c=null,currentTime:p,muted:u,volume:f,playbackRate:m,loop:y,poster:v,title:S,artist:T,chapters:b,onPlayClick:x,onPauseClick:C,onTogglePlay:M,changeVolume:L,onMutedClick:w,changeCurrentTime:N,changePlaybackRate:$,onSeeking:E,onPrevious:k,onNext:g,showNavButtons:O,ads:I=null,kernelMsg:D=null},V)=>{let W=ye(),{i18n:U}=z(),R=A.default.useRef(null),{segments:B,getChapterAtTime:te}=Mo({chapters:b,duration:a}),[j,ce]=A.default.useState(!1),he=j?I:null,{isAdActive:se,hasSkipTimer:Te,canSkip:Le,skipCountdown:_e,onSkipClick:Ve}=Yr({ads:he,currentTime:p,duration:a,ended:i,onPauseClick:C}),gt=A.default.useCallback(()=>{I&&!j&&ce(!0),x()},[I,j,x]);A.default.useEffect(()=>{I||ce(!1)},[I]);let nt=A.default.useMemo(()=>{let Z=te(p);return Z?Z.title:null},[te,p]);A.default.useEffect(()=>{W({videoRef:e,playerRef:t})},[e,t,W]),A.default.useImperativeHandle(V,()=>({showControls:()=>{},hideControls:()=>{}}),[]);let Ee=A.default.useCallback(Z=>{if(!R.current||!a)return;let de=R.current.getBoundingClientRect(),ge=Math.max(0,Math.min(1,(Z.clientX-de.left)/de.width));N(ge*a)},[a,N]),Nt=A.default.useCallback(Z=>{if(!a)return;E==null||E(!0),Ee(Z);let de=ct=>Ee(ct),ge=()=>{E==null||E(!1),document.removeEventListener("mousemove",de),document.removeEventListener("mouseup",ge)};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ge)},[a,Ee,E]),[lt,ho]=A.default.useState(!1),[Ft,bt]=A.default.useState(0),[Qt,Lt]=A.default.useState(null),[ar,yo]=A.default.useState(0),Jt=A.default.useRef(null),Ro=A.default.useRef(null),_t=A.default.useCallback(Z=>{var ml;if(!R.current||!a)return;let de=R.current.getBoundingClientRect(),ge=mm(Z,de,a),ct=Jt.current,pt=ct?ct.getBoundingClientRect():de,zt=(((ml=Ro.current)==null?void 0:ml.offsetWidth)||0)/2,ks=Z.clientX-pt.left,Gm=de.left-pt.left,Km=de.right-pt.left,Zm=Gm+zt,Qm=Km-zt,Jm=Math.max(Zm,Math.min(Qm,ks));bt(ge),yo(Jm),ho(!0);let fl=te(ge);Lt(fl?fl.title:null)},[a,te]),Bo=A.default.useCallback(()=>{ho(!1)},[]),en=A.default.useMemo(()=>{if(!lt||B.length===0)return-1;let Z=te(Ft);return Z?B.findIndex(de=>de.startTime===Z.startTime):-1},[lt,Ft,B,te]),tn=A.default.useCallback(()=>{if(!a)return;let Z=Math.max(0,p-10);N(Z)},[p,a,N]),on=A.default.useCallback(()=>{if(!a)return;let Z=Math.min(a,p+10);N(Z)},[p,a,N]),St=A.default.useRef(null),lr=A.default.useRef(null),[ur,Do]=A.default.useState(!1),[it,rn]=A.default.useState(null),qo=A.default.useCallback(Z=>{let de=lr.current;if(!de)return;let ge=de.getBoundingClientRect(),ct=Math.max(0,Math.min(ge.width,Z-ge.left));rn(ct)},[]),No=A.default.useCallback(Z=>{let de=Z.currentTarget||St.current;if(!de)return;let ge=de.getBoundingClientRect(),ct=ge.width-12,pt=Z.clientX-ge.left-6,So=Math.max(0,Math.min(1,1-pt/ct));L(So)},[L]),[ut,go]=A.default.useState(!1),cr=A.default.useCallback(Z=>{St.current=Z.currentTarget,No(Z),go(!0),qo(Z.clientX);let de=ct=>{let pt=St.current.getBoundingClientRect(),So=pt.width-12,zt=ct.clientX-pt.left-6,ks=Math.max(0,Math.min(1,1-zt/So));L(ks),qo(ct.clientX)},ge=()=>{go(!1),document.removeEventListener("mousemove",de),document.removeEventListener("mouseup",ge)};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ge)},[No,L,qo]),pr=A.default.useCallback(()=>{Do(!0)},[]),bo=A.default.useCallback(()=>{ut||Do(!1)},[ut]);A.default.useEffect(()=>{ut||Do(!1)},[ut]);let eo=!n&&!i,Xe=Ie(),Vt=a>0?p/a*100:0,vt=c!=null?c*100:0,$t=a>0?Math.max(0,a-p):0,dr=a>0&&$t>0?`-${De($t)}`:"0:00";return A.default.createElement(hm,{ref:Jt},lt&&A.default.createElement(ym,{ref:Ro,style:{left:`${ar}px`}},Qt&&A.default.createElement(gm,null,Qt),A.default.createElement(bm,null,De(Ft))),A.default.createElement(Sm,null,!se&&A.default.createElement(be,{label:U.skipBack},A.default.createElement(ws,{$visible:eo},A.default.createElement(sl,{onClick:tn,"aria-label":U.skipBack},A.default.createElement(Y1,{...Xe})))),se&&Te?A.default.createElement(ws,{$visible:!0},A.default.createElement(il,{onClick:Le?Ve:void 0,"aria-label":Le?U.skipAd:`${_e}s`,style:{opacity:Le?1:.6,cursor:Le?"pointer":"default"}},Le?A.default.createElement(K1,{width:24,height:24}):A.default.createElement("span",{style:{fontSize:"14px",fontWeight:500,color:"#fff"}},_e,"s"))):A.default.createElement(be,{label:i?U.replay:n?U.play:U.pause},A.default.createElement(il,{onClick:n||i?gt:C,"aria-label":i?U.replay:n?U.play:U.pause},i?A.default.createElement(X1,{...Xe}):n?A.default.createElement(H1,{...Xe}):A.default.createElement(W1,{...Xe}))),!se&&A.default.createElement(be,{label:U.skipForward},A.default.createElement(ws,{$visible:eo},A.default.createElement(sl,{onClick:on,"aria-label":U.skipForward},A.default.createElement(G1,{...Xe})))),A.default.createElement(wm,null,A.default.createElement(vm,{$visible:!eo},A.default.createElement(xm,null,A.default.createElement(Cm,null,i?"Replay: ":"Play: "),S||"",nt&&` \u2022 ${nt}`)),A.default.createElement(km,{$visible:eo},A.default.createElement(Pm,null,A.default.createElement(al,{ref:R,onMouseDown:se?void 0:Nt,onMouseMove:se?void 0:_t,onMouseLeave:se?void 0:Bo,style:se?{pointerEvents:"none",cursor:"default"}:void 0},A.default.createElement(Tm,null,B.length>0?B.map((Z,de)=>{let ge=Z.endTime-Z.startTime,ct=ge/a*100,pt=0;p>=Z.endTime?pt=100:p>Z.startTime&&(pt=(p-Z.startTime)/ge*100);let So=c!=null?c*a:0,zt=0;return So>=Z.endTime?zt=100:So>Z.startTime&&(zt=(So-Z.startTime)/ge*100),A.default.createElement(Mm,{key:Z.startTime,style:{width:`${ct}%`},$hovered:en===de},A.default.createElement(Om,{style:{width:`${zt}%`}}),A.default.createElement(Im,{style:{width:`${pt}%`,background:se?"#fc0":void 0}}),l&&zt<100&&A.default.createElement(ll,{style:{clipPath:`inset(0 0 0 ${Math.max(zt,pt)}%)`}}))}):A.default.createElement(Am,null,A.default.createElement(Lm,{style:{width:`${vt}%`}}),A.default.createElement(Em,{style:{width:`${Vt}%`,background:se?"#fc0":void 0}}),l&&vt<100&&A.default.createElement(ll,{style:{clipPath:`inset(0 0 0 ${Math.max(vt,Vt)}%)`}}))))))),A.default.createElement(Rm,null,dr),A.default.createElement(Bm,null,A.default.createElement(ul,{ref:lr},A.default.createElement(qm,{$dragging:ut,onMouseEnter:pr,onMouseLeave:bo},A.default.createElement(Nm,{onMouseDown:cr,role:"slider","aria-label":"Volume","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":u?0:Math.round(f*100)},A.default.createElement(Fm,{style:{width:`${u?0:f*68}px`}}),A.default.createElement(_m,{style:{right:`${6+(u?0:f*68)}px`}}))),(ur||ut)&&A.default.createElement(Vm,{style:it!=null&&ut?{left:`${it}px`,transform:"translateX(-50%)"}:{left:`${6+68*(1-(u?0:f))}px`,transform:"translateX(-50%)"}},u?0:Math.round(f*100),"%"),A.default.createElement(be,{label:u?U.unmute:U.mute,disabled:ut},A.default.createElement(Dm,{onClick:w,"aria-label":u?U.unmute:U.mute},u||f===0?A.default.createElement(Ar,{...Xe}):A.default.createElement(Hi,{...Xe})))),!se&&A.default.createElement(fm,{playbackRate:m,changePlaybackRate:$}))))});cl.displayName="AudioPlayerSkin";cl.propTypes={videoRef:G.default.oneOfType([G.default.func,G.default.shape({current:G.default.any})]).isRequired,playerRef:G.default.oneOfType([G.default.func,G.default.shape({current:G.default.any})]).isRequired,hasResource:G.default.bool,loading:G.default.bool,paused:G.default.bool.isRequired,ended:G.default.bool.isRequired,seeking:G.default.bool,waiting:G.default.bool,duration:G.default.number.isRequired,buffered:G.default.number,currentTime:G.default.number.isRequired,muted:G.default.bool.isRequired,volume:G.default.number.isRequired,playbackRate:G.default.number,loop:G.default.bool,poster:G.default.string,title:G.default.string,artist:G.default.string,chapters:G.default.arrayOf(G.default.shape({title:G.default.string.isRequired,startTime:G.default.number.isRequired})),onPlayClick:G.default.func.isRequired,onPauseClick:G.default.func.isRequired,onTogglePlay:G.default.func,changeVolume:G.default.func.isRequired,onMutedClick:G.default.func.isRequired,changeCurrentTime:G.default.func.isRequired,changePlaybackRate:G.default.func.isRequired,onSeeking:G.default.func,kernelMsg:G.default.any,onPrevious:G.default.func,onNext:G.default.func,showNavButtons:G.default.bool};var $m=A.default.memo(cl,(e,t)=>e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.hasResource===t.hasResource&&e.loading===t.loading&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.poster===t.poster&&e.title===t.title&&e.artist===t.artist&&e.chapters===t.chapters&&e.kernelMsg===t.kernelMsg&&e.onPlayClick===t.onPlayClick&&e.onPauseClick===t.onPauseClick&&e.onTogglePlay===t.onTogglePlay&&e.changeVolume===t.changeVolume&&e.onMutedClick===t.onMutedClick&&e.changeCurrentTime===t.changeCurrentTime&&e.changePlaybackRate===t.changePlaybackRate&&e.onSeeking===t.onSeeking&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons&&e.ads===t.ads);var pl=h(P());var zm=d.div`
  position: relative;
  width: 100%;
  outline: none;
  overflow: visible;

  ${Fi}
`;var Hm=pl.default.forwardRef(({children:e,...t},o)=>pl.default.createElement(zm,{ref:o,...t},e));Hm.displayName="AudioPlayerWrapper";var jm=Hm;var Wm=Se.default.forwardRef((e,t)=>{var M;let[o,r]=Se.default.useState({...Zt,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(M=e.volume)!=null?M:Zt.volume}),[n,i]=Se.default.useState({playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume});(e.playbackRate!==n.playbackRate||e.loop!==n.loop||e.playing!==n.playing||e.muted!==n.muted||e.volume!==n.volume)&&(i({playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume}),r(L=>{var N,$;let w={...L};return e.playbackRate!==n.playbackRate&&(w.playbackRate=e.playbackRate),e.loop!==n.loop&&(w.loop=e.loop),e.playing!==n.playing&&(w.playing=e.playing),e.muted!==n.muted&&(w.isMuted=e.muted,w.volume=e.muted?0:(N=e.volume)!=null?N:Zt.volume),e.volume!==n.volume&&!e.muted&&(w.volume=($=e.volume)!=null?$:Zt.volume),w}));let s=Se.default.useRef(null),l=Se.default.useRef(null),a=Se.default.useRef(e.url);Se.default.useEffect(()=>{a.current!==e.url&&(a.current=e.url,r(L=>({...L,isLoading:!0,isBuffering:!1,duration:0,played:0,loaded:0,isEnded:!1,kernelError:null,seeking:!1})))},[e.url]);let c=Se.default.useRef(e.ads);Se.default.useEffect(()=>{let L=c.current!==null&&c.current!==void 0,w=e.ads!==null&&e.ads!==void 0;c.current=e.ads,L&&!w&&r(N=>({...N,playing:!0}))},[e.ads]);let{videoUrl:p,...u}=vs({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDuration:e.onDuration,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:r,playerState:o,extraProps:{url:e.url,sources:[],prevented:!1}}),f=Se.default.useMemo(()=>({attributes:e.config.attributes,tracks:e.config.tracks,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS}),[e.config]),{onMutedClick:m,changeVolume:y}=Ss({prevented:!1,muted:o.isMuted,videoRef:l,src:p,updateState:({muted:L,volume:w})=>r(N=>({...N,isMuted:L!=null?L:!1,volume:w!=null?w:0}))});Se.default.useEffect(()=>{var L;e.player&&(l.current=(L=e.player.getPlayer())!=null?L:null)},[e.player]);let v=Se.default.useCallback(()=>{r(L=>({...L,playing:!0}))},[]),S=Se.default.useCallback(()=>{r(L=>({...L,playing:!1}))},[]),T=Se.default.useCallback(()=>{r(L=>({...L,playing:!L.playing}))},[]),b=Se.default.useCallback(L=>{e.player&&(r(w=>({...w,played:L})),e.player.seekTo(L))},[e.player]),x=Se.default.useCallback(L=>{r(w=>({...w,seeking:L}))},[]),C=Se.default.useCallback(L=>{r(w=>({...w,playbackRate:L}))},[]);return Se.default.createElement(bs,{language:e.language},Se.default.createElement(jm,{ref:s,tabIndex:0,role:"application",dir:"ltr"},p&&Se.default.createElement(Ct,{ref:t,activePlayer:e.activePlayer,loop:o.loop,muted:o.isMuted,playbackRate:o.playbackRate,playsinline:e.playsinline,progressInterval:e.progressInterval,stopOnUnmount:e.stopOnUnmount,volume:o.volume,url:p,width:"0",height:"0",playing:o.playing,viewType:"audio",config:f,...u}),Se.default.createElement($m,{videoRef:l,playerRef:s,hasResource:typeof p=="string",hasAudio:!0,loading:o.isLoading,paused:o.playing===!1,ended:o.isEnded,seeking:o.seeking,waiting:o.isBuffering||e.waiting,duration:o.duration,buffered:o.loaded,currentTime:o.played,muted:o.isMuted,volume:o.volume,playbackRate:o.playbackRate,loop:o.loop,poster:e.poster,title:e.title,artist:e.artist,chapters:e.chapters,onPlayClick:v,onPauseClick:S,onTogglePlay:T,changeVolume:y,onMutedClick:m,changeCurrentTime:b,changePlaybackRate:C,onSeeking:x,onPrevious:e.onPrevious,onNext:e.onNext,showNavButtons:e.showNavButtons,ads:e.ads})))});Wm.displayName="AudioMediaPlayerSkin";var Um=Se.default.memo(Wm,(e,t)=>e.url===t.url&&e.playing===t.playing&&e.loop===t.loop&&e.volume===t.volume&&e.muted===t.muted&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.stopOnUnmount===t.stopOnUnmount&&e.activePlayer===t.activePlayer&&e.player===t.player&&e.waiting===t.waiting&&e.language===t.language&&e.poster===t.poster&&e.title===t.title&&e.artist===t.artist&&e.config===t.config&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onProgress===t.onProgress&&e.onLoaded===t.onLoaded&&e.onMount===t.onMount&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);Ht();Ne();var hh=typeof window!="undefined"&&window.document&&typeof document!="undefined",yh=typeof global!="undefined"&&global.window&&global.window.document,gh=Object.keys(_s),bh=hh||yh?sr.default.Suspense:()=>null,Ym=e=>{var t;return t=class extends sr.default.Component{constructor(){super(...arguments);q(this,"player",null);q(this,"state",{});q(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{n&&n!==this.player&&(this.player=n,this.forceUpdate())}});q(this,"getDuration",()=>this.player?this.player.getDuration():null);q(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null);q(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null);q(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null);q(this,"seekTo",(n,i,s)=>{if(!this.player)return null;this.player.seekTo(n,i,s)});q(this,"handleReady",()=>{this.props.onReady&&this.props.onReady(this)});q(this,"getActivePlayer",pn((n,i)=>e.canPlay(n,i)?e:null));q(this,"getConfig",pn((n,i,s)=>{let{config:l}=this.props;return Xm.default.all([li.config,li.config[s]||{},l,l[s]||{}])}));q(this,"getAttributes",pn(()=>Vl(this.props,gh)));q(this,"getPlayerConfig",pn(n=>{let i=(this.props.captions||[]).map(l=>({kind:l.kind||"subtitles",src:l.src,srcLang:l.language,label:l.label})),s=[...n.tracks||[],...i];return{attributes:n.attributes,tracks:s,forceVideo:n.forceVideo,forceHLS:n.forceHLS,dashVersion:n.dashVersion,forceDASH:n.forceDASH,forceFLV:n.forceFLV,flvVersion:n.flvVersion,forceLoad:n.forceLoad,forceDisableHls:n.forceDisableHls,hlsOptions:n.hlsOptions,hlsVersion:n.hlsVersion,forceSafariHLS:n.forceSafariHLS,loopOnEnded:n.loopOnEnded}}));q(this,"getSourceProps",()=>"sources"in this.props&&this.props.sources!==void 0?{sources:this.props.sources,fullHDQualityBreak:this.props.fullHDQualityBreak}:{sources:[]});q(this,"getUrlProp",()=>"url"in this.props&&this.props.url!==void 0?this.props.url:"");q(this,"getEffectiveViewType",()=>{if(this.props.viewType==="audio")return"audio";let n=this.getUrlProp();return n&&Ls(n)?"audio":"video"});q(this,"renderActivePlayer",(n,i)=>{if(!n&&!i)return null;let s=this.getActivePlayer(n,i);if(!s)return null;let l=this.getConfig(n,i,s.key),a=this.getPlayerConfig(l),c=this.getSourceProps(),p=this.getUrlProp();return this.getEffectiveViewType()==="audio"?sr.default.createElement(Um,{key:`${s.key}-audio`,ref:this.references.player,activePlayer:s.lazyPlayer,player:this.player,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,muted:this.props.muted,loop:this.props.loop,url:p,width:this.props.width,playing:this.props.playing,waiting:this.props.waiting,config:a,language:this.props.language,poster:this.props.poster,title:this.props.title,artist:this.props.artist,chapters:this.props.chapters,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDuration:this.props.onDuration,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackRateChange:this.props.onPlayBackRateChange,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,onPrevious:this.props.onPrevious,onNext:this.props.onNext,showNavButtons:this.props.showNavButtons,ads:this.props.ads}):sr.default.createElement($1,{key:s.key,ref:this.references.player,activePlayer:s.lazyPlayer,player:this.player,loop:this.props.loop,muted:this.props.muted,pip:this.props.pip,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,url:p,sources:c.sources,width:this.props.width,height:this.props.height,playing:this.props.playing,config:a,prevented:this.props.prevented,waiting:this.props.waiting,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onDuration:this.props.onDuration,onEnablePIP:this.props.onEnablePIP,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackQualityChange:this.props.onPlayBackQualityChange,onPlayBackRateChange:this.props.onPlayBackRateChange,onPrevious:this.props.onPrevious,onNext:this.props.onNext,showNavButtons:this.props.showNavButtons,fullHDQualityBreak:c.fullHDQualityBreak,language:this.props.language,live:this.props.live,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,disableDeferredLoading:this.props.disableDeferredLoading,progressFrequency:this.props.progressFrequency,spriteVTTFile:this.props.spriteVTTFile,chapters:this.props.chapters,captions:this.props.captions,heatmapData:this.props.heatmapData,ads:this.props.ads,poster:this.props.poster,skinMode:this.props.skinMode})})}shouldComponentUpdate(n,i){return!(0,dl.default)(this.props,n)||!(0,dl.default)(this.state,i)}componentDidUpdate(){}render(){let{wrapper:n}=this.props,i=this.getUrlProp(),s=this.getSourceProps(),{className:l,...a}=this.getAttributes(),c=typeof n=="string"?this.references.wrapper:void 0;return sr.default.createElement(n,{ref:c,"data-testid":"media-player-skin",className:`playerstack${l?` ${l}`:""}`,...a},sr.default.createElement(bh,{fallback:this.props.fallback},this.renderActivePlayer(i,s.sources)))}},q(t,"displayName","MediaPlayer"),q(t,"propTypes",_s),q(t,"defaultProps",li),q(t,"canPlay",(n,i)=>!!e.canPlay(n,i)),q(t,"canEnablePIP",n=>!!(e.canEnablePIP&&e.canEnablePIP(n))),t};var Sh=Ym(jl);return s0(vh);})();
PlayerStack=PlayerStack.default;
//# sourceMappingURL=PlayerStack.js.map
