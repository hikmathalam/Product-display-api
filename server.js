// server.js
// Simple Product Display API using Node.js and Express
// Listens on port 3000 and serves static files from /public

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// In-memory product data (at least 5 products, 3+ categories, mix of inStock)
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 45000, inStock: true },
  { id: 2, name: "Smartphone", category: "Electronics", price: 25000, inStock: true },
  { id: 3, name: "Headphones", category: "Accessories", price: 1500, inStock: false },
  { id: 4, name: "Office Chair", category: "Furniture", price: 8000, inStock: true },
  { id: 5, name: "Coffee Table", category: "Furniture", price: 6500, inStock: false }
];

// Serve static files from 'public' folder (index.html will be at http://localhost:3000/)
app.use(express.static(path.join(__dirname, 'public')));

// GET /products - returns all products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET /products/categories - returns unique categories
app.get('/products/categories', (req, res) => {
  // Map categories and create a Set for uniqueness
  const categories = [...new Set(products.map(p => p.category))];
  res.json({ categories });
});

// GET /products/instock - returns only products with inStock === true
app.get('/products/instock', (req, res) => {
  const inStockProducts = products.filter(p => p.inStock === true);
  res.json(inStockProducts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
