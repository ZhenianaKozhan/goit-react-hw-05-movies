"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[877],{877:function(t,n,e){e.r(n),e.d(n,{default:function(){return u}});var c=e(439),r=e(791),i=e(689),a=e(390),o=e(184),u=function(){var t=(0,i.UO)().movieId,n=(0,r.useState)(null),e=(0,c.Z)(n,2),u=e[0],s=e[1];return(0,r.useEffect)((function(){(0,a.T)("/movie/".concat(t,"/credits")).then((function(t){var n=t.cast;return s(n)}))}),[t]),(0,o.jsx)("ul",{children:null===u||void 0===u?void 0:u.map((function(t){var n=t.name,e=t.character,c=t.profile_path,r=t.id;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:c&&"https://image.tmdb.org/t/p/w500/".concat(c),alt:n}),(0,o.jsx)("p",{children:n}),(0,o.jsx)("p",{children:e})]},r)}))})}},390:function(t,n,e){e.d(n,{T:function(){return r}});var c=e(243),r=function(t,n){return c.Z.get("".concat("https://api.themoviedb.org/3").concat(t,"?api_key=").concat("1f61c5c3e341d3551f825cc6aeed2125","&query=").concat(n)).then((function(t){return t.data}))}}}]);
//# sourceMappingURL=877.7a98bb70.chunk.js.map