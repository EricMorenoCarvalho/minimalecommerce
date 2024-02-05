import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import main1 from '../images/main1.jpg';
import main2 from '../images/main2.jpg';
import main3 from '../images/main3.jpg';
import main4 from '../images/main4.jpg';
import main5 from '../images/main5.jpg';
import { PRODUCTS } from '../products';  // Asegúrate de ajustar la ruta correctamente

const Home = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  const getRandomProducts = () => {
    const shuffledProducts = PRODUCTS.sort(() => 0.5 - Math.random());
    const selectedProducts = shuffledProducts.slice(0, 5);
    setRandomProducts(selectedProducts);
  };

  useEffect(() => {
    getRandomProducts();
  }, []);

  return (
    <div className='maincontent'>
      <div className='maingrid'>
        <div className='image-container1'>
          <img alt='photo1' src={main1} className='photo1' />
          <p className='image-text text'>Everything</p>
        </div>
        <div className='image-container2'>
          <img alt='photo2' src={main2} className='photo2' />
          <p className='image-text text'>Chairs</p>
        </div>
        <div className='image-container3'>
          <img alt='photo3' src={main3} className='photo3' />
          <p className='image-text text'>Tables</p>
        </div>
        <div className='image-container4'>
          <img alt='photo4' src={main4} className='photo4' />
          <p className='image-text text'>Sofas</p>
        </div>
        <div className='image-container5'>
          <img alt='photo5' src={main5} className='photo5' />
          <p className='image-text text'>Lamps</p>
        </div>
      </div>
      <div className='ourproducts'>
        <p className='title'>Our products</p>
        <div className='mainflex'>
          {randomProducts.map(product => (
            <div key={product.id} className='mainproducts'>
              <img alt={product.productName} src={product.productImgs[0]} className='productimages'/>
              <p className='text nowrap'>{product.productName}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
