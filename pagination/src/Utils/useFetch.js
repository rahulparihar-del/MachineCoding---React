import { useState, useEffect } from "react";

function useFetch(url) {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const json = await data.json();
        setProductData(json.products); // Extract "products" array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return { productData };
}

export default useFetch;
