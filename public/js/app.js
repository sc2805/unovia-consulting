/**
 * App — Client-side router and application controller
 */
const App = {
  init() {
    // Hash-based routing
    window.addEventListener('hashchange', () => this.route());

    // Search input
    const searchInput = document.getElementById('search-input');
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        // Navigate to home if not already there
        if (window.location.hash !== '#/' && window.location.hash !== '') {
          window.location.hash = '#/';
        }
        HomePage.search(e.target.value);
      }, 350);
    });

    // Load initial cart badge
    this.loadCartBadge();

    // Route to current page
    this.route();
  },

  async route() {
    const hash = window.location.hash || '#/';
    const app = document.getElementById('app');

    // Loading state
    app.style.opacity = '0.6';

    try {
      switch (hash) {
        case '#/':
        case '':
          await HomePage.render();
          break;
        case '#/cart':
          await CartPage.render();
          break;
        case '#/checkout':
          await CheckoutPage.render();
          break;
        case '#/orders':
          await OrdersPage.render();
          break;
        default:
          await HomePage.render();
      }
    } catch (err) {
      app.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <h2>Something went wrong</h2>
          <p>${err.message}</p>
          <a href="#/" class="btn-shop">← Go Home</a>
        </div>
      `;
    }

    app.style.opacity = '1';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  async loadCartBadge() {
    try {
      const cart = await API.getCart();
      this.updateCartBadge(cart.itemCount);
    } catch (e) {
      // ignore
    }
  },

  updateCartBadge(count) {
    const badge = document.getElementById('cart-badge');
    badge.textContent = count;
    if (count > 0) {
      badge.classList.add('visible');
      badge.classList.remove('bounce');
      // Trigger reflow for animation restart
      void badge.offsetWidth;
      badge.classList.add('bounce');
    } else {
      badge.classList.remove('visible');
    }
  }
};

// Boot
document.addEventListener('DOMContentLoaded', () => App.init());
