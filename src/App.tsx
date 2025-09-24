// src/App.tsx
import React from "react";
import { Routes, Route,  } from "react-router-dom";
import Cart from "./pages/cart";
import Categories from "./pages/categories";
 import ProductDetails from "./components/productDetails";
import Products from "./pages/products";
import Home from "./pages/home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      
    </div>
  );
};

export default App;
