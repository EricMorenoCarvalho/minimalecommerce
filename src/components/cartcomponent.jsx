// CartComponent.js
import React from 'react';
import './cartcomponent.css';

const CartComponent = ({ onClose }) => {
  return (
    <div className='cartcomponentmain'>
      <img
        className="close-cart"
        onClick={onClose}
        alt="close"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAi0lEQVR4nO3VMQ6AIAyF4f9ib9E7qVdWD6ExOhgTpLTg5FuY6BdCC/AnkAHoIgU49x91khEwA70TELBY9nshWQEvpFKgFJIXsEKKAjlItYAUpNrAvf9XYLrW6DwlMwLbtTZJ1/okzztQ8GXIAtSGcl2kKGRtU3mh0jlQKeQdNFmh6CTLAn3yM/7hLTtHBjH8yNmtagAAAABJRU5ErkJggg=="
      />
    </div>
  );
};

export default CartComponent;
