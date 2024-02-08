import React from 'react';
import imgshopnow from '../images/shopnow.jpg';

const ShopNow = () => {
  return (
    <div className='shop-now'>
      <div className='shopnow-text'>
        <text className='title'>Elevate Your Space with Style & Comfort.</text>
        <p className='text'>
        Discover the perfect furniture for your home in our collection. Stay on top of the latest trends and elevate your space with high-quality pieces.
        </p>
        <a href="#" className="button">Shop Now</a>
      </div>
      <img alt='shopnow' src={imgshopnow} className='image-shopnow' />
    </div>
  );
};

export default ShopNow;
