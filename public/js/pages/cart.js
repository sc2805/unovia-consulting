/**
 * Cart Page — View and manage cart items
 */
const CartPage = {

  async render() {
    const app = document.getElementById('app');
    const cart = await API.getCart();

    if (cart.items.length === 0) {
      app.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any groceries yet. Start shopping to fill it up!</p>
          <a href="#/" class="btn-shop">
            ← Browse Products
          </a>
        </div>
      `;
      return;
    }

    const cartItemsHtml = cart.items.map(item => Components.cartItem(item)).join('');
    const summaryHtml = Components.cartSummary(cart);

    app.innerHTML = `
      <div class="page-header">
        <div>
          <h1>Shopping Cart</h1>
          <p class="subtitle">${cart.itemCount} item${cart.itemCount !== 1 ? 's' : ''} in your cart</p>
        </div>
        <a href="#/" class="btn-back" id="btn-continue-shopping">← Continue Shopping</a>
      </div>

      <div class="cart-layout">
        <div class="cart-items-list" id="cart-items-list">
          ${cartItemsHtml}
        </div>
        ${summaryHtml}
      </div>
    `;
  },

  async updateQty(productId, quantity) {
    try {
      if (quantity <= 0) {
        await this.removeItem(productId);
        return;
      }
      const cart = await API.updateCartItem(productId, quantity);
      App.updateCartBadge(cart.itemCount);
      await this.render();
    } catch (err) {
      Components.showToast(err.message, 'error');
    }
  },

  async removeItem(productId) {
    try {
      const el = document.getElementById(`cart-item-${productId}`);
      if (el) {
        el.style.transition = '0.3s ease';
        el.style.opacity = '0';
        el.style.transform = 'translateX(40px)';
      }
      await new Promise(r => setTimeout(r, 250));

      const cart = await API.removeFromCart(productId);
      App.updateCartBadge(cart.itemCount);
      Components.showToast('Item removed');
      await this.render();
    } catch (err) {
      Components.showToast(err.message, 'error');
    }
  },

  async clearCart() {
    try {
      await API.clearCart();
      App.updateCartBadge(0);
      Components.showToast('Cart cleared');
      await this.render();
    } catch (err) {
      Components.showToast(err.message, 'error');
    }
  }
};
