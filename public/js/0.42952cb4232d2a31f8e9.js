webpackJsonp([0],{"2NXm":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7109"),o={name:"PageIndex",data:function(){return{hints:[{id:1,hint:"Imagina você dando pra dois",tags:"suruba",like:1},{id:2,hint:"Dois paus na buceta",tags:"swing",like:0},{id:3,hint:"Você de 4 pra um estranho do pauzão",tags:"suruba",like:1}]}},methods:{showMessage:function(){var t=this,n=this.getRamdomHint();this.$q.notify({color:"purple-3",textColor:"purple-7",message:n.hint,icon:"favorite",position:"center",detail:"Clique na TV!",actions:[{icon:"tv",handler:function(){return t.openXvLink(n.tags)}}]})},getRamdomHint:function(){return this.hints[Math.floor(Math.random()*this.hints.length)]},openXvLink:function(t){Object(i.v)("https://www.xvideos.com/?k="+t+"&top")},redirect:function(){this.$router.push("oops")}},mounted:function(){var t=this;this.$q.localStorage.set("key","value"),this.$q.dialog({title:"Autenticação",message:"Para desfrutar você tem que informar a senha!",prompt:{model:"",type:"text"},cancel:!0,color:"secondary"}).then(function(n){"021114"!==n&&t.redirect()}).catch(function(){t.redirect()})}},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",{staticClass:"flex flex-center"},[e("q-btn",{attrs:{color:"primary",size:"xl",icon:"message",round:"",glossy:"","no-ripple":""},on:{click:function(n){t.showMessage()}}})],1)},s=[];a._withStripped=!0;var r=e("XyMi"),c=!1;var u=function(t){c||e("XaQj")},l=Object(r.a)(o,a,s,!1,u,null,null);l.options.__file="src\\pages\\index.vue";n.default=l.exports},R7TG:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},XaQj:function(t,n,e){var i=e("R7TG");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e("rjj0").default)("26b6cbfb",i,!1,{})}});