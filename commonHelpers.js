import{i as l}from"./assets/vendor-8e8cd629.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const u="43983774-8711aa48aacb0ae1050be5e44";function d(o){const n=`https://pixabay.com/api/?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits).catch(e=>{console.error("Error fetching images:",e.message),showError("Failed to fetch images. Please try again later.")})}function f(){const o=document.querySelector(".gallery");o.innerHTML=""}function m(o){const n=document.querySelector(".gallery");o.forEach(e=>{let s=`
        <div class="card">
        <img src="${e.webformatURL}" alt="${e.tags}">
        <div class="card-details">
            <p>Likes: ${e.likes}</p>
            <p>Views: ${e.views}</p>
            <p>Comments: ${e.comments}</p>
            <p>Downloads: ${e.downloads}</p>
        </div>
   </div>
`;n.innerHTML+=s})}const h=document.getElementById("searchForm"),i=document.getElementById("searchInput");document.querySelector(".btn");function c(o){l.error({title:"Error",message:o,position:"topRight"})}h.addEventListener("submit",o=>{o.preventDefault();const n=i.value.trim();if(!n){c("Please enter a search term");return}f(),d(n).then(e=>{e.length===0?c("Sorry, there are no images matching your search query. Please try again!"):(m(e),i.value="")}).catch(e=>{console.error("Error fetching images:",e.message),c("Failed to fetch images. Please try again later.")})});
//# sourceMappingURL=commonHelpers.js.map
