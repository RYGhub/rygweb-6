(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{VvXA:function(n,t,r){"use strict";(function(n){var s=r("fXvh"),e=r.n(s),i=r("mMCH"),a=r("mbOI");t.a=function(t){return n(i.a,{class:Object(a.q)(e.a.masonry,t.class)},t.children)}}).call(this,r("hosL").h)},fXvh:function(n){n.exports={masonry:"masonry__2H31e"}},gXiL:function(n){n.exports={grid:"grid__1nSpJ"}},mMCH:function(n,t,r){"use strict";(function(n){var s=r("gXiL"),e=r.n(s),i=r("mbOI");t.a=function(t){return n("div",{class:Object(i.q)(e.a.grid,t.class)},t.children)}}).call(this,r("hosL").h)},tdcc:function(n,t,r){"use strict";(function(n){var s=r("mbOI"),e=r("BprO");t.a=function(t){return n(s.k,{title:n(e.a,{data:t.user},t.user.username)},t.user.bio?t.user.bio.contents:null)}}).call(this,r("hosL").h)},w8VE:function(n,t,r){"use strict";r.r(t),function(n){var s=r("mbOI"),e=r("w9DP"),i=r("GAEk"),a=r("WOcO"),c=r("E50Y"),u=r("tdcc"),o=r("VvXA");t.default=function(){const[t,r]=Object(s.v)("GET","/api/user/ryg/list/v1");if(void 0!==r)return n(e.a,{error:r});if(void 0===t)return n(s.k,null,n(i.a,{icon:a.z,pulse:!0})," Caricamento...");let l=t;l.sort((n,t)=>n.username>t.username?1:n.username===t.username?0:-1);let f=l.map(t=>n(u.a,{user:t}));return n("div",null,n(c.a,{pageId:85}),n(o.a,null,f))}}.call(this,r("hosL").h)}}]);