"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[122],{98:function(n,t,e){e.d(t,{a:function(){return u}});var r,a=e(168),u=e(444).ZP.ul(r||(r=(0,a.Z)(["\n  padding: 12px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n"])))},122:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(861),a=e(439),u=e(757),c=e.n(u),s=e(98),o=e(791),i=e(689),p=e(390),f=e(184),v=function(){var n=(0,i.UO)().movieId,t=(0,o.useState)(null),e=(0,a.Z)(t,2),u=e[0],v=e[1];return(0,o.useEffect)((function(){function t(){return(t=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.Jh)(t);case 2:e=n.sent,v(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(n){t.apply(this,arguments)}(n)}),[n]),(0,f.jsxs)(s.a,{children:[null===u||void 0===u?void 0:u.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,f.jsxs)("li",{children:[(0,f.jsx)("h4",{children:e}),(0,f.jsx)("p",{children:r})]},t)})),u&&0===u.length&&(0,f.jsx)("div",{children:"We don't have any reviws for this movie"})]})}},390:function(n,t,e){e.d(t,{Hg:function(){return p},IQ:function(){return s},Jh:function(){return f},pm:function(){return i},s_:function(){return o}});var r=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"1f61c5c3e341d3551f825cc6aeed2125",language:"en-US"};var s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(t,"/credits"));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(t));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{query:t,page:1}},n.prev=1,n.next=4,c.Z.get("/search/movie",e);case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(t,"/reviews"));case 3:return e=n.sent,console.log(e),n.abrupt("return",e.data.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=122.be5820ee.chunk.js.map