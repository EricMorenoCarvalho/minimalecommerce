import React from 'react';
import { Link } from 'react-router-dom';
import main1 from '../images/main1.jpg';
import main2 from '../images/main2.jpg';
import main3 from '../images/main3.jpg';
import main4 from '../images/main4.jpg';
import main5 from '../images/main5.jpeg';

const GridBanner = () => {
  return (
    <div className='maingrid'>
      <div className='image-container1'>
        <Link to="/products">
          <img alt='photo1' src={main1} className='photo1' />
          <p className='image-text text underline'>
            Everything
          </p>
        </Link>
      </div>
      <div className='image-container2'>
        <Link to="/products/chairs">
          <img alt='photo2' src={main2} className='photo2' />
          <p className='image-text text underline'>
            Chairs
          </p>
        </Link>
      </div>
      <div className='image-container3'>
        <Link to="/products/tables">
          <img alt='photo3' src={main3} className='photo3' />
          <p className='image-text text underline'>
            Tables
          </p>
        </Link>
      </div>
      <div className='image-container4'>
        <Link to="/products/sofas">
          <img alt='photo4' src={main4} className='photo4' />
          <p className='image-text text underline'>
            Sofas
          </p>
        </Link>
      </div>
      <div className='image-container5'>
        <Link to="/products/lamps">
          <img alt='photo5' src={main5} className='photo5' />
          <p className='image-text text underline'>
            Lamps
          </p>
        </Link>
      </div>
    </div>
  );
}

export default GridBanner;