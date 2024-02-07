import React from 'react';
import '../styles/home.css';
import '../styles/header.css';
import Header from '../components/header.jsx';
import Maingrid from '../components/maingrid.jsx';
import Ourproducts from '../components/ourproducts.jsx';

const Home = () => {

  return (
    <div className='maincontent'>
      <Header/>
      <Maingrid />
      <Ourproducts/>
    </div>
  );
}

export default Home;
