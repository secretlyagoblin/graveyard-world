"use strict";(self.webpackChunkgraveyard_world=self.webpackChunkgraveyard_world||[]).push([[3751],{727:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(7294),r=a(6010),n=a(5155),c=a(1944),s=a(5281),m=a(3285),o=a(6090),u=a(197);function g(e){let{tags:t}=e;const a=(0,n.M)();return l.createElement(c.FG,{className:(0,r.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},l.createElement(c.d,{title:a}),l.createElement(u.Z,{tag:"doc_tags_list"}),l.createElement(m.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(o.Z,{tags:t}))))))}},3008:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),r=a(6010),n=a(9960);const c="tag_zVej",s="tagRegular_sFm0",m="tagWithCount_h2kH";function o(e){let{permalink:t,label:a,count:o}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(c,o?m:s)},a,o&&l.createElement("span",null,o))}},6090:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),r=a(5155),n=a(3008);const c="tag_Nnez";function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(n.Z,e))))),l.createElement("hr",null))}function m(e){let{tags:t}=e;const a=(0,r.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},5155:(e,t,a)=>{a.d(t,{M:()=>r,P:()=>n});var l=a(5999);const r=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function n(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);