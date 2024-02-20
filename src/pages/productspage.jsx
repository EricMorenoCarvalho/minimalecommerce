import React from 'react';
import '../components/productspage.css';
import Header from '../components/header';
import ProductsMain from '../components/productsmain';
import OurProducts from '../components/ourproducts_productspage';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <div className='maincontent'>
        <ProductsMain />
        <OurProducts />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
