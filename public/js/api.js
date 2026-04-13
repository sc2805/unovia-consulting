/**
 * API Client — Fetch wrapper for all backend endpoints
 */
const API = {
  BASE: '/api',

  async request(method, path, body = null) {
    const options = {
      method,
      headers: { 'Content-Type': 'application/json' }
    };
    if (body) options.body = JSON.stringify(body);

    const res = await fetch(`${this.BASE}${path}`, options);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Something went wrong');
    }
    return data;
  },

  // Products
  getProducts(category = '', search = '') {
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (search) params.set('search', search);
    const qs = params.toString();
    return this.request('GET', `/products${qs ? '?' + qs : ''}`);
  },

  getCategories() {
    return this.request('GET', '/products/categories');
  },

  // Cart
  getCart() {
    return this.request('GET', '/cart');
  },

  addToCart(productId, quantity = 1) {
    return this.request('POST', '/cart', { productId, quantity });
  },

  updateCartItem(productId, quantity) {
    return this.request('PUT', `/cart/${productId}`, { quantity });
  },

  removeFromCart(productId) {
    return this.request('DELETE', `/cart/${productId}`);
  },

  clearCart() {
    return this.request('DELETE', '/cart');
  },

  // Orders
  placeOrder(customerInfo) {
    return this.request('POST', '/orders', customerInfo);
  },

  getOrders() {
    return this.request('GET', '/orders');
  }
};
