(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[9],{135:function(e,t,i){e.exports={reviewsContainer:"Rewievs_reviewsContainer__2NMWa",reviewsTitle:"Rewievs_reviewsTitle__2vtbA",reviewsItem:"Rewievs_reviewsItem__1wjTw"}},138:function(e,t,i){"use strict";i.r(t);var s=i(55),n=i(0),r=i(3),c=i(70),a=i.n(c),o=i(56),v=i(135),l=i.n(v),u=i(1);t.default=function(){var e=Object(r.i)().movieId,t=Object(n.useState)(null),i=Object(s.a)(t,2),c=i[0],v=i[1];return Object(n.useEffect)((function(){o.a.fetchReviews(e).then(v).catch((function(e){return console.log(e)}))}),[e]),Object(u.jsx)("div",{className:l.a.reviewsContainer,children:a()(c,"results.length")?Object(u.jsx)("ul",{children:c.results.map((function(e){return Object(u.jsxs)("li",{className:l.a.reviewsItem,children:[Object(u.jsxs)("h2",{className:l.a.reviewsTitle,children:["Autor: ",e.author]}),Object(u.jsx)("p",{children:e.content})]},e.id)}))}):"We don't have any reviews for this movie."})}}}]);
//# sourceMappingURL=9.df345396.chunk.js.map