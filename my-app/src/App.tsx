// src/App.tsx
import React from "react";
import { Routes, Route,  } from "react-router-dom";
import ProductList from "./components/productList";
import Cart from "./components/cart";
import Categories from "./components/categories";
import NavBar from "./components/navBar";
import ProductDetails from "./components/productDetails";
const App: React.FC = () => {



  return (
    <div className="min-h-screen">
         <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
