import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

interface Product {
  id: string;
  title: string;
  price: number;
  imageCover: string;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
  e.stopPropagation();
  dispatch(addToCart(product));
  alert("Item is added");
};

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-center ">
      <img
        src={product.imageCover}
        alt={product.title}
        className="w-fit h-48 mx-auto mb-4 rounded"
      />
      <h3 className="text-lg font-semibold mb-2 text-center">{product.title}</h3>
      <p className="text-blue-600 font-bold mb-4 text-center">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
