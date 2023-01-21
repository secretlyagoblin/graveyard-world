"use strict";(self.webpackChunkgraveyard_world=self.webpackChunkgraveyard_world||[]).push([[1186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),y=r,m=d["".concat(i,".").concat(y)]||d[y]||c[y]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={slug:"lifestyle-expenses",title:"Lifestyle Expenses",authors:["welch"],tags:[]},s=void 0,l={unversionedId:"Rules/lifestyle-expenses",id:"Rules/lifestyle-expenses",title:"Lifestyle Expenses",description:"Lifestyle expenses are calculated as follows:",source:"@site/docs/Rules/lifestyle-expenses.md",sourceDirName:"Rules",slug:"/Rules/lifestyle-expenses",permalink:"/docs/Rules/lifestyle-expenses",draft:!1,editUrl:"https://github.com/secretlyagoblin/graveyard-world/tree/main/docs/Rules/lifestyle-expenses.md",tags:[],version:"current",frontMatter:{slug:"lifestyle-expenses",title:"Lifestyle Expenses",authors:["welch"],tags:[]},sidebar:"ruleBar",previous:{title:"Darkvision",permalink:"/docs/Rules/darkvision"}},i={},u=[{value:"Towns",id:"towns",level:2},{value:"Lodgings",id:"lodgings",level:3},{value:"Meals",id:"meals",level:3},{value:"Resupply",id:"resupply",level:3},{value:"Wilderness",id:"wilderness",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Lifestyle expenses are calculated as follows:"),(0,r.kt)("h2",{id:"towns"},"Towns"),(0,r.kt)("p",null,"Whenever the party stays a night in a town or settlement, one day of upkeep costs accumulate. When the party leaves town, they ",(0,r.kt)("strong",{parentName:"p"},"must")," spend gold equal to this upkeep cost. If the party goes into debt, that debt must be cleared before any additional costs can be accrued. Costs are divided into three categories; lodgings, meals and resupply."),(0,r.kt)("h3",{id:"lodgings"},"Lodgings"),(0,r.kt)("p",null,"When you arrive in a settlement and night is coming, state the kind of lodgings you intend to stay at. If you stay with a friendly character, they may offer to let you stay for free. If you have an animal companion cannot pay for themself and requires separate lodgings (for example, a pack or riding animal), you must pay twice as much."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wretched"),(0,r.kt)("br",{parentName:"p"}),"\n","In a barn, on the street, etc. No cost, as lodging is either free or you can either work to pay for your housing relatively easily.",(0,r.kt)("br",{parentName:"p"}),"\n","You have disadvantage on all rolls until you succesfully pass a check, due to your poor circumstances."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Poor"),(0,r.kt)("br",{parentName:"p"}),"\n","In the common room of an inn or similar. Cost of 1sp x day."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Comfortable"),(0,r.kt)("br",{parentName:"p"}),"\n","In a private room at a decent inn or similar. Cost of 1gp x day.",(0,r.kt)("br",{parentName:"p"}),"\n","During your stay, start each day with inspiration."),(0,r.kt)("h3",{id:"meals"},"Meals"),(0,r.kt)("p",null,"If you are staying in a town, meals for each day will cost you the same amount as your lifestyle, minimum 1sp.  If you have an animal companion cannot pay for themself, you must pay an additonal 1sp. If you do not want to pay for meals, you can attempt to beg or steal, or source your own food using your skills. This is a DC 10 skill check, the skill determined by the DM based on your plan, and failure may result in unintended consequences."),(0,r.kt)("p",null,"If a party member has a spell or character feature that allows them to feed themselves or others in a settlement without the need for a meal, you do not need to seek out a meal. If you do not eat a meal, you cannot regain hitpoints except by magical healing."),(0,r.kt)("h3",{id:"resupply"},"Resupply"),(0,r.kt)("p",null,"When you leave town with the intention to undertake a major adventure or delve, each party member must spend ",(0,r.kt)("strong",{parentName:"p"},"their level x 1gp")," to account for weapon and armour maintenance, ammunition and spell component resupply, and mundanities like candles, rope and waterskins."),(0,r.kt)("p",null,"If the party is intending to go on a journey into a specific, unusual environment, they can double this cost to ensure that they are prepared for dangers posed by that environment (e.g masks to ward off swamp gas, winter furs, climbing gear)."),(0,r.kt)("p",null,"This upkeep does not cover specialist items like medicine, poison, thieves tools, or spell components that have an associated cost."),(0,r.kt)("h2",{id:"wilderness"},"Wilderness"),(0,r.kt)("p",null,"In the wilderness, your only requirements are food and water \u2013 all other costs are covered by the gold spent during your resupply. You are a competent party of adventurers, and it is assumed that you have enough supplies to last you until you next reach a town or settlement."),(0,r.kt)("p",null,"However, each time that you return to town, you must replace the supplies that you have consumed. Each day that you take a long rest in the wilderness, add 1sp per chracter to your total supplies bill. The next time you arrive in a settlement, you must settle this bill before you leave."),(0,r.kt)("p",null,"If a party member has a spell or character feature that allows them to feed themselves or others in the wilderness without the need for rations, do not add to your total bill. If you do not eat a meal, you cannot regain hitpoints except by magical healing."))}c.isMDXComponent=!0}}]);