import { useState, useEffect } from "react";

const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        // Switch URLs based on whether a category is provided
        const url = category 
          ? `https://dummyjson.com/products/category/${category}`
          : "https://dummyjson.com/products";

        const response = await fetch(url);
        
        if (!response.ok) throw new Error("Failed to fetch products");
        
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]); 

  return { products, loading, error };
};

export default useProducts;