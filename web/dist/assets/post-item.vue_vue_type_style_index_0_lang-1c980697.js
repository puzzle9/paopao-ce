import{p as T,a as $,_ as j,b as V,c as D}from"./content-71c02e20.js";import{d as H,n as P,a1 as F,o as a,c as d,L as i,a6 as I,Y as t,$ as o,a as p,M as r,F as R,a2 as E,a0 as x,e as _,K as l,O as c}from"./@vue-ca177dbe.js";import{u as K}from"./vuex-d28e9067.js";import{b as Y,u as A}from"./vue-router-88cc84d1.js";import{b}from"./formatTime-000dbebb.js";import{j as G,l as J,m as Q,o as U}from"./@vicons-6d35273b.js";import{o as W,M as X,j as Z,a as tt,L as et}from"./naive-ui-2035804c.js";const st={class:"nickname-wrap"},ot={class:"username-wrap"},nt={key:3},at={class:"timestamp-mobile"},it={class:"timestamp"},rt=["innerHTML"],ct={class:"opt-item"},pt={class:"opt-item"},_t={class:"opt-item"},lt={class:"opt-item"},yt=H({__name:"post-item",props:{post:null},setup(C){const w=C;Y();const h=A(),g=K(),e=P(()=>{let n=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},w.post);return n.contents.map(s=>{(+s.type==1||+s.type==2)&&n.texts.push(s),+s.type==3&&n.imgs.push(s),+s.type==4&&n.videos.push(s),+s.type==6&&n.links.push(s),+s.type==7&&n.attachments.push(s),+s.type==8&&n.charge_attachments.push(s)}),n}),y=n=>{h.push({name:"post",query:{id:n}})},z=(n,s)=>{if(n.target.dataset.detail){const m=n.target.dataset.detail.split(":");if(m.length===2){g.commit("refresh"),m[0]==="tag"?h.push({name:"home",query:{q:m[1],t:"tag"}}):h.push({name:"user",query:{username:m[1]}});return}}y(s)};return(n,s)=>{const m=W,M=F("router-link"),f=X,v=$,S=j,O=V,q=D,u=Z,B=tt,L=et;return a(),d("div",{class:"post-item",onClick:s[2]||(s[2]=k=>y(t(e).id))},[i(L,{"content-indented":""},I({avatar:o(()=>[i(m,{round:"",size:30,src:t(e).user.avatar},null,8,["src"])]),header:o(()=>[p("span",st,[i(M,{onClick:s[0]||(s[0]=x(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:t(e).user.username}}},{default:o(()=>[_(r(t(e).user.nickname),1)]),_:1},8,["to"])]),p("span",ot," @"+r(t(e).user.username),1),t(e).is_top?(a(),l(f,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:o(()=>[_(" 置顶 ")]),_:1})):c("",!0),t(e).visibility==1?(a(),l(f,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:o(()=>[_(" 私密 ")]),_:1})):c("",!0),t(e).visibility==2?(a(),l(f,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:o(()=>[_(" 好友可见 ")]),_:1})):c("",!0),t(g).state.desktopModelShow?c("",!0):(a(),d("div",nt,[p("span",at,r(t(b)(t(e).created_on))+" "+r(t(e).ip_loc),1)]))]),footer:o(()=>[t(e).attachments.length>0?(a(),l(v,{key:0,attachments:t(e).attachments},null,8,["attachments"])):c("",!0),t(e).charge_attachments.length>0?(a(),l(v,{key:1,attachments:t(e).charge_attachments,price:t(e).attachment_price},null,8,["attachments","price"])):c("",!0),t(e).imgs.length>0?(a(),l(S,{key:2,imgs:t(e).imgs},null,8,["imgs"])):c("",!0),t(e).videos.length>0?(a(),l(O,{key:3,videos:t(e).videos},null,8,["videos"])):c("",!0),t(e).links.length>0?(a(),l(q,{key:4,links:t(e).links},null,8,["links"])):c("",!0)]),action:o(()=>[i(B,{justify:"space-between"},{default:o(()=>[p("div",ct,[i(u,{size:"18",class:"opt-item-icon"},{default:o(()=>[i(t(G))]),_:1}),_(" "+r(t(e).upvote_count),1)]),p("div",pt,[i(u,{size:"18",class:"opt-item-icon"},{default:o(()=>[i(t(J))]),_:1}),_(" "+r(t(e).comment_count),1)]),p("div",_t,[i(u,{size:"18",class:"opt-item-icon"},{default:o(()=>[i(t(Q))]),_:1}),_(" "+r(t(e).collection_count),1)]),p("div",lt,[i(u,{size:"18",class:"opt-item-icon"},{default:o(()=>[i(t(U))]),_:1}),_(" "+r(t(e).share_count),1)])]),_:1})]),_:2},[t(g).state.desktopModelShow?{name:"header-extra",fn:o(()=>[p("span",it,r(t(e).ip_loc?t(e).ip_loc+" · ":t(e).ip_loc)+" "+r(t(b)(t(e).created_on)),1)]),key:"0"}:void 0,t(e).texts.length>0?{name:"description",fn:o(()=>[(a(!0),d(R,null,E(t(e).texts,k=>(a(),d("span",{key:k.id,class:"post-text",onClick:s[1]||(s[1]=x(N=>z(N,t(e).id),["stop"])),innerHTML:t(T)(k.content).content},null,8,rt))),128))]),key:"1"}:void 0]),1024)])}}});export{yt as _};
