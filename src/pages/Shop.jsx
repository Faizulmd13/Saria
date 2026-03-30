import { useState, useMemo } from "react"; // Added useMemo for performance
import { useSearchParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import Sidebar from "../components/shop/Sidebar";
import ProductCard from "../components/shop/ProductCard";
import "../styles/Shop.css";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("default"); 
  
  const currentCategory = searchParams.get("category");
  const { products, loading, error } = useProducts(currentCategory);

  const sortedProducts = useMemo(() => {
    if (!products) return [];
    
    const list = [...products];

    if (sortBy === "price-low") {
      return list.sort((a, b) => a.price - b.price);
    } 
    if (sortBy === "price-high") {
      return list.sort((a, b) => b.price - a.price);
    }
    if (sortBy === "rating") {
      return list.sort((a, b) => b.rating - a.rating);
    }
    
    return list; 
  }, [products, sortBy]);

  return (
    <div className="shop-layout">
      <Sidebar />

      <main className="shop-main-content">
        <header className="shop-header">
          <div className="shop-header-text">
            <h2 className="shop-title">
              {currentCategory ? currentCategory.replace(/-/g, ' ') : "All Collections"}
            </h2>
            <p className="product-count">
              Showing {sortedProducts.length} exquisite pieces
            </p>
          </div>

          <div className="shop-controls">
            <span className="sort-label">Sort by:</span>
            {/* Controlled Dropdown */}
            <select 
              className="sort-select" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </header>

        {loading ? (
          <div className="shop-loader">
            <div className="spinner"></div>
            <p>Refining the collection...</p>
          </div>
        ) : error ? (
          <div className="shop-error">
            <p>Error: {error}</p>
          </div>
        ) : (
          <div className="product-grid">
            {/* Map over the SORTED list instead of the raw products */}
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Shop;