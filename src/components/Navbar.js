export function createNavbar(container) {
  const template = `
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
  `;

  container.innerHTML = template;
  initMobileMenu(container);
}

function initMobileMenu(container) {
  const menuButton = container.querySelector('.js-mobile-menu-button');
  const mobileMenu = container.querySelector('.js-mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      
      // Toggle menu
      mobileMenu.classList.toggle('hidden');
      
      // Update button state
      menuButton.setAttribute('aria-expanded', !isExpanded);
      
      // Change icon based on state
      const icon = menuButton.querySelector('svg');
      if (!isExpanded) {
        icon.innerHTML = `
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        `;
      } else {
        icon.innerHTML = `
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        `;
      }
    });
  }
} 