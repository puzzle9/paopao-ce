import{_ as P,a as S}from"./post-item.vue_vue_type_style_index_0_lang-cf11e2c5.js";import{_ as $}from"./post-skeleton-c82f8a59.js";import{_ as q}from"./main-nav.vue_vue_type_style_index_0_lang-048bd56b.js";import{u as I}from"./vuex-44de225f.js";import{b as N}from"./vue-router-e5a2430e.js";import{O as R,_ as V}from"./index-757c547c.js";import{d as E,H as a,b as G,f as o,k as e,w as c,bf as g,Y as v,e as t,F as f,u as k,q as h}from"./@vue-a481fc63.js";import{F as H,Q as L,I as O,G as Q}from"./naive-ui-d8de3dda.js";import"./content-d5264b98.js";import"./@vicons-1a3558c6.js";import"./paopao-video-player-2fe58954.js";import"./formatTime-4210fcd1.js";import"./moment-2ab8298d.js";import"./copy-to-clipboard-4ef7d3eb.js";import"./@babel-725317a4.js";import"./toggle-selection-93f4ad84.js";import"./vooks-6d99783e.js";import"./evtd-b614532e.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-39372edb.js";import"./@css-render-7124a1a5.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const T={key:0,class:"skeleton-wrap"},U={key:1},Y={key:0,class:"empty-wrap"},j={key:1},A={key:2},D={key:0,class:"pagination-wrap"},J=E({__name:"Collection",setup(K){const m=I(),y=N(),_=a(!1),i=a([]),p=a(+y.query.p||1),l=a(20),r=a(0),u=()=>{_.value=!0,R({page:p.value,page_size:l.value}).then(n=>{_.value=!1,i.value=n.list,r.value=Math.ceil(n.pager.total_rows/l.value),window.scrollTo(0,0)}).catch(n=>{_.value=!1})},w=n=>{p.value=n,u()};return G(()=>{u()}),(n,W)=>{const b=q,C=$,x=O,z=P,d=Q,B=S,F=H,M=L;return t(),o("div",null,[e(b,{title:"收藏"}),e(F,{class:"main-content-wrap",bordered:""},{default:c(()=>[_.value?(t(),o("div",T,[e(C,{num:l.value},null,8,["num"])])):(t(),o("div",U,[i.value.length===0?(t(),o("div",Y,[e(x,{size:"large",description:"暂无数据"})])):v("",!0),g(m).state.desktopModelShow?(t(),o("div",j,[(t(!0),o(f,null,k(i.value,s=>(t(),h(d,{key:s.id},{default:c(()=>[e(z,{post:s},null,8,["post"])]),_:2},1024))),128))])):(t(),o("div",A,[(t(!0),o(f,null,k(i.value,s=>(t(),h(d,{key:s.id},{default:c(()=>[e(B,{post:s},null,8,["post"])]),_:2},1024))),128))]))]))]),_:1}),r.value>0?(t(),o("div",D,[e(M,{page:p.value,"onUpdate:page":w,"page-slot":g(m).state.collapsedRight?5:8,"page-count":r.value},null,8,["page","page-slot","page-count"])])):v("",!0)])}}});const Pt=V(J,[["__scopeId","data-v-a5302c9b"]]);export{Pt as default};