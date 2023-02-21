import{d as be,h as Ye,e as Ut,i as Vt,o as xt,a as jt,r as Q,c as q,w as ce,F as ze,g as Je,b as Gt,f as $t,T as Ht,j as Bt}from"./index.b01ba7b0.js";/*!
  * shared v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const ie=typeof window!="undefined",j=(e,t=!1)=>t?Symbol.for(e):Symbol(e),Kt=(e,t,n)=>Xt({l:e,k:t,s:n}),Xt=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),S=e=>typeof e=="number"&&isFinite(e),Yt=e=>Ie(e)==="[object Date]",ae=e=>Ie(e)==="[object RegExp]",re=e=>I(e)&&Object.keys(e).length===0;function zt(e,t){typeof console!="undefined"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const w=Object.assign;function Ae(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Jt=Object.prototype.hasOwnProperty;function Ne(e,t){return Jt.call(e,t)}const h=Array.isArray,v=e=>typeof e=="function",_=e=>typeof e=="string",A=e=>typeof e=="boolean",F=e=>e!==null&&typeof e=="object",Qe=Object.prototype.toString,Ie=e=>Qe.call(e),I=e=>Ie(e)==="[object Object]",Qt=e=>e==null?"":h(e)||I(e)&&e.toString===Qe?JSON.stringify(e,null,2):String(e);/*!
  * message-compiler v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const qe={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function Ze(e,t,n={}){const{domain:a,messages:l,args:s}=n,r=e,i=new SyntaxError(String(r));return i.code=e,t&&(i.location=t),i.domain=a,i}/*!
  * devtools-if v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const qt={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const G=[];G[0]={w:[0],i:[3,0],["["]:[4],o:[7]};G[1]={w:[1],["."]:[2],["["]:[4],o:[7]};G[2]={w:[2],i:[3,0],[0]:[3,0]};G[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};G[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};G[5]={["'"]:[4,0],o:8,l:[5,0]};G[6]={['"']:[4,0],o:8,l:[6,0]};const Zt=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function en(e){return Zt.test(e)}function tn(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function nn(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function an(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:en(t)?tn(t):"*"+t}function rn(e){const t=[];let n=-1,a=0,l=0,s,r,i,c,m,E,d;const g=[];g[0]=()=>{r===void 0?r=i:r+=i},g[1]=()=>{r!==void 0&&(t.push(r),r=void 0)},g[2]=()=>{g[0](),l++},g[3]=()=>{if(l>0)l--,a=4,g[0]();else{if(l=0,r===void 0||(r=an(r),r===!1))return!1;g[1]()}};function b(){const T=e[n+1];if(a===5&&T==="'"||a===6&&T==='"')return n++,i="\\"+T,g[0](),!0}for(;a!==null;)if(n++,s=e[n],!(s==="\\"&&b())){if(c=nn(s),d=G[a],m=d[c]||d.l||8,m===8||(a=m[0],m[1]!==void 0&&(E=g[m[1]],E&&(i=s,E()===!1))))return;if(a===7)return t}}const he=new Map;function ln(e,t){return F(e)?e[t]:null}function sn(e,t){if(!F(e))return null;let n=he.get(t);if(n||(n=rn(t),n&&he.set(t,n)),!n)return null;const a=n.length;let l=e,s=0;for(;s<a;){const r=l[n[s]];if(r===void 0)return null;l=r,s++}return l}const on=e=>e,cn=e=>"",un="text",mn=e=>e.length===0?"":e.join(""),fn=Qt;function Re(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function _n(e){const t=S(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(S(e.named.count)||S(e.named.n))?S(e.named.count)?e.named.count:S(e.named.n)?e.named.n:t:t}function gn(e,t){t.count||(t.count=e),t.n||(t.n=e)}function dn(e={}){const t=e.locale,n=_n(e),a=F(e.pluralRules)&&_(t)&&v(e.pluralRules[t])?e.pluralRules[t]:Re,l=F(e.pluralRules)&&_(t)&&v(e.pluralRules[t])?Re:void 0,s=N=>N[a(n,N.length,l)],r=e.list||[],i=N=>r[N],c=e.named||{};S(e.pluralIndex)&&gn(n,c);const m=N=>c[N];function E(N){const O=v(e.messages)?e.messages(N):F(e.messages)?e.messages[N]:!1;return O||(e.parent?e.parent.message(N):cn)}const d=N=>e.modifiers?e.modifiers[N]:on,g=I(e.processor)&&v(e.processor.normalize)?e.processor.normalize:mn,b=I(e.processor)&&v(e.processor.interpolate)?e.processor.interpolate:fn,T=I(e.processor)&&_(e.processor.type)?e.processor.type:un,y={list:i,named:m,plural:s,linked:(N,...O)=>{const[R,p]=O;let f="text",C="";O.length===1?F(R)?(C=R.modifier||C,f=R.type||f):_(R)&&(C=R||C):O.length===2&&(_(R)&&(C=R||C),_(p)&&(f=p||f));let M=E(N)(y);return f==="vnode"&&h(M)&&C&&(M=M[0]),C?d(C)(M,f):M},message:E,type:T,interpolate:b,normalize:g};return y}let En=null;qt.FunctionTranslate;function bn(e){return t=>En}const Nn={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function In(e,t,n){return[...new Set([n,...h(t)?t:F(t)?Object.keys(t):_(t)?[t]:[n]])]}function et(e,t,n){const a=_(n)?n:Te,l=e;l.__localeChainCache||(l.__localeChainCache=new Map);let s=l.__localeChainCache.get(a);if(!s){s=[];let r=[n];for(;h(r);)r=De(s,r,t);const i=h(t)||!I(t)?t:t.default?t.default:null;r=_(i)?[i]:i,h(r)&&De(s,r,!1),l.__localeChainCache.set(a,s)}return s}function De(e,t,n){let a=!0;for(let l=0;l<t.length&&A(a);l++){const s=t[l];_(s)&&(a=Tn(e,t[l],n))}return a}function Tn(e,t,n){let a;const l=t.split("-");do{const s=l.join("-");a=Ln(e,s,n),l.splice(-1,1)}while(l.length&&a===!0);return a}function Ln(e,t,n){let a=!1;if(!e.includes(t)&&(a=!0,t)){a=t[t.length-1]!=="!";const l=t.replace(/!/g,"");e.push(l),(h(n)||I(n))&&n[l]&&(a=n[l])}return a}const pn="9.3.0-beta.16",le=-1,Te="en-US",Se="",ve=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function On(){return{upper:(e,t)=>t==="text"&&_(e)?e.toUpperCase():t==="vnode"&&F(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&_(e)?e.toLowerCase():t==="vnode"&&F(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&_(e)?ve(e):t==="vnode"&&F(e)&&"__v_isVNode"in e?ve(e.children):e}}let Fn,tt;function yn(e){tt=e}let nt;function Cn(e){nt=e}let Me=0;function An(e={}){const t=_(e.version)?e.version:pn,n=_(e.locale)?e.locale:Te,a=h(e.fallbackLocale)||I(e.fallbackLocale)||_(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,l=I(e.messages)?e.messages:{[n]:{}},s=I(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},r=I(e.numberFormats)?e.numberFormats:{[n]:{}},i=w({},e.modifiers||{},On()),c=e.pluralRules||{},m=v(e.missing)?e.missing:null,E=A(e.missingWarn)||ae(e.missingWarn)?e.missingWarn:!0,d=A(e.fallbackWarn)||ae(e.fallbackWarn)?e.fallbackWarn:!0,g=!!e.fallbackFormat,b=!!e.unresolving,T=v(e.postTranslation)?e.postTranslation:null,L=I(e.processor)?e.processor:null,y=A(e.warnHtmlMessage)?e.warnHtmlMessage:!0,N=!!e.escapeParameter,O=v(e.messageCompiler)?e.messageCompiler:Fn,R=v(e.messageResolver)?e.messageResolver:tt||ln,p=v(e.localeFallbacker)?e.localeFallbacker:nt||In,f=F(e.fallbackContext)?e.fallbackContext:void 0,C=v(e.onWarn)?e.onWarn:zt,M=e,X=F(M.__datetimeFormatters)?M.__datetimeFormatters:new Map,Y=F(M.__numberFormatters)?M.__numberFormatters:new Map,z=F(M.__meta)?M.__meta:{};Me++;const V={version:t,cid:Me,locale:n,fallbackLocale:a,messages:l,modifiers:i,pluralRules:c,missing:m,missingWarn:E,fallbackWarn:d,fallbackFormat:g,unresolving:b,postTranslation:T,processor:L,warnHtmlMessage:y,escapeParameter:N,messageCompiler:O,messageResolver:R,localeFallbacker:p,fallbackContext:f,onWarn:C,__meta:z};return V.datetimeFormats=s,V.numberFormats=r,V.__datetimeFormatters=X,V.__numberFormatters=Y,V}function Le(e,t,n,a,l){const{missing:s,onWarn:r}=e;if(s!==null){const i=s(e,n,t,l);return _(i)?i:t}else return t}function Z(e,t,n){const a=e;a.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}let at=qe.__EXTEND_POINT__;const oe=()=>++at,B={INVALID_ARGUMENT:at,INVALID_DATE_ARGUMENT:oe(),INVALID_ISO_DATE_ARGUMENT:oe(),__EXTEND_POINT__:oe()};function K(e){return Ze(e,null,void 0)}const ke=()=>"",$=e=>v(e);function Pe(e,...t){const{fallbackFormat:n,postTranslation:a,unresolving:l,messageCompiler:s,fallbackLocale:r,messages:i}=e,[c,m]=ue(...t),E=A(m.missingWarn)?m.missingWarn:e.missingWarn,d=A(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn,g=A(m.escapeParameter)?m.escapeParameter:e.escapeParameter,b=!!m.resolvedMessage,T=_(m.default)||A(m.default)?A(m.default)?s?c:()=>c:m.default:n?s?c:()=>c:"",L=n||T!=="",y=_(m.locale)?m.locale:e.locale;g&&hn(m);let[N,O,R]=b?[c,y,i[y]||{}]:rt(e,c,y,r,d,E),p=N,f=c;if(!b&&!(_(p)||$(p))&&L&&(p=T,f=p),!b&&(!(_(p)||$(p))||!_(O)))return l?le:c;let C=!1;const M=()=>{C=!0},X=$(p)?p:lt(e,c,O,p,f,M);if(C)return p;const Y=Sn(e,O,R,m),z=dn(Y),V=Rn(e,X,z);return a?a(V,c):V}function hn(e){h(e.list)?e.list=e.list.map(t=>_(t)?Ae(t):t):F(e.named)&&Object.keys(e.named).forEach(t=>{_(e.named[t])&&(e.named[t]=Ae(e.named[t]))})}function rt(e,t,n,a,l,s){const{messages:r,onWarn:i,messageResolver:c,localeFallbacker:m}=e,E=m(e,a,n);let d={},g,b=null;const T="translate";for(let L=0;L<E.length&&(g=E[L],d=r[g]||{},(b=c(d,t))===null&&(b=d[t]),!(_(b)||v(b)));L++){const y=Le(e,t,g,s,T);y!==t&&(b=y)}return[b,g,d]}function lt(e,t,n,a,l,s){const{messageCompiler:r,warnHtmlMessage:i}=e;if($(a)){const m=a;return m.locale=m.locale||n,m.key=m.key||t,m}if(r==null){const m=()=>a;return m.locale=n,m.key=t,m}const c=r(a,Dn(e,n,l,a,i,s));return c.locale=n,c.key=t,c.source=a,c}function Rn(e,t,n){return t(n)}function ue(...e){const[t,n,a]=e,l={};if(!_(t)&&!S(t)&&!$(t))throw K(B.INVALID_ARGUMENT);const s=S(t)?String(t):($(t),t);return S(n)?l.plural=n:_(n)?l.default=n:I(n)&&!re(n)?l.named=n:h(n)&&(l.list=n),S(a)?l.plural=a:_(a)?l.default=a:I(a)&&w(l,a),[s,l]}function Dn(e,t,n,a,l,s){return{warnHtmlMessage:l,onError:r=>{throw s&&s(r),r},onCacheKey:r=>Kt(t,n,r)}}function Sn(e,t,n,a){const{modifiers:l,pluralRules:s,messageResolver:r,fallbackLocale:i,fallbackWarn:c,missingWarn:m,fallbackContext:E}=e,g={locale:t,modifiers:l,pluralRules:s,messages:b=>{let T=r(n,b);if(T==null&&E){const[,,L]=rt(E,b,t,i,c,m);T=r(L,b)}if(_(T)){let L=!1;const N=lt(e,b,t,T,b,()=>{L=!0});return L?ke:N}else return $(T)?T:ke}};return e.processor&&(g.processor=e.processor),a.list&&(g.list=a.list),a.named&&(g.named=a.named),S(a.plural)&&(g.pluralIndex=a.plural),g}function we(e,...t){const{datetimeFormats:n,unresolving:a,fallbackLocale:l,onWarn:s,localeFallbacker:r}=e,{__datetimeFormatters:i}=e,[c,m,E,d]=me(...t),g=A(E.missingWarn)?E.missingWarn:e.missingWarn;A(E.fallbackWarn)?E.fallbackWarn:e.fallbackWarn;const b=!!E.part,T=_(E.locale)?E.locale:e.locale,L=r(e,l,T);if(!_(c)||c==="")return new Intl.DateTimeFormat(T,d).format(m);let y={},N,O=null;const R="datetime format";for(let C=0;C<L.length&&(N=L[C],y=n[N]||{},O=y[c],!I(O));C++)Le(e,c,N,g,R);if(!I(O)||!_(N))return a?le:c;let p=`${N}__${c}`;re(d)||(p=`${p}__${JSON.stringify(d)}`);let f=i.get(p);return f||(f=new Intl.DateTimeFormat(N,w({},O,d)),i.set(p,f)),b?f.formatToParts(m):f.format(m)}const st=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function me(...e){const[t,n,a,l]=e,s={};let r={},i;if(_(t)){const c=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!c)throw K(B.INVALID_ISO_DATE_ARGUMENT);const m=c[3]?c[3].trim().startsWith("T")?`${c[1].trim()}${c[3].trim()}`:`${c[1].trim()}T${c[3].trim()}`:c[1].trim();i=new Date(m);try{i.toISOString()}catch{throw K(B.INVALID_ISO_DATE_ARGUMENT)}}else if(Yt(t)){if(isNaN(t.getTime()))throw K(B.INVALID_DATE_ARGUMENT);i=t}else if(S(t))i=t;else throw K(B.INVALID_ARGUMENT);return _(n)?s.key=n:I(n)&&Object.keys(n).forEach(c=>{st.includes(c)?r[c]=n[c]:s[c]=n[c]}),_(a)?s.locale=a:I(a)&&(r=a),I(l)&&(r=l),[s.key||"",i,s,r]}function We(e,t,n){const a=e;for(const l in n){const s=`${t}__${l}`;!a.__datetimeFormatters.has(s)||a.__datetimeFormatters.delete(s)}}function Ue(e,...t){const{numberFormats:n,unresolving:a,fallbackLocale:l,onWarn:s,localeFallbacker:r}=e,{__numberFormatters:i}=e,[c,m,E,d]=fe(...t),g=A(E.missingWarn)?E.missingWarn:e.missingWarn;A(E.fallbackWarn)?E.fallbackWarn:e.fallbackWarn;const b=!!E.part,T=_(E.locale)?E.locale:e.locale,L=r(e,l,T);if(!_(c)||c==="")return new Intl.NumberFormat(T,d).format(m);let y={},N,O=null;const R="number format";for(let C=0;C<L.length&&(N=L[C],y=n[N]||{},O=y[c],!I(O));C++)Le(e,c,N,g,R);if(!I(O)||!_(N))return a?le:c;let p=`${N}__${c}`;re(d)||(p=`${p}__${JSON.stringify(d)}`);let f=i.get(p);return f||(f=new Intl.NumberFormat(N,w({},O,d)),i.set(p,f)),b?f.formatToParts(m):f.format(m)}const ot=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function fe(...e){const[t,n,a,l]=e,s={};let r={};if(!S(t))throw K(B.INVALID_ARGUMENT);const i=t;return _(n)?s.key=n:I(n)&&Object.keys(n).forEach(c=>{ot.includes(c)?r[c]=n[c]:s[c]=n[c]}),_(a)?s.locale=a:I(a)&&(r=a),I(l)&&(r=l),[s.key||"",i,s,r]}function Ve(e,t,n){const a=e;for(const l in n){const s=`${t}__${l}`;!a.__numberFormatters.has(s)||a.__numberFormatters.delete(s)}}/*!
  * vue-i18n v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const vn="9.3.0-beta.16";Nn.__EXTEND_POINT__;let ct=qe.__EXTEND_POINT__;const P=()=>++ct,W={UNEXPECTED_RETURN_TYPE:ct,INVALID_ARGUMENT:P(),MUST_BE_CALL_SETUP_TOP:P(),NOT_INSLALLED:P(),NOT_AVAILABLE_IN_LEGACY_MODE:P(),REQUIRED_VALUE:P(),INVALID_VALUE:P(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:P(),NOT_INSLALLED_WITH_PROVIDE:P(),UNEXPECTED_ERROR:P(),NOT_COMPATIBLE_LEGACY_VUE_I18N:P(),BRIDGE_SUPPORT_VUE_2_ONLY:P(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:P(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:P(),__EXTEND_POINT__:P()};function U(e,...t){return Ze(e,null,void 0)}const _e=j("__translateVNode"),ge=j("__datetimeParts"),de=j("__numberParts"),Mn=j("__setPluralRules");j("__intlifyMeta");const kn=j("__injectWithOption");function Ee(e){if(!F(e))return e;for(const t in e)if(!!Ne(e,t))if(!t.includes("."))F(e[t])&&Ee(e[t]);else{const n=t.split("."),a=n.length-1;let l=e;for(let s=0;s<a;s++)n[s]in l||(l[n[s]]={}),l=l[n[s]];l[n[a]]=e[t],delete e[t],F(l[n[a]])&&Ee(l[n[a]])}return e}function it(e,t){const{messages:n,__i18n:a,messageResolver:l,flatJson:s}=t,r=I(n)?n:h(a)?{}:{[e]:{}};if(h(a)&&a.forEach(i=>{if("locale"in i&&"resource"in i){const{locale:c,resource:m}=i;c?(r[c]=r[c]||{},ee(m,r[c])):ee(m,r)}else _(i)&&ee(JSON.parse(i),r)}),l==null&&s)for(const i in r)Ne(r,i)&&Ee(r[i]);return r}const ne=e=>!F(e)||h(e);function ee(e,t){if(ne(e)||ne(t))throw U(W.INVALID_VALUE);for(const n in e)Ne(e,n)&&(ne(e[n])||ne(t[n])?t[n]=e[n]:ee(e[n],t[n]))}function Pn(e){return e.type}function wn(e,t,n){let a=F(t.messages)?t.messages:{};"__i18nGlobal"in n&&(a=it(e.locale.value,{messages:a,__i18n:n.__i18nGlobal}));const l=Object.keys(a);l.length&&l.forEach(s=>{e.mergeLocaleMessage(s,a[s])});{if(F(t.datetimeFormats)){const s=Object.keys(t.datetimeFormats);s.length&&s.forEach(r=>{e.mergeDateTimeFormat(r,t.datetimeFormats[r])})}if(F(t.numberFormats)){const s=Object.keys(t.numberFormats);s.length&&s.forEach(r=>{e.mergeNumberFormat(r,t.numberFormats[r])})}}}function xe(e){return $t(Ht,null,e,0)}let je=0;function Ge(e){return(t,n,a,l)=>e(n,a,Je()||void 0,l)}function ut(e={},t){const{__root:n}=e,a=n===void 0;let l=A(e.inheritLocale)?e.inheritLocale:!0;const s=Q(n&&l?n.locale.value:_(e.locale)?e.locale:Te),r=Q(n&&l?n.fallbackLocale.value:_(e.fallbackLocale)||h(e.fallbackLocale)||I(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s.value),i=Q(it(s.value,e)),c=Q(I(e.datetimeFormats)?e.datetimeFormats:{[s.value]:{}}),m=Q(I(e.numberFormats)?e.numberFormats:{[s.value]:{}});let E=n?n.missingWarn:A(e.missingWarn)||ae(e.missingWarn)?e.missingWarn:!0,d=n?n.fallbackWarn:A(e.fallbackWarn)||ae(e.fallbackWarn)?e.fallbackWarn:!0,g=n?n.fallbackRoot:A(e.fallbackRoot)?e.fallbackRoot:!0,b=!!e.fallbackFormat,T=v(e.missing)?e.missing:null,L=v(e.missing)?Ge(e.missing):null,y=v(e.postTranslation)?e.postTranslation:null,N=n?n.warnHtmlMessage:A(e.warnHtmlMessage)?e.warnHtmlMessage:!0,O=!!e.escapeParameter;const R=n?n.modifiers:I(e.modifiers)?e.modifiers:{};let p=e.pluralRules||n&&n.pluralRules,f;f=(()=>{const o={version:vn,locale:s.value,fallbackLocale:r.value,messages:i.value,modifiers:R,pluralRules:p,missing:L===null?void 0:L,missingWarn:E,fallbackWarn:d,fallbackFormat:b,unresolving:!0,postTranslation:y===null?void 0:y,warnHtmlMessage:N,escapeParameter:O,messageResolver:e.messageResolver,__meta:{framework:"vue"}};return o.datetimeFormats=c.value,o.numberFormats=m.value,o.__datetimeFormatters=I(f)?f.__datetimeFormatters:void 0,o.__numberFormatters=I(f)?f.__numberFormatters:void 0,An(o)})(),Z(f,s.value,r.value);function M(){return[s.value,r.value,i.value,c.value,m.value]}const X=q({get:()=>s.value,set:o=>{s.value=o,f.locale=s.value}}),Y=q({get:()=>r.value,set:o=>{r.value=o,f.fallbackLocale=r.value,Z(f,s.value,o)}}),z=q(()=>i.value),V=q(()=>c.value),Fe=q(()=>m.value);function _t(){return v(y)?y:null}function gt(o){y=o,f.postTranslation=o}function dt(){return T}function Et(o){o!==null&&(L=Ge(o)),T=o,f.missing=L}const H=(o,u,x,k,se,te)=>{M();let J;if(J=o(f),S(J)&&J===le){const[Wt,ra]=u();return n&&g?k(n):se(Wt)}else{if(te(J))return J;throw U(W.UNEXPECTED_RETURN_TYPE)}};function ye(...o){return H(u=>Reflect.apply(Pe,null,[u,...o]),()=>ue(...o),"translate",u=>Reflect.apply(u.t,u,[...o]),u=>u,u=>_(u))}function bt(...o){const[u,x,k]=o;if(k&&!F(k))throw U(W.INVALID_ARGUMENT);return ye(u,x,w({resolvedMessage:!0},k||{}))}function Nt(...o){return H(u=>Reflect.apply(we,null,[u,...o]),()=>me(...o),"datetime format",u=>Reflect.apply(u.d,u,[...o]),()=>Se,u=>_(u))}function It(...o){return H(u=>Reflect.apply(Ue,null,[u,...o]),()=>fe(...o),"number format",u=>Reflect.apply(u.n,u,[...o]),()=>Se,u=>_(u))}function Tt(o){return o.map(u=>_(u)||S(u)||A(u)?xe(String(u)):u)}const Lt={normalize:Tt,interpolate:o=>o,type:"vnode"};function pt(...o){return H(u=>{let x;const k=u;try{k.processor=Lt,x=Reflect.apply(Pe,null,[k,...o])}finally{k.processor=null}return x},()=>ue(...o),"translate",u=>u[_e](...o),u=>[xe(u)],u=>h(u))}function Ot(...o){return H(u=>Reflect.apply(Ue,null,[u,...o]),()=>fe(...o),"number format",u=>u[de](...o),()=>[],u=>_(u)||h(u))}function Ft(...o){return H(u=>Reflect.apply(we,null,[u,...o]),()=>me(...o),"datetime format",u=>u[ge](...o),()=>[],u=>_(u)||h(u))}function yt(o){p=o,f.pluralRules=p}function Ct(o,u){const x=_(u)?u:s.value,k=Ce(x);return f.messageResolver(k,o)!==null}function At(o){let u=null;const x=et(f,r.value,s.value);for(let k=0;k<x.length;k++){const se=i.value[x[k]]||{},te=f.messageResolver(se,o);if(te!=null){u=te;break}}return u}function ht(o){const u=At(o);return u!=null?u:n?n.tm(o)||{}:{}}function Ce(o){return i.value[o]||{}}function Rt(o,u){i.value[o]=u,f.messages=i.value}function Dt(o,u){i.value[o]=i.value[o]||{},ee(u,i.value[o]),f.messages=i.value}function St(o){return c.value[o]||{}}function vt(o,u){c.value[o]=u,f.datetimeFormats=c.value,We(f,o,u)}function Mt(o,u){c.value[o]=w(c.value[o]||{},u),f.datetimeFormats=c.value,We(f,o,u)}function kt(o){return m.value[o]||{}}function Pt(o,u){m.value[o]=u,f.numberFormats=m.value,Ve(f,o,u)}function wt(o,u){m.value[o]=w(m.value[o]||{},u),f.numberFormats=m.value,Ve(f,o,u)}je++,n&&ie&&(ce(n.locale,o=>{l&&(s.value=o,f.locale=o,Z(f,s.value,r.value))}),ce(n.fallbackLocale,o=>{l&&(r.value=o,f.fallbackLocale=o,Z(f,s.value,r.value))}));const D={id:je,locale:X,fallbackLocale:Y,get inheritLocale(){return l},set inheritLocale(o){l=o,o&&n&&(s.value=n.locale.value,r.value=n.fallbackLocale.value,Z(f,s.value,r.value))},get availableLocales(){return Object.keys(i.value).sort()},messages:z,get modifiers(){return R},get pluralRules(){return p||{}},get isGlobal(){return a},get missingWarn(){return E},set missingWarn(o){E=o,f.missingWarn=E},get fallbackWarn(){return d},set fallbackWarn(o){d=o,f.fallbackWarn=d},get fallbackRoot(){return g},set fallbackRoot(o){g=o},get fallbackFormat(){return b},set fallbackFormat(o){b=o,f.fallbackFormat=b},get warnHtmlMessage(){return N},set warnHtmlMessage(o){N=o,f.warnHtmlMessage=o},get escapeParameter(){return O},set escapeParameter(o){O=o,f.escapeParameter=o},t:ye,getLocaleMessage:Ce,setLocaleMessage:Rt,mergeLocaleMessage:Dt,getPostTranslationHandler:_t,setPostTranslationHandler:gt,getMissingHandler:dt,setMissingHandler:Et,[Mn]:yt};return D.datetimeFormats=V,D.numberFormats=Fe,D.rt=bt,D.te=Ct,D.tm=ht,D.d=Nt,D.n=It,D.getDateTimeFormat=St,D.setDateTimeFormat=vt,D.mergeDateTimeFormat=Mt,D.getNumberFormat=kt,D.setNumberFormat=Pt,D.mergeNumberFormat=wt,D[kn]=e.__injectWithOption,D[_e]=pt,D[ge]=Ft,D[de]=Ot,D}const pe={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function Wn({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((a,l)=>[...a,...l.type===ze?l.children:[l]],[]):t.reduce((n,a)=>{const l=e[a];return l&&(n[a]=l()),n},{})}function mt(e){return ze}const Un=be({name:"i18n-t",props:w({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>S(e)||!isNaN(e)}},pe),setup(e,t){const{slots:n,attrs:a}=t,l=e.i18n||Oe({useScope:e.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(d=>d!=="_"),r={};e.locale&&(r.locale=e.locale),e.plural!==void 0&&(r.plural=_(e.plural)?+e.plural:e.plural);const i=Wn(t,s),c=l[_e](e.keypath,i,r),m=w({},a),E=_(e.tag)||F(e.tag)?e.tag:mt();return Ye(E,m,c)}}}),$e=Un;function Vn(e){return h(e)&&!_(e[0])}function ft(e,t,n,a){const{slots:l,attrs:s}=t;return()=>{const r={part:!0};let i={};e.locale&&(r.locale=e.locale),_(e.format)?r.key=e.format:F(e.format)&&(_(e.format.key)&&(r.key=e.format.key),i=Object.keys(e.format).reduce((g,b)=>n.includes(b)?w({},g,{[b]:e.format[b]}):g,{}));const c=a(e.value,r,i);let m=[r.key];h(c)?m=c.map((g,b)=>{const T=l[g.type],L=T?T({[g.type]:g.value,index:b,parts:c}):[g.value];return Vn(L)&&(L[0].key=`${g.type}-${b}`),L}):_(c)&&(m=[c]);const E=w({},s),d=_(e.tag)||F(e.tag)?e.tag:mt();return Ye(d,E,m)}}const xn=be({name:"i18n-n",props:w({value:{type:Number,required:!0},format:{type:[String,Object]}},pe),setup(e,t){const n=e.i18n||Oe({useScope:"parent",__useComponent:!0});return ft(e,t,ot,(...a)=>n[de](...a))}}),He=xn,jn=be({name:"i18n-d",props:w({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},pe),setup(e,t){const n=e.i18n||Oe({useScope:"parent",__useComponent:!0});return ft(e,t,st,(...a)=>n[ge](...a))}}),Be=jn;function Gn(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const a=n.__getInstance(t);return a!=null?a.__composer:e.global.__composer}}function $n(e){const t=r=>{const{instance:i,modifiers:c,value:m}=r;if(!i||!i.$)throw U(W.UNEXPECTED_ERROR);const E=Gn(e,i.$),d=Ke(m);return[Reflect.apply(E.t,E,[...Xe(d)]),E]};return{created:(r,i)=>{const[c,m]=t(i);ie&&e.global===m&&(r.__i18nWatcher=ce(m.locale,()=>{i.instance&&i.instance.$forceUpdate()})),r.__composer=m,r.textContent=c},unmounted:r=>{ie&&r.__i18nWatcher&&(r.__i18nWatcher(),r.__i18nWatcher=void 0,delete r.__i18nWatcher),r.__composer&&(r.__composer=void 0,delete r.__composer)},beforeUpdate:(r,{value:i})=>{if(r.__composer){const c=r.__composer,m=Ke(i);r.textContent=Reflect.apply(c.t,c,[...Xe(m)])}},getSSRProps:r=>{const[i]=t(r);return{textContent:i}}}}function Ke(e){if(_(e))return{path:e};if(I(e)){if(!("path"in e))throw U(W.REQUIRED_VALUE,"path");return e}else throw U(W.INVALID_VALUE)}function Xe(e){const{path:t,locale:n,args:a,choice:l,plural:s}=e,r={},i=a||{};return _(n)&&(r.locale=n),S(l)&&(r.plural=l),S(s)&&(r.plural=s),[t,i,r]}function Hn(e,t,...n){const a=I(n[0])?n[0]:{},l=!!a.useI18nComponentName;(A(a.globalInstall)?a.globalInstall:!0)&&(e.component(l?"i18n":$e.name,$e),e.component(He.name,He),e.component(Be.name,Be)),e.directive("t",$n(t))}const Bn=j("global-vue-i18n");function Kn(e={},t){const n=A(e.globalInjection)?e.globalInjection:!0,a=!0,l=new Map,[s,r]=Xn(e),i=j("");function c(d){return l.get(d)||null}function m(d,g){l.set(d,g)}function E(d){l.delete(d)}{const d={get mode(){return"composition"},get allowComposition(){return a},async install(g,...b){if(g.__VUE_I18N_SYMBOL__=i,g.provide(g.__VUE_I18N_SYMBOL__,d),I(b[0])){const L=b[0];d.__composerExtend=L.__composerExtend,d.__vueI18nExtend=L.__vueI18nExtend}n&&ta(g,d.global),Hn(g,d,...b);const T=g.unmount;g.unmount=()=>{d.dispose(),T()}},get global(){return r},dispose(){s.stop()},__instances:l,__getInstance:c,__setInstance:m,__deleteInstance:E};return d}}function Oe(e={}){const t=Je();if(t==null)throw U(W.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw U(W.NOT_INSLALLED);const n=Yn(t),a=Jn(n),l=Pn(t),s=zn(e,l);if(s==="global")return wn(a,e,l),a;if(s==="parent"){let c=Qn(n,t,e.__useComponent);return c==null&&(c=a),c}const r=n;let i=r.__getInstance(t);if(i==null){const c=w({},e);"__i18n"in l&&(c.__i18n=l.__i18n),a&&(c.__root=a),i=ut(c),r.__composerExtend&&r.__composerExtend(i),qn(r,t),r.__setInstance(t,i)}return i}function Xn(e,t,n){const a=Ut();{const l=a.run(()=>ut(e));if(l==null)throw U(W.UNEXPECTED_ERROR);return[a,l]}}function Yn(e){{const t=Vt(e.isCE?Bn:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw U(e.isCE?W.NOT_INSLALLED_WITH_PROVIDE:W.UNEXPECTED_ERROR);return t}}function zn(e,t){return re(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function Jn(e){return e.mode==="composition"?e.global:e.global.__composer}function Qn(e,t,n=!1){let a=null;const l=t.root;let s=t.parent;for(;s!=null;){const r=e;if(e.mode==="composition"&&(a=r.__getInstance(s)),a!=null||l===s)break;s=s.parent}return a}function qn(e,t,n){xt(()=>{},t),jt(()=>{e.__deleteInstance(t)},t)}const Zn=["locale","fallbackLocale","availableLocales"],ea=["t","rt","d","n","tm","te"];function ta(e,t){const n=Object.create(null);Zn.forEach(a=>{const l=Object.getOwnPropertyDescriptor(t,a);if(!l)throw U(W.UNEXPECTED_ERROR);const s=Gt(l.value)?{get(){return l.value.value},set(r){l.value.value=r}}:{get(){return l.get&&l.get()}};Object.defineProperty(n,a,s)}),e.config.globalProperties.$i18n=n,ea.forEach(a=>{const l=Object.getOwnPropertyDescriptor(t,a);if(!l||!l.value)throw U(W.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${a}`,l)})}yn(sn);Cn(et);var na={account:"My account",all_models:"All models",globale_variables:"GLobal variables",continue:"Continue",collections:"Collections",signin:"Sign In",password:"Password",found:"found",logout:"Log Out",project_settings:"Project Settings"},sa=Bt(async({app:e,router:t})=>{const n=Kn({locale:"en",globalInjection:!0,messages:{en:na}});e.use(n)});export{sa as default};