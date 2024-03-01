import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Newsletter from '../components/newsletter';
import SofasProducts from '../components/categories/sofasproducts';
import SofasMain from '../components/categories/sofasmain';

const ChairPage = () => {
  return (
    <div>
      <Header />
      <div className='maincontent'>
        <SofasMain />
        <SofasProducts />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default ChairPage;
