import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Newsletter from '../components/newsletter';
import ChairsProducts from '../components/categories/chairsproducts';
import ChairsMain from '../components/categories/chairsmain';

const ChairPage = () => {
  return (
    <div>
      <Header />
      <div className='maincontent'>
        <ChairsMain />
        <ChairsProducts />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default ChairPage;
