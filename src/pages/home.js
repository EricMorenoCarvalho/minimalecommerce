import React from 'react';
import '../styles/home.css';
import main1 from '../images/main1.jpg';
import main2 from '../images/main2.jpg';
import main3 from '../images/main3.jpg';

const Home = () => {
  return (
    <div className='maincontent'>
      <div className='image-container1'>
        <img alt='photo1' src={main1} className='photo1' />
        <p className='image-text1'>Everything</p>
      </div>
      <div className='image-container2'>
        <img alt='photo2' src={main2} className='photo2' />
        <p className='image-text2'>Chairs</p>
      </div>
      <div className='image-container3'>
        <img alt='photo3' src={main3} className='photo3' />
        <p className='image-text3'>Tables</p>
      </div>
    </div>
  );
}

export default Home;
