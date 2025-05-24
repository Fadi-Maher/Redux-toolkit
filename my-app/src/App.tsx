// src/App.tsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/productList";
import Cart from "./components/cart";
import Categories from "./components/categories";
import { selectTotalQuantity } from "./slices/cartSlice";
import { useSelector } from "react-redux";
const App: React.FC = () => {
const totalQuantity = useSelector(selectTotalQuantity)



  return (
    <div className="min-h-screen">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Shop</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Products</Link>
          <Link to="/cart" className="hover:underline">Cart </Link>
          <Link to="/categories" className="hover:underline">Categories </Link>
           
        🛒 <span className="cart-count">{totalQuantity} Item is added</span>
      
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
