var d=Object.defineProperty;var c=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var t=(a,e,r)=>e in a?d(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,h=(a,e)=>{for(var r in e||(e={}))p.call(e,r)&&t(a,r,e[r]);if(c)for(var r of c(e))m.call(e,r)&&t(a,r,e[r]);return a};import{_ as u,m as _,r as i,o as g,c as S,f as v,w as f,b as x,t as k}from"./index.5f229ca0.js";const y={name:"index",components:{},data(){return{search:"",placeholderMap:{"ko-KR":"\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694","en-US":"Please enter search terms","zh-CN":"\u8BF7\u8F93\u5165\u641C\u7D22\u8BCD"},searchMap:{"ko-KR":"\uAC80\uC0C9","en-US":"Search","zh-CN":"\u641C\u7D22"}}},watch:{},computed:h({},_({language:a=>a.common.language})),methods:{onSearch(){this.$router.push({name:"category",query:{search:this.search}})}},mounted(){}},C={class:"search-container"};function V(a,e,r,w,o,n){const l=i("van-search");return g(),S("div",C,[v(l,{modelValue:o.search,"onUpdate:modelValue":e[1]||(e[1]=s=>o.search=s),"show-action":"",placeholder:o.placeholderMap[a.language],onSearch:n.onSearch},{action:f(()=>[x("div",{onClick:e[0]||(e[0]=(...s)=>n.onSearch&&n.onSearch(...s))},k(o.searchMap[a.language]),1)]),_:1},8,["modelValue","placeholder","onSearch"])])}var B=u(y,[["render",V],["__scopeId","data-v-65d8aa83"]]);export{B as default};
