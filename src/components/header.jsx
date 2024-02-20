import React from 'react';
import { Link } from 'react-router-dom';
import '../components/header.css';

const Header = () => {
  return (
    <header>
      <div className='headercontent'>
        <Link to="/" className="title logo">E-Commerce</Link>
        <div className='header-links'>
          <Link to="/" className='text-small underline'>Home</Link>
          <Link to="/products" className='text-small underline'>Products</Link>
          <Link to="/" className='cart-link'>
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
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
