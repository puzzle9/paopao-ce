import{d as h,e,f as l,F as u,x as k,k as o,w as s,bk as a,j as C,y,t as I,v as g,Z as m,H as j,A as N,h as E}from"./@vue-M2CzPUka.js";import{$ as U,a0 as V}from"./@vicons-t7bPon9z.js";import{j as $,V as A,W as B,m as R,X as P,e as T,i as Z}from"./naive-ui-CFtxauK_.js";import{_ as D,W as L,X as M}from"./index-Ngk4ShPB.js";import{e as O}from"./paopao-video-player-P8vpiOXx.js";const W={class:"link-wrap"},X={class:"link-txt-wrap"},z=["href"],F={class:"link-txt"},H=h({__name:"post-link",props:{links:{default:()=>[]}},setup(f){const i=f;return(p,r)=>{const w=$;return e(),l("div",W,[(e(!0),l(u,null,k(i.links,n=>(e(),l("div",{class:"link-item",key:n.id},[o(w,{class:"hash-link"},{default:s(()=>[o(a(U))]),_:1}),C("div",X,[C("a",{href:n.content,class:"hash-link",target:"_blank",onClick:r[0]||(r[0]=y(()=>{},["stop"]))},[C("span",F,I(n.content),1)],8,z)])]))),128))])}}}),st=D(H,[["__scopeId","data-v-36eef76b"]]),q={key:0},rt=h({__name:"post-video",props:{videos:{default:()=>[]},full:{type:Boolean,default:!1}},setup(f){const i=f;return(p,r)=>{const w=A,n=B;return i.videos.length>0?(e(),l("div",q,[o(n,{"x-gap":4,"y-gap":4,cols:p.full?1:5},{default:s(()=>[o(w,{span:p.full?1:3},{default:s(()=>[(e(!0),l(u,null,k(i.videos,v=>(e(),g(a(O),{onClick:r[0]||(r[0]=y(()=>{},["stop"])),key:v.id,src:v.content,colors:["#18a058","#2aca75"],hoverable:!0,theme:"gradient"},null,8,["src"]))),128))]),_:1},8,["span"])]),_:1},8,["cols"])])):m("",!0)}}}),G={class:"images-wrap"},ot=h({__name:"post-image",props:{imgs:{default:()=>[]}},setup(f){const i="https://paopao-assets.oss-cn-shanghai.aliyuncs.com/public/404.png",p="?x-oss-process=image/resize,m_fill,w_300,h_300,limit_0/auto-orient,1/format,webp",r=f;return(w,n)=>{const v=R,d=A,c=B,x=P;return e(),l("div",G,[[1].includes(r.imgs.length)?(e(),g(x,{key:0},{default:s(()=>[o(c,{"x-gap":4,"y-gap":4,cols:2},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,t=>(e(),g(d,{key:t.id},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[0]||(n[0]=y(()=>{},["stop"])),class:"post-img x1","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024))),128))]),_:1})]),_:1})):m("",!0),[2,3].includes(r.imgs.length)?(e(),g(x,{key:1},{default:s(()=>[o(c,{"x-gap":4,"y-gap":4,cols:3},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,t=>(e(),g(d,{key:t.id},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[1]||(n[1]=y(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024))),128))]),_:1})]),_:1})):m("",!0),[4].includes(r.imgs.length)?(e(),g(x,{key:2},{default:s(()=>[o(c,{"x-gap":4,"y-gap":4,cols:4},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,t=>(e(),g(d,{key:t.id},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[2]||(n[2]=y(()=>{},["stop"])),class:"post-img x3","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024))),128))]),_:1})]),_:1})):m("",!0),[5].includes(r.imgs.length)?(e(),g(x,{key:3},{default:s(()=>[o(c,{"x-gap":4,"y-gap":4,cols:3},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,(t,_)=>(e(),l(u,{key:t.id},[_<3?(e(),g(d,{key:0},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[3]||(n[3]=y(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):m("",!0)],64))),128))]),_:1}),o(c,{"x-gap":4,"y-gap":4,cols:2,style:{"margin-top":"4px"}},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,(t,_)=>(e(),l(u,{key:t.id},[_>=3?(e(),g(d,{key:0},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[4]||(n[4]=y(()=>{},["stop"])),class:"post-img x1","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):m("",!0)],64))),128))]),_:1})]),_:1})):m("",!0),[6].includes(r.imgs.length)?(e(),g(x,{key:4},{default:s(()=>[o(c,{"x-gap":4,"y-gap":4,cols:3},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,(t,_)=>(e(),l(u,{key:t.id},[_<3?(e(),g(d,{key:0},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[5]||(n[5]=y(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):m("",!0)],64))),128))]),_:1}),o(c,{"x-gap":4,"y-gap":4,cols:3,style:{"margin-top":"4px"}},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,(t,_)=>(e(),l(u,{key:t.id},[_>=3?(e(),g(d,{key:0},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[6]||(n[6]=y(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):m("",!0)],64))),128))]),_:1})]),_:1})):m("",!0),r.imgs.length===7?(e(),g(x,{key:5},{default:s(()=>[o(c,{"x-gap":4,"y-gap":4,cols:4},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,(t,_)=>(e(),l(u,null,[_<4?(e(),g(d,{key:t.id},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[7]||(n[7]=y(()=>{},["stop"])),class:"post-img x3","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):m("",!0)],64))),256))]),_:1}),o(c,{"x-gap":4,"y-gap":4,cols:3,style:{"margin-top":"4px"}},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,(t,_)=>(e(),l(u,null,[_>=4?(e(),g(d,{key:t.id},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[8]||(n[8]=y(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):m("",!0)],64))),256))]),_:1})]),_:1})):m("",!0),r.imgs.length===8?(e(),g(x,{key:6},{default:s(()=>[o(c,{"x-gap":4,"y-gap":4,cols:4},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,(t,_)=>(e(),l(u,null,[_<4?(e(),g(d,{key:t.id},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[9]||(n[9]=y(()=>{},["stop"])),class:"post-img x3","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):m("",!0)],64))),256))]),_:1}),o(c,{"x-gap":4,"y-gap":4,cols:4,style:{"margin-top":"4px"}},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,(t,_)=>(e(),l(u,null,[_>=4?(e(),g(d,{key:t.id},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[10]||(n[10]=y(()=>{},["stop"])),class:"post-img x3","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):m("",!0)],64))),256))]),_:1})]),_:1})):m("",!0),r.imgs.length===9?(e(),g(x,{key:7},{default:s(()=>[o(c,{"x-gap":4,"y-gap":4,cols:3},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,(t,_)=>(e(),l(u,null,[_<3?(e(),g(d,{key:t.id},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[11]||(n[11]=y(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):m("",!0)],64))),256))]),_:1}),o(c,{"x-gap":4,"y-gap":4,cols:3,style:{"margin-top":"4px"}},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,(t,_)=>(e(),l(u,null,[_>=3&&_<6?(e(),g(d,{key:t.id},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[12]||(n[12]=y(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):m("",!0)],64))),256))]),_:1}),o(c,{"x-gap":4,"y-gap":4,cols:3,style:{"margin-top":"4px"}},{default:s(()=>[(e(!0),l(u,null,k(r.imgs,(t,_)=>(e(),l(u,null,[_>=6?(e(),g(d,{key:t.id},{default:s(()=>[o(v,{onError:()=>t.content=a(i),onClick:n[13]||(n[13]=y(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+a(p),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):m("",!0)],64))),256))]),_:1})]),_:1})):m("",!0)])}}}),J={class:"attachment-wrap"},K=h({__name:"post-attachment",props:{attachments:{default:()=>[]},price:{default:0}},setup(f){const i=f,p=j(!1),r=j(""),w=j(0),n=d=>{p.value=!0,w.value=d.id,r.value="这是一个免费附件，您可以直接下载？",d.type===8&&(r.value=()=>E("div",{},[E("p",{},"这是一个收费附件，下载将收取"+(i.price/100).toFixed(2)+"元")]),L({id:w.value}).then(c=>{c.paid&&(r.value=()=>E("div",{},[E("p",{},"此次下载您已支付或无需付费，请确认下载")]))}).catch(c=>{p.value=!1}))},v=()=>{M({id:w.value}).then(d=>{window.open(d.signed_url.replace("http://","https://"),"_blank")}).catch(d=>{console.log(d)})};return(d,c)=>{const x=$,t=T,_=Z;return e(),l("div",J,[(e(!0),l(u,null,k(d.attachments,b=>(e(),l("div",{class:"attach-item",key:b.id},[o(t,{onClick:y(Q=>n(b),["stop"]),type:"primary",size:"tiny",dashed:""},{icon:s(()=>[o(x,null,{default:s(()=>[o(a(V))]),_:1})]),default:s(()=>[N(" "+I(b.type===8?"收费":"免费")+"附件 ",1)]),_:2},1032,["onClick"])]))),128)),o(_,{show:p.value,"onUpdate:show":c[0]||(c[0]=b=>p.value=b),"mask-closable":!1,preset:"dialog",title:"下载提示",content:r.value,"positive-text":"确认下载","negative-text":"取消","icon-placement":"top",onPositiveClick:v},null,8,["show","content"])])}}}),lt=D(K,[["__scopeId","data-v-22563084"]]),at=f=>{const i=[],p=[];var r=/(#|＃)([^#@\s])+?\s+?/g,w=/@([a-zA-Z0-9])+?\s+?/g;return f=f.replace(/<[^>]*?>/gi,"").replace(/(.*?)<\/[^>]*?>/gi,"").replace(r,n=>(i.push(n.substr(1).trim()),'<a class="hash-link" data-detail="tag:'+encodeURIComponent(n.substr(1).trim())+'">'+n.trim()+"</a> ")).replace(w,n=>(p.push(n.substr(1).trim()),'<a class="hash-link" data-detail="user:'+encodeURIComponent(n.substr(1).trim())+'">'+n.trim()+"</a> ")),{content:f,tags:i,users:p}},ct=(f,i,p,r,w=!0)=>{const n=f.length>r;if(w&&n){f=f.substring(0,r);let c=f.charAt(r-1);(c=="#"||c=="#"||c=="@")&&(f=f.substring(0,r-1))}const v=/(#|＃)([^#@\s])+?\s+?/g,d=/@([a-zA-Z0-9])+?\s+?/g;return f=f.replace(/<[^>]*?>/gi,"").replace(/(.*?)<\/[^>]*?>/gi,"").replace(v,c=>'<a class="hash-link" data-detail="tag:'+encodeURIComponent(c.substring(1).trim())+'">'+c.trim()+"</a> ").replace(d,c=>'<a class="hash-link" data-detail="user:'+encodeURIComponent(c.substring(1).trim())+'">'+c.trim()+"</a> "),n&&(f=f.trimEnd()+(w?"...&nbsp;":"&nbsp;")+'<a class="hash-link" data-detail="post">'+(w?i:p)+"</a> "),f};export{ot as _,lt as a,rt as b,st as c,ct as d,at as p};