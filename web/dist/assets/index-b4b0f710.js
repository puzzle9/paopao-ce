import{d as z,r as E,E as J,j,o as v,Q as N,a2 as a,a as b,V as s,c as A,e as S,P as K,a3 as D,O as U,_ as h,n as Q,w as H,a4 as ae,F as X,a5 as Y,M as I,s as P,a6 as he,R as Z,L as ge,a7 as fe}from"./@vue-7e1ab0af.js";import{c as ve,a as we,u as le,b as ye}from"./vue-router-edf90322.js";import{c as be,u as B}from"./vuex-f1ee712f.js";import{a as ke}from"./axios-4a70c6fc.js";import{_ as Pe,N as Le,a as ue,b as ie,c as Oe,d as Te,e as ce,f as Ae,g as Ee,h as de,i as Re,j as F,k as $e,u as Ce,l as Ie,m as Se,n as Ue,o as Me,p as qe,q as Ke,r as De,s as Ne,t as xe}from"./naive-ui-702193c2.js";import{S as Fe,M as Ve,L as ze,C as Be,B as We,P as He,W as je,a as Qe,H as ee,b as te,c as oe}from"./@vicons-b98681e0.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-2fc92f18.js";import"./evtd-b614532e.js";import"./@css-render-16be7445.js";import"./vooks-e23078ea.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function l(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(i){if(i.ep)return;i.ep=!0;const n=l(i);fetch(i.href,n)}})();const Ge="modulepreload",Je=function(e){return"/"+e},se={},T=function(t,l,c){if(!l||l.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(l.map(n=>{if(n=Je(n),n in se)return;se[n]=!0;const m=n.endsWith(".css"),d=m?'[rel="stylesheet"]':"";if(!!c)for(let k=i.length-1;k>=0;k--){const _=i[k];if(_.href===n&&(!m||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${d}`))return;const g=document.createElement("link");if(g.rel=m?"stylesheet":Ge,m||(g.as="script",g.crossOrigin=""),g.href=n,document.head.appendChild(g),m)return new Promise((k,_)=>{g.addEventListener("load",k),g.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t()).catch(n=>{const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=n,window.dispatchEvent(m),!m.defaultPrevented)throw n})},Xe=[{path:"/",name:"home",meta:{title:"广场",keepAlive:!0},component:()=>T(()=>import("./Home-ba221efd.js"),["assets/Home-ba221efd.js","assets/post-item.vue_vue_type_style_index_0_lang-ebd1ae42.js","assets/content-1c30deb5.js","assets/@vue-7e1ab0af.js","assets/@vicons-b98681e0.js","assets/naive-ui-702193c2.js","assets/seemly-76b7b838.js","assets/vueuc-2fc92f18.js","assets/evtd-b614532e.js","assets/@css-render-16be7445.js","assets/vooks-e23078ea.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/paopao-video-player-66a1a537.js","assets/content-2fda112b.css","assets/vuex-f1ee712f.js","assets/vue-router-edf90322.js","assets/formatTime-4210fcd1.js","assets/moment-2ab8298d.js","assets/copy-to-clipboard-4ef7d3eb.js","assets/@babel-725317a4.js","assets/toggle-selection-93f4ad84.js","assets/post-item-593ff254.css","assets/post-skeleton-3703f541.js","assets/post-skeleton-f1900002.css","assets/lodash-e0b37ac3.js","assets/IEnum-a180d93e.js","assets/main-nav.vue_vue_type_style_index_0_lang-fa3b58e7.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-0611cb6c.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/Home-dbebb66e.css","assets/vfonts-7afd136d.css"])},{path:"/post",name:"post",meta:{title:"泡泡详情"},component:()=>T(()=>import("./Post-8374b933.js"),["assets/Post-8374b933.js","assets/@vue-7e1ab0af.js","assets/vuex-f1ee712f.js","assets/formatTime-4210fcd1.js","assets/moment-2ab8298d.js","assets/IEnum-a180d93e.js","assets/@vicons-b98681e0.js","assets/naive-ui-702193c2.js","assets/seemly-76b7b838.js","assets/vueuc-2fc92f18.js","assets/evtd-b614532e.js","assets/@css-render-16be7445.js","assets/vooks-e23078ea.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/content-1c30deb5.js","assets/paopao-video-player-66a1a537.js","assets/content-2fda112b.css","assets/vue-router-edf90322.js","assets/post-skeleton-3703f541.js","assets/post-skeleton-f1900002.css","assets/lodash-e0b37ac3.js","assets/@babel-725317a4.js","assets/copy-to-clipboard-4ef7d3eb.js","assets/toggle-selection-93f4ad84.js","assets/main-nav.vue_vue_type_style_index_0_lang-fa3b58e7.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-0611cb6c.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/Post-b5b6aab2.css","assets/vfonts-7afd136d.css"])},{path:"/topic",name:"topic",meta:{title:"话题"},component:()=>T(()=>import("./Topic-956f4e71.js"),["assets/Topic-956f4e71.js","assets/@vicons-b98681e0.js","assets/@vue-7e1ab0af.js","assets/naive-ui-702193c2.js","assets/seemly-76b7b838.js","assets/vueuc-2fc92f18.js","assets/evtd-b614532e.js","assets/@css-render-16be7445.js","assets/vooks-e23078ea.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav.vue_vue_type_style_index_0_lang-fa3b58e7.js","assets/vuex-f1ee712f.js","assets/vue-router-edf90322.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/Topic-384e019e.css","assets/vfonts-7afd136d.css"])},{path:"/anouncement",name:"anouncement",meta:{title:"公告"},component:()=>T(()=>import("./Anouncement-41299c83.js"),["assets/Anouncement-41299c83.js","assets/post-skeleton-3703f541.js","assets/naive-ui-702193c2.js","assets/seemly-76b7b838.js","assets/@vue-7e1ab0af.js","assets/vueuc-2fc92f18.js","assets/evtd-b614532e.js","assets/@css-render-16be7445.js","assets/vooks-e23078ea.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-fa3b58e7.js","assets/vuex-f1ee712f.js","assets/vue-router-edf90322.js","assets/@vicons-b98681e0.js","assets/main-nav-569a7b0c.css","assets/formatTime-4210fcd1.js","assets/moment-2ab8298d.js","assets/axios-4a70c6fc.js","assets/Anouncement-662e2d95.css","assets/vfonts-7afd136d.css"])},{path:"/profile",name:"profile",meta:{title:"主页"},component:()=>T(()=>import("./Profile-2d7e9f8e.js"),["assets/Profile-2d7e9f8e.js","assets/post-item.vue_vue_type_style_index_0_lang-ebd1ae42.js","assets/content-1c30deb5.js","assets/@vue-7e1ab0af.js","assets/@vicons-b98681e0.js","assets/naive-ui-702193c2.js","assets/seemly-76b7b838.js","assets/vueuc-2fc92f18.js","assets/evtd-b614532e.js","assets/@css-render-16be7445.js","assets/vooks-e23078ea.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/paopao-video-player-66a1a537.js","assets/content-2fda112b.css","assets/vuex-f1ee712f.js","assets/vue-router-edf90322.js","assets/formatTime-4210fcd1.js","assets/moment-2ab8298d.js","assets/copy-to-clipboard-4ef7d3eb.js","assets/@babel-725317a4.js","assets/toggle-selection-93f4ad84.js","assets/post-item-593ff254.css","assets/post-skeleton-3703f541.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-fa3b58e7.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-0611cb6c.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/Profile-ab12b2fa.css","assets/vfonts-7afd136d.css"])},{path:"/u",name:"user",meta:{title:"用户详情"},component:()=>T(()=>import("./User-80390a04.js"),["assets/User-80390a04.js","assets/post-item.vue_vue_type_style_index_0_lang-ebd1ae42.js","assets/content-1c30deb5.js","assets/@vue-7e1ab0af.js","assets/@vicons-b98681e0.js","assets/naive-ui-702193c2.js","assets/seemly-76b7b838.js","assets/vueuc-2fc92f18.js","assets/evtd-b614532e.js","assets/@css-render-16be7445.js","assets/vooks-e23078ea.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/paopao-video-player-66a1a537.js","assets/content-2fda112b.css","assets/vuex-f1ee712f.js","assets/vue-router-edf90322.js","assets/formatTime-4210fcd1.js","assets/moment-2ab8298d.js","assets/copy-to-clipboard-4ef7d3eb.js","assets/@babel-725317a4.js","assets/toggle-selection-93f4ad84.js","assets/post-item-593ff254.css","assets/post-skeleton-3703f541.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-fa3b58e7.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-0611cb6c.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/User-dc93ec4e.css","assets/vfonts-7afd136d.css"])},{path:"/messages",name:"messages",meta:{title:"消息"},component:()=>T(()=>import("./Messages-42473d74.js"),["assets/Messages-42473d74.js","assets/@vue-7e1ab0af.js","assets/vue-router-edf90322.js","assets/formatTime-4210fcd1.js","assets/moment-2ab8298d.js","assets/@vicons-b98681e0.js","assets/naive-ui-702193c2.js","assets/seemly-76b7b838.js","assets/vueuc-2fc92f18.js","assets/evtd-b614532e.js","assets/@css-render-16be7445.js","assets/vooks-e23078ea.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav.vue_vue_type_style_index_0_lang-fa3b58e7.js","assets/vuex-f1ee712f.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/Messages-7a898af3.css","assets/vfonts-7afd136d.css"])},{path:"/collection",name:"collection",meta:{title:"收藏"},component:()=>T(()=>import("./Collection-1053edec.js"),["assets/Collection-1053edec.js","assets/post-item.vue_vue_type_style_index_0_lang-ebd1ae42.js","assets/content-1c30deb5.js","assets/@vue-7e1ab0af.js","assets/@vicons-b98681e0.js","assets/naive-ui-702193c2.js","assets/seemly-76b7b838.js","assets/vueuc-2fc92f18.js","assets/evtd-b614532e.js","assets/@css-render-16be7445.js","assets/vooks-e23078ea.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/paopao-video-player-66a1a537.js","assets/content-2fda112b.css","assets/vuex-f1ee712f.js","assets/vue-router-edf90322.js","assets/formatTime-4210fcd1.js","assets/moment-2ab8298d.js","assets/copy-to-clipboard-4ef7d3eb.js","assets/@babel-725317a4.js","assets/toggle-selection-93f4ad84.js","assets/post-item-593ff254.css","assets/post-skeleton-3703f541.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-fa3b58e7.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/Collection-b97b3cf7.css","assets/vfonts-7afd136d.css"])},{path:"/contacts",name:"contacts",meta:{title:"好友"},component:()=>T(()=>import("./Contacts-ab9a2181.js"),["assets/Contacts-ab9a2181.js","assets/vue-router-edf90322.js","assets/@vue-7e1ab0af.js","assets/formatTime-4210fcd1.js","assets/moment-2ab8298d.js","assets/naive-ui-702193c2.js","assets/seemly-76b7b838.js","assets/vueuc-2fc92f18.js","assets/evtd-b614532e.js","assets/@css-render-16be7445.js","assets/vooks-e23078ea.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-3703f541.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-fa3b58e7.js","assets/vuex-f1ee712f.js","assets/@vicons-b98681e0.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/Contacts-baa2e9bb.css","assets/vfonts-7afd136d.css"])},{path:"/following",name:"following",meta:{title:"关注"},component:()=>T(()=>import("./Following-16aa47d4.js"),["assets/Following-16aa47d4.js","assets/@vue-7e1ab0af.js","assets/vue-router-edf90322.js","assets/formatTime-4210fcd1.js","assets/moment-2ab8298d.js","assets/@vicons-b98681e0.js","assets/naive-ui-702193c2.js","assets/seemly-76b7b838.js","assets/vueuc-2fc92f18.js","assets/evtd-b614532e.js","assets/@css-render-16be7445.js","assets/vooks-e23078ea.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-3703f541.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-fa3b58e7.js","assets/vuex-f1ee712f.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/Following-31b77f3b.css","assets/vfonts-7afd136d.css"])},{path:"/wallet",name:"wallet",meta:{title:"钱包"},component:()=>T(()=>import("./Wallet-86059377.js"),["assets/Wallet-86059377.js","assets/post-skeleton-3703f541.js","assets/naive-ui-702193c2.js","assets/seemly-76b7b838.js","assets/@vue-7e1ab0af.js","assets/vueuc-2fc92f18.js","assets/evtd-b614532e.js","assets/@css-render-16be7445.js","assets/vooks-e23078ea.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-fa3b58e7.js","assets/vuex-f1ee712f.js","assets/vue-router-edf90322.js","assets/@vicons-b98681e0.js","assets/main-nav-569a7b0c.css","assets/qrcode-9719fc56.js","assets/encode-utf8-f813de00.js","assets/dijkstrajs-f906a09e.js","assets/formatTime-4210fcd1.js","assets/moment-2ab8298d.js","assets/axios-4a70c6fc.js","assets/Wallet-77044929.css","assets/vfonts-7afd136d.css"])},{path:"/setting",name:"setting",meta:{title:"设置"},component:()=>T(()=>import("./Setting-31719fdd.js"),["assets/Setting-31719fdd.js","assets/main-nav.vue_vue_type_style_index_0_lang-fa3b58e7.js","assets/vuex-f1ee712f.js","assets/@vue-7e1ab0af.js","assets/vue-router-edf90322.js","assets/vooks-e23078ea.js","assets/evtd-b614532e.js","assets/@vicons-b98681e0.js","assets/naive-ui-702193c2.js","assets/seemly-76b7b838.js","assets/vueuc-2fc92f18.js","assets/@css-render-16be7445.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/Setting-bfd24152.css","assets/vfonts-7afd136d.css"])},{path:"/404",name:"404",meta:{title:"404"},component:()=>T(()=>import("./404-276daf23.js"),["assets/404-276daf23.js","assets/main-nav.vue_vue_type_style_index_0_lang-fa3b58e7.js","assets/vuex-f1ee712f.js","assets/@vue-7e1ab0af.js","assets/vue-router-edf90322.js","assets/vooks-e23078ea.js","assets/evtd-b614532e.js","assets/@vicons-b98681e0.js","assets/naive-ui-702193c2.js","assets/seemly-76b7b838.js","assets/vueuc-2fc92f18.js","assets/@css-render-16be7445.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/404-020b2afd.css","assets/vfonts-7afd136d.css"])},{path:"/:pathMatch(.*)",redirect:"/404"}],pe=ve({history:we(),routes:Xe});pe.beforeEach((e,t,l)=>{document.title=`${e.meta.title} | 泡泡 - 一个清新文艺的微社区`,l()});const Ye=be({state:{refresh:Date.now(),refreshTopicFollow:Date.now(),theme:localStorage.getItem("PAOPAO_THEME"),collapsedLeft:document.body.clientWidth<=821,collapsedRight:document.body.clientWidth<=821,drawerModelShow:document.body.clientWidth<=821,desktopModelShow:document.body.clientWidth>821,authModalShow:!1,authModelTab:"signin",userLogined:!1,userInfo:{id:0,username:"",nickname:"",created_on:0,follows:0,followings:0}},mutations:{refresh(e,t){e.refresh=t||Date.now()},refreshTopicFollow(e){e.refreshTopicFollow=Date.now()},triggerTheme(e,t){e.theme=t},triggerAuth(e,t){e.authModalShow=t},triggerAuthKey(e,t){e.authModelTab=t},triggerCollapsedLeft(e,t){e.collapsedLeft=t,e.drawerModelShow=t,e.desktopModelShow=!t},triggerCollapsedRight(e,t){e.collapsedRight=t},updateUserinfo(e,t){e.userInfo=t,e.userInfo.id>0&&(e.userLogined=!0)},userLogout(e){localStorage.removeItem("PAOPAO_TOKEN"),e.userInfo={id:0,nickname:"",username:"",created_on:0,follows:0,followings:0},e.userLogined=!1}},actions:{},modules:{}}),G=ke.create({baseURL:"",timeout:3e4});G.interceptors.request.use(e=>(localStorage.getItem("PAOPAO_TOKEN")&&(e.headers.Authorization="Bearer "+localStorage.getItem("PAOPAO_TOKEN")),e),e=>Promise.reject(e));G.interceptors.response.use(e=>{const{data:t={},code:l=0}=(e==null?void 0:e.data)||{};if(+l==0)return t||{};Promise.reject((e==null?void 0:e.data)||{})},(e={})=>{var l;const{response:t={}}=e||{};return+(t==null?void 0:t.status)==401?(localStorage.removeItem("PAOPAO_TOKEN"),(t==null?void 0:t.data.code)!==10005?window.$message.warning((t==null?void 0:t.data.msg)||"鉴权失败"):window.$store.commit("triggerAuth",!0)):window.$message.error(((l=t==null?void 0:t.data)==null?void 0:l.msg)||"请求失败"),Promise.reject((t==null?void 0:t.data)||{})});function o(e){return G(e)}const ne=e=>o({method:"post",url:"/v1/auth/login",data:e}),Ze=e=>o({method:"post",url:"/v1/auth/register",data:e}),W=(e="")=>o({method:"get",url:"/v1/user/info",headers:{Authorization:`Bearer ${e}`}}),et={class:"auth-wrap"},tt={key:0},ot=z({__name:"auth",setup(e){const t=E("true".toLowerCase()==="true"),l=B(),c=E(!1),i=E(),n=J({username:"",password:""}),m=E(),d=J({username:"",password:"",repassword:""}),M={username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"},repassword:[{required:!0,message:"请输入密码"},{validator:(_,u)=>!!d.password&&d.password.startsWith(u)&&d.password.length>=u.length,message:"两次密码输入不一致",trigger:"input"}]},g=_=>{var u;_.preventDefault(),_.stopPropagation(),(u=i.value)==null||u.validate(L=>{L||(c.value=!0,ne({username:n.username,password:n.password}).then(p=>{const O=(p==null?void 0:p.token)||"";return localStorage.setItem("PAOPAO_TOKEN",O),W(O)}).then(p=>{window.$message.success("登录成功"),c.value=!1,l.commit("updateUserinfo",p),l.commit("triggerAuth",!1),l.commit("refresh"),n.username="",n.password=""}).catch(p=>{c.value=!1}))})},k=_=>{var u;_.preventDefault(),_.stopPropagation(),(u=m.value)==null||u.validate(L=>{L||(c.value=!0,Ze({username:d.username,password:d.password}).then(p=>ne({username:d.username,password:d.password})).then(p=>{const O=(p==null?void 0:p.token)||"";return localStorage.setItem("PAOPAO_TOKEN",O),W(O)}).then(p=>{window.$message.success("注册成功"),c.value=!1,l.commit("updateUserinfo",p),l.commit("triggerAuth",!1),d.username="",d.password="",d.repassword=""}).catch(p=>{c.value=!1}))})};return j(()=>{const _=localStorage.getItem("PAOPAO_TOKEN")||"";_?W(_).then(u=>{l.commit("updateUserinfo",u),l.commit("triggerAuth",!1)}).catch(u=>{l.commit("userLogout")}):l.commit("userLogout")}),(_,u)=>{const L=Pe,p=Le,O=ue,r=ie,w=Oe,y=Te,$=ce,x=Ae,C=Ee,q=de,V=Re;return v(),N(V,{show:h(l).state.authModalShow,"onUpdate:show":u[7]||(u[7]=f=>h(l).state.authModalShow=f),class:"auth-card",preset:"card",size:"small","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:a(()=>[b("div",et,[s(q,{bordered:!1},{default:a(()=>[t.value?U("",!0):(v(),A("div",tt,[s(O,{justify:"center"},{default:a(()=>[s(p,null,{default:a(()=>[s(L,{type:"success"},{default:a(()=>[S("账号登录")]),_:1})]),_:1})]),_:1}),s(y,{ref_key:"loginRef",ref:i,model:n,rules:{username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"}}},{default:a(()=>[s(w,{label:"账户",path:"username"},{default:a(()=>[s(r,{value:n.username,"onUpdate:value":u[0]||(u[0]=f=>n.username=f),placeholder:"请输入用户名",onKeyup:K(D(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),s(w,{label:"密码",path:"password"},{default:a(()=>[s(r,{type:"password","show-password-on":"mousedown",value:n.password,"onUpdate:value":u[1]||(u[1]=f=>n.password=f),placeholder:"请输入账户密码",onKeyup:K(D(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),s($,{type:"primary",block:"",secondary:"",strong:"",loading:c.value,onClick:g},{default:a(()=>[S(" 登录 ")]),_:1},8,["loading"])])),t.value?(v(),N(C,{key:1,"default-value":h(l).state.authModelTab,size:"large","justify-content":"space-evenly"},{default:a(()=>[s(x,{name:"signin",tab:"登录"},{default:a(()=>[s(y,{ref_key:"loginRef",ref:i,model:n,rules:{username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"}}},{default:a(()=>[s(w,{label:"账户",path:"username"},{default:a(()=>[s(r,{value:n.username,"onUpdate:value":u[2]||(u[2]=f=>n.username=f),placeholder:"请输入用户名",onKeyup:K(D(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),s(w,{label:"密码",path:"password"},{default:a(()=>[s(r,{type:"password","show-password-on":"mousedown",value:n.password,"onUpdate:value":u[3]||(u[3]=f=>n.password=f),placeholder:"请输入账户密码",onKeyup:K(D(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),s($,{type:"primary",block:"",secondary:"",strong:"",loading:c.value,onClick:g},{default:a(()=>[S(" 登录 ")]),_:1},8,["loading"])]),_:1}),s(x,{name:"signup",tab:"注册"},{default:a(()=>[s(y,{ref_key:"registerRef",ref:m,model:d,rules:M},{default:a(()=>[s(w,{label:"用户名",path:"username"},{default:a(()=>[s(r,{value:d.username,"onUpdate:value":u[4]||(u[4]=f=>d.username=f),placeholder:"用户名注册后无法修改"},null,8,["value"])]),_:1}),s(w,{label:"密码",path:"password"},{default:a(()=>[s(r,{type:"password","show-password-on":"mousedown",placeholder:"密码不少于6位",value:d.password,"onUpdate:value":u[5]||(u[5]=f=>d.password=f),onKeyup:K(D(k,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),s(w,{label:"重复密码",path:"repassword"},{default:a(()=>[s(r,{type:"password","show-password-on":"mousedown",placeholder:"请再次输入密码",value:d.repassword,"onUpdate:value":u[6]||(u[6]=f=>d.repassword=f),onKeyup:K(D(k,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),s($,{type:"primary",block:"",secondary:"",strong:"",loading:c.value,onClick:k},{default:a(()=>[S(" 注册 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["default-value"])):U("",!0)]),_:1})])]),_:1},8,["show"])}}});const me=(e,t)=>{const l=e.__vccOpts||e;for(const[c,i]of t)l[c]=i;return l},st=me(ot,[["__scopeId","data-v-053dfa44"]]),Xt=e=>o({method:"get",url:"/v1/posts",params:e}),nt=e=>o({method:"get",url:"/v1/tags",params:e}),Yt=e=>o({method:"get",url:"/v1/post",params:e}),Zt=e=>o({method:"get",url:"/v1/post/star",params:e}),eo=e=>o({method:"post",url:"/v1/post/star",data:e}),to=e=>o({method:"get",url:"/v1/post/collection",params:e}),oo=e=>o({method:"post",url:"/v1/post/collection",data:e}),so=e=>o({method:"get",url:"/v1/post/comments",params:e}),no=e=>o({method:"get",url:"/v1/user/contacts",params:e}),ro=e=>o({method:"post",url:"/v1/post",data:e}),ao=e=>o({method:"delete",url:"/v1/post",data:e}),lo=e=>o({method:"post",url:"/v1/post/lock",data:e}),uo=e=>o({method:"post",url:"/v1/post/stick",data:e}),io=e=>o({method:"post",url:"/v1/post/highlight",data:e}),co=e=>o({method:"post",url:"/v1/post/visibility",data:e}),po=e=>o({method:"post",url:"/v1/tweet/comment/thumbsup",data:e}),mo=e=>o({method:"post",url:"/v1/tweet/comment/thumbsdown",data:e}),_o=e=>o({method:"post",url:"/v1/tweet/reply/thumbsup",data:e}),ho=e=>o({method:"post",url:"/v1/tweet/reply/thumbsdown",data:e}),go=e=>o({method:"post",url:"/v1/post/comment",data:e}),fo=e=>o({method:"delete",url:"/v1/post/comment",data:e}),vo=e=>o({method:"post",url:"/v1/post/comment/reply",data:e}),wo=e=>o({method:"delete",url:"/v1/post/comment/reply",data:e}),yo=e=>o({method:"post",url:"/v1/topic/stick",data:e}),bo=e=>o({method:"post",url:"/v1/topic/follow",data:e}),ko=e=>o({method:"post",url:"/v1/topic/unfollow",data:e}),rt={key:0,class:"rightbar-wrap"},at={class:"search-wrap"},lt={class:"post-num"},ut={class:"post-num"},it={class:"copyright"},ct=["href"],dt=["href"],pt=z({__name:"rightbar",setup(e){const t=E([]),l=E([]),c=E(!1),i=E(""),n=B(),m=le(),d="2023 paopao.info",M="Roc's Me",g="",k="泡泡(PaoPao)开源社区",_="https://www.paopao.info",u=+"6",L=+"12",p=()=>{c.value=!0,nt({type:"hot_extral",num:L,extral_num:u}).then(y=>{t.value=y.topics,l.value=y.extral_topics??[],w.value=!0,c.value=!1}).catch(y=>{c.value=!1})},O=y=>y>=1e3?(y/1e3).toFixed(1)+"k":y,r=()=>{m.push({name:"home",query:{q:i.value}})},w=Q({get:()=>n.state.userLogined&&l.value.length!==0,set:y=>{}});return H(()=>({refreshTopicFollow:n.state.refreshTopicFollow,userLogined:n.state.userLogined}),(y,$)=>{(y.refreshTopicFollow!==$.refreshTopicFollow||y.userLogined)&&p()}),j(()=>{p()}),(y,$)=>{const x=F,C=ie,q=ae("router-link"),V=$e,f=de,_e=ue;return h(n).state.collapsedRight?U("",!0):(v(),A("div",rt,[b("div",at,[s(C,{round:"",clearable:"",placeholder:"搜一搜...",value:i.value,"onUpdate:value":$[0]||($[0]=R=>i.value=R),onKeyup:K(D(r,["prevent"]),["enter"])},{prefix:a(()=>[s(x,{component:h(Fe)},null,8,["component"])]),_:1},8,["value","onKeyup"])]),w.value?(v(),N(f,{key:0,class:"hottopic-wrap",title:"关注话题",embedded:"",bordered:!1,size:"small"},{default:a(()=>[s(V,{show:c.value},{default:a(()=>[(v(!0),A(X,null,Y(l.value,R=>(v(),A("div",{class:"hot-tag-item",key:R.id},[s(q,{class:"hash-link",to:{name:"home",query:{q:R.tag,t:"tag"}}},{default:a(()=>[S(" #"+I(R.tag),1)]),_:2},1032,["to"]),b("div",lt,I(O(R.quote_num)),1)]))),128))]),_:1},8,["show"])]),_:1})):U("",!0),s(f,{class:"hottopic-wrap",title:"热门话题",embedded:"",bordered:!1,size:"small"},{default:a(()=>[s(V,{show:c.value},{default:a(()=>[(v(!0),A(X,null,Y(t.value,R=>(v(),A("div",{class:"hot-tag-item",key:R.id},[s(q,{class:"hash-link",to:{name:"home",query:{q:R.tag,t:"tag"}}},{default:a(()=>[S(" #"+I(R.tag),1)]),_:2},1032,["to"]),b("div",ut,I(O(R.quote_num)),1)]))),128))]),_:1},8,["show"])]),_:1}),s(f,{class:"copyright-wrap",embedded:"",bordered:!1,size:"small"},{default:a(()=>[b("div",it,"© "+I(h(d)),1),b("div",null,[s(_e,null,{default:a(()=>[b("a",{href:h(g),target:"_blank",class:"hash-link"},I(h(M)),9,ct),b("a",{href:h(_),target:"_blank",class:"hash-link"},I(h(k)),9,dt)]),_:1})])]),_:1})]))}}});const mt=me(pt,[["__scopeId","data-v-52b86ac0"]]),Po=(e={})=>o({method:"get",url:"/v1/captcha",params:e}),Lo=e=>o({method:"post",url:"/v1/captcha",data:e}),Oo=e=>o({method:"post",url:"/v1/user/whisper",data:e}),To=e=>o({method:"post",url:"/v1/friend/requesting",data:e}),Ao=e=>o({method:"post",url:"/v1/friend/add",data:e}),Eo=e=>o({method:"post",url:"/v1/user/follow",data:e}),Ro=e=>o({method:"post",url:"/v1/user/unfollow",data:e}),$o=e=>o({method:"get",url:"/v1/user/follows",params:e}),Co=e=>o({method:"get",url:"/v1/user/followings",params:e}),Io=e=>o({method:"post",url:"/v1/friend/reject",data:e}),So=e=>o({method:"post",url:"/v1/friend/delete",data:e}),Uo=e=>o({method:"post",url:"/v1/user/phone",data:e}),Mo=e=>o({method:"post",url:"/v1/user/activate",data:e}),qo=e=>o({method:"post",url:"/v1/user/password",data:e}),Ko=e=>o({method:"post",url:"/v1/user/nickname",data:e}),Do=e=>o({method:"post",url:"/v1/user/avatar",data:e}),re=(e={})=>o({method:"get",url:"/v1/user/msgcount/unread",params:e}),No=e=>o({method:"get",url:"/v1/user/messages",params:e}),xo=e=>o({method:"post",url:"/v1/user/message/read",data:e}),Fo=e=>o({method:"get",url:"/v1/user/collections",params:e}),Vo=e=>o({method:"get",url:"/v1/user/profile",params:e}),zo=e=>o({method:"get",url:"/v1/user/posts",params:e}),Bo=e=>o({method:"get",url:"/v1/user/wallet/bills",params:e}),Wo=e=>o({method:"post",url:"/v1/user/recharge",data:e}),Ho=e=>o({method:"get",url:"/v1/user/recharge",params:e}),jo=e=>o({method:"get",url:"/v1/suggest/users",params:e}),Qo=e=>o({method:"get",url:"/v1/suggest/tags",params:e}),Go=e=>o({method:"get",url:"/v1/attachment/precheck",params:e}),Jo=e=>o({method:"get",url:"/v1/attachment",params:e}),Xo=e=>o({method:"post",url:"/v1/admin/user/status",data:e}),_t="/assets/logo-52afee68.png",ht={class:"sidebar-wrap"},gt={class:"logo-wrap"},ft={key:0,class:"user-wrap"},vt={class:"user-info"},wt={class:"nickname"},yt={class:"nickname-txt"},bt={class:"username"},kt={class:"user-mini-wrap"},Pt={key:1,class:"user-wrap"},Lt={key:0,class:"login-only-wrap"},Ot={key:1,class:"login-wrap"},Tt=z({__name:"sidebar",setup(e){const t=B(),l=ye(),c=le(),i=E(!1),n=E(l.name||""),m=E(),d=E("true".toLowerCase()==="true"),M=+"5000";H(l,()=>{n.value=l.name}),H(t.state,()=>{t.state.userInfo.id>0?m.value||(re().then(r=>{i.value=r.count>0}).catch(r=>{console.log(r)}),m.value=setInterval(()=>{re().then(r=>{i.value=r.count>0}).catch(r=>{console.log(r)})},M)):m.value&&clearInterval(m.value)}),j(()=>{window.onresize=()=>{t.commit("triggerCollapsedLeft",document.body.clientWidth<=821),t.commit("triggerCollapsedRight",document.body.clientWidth<=821)}});const g=Q(()=>{const r=[{label:"广场",key:"home",icon:()=>P(ee),href:"/"},{label:"话题",key:"topic",icon:()=>P(te),href:"/topic"}];return"false".toLowerCase()==="true"&&r.push({label:"公告",key:"anouncement",icon:()=>P(Ve),href:"/anouncement"}),r.push({label:"主页",key:"profile",icon:()=>P(ze),href:"/profile"}),r.push({label:"消息",key:"messages",icon:()=>P(Be),href:"/messages"}),r.push({label:"收藏",key:"collection",icon:()=>P(We),href:"/collection"}),r.push({label:"好友",key:"contacts",icon:()=>P(He),href:"/contacts"}),"false".toLocaleLowerCase()==="true"&&r.push({label:"钱包",key:"wallet",icon:()=>P(je),href:"/wallet"}),r.push({label:"设置",key:"setting",icon:()=>P(Qe),href:"/setting"}),t.state.userInfo.id>0?r:[{label:"广场",key:"home",icon:()=>P(ee),href:"/"},{label:"话题",key:"topic",icon:()=>P(te),href:"/topic"}]}),k=r=>"href"in r?P("div",{},r.label):r.label,_=r=>r.key==="messages"?P(Ie,{dot:!0,show:i.value,processing:!0},{default:()=>P(F,{color:r.key===n.value?"var(--n-item-icon-color-active)":"var(--n-item-icon-color)"},{default:r.icon})}):P(F,null,{default:r.icon}),u=(r,w={})=>{n.value=r,c.push({name:r,query:{t:new Date().getTime()}})},L=()=>{l.path==="/"&&t.commit("refresh"),u("home")},p=r=>{t.commit("triggerAuth",!0),t.commit("triggerAuthKey",r)},O=()=>{t.commit("userLogout"),t.commit("refresh"),L()};return window.$store=t,window.$message=Ce(),(r,w)=>{const y=Se,$=Ue,x=Me,C=ce;return v(),A("div",ht,[b("div",gt,[s(y,{class:"logo-img",width:"36",src:h(_t),"preview-disabled":!0,onClick:L},null,8,["src"])]),s($,{accordion:!0,"icon-size":24,options:g.value,"render-label":k,"render-icon":_,value:n.value,"onUpdate:value":u},null,8,["options","value"]),h(t).state.userInfo.id>0?(v(),A("div",ft,[s(x,{class:"user-avatar",round:"",size:34,src:h(t).state.userInfo.avatar},null,8,["src"]),b("div",vt,[b("div",wt,[b("span",yt,I(h(t).state.userInfo.nickname),1),s(C,{class:"logout",quaternary:"",circle:"",size:"tiny",onClick:O},{icon:a(()=>[s(h(F),null,{default:a(()=>[s(h(oe))]),_:1})]),_:1})]),b("div",bt,"@"+I(h(t).state.userInfo.username),1)]),b("div",kt,[s(C,{class:"logout",quaternary:"",circle:"",onClick:O},{icon:a(()=>[s(h(F),{size:24},{default:a(()=>[s(h(oe))]),_:1})]),_:1})])])):(v(),A("div",Pt,[d.value?U("",!0):(v(),A("div",Lt,[s(C,{strong:"",secondary:"",round:"",type:"primary",onClick:w[0]||(w[0]=q=>p("signin"))},{default:a(()=>[S(" 登录 ")]),_:1})])),d.value?(v(),A("div",Ot,[s(C,{strong:"",secondary:"",round:"",type:"primary",onClick:w[1]||(w[1]=q=>p("signin"))},{default:a(()=>[S(" 登录 ")]),_:1}),s(C,{strong:"",secondary:"",round:"",type:"info",onClick:w[2]||(w[2]=q=>p("signup"))},{default:a(()=>[S(" 注册 ")]),_:1})])):U("",!0)]))])}}});const At={"has-sider":"",class:"main-wrap",position:"static"},Et={key:0},Rt={class:"content-wrap"},$t=z({__name:"App",setup(e){const t=B(),l=Q(()=>t.state.theme==="dark"?Ke:null);return(c,i)=>{const n=Tt,m=ae("router-view"),d=mt,M=st,g=De,k=Ne,_=xe,u=qe;return v(),N(u,{theme:l.value},{default:a(()=>[s(k,null,{default:a(()=>[s(g,null,{default:a(()=>{var L;return[b("div",{class:ge(["app-container",{dark:((L=l.value)==null?void 0:L.name)==="dark",mobile:!h(t).state.desktopModelShow}])},[b("div",At,[h(t).state.desktopModelShow?(v(),A("div",Et,[s(n)])):U("",!0),b("div",Rt,[s(m,{class:"app-wrap"},{default:a(({Component:p})=>[(v(),N(he,null,[c.$route.meta.keepAlive?(v(),N(Z(p),{key:0})):U("",!0)],1024)),c.$route.meta.keepAlive?U("",!0):(v(),N(Z(p),{key:0}))]),_:1})]),s(d)]),s(M)],2)]}),_:1})]),_:1}),s(_)]),_:1},8,["theme"])}}});fe($t).use(pe).use(Ye).mount("#app");export{Uo as $,nt as A,zo as B,Oo as C,To as D,Vo as E,So as F,Ro as G,Eo as H,Xo as I,Ao as J,Io as K,xo as L,No as M,Fo as N,Go as O,Jo as P,no as Q,$o as R,Co as S,W as T,Bo as U,Wo as V,Ho as W,Po as X,Do as Y,qo as Z,me as _,Qo as a,Mo as a0,Ko as a1,Lo as a2,Tt as a3,Xt as b,ro as c,ho as d,wo as e,po as f,jo as g,mo as h,vo as i,fo as j,go as k,Zt as l,to as m,ao as n,lo as o,io as p,eo as q,oo as r,uo as s,_o as t,Yt as u,co as v,so as w,yo as x,ko as y,bo as z};