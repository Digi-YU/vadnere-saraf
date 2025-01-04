import { poiItems } from '../data/poiData';

export function createPOIComponent(container) {
  const template = `
    <figure class="relative z-[1] w-full">
      <div class="w-full max-w-5xl mx-auto">
        <img class="block w-full h-auto aspect-[16/9] object-cover" src="./assets/pexels-vikashkr50-27155540.jpg" alt="Product Image">
      </div>
      <ul class="poi js-poi absolute inset-0">
        ${poiItems.map(item => createPOIButton(item)).join('')}
      </ul>
    </figure>
    ${poiItems.map(item => createModal(item)).join('')}
  `;

  container.innerHTML = template;
  
  // Initialize POI buttons after adding to DOM
  const poiElement = container.querySelector('.js-poi');
  if (poiElement) {
    initPoi(poiElement);
  }
}

function createPOIButton(item) {
  const positionStyle = Object.entries(item.position)
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ');

  return `
    <li style="${positionStyle}" class="poi__item js-poi__item">
      <button class="poi__btn" aria-label="Point ${item.id}. Click for more info." aria-controls="poi-modal-${item.id}">
        <svg class="icon h-[12px] w-[12px] inline-block text-inherit fill-current leading-none shrink-0" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M11,5H7V1A1,1,0,0,0,5,1V5H1A1,1,0,0,0,1,7H5v4a1,1,0,0,0,2,0V7h4a1,1,0,0,0,0-2Z"></path>
        </svg>
      </button>
    </li>
  `;
}

function createModal(item) {
  return `
    <div id="poi-modal-${item.id}" class="modal modal--animate-scale flex justify-center items-center bg-gray-900/90 p-5 lg:p-8 js-modal">
      <div class="modal__content w-full max-w-lg lg:max-w-xl max-h-full overflow-auto bg-white rounded shadow-lg" role="alertdialog">
        <div class="p-3 lg:p-5">
          <div class="grid grid-cols-12 gap-3 lg:gap-5">
            <figure class="col-span-12 lg:col-span-5">
              <img class="block w-full" src="${item.modal.image}" alt="${item.modal.title}">
            </figure>
            <div class="col-span-12 lg:col-span-7">
              <div>
                <h1 class="text-2xl mb-1">${item.modal.title}</h1>
                <p class="text-lg text-gray-500">${item.modal.description}</p>
              </div>
            </div>
          </div>
          <footer class="mt-3 lg:mt-5 flex justify-between items-center">
            <p>$${item.modal.price.toFixed(2)}</p>
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
  `;
}

export function initPoi(element) {
  // Update event delegation to handle button clicks
  element.addEventListener('click', function(event) {
    const button = event.target.closest('.poi__btn');
    if (button) {
      const poiItem = button.closest('.js-poi__item');
      if (poiItem) {
        poiItem.classList.add('poi__item--visited');
      }
    }
  });
} 