(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0vKm":function(t){t.exports={active:"active__188m8",disabled:"disabled__2CpK8"}},"1KBa":function(t,n,r){"use strict";(function(t){r.d(n,"a",(function(){return i}));var e=r("hosL"),o=r("0vKm"),s=r.n(o),i=function(n){function r(){return n.apply(this,arguments)||this}var e,o;return o=n,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,r.prototype.render=function(){return this.props.pathname===this.props.href?t("span",{class:s.a.active,title:this.props.title},this.props.children):this.props.disabled?t("span",{class:s.a.disabled,title:this.props.title},this.props.children):t("a",{href:this.props.href,class:s.a.inactive,title:this.props.title},this.props.children)},r}(e.Component)}).call(this,r("hosL").h)},"5yU1":function(t,n,r){"use strict";r.r(n),function(t){r.d(n,"default",(function(){return s}));var e=r("hosL"),o=r("XHaY"),s=function(n){function r(){return n.apply(this,arguments)||this}var e,s;return s=n,(e=r).prototype=Object.create(s.prototype),e.prototype.constructor=e,e.__proto__=s,r.prototype.render=function(){return t("div",null,t(o.a,null))},r}(e.Component)}.call(this,r("hosL").h)},GcIO:function(t){t.exports={list:"list__1on-q"}},XHaY:function(t,n,r){"use strict";(function(t){r.d(n,"a",(function(){return u}));var e=r("hosL"),o=r("HdoS"),s=r("PLZj"),i=r("1KBa"),a=r("GcIO"),p=r.n(a),u=function(n){function r(){var t;return(t=n.call(this)||this).getData=function(){fetch("https://rygapi.steffo.eu/api/user/list/v1").then((function(t){return t.json()})).then((function(n){var r=n.data;r.sort((function(t,n){return t.username<n.username?-1:t.username>n.username?1:0})),t.setState({data:r})}))},t.state={data:null},t}var e,a;a=n,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var u=r.prototype;return u.componentDidMount=function(){this.getData()},u.render=function(){var n=t(s.a,null);return null!==this.state.data&&(n=this.state.data.map((function(n){return t("li",null,t(i.a,{href:"/user/"+n.uid},n.username))}))),t(o.a,{left:"Membri"},t("ul",{class:p.a.list},n))},r}(e.Component)}).call(this,r("hosL").h)}}]);
//# sourceMappingURL=route-members.chunk.8d748.js.map