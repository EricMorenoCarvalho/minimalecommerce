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
