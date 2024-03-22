import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleCarrito, cartItemCount }) => {
  return (
    <header>
      <div className="headercontent">
        <Link to="/" className="title logo">
          E-Commerce
        </Link>
        <div className="header-links">
          <Link to="/" className="text underline">
            Home
          </Link>
          <Link to="/products" className="text underline">
            Products
          </Link>
          <div className="cart-container" onClick={toggleCarrito}>
            {cartItemCount > 0 && (
              <span className="cart-notification">
                {cartItemCount}
              </span>
            )}
            <div className="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg"
              >
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;