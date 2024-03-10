import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesButtons = () => {
  const handleClick = (category) => {
  };

  return (
    <div className='button-container'>
      <Link className='button text-small' to='/products' onClick={() => handleClick('All')}>All</Link>
      <Link className='button text-small' to='/products/chairs' onClick={() => handleClick('Chairs')}>Chairs</Link>
      <Link className='button text-small' to='/products/tables' onClick={() => handleClick('Tables')}>Tables</Link>
      <Link className='button text-small' to='/products/sofas' onClick={() => handleClick('Sofas')}>Sofas</Link>
      <Link className='button text-small' to='/products/lamps' onClick={() => handleClick('Lamps')}>Lamps</Link>
    </div>
  );
};

export default CategoriesButtons;
