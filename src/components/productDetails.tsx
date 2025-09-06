import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../slices/cartSlice";
import { useDispatch  ,useSelector} from "react-redux";
import {
  fetchProductDetails,
  selectProductDetails,
  selectProductDetailsStatus,
  selectProductDetailsError,
} from "../slices/productDetailsSlice";
import type { AppDispatch  , RootState } from "../store/store";




const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

   const product = useSelector((state: RootState) => selectProductDetails(state));
  const status = useSelector((state: RootState) => selectProductDetailsStatus(state));
  const error = useSelector((state: RootState) => selectProductDetailsError(state));


useEffect(() => {
  if(id){
    dispatch(fetchProductDetails(id))
  }

 
}, [dispatch , id])


 if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;


 const handleAddToCart = (e: React.MouseEvent) => {
  e.stopPropagation();
  dispatch(addToCart(product));
  alert("Item is added");
};

  return (
    <div className="max-w-4xl mx-auto p-4 bg-blue-400">
      <div>
         <h1 className="text-3xl text-white font-bold mb-4">{product.title}</h1>
      <img
        src={product.imageCover}
        alt={product.title}
        className="w-full max-w-40 rounded-lg mb-4"
      />
      </div>
     
      <p className=" mb-2 text-white font-bold">{product.description}</p>
      <p className="text-xl font-semibold text-white mb-2">
        ${product.price}
      </p>
      <p className="text-sm text-white font-bold">
        Category: {product.category?.name}
      </p>
      <p className="text-sm text-white font-bold">
        Brand: {product.brand?.name}
      </p>

      <button className="text-white font-bold p-2 bg-blue-300 mt-4 rounded-md cursor-pointer" onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

export default ProductDetails

// http://localhost:4000/products