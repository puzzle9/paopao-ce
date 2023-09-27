import{_ as De,a as He}from"./post-item.vue_vue_type_style_index_0_lang-35bb8742.js";import{_ as Ne}from"./post-skeleton-b7d8a562.js";import{_ as Re}from"./whisper-5caaa207.js";import{_ as Ve}from"./main-nav.vue_vue_type_style_index_0_lang-b9156c1f.js";import{d as je,H as i,R as Ee,c as Ge,b as Je,E as Ke,r as Ye,f as u,k as n,w as r,q as g,Y as d,e as s,j as h,x as A,bf as c,A as D,y as ce,F,u as I,h as ve}from"./@vue-a481fc63.js";import{u as Qe}from"./vuex-44de225f.js";import{b as Xe}from"./vue-router-e5a2430e.js";import{L as Ze,K as ea,e as H,h as aa,u as _e,f as de,M as sa,_ as ta}from"./index-ff4002c7.js";import{W as la}from"./whisper-add-friend-f9854206.js";import{W as oa}from"./v3-infinite-loading-2c58ec2f.js";import{k as na,r as ua,G as me,s as ia,t as ra,J as ca,R as va}from"./@vicons-f0266f88.js";import{F as _a,G as da,a as ma,j as fe,o as fa,M as pa,e as ga,P as ha,k as wa,f as ka,g as ya,J as ba,H as Pa}from"./naive-ui-eecf2ec3.js";import"./content-45c6cb1a.js";import"./paopao-video-player-2fe58954.js";import"./copy-to-clipboard-4ef7d3eb.js";import"./@babel-725317a4.js";import"./toggle-selection-93f4ad84.js";import"./vooks-6d99783e.js";import"./evtd-b614532e.js";import"./axios-4a70c6fc.js";import"./moment-2ab8298d.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-7c8d4b48.js";import"./@css-render-7124a1a5.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const Oa={key:0,class:"profile-baseinfo"},Fa={class:"avatar"},Ia={class:"base-info"},Ta={class:"username"},xa={class:"userinfo"},Aa={class:"info-item"},$a={class:"info-item"},za={class:"userinfo"},Ua={class:"info-item"},qa={class:"info-item"},Ca={key:0,class:"user-opts"},Ma={key:0,class:"skeleton-wrap"},Sa={key:1},Wa={key:0,class:"empty-wrap"},La={key:1},Ba={key:0},Da={key:1},Ha={key:2},Na={key:3},Ra={key:4},Va={key:2},ja={key:0},Ea={key:1},Ga={key:2},Ja={key:3},Ka={key:4},Ya={class:"load-more-wrap"},Qa={class:"load-more-spinner"},Xa=je({__name:"User",setup(Za){const N=_a(),_=Qe(),$=Xe(),ue="true".toLowerCase()==="true",m=i(!1),y=i(!1),a=Ee({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!0,is_following:!1,created_on:0,follows:0,followings:0,status:1}),p=i(!1),R=i(!1),j=i(!1),l=i([]),z=i([]),U=i([]),q=i([]),C=i([]),M=i([]),T=i($.query.s||""),o=i(+$.query.p||1),f=i("post"),E=i(+$.query.p||1),G=i(1),J=i(1),K=i(1),Y=i(1),k=i(20),v=i(0),Q=i(0),X=i(0),Z=i(0),ee=i(0),ae=i(0),b=e=>{a.id=e.id,a.username=e.username,a.nickname=e.nickname,a.avatar=e.avatar,R.value=!0},P=e=>{N.success({title:"提示",content:"确定"+(e.user.is_following?"取消关注":"关注")+"该用户吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{e.user.is_following?_e({user_id:e.user.id}).then(w=>{window.$message.success("操作成功"),e.user.is_following=!1}).catch(w=>{}):de({user_id:e.user.id}).then(w=>{window.$message.success("关注成功"),e.user.is_following=!0}).catch(w=>{})}})},pe=()=>{y.value=!1,l.value=[],z.value=[],U.value=[],q.value=[],C.value=[],M.value=[],f.value="post",o.value=1,E.value=1,G.value=1,J.value=1,K.value=1,Y.value=1,v.value=0,Q.value=0,X.value=0,Z.value=0,ee.value=0,ae.value=0},ge=()=>{switch(f.value){case"post":V();break;case"comment":se();break;case"highlight":te();break;case"media":le();break;case"star":oe();break}},V=()=>{m.value=!0,H({username:T.value,style:"post",page:o.value,page_size:k.value}).then(e=>{m.value=!1,e.list.length===0&&(y.value=!0),o.value>1?l.value=l.value.concat(e.list):(l.value=e.list||[],window.scrollTo(0,0)),v.value=Math.ceil(e.pager.total_rows/k.value),z.value=l.value,Q.value=v.value}).catch(e=>{l.value=[],o.value>1&&o.value--,m.value=!1})},se=()=>{m.value=!0,H({username:T.value,style:"comment",page:o.value,page_size:k.value}).then(e=>{m.value=!1,e.list.length===0&&(y.value=!0),o.value>1?l.value=l.value.concat(e.list):(l.value=e.list||[],window.scrollTo(0,0)),v.value=Math.ceil(e.pager.total_rows/k.value),U.value=l.value,X.value=v.value}).catch(e=>{l.value=[],o.value>1&&o.value--,m.value=!1})},te=()=>{m.value=!0,H({username:T.value,style:"highlight",page:o.value,page_size:k.value}).then(e=>{m.value=!1,e.list.length===0&&(y.value=!0),o.value>1?l.value=l.value.concat(e.list):(l.value=e.list||[],window.scrollTo(0,0)),v.value=Math.ceil(e.pager.total_rows/k.value),q.value=l.value,Z.value=v.value}).catch(e=>{l.value=[],o.value>1&&o.value--,m.value=!1})},le=()=>{m.value=!0,H({username:T.value,style:"media",page:o.value,page_size:k.value}).then(e=>{m.value=!1,e.list.length===0&&(y.value=!0),o.value>1?l.value=l.value.concat(e.list):(l.value=e.list||[],window.scrollTo(0,0)),v.value=Math.ceil(e.pager.total_rows/k.value),C.value=l.value,ee.value=v.value}).catch(e=>{l.value=[],o.value>1&&o.value--,m.value=!1})},oe=()=>{m.value=!0,H({username:T.value,style:"star",page:o.value,page_size:k.value}).then(e=>{m.value=!1,e.list.length===0&&(y.value=!0),o.value>1?l.value=l.value.concat(e.list):(l.value=e.list||[],window.scrollTo(0,0)),v.value=Math.ceil(e.pager.total_rows/k.value),M.value=l.value,ae.value=v.value}).catch(e=>{l.value=[],o.value>1&&o.value--,m.value=!1})},he=e=>{switch(f.value=e,f.value){case"post":l.value=z.value,o.value=E.value,v.value=Q.value,V();break;case"comment":l.value=U.value,o.value=G.value,v.value=X.value,se();break;case"highlight":l.value=q.value,o.value=J.value,v.value=Z.value,te();break;case"media":l.value=C.value,o.value=K.value,v.value=ee.value,le();break;case"star":l.value=M.value,o.value=Y.value,v.value=ae.value,oe();break}},S=()=>{p.value=!0,Ze({username:T.value}).then(e=>{p.value=!1,a.id=e.id,a.avatar=e.avatar,a.username=e.username,a.nickname=e.nickname,a.is_admin=e.is_admin,a.is_friend=e.is_friend,a.created_on=e.created_on,a.is_following=e.is_following,a.follows=e.follows,a.followings=e.followings,a.status=e.status,ge()}).catch(e=>{p.value=!1,console.log(e)})},we=()=>{switch(f.value){case"post":E.value=o.value,V();break;case"comment":G.value=o.value,se();break;case"highlight":J.value=o.value,te();break;case"media":K.value=o.value,le();break;case"star":Y.value=o.value,oe();break}},ke=()=>{R.value=!0},ye=()=>{j.value=!0},be=()=>{R.value=!1},Pe=()=>{j.value=!1},x=e=>()=>ve(fe,null,{default:()=>ve(e)}),Oe=Ge(()=>{let e=[{label:"私信",key:"whisper",icon:x(ua)}];return _.state.userInfo.is_admin&&(a.status===1?e.push({label:"禁言",key:"banned",icon:x(me)}):e.push({label:"解封",key:"deblocking",icon:x(me)})),a.is_following?e.push({label:"取消关注",key:"unfollow",icon:x(ia)}):e.push({label:"关注",key:"follow",icon:x(ra)}),ue&&(a.is_friend?e.push({label:"删除好友",key:"delete",icon:x(ca)}):e.push({label:"添加朋友",key:"requesting",icon:x(va)})),e}),Fe=e=>{switch(e){case"whisper":ke();break;case"delete":Ie();break;case"requesting":ye();break;case"follow":case"unfollow":Te();break;case"banned":case"deblocking":xe();break}},Ie=()=>{N.warning({title:"删除好友",content:"将好友 “"+a.nickname+"” 删除，将同时删除 点赞/收藏 列表中关于该朋友的 “好友可见” 推文",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{p.value=!0,aa({user_id:a.id}).then(e=>{p.value=!1,a.is_friend=!1,V()}).catch(e=>{p.value=!1,console.log(e)})}})},Te=()=>{N.success({title:"提示",content:"确定"+(a.is_following?"取消关注":"关注")+"该用户吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{p.value=!0,a.is_following?_e({user_id:a.id}).then(e=>{p.value=!1,window.$message.success("取消关注成功"),S()}).catch(e=>{p.value=!1,console.log(e)}):de({user_id:a.id}).then(e=>{p.value=!1,window.$message.success("关注成功"),S()}).catch(e=>{p.value=!1,console.log(e)})}})},xe=()=>{N.warning({title:"警告",content:"确定对该用户进行"+(a.status===1?"禁言":"解封")+"处理吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{p.value=!0,sa({id:a.id,status:a.status===1?2:1}).then(e=>{p.value=!1,a.status===1?window.$message.success("禁言成功"):window.$message.success("解封成功"),S()}).catch(e=>{p.value=!1,console.log(e)})}})},Ae=()=>{o.value<v.value||v.value==0?(y.value=!1,o.value++,we()):y.value=!0};return Je(()=>{S()}),Ke(()=>({path:$.path,query:$.query}),(e,w)=>{w.path==="/u"&&e.path==="/u"&&(T.value=$.query.s||"",pe(),S())}),(e,w)=>{const $e=Ve,ze=fa,ne=pa,ie=Ye("router-link"),Ue=ga,qe=ha,Ce=Re,re=wa,W=ka,Me=ya,Se=Ne,We=ba,L=De,O=Pa,B=He,Le=da,Be=ma;return s(),u("div",null,[n($e,{title:"用户详情"}),n(Le,{class:"main-content-wrap profile-wrap",bordered:""},{default:r(()=>[n(re,{show:p.value},{default:r(()=>[a.id>0?(s(),u("div",Oa,[h("div",Fa,[n(ze,{size:72,src:a.avatar},null,8,["src"])]),h("div",Ia,[h("div",Ta,[h("strong",null,A(a.nickname),1),h("span",null," @"+A(a.username),1),ue&&c(_).state.userInfo.id>0&&c(_).state.userInfo.username!=a.username&&a.is_friend?(s(),g(ne,{key:0,class:"top-tag",type:"info",size:"small",round:""},{default:r(()=>[D(" 好友 ")]),_:1})):d("",!0),c(_).state.userInfo.id>0&&c(_).state.userInfo.username!=a.username&&a.is_following?(s(),g(ne,{key:1,class:"top-tag",type:"success",size:"small",round:""},{default:r(()=>[D(" 已关注 ")]),_:1})):d("",!0),a.is_admin?(s(),g(ne,{key:2,class:"top-tag",type:"error",size:"small",round:""},{default:r(()=>[D(" 管理员 ")]),_:1})):d("",!0)]),h("div",xa,[h("span",Aa,"UID. "+A(a.id),1),h("span",$a,A(c(ea)(a.created_on))+" 加入",1)]),h("div",za,[h("span",Ua,[n(ie,{onClick:w[0]||(w[0]=ce(()=>{},["stop"])),class:"following-link",to:{name:"following",query:{s:a.username,n:a.nickname,t:"follows"}}},{default:r(()=>[D(" 关注  "+A(a.follows),1)]),_:1},8,["to"])]),h("span",qa,[n(ie,{onClick:w[1]||(w[1]=ce(()=>{},["stop"])),class:"following-link",to:{name:"following",query:{s:a.username,n:a.nickname,t:"followings"}}},{default:r(()=>[D(" 粉丝  "+A(a.followings),1)]),_:1},8,["to"])])])]),c(_).state.userInfo.id>0&&c(_).state.userInfo.username!=a.username?(s(),u("div",Ca,[n(qe,{placement:"bottom-end",trigger:"click",size:"small",options:Oe.value,onSelect:Fe},{default:r(()=>[n(Ue,{quaternary:"",circle:""},{icon:r(()=>[n(c(fe),null,{default:r(()=>[n(c(na))]),_:1})]),_:1})]),_:1},8,["options"])])):d("",!0)])):d("",!0),n(Ce,{show:R.value,user:a,onSuccess:be},null,8,["show","user"]),n(la,{show:j.value,user:a,onSuccess:Pe},null,8,["show","user"])]),_:1},8,["show"]),n(Me,{class:"profile-tabs-wrap",type:"line",animated:"",value:f.value,"onUpdate:value":he},{default:r(()=>[n(W,{name:"post",tab:"泡泡"}),n(W,{name:"comment",tab:"评论"}),n(W,{name:"highlight",tab:"亮点"}),n(W,{name:"media",tab:"图文"}),n(W,{name:"star",tab:"喜欢"})]),_:1},8,["value"]),m.value&&l.value.length===0?(s(),u("div",Ma,[n(Se,{num:k.value},null,8,["num"])])):(s(),u("div",Sa,[l.value.length===0?(s(),u("div",Wa,[n(We,{size:"large",description:"暂无数据"})])):d("",!0),c(_).state.desktopModelShow?(s(),u("div",La,[f.value==="post"?(s(),u("div",Ba,[(s(!0),u(F,null,I(z.value,t=>(s(),g(O,{key:t.id},{default:r(()=>[n(L,{post:t,isOwner:c(_).state.userInfo.id==t.user_id,addFollowAction:!0,onSendWhisper:b,onHandleFollowAction:P},null,8,["post","isOwner"])]),_:2},1024))),128))])):d("",!0),f.value==="comment"?(s(),u("div",Da,[(s(!0),u(F,null,I(U.value,t=>(s(),g(O,{key:t.id},{default:r(()=>[n(L,{post:t,isOwner:c(_).state.userInfo.id==t.user_id,addFollowAction:!0,onSendWhisper:b,onHandleFollowAction:P},null,8,["post","isOwner"])]),_:2},1024))),128))])):d("",!0),f.value==="highlight"?(s(),u("div",Ha,[(s(!0),u(F,null,I(q.value,t=>(s(),g(O,{key:t.id},{default:r(()=>[n(L,{post:t,isOwner:c(_).state.userInfo.id==t.user_id,addFollowAction:!0,onSendWhisper:b,onHandleFollowAction:P},null,8,["post","isOwner"])]),_:2},1024))),128))])):d("",!0),f.value==="media"?(s(),u("div",Na,[(s(!0),u(F,null,I(C.value,t=>(s(),g(O,{key:t.id},{default:r(()=>[n(L,{post:t,isOwner:c(_).state.userInfo.id==t.user_id,addFollowAction:!0,onSendWhisper:b,onHandleFollowAction:P},null,8,["post","isOwner"])]),_:2},1024))),128))])):d("",!0),f.value==="star"?(s(),u("div",Ra,[(s(!0),u(F,null,I(M.value,t=>(s(),g(O,{key:t.id},{default:r(()=>[n(L,{post:t,isOwner:c(_).state.userInfo.id==t.user_id,addFollowAction:!0,onSendWhisper:b,onHandleFollowAction:P},null,8,["post","isOwner"])]),_:2},1024))),128))])):d("",!0)])):(s(),u("div",Va,[f.value==="post"?(s(),u("div",ja,[(s(!0),u(F,null,I(z.value,t=>(s(),g(O,{key:t.id},{default:r(()=>[n(B,{post:t,isOwner:c(_).state.userInfo.id==t.user_id,addFollowAction:!0,onSendWhisper:b,onHandleFollowAction:P},null,8,["post","isOwner"])]),_:2},1024))),128))])):d("",!0),f.value==="comment"?(s(),u("div",Ea,[(s(!0),u(F,null,I(U.value,t=>(s(),g(O,{key:t.id},{default:r(()=>[n(B,{post:t,isOwner:c(_).state.userInfo.id==t.user_id,addFollowAction:!0,onSendWhisper:b,onHandleFollowAction:P},null,8,["post","isOwner"])]),_:2},1024))),128))])):d("",!0),f.value==="highlight"?(s(),u("div",Ga,[(s(!0),u(F,null,I(q.value,t=>(s(),g(O,{key:t.id},{default:r(()=>[n(B,{post:t,isOwner:c(_).state.userInfo.id==t.user_id,addFollowAction:!0,onSendWhisper:b,onHandleFollowAction:P},null,8,["post","isOwner"])]),_:2},1024))),128))])):d("",!0),f.value==="media"?(s(),u("div",Ja,[(s(!0),u(F,null,I(C.value,t=>(s(),g(O,{key:t.id},{default:r(()=>[n(B,{post:t,isOwner:c(_).state.userInfo.id==t.user_id,addFollowAction:!0,onSendWhisper:b,onHandleFollowAction:P},null,8,["post","isOwner"])]),_:2},1024))),128))])):d("",!0),f.value==="star"?(s(),u("div",Ka,[(s(!0),u(F,null,I(M.value,t=>(s(),g(O,{key:t.id},{default:r(()=>[n(B,{post:t,isOwner:c(_).state.userInfo.id==t.user_id,addFollowAction:!0,onSendWhisper:b,onHandleFollowAction:P},null,8,["post","isOwner"])]),_:2},1024))),128))])):d("",!0)]))]))]),_:1}),v.value>0?(s(),g(Be,{key:0,justify:"center"},{default:r(()=>[n(c(oa),{class:"load-more",slots:{complete:"没有更多泡泡了",error:"加载出错"},onInfinite:w[2]||(w[2]=t=>Ae())},{spinner:r(()=>[h("div",Ya,[y.value?d("",!0):(s(),g(re,{key:0,size:14})),h("span",Qa,A(y.value?"没有更多泡泡了":"加载更多"),1)])]),_:1})]),_:1})):d("",!0)])}}});const qs=ta(Xa,[["__scopeId","data-v-8046429c"]]);export{qs as default};