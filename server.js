var express = require('express');
var cors = require('cors');
var path = require('path');

var productRoutes = require('./routes/products');
var cartRoutes = require('./routes/cart');
var orderRoutes = require('./routes/orders');

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// SPA fallback — serve index.html for all non-API routes
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Only listen when running locally (not on Vercel)
if (!process.env.VERCEL) {
  app.listen(PORT, function() {
    console.log('');
    console.log('  FreshCart Grocery App is running!');
    console.log('  API:   http://localhost:' + PORT + '/api');
    console.log('  App:   http://localhost:' + PORT);
    console.log('');
  });
}

// Export for Vercel serverless
module.exports = app;
