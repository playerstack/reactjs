var Zi=Object.create;var He=Object.defineProperty;var ea=Object.getOwnPropertyDescriptor;var ta=Object.getOwnPropertyNames;var na=Object.getPrototypeOf,ra=Object.prototype.hasOwnProperty;var ia=(e,t,n)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var z=(e,t)=>()=>(e&&(t=e(e=0)),t);var xe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),aa=(e,t)=>{for(var n in t)He(e,n,{get:t[n],enumerable:!0})},sa=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ta(t))!ra.call(e,i)&&i!==n&&He(e,i,{get:()=>t[i],enumerable:!(r=ea(t,i))||r.enumerable});return e};var he=(e,t,n)=>(n=e!=null?Zi(na(e)):{},sa(t||!e||!e.__esModule?He(n,"default",{value:e,enumerable:!0}):n,e));var Y=(e,t,n)=>(ia(e,typeof t!="symbol"?t+"":t,n),n);var oa,la,c,ut=z(()=>{"use strict";oa=Object.defineProperty,la=(e,t,n)=>t in e?oa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t,n)=>(la(e,typeof t!="symbol"?t+"":t,n),n)});var me,Ae=z(()=>{"use strict";ut();me=class{constructor(){c(this,"listeners",new Map)}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),this}off(e,t){var n;return(n=this.listeners.get(e))==null||n.delete(t),this}once(e,t){let n=(...r)=>{this.off(e,n),t(...r)};return this.on(e,n)}emit(e,...t){var n;(n=this.listeners.get(e))==null||n.forEach(r=>{try{r(...t)}catch(i){console.error(`[PlayerStack] Error in "${String(e)}" handler:`,i)}})}removeAllListeners(e){return e?this.listeners.delete(e):this.listeners.clear(),this}}});function vn(e,t){if(t)return"";let n=Math.abs(Math.round(e)),r=Math.floor(n/3600),i=Math.floor(n%3600/60),a=n%60,s=o=>o.toString().padStart(2,"0");return r>0?`-${r}:${s(i)}:${s(a)}`:`-${i}:${s(a)}`}var kn=z(()=>{"use strict"});function ua(){if(ct)return;if(typeof window=="undefined"||typeof navigator=="undefined"){ct=!0;return}let e=window.navigator.userAgent.toLowerCase(),t="ontouchstart"in window||navigator.maxTouchPoints>0,n=/iphone|ipod|android.*mobile|windows phone|blackberry/.test(e),r=/ipad|android(?!.*mobile)|silk|kindle|tablet/.test(e),i=!t&&/mac|windows|linux|cros/.test(e);n||r?(Sn=!1,dt=!0):(Sn=i,dt=!i),ct=!0}var Sn,dt,ct,pt,xn=z(()=>{"use strict";Sn=!1,dt=!1,ct=!1;ua();pt=dt});function Pn(e){if(typeof document=="undefined")return null;let t=`${En}${e}=`,n=document.cookie.split(";");for(let r=0;r<n.length;r++){let i=n[r];for(;i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(t)===0)try{return decodeURIComponent(i.substring(t.length,i.length))}catch{return i.substring(t.length,i.length)}}return null}function wn(e,t,n){if(typeof document=="undefined")return;let r="";if(n){let i=new Date;i.setTime(i.getTime()+n*24*60*60*1e3),r=`; expires=${i.toUTCString()}`}document.cookie=`${En}${e}=${encodeURIComponent(t||"")}${r}; path=/`}var En,Cn=z(()=>{"use strict";En="rmp_"});async function ht(){let e="https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js";try{let n=Pn("internet_speed");if(n){let m=parseFloat(n);if(!isNaN(m)&&m>0)return m}let r=new AbortController,i=setTimeout(()=>r.abort(),1e4),a=performance.now(),o=await(await fetch(e,{signal:r.signal,cache:"no-store"})).blob();clearTimeout(i);let l=performance.now(),h=o.size*8||1638400,f=(l-a)/1e3,E=h/(f*1024*1024);return wn("internet_speed",E.toString(),7),E}catch(n){return n.name!=="AbortError"&&console.error("An error occurred while measuring the network speed: ",n),null}}function ft(e,t){let n;for(let r=ge.length-1;r>=0;r--){let i=ge[r];if(e>=i.minSpeed){n=i.quality;break}}if(n&&t.includes(n))return n;if(n)for(let r=ge.length-1;r>=0;r--){let i=ge[r];if(i.quality<=n&&t.includes(i.quality))return i.quality}for(let r=0;r<ge.length;r++){let i=ge[r];if(t.includes(i.quality))return i.quality}return t.length>0?t[0]:void 0}var ge,_n=z(()=>{"use strict";Cn();ge=[{quality:144,minSpeed:.3},{quality:270,minSpeed:.5},{quality:360,minSpeed:.7},{quality:480,minSpeed:1},{quality:720,minSpeed:2.5},{quality:1080,minSpeed:5},{quality:2160,minSpeed:20}]});function mt(e){return function t(n,r){try{if(!n||!r)throw new Error("Reducer params has not been provided!");if(typeof r=="function"){let i=r(n);return!i||typeof i!="object"?n:t(n,i)}if("type"in r){let{type:i,payload:a}=r;if(e.includes(i)===!1)throw new Error(`Invalid type "${i}" in action payload!`);return n[i]===a?n:{...n,[i]:a}}else if(typeof r=="object"){if(Object.keys(r).length===0)throw new Error("Reducer action object is empty!");let i=!1,a={...n};for(let s in r){let o=r[s];if(e.includes(s)===!1)throw new Error(`Invalid type "${s}" in action object!`);n[s]!==o&&(i=!0,a={...a,[s]:o})}return i?a:n}return n}catch(i){return console.error("Error in AppReducer: ",i),n}}}var Tn=z(()=>{"use strict"});function Rn(e,t,n,r){if(!n.width||!n.height)return null;for(let i of e)if(t>=i.from&&t<=i.to){let a=i.w,s=i.h;if(!a||!s)return null;let o=r[i.file];if(!o)return null;let l=Math.max(n.width/a,n.height/s),h=o.w*l,f=o.h*l,E=-(i.x*l),m=-(i.y*l),b=(n.width-a*l)/2,v=(n.height-s*l)/2;return{file:i.file,scale:l,bgW:h,bgH:f,bgPosX:E,bgPosY:m,offsetX:b,offsetY:v}}return null}var An=z(()=>{"use strict"});var Ln,Dn=z(()=>{"use strict";Ae();Ln=class extends me{constructor(){super(...arguments),this._ads=null,this._adStarted=!1,this._adCompleted=!1,this._destroyed=!1,this._skippableEmitted=!1}configure(e){this._destroyed||(this._ads=e,this._adStarted=!1,this._adCompleted=!1,this._skippableEmitted=!1)}notifyPlay(){this._destroyed||this._ads&&!this._adStarted&&(this._adStarted=!0,this.emit("adActivated"))}update(e,t,n){if(!this._ads||!this._adStarted||this._destroyed)return;let r=this._ads.skipAfter,i=typeof r=="number"&&r>0,a=i&&e>=r,s=i?Math.max(0,Math.ceil(r-e)):0,o=0;i?o=Math.min(1,e/r):t>0&&(o=e/t),this.emit("adProgress",{progress:o,canSkip:a,skipCountdown:s}),this.emit("stateChange",{isAdActive:!0,hasSkipTimer:i,canSkip:a,skipCountdown:s,adProgress:o}),a&&!this._skippableEmitted&&(this._skippableEmitted=!0,this.emit("adSkippable")),n&&!this._adCompleted&&(this._adCompleted=!0,this.emit("adCompleted"),this._ads.onAdComplete&&this._ads.onAdComplete())}onSkip(){var e;this._destroyed||(e=this._ads)!=null&&e.onSkip&&this._ads.onSkip()}onAdClick(){var e;this._destroyed||(e=this._ads)!=null&&e.onAdClick&&this._ads.onAdClick()}get isAdActive(){return this._adStarted&&this._ads!==null}get state(){return{isAdActive:this.isAdActive,hasSkipTimer:this.isAdActive&&typeof this._ads.skipAfter=="number"&&this._ads.skipAfter>0,canSkip:!1,skipCountdown:0,adProgress:0}}destroy(){this._destroyed||(this._destroyed=!0,this.removeAllListeners())}}});var ca,da,pa,gt,On=z(()=>{"use strict";Ae();ca=10,da=300,pa=1e3,gt=class extends me{constructor(e={}){var t,n,r;super(),this._state={direction:null,visible:!1,seconds:0},this._tapCountLeft=0,this._tapCountRight=0,this._tapTimerLeft=null,this._tapTimerRight=null,this._hideTimer=null,this._destroyed=!1,this._currentTime=0,this._duration=0,this._onSeek=null,this._skipSeconds=(t=e.skipSeconds)!=null?t:ca,this._doubleTapDelay=(n=e.doubleTapDelay)!=null?n:da,this._displayDuration=(r=e.displayDuration)!=null?r:pa}get state(){return this._state}setTimeInfo(e,t){this._currentTime=e,this._duration=t}setOnSeek(e){this._onSeek=e}handleTapLeft(){this._destroyed||(this._tapCountLeft++,this._tapCountLeft===1?this._tapTimerLeft=setTimeout(()=>{this._tapCountLeft=0,this.emit("singleTap","left")},this._doubleTapDelay):(this._tapTimerLeft&&clearTimeout(this._tapTimerLeft),this._tapCountLeft=0,this._doSkip("backward")))}handleTapRight(){this._destroyed||(this._tapCountRight++,this._tapCountRight===1?this._tapTimerRight=setTimeout(()=>{this._tapCountRight=0,this.emit("singleTap","right")},this._doubleTapDelay):(this._tapTimerRight&&clearTimeout(this._tapTimerRight),this._tapCountRight=0,this._doSkip("forward")))}destroy(){this._destroyed||(this._destroyed=!0,this._tapTimerLeft&&clearTimeout(this._tapTimerLeft),this._tapTimerRight&&clearTimeout(this._tapTimerRight),this._hideTimer&&clearTimeout(this._hideTimer),this.removeAllListeners())}_doSkip(e){if(isNaN(this._duration)||this._duration<=0)return;let t=e==="forward"?this._skipSeconds:-this._skipSeconds,n=Math.max(0,Math.min(this._duration,this._currentTime+t));this._onSeek&&this._onSeek(n);let r=this._state.direction===e&&this._state.visible?this._state.seconds+this._skipSeconds:this._skipSeconds;this._state={direction:e,visible:!0,seconds:r},this.emit("skip",this._state),this._hideTimer&&clearTimeout(this._hideTimer),this._hideTimer=setTimeout(()=>{this._state={direction:null,visible:!1,seconds:0},this.emit("skip",this._state),this._hideTimer=null},this._displayDuration)}}});function le(e){let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(i).padStart(2,"0")}`:`${String(r).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function bt(e,t){return e.reduce((n,r)=>{let i=String(r[t]);return n[i]=r,n},{})}function yt(e,...t){let n=[];for(let a of t)Array.isArray(a)?n.push(...a):n.push(a);let r={},i=Object.keys(e);for(let a of i)n.indexOf(a)===-1&&(r[a]=e[a]);return r}var vt=z(()=>{"use strict"});function qn(e){let t=e.trim().split(":");if(t.length===3){let[n,r,i]=t;return parseFloat(n)*3600+parseFloat(r)*60+parseFloat(i)}if(t.length===2){let[n,r]=t;return parseFloat(n)*60+parseFloat(r)}return 0}function In(e){let t=[],n=e.split(`
`),r=0;for(;r<n.length;){let i=n[r].trim();if(i.includes(" --> ")){let[a,s]=i.split(" --> "),o=qn(a),l=qn(s.split(" ")[0]),h=[];for(r++;r<n.length&&n[r].trim()!=="";)h.push(n[r].trim()),r++;h.length>0&&t.push({startTime:o,endTime:l,text:h.join(`
`)})}else r++}return t}function Mn(e,t){return e.filter(n=>t>=n.startTime&&t<=n.endTime)}var Bn=z(()=>{"use strict"});var U,kt,St,xt=z(()=>{"use strict";U={kernelError:null,seeking:!1,seek:0,played:0,loaded:0,bufferedRanges:[],duration:0,isFullScreen:!1,isEnded:!1,isPIP:!1,isLoading:!0,isBuffering:!1,volume:.8,playbackRate:1,playbackQuality:null,videoUrl:null,hasAudio:!0,loop:!1,playing:!1,isMuted:!1,activeCaption:null},kt={kernelError:U.kernelError,seeking:U.seeking,seek:U.seek,played:U.played,loaded:U.loaded,duration:U.duration,isEnded:U.isEnded,isLoading:U.isLoading,isBuffering:U.isBuffering,volume:U.volume,playbackRate:U.playbackRate,hasAudio:U.hasAudio,loop:U.loop,playing:U.playing,isMuted:U.isMuted},St=(e,t)=>({...e,seeking:t,isEnded:!1,playing:t?e.playing:!0})});var be,Le,Et,Pt=z(()=>{"use strict";be={generalMenu:!1,speed:!1,quality:!1,captions:!1},Le=({label:e,value:t,i18n:n})=>e==="quality"?t==="0"?n.auto||"Auto":`${t}p`:e==="speed"&&t==="1"?n.normal||"Normal":t,Et=({qualityOptions:e,captionOptions:t,live:n,adMode:r=!1,i18n:i})=>{let a=[];return!n&&!r&&a.push({label:i.speed||"Speed",value:"speed",options:[{label:"2",value:"2"},{label:"1.5",value:"1.5"},{label:"1.25",value:"1.25"},{label:"Normal",value:"1"},{label:"0.75",value:"0.75"},{label:"0.5",value:"0.5"},{label:"0.25",value:"0.25"}]}),e.length>0&&a.push({label:i.quality||"Quality",value:"quality",options:[...e,{label:i.auto||"Auto",value:"0",isFullHD:!1}]}),t&&t.length>0&&a.push({label:i.captions||"Captions",value:"captions",options:[{label:i.off||"Off",value:"off"},...t]}),a}});var ze,Fn,$e,wt,Ct,_t,Tt,Rt,At,Lt,Ue,je,Ye,Dt,Ot,qt=z(()=>{"use strict";ze=typeof navigator!="undefined",Fn=ze&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,$e=ze&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||Fn)&&!window.MSStream,wt=ze&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,Ct="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",_t="Hls",Tt="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",Rt="dashjs",At="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",Lt="flvjs",Ue="1.5.7",je="4.7.4",Ye="1.6.2",Dt=1e3,Ot={forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:Ue,dashVersion:je,flvVersion:Ye,forceDisableHls:!1}});var Hn=xe((To,Nn)=>{Nn.exports=function(t,n,r){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");typeof n=="function"&&(r=n,n={}),n=n||{},r=r||function(){},a.type=n.type||"text/javascript",a.charset=n.charset||"utf8",a.async="async"in n?!!n.async:!0,a.src=t,n.attrs&&ha(a,n.attrs),n.text&&(a.text=""+n.text);var s="onload"in a?Vn:fa;s(a,r),a.onload||Vn(a,r),i.appendChild(a)};function ha(e,t){for(var n in t)e.setAttribute(n,t[n])}function Vn(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function fa(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}});function It(e){var t,n;return typeof window=="undefined"?null:window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:(n=(t=window.module)==null?void 0:t.exports)!=null&&n[e]?window.module.exports[e]:null}function Ke(e,t,n=null,r=()=>!0,i=zn.default){let a=It(t);return a&&r&&r(a)?Promise.resolve(a):new Promise((s,o)=>{if(ye[e]){ye[e].push({resolve:s,reject:o});return}ye[e]=[{resolve:s,reject:o}];let l=h=>{ye[e].forEach(f=>f.resolve(h)),ye[e]=null};if(n){let h=window[n];window[n]=function(){h&&h(),l(It(t))}}i(e,h=>{h?(ye[e].forEach(f=>f.reject(h)),ye[e]=null):n||l(It(t))})})}var zn,ye,$n=z(()=>{"use strict";zn=he(Hn());ye={}});function We(e){return typeof window!="undefined"&&typeof window.MediaStream!="undefined"&&e instanceof window.MediaStream}function Un(e){return/^blob:/.test(e)}function jn(e){return(e==null?void 0:e.mozHasAudio)||(e==null?void 0:e.webkitAudioDecodedByteCount)>0||(e==null?void 0:e.audioTracks)!==void 0&&e.audioTracks.length>0}function Qe(e){let t=e||document.createElement("video"),n=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&n}var Mt=z(()=>{"use strict"});function Bt(e,t){if(t&&t.length>0)return!0;if(!e)return!1;if(We(e)||Un(e))return!0;let n=e;return Yn.test(n)||Kn.test(n)||Xe.test(n)||Ge.test(n)||Je.test(n)}var Yn,Kn,Xe,Ge,Je,Ft=z(()=>{"use strict";Mt();Yn=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,Kn=/\.(mp3|wav|flac|aac|ogg|m4a|opus|wma)(#t=[,\d+]+)?($|\?)/i,Xe=/\.(m3u8)($|\?)/i,Ge=/\.(mpd)($|\?)/i,Je=/\.(flv)($|\?)/i});var Vt,Wn=z(()=>{"use strict";qt();$n();Ae();Ft();Mt();Vt=class extends me{constructor(e,t={}){super(),this.hls=null,this.dash=null,this.flv=null,this.loadSequence=0,this.listenersAttached=!1,this._destroyed=!1,this._liveEndedEmitted=!1,this._sawInfiniteDuration=!1,this.onPlay=()=>{this.emit("play",{hasAudio:jn(this.el)})},this.onPause=()=>this.emit("pause"),this.onEnded=()=>this.emit("ended"),this.onBuffer=()=>this.emit("buffer"),this.onBufferEnd=()=>this.emit("bufferEnd"),this.onSeeked=()=>this.emit("seek",this.el.currentTime),this.onError=n=>this.emit("error",n),this.onRateChange=()=>this.emit("playbackRateChange",this.el.playbackRate),this.onCanPlay=()=>this.emit("ready"),this.onDurationChange=()=>{this._detectLiveToVOD(),this.emit("durationChange",this.getDuration())},this.onTimeUpdate=()=>this.emit("timeUpdate",this.el.currentTime),this.onVolumeChange=()=>this.emit("volumeChange",this.el.volume,this.el.muted),this.onProgress=()=>this.emit("progress",this.getSecondsLoaded()),this.onEnterPiP=()=>this.emit("enablePiP"),this.onLeavePiP=()=>this.emit("disablePiP"),this.onPresentationModeChange=()=>{let n=this.el;if(Qe(n)){let r=n.webkitPresentationMode;r==="picture-in-picture"?this.emit("enablePiP"):r==="inline"&&this.emit("disablePiP")}},this.el=e,this.config={hlsVersion:Ue,dashVersion:je,flvVersion:Ye,...t},this.attachListeners()}load(e){if(this._destroyed)return;this.destroySDKs(),this.loadSequence++,this._liveEndedEmitted=!1,this._sawInfiniteDuration=!1;let t=this.loadSequence,n=typeof e=="string"?e:"";if(this.shouldUseHLS(n))this.loadHLS(n,t);else if(this.shouldUseDASH(n))this.loadDASH(n,t);else if(this.shouldUseFLV(n))this.loadFLV(n,t);else if(We(e))try{this.el.srcObject=e}catch{this.el.src=URL.createObjectURL(e)}else this.el.src=n,($e||this.config.forceDisableHls)&&this.el.load()}play(){let e=this.el.play();if(e)return e.catch(t=>{(t==null?void 0:t.name)!=="AbortError"&&(t==null?void 0:t.name)!=="NotAllowedError"&&this.emit("error",t)})}pause(){this.el.pause()}stop(){this.el.removeAttribute("src"),this.el.srcObject=null,this.destroySDKs()}seekTo(e,t=!0){this.el.currentTime=e,t||this.pause()}setVolume(e){this.el.volume=Math.max(0,Math.min(1,e))}getVolume(){return this.el.volume}mute(){this.el.muted=!0}unmute(){this.el.muted=!1}isMuted(){return this.el.muted}hasEnded(){return this.el.ended}setPlaybackRate(e){try{this.el.playbackRate=e}catch(t){this.emit("error",t)}}getPlaybackRate(){return this.el.playbackRate}setLoop(e){this.el.loop=e}getDuration(){let{duration:e,seekable:t}=this.el;return e===1/0&&t.length>0?t.end(t.length-1):e||0}getCurrentTime(){return this.el.currentTime}getSecondsLoaded(){let{buffered:e}=this.el;if(e.length===0)return 0;let t=e.end(e.length-1),n=this.getDuration();return n&&t>n?n:t}getBufferedRanges(){let{buffered:e}=this.el,t=[];for(let n=0;n<e.length;n++)t.push({start:e.start(n),end:e.end(n)});return t}enablePiP(){let e=this.el;if(e.requestPictureInPicture&&document.pictureInPictureElement!==e){let t=e.requestPictureInPicture();t!=null&&t.catch&&t.catch(n=>this.emit("error",n))}else Qe(e)&&e.webkitPresentationMode!=="picture-in-picture"&&e.webkitSetPresentationMode("picture-in-picture")}disablePiP(){let e=this.el;document.exitPictureInPicture&&document.pictureInPictureElement===e?document.exitPictureInPicture():Qe(e)&&e.webkitPresentationMode!=="inline"&&e.webkitSetPresentationMode("inline")}getState(){return{playing:!this.el.paused&&!this.el.ended,paused:this.el.paused,ended:this.el.ended,buffering:this.el.readyState<3,duration:this.getDuration(),currentTime:this.getCurrentTime(),volume:this.getVolume(),muted:this.isMuted(),playbackRate:this.getPlaybackRate(),loaded:this.getSecondsLoaded(),loop:this.el.loop,pip:document.pictureInPictureElement===this.el}}getElement(){return this.el}getHlsInstance(){return this.hls}getDashInstance(){return this.dash}destroy(){this._destroyed||(this._destroyed=!0,this.stop(),this.detachListeners(),this.removeAllListeners())}shouldUseHLS(e){return wt&&this.config.forceSafariHLS||this.config.forceHLS?!0:$e||this.config.forceDisableHls?!1:Xe.test(e)}shouldUseDASH(e){return Ge.test(e)||!!this.config.forceDASH}shouldUseFLV(e){return Je.test(e)||!!this.config.forceFLV}loadHLS(e,t){Ke(Ct.replace("VERSION",this.config.hlsVersion),_t).then(n=>{if(t!==this.loadSequence||this._destroyed)return;let r=this.config.live?{maxBufferLength:30,maxMaxBufferLength:60,backBufferLength:30}:{};this.hls=new n({...r,...this.config.hlsOptions||{}}),this.hls.on(n.Events.MANIFEST_PARSED,()=>{this.emit("ready")}),this.hls.on(n.Events.LEVEL_UPDATED,(i,a)=>{!this._liveEndedEmitted&&(a!=null&&a.details)&&a.details.live===!1&&(this._sawInfiniteDuration=!0,this._liveEndedEmitted=!0,this.emit("liveEnded"))}),this.hls.on(n.Events.ERROR,(i,a)=>{this.emit("error",i,a,this.hls,n)}),this.hls.loadSource(e),this.hls.attachMedia(this.el),this.emit("loaded")}).catch(n=>this.emit("error",n))}loadDASH(e,t){Ke(Tt.replace("VERSION",this.config.dashVersion),Rt).then(n=>{t!==this.loadSequence||this._destroyed||(this.dash=n.MediaPlayer().create(),this.dash.initialize(this.el,e,!1),this.dash.on("error",r=>{this.emit("error",r,null,this.dash,n)}),parseInt(this.config.dashVersion)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:n.LogLevel.LOG_LEVEL_NONE},streaming:{buffer:{fastSwitchEnabled:!0,stableBufferTime:12,bufferTimeAtTopQuality:20,initialBufferLevel:NaN},abr:{autoSwitchBitrate:{video:!0,audio:!0}}}}),this.emit("loaded"))}).catch(n=>this.emit("error",n))}loadFLV(e,t){Ke(At.replace("VERSION",this.config.flvVersion),Lt).then(n=>{t!==this.loadSequence||this._destroyed||(this.flv=n.createPlayer({type:"flv",url:e}),this.flv.attachMediaElement(this.el),this.flv.on(n.Events.ERROR,(r,i)=>{this.emit("error",r,i,this.flv,n)}),this.flv.load(),this.emit("loaded"))}).catch(n=>this.emit("error",n))}destroySDKs(){this.hls&&(this.hls.destroy(),this.hls=null),this.dash&&(this.dash.reset(),this.dash=null),this.flv&&(this.flv.unload(),this.flv.detachMediaElement(),this.flv.destroy(),this.flv=null)}_detectLiveToVOD(){if(this._liveEndedEmitted)return;let e=this.el.duration;if(e===1/0){this._sawInfiniteDuration=!0;return}this._sawInfiniteDuration&&isFinite(e)&&e>0&&(this._liveEndedEmitted=!0,this.emit("liveEnded"))}attachListeners(){if(this.listenersAttached)return;this.listenersAttached=!0;let e=this.el;e.addEventListener("play",this.onPlay),e.addEventListener("pause",this.onPause),e.addEventListener("ended",this.onEnded),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("seeked",this.onSeeked),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onRateChange),e.addEventListener("canplay",this.onCanPlay),e.addEventListener("durationchange",this.onDurationChange),e.addEventListener("timeupdate",this.onTimeUpdate),e.addEventListener("volumechange",this.onVolumeChange),e.addEventListener("progress",this.onProgress),e.addEventListener("enterpictureinpicture",this.onEnterPiP),e.addEventListener("leavepictureinpicture",this.onLeavePiP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange)}detachListeners(){if(!this.listenersAttached)return;this.listenersAttached=!1;let e=this.el;e.removeEventListener("play",this.onPlay),e.removeEventListener("pause",this.onPause),e.removeEventListener("ended",this.onEnded),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("seeked",this.onSeeked),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onRateChange),e.removeEventListener("canplay",this.onCanPlay),e.removeEventListener("durationchange",this.onDurationChange),e.removeEventListener("timeupdate",this.onTimeUpdate),e.removeEventListener("volumechange",this.onVolumeChange),e.removeEventListener("progress",this.onProgress),e.removeEventListener("enterpictureinpicture",this.onEnterPiP),e.removeEventListener("leavepictureinpicture",this.onLeavePiP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange)}}});var ma,ga,ba,ya,Nt,Qn=z(()=>{"use strict";Ae();ma=1e3,ga=5e3,ba=100,ya=10,Nt=class extends me{constructor(e,t={}){var n,r;super(),this._isReady=!1,this._isLoading=!0,this._isPlaying=!1,this._isBuffering=!1,this._wantsToPlay=!1,this._startOnPlay=!0,this._onDurationCalled=!1,this._isSwitchingQuality=!1,this._destroyed=!1,this._hasLoadedOnce=!1,this._seekOnPlay=null,this._loadOnReady=null,this._progressTimer=null,this._durationCheckTimer=null,this._seekExpiryTimer=null,this._volumeTimer=null,this._prevPlayed=0,this._prevLoaded=0,this._handleReady=()=>{if(!this._destroyed){if(this._isReady=!0,this._isLoading=!1,this.emit("ready"),this.emit("loading",!1),this._loadOnReady){let i=this._loadOnReady;this._loadOnReady=null,this.engine.load(i)}else(this._isSwitchingQuality||this._wantsToPlay)&&this.engine.play();this._handleDurationCheck()}},this._handlePlay=()=>{this._destroyed||(this._isPlaying=!0,this._isLoading=!1,this._isBuffering=!1,this._isSwitchingQuality=!1,this._wantsToPlay=!0,this.emit("loading",!1),this._startOnPlay&&(this._startOnPlay=!1),this.emit("play"),this._seekOnPlay!==null&&(this.engine.seekTo(this._seekOnPlay),this._seekOnPlay=null,this._clearSeekExpiry()),this._handleDurationCheck(),this._startProgress())},this._handlePause=()=>{if(!this._destroyed){if(this._isPlaying=!1,this._stopProgress(),this.engine.hasEnded()){this._wantsToPlay=!1,this.emit("ended");return}this._wantsToPlay||this.emit("pause")}},this._handleEnded=()=>{this._destroyed||(this._isPlaying=!1,this._wantsToPlay=!1,this._stopProgress(),this.emit("ended"))},this._handleError=i=>{this._destroyed||(this._isLoading=!1,this.emit("loading",!1),this.emit("error",i))},this._handleBuffer=()=>{this._destroyed||(this._isBuffering=!0)},this._handleBufferEnd=()=>{this._destroyed||(this._isBuffering=!1,this._wantsToPlay&&!this._isPlaying&&this._isReady&&this.engine.play())},this._handleLiveEnded=()=>{this._destroyed||this.emit("liveEnded")},this._handleNativeProgress=()=>{if(this._destroyed)return;let i=this.engine.getDuration();if(i>0){let a=this.engine.getCurrentTime(),s=this.engine.getSecondsLoaded(),o=a/i,l=s/i;this.emit("progress",{played:o,loaded:l,playedSeconds:a,loadedSeconds:s,bufferedRanges:this.engine.getBufferedRanges()})}},this.engine=e,this._progressInterval=(n=t.progressInterval)!=null?n:ma,this._stopOnDestroy=(r=t.stopOnDestroy)!=null?r:!0,this._subscribeToEngine()}get isReady(){return this._isReady}get isLoading(){return this._isLoading}get isPlaying(){return this._isPlaying}setPlaying(e){this._destroyed||(this._wantsToPlay=e,this._isReady&&(e&&!this._isPlaying?this.engine.play():!e&&this._isPlaying&&this.engine.pause()))}setVolume(e){this._destroyed||!this._isReady||this.engine.setVolume(e)}setMuted(e){this._destroyed||!this._isReady||(e?this.engine.mute():(this.engine.unmute(),this._clearVolumeTimer(),this._volumeTimer=setTimeout(()=>{this._destroyed||this.engine.setVolume(this.engine.getVolume()),this._volumeTimer=null},0)))}setPlaybackRate(e){this._destroyed||!this._isReady||this.engine.setPlaybackRate(e)}setLoop(e){this._destroyed||this.engine.setLoop(e)}load(e){if(!this._destroyed&&e){if(this._stopProgress(),this._hasLoadedOnce&&this._isLoading&&!this._isReady){this._loadOnReady=e;return}if(this._isReady&&this._isPlaying){let t=this.engine.getCurrentTime();t>0&&(this._seekOnPlay=t),this._isSwitchingQuality=!0}this._hasLoadedOnce=!0,this._isLoading=!0,this._startOnPlay=!0,this._onDurationCalled=!1,this._isReady=!1,this.emit("loading",!0),this.engine.load(e)}}seekTo(e,t){if(!this._destroyed&&isFinite(e)){if(!this._isReady){e!==0&&(this._seekOnPlay=e,this._clearSeekExpiry(),this._seekExpiryTimer=setTimeout(()=>{this._seekOnPlay=null,this._seekExpiryTimer=null},ga));return}this.engine.seekTo(e,t),this.emit("seek",e)}}destroy(){this._destroyed||(this._destroyed=!0,this._stopProgress(),this._clearDurationCheck(),this._clearSeekExpiry(),this._clearVolumeTimer(),this._unsubscribeFromEngine(),this._stopOnDestroy&&this.engine.destroy(),this.removeAllListeners())}_startProgress(){this._stopProgress(),this._progressTimer=setInterval(()=>{if(this._destroyed||!this._isPlaying)return;let e=this.engine.getCurrentTime(),t=this.engine.getSecondsLoaded(),n=this.engine.getDuration();if(n>0){let r=e/n,i=t/n;(e!==this._prevPlayed||t!==this._prevLoaded)&&(this.emit("progress",{played:r,loaded:i,playedSeconds:e,loadedSeconds:t,bufferedRanges:this.engine.getBufferedRanges()}),this._prevPlayed=e,this._prevLoaded=t)}},this._progressInterval)}_stopProgress(){this._progressTimer!==null&&(clearInterval(this._progressTimer),this._progressTimer=null)}_handleDurationCheck(){this._clearDurationCheck();let e=0,t=()=>{if(this._destroyed)return;let n=this.engine.getDuration();n>0?this._onDurationCalled||(this._onDurationCalled=!0,this.emit("duration",n)):e<ya&&(e++,this._durationCheckTimer=setTimeout(t,ba))};t()}_subscribeToEngine(){this.engine.on("ready",this._handleReady),this.engine.on("play",this._handlePlay),this.engine.on("pause",this._handlePause),this.engine.on("ended",this._handleEnded),this.engine.on("error",this._handleError),this.engine.on("buffer",this._handleBuffer),this.engine.on("bufferEnd",this._handleBufferEnd),this.engine.on("progress",this._handleNativeProgress),this.engine.on("liveEnded",this._handleLiveEnded)}_unsubscribeFromEngine(){this.engine.off("ready",this._handleReady),this.engine.off("play",this._handlePlay),this.engine.off("pause",this._handlePause),this.engine.off("ended",this._handleEnded),this.engine.off("error",this._handleError),this.engine.off("buffer",this._handleBuffer),this.engine.off("bufferEnd",this._handleBufferEnd),this.engine.off("progress",this._handleNativeProgress),this.engine.off("liveEnded",this._handleLiveEnded)}_clearDurationCheck(){this._durationCheckTimer!==null&&(clearTimeout(this._durationCheckTimer),this._durationCheckTimer=null)}_clearSeekExpiry(){this._seekExpiryTimer!==null&&(clearTimeout(this._seekExpiryTimer),this._seekExpiryTimer=null)}_clearVolumeTimer(){this._volumeTimer!==null&&(clearTimeout(this._volumeTimer),this._volumeTimer=null)}}});function Xn(e,t){if(!e||e.length===0||t<=0)return[];let n=[...e].filter(r=>r.startTime<t).sort((r,i)=>r.startTime-i.startTime);return n.map((r,i)=>{let a=i<n.length-1?n[i+1].startTime:t,s=Math.min(a,t);return{title:r.title,startTime:r.startTime,endTime:s,startPercent:r.startTime/t*100,endPercent:s/t*100}})}function Gn(e,t){var n;if(e.length===0)return null;for(let r=e.length-1;r>=0;r--)if(t>=e[r].startTime)return e[r];return(n=e[0])!=null?n:null}var Jn=z(()=>{"use strict"});function Zn(e,t){if(!e||e.length===0||t<=0)return"";let n=e.map(o=>{let h=(o.startTime+o.endTime)/2/t*100,E=100-Math.max(0,Math.min(1,o.value))*100;return{x:h,y:E}});if(n.length<2)return"";let r=6,i=n.length+2,a=o=>o<=0?{x:0,y:100}:o>=i-1?{x:100,y:100}:n[o-1],s=`M ${a(0).x},${a(0).y}`;for(let o=0;o<i-1;o++){let l=a(o-1),h=a(o),f=a(o+1),E=a(o+2),m=h.x+(f.x-l.x)/r,b=h.y+(f.y-l.y)/r,v=f.x-(E.x-h.x)/r,R=f.y-(E.y-h.y)/r;s+=` C ${m},${b} ${v},${R} ${f.x},${f.y}`}return s}var er=z(()=>{"use strict"});function de(e){var t;return(t=va[e])!=null?t:fe}var fe,Ee,va,Ht=z(()=>{"use strict";fe={exitFullScreenMode:"Exit full screen mode (f)",fullScreen:"Full screen",exitFullscreen:"Exit full screen",fullscreen:"Full screen",play:"Play",replay:"Replay",pause:"Pause",previous:"Previous",next:"Next",normal:"Normal",settings:"Settings",speed:"Speed",quality:"Quality",auto:"Auto",hd:"HD",live:"Live",seekToLive:"Go to live",seconds:"seconds",clickToUnmute:"Click to unmute",playbackStuckClickResumePlayback:"Playback is stuck, click to resume playback.",mute:"Mute (m)",activateSound:"Activate sound",thisVideoHasNoSound:"This video has no sound",timeBar:"Time bar",loop:"Loop",pictureInPicture:"Picture in picture",captions:"Captions",off:"Off",captionOptions:"Options",fontFamily:"Font family",fontColor:"Font color",fontSize:"Font size",fontOpacity:"Font opacity",backgroundColor:"Background color",backgroundOpacity:"Background opacity",windowColor:"Window color",windowOpacity:"Window opacity",edgeStyle:"Character edge style",reset:"Reset",skipBack:"Back 10s",skipForward:"Forward 10s",unmute:"Unmute",close:"Close",back:"Back",skipAd:"Skip",ad:"Ad",sponsored:"Sponsored"},Ee={exitFullScreenMode:"Salir de pantalla completa (f)",fullScreen:"Pantalla completa",exitFullscreen:"Salir de pantalla completa",fullscreen:"Pantalla completa",play:"Reproducir",replay:"Repetir",pause:"Pausar",previous:"Anterior",next:"Siguiente",normal:"Normal",settings:"Ajustes",speed:"Velocidad",quality:"Calidad",auto:"Auto",hd:"HD",live:"En vivo",seekToLive:"Ir al directo",seconds:"segundos",clickToUnmute:"Haz clic para activar el sonido",playbackStuckClickResumePlayback:"La reproducci\xF3n se ha detenido, haz clic para continuar.",mute:"Silenciar (m)",activateSound:"Activar sonido",thisVideoHasNoSound:"Este video no tiene sonido",timeBar:"Barra de tiempo",loop:"Repetir",pictureInPicture:"Imagen en imagen",captions:"Subt\xEDtulos",off:"Desactivado",captionOptions:"Opciones",fontFamily:"Familia de fuente",fontColor:"Color de fuente",fontSize:"Tama\xF1o de fuente",fontOpacity:"Opacidad de fuente",backgroundColor:"Color de fondo",backgroundOpacity:"Opacidad de fondo",windowColor:"Color de ventana",windowOpacity:"Opacidad de ventana",edgeStyle:"Estilo de borde",reset:"Restablecer",skipBack:"Retroceder 10s",skipForward:"Avanzar 10s",unmute:"Activar sonido",close:"Cerrar",back:"Atr\xE1s",skipAd:"Omitir",ad:"Anuncio",sponsored:"Patrocinado"},va={en:fe,es:Ee}});var zt,$t,tr=z(()=>{"use strict";zt={32:"SPACE_KEY",27:"ESCAPE_KEY",37:"ARROW_LEFT_KEY",39:"ARROW_RIGHT_KEY",38:"ARROW_UP_KEY",40:"ARROW_DOWN_KEY",77:"MUTE_KEY",16:"SHIFT_KEY",67:"SUBTITLES_KEY",70:"F_KEY",84:"T_KEY",78:"N_KEY"},$t={" ":"SPACE_KEY",Escape:"ESCAPE_KEY",ArrowLeft:"ARROW_LEFT_KEY",ArrowRight:"ARROW_RIGHT_KEY",ArrowUp:"ARROW_UP_KEY",ArrowDown:"ARROW_DOWN_KEY",m:"MUTE_KEY",Shift:"SHIFT_KEY",c:"SUBTITLES_KEY",f:"F_KEY",t:"T_KEY",n:"N_KEY"}});function Ze(e,t,n){let r=e-t.left;return r<=0?0:r>=t.width?n:Math.round(n*r/t.width)}function Ut(e,t){let n=e/t*100;return n<0&&(n=0),n>100&&(n=100),n}var nr=z(()=>{"use strict"});var se=z(()=>{"use strict";xn();_n();Tn();vt();xt();Pt();Wn();qt();Qn();Ft();Ht();tr()});var or=xe((hl,sr)=>{"use strict";var Sa=function(t){return xa(t)&&!Ea(t)};function xa(e){return!!e&&typeof e=="object"}function Ea(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Ca(e)}var Pa=typeof Symbol=="function"&&Symbol.for,wa=Pa?Symbol.for("react.element"):60103;function Ca(e){return e.$$typeof===wa}function _a(e){return Array.isArray(e)?[]:{}}function De(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Pe(_a(e),e,t):e}function Ta(e,t,n){return e.concat(t).map(function(r){return De(r,n)})}function Ra(e,t){if(!t.customMerge)return Pe;var n=t.customMerge(e);return typeof n=="function"?n:Pe}function Aa(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function ir(e){return Object.keys(e).concat(Aa(e))}function ar(e,t){try{return t in e}catch{return!1}}function La(e,t){return ar(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function Da(e,t,n){var r={};return n.isMergeableObject(e)&&ir(e).forEach(function(i){r[i]=De(e[i],n)}),ir(t).forEach(function(i){La(e,i)||(ar(e,i)&&n.isMergeableObject(t[i])?r[i]=Ra(i,n)(e[i],t[i],n):r[i]=De(t[i],n))}),r}function Pe(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||Ta,n.isMergeableObject=n.isMergeableObject||Sa,n.cloneUnlessOtherwiseSpecified=De;var r=Array.isArray(t),i=Array.isArray(e),a=r===i;return a?r?n.arrayMerge(e,t,n):Da(e,t,n):De(t,n)}Pe.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return Pe(r,i,n)},{})};var Oa=Pe;sr.exports=Oa});var tt=xe((ml,ur)=>{var Ba=typeof Element!="undefined",Fa=typeof Map=="function",Va=typeof Set=="function",Na=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function et(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!et(e[r],t[r]))return!1;return!0}var a;if(Fa&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!et(r.value[1],t.get(r.value[0])))return!1;return!0}if(Va&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Na&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(Ba&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!et(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}ur.exports=function(t,n){try{return et(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}});var dr=xe((gl,cr)=>{"use strict";var Ha="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";cr.exports=Ha});var mr=xe((bl,fr)=>{"use strict";var za=dr();function pr(){}function hr(){}hr.resetWarningCache=pr;fr.exports=function(){function e(r,i,a,s,o,l){if(l!==za){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:hr,resetWarningCache:pr};return n.PropTypes=n,n}});var qe=xe((kl,gr)=>{gr.exports=mr()();var yl,vl});var kr={};aa(kr,{default:()=>Qt});import Wt,{useRef as Ie,useEffect as ve,useImperativeHandle as Wa}from"react";var vr,Qt,Xt=z(()=>{se();vr=Wt.forwardRef(function({url:t,playing:n,volume:r,muted:i,playbackRate:a,loop:s,config:o={},width:l,height:h,playsinline:f,onProgress:E,onDuration:m,onReady:b,onPlay:v,onPause:R,onEnded:I,onError:D,onSeek:M,onBuffer:F,onBufferEnd:N,onLoaded:P,onPlayBackRateChange:A,onEnablePIP:O,onDisablePIP:X,onMount:H,onLiveEnded:w},S){var Q;let y=Ie(null),L=Ie(null),q=Ie(null),G=Ie(!1),d=Ie({onProgress:E,onDuration:m,onReady:b,onPlay:v,onPause:R,onEnded:I,onError:D,onSeek:M,onBuffer:F,onBufferEnd:N,onLoaded:P,onPlayBackRateChange:A,onEnablePIP:O,onDisablePIP:X,onMount:H,onLiveEnded:w});return d.current={onProgress:E,onDuration:m,onReady:b,onPlay:v,onPause:R,onEnded:I,onError:D,onSeek:M,onBuffer:F,onBufferEnd:N,onLoaded:P,onPlayBackRateChange:A,onEnablePIP:O,onDisablePIP:X,onMount:H,onLiveEnded:w},Wa(S,()=>({getPlayer:()=>y.current,getOrchestrator:()=>q.current,getEngine:()=>L.current,seekTo:(u,p,C)=>{var Z,ie;if(!q.current)return;if(p?p==="fraction":u>0&&u<1){let ne=(ie=(Z=L.current)==null?void 0:Z.getDuration())!=null?ie:0;if(!ne)return;q.current.seekTo(ne*u,C);return}q.current.seekTo(u,C)},getDuration:()=>{var u,p;return(p=(u=L.current)==null?void 0:u.getDuration())!=null?p:null},getCurrentTime:()=>{var u,p;return(p=(u=L.current)==null?void 0:u.getCurrentTime())!=null?p:null},getSecondsLoaded:()=>{var u,p;return(p=(u=L.current)==null?void 0:u.getSecondsLoaded())!=null?p:null},getInternalPlayer:u=>L.current?u==="hls"?L.current.getHlsInstance():u==="dash"?L.current.getDashInstance():y.current:null,play:()=>{var u;return(u=L.current)==null?void 0:u.play()},pause:()=>{var u;return(u=L.current)==null?void 0:u.pause()},stop:()=>{var u;return(u=L.current)==null?void 0:u.stop()},enablePIP:()=>{var u;return(u=L.current)==null?void 0:u.enablePiP()},disablePIP:()=>{var u;return(u=L.current)==null?void 0:u.disablePiP()}}),[]),ve(()=>{G.current=!0;let u=new Vt(y.current,{hlsVersion:o.hlsVersion,dashVersion:o.dashVersion,flvVersion:o.flvVersion,forceHLS:o.forceHLS,forceDASH:o.forceDASH,forceFLV:o.forceFLV,forceSafariHLS:o.forceSafariHLS,forceDisableHls:o.forceDisableHls,hlsOptions:o.hlsOptions,live:o.live}),p=new Nt(u);return L.current=u,q.current=p,p.on("progress",C=>{d.current.onProgress&&d.current.onProgress(C)}),p.on("duration",C=>{d.current.onDuration&&d.current.onDuration(C)}),p.on("ready",()=>{d.current.onReady&&d.current.onReady()}),p.on("play",()=>{d.current.onPlay&&d.current.onPlay()}),p.on("pause",()=>{d.current.onPause&&d.current.onPause()}),p.on("ended",()=>{d.current.onEnded&&d.current.onEnded()}),p.on("error",C=>{d.current.onError&&d.current.onError(C)}),p.on("seek",C=>{d.current.onSeek&&d.current.onSeek(C)}),p.on("liveEnded",()=>{d.current.onLiveEnded&&d.current.onLiveEnded()}),u.on("buffer",()=>{d.current.onBuffer&&d.current.onBuffer()}),u.on("bufferEnd",()=>{d.current.onBufferEnd&&d.current.onBufferEnd()}),u.on("loaded",()=>{d.current.onLoaded&&d.current.onLoaded()}),u.on("playbackRateChange",C=>{d.current.onPlayBackRateChange&&d.current.onPlayBackRateChange(C)}),u.on("enablePiP",()=>{d.current.onEnablePIP&&d.current.onEnablePIP()}),u.on("disablePiP",()=>{d.current.onDisablePIP&&d.current.onDisablePIP()}),d.current.onMount&&d.current.onMount(),()=>{G.current=!1,p.destroy(),L.current=null,q.current=null}},[]),ve(()=>{q.current&&q.current.setPlaying(n)},[n]),ve(()=>{q.current&&r!==null&&r!==void 0&&q.current.setVolume(r)},[r]),ve(()=>{q.current&&q.current.setMuted(i)},[i]),ve(()=>{q.current&&a!==void 0&&q.current.setPlaybackRate(a)},[a]),ve(()=>{q.current&&q.current.setLoop(!!s)},[s]),ve(()=>{q.current&&t&&q.current.load(t)},[t]),Wt.createElement("video",{"data-testid":"video-element",ref:y,style:{width:l==="auto"?l:"100%",height:h==="auto"?h:"100%",objectFit:"contain"},preload:"auto",autoPlay:n||void 0,controls:!1,muted:i,loop:s,...f?{playsInline:!0,"webkit-playsinline":"","x5-playsinline":""}:{},...o.attributes},(Q=o.tracks)==null?void 0:Q.map((u,p)=>Wt.createElement("track",{key:p,...u})))});vr.displayName="VideoElement";Qt=vr});import to from"react";import{createRoot as no}from"react-dom/client";se();import ka from"react";function rr(e){return ka.lazy(async()=>{let t=await e();return t!==null&&typeof t=="object"&&"default"in t?t:{default:t}})}var Ii=he(or());import Ne from"react";var lr=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function qa(e,t){return!!(e===t||lr(e)&&lr(t))}function Ia(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!qa(e[n],t[n]))return!1;return!0}function Ma(e,t){t===void 0&&(t=Ia);var n,r=[],i,a=!1;function s(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return a&&n===this&&t(o,r)||(i=e.apply(this,o),a=!0,n=this,r=o),i}return s}var Oe=Ma;var pn=he(tt());var V=he(qe());se();var $a={en:fe,es:Ee},{string:ue,bool:ee,number:we,array:Ua,oneOfType:jt,shape:br,object:Yt,func:K}=V.default,yr=Object.keys($a),ja={url:ue,playing:ee,loop:ee,volume:we,muted:ee,playbackRate:we,width:jt([ue,we]),height:jt([ue,we]),progressInterval:we,playsinline:ee,language:V.default.oneOf(yr),stopOnUnmount:ee,fallback:V.node,waiting:ee,prevented:ee,wrapper:jt([ue,K,br({render:K.isRequired})]),skinMode:V.default.oneOf(["auto","mobile","desktop"]),config:br({attributes:Yt,tracks:Ua,forceHLS:ee,forceSafariHLS:ee,forceDisableHls:ee,forceDASH:ee,forceFLV:ee,hlsOptions:Yt,hlsVersion:ue,dashVersion:ue,flvVersion:ue}),onReady:K,onStart:K,onPlay:K,onPause:K,onBuffer:K,onBufferEnd:K,onEnded:K,onError:K,onDuration:K,onSeek:K,onPlayBackRateChange:K,onProgress:K,onPrevious:K,onNext:K,showNavButtons:ee},Ya=V.default.shape({title:ue.isRequired,url:ue.isRequired,buttonText:ue.isRequired,icon:ue,skipAfter:we,onSkip:K,onAdClick:K,onAdComplete:K}),Ka={sources:V.default.arrayOf(V.default.shape({src:V.default.string.isRequired,resolution:V.default.number.isRequired}).isRequired),fullHDQualityBreak:V.default.number,spriteVTTFile:V.default.string,chapters:V.default.arrayOf(V.default.shape({title:V.default.string.isRequired,startTime:V.default.number.isRequired})),captions:V.default.arrayOf(V.default.shape({src:V.default.string.isRequired,label:V.default.string.isRequired,language:V.default.string.isRequired,kind:V.default.string})),heatmapData:V.default.arrayOf(V.default.shape({startTime:V.default.number.isRequired,endTime:V.default.number.isRequired,value:V.default.number.isRequired})),ads:Ya,title:ue,live:ee,liveDVR:ee,liveAd:Yt,poster:ue,pip:ee,onPlayBackQualityChange:K,onEnablePIP:K,onDisablePIP:K},Kt={...ja,...Ka},re=()=>{},nt={url:"",sources:[],chapters:[],captions:[],heatmapData:[],ads:null,title:"",playing:!1,loop:!1,live:!1,liveDVR:!1,liveAd:null,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:Dt,playsinline:!1,pip:!1,stopOnUnmount:!0,fallback:null,waiting:!1,prevented:!1,wrapper:"div",skinMode:"auto",language:yr[0],poster:"",config:{attributes:{},tracks:[],...Ot},onReady:re,onStart:re,onPlay:re,onPause:re,onBuffer:re,onBufferEnd:re,onEnded:re,onError:re,onDuration:re,onSeek:re,onPlayBackRateChange:re,onPlayBackQualityChange:re,onProgress:re,onEnablePIP:re,onDisablePIP:re};var Di=he(tt());Xt();import $ from"react";var T=he(qe());import at from"react";var g=he(qe());import ln from"react";var k=he(qe());se();import x from"react";var rt={syncAttribute(e,t,n){if(n===null){e.removeAttribute(t);return}if(typeof n=="boolean"){n?e.setAttribute(t,""):e.removeAttribute(t);return}e.setAttribute(t,String(n))},syncProperty(e,t,n){e[t]=n},subscribe(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}},Sr=[{tagName:"playerstack-media-controller",attributes:[],requestEvents:[]},{tagName:"playerstack-play-button",attributes:["aria-label"],requestEvents:["playerstack-play-request","playerstack-pause-request"]},{tagName:"playerstack-volume",attributes:["aria-label"],requestEvents:["playerstack-mute-request","playerstack-unmute-request","playerstack-volume-request"]},{tagName:"playerstack-time-slider",attributes:["aria-label","sprite-vtt-file"],requestEvents:["playerstack-seek-request"]},{tagName:"playerstack-play-time",attributes:[],requestEvents:[]},{tagName:"playerstack-settings",attributes:["aria-label"],requestEvents:["playerstack-rate-request","playerstack-quality-request"]},{tagName:"playerstack-fullscreen-button",attributes:["aria-label"],requestEvents:["playerstack-enter-fullscreen-request","playerstack-exit-fullscreen-request"]},{tagName:"playerstack-pip-button",attributes:["aria-label"],requestEvents:["playerstack-enter-pip-request","playerstack-exit-pip-request"]},{tagName:"playerstack-captions",attributes:[],requestEvents:["playerstack-caption-request"]},{tagName:"playerstack-chapters",attributes:[],requestEvents:[]},{tagName:"playerstack-heatmap",attributes:[],requestEvents:[]},{tagName:"playerstack-context-menu",attributes:[],requestEvents:["playerstack-loop-request","playerstack-enter-pip-request","playerstack-exit-pip-request","playerstack-enter-fullscreen-request","playerstack-exit-fullscreen-request"]},{tagName:"playerstack-spinner",attributes:[],requestEvents:[]},{tagName:"playerstack-play-state",attributes:["aria-label"],requestEvents:["playerstack-play-request","playerstack-pause-request"]},{tagName:"playerstack-top-state",attributes:["language"],requestEvents:[]},{tagName:"playerstack-prevented-tip",attributes:["language"],requestEvents:[]},{tagName:"playerstack-audio-controls",attributes:["aria-label"],requestEvents:["playerstack-play-request","playerstack-pause-request","playerstack-seek-request"]},{tagName:"playerstack-ad-overlay",attributes:["aria-label"],requestEvents:["playerstack-ad-skip","playerstack-ad-click"]},{tagName:"playerstack-live-indicator",attributes:[],requestEvents:["playerstack-seek-request"]},{tagName:"playerstack-double-tap",attributes:[],requestEvents:["playerstack-seek-request"]},{tagName:"playerstack-icon",attributes:["width","height"],requestEvents:[]},{tagName:"playerstack-nav-buttons",attributes:["prev-label","next-label"],requestEvents:["playerstack-prev-request","playerstack-next-request"]}];var Qa="--playerstack-";function Xa(e){return`${Qa}${e.category}-${e.name}`}function Pr(e,t=":root"){let n=e.map(r=>`  ${Xa(r)}: ${r.value};`).join(`
`);return`${t} {
${n}
}
`}var wr=[{category:"color",name:"accent",value:"#ff375f"},{category:"color",name:"accent-hover",value:"#ff5c7c"},{category:"color",name:"bg",value:"#000000"},{category:"color",name:"fg",value:"#ffffff"},{category:"color",name:"muted",value:"rgba(255, 255, 255, 0.62)"},{category:"color",name:"control-bg",value:"rgba(0, 0, 0, 0.55)"},{category:"color",name:"control-fg",value:"#ffffff"},{category:"color",name:"control-hover",value:"rgba(255, 255, 255, 0.16)"},{category:"color",name:"overlay",value:"rgba(0, 0, 0, 0.45)"},{category:"color",name:"track",value:"rgba(255, 255, 255, 0.28)"},{category:"color",name:"track-buffered",value:"rgba(255, 255, 255, 0.45)"},{category:"color",name:"focus-ring",value:"rgba(255, 55, 95, 0.75)"},{category:"space",name:"xs",value:"4px"},{category:"space",name:"sm",value:"8px"},{category:"space",name:"md",value:"12px"},{category:"space",name:"lg",value:"16px"},{category:"space",name:"xl",value:"24px"},{category:"font",name:"family-base",value:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"},{category:"font",name:"size-sm",value:"12px"},{category:"font",name:"size-md",value:"14px"},{category:"font",name:"size-lg",value:"18px"},{category:"font",name:"weight-normal",value:"400"},{category:"font",name:"weight-bold",value:"600"},{category:"radius",name:"sm",value:"4px"},{category:"radius",name:"md",value:"8px"},{category:"radius",name:"lg",value:"12px"},{category:"radius",name:"full",value:"9999px"}],Ga=`/**
 * playerstack.css \u2014 the foundation of the PlayerStack Style_Layer (Req 3.1, 3.2).
 *
 * ROLE
 *   Standard CSS (NO CSS-in-JS, no styled-components) that is adopted into the shadow
 *   root of every PlayerStack UI_Element via Style_Auto_Injection. Because it lives
 *   inside a shadow root, every rule is scoped through \`:host\` and cannot leak out of
 *   the player (Req 3.5). This file provides the base primitives; the full per-component
 *   visual rules are ported later (tasks 14.6 / 15.4).
 *
 * CONVENTIONS
 *   - Theming: every themed value reads a \`--playerstack-<category>-<name>\`
 *     CSS_Custom_Property with a sensible fallback, e.g.
 *     \`var(--playerstack-color-accent, #ff375f)\`. When a consumer declares the variable
 *     (in :root or on the host) it wins; otherwise the Design_Token fallback applies
 *     (Req 4.3, 4.4). Variable names match the token ids in \`src/styles/tokens.ts\`
 *     exactly: color (accent, accent-hover, bg, fg, muted, control-bg, control-fg,
 *     control-hover, overlay, track, track-buffered, focus-ring), space (xs, sm, md,
 *     lg, xl), font (family-base, size-sm/md/lg, weight-normal/bold), radius (sm, md,
 *     lg, full).
 *   - State: components reflect their state as \`data-*\` attributes on the host / parts
 *     (Req 3.3). Style_Layer selects state-dependent styles ONLY through attribute
 *     selectors over those data-* attributes (Req 3.4), e.g.
 *     \`:host([data-playing]) ...\`, \`[part="play-button"][data-muted] ...\`.
 *   - Style hooks: sub-elements expose stable \`part\` names so skins can target them.
 */

/* -------------------------------------------------------------------------- */
/* Reset \u2014 neutralize inherited styles from the host page (Req 3.6).          */
/*                                                                            */
/* We reset on :host with \`all: initial\` so NO property inherited from the    */
/* host document (font, color, line-height, letter-spacing, text-transform,   */
/* etc.) bleeds into the player. \`all: initial\` is the cleanest, most         */
/* complete neutralizer available; we then re-establish only the few defaults */
/* the player actually needs. This is preferable to enumerating properties    */
/* one by one because new inheritable properties are covered automatically.   */
/* -------------------------------------------------------------------------- */
:host {
  all: initial;

  /* Re-establish the baseline the player relies on, all sourced from tokens. */
  box-sizing: border-box;
  display: block;
  position: relative;
  font-family: var(
    --playerstack-font-family-base,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif
  );
  font-size: var(--playerstack-font-size-md, 14px);
  font-weight: var(--playerstack-font-weight-normal, 400);
  line-height: 1.4;
  color: var(--playerstack-color-fg, #ffffff);
  /* Keep the host transparent by default; the media-controller host paints bg. */
  background: transparent;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  /* Prevent double-tap zoom / text selection flicker on touch controls. */
  -webkit-tap-highlight-color: transparent;
}

/* \`all: initial\` on :host does not cascade box-sizing to descendants inside the */
/* shadow tree, so normalize it explicitly for all rendered parts. */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* A host that reflects data-hidden collapses entirely (Req 3.3, 3.4). */
:host([data-hidden]) {
  display: none;
}

/* Root host of a full player fills its container and paints the base surface. */
/* Ported 1:1 from reactjs StyledPlayerSkin / StyledMobilePlayerSkin (scopedReset is */
/* superseded by the Core reset above): the skin container is an absolutely-positioned */
/* overflow-hidden surface with a light \`#eee\` fg and a soft text-shadow so control */
/* glyphs/labels stay legible over bright video. \`user-select: none\` prevents accidental */
/* text selection while scrubbing/tapping. */
:host([part='root']),
:host([data-part='root']) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--playerstack-color-bg, #000000);
  overflow: hidden;
  user-select: none;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

/* Mobile skin container additionally disables the 300ms tap delay + custom font stack */
/* (ported from StyledMobilePlayerSkin). Applied on the same root host under the mobile */
/* breakpoint so touch controls respond immediately. */
@media (max-width: 575px) {
  :host([part='root']),
  :host([data-part='root']) {
    touch-action: manipulation;
    font-family: Helvetica, Arial, sans-serif;
  }
}

/* Spinner keyframes ported from scopedReset (\`playerstack-spinner\`) + the mobile */
/* spin animation. A single shared rotation keyframe drives every spinner glyph. */
@keyframes playerstack-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* -------------------------------------------------------------------------- */
/* Base part primitives.                                                      */
/* These give every UI_Element a consistent, token-driven starting point.     */
/* -------------------------------------------------------------------------- */

/* Buttons \u2014 reset native appearance, then apply token colors/radius/spacing. */
[part~='button'],
[part$='-button'] {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  padding: var(--playerstack-space-sm, 8px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--playerstack-space-xs, 4px);
  border: 0;
  border-radius: var(--playerstack-radius-md, 8px);
  background: transparent;
  color: var(--playerstack-color-control-fg, #ffffff);
  font: inherit;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

/* Hover state uses the dedicated control-hover token. */
[part~='button']:hover,
[part$='-button']:hover {
  background: var(--playerstack-color-control-hover, rgba(255, 255, 255, 0.16));
}

/* Disabled buttons dim and stop receiving pointer events. */
[part~='button'][disabled],
[part~='button'][aria-disabled='true'] {
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
}

/* Icons inside parts scale to the surrounding font-size by default. */
[part='icon'],
.icon {
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  fill: currentColor;
  flex: none;
  pointer-events: none;
}

/* Sliders / tracks \u2014 progress and volume bars share the same primitives. */
[part~='slider'] {
  position: relative;
  display: block;
  width: 100%;
  height: var(--playerstack-space-md, 12px);
  cursor: pointer;
  touch-action: none;
}

[part='track'] {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: var(--playerstack-space-xs, 4px);
  border-radius: var(--playerstack-radius-full, 9999px);
  background: var(--playerstack-color-track, rgba(255, 255, 255, 0.28));
}

/* Buffered range sits above the base track. */
[part='track-buffered'] {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  background: var(--playerstack-color-track-buffered, rgba(255, 255, 255, 0.45));
}

/* Played / filled range uses the accent color. */
[part='track-fill'] {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  background: var(--playerstack-color-accent, #ff375f);
}

/* Draggable thumb. */
[part='thumb'] {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: var(--playerstack-space-md, 12px);
  height: var(--playerstack-space-md, 12px);
  border-radius: var(--playerstack-radius-full, 9999px);
  background: var(--playerstack-color-accent, #ff375f);
}

/* Overlays \u2014 spinner / play-state / prevented-tip surfaces sit over the video. */
[part~='overlay'] {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--playerstack-color-overlay, rgba(0, 0, 0, 0.45));
  color: var(--playerstack-color-fg, #ffffff);
  padding: var(--playerstack-space-lg, 16px);
}

/* Control bar \u2014 the bottom cluster of controls. */
[part='controls'] {
  display: flex;
  align-items: center;
  gap: var(--playerstack-space-sm, 8px);
  padding: var(--playerstack-space-sm, 8px) var(--playerstack-space-md, 12px);
  background: var(--playerstack-color-control-bg, rgba(0, 0, 0, 0.55));
}

/* Time / label text uses the muted foreground and a compact size. */
[part='time'],
[part~='label'] {
  color: var(--playerstack-color-muted, rgba(255, 255, 255, 0.62));
  font-size: var(--playerstack-font-size-sm, 12px);
  font-weight: var(--playerstack-font-weight-normal, 400);
  white-space: nowrap;
}

/* Menus / panels (settings, context menu) share a rounded control surface. */
[part~='menu'],
[part~='panel'] {
  background: var(--playerstack-color-control-bg, rgba(0, 0, 0, 0.55));
  color: var(--playerstack-color-control-fg, #ffffff);
  border-radius: var(--playerstack-radius-lg, 12px);
  padding: var(--playerstack-space-sm, 8px);
}

/* -------------------------------------------------------------------------- */
/* Focus ring \u2014 accessible keyboard focus for every interactive part.         */
/* -------------------------------------------------------------------------- */
[part] :focus-visible,
:host(:focus-visible),
[part]:focus-visible {
  outline: 2px solid var(--playerstack-color-focus-ring, rgba(255, 55, 95, 0.75));
  outline-offset: 2px;
}

/* Remove the non-accessible default focus ring when focus-visible is supported. */
[part]:focus:not(:focus-visible) {
  outline: none;
}

/* -------------------------------------------------------------------------- */
/* State-dependent styles \u2014 driven ONLY by data-* attribute selectors         */
/* (Req 3.3, 3.4). A representative set of the hooks components will reflect.  */
/* -------------------------------------------------------------------------- */

/* Play button toggles between its play and pause glyphs by reflected state. */
[part='play-button'][data-playing] .icon-play {
  display: none;
}
[part='play-button']:not([data-playing]) .icon-pause {
  display: none;
}

/* Mute button swaps its glyph and dims the volume slider when muted. */
[part='mute-button'][data-muted] .icon-volume {
  display: none;
}
[part='mute-button']:not([data-muted]) .icon-muted {
  display: none;
}
[part='volume'][data-muted] [part='track-fill'] {
  opacity: 0.4;
}

/* Buffering / loading: reveal the spinner overlay while it is active. */
:host([data-buffering]) [part='spinner'],
:host([data-loading]) [part='spinner'] {
  display: flex;
}
[part='spinner'] {
  display: none;
}

/* Ended state can surface a replay affordance. */
:host([data-ended]) [part='play-state'] {
  display: flex;
}

/* Fullscreen / PiP buttons swap their enter/exit glyphs by reflected state. */
[part='fullscreen-button'][data-fullscreen] .icon-enter-fullscreen,
[part='pip-button'][data-pip] .icon-enter-pip {
  display: none;
}
[part='fullscreen-button']:not([data-fullscreen]) .icon-exit-fullscreen,
[part='pip-button']:not([data-pip]) .icon-exit-pip {
  display: none;
}

/* Live mode hides the seekable time slider (mirrors the \`live\` behavior). */
:host([data-live]) [part='time-slider'] {
  display: none;
}

/* Controls auto-hide: when the host reflects hiding, fade the control bar out. */
:host([data-hiding]) [part='controls'] {
  opacity: 0;
  pointer-events: none;
}
[part='controls'] {
  opacity: 1;
  transition: opacity 0.2s ease;
}

/* Respect reduced-motion preferences by removing transitions/animations. */
@media (prefers-reduced-motion: reduce) {
  :host,
  [part] {
    transition: none !important;
    animation: none !important;
  }
}

/* ========================================================================== */
/* Ported component styles (task 14.6, Req 21.2/21.3/21.4/21.5/21.10).        */
/*                                                                            */
/* These rules port the \`reactjs\` \`*.styled.jsx\`/\`*.styled.js\` visuals 1:1    */
/* onto the Core Markup_Contract, keyed by \`[part]\` / \`:host([data-*])\`.      */
/* styled-components \`\${({ prop }) => ...}\` interpolations become data-*      */
/* selectors (discrete states) or CSS custom properties (continuous values):  */
/*   - isFullscreen  -> :host([data-fullscreen]) ...                          */
/*   - hiding        -> :host([data-hiding]) ...                              */
/*   - open/showing  -> :host([data-open]) / [data-active]                    */
/* Desktop is the default; mobile lives under the SAME \`max-width: 575px\`     */
/* breakpoint the reactjs skin used. Specific px/colors that carried no theme */
/* token are kept literal to preserve pixel Visual_Parity (e.g. the skin's    */
/* \`#cb0e0b\`/\`#f00\` progress red, control heights 36px/54px); themeable       */
/* surfaces reuse the existing \`--playerstack-*\` tokens where they map.       */
/* ========================================================================== */

/* -------------------------------------------------------------------------- */
/* Control bar layout (ControlBar / Controls).                               */
/* StyledControls: absolute bottom bar, fades on autohide (transition 0.3s).  */
/* StyledControlBar: centered flex row, 36px tall (54px in fullscreen).       */
/* -------------------------------------------------------------------------- */
[part='controls'] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 11;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  height: 36px;
  padding: 0;
  background: transparent;
  opacity: 1;
  transition: opacity 0.3s;
}

/* Fullscreen grows the control bar height 36px -> 54px (isFullscreen). */
:host([data-fullscreen]) [part='controls'] {
  height: 54px;
}

/* Autohide fades the controls out (Controls \`hiding\`). */
:host([data-hiding]) [part='controls'] {
  opacity: 0;
  pointer-events: none;
}

/* Controls backdrop gradient (StyledControlsBackdrop) \u2014 a bottom vignette so */
/* the controls stay readable over bright content. */
[part='controls-backdrop'] {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.7) 100%);
  transition: opacity 0.3s;
}

/* -------------------------------------------------------------------------- */
/* Buttons (StyledGeneralButton): the shared control button base.            */
/* baseButtonStyles + normalButton(36) / fullscreenButton(54).               */
/* -------------------------------------------------------------------------- */
[part$='-button'],
[part='play-button'],
[part='mute-button'],
[part='settings-button'] {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 36px;
  height: 36px;
  padding: var(--playerstack-space-sm, 8px);
  border: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
  opacity: 0.8;
  border-radius: var(--playerstack-radius-md, 8px);
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

/* Hover/focus lift the icon opacity to full (baseButtonStyles). */
[part$='-button']:hover,
[part$='-button']:focus,
[part='play-button']:hover,
[part='play-button']:focus,
[part='mute-button']:hover,
[part='mute-button']:focus,
[part='settings-button']:hover,
[part='settings-button']:focus {
  opacity: 1;
}

/* Disabled / fake-disabled buttons dim to the muted grey (baseButtonStyles). */
[part$='-button'][disabled],
[part$='-button'][aria-disabled='true'] {
  cursor: not-allowed;
  color: #a4a4a4;
  opacity: 1;
  pointer-events: none;
}

/* Fullscreen grows the standard control buttons 36 -> 54 (fullscreenButton). */
:host([data-fullscreen]) [part$='-button'],
:host([data-fullscreen]) [part='play-button'],
:host([data-fullscreen]) [part='mute-button'],
:host([data-fullscreen]) [part='settings-button'] {
  width: 54px;
  height: 54px;
}

/* Icons never intercept pointer events (baseButtonStyles \`& * { pointer-events: none }\`). */
[part] .icon,
[part] svg {
  pointer-events: none;
}

/* -------------------------------------------------------------------------- */
/* PlayTime (StyledControlText + live badge/dot + chapter indicator).        */
/* -------------------------------------------------------------------------- */
[part='time'] {
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 5px;
  font-size: 13px;
  line-height: 35px;
  white-space: nowrap;
  color: #fff;
}

[part='current-time'],
[part='duration'] {
  font-size: 13px;
}

/* Live badge/dot (StyledLiveBadge / StyledLiveDot). The \`$atEdge\` interpolation */
/* maps to \`:host([data-at-edge])\`: at the edge the dot is red and text white,  */
/* otherwise both are dimmed. */
[part='live-indicator'] {
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 6px;
  margin: 0;
  border: none;
  background: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  font-weight: 500;
  line-height: 36px;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s ease;
}

[part='live-indicator']:hover {
  color: #ffffff;
}

[part='live-dot'] {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 6px;
  vertical-align: middle;
  border-radius: 50%;
  background: #888888;
  transition: background 0.2s ease;
}

[part='live-indicator']:hover [part='live-dot'] {
  background: #ff0000;
}

/* At-edge state (LiveDot/Badge \`$atEdge\` true). */
:host([data-at-edge]) [part='live-indicator'] {
  color: #ffffff;
}

:host([data-at-edge]) [part='live-dot'] {
  background: #ff0000;
}

[part='live-offset'] {
  font-size: 13px;
}

/* Chapter title read-out (StyledChapterIndicator). */
[part='chapters'],
[part='chapter-title'] {
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  white-space: nowrap;
}

/* -------------------------------------------------------------------------- */
/* Volume (StyledSliderWrapper / StyledSliderContainer + VolumeSlider).      */
/* The hover-to-expand slider: the wrapper starts at width 0 and expands on   */
/* hover of the volume control (mapped from the JS \`sliderWith()\` width via a  */
/* fixed expanded width preserving the same reveal transition/easing).        */
/* -------------------------------------------------------------------------- */
[part='volume'] {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  width: 0;
  height: 36px;
  transition: margin 0.2s cubic-bezier(0.4, 0, 1, 1), width 0.2s cubic-bezier(0.4, 0, 1, 1);
}

/* Hide the volume slider entirely on small screens (SliderContainer @media). */
@media (max-width: 575px) {
  [part='volume'] {
    display: none;
  }
}

/* Reveal the slider on hover of the mute button or the volume region, or when */
/* actively sliding (data-sliding). Expanded width mirrors the desktop reveal.  */
[part='mute-button']:hover ~ [part='volume'],
[part='volume']:hover,
:host([data-volume-sliding]) [part='volume'] {
  width: 52px;
  transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
}

:host([data-fullscreen]) [part='volume'] {
  height: 54px;
}

:host([data-fullscreen][data-volume-sliding]) [part='volume'],
:host([data-fullscreen]) [part='mute-button']:hover ~ [part='volume'],
:host([data-fullscreen]) [part='volume']:hover {
  width: 78px;
}

/* Volume slider track (VolumeSliderContainer): 2px rail, rounded, translucent. */
[part='volume'] [part='slider'] {
  width: 100%;
  height: auto;
}

[part='volume'] [part='track'] {
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  position: relative;
  top: auto;
  transform: none;
}

/* Volume fill (VolumeSliderTrack): white, 2px (4px fullscreen), grey when muted/disabled. */
[part='volume'] [part='track-fill'] {
  height: 2px;
  border-radius: 2px;
  background-color: #fff;
}

/* Volume thumb (VolumeSliderThumb): 14px white circle (18px fullscreen). */
[part='volume'] [part='thumb'] {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

:host([data-fullscreen]) [part='volume'] [part='track'],
:host([data-fullscreen]) [part='volume'] [part='track-fill'] {
  height: 4px;
}

:host([data-fullscreen]) [part='volume'] [part='thumb'] {
  width: 18px;
  height: 18px;
}

/* Muted state dims the fill/thumb to grey (VolumeSlider isDisabled). */
:host([data-muted]) [part='volume'] [part='track-fill'],
:host([data-muted]) [part='volume'] [part='thumb'] {
  background-color: #a4a4a4;
}

/* Volume percent tooltip (StyledVolumePercentTooltip). */
[part='volume-tooltip'] {
  position: absolute;
  bottom: 100%;
  transform: translateX(-50%);
  margin-bottom: 4px;
  background-color: rgba(15, 15, 15, 0.9);
  border-radius: 4px;
  padding: 4px 8px;
  white-space: nowrap;
  font-weight: 500;
  font-size: 90%;
  color: #fff;
  pointer-events: none;
  z-index: 10;
}

:host([data-fullscreen]) [part='volume-tooltip'] {
  font-size: 130%;
}

/* -------------------------------------------------------------------------- */
/* Generic tooltip primitive (Commons/Tooltip). Hidden by default, shown on    */
/* hover of the wrapping part; suppressed while a menu is expanded.            */
/* -------------------------------------------------------------------------- */
[part='tooltip-text'] {
  position: absolute;
  bottom: 100%;
  left: 50%;
  background-color: rgba(15, 15, 15, 0.9);
  border-radius: 4px;
  padding: 5px 10px;
  white-space: nowrap;
  font-weight: 500;
  font-size: 90%;
  margin-bottom: 6px;
  color: #fff;
  pointer-events: none;
  opacity: 0;
  transform: translateX(-50%);
  transition: opacity 0.15s ease;
  z-index: 12;
}

:host([data-fullscreen]) [part='tooltip-text'] {
  font-size: 130%;
  margin-bottom: 10px;
}

/* -------------------------------------------------------------------------- */
/* TimeSlider (Slider / SlideRail / Track / Buffered / Handle + tooltip).     */
/* The rail sits under the played track; the played track is scaled from the   */
/* right edge (transform-driven) exactly like the reactjs slider. The handle   */
/* is hidden (scale 0) until hover/slide, when it pops in with a red ring.     */
/* -------------------------------------------------------------------------- */
[part='time-slider'] {
  position: relative;
  width: 100%;
  display: block;
  height: 4px;
  cursor: pointer;
  touch-action: none;
}

[part='time-slider'] [part='slider'] {
  width: 100%;
  height: 4px;
  position: relative;
}

/* Rail (SlideRail) + played/buffered tracks share the 4px height (6px fullscreen). */
[part='time-slider'] [part='track'] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0;
  transform: none;
}

[part='time-slider'] [part='track-buffered'] {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0;
}

/* Played fill (StyledTrack): the skin's red progress color, NOT the accent token, */
/* to preserve the reactjs \`#f00\` progress Visual_Parity. */
[part='time-slider'] [part='track-fill'] {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #f00;
  border-radius: 0;
}

/* Handle/thumb (StyledSliderHandle): 12px red circle, hidden (scale 0) until */
/* hover/slide. Fullscreen grows it to 20px. */
[part='time-slider'] [part='thumb'] {
  position: absolute;
  top: 50%;
  right: -6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #cb0e0b;
  pointer-events: none;
  transform: translateY(-50%) scale(0);
  transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
}

[part='time-slider']:hover [part='thumb'],
[part='time-slider']:focus [part='thumb'],
:host([data-time-sliding]) [part='time-slider'] [part='thumb'] {
  transform: translateY(-50%) scale(1);
  box-shadow: 0 0 0 5px rgba(255, 0, 0, 0.2);
  pointer-events: auto;
  transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);
}

/* Fullscreen enlarges the whole slider (6px rail, 20px handle). */
:host([data-fullscreen]) [part='time-slider'],
:host([data-fullscreen]) [part='time-slider'] [part='slider'],
:host([data-fullscreen]) [part='time-slider'] [part='track'] {
  height: 6px;
}

:host([data-fullscreen]) [part='time-slider'] [part='thumb'] {
  width: 20px;
  height: 20px;
  right: -9px;
}

/* Touch devices always expose the handle (Slider @media (hover:none)). */
@media (hover: none), (pointer: coarse) {
  [part='time-slider'] [part='thumb'] {
    transform: translateY(-50%) scale(1);
    pointer-events: auto;
    box-shadow: none;
  }
}

/* Ad mode disables the slider handle + cursor (Slider \`adMode\`). */
:host([data-ad-active]) [part='time-slider'] {
  cursor: default;
}

:host([data-ad-active]) [part='time-slider'] [part='thumb'] {
  display: none;
}

:host([data-ad-active]) [part='time-slider'] [part='track-fill'] {
  background: #fc0;
}

/* Time tooltip (StyledTooltip / StyledTip): hidden until hover/slide. */
[part='time-slider'] [part='tooltip'] {
  display: none;
  position: absolute;
  bottom: 10px;
  left: 0;
  pointer-events: none;
  flex-direction: column;
  align-items: center;
  padding: 0.4em 0.8em;
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
}

[part='time-slider']:hover [part='tooltip'],
:host([data-time-sliding]) [part='time-slider'] [part='tooltip'] {
  display: inline-flex;
}

:host([data-fullscreen]) [part='time-slider'] [part='tooltip'] {
  bottom: 13px;
  font-size: 18px;
}

/* Timelens sprite-preview thumbnail (StyledTimelensThumbnail): white-bordered */
/* frame that fades in above the slider on hover. */
[part='time-slider'] [part='timelens'] {
  background: #fff;
  border: solid #fff 2px;
  border-radius: 2px;
  background-clip: content-box;
  position: absolute;
  top: -35px;
  pointer-events: none;
  opacity: 0;
  transform: translateY(-100%) translateY(-7px);
  transition: opacity 0.2s, z-index 0.2s;
}

:host([data-fullscreen]) [part='time-slider'] [part='timelens'] {
  top: -45px;
}

/* Chapter segments on the slider (StyledChapterSegments / StyledChapterSegment). */
[part='time-slider'] [part='chapters'] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  display: flex;
  align-items: center;
  gap: 2px;
  z-index: 3;
  overflow: visible;
  pointer-events: none;
}

:host([data-fullscreen]) [part='time-slider'] [part='chapters'] {
  height: 6px;
}

/* -------------------------------------------------------------------------- */
/* Settings menu / submenu (StyledDropdownOverlay + items).                   */
/* Hidden by default; shown when the host reflects data-open. The panel is a   */
/* 250px translucent dropdown anchored above the control bar.                  */
/* -------------------------------------------------------------------------- */
[part='menu'],
[part='submenu'] {
  width: 250px;
  position: absolute;
  overflow: hidden;
  z-index: 20;
  right: -35px;
  bottom: 55px;
  padding: 10px 0;
  background: rgba(15, 15, 15, 0.9);
  color: #fff;
  border-radius: var(--playerstack-radius-md, 8px);
  display: none;
}

/* Open state reveals the main menu (DropdownOverlay \`hiding\` -> display). */
:host([data-open]) [part='menu'] {
  display: block;
}

:host([data-fullscreen]) [part='menu'],
:host([data-fullscreen]) [part='submenu'] {
  right: -52px;
  bottom: 75px;
}

/* Menu rows (StyledDropdownItem): 40px tall (49px fullscreen), hover highlight. */
[part='menu-item'],
[part='submenu-item'] {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  margin: 0;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  line-height: 40px;
  cursor: pointer;
  justify-content: flex-start;
  border-radius: 8px;
}

[part='menu-item']:hover,
[part='menu-item']:focus,
[part='submenu-item']:hover,
[part='submenu-item']:focus {
  background-color: rgba(255, 255, 255, 0.1);
}

:host([data-fullscreen]) [part='menu-item'],
:host([data-fullscreen]) [part='submenu-item'] {
  height: 49px;
}

/* Active submenu option (StyledDropdownItem \`selected\`). */
[part='submenu-item'][data-active] {
  background-color: rgba(204, 54, 43, 0.4);
}

/* -------------------------------------------------------------------------- */
/* Captions overlay + options (CaptionOverlay / CaptionOptions).             */
/* -------------------------------------------------------------------------- */
[part='captions'] {
  position: absolute;
  pointer-events: none;
  text-align: center;
  transform: translateX(-50%);
  z-index: 6;
  display: none;
}

/* Only render the caption overlay when a cue is active (data-active). */
:host([data-active]) [part='captions'] {
  display: block;
}

[part='cue'] {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  line-height: 1.4;
  font-weight: 500;
  white-space: pre-wrap;
  word-wrap: break-word;
  max-width: 80vw;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
}

/* Caption options panel (StyledOptionsContainer) \u2014 reuses the settings dropdown look. */
[part='caption-options'] {
  width: 280px;
  max-height: 280px;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  z-index: 9;
  right: -35px;
  bottom: 45px;
  background: rgba(15, 15, 15, 0.95);
  border-radius: 6px;
  padding: 4px 0;
}

:host([data-fullscreen]) [part='caption-options'] {
  right: -52px;
  bottom: 60px;
}

/* -------------------------------------------------------------------------- */
/* Nav buttons (playerstack-nav-buttons) \u2014 the previous/next cluster.         */
/* Reuses the shared control-button primitives ([part$='-button']) so the     */
/* prev/next buttons match the other 36px (54px fullscreen) controls; the     */
/* container is a simple inline flex row with the standard control gap.        */
/* The \`.icon-prev\`/\`.icon-next\` glyphs inherit the shared \`.icon\` sizing.     */
/* -------------------------------------------------------------------------- */
[part='nav-buttons'] {
  display: inline-flex;
  align-items: center;
  gap: var(--playerstack-space-xs, 4px);
}

/* Directional glyphs mirror one another so a single arrow asset serves both. */
.icon-next {
  transform: scaleX(-1);
}
[part='nav-buttons'][data-hidden],
:host([data-hidden]) [part='nav-buttons'] {
  display: none;
}

/* -------------------------------------------------------------------------- */
/* PlayState center overlay (StyledPlayButton): full-cover dark scrim with a   */
/* big 64px glyph. Fades in when showing (data-ended / data-active).           */
/* -------------------------------------------------------------------------- */
[part='play-state'] {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

[part='play-state-button'] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  font-size: 64px;
  cursor: default;
}

/* Surface the overlay when ended / active (PlayButton \`showing\`). */
:host([data-ended]) [part='play-state'],
:host([data-active]) [part='play-state'] {
  opacity: 1;
}

:host([data-ended]) [part='play-state-button'],
:host([data-active]) [part='play-state-button'] {
  cursor: pointer;
}

/* -------------------------------------------------------------------------- */
/* Spinner (loading/buffering). Hidden until active; the glyph spins via the   */
/* shared keyframes. Ported from the mobile spinner ring visuals.             */
/* -------------------------------------------------------------------------- */
[part='spinner'] {
  display: none;
  align-items: center;
  justify-content: center;
}

:host([data-buffering]) [part='spinner'],
:host([data-loading]) [part='spinner'] {
  display: flex;
}

[part='spinner-indicator'] {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: playerstack-spinner 0.8s linear infinite;
}

/* -------------------------------------------------------------------------- */
/* PreventedTip (StyledPeventedTip / StyledPreventedIcon).                    */
/* -------------------------------------------------------------------------- */
[part='prevented-tip'] {
  position: absolute;
  display: none;
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
}

:host([data-active]) [part='prevented-tip'] {
  display: flex;
}

[part='prevented-tip-message'] {
  display: inline-flex;
  align-items: center;
}

/* -------------------------------------------------------------------------- */
/* TopState (StyledKernel): full-cover status scrim with padding.             */
/* -------------------------------------------------------------------------- */
[part='top-state'] {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 2em;
  background: rgba(0, 0, 0, 0.65);
  display: none;
}

:host([data-active]) [part='top-state'] {
  display: block;
}

/* -------------------------------------------------------------------------- */
/* ContextMenu (StyledContextMenuContainer + items).                          */
/* Positioned at the pointer via the --playerstack-context-menu-x/-y custom    */
/* properties the element sets; shown when the host reflects data-open.        */
/* -------------------------------------------------------------------------- */
[part='context-menu'] {
  position: absolute;
  top: var(--playerstack-context-menu-y, 0);
  left: var(--playerstack-context-menu-x, 0);
  border-radius: 4px;
  background: rgba(15, 15, 15, 0.9);
  transition: all 0.1s;
  user-select: none;
  padding: 8px 0;
  z-index: 9999;
  color: #fff;
  font-size: 11px;
  line-height: 1.5;
  display: none;
}

:host([data-open]) [part='context-menu'] {
  display: block;
}

[part='context-menu-item'] {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  height: 40px;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 118%;
  cursor: pointer;
}

[part='context-menu-item']:hover {
  background: rgba(255, 255, 255, 0.1);
}

:host([data-fullscreen]) [part='context-menu-item'] {
  height: 49px;
}

/* -------------------------------------------------------------------------- */
/* Heatmap (StyledHeatmapContainer / StyledHeatmapSvg).                       */
/* Hidden (scaled to 0) until active; scales up from the bottom edge.          */
/* -------------------------------------------------------------------------- */
[part='heatmap'] {
  position: absolute;
  left: 0;
  bottom: 6px;
  width: 100%;
  height: 30px;
  pointer-events: none;
  z-index: 2;
  transform-origin: bottom center;
  opacity: 0;
  transform: scaleY(0);
  transition: opacity 0.25s ease-out, transform 0.25s ease-out;
}

:host([data-active]) [part='heatmap'] {
  opacity: 1;
  transform: scaleY(1);
}

:host([data-fullscreen]) [part='heatmap'] {
  height: 40px;
}

[part='heatmap-svg'] {
  display: block;
  width: 100%;
  height: 100%;
}

[part='heatmap-path'] {
  fill: none;
  stroke: rgba(255, 255, 255, 0.85);
  stroke-width: 2;
}

/* -------------------------------------------------------------------------- */
/* AdsOverlay (skip button/message + progress + click region).               */
/* Hidden until an ad is active; the skip button flushes to the right edge.   */
/* -------------------------------------------------------------------------- */
[part='ad-overlay'] {
  position: absolute;
  inset: 0;
  z-index: 9;
  pointer-events: none;
  display: none;
}

:host([data-active]) [part='ad-overlay'] {
  display: block;
}

/* Click-through region covers the ad area. */
[part='ad-click'] {
  position: absolute;
  inset: 0;
  cursor: pointer;
  pointer-events: auto;
}

/* Skip button (StyledSkipButton): 70x38 flush-right pill, no right border. */
[part='ad-skip-button'] {
  position: absolute;
  right: 0;
  bottom: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 70px;
  height: 38px;
  font-size: 15px;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 0;
  border-radius: 0;
  pointer-events: auto;
  cursor: pointer;
  white-space: nowrap;
  line-height: 1;
  text-shadow: none;
  transition: background 0.2s, border-color 0.2s;
}

[part='ad-skip-button']:hover:not([disabled]) {
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #fff;
  border-right: 0;
}

[part='ad-skip-button'][disabled] {
  cursor: default;
}

:host([data-fullscreen]) [part='ad-skip-button'] {
  width: 86px;
  height: 44px;
  bottom: 92px;
  font-size: 145%;
}

/* Ad progress bar (StyledAdTimeSliderWrapper / ad track). */
[part='ad-progress'] {
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 100%;
  height: 4px;
  background: #fc0;
  z-index: 9;
  transition: bottom 0.25s cubic-bezier(0.4, 0, 1, 1);
}

:host([data-fullscreen]) [part='ad-progress'] {
  bottom: 53px;
}

/* When the controls hide, the ad progress drops to the bottom edge. */
:host([data-hiding]) [part='ad-progress'] {
  bottom: -2px;
}

/* -------------------------------------------------------------------------- */
/* LiveAdOverlay animations (fadeIn/fadeOut + progress). The live-indicator     */
/* element reuses the ad-overlay in live mode; keep the fade keyframes here.    */
/* -------------------------------------------------------------------------- */
@keyframes playerstack-ad-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes playerstack-ad-fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* -------------------------------------------------------------------------- */
/* Double-tap skip overlay (SkipOverlay).                                     */
/* Two 55%-wide gesture zones with a directional gradient + pulsing arrows.   */
/* -------------------------------------------------------------------------- */
[part='double-tap'] {
  position: absolute;
  inset: 0;
  z-index: 8;
  pointer-events: none;
}

[part='double-tap-left'],
[part='double-tap-right'] {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 6;
  background: none;
  border: none;
  padding: 0;
  cursor: default;
  -webkit-tap-highlight-color: transparent;
}

[part='double-tap-left'] {
  left: 0;
}

[part='double-tap-right'] {
  right: 0;
}

/* Skip indicator (StyledSkipOverlay + text): centered feedback, hidden until active. */
[part='skip-indicator'] {
  position: absolute;
  top: 0;
  width: 55%;
  height: 100%;
  z-index: 8;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  font-size: 12px;
  color: #ccc;
}

:host([data-active]) [part='skip-indicator'] {
  display: flex;
}

/* Direction gradient (SkipOverlay \`direction\`). */
:host([data-direction='forward']) [part='skip-indicator'] {
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%);
}

:host([data-direction='backward']) [part='skip-indicator'] {
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%);
}

/* Double-tap arrow pulse (seekFade keyframes). */
@keyframes playerstack-seek-fade {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

/* -------------------------------------------------------------------------- */
/* Icon primitive (playerstack-icon wrapper + Icon component).               */
/* -------------------------------------------------------------------------- */
[part='icon'] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
}

[part='icon'] svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

/* -------------------------------------------------------------------------- */
/* Audio controls cluster (playerstack-audio-controls).                       */
/* A tight horizontal row: play/pause, time read-out, progress/seek bar.      */
/* -------------------------------------------------------------------------- */
[part='audio-controls'] {
  display: flex;
  align-items: center;
  gap: var(--playerstack-space-sm, 8px);
  padding: var(--playerstack-space-sm, 8px) var(--playerstack-space-md, 12px);
  width: 100%;
  background: var(--playerstack-color-control-bg, rgba(0, 0, 0, 0.55));
}

[part='audio-controls'] [part='slider'] {
  flex: 1;
  position: relative;
  height: 4px;
  cursor: pointer;
}

[part='audio-controls'] [part='track'] {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
}

[part='audio-controls'] [part='track-fill'] {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #cb0e0b;
  border-radius: 1px;
}

/* -------------------------------------------------------------------------- */
/* Mobile skin (max-width: 575px) \u2014 same breakpoint as the reactjs mobile skin.*/
/* MobileTopBar / MobileBottomBar / MobileCenterControls / MobileSettingsPanel */
/* / MobileProgressBar visuals. Visibility is driven by data-hiding on the host*/
/* (mapped from the \`$visible\` interpolation).                                 */
/* -------------------------------------------------------------------------- */
@media (max-width: 575px) {
  /* Dark scrim behind mobile controls (StyledOverlay). */
  [part='mobile-overlay'] {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 5;
    opacity: 1;
    pointer-events: none;
    transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  }

  :host([data-hiding]) [part='mobile-overlay'] {
    opacity: 0;
  }

  /* Top bar (StyledMobileTopBar): top-right settings cluster. */
  [part='mobile-top-bar'] {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 7;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  }

  :host([data-hiding]) [part='mobile-top-bar'] {
    opacity: 0;
    pointer-events: none;
  }

  /* Center controls (StyledMobileCenterControls): centered play/prev/next. */
  [part='mobile-center-controls'] {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    z-index: 7;
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  }

  :host([data-hiding]) [part='mobile-center-controls'] {
    opacity: 0;
    pointer-events: none;
  }

  /* Mobile center play button (StyledMobilePlayButton): 56px. */
  [part='mobile-center-controls'] [part='play-button'] {
    width: 56px;
    height: 56px;
    background: none;
    border: none;
    opacity: 0.9;
  }

  /* Bottom bar (StyledMobileBottomBar): progress + time + fullscreen. */
  [part='mobile-bottom-bar'] {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 7;
    display: flex;
    align-items: center;
    padding: 0 16px 8px 16px;
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  }

  :host([data-hiding]) [part='mobile-bottom-bar'] {
    opacity: 0;
    pointer-events: none;
  }

  /* Mobile time read-out (StyledMobileTime). */
  [part='mobile-bottom-bar'] [part='time'] {
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
    flex-shrink: 0;
    height: auto;
    line-height: normal;
  }

  /* Mobile progress bar (MobileProgressBar): 2px track, red fill, 12px handle. */
  [part='mobile-bottom-bar'] [part='time-slider'],
  [part='mobile-progress'] {
    flex: 1;
    height: 20px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    touch-action: none;
  }

  [part='mobile-bottom-bar'] [part='track'],
  [part='mobile-progress'] [part='track'] {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 1px;
    top: 50%;
    transform: translateY(-50%);
  }

  [part='mobile-bottom-bar'] [part='track-buffered'],
  [part='mobile-progress'] [part='track-buffered'] {
    height: 2px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 1px;
  }

  [part='mobile-bottom-bar'] [part='track-fill'],
  [part='mobile-progress'] [part='track-fill'] {
    height: 2px;
    background: #cb0e0b;
    border-radius: 1px;
  }

  [part='mobile-bottom-bar'] [part='thumb'],
  [part='mobile-progress'] [part='thumb'] {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #cb0e0b;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 4;
  }

  /* Mobile settings panel (MobileSettingsPanel): full-surface sliding panel. */
  [part='mobile-settings-panel'] {
    position: absolute;
    z-index: 10;
    height: 100%;
    width: 100%;
    left: 50%;
    top: 50%;
    opacity: 0;
    transform: translate(-50%, -100%);
    pointer-events: none;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
    font-family: Helvetica, Arial, sans-serif;
  }

  :host([data-open]) [part='mobile-settings-panel'] {
    opacity: 1;
    transform: translate(-50%, -50%);
    pointer-events: auto;
  }
}

/* ========================================================================== */
/* Ported AUDIO skin styles (task 15.4, Req 22.2/22.3/22.4/22.5/22.10).       */
/*                                                                            */
/* These rules port the \`audio\` \`*.styled.js\`/\`*.styled.jsx\` visuals onto the */
/* Core Markup_Contract, keyed by \`[part]\` / \`:host([data-*])\`, for the       */
/* audio-relevant elements the migration composes (Table 22-A/22-B):          */
/* \`playerstack-audio-controls\`, \`playerstack-volume\`, \`playerstack-settings\`,*/
/* \`playerstack-chapters\`, \`playerstack-ad-overlay\`, \`playerstack-nav-buttons\`*/
/* plus the audio-skin metadata parts (\`poster\`, \`metadata\`, \`title\`,         */
/* \`artist\`) rendered around the Core controls by \`CoreAudioPlayerSkin\`.      */
/*                                                                            */
/* styled-components \`\${({ prop }) => ...}\` interpolations map to data-* /    */
/* CSS custom properties:                                                     */
/*   - $visible / $dragging (skip + volume + label reveal) -> hover/          */
/*     :host([data-*]) reveal (the interim bridge drives the same states).    */
/*   - $expanded (settings gear rotation) -> :host([data-open]).              */
/*   - $selected (submenu speed option) -> [part='submenu-item'][data-active].*/
/*   - $active (settings item)           -> [data-active].                    */
/* The audio skin's literal palette (\`#0f0f0f\`/\`#1a1a1a\`/\`rgba(20,20,20,.97)\` */
/* surfaces, \`#cb0e0b\`/\`rgba(204,54,43,*)\` accents, white fills) is kept      */
/* literal to preserve pixel Visual_Parity \u2014 those values carried no theme    */
/* token in the audio skin. Spacing/radius/font stack reuse the existing      */
/* \`--playerstack-*\` tokens where they map. \`scopedReset.js\`/\`resetStyles.js\` */
/* are SUPERSEDED by Core's \`:host { all: initial }\` reset + box-sizing       */
/* normalization above (Req 3.6) and are therefore NOT re-ported.             */
/* ========================================================================== */

/* -------------------------------------------------------------------------- */
/* Audio skin container (StyledAudioPlayerSkin + StyledAudioWrapper).         */
/* The audio player composes Core elements inside a \`playerstack-media-       */
/* controller\`; its host is the audio-skin surface: a dark rounded card with  */
/* a hairline border, a light \`#eee\` fg and a vertical column layout. The     */
/* wrapper's \`position: relative; width: 100%; overflow: visible\` also lands  */
/* on the host so tooltips/menus can escape the card. This refines the video  */
/* \`:host([part='root'])\` surface for the audio breakpoint via a dedicated    */
/* \`data-skin='audio'\` hook the skin reflects on the controller host.         */
/* -------------------------------------------------------------------------- */
:host([data-skin='audio']) {
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
  outline: none;
  font-family: var(
    --playerstack-font-family-base,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif
  );
}

/* -------------------------------------------------------------------------- */
/* Track metadata (Table 22-B): poster + title + artist rendered as audio-    */
/* skin presentational bits around the Core controls (CoreAudioPlayerSkin).   */
/* The audio skin shows the artwork as a rounded square with the title/artist */
/* stacked beside it; the title is the emphasized label and the artist the    */
/* dimmer secondary line (mirrors StyledMediaLabel / StyledMediaLabelPrefix   */
/* typography: 14px title at 0.9 opacity, dimmer artist).                     */
/* -------------------------------------------------------------------------- */
[part='poster'] {
  display: block;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.06);
}

[part='metadata'] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  gap: 2px;
  padding: 8px 12px;
}

[part='title'] {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

[part='artist'] {
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

/* -------------------------------------------------------------------------- */
/* Audio controls cluster (playerstack-audio-controls) \u2014 refined to match the */
/* audio skin's actual look (StyledControlsRow + StyledPlayButton + StyledTime */
/* + StyledTimeline* ). EXTENDS the base block from task 14.6 (does not        */
/* duplicate it): the row is an 8px/12px-padded flex line; the play/pause      */
/* button is a 36px transparent glyph button at 0.8 opacity lifting to 1 on    */
/* hover; the timeline is a 4px translucent rail with a WHITE played fill (the */
/* audio skin's \`StyledTimelineFilled\`/\`StyledChapterFilled\` are \`#fff\`, NOT   */
/* the video skin's \`#cb0e0b\`) and a lighter buffered range, thickening to 6px */
/* on hover of the track (StyledTimelineSegments hover).                       */
/* -------------------------------------------------------------------------- */
[part='audio-controls'] [part='play-button'] {
  width: 36px;
  height: 36px;
  min-width: 36px;
  padding: 0;
  background: transparent;
  color: #fff;
  opacity: 0.8;
  border-radius: 0;
  transition: opacity 0.15s ease;
}

[part='audio-controls'] [part='play-button']:hover {
  opacity: 1;
  background: transparent;
}

[part='audio-controls'] [part='play-button']:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

/* Time read-out (StyledTime): 13px tabular-nums, dim white, right-aligned. */
[part='audio-controls'] [part='time'] {
  height: auto;
  padding: 0;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  min-width: 48px;
  text-align: right;
  flex-shrink: 0;
  line-height: normal;
}

/* Timeline rail (StyledTimelineTrack/Segments): 4px translucent, 6px on hover. */
[part='audio-controls'] [part='slider'] {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  height: 18px;
  cursor: pointer;
}

[part='audio-controls'] [part='track'] {
  position: relative;
  top: auto;
  left: 0;
  right: 0;
  transform: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: height 0.1s ease;
}

[part='audio-controls'] [part='slider']:hover [part='track'] {
  height: 6px;
}

/* Buffered range (StyledTimelineBuffered): lighter translucent white. */
[part='audio-controls'] [part='track-buffered'] {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
}

/* Played fill (StyledTimelineFilled): WHITE for the audio skin (Visual_Parity). */
[part='audio-controls'] [part='track-fill'] {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
  border-radius: 4px;
}

/* Loading stripes (StyledLoadingStripes): animated diagonal shimmer over the  */
/* rail while the media is loading (mapped from the skin's loading state).      */
[part='audio-controls'] [part='loading-stripes'] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  pointer-events: none;
  background: repeating-linear-gradient(
    -60deg,
    transparent,
    transparent 3px,
    rgba(255, 255, 255, 0.15) 3px,
    rgba(255, 255, 255, 0.15) 6px
  );
  background-size: 200% 100%;
  animation: playerstack-audio-loading-stripes 1.5s linear infinite;
}

@keyframes playerstack-audio-loading-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 24px 0;
  }
}

/* -------------------------------------------------------------------------- */
/* Audio tooltip (StyledAudioTooltip + StyledTooltipChapter/StyledTooltipTime)*/
/* A pointer-anchored stack that surfaces the hovered chapter + time above the */
/* timeline. Chapter line is dim/small; time line is white tabular-nums.       */
/* -------------------------------------------------------------------------- */
[part='audio-controls'] [part='tooltip'] {
  position: absolute;
  bottom: calc(100% - 16px);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;
  white-space: nowrap;
  pointer-events: none;
  z-index: 9999;
}

[part='audio-controls'] [part='tooltip-chapter'] {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
}

[part='audio-controls'] [part='tooltip-time'] {
  font-size: 12px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
}

/* Chapter segment hover pop (StyledChapterSegment \`$hovered\` -> scaleY(1.5)). */
[part='audio-controls'] [part='chapter-segment'] {
  position: relative;
  height: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transform-origin: center center;
  transform: scaleY(1);
  transition: transform 0.1s ease;
}

[part='audio-controls'] [part='chapter-segment'][data-hovered] {
  transform: scaleY(1.5);
}

/* -------------------------------------------------------------------------- */
/* Volume (StyledVolumeContainer + StyledVolumeSliderWrapper + track/fill/     */
/* thumb + tooltip). The audio skin reveals an 80px slider on hover of the     */
/* volume container (or while dragging); the rail is a 4px translucent bar     */
/* inset 6px with a white fill and a 12px white thumb. This refines the video  */
/* volume block for the audio look via the \`:host([data-skin='audio'])\` hook   */
/* so the video hover-to-expand width/height stays intact for video skins.     */
/* -------------------------------------------------------------------------- */
:host([data-skin='audio']) [part='volume'] {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: auto;
  overflow: hidden;
  max-width: 0;
  opacity: 0;
  transition: max-width 0.25s ease, opacity 0.25s ease;
}

/* Reveal on hover of the volume region or while dragging (StyledVolumeSlider- */
/* Wrapper \`$dragging\` + container hover). */
:host([data-skin='audio']) [part='volume']:hover,
:host([data-skin='audio'][data-volume-sliding]) [part='volume'],
:host([data-skin='audio']) [part='mute-button']:hover ~ [part='volume'] {
  max-width: 80px;
  opacity: 1;
}

:host([data-skin='audio']) [part='volume'] [part='slider'] {
  position: relative;
  width: 80px;
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
}

/* Rail (StyledVolumeTrack::after): 4px translucent bar inset 6px each side. */
:host([data-skin='audio']) [part='volume'] [part='track'] {
  position: absolute;
  left: 6px;
  right: 6px;
  top: 50%;
  width: auto;
  height: 4px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
}

/* Fill (StyledVolumeFill): white 4px bar. */
:host([data-skin='audio']) [part='volume'] [part='track-fill'] {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
  border-radius: 2px;
  pointer-events: none;
}

/* Thumb (StyledVolumeThumb): 12px white circle with a soft shadow. */
:host([data-skin='audio']) [part='volume'] [part='thumb'] {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  transform: translateY(-50%);
  pointer-events: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
}

/* Volume percent tooltip (StyledVolumeTooltip). */
:host([data-skin='audio']) [part='volume-tooltip'] {
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
}

/* -------------------------------------------------------------------------- */
/* Right-hand controls row (StyledRightControls): the icon-button cluster      */
/* flushed to the right edge; its buttons are the 28px compact variant.        */
/* -------------------------------------------------------------------------- */
:host([data-skin='audio']) [part='right-controls'] {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: auto;
  margin-right: -4px;
}

:host([data-skin='audio']) [part='right-controls'] > button {
  width: 28px;
  height: 28px;
}

/* Icon buttons (StyledIconButton / StyledSkipButton): 36px transparent glyph  */
/* buttons at 0.8 opacity lifting to 1 on hover, white focus ring.             */
:host([data-skin='audio']) [part='right-controls'] button,
:host([data-skin='audio']) [part='nav-buttons'] button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  padding: 0;
  opacity: 0.8;
  transition: opacity 0.15s ease;
}

:host([data-skin='audio']) [part='right-controls'] button:hover,
:host([data-skin='audio']) [part='nav-buttons'] button:hover {
  opacity: 1;
  background: transparent;
}

:host([data-skin='audio']) [part='right-controls'] button:focus-visible,
:host([data-skin='audio']) [part='nav-buttons'] button:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

/* Skip buttons expand from 0 width when playing (StyledSkipButtonWrapper      */
/* \`$visible\`): the audio skin reveals the prev/next affordance while playing. */
/* Mapped to \`:host([data-playing])\`; the wrapper stays collapsed otherwise.   */
:host([data-skin='audio']) [part='nav-buttons'] {
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  max-width: 0;
  opacity: 0;
  transition: max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
}

:host([data-skin='audio'][data-playing]) [part='nav-buttons'] {
  max-width: 72px;
  opacity: 1;
}

:host([data-skin='audio']) [part='nav-buttons'] [part='prev-button'],
:host([data-skin='audio']) [part='nav-buttons'] [part='next-button'] {
  width: 36px;
  height: 36px;
  min-width: 36px;
}

/* -------------------------------------------------------------------------- */
/* Settings (AudioSettingsMenu: StyledSettingsButton + menu/submenu).          */
/* The audio settings surface differs from the video dropdown: it is a         */
/* \`rgba(20,20,20,0.97)\` panel anchored bottom-right (55px above the row),     */
/* 250px wide, with 48px rows and a submenu whose speed options highlight in   */
/* the audio-skin red (\`rgba(204,54,43,0.4)\`). This refines the shared         */
/* settings block for the audio look via \`:host([data-skin='audio'])\`.         */
/* -------------------------------------------------------------------------- */

/* Gear button rotation on open (StyledSettingsButton \`$expanded\` -> rotate45).*/
:host([data-skin='audio']) [part='settings-button'] {
  width: 36px;
  height: 36px;
  padding: 0;
  background: transparent;
  color: #fff;
  opacity: 0.8;
  border-radius: 0;
  transition: opacity 0.15s ease;
}

:host([data-skin='audio']) [part='settings-button']:hover {
  opacity: 1;
  background: transparent;
}

:host([data-skin='audio']) [part='settings-button'] .icon,
:host([data-skin='audio']) [part='settings-button'] svg {
  transition: transform 0.2s ease-in-out;
  transform: rotate(0);
}

:host([data-skin='audio'][data-open]) [part='settings-button'] .icon,
:host([data-skin='audio'][data-open]) [part='settings-button'] svg {
  transform: rotate(45deg);
}

/* Menu + submenu overlays (StyledMenuOverlay / StyledSubMenuOverlay): dark     */
/* translucent panels anchored bottom-right, 250px wide, shown on data-open.    */
:host([data-skin='audio']) [part='menu'],
:host([data-skin='audio']) [part='submenu'] {
  position: absolute;
  right: 8px;
  bottom: 55px;
  min-width: 250px;
  width: 250px;
  margin-bottom: 0;
  padding: 10px 0;
  background: rgba(20, 20, 20, 0.97);
  border: none;
  border-radius: 0;
  overflow: hidden;
  color: #eee;
  line-height: 1.4;
  z-index: 99999;
  display: none;
}

/* Submenu is a scrollable speed list (max-height 250px). */
:host([data-skin='audio']) [part='submenu'] {
  max-height: 250px;
  overflow-y: auto;
}

:host([data-skin='audio'][data-open]) [part='menu'] {
  display: block;
}

/* Menu rows (StyledMenuItem > button): 48px tall, 24px inset, hover highlight. */
:host([data-skin='audio']) [part='menu-item'] {
  height: 48px;
  padding: 0 24px;
  background: transparent;
  color: #eee;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  border-radius: 0;
}

:host([data-skin='audio']) [part='menu-item']:hover,
:host([data-skin='audio']) [part='menu-item']:focus {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Submenu rows (StyledSubMenuItem > button): 32px pill rows, 10px gutter,      */
/* selected speed highlighted in the audio-skin red. */
:host([data-skin='audio']) [part='submenu-item'] {
  height: 32px;
  margin: 0 10px;
  padding: 0 12px;
  width: auto;
  background: transparent;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
  border-radius: 6px;
}

:host([data-skin='audio']) [part='submenu-item']:hover,
:host([data-skin='audio']) [part='submenu-item']:focus {
  background: rgba(255, 255, 255, 0.08);
}

:host([data-skin='audio']) [part='submenu-item'][data-active] {
  background: rgba(204, 54, 43, 0.4);
}

:host([data-skin='audio']) [part='submenu-item'][data-active]:hover,
:host([data-skin='audio']) [part='submenu-item'][data-active]:focus {
  background: rgba(204, 54, 43, 0.5);
}

/* -------------------------------------------------------------------------- */
/* Chapters read-out (playerstack-chapters) \u2014 the audio skin surfaces the      */
/* active chapter title as a dim inline label; inherits the shared             */
/* \`[part='chapters']\`/\`[part='chapter-title']\` typography from the video port */
/* (dim white, 13px). No audio-specific override is needed beyond the base.    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Ad overlay (playerstack-ad-overlay) in the audio skin \u2014 inherits the shared */
/* \`[part='ad-overlay']\`/\`[part='ad-skip-button']\`/\`[part='ad-progress']\`      */
/* visuals from the video port (skip pill + progress bar), which already match */
/* the audio skin's ad affordance. No audio-specific override needed.          */
/* -------------------------------------------------------------------------- */
`,xr="data-playerstack-styles",Er="data-playerstack-tokens",Gt=null;function Cr(){return`${Ga}
${Pr(wr,":host")}`}function Ja(){return typeof CSSStyleSheet!="undefined"&&"replaceSync"in CSSStyleSheet.prototype}function Za(e){if(Gt===null){let t=new CSSStyleSheet;t.replaceSync(e!=null?e:Cr()),Gt=t}return Gt}function es(e){if(e.querySelector(`style[${xr}]`)!==null)return;let t=document.createElement("style");t.setAttribute(xr,""),t.textContent=Cr(),e.appendChild(t)}function _r(e){if(Ja()){let t=Za();e.adoptedStyleSheets.includes(t)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,t]);return}typeof ShadowRoot!="undefined"&&e instanceof ShadowRoot&&es(e)}function Tr(e=document){var n;if(e.querySelector(`style[${Er}]`)!==null)return;let t=e.createElement("style");t.setAttribute(Er,""),t.textContent=Pr(wr,":root"),((n=e.head)!=null?n:e.documentElement).appendChild(t)}var ts="data-";function ns(e){let t=e.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`);return`${ts}${t}`}function Rr(e){let t={};for(let n of Object.keys(e)){let r=e[n],i=ns(n);t[i]=r===null?null:JSON.stringify(r)}return t}An();Dn();On();vt();Bn();xt();Pt();Jn();er();Ht();kn();nr();ut();var Jt={string:"",number:0,boolean:!1};function rs(e,t){switch(t){case"boolean":return e!==null;case"number":{if(e===null)return Jt.number;let n=Number(e);return Number.isNaN(n)?Jt.number:n}case"string":default:return e!=null?e:Jt.string}}var tn="playerstack-context-request";function is(e,t){let n={callback:t};e.dispatchEvent(new CustomEvent(tn,{detail:n,bubbles:!0,composed:!0}))}function as(e,t){let n=r=>{let{detail:i}=r;i.callback(t),r.stopPropagation()};return e.addEventListener(tn,n),()=>{e.removeEventListener(tn,n)}}var j=class extends HTMLElement{constructor(){super(),c(this,"root"),c(this,"_store",null),c(this,"_disposers",[]),this.root=this.attachShadow({mode:"open"})}static get observedAttributes(){let e=this.attributeSchema;return Object.keys(e).map(t=>{var n,r;return(r=(n=e[t])==null?void 0:n.attribute)!=null?r:t})}connectedCallback(){_r(this.root),is(this,e=>{this._store=e.store;let t=e.store.subscribe(n=>this.onStoreChange(n));this.addDisposer(t)}),this.render()}disconnectedCallback(){for(let e of this._disposers)e();this._disposers=[],this._store=null}attributeChangedCallback(e,t,n){let r=this.constructor.attributeSchema,i=Object.keys(r).find(o=>{var l,h;return((h=(l=r[o])==null?void 0:l.attribute)!=null?h:o)===e});if(i===void 0)return;let a=r[i];if(a===void 0)return;let s=rs(n,a.type);this.onAttributeChanged(i,s)}onAttributeChanged(e,t){}onStoreChange(e){}reflectState(e){let t=Rr(e);for(let n of Object.keys(t)){let r=t[n];r==null?this.removeAttribute(n):this.setAttribute(n,r)}}addDisposer(e){this._disposers.push(e)}dispatchRequest(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}get store(){return this._store}};c(j,"attributeSchema",{});function ss(e){let t={...U,...e},n=new Set;return{getState(){return t},set(r){t={...t,...r};for(let i of[...n])i(t)},subscribe(r){return n.add(r),()=>{n.delete(r)}}}}var os=["play","pause","stop","load","seekTo","setVolume","mute","unmute","setPlaybackRate","getDuration","getCurrentTime","getSecondsLoaded"];function ls(e){if(e===null||typeof e!="object")throw new Error(`PlayerAdapter must be a non-null object but received ${e===null?"null":typeof e}.`);let t=e,n=[];for(let r of os)typeof t[r]!="function"&&n.push(r);if(n.length>0){let r=n.length===1?"method":"methods",i=n.map(a=>`"${a}"`).join(", ");throw new Error(`PlayerAdapter is missing required ${r}: ${i}.`)}}var us=class{constructor(e){c(this,"config"),c(this,"requestListeners",new Map),c(this,"orchestratorListeners",[]),ls(e.adapter),this.config=e,this.wireRequestEvents(),this.wireOrchestratorEvents()}wireRequestEvents(){let{adapter:e,rootTarget:t}=this.config,n={"playerstack-play-request":()=>e.play(),"playerstack-pause-request":()=>e.pause(),"playerstack-seek-request":r=>{let i=r.detail;!i||typeof i.time!="number"||e.seekTo(i.time,i.keepPlaying)},"playerstack-volume-request":r=>{let i=r.detail;!i||typeof i.volume!="number"||e.setVolume(i.volume)},"playerstack-mute-request":()=>e.mute(),"playerstack-unmute-request":()=>e.unmute(),"playerstack-rate-request":r=>{let i=r.detail;!i||typeof i.rate!="number"||e.setPlaybackRate(i.rate)},"playerstack-load-request":r=>{let i=r.detail;!i||typeof i.url!="string"||e.load(i.url,i.isReady)}};Object.keys(n).forEach(r=>{let i=n[r];this.requestListeners.set(r,i),t.addEventListener(r,i)})}wireOrchestratorEvents(){let{store:e}=this.config;this.subscribe("progress",t=>{e.set({played:t.played,loaded:t.loaded,seek:t.playedSeconds,bufferedRanges:t.bufferedRanges})}),this.subscribe("duration",t=>e.set({duration:t})),this.subscribe("ready",()=>e.set({isLoading:!1})),this.subscribe("play",()=>e.set({playing:!0,isEnded:!1})),this.subscribe("pause",()=>e.set({playing:!1})),this.subscribe("ended",()=>e.set({isEnded:!0,playing:!1})),this.subscribe("error",t=>e.set({kernelError:t})),this.subscribe("seek",t=>e.set({seek:t})),this.subscribe("loading",t=>e.set({isLoading:t})),this.subscribe("liveEnded",()=>{})}subscribe(e,t){this.config.orchestrator.on(e,t),this.orchestratorListeners.push([e,t])}destroy(){let{rootTarget:e,orchestrator:t}=this.config;this.requestListeners.forEach((r,i)=>{e.removeEventListener(i,r)}),this.requestListeners.clear();let n=t;this.orchestratorListeners.forEach(r=>{this.unsubscribe(n,r)}),this.orchestratorListeners.length=0,t.destroy()}unsubscribe(e,[t,n]){e.off(t,n)}},cs=class extends j{constructor(){super(...arguments),c(this,"mediaStore",ss()),c(this,"controller",null)}connectedCallback(){let e=as(this,{store:this.mediaStore});this.addDisposer(e),Tr(),super.connectedCallback()}disconnectedCallback(){this.controller!==null&&(this.controller.destroy(),this.controller=null),super.disconnectedCallback()}attachController({adapter:e,orchestrator:t}){this.controller!==null&&this.controller.destroy(),this.controller=new us({adapter:e,store:this.mediaStore,rootTarget:this,orchestrator:t})}get store(){return this.mediaStore}render(){if(this.root.querySelector('[part="root"]')!==null)return;let e=document.createElement("div");e.setAttribute("part","root");let t=document.createElement("div");t.setAttribute("part","media");let n=document.createElement("div");n.setAttribute("part","controls");let r=document.createElement("slot");n.appendChild(r),e.appendChild(t),e.appendChild(n),this.root.appendChild(e)}},ds="Play",Or=class extends j{constructor(){super(...arguments),c(this,"playing",!1),c(this,"button",null)}onStoreChange(e){this.playing=e.playing,this.reflectState({playing:e.playing})}render(){var i;if(this.button!==null)return;let e=document.createElement("button");e.setAttribute("part","play-button"),e.setAttribute("type","button"),e.setAttribute("aria-label",(i=this.getAttribute("aria-label"))!=null?i:ds);let t=document.createElement("span");t.className="icon icon-play";let n=document.createElement("span");n.className="icon icon-pause",e.appendChild(t),e.appendChild(n);let r=()=>{this.playing?this.dispatchRequest("playerstack-pause-request"):this.dispatchRequest("playerstack-play-request")};e.addEventListener("click",r),this.addDisposer(()=>e.removeEventListener("click",r)),this.button=e,this.root.appendChild(e)}};c(Or,"attributeSchema",{label:{attribute:"aria-label",type:"string"}});var ps="Fullscreen",qr=class extends j{constructor(){super(...arguments),c(this,"fullscreen",!1),c(this,"button",null)}onStoreChange(e){this.fullscreen=e.isFullScreen,this.reflectState({fullscreen:e.isFullScreen})}render(){var i;if(this.button!==null)return;let e=document.createElement("button");e.setAttribute("part","fullscreen-button"),e.setAttribute("type","button"),e.setAttribute("aria-label",(i=this.getAttribute("aria-label"))!=null?i:ps);let t=document.createElement("span");t.className="icon icon-enter-fullscreen";let n=document.createElement("span");n.className="icon icon-exit-fullscreen",e.appendChild(t),e.appendChild(n);let r=()=>{this.fullscreen?this.dispatchRequest("playerstack-exit-fullscreen-request"):this.dispatchRequest("playerstack-enter-fullscreen-request")};e.addEventListener("click",r),this.addDisposer(()=>e.removeEventListener("click",r)),this.button=e,this.root.appendChild(e)}};c(qr,"attributeSchema",{label:{attribute:"aria-label",type:"string"}});var hs="Picture in Picture",Ir=class extends j{constructor(){super(...arguments),c(this,"pip",!1),c(this,"button",null)}onStoreChange(e){this.pip=e.isPIP,this.reflectState({pip:e.isPIP})}render(){var i;if(this.button!==null)return;let e=document.createElement("button");e.setAttribute("part","pip-button"),e.setAttribute("type","button"),e.setAttribute("aria-label",(i=this.getAttribute("aria-label"))!=null?i:hs);let t=document.createElement("span");t.className="icon icon-enter-pip";let n=document.createElement("span");n.className="icon icon-exit-pip",e.appendChild(t),e.appendChild(n);let r=()=>{this.pip?this.dispatchRequest("playerstack-exit-pip-request"):this.dispatchRequest("playerstack-enter-pip-request")};e.addEventListener("click",r),this.addDisposer(()=>e.removeEventListener("click",r)),this.button=e,this.root.appendChild(e)}};c(Ir,"attributeSchema",{label:{attribute:"aria-label",type:"string"}});var fs="Mute",Mr=class extends j{constructor(){super(...arguments),c(this,"muted",!1),c(this,"volume",0),c(this,"muteButton",null),c(this,"trackFill",null)}onStoreChange(e){this.muted=e.isMuted,this.volume=e.volume,this.reflectState({muted:e.isMuted}),this.updateFill()}updateFill(){if(this.trackFill===null)return;let e=Ut(this.volume*100,100);this.trackFill.style.width=`${e}%`}render(){var f;if(this.muteButton!==null)return;let e=document.createElement("button");e.setAttribute("part","mute-button"),e.setAttribute("type","button"),e.setAttribute("aria-label",(f=this.getAttribute("aria-label"))!=null?f:fs);let t=document.createElement("span");t.className="icon icon-volume";let n=document.createElement("span");n.className="icon icon-muted",e.appendChild(t),e.appendChild(n);let r=()=>{this.muted?this.dispatchRequest("playerstack-unmute-request"):this.dispatchRequest("playerstack-mute-request")};e.addEventListener("click",r),this.addDisposer(()=>e.removeEventListener("click",r));let i=document.createElement("div");i.setAttribute("part","volume");let a=document.createElement("div");a.setAttribute("part","slider");let s=document.createElement("div");s.setAttribute("part","track");let o=document.createElement("div");o.setAttribute("part","track-fill");let l=document.createElement("div");l.setAttribute("part","thumb"),s.appendChild(o),a.appendChild(s),a.appendChild(l),i.appendChild(a);let h=E=>{let m=s.getBoundingClientRect();if(m.width<=0)return;let b=E.clientX-m.left,v=Ut(b,m.width)/100;this.dispatchRequest("playerstack-volume-request",{volume:v})};a.addEventListener("click",h),this.addDisposer(()=>a.removeEventListener("click",h)),this.muteButton=e,this.trackFill=o,this.root.appendChild(e),this.root.appendChild(i),this.updateFill()}};c(Mr,"attributeSchema",{label:{attribute:"aria-label",type:"string"}});var ms="Seek",Br=class extends j{constructor(){super(...arguments),c(this,"duration",0),c(this,"seek",0),c(this,"loaded",0),c(this,"_spriteData",null),c(this,"slider",null),c(this,"trackFill",null),c(this,"trackBuffered",null),c(this,"tooltip",null),c(this,"timelens",null)}set spriteData(e){this._spriteData=e,e===null&&this.timelens!==null&&(this.timelens.style.display="none")}get spriteData(){return this._spriteData}onStoreChange(e){this.duration=e.duration,this.seek=e.seek,this.loaded=e.loaded,this.updateFills()}updateFills(){let e=this.duration>0?this.seek/this.duration:0,t=this.duration>0?this.loaded/this.duration:0;this.trackFill!==null&&(this.trackFill.style.width=`${this.clampFraction(e)*100}%`),this.trackBuffered!==null&&(this.trackBuffered.style.width=`${this.clampFraction(t)*100}%`)}clampFraction(e){return e<0?0:e>1?1:e}render(){var E;if(this.slider!==null)return;let e=document.createElement("div");e.setAttribute("part","time-slider");let t=document.createElement("div");t.setAttribute("part","slider"),t.setAttribute("aria-label",(E=this.getAttribute("aria-label"))!=null?E:ms);let n=document.createElement("div");n.setAttribute("part","track");let r=document.createElement("div");r.setAttribute("part","track-buffered");let i=document.createElement("div");i.setAttribute("part","track-fill");let a=document.createElement("div");a.setAttribute("part","thumb"),n.appendChild(r),n.appendChild(i),t.appendChild(n),t.appendChild(a);let s=document.createElement("div");s.setAttribute("part","tooltip");let o=document.createElement("div");o.setAttribute("part","timelens"),o.style.display="none",e.appendChild(t),e.appendChild(s),e.appendChild(o);let l=m=>{let b=n.getBoundingClientRect();if(b.width<=0)return;let v=Ze(m.clientX,b,this.duration);this.positionHover(m.clientX,b,v)};t.addEventListener("pointermove",l),this.addDisposer(()=>t.removeEventListener("pointermove",l));let h=()=>{s.style.display="none",o.style.display="none"};t.addEventListener("pointerleave",h),this.addDisposer(()=>t.removeEventListener("pointerleave",h));let f=m=>{let b=n.getBoundingClientRect();if(b.width<=0)return;let v=Ze(m.clientX,b,this.duration);this.dispatchRequest("playerstack-seek-request",{time:v})};t.addEventListener("pointerup",f),this.addDisposer(()=>t.removeEventListener("pointerup",f)),this.slider=t,this.trackFill=i,this.trackBuffered=r,this.tooltip=s,this.timelens=o,this.root.appendChild(e),this.updateFills()}positionHover(e,t,n){if(this.tooltip!==null){let s=e-t.left;this.tooltip.style.display="block",this.tooltip.style.left=`${s}px`,this.tooltip.textContent=le(n)}if(this.timelens===null||this._spriteData===null)return;let r={width:this.timelens.offsetWidth,height:this.timelens.offsetHeight},i=Rn(this._spriteData.cues,n,r,this._spriteData.sheetSizes);if(i===null){this.timelens.style.display="none";return}let a=e-t.left;this.timelens.style.display="block",this.timelens.style.left=`${a}px`,this.timelens.style.backgroundImage=`url(${i.file})`,this.timelens.style.backgroundSize=`${i.bgW}px ${i.bgH}px`,this.timelens.style.backgroundPosition=`${i.bgPosX}px ${i.bgPosY}px`}};c(Br,"attributeSchema",{label:{attribute:"aria-label",type:"string"},spriteVtt:{attribute:"sprite-vtt-file",type:"string"}});var gs=class extends j{constructor(){super(...arguments),c(this,"currentTimeSpan",null),c(this,"durationSpan",null)}onStoreChange(e){this.currentTimeSpan!==null&&(this.currentTimeSpan.textContent=le(e.seek)),this.durationSpan!==null&&(this.durationSpan.textContent=le(e.duration))}render(){var a;if(this.currentTimeSpan!==null)return;let e=document.createElement("div");e.setAttribute("part","time");let t=document.createElement("span");t.setAttribute("part","current-time"),t.textContent=le(0);let n=document.createElement("span");n.setAttribute("aria-hidden","true"),n.textContent=" / ";let r=document.createElement("span");r.setAttribute("part","duration"),r.textContent=le(0),e.appendChild(t),e.appendChild(n),e.appendChild(r),this.currentTimeSpan=t,this.durationSpan=r,this.root.appendChild(e);let i=(a=this.store)==null?void 0:a.getState();i!==void 0&&(this.currentTimeSpan.textContent=le(i.seek),this.durationSpan.textContent=le(i.duration))}},bs="Settings",Ce="speed",Me="quality",Fr=class extends j{constructor(){super(...arguments),c(this,"_qualityOptions",[]),c(this,"_i18n",null),c(this,"uiState",{...be}),c(this,"settingsButton",null),c(this,"menu",null),c(this,"submenu",null),c(this,"playbackRate",1),c(this,"playbackQuality",null)}set qualityOptions(e){this._qualityOptions=Array.isArray(e)?e:[],this.rebuildMenu()}get qualityOptions(){return this._qualityOptions}set i18n(e){this._i18n=e,this.rebuildMenu()}get i18n(){return this._i18n}onStoreChange(e){this.playbackRate=e.playbackRate,this.playbackQuality=e.playbackQuality,this.reflectState({quality:e.playbackQuality}),this.markActiveOptions()}resolveI18n(){var e;return{...fe,...(e=this._i18n)!=null?e:{}}}buildOptions(){return Et({qualityOptions:this._qualityOptions,captionOptions:null,live:!1,adMode:!1,i18n:this.resolveI18n()})}toggleMenu(){let e=!this.uiState.generalMenu;this.uiState=e?{...be,generalMenu:!0}:{...be},this.reflectOpenState(),this.renderPanels()}openSubmenu(e){this.uiState={...be,generalMenu:!0,speed:e===Ce,quality:e===Me},this.renderPanels()}reflectOpenState(){this.uiState.generalMenu?this.setAttribute("data-open","true"):this.removeAttribute("data-open")}selectOption(e,t){e===Ce?this.dispatchRequest("playerstack-rate-request",{rate:Number(t)}):this.dispatchRequest("playerstack-quality-request",{value:t}),this.uiState={...be},this.reflectOpenState(),this.renderPanels()}render(){var a;if(this.settingsButton!==null)return;let e=document.createElement("button");e.setAttribute("part","settings-button"),e.setAttribute("type","button"),e.setAttribute("aria-label",(a=this.getAttribute("aria-label"))!=null?a:bs);let t=document.createElement("span");t.className="icon icon-settings",e.appendChild(t);let n=()=>this.toggleMenu();e.addEventListener("click",n),this.addDisposer(()=>e.removeEventListener("click",n));let r=document.createElement("div");r.setAttribute("part","menu");let i=document.createElement("div");i.setAttribute("part","submenu"),this.settingsButton=e,this.menu=r,this.submenu=i,this.root.appendChild(e),this.root.appendChild(r),this.root.appendChild(i),this.reflectOpenState(),this.renderPanels()}rebuildMenu(){this.menu!==null&&this.renderPanels()}renderPanels(){var n;if(this.menu===null||this.submenu===null)return;let e=this.buildOptions();this.menu.replaceChildren();for(let r of e){let i=document.createElement("button");i.setAttribute("type","button"),i.setAttribute("part","menu-item"),i.setAttribute("data-category",r.value),i.textContent=r.label;let a=()=>{(r.value===Ce||r.value===Me)&&this.openSubmenu(r.value)};i.addEventListener("click",a),this.addDisposer(()=>i.removeEventListener("click",a)),this.menu.appendChild(i)}this.submenu.replaceChildren();let t=this.uiState.speed?Ce:this.uiState.quality?Me:null;if(t!==null){let r=e.find(a=>a.value===t),i=this.resolveI18n();for(let a of(n=r==null?void 0:r.options)!=null?n:[]){let s=document.createElement("button");s.setAttribute("type","button"),s.setAttribute("part","submenu-item"),s.setAttribute("data-value",a.value),s.textContent=Le({label:t,value:a.value,i18n:i});let o=()=>this.selectOption(t,a.value);s.addEventListener("click",o),this.addDisposer(()=>s.removeEventListener("click",o)),this.submenu.appendChild(s)}}this.markActiveOptions()}markActiveOptions(){var r;if(this.submenu===null)return;let e=this.uiState.speed?Ce:this.uiState.quality?Me:null,t=e===Ce?String(this.playbackRate):e===Me?String((r=this.playbackQuality)!=null?r:0):null;this.submenu.querySelectorAll('[part="submenu-item"]').forEach(i=>{let a=i;t!==null&&a.getAttribute("data-value")===t?a.setAttribute("data-active","true"):a.removeAttribute("data-active")})}};c(Fr,"attributeSchema",{label:{attribute:"aria-label",type:"string"}});var ys=class extends j{constructor(){super(...arguments),c(this,"cues",[]),c(this,"seek",0),c(this,"container",null),c(this,"cueRegion",null)}set captionsSrc(e){e===null?this.cues=[]:typeof e=="string"?this.cues=In(e):this.cues=e,this.updateActiveCue()}get captionsSrc(){return this.cues}selectCaption(e){this.dispatchRequest("playerstack-caption-request",{value:e})}onStoreChange(e){this.seek=e.seek,this.updateActiveCue()}updateActiveCue(){if(this.cueRegion===null)return;let e=Mn(this.cues,this.seek),t=e.map(n=>n.text).join(`
`);this.cueRegion.textContent=t,this.reflectState({active:e.length>0})}render(){var r;if(this.container!==null)return;let e=document.createElement("div");e.setAttribute("part","captions");let t=document.createElement("div");t.setAttribute("part","cue"),e.appendChild(t),this.container=e,this.cueRegion=t,this.root.appendChild(e);let n=(r=this.store)==null?void 0:r.getState();n!==void 0&&(this.seek=n.seek),this.updateActiveCue()}},vs=class extends j{constructor(){super(...arguments),c(this,"markers",[]),c(this,"segments",[]),c(this,"duration",0),c(this,"seek",0),c(this,"container",null),c(this,"titleRegion",null)}set chapters(e){this.markers=e!=null?e:[],this.recomputeSegments(),this.updateActiveChapter()}get chapters(){return this.markers}onStoreChange(e){e.duration!==this.duration&&(this.duration=e.duration,this.recomputeSegments()),this.seek=e.seek,this.updateActiveChapter()}recomputeSegments(){this.segments=Xn(this.markers,this.duration)}updateActiveChapter(){var t;if(this.titleRegion===null)return;let e=Gn(this.segments,this.seek);this.titleRegion.textContent=(t=e==null?void 0:e.title)!=null?t:"",this.reflectState({active:e!==null})}render(){var r;if(this.container!==null)return;let e=document.createElement("div");e.setAttribute("part","chapters");let t=document.createElement("div");t.setAttribute("part","chapter-title"),e.appendChild(t),this.container=e,this.titleRegion=t,this.root.appendChild(e);let n=(r=this.store)==null?void 0:r.getState();n!==void 0&&(this.duration=n.duration,this.seek=n.seek,this.recomputeSegments()),this.updateActiveChapter()}},Ar="http://www.w3.org/2000/svg",ks="0 0 100 100",Ss=class extends j{constructor(){super(...arguments),c(this,"data",[]),c(this,"duration",0),c(this,"container",null),c(this,"path",null)}set heatmapData(e){this.data=e!=null?e:[],this.updatePath()}get heatmapData(){return this.data}onStoreChange(e){e.duration!==this.duration&&(this.duration=e.duration,this.updatePath())}updatePath(){if(this.path===null)return;let e=Zn(this.data,this.duration);this.path.setAttribute("d",e),this.reflectState({active:e.length>0})}render(){var i;if(this.container!==null)return;let e=document.createElement("div");e.setAttribute("part","heatmap");let t=document.createElementNS(Ar,"svg");t.setAttribute("part","heatmap-svg"),t.setAttribute("viewBox",ks),t.setAttribute("preserveAspectRatio","none");let n=document.createElementNS(Ar,"path");n.setAttribute("part","heatmap-path"),t.appendChild(n),e.appendChild(t),this.container=e,this.path=n,this.root.appendChild(e);let r=(i=this.store)==null?void 0:i.getState();r!==void 0&&(this.duration=r.duration),this.updatePath()}},xs={loop:"Loop",pip:"Picture in Picture",fullscreen:"Fullscreen"},Zt=["loop","pip","fullscreen"],Es=class extends j{constructor(){super(...arguments),c(this,"_i18n",null),c(this,"loop",!1),c(this,"pip",!1),c(this,"fullscreen",!1),c(this,"open",!1),c(this,"menu",null),c(this,"items",{})}set i18n(e){this._i18n=e,this.applyLabels()}get i18n(){return this._i18n}onStoreChange(e){this.loop=e.loop,this.pip=e.isPIP,this.fullscreen=e.isFullScreen,this.reflectState({loop:e.loop,pip:e.isPIP,fullscreen:e.isFullScreen}),this.markActiveItems()}resolveLabel(e){var t,n;return(n=(t=this._i18n)==null?void 0:t[e])!=null?n:xs[e]}openAt(e){e.preventDefault(),this.open=!0,this.style.setProperty("--playerstack-context-menu-x",`${e.clientX}px`),this.style.setProperty("--playerstack-context-menu-y",`${e.clientY}px`),this.setAttribute("data-open","true")}close(){this.open&&(this.open=!1,this.removeAttribute("data-open"))}selectAction(e){e==="loop"?this.dispatchRequest("playerstack-loop-request",{loop:!this.loop}):e==="pip"?this.dispatchRequest(this.pip?"playerstack-exit-pip-request":"playerstack-enter-pip-request"):this.dispatchRequest(this.fullscreen?"playerstack-exit-fullscreen-request":"playerstack-enter-fullscreen-request"),this.close()}render(){var a;if(this.menu!==null)return;let e=document.createElement("div");e.setAttribute("part","context-menu"),e.setAttribute("role","menu");for(let s of Zt){let o=document.createElement("button");o.setAttribute("type","button"),o.setAttribute("part","context-menu-item"),o.setAttribute("role","menuitem"),o.setAttribute("data-action",s),o.textContent=this.resolveLabel(s);let l=()=>this.selectAction(s);o.addEventListener("click",l),this.addDisposer(()=>o.removeEventListener("click",l)),this.items[s]=o,e.appendChild(o)}this.menu=e,this.root.appendChild(e);let t=s=>this.openAt(s);this.addEventListener("contextmenu",t),this.addDisposer(()=>this.removeEventListener("contextmenu",t));let n=()=>this.close();document.addEventListener("click",n),this.addDisposer(()=>document.removeEventListener("click",n));let r=s=>{s.key==="Escape"&&this.close()};document.addEventListener("keydown",r),this.addDisposer(()=>document.removeEventListener("keydown",r));let i=(a=this.store)==null?void 0:a.getState();i!==void 0&&(this.loop=i.loop,this.pip=i.isPIP,this.fullscreen=i.isFullScreen),this.markActiveItems()}applyLabels(){for(let e of Zt){let t=this.items[e];t!==void 0&&(t.textContent=this.resolveLabel(e))}}markActiveItems(){let e={loop:this.loop,pip:this.pip,fullscreen:this.fullscreen};for(let t of Zt){let n=this.items[t];n!==void 0&&(e[t]?n.setAttribute("data-active","true"):n.removeAttribute("data-active"))}}},Ps=class extends j{constructor(){super(...arguments),c(this,"container",null)}onStoreChange(e){let t=e.isLoading||e.isBuffering;this.reflectState({loading:e.isLoading,buffering:e.isBuffering,active:t}),this.updateVisibility(t)}updateVisibility(e){this.container!==null&&(this.container.style.display=e?"flex":"none")}render(){var s;if(this.container!==null)return;let e="spinner",t=document.createElement("div");t.setAttribute("part",e);let n="spinner-indicator",r=document.createElement("span");r.setAttribute("part",n),r.className="icon icon-spinner",t.appendChild(r),this.container=t,this.root.appendChild(t);let i=(s=this.store)==null?void 0:s.getState(),a=i!==void 0?i.isLoading||i.isBuffering:!1;this.updateVisibility(a)}},ws="Play",Vr=class extends j{constructor(){super(...arguments),c(this,"playing",!1),c(this,"button",null)}onStoreChange(e){this.playing=e.playing,this.reflectState({playing:e.playing,ended:e.isEnded})}render(){var l;if(this.button!==null)return;let e="play-state",t=document.createElement("div");t.setAttribute("part",e);let n="play-state-button",r=document.createElement("button");r.setAttribute("part",n),r.setAttribute("type","button"),r.setAttribute("aria-label",(l=this.getAttribute("aria-label"))!=null?l:ws);let i=document.createElement("span");i.className="icon icon-play";let a=document.createElement("span");a.className="icon icon-pause";let s=document.createElement("span");s.className="icon icon-replay",r.appendChild(i),r.appendChild(a),r.appendChild(s);let o=()=>{this.playing?this.dispatchRequest("playerstack-pause-request"):this.dispatchRequest("playerstack-play-request")};r.addEventListener("click",o),this.addDisposer(()=>r.removeEventListener("click",o)),t.appendChild(r),this.button=r,this.root.appendChild(t)}};c(Vr,"attributeSchema",{label:{attribute:"aria-label",type:"string"}});var Lr="en",Nr=class extends j{constructor(){super(...arguments),c(this,"translations",de(Lr)),c(this,"hasError",!1),c(this,"container",null),c(this,"messageRegion",null)}onStoreChange(e){this.hasError=e.kernelError!==null&&e.kernelError!==void 0,this.updateMessage()}onAttributeChanged(e,t){e==="language"&&typeof t=="string"&&(this.translations=de(t),this.updateMessage())}updateMessage(){var t;if(this.messageRegion===null)return;let e=this.hasError&&(t=this.translations.playbackStuckClickResumePlayback)!=null?t:"";this.messageRegion.textContent=e,this.reflectState({active:e!==""})}render(){var a,s;if(this.container!==null)return;this.translations=de((a=this.getAttribute("language"))!=null?a:Lr);let e="top-state",t=document.createElement("div");t.setAttribute("part",e);let n="top-state-message",r=document.createElement("div");r.setAttribute("part",n),t.appendChild(r),this.container=t,this.messageRegion=r,this.root.appendChild(t);let i=(s=this.store)==null?void 0:s.getState();i!==void 0&&(this.hasError=i.kernelError!==null&&i.kernelError!==void 0),this.updateMessage()}};c(Nr,"attributeSchema",{language:{attribute:"language",type:"string"}});var Dr="en",Hr=class extends j{constructor(){super(...arguments),c(this,"translations",de(Dr)),c(this,"prevented",!1),c(this,"container",null),c(this,"messageRegion",null)}onStoreChange(e){this.prevented=e.kernelError!==null&&e.kernelError!==void 0,this.updateTip()}onAttributeChanged(e,t){e==="language"&&typeof t=="string"&&(this.translations=de(t),this.updateTip())}updateTip(){var e;this.messageRegion!==null&&(this.messageRegion.textContent=(e=this.translations.clickToUnmute)!=null?e:"",this.reflectState({active:this.prevented}))}render(){var a,s;if(this.container!==null)return;this.translations=de((a=this.getAttribute("language"))!=null?a:Dr);let e="prevented-tip",t=document.createElement("div");t.setAttribute("part",e);let n="prevented-tip-message",r=document.createElement("div");r.setAttribute("part",n),t.appendChild(r),this.container=t,this.messageRegion=r,this.root.appendChild(t);let i=(s=this.store)==null?void 0:s.getState();i!==void 0&&(this.prevented=i.kernelError!==null&&i.kernelError!==void 0),this.updateTip()}};c(Hr,"attributeSchema",{language:{attribute:"language",type:"string"}});var Cs="Play",zr=class extends j{constructor(){super(...arguments),c(this,"audioState",{...kt}),c(this,"button",null),c(this,"timeSpan",null),c(this,"trackFill",null)}onStoreChange(e){this.audioState={...this.audioState,playing:e.playing,seek:e.seek,duration:e.duration,volume:e.volume,isMuted:e.isMuted},this.reflectState({playing:e.playing}),this.updateTime(),this.updateFill()}updateTime(){this.timeSpan!==null&&(this.timeSpan.textContent=`${le(this.audioState.seek)} / ${le(this.audioState.duration)}`)}updateFill(){if(this.trackFill===null)return;let{seek:e,duration:t}=this.audioState,n=t>0?e/t:0,r=n<0?0:n>1?1:n;this.trackFill.style.width=`${r*100}%`}render(){var D,M;if(this.button!==null)return;let e="audio-controls",t=document.createElement("div");t.setAttribute("part",e);let n="play-button",r=document.createElement("button");r.setAttribute("part",n),r.setAttribute("type","button"),r.setAttribute("aria-label",(D=this.getAttribute("aria-label"))!=null?D:Cs);let i=document.createElement("span");i.className="icon icon-play";let a=document.createElement("span");a.className="icon icon-pause",r.appendChild(i),r.appendChild(a);let s=()=>{this.audioState.playing?this.dispatchRequest("playerstack-pause-request"):this.dispatchRequest("playerstack-play-request")};r.addEventListener("click",s),this.addDisposer(()=>r.removeEventListener("click",s));let o="time",l=document.createElement("span");l.setAttribute("part",o),l.textContent=`${le(0)} / ${le(0)}`;let h="slider",f=document.createElement("div");f.setAttribute("part",h);let E="track",m=document.createElement("div");m.setAttribute("part",E);let b="track-fill",v=document.createElement("div");v.setAttribute("part",b),m.appendChild(v),f.appendChild(m);let R=F=>{let N=m.getBoundingClientRect();if(N.width<=0)return;let P=Ze(F.clientX,N,this.audioState.duration);this.dispatchRequest("playerstack-seek-request",{time:P})};f.addEventListener("click",R),this.addDisposer(()=>f.removeEventListener("click",R)),t.appendChild(r),t.appendChild(l),t.appendChild(f),this.button=r,this.timeSpan=l,this.trackFill=v,this.root.appendChild(t);let I=(M=this.store)==null?void 0:M.getState();I!==void 0&&(this.audioState={...this.audioState,playing:I.playing,seek:I.seek,duration:I.duration,volume:I.volume,isMuted:I.isMuted},this.updateTime(),this.updateFill())}};c(zr,"attributeSchema",{label:{attribute:"aria-label",type:"string"}});var en="Skip ad",$r=class extends j{constructor(){super(...arguments),c(this,"controller",new Ln),c(this,"notifiedPlay",!1),c(this,"overlay",null),c(this,"skipButton",null),c(this,"progress",null)}set ads(e){this.notifiedPlay=!1,this.controller.configure(e)}onStoreChange(e){e.playing&&!this.notifiedPlay&&(this.notifiedPlay=!0,this.controller.notifyPlay()),this.controller.update(e.seek,e.duration,e.isEnded)}render(){var f;if(this.overlay!==null)return;let e="ad-overlay",t=document.createElement("div");t.setAttribute("part",e),t.style.display="none";let n="ad-click",r=document.createElement("div");r.setAttribute("part",n);let i=()=>{this.controller.onAdClick(),this.dispatchRequest("playerstack-ad-click")};r.addEventListener("click",i),this.addDisposer(()=>r.removeEventListener("click",i));let a="ad-progress",s=document.createElement("div");s.setAttribute("part",a),s.style.width="0%";let o="ad-skip-button",l=document.createElement("button");l.setAttribute("part",o),l.setAttribute("type","button"),l.setAttribute("aria-label",(f=this.getAttribute("aria-label"))!=null?f:en),l.disabled=!0;let h=()=>{this.controller.onSkip(),this.dispatchRequest("playerstack-ad-skip")};l.addEventListener("click",h),this.addDisposer(()=>l.removeEventListener("click",h)),t.appendChild(r),t.appendChild(s),t.appendChild(l),this.overlay=t,this.skipButton=l,this.progress=s,this.wireController(),this.root.appendChild(t)}wireController(){let e=()=>{this.overlay!==null&&(this.overlay.style.display=""),this.reflectState({active:!0})};this.controller.on("adActivated",e),this.addDisposer(()=>this.controller.off("adActivated",e));let t=a=>{if(this.progress!==null){let s=a.progress<0?0:a.progress>1?1:a.progress;this.progress.style.width=`${s*100}%`}this.updateSkip(a.canSkip,a.skipCountdown)};this.controller.on("adProgress",t),this.addDisposer(()=>this.controller.off("adProgress",t));let n=()=>{this.reflectState({skippable:!0})};this.controller.on("adSkippable",n),this.addDisposer(()=>this.controller.off("adSkippable",n));let r=a=>{this.reflectState({active:a.isAdActive,skippable:a.hasSkipTimer,canSkip:a.canSkip}),this.updateSkip(a.canSkip,a.skipCountdown)};this.controller.on("stateChange",r),this.addDisposer(()=>this.controller.off("stateChange",r));let i=()=>{this.overlay!==null&&(this.overlay.style.display="none"),this.reflectState({active:null,skippable:null,canSkip:null})};this.controller.on("adCompleted",i),this.addDisposer(()=>this.controller.off("adCompleted",i))}updateSkip(e,t){this.skipButton!==null&&(this.skipButton.disabled=!e,this.skipButton.textContent=e?en:`${en} (${t})`,this.reflectState({canSkip:e}))}disconnectedCallback(){this.controller.destroy(),super.disconnectedCallback()}};c($r,"attributeSchema",{label:{attribute:"aria-label",type:"string"}});var _s=class extends j{constructor(){super(...arguments),c(this,"indicator",null),c(this,"offset",null),c(this,"latestState",null)}set dvrState(e){this.latestState=e,this.applyState(e)}render(){if(this.indicator!==null){this.applyState(this.latestState);return}let e="live-indicator",t=document.createElement("div");t.setAttribute("part",e);let n="live-dot",r=document.createElement("span");r.setAttribute("part",n);let i="live-offset",a=document.createElement("span");a.setAttribute("part",i);let s=()=>this.seekToLive();t.addEventListener("click",s),this.addDisposer(()=>t.removeEventListener("click",s)),t.appendChild(r),t.appendChild(a),this.indicator=t,this.offset=a,this.root.appendChild(t),this.applyState(this.latestState)}applyState(e){if(e===null||!e.hasDVR){this.reflectState({live:null,atEdge:null}),this.offset!==null&&(this.offset.textContent="");return}this.reflectState({live:!0,atEdge:e.isAtLiveEdge}),this.offset!==null&&(this.offset.textContent=vn(e.liveEdgeOffset,e.isAtLiveEdge))}seekToLive(){let e=this.latestState;e===null||!e.hasDVR||e.isAtLiveEdge||this.dispatchRequest("playerstack-seek-request",{time:e.seekableEnd})}},Ts=class extends j{constructor(){super(...arguments),c(this,"controller",new gt),c(this,"skipIndicator",null)}set config(e){this.controller.destroy(),this.controller=new gt(e!=null?e:{}),this.wireController()}render(){if(this.skipIndicator!==null)return;let e="double-tap",t=document.createElement("div");t.setAttribute("part",e);let n="double-tap-left",r=document.createElement("div");r.setAttribute("part",n);let i=()=>this.controller.handleTapLeft();r.addEventListener("click",i),this.addDisposer(()=>r.removeEventListener("click",i));let a="double-tap-right",s=document.createElement("div");s.setAttribute("part",a);let o=()=>this.controller.handleTapRight();s.addEventListener("click",o),this.addDisposer(()=>s.removeEventListener("click",o));let l="skip-indicator",h=document.createElement("div");h.setAttribute("part",l),t.appendChild(r),t.appendChild(s),t.appendChild(h),this.skipIndicator=h,this.wireController(),this.root.appendChild(t)}wireController(){this.controller.setOnSeek(n=>{this.dispatchRequest("playerstack-seek-request",{time:n})});let e=n=>this.applySkipState(n);this.controller.on("skip",e),this.addDisposer(()=>this.controller.off("skip",e));let t=()=>{};this.controller.on("singleTap",t),this.addDisposer(()=>this.controller.off("singleTap",t))}onStoreChange(e){this.controller.setTimeInfo(e.seek,e.duration)}applySkipState(e){this.skipIndicator!==null&&(this.skipIndicator.textContent=e.visible?`${e.seconds}`:""),this.reflectState({active:e.visible?!0:null,direction:e.visible?e.direction:null})}disconnectedCallback(){this.controller.destroy(),super.disconnectedCallback()}};function Rs(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ur(e){return Object.keys(e).map(t=>` ${t}="${Rs(e[t])}"`).join("")}function jr(e){let{tag:t,attrs:n,children:r}=e,i=`<${t}${Ur(n)}`;if(r&&r.length>0){let a=r.map(jr).join("");return`${i}>${a}</${t}>`}return`${i}/>`}function As(e,t){let n={xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox};e.fill!==void 0&&(n.fill=e.fill),(t==null?void 0:t.width)!==void 0&&(n.width=t.width),(t==null?void 0:t.height)!==void 0&&(n.height=t.height);let r=e.elements.map(jr).join("");return`<svg${Ur(n)}>${r}</svg>`}var Yr=class extends j{constructor(){super(...arguments),c(this,"_icon",null),c(this,"_size",{}),c(this,"wrapper",null)}set icon(e){this._icon=e,this.paint()}get icon(){return this._icon}set size(e){this._size=e!=null?e:{},this.paint()}get size(){return this._size}onAttributeChanged(e,t){e!=="width"&&e!=="height"||(t==null||t===""?delete this._size[e]:this._size[e]=t,this.paint())}paint(){if(this.wrapper!==null){if(this._icon===null){this.wrapper.innerHTML="";return}this.wrapper.innerHTML=As(this._icon,this._size)}}render(){if(this.wrapper!==null)return;let e=document.createElement("span");e.setAttribute("part","icon"),this.wrapper=e,this.root.appendChild(e),this.paint()}};c(Yr,"attributeSchema",{width:{attribute:"width",type:"string"},height:{attribute:"height",type:"string"}});var Ls="Previous",Ds="Next",Kr=class extends j{constructor(){super(...arguments),c(this,"container",null)}render(){var o,l;if(this.container!==null)return;let e=document.createElement("div");e.setAttribute("part","nav-buttons");let t=document.createElement("button");t.setAttribute("part","prev-button"),t.setAttribute("type","button"),t.setAttribute("aria-label",(o=this.getAttribute("prev-label"))!=null?o:Ls);let n=document.createElement("span");n.className="icon icon-prev",t.appendChild(n);let r=document.createElement("button");r.setAttribute("part","next-button"),r.setAttribute("type","button"),r.setAttribute("aria-label",(l=this.getAttribute("next-label"))!=null?l:Ds);let i=document.createElement("span");i.className="icon icon-next",r.appendChild(i);let a=()=>this.dispatchRequest("playerstack-prev-request"),s=()=>this.dispatchRequest("playerstack-next-request");t.addEventListener("click",a),r.addEventListener("click",s),this.addDisposer(()=>t.removeEventListener("click",a)),this.addDisposer(()=>r.removeEventListener("click",s)),e.appendChild(t),e.appendChild(r),this.container=e,this.root.appendChild(e)}};c(Kr,"attributeSchema",{prevLabel:{attribute:"prev-label",type:"string"},nextLabel:{attribute:"next-label",type:"string"}});var Os=[{name:"playerstack-media-controller",ctor:cs},{name:"playerstack-play-button",ctor:Or},{name:"playerstack-volume",ctor:Mr},{name:"playerstack-time-slider",ctor:Br},{name:"playerstack-play-time",ctor:gs},{name:"playerstack-settings",ctor:Fr},{name:"playerstack-fullscreen-button",ctor:qr},{name:"playerstack-pip-button",ctor:Ir},{name:"playerstack-captions",ctor:ys},{name:"playerstack-chapters",ctor:vs},{name:"playerstack-heatmap",ctor:Ss},{name:"playerstack-context-menu",ctor:Es},{name:"playerstack-spinner",ctor:Ps},{name:"playerstack-play-state",ctor:Vr},{name:"playerstack-top-state",ctor:Nr},{name:"playerstack-prevented-tip",ctor:Hr},{name:"playerstack-audio-controls",ctor:zr},{name:"playerstack-ad-overlay",ctor:$r},{name:"playerstack-live-indicator",ctor:_s},{name:"playerstack-double-tap",ctor:Ts},{name:"playerstack-icon",ctor:Yr},{name:"playerstack-nav-buttons",ctor:Kr}];function Wr(e=globalThis.customElements,t=Os){for(let{name:n,ctor:r}of t)e.get(n)||e.define(n,r)}import{forwardRef as Ms,createElement as Bs,useRef as Jr,useMemo as Fs,useEffect as nn}from"react";var Qr=he(tt());import{useRef as qs}from"react";function Be(e){let t=qs(e);return(0,Qr.default)(e,t.current)||(t.current=e),t.current}var Xr="playerstack-";function Is(e){return`on${(e.startsWith(Xr)?e.slice(Xr.length):e).split("-").filter(Boolean).map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join("")}`}function Gr(e){return e.map(t=>({eventName:t,propName:Is(t)}))}function Zr(e){let{tagName:t,attributes:n,requestEvents:r}=e,i=new Set(n),a=Gr(r),s=new Set(a.map(l=>l.propName)),o=Ms(function(h,f){let{children:E,...m}=h,b=Jr(null),v={},R={},I={};for(let P of Object.keys(m)){let A=m[P];s.has(P)?I[P]=A:i.has(P)?v[P]=A:R[P]=A}let D=Be(v),M=Be(R),F=Jr(I);F.current=I,nn(()=>{let P=b.current;if(P)for(let A of Object.keys(D)){let O=D[A];rt.syncAttribute(P,A,O!=null?O:null)}},[D]),nn(()=>{let P=b.current;if(P)for(let A of Object.keys(M))rt.syncProperty(P,A,M[A])},[M]),nn(()=>{let P=b.current;if(!P||a.length===0)return;let A=a.map(({eventName:O,propName:X})=>rt.subscribe(P,O,H=>{let w=F.current[X];w&&w(H)}));return()=>{for(let O of A)O()}},[]);let N=Fs(()=>P=>{b.current=P,typeof f=="function"?f(P):f&&(f.current=P)},[f]);return Bs(t,{ref:N},E)});return o.displayName=`Playerstack(${t})`,o}function Vs(e){return e.split("-").filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}typeof window!="undefined"&&typeof window.customElements!="undefined"&&Wr();var W=Sr.reduce((e,t)=>(e[Vs(t.tagName)]=Zr(t),e),{}),ei=W.PlayerstackMediaController,ti=W.PlayerstackPlayButton,ni=W.PlayerstackVolume,ri=W.PlayerstackTimeSlider,ii=W.PlayerstackPlayTime,ai=W.PlayerstackSettings,si=W.PlayerstackFullscreenButton,Eu=W.PlayerstackPipButton,rn=W.PlayerstackCaptions,oi=W.PlayerstackChapters,li=W.PlayerstackHeatmap,ui=W.PlayerstackContextMenu,ci=W.PlayerstackSpinner,an=W.PlayerstackPlayState,di=W.PlayerstackTopState,pi=W.PlayerstackPreventedTip,Pu=W.PlayerstackAudioControls,hi=W.PlayerstackAdOverlay,fi=W.PlayerstackLiveIndicator,mi=W.PlayerstackDoubleTap,wu=W.PlayerstackIcon,sn=W.PlayerstackNavButtons;import Ns from"react";function gi({controllerRef:e,state:t}){let{currentTime:n,duration:r,loaded:i,bufferedRanges:a,playing:s,paused:o,muted:l,volume:h,playbackRate:f,playbackQuality:E,loop:m,pip:b,fullscreen:v,ended:R,seeking:I,loading:D,buffering:M,kernelMsg:F,activeCaption:N}=t,P=typeof s=="boolean"?s:o===!1;Ns.useEffect(()=>{let A=e.current,O=A==null?void 0:A.store;!O||typeof O.set!="function"||O.set({seek:n!=null?n:0,played:n!=null?n:0,loaded:i!=null?i:0,bufferedRanges:a!=null?a:[],duration:r!=null?r:0,playing:P,isMuted:l!=null?l:!1,volume:h!=null?h:0,playbackRate:f!=null?f:1,playbackQuality:E!=null?E:null,loop:m!=null?m:!1,isPIP:b!=null?b:!1,isFullScreen:v!=null?v:!1,isEnded:R!=null?R:!1,seeking:I!=null?I:!1,isLoading:D!=null?D:!1,isBuffering:M!=null?M:!1,kernelError:F!=null?F:null,activeCaption:N!=null?N:null})},[e,n,r,i,a,P,l,h,f,E,m,b,v,R,I,D,M,F,N])}var on=x.forwardRef((e,t)=>{let{live:n=!1,liveDVR:r=!1,loading:i,paused:a,ended:s,seeking:o,waiting:l,duration:h,bufferedRanges:f=[],currentTime:E,muted:m,volume:b,pip:v,fullscreen:R,qualities:I=[],captions:D,activeCaption:M,spriteVTTFile:F,chapters:N,heatmapData:P,playbackRate:A,playbackQuality:O,loop:X,language:H,ads:w=null,kernelMsg:S=null,skinMode:y,onPlayClick:L,onPauseClick:q,changePlaybackRate:G,changePlayBackQuality:d,changeVolume:_,onMutedClick:Q,changeCurrentTime:u,requestPictureInPicture:p,exitPictureInPicture:C,requestFullscreen:J,exitFullscreen:Z,onLoopClick:ie,onCaptionChange:ne,onPreventedClick:ke,onPrevious:_e,onNext:Se,showNavButtons:Te=!1}=e,hn=x.useRef(null);x.useImperativeHandle(t,()=>({showControls:()=>{},hideControls:()=>{},triggerAd:()=>{}}),[]);let Re=y==="mobile"||y!=="desktop"&&pt;gi({controllerRef:hn,state:{currentTime:E,duration:h,loaded:f.length>0?f[f.length-1].end:0,bufferedRanges:f,paused:a,muted:m,volume:b,playbackRate:A,playbackQuality:O,loop:X,pip:v,fullscreen:R,ended:s,seeking:o,loading:i,buffering:l,kernelMsg:S,activeCaption:M}});let st=x.useCallback(()=>L==null?void 0:L(),[L]),ot=x.useCallback(()=>q==null?void 0:q(),[q]),lt=x.useCallback(B=>{var ae;let oe=(ae=B==null?void 0:B.detail)==null?void 0:ae.time;typeof oe=="number"&&(u==null||u(oe))},[u]),Fi=x.useCallback(B=>{var ae;let oe=(ae=B==null?void 0:B.detail)==null?void 0:ae.volume;typeof oe=="number"&&(_==null||_(oe))},[_]),Vi=x.useCallback(()=>Q==null?void 0:Q(),[Q]),Ni=x.useCallback(()=>Q==null?void 0:Q(),[Q]),Hi=x.useCallback(B=>{var ae;let oe=(ae=B==null?void 0:B.detail)==null?void 0:ae.rate;typeof oe=="number"&&(G==null||G(oe))},[G]),zi=x.useCallback(B=>{var yn;let oe=(yn=B==null?void 0:B.detail)==null?void 0:yn.value,ae=Number(oe);d==null||d(Number.isNaN(ae)?0:ae)},[d]),fn=x.useCallback(()=>J==null?void 0:J(),[J]),mn=x.useCallback(()=>Z==null?void 0:Z(),[Z]),$i=x.useCallback(()=>p==null?void 0:p(),[p]),Ui=x.useCallback(()=>C==null?void 0:C(),[C]),ji=x.useCallback(()=>ie==null?void 0:ie(),[ie]),gn=x.useCallback(()=>_e==null?void 0:_e(),[_e]),bn=x.useCallback(()=>Se==null?void 0:Se(),[Se]),Yi=x.useCallback(B=>{var ae;let oe=(ae=B==null?void 0:B.detail)==null?void 0:ae.value;oe!==void 0&&(ne==null||ne(oe))},[ne]),Ki=x.useCallback(()=>{var B;return(B=w==null?void 0:w.onSkip)==null?void 0:B.call(w)},[w]),Wi=x.useCallback(()=>{var B;return(B=w==null?void 0:w.onAdClick)==null?void 0:B.call(w)},[w]),Qi=x.useMemo(()=>I.map(B=>({label:B.label,value:B.value,isFullHD:B.isFullHD})),[I]),Xi=x.useMemo(()=>F?{file:F}:null,[F]),Gi=!n||r,Ji=x.createElement(x.Fragment,null,D&&D.length>0&&x.createElement(rn,{captionsSrc:M?D:null,onCaptionRequest:Yi}),x.createElement(ai,{qualityOptions:Qi,i18n:H?{language:H}:null,onRateRequest:Hi,onQualityRequest:zi}),x.createElement(si,{onEnterFullscreenRequest:fn,onExitFullscreenRequest:mn}));return x.createElement(ei,{ref:hn,"data-skin-mode":Re?"mobile":"desktop"},x.createElement(pi,{language:H,onClick:ke}),x.createElement(ci,null),!Re&&x.createElement(an,{onPlayRequest:st,onPauseRequest:ot}),x.createElement(di,{language:H}),N&&N.length>0&&x.createElement(oi,{chapters:N}),P&&P.length>0&&x.createElement(li,{heatmapData:P}),M&&D&&D.length>0&&x.createElement(rn,{captionsSrc:D}),w&&x.createElement(hi,{ads:w,onAdSkip:Ki,onAdClick:Wi}),n&&x.createElement(fi,{onSeekRequest:lt}),Re&&x.createElement(mi,{onSeekRequest:lt}),x.createElement(ui,{i18n:H?{language:H}:null,onLoopRequest:ji,onEnterPipRequest:$i,onExitPipRequest:Ui,onEnterFullscreenRequest:fn,onExitFullscreenRequest:mn}),Gi&&x.createElement(ri,{"sprite-vtt-file":F,spriteData:Xi,onSeekRequest:lt}),Te&&!Re&&x.createElement(sn,{onPrevRequest:gn,onNextRequest:bn}),x.createElement(ti,{onPlayRequest:st,onPauseRequest:ot}),x.createElement(ni,{onMuteRequest:Vi,onUnmuteRequest:Ni,onVolumeRequest:Fi}),x.createElement(ii,null),Ji,Re&&x.createElement(x.Fragment,null,Te&&x.createElement(sn,{onPrevRequest:gn,onNextRequest:bn}),x.createElement(an,{onPlayRequest:st,onPauseRequest:ot})))});on.displayName="CorePlayerSkin";on.propTypes={live:k.default.bool,liveDVR:k.default.bool,hasAudio:k.default.bool,prevented:k.default.bool,loading:k.default.bool,paused:k.default.bool,ended:k.default.bool,seeking:k.default.bool,waiting:k.default.bool,duration:k.default.number,bufferedRanges:k.default.array,currentTime:k.default.number,muted:k.default.bool,volume:k.default.number,pip:k.default.bool,fullscreen:k.default.bool,qualities:k.default.array,captions:k.default.array,activeCaption:k.default.string,spriteVTTFile:k.default.string,chapters:k.default.array,heatmapData:k.default.array,fullHDQualityBreak:k.default.number,playbackRate:k.default.number,playbackQuality:k.default.number,loop:k.default.bool,language:k.default.string,ads:k.default.object,kernelMsg:k.default.object,skinMode:k.default.oneOf(["auto","mobile","desktop"]),onPlayClick:k.default.func,onPauseClick:k.default.func,onTogglePlay:k.default.func,changePlaybackRate:k.default.func,changePlayBackQuality:k.default.func,changeVolume:k.default.func,onMutedClick:k.default.func,changeCurrentTime:k.default.func,requestPictureInPicture:k.default.func,exitPictureInPicture:k.default.func,requestFullscreen:k.default.func,exitFullscreen:k.default.func,onSeeking:k.default.func,onLoopClick:k.default.func,onCaptionChange:k.default.func,onPreventedClick:k.default.func,onPrevious:k.default.func,onNext:k.default.func,showNavButtons:k.default.bool};var bi=on;var un=ln.forwardRef((e,t)=>ln.createElement(bi,{ref:t,...e}));un.displayName="PlayerSkin";un.propTypes={spriteVTTFile:g.default.string,chapters:g.default.arrayOf(g.default.shape({title:g.default.string.isRequired,startTime:g.default.number.isRequired})),heatmapData:g.default.arrayOf(g.default.shape({startTime:g.default.number.isRequired,endTime:g.default.number.isRequired,value:g.default.number.isRequired})),videoRef:g.default.oneOfType([g.default.func,g.default.shape({current:g.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:g.default.oneOfType([g.default.func,g.default.shape({current:g.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:g.default.bool,waiting:g.default.bool,live:g.default.bool.isRequired,hasResource:g.default.bool.isRequired,loading:g.default.bool.isRequired,paused:g.default.bool.isRequired,ended:g.default.bool.isRequired,seeking:g.default.bool.isRequired,onPlayClick:g.default.func.isRequired,onPauseClick:g.default.func.isRequired,duration:g.default.number.isRequired,currentTime:g.default.number.isRequired,changeCurrentTime:g.default.func.isRequired,muted:g.default.bool.isRequired,volume:g.default.number.isRequired,changeVolume:g.default.func.isRequired,onMutedClick:g.default.func.isRequired,changePlaybackRate:g.default.func.isRequired,pictureInPictureEnabled:g.default.bool.isRequired,pip:g.default.bool.isRequired,requestPictureInPicture:g.default.func.isRequired,exitPictureInPicture:g.default.func.isRequired,fullscreen:g.default.bool.isRequired,qualities:g.default.arrayOf(g.default.shape({label:g.default.string.isRequired,value:g.default.string.isRequired,isFullHD:g.default.bool.isRequired}).isRequired).isRequired,playbackRate:g.default.number.isRequired,loop:g.default.bool.isRequired,requestFullscreen:g.default.func.isRequired,exitFullscreen:g.default.func.isRequired,onLoopClick:g.default.func.isRequired,onPreventedClick:g.default.func.isRequired,kernelMsg:g.default.oneOfType([g.default.shape({type:g.default.string.isRequired,detail:g.default.string.isRequired}),g.default.oneOf([void 0])]),fullHDQualityBreak:g.default.number,poster:g.default.string.isRequired,skinMode:g.default.oneOf(["auto","mobile","desktop"])};var yi=ln.memo(un,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.bufferedRanges===t.bufferedRanges&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.playbackQuality===t.playbackQuality&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.skinMode===t.skinMode&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.onTogglePlay===t.onTogglePlay&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onCaptionChange===t.onCaptionChange&&e.onPreventedClick===t.onPreventedClick&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);se();import pe from"react";function Hs({actionTypes:e,initialState:t,getTranslationsFn:n}){let r=n||de,i=mt(e),a=pe.createContext({state:t,dispatch:()=>null}),s=({children:h,language:f})=>{let[E,m]=pe.useReducer(i,{...t,i18n:r(f||"en")}),b=pe.useRef(f);pe.useEffect(()=>{b.current!==f&&(b.current=f,m({type:"i18n",payload:r(f||"en")}))},[f,m]);let v=pe.useMemo(()=>({state:E,dispatch:m}),[E,m]);return pe.createElement(a.Provider,{value:v},h)};return s.displayName="PlayerContextProvider",{Context:a,Provider:s,useSelector:()=>{let{state:h}=pe.useContext(a);return h},useDispatch:()=>{let{state:h,dispatch:f}=pe.useContext(a),E=pe.useRef(h);return E.current=h,pe.useCallback(b=>{if(typeof b=="function"){let v=b(E.current);f(v)}else f(b)},[f])}}}var zs=["i18n","captionDragging","contextMenuVisible","controlsHovering","hiding","menuVisible","subMenuVisible","timeSliding","volumeSliding","videoRef","playerRef"],$s={i18n:{},captionDragging:!1,contextMenuVisible:!1,controlsHovering:!1,hiding:!0,menuVisible:!1,subMenuVisible:!1,timeSliding:!1,volumeSliding:!1,videoRef:null,playerRef:null},{Context:Vu,Provider:vi,useSelector:Us,useDispatch:Nu}=Hs({actionTypes:zs,initialState:$s,getTranslationsFn:de}),ki=Us;se();import te from"react";import{useCallback as it,useEffect as cn,useRef as Fe}from"react";function Si({adapter:e,muted:t,updateState:n}){let r=Fe(.8),i=Fe(!1),a=Fe(null),s=Fe(n);s.current=n;let o=Fe(e);o.current=e;let l=it(()=>{i.current=!0,a.current!==null&&clearTimeout(a.current),a.current=setTimeout(()=>{i.current=!1,a.current=null},50)},[]),h=it(()=>{let m=o.current,b=!m.getMuted();if(l(),b){let v=m.getVolume();v>0&&(r.current=v),m.setMuted(!0),s.current({volume:v,muted:!0})}else{let v=r.current||.8;m.setMuted(!1),m.setVolume(v),s.current({volume:v,muted:!1})}},[l]),f=it(m=>{let b=o.current,v=m===0;l(),b.setVolume(m),m!==0&&b.getMuted()&&(v=!1,b.setMuted(!1)),m>0&&(r.current=m),s.current({volume:m,muted:v})},[l]),E=it(m=>{let v=o.current.getVolume(),R=m(v);f(R)},[f]);return cn(()=>e.onVolumeChange((b,v)=>{if(i.current)return;let R=v||b===0;s.current({volume:b,muted:R})}),[e]),cn(()=>{l(),e.setMuted(t)},[t,e,l]),cn(()=>()=>{a.current!==null&&clearTimeout(a.current)},[]),{onMutedClick:h,changeVolume:f,updateVolumeWithCallback:E}}function xi(e){return{getVolume:()=>{var t,n;return(n=(t=e.current)==null?void 0:t.volume)!=null?n:0},setVolume:t=>{e.current&&(e.current.volume=t)},getMuted:()=>{var t,n;return(n=(t=e.current)==null?void 0:t.muted)!=null?n:!1},setMuted:t=>{e.current&&(e.current.muted=t)},onVolumeChange:t=>{let n=i=>{let a=i.target;t(a.volume,a.muted)},r=e.current;return r&&r.addEventListener("volumechange",n),()=>{r&&r.removeEventListener("volumechange",n)}}}}import Ve from"react";var js=({updateState:e,videoRef:t,playerRef:n})=>{let r=Ve.useCallback(()=>{let o=n==null?void 0:n.current,l=t==null?void 0:t.current;if(!o){console.error("useVideoFullscreen: the player element is not ready");return}if(o.requestFullscreen){let h=o.requestFullscreen();h&&h.catch&&h.catch(()=>{})}else o.msRequestFullscreen?o.msRequestFullscreen():o.webkitRequestFullscreen?o.webkitRequestFullscreen():l&&l.webkitEnterFullScreen&&l.webkitEnterFullScreen()},[t,n]),i=Ve.useCallback(()=>{document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},[]),a=Ve.useCallback(()=>{let o=n==null?void 0:n.current;(document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement)===o?i():r()},[n,i,r]),s=Ve.useCallback(()=>{let o=n==null?void 0:n.current,l=document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement;e({fullscreen:!!o&&l===o})},[e,n]);return Ve.useEffect(()=>(document.addEventListener("fullscreenchange",s),document.addEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=s,()=>{document.removeEventListener("fullscreenchange",s),document.removeEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=null}),[s]),{requestFullscreen:r,exitFullscreen:i,requestToggleFullscreen:a}},Ei=js;se();se();se();var Ys=({ref:e,playerRef:t,url:n,player:r,fullHDQualityBreak:i,sources:a,prevented:s,muted:o,updateState:l,ads:h,live:f,liveDVR:E})=>{let{i18n:m}=ki(),b=te.useRef(null),v=te.useRef(null),R=te.useCallback(({fullscreen:d})=>{l(_=>({..._,isFullScreen:d}))},[l]),{requestFullscreen:I,exitFullscreen:D,requestToggleFullscreen:M}=Ei({updateState:R,videoRef:b,playerRef:t}),F=te.useMemo(()=>a.length>0?a.map(d=>({label:Le({label:"quality",value:d.resolution.toString(),i18n:m}),value:d.resolution.toString(),isFullHD:i!==void 0&&d.resolution>=i})):[],[a,i,m]),{onMutedClick:N,changeVolume:P,updateVolumeWithCallback:A}=Si({adapter:te.useMemo(()=>xi(b),[]),muted:o,updateState:({muted:d,volume:_})=>l(Q=>({...Q,isMuted:d!=null?d:!1,volume:_!=null?_:0}))}),O=te.useCallback(d=>{r&&(l(_=>({..._,played:d})),r.seekTo(d))},[r,l]),X=te.useCallback(d=>{if(!r)return;let _=r.getCurrentTime()||0,Q=r.getDuration()||0,u=d(_,Q);O(u)},[r,O]),H=te.useRef(N);H.current=N;let w=te.useRef(O);w.current=O;let S=te.useRef({live:f,liveDVR:E,player:r});S.current={live:f,liveDVR:E,player:r};let y=te.useRef(!1),L=te.useCallback(()=>{let{live:d,liveDVR:_,player:Q}=S.current;if(!d&&!_||_&&y.current)return;let u=Q==null?void 0:Q.getPlayer();if(!u)return;let{seekable:p}=u;p&&p.length>0&&(u.currentTime=p.end(p.length-1)),y.current=!0},[]),q=te.useMemo(()=>({onPlayClick:()=>{L(),l(d=>({...d,playing:!0}))},onPauseClick:()=>l(d=>({...d,playing:!1})),onTogglePlay:()=>l(d=>{let _=!d.playing;return _&&L(),{...d,playing:_}}),changePlaybackRate:d=>l(_=>({..._,playbackRate:d})),changePlayBackQuality:d=>{l(_=>({..._,playbackQuality:d}))},requestPictureInPicture:()=>l(d=>({...d,isPIP:!0})),exitPictureInPicture:()=>l(d=>({...d,isPIP:!1})),onSeeking:d=>l(_=>St(_,d)),onMutedClick:()=>H.current(),onLoopClick:()=>l(d=>({...d,loop:!d.loop})),onCaptionChange:d=>l(_=>({..._,activeCaption:d})),onPreventedClick:()=>l(d=>({...d,isMuted:!1,volume:1})),changeCurrentTime:d=>w.current(d)}),[l,L]),G=te.useCallback(d=>{var u;d.preventDefault(),d.stopPropagation();let _=zt[d.which||d.keyCode]||$t[d.key];if(!(!r||h!=null&&(_==="ARROW_LEFT_KEY"||_==="ARROW_RIGHT_KEY")))switch((u=v.current)==null||u.showControls(),_){case"SPACE_KEY":{l(p=>{let C=!p.playing;return C&&L(),{...p,playing:C}});break}case"F_KEY":{M();break}case"MUTE_KEY":{N();break}case"ARROW_LEFT_KEY":{X(p=>{let C=p-5;return C<0?0:C});break}case"ARROW_RIGHT_KEY":{X((p,C)=>{let J=p+5;return J>=C?C:J});break}case"ARROW_UP_KEY":{A(p=>{let C=p+.1;return C>=1?1:C});break}case"ARROW_DOWN_KEY":{A(p=>{let C=p-.1;return C<0?0:C});break}default:break}},[r,h,l,L,M,N,X,A]);return te.useImperativeHandle(e,()=>({handleKeyDown:G})),te.useEffect(()=>{var d;b.current=(d=r==null?void 0:r.getPlayer())!=null?d:null},[r]),{playerSkinRef:v,videoRef:b,qualities:F,memorizedProps:q,handleKeyDown:G,requestFullscreen:I,exitFullscreen:D,changeVolume:P}},Pi=Ys;var Ks={en:fe,es:Ee},dn=at.forwardRef(({url:e,sources:t,playerRef:n,player:r,hasAudio:i,fullHDQualityBreak:a,live:s=!1,language:o=Object.keys(Ks)[0],hasResource:l=!1,buffered:h=null,kernelMsg:f=null,updateState:E,waiting:m=!1,prevented:b=!1,muted:v=!1,...R},I)=>{let{playerSkinRef:D,videoRef:M,qualities:F,memorizedProps:N,handleKeyDown:P,requestFullscreen:A,exitFullscreen:O,changeVolume:X}=Pi({ref:I,playerRef:n,url:e,player:r,fullHDQualityBreak:a,sources:t,prevented:b,muted:v,updateState:E,ads:R.ads||null,live:s,liveDVR:R.liveDVR||!1});return at.createElement(vi,{language:o},at.createElement(yi,{ref:D,videoRef:M,playerRef:n,qualities:F,hasAudio:i,handleKeyDown:P,requestFullscreen:A,exitFullscreen:O,changeVolume:X,fullHDQualityBreak:a,live:s,hasResource:l,buffered:h,kernelMsg:f,prevented:b,waiting:m,muted:v,...R,...N}))});dn.displayName="PlayerSkinWrapper";dn.propTypes={playerRef:T.default.oneOfType([T.default.func,T.default.shape({current:T.default.instanceOf(HTMLDivElement)})]).isRequired,player:T.default.object,live:T.default.bool,prevented:T.default.bool,waiting:T.default.bool,hasResource:T.default.bool.isRequired,hasAudio:T.default.bool.isRequired,loading:T.default.bool.isRequired,paused:T.default.bool.isRequired,ended:T.default.bool.isRequired,seeking:T.default.bool.isRequired,duration:T.default.number.isRequired,currentTime:T.default.number.isRequired,muted:T.default.bool.isRequired,volume:T.default.number.isRequired,playbackRate:T.default.number.isRequired,pictureInPictureEnabled:T.default.bool.isRequired,fullHDQualityBreak:T.default.number,pip:T.default.bool.isRequired,fullscreen:T.default.bool.isRequired,kernelMsg:T.default.oneOfType([T.default.shape({type:T.default.string.isRequired,detail:T.default.string.isRequired}),T.default.oneOf([void 0])]),url:T.default.string,sources:T.default.arrayOf(T.default.shape({src:T.default.string.isRequired,resolution:T.default.number.isRequired}).isRequired).isRequired,loop:T.default.bool.isRequired};var wi=at.memo(dn,(e,t)=>e.playerRef===t.playerRef&&e.player===t.player&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.kernelMsg===t.kernelMsg&&e.url===t.url&&e.sources===t.sources&&e.chapters===t.chapters&&e.captions===t.captions&&e.activeCaption===t.activeCaption&&e.poster===t.poster&&e.skinMode===t.skinMode);se();import Ti from"react";var Ci="playerstack-wrapper-styles",Ws=`
.playerstack-wrapper {
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
}

.playerstack-wrapper,
:where(.playerstack-wrapper) *,
:where(.playerstack-wrapper) *::before,
:where(.playerstack-wrapper) *::after {
  box-sizing: border-box;
}

:where(.playerstack-wrapper) button {
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
}

:where(.playerstack-wrapper) ul,
:where(.playerstack-wrapper) ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

:where(.playerstack-wrapper) li {
  margin: 0;
  padding: 0;
}

:where(.playerstack-wrapper) a {
  color: inherit;
  text-decoration: none;
}

.playerstack-wrapper video::cue {
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 1.1em;
  line-height: 1.4;
}

.playerstack-container {
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  margin: auto;
}
`;function _i(){if(typeof document=="undefined"||document.getElementById(Ci))return;let e=document.createElement("style");e.id=Ci,e.textContent=Ws,document.head.appendChild(e)}_i();var Ri=Ti.forwardRef(({children:e,style:t,className:n,...r},i)=>Ti.createElement("div",{ref:i,className:`playerstack-wrapper${n?` ${n}`:""}`,style:t,...r},e));Ri.displayName="MediaPlayerWrapper";var Ai=Ri;se();import ce from"react";se();var Qs=({onBuffer:e,onBufferEnd:t,onDisablePIP:n,onDuration:r,onEnablePIP:i,onEnded:a,onError:s,onPause:o,onPlay:l,onPlayBackQualityChange:h,onPlayBackRateChange:f,onProgress:E,onReady:m,onSeek:b,onStart:v,onLoaded:R,onMount:I,updateState:D,playerState:M,extraProps:{url:F,sources:N,fullHDQualityBreak:P,prevented:A}})=>{let[O,X]=ce.useState(null),H=Be(N),w=ce.useMemo(()=>H.length>0?bt(H,"resolution"):null,[H]),S=ce.useRef(D);S.current=D;let y=ce.useRef({onBuffer:e,onBufferEnd:t,onDisablePIP:n,onDuration:r,onEnablePIP:i,onEnded:a,onError:s,onPause:o,onPlay:l,onPlayBackQualityChange:h,onPlayBackRateChange:f,onProgress:E,onReady:m,onSeek:b,onStart:v,onLoaded:R,onMount:I});y.current={onBuffer:e,onBufferEnd:t,onDisablePIP:n,onDuration:r,onEnablePIP:i,onEnded:a,onError:s,onPause:o,onPlay:l,onPlayBackQualityChange:h,onPlayBackRateChange:f,onProgress:E,onReady:m,onSeek:b,onStart:v,onLoaded:R,onMount:I};let L=ce.useRef(A);L.current=A;let q=ce.useRef(M.seeking);q.current=M.seeking,ce.useEffect(()=>{if(w&&P!==void 0&&!(P in w)){let u=Object.keys(w).join(", ");console.error(`PlayerStack: Invalid fullHDQualityBreak value "${P}". Accepted resolutions are: ${u}. Falling back to highest available.`)}},[w,P]),ce.useEffect(()=>{if(!w){X(null);return}let u=!1;return(async()=>{var p,C;try{let J=await ht();if(u)return;let Z=Object.keys(w).map(Number),ie=ft(J||0,Z),ne=H[0];J!==null&&ie?(X((C=(p=w[ie])==null?void 0:p.src)!=null?C:ne.src),G.current=ie,S.current(ke=>({...ke,playbackQuality:ie}))):(X(ne.src),G.current=ne.resolution,S.current(ke=>({...ke,playbackQuality:ne.resolution})))}catch{if(u)return;let J=H[0];X(J.src),G.current=J.resolution,S.current(Z=>({...Z,playbackQuality:J.resolution}))}})(),()=>{u=!0}},[H]);let G=ce.useRef(null),{playbackQuality:d}=M;ce.useEffect(()=>{d===0&&G.current!==null&&S.current(u=>({...u,playbackQuality:G.current}))},[d]);let _=ce.useMemo(()=>{var u,p;return w?d==null||d===0?O!=null?O:H[0].src:(p=(u=w[d])==null?void 0:u.src)!=null?p:H[0].src:F},[F,H,w,d,O]);return{...ce.useMemo(()=>({onBuffer:(...u)=>{y.current.onBuffer&&y.current.onBuffer(...u),S.current(p=>({...p,isBuffering:!0}))},onBufferEnd:(...u)=>{y.current.onBufferEnd&&y.current.onBufferEnd(...u),S.current(p=>({...p,isBuffering:!1}))},onDisablePIP:u=>{y.current.onDisablePIP&&y.current.onDisablePIP(u),S.current(p=>({...p,isPIP:!1}))},onDuration:u=>{y.current.onDuration&&y.current.onDuration(u),S.current(p=>({...p,duration:u}))},onEnablePIP:u=>{y.current.onEnablePIP&&y.current.onEnablePIP(u),S.current(p=>({...p,isPIP:!0}))},onEnded:u=>{y.current.onEnded&&y.current.onEnded(u),S.current(p=>({...p,isEnded:!0,playing:!1}))},onError:(u,p,C,J)=>{y.current.onError&&y.current.onError(u,p,C,J);let Z=["networkError"],ie=["bufferStalledError","bufferNudgeOnStall","bufferAppendError","fragParsingError"],ne=(u==null?void 0:u.name)||(u==null?void 0:u.message)||"";if(ne==="NotAllowedError"||ne==="AbortError")return;!(Z.includes(p==null?void 0:p.type)||(p==null?void 0:p.type)==="mediaError"&&ie.includes(p==null?void 0:p.details))&&p&&S.current(Se=>{var Te;return{...Se,kernelError:{type:(p==null?void 0:p.type)||"UnknownError",detail:((Te=p==null?void 0:p.error)==null?void 0:Te.message)||"Something was wrong with the playback. Please try again."},isLoading:!1}})},onPause:u=>{y.current.onPause&&y.current.onPause(u),S.current(p=>({...p,playing:!1}))},onPlay:u=>{y.current.onPlay&&y.current.onPlay(u),S.current(p=>{var Z;let C=(Z=u==null?void 0:u.hasAudio)!=null?Z:!1,J=L.current?!0:C||p.hasAudio||!1;return{...p,playing:!0,isEnded:!1,hasAudio:J}})},onPlayBackQualityChange:u=>{y.current.onPlayBackQualityChange&&y.current.onPlayBackQualityChange(u),S.current(p=>({...p,playbackQuality:u}))},onPlayBackRateChange:u=>{y.current.onPlayBackRateChange&&y.current.onPlayBackRateChange(u),S.current(p=>({...p,playbackRate:u}))},onProgress:u=>{y.current.onProgress&&y.current.onProgress(u),q.current||S.current(p=>({...p,played:u.playedSeconds,loaded:u.loaded,bufferedRanges:u.bufferedRanges||[]}))},onReady:u=>{y.current.onReady&&y.current.onReady(u),S.current(p=>({...p,isLoading:!1}))},onSeek:u=>{y.current.onSeek&&y.current.onSeek(u),S.current(p=>({...p,seek:u}))},onStart:()=>{y.current.onStart&&y.current.onStart()},onLoaded:(...u)=>{y.current.onLoaded&&y.current.onLoaded(...u)},onMount:(...u)=>{y.current.onMount&&y.current.onMount(...u)}}),[]),videoUrl:_!=null?_:O}},Li=Qs;var Oi=$.forwardRef((e,t)=>{var H;let[n,r]=$.useState({width:e.width||"100%",height:e.height||"100%"}),[i,a]=$.useState({...U,isPIP:e.pip,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(H=e.volume)!=null?H:U.volume}),[s,o]=$.useState({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume});(e.pip!==s.pip||e.playbackRate!==s.playbackRate||e.loop!==s.loop||e.playing!==s.playing||e.muted!==s.muted||e.volume!==s.volume)&&(o({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume}),a(w=>{var y,L;let S={...w};return e.pip!==s.pip&&(S.isPIP=e.pip),e.playbackRate!==s.playbackRate&&(S.playbackRate=e.playbackRate),e.loop!==s.loop&&(S.loop=e.loop),e.playing!==s.playing&&(S.playing=e.playing),e.muted!==s.muted&&(S.isMuted=e.muted,S.volume=e.muted?0:(y=e.volume)!=null?y:U.volume),e.volume!==s.volume&&!e.muted&&(S.volume=(L=e.volume)!=null?L:U.volume),S}));let l=$.useRef(null),h=$.useRef(null),[f,E]=$.useState(!1),m=$.useCallback(()=>E(!0),[]),b=$.useRef(e.url),v=$.useRef(e.sources);(b.current!==e.url||v.current!==e.sources)&&(b.current=e.url,v.current=e.sources,f&&E(!1));let R=(e.live||e.liveDVR)&&!f,I=e.liveDVR&&!f,D=$.useRef(e.url),M=$.useRef(e.sources);$.useEffect(()=>{let w=D.current!==e.url,S=!(0,Di.default)(M.current,e.sources);(w||S)&&(D.current=e.url,M.current=e.sources,r({width:e.width||"100%",height:e.height||"100%"}),a(y=>({...y,isLoading:!0,isBuffering:!1,duration:0,played:0,loaded:0,seek:0,isEnded:!1,kernelError:null,seeking:!1})))},[e.url,e.sources,e.width,e.height]);let F=$.useRef(e.ads);$.useEffect(()=>{let w=F.current!==null&&F.current!==void 0,S=e.ads!==null&&e.ads!==void 0;F.current=e.ads,w&&!S&&a(y=>({...y,playing:!0}))},[e.ads]);let N=$.useCallback(w=>{var S,y;(y=(S=l.current)==null?void 0:S.handleKeyDown)==null||y.call(S,w)},[]),P=$.useMemo(()=>e.prevented||e.playing&&e.muted,[e.muted,e.playing,e.prevented]);$.useEffect(()=>{if(e.player&&i.isLoading===!1){let S=e.player.getPlayer(),y=()=>{let G=S.offsetWidth,d=S.offsetHeight;G>0&&d>0?r({width:`${G}px`,height:`${d}px`}):r({width:e.width||"100%",height:e.height||"100%"})},L=setTimeout(y,500),q=()=>y();return S.addEventListener("loadedmetadata",q),()=>{clearTimeout(L),S.removeEventListener("loadedmetadata",q)}}},[e.player,e.width,e.height,i.isLoading]);let{videoUrl:A,...O}=Li({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDisablePIP:e.onDisablePIP,onDuration:e.onDuration,onEnablePIP:e.onEnablePIP,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackQualityChange:e.onPlayBackQualityChange,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:a,playerState:i,extraProps:{url:e.url,sources:e.sources,fullHDQualityBreak:e.fullHDQualityBreak,prevented:P}}),X=$.useMemo(()=>({attributes:e.config.attributes,tracks:e.config.tracks,forceVideo:e.config.forceVideo,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceLoad:e.config.forceLoad,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS,loopOnEnded:e.config.loopOnEnded,live:R}),[e.config,R]);return $.createElement(Ai,{tabIndex:0,role:"application",dir:"ltr",ref:h,onKeyDown:N,style:n},$.createElement("div",{className:"playerstack-container"},A&&$.createElement(Qt,{ref:t,loop:i.loop,muted:i.isMuted,playbackRate:i.playbackRate,playsinline:e.playsinline,volume:i.volume,url:A,width:e.width,height:e.height,playing:i.playing,config:X,onLiveEnded:m,...O})),$.createElement(wi,{ref:l,playerRef:h,url:A,sources:e.sources,hasAudio:i.hasAudio,spriteVTTFile:e.spriteVTTFile,chapters:e.chapters,captions:e.captions,heatmapData:e.heatmapData,ads:e.ads,hasResource:typeof A=="string"||e.sources.length>0,kernelMsg:i.kernelError,loading:i.isLoading,prevented:P,muted:i.isMuted,paused:i.playing===!1,live:R,liveDVR:I,liveAd:e.liveAd,bufferedRanges:i.bufferedRanges||[],ended:i.isEnded,seeking:i.seeking,waiting:i.isBuffering||e.waiting,duration:i.duration,currentTime:i.played,volume:i.volume,playbackRate:i.playbackRate,playbackQuality:i.playbackQuality,pictureInPictureEnabled:!0,pip:i.isPIP,loop:i.loop,activeCaption:i.activeCaption,fullscreen:i.isFullScreen,fullHDQualityBreak:e.fullHDQualityBreak,language:e.language,poster:e.poster,updateState:a,player:e.player,skinMode:e.skinMode,onPrevious:e.onPrevious,onNext:e.onNext,showNavButtons:e.showNavButtons}))});Oi.displayName="MediaPlayerSkin";var qi=$.memo(Oi,(e,t)=>e.url===t.url&&e.sources===t.sources&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.spriteVTTFile===t.spriteVTTFile&&e.chapters===t.chapters&&e.heatmapData===t.heatmapData&&e.ads===t.ads&&e.prevented===t.prevented&&e.waiting===t.waiting&&e.playing===t.playing&&e.loop===t.loop&&e.volume===t.volume&&e.muted===t.muted&&e.paused===t.paused&&e.live===t.live&&e.pip===t.pip&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.height===t.height&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.pipeline===t.pipeline&&e.stopOnUnmount===t.stopOnUnmount&&e.player===t.player&&e.progressFrequency===t.progressFrequency&&e.disableDeferredLoading===t.disableDeferredLoading&&e.language===t.language&&e.poster===t.poster&&e.config===t.config&&e.skinMode===t.skinMode&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onPlayBackQualityChange===t.onPlayBackQualityChange&&e.onProgress===t.onProgress&&e.onEnablePIP===t.onEnablePIP&&e.onDisablePIP===t.onDisablePIP&&e.onLoaded===t.onLoaded&&e.onMount===t.onMount&&e.onPrevious===t.onPrevious&&e.onNext===t.onNext&&e.showNavButtons===t.showNavButtons);se();var Xs=typeof window!="undefined"&&window.document&&typeof document!="undefined",Gs=typeof global!="undefined"&&global.window&&global.window.document,Js=Object.keys(Kt),Zs=Xs||Gs?Ne.Suspense:()=>null,Mi=e=>{var t;return t=class extends Ne.Component{constructor(){super(...arguments);Y(this,"player",null);Y(this,"state",{});Y(this,"references",{wrapper:i=>{this.wrapper=i},player:i=>{i&&i!==this.player&&(this.player=i,this.forceUpdate())}});Y(this,"getDuration",()=>this.player?this.player.getDuration():null);Y(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null);Y(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null);Y(this,"getInternalPlayer",(i="player")=>this.player?this.player.getInternalPlayer(i):null);Y(this,"seekTo",(i,a,s)=>{if(!this.player)return null;this.player.seekTo(i,a,s)});Y(this,"handleReady",()=>{this.props.onReady&&this.props.onReady(this)});Y(this,"getActivePlayer",Oe((i,a)=>e.canPlay(i,a)?e:null));Y(this,"getConfig",Oe((i,a,s)=>{let{config:o}=this.props;return Ii.default.all([nt.config,nt.config[s]||{},o,o[s]||{}])}));Y(this,"getAttributes",Oe(()=>yt(this.props,Js)));Y(this,"getPlayerConfig",Oe(i=>{let a=(this.props.captions||[]).map(o=>({kind:o.kind||"subtitles",src:o.src,srcLang:o.language,label:o.label})),s=[...i.tracks||[],...a];return{attributes:i.attributes,tracks:s,forceVideo:i.forceVideo,forceHLS:i.forceHLS,dashVersion:i.dashVersion,forceDASH:i.forceDASH,forceFLV:i.forceFLV,flvVersion:i.flvVersion,forceLoad:i.forceLoad,forceDisableHls:i.forceDisableHls,hlsOptions:i.hlsOptions,hlsVersion:i.hlsVersion,forceSafariHLS:i.forceSafariHLS,loopOnEnded:i.loopOnEnded}}));Y(this,"getSourceProps",()=>"sources"in this.props&&this.props.sources!==void 0?{sources:this.props.sources,fullHDQualityBreak:this.props.fullHDQualityBreak}:{sources:[]});Y(this,"getUrlProp",()=>"url"in this.props&&this.props.url!==void 0?this.props.url:"");Y(this,"renderActivePlayer",(i,a)=>{if(!i&&!a)return null;let s=this.getActivePlayer(i,a);if(!s)return null;let o=this.getConfig(i,a,s.key),l=this.getPlayerConfig(o),h=this.getSourceProps(),f=this.getUrlProp();return Ne.createElement(qi,{key:s.key,ref:this.references.player,player:this.player,loop:this.props.loop,muted:this.props.muted,pip:this.props.pip,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,url:f,sources:h.sources,width:this.props.width,height:this.props.height,playing:this.props.playing,config:l,prevented:this.props.prevented,waiting:this.props.waiting,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onDuration:this.props.onDuration,onEnablePIP:this.props.onEnablePIP,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackQualityChange:this.props.onPlayBackQualityChange,onPlayBackRateChange:this.props.onPlayBackRateChange,onPrevious:this.props.onPrevious,onNext:this.props.onNext,showNavButtons:this.props.showNavButtons,fullHDQualityBreak:h.fullHDQualityBreak,language:this.props.language,live:this.props.live||this.props.liveDVR,liveDVR:this.props.liveDVR,liveAd:this.props.liveAd,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,disableDeferredLoading:this.props.disableDeferredLoading,progressFrequency:this.props.progressFrequency,spriteVTTFile:this.props.spriteVTTFile,chapters:this.props.chapters,captions:this.props.captions,heatmapData:this.props.heatmapData,ads:this.props.ads,poster:this.props.poster,skinMode:this.props.skinMode})})}shouldComponentUpdate(i,a){return!(0,pn.default)(this.props,i)||!(0,pn.default)(this.state,a)}componentDidUpdate(){}render(){let{wrapper:i}=this.props,a=this.getUrlProp(),s=this.getSourceProps(),{className:o,...l}=this.getAttributes(),h=typeof i=="string"?this.references.wrapper:void 0;return Ne.createElement(i,{ref:h,"data-testid":"media-player-skin",className:`playerstack${o?` ${o}`:""}`,...l},Ne.createElement(Zs,{fallback:this.props.fallback},this.renderActivePlayer(a,s.sources)))}},Y(t,"displayName","MediaPlayer"),Y(t,"propTypes",Kt),Y(t,"defaultProps",nt),Y(t,"canPlay",(i,a)=>!!e.canPlay(i,a)),Y(t,"canEnablePIP",i=>!!(e.canEnablePIP&&e.canEnablePIP(i))),t};var eo={key:"core",name:"VideoElement",canPlay:Bt,lazyPlayer:rr(()=>Promise.resolve().then(()=>(Xt(),kr)))},Bi=Mi(eo);function ro(e,t){no(e).render(to.createElement(Bi,{...t}))}export{ro as default};
