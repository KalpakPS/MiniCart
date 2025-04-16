import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [scrolled, setScrolled] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top px-3 ${
        scrolled ? 'navbar-scrolled' : ''
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(19, 25, 33, 0.9)' : '#131921',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Link className="navbar-brand fw-bold text-white" to="/">
        MiniCart
      </Link>

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
        <ul className="navbar-nav ms-auto"></ul>
      </div>

      <Link className="nav-link text-white d-flex align-items-center" to="/cart">
        🛒Cart <span className="badge bg-primary ms-2">{totalItems}</span>
      </Link>
    </nav>
  );
};

export default Navbar;
