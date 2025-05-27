// src/components/Cart.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems ,removeFromCart } from "../slices/cartSlice";

const Cart: React.FC = () => {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return <div className="p-4 text-center">🛒 Your cart is empty.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🛒 Cart</h2>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between items-center p-4 border-b">
          <div>
            <h3 className="font-medium">{item.title}</h3>
            <img src={item.imageCover}  className="w-24"/>
            <p>Qty: {item.quantity}</p>
            <p>${item.price}</p>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-1 rounded"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
