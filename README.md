# Product Table with Infinite Scroll

A React application that fetches product data from a public API and displays it in an editable table with infinite scrolling.

---

## 🚀 Live Demo

[View the deployed app here](https://product-table-intern-task.vercel.app/)

---

## Features

- Fetches product data from https://dummyjson.com/products API
- Displays product info: Title (editable), Brand, Category, Price, Rating
- Infinite scroll using Intersection Observer to load more products
- Editable product titles with instant UI updates
- Responsive and accessible table layout

---

## Technologies Used

- React (Functional Components + Hooks)
- Vite (or Create React App)
- JavaScript 
- CSS (basic styling)
- Fetch API for data retrieval

---

## Getting Started

### Prerequisites

- Node.js 
- npm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/product_table_intern_task.git
   cd product_table_intern_task

   Install dependencies
2. npm install


3. Run the development server

npm run dev

4. Open http://localhost:5173
 (Vite) in your browser to see the app.
 
5. Build for Production

To create an optimized production build:

npm run build

## Assignment Notes
- Product titles are editable on the frontend and updates are handled in local state.
- Infinite scrolling is implemented using the native Intersection Observer API.
- No third-party table or scroll libraries were used.

