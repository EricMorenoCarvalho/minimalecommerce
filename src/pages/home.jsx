import React from 'react';
import '../components/home.css';
import Header from '../components/header.jsx';
import Maingrid from '../components/gridbanner.jsx';
import Ourproducts from '../components/ourproducts.jsx';
import ShopNow from '../components/shopnow.jsx';
import Newsletter from '../components/newsletter.jsx';
import Footer from '../components/footer.jsx';


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
