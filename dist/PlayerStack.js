var PlayerStack=(()=>{var fm=Object.create;var Vr=Object.defineProperty;var mm=Object.getOwnPropertyDescriptor;var hm=Object.getOwnPropertyNames;var ym=Object.getPrototypeOf,gm=Object.prototype.hasOwnProperty;var bm=(e,t,o)=>t in e?Vr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var ze=(e,t)=>()=>(e&&(t=e(e=0)),t);var po=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Qa=(e,t)=>{for(var o in t)Vr(e,o,{get:t[o],enumerable:!0})},Ga=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of hm(t))!gm.call(e,n)&&n!==o&&Vr(e,n,{get:()=>t[n],enumerable:!(r=mm(t,n))||r.enumerable});return e};var h=(e,t,o)=>(o=e!=null?fm(ym(e)):{},Ga(t||!e||!e.__esModule?Vr(o,"default",{value:e,enumerable:!0}):o,e)),Sm=e=>Ga(Vr({},"__esModule",{value:!0}),e);var B=(e,t,o)=>(bm(e,typeof t!="symbol"?t+"":t,o),o);var Ja=po((Ah,Za)=>{Za.exports=function(t,o,r){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof o=="function"&&(r=o,o={}),o=o||{},r=r||function(){},i.type=o.type||"text/javascript",i.charset=o.charset||"utf8",i.async="async"in o?!!o.async:!0,i.src=t,o.attrs&&vm(i,o.attrs),o.text&&(i.text=""+o.text);var s="onload"in i?Ka:xm;s(i,r),i.onload||Ka(i,r),n.appendChild(i)};function vm(e,t){for(var o in t)e.setAttribute(o,t[o])}function Ka(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function xm(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}});function Zo(e){var t,o;return typeof window=="undefined"?null:window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:(o=(t=window.module)==null?void 0:t.exports)!=null&&o[e]?window.module.exports[e]:null}function To(e,t,o=null,r=()=>!0,n=el.default){let i=Zo(t);return i&&r&&r(i)?Promise.resolve(i):new Promise((s,l)=>{if(Po[e]){Po[e].push({resolve:s,reject:l});return}Po[e]=[{resolve:s,reject:l}];let a=u=>{Po[e].forEach(p=>p.resolve(u)),Po[e]=null};if(o){let u=window[o];window[o]=function(){u&&u(),a(Zo(t))}}n(e,u=>{u?(Po[e].forEach(p=>p.reject(u)),Po[e]=null):o||a(Zo(t))})})}var el,Po,tl=ze(()=>{el=h(Ja());Po={}});function kt(e){return typeof window!="undefined"&&typeof window.MediaStream!="undefined"&&e instanceof window.MediaStream}function $r(e){return/^blob:/.test(e)}function Hr(e){return(e==null?void 0:e.mozHasAudio)||(e==null?void 0:e.webkitAudioDecodedByteCount)>0||(e==null?void 0:e.audioTracks)!==void 0&&e.audioTracks.length>0}function Xt(e){let t=e||document.createElement("video"),o=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&o}var ls=ze(()=>{});function cs(e){return!e||typeof e!="string"?!1:us.test(e)}function Jo(e,t){if(t&&t.length>0)return!0;if(!e)return!1;if(kt(e)||$r(e))return!0;let o=e;return ol.test(o)||us.test(o)||Dn.test(o)||Bn.test(o)||Nn.test(o)}var ol,us,Dn,Bn,Nn,rl=ze(()=>{ls();ol=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,us=/\.(mp3|wav|flac|aac|ogg|m4a|opus|wma)(#t=[,\d+]+)?($|\?)/i,Dn=/\.(m3u8)($|\?)/i,Bn=/\.(mpd)($|\?)/i,Nn=/\.(flv)($|\?)/i});var qn,nl,Fn,ps,ds,fs,ms,hs,ys,gs,il=ze(()=>{qn=typeof navigator!="undefined",nl=qn&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Fn=qn&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||nl)&&!window.MSStream,ps=qn&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,ds="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",fs="Hls",ms="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",hs="dashjs",ys="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",gs="flvjs"});function er(e){if(typeof document=="undefined")return null;let t=`${sl}${e}=`,o=document.cookie.split(";");for(let r=0;r<o.length;r++){let n=o[r];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(t)===0)try{return decodeURIComponent(n.substring(t.length,n.length))}catch{return n.substring(t.length,n.length)}}return null}function tr(e,t,o){if(typeof document=="undefined")return;let r="";if(o){let n=new Date;n.setTime(n.getTime()+o*24*60*60*1e3),r=`; expires=${n.toUTCString()}`}document.cookie=`${sl}${e}=${encodeURIComponent(t||"")}${r}; path=/`}var sl,al=ze(()=>{sl="rmp_"});function Cm(){if(bs)return;if(typeof window=="undefined"||typeof navigator=="undefined"){bs=!0;return}let e=window.navigator.userAgent.toLowerCase(),t="ontouchstart"in window||navigator.maxTouchPoints>0,o=/iphone|ipod|android.*mobile|windows phone|blackberry/.test(e),r=/ipad|android(?!.*mobile)|silk|kindle|tablet/.test(e),n=!t&&/mac|windows|linux|cros/.test(e);o||r?(ll=!1,Ss=!0):(ll=n,Ss=!n),bs=!0}var ll,Ss,bs,_n,ul=ze(()=>{ll=!1,Ss=!1,bs=!1;Cm();_n=Ss});function Oe(e){let t=Math.floor(e),o=Math.floor(t/3600),r=Math.floor(t%3600/60),n=t%60;return o>0?`${String(o).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function zr(e,t){return e.reduce((o,r)=>{let n=String(r[t]);return o[n]=r,o},{})}function Vn(e,t){let o={},r=Object.keys(e);for(let n of r)t.indexOf(n)===-1&&(o[n]=e[n]);return o}var cl=ze(()=>{});function pl(e){let t=e.trim().split(":");if(t.length===3){let[o,r,n]=t;return parseFloat(o)*3600+parseFloat(r)*60+parseFloat(n)}if(t.length===2){let[o,r]=t;return parseFloat(o)*60+parseFloat(r)}return 0}function $n(e){let t=[],o=e.split(`
`),r=0;for(;r<o.length;){let n=o[r].trim();if(n.includes(" --> ")){let[i,s]=n.split(" --> "),l=pl(i),a=pl(s.split(" ")[0]),u=[];for(r++;r<o.length&&o[r].trim()!=="";)u.push(o[r].trim()),r++;u.length>0&&t.push({startTime:l,endTime:a,text:u.join(`
`)})}else r++}return t}function Hn(e,t){return e.filter(o=>t>=o.startTime&&t<=o.endTime)}function or(e,t){let o=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16),i=parseInt(t)/100;return`rgba(${o}, ${r}, ${n}, ${i})`}function zn(e,t){switch(e){case"dropshadow":return`2px 2px 3px ${t}, 2px 2px 4px ${t}`;case"raised":return`1px 1px 0 ${t}, 2px 2px 0 ${t}`;case"depressed":return`-1px -1px 0 ${t}, -2px -2px 0 ${t}`;case"uniform":return`0 0 3px ${t}, 0 0 3px ${t}, 0 0 3px ${t}, 0 0 3px ${t}`;default:return"none"}}var fo,jr,dl=ze(()=>{fo={fontFamily:"sans-serif",fontColor:"#ffffff",fontSize:"100%",fontOpacity:"100%",backgroundColor:"#000000",backgroundOpacity:"75%",windowColor:"#000000",windowOpacity:"0%",edgeStyle:"none"},jr={fontFamily:[{label:"Proportional Sans-Serif",value:"sans-serif"},{label:"Monospace Sans-Serif",value:"monospace"},{label:"Proportional Serif",value:"serif"},{label:"Monospace Serif",value:'"Courier New", monospace'},{label:"Casual",value:'"Comic Sans MS", cursive'},{label:"Cursive",value:'"Brush Script MT", cursive'},{label:"Small Capitals",value:"small-caps"}],fontColor:[{label:"White",value:"#ffffff"},{label:"Yellow",value:"#ffff00"},{label:"Green",value:"#00ff00"},{label:"Cyan",value:"#00ffff"},{label:"Blue",value:"#0000ff"},{label:"Magenta",value:"#ff00ff"},{label:"Red",value:"#ff0000"},{label:"Black",value:"#000000"}],fontSize:[{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"},{label:"150%",value:"150%"},{label:"200%",value:"200%"},{label:"300%",value:"300%"},{label:"400%",value:"400%"}],fontOpacity:[{label:"25%",value:"25%"},{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"}],backgroundColor:[{label:"Black",value:"#000000"},{label:"White",value:"#ffffff"},{label:"Yellow",value:"#ffff00"},{label:"Green",value:"#00ff00"},{label:"Cyan",value:"#00ffff"},{label:"Blue",value:"#0000ff"},{label:"Magenta",value:"#ff00ff"},{label:"Red",value:"#ff0000"}],backgroundOpacity:[{label:"0%",value:"0%"},{label:"25%",value:"25%"},{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"}],windowColor:[{label:"Black",value:"#000000"},{label:"White",value:"#ffffff"},{label:"Red",value:"#ff0000"},{label:"Green",value:"#00ff00"},{label:"Blue",value:"#0000ff"},{label:"Yellow",value:"#ffff00"},{label:"Magenta",value:"#ff00ff"},{label:"Cyan",value:"#00ffff"}],windowOpacity:[{label:"0%",value:"0%"},{label:"25%",value:"25%"},{label:"50%",value:"50%"},{label:"75%",value:"75%"},{label:"100%",value:"100%"}],edgeStyle:[{label:"None",value:"none"},{label:"Drop Shadow",value:"dropshadow"},{label:"Raised",value:"raised"},{label:"Depressed",value:"depressed"},{label:"Uniform",value:"uniform"}]}});var fl=ze(()=>{ls();al();ul();cl();tl();dl()});var mo,ml=ze(()=>{mo={exitFullScreenMode:"Exit full screen mode (f)",fullScreen:"Full screen",exitFullscreen:"Exit full screen",fullscreen:"Full screen",play:"Play",replay:"Replay",pause:"Pause",previous:"Previous",next:"Next",normal:"Normal",settings:"Settings",speed:"Speed",quality:"Quality",auto:"Auto",hd:"HD",live:"Live",seconds:"seconds",clickToUnmute:"Click to unmute",playbackStuckClickResumePlayback:"Playback is stuck, click to resume playback.",mute:"Mute (m)",activateSound:"Activate sound",thisVideoHasNoSound:"This video has no sound",timeBar:"Time bar",loop:"Loop",pictureInPicture:"Picture in picture",captions:"Captions",off:"Off",captionOptions:"Options",fontFamily:"Font family",fontColor:"Font color",fontSize:"Font size",fontOpacity:"Font opacity",backgroundColor:"Background color",backgroundOpacity:"Background opacity",windowColor:"Window color",windowOpacity:"Window opacity",edgeStyle:"Character edge style",reset:"Reset",skipBack:"Back 10s",skipForward:"Forward 10s",unmute:"Unmute",close:"Close",back:"Back"}});var ho,hl=ze(()=>{ho={exitFullScreenMode:"Salir de pantalla completa (f)",fullScreen:"Pantalla completa",exitFullscreen:"Salir de pantalla completa",fullscreen:"Pantalla completa",play:"Reproducir",replay:"Repetir",pause:"Pausar",previous:"Anterior",next:"Siguiente",normal:"Normal",settings:"Ajustes",speed:"Velocidad",quality:"Calidad",auto:"Auto",hd:"HD",live:"En vivo",seconds:"segundos",clickToUnmute:"Haz clic para activar el sonido",playbackStuckClickResumePlayback:"La reproducci\xF3n se ha detenido, haz clic para continuar.",mute:"Silenciar (m)",activateSound:"Activar sonido",thisVideoHasNoSound:"Este video no tiene sonido",timeBar:"Barra de tiempo",loop:"Repetir",pictureInPicture:"Imagen en imagen",captions:"Subt\xEDtulos",off:"Desactivado",captionOptions:"Opciones",fontFamily:"Familia de fuente",fontColor:"Color de fuente",fontSize:"Tama\xF1o de fuente",fontOpacity:"Opacidad de fuente",backgroundColor:"Color de fondo",backgroundOpacity:"Opacidad de fondo",windowColor:"Color de ventana",windowOpacity:"Opacidad de ventana",edgeStyle:"Estilo de borde",reset:"Restablecer",skipBack:"Retroceder 10s",skipForward:"Avanzar 10s",unmute:"Activar sonido",close:"Cerrar",back:"Atr\xE1s"}});var yl=ze(()=>{ml();hl()});var Ne=ze(()=>{rl();il();fl();yl()});var T=po((l2,gl)=>{gl.exports=globalThis.React});var bl,Sl,vs=ze(()=>{bl=h(T());Ne();Sl=e=>(0,bl.lazy)(async()=>{let t=await e();return typeof t.default=="function"?t:t.default})});function vl(e,...t){let o=[].concat(...t);return Vn(e,o)}function xl(e){return t=>{e.forEach(o=>{typeof o=="function"?o(t):o&&(o.current=t)})}}var Nt=ze(()=>{Ne();Ne()});var Cl={};Qa(Cl,{default:()=>rr});var jn,rr,wl=ze(()=>{jn=h(T());Ne();Nt();vs();rr=class extends jn.default.Component{constructor(){super(...arguments);B(this,"onReady",o=>this.props.onReady(o));B(this,"onPlay",o=>this.props.onPlay({...o,hasAudio:Hr(this.player)}));B(this,"onBuffer",o=>this.props.onBuffer(o));B(this,"onBufferEnd",o=>this.props.onBufferEnd(o));B(this,"onPause",o=>this.props.onPause(o));B(this,"onEnded",o=>this.props.onEnded(o));B(this,"onError",(o,r,n,i)=>this.props.onError(o,r,n,i));B(this,"onPlayBackRateChange",o=>{this.props.onPlayBackRateChange(o.target.playbackRate)});B(this,"onEnablePIP",o=>this.props.onEnablePIP(o));B(this,"onDisablePIP",o=>{let{onDisablePIP:r,playing:n}=this.props;r&&r(o),n&&this.play()});B(this,"onPresentationModeChange",o=>{if(this.player&&Xt(this.player)){let{webkitPresentationMode:r}=this.player;r==="picture-in-picture"?this.onEnablePIP(o):r==="inline"&&this.onDisablePIP(o)}});B(this,"onSeek",o=>{var r;this.props.onSeek((r=o.target)==null?void 0:r.currentTime)});B(this,"mute",()=>{this.player.muted=!0});B(this,"unmute",()=>{this.player.muted=!1});B(this,"renderTrack",(o,r)=>jn.default.createElement("track",{key:r,...o}));B(this,"ref",o=>{this.player&&(this.prevPlayer=this.player),this.player=o})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);let o=this.getSource(this.props.url);o&&(this.player.src=o),(Fn||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(o){this.prevPlayer&&this.prevPlayer!==this.player&&(this.removeListeners(this.prevPlayer),this.listenersAttached=!1),this.listenersAttached||this.addListeners(this.player),this.props.url!==o.url&&kt(this.props.url)===!1&&(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.hls&&(this.hls.destroy(),this.hls=null),this.dash&&(this.dash.reset(),this.dash=null),this.flv&&(this.flv.unload(),this.flv.detachMediaElement(),this.flv.destroy(),this.flv=null),this.removeListeners(this.player),this.listenersAttached=!1}addListeners(o){let{url:r,playsinline:n}=this.props;o&&(this.removeListeners(o),this.listenersAttached=!0,o.addEventListener("play",this.onPlay),o.addEventListener("waiting",this.onBuffer),o.addEventListener("playing",this.onBufferEnd),o.addEventListener("pause",this.onPause),o.addEventListener("seeked",this.onSeek),o.addEventListener("ended",this.onEnded),o.addEventListener("error",this.onError),o.addEventListener("ratechange",this.onPlayBackRateChange),o.addEventListener("enterpictureinpicture",this.onEnablePIP),o.addEventListener("leavepictureinpicture",this.onDisablePIP),o.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(r)===!1&&o.addEventListener("canplay",this.onReady),n&&(o.setAttribute("playsinline",""),o.setAttribute("webkit-playsinline",""),o.setAttribute("x5-playsinline","")))}removeListeners(o){o&&(o.removeEventListener("canplay",this.onReady),o.removeEventListener("play",this.onPlay),o.removeEventListener("waiting",this.onBuffer),o.removeEventListener("playing",this.onBufferEnd),o.removeEventListener("pause",this.onPause),o.removeEventListener("seeked",this.onSeek),o.removeEventListener("ended",this.onEnded),o.removeEventListener("error",this.onError),o.removeEventListener("ratechange",this.onPlayBackRateChange),o.removeEventListener("enterpictureinpicture",this.onEnablePIP),o.removeEventListener("leavepictureinpicture",this.onDisablePIP),o.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange))}shouldUseHLS(o){return ps&&this.props.config.forceSafariHLS||this.props.config.forceHLS?!0:Fn||this.props.config.forceDisableHls?!1:Dn.test(o)}shouldUseDASH(o){return Bn.test(o)||this.props.config.forceDASH}shouldUseFLV(o){return Nn.test(o)||this.props.config.forceFLV}load(o,r){let{hlsVersion:n,hlsOptions:i,dashVersion:s,flvVersion:l}=this.props.config;if(r===!1)return;this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.flv&&this.flv.unload(),this.loadSequence=(this.loadSequence||0)+1;let a=this.loadSequence;if(this.shouldUseHLS(o))To(ds.replace("VERSION",n),fs).then(u=>{a===this.loadSequence&&(this.hls=new u(i),this.hls.on(u.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(u.Events.ERROR,(p,c)=>{this.props.onError(p,c,this.hls,u)}),this.hls.loadSource(o),this.hls.attachMedia(this.player),this.props.onLoaded())}).catch(u=>this.props.onError(u));else if(this.shouldUseDASH(o))To(ms.replace("VERSION",s),hs).then(u=>{a===this.loadSequence&&(this.dash=u.MediaPlayer().create(),this.dash.initialize(this.player,o,this.props.playing),this.dash.on("error",p=>{this.props.onError(p,null,this.dash,u)}),parseInt(s)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:u.LogLevel.LOG_LEVEL_NONE}}),this.props.onLoaded())}).catch(u=>this.props.onError(u));else if(this.shouldUseFLV(o))To(ys.replace("VERSION",l),gs).then(u=>{a===this.loadSequence&&(this.flv=u.createPlayer({type:"flv",url:o}),this.flv.attachMediaElement(this.player),this.flv.on(u.Events.ERROR,(p,c)=>{this.props.onError(p,c,this.flv,u)}),this.flv.load(),this.props.onLoaded())}).catch(u=>this.props.onError(u));else if(kt(o))try{this.player.srcObject=o}catch{this.player.src=window.URL.createObjectURL(o)}}getPlayer(){return this.player}play(){let o=this.player.play();o&&o.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.hls&&(this.hls.destroy(),this.hls=null),this.dash&&(this.dash.reset(),this.dash=null),this.flv&&(this.flv.unload(),this.flv.detachMediaElement(),this.flv.destroy(),this.flv=null)}seekTo(o,r=!0){this.player.currentTime=o,r===!1&&this.pause()}setVolume(o){this.player.volume=o}enablePIP(){if(this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player){let o=this.player.requestPictureInPicture();o&&o.catch&&o.catch(r=>this.props.onError(r))}else Xt(this.player)&&this.player.webkitPresentationMode!=="picture-in-picture"&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():Xt(this.player)&&this.player.webkitPresentationMode!=="inline"&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(o){try{this.player.playbackRate=o}catch(r){this.props.onError(r)}}getDuration(){if(!this.player)return null;let{duration:o,seekable:r}=this.player;return o===1/0&&r.length>0?r.end(r.length-1):o}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;let{buffered:o}=this.player;if(o.length===0)return 0;let r=o.end(o.length-1),n=this.getDuration();return n!==null&&r>n?n:r}getSource(o){if(!(kt(o)||this.shouldUseHLS(o)||this.shouldUseDASH(o)||this.shouldUseFLV(o)))return o}render(){var m;let{url:o,playing:r,loop:n,muted:i,config:s,width:l,height:a,viewType:u}=this.props,p=u==="audio",c=p?{display:"none"}:{width:l==="auto"?l:"100%",height:a==="auto"?a:"100%"};return jn.default.createElement(p?"audio":"video",{"data-testid":p?"audio-element":"video-element",ref:this.ref,src:this.getSource(o),style:c,preload:"auto",autoPlay:r||void 0,controls:!1,muted:i,loop:n,...s.attributes},(m=s.tracks)==null?void 0:m.map(this.renderTrack))}};B(rr,"displayName","PlayerCore"),B(rr,"canPlay",Jo)});var El=po((x2,Ll)=>{"use strict";var Pm=function(t){return Tm(t)&&!Lm(t)};function Tm(e){return!!e&&typeof e=="object"}function Lm(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Im(e)}var Em=typeof Symbol=="function"&&Symbol.for,Mm=Em?Symbol.for("react.element"):60103;function Im(e){return e.$$typeof===Mm}function Am(e){return Array.isArray(e)?[]:{}}function Ur(e,t){return t.clone!==!1&&t.isMergeableObject(e)?nr(Am(e),e,t):e}function Om(e,t,o){return e.concat(t).map(function(r){return Ur(r,o)})}function Rm(e,t){if(!t.customMerge)return nr;var o=t.customMerge(e);return typeof o=="function"?o:nr}function Dm(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function Pl(e){return Object.keys(e).concat(Dm(e))}function Tl(e,t){try{return t in e}catch{return!1}}function Bm(e,t){return Tl(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function Nm(e,t,o){var r={};return o.isMergeableObject(e)&&Pl(e).forEach(function(n){r[n]=Ur(e[n],o)}),Pl(t).forEach(function(n){Bm(e,n)||(Tl(e,n)&&o.isMergeableObject(t[n])?r[n]=Rm(n,o)(e[n],t[n],o):r[n]=Ur(t[n],o))}),r}function nr(e,t,o){o=o||{},o.arrayMerge=o.arrayMerge||Om,o.isMergeableObject=o.isMergeableObject||Pm,o.cloneUnlessOtherwiseSpecified=Ur;var r=Array.isArray(t),n=Array.isArray(e),i=r===n;return i?r?o.arrayMerge(e,t,o):Nm(e,t,o):Ur(t,o)}nr.all=function(t,o){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,n){return nr(r,n,o)},{})};var qm=nr;Ll.exports=qm});var Yr=po((w2,Il)=>{var $m=typeof Element!="undefined",Hm=typeof Map=="function",zm=typeof Set=="function",jm=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Un(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,n;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!Un(e[r],t[r]))return!1;return!0}var i;if(Hm&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!Un(r.value[1],t.get(r.value[0])))return!1;return!0}if(zm&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(jm&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),o=n.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[r]))return!1;if($m&&e instanceof Element)return!1;for(r=o;r--!==0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&e.$$typeof)&&!Un(e[n[r]],t[n[r]]))return!1;return!0}return e!==e&&t!==t}Il.exports=function(t,o){try{return Un(t,o)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}});var Ol=po((k2,Al)=>{"use strict";var Um="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";Al.exports=Um});var Nl=po((P2,Bl)=>{"use strict";var Wm=Ol();function Rl(){}function Dl(){}Dl.resetWarningCache=Rl;Bl.exports=function(){function e(r,n,i,s,l,a){if(a!==Wm){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Dl,resetWarningCache:Rl};return o.PropTypes=o,o}});var G=po((E2,ql)=>{ql.exports=Nl()();var T2,L2});var Yl=po(($2,Wl)=>{Wl.exports=function(t,o,r,n){var i=r?r.call(n,t,o):void 0;if(i!==void 0)return!!i;if(t===o)return!0;if(typeof t!="object"||!t||typeof o!="object"||!o)return!1;var s=Object.keys(t),l=Object.keys(o);if(s.length!==l.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(o),u=0;u<s.length;u++){var p=s[u];if(!a(p))return!1;var c=t[p],f=o[p];if(i=r?r.call(n,c,f,p):void 0,i===!1||i===void 0&&c!==f)return!1}return!0}});var Mh={};Qa(Mh,{default:()=>Eh});Ne();vs();var kl={key:"core",name:"PlayerCore",canPlay:Jo,canEnablePIP:e=>Jo(e)&&(document.pictureInPictureEnabled||Xt()),lazyPlayer:Sl(()=>Promise.resolve().then(()=>(wl(),Cl)))};var Qo=h(T()),sm=h(El());var Ml=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Fm(e,t){return!!(e===t||Ml(e)&&Ml(t))}function _m(e,t){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o++)if(!Fm(e[o],t[o]))return!1;return!0}function Vm(e,t){t===void 0&&(t=_m);var o,r=[],n,i=!1;function s(){for(var l=[],a=0;a<arguments.length;a++)l[a]=arguments[a];return i&&o===this&&t(l,r)||(n=e.apply(this,l),i=!0,o=this,r=l),n}return s}var Wr=Vm;var Wa=h(Yr());var J=h(G());Ne();var Ym={en:mo,es:ho},{string:Pt,bool:Ge,number:Xr,array:Xm,oneOfType:xs,shape:Fl,object:_l,func:Re}=J.default,Vl=Object.keys(Ym),Qm={url:Pt,playing:Ge,loop:Ge,volume:Xr,muted:Ge,playbackRate:Xr,width:xs([Pt,Xr]),height:xs([Pt,Xr]),progressInterval:Xr,playsinline:Ge,language:J.default.oneOf(Vl),stopOnUnmount:Ge,fallback:J.node,waiting:Ge,prevented:Ge,wrapper:xs([Pt,Re,Fl({render:Re.isRequired})]),skinMode:J.default.oneOf(["auto","mobile","desktop"]),config:Fl({attributes:_l,tracks:Xm,forceHLS:Ge,forceSafariHLS:Ge,forceDisableHls:Ge,forceDASH:Ge,forceFLV:Ge,hlsOptions:_l,hlsVersion:Pt,dashVersion:Pt,flvVersion:Pt}),onReady:Re,onStart:Re,onPlay:Re,onPause:Re,onBuffer:Re,onBufferEnd:Re,onEnded:Re,onError:Re,onDuration:Re,onSeek:Re,onPlayBackRateChange:Re,onProgress:Re,onPrevious:Re,onNext:Re,showNavButtons:Ge},Gm={sources:J.default.arrayOf(J.default.shape({src:J.default.string.isRequired,resolution:J.default.number.isRequired}).isRequired),fullHDQualityBreak:J.default.number,spriteVTTFile:J.default.string,chapters:J.default.arrayOf(J.default.shape({title:J.default.string.isRequired,startTime:J.default.number.isRequired})),captions:J.default.arrayOf(J.default.shape({src:J.default.string.isRequired,label:J.default.string.isRequired,language:J.default.string.isRequired,kind:J.default.string})),heatmapData:J.default.arrayOf(J.default.shape({startTime:J.default.number.isRequired,endTime:J.default.number.isRequired,value:J.default.number.isRequired})),live:Ge,poster:Pt,pip:Ge,onPlayBackQualityChange:Re,onEnablePIP:Re,onDisablePIP:Re},Km={title:Pt,artist:Pt,poster:Pt,captions:J.default.arrayOf(J.default.shape({src:J.default.string.isRequired,label:J.default.string.isRequired,language:J.default.string.isRequired,kind:J.default.string}))},Cs={viewType:J.default.oneOf(["video","audio"]),...Qm,...Gm,...Km},Qe=()=>{},Wn={viewType:"video",url:"",sources:[],chapters:[],captions:[],heatmapData:[],playing:!1,loop:!1,live:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,fallback:null,waiting:!1,prevented:!1,wrapper:"div",skinMode:"auto",language:Vl[0],poster:"",title:"",artist:"",config:{attributes:{},tracks:[],forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:Qe,onStart:Qe,onPlay:Qe,onPause:Qe,onBuffer:Qe,onBufferEnd:Qe,onEnded:Qe,onError:Qe,onDuration:Qe,onSeek:Qe,onPlayBackRateChange:Qe,onPlayBackQualityChange:Qe,onProgress:Qe,onEnablePIP:Qe,onDisablePIP:Qe};var De=h(T()),Zf=h(Yr());var ws=h(T()),Ul=h(Yr());var Yn=h(G()),{string:ir,bool:ht,number:Qr,array:Zm,oneOfType:$l,shape:Jm,object:Hl,func:Ke}=Yn.default,zl={url:ir,fullHDQualityBreak:Yn.default.number,spriteVTTFile:Yn.default.string,playing:ht,loop:ht,volume:Qr,muted:ht,playbackRate:Qr,width:$l([ir,Qr]),height:$l([ir,Qr]),progressInterval:Qr,playsinline:ht,pip:ht,stopOnUnmount:ht,config:Jm({attributes:Hl,tracks:Zm,forceVideo:ht,forceHLS:ht,forceSafariHLS:ht,forceDisableHls:ht,forceDASH:ht,forceFLV:ht,hlsOptions:Hl,hlsVersion:ir,dashVersion:ir,flvVersion:ir}),onReady:Ke,onStart:Ke,onPlay:Ke,onPause:Ke,onBuffer:Ke,onBufferEnd:Ke,onEnded:Ke,onError:Ke,onDuration:Ke,onSeek:Ke,onPlayBackRateChange:Ke,onPlayBackQualityChange:Ke,onProgress:Ke,onEnablePIP:Ke,onDisablePIP:Ke},Ze=()=>{},jl={playing:!1,loop:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:Ze,onStart:Ze,onPlay:Ze,onPause:Ze,onBuffer:Ze,onBufferEnd:Ze,onEnded:Ze,onError:Ze,onDuration:Ze,onSeek:Ze,onPlayBackRateChange:Ze,onPlayBackQualityChange:Ze,onProgress:Ze,onEnablePIP:Ze,onDisablePIP:Ze};Nt();var e0=5e3,yt=class extends ws.default.Component{constructor(){super(...arguments);B(this,"progressTimeout",0);B(this,"durationCheckTimeout",0);B(this,"seekOnPlayTimeout",0);B(this,"volumeTimeout",0);B(this,"prevPlayed",0);B(this,"prevLoaded",0);B(this,"player",null);B(this,"loadOnReady",null);B(this,"seekOnPlay",null);B(this,"mounted",!1);B(this,"isReady",!1);B(this,"isPlaying",!1);B(this,"isLoading",!0);B(this,"isSwitchingQuality",!1);B(this,"startOnPlay",!0);B(this,"onDurationCalled",!1);B(this,"handlePlayerMount",o=>{this.player=o,this.player.load(this.props.url),this.progress()});B(this,"getInternalPlayer",o=>this.player?this.player[o]:null);B(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady&&this.mounted){let o=this.getCurrentTime()||0,r=this.getSecondsLoaded(),n=this.getDuration();if(n){let i={playedSeconds:o,played:o/n,loadedSeconds:null};r!==null&&(i.loadedSeconds=r,i.loaded=r/n),(i.playedSeconds!==this.prevPlayed||i.loadedSeconds!==this.prevLoaded)&&this.props.onProgress({loaded:i.loaded,loadedSeconds:i.loadedSeconds,played:i.played,playedSeconds:i.playedSeconds}),this.prevPlayed=i.playedSeconds,i.loadedSeconds!==void 0&&(this.prevLoaded=i.loadedSeconds)}}this.isPlaying&&this.mounted&&(this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval))});B(this,"handleReady",()=>{if(this.mounted===!1)return;this.isReady=!0,this.isLoading=!1;let{onReady:o,playing:r,volume:n,muted:i}=this.props;o&&o(),!i&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):(r||this.isSwitchingQuality)&&this.player.play(),this.handleDurationCheck()});B(this,"handlePlay",o=>{this.isPlaying=!0,this.isLoading=!1,this.isSwitchingQuality=!1;let{onStart:r,onPlay:n,playbackRate:i}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&i!==1&&this.player.setPlaybackRate(i),r&&r(),this.startOnPlay=!1),n&&n(o),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck(),clearTimeout(this.progressTimeout),this.progress()});B(this,"handlePause",o=>{this.isPlaying=!1,!this.isLoading&&!this.isSwitchingQuality&&this.props.onPause&&this.props.onPause(o)});B(this,"handleEnded",()=>{let{activePlayer:o,loop:r,onEnded:n}=this.props;if(r===!0){o.defaultProps!==void 0&&o.defaultProps.config!==void 0&&o.defaultProps.config.loopOnEnded&&this.seekTo(0);return}this.isPlaying=!1,n&&n()});B(this,"handleError",(o,r,n,i)=>{this.isLoading=!1,this.props.onError&&this.props.onError(o,r,n,i)});B(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);let o=this.getDuration();o?!this.onDurationCalled&&this.props.onDuration&&(this.props.onDuration(o),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)});B(this,"handleLoaded",()=>{this.isReady&&!this.startOnPlay&&(this.isLoading=!1)})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),clearTimeout(this.seekOnPlayTimeout),clearTimeout(this.volumeTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(o){if(!this.player)return;let{url:r,playing:n,volume:i,muted:s,playbackRate:l,playbackQuality:a,pip:u,activePlayer:p,disableDeferredLoading:c}=this.props;if((0,Ul.default)(o.url,r)===!1){if(clearTimeout(this.progressTimeout),this.isLoading&&!(p!=null&&p.forceLoad)&&!c&&!kt(r)){console.warn(`PlayerStack: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,o.playbackQuality!==a&&(this.seekOnPlay=this.prevPlayed,this.isSwitchingQuality=!0),this.player.load(r,this.isReady);return}if(o.playing===!1&&n&&this.isPlaying===!1&&this.player.play(),o.playing&&n===!1&&this.isPlaying&&this.player.pause(),o.pip===!1&&u&&this.player.enablePIP&&this.player.enablePIP(),o.pip&&u===!1&&this.player.disablePIP&&this.player.disablePIP(),o.volume!==i&&i!==null&&this.player.setVolume(i),o.muted!==s&&(s?this.player.mute():(this.player.unmute(),i!==null&&(clearTimeout(this.volumeTimeout),this.volumeTimeout=setTimeout(()=>{this.mounted&&this.player&&this.player.setVolume(i)})))),o.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l),o.activeCaption!==this.props.activeCaption){let f=this.player.getPlayer();if(f&&f.textTracks)for(let m=0;m<f.textTracks.length;m++){let y=f.textTracks[m];this.props.activeCaption===null?y.mode="disabled":y.language===this.props.activeCaption?y.mode="hidden":y.mode="disabled"}}}getDuration(){return this.isReady===!1?null:this.player.getDuration()}getCurrentTime(){return this.isReady===!1?null:this.player.getCurrentTime()}getSecondsLoaded(){return this.isReady===!1?null:this.player.getSecondsLoaded()}getPlayer(){return this.player.getPlayer()}seekTo(o,r,n){if(this.isReady===!1){o!==0&&(this.seekOnPlay=o,this.seekOnPlayTimeout=setTimeout(()=>{this.seekOnPlay=null},e0));return}if(r?r==="fraction":o>0&&o<1){let s=this.player.getDuration();if(!s){console.warn("PlayerStack: could not seek using fraction \u2013\xA0duration not yet available");return}this.player.seekTo(s*o,n);return}this.player.seekTo(o,n)}render(){let o=this.props.activePlayer;return o?ws.default.createElement(o,{loop:this.props.loop,muted:this.props.muted,playsinline:this.props.playsinline,url:this.props.url,width:this.props.width,height:this.props.height,playing:this.props.playing,viewType:this.props.viewType,config:this.props.config,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onEnablePIP:this.props.onEnablePIP,onPlayBackRateChange:this.props.onPlayBackRateChange,onSeek:this.props.onSeek}):null}};B(yt,"displayName","PlayerProxy"),B(yt,"propTypes",zl),B(yt,"defaultProps",jl);var An=h(T()),Z=h(G());var In=h(T()),F=h(G());var te=h(T());var rt=h(T()),Ro=h(G());var je=function(){return je=Object.assign||function(t){for(var o,r=1,n=arguments.length;r<n;r++){o=arguments[r];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},je.apply(this,arguments)};function sr(e,t,o){if(o||arguments.length===2)for(var r=0,n=t.length,i;r<n;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ve=h(T()),Pu=h(Yl());var ce="-ms-",Lo="-moz-",oe="-webkit-",Xn="comm",yo="rule",ar="decl";var Xl="@import";var Qn="@keyframes";var Ql="@layer";var ks=Math.abs,Gr=String.fromCharCode,Kr=Object.assign;function Gl(e,t){return Se(e,0)^45?(((t<<2^Se(e,0))<<2^Se(e,1))<<2^Se(e,2))<<2^Se(e,3):0}function Gn(e){return e.trim()}function Tt(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,o){return e.replace(t,o)}function lr(e,t,o){return e.indexOf(t,o)}function Se(e,t){return e.charCodeAt(t)|0}function qt(e,t,o){return e.slice(t,o)}function Je(e){return e.length}function Kn(e){return e.length}function Eo(e,t){return t.push(e),e}function Kl(e,t){return e.map(t).join("")}function Ps(e,t){return e.filter(function(o){return!Tt(o,t)})}var Zn=1,ur=1,Zl=0,gt=0,Pe=0,cr="";function Zr(e,t,o,r,n,i,s,l){return{value:e,root:t,parent:o,type:r,props:n,children:i,line:Zn,column:ur,length:s,return:"",siblings:l}}function Qt(e,t){return Kr(Zr("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mo(e){for(;e.root;)e=Qt(e.root,{children:[e]});Eo(e,e.siblings)}function Jl(){return Pe}function eu(){return Pe=gt>0?Se(cr,--gt):0,ur--,Pe===10&&(ur=1,Zn--),Pe}function bt(){return Pe=gt<Zl?Se(cr,gt++):0,ur++,Pe===10&&(ur=1,Zn++),Pe}function go(){return Se(cr,gt)}function Jr(){return gt}function Jn(e,t){return qt(cr,e,t)}function Ts(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tu(e){return Zn=ur=1,Zl=Je(cr=e),gt=0,[]}function ou(e){return cr="",e}function ei(e){return Gn(Jn(gt-1,Ls(e===91?e+2:e===40?e+1:e)))}function ru(e){for(;(Pe=go())&&Pe<33;)bt();return Ts(e)>2||Ts(Pe)>3?"":" "}function nu(e,t){for(;--t&&bt()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return Jn(e,Jr()+(t<6&&go()==32&&bt()==32))}function Ls(e){for(;bt();)switch(Pe){case e:return gt;case 34:case 39:e!==34&&e!==39&&Ls(Pe);break;case 40:e===41&&Ls(e);break;case 92:bt();break}return gt}function iu(e,t){for(;bt()&&e+Pe!==57;)if(e+Pe===84&&go()===47)break;return"/*"+Jn(t,gt-1)+"*"+Gr(e===47?e:bt())}function su(e){for(;!Ts(go());)bt();return Jn(e,gt)}function uu(e){return ou(ti("",null,null,null,[""],e=tu(e),0,[0],e))}function ti(e,t,o,r,n,i,s,l,a){for(var u=0,p=0,c=s,f=0,m=0,y=0,x=1,v=1,w=1,S=0,b="",M=n,L=i,k=r,I=b;v;)switch(y=S,S=bt()){case 40:if(y!=108&&Se(I,c-1)==58){lr(I+=U(ei(S),"&","&\f"),"&\f",ks(u?l[u-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:I+=ei(S);break;case 9:case 10:case 13:case 32:I+=ru(y);break;case 92:I+=nu(Jr()-1,7);continue;case 47:switch(go()){case 42:case 47:Eo(t0(iu(bt(),Jr()),t,o,a),a);break;default:I+="/"}break;case 123*x:l[u++]=Je(I)*w;case 125*x:case 59:case 0:switch(S){case 0:case 125:v=0;case 59+p:w==-1&&(I=U(I,/\f/g,"")),m>0&&Je(I)-c&&Eo(m>32?lu(I+";",r,o,c-1,a):lu(U(I," ","")+";",r,o,c-2,a),a);break;case 59:I+=";";default:if(Eo(k=au(I,t,o,u,p,n,l,b,M=[],L=[],c,i),i),S===123)if(p===0)ti(I,t,k,k,M,i,c,l,L);else switch(f===99&&Se(I,3)===110?100:f){case 100:case 108:case 109:case 115:ti(e,k,k,r&&Eo(au(e,k,k,0,0,n,l,b,n,M=[],c,L),L),n,L,c,l,r?M:L);break;default:ti(I,k,k,k,[""],L,0,l,L)}}u=p=m=0,x=w=1,b=I="",c=s;break;case 58:c=1+Je(I),m=y;default:if(x<1){if(S==123)--x;else if(S==125&&x++==0&&eu()==125)continue}switch(I+=Gr(S),S*x){case 38:w=p>0?1:(I+="\f",-1);break;case 44:l[u++]=(Je(I)-1)*w,w=1;break;case 64:go()===45&&(I+=ei(bt())),f=go(),p=c=Je(b=I+=su(Jr())),S++;break;case 45:y===45&&Je(I)==2&&(x=0)}}return i}function au(e,t,o,r,n,i,s,l,a,u,p,c){for(var f=n-1,m=n===0?i:[""],y=Kn(m),x=0,v=0,w=0;x<r;++x)for(var S=0,b=qt(e,f+1,f=ks(v=s[x])),M=e;S<y;++S)(M=Gn(v>0?m[S]+" "+b:U(b,/&\f/g,m[S])))&&(a[w++]=M);return Zr(e,t,o,n===0?yo:l,a,u,p,c)}function t0(e,t,o,r){return Zr(e,t,o,Xn,Gr(Jl()),qt(e,2,-2),0,r)}function lu(e,t,o,r,n){return Zr(e,t,o,ar,qt(e,0,r),qt(e,r+1,-1),r,n)}function Es(e,t,o){switch(Gl(e,t)){case 5103:return oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return oe+e+e;case 4789:return Lo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return oe+e+Lo+e+ce+e+e;case 5936:switch(Se(e,t+11)){case 114:return oe+e+ce+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return oe+e+ce+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return oe+e+ce+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return oe+e+ce+e+e;case 6165:return oe+e+ce+"flex-"+e+e;case 5187:return oe+e+U(e,/(\w+).+(:[^]+)/,oe+"box-$1$2"+ce+"flex-$1$2")+e;case 5443:return oe+e+ce+"flex-item-"+U(e,/flex-|-self/g,"")+(Tt(e,/flex-|baseline/)?"":ce+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return oe+e+ce+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return oe+e+ce+U(e,"shrink","negative")+e;case 5292:return oe+e+ce+U(e,"basis","preferred-size")+e;case 6060:return oe+"box-"+U(e,"-grow","")+oe+e+ce+U(e,"grow","positive")+e;case 4554:return oe+U(e,/([^-])(transform)/g,"$1"+oe+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,oe+"$1"),/(image-set)/,oe+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,oe+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,oe+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+oe+e+e;case 4200:if(!Tt(e,/flex-|baseline/))return ce+"grid-column-align"+qt(e,t)+e;break;case 2592:case 3360:return ce+U(e,"template-","")+e;case 4384:case 3616:return o&&o.some(function(r,n){return t=n,Tt(r.props,/grid-\w+-end/)})?~lr(e+(o=o[t].value),"span",0)?e:ce+U(e,"-start","")+e+ce+"grid-row-span:"+(~lr(o,"span",0)?Tt(o,/\d+/):+Tt(o,/\d+/)-+Tt(e,/\d+/))+";":ce+U(e,"-start","")+e;case 4896:case 4128:return o&&o.some(function(r){return Tt(r.props,/grid-\w+-start/)})?e:ce+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(Se(e,t+1)){case 109:if(Se(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+oe+"$2-$3$1"+Lo+(Se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~lr(e,"stretch",0)?Es(U(e,"stretch","fill-available"),t,o)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,i,s,l,a,u){return ce+n+":"+i+u+(s?ce+n+"-span:"+(l?a:+a-+i)+u:"")+e});case 4949:if(Se(e,t+6)===121)return U(e,":",":"+oe)+e;break;case 6444:switch(Se(e,Se(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+oe+(Se(e,14)===45?"inline-":"")+"box$3$1"+oe+"$2$3$1"+ce+"$2box$3")+e;case 100:return U(e,":",":"+ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function pr(e,t){for(var o="",r=0;r<e.length;r++)o+=t(e[r],r,e,t)||"";return o}function cu(e,t,o,r){switch(e.type){case Ql:if(e.children.length)break;case Xl:case ar:return e.return=e.return||e.value;case Xn:return"";case Qn:return e.return=e.value+"{"+pr(e.children,r)+"}";case yo:if(!Je(e.value=e.props.join(",")))return""}return Je(o=pr(e.children,r))?e.return=e.value+"{"+o+"}":""}function pu(e){var t=Kn(e);return function(o,r,n,i){for(var s="",l=0;l<t;l++)s+=e[l](o,r,n,i)||"";return s}}function du(e){return function(t){t.root||(t=t.return)&&e(t)}}function fu(e,t,o,r){if(e.length>-1&&!e.return)switch(e.type){case ar:e.return=Es(e.value,e.length,o);return;case Qn:return pr([Qt(e,{value:U(e.value,"@","@"+oe)})],r);case yo:if(e.length)return Kl(o=e.props,function(n){switch(Tt(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mo(Qt(e,{props:[U(n,/:(read-\w+)/,":"+Lo+"$1")]})),Mo(Qt(e,{props:[n]})),Kr(e,{props:Ps(o,r)});break;case"::placeholder":Mo(Qt(e,{props:[U(n,/:(plac\w+)/,":"+oe+"input-$1")]})),Mo(Qt(e,{props:[U(n,/:(plac\w+)/,":"+Lo+"$1")]})),Mo(Qt(e,{props:[U(n,/:(plac\w+)/,ce+"input-$1")]})),Mo(Qt(e,{props:[n]})),Kr(e,{props:Ps(o,r)});break}return""})}}var mu={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var Kt=typeof process!="undefined"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Tu="active",si="data-styled-version",fr="6.1.14",Fs=`/*!sc*/
`,ai=typeof window!="undefined"&&"HTMLElement"in window,o0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY);var ui=Object.freeze([]),mr=Object.freeze({});function r0(e,t,o){return o===void 0&&(o=mr),e.theme!==o.theme&&e.theme||t||o.theme}var Lu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),n0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,i0=/(^-|-$)/g;function hu(e){return e.replace(n0,"-").replace(i0,"")}var s0=/(a)(d)/gi,oi=52,yu=function(e){return String.fromCharCode(e+(e>25?39:97))};function Os(e){var t,o="";for(t=Math.abs(e);t>oi;t=t/oi|0)o=yu(t%oi)+o;return(yu(t%oi)+o).replace(s0,"$1-$2")}var Ms,Eu=5381,dr=function(e,t){for(var o=t.length;o;)e=33*e^t.charCodeAt(--o);return e},Mu=function(e){return dr(Eu,e)};function Iu(e){return Os(Mu(e)>>>0)}function a0(e){return e.displayName||e.name||"Component"}function Is(e){return typeof e=="string"&&!0}var Au=typeof Symbol=="function"&&Symbol.for,Ou=Au?Symbol.for("react.memo"):60115,l0=Au?Symbol.for("react.forward_ref"):60112,u0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ru={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p0=((Ms={})[l0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ms[Ou]=Ru,Ms);function gu(e){return("type"in(t=e)&&t.type.$$typeof)===Ou?Ru:"$$typeof"in e?p0[e.$$typeof]:u0;var t}var d0=Object.defineProperty,f0=Object.getOwnPropertyNames,bu=Object.getOwnPropertySymbols,m0=Object.getOwnPropertyDescriptor,h0=Object.getPrototypeOf,Su=Object.prototype;function Du(e,t,o){if(typeof t!="string"){if(Su){var r=h0(t);r&&r!==Su&&Du(e,r,o)}var n=f0(t);bu&&(n=n.concat(bu(t)));for(var i=gu(e),s=gu(t),l=0;l<n.length;++l){var a=n[l];if(!(a in c0||o&&o[a]||s&&a in s||i&&a in i)){var u=m0(t,a);try{d0(e,a,u)}catch{}}}}return e}function hr(e){return typeof e=="function"}function _s(e){return typeof e=="object"&&"styledComponentId"in e}function Io(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function en(e,t){if(e.length===0)return"";for(var o=e[0],r=1;r<e.length;r++)o+=t?t+e[r]:e[r];return o}function tn(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Rs(e,t,o){if(o===void 0&&(o=!1),!o&&!tn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Rs(e[r],t[r]);else if(tn(t))for(var r in t)e[r]=Rs(e[r],t[r]);return e}function Vs(e,t){Object.defineProperty(e,"toString",{value:t})}function Gt(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var y0=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var o=0,r=0;r<t;r++)o+=this.groupSizes[r];return o},e.prototype.insertRules=function(t,o){if(t>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;t>=i;)if((i<<=1)<0)throw Gt(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=n;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,o.length);s<a;s++)this.tag.insertRule(l,o[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var o=this.groupSizes[t],r=this.indexOfGroup(t),n=r+o;this.groupSizes[t]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var o="";if(t>=this.length||this.groupSizes[t]===0)return o;for(var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r,s=n;s<i;s++)o+="".concat(this.tag.getRule(s)).concat(Fs);return o},e}(),gy=1<<30,ni=new Map,li=new Map,ii=1,ri=function(e){if(ni.has(e))return ni.get(e);for(;li.has(ii);)ii++;var t=ii++;return ni.set(e,t),li.set(t,e),t},g0=function(e,t){ii=t+1,ni.set(e,t),li.set(t,e)},b0="style[".concat(Kt,"][").concat(si,'="').concat(fr,'"]'),S0=new RegExp("^".concat(Kt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),v0=function(e,t,o){for(var r,n=o.split(","),i=0,s=n.length;i<s;i++)(r=n[i])&&e.registerName(t,r)},x0=function(e,t){for(var o,r=((o=t.textContent)!==null&&o!==void 0?o:"").split(Fs),n=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var a=l.match(S0);if(a){var u=0|parseInt(a[1],10),p=a[2];u!==0&&(g0(p,u),v0(e,p,a[3]),e.getTag().insertRules(u,n)),n.length=0}else n.push(l)}}},vu=function(e){for(var t=document.querySelectorAll(b0),o=0,r=t.length;o<r;o++){var n=t[o];n&&n.getAttribute(Kt)!==Tu&&(x0(e,n),n.parentNode&&n.parentNode.removeChild(n))}};function Ds(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Bu=function(e){var t=document.head,o=e||t,r=document.createElement("style"),n=function(l){var a=Array.from(l.querySelectorAll("style[".concat(Kt,"]")));return a[a.length-1]}(o),i=n!==void 0?n.nextSibling:null;r.setAttribute(Kt,Tu),r.setAttribute(si,fr);var s=Ds();return s&&r.setAttribute("nonce",s),o.insertBefore(r,i),r},C0=function(){function e(t){this.element=Bu(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,n=0,i=r.length;n<i;n++){var s=r[n];if(s.ownerNode===o)return s}throw Gt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,o){try{return this.sheet.insertRule(o,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var o=this.sheet.cssRules[t];return o&&o.cssText?o.cssText:""},e}(),w0=function(){function e(t){this.element=Bu(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,o){if(t<=this.length&&t>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),k0=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,o){return t<=this.length&&(this.rules.splice(t,0,o),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),xu=ai,P0={isServer:!ai,useCSSOMInjection:!o0},on=function(){function e(t,o,r){t===void 0&&(t=mr),o===void 0&&(o={});var n=this;this.options=je(je({},P0),t),this.gs=o,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ai&&xu&&(xu=!1,vu(this)),Vs(this,function(){return function(i){for(var s=i.getTag(),l=s.length,a="",u=function(c){var f=function(w){return li.get(w)}(c);if(f===void 0)return"continue";var m=i.names.get(f),y=s.getGroup(c);if(m===void 0||!m.size||y.length===0)return"continue";var x="".concat(Kt,".g").concat(c,'[id="').concat(f,'"]'),v="";m!==void 0&&m.forEach(function(w){w.length>0&&(v+="".concat(w,","))}),a+="".concat(y).concat(x,'{content:"').concat(v,'"}').concat(Fs)},p=0;p<l;p++)u(p);return a}(n)})}return e.registerId=function(t){return ri(t)},e.prototype.rehydrate=function(){!this.server&&ai&&vu(this)},e.prototype.reconstructWithOptions=function(t,o){return o===void 0&&(o=!0),new e(je(je({},this.options),t),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(o){var r=o.useCSSOMInjection,n=o.target;return o.isServer?new k0(n):r?new C0(n):new w0(n)}(this.options),new y0(t)));var t},e.prototype.hasNameForId=function(t,o){return this.names.has(t)&&this.names.get(t).has(o)},e.prototype.registerName=function(t,o){if(ri(t),this.names.has(t))this.names.get(t).add(o);else{var r=new Set;r.add(o),this.names.set(t,r)}},e.prototype.insertRules=function(t,o,r){this.registerName(t,o),this.getTag().insertRules(ri(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ri(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),T0=/&/g,L0=/^\s*\/\/.*$/gm;function Nu(e,t){return e.map(function(o){return o.type==="rule"&&(o.value="".concat(t," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(t," ")),o.props=o.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Nu(o.children,t)),o})}function qu(e){var t,o,r,n=e===void 0?mr:e,i=n.options,s=i===void 0?mr:i,l=n.plugins,a=l===void 0?ui:l,u=function(f,m,y){return y.startsWith(o)&&y.endsWith(o)&&y.replaceAll(o,"").length>0?".".concat(t):f},p=a.slice();p.push(function(f){f.type===yo&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(T0,o).replace(r,u))}),s.prefix&&p.push(fu),p.push(cu);var c=function(f,m,y,x){m===void 0&&(m=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,o=m,r=new RegExp("\\".concat(o,"\\b"),"g");var v=f.replace(L0,""),w=uu(y||m?"".concat(y," ").concat(m," { ").concat(v," }"):v);s.namespace&&(w=Nu(w,s.namespace));var S=[];return pr(w,pu(p.concat(du(function(b){return S.push(b)})))),S};return c.hash=a.length?a.reduce(function(f,m){return m.name||Gt(15),dr(f,m.name)},Eu).toString():"",c}var E0=new on,Bs=qu(),$s=ve.default.createContext({shouldForwardProp:void 0,styleSheet:E0,stylis:Bs}),by=$s.Consumer,M0=ve.default.createContext(void 0);function Ns(){return(0,ve.useContext)($s)}function I0(e){var t=(0,ve.useState)(e.stylisPlugins),o=t[0],r=t[1],n=Ns().styleSheet,i=(0,ve.useMemo)(function(){var a=n;return e.sheet?a=e.sheet:e.target&&(a=a.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(a=a.reconstructWithOptions({useCSSOMInjection:!1})),a},[e.disableCSSOMInjection,e.sheet,e.target,n]),s=(0,ve.useMemo)(function(){return qu({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:o})},[e.enableVendorPrefixes,e.namespace,o]);(0,ve.useEffect)(function(){(0,Pu.default)(o,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,ve.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:s}},[e.shouldForwardProp,i,s]);return ve.default.createElement($s.Provider,{value:l},ve.default.createElement(M0.Provider,{value:s},e.children))}var Fu=function(){function e(t,o){var r=this;this.inject=function(n,i){i===void 0&&(i=Bs);var s=r.name+i.hash;n.hasNameForId(r.id,s)||n.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=o,Vs(this,function(){throw Gt(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Bs),this.name+t.hash},e}(),A0=function(e){return e>="A"&&e<="Z"};function Cu(e){for(var t="",o=0;o<e.length;o++){var r=e[o];if(o===1&&r==="-"&&e[0]==="-")return e;A0(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var _u=function(e){return e==null||e===!1||e===""},Vu=function(e){var t,o,r=[];for(var n in e){var i=e[n];e.hasOwnProperty(n)&&!_u(i)&&(Array.isArray(i)&&i.isCss||hr(i)?r.push("".concat(Cu(n),":"),i,";"):tn(i)?r.push.apply(r,sr(sr(["".concat(n," {")],Vu(i),!1),["}"],!1)):r.push("".concat(Cu(n),": ").concat((t=n,(o=i)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||t in mu||t.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function bo(e,t,o,r){if(_u(e))return[];if(_s(e))return[".".concat(e.styledComponentId)];if(hr(e)){if(!hr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var n=e(t);return bo(n,t,o,r)}var i;return e instanceof Fu?o?(e.inject(o,r),[e.getName(r)]):[e]:tn(e)?Vu(e):Array.isArray(e)?Array.prototype.concat.apply(ui,e.map(function(s){return bo(s,t,o,r)})):[e.toString()]}function $u(e){for(var t=0;t<e.length;t+=1){var o=e[t];if(hr(o)&&!_s(o))return!1}return!0}var O0=Mu(fr),R0=function(){function e(t,o,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$u(t),this.componentId=o,this.baseHash=dr(O0,o),this.baseStyle=r,on.registerId(o)}return e.prototype.generateAndInjectStyles=function(t,o,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))n=Io(n,this.staticRulesId);else{var i=en(bo(this.rules,t,o,r)),s=Os(dr(this.baseHash,i)>>>0);if(!o.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);o.insertRules(this.componentId,s,l)}n=Io(n,s),this.staticRulesId=s}else{for(var a=dr(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var c=this.rules[p];if(typeof c=="string")u+=c;else if(c){var f=en(bo(c,t,o,r));a=dr(a,f+p),u+=f}}if(u){var m=Os(a>>>0);o.hasNameForId(this.componentId,m)||o.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),n=Io(n,m)}}return n},e}(),Hu=ve.default.createContext(void 0),Sy=Hu.Consumer;var As={};function D0(e,t,o){var r=_s(e),n=e,i=!Is(e),s=t.attrs,l=s===void 0?ui:s,a=t.componentId,u=a===void 0?function(M,L){var k=typeof M!="string"?"sc":hu(M);As[k]=(As[k]||0)+1;var I="".concat(k,"-").concat(Iu(fr+k+As[k]));return L?"".concat(L,"-").concat(I):I}(t.displayName,t.parentComponentId):a,p=t.displayName,c=p===void 0?function(M){return Is(M)?"styled.".concat(M):"Styled(".concat(a0(M),")")}(e):p,f=t.displayName&&t.componentId?"".concat(hu(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&n.attrs?n.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&n.shouldForwardProp){var x=n.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;y=function(M,L){return x(M,L)&&v(M,L)}}else y=x}var w=new R0(o,f,r?n.componentStyle:void 0);function S(M,L){return function(k,I,q){var E=k.attrs,C=k.componentStyle,N=k.defaultProps,g=k.foldedComponentIds,P=k.styledComponentId,D=k.target,j=ve.default.useContext(Hu),z=Ns(),Y=k.shouldForwardProp||z.shouldForwardProp,ue=r0(I,j,N)||mr,A=function(xe,be,Fe){for(var _e,Ve=je(je({},be),{className:void 0,theme:Fe}),pt=0;pt<xe.length;pt+=1){var it=hr(_e=xe[pt])?_e(Ve):_e;for(var Ie in it)Ve[Ie]=Ie==="className"?Io(Ve[Ie],it[Ie]):Ie==="style"?je(je({},Ve[Ie]),it[Ie]):it[Ie]}return be.className&&(Ve.className=Io(Ve.className,be.className)),Ve}(E,I,ue),R=A.as||D,ne={};for(var H in A)A[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&A.theme===ue||(H==="forwardedAs"?ne.as=A.forwardedAs:Y&&!Y(H,R)||(ne[H]=A[H]));var pe=function(xe,be){var Fe=Ns(),_e=xe.generateAndInjectStyles(be,Fe.styleSheet,Fe.stylis);return _e}(C,A),de=Io(g,P);return pe&&(de+=" "+pe),A.className&&(de+=" "+A.className),ne[Is(R)&&!Lu.has(R)?"class":"className"]=de,q&&(ne.ref=q),(0,ve.createElement)(R,ne)}(b,M,L)}S.displayName=c;var b=ve.default.forwardRef(S);return b.attrs=m,b.componentStyle=w,b.displayName=c,b.shouldForwardProp=y,b.foldedComponentIds=r?Io(n.foldedComponentIds,n.styledComponentId):"",b.styledComponentId=f,b.target=r?n.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(M){this._foldedDefaultProps=r?function(L){for(var k=[],I=1;I<arguments.length;I++)k[I-1]=arguments[I];for(var q=0,E=k;q<E.length;q++)Rs(L,E[q],!0);return L}({},n.defaultProps,M):M}}),Vs(b,function(){return".".concat(b.styledComponentId)}),i&&Du(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function wu(e,t){for(var o=[e[0]],r=0,n=t.length;r<n;r+=1)o.push(t[r],e[r+1]);return o}var ku=function(e){return Object.assign(e,{isCss:!0})};function W(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];if(hr(e)||tn(e))return ku(bo(wu(ui,sr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?bo(r):ku(bo(wu(r,t)))}function qs(e,t,o){if(o===void 0&&(o=mr),!t)throw Gt(1,t);var r=function(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,o,W.apply(void 0,sr([n],i,!1)))};return r.attrs=function(n){return qs(e,t,je(je({},o),{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return qs(e,t,je(je({},o),n))},r}var zu=function(e){return qs(D0,e)},d=zu;Lu.forEach(function(e){d[e]=zu(e)});var vy=function(){function e(t,o){this.rules=t,this.componentId=o,this.isStatic=$u(t),on.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,o,r,n){var i=n(en(bo(this.rules,o,r,n)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,o){o.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,o,r,n){t>2&&on.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,o,r,n)},e}();function ci(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var r=en(W.apply(void 0,sr([e],t,!1))),n=Iu(r);return new Fu(n,r)}var xy=function(){function e(){var t=this;this._emitSheetCSS=function(){var o=t.instance.toString();if(!o)return"";var r=Ds(),n=en([r&&'nonce="'.concat(r,'"'),"".concat(Kt,'="true"'),"".concat(si,'="').concat(fr,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(o,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Gt(2);return t._emitSheetCSS()},this.getStyleElement=function(){var o;if(t.sealed)throw Gt(2);var r=t.instance.toString();if(!r)return[];var n=((o={})[Kt]="",o[si]=fr,o.dangerouslySetInnerHTML={__html:r},o),i=Ds();return i&&(n.nonce=i),[ve.default.createElement("style",je({},n,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new on({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw Gt(2);return ve.default.createElement(I0,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw Gt(3)},e}();var Cy="__sc-".concat(Kt,"__");var Oo=h(T());var Ao=h(G()),K={width:Ao.default.oneOfType([Ao.default.number,Ao.default.string]),height:Ao.default.oneOfType([Ao.default.number,Ao.default.string])},ee=(e,t)=>e.width===t.width&&e.height===t.height;var Hs=({width:e=36,height:t=36})=>Oo.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Oo.default.createElement("path",{d:"M 22.5 18 C 22.5 16.235 21.48 14.71 20 13.975 L 20 16.185 L 22.455 18.64 C 22.485 18.43 22.5 18.215 22.5 18 Z"}),Oo.default.createElement("path",{d:"M 25 18 C 25 18.94 24.795 19.825 24.46 20.64 L 25.975 22.155 C 26.625 20.91 27 19.5 27 18 C 27 13.72 24.005 10.14 20 9.23 L 20 11.295 C 22.89 12.155 25 14.83 25 18 Z"}),Oo.default.createElement("polygon",{points:"18 10 15.91 12.09 18 14.18"}),Oo.default.createElement("path",{d:"M 10.275 9 L 9 10.275 L 13.725 15 L 9 15 L 9 21 L 13 21 L 18 26 L 18 19.275 L 22.255 23.53 C 21.585 24.045 20.83 24.46 20 24.71 L 20 26.775 C 21.375 26.46 22.63 25.83 23.685 24.965 L 25.725 27 L 27 25.725 L 18 16.725 L 10.275 9 Z"}));Hs.displayName="MutedIcon";Hs.propTypes=K;var yr=Oo.default.memo(Hs,ee);var pi=h(T());var zs=({width:e=36,height:t=36})=>pi.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},pi.default.createElement("path",{d:"M 23.804 18.319 L 12.478 25.924 C 12.347 26.014 12.235 26.024 12.141 25.955 C 12.047 25.886 12 25.763 12 25.584 L 12 10.416 C 12 10.237 12.047 10.113 12.141 10.045 C 12.235 9.976 12.347 9.986 12.478 10.076 L 23.804 17.68 C 23.935 17.77 24 17.876 24 18 C 24 18.124 23.935 18.23 23.804 18.319 Z"}));zs.displayName="PlayIcon";zs.propTypes=K;var gr=pi.default.memo(zs,ee);var js=d.div`
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
`,ju=W`
  font-size: 20px;
  margin-right: 8px;
`,Uu=d(gr)`
  ${ju}
`,Wu=d(yr)`
  ${ju}
`,Yu=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 5;
`;var Qu=h(T());var Xu=h(T()),Us={captionDragging:!1,contextMenuVisible:!1,controlsHovering:!1,timeSliding:!1,volumeSliding:!1,hiding:!1,menuVisible:!1,subMenuVisible:!1,fullscreen:!1,playerRef:null,videoRef:null},br=(0,Xu.createContext)({state:Us,dispatch:()=>null});var B0=()=>{let{state:e}=(0,Qu.useContext)(br);return e},V=B0;var Gu=({hasResource:e=!1,prevented:t,paused:o,muted:r,currentTime:n,onClick:i})=>{let{i18n:s}=V(),[l,a]=rt.default.useState(!1),u=rt.default.useCallback(()=>{if(e===!1||t===!1||o)return null;if(r===!0&&!l){let c=f=>{a(!0),i(f)};return rt.default.createElement(rt.default.Fragment,{key:"preventedClickedTip"},rt.default.createElement(Yu,{onClick:c}),rt.default.createElement(js,null,rt.default.createElement(Wu,null),s.clickToUnmute))}return null},[e,t,l,i,s.clickToUnmute,r,o]);return[rt.default.useCallback(()=>e===!1||t===!1?null:n===0&&o?rt.default.createElement(rt.default.Fragment,{key:"preventedTip"},rt.default.createElement(js,null,rt.default.createElement(Uu,null),s.playbackStuckClickResumePlayback)):null,[n,o,e,s.playbackStuckClickResumePlayback,t])(),u()]};Gu.propTypes={hasResource:Ro.default.bool.isRequired,prevented:Ro.default.bool.isRequired,paused:Ro.default.bool.isRequired,muted:Ro.default.bool.isRequired,currentTime:Ro.default.number.isRequired,onClick:Ro.default.func.isRequired};var rn=rt.default.memo(Gu,(e,t)=>e.hasResource===t.hasResource&&e.prevented===t.prevented&&e.paused===t.paused&&e.muted===t.muted&&e.currentTime===t.currentTime&&e.onClick===t.onClick);var vr=h(T()),Zt=h(G());var Ws=h(T());var Ku=Ws.default.forwardRef(({showing:e,...t},o)=>Ws.default.createElement("button",{ref:o,...t}));Ku.displayName="PlayButton";var Zu=d(Ku)`
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
`;var di=h(T());var Ys=({width:e=36,height:t=36})=>di.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},di.default.createElement("path",{d:"M 18 12.3 L 18 8.5 L 13 13.25 L 18 18 L 18 14.2 C 21.3 14.2 24 16.765 24 19.9 C 24 23.035 21.3 25.6 18 25.6 C 14.7 25.6 12 23.035 12 19.9 L 10 19.9 C 10 24.08 13.6 27.5 18 27.5 C 22.4 27.5 26 24.08 26 19.9 C 26 15.72 22.4 12.3 18 12.3 Z"}));Ys.displayName="ReplayIcon";Ys.propTypes=K;var Sr=di.default.memo(Ys,ee);var fi=h(T());var N0=d.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
`,q0=d.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
`,F0=d.div`
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
`,_0=()=>fi.default.createElement(N0,null,fi.default.createElement(q0,null,fi.default.createElement(F0,null))),mi=_0;var Ju=({hasResource:e,loading:t,paused:o,ended:r,seeking:n,waiting:i,kernelMsg:s,onClick:l})=>e===!1||t||s?null:i?vr.default.createElement(mi,null):vr.default.createElement(Zu,{showing:o||r,onClick:l},r?vr.default.createElement(Sr,{width:"14%",height:"100%"}):vr.default.createElement(gr,{width:"20%",height:"100%"}));Ju.propTypes={hasResource:Zt.default.bool.isRequired,loading:Zt.default.bool.isRequired,paused:Zt.default.bool.isRequired,ended:Zt.default.bool.isRequired,seeking:Zt.default.bool.isRequired,waiting:Zt.default.bool.isRequired,kernelMsg:Zt.default.object,onClick:Zt.default.func.isRequired};var ec=vr.default.memo(Ju,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.kernelMsg===t.kernelMsg&&e.onClick===t.onClick);var yi=h(T()),hi=h(G());var tc=d.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 2em;
  background: rgba(0, 0, 0, 0.65);
`;var oc=({hasResource:e,loading:t=!1,kernelMsg:o=null})=>e===!1?null:o?yi.default.createElement(tc,null,o.type,": ",o.detail):t?yi.default.createElement(mi,null):null;oc.propTypes={hasResource:hi.default.bool.isRequired,loading:hi.default.bool,kernelMsg:hi.default.object};var nn=yi.default.memo(oc,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.kernelMsg===t.kernelMsg);var xr=W`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;var sn=d.div`
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
`,an=d.div`
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
`;var Ft=d.div`
  ${xr}
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`,rc=d.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  height: 55px !important;
  z-index: 2;
`,nc=d.div`
  padding: 10px 20px;
  font-size: 140%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  border-radius: 3px;
  color: #eee;
`;var Te=(e=!1)=>e?{width:54,height:54}:{width:36,height:36};var gi={32:"SPACE_KEY",27:"ESCAPE_KEY",37:"ARROW_LEFT_KEY",39:"ARROW_RIGHT_KEY",38:"ARROW_UP_KEY",40:"ARROW_DOWN_KEY",77:"MUTE_KEY",16:"SHIFT_KEY",67:"SUBTITLES_KEY",70:"F_KEY",84:"T_KEY",78:"N_KEY"},bi={" ":"SPACE_KEY",Escape:"ESCAPE_KEY",ArrowLeft:"ARROW_LEFT_KEY",ArrowRight:"ARROW_RIGHT_KEY",ArrowUp:"ARROW_UP_KEY",ArrowDown:"ARROW_DOWN_KEY",m:"MUTE_KEY",Shift:"SHIFT_KEY",c:"SUBTITLES_KEY",f:"F_KEY",t:"T_KEY",n:"N_KEY"},Lt=e=>e?83:55;var un=h(T()),ln=h(G());var Xs=h(T());var ic="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuQAAADyCAQAAACvvRhBAAADYklEQVR42u3cwY3DQAwEQdlQ/jE7BvEhor1VIdyjMeCtdV+fC4Cw258AQMgBWA250wqARQ6ARQ6ARQ5gkQNgkQMg5AA8DLnTCoBFDoBFDoBFDmCRA2CRA2CRA2CRA1jkAFjkAFjkAFjkABY5ABY5ABY5ABY5gEUOgEUOgEUOgJAD/FvIAbDIAbDIAbDIAYQcgGTIAbDIAbDIAbDIAYQcgGTIAbDIARByAMYhB8AiB0DIARiHHAAhB2Az5E4rAEIOwGbIAbDIARByAIQcQMgBSIYcAIscACEHYBxyACxyAIQcgHHIAbDIARByAMYhByAe8q8/AoBFDsBiyN3IAYQcgM2QA2CRAyDkAAg5wKkhB8AiB0DIARiHHIB4yH1rBcAiB2Az5G7kAEIOgJADMA45ABY5AEIOgJADCDkAyZADEA+5n+gDWOQAbIbcjRxAyAEQcgDGIQcgHnKvVgAscgA2Q+5GDiDkAAg5AOOQAxAPuVcrABY5AJshdyMHEHIAhBwAIQcQcgCSIQcgHnLvyAEscgA2Q+5GDiDkAAg5AEIOcGrIAYiH3PNDAIscAIscAIsc4NSQe7UCIOQACDkAQg4g5AAIOQBCDoCQAwg5AKGQAxAPuW+tAFjkAGyG3I0cQMgBEHIAhBxAyAEQcgCEHAAhBxByAEIhByAect9aAbDIAbDIAbDIAU4NuVcrAEIOgJADIOQAQg6AkAMg5AAIOYCQAyDkAAg5AEIOcELIAYiH3GdsASxyADZD7kYOEA+50wpAPOQAWOQAWOQAjEPun50A8ZA7rQDEQw5APOROKwBCDoCQAyDkAKeGHIB4yD0/BIiH3GkFQMgBEHIAxiEHIB5y/+wEsMgB2Ay5GzlAPOROKwDxkAMQD7nTCoCQAyDkAAg5gJADIOQACDkAQg4g5ACEQg5APOS+tQJgkQNgkQNgkQOcGnKvVgDiIXdaAYiHHIB4yJ1WAIQcACEHQMgBhBwAIQfg/ZADEA+5HwQBWOQAbIbcjRwgHnKnFYB4yAGIh9xpBUDIARByAIQcQMgBEHIA3g85APGQ+0EQgEUOgEUOgEUOcGrIvVoBEHIAhBwAIQcQcgCSIQfAIgdAyAEQcgAhB0DIARByAB6GHIB4yH3GFsAiB2Az5G7kAEIOgJADMA45AGk/i98EjA2eeD8AAAAASUVORK5CYII=";var sc=Xs.default.forwardRef(({hiding:e,...t},o)=>Xs.default.createElement("div",{ref:o,...t}));sc.displayName="Controls";var ac=d(sc)`
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
    background-image: url(${ic});
    transition: opacity 0.3s;
  }
  ${({hiding:e})=>e?`
      opacity: 0;
    `:`
      opacity: 1;
    `}
`;var Si=h(T());var V0=()=>{let{state:e,dispatch:t}=Si.default.useContext(br),o=Si.default.useRef(e);return o.current=e,Si.default.useCallback(n=>{if(typeof n=="function"){let i=n(o.current);t(i)}else t(n)},[t])},he=V0;var lc=({children:e})=>{let t=V(),o=he(),r=un.default.useCallback(()=>{if(typeof window!="undefined"&&window.matchMedia){let i=window.matchMedia("(hover: none), (pointer: coarse)");if(i&&i.matches)return}o({type:"controlsHovering",payload:!0})},[o]),n=un.default.useCallback(()=>{o({type:"controlsHovering",payload:!1})},[o]);return un.default.createElement(ac,{hiding:t.hiding,onMouseEnter:r,onMouseLeave:n},e)};lc.propTypes={children:ln.default.oneOfType([ln.default.arrayOf(ln.default.node),ln.default.node]).isRequired};var uc=un.default.memo(lc,(e,t)=>e.children===t.children);var cn=h(T()),Do=h(G());var vi=h(T());var cc=(0,vi.forwardRef)(({isFullscreen:e,...t},o)=>vi.default.createElement("div",{ref:o,...t}));cc.displayName="ControlBar";var pc=d(cc)`
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
`,dc=W`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  flex: 1;
`,fc=d.div`
  ${dc}
  justify-content: flex-start;
  margin-left: 15px;
`,mc=d.div`
  ${dc}
  justify-content: flex-end;
  margin-right: 15px;
`;var hc=({children:e,extra:t,fullscreen:o})=>cn.default.createElement(pc,{isFullscreen:o},cn.default.createElement(fc,null,e),cn.default.createElement(mc,null,t));hc.propTypes={children:Do.default.oneOfType([Do.default.arrayOf(Do.default.node),Do.default.node]).isRequired,extra:Do.default.node.isRequired,fullscreen:Do.default.bool.isRequired};var yc=cn.default.memo(hc,(e,t)=>e.fullscreen===t.fullscreen&&e.children===t.children&&e.extra===t.extra);var we=h(T()),Ue=h(G());var Fo=h(T());var Bo=h(T());var gc=Bo.default.forwardRef(({isFullscreen:e,hasChapters:t,...o},r)=>Bo.default.createElement("div",{ref:r,...o}));gc.displayName="Tooltip";var xi=d(gc)`
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
`,bc=Bo.default.forwardRef(({isFullscreen:e,...t},o)=>Bo.default.createElement("div",{ref:o,...t}));bc.displayName="Tip";var Sc=d(bc)`
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
`,vc=Bo.default.forwardRef(({isFullscreen:e,...t},o)=>Bo.default.createElement("span",{ref:o,...t}));vc.displayName="ChapterLabel";var xc=d(vc)`
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
`;var Ci=W`
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
`;var _t=d.div`
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

  ${Ci}

  & video::cue {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 1.1em;
    line-height: 1.4;
  }
`;var No=d.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
`,wc=Fo.default.forwardRef(({isFullscreen:e,...t},o)=>Fo.default.createElement("button",{ref:o,...t}));wc.displayName="SliderHandle";var qo=d(wc)`
  ${_t} ${Ft} & {
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
`,Cc=`
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
`,kc=Fo.default.forwardRef(({isSliding:e,isFullscreen:t,...o},r)=>Fo.default.createElement("div",{ref:r,...o}));kc.displayName="Slider";var Pc=d(kc)`
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
  & ${No} {
    -moz-transform: scaleY(0.6);
    -ms-transform: scaleY(0.6);
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
    -moz-transition: -moz-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -ms-transition: -ms-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
  }
  & ${qo} {
    @media (hover: none), (pointer: coarse) {
      pointer-events: auto;
      opacity: 1;
      box-shadow: none;
    }
  }
  ${({isSliding:e})=>e?`
          & ${No} {
            -moz-transform: none;
            -ms-transform: none;
            -webkit-transform: none;
            transform: none;
          }
          & ${qo} {
            ${Cc}
          }
          & ${xi} {
            display: block;
          }
        `:`
        &:focus ${No},
        &:hover ${No} {
          -moz-transform: none;
          -ms-transform: none;
          -webkit-transform: none;
          transform: none;
        }
        &:focus ${qo},
        &:hover ${qo} {
          ${Cc}
        }
      `}
`,Tc=Fo.default.forwardRef(({isFullscreen:e,...t},o)=>Fo.default.createElement("div",{ref:o,...t}));Tc.displayName="SlideRail";var Lc=d(Tc)`
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
`,Ec=d.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: center left;
  background-color: rgba(255, 255, 255, 0.5);
`,Mc=d.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(-100%, 0);
  background: #f00;
`,Qs=d.div`
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 12px;
  transform: translate(-100%, 0);
  z-index: 4;
`;var et=h(T()),Jt=h(G());var Gs=h(T());var Ic=Gs.default.forwardRef(({isFullscreen:e,showing:t,hasChapters:o,...r},n)=>Gs.default.createElement("div",{ref:n,...r}));Ic.displayName="TimelensThumbnail";var Ac=d(Ic)`
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
`,Oc=d.div`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  z-index: 4;
`;var $0=e=>"changedTouches"in e&&e.changedTouches&&1<=e.changedTouches.length?e.changedTouches[0].pageX:"clientX"in e?e.clientX:0,pn=(e,t,o)=>{let r=$0(e)-t.left;return 0>=r?0:r>=t.width?o:Math.round(o*r/t.width)},Dc=({duration:e,currentTime:t,sliderWidth:o,elementWidth:r,offset:n=0})=>{if(e<=0||o<=0||r<=0)return 0;let i=t/e*o,s=r/2,l=s+n,a=o-s-n;return Math.min(a,Math.max(l,i))},Bc=({duration:e,currentTime:t,sliderWidth:o,handleWidth:r})=>{if(e===0)return{trackTranslateX:"-100",handleTranslateX:"-100"};let n=Dc({duration:e,currentTime:t,sliderWidth:o,elementWidth:r,offset:0}),i=(100*t/e-100).toFixed(1),s=(n/o*100-100).toFixed(1);return{trackTranslateX:i,handleTranslateX:s}},Nc=({duration:e,currentTime:t,sliderWidth:o,tooltipWidth:r})=>(Dc({duration:e,currentTime:t,sliderWidth:o,elementWidth:r,offset:5})/o*100).toFixed(1),Rc=e=>{if(typeof e!="string")throw new TypeError("Time must be a string");if(e.indexOf(";")>0&&(e=e.replace(";",":"),!/\d{2}(:\d{2}){0,3}/i.test(e)))throw new TypeError("Time code must have the format `00:00:00`");let t=e.split(":"),o=0,r=0,n=0,i=0,s=25,l=Math.round(s),a=3600*l,u=60*l;switch(t.length){default:case 1:n=parseInt(t[0],10);break;case 2:r=parseInt(t[0],10),n=parseInt(t[1],10);break;case 3:o=parseInt(t[0],10),r=parseInt(t[1],10),n=parseInt(t[2],10);break;case 4:o=parseInt(t[0],10),r=parseInt(t[1],10),n=parseInt(t[2],10),i=parseInt(t[3],10)}let p=(a*o+u*r+s*n+i)/s;return parseFloat(p.toFixed(3))},qc=e=>{var t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+r,left:t.left+o}},wi=e=>{let t=0,o=0,r=[];for(var n of e.split(`
`))if(/-->/.test(n)){let[i,s]=(n.match(/(.*) --> (.*)/)||[]).slice(1);t=Rc(i),o=Rc(s)}else if(/\.(png|jpg|jpeg|webp)/i.test(n)){let i=n.match(/(.*)[#?]xywh=(.*),(.*),(.*),(.*)/);if(i){let[,s,l,a,u,p]=i;r.push({from:t,to:o,file:s,x:l,y:a,w:u,h:p})}}return r};var Ks=et.default.forwardRef(({spriteVTTFile:e,sliderRef:t,duration:o=0,fullscreen:r,hasChapters:n=!1},i)=>{let s=V(),[l,a]=et.default.useState([]),u=et.default.useRef(null),[p,c]=et.default.useState(!1),[f,m]=et.default.useState({backgroundImage:"",backgroundPosition:"-480px -360px",width:"160px",height:"90px",marginLeft:"0px"});et.default.useEffect(()=>{(async()=>{try{let v=await fetch(e).then(M=>M.text()),w=e.substring(0,e.lastIndexOf("/")+1),S=v.replace(/^([^#?\n]+\.(png|jpg|jpeg|webp))/gim,M=>M.startsWith("http")?M:`${w}${M}`),b=wi(S);a(b)}catch(v){console.error("Error parsing VTT file: ",v)}})()},[e]);let y=et.default.useCallback(async v=>{var M;let w=u==null?void 0:u.current,S=t==null?void 0:t.current;if(w&&S&&l.length>0&&s.menuVisible===!1&&s.subMenuVisible===!1){let L=qc(S),k=v==null?void 0:v.pageX;v!=null&&v.originalEvent&&((M=v==null?void 0:v.originalEvent)!=null&&M.changedTouches)?k=v.originalEvent.changedTouches[0].pageX:v!=null&&v.changedTouches&&(k=v.changedTouches[0].pageX);let q=(k-L.left-S.offsetLeft)/S.offsetWidth,E=q*o,C=q*S.offsetWidth;for(var b of l)if(E>=b.from&&E<=b.to){let N=Math.min(Math.max(0,C-w.offsetWidth/2),S.offsetWidth-w.offsetWidth);m({backgroundImage:`url(${b.file})`,backgroundPosition:-b.x+"px "+-b.y+"px",width:b.w+"px",height:b.h+"px",marginLeft:N+"px"});break}c(!0)}},[u,t,o,l,s.menuVisible,s.subMenuVisible]),x=et.default.useCallback(()=>{c(!1)},[]);return et.default.useImperativeHandle(i,()=>({handleTimelens:y,setShowTimelens:c})),et.default.createElement(et.default.Fragment,null,et.default.createElement(Oc,{onMouseMove:y,onMouseEnter:y,onMouseLeave:x}),et.default.createElement(Ac,{ref:u,showing:p||s.timeSliding,isFullscreen:r,hasChapters:n,style:f}))});Ks.displayName="Timelens";Ks.propTypes={sliderRef:Jt.default.oneOfType([Jt.default.func,Jt.default.shape({current:Jt.default.instanceOf(HTMLDivElement)})]),spriteVTTFile:Jt.default.string.isRequired,duration:Jt.default.number.isRequired,fullscreen:Jt.default.bool.isRequired,hasChapters:Jt.default.bool};var Fc=et.default.memo(Ks,(e,t)=>e.fullscreen===t.fullscreen&&e.sliderRef===t.sliderRef&&e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration&&e.hasChapters===t.hasChapters);var So=h(T()),Vt=h(G());Ne();var _c=({sliderRef:e,duration:t,tooltip:o,showTooltip:r,chapterTitle:n,fullscreen:i})=>{let s=So.default.useRef(null),[l,a]=So.default.useState("0");return So.default.useLayoutEffect(()=>{var p,c;let u=Nc({duration:t,currentTime:o,sliderWidth:((p=e.current)==null?void 0:p.offsetWidth)||0,tooltipWidth:((c=s.current)==null?void 0:c.offsetWidth)||0});a(u)},[t,o,n,e]),So.default.createElement(xi,{style:{display:r?"block":"",transform:`translateX(${l}%)`},isFullscreen:i},So.default.createElement(Sc,{ref:s,isFullscreen:i},n&&So.default.createElement(xc,{isFullscreen:i},n),Oe(o)))};_c.propTypes={sliderRef:Vt.default.oneOfType([Vt.default.func,Vt.default.shape({current:Vt.default.instanceOf(HTMLDivElement)})]),duration:Vt.default.number.isRequired,tooltip:Vt.default.number.isRequired,showTooltip:Vt.default.bool.isRequired,chapterTitle:Vt.default.string,fullscreen:Vt.default.bool.isRequired};var Vc=So.default.memo(_c,(e,t)=>e.sliderRef===t.sliderRef&&e.duration===t.duration&&e.tooltip===t.tooltip&&e.showTooltip===t.showTooltip&&e.chapterTitle===t.chapterTitle&&e.fullscreen===t.fullscreen);var Cr=h(T()),at=h(G());var dn=h(T());var $c=dn.default.forwardRef(({isFullscreen:e,...t},o)=>dn.default.createElement("div",{ref:o,...t}));$c.displayName="ChapterSegmentsContainer";var Hc=d($c)`
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
`,zc=dn.default.forwardRef(({isFullscreen:e,isHovered:t,...o},r)=>dn.default.createElement("div",{ref:r,...o}));zc.displayName="ChapterSegment";var jc=d(zc)`
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
`,Uc=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`,Wc=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #f00;
`;var Yc=({segments:e,currentTime:t,duration:o,bufferedScaleX:r,hoveredIndex:n,fullscreen:i})=>e.length===0||o<=0?null:Cr.default.createElement(Hc,{isFullscreen:i},e.map((s,l)=>{let a=s.endTime-s.startTime,u=a/o*100,p=0;t>=s.endTime?p=100:t>s.startTime&&(p=(t-s.startTime)/a*100);let c=r*o,f=0;return c>=s.endTime?f=100:c>s.startTime&&(f=(c-s.startTime)/a*100),Cr.default.createElement(jc,{key:l,style:{width:`${u}%`},title:s.title,isFullscreen:i,isHovered:n===l},Cr.default.createElement(Uc,{style:{width:`${f}%`}}),Cr.default.createElement(Wc,{style:{width:`${p}%`}}))}));Yc.propTypes={segments:at.default.arrayOf(at.default.shape({title:at.default.string.isRequired,startTime:at.default.number.isRequired,endTime:at.default.number.isRequired,startPercent:at.default.number.isRequired,endPercent:at.default.number.isRequired})).isRequired,currentTime:at.default.number.isRequired,duration:at.default.number.isRequired,bufferedScaleX:at.default.number.isRequired,hoveredIndex:at.default.number,fullscreen:at.default.bool.isRequired};var Xc=Cr.default.memo(Yc);var $t=h(T()),_o=h(G());var Zs=h(T());var Qc=Zs.default.forwardRef(({isFullscreen:e,bottomOffset:t,visible:o,...r},n)=>Zs.default.createElement("div",{ref:n,...r}));Qc.displayName="HeatmapContainer";var Gc=d(Qc)`
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
`,Kc=d.svg`
  display: block;
  width: 100%;
  height: 100%;
`;var Zc=({strokePath:e,currentTime:t,duration:o,isFullscreen:r,bottomOffset:n,visible:i})=>{let l=`heatmap-played-${$t.default.useId()}`,a=o>0?t/o*100:0;return $t.default.createElement(Gc,{isFullscreen:r,bottomOffset:n,visible:i},$t.default.createElement(Kc,{viewBox:"0 0 100 100",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},$t.default.createElement("defs",null,$t.default.createElement("clipPath",{id:l},$t.default.createElement("rect",{x:"0",y:"0",width:a,height:"100"}))),$t.default.createElement("path",{d:e,fill:"none",stroke:"rgba(255, 255, 255, 0.75)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"}),$t.default.createElement("path",{d:e,fill:"none",stroke:"rgba(255, 255, 255, 1)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",clipPath:`url(#${l})`})))};Zc.propTypes={strokePath:_o.default.string.isRequired,currentTime:_o.default.number.isRequired,duration:_o.default.number.isRequired,isFullscreen:_o.default.bool.isRequired,bottomOffset:_o.default.number,visible:_o.default.bool};var ki=$t.default.memo(Zc,(e,t)=>e.strokePath===t.strokePath&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.isFullscreen===t.isFullscreen&&e.bottomOffset===t.bottomOffset&&e.visible===t.visible);var Ce=h(T());var H0=({timelensRef:e,currentTime:t,duration:o,onChange:r,onSeeking:n})=>{let i=he(),s=Ce.default.useRef(null),l=Ce.default.useRef(null),[a,u]=Ce.default.useState(!1),[p,c]=Ce.default.useState(!1),[f,m]=Ce.default.useState({left:0,width:0}),[y,x]=Ce.default.useState({value:0,tooltip:0}),v=Ce.default.useCallback(g=>{g.preventDefault();let P=g.currentTarget.getBoundingClientRect(),D=pn(g,P,o);i({type:"timeSliding",payload:!1}),c(!1),r(D),n(!1),e.current&&e.current.handleTimelens(g)},[r,o,i,e,n]),w=Ce.default.useCallback(g=>{if(g.preventDefault(),s.current!==null){let P=s.current.getBoundingClientRect();i({type:"timeSliding",payload:!0}),m(D=>({...D,left:P.left,width:P.width})),e.current&&e.current.handleTimelens(g),c(!0),n(!0)}},[e,i,n]),S=Ce.default.useCallback(g=>{var D,j,z,Y,ue,A,R,ne;g.preventDefault();let P=pn(g,{left:f.left,width:f.width},o);if(i({type:"timeSliding",payload:!1}),c(!1),x(H=>({...H,value:P})),r(P),n(!1),e.current&&e.current.setShowTimelens(!1),s.current){let H=s.current.getBoundingClientRect(),pe=(Y=(z=g.clientX)!=null?z:(j=(D=g.changedTouches)==null?void 0:D[0])==null?void 0:j.clientX)!=null?Y:0,de=(ne=(R=g.clientY)!=null?R:(A=(ue=g.changedTouches)==null?void 0:ue[0])==null?void 0:A.clientY)!=null?ne:0;(pe<H.left||pe>H.right||de<H.top||de>H.bottom)&&u(!1)}},[r,o,f,i,n,e]),b=Ce.default.useRef(null),M=Ce.default.useCallback(g=>{var j,z,Y,ue,A,R,ne,H;g.preventDefault(),b.current&&cancelAnimationFrame(b.current);let P=(ue=(Y=g.clientX)!=null?Y:(z=(j=g.touches)==null?void 0:j[0])==null?void 0:z.clientX)!=null?ue:0,D=(H=(ne=g.pageX)!=null?ne:(R=(A=g.touches)==null?void 0:A[0])==null?void 0:R.pageX)!=null?H:0;b.current=requestAnimationFrame(()=>{let pe=pn({clientX:P},{left:f.left,width:f.width},o);x(de=>({...de,value:pe})),r(pe),e.current&&e.current.handleTimelens({clientX:P,pageX:D}),b.current=null})},[o,f,e,r]);Ce.default.useEffect(()=>(p&&(document.addEventListener("mousemove",M),document.addEventListener("mouseup",S),document.addEventListener("touchmove",M),document.addEventListener("touchcancel",S),document.addEventListener("touchend",S)),()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",S),document.removeEventListener("touchmove",M),document.removeEventListener("touchcancel",S),document.removeEventListener("touchend",S),b.current&&(cancelAnimationFrame(b.current),b.current=null)}),[p,M,S]);let L=Ce.default.useCallback(g=>{if(g.preventDefault(),s.current!==null){let P=s.current.getBoundingClientRect();m(D=>({...D,left:P.left,width:P.width})),e.current&&e.current.handleTimelens(g)}},[e]),k=Ce.default.useCallback(g=>{g.preventDefault();let P=pn(g,{left:f.left,width:f.width},o);x(D=>({...D,tooltip:P})),e.current&&e.current.handleTimelens(g)},[o,f.left,f.width,e]),I=Ce.default.useRef(null),q=Ce.default.useCallback(()=>{I.current&&clearTimeout(I.current),I.current=setTimeout(()=>{if(!s||!s.current)return;let g=s.current.getBoundingClientRect();m(P=>({...P,left:g.left,width:g.width})),I.current=null},100)},[]),E=Ce.default.useCallback(g=>{e.current&&e.current.handleTimelens(g),u(!0)},[e]),C=Ce.default.useCallback(()=>{e.current&&e.current.setShowTimelens(!1),u(!1)},[e]);Ce.default.useEffect(()=>{if(typeof window!="undefined")return window.addEventListener("resize",q),()=>{window.removeEventListener("resize",q),I.current&&clearTimeout(I.current)}},[q]);let N=Ce.default.useMemo(()=>{var g;return Bc({duration:o,currentTime:p?y.value:t,sliderWidth:f.width,handleWidth:((g=l.current)==null?void 0:g.offsetWidth)||0})},[o,t,y.value,p,l,f]);return{sliderRef:s,handleRef:l,showTooltip:a,timeSliderSliding:p,timeSliderState:y,trackTranslateX:{track:N.trackTranslateX,handle:N.handleTranslateX},onClick:v,onMouseDown:w,onSliderMouseOver:L,onSliderMouseMove:k,onMouseEnter:E,onMouseLeave:C}},Jc=H0;var Js=h(T());var ep=h(T()),tp=h(Yr());function Vo(e){let t=ep.default.useRef(e);return(0,tp.default)(e,t.current)||(t.current=e),t.current}var z0=({chapters:e,duration:t})=>{let o=Vo(e),r=Js.default.useMemo(()=>{if(!o||o.length===0||t<=0)return[];let i=[...o].filter(s=>s.startTime<t).sort((s,l)=>s.startTime-l.startTime);return i.map((s,l)=>{let a=l<i.length-1?i[l+1].startTime:t,u=Math.min(a,t);return{title:s.title,startTime:s.startTime,endTime:u,startPercent:s.startTime/t*100,endPercent:u/t*100}})},[o,t]),n=Js.default.useCallback(i=>{if(r.length===0)return null;for(let s=r.length-1;s>=0;s--)if(i>=r[s].startTime)return r[s];return r[0]},[r]);return{segments:r,getChapterAtTime:n}},vo=z0;var op=h(T());var j0=({heatmapData:e,duration:t})=>{let o=Vo(e),r=op.default.useMemo(()=>{if(!o||o.length===0||t<=0)return{svgPath:"",strokePath:""};let i=o.map(c=>{let m=(c.startTime+c.endTime)/2/t*100,x=100-Math.max(0,Math.min(1,c.value))*100;return{x:m,y:x}});if(i.length<2)return{svgPath:"",strokePath:""};let s=6,l=i.length+2,a=c=>c<=0?{x:0,y:100}:c>=l-1?{x:100,y:100}:i[c-1],u=`M ${a(0).x},${a(0).y}`;for(let c=0;c<l-1;c++){let f=a(c-1),m=a(c),y=a(c+1),x=a(c+2),v=m.x+(y.x-f.x)/s,w=m.y+(y.y-f.y)/s,S=y.x-(x.x-m.x)/s,b=y.y-(x.y-m.y)/s;u+=` C ${v},${w} ${S},${b} ${y.x},${y.y}`}return{strokePath:u}},[o,t]),n=r.strokePath.length>0;return{strokePath:r.strokePath,hasHeatmap:n}},Pi=j0;Nt();var rp=({spriteVTTFile:e,chapters:t,heatmapData:o,currentTime:r,duration:n,buffered:i,onChange:s,onSeeking:l,fullscreen:a})=>{let{i18n:u,captionDragging:p}=V(),c=we.default.useRef(null),{sliderRef:f,handleRef:m,showTooltip:y,timeSliderSliding:x,timeSliderState:v,trackTranslateX:w,onClick:S,onMouseDown:b,onSliderMouseOver:M,onSliderMouseMove:L,onMouseEnter:k,onMouseLeave:I}=Jc({timelensRef:c,currentTime:r,duration:n,onChange:s,onSeeking:l}),{segments:q,getChapterAtTime:E}=vo({chapters:t,duration:n}),C=q.length>0,{strokePath:N,hasHeatmap:g}=Pi({heatmapData:o,duration:n}),P=we.default.useMemo(()=>{let j=x?v.value:v.tooltip;return E(j)},[x,v.value,v.tooltip,E]),D=we.default.useMemo(()=>!P||!y?-1:q.findIndex(j=>j.startTime===P.startTime),[P,y,q]);return we.default.createElement(Pc,{ref:f,role:"slider","aria-label":u.timeBar,"aria-valuemin":0,"aria-valuemax":n,"aria-valuenow":r,"aria-valuetext":Oe(Math.round(r)),tabIndex:0,onClick:S,onMouseDown:b,onTouchStart:b,onKeyDown:()=>{},onMouseOver:M,onMouseMove:L,onMouseEnter:k,onMouseLeave:I,onFocus:()=>{},isSliding:x,isFullscreen:a,style:p?{pointerEvents:"none"}:void 0},C?we.default.createElement(we.default.Fragment,null,we.default.createElement(No,null,we.default.createElement(Xc,{segments:q,currentTime:x?v.value:r,duration:n,bufferedScaleX:i,hoveredIndex:D,fullscreen:a}),we.default.createElement(Qs,{style:{transform:`translateX(${w.handle}%)`}},we.default.createElement(qo,{ref:m,type:"button",onMouseDown:b,onTouchStart:b,isFullscreen:a})))):we.default.createElement(No,null,we.default.createElement(Lc,{isFullscreen:a},we.default.createElement(Ec,{style:{transform:`scaleX(${i})`}}),we.default.createElement(Mc,{style:{transform:`translateX(${w.track}%)`}})),we.default.createElement(Qs,{style:{transform:`translateX(${w.handle}%)`}},we.default.createElement(qo,{ref:m,type:"button",onMouseDown:b,onTouchStart:b,isFullscreen:a}))),we.default.createElement(Vc,{sliderRef:f,showTooltip:y,duration:n,tooltip:x?v.value:v.tooltip,chapterTitle:P==null?void 0:P.title,fullscreen:a}),g&&we.default.createElement(ki,{strokePath:N,currentTime:x?v.value:r,duration:n,isFullscreen:a,visible:y||x}),e&&we.default.createElement(Fc,{ref:c,sliderRef:f,duration:n,spriteVTTFile:e,fullscreen:a,hasChapters:C}))};rp.propTypes={spriteVTTFile:Ue.default.string,chapters:Ue.default.arrayOf(Ue.default.shape({title:Ue.default.string.isRequired,startTime:Ue.default.number.isRequired})),heatmapData:Ue.default.arrayOf(Ue.default.shape({startTime:Ue.default.number.isRequired,endTime:Ue.default.number.isRequired,value:Ue.default.number.isRequired})),currentTime:Ue.default.number.isRequired,duration:Ue.default.number.isRequired,buffered:Ue.default.number.isRequired||null,onChange:Ue.default.func.isRequired,fullscreen:Ue.default.bool.isRequired};var np=we.default.memo(rp,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.buffered===t.buffered&&e.onChange===t.onChange&&e.onSeeking===t.onSeeking&&e.fullscreen===t.fullscreen);var Mt=h(T()),zo=h(G());var mn=h(T());var St=h(T());var fn=d.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,U0=W`
  font-size: 130%;
  margin-bottom: 10px;
`,W0=W`
  font-size: 90%;
  margin-bottom: 6px;
`,Y0=d.div`
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
  ${({$fullscreen:e})=>e?U0:W0}

  ${fn}:hover & {
    opacity: 1;
  }

  &[data-suppressed='true'] {
    opacity: 0 !important;
  }

  ${fn}:has([aria-expanded='true']) & {
    opacity: 0 !important;
  }
`,ip=({label:e,children:t,disabled:o=!1,fullscreen:r=!1,...n})=>{let i=V(),s=St.default.useRef(null),l=St.default.useRef(null),[a,u]=St.default.useState(!1),[p,c]=St.default.useState(0),f=St.default.useRef(null),m=St.default.useCallback(()=>{var w;let v=(w=i.playerRef)==null?void 0:w.current;if(v&&v.querySelectorAll('[aria-expanded="true"]').length>0){u(!0);return}u(!1),f.current&&cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>{f.current=null;let S=s.current,b=l.current;if(!S||!b||!v){c(0);return}let M=S.getBoundingClientRect(),L=v.getBoundingClientRect(),k=8;M.left<L.left+k?c(L.left+k-M.left):M.right>L.right-k?c(L.right-k-M.right):c(0)})},[i.playerRef]),y=St.default.useCallback(()=>{f.current&&(cancelAnimationFrame(f.current),f.current=null),u(!1),c(0)},[]),x=St.default.useCallback(()=>{u(!0)},[]);return!e||o?t:St.default.createElement(fn,{ref:l,onMouseEnter:m,onMouseLeave:y,onClick:x,...n},t,St.default.createElement(Y0,{ref:s,$fullscreen:r,"data-suppressed":a,style:{transform:`translateX(calc(-50% + ${p}px))`}},e))};ip.displayName="Tooltip";var ge=St.default.memo(ip);var sp=mn.default.forwardRef(({isFullscreen:e,...t},o)=>mn.default.createElement("div",{ref:o,...t}));sp.displayName="SliderWrapper";var wr=d(sp)`
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
`,ap=mn.default.forwardRef(({isSliding:e,isFullscreen:t,...o},r)=>mn.default.createElement("div",{ref:r,...o}));ap.displayName="SliderContainer";var lp=d(ap)`
  display: flex;
  padding-right: 3px;
  position: relative;
  @media (max-width: 575px) {
    display: none;
  }

  ${({isSliding:e,isFullscreen:t})=>e?`
      & ${wr} {
        width: ${Lt(t)}px;
        -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
      }
      `:`
          & ${fn}:hover ~ ${wr},
          &:hover ${wr},
          & ${wr}:hover {
              width: ${Lt(t)}px;
              -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
          }
      `}
`;var ea=h(T());var X0=W`
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
`,Q0=W`
  align-items: center;
  padding: 0 8px;
  font-size: 14px;
`,G0=W`
  width: 54px;
  height: 54px;
`,K0=W`
  width: 36px;
  height: 36px;
`,Z0=W`
  font-size: 145% !important;
`,up=ea.default.forwardRef(({isText:e,isFullscreen:t=!1,isFakeDisabled:o=!1,title:r,...n},i)=>ea.default.createElement("button",{ref:i,...n},n.children));up.displayName="GeneralButton";var J0=d(up)`
  ${_t} ${Ft} & {
    ${X0}
    ${({isFullscreen:e,isText:t})=>!t&&(e?G0:K0)}
    ${({isFullscreen:e,isText:t})=>e&&t&&Z0}
    ${({isText:e})=>e&&Q0}
    ${({isFakeDisabled:e})=>e&&`
      color: #a4a4a4;
    `}
  }
`,re=J0;var kr=h(T()),Ho=h(G());var Et=h(T());var Ti=({clientX:e,sliderRef:t,isFullcreen:o})=>{if(!t.current)return 0;let r=t.current.getBoundingClientRect(),i=(e-r.left)/Lt(o)*100;return i<0?i=0:i>100&&(i=100),i};var eh=({fullscreen:e,value:t,onChange:o})=>{let r=V(),n=he(),i=Et.default.useRef(null),s=Et.default.useRef(null),[l,a]=Et.default.useState(0);Et.default.useEffect(()=>{if(i!=null&&i.current&&(s!=null&&s.current)){let y=s.current.getBoundingClientRect(),x=t/100*Lt(e)-y.width/2,v=x;x<0?v=0:x>Lt(e)-y.width&&(v=Lt(e)-y.width),a(v)}},[t,e]);let u=Et.default.useCallback(y=>{if(o){let x=Ti({clientX:y.clientX,sliderRef:i,isFullcreen:e});o(x)}},[o,e]),p=Et.default.useCallback(y=>{y.preventDefault(),i!=null&&i.current&&n({type:"volumeSliding",payload:!0})},[n]),c=Et.default.useCallback(y=>{y.preventDefault(),n({type:"volumeSliding",payload:!1});let x=Ti({clientX:y.clientX,sliderRef:i,isFullcreen:e});o(x)},[o,e,n]),f=Et.default.useRef(null),m=Et.default.useCallback(y=>{var v,w,S,b;if(y.preventDefault(),!r.volumeSliding)return;f.current&&cancelAnimationFrame(f.current);let x=(b=(S=y.clientX)!=null?S:(w=(v=y.touches)==null?void 0:v[0])==null?void 0:w.clientX)!=null?b:0;f.current=requestAnimationFrame(()=>{let M=Ti({clientX:x,sliderRef:i,isFullcreen:e});o(M),f.current=null})},[r.volumeSliding,e,o]);return Et.default.useEffect(()=>(r.volumeSliding&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",c),document.addEventListener("touchmove",m),document.addEventListener("touchcancel",c),document.addEventListener("touchend",c)),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",m),document.removeEventListener("touchcancel",c),document.removeEventListener("touchend",c),f.current&&(cancelAnimationFrame(f.current),f.current=null)}),[r.volumeSliding,m,c]),{thumbLeft:l,sliderRef:i,thumbRef:s,onMouseDown:p,onMouseMove:m,handleChange:u}},cp=eh;var $o=h(T());var pp=$o.default.forwardRef(({isFullscreen:e,...t},o)=>$o.default.createElement("div",{ref:o,...t}));pp.displayName="SliderContainer";var dp=d(pp)`
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
`,fp=$o.default.forwardRef(({isFullscreen:e,isDisabled:t,...o},r)=>$o.default.createElement("div",{ref:r,...o}));fp.displayName="SliderTrack";var mp=d(fp)`
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
`,hp=$o.default.forwardRef(({isFullscreen:e,isDisabled:t,...o},r)=>$o.default.createElement("div",{ref:r,...o}));hp.displayName="SliderThumb";var yp=d(hp)`
  ${_t} ${Ft} & {
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
`;var gp=({fullscreen:e,value:t,isDisabled:o,onChange:r,onMouseEnter:n,onMouseLeave:i})=>{let{thumbLeft:s,sliderRef:l,thumbRef:a,onMouseMove:u,onMouseDown:p,handleChange:c}=cp({fullscreen:e,value:t,onChange:r});return kr.default.createElement(wr,{ref:l,role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":Math.round(t),"aria-valuetext":`${Math.round(t)}%`,onClick:c,onMouseDown:p,onTouchStart:p,onMouseEnter:n,onMouseLeave:i,isFullscreen:e},kr.default.createElement(dp,{onMouseMove:u,isFullscreen:e},kr.default.createElement(mp,{style:{width:`${t}%`},isFullscreen:e,isDisabled:o}),kr.default.createElement(yp,{ref:a,style:{left:`${s}px`},onMouseDown:p,onTouchStart:p,isFullscreen:e,isDisabled:o})))};gp.propTypes={value:Ho.default.number.isRequired,onChange:Ho.default.func.isRequired,isDisabled:Ho.default.bool.isRequired,fullscreen:Ho.default.bool.isRequired,onMouseEnter:Ho.default.func,onMouseLeave:Ho.default.func};var bp=kr.default.memo(gp,(e,t)=>e.fullscreen===t.fullscreen&&e.value===t.value&&e.onChange===t.onChange&&e.isDisabled===t.isDisabled&&e.onMouseEnter===t.onMouseEnter&&e.onMouseLeave===t.onMouseLeave);var eo=h(T());var Pr=h(T());var ta=({width:e=36,height:t=36})=>Pr.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Pr.default.createElement("path",{d:"M 22.5 18 C 22.5 16.189 21.48 14.624 20 13.87 L 20 22.136 C 21.48 21.377 22.5 19.812 22.5 18 Z"}),Pr.default.createElement("polygon",{points:"9 14.922 9 21.078 13 21.078 18 26.21 18 9.79 13 14.922"}),Pr.default.createElement("path",{d:"M 20 9 L 20 11.119 C 22.89 12.002 25 14.747 25 18 C 25 21.253 22.89 23.999 20 24.881 L 20 27 C 24.005 26.066 27 22.398 27 18 C 27 13.603 24.005 9.934 20 9 Z"}));ta.displayName="UnmutedIcon";ta.propTypes=K;var Li=Pr.default.memo(ta,ee);var th=({fullscreen:e,isMuted:t,volume:o,forceMuted:r,changeVolume:n,onMutedClick:i})=>{let s=V(),l=eo.default.useMemo(()=>Te(e),[e]),a=eo.default.useMemo(()=>t===!0||o===0||r,[t,o,r]),u=eo.default.useCallback(()=>a?eo.default.createElement(yr,{...l}):eo.default.createElement(Li,{...l}),[a,l]),p=eo.default.useMemo(()=>r?s.i18n.thisVideoHasNoSound:a?s.i18n.activateSound:s.i18n.mute,[a,r,s.i18n]),c=eo.default.useCallback(m=>{r===!1&&n(m/100)},[n,r]),f=eo.default.useCallback(()=>{r===!1&&i(a)},[i,a,r]);return{titleMemorized:p,renderIcon:u,handleOnClick:f,handleChange:c}},Sp=th;var vp=d.div`
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
`;var xp=({fullscreen:e,isMuted:t,volume:o,forceMuted:r,changeVolume:n,onMutedClick:i})=>{let s=V(),[l,a]=Mt.default.useState(!1),{titleMemorized:u,renderIcon:p,handleOnClick:c,handleChange:f}=Sp({fullscreen:e,isMuted:t,volume:o,forceMuted:r,changeVolume:n,onMutedClick:i}),m=Mt.default.useCallback(()=>a(!0),[]),y=Mt.default.useCallback(()=>{s.volumeSliding||a(!1)},[s.volumeSliding]);Mt.default.useEffect(()=>{s.volumeSliding||a(!1)},[s.volumeSliding]);let x=l||s.volumeSliding,v=t?0:o,S=(e?54:36)+v*Lt(e);return Mt.default.createElement(lp,{isSliding:s.volumeSliding,isFullscreen:e},Mt.default.createElement(ge,{label:u,fullscreen:e,disabled:s.volumeSliding||l},Mt.default.createElement(re,{type:"button","aria-label":u,onClick:c,isFullscreen:e,isFakeDisabled:r},p())),Mt.default.createElement(bp,{fullscreen:e,value:v*100,isDisabled:r,onChange:f,onMouseEnter:m,onMouseLeave:y}),x&&!r&&Mt.default.createElement(vp,{style:{left:`${S}px`},$fullscreen:e},Math.round(v*100),"%"))};xp.propTypes={fullscreen:zo.default.bool.isRequired,isMuted:zo.default.bool.isRequired,volume:zo.default.number.isRequired,onMutedClick:zo.default.func.isRequired,forceMuted:zo.default.bool.isRequired,changeVolume:zo.default.func.isRequired};var Cp=Mt.default.memo(xp,(e,t)=>e.fullscreen===t.fullscreen&&e.isMuted===t.isMuted&&e.volume===t.volume&&e.forceMuted===t.forceMuted&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume);var Tr=h(T()),hn=h(G());var oa=d.div`
  display: inline-block;
  height: 36px;
  padding: 0 5px;
  font-size: 13px;
  line-height: 35px;
  white-space: nowrap;
`,wp=d.span`
  position: relative;
  top: -2px;
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 50%;
  background: #ff0000;
`,kp=d.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
`;Nt();var Pp=({live:e,duration:t,currentTime:o,chapterTitle:r})=>{let{i18n:n}=V();return Tr.default.createElement(oa,{role:"timer","aria-live":"off"},Oe(Math.round(o)),e?Tr.default.createElement(oa,null,Tr.default.createElement(wp,null),n.live):` / ${Oe(Math.round(t))}`,r&&Tr.default.createElement(kp,null," \xB7 ",r))};Pp.propTypes={live:hn.default.bool.isRequired,duration:hn.default.number.isRequired,currentTime:hn.default.number.isRequired,chapterTitle:hn.default.string};var Tp=Tr.default.memo(Pp,(e,t)=>e.live===t.live&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.chapterTitle===t.chapterTitle);var vt=h(T()),Lr=h(G());var yn=h(T());var ra=({width:e=36,height:t=36})=>yn.default.createElement("svg",{height:e,width:t,version:"1.1",viewBox:"0 0 36 36",fill:"currentColor"},yn.default.createElement("rect",{x:"12",y:"10",width:"3",height:"16"}),yn.default.createElement("rect",{x:"21",y:"10",width:"3",height:"16"}));ra.displayName="PauseIcon";ra.propTypes=K;var Lp=yn.default.memo(ra,ee);var Ep=({fullscreen:e,paused:t,ended:o,onPlayClick:r,onPauseClick:n})=>{let{i18n:i}=V(),s=vt.default.useMemo(()=>Te(e),[e]);return o?vt.default.createElement(ge,{label:i.replay,fullscreen:e},vt.default.createElement(re,{type:"button","aria-label":i.replay,onClick:r,isFullscreen:e},vt.default.createElement(Sr,{...s}))):t?vt.default.createElement(ge,{label:i.play,fullscreen:e},vt.default.createElement(re,{type:"button","aria-label":i.play,onClick:r,isFullscreen:e},vt.default.createElement(gr,{...s}))):vt.default.createElement(ge,{label:i.pause,fullscreen:e},vt.default.createElement(re,{type:"button","aria-label":i.pause,onClick:n,isFullscreen:e},vt.default.createElement(Lp,{...s})))};Ep.propTypes={fullscreen:Lr.default.bool.isRequired,paused:Lr.default.bool.isRequired,ended:Lr.default.bool.isRequired,onPlayClick:Lr.default.func.isRequired,onPauseClick:Lr.default.func.isRequired};var Mp=vt.default.memo(Ep,(e,t)=>e.fullscreen===t.fullscreen&&e.paused===t.paused&&e.ended===t.ended&&e.onPlayClick===t.onPlayClick&&e.onPauseClick===t.onPauseClick);var It=h(T()),jo=h(G());var Ei=h(T());var na=({width:e=36,height:t=36})=>Ei.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},Ei.default.createElement("path",{d:"M 22.789 12.113 C 22.918 12.014 23.028 11.98 23.117 12.011 C 23.206 12.042 23.25 12.126 23.25 12.261 L 23.25 23.739 C 23.25 23.874 23.206 23.958 23.117 23.989 C 23.028 24.02 22.918 23.986 22.789 23.887 L 15.508 18.351 C 15.447 18.304 15.402 18.255 15.375 18.203 L 15.375 23.49 C 15.375 23.625 15.31 23.742 15.18 23.841 C 15.05 23.939 14.896 23.989 14.719 23.989 L 13.406 23.989 C 13.229 23.989 13.075 23.939 12.945 23.841 C 12.815 23.742 12.75 23.625 12.75 23.49 L 12.75 12.51 C 12.75 12.375 12.815 12.258 12.945 12.159 C 13.075 12.061 13.229 12.011 13.406 12.011 L 14.719 12.011 C 14.896 12.011 15.05 12.061 15.18 12.159 C 15.31 12.258 15.375 12.375 15.375 12.51 L 15.375 17.797 C 15.402 17.745 15.447 17.696 15.508 17.649 Z"}));na.displayName="PreviousTrackIcon";na.propTypes=K;var Ip=Ei.default.memo(na,ee);var Mi=h(T());var ia=({width:e=36,height:t=36})=>Mi.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},Mi.default.createElement("path",{d:"M 13.211 12.113 C 13.082 12.014 12.972 11.98 12.883 12.011 C 12.794 12.042 12.75 12.126 12.75 12.261 L 12.75 23.739 C 12.75 23.874 12.794 23.958 12.883 23.989 C 12.972 24.02 13.082 23.986 13.211 23.887 L 20.492 17.649 C 20.553 17.696 20.598 17.745 20.625 17.797 L 20.625 12.51 C 20.625 12.375 20.69 12.258 20.82 12.159 C 20.95 12.061 21.104 12.011 21.281 12.011 L 22.594 12.011 C 22.771 12.011 22.925 12.061 23.055 12.159 C 23.185 12.258 23.25 12.375 23.25 12.51 L 23.25 23.49 C 23.25 23.625 23.185 23.742 23.055 23.841 C 22.925 23.939 22.771 23.989 22.594 23.989 L 21.281 23.989 C 21.104 23.989 20.95 23.939 20.82 23.841 C 20.69 23.742 20.625 23.625 20.625 23.49 L 20.625 18.203 C 20.598 18.255 20.553 18.304 20.492 18.351 Z"}));ia.displayName="NextTrackIcon";ia.propTypes=K;var Ap=Mi.default.memo(ia,ee);var Ii=It.default.memo(({fullscreen:e,onPrevious:t,showNavButtons:o=!1})=>{let{i18n:r}=V(),n=It.default.useMemo(()=>Te(e),[e]),i=typeof t=="function";return!i&&!o?null:It.default.createElement(ge,{label:r.previous,fullscreen:e},It.default.createElement(re,{type:"button","aria-label":r.previous,onClick:i?t:void 0,isFullscreen:e,isFakeDisabled:!i},It.default.createElement(Ip,{...n})))});Ii.displayName="PreviousButton";Ii.propTypes={fullscreen:jo.default.bool.isRequired,onPrevious:jo.default.func,showNavButtons:jo.default.bool};var Ai=It.default.memo(({fullscreen:e,onNext:t,showNavButtons:o=!1})=>{let{i18n:r}=V(),n=It.default.useMemo(()=>Te(e),[e]),i=typeof t=="function";return!i&&!o?null:It.default.createElement(ge,{label:r.next,fullscreen:e},It.default.createElement(re,{type:"button","aria-label":r.next,onClick:i?t:void 0,isFullscreen:e,isFakeDisabled:!i},It.default.createElement(Ap,{...n})))});Ai.displayName="NextButton";Ai.propTypes={fullscreen:jo.default.bool.isRequired,onNext:jo.default.func,showNavButtons:jo.default.bool};var to=h(T()),Di=h(G());var Oi=h(T());var sa=({width:e=36,height:t=36})=>Oi.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36"},Oi.default.createElement("path",{fill:"currentColor",d:"M 12 20.667 L 10 20.667 L 10 26 L 15.333 26 L 15.333 24 L 12 24 L 12 20.667 Z M 10 15.333 L 12 15.333 L 12 12 L 15.333 12 L 15.333 10 L 10 10 L 10 15.333 Z M 24 24 L 20.667 24 L 20.667 26 L 26 26 L 26 20.667 L 24 20.667 L 24 24 Z M 20.667 10 L 20.667 12 L 24 12 L 24 15.333 L 26 15.333 L 26 10 L 20.667 10 Z"}));sa.displayName="FullscreenIcon";sa.propTypes=K;var Op=Oi.default.memo(sa,ee);var Ri=h(T());var aa=({width:e=36,height:t=36})=>Ri.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},Ri.default.createElement("path",{d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"}));aa.displayName="UnfullscreenIcon";aa.propTypes=K;var Rp=Ri.default.memo(aa,ee);var Dp=({fullscreen:e,requestFullscreen:t,exitFullscreen:o})=>{let{i18n:r}=V(),n=to.default.useMemo(()=>Te(e),[e]);return e?to.default.createElement(ge,{label:r.exitFullScreenMode,fullscreen:!0},to.default.createElement(re,{type:"button","aria-label":r.exitFullScreenMode,onClick:o,isFullscreen:!0},to.default.createElement(Rp,{...n}))):to.default.createElement(ge,{label:r.fullScreen},to.default.createElement(re,{type:"button","aria-label":r.fullScreen,onClick:t},to.default.createElement(Op,{...n})))};Dp.propTypes={fullscreen:Di.default.bool.isRequired,requestFullscreen:Di.default.func.isRequired,exitFullscreen:Di.default.func.isRequired};var Bp=to.default.memo(Dp,(e,t)=>e.fullscreen===t.fullscreen&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen);var xo=h(T());var oh=3*1e3,rh=({hasResource:e,loading:t,prevented:o,paused:r,ended:n,waiting:i,seeking:s,kernelMsg:l})=>{let{controlsHovering:a,timeSliding:u,menuVisible:p,subMenuVisible:c}=V(),f=he(),m=xo.default.useRef(void 0),y=e===!1||t||o||r||n||i||s||u||p||c||a||l,x=xo.default.useRef(y);x.current=y;let v=e===!1||t||o||r||n||i||s||u||p||c||l,w=xo.default.useRef(v);w.current=v;let S=xo.default.useCallback(()=>{typeof window!="undefined"&&window.clearTimeout(m.current),f({type:"hiding",payload:!1}),!x.current&&(m.current=window.setTimeout(()=>{f({type:"hiding",payload:!0})},oh))},[f]),b=xo.default.useCallback(()=>{if(typeof window!="undefined"&&window.clearTimeout(m.current),f({type:"controlsHovering",payload:!1}),w.current){f({type:"hiding",payload:!1});return}f({type:"hiding",payload:!0})},[f]);return xo.default.useEffect(()=>{typeof window!="undefined"&&(r||n)?(window.clearTimeout(m.current),f({type:"hiding",payload:!1})):!r&&!n&&S()},[r,n,S,f]),xo.default.useEffect(()=>()=>{typeof window!="undefined"&&window.clearTimeout(m.current)},[]),{showControls:S,hideControls:b}},Np=rh;var oo=h(T()),gn=h(G());var qp=d.div`
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
  ${({$visible:e})=>e?W`
          opacity: 1;
          pointer-events: none;
        `:W`
          opacity: 0;
          pointer-events: none;
        `}
`,Fp=d.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`;var _p=({spriteVTTFile:e,duration:t,seekTime:o,visible:r})=>{let[n,i]=oo.default.useState([]),[s,l]=oo.default.useState({}),a=oo.default.useRef(null);oo.default.useEffect(()=>{if(!e)return;let p=!1;return(async()=>{try{let c=await fetch(e).then(w=>w.text());if(p)return;let f=e.substring(0,e.lastIndexOf("/")+1),m=c.replace(/^([^#?\n]+\.(png|jpg|jpeg|webp))/gim,w=>w.startsWith("http")?w:`${f}${w}`),y=wi(m);i(y);let x=[...new Set(y.map(w=>w.file))],v={};await Promise.all(x.map(w=>new Promise(S=>{let b=new Image;b.onload=()=>{v[w]={w:b.naturalWidth,h:b.naturalHeight},S()},b.onerror=S,b.src=w}))),p||l(v)}catch(c){console.error("SpritePreview: Error parsing VTT file:",c)}})(),()=>{p=!0}},[e]);let u=oo.default.useMemo(()=>{if(!r||n.length===0||t<=0)return null;let p=a.current;if(!p)return null;let c=p.offsetWidth,f=p.offsetHeight;if(!c||!f)return null;for(let m of n)if(o>=m.from&&o<=m.to){let y=Number(m.w),x=Number(m.h),v=Number(m.x),w=Number(m.y),S=s[m.file];if(!y||!x||!S)return null;let b=c/y,M=f/x,L=Math.max(b,M),k=S.w*L,I=S.h*L,q=-(v*L),E=-(w*L),C=y*L,N=x*L,g=(c-C)/2,P=(f-N)/2;return{backgroundImage:`url(${m.file})`,backgroundSize:`${k}px ${I}px`,backgroundPosition:`${q+g}px ${E+P}px`}}return null},[r,n,t,o,s]);return e?oo.default.createElement(qp,{ref:a,$visible:r&&u!==null},u&&oo.default.createElement(Fp,{style:u})):null};_p.propTypes={spriteVTTFile:gn.default.string,duration:gn.default.number.isRequired,seekTime:gn.default.number.isRequired,visible:gn.default.bool.isRequired};var bn=oo.default.memo(_p,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration&&e.seekTime===t.seekTime&&e.visible===t.visible);var Be=h(T()),lt=h(G());var Sn=h(T());var Vp=d.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,$p=Sn.default.forwardRef(({singleOption:e,hiding:t,isFullscreen:o,...r},n)=>Sn.default.createElement("div",{ref:n,...r}));$p.displayName="DropdownOverlay";var Hp=d($p)`
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
`,zp=d.ul`
  min-width: 250px;
  padding: 10px 0;
`,jp=d.li`
  & ${re} {
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
  & ${re}:focus, & ${re}:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`,Up=d.div`
  margin-right: auto;
`,Wp=d.div`
  font-size: 87%;
`,Yp=d.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`,la=Sn.default.forwardRef(({isFullHD:e=!1,isExpanded:t=!1,isFullscreen:o=!1,...r},n)=>Sn.default.createElement(re,{ref:n,isFullscreen:o,...r}));la.displayName="DropdownButton";la.displayName="DropdownButton";var Xp=d(la)`
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
`;var Bi=h(T());var ua=({width:e=36,height:t=36})=>Bi.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},Bi.default.createElement("path",{d:"M 25.089 17.774 C 25.056 17.032 24.908 16.3 24.649 15.604 L 25.796 14.535 C 26.013 14.326 26.065 13.997 25.921 13.732 C 25.463 12.886 24.874 12.117 24.177 11.453 C 23.965 11.247 23.641 11.211 23.39 11.366 L 22.034 12.21 C 21.424 11.786 20.75 11.461 20.039 11.247 L 19.9 9.677 C 19.877 9.375 19.646 9.13 19.345 9.09 C 18.927 9.029 18.505 8.999 18.082 9 C 17.543 8.998 17.006 9.045 16.476 9.141 C 16.19 9.187 15.97 9.419 15.939 9.706 L 15.772 11.311 C 15.117 11.533 14.498 11.849 13.934 12.249 L 12.614 11.398 C 12.362 11.236 12.032 11.269 11.817 11.478 C 11.108 12.158 10.512 12.947 10.053 13.816 C 9.913 14.076 9.961 14.398 10.172 14.606 L 11.329 15.72 C 11.115 16.314 10.981 16.933 10.93 17.563 L 9.44 18.086 C 9.155 18.18 8.974 18.459 9.003 18.757 C 9.068 19.751 9.296 20.727 9.677 21.646 C 9.786 21.924 10.073 22.091 10.368 22.048 L 11.93 21.823 C 12.234 22.337 12.602 22.811 13.025 23.232 L 12.473 24.754 C 12.372 25.032 12.468 25.342 12.707 25.515 C 13.505 26.099 14.394 26.548 15.338 26.844 C 15.625 26.937 15.938 26.818 16.09 26.559 L 16.897 25.207 C 17.245 25.265 17.597 25.297 17.95 25.303 C 18.215 25.305 18.48 25.292 18.744 25.261 L 19.55 26.658 C 19.69 26.921 19.991 27.054 20.28 26.979 C 21.228 26.728 22.128 26.321 22.943 25.775 C 23.195 25.609 23.302 25.293 23.203 25.008 L 22.686 23.512 C 23.198 23.057 23.643 22.532 24.006 21.951 L 25.568 22.202 C 25.862 22.25 26.151 22.089 26.265 21.813 C 26.657 20.921 26.903 19.971 26.994 19.001 C 27.034 18.698 26.855 18.41 26.567 18.311 Z M 25.266 20.834 L 23.37 20.532 L 22.917 21.258 C 22.62 21.735 22.257 22.167 21.838 22.542 L 21.195 23.123 L 21.838 24.947 C 21.392 25.208 20.92 25.423 20.431 25.589 L 19.467 23.9 L 18.641 23.984 C 18.428 24.009 18.213 24.02 17.999 24.019 C 17.708 24.013 17.418 23.986 17.131 23.939 L 16.238 23.769 L 15.255 25.438 C 14.764 25.253 14.294 25.017 13.854 24.732 L 14.526 22.898 L 13.931 22.311 C 13.587 21.962 13.286 21.573 13.035 21.152 L 12.595 20.413 L 10.696 20.686 C 10.526 20.188 10.406 19.674 10.336 19.152 L 12.158 18.51 L 12.216 17.668 C 12.255 17.154 12.364 16.648 12.537 16.163 L 12.816 15.366 L 11.422 14.021 C 11.69 13.582 12.001 13.17 12.35 12.792 L 13.957 13.832 L 14.66 13.328 C 15.122 13.002 15.629 12.743 16.164 12.56 L 16.951 12.297 L 17.154 10.352 C 17.458 10.311 17.765 10.289 18.072 10.284 C 18.268 10.284 18.464 10.284 18.664 10.313 L 18.834 12.239 L 19.672 12.493 C 20.254 12.668 20.805 12.933 21.304 13.28 L 21.995 13.761 L 23.634 12.74 C 23.973 13.107 24.276 13.504 24.54 13.928 L 23.139 15.244 L 23.46 16.063 C 23.67 16.632 23.792 17.23 23.82 17.835 L 23.859 18.705 L 25.664 19.364 C 25.581 19.866 25.447 20.358 25.266 20.834 Z M 17.979 21.2 C 15.506 21.2 13.96 18.524 15.197 16.384 C 16.434 14.244 19.525 14.244 20.762 16.384 C 21.048 16.88 21.197 17.443 21.192 18.015 C 21.189 19.783 19.748 21.211 17.979 21.2 Z M 18.021 16.063 C 16.537 16.046 15.591 17.64 16.318 18.933 C 17.045 20.226 18.9 20.248 19.657 18.972 C 19.833 18.675 19.926 18.335 19.926 17.99 C 19.926 16.934 19.077 16.075 18.021 16.063 Z"}));ua.displayName="SettingsIcon";ua.propTypes=K;var Ni=Bi.default.memo(ua,ee);var ae=h(T()),vn=h(G());Ne();var At=h(T());var Qp=At.default.forwardRef(({isFullscreen:e,...t},o)=>At.default.createElement("div",{ref:o,...t}));Qp.displayName="OptionsContainer";var ca=d(Qp)`
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
`,Gp=At.default.forwardRef(({isFullscreen:e,...t},o)=>At.default.createElement("div",{ref:o,...t}));Gp.displayName="OptionsHeader";var pa=d(Gp)`
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
`,Kp=At.default.forwardRef(({selected:e,isFullscreen:t,...o},r)=>At.default.createElement("div",{ref:r,...o}));Kp.displayName="OptionsItem";var qi=d(Kp)`
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
`,da=d.span`
  flex: 1;
`,Zp=d.span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
`,Jp=At.default.forwardRef(({isFullscreen:e,...t},o)=>At.default.createElement("button",{ref:o,...t}));Jp.displayName="ResetButton";var m3=d(Jp)`
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
`,ed=At.default.forwardRef(({show:e,...t},o)=>At.default.createElement("div",{ref:o,...t}));ed.displayName="OptionsContent";var fa=d(ed)`
  opacity: 0;
  transform: translate(100px, 0);
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
  ${({show:e})=>e&&`
    opacity: 1;
    transform: translate(0, 0);
  `}
`;var Fi=h(T());var ma=({width:e=36,height:t=36})=>Fi.default.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},Fi.default.createElement("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"}));ma.displayName="ArrowLeftIcon";ma.propTypes=K;var Uo=Fi.default.memo(ma,ee);var _i=h(T());var ha=({width:e=36,height:t=36})=>_i.default.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},_i.default.createElement("path",{fill:"currentColor",d:"M 15.7 12 C 15.7 12.105 15.658 12.196 15.573 12.277 L 9.648 17.88 C 9.563 17.96 9.466 18 9.355 18 C 9.245 18 9.148 17.96 9.063 17.88 L 8.427 17.278 C 8.342 17.199 8.3 17.106 8.3 17.002 C 8.3 16.898 8.342 16.806 8.427 16.725 L 13.424 12 L 8.427 7.275 C 8.342 7.194 8.3 7.102 8.3 6.998 C 8.3 6.894 8.342 6.801 8.427 6.722 L 9.063 6.12 C 9.148 6.04 9.245 6 9.355 6 C 9.466 6 9.563 6.04 9.648 6.12 L 15.573 11.723 C 15.658 11.804 15.7 11.895 15.7 12 Z"}));ha.displayName="ArrowRightIcon";ha.propTypes=K;var Er=_i.default.memo(ha,ee);var td=({captionStyle:e,onStyleChange:t,onClose:o,isFullscreen:r})=>{let{i18n:n}=V(),[i,s]=ae.default.useState(null),[l,a]=ae.default.useState(!1);ae.default.useEffect(()=>{let m=setTimeout(()=>a(!0),50);return()=>clearTimeout(m)},[]);let u=ae.default.useMemo(()=>[{key:"fontFamily",label:n.fontFamily},{key:"fontColor",label:n.fontColor},{key:"fontSize",label:n.fontSize},{key:"fontOpacity",label:n.fontOpacity},{key:"backgroundColor",label:n.backgroundColor},{key:"backgroundOpacity",label:n.backgroundOpacity},{key:"windowColor",label:n.windowColor},{key:"windowOpacity",label:n.windowOpacity},{key:"edgeStyle",label:n.edgeStyle}],[n]),p=ae.default.useCallback(()=>{t(fo)},[t]),c=ae.default.useCallback((m,y)=>{t({...e,[m]:y}),s(null)},[e,t]),f=ae.default.useCallback(m=>{let y=jr[m],x=y==null?void 0:y.find(v=>v.value===e[m]);return(x==null?void 0:x.label)||e[m]},[e]);if(i){let m=jr[i.key],y=u.find(x=>x.key===i.key);return ae.default.createElement(ca,{isFullscreen:r},ae.default.createElement(pa,{isFullscreen:r},ae.default.createElement(re,{onClick:()=>s(null),isFullscreen:r,isText:!0},ae.default.createElement(Uo,{width:28,height:28}),ae.default.createElement("span",null,y==null?void 0:y.label))),ae.default.createElement(fa,{show:l},m==null?void 0:m.map(x=>ae.default.createElement(qi,{key:x.value,selected:e[i.key]===x.value,onClick:()=>c(i.key,x.value),isFullscreen:r},e[i.key]===x.value&&"\u2713 ",x.label))))}return ae.default.createElement(ca,{isFullscreen:r},ae.default.createElement(pa,{isFullscreen:r},ae.default.createElement(re,{onClick:o,isFullscreen:r,isText:!0},ae.default.createElement(Uo,{width:28,height:28}),ae.default.createElement("span",null,n.captionOptions))),ae.default.createElement(fa,{show:l},u.map(m=>ae.default.createElement(qi,{key:m.key,onClick:()=>s(m),isFullscreen:r},ae.default.createElement(da,null,m.label),ae.default.createElement(Zp,null,f(m.key)," ",ae.default.createElement(Er,{width:16,height:16})))),ae.default.createElement(qi,{onClick:p,isFullscreen:r},ae.default.createElement(da,null,n.reset))))};td.propTypes={captionStyle:vn.default.object.isRequired,onStyleChange:vn.default.func.isRequired,onClose:vn.default.func.isRequired,isFullscreen:vn.default.bool};var od=ae.default.memo(td);var xn=h(T());var tt=h(T());var rd=tt.default.forwardRef(({title:e,options:t,value:o,hiding:r,isFullscreen:n,onClick:i,goBack:s,showOptionsButton:l,onOptionsClick:a,...u},p)=>{let{i18n:c}=V(),[f,m]=tt.default.useState(!1);return tt.default.useEffect(()=>{m(!1),r&&setTimeout(()=>{m(!0)},100)},[r]),tt.default.createElement("div",{ref:p,...u},tt.default.createElement(id,null,tt.default.createElement(re,{onClick:s,isFullscreen:n,isText:!0,style:l?{width:"auto"}:void 0},tt.default.createElement(Uo,{width:28,height:28}),tt.default.createElement("span",null,e)),l&&a&&tt.default.createElement(re,{onClick:a,isFullscreen:n,isText:!0,style:{marginLeft:"auto",fontSize:"12px",textDecoration:"underline",opacity:.8,width:"auto",padding:"20px 15px"}},c.captionOptions)),tt.default.createElement(sd,{show:f},tt.default.createElement(ad,null,t.map((y,x)=>tt.default.createElement(ld,{key:x,selected:y.value===o,isFullscreen:n},tt.default.createElement(re,{onClick:()=>i(y.value),isFullscreen:n,isText:!0},y.label,"isFullHD"in y&&y.isFullHD&&tt.default.createElement(ud,null,c.hd)))))))});rd.displayName="DropdownOverlay";var nd=rd;var cd=d(nd)`
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
`,id=d.div`
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
  & ${re} {
    width: 100%;
    font-size: 91%;
    padding: 20px 5px;
    height: 57px;
  }
`,pd=xn.default.forwardRef(({show:e,...t},o)=>xn.default.createElement("div",{ref:o,...t}));pd.displayName="DropdownContent";var sd=d(pd)`
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
`,ad=d.ul`
  padding: 10px 0;
`,dd=xn.default.forwardRef(({selected:e,isFullscreen:t,...o},r)=>xn.default.createElement("li",{ref:r,...o}));dd.displayName="DropdownItem";var ld=d(dd)`
  ${_t} ${Ft} & {
    padding: 0 15px;

    & ${re} {
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
    & ${re}:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }
  }
`,ud=d.sub`
  font-size: 10px;
  font-weight: 500;
  color: #cb0e0b;
  margin-left: 3px;
`;var Le=h(T());var Cn={generalMenu:!1,speed:!1,quality:!1,captions:!1};var Mr=({label:e,value:t,i18n:o})=>e==="quality"?t==="0"?o.auto:`${t}p`:e==="speed"&&t==="1"?o.normal:t;var fd=({qualityOptions:e,captionOptions:t,live:o,i18n:r})=>{let n=[];return o||n.push({label:r.speed,value:"speed",options:[{label:"2",value:"2"},{label:"1.5",value:"1.5"},{label:"1.25",value:"1.25"},{label:"Normal",value:"1"},{label:"0.75",value:"0.75"},{label:"0.5",value:"0.5"},{label:"0.25",value:"0.25"}]}),e.length>0&&n.push({label:r.quality,value:"quality",options:[...e,{label:r.auto,value:"0",isFullHD:!1}]}),t&&t.length>0&&n.push({label:r.captions,value:"captions",options:[{label:r.off,value:"off"},...t]}),n};var nh=({live:e,fullHDQualityBreak:t,qualities:o,captions:r,activeCaption:n,playbackRate:i,playbackQuality:s,changeSettings:l,onCaptionChange:a,fullscreen:u})=>{let{i18n:p}=V(),c=he(),f=Le.default.useRef(null),m=Le.default.useRef(s);m.current=s;let[y,x]=Le.default.useState(Cn),[v,w]=Le.default.useState(!0),[S,b]=Le.default.useState({quality:{label:p.auto,value:"0",isFullHD:!1},speed:{label:p.normal,value:"1"},captions:{label:p.off,value:"off"}});(0,Le.useEffect)(()=>{let g=i.toString();b(P=>({...P,speed:{label:Mr({label:"speed",value:g,i18n:p}),value:g}}))},[p,i]),(0,Le.useEffect)(()=>{var P;let g=(P=S.captions)==null?void 0:P.value;if(n===null&&g!=="off")b(D=>({...D,captions:{label:p.off,value:"off"}}));else if(n&&g!==n){let D=r==null?void 0:r.find(z=>z.language===n),j=(D==null?void 0:D.label)||n;b(z=>({...z,captions:{label:j,value:n}}))}},[n,r,p]),(0,Le.useEffect)(()=>{if(s==null||s===0||o.length===0)return;let g=s.toString();if(v){let P=`${p.auto} (${g}p)`;b(D=>{var j,z;return((j=D.quality)==null?void 0:j.value)==="0"&&((z=D.quality)==null?void 0:z.label)===P?D:{...D,quality:{label:P,value:"0",isFullHD:t!==void 0&&Number(g)>=t}}})}},[s,o,p,t,v]);let M=Le.default.useCallback(g=>{g.stopPropagation(),c(P=>({menuVisible:P.subMenuVisible?!1:!P.menuVisible,subMenuVisible:!1})),x(P=>({...Cn,generalMenu:!P.speed&&!P.quality&&!P.captions?!P.generalMenu:!1}))},[c]),L=Le.default.useCallback(g=>P=>{if(g==="quality")if(P==="0"){w(!0);let D=m.current,j=D&&D!==0?`${p.auto} (${D}p)`:p.auto;b(z=>({...z,quality:{label:j,value:"0",isFullHD:t!==void 0&&Number(D!=null?D:0)>=t}}))}else w(!1),b(D=>({...D,quality:{label:Mr({label:"quality",value:P,i18n:p}),value:P,isFullHD:t!==void 0&&Number(P!=null?P:"0")>=t}}));else if(g==="captions"){let D=r==null?void 0:r.find(z=>z.language===P),j=P==="off"?p.off:(D==null?void 0:D.label)||P;b(z=>({...z,captions:{label:j,value:P}})),a&&a(P==="off"?null:P)}else b(D=>({...D,[g]:{label:Mr({label:g,value:P,i18n:p}),value:P,isFullHD:t!==void 0&&Number(P!=null?P:"0")>=t}}));c({menuVisible:!1,subMenuVisible:!1}),x(Cn)},[t,p,c,r,a]),k=Le.default.useCallback(g=>{c({menuVisible:!1,subMenuVisible:!0}),x(P=>({...P,generalMenu:!1,[g]:!0}))},[c]),I=Le.default.useCallback(g=>()=>{c({menuVisible:!0,subMenuVisible:!1}),x(P=>({...P,generalMenu:!0,[g]:!1}))},[c]);Le.default.useEffect(()=>{let g=P=>{if(!f.current)return;(P.composedPath?P.composedPath():[]).includes(f.current)||f.current.contains(P.target)||(c({menuVisible:!1,subMenuVisible:!1}),x(Cn))};return document.body.addEventListener("click",g),()=>document.body.removeEventListener("click",g)},[c]);let q=Le.default.useMemo(()=>!r||r.length===0?[]:r.map(g=>({label:g.label,value:g.language})),[r]),E=Le.default.useMemo(()=>fd({qualityOptions:o,captionOptions:q,live:e,i18n:p}),[e,o,q,p]),C=Le.default.useMemo(()=>Te(u),[u]),N=Le.default.useRef(S);return Le.default.useEffect(()=>{var P,D,j,z;let g=N.current;if(g!==S){N.current=S;let Y={};((P=g.speed)==null?void 0:P.value)!==((D=S.speed)==null?void 0:D.value)&&(Y.speed=S.speed),((j=g.quality)==null?void 0:j.value)!==((z=S.quality)==null?void 0:z.value)&&(Y.quality=S.quality),(Y.speed||Y.quality)&&l(Y)}},[S,l]),{dropdownRef:f,settings:y,values:S,iconProps:C,settingsOptions:E,handleButtonClick:M,handleMenuItemClick:k,handleMenuClick:L,handleGoBack:I}},md=nh;var hd=({live:e,qualities:t,captions:o,activeCaption:r,playbackRate:n,playbackQuality:i,fullHDQualityBreak:s,changeSettings:l,onCaptionChange:a,captionStyle:u,onCaptionStyleChange:p,fullscreen:c})=>{var q;let{i18n:f}=V(),[m,y]=Be.default.useState(!1),{dropdownRef:x,settings:v,values:w,iconProps:S,settingsOptions:b,handleButtonClick:M,handleMenuItemClick:L,handleMenuClick:k,handleGoBack:I}=md({live:e,fullHDQualityBreak:s,qualities:t,captions:o,activeCaption:r,playbackRate:n,playbackQuality:i,changeSettings:l,onCaptionChange:a,fullscreen:c});return Be.default.useEffect(()=>{!v.captions&&m&&y(!1)},[v.captions,m]),Be.default.createElement(Vp,{ref:x},Be.default.createElement(ge,{label:f.settings,fullscreen:c},Be.default.createElement(Xp,{type:"button","aria-label":f.settings,"aria-expanded":v.generalMenu,onClick:M,isFullscreen:c,isFullHD:(q=w.quality)==null?void 0:q.isFullHD,isExpanded:v.generalMenu},Be.default.createElement(Ni,{...S}))),Be.default.createElement(Hp,{hiding:v.generalMenu,singleOption:e||t.length===0&&(!o||o.length===0),isFullscreen:c},Be.default.createElement(zp,null,b.map((E,C)=>{var N;return Be.default.createElement(jp,{key:C},Be.default.createElement(re,{onClick:()=>L(E.value),isFullscreen:c,isText:!0},Be.default.createElement(Up,null,E.label),Be.default.createElement(Yp,null,Be.default.createElement(Wp,null,(N=w[E.value])==null?void 0:N.label),Be.default.createElement(Er,{width:28,height:28}))))}))),b.map((E,C)=>{var N;return Be.default.createElement(cd,{key:C,hiding:v[E.value]&&!(E.value==="captions"&&m),title:E.label,options:E.options,value:(N=w[E.value])==null?void 0:N.value,isFullscreen:c,onClick:E.value==="captions"?g=>{g==="__options__"?y(!0):k(E.value)(g)}:k(E.value),goBack:I(E.value),showOptionsButton:E.value==="captions",onOptionsClick:g=>{g.stopPropagation(),y(!0)}})}),m&&u&&Be.default.createElement(od,{captionStyle:u,onStyleChange:p,onClose:()=>{y(!1),L("captions")},isFullscreen:c}))};hd.propTypes={live:lt.default.bool.isRequired,qualities:lt.default.arrayOf(lt.default.shape({label:lt.default.string.isRequired,value:lt.default.string.isRequired}).isRequired).isRequired,captions:lt.default.array,playbackRate:lt.default.number.isRequired,playbackQuality:lt.default.number,fullHDQualityBreak:lt.default.number,changeSettings:lt.default.func.isRequired,onCaptionChange:lt.default.func,fullscreen:lt.default.bool.isRequired};var yd=Be.default.memo(hd,(e,t)=>e.live===t.live&&e.qualities===t.qualities&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.changeSettings===t.changeSettings&&e.onCaptionChange===t.onCaptionChange&&e.captionStyle===t.captionStyle&&e.onCaptionStyleChange===t.onCaptionStyleChange&&e.fullscreen===t.fullscreen);var ro=h(T()),wn=h(G());var Ir=h(T());var ya=({width:e=36,height:t=36,active:o=!1})=>o?Ir.default.createElement("svg",{height:t,width:e,viewBox:"-6 -6 36 36",fill:"currentColor"},Ir.default.createElement("path",{d:"M21.20 3.01L21 3H3L2.79 3.01C2.30 3.06 1.84 3.29 1.51 3.65C1.18 4.02 .99 4.50 1 5V19L1.01 19.20C1.05 19.66 1.26 20.08 1.58 20.41C1.91 20.73 2.33 20.94 2.79 20.99L3 21H21L21.20 20.98C21.66 20.94 22.08 20.73 22.41 20.41C22.73 20.08 22.94 19.66 22.99 19.20L23 19V5C23.00 4.50 22.81 4.02 22.48 3.65C22.15 3.29 21.69 3.06 21.20 3.01ZM9.03 8.08L9.29 8.16C9.79 8.35 10.24 8.65 10.60 9.05L10.77 9.26L10.83 9.34C10.96 9.55 11.01 9.80 10.96 10.05C10.92 10.29 10.79 10.51 10.59 10.66C10.40 10.81 10.15 10.89 9.91 10.87C9.66 10.85 9.43 10.74 9.26 10.57L9.19 10.49L9.11 10.39C8.98 10.24 8.81 10.12 8.62 10.05L8.54 10.02C8.32 9.97 8.10 10.00 7.91 10.11C7.67 10.24 7.48 10.43 7.35 10.67L7.28 10.79C7.09 11.16 6.99 11.58 7 12L7.00 12.16C7.02 12.52 7.11 12.88 7.28 13.20L7.35 13.32C7.48 13.56 7.67 13.75 7.91 13.88L7.99 13.92C8.16 14.00 8.35 14.02 8.54 13.97L8.62 13.94C8.85 13.85 9.05 13.70 9.19 13.50L9.26 13.43C9.44 13.24 9.68 13.13 9.93 13.12C10.19 13.11 10.44 13.20 10.63 13.37C10.82 13.53 10.94 13.77 10.97 14.02C11.00 14.27 10.93 14.53 10.77 14.73C10.39 15.23 9.88 15.61 9.29 15.83L9.03 15.91C8.43 16.06 7.79 16.01 7.21 15.77L6.97 15.65C6.42 15.35 5.95 14.90 5.64 14.36L5.50 14.12C5.21 13.55 5.04 12.92 5.00 12.27L5 12C4.99 11.26 5.17 10.53 5.50 9.87L5.64 9.63C5.96 9.09 6.42 8.64 6.97 8.34C7.60 8.00 8.34 7.91 9.03 8.08ZM17.03 8.08L17.29 8.16C17.79 8.35 18.24 8.65 18.60 9.05L18.77 9.26L18.83 9.34C18.96 9.55 19.01 9.80 18.96 10.05C18.92 10.29 18.79 10.51 18.59 10.66C18.40 10.81 18.15 10.89 17.91 10.87C17.66 10.85 17.43 10.74 17.26 10.57L17.19 10.49L17.11 10.39C16.98 10.24 16.81 10.12 16.62 10.05L16.54 10.02C16.32 9.97 16.10 10.00 15.91 10.11C15.67 10.24 15.48 10.43 15.35 10.67L15.28 10.79C15.09 11.16 14.99 11.58 15 12L15.00 12.16C15.02 12.52 15.11 12.88 15.28 13.20L15.35 13.32C15.48 13.56 15.67 13.75 15.91 13.88L15.99 13.92C16.16 14.00 16.35 14.02 16.54 13.97L16.62 13.94C16.85 13.85 17.05 13.70 17.19 13.50L17.26 13.43C17.44 13.24 17.68 13.13 17.93 13.12C18.19 13.11 18.44 13.20 18.63 13.37C18.82 13.53 18.94 13.77 18.97 14.02C19.00 14.27 18.93 14.53 18.77 14.73C18.39 15.23 17.88 15.61 17.29 15.83L17.03 15.91C16.43 16.06 15.79 16.01 15.21 15.77L14.97 15.65C14.42 15.35 13.95 14.90 13.64 14.36L13.50 14.12C13.21 13.55 13.04 12.92 13.00 12.27L13 12C12.99 11.26 13.17 10.53 13.50 9.87L13.64 9.63C13.96 9.09 14.42 8.64 14.97 8.34C15.60 8.00 16.34 7.91 17.03 8.08Z"})):Ir.default.createElement("svg",{height:t,width:e,viewBox:"-6 -6 36 36",fill:"currentColor"},Ir.default.createElement("path",{d:"M21.20 3.01L21 3H3L2.79 3.01C2.30 3.06 1.84 3.29 1.51 3.65C1.18 4.02 .99 4.50 1 5V19L1.01 19.20C1.05 19.66 1.26 20.08 1.58 20.41C1.91 20.73 2.33 20.94 2.79 20.99L3 21H21L21.20 20.98C21.66 20.94 22.08 20.73 22.41 20.41C22.73 20.08 22.94 19.66 22.99 19.20L23 19V5C23.00 4.50 22.81 4.02 22.48 3.65C22.15 3.29 21.69 3.06 21.20 3.01ZM3 19V5H21V19H3ZM6.97 8.34C6.42 8.64 5.96 9.09 5.64 9.63L5.50 9.87C5.16 10.53 4.99 11.26 5 12L5.00 12.27C5.04 12.92 5.21 13.55 5.50 14.12L5.64 14.36C5.96 14.90 6.42 15.35 6.97 15.65L7.21 15.77C7.79 16.01 8.43 16.06 9.03 15.91L9.29 15.83C9.88 15.61 10.39 15.23 10.77 14.73C10.93 14.53 11.00 14.27 10.97 14.02C10.94 13.77 10.82 13.53 10.63 13.37C10.44 13.20 10.19 13.11 9.93 13.12C9.68 13.13 9.44 13.24 9.26 13.43L9.19 13.50C9.05 13.70 8.85 13.85 8.62 13.94L8.54 13.97C8.35 14.02 8.16 14.00 7.99 13.92L7.91 13.88C7.67 13.75 7.48 13.56 7.35 13.32L7.28 13.20C7.11 12.88 7.02 12.52 7.00 12.16L7 12C6.99 11.58 7.09 11.16 7.28 10.79L7.35 10.67C7.48 10.43 7.67 10.24 7.91 10.11C8.10 10.00 8.32 9.97 8.54 10.02L8.62 10.05C8.81 10.12 8.98 10.24 9.11 10.39L9.19 10.49L9.26 10.57C9.43 10.74 9.66 10.85 9.91 10.87C10.15 10.89 10.40 10.81 10.59 10.66C10.79 10.51 10.92 10.29 10.96 10.05C11.01 9.80 10.96 9.55 10.83 9.34L10.77 9.26L10.60 9.05C10.24 8.65 9.79 8.35 9.29 8.16L9.03 8.08C8.34 7.91 7.60 8.00 6.97 8.34ZM14.97 8.34C14.42 8.64 13.96 9.09 13.64 9.63L13.50 9.87C13.16 10.53 12.99 11.26 13 12L13.00 12.27C13.04 12.92 13.21 13.55 13.50 14.12L13.64 14.36C13.96 14.90 14.42 15.35 14.97 15.65L15.21 15.77C15.79 16.01 16.43 16.06 17.03 15.91L17.29 15.83C17.88 15.61 18.39 15.23 18.77 14.73C18.93 14.53 19.00 14.27 18.97 14.02C18.94 13.77 18.82 13.53 18.63 13.37C18.44 13.20 18.19 13.11 17.93 13.12C17.68 13.13 17.44 13.24 17.26 13.43L17.19 13.50C17.05 13.70 16.85 13.85 16.62 13.94L16.54 13.97C16.35 14.02 16.16 14.00 15.99 13.92L15.91 13.88C15.67 13.75 15.48 13.56 15.35 13.32L15.28 13.20C15.11 12.88 15.02 12.52 15.00 12.16L15 12C14.99 11.58 15.09 11.16 15.28 10.79L15.35 10.67C15.48 10.43 15.67 10.24 15.91 10.11C16.10 10.00 16.32 9.97 16.54 10.02L16.62 10.05C16.81 10.12 16.98 10.24 17.11 10.39L17.19 10.49L17.26 10.57C17.43 10.74 17.66 10.85 17.91 10.87C18.15 10.89 18.40 10.81 18.59 10.66C18.79 10.51 18.92 10.29 18.96 10.05C19.01 9.80 18.96 9.55 18.83 9.34L18.77 9.26L18.60 9.05C18.24 8.65 17.79 8.35 17.29 8.16L17.03 8.08C16.34 7.91 15.60 8.00 14.97 8.34Z"}));ya.displayName="CaptionsIcon";ya.propTypes=K;var Vi=Ir.default.memo(ya,(e,t)=>e.width===t.width&&e.height===t.height&&e.active===t.active);var gd=({fullscreen:e,captions:t,activeCaption:o,onCaptionChange:r})=>{let{i18n:n}=V(),i=ro.default.useMemo(()=>Te(e),[e]),s=ro.default.useRef(null);ro.default.useEffect(()=>{o&&(s.current=o)},[o]);let l=ro.default.useCallback(a=>{var u,p;if(a.stopPropagation(),o)r(null);else{let c=s.current||((p=(u=t[0])==null?void 0:u.language)!=null?p:null);c&&r(c)}},[o,t,r]);return!t||t.length===0?null:ro.default.createElement(ge,{label:n.captions,fullscreen:e},ro.default.createElement(re,{type:"button","aria-label":n.captions,onClick:l,isFullscreen:e},ro.default.createElement(Vi,{...i,active:!!o})))};gd.propTypes={fullscreen:wn.default.bool.isRequired,captions:wn.default.array,activeCaption:wn.default.string,onCaptionChange:wn.default.func.isRequired};var bd=ro.default.memo(gd,(e,t)=>e.fullscreen===t.fullscreen&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.onCaptionChange===t.onCaptionChange);var kn=h(T());var ih=({fullscreen:e,contextMenuRef:t,pictureInPictureEnabled:o,pip:r,loop:n=!1,requestPictureInPicture:i,exitPictureInPicture:s,onLoopClick:l})=>{let a=he(),{i18n:u}=V(),[p,c]=kn.default.useState({x:0,y:0}),f=kn.default.useCallback(x=>{var E,C;x.preventDefault();let v=((E=t.current)==null?void 0:E.offsetWidth)||0,w=((C=t.current)==null?void 0:C.offsetHeight)||0,S=x.currentTarget.getBoundingClientRect(),b=x.clientX-S.left,M=x.clientY-S.top,L=S.width,k=S.height,I=b+v>L?b-v:b,q=M+w>k?M-w:M;c({x:I,y:q}),a({type:"contextMenuVisible",payload:!0})},[t,a]),m=kn.default.useMemo(()=>Te(e),[e]),y=kn.default.useMemo(()=>{let x=[{action:l,label:u.loop,iconType:"loop",iconProps:m,isCheckable:!0,defaultChecked:n}];return o&&x.push({action:r?s:i,label:u.pictureInPicture,iconType:"pip",iconProps:m,isCheckable:!1,defaultChecked:!1}),x},[m,u,o,r,n,i,s,l]);return{handleContextMenu:f,contextMenuPosition:p,contextMenuItems:y}},$i=ih;var Ot=h(T());var Pn=h(T());var Sd=Pn.default.forwardRef(({showing:e,positionX:t,positionY:o,...r},n)=>Pn.default.createElement("div",{ref:n,...r}));Sd.displayName="StyledContextMenu";var vd=d(Sd)`
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
`,xd=Pn.default.forwardRef(({isFullscreen:e,...t},o)=>Pn.default.createElement("div",{ref:o,...t}));xd.displayName="ContextMenuItem";var Cd=d(xd)`
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
`,wd=d.span`
  padding: 0 12px;
  font-size: 118%;
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
  font-size: 109%;
  margin-right: 12px;
  margin-left: auto;
`;Nt();var Hi=h(T());var ga=({width:e=36,height:t=36})=>Hi.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Hi.default.createElement("path",{d:"M4.8 19.582 13.237 28.05 31.2 9.877 29.295 7.95 13.237 24.197 6.705 17.586Z"}));ga.displayName="CheckedIcon";ga.propTypes=K;var Pd=Hi.default.memo(ga,ee);var zi=h(T());var ba=({width:e=36,height:t=36})=>zi.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},zi.default.createElement("path",{d:"M 21.333 23.666 C 21.333 23.758 21.3 23.835 21.235 23.902 C 21.168 23.967 21.091 24 21 24 L 11 24 C 10.944 24 10.898 23.995 10.859 23.979 C 10.821 23.966 10.789 23.942 10.765 23.906 C 10.741 23.871 10.723 23.844 10.708 23.822 C 10.695 23.803 10.684 23.762 10.678 23.703 C 10.671 23.644 10.667 23.604 10.667 23.583 L 10.667 17.335 L 8.667 17.335 C 8.487 17.335 8.329 17.266 8.198 17.134 C 8.067 17.004 8 16.846 8 16.666 C 8 16.5 8.052 16.358 8.156 16.239 L 11.489 12.24 C 11.621 12.087 11.792 12.01 12 12.01 C 12.208 12.01 12.379 12.087 12.511 12.24 L 15.844 16.239 C 15.948 16.358 16 16.5 16 16.666 C 16 16.846 15.933 17.004 15.803 17.134 C 15.671 17.266 15.513 17.335 15.333 17.335 L 13.333 17.335 L 13.333 21.334 L 19.333 21.334 C 19.444 21.334 19.532 21.372 19.593 21.448 L 21.26 23.448 C 21.309 23.518 21.333 23.59 21.333 23.666 Z M 28 19.334 C 28 19.5 27.948 19.642 27.844 19.761 L 24.511 23.76 C 24.372 23.92 24.201 24 24 24 C 23.799 24 23.628 23.92 23.489 23.76 L 20.156 19.761 C 20.052 19.642 20 19.5 20 19.334 C 20 19.154 20.067 18.996 20.198 18.866 C 20.329 18.734 20.487 18.667 20.667 18.667 L 22.667 18.667 L 22.667 14.666 L 16.667 14.666 C 16.556 14.666 16.468 14.626 16.407 14.542 L 14.74 12.542 C 14.691 12.478 14.667 12.41 14.667 12.334 C 14.667 12.243 14.7 12.166 14.765 12.098 C 14.832 12.034 14.909 12 15 12 L 25 12 C 25.056 12 25.103 12.007 25.141 12.022 C 25.179 12.034 25.211 12.058 25.235 12.094 C 25.259 12.13 25.278 12.156 25.292 12.178 C 25.305 12.199 25.316 12.238 25.323 12.298 C 25.329 12.356 25.333 12.396 25.333 12.418 L 25.333 18.667 L 27.333 18.667 C 27.513 18.667 27.671 18.734 27.803 18.866 C 27.933 18.996 28 19.154 28 19.334 Z"}));ba.displayName="InLoopIcon";ba.propTypes=K;var Td=zi.default.memo(ba,ee);var ji=h(T());var Sa=({width:e=36,height:t=36})=>ji.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},ji.default.createElement("path",{d:"M25 17H17v6H25zM29 25V10.981a1.989 1.989 0 0 0 -2 -1.981H9a1.989 1.989 0 0 0 -2 1.981V25c0 1.1 0.9 2 2 2h18c1.1 0 2 -0.9 2 -2m-2 0.019H9V10.969h18z"}));Sa.displayName="PipIcon";Sa.propTypes=K;var Ld=ji.default.memo(Sa,ee);var sh={loop:Td,pip:Ld},Ed=Ot.default.forwardRef(({fullscreen:e,position:t,menuItems:o},r)=>{let n=V(),i=he(),s=Ot.default.useRef();return Ot.default.useEffect(()=>{let l=a=>{var c;let u=a.composedPath?a.composedPath():[];s.current&&u.includes(s.current)||((c=s.current)==null?void 0:c.contains(a.target))||i({type:"contextMenuVisible",payload:!1})};return window.addEventListener("click",l),()=>{window.removeEventListener("click",l)}},[i,s]),Ot.default.createElement(vd,{ref:xl([r,s]),showing:n.contextMenuVisible,positionX:t.x,positionY:t.y,"data-itemindex":"0","aria-checked":n.contextMenuVisible},o.map((l,a)=>{let u=sh[l.iconType];return Ot.default.createElement(Cd,{key:a,onClick:()=>{l.action(),i({type:"contextMenuVisible",payload:!1})},isFullscreen:e},u&&Ot.default.createElement(u,{...l.iconProps}),Ot.default.createElement(wd,null,l.label),l.isCheckable&&l.defaultChecked&&Ot.default.createElement(kd,null,Ot.default.createElement(Pd,{width:24,height:24})))}))});Ed.displayName="ContextMenu";var Tn=Ot.default.memo(Ed,(e,t)=>e.fullscreen===t.fullscreen&&e.position===t.position&&e.menuItems===t.menuItems);var We=h(T()),Ar=h(G());Ne();var Ln=h(T());var Md=Ln.default.forwardRef(({positionX:e,positionY:t,isDragging:o,...r},n)=>Ln.default.createElement("div",{ref:n,...r}));Md.displayName="CaptionContainer";var Id=d(Md)`
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
`,Ad=Ln.default.forwardRef(({backgroundColor:e,...t},o)=>Ln.default.createElement("div",{ref:o,...t}));Ad.displayName="CaptionWindow";var Od=d(Ad)`
  padding: 4px 8px;
  border-radius: 4px;
  width: max-content;
  max-width: 80vw;
  ${({backgroundColor:e})=>`background-color: ${e};`}
`,Rd=d.span`
  display: block;
  padding: 2px 6px;
  border-radius: 2px;
  line-height: 1.4;
  font-weight: 500;
  white-space: pre-wrap;
  word-wrap: break-word;
`;var ah=74,lh=88,Dd=74,uh=88,Bd=12,va=42,xa=58,ch=40,ph=60,Nd=({cues:e,currentTime:t,captionStyle:o,isFullscreen:r,controlsVisible:n})=>{let i=We.default.useRef(null),{hiding:s}=V(),l=he(),a=n||!s,u=a?ah:lh,[p,c]=We.default.useState({x:50,y:Dd}),[f,m]=We.default.useState(!1),y=We.default.useRef(!1),x=We.default.useRef({x:0,y:0,startX:0,startY:0}),v=We.default.useMemo(()=>!e||e.length===0?[]:Hn(e,t),[e,t]),w=We.default.useCallback(g=>{var j,z,Y,ue,A,R,ne,H;g.preventDefault(),g.stopPropagation();let P=(ue=(Y=g.clientX)!=null?Y:(z=(j=g.touches)==null?void 0:j[0])==null?void 0:z.clientX)!=null?ue:0,D=(H=(ne=g.clientY)!=null?ne:(R=(A=g.touches)==null?void 0:A[0])==null?void 0:R.clientY)!=null?H:0;x.current={x:P,y:D,startX:p.x,startY:p.y},m(!0),l({type:"captionDragging",payload:!0})},[p,l]),S=We.default.useCallback(g=>{var pe,de,xe,be,Fe,_e,Ve,pt;if(!f||!i.current)return;let P=i.current.parentElement;if(!P)return;let D=(be=(xe=g.clientX)!=null?xe:(de=(pe=g.touches)==null?void 0:pe[0])==null?void 0:de.clientX)!=null?be:0,j=(pt=(Ve=g.clientY)!=null?Ve:(_e=(Fe=g.touches)==null?void 0:Fe[0])==null?void 0:_e.clientY)!=null?pt:0,z=P.getBoundingClientRect(),ue=i.current.getBoundingClientRect().width/2/z.width*100,A=(D-x.current.x)/z.width*100,R=(j-x.current.y)/z.height*100,ne=Math.max(ue,Math.min(100-ue,x.current.startX+A)),H=Math.max(Bd,Math.min(u,x.current.startY+R));if(a&&i.current){let it=i.current.offsetHeight/z.height*100,Ie=i.current.offsetWidth/z.width*100,xt=H,so=H+it,Ut=ne-Ie/2;if(ne+Ie/2>ch&&Ut<ph&&so>va&&xt<xa){let dt=so-va,Ct=xa-xt;dt<=Ct?H=va-it:H=xa,H=Math.max(Bd,Math.min(u,H))}}c({x:ne,y:H})},[f,u,a]),b=We.default.useCallback(()=>{m(!1),l({type:"captionDragging",payload:!1}),c(g=>{let D=g.y>=u-6;return y.current=!D,g})},[u,l]);if(We.default.useEffect(()=>{c(g=>y.current?{...g,y:Math.min(g.y,u)}:{...g,y:a?Dd:uh})},[u,a]),We.default.useEffect(()=>(f&&(document.addEventListener("mousemove",S),document.addEventListener("mouseup",b),document.addEventListener("touchmove",S),document.addEventListener("touchend",b)),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",S),document.removeEventListener("touchend",b)}),[f,S,b]),v.length===0)return null;let M=parseInt(o.fontSize)/100,k=`${(r?24:16)*M}px`,I=or(o.fontColor,o.fontOpacity),q=or(o.backgroundColor,o.backgroundOpacity),E=or(o.windowColor,o.windowOpacity),C=zn(o.edgeStyle,"rgba(0,0,0,0.8)"),N=o.fontFamily==="small-caps"?{fontFamily:"sans-serif",fontVariant:"small-caps"}:{fontFamily:o.fontFamily,fontVariant:"normal"};return We.default.createElement(Id,{ref:i,positionX:p.x,positionY:p.y,onMouseDown:w,onTouchStart:w,isDragging:f},We.default.createElement(Od,{backgroundColor:E},v.map((g,P)=>We.default.createElement(Rd,{key:`${g.startTime}-${P}`,style:{fontSize:k,color:I,backgroundColor:q,textShadow:C,...N}},g.text))))};Nd.propTypes={cues:Ar.default.array,currentTime:Ar.default.number.isRequired,captionStyle:Ar.default.object.isRequired,isFullscreen:Ar.default.bool,controlsVisible:Ar.default.bool};var Ui=We.default.memo(Nd);var En=h(T());Ne();var qd="caption_style",dh=({captions:e,activeCaption:t})=>{let[o,r]=En.default.useState([]),[n,i]=En.default.useState(()=>{let l=er(qd);if(l)try{return{...fo,...JSON.parse(l)}}catch{return fo}return fo});En.default.useEffect(()=>{if(!t||!e||e.length===0){r([]);return}let l=e.find(u=>u.language===t);if(!l){r([]);return}let a=!1;return(async()=>{try{let p=await(await fetch(l.src)).text();if(a)return;let c=$n(p);r(c)}catch(u){console.error("Failed to load caption file:",u),a||r([])}})(),()=>{a=!0}},[t,e]);let s=En.default.useCallback(l=>{i(l),tr(qd,JSON.stringify(l),365)},[]);return{cues:o,captionStyle:n,updateCaptionStyle:s}},Wi=dh;var Fd=te.default.forwardRef(({videoRef:e,playerRef:t,live:o=!1,hasResource:r=!1,hasAudio:n,prevented:i,loading:s,paused:l,ended:a,seeking:u,waiting:p,duration:c,buffered:f=null,currentTime:m,muted:y,volume:x,pictureInPictureEnabled:v,pip:w,fullscreen:S,qualities:b,captions:M,activeCaption:L,spriteVTTFile:k,chapters:I,heatmapData:q,fullHDQualityBreak:E,playbackRate:C,playbackQuality:N,loop:g,poster:P,onPlayClick:D,onPauseClick:j,onTogglePlay:z,changePlaybackRate:Y,changePlayBackQuality:ue,changeVolume:A,onMutedClick:R,changeCurrentTime:ne,requestPictureInPicture:H,exitPictureInPicture:pe,requestFullscreen:de,exitFullscreen:xe,onSeeking:be,onLoopClick:Fe,onCaptionChange:_e,onPreventedClick:Ve,onPrevious:pt,onNext:it,showNavButtons:Ie,kernelMsg:xt=null},so)=>{let Ut=he(),[Dt,Wt]=te.default.useState(!1),dt=te.default.useRef(),Ct=te.default.useRef(null),{showControls:ft,hideControls:ao}=Np({hasResource:r,loading:s,prevented:i,paused:l,ended:a,waiting:p,seeking:u,kernelMsg:xt}),{contextMenuItems:wo,contextMenuPosition:Go,handleContextMenu:qr}=$i({fullscreen:S,contextMenuRef:Ct,pip:w,loop:g,pictureInPictureEnabled:v,requestPictureInPicture:H,exitPictureInPicture:pe,onLoopClick:Fe}),{getChapterAtTime:lo}=vo({chapters:I,duration:c}),uo=te.default.useMemo(()=>lo(m),[lo,m]),{cues:st,captionStyle:ko,updateCaptionStyle:Fr}=Wi({captions:M,activeCaption:L});te.default.useEffect(()=>{Ut({videoRef:e,playerRef:t})},[e,t,Ut]),te.default.useImperativeHandle(so,()=>({showControls:ft,hideControls:ao}),[ft,ao]),te.default.useEffect(()=>{if(t.current){let Yt=t.current,mt=Ae=>{let wt=gi[Ae.which||Ae.keyCode]||bi[Ae.key];clearTimeout(dt.current),wt==="ARROW_UP_KEY"||wt==="ARROW_DOWN_KEY"?(Wt(!0),dt.current=setTimeout(()=>Wt(!1),2e3)):Wt(!1)};return Yt.addEventListener("keydown",mt),()=>{clearTimeout(dt.current),Yt.removeEventListener("keydown",mt)}}},[y,x,t]);let Ko=te.default.useCallback(({quality:Yt,speed:mt})=>{var Ae;if(mt&&Y(Number((Ae=mt.value)!=null?Ae:1)),Yt){let wt=Number(Yt.value);ue(Number.isNaN(wt)?0:wt)}},[Y,ue]);return te.default.createElement(Ft,{onContextMenu:qr,onMouseLeave:ao,onMouseMove:ft,onTouchStart:ft,onMouseEnter:ft,onClick:ft},te.default.createElement(rn,{hasResource:r,prevented:i,paused:l,muted:y,currentTime:m,onClick:Ve}),P&&te.default.createElement(sn,{style:{opacity:m<=0||a?1:0}},te.default.createElement(an,{style:{backgroundImage:`url(${P})`}})),te.default.createElement(rc,null,te.default.createElement(nc,{style:{display:Dt?"inline-block":"none"}},Math.round(x*100),"%")),te.default.createElement(Tn,{ref:Ct,fullscreen:S,position:Go,menuItems:wo}),k&&te.default.createElement(bn,{spriteVTTFile:k,duration:c,seekTime:m,visible:u}),L&&st.length>0&&te.default.createElement(Ui,{cues:st,currentTime:m,captionStyle:ko,isFullscreen:S,controlsVisible:l||a||s||p}),te.default.createElement(ec,{hasResource:r,loading:s,paused:l,ended:a,waiting:p,seeking:u,kernelMsg:xt,onClick:z}),te.default.createElement(uc,null,o===!1&&te.default.createElement(np,{spriteVTTFile:k,chapters:I,heatmapData:q,currentTime:m,duration:c,buffered:f,onChange:ne,onSeeking:be,fullscreen:S}),te.default.createElement(yc,{extra:te.default.createElement(te.default.Fragment,null,te.default.createElement(bd,{fullscreen:S,captions:M,activeCaption:L,onCaptionChange:_e}),te.default.createElement(yd,{live:o,qualities:b,captions:M,activeCaption:L,playbackRate:C,playbackQuality:N,fullscreen:S,fullHDQualityBreak:E,changeSettings:Ko,onCaptionChange:_e,captionStyle:ko,onCaptionStyleChange:Fr}),te.default.createElement(Bp,{fullscreen:S,requestFullscreen:de,exitFullscreen:xe})),fullscreen:S},te.default.createElement(Ii,{fullscreen:S,onPrevious:pt,showNavButtons:Ie}),te.default.createElement(Mp,{fullscreen:S,paused:l,ended:a,onPauseClick:j,onPlayClick:D}),te.default.createElement(Ai,{fullscreen:S,onNext:it,showNavButtons:Ie}),te.default.createElement(Cp,{fullscreen:S,isMuted:y,forceMuted:!n,volume:x,onMutedClick:R,changeVolume:A}),te.default.createElement(Tp,{live:o,currentTime:m,duration:c,chapterTitle:uo==null?void 0:uo.title}))),te.default.createElement(nn,{hasResource:r,loading:s,kernelMsg:xt}))});Fd.displayName="DesktopPlayerSkin";var _d=Fd;var me=h(T()),_=h(G());var Vd=d.div`
  ${xr}
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
`,$d=d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  pointer-events: none;
  ${({$visible:e})=>e?W`
          opacity: 1;
        `:W`
          opacity: 0;
        `}
`;var Co=h(T()),Yo=h(G());var Hd=d.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 7;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${({$visible:e})=>e?W`
          opacity: 1;
          pointer-events: auto;
        `:W`
          opacity: 0;
          pointer-events: none;
        `}
`,Ca=d.button`
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
`;var le=h(T());var zd=()=>le.default.createElement(Sr,{width:"100%",height:"100%"}),jd=({width:e="100%",height:t="100%"}={})=>le.default.createElement("svg",{viewBox:"0 0 56 56",preserveAspectRatio:"xMidYMid meet",fill:"none",width:e,height:t},le.default.createElement("path",{fill:"currentColor",d:"M 41.543 28.638 L 15.115 43.848 C 14.81 44.028 14.548 44.048 14.329 43.91 C 14.11 43.772 14 43.526 14 43.168 L 14 12.832 C 14 12.474 14.11 12.226 14.329 12.09 C 14.548 11.952 14.81 11.972 15.115 12.152 L 41.543 27.36 C 41.848 27.54 42 27.752 42 28 C 42 28.248 41.848 28.46 41.543 28.638 Z"})),Ud=({width:e="100%",height:t="100%"}={})=>le.default.createElement("svg",{viewBox:"0 0 56 56",preserveAspectRatio:"xMidYMid meet",fill:"none",width:e,height:t},le.default.createElement("rect",{fill:"currentColor",x:"12",y:"12",width:"8",height:"32"}),le.default.createElement("rect",{fill:"currentColor",x:"36",y:"12",width:"8",height:"32"})),Wd=({width:e="100%",height:t="100%"}={})=>le.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},le.default.createElement("path",{fill:"currentColor",d:"M 25.184 9.17 C 25.377 9.021 25.542 8.97 25.676 9.017 C 25.809 9.063 25.875 9.189 25.875 9.392 L 25.875 26.608 C 25.875 26.811 25.809 26.937 25.676 26.983 C 25.542 27.03 25.377 26.979 25.184 26.83 L 14.262 18.526 C 14.17 18.456 14.103 18.382 14.063 18.304 L 14.063 26.235 C 14.063 26.437 13.965 26.613 13.77 26.761 C 13.575 26.908 13.344 26.983 13.078 26.983 L 11.109 26.983 C 10.843 26.983 10.612 26.908 10.418 26.761 C 10.223 26.613 10.125 26.437 10.125 26.235 L 10.125 9.765 C 10.125 9.563 10.223 9.387 10.418 9.239 C 10.612 9.092 10.843 9.017 11.109 9.017 L 13.078 9.017 C 13.344 9.017 13.575 9.092 13.77 9.239 C 13.965 9.387 14.063 9.563 14.063 9.765 L 14.063 17.695 C 14.103 17.617 14.17 17.544 14.262 17.473 Z"})),Yd=({width:e="100%",height:t="100%"}={})=>le.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},le.default.createElement("path",{fill:"currentColor",d:"M 10.816 9.17 C 10.623 9.021 10.458 8.97 10.324 9.017 C 10.191 9.063 10.125 9.189 10.125 9.392 L 10.125 26.608 C 10.125 26.811 10.191 26.937 10.324 26.983 C 10.458 27.03 10.623 26.979 10.816 26.83 L 21.738 18.526 C 21.83 18.456 21.897 18.382 21.937 18.304 L 21.937 26.235 C 21.937 26.437 22.035 26.613 22.23 26.761 C 22.425 26.908 22.656 26.983 22.922 26.983 L 24.891 26.983 C 25.157 26.983 25.388 26.908 25.582 26.761 C 25.777 26.613 25.875 26.437 25.875 26.235 L 25.875 9.765 C 25.875 9.563 25.777 9.387 25.582 9.239 C 25.388 9.092 25.157 9.017 24.891 9.017 L 22.922 9.017 C 22.656 9.017 22.425 9.092 22.23 9.239 C 22.035 9.387 21.937 9.563 21.937 9.765 L 21.937 17.695 C 21.897 17.617 21.83 17.544 21.738 17.473 Z"})),Xd=({width:e="100%",height:t="100%"}={})=>le.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},le.default.createElement("path",{fill:"currentColor",d:"M 10 16 L 10 10.5 C 10 10.224 10.224 10 10.5 10 L 16 10 L 16 12 L 12 12 L 12 16 Z M 26 16 L 26 12 L 22 12 L 22 10 L 26.5 10 C 26.776 10 27 10.224 27 10.5 L 27 16 Z M 26 20 L 27 20 L 27 25.5 C 27 25.776 26.776 26 26.5 26 L 22 26 L 22 24 L 26 24 Z M 10 20 L 10 25.5 C 10 25.776 10.224 26 10.5 26 L 16 26 L 16 24 L 12 24 L 12 20 Z"})),Qd=({width:e="100%",height:t="100%"}={})=>le.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},le.default.createElement("path",{fill:"currentColor",d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"})),Mn=({width:e="100%",height:t="100%"}={})=>le.default.createElement("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},le.default.createElement("path",{fill:"currentColor",d:"M 27.452 17.699 C 27.408 16.709 27.211 15.734 26.866 14.806 L 28.396 13.381 C 28.685 13.102 28.753 12.663 28.561 12.31 C 27.951 11.182 27.166 10.156 26.237 9.27 C 25.954 8.996 25.522 8.948 25.187 9.154 L 23.379 10.28 C 22.566 9.715 21.667 9.282 20.72 8.996 L 20.534 6.903 C 20.504 6.5 20.195 6.173 19.794 6.12 C 19.237 6.039 18.673 5.999 18.11 6 C 17.391 5.997 16.675 6.061 15.969 6.188 C 15.587 6.249 15.293 6.558 15.253 6.941 L 15.029 9.081 C 14.156 9.378 13.331 9.798 12.579 10.333 L 10.819 9.197 C 10.483 8.981 10.043 9.025 9.757 9.304 C 8.811 10.21 8.016 11.262 7.405 12.422 C 7.218 12.768 7.281 13.198 7.563 13.475 L 9.105 14.96 C 8.821 15.752 8.641 16.578 8.573 17.418 L 6.586 18.115 C 6.207 18.24 5.966 18.613 6.004 19.009 C 6.091 20.334 6.394 21.637 6.903 22.862 C 7.048 23.232 7.431 23.454 7.824 23.398 L 9.907 23.098 C 10.312 23.783 10.803 24.414 11.367 24.977 L 10.631 27.005 C 10.496 27.377 10.624 27.79 10.943 28.021 C 12.006 28.799 13.192 29.398 14.451 29.793 C 14.833 29.917 15.251 29.758 15.454 29.413 L 16.53 27.61 C 16.993 27.687 17.463 27.73 17.933 27.738 C 18.287 27.74 18.641 27.723 18.993 27.682 L 20.067 29.544 C 20.254 29.895 20.655 30.072 21.041 29.972 C 22.305 29.638 23.505 29.094 24.591 28.367 C 24.927 28.146 25.07 27.724 24.937 27.344 L 24.249 25.349 C 24.931 24.743 25.525 24.043 26.009 23.269 L 28.091 23.603 C 28.483 23.667 28.868 23.452 29.021 23.084 C 29.543 21.894 29.871 20.629 29.993 19.335 C 30.046 18.931 29.807 18.547 29.423 18.414 Z M 27.689 21.779 L 25.161 21.376 L 24.556 22.344 C 24.161 22.981 23.677 23.557 23.118 24.056 L 22.261 24.831 L 23.118 27.263 C 22.523 27.611 21.894 27.898 21.241 28.119 L 19.957 25.867 L 18.855 25.979 C 18.571 26.012 18.284 26.027 17.999 26.026 C 17.611 26.017 17.224 25.982 16.842 25.919 L 15.651 25.693 L 14.341 27.917 C 13.685 27.671 13.059 27.356 12.472 26.976 L 13.368 24.531 L 12.575 23.749 C 12.116 23.283 11.715 22.765 11.38 22.203 L 10.794 21.217 L 8.261 21.581 C 8.035 20.918 7.875 20.232 7.781 19.536 L 10.211 18.68 L 10.288 17.558 C 10.34 16.872 10.486 16.198 10.717 15.551 L 11.088 14.488 L 9.23 12.695 C 9.587 12.11 10.002 11.56 10.467 11.056 L 12.61 12.442 L 13.547 11.77 C 14.163 11.336 14.838 10.991 15.552 10.747 L 16.602 10.396 L 16.872 7.803 C 17.278 7.748 17.687 7.719 18.096 7.712 C 18.358 7.712 18.619 7.712 18.886 7.751 L 19.113 10.319 L 20.23 10.657 C 21.005 10.891 21.74 11.245 22.406 11.707 L 23.327 12.349 L 25.512 10.987 C 25.964 11.476 26.369 12.005 26.721 12.571 L 24.853 14.326 L 25.281 15.417 C 25.56 16.176 25.723 16.973 25.761 17.78 L 25.813 18.94 L 28.219 19.819 C 28.109 20.488 27.93 21.144 27.689 21.779 Z M 17.972 22.267 C 14.675 22.267 12.614 18.699 14.262 15.845 C 15.912 12.992 20.034 12.992 21.683 15.845 C 22.065 16.507 22.263 17.257 22.257 18.02 C 22.252 20.377 20.331 22.282 17.972 22.267 Z M 18.028 15.417 C 16.05 15.395 14.788 17.52 15.758 19.244 C 16.727 20.968 19.2 20.998 20.209 19.296 C 20.444 18.901 20.568 18.447 20.568 17.987 C 20.568 16.579 19.436 15.433 18.028 15.417 Z"})),Gd=({width:e="100%",height:t="100%"}={})=>le.default.createElement("svg",{viewBox:"0 0 36 36",width:e,height:t},le.default.createElement("path",{fill:"currentColor",d:"M 24.344 15.999 L 19.6 20.544 L 19.169 20.956 L 18.613 20.807 C 18.389 20.746 18.228 20.723 17.998 20.724 C 17.263 20.682 16.798 20.925 16.316 21.387 C 15.84 21.844 15.601 22.235 15.653 22.903 C 15.65 23.104 15.671 23.237 15.732 23.441 L 15.921 24.07 L 15.436 24.536 L 14.105 25.811 C 13.991 25.972 13.943 26.063 13.937 26.177 C 13.932 26.29 13.954 26.362 14.1 26.539 C 14.267 26.702 14.454 26.723 14.587 26.73 C 14.72 26.736 14.824 26.733 15.067 26.545 L 16.4 25.266 L 16.831 24.854 L 17.387 25.003 C 17.611 25.064 17.777 25.087 18.001 25.085 C 18.737 25.128 19.202 24.884 19.684 24.422 C 20.16 23.966 20.399 23.576 20.346 22.906 C 20.345 22.701 20.328 22.567 20.268 22.37 L 20.076 21.743 L 20.564 21.275 L 25.308 16.73 C 25.454 16.554 25.497 16.41 25.455 16.238 C 25.414 16.065 25.322 15.903 25.01 15.835 C 24.703 15.762 24.571 15.802 24.345 15.997 M 18.101 6 C 18.101 6 16.905 6.031 16.356 6.084 C 15.807 6.137 15.292 6.213 14.761 6.317 C 13.701 6.526 12.725 6.818 11.75 7.213 C 9.801 8.002 8.134 9.089 6.662 10.499 C 3.715 13.324 1.949 16.988 2.001 21.269 C 1.967 24.34 2.871 27.191 4.685 29.726 C 4.82 29.961 4.985 30.022 5.284 29.994 C 5.583 29.965 5.703 29.913 5.825 29.665 C 5.895 29.443 5.902 29.37 5.784 29.167 C 2.764 24.665 2.661 19.146 4.809 14.968 C 6.952 10.799 11.515 7.546 17.036 7.115 C 22.565 6.846 27.525 9.492 30.218 13.351 C 32.916 17.219 33.57 22.701 31.19 27.546 C 30.907 28.096 30.57 28.655 30.217 29.164 C 30.164 29.383 30.097 29.407 30.175 29.662 C 30.25 29.906 30.341 29.989 30.708 29.989 C 30.683 29.99 30.723 29.992 30.765 29.992 C 31.033 29.992 31.173 29.907 31.315 29.726 C 33.128 27.19 34.033 24.344 33.999 21.273 C 34.051 16.991 32.284 13.324 29.337 10.499 C 26.384 7.67 22.505 5.962 18 6.004"})),Kd=({width:e=24,height:t=24}={})=>le.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},le.default.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),le.default.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Zd=({width:e=24,height:t=24}={})=>le.default.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:e,height:t},le.default.createElement("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"})),Wo=({width:e=20,height:t=20}={})=>le.default.createElement("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",width:e,height:t},le.default.createElement("path",{fill:"#ccc",d:"M8 5v14l11-7z"})),Jd=({width:e="100%",height:t="100%"}={})=>le.default.createElement("svg",{viewBox:"-6 -6 36 36",fill:"currentColor",width:e,height:t},le.default.createElement("path",{d:"M21.20 3.01L21 3H3L2.79 3.01C2.30 3.06 1.84 3.29 1.51 3.65C1.18 4.02 .99 4.50 1 5V19L1.01 19.20C1.05 19.66 1.26 20.08 1.58 20.41C1.91 20.73 2.33 20.94 2.79 20.99L3 21H21L21.20 20.98C21.66 20.94 22.08 20.73 22.41 20.41C22.73 20.08 22.94 19.66 22.99 19.20L23 19V5C23.00 4.50 22.81 4.02 22.48 3.65C22.15 3.29 21.69 3.06 21.20 3.01ZM3 19V5H21V19H3ZM6.97 8.34C6.42 8.64 5.96 9.09 5.64 9.63L5.50 9.87C5.16 10.53 4.99 11.26 5 12L5.00 12.27C5.04 12.92 5.21 13.55 5.50 14.12L5.64 14.36C5.96 14.90 6.42 15.35 6.97 15.65L7.21 15.77C7.79 16.01 8.43 16.06 9.03 15.91L9.29 15.83C9.88 15.61 10.39 15.23 10.77 14.73C10.93 14.53 11.00 14.27 10.97 14.02C10.94 13.77 10.82 13.53 10.63 13.37C10.44 13.20 10.19 13.11 9.93 13.12C9.68 13.13 9.44 13.24 9.26 13.43L9.19 13.50C9.05 13.70 8.85 13.85 8.62 13.94L8.54 13.97C8.35 14.02 8.16 14.00 7.99 13.92L7.91 13.88C7.67 13.75 7.48 13.56 7.35 13.32L7.28 13.20C7.11 12.88 7.02 12.52 7.00 12.16L7 12C6.99 11.58 7.09 11.16 7.28 10.79L7.35 10.67C7.48 10.43 7.67 10.24 7.91 10.11C8.10 10.00 8.32 9.97 8.54 10.02L8.62 10.05C8.81 10.12 8.98 10.24 9.11 10.39L9.19 10.49L9.26 10.57C9.43 10.74 9.66 10.85 9.91 10.87C10.15 10.89 10.40 10.81 10.59 10.66C10.79 10.51 10.92 10.29 10.96 10.05C11.01 9.80 10.96 9.55 10.83 9.34L10.77 9.26L10.60 9.05C10.24 8.65 9.79 8.35 9.29 8.16L9.03 8.08C8.34 7.91 7.60 8.00 6.97 8.34ZM14.97 8.34C14.42 8.64 13.96 9.09 13.64 9.63L13.50 9.87C13.16 10.53 12.99 11.26 13 12L13.00 12.27C13.04 12.92 13.21 13.55 13.50 14.12L13.64 14.36C13.96 14.90 14.42 15.35 14.97 15.65L15.21 15.77C15.79 16.01 16.43 16.06 17.03 15.91L17.29 15.83C17.88 15.61 18.39 15.23 18.77 14.73C18.93 14.53 19.00 14.27 18.97 14.02C18.94 13.77 18.82 13.53 18.63 13.37C18.44 13.20 18.19 13.11 17.93 13.12C17.68 13.13 17.44 13.24 17.26 13.43L17.19 13.50C17.05 13.70 16.85 13.85 16.62 13.94L16.54 13.97C16.35 14.02 16.16 14.00 15.99 13.92L15.91 13.88C15.67 13.75 15.48 13.56 15.35 13.32L15.28 13.20C15.11 12.88 15.02 12.52 15.00 12.16L15 12C14.99 11.58 15.09 11.16 15.28 10.79L15.35 10.67C15.48 10.43 15.67 10.24 15.91 10.11C16.10 10.00 16.32 9.97 16.54 10.02L16.62 10.05C16.81 10.12 16.98 10.24 17.11 10.39L17.19 10.49L17.26 10.57C17.43 10.74 17.66 10.85 17.91 10.87C18.15 10.89 18.40 10.81 18.59 10.66C18.79 10.51 18.92 10.29 18.96 10.05C19.01 9.80 18.96 9.55 18.83 9.34L18.77 9.26L18.60 9.05C18.24 8.65 17.79 8.35 17.29 8.16L17.03 8.08C16.34 7.91 15.60 8.00 14.97 8.34Z"}));var ef=({visible:e,captions:t,activeCaption:o,onCaptionChange:r,onOpenSettings:n,settingsLabel:i,captionsLabel:s})=>{let l=t&&t.length>0,a=Co.default.useCallback(u=>{u.stopPropagation(),o?r(null):t&&t.length>0&&r(t[0].language)},[o,t,r]);return Co.default.createElement(Hd,{$visible:e},l&&Co.default.createElement(Ca,{onClick:a,"aria-label":s||"Captions"},Co.default.createElement(Vi,{width:24,height:24,active:!!o})),Co.default.createElement(Ca,{onClick:n,"aria-label":i},Co.default.createElement(Mn,null)))};ef.propTypes={visible:Yo.default.bool.isRequired,captions:Yo.default.array,activeCaption:Yo.default.string,onCaptionChange:Yo.default.func,onOpenSettings:Yo.default.func.isRequired,settingsLabel:Yo.default.string.isRequired};var tf=Co.default.memo(ef);var Ye=h(T()),nt=h(G());var of=d.div`
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
  ${({$visible:e})=>e?W`
          opacity: 1;
          pointer-events: auto;
        `:W`
          opacity: 0;
          pointer-events: none;
        `}
`,rf=d.button`
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
`,wa=d.button`
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
`,fh=ci`
  to {
    transform: rotate(360deg);
  }
`,nf=d.div`
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
    animation: ${fh} 0.8s linear infinite;
  }
`;var sf=({visible:e,isLoading:t,paused:o,ended:r,onPlayPause:n,onPrevious:i,onNext:s,showNavButtons:l=!1,i18n:a})=>{let u=typeof i=="function",p=typeof s=="function",c=u||l,f=p||l,m=Ye.default.useCallback(v=>{v.stopPropagation(),u&&i()},[u,i]),y=Ye.default.useCallback(v=>{v.stopPropagation(),p&&s()},[p,s]),x=Ye.default.useCallback(v=>{v.stopPropagation(),n()},[n]);return Ye.default.createElement(of,{$visible:e},c&&Ye.default.createElement(wa,{"aria-label":a.previous,onClick:m,disabled:!u},Ye.default.createElement(Wd,null)),t?Ye.default.createElement(nf,{onClick:v=>v.stopPropagation()},Ye.default.createElement("div",null)):Ye.default.createElement(rf,{"aria-label":o?a.play:a.pause,onClick:x},r?Ye.default.createElement(zd,null):o?Ye.default.createElement(jd,null):Ye.default.createElement(Ud,null)),f&&Ye.default.createElement(wa,{"aria-label":a.next,onClick:y,disabled:!p},Ye.default.createElement(Yd,null)))};sf.propTypes={visible:nt.default.bool.isRequired,isLoading:nt.default.bool.isRequired,paused:nt.default.bool.isRequired,ended:nt.default.bool.isRequired,onPlayPause:nt.default.func.isRequired,onPrevious:nt.default.func,onNext:nt.default.func,showNavButtons:nt.default.bool,i18n:nt.default.shape({previous:nt.default.string,next:nt.default.string,play:nt.default.string,pause:nt.default.string}).isRequired};var af=Ye.default.memo(sf);var Rt=h(T()),fe=h(G());var lf=d.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 7;
  display: flex;
  align-items: center;
  padding: 0px 16px 8px 16px;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${({$visible:e})=>e?W`
          opacity: 1;
          pointer-events: auto;
        `:W`
          opacity: 0;
          pointer-events: none;
        `}
`,uf=d.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 12px 0 16px;
`,cf=d.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  flex-shrink: 0;
`,pf=d.button`
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
`;var Ee=h(T()),qe=h(G());var df=d.div`
  flex: 1;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  touch-action: none;
`,ff=d.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
`,mf=d.div`
  position: absolute;
  left: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1px;
  transform-origin: left;
`,hf=d.div`
  position: absolute;
  left: 0;
  height: 2px;
  background: #cb0e0b;
  border-radius: 1px;
  transform-origin: left;
`,yf=d.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #cb0e0b;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 4;
`,gf=d.div`
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
`;var Or=h(T()),Ht=h(G());var bf=d.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: stretch;
  gap: 2px;
  height: 2px;
`,Sf=d.div`
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
  height: 2px;
  transition: transform 0.1s ease;
  transform-origin: center center;
`,vf=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`,xf=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #cb0e0b;
`;var Cf=({segments:e,currentTime:t,duration:o,buffered:r,hoveredIndex:n})=>{if(e.length===0||o<=0)return null;let i=(r||0)*o;return Or.default.createElement(bf,null,e.map((s,l)=>{let a=s.endTime-s.startTime,u=a/o*100,p=0;t>=s.endTime?p=100:t>s.startTime&&(p=(t-s.startTime)/a*100);let c=0;i>=s.endTime?c=100:i>s.startTime&&(c=(i-s.startTime)/a*100);let f=n===l;return Or.default.createElement(Sf,{key:l,style:{width:`${u}%`,transform:f?"scaleY(2.5)":"none"}},Or.default.createElement(vf,{style:{width:`${c}%`}}),Or.default.createElement(xf,{style:{width:`${p}%`}}))}))};Cf.propTypes={segments:Ht.default.arrayOf(Ht.default.shape({title:Ht.default.string.isRequired,startTime:Ht.default.number.isRequired,endTime:Ht.default.number.isRequired})).isRequired,currentTime:Ht.default.number.isRequired,duration:Ht.default.number.isRequired,buffered:Ht.default.number,hoveredIndex:Ht.default.number};var wf=Or.default.memo(Cf);Nt();var kf=({currentTime:e,duration:t,buffered:o,chapters:r,heatmapData:n,getChapterAtTime:i,onChange:s,onSeeking:l})=>{let a=Ee.default.useRef(null),u=Ee.default.useRef(!1),[p,c]=Ee.default.useState(!1),{i18n:f}=V(),m=t>0?e/t:0,y=o||0,x=r&&r.length>0,{strokePath:v,hasHeatmap:w}=Pi({heatmapData:n,duration:t}),S=Ee.default.useMemo(()=>!x||!i?null:i(e),[x,i,e]),b=Ee.default.useCallback(k=>{if(!a.current||!t)return;let I=a.current.getBoundingClientRect(),E=Math.max(0,Math.min(1,(k-I.left)/I.width))*t;s(E)},[t,s]),M=Ee.default.useCallback(k=>{u.current=!0,c(!0),l&&l(!0),b(k.clientX);let I=E=>{u.current&&b(E.clientX)},q=()=>{u.current=!1,c(!1),l&&l(!1),document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",q)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",q)},[b,l]),L=Ee.default.useCallback(k=>{k.preventDefault(),u.current=!0,c(!0),l&&l(!0);let I=k.touches[0];b(I.clientX);let q=C=>{C.preventDefault(),u.current&&C.touches[0]&&b(C.touches[0].clientX)},E=()=>{u.current=!1,c(!1),l&&l(!1),document.removeEventListener("touchmove",q),document.removeEventListener("touchend",E)};document.addEventListener("touchmove",q,{passive:!1}),document.addEventListener("touchend",E)},[b,l]);return Ee.default.useEffect(()=>{let k=a.current;if(k)return k.addEventListener("touchstart",L,{passive:!1}),()=>{k.removeEventListener("touchstart",L)}},[L]),Ee.default.createElement(df,{ref:a,role:"slider","aria-label":f.timeBar,"aria-valuemin":0,"aria-valuemax":Math.round(t),"aria-valuenow":Math.round(e),"aria-valuetext":Oe(Math.round(e)),tabIndex:0,onMouseDown:M},x?Ee.default.createElement(wf,{segments:r,currentTime:e,duration:t,buffered:o,hoveredIndex:p&&S?r.findIndex(k=>k.startTime===S.startTime):-1}):Ee.default.createElement(Ee.default.Fragment,null,Ee.default.createElement(ff,null),Ee.default.createElement(mf,{style:{width:`${y*100}%`}}),Ee.default.createElement(hf,{style:{width:`${m*100}%`}})),Ee.default.createElement(yf,{style:{left:`${m*100}%`}}),w&&Ee.default.createElement(ki,{strokePath:v,currentTime:e,duration:t,isFullscreen:!1,bottomOffset:14,visible:p}),x&&p&&S&&Ee.default.createElement(gf,{style:{left:`${m*100}%`}},S.title,`
`,Oe(Math.round(e))))};kf.propTypes={currentTime:qe.default.number.isRequired,duration:qe.default.number.isRequired,buffered:qe.default.number,chapters:qe.default.arrayOf(qe.default.shape({title:qe.default.string.isRequired,startTime:qe.default.number.isRequired,endTime:qe.default.number.isRequired})),heatmapData:qe.default.arrayOf(qe.default.shape({startTime:qe.default.number.isRequired,endTime:qe.default.number.isRequired,value:qe.default.number.isRequired})),getChapterAtTime:qe.default.func,onChange:qe.default.func.isRequired,onSeeking:qe.default.func};var Pf=Ee.default.memo(kf);Nt();var Tf=({visible:e,live:t,currentTime:o,duration:r,buffered:n,fullscreen:i,chapters:s,heatmapData:l,getChapterAtTime:a,i18n:u,onChangeCurrentTime:p,onSeeking:c,onRequestFullscreen:f,onExitFullscreen:m})=>Rt.default.createElement(lf,{$visible:e,onClick:y=>y.stopPropagation()},t===!1&&Rt.default.createElement(Rt.default.Fragment,null,Rt.default.createElement(cf,null,Oe(Math.round(o))," / ",Oe(Math.round(r))),Rt.default.createElement(uf,null,Rt.default.createElement(Pf,{currentTime:o,duration:r,buffered:n,chapters:s,heatmapData:l,getChapterAtTime:a,onChange:p,onSeeking:c}))),Rt.default.createElement(pf,{"aria-label":i?u.exitFullscreen:u.fullscreen,onClick:i?m:f},i?Rt.default.createElement(Qd,null):Rt.default.createElement(Xd,null)));Tf.propTypes={visible:fe.default.bool.isRequired,live:fe.default.bool.isRequired,currentTime:fe.default.number.isRequired,duration:fe.default.number.isRequired,buffered:fe.default.number,fullscreen:fe.default.bool.isRequired,chapters:fe.default.arrayOf(fe.default.shape({title:fe.default.string.isRequired,startTime:fe.default.number.isRequired,endTime:fe.default.number.isRequired})),heatmapData:fe.default.arrayOf(fe.default.shape({startTime:fe.default.number.isRequired,endTime:fe.default.number.isRequired,value:fe.default.number.isRequired})),getChapterAtTime:fe.default.func,i18n:fe.default.shape({exitFullscreen:fe.default.string,fullscreen:fe.default.string}).isRequired,onChangeCurrentTime:fe.default.func.isRequired,onSeeking:fe.default.func,onRequestFullscreen:fe.default.func.isRequired,onExitFullscreen:fe.default.func.isRequired};var Lf=Rt.default.memo(Tf);var Me=h(T()),no=h(G());var mh=ci`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`,ka=d.div`
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
  ${({direction:e})=>e==="forward"?W`
          background: linear-gradient(to left, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%);
        `:W`
          background: linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%);
        `}
`,Pa=d.div`
  display: flex;
  align-items: center;
  ${({direction:e})=>e==="backward"?"transform: rotate(180deg);":""}
  & > svg {
    width: 20px;
    height: 20px;
    animation: ${mh} 1s infinite;
    opacity: 0;
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }
`,Ta=d.span`
  font-size: 12px;
  color: #ccc;
  margin-top: 4px;
`,La=d.button`
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
`;var Ef=({skipState:e,onTapLeft:t,onTapRight:o,i18n:r})=>{let n=(r==null?void 0:r.seconds)||"seconds",i=Me.default.useCallback(l=>{l.stopPropagation(),t()},[t]),s=Me.default.useCallback(l=>{l.stopPropagation(),o()},[o]);return Me.default.createElement(Me.default.Fragment,null,Me.default.createElement(La,{direction:"backward",onClick:i,"aria-label":(r==null?void 0:r.skipBackward)||"Skip backward"}),Me.default.createElement(La,{direction:"forward",onClick:s,"aria-label":(r==null?void 0:r.skipForward)||"Skip forward"}),e.visible&&e.direction==="backward"&&Me.default.createElement(ka,{direction:"backward"},Me.default.createElement(Pa,{direction:"backward"},Me.default.createElement(Wo,null),Me.default.createElement(Wo,null),Me.default.createElement(Wo,null)),Me.default.createElement(Ta,null,e.seconds," ",n)),e.visible&&e.direction==="forward"&&Me.default.createElement(ka,{direction:"forward"},Me.default.createElement(Pa,{direction:"forward"},Me.default.createElement(Wo,null),Me.default.createElement(Wo,null),Me.default.createElement(Wo,null)),Me.default.createElement(Ta,null,e.seconds," ",n)))};Ef.propTypes={skipState:no.default.shape({direction:no.default.oneOf(["forward","backward",null]),visible:no.default.bool.isRequired,seconds:no.default.number.isRequired}).isRequired,onTapLeft:no.default.func.isRequired,onTapRight:no.default.func.isRequired,i18n:no.default.shape({seconds:no.default.string})};var Mf=Me.default.memo(Ef);var $=h(T()),zt=h(G());var If=d.div`
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
`,Af=d.div`
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
`,Of=d.span`
  flex: 1;
  font-weight: 400;
`,Yi=d.button`
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
  ${({$position:e})=>e==="left"?W`
          left: 6px;
        `:W`
          right: 6px;
        `}
`,Rf=d.ul`
  padding: 4px 0;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  list-style: none;
`,Xi=d.li`
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
`,Qi=d.div`
  display: block;
  width: 36px;
  height: 36px;
  margin: 0 auto 5px;
  position: relative;
  top: 5px;
`,Gi=d.span`
  display: block;
  font-size: 15px;
  color: #fff;
`,Ki=d.div`
  font-size: 11px;
  color: #ccc;
  line-height: 1;
  display: block;
  margin: 6px 0 0;
  padding: 0;
  text-align: center;
`,Df=d.div`
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
`,Bf=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 6px 0;
`,Rr=d.li`
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
  ${({active:e})=>e&&W`
      background: rgba(180, 60, 60, 0.6);
    `}
`,Zi=d.ul`
  margin: 0;
  padding: 6px 0;
  list-style: none;
`,Nf=d.div`
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
  ${({hidden:e})=>e?W`
          opacity: 0;
          pointer-events: none;
          transform: translateX(-100%);
        `:W`
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
        `}
`;var qf=[{label:"2",value:2},{label:"1.5",value:1.5},{label:"1.25",value:1.25},{label:"Normal",value:1},{label:"0.75",value:.75},{label:"0.5",value:.5},{label:"0.25",value:.25}],Ff=({visible:e,qualities:t,captions:o,activeCaption:r,playbackRate:n,playbackQuality:i,onChangeSettings:s,onCaptionChange:l,onClose:a})=>{var q;let{i18n:u}=V(),[p,c]=$.default.useState(null),[f,m]=$.default.useState(!0),[y,x]=$.default.useState(null);$.default.useEffect(()=>{if(i==null||i===0||t.length===0)return;let E=i.toString();t.find(N=>N.value===E)&&f&&x(E)},[i,t]);let v=$.default.useCallback(E=>{E.stopPropagation(),c(null),a()},[a]),w=$.default.useCallback(E=>{E.stopPropagation(),c(null)},[]),S=$.default.useCallback(E=>C=>{C.stopPropagation(),s({quality:{value:String(E)}}),E===0?m(!0):(m(!1),x(String(E))),c(null),a()},[s,a]),b=$.default.useCallback(E=>C=>{C.stopPropagation(),s({speed:{value:String(E)}}),c(null),a()},[s,a]),M=$.default.useCallback(E=>C=>{C.stopPropagation(),l(E),c(null),a()},[l,a]),L=$.default.useMemo(()=>{if(!r||!o||o.length===0)return u.off;let E=o.find(C=>C.language===r);return E?E.label:u.off},[r,o,u]),k=$.default.useMemo(()=>{let E=qf.find(C=>C.value===n);return E?E.label:"Normal"},[n]);$.default.useEffect(()=>{e&&c(null)},[e]);let I=p!==null;return $.default.createElement(If,{$visible:e,onClick:E=>E.stopPropagation()},$.default.createElement(Af,null,I?$.default.createElement(Yi,{$position:"left",onClick:w,"aria-label":u.back},$.default.createElement(Zd,null)):$.default.createElement(Yi,{$position:"left","aria-label":u.settings},$.default.createElement(Mn,null)),$.default.createElement(Of,null,I?p==="quality"?u.quality:p==="captions"?u.captions:u.speed:u.settings),$.default.createElement(Yi,{$position:"right",onClick:v,"aria-label":u.close},$.default.createElement(Kd,null))),$.default.createElement(Nf,{hidden:I},$.default.createElement(Rf,null,t.length>0&&$.default.createElement(Xi,{onClick:()=>c("quality")},$.default.createElement(Qi,null,$.default.createElement(Mn,null)),$.default.createElement(Gi,null,u.quality),$.default.createElement(Ki,null,f?y?`${u.auto} (${y}p)`:u.auto:((q=t.find(E=>E.value===y))==null?void 0:q.label)||y)),$.default.createElement(Xi,{onClick:()=>c("speed")},$.default.createElement(Qi,null,$.default.createElement(Gd,null)),$.default.createElement(Gi,null,u.speed),$.default.createElement(Ki,null,k)),o&&o.length>0&&$.default.createElement(Xi,{onClick:()=>c("captions")},$.default.createElement(Qi,null,$.default.createElement(Jd,null)),$.default.createElement(Gi,null,u.captions),$.default.createElement(Ki,null,L)))),$.default.createElement(Df,{$visible:I},$.default.createElement(Bf,null,p==="quality"&&$.default.createElement(Zi,null,t.map(E=>$.default.createElement(Rr,{key:E.value,active:!f&&E.value===y,onClick:S(E.value)},E.label)),$.default.createElement(Rr,{active:f,onClick:S(0)},u.auto)),p==="speed"&&$.default.createElement(Zi,null,qf.map(E=>$.default.createElement(Rr,{key:E.value,active:E.value===n,onClick:b(E.value)},E.label))),p==="captions"&&$.default.createElement(Zi,null,$.default.createElement(Rr,{active:r===null,onClick:M(null)},u.off),(o||[]).map(E=>$.default.createElement(Rr,{key:E.language,active:r===E.language,onClick:M(E.language)},E.label))))))};Ff.propTypes={visible:zt.default.bool.isRequired,qualities:zt.default.array.isRequired,captions:zt.default.array,activeCaption:zt.default.string,playbackRate:zt.default.number.isRequired,playbackQuality:zt.default.number,onChangeSettings:zt.default.func.isRequired,onCaptionChange:zt.default.func,onClose:zt.default.func.isRequired};var _f=$.default.memo(Ff);var ot=h(T());var hh=3e3;function Ea({hasResource:e,loading:t,prevented:o,paused:r,ended:n,waiting:i,seeking:s}){let[l,a]=(0,ot.useState)(!0),u=(0,ot.useRef)(null),p=he(),c=!e||t||o||r||n||i||s;(0,ot.useEffect)(()=>{p({type:"hiding",payload:!l})},[l,p]);let f=(0,ot.useCallback)(()=>{clearTimeout(u.current),u.current=setTimeout(()=>{a(!1)},hh)},[]),m=(0,ot.useCallback)(()=>{clearTimeout(u.current)},[]),y=(0,ot.useCallback)(()=>{a(w=>{let S=!w;return S&&!c&&f(),S})},[c,f]),x=(0,ot.useCallback)(()=>{a(!0),c||f()},[c,f]),v=(0,ot.useCallback)(()=>{c||(a(!1),m())},[c,m]);return(0,ot.useEffect)(()=>{c?(a(!0),m()):l&&f()},[c,l,f,m]),(0,ot.useEffect)(()=>{!s&&!r&&!n&&l&&f()},[s,r,n,l,f]),(0,ot.useEffect)(()=>()=>{clearTimeout(u.current)},[]),{controlsVisible:l,toggleControls:y,showControls:x,hideControls:v}}var Xe=h(T()),Vf=300,Ji=10,yh=1e3;function Ma({currentTime:e,duration:t,changeCurrentTime:o,showControls:r}){let[n,i]=(0,Xe.useState)({direction:null,visible:!1,seconds:0}),s=(0,Xe.useRef)(null),l=(0,Xe.useRef)(null),a=(0,Xe.useRef)(0),u=(0,Xe.useRef)(0),p=(0,Xe.useRef)(null),c=(0,Xe.useRef)(e);c.current=e;let f=(0,Xe.useRef)(t);f.current=t;let m=(0,Xe.useCallback)(v=>{let w=f.current,S=c.current;if(isNaN(w)||w<=0)return;let b=v==="forward"?Ji:-Ji,M=Math.max(0,Math.min(w,S+b));o(M),i(L=>({direction:v,visible:!0,seconds:L.direction===v&&L.visible?L.seconds+Ji:Ji})),clearTimeout(p.current),p.current=setTimeout(()=>{i({direction:null,visible:!1,seconds:0})},yh)},[o]),y=(0,Xe.useCallback)(()=>{a.current+=1,a.current===1?s.current=setTimeout(()=>{a.current=0,r&&r()},Vf):(clearTimeout(s.current),a.current=0,m("backward"))},[m,r]),x=(0,Xe.useCallback)(()=>{u.current+=1,u.current===1?l.current=setTimeout(()=>{u.current=0,r&&r()},Vf):(clearTimeout(l.current),u.current=0,m("forward"))},[m,r]);return(0,Xe.useEffect)(()=>()=>{clearTimeout(s.current),clearTimeout(l.current),clearTimeout(p.current)},[]),{skipState:n,handleTapLeft:y,handleTapRight:x}}var Ia=me.default.forwardRef(({videoRef:e,playerRef:t,live:o=!1,hasResource:r=!1,hasAudio:n,prevented:i,loading:s,paused:l,ended:a,seeking:u,waiting:p,duration:c,buffered:f=null,currentTime:m,muted:y,volume:x,pictureInPictureEnabled:v,pip:w,fullscreen:S,qualities:b,spriteVTTFile:M,chapters:L,heatmapData:k,fullHDQualityBreak:I,playbackRate:q,playbackQuality:E,loop:C,poster:N,captions:g,activeCaption:P,onCaptionChange:D,onPlayClick:j,onPauseClick:z,onTogglePlay:Y,changePlaybackRate:ue,changePlayBackQuality:A,changeVolume:R,onMutedClick:ne,changeCurrentTime:H,requestPictureInPicture:pe,exitPictureInPicture:de,requestFullscreen:xe,exitFullscreen:be,onSeeking:Fe,onLoopClick:_e,onPreventedClick:Ve,onPrevious:pt,onNext:it,showNavButtons:Ie,kernelMsg:xt=null},so)=>{let Ut=he(),{i18n:Dt}=V(),Wt=me.default.useRef(null),{controlsVisible:dt,toggleControls:Ct,showControls:ft,hideControls:ao}=Ea({hasResource:r,loading:s,prevented:i,paused:l,ended:a,waiting:p,seeking:u}),{skipState:wo,handleTapLeft:Go,handleTapRight:qr}=Ma({currentTime:m,duration:c,changeCurrentTime:H,showControls:Ct}),{contextMenuItems:lo,contextMenuPosition:uo,handleContextMenu:st}=$i({fullscreen:S,contextMenuRef:Wt,pip:w,loop:C,pictureInPictureEnabled:v,requestPictureInPicture:pe,exitPictureInPicture:de,onLoopClick:_e}),{segments:ko,getChapterAtTime:Fr}=vo({chapters:L,duration:c}),{cues:Ko,captionStyle:Yt}=Wi({captions:g,activeCaption:P});me.default.useEffect(()=>{Ut({videoRef:e,playerRef:t})},[e,t,Ut]),me.default.useImperativeHandle(so,()=>({showControls:ft,hideControls:ao}),[ft,ao]);let mt=me.default.useCallback(({quality:se,speed:ye})=>{var $e;if(ye&&ue(Number(($e=ye.value)!=null?$e:1)),se){let He=Number(se.value);A(Number.isNaN(He)?0:He)}},[ue,A]),[Ae,wt]=me.default.useState(!1),_r=me.default.useCallback(se=>{se.stopPropagation(),wt(!0)},[]),Rn=me.default.useCallback(()=>{wt(!1)},[]),ss=me.default.useCallback(()=>{l||a?j():z()},[l,a,j,z]),Q=(p||u&&!M||s)&&!l&&!a;return me.default.createElement(Vd,{onContextMenu:st,onClick:Ct},me.default.createElement(rn,{hasResource:r,prevented:i,paused:l,muted:y,currentTime:m,onClick:Ve}),N&&me.default.createElement(sn,{style:{opacity:m<=0||a?1:0}},me.default.createElement(an,{style:{backgroundImage:`url(${N})`}})),me.default.createElement(Tn,{ref:Wt,fullscreen:S,position:uo,menuItems:lo}),M&&me.default.createElement(bn,{spriteVTTFile:M,duration:c,seekTime:m,visible:u}),me.default.createElement($d,{$visible:dt&&r&&!a&&!i}),me.default.createElement(Mf,{skipState:wo,onTapLeft:Go,onTapRight:qr,i18n:Dt}),P&&Ko.length>0&&me.default.createElement(Ui,{cues:Ko,currentTime:m,captionStyle:Yt,isFullscreen:S,controlsVisible:l||a||s||p}),me.default.createElement(tf,{visible:dt&&!Ae,captions:g,activeCaption:P,onCaptionChange:D,onOpenSettings:_r,settingsLabel:Dt.settings,captionsLabel:Dt.captions}),me.default.createElement(_f,{visible:Ae,qualities:b,captions:g,activeCaption:P,playbackRate:q,playbackQuality:E,onChangeSettings:mt,onCaptionChange:D,onClose:Rn}),me.default.createElement(af,{visible:dt&&!Ae,isLoading:Q,paused:l,ended:a,onPlayPause:ss,onPrevious:pt,onNext:it,showNavButtons:Ie,i18n:Dt}),me.default.createElement(Lf,{visible:dt&&!Ae,live:o,currentTime:m,duration:c,buffered:f,fullscreen:S,chapters:ko,heatmapData:k,getChapterAtTime:Fr,i18n:Dt,onChangeCurrentTime:H,onSeeking:Fe,onRequestFullscreen:xe,onExitFullscreen:be}),me.default.createElement(nn,{hasResource:r,kernelMsg:xt}))});Ia.displayName="MobilePlayerSkin";Ia.propTypes={spriteVTTFile:_.default.string,videoRef:_.default.oneOfType([_.default.func,_.default.shape({current:_.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:_.default.oneOfType([_.default.func,_.default.shape({current:_.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:_.default.bool,waiting:_.default.bool,live:_.default.bool.isRequired,hasResource:_.default.bool.isRequired,loading:_.default.bool.isRequired,paused:_.default.bool.isRequired,ended:_.default.bool.isRequired,seeking:_.default.bool.isRequired,onPlayClick:_.default.func.isRequired,onPauseClick:_.default.func.isRequired,onTogglePlay:_.default.func.isRequired,duration:_.default.number.isRequired,buffered:_.default.number.isRequired||null,currentTime:_.default.number.isRequired,changeCurrentTime:_.default.func.isRequired,muted:_.default.bool.isRequired,volume:_.default.number.isRequired,changeVolume:_.default.func.isRequired,onMutedClick:_.default.func.isRequired,changePlaybackRate:_.default.func.isRequired,changePlayBackQuality:_.default.func.isRequired,pictureInPictureEnabled:_.default.bool.isRequired,pip:_.default.bool.isRequired,requestPictureInPicture:_.default.func.isRequired,exitPictureInPicture:_.default.func.isRequired,fullscreen:_.default.bool.isRequired,qualities:_.default.arrayOf(_.default.shape({label:_.default.string.isRequired,value:_.default.string.isRequired,isFullHD:_.default.bool.isRequired}).isRequired).isRequired,playbackRate:_.default.number.isRequired,loop:_.default.bool.isRequired,requestFullscreen:_.default.func.isRequired,exitFullscreen:_.default.func.isRequired,onLoopClick:_.default.func.isRequired,onPreventedClick:_.default.func.isRequired,onPrevious:_.default.func,onNext:_.default.func,showNavButtons:_.default.bool,kernelMsg:_.default.oneOfType([_.default.shape({type:_.default.string.isRequired,detail:_.default.string.isRequired}),_.default.oneOf([void 0])]),fullHDQualityBreak:_.default.number,poster:_.default.string.isRequired,hasAudio:_.default.bool,captions:_.default.array,activeCaption:_.default.string,onCaptionChange:_.default.func};var $f=me.default.memo(Ia,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.onTogglePlay===t.onTogglePlay&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.changePlayBackQuality===t.changePlayBackQuality&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onPreventedClick===t.onPreventedClick&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.onCaptionChange===t.onCaptionChange);Ne();var Aa=In.default.forwardRef((e,t)=>{let{skinMode:o,...r}=e;return o==="mobile"||o!=="desktop"&&_n?In.default.createElement($f,{ref:t,...r}):In.default.createElement(_d,{ref:t,...r})});Aa.displayName="PlayerSkin";Aa.propTypes={spriteVTTFile:F.default.string,chapters:F.default.arrayOf(F.default.shape({title:F.default.string.isRequired,startTime:F.default.number.isRequired})),heatmapData:F.default.arrayOf(F.default.shape({startTime:F.default.number.isRequired,endTime:F.default.number.isRequired,value:F.default.number.isRequired})),videoRef:F.default.oneOfType([F.default.func,F.default.shape({current:F.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:F.default.oneOfType([F.default.func,F.default.shape({current:F.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:F.default.bool,waiting:F.default.bool,live:F.default.bool.isRequired,hasResource:F.default.bool.isRequired,loading:F.default.bool.isRequired,paused:F.default.bool.isRequired,ended:F.default.bool.isRequired,seeking:F.default.bool.isRequired,onPlayClick:F.default.func.isRequired,onPauseClick:F.default.func.isRequired,duration:F.default.number.isRequired,buffered:F.default.number.isRequired||null,currentTime:F.default.number.isRequired,changeCurrentTime:F.default.func.isRequired,muted:F.default.bool.isRequired,volume:F.default.number.isRequired,changeVolume:F.default.func.isRequired,onMutedClick:F.default.func.isRequired,changePlaybackRate:F.default.func.isRequired,pictureInPictureEnabled:F.default.bool.isRequired,pip:F.default.bool.isRequired,requestPictureInPicture:F.default.func.isRequired,exitPictureInPicture:F.default.func.isRequired,fullscreen:F.default.bool.isRequired,qualities:F.default.arrayOf(F.default.shape({label:F.default.string.isRequired,value:F.default.string.isRequired,isFullHD:F.default.bool.isRequired}).isRequired).isRequired,playbackRate:F.default.number.isRequired,loop:F.default.bool.isRequired,requestFullscreen:F.default.func.isRequired,exitFullscreen:F.default.func.isRequired,onLoopClick:F.default.func.isRequired,onPreventedClick:F.default.func.isRequired,kernelMsg:F.default.oneOfType([F.default.shape({type:F.default.string.isRequired,detail:F.default.string.isRequired}),F.default.oneOf([void 0])]),fullHDQualityBreak:F.default.number,poster:F.default.string.isRequired,skinMode:F.default.oneOf(["auto","mobile","desktop"])};var Hf=In.default.memo(Aa,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.skinMode===t.skinMode&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.onTogglePlay===t.onTogglePlay&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onCaptionChange===t.onCaptionChange&&e.onPreventedClick===t.onPreventedClick&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);var es=h(T());var Oa=["i18n","captionDragging","contextMenuVisible","controlsHovering","hiding","menuVisible","subMenuVisible","timeSliding","volumeSliding","videoRef","playerRef"];function Ra(e,t){try{if(!e||!t)throw new Error("Reducer params has not been provided!");if(typeof t=="function"){let o=t(e);return!o||typeof o!="object"?e:Ra(e,o)}if("type"in t){let{type:o,payload:r}=t;if(Oa.includes(o)===!1)throw new Error(`Invalid type "${o}" in action payload!`);return e[o]===r?e:{...e,[o]:r}}else if(typeof t=="object"){if(Object.keys(t).length===0)throw new Error("Reducer action object is empty!");let o=!1,r={...e};for(let n in t){let i=t[n];if(Oa.includes(n)===!1)throw new Error(`Invalid type "${n}" in action object!`);e[n]!==i&&(o=!0,r={...r,[n]:i})}return o?r:e}return e}catch(o){return console.error("Error in AppReducer: ",o),e}}Ne();var gh={en:mo,es:ho},ts=({children:e,language:t})=>{let[o,r]=es.default.useReducer(Ra,{...Us,i18n:gh[t]}),n=es.default.useMemo(()=>({state:o,dispatch:r}),[o,r]);return es.default.createElement(br.Provider,{value:n},e)};Ne();var ut=h(T());var io=h(T()),bh=({prevented:e,muted:t,videoRef:o,src:r,updateState:n})=>{let i=io.default.useRef(.8),s=io.default.useRef(!1),l=io.default.useCallback(c=>{if(!o.current||s.current)return;let f=c.target.muted;c.target.volume===0&&(f=!0),n({volume:c.target.volume,muted:f})},[o,n]),a=io.default.useCallback(()=>{if(!o.current)return;let c=o.current;if(!c)return;let f=!c.muted;if(s.current=!0,f)c.volume>0&&(i.current=c.volume),c.muted=!0,n({volume:c.volume,muted:!0});else{let m=i.current||.8;c.muted=!1,c.volume=m,n({volume:m,muted:!1})}setTimeout(()=>{s.current=!1},0)},[o,n]),u=io.default.useCallback(c=>{if(!o.current)return;let f=o.current,m=c===0;f&&(f.volume=c),c!==0&&f.muted===!0&&(m=!1,f.muted=!1),c>0&&(i.current=c),n({volume:c,muted:m})},[o,n]),p=io.default.useCallback(c=>{if(!o.current)return;let m=o.current.volume,y=c(m);u(y)},[o,u]);return io.default.useEffect(()=>{if(!o.current)return()=>{};let c=o.current;return c?(c.addEventListener("volumechange",l),()=>{c.removeEventListener("volumechange",l)}):()=>{}},[l,o]),io.default.useEffect(()=>{if(!o.current)return;let c=o.current;c&&(t?c.muted=!0:c.muted=!1)},[r,o,t]),{onMutedClick:a,changeVolume:u,updateVolumeWithCallback:p}},os=bh;var Dr=h(T()),Sh=({updateState:e,videoRef:t,playerRef:o})=>{let r=Dr.default.useCallback(()=>{let l=o==null?void 0:o.current,a=t==null?void 0:t.current;if(!l){console.error("useVideoFullscreen: the player element is not ready");return}if(l.requestFullscreen){let u=l.requestFullscreen();u&&u.catch&&u.catch(()=>{})}else l.msRequestFullscreen?l.msRequestFullscreen():l.webkitRequestFullscreen?l.webkitRequestFullscreen():a&&a.webkitEnterFullScreen&&a.webkitEnterFullScreen()},[t,o]),n=Dr.default.useCallback(()=>{document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},[]),i=Dr.default.useCallback(()=>{let l=o==null?void 0:o.current;(document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement)===l?n():r()},[o,n,r]),s=Dr.default.useCallback(()=>{let l=o==null?void 0:o.current,a=document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement;e({fullscreen:!!l&&a===l})},[e,o]);return Dr.default.useEffect(()=>(document.addEventListener("fullscreenchange",s),document.addEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=s,()=>{document.removeEventListener("fullscreenchange",s),document.removeEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=null}),[s]),{requestFullscreen:r,exitFullscreen:n,requestToggleFullscreen:i}},zf=Sh;var jf=(e,t)=>({...e,seeking:t,isEnded:!1,playing:t?e.playing:!0});var vh=({ref:e,playerRef:t,url:o,player:r,fullHDQualityBreak:n,sources:i,prevented:s,muted:l,updateState:a})=>{let{i18n:u}=V(),p=ut.default.useRef(null),c=ut.default.useRef(null),f=ut.default.useCallback(({fullscreen:C})=>{a(N=>({...N,isFullScreen:C}))},[a]),{requestFullscreen:m,exitFullscreen:y,requestToggleFullscreen:x}=zf({updateState:f,videoRef:p,playerRef:t}),v=ut.default.useMemo(()=>i.length>0?i.map(C=>({label:Mr({label:"quality",value:C.resolution.toString(),i18n:u}),value:C.resolution.toString(),isFullHD:n!==void 0&&C.resolution>=n})):[],[i,n,u]),{onMutedClick:w,changeVolume:S,updateVolumeWithCallback:b}=os({prevented:s,muted:l,videoRef:p,src:o,updateState:({muted:C,volume:N})=>a(g=>({...g,isMuted:C!=null?C:!1,volume:N!=null?N:0}))}),M=ut.default.useCallback(C=>{r&&(a(N=>({...N,played:C})),r.seekTo(C))},[r,a]),L=ut.default.useCallback(C=>{if(!r)return;let N=r.getCurrentTime()||0,g=r.getDuration()||0,P=C(N,g);M(P)},[r,M]),k=ut.default.useRef(w);k.current=w;let I=ut.default.useRef(M);I.current=M;let q=ut.default.useMemo(()=>({onPlayClick:()=>a(C=>({...C,playing:!0})),onPauseClick:()=>a(C=>({...C,playing:!1})),onTogglePlay:()=>a(C=>({...C,playing:!C.playing})),changePlaybackRate:C=>a(N=>({...N,playbackRate:C})),changePlayBackQuality:C=>{a(N=>({...N,playbackQuality:C}))},requestPictureInPicture:()=>a(C=>({...C,isPIP:!0})),exitPictureInPicture:()=>a(C=>({...C,isPIP:!1})),onSeeking:C=>a(N=>jf(N,C)),onMutedClick:()=>k.current(),onLoopClick:()=>a(C=>({...C,loop:!C.loop})),onCaptionChange:C=>a(N=>({...N,activeCaption:C})),onPreventedClick:()=>a(C=>({...C,isMuted:!1,volume:1})),changeCurrentTime:C=>I.current(C)}),[a]),E=ut.default.useCallback(C=>{var g;C.preventDefault(),C.stopPropagation();let N=gi[C.which||C.keyCode]||bi[C.key];if(r)switch((g=c.current)==null||g.showControls(),N){case"SPACE_KEY":{a(P=>({...P,playing:!P.playing}));break}case"F_KEY":{x();break}case"MUTE_KEY":{w();break}case"ARROW_LEFT_KEY":{L(P=>{let D=P-5;return D<0?0:D});break}case"ARROW_RIGHT_KEY":{L((P,D)=>{let j=P+5;return j>=D?D:j});break}case"ARROW_UP_KEY":{b(P=>{let D=P+.1;return D>=1?1:D});break}case"ARROW_DOWN_KEY":{b(P=>{let D=P-.1;return D<0?0:D});break}default:break}},[r,a,x,w,L,b]);return ut.default.useImperativeHandle(e,()=>({handleKeyDown:E})),ut.default.useEffect(()=>{var C;p.current=(C=r==null?void 0:r.getPlayer())!=null?C:null},[r]),{playerSkinRef:c,videoRef:p,qualities:v,memorizedProps:q,handleKeyDown:E,requestFullscreen:m,exitFullscreen:y,changeVolume:S}},Uf=vh;var xh={en:mo,es:ho},Da=An.default.forwardRef(({url:e,sources:t,playerRef:o,player:r,hasAudio:n,fullHDQualityBreak:i,live:s=!1,language:l=Object.keys(xh)[0],hasResource:a=!1,buffered:u=null,kernelMsg:p=null,updateState:c,waiting:f=!1,prevented:m=!1,muted:y=!1,...x},v)=>{let{playerSkinRef:w,videoRef:S,qualities:b,memorizedProps:M,handleKeyDown:L,requestFullscreen:k,exitFullscreen:I,changeVolume:q}=Uf({ref:v,playerRef:o,url:e,player:r,fullHDQualityBreak:i,sources:t,prevented:m,muted:y,updateState:c});return An.default.createElement(ts,{language:l},An.default.createElement(Hf,{ref:w,videoRef:S,playerRef:o,qualities:b,hasAudio:n,handleKeyDown:L,requestFullscreen:k,exitFullscreen:I,changeVolume:q,fullHDQualityBreak:i,live:s,hasResource:a,buffered:u,kernelMsg:p,prevented:m,waiting:f,muted:y,...x,...M}))});Da.displayName="PlayerSkinWrapper";Da.propTypes={playerRef:Z.default.oneOfType([Z.default.func,Z.default.shape({current:Z.default.instanceOf(HTMLDivElement)})]).isRequired,player:Z.default.instanceOf(yt),live:Z.default.bool,prevented:Z.default.bool,waiting:Z.default.bool,hasResource:Z.default.bool.isRequired,hasAudio:Z.default.bool.isRequired,loading:Z.default.bool.isRequired,paused:Z.default.bool.isRequired,ended:Z.default.bool.isRequired,seeking:Z.default.bool.isRequired,duration:Z.default.number.isRequired,buffered:Z.default.number.isRequired||null,currentTime:Z.default.number.isRequired,muted:Z.default.bool.isRequired,volume:Z.default.number.isRequired,playbackRate:Z.default.number.isRequired,pictureInPictureEnabled:Z.default.bool.isRequired,fullHDQualityBreak:Z.default.number,pip:Z.default.bool.isRequired,fullscreen:Z.default.bool.isRequired,kernelMsg:Z.default.oneOfType([Z.default.shape({type:Z.default.string.isRequired,detail:Z.default.string.isRequired}),Z.default.oneOf([void 0])]),url:Z.default.string,sources:Z.default.arrayOf(Z.default.shape({src:Z.default.string.isRequired,resolution:Z.default.number.isRequired}).isRequired).isRequired,loop:Z.default.bool.isRequired};var Wf=An.default.memo(Da,(e,t)=>e.playerRef===t.playerRef&&e.player===t.player&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.kernelMsg===t.kernelMsg&&e.url===t.url&&e.sources===t.sources&&e.chapters===t.chapters&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.poster===t.poster&&e.skinMode===t.skinMode);var jt={kernelError:null,seeking:!1,seek:0,played:0,loaded:0,duration:0,isFullScreen:!1,isEnded:!1,isPIP:!1,isLoading:!0,isBuffering:!1,volume:.8,playbackRate:1,playbackQuality:null,videoUrl:null,hasAudio:!0,loop:!1,playing:!1,isMuted:!1,activeCaption:null};var Ba=h(T());var Yf=Ba.default.forwardRef(({children:e,style:t,...o},r)=>Ba.default.createElement(_t,{ref:r,style:t,...o},e));Yf.displayName="MediaPlayerWrapper";var Xf=Yf;var ct=h(T());Nt();Ne();var Qf=async()=>{let e="https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js";try{let o=er("internet_speed");if(o){let f=parseFloat(o);if(!isNaN(f)&&f>0)return f}let r=new AbortController,n=setTimeout(()=>r.abort(),1e4),i=performance.now(),l=await(await fetch(e,{signal:r.signal,cache:"no-store"})).blob();clearTimeout(n);let a=performance.now(),u=l.size*8||1638400,p=(a-i)/1e3,c=u/(p*1024*1024);return tr("internet_speed",c.toString(),7),c}catch(o){return o.name!=="AbortError"&&console.error("An error occurred while measuring the network speed: ",o),null}},Gf=(e,t)=>{let o=[{quality:144,minSpeed:.3},{quality:270,minSpeed:.5},{quality:360,minSpeed:.7},{quality:480,minSpeed:1},{quality:720,minSpeed:2.5},{quality:1080,minSpeed:5},{quality:2160,minSpeed:20}],r;for(let n=o.length-1;n>=0;n--){let i=o[n];if(e>=i.minSpeed){r=i.quality;break}}if(r&&t.includes(r))return r;if(r)for(let n=o.length-1;n>=0;n--){let i=o[n];if(i.quality<=r&&t.includes(i.quality))return i.quality}for(let n=0;n<o.length;n++){let i=o[n];if(t.includes(i.quality))return i.quality}return t.length>0?t[0]:void 0};var Ch=({onBuffer:e,onBufferEnd:t,onDisablePIP:o,onDuration:r,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:u,onPlayBackRateChange:p,onProgress:c,onReady:f,onSeek:m,onStart:y,onLoaded:x,onMount:v,updateState:w,playerState:S,extraProps:{url:b,sources:M,fullHDQualityBreak:L,prevented:k}})=>{let[I,q]=ct.default.useState(null),E=Vo(M),C=ct.default.useMemo(()=>E.length>0?zr(E,"resolution"):null,[E]),N=ct.default.useRef(w);N.current=w;let g=ct.default.useRef({onBuffer:e,onBufferEnd:t,onDisablePIP:o,onDuration:r,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:u,onPlayBackRateChange:p,onProgress:c,onReady:f,onSeek:m,onStart:y,onLoaded:x,onMount:v});g.current={onBuffer:e,onBufferEnd:t,onDisablePIP:o,onDuration:r,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:u,onPlayBackRateChange:p,onProgress:c,onReady:f,onSeek:m,onStart:y,onLoaded:x,onMount:v};let P=ct.default.useRef(k);P.current=k;let D=ct.default.useRef(S.seeking);D.current=S.seeking,ct.default.useEffect(()=>{if(C&&L!==void 0&&!(L in C)){let A=Object.keys(C).join(", ");console.error(`PlayerStack: Invalid fullHDQualityBreak value "${L}". Accepted resolutions are: ${A}. Falling back to highest available.`)}},[C,L]),ct.default.useEffect(()=>{if(!C){q(null);return}let A=!1;return(async()=>{var R,ne;try{let H=await Qf();if(A)return;let pe=Object.keys(C).map(Number),de=Gf(H||0,pe),xe=E[0];H!==null&&de?(q((ne=(R=C[de])==null?void 0:R.src)!=null?ne:xe.src),j.current=de,N.current(be=>({...be,playbackQuality:de}))):(q(xe.src),j.current=xe.resolution,N.current(be=>({...be,playbackQuality:xe.resolution})))}catch{if(A)return;let H=E[0];q(H.src),j.current=H.resolution,N.current(pe=>({...pe,playbackQuality:H.resolution}))}})(),()=>{A=!0}},[E]);let j=ct.default.useRef(null),{playbackQuality:z}=S;ct.default.useEffect(()=>{z===0&&j.current!==null&&N.current(A=>({...A,playbackQuality:j.current}))},[z]);let Y=ct.default.useMemo(()=>{var A,R;return C?z==null||z===0?I!=null?I:E[0].src:(R=(A=C[z])==null?void 0:A.src)!=null?R:E[0].src:b},[b,E,C,z,I]);return{...ct.default.useMemo(()=>({onBuffer:(...A)=>{g.current.onBuffer&&g.current.onBuffer(...A),N.current(R=>({...R,isBuffering:!0}))},onBufferEnd:(...A)=>{g.current.onBufferEnd&&g.current.onBufferEnd(...A),N.current(R=>({...R,isBuffering:!1}))},onDisablePIP:A=>{g.current.onDisablePIP&&g.current.onDisablePIP(A),N.current(R=>({...R,isPIP:!1}))},onDuration:A=>{g.current.onDuration&&g.current.onDuration(A),N.current(R=>({...R,duration:A}))},onEnablePIP:A=>{g.current.onEnablePIP&&g.current.onEnablePIP(A),N.current(R=>({...R,isPIP:!0}))},onEnded:A=>{g.current.onEnded&&g.current.onEnded(A),N.current(R=>({...R,isEnded:!0}))},onError:(A,R,ne,H)=>{g.current.onError&&g.current.onError(A,R,ne,H);let pe=["networkError"],de=["bufferStalledError","bufferNudgeOnStall","bufferAppendError","fragParsingError"];pe.includes(R==null?void 0:R.type)||(R==null?void 0:R.type)==="mediaError"&&de.includes(R==null?void 0:R.details)||N.current(be=>{var Fe;return{...be,kernelError:R?{type:(R==null?void 0:R.type)||"UnknownError",detail:((Fe=R==null?void 0:R.error)==null?void 0:Fe.message)||"Something was wrong with the playback. Please try again."}:null,isLoading:!1,playing:!1}})},onPause:A=>{g.current.onPause&&g.current.onPause(A),N.current(R=>({...R,playing:!1}))},onPlay:A=>{g.current.onPlay&&g.current.onPlay(A),N.current(R=>{var pe;let ne=(pe=A==null?void 0:A.hasAudio)!=null?pe:!1,H=P.current?!0:ne||R.hasAudio||!1;return{...R,playing:!0,isEnded:!1,hasAudio:H}})},onPlayBackQualityChange:A=>{g.current.onPlayBackQualityChange&&g.current.onPlayBackQualityChange(A),N.current(R=>({...R,playbackQuality:A}))},onPlayBackRateChange:A=>{g.current.onPlayBackRateChange&&g.current.onPlayBackRateChange(A),N.current(R=>({...R,playbackRate:A}))},onProgress:A=>{g.current.onProgress&&g.current.onProgress(A),D.current||N.current(R=>({...R,played:A.playedSeconds,loaded:A.loaded}))},onReady:A=>{g.current.onReady&&g.current.onReady(A),N.current(R=>({...R,isLoading:!1}))},onSeek:A=>{g.current.onSeek&&g.current.onSeek(A),N.current(R=>({...R,seek:A}))},onStart:()=>{g.current.onStart&&g.current.onStart()},onLoaded:(...A)=>{g.current.onLoaded&&g.current.onLoaded(...A)},onMount:(...A)=>{g.current.onMount&&g.current.onMount(...A)}}),[]),videoUrl:Y!=null?Y:I}},rs=Ch;var Kf=d.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  margin: auto;
`;var Jf=De.default.forwardRef((e,t)=>{var w;let[o,r]=De.default.useState({width:e.width||"100%",height:e.height||"100%"}),[n,i]=De.default.useState({...jt,isPIP:e.pip,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(w=e.volume)!=null?w:jt.volume}),[s,l]=De.default.useState({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume});(e.pip!==s.pip||e.playbackRate!==s.playbackRate||e.loop!==s.loop||e.playing!==s.playing||e.muted!==s.muted||e.volume!==s.volume)&&(l({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume}),i(S=>{var M,L;let b={...S};return e.pip!==s.pip&&(b.isPIP=e.pip),e.playbackRate!==s.playbackRate&&(b.playbackRate=e.playbackRate),e.loop!==s.loop&&(b.loop=e.loop),e.playing!==s.playing&&(b.playing=e.playing),e.muted!==s.muted&&(b.isMuted=e.muted,b.volume=e.muted?0:(M=e.volume)!=null?M:jt.volume),e.volume!==s.volume&&!e.muted&&(b.volume=(L=e.volume)!=null?L:jt.volume),b}));let a=De.default.useRef(null),u=De.default.useRef(null),p=De.default.useRef(e.url),c=De.default.useRef(e.sources);De.default.useEffect(()=>{let S=p.current!==e.url,b=!(0,Zf.default)(c.current,e.sources);(S||b)&&(p.current=e.url,c.current=e.sources,r({width:e.width||"100%",height:e.height||"100%"}),i(M=>({...M,isLoading:!0,isBuffering:!1,duration:0,played:0,loaded:0,seek:0,isEnded:!1,kernelError:null,seeking:!1})))},[e.url,e.sources,e.width,e.height]);let f=De.default.useCallback(S=>{var b,M;(M=(b=a.current)==null?void 0:b.handleKeyDown)==null||M.call(b,S)},[]),m=De.default.useMemo(()=>e.prevented||e.playing&&e.muted,[e.muted,e.playing,e.prevented]);De.default.useEffect(()=>{if(e.player&&n.isLoading===!1){let b=e.player.getPlayer(),M=()=>{let I=b.offsetWidth,q=b.offsetHeight;I>0&&q>0?r({width:`${I}px`,height:`${q}px`}):r({width:e.width||"100%",height:e.height||"100%"})},L=setTimeout(M,500),k=()=>M();return b.addEventListener("loadedmetadata",k),()=>{clearTimeout(L),b.removeEventListener("loadedmetadata",k)}}},[e.player,e.width,e.height,n.isLoading]);let{videoUrl:y,...x}=rs({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDisablePIP:e.onDisablePIP,onDuration:e.onDuration,onEnablePIP:e.onEnablePIP,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackQualityChange:e.onPlayBackQualityChange,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:i,playerState:n,extraProps:{url:e.url,sources:e.sources,fullHDQualityBreak:e.fullHDQualityBreak,prevented:m}}),v=De.default.useMemo(()=>({attributes:e.config.attributes,tracks:e.config.tracks,forceVideo:e.config.forceVideo,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceLoad:e.config.forceLoad,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS,loopOnEnded:e.config.loopOnEnded}),[e.config]);return De.default.createElement(Xf,{tabIndex:0,role:"application",dir:"ltr",ref:u,onKeyDown:f,style:o},De.default.createElement(Kf,null,y&&De.default.createElement(yt,{ref:t,activePlayer:e.activePlayer,loop:n.loop,muted:n.isMuted,pip:n.isPIP,playbackRate:n.playbackRate,playbackQuality:n.playbackQuality,playsinline:e.playsinline,progressInterval:e.progressInterval,stopOnUnmount:e.stopOnUnmount,volume:n.volume,url:y,width:e.width,height:e.height,playing:n.playing,activeCaption:n.activeCaption,viewType:"video",config:v,disableDeferredLoading:e.disableDeferredLoading,progressFrequency:e.progressFrequency,...x})),De.default.createElement(Wf,{ref:a,playerRef:u,url:y,sources:e.sources,hasAudio:n.hasAudio,spriteVTTFile:e.spriteVTTFile,chapters:e.chapters,captions:e.captions,heatmapData:e.heatmapData,hasResource:typeof y=="string"||e.sources.length>0,kernelMsg:n.kernelError,loading:n.isLoading,prevented:m,muted:n.isMuted,paused:n.playing===!1,live:e.live,buffered:n.loaded,ended:n.isEnded,seeking:n.seeking,waiting:n.isBuffering||e.waiting,duration:n.duration,currentTime:n.played,volume:n.volume,playbackRate:n.playbackRate,playbackQuality:n.playbackQuality,pictureInPictureEnabled:!0,pip:n.isPIP,loop:n.loop,activeCaption:n.activeCaption,fullscreen:n.isFullScreen,fullHDQualityBreak:e.fullHDQualityBreak,language:e.language,poster:e.poster,updateState:i,player:e.player,skinMode:e.skinMode,onPrevious:e.onPrevious,onNext:e.onNext,showNavButtons:e.showNavButtons}))});Jf.displayName="MediaPlayerSkin";var e1=De.default.memo(Jf,(e,t)=>e.url===t.url&&e.sources===t.sources&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.prevented===t.prevented&&e.waiting===t.waiting&&e.playing===t.playing&&e.loop===t.loop&&e.volume===t.volume&&e.muted===t.muted&&e.paused===t.paused&&e.live===t.live&&e.pip===t.pip&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.height===t.height&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.pipeline===t.pipeline&&e.stopOnUnmount===t.stopOnUnmount&&e.activePlayer===t.activePlayer&&e.player===t.player&&e.progressFrequency===t.progressFrequency&&e.disableDeferredLoading===t.disableDeferredLoading&&e.language===t.language&&e.poster===t.poster&&e.config===t.config&&e.skinMode===t.skinMode&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onPlayBackQualityChange===t.onPlayBackQualityChange&&e.onProgress===t.onProgress&&e.onEnablePIP===t.onEnablePIP&&e.onDisablePIP===t.onDisablePIP&&e.onLoaded===t.onLoaded&&e.onMount===t.onMount&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);var ke=h(T());var O=h(T()),X=h(G());Ne();var ns=h(T()),t1=({width:e=36,height:t=36})=>ns.default.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:t},ns.default.createElement("path",{d:"M13 10.15C13 9.5 13.72 9.1 14.27 9.46L25.97 17.31C26.46 17.64 26.46 18.36 25.97 18.69L14.27 26.54C13.72 26.9 13 26.5 13 25.85V10.15Z",fill:"currentColor"}));t1.displayName="AudioPlayIcon";var o1=ns.default.memo(t1);var On=h(T()),r1=({width:e=36,height:t=36})=>On.default.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:t},On.default.createElement("path",{d:"M11 9.5C11 9.08 11.34 8.75 11.75 8.75H14.75C15.16 8.75 15.5 9.08 15.5 9.5V26.5C15.5 26.92 15.16 27.25 14.75 27.25H11.75C11.34 27.25 11 26.92 11 26.5V9.5Z",fill:"currentColor"}),On.default.createElement("path",{d:"M20.5 9.5C20.5 9.08 20.84 8.75 21.25 8.75H24.25C24.66 8.75 25 9.08 25 9.5V26.5C25 26.92 24.66 27.25 24.25 27.25H21.25C20.84 27.25 20.5 26.92 20.5 26.5V9.5Z",fill:"currentColor"}));r1.displayName="AudioPauseIcon";var n1=On.default.memo(r1);var is=h(T()),i1=({width:e=36,height:t=36})=>is.default.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:t},is.default.createElement("path",{d:"M18 9V5.25L12.75 10.5L18 15.75V12C21.73 12 24.75 15.02 24.75 18.75C24.75 22.48 21.73 25.5 18 25.5C14.27 25.5 11.25 22.48 11.25 18.75H8.75C8.75 23.86 12.89 28 18 28C23.11 28 27.25 23.86 27.25 18.75C27.25 13.64 23.11 9.5 18 9.5V9Z",fill:"currentColor"}));i1.displayName="AudioReplayIcon";var s1=is.default.memo(i1);var Br=h(T());var Na=({width:e=36,height:t=36})=>Br.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Br.default.createElement("path",{d:"M18 9V4.5L12 10.5L18 16.5V12C22.14 12 25.5 15.36 25.5 19.5C25.5 23.64 22.14 27 18 27C13.86 27 10.5 23.64 10.5 19.5H7.5C7.5 25.29 12.21 30 18 30C23.79 30 28.5 25.29 28.5 19.5C28.5 13.71 23.79 9 18 9Z"}),Br.default.createElement("path",{d:"M16.83 22.5H15.555V18.615L14.04 19.08V18.045L16.695 17.1H16.83V22.5Z"}),Br.default.createElement("path",{d:"M22.095 19.695C22.095 20.31 22.02 20.835 21.87 21.27C21.72 21.69 21.495 22.02 21.21 22.26C20.925 22.5 20.565 22.62 20.145 22.62C19.725 22.62 19.365 22.5 19.08 22.26C18.795 22.02 18.57 21.69 18.42 21.27C18.27 20.835 18.195 20.31 18.195 19.695C18.195 19.08 18.27 18.555 18.42 18.12C18.57 17.7 18.795 17.37 19.08 17.13C19.365 16.89 19.725 16.77 20.145 16.77C20.565 16.77 20.925 16.89 21.21 17.13C21.495 17.37 21.72 17.7 21.87 18.12C22.02 18.555 22.095 19.08 22.095 19.695ZM20.82 19.695C20.82 19.245 20.775 18.87 20.7 18.6C20.625 18.33 20.505 18.12 20.355 17.985C20.205 17.85 20.01 17.775 19.785 17.775H20.505C20.28 17.775 20.085 17.85 19.935 17.985C19.785 18.12 19.665 18.33 19.59 18.6C19.515 18.87 19.47 19.245 19.47 19.695C19.47 20.145 19.515 20.52 19.59 20.79C19.665 21.06 19.785 21.27 19.935 21.405C20.085 21.54 20.28 21.615 20.505 21.615H19.785C20.01 21.615 20.205 21.54 20.355 21.405C20.505 21.27 20.625 21.06 20.7 20.79C20.775 20.52 20.82 20.145 20.82 19.695Z"}));Na.displayName="SkipBackIcon";Na.propTypes=K;var a1=Br.default.memo(Na,ee);var Nr=h(T());var qa=({width:e=36,height:t=36})=>Nr.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Nr.default.createElement("path",{d:"M18 9C12.21 9 7.5 13.71 7.5 19.5C7.5 25.29 12.21 30 18 30C23.79 30 28.5 25.29 28.5 19.5H25.5C25.5 23.64 22.14 27 18 27C13.86 27 10.5 23.64 10.5 19.5C10.5 15.36 13.86 12 18 12V16.5L24 10.5L18 4.5V9Z"}),Nr.default.createElement("path",{d:"M16.83 22.5H15.555V18.615L14.04 19.08V18.045L16.695 17.1H16.83V22.5Z"}),Nr.default.createElement("path",{d:"M22.095 19.695C22.095 20.31 22.02 20.835 21.87 21.27C21.72 21.69 21.495 22.02 21.21 22.26C20.925 22.5 20.565 22.62 20.145 22.62C19.725 22.62 19.365 22.5 19.08 22.26C18.795 22.02 18.57 21.69 18.42 21.27C18.27 20.835 18.195 20.31 18.195 19.695C18.195 19.08 18.27 18.555 18.42 18.12C18.57 17.7 18.795 17.37 19.08 17.13C19.365 16.89 19.725 16.77 20.145 16.77C20.565 16.77 20.925 16.89 21.21 17.13C21.495 17.37 21.72 17.7 21.87 18.12C22.02 18.555 22.095 19.08 22.095 19.695ZM20.82 19.695C20.82 19.245 20.775 18.87 20.7 18.6C20.625 18.33 20.505 18.12 20.355 17.985C20.205 17.85 20.01 17.775 19.785 17.775H20.505C20.28 17.775 20.085 17.85 19.935 17.985C19.785 18.12 19.665 18.33 19.59 18.6C19.515 18.87 19.47 19.245 19.47 19.695C19.47 20.145 19.515 20.52 19.59 20.79C19.665 21.06 19.785 21.27 19.935 21.405C20.085 21.54 20.28 21.615 20.505 21.615H19.785C20.01 21.615 20.205 21.54 20.355 21.405C20.505 21.27 20.625 21.06 20.7 20.79C20.775 20.52 20.82 20.145 20.82 19.695Z"}));qa.displayName="SkipForwardIcon";qa.propTypes=K;var l1=Nr.default.memo(qa,ee);var ie=h(T()),Fa=h(G());var Xo=h(T());var u1=d.div`
  position: relative;
  display: inline-flex;
`,c1=d.button`
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
`,p1=Xo.default.forwardRef(({$visible:e,...t},o)=>Xo.default.createElement("div",{ref:o,...t}));p1.displayName="MenuOverlay";var d1=d(p1)`
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
`,f1=d.ul`
  padding: 10px 0;
`,m1=d.li`
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
`,h1=d.span`
  margin-right: auto;
`,y1=d.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 87%;
  color: #fff;
`,g1=Xo.default.forwardRef(({$visible:e,...t},o)=>Xo.default.createElement("div",{ref:o,...t}));g1.displayName="SubMenuOverlay";var b1=d(g1)`
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
`,S1=d.div`
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
`,v1=d.div`
  opacity: ${({$show:e})=>e?1:0};
  transform: ${({$show:e})=>e?"translateX(0)":"translateX(50px)"};
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
`,x1=d.ul`
  padding: 8px 0;
`,C1=Xo.default.forwardRef(({$selected:e,...t},o)=>Xo.default.createElement("li",{ref:o,...t}));C1.displayName="SubMenuItem";var w1=d(C1)`
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
`;var wh=[2,1.5,1.25,1,.75,.5],k1=({playbackRate:e,changePlaybackRate:t})=>{let o=ie.default.useRef(null),[r,n]=ie.default.useState(!1),[i,s]=ie.default.useState(!1),[l,a]=ie.default.useState(!1),{i18n:u}=V(),p=Te(),c=ie.default.useCallback(v=>{v.stopPropagation(),n(w=>(w&&(s(!1),a(!1)),!w))},[]),f=ie.default.useCallback(()=>{s(!0),requestAnimationFrame(()=>a(!0))},[]),m=ie.default.useCallback(()=>{a(!1),setTimeout(()=>s(!1),150)},[]),y=ie.default.useCallback(v=>{t(v),a(!1),setTimeout(()=>{s(!1),n(!1)},150)},[t]);ie.default.useEffect(()=>{if(!r)return;let v=w=>{if(!o.current)return;(w.composedPath?w.composedPath():[]).includes(o.current)||o.current.contains(w.target)||(n(!1),s(!1),a(!1))};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[r]);let x=e===1?u.normal:`${e}x`;return ie.default.createElement(u1,{ref:o},ie.default.createElement(ge,{label:u.settings},ie.default.createElement(c1,{type:"button","aria-label":u.settings,"aria-expanded":r,onClick:c,$expanded:r},ie.default.createElement(Ni,{...p}))),ie.default.createElement(d1,{$visible:r&&!i},ie.default.createElement(f1,null,ie.default.createElement(m1,null,ie.default.createElement("button",{type:"button",onClick:f},ie.default.createElement(h1,null,u.speed),ie.default.createElement(y1,null,x,ie.default.createElement(Er,{width:20,height:20})))))),ie.default.createElement(b1,{$visible:i},ie.default.createElement(S1,{onClick:m},ie.default.createElement(Uo,{width:16,height:16}),u.speed),ie.default.createElement(v1,{$show:l},ie.default.createElement(x1,null,wh.map(v=>ie.default.createElement(w1,{key:v,$selected:e===v},ie.default.createElement("button",{type:"button",onClick:()=>y(v)},v===1?u.normal:`${v}`)))))))};k1.propTypes={playbackRate:Fa.default.number.isRequired,changePlaybackRate:Fa.default.func.isRequired};var P1=ie.default.memo(k1);var T1=(e,t,o)=>{var i;let n=("changedTouches"in e&&((i=e.changedTouches)==null?void 0:i.length)>=1?e.changedTouches[0].pageX:e.clientX||0)-t.left;return n<=0?0:n>=t.width?o:Math.round(o*n/t.width)};var L1=d.div`
  ${xr}
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
`,E1=d.div`
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
`,M1=d.span`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
`,I1=d.span`
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: #fff;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
`,A1=d.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 0;
  position: relative;
`,_a=d.div`
  overflow: hidden;
  max-width: ${({$visible:e})=>e?"36px":"0"};
  opacity: ${({$visible:e})=>e?1:0};
  transition:
    max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s ease;
`,O1=d.div`
  grid-area: 1 / 1;
  display: flex;
  align-items: center;
  opacity: ${({$visible:e})=>e?1:0};
  pointer-events: ${({$visible:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease ${({$visible:e})=>e?"0.3s":"0s"};
  overflow: hidden;
  padding-left: 4px;
`,R1=d.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`,D1=d.span`
  color: rgba(255, 255, 255, 0.6);
`,B1=d.div`
  flex: 1;
  min-width: 0;
  display: grid;
  align-items: center;
  margin-left: 6px;
`,N1=d.div`
  grid-area: 1 / 1;
  min-width: 0;
  clip-path: ${({$visible:e})=>e?"inset(0 0 0 0)":"inset(0 100% 0 0)"};
  pointer-events: ${({$visible:e})=>e?"auto":"none"};
  transition: clip-path 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`,q1=d.button`
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
`,Va=d.button`
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
`,F1=d.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  height: 28px;
  padding: 0 4px;
`,$a=d.div`
  position: relative;
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`,_1=d.div`
  position: relative;
  width: 100%;
  height: 4px;
  display: flex;
  align-items: center;
  gap: 2px;
  transition: height 0.1s ease;

  ${$a}:hover & {
    height: 6px;
  }
`,V1=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
`,$1=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
  border-radius: 4px;
`,H1=d.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: transform 0.1s ease;
  transform-origin: center center;
  transform: ${({$hovered:e})=>e?"scaleY(1.5)":"scaleY(1)"};
`,z1=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
`,j1=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
`,U1=d.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
`,Ha=d.div`
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
`,W1=d.span`
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  min-width: 48px;
  text-align: right;
  flex-shrink: 0;
  margin-right: 8px;
`,Y1=d.div`
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
`,X1=d.button`
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
`,za=d.div`
  display: flex;
  align-items: center;
  gap: 0;
  position: relative;
`,Q1=d.div`
  overflow: hidden;
  max-width: ${({$dragging:e})=>e?"80px":"0"};
  opacity: ${({$dragging:e})=>e?1:0};
  transition:
    max-width 0.25s ease,
    opacity 0.25s ease;
  display: flex;
  justify-content: flex-end;

  ${za}:hover & {
    max-width: 80px;
    opacity: 1;
  }
`,G1=d.div`
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
`,K1=d.div`
  position: absolute;
  top: 50%;
  right: 6px;
  height: 4px;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 2px;
  pointer-events: none;
`,Z1=d.div`
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  transform: translate(50%, -50%);
  pointer-events: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
`,J1=d.div`
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
`,Hx=d.div`
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
`,zx=d.button`
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
`,jx=d.span`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  padding: 4px 16px 2px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;var ja=O.default.forwardRef(({videoRef:e,playerRef:t,hasResource:o=!1,loading:r,paused:n,ended:i,seeking:s,waiting:l,duration:a,buffered:u=null,currentTime:p,muted:c,volume:f,playbackRate:m,loop:y,poster:x,title:v,artist:w,chapters:S,onPlayClick:b,onPauseClick:M,onTogglePlay:L,changeVolume:k,onMutedClick:I,changeCurrentTime:q,changePlaybackRate:E,onSeeking:C,onPrevious:N,onNext:g,showNavButtons:P,kernelMsg:D=null},j)=>{let z=he(),{i18n:Y}=V(),ue=O.default.useRef(null),{segments:A,getChapterAtTime:R}=vo({chapters:S,duration:a}),ne=O.default.useMemo(()=>{let Q=R(p);return Q?Q.title:null},[R,p]);O.default.useEffect(()=>{z({videoRef:e,playerRef:t})},[e,t,z]),O.default.useImperativeHandle(j,()=>({showControls:()=>{},hideControls:()=>{}}),[]);let H=O.default.useCallback(Q=>{if(!ue.current||!a)return;let se=ue.current.getBoundingClientRect(),ye=Math.max(0,Math.min(1,(Q.clientX-se.left)/se.width));q(ye*a)},[a,q]),pe=O.default.useCallback(Q=>{if(!a)return;C==null||C(!0),H(Q);let se=$e=>H($e),ye=()=>{C==null||C(!1),document.removeEventListener("mousemove",se),document.removeEventListener("mouseup",ye)};document.addEventListener("mousemove",se),document.addEventListener("mouseup",ye)},[a,H,C]),[de,xe]=O.default.useState(!1),[be,Fe]=O.default.useState(0),[_e,Ve]=O.default.useState(null),[pt,it]=O.default.useState(0),Ie=O.default.useRef(null),xt=O.default.useRef(null),so=O.default.useCallback(Q=>{var Xa;if(!ue.current||!a)return;let se=ue.current.getBoundingClientRect(),ye=T1(Q,se,a),$e=Ie.current,He=$e?$e.getBoundingClientRect():se,Bt=(((Xa=xt.current)==null?void 0:Xa.offsetWidth)||0)/2,as=Q.clientX-He.left,lm=se.left-He.left,um=se.right-He.left,cm=lm+Bt,pm=um-Bt,dm=Math.max(cm,Math.min(pm,as));Fe(ye),it(dm),xe(!0);let Ya=R(ye);Ve(Ya?Ya.title:null)},[a,R]),Ut=O.default.useCallback(()=>{xe(!1)},[]),Dt=O.default.useMemo(()=>{if(!de||A.length===0)return-1;let Q=R(be);return Q?A.findIndex(se=>se.startTime===Q.startTime):-1},[de,be,A,R]),Wt=O.default.useCallback(()=>{if(!a)return;let Q=Math.max(0,p-10);q(Q)},[p,a,q]),dt=O.default.useCallback(()=>{if(!a)return;let Q=Math.min(a,p+10);q(Q)},[p,a,q]),Ct=O.default.useRef(null),ft=O.default.useRef(null),[ao,wo]=O.default.useState(!1),[Go,qr]=O.default.useState(null),lo=O.default.useCallback(Q=>{let se=ft.current;if(!se)return;let ye=se.getBoundingClientRect(),$e=Math.max(0,Math.min(ye.width,Q-ye.left));qr($e)},[]),uo=O.default.useCallback(Q=>{let se=Q.currentTarget||Ct.current;if(!se)return;let ye=se.getBoundingClientRect(),$e=ye.width-12,He=Q.clientX-ye.left-6,co=Math.max(0,Math.min(1,1-He/$e));k(co)},[k]),[st,ko]=O.default.useState(!1),Fr=O.default.useCallback(Q=>{Ct.current=Q.currentTarget,uo(Q),ko(!0),lo(Q.clientX);let se=$e=>{let He=Ct.current.getBoundingClientRect(),co=He.width-12,Bt=$e.clientX-He.left-6,as=Math.max(0,Math.min(1,1-Bt/co));k(as),lo($e.clientX)},ye=()=>{ko(!1),document.removeEventListener("mousemove",se),document.removeEventListener("mouseup",ye)};document.addEventListener("mousemove",se),document.addEventListener("mouseup",ye)},[uo,k,lo]),Ko=O.default.useCallback(()=>{wo(!0)},[]),Yt=O.default.useCallback(()=>{st||wo(!1)},[st]);O.default.useEffect(()=>{st||wo(!1)},[st]);let mt=!n&&!i,Ae=Te(),wt=a>0?p/a*100:0,_r=u!=null?u*100:0,Rn=a>0?Math.max(0,a-p):0,ss=a>0&&Rn>0?`-${Oe(Rn)}`:"0:00";return O.default.createElement(L1,{ref:Ie},de&&O.default.createElement(E1,{ref:xt,style:{left:`${pt}px`}},_e&&O.default.createElement(M1,null,_e),O.default.createElement(I1,null,Oe(be))),O.default.createElement(A1,null,O.default.createElement(ge,{label:Y.skipBack},O.default.createElement(_a,{$visible:mt},O.default.createElement(Va,{onClick:Wt,"aria-label":Y.skipBack},O.default.createElement(a1,{...Ae})))),O.default.createElement(ge,{label:i?Y.replay:n?Y.play:Y.pause},O.default.createElement(q1,{onClick:n||i?b:M,"aria-label":i?Y.replay:n?Y.play:Y.pause},i?O.default.createElement(s1,{...Ae}):n?O.default.createElement(o1,{...Ae}):O.default.createElement(n1,{...Ae}))),O.default.createElement(ge,{label:Y.skipForward},O.default.createElement(_a,{$visible:mt},O.default.createElement(Va,{onClick:dt,"aria-label":Y.skipForward},O.default.createElement(l1,{...Ae})))),O.default.createElement(B1,null,O.default.createElement(O1,{$visible:!mt},O.default.createElement(R1,null,O.default.createElement(D1,null,i?"Replay: ":"Play: "),v||"",ne&&` \u2022 ${ne}`)),O.default.createElement(N1,{$visible:mt},O.default.createElement(F1,null,O.default.createElement($a,{ref:ue,onMouseDown:pe,onMouseMove:so,onMouseLeave:Ut},O.default.createElement(_1,null,A.length>0?A.map((Q,se)=>{let ye=Q.endTime-Q.startTime,$e=ye/a*100,He=0;p>=Q.endTime?He=100:p>Q.startTime&&(He=(p-Q.startTime)/ye*100);let co=u!=null?u*a:0,Bt=0;return co>=Q.endTime?Bt=100:co>Q.startTime&&(Bt=(co-Q.startTime)/ye*100),O.default.createElement(H1,{key:Q.startTime,style:{width:`${$e}%`},$hovered:Dt===se},O.default.createElement(j1,{style:{width:`${Bt}%`}}),O.default.createElement(z1,{style:{width:`${He}%`}}),l&&Bt<100&&O.default.createElement(Ha,{style:{clipPath:`inset(0 0 0 ${Math.max(Bt,He)}%)`}}))}):O.default.createElement(U1,null,O.default.createElement(V1,{style:{width:`${_r}%`}}),O.default.createElement($1,{style:{width:`${wt}%`}}),l&&_r<100&&O.default.createElement(Ha,{style:{clipPath:`inset(0 0 0 ${Math.max(_r,wt)}%)`}}))))))),O.default.createElement(W1,null,ss),O.default.createElement(Y1,null,O.default.createElement(za,{ref:ft},O.default.createElement(Q1,{$dragging:st,onMouseEnter:Ko,onMouseLeave:Yt},O.default.createElement(G1,{onMouseDown:Fr,role:"slider","aria-label":"Volume","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":c?0:Math.round(f*100)},O.default.createElement(K1,{style:{width:`${c?0:f*68}px`}}),O.default.createElement(Z1,{style:{right:`${6+(c?0:f*68)}px`}}))),(ao||st)&&O.default.createElement(J1,{style:Go!=null&&st?{left:`${Go}px`,transform:"translateX(-50%)"}:{left:`${6+68*(1-(c?0:f))}px`,transform:"translateX(-50%)"}},c?0:Math.round(f*100),"%"),O.default.createElement(ge,{label:c?Y.unmute:Y.mute,disabled:st},O.default.createElement(X1,{onClick:I,"aria-label":c?Y.unmute:Y.mute},c||f===0?O.default.createElement(yr,{...Ae}):O.default.createElement(Li,{...Ae})))),O.default.createElement(P1,{playbackRate:m,changePlaybackRate:E}))))});ja.displayName="AudioPlayerSkin";ja.propTypes={videoRef:X.default.oneOfType([X.default.func,X.default.shape({current:X.default.any})]).isRequired,playerRef:X.default.oneOfType([X.default.func,X.default.shape({current:X.default.any})]).isRequired,hasResource:X.default.bool,loading:X.default.bool,paused:X.default.bool.isRequired,ended:X.default.bool.isRequired,seeking:X.default.bool,waiting:X.default.bool,duration:X.default.number.isRequired,buffered:X.default.number,currentTime:X.default.number.isRequired,muted:X.default.bool.isRequired,volume:X.default.number.isRequired,playbackRate:X.default.number,loop:X.default.bool,poster:X.default.string,title:X.default.string,artist:X.default.string,chapters:X.default.arrayOf(X.default.shape({title:X.default.string.isRequired,startTime:X.default.number.isRequired})),onPlayClick:X.default.func.isRequired,onPauseClick:X.default.func.isRequired,onTogglePlay:X.default.func,changeVolume:X.default.func.isRequired,onMutedClick:X.default.func.isRequired,changeCurrentTime:X.default.func.isRequired,changePlaybackRate:X.default.func.isRequired,onSeeking:X.default.func,kernelMsg:X.default.any,onPrevious:X.default.func,onNext:X.default.func,showNavButtons:X.default.bool};var em=O.default.memo(ja,(e,t)=>e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.hasResource===t.hasResource&&e.loading===t.loading&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.poster===t.poster&&e.title===t.title&&e.artist===t.artist&&e.chapters===t.chapters&&e.kernelMsg===t.kernelMsg&&e.onPlayClick===t.onPlayClick&&e.onPauseClick===t.onPauseClick&&e.onTogglePlay===t.onTogglePlay&&e.changeVolume===t.changeVolume&&e.onMutedClick===t.onMutedClick&&e.changeCurrentTime===t.changeCurrentTime&&e.changePlaybackRate===t.changePlaybackRate&&e.onSeeking===t.onSeeking&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);var Ua=h(T());var tm=d.div`
  position: relative;
  width: 100%;
  outline: none;
  overflow: visible;

  ${Ci}
`;var om=Ua.default.forwardRef(({children:e,...t},o)=>Ua.default.createElement(tm,{ref:o,...t},e));om.displayName="AudioPlayerWrapper";var rm=om;var nm=ke.default.forwardRef((e,t)=>{var M;let[o,r]=ke.default.useState({...jt,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(M=e.volume)!=null?M:jt.volume}),[n,i]=ke.default.useState({playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume});(e.playbackRate!==n.playbackRate||e.loop!==n.loop||e.playing!==n.playing||e.muted!==n.muted||e.volume!==n.volume)&&(i({playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume}),r(L=>{var I,q;let k={...L};return e.playbackRate!==n.playbackRate&&(k.playbackRate=e.playbackRate),e.loop!==n.loop&&(k.loop=e.loop),e.playing!==n.playing&&(k.playing=e.playing),e.muted!==n.muted&&(k.isMuted=e.muted,k.volume=e.muted?0:(I=e.volume)!=null?I:jt.volume),e.volume!==n.volume&&!e.muted&&(k.volume=(q=e.volume)!=null?q:jt.volume),k}));let s=ke.default.useRef(null),l=ke.default.useRef(null),a=ke.default.useRef(e.url);ke.default.useEffect(()=>{a.current!==e.url&&(a.current=e.url,r(L=>({...L,isLoading:!0,isBuffering:!1,duration:0,played:0,loaded:0,isEnded:!1,kernelError:null,seeking:!1})))},[e.url]);let{videoUrl:u,...p}=rs({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDuration:e.onDuration,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:r,playerState:o,extraProps:{url:e.url,sources:[],prevented:!1}}),c=ke.default.useMemo(()=>({attributes:e.config.attributes,tracks:e.config.tracks,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS}),[e.config]),{onMutedClick:f,changeVolume:m}=os({prevented:!1,muted:o.isMuted,videoRef:l,src:u,updateState:({muted:L,volume:k})=>r(I=>({...I,isMuted:L!=null?L:!1,volume:k!=null?k:0}))});ke.default.useEffect(()=>{var L;e.player&&(l.current=(L=e.player.getPlayer())!=null?L:null)},[e.player]);let y=ke.default.useCallback(()=>{r(L=>({...L,playing:!0}))},[]),x=ke.default.useCallback(()=>{r(L=>({...L,playing:!1}))},[]),v=ke.default.useCallback(()=>{r(L=>({...L,playing:!L.playing}))},[]),w=ke.default.useCallback(L=>{e.player&&(r(k=>({...k,played:L})),e.player.seekTo(L))},[e.player]),S=ke.default.useCallback(L=>{r(k=>({...k,seeking:L}))},[]),b=ke.default.useCallback(L=>{r(k=>({...k,playbackRate:L}))},[]);return ke.default.createElement(ts,{language:e.language},ke.default.createElement(rm,{ref:s,tabIndex:0,role:"application",dir:"ltr"},u&&ke.default.createElement(yt,{ref:t,activePlayer:e.activePlayer,loop:o.loop,muted:o.isMuted,playbackRate:o.playbackRate,playsinline:e.playsinline,progressInterval:e.progressInterval,stopOnUnmount:e.stopOnUnmount,volume:o.volume,url:u,width:"0",height:"0",playing:o.playing,viewType:"audio",config:c,...p}),ke.default.createElement(em,{videoRef:l,playerRef:s,hasResource:typeof u=="string",hasAudio:!0,loading:o.isLoading,paused:o.playing===!1,ended:o.isEnded,seeking:o.seeking,waiting:o.isBuffering||e.waiting,duration:o.duration,buffered:o.loaded,currentTime:o.played,muted:o.isMuted,volume:o.volume,playbackRate:o.playbackRate,loop:o.loop,poster:e.poster,title:e.title,artist:e.artist,chapters:e.chapters,onPlayClick:y,onPauseClick:x,onTogglePlay:v,changeVolume:m,onMutedClick:f,changeCurrentTime:w,changePlaybackRate:b,onSeeking:S,onPrevious:e.onPrevious,onNext:e.onNext,showNavButtons:e.showNavButtons})))});nm.displayName="AudioMediaPlayerSkin";var im=ke.default.memo(nm,(e,t)=>e.url===t.url&&e.playing===t.playing&&e.loop===t.loop&&e.volume===t.volume&&e.muted===t.muted&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.stopOnUnmount===t.stopOnUnmount&&e.activePlayer===t.activePlayer&&e.player===t.player&&e.waiting===t.waiting&&e.language===t.language&&e.poster===t.poster&&e.title===t.title&&e.artist===t.artist&&e.config===t.config&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onProgress===t.onProgress&&e.onLoaded===t.onLoaded&&e.onMount===t.onMount&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);Nt();Ne();var kh=typeof window!="undefined"&&window.document&&typeof document!="undefined",Ph=typeof global!="undefined"&&global.window&&global.window.document,Th=Object.keys(Cs),Lh=kh||Ph?Qo.default.Suspense:()=>null,am=e=>{var t;return t=class extends Qo.default.Component{constructor(){super(...arguments);B(this,"player",null);B(this,"state",{});B(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{n&&n!==this.player&&(this.player=n,this.forceUpdate())}});B(this,"getDuration",()=>this.player?this.player.getDuration():null);B(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null);B(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null);B(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null);B(this,"seekTo",(n,i,s)=>{if(!this.player)return null;this.player.seekTo(n,i,s)});B(this,"handleReady",()=>{this.props.onReady&&this.props.onReady(this)});B(this,"getActivePlayer",Wr((n,i)=>e.canPlay(n,i)?e:null));B(this,"getConfig",Wr((n,i,s)=>{let{config:l}=this.props;return sm.default.all([Wn.config,Wn.config[s]||{},l,l[s]||{}])}));B(this,"getAttributes",Wr(()=>vl(this.props,Th)));B(this,"getPlayerConfig",Wr(n=>{let i=(this.props.captions||[]).map(l=>({kind:l.kind||"subtitles",src:l.src,srcLang:l.language,label:l.label})),s=[...n.tracks||[],...i];return{attributes:n.attributes,tracks:s,forceVideo:n.forceVideo,forceHLS:n.forceHLS,dashVersion:n.dashVersion,forceDASH:n.forceDASH,forceFLV:n.forceFLV,flvVersion:n.flvVersion,forceLoad:n.forceLoad,forceDisableHls:n.forceDisableHls,hlsOptions:n.hlsOptions,hlsVersion:n.hlsVersion,forceSafariHLS:n.forceSafariHLS,loopOnEnded:n.loopOnEnded}}));B(this,"getSourceProps",()=>"sources"in this.props&&this.props.sources!==void 0?{sources:this.props.sources,fullHDQualityBreak:this.props.fullHDQualityBreak}:{sources:[]});B(this,"getUrlProp",()=>"url"in this.props&&this.props.url!==void 0?this.props.url:"");B(this,"getEffectiveViewType",()=>{if(this.props.viewType==="audio")return"audio";let n=this.getUrlProp();return n&&cs(n)?"audio":"video"});B(this,"renderActivePlayer",(n,i)=>{if(!n&&!i)return null;let s=this.getActivePlayer(n,i);if(!s)return null;let l=this.getConfig(n,i,s.key),a=this.getPlayerConfig(l),u=this.getSourceProps(),p=this.getUrlProp();return this.getEffectiveViewType()==="audio"?Qo.default.createElement(im,{key:`${s.key}-audio`,ref:this.references.player,activePlayer:s.lazyPlayer,player:this.player,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,muted:this.props.muted,loop:this.props.loop,url:p,width:this.props.width,playing:this.props.playing,waiting:this.props.waiting,config:a,language:this.props.language,poster:this.props.poster,title:this.props.title,artist:this.props.artist,chapters:this.props.chapters,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDuration:this.props.onDuration,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackRateChange:this.props.onPlayBackRateChange,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,onPrevious:this.props.onPrevious,onNext:this.props.onNext,showNavButtons:this.props.showNavButtons}):Qo.default.createElement(e1,{key:s.key,ref:this.references.player,activePlayer:s.lazyPlayer,player:this.player,loop:this.props.loop,muted:this.props.muted,pip:this.props.pip,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,url:p,sources:u.sources,width:this.props.width,height:this.props.height,playing:this.props.playing,config:a,prevented:this.props.prevented,waiting:this.props.waiting,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onDuration:this.props.onDuration,onEnablePIP:this.props.onEnablePIP,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackQualityChange:this.props.onPlayBackQualityChange,onPlayBackRateChange:this.props.onPlayBackRateChange,onPrevious:this.props.onPrevious,onNext:this.props.onNext,showNavButtons:this.props.showNavButtons,fullHDQualityBreak:u.fullHDQualityBreak,language:this.props.language,live:this.props.live,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,disableDeferredLoading:this.props.disableDeferredLoading,progressFrequency:this.props.progressFrequency,spriteVTTFile:this.props.spriteVTTFile,chapters:this.props.chapters,captions:this.props.captions,heatmapData:this.props.heatmapData,poster:this.props.poster,skinMode:this.props.skinMode})})}shouldComponentUpdate(n,i){return!(0,Wa.default)(this.props,n)||!(0,Wa.default)(this.state,i)}componentDidUpdate(){}render(){let{wrapper:n}=this.props,i=this.getUrlProp(),s=this.getSourceProps(),{className:l,...a}=this.getAttributes(),u=typeof n=="string"?this.references.wrapper:void 0;return Qo.default.createElement(n,{ref:u,"data-testid":"media-player-skin",className:`playerstack${l?` ${l}`:""}`,...a},Qo.default.createElement(Lh,{fallback:this.props.fallback},this.renderActivePlayer(i,s.sources)))}},B(t,"displayName","MediaPlayer"),B(t,"propTypes",Cs),B(t,"defaultProps",Wn),B(t,"canPlay",(n,i)=>!!e.canPlay(n,i)),B(t,"canEnablePIP",n=>!!(e.canEnablePIP&&e.canEnablePIP(n))),t};var Eh=am(kl);return Sm(Mh);})();
PlayerStack=PlayerStack.default
//# sourceMappingURL=PlayerStack.js.map
