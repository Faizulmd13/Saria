import { useCart } from "../../context/CartContext";
import "../../styles/Invoice.css"

const Invoice = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = () => {
    alert("The Products have been purchased.");
  };

  return (
    <div className="invoice-container">
      <h3>Order Summary</h3>
      <div className="invoice-row">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="invoice-row">
        <span>Tax (8%):</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <hr />
      <div className="invoice-row total">
        <strong>Total:</strong>
        <strong>${total.toFixed(2)}</strong>
      </div>
      <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Invoice;