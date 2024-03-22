import React from 'react';
import ProductCarousel from '../components/productcarousel';
import GridBanner from '../components/gridbanner';
import OurProducts from '../components/ourproducts';
import ShopNow from '../components/shopnow';
import '../components/home.css';

const Home = () => {

  return (
    <div className='maincontent'>
      <GridBanner />
      <OurProducts />
      <ShopNow />
      <ProductCarousel />
    </div>
  );
}

export default Home;
