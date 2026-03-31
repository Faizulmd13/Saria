import { useCart } from "../../context/CartContext";
import "../../styles/CartItem.css";


const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-items">
      <img src={item.thumbnail} alt={item.title} width="50" />
      <div className="item-details">
        <h4>{item.title}</h4>
        <p>
          ${item.price} x {item.quantity}
        </p>
        <p>Subtotal: {(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="item-actions">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
          +
        </button>
        <button onClick={() => removeFromCart(item.id)} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
