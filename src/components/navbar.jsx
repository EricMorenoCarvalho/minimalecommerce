import React from 'react'
import '../components/navbar.css'

const Header = ({ toggleCarrito }) => {
  return (
    <header>
      <div className="headercontent">
        <a href="/" className="title logo">
          E-Commerce
        </a>
        <div className="header-links">
          <a href="/" className="text underline">
            Home
          </a>
          <a href="/products" className="text underline">
            Products
          </a>
          <div className="cart-container">
            <div className="cart" onClick={toggleCarrito}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
