var express = require('express');
var router = express.Router();
var products = require('../data/products');

// GET /api/products — List all products, with optional category filter and search
router.get('/', function(req, res) {
  var result = products.slice();

  // Filter by category
  if (req.query.category) {
    var cat = req.query.category.toLowerCase();
    result = result.filter(function(p) {
      return p.category.toLowerCase() === cat;
    });
  }

  // Search by name or description
  if (req.query.search) {
    var search = req.query.search.toLowerCase();
    result = result.filter(function(p) {
      return p.name.toLowerCase().indexOf(search) !== -1 ||
             p.description.toLowerCase().indexOf(search) !== -1;
    });
  }

  res.json({
    count: result.length,
    products: result
  });
});

// GET /api/products/categories — List all categories
router.get('/categories', function(req, res) {
  var seen = {};
  var categories = [];
  for (var i = 0; i < products.length; i++) {
    if (!seen[products[i].category]) {
      seen[products[i].category] = true;
      categories.push(products[i].category);
    }
  }
  res.json({ categories: categories });
});

// GET /api/products/:id — Get one product
router.get('/:id', function(req, res) {
  var product = null;
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === req.params.id) {
      product = products[i];
      break;
    }
  }
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

module.exports = router;
