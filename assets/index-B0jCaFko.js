(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const t of a.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const u=[{id:1,position:{top:"70%",left:"42%"},modal:{title:"Nose Ring",description:"A delicate nose ring crafted with precision, perfect for adding a touch of elegance to your look.",image:"/src/assets/nose_ring.webp",price:15}},{id:2,position:{top:"55%",left:"26%"},modal:{title:"Hand Jewellery",description:"Elegant and stylish hand jewellery perfect for any occasion. Made with high-quality materials and intricate designs.",image:"/src/assets/hand_jewellery.webp",price:259}},{id:3,position:{top:"20%",left:"40%"},modal:{title:"Head Set",description:"A stylish head set that adds a touch of elegance to any hairstyle, perfect for special occasions.",image:"/src/assets/head_set.webp",price:75}},{id:4,position:{bottom:"5%",right:"32%"},modal:{title:"Diamond Necklace",description:"A stunning diamond necklace that sparkles with every movement, ideal for special occasions.",image:"/src/assets/diamond_necklace.webp",price:1200}}];function f(e){const o=`
    <figure class="relative z-[1]">
      <div class="w-fit">
        <img class="block w-full aspect-video" src="./assets/pexels-vikashkr50-27155540.jpg" alt="Product Image">
      </div>
      <ul class="poi js-poi">
        ${u.map(s=>m(s)).join("")}
      </ul>
    </figure>
    ${u.map(s=>p(s)).join("")}
  `;e.innerHTML=o;const r=e.querySelector(".js-poi");r&&h(r)}function m(e){return`
    <li style="${Object.entries(e.position).map(([r,s])=>`${r}: ${s}`).join("; ")}" class="poi__item js-poi__item">
      <button class="poi__btn" aria-label="Point ${e.id}. Click for more info." aria-controls="poi-modal-${e.id}">
        <svg class="icon h-[12px] w-[12px] inline-block text-inherit fill-current leading-none shrink-0" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M11,5H7V1A1,1,0,0,0,5,1V5H1A1,1,0,0,0,1,7H5v4a1,1,0,0,0,2,0V7h4a1,1,0,0,0,0-2Z"></path>
        </svg>
      </button>
    </li>
  `}function p(e){return`
    <div id="poi-modal-${e.id}" class="modal modal--animate-scale flex justify-center items-center bg-gray-900/90 p-5 lg:p-8 js-modal">
      <div class="modal__content w-full max-w-lg lg:max-w-xl max-h-full overflow-auto bg-white rounded shadow-lg" role="alertdialog">
        <div class="p-3 lg:p-5">
          <div class="grid grid-cols-12 gap-3 lg:gap-5">
            <figure class="col-span-12 lg:col-span-5">
              <img class="block w-full" src="${e.modal.image}" alt="${e.modal.title}">
            </figure>
            <div class="col-span-12 lg:col-span-7">
              <div>
                <h1 class="text-2xl mb-1">${e.modal.title}</h1>
                <p class="text-lg text-gray-500">${e.modal.description}</p>
              </div>
            </div>
          </div>
          <footer class="mt-3 lg:mt-5 flex justify-between items-center">
            <p>$${e.modal.price.toFixed(2)}</p>
            <a class="bg-accent-terra text-white shadow-md text-[1em] px-4 py-2 rounded-md relative inline-flex justify-center items-center whitespace-nowrap cursor-pointer no-underline leading-tight transition-all duration-200 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-terra" href="#0">Buy Now</a>
          </footer>
        </div>
      </div>
      <button class="modal__close-btn modal__close-btn--outer js-modal__close js-tab-focus">
        <svg class="icon inline-block text-inherit fill-current leading-none shrink-0 w-[24px] h-[24px]" viewBox="0 0 24 24">
          <title>Close modal window</title>
          <g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="3" x2="21" y2="21" />
            <line x1="21" y1="3" x2="3" y2="21" />
          </g>
        </svg>
      </button>
    </div>
  `}function h(e){e.addEventListener("click",function(o){const r=o.target.closest(".poi__btn");if(r){const s=r.closest(".js-poi__item");s&&s.classList.add("poi__item--visited")}})}function v(e){const o=`
    <nav class="bg-primary shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="#" class="text-xl font-bold text-accent-coral hover:text-accent-terra transition-colors">
              Jewellery Store
            </a>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-accent-coral hover:-translate-y-1 hover:font-semibold transition-all">Home</a>
            <a href="#" class="text-accent-coral hover:-translate-y-1 hover:font-semibold transition-all">Collections</a>
            <a href="#" class="text-accent-coral hover:-translate-y-1 hover:font-semibold transition-all">About</a>
            <a href="#" class="text-accent-coral hover:-translate-y-1 hover:font-semibold transition-all">Contact</a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button type="button" class="js-mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-accent-coral hover:text-accent-terra hover:bg-secondary/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-coral">
              <span class="sr-only">Open main menu</span>
              <!-- Menu Icon -->
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu Panel -->
        <div class="js-mobile-menu hidden md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-primary/95 backdrop-blur-sm">
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-accent-coral hover:text-accent-terra hover:bg-secondary/20 transition-colors">Home</a>
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-accent-coral hover:text-accent-terra hover:bg-secondary/20 transition-colors">Collections</a>
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-accent-coral hover:text-accent-terra hover:bg-secondary/20 transition-colors">About</a>
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-accent-coral hover:text-accent-terra hover:bg-secondary/20 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  `;e.innerHTML=o,b(e)}function b(e){const o=e.querySelector(".js-mobile-menu-button"),r=e.querySelector(".js-mobile-menu");o&&r&&o.addEventListener("click",()=>{const s=o.getAttribute("aria-expanded")==="true";r.classList.toggle("hidden"),o.setAttribute("aria-expanded",!s);const n=o.querySelector("svg");s?n.innerHTML=`
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        `:n.innerHTML=`
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        `})}function g(){const e=document.getElementsByClassName("js-modal"),o=document.querySelectorAll("[aria-controls]"),r=document.getElementsByClassName("js-modal__close");function s(t){const i=t.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),l=i[0],d=i[i.length-1];t.addEventListener("keydown",c=>{c.key==="Tab"&&(c.shiftKey?document.activeElement===l&&(d.focus(),c.preventDefault()):document.activeElement===d&&(l.focus(),c.preventDefault()))})}function n(t){const i=document.getElementById(t);if(i){i.classList.add("is-visible"),document.body.style.overflow="hidden",s(i);const l=i.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');l&&l.focus()}}function a(t){t.classList.remove("is-visible"),document.body.style.overflow=""}document.addEventListener("keydown",t=>{if(t.key==="Escape"){const i=document.querySelector(".js-modal.is-visible");i&&a(i)}}),o.forEach(t=>{t.addEventListener("click",()=>{const i=t.getAttribute("aria-controls");n(i)})}),Array.from(r).forEach(t=>{t.addEventListener("click",()=>{const i=t.closest(".js-modal");i&&a(i)})}),Array.from(e).forEach(t=>{t.addEventListener("click",i=>{i.target===t&&a(t)})})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#nav-container");e&&v(e);const o=document.querySelector("#app main section .container");o&&(f(o),g())});
