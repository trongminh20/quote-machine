(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(6),r=n.n(a),o=n(3),s=n.n(o),u=n(4),i=n(2),b=n(0),j=Object(c.createContext)(),d=function(t){var e=Object(c.useState)({}),n=Object(i.a)(e,2),a=n[0],r=n[1],o=Object(c.useState)(1),s=Object(i.a)(o,2),u=s[0],d=s[1],l=Object(c.useState)("#FB6964"),h=Object(i.a)(l,2),O={quoteState:[a,r],rdIndexState:[u,d],bgState:[h[0],h[1]]};return Object(b.jsx)(j.Provider,{value:O,children:t.children})};n(13);function l(){var t=Object(c.useContext)(j),e=t.bgState,n=t.quoteState,a=t.rdIndexState,r=Object(i.a)(n,2),o=r[0],d=r[1],l=Object(i.a)(a,2),h=l[0],O=(l[1],Object(i.a)(e,2)),x=O[0],f=(O[1],function(){var t=Object(u.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://type.fit/api/quotes");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,d(n[h]);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}());return Object(c.useEffect)((function(){f()}),[h]),Object(b.jsxs)("div",{className:"quote",children:[Object(b.jsx)("p",{id:"text",style:{color:x},children:o.text}),Object(b.jsx)("p",{id:"author",style:{color:x},children:o.author?o.author:"Unknow"})]})}n(14);function h(t){var e=t._btnValue,n=t._handleClick,a=t._id,r=Object(c.useContext)(j).bgState,o=Object(i.a)(r,2),s=o[0];o[1];return Object(b.jsxs)("button",{onMouseOver:function(t){},onMouseLeave:function(t){},onClick:n,className:"btn",style:{background:s},id:a,children:[" ",e]})}n(15);function O(){var t=Object(c.useContext)(j),e=t.quoteState,n=t.rdIndexState,a=t.bgState,r=Object(i.a)(e,2),o=r[0],d=(r[1],Object(i.a)(n,2)),O=(d[0],d[1]),x=Object(i.a)(a,2),f=x[0],p=x[1],m=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],v=function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(Math.floor(200*Math.random()));case 2:return t.next=4,p(m[Math.floor(Math.random()*m.length)]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"main-app",style:{background:f},children:[Object(b.jsxs)("section",{id:"quote-box",children:[Object(b.jsx)(l,{}),Object(b.jsxs)("div",{className:"btns",children:[Object(b.jsx)("a",{href:"https://www.twitter.com/intent/tweet?"+encodeURIComponent('"'+o.text+'"'+o.athor),className:"btn",style:{background:f},id:"tweet-quote",target:"_blank",children:"Tweet"}),Object(b.jsx)(h,{_handleClick:function(){return v()},_id:"new-quote",_btnValue:"New Quote"})]})]}),Object(b.jsx)("section",{className:"footer",style:{textAlign:"center",color:"gray-scale(100%)"},children:"Coded by Minh Phan"})]})}r.a.render(Object(b.jsx)(d,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4cd58e72.chunk.js.map