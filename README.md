# Product Catalog API

## Project Description
A simple Product Display API built with Node.js and Express. It provides three GET endpoints to fetch all products, unique categories, and in-stock products. Includes a frontend page (`index.html`) that fetches and displays product data.

**Technologies used:** Node.js, Express, HTML, JavaScript (fetch API)

## Project Structure
```
product-catalog-api/
├─ public/
│  └─ index.html
├─ server.js
├─ package.json
├─ .gitignore
└─ README.md
```

## API Documentation

### GET /products
- **Method:** GET  
- **URL:** `/products`  
- **Description:** Returns all products.  
- **Sample Response:**
```json
[
  { "id":1, "name":"Laptop", "category":"Electronics", "price":45000, "inStock": true },
  { "id":2, "name":"Smartphone", "category":"Electronics", "price":25000, "inStock": true }
]
```

### GET /products/categories
- **Method:** GET  
- **URL:** `/products/categories`  
- **Description:** Returns unique product categories in an object with `categories` array.  
- **Sample Response:**
```json
{ "categories": ["Electronics", "Accessories", "Furniture"] }
```

### GET /products/instock
- **Method:** GET  
- **URL:** `/products/instock`  
- **Description:** Returns only products where `inStock` is `true`.  
- **Sample Response:**
```json
[
  { "id":1, "name":"Laptop", "category":"Electronics", "price":45000, "inStock": true }
]
```

## Installation & Setup Instructions

1. Clone the repo:
```bash
git clone https://github.com/<your-username>/product-catalog-api.git
cd product-catalog-api
```

2. Install dependencies:
```bash
npm install
```

3. Run the server:
```bash
npm start
```

4. Open the frontend at:
- `http://localhost:3000/`

API endpoints:
- `http://localhost:3000/products`
- `http://localhost:3000/products/categories`
- `http://localhost:3000/products/instock`

## GitHub Repository Link
Replace with your repository URL:  
`https://github.com/<your-username>/product-catalog-api`

## Author
Hikmath Alam
