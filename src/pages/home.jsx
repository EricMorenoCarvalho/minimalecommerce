import React from 'react';
import '../components/home.css';
import Header from '../components/header.jsx';
import Maingrid from '../components/gridbanner.jsx';
import Ourproducts from '../components/ourproducts.jsx';
import ShopNow from '../components/shopnow.jsx';


const Home = () => {

  return (
    <div>
      <Header />
      <div className='maincontent'>
        <Maingrid/>
        <Ourproducts/>
        <ShopNow/>
      </div>
    </div>
  );
}

export default Home;
