import React from 'react';
import '../components/productsmain.css';
import ProductsMain from '../components/productsmain';
import OurProductsProductsPage from '../components/ourproducts_productspage';

const ProductsPage = () => {
  return (
      <div className='maincontent'>
        <ProductsMain />
        <OurProductsProductsPage />
      </div>
  );
};

export default ProductsPage;
