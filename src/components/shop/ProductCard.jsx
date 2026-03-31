import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "../../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) ? 1 : value);
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>

      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <input type="number" value={quantity} onChange={handleInputChange} />
        <button onClick={handleIncrement}>+</button>
      </div>

      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
