"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[54],{54:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var i=t(439),c=t(791),r=t(87),s=t(689),o=t(390),a=t(184),d=function(){var e,n,t=(0,s.UO)().movieId,d=(0,s.TH)(),l=(0,c.useState)(null),h=(0,i.Z)(l,2),u=h[0],j=h[1],v=(0,c.useRef)(null!==(e=null===(n=d.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,c.useEffect)((function(){(0,o.T)("/movie/".concat(t)).then(j)}),[t]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.rU,{to:v.current,children:"Go back"}),u&&(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(u.poster_path),alt:u.title}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"".concat(u.title," (").concat(u.release_date.slice(0,4),")")}),(0,a.jsxs)("p",{children:["User Score: ",(10*u.vote_average).toFixed(0)+"%"]}),(0,a.jsx)("h4",{children:"Overview"}),(0,a.jsx)("p",{children:u.overview}),(0,a.jsx)("h4",{children:"Genres"}),(0,a.jsx)("p",{children:u.genres.map((function(e){return e.name})).join(" ")})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{children:"Additional information"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"cast",children:"cast"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"reviews",children:"reviews"})})]})]}),(0,a.jsx)(c.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsx)(s.j3,{})})]})}},390:function(e,n,t){t.d(n,{T:function(){return c}});var i=t(243),c=function(e,n){return i.Z.get("".concat("https://api.themoviedb.org/3").concat(e,"?api_key=").concat("1f61c5c3e341d3551f825cc6aeed2125","&query=").concat(n)).then((function(e){return e.data}))}}}]);
//# sourceMappingURL=54.75924e54.chunk.js.map