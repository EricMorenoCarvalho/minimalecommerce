import React from 'react';
import Header from '../components/header';
import ProductDetail from '../components/productdetail';
import ProductCarousel from '../components/ProductCarousel';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';

const ProductDetailPage = () => {
  return (
    <div>
      <Header />
      <ProductDetail />
      <ProductCarousel />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
