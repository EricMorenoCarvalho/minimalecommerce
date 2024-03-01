import React from 'react';
import main1 from '../images/main1.jpg';
import main2 from '../images/main2.jpg';
import main3 from '../images/main3.jpg';
import main4 from '../images/main4.jpg';
import main5 from '../images/main5.jpeg';
import './gridbanner.css';

const GridBanner = () => {
  return (
    <div className='maingrid'>
      <div className='image-container1'>
        <a href={"/products"}>
          <img alt='photo1' src={main1} className='photo1' />
          <p className='image-text text underline'>
            Everything
          </p>
        </a>
      </div>
      <div className='image-container2'>
        <a href={"/products/chairs"}>
          <img alt='photo2' src={main2} className='photo2' />
          <p className='image-text text underline'>
            Chairs
          </p>
        </a>
      </div>
      <div className='image-container3'>
        <a href={"products/tables"}>
          <img alt='photo3' src={main3} className='photo3' />
          <p className='image-text text underline'>
            Tables
          </p>
        </a>
      </div>
      <div className='image-container4'>
        <a href={"products/sofas"}>
          <img alt='photo4' src={main4} className='photo4' />
          <p className='image-text text underline'>
            Sofas
          </p>
        </a>
      </div>
      <div className='image-container5'>
        <a href={"products/lamps"}>
          <img alt='photo5' src={main5} className='photo5' />
          <p className='image-text text underline'>
            Lamps
          </p>
        </a>
      </div>
    </div>
  );
}

export default GridBanner;