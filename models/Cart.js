/**
 * Cart Model — In-memory cart store
 * Manages shopping cart items with add, update, remove, and clear operations.
 */

function Cart() {
  this.items = [];
}

Cart.prototype.getAll = function() {
  var count = 0;
  for (var i = 0; i < this.items.length; i++) {
    count += this.items[i].quantity;
  }
  return {
    items: this.items,
    itemCount: count,
    total: this._calculateTotal()
  };
};

Cart.prototype.addItem = function(product, quantity) {
  if (!quantity) quantity = 1;
  var existing = null;
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].productId === product.id) {
      existing = this.items[i];
      break;
    }
  }

  if (existing) {
    existing.quantity += quantity;
  } else {
    this.items.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image: product.image,
      quantity: quantity
    });
  }
  return this.getAll();
};

Cart.prototype.updateQuantity = function(productId, quantity) {
  var item = null;
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].productId === productId) {
      item = this.items[i];
      break;
    }
  }
  if (!item) return null;

  if (quantity <= 0) {
    return this.removeItem(productId);
  }

  item.quantity = quantity;
  return this.getAll();
};

Cart.prototype.removeItem = function(productId) {
  var index = -1;
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].productId === productId) {
      index = i;
      break;
    }
  }
  if (index === -1) return null;
  this.items.splice(index, 1);
  return this.getAll();
};

Cart.prototype.clear = function() {
  this.items = [];
  return this.getAll();
};

Cart.prototype._calculateTotal = function() {
  var sum = 0;
  for (var i = 0; i < this.items.length; i++) {
    sum += this.items[i].price * this.items[i].quantity;
  }
  return Math.round(sum * 100) / 100;
};

module.exports = new Cart();
