import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Import CartContext

const Navbar = () => {
  const { cartItems } = useContext(CartContext); // Access cartItems from context

  // Calculate total number of items in the cart
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <nav className="navbar navbar-expand-lg px-3" style={{ backgroundColor: '#131921' }}>
      <Link className="navbar-brand fw-bold text-white" to="/">
        MiniCart
      </Link>

      {/* Toggler for smaller screens */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
        </ul>
      </div>

      <Link className="nav-link text-white d-flex align-items-center" to="/cart">
        🛒Cart <span className="badge bg-primary ms-2">{totalItems}</span>
      </Link>
    </nav>
  );
};

export default Navbar;