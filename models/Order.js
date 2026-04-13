/**
 * Order Model — In-memory order store
 * Manages order creation and retrieval.
 */

var uuid = require('uuid');

function OrderStore() {
  this.orders = [];
}

OrderStore.prototype.create = function(cartItems, customerInfo) {
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price * cartItems[i].quantity;
  }
  total = Math.round(total * 100) / 100;

  var items = [];
  for (var j = 0; j < cartItems.length; j++) {
    items.push({
      productId: cartItems[j].productId,
      name: cartItems[j].name,
      price: cartItems[j].price,
      unit: cartItems[j].unit,
      image: cartItems[j].image,
      quantity: cartItems[j].quantity
    });
  }

  var order = {
    id: uuid.v4().slice(0, 8).toUpperCase(),
    items: items,
    total: total,
    customerName: customerInfo.name,
    address: customerInfo.address,
    phone: customerInfo.phone,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  };

  this.orders.unshift(order);
  return order;
};

OrderStore.prototype.getAll = function() {
  return this.orders;
};

OrderStore.prototype.getById = function(id) {
  for (var i = 0; i < this.orders.length; i++) {
    if (this.orders[i].id === id) return this.orders[i];
  }
  return null;
};

module.exports = new OrderStore();
