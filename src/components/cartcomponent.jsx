import React from 'react'
import './cartcomponent.css'
import CartProduct from './cartproduct'

const CartComponent = ({ isOpen, onClose }) => {
  const cartClasses = `cartcomponentmain ${isOpen ? 'slide-in' : 'slide-out'}`

  return (
    <div className={cartClasses}>
      <div className="close-cart" onClick={onClose}>
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
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
      <CartProduct />
    </div>
  );
};

export default CartComponent
