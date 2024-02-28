import React from 'react';
import imgshopnow from '../images/shopnow.jpg';
import './shopnow.css';
import { Link } from 'react-router-dom';

const ShopNow = () => {
  return (
    <div className='shop-now'>
      <div className='shopnow-text'>
        <text className='title'>Elevate Your Space with Style & Comfort.</text>
        <p className='text-small'>
        Discover stylish furniture to elevate your home. Explore our collection for on-trend pieces that redefine your space.
        </p>
        <Link to={"/products"} className="button text-small">Shop Now</Link>
      </div>
      <img alt='shopnow' src={imgshopnow} className='image-shopnow' />
    </div>
  );
};

export default ShopNow;
