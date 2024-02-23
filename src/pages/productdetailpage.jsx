import React from 'react';
import Header from '../components/header';
import ProductDetail from '../components/productdetail';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';

const ProductDetailPage = () => {
  return (
    <div>
      <Header/>
      <ProductDetail/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default ProductDetailPage;
