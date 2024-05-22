import{S as u,i as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const h="43983774-8711aa48aacb0ae1050be5e44";function m(o){const s=`https://pixabay.com/api/?key=${h}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits).catch(e=>{console.error("Error fetching images:",e.message),showError("Failed to fetch images. Please try again later.")})}function f(){const o=document.querySelector(".gallery");o.innerHTML=""}function g(o){const s=document.querySelector(".gallery");o.forEach(e=>{const n=document.createElement("a");n.href=e.largeImageURL,n.setAttribute("data-lightbox","gallery");const t=`
      
        <div class="card">
        <img src="${e.webformatURL}" alt="${e.tags}">
        <div class="card-details">
            <p>Likes: ${e.likes}</p>
            <p>Views: ${e.views}</p>
            <p>Comments: ${e.comments}</p>
            <p>Downloads: ${e.downloads}</p>
        </div>
   </div>
`;n.innerHTML=t,s.appendChild(n)})}const p=document.getElementById("searchForm"),l=document.getElementById("searchInput"),i=document.querySelector(".loader");function c(o){d.error({title:"Error",message:o,position:"topRight"})}p.addEventListener("submit",o=>{o.preventDefault();const s=l.value.trim();if(!s){c("Please enter a search term");return}i.classList.add("show"),f(),m(s).then(e=>{setTimeout(()=>{i.classList.remove("show"),e.length===0?c("Sorry, there are no images matching your search query. Please try again!"):(g(e),l.value="",new u(".gallery a").refresh())},2e3)}).catch(e=>{i.classList.remove("show"),console.error("Error fetching images:",e.message),c("Failed to fetch images. Please try again later.")})});
//# sourceMappingURL=commonHelpers.js.map
