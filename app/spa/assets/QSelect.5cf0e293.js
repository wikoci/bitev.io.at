import{L as rt,aK as Ke,aL as st,aM as ct,aN as dt,af as qt,g as ft,r as O,c as y,w as ge,a8 as Et,_ as Ht,x as _t,v as Bt,l as vt,n as G,h as V,aO as Lt,aP as Tt,H as Rt,K as Pt,aj as Pe,au as Dt,aQ as Ae,aR as nt,U as Nt,ak as me,aS as Kt,an as Se,aD as $t,aT as ot,aU as jt,aV as Qt,aW as Ut,a9 as Wt,aX as Xt}from"./index.968208bb.js";import{Q as Yt}from"./QChip.9b15c5ac.js";import{Q as Gt}from"./QMenu.e34f9a2a.js";import{r as Ne}from"./rtl.b51694b1.js";var Jt=rt({name:"QField",inheritAttrs:!1,props:Ke,emits:st,setup(){return ct(dt())}});const K=1e3,Zt=["start","center","end","start-force","center-force","end-force"],mt=Array.prototype.filter,el=window.getComputedStyle(document.body).overflowAnchor===void 0?qt:function(e,d){e!==null&&(cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;const r=e.children||[];mt.call(r,F=>F.dataset&&F.dataset.qVsAnchor!==void 0).forEach(F=>{delete F.dataset.qVsAnchor});const C=r[d];C&&C.dataset&&(C.dataset.qVsAnchor="")}))};function he(e,d){return e+d}function De(e,d,r,C,F,a,q,w){const g=e===window?document.scrollingElement||document.documentElement:e,E=F===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-q-w,scrollMaxSize:0,offsetStart:-q,offsetEnd:-w};if(F===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=g.scrollLeft,s.scrollViewSize+=g.clientWidth),s.scrollMaxSize=g.scrollWidth,a===!0&&(s.scrollStart=(Ne===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=g.scrollTop,s.scrollViewSize+=g.clientHeight),s.scrollMaxSize=g.scrollHeight),r!==null)for(let k=r.previousElementSibling;k!==null;k=k.previousElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=k[E]);if(C!==null)for(let k=C.nextElementSibling;k!==null;k=k.nextElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=k[E]);if(d!==e){const k=g.getBoundingClientRect(),z=d.getBoundingClientRect();F===!0?(s.offsetStart+=z.left-k.left,s.offsetEnd-=z.width):(s.offsetStart+=z.top-k.top,s.offsetEnd-=z.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function at(e,d,r,C){d==="end"&&(d=(e===window?document.body:e)[r===!0?"scrollWidth":"scrollHeight"]),e===window?r===!0?(C===!0&&(d=(Ne===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-d),window.scrollTo(d,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,d):r===!0?(C===!0&&(d=(Ne===!0?e.scrollWidth-e.offsetWidth:0)-d),e.scrollLeft=d):e.scrollTop=d}function ze(e,d,r,C){if(r>=C)return 0;const F=d.length,a=Math.floor(r/K),q=Math.floor((C-1)/K)+1;let w=e.slice(a,q).reduce(he,0);return r%K!==0&&(w-=d.slice(a*K,r).reduce(he,0)),C%K!==0&&C!==F&&(w-=d.slice(C,q*K).reduce(he,0)),w}const St={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},sl=Object.keys(St),tl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...St};function ll({virtualScrollLength:e,getVirtualScrollTarget:d,getVirtualScrollEl:r,virtualScrollItemSizeComputed:C}){const F=ft(),{props:a,emit:q,proxy:w}=F,{$q:g}=w;let E,s,k,z=[],h;const N=O(0),B=O(0),Q=O({}),X=O(null),T=O(null),U=O(null),M=O({from:0,to:0}),I=y(()=>a.tableColspan!==void 0?a.tableColspan:100);C===void 0&&(C=y(()=>a.virtualScrollItemSize));const W=y(()=>C.value+";"+a.virtualScrollHorizontal),ye=y(()=>W.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);ge(ye,()=>{Y()}),ge(W,ue);function ue(){Z(s,!0)}function we(n){Z(n===void 0?s:n)}function J(n,i){const f=d();if(f==null||f.nodeType===8)return;const x=De(f,r(),X.value,T.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);k!==x.scrollViewSize&&Y(x.scrollViewSize),ne(f,x,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,Zt.indexOf(i)>-1?i:s>-1&&n>s?"end":"start")}function $(){const n=d();if(n==null||n.nodeType===8)return;const i=De(n,r(),X.value,T.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),f=e.value-1,x=i.scrollMaxSize-i.offsetStart-i.offsetEnd-B.value;if(E===i.scrollStart)return;if(i.scrollMaxSize<=0){ne(n,i,0,0);return}k!==i.scrollViewSize&&Y(i.scrollViewSize),be(M.value.from);const H=Math.floor(i.scrollMaxSize-Math.max(i.scrollViewSize,i.offsetEnd)-Math.min(h[f],i.scrollViewSize/2));if(H>0&&Math.ceil(i.scrollStart)>=H){ne(n,i,f,i.scrollMaxSize-i.offsetEnd-z.reduce(he,0));return}let S=0,v=i.scrollStart-i.offsetStart,_=v;if(v<=x&&v+i.scrollViewSize>=N.value)v-=N.value,S=M.value.from,_=v;else for(let m=0;v>=z[m]&&S<f;m++)v-=z[m],S+=K;for(;v>0&&S<f;)v-=h[S],v>-i.scrollViewSize?(S++,_=v):_=h[S]+v;ne(n,i,S,_)}function ne(n,i,f,x,H){const S=typeof H=="string"&&H.indexOf("-force")>-1,v=S===!0?H.replace("-force",""):H,_=v!==void 0?v:"start";let m=Math.max(0,f-Q.value[_]),R=m+Q.value.total;R>e.value&&(R=e.value,m=Math.max(0,R-Q.value.total)),E=i.scrollStart;const ae=m!==M.value.from||R!==M.value.to;if(ae===!1&&v===void 0){Ce(f);return}const{activeElement:pe}=document,j=U.value;ae===!0&&j!==null&&j!==pe&&j.contains(pe)===!0&&(j.addEventListener("focusout",Ve),setTimeout(()=>{j!==null&&j.removeEventListener("focusout",Ve)})),el(j,f-m);const Me=v!==void 0?h.slice(m,f).reduce(he,0):0;if(ae===!0){const ee=R>=M.value.from&&m<=M.value.to?M.value.to:R;M.value={from:m,to:ee},N.value=ze(z,h,0,m),B.value=ze(z,h,R,e.value),requestAnimationFrame(()=>{M.value.to!==R&&E===i.scrollStart&&(M.value={from:M.value.from,to:R},B.value=ze(z,h,R,e.value))})}requestAnimationFrame(()=>{if(E!==i.scrollStart)return;ae===!0&&be(m);const ee=h.slice(m,f).reduce(he,0),ie=ee+i.offsetStart+N.value,Fe=ie+h[f];let xe=ie+x;if(v!==void 0){const He=ee-Me,P=i.scrollStart+He;xe=S!==!0&&P<ie&&Fe<P+i.scrollViewSize?P:v==="end"?Fe-i.scrollViewSize:ie-(v==="start"?0:Math.round((i.scrollViewSize-h[f])/2))}E=xe,at(n,xe,a.virtualScrollHorizontal,g.lang.rtl),Ce(f)})}function be(n){const i=U.value;if(i){const f=mt.call(i.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),x=f.length,H=a.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let S=n,v,_;for(let m=0;m<x;){for(v=H(f[m]),m++;m<x&&f[m].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=H(f[m]),m++;_=v-h[S],_!==0&&(h[S]+=_,z[Math.floor(S/K)]+=_),S++}}}function Ve(){U.value!==null&&U.value!==void 0&&U.value.focus()}function Z(n,i){const f=1*C.value;(i===!0||Array.isArray(h)===!1)&&(h=[]);const x=h.length;h.length=e.value;for(let S=e.value-1;S>=x;S--)h[S]=f;const H=Math.floor((e.value-1)/K);z=[];for(let S=0;S<=H;S++){let v=0;const _=Math.min((S+1)*K,e.value);for(let m=S*K;m<_;m++)v+=h[m];z.push(v)}s=-1,E=void 0,N.value=ze(z,h,0,M.value.from),B.value=ze(z,h,M.value.to,e.value),n>=0?(be(M.value.from),G(()=>{J(n)})):oe()}function Y(n){if(n===void 0&&typeof window!="undefined"){const v=d();v!=null&&v.nodeType!==8&&(n=De(v,r(),X.value,T.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}k=n;const i=parseFloat(a.virtualScrollSliceRatioBefore)||0,f=parseFloat(a.virtualScrollSliceRatioAfter)||0,x=1+i+f,H=n===void 0||n<=0?1:Math.ceil(n/C.value),S=Math.max(1,H,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/x));Q.value={total:Math.ceil(S*x),start:Math.ceil(S*i),center:Math.ceil(S*(.5+i)),end:Math.ceil(S*(1+i)),view:H}}function Ie(n,i){const f=a.virtualScrollHorizontal===!0?"width":"height",x={["--q-virtual-scroll-item-"+f]:C.value+"px"};return[n==="tbody"?V(n,{class:"q-virtual-scroll__padding",key:"before",ref:X},[V("tr",[V("td",{style:{[f]:`${N.value}px`,...x},colspan:I.value})])]):V(n,{class:"q-virtual-scroll__padding",key:"before",ref:X,style:{[f]:`${N.value}px`,...x}}),V(n,{class:"q-virtual-scroll__content",key:"content",ref:U,tabindex:-1},i.flat()),n==="tbody"?V(n,{class:"q-virtual-scroll__padding",key:"after",ref:T},[V("tr",[V("td",{style:{[f]:`${B.value}px`,...x},colspan:I.value})])]):V(n,{class:"q-virtual-scroll__padding",key:"after",ref:T,style:{[f]:`${B.value}px`,...x}})]}function Ce(n){s!==n&&(a.onVirtualScroll!==void 0&&q("virtualScroll",{index:n,from:M.value.from,to:M.value.to-1,direction:n<s?"decrease":"increase",ref:w}),s=n)}Y();const oe=Et($,g.platform.is.ios===!0?120:35);Ht(()=>{Y()});let o=!1;return _t(()=>{o=!0}),Bt(()=>{if(o!==!0)return;const n=d();E!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?at(n,E,a.virtualScrollHorizontal,g.lang.rtl):J(s)}),vt(()=>{oe.cancel()}),Object.assign(w,{scrollTo:J,reset:ue,refresh:we}),{virtualScrollSliceRange:M,virtualScrollSliceSizeComputed:Q,setVirtualScrollSize:Y,onVirtualScrollEvt:oe,localResetVirtualScroll:Z,padVirtualScroll:Ie,scrollTo:J,reset:ue,refresh:we}}const it=e=>["add","add-unique","toggle"].includes(e),ul=".*+?^${}()|[]\\",nl=Object.keys(Ke);var cl=rt({name:"QSelect",inheritAttrs:!1,props:{...tl,...Lt,...Ke,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:it},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...st,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:d,emit:r}){const{proxy:C}=ft(),{$q:F}=C,a=O(!1),q=O(!1),w=O(-1),g=O(""),E=O(!1),s=O(!1);let k,z,h,N,B,Q,X,T,U;const M=O(null),I=O(null),W=O(null),ye=O(null),ue=O(null),we=Tt(e),J=Xt(Ze),$=y(()=>Array.isArray(e.options)?e.options.length:0),ne=y(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:be,virtualScrollSliceSizeComputed:Ve,localResetVirtualScroll:Z,padVirtualScroll:Y,onVirtualScrollEvt:Ie,scrollTo:Ce,setVirtualScrollSize:oe}=ll({virtualScrollLength:$,getVirtualScrollTarget:wt,getVirtualScrollEl:Ge,virtualScrollItemSizeComputed:ne}),o=dt(),n=y(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&z!==void 0?z:[],c=u.map(p=>yt(p,l));return e.modelValue===null&&t===!0?c.filter(p=>p!==null):c}return u}),i=y(()=>{const t={};return nl.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),f=y(()=>e.optionsDark===null?o.isDark.value:e.optionsDark),x=y(()=>ot(n.value)),H=y(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),S=y(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),v=y(()=>$.value===0),_=y(()=>n.value.map(t=>D.value(t)).join(", ")),m=y(()=>e.displayValue!==void 0?e.displayValue:_.value),R=y(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ae=y(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(R.value))),pe=y(()=>o.focused.value===!0?e.tabindex:-1),j=y(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${o.targetUid.value}_lb`};return w.value>=0&&(t["aria-activedescendant"]=`${o.targetUid.value}_${w.value}`),t}),Me=y(()=>({id:`${o.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ee=y(()=>n.value.map((t,u)=>({index:u,opt:t,html:R.value(t),selected:!0,removeAtIndex:ht,toggleOption:te,tabindex:pe.value}))),ie=y(()=>{if($.value===0)return[];const{from:t,to:u}=be.value;return e.options.slice(t,u).map((l,c)=>{const p=re.value(l)===!0,b=t+c,A={clickable:!0,active:!1,activeClass:He.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:f.value,role:"option",id:`${o.targetUid.value}_${b}`,onClick:()=>{te(l)}};return p!==!0&&(Le(l)===!0&&(A.active=!0),w.value===b&&(A.focused=!0),A["aria-selected"]=A.active===!0?"true":"false",F.platform.is.desktop===!0&&(A.onMousemove=()=>{a.value===!0&&se(b)})),{index:b,opt:l,html:R.value(l),label:D.value(l),selected:A.active,focused:A.focused,toggleOption:te,setOptionIndex:se,itemProps:A}})}),Fe=y(()=>e.dropdownIcon!==void 0?e.dropdownIcon:F.iconSet.arrow.dropdown),xe=y(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),He=y(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),P=y(()=>Be(e.optionValue,"value")),D=y(()=>Be(e.optionLabel,"label")),re=y(()=>Be(e.optionDisable,"disable")),Oe=y(()=>n.value.map(t=>P.value(t))),gt=y(()=>{const t={onInput:Ze,onChange:J,onKeydown:Ye,onKeyup:We,onKeypress:Xe,onFocus:Qe,onClick(u){h===!0&&me(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=J,t});ge(n,t=>{z=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&o.innerLoading.value!==!0&&(q.value!==!0&&a.value!==!0||x.value!==!0)&&(N!==!0&&ve(),(q.value===!0||a.value===!0)&&ce(""))},{immediate:!0}),ge(()=>e.fillInput,ve),ge(a,Te),ge($,Ot);function $e(t){return e.emitValue===!0?P.value(t):t}function _e(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();r("remove",{index:t,value:u.splice(t,1)[0]}),r("update:modelValue",u)}else r("update:modelValue",null)}function ht(t){_e(t),o.focus()}function je(t,u){const l=$e(t);if(e.multiple!==!0){e.fillInput===!0&&ke(D.value(t),!0,!0),r("update:modelValue",l);return}if(n.value.length===0){r("add",{index:0,value:l}),r("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&Le(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const c=e.modelValue.slice();r("add",{index:c.length,value:l}),c.push(l),r("update:modelValue",c)}function te(t,u){if(o.editable.value!==!0||t===void 0||re.value(t)===!0)return;const l=P.value(t);if(e.multiple!==!0){u!==!0&&(ke(e.fillInput===!0?D.value(t):"",!0,!0),le()),I.value!==null&&I.value.focus(),(n.value.length===0||Ae(P.value(n.value[0]),l)!==!0)&&r("update:modelValue",e.emitValue===!0?l:t);return}if((h!==!0||E.value===!0)&&o.focus(),Qe(),n.value.length===0){const b=e.emitValue===!0?l:t;r("add",{index:0,value:b}),r("update:modelValue",e.multiple===!0?[b]:b);return}const c=e.modelValue.slice(),p=Oe.value.findIndex(b=>Ae(b,l));if(p>-1)r("remove",{index:p,value:c.splice(p,1)[0]});else{if(e.maxValues!==void 0&&c.length>=e.maxValues)return;const b=e.emitValue===!0?l:t;r("add",{index:c.length,value:b}),c.push(b)}r("update:modelValue",c)}function se(t){if(F.platform.is.desktop!==!0)return;const u=t>-1&&t<$.value?t:-1;w.value!==u&&(w.value=u)}function qe(t=1,u){if(a.value===!0){let l=w.value;do l=nt(l+t,-1,$.value-1);while(l!==-1&&l!==w.value&&re.value(e.options[l])===!0);w.value!==l&&(se(l),Ce(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Ee(l>=0?D.value(e.options[l]):Q))}}function yt(t,u){const l=c=>Ae(P.value(c),t);return e.options.find(l)||u.find(l)||t}function Be(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:c=>c!==null&&typeof c=="object"&&l in c?c[l]:c}function Le(t){const u=P.value(t);return Oe.value.find(l=>Ae(l,u))!==void 0}function Qe(t){e.useInput===!0&&I.value!==null&&(t===void 0||I.value===t.target&&t.target.value===_.value)&&I.value.select()}function Ue(t){Nt(t,27)===!0&&a.value===!0&&(me(t),le(),ve()),r("keyup",t)}function We(t){const{value:u}=t.target;if(t.keyCode!==void 0){Ue(t);return}if(t.target.value="",clearTimeout(k),ve(),typeof u=="string"&&u.length>0){const l=u.toLocaleLowerCase(),c=b=>{const A=e.options.find(L=>b.value(L).toLocaleLowerCase()===l);return A===void 0?!1:(n.value.indexOf(A)===-1?te(A):le(),!0)},p=b=>{c(P)!==!0&&(c(D)===!0||b===!0||ce(u,!0,()=>p(!0)))};p()}else o.clearValue(t)}function Xe(t){r("keypress",t)}function Ye(t){if(r("keydown",t),Kt(t)===!0)return;const u=g.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(w.value>-1||u===!0);if(t.keyCode===27){Pe(t);return}if(t.keyCode===9&&l===!1){de();return}if(t.target===void 0||t.target.id!==o.targetUid.value)return;if(t.keyCode===40&&o.innerLoading.value!==!0&&a.value===!1){Se(t),fe();return}if(t.keyCode===8&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?_e(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&r("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(Se(t),w.value=-1,qe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&Ve.value!==void 0&&(Se(t),w.value=Math.max(-1,Math.min($.value,w.value+(t.keyCode===33?-1:1)*Ve.value.view)),qe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(Se(t),qe(t.keyCode===38?-1:1,e.multiple));const c=$.value;if((T===void 0||U<Date.now())&&(T=""),c>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||T.length>0)){a.value!==!0&&fe(t);const p=t.key.toLocaleLowerCase(),b=T.length===1&&T[0]===p;U=Date.now()+1500,b===!1&&(Se(t),T+=p);const A=new RegExp("^"+T.split("").map(Re=>ul.indexOf(Re)>-1?"\\"+Re:Re).join(".*"),"i");let L=w.value;if(b===!0||L<0||A.test(D.value(e.options[L]))!==!0)do L=nt(L+1,-1,c-1);while(L!==w.value&&(re.value(e.options[L])===!0||A.test(D.value(e.options[L]))!==!0));w.value!==L&&G(()=>{se(L),Ce(L),L>=0&&e.useInput===!0&&e.fillInput===!0&&Ee(D.value(e.options[L]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||T!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&Se(t),w.value>-1&&w.value<c){te(e.options[w.value]);return}if(u===!0){const p=(b,A)=>{if(A){if(it(A)!==!0)return}else A=e.newValueMode;if(b==null)return;ke("",e.multiple!==!0,!0),(A==="toggle"?te:je)(b,A==="add-unique"),e.multiple!==!0&&(I.value!==null&&I.value.focus(),le())};if(e.onNewValue!==void 0?r("newValue",g.value,p):p(g.value),e.multiple!==!0)return}a.value===!0?de():o.innerLoading.value!==!0&&fe()}}function Ge(){return h===!0?ue.value:W.value!==null&&W.value.contentEl!==null?W.value.contentEl:void 0}function wt(){return Ge()}function bt(){return e.hideSelected===!0?[]:d["selected-item"]!==void 0?ee.value.map(t=>d["selected-item"](t)).slice():d.selected!==void 0?[].concat(d.selected()):e.useChips===!0?ee.value.map((t,u)=>V(Yt,{key:"option-"+u,removable:o.editable.value===!0&&re.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:pe.value,onRemove(){t.removeAtIndex(u)}},()=>V("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:D.value(t.opt)}))):[V("span",{[ae.value===!0?"innerHTML":"textContent"]:m.value})]}function Je(){if(v.value===!0)return d["no-option"]!==void 0?d["no-option"]({inputValue:g.value}):void 0;const t=d.option!==void 0?d.option:l=>V(Ut,{key:l.index,...l.itemProps},()=>V(jt,()=>V(Qt,()=>V("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=Y("div",ie.value.map(t));return d["before-options"]!==void 0&&(u=d["before-options"]().concat(u)),Wt(d["after-options"],u)}function Vt(t,u){const l=u===!0?{...j.value,...o.splitAttrs.attributes.value}:void 0,c={ref:u===!0?I:void 0,key:"i_t",class:H.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...l,id:u===!0?o.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...gt.value};return t!==!0&&h===!0&&(Array.isArray(c.class)===!0?c.class=[...c.class,"no-pointer-events"]:c.class+=" no-pointer-events"),V("input",c)}function Ze(t){clearTimeout(k),!(t&&t.target&&t.target.qComposing===!0)&&(Ee(t.target.value||""),N=!0,Q=g.value,o.focused.value!==!0&&(h!==!0||E.value===!0)&&o.focus(),e.onFilter!==void 0&&(k=setTimeout(()=>{ce(g.value)},e.inputDebounce)))}function Ee(t){g.value!==t&&(g.value=t,r("inputValue",t))}function ke(t,u,l){N=l!==!0,e.useInput===!0&&(Ee(t),(u===!0||l!==!0)&&(Q=t),u!==!0&&ce(t))}function ce(t,u,l){if(e.onFilter===void 0||u!==!0&&o.focused.value!==!0)return;o.innerLoading.value===!0?r("filterAbort"):(o.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&n.value.length>0&&N!==!0&&t===D.value(n.value[0])&&(t="");const c=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);clearTimeout(B),B=c,r("filter",t,(p,b)=>{(u===!0||o.focused.value===!0)&&B===c&&(clearTimeout(B),typeof p=="function"&&p(),s.value=!1,G(()=>{o.innerLoading.value=!1,o.editable.value===!0&&(u===!0?a.value===!0&&le():a.value===!0?Te(!0):a.value=!0),typeof b=="function"&&G(()=>{b(C)}),typeof l=="function"&&G(()=>{l(C)})}))},()=>{o.focused.value===!0&&B===c&&(clearTimeout(B),o.innerLoading.value=!1,s.value=!1),a.value===!0&&(a.value=!1)})}function Ct(){return V(Gt,{ref:W,class:S.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&v.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:xe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Me.value,onScrollPassive:Ie,onBeforeShow:tt,onBeforeHide:pt,onShow:xt},Je)}function pt(t){lt(t),de()}function xt(){oe()}function kt(t){me(t),I.value!==null&&I.value.focus(),E.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function At(t){me(t),G(()=>{E.value=!1})}function zt(){const t=[V(Jt,{class:`col-auto ${o.fieldClass.value}`,...i.value,for:o.targetUid.value,dark:f.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:g.value.length>0,...o.splitAttrs.listeners.value,onFocus:kt,onBlur:At},{...d,rawControl:()=>o.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(V("div",{ref:ue,class:S.value+" scroll",style:e.popupContentStyle,...Me.value,onClick:Pe,onScrollPassive:Ie},Je())),V($t,{ref:ye,modelValue:q.value,position:e.useInput===!0?"top":void 0,transitionShow:X,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:tt,onBeforeHide:It,onHide:Mt,onShow:Ft},()=>V("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(E.value===!0?" q-select__dialog--focused":"")},t))}function It(t){lt(t),ye.value!==null&&ye.value.__updateRefocusTarget(o.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),o.focused.value=!1}function Mt(t){le(),o.focused.value===!1&&r("blur",t),ve()}function Ft(){const t=document.activeElement;(t===null||t.id!==o.targetUid.value)&&I.value!==null&&I.value!==t&&I.value.focus(),oe()}function de(){q.value!==!0&&(w.value=-1,a.value===!0&&(a.value=!1),o.focused.value===!1&&(clearTimeout(B),B=void 0,o.innerLoading.value===!0&&(r("filterAbort"),o.innerLoading.value=!1,s.value=!1)))}function fe(t){o.editable.value===!0&&(h===!0?(o.onControlFocusin(t),q.value=!0,G(()=>{o.focus()})):o.focus(),e.onFilter!==void 0?ce(g.value):(v.value!==!0||d["no-option"]!==void 0)&&(a.value=!0))}function le(){q.value=!1,de()}function ve(){e.useInput===!0&&ke(e.multiple!==!0&&e.fillInput===!0&&n.value.length>0&&D.value(n.value[0])||"",!0,!0)}function Te(t){let u=-1;if(t===!0){if(n.value.length>0){const l=P.value(n.value[0]);u=e.options.findIndex(c=>Ae(P.value(c),l))}Z(u)}se(u)}function Ot(t,u){a.value===!0&&o.innerLoading.value===!1&&(Z(-1,!0),G(()=>{a.value===!0&&o.innerLoading.value===!1&&(t>u?Z():Te(!0))}))}function et(){q.value===!1&&W.value!==null&&W.value.updatePosition()}function tt(t){t!==void 0&&me(t),r("popupShow",t),o.hasPopupOpen=!0,o.onControlFocusin(t)}function lt(t){t!==void 0&&me(t),r("popupHide",t),o.hasPopupOpen=!1,o.onControlFocusout(t)}function ut(){h=F.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?d["no-option"]!==void 0||e.onFilter!==void 0||v.value===!1:!0),X=F.platform.is.ios===!0&&h===!0&&e.useInput===!0?"fade":e.transitionShow}return Rt(ut),Pt(et),ut(),vt(()=>{clearTimeout(k)}),Object.assign(C,{showPopup:fe,hidePopup:le,removeAtIndex:_e,add:je,toggleOption:te,getOptionIndex:()=>w.value,setOptionIndex:se,moveOptionSelection:qe,filter:ce,updateMenuPosition:et,updateInputValue:ke,isOptionSelected:Le,getEmittingOptionValue:$e,isOptionDisabled:(...t)=>re.value.apply(null,t)===!0,getOptionValue:(...t)=>P.value.apply(null,t),getOptionLabel:(...t)=>D.value.apply(null,t)}),Object.assign(o,{innerValue:n,fieldClass:y(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:M,targetRef:I,hasValue:x,showPopup:fe,floatingLabel:y(()=>e.hideSelected!==!0&&x.value===!0||typeof g.value=="number"||g.value.length>0||ot(e.displayValue)),getControlChild:()=>{if(o.editable.value!==!1&&(q.value===!0||v.value!==!0||d["no-option"]!==void 0))return h===!0?zt():Ct();o.hasPopupOpen===!0&&(o.hasPopupOpen=!1)},controlEvents:{onFocusin(t){o.onControlFocusin(t)},onFocusout(t){o.onControlFocusout(t,()=>{ve(),de()})},onClick(t){if(Pe(t),h!==!0&&a.value===!0){de(),I.value!==null&&I.value.focus();return}fe(t)}},getControl:t=>{const u=bt(),l=t===!0||q.value!==!0||h!==!0;if(e.useInput===!0)u.push(Vt(t,l));else if(o.editable.value===!0){const p=l===!0?j.value:void 0;u.push(V("input",{ref:l===!0?I:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?o.targetUid.value:void 0,value:m.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...p,onKeydown:Ye,onKeyup:Ue,onKeypress:Xe})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&u.push(V("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:We}))}if(we.value!==void 0&&e.disable!==!0&&Oe.value.length>0){const p=Oe.value.map(b=>V("option",{value:b,selected:!0}));u.push(V("select",{class:"hidden",name:we.value,multiple:e.multiple},p))}const c=e.useInput===!0||l!==!0?void 0:o.splitAttrs.attributes.value;return V("div",{class:"q-field__native row items-center",...c},u)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[V(Dt,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:Fe.value})]:null}),ct(o)}});export{cl as Q,Jt as a,ll as b,sl as c,tl as u};
