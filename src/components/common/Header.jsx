import { Link, NavLink } from "react-router-dom"; 
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
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
              Home
            </NavLink>
            <NavLink to="/shop" className={({ isActive }) => isActive ? "active-link" : ""}>
              Shop
            </NavLink>
            <NavLink to="/cart" className={({ isActive }) => `cart-link ${isActive ? "active-link" : ""}`}>
              Cart <span>({totalUniqueItems})</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;