import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import Invoice from "../components/cart/Invoice";
import { Link } from "react-router-dom"; 
import "../styles/Cart.css";

const Cart = () => {
  const { cart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>"Your cart is empty"</h2>
        <Link to="/shop">Buy something!</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <button onClick={clearCart} className="clear-cart-btn">
          Clear Cart
        </button>
      </div>
      
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Invoice />
    </div>
  )
};

export default Cart;