(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"43g+":function(t,e,n){},h5Py:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a),l=n("Bl7J"),s=n("vrFN"),u=n("Wbzz"),c=(n("sC2a"),n("43g+"),function(t){var e=t.surah,n=t.callback,l=t.transcript,s=t.start,u=t.end,c=t.currAya,i=t.setCurrAya,o=t.setParentResults,m=Object(a.useState)(""),v=m[0],g=m[1],d=Object(a.useState)(!0),f=d[0],h=d[1],p=Object(a.useState)([]),E=p[0],b=p[1],y=Object(a.useRef)(null),A=function(t){return(l?t.toLowerCase():t.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g,"")).trim()},j=function(t){return t.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g,"").length!=t.length},w=function(t,e){void 0===t&&(t=null),void 0===e&&(e=null),null!==t&&t.preventDefault();var a=E;e?a.push(e):a.push(v),b(a),o(a),g(""),c+1===u?n(a):i((function(t){return t+1}))};return r.a.createElement(r.a.Fragment,null,s===c+1?0===c?r.a.createElement("h4",{style:{direction:"rtl",textAlign:"center",marginBottom:"0.5rem",marginTop:"0.5rem"}},"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"):r.a.createElement("h4",{style:{direction:"rtl",textAlign:"center",marginBottom:"0.5rem",marginTop:"0.5rem"}},'"',e.verses[c-1][l],'"'):null,r.a.createElement("form",{onSubmit:function(t){return w(t)},style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{className:"mainInput-group"},l?null:r.a.createElement("div",{onClick:function(t){return w(t)},style:{marginLeft:0}},r.a.createElement("img",{src:"https://fonts.gstatic.com/s/i/materialicons/arrow_back/v6/24px.svg",style:{margin:0}})),r.a.createElement("input",{className:["mainInput",f?"correct":"incorrect"].join(" "),ref:y,value:v,onChange:function(t){return function(t){var n=t.target.value;if(A(n)!==A(e.verses[c][l]).slice(0,n.length))h(!1),g(n);else{h(!0);var a=n,r=e.verses[c][l],s=A(n),u=A(e.verses[c][l]);!l&&!j(a)&&s.length===u.length||j(a)&&a.length===r.length?w(null,n.trim()):g(n)}}(t)},dir:l?"ltr":"rtl",onBlur:function(){y.current.focus()},autoFocus:!0,autoCorrect:"off"}),l?r.a.createElement("div",{onClick:function(t){return w(t)},style:{marginRight:0}},r.a.createElement("img",{src:"https://fonts.gstatic.com/s/i/materialicons/arrow_forward/v6/24px.svg",style:{margin:0}})):null)))});e.default=function(t){var e,n,i,o,m,v=t.location,g=null===(e=v.state)||void 0===e?void 0:e.surah,d=null===(n=v.state)||void 0===n?void 0:n.start,f=null===(i=v.state)||void 0===i?void 0:i.end,h=null===(o=v.state)||void 0===o?void 0:o.askTranskript,p=Object(a.useState)(d-1),E=p[0],b=p[1],y=Object(a.useState)([]),A=y[0],j=y[1];null===v.state&&Object(u.navigate)("/");var w=function(t){return t?1:0};return r.a.createElement(l.a,null,r.a.createElement(s.a,{title:null!==(m=null==g?void 0:g.nameTr)&&void 0!==m?m:"Surah"}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Surah:"),r.a.createElement("div",{className:"current-score"},r.a.createElement("h3",null,null==g?void 0:g.nameTr),r.a.createElement("h3",null,E+1,"/",f)),r.a.createElement(c,{surah:g,transcript:w(h),start:d,end:f,callback:function(t){Object(u.navigate)("/results/",{state:{surah:g,transcript:w(h),results:t,start:d,end:f}})},currAya:E,setCurrAya:b,setParentResults:j}),r.a.createElement("div",{className:"exit-button"},r.a.createElement("img",{src:"https://fonts.gstatic.com/s/i/materialicons/clear/v6/24px.svg?download=true",onClick:function(){Object(u.navigate)("/results/",{state:{surah:g,transcript:w(h),results:A,start:d,end:E-1}})},alt:"Exit"}))))}}}]);
//# sourceMappingURL=component---src-pages-test-js-7bfabd3dc3d15003090c.js.map