import React from 'react';
import ProductDetail from '../components/productdetail';
import ProductCarousel from '../components/productcarousel';

const ProductDetailPage = ({ setCart, cart }) => {
  return (
    <div>
      <ProductDetail setCart={setCart} cart={cart} />
      <ProductCarousel />
    </div>
  );
};

export default ProductDetailPage