"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[877],{98:function(t,n,e){e.d(n,{a:function(){return c}});var r,a=e(168),c=e(444).ZP.ul(r||(r=(0,a.Z)(["\n  padding: 12px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n"])))},877:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(439),a=e(791),c=e(689),i=e(390),u=e(98),o=e(184),s=function(){var t=(0,c.UO)().movieId,n=(0,a.useState)(null),e=(0,r.Z)(n,2),s=e[0],d=e[1];return(0,a.useEffect)((function(){(0,i.T)("/movie/".concat(t,"/credits")).then((function(t){var n=t.cast;return d(n)}))}),[t]),(0,o.jsx)(u.a,{children:null===s||void 0===s?void 0:s.map((function(t){var n=t.name,e=t.character,r=t.profile_path,a=t.id;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:r&&"https://image.tmdb.org/t/p/w500/".concat(r),alt:n,width:"80",height:"120"}),(0,o.jsx)("p",{children:n}),(0,o.jsxs)("p",{children:["Character: ",e]})]},a)}))})}},390:function(t,n,e){e.d(n,{T:function(){return o}});var r=e(861),a=e(757),c=e.n(a),i=e(243),u="https://api.themoviedb.org/3";i.Z.defaults.baseURL=u,i.Z.defaults.params={api_key:"1f61c5c3e341d3551f825cc6aeed2125",language:"en-US"};var o=function(){var t=(0,r.Z)(c().mark((function t(){var n,e,r,a,o=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:"",e=o.length>1&&void 0!==o[1]?o[1]:"",r={params:{query:e}},t.next=5,i.Z.get("".concat(u).concat(n),r);case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=877.14c42968.chunk.js.map