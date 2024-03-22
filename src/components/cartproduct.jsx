import React, { useState } from 'react';
import QuantitySelector from './quantityselector';

const CartProduct = ({ product, onDelete, updateQuantity }) => {
    const [quantity, setQuantity] = useState(product.quantity);

    const handleIncreaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateQuantity(product.id, newQuantity);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateQuantity(product.id, newQuantity);
        }
    };

    const handleDeleteProduct = () => {
        onDelete(product.id);
    };

    return (
        <div className='productcart'>
            <img src={product.productImgs[0]} alt="productimage" className='cartproductimages' />
            <div className='cart-middle'>
                <span className='text-small cartproducttext product-name'>{product.productName}</span>
                <QuantitySelector
                    quantity={quantity}
                    onIncrease={handleIncreaseQuantity}
                    onDecrease={handleDecreaseQuantity}
                />
            </div>
            <span className='text-small cartproducttext'>${product.price}</span>
            <div onClick={handleDeleteProduct}>
                <svg
                    className='delete-product'
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
