"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[568],{126:function(t,e,n){var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),o=n(689),i=n(87),p=n(390),f=n(184);e.Z=function(t){var e=t.query,n=(0,s.useState)(null),c=(0,a.Z)(n,2),l=c[0],v=c[1],d=(0,o.TH)();return(0,s.useEffect)((function(){function t(){return t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=6;break}return t.next=3,(0,p.Hg)();case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,(0,p.pm)(e);case 8:t.t0=t.sent;case 9:n=t.t0,v(n);case 11:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}!function(e){t.apply(this,arguments)}()}),[e]),(0,f.jsx)("ul",{children:null===l||void 0===l?void 0:l.map((function(t){var e=t.id,n=t.title;return(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(e),state:{from:d},children:n})},e)}))})}},568:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var r=n(126),a=n(184),c=function(){return(0,a.jsxs)("div",{style:{padding:16},children:[(0,a.jsx)("h2",{children:"Trending today"}),(0,a.jsx)(r.Z,{})]})},u=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c,{})})}},390:function(t,e,n){n.d(e,{Hg:function(){return p},IQ:function(){return s},Jh:function(){return f},pm:function(){return i},s_:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"1f61c5c3e341d3551f825cc6aeed2125",language:"en-US"};var s=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(e,"/credits"));case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(e));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={params:{query:e,page:1}},t.prev=1,t.next=4,u.Z.get("/search/movie",n);case 4:return r=t.sent,t.abrupt("return",r.data.results);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(e,"/reviews"));case 3:return n=t.sent,console.log(n),t.abrupt("return",n.data.results);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=568.9ed6b1a0.chunk.js.map