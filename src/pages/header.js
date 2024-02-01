import React from 'react';
import logo from '../images/logo.png';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
        <div className='headercontent'>
        <img src={logo} alt="Logo" width='65px' height='65px' className='logo'/>
        </div>
    </header>
  );
};

export default Header;
