(this["webpackJsonpmeme-creator-app"]=this["webpackJsonpmeme-creator-app"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"styles_container__1Epup",skip:"styles_skip__13et6",generate:"styles_generate__3XDnR"}},11:function(e,t,n){e.exports={container:"styles_container__2Nzfj",copy:"styles_copy__3KP9d",home:"styles_home__1hhuK"}},20:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),o=n.n(r),l=(n(25),n(7)),u=n(10),i=n.n(u),s=n(1),m=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(0),u=Object(l.a)(o,2),m=u[0],p=u[1],f=Object(a.useState)([]),h=Object(l.a)(f,2),d=h[0],E=h[1],b=Object(s.f)();return Object(a.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){e.json().then((function(e){var t=e.data.memes;!function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*t),a=e[t];e[t]=e[n],e[n]=a}}(t),r(t)}))}))}),[]),Object(a.useEffect)((function(){n.length&&E(Array(n[m].box_count).fill(""))}),[m,n]),n.length?c.a.createElement("div",{className:i.a.container},c.a.createElement("button",{onClick:function(){var e=n[m],t=new FormData;t.append("username","dindasukanta"),t.append("password","dindasukanta"),t.append("template_id",e.id),d.forEach((function(e,n){return t.append("boxes[".concat(n,"][text]"),e)})),fetch("https://api.imgflip.com/caption_image",{method:"POST",body:t}).then((function(e){e.json().then((function(e){b.push("/generated?url=".concat(e.data.url))}))}))},className:i.a.generate},"Generate"),c.a.createElement("button",{onClick:function(){return p(m+1)},className:i.a.skip},"Skip"),d.map((function(e,t){return c.a.createElement("input",{onChange:function(e){return function(e,t){var n=e.target.value||"";E(d.map((function(e,a){return t===a?n:e})))}(e,t)},key:t})})),c.a.createElement("img",{alt:"meme",src:n[m].url})):c.a.createElement(c.a.Fragment,null)},p=n(11),f=n.n(p),h=n(19),d=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(h.useClipboard)(),u=Object(s.f)(),i=Object(s.g)(),m=new URLSearchParams(i.search).get("url");return c.a.createElement("div",{className:f.a.container},c.a.createElement("button",{onClick:function(){return u.push("/")},className:f.a.home},"Make More Memes"),m&&c.a.createElement("img",{alt:"meme",src:m}),c.a.createElement("button",{onClick:function(){o.copy(m),r(!0)},className:f.a.copy},n?"Link copied!":"Copy link"))},E=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Meme Creator"),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(m,null)),c.a.createElement(s.a,{path:"/generated"},c.a.createElement(d,null))))},b=n(8);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b.a,null,c.a.createElement(E,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9fe3535d.chunk.js.map