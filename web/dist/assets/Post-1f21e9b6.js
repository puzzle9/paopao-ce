import{d as oe,H as r,r as ke,e as o,f as _,j as d,k as t,w as n,A as T,x as R,q as x,Y as u,bf as a,y as Y,c as ue,al as Ke,F as me,u as ve,$ as ze,a0 as Re,b as Se,h as xe,E as Ge}from"./@vue-a481fc63.js";import{u as ce}from"./vuex-44de225f.js";import{i as he,t as Qe,j as Xe,k as Ze,_ as re,l as et,m as tt,n as st,o as ot,p as nt,g as at,q as lt,r as it,s as ut,v as ct,w as rt,x as _t,y as pt,z as dt,A as mt,B as vt,u as ht,f as ft,C as Ie,D as ye}from"./index-e04968a0.js";import{Y as se,V as ee}from"./IEnum-5453a777.js";import{T as Oe,e as fe,f as Le,g as ge,h as Ae,i as gt,j as yt,I as kt,k as wt,l as bt,m as $t,n as Ct,o as xt,p as It,q as Pt,r as Tt,s as Ut,t as ie,u as zt,v as Rt,w as St,x as Pe,F as Te,E as pe,y as de,z as Ue}from"./@vicons-f0266f88.js";import{j as J,e as _e,K as De,I as Ot,b as Lt,L as At,o as we,M as Me,O as Ee,v as Dt,w as Mt,x as Et,y as Nt,z as qt,B as Bt,F as Ht,P as Ft,i as jt,Q as Vt,a as Ne,G as Yt,J as Wt,k as Jt,H as Kt,f as Gt,g as Qt}from"./naive-ui-eecf2ec3.js";import{p as be,_ as qe,a as Xt,b as Zt,c as es}from"./content-17b86479.js";import{u as Be,b as ts}from"./vue-router-e5a2430e.js";import{_ as ss}from"./post-skeleton-4a65c483.js";import{l as os}from"./lodash-e0b37ac3.js";import{_ as ns}from"./whisper-a090f673.js";import{c as as}from"./copy-to-clipboard-4ef7d3eb.js";import{_ as ls}from"./main-nav.vue_vue_type_style_index_0_lang-8791d5c4.js";import{W as is}from"./v3-infinite-loading-2c58ec2f.js";import"./axios-4a70c6fc.js";import"./moment-2ab8298d.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-7c8d4b48.js";import"./evtd-b614532e.js";import"./@css-render-7124a1a5.js";import"./vooks-6d99783e.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./paopao-video-player-2fe58954.js";import"./@babel-725317a4.js";import"./toggle-selection-93f4ad84.js";const us={class:"reply-item"},cs={class:"header-wrap"},rs={class:"username"},_s={class:"reply-name"},ps={class:"timestamp"},ds={class:"base-wrap"},ms={class:"content"},vs={class:"reply-switch"},hs={class:"time-item"},fs={class:"actions"},gs={class:"upvote-count"},ys=["onClick"],ks={class:"upvote-count"},ws={key:2,class:"action-item"},bs=["onClick"],$s=oe({__name:"reply-item",props:{tweetId:{},reply:{}},emits:["focusReply","reload"],setup(E,{emit:q}){const l=E,m=ce(),v=r(l.reply.is_thumbs_up==se.YES),g=r(l.reply.is_thumbs_down==se.YES),$=r(l.reply.thumbs_up_count),D=()=>{Qe({tweet_id:l.tweetId,comment_id:l.reply.comment_id,reply_id:l.reply.id}).then(y=>{v.value=!v.value,v.value?($.value++,g.value=!1):$.value--}).catch(y=>{console.log(y)})},i=()=>{Xe({tweet_id:l.tweetId,comment_id:l.reply.comment_id,reply_id:l.reply.id}).then(y=>{g.value=!g.value,g.value&&v.value&&($.value--,v.value=!1)}).catch(y=>{console.log(y)})},S=()=>{q("focusReply",l.reply)},L=()=>{Ze({id:l.reply.id}).then(y=>{window.$message.success("删除成功"),setTimeout(()=>{q("reload")},50)}).catch(y=>{console.log(y)})};return(y,A)=>{const M=ke("router-link"),U=J,p=_e,z=De,w=Ot;return o(),_("div",us,[d("div",cs,[d("div",rs,[t(M,{class:"user-link",to:{name:"user",query:{s:l.reply.user.username}}},{default:n(()=>[T(R(l.reply.user.username),1)]),_:1},8,["to"]),d("span",_s,R(l.reply.at_user_id>0?"回复":":"),1),l.reply.at_user_id>0?(o(),x(M,{key:0,class:"user-link",to:{name:"user",query:{s:l.reply.at_user.username}}},{default:n(()=>[T(R(l.reply.at_user.username),1)]),_:1},8,["to"])):u("",!0)]),d("div",ps,[T(R(l.reply.ip_loc)+" ",1),a(m).state.userInfo.is_admin||a(m).state.userInfo.id===l.reply.user.id?(o(),x(z,{key:0,"negative-text":"取消","positive-text":"确认",onPositiveClick:L},{trigger:n(()=>[t(p,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:n(()=>[t(U,null,{default:n(()=>[t(a(Oe))]),_:1})]),_:1})]),default:n(()=>[T(" 是否删除这条回复？ ")]),_:1})):u("",!0)])]),d("div",ds,[d("div",ms,[t(w,{"expand-trigger":"click","line-clamp":"5",tooltip:!1},{default:n(()=>[T(R(l.reply.content),1)]),_:1})]),d("div",vs,[d("span",hs,R(a(he)(l.reply.created_on)),1),d("div",fs,[a(m).state.userLogined?u("",!0):(o(),_("div",{key:0,class:"action-item",onClick:A[0]||(A[0]=Y(()=>{},["stop"]))},[t(U,{size:"medium"},{default:n(()=>[t(a(fe))]),_:1}),d("span",gs,R($.value),1)])),a(m).state.userLogined?(o(),_("div",{key:1,class:"action-item hover",onClick:Y(D,["stop"])},[t(U,{size:"medium"},{default:n(()=>[v.value?u("",!0):(o(),x(a(fe),{key:0})),v.value?(o(),x(a(Le),{key:1,class:"show"})):u("",!0)]),_:1}),d("span",ks,R($.value>0?$.value:"赞"),1)],8,ys)):u("",!0),a(m).state.userLogined?u("",!0):(o(),_("div",ws,[t(U,{size:"medium"},{default:n(()=>[t(a(ge))]),_:1})])),a(m).state.userLogined?(o(),_("div",{key:3,class:"action-item hover",onClick:Y(i,["stop"])},[t(U,{size:"medium"},{default:n(()=>[g.value?u("",!0):(o(),x(a(ge),{key:0})),g.value?(o(),x(a(Ae),{key:1,class:"show"})):u("",!0)]),_:1})],8,bs)):u("",!0),a(m).state.userLogined?(o(),_("span",{key:4,class:"show opacity-item reply-btn",onClick:S}," 回复 ")):u("",!0)])])])])}}});const Cs=re($s,[["__scopeId","data-v-eccdbbd8"]]),xs={class:"reply-compose-wrap"},Is={class:"reply-switch"},Ps={class:"time-item"},Ts={class:"actions"},Us={key:0,class:"action-item"},zs={class:"upvote-count"},Rs=["onClick"],Ss={class:"upvote-count"},Os={key:2,class:"action-item"},Ls=["onClick"],As={key:0,class:"reply-input-wrap"},Ds=oe({__name:"compose-reply",props:{comment:{},atUserid:{default:0},atUsername:{default:""}},emits:["reload","reset"],setup(E,{expose:q,emit:l}){const m=E,v=ce(),g=r(),$=r(!1),D=r(""),i=r(!1),S=+"300",L=r(m.comment.is_thumbs_up==se.YES),y=r(m.comment.is_thumbs_down==se.YES),A=r(m.comment.thumbs_up_count),M=()=>{et({tweet_id:m.comment.post_id,comment_id:m.comment.id}).then(w=>{L.value=!L.value,L.value?(A.value++,y.value=!1):A.value--}).catch(w=>{console.log(w)})},U=()=>{tt({tweet_id:m.comment.post_id,comment_id:m.comment.id}).then(w=>{y.value=!y.value,y.value&&L.value&&(A.value--,L.value=!1)}).catch(w=>{console.log(w)})},p=w=>{$.value=w,w?setTimeout(()=>{var O;(O=g.value)==null||O.focus()},10):(i.value=!1,D.value="",l("reset"))},z=()=>{i.value=!0,st({comment_id:m.comment.id,at_user_id:m.atUserid,content:D.value}).then(w=>{p(!1),window.$message.success("评论成功"),l("reload")}).catch(w=>{i.value=!1})};return q({switchReply:p}),(w,O)=>{const N=J,s=Lt,h=_e,F=At;return o(),_("div",xs,[d("div",Is,[d("span",Ps,R(a(he)(w.comment.created_on)),1),d("div",Ts,[a(v).state.userLogined?u("",!0):(o(),_("div",Us,[t(N,{size:"medium"},{default:n(()=>[t(a(fe))]),_:1}),d("span",zs,R(A.value),1)])),a(v).state.userLogined?(o(),_("div",{key:1,class:"action-item hover",onClick:Y(M,["stop"])},[t(N,{size:"medium"},{default:n(()=>[L.value?u("",!0):(o(),x(a(fe),{key:0})),L.value?(o(),x(a(Le),{key:1,class:"show"})):u("",!0)]),_:1}),d("span",Ss,R(A.value>0?A.value:"赞"),1)],8,Rs)):u("",!0),a(v).state.userLogined?u("",!0):(o(),_("div",Os,[t(N,{size:"medium"},{default:n(()=>[t(a(ge))]),_:1})])),a(v).state.userLogined?(o(),_("div",{key:3,class:"action-item hover",onClick:Y(U,["stop"])},[t(N,{size:"medium"},{default:n(()=>[y.value?u("",!0):(o(),x(a(ge),{key:0})),y.value?(o(),x(a(Ae),{key:1,class:"show"})):u("",!0)]),_:1})],8,Ls)):u("",!0),a(v).state.userLogined&&!$.value?(o(),_("span",{key:4,class:"show reply-btn",onClick:O[0]||(O[0]=B=>p(!0))}," 回复 ")):u("",!0),a(v).state.userLogined&&$.value?(o(),_("span",{key:5,class:"hide reply-btn",onClick:O[1]||(O[1]=B=>p(!1))}," 取消 ")):u("",!0)])]),$.value?(o(),_("div",As,[t(F,null,{default:n(()=>[t(s,{ref_key:"inputInstRef",ref:g,size:"small",placeholder:m.atUsername?"@"+m.atUsername:"请输入回复内容..",maxlength:a(S),value:D.value,"onUpdate:value":O[2]||(O[2]=B=>D.value=B),"show-count":"",clearable:""},null,8,["placeholder","maxlength","value"]),t(h,{type:"primary",size:"small",ghost:"",loading:i.value,onClick:z},{default:n(()=>[T(" 回复 ")]),_:1},8,["loading"])]),_:1})])):u("",!0)])}}});const Ms=re(Ds,[["__scopeId","data-v-f9af7a93"]]),Es={class:"comment-item"},Ns={class:"nickname-wrap"},qs={class:"username-wrap"},Bs={class:"opt-wrap"},Hs={class:"timestamp"},Fs=["innerHTML"],js={class:"reply-wrap"},Vs=oe({__name:"comment-item",props:{comment:{},postUserId:{}},emits:["reload"],setup(E,{emit:q}){const l=E,m=ce(),v=Be(),g=r(0),$=r(""),D=r(),i=ue(()=>{let p=Object.assign({texts:[],imgs:[]},l.comment);return p.contents.map(z=>{(+z.type==1||+z.type==2)&&p.texts.push(z),+z.type==3&&p.imgs.push(z)}),p}),S=(p,z)=>{let w=p.target;if(w.dataset.detail){const O=w.dataset.detail.split(":");O.length===2&&(m.commit("refresh"),O[0]==="tag"?window.$message.warning("评论内的无效话题"):v.push({name:"user",query:{s:O[1]}}))}},L=p=>{var z,w;g.value=p.user_id,$.value=((z=p.user)==null?void 0:z.username)||"",(w=D.value)==null||w.switchReply(!0)},y=()=>{q("reload")},A=()=>{g.value=0,$.value=""},M=()=>{ot({id:i.value.id}).then(p=>{window.$message.success("删除成功"),setTimeout(()=>{y()},50)}).catch(p=>{})},U=()=>{nt({id:i.value.id}).then(p=>{i.value.is_essence=p.highlight_status,window.$message.success("操作成功"),setTimeout(()=>{y()},50)}).catch(p=>{})};return(p,z)=>{const w=we,O=ke("router-link"),N=Me,s=J,h=_e,F=De,B=qe,G=Ms,W=Cs,Q=Ee;return o(),_("div",Es,[t(Q,{"content-indented":""},Ke({avatar:n(()=>[t(w,{round:"",size:30,src:i.value.user.avatar},null,8,["src"])]),header:n(()=>[d("span",Ns,[t(O,{onClick:z[0]||(z[0]=Y(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:i.value.user.username}}},{default:n(()=>[T(R(i.value.user.nickname),1)]),_:1},8,["to"])]),d("span",qs," @"+R(i.value.user.username),1),i.value.is_essence==a(se).YES?(o(),x(N,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[T(" 精选 ")]),_:1})):u("",!0)]),"header-extra":n(()=>[d("div",Bs,[d("span",Hs,R(i.value.ip_loc),1),a(m).state.userInfo.id===p.postUserId?(o(),x(F,{key:0,"negative-text":"取消","positive-text":"确认",onPositiveClick:U},{trigger:n(()=>[t(h,{quaternary:"",circle:"",size:"tiny",class:"action-btn"},{icon:n(()=>[i.value.is_essence==a(se).NO?(o(),x(s,{key:0},{default:n(()=>[t(a(gt))]),_:1})):(o(),x(s,{key:1},{default:n(()=>[t(a(yt))]),_:1}))]),_:1})]),default:n(()=>[T(" "+R(i.value.is_essence==a(se).NO?"是否精选这条评论":"是否取消精选"),1)]),_:1})):u("",!0),a(m).state.userInfo.is_admin||a(m).state.userInfo.id===i.value.user.id?(o(),x(F,{key:1,"negative-text":"取消","positive-text":"确认",onPositiveClick:M},{trigger:n(()=>[t(h,{quaternary:"",circle:"",size:"tiny",class:"action-btn"},{icon:n(()=>[t(s,null,{default:n(()=>[t(a(Oe))]),_:1})]),_:1})]),default:n(()=>[T(" 是否删除这条评论？ ")]),_:1})):u("",!0)])]),footer:n(()=>[i.value.imgs.length>0?(o(),x(B,{key:0,imgs:i.value.imgs},null,8,["imgs"])):u("",!0),t(G,{ref_key:"replyComposeRef",ref:D,comment:i.value,"at-userid":g.value,"at-username":$.value,onReload:y,onReset:A},null,8,["comment","at-userid","at-username"]),d("div",js,[(o(!0),_(me,null,ve(i.value.replies,b=>(o(),x(W,{key:b.id,reply:b,"tweet-id":i.value.post_id,onFocusReply:L,onReload:y},null,8,["reply","tweet-id"]))),128))])]),_:2},[i.value.texts.length>0?{name:"description",fn:n(()=>[(o(!0),_(me,null,ve(i.value.texts,b=>(o(),_("span",{key:b.id,class:"comment-text",onClick:z[1]||(z[1]=Y(I=>S(I,i.value.id),["stop"])),innerHTML:a(be)(b.content).content},null,8,Fs))),128))]),key:"0"}:void 0]),1024)])}}});const Ys=re(Vs,[["__scopeId","data-v-e1f04c6b"]]),Ws=E=>(ze("data-v-d9073453"),E=E(),Re(),E),Js={key:0,class:"compose-wrap"},Ks={class:"compose-line"},Gs={class:"compose-user"},Qs={class:"compose-line compose-options"},Xs={class:"attachment"},Zs={class:"submit-wrap"},eo={class:"attachment-list-wrap"},to={key:1,class:"compose-wrap"},so=Ws(()=>d("div",{class:"login-wrap"},[d("span",{class:"login-banner"}," 登录后，精彩更多")],-1)),oo={key:0,class:"login-only-wrap"},no={key:1,class:"login-wrap"},ao=oe({__name:"compose-comment",props:{lock:{default:0},postId:{default:0}},emits:["post-success"],setup(E,{emit:q}){const l=E,m=ce(),v=r([]),g=r(!1),$=r(!1),D=r(!1),i=r(""),S=r(),L=r("public/image"),y=r([]),A=r([]),M=r("true".toLowerCase()==="true"),U=+"300",p="/v1/attachment",z=ue(()=>"Bearer "+localStorage.getItem("PAOPAO_TOKEN")),w=os.debounce(f=>{at({k:f}).then(k=>{let C=[];k.suggest.map(P=>{C.push({label:P,value:P})}),v.value=C,$.value=!1}).catch(k=>{$.value=!1})},200),O=(f,k)=>{$.value||($.value=!0,k==="@"&&w(f))},N=f=>{f.length>U?i.value=f.substring(0,U):i.value=f},s=f=>{L.value=f},h=f=>{for(let H=0;H<f.length;H++){var k=f[H].name,C=k.split(".").slice(0,-1).join("."),P=k.split(".").pop();C.length>30&&(f[H].name=C.substring(0,18)+"..."+C.substring(C.length-9)+"."+P)}y.value=f},F=async f=>{var k,C;return L.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((k=f.file.file)==null?void 0:k.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):L.value==="image"&&((C=f.file.file)==null?void 0:C.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):!0},B=({file:f,event:k})=>{var C;try{let P=JSON.parse((C=k.target)==null?void 0:C.response);P.code===0&&L.value==="public/image"&&A.value.push({id:f.id,content:P.data.content})}catch{window.$message.error("上传失败")}},G=({file:f,event:k})=>{var C;try{let P=JSON.parse((C=k.target)==null?void 0:C.response);if(P.code!==0){let H=P.msg||"上传失败";P.details&&P.details.length>0&&P.details.map(e=>{H+=":"+e}),window.$message.error(H)}}catch{window.$message.error("上传失败")}},W=({file:f})=>{let k=A.value.findIndex(C=>C.id===f.id);k>-1&&A.value.splice(k,1)},Q=()=>{g.value=!0},b=()=>{var f;g.value=!1,(f=S.value)==null||f.clear(),y.value=[],i.value="",A.value=[]},I=()=>{if(i.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{users:f}=be(i.value);const k=[];let C=100;k.push({content:i.value,type:2,sort:C}),A.value.map(P=>{C++,k.push({content:P.content,type:3,sort:C})}),D.value=!0,lt({contents:k,post_id:l.postId,users:Array.from(new Set(f))}).then(P=>{window.$message.success("发布成功"),D.value=!1,q("post-success"),b()}).catch(P=>{D.value=!1})},X=f=>{m.commit("triggerAuth",!0),m.commit("triggerAuthKey",f)};return(f,k)=>{const C=we,P=Dt,H=J,e=_e,c=Mt,j=Et,ne=Nt,Z=qt,ae=Bt;return o(),_("div",null,[a(m).state.userInfo.id>0?(o(),_("div",Js,[d("div",Ks,[d("div",Gs,[t(C,{round:"",size:30,src:a(m).state.userInfo.avatar},null,8,["src"])]),t(P,{type:"textarea",size:"large",autosize:"",bordered:!1,options:v.value,prefix:["@"],loading:$.value,value:i.value,disabled:l.lock===1,"onUpdate:value":N,onSearch:O,onFocus:Q,placeholder:l.lock===1?"泡泡已被锁定，回复功能已关闭":"快来评论两句吧..."},null,8,["options","loading","value","disabled","placeholder"])]),g.value?(o(),x(ae,{key:0,ref_key:"uploadRef",ref:S,abstract:"","list-type":"image",multiple:!0,max:9,action:p,headers:{Authorization:z.value},data:{type:L.value},"file-list":y.value,onBeforeUpload:F,onFinish:B,onError:G,onRemove:W,"onUpdate:fileList":h},{default:n(()=>[d("div",Qs,[d("div",Xs,[t(c,{abstract:""},{default:n(({handleClick:K})=>[t(e,{disabled:y.value.length>0&&L.value==="public/video"||y.value.length===9,onClick:()=>{s("public/image"),K()},quaternary:"",circle:"",type:"primary"},{icon:n(()=>[t(H,{size:"20",color:"var(--primary-color)"},{default:n(()=>[t(a(kt))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),t(ne,{trigger:"hover",placement:"bottom"},{trigger:n(()=>[t(j,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:i.value.length/a(U)*100},null,8,["percentage"])]),default:n(()=>[T(" "+R(i.value.length)+" / "+R(a(U)),1)]),_:1})]),d("div",Zs,[t(e,{quaternary:"",round:"",type:"tertiary",class:"cancel-btn",size:"small",onClick:b},{default:n(()=>[T(" 取消 ")]),_:1}),t(e,{loading:D.value,onClick:I,type:"primary",secondary:"",size:"small",round:""},{default:n(()=>[T(" 发布 ")]),_:1},8,["loading"])])]),d("div",eo,[t(Z)])]),_:1},8,["headers","data","file-list"])):u("",!0)])):(o(),_("div",to,[so,M.value?u("",!0):(o(),_("div",oo,[t(e,{strong:"",secondary:"",round:"",type:"primary",onClick:k[0]||(k[0]=K=>X("signin"))},{default:n(()=>[T(" 登录 ")]),_:1})])),M.value?(o(),_("div",no,[t(e,{strong:"",secondary:"",round:"",type:"primary",onClick:k[1]||(k[1]=K=>X("signin"))},{default:n(()=>[T(" 登录 ")]),_:1}),t(e,{strong:"",secondary:"",round:"",type:"info",onClick:k[2]||(k[2]=K=>X("signup"))},{default:n(()=>[T(" 注册 ")]),_:1})])):u("",!0)]))])}}});const lo=re(ao,[["__scopeId","data-v-d9073453"]]),io={class:"username-wrap"},uo={class:"options"},co={key:0},ro=["innerHTML"],_o={class:"timestamp"},po={key:0},mo={key:1},vo={class:"opts-wrap"},ho=["onClick"],fo={class:"opt-item"},go=["onClick"],yo=["onClick"],ko=oe({__name:"post-detail",props:{post:{}},emits:["reload"],setup(E,{emit:q}){const l=E,m="true".toLowerCase()==="true",v=ce(),g=Be(),$=Ht(),D=r(!1),i=r(!1),S=r(!1),L=r(!1),y=r(!1),A=r(!1),M=r(!1),U=r(!1),p=r(ee.PUBLIC),z=r(!1),w=r({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!0,is_following:!1,created_on:0,follows:0,followings:0,status:1}),O=e=>{w.value=e,z.value=!0},N=()=>{z.value=!1},s=ue({get:()=>{let e=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},l.post);return e.contents.map(c=>{(+c.type==1||+c.type==2)&&e.texts.push(c),+c.type==3&&e.imgs.push(c),+c.type==4&&e.videos.push(c),+c.type==6&&e.links.push(c),+c.type==7&&e.attachments.push(c),+c.type==8&&e.charge_attachments.push(c)}),e},set:e=>{l.post.upvote_count=e.upvote_count,l.post.comment_count=e.comment_count,l.post.collection_count=e.collection_count,l.post.is_essence=e.is_essence}}),h=e=>()=>xe(J,null,{default:()=>xe(e)}),F=ue(()=>{var j;let e=[];if(!v.state.userInfo.is_admin&&v.state.userInfo.id!=l.post.user.id)return e.push({label:"私信 @"+l.post.user.username,key:"whisper",icon:h(Tt)}),l.post.user.is_following?e.push({label:"取消关注 @"+l.post.user.username,key:"unfollow",icon:h(Ut)}):e.push({label:"关注 @"+l.post.user.username,key:"follow",icon:h(ie)}),e;e.push({label:"删除",key:"delete",icon:h(zt)}),s.value.is_lock===0?e.push({label:"锁定",key:"lock",icon:h(Rt)}):e.push({label:"解锁",key:"unlock",icon:h(St)}),v.state.userInfo.is_admin&&(s.value.is_top===0?e.push({label:"置顶",key:"stick",icon:h(Pe)}):e.push({label:"取消置顶",key:"unstick",icon:h(Pe)})),s.value.is_essence===0?e.push({label:"设为亮点",key:"highlight",icon:h(Te)}):e.push({label:"取消亮点",key:"unhighlight",icon:h(Te)});let c;return s.value.visibility===ee.PUBLIC?c={label:"公开",key:"vpublic",icon:h(pe),children:[{label:"私密",key:"vprivate",icon:h(de)},{label:"关注可见",key:"vfollowing",icon:h(ie)}]}:s.value.visibility===ee.PRIVATE?c={label:"私密",key:"vprivate",icon:h(de),children:[{label:"公开",key:"vpublic",icon:h(pe)},{label:"关注可见",key:"vfollowing",icon:h(ie)}]}:m&&s.value.visibility===ee.FRIEND?c={label:"好友可见",key:"vfriend",icon:h(Ue),children:[{label:"公开",key:"vpublic",icon:h(pe)},{label:"私密",key:"vprivate",icon:h(de)},{label:"关注可见",key:"vfollowing",icon:h(ie)}]}:c={label:"关注可见",key:"vfollowing",icon:h(ie),children:[{label:"公开",key:"vpublic",icon:h(pe)},{label:"私密",key:"vprivate",icon:h(de)}]},m&&s.value.visibility!==ee.FRIEND&&((j=c.children)==null||j.push({label:"好友可见",key:"vfriend",icon:h(Ue)})),e.push(c),e}),B=e=>{$.success({title:"提示",content:"确定"+(e.user.is_following?"取消关注 @":"关注 @")+l.post.user.username+" 吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{e.user.is_following?ht({user_id:e.user.id}).then(c=>{window.$message.success("操作成功"),e.user.is_following=!1}).catch(c=>{}):ft({user_id:e.user.id}).then(c=>{window.$message.success("操作成功"),e.user.is_following=!0}).catch(c=>{})}})},G=e=>{g.push({name:"post",query:{id:e}})},W=(e,c)=>{if(e.target.dataset.detail){const j=e.target.dataset.detail.split(":");if(j.length===2){v.commit("refresh"),j[0]==="tag"?g.push({name:"home",query:{q:j[1],t:"tag"}}):g.push({name:"user",query:{s:j[1]}});return}}G(c)},Q=e=>{switch(e){case"whisper":O(l.post.user);break;case"follow":case"unfollow":B(l.post);break;case"delete":S.value=!0;break;case"lock":case"unlock":L.value=!0;break;case"stick":case"unstick":y.value=!0;break;case"highlight":case"unhighlight":A.value=!0;break;case"vpublic":p.value=0,M.value=!0;break;case"vprivate":p.value=1,M.value=!0;break;case"vfriend":p.value=2,M.value=!0;break;case"vfollowing":p.value=3,M.value=!0;break}},b=()=>{ct({id:s.value.id}).then(e=>{window.$message.success("删除成功"),g.replace("/"),setTimeout(()=>{v.commit("refresh")},50)}).catch(e=>{U.value=!1})},I=()=>{rt({id:s.value.id}).then(e=>{q("reload",s.value.id),e.lock_status===1?window.$message.success("锁定成功"):window.$message.success("解锁成功")}).catch(e=>{U.value=!1})},X=()=>{_t({id:s.value.id}).then(e=>{q("reload",s.value.id),e.top_status===1?window.$message.success("置顶成功"):window.$message.success("取消置顶成功")}).catch(e=>{U.value=!1})},f=()=>{pt({id:s.value.id}).then(e=>{s.value={...s.value,is_essence:e.highlight_status},e.highlight_status===1?window.$message.success("设为亮点成功"):window.$message.success("取消亮点成功")}).catch(e=>{U.value=!1})},k=()=>{dt({id:s.value.id,visibility:p.value}).then(e=>{q("reload",s.value.id),window.$message.success("修改可见性成功")}).catch(e=>{U.value=!1})},C=()=>{mt({id:s.value.id}).then(e=>{D.value=e.status,e.status?s.value={...s.value,upvote_count:s.value.upvote_count+1}:s.value={...s.value,upvote_count:s.value.upvote_count-1}}).catch(e=>{console.log(e)})},P=()=>{vt({id:s.value.id}).then(e=>{i.value=e.status,e.status?s.value={...s.value,collection_count:s.value.collection_count+1}:s.value={...s.value,collection_count:s.value.collection_count-1}}).catch(e=>{console.log(e)})},H=()=>{as(`${window.location.origin}/#/post?id=${s.value.id}&share=copy_link&t=${new Date().getTime()}`),window.$message.success("链接已复制到剪贴板")};return Se(()=>{v.state.userInfo.id>0&&(it({id:s.value.id}).then(e=>{D.value=e.status}).catch(e=>{console.log(e)}),ut({id:s.value.id}).then(e=>{i.value=e.status}).catch(e=>{console.log(e)}))}),(e,c)=>{const j=we,ne=ke("router-link"),Z=Me,ae=_e,K=Ft,le=jt,He=ns,$e=Xt,Fe=qe,je=Zt,Ve=es,Ce=Vt,Ye=Ne,We=Ee;return o(),_("div",{class:"detail-item",onClick:c[7]||(c[7]=V=>G(s.value.id))},[t(We,null,{avatar:n(()=>[t(j,{round:"",size:30,src:s.value.user.avatar},null,8,["src"])]),header:n(()=>[t(ne,{onClick:c[0]||(c[0]=Y(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:s.value.user.username}}},{default:n(()=>[T(R(s.value.user.nickname),1)]),_:1},8,["to"]),d("span",io," @"+R(s.value.user.username),1),s.value.is_top?(o(),x(Z,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[T(" 置顶 ")]),_:1})):u("",!0),s.value.visibility==a(ee).PRIVATE?(o(),x(Z,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:n(()=>[T(" 私密 ")]),_:1})):u("",!0),s.value.visibility==a(ee).FRIEND?(o(),x(Z,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:n(()=>[T(" 好友可见 ")]),_:1})):u("",!0)]),"header-extra":n(()=>[d("div",uo,[t(K,{placement:"bottom-end",trigger:"click",size:"small",options:F.value,onSelect:Q},{default:n(()=>[t(ae,{quaternary:"",circle:""},{icon:n(()=>[t(a(J),null,{default:n(()=>[t(a(wt))]),_:1})]),_:1})]),_:1},8,["options"])]),t(le,{show:S.value,"onUpdate:show":c[1]||(c[1]=V=>S.value=V),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定删除该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:b},null,8,["show"]),t(le,{show:L.value,"onUpdate:show":c[2]||(c[2]=V=>L.value=V),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定"+(s.value.is_lock?"解锁":"锁定")+"该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:I},null,8,["show","content"]),t(le,{show:y.value,"onUpdate:show":c[3]||(c[3]=V=>y.value=V),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定"+(s.value.is_top?"取消置顶":"置顶")+"该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:X},null,8,["show","content"]),t(le,{show:A.value,"onUpdate:show":c[4]||(c[4]=V=>A.value=V),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定将该泡泡动态"+(s.value.is_essence?"取消亮点":"设为亮点")+"吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:f},null,8,["show","content"]),t(le,{show:M.value,"onUpdate:show":c[5]||(c[5]=V=>M.value=V),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定将该泡泡动态可见度修改为"+(p.value==0?"公开":p.value==1?"私密":p.value==2?"好友可见":"关注可见")+"吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:k},null,8,["show","content"]),t(He,{show:z.value,user:w.value,onSuccess:N},null,8,["show","user"])]),footer:n(()=>[t($e,{attachments:s.value.attachments},null,8,["attachments"]),t($e,{attachments:s.value.charge_attachments,price:s.value.attachment_price},null,8,["attachments","price"]),t(Fe,{imgs:s.value.imgs},null,8,["imgs"]),t(je,{videos:s.value.videos,full:!0},null,8,["videos"]),t(Ve,{links:s.value.links},null,8,["links"]),d("div",_o,[T(" 发布于 "+R(a(he)(s.value.created_on))+" ",1),s.value.ip_loc?(o(),_("span",po,[t(Ce,{vertical:""}),T(" "+R(s.value.ip_loc),1)])):u("",!0),!a(v).state.collapsedLeft&&s.value.created_on!=s.value.latest_replied_on?(o(),_("span",mo,[t(Ce,{vertical:""}),T(" 最后回复 "+R(a(he)(s.value.latest_replied_on)),1)])):u("",!0)])]),action:n(()=>[d("div",vo,[t(Ye,{justify:"space-between"},{default:n(()=>[d("div",{class:"opt-item hover",onClick:Y(C,["stop"])},[t(a(J),{size:"20",class:"opt-item-icon"},{default:n(()=>[D.value?u("",!0):(o(),x(a(bt),{key:0})),D.value?(o(),x(a($t),{key:1,color:"red"})):u("",!0)]),_:1}),T(" "+R(s.value.upvote_count),1)],8,ho),d("div",fo,[t(a(J),{size:"20",class:"opt-item-icon"},{default:n(()=>[t(a(Ct))]),_:1}),T(" "+R(s.value.comment_count),1)]),d("div",{class:"opt-item hover",onClick:Y(P,["stop"])},[t(a(J),{size:"20",class:"opt-item-icon"},{default:n(()=>[i.value?u("",!0):(o(),x(a(xt),{key:0})),i.value?(o(),x(a(It),{key:1,color:"#ff7600"})):u("",!0)]),_:1}),T(" "+R(s.value.collection_count),1)],8,go),d("div",{class:"opt-item hover",onClick:Y(H,["stop"])},[t(a(J),{size:"20",class:"opt-item-icon"},{default:n(()=>[t(a(Pt))]),_:1}),T(" "+R(s.value.share_count),1)],8,yo)]),_:1})])]),default:n(()=>[s.value.texts.length>0?(o(),_("div",co,[(o(!0),_(me,null,ve(s.value.texts,V=>(o(),_("span",{key:V.id,class:"post-text",onClick:c[6]||(c[6]=Y(Je=>W(Je,s.value.id),["stop"])),innerHTML:a(be)(V.content).content},null,8,ro))),128))])):u("",!0)]),_:1})])}}});const wo=E=>(ze("data-v-edac44ef"),E=E(),Re(),E),bo={key:0,class:"detail-wrap"},$o={key:1,class:"empty-wrap"},Co={key:0,class:"comment-opts-wrap"},xo=wo(()=>d("span",{class:"comment-title-item"},"评论",-1)),Io={key:2},Po={key:0,class:"skeleton-wrap"},To={key:1},Uo={key:0,class:"empty-wrap"},zo={key:0,class:"load-more-spinner"},Ro={key:1,class:"load-more-spinner"},So={key:2,class:"load-more-spinner"},Oo={key:3,class:"load-more-spinner"},Lo={key:4,class:"load-more-spinner"},Ao={key:5,class:"load-more-spinner"},te=20,Do=oe({__name:"Post",setup(E){const q=ts(),l=r({}),m=r(!1),v=r(!1),g=r([]),$=ue(()=>+q.query.id),D=r("default"),i=r(!0);let S={loading(){},loaded(){},complete(){},error(){}};const L=b=>{D.value=b,b==="default"&&(i.value=!0),W(S)},y=b=>{Ie({id:b}).then(I=>{l.value=I}).catch(I=>{})},A=()=>{l.value={id:0},m.value=!0,Ie({id:$.value}).then(b=>{m.value=!1,l.value=b,W(S)}).catch(b=>{m.value=!1})};let M=1;const U=r(!1),p=r([]),z=b=>{U.value||ye({id:l.value.id,style:"default",page:M,page_size:te}).then(I=>{b!==null&&(S=b),I.list.length<te?U.value=!0:M++,I.list.length>0&&(M===1?p.value=I.list:p.value.push(...I.list),g.value=p.value),S.loaded(),v.value=!1}).catch(I=>{v.value=!1,S.error()})};let w=1,O=r(!1);const N=r([]),s=b=>{O.value||ye({id:l.value.id,style:"hots",page:w,page_size:te}).then(I=>{b!==null&&(S=b),I.list.length<te?O.value=!0:w++,I.list.length>0&&(w===1?N.value=I.list:N.value.push(...I.list),g.value=N.value),S.loaded(),v.value=!1}).catch(I=>{v.value=!1,S.error()})};let h=1,F=r(!1);const B=r([]),G=b=>{F.value||ye({id:l.value.id,style:"newest",page:h,page_size:te}).then(I=>{b!==null&&(S=b),I.list.length<te?F.value=!0:h++,I.list.length>0&&(h===1?B.value=I.list:B.value.push(...I.list),g.value=B.value),S.loaded(),v.value=!1}).catch(I=>{v.value=!1,S.error()})},W=b=>{$.value<1||(g.value.length===0&&(v.value=!0),D.value==="default"?(g.value=p.value,z(b)):D.value==="hots"?(g.value=N.value,s(b)):(g.value=B.value,G(b)),v.value=!1)},Q=()=>{M=1,U.value=!1,p.value=[],w=1,O.value=!1,N.value=[],h=1,F.value=!1,B.value=[],W(S)};return Se(()=>{A()}),Ge($,()=>{$.value>0&&q.name==="post"&&A()}),(b,I)=>{const X=ls,f=ko,k=Wt,C=Jt,P=Kt,H=Gt,e=Qt,c=lo,j=ss,ne=Ys,Z=Ne,ae=Yt;return o(),_("div",null,[t(X,{title:"泡泡详情",back:!0}),t(ae,{class:"main-content-wrap",bordered:""},{default:n(()=>[t(P,null,{default:n(()=>[t(C,{show:m.value},{default:n(()=>[l.value.id>1?(o(),_("div",bo,[t(f,{post:l.value,onReload:y},null,8,["post"])])):(o(),_("div",$o,[t(k,{size:"large",description:"暂无数据"})]))]),_:1},8,["show"])]),_:1}),l.value.id>0?(o(),_("div",Co,[t(e,{type:"bar","justify-content":"end",size:"small","tab-style":"margin-left: -24px;",animated:"","onUpdate:value":L},{prefix:n(()=>[xo]),default:n(()=>[t(H,{name:"default",tab:"推荐"}),t(H,{name:"hots",tab:"热门"}),t(H,{name:"newest",tab:"最新"})]),_:1})])):u("",!0),l.value.id>0?(o(),x(P,{key:1},{default:n(()=>[t(c,{lock:l.value.is_lock,"post-id":l.value.id,onPostSuccess:Q},null,8,["lock","post-id"])]),_:1})):u("",!0),l.value.id>0?(o(),_("div",Io,[v.value?(o(),_("div",Po,[t(j,{num:5})])):(o(),_("div",To,[g.value.length===0?(o(),_("div",Uo,[t(k,{size:"large",description:"暂无评论，快来抢沙发"})])):u("",!0),(o(!0),_(me,null,ve(g.value,K=>(o(),x(P,{key:K.id},{default:n(()=>[t(ne,{comment:K,postUserId:l.value.user_id,onReload:Q},null,8,["comment","postUserId"])]),_:2},1024))),128))]))])):u("",!0),g.value.length>=te?(o(),x(Z,{key:3,justify:"center"},{default:n(()=>[t(a(is),{class:"load-more",slots:{complete:"没有更多数据了",error:"加载出错"},onInfinite:W},{spinner:n(()=>[i.value&&U.value?(o(),_("span",zo)):u("",!0),!i.value&&a(O)?(o(),_("span",Ro)):u("",!0),!i.value&&a(F)?(o(),_("span",So)):u("",!0),i.value&&!U.value?(o(),_("span",Oo,"加载评论")):u("",!0),!i.value&&!a(O)?(o(),_("span",Lo,"加载评论")):u("",!0),!i.value&&!a(F)?(o(),_("span",Ao,"加载评论")):u("",!0)]),_:1})]),_:1})):u("",!0)]),_:1})])}}});const fn=re(Do,[["__scopeId","data-v-edac44ef"]]);export{fn as default};