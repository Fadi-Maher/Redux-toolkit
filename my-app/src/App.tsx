// src/App.tsx
import React from "react";
import { Routes, Route,  } from "react-router-dom";
import Cart from "./pages/cart";
import Categories from "./pages/categories";
 import ProductDetails from "./components/productDetails";
import Products from "./pages/products";
import Home from "./pages/home";
const App: React.FC = () => {



  return (
    <div className="min-h-screen ">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
