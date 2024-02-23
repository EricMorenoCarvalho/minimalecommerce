import React from 'react';
import main1 from '../images/main1.jpg';
import main2 from '../images/main2.jpg';
import main3 from '../images/main3.jpg';
import main4 from '../images/main4.jpg';
import main5 from '../images/main5.jpeg';

const GridBanner = () => {
  return (
    <div className='maingrid'>
      <div className='image-container1'>
        <a href="">
          <img alt='photo1' src={main1} className='photo1' />
        </a>
        <p className='image-text title'>Everything</p>
      </div>
      <div className='image-container2'>
        <a href="">
          <img alt='photo2' src={main2} className='photo2' />
        </a>
        <p className='image-text title'>Chairs</p>
      </div>
      <div className='image-container3'>
        <a href="">
          <img alt='photo3' src={main3} className='photo3' />
        </a>
        <p className='image-text title'>Tables</p>
      </div>
      <div className='image-container4'>
        <a href="">
          <img alt='photo4' src={main4} className='photo4' />
        </a>
        <p className='image-text title'>Sofas</p>
      </div>
      <div className='image-container5'>
        <a href="">
          <img alt='photo5' src={main5} className='photo5' />
        </a>
        <p className='image-text title'>Lamps</p>
      </div>
    </div>
  );
}

export default GridBanner;