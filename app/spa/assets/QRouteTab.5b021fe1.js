import{L as u,bJ as n,bK as i,c as b,w as m}from"./index.4734a098.js";import{u as c,a as l,b as T}from"./QTabs.ba9d9901.js";var R=u({name:"QRouteTab",props:{...n,...c},emits:l,setup(e,{slots:t,emit:s}){const a=i({useDisableForRouterLinkProps:!1}),{renderTab:o,$tabs:r}=T(e,t,s,{exact:b(()=>e.exact),...a});return m(()=>`${e.name} | ${e.exact} | ${(a.resolvedLink.value||{}).href}`,()=>{r.verifyRouteModel()}),()=>o(a.linkTag.value,a.linkAttrs.value)}});export{R as Q};
