(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(5),r=n.n(a),o=n(2),u=n(4),s=n.n(u),i=n(6),j=n(0),b=Object(c.createContext)(),d=function(e){var t=Object(c.useState)({}),n=Object(o.a)(t,2),a=n[0],r=n[1],u=Object(c.useState)(1),s=Object(o.a)(u,2),i=s[0],d=s[1],O=Object(c.useState)(),l=Object(o.a)(O,2),h={quoteState:[a,r],rdIndexState:[i,d],bgState:[l[0],l[1]]};return Object(j.jsx)(b.Provider,{value:h,children:e.children})};function O(){var e=Object(c.useContext)(b),t=e.quoteState,n=e.rdIndexState,a=Object(o.a)(t,2),r=a[0],u=a[1],d=Object(o.a)(n,2),O=d[0],l=(d[1],function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://type.fit/api/quotes");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,u(n[O]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(c.useEffect)((function(){l()}),[O]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{id:"text",children:r.text}),Object(j.jsx)("p",{id:"author",children:r.author?r.author:"Unknow"})]})}function l(e){var t=e._btnValue,n=e._handleClick,c=e._id;return Object(j.jsxs)("button",{onMouseOver:function(e){},onMouseLeave:function(e){},onClick:n,className:"btn",id:c,children:[" ",t]})}function h(){var e=Object(c.useContext)(b),t=e.quoteState,n=e.rdIndexState,a=Object(o.a)(t,2),r=(a[0],a[1],Object(o.a)(n,2)),u=(r[0],r[1]);return Object(j.jsxs)("section",{id:"quote-box",children:[Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)(l,{_handleClick:function(){console.log("tweet")},_id:"tweet-quote",_btnValue:"tweet"}),Object(j.jsx)(l,{_handleClick:function(){u(Math.floor(200*Math.random()))},_id:"new-quote",_btnValue:"New Quote"})]})]})}r.a.render(Object(j.jsx)(d,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b376be2e.chunk.js.map