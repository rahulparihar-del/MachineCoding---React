import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import {
  getPaginatedData,
  getTotalPages,
} from "./Utils/CommonFunctions/HelperServices";
import { PAGE_SIZE } from "./constant";
import Pagination from "./components/Pagination";
import useFetch from "./Utils/useFetch";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const { productData } = useFetch("https://dummyjson.com/products?limit=200");

  const TotalPages = getTotalPages(productData, PAGE_SIZE);
  const paginatedData = getPaginatedData(productData, currentPage, PAGE_SIZE);

  return productData.length === 0 ? (
    <h1>No Data Found</h1>
  ) : (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Product List</h1>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        TotalPages={TotalPages}
      />

      {/* Product List */}
      <div className="grid grid-cols-3 gap-6">
        {paginatedData?.map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            title={product.title}
            description={product.description}
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
