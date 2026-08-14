var Gm=Object.create;var Bn=Object.defineProperty;var Km=Object.getOwnPropertyDescriptor;var Zm=Object.getOwnPropertyNames;var Qm=Object.getPrototypeOf,Jm=Object.prototype.hasOwnProperty;var e0=(e,t,o)=>t in e?Bn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var Fe=(e,t)=>()=>(e&&(t=e(e=0)),t);var Io=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),t0=(e,t)=>{for(var o in t)Bn(e,o,{get:t[o],enumerable:!0})},o0=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Zm(t))!Jm.call(e,n)&&n!==o&&Bn(e,n,{get:()=>t[n],enumerable:!(r=Km(t,n))||r.enumerable});return e};var j=(e,t,o)=>(o=e!=null?Gm(Qm(e)):{},o0(t||!e||!e.__esModule?Bn(o,"default",{value:e,enumerable:!0}):o,e));var B=(e,t,o)=>(e0(e,typeof t!="symbol"?t+"":t,o),o);var ul=Io((Bh,ll)=>{ll.exports=function(t,o,r){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof o=="function"&&(r=o,o={}),o=o||{},r=r||function(){},i.type=o.type||"text/javascript",i.charset=o.charset||"utf8",i.async="async"in o?!!o.async:!0,i.src=t,o.attrs&&r0(i,o.attrs),o.text&&(i.text=""+o.text);var s="onload"in i?al:n0;s(i,r),i.onload||al(i,r),n.appendChild(i)};function r0(e,t){for(var o in t)e.setAttribute(o,t[o])}function al(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n0(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}});function sr(e){var t,o;return typeof window=="undefined"?null:window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:(o=(t=window.module)==null?void 0:t.exports)!=null&&o[e]?window.module.exports[e]:null}function Ao(e,t,o=null,r=()=>!0,n=cl.default){let i=sr(t);return i&&r&&r(i)?Promise.resolve(i):new Promise((s,l)=>{if(Oo[e]){Oo[e].push({resolve:s,reject:l});return}Oo[e]=[{resolve:s,reject:l}];let a=c=>{Oo[e].forEach(p=>p.resolve(c)),Oo[e]=null};if(o){let c=window[o];window[o]=function(){c&&c(),a(sr(t))}}n(e,c=>{c?(Oo[e].forEach(p=>p.reject(c)),Oo[e]=null):o||a(sr(t))})})}var cl,Oo,pl=Fe(()=>{"use strict";cl=j(ul());Oo={}});function Ct(e){return typeof window!="undefined"&&typeof window.MediaStream!="undefined"&&e instanceof window.MediaStream}function Ur(e){return/^blob:/.test(e)}function Xr(e){return(e==null?void 0:e.mozHasAudio)||(e==null?void 0:e.webkitAudioDecodedByteCount)>0||(e==null?void 0:e.audioTracks)!==void 0&&e.audioTracks.length>0}function Kt(e){let t=e||document.createElement("video"),o=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&o}var is=Fe(()=>{"use strict"});function as(e){return!e||typeof e!="string"?!1:ss.test(e)}function ar(e,t){if(t&&t.length>0)return!0;if(!e)return!1;if(Ct(e)||Ur(e))return!0;let o=e;return dl.test(o)||ss.test(o)||Dn.test(o)||qn.test(o)||Nn.test(o)}var dl,ss,Dn,qn,Nn,fl=Fe(()=>{"use strict";is();dl=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ss=/\.(mp3|wav|flac|aac|ogg|m4a|opus|wma)(#t=[,\d+]+)?($|\?)/i,Dn=/\.(m3u8)($|\?)/i,qn=/\.(mpd)($|\?)/i,Nn=/\.(flv)($|\?)/i});var Fn,ml,_n,ls,us,cs,ps,ds,fs,ms,hl=Fe(()=>{"use strict";Fn=typeof navigator!="undefined",ml=Fn&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,_n=Fn&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||ml)&&!window.MSStream,ls=Fn&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,us="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",cs="Hls",ps="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",ds="dashjs",fs="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",ms="flvjs"});function lr(e){if(typeof document=="undefined")return null;let t=`${yl}${e}=`,o=document.cookie.split(";");for(let r=0;r<o.length;r++){let n=o[r];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(t)===0)try{return decodeURIComponent(n.substring(t.length,n.length))}catch{return n.substring(t.length,n.length)}}return null}function ur(e,t,o){if(typeof document=="undefined")return;let r="";if(o){let n=new Date;n.setTime(n.getTime()+o*24*60*60*1e3),r=`; expires=${n.toUTCString()}`}document.cookie=`${yl}${e}=${encodeURIComponent(t||"")}${r}; path=/`}var yl,gl=Fe(()=>{"use strict";yl="rmp_"});function i0(){if(hs)return;if(typeof window=="undefined"||typeof navigator=="undefined"){hs=!0;return}let e=window.navigator.userAgent.toLowerCase(),t="ontouchstart"in window||navigator.maxTouchPoints>0,o=/iphone|ipod|android.*mobile|windows phone|blackberry/.test(e),r=/ipad|android(?!.*mobile)|silk|kindle|tablet/.test(e),n=!t&&/mac|windows|linux|cros/.test(e);o||r?(bl=!1,ys=!0):(bl=n,ys=!n),hs=!0}var bl,ys,hs,Vn,Sl=Fe(()=>{"use strict";bl=!1,ys=!1,hs=!1;i0();Vn=ys});function Me(e){let t=Math.floor(e),o=Math.floor(t/3600),r=Math.floor(t%3600/60),n=t%60;return o>0?`${String(o).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Yr(e,t){return e.reduce((o,r)=>{let n=String(r[t]);return o[n]=r,o},{})}function $n(e,t){let o={},r=Object.keys(e);for(let n of r)t.indexOf(n)===-1&&(o[n]=e[n]);return o}var vl=Fe(()=>{"use strict"});function xl(e){let t=e.trim().split(":");if(t.length===3){let[o,r,n]=t;return parseFloat(o)*3600+parseFloat(r)*60+parseFloat(n)}if(t.length===2){let[o,r]=t;return parseFloat(o)*60+parseFloat(r)}return 0}function zn(e){let t=[],o=e.split(`
`),r=0;for(;r<o.length;){let n=o[r].trim();if(n.includes(" --> ")){let[i,s]=n.split(" --> "),l=xl(i),a=xl(s.split(" ")[0]),c=[];for(r++;r<o.length&&o[r].trim()!=="";)c.push(o[r].trim()),r++;c.length>0&&t.push({startTime:l,endTime:a,text:c.join(`
`)})}else r++}return t}function Hn(e,t){return e.filter(o=>t>=o.startTime&&t<=o.endTime)}function cr(e,t){let o=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16),i=parseInt(t)/100;return`rgba(${o}, ${r}, ${n}, ${i})`}function jn(e,t){switch(e){case"dropshadow":return`2px 2px 3px ${t}, 2px 2px 4px ${t}`;case"raised":return`1px 1px 0 ${t}, 2px 2px 0 ${t}`;case"depressed":return`-1px -1px 0 ${t}, -2px -2px 0 ${t}`;case"uniform":return`0 0 3px ${t}, 0 0 3px ${t}, 0 0 3px ${t}, 0 0 3px ${t}`;default:return"none"}}var co,Gr,Cl=Fe(()=>{"use strict";co={fontFamily:"sans-serif",fontColor:"#ffffff",fontSize:"100%",fontOpacity:"100%",backgroundColor:"#000000",backgroundOpacity:"75%",windowColor:"#000000",windowOpacity:"0%",edgeStyle:"none"},Gr={fontFamily:[{label:"Proportional Sans-Serif",value:"sans-serif"},{label:"Monospace Sans-Serif",value:"monospace"},{label:"Proportional Serif",value:"serif"},{label:"Monospace Serif",value:'"Courier New", monospace'},{label:"Casual",value:'"Comic Sans MS", cursive'},{label:"Cursive",value:'"Brush Script MT", cursive'},{label:"Small Capitals",value:"small-caps"}],fontColor:[{label:"White",value:"#ffffff"},{label:"Yellow",value:"#ffff00"},{label:"Green",value:"#00ff00"},{label:"Cyan",value:"#00ffff"},{label:"Blue",value:"#0000ff"},{label:"Magenta",value:"#ff00ff"},{label:"Red",value:"#ff0000"},{label:"Black",value:"#000000"}],fontSize:[{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"},{label:"150%",value:"150%"},{label:"200%",value:"200%"},{label:"300%",value:"300%"},{label:"400%",value:"400%"}],fontOpacity:[{label:"25%",value:"25%"},{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"}],backgroundColor:[{label:"Black",value:"#000000"},{label:"White",value:"#ffffff"},{label:"Yellow",value:"#ffff00"},{label:"Green",value:"#00ff00"},{label:"Cyan",value:"#00ffff"},{label:"Blue",value:"#0000ff"},{label:"Magenta",value:"#ff00ff"},{label:"Red",value:"#ff0000"}],backgroundOpacity:[{label:"0%",value:"0%"},{label:"25%",value:"25%"},{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"}],windowColor:[{label:"Black",value:"#000000"},{label:"White",value:"#ffffff"},{label:"Red",value:"#ff0000"},{label:"Green",value:"#00ff00"},{label:"Blue",value:"#0000ff"},{label:"Yellow",value:"#ffff00"},{label:"Magenta",value:"#ff00ff"},{label:"Cyan",value:"#00ffff"}],windowOpacity:[{label:"0%",value:"0%"},{label:"25%",value:"25%"},{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"}],edgeStyle:[{label:"None",value:"none"},{label:"Drop Shadow",value:"dropshadow"},{label:"Raised",value:"raised"},{label:"Depressed",value:"depressed"},{label:"Uniform",value:"uniform"}]}});var wl=Fe(()=>{"use strict";is();gl();Sl();vl();pl();Cl()});var po,kl=Fe(()=>{"use strict";po={exitFullScreenMode:"Exit full screen mode (f)",fullScreen:"Full screen",exitFullscreen:"Exit full screen",fullscreen:"Full screen",play:"Play",replay:"Replay",pause:"Pause",previous:"Previous",next:"Next",normal:"Normal",settings:"Settings",speed:"Speed",quality:"Quality",auto:"Auto",hd:"HD",live:"Live",seconds:"seconds",clickToUnmute:"Click to unmute",playbackStuckClickResumePlayback:"Playback is stuck, click to resume playback.",mute:"Mute (m)",activateSound:"Activate sound",thisVideoHasNoSound:"This video has no sound",timeBar:"Time bar",loop:"Loop",pictureInPicture:"Picture in picture",captions:"Captions",off:"Off",captionOptions:"Options",fontFamily:"Font family",fontColor:"Font color",fontSize:"Font size",fontOpacity:"Font opacity",backgroundColor:"Background color",backgroundOpacity:"Background opacity",windowColor:"Window color",windowOpacity:"Window opacity",edgeStyle:"Character edge style",reset:"Reset",skipBack:"Back 10s",skipForward:"Forward 10s",unmute:"Unmute",close:"Close",back:"Back",skipAd:"Skip",ad:"Ad",sponsored:"Sponsored"}});var fo,Pl=Fe(()=>{"use strict";fo={exitFullScreenMode:"Salir de pantalla completa (f)",fullScreen:"Pantalla completa",exitFullscreen:"Salir de pantalla completa",fullscreen:"Pantalla completa",play:"Reproducir",replay:"Repetir",pause:"Pausar",previous:"Anterior",next:"Siguiente",normal:"Normal",settings:"Ajustes",speed:"Velocidad",quality:"Calidad",auto:"Auto",hd:"HD",live:"En vivo",seconds:"segundos",clickToUnmute:"Haz clic para activar el sonido",playbackStuckClickResumePlayback:"La reproducci\xF3n se ha detenido, haz clic para continuar.",mute:"Silenciar (m)",activateSound:"Activar sonido",thisVideoHasNoSound:"Este video no tiene sonido",timeBar:"Barra de tiempo",loop:"Repetir",pictureInPicture:"Imagen en imagen",captions:"Subt\xEDtulos",off:"Desactivado",captionOptions:"Opciones",fontFamily:"Familia de fuente",fontColor:"Color de fuente",fontSize:"Tama\xF1o de fuente",fontOpacity:"Opacidad de fuente",backgroundColor:"Color de fondo",backgroundOpacity:"Opacidad de fondo",windowColor:"Color de ventana",windowOpacity:"Opacidad de ventana",edgeStyle:"Estilo de borde",reset:"Restablecer",skipBack:"Retroceder 10s",skipForward:"Avanzar 10s",unmute:"Activar sonido",close:"Cerrar",back:"Atr\xE1s",skipAd:"Omitir",ad:"Anuncio",sponsored:"Patrocinado"}});var Tl=Fe(()=>{"use strict";kl();Pl()});var Re=Fe(()=>{"use strict";fl();hl();wl();Tl()});import{lazy as l0}from"react";var Ll,gs=Fe(()=>{Re();Ll=e=>l0(async()=>{let t=await e();return typeof t.default=="function"?t:t.default})});function El(e,...t){let o=[].concat(...t);return $n(e,o)}function Ml(e){return t=>{e.forEach(o=>{typeof o=="function"?o(t):o&&(o.current=t)})}}var Rt=Fe(()=>{Re();Re()});var Il={};t0(Il,{default:()=>pr});import bs from"react";var pr,Ol=Fe(()=>{Re();Rt();gs();pr=class extends bs.Component{constructor(){super(...arguments);B(this,"onReady",o=>this.props.onReady(o));B(this,"onPlay",o=>this.props.onPlay({...o,hasAudio:Xr(this.player)}));B(this,"onBuffer",o=>this.props.onBuffer(o));B(this,"onBufferEnd",o=>this.props.onBufferEnd(o));B(this,"onPause",o=>this.props.onPause(o));B(this,"onEnded",o=>this.props.onEnded(o));B(this,"onError",(o,r,n,i)=>this.props.onError(o,r,n,i));B(this,"onPlayBackRateChange",o=>{this.props.onPlayBackRateChange(o.target.playbackRate)});B(this,"onEnablePIP",o=>this.props.onEnablePIP(o));B(this,"onDisablePIP",o=>{let{onDisablePIP:r,playing:n}=this.props;r&&r(o),n&&this.play()});B(this,"onPresentationModeChange",o=>{if(this.player&&Kt(this.player)){let{webkitPresentationMode:r}=this.player;r==="picture-in-picture"?this.onEnablePIP(o):r==="inline"&&this.onDisablePIP(o)}});B(this,"onSeek",o=>{var r;this.props.onSeek((r=o.target)==null?void 0:r.currentTime)});B(this,"mute",()=>{this.player.muted=!0});B(this,"unmute",()=>{this.player.muted=!1});B(this,"renderTrack",(o,r)=>bs.createElement("track",{key:r,...o}));B(this,"ref",o=>{this.player&&(this.prevPlayer=this.player),this.player=o})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);let o=this.getSource(this.props.url);o&&(this.player.src=o),(_n||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(o){this.prevPlayer&&this.prevPlayer!==this.player&&(this.removeListeners(this.prevPlayer),this.listenersAttached=!1),this.listenersAttached||this.addListeners(this.player),this.props.url!==o.url&&Ct(this.props.url)===!1&&(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.hls&&(this.hls.destroy(),this.hls=null),this.dash&&(this.dash.reset(),this.dash=null),this.flv&&(this.flv.unload(),this.flv.detachMediaElement(),this.flv.destroy(),this.flv=null),this.removeListeners(this.player),this.listenersAttached=!1}addListeners(o){let{url:r,playsinline:n}=this.props;o&&(this.removeListeners(o),this.listenersAttached=!0,o.addEventListener("play",this.onPlay),o.addEventListener("waiting",this.onBuffer),o.addEventListener("playing",this.onBufferEnd),o.addEventListener("pause",this.onPause),o.addEventListener("seeked",this.onSeek),o.addEventListener("ended",this.onEnded),o.addEventListener("error",this.onError),o.addEventListener("ratechange",this.onPlayBackRateChange),o.addEventListener("enterpictureinpicture",this.onEnablePIP),o.addEventListener("leavepictureinpicture",this.onDisablePIP),o.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(r)===!1&&o.addEventListener("canplay",this.onReady),n&&(o.setAttribute("playsinline",""),o.setAttribute("webkit-playsinline",""),o.setAttribute("x5-playsinline","")))}removeListeners(o){o&&(o.removeEventListener("canplay",this.onReady),o.removeEventListener("play",this.onPlay),o.removeEventListener("waiting",this.onBuffer),o.removeEventListener("playing",this.onBufferEnd),o.removeEventListener("pause",this.onPause),o.removeEventListener("seeked",this.onSeek),o.removeEventListener("ended",this.onEnded),o.removeEventListener("error",this.onError),o.removeEventListener("ratechange",this.onPlayBackRateChange),o.removeEventListener("enterpictureinpicture",this.onEnablePIP),o.removeEventListener("leavepictureinpicture",this.onDisablePIP),o.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange))}shouldUseHLS(o){return ls&&this.props.config.forceSafariHLS||this.props.config.forceHLS?!0:_n||this.props.config.forceDisableHls?!1:Dn.test(o)}shouldUseDASH(o){return qn.test(o)||this.props.config.forceDASH}shouldUseFLV(o){return Nn.test(o)||this.props.config.forceFLV}load(o,r){let{hlsVersion:n,hlsOptions:i,dashVersion:s,flvVersion:l}=this.props.config;if(r===!1)return;this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.flv&&this.flv.unload(),this.loadSequence=(this.loadSequence||0)+1;let a=this.loadSequence;if(this.shouldUseHLS(o))Ao(us.replace("VERSION",n),cs).then(c=>{a===this.loadSequence&&(this.hls=new c(i),this.hls.on(c.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(c.Events.ERROR,(p,u)=>{this.props.onError(p,u,this.hls,c)}),this.hls.loadSource(o),this.hls.attachMedia(this.player),this.props.onLoaded())}).catch(c=>this.props.onError(c));else if(this.shouldUseDASH(o))Ao(ps.replace("VERSION",s),ds).then(c=>{a===this.loadSequence&&(this.dash=c.MediaPlayer().create(),this.dash.initialize(this.player,o,this.props.playing),this.dash.on("error",p=>{this.props.onError(p,null,this.dash,c)}),parseInt(s)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:c.LogLevel.LOG_LEVEL_NONE}}),this.props.onLoaded())}).catch(c=>this.props.onError(c));else if(this.shouldUseFLV(o))Ao(fs.replace("VERSION",l),ms).then(c=>{a===this.loadSequence&&(this.flv=c.createPlayer({type:"flv",url:o}),this.flv.attachMediaElement(this.player),this.flv.on(c.Events.ERROR,(p,u)=>{this.props.onError(p,u,this.flv,c)}),this.flv.load(),this.props.onLoaded())}).catch(c=>this.props.onError(c));else if(Ct(o))try{this.player.srcObject=o}catch{this.player.src=window.URL.createObjectURL(o)}}getPlayer(){return this.player}play(){let o=this.player.play();o&&o.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.hls&&(this.hls.destroy(),this.hls=null),this.dash&&(this.dash.reset(),this.dash=null),this.flv&&(this.flv.unload(),this.flv.detachMediaElement(),this.flv.destroy(),this.flv=null)}seekTo(o,r=!0){this.player.currentTime=o,r===!1&&this.pause()}setVolume(o){this.player.volume=o}enablePIP(){if(this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player){let o=this.player.requestPictureInPicture();o&&o.catch&&o.catch(r=>this.props.onError(r))}else Kt(this.player)&&this.player.webkitPresentationMode!=="picture-in-picture"&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():Kt(this.player)&&this.player.webkitPresentationMode!=="inline"&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(o){try{this.player.playbackRate=o}catch(r){this.props.onError(r)}}getDuration(){if(!this.player)return null;let{duration:o,seekable:r}=this.player;return o===1/0&&r.length>0?r.end(r.length-1):o}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;let{buffered:o}=this.player;if(o.length===0)return 0;let r=o.end(o.length-1),n=this.getDuration();return n!==null&&r>n?n:r}getSource(o){if(!(Ct(o)||this.shouldUseHLS(o)||this.shouldUseDASH(o)||this.shouldUseFLV(o)))return o}render(){var m;let{url:o,playing:r,loop:n,muted:i,config:s,width:l,height:a,viewType:c}=this.props,p=c==="audio",u=p?{display:"none"}:{width:l==="auto"?l:"100%",height:a==="auto"?a:"100%"};return bs.createElement(p?"audio":"video",{"data-testid":p?"audio-element":"video-element",ref:this.ref,src:this.getSource(o),style:u,preload:"auto",autoPlay:r||void 0,controls:!1,muted:i,loop:n,...s.attributes},(m=s.tracks)==null?void 0:m.map(this.renderTrack))}};B(pr,"displayName","PlayerCore"),B(pr,"canPlay",ar)});var ql=Io((Py,Dl)=>{"use strict";var u0=function(t){return c0(t)&&!p0(t)};function c0(e){return!!e&&typeof e=="object"}function p0(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||m0(e)}var d0=typeof Symbol=="function"&&Symbol.for,f0=d0?Symbol.for("react.element"):60103;function m0(e){return e.$$typeof===f0}function h0(e){return Array.isArray(e)?[]:{}}function Kr(e,t){return t.clone!==!1&&t.isMergeableObject(e)?dr(h0(e),e,t):e}function y0(e,t,o){return e.concat(t).map(function(r){return Kr(r,o)})}function g0(e,t){if(!t.customMerge)return dr;var o=t.customMerge(e);return typeof o=="function"?o:dr}function b0(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function Rl(e){return Object.keys(e).concat(b0(e))}function Bl(e,t){try{return t in e}catch{return!1}}function S0(e,t){return Bl(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function v0(e,t,o){var r={};return o.isMergeableObject(e)&&Rl(e).forEach(function(n){r[n]=Kr(e[n],o)}),Rl(t).forEach(function(n){S0(e,n)||(Bl(e,n)&&o.isMergeableObject(t[n])?r[n]=g0(n,o)(e[n],t[n],o):r[n]=Kr(t[n],o))}),r}function dr(e,t,o){o=o||{},o.arrayMerge=o.arrayMerge||y0,o.isMergeableObject=o.isMergeableObject||u0,o.cloneUnlessOtherwiseSpecified=Kr;var r=Array.isArray(t),n=Array.isArray(e),i=r===n;return i?r?o.arrayMerge(e,t,o):v0(e,t,o):Kr(t,o)}dr.all=function(t,o){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,n){return dr(r,n,o)},{})};var x0=dr;Dl.exports=x0});var Qr=Io((Ly,Fl)=>{var P0=typeof Element!="undefined",T0=typeof Map=="function",L0=typeof Set=="function",E0=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Wn(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,n;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!Wn(e[r],t[r]))return!1;return!0}var i;if(T0&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!Wn(r.value[1],t.get(r.value[0])))return!1;return!0}if(L0&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(E0&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),o=n.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[r]))return!1;if(P0&&e instanceof Element)return!1;for(r=o;r--!==0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&e.$$typeof)&&!Wn(e[n[r]],t[n[r]]))return!1;return!0}return e!==e&&t!==t}Fl.exports=function(t,o){try{return Wn(t,o)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}});var Vl=Io((Ey,_l)=>{"use strict";var M0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";_l.exports=M0});var jl=Io((My,Hl)=>{"use strict";var I0=Vl();function $l(){}function zl(){}zl.resetWarningCache=$l;Hl.exports=function(){function e(r,n,i,s,l,a){if(a!==I0){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:zl,resetWarningCache:$l};return o.PropTypes=o,o}});var Z=Io((Ay,Wl)=>{Wl.exports=jl()();var Iy,Oy});var ou=Io((Uy,tu)=>{tu.exports=function(t,o,r,n){var i=r?r.call(n,t,o):void 0;if(i!==void 0)return!!i;if(t===o)return!0;if(typeof t!="object"||!t||typeof o!="object"||!o)return!1;var s=Object.keys(t),l=Object.keys(o);if(s.length!==l.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(o),c=0;c<s.length;c++){var p=s[c];if(!a(p))return!1;var u=t[p],f=o[p];if(i=r?r.call(n,u,f,p):void 0,i===!1||i===void 0&&u!==f)return!1}return!0}});import Ih from"react";import{createRoot as Oh}from"react-dom/client";Re();gs();var Al={key:"core",name:"PlayerCore",canPlay:ar,canEnablePIP:e=>ar(e)&&(document.pictureInPictureEnabled||Kt()),lazyPlayer:Ll(()=>Promise.resolve().then(()=>(Ol(),Il)))};var $m=j(ql());import $r from"react";var Nl=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function C0(e,t){return!!(e===t||Nl(e)&&Nl(t))}function w0(e,t){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o++)if(!C0(e[o],t[o]))return!1;return!0}function k0(e,t){t===void 0&&(t=w0);var o,r=[],n,i=!1;function s(){for(var l=[],a=0;a<arguments.length;a++)l[a]=arguments[a];return i&&o===this&&t(l,r)||(n=e.apply(this,l),i=!0,o=this,r=l),n}return s}var Zr=k0;var nl=j(Qr());var te=j(Z());Re();var O0={en:po,es:fo},{string:je,bool:He,number:fr,array:A0,oneOfType:Ss,shape:Ul,object:Xl,func:be}=te.default,Yl=Object.keys(O0),R0={url:je,playing:He,loop:He,volume:fr,muted:He,playbackRate:fr,width:Ss([je,fr]),height:Ss([je,fr]),progressInterval:fr,playsinline:He,language:te.default.oneOf(Yl),stopOnUnmount:He,fallback:te.node,waiting:He,prevented:He,wrapper:Ss([je,be,Ul({render:be.isRequired})]),skinMode:te.default.oneOf(["auto","mobile","desktop"]),config:Ul({attributes:Xl,tracks:A0,forceHLS:He,forceSafariHLS:He,forceDisableHls:He,forceDASH:He,forceFLV:He,hlsOptions:Xl,hlsVersion:je,dashVersion:je,flvVersion:je}),onReady:be,onStart:be,onPlay:be,onPause:be,onBuffer:be,onBufferEnd:be,onEnded:be,onError:be,onDuration:be,onSeek:be,onPlayBackRateChange:be,onProgress:be,onPrevious:be,onNext:be,showNavButtons:He},B0=te.default.shape({title:je.isRequired,url:je.isRequired,buttonText:je.isRequired,icon:je,skipAfter:fr,onSkip:be,onAdClick:be,onAdComplete:be}),D0={sources:te.default.arrayOf(te.default.shape({src:te.default.string.isRequired,resolution:te.default.number.isRequired}).isRequired),fullHDQualityBreak:te.default.number,spriteVTTFile:te.default.string,chapters:te.default.arrayOf(te.default.shape({title:te.default.string.isRequired,startTime:te.default.number.isRequired})),captions:te.default.arrayOf(te.default.shape({src:te.default.string.isRequired,label:te.default.string.isRequired,language:te.default.string.isRequired,kind:te.default.string})),heatmapData:te.default.arrayOf(te.default.shape({startTime:te.default.number.isRequired,endTime:te.default.number.isRequired,value:te.default.number.isRequired})),ads:B0,live:He,poster:je,pip:He,onPlayBackQualityChange:be,onEnablePIP:be,onDisablePIP:be},q0={title:je,artist:je,poster:je,captions:te.default.arrayOf(te.default.shape({src:te.default.string.isRequired,label:te.default.string.isRequired,language:te.default.string.isRequired,kind:te.default.string}))},vs={viewType:te.default.oneOf(["video","audio"]),...R0,...D0,...q0},ze=()=>{},Un={viewType:"video",url:"",sources:[],chapters:[],captions:[],heatmapData:[],ads:null,playing:!1,loop:!1,live:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,fallback:null,waiting:!1,prevented:!1,wrapper:"div",skinMode:"auto",language:Yl[0],poster:"",title:"",artist:"",config:{attributes:{},tracks:[],forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:ze,onStart:ze,onPlay:ze,onPause:ze,onBuffer:ze,onBufferEnd:ze,onEnded:ze,onError:ze,onDuration:ze,onSeek:ze,onPlayBackRateChange:ze,onPlayBackQualityChange:ze,onProgress:ze,onEnablePIP:ze,onDisablePIP:ze};var O1=j(Qr());import Ee from"react";var eu=j(Qr());import Jl from"react";var Xn=j(Z()),{string:mr,bool:mt,number:Jr,array:N0,oneOfType:Gl,shape:F0,object:Kl,func:We}=Xn.default,Zl={url:mr,fullHDQualityBreak:Xn.default.number,spriteVTTFile:Xn.default.string,playing:mt,loop:mt,volume:Jr,muted:mt,playbackRate:Jr,width:Gl([mr,Jr]),height:Gl([mr,Jr]),progressInterval:Jr,playsinline:mt,pip:mt,stopOnUnmount:mt,config:F0({attributes:Kl,tracks:N0,forceVideo:mt,forceHLS:mt,forceSafariHLS:mt,forceDisableHls:mt,forceDASH:mt,forceFLV:mt,hlsOptions:Kl,hlsVersion:mr,dashVersion:mr,flvVersion:mr}),onReady:We,onStart:We,onPlay:We,onPause:We,onBuffer:We,onBufferEnd:We,onEnded:We,onError:We,onDuration:We,onSeek:We,onPlayBackRateChange:We,onPlayBackQualityChange:We,onProgress:We,onEnablePIP:We,onDisablePIP:We},Ue=()=>{},Ql={playing:!1,loop:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:Ue,onStart:Ue,onPlay:Ue,onPause:Ue,onBuffer:Ue,onBufferEnd:Ue,onEnded:Ue,onError:Ue,onDuration:Ue,onSeek:Ue,onPlayBackRateChange:Ue,onPlayBackQualityChange:Ue,onProgress:Ue,onEnablePIP:Ue,onDisablePIP:Ue};Rt();var _0=5e3,ht=class extends Jl.Component{constructor(){super(...arguments);B(this,"progressTimeout",0);B(this,"durationCheckTimeout",0);B(this,"seekOnPlayTimeout",0);B(this,"volumeTimeout",0);B(this,"prevPlayed",0);B(this,"prevLoaded",0);B(this,"player",null);B(this,"loadOnReady",null);B(this,"seekOnPlay",null);B(this,"mounted",!1);B(this,"isReady",!1);B(this,"isPlaying",!1);B(this,"isLoading",!0);B(this,"isSwitchingQuality",!1);B(this,"startOnPlay",!0);B(this,"onDurationCalled",!1);B(this,"handlePlayerMount",o=>{this.player=o,this.player.load(this.props.url),this.progress()});B(this,"getInternalPlayer",o=>this.player?this.player[o]:null);B(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady&&this.mounted){let o=this.getCurrentTime()||0,r=this.getSecondsLoaded(),n=this.getDuration();if(n){let i={playedSeconds:o,played:o/n,loadedSeconds:null};r!==null&&(i.loadedSeconds=r,i.loaded=r/n),(i.playedSeconds!==this.prevPlayed||i.loadedSeconds!==this.prevLoaded)&&this.props.onProgress({loaded:i.loaded,loadedSeconds:i.loadedSeconds,played:i.played,playedSeconds:i.playedSeconds}),this.prevPlayed=i.playedSeconds,i.loadedSeconds!==void 0&&(this.prevLoaded=i.loadedSeconds)}}this.isPlaying&&this.mounted&&(this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval))});B(this,"handleReady",()=>{if(this.mounted===!1)return;this.isReady=!0,this.isLoading=!1;let{onReady:o,playing:r,volume:n,muted:i}=this.props;o&&o(),!i&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):(r||this.isSwitchingQuality)&&this.player.play(),this.handleDurationCheck()});B(this,"handlePlay",o=>{this.isPlaying=!0,this.isLoading=!1,this.isSwitchingQuality=!1;let{onStart:r,onPlay:n,playbackRate:i}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&i!==1&&this.player.setPlaybackRate(i),r&&r(),this.startOnPlay=!1),n&&n(o),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck(),clearTimeout(this.progressTimeout),this.progress()});B(this,"handlePause",o=>{this.isPlaying=!1,!this.isLoading&&!this.isSwitchingQuality&&this.props.onPause&&this.props.onPause(o)});B(this,"handleEnded",()=>{let{activePlayer:o,loop:r,onEnded:n}=this.props;if(r===!0){o.defaultProps!==void 0&&o.defaultProps.config!==void 0&&o.defaultProps.config.loopOnEnded&&this.seekTo(0);return}this.isPlaying=!1,n&&n()});B(this,"handleError",(o,r,n,i)=>{this.isLoading=!1,this.props.onError&&this.props.onError(o,r,n,i)});B(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);let o=this.getDuration();o?!this.onDurationCalled&&this.props.onDuration&&(this.props.onDuration(o),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)});B(this,"handleLoaded",()=>{this.isReady&&!this.startOnPlay&&(this.isLoading=!1)})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),clearTimeout(this.seekOnPlayTimeout),clearTimeout(this.volumeTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(o){if(!this.player)return;let{url:r,playing:n,volume:i,muted:s,playbackRate:l,playbackQuality:a,pip:c,activePlayer:p,disableDeferredLoading:u}=this.props;if((0,eu.default)(o.url,r)===!1){if(clearTimeout(this.progressTimeout),this.isLoading&&!(p!=null&&p.forceLoad)&&!u&&!Ct(r)){console.warn(`PlayerStack: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,o.playbackQuality!==a&&(this.seekOnPlay=this.prevPlayed,this.isSwitchingQuality=!0),this.player.load(r,this.isReady);return}if(o.playing===!1&&n&&this.isPlaying===!1&&this.player.play(),o.playing&&n===!1&&this.isPlaying&&this.player.pause(),o.pip===!1&&c&&this.player.enablePIP&&this.player.enablePIP(),o.pip&&c===!1&&this.player.disablePIP&&this.player.disablePIP(),o.volume!==i&&i!==null&&this.player.setVolume(i),o.muted!==s&&(s?this.player.mute():(this.player.unmute(),i!==null&&(clearTimeout(this.volumeTimeout),this.volumeTimeout=setTimeout(()=>{this.mounted&&this.player&&this.player.setVolume(i)})))),o.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l),o.activeCaption!==this.props.activeCaption){let f=this.player.getPlayer();if(f&&f.textTracks)for(let m=0;m<f.textTracks.length;m++){let h=f.textTracks[m];this.props.activeCaption===null?h.mode="disabled":h.language===this.props.activeCaption?h.mode="hidden":h.mode="disabled"}}}getDuration(){return this.isReady===!1?null:this.player.getDuration()}getCurrentTime(){return this.isReady===!1?null:this.player.getCurrentTime()}getSecondsLoaded(){return this.isReady===!1?null:this.player.getSecondsLoaded()}getPlayer(){return this.player.getPlayer()}seekTo(o,r,n){if(this.isReady===!1){o!==0&&(this.seekOnPlay=o,this.seekOnPlayTimeout=setTimeout(()=>{this.seekOnPlay=null},_0));return}if(r?r==="fraction":o>0&&o<1){let s=this.player.getDuration();if(!s){console.warn("PlayerStack: could not seek using fraction \u2013\xA0duration not yet available");return}this.player.seekTo(s*o,n);return}this.player.seekTo(o,n)}render(){let o=this.props.activePlayer;return o?Jl.createElement(o,{loop:this.props.loop,muted:this.props.muted,playsinline:this.props.playsinline,url:this.props.url,width:this.props.width,height:this.props.height,playing:this.props.playing,viewType:this.props.viewType,config:this.props.config,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onEnablePIP:this.props.onEnablePIP,onPlayBackRateChange:this.props.onPlayBackRateChange,onSeek:this.props.onSeek}):null}};B(ht,"displayName","PlayerProxy"),B(ht,"propTypes",Zl),B(ht,"defaultProps",Ql);var J=j(Z());import es from"react";var q=j(Z());import Zi from"react";import G from"react";var Fo=j(Z());import at from"react";var _e=function(){return _e=Object.assign||function(t){for(var o,r=1,n=arguments.length;r<n;r++){o=arguments[r];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},_e.apply(this,arguments)};function hr(e,t,o){if(o||arguments.length===2)for(var r=0,n=t.length,i;r<n;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Bu=j(ou());import Jt,{useState as $0,useMemo as Ts,useEffect as z0,useContext as H0,createElement as j0}from"react";var le="-ms-",Ro="-moz-",re="-webkit-",Yn="comm",mo="rule",yr="decl";var ru="@import";var Gn="@keyframes";var nu="@layer";var xs=Math.abs,en=String.fromCharCode,tn=Object.assign;function iu(e,t){return Se(e,0)^45?(((t<<2^Se(e,0))<<2^Se(e,1))<<2^Se(e,2))<<2^Se(e,3):0}function Kn(e){return e.trim()}function wt(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,o){return e.replace(t,o)}function gr(e,t,o){return e.indexOf(t,o)}function Se(e,t){return e.charCodeAt(t)|0}function Bt(e,t,o){return e.slice(t,o)}function Xe(e){return e.length}function Zn(e){return e.length}function Bo(e,t){return t.push(e),e}function su(e,t){return e.map(t).join("")}function Cs(e,t){return e.filter(function(o){return!wt(o,t)})}var Qn=1,br=1,au=0,yt=0,ke=0,Sr="";function on(e,t,o,r,n,i,s,l){return{value:e,root:t,parent:o,type:r,props:n,children:i,line:Qn,column:br,length:s,return:"",siblings:l}}function Zt(e,t){return tn(on("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Do(e){for(;e.root;)e=Zt(e.root,{children:[e]});Bo(e,e.siblings)}function lu(){return ke}function uu(){return ke=yt>0?Se(Sr,--yt):0,br--,ke===10&&(br=1,Qn--),ke}function gt(){return ke=yt<au?Se(Sr,yt++):0,br++,ke===10&&(br=1,Qn++),ke}function ho(){return Se(Sr,yt)}function rn(){return yt}function Jn(e,t){return Bt(Sr,e,t)}function ws(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cu(e){return Qn=br=1,au=Xe(Sr=e),yt=0,[]}function pu(e){return Sr="",e}function ei(e){return Kn(Jn(yt-1,ks(e===91?e+2:e===40?e+1:e)))}function du(e){for(;(ke=ho())&&ke<33;)gt();return ws(e)>2||ws(ke)>3?"":" "}function fu(e,t){for(;--t&&gt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return Jn(e,rn()+(t<6&&ho()==32&&gt()==32))}function ks(e){for(;gt();)switch(ke){case e:return yt;case 34:case 39:e!==34&&e!==39&&ks(ke);break;case 40:e===41&&ks(e);break;case 92:gt();break}return yt}function mu(e,t){for(;gt()&&e+ke!==57;)if(e+ke===84&&ho()===47)break;return"/*"+Jn(t,yt-1)+"*"+en(e===47?e:gt())}function hu(e){for(;!ws(ho());)gt();return Jn(e,yt)}function bu(e){return pu(ti("",null,null,null,[""],e=cu(e),0,[0],e))}function ti(e,t,o,r,n,i,s,l,a){for(var c=0,p=0,u=s,f=0,m=0,h=0,S=1,b=1,k=1,g=0,v="",x=n,L=i,P=r,C=v;b;)switch(h=g,g=gt()){case 40:if(h!=108&&Se(C,u-1)==58){gr(C+=U(ei(g),"&","&\f"),"&\f",xs(c?l[c-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:C+=ei(g);break;case 9:case 10:case 13:case 32:C+=du(h);break;case 92:C+=fu(rn()-1,7);continue;case 47:switch(ho()){case 42:case 47:Bo(V0(mu(gt(),rn()),t,o,a),a);break;default:C+="/"}break;case 123*S:l[c++]=Xe(C)*k;case 125*S:case 59:case 0:switch(g){case 0:case 125:b=0;case 59+p:k==-1&&(C=U(C,/\f/g,"")),m>0&&Xe(C)-u&&Bo(m>32?gu(C+";",r,o,u-1,a):gu(U(C," ","")+";",r,o,u-2,a),a);break;case 59:C+=";";default:if(Bo(P=yu(C,t,o,c,p,n,l,v,x=[],L=[],u,i),i),g===123)if(p===0)ti(C,t,P,P,x,i,u,l,L);else switch(f===99&&Se(C,3)===110?100:f){case 100:case 108:case 109:case 115:ti(e,P,P,r&&Bo(yu(e,P,P,0,0,n,l,v,n,x=[],u,L),L),n,L,u,l,r?x:L);break;default:ti(C,P,P,P,[""],L,0,l,L)}}c=p=m=0,S=k=1,v=C="",u=s;break;case 58:u=1+Xe(C),m=h;default:if(S<1){if(g==123)--S;else if(g==125&&S++==0&&uu()==125)continue}switch(C+=en(g),g*S){case 38:k=p>0?1:(C+="\f",-1);break;case 44:l[c++]=(Xe(C)-1)*k,k=1;break;case 64:ho()===45&&(C+=ei(gt())),f=ho(),p=u=Xe(v=C+=hu(rn())),g++;break;case 45:h===45&&Xe(C)==2&&(S=0)}}return i}function yu(e,t,o,r,n,i,s,l,a,c,p,u){for(var f=n-1,m=n===0?i:[""],h=Zn(m),S=0,b=0,k=0;S<r;++S)for(var g=0,v=Bt(e,f+1,f=xs(b=s[S])),x=e;g<h;++g)(x=Kn(b>0?m[g]+" "+v:U(v,/&\f/g,m[g])))&&(a[k++]=x);return on(e,t,o,n===0?mo:l,a,c,p,u)}function V0(e,t,o,r){return on(e,t,o,Yn,en(lu()),Bt(e,2,-2),0,r)}function gu(e,t,o,r,n){return on(e,t,o,yr,Bt(e,0,r),Bt(e,r+1,-1),r,n)}function Ps(e,t,o){switch(iu(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return Ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+Ro+e+le+e+e;case 5936:switch(Se(e,t+11)){case 114:return re+e+le+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+le+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+le+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+le+e+e;case 6165:return re+e+le+"flex-"+e+e;case 5187:return re+e+U(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+le+"flex-$1$2")+e;case 5443:return re+e+le+"flex-item-"+U(e,/flex-|-self/g,"")+(wt(e,/flex-|baseline/)?"":le+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return re+e+le+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+le+U(e,"shrink","negative")+e;case 5292:return re+e+le+U(e,"basis","preferred-size")+e;case 6060:return re+"box-"+U(e,"-grow","")+re+e+le+U(e,"grow","positive")+e;case 4554:return re+U(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!wt(e,/flex-|baseline/))return le+"grid-column-align"+Bt(e,t)+e;break;case 2592:case 3360:return le+U(e,"template-","")+e;case 4384:case 3616:return o&&o.some(function(r,n){return t=n,wt(r.props,/grid-\w+-end/)})?~gr(e+(o=o[t].value),"span",0)?e:le+U(e,"-start","")+e+le+"grid-row-span:"+(~gr(o,"span",0)?wt(o,/\d+/):+wt(o,/\d+/)-+wt(e,/\d+/))+";":le+U(e,"-start","")+e;case 4896:case 4128:return o&&o.some(function(r){return wt(r.props,/grid-\w+-start/)})?e:le+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(Se(e,t+1)){case 109:if(Se(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+Ro+(Se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~gr(e,"stretch",0)?Ps(U(e,"stretch","fill-available"),t,o)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,i,s,l,a,c){return le+n+":"+i+c+(s?le+n+"-span:"+(l?a:+a-+i)+c:"")+e});case 4949:if(Se(e,t+6)===121)return U(e,":",":"+re)+e;break;case 6444:switch(Se(e,Se(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(Se(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+le+"$2box$3")+e;case 100:return U(e,":",":"+le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function vr(e,t){for(var o="",r=0;r<e.length;r++)o+=t(e[r],r,e,t)||"";return o}function Su(e,t,o,r){switch(e.type){case nu:if(e.children.length)break;case ru:case yr:return e.return=e.return||e.value;case Yn:return"";case Gn:return e.return=e.value+"{"+vr(e.children,r)+"}";case mo:if(!Xe(e.value=e.props.join(",")))return""}return Xe(o=vr(e.children,r))?e.return=e.value+"{"+o+"}":""}function vu(e){var t=Zn(e);return function(o,r,n,i){for(var s="",l=0;l<t;l++)s+=e[l](o,r,n,i)||"";return s}}function xu(e){return function(t){t.root||(t=t.return)&&e(t)}}function Cu(e,t,o,r){if(e.length>-1&&!e.return)switch(e.type){case yr:e.return=Ps(e.value,e.length,o);return;case Gn:return vr([Zt(e,{value:U(e.value,"@","@"+re)})],r);case mo:if(e.length)return su(o=e.props,function(n){switch(wt(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Do(Zt(e,{props:[U(n,/:(read-\w+)/,":"+Ro+"$1")]})),Do(Zt(e,{props:[n]})),tn(e,{props:Cs(o,r)});break;case"::placeholder":Do(Zt(e,{props:[U(n,/:(plac\w+)/,":"+re+"input-$1")]})),Do(Zt(e,{props:[U(n,/:(plac\w+)/,":"+Ro+"$1")]})),Do(Zt(e,{props:[U(n,/:(plac\w+)/,le+"input-$1")]})),Do(Zt(e,{props:[n]})),tn(e,{props:Cs(o,r)});break}return""})}}var wu={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var eo=typeof process!="undefined"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Du="active",si="data-styled-version",Cr="6.1.14",qs=`/*!sc*/
`,ai=typeof window!="undefined"&&"HTMLElement"in window,W0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY);var ui=Object.freeze([]),wr=Object.freeze({});function U0(e,t,o){return o===void 0&&(o=wr),e.theme!==o.theme&&e.theme||t||o.theme}var qu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),X0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Y0=/(^-|-$)/g;function ku(e){return e.replace(X0,"-").replace(Y0,"")}var G0=/(a)(d)/gi,oi=52,Pu=function(e){return String.fromCharCode(e+(e>25?39:97))};function Is(e){var t,o="";for(t=Math.abs(e);t>oi;t=t/oi|0)o=Pu(t%oi)+o;return(Pu(t%oi)+o).replace(G0,"$1-$2")}var Ls,Nu=5381,xr=function(e,t){for(var o=t.length;o;)e=33*e^t.charCodeAt(--o);return e},Fu=function(e){return xr(Nu,e)};function _u(e){return Is(Fu(e)>>>0)}function K0(e){return e.displayName||e.name||"Component"}function Es(e){return typeof e=="string"&&!0}var Vu=typeof Symbol=="function"&&Symbol.for,$u=Vu?Symbol.for("react.memo"):60115,Z0=Vu?Symbol.for("react.forward_ref"):60112,Q0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},J0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},e2=((Ls={})[Z0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ls[$u]=zu,Ls);function Tu(e){return("type"in(t=e)&&t.type.$$typeof)===$u?zu:"$$typeof"in e?e2[e.$$typeof]:Q0;var t}var t2=Object.defineProperty,o2=Object.getOwnPropertyNames,Lu=Object.getOwnPropertySymbols,r2=Object.getOwnPropertyDescriptor,n2=Object.getPrototypeOf,Eu=Object.prototype;function Hu(e,t,o){if(typeof t!="string"){if(Eu){var r=n2(t);r&&r!==Eu&&Hu(e,r,o)}var n=o2(t);Lu&&(n=n.concat(Lu(t)));for(var i=Tu(e),s=Tu(t),l=0;l<n.length;++l){var a=n[l];if(!(a in J0||o&&o[a]||s&&a in s||i&&a in i)){var c=r2(t,a);try{t2(e,a,c)}catch{}}}}return e}function kr(e){return typeof e=="function"}function Ns(e){return typeof e=="object"&&"styledComponentId"in e}function qo(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function nn(e,t){if(e.length===0)return"";for(var o=e[0],r=1;r<e.length;r++)o+=t?t+e[r]:e[r];return o}function sn(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Os(e,t,o){if(o===void 0&&(o=!1),!o&&!sn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Os(e[r],t[r]);else if(sn(t))for(var r in t)e[r]=Os(e[r],t[r]);return e}function Fs(e,t){Object.defineProperty(e,"toString",{value:t})}function Qt(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var i2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var o=0,r=0;r<t;r++)o+=this.groupSizes[r];return o},e.prototype.insertRules=function(t,o){if(t>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;t>=i;)if((i<<=1)<0)throw Qt(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=n;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,o.length);s<a;s++)this.tag.insertRule(l,o[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var o=this.groupSizes[t],r=this.indexOfGroup(t),n=r+o;this.groupSizes[t]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var o="";if(t>=this.length||this.groupSizes[t]===0)return o;for(var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r,s=n;s<i;s++)o+="".concat(this.tag.getRule(s)).concat(qs);return o},e}(),wg=1<<30,ni=new Map,li=new Map,ii=1,ri=function(e){if(ni.has(e))return ni.get(e);for(;li.has(ii);)ii++;var t=ii++;return ni.set(e,t),li.set(t,e),t},s2=function(e,t){ii=t+1,ni.set(e,t),li.set(t,e)},a2="style[".concat(eo,"][").concat(si,'="').concat(Cr,'"]'),l2=new RegExp("^".concat(eo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),u2=function(e,t,o){for(var r,n=o.split(","),i=0,s=n.length;i<s;i++)(r=n[i])&&e.registerName(t,r)},c2=function(e,t){for(var o,r=((o=t.textContent)!==null&&o!==void 0?o:"").split(qs),n=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var a=l.match(l2);if(a){var c=0|parseInt(a[1],10),p=a[2];c!==0&&(s2(p,c),u2(e,p,a[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(l)}}},Mu=function(e){for(var t=document.querySelectorAll(a2),o=0,r=t.length;o<r;o++){var n=t[o];n&&n.getAttribute(eo)!==Du&&(c2(e,n),n.parentNode&&n.parentNode.removeChild(n))}};function As(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var ju=function(e){var t=document.head,o=e||t,r=document.createElement("style"),n=function(l){var a=Array.from(l.querySelectorAll("style[".concat(eo,"]")));return a[a.length-1]}(o),i=n!==void 0?n.nextSibling:null;r.setAttribute(eo,Du),r.setAttribute(si,Cr);var s=As();return s&&r.setAttribute("nonce",s),o.insertBefore(r,i),r},p2=function(){function e(t){this.element=ju(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,n=0,i=r.length;n<i;n++){var s=r[n];if(s.ownerNode===o)return s}throw Qt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,o){try{return this.sheet.insertRule(o,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var o=this.sheet.cssRules[t];return o&&o.cssText?o.cssText:""},e}(),d2=function(){function e(t){this.element=ju(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,o){if(t<=this.length&&t>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),f2=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,o){return t<=this.length&&(this.rules.splice(t,0,o),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Iu=ai,m2={isServer:!ai,useCSSOMInjection:!W0},an=function(){function e(t,o,r){t===void 0&&(t=wr),o===void 0&&(o={});var n=this;this.options=_e(_e({},m2),t),this.gs=o,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ai&&Iu&&(Iu=!1,Mu(this)),Fs(this,function(){return function(i){for(var s=i.getTag(),l=s.length,a="",c=function(u){var f=function(k){return li.get(k)}(u);if(f===void 0)return"continue";var m=i.names.get(f),h=s.getGroup(u);if(m===void 0||!m.size||h.length===0)return"continue";var S="".concat(eo,".g").concat(u,'[id="').concat(f,'"]'),b="";m!==void 0&&m.forEach(function(k){k.length>0&&(b+="".concat(k,","))}),a+="".concat(h).concat(S,'{content:"').concat(b,'"}').concat(qs)},p=0;p<l;p++)c(p);return a}(n)})}return e.registerId=function(t){return ri(t)},e.prototype.rehydrate=function(){!this.server&&ai&&Mu(this)},e.prototype.reconstructWithOptions=function(t,o){return o===void 0&&(o=!0),new e(_e(_e({},this.options),t),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(o){var r=o.useCSSOMInjection,n=o.target;return o.isServer?new f2(n):r?new p2(n):new d2(n)}(this.options),new i2(t)));var t},e.prototype.hasNameForId=function(t,o){return this.names.has(t)&&this.names.get(t).has(o)},e.prototype.registerName=function(t,o){if(ri(t),this.names.has(t))this.names.get(t).add(o);else{var r=new Set;r.add(o),this.names.set(t,r)}},e.prototype.insertRules=function(t,o,r){this.registerName(t,o),this.getTag().insertRules(ri(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ri(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),h2=/&/g,y2=/^\s*\/\/.*$/gm;function Wu(e,t){return e.map(function(o){return o.type==="rule"&&(o.value="".concat(t," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(t," ")),o.props=o.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Wu(o.children,t)),o})}function Uu(e){var t,o,r,n=e===void 0?wr:e,i=n.options,s=i===void 0?wr:i,l=n.plugins,a=l===void 0?ui:l,c=function(f,m,h){return h.startsWith(o)&&h.endsWith(o)&&h.replaceAll(o,"").length>0?".".concat(t):f},p=a.slice();p.push(function(f){f.type===mo&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(h2,o).replace(r,c))}),s.prefix&&p.push(Cu),p.push(Su);var u=function(f,m,h,S){m===void 0&&(m=""),h===void 0&&(h=""),S===void 0&&(S="&"),t=S,o=m,r=new RegExp("\\".concat(o,"\\b"),"g");var b=f.replace(y2,""),k=bu(h||m?"".concat(h," ").concat(m," { ").concat(b," }"):b);s.namespace&&(k=Wu(k,s.namespace));var g=[];return vr(k,vu(p.concat(xu(function(v){return g.push(v)})))),g};return u.hash=a.length?a.reduce(function(f,m){return m.name||Qt(15),xr(f,m.name)},Nu).toString():"",u}var g2=new an,Rs=Uu(),_s=Jt.createContext({shouldForwardProp:void 0,styleSheet:g2,stylis:Rs}),kg=_s.Consumer,b2=Jt.createContext(void 0);function Bs(){return H0(_s)}function S2(e){var t=$0(e.stylisPlugins),o=t[0],r=t[1],n=Bs().styleSheet,i=Ts(function(){var a=n;return e.sheet?a=e.sheet:e.target&&(a=a.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(a=a.reconstructWithOptions({useCSSOMInjection:!1})),a},[e.disableCSSOMInjection,e.sheet,e.target,n]),s=Ts(function(){return Uu({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:o})},[e.enableVendorPrefixes,e.namespace,o]);z0(function(){(0,Bu.default)(o,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var l=Ts(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:s}},[e.shouldForwardProp,i,s]);return Jt.createElement(_s.Provider,{value:l},Jt.createElement(b2.Provider,{value:s},e.children))}var Xu=function(){function e(t,o){var r=this;this.inject=function(n,i){i===void 0&&(i=Rs);var s=r.name+i.hash;n.hasNameForId(r.id,s)||n.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=o,Fs(this,function(){throw Qt(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Rs),this.name+t.hash},e}(),v2=function(e){return e>="A"&&e<="Z"};function Ou(e){for(var t="",o=0;o<e.length;o++){var r=e[o];if(o===1&&r==="-"&&e[0]==="-")return e;v2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Yu=function(e){return e==null||e===!1||e===""},Gu=function(e){var t,o,r=[];for(var n in e){var i=e[n];e.hasOwnProperty(n)&&!Yu(i)&&(Array.isArray(i)&&i.isCss||kr(i)?r.push("".concat(Ou(n),":"),i,";"):sn(i)?r.push.apply(r,hr(hr(["".concat(n," {")],Gu(i),!1),["}"],!1)):r.push("".concat(Ou(n),": ").concat((t=n,(o=i)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||t in wu||t.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function yo(e,t,o,r){if(Yu(e))return[];if(Ns(e))return[".".concat(e.styledComponentId)];if(kr(e)){if(!kr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var n=e(t);return yo(n,t,o,r)}var i;return e instanceof Xu?o?(e.inject(o,r),[e.getName(r)]):[e]:sn(e)?Gu(e):Array.isArray(e)?Array.prototype.concat.apply(ui,e.map(function(s){return yo(s,t,o,r)})):[e.toString()]}function Ku(e){for(var t=0;t<e.length;t+=1){var o=e[t];if(kr(o)&&!Ns(o))return!1}return!0}var x2=Fu(Cr),C2=function(){function e(t,o,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ku(t),this.componentId=o,this.baseHash=xr(x2,o),this.baseStyle=r,an.registerId(o)}return e.prototype.generateAndInjectStyles=function(t,o,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))n=qo(n,this.staticRulesId);else{var i=nn(yo(this.rules,t,o,r)),s=Is(xr(this.baseHash,i)>>>0);if(!o.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);o.insertRules(this.componentId,s,l)}n=qo(n,s),this.staticRulesId=s}else{for(var a=xr(this.baseHash,r.hash),c="",p=0;p<this.rules.length;p++){var u=this.rules[p];if(typeof u=="string")c+=u;else if(u){var f=nn(yo(u,t,o,r));a=xr(a,f+p),c+=f}}if(c){var m=Is(a>>>0);o.hasNameForId(this.componentId,m)||o.insertRules(this.componentId,m,r(c,".".concat(m),void 0,this.componentId)),n=qo(n,m)}}return n},e}(),Zu=Jt.createContext(void 0),Pg=Zu.Consumer;var Ms={};function w2(e,t,o){var r=Ns(e),n=e,i=!Es(e),s=t.attrs,l=s===void 0?ui:s,a=t.componentId,c=a===void 0?function(x,L){var P=typeof x!="string"?"sc":ku(x);Ms[P]=(Ms[P]||0)+1;var C="".concat(P,"-").concat(_u(Cr+P+Ms[P]));return L?"".concat(L,"-").concat(C):C}(t.displayName,t.parentComponentId):a,p=t.displayName,u=p===void 0?function(x){return Es(x)?"styled.".concat(x):"Styled(".concat(K0(x),")")}(e):p,f=t.displayName&&t.componentId?"".concat(ku(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&n.attrs?n.attrs.concat(l).filter(Boolean):l,h=t.shouldForwardProp;if(r&&n.shouldForwardProp){var S=n.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;h=function(x,L){return S(x,L)&&b(x,L)}}else h=S}var k=new C2(o,f,r?n.componentStyle:void 0);function g(x,L){return function(P,C,D){var _=P.attrs,T=P.componentStyle,w=P.defaultProps,y=P.foldedComponentIds,M=P.styledComponentId,E=P.target,R=Jt.useContext(Zu),F=Bs(),H=P.shouldForwardProp||F.shouldForwardProp,W=U0(C,R,w)||wr,O=function(ie,xe,Ce){for(var qe,Ne=_e(_e({},xe),{className:void 0,theme:Ce}),ct=0;ct<ie.length;ct+=1){var Qe=kr(qe=ie[ct])?qe(Ne):qe;for(var we in Qe)Ne[we]=we==="className"?qo(Ne[we],Qe[we]):we==="style"?_e(_e({},Ne[we]),Qe[we]):Qe[we]}return xe.className&&(Ne.className=qo(Ne.className,xe.className)),Ne}(_,C,W),A=O.as||E,ee={};for(var $ in O)O[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&O.theme===W||($==="forwardedAs"?ee.as=O.forwardedAs:H&&!H($,A)||(ee[$]=O[$]));var ae=function(ie,xe){var Ce=Bs(),qe=ie.generateAndInjectStyles(xe,Ce.styleSheet,Ce.stylis);return qe}(T,O),me=qo(y,M);return ae&&(me+=" "+ae),O.className&&(me+=" "+O.className),ee[Es(A)&&!qu.has(A)?"class":"className"]=me,D&&(ee.ref=D),j0(A,ee)}(v,x,L)}g.displayName=u;var v=Jt.forwardRef(g);return v.attrs=m,v.componentStyle=k,v.displayName=u,v.shouldForwardProp=h,v.foldedComponentIds=r?qo(n.foldedComponentIds,n.styledComponentId):"",v.styledComponentId=f,v.target=r?n.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(L){for(var P=[],C=1;C<arguments.length;C++)P[C-1]=arguments[C];for(var D=0,_=P;D<_.length;D++)Os(L,_[D],!0);return L}({},n.defaultProps,x):x}}),Fs(v,function(){return".".concat(v.styledComponentId)}),i&&Hu(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Au(e,t){for(var o=[e[0]],r=0,n=t.length;r<n;r+=1)o.push(t[r],e[r+1]);return o}var Ru=function(e){return Object.assign(e,{isCss:!0})};function X(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];if(kr(e)||sn(e))return Ru(yo(Au(ui,hr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yo(r):Ru(yo(Au(r,t)))}function Ds(e,t,o){if(o===void 0&&(o=wr),!t)throw Qt(1,t);var r=function(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,o,X.apply(void 0,hr([n],i,!1)))};return r.attrs=function(n){return Ds(e,t,_e(_e({},o),{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return Ds(e,t,_e(_e({},o),n))},r}var Qu=function(e){return Ds(w2,e)},d=Qu;qu.forEach(function(e){d[e]=Qu(e)});var Tg=function(){function e(t,o){this.rules=t,this.componentId=o,this.isStatic=Ku(t),an.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,o,r,n){var i=n(nn(yo(this.rules,o,r,n)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,o){o.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,o,r,n){t>2&&an.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,o,r,n)},e}();function ci(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var r=nn(X.apply(void 0,hr([e],t,!1))),n=_u(r);return new Xu(n,r)}var Lg=function(){function e(){var t=this;this._emitSheetCSS=function(){var o=t.instance.toString();if(!o)return"";var r=As(),n=nn([r&&'nonce="'.concat(r,'"'),"".concat(eo,'="true"'),"".concat(si,'="').concat(Cr,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(o,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Qt(2);return t._emitSheetCSS()},this.getStyleElement=function(){var o;if(t.sealed)throw Qt(2);var r=t.instance.toString();if(!r)return[];var n=((o={})[eo]="",o[si]=Cr,o.dangerouslySetInnerHTML={__html:r},o),i=As();return i&&(n.nonce=i),[Jt.createElement("style",_e({},n,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new an({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw Qt(2);return Jt.createElement(S2,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw Qt(3)},e}();var Eg="__sc-".concat(eo,"__");import Pr from"react";var No=j(Z()),Q={width:No.default.oneOfType([No.default.number,No.default.string]),height:No.default.oneOfType([No.default.number,No.default.string])},oe=(e,t)=>e.width===t.width&&e.height===t.height;var Vs=({width:e=36,height:t=36})=>Pr.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Pr.createElement("path",{d:"M 22.5 18 C 22.5 16.235 21.48 14.71 20 13.975 L 20 16.185 L 22.455 18.64 C 22.485 18.43 22.5 18.215 22.5 18 Z"}),Pr.createElement("path",{d:"M 25 18 C 25 18.94 24.795 19.825 24.46 20.64 L 25.975 22.155 C 26.625 20.91 27 19.5 27 18 C 27 13.72 24.005 10.14 20 9.23 L 20 11.295 C 22.89 12.155 25 14.83 25 18 Z"}),Pr.createElement("polygon",{points:"18 10 15.91 12.09 18 14.18"}),Pr.createElement("path",{d:"M 10.275 9 L 9 10.275 L 13.725 15 L 9 15 L 9 21 L 13 21 L 18 26 L 18 19.275 L 22.255 23.53 C 21.585 24.045 20.83 24.46 20 24.71 L 20 26.775 C 21.375 26.46 22.63 25.83 23.685 24.965 L 25.725 27 L 27 25.725 L 18 16.725 L 10.275 9 Z"}));Vs.displayName="MutedIcon";Vs.propTypes=Q;var Tr=Pr.memo(Vs,oe);import $s from"react";var zs=({width:e=36,height:t=36})=>$s.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},$s.createElement("path",{d:"M 23.804 18.319 L 12.478 25.924 C 12.347 26.014 12.235 26.024 12.141 25.955 C 12.047 25.886 12 25.763 12 25.584 L 12 10.416 C 12 10.237 12.047 10.113 12.141 10.045 C 12.235 9.976 12.347 9.986 12.478 10.076 L 23.804 17.68 C 23.935 17.77 24 17.876 24 18 C 24 18.124 23.935 18.23 23.804 18.319 Z"}));zs.displayName="PlayIcon";zs.propTypes=Q;var Lr=$s.memo(zs,oe);var Hs=d.div`
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
`,Ju=X`
  font-size: 20px;
  margin-right: 8px;
`,ec=d(Lr)`
  ${Ju}
`,tc=d(Tr)`
  ${Ju}
`,oc=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 5;
`;import{useContext as P2}from"react";import{createContext as k2}from"react";var js={captionDragging:!1,contextMenuVisible:!1,controlsHovering:!1,timeSliding:!1,volumeSliding:!1,hiding:!1,menuVisible:!1,subMenuVisible:!1,fullscreen:!1,playerRef:null,videoRef:null},Er=k2({state:js,dispatch:()=>null});var T2=()=>{let{state:e}=P2(Er);return e},V=T2;var rc=({hasResource:e=!1,prevented:t,paused:o,muted:r,currentTime:n,onClick:i})=>{let{i18n:s}=V(),[l,a]=at.useState(!1),c=at.useCallback(()=>{if(e===!1||t===!1||o)return null;if(r===!0&&!l){let u=f=>{a(!0),i(f)};return at.createElement(at.Fragment,{key:"preventedClickedTip"},at.createElement(oc,{onClick:u}),at.createElement(Hs,null,at.createElement(tc,null),s.clickToUnmute))}return null},[e,t,l,i,s.clickToUnmute,r,o]);return[at.useCallback(()=>e===!1||t===!1?null:n===0&&o?at.createElement(at.Fragment,{key:"preventedTip"},at.createElement(Hs,null,at.createElement(ec,null),s.playbackStuckClickResumePlayback)):null,[n,o,e,s.playbackStuckClickResumePlayback,t])(),c()]};rc.propTypes={hasResource:Fo.default.bool.isRequired,prevented:Fo.default.bool.isRequired,paused:Fo.default.bool.isRequired,muted:Fo.default.bool.isRequired,currentTime:Fo.default.number.isRequired,onClick:Fo.default.func.isRequired};var ln=at.memo(rc,(e,t)=>e.hasResource===t.hasResource&&e.prevented===t.prevented&&e.paused===t.paused&&e.muted===t.muted&&e.currentTime===t.currentTime&&e.onClick===t.onClick);var to=j(Z());import un from"react";import nc from"react";var ic=nc.forwardRef(({showing:e,...t},o)=>nc.createElement("button",{ref:o,...t}));ic.displayName="PlayButton";var sc=d(ic)`
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
`;import Ws from"react";var Us=({width:e=36,height:t=36})=>Ws.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Ws.createElement("path",{d:"M 18 12.3 L 18 8.5 L 13 13.25 L 18 18 L 18 14.2 C 21.3 14.2 24 16.765 24 19.9 C 24 23.035 21.3 25.6 18 25.6 C 14.7 25.6 12 23.035 12 19.9 L 10 19.9 C 10 24.08 13.6 27.5 18 27.5 C 22.4 27.5 26 24.08 26 19.9 C 26 15.72 22.4 12.3 18 12.3 Z"}));Us.displayName="ReplayIcon";Us.propTypes=Q;var Mr=Ws.memo(Us,oe);import Xs from"react";var L2=d.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
`,E2=d.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
`,M2=d.div`
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
`,I2=()=>Xs.createElement(L2,null,Xs.createElement(E2,null,Xs.createElement(M2,null))),pi=I2;var ac=({hasResource:e,loading:t,paused:o,ended:r,seeking:n,waiting:i,kernelMsg:s,onClick:l})=>e===!1||t||s?null:i?un.createElement(pi,null):un.createElement(sc,{showing:o||r,onClick:l},r?un.createElement(Mr,{width:"14%",height:"100%"}):un.createElement(Lr,{width:"20%",height:"100%"}));ac.propTypes={hasResource:to.default.bool.isRequired,loading:to.default.bool.isRequired,paused:to.default.bool.isRequired,ended:to.default.bool.isRequired,seeking:to.default.bool.isRequired,waiting:to.default.bool.isRequired,kernelMsg:to.default.object,onClick:to.default.func.isRequired};var Ys=un.memo(ac,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.kernelMsg===t.kernelMsg&&e.onClick===t.onClick);var di=j(Z());import Gs from"react";var lc=d.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 2em;
  background: rgba(0, 0, 0, 0.65);
`;var uc=({hasResource:e,loading:t=!1,kernelMsg:o=null})=>e===!1?null:o?Gs.createElement(lc,null,o.type,": ",o.detail):t?Gs.createElement(pi,null):null;uc.propTypes={hasResource:di.default.bool.isRequired,loading:di.default.bool,kernelMsg:di.default.object};var cn=Gs.memo(uc,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.kernelMsg===t.kernelMsg);var Ir=X`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;var pn=d.div`
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
`,dn=d.div`
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
`;var Dt=d.div`
  ${Ir}
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`,cc=d.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  height: 55px !important;
  z-index: 2;
`,pc=d.div`
  padding: 10px 20px;
  font-size: 140%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  border-radius: 3px;
  color: #eee;
`,dc=d.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.7) 100%);
  transition: opacity 0.3s;
`;var Pe=(e=!1)=>e?{width:54,height:54}:{width:36,height:36};var fi={32:"SPACE_KEY",27:"ESCAPE_KEY",37:"ARROW_LEFT_KEY",39:"ARROW_RIGHT_KEY",38:"ARROW_UP_KEY",40:"ARROW_DOWN_KEY",77:"MUTE_KEY",16:"SHIFT_KEY",67:"SUBTITLES_KEY",70:"F_KEY",84:"T_KEY",78:"N_KEY"},mi={" ":"SPACE_KEY",Escape:"ESCAPE_KEY",ArrowLeft:"ARROW_LEFT_KEY",ArrowRight:"ARROW_RIGHT_KEY",ArrowUp:"ARROW_UP_KEY",ArrowDown:"ARROW_DOWN_KEY",m:"MUTE_KEY",Shift:"SHIFT_KEY",c:"SUBTITLES_KEY",f:"F_KEY",t:"T_KEY",n:"N_KEY"},kt=e=>e?83:55;var fn=j(Z());import hi from"react";import fc from"react";var mc=fc.forwardRef(({hiding:e,menuOpen:t,...o},r)=>fc.createElement("div",{ref:r,...o}));mc.displayName="Controls";var hc=d(mc)`
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
`;import Ks from"react";var O2=()=>{let{state:e,dispatch:t}=Ks.useContext(Er),o=Ks.useRef(e);return o.current=e,Ks.useCallback(n=>{if(typeof n=="function"){let i=n(o.current);t(i)}else t(n)},[t])},he=O2;var yc=({children:e})=>{let t=V(),o=he(),r=hi.useCallback(()=>{if(typeof window!="undefined"&&window.matchMedia){let i=window.matchMedia("(hover: none), (pointer: coarse)");if(i&&i.matches)return}o({type:"controlsHovering",payload:!0})},[o]),n=hi.useCallback(()=>{o({type:"controlsHovering",payload:!1})},[o]);return hi.createElement(hc,{hiding:t.hiding,menuOpen:t.menuVisible||t.subMenuVisible,onMouseEnter:r,onMouseLeave:n},e)};yc.propTypes={children:fn.default.oneOfType([fn.default.arrayOf(fn.default.node),fn.default.node]).isRequired};var gc=hi.memo(yc,(e,t)=>e.children===t.children);var _o=j(Z());import yi from"react";import A2,{forwardRef as R2}from"react";var bc=R2(({isFullscreen:e,...t},o)=>A2.createElement("div",{ref:o,...t}));bc.displayName="ControlBar";var Sc=d(bc)`
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
`,vc=X`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  flex: 1;
`,xc=d.div`
  ${vc}
  justify-content: flex-start;
  margin-left: 15px;
`,Cc=d.div`
  ${vc}
  justify-content: flex-end;
  margin-right: 15px;
`;var wc=({children:e,extra:t,fullscreen:o})=>yi.createElement(Sc,{isFullscreen:o},yi.createElement(xc,null,e),yi.createElement(Cc,null,t));wc.propTypes={children:_o.default.oneOfType([_o.default.arrayOf(_o.default.node),_o.default.node]).isRequired,extra:_o.default.node.isRequired,fullscreen:_o.default.bool.isRequired};var kc=yi.memo(wc,(e,t)=>e.fullscreen===t.fullscreen&&e.children===t.children&&e.extra===t.extra);var Ve=j(Z());import Le from"react";import bo from"react";import Or from"react";var Pc=Or.forwardRef(({isFullscreen:e,hasChapters:t,...o},r)=>Or.createElement("div",{ref:r,...o}));Pc.displayName="Tooltip";var gi=d(Pc)`
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
`,Tc=Or.forwardRef(({isFullscreen:e,...t},o)=>Or.createElement("div",{ref:o,...t}));Tc.displayName="Tip";var Lc=d(Tc)`
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
`,Ec=Or.forwardRef(({isFullscreen:e,...t},o)=>Or.createElement("span",{ref:o,...t}));Ec.displayName="ChapterLabel";var Mc=d(Ec)`
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
`;var bi=X`
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
`;var qt=d.div`
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

  ${bi}

  & video::cue {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 1.1em;
    line-height: 1.4;
  }
`;var Vo=d.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
`,Oc=bo.forwardRef(({isFullscreen:e,...t},o)=>bo.createElement("button",{ref:o,...t}));Oc.displayName="SliderHandle";var go=d(Oc)`
  ${qt} ${Dt} & {
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
`,Ic=`
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
`,Ac=bo.forwardRef(({isSliding:e,isFullscreen:t,adMode:o,...r},n)=>bo.createElement("div",{ref:n,...r}));Ac.displayName="Slider";var Rc=d(Ac)`
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
  & ${Vo} {
    -moz-transform: scaleY(0.6);
    -ms-transform: scaleY(0.6);
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
    -moz-transition: -moz-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -ms-transition: -ms-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
  }
  & ${go} {
    @media (hover: none), (pointer: coarse) {
      pointer-events: auto;
      opacity: 1;
      box-shadow: none;
    }
  }
  ${({isSliding:e})=>e?`
          & ${Vo} {
            -moz-transform: none;
            -ms-transform: none;
            -webkit-transform: none;
            transform: none;
          }
          & ${go} {
            ${Ic}
          }
          & ${gi} {
            display: block;
          }
        `:`
        &:focus ${Vo},
        &:hover ${Vo} {
          -moz-transform: none;
          -ms-transform: none;
          -webkit-transform: none;
          transform: none;
        }
        &:focus ${go},
        &:hover ${go} {
          ${Ic}
        }
      `}
  ${({adMode:e})=>e?`
    cursor: default;
    & ${go} {
      display: none !important;
    }
  `:""}
`,Bc=bo.forwardRef(({isFullscreen:e,...t},o)=>bo.createElement("div",{ref:o,...t}));Bc.displayName="SlideRail";var Dc=d(Bc)`
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
`,qc=d.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: center left;
  background-color: rgba(255, 255, 255, 0.5);
`,Nc=bo.forwardRef(({adMode:e,...t},o)=>bo.createElement("div",{ref:o,...t}));Nc.displayName="Track";var Fc=d(Nc)`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(-100%, 0);
  background: ${({adMode:e})=>e?"#fc0":"#f00"};
`,Zs=d.div`
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 12px;
  transform: translate(-100%, 0);
  z-index: 4;
`;var oo=j(Z());import et from"react";import _c from"react";var Vc=_c.forwardRef(({isFullscreen:e,showing:t,hasChapters:o,...r},n)=>_c.createElement("div",{ref:n,...r}));Vc.displayName="TimelensThumbnail";var $c=d(Vc)`
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
`,zc=d.div`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  z-index: 4;
`;var B2=e=>"changedTouches"in e&&e.changedTouches&&1<=e.changedTouches.length?e.changedTouches[0].pageX:"clientX"in e?e.clientX:0,mn=(e,t,o)=>{let r=B2(e)-t.left;return 0>=r?0:r>=t.width?o:Math.round(o*r/t.width)},jc=({duration:e,currentTime:t,sliderWidth:o,elementWidth:r,offset:n=0})=>{if(e<=0||o<=0||r<=0)return 0;let i=t/e*o,s=r/2,l=s+n,a=o-s-n;return Math.min(a,Math.max(l,i))},Wc=({duration:e,currentTime:t,sliderWidth:o,handleWidth:r})=>{if(e===0)return{trackTranslateX:"-100",handleTranslateX:"-100"};let n=jc({duration:e,currentTime:t,sliderWidth:o,elementWidth:r,offset:0}),i=(100*t/e-100).toFixed(1),s=(n/o*100-100).toFixed(1);return{trackTranslateX:i,handleTranslateX:s}},Uc=({duration:e,currentTime:t,sliderWidth:o,tooltipWidth:r})=>(jc({duration:e,currentTime:t,sliderWidth:o,elementWidth:r,offset:5})/o*100).toFixed(1),Hc=e=>{if(typeof e!="string")throw new TypeError("Time must be a string");if(e.indexOf(";")>0&&(e=e.replace(";",":"),!/\d{2}(:\d{2}){0,3}/i.test(e)))throw new TypeError("Time code must have the format `00:00:00`");let t=e.split(":"),o=0,r=0,n=0,i=0,s=25,l=Math.round(s),a=3600*l,c=60*l;switch(t.length){default:case 1:n=parseInt(t[0],10);break;case 2:r=parseInt(t[0],10),n=parseInt(t[1],10);break;case 3:o=parseInt(t[0],10),r=parseInt(t[1],10),n=parseInt(t[2],10);break;case 4:o=parseInt(t[0],10),r=parseInt(t[1],10),n=parseInt(t[2],10),i=parseInt(t[3],10)}let p=(a*o+c*r+s*n+i)/s;return parseFloat(p.toFixed(3))},Xc=e=>{var t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+r,left:t.left+o}},Si=e=>{let t=0,o=0,r=[];for(var n of e.split(`
`))if(/-->/.test(n)){let[i,s]=(n.match(/(.*) --> (.*)/)||[]).slice(1);t=Hc(i),o=Hc(s)}else if(/\.(png|jpg|jpeg|webp)/i.test(n)){let i=n.match(/(.*)[#?]xywh=(.*),(.*),(.*),(.*)/);if(i){let[,s,l,a,c,p]=i;r.push({from:t,to:o,file:s,x:l,y:a,w:c,h:p})}}return r};var Qs=et.forwardRef(({spriteVTTFile:e,sliderRef:t,duration:o=0,fullscreen:r,hasChapters:n=!1},i)=>{let s=V(),[l,a]=et.useState([]),c=et.useRef(null),[p,u]=et.useState(!1),[f,m]=et.useState({backgroundImage:"",backgroundPosition:"-480px -360px",width:"160px",height:"90px",marginLeft:"0px"});et.useEffect(()=>{(async()=>{try{let b=await fetch(e).then(x=>x.text()),k=e.substring(0,e.lastIndexOf("/")+1),g=b.replace(/^([^#?\n]+\.(png|jpg|jpeg|webp))/gim,x=>x.startsWith("http")?x:`${k}${x}`),v=Si(g);a(v)}catch(b){console.error("Error parsing VTT file: ",b)}})()},[e]);let h=et.useCallback(async b=>{var x;let k=c==null?void 0:c.current,g=t==null?void 0:t.current;if(k&&g&&l.length>0&&s.menuVisible===!1&&s.subMenuVisible===!1){let L=Xc(g),P=b==null?void 0:b.pageX;b!=null&&b.originalEvent&&((x=b==null?void 0:b.originalEvent)!=null&&x.changedTouches)?P=b.originalEvent.changedTouches[0].pageX:b!=null&&b.changedTouches&&(P=b.changedTouches[0].pageX);let D=(P-L.left-g.offsetLeft)/g.offsetWidth,_=D*o,T=D*g.offsetWidth;for(var v of l)if(_>=v.from&&_<=v.to){let w=Math.min(Math.max(0,T-k.offsetWidth/2),g.offsetWidth-k.offsetWidth);m({backgroundImage:`url(${v.file})`,backgroundPosition:-v.x+"px "+-v.y+"px",width:v.w+"px",height:v.h+"px",marginLeft:w+"px"});break}u(!0)}},[c,t,o,l,s.menuVisible,s.subMenuVisible]),S=et.useCallback(()=>{u(!1)},[]);return et.useImperativeHandle(i,()=>({handleTimelens:h,setShowTimelens:u})),et.createElement(et.Fragment,null,et.createElement(zc,{onMouseMove:h,onMouseEnter:h,onMouseLeave:S}),et.createElement($c,{ref:c,showing:p||s.timeSliding,isFullscreen:r,hasChapters:n,style:f}))});Qs.displayName="Timelens";Qs.propTypes={sliderRef:oo.default.oneOfType([oo.default.func,oo.default.shape({current:oo.default.instanceOf(HTMLDivElement)})]),spriteVTTFile:oo.default.string.isRequired,duration:oo.default.number.isRequired,fullscreen:oo.default.bool.isRequired,hasChapters:oo.default.bool};var Yc=et.memo(Qs,(e,t)=>e.fullscreen===t.fullscreen&&e.sliderRef===t.sliderRef&&e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration&&e.hasChapters===t.hasChapters);var Nt=j(Z());import $o from"react";Re();var Gc=({sliderRef:e,duration:t,tooltip:o,showTooltip:r,chapterTitle:n,fullscreen:i})=>{let s=$o.useRef(null),[l,a]=$o.useState("0");return $o.useLayoutEffect(()=>{var p,u;let c=Uc({duration:t,currentTime:o,sliderWidth:((p=e.current)==null?void 0:p.offsetWidth)||0,tooltipWidth:((u=s.current)==null?void 0:u.offsetWidth)||0});a(c)},[t,o,n,e]),$o.createElement(gi,{style:{display:r?"block":"",transform:`translateX(${l}%)`},isFullscreen:i},$o.createElement(Lc,{ref:s,isFullscreen:i},n&&$o.createElement(Mc,{isFullscreen:i},n),Me(o)))};Gc.propTypes={sliderRef:Nt.default.oneOfType([Nt.default.func,Nt.default.shape({current:Nt.default.instanceOf(HTMLDivElement)})]),duration:Nt.default.number.isRequired,tooltip:Nt.default.number.isRequired,showTooltip:Nt.default.bool.isRequired,chapterTitle:Nt.default.string,fullscreen:Nt.default.bool.isRequired};var Kc=$o.memo(Gc,(e,t)=>e.sliderRef===t.sliderRef&&e.duration===t.duration&&e.tooltip===t.tooltip&&e.showTooltip===t.showTooltip&&e.chapterTitle===t.chapterTitle&&e.fullscreen===t.fullscreen);var lt=j(Z());import hn from"react";import vi from"react";var Zc=vi.forwardRef(({isFullscreen:e,...t},o)=>vi.createElement("div",{ref:o,...t}));Zc.displayName="ChapterSegmentsContainer";var Qc=d(Zc)`
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
`,Jc=vi.forwardRef(({isFullscreen:e,isHovered:t,...o},r)=>vi.createElement("div",{ref:r,...o}));Jc.displayName="ChapterSegment";var ep=d(Jc)`
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
`,tp=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`,op=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #f00;
`;var rp=({segments:e,currentTime:t,duration:o,bufferedScaleX:r,hoveredIndex:n,fullscreen:i})=>e.length===0||o<=0?null:hn.createElement(Qc,{isFullscreen:i},e.map((s,l)=>{let a=s.endTime-s.startTime,c=a/o*100,p=0;t>=s.endTime?p=100:t>s.startTime&&(p=(t-s.startTime)/a*100);let u=r*o,f=0;return u>=s.endTime?f=100:u>s.startTime&&(f=(u-s.startTime)/a*100),hn.createElement(ep,{key:l,style:{width:`${c}%`},title:s.title,isFullscreen:i,isHovered:n===l},hn.createElement(tp,{style:{width:`${f}%`}}),hn.createElement(op,{style:{width:`${p}%`}}))}));rp.propTypes={segments:lt.default.arrayOf(lt.default.shape({title:lt.default.string.isRequired,startTime:lt.default.number.isRequired,endTime:lt.default.number.isRequired,startPercent:lt.default.number.isRequired,endPercent:lt.default.number.isRequired})).isRequired,currentTime:lt.default.number.isRequired,duration:lt.default.number.isRequired,bufferedScaleX:lt.default.number.isRequired,hoveredIndex:lt.default.number,fullscreen:lt.default.bool.isRequired};var np=hn.memo(rp);var zo=j(Z());import ro from"react";import ip from"react";var sp=ip.forwardRef(({isFullscreen:e,bottomOffset:t,visible:o,...r},n)=>ip.createElement("div",{ref:n,...r}));sp.displayName="HeatmapContainer";var ap=d(sp)`
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
`,lp=d.svg`
  display: block;
  width: 100%;
  height: 100%;
`;var up=({strokePath:e,currentTime:t,duration:o,isFullscreen:r,bottomOffset:n,visible:i})=>{let l=`heatmap-played-${ro.useId()}`,a=o>0?t/o*100:0;return ro.createElement(ap,{isFullscreen:r,bottomOffset:n,visible:i},ro.createElement(lp,{viewBox:"0 0 100 100",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},ro.createElement("defs",null,ro.createElement("clipPath",{id:l},ro.createElement("rect",{x:"0",y:"0",width:a,height:"100"}))),ro.createElement("path",{d:e,fill:"none",stroke:"rgba(255, 255, 255, 0.75)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"}),ro.createElement("path",{d:e,fill:"none",stroke:"rgba(255, 255, 255, 1)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",clipPath:`url(#${l})`})))};up.propTypes={strokePath:zo.default.string.isRequired,currentTime:zo.default.number.isRequired,duration:zo.default.number.isRequired,isFullscreen:zo.default.bool.isRequired,bottomOffset:zo.default.number,visible:zo.default.bool};var xi=ro.memo(up,(e,t)=>e.strokePath===t.strokePath&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.isFullscreen===t.isFullscreen&&e.bottomOffset===t.bottomOffset&&e.visible===t.visible);import Te from"react";var D2=({timelensRef:e,currentTime:t,duration:o,onChange:r,onSeeking:n})=>{let i=he(),s=Te.useRef(null),l=Te.useRef(null),[a,c]=Te.useState(!1),[p,u]=Te.useState(!1),[f,m]=Te.useState({left:0,width:0}),[h,S]=Te.useState({value:0,tooltip:0}),b=Te.useCallback(y=>{y.preventDefault();let M=y.currentTarget.getBoundingClientRect(),E=mn(y,M,o);i({type:"timeSliding",payload:!1}),u(!1),r(E),n(!1),e.current&&e.current.handleTimelens(y)},[r,o,i,e,n]),k=Te.useCallback(y=>{if(y.preventDefault(),s.current!==null){let M=s.current.getBoundingClientRect();i({type:"timeSliding",payload:!0}),m(E=>({...E,left:M.left,width:M.width})),e.current&&e.current.handleTimelens(y),u(!0),n(!0)}},[e,i,n]),g=Te.useCallback(y=>{var E,R,F,H,W,O,A,ee;y.preventDefault();let M=mn(y,{left:f.left,width:f.width},o);if(i({type:"timeSliding",payload:!1}),u(!1),S($=>({...$,value:M})),r(M),n(!1),e.current&&e.current.setShowTimelens(!1),s.current){let $=s.current.getBoundingClientRect(),ae=(H=(F=y.clientX)!=null?F:(R=(E=y.changedTouches)==null?void 0:E[0])==null?void 0:R.clientX)!=null?H:0,me=(ee=(A=y.clientY)!=null?A:(O=(W=y.changedTouches)==null?void 0:W[0])==null?void 0:O.clientY)!=null?ee:0;(ae<$.left||ae>$.right||me<$.top||me>$.bottom)&&c(!1)}},[r,o,f,i,n,e]),v=Te.useRef(null),x=Te.useCallback(y=>{var R,F,H,W,O,A,ee,$;y.preventDefault(),v.current&&cancelAnimationFrame(v.current);let M=(W=(H=y.clientX)!=null?H:(F=(R=y.touches)==null?void 0:R[0])==null?void 0:F.clientX)!=null?W:0,E=($=(ee=y.pageX)!=null?ee:(A=(O=y.touches)==null?void 0:O[0])==null?void 0:A.pageX)!=null?$:0;v.current=requestAnimationFrame(()=>{let ae=mn({clientX:M},{left:f.left,width:f.width},o);S(me=>({...me,value:ae})),r(ae),e.current&&e.current.handleTimelens({clientX:M,pageX:E}),v.current=null})},[o,f,e,r]);Te.useEffect(()=>(p&&(document.addEventListener("mousemove",x),document.addEventListener("mouseup",g),document.addEventListener("touchmove",x),document.addEventListener("touchcancel",g),document.addEventListener("touchend",g)),()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",x),document.removeEventListener("touchcancel",g),document.removeEventListener("touchend",g),v.current&&(cancelAnimationFrame(v.current),v.current=null)}),[p,x,g]);let L=Te.useCallback(y=>{if(y.preventDefault(),s.current!==null){let M=s.current.getBoundingClientRect();m(E=>({...E,left:M.left,width:M.width})),e.current&&e.current.handleTimelens(y)}},[e]),P=Te.useCallback(y=>{y.preventDefault();let M=mn(y,{left:f.left,width:f.width},o);S(E=>({...E,tooltip:M})),e.current&&e.current.handleTimelens(y)},[o,f.left,f.width,e]),C=Te.useRef(null),D=Te.useCallback(()=>{C.current&&clearTimeout(C.current),C.current=setTimeout(()=>{if(!s||!s.current)return;let y=s.current.getBoundingClientRect();m(M=>({...M,left:y.left,width:y.width})),C.current=null},100)},[]),_=Te.useCallback(y=>{e.current&&e.current.handleTimelens(y),c(!0)},[e]),T=Te.useCallback(()=>{e.current&&e.current.setShowTimelens(!1),c(!1)},[e]);Te.useEffect(()=>{if(typeof window!="undefined")return window.addEventListener("resize",D),()=>{window.removeEventListener("resize",D),C.current&&clearTimeout(C.current)}},[D]);let w=Te.useMemo(()=>{var y;return Wc({duration:o,currentTime:p?h.value:t,sliderWidth:f.width,handleWidth:((y=l.current)==null?void 0:y.offsetWidth)||0})},[o,t,h.value,p,l,f]);return{sliderRef:s,handleRef:l,showTooltip:a,timeSliderSliding:p,timeSliderState:h,trackTranslateX:{track:w.trackTranslateX,handle:w.handleTranslateX},onClick:b,onMouseDown:k,onSliderMouseOver:L,onSliderMouseMove:P,onMouseEnter:_,onMouseLeave:T}},cp=D2;import dp from"react";var pp=j(Qr());import q2 from"react";function Ho(e){let t=q2.useRef(e);return(0,pp.default)(e,t.current)||(t.current=e),t.current}var N2=({chapters:e,duration:t})=>{let o=Ho(e),r=dp.useMemo(()=>{if(!o||o.length===0||t<=0)return[];let i=[...o].filter(s=>s.startTime<t).sort((s,l)=>s.startTime-l.startTime);return i.map((s,l)=>{let a=l<i.length-1?i[l+1].startTime:t,c=Math.min(a,t);return{title:s.title,startTime:s.startTime,endTime:c,startPercent:s.startTime/t*100,endPercent:c/t*100}})},[o,t]),n=dp.useCallback(i=>{if(r.length===0)return null;for(let s=r.length-1;s>=0;s--)if(i>=r[s].startTime)return r[s];return r[0]},[r]);return{segments:r,getChapterAtTime:n}},So=N2;import F2 from"react";var _2=({heatmapData:e,duration:t})=>{let o=Ho(e),r=F2.useMemo(()=>{if(!o||o.length===0||t<=0)return{svgPath:"",strokePath:""};let i=o.map(u=>{let m=(u.startTime+u.endTime)/2/t*100,S=100-Math.max(0,Math.min(1,u.value))*100;return{x:m,y:S}});if(i.length<2)return{svgPath:"",strokePath:""};let s=6,l=i.length+2,a=u=>u<=0?{x:0,y:100}:u>=l-1?{x:100,y:100}:i[u-1],c=`M ${a(0).x},${a(0).y}`;for(let u=0;u<l-1;u++){let f=a(u-1),m=a(u),h=a(u+1),S=a(u+2),b=m.x+(h.x-f.x)/s,k=m.y+(h.y-f.y)/s,g=h.x-(S.x-m.x)/s,v=h.y-(S.y-m.y)/s;c+=` C ${b},${k} ${g},${v} ${h.x},${h.y}`}return{strokePath:c}},[o,t]),n=r.strokePath.length>0;return{strokePath:r.strokePath,hasHeatmap:n}},Ci=_2;Rt();var fp=({spriteVTTFile:e,chapters:t,heatmapData:o,currentTime:r,duration:n,buffered:i,onChange:s,onSeeking:l,fullscreen:a,disabled:c=!1,adMode:p=!1})=>{let{i18n:u,captionDragging:f}=V(),m=Le.useRef(null),{sliderRef:h,handleRef:S,showTooltip:b,timeSliderSliding:k,timeSliderState:g,trackTranslateX:v,onClick:x,onMouseDown:L,onSliderMouseOver:P,onSliderMouseMove:C,onMouseEnter:D,onMouseLeave:_}=cp({timelensRef:m,currentTime:r,duration:n,onChange:s,onSeeking:l}),{segments:T,getChapterAtTime:w}=So({chapters:t,duration:n}),y=T.length>0,{strokePath:M,hasHeatmap:E}=Ci({heatmapData:o,duration:n}),R=Le.useMemo(()=>{let H=k?g.value:g.tooltip;return w(H)},[k,g.value,g.tooltip,w]),F=Le.useMemo(()=>!R||!b?-1:T.findIndex(H=>H.startTime===R.startTime),[R,b,T]);return Le.createElement(Rc,{ref:h,role:"slider","aria-label":u.timeBar,"aria-valuemin":0,"aria-valuemax":n,"aria-valuenow":r,"aria-valuetext":Me(Math.round(r)),tabIndex:0,onClick:x,onMouseDown:L,onTouchStart:L,onKeyDown:()=>{},onMouseOver:P,onMouseMove:C,onMouseEnter:D,onMouseLeave:_,onFocus:()=>{},isSliding:k,isFullscreen:a,adMode:p,style:f||c?{pointerEvents:"none"}:void 0},y?Le.createElement(Le.Fragment,null,Le.createElement(Vo,null,Le.createElement(np,{segments:T,currentTime:k?g.value:r,duration:n,bufferedScaleX:i,hoveredIndex:F,fullscreen:a}),Le.createElement(Zs,{style:{transform:`translateX(${v.handle}%)`}},Le.createElement(go,{ref:S,type:"button",onMouseDown:L,onTouchStart:L,isFullscreen:a})))):Le.createElement(Vo,null,Le.createElement(Dc,{isFullscreen:a},Le.createElement(qc,{style:{transform:`scaleX(${i})`}}),Le.createElement(Fc,{adMode:p,style:{transform:`translateX(${v.track}%)`}})),Le.createElement(Zs,{style:{transform:`translateX(${v.handle}%)`}},Le.createElement(go,{ref:S,type:"button",onMouseDown:L,onTouchStart:L,isFullscreen:a}))),Le.createElement(Kc,{sliderRef:h,showTooltip:b,duration:n,tooltip:k?g.value:g.tooltip,chapterTitle:R==null?void 0:R.title,fullscreen:a}),E&&Le.createElement(xi,{strokePath:M,currentTime:k?g.value:r,duration:n,isFullscreen:a,visible:b||k}),e&&Le.createElement(Yc,{ref:m,sliderRef:h,duration:n,spriteVTTFile:e,fullscreen:a,hasChapters:y}))};fp.propTypes={spriteVTTFile:Ve.default.string,chapters:Ve.default.arrayOf(Ve.default.shape({title:Ve.default.string.isRequired,startTime:Ve.default.number.isRequired})),heatmapData:Ve.default.arrayOf(Ve.default.shape({startTime:Ve.default.number.isRequired,endTime:Ve.default.number.isRequired,value:Ve.default.number.isRequired})),currentTime:Ve.default.number.isRequired,duration:Ve.default.number.isRequired,buffered:Ve.default.number.isRequired||null,onChange:Ve.default.func.isRequired,fullscreen:Ve.default.bool.isRequired};var Js=Le.memo(fp,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.buffered===t.buffered&&e.onChange===t.onChange&&e.onSeeking===t.onSeeking&&e.fullscreen===t.fullscreen);var Wo=j(Z());import _t from"react";import wi from"react";import Pt from"react";var yn=d.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,V2=X`
  font-size: 130%;
  margin-bottom: 10px;
`,$2=X`
  font-size: 90%;
  margin-bottom: 6px;
`,z2=d.div`
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
  ${({$fullscreen:e})=>e?V2:$2}

  ${yn}:hover & {
    opacity: 1;
  }

  &[data-suppressed='true'] {
    opacity: 0 !important;
  }

  ${yn}:has([aria-expanded='true']) & {
    opacity: 0 !important;
  }
`,mp=({label:e,children:t,disabled:o=!1,fullscreen:r=!1,...n})=>{let i=V(),s=Pt.useRef(null),l=Pt.useRef(null),[a,c]=Pt.useState(!1),[p,u]=Pt.useState(0),f=Pt.useRef(null),m=Pt.useCallback(()=>{var k;let b=(k=i.playerRef)==null?void 0:k.current;if(b&&b.querySelectorAll('[aria-expanded="true"]').length>0){c(!0);return}c(!1),f.current&&cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>{f.current=null;let g=s.current,v=l.current;if(!g||!v||!b){u(0);return}let x=g.getBoundingClientRect(),L=b.getBoundingClientRect(),P=8;x.left<L.left+P?u(L.left+P-x.left):x.right>L.right-P?u(L.right-P-x.right):u(0)})},[i.playerRef]),h=Pt.useCallback(()=>{f.current&&(cancelAnimationFrame(f.current),f.current=null),c(!1),u(0)},[]),S=Pt.useCallback(()=>{c(!0)},[]);return!e||o?t:Pt.createElement(yn,{ref:l,onMouseEnter:m,onMouseLeave:h,onClick:S,...n},t,Pt.createElement(z2,{ref:s,$fullscreen:r,"data-suppressed":a,style:{transform:`translateX(calc(-50% + ${p}px))`}},e))};mp.displayName="Tooltip";var ge=Pt.memo(mp);var hp=wi.forwardRef(({isFullscreen:e,...t},o)=>wi.createElement("div",{ref:o,...t}));hp.displayName="SliderWrapper";var Ar=d(hp)`
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
`,yp=wi.forwardRef(({isSliding:e,isFullscreen:t,...o},r)=>wi.createElement("div",{ref:r,...o}));yp.displayName="SliderContainer";var gp=d(yp)`
  display: flex;
  padding-right: 3px;
  position: relative;
  @media (max-width: 575px) {
    display: none;
  }

  ${({isSliding:e,isFullscreen:t})=>e?`
      & ${Ar} {
        width: ${kt(t)}px;
        -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
      }
      `:`
          & ${yn}:hover ~ ${Ar},
          &:hover ${Ar},
          & ${Ar}:hover {
              width: ${kt(t)}px;
              -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
          }
      `}
`;import bp from"react";var H2=X`
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
`,j2=X`
  align-items: center;
  padding: 0 8px;
  font-size: 14px;
`,W2=X`
  width: 54px;
  height: 54px;
`,U2=X`
  width: 36px;
  height: 36px;
`,X2=X`
  font-size: 145% !important;
`,Sp=bp.forwardRef(({isText:e,isFullscreen:t=!1,isFakeDisabled:o=!1,title:r,...n},i)=>bp.createElement("button",{ref:i,...n},n.children));Sp.displayName="GeneralButton";var Y2=d(Sp)`
  ${qt} ${Dt} & {
    ${H2}
    ${({isFullscreen:e,isText:t})=>!t&&(e?W2:U2)}
    ${({isFullscreen:e,isText:t})=>e&&t&&X2}
    ${({isText:e})=>e&&j2}
    ${({isFakeDisabled:e})=>e&&`
      color: #a4a4a4;
    `}
  }
`,ne=Y2;var jo=j(Z());import gn from"react";import Ft from"react";var ki=({clientX:e,sliderRef:t,isFullcreen:o})=>{if(!t.current)return 0;let r=t.current.getBoundingClientRect(),i=(e-r.left)/kt(o)*100;return i<0?i=0:i>100&&(i=100),i};var G2=({fullscreen:e,value:t,onChange:o})=>{let r=V(),n=he(),i=Ft.useRef(null),s=Ft.useRef(null),[l,a]=Ft.useState(0);Ft.useEffect(()=>{if(i!=null&&i.current&&(s!=null&&s.current)){let h=s.current.getBoundingClientRect(),S=t/100*kt(e)-h.width/2,b=S;S<0?b=0:S>kt(e)-h.width&&(b=kt(e)-h.width),a(b)}},[t,e]);let c=Ft.useCallback(h=>{if(o){let S=ki({clientX:h.clientX,sliderRef:i,isFullcreen:e});o(S)}},[o,e]),p=Ft.useCallback(h=>{h.preventDefault(),i!=null&&i.current&&n({type:"volumeSliding",payload:!0})},[n]),u=Ft.useCallback(h=>{h.preventDefault(),n({type:"volumeSliding",payload:!1});let S=ki({clientX:h.clientX,sliderRef:i,isFullcreen:e});o(S)},[o,e,n]),f=Ft.useRef(null),m=Ft.useCallback(h=>{var b,k,g,v;if(h.preventDefault(),!r.volumeSliding)return;f.current&&cancelAnimationFrame(f.current);let S=(v=(g=h.clientX)!=null?g:(k=(b=h.touches)==null?void 0:b[0])==null?void 0:k.clientX)!=null?v:0;f.current=requestAnimationFrame(()=>{let x=ki({clientX:S,sliderRef:i,isFullcreen:e});o(x),f.current=null})},[r.volumeSliding,e,o]);return Ft.useEffect(()=>(r.volumeSliding&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",u),document.addEventListener("touchmove",m),document.addEventListener("touchcancel",u),document.addEventListener("touchend",u)),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",u),document.removeEventListener("touchmove",m),document.removeEventListener("touchcancel",u),document.removeEventListener("touchend",u),f.current&&(cancelAnimationFrame(f.current),f.current=null)}),[r.volumeSliding,m,u]),{thumbLeft:l,sliderRef:i,thumbRef:s,onMouseDown:p,onMouseMove:m,handleChange:c}},vp=G2;import Rr from"react";var xp=Rr.forwardRef(({isFullscreen:e,...t},o)=>Rr.createElement("div",{ref:o,...t}));xp.displayName="SliderContainer";var Cp=d(xp)`
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
`,wp=Rr.forwardRef(({isFullscreen:e,isDisabled:t,...o},r)=>Rr.createElement("div",{ref:r,...o}));wp.displayName="SliderTrack";var kp=d(wp)`
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
`,Pp=Rr.forwardRef(({isFullscreen:e,isDisabled:t,...o},r)=>Rr.createElement("div",{ref:r,...o}));Pp.displayName="SliderThumb";var Tp=d(Pp)`
  ${qt} ${Dt} & {
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
`;var Lp=({fullscreen:e,value:t,isDisabled:o,onChange:r,onMouseEnter:n,onMouseLeave:i})=>{let{thumbLeft:s,sliderRef:l,thumbRef:a,onMouseMove:c,onMouseDown:p,handleChange:u}=vp({fullscreen:e,value:t,onChange:r});return gn.createElement(Ar,{ref:l,role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":Math.round(t),"aria-valuetext":`${Math.round(t)}%`,onClick:u,onMouseDown:p,onTouchStart:p,onMouseEnter:n,onMouseLeave:i,isFullscreen:e},gn.createElement(Cp,{onMouseMove:c,isFullscreen:e},gn.createElement(kp,{style:{width:`${t}%`},isFullscreen:e,isDisabled:o}),gn.createElement(Tp,{ref:a,style:{left:`${s}px`},onMouseDown:p,onTouchStart:p,isFullscreen:e,isDisabled:o})))};Lp.propTypes={value:jo.default.number.isRequired,onChange:jo.default.func.isRequired,isDisabled:jo.default.bool.isRequired,fullscreen:jo.default.bool.isRequired,onMouseEnter:jo.default.func,onMouseLeave:jo.default.func};var Ep=gn.memo(Lp,(e,t)=>e.fullscreen===t.fullscreen&&e.value===t.value&&e.onChange===t.onChange&&e.isDisabled===t.isDisabled&&e.onMouseEnter===t.onMouseEnter&&e.onMouseLeave===t.onMouseLeave);import vo from"react";import bn from"react";var ea=({width:e=36,height:t=36})=>bn.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},bn.createElement("path",{d:"M 22.5 18 C 22.5 16.189 21.48 14.624 20 13.87 L 20 22.136 C 21.48 21.377 22.5 19.812 22.5 18 Z"}),bn.createElement("polygon",{points:"9 14.922 9 21.078 13 21.078 18 26.21 18 9.79 13 14.922"}),bn.createElement("path",{d:"M 20 9 L 20 11.119 C 22.89 12.002 25 14.747 25 18 C 25 21.253 22.89 23.999 20 24.881 L 20 27 C 24.005 26.066 27 22.398 27 18 C 27 13.603 24.005 9.934 20 9 Z"}));ea.displayName="UnmutedIcon";ea.propTypes=Q;var Pi=bn.memo(ea,oe);var K2=({fullscreen:e,isMuted:t,volume:o,forceMuted:r,changeVolume:n,onMutedClick:i})=>{let s=V(),l=vo.useMemo(()=>Pe(e),[e]),a=vo.useMemo(()=>t===!0||o===0||r,[t,o,r]),c=vo.useCallback(()=>a?vo.createElement(Tr,{...l}):vo.createElement(Pi,{...l}),[a,l]),p=vo.useMemo(()=>r?s.i18n.thisVideoHasNoSound:a?s.i18n.activateSound:s.i18n.mute,[a,r,s.i18n]),u=vo.useCallback(m=>{r===!1&&n(m/100)},[n,r]),f=vo.useCallback(()=>{r===!1&&i(a)},[i,a,r]);return{titleMemorized:p,renderIcon:c,handleOnClick:f,handleChange:u}},Mp=K2;var Ip=d.div`
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
`;var Op=({fullscreen:e,isMuted:t,volume:o,forceMuted:r,changeVolume:n,onMutedClick:i})=>{let s=V(),[l,a]=_t.useState(!1),{titleMemorized:c,renderIcon:p,handleOnClick:u,handleChange:f}=Mp({fullscreen:e,isMuted:t,volume:o,forceMuted:r,changeVolume:n,onMutedClick:i}),m=_t.useCallback(()=>a(!0),[]),h=_t.useCallback(()=>{s.volumeSliding||a(!1)},[s.volumeSliding]);_t.useEffect(()=>{s.volumeSliding||a(!1)},[s.volumeSliding]);let S=l||s.volumeSliding,b=t?0:o,g=(e?54:36)+b*kt(e);return _t.createElement(gp,{isSliding:s.volumeSliding,isFullscreen:e},_t.createElement(ge,{label:c,fullscreen:e,disabled:s.volumeSliding||l},_t.createElement(ne,{type:"button","aria-label":c,onClick:u,isFullscreen:e,isFakeDisabled:r},p())),_t.createElement(Ep,{fullscreen:e,value:b*100,isDisabled:r,onChange:f,onMouseEnter:m,onMouseLeave:h}),S&&!r&&_t.createElement(Ip,{style:{left:`${g}px`},$fullscreen:e},Math.round(b*100),"%"))};Op.propTypes={fullscreen:Wo.default.bool.isRequired,isMuted:Wo.default.bool.isRequired,volume:Wo.default.number.isRequired,onMutedClick:Wo.default.func.isRequired,forceMuted:Wo.default.bool.isRequired,changeVolume:Wo.default.func.isRequired};var Ap=_t.memo(Op,(e,t)=>e.fullscreen===t.fullscreen&&e.isMuted===t.isMuted&&e.volume===t.volume&&e.forceMuted===t.forceMuted&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume);var vn=j(Z());import Sn from"react";var ta=d.div`
  display: inline-block;
  height: 36px;
  padding: 0 5px;
  font-size: 13px;
  line-height: 35px;
  white-space: nowrap;
`,Rp=d.span`
  position: relative;
  top: -2px;
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 50%;
  background: #ff0000;
`,Bp=d.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
`;Rt();var Dp=({live:e,duration:t,currentTime:o,chapterTitle:r})=>{let{i18n:n}=V();return Sn.createElement(ta,{role:"timer","aria-live":"off"},Me(Math.round(o)),e?Sn.createElement(ta,null,Sn.createElement(Rp,null),n.live):` / ${Me(Math.round(t))}`,r&&Sn.createElement(Bp,null," \xB7 ",r))};Dp.propTypes={live:vn.default.bool.isRequired,duration:vn.default.number.isRequired,currentTime:vn.default.number.isRequired,chapterTitle:vn.default.string};var qp=Sn.memo(Dp,(e,t)=>e.live===t.live&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.chapterTitle===t.chapterTitle);var Br=j(Z());import Tt from"react";import Ti from"react";var oa=({width:e=36,height:t=36})=>Ti.createElement("svg",{height:e,width:t,version:"1.1",viewBox:"0 0 36 36",fill:"currentColor"},Ti.createElement("rect",{x:"12",y:"10",width:"3",height:"16"}),Ti.createElement("rect",{x:"21",y:"10",width:"3",height:"16"}));oa.displayName="PauseIcon";oa.propTypes=Q;var Np=Ti.memo(oa,oe);var Fp=({fullscreen:e,paused:t,ended:o,onPlayClick:r,onPauseClick:n})=>{let{i18n:i}=V(),s=Tt.useMemo(()=>Pe(e),[e]);return o?Tt.createElement(ge,{label:i.replay,fullscreen:e},Tt.createElement(ne,{type:"button","aria-label":i.replay,onClick:r,isFullscreen:e},Tt.createElement(Mr,{...s}))):t?Tt.createElement(ge,{label:i.play,fullscreen:e},Tt.createElement(ne,{type:"button","aria-label":i.play,onClick:r,isFullscreen:e},Tt.createElement(Lr,{...s}))):Tt.createElement(ge,{label:i.pause,fullscreen:e},Tt.createElement(ne,{type:"button","aria-label":i.pause,onClick:n,isFullscreen:e},Tt.createElement(Np,{...s})))};Fp.propTypes={fullscreen:Br.default.bool.isRequired,paused:Br.default.bool.isRequired,ended:Br.default.bool.isRequired,onPlayClick:Br.default.func.isRequired,onPauseClick:Br.default.func.isRequired};var _p=Tt.memo(Fp,(e,t)=>e.fullscreen===t.fullscreen&&e.paused===t.paused&&e.ended===t.ended&&e.onPlayClick===t.onPlayClick&&e.onPauseClick===t.onPauseClick);var Uo=j(Z());import Vt from"react";import ra from"react";var na=({width:e=36,height:t=36})=>ra.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},ra.createElement("path",{d:"M 22.789 12.113 C 22.918 12.014 23.028 11.98 23.117 12.011 C 23.206 12.042 23.25 12.126 23.25 12.261 L 23.25 23.739 C 23.25 23.874 23.206 23.958 23.117 23.989 C 23.028 24.02 22.918 23.986 22.789 23.887 L 15.508 18.351 C 15.447 18.304 15.402 18.255 15.375 18.203 L 15.375 23.49 C 15.375 23.625 15.31 23.742 15.18 23.841 C 15.05 23.939 14.896 23.989 14.719 23.989 L 13.406 23.989 C 13.229 23.989 13.075 23.939 12.945 23.841 C 12.815 23.742 12.75 23.625 12.75 23.49 L 12.75 12.51 C 12.75 12.375 12.815 12.258 12.945 12.159 C 13.075 12.061 13.229 12.011 13.406 12.011 L 14.719 12.011 C 14.896 12.011 15.05 12.061 15.18 12.159 C 15.31 12.258 15.375 12.375 15.375 12.51 L 15.375 17.797 C 15.402 17.745 15.447 17.696 15.508 17.649 Z"}));na.displayName="PreviousTrackIcon";na.propTypes=Q;var Vp=ra.memo(na,oe);import ia from"react";var sa=({width:e=36,height:t=36})=>ia.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},ia.createElement("path",{d:"M 13.211 12.113 C 13.082 12.014 12.972 11.98 12.883 12.011 C 12.794 12.042 12.75 12.126 12.75 12.261 L 12.75 23.739 C 12.75 23.874 12.794 23.958 12.883 23.989 C 12.972 24.02 13.082 23.986 13.211 23.887 L 20.492 17.649 C 20.553 17.696 20.598 17.745 20.625 17.797 L 20.625 12.51 C 20.625 12.375 20.69 12.258 20.82 12.159 C 20.95 12.061 21.104 12.011 21.281 12.011 L 22.594 12.011 C 22.771 12.011 22.925 12.061 23.055 12.159 C 23.185 12.258 23.25 12.375 23.25 12.51 L 23.25 23.49 C 23.25 23.625 23.185 23.742 23.055 23.841 C 22.925 23.939 22.771 23.989 22.594 23.989 L 21.281 23.989 C 21.104 23.989 20.95 23.939 20.82 23.841 C 20.69 23.742 20.625 23.625 20.625 23.49 L 20.625 18.203 C 20.598 18.255 20.553 18.304 20.492 18.351 Z"}));sa.displayName="NextTrackIcon";sa.propTypes=Q;var $p=ia.memo(sa,oe);var Li=Vt.memo(({fullscreen:e,onPrevious:t,showNavButtons:o=!1})=>{let{i18n:r}=V(),n=Vt.useMemo(()=>Pe(e),[e]),i=typeof t=="function";return!i&&!o?null:Vt.createElement(ge,{label:r.previous,fullscreen:e},Vt.createElement(ne,{type:"button","aria-label":r.previous,onClick:i?t:void 0,isFullscreen:e,isFakeDisabled:!i},Vt.createElement(Vp,{...n})))});Li.displayName="PreviousButton";Li.propTypes={fullscreen:Uo.default.bool.isRequired,onPrevious:Uo.default.func,showNavButtons:Uo.default.bool};var Ei=Vt.memo(({fullscreen:e,onNext:t,showNavButtons:o=!1})=>{let{i18n:r}=V(),n=Vt.useMemo(()=>Pe(e),[e]),i=typeof t=="function";return!i&&!o?null:Vt.createElement(ge,{label:r.next,fullscreen:e},Vt.createElement(ne,{type:"button","aria-label":r.next,onClick:i?t:void 0,isFullscreen:e,isFakeDisabled:!i},Vt.createElement($p,{...n})))});Ei.displayName="NextButton";Ei.propTypes={fullscreen:Uo.default.bool.isRequired,onNext:Uo.default.func,showNavButtons:Uo.default.bool};var Mi=j(Z());import xo from"react";import aa from"react";var la=({width:e=36,height:t=36})=>aa.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36"},aa.createElement("path",{fill:"currentColor",d:"M 12 20.667 L 10 20.667 L 10 26 L 15.333 26 L 15.333 24 L 12 24 L 12 20.667 Z M 10 15.333 L 12 15.333 L 12 12 L 15.333 12 L 15.333 10 L 10 10 L 10 15.333 Z M 24 24 L 20.667 24 L 20.667 26 L 26 26 L 26 20.667 L 24 20.667 L 24 24 Z M 20.667 10 L 20.667 12 L 24 12 L 24 15.333 L 26 15.333 L 26 10 L 20.667 10 Z"}));la.displayName="FullscreenIcon";la.propTypes=Q;var zp=aa.memo(la,oe);import ua from"react";var ca=({width:e=36,height:t=36})=>ua.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},ua.createElement("path",{d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"}));ca.displayName="UnfullscreenIcon";ca.propTypes=Q;var Hp=ua.memo(ca,oe);var jp=({fullscreen:e,requestFullscreen:t,exitFullscreen:o})=>{let{i18n:r}=V(),n=xo.useMemo(()=>Pe(e),[e]);return e?xo.createElement(ge,{label:r.exitFullScreenMode,fullscreen:!0},xo.createElement(ne,{type:"button","aria-label":r.exitFullScreenMode,onClick:o,isFullscreen:!0},xo.createElement(Hp,{...n}))):xo.createElement(ge,{label:r.fullScreen},xo.createElement(ne,{type:"button","aria-label":r.fullScreen,onClick:t},xo.createElement(zp,{...n})))};jp.propTypes={fullscreen:Mi.default.bool.isRequired,requestFullscreen:Mi.default.func.isRequired,exitFullscreen:Mi.default.func.isRequired};var Wp=xo.memo(jp,(e,t)=>e.fullscreen===t.fullscreen&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen);import Xo from"react";var Z2=3*1e3,Q2=({hasResource:e,loading:t,prevented:o,paused:r,ended:n,waiting:i,seeking:s,kernelMsg:l})=>{let{controlsHovering:a,timeSliding:c,menuVisible:p,subMenuVisible:u}=V(),f=he(),m=Xo.useRef(void 0),h=e===!1||t||o||r||n||i||s||c||p||u||a||l,S=Xo.useRef(h);S.current=h;let b=e===!1||t||o||r||n||i||s||c||p||u||l,k=Xo.useRef(b);k.current=b;let g=Xo.useCallback(()=>{typeof window!="undefined"&&window.clearTimeout(m.current),f({type:"hiding",payload:!1}),!S.current&&(m.current=window.setTimeout(()=>{f({type:"hiding",payload:!0})},Z2))},[f]),v=Xo.useCallback(()=>{if(typeof window!="undefined"&&window.clearTimeout(m.current),f({type:"controlsHovering",payload:!1}),k.current){f({type:"hiding",payload:!1});return}f({type:"hiding",payload:!0})},[f]);return Xo.useEffect(()=>{typeof window!="undefined"&&(r||n)?(window.clearTimeout(m.current),f({type:"hiding",payload:!1})):!r&&!n&&g()},[r,n,g,f]),Xo.useEffect(()=>()=>{typeof window!="undefined"&&window.clearTimeout(m.current)},[]),{showControls:g,hideControls:v}},Up=Q2;var xn=j(Z());import Co from"react";var Xp=d.div`
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
  ${({$visible:e})=>e?X`
          opacity: 1;
          pointer-events: none;
        `:X`
          opacity: 0;
          pointer-events: none;
        `}
`,Yp=d.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`;var Gp=({spriteVTTFile:e,duration:t,seekTime:o,visible:r})=>{let[n,i]=Co.useState([]),[s,l]=Co.useState({}),a=Co.useRef(null);Co.useEffect(()=>{if(!e)return;let p=!1;return(async()=>{try{let u=await fetch(e).then(k=>k.text());if(p)return;let f=e.substring(0,e.lastIndexOf("/")+1),m=u.replace(/^([^#?\n]+\.(png|jpg|jpeg|webp))/gim,k=>k.startsWith("http")?k:`${f}${k}`),h=Si(m);i(h);let S=[...new Set(h.map(k=>k.file))],b={};await Promise.all(S.map(k=>new Promise(g=>{let v=new Image;v.onload=()=>{b[k]={w:v.naturalWidth,h:v.naturalHeight},g()},v.onerror=g,v.src=k}))),p||l(b)}catch(u){console.error("SpritePreview: Error parsing VTT file:",u)}})(),()=>{p=!0}},[e]);let c=Co.useMemo(()=>{if(!r||n.length===0||t<=0)return null;let p=a.current;if(!p)return null;let u=p.offsetWidth,f=p.offsetHeight;if(!u||!f)return null;for(let m of n)if(o>=m.from&&o<=m.to){let h=Number(m.w),S=Number(m.h),b=Number(m.x),k=Number(m.y),g=s[m.file];if(!h||!S||!g)return null;let v=u/h,x=f/S,L=Math.max(v,x),P=g.w*L,C=g.h*L,D=-(b*L),_=-(k*L),T=h*L,w=S*L,y=(u-T)/2,M=(f-w)/2;return{backgroundImage:`url(${m.file})`,backgroundSize:`${P}px ${C}px`,backgroundPosition:`${D+y}px ${_+M}px`}}return null},[r,n,t,o,s]);return e?Co.createElement(Xp,{ref:a,$visible:r&&c!==null},c&&Co.createElement(Yp,{style:c})):null};Gp.propTypes={spriteVTTFile:xn.default.string,duration:xn.default.number.isRequired,seekTime:xn.default.number.isRequired,visible:xn.default.bool.isRequired};var Cn=Co.memo(Gp,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration&&e.seekTime===t.seekTime&&e.visible===t.visible);var ut=j(Z());import Be from"react";import Ii from"react";var Kp=d.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,Zp=Ii.forwardRef(({singleOption:e,hiding:t,isFullscreen:o,...r},n)=>Ii.createElement("div",{ref:n,...r}));Zp.displayName="DropdownOverlay";var Qp=d(Zp)`
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
`,Jp=d.ul`
  min-width: 250px;
  padding: 10px 0;
`,ed=d.li`
  & ${ne} {
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
  & ${ne}:focus, & ${ne}:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`,td=d.div`
  margin-right: auto;
`,od=d.div`
  font-size: 87%;
`,rd=d.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`,pa=Ii.forwardRef(({isFullHD:e=!1,isExpanded:t=!1,isFullscreen:o=!1,...r},n)=>Ii.createElement(ne,{ref:n,isFullscreen:o,...r}));pa.displayName="DropdownButton";pa.displayName="DropdownButton";var nd=d(pa)`
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
`;import da from"react";var fa=({width:e=36,height:t=36})=>da.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},da.createElement("path",{d:"M 25.089 17.774 C 25.056 17.032 24.908 16.3 24.649 15.604 L 25.796 14.535 C 26.013 14.326 26.065 13.997 25.921 13.732 C 25.463 12.886 24.874 12.117 24.177 11.453 C 23.965 11.247 23.641 11.211 23.39 11.366 L 22.034 12.21 C 21.424 11.786 20.75 11.461 20.039 11.247 L 19.9 9.677 C 19.877 9.375 19.646 9.13 19.345 9.09 C 18.927 9.029 18.505 8.999 18.082 9 C 17.543 8.998 17.006 9.045 16.476 9.141 C 16.19 9.187 15.97 9.419 15.939 9.706 L 15.772 11.311 C 15.117 11.533 14.498 11.849 13.934 12.249 L 12.614 11.398 C 12.362 11.236 12.032 11.269 11.817 11.478 C 11.108 12.158 10.512 12.947 10.053 13.816 C 9.913 14.076 9.961 14.398 10.172 14.606 L 11.329 15.72 C 11.115 16.314 10.981 16.933 10.93 17.563 L 9.44 18.086 C 9.155 18.18 8.974 18.459 9.003 18.757 C 9.068 19.751 9.296 20.727 9.677 21.646 C 9.786 21.924 10.073 22.091 10.368 22.048 L 11.93 21.823 C 12.234 22.337 12.602 22.811 13.025 23.232 L 12.473 24.754 C 12.372 25.032 12.468 25.342 12.707 25.515 C 13.505 26.099 14.394 26.548 15.338 26.844 C 15.625 26.937 15.938 26.818 16.09 26.559 L 16.897 25.207 C 17.245 25.265 17.597 25.297 17.95 25.303 C 18.215 25.305 18.48 25.292 18.744 25.261 L 19.55 26.658 C 19.69 26.921 19.991 27.054 20.28 26.979 C 21.228 26.728 22.128 26.321 22.943 25.775 C 23.195 25.609 23.302 25.293 23.203 25.008 L 22.686 23.512 C 23.198 23.057 23.643 22.532 24.006 21.951 L 25.568 22.202 C 25.862 22.25 26.151 22.089 26.265 21.813 C 26.657 20.921 26.903 19.971 26.994 19.001 C 27.034 18.698 26.855 18.41 26.567 18.311 Z M 25.266 20.834 L 23.37 20.532 L 22.917 21.258 C 22.62 21.735 22.257 22.167 21.838 22.542 L 21.195 23.123 L 21.838 24.947 C 21.392 25.208 20.92 25.423 20.431 25.589 L 19.467 23.9 L 18.641 23.984 C 18.428 24.009 18.213 24.02 17.999 24.019 C 17.708 24.013 17.418 23.986 17.131 23.939 L 16.238 23.769 L 15.255 25.438 C 14.764 25.253 14.294 25.017 13.854 24.732 L 14.526 22.898 L 13.931 22.311 C 13.587 21.962 13.286 21.573 13.035 21.152 L 12.595 20.413 L 10.696 20.686 C 10.526 20.188 10.406 19.674 10.336 19.152 L 12.158 18.51 L 12.216 17.668 C 12.255 17.154 12.364 16.648 12.537 16.163 L 12.816 15.366 L 11.422 14.021 C 11.69 13.582 12.001 13.17 12.35 12.792 L 13.957 13.832 L 14.66 13.328 C 15.122 13.002 15.629 12.743 16.164 12.56 L 16.951 12.297 L 17.154 10.352 C 17.458 10.311 17.765 10.289 18.072 10.284 C 18.268 10.284 18.464 10.284 18.664 10.313 L 18.834 12.239 L 19.672 12.493 C 20.254 12.668 20.805 12.933 21.304 13.28 L 21.995 13.761 L 23.634 12.74 C 23.973 13.107 24.276 13.504 24.54 13.928 L 23.139 15.244 L 23.46 16.063 C 23.67 16.632 23.792 17.23 23.82 17.835 L 23.859 18.705 L 25.664 19.364 C 25.581 19.866 25.447 20.358 25.266 20.834 Z M 17.979 21.2 C 15.506 21.2 13.96 18.524 15.197 16.384 C 16.434 14.244 19.525 14.244 20.762 16.384 C 21.048 16.88 21.197 17.443 21.192 18.015 C 21.189 19.783 19.748 21.211 17.979 21.2 Z M 18.021 16.063 C 16.537 16.046 15.591 17.64 16.318 18.933 C 17.045 20.226 18.9 20.248 19.657 18.972 C 19.833 18.675 19.926 18.335 19.926 17.99 C 19.926 16.934 19.077 16.075 18.021 16.063 Z"}));fa.displayName="SettingsIcon";fa.propTypes=Q;var Oi=da.memo(fa,oe);var wn=j(Z());Re();import ue from"react";import $t from"react";var id=$t.forwardRef(({isFullscreen:e,...t},o)=>$t.createElement("div",{ref:o,...t}));id.displayName="OptionsContainer";var ma=d(id)`
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
`,sd=$t.forwardRef(({isFullscreen:e,...t},o)=>$t.createElement("div",{ref:o,...t}));sd.displayName="OptionsHeader";var ha=d(sd)`
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
`,ad=$t.forwardRef(({selected:e,isFullscreen:t,...o},r)=>$t.createElement("div",{ref:r,...o}));ad.displayName="OptionsItem";var Ai=d(ad)`
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
`,ya=d.span`
  flex: 1;
`,ld=d.span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
`,ud=$t.forwardRef(({isFullscreen:e,...t},o)=>$t.createElement("button",{ref:o,...t}));ud.displayName="ResetButton";var y6=d(ud)`
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
`,cd=$t.forwardRef(({show:e,...t},o)=>$t.createElement("div",{ref:o,...t}));cd.displayName="OptionsContent";var ga=d(cd)`
  opacity: 0;
  transform: translate(100px, 0);
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
  ${({show:e})=>e&&`
    opacity: 1;
    transform: translate(0, 0);
  `}
`;import ba from"react";var Sa=({width:e=36,height:t=36})=>ba.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},ba.createElement("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"}));Sa.displayName="ArrowLeftIcon";Sa.propTypes=Q;var Yo=ba.memo(Sa,oe);import va from"react";var xa=({width:e=36,height:t=36})=>va.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},va.createElement("path",{fill:"currentColor",d:"M 15.7 12 C 15.7 12.105 15.658 12.196 15.573 12.277 L 9.648 17.88 C 9.563 17.96 9.466 18 9.355 18 C 9.245 18 9.148 17.96 9.063 17.88 L 8.427 17.278 C 8.342 17.199 8.3 17.106 8.3 17.002 C 8.3 16.898 8.342 16.806 8.427 16.725 L 13.424 12 L 8.427 7.275 C 8.342 7.194 8.3 7.102 8.3 6.998 C 8.3 6.894 8.342 6.801 8.427 6.722 L 9.063 6.12 C 9.148 6.04 9.245 6 9.355 6 C 9.466 6 9.563 6.04 9.648 6.12 L 15.573 11.723 C 15.658 11.804 15.7 11.895 15.7 12 Z"}));xa.displayName="ArrowRightIcon";xa.propTypes=Q;var Dr=va.memo(xa,oe);var pd=({captionStyle:e,onStyleChange:t,onClose:o,isFullscreen:r})=>{let{i18n:n}=V(),[i,s]=ue.useState(null),[l,a]=ue.useState(!1);ue.useEffect(()=>{let m=setTimeout(()=>a(!0),50);return()=>clearTimeout(m)},[]);let c=ue.useMemo(()=>[{key:"fontFamily",label:n.fontFamily},{key:"fontColor",label:n.fontColor},{key:"fontSize",label:n.fontSize},{key:"fontOpacity",label:n.fontOpacity},{key:"backgroundColor",label:n.backgroundColor},{key:"backgroundOpacity",label:n.backgroundOpacity},{key:"windowColor",label:n.windowColor},{key:"windowOpacity",label:n.windowOpacity},{key:"edgeStyle",label:n.edgeStyle}],[n]),p=ue.useCallback(()=>{t(co)},[t]),u=ue.useCallback((m,h)=>{t({...e,[m]:h}),s(null)},[e,t]),f=ue.useCallback(m=>{let h=Gr[m],S=h==null?void 0:h.find(b=>b.value===e[m]);return(S==null?void 0:S.label)||e[m]},[e]);if(i){let m=Gr[i.key],h=c.find(S=>S.key===i.key);return ue.createElement(ma,{isFullscreen:r},ue.createElement(ha,{isFullscreen:r},ue.createElement(ne,{onClick:()=>s(null),isFullscreen:r,isText:!0},ue.createElement(Yo,{width:28,height:28}),ue.createElement("span",null,h==null?void 0:h.label))),ue.createElement(ga,{show:l},m==null?void 0:m.map(S=>ue.createElement(Ai,{key:S.value,selected:e[i.key]===S.value,onClick:()=>u(i.key,S.value),isFullscreen:r},e[i.key]===S.value&&"\u2713 ",S.label))))}return ue.createElement(ma,{isFullscreen:r},ue.createElement(ha,{isFullscreen:r},ue.createElement(ne,{onClick:o,isFullscreen:r,isText:!0},ue.createElement(Yo,{width:28,height:28}),ue.createElement("span",null,n.captionOptions))),ue.createElement(ga,{show:l},c.map(m=>ue.createElement(Ai,{key:m.key,onClick:()=>s(m),isFullscreen:r},ue.createElement(ya,null,m.label),ue.createElement(ld,null,f(m.key)," ",ue.createElement(Dr,{width:16,height:16})))),ue.createElement(Ai,{onClick:p,isFullscreen:r},ue.createElement(ya,null,n.reset))))};pd.propTypes={captionStyle:wn.default.object.isRequired,onStyleChange:wn.default.func.isRequired,onClose:wn.default.func.isRequired,isFullscreen:wn.default.bool};var dd=ue.memo(pd);import Ri from"react";import tt from"react";var fd=tt.forwardRef(({title:e,options:t,value:o,hiding:r,isFullscreen:n,onClick:i,goBack:s,showOptionsButton:l,onOptionsClick:a,...c},p)=>{let{i18n:u}=V(),[f,m]=tt.useState(!1);return tt.useEffect(()=>{m(!1),r&&setTimeout(()=>{m(!0)},100)},[r]),tt.createElement("div",{ref:p,...c},tt.createElement(hd,null,tt.createElement(ne,{onClick:s,isFullscreen:n,isText:!0,style:l?{width:"auto"}:void 0},tt.createElement(Yo,{width:28,height:28}),tt.createElement("span",null,e)),l&&a&&tt.createElement(ne,{onClick:a,isFullscreen:n,isText:!0,style:{marginLeft:"auto",fontSize:"12px",textDecoration:"underline",opacity:.8,width:"auto",padding:"20px 15px"}},u.captionOptions)),tt.createElement(yd,{show:f},tt.createElement(gd,null,t.map((h,S)=>tt.createElement(bd,{key:S,selected:h.value===o,isFullscreen:n},tt.createElement(ne,{onClick:()=>i(h.value),isFullscreen:n,isText:!0},h.label,"isFullHD"in h&&h.isFullHD&&tt.createElement(Sd,null,u.hd)))))))});fd.displayName="DropdownOverlay";var md=fd;var vd=d(md)`
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
`,hd=d.div`
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
  & ${ne} {
    width: 100%;
    font-size: 91%;
    padding: 20px 5px;
    height: 57px;
    justify-content: flex-start !important;
  }
`,xd=Ri.forwardRef(({show:e,...t},o)=>Ri.createElement("div",{ref:o,...t}));xd.displayName="DropdownContent";var yd=d(xd)`
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
`,gd=d.ul`
  padding: 10px 0;
`,Cd=Ri.forwardRef(({selected:e,isFullscreen:t,...o},r)=>Ri.createElement("li",{ref:r,...o}));Cd.displayName="DropdownItem";var bd=d(Cd)`
  ${qt} ${Dt} & {
    padding: 0 15px;

    & ${ne} {
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
    & ${ne}:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }
  }
`,Sd=d.sub`
  font-size: 10px;
  font-weight: 500;
  color: #cb0e0b;
  margin-left: 3px;
`;import Ye,{useEffect as Ca}from"react";var kn={generalMenu:!1,speed:!1,quality:!1,captions:!1};var qr=({label:e,value:t,i18n:o})=>e==="quality"?t==="0"?o.auto:`${t}p`:e==="speed"&&t==="1"?o.normal:t;var wd=({qualityOptions:e,captionOptions:t,live:o,adMode:r=!1,i18n:n})=>{let i=[];return!o&&!r&&i.push({label:n.speed,value:"speed",options:[{label:"2",value:"2"},{label:"1.5",value:"1.5"},{label:"1.25",value:"1.25"},{label:"Normal",value:"1"},{label:"0.75",value:"0.75"},{label:"0.5",value:"0.5"},{label:"0.25",value:"0.25"}]}),e.length>0&&i.push({label:n.quality,value:"quality",options:[...e,{label:n.auto,value:"0",isFullHD:!1}]}),t&&t.length>0&&i.push({label:n.captions,value:"captions",options:[{label:n.off,value:"off"},...t]}),i};var J2=({live:e,fullHDQualityBreak:t,qualities:o,captions:r,activeCaption:n,playbackRate:i,playbackQuality:s,changeSettings:l,onCaptionChange:a,fullscreen:c,adMode:p=!1})=>{let{i18n:u}=V(),f=he(),m=Ye.useRef(null),h=Ye.useRef(s);h.current=s;let[S,b]=Ye.useState(kn),[k,g]=Ye.useState(!0),[v,x]=Ye.useState({quality:{label:u.auto,value:"0",isFullHD:!1},speed:{label:u.normal,value:"1"},captions:{label:u.off,value:"off"}});Ca(()=>{let M=i.toString();x(E=>({...E,speed:{label:qr({label:"speed",value:M,i18n:u}),value:M}}))},[u,i]),Ca(()=>{var E;let M=(E=v.captions)==null?void 0:E.value;if(n===null&&M!=="off")x(R=>({...R,captions:{label:u.off,value:"off"}}));else if(n&&M!==n){let R=r==null?void 0:r.find(H=>H.language===n),F=(R==null?void 0:R.label)||n;x(H=>({...H,captions:{label:F,value:n}}))}},[n,r,u]),Ca(()=>{if(s==null||s===0||o.length===0)return;let M=s.toString();if(k){let E=`${u.auto} (${M}p)`;x(R=>{var F,H;return((F=R.quality)==null?void 0:F.value)==="0"&&((H=R.quality)==null?void 0:H.label)===E?R:{...R,quality:{label:E,value:"0",isFullHD:t!==void 0&&Number(M)>=t}}})}},[s,o,u,t,k]);let L=Ye.useCallback(M=>{M.stopPropagation(),f(E=>({menuVisible:E.subMenuVisible?!1:!E.menuVisible,subMenuVisible:!1})),b(E=>({...kn,generalMenu:!E.speed&&!E.quality&&!E.captions?!E.generalMenu:!1}))},[f]),P=Ye.useCallback(M=>E=>{if(M==="quality")if(E==="0"){g(!0);let R=h.current,F=R&&R!==0?`${u.auto} (${R}p)`:u.auto;x(H=>({...H,quality:{label:F,value:"0",isFullHD:t!==void 0&&Number(R!=null?R:0)>=t}}))}else g(!1),x(R=>({...R,quality:{label:qr({label:"quality",value:E,i18n:u}),value:E,isFullHD:t!==void 0&&Number(E!=null?E:"0")>=t}}));else if(M==="captions"){let R=r==null?void 0:r.find(H=>H.language===E),F=E==="off"?u.off:(R==null?void 0:R.label)||E;x(H=>({...H,captions:{label:F,value:E}})),a&&a(E==="off"?null:E)}else x(R=>({...R,[M]:{label:qr({label:M,value:E,i18n:u}),value:E,isFullHD:t!==void 0&&Number(E!=null?E:"0")>=t}}));f({menuVisible:!1,subMenuVisible:!1}),b(kn)},[t,u,f,r,a]),C=Ye.useCallback(M=>{f({menuVisible:!1,subMenuVisible:!0}),b(E=>({...E,generalMenu:!1,[M]:!0}))},[f]),D=Ye.useCallback(M=>()=>{f({menuVisible:!0,subMenuVisible:!1}),b(E=>({...E,generalMenu:!0,[M]:!1}))},[f]);Ye.useEffect(()=>{let M=E=>{if(!m.current)return;(E.composedPath?E.composedPath():[]).includes(m.current)||m.current.contains(E.target)||(f({menuVisible:!1,subMenuVisible:!1}),b(kn))};return document.body.addEventListener("click",M),()=>document.body.removeEventListener("click",M)},[f]);let _=Ye.useMemo(()=>!r||r.length===0?[]:r.map(M=>({label:M.label,value:M.language})),[r]),T=Ye.useMemo(()=>wd({qualityOptions:o,captionOptions:_,live:e,adMode:p,i18n:u}),[e,p,o,_,u]),w=Ye.useMemo(()=>Pe(c),[c]),y=Ye.useRef(v);return Ye.useEffect(()=>{var E,R,F,H;let M=y.current;if(M!==v){y.current=v;let W={};((E=M.speed)==null?void 0:E.value)!==((R=v.speed)==null?void 0:R.value)&&(W.speed=v.speed),((F=M.quality)==null?void 0:F.value)!==((H=v.quality)==null?void 0:H.value)&&(W.quality=v.quality),(W.speed||W.quality)&&l(W)}},[v,l]),{dropdownRef:m,settings:S,values:v,iconProps:w,settingsOptions:T,handleButtonClick:L,handleMenuItemClick:C,handleMenuClick:P,handleGoBack:D}},kd=J2;var Pd=({live:e,qualities:t,captions:o,activeCaption:r,playbackRate:n,playbackQuality:i,fullHDQualityBreak:s,changeSettings:l,onCaptionChange:a,captionStyle:c,onCaptionStyleChange:p,fullscreen:u,adMode:f=!1})=>{var _;let{i18n:m}=V(),[h,S]=Be.useState(!1),{dropdownRef:b,settings:k,values:g,iconProps:v,settingsOptions:x,handleButtonClick:L,handleMenuItemClick:P,handleMenuClick:C,handleGoBack:D}=kd({live:e,fullHDQualityBreak:s,qualities:t,captions:o,activeCaption:r,playbackRate:n,playbackQuality:i,changeSettings:l,onCaptionChange:a,fullscreen:u,adMode:f});return Be.useEffect(()=>{!k.captions&&h&&S(!1)},[k.captions,h]),x.length===0?null:Be.createElement(Kp,{ref:b},Be.createElement(ge,{label:m.settings,fullscreen:u},Be.createElement(nd,{type:"button","aria-label":m.settings,"aria-expanded":k.generalMenu,onClick:L,isFullscreen:u,isFullHD:(_=g.quality)==null?void 0:_.isFullHD,isExpanded:k.generalMenu},Be.createElement(Oi,{...v}))),Be.createElement(Qp,{hiding:k.generalMenu,singleOption:e||t.length===0&&(!o||o.length===0),isFullscreen:u},Be.createElement(Jp,null,x.map((T,w)=>{var y;return Be.createElement(ed,{key:w},Be.createElement(ne,{onClick:()=>P(T.value),isFullscreen:u,isText:!0},Be.createElement(td,null,T.label),Be.createElement(rd,null,Be.createElement(od,null,(y=g[T.value])==null?void 0:y.label),Be.createElement(Dr,{width:28,height:28}))))}))),x.map((T,w)=>{var y;return Be.createElement(vd,{key:w,hiding:k[T.value]&&!(T.value==="captions"&&h),title:T.label,options:T.options,value:(y=g[T.value])==null?void 0:y.value,isFullscreen:u,onClick:T.value==="captions"?M=>{M==="__options__"?S(!0):C(T.value)(M)}:C(T.value),goBack:D(T.value),showOptionsButton:T.value==="captions",onOptionsClick:M=>{M.stopPropagation(),S(!0)}})}),h&&c&&Be.createElement(dd,{captionStyle:c,onStyleChange:p,onClose:()=>{S(!1),P("captions")},isFullscreen:u}))};Pd.propTypes={live:ut.default.bool.isRequired,qualities:ut.default.arrayOf(ut.default.shape({label:ut.default.string.isRequired,value:ut.default.string.isRequired}).isRequired).isRequired,captions:ut.default.array,playbackRate:ut.default.number.isRequired,playbackQuality:ut.default.number,fullHDQualityBreak:ut.default.number,changeSettings:ut.default.func.isRequired,onCaptionChange:ut.default.func,fullscreen:ut.default.bool.isRequired};var Td=Be.memo(Pd,(e,t)=>e.live===t.live&&e.qualities===t.qualities&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.changeSettings===t.changeSettings&&e.onCaptionChange===t.onCaptionChange&&e.captionStyle===t.captionStyle&&e.onCaptionStyleChange===t.onCaptionStyleChange&&e.fullscreen===t.fullscreen&&e.adMode===t.adMode);var Tn=j(Z());import wo from"react";import Pn from"react";var wa=({width:e=36,height:t=36,active:o=!1})=>o?Pn.createElement("svg",{height:t,width:e,viewBox:"-6 -6 36 36",fill:"currentColor"},Pn.createElement("path",{d:"M21.20 3.01L21 3H3L2.79 3.01C2.30 3.06 1.84 3.29 1.51 3.65C1.18 4.02 .99 4.50 1 5V19L1.01 19.20C1.05 19.66 1.26 20.08 1.58 20.41C1.91 20.73 2.33 20.94 2.79 20.99L3 21H21L21.20 20.98C21.66 20.94 22.08 20.73 22.41 20.41C22.73 20.08 22.94 19.66 22.99 19.20L23 19V5C23.00 4.50 22.81 4.02 22.48 3.65C22.15 3.29 21.69 3.06 21.20 3.01ZM9.03 8.08L9.29 8.16C9.79 8.35 10.24 8.65 10.60 9.05L10.77 9.26L10.83 9.34C10.96 9.55 11.01 9.80 10.96 10.05C10.92 10.29 10.79 10.51 10.59 10.66C10.40 10.81 10.15 10.89 9.91 10.87C9.66 10.85 9.43 10.74 9.26 10.57L9.19 10.49L9.11 10.39C8.98 10.24 8.81 10.12 8.62 10.05L8.54 10.02C8.32 9.97 8.10 10.00 7.91 10.11C7.67 10.24 7.48 10.43 7.35 10.67L7.28 10.79C7.09 11.16 6.99 11.58 7 12L7.00 12.16C7.02 12.52 7.11 12.88 7.28 13.20L7.35 13.32C7.48 13.56 7.67 13.75 7.91 13.88L7.99 13.92C8.16 14.00 8.35 14.02 8.54 13.97L8.62 13.94C8.85 13.85 9.05 13.70 9.19 13.50L9.26 13.43C9.44 13.24 9.68 13.13 9.93 13.12C10.19 13.11 10.44 13.20 10.63 13.37C10.82 13.53 10.94 13.77 10.97 14.02C11.00 14.27 10.93 14.53 10.77 14.73C10.39 15.23 9.88 15.61 9.29 15.83L9.03 15.91C8.43 16.06 7.79 16.01 7.21 15.77L6.97 15.65C6.42 15.35 5.95 14.90 5.64 14.36L5.50 14.12C5.21 13.55 5.04 12.92 5.00 12.27L5 12C4.99 11.26 5.17 10.53 5.50 9.87L5.64 9.63C5.96 9.09 6.42 8.64 6.97 8.34C7.60 8.00 8.34 7.91 9.03 8.08ZM17.03 8.08L17.29 8.16C17.79 8.35 18.24 8.65 18.60 9.05L18.77 9.26L18.83 9.34C18.96 9.55 19.01 9.80 18.96 10.05C18.92 10.29 18.79 10.51 18.59 10.66C18.40 10.81 18.15 10.89 17.91 10.87C17.66 10.85 17.43 10.74 17.26 10.57L17.19 10.49L17.11 10.39C16.98 10.24 16.81 10.12 16.62 10.05L16.54 10.02C16.32 9.97 16.10 10.00 15.91 10.11C15.67 10.24 15.48 10.43 15.35 10.67L15.28 10.79C15.09 11.16 14.99 11.58 15 12L15.00 12.16C15.02 12.52 15.11 12.88 15.28 13.20L15.35 13.32C15.48 13.56 15.67 13.75 15.91 13.88L15.99 13.92C16.16 14.00 16.35 14.02 16.54 13.97L16.62 13.94C16.85 13.85 17.05 13.70 17.19 13.50L17.26 13.43C17.44 13.24 17.68 13.13 17.93 13.12C18.19 13.11 18.44 13.20 18.63 13.37C18.82 13.53 18.94 13.77 18.97 14.02C19.00 14.27 18.93 14.53 18.77 14.73C18.39 15.23 17.88 15.61 17.29 15.83L17.03 15.91C16.43 16.06 15.79 16.01 15.21 15.77L14.97 15.65C14.42 15.35 13.95 14.90 13.64 14.36L13.50 14.12C13.21 13.55 13.04 12.92 13.00 12.27L13 12C12.99 11.26 13.17 10.53 13.50 9.87L13.64 9.63C13.96 9.09 14.42 8.64 14.97 8.34C15.60 8.00 16.34 7.91 17.03 8.08Z"})):Pn.createElement("svg",{height:t,width:e,viewBox:"-6 -6 36 36",fill:"currentColor"},Pn.createElement("path",{d:"M21.20 3.01L21 3H3L2.79 3.01C2.30 3.06 1.84 3.29 1.51 3.65C1.18 4.02 .99 4.50 1 5V19L1.01 19.20C1.05 19.66 1.26 20.08 1.58 20.41C1.91 20.73 2.33 20.94 2.79 20.99L3 21H21L21.20 20.98C21.66 20.94 22.08 20.73 22.41 20.41C22.73 20.08 22.94 19.66 22.99 19.20L23 19V5C23.00 4.50 22.81 4.02 22.48 3.65C22.15 3.29 21.69 3.06 21.20 3.01ZM3 19V5H21V19H3ZM6.97 8.34C6.42 8.64 5.96 9.09 5.64 9.63L5.50 9.87C5.16 10.53 4.99 11.26 5 12L5.00 12.27C5.04 12.92 5.21 13.55 5.50 14.12L5.64 14.36C5.96 14.90 6.42 15.35 6.97 15.65L7.21 15.77C7.79 16.01 8.43 16.06 9.03 15.91L9.29 15.83C9.88 15.61 10.39 15.23 10.77 14.73C10.93 14.53 11.00 14.27 10.97 14.02C10.94 13.77 10.82 13.53 10.63 13.37C10.44 13.20 10.19 13.11 9.93 13.12C9.68 13.13 9.44 13.24 9.26 13.43L9.19 13.50C9.05 13.70 8.85 13.85 8.62 13.94L8.54 13.97C8.35 14.02 8.16 14.00 7.99 13.92L7.91 13.88C7.67 13.75 7.48 13.56 7.35 13.32L7.28 13.20C7.11 12.88 7.02 12.52 7.00 12.16L7 12C6.99 11.58 7.09 11.16 7.28 10.79L7.35 10.67C7.48 10.43 7.67 10.24 7.91 10.11C8.10 10.00 8.32 9.97 8.54 10.02L8.62 10.05C8.81 10.12 8.98 10.24 9.11 10.39L9.19 10.49L9.26 10.57C9.43 10.74 9.66 10.85 9.91 10.87C10.15 10.89 10.40 10.81 10.59 10.66C10.79 10.51 10.92 10.29 10.96 10.05C11.01 9.80 10.96 9.55 10.83 9.34L10.77 9.26L10.60 9.05C10.24 8.65 9.79 8.35 9.29 8.16L9.03 8.08C8.34 7.91 7.60 8.00 6.97 8.34ZM14.97 8.34C14.42 8.64 13.96 9.09 13.64 9.63L13.50 9.87C13.16 10.53 12.99 11.26 13 12L13.00 12.27C13.04 12.92 13.21 13.55 13.50 14.12L13.64 14.36C13.96 14.90 14.42 15.35 14.97 15.65L15.21 15.77C15.79 16.01 16.43 16.06 17.03 15.91L17.29 15.83C17.88 15.61 18.39 15.23 18.77 14.73C18.93 14.53 19.00 14.27 18.97 14.02C18.94 13.77 18.82 13.53 18.63 13.37C18.44 13.20 18.19 13.11 17.93 13.12C17.68 13.13 17.44 13.24 17.26 13.43L17.19 13.50C17.05 13.70 16.85 13.85 16.62 13.94L16.54 13.97C16.35 14.02 16.16 14.00 15.99 13.92L15.91 13.88C15.67 13.75 15.48 13.56 15.35 13.32L15.28 13.20C15.11 12.88 15.02 12.52 15.00 12.16L15 12C14.99 11.58 15.09 11.16 15.28 10.79L15.35 10.67C15.48 10.43 15.67 10.24 15.91 10.11C16.10 10.00 16.32 9.97 16.54 10.02L16.62 10.05C16.81 10.12 16.98 10.24 17.11 10.39L17.19 10.49L17.26 10.57C17.43 10.74 17.66 10.85 17.91 10.87C18.15 10.89 18.40 10.81 18.59 10.66C18.79 10.51 18.92 10.29 18.96 10.05C19.01 9.80 18.96 9.55 18.83 9.34L18.77 9.26L18.60 9.05C18.24 8.65 17.79 8.35 17.29 8.16L17.03 8.08C16.34 7.91 15.60 8.00 14.97 8.34Z"}));wa.displayName="CaptionsIcon";wa.propTypes=Q;var Bi=Pn.memo(wa,(e,t)=>e.width===t.width&&e.height===t.height&&e.active===t.active);var Ld=({fullscreen:e,captions:t,activeCaption:o,onCaptionChange:r})=>{let{i18n:n}=V(),i=wo.useMemo(()=>Pe(e),[e]),s=wo.useRef(null);wo.useEffect(()=>{o&&(s.current=o)},[o]);let l=wo.useCallback(a=>{var c,p;if(a.stopPropagation(),o)r(null);else{let u=s.current||((p=(c=t[0])==null?void 0:c.language)!=null?p:null);u&&r(u)}},[o,t,r]);return!t||t.length===0?null:wo.createElement(ge,{label:n.captions,fullscreen:e},wo.createElement(ne,{type:"button","aria-label":n.captions,onClick:l,isFullscreen:e},wo.createElement(Bi,{...i,active:!!o})))};Ld.propTypes={fullscreen:Tn.default.bool.isRequired,captions:Tn.default.array,activeCaption:Tn.default.string,onCaptionChange:Tn.default.func.isRequired};var Ed=wo.memo(Ld,(e,t)=>e.fullscreen===t.fullscreen&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.onCaptionChange===t.onCaptionChange);import Di from"react";var eh=({fullscreen:e,contextMenuRef:t,pictureInPictureEnabled:o,pip:r,loop:n=!1,requestPictureInPicture:i,exitPictureInPicture:s,onLoopClick:l})=>{let a=he(),{i18n:c}=V(),[p,u]=Di.useState({x:0,y:0}),f=Di.useCallback(S=>{var _,T;S.preventDefault();let b=((_=t.current)==null?void 0:_.offsetWidth)||0,k=((T=t.current)==null?void 0:T.offsetHeight)||0,g=S.currentTarget.getBoundingClientRect(),v=S.clientX-g.left,x=S.clientY-g.top,L=g.width,P=g.height,C=v+b>L?v-b:v,D=x+k>P?x-k:x;u({x:C,y:D}),a({type:"contextMenuVisible",payload:!0})},[t,a]),m=Di.useMemo(()=>Pe(e),[e]),h=Di.useMemo(()=>{let S=[{action:l,label:c.loop,iconType:"loop",iconProps:m,isCheckable:!0,defaultChecked:n}];return o&&S.push({action:r?s:i,label:c.pictureInPicture,iconType:"pip",iconProps:m,isCheckable:!1,defaultChecked:!1}),S},[m,c,o,r,n,i,s,l]);return{handleContextMenu:f,contextMenuPosition:p,contextMenuItems:h}},qi=eh;import zt from"react";import Ni from"react";var Md=Ni.forwardRef(({showing:e,positionX:t,positionY:o,...r},n)=>Ni.createElement("div",{ref:n,...r}));Md.displayName="StyledContextMenu";var Id=d(Md)`
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
`,Od=Ni.forwardRef(({isFullscreen:e,...t},o)=>Ni.createElement("div",{ref:o,...t}));Od.displayName="ContextMenuItem";var Ad=d(Od)`
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
`,Rd=d.span`
  padding: 0 12px;
  font-size: 118%;
`,Bd=d.div`
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
`;Rt();import ka from"react";var Pa=({width:e=36,height:t=36})=>ka.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},ka.createElement("path",{d:"M4.8 19.582 13.237 28.05 31.2 9.877 29.295 7.95 13.237 24.197 6.705 17.586Z"}));Pa.displayName="CheckedIcon";Pa.propTypes=Q;var Dd=ka.memo(Pa,oe);import Ta from"react";var La=({width:e=36,height:t=36})=>Ta.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Ta.createElement("path",{d:"M 21.333 23.666 C 21.333 23.758 21.3 23.835 21.235 23.902 C 21.168 23.967 21.091 24 21 24 L 11 24 C 10.944 24 10.898 23.995 10.859 23.979 C 10.821 23.966 10.789 23.942 10.765 23.906 C 10.741 23.871 10.723 23.844 10.708 23.822 C 10.695 23.803 10.684 23.762 10.678 23.703 C 10.671 23.644 10.667 23.604 10.667 23.583 L 10.667 17.335 L 8.667 17.335 C 8.487 17.335 8.329 17.266 8.198 17.134 C 8.067 17.004 8 16.846 8 16.666 C 8 16.5 8.052 16.358 8.156 16.239 L 11.489 12.24 C 11.621 12.087 11.792 12.01 12 12.01 C 12.208 12.01 12.379 12.087 12.511 12.24 L 15.844 16.239 C 15.948 16.358 16 16.5 16 16.666 C 16 16.846 15.933 17.004 15.803 17.134 C 15.671 17.266 15.513 17.335 15.333 17.335 L 13.333 17.335 L 13.333 21.334 L 19.333 21.334 C 19.444 21.334 19.532 21.372 19.593 21.448 L 21.26 23.448 C 21.309 23.518 21.333 23.59 21.333 23.666 Z M 28 19.334 C 28 19.5 27.948 19.642 27.844 19.761 L 24.511 23.76 C 24.372 23.92 24.201 24 24 24 C 23.799 24 23.628 23.92 23.489 23.76 L 20.156 19.761 C 20.052 19.642 20 19.5 20 19.334 C 20 19.154 20.067 18.996 20.198 18.866 C 20.329 18.734 20.487 18.667 20.667 18.667 L 22.667 18.667 L 22.667 14.666 L 16.667 14.666 C 16.556 14.666 16.468 14.626 16.407 14.542 L 14.74 12.542 C 14.691 12.478 14.667 12.41 14.667 12.334 C 14.667 12.243 14.7 12.166 14.765 12.098 C 14.832 12.034 14.909 12 15 12 L 25 12 C 25.056 12 25.103 12.007 25.141 12.022 C 25.179 12.034 25.211 12.058 25.235 12.094 C 25.259 12.13 25.278 12.156 25.292 12.178 C 25.305 12.199 25.316 12.238 25.323 12.298 C 25.329 12.356 25.333 12.396 25.333 12.418 L 25.333 18.667 L 27.333 18.667 C 27.513 18.667 27.671 18.734 27.803 18.866 C 27.933 18.996 28 19.154 28 19.334 Z"}));La.displayName="InLoopIcon";La.propTypes=Q;var qd=Ta.memo(La,oe);import Ea from"react";var Ma=({width:e=36,height:t=36})=>Ea.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},Ea.createElement("path",{d:"M25 17H17v6H25zM29 25V10.981a1.989 1.989 0 0 0 -2 -1.981H9a1.989 1.989 0 0 0 -2 1.981V25c0 1.1 0.9 2 2 2h18c1.1 0 2 -0.9 2 -2m-2 0.019H9V10.969h18z"}));Ma.displayName="PipIcon";Ma.propTypes=Q;var Nd=Ea.memo(Ma,oe);var th={loop:qd,pip:Nd},Fd=zt.forwardRef(({fullscreen:e,position:t,menuItems:o},r)=>{let n=V(),i=he(),s=zt.useRef();return zt.useEffect(()=>{let l=a=>{var u;let c=a.composedPath?a.composedPath():[];s.current&&c.includes(s.current)||((u=s.current)==null?void 0:u.contains(a.target))||i({type:"contextMenuVisible",payload:!1})};return window.addEventListener("click",l),()=>{window.removeEventListener("click",l)}},[i,s]),zt.createElement(Id,{ref:Ml([r,s]),showing:n.contextMenuVisible,positionX:t.x,positionY:t.y,"data-itemindex":"0","aria-checked":n.contextMenuVisible},o.map((l,a)=>{let c=th[l.iconType];return zt.createElement(Ad,{key:a,onClick:()=>{l.action(),i({type:"contextMenuVisible",payload:!1})},isFullscreen:e},c&&zt.createElement(c,{...l.iconProps}),zt.createElement(Rd,null,l.label),l.isCheckable&&l.defaultChecked&&zt.createElement(Bd,null,zt.createElement(Dd,{width:24,height:24})))}))});Fd.displayName="ContextMenu";var Ln=zt.memo(Fd,(e,t)=>e.fullscreen===t.fullscreen&&e.position===t.position&&e.menuItems===t.menuItems);var Nr=j(Z());Re();import Ge from"react";import Fi from"react";var _d=Fi.forwardRef(({positionX:e,positionY:t,isDragging:o,...r},n)=>Fi.createElement("div",{ref:n,...r}));_d.displayName="CaptionContainer";var Vd=d(_d)`
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
`,$d=Fi.forwardRef(({backgroundColor:e,...t},o)=>Fi.createElement("div",{ref:o,...t}));$d.displayName="CaptionWindow";var zd=d($d)`
  padding: 4px 8px;
  border-radius: 4px;
  width: max-content;
  max-width: 80vw;
  ${({backgroundColor:e})=>`background-color: ${e};`}
`,Hd=d.span`
  display: block;
  padding: 2px 6px;
  border-radius: 2px;
  line-height: 1.4;
  font-weight: 500;
  white-space: pre-wrap;
  word-wrap: break-word;
`;var oh=74,rh=88,jd=74,nh=88,Wd=12,Ia=42,Oa=58,ih=40,sh=60,Ud=({cues:e,currentTime:t,captionStyle:o,isFullscreen:r,controlsVisible:n})=>{let i=Ge.useRef(null),{hiding:s}=V(),l=he(),a=n||!s,c=a?oh:rh,[p,u]=Ge.useState({x:50,y:jd}),[f,m]=Ge.useState(!1),h=Ge.useRef(!1),S=Ge.useRef({x:0,y:0,startX:0,startY:0}),b=Ge.useMemo(()=>!e||e.length===0?[]:Hn(e,t),[e,t]),k=Ge.useCallback(y=>{var R,F,H,W,O,A,ee,$;y.preventDefault(),y.stopPropagation();let M=(W=(H=y.clientX)!=null?H:(F=(R=y.touches)==null?void 0:R[0])==null?void 0:F.clientX)!=null?W:0,E=($=(ee=y.clientY)!=null?ee:(A=(O=y.touches)==null?void 0:O[0])==null?void 0:A.clientY)!=null?$:0;S.current={x:M,y:E,startX:p.x,startY:p.y},m(!0),l({type:"captionDragging",payload:!0})},[p,l]),g=Ge.useCallback(y=>{var ae,me,ie,xe,Ce,qe,Ne,ct;if(!f||!i.current)return;let M=i.current.parentElement;if(!M)return;let E=(xe=(ie=y.clientX)!=null?ie:(me=(ae=y.touches)==null?void 0:ae[0])==null?void 0:me.clientX)!=null?xe:0,R=(ct=(Ne=y.clientY)!=null?Ne:(qe=(Ce=y.touches)==null?void 0:Ce[0])==null?void 0:qe.clientY)!=null?ct:0,F=M.getBoundingClientRect(),W=i.current.getBoundingClientRect().width/2/F.width*100,O=(E-S.current.x)/F.width*100,A=(R-S.current.y)/F.height*100,ee=Math.max(W,Math.min(100-W,S.current.startX+O)),$=Math.max(Wd,Math.min(c,S.current.startY+A));if(a&&i.current){let Qe=i.current.offsetHeight/F.height*100,we=i.current.offsetWidth/F.width*100,Lt=$,rt=$+Qe,io=ee-we/2;if(ee+we/2>ih&&io<sh&&rt>Ia&&Lt<Oa){let Xt=rt-Ia,xt=Oa-Lt;Xt<=xt?$=Ia-Qe:$=Oa,$=Math.max(Wd,Math.min(c,$))}}u({x:ee,y:$})},[f,c,a]),v=Ge.useCallback(()=>{m(!1),l({type:"captionDragging",payload:!1}),u(y=>{let E=y.y>=c-6;return h.current=!E,y})},[c,l]);if(Ge.useEffect(()=>{u(y=>h.current?{...y,y:Math.min(y.y,c)}:{...y,y:a?jd:nh})},[c,a]),Ge.useEffect(()=>(f&&(document.addEventListener("mousemove",g),document.addEventListener("mouseup",v),document.addEventListener("touchmove",g),document.addEventListener("touchend",v)),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",v)}),[f,g,v]),b.length===0)return null;let x=parseInt(o.fontSize)/100,P=`${(r?24:16)*x}px`,C=cr(o.fontColor,o.fontOpacity),D=cr(o.backgroundColor,o.backgroundOpacity),_=cr(o.windowColor,o.windowOpacity),T=jn(o.edgeStyle,"rgba(0,0,0,0.8)"),w=o.fontFamily==="small-caps"?{fontFamily:"sans-serif",fontVariant:"small-caps"}:{fontFamily:o.fontFamily,fontVariant:"normal"};return Ge.createElement(Vd,{ref:i,positionX:p.x,positionY:p.y,onMouseDown:k,onTouchStart:k,isDragging:f},Ge.createElement(zd,{backgroundColor:_},b.map((y,M)=>Ge.createElement(Hd,{key:`${y.startTime}-${M}`,style:{fontSize:P,color:C,backgroundColor:D,textShadow:T,...w}},y.text))))};Ud.propTypes={cues:Nr.default.array,currentTime:Nr.default.number.isRequired,captionStyle:Nr.default.object.isRequired,isFullscreen:Nr.default.bool,controlsVisible:Nr.default.bool};var _i=Ge.memo(Ud);Re();import Vi from"react";var Xd="caption_style",ah=({captions:e,activeCaption:t})=>{let[o,r]=Vi.useState([]),[n,i]=Vi.useState(()=>{let l=lr(Xd);if(l)try{return{...co,...JSON.parse(l)}}catch{return co}return co});Vi.useEffect(()=>{if(!t||!e||e.length===0){r([]);return}let l=e.find(c=>c.language===t);if(!l){r([]);return}let a=!1;return(async()=>{try{let p=await(await fetch(l.src)).text();if(a)return;let u=zn(p);r(u)}catch(c){console.error("Failed to load caption file:",c),a||r([])}})(),()=>{a=!0}},[t,e]);let s=Vi.useCallback(l=>{i(l),ur(Xd,JSON.stringify(l),365)},[]);return{cues:o,captionStyle:n,updateCaptionStyle:s}},$i=ah;import Go from"react";var lh=({ads:e,currentTime:t,duration:o,ended:r,onPauseClick:n})=>{let i=e!=null,s=i&&typeof e.skipAfter=="number"&&e.skipAfter>0,l=Go.useMemo(()=>!i||!s?!1:t>=e.skipAfter,[i,s,t,e]),a=Go.useMemo(()=>{if(!i||!s)return 0;let m=Math.ceil(e.skipAfter-t);return m>0?m:0},[i,s,t,e]),c=Go.useMemo(()=>{if(!i)return 0;if(s){let m=t/e.skipAfter;return m>1?1:m}return o>0?t/o:0},[i,s,t,o,e]),p=Go.useRef(!1);Go.useEffect(()=>{i&&r&&!p.current&&(p.current=!0,e.onAdComplete&&e.onAdComplete()),i||(p.current=!1)},[i,r,e]);let u=Go.useCallback(()=>{i&&e.onSkip&&e.onSkip()},[i,e]),f=Go.useCallback(()=>{i&&(n&&n(),e.onAdClick&&e.onAdClick(),e.url&&window.open(e.url,"_blank","noopener,noreferrer"))},[i,e,n]);return{isAdActive:i,hasSkipTimer:s,canSkip:l,skipCountdown:a,adProgress:c,onSkipClick:u,onAdClick:f}},Fr=lh;var Ke=j(Z());import Ie from"react";import bt from"react";var Yd=bt.forwardRef(({hiding:e,isFullscreen:t,...o},r)=>bt.createElement("div",{ref:r,...o}));Yd.displayName="AdBannerWrapper";var Gd=d(Yd)`
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
`,Kd=d.div`
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
`,Zd=d.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
`,Qd=d.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
`,Jd=d.span`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
`,ef=d.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
`,tf=d.button`
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
`,of=bt.forwardRef(({isFullscreen:e,...t},o)=>bt.createElement("div",{ref:o,...t}));of.displayName="SkipWrapper";var rf=d(of)`
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
`,nf=bt.forwardRef(({canSkip:e=!0,isFullscreen:t,...o},r)=>bt.createElement("button",{ref:r,...o}));nf.displayName="SkipButton";var sf=d(nf)`
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
`,af=bt.forwardRef(({isFullscreen:e,...t},o)=>bt.createElement("div",{ref:o,...t}));af.displayName="SkipMessage";var lf=d(af)`
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
`,uf=bt.forwardRef(({isFullscreen:e,...t},o)=>bt.createElement("span",{ref:o,...t}));uf.displayName="SkipCountdownText";var cf=d(uf)`
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
`,pf=d.img`
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 100%;
  object-fit: fill;
  border-radius: 2px;
  flex-shrink: 0;
`,df=d.svg`
  width: 18px;
  height: 18px;
  fill: #fff;
  flex-shrink: 0;
`,ff=d.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  display: flex;
  align-items: center;
  gap: 8px;
`,mf=bt.forwardRef(({hiding:e,isFullscreen:t,...o},r)=>bt.createElement("div",{ref:r,...o}));mf.displayName="AdTimeSliderWrapper";var hf=d(mf)`
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
`;var uh=()=>Ie.createElement(df,{viewBox:"11 10 14 16",xmlns:"http://www.w3.org/2000/svg"},Ie.createElement("path",{d:"M 13.211 23.887 C 13.082 23.986 12.972 24.02 12.883 23.989 C 12.794 23.958 12.75 23.874 12.75 23.739 L 12.75 12.261 C 12.75 12.126 12.794 12.042 12.883 12.011 C 12.972 11.98 13.082 12.014 13.211 12.113 L 20.492 17.649 C 20.553 17.696 20.598 17.745 20.625 17.797 L 20.625 12.51 C 20.625 12.375 20.69 12.258 20.82 12.159 C 20.95 12.061 21.104 12.011 21.281 12.011 L 22.594 12.011 C 22.771 12.011 22.925 12.061 23.055 12.159 C 23.185 12.258 23.25 12.375 23.25 12.51 L 23.25 23.49 C 23.25 23.625 23.185 23.742 23.055 23.841 C 22.925 23.939 22.771 23.989 22.594 23.989 L 21.281 23.989 C 21.104 23.989 20.95 23.939 20.82 23.841 C 20.69 23.742 20.625 23.625 20.625 23.49 L 20.625 18.203 C 20.598 18.255 20.553 18.304 20.492 18.351 Z"})),yf=({ads:e,canSkip:t,skipCountdown:o,hasSkipTimer:r,adProgress:n,onSkipClick:i,onAdClick:s,hiding:l,poster:a,menuOpen:c=!1,fullscreen:p=!1})=>{let{i18n:u}=V();if(!e)return null;let f=c?{zIndex:0}:void 0,m="";try{m=new URL(e.url).hostname}catch{m=e.url}return Ie.createElement(Ie.Fragment,null,Ie.createElement(Gd,{hiding:l,isFullscreen:p,style:f},Ie.createElement(Kd,{onClick:s,role:"link","aria-label":e.title},e.icon&&Ie.createElement(Zd,{src:e.icon,alt:""}),Ie.createElement(Qd,null,Ie.createElement(Jd,null,e.title),Ie.createElement(ef,null,m)),Ie.createElement(tf,{type:"button"},e.buttonText)),Ie.createElement(ff,null,u.sponsored," \u2022 ",m)),r&&Ie.createElement(rf,{isFullscreen:p,style:f},t?Ie.createElement(sf,{onClick:i,"aria-label":u.skipAd,isFullscreen:p,canSkip:!0},u.skipAd,Ie.createElement(uh,null)):Ie.createElement(lf,{isFullscreen:p},Ie.createElement(cf,{isFullscreen:p},o),a&&Ie.createElement(pf,{src:a,alt:"",width:"73",height:"41",draggable:"false"}))))};yf.propTypes={ads:Ke.default.shape({title:Ke.default.string.isRequired,url:Ke.default.string.isRequired,buttonText:Ke.default.string.isRequired,icon:Ke.default.string,skipAfter:Ke.default.number}),canSkip:Ke.default.bool.isRequired,skipCountdown:Ke.default.number.isRequired,hasSkipTimer:Ke.default.bool.isRequired,adProgress:Ke.default.number.isRequired,onSkipClick:Ke.default.func.isRequired,onAdClick:Ke.default.func.isRequired,hiding:Ke.default.bool.isRequired,poster:Ke.default.string};var zi=Ie.memo(yf,(e,t)=>e.ads===t.ads&&e.canSkip===t.canSkip&&e.skipCountdown===t.skipCountdown&&e.hasSkipTimer===t.hasSkipTimer&&e.adProgress===t.adProgress&&e.onSkipClick===t.onSkipClick&&e.onAdClick===t.onAdClick&&e.hiding===t.hiding&&e.poster===t.poster&&e.fullscreen===t.fullscreen&&e.menuOpen===t.menuOpen);var gf=G.forwardRef(({videoRef:e,playerRef:t,live:o=!1,hasResource:r=!1,hasAudio:n,prevented:i,loading:s,paused:l,ended:a,seeking:c,waiting:p,duration:u,buffered:f=null,currentTime:m,muted:h,volume:S,pictureInPictureEnabled:b,pip:k,fullscreen:g,qualities:v,captions:x,activeCaption:L,spriteVTTFile:P,chapters:C,heatmapData:D,fullHDQualityBreak:_,playbackRate:T,playbackQuality:w,loop:y,poster:M,onPlayClick:E,onPauseClick:R,onTogglePlay:F,changePlaybackRate:H,changePlayBackQuality:W,changeVolume:O,onMutedClick:A,changeCurrentTime:ee,requestPictureInPicture:$,exitPictureInPicture:ae,requestFullscreen:me,exitFullscreen:ie,onSeeking:xe,onLoopClick:Ce,onCaptionChange:qe,onPreventedClick:Ne,onPrevious:ct,onNext:Qe,showNavButtons:we,ads:Lt=null,kernelMsg:rt=null},io)=>{let Et=he(),{hiding:pt,menuVisible:Xt,subMenuVisible:xt}=V(),[er,so]=G.useState(!1),Yt=G.useRef(),Po=G.useRef(null),{showControls:Mt,hideControls:To}=Up({hasResource:r,loading:s,prevented:i,paused:l,ended:a,waiting:p,seeking:c,kernelMsg:rt}),{contextMenuItems:zr,contextMenuPosition:Hr,handleContextMenu:jr}=qi({fullscreen:g,contextMenuRef:Po,pip:k,loop:y,pictureInPictureEnabled:b,requestPictureInPicture:$,exitPictureInPicture:ae,onLoopClick:Ce}),{isAdActive:dt,hasSkipTimer:tr,canSkip:or,skipCountdown:Lo,adProgress:Je,onSkipClick:Wr,onAdClick:Eo}=Fr({ads:Lt,currentTime:m,duration:u,ended:a,onPauseClick:R}),Mo=G.useCallback(()=>{},[]),{getChapterAtTime:nt}=So({chapters:C,duration:u}),ao=G.useMemo(()=>nt(m),[nt,m]),{cues:rr,captionStyle:nr,updateCaptionStyle:lo}=$i({captions:x,activeCaption:L});G.useEffect(()=>{Et({videoRef:e,playerRef:t})},[e,t,Et]),G.useImperativeHandle(io,()=>({showControls:Mt,hideControls:To}),[Mt,To]),G.useEffect(()=>{if(t.current){let $e=t.current,It=ft=>{let Ot=fi[ft.which||ft.keyCode]||mi[ft.key];clearTimeout(Yt.current),Ot==="ARROW_UP_KEY"||Ot==="ARROW_DOWN_KEY"?(so(!0),Yt.current=setTimeout(()=>so(!1),2e3)):so(!1)};return $e.addEventListener("keydown",It),()=>{clearTimeout(Yt.current),$e.removeEventListener("keydown",It)}}},[h,S,t]);let Gt=G.useCallback(({quality:$e,speed:It})=>{var ft;if(It&&H(Number((ft=It.value)!=null?ft:1)),$e){let Ot=Number($e.value);W(Number.isNaN(Ot)?0:Ot)}},[H,W]);return G.createElement(Dt,{onContextMenu:jr,onMouseLeave:To,onMouseMove:Mt,onTouchStart:Mt,onMouseEnter:Mt,onClick:Mt},G.createElement(ln,{hasResource:r,prevented:i,paused:l,muted:h,currentTime:m,onClick:Ne}),M&&G.createElement(pn,{style:{opacity:m<=0||a?1:0}},G.createElement(dn,{style:{backgroundImage:`url(${M})`}})),G.createElement(cc,null,G.createElement(pc,{style:{display:er?"inline-block":"none"}},Math.round(S*100),"%")),G.createElement(Ln,{ref:Po,fullscreen:g,position:Hr,menuItems:zr}),P&&G.createElement(Cn,{spriteVTTFile:P,duration:u,seekTime:m,visible:c}),L&&rr.length>0&&G.createElement(_i,{cues:rr,currentTime:m,captionStyle:nr,isFullscreen:g,controlsVisible:l||a||s||p}),!dt&&G.createElement(Ys,{hasResource:r,loading:s,paused:l,ended:a,waiting:p,seeking:c,kernelMsg:rt,onClick:F}),dt&&G.createElement(Ys,{hasResource:r,loading:s,paused:l,ended:!1,waiting:p,seeking:!1,kernelMsg:rt,onClick:F}),G.createElement(dc,{style:{opacity:pt?0:1}}),dt&&o===!1&&G.createElement(hf,{hiding:pt,isFullscreen:g},G.createElement(Js,{spriteVTTFile:"",chapters:[],heatmapData:[],currentTime:m,duration:u,buffered:f,onChange:Mo,onSeeking:Mo,fullscreen:g,disabled:!0,adMode:!0})),dt&&G.createElement(zi,{ads:Lt,canSkip:or,skipCountdown:Lo,hasSkipTimer:tr,adProgress:Je,onSkipClick:Wr,onAdClick:Eo,hiding:pt,poster:M,menuOpen:Xt||xt,fullscreen:g}),G.createElement(gc,null,o===!1&&!dt&&G.createElement(Js,{spriteVTTFile:P,chapters:C,heatmapData:D,currentTime:m,duration:u,buffered:f,onChange:ee,onSeeking:xe,fullscreen:g,disabled:!1,adMode:!1}),G.createElement(kc,{extra:G.createElement(G.Fragment,null,G.createElement(Ed,{fullscreen:g,captions:x,activeCaption:L,onCaptionChange:qe}),G.createElement(Td,{live:o,qualities:v,captions:x,activeCaption:L,playbackRate:T,playbackQuality:w,fullscreen:g,fullHDQualityBreak:_,changeSettings:Gt,onCaptionChange:qe,captionStyle:nr,onCaptionStyleChange:lo,adMode:dt}),G.createElement(Wp,{fullscreen:g,requestFullscreen:me,exitFullscreen:ie})),fullscreen:g},G.createElement(Li,{fullscreen:g,onPrevious:ct,showNavButtons:we}),G.createElement(_p,{fullscreen:g,paused:l,ended:a,onPauseClick:R,onPlayClick:E}),G.createElement(Ei,{fullscreen:g,onNext:Qe,showNavButtons:we}),G.createElement(Ap,{fullscreen:g,isMuted:h,forceMuted:!n,volume:S,onMutedClick:A,changeVolume:O}),G.createElement(qp,{live:o,currentTime:m,duration:u,chapterTitle:ao==null?void 0:ao.title}))),G.createElement(cn,{hasResource:r,loading:s,kernelMsg:rt}))});gf.displayName="DesktopPlayerSkin";var bf=gf;var N=j(Z());import fe from"react";var Sf=d.div`
  ${Ir}
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
`,vf=d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  pointer-events: none;
  ${({$visible:e})=>e?X`
          opacity: 1;
        `:X`
          opacity: 0;
        `}
`;var Qo=j(Z());import Zo from"react";var xf=d.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 7;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${({$visible:e})=>e?X`
          opacity: 1;
          pointer-events: auto;
        `:X`
          opacity: 0;
          pointer-events: none;
        `}
`,Aa=d.button`
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
`;import ce from"react";var Cf=()=>ce.createElement(Mr,{width:"100%",height:"100%"}),wf=({width:e="100%",height:t="100%"}={})=>ce.createElement("svg",{viewBox:"0 0 56 56",preserveAspectRatio:"xMidYMid meet",fill:"none",width:e,height:t},ce.createElement("path",{fill:"currentColor",d:"M 41.543 28.638 L 15.115 43.848 C 14.81 44.028 14.548 44.048 14.329 43.91 C 14.11 43.772 14 43.526 14 43.168 L 14 12.832 C 14 12.474 14.11 12.226 14.329 12.09 C 14.548 11.952 14.81 11.972 15.115 12.152 L 41.543 27.36 C 41.848 27.54 42 27.752 42 28 C 42 28.248 41.848 28.46 41.543 28.638 Z"})),kf=({width:e="100%",height:t="100%"}={})=>ce.createElement("svg",{viewBox:"0 0 56 56",preserveAspectRatio:"xMidYMid meet",fill:"none",width:e,height:t},ce.createElement("rect",{fill:"currentColor",x:"12",y:"12",width:"8",height:"32"}),ce.createElement("rect",{fill:"currentColor",x:"36",y:"12",width:"8",height:"32"})),Pf=({width:e="100%",height:t="100%"}={})=>ce.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},ce.createElement("path",{fill:"currentColor",d:"M 25.184 9.17 C 25.377 9.021 25.542 8.97 25.676 9.017 C 25.809 9.063 25.875 9.189 25.875 9.392 L 25.875 26.608 C 25.875 26.811 25.809 26.937 25.676 26.983 C 25.542 27.03 25.377 26.979 25.184 26.83 L 14.262 18.526 C 14.17 18.456 14.103 18.382 14.063 18.304 L 14.063 26.235 C 14.063 26.437 13.965 26.613 13.77 26.761 C 13.575 26.908 13.344 26.983 13.078 26.983 L 11.109 26.983 C 10.843 26.983 10.612 26.908 10.418 26.761 C 10.223 26.613 10.125 26.437 10.125 26.235 L 10.125 9.765 C 10.125 9.563 10.223 9.387 10.418 9.239 C 10.612 9.092 10.843 9.017 11.109 9.017 L 13.078 9.017 C 13.344 9.017 13.575 9.092 13.77 9.239 C 13.965 9.387 14.063 9.563 14.063 9.765 L 14.063 17.695 C 14.103 17.617 14.17 17.544 14.262 17.473 Z"})),Tf=({width:e="100%",height:t="100%"}={})=>ce.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},ce.createElement("path",{fill:"currentColor",d:"M 10.816 9.17 C 10.623 9.021 10.458 8.97 10.324 9.017 C 10.191 9.063 10.125 9.189 10.125 9.392 L 10.125 26.608 C 10.125 26.811 10.191 26.937 10.324 26.983 C 10.458 27.03 10.623 26.979 10.816 26.83 L 21.738 18.526 C 21.83 18.456 21.897 18.382 21.937 18.304 L 21.937 26.235 C 21.937 26.437 22.035 26.613 22.23 26.761 C 22.425 26.908 22.656 26.983 22.922 26.983 L 24.891 26.983 C 25.157 26.983 25.388 26.908 25.582 26.761 C 25.777 26.613 25.875 26.437 25.875 26.235 L 25.875 9.765 C 25.875 9.563 25.777 9.387 25.582 9.239 C 25.388 9.092 25.157 9.017 24.891 9.017 L 22.922 9.017 C 22.656 9.017 22.425 9.092 22.23 9.239 C 22.035 9.387 21.937 9.563 21.937 9.765 L 21.937 17.695 C 21.897 17.617 21.83 17.544 21.738 17.473 Z"})),Lf=({width:e="100%",height:t="100%"}={})=>ce.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},ce.createElement("path",{fill:"currentColor",d:"M 10 16 L 10 10.5 C 10 10.224 10.224 10 10.5 10 L 16 10 L 16 12 L 12 12 L 12 16 Z M 26 16 L 26 12 L 22 12 L 22 10 L 26.5 10 C 26.776 10 27 10.224 27 10.5 L 27 16 Z M 26 20 L 27 20 L 27 25.5 C 27 25.776 26.776 26 26.5 26 L 22 26 L 22 24 L 26 24 Z M 10 20 L 10 25.5 C 10 25.776 10.224 26 10.5 26 L 16 26 L 16 24 L 12 24 L 12 20 Z"})),Ef=({width:e="100%",height:t="100%"}={})=>ce.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},ce.createElement("path",{fill:"currentColor",d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"})),En=({width:e="100%",height:t="100%"}={})=>ce.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},ce.createElement("path",{fill:"currentColor",d:"M 27.452 17.699 C 27.408 16.709 27.211 15.734 26.866 14.806 L 28.396 13.381 C 28.685 13.102 28.753 12.663 28.561 12.31 C 27.951 11.182 27.166 10.156 26.237 9.27 C 25.954 8.996 25.522 8.948 25.187 9.154 L 23.379 10.28 C 22.566 9.715 21.667 9.282 20.72 8.996 L 20.534 6.903 C 20.504 6.5 20.195 6.173 19.794 6.12 C 19.237 6.039 18.673 5.999 18.11 6 C 17.391 5.997 16.675 6.061 15.969 6.188 C 15.587 6.249 15.293 6.558 15.253 6.941 L 15.029 9.081 C 14.156 9.378 13.331 9.798 12.579 10.333 L 10.819 9.197 C 10.483 8.981 10.043 9.025 9.757 9.304 C 8.811 10.21 8.016 11.262 7.405 12.422 C 7.218 12.768 7.281 13.198 7.563 13.475 L 9.105 14.96 C 8.821 15.752 8.641 16.578 8.573 17.418 L 6.586 18.115 C 6.207 18.24 5.966 18.613 6.004 19.009 C 6.091 20.334 6.394 21.637 6.903 22.862 C 7.048 23.232 7.431 23.454 7.824 23.398 L 9.907 23.098 C 10.312 23.783 10.803 24.414 11.367 24.977 L 10.631 27.005 C 10.496 27.377 10.624 27.79 10.943 28.021 C 12.006 28.799 13.192 29.398 14.451 29.793 C 14.833 29.917 15.251 29.758 15.454 29.413 L 16.53 27.61 C 16.993 27.687 17.463 27.73 17.933 27.738 C 18.287 27.74 18.641 27.723 18.993 27.682 L 20.067 29.544 C 20.254 29.895 20.655 30.072 21.041 29.972 C 22.305 29.638 23.505 29.094 24.591 28.367 C 24.927 28.146 25.07 27.724 24.937 27.344 L 24.249 25.349 C 24.931 24.743 25.525 24.043 26.009 23.269 L 28.091 23.603 C 28.483 23.667 28.868 23.452 29.021 23.084 C 29.543 21.894 29.871 20.629 29.993 19.335 C 30.046 18.931 29.807 18.547 29.423 18.414 Z M 27.689 21.779 L 25.161 21.376 L 24.556 22.344 C 24.161 22.981 23.677 23.557 23.118 24.056 L 22.261 24.831 L 23.118 27.263 C 22.523 27.611 21.894 27.898 21.241 28.119 L 19.957 25.867 L 18.855 25.979 C 18.571 26.012 18.284 26.027 17.999 26.026 C 17.611 26.017 17.224 25.982 16.842 25.919 L 15.651 25.693 L 14.341 27.917 C 13.685 27.671 13.059 27.356 12.472 26.976 L 13.368 24.531 L 12.575 23.749 C 12.116 23.283 11.715 22.765 11.38 22.203 L 10.794 21.217 L 8.261 21.581 C 8.035 20.918 7.875 20.232 7.781 19.536 L 10.211 18.68 L 10.288 17.558 C 10.34 16.872 10.486 16.198 10.717 15.551 L 11.088 14.488 L 9.23 12.695 C 9.587 12.11 10.002 11.56 10.467 11.056 L 12.61 12.442 L 13.547 11.77 C 14.163 11.336 14.838 10.991 15.552 10.747 L 16.602 10.396 L 16.872 7.803 C 17.278 7.748 17.687 7.719 18.096 7.712 C 18.358 7.712 18.619 7.712 18.886 7.751 L 19.113 10.319 L 20.23 10.657 C 21.005 10.891 21.74 11.245 22.406 11.707 L 23.327 12.349 L 25.512 10.987 C 25.964 11.476 26.369 12.005 26.721 12.571 L 24.853 14.326 L 25.281 15.417 C 25.56 16.176 25.723 16.973 25.761 17.78 L 25.813 18.94 L 28.219 19.819 C 28.109 20.488 27.93 21.144 27.689 21.779 Z M 17.972 22.267 C 14.675 22.267 12.614 18.699 14.262 15.845 C 15.912 12.992 20.034 12.992 21.683 15.845 C 22.065 16.507 22.263 17.257 22.257 18.02 C 22.252 20.377 20.331 22.282 17.972 22.267 Z M 18.028 15.417 C 16.05 15.395 14.788 17.52 15.758 19.244 C 16.727 20.968 19.2 20.998 20.209 19.296 C 20.444 18.901 20.568 18.447 20.568 17.987 C 20.568 16.579 19.436 15.433 18.028 15.417 Z"})),Mf=({width:e="100%",height:t="100%"}={})=>ce.createElement("svg",{viewBox:"0 0 36 36",width:e,height:t},ce.createElement("path",{fill:"currentColor",d:"M 24.344 15.999 L 19.6 20.544 L 19.169 20.956 L 18.613 20.807 C 18.389 20.746 18.228 20.723 17.998 20.724 C 17.263 20.682 16.798 20.925 16.316 21.387 C 15.84 21.844 15.601 22.235 15.653 22.903 C 15.65 23.104 15.671 23.237 15.732 23.441 L 15.921 24.07 L 15.436 24.536 L 14.105 25.811 C 13.991 25.972 13.943 26.063 13.937 26.177 C 13.932 26.29 13.954 26.362 14.1 26.539 C 14.267 26.702 14.454 26.723 14.587 26.73 C 14.72 26.736 14.824 26.733 15.067 26.545 L 16.4 25.266 L 16.831 24.854 L 17.387 25.003 C 17.611 25.064 17.777 25.087 18.001 25.085 C 18.737 25.128 19.202 24.884 19.684 24.422 C 20.16 23.966 20.399 23.576 20.346 22.906 C 20.345 22.701 20.328 22.567 20.268 22.37 L 20.076 21.743 L 20.564 21.275 L 25.308 16.73 C 25.454 16.554 25.497 16.41 25.455 16.238 C 25.414 16.065 25.322 15.903 25.01 15.835 C 24.703 15.762 24.571 15.802 24.345 15.997 M 18.101 6 C 18.101 6 16.905 6.031 16.356 6.084 C 15.807 6.137 15.292 6.213 14.761 6.317 C 13.701 6.526 12.725 6.818 11.75 7.213 C 9.801 8.002 8.134 9.089 6.662 10.499 C 3.715 13.324 1.949 16.988 2.001 21.269 C 1.967 24.34 2.871 27.191 4.685 29.726 C 4.82 29.961 4.985 30.022 5.284 29.994 C 5.583 29.965 5.703 29.913 5.825 29.665 C 5.895 29.443 5.902 29.37 5.784 29.167 C 2.764 24.665 2.661 19.146 4.809 14.968 C 6.952 10.799 11.515 7.546 17.036 7.115 C 22.565 6.846 27.525 9.492 30.218 13.351 C 32.916 17.219 33.57 22.701 31.19 27.546 C 30.907 28.096 30.57 28.655 30.217 29.164 C 30.164 29.383 30.097 29.407 30.175 29.662 C 30.25 29.906 30.341 29.989 30.708 29.989 C 30.683 29.99 30.723 29.992 30.765 29.992 C 31.033 29.992 31.173 29.907 31.315 29.726 C 33.128 27.19 34.033 24.344 33.999 21.273 C 34.051 16.991 32.284 13.324 29.337 10.499 C 26.384 7.67 22.505 5.962 18 6.004"})),If=({width:e=24,height:t=24}={})=>ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},ce.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),ce.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Of=({width:e=24,height:t=24}={})=>ce.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},ce.createElement("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"})),Ko=({width:e=20,height:t=20}={})=>ce.createElement("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",width:e,height:t},ce.createElement("path",{fill:"#ccc",d:"M8 5v14l11-7z"})),Af=({width:e="100%",height:t="100%"}={})=>ce.createElement("svg",{viewBox:"-6 -6 36 36",fill:"currentColor",width:e,height:t},ce.createElement("path",{d:"M21.20 3.01L21 3H3L2.79 3.01C2.30 3.06 1.84 3.29 1.51 3.65C1.18 4.02 .99 4.50 1 5V19L1.01 19.20C1.05 19.66 1.26 20.08 1.58 20.41C1.91 20.73 2.33 20.94 2.79 20.99L3 21H21L21.20 20.98C21.66 20.94 22.08 20.73 22.41 20.41C22.73 20.08 22.94 19.66 22.99 19.20L23 19V5C23.00 4.50 22.81 4.02 22.48 3.65C22.15 3.29 21.69 3.06 21.20 3.01ZM3 19V5H21V19H3ZM6.97 8.34C6.42 8.64 5.96 9.09 5.64 9.63L5.50 9.87C5.16 10.53 4.99 11.26 5 12L5.00 12.27C5.04 12.92 5.21 13.55 5.50 14.12L5.64 14.36C5.96 14.90 6.42 15.35 6.97 15.65L7.21 15.77C7.79 16.01 8.43 16.06 9.03 15.91L9.29 15.83C9.88 15.61 10.39 15.23 10.77 14.73C10.93 14.53 11.00 14.27 10.97 14.02C10.94 13.77 10.82 13.53 10.63 13.37C10.44 13.20 10.19 13.11 9.93 13.12C9.68 13.13 9.44 13.24 9.26 13.43L9.19 13.50C9.05 13.70 8.85 13.85 8.62 13.94L8.54 13.97C8.35 14.02 8.16 14.00 7.99 13.92L7.91 13.88C7.67 13.75 7.48 13.56 7.35 13.32L7.28 13.20C7.11 12.88 7.02 12.52 7.00 12.16L7 12C6.99 11.58 7.09 11.16 7.28 10.79L7.35 10.67C7.48 10.43 7.67 10.24 7.91 10.11C8.10 10.00 8.32 9.97 8.54 10.02L8.62 10.05C8.81 10.12 8.98 10.24 9.11 10.39L9.19 10.49L9.26 10.57C9.43 10.74 9.66 10.85 9.91 10.87C10.15 10.89 10.40 10.81 10.59 10.66C10.79 10.51 10.92 10.29 10.96 10.05C11.01 9.80 10.96 9.55 10.83 9.34L10.77 9.26L10.60 9.05C10.24 8.65 9.79 8.35 9.29 8.16L9.03 8.08C8.34 7.91 7.60 8.00 6.97 8.34ZM14.97 8.34C14.42 8.64 13.96 9.09 13.64 9.63L13.50 9.87C13.16 10.53 12.99 11.26 13 12L13.00 12.27C13.04 12.92 13.21 13.55 13.50 14.12L13.64 14.36C13.96 14.90 14.42 15.35 14.97 15.65L15.21 15.77C15.79 16.01 16.43 16.06 17.03 15.91L17.29 15.83C17.88 15.61 18.39 15.23 18.77 14.73C18.93 14.53 19.00 14.27 18.97 14.02C18.94 13.77 18.82 13.53 18.63 13.37C18.44 13.20 18.19 13.11 17.93 13.12C17.68 13.13 17.44 13.24 17.26 13.43L17.19 13.50C17.05 13.70 16.85 13.85 16.62 13.94L16.54 13.97C16.35 14.02 16.16 14.00 15.99 13.92L15.91 13.88C15.67 13.75 15.48 13.56 15.35 13.32L15.28 13.20C15.11 12.88 15.02 12.52 15.00 12.16L15 12C14.99 11.58 15.09 11.16 15.28 10.79L15.35 10.67C15.48 10.43 15.67 10.24 15.91 10.11C16.10 10.00 16.32 9.97 16.54 10.02L16.62 10.05C16.81 10.12 16.98 10.24 17.11 10.39L17.19 10.49L17.26 10.57C17.43 10.74 17.66 10.85 17.91 10.87C18.15 10.89 18.40 10.81 18.59 10.66C18.79 10.51 18.92 10.29 18.96 10.05C19.01 9.80 18.96 9.55 18.83 9.34L18.77 9.26L18.60 9.05C18.24 8.65 17.79 8.35 17.29 8.16L17.03 8.08C16.34 7.91 15.60 8.00 14.97 8.34Z"}));var Rf=({visible:e,captions:t,activeCaption:o,onCaptionChange:r,onOpenSettings:n,settingsLabel:i,captionsLabel:s,hideSettings:l=!1})=>{let a=t&&t.length>0,c=Zo.useCallback(p=>{p.stopPropagation(),o?r(null):t&&t.length>0&&r(t[0].language)},[o,t,r]);return Zo.createElement(xf,{$visible:e},a&&Zo.createElement(Aa,{onClick:c,"aria-label":s||"Captions"},Zo.createElement(Bi,{width:24,height:24,active:!!o})),!l&&Zo.createElement(Aa,{onClick:n,"aria-label":i},Zo.createElement(En,null)))};Rf.propTypes={visible:Qo.default.bool.isRequired,captions:Qo.default.array,activeCaption:Qo.default.string,onCaptionChange:Qo.default.func,onOpenSettings:Qo.default.func.isRequired,settingsLabel:Qo.default.string.isRequired};var Bf=Zo.memo(Rf);var ot=j(Z());import Ze from"react";var Df=d.div`
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
  ${({$visible:e})=>e?X`
          opacity: 1;
          pointer-events: auto;
        `:X`
          opacity: 0;
          pointer-events: none;
        `}
`,qf=d.button`
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
`,Ra=d.button`
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
`,ch=ci`
  to {
    transform: rotate(360deg);
  }
`,Nf=d.div`
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
    animation: ${ch} 0.8s linear infinite;
  }
`;var Ff=({visible:e,isLoading:t,paused:o,ended:r,onPlayPause:n,onPrevious:i,onNext:s,showNavButtons:l=!1,i18n:a})=>{let c=typeof i=="function",p=typeof s=="function",u=c||l,f=p||l,m=Ze.useCallback(b=>{b.stopPropagation(),c&&i()},[c,i]),h=Ze.useCallback(b=>{b.stopPropagation(),p&&s()},[p,s]),S=Ze.useCallback(b=>{b.stopPropagation(),n()},[n]);return Ze.createElement(Df,{$visible:e},u&&Ze.createElement(Ra,{"aria-label":a.previous,onClick:m,disabled:!c},Ze.createElement(Pf,null)),t?Ze.createElement(Nf,{onClick:b=>b.stopPropagation()},Ze.createElement("div",null)):Ze.createElement(qf,{"aria-label":o?a.play:a.pause,onClick:S},r?Ze.createElement(Cf,null):o?Ze.createElement(wf,null):Ze.createElement(kf,null)),f&&Ze.createElement(Ra,{"aria-label":a.next,onClick:h,disabled:!p},Ze.createElement(Tf,null)))};Ff.propTypes={visible:ot.default.bool.isRequired,isLoading:ot.default.bool.isRequired,paused:ot.default.bool.isRequired,ended:ot.default.bool.isRequired,onPlayPause:ot.default.func.isRequired,onPrevious:ot.default.func,onNext:ot.default.func,showNavButtons:ot.default.bool,i18n:ot.default.shape({previous:ot.default.string,next:ot.default.string,play:ot.default.string,pause:ot.default.string}).isRequired};var _f=Ze.memo(Ff);var de=j(Z());import jt from"react";var Vf=d.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 7;
  display: flex;
  align-items: center;
  padding: 0px 16px 8px 16px;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${({$visible:e})=>e?X`
          opacity: 1;
          pointer-events: auto;
        `:X`
          opacity: 0;
          pointer-events: none;
        `}
`,$f=d.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 12px 0 16px;
`,zf=d.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  flex-shrink: 0;
`,Hf=d.button`
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
`;var De=j(Z());import Oe from"react";var jf=d.div`
  flex: 1;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  touch-action: none;
`,Wf=d.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
`,Uf=d.div`
  position: absolute;
  left: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1px;
  transform-origin: left;
`,Xf=d.div`
  position: absolute;
  left: 0;
  height: 2px;
  background: #cb0e0b;
  border-radius: 1px;
  transform-origin: left;
`,Yf=d.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #cb0e0b;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 4;
`,Gf=d.div`
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
`;var Ht=j(Z());import Mn from"react";var Kf=d.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: stretch;
  gap: 2px;
  height: 2px;
`,Zf=d.div`
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
  height: 2px;
  transition: transform 0.1s ease;
  transform-origin: center center;
`,Qf=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`,Jf=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #cb0e0b;
`;var e1=({segments:e,currentTime:t,duration:o,buffered:r,hoveredIndex:n})=>{if(e.length===0||o<=0)return null;let i=(r||0)*o;return Mn.createElement(Kf,null,e.map((s,l)=>{let a=s.endTime-s.startTime,c=a/o*100,p=0;t>=s.endTime?p=100:t>s.startTime&&(p=(t-s.startTime)/a*100);let u=0;i>=s.endTime?u=100:i>s.startTime&&(u=(i-s.startTime)/a*100);let f=n===l;return Mn.createElement(Zf,{key:l,style:{width:`${c}%`,transform:f?"scaleY(2.5)":"none"}},Mn.createElement(Qf,{style:{width:`${u}%`}}),Mn.createElement(Jf,{style:{width:`${p}%`}}))}))};e1.propTypes={segments:Ht.default.arrayOf(Ht.default.shape({title:Ht.default.string.isRequired,startTime:Ht.default.number.isRequired,endTime:Ht.default.number.isRequired})).isRequired,currentTime:Ht.default.number.isRequired,duration:Ht.default.number.isRequired,buffered:Ht.default.number,hoveredIndex:Ht.default.number};var t1=Mn.memo(e1);Rt();var o1=({currentTime:e,duration:t,buffered:o,chapters:r,heatmapData:n,getChapterAtTime:i,onChange:s,onSeeking:l,adMode:a=!1})=>{let c=Oe.useRef(null),p=Oe.useRef(!1),[u,f]=Oe.useState(!1),{i18n:m}=V(),h=t>0?e/t:0,S=o||0,b=r&&r.length>0,{strokePath:k,hasHeatmap:g}=Ci({heatmapData:n,duration:t}),v=Oe.useMemo(()=>!b||!i?null:i(e),[b,i,e]),x=Oe.useCallback(C=>{if(!c.current||!t)return;let D=c.current.getBoundingClientRect(),T=Math.max(0,Math.min(1,(C-D.left)/D.width))*t;s(T)},[t,s]),L=Oe.useCallback(C=>{p.current=!0,f(!0),l&&l(!0),x(C.clientX);let D=T=>{p.current&&x(T.clientX)},_=()=>{p.current=!1,f(!1),l&&l(!1),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",_)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",_)},[x,l]),P=Oe.useCallback(C=>{C.preventDefault(),p.current=!0,f(!0),l&&l(!0);let D=C.touches[0];x(D.clientX);let _=w=>{w.preventDefault(),p.current&&w.touches[0]&&x(w.touches[0].clientX)},T=()=>{p.current=!1,f(!1),l&&l(!1),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",T)};document.addEventListener("touchmove",_,{passive:!1}),document.addEventListener("touchend",T)},[x,l]);return Oe.useEffect(()=>{let C=c.current;if(C)return C.addEventListener("touchstart",P,{passive:!1}),()=>{C.removeEventListener("touchstart",P)}},[P]),Oe.createElement(jf,{ref:c,role:"slider","aria-label":m.timeBar,"aria-valuemin":0,"aria-valuemax":Math.round(t),"aria-valuenow":Math.round(e),"aria-valuetext":Me(Math.round(e)),tabIndex:0,onMouseDown:L},b?Oe.createElement(t1,{segments:r,currentTime:e,duration:t,buffered:o,hoveredIndex:u&&v?r.findIndex(C=>C.startTime===v.startTime):-1}):Oe.createElement(Oe.Fragment,null,Oe.createElement(Wf,null),Oe.createElement(Uf,{style:{width:`${S*100}%`}}),Oe.createElement(Xf,{style:{width:`${h*100}%`,background:a?"#fc0":void 0}})),!a&&Oe.createElement(Yf,{style:{left:`${h*100}%`}}),g&&Oe.createElement(xi,{strokePath:k,currentTime:e,duration:t,isFullscreen:!1,bottomOffset:14,visible:u}),b&&u&&v&&Oe.createElement(Gf,{style:{left:`${h*100}%`}},v.title,`
`,Me(Math.round(e))))};o1.propTypes={currentTime:De.default.number.isRequired,duration:De.default.number.isRequired,buffered:De.default.number,chapters:De.default.arrayOf(De.default.shape({title:De.default.string.isRequired,startTime:De.default.number.isRequired,endTime:De.default.number.isRequired})),heatmapData:De.default.arrayOf(De.default.shape({startTime:De.default.number.isRequired,endTime:De.default.number.isRequired,value:De.default.number.isRequired})),getChapterAtTime:De.default.func,onChange:De.default.func.isRequired,onSeeking:De.default.func};var r1=Oe.memo(o1);Rt();var n1=({visible:e,live:t,currentTime:o,duration:r,buffered:n,fullscreen:i,chapters:s,heatmapData:l,getChapterAtTime:a,i18n:c,onChangeCurrentTime:p,onSeeking:u,onRequestFullscreen:f,onExitFullscreen:m,adMode:h=!1})=>jt.createElement(Vf,{$visible:e,onClick:S=>S.stopPropagation()},t===!1&&jt.createElement(jt.Fragment,null,jt.createElement(zf,null,Me(Math.round(o))," / ",Me(Math.round(r))),jt.createElement($f,{style:h?{pointerEvents:"none"}:void 0},jt.createElement(r1,{currentTime:o,duration:r,buffered:n,chapters:s,heatmapData:l,getChapterAtTime:a,onChange:p,onSeeking:u,adMode:h}))),jt.createElement(Hf,{"aria-label":i?c.exitFullscreen:c.fullscreen,onClick:i?m:f},i?jt.createElement(Ef,null):jt.createElement(Lf,null)));n1.propTypes={visible:de.default.bool.isRequired,live:de.default.bool.isRequired,currentTime:de.default.number.isRequired,duration:de.default.number.isRequired,buffered:de.default.number,fullscreen:de.default.bool.isRequired,chapters:de.default.arrayOf(de.default.shape({title:de.default.string.isRequired,startTime:de.default.number.isRequired,endTime:de.default.number.isRequired})),heatmapData:de.default.arrayOf(de.default.shape({startTime:de.default.number.isRequired,endTime:de.default.number.isRequired,value:de.default.number.isRequired})),getChapterAtTime:de.default.func,i18n:de.default.shape({exitFullscreen:de.default.string,fullscreen:de.default.string}).isRequired,onChangeCurrentTime:de.default.func.isRequired,onSeeking:de.default.func,onRequestFullscreen:de.default.func.isRequired,onExitFullscreen:de.default.func.isRequired};var i1=jt.memo(n1);var no=j(Z());import Ae from"react";var ph=ci`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`,Ba=d.div`
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
  ${({direction:e})=>e==="forward"?X`
          background: linear-gradient(to left, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%);
        `:X`
          background: linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%);
        `}
`,Da=d.div`
  display: flex;
  align-items: center;
  ${({direction:e})=>e==="backward"?"transform: rotate(180deg);":""}
  & > svg {
    width: 20px;
    height: 20px;
    animation: ${ph} 1s infinite;
    opacity: 0;
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }
`,qa=d.span`
  font-size: 12px;
  color: #ccc;
  margin-top: 4px;
`,Na=d.button`
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
`;var s1=({skipState:e,onTapLeft:t,onTapRight:o,i18n:r})=>{let n=(r==null?void 0:r.seconds)||"seconds",i=Ae.useCallback(l=>{l.stopPropagation(),t()},[t]),s=Ae.useCallback(l=>{l.stopPropagation(),o()},[o]);return Ae.createElement(Ae.Fragment,null,Ae.createElement(Na,{direction:"backward",onClick:i,"aria-label":(r==null?void 0:r.skipBackward)||"Skip backward"}),Ae.createElement(Na,{direction:"forward",onClick:s,"aria-label":(r==null?void 0:r.skipForward)||"Skip forward"}),e.visible&&e.direction==="backward"&&Ae.createElement(Ba,{direction:"backward"},Ae.createElement(Da,{direction:"backward"},Ae.createElement(Ko,null),Ae.createElement(Ko,null),Ae.createElement(Ko,null)),Ae.createElement(qa,null,e.seconds," ",n)),e.visible&&e.direction==="forward"&&Ae.createElement(Ba,{direction:"forward"},Ae.createElement(Da,{direction:"forward"},Ae.createElement(Ko,null),Ae.createElement(Ko,null),Ae.createElement(Ko,null)),Ae.createElement(qa,null,e.seconds," ",n)))};s1.propTypes={skipState:no.default.shape({direction:no.default.oneOf(["forward","backward",null]),visible:no.default.bool.isRequired,seconds:no.default.number.isRequired}).isRequired,onTapLeft:no.default.func.isRequired,onTapRight:no.default.func.isRequired,i18n:no.default.shape({seconds:no.default.string})};var a1=Ae.memo(s1);var Wt=j(Z());import z from"react";var l1=d.div`
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
`,u1=d.div`
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
`,c1=d.span`
  flex: 1;
  font-weight: 400;
`,Hi=d.button`
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
  ${({$position:e})=>e==="left"?X`
          left: 6px;
        `:X`
          right: 6px;
        `}
`,p1=d.ul`
  padding: 4px 0;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  list-style: none;
`,ji=d.li`
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
`,Wi=d.div`
  display: block;
  width: 36px;
  height: 36px;
  margin: 0 auto 5px;
  position: relative;
  top: 5px;
`,Ui=d.span`
  display: block;
  font-size: 15px;
  color: #fff;
`,Xi=d.div`
  font-size: 11px;
  color: #ccc;
  line-height: 1;
  display: block;
  margin: 6px 0 0;
  padding: 0;
  text-align: center;
`,d1=d.div`
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
`,f1=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 6px 0;
`,_r=d.li`
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
  ${({active:e})=>e&&X`
      background: rgba(180, 60, 60, 0.6);
    `}
`,Yi=d.ul`
  margin: 0;
  padding: 6px 0;
  list-style: none;
`,m1=d.div`
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
  ${({hidden:e})=>e?X`
          opacity: 0;
          pointer-events: none;
          transform: translateX(-100%);
        `:X`
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
        `}
`;var h1=[{label:"2",value:2},{label:"1.5",value:1.5},{label:"1.25",value:1.25},{label:"Normal",value:1},{label:"0.75",value:.75},{label:"0.5",value:.5},{label:"0.25",value:.25}],y1=({visible:e,qualities:t,captions:o,activeCaption:r,playbackRate:n,playbackQuality:i,onChangeSettings:s,onCaptionChange:l,onClose:a,adMode:c=!1})=>{var _;let{i18n:p}=V(),[u,f]=z.useState(null),[m,h]=z.useState(!0),[S,b]=z.useState(null);z.useEffect(()=>{if(i==null||i===0||t.length===0)return;let T=i.toString();t.find(y=>y.value===T)&&m&&b(T)},[i,t]);let k=z.useCallback(T=>{T.stopPropagation(),f(null),a()},[a]),g=z.useCallback(T=>{T.stopPropagation(),f(null)},[]),v=z.useCallback(T=>w=>{w.stopPropagation(),s({quality:{value:String(T)}}),T===0?h(!0):(h(!1),b(String(T))),f(null),a()},[s,a]),x=z.useCallback(T=>w=>{w.stopPropagation(),s({speed:{value:String(T)}}),f(null),a()},[s,a]),L=z.useCallback(T=>w=>{w.stopPropagation(),l(T),f(null),a()},[l,a]),P=z.useMemo(()=>{if(!r||!o||o.length===0)return p.off;let T=o.find(w=>w.language===r);return T?T.label:p.off},[r,o,p]),C=z.useMemo(()=>{let T=h1.find(w=>w.value===n);return T?T.label:"Normal"},[n]);z.useEffect(()=>{e&&f(null)},[e]);let D=u!==null;return z.createElement(l1,{$visible:e,onClick:T=>T.stopPropagation()},z.createElement(u1,null,D?z.createElement(Hi,{$position:"left",onClick:g,"aria-label":p.back},z.createElement(Of,null)):z.createElement(Hi,{$position:"left","aria-label":p.settings},z.createElement(En,null)),z.createElement(c1,null,D?u==="quality"?p.quality:u==="captions"?p.captions:p.speed:p.settings),z.createElement(Hi,{$position:"right",onClick:k,"aria-label":p.close},z.createElement(If,null))),z.createElement(m1,{hidden:D},z.createElement(p1,null,t.length>0&&z.createElement(ji,{onClick:()=>f("quality")},z.createElement(Wi,null,z.createElement(En,null)),z.createElement(Ui,null,p.quality),z.createElement(Xi,null,m?S?`${p.auto} (${S}p)`:p.auto:((_=t.find(T=>T.value===S))==null?void 0:_.label)||S)),!c&&z.createElement(ji,{onClick:()=>f("speed")},z.createElement(Wi,null,z.createElement(Mf,null)),z.createElement(Ui,null,p.speed),z.createElement(Xi,null,C)),o&&o.length>0&&z.createElement(ji,{onClick:()=>f("captions")},z.createElement(Wi,null,z.createElement(Af,null)),z.createElement(Ui,null,p.captions),z.createElement(Xi,null,P)))),z.createElement(d1,{$visible:D},z.createElement(f1,null,u==="quality"&&z.createElement(Yi,null,t.map(T=>z.createElement(_r,{key:T.value,active:!m&&T.value===S,onClick:v(T.value)},T.label)),z.createElement(_r,{active:m,onClick:v(0)},p.auto)),u==="speed"&&z.createElement(Yi,null,h1.map(T=>z.createElement(_r,{key:T.value,active:T.value===n,onClick:x(T.value)},T.label))),u==="captions"&&z.createElement(Yi,null,z.createElement(_r,{active:r===null,onClick:L(null)},p.off),(o||[]).map(T=>z.createElement(_r,{key:T.language,active:r===T.language,onClick:L(T.language)},T.label))))))};y1.propTypes={visible:Wt.default.bool.isRequired,qualities:Wt.default.array.isRequired,captions:Wt.default.array,activeCaption:Wt.default.string,playbackRate:Wt.default.number.isRequired,playbackQuality:Wt.default.number,onChangeSettings:Wt.default.func.isRequired,onCaptionChange:Wt.default.func,onClose:Wt.default.func.isRequired};var g1=z.memo(y1);import{useCallback as In,useEffect as Gi,useRef as dh,useState as fh}from"react";var mh=3e3;function Fa({hasResource:e,loading:t,prevented:o,paused:r,ended:n,waiting:i,seeking:s}){let[l,a]=fh(!0),c=dh(null),p=he(),u=!e||t||o||r||n||i||s;Gi(()=>{p({type:"hiding",payload:!l})},[l,p]);let f=In(()=>{clearTimeout(c.current),c.current=setTimeout(()=>{a(!1)},mh)},[]),m=In(()=>{clearTimeout(c.current)},[]),h=In(()=>{a(k=>{let g=!k;return g&&!u&&f(),g})},[u,f]),S=In(()=>{a(!0),u||f()},[u,f]),b=In(()=>{u||(a(!1),m())},[u,m]);return Gi(()=>{u?(a(!0),m()):l&&f()},[u,l,f,m]),Gi(()=>{!s&&!r&&!n&&l&&f()},[s,r,n,l,f]),Gi(()=>()=>{clearTimeout(c.current)},[]),{controlsVisible:l,toggleControls:h,showControls:S,hideControls:b}}import{useCallback as _a,useEffect as hh,useRef as Jo,useState as yh}from"react";var b1=300,Ki=10,gh=1e3;function Va({currentTime:e,duration:t,changeCurrentTime:o,showControls:r}){let[n,i]=yh({direction:null,visible:!1,seconds:0}),s=Jo(null),l=Jo(null),a=Jo(0),c=Jo(0),p=Jo(null),u=Jo(e);u.current=e;let f=Jo(t);f.current=t;let m=_a(b=>{let k=f.current,g=u.current;if(isNaN(k)||k<=0)return;let v=b==="forward"?Ki:-Ki,x=Math.max(0,Math.min(k,g+v));o(x),i(L=>({direction:b,visible:!0,seconds:L.direction===b&&L.visible?L.seconds+Ki:Ki})),clearTimeout(p.current),p.current=setTimeout(()=>{i({direction:null,visible:!1,seconds:0})},gh)},[o]),h=_a(()=>{a.current+=1,a.current===1?s.current=setTimeout(()=>{a.current=0,r&&r()},b1):(clearTimeout(s.current),a.current=0,m("backward"))},[m,r]),S=_a(()=>{c.current+=1,c.current===1?l.current=setTimeout(()=>{c.current=0,r&&r()},b1):(clearTimeout(l.current),c.current=0,m("forward"))},[m,r]);return hh(()=>()=>{clearTimeout(s.current),clearTimeout(l.current),clearTimeout(p.current)},[]),{skipState:n,handleTapLeft:h,handleTapRight:S}}var $a=fe.forwardRef(({videoRef:e,playerRef:t,live:o=!1,hasResource:r=!1,hasAudio:n,prevented:i,loading:s,paused:l,ended:a,seeking:c,waiting:p,duration:u,buffered:f=null,currentTime:m,muted:h,volume:S,pictureInPictureEnabled:b,pip:k,fullscreen:g,qualities:v,spriteVTTFile:x,chapters:L,heatmapData:P,fullHDQualityBreak:C,playbackRate:D,playbackQuality:_,loop:T,poster:w,captions:y,activeCaption:M,onCaptionChange:E,onPlayClick:R,onPauseClick:F,onTogglePlay:H,changePlaybackRate:W,changePlayBackQuality:O,changeVolume:A,onMutedClick:ee,changeCurrentTime:$,requestPictureInPicture:ae,exitPictureInPicture:me,requestFullscreen:ie,exitFullscreen:xe,onSeeking:Ce,onLoopClick:qe,onPreventedClick:Ne,onPrevious:ct,onNext:Qe,showNavButtons:we,ads:Lt=null,kernelMsg:rt=null},io)=>{let Et=he(),{i18n:pt}=V(),Xt=fe.useRef(null),{controlsVisible:xt,toggleControls:er,showControls:so,hideControls:Yt}=Fa({hasResource:r,loading:s,prevented:i,paused:l,ended:a,waiting:p,seeking:c}),{skipState:Po,handleTapLeft:Mt,handleTapRight:To}=Va({currentTime:m,duration:u,changeCurrentTime:$,showControls:er}),{contextMenuItems:zr,contextMenuPosition:Hr,handleContextMenu:jr}=qi({fullscreen:g,contextMenuRef:Xt,pip:k,loop:T,pictureInPictureEnabled:b,requestPictureInPicture:ae,exitPictureInPicture:me,onLoopClick:qe}),{segments:dt,getChapterAtTime:tr}=So({chapters:L,duration:u}),{cues:or,captionStyle:Lo}=$i({captions:y,activeCaption:M}),{isAdActive:Je,hasSkipTimer:Wr,canSkip:Eo,skipCountdown:Mo,adProgress:nt,onSkipClick:ao,onAdClick:rr}=Fr({ads:Lt,currentTime:m,duration:u,ended:a,onPauseClick:F});fe.useEffect(()=>{Et({videoRef:e,playerRef:t})},[e,t,Et]),fe.useImperativeHandle(io,()=>({showControls:so,hideControls:Yt}),[so,Yt]);let nr=fe.useCallback(({quality:ir,speed:K})=>{var pe;if(K&&W(Number((pe=K.value)!=null?pe:1)),ir){let ye=Number(ir.value);O(Number.isNaN(ye)?0:ye)}},[W,O]),[lo,Gt]=fe.useState(!1),$e=fe.useCallback(ir=>{ir.stopPropagation(),Gt(!0)},[]),It=fe.useCallback(()=>{Gt(!1)},[]),ft=fe.useCallback(()=>{l||a?R():F()},[l,a,R,F]),Ot=(p||c&&!x||s)&&!l&&!a;return fe.createElement(Sf,{onContextMenu:jr,onClick:er},fe.createElement(ln,{hasResource:r,prevented:i,paused:l,muted:h,currentTime:m,onClick:Ne}),w&&fe.createElement(pn,{style:{opacity:m<=0||a?1:0}},fe.createElement(dn,{style:{backgroundImage:`url(${w})`}})),fe.createElement(Ln,{ref:Xt,fullscreen:g,position:Hr,menuItems:zr}),x&&fe.createElement(Cn,{spriteVTTFile:x,duration:u,seekTime:m,visible:c}),fe.createElement(vf,{$visible:xt&&r&&!a&&!i}),!Je&&fe.createElement(a1,{skipState:Po,onTapLeft:Mt,onTapRight:To,i18n:pt}),M&&or.length>0&&fe.createElement(_i,{cues:or,currentTime:m,captionStyle:Lo,isFullscreen:g,controlsVisible:l||a||s||p}),fe.createElement(Bf,{visible:xt&&!lo,captions:y,activeCaption:M,onCaptionChange:E,onOpenSettings:$e,settingsLabel:pt.settings,captionsLabel:pt.captions,hideSettings:Je&&v.length===0&&(!y||y.length===0)}),fe.createElement(g1,{visible:lo,qualities:v,captions:y,activeCaption:M,playbackRate:D,playbackQuality:_,onChangeSettings:nr,onCaptionChange:E,onClose:It,adMode:Je}),fe.createElement(_f,{visible:xt&&!lo,isLoading:Ot,paused:l,ended:a,onPlayPause:ft,onPrevious:ct,onNext:Qe,showNavButtons:we,i18n:pt}),fe.createElement(i1,{visible:xt&&!lo,live:o,currentTime:m,duration:u,buffered:f,fullscreen:g,chapters:Je?[]:dt,heatmapData:Je?[]:P,getChapterAtTime:tr,i18n:pt,onChangeCurrentTime:Je?()=>{}:$,onSeeking:Je?()=>{}:Ce,onRequestFullscreen:ie,onExitFullscreen:xe,adMode:Je}),Je&&fe.createElement(zi,{ads:Lt,canSkip:Eo,skipCountdown:Mo,hasSkipTimer:Wr,adProgress:nt,onSkipClick:ao,onAdClick:rr,hiding:!xt,poster:w,menuOpen:!1,fullscreen:!1}),fe.createElement(cn,{hasResource:r,kernelMsg:rt}))});$a.displayName="MobilePlayerSkin";$a.propTypes={spriteVTTFile:N.default.string,videoRef:N.default.oneOfType([N.default.func,N.default.shape({current:N.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:N.default.oneOfType([N.default.func,N.default.shape({current:N.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:N.default.bool,waiting:N.default.bool,live:N.default.bool.isRequired,hasResource:N.default.bool.isRequired,loading:N.default.bool.isRequired,paused:N.default.bool.isRequired,ended:N.default.bool.isRequired,seeking:N.default.bool.isRequired,onPlayClick:N.default.func.isRequired,onPauseClick:N.default.func.isRequired,onTogglePlay:N.default.func.isRequired,duration:N.default.number.isRequired,buffered:N.default.number.isRequired||null,currentTime:N.default.number.isRequired,changeCurrentTime:N.default.func.isRequired,muted:N.default.bool.isRequired,volume:N.default.number.isRequired,changeVolume:N.default.func.isRequired,onMutedClick:N.default.func.isRequired,changePlaybackRate:N.default.func.isRequired,changePlayBackQuality:N.default.func.isRequired,pictureInPictureEnabled:N.default.bool.isRequired,pip:N.default.bool.isRequired,requestPictureInPicture:N.default.func.isRequired,exitPictureInPicture:N.default.func.isRequired,fullscreen:N.default.bool.isRequired,qualities:N.default.arrayOf(N.default.shape({label:N.default.string.isRequired,value:N.default.string.isRequired,isFullHD:N.default.bool.isRequired}).isRequired).isRequired,playbackRate:N.default.number.isRequired,loop:N.default.bool.isRequired,requestFullscreen:N.default.func.isRequired,exitFullscreen:N.default.func.isRequired,onLoopClick:N.default.func.isRequired,onPreventedClick:N.default.func.isRequired,onPrevious:N.default.func,onNext:N.default.func,showNavButtons:N.default.bool,kernelMsg:N.default.oneOfType([N.default.shape({type:N.default.string.isRequired,detail:N.default.string.isRequired}),N.default.oneOf([void 0])]),fullHDQualityBreak:N.default.number,poster:N.default.string.isRequired,hasAudio:N.default.bool,captions:N.default.array,activeCaption:N.default.string,onCaptionChange:N.default.func};var S1=fe.memo($a,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.onTogglePlay===t.onTogglePlay&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.changePlayBackQuality===t.changePlayBackQuality&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onPreventedClick===t.onPreventedClick&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.onCaptionChange===t.onCaptionChange&&e.ads===t.ads);Re();var za=Zi.forwardRef((e,t)=>{let{skinMode:o,...r}=e;return o==="mobile"||o!=="desktop"&&Vn?Zi.createElement(S1,{ref:t,...r}):Zi.createElement(bf,{ref:t,...r})});za.displayName="PlayerSkin";za.propTypes={spriteVTTFile:q.default.string,chapters:q.default.arrayOf(q.default.shape({title:q.default.string.isRequired,startTime:q.default.number.isRequired})),heatmapData:q.default.arrayOf(q.default.shape({startTime:q.default.number.isRequired,endTime:q.default.number.isRequired,value:q.default.number.isRequired})),videoRef:q.default.oneOfType([q.default.func,q.default.shape({current:q.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:q.default.oneOfType([q.default.func,q.default.shape({current:q.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:q.default.bool,waiting:q.default.bool,live:q.default.bool.isRequired,hasResource:q.default.bool.isRequired,loading:q.default.bool.isRequired,paused:q.default.bool.isRequired,ended:q.default.bool.isRequired,seeking:q.default.bool.isRequired,onPlayClick:q.default.func.isRequired,onPauseClick:q.default.func.isRequired,duration:q.default.number.isRequired,buffered:q.default.number.isRequired||null,currentTime:q.default.number.isRequired,changeCurrentTime:q.default.func.isRequired,muted:q.default.bool.isRequired,volume:q.default.number.isRequired,changeVolume:q.default.func.isRequired,onMutedClick:q.default.func.isRequired,changePlaybackRate:q.default.func.isRequired,pictureInPictureEnabled:q.default.bool.isRequired,pip:q.default.bool.isRequired,requestPictureInPicture:q.default.func.isRequired,exitPictureInPicture:q.default.func.isRequired,fullscreen:q.default.bool.isRequired,qualities:q.default.arrayOf(q.default.shape({label:q.default.string.isRequired,value:q.default.string.isRequired,isFullHD:q.default.bool.isRequired}).isRequired).isRequired,playbackRate:q.default.number.isRequired,loop:q.default.bool.isRequired,requestFullscreen:q.default.func.isRequired,exitFullscreen:q.default.func.isRequired,onLoopClick:q.default.func.isRequired,onPreventedClick:q.default.func.isRequired,kernelMsg:q.default.oneOfType([q.default.shape({type:q.default.string.isRequired,detail:q.default.string.isRequired}),q.default.oneOf([void 0])]),fullHDQualityBreak:q.default.number,poster:q.default.string.isRequired,skinMode:q.default.oneOf(["auto","mobile","desktop"])};var v1=Zi.memo(za,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.skinMode===t.skinMode&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.onTogglePlay===t.onTogglePlay&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onCaptionChange===t.onCaptionChange&&e.onPreventedClick===t.onPreventedClick&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);import Wa from"react";var Ha=["i18n","captionDragging","contextMenuVisible","controlsHovering","hiding","menuVisible","subMenuVisible","timeSliding","volumeSliding","videoRef","playerRef"];function ja(e,t){try{if(!e||!t)throw new Error("Reducer params has not been provided!");if(typeof t=="function"){let o=t(e);return!o||typeof o!="object"?e:ja(e,o)}if("type"in t){let{type:o,payload:r}=t;if(Ha.includes(o)===!1)throw new Error(`Invalid type "${o}" in action payload!`);return e[o]===r?e:{...e,[o]:r}}else if(typeof t=="object"){if(Object.keys(t).length===0)throw new Error("Reducer action object is empty!");let o=!1,r={...e};for(let n in t){let i=t[n];if(Ha.includes(n)===!1)throw new Error(`Invalid type "${n}" in action object!`);e[n]!==i&&(o=!0,r={...r,[n]:i})}return o?r:e}return e}catch(o){return console.error("Error in AppReducer: ",o),e}}Re();var bh={en:po,es:fo},Qi=({children:e,language:t})=>{let[o,r]=Wa.useReducer(ja,{...js,i18n:bh[t]}),n=Wa.useMemo(()=>({state:o,dispatch:r}),[o,r]);return Wa.createElement(Er.Provider,{value:n},e)};Re();import St from"react";import ko from"react";var Sh=({prevented:e,muted:t,videoRef:o,src:r,updateState:n})=>{let i=ko.useRef(.8),s=ko.useRef(!1),l=ko.useCallback(u=>{if(!o.current||s.current)return;let f=u.target.muted;u.target.volume===0&&(f=!0),n({volume:u.target.volume,muted:f})},[o,n]),a=ko.useCallback(()=>{if(!o.current)return;let u=o.current;if(!u)return;let f=!u.muted;if(s.current=!0,f)u.volume>0&&(i.current=u.volume),u.muted=!0,n({volume:u.volume,muted:!0});else{let m=i.current||.8;u.muted=!1,u.volume=m,n({volume:m,muted:!1})}setTimeout(()=>{s.current=!1},0)},[o,n]),c=ko.useCallback(u=>{if(!o.current)return;let f=o.current,m=u===0;f&&(f.volume=u),u!==0&&f.muted===!0&&(m=!1,f.muted=!1),u>0&&(i.current=u),n({volume:u,muted:m})},[o,n]),p=ko.useCallback(u=>{if(!o.current)return;let m=o.current.volume,h=u(m);c(h)},[o,c]);return ko.useEffect(()=>{if(!o.current)return()=>{};let u=o.current;return u?(u.addEventListener("volumechange",l),()=>{u.removeEventListener("volumechange",l)}):()=>{}},[l,o]),ko.useEffect(()=>{if(!o.current)return;let u=o.current;u&&(t?u.muted=!0:u.muted=!1)},[r,o,t]),{onMutedClick:a,changeVolume:c,updateVolumeWithCallback:p}},Ji=Sh;import On from"react";var vh=({updateState:e,videoRef:t,playerRef:o})=>{let r=On.useCallback(()=>{let l=o==null?void 0:o.current,a=t==null?void 0:t.current;if(!l){console.error("useVideoFullscreen: the player element is not ready");return}if(l.requestFullscreen){let c=l.requestFullscreen();c&&c.catch&&c.catch(()=>{})}else l.msRequestFullscreen?l.msRequestFullscreen():l.webkitRequestFullscreen?l.webkitRequestFullscreen():a&&a.webkitEnterFullScreen&&a.webkitEnterFullScreen()},[t,o]),n=On.useCallback(()=>{document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},[]),i=On.useCallback(()=>{let l=o==null?void 0:o.current;(document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement)===l?n():r()},[o,n,r]),s=On.useCallback(()=>{let l=o==null?void 0:o.current,a=document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement;e({fullscreen:!!l&&a===l})},[e,o]);return On.useEffect(()=>(document.addEventListener("fullscreenchange",s),document.addEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=s,()=>{document.removeEventListener("fullscreenchange",s),document.removeEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=null}),[s]),{requestFullscreen:r,exitFullscreen:n,requestToggleFullscreen:i}},x1=vh;var C1=(e,t)=>({...e,seeking:t,isEnded:!1,playing:t?e.playing:!0});var xh=({ref:e,playerRef:t,url:o,player:r,fullHDQualityBreak:n,sources:i,prevented:s,muted:l,updateState:a,ads:c})=>{let{i18n:p}=V(),u=St.useRef(null),f=St.useRef(null),m=St.useCallback(({fullscreen:w})=>{a(y=>({...y,isFullScreen:w}))},[a]),{requestFullscreen:h,exitFullscreen:S,requestToggleFullscreen:b}=x1({updateState:m,videoRef:u,playerRef:t}),k=St.useMemo(()=>i.length>0?i.map(w=>({label:qr({label:"quality",value:w.resolution.toString(),i18n:p}),value:w.resolution.toString(),isFullHD:n!==void 0&&w.resolution>=n})):[],[i,n,p]),{onMutedClick:g,changeVolume:v,updateVolumeWithCallback:x}=Ji({prevented:s,muted:l,videoRef:u,src:o,updateState:({muted:w,volume:y})=>a(M=>({...M,isMuted:w!=null?w:!1,volume:y!=null?y:0}))}),L=St.useCallback(w=>{r&&(a(y=>({...y,played:w})),r.seekTo(w))},[r,a]),P=St.useCallback(w=>{if(!r)return;let y=r.getCurrentTime()||0,M=r.getDuration()||0,E=w(y,M);L(E)},[r,L]),C=St.useRef(g);C.current=g;let D=St.useRef(L);D.current=L;let _=St.useMemo(()=>({onPlayClick:()=>a(w=>({...w,playing:!0})),onPauseClick:()=>a(w=>({...w,playing:!1})),onTogglePlay:()=>a(w=>({...w,playing:!w.playing})),changePlaybackRate:w=>a(y=>({...y,playbackRate:w})),changePlayBackQuality:w=>{a(y=>({...y,playbackQuality:w}))},requestPictureInPicture:()=>a(w=>({...w,isPIP:!0})),exitPictureInPicture:()=>a(w=>({...w,isPIP:!1})),onSeeking:w=>a(y=>C1(y,w)),onMutedClick:()=>C.current(),onLoopClick:()=>a(w=>({...w,loop:!w.loop})),onCaptionChange:w=>a(y=>({...y,activeCaption:w})),onPreventedClick:()=>a(w=>({...w,isMuted:!1,volume:1})),changeCurrentTime:w=>D.current(w)}),[a]),T=St.useCallback(w=>{var E;w.preventDefault(),w.stopPropagation();let y=fi[w.which||w.keyCode]||mi[w.key];if(!(!r||c!=null&&(y==="ARROW_LEFT_KEY"||y==="ARROW_RIGHT_KEY")))switch((E=f.current)==null||E.showControls(),y){case"SPACE_KEY":{a(R=>({...R,playing:!R.playing}));break}case"F_KEY":{b();break}case"MUTE_KEY":{g();break}case"ARROW_LEFT_KEY":{P(R=>{let F=R-5;return F<0?0:F});break}case"ARROW_RIGHT_KEY":{P((R,F)=>{let H=R+5;return H>=F?F:H});break}case"ARROW_UP_KEY":{x(R=>{let F=R+.1;return F>=1?1:F});break}case"ARROW_DOWN_KEY":{x(R=>{let F=R-.1;return F<0?0:F});break}default:break}},[r,c,a,b,g,P,x]);return St.useImperativeHandle(e,()=>({handleKeyDown:T})),St.useEffect(()=>{var w;u.current=(w=r==null?void 0:r.getPlayer())!=null?w:null},[r]),{playerSkinRef:f,videoRef:u,qualities:k,memorizedProps:_,handleKeyDown:T,requestFullscreen:h,exitFullscreen:S,changeVolume:v}},w1=xh;var Ch={en:po,es:fo},Ua=es.forwardRef(({url:e,sources:t,playerRef:o,player:r,hasAudio:n,fullHDQualityBreak:i,live:s=!1,language:l=Object.keys(Ch)[0],hasResource:a=!1,buffered:c=null,kernelMsg:p=null,updateState:u,waiting:f=!1,prevented:m=!1,muted:h=!1,...S},b)=>{let{playerSkinRef:k,videoRef:g,qualities:v,memorizedProps:x,handleKeyDown:L,requestFullscreen:P,exitFullscreen:C,changeVolume:D}=w1({ref:b,playerRef:o,url:e,player:r,fullHDQualityBreak:i,sources:t,prevented:m,muted:h,updateState:u,ads:S.ads||null});return es.createElement(Qi,{language:l},es.createElement(v1,{ref:k,videoRef:g,playerRef:o,qualities:v,hasAudio:n,handleKeyDown:L,requestFullscreen:P,exitFullscreen:C,changeVolume:D,fullHDQualityBreak:i,live:s,hasResource:a,buffered:c,kernelMsg:p,prevented:m,waiting:f,muted:h,...S,...x}))});Ua.displayName="PlayerSkinWrapper";Ua.propTypes={playerRef:J.default.oneOfType([J.default.func,J.default.shape({current:J.default.instanceOf(HTMLDivElement)})]).isRequired,player:J.default.instanceOf(ht),live:J.default.bool,prevented:J.default.bool,waiting:J.default.bool,hasResource:J.default.bool.isRequired,hasAudio:J.default.bool.isRequired,loading:J.default.bool.isRequired,paused:J.default.bool.isRequired,ended:J.default.bool.isRequired,seeking:J.default.bool.isRequired,duration:J.default.number.isRequired,buffered:J.default.number.isRequired||null,currentTime:J.default.number.isRequired,muted:J.default.bool.isRequired,volume:J.default.number.isRequired,playbackRate:J.default.number.isRequired,pictureInPictureEnabled:J.default.bool.isRequired,fullHDQualityBreak:J.default.number,pip:J.default.bool.isRequired,fullscreen:J.default.bool.isRequired,kernelMsg:J.default.oneOfType([J.default.shape({type:J.default.string.isRequired,detail:J.default.string.isRequired}),J.default.oneOf([void 0])]),url:J.default.string,sources:J.default.arrayOf(J.default.shape({src:J.default.string.isRequired,resolution:J.default.number.isRequired}).isRequired).isRequired,loop:J.default.bool.isRequired};var k1=es.memo(Ua,(e,t)=>e.playerRef===t.playerRef&&e.player===t.player&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.kernelMsg===t.kernelMsg&&e.url===t.url&&e.sources===t.sources&&e.chapters===t.chapters&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.poster===t.poster&&e.skinMode===t.skinMode);var Ut={kernelError:null,seeking:!1,seek:0,played:0,loaded:0,duration:0,isFullScreen:!1,isEnded:!1,isPIP:!1,isLoading:!0,isBuffering:!1,volume:.8,playbackRate:1,playbackQuality:null,videoUrl:null,hasAudio:!0,loop:!1,playing:!1,isMuted:!1,activeCaption:null};import P1 from"react";var T1=P1.forwardRef(({children:e,style:t,...o},r)=>P1.createElement(qt,{ref:r,style:t,...o},e));T1.displayName="MediaPlayerWrapper";var L1=T1;Rt();import vt from"react";Re();var E1=async()=>{let e="https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js";try{let o=lr("internet_speed");if(o){let f=parseFloat(o);if(!isNaN(f)&&f>0)return f}let r=new AbortController,n=setTimeout(()=>r.abort(),1e4),i=performance.now(),l=await(await fetch(e,{signal:r.signal,cache:"no-store"})).blob();clearTimeout(n);let a=performance.now(),c=l.size*8||1638400,p=(a-i)/1e3,u=c/(p*1024*1024);return ur("internet_speed",u.toString(),7),u}catch(o){return o.name!=="AbortError"&&console.error("An error occurred while measuring the network speed: ",o),null}},M1=(e,t)=>{let o=[{quality:144,minSpeed:.3},{quality:270,minSpeed:.5},{quality:360,minSpeed:.7},{quality:480,minSpeed:1},{quality:720,minSpeed:2.5},{quality:1080,minSpeed:5},{quality:2160,minSpeed:20}],r;for(let n=o.length-1;n>=0;n--){let i=o[n];if(e>=i.minSpeed){r=i.quality;break}}if(r&&t.includes(r))return r;if(r)for(let n=o.length-1;n>=0;n--){let i=o[n];if(i.quality<=r&&t.includes(i.quality))return i.quality}for(let n=0;n<o.length;n++){let i=o[n];if(t.includes(i.quality))return i.quality}return t.length>0?t[0]:void 0};var wh=({onBuffer:e,onBufferEnd:t,onDisablePIP:o,onDuration:r,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:c,onPlayBackRateChange:p,onProgress:u,onReady:f,onSeek:m,onStart:h,onLoaded:S,onMount:b,updateState:k,playerState:g,extraProps:{url:v,sources:x,fullHDQualityBreak:L,prevented:P}})=>{let[C,D]=vt.useState(null),_=Ho(x),T=vt.useMemo(()=>_.length>0?Yr(_,"resolution"):null,[_]),w=vt.useRef(k);w.current=k;let y=vt.useRef({onBuffer:e,onBufferEnd:t,onDisablePIP:o,onDuration:r,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:c,onPlayBackRateChange:p,onProgress:u,onReady:f,onSeek:m,onStart:h,onLoaded:S,onMount:b});y.current={onBuffer:e,onBufferEnd:t,onDisablePIP:o,onDuration:r,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:c,onPlayBackRateChange:p,onProgress:u,onReady:f,onSeek:m,onStart:h,onLoaded:S,onMount:b};let M=vt.useRef(P);M.current=P;let E=vt.useRef(g.seeking);E.current=g.seeking,vt.useEffect(()=>{if(T&&L!==void 0&&!(L in T)){let O=Object.keys(T).join(", ");console.error(`PlayerStack: Invalid fullHDQualityBreak value "${L}". Accepted resolutions are: ${O}. Falling back to highest available.`)}},[T,L]),vt.useEffect(()=>{if(!T){D(null);return}let O=!1;return(async()=>{var A,ee;try{let $=await E1();if(O)return;let ae=Object.keys(T).map(Number),me=M1($||0,ae),ie=_[0];$!==null&&me?(D((ee=(A=T[me])==null?void 0:A.src)!=null?ee:ie.src),R.current=me,w.current(xe=>({...xe,playbackQuality:me}))):(D(ie.src),R.current=ie.resolution,w.current(xe=>({...xe,playbackQuality:ie.resolution})))}catch{if(O)return;let $=_[0];D($.src),R.current=$.resolution,w.current(ae=>({...ae,playbackQuality:$.resolution}))}})(),()=>{O=!0}},[_]);let R=vt.useRef(null),{playbackQuality:F}=g;vt.useEffect(()=>{F===0&&R.current!==null&&w.current(O=>({...O,playbackQuality:R.current}))},[F]);let H=vt.useMemo(()=>{var O,A;return T?F==null||F===0?C!=null?C:_[0].src:(A=(O=T[F])==null?void 0:O.src)!=null?A:_[0].src:v},[v,_,T,F,C]);return{...vt.useMemo(()=>({onBuffer:(...O)=>{y.current.onBuffer&&y.current.onBuffer(...O),w.current(A=>({...A,isBuffering:!0}))},onBufferEnd:(...O)=>{y.current.onBufferEnd&&y.current.onBufferEnd(...O),w.current(A=>({...A,isBuffering:!1}))},onDisablePIP:O=>{y.current.onDisablePIP&&y.current.onDisablePIP(O),w.current(A=>({...A,isPIP:!1}))},onDuration:O=>{y.current.onDuration&&y.current.onDuration(O),w.current(A=>({...A,duration:O}))},onEnablePIP:O=>{y.current.onEnablePIP&&y.current.onEnablePIP(O),w.current(A=>({...A,isPIP:!0}))},onEnded:O=>{y.current.onEnded&&y.current.onEnded(O),w.current(A=>({...A,isEnded:!0}))},onError:(O,A,ee,$)=>{y.current.onError&&y.current.onError(O,A,ee,$);let ae=["networkError"],me=["bufferStalledError","bufferNudgeOnStall","bufferAppendError","fragParsingError"];ae.includes(A==null?void 0:A.type)||(A==null?void 0:A.type)==="mediaError"&&me.includes(A==null?void 0:A.details)||w.current(xe=>{var Ce;return{...xe,kernelError:A?{type:(A==null?void 0:A.type)||"UnknownError",detail:((Ce=A==null?void 0:A.error)==null?void 0:Ce.message)||"Something was wrong with the playback. Please try again."}:null,isLoading:!1,playing:!1}})},onPause:O=>{y.current.onPause&&y.current.onPause(O),w.current(A=>({...A,playing:!1}))},onPlay:O=>{y.current.onPlay&&y.current.onPlay(O),w.current(A=>{var ae;let ee=(ae=O==null?void 0:O.hasAudio)!=null?ae:!1,$=M.current?!0:ee||A.hasAudio||!1;return{...A,playing:!0,isEnded:!1,hasAudio:$}})},onPlayBackQualityChange:O=>{y.current.onPlayBackQualityChange&&y.current.onPlayBackQualityChange(O),w.current(A=>({...A,playbackQuality:O}))},onPlayBackRateChange:O=>{y.current.onPlayBackRateChange&&y.current.onPlayBackRateChange(O),w.current(A=>({...A,playbackRate:O}))},onProgress:O=>{y.current.onProgress&&y.current.onProgress(O),E.current||w.current(A=>({...A,played:O.playedSeconds,loaded:O.loaded}))},onReady:O=>{y.current.onReady&&y.current.onReady(O),w.current(A=>({...A,isLoading:!1}))},onSeek:O=>{y.current.onSeek&&y.current.onSeek(O),w.current(A=>({...A,seek:O}))},onStart:()=>{y.current.onStart&&y.current.onStart()},onLoaded:(...O)=>{y.current.onLoaded&&y.current.onLoaded(...O)},onMount:(...O)=>{y.current.onMount&&y.current.onMount(...O)}}),[]),videoUrl:H!=null?H:C}},ts=wh;var I1=d.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  margin: auto;
`;var A1=Ee.forwardRef((e,t)=>{var g;let[o,r]=Ee.useState({width:e.width||"100%",height:e.height||"100%"}),[n,i]=Ee.useState({...Ut,isPIP:e.pip,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(g=e.volume)!=null?g:Ut.volume}),[s,l]=Ee.useState({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume});(e.pip!==s.pip||e.playbackRate!==s.playbackRate||e.loop!==s.loop||e.playing!==s.playing||e.muted!==s.muted||e.volume!==s.volume)&&(l({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume}),i(v=>{var L,P;let x={...v};return e.pip!==s.pip&&(x.isPIP=e.pip),e.playbackRate!==s.playbackRate&&(x.playbackRate=e.playbackRate),e.loop!==s.loop&&(x.loop=e.loop),e.playing!==s.playing&&(x.playing=e.playing),e.muted!==s.muted&&(x.isMuted=e.muted,x.volume=e.muted?0:(L=e.volume)!=null?L:Ut.volume),e.volume!==s.volume&&!e.muted&&(x.volume=(P=e.volume)!=null?P:Ut.volume),x}));let a=Ee.useRef(null),c=Ee.useRef(null),p=Ee.useRef(e.url),u=Ee.useRef(e.sources);Ee.useEffect(()=>{let v=p.current!==e.url,x=!(0,O1.default)(u.current,e.sources);(v||x)&&(p.current=e.url,u.current=e.sources,r({width:e.width||"100%",height:e.height||"100%"}),i(L=>({...L,isLoading:!0,isBuffering:!1,duration:0,played:0,loaded:0,seek:0,isEnded:!1,kernelError:null,seeking:!1})))},[e.url,e.sources,e.width,e.height]);let f=Ee.useRef(e.ads);Ee.useEffect(()=>{let v=f.current!==null&&f.current!==void 0,x=e.ads!==null&&e.ads!==void 0;f.current=e.ads,v&&!x&&i(L=>({...L,playing:!0}))},[e.ads]);let m=Ee.useCallback(v=>{var x,L;(L=(x=a.current)==null?void 0:x.handleKeyDown)==null||L.call(x,v)},[]),h=Ee.useMemo(()=>e.prevented||e.playing&&e.muted,[e.muted,e.playing,e.prevented]);Ee.useEffect(()=>{if(e.player&&n.isLoading===!1){let x=e.player.getPlayer(),L=()=>{let D=x.offsetWidth,_=x.offsetHeight;D>0&&_>0?r({width:`${D}px`,height:`${_}px`}):r({width:e.width||"100%",height:e.height||"100%"})},P=setTimeout(L,500),C=()=>L();return x.addEventListener("loadedmetadata",C),()=>{clearTimeout(P),x.removeEventListener("loadedmetadata",C)}}},[e.player,e.width,e.height,n.isLoading]);let{videoUrl:S,...b}=ts({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDisablePIP:e.onDisablePIP,onDuration:e.onDuration,onEnablePIP:e.onEnablePIP,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackQualityChange:e.onPlayBackQualityChange,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:i,playerState:n,extraProps:{url:e.url,sources:e.sources,fullHDQualityBreak:e.fullHDQualityBreak,prevented:h}}),k=Ee.useMemo(()=>({attributes:e.config.attributes,tracks:e.config.tracks,forceVideo:e.config.forceVideo,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceLoad:e.config.forceLoad,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS,loopOnEnded:e.config.loopOnEnded}),[e.config]);return Ee.createElement(L1,{tabIndex:0,role:"application",dir:"ltr",ref:c,onKeyDown:m,style:o},Ee.createElement(I1,null,S&&Ee.createElement(ht,{ref:t,activePlayer:e.activePlayer,loop:n.loop,muted:n.isMuted,pip:n.isPIP,playbackRate:n.playbackRate,playbackQuality:n.playbackQuality,playsinline:e.playsinline,progressInterval:e.progressInterval,stopOnUnmount:e.stopOnUnmount,volume:n.volume,url:S,width:e.width,height:e.height,playing:n.playing,activeCaption:n.activeCaption,viewType:"video",config:k,disableDeferredLoading:e.disableDeferredLoading,progressFrequency:e.progressFrequency,...b})),Ee.createElement(k1,{ref:a,playerRef:c,url:S,sources:e.sources,hasAudio:n.hasAudio,spriteVTTFile:e.spriteVTTFile,chapters:e.chapters,captions:e.captions,heatmapData:e.heatmapData,ads:e.ads,hasResource:typeof S=="string"||e.sources.length>0,kernelMsg:n.kernelError,loading:n.isLoading,prevented:h,muted:n.isMuted,paused:n.playing===!1,live:e.live,buffered:n.loaded,ended:n.isEnded,seeking:n.seeking,waiting:n.isBuffering||e.waiting,duration:n.duration,currentTime:n.played,volume:n.volume,playbackRate:n.playbackRate,playbackQuality:n.playbackQuality,pictureInPictureEnabled:!0,pip:n.isPIP,loop:n.loop,activeCaption:n.activeCaption,fullscreen:n.isFullScreen,fullHDQualityBreak:e.fullHDQualityBreak,language:e.language,poster:e.poster,updateState:i,player:e.player,skinMode:e.skinMode,onPrevious:e.onPrevious,onNext:e.onNext,showNavButtons:e.showNavButtons}))});A1.displayName="MediaPlayerSkin";var R1=Ee.memo(A1,(e,t)=>e.url===t.url&&e.sources===t.sources&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.ads===t.ads&&e.prevented===t.prevented&&e.waiting===t.waiting&&e.playing===t.playing&&e.loop===t.loop&&e.volume===t.volume&&e.muted===t.muted&&e.paused===t.paused&&e.live===t.live&&e.pip===t.pip&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.height===t.height&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.pipeline===t.pipeline&&e.stopOnUnmount===t.stopOnUnmount&&e.activePlayer===t.activePlayer&&e.player===t.player&&e.progressFrequency===t.progressFrequency&&e.disableDeferredLoading===t.disableDeferredLoading&&e.language===t.language&&e.poster===t.poster&&e.config===t.config&&e.skinMode===t.skinMode&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onPlayBackQualityChange===t.onPlayBackQualityChange&&e.onProgress===t.onProgress&&e.onEnablePIP===t.onEnablePIP&&e.onDisablePIP===t.onDisablePIP&&e.onLoaded===t.onLoaded&&e.onMount===t.onMount&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);import ve from"react";var Y=j(Z());Re();import I from"react";import Xa from"react";var B1=({width:e=36,height:t=36})=>Xa.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:t},Xa.createElement("path",{d:"M13 10.15C13 9.5 13.72 9.1 14.27 9.46L25.97 17.31C26.46 17.64 26.46 18.36 25.97 18.69L14.27 26.54C13.72 26.9 13 26.5 13 25.85V10.15Z",fill:"currentColor"}));B1.displayName="AudioPlayIcon";var D1=Xa.memo(B1);import os from"react";var q1=({width:e=36,height:t=36})=>os.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:t},os.createElement("path",{d:"M11 9.5C11 9.08 11.34 8.75 11.75 8.75H14.75C15.16 8.75 15.5 9.08 15.5 9.5V26.5C15.5 26.92 15.16 27.25 14.75 27.25H11.75C11.34 27.25 11 26.92 11 26.5V9.5Z",fill:"currentColor"}),os.createElement("path",{d:"M20.5 9.5C20.5 9.08 20.84 8.75 21.25 8.75H24.25C24.66 8.75 25 9.08 25 9.5V26.5C25 26.92 24.66 27.25 24.25 27.25H21.25C20.84 27.25 20.5 26.92 20.5 26.5V9.5Z",fill:"currentColor"}));q1.displayName="AudioPauseIcon";var N1=os.memo(q1);import Ya from"react";var F1=({width:e=36,height:t=36})=>Ya.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:t},Ya.createElement("path",{d:"M18 9V5.25L12.75 10.5L18 15.75V12C21.73 12 24.75 15.02 24.75 18.75C24.75 22.48 21.73 25.5 18 25.5C14.27 25.5 11.25 22.48 11.25 18.75H8.75C8.75 23.86 12.89 28 18 28C23.11 28 27.25 23.86 27.25 18.75C27.25 13.64 23.11 9.5 18 9.5V9Z",fill:"currentColor"}));F1.displayName="AudioReplayIcon";var _1=Ya.memo(F1);import An from"react";var Ga=({width:e=36,height:t=36})=>An.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},An.createElement("path",{d:"M18 9V4.5L12 10.5L18 16.5V12C22.14 12 25.5 15.36 25.5 19.5C25.5 23.64 22.14 27 18 27C13.86 27 10.5 23.64 10.5 19.5H7.5C7.5 25.29 12.21 30 18 30C23.79 30 28.5 25.29 28.5 19.5C28.5 13.71 23.79 9 18 9Z"}),An.createElement("path",{d:"M16.83 22.5H15.555V18.615L14.04 19.08V18.045L16.695 17.1H16.83V22.5Z"}),An.createElement("path",{d:"M22.095 19.695C22.095 20.31 22.02 20.835 21.87 21.27C21.72 21.69 21.495 22.02 21.21 22.26C20.925 22.5 20.565 22.62 20.145 22.62C19.725 22.62 19.365 22.5 19.08 22.26C18.795 22.02 18.57 21.69 18.42 21.27C18.27 20.835 18.195 20.31 18.195 19.695C18.195 19.08 18.27 18.555 18.42 18.12C18.57 17.7 18.795 17.37 19.08 17.13C19.365 16.89 19.725 16.77 20.145 16.77C20.565 16.77 20.925 16.89 21.21 17.13C21.495 17.37 21.72 17.7 21.87 18.12C22.02 18.555 22.095 19.08 22.095 19.695ZM20.82 19.695C20.82 19.245 20.775 18.87 20.7 18.6C20.625 18.33 20.505 18.12 20.355 17.985C20.205 17.85 20.01 17.775 19.785 17.775H20.505C20.28 17.775 20.085 17.85 19.935 17.985C19.785 18.12 19.665 18.33 19.59 18.6C19.515 18.87 19.47 19.245 19.47 19.695C19.47 20.145 19.515 20.52 19.59 20.79C19.665 21.06 19.785 21.27 19.935 21.405C20.085 21.54 20.28 21.615 20.505 21.615H19.785C20.01 21.615 20.205 21.54 20.355 21.405C20.505 21.27 20.625 21.06 20.7 20.79C20.775 20.52 20.82 20.145 20.82 19.695Z"}));Ga.displayName="SkipBackIcon";Ga.propTypes=Q;var V1=An.memo(Ga,oe);import Rn from"react";var Ka=({width:e=36,height:t=36})=>Rn.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Rn.createElement("path",{d:"M18 9C12.21 9 7.5 13.71 7.5 19.5C7.5 25.29 12.21 30 18 30C23.79 30 28.5 25.29 28.5 19.5H25.5C25.5 23.64 22.14 27 18 27C13.86 27 10.5 23.64 10.5 19.5C10.5 15.36 13.86 12 18 12V16.5L24 10.5L18 4.5V9Z"}),Rn.createElement("path",{d:"M16.83 22.5H15.555V18.615L14.04 19.08V18.045L16.695 17.1H16.83V22.5Z"}),Rn.createElement("path",{d:"M22.095 19.695C22.095 20.31 22.02 20.835 21.87 21.27C21.72 21.69 21.495 22.02 21.21 22.26C20.925 22.5 20.565 22.62 20.145 22.62C19.725 22.62 19.365 22.5 19.08 22.26C18.795 22.02 18.57 21.69 18.42 21.27C18.27 20.835 18.195 20.31 18.195 19.695C18.195 19.08 18.27 18.555 18.42 18.12C18.57 17.7 18.795 17.37 19.08 17.13C19.365 16.89 19.725 16.77 20.145 16.77C20.565 16.77 20.925 16.89 21.21 17.13C21.495 17.37 21.72 17.7 21.87 18.12C22.02 18.555 22.095 19.08 22.095 19.695ZM20.82 19.695C20.82 19.245 20.775 18.87 20.7 18.6C20.625 18.33 20.505 18.12 20.355 17.985C20.205 17.85 20.01 17.775 19.785 17.775H20.505C20.28 17.775 20.085 17.85 19.935 17.985C19.785 18.12 19.665 18.33 19.59 18.6C19.515 18.87 19.47 19.245 19.47 19.695C19.47 20.145 19.515 20.52 19.59 20.79C19.665 21.06 19.785 21.27 19.935 21.405C20.085 21.54 20.28 21.615 20.505 21.615H19.785C20.01 21.615 20.205 21.54 20.355 21.405C20.505 21.27 20.625 21.06 20.7 20.79C20.775 20.52 20.82 20.145 20.82 19.695Z"}));Ka.displayName="SkipForwardIcon";Ka.propTypes=Q;var $1=Rn.memo(Ka,oe);import z1 from"react";var kh=({width:e=24,height:t=24,...o})=>z1.createElement("svg",{viewBox:"11 10 14 16",xmlns:"http://www.w3.org/2000/svg",width:e,height:t,fill:"currentColor",...o},z1.createElement("path",{d:"M 13.211 23.887 C 13.082 23.986 12.972 24.02 12.883 23.989 C 12.794 23.958 12.75 23.874 12.75 23.739 L 12.75 12.261 C 12.75 12.126 12.794 12.042 12.883 12.011 C 12.972 11.98 13.082 12.014 13.211 12.113 L 20.492 17.649 C 20.553 17.696 20.598 17.745 20.625 17.797 L 20.625 12.51 C 20.625 12.375 20.69 12.258 20.82 12.159 C 20.95 12.061 21.104 12.011 21.281 12.011 L 22.594 12.011 C 22.771 12.011 22.925 12.061 23.055 12.159 C 23.185 12.258 23.25 12.375 23.25 12.51 L 23.25 23.49 C 23.25 23.625 23.185 23.742 23.055 23.841 C 22.925 23.939 22.771 23.989 22.594 23.989 L 21.281 23.989 C 21.104 23.989 20.95 23.939 20.82 23.841 C 20.69 23.742 20.625 23.625 20.625 23.49 L 20.625 18.203 C 20.598 18.255 20.553 18.304 20.492 18.351 Z"})),H1=kh;var Za=j(Z());import se from"react";import Vr from"react";var j1=d.div`
  position: relative;
  display: inline-flex;
`,W1=d.button`
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
`,U1=Vr.forwardRef(({$visible:e,...t},o)=>Vr.createElement("div",{ref:o,...t}));U1.displayName="MenuOverlay";var X1=d(U1)`
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
`,Y1=d.ul`
  padding: 10px 0;
`,G1=d.li`
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
`,K1=d.span`
  margin-right: auto;
`,Z1=d.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 87%;
  color: #fff;
`,Q1=Vr.forwardRef(({$visible:e,...t},o)=>Vr.createElement("div",{ref:o,...t}));Q1.displayName="SubMenuOverlay";var J1=d(Q1)`
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
`,em=d.div`
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
`,tm=d.div`
  opacity: ${({$show:e})=>e?1:0};
  transform: ${({$show:e})=>e?"translateX(0)":"translateX(50px)"};
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
`,om=d.ul`
  padding: 8px 0;
`,rm=Vr.forwardRef(({$selected:e,...t},o)=>Vr.createElement("li",{ref:o,...t}));rm.displayName="SubMenuItem";var nm=d(rm)`
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
`;var Ph=[2,1.5,1.25,1,.75,.5],im=({playbackRate:e,changePlaybackRate:t})=>{let o=se.useRef(null),[r,n]=se.useState(!1),[i,s]=se.useState(!1),[l,a]=se.useState(!1),{i18n:c}=V(),p=Pe(),u=se.useCallback(b=>{b.stopPropagation(),n(k=>(k&&(s(!1),a(!1)),!k))},[]),f=se.useCallback(()=>{s(!0),requestAnimationFrame(()=>a(!0))},[]),m=se.useCallback(()=>{a(!1),setTimeout(()=>s(!1),150)},[]),h=se.useCallback(b=>{t(b),a(!1),setTimeout(()=>{s(!1),n(!1)},150)},[t]);se.useEffect(()=>{if(!r)return;let b=k=>{if(!o.current)return;(k.composedPath?k.composedPath():[]).includes(o.current)||o.current.contains(k.target)||(n(!1),s(!1),a(!1))};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[r]);let S=e===1?c.normal:`${e}x`;return se.createElement(j1,{ref:o},se.createElement(ge,{label:c.settings},se.createElement(W1,{type:"button","aria-label":c.settings,"aria-expanded":r,onClick:u,$expanded:r},se.createElement(Oi,{...p}))),se.createElement(X1,{$visible:r&&!i},se.createElement(Y1,null,se.createElement(G1,null,se.createElement("button",{type:"button",onClick:f},se.createElement(K1,null,c.speed),se.createElement(Z1,null,S,se.createElement(Dr,{width:20,height:20})))))),se.createElement(J1,{$visible:i},se.createElement(em,{onClick:m},se.createElement(Yo,{width:16,height:16}),c.speed),se.createElement(tm,{$show:l},se.createElement(om,null,Ph.map(b=>se.createElement(nm,{key:b,$selected:e===b},se.createElement("button",{type:"button",onClick:()=>h(b)},b===1?c.normal:`${b}`)))))))};im.propTypes={playbackRate:Za.default.number.isRequired,changePlaybackRate:Za.default.func.isRequired};var sm=se.memo(im);var am=(e,t,o)=>{var i;let n=("changedTouches"in e&&((i=e.changedTouches)==null?void 0:i.length)>=1?e.changedTouches[0].pageX:e.clientX||0)-t.left;return n<=0?0:n>=t.width?o:Math.round(o*n/t.width)};var lm=d.div`
  ${Ir}
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
`,um=d.div`
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
`,cm=d.span`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
`,pm=d.span`
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: #fff;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
`,dm=d.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 0;
  position: relative;
`,rs=d.div`
  overflow: hidden;
  max-width: ${({$visible:e})=>e?"36px":"0"};
  opacity: ${({$visible:e})=>e?1:0};
  transition:
    max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s ease;
`,fm=d.div`
  grid-area: 1 / 1;
  display: flex;
  align-items: center;
  opacity: ${({$visible:e})=>e?1:0};
  pointer-events: ${({$visible:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease ${({$visible:e})=>e?"0.3s":"0s"};
  overflow: hidden;
  padding-left: 4px;
`,mm=d.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`,hm=d.span`
  color: rgba(255, 255, 255, 0.6);
`,ym=d.div`
  flex: 1;
  min-width: 0;
  display: grid;
  align-items: center;
  margin-left: 6px;
`,gm=d.div`
  grid-area: 1 / 1;
  min-width: 0;
  clip-path: ${({$visible:e})=>e?"inset(0 0 0 0)":"inset(0 100% 0 0)"};
  pointer-events: ${({$visible:e})=>e?"auto":"none"};
  transition: clip-path 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`,Qa=d.button`
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
`,Ja=d.button`
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
`,bm=d.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  height: 28px;
  padding: 0 4px;
`,el=d.div`
  position: relative;
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`,Sm=d.div`
  position: relative;
  width: 100%;
  height: 4px;
  display: flex;
  align-items: center;
  gap: 2px;
  transition: height 0.1s ease;

  ${el}:hover & {
    height: 6px;
  }
`,vm=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
`,xm=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
  border-radius: 4px;
`,Cm=d.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: transform 0.1s ease;
  transform-origin: center center;
  transform: ${({$hovered:e})=>e?"scaleY(1.5)":"scaleY(1)"};
`,wm=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
`,km=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
`,Pm=d.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
`,tl=d.div`
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
`,Tm=d.span`
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  min-width: 48px;
  text-align: right;
  flex-shrink: 0;
  margin-right: 8px;
`,Lm=d.div`
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
`,Em=d.button`
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
`,ol=d.div`
  display: flex;
  align-items: center;
  gap: 0;
  position: relative;
`,Mm=d.div`
  overflow: hidden;
  max-width: ${({$dragging:e})=>e?"80px":"0"};
  opacity: ${({$dragging:e})=>e?1:0};
  transition:
    max-width 0.25s ease,
    opacity 0.25s ease;
  display: flex;
  justify-content: flex-end;

  ${ol}:hover & {
    max-width: 80px;
    opacity: 1;
  }
`,Im=d.div`
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
`,Om=d.div`
  position: absolute;
  top: 50%;
  right: 6px;
  height: 4px;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 2px;
  pointer-events: none;
`,Am=d.div`
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  transform: translate(50%, -50%);
  pointer-events: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
`,Rm=d.div`
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
`,J7=d.div`
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
`,e8=d.button`
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
`,t8=d.span`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  padding: 4px 16px 2px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;var rl=I.forwardRef(({videoRef:e,playerRef:t,hasResource:o=!1,loading:r,paused:n,ended:i,seeking:s,waiting:l,duration:a,buffered:c=null,currentTime:p,muted:u,volume:f,playbackRate:m,loop:h,poster:S,title:b,artist:k,chapters:g,onPlayClick:v,onPauseClick:x,onTogglePlay:L,changeVolume:P,onMutedClick:C,changeCurrentTime:D,changePlaybackRate:_,onSeeking:T,onPrevious:w,onNext:y,showNavButtons:M,ads:E=null,kernelMsg:R=null},F)=>{let H=he(),{i18n:W}=V(),O=I.useRef(null),{segments:A,getChapterAtTime:ee}=So({chapters:g,duration:a}),[$,ae]=I.useState(!1),me=$?E:null,{isAdActive:ie,hasSkipTimer:xe,canSkip:Ce,skipCountdown:qe,onSkipClick:Ne}=Fr({ads:me,currentTime:p,duration:a,ended:i,onPauseClick:x}),ct=I.useCallback(()=>{E&&!$&&ae(!0),v()},[E,$,v]);I.useEffect(()=>{E||ae(!1)},[E]);let Qe=I.useMemo(()=>{let K=ee(p);return K?K.title:null},[ee,p]);I.useEffect(()=>{H({videoRef:e,playerRef:t})},[e,t,H]),I.useImperativeHandle(F,()=>({showControls:()=>{},hideControls:()=>{}}),[]);let we=I.useCallback(K=>{if(!O.current||!a)return;let pe=O.current.getBoundingClientRect(),ye=Math.max(0,Math.min(1,(K.clientX-pe.left)/pe.width));D(ye*a)},[a,D]),Lt=I.useCallback(K=>{if(!a)return;T==null||T(!0),we(K);let pe=it=>we(it),ye=()=>{T==null||T(!1),document.removeEventListener("mousemove",pe),document.removeEventListener("mouseup",ye)};document.addEventListener("mousemove",pe),document.addEventListener("mouseup",ye)},[a,we,T]),[rt,io]=I.useState(!1),[Et,pt]=I.useState(0),[Xt,xt]=I.useState(null),[er,so]=I.useState(0),Yt=I.useRef(null),Po=I.useRef(null),Mt=I.useCallback(K=>{var sl;if(!O.current||!a)return;let pe=O.current.getBoundingClientRect(),ye=am(K,pe,a),it=Yt.current,st=it?it.getBoundingClientRect():pe,At=(((sl=Po.current)==null?void 0:sl.offsetWidth)||0)/2,ns=K.clientX-st.left,jm=pe.left-st.left,Wm=pe.right-st.left,Um=jm+At,Xm=Wm-At,Ym=Math.max(Um,Math.min(Xm,ns));pt(ye),so(Ym),io(!0);let il=ee(ye);xt(il?il.title:null)},[a,ee]),To=I.useCallback(()=>{io(!1)},[]),zr=I.useMemo(()=>{if(!rt||A.length===0)return-1;let K=ee(Et);return K?A.findIndex(pe=>pe.startTime===K.startTime):-1},[rt,Et,A,ee]),Hr=I.useCallback(()=>{if(!a)return;let K=Math.max(0,p-10);D(K)},[p,a,D]),jr=I.useCallback(()=>{if(!a)return;let K=Math.min(a,p+10);D(K)},[p,a,D]),dt=I.useRef(null),tr=I.useRef(null),[or,Lo]=I.useState(!1),[Je,Wr]=I.useState(null),Eo=I.useCallback(K=>{let pe=tr.current;if(!pe)return;let ye=pe.getBoundingClientRect(),it=Math.max(0,Math.min(ye.width,K-ye.left));Wr(it)},[]),Mo=I.useCallback(K=>{let pe=K.currentTarget||dt.current;if(!pe)return;let ye=pe.getBoundingClientRect(),it=ye.width-12,st=K.clientX-ye.left-6,uo=Math.max(0,Math.min(1,1-st/it));P(uo)},[P]),[nt,ao]=I.useState(!1),rr=I.useCallback(K=>{dt.current=K.currentTarget,Mo(K),ao(!0),Eo(K.clientX);let pe=it=>{let st=dt.current.getBoundingClientRect(),uo=st.width-12,At=it.clientX-st.left-6,ns=Math.max(0,Math.min(1,1-At/uo));P(ns),Eo(it.clientX)},ye=()=>{ao(!1),document.removeEventListener("mousemove",pe),document.removeEventListener("mouseup",ye)};document.addEventListener("mousemove",pe),document.addEventListener("mouseup",ye)},[Mo,P,Eo]),nr=I.useCallback(()=>{Lo(!0)},[]),lo=I.useCallback(()=>{nt||Lo(!1)},[nt]);I.useEffect(()=>{nt||Lo(!1)},[nt]);let Gt=!n&&!i,$e=Pe(),It=a>0?p/a*100:0,ft=c!=null?c*100:0,Ot=a>0?Math.max(0,a-p):0,ir=a>0&&Ot>0?`-${Me(Ot)}`:"0:00";return I.createElement(lm,{ref:Yt},rt&&I.createElement(um,{ref:Po,style:{left:`${er}px`}},Xt&&I.createElement(cm,null,Xt),I.createElement(pm,null,Me(Et))),I.createElement(dm,null,!ie&&I.createElement(ge,{label:W.skipBack},I.createElement(rs,{$visible:Gt},I.createElement(Ja,{onClick:Hr,"aria-label":W.skipBack},I.createElement(V1,{...$e})))),ie&&xe?I.createElement(rs,{$visible:!0},I.createElement(Qa,{onClick:Ce?Ne:void 0,"aria-label":Ce?W.skipAd:`${qe}s`,style:{opacity:Ce?1:.6,cursor:Ce?"pointer":"default"}},Ce?I.createElement(H1,{width:24,height:24}):I.createElement("span",{style:{fontSize:"14px",fontWeight:500,color:"#fff"}},qe,"s"))):I.createElement(ge,{label:i?W.replay:n?W.play:W.pause},I.createElement(Qa,{onClick:n||i?ct:x,"aria-label":i?W.replay:n?W.play:W.pause},i?I.createElement(_1,{...$e}):n?I.createElement(D1,{...$e}):I.createElement(N1,{...$e}))),!ie&&I.createElement(ge,{label:W.skipForward},I.createElement(rs,{$visible:Gt},I.createElement(Ja,{onClick:jr,"aria-label":W.skipForward},I.createElement($1,{...$e})))),I.createElement(ym,null,I.createElement(fm,{$visible:!Gt},I.createElement(mm,null,I.createElement(hm,null,i?"Replay: ":"Play: "),b||"",Qe&&` \u2022 ${Qe}`)),I.createElement(gm,{$visible:Gt},I.createElement(bm,null,I.createElement(el,{ref:O,onMouseDown:ie?void 0:Lt,onMouseMove:ie?void 0:Mt,onMouseLeave:ie?void 0:To,style:ie?{pointerEvents:"none",cursor:"default"}:void 0},I.createElement(Sm,null,A.length>0?A.map((K,pe)=>{let ye=K.endTime-K.startTime,it=ye/a*100,st=0;p>=K.endTime?st=100:p>K.startTime&&(st=(p-K.startTime)/ye*100);let uo=c!=null?c*a:0,At=0;return uo>=K.endTime?At=100:uo>K.startTime&&(At=(uo-K.startTime)/ye*100),I.createElement(Cm,{key:K.startTime,style:{width:`${it}%`},$hovered:zr===pe},I.createElement(km,{style:{width:`${At}%`}}),I.createElement(wm,{style:{width:`${st}%`,background:ie?"#fc0":void 0}}),l&&At<100&&I.createElement(tl,{style:{clipPath:`inset(0 0 0 ${Math.max(At,st)}%)`}}))}):I.createElement(Pm,null,I.createElement(vm,{style:{width:`${ft}%`}}),I.createElement(xm,{style:{width:`${It}%`,background:ie?"#fc0":void 0}}),l&&ft<100&&I.createElement(tl,{style:{clipPath:`inset(0 0 0 ${Math.max(ft,It)}%)`}}))))))),I.createElement(Tm,null,ir),I.createElement(Lm,null,I.createElement(ol,{ref:tr},I.createElement(Mm,{$dragging:nt,onMouseEnter:nr,onMouseLeave:lo},I.createElement(Im,{onMouseDown:rr,role:"slider","aria-label":"Volume","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":u?0:Math.round(f*100)},I.createElement(Om,{style:{width:`${u?0:f*68}px`}}),I.createElement(Am,{style:{right:`${6+(u?0:f*68)}px`}}))),(or||nt)&&I.createElement(Rm,{style:Je!=null&&nt?{left:`${Je}px`,transform:"translateX(-50%)"}:{left:`${6+68*(1-(u?0:f))}px`,transform:"translateX(-50%)"}},u?0:Math.round(f*100),"%"),I.createElement(ge,{label:u?W.unmute:W.mute,disabled:nt},I.createElement(Em,{onClick:C,"aria-label":u?W.unmute:W.mute},u||f===0?I.createElement(Tr,{...$e}):I.createElement(Pi,{...$e})))),!ie&&I.createElement(sm,{playbackRate:m,changePlaybackRate:_}))))});rl.displayName="AudioPlayerSkin";rl.propTypes={videoRef:Y.default.oneOfType([Y.default.func,Y.default.shape({current:Y.default.any})]).isRequired,playerRef:Y.default.oneOfType([Y.default.func,Y.default.shape({current:Y.default.any})]).isRequired,hasResource:Y.default.bool,loading:Y.default.bool,paused:Y.default.bool.isRequired,ended:Y.default.bool.isRequired,seeking:Y.default.bool,waiting:Y.default.bool,duration:Y.default.number.isRequired,buffered:Y.default.number,currentTime:Y.default.number.isRequired,muted:Y.default.bool.isRequired,volume:Y.default.number.isRequired,playbackRate:Y.default.number,loop:Y.default.bool,poster:Y.default.string,title:Y.default.string,artist:Y.default.string,chapters:Y.default.arrayOf(Y.default.shape({title:Y.default.string.isRequired,startTime:Y.default.number.isRequired})),onPlayClick:Y.default.func.isRequired,onPauseClick:Y.default.func.isRequired,onTogglePlay:Y.default.func,changeVolume:Y.default.func.isRequired,onMutedClick:Y.default.func.isRequired,changeCurrentTime:Y.default.func.isRequired,changePlaybackRate:Y.default.func.isRequired,onSeeking:Y.default.func,kernelMsg:Y.default.any,onPrevious:Y.default.func,onNext:Y.default.func,showNavButtons:Y.default.bool};var Bm=I.memo(rl,(e,t)=>e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.hasResource===t.hasResource&&e.loading===t.loading&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.poster===t.poster&&e.title===t.title&&e.artist===t.artist&&e.chapters===t.chapters&&e.kernelMsg===t.kernelMsg&&e.onPlayClick===t.onPlayClick&&e.onPauseClick===t.onPauseClick&&e.onTogglePlay===t.onTogglePlay&&e.changeVolume===t.changeVolume&&e.onMutedClick===t.onMutedClick&&e.changeCurrentTime===t.changeCurrentTime&&e.changePlaybackRate===t.changePlaybackRate&&e.onSeeking===t.onSeeking&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons&&e.ads===t.ads);import qm from"react";var Dm=d.div`
  position: relative;
  width: 100%;
  outline: none;
  overflow: visible;

  ${bi}
`;var Nm=qm.forwardRef(({children:e,...t},o)=>qm.createElement(Dm,{ref:o,...t},e));Nm.displayName="AudioPlayerWrapper";var Fm=Nm;var _m=ve.forwardRef((e,t)=>{var L;let[o,r]=ve.useState({...Ut,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(L=e.volume)!=null?L:Ut.volume}),[n,i]=ve.useState({playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume});(e.playbackRate!==n.playbackRate||e.loop!==n.loop||e.playing!==n.playing||e.muted!==n.muted||e.volume!==n.volume)&&(i({playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume}),r(P=>{var D,_;let C={...P};return e.playbackRate!==n.playbackRate&&(C.playbackRate=e.playbackRate),e.loop!==n.loop&&(C.loop=e.loop),e.playing!==n.playing&&(C.playing=e.playing),e.muted!==n.muted&&(C.isMuted=e.muted,C.volume=e.muted?0:(D=e.volume)!=null?D:Ut.volume),e.volume!==n.volume&&!e.muted&&(C.volume=(_=e.volume)!=null?_:Ut.volume),C}));let s=ve.useRef(null),l=ve.useRef(null),a=ve.useRef(e.url);ve.useEffect(()=>{a.current!==e.url&&(a.current=e.url,r(P=>({...P,isLoading:!0,isBuffering:!1,duration:0,played:0,loaded:0,isEnded:!1,kernelError:null,seeking:!1})))},[e.url]);let c=ve.useRef(e.ads);ve.useEffect(()=>{let P=c.current!==null&&c.current!==void 0,C=e.ads!==null&&e.ads!==void 0;c.current=e.ads,P&&!C&&r(D=>({...D,playing:!0}))},[e.ads]);let{videoUrl:p,...u}=ts({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDuration:e.onDuration,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:r,playerState:o,extraProps:{url:e.url,sources:[],prevented:!1}}),f=ve.useMemo(()=>({attributes:e.config.attributes,tracks:e.config.tracks,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS}),[e.config]),{onMutedClick:m,changeVolume:h}=Ji({prevented:!1,muted:o.isMuted,videoRef:l,src:p,updateState:({muted:P,volume:C})=>r(D=>({...D,isMuted:P!=null?P:!1,volume:C!=null?C:0}))});ve.useEffect(()=>{var P;e.player&&(l.current=(P=e.player.getPlayer())!=null?P:null)},[e.player]);let S=ve.useCallback(()=>{r(P=>({...P,playing:!0}))},[]),b=ve.useCallback(()=>{r(P=>({...P,playing:!1}))},[]),k=ve.useCallback(()=>{r(P=>({...P,playing:!P.playing}))},[]),g=ve.useCallback(P=>{e.player&&(r(C=>({...C,played:P})),e.player.seekTo(P))},[e.player]),v=ve.useCallback(P=>{r(C=>({...C,seeking:P}))},[]),x=ve.useCallback(P=>{r(C=>({...C,playbackRate:P}))},[]);return ve.createElement(Qi,{language:e.language},ve.createElement(Fm,{ref:s,tabIndex:0,role:"application",dir:"ltr"},p&&ve.createElement(ht,{ref:t,activePlayer:e.activePlayer,loop:o.loop,muted:o.isMuted,playbackRate:o.playbackRate,playsinline:e.playsinline,progressInterval:e.progressInterval,stopOnUnmount:e.stopOnUnmount,volume:o.volume,url:p,width:"0",height:"0",playing:o.playing,viewType:"audio",config:f,...u}),ve.createElement(Bm,{videoRef:l,playerRef:s,hasResource:typeof p=="string",hasAudio:!0,loading:o.isLoading,paused:o.playing===!1,ended:o.isEnded,seeking:o.seeking,waiting:o.isBuffering||e.waiting,duration:o.duration,buffered:o.loaded,currentTime:o.played,muted:o.isMuted,volume:o.volume,playbackRate:o.playbackRate,loop:o.loop,poster:e.poster,title:e.title,artist:e.artist,chapters:e.chapters,onPlayClick:S,onPauseClick:b,onTogglePlay:k,changeVolume:h,onMutedClick:m,changeCurrentTime:g,changePlaybackRate:x,onSeeking:v,onPrevious:e.onPrevious,onNext:e.onNext,showNavButtons:e.showNavButtons,ads:e.ads})))});_m.displayName="AudioMediaPlayerSkin";var Vm=ve.memo(_m,(e,t)=>e.url===t.url&&e.playing===t.playing&&e.loop===t.loop&&e.volume===t.volume&&e.muted===t.muted&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.stopOnUnmount===t.stopOnUnmount&&e.activePlayer===t.activePlayer&&e.player===t.player&&e.waiting===t.waiting&&e.language===t.language&&e.poster===t.poster&&e.title===t.title&&e.artist===t.artist&&e.config===t.config&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onProgress===t.onProgress&&e.onLoaded===t.onLoaded&&e.onMount===t.onMount&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);Rt();Re();var Th=typeof window!="undefined"&&window.document&&typeof document!="undefined",Lh=typeof global!="undefined"&&global.window&&global.window.document,Eh=Object.keys(vs),Mh=Th||Lh?$r.Suspense:()=>null,zm=e=>{var t;return t=class extends $r.Component{constructor(){super(...arguments);B(this,"player",null);B(this,"state",{});B(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{n&&n!==this.player&&(this.player=n,this.forceUpdate())}});B(this,"getDuration",()=>this.player?this.player.getDuration():null);B(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null);B(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null);B(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null);B(this,"seekTo",(n,i,s)=>{if(!this.player)return null;this.player.seekTo(n,i,s)});B(this,"handleReady",()=>{this.props.onReady&&this.props.onReady(this)});B(this,"getActivePlayer",Zr((n,i)=>e.canPlay(n,i)?e:null));B(this,"getConfig",Zr((n,i,s)=>{let{config:l}=this.props;return $m.default.all([Un.config,Un.config[s]||{},l,l[s]||{}])}));B(this,"getAttributes",Zr(()=>El(this.props,Eh)));B(this,"getPlayerConfig",Zr(n=>{let i=(this.props.captions||[]).map(l=>({kind:l.kind||"subtitles",src:l.src,srcLang:l.language,label:l.label})),s=[...n.tracks||[],...i];return{attributes:n.attributes,tracks:s,forceVideo:n.forceVideo,forceHLS:n.forceHLS,dashVersion:n.dashVersion,forceDASH:n.forceDASH,forceFLV:n.forceFLV,flvVersion:n.flvVersion,forceLoad:n.forceLoad,forceDisableHls:n.forceDisableHls,hlsOptions:n.hlsOptions,hlsVersion:n.hlsVersion,forceSafariHLS:n.forceSafariHLS,loopOnEnded:n.loopOnEnded}}));B(this,"getSourceProps",()=>"sources"in this.props&&this.props.sources!==void 0?{sources:this.props.sources,fullHDQualityBreak:this.props.fullHDQualityBreak}:{sources:[]});B(this,"getUrlProp",()=>"url"in this.props&&this.props.url!==void 0?this.props.url:"");B(this,"getEffectiveViewType",()=>{if(this.props.viewType==="audio")return"audio";let n=this.getUrlProp();return n&&as(n)?"audio":"video"});B(this,"renderActivePlayer",(n,i)=>{if(!n&&!i)return null;let s=this.getActivePlayer(n,i);if(!s)return null;let l=this.getConfig(n,i,s.key),a=this.getPlayerConfig(l),c=this.getSourceProps(),p=this.getUrlProp();return this.getEffectiveViewType()==="audio"?$r.createElement(Vm,{key:`${s.key}-audio`,ref:this.references.player,activePlayer:s.lazyPlayer,player:this.player,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,muted:this.props.muted,loop:this.props.loop,url:p,width:this.props.width,playing:this.props.playing,waiting:this.props.waiting,config:a,language:this.props.language,poster:this.props.poster,title:this.props.title,artist:this.props.artist,chapters:this.props.chapters,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDuration:this.props.onDuration,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackRateChange:this.props.onPlayBackRateChange,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,onPrevious:this.props.onPrevious,onNext:this.props.onNext,showNavButtons:this.props.showNavButtons,ads:this.props.ads}):$r.createElement(R1,{key:s.key,ref:this.references.player,activePlayer:s.lazyPlayer,player:this.player,loop:this.props.loop,muted:this.props.muted,pip:this.props.pip,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,url:p,sources:c.sources,width:this.props.width,height:this.props.height,playing:this.props.playing,config:a,prevented:this.props.prevented,waiting:this.props.waiting,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onDuration:this.props.onDuration,onEnablePIP:this.props.onEnablePIP,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackQualityChange:this.props.onPlayBackQualityChange,onPlayBackRateChange:this.props.onPlayBackRateChange,onPrevious:this.props.onPrevious,onNext:this.props.onNext,showNavButtons:this.props.showNavButtons,fullHDQualityBreak:c.fullHDQualityBreak,language:this.props.language,live:this.props.live,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,disableDeferredLoading:this.props.disableDeferredLoading,progressFrequency:this.props.progressFrequency,spriteVTTFile:this.props.spriteVTTFile,chapters:this.props.chapters,captions:this.props.captions,heatmapData:this.props.heatmapData,ads:this.props.ads,poster:this.props.poster,skinMode:this.props.skinMode})})}shouldComponentUpdate(n,i){return!(0,nl.default)(this.props,n)||!(0,nl.default)(this.state,i)}componentDidUpdate(){}render(){let{wrapper:n}=this.props,i=this.getUrlProp(),s=this.getSourceProps(),{className:l,...a}=this.getAttributes(),c=typeof n=="string"?this.references.wrapper:void 0;return $r.createElement(n,{ref:c,"data-testid":"media-player-skin",className:`playerstack${l?` ${l}`:""}`,...a},$r.createElement(Mh,{fallback:this.props.fallback},this.renderActivePlayer(i,s.sources)))}},B(t,"displayName","MediaPlayer"),B(t,"propTypes",vs),B(t,"defaultProps",Un),B(t,"canPlay",(n,i)=>!!e.canPlay(n,i)),B(t,"canEnablePIP",n=>!!(e.canEnablePIP&&e.canEnablePIP(n))),t};var Hm=zm(Al);function Ah(e,t){Oh(e).render(Ih.createElement(Hm,{...t}))}export{Ah as default};
