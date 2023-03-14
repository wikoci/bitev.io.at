import{L as ee,r as x,c as E,w as te,o as Y,l as le,h as _,ap as de,au as me,bB as fe,b3 as pe,g as ge,bV as ve,aj as _e,P as he,bn as ye,bW as be,bX as xe,bx as j,m as K,bF as L,aq as m,aF as V,as as o,f as e,ax as ae,ay as z,B as U,V as C,aE as oe,aA as G,av as W,aC as se,at as n,bY as Ce,C as we,ar as Q,aw as T,bZ as ke,bA as B,bv as Qe,az as ne,E as w,Q as M,F as ie,a7 as re,u as Se,aD as $e,b_ as Te,bz as Ve,bI as Fe,aW as Le,aU as Pe,aV as X,b5 as qe,by as Re}from"./index.4b1fffc4.js";import{Q as Z}from"./QToolbar.faf17c8f.js";import{Q as Ie}from"./QHeader.4c1d1e4e.js";import{T as Be}from"./TouchPan.f3e282aa.js";import{n as I,c as De,d as Ee,T as Me,Q as A}from"./FaceMatcher.08a40757.js";import{Q as ze}from"./QPageSticky.34388a5c.js";import{Q as Ue}from"./QPage.74799896.js";import{u as Ne}from"./use-dialog-plugin-component.95702551.js";import{b as J}from"./route-block.b5bad31b.js";import"./touch.70a9dd44.js";const F=40,H=20;var Oe=ee({name:"QPullToRefresh",props:{color:String,bgColor:String,icon:String,noMouse:Boolean,disable:Boolean,scrollTarget:{default:void 0}},emits:["refresh"],setup(u,{slots:d,emit:i}){const{proxy:p}=ge(),{$q:y}=p,t=x("pull"),l=x(0),g=x(!1),r=x(-F),h=x(!1),k=x({}),s=E(()=>({opacity:l.value,transform:`translateY(${r.value}px) rotate(${l.value*360}deg)`})),a=E(()=>"q-pull-to-refresh__puller row flex-center"+(h.value===!0?" q-pull-to-refresh__puller--animating":"")+(u.bgColor!==void 0?` bg-${u.bgColor}`:""));function f(v){if(v.isFinal===!0){g.value===!0&&(g.value=!1,t.value==="pulled"?(t.value="refreshing",$({pos:H}),c()):t.value==="pull"&&$({pos:-F,ratio:0}));return}if(h.value===!0||t.value==="refreshing")return!1;if(v.isFirst===!0){if(ve(D)!==0||v.direction!=="down")return g.value===!0&&(g.value=!1,t.value="pull",$({pos:-F,ratio:0})),!1;g.value=!0;const{top:ce,left:ue}=P.getBoundingClientRect();k.value={top:ce+"px",left:ue+"px",width:window.getComputedStyle(P).getPropertyValue("width")}}_e(v.evt);const q=Math.min(140,Math.max(0,v.distance.y));r.value=q-F,l.value=he(q/(H+F),0,1);const R=r.value>H?"pulled":"pull";t.value!==R&&(t.value=R)}const b=E(()=>{const v={down:!0};return u.noMouse!==!0&&(v.mouse=!0),[[Be,f,void 0,v]]}),S=E(()=>`q-pull-to-refresh__content${g.value===!0?" no-pointer-events":""}`);function c(){i("refresh",()=>{$({pos:-F,ratio:0},()=>{t.value="pull"})})}function $({pos:v,ratio:q},R){h.value=!0,r.value=v,q!==void 0&&(l.value=q),clearTimeout(N),N=setTimeout(()=>{h.value=!1,R&&R()},300)}let P,D,N;function O(){D=ye(P,u.scrollTarget)}return te(()=>u.scrollTarget,O),Y(()=>{P=p.$el,O()}),le(()=>{clearTimeout(N)}),Object.assign(p,{trigger:c,updateScrollTarget:O}),()=>{const v=[_("div",{class:S.value},de(d.default)),_("div",{class:"q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top",style:k.value},[_("div",{class:a.value,style:s.value},[t.value!=="refreshing"?_(me,{name:u.icon||y.iconSet.pullToRefresh.icon,color:u.color,size:"32px"}):_(fe,{size:"24px",color:u.color})])])];return pe("div",{class:"q-pull-to-refresh"},v,"main",u.disable===!1,()=>b.value)}}});const Ae=[_("g",{transform:"translate(-20,-20)"},[_("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[_("animateTransform",{attributeName:"transform",type:"rotate",from:"90 50 50",to:"0 50 50",dur:"1s",repeatCount:"indefinite"})])]),_("g",{transform:"translate(20,20) rotate(15 50 50)"},[_("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[_("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"90 50 50",dur:"1s",repeatCount:"indefinite"})])])];var He=ee({name:"QSpinnerGears",props:be,setup(u){const{cSize:d,classes:i}=xe(u);return()=>_("svg",{class:i.value,width:d.value,height:d.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},Ae)}});const Ge={class:"hidden"},Ye={style:{height:"50vh"},class:"relative-position scroll text-center"},je=["src"],Ke={key:0,class:"text-center"},We={key:0,class:"text-bold"},Xe={key:1,class:"text-center"},Ze=n("p",null,"D\xE9tection en cours....",-1),Je={class:"fit text-center q-gutter-md"},et={__name:"addPhoto",setup(u){const d=x(null),i=j(),p=x(null),y=x(null),t=K({isReady:!1,score:0,img:[],loading:!1,items:[],height:window.innerHeight,stream:null,openPhoto:!1,onDetect:null});te(()=>t.img,s=>{console.log(s),s.length&&g()}),le(()=>{t.onDetect&&clearInterval(t.onDetect)}),Y(async()=>{t.isReady=!0,await r(),t.isReady=!1});function l(){t.score=0,t.img=[],setTimeout(()=>{y.value.chooseFile()},400)}const g=async()=>{t.loading=!0,p.value.addEventListener("load",async()=>{t.score=0,await h(),t.loading=!1})};async function r(){var s="/models";await Promise.all([I.ssdMobilenetv1.loadFromUri(s),I.tinyFaceDetector.loadFromUri(s),I.faceExpressionNet.loadFromUri(s),I.faceLandmark68Net.loadFromUri(s),I.faceRecognitionNet.loadFromUri(s)]).catch(a=>{console.log(a)})}async function h(){var f;const s=document.getElementById("img");De(s),document.getElementById("section");const a=await Ee(s,new Me).withFaceLandmarks().withFaceDescriptor();a&&(console.log(a),t.score=(f=a==null?void 0:a.detection)==null?void 0:f._score)}async function k(){i.loading.show();var s=await B.upload(t.img).then(a=>a).catch(a=>[]);d.value.onDialogOK(s),i.loading.hide()}return(s,a)=>{const f=L("van-uploader"),b=L("q-smart-dialog");return m(),V(b,{position:"bottom",maximized:"",ref_key:"dialogRef",ref:d,class:"flex fit flex-center",padding:""},{default:o(()=>[e(ae,null,{default:o(()=>[e(z,null,{default:o(()=>[U(e(C,{flat:"",round:"",icon:"mdi-close"},null,512),[[oe]]),e(G),t.score>.9?(m(),V(C,{key:0,onClick:k,round:"",color:"green",icon:"mdi-check"})):W("",!0)]),_:1}),e(se,{id:"section",style:{height:"65vh"},class:"scroll"},{default:o(()=>{var S;return[n("div",Ge,[e(f,{modelValue:t.img,"onUpdate:modelValue":a[0]||(a[0]=c=>t.img=c),"max-count":1,ref_key:"pick",ref:y},null,8,["modelValue"])]),e(Ce,{class:"fit",showing:t.isReady},{default:o(()=>[e(He,{size:"50px",color:"primary"})]),_:1},8,["showing"]),n("div",Ye,[U(n("img",{src:(S=t.img[0])==null?void 0:S.content,style:{height:"48vh"},id:"img",ref_key:"img",ref:p,alt:""},null,8,je),[[we,t.img.length]])]),t.loading?(m(),Q("div",Xe,[e(ke,{color:"primary",size:"2rem",thickness:5}),Ze])):(m(),Q("div",Ke,[t.score>.5?(m(),Q("span",We,"Score : "+T(Number(t.score).toFixed(2)),1)):W("",!0)]))]}),_:1}),e(z,{class:"q-pa-md bg-white text-white"},{default:o(()=>[n("div",Je,[e(C,{onClick:a[1]||(a[1]=S=>l()),color:"primary",class:"fit",label:"Capturer",unelevated:"",icon:"las la-portrait"})])]),_:1})]),_:1})]),_:1},512)}}},tt={class:"text-center"},lt={class:"text-center"},at=["src"],ot=n("p",null,[w(" Minimum 3 photos descriptives "),n("br"),w(" avec un socre de "),n("b",{class:"text-red"},"0.90>")],-1),st=n("div",{class:"shadow-1"},null,-1),nt={__name:"addUser",props:{item:null},setup(u){var h,k;const d=u,{dialogRef:i,onDialogOK:p}=Ne(),y=Qe(),t=j(),l=K({loading:!1,imgs:[],entry:{centreId:(k=(h=y.device)==null?void 0:h.centre)==null?void 0:k.id,first_name:"",last_name:"",contact:null,email:null,facials:[]}});d.item&&(l.entry={...d.item});async function g(){var s={...l.entry};if(s=Te.omit(s,["centre"]),l.loading=!0,d.item)var a=await B.updateOne("employees",{where:{id:d.item.id},data:s}).then(f=>f).catch(f=>f);else var a=await B.createOne("employees",{data:s}).then(b=>b).catch(b=>b);a.id?p():t.notify({message:"Service indisponible"}),l.loading=!1}function r(){t.dialog({component:et}).onOk(s=>{l.entry.facials.push(s)})}return(s,a)=>{const f=L("van-divider"),b=L("n-carousel-item"),S=L("n-carousel");return m(),V($e,{ref_key:"dialogRef",ref:i,"transition-show":"slide-left","transition-hide":"slide-right",maximized:""},{default:o(()=>[e(ae,null,{default:o(()=>[e(z,null,{default:o(()=>[U(e(C,{round:"",flat:"",icon:"mdi-arrow-left"},null,512),[[oe]]),e(ne,null,{default:o(()=>[w(T(d.item?"Edition ":"Cr\xE9ation ")+" Employ\xE9 ",1)]),_:1})]),_:1}),e(se,{style:{height:"85vh"},class:"scroll"},{default:o(()=>[n("div",tt,[e(f,{class:"text-bold text-black"},{default:o(()=>[w(" Informations personnelles")]),_:1}),e(M,{modelValue:l.entry.first_name,"onUpdate:modelValue":a[0]||(a[0]=c=>l.entry.first_name=c),type:"text",label:"Nom"},null,8,["modelValue"]),e(M,{modelValue:l.entry.last_name,"onUpdate:modelValue":a[1]||(a[1]=c=>l.entry.last_name=c),type:"text",label:"Prenom"},null,8,["modelValue"]),e(M,{modelValue:l.entry.email,"onUpdate:modelValue":a[2]||(a[2]=c=>l.entry.email=c),type:"text",label:"E-mail"},null,8,["modelValue"]),e(M,{modelValue:l.entry.contact,"onUpdate:modelValue":a[3]||(a[3]=c=>l.entry.contact=c),type:"text",label:"Contact"},null,8,["modelValue"]),e(f,{class:"text-bold text-black"},{default:o(()=>[w(" Reconnaissance faciale")]),_:1}),e(S,{loop:!1,"slides-per-view":1},{default:o(()=>[(m(!0),Q(ie,null,re(l.entry.facials,(c,$)=>(m(),V(b,{style:{height:"40vh"},key:$},{default:o(()=>[n("div",lt,[n("div",null,[n("img",{style:{width:"auto",height:"30vh"},src:Se(B).assets(c.filedisk)},null,8,at)]),e(C,{dense:"",flat:"",onClick:P=>l.entry.facials=l.entry.facials.filter(D=>D.id!==c.id),"no-caps":"",icon:"mdi-close",label:`(${$+1}/ ${l.entry.facials.length}) Supprimer`},null,8,["onClick","label"])])]),_:2},1024))),128))]),_:1}),ot,st,e(C,{onClick:r,outline:"",icon:"mdi-camera-plus",label:"Capturer"})])]),_:1}),e(z,null,{default:o(()=>[e(C,{loading:l.loading,icon:"las la-save",color:"primary",onClick:a[4]||(a[4]=c=>g()),class:"fit",label:"Enregistrer"},null,8,["loading"])]),_:1})]),_:1})]),_:1},512)}}},it={key:0},rt={key:1},ct={key:1},ut={class:"q-pa-lg"},dt={class:"q-col-qutter-md"},mt={class:"q-pt-md"},ft={class:"q-pt-md"},pt={__name:"users",setup(u){const d=j(),i=K({loading:!1,items:[]});Y(()=>{p()});async function p(t){i.loading=!0,i.items=await B.findMany("employees",{orderBy:{first_name:"asc"}}).then(l=>l).catch(l=>[]),console.log(i.items),i.loading=!1,t&&t()}function y(t=null){d.dialog({component:nt,componentProps:{item:t}}).onOk(()=>{p()})}return(t,l)=>{const g=L("van-empty");return m(),V(Re,null,{default:o(()=>[e(Ie,null,{default:o(()=>[e(Z,{class:"text-black bg-white"},{default:o(()=>[e(ne,{shrink:""},{default:o(()=>[w(" Liste des employ\xE9s ")]),_:1}),e(G),e(C,{onClick:l[0]||(l[0]=r=>t.$router.back()),flat:"",round:"",dense:"",icon:"mdi-arrow-left"})]),_:1})]),_:1}),e(Ve,null,{default:o(()=>[e(Ue,null,{default:o(()=>[e(Z,{class:"text-caption"},{default:o(()=>[e(G),w(" "+T(i.items.length)+" El\xE9ments trouv\xE9s ",1)]),_:1}),i.loading?(m(),Q("div",ct,[n("div",ut,[n("div",dt,[n("div",null,[e(A,{type:"QRadio"})]),n("div",mt,[e(A)]),n("div",ft,[e(A,{class:"q-pt-md",style:{height:"60vh"}})])])])])):(m(),V(Oe,{key:0,onRefresh:p},{default:o(()=>[i.items.length?(m(),Q("div",rt,[e(Fe,{separator:""},{default:o(()=>[(m(!0),Q(ie,null,re(i.items,(r,h)=>U((m(),V(Le,{clickable:"",onClick:k=>y(r),key:h},{default:o(()=>[e(Pe,null,{default:o(()=>[e(X,{class:"text-bold"},{default:o(()=>[w(T(r.first_name)+" "+T(r.last_name),1)]),_:2},1024),e(X,{class:"text-caption"},{default:o(()=>[w(T(r.contact)+" "+T(r.email),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[qe]])),128))]),_:1})])):(m(),Q("div",it,[e(g,{description:"Aucun personnelle"})]))]),_:1})),e(ze,{offset:[18,18],position:"bottom-right"},{default:o(()=>[e(C,{onClick:l[1]||(l[1]=r=>y()),color:"primary",fab:"",icon:"mdi-plus"})]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof J=="function"&&J(pt);export{pt as default};
