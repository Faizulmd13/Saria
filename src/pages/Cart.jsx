import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import Invoice from "../components/cart/Invoice";
import { Link } from "react-router";

const Cart = () => {
  const { cart } = useCart();

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
      <h2>Your Shopping Cart</h2>
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
