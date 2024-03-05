import React from 'react'
import './productsmain.css'

const ProductsMain = () => {
  return (
    <div className='productsmain'>
      <p className='title-xl'>
        Explore the Essence of Elegance
      </p>
      <p className='title'>
        Uncover Our Exquisite Furniture Collection
      </p>
      <div className='button-container'>
        <a href="/products" className='button-categories text-small'>
          All
        </a>
        <a href="/products/sofas" className='button-categories text-small'>
          Sofas
        </a>
        <a href="/products/tables" className='button-categories text-small'>
          Tables
        </a>
        <a href="/products/chairs" className='button-categories text-small'>
          Chairs
        </a>
        <a href="/products/lamps" className='button-categories text-small'>
          Lamps
        </a>
      </div>
    </div>
  );
};

export default ProductsMain;
