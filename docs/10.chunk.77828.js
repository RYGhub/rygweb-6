(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+bjC":function(t){t.exports={navbar:"navbar__2Eoji",left:"left__3WebR",center:"center__RCn8L",right:"right__2UhXV"}},"7qlj":function(t){t.exports={ryglogo:"ryglogo__3G6V2",avatar:"avatar__1T_5Z"}},"J+qq":function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return n}));var o=e("hosL"),a=e("oD4A"),s=e.n(a),n=function(r){function e(){return r.apply(this,arguments)||this}var o,a;return a=r,(o=e).prototype=Object.create(a.prototype),o.prototype.constructor=o,o.__proto__=a,e.prototype.render=function(){return this.props.pathname===this.props.href?t("span",{class:s.a.active,title:this.props.title},this.props.children):this.props.disabled?t("span",{className:s.a.disabled,title:this.props.title},this.props.children):t("a",{href:this.props.href,class:s.a.inactive,title:this.props.title},this.props.children)},e}(o.Component)}).call(this,e("hosL").h)},hBto:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return n}));var o=e("hosL"),a=e("+bjC"),s=e.n(a),n=function(r){function e(){return r.apply(this,arguments)||this}var o,a;return a=r,(o=e).prototype=Object.create(a.prototype),o.prototype.constructor=o,o.__proto__=a,e.prototype.render=function(){return t("nav",{class:s.a.navbar},t("div",{class:s.a.left},this.props.left),t("div",{class:s.a.center},this.props.center),t("div",{class:s.a.right},this.props.right))},e}(o.Component)}).call(this,e("hosL").h)},oD4A:function(t){t.exports={active:"active__3Yq1b",disabled:"disabled__2Swuj"}},vKSI:function(t,r,e){"use strict";e.r(r),function(t){e.d(r,"default",(function(){return i}));var o=e("hosL"),a=e("7qlj"),s=e.n(a),n=e("hBto"),p=e("J+qq"),i=function(r){function e(){return r.apply(this,arguments)||this}var o,a;return a=r,(o=e).prototype=Object.create(a.prototype),o.prototype.constructor=o,o.__proto__=a,e.prototype.render=function(){var r,e=[t(p.a,{href:"/",pathname:this.props.pathname},t("img",{src:"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg",class:s.a.ryglogo,alt:"⭐ ️"})," Royal Games")," | ",t(p.a,{href:"/diario",pathname:this.props.pathname},"Diario")," | ",t(p.a,{href:"/wiki",pathname:this.props.pathname},"Wiki")," | ",t(p.a,{pathname:this.props.pathname,disabled:!0,title:"TODO"},"Membri")];return r=null===this.props.loggedIn?t(p.a,{href:"/login",pathname:this.props.pathname},"Login ",t("img",{src:"https://combo.steffo.eu/open/ryg/GenericUser.png",class:s.a.avatar,alt:" 👤"})):t(p.a,{href:"/profile",disabled:!0,title:"TODO",pathname:this.props.pathname},this.props.loggedIn.user.username," ",t("img",{src:"https://combo.steffo.eu/open/ryg/GenericUser.png",class:s.a.avatar,alt:" 👤"})),t(n.a,{left:e,right:[r]})},e}(o.Component)}.call(this,e("hosL").h)}}]);
//# sourceMappingURL=10.chunk.77828.js.map