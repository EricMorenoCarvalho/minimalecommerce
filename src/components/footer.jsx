import React from 'react';
import '../components/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer-links'>
        <a href="" className="title logo">E-Commerce</a>
        <a href='' className='header-links-text'>Home</a>
        <a href='' className='header-links-text'>Products</a>
      </div>
      <div className='footer-right'>
        <text> Copyright © 2024. All rights are reserved. </text>
        <a href='#'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnUlEQVR4nM2XQU7CQBRA60L2ohH2BhEXbNirCSFewETROyCoV0C9gcgt9ABGPYRxJZqgG9CtRBKf+eabNGNLp2Wa8JLZTKfzmJn/px/Pm1WAPFAGKpZNxuaTyhaBc+CF5DwDZzKXrXQb+MAd70DNRjrGPeNQObDkeKUmQyAbJJYzdcUDcAV8G/2npnRuykAyyem810Z/LyhlbOkDHaClraN9fnZ0zseA95f9Ysm9KEZAA5gHSsCBtjXtO9QxUZT9Ykn8SXwCG8AqcB/w/A4oAJsW8koccUOlEplhDFXedCXu61YGrdTkFsgAry7EF8A69siZX7oQt4D9GOI94NiF+AioxxDvAieutroUQ1x0tdV9DS5JmShuNLjeXIjRFClEpNMAWNGYwJV4pJdDQVMmaKUi3Yp7gZQjBv/Jm7qVRQ24ul4sGQ3C2FdmHnvkcuj6PhLdiDMN/0gIwBPp0/NMtDBLm3ZYZSmFWVoMgIV/YpXXUir2voBqoNSQT8rXJCutTpT65FkpzCQYphBKsLZDt9eL/hG5BH9hfou9meQHO/aT+J3d0xMAAAAASUVORK5CYII="/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
