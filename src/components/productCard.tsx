import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    alert(t("Item is added"));
  };

  return (
    <div className="border border-white rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-center ">
      <img
        src={product.imageCover}
        alt={product.title}
        className="w-fit h-48 mx-auto mb-4 rounded"
      />
      <h3 className="text-lg font-semibold mb-2 text-center text-white">
        {product.title}
      </h3>
      <p className="text-white font-bold mb-4 text-center">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-[#1e2939] text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {t("Add to Cart")}
      </button>
    </div>
  );
};

export default ProductCard;
