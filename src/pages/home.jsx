import React from 'react';
import Maingrid from '../components/gridbanner';
import Ourproducts from '../components/ourproducts';
import ShopNow from '../components/shopnow';
import ProductCarousel from '../components/productcarousel';

const Home = () => {

  return (
      <div className='maincontent'>
        <Maingrid />
        <Ourproducts />
        <ShopNow />
        <ProductCarousel />
      </div>
  );
}

export default Home;
