(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0Mu8":function(t,a,s){"use strict";(function(t){s.d(a,"a",(function(){return r}));var e=s("hosL"),o=s("RI49"),i=s.n(o),n=s("cZkd");class r extends e.Component{render(){let a=i.a.diarioentry;!0===this.props.data.spoiler&&(a+=" "+i.a.spoiler);let s,e="";null!==this.props.data.media_url&&(e=t("a",{href:this.props.data.media_url},t("img",{src:this.props.data.media_url,alt:"[immagine]"}))),s=null===this.props.data.quoted_account?null!==this.props.data.quoted?t("span",{className:i.a.author},this.props.data.quoted):"":t(n.a,{class:i.a.author,data:this.props.data.quoted_account});let o="";null!==this.props.data.context&&(o=t("span",null,", ",t("span",{class:i.a.context},this.props.data.context)));let r="";""===s&&""===o||(r=t("div",{className:i.a.info},"— ",s,o));let l="";return null!==this.props.data.creator&&(l=t("span",null,t(n.a,{class:i.a.creator,data:this.props.data.creator})," | ")),t("blockquote",{class:a},t("div",{class:i.a.contents},t("div",{className:i.a.topleft},t("div",{className:i.a.media},e),t("div",{className:i.a.text},this.props.data.text)),t("div",{className:i.a.bottomleft},r),t("div",{className:i.a.topright},t("div",{className:i.a.save},l,t("time",{className:i.a.timestamp},new Date(this.props.data.timestamp).toLocaleString()))),t("div",{className:i.a.bottomright},t("span",{className:i.a.diarioid},"#",this.props.data.diario_id))))}}}).call(this,s("hosL").h)},"4DnB":function(t,a,s){"use strict";s.r(a),function(t){s.d(a,"default",(function(){return l}));var e=s("hosL"),o=(s("ZVFn"),s("7bXG"),s("0Mu8")),i=s("PLZj"),n=s("kJlA"),r=s("HdoS");class l extends e.Component{constructor(){super(),this.getData=t=>{fetch("https://rygapi.steffo.eu/api/diario/list/v1?page=-"+t).then(t=>t.json()).then(a=>{this.setState(s=>s.page!==t?{}:{page:t,data:a.data})})},this.previousPage=()=>{this.getData(this.state.page-1),this.setState({page:this.state.page-1,data:null})},this.nextPage=()=>{this.getData(this.state.page+1),this.setState({page:this.state.page+1,data:null})},this.state={page:1,data:null}}componentDidMount(){this.getData(this.state.page)}render(){let a;a=null==this.state.data?t(i.a,null):0===this.state.data.length?t("span",null,"Nessuna riga trovata."):this.state.data.map(a=>t(o.a,{data:a,key:a.diario_id}));let s=t("span",null,t("span",null,"Pagina ",this.state.page," ",t(n.a,{onPreviousClick:this.previousPage,onNextClick:this.nextPage})));return t("div",null,t(r.a,{left:"Diario Royal Games",right:s},a))}}}.call(this,s("hosL").h)},"7bXG":function(t,a,s){"use strict";(function(){s("hosL"),s("r2mi")}).call(this,s("hosL").h)},CSzM:function(t){t.exports={button:"button__3hNSc"}},HdoS:function(t,a,s){"use strict";(function(t){s.d(a,"a",(function(){return n}));var e=s("hosL"),o=s("Mw/3"),i=s.n(o);class n extends e.Component{render(){let a=null;return a=void 0!==this.props.left||void 0!==this.props.center||void 0!==this.props.right?[t("div",{class:i.a.top},void 0!==this.props.left?t("div",{className:i.a.left},this.props.left):null,void 0!==this.props.center?t("div",{class:i.a.center},this.props.center):null,void 0!==this.props.right?t("div",{class:i.a.right},this.props.right):null),t("div",{class:i.a.bottom},this.props.children)]:t("div",{class:i.a.single},this.props.children),t("div",{class:i.a.box},a)}}}).call(this,s("hosL").h)},"Mw/3":function(t){t.exports={box:"box__2NdQS",single:"single__1Lrvl",top:"top__mNBcY",bottom:"bottom__1LEQj",left:"left__3v69C",center:"center__2w2JR",right:"right__3mYf_"}},PLZj:function(t,a,s){"use strict";(function(t){s.d(a,"a",(function(){return n}));var e=s("hosL"),o=(s("vXjt"),s("GAEk")),i=s("WOcO");class n extends e.Component{render(){return t("span",null,t(o.a,{icon:i.f,pulse:!0})," ",this.props.text?this.props.text:"Loading...")}}}).call(this,s("hosL").h)},RI49:function(t){t.exports={diarioentry:"diarioentry__3aXha",contents:"contents__zpZ_v",topleft:"topleft__kni0j",bottomleft:"bottomleft__AnasA",topright:"topright__3F6pU",bottomright:"bottomright__3OwnG",info:"info__2Zyzk",save:"save__4onQt",context:"context__2PEdt",media:"media__3d3IE",diarioid:"diarioid__3sBOl",spoiler:"spoiler__cKUHv"}},ZVFn:function(){},cZkd:function(t,a,s){"use strict";(function(t){s.d(a,"a",(function(){return n}));var e=s("hosL"),o=(s("whvH"),s("GAEk")),i=s("WOcO");class n extends e.Component{render(){let a="";return"Bot"===this.props.data.role&&(a=t(o.a,{icon:i.e})),t("a",{href:"/user/"+this.props.data.uid},a,this.props.data.username)}}}).call(this,s("hosL").h)},kJlA:function(t,a,s){"use strict";(function(t){s.d(a,"a",(function(){return l}));var e=s("hosL"),o=s("CSzM"),i=s.n(o),n=s("GAEk"),r=s("WOcO");class l extends e.Component{render(){return t("span",null,t("button",{class:i.a.button,onClick:this.props.onPreviousClick},t(n.a,{icon:r.b})),t("button",{class:i.a.button,onClick:this.props.onNextClick},t(n.a,{icon:r.c})))}}}).call(this,s("hosL").h)},r2mi:function(t){t.exports={todo:"todo__2OgLQ"}},vXjt:function(){},whvH:function(){}}]);
//# sourceMappingURL=5.chunk.d0029.esm.js.map