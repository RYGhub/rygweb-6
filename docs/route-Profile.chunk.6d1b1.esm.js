(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"76xE":function(t,e,a){"use strict";(function(t){a("hosL");var i=a("KuN/"),o=a.n(i);a("nZIE"),e.a=function(e){return t("h0",null,t("img",{class:o.a.image,src:e.src,alt:e.alt}),t("span",{class:o.a.text}," ",e.children))}}).call(this,a("hosL").h)},"KuN/":function(t){t.exports={image:"image__26rOm",text:"text__3o6lt"}},U7tk:function(t,e,a){"use strict";a.r(e),function(t){var i=a("QRet"),o=a("mbOI"),n=a("esMY"),r=(a("76xE"),a("GAEk")),c=a("WOcO"),u=a("xRlW"),s=a("fI82");a("nZIE"),e.default=function(e){const a=Object(i.b)(o.g),[l,h]=Object(o.o)("GET","/api/user/ryg/v2",{uid:e.uid});let d=null;return a&&a.user.uid==e.uid&&(d=t(n.a,{logout:e.logout})),void 0!==h?t(u.a,{error:h}):void 0===l?t("h0",null,t(s.a,{src:"https://combo.steffo.eu/open/ryg/GenericUser.png",alt:""}),t(r.a,{icon:c.q,pulse:!0})):t("div",null,t("h0",null,t(s.a,{data:l})," ",l.username),d)}}.call(this,a("hosL").h)},YAEc:function(t,e,a){"use strict";(function(t){var i=a("DpfR"),o=a("GAEk"),n=a("KM2f"),r=a("WOcO");const c=Object.freeze({"github.com":n.b,"en.wikipedia.org":n.h,"it.wikipedia.org":n.h,"old.reddit.com":n.c,"new.reddit.com":n.c,"www.reddit.com":n.c,"reddit.com":n.c,"twitch.tv":n.f,"twitter.com":n.g,"www.youtube.com":n.j,"youtube.com":n.j,"youtu.be":n.j,"t.me":n.e,"steampowered.com":n.d,"steamcommunity.com":n.d,"discord.gg":n.a,"discordapp.com":n.a,"discord.com":n.a});e.a=function(e){const a=new URL(e.href);let n=null;return"http:"===a.protocol?n=r.k:"https:"===a.protocol&&(n=c[a.host],void 0===n&&(n=r.h)),t(i.a,{href:e.href},t(o.a,{icon:n})," ",e.children)}}).call(this,a("hosL").h)},YTxH:function(t){t.exports={avatar:"avatar__jX0g7"}},esMY:function(t,e,a){"use strict";(function(t){var i=a("mbOI"),o=a("Y3FI"),n=a("QRet"),r=a("GAEk"),c=a("WOcO"),u=a("wLhQ");e.a=function(e){const[a,s]=Object(n.k)(!1);let l={};return a&&(l={icon:t(r.a,{icon:c.q,pulse:!0})}),t(i.e,{title:"Logout"},t("blockquote",null,"Senta, ",t(u.a,{href:"https://www.youtube.com/watch?v=KoC-M5yBKQ4"},"dottoressa Frinzi"),"..."),t("p",null,t(i.c,{label:"Logout",onClick:function(){console.debug("Logging out..."),s(!0),e.logout(),Object(o.b)("/")},disabled:a,validity:l},"Esci da questo posto di ♥♥♥♥♥")))}}).call(this,a("hosL").h)},fI82:function(t,e,a){"use strict";(function(t){var i=a("mbOI"),o=a("YTxH"),n=a.n(o);e.a=function(e){let a;return a=e.src?e.src:e.data.avatar_url?e.data.avatar_url:e.data.steam.length>0&&e.data.steam[0].avatar?e.data.steam[0].avatar:"https://combo.steffo.eu/open/ryg/GenericUser.png",t("img",{alt:"",src:a,class:Object(i.j)(n.a.avatar,e.class)})}}).call(this,a("hosL").h)},nZIE:function(){},riCU:function(t,e,a){"use strict";(function(t){var i=a("mbOI"),o=a("DpfR"),n=a("GAEk"),r=a("WOcO"),c=a("fI82"),u=a("XKhT");e.a=function(e){if(!e.uid&&!e.alias)return t(u.a,{error:new Error("Missing uid or alias.")},l);let a,s,l=e.children;l||(e.uid?l=e.uid:e.alias&&(l=e.alias)),e.uid?(a="/api/user/get/ryg/v1",s={id:e.uid}):e.alias&&(a="/api/user/find/ryg/v1",s={alias:e.alias.toLowerCase()});let[h,d,f]=Object(i.o)("GET",a,s);if(void 0!==d)return t(u.a,{error:d},l);if(void 0===h){if(e.uid)return t(o.a,{href:"/u/"+e.uid},t(n.a,{icon:r.q,pulse:!0})," ",l);if(e.alias)return t(o.a,{href:"#"},t(n.a,{icon:r.q,pulse:!0})," ",l)}let m=h.username;return e.children instanceof Array&&e.children.length>0&&(m=e.children),t(o.a,{href:"/u/"+h.uid},t(c.a,{data:h})," ",m)}}).call(this,a("hosL").h)},wLhQ:function(t,e,a){"use strict";(function(t){var i=a("YAEc"),o=a("XKhT"),n=a("DpfR"),r=a("riCU");const c=/^\/u\/([0-9]+)$/,u=/^\/u\/([A-Za-z]+)$/;e.a=function(e){let a;try{a=new URL(e.href,window.location.href)}catch(a){return t(o.a,{error:a},e.children)}if(window.location.host!==a.host)return t(i.a,{href:a},e.children);let s=a.pathname.match(c);if(console.log(s),s)return t(r.a,{uid:s[1]},e.children);let l=a.pathname.match(u);return l?t(r.a,{alias:l[1]},e.children):t(n.a,{href:a},e.children)}}).call(this,a("hosL").h)}}]);
//# sourceMappingURL=route-Profile.chunk.6d1b1.esm.js.map