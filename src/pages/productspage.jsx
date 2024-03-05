import React from 'react';
import '../components/productsmain.css';
import Products from '../components/products';
import ProductsMain from '../components/productsmain';

const ProductsPage = () => {
  return (
      <div className='maincontent'>
        <div className='ourproducts'>
        <ProductsMain />
        <Products />
        </div>
      </div>
  );
};

export default ProductsPage;
