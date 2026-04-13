/**
 * Checkout Page — Order form, review sidebar, and order confirmation
 */
const CheckoutPage = {

  async render() {
    const app = document.getElementById('app');
    const cart = await API.getCart();

    if (cart.items.length === 0) {
      app.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🛒</div>
          <h2>Nothing to checkout</h2>
          <p>Add some items to your cart first!</p>
          <a href="#/" class="btn-shop">← Browse Products</a>
        </div>
      `;
      return;
    }

    const shipping = cart.total >= 35 ? 0 : 4.99;
    const grandTotal = (cart.total + shipping).toFixed(2);
    const reviewItems = cart.items.map(item => Components.reviewItem(item)).join('');

    app.innerHTML = `
      <div class="page-header">
        <div>
          <h1>Checkout</h1>
          <p class="subtitle">Complete your order</p>
        </div>
        <a href="#/cart" class="btn-back" id="btn-back-to-cart">← Back to Cart</a>
      </div>

      <div class="checkout-layout">
        <div class="checkout-form">
          <h3>Delivery Information</h3>
          <form id="checkout-form" onsubmit="CheckoutPage.placeOrder(event)">
            <div class="form-group">
              <label for="customer-name">Full Name</label>
              <input type="text" id="customer-name" placeholder="John Doe" required>
            </div>
            <div class="form-group">
              <label for="customer-phone">Phone Number</label>
              <input type="tel" id="customer-phone" placeholder="+1 (555) 123-4567" required>
            </div>
            <div class="form-group">
              <label for="customer-address">Delivery Address</label>
              <textarea id="customer-address" rows="3" placeholder="123 Main St, Apt 4B, New York, NY 10001" required></textarea>
            </div>
            <button type="submit" class="btn-place-order" id="btn-place-order">
              🛍️ Place Order — $${grandTotal}
            </button>
          </form>
        </div>

        <div class="order-review">
          <h3>Your Order</h3>
          ${reviewItems}
          <div class="summary-divider"></div>
          <div class="summary-row">
            <span class="label">Subtotal</span>
            <span>$${cart.total.toFixed(2)}</span>
          </div>
          <div class="summary-row">
            <span class="label">Shipping</span>
            <span>${shipping === 0 ? '<span style="color:var(--success)">Free</span>' : '$' + shipping.toFixed(2)}</span>
          </div>
          <div class="summary-divider"></div>
          <div class="summary-row summary-total">
            <span>Total</span>
            <span class="amount">$${grandTotal}</span>
          </div>
        </div>
      </div>
    `;
  },

  async placeOrder(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-place-order');
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const address = document.getElementById('customer-address').value.trim();

    if (!name || !phone || !address) {
      Components.showToast('Please fill in all fields', 'error');
      return;
    }

    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Placing Order...';

    try {
      const result = await API.placeOrder({ name, phone, address });
      App.updateCartBadge(0);
      this.showConfirmation(result.order);
    } catch (err) {
      Components.showToast(err.message, 'error');
      btn.disabled = false;
      btn.innerHTML = '🛍️ Place Order';
    }
  },

  showConfirmation(order) {
    const app = document.getElementById('app');
    const date = new Date(order.createdAt).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

    const itemsList = order.items.map(item =>
      `<div class="detail-row">
        <span>${item.image} ${item.name} ×${item.quantity}</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      </div>`
    ).join('');

    app.innerHTML = `
      <div class="order-success">
        <div class="success-icon">✅</div>
        <h2>Order Confirmed!</h2>
        <p class="order-id">Order ID: <span>#${order.id}</span></p>

        <div class="order-details-card">
          ${itemsList}
          <div class="summary-divider"></div>
          <div class="detail-row">
            <span class="label">Total</span>
            <span style="font-weight:700;color:var(--accent-primary-hover)">$${order.total.toFixed(2)}</span>
          </div>
          <div class="summary-divider"></div>
          <div class="detail-row">
            <span class="label">Deliver to</span>
            <span>${order.customerName}</span>
          </div>
          <div class="detail-row">
            <span class="label">Address</span>
            <span>${order.address}</span>
          </div>
          <div class="detail-row">
            <span class="label">Ordered</span>
            <span>${date}</span>
          </div>
        </div>

        <a href="#/" class="btn-shop">Continue Shopping →</a>
      </div>
    `;
  }
};

/**
 * Orders Page — View order history
 */
const OrdersPage = {

  async render() {
    const app = document.getElementById('app');
    const data = await API.getOrders();

    if (data.orders.length === 0) {
      app.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📋</div>
          <h2>No orders yet</h2>
          <p>Your order history will appear here after you place your first order.</p>
          <a href="#/" class="btn-shop">← Start Shopping</a>
        </div>
      `;
      return;
    }

    const orderCards = data.orders.map(o => Components.orderCard(o)).join('');

    app.innerHTML = `
      <div class="page-header">
        <div>
          <h1>Order History</h1>
          <p class="subtitle">${data.orders.length} order${data.orders.length !== 1 ? 's' : ''}</p>
        </div>
        <a href="#/" class="btn-back" id="btn-back-to-shop">← Back to Shop</a>
      </div>
      <div class="orders-list">
        ${orderCards}
      </div>
    `;
  }
};
