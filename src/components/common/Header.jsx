import { Link } from "react-router";
import { useCart } from "../../context/CartContext";
import "../../styles/Header.css";

const Header = () => {
  const { totalUniqueItems } = useCart();
  return (
    <header className="main-header">
      <div className="header-content">
        <nav>
          <div className="logo">
            <Link to="/">
              <h1>Saria</h1>
            </Link>
          </div>
          <div className="icons">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart" className="cart-link">
              Cart <span>({totalUniqueItems})</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
