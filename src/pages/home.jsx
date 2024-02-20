import React from 'react';
import '../components/home.css';
import Header from '../components/header';
import Maingrid from '../components/gridbanner';
import Ourproducts from '../components/ourproducts';
import ShopNow from '../components/shopnow';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';


const Home = () => {

  return (
    <div>
      <Header />
      <div className='maincontent'>
        <Maingrid/>
        <Ourproducts/>
        <ShopNow/>
        <Newsletter/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
