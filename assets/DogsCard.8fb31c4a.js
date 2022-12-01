import{g as h,r as v,o as p,_ as g,a as o,d as n,h as r,i as f,u,c as I,t as y,j as S,k as $,n as b,l as k,m as D}from"./index.65c735c2.js";const m=h("breedStore",()=>{const a=v(!1),e=()=>{a.value=!0},s=()=>{a.value=!1},t=v(""),_=c=>{t.value=c},i=v([]),l=()=>{localStorage.setItem("favourites",JSON.stringify(i.value))},d=()=>{const c=JSON.parse(localStorage.getItem("favourites")||"[]");i.value=c};return p(()=>{d()}),{isLoading:a,error:t,favouriteImages:i,startLoading:e,stopLoading:s,setError:_,saveFavouriteImages:l}});const F={},L={class:"loader"};function x(a,e){return o(),n("div",L)}const B=g(F,[["render",x],["__scopeId","data-v-170303ae"]]);const U={class:"dogs"},C={class:"container"},N={class:"dogs__title"},T={key:1,class:"dogs__error"},A={key:2,class:"dogs__grid"},G={__name:"TheGrid",setup(a){const e=m();return(s,t)=>(o(),n("section",U,[r("div",C,[r("h1",N,[f(s.$slots,"title",{},void 0,!0)]),u(e).isLoading?(o(),I(B,{key:0})):!u(e).isLoading&&u(e).error?(o(),n("p",T,y(u(e).error),1)):(o(),n("div",A,[f(s.$slots,"default",{},void 0,!0)]))])]))}},q=g(G,[["__scopeId","data-v-6568e5fa"]]);const V={class:"card"},w={class:"card__image ibg"},E=["src"],J={class:"card__action"},O={__name:"DogsCard",props:{imageUrl:{type:String,required:!0},favourite:{type:Boolean,default:!1}},setup(a){const e=a,s=v(!1),t=m(),_=()=>{if(t.favouriteImages.includes(e.imageUrl)){const l=t.favouriteImages.filter(d=>d!==e.imageUrl);t.favouriteImages=l,s.value=!1}else t.favouriteImages.push(e.imageUrl),s.value=!0;t.saveFavouriteImages()},i=()=>{t.favouriteImages.includes(e.imageUrl)?s.value=!0:s.value=!1};return p(()=>{i()}),(l,d)=>{const c=S("touch");return $((o(),n("article",V,[r("div",w,[r("img",{src:a.imageUrl,alt:""},null,8,E)]),r("div",J,[r("button",{type:"button",class:b(["icon",{"icon--favourite":s.value||e.favourite}]),onClick:_},[k(D)],2)])])),[[c,_,"swipe",{left:!0}]])}}},z=g(O,[["__scopeId","data-v-b0614b72"]]);export{z as D,q as T,m as u};
