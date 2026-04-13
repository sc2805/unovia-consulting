var express = require('express');
var router = express.Router();
var cart = require('../models/Cart');
var products = require('../data/products');

// GET /api/cart — Get current cart
router.get('/', function(req, res) {
  res.json(cart.getAll());
});

// POST /api/cart — Add item to cart
router.post('/', function(req, res) {
  var productId = req.body.productId;
  var quantity = req.body.quantity;

  if (!productId) {
    return res.status(400).json({ error: 'productId is required' });
  }

  var product = null;
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i];
      break;
    }
  }

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  if (!product.inStock) {
    return res.status(400).json({ error: 'Product is out of stock' });
  }

  var result = cart.addItem(product, quantity || 1);
  res.status(201).json(result);
});

// PUT /api/cart/:productId — Update item quantity
router.put('/:productId', function(req, res) {
  var quantity = req.body.quantity;

  if (quantity === undefined || quantity === null) {
    return res.status(400).json({ error: 'quantity is required' });
  }

  var result = cart.updateQuantity(req.params.productId, quantity);
  if (!result) {
    return res.status(404).json({ error: 'Item not found in cart' });
  }

  res.json(result);
});

// DELETE /api/cart/:productId — Remove item from cart
router.delete('/:productId', function(req, res) {
  var result = cart.removeItem(req.params.productId);
  if (!result) {
    return res.status(404).json({ error: 'Item not found in cart' });
  }
  res.json(result);
});

// DELETE /api/cart — Clear entire cart
router.delete('/', function(req, res) {
  res.json(cart.clear());
});

module.exports = router;
