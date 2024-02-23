import React from 'react';
import imgshopnow from '../images/shopnow.jpg';

const ShopNow = () => {
  return (
    <div className='shop-now'>
      <div className='shopnow-text'>
        <text className='title'>Elevate Your Space with Style & Comfort.</text>
        <p className='text-xs'>
        Discover stylish furniture to elevate your home. Explore our collection for on-trend pieces that redefine your space.
        </p>
        <a href="" className="button text-small">Shop Now</a>
      </div>
      <img alt='shopnow' src={imgshopnow} className='image-shopnow' />
    </div>
  );
};

export default ShopNow;
