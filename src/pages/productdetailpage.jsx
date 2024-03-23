import React from 'react';
import ProductDetail from '../components/productdetail';
import ProductCarousel from '../components/carousel';

const ProductDetailPage = ({ setCart, cart }) => {
  return (
    <div>
      <ProductDetail setCart={setCart} cart={cart} />
      <ProductCarousel />
    </div>
  );
};

export default ProductDetailPage