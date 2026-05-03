import { Link, NavLink } from "react-router-dom";
import logo from "../assets/atro-labs-logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo-wrap">
          <img src={logo} alt="ATRO Labs Logo" className="nav-logo" />
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;