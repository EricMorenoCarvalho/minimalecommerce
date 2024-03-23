import React, { useRef, useEffect, useState } from 'react';
import './cartcomponent.css';
import CartProduct from './cartproduct';

const CartComponent = ({ isOpen, onClose, cart, onRemoveFromCart, setCart }) => {
  const cartRef = useRef(null);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const newSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setSubtotal(newSubtotal);
  }, [cart]);

  const cartClasses = `cartcomponentmain ${isOpen ? 'slide-in' : 'slide-out'}`;

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  return (
    <div ref={cartRef} className={cartClasses}>
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
      <span className='title carttitle'>Your Shopping Cart ({cart.length})</span>
      <div className='cart-products'>
        {cart.map((item) => (
          <CartProduct key={item.id} product={item} onDelete={onRemoveFromCart} updateQuantity={updateQuantity} />
        ))}
      </div>
      {isOpen && (
        <div className='checkout'>
          <span className='title mg-b1'>
            Subtotal: ${subtotal.toFixed(2)}
          </span>
          <button className='button title bg-white checkoutbutton'>
            Go to checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
