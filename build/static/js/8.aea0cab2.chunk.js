(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[8],{134:function(t,a,c){t.exports={castContainer:"Cast_castContainer__2zMoa",castImg:"Cast_castImg__4PLd_",actorName:"Cast_actorName__OZ7Fi",actorCharacter:"Cast_actorCharacter__2Hg4i",castItem:"Cast_castItem__Zqyw1"}},137:function(t,a,c){"use strict";c.r(a);var e=c(55),s=c(0),r=c(3),n=c(56),i=c(134),o=c.n(i),h=c(69),m=c(1);a.default=function(){var t=Object(r.i)().movieId,a=Object(s.useState)(null),c=Object(e.a)(a,2),i=c[0],l=c[1];return Object(s.useEffect)((function(){n.a.fetchCast(t).then(l).catch((function(t){return console.log(t)}))}),[t]),Object(m.jsx)("div",{className:o.a.castContainer,children:i&&Object(m.jsx)("ul",{children:i.cast.map((function(t){return Object(m.jsxs)("li",{className:o.a.castItem,children:[Object(m.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):h.a,alt:t.name,width:"120",height:"160",className:o.a.castImg}),Object(m.jsx)("p",{className:o.a.actorName,children:t.name}),Object(m.jsx)("p",{className:o.a.actorCharacter,children:t.character})]},t.id)}))})})}}}]);
//# sourceMappingURL=8.aea0cab2.chunk.js.map