(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0Mu8":function(t,a,s){"use strict";(function(t){s.d(a,"a",(function(){return r}));var e=s("hosL"),n=s("RI49"),i=s.n(n),o=s("cZkd");class r extends e.Component{render(){let a=i.a.diarioentry;!0===this.props.data.spoiler&&(a+=" "+i.a.spoiler);let s,e="";null!==this.props.data.media_url&&(e=t("a",{href:this.props.data.media_url},t("img",{src:this.props.data.media_url,alt:"[immagine]"}))),s=null===this.props.data.quoted_account?null!==this.props.data.quoted?t("span",{className:i.a.author},this.props.data.quoted):"":t(o.a,{class:i.a.author,data:this.props.data.quoted_account});let n="";null!==this.props.data.context&&(n=t("span",null,", ",t("span",{class:i.a.context},this.props.data.context)));let r="";""===s&&""===n||(r=t("div",{className:i.a.info},"— ",s,n));let l="";return null!==this.props.data.creator&&(l=t("span",null,t(o.a,{class:i.a.creator,data:this.props.data.creator})," | ")),t("blockquote",{class:a},t("div",{class:i.a.contents},t("div",{className:i.a.topleft},t("div",{className:i.a.media},e),t("div",{className:i.a.text},this.props.data.text)),t("div",{className:i.a.bottomleft},r),t("div",{className:i.a.topright},t("div",{className:i.a.save},l,t("time",{className:i.a.timestamp},new Date(this.props.data.timestamp).toLocaleString()))),t("div",{className:i.a.bottomright},t("span",{className:i.a.diarioid},"#",this.props.data.diario_id))))}}}).call(this,s("hosL").h)},"4DnB":function(t,a,s){"use strict";s.r(a),function(t){s.d(a,"default",(function(){return o}));var e=s("hosL"),n=s("wVM7"),i=s("58Rz");class o extends e.Component{render(){return t("div",null,t(n.a,{pageId:"2ec59f78-5e63-49b4-9b70-ff1e13686749"}),t(i.a,null))}}}.call(this,s("hosL").h)},"58Rz":function(t,a,s){"use strict";(function(t){s.d(a,"a",(function(){return l}));var e=s("hosL"),n=s("0Mu8"),i=s("PLZj"),o=s("kJlA"),r=s("HdoS");class l extends e.Component{constructor(){super(),this.getData=t=>{fetch("https://rygapi.steffo.eu/api/diario/list/v1?page=-"+t).then(t=>t.json()).then(a=>{this.setState(s=>s.page!==t?{}:{page:t,data:a.data})})},this.previousPage=()=>{this.getData(this.state.page-1),this.setState({page:this.state.page-1,data:null})},this.nextPage=()=>{this.getData(this.state.page+1),this.setState({page:this.state.page+1,data:null})},this.state={page:1,data:null}}componentDidMount(){this.getData(this.state.page)}render(){let a;a=null==this.state.data?t(i.a,null):0===this.state.data.length?t("span",null,"Nessuna riga trovata."):this.state.data.map(a=>t(n.a,{data:a,key:a.diario_id}));let s=t("span",null,t("span",null,"Pagina ",this.state.page," ",t(o.a,{onPreviousClick:this.previousPage,onNextClick:this.nextPage})));return t(r.a,{left:"Diario Royal Games",right:s},a)}}}).call(this,s("hosL").h)},CSzM:function(t){t.exports={button:"button__3hNSc"}},RI49:function(t){t.exports={diarioentry:"diarioentry__3aXha",contents:"contents__zpZ_v",topleft:"topleft__kni0j",bottomleft:"bottomleft__AnasA",topright:"topright__3F6pU",bottomright:"bottomright__3OwnG",info:"info__2Zyzk",save:"save__4onQt",context:"context__2PEdt",media:"media__3d3IE",diarioid:"diarioid__3sBOl",spoiler:"spoiler__cKUHv"}},cZkd:function(t,a,s){"use strict";(function(t){s.d(a,"a",(function(){return o}));var e=s("hosL"),n=(s("whvH"),s("GAEk")),i=s("WOcO");class o extends e.Component{render(){let a="";return"Bot"===this.props.data.role&&(a=t("span",null,t(n.a,{icon:i.f})," ")),t("a",{href:"/user/"+this.props.data.uid},a,this.props.data.username)}}}).call(this,s("hosL").h)},kJlA:function(t,a,s){"use strict";(function(t){s.d(a,"a",(function(){return l}));var e=s("hosL"),n=s("CSzM"),i=s.n(n),o=s("GAEk"),r=s("WOcO");class l extends e.Component{render(){return t("span",null,t("button",{class:i.a.button,onClick:this.props.onPreviousClick},t(o.a,{icon:r.c})),t("button",{class:i.a.button,onClick:this.props.onNextClick},t(o.a,{icon:r.d})))}}}).call(this,s("hosL").h)},whvH:function(){}}]);
//# sourceMappingURL=route-diario.chunk.739ca.esm.js.map