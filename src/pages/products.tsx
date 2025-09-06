import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  selectProducts,
  selectProductStatus,
} from "../slices/productsSlices";
import type { AppDispatch } from "../store/store";
import ProductCard from "../components/productCard";
// import TestApi from "./testApi";
// import { Link } from "react-router-dom";

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductStatus);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to load products.</p>;



  
  return (
    <>
 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4  ">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => (window.location.href = `/product/${product.id}`)}
          >
            <ProductCard product={product} />
          </div>
        ))}
        {/* <TestApi/> */}
      </div>
 
    </>
  );
};

export default Products;
