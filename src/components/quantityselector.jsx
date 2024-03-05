import React, { useState } from 'react';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='button-container'>
      <span className="title quantitybuttonwidth" onClick={handleDecreaseQuantity}>
        -
      </span>
      <span className='title quantitybuttonwidth'>
        {quantity}
      </span>
      <span className="title quantitybuttonwidth" onClick={handleIncreaseQuantity}>
        +
      </span>
    </div>
  );
};

export default QuantitySelector;
