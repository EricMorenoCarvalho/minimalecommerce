import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Newsletter from '../components/newsletter';
import LampsProducts from '../components/categories/lampsproducts';
import LampsMain from '../components/categories/lampsmain';

const LampPage = () => {
    return (
        <div>
          <Header />
          <div className='maincontent'>
            <LampsMain />
            <LampsProducts />
            <Newsletter />
          </div>
          <Footer />
        </div>
      );
    };

export default LampPage;
