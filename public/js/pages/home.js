/**
 * Home Page — Product listing with search and category filtering
 */
const HomePage = {
  currentCategory: '',
  searchQuery: '',

  async render() {
    const app = document.getElementById('app');

    // Fetch categories and products
    const [catData, prodData] = await Promise.all([
      API.getCategories(),
      API.getProducts(this.currentCategory, this.searchQuery)
    ]);

    const categoryPills = ['All', ...catData.categories].map(cat => {
      const isActive = (cat === 'All' && !this.currentCategory) || cat === this.currentCategory;
      return `<button class="category-pill ${isActive ? 'active' : ''}"
                onclick="HomePage.filterCategory('${cat === 'All' ? '' : cat}')"
                id="cat-${cat.toLowerCase().replace(/\s/g, '-')}">${cat}</button>`;
    }).join('');

    const productCards = prodData.products.length > 0
      ? prodData.products.map(p => Components.productCard(p)).join('')
      : `<div class="no-results">
           <div class="no-results-icon">🔍</div>
           <h3>No products found</h3>
           <p>Try a different search or category</p>
         </div>`;

    app.innerHTML = `
      <section class="hero">
        <h1>Fresh Groceries,<br><span class="gradient-text">Delivered Fast</span></h1>
        <p>Premium quality produce, dairy, bakery & more — all at your fingertips.</p>
      </section>

      <div class="category-bar" id="category-bar">
        ${categoryPills}
      </div>

      <div class="product-grid" id="product-grid">
        ${productCards}
      </div>
    `;
  },

  async filterCategory(category) {
    this.currentCategory = category;
    await this.render();
  },

  async search(query) {
    this.searchQuery = query;
    this.currentCategory = '';
    await this.render();
  },

  async addToCart(productId) {
    const btn = document.getElementById(`btn-add-${productId}`);
    try {
      btn.innerHTML = '<span class="spinner"></span>';
      btn.classList.add('added');

      const cart = await API.addToCart(productId);
      App.updateCartBadge(cart.itemCount);
      Components.showToast('Added to cart!');

      setTimeout(() => {
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          Add to Cart`;
        btn.classList.remove('added');
      }, 1000);
    } catch (err) {
      Components.showToast(err.message, 'error');
      btn.classList.remove('added');
    }
  }
};
