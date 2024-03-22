import React from 'react';

const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
    const handleIncreaseQuantity = () => {
        onIncrease();
    };

    const handleDecreaseQuantity = () => {
        onDecrease();
    };
    
    return (
        <div className='button-container'>
            <span className="text quantitybuttonwidth" onClick={handleDecreaseQuantity}>
                -
            </span>
            <span className='text quantitybuttonwidth'>
                {quantity}
            </span>
            <span className="text quantitybuttonwidth" onClick={handleIncreaseQuantity}>
                +
            </span>
        </div>
    );
};

export default QuantitySelector;
