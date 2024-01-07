import{_ as ge}from"./main-nav.vue_vue_type_style_index_0_lang-qm71WtqL.js";import{d as we,H as d,S as Q,b as ye,f as h,k as a,w as s,bk as r,v as b,Z as m,e as i,j as _,A as p,t as U,P as ke,D as be,_ as S,y as R,a0 as Ce,a1 as Ie}from"./@vue-OWLFCSZf.js";import{u as Pe}from"./vuex-az5e4eav.js";import{a5 as X,a6 as $e,a7 as Be,a8 as Ue,a9 as Se,aa as Re,ab as qe,_ as Ae}from"./index-qG_8BN-j.js";import{a2 as Ne}from"./@vicons-0TGbfQ8H.js";import{h as ze,o as De,e as Ke,B as xe,b as Fe,j as Te,T as je,$ as Ve,L as Ee,a0 as Oe,a1 as Le,d as Me}from"./naive-ui-Xe90xWx_.js";import"./vue-router-KVMegFg5.js";import"./vooks-m9NwUyK6.js";import"./evtd-9ZCiDXyn.js";import"./axios-kMxbiGYq.js";import"./moment-jIwEdMgI.js";/* empty css               */import"./seemly-hKSMrbh9.js";import"./vueuc-9lIKNc7l.js";import"./@css-render-NyXtGlUD.js";import"./vdirs-gz97tqc5.js";import"./@juggle--NVrOerG.js";import"./css-render-Adblu2bf.js";import"./@emotion-vV6BesBt.js";import"./lodash-es-KEIJqYRD.js";import"./treemate-hmrDCADh.js";import"./async-validator-BHjhHa7C.js";import"./date-fns-E8ESfRGG.js";const F=q=>(Ce("data-v-7bb19e7f"),q=q(),Ie(),q),We={class:"base-line avatar"},Ge={class:"base-line"},He=F(()=>_("span",{class:"base-label"},"昵称",-1)),Je={key:0},Ze={class:"base-line"},Qe=F(()=>_("span",{class:"base-label"},"用户名",-1)),Xe={key:0},Ye={key:1},ea=F(()=>_("br",null,null,-1)),aa={key:2,class:"phone-bind-wrap"},ta={class:"captcha-img-wrap"},sa={class:"captcha-img"},na=["src"],oa={class:"form-submit-wrap"},la={key:0},ra={key:1},ia=F(()=>_("br",null,null,-1)),ua={key:2,class:"phone-bind-wrap"},da={class:"captcha-img-wrap"},pa={class:"captcha-img"},ca=["src"],ma={class:"form-submit-wrap"},_a={key:1,class:"phone-bind-wrap"},va={class:"form-submit-wrap"},fa=we({__name:"Setting",setup(q){const Y="/v1/attachment",ee="Bearer "+localStorage.getItem("PAOPAO_TOKEN"),A=d("public/avatar"),ae="false".toLowerCase()==="true",o=Pe(),P=d(!1),N=d(!1),z=d(!1),L=d(),M=d(),C=d(!1),D=d(!1),$=d(!1),B=d(!1),I=d(60),y=d(!1),k=d(!1),W=d(),G=d(),H=d(),J=d(),t=Q({id:"",b64s:"",imgCaptcha:"",phone:"",phone_captcha:"",password:"",old_password:"",reenteredPassword:""}),u=Q({id:"",b64s:"",imgCaptcha:"",activate_code:""}),te=async n=>{var e,v;return A.value==="public/avatar"&&!["image/png","image/jpg","image/jpeg"].includes((e=n.file.file)==null?void 0:e.type)?(window.$message.warning("头像仅允许 png/jpg 格式"),!1):A.value==="image"&&((v=n.file.file)==null?void 0:v.size)>1048576?(window.$message.warning("头像大小不能超过1MB"),!1):!0},se=({file:n,event:e})=>{var v;try{let f=JSON.parse((v=e.target)==null?void 0:v.response);f.code===0&&A.value==="public/avatar"&&$e({avatar:f.data.content}).then(c=>{var K;window.$message.success("头像更新成功"),(K=L.value)==null||K.clear(),o.commit("updateUserinfo",{...o.state.userInfo,avatar:f.data.content})}).catch(c=>{console.log(c)})}catch{window.$message.error("上传失败")}},ne=(n,e)=>!!t.password&&t.password.startsWith(e)&&t.password.length>=e.length,oe=(n,e)=>e===t.password,le=()=>{var n;t.reenteredPassword&&((n=J.value)==null||n.validate({trigger:"password-input"}))},re=n=>{var e;n.preventDefault(),(e=H.value)==null||e.validate(v=>{v||(D.value=!0,Be({password:t.password,old_password:t.old_password}).then(f=>{D.value=!1,$.value=!1,window.$message.success("密码重置成功"),o.commit("userLogout"),o.commit("triggerAuth",!0),o.commit("triggerAuthKey","signin")}).catch(f=>{D.value=!1}))})},ie=n=>{var e;n.preventDefault(),(e=W.value)==null||e.validate(v=>{v||(N.value=!0,Ue({phone:t.phone,captcha:t.phone_captcha}).then(f=>{N.value=!1,y.value=!1,window.$message.success("绑定成功"),o.commit("updateUserinfo",{...o.state.userInfo,phone:t.phone}),t.id="",t.b64s="",t.imgCaptcha="",t.phone="",t.phone_captcha=""}).catch(f=>{N.value=!1}))})},ue=n=>{var e;n.preventDefault(),(e=G.value)==null||e.validate(v=>{if(u.imgCaptcha===""){window.$message.warning("请输入图片验证码");return}P.value=!0,v||(z.value=!0,Se({activate_code:u.activate_code,captcha_id:u.id,imgCaptcha:u.imgCaptcha}).then(f=>{z.value=!1,k.value=!1,window.$message.success("激活成功"),o.commit("updateUserinfo",{...o.state.userInfo,activation:u.activate_code}),u.id="",u.b64s="",u.imgCaptcha="",u.activate_code=""}).catch(f=>{z.value=!1,f.code===20012&&j()}))})},T=()=>{X().then(n=>{t.id=n.id,t.b64s=n.b64s}).catch(n=>{console.log(n)})},j=()=>{X().then(n=>{u.id=n.id,u.b64s=n.b64s}).catch(n=>{console.log(n)})},de=()=>{Re({nickname:o.state.userInfo.nickname||""}).then(n=>{C.value=!1,window.$message.success("昵称修改成功")}).catch(n=>{C.value=!0})},pe=()=>{if(!(I.value>0&&B.value)){if(t.imgCaptcha===""){window.$message.warning("请输入图片验证码");return}P.value=!0,qe({phone:t.phone,img_captcha:t.imgCaptcha,img_captcha_id:t.id}).then(n=>{B.value=!0,P.value=!1,window.$message.success("发送成功");let e=setInterval(()=>{I.value--,I.value===0&&(clearInterval(e),I.value=60,B.value=!1)},1e3)}).catch(n=>{P.value=!1,n.code===20012&&T(),console.log(n)})}},ce={phone:[{required:!0,message:"请输入手机号",trigger:["input"],validator:(n,e)=>/^[1]+[3-9]{1}\d{9}$/.test(e)}],phone_captcha:[{required:!0,message:"请输入手机验证码"}]},me={activate_code:[{required:!0,message:"请输入激活码",trigger:["input"],validator:(n,e)=>/\d{6}$/.test(e)}]},_e={password:[{required:!0,message:"请输入新密码"}],old_password:[{required:!0,message:"请输入旧密码"}],reenteredPassword:[{required:!0,message:"请再次输入密码",trigger:["input","blur"]},{validator:ne,message:"两次密码输入不一致",trigger:"input"},{validator:oe,message:"两次密码输入不一致",trigger:["blur","password-input"]}]},ve=()=>{C.value=!0,setTimeout(()=>{var n;(n=M.value)==null||n.focus()},30)};return ye(()=>{o.state.userInfo.id===0&&(o.commit("triggerAuth",!0),o.commit("triggerAuthKey","signin")),T(),j()}),(n,e)=>{const v=ge,f=De,c=Ke,K=xe,g=Fe,fe=Te,x=ze,Z=je,w=Ve,he=Ee,V=Oe,E=Le,O=Me;return i(),h("div",null,[a(v,{title:"设置",theme:""}),a(x,{title:"基本信息",size:"small",class:"setting-card"},{default:s(()=>[_("div",We,[a(f,{class:"avatar-img",size:80,src:r(o).state.userInfo.avatar},null,8,["src"]),!r(o).state.profile.allowPhoneBind||r(o).state.profile.allowPhoneBind&&r(o).state.userInfo.phone&&r(o).state.userInfo.phone.length>0?(i(),b(K,{key:0,ref_key:"avatarRef",ref:L,action:Y,headers:{Authorization:ee},data:{type:A.value},onBeforeUpload:te,onFinish:se},{default:s(()=>[a(c,{size:"small"},{default:s(()=>[p("更改头像")]),_:1})]),_:1},8,["headers","data"])):m("",!0)]),_("div",Ge,[He,C.value?m("",!0):(i(),h("div",Je,U(r(o).state.userInfo.nickname),1)),ke(a(g,{ref_key:"inputInstRef",ref:M,class:"nickname-input",value:r(o).state.userInfo.nickname,"onUpdate:value":e[0]||(e[0]=l=>r(o).state.userInfo.nickname=l),type:"text",size:"small",placeholder:"请输入昵称",onBlur:de,maxlength:16},null,8,["value"]),[[be,C.value]]),!C.value&&(!r(o).state.profile.allowPhoneBind||r(o).state.profile.allowPhoneBind&&r(o).state.userInfo.phone&&r(o).state.userInfo.phone.length>0&&r(o).state.userInfo.status==1)?(i(),b(c,{key:1,quaternary:"",round:"",type:"success",size:"small",onClick:ve},{icon:s(()=>[a(fe,null,{default:s(()=>[a(r(Ne))]),_:1})]),_:1})):m("",!0)]),_("div",Ze,[Qe,p(" @"+U(r(o).state.userInfo.username),1)])]),_:1}),r(o).state.profile.allowPhoneBind?(i(),b(x,{key:0,title:"手机号",size:"small",class:"setting-card"},{default:s(()=>[r(o).state.userInfo.phone&&r(o).state.userInfo.phone.length>0?(i(),h("div",Xe,[p(U(r(o).state.userInfo.phone)+" ",1),!y.value&&r(o).state.userInfo.status==1?(i(),b(c,{key:0,quaternary:"",round:"",type:"success",onClick:e[1]||(e[1]=l=>y.value=!0)},{default:s(()=>[p(" 换绑手机 ")]),_:1})):m("",!0)])):(i(),h("div",Ye,[a(Z,{title:"手机绑定提示",type:"warning"},{default:s(()=>[p(" 成功绑定手机后，才能进行换头像、发动态、回复等交互~"),ea,y.value?m("",!0):(i(),h("a",{key:0,class:"hash-link",onClick:e[2]||(e[2]=l=>y.value=!0)}," 立即绑定 "))]),_:1})])),y.value?(i(),h("div",aa,[a(O,{ref_key:"phoneFormRef",ref:W,model:t,rules:ce},{default:s(()=>[a(w,{path:"phone",label:"手机号"},{default:s(()=>[a(g,{value:t.phone,"onUpdate:value":e[3]||(e[3]=l=>t.phone=l.trim()),placeholder:"请输入中国大陆手机号",onKeydown:e[4]||(e[4]=S(R(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),a(w,{path:"img_captcha",label:"图形验证码"},{default:s(()=>[_("div",ta,[a(g,{value:t.imgCaptcha,"onUpdate:value":e[5]||(e[5]=l=>t.imgCaptcha=l),placeholder:"请输入图形验证码后获取验证码"},null,8,["value"]),_("div",sa,[t.b64s?(i(),h("img",{key:0,src:t.b64s,onClick:T},null,8,na)):m("",!0)])])]),_:1}),a(w,{path:"phone_captcha",label:"短信验证码"},{default:s(()=>[a(he,null,{default:s(()=>[a(g,{value:t.phone_captcha,"onUpdate:value":e[6]||(e[6]=l=>t.phone_captcha=l),placeholder:"请输入收到的短信验证码"},null,8,["value"]),a(c,{type:"primary",ghost:"",disabled:B.value,loading:P.value,onClick:pe},{default:s(()=>[p(U(I.value>0&&B.value?I.value+"s后重新发送":"发送验证码"),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1}),a(E,{gutter:[0,24]},{default:s(()=>[a(V,{span:24},{default:s(()=>[_("div",oa,[a(c,{quaternary:"",round:"",onClick:e[7]||(e[7]=l=>y.value=!1)},{default:s(()=>[p(" 取消 ")]),_:1}),a(c,{secondary:"",round:"",type:"primary",loading:N.value,onClick:ie},{default:s(()=>[p(" 绑定 ")]),_:1},8,["loading"])])]),_:1})]),_:1})]),_:1},8,["model"])])):m("",!0)]),_:1})):m("",!0),ae?(i(),b(x,{key:1,title:"激活码",size:"small",class:"setting-card"},{default:s(()=>[r(o).state.userInfo.activation&&r(o).state.userInfo.activation.length>0?(i(),h("div",la,[p(U(r(o).state.userInfo.activation)+" ",1),k.value?m("",!0):(i(),b(c,{key:0,quaternary:"",round:"",type:"success",onClick:e[8]||(e[8]=l=>k.value=!0)},{default:s(()=>[p(" 重新激活 ")]),_:1}))])):(i(),h("div",ra,[a(Z,{title:"激活码激活提示",type:"warning"},{default:s(()=>[p(" 成功激活后后，才能发（公开/好友可见）动态、回复~"),ia,k.value?m("",!0):(i(),h("a",{key:0,class:"hash-link",onClick:e[9]||(e[9]=l=>k.value=!0)}," 立即激活 "))]),_:1})])),k.value?(i(),h("div",ua,[a(O,{ref_key:"activateFormRef",ref:G,model:u,rules:me},{default:s(()=>[a(w,{path:"activate_code",label:"激活码"},{default:s(()=>[a(g,{value:u.activate_code,"onUpdate:value":e[10]||(e[10]=l=>u.activate_code=l.trim()),placeholder:"请输入激活码",onKeydown:e[11]||(e[11]=S(R(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),a(w,{path:"img_captcha",label:"图形验证码"},{default:s(()=>[_("div",da,[a(g,{value:u.imgCaptcha,"onUpdate:value":e[12]||(e[12]=l=>u.imgCaptcha=l),placeholder:"请输入图形验证码后获取验证码"},null,8,["value"]),_("div",pa,[u.b64s?(i(),h("img",{key:0,src:u.b64s,onClick:j},null,8,ca)):m("",!0)])])]),_:1}),a(E,{gutter:[0,24]},{default:s(()=>[a(V,{span:24},{default:s(()=>[_("div",ma,[a(c,{quaternary:"",round:"",onClick:e[13]||(e[13]=l=>k.value=!1)},{default:s(()=>[p(" 取消 ")]),_:1}),a(c,{secondary:"",round:"",type:"primary",loading:z.value,onClick:ue},{default:s(()=>[p(" 激活 ")]),_:1},8,["loading"])])]),_:1})]),_:1})]),_:1},8,["model"])])):m("",!0)]),_:1})):m("",!0),a(x,{title:"账户安全",size:"small",class:"setting-card"},{default:s(()=>[p(" 您已设置密码 "),$.value?m("",!0):(i(),b(c,{key:0,quaternary:"",round:"",type:"success",onClick:e[14]||(e[14]=l=>$.value=!0)},{default:s(()=>[p(" 重置密码 ")]),_:1})),$.value?(i(),h("div",_a,[a(O,{ref_key:"formRef",ref:H,model:t,rules:_e},{default:s(()=>[a(w,{path:"old_password",label:"旧密码"},{default:s(()=>[a(g,{value:t.old_password,"onUpdate:value":e[15]||(e[15]=l=>t.old_password=l),type:"password",placeholder:"请输入当前密码",onKeydown:e[16]||(e[16]=S(R(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),a(w,{path:"password",label:"新密码"},{default:s(()=>[a(g,{value:t.password,"onUpdate:value":e[17]||(e[17]=l=>t.password=l),type:"password",placeholder:"请输入新密码",onInput:le,onKeydown:e[18]||(e[18]=S(R(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),a(w,{ref_key:"rPasswordFormItemRef",ref:J,first:"",path:"reenteredPassword",label:"重复密码"},{default:s(()=>[a(g,{value:t.reenteredPassword,"onUpdate:value":e[19]||(e[19]=l=>t.reenteredPassword=l),disabled:!t.password,type:"password",placeholder:"请再次输入密码",onKeydown:e[20]||(e[20]=S(R(()=>{},["prevent"]),["enter"]))},null,8,["value","disabled"])]),_:1},512),a(E,{gutter:[0,24]},{default:s(()=>[a(V,{span:24},{default:s(()=>[_("div",va,[a(c,{quaternary:"",round:"",onClick:e[21]||(e[21]=l=>$.value=!1)},{default:s(()=>[p(" 取消 ")]),_:1}),a(c,{secondary:"",round:"",type:"primary",loading:D.value,onClick:re},{default:s(()=>[p(" 更新 ")]),_:1},8,["loading"])])]),_:1})]),_:1})]),_:1},8,["model"])])):m("",!0)]),_:1})])}}}),ja=Ae(fa,[["__scopeId","data-v-7bb19e7f"]]);export{ja as default};