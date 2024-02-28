import React from 'react';
import '../components/productsmain.css';
import Header from '../components/header';
import ProductsMain from '../components/productsmain';
import OurProductsProductsPage from '../components/ourproducts_productspage';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <div className='maincontent'>
        <ProductsMain />
        <OurProductsProductsPage />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
