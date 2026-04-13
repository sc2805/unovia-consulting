/**
 * Reusable UI Components — Product cards, cart items, toast notifications
 */
const Components = {

  // Product card
  productCard(product) {
    return `
      <div class="product-card" id="product-${product.id}">
        <div class="product-card-image">
          <span>${product.image}</span>
          <span class="product-card-category">${product.category}</span>
        </div>
        <div class="product-card-body">
          <h3 class="product-card-name">${product.name}</h3>
          <p class="product-card-desc">${product.description}</p>
          <div class="product-card-footer">
            <div>
              <span class="product-price">$${product.price.toFixed(2)}</span>
              <span class="product-unit">/ ${product.unit}</span>
            </div>
            <div class="product-rating">⭐ ${product.rating}</div>
          </div>
          <button class="btn-add-cart" id="btn-add-${product.id}" onclick="HomePage.addToCart('${product.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    `;
  },

  // Cart item row
  cartItem(item) {
    const itemTotal = (item.price * item.quantity).toFixed(2);
    return `
      <div class="cart-item" id="cart-item-${item.productId}">
        <div class="cart-item-image">${item.image}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)} / ${item.unit}</div>
        </div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="CartPage.updateQty('${item.productId}', ${item.quantity - 1})">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" onclick="CartPage.updateQty('${item.productId}', ${item.quantity + 1})">+</button>
          </div>
          <span class="cart-item-total">$${itemTotal}</span>
          <button class="btn-remove" onclick="CartPage.removeItem('${item.productId}')" title="Remove">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14"/>
            </svg>
          </button>
        </div>
      </div>
    `;
  },

  // Cart summary sidebar
  cartSummary(cart) {
    const shipping = cart.total > 0 ? (cart.total >= 35 ? 0 : 4.99) : 0;
    const grandTotal = (cart.total + shipping).toFixed(2);
    return `
      <div class="cart-summary">
        <h3>Order Summary</h3>
        <div class="summary-row">
          <span class="label">Subtotal (${cart.itemCount} items)</span>
          <span>$${cart.total.toFixed(2)}</span>
        </div>
        <div class="summary-row">
          <span class="label">Shipping</span>
          <span>${shipping === 0 ? '<span style="color:var(--success)">Free</span>' : '$' + shipping.toFixed(2)}</span>
        </div>
        ${shipping > 0 ? '<div style="font-size:0.75rem;color:var(--text-muted);padding:4px 0;">Free shipping on orders $35+</div>' : ''}
        <div class="summary-divider"></div>
        <div class="summary-row summary-total">
          <span>Total</span>
          <span class="amount">$${grandTotal}</span>
        </div>
        <a href="#/checkout" class="btn-checkout" id="btn-checkout">
          Proceed to Checkout →
        </a>
        <button class="btn-clear" onclick="CartPage.clearCart()" id="btn-clear-cart">
          Clear Cart
        </button>
      </div>
    `;
  },

  // Review item (checkout sidebar)
  reviewItem(item) {
    return `
      <div class="review-item">
        <span class="review-item-name">
          ${item.image} ${item.name}
          <span class="review-item-qty">×${item.quantity}</span>
        </span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `;
  },

  // Order card (orders page)
  orderCard(order) {
    const date = new Date(order.createdAt).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

    const itemChips = order.items.map(item =>
      `<span class="order-item-chip">${item.image} ${item.name} ×${item.quantity}</span>`
    ).join('');

    return `
      <div class="order-card">
        <div class="order-card-header">
          <span class="order-card-id">Order #${order.id}</span>
          <span class="order-status">${order.status}</span>
        </div>
        <div class="order-card-items">${itemChips}</div>
        <div class="order-card-footer">
          <span class="order-date">${date}</span>
          <span class="order-total">$${order.total.toFixed(2)}</span>
        </div>
      </div>
    `;
  },

  // Toast notification
  showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✅' : '❌'}</span>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
};
