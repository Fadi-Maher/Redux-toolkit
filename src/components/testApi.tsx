// import  { useEffect, useState } from "react";
//  import { useSelector } from "react-redux";
// import type { RootState } from "../store/store";

// type Product = {
//   id: number;
//   title: { en: string; ar: string };
//   description: { en: string; ar: string };
//   image:string ;
//   name: string;
//   price: number;
// };

// function TestApi() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const lang = useSelector((state: RootState) => state.language.lang);


//   useEffect(() => {
//     fetch("http://localhost:4000/products")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch");
//         return res.json();
//       })
//       .then((data) => setProducts(data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-500">Error: {error}</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-2">Product List</h2>
//       <div className="space-y-2 flex gap-6 ">
//         {products.map((product) => (
//           <div key={product.id} className="border p-2 rounded shadow h-64 ">
//             <h3 className="font-semibold">{product.title[lang]}</h3>
//             <h3 className="font-semibold">{product.description[lang]}</h3>
//             <img src={product.image} alt="img" className="font-semibold" />
//             <p>${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TestApi;
