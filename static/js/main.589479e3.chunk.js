(this["webpackJsonpmy-countries-api"]=this["webpackJsonpmy-countries-api"]||[]).push([[0],{36:function(e,s,t){},54:function(e,s,t){},59:function(e,s,t){"use strict";t.r(s);var n=t(0),c=t.n(n),a=t(26),i=t.n(a),l=(t(54),t(22)),r=t(33),j=t.n(r),o=t(37),d=(t(36),t(2)),h=function(e){var s=e.search,t=e.ordering,c=e.setIsSelected,a=e.setModel,i=Object(n.useState)([]),r=Object(l.a)(i,2),h=r[0],b=r[1],p=function(){var e=Object(o.a)(j.a.mark((function e(s){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,b("A-Z"===s?n.sort():"Z-A"===s?n.reverse():n.sort((function(){return Math.random()-.5})));case 7:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p(t)}),[t]),Object(d.jsx)("div",{children:h.map((function(e,t){var n=e.flag,i=e.name,l=e.alpha2Code,r=e.alpha3Code,j=e.nativeName,o=e.altSpellings,h=e.callingCodes;return i.includes(s)?Object(d.jsxs)("div",{className:"country",onClick:function(){c(!0),a(e)},children:[Object(d.jsx)("img",{src:n,alt:"No response"}),Object(d.jsx)("span",{className:"name",children:i}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("span",{children:["Alpha-2 Code : ",l]}),Object(d.jsxs)("span",{children:["Alpha-3 Code : ",r]}),Object(d.jsxs)("span",{children:["Native Name : ",j]}),Object(d.jsxs)("span",{children:["Calling Codes : ",h]}),Object(d.jsxs)("span",{style:{height:"35px"},children:["Alt Spellings : ",o.join(", ")]})]})]},t):null}))})},b=t(62),p=t(48);var u=function(){var e=Object(n.useState)(""),s=Object(l.a)(e,2),t=s[0],c=s[1],a=Object(n.useState)("Sort"),i=Object(l.a)(a,2),r=i[0],j=i[1],o=Object(n.useState)(!1),u=Object(l.a)(o,2),O=u[0],x=u[1],m=Object(n.useState)(null),v=Object(l.a)(m,2),g=v[0],N=v[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"App-Interface",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("span",{children:"Countries Introductions"})}),O?Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("div",{className:"head",children:Object(d.jsx)("div",{className:"back-button",children:Object(d.jsx)(p.a,{onClick:function(){x(!1),j("Sort")},children:"Back"})})}),Object(d.jsxs)("div",{className:"model",children:[Object(d.jsx)("div",{className:"flag",children:Object(d.jsx)("img",{src:g.flag,alt:"No response"})}),Object(d.jsxs)("div",{className:"intro",children:[console.log(g),Object(d.jsxs)("span",{children:["Name : ",g.name]}),Object(d.jsxs)("span",{children:["Alpha-2 Code : ",g.alpha2Code]}),Object(d.jsxs)("span",{children:["Alpha-3 Code : ",g.alpha3Code]}),Object(d.jsxs)("span",{children:["Native Name : ",g.nativeName]}),Object(d.jsxs)("span",{children:["Calling Codes : ",g.callingCodes]}),Object(d.jsxs)("span",{children:["Alt Spellings : ",g.altSpellings.join(", ")]}),Object(d.jsxs)("span",{children:["Area : ",g.area]}),Object(d.jsxs)("span",{children:["Capital : ",g.capital]}),Object(d.jsxs)("span",{children:["Population : ",g.population]}),Object(d.jsxs)("span",{children:["Region : ",g.region]}),Object(d.jsxs)("span",{children:["Sub-Region : ",g.subregion]})]})]})]}):Object(d.jsxs)("div",{className:"main",children:[Object(d.jsxs)("div",{className:"head",children:[Object(d.jsx)("div",{className:"search-bar",children:Object(d.jsx)(b.a,{placeholder:"Type any country...",value:t,onChange:function(e){return c(e.target.value)}})}),Object(d.jsxs)("select",{name:"sort",id:"sort",className:"sort",onChange:function(e){j(e.target.value)},children:[Object(d.jsx)("option",{value:"Sort",children:"Sort"}),Object(d.jsx)("option",{value:"A-Z",children:"A-Z"}),Object(d.jsx)("option",{value:"Z-A",children:"Z-A"})]})]}),Object(d.jsx)("div",{className:"countries",children:Object(d.jsx)(h,{search:t,ordering:r,setIsSelected:x,setModel:N})})]})]})})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.589479e3.chunk.js.map