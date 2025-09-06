import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  selectProducts,
  selectProductStatus,
} from "../slices/productsSlices";
import type { AppDispatch } from "../store/store";
import ProductCard from "./productCard";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import TestApi from "./testApi";
// import { Link } from "react-router-dom";

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductStatus);
 const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
    const {t} = useTranslation();


  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to load products.</p>;



    const handleViewAllClick = () => {
    navigate('/products');  
  };

  return (
    <>
 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4  ">
        {products.slice(0, 3).map((product) => (
          <div
            key={product.id}
            onClick={() => (window.location.href = `/product/${product.id}`)}
          >
            <ProductCard product={product} />
          </div>
        ))}
        {/* <TestApi/> */}
      </div>
              <div onClick={handleViewAllClick} className=" mt-3 text-white grid grid-cols-1 font-bold text-2xl border m-auto p-3 rounded w-fit cursor-pointer   hover:bg-indigo-950  bg-[#1e2939]" >{t("view All Products")}</div>

    </>
  );
};

export default ProductList;
