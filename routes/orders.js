var express = require('express');
var router = express.Router();
var cart = require('../models/Cart');
var orderStore = require('../models/Order');

// POST /api/orders — Place an order
router.post('/', function(req, res) {
  var name = req.body.name;
  var address = req.body.address;
  var phone = req.body.phone;

  // Validate customer info
  if (!name || !address || !phone) {
    return res.status(400).json({
      error: 'Customer name, address, and phone are required'
    });
  }

  // Check cart is not empty
  var currentCart = cart.getAll();
  if (currentCart.items.length === 0) {
    return res.status(400).json({ error: 'Cart is empty' });
  }

  // Create order
  var order = orderStore.create(currentCart.items, { name: name, address: address, phone: phone });

  // Clear cart after order placed
  cart.clear();

  res.status(201).json({
    message: 'Order placed successfully!',
    order: order
  });
});

// GET /api/orders — Get order history
router.get('/', function(req, res) {
  res.json({ orders: orderStore.getAll() });
});

// GET /api/orders/:id — Get specific order
router.get('/:id', function(req, res) {
  var order = orderStore.getById(req.params.id);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json(order);
});

module.exports = router;
