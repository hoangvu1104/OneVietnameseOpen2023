"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1320:(M,p,l)=>{l.d(p,{c:()=>d});var t=l(1308),e=l(7864),m=l(1898);const d=(c,o)=>{let s,n;const i=(g,_,f)=>{if(typeof document>"u")return;const w=document.elementFromPoint(g,_);w&&o(w)?w!==s&&(u(),r(w,f)):u()},r=(g,_)=>{s=g,n||(n=s);const f=s;(0,t.c)(()=>f.classList.add("ion-activated")),_()},u=(g=!1)=>{if(!s)return;const _=s;(0,t.c)(()=>_.classList.remove("ion-activated")),g&&n!==s&&s.click(),s=void 0};return(0,m.createGesture)({el:c,gestureName:"buttonActiveDrag",threshold:0,onStart:g=>i(g.currentX,g.currentY,e.a),onMove:g=>i(g.currentX,g.currentY,e.b),onEnd:()=>{u(!0),(0,e.h)(),n=void 0}})}},2225:(M,p,l)=>{l.d(p,{g:()=>t});const t=(o,s,n,i,r)=>m(o[1],s[1],n[1],i[1],r).map(u=>e(o[0],s[0],n[0],i[0],u)),e=(o,s,n,i,r)=>r*(3*s*Math.pow(r-1,2)+r*(-3*n*r+3*n+i*r))-o*Math.pow(r-1,3),m=(o,s,n,i,r)=>c((i-=r)-3*(n-=r)+3*(s-=r)-(o-=r),3*n-6*s+3*o,3*s-3*o,o).filter(g=>g>=0&&g<=1),c=(o,s,n,i)=>{if(0===o)return((o,s,n)=>{const i=s*s-4*o*n;return i<0?[]:[(-s+Math.sqrt(i))/(2*o),(-s-Math.sqrt(i))/(2*o)]})(s,n,i);const r=(3*(n/=o)-(s/=o)*s)/3,u=(2*s*s*s-9*s*n+27*(i/=o))/27;if(0===r)return[Math.pow(-u,1/3)];if(0===u)return[Math.sqrt(-r),-Math.sqrt(-r)];const g=Math.pow(u/2,2)+Math.pow(r/3,3);if(0===g)return[Math.pow(u/2,.5)-s/3];if(g>0)return[Math.pow(-u/2+Math.sqrt(g),1/3)-Math.pow(u/2+Math.sqrt(g),1/3)-s/3];const _=Math.sqrt(Math.pow(-r/3,3)),f=Math.acos(-u/(2*Math.sqrt(Math.pow(-r/3,3)))),w=2*Math.pow(_,1/3);return[w*Math.cos(f/3)-s/3,w*Math.cos((f+2*Math.PI)/3)-s/3,w*Math.cos((f+4*Math.PI)/3)-s/3]}},5062:(M,p,l)=>{l.d(p,{i:()=>t});const t=e=>e&&""!==e.dir?"rtl"===e.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(M,p,l)=>{l.r(p),l.d(p,{startFocusVisible:()=>d});const t="ion-focused",m=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],d=c=>{let o=[],s=!0;const n=c?c.shadowRoot:document,i=c||document.body,r=E=>{o.forEach(h=>h.classList.remove(t)),E.forEach(h=>h.classList.add(t)),o=E},u=()=>{s=!1,r([])},g=E=>{s=m.includes(E.key),s||r([])},_=E=>{if(s&&void 0!==E.composedPath){const h=E.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));r(h)}},f=()=>{n.activeElement===i&&r([])};return n.addEventListener("keydown",g),n.addEventListener("focusin",_),n.addEventListener("focusout",f),n.addEventListener("touchstart",u),n.addEventListener("mousedown",u),{destroy:()=>{n.removeEventListener("keydown",g),n.removeEventListener("focusin",_),n.removeEventListener("focusout",f),n.removeEventListener("touchstart",u),n.removeEventListener("mousedown",u)},setFocus:r}}},7626:(M,p,l)=>{l.d(p,{C:()=>c,a:()=>m,d:()=>d});var t=l(5861),e=l(5730);const m=function(){var o=(0,t.Z)(function*(s,n,i,r,u,g){var _;if(s)return s.attachViewToDom(n,i,u,r);if(!(g||"string"==typeof i||i instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof i?null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement(i):i;return r&&r.forEach(w=>f.classList.add(w)),u&&Object.assign(f,u),n.appendChild(f),yield new Promise(w=>(0,e.c)(f,w)),f});return function(n,i,r,u,g,_){return o.apply(this,arguments)}}(),d=(o,s)=>{if(s){if(o)return o.removeViewFromDom(s.parentElement,s);s.remove()}return Promise.resolve()},c=()=>{let o,s;return{attachViewToDom:function(){var r=(0,t.Z)(function*(u,g,_={},f=[]){var w,E;if(o=u,g){const v="string"==typeof g?null===(w=o.ownerDocument)||void 0===w?void 0:w.createElement(g):g;f.forEach(a=>v.classList.add(a)),Object.assign(v,_),o.appendChild(v),yield new Promise(a=>(0,e.c)(v,a))}else if(o.children.length>0&&!o.children[0].classList.contains("ion-delegate-host")){const a=null===(E=o.ownerDocument)||void 0===E?void 0:E.createElement("div");a.classList.add("ion-delegate-host"),f.forEach(C=>a.classList.add(C)),a.append(...o.children),o.appendChild(a)}const h=document.querySelector("ion-app")||document.body;return s=document.createComment("ionic teleport"),o.parentNode.insertBefore(s,o),h.appendChild(o),o});return function(g,_){return r.apply(this,arguments)}}(),removeViewFromDom:()=>(o&&s&&(s.parentNode.insertBefore(o,s),s.remove()),Promise.resolve())}}},7864:(M,p,l)=>{l.d(p,{a:()=>d,b:()=>c,c:()=>m,d:()=>s,h:()=>o});const t={getEngine(){var n;const i=window;return i.TapticEngine||(null===(n=i.Capacitor)||void 0===n?void 0:n.isPluginAvailable("Haptics"))&&i.Capacitor.Plugins.Haptics},available(){var n;const i=window;return!!this.getEngine()&&("web"!==(null===(n=i.Capacitor)||void 0===n?void 0:n.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(n){const i=this.getEngine();if(!i)return;const r=this.isCapacitor()?n.style.toUpperCase():n.style;i.impact({style:r})},notification(n){const i=this.getEngine();if(!i)return;const r=this.isCapacitor()?n.style.toUpperCase():n.style;i.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},e=()=>t.available(),m=()=>{e()&&t.selection()},d=()=>{e()&&t.selectionStart()},c=()=>{e()&&t.selectionChanged()},o=()=>{e()&&t.selectionEnd()},s=n=>{e()&&t.impact(n)}},109:(M,p,l)=>{l.d(p,{a:()=>t,b:()=>g,c:()=>s,d:()=>_,e:()=>O,f:()=>o,g:()=>f,h:()=>m,i:()=>e,j:()=>a,k:()=>C,l:()=>n,m:()=>r,n:()=>w,o:()=>i,p:()=>c,q:()=>d,r:()=>v,s:()=>y,t:()=>u,u:()=>E,v:()=>h});const t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8416:(M,p,l)=>{l.d(p,{I:()=>c,a:()=>r,b:()=>o,c:()=>_,d:()=>w,f:()=>u,g:()=>i,i:()=>n,p:()=>f,r:()=>E,s:()=>g});var t=l(5861),e=l(5730),m=l(4147);const c="ion-content",o=".ion-content-scroll-host",s=`${c}, ${o}`,n=h=>"ION-CONTENT"===h.tagName,i=function(){var h=(0,t.Z)(function*(v){return n(v)?(yield new Promise(a=>(0,e.c)(v,a)),v.getScrollElement()):v});return function(a){return h.apply(this,arguments)}}(),r=h=>h.querySelector(o)||h.querySelector(s),u=h=>h.closest(s),g=(h,v)=>n(h)?h.scrollToTop(v):Promise.resolve(h.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),_=(h,v,a,C)=>n(h)?h.scrollByPoint(v,a,C):Promise.resolve(h.scrollBy({top:a,left:v,behavior:C>0?"smooth":"auto"})),f=h=>(0,m.a)(h,c),w=h=>{if(n(h)){const a=h.scrollY;return h.scrollY=!1,a}return h.style.setProperty("overflow","hidden"),!0},E=(h,v)=>{n(h)?h.scrollY=v:h.style.removeProperty("overflow")}},5234:(M,p,l)=>{l.r(p),l.d(p,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>t,copyVisualViewport:()=>v,keyboardDidClose:()=>f,keyboardDidOpen:()=>g,keyboardDidResize:()=>_,resetKeyboardAssist:()=>s,setKeyboardClose:()=>u,setKeyboardOpen:()=>r,startKeyboardAssist:()=>n,trackViewportChanges:()=>h});const t="ionKeyboardDidShow",e="ionKeyboardDidHide";let d={},c={},o=!1;const s=()=>{d={},c={},o=!1},n=a=>{i(a),a.visualViewport&&(c=v(a.visualViewport),a.visualViewport.onresize=()=>{h(a),g()||_(a)?r(a):f(a)&&u(a)})},i=a=>{a.addEventListener("keyboardDidShow",C=>r(a,C)),a.addEventListener("keyboardDidHide",()=>u(a))},r=(a,C)=>{w(a,C),o=!0},u=a=>{E(a),o=!1},g=()=>!o&&d.width===c.width&&(d.height-c.height)*c.scale>150,_=a=>o&&!f(a),f=a=>o&&c.height===a.innerHeight,w=(a,C)=>{const O=new CustomEvent(t,{detail:{keyboardHeight:C?C.keyboardHeight:a.innerHeight-c.height}});a.dispatchEvent(O)},E=a=>{const C=new CustomEvent(e);a.dispatchEvent(C)},h=a=>{d=Object.assign({},c),c=v(a.visualViewport)},v=a=>({width:Math.round(a.width),height:Math.round(a.height),offsetTop:a.offsetTop,offsetLeft:a.offsetLeft,pageTop:a.pageTop,pageLeft:a.pageLeft,scale:a.scale})},9852:(M,p,l)=>{l.d(p,{c:()=>e});var t=l(3457);const e=m=>{let d,c,o;const s=()=>{d=()=>{o=!0,m&&m(!0)},c=()=>{o=!1,m&&m(!1)},null==t.w||t.w.addEventListener("keyboardWillShow",d),null==t.w||t.w.addEventListener("keyboardWillHide",c)};return s(),{init:s,destroy:()=>{null==t.w||t.w.removeEventListener("keyboardWillShow",d),null==t.w||t.w.removeEventListener("keyboardWillHide",c),d=c=void 0},isKeyboardVisible:()=>o}}},7741:(M,p,l)=>{l.d(p,{S:()=>e});const e={bubbles:{dur:1e3,circles:9,fn:(m,d,c)=>{const o=m*d/c-m+"ms",s=2*Math.PI*d/c;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(m,d,c)=>{const o=d/c,s=m*o-m+"ms",n=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(m,d)=>({r:6,style:{left:9-9*d+"px","animation-delay":-110*d+"ms"}})},lines:{dur:1e3,lines:8,fn:(m,d,c)=>({y1:14,y2:26,style:{transform:`rotate(${360/c*d+(d<c/2?180:-180)}deg)`,"animation-delay":m*d/c-m+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(m,d,c)=>({y1:12,y2:20,style:{transform:`rotate(${360/c*d+(d<c/2?180:-180)}deg)`,"animation-delay":m*d/c-m+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(m,d,c)=>({y1:17,y2:29,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":m*d/c-m+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(m,d,c)=>({y1:12,y2:20,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":m*d/c-m+"ms"}})}}},6659:(M,p,l)=>{l.r(p),l.d(p,{createSwipeBackGesture:()=>c});var t=l(5730),e=l(5062),m=l(1898);l(4349);const c=(o,s,n,i,r)=>{const u=o.ownerDocument.defaultView;let g=(0,e.i)(o);const f=a=>g?-a.deltaX:a.deltaX;return(0,m.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:a=>(g=(0,e.i)(o),(a=>{const{startX:y}=a;return g?y>=u.innerWidth-50:y<=50})(a)&&s()),onStart:n,onMove:a=>{const y=f(a)/u.innerWidth;i(y)},onEnd:a=>{const C=f(a),y=u.innerWidth,O=C/y,T=(a=>g?-a.velocityX:a.velocityX)(a),S=T>=0&&(T>.2||C>y/2),b=(S?1-O:O)*y;let L=0;if(b>5){const D=b/Math.abs(T);L=Math.min(D,540)}r(S,O<=0?.01:(0,t.l)(0,O,.9999),L)}})}},1083:(M,p,l)=>{l.d(p,{T:()=>n});var t=l(1571),e=l(5054),m=l(6895);function d(i,r){if(1&i&&(t.TgZ(0,"td",6),t._uU(1),t.qZA()),2&i){const u=t.oxw().$implicit;t.xp6(1),t.Oqu(u.time)}}function c(i,r){1&i&&(t.TgZ(0,"tr",7)(1,"td",8),t._uU(2,"Gi\u1ea3i lao 15 ph\xfat"),t.qZA()())}function o(i,r){1&i&&(t.TgZ(0,"tr",7)(1,"td",8),t._uU(2,"Ngh\u1ec9 tr\u01b0a 1 ti\u1ebfng"),t.qZA()())}function s(i,r){if(1&i&&(t.ynx(0),t.TgZ(1,"tr"),t.YNc(2,d,2,1,"td",1),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"div",2),t._UZ(7,"img",3),t.qZA()(),t.TgZ(8,"td",4),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11," vs "),t.qZA(),t.TgZ(12,"td",4),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"div",2),t._UZ(16,"img",3),t.qZA()()(),t.YNc(17,c,3,0,"tr",5),t.YNc(18,o,3,0,"tr",5),t.BQk()),2&i){const u=r.$implicit,g=r.index,_=t.oxw();t.xp6(1),t.ekj("border-bottom",(g+1)%4!=0),t.xp6(1),t.Q6J("ngIf",(g+1)%4==1),t.xp6(2),t.Oqu(u.field),t.xp6(3),t.Q6J("src",_.commonFunctions.getTeamImageStyle(u.teamA,_.displayLogo),t.LSH),t.xp6(2),t.Oqu(u.teamA),t.xp6(4),t.Oqu(u.teamB),t.xp6(3),t.Q6J("src",_.commonFunctions.getTeamImageStyle(u.teamB,_.displayLogo),t.LSH),t.xp6(1),t.Q6J("ngIf",(g+1)%4==0&&g+1!==_.divisions.length),t.xp6(1),t.Q6J("ngIf",g+1===_.divisions.length)}}let n=(()=>{class i{constructor(u){this.commonFunctions=u,this.divisions=[],this.displayLogo=!1,this.message="M\xe0u \xe1o"}ngOnInit(){this.message=this.displayLogo?"Logo":"M\xe0u \xe1o"}}return i.\u0275fac=function(u){return new(u||i)(t.Y36(e.y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-round-robin"]],inputs:{divisions:"divisions",displayLogo:"displayLogo"},decls:16,vars:1,consts:[[4,"ngFor","ngForOf"],["rowspan","4",4,"ngIf"],[1,"team-info"],[1,"team-image",3,"src"],[1,"team-name"],["class","spacer-row",4,"ngIf"],["rowspan","4"],[1,"spacer-row"],["colspan","9"]],template:function(u,g){1&u&&(t.TgZ(0,"table")(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Th\u1eddi gian"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"S\xe2n"),t.qZA(),t._UZ(7,"th"),t.TgZ(8,"th"),t._uU(9,"T\xean \u0111\u1ed9i"),t.qZA(),t._UZ(10,"th"),t.TgZ(11,"th"),t._uU(12,"T\xean \u0111\u1ed9i"),t.qZA(),t._UZ(13,"th"),t.qZA()(),t.TgZ(14,"tbody"),t.YNc(15,s,19,10,"ng-container",0),t.qZA()()),2&u&&(t.xp6(15),t.Q6J("ngForOf",g.divisions))},dependencies:[m.sg,m.O5],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:5px;text-align:center;font-size:large;border-bottom:1px solid #ccc}th[_ngcontent-%COMP%]{background-color:#f2f2f2}td[_ngcontent-%COMP%]{background-color:#fff}input[type=number][_ngcontent-%COMP%]{width:50px;text-align:center;border:none;background-color:#f2f2f2}input[type=number][_ngcontent-%COMP%]:focus{outline:none;background-color:#eaeaea}.spacer-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:none;background-color:#adff2f;height:20px;font-weight:700}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}.team-info[_ngcontent-%COMP%]{display:flex;align-items:center}.team-image[_ngcontent-%COMP%]{width:50px;height:50px}.team-name[_ngcontent-%COMP%]{font-weight:700;margin-left:5px;font-size:large}"]}),i})()},1085:(M,p,l)=>{l.d(p,{H:()=>m});var t=l(1571),e=l(8058);let m=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(o){return new(o||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-toolbar-header"]],decls:4,vars:0,consts:[[1,"title"]],template:function(o,s){1&o&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",0),t._uU(3," OTTAWA ONE VIETNAMESE OPEN 2023 "),t.qZA()()())},dependencies:[e.Gu,e.wd,e.sr],styles:[".title[_ngcontent-%COMP%]{text-align:center;font-size:large;font-weight:700}.logo-avatar[_ngcontent-%COMP%]{width:80px;height:80px}"]}),d})()},5054:(M,p,l)=>{l.d(p,{y:()=>c});var t=l(4973),e=l(5880),m=l(1571),d=l(8058);let c=(()=>{class o{constructor(n){this.menuCtrl=n}getTeamImageStyle(n,i=!1){let r;switch(n){case t.p.BFC1:case t.p.BFC2:case t.p.BFC2_Star:case t.p.BFC1_Star:r=`${e.m.ImagesPath}`+(i?`${e.m.YellowTeam}`:`${e.m.BFCLogo}`);break;case t.p.FC3Mien:case t.p.FC3Mien_Star:r=`${e.m.ImagesPath}`+(i?`${e.m.RedTeam}`:`${e.m.FC3MienLogo}`);break;case t.p.FCCuaLo:case t.p.FCCuaLo_Star:r=`${e.m.ImagesPath}`+(i?`${e.m.BlueTeam}`:`${e.m.FCCuaLoLogo}`);break;case t.p.SaiGonUnited:case t.p.SaiGonUnited_Star:r=`${e.m.ImagesPath}`+(i?`${e.m.BlueTeam}`:`${e.m.SaigonUnitedLogo}`);break;case t.p.Stechco:case t.p.Stechco_Star:r=`${e.m.ImagesPath}`+(i?`${e.m.BlueTeam}`:`${e.m.StechcoLogo}`);break;case t.p.VietSentinels:case t.p.VietSentinels_Star:r=`${e.m.ImagesPath}`+(i?`${e.m.BlueTeam}`:`${e.m.VietSentinelsLogo}`);break;case t.p.VinabisFC:case t.p.VinabisFC_Star:r=`${e.m.ImagesPath}`+(i?`${e.m.BlueTeam}`:`${e.m.VinabisLogo}`);break;default:r=`${e.m.ImagesPath}`+(i?`${e.m.WhiteTeam}`:`${e.m.CupLogo}`)}return r}enableMenuSwipe(){this.menuCtrl.swipeGesture(!0,"menu-content"),this.menuCtrl.enable(!0,"menu-content")}}return o.\u0275fac=function(n){return new(n||o)(m.LFG(d._q))},o.\u0275prov=m.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},6354:(M,p,l)=>{l.d(p,{I:()=>t});let t=(()=>{class e{}return e.Field1="S\xe2n 1",e.Field2="S\xe2n 2",e.Field3="S\xe2n 3",e.Field4="S\xe2n 4",e})()},5880:(M,p,l)=>{l.d(p,{m:()=>t});let t=(()=>{class e{}return e.ImagesPath="/OneVietnameseOpen2023/assets/images/",e.VMULogo="VMU.jpg",e.StechcoLogo="Stechco.png",e.FC3MienLogo="3MienFC.jpg",e.FCCuaLoLogo="FCCuaLo.png",e.BFCLogo="BFC.JPG",e.VietSentinelsLogo="VietSentinels.jpg",e.VinabisLogo="Vinabis.jpg",e.SaigonUnitedLogo="FCSaigonUnited.png",e.CupLogo="Logo_OVO2023.png",e.RedTeam="RedTeam.jpg",e.PinkTeam="PinkTeam.jpg",e.OrangeTeam="OrangeTeam.jpg",e.YellowTeam="YellowTeam.jpg",e.WhiteTeam="WhiteTeam.jpg",e.BlueTeam="BlueTeam.jpg",e})()},4973:(M,p,l)=>{l.d(p,{p:()=>t});let t=(()=>{class e{}return e.BFC1="BFC",e.BFC1_Star="BFC(*)",e.BFC2="JR-BFC",e.BFC2_Star="JR-BFC(*)",e.FC3Mien="3 Mi\u1ec1n FC",e.FC3Mien_Star="3 Mi\u1ec1n FC(*)",e.FCCuaLo="FC C\u1eeda L\xf2",e.FCCuaLo_Star="FC C\u1eeda L\xf2(*)",e.SaiGonUnited="S\xe0i G\xf2n United",e.SaiGonUnited_Star="S\xe0i G\xf2n United(*)",e.Stechco="Stechco",e.Stechco_Star="Stechco(*)",e.VietSentinels="Viet Sentinels",e.VietSentinels_Star="Viet Sentinels(*)",e.VinabisFC="Vinabis FC",e.VinabisFC_Star="Vinabis FC(*)",e})()}}]);