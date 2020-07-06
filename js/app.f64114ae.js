(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],r=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var r={},n={app:0},a=[];function o(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=r,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(s,r,function(e){return t[e]}.bind(null,r));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/git-notes/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"07ae":function(t,e,s){},"2f22":function(t,e,s){"use strict";var r=s("45cd"),n=s.n(r);n.a},"36c9":function(t,e,s){},"3a7e":function(t,e,s){"use strict";var r=s("fa08"),n=s.n(r);n.a},"45cd":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var r=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app"},[s("div",{attrs:{className:"main-container"}},[s("x-search-container"),s("x-progress-container"),s("x-keys-container"),s("x-error-container"),s("x-navigator-container"),s("x-profile-container")],1)])},a=[];const o=new r["a"]({data:{what:"the EventBus for this app...",kounter:0}});var i=o,l=s("bc3a"),c=s.n(l);function u(t){return c.a.get(`https://api.github.com/users/${t}/repos`)}function p(t){return c.a.get("https://api.github.com/users/"+t)}function f(t){return c.a.get("https://fire-notes.herokuapp.com/notes/"+t)}function d(){return c.a.get("https://fire-notes.herokuapp.com/keys")}function m(t){return c.a.all([u(t),p(t)]).then(t=>({repos:t[0].data,bio:t[1].data,error:!1})).catch(t=>({repos:[],bio:{},error:!0,fault:t}))}function h(t){return c.a.all([d(),f(t)]).then(t=>({keys:t[0].data,notes:t[1].data})).catch(t=>({keys:[],notes:[],fault:t}))}const g={getGithubInfo:m,getGithubNotes:h,getUserNotes:f,getUserInfo:p,getRepos:u};var v=g;const b={bio:{},repos:[],notes:[],keys:[],tags:[],error:!1,ktype:"warning",username:"",popState:null},_="AppStore.username",y=(t,e)=>-1!==t.indexOf(e)?t.slice(t.indexOf(e)+e.length):null,k=(t,e)=>{b[t]=e;const s="store."+t;i.$emit(s,e)},C=t=>{const e=t.toLowerCase();k("username",e)},x=t=>{i.$emit("fire-notes:update",t.user,t.note)},$=t=>{if(!b.tags.includes(t)){const e=[...b.tags,t].sort();k("tags",e)}},w=(t,e)=>t?e&&e!==t?e:t:null,O=()=>{const t=localStorage.getItem(_),e=y(location.pathname,"/profile/"),s=w(t,e);console.log("-- initStore:  "+s),k("username",s?s.toLowerCase():null),i.kounter=0,k("ktype","info"),null!==b.username&&(J(b.username),K(b.username))};let E=0,j=0,S=null;const N=()=>{const t=i.kounter;5===E?(E=0,i.kounter=100===t?0:t+1):E++,j++},P=()=>{i.kounter=100,k("ktype","danger")},U=t=>{"KEYS"===t.type&&k("keys",t.keys),"DATA"===t.type&&t.id===b.username&&k("notes",t.values)};let T=0;const I=()=>{j>0&&j!==T?T=j:(clearInterval(S),P())},B=()=>{S=setInterval(()=>{I()},1e4)},G=t=>{null!==t&&(console.log("-- saveUser:  "+t),localStorage.setItem(_,t))},K=t=>{console.log("-- fetchNotes:  "+t),k("notes",[]),t&&i.$emit("fire-notes:get",t)},D=(t,e)=>{k("bio",e.bio),k("repos",e.repos),k("error",e.error),b.error||(G(t),$(t))},J=t=>{console.log("-- fetchGithub:  "+t),k("bio",{}),k("repos",[]),t?v.getGithubInfo(t).then(e=>{D(t,e)}):L(null)},R=t=>{C(t),J(t),K(t)},A=t=>{t&&R(t.username)},L=t=>{console.log("-- setPopState: ",t),k("popState",t),A(t)},F={"init-store":O,"start-klock":B,offline:P,"search-for":R,"add-new-note":x,"add-new-tag":$,"new-data":U,"set-pop-state":L},M=Object.keys(F);M.forEach(t=>{i.$on(t,F[t])});const Y=Object.keys(b);Y.forEach(t=>{i.$on("get:"+t,(function(){i.$emit("store."+t,b[t])}))});const V={api:M.map(t=>t),data:Y.map(t=>"store."+t),get:Y.map(t=>"get:"+t)};var W=V;const q="wss://fire-notes.herokuapp.com";let z=null;const H=t=>{console.log("-- wss: GET ",t),z.send(JSON.stringify({type:"GET",id:t}))},Q=()=>{console.log("-- wss: KEYS"),z.send(JSON.stringify({type:"KEYS"}))},X=(t,e)=>{console.log("-- wss: POST"),z.send(JSON.stringify({type:"POST",id:t,value:e}))},Z=()=>{console.log("-- wss: Open"),i.$emit("init-store"),i.$emit("start-klock"),Q()},tt=()=>{console.log("-- wss: Close"),i.$emit("offline")},et=t=>{if("ping"===t.data)N();else{const e=JSON.parse(t.data);i.$emit("new-data",e)}},st=()=>{console.log("-- wss: Error")},rt=()=>{z=new WebSocket(q),z.onopen=t=>{Z(t)},z.onclose=t=>{tt(t)},z.onmessage=t=>{et(t)},z.onerror=t=>{st(t)}};rt();const nt={get:H,keys:Q,update:X},at=Object.keys(nt);at.forEach(t=>{i.$on("fire-notes:"+t,nt[t])});const ot={api:at.map(t=>"fire-notes:"+t)};var it=ot,lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t.error?s("x-danger",{attrs:{salute:"Error",message:"user does not exist..."}}):t._e()],1)],1)},ct=[],ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alert alert-danger my-danger",attrs:{role:"alert"}},[s("strong",[t._v(t._s(t.salute)+":")]),t._v(" "+t._s(t.message)+" ")])},pt=[],ft={props:["salute","message"]},dt=ft,mt=(s("648b"),s("2877")),ht=Object(mt["a"])(dt,ut,pt,!1,null,"db5763e0",null),gt=ht.exports,vt={components:{xDanger:gt},data(){return{error:!1}},methods:{updateError(t){this.error=t}},created(){i.$on("store.error",this.updateError),i.$emit("get:error")}},bt=vt,_t=Object(mt["a"])(bt,lt,ct,!1,null,"e1448d2a",null),yt=_t.exports,kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container keyContainer"},[s("x-keys",{attrs:{keys:t.keys}})],1)},Ct=[],xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition-group",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},t._l(t.keys,(function(e){return s("span",{key:e,staticClass:"label label-primary my-key",on:{click:function(s){return s.preventDefault(),t.keyClick(e)}}},[t._v(t._s(e))])})),0)],1)},$t=[],wt={props:["keys"],methods:{keyClick(t){i.$emit("search-for",t)}}},Ot=wt,Et=(s("2f22"),Object(mt["a"])(Ot,xt,$t,!1,null,"31c75719",null)),jt=Et.exports,St={components:{xKeys:jt},data(){return{keys:[]}},methods:{updateKeys(t){this.keys=t}},created(){i.$on("store.keys",this.updateKeys),i.$emit("get:keys")}},Nt=St,Pt=(s("d2c1"),Object(mt["a"])(Nt,kt,Ct,!1,null,"1cbd71e4",null)),Ut=Pt.exports,Tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("x-success",{attrs:{salute:"Welcome",message:"search for a Github user..."}}),s("x-navigator",{attrs:{tags:t.tags}})],1)},It=[],Bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-tags"},[s("transition-group",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},t._l(t.tags,(function(e){return s("span",{key:e,staticClass:"label label-info my-tag",on:{click:function(s){return s.preventDefault(),t.tagClick(e)}}},[t._v(t._s(e))])})),0)],1)},Gt=[],Kt={props:["tags"],methods:{tagClick(t){i.$emit("search-for",t)}}},Dt=Kt,Jt=(s("e123"),Object(mt["a"])(Dt,Bt,Gt,!1,null,"008775ba",null)),Rt=Jt.exports,At=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alert alert-success my-success",attrs:{role:"alert"}},[s("strong",[t._v(t._s(t.salute)+":")]),t._v(" "+t._s(t.message)+" ")])},Lt=[],Ft={props:["salute","message"]},Mt=Ft,Yt=(s("9b09"),Object(mt["a"])(Mt,At,Lt,!1,null,"49ec759a",null)),Vt=Yt.exports,Wt={components:{xNavigator:Rt,xSuccess:Vt},data(){return{tags:[]}},methods:{updateTags(t){this.tags=t}},created(){setTimeout(()=>{i.$emit("add-new-tag","eswat2")},1e3),i.$on("store.tags",this.updateTags),i.$emit("get:tags")}},qt=Wt,zt=Object(mt["a"])(qt,Tt,It,!1,null,"fc6629c0",null),Ht=zt.exports,Qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("transition",{attrs:{"enter-active-class":"animated fadeInUpBig","leave-active-class":"animated fadeOutDownBig",mode:"out-in"}},[t.load?s("x-profile",{key:t.keyFor,attrs:{bio:t.bio,repos:t.repos,notes:t.notes,user:t.user}}):t._e()],1)],1)},Xt=[],Zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row app-profile"},[s("div",{staticClass:"col-md-4"},[s("x-user-profile",{attrs:{bio:t.bio}})],1),s("div",{staticClass:"col-md-4"},[s("x-repos",{attrs:{repos:t.repos}})],1),s("div",{staticClass:"col-md-4"},[s("x-notes",{attrs:{notes:t.notes,user:t.user}})],1)])},te=[],ee=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-profile"},[s("h3",[t._v("User Profile")]),t.chk4("avatar_url")?s("li",{staticClass:"list-group-item"},[s("img",{staticClass:"img-rounded img-responsive",attrs:{alt:"",src:t.bio.avatar_url}})]):t._e(),t.chk4("name")?s("li",{staticClass:"list-group-item"},[t._v("Name: "+t._s(t.bio.name))]):t._e(),t.chk4("login")?s("li",{staticClass:"list-group-item"},[t._v("Username: "+t._s(t.bio.login))]):t._e(),t.chk4("email")?s("li",{staticClass:"list-group-item"},[t._v("Email: "+t._s(t.bio.email))]):t._e(),t.chk4("location")?s("li",{staticClass:"list-group-item"},[t._v("Location: "+t._s(t.bio.location))]):t._e(),t.chk4("company")?s("li",{staticClass:"list-group-item"},[t._v("Company: "+t._s(t.bio.company))]):t._e(),t.chk4num("followers")?s("li",{staticClass:"list-group-item"},[t._v("Followers: "+t._s(t.bio.followers))]):t._e(),t.chk4num("following")?s("li",{staticClass:"list-group-item"},[t._v("Following: "+t._s(t.bio.following))]):t._e(),t.chk4num("public_repos")?s("li",{staticClass:"list-group-item"},[t._v("Public Repos: "+t._s(t.bio.public_repos))]):t._e(),t.chk4("blog")?s("li",{staticClass:"list-group-item"},[t._v(" Blog: "),s("a",{attrs:{href:t.bio.blog,target:"_blank"}},[t._v(t._s(t.bio.blog))])]):t._e()])},se=[],re={props:["bio"],methods:{chk4num(t){return null!==this.bio[t]&&this.bio[t]>0},chk4(t){return this.bio[t]&&null!=this.bio[t]}}},ne=re,ae=(s("6942"),Object(mt["a"])(ne,ee,se,!1,null,"26bfd4fc",null)),oe=ae.exports,ie=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",[t._v("User Repos")]),s("ul",{staticClass:"list-group"},t._l(t.repos,(function(e,r){return s("li",{key:r,staticClass:"list-group-item"},[e.html_url?s("h4",[s("a",{attrs:{href:e.html_url,target:"_blank"}},[t._v(t._s(e.name))]),t.hasValue(e.homepage)?s("a",{attrs:{href:e.homepage,target:"_blank"}},[s("i",{staticClass:"fa fa-home my-site"})]):t._e()]):s("h4",[t._v(t._s(e.name)+">")]),e.description?s("p",{staticClass:"my-grey"},[t._v(t._s(e.description))]):t._e()])})),0)])},le=[],ce={props:["repos"],methods:{hasValue(t){return null!==t&&""!==t}}},ue=ce,pe=(s("e0ae"),Object(mt["a"])(ue,ie,le,!1,null,"2059f252",null)),fe=pe.exports,de=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",[t._v("Notes for "+t._s(t.user))]),s("x-add-note",{attrs:{user:t.user}}),s("x-notes-list",{attrs:{notes:t.notes}})],1)},me=[],he=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[s("div",{staticClass:"input-group"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.note,expression:"note",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Note..."},domProps:{value:t.note},on:{input:function(e){e.target.composing||(t.note=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn btn-warning",attrs:{disabled:""===t.note},on:{click:function(e){return e.preventDefault(),t.doSubmit(e)}}},[t._v(" Add "),s("i",{staticClass:"fa fa-sticky-note app-sticky"})])])])])},ge=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-chevron-right"})])}],ve={props:["user"],data(){return{note:""}},methods:{doSubmit(){""!==this.note&&(i.$emit("add-new-note",{user:this.user,note:this.note}),this.note="")}}},be=ve,_e=(s("3a7e"),Object(mt["a"])(be,he,ge,!1,null,"e537d51c",null)),ye=_e.exports,ke=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"list-group"},t._l(t.notes,(function(e,r){return s("li",{key:r,staticClass:"list-group-item"},[t._v(t._s(e))])})),0)},Ce=[],xe={props:["notes"]},$e=xe,we=Object(mt["a"])($e,ke,Ce,!1,null,"8befabac",null),Oe=we.exports,Ee={props:["notes","user"],components:{xAddNote:ye,xNotesList:Oe}},je=Ee,Se=Object(mt["a"])(je,de,me,!1,null,"3b06d1bc",null),Ne=Se.exports,Pe={props:["bio","repos","notes","user"],components:{xUserProfile:oe,xRepos:fe,xNotes:Ne}},Ue=Pe,Te=(s("cc38"),Object(mt["a"])(Ue,Zt,te,!1,null,"36c1554f",null)),Ie=Te.exports,Be={data(){return{bio:{},repos:[],notes:[],user:"",kount:0,load:!1}},components:{xProfile:Ie},computed:{hasBio(){return Object.keys(this.bio).length>0},keyFor(){return this.user+this.kount}},methods:{updateBio(t){this.kount+=1,this.bio=t},updateRepos(t){this.repos=t},updateNotes(t){this.notes=t},updateUser(t){this.user=t}},watch:{hasBio(t){const e=this;setTimeout(()=>{e.load=t},50)}},created(){i.$on("store.bio",this.updateBio),i.$on("store.repos",this.updateRepos),i.$on("store.notes",this.updateNotes),i.$on("store.username",this.updateUser),i.$emit("get:bio"),i.$emit("get:repos"),i.$emit("get:notes"),i.$emit("get:username")}},Ge=Be,Ke=Object(mt["a"])(Ge,Qt,Xt,!1,null,"03566ae5",null),De=Ke.exports,Je=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"progress my-bar",staticStyle:{}},[s("div",{staticClass:"progress-bar",class:t.klass,style:t.style,attrs:{role:"progressbar"}})])},Re=[],Ae={data(){return{bus:{},kounter:0,ktype:"info"}},computed:{klass(){return"progress-bar-"+this.ktype},style(){return{width:this.kounter+"%"}}},methods:{updateKtype(t){this.ktype=t}},watch:{"bus.kounter":{handler(t){this.kounter=t},deep:!0}},created(){const t=this;setTimeout(()=>{t.kounter=100},1e3),this.bus=i,i.$on("store.ktype",this.updateKtype),i.$emit("get:ktype")}},Le=Ae,Fe=(s("b1fe"),Object(mt["a"])(Le,Je,Re,!1,null,"51497383",null)),Me=Fe.exports,Ye=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-default my-nav"},[s("div",{staticClass:"col-sm-7 col-sm-offset-2 my-wrap"},[s("x-search-github",{attrs:{username:t.user}})],1)])},Ve=[],We=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-12"},[s("form",[s("div",{staticClass:"form-group col-sm-12"},[t._m(0),s("div",{staticClass:"input-group"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user,expression:"user",modifiers:{trim:!0}}],ref:"input",staticClass:"form-control lower",attrs:{type:"text",placeholder:"Username..."},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn btn-primary",attrs:{disabled:""===t.user},on:{click:function(e){return e.preventDefault(),t.doSubmit(e)}}},[t._v("Search Github")])])])])])])},qe=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"https://github.com/eswat2/git-notes",target:"_blank"}},[s("i",{staticClass:"fa fa-github-square my-repo"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-search"})])}],ze={props:["username"],data(){return{user:""}},methods:{doSubmit(){""!==this.user&&i.$emit("search-for",this.user)}},watch:{username(t){this.$refs.input.value=t,this.user=t}}},He=ze,Qe=(s("c5e3"),Object(mt["a"])(He,We,qe,!1,null,"c1ff3636",null)),Xe=Qe.exports,Ze={components:{xSearchGithub:Xe},data(){return{user:""}},methods:{updateUser(t){this.user=t}},created(){i.$on("store.username",this.updateUser),i.$emit("get:username")}},ts=Ze,es=(s("68fa"),Object(mt["a"])(ts,Ye,Ve,!1,null,"222f2db5",null)),ss=es.exports,rs={components:{xErrorContainer:yt,xKeysContainer:Ut,xNavigatorContainer:Ht,xProfileContainer:De,xProgressContainer:Me,xSearchContainer:ss},data(){return{actions:[],fireNotes:[],eventBus:null}},created(){this.actions=W,this.fireNotes=it,this.eventBus=i}},ns=rs,as=(s("c08a"),Object(mt["a"])(ns,n,a,!1,null,"6cef3421",null)),os=as.exports;const is=t=>{const e=t.state&&t.state.username?t.state.username:null;console.log("-- popstate:  "+e),i.$emit("set-pop-state",{username:e})};window.addEventListener("popstate",is),new r["a"]({el:"#app",render:t=>t(os)})},"596f":function(t,e,s){},"648b":function(t,e,s){"use strict";var r=s("6cd3"),n=s.n(r);n.a},"68fa":function(t,e,s){"use strict";var r=s("9122"),n=s.n(r);n.a},6942:function(t,e,s){"use strict";var r=s("cd65"),n=s.n(r);n.a},"6cd3":function(t,e,s){},9122:function(t,e,s){},"931e":function(t,e,s){},"9b09":function(t,e,s){"use strict";var r=s("a0f8"),n=s.n(r);n.a},a0f8:function(t,e,s){},a3d5:function(t,e,s){},b1fe:function(t,e,s){"use strict";var r=s("36c9"),n=s.n(r);n.a},c08a:function(t,e,s){"use strict";var r=s("fde2"),n=s.n(r);n.a},c5e3:function(t,e,s){"use strict";var r=s("e514"),n=s.n(r);n.a},cc38:function(t,e,s){"use strict";var r=s("a3d5"),n=s.n(r);n.a},cd65:function(t,e,s){},d2c1:function(t,e,s){"use strict";var r=s("07ae"),n=s.n(r);n.a},e0ae:function(t,e,s){"use strict";var r=s("931e"),n=s.n(r);n.a},e123:function(t,e,s){"use strict";var r=s("596f"),n=s.n(r);n.a},e514:function(t,e,s){},fa08:function(t,e,s){},fde2:function(t,e,s){}});
//# sourceMappingURL=app.f64114ae.js.map