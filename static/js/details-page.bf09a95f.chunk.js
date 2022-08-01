"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[187],{827:function(e,t,n){n.d(t,{Hx:function(){return m},SU:function(){return o},Xd:function(){return l},Y5:function(){return d},xc:function(){return f}});var r=n(861),s=n(757),a=n.n(s),i="https://api.themoviedb.org/3/",c="api_key=35c56f9aec5ac00d9749e544b1426fe8";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"/trending/all/day?").concat(c),e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("There is no movies"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="\n".concat(i,"search/movie?").concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),e.next=3,fetch(n);case 3:if(!(r=e.sent).ok){e.next=10;break}return e.next=7,r.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("There is no movies"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="\n".concat(i,"movie/").concat(t,"?").concat(c,"&language=en-US"),e.next=3,fetch(n);case 3:if(!(r=e.sent).ok){e.next=10;break}return e.next=7,r.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("There is no movie data"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="\n".concat(i,"movie/").concat(t,"/credits?").concat(c,"&language=en-US"),e.next=3,fetch(n);case 3:if(!(r=e.sent).ok){e.next=10;break}return e.next=7,r.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("There is no data"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="\n".concat(i,"movie/").concat(t,"/reviews?").concat(c,"&language=en-US"),e.next=3,fetch(n);case 3:if(!(r=e.sent).ok){e.next=10;break}return e.next=7,r.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("There is no reviews for this movie"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},286:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(885),s=n(791),a=n(501),i=n(871),c=n(924),o=n(827),u={poster:"MovieDetailsPage_poster__Q+ne9",movieContainer:"MovieDetailsPage_movieContainer__-tSGn",genresList:"MovieDetailsPage_genresList__tLUhk",genreItem:"MovieDetailsPage_genreItem__cUiy5",castLink:"MovieDetailsPage_castLink__D3FGE",goBackBtn:"MovieDetailsPage_goBackBtn__L3ooX"},l=n(184),h=(0,s.lazy)((function(){return n.e(277).then(n.bind(n,76))})),d=(0,s.lazy)((function(){return n.e(912).then(n.bind(n,186))})),v=function(){var e,t,n,v,f,p,m,x=(0,i.UO)().slug,g=(0,i.s0)(),j=(0,i.TH)(),k=(0,s.useState)([]),w=(0,r.Z)(k,2),_=w[0],b=w[1],y=(0,s.useState)("idle"),P=(0,r.Z)(y,2),U=P[0],C=P[1],S=(0,s.useState)(null),L=(0,r.Z)(S,2),Z=L[0],D=L[1],N=x.match(/[a-z0-9]+$/)[0],E=_.poster_path,B=_.title,M=_.release_date,T=_.vote_average,I=_.overview,F=_.genres;return(0,s.useEffect)((function(){""!==N&&(C("pending"),o.Y5(N).then(b,C("resolved")).catch((function(e){D(e),C("rejected")})))}),[N]),(0,l.jsxs)(l.Fragment,{children:["pending"===U&&(0,l.jsx)(c.p2,{type:"Circles",color:"#2196f3",height:70,width:70,timeout:2e3}),"resolved"===U&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",onClick:function(){var e,t,n;g(null!==(e=null===j||void 0===j||null===(t=j.state)||void 0===t||null===(n=t.from)||void 0===n?void 0:n.location)&&void 0!==e?e:"/")},className:u.goBackBtn,children:null!==(e=null===j||void 0===j||null===(t=j.state)||void 0===t||null===(n=t.from)||void 0===n?void 0:n.label)&&void 0!==e?e:"Go back"}),(0,l.jsxs)("div",{className:u.movieContainer,children:[(0,l.jsx)("img",{className:u.poster,src:E&&"https://image.tmdb.org/t/p/w342".concat(E),alt:"poster"}),(0,l.jsxs)("div",{className:u.infoContainer,children:[(0,l.jsxs)("h1",{children:[B," (",new Date(M).getFullYear(),")"]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("p",{children:["User score: ",T]}),(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:I}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("ul",{className:u.genresList,children:F&&F.map((function(e){var t=e.id,n=e.name;return(0,l.jsx)("li",{className:u.genreItem,children:n},t)}))})]})]}),(0,l.jsx)("hr",{}),(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsx)(a.rU,{to:"./cast",state:{from:null!==(v=null===j||void 0===j||null===(f=j.state)||void 0===f?void 0:f.from)&&void 0!==v?v:"/"},className:u.castLink,children:"Cast"}),(0,l.jsx)(a.rU,{to:"./reviews",state:{from:null!==(p=null===j||void 0===j||null===(m=j.state)||void 0===m?void 0:m.from)&&void 0!==p?p:"/"},className:u.reviewsLink,children:"Reviews"}),(0,l.jsx)("hr",{}),(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(c.p2,{type:"Circles",color:"#2196f3",height:70,width:70,timeout:2e3}),children:(0,l.jsxs)(i.Z5,{children:[(0,l.jsx)(i.AW,{path:"cast/*",element:(0,l.jsx)(h,{movieId:N})}),(0,l.jsx)(i.AW,{path:"reviews/*",element:(0,l.jsx)(d,{movieId:N})})]})})]}),"rejected"===U&&(0,l.jsx)("h1",{children:Z.message})]})}}}]);
//# sourceMappingURL=details-page.bf09a95f.chunk.js.map