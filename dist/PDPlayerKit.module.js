!function(){const t=document,e=Array,i=Math,s=/\.([\w_-]+)?/gi,o=/\#([\w_-]+)?/i,l=/^\w+(?=[\#\.]*)/i,a="match",n="trim",u="test",h="video",r="length",d="string",m="number",p="isArray",y="value",c="innerText",b="innerHTML",P="textContent",v="contentEditable",f="indexOf",g="appendChild",V="color",w="backgroundColor",M="width",T="height",k="display",C="float",R="link",x="script",I="style",F="preconnect",_="preload",A="anonymous",D="https://www.youtube.com/iframe_api",E=/iphone|ipad|ipod|android/i[u](navigator.userAgent),S=/iphone|ipad|ipod/i[u](navigator.userAgent),Y={autoplay:0,controls:0,showinfo:0,modestbranding:1,start:0,loop:0,fs:0,rel:0,cc_load_policty:1,iv_load_policy:3,autohide:1};let O;function B(e="",i,h){const R=((e[a](l)||[])[0]||"")[n](),x=((e[a](o)||[])[1]||"")[n](),F=(s[u](e)?e[a](s):[]).map((t=>t.replace(/^\./,"")));if(R[r]<1)return;let _,A,D,E=!1;"temp"===e?(E=!0,_=t[_createDocumentFragment]()):_=t.createElement(R),x[r]&&(_.id=x);for(let t of F)_.classList.add(t);if(null==i&&null!=h&&([i,h]=[h,null]),null!=i&&null!=h)[A,D]=[i,h];else if(null==h)typeof i===d||typeof i===m||Array[p](i)?D=i:A=i;else if(null==i)return _;if("object"==typeof A&&null!=A)for(const t in A){if(!A.hasOwnProperty(t))continue;const e=A[t];-1!=[y,c,b,P,v][f](t)?_[t]=e:-1!=[V,w,M,T,k,C][f](t)?_[I][t]=e:null!=e&&_.setAttribute(t,e)}if(null!=D){const e=typeof D===d,i=typeof D===m,s=Array[p](D);if(e||i){const e=D;"img"===R||"source"===R||"audio"===R?_.src=e:E?_[g](t[_createTextNode](D)):_[b]=e}else if(s)for(let e of D){const i=e instanceof Element;typeof e===d||typeof e===m?E?_[g](t[_createTextNode](e)):_[b]+=e:i&&_[g](e)}}return _}document.head.appendChild(B(R,{rel:F,href:"https://cdn.jsdelivr.net",crossOrigin:""})),document.head.appendChild(B(R,{rel:_,href:"https://cdn.jsdelivr.net/npm/pdplayerkit@latest/dist/PDPlayerKit.css",as:I,crossOrigin:A})),document.head.appendChild(B(R,{href:"https://cdn.jsdelivr.net/npm/pdplayerkit@latest/dist/PDPlayerKit.css",rel:"stylesheet"})),document.head.appendChild(B(R,{rel:F,href:"https://fonts.gstatic.com",crossOrigin:""})),document.head.appendChild(B(R,{rel:F,href:"https://fonts.googleapis.com",crossOrigin:""})),document.head.appendChild(B(R,{rel:_,href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,1,0",as:I,crossOrigin:A})),document.head.appendChild(B(R,{href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,1,0",rel:"stylesheet"})),document.head.appendChild(B(R,{rel:F,href:"https://www.youtube.com",crossOrigin:""})),document.head.appendChild(B(R,{rel:_,href:D,as:x,crossOrigin:A})),document.head.appendChild(B(x,{src:D,async:""})),document.head.appendChild(B(R,{rel:F,href:"https://player.vimeo.com",crossOrigin:""})),document.head.appendChild(B(R,{rel:_,href:"https://player.vimeo.com/api/player.js",as:x,crossOrigin:A})),document.head.appendChild(B(x,{src:"https://player.vimeo.com/api/player.js",async:""}));let L=new Map;function $(t){const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",o=s[r];let l="";do{l=e.from({length:t},(t=>s.charAt(i.floor(i.random()*o)))).join("")}while(L.has(l));return L.set(l,1),l}window.PDPlayer=class{typeConfig;panelConfig;#t;audio;video;youtube;vimeo;volume;#e;#i;#s;#o;isReady;isFullReady;defaultMute=!1;stateFull=!1;#l;#a;constructor(t={}){this.typeConfig=t.type||"",this.panelConfig=t.panel||[],this.#t=t.event||{},this.volume=t.volume,this.defaultMute=t.mute,this.body=B("div.PDPlayer",{"data-type":this.typeConfig}),this.body.onmousemove=this.body.onmouseleave=t=>this.showPanel(1);const e=String(t[h]||"").trim(),i=String(t.youtube||"").trim(),s=String(t.vimeo||"").trim(),o=String(t.audio||"").trim();e[r]?(this[h]=e,this.#n()):i[r]?(this.youtube=i,this.#u()):s[r]?(this.vimeo=s,this.#h()):o[r]&&(this.audio=o,this.#r())}player(t){return E&&t&&null==this.vimeo?this.#a:this.#l}#d=!1;#m=100;#p=1;#y=!1;#c=!1;#b=!0;#P=!0;#v=0;#f=0;isPaused(t){const e=this.player(t);return this.#e||this.#i?e.paused:this.#s?1!==this.ytState:this.#o?this.#b:void 0}play(t){const e=this.player(t);!t||this.isFullReady||null==this.youtube?(this.#e||this.#i?e.play():this.#s?e.playVideo():this.#o&&t?e.requestFullscreen().then((t=>{e.play()})):this.#o&&e.play(),this.panel.setPlayIcon(!1)):alert("not Ready")}pause(t){const e=this.player(t);this.#e||this.#i?e.pause():this.#s?e.pauseVideo():this.#o&&e.pause(),this.panel.setPlayIcon(!0)}doPlaySwitch(t){const e=this.isPaused(t);e?this.play():this.pause(),this.panel.setPlayIcon(!e)}seekTo(t,e){const i=this.player(e);console.log(i),this.#e||this.#i?i.currentTime=t:this.#s?i.seekTo(t):this.#o&&i.setCurrentTime(t),this.pause()}getVolume(t){const e=this.player(t);return this.#e||this.#i?100*e.volume:this.#s?e.getVolume():this.#o?100*this.#m:void 0}setVolume(t,e){const i=this.player(e);this.volume=t,this.#e||this.#i?i.volume=t/100:this.#s?i.setVolume(t):this.#o&&(this.#m=t/100,i.setVolume(t/100)),this.panel.setVolume(t),this.panel.setMuteIcon(0===t)}setMute(t,e){const i=null==t?this.isMuted():!t,s=this.player(e);if(i&&0===this.volume)return this.volume=50,this.setVolume(50),void this.panel.setMuteIcon(!1);this.#e||this.#i?s.muted=!i:this.#s?i?s.unMute():s.mute():this.#o&&(this.#d=!i,s.setMuted(!i).catch((t=>alert(t)))),this.panel.setMuteIcon(!i)}isMuted(t){const e=this.player(t);return this.#e||this.#i?e.muted:this.#s?e.isMuted():this.#o?this.#d:void 0}setPlaybackRate(t,e){const i=this.player(e);this.#e||this.#i?i.playbackRate=t:this.#s?i.setPlaybackRate(t):this.#o&&i.setPlaybackRate(t).catch((t=>alert(t)))}getPlaybackRate(t){const e=this.player(t);return this.#e||this.#i?e.playbackRate:this.#s?e.getPlaybackRate():this.#o?this.#p:void 0}#g(t){const e=this.player(t);this.#e||this.#i?this.panel.duration(e.duration):this.#s?this.panel.duration(e.getDuration()):this.#o&&this.#l.getDuration().then((t=>{this.#v=t,this.panel.duration(this.#v)}))}#V(t){const e=this.player(t);return this.#e||this.#i?Math.ceil(e.duration):null!=this.youtube?Math.ceil(e.getDuration()):this.#o?Math.ceil(this.#v):void 0}#w(t){const e=this.player(t);return this.#e||this.#i?Math.ceil(e.currentTime):null!=this.youtube?Math.ceil(e.getCurrentTime()):this.#o?Math.ceil(this.#f):void 0}#M(t){const e=this.#V(t);this.videoTimer=setInterval((()=>{if(this.#o)this.#l.getCurrentTime().then((t=>{this.#f=t,this.panel.setCurrent(Math.ceil(t),this.#V()),Math.ceil(t)<e||clearInterval(this.videoTimer)}));else{const t=this.#w();if(this.panel.setCurrent(t,this.#V()),Math.ceil(t)<e)return;clearInterval(this.videoTimer)}}),100)}#T(){null!=this.#t.ready&&this.#t.ready(),null!=this.vimeo&&(this.#y=this.#b=this.#P=!0,this.#c=!1),this.#e=Boolean(this.video&&this.#l),this.#o=Boolean(this.vimeo&&this.#l),this.#s=Boolean(this.youtube&&this.#l),this.#i=Boolean(this.audio&&this.#l),this.#g(),this.panel.setCurrent(0,this.#V()),this.sec=0,null!=this.defaultMute?this.setMute(this.defaultMute):this.#o&&this.#l.getMuted().then((t=>this.#d=t)),null!=this.volume?this.setVolume(this.volume):this.#o&&this.#l.getVolume().then((t=>this.#m=100*t))}#k(){this.#c=!1,this.#b=this.#P=!1,null!=this.#t.playing&&this.#t.playing(),this.#s&&(this.start&&(this.start=!1),setTimeout((()=>{this.mask.classList.add("hide")}),500)),this.#M(),this.panel.hide(1)}#C(){this.#b=!0,this.#c=!1,null!=this.#t.pause&&this.#t.pause(),clearInterval(this.videoTimer),this.#s&&this.mask.classList.remove("hide"),this.panel.show()}#R(){this.#P=this.#b=!0,this.#c=!1,"function"==typeof this.#t.end&&this.#t.end(),clearInterval(this.videoTimer),this.panel.reset(),this.#e?this.#l.currentTime=0:this.#s?(this.seekTo(0),setTimeout((()=>{this.start=!0}),50)):this.#o&&this.seekTo(0)}#x(){this.pause(),this.seekTo(this.#w(),!0),this.setVolume(this.getVolume(),!0),this.setPlaybackRate(this.getPlaybackRate(),!0),this.play(!0)}#I(){const t=this.#w(!0);this.panel.setCurrent(t,this.#V()),this.seekTo(t),this.setVolume(this.getVolume(!0)),this.setPlaybackRate(this.getPlaybackRate(!0))}#F(){if(this.panel=new z(this,this.volume||this.getVolume(),this.getPlaybackRate()),null!=this.panel.buttonPlay&&(this.panel.buttonPlay.onclick=t=>this.doPlaySwitch()),null!=this.panel.inputProgress&&(this.panel.inputProgress.onclick=t=>{const e=t.target,i=e.children[0],s=t.offsetX,o=e.clientWidth,l=parseInt(i.max),a=Math.floor(s/o*l);i.value=a,this.panel.setCurrent(a),this.seekTo(a),setTimeout((t=>{this.play()}),500)}),null!=this.panel.buttonVolume){let t;this.panel.buttonVolume.onclick=e=>{clearTimeout(t),t=setTimeout((t=>{this.panel.buttonVolume.parentElement.parentElement.open=!1}),1e3)},this.panel.inputVolumeMini.onmouseover=e=>{clearTimeout(t)},this.panel.inputVolumeMini.onmouseleave=e=>{clearTimeout(t),t=setTimeout((t=>{this.panel.buttonVolume.parentElement.parentElement.open=!1}),1e3)},this.panel.inputVolumeMini.onclick=t=>{const e=t.offsetX,i=this.panel.inputVolumeMini.clientWidth,s=parseInt(this.panel.inputVolumeMini.children[0].max),o=Math.floor(e/i*s);this.panel.inputVolumeMini.children[0].value=o,this.setVolume(o),this.setMute(0===o),this.panel.setMuteIcon(0===o)}}null!=this.panel.buttonMute&&(this.panel.buttonMute.onclick=t=>this.setMute()),null!=this.panel.inputVolume&&(this.panel.inputVolume.onclick=t=>{const e=t.offsetX,i=this.panel.inputVolume.clientWidth,s=parseInt(this.panel.inputVolume.children[0].max),o=Math.floor(e/i*s);this.panel.inputVolume.children[0].value=o,this.setVolume(o),this.setMute(0===o),this.panel.setMuteIcon(0===o)}),null!=this.panel.buttonRate&&(this.panel.buttonRate.onclick=t=>{const e=t.target;"1x_mobiledata"===e.innerText?(e.innerText="speed_1_25",this.setPlaybackRate(1.25)):"speed_1_25"===e.innerText?(e.innerText="speed_1_5x",this.setPlaybackRate(1.5)):"speed_1_5x"===e.innerText?(e.innerText="speed_2x",this.setPlaybackRate(2)):"speed_2x"===e.innerText?(e.innerText="speed_0_5x",this.setPlaybackRate(.5)):(e.innerText="1x_mobiledata",this.setPlaybackRate(1))})}showPanel(t){null!=this.panel&&(this.panel.show(),null!=t&&this.panel.hide(t))}#r(){null!=this.audio&&(this.#l=B("audio",{preload:"auto",controls:""},[B("source",{src:this.audio})]),this.#F(),this.body[g](this.#l),this.body[g](this.panel.body),this.#l.onloadedmetadata=()=>this.#T(),this.#l.onplaying=()=>this.#k(),this.#l.onpause=()=>this.#C(),this.#l.onended=()=>this.#R())}#n(){null!=this[h]&&(this.#l=B("video",{preload:"auto",playsinline:""},[B("source",this[h])]),E||(this.#l.onclick=t=>this.doPlaySwitch()),this.body[g](this.#l),this.#F(),this.body[g](this.panel.body),this.#l.onloadedmetadata=t=>this.#T(),this.#l.onplaying=t=>this.#k(),this.#l.onpause=t=>this.#C(),this.#l.onended=t=>this.#R(),E&&(this.#a=B("video.PDFullPlayer",{preload:"metadata",playsinline:null},[B("source",this[h])]),this.#a.onplaying=t=>this.#x(),this.#a.onpause=t=>this.#I(),this.#a.onended=t=>this.#R(),S?this.#a.addEventListener("webkitpresentationmodechanged",(t=>{this.stateFull="fullscreen"===this.#a.webkitPresentationMode})):this.#a.addEventListener("fullscreenchange",(t=>{this.stateFull=document.fullscreenElement===this.#a})),this.body[g](this.#a)))}#u(){if(null==this.youtube)return;const t=$(24),e=$(24);this.start=!0;const i=B("div#"+t),s=B("div.body",[i]);E||(s.onclick=t=>this.doPlaySwitch()),this.body[g](s),this.mask=B("div.mask",{sec:this.live?"live":0}),E||(this.mask.onclick=t=>this.doPlaySwitch()),this.body[g](this.mask),this.#F(),this.body[g](this.panel.body),O=async()=>{if(await this.#_(),this.#l=new YT.Player(t,{videoId:this.youtube,width:"100%",height:"100%",playerVars:{...Y,playsinline:1},events:{onReady:t=>this.#T(),onStateChange:t=>{this.ytState=t.data,0===t.data?this.#R():1===t.data?this.#k():2===t.data&&this.#C()}}}),!E)return;const i=B("div#"+e+".PDFullPlayer");this.body[g](i),this.#a=new YT.Player(e,{videoId:this.youtube,width:"100%",height:"100%",playerVars:{...Y,playsinline:0},events:{onReady:t=>{console.log("is Ready"),this.isFullReady=!0},onStateChange:t=>{0===t.data?this.#R():2===t.data?this.#I():3===t.data&&this.#x()}}})},O()}#h(){if(null==this.vimeo)return;const t=B("iframe",{src:"https://player.vimeo.com/video/"+this.vimeo+"?background=1&loop=0&autoplay=0&controls=0",frameborder:"0",allowfullscreen:"",allow:"autoplay;"}),e=B("div.body",[t]);E||(e.onclick=t=>this.doPlaySwitch()),this.body[g](e),this.#F(),this.body[g](this.panel.body),this.#l=new Vimeo.Player(t),this.#l.ready().then((t=>this.#T())),this.#l.on("play",(t=>this.#k())),this.#l.on("pause",(t=>this.#C())),this.#l.on("ended",(t=>this.#R())),E&&this.#l.on("fullscreenchange",(t=>{this.panel.setPlayIcon(!t.fullscreen)}))}async#_(t){const e=t=>{if(this.youtube)return this.youtube,t(t);if(this.youtube=prompt("Youtube 影片ID / 網址"),/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(this.youtube)){let e=videoId.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);this.youtube=e&&11==e[7][r]?e[7]:null,this.youtube?(history.pushState(null,null,location.href.split("?")[0]+`?videoId=${this.youtube}`),t()):fitVideoId(t)}else t(t)};if(!t)return new Promise(((t,i)=>e(t)));e(t)}};class z{body;#A;#D;#E;buttonPlay;buttonVolume;buttonMute;buttonRate;buttonFull;inputProgress;inputVolume;inputVolumeMini;#S;width=8;constructor(t,e,i){this.#D=t,this.#E=e,this.body=B("div.panel"),this.body.onmouseover=t=>this.show();for(let s of t.panelConfig)this.#Y(s),this.#O(t,s),this.#B(t,s),this.#L(s,e),this.#$(s,e),this.#z(t,s,i),this.#j(t,s);"minimal"===t.typeConfig&&(this.body.style.width=this.width+"px")}#Y(t){"play"===t&&(this.width+=24,this.buttonPlay=B("span.material-symbols-outlined","play_arrow"),this.body[g](this.buttonPlay))}#O(t,e){"progress"===e&&(this.inputProgress=B("section.progress",[B("input.progress",{type:"range",name:"progress",min:0,value:0})]),this.body[g](this.inputProgress))}#B(t,e){"time"===e&&"minimal"!==t.typeConfig&&(this.#S=B("p.time"),this.body[g](this.#S))}#L(t,e){"volume"===t&&(this.width+=104,this.buttonMute=B("span.material-symbols-outlined",this.#q),this.inputVolume=B("section",[B("input.volume",{type:"range",name:"volume",min:0,max:100,value:e})]),this.body[g](B("section.volume",[this.buttonMute,this.inputVolume])))}#$(t,e){"volumeMini"===t&&null==this.#D.audio&&(this.width+=32,this.buttonVolume=B("span.material-symbols-outlined",this.#q),this.inputVolumeMini=B("section",[B("input.volume",{type:"range",name:"volume",min:0,max:100,value:e})]),this.body[g](B("details.volume",[B("summary",[this.buttonVolume]),this.inputVolumeMini])))}#z(t,e,i){"rate"===e&&(this.width+=32,this.buttonRate=B("span.material-symbols-outlined","1x_mobiledata"),this.body[g](this.buttonRate))}#j(t,e){"full"===e&&null==this.#D.audio&&(this.width+=32,this.buttonFull=B("span.material-symbols-outlined","fullscreen"),this.buttonFull.onclick=e=>{const i=document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen||!1,s=t.body.requestFullscreen||t.body.msRequestFullscreen||t.body.mozRequestFullScreen||t.body.webkitRequestFullscreen,o=document.exitFullscreen||document.msExitFullscree||document.mozCancelFullScreen||document.webkitExitFullscreen;t.stateFull=!i,i?E?t.mobilePause():o&&o.call(document):E?(t.pause(),t.play(!0)):s&&s.call(t.body)},this.body[g](this.buttonFull))}get#q(){return this.#D.isMuted()?"no_sound":"volume_up"}setPlayIcon(t){null!=this.buttonPlay&&(this.buttonPlay.innerText=t?"play_arrow":"pause")}setMuteIcon(t){null!=this.buttonMute&&(this.buttonMute[c]=t?"no_sound":"volume_up"),null!=this.inputVolume&&(this.inputVolume.children[0].value=t?0:this.#D.volume)}reset(){null!=this.buttonPlay&&(this.buttonPlay.innerText="play_arrow"),this.show(),this.setCurrent(0)}setVolume(t){null!=this.inputVolume&&(this.inputVolume.children[0].value=t)}duration(t){null!=this.inputProgress&&(this.inputProgress.children[0].max=t)}setCurrent(t,e){if(null!=this.inputProgress&&(this.inputProgress.children[0].value=t),null==t||null==this.#S)return;const i=t,s=Math.floor(i>3599?i/3600:0),o=Math.floor(i>3599?i%3600/60:i>59?i/60:0),l=i>3599?i%3600%60:i>59?i%60:i;this.#S.innerText=e>=3600?`${s<10?`0${s}`:s}:${o<10?`0${o}`:o}:${l<10?`0${l}`:l}`:e>=60?`${o<10?`0${o}`:o}:${l<10?`0${l}`:l}`:`0:${l<10?`0${l}`:l}`}show(){clearTimeout(this.#A),this.body.classList.remove("hide")}hide(t){clearTimeout(this.#A),this.#A=setTimeout((t=>{this.#D.isPaused()||this.body.classList.add("hide")}),1e3*t)}}}("undefined"==typeof window?window={}:window);export const player = window.PDPlayer;