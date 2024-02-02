import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <div className='headercontent'>
        <a href="#" class="logo">E-Commerce</a>
        <div className='header-links'>
          <a href='#' >categories</a>
          <a href='#'>products</a>
          <a href='#' className='cart-link'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-shopping-cart">
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
