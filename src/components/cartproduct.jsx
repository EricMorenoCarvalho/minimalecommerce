import React, { useState } from 'react';
import QuantitySelector from './quantityselector';

const CartProduct = ({ product, onDelete }) => {
    const [quantity, setQuantity] = useState(product.quantity);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleDeleteProduct = () => {
        onDelete(product.id);
    };

    return (
        <div className='productcart'>
            <img src={product.productImgs[0]} alt="productimage" className='cartproductimages' />
            <span className='title cartproductname'>{product.productName}</span>
            <QuantitySelector
                quantity={quantity}
                onIncrease={handleIncreaseQuantity}
                onDecrease={handleDecreaseQuantity}
            />
            <div onClick={handleDeleteProduct}>
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
        </div>
    );
};

export default CartProduct;
