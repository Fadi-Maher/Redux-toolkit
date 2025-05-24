import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { selectCategories , fetchCategories } from "../slices/categoriesSlices";
import type { RootState , AppDispatch } from "../store/store";

const Categories : React.FC = () => {
    const dispatch = useDispatch<AppDispatch>() ; 
    const categories = useSelector(selectCategories) ;  
    const status = useSelector((state:RootState)=> state.categories.status) ;
    const error = useSelector((state:RootState)=> state.categories.error )

    useEffect(() => {
      if (status === "idle") {
        dispatch(fetchCategories());
      }
    
    
    }, [dispatch , status]);
    if(status === "loading") {
        return <div className="text-center py-10">Loading categories...</div>;
    }
    if (status === "failed") {
                return <div className="text-center py-10 text-red-500">Error: {error}</div>;
              }




  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <div
          key={category._id}
          className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center font-medium text-gray-800">
            {category.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
