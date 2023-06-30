import{g as J,r as Q}from"./index-2506bfc3.js";import{p as Y,u as Z}from"./VideoPlayer-ab0577b3.js";function ee(v,y){for(var d=0;d<y.length;d++){const c=y[d];if(typeof c!="string"&&!Array.isArray(c)){for(const h in c)if(h!=="default"&&!(h in v)){const m=Object.getOwnPropertyDescriptor(c,h);m&&Object.defineProperty(v,h,m.get?m:{enumerable:!0,get:()=>c[h]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var I={};(function(v){function y(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?y=function(s){return typeof s}:y=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},y(r)}Object.defineProperty(v,"__esModule",{value:!0}),v.default=void 0;var d=M(Q),c=Z,h=Y;function m(){if(typeof WeakMap!="function")return null;var r=new WeakMap;return m=function(){return r},r}function M(r){if(r&&r.__esModule)return r;if(r===null||y(r)!=="object"&&typeof r!="function")return{default:r};var o=m();if(o&&o.has(r))return o.get(r);var s={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in r)if(Object.prototype.hasOwnProperty.call(r,e)){var n=t?Object.getOwnPropertyDescriptor(r,e):null;n&&(n.get||n.set)?Object.defineProperty(s,e,n):s[e]=r[e]}return s.default=r,o&&o.set(r,s),s}function S(){return S=Object.assign||function(r){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(r[t]=s[t])}return r},S.apply(this,arguments)}function U(r,o){if(!(r instanceof o))throw new TypeError("Cannot call a class as a function")}function w(r,o){for(var s=0;s<o.length;s++){var t=o[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}function V(r,o,s){return o&&w(r.prototype,o),s&&w(r,s),r}function T(r,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(o&&o.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),o&&b(r,o)}function b(r,o){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(r,o)}function H(r){var o=F();return function(){var t=_(r),e;if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)}}function N(r,o){return o&&(y(o)==="object"||typeof o=="function")?o:l(r)}function l(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function F(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function _(r){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)},_(r)}function u(r,o,s){return o in r?Object.defineProperty(r,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[o]=s,r}var O=typeof navigator<"u",C=O&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,D=O&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||C)&&!window.MSStream,B=O&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,$="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",j="Hls",x="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",W="dashjs",K="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",q="flvjs",G=/www\.dropbox\.com\/.+/,R=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,X="https://videodelivery.net/{id}/manifest/video.m3u8",k=function(r){T(s,r);var o=H(s);function s(){var t;U(this,s);for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t=o.call.apply(o,[this].concat(n)),u(l(t),"onReady",function(){var i;return(i=t.props).onReady.apply(i,arguments)}),u(l(t),"onPlay",function(){var i;return(i=t.props).onPlay.apply(i,arguments)}),u(l(t),"onBuffer",function(){var i;return(i=t.props).onBuffer.apply(i,arguments)}),u(l(t),"onBufferEnd",function(){var i;return(i=t.props).onBufferEnd.apply(i,arguments)}),u(l(t),"onPause",function(){var i;return(i=t.props).onPause.apply(i,arguments)}),u(l(t),"onEnded",function(){var i;return(i=t.props).onEnded.apply(i,arguments)}),u(l(t),"onError",function(){var i;return(i=t.props).onError.apply(i,arguments)}),u(l(t),"onPlayBackRateChange",function(i){return t.props.onPlaybackRateChange(i.target.playbackRate)}),u(l(t),"onEnablePIP",function(){var i;return(i=t.props).onEnablePIP.apply(i,arguments)}),u(l(t),"onDisablePIP",function(i){var p=t.props,g=p.onDisablePIP,P=p.playing;g(i),P&&t.play()}),u(l(t),"onPresentationModeChange",function(i){if(t.player&&(0,c.supportsWebKitPresentationMode)(t.player)){var p=t.player.webkitPresentationMode;p==="picture-in-picture"?t.onEnablePIP(i):p==="inline"&&t.onDisablePIP(i)}}),u(l(t),"onSeek",function(i){t.props.onSeek(i.target.currentTime)}),u(l(t),"mute",function(){t.player.muted=!0}),u(l(t),"unmute",function(){t.player.muted=!1}),u(l(t),"renderSourceElement",function(i,p){return typeof i=="string"?d.default.createElement("source",{key:p,src:i}):d.default.createElement("source",S({key:p},i))}),u(l(t),"renderTrack",function(i,p){return d.default.createElement("track",S({key:p},i))}),u(l(t),"ref",function(i){t.player&&(t.prevPlayer=t.player),t.player=i}),t}return V(s,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player),this.player.src=this.getSource(this.props.url),D&&this.player.load()}},{key:"componentDidUpdate",value:function(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url!==e.url&&!(0,c.isMediaStream)(this.props.url)&&(this.player.srcObject=null)}},{key:"componentWillUnmount",value:function(){this.player.src="",this.removeListeners(this.player),this.hls&&this.hls.destroy()}},{key:"addListeners",value:function(e){var n=this.props,a=n.url,i=n.playsinline;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(a)||e.addEventListener("canplay",this.onReady),i&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}},{key:"removeListeners",value:function(e,n){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(n)||e.removeEventListener("canplay",this.onReady)}},{key:"shouldUseAudio",value:function(e){return e.config.forceVideo||e.config.attributes.poster?!1:h.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio}},{key:"shouldUseHLS",value:function(e){return this.props.config.forceHLS||B&&this.props.config.forceSafariHLS?!0:D?!1:h.HLS_EXTENSIONS.test(e)||R.test(e)}},{key:"shouldUseDASH",value:function(e){return h.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}},{key:"shouldUseFLV",value:function(e){return h.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}},{key:"load",value:function(e){var n=this,a=this.props.config,i=a.hlsVersion,p=a.hlsOptions,g=a.dashVersion,P=a.flvVersion;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,c.getSDK)($.replace("VERSION",i),j).then(function(f){if(n.hls=new f(p),n.hls.on(f.Events.MANIFEST_PARSED,function(){n.props.onReady()}),n.hls.on(f.Events.ERROR,function(L,A){n.props.onError(L,A,n.hls,f)}),R.test(e)){var E=e.match(R)[1];n.hls.loadSource(X.replace("{id}",E))}else n.hls.loadSource(e);n.hls.attachMedia(n.player),n.props.onLoaded()}),this.shouldUseDASH(e)&&(0,c.getSDK)(x.replace("VERSION",g),W).then(function(f){n.dash=f.MediaPlayer().create(),n.dash.initialize(n.player,e,n.props.playing),n.dash.on("error",n.props.onError),parseInt(g)<3?n.dash.getDebug().setLogToBrowserConsole(!1):n.dash.updateSettings({debug:{logLevel:f.Debug.LOG_LEVEL_NONE}}),n.props.onLoaded()}),this.shouldUseFLV(e)&&(0,c.getSDK)(K.replace("VERSION",P),q).then(function(f){n.flv=f.createPlayer({type:"flv",url:e}),n.flv.attachMediaElement(n.player),n.flv.on(f.Events.ERROR,function(E,L){n.props.onError(E,L,n.flv,f)}),n.flv.load(),n.props.onLoaded()}),e instanceof Array)this.player.load();else if((0,c.isMediaStream)(e))try{this.player.srcObject=e}catch{this.player.src=window.URL.createObjectURL(e)}}},{key:"play",value:function(){var e=this.player.play();e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.player.pause()}},{key:"stop",value:function(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}},{key:"seekTo",value:function(e){this.player.currentTime=e}},{key:"setVolume",value:function(e){this.player.volume=e}},{key:"enablePIP",value:function(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,c.supportsWebKitPresentationMode)(this.player)&&this.player.webkitPresentationMode!=="picture-in-picture"&&this.player.webkitSetPresentationMode("picture-in-picture")}},{key:"disablePIP",value:function(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,c.supportsWebKitPresentationMode)(this.player)&&this.player.webkitPresentationMode!=="inline"&&this.player.webkitSetPresentationMode("inline")}},{key:"setPlaybackRate",value:function(e){try{this.player.playbackRate=e}catch(n){this.props.onError(n)}}},{key:"getDuration",value:function(){if(!this.player)return null;var e=this.player,n=e.duration,a=e.seekable;return n===1/0&&a.length>0?a.end(a.length-1):n}},{key:"getCurrentTime",value:function(){return this.player?this.player.currentTime:null}},{key:"getSecondsLoaded",value:function(){if(!this.player)return null;var e=this.player.buffered;if(e.length===0)return 0;var n=e.end(e.length-1),a=this.getDuration();return n>a?a:n}},{key:"getSource",value:function(e){var n=this.shouldUseHLS(e),a=this.shouldUseDASH(e),i=this.shouldUseFLV(e);if(!(e instanceof Array||(0,c.isMediaStream)(e)||n||a||i))return G.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}},{key:"render",value:function(){var e=this.props,n=e.url,a=e.playing,i=e.loop,p=e.controls,g=e.muted,P=e.config,f=e.width,E=e.height,L=this.shouldUseAudio(this.props),A=L?"audio":"video",z={width:f==="auto"?f:"100%",height:E==="auto"?E:"100%"};return d.default.createElement(A,S({ref:this.ref,src:this.getSource(n),style:z,preload:"auto",autoPlay:a||void 0,controls:p,muted:g,loop:i},P.attributes),n instanceof Array&&n.map(this.renderSourceElement),P.tracks.map(this.renderTrack))}}]),s}(d.Component);v.default=k,u(k,"displayName","FilePlayer"),u(k,"canPlay",h.canPlay.file)})(I);const te=J(I),ie=ee({__proto__:null,default:te},[I]);export{ie as F};
//# sourceMappingURL=FilePlayer-8f1355b3.js.map
