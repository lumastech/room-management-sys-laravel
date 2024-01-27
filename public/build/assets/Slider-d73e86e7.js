import{K as ae,M as h,N,d as u,O as y,C as Me,y as Ne,D as Ee,q as he,B as ee,P as be,F as B,Q as x,j as we,o as A,e as C,b as xe,w as ye,a as j,i as te,k as De,t as Se}from"./app-f38dc963.js";import{_ as Ie}from"./_plugin-vue_export-helper-c27b6911.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const v={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},_e={itemsToShow:{default:v.itemsToShow,type:Number},itemsToScroll:{default:v.itemsToScroll,type:Number},wrapAround:{default:v.wrapAround,type:Boolean},throttle:{default:v.throttle,type:Number},snapAlign:{default:v.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:v.transition,type:Number},breakpoints:{default:v.breakpoints,type:Object},autoplay:{default:v.autoplay,type:Number},pauseAutoplayOnHover:{default:v.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:v.mouseDrag,type:Boolean},touchDrag:{default:v.touchDrag,type:Boolean},dir:{default:v.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:v.i18n,type:Object},settings:{default(){return{}},type:Object}};function Be({config:e,slidesCount:a}){const{snapAlign:t,wrapAround:s,itemsToShow:i=1}=e;if(s)return Math.max(a-1,0);let r;switch(t){case"start":r=a-i;break;case"end":r=a-1;break;case"center":case"center-odd":r=a-Math.ceil((i-.5)/2);break;case"center-even":r=a-Math.ceil(i/2);break;default:r=0;break}return Math.max(r,0)}function Le({config:e,slidesCount:a}){const{wrapAround:t,snapAlign:s,itemsToShow:i=1}=e;let r=0;if(t||i>a)return r;switch(s){case"start":r=0;break;case"end":r=i-1;break;case"center":case"center-odd":r=Math.floor((i-1)/2);break;case"center-even":r=Math.floor((i-2)/2);break;default:r=0;break}return r}function ne({val:e,max:a,min:t}){return a<t?e:Math.min(Math.max(e,t),a)}function Pe({config:e,currentSlide:a,slidesCount:t}){const{snapAlign:s,wrapAround:i,itemsToShow:r=1}=e;let g=a;switch(s){case"center":case"center-odd":g-=(r-1)/2;break;case"center-even":g-=(r-2)/2;break;case"end":g-=r-1;break}return i?g:ne({val:g,max:t-r,min:0})}function Te(e){return e?e.reduce((a,t)=>{var s;return t.type===B?[...a,...Te(t.children)]:((s=t.type)===null||s===void 0?void 0:s.name)==="CarouselSlide"?[...a,t]:a},[]):[]}function $({val:e,max:a,min:t=0}){return e>a?$({val:e-(a+1),max:a,min:t}):e<t?$({val:e+(a+1),max:a,min:t}):e}function Ve(e,a){let t;return a?function(...s){const i=this;t||(e.apply(i,s),t=!0,setTimeout(()=>t=!1,a))}:e}function Re(e,a){let t;return function(...s){t&&clearTimeout(t),t=setTimeout(()=>{e(...s),t=null},a)}}function Ae(e="",a={}){return Object.entries(a).reduce((t,[s,i])=>t.replace(`{${s}}`,String(i)),e)}var Xe=ae({name:"ARIA",setup(){const e=h("config",N(Object.assign({},v))),a=h("currentSlide",u(0)),t=h("slidesCount",u(0));return()=>y("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Ae(e.i18n.itemXofY,{currentSlide:a.value+1,slidesCount:t.value}))}}),$e=ae({name:"Carousel",props:_e,setup(e,{slots:a,emit:t,expose:s}){var i;const r=u(null),g=u([]),c=u(0),l=u(0),o=N(Object.assign({},v));let b=Object.assign({},v),S;const f=u((i=e.modelValue)!==null&&i!==void 0?i:0),Y=u(0),oe=u(0),O=u(0),E=u(0);let M,z;x("config",o),x("slidesCount",l),x("currentSlide",f),x("maxSlide",O),x("minSlide",E),x("slideWidth",c);function H(){S=Object.assign({},e.breakpoints),b=Object.assign(Object.assign(Object.assign({},b),e),{i18n:Object.assign(Object.assign({},b.i18n),e.i18n),breakpoints:void 0}),re(b)}function L(){if(!S||!Object.keys(S).length)return;const n=Object.keys(S).map(d=>Number(d)).sort((d,w)=>+w-+d);let p=Object.assign({},b);n.some(d=>{const w=window.matchMedia(`(min-width: ${d}px)`).matches;return w&&(p=Object.assign(Object.assign({},p),S[d])),w}),re(p)}function re(n){Object.entries(n).forEach(([p,d])=>o[p]=d)}const le=Re(()=>{L(),D()},16);function D(){if(!r.value)return;const n=r.value.getBoundingClientRect();c.value=n.width/o.itemsToShow}function U(){l.value<=0||(oe.value=Math.ceil((l.value-1)/2),O.value=Be({config:o,slidesCount:l.value}),E.value=Le({config:o,slidesCount:l.value}),o.wrapAround||(f.value=ne({val:f.value,max:O.value,min:E.value})))}Me(()=>{Ne(()=>D()),setTimeout(()=>D(),1e3),L(),ce(),window.addEventListener("resize",le,{passive:!0}),t("init")}),Ee(()=>{z&&clearTimeout(z),M&&clearInterval(M),window.removeEventListener("resize",le,{passive:!0})});let m=!1;const P={x:0,y:0},V={x:0,y:0},_=N({x:0,y:0}),R=u(!1),W=u(!1),Ce=()=>{R.value=!0},je=()=>{R.value=!1};function se(n){["INPUT","TEXTAREA","SELECT"].includes(n.target.tagName)||(m=n.type==="touchstart",m||n.preventDefault(),!(!m&&n.button!==0||k.value)&&(P.x=m?n.touches[0].clientX:n.clientX,P.y=m?n.touches[0].clientY:n.clientY,document.addEventListener(m?"touchmove":"mousemove",ie,!0),document.addEventListener(m?"touchend":"mouseup",ue,!0)))}const ie=Ve(n=>{W.value=!0,V.x=m?n.touches[0].clientX:n.clientX,V.y=m?n.touches[0].clientY:n.clientY;const p=V.x-P.x,d=V.y-P.y;_.y=d,_.x=p},o.throttle);function ue(){const n=o.dir==="rtl"?-1:1,p=Math.sign(_.x)*.4,d=Math.round(_.x/c.value+p)*n;if(d&&!m){const w=K=>{K.stopPropagation(),window.removeEventListener("click",w,!0)};window.addEventListener("click",w,!0)}T(f.value-d),_.x=0,_.y=0,W.value=!1,document.removeEventListener(m?"touchmove":"mousemove",ie,!0),document.removeEventListener(m?"touchend":"mouseup",ue,!0)}function ce(){!o.autoplay||o.autoplay<=0||(M=setInterval(()=>{o.pauseAutoplayOnHover&&R.value||X()},o.autoplay))}function de(){M&&(clearInterval(M),M=null),ce()}const k=u(!1);function T(n){const p=o.wrapAround?n:ne({val:n,max:O.value,min:E.value});f.value===p||k.value||(t("slide-start",{slidingToIndex:n,currentSlideIndex:f.value,prevSlideIndex:Y.value,slidesCount:l.value}),k.value=!0,Y.value=f.value,f.value=p,z=setTimeout(()=>{if(o.wrapAround){const d=$({val:p,max:O.value,min:0});d!==f.value&&(f.value=d,t("loop",{currentSlideIndex:f.value,slidingToIndex:n}))}t("update:modelValue",f.value),t("slide-end",{currentSlideIndex:f.value,prevSlideIndex:Y.value,slidesCount:l.value}),k.value=!1,de()},o.transition))}function X(){T(f.value+o.itemsToScroll)}function F(){T(f.value-o.itemsToScroll)}const fe={slideTo:T,next:X,prev:F};x("nav",fe),x("isSliding",k);const ve=he(()=>Pe({config:o,currentSlide:f.value,slidesCount:l.value}));x("slidesToScroll",ve);const Oe=he(()=>{const n=o.dir==="rtl"?-1:1,p=ve.value*c.value*n;return{transform:`translateX(${_.x-p}px)`,transition:`${k.value?o.transition:0}ms`,margin:o.wrapAround?`0 -${l.value*c.value}px`:"",width:"100%"}});function pe(){H(),L(),U(),D(),de()}Object.keys(_e).forEach(n=>{["modelValue"].includes(n)||ee(()=>e[n],pe)}),ee(()=>e.modelValue,n=>{n!==f.value&&T(Number(n))}),ee(l,U),t("before-init"),H();const ge={config:o,slidesCount:l,slideWidth:c,next:X,prev:F,slideTo:T,currentSlide:f,maxSlide:O,minSlide:E,middleSlide:oe};s({updateBreakpointsConfigs:L,updateSlidesData:U,updateSlideWidth:D,initDefaultConfigs:H,restartCarousel:pe,slideTo:T,next:X,prev:F,nav:fe,data:ge});const G=a.default||a.slides,q=a.addons,me=N(ge);return()=>{const n=Te(G==null?void 0:G(me)),p=(q==null?void 0:q(me))||[];n.forEach((Q,J)=>Q.props.index=J);let d=n;if(o.wrapAround){const Q=n.map((Z,I)=>be(Z,{index:-n.length+I,isClone:!0,key:`clone-before-${I}`})),J=n.map((Z,I)=>be(Z,{index:n.length+I,isClone:!0,key:`clone-after-${I}`}));d=[...Q,...n,...J]}g.value=n,l.value=Math.max(n.length,1);const w=y("ol",{class:"carousel__track",style:Oe.value,onMousedownCapture:o.mouseDrag?se:null,onTouchstartPassiveCapture:o.touchDrag?se:null},d),K=y("div",{class:"carousel__viewport"},w);return y("section",{ref:r,class:{carousel:!0,"is-sliding":k.value,"is-dragging":W.value,"is-hover":R.value,"carousel--rtl":o.dir==="rtl"},dir:o.dir,"aria-label":o.i18n.ariaGallery,tabindex:"0",onMouseenter:Ce,onMouseleave:je},[K,p,y(Xe)])}}}),ke;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(ke||(ke={}));const Ye=()=>{const e=h("config",N(Object.assign({},v))),a=h("maxSlide",u(1)),t=h("minSlide",u(1)),s=h("currentSlide",u(1)),i=h("nav",{}),r=c=>$({val:s.value,max:a.value,min:0})===c,g=[];for(let c=t.value;c<a.value+1;c++){const l=y("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(c)},"aria-label":Ae(e.i18n.ariaNavigateToSlide,{slideNumber:c+1}),onClick:()=>i.slideTo(c)}),o=y("li",{class:"carousel__pagination-item",key:c},l);g.push(o)}return y("ol",{class:"carousel__pagination"},g)};var ze=ae({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:a}){const t=h("config",N(Object.assign({},v))),s=h("currentSlide",u(0)),i=h("slidesToScroll",u(0)),r=h("isSliding",u(!1)),g=()=>e.index===s.value,c=()=>e.index===s.value-1,l=()=>e.index===s.value+1,o=()=>{const b=Math.floor(i.value),S=Math.ceil(i.value+t.itemsToShow-1);return e.index>=b&&e.index<=S};return()=>{var b;return y("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":o(),"carousel__slide--active":g(),"carousel__slide--prev":c(),"carousel__slide--next":l(),"carousel__slide--sliding":r.value},"aria-hidden":!o()},(b=a.default)===null||b===void 0?void 0:b.call(a))}}});const He={props:{houses:Object},components:{Carousel:$e,Slide:ze,Pagination:Ye}},Ue=["src"],We={class:"text-center px-4 bg-black/50 absolute text-white bottom-0 w-full"},Fe={id:"default-carousel",class:"relative max-w-7xl px-2 mx-auto my-7","data-carousel":"slide"},Ge={class:"relative h-56 overflow-hidden rounded-lg md:h-96 bg-teal-200"},qe=["src"],Ke={class:"text-center px-4 bg-black/50 absolute text-white bottom-0 w-full"},Qe={class:"absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"},Je=["aria-label","data-carousel-slide-to"],Ze=De('<button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev><span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"><svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg><span class="sr-only">Previous</span></span></button><button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next><span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"><svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><span class="sr-only">Next</span></span></button>',2);function et(e,a,t,s,i,r){const g=we("slider",!0),c=we("Carousel");return A(),C(B,null,[xe(c,{"items-to-show":1,itemsToScroll:1,"wrap-around":!0,autoplay:3e3,transition:1e3},{default:ye(()=>[xe(g,null,{default:ye(()=>[(A(!0),C(B,null,te(t.houses,l=>(A(),C("div",{key:l.id,class:"hidden duration-700 ease-in-out","data-carousel-item":""},[j("img",{src:l.image_1,class:"absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",alt:"..."},null,8,Ue),j("div",We,Se(l.area),1)]))),128))]),_:1})]),_:1}),j("div",Fe,[j("div",Ge,[(A(!0),C(B,null,te(t.houses,l=>(A(),C("div",{key:l.id,class:"hidden duration-700 ease-in-out","data-carousel-item":""},[j("img",{src:l.image_1,class:"absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",alt:"..."},null,8,qe),j("div",Ke,Se(l.area),1)]))),128))]),j("div",Qe,[(A(!0),C(B,null,te(t.houses,l=>(A(),C("button",{key:l,type:"button",class:"w-3 h-3 rounded-full","aria-current":"false","aria-label":"Slide 1"+--l,"data-carousel-slide-to":--l},null,8,Je))),128))]),Ze])],64)}const at=Ie(He,[["render",et]]);export{at as default};