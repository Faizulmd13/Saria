import useProducts from "../hooks/useProducts";
import ProductCard from "../components/shop/ProductCard";

const Shop = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div className="loading">Loading store...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="shop-page">
      <h2>Shop Our Collection</h2>
      <div className="product-grid">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
