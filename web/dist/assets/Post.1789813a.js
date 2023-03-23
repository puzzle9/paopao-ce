import{c as me,a as _e,f as N,e as q,d as S,u as ve,x as ie,bP as Ue,y as L,A as Be,h as z,ab as ee,n as je,J as ke,q as Ne,t as Ce,L as we,K as Y,B as Me,N as Ve,bH as qe,aR as Le,b as be,bQ as He,r as k,p as Ke,aT as We,aV as Je,aN as Qe,aW as Ye,w as xe,W as u,Y as g,Z as h,bR as Ze,ai as te,a7 as $,a4 as s,a5 as i,a9 as E,bS as Ge,_ as Xe,$ as le,am as fe,aa as A,a6 as R,a3 as e,bT as et,af as ue,al as Ee,an as tt,ac as ne,a8 as Z,bU as st,ae as he,a0 as ot,a2 as ge,bV as nt,ag as at,bW as Fe,bX as Pe,bY as it,bZ as lt,b_ as ut,b$ as rt,c0 as ct,c1 as pt,c2 as dt,c3 as _t,ao as mt,c4 as vt,bA as ft,ah as De,S as ht,c5 as gt,c6 as yt,aj as kt,c7 as Ct,c8 as wt,c9 as bt}from"./index.628e76df.js";import{_ as xt}from"./InputGroup.157ae53b.js";import{f as ae}from"./formatTime.e07969bb.js";import{p as ye,a as Ae,H as $t,C as Bt,B as Et,_ as Ft,b as Pt,c as Dt}from"./content.f7953158.js";import{_ as Re}from"./Thing.f8075d68.js";import{_ as At}from"./post-skeleton.91613102.js";import{l as Rt,I as zt,_ as It,V as X}from"./IEnum.a46641e0.js";import{_ as Tt,a as St,b as Ot,c as Ut}from"./Upload.af504d28.js";import{M as jt}from"./MoreHorizFilled.95511ce9.js";import{_ as Nt}from"./main-nav.163d0a23.js";import{_ as Mt}from"./List.886d8df8.js";import{a as Vt,_ as qt}from"./Skeleton.75d2523a.js";var Lt=me("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[_e("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[_e("no-title",`
 display: flex;
 align-items: center;
 `)]),N("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),q("title-position-left",[N("line",[q("left",{width:"28px"})])]),q("title-position-right",[N("line",[q("right",{width:"28px"})])]),q("dashed",[N("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),q("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),N("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),_e("dashed",[N("line",{backgroundColor:"var(--n-color)"})]),q("dashed",[N("line",{borderColor:"var(--n-color)"})]),q("vertical",{backgroundColor:"var(--n-color)"})]);const Ht=Object.assign(Object.assign({},ie.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean});var Kt=S({name:"Divider",props:Ht,setup(r){const{mergedClsPrefixRef:m,inlineThemeDisabled:n}=ve(r),l=ie("Divider","-divider",Lt,Ue,r,m),y=L(()=>{const{common:{cubicBezierEaseInOut:c},self:{color:v,textColor:a,fontWeight:b}}=l.value;return{"--n-bezier":c,"--n-color":v,"--n-text-color":a,"--n-font-weight":b}}),_=n?Be("divider",void 0,y,r):void 0;return{mergedClsPrefix:m,cssVars:n?void 0:y,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){var r;const{$slots:m,titlePlacement:n,vertical:l,dashed:y,cssVars:_,mergedClsPrefix:c}=this;return(r=this.onRender)===null||r===void 0||r.call(this),z("div",{role:"separator",class:[`${c}-divider`,this.themeClass,{[`${c}-divider--vertical`]:l,[`${c}-divider--no-title`]:!m.default,[`${c}-divider--dashed`]:y,[`${c}-divider--title-position-${n}`]:m.default&&n}],style:_},l?null:z("div",{class:`${c}-divider__line ${c}-divider__line--left`}),!l&&m.default?z(ee,null,z("div",{class:`${c}-divider__title`},this.$slots),z("div",{class:`${c}-divider__line ${c}-divider__line--right`})):null)}});const ze=je("n-popconfirm"),Ie={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},$e=Le(Ie);var Wt=S({name:"NPopconfirmPanel",props:Ie,setup(r){const{localeRef:m}=ke("Popconfirm"),{inlineThemeDisabled:n}=ve(),{mergedClsPrefixRef:l,mergedThemeRef:y,props:_}=Ne(ze),c=L(()=>{const{common:{cubicBezierEaseInOut:a},self:{fontSize:b,iconSize:f,iconColor:p}}=y.value;return{"--n-bezier":a,"--n-font-size":b,"--n-icon-size":f,"--n-icon-color":p}}),v=n?Be("popconfirm-panel",void 0,c,_):void 0;return Object.assign(Object.assign({},ke("Popconfirm")),{mergedClsPrefix:l,cssVars:n?void 0:c,localizedPositiveText:L(()=>r.positiveText||m.value.positiveText),localizedNegativeText:L(()=>r.negativeText||m.value.negativeText),positiveButtonProps:Ce(_,"positiveButtonProps"),negativeButtonProps:Ce(_,"negativeButtonProps"),handlePositiveClick(a){r.onPositiveClick(a)},handleNegativeClick(a){r.onNegativeClick(a)},themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var r;const{mergedClsPrefix:m,showIcon:n,$slots:l}=this,y=we(l.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&z(Y,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&z(Y,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(r=this.onRender)===null||r===void 0||r.call(this),z("div",{class:[`${m}-popconfirm__panel`,this.themeClass],style:this.cssVars},Me(l.default,_=>n||_?z("div",{class:`${m}-popconfirm__body`},n?z("div",{class:`${m}-popconfirm__icon`},we(l.icon,()=>[z(Ve,{clsPrefix:m},{default:()=>z(qe,null)})])):null,_):null),y?z("div",{class:[`${m}-popconfirm__action`]},y):null)}}),Jt=me("popconfirm",[N("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[N("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),N("action",`
 display: flex;
 justify-content: flex-end;
 `,[be("&:not(:first-child)","margin-top: 8px"),me("button",[be("&:not(:last-child)","margin-right: 8px;")])])]);const Qt=Object.assign(Object.assign(Object.assign({},ie.props),Ye),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function});var Te=S({name:"Popconfirm",props:Qt,__popover__:!0,setup(r){const{mergedClsPrefixRef:m}=ve(),n=ie("Popconfirm","-popconfirm",Jt,He,r,m),l=k(null);function y(v){const{onPositiveClick:a,"onUpdate:show":b}=r;Promise.resolve(a?a(v):!0).then(f=>{var p;f!==!1&&((p=l.value)===null||p===void 0||p.setShow(!1),b&&xe(b,!1))})}function _(v){const{onNegativeClick:a,"onUpdate:show":b}=r;Promise.resolve(a?a(v):!0).then(f=>{var p;f!==!1&&((p=l.value)===null||p===void 0||p.setShow(!1),b&&xe(b,!1))})}return Ke(ze,{mergedThemeRef:n,mergedClsPrefixRef:m,props:r}),Object.assign(Object.assign({},{setShow(v){var a;(a=l.value)===null||a===void 0||a.setShow(v)},syncPosition(){var v;(v=l.value)===null||v===void 0||v.syncPosition()}}),{mergedTheme:n,popoverInstRef:l,handlePositiveClick:y,handleNegativeClick:_})},render(){const{$slots:r,$props:m,mergedTheme:n}=this;return z(Qe,Je(m,$e,{theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:r.activator||r.trigger,default:()=>{const l=We(m,$e);return z(Wt,Object.assign(Object.assign({},l),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),r)}})}});const Yt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Zt=h("path",{d:"M400 480a16 16 0 0 1-10.63-4L256 357.41L122.63 476A16 16 0 0 1 96 464V96a64.07 64.07 0 0 1 64-64h192a64.07 64.07 0 0 1 64 64v368a16 16 0 0 1-16 16z",fill:"currentColor"},null,-1),Gt=[Zt];var Xt=S({name:"Bookmark",render:function(m,n){return u(),g("svg",Yt,Gt)}});const es={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ts=h("path",{d:"M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8c-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64c.54 54.21-18.63 104.26-58.61 153c-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56z",fill:"currentColor"},null,-1),ss=[ts];var os=S({name:"Heart",render:function(m,n){return u(),g("svg",es,ss)}});const ns={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},as=Ze('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path></g>',1),is=[as];var Se=S({name:"Trash",render:function(m,n){return u(),g("svg",ns,is)}});const ls={class:"reply-compose-wrap"},us={class:"reply-switch"},rs={key:0,class:"reply-input-wrap"},cs=S({__name:"compose-reply",props:{commentId:{default:0},atUserid:{default:0},atUsername:{default:""}},emits:["reload","reset"],setup(r,{expose:m,emit:n}){const l=r,y=k(),_=k(!1),c=k(""),v=k(!1),a=f=>{_.value=f,f?setTimeout(()=>{var p;(p=y.value)==null||p.focus()},10):(v.value=!1,c.value="",n("reset"))},b=()=>{v.value=!0,Ge({comment_id:l.commentId,at_user_id:l.atUserid,content:c.value}).then(f=>{a(!1),window.$message.success("\u8BC4\u8BBA\u6210\u529F"),n("reload")}).catch(f=>{v.value=!1})};return m({switchReply:a}),(f,p)=>{const B=Xe,o=Y,F=xt;return u(),g("div",ls,[h("div",us,[_.value?$("",!0):(u(),g("span",{key:0,class:"show",onClick:p[0]||(p[0]=x=>a(!0))}," \u56DE\u590D ")),_.value?(u(),g("span",{key:1,class:"hide",onClick:p[1]||(p[1]=x=>a(!1))}," \u53D6\u6D88 ")):$("",!0)]),_.value?(u(),g("div",rs,[s(F,null,{default:i(()=>[s(B,{ref_key:"inputInstRef",ref:y,size:"small",placeholder:l.atUsername?"@"+l.atUsername:"\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9..",maxlength:"100",value:c.value,"onUpdate:value":p[2]||(p[2]=x=>c.value=x),"show-count":"",clearable:""},null,8,["placeholder","value"]),s(o,{type:"primary",size:"small",ghost:"",loading:v.value,onClick:b},{default:i(()=>[E(" \u56DE\u590D ")]),_:1},8,["loading"])]),_:1})])):$("",!0)])}}});var ps=te(cs,[["__scopeId","data-v-3616e66c"]]);const ds={class:"reply-item"},_s={class:"header-wrap"},ms={class:"username"},vs={class:"reply-name"},fs={class:"timestamp"},hs={class:"base-wrap"},gs={class:"content"},ys={key:0,class:"reply-switch"},ks=S({__name:"reply-item",props:{reply:null},emits:["focusReply","reload"],setup(r,{emit:m}){const n=r,l=le(),y=()=>{m("focusReply",n.reply)},_=()=>{et({id:n.reply.id}).then(c=>{window.$message.success("\u5220\u9664\u6210\u529F"),setTimeout(()=>{m("reload")},50)}).catch(c=>{console.log(c)})};return(c,v)=>{const a=fe("router-link"),b=ue,f=Y,p=Te;return u(),g("div",ds,[h("div",_s,[h("div",ms,[s(a,{class:"user-link",to:{name:"user",query:{username:n.reply.user.username}}},{default:i(()=>[E(A(n.reply.user.username),1)]),_:1},8,["to"]),h("span",vs,A(n.reply.at_user_id>0?"\u56DE\u590D":":"),1),n.reply.at_user_id>0?(u(),R(a,{key:0,class:"user-link",to:{name:"user",query:{username:n.reply.at_user.username}}},{default:i(()=>[E(A(n.reply.at_user.username),1)]),_:1},8,["to"])):$("",!0)]),h("div",fs,[E(A(n.reply.ip_loc?n.reply.ip_loc+" \xB7 ":n.reply.ip_loc)+" "+A(e(ae)(n.reply.created_on))+" ",1),e(l).state.userInfo.is_admin||e(l).state.userInfo.id===n.reply.user.id?(u(),R(p,{key:0,"negative-text":"\u53D6\u6D88","positive-text":"\u786E\u8BA4",onPositiveClick:_},{trigger:i(()=>[s(f,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:i(()=>[s(b,null,{default:i(()=>[s(e(Se))]),_:1})]),_:1})]),default:i(()=>[E(" \u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F ")]),_:1})):$("",!0)])]),h("div",hs,[h("div",gs,A(n.reply.content),1),e(l).state.userInfo.id>0?(u(),g("div",ys,[h("span",{class:"show",onClick:y}," \u56DE\u590D ")])):$("",!0)])])}}});var Cs=te(ks,[["__scopeId","data-v-1e3df20d"]]);const ws={class:"comment-item"},bs={class:"nickname-wrap"},xs={class:"username-wrap"},$s={class:"opt-wrap"},Bs={class:"timestamp"},Es=["innerHTML"],Fs={class:"reply-wrap"},Ps=S({__name:"comment-item",props:{comment:null},emits:["reload"],setup(r,{emit:m}){const n=r,l=le(),y=Ee(),_=k(0),c=k(""),v=k(),a=L(()=>{let F=Object.assign({texts:[],imgs:[]},n.comment);return F.contents.map(x=>{(+x.type==1||+x.type==2)&&F.texts.push(x),+x.type==3&&F.imgs.push(x)}),F}),b=(F,x)=>{let I=F.target;if(I.dataset.detail){const T=I.dataset.detail.split(":");T.length===2&&(l.commit("refresh"),T[0]==="tag"?window.$message.warning("\u8BC4\u8BBA\u5185\u7684\u65E0\u6548\u8BDD\u9898"):y.push({name:"user",query:{username:T[1]}}))}},f=F=>{var x,I;_.value=F.user_id,c.value=((x=F.user)==null?void 0:x.username)||"",(I=v.value)==null||I.switchReply(!0)},p=()=>{m("reload")},B=()=>{_.value=0,c.value=""},o=()=>{st({id:a.value.id}).then(F=>{window.$message.success("\u5220\u9664\u6210\u529F"),setTimeout(()=>{p()},50)}).catch(F=>{})};return(F,x)=>{const I=he,T=fe("router-link"),V=ue,H=Y,K=Te,W=Ae,J=Cs,Q=ps,t=Re;return u(),g("div",ws,[s(t,{"content-indented":""},tt({avatar:i(()=>[s(I,{round:"",size:30,src:e(a).user.avatar},null,8,["src"])]),header:i(()=>[h("span",bs,[s(T,{onClick:x[0]||(x[0]=Z(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:e(a).user.username}}},{default:i(()=>[E(A(e(a).user.nickname),1)]),_:1},8,["to"])]),h("span",xs," @"+A(e(a).user.username),1)]),"header-extra":i(()=>[h("div",$s,[h("span",Bs,A(e(a).ip_loc?e(a).ip_loc+" \xB7 ":e(a).ip_loc)+" "+A(e(ae)(e(a).created_on)),1),e(l).state.userInfo.is_admin||e(l).state.userInfo.id===e(a).user.id?(u(),R(K,{key:0,"negative-text":"\u53D6\u6D88","positive-text":"\u786E\u8BA4",onPositiveClick:o},{trigger:i(()=>[s(H,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:i(()=>[s(V,null,{default:i(()=>[s(e(Se))]),_:1})]),_:1})]),default:i(()=>[E(" \u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F ")]),_:1})):$("",!0)])]),footer:i(()=>[e(a).imgs.length>0?(u(),R(W,{key:0,imgs:e(a).imgs},null,8,["imgs"])):$("",!0),h("div",Fs,[(u(!0),g(ee,null,ne(e(a).replies,d=>(u(),R(J,{key:d.id,reply:d,onFocusReply:f,onReload:p},null,8,["reply"]))),128))]),e(l).state.userInfo.id>0?(u(),R(Q,{key:1,ref_key:"replyComposeRef",ref:v,"comment-id":e(a).id,"at-userid":_.value,"at-username":c.value,onReload:p,onReset:B},null,8,["comment-id","at-userid","at-username"])):$("",!0)]),_:2},[e(a).texts.length>0?{name:"description",fn:i(()=>[(u(!0),g(ee,null,ne(e(a).texts,d=>(u(),g("span",{key:d.id,class:"comment-text",onClick:x[1]||(x[1]=Z(U=>b(U,e(a).id),["stop"])),innerHTML:e(ye)(d.content).content},null,8,Es))),128))]),key:"0"}:void 0]),1024)])}}});var Ds=te(Ps,[["__scopeId","data-v-6b2cb186"]]);const As=r=>(Fe("data-v-b1d2e9fe"),r=r(),Pe(),r),Rs={key:0,class:"compose-wrap"},zs={class:"compose-line"},Is={class:"compose-user"},Ts={class:"compose-line compose-options"},Ss={class:"attachment"},Os={class:"submit-wrap"},Us={class:"attachment-list-wrap"},js={key:1,class:"compose-wrap"},Ns=As(()=>h("div",{class:"login-wrap"},[h("span",{class:"login-banner"}," \u767B\u5F55\u540E\uFF0C\u7CBE\u5F69\u66F4\u591A")],-1)),Ms={class:"login-wrap"},Vs=S({__name:"compose-comment",props:{lock:{default:0},postId:{default:0}},emits:["post-success"],setup(r,{emit:m}){const n=r,l=le(),y=k([]),_=k(!1),c=k(!1),v=k(!1),a=k(""),b=k(),f=k("public/image"),p=k([]),B=k([]),o="/v1/attachment",F=k(),x=Rt.exports.debounce(C=>{ot({k:C}).then(w=>{let P=[];w.suggest.map(D=>{P.push({label:D,value:D})}),y.value=P,c.value=!1}).catch(w=>{c.value=!1})},200),I=(C,w)=>{c.value||(c.value=!0,w==="@"&&x(C))},T=C=>{C.length>200||(a.value=C)},V=C=>{f.value=C},H=C=>{p.value=C},K=async C=>{var w,P;return f.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((w=C.file.file)==null?void 0:w.type)?(window.$message.warning("\u56FE\u7247\u4EC5\u5141\u8BB8 png/jpg/gif \u683C\u5F0F"),!1):f.value==="image"&&((P=C.file.file)==null?void 0:P.size)>10485760?(window.$message.warning("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710MB"),!1):!0},W=({file:C,event:w})=>{var P;try{let D=JSON.parse((P=w.target)==null?void 0:P.response);D.code===0&&f.value==="public/image"&&B.value.push({id:C.id,content:D.data.content})}catch{window.$message.error("\u4E0A\u4F20\u5931\u8D25")}},J=({file:C,event:w})=>{var P;try{let D=JSON.parse((P=w.target)==null?void 0:P.response);if(D.code!==0){let M=D.msg||"\u4E0A\u4F20\u5931\u8D25";D.details&&D.details.length>0&&D.details.map(j=>{M+=":"+j}),window.$message.error(M)}}catch{window.$message.error("\u4E0A\u4F20\u5931\u8D25")}},Q=({file:C})=>{let w=B.value.findIndex(P=>P.id===C.id);w>-1&&B.value.splice(w,1)},t=()=>{_.value=!0},d=()=>{var C;_.value=!1,(C=b.value)==null||C.clear(),p.value=[],a.value="",B.value=[]},U=()=>{if(a.value.trim().length===0){window.$message.warning("\u8BF7\u8F93\u5165\u5185\u5BB9\u54E6");return}let{users:C}=ye(a.value);const w=[];let P=100;w.push({content:a.value,type:2,sort:P}),B.value.map(D=>{P++,w.push({content:D.content,type:3,sort:P})}),v.value=!0,nt({contents:w,post_id:n.postId,users:Array.from(new Set(C))}).then(D=>{window.$message.success("\u53D1\u5E03\u6210\u529F"),v.value=!1,m("post-success"),d()}).catch(D=>{v.value=!1})},se=C=>{l.commit("triggerAuth",!0),l.commit("triggerAuthKey",C)};return ge(()=>{F.value="Bearer "+localStorage.getItem("PAOPAO_TOKEN")}),(C,w)=>{const P=he,D=It,M=ue,j=Y,re=Tt,ce=St,pe=at,oe=Ot,de=Ut;return u(),g("div",null,[e(l).state.userInfo.id>0?(u(),g("div",Rs,[h("div",zs,[h("div",Is,[s(P,{round:"",size:30,src:e(l).state.userInfo.avatar},null,8,["src"])]),s(D,{type:"textarea",size:"large",autosize:"",bordered:!1,options:y.value,prefix:["@"],loading:c.value,value:a.value,disabled:n.lock===1,"onUpdate:value":T,onSearch:I,onFocus:t,placeholder:n.lock===1?"\u6CE1\u6CE1\u5DF2\u88AB\u9501\u5B9A\uFF0C\u56DE\u590D\u529F\u80FD\u5DF2\u5173\u95ED":"\u5FEB\u6765\u8BC4\u8BBA\u4E24\u53E5\u5427..."},null,8,["options","loading","value","disabled","placeholder"])]),_.value?(u(),R(de,{key:0,ref_key:"uploadRef",ref:b,abstract:"","list-type":"image",multiple:!0,max:9,action:o,headers:{Authorization:F.value},data:{type:f.value},onBeforeUpload:K,onFinish:W,onError:J,onRemove:Q,"onUpdate:fileList":H},{default:i(()=>[h("div",Ts,[h("div",Ss,[s(re,{abstract:""},{default:i(({handleClick:G})=>[s(j,{disabled:p.value.length>0&&f.value==="public/video"||p.value.length===9,onClick:()=>{V("public/image"),G()},quaternary:"",circle:"",type:"primary"},{icon:i(()=>[s(M,{size:"20",color:"var(--primary-color)"},{default:i(()=>[s(e(zt))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),s(pe,{trigger:"hover",placement:"bottom"},{trigger:i(()=>[s(ce,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:a.value.length/200*100},null,8,["percentage"])]),default:i(()=>[E(" "+A(a.value.length)+" / 200 ",1)]),_:1})]),h("div",Os,[s(j,{quaternary:"",round:"",type:"tertiary",class:"cancel-btn",size:"small",onClick:d},{default:i(()=>[E(" \u53D6\u6D88 ")]),_:1}),s(j,{loading:v.value,onClick:U,type:"primary",secondary:"",size:"small",round:""},{default:i(()=>[E(" \u53D1\u5E03 ")]),_:1},8,["loading"])])]),h("div",Us,[s(oe)])]),_:1},8,["headers","data"])):$("",!0)])):(u(),g("div",js,[Ns,h("div",Ms,[s(j,{strong:"",secondary:"",round:"",type:"primary",onClick:w[0]||(w[0]=G=>se("signin"))},{default:i(()=>[E(" \u767B\u5F55 ")]),_:1}),s(j,{strong:"",secondary:"",round:"",type:"info",onClick:w[1]||(w[1]=G=>se("signup"))},{default:i(()=>[E(" \u6CE8\u518C ")]),_:1})])]))])}}});var qs=te(Vs,[["__scopeId","data-v-b1d2e9fe"]]);const Ls={class:"username-wrap"},Hs={key:0,class:"options"},Ks={key:0},Ws=["innerHTML"],Js={class:"timestamp"},Qs={key:0},Ys={key:1},Zs={class:"opts-wrap"},Gs=["onClick"],Xs={class:"opt-item"},eo=["onClick"],to=S({__name:"post-detail",props:{post:null},emits:["reload"],setup(r,{emit:m}){const n=r,l=le(),y=Ee(),_=k(!1),c=k(!1),v=k(!1),a=k(!1),b=k(!1),f=k(!1),p=k(!1),B=k(X.PUBLIC),o=L({get:()=>{let t=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},n.post);return t.contents.map(d=>{(+d.type==1||+d.type==2)&&t.texts.push(d),+d.type==3&&t.imgs.push(d),+d.type==4&&t.videos.push(d),+d.type==6&&t.links.push(d),+d.type==7&&t.attachments.push(d),+d.type==8&&t.charge_attachments.push(d)}),t},set:t=>{n.post.upvote_count=t.upvote_count,n.post.comment_count=t.comment_count,n.post.collection_count=t.collection_count}}),F=L(()=>{let t=[{label:"\u5220\u9664",key:"delete"}];return o.value.is_lock===0?t.push({label:"\u9501\u5B9A",key:"lock"}):t.push({label:"\u89E3\u9501",key:"unlock"}),l.state.userInfo.is_admin&&(o.value.is_top===0?t.push({label:"\u7F6E\u9876",key:"stick"}):t.push({label:"\u53D6\u6D88\u7F6E\u9876",key:"unstick"})),o.value.visibility===X.PUBLIC?t.push({label:"\u516C\u5F00",key:"vpublic",children:[{label:"\u79C1\u5BC6",key:"vprivate"},{label:"\u597D\u53CB\u53EF\u89C1",key:"vfriend"}]}):o.value.visibility===X.PRIVATE?t.push({label:"\u79C1\u5BC6",key:"vprivate",children:[{label:"\u516C\u5F00",key:"vpublic"},{label:"\u597D\u53CB\u53EF\u89C1",key:"vfriend"}]}):t.push({label:"\u597D\u53CB\u53EF\u89C1",key:"vfriend",children:[{label:"\u516C\u5F00",key:"vpublic"},{label:"\u79C1\u5BC6",key:"vprivate"}]}),t}),x=t=>{y.push({name:"post",query:{id:t}})},I=(t,d)=>{if(t.target.dataset.detail){const U=t.target.dataset.detail.split(":");if(U.length===2){l.commit("refresh"),U[0]==="tag"?y.push({name:"home",query:{q:U[1],t:"tag"}}):y.push({name:"user",query:{username:U[1]}});return}}x(d)},T=t=>{switch(t){case"delete":v.value=!0;break;case"lock":case"unlock":a.value=!0;break;case"stick":case"unstick":b.value=!0;break;case"vpublic":B.value=0,f.value=!0;break;case"vprivate":B.value=1,f.value=!0;break;case"vfriend":B.value=2,f.value=!0;break}},V=()=>{ut({id:o.value.id}).then(t=>{window.$message.success("\u5220\u9664\u6210\u529F"),y.replace("/"),setTimeout(()=>{l.commit("refresh")},50)}).catch(t=>{p.value=!1})},H=()=>{rt({id:o.value.id}).then(t=>{m("reload"),t.lock_status===1?window.$message.success("\u9501\u5B9A\u6210\u529F"):window.$message.success("\u89E3\u9501\u6210\u529F")}).catch(t=>{p.value=!1})},K=()=>{ct({id:o.value.id}).then(t=>{m("reload"),t.top_status===1?window.$message.success("\u7F6E\u9876\u6210\u529F"):window.$message.success("\u53D6\u6D88\u7F6E\u9876\u6210\u529F")}).catch(t=>{p.value=!1})},W=()=>{pt({id:o.value.id,visibility:B.value}).then(t=>{m("reload"),window.$message.success("\u4FEE\u6539\u53EF\u89C1\u6027\u6210\u529F")}).catch(t=>{p.value=!1})},J=()=>{dt({id:o.value.id}).then(t=>{_.value=t.status,t.status?o.value={...o.value,upvote_count:o.value.upvote_count+1}:o.value={...o.value,upvote_count:o.value.upvote_count-1}}).catch(t=>{console.log(t)})},Q=()=>{_t({id:o.value.id}).then(t=>{c.value=t.status,t.status?o.value={...o.value,collection_count:o.value.collection_count+1}:o.value={...o.value,collection_count:o.value.collection_count-1}}).catch(t=>{console.log(t)})};return ge(()=>{l.state.userInfo.id>0&&(it({id:o.value.id}).then(t=>{_.value=t.status}).catch(t=>{console.log(t)}),lt({id:o.value.id}).then(t=>{c.value=t.status}).catch(t=>{console.log(t)}))}),(t,d)=>{const U=he,se=fe("router-link"),C=mt,w=ue,P=Y,D=vt,M=ft,j=Ft,re=Ae,ce=Pt,pe=Dt,oe=Kt,de=De,G=Re;return u(),g("div",{class:"detail-item",onClick:d[6]||(d[6]=O=>x(e(o).id))},[s(G,null,{avatar:i(()=>[s(U,{round:"",size:30,src:e(o).user.avatar},null,8,["src"])]),header:i(()=>[s(se,{onClick:d[0]||(d[0]=Z(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:e(o).user.username}}},{default:i(()=>[E(A(e(o).user.nickname),1)]),_:1},8,["to"]),h("span",Ls," @"+A(e(o).user.username),1),e(o).is_top?(u(),R(C,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:i(()=>[E(" \u7F6E\u9876 ")]),_:1})):$("",!0),e(o).visibility==e(X).PRIVATE?(u(),R(C,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:i(()=>[E(" \u79C1\u5BC6 ")]),_:1})):$("",!0),e(o).visibility==e(X).FRIEND?(u(),R(C,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:i(()=>[E(" \u597D\u53CB\u53EF\u89C1 ")]),_:1})):$("",!0)]),"header-extra":i(()=>[e(l).state.userInfo.is_admin||e(l).state.userInfo.id===e(o).user.id?(u(),g("div",Hs,[s(D,{placement:"bottom-end",trigger:"click",size:"small",options:e(F),onSelect:T},{default:i(()=>[s(P,{quaternary:"",circle:""},{icon:i(()=>[s(w,null,{default:i(()=>[s(e(jt))]),_:1})]),_:1})]),_:1},8,["options"])])):$("",!0),s(M,{show:v.value,"onUpdate:show":d[1]||(d[1]=O=>v.value=O),"mask-closable":!1,preset:"dialog",title:"\u63D0\u793A",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u6CE1\u6CE1\u52A8\u6001\u5417\uFF1F","positive-text":"\u786E\u8BA4","negative-text":"\u53D6\u6D88",onPositiveClick:V},null,8,["show"]),s(M,{show:a.value,"onUpdate:show":d[2]||(d[2]=O=>a.value=O),"mask-closable":!1,preset:"dialog",title:"\u63D0\u793A",content:"\u786E\u5B9A"+(e(o).is_lock?"\u89E3\u9501":"\u9501\u5B9A")+"\u8BE5\u6CE1\u6CE1\u52A8\u6001\u5417\uFF1F","positive-text":"\u786E\u8BA4","negative-text":"\u53D6\u6D88",onPositiveClick:H},null,8,["show","content"]),s(M,{show:b.value,"onUpdate:show":d[3]||(d[3]=O=>b.value=O),"mask-closable":!1,preset:"dialog",title:"\u63D0\u793A",content:"\u786E\u5B9A"+(e(o).is_top?"\u53D6\u6D88\u7F6E\u9876":"\u7F6E\u9876")+"\u8BE5\u6CE1\u6CE1\u52A8\u6001\u5417\uFF1F","positive-text":"\u786E\u8BA4","negative-text":"\u53D6\u6D88",onPositiveClick:K},null,8,["show","content"]),s(M,{show:f.value,"onUpdate:show":d[4]||(d[4]=O=>f.value=O),"mask-closable":!1,preset:"dialog",title:"\u63D0\u793A",content:"\u786E\u5B9A\u5C06\u8BE5\u6CE1\u6CE1\u52A8\u6001\u53EF\u89C1\u5EA6\u4FEE\u6539\u4E3A"+(B.value==0?"\u516C\u5F00":B.value==1?"\u79C1\u5BC6":"\u597D\u53CB\u53EF\u89C1")+"\u5417\uFF1F","positive-text":"\u786E\u8BA4","negative-text":"\u53D6\u6D88",onPositiveClick:W},null,8,["show","content"])]),footer:i(()=>[s(j,{attachments:e(o).attachments},null,8,["attachments"]),s(j,{attachments:e(o).charge_attachments,price:e(o).attachment_price},null,8,["attachments","price"]),s(re,{imgs:e(o).imgs},null,8,["imgs"]),s(ce,{videos:e(o).videos,full:!0},null,8,["videos"]),s(pe,{links:e(o).links},null,8,["links"]),h("div",Js,[E(" \u53D1\u5E03\u4E8E "+A(e(ae)(e(o).created_on))+" ",1),e(o).ip_loc?(u(),g("span",Qs,[s(oe,{vertical:""}),E(" "+A(e(o).ip_loc),1)])):$("",!0),e(o).created_on!=e(o).latest_replied_on?(u(),g("span",Ys,[s(oe,{vertical:""}),E(" \u6700\u540E\u56DE\u590D "+A(e(ae)(e(o).latest_replied_on)),1)])):$("",!0)])]),action:i(()=>[h("div",Zs,[s(de,{justify:"space-between"},{default:i(()=>[h("div",{class:"opt-item hover",onClick:Z(J,["stop"])},[s(w,{size:"20",class:"opt-item-icon"},{default:i(()=>[_.value?$("",!0):(u(),R(e($t),{key:0})),_.value?(u(),R(e(os),{key:1,color:"red"})):$("",!0)]),_:1}),E(" "+A(e(o).upvote_count),1)],8,Gs),h("div",Xs,[s(w,{size:"20",class:"opt-item-icon"},{default:i(()=>[s(e(Bt))]),_:1}),E(" "+A(e(o).comment_count),1)]),h("div",{class:"opt-item hover",onClick:Z(Q,["stop"])},[s(w,{size:"20",class:"opt-item-icon"},{default:i(()=>[c.value?$("",!0):(u(),R(e(Et),{key:0})),c.value?(u(),R(e(Xt),{key:1,color:"#ff7600"})):$("",!0)]),_:1}),E(" "+A(e(o).collection_count),1)],8,eo)]),_:1})])]),default:i(()=>[e(o).texts.length>0?(u(),g("div",Ks,[(u(!0),g(ee,null,ne(e(o).texts,O=>(u(),g("span",{key:O.id,class:"post-text",onClick:d[5]||(d[5]=Z(Oe=>I(Oe,e(o).id),["stop"])),innerHTML:e(ye)(O.content).content},null,8,Ws))),128))])):$("",!0)]),_:1})])}}});const so=r=>(Fe("data-v-9cdf4694"),r=r(),Pe(),r),oo={key:0,class:"detail-wrap"},no={key:1,class:"empty-wrap"},ao={key:0,class:"comment-opts-wrap"},io=so(()=>h("div",{class:"comment-title-item"},[h("span",{"comment-title-item":""},"\u8BC4\u8BBA")],-1)),lo={class:"comment-opt-item"},uo={key:2},ro={key:0,class:"skeleton-wrap"},co={key:1},po={key:0,class:"empty-wrap"},_o=S({__name:"Post",setup(r){const m=kt(),n=k({}),l=k(!1),y=k(!1),_=k([]),c=L(()=>+m.query.id),v=k("default"),a=p=>{v.value=p,f()},b=()=>{n.value={id:0},l.value=!0,gt({id:c.value}).then(p=>{l.value=!1,n.value=p,f()}).catch(p=>{l.value=!1})},f=(p=!1)=>{_.value.length===0&&(y.value=!0),yt({id:n.value.id,sort_strategy:v.value}).then(B=>{_.value=B.list,y.value=!1,p&&setTimeout(()=>{window.scrollTo(0,99999)},50)}).catch(B=>{y.value=!1})};return ge(()=>{b()}),ht(c,()=>{c.value>0&&m.name==="post"&&b()}),(p,B)=>{const o=Nt,F=to,x=Vt,I=Ct,T=qt,V=wt,H=bt,K=De,W=qs,J=At,Q=Ds,t=Mt;return u(),g("div",null,[s(o,{title:"\u6CE1\u6CE1\u8BE6\u60C5",back:!0}),s(t,{class:"main-content-wrap",bordered:""},{default:i(()=>[s(T,null,{default:i(()=>[s(I,{show:l.value},{default:i(()=>[n.value.id>1?(u(),g("div",oo,[s(F,{post:n.value,onReload:b},null,8,["post"])])):(u(),g("div",no,[s(x,{size:"large",description:"\u6682\u65E0\u6570\u636E"})]))]),_:1},8,["show"])]),_:1}),n.value.id>0?(u(),g("div",ao,[s(K,{justify:"space-between"},{default:i(()=>[io,h("div",lo,[s(H,{type:"bar",size:"small",animated:"","onUpdate:value":a},{default:i(()=>[s(V,{name:"default",tab:"\u9ED8\u8BA4"}),s(V,{name:"newest",tab:"\u6700\u65B0"})]),_:1})])]),_:1})])):$("",!0),n.value.id>0?(u(),R(T,{key:1},{default:i(()=>[s(W,{lock:n.value.is_lock,"post-id":n.value.id,onPostSuccess:B[0]||(B[0]=d=>f(!0))},null,8,["lock","post-id"])]),_:1})):$("",!0),n.value.id>0?(u(),g("div",uo,[y.value?(u(),g("div",ro,[s(J,{num:5})])):(u(),g("div",co,[_.value.length===0?(u(),g("div",po,[s(x,{size:"large",description:"\u6682\u65E0\u8BC4\u8BBA\uFF0C\u5FEB\u6765\u62A2\u6C99\u53D1"})])):$("",!0),(u(!0),g(ee,null,ne(_.value,d=>(u(),R(T,{key:d.id},{default:i(()=>[s(Q,{comment:d,onReload:f},null,8,["comment"])]),_:2},1024))),128))]))])):$("",!0)]),_:1})])}}});var Bo=te(_o,[["__scopeId","data-v-9cdf4694"]]);export{Bo as default};
