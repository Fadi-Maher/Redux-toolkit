import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, selectProducts,selectProductStatus} from "../slices/productsSlices"
import type { AppDispatch } from "../store/store";
import ProductCard from "./productCard";

const ProductList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();  
    const products = useSelector(selectProducts);
  const status = useSelector(selectProductStatus);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to load products.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
