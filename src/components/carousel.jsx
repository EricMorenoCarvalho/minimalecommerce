import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PRODUCTSLIST } from './productslist';

const ProductCarousel = () => {
  const [allProducts, setAllProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const shuffleProducts = () => {
      const shuffledProducts = [...PRODUCTSLIST].sort(() => 0.5 - Math.random());
      setAllProducts(shuffledProducts);
    };

    shuffleProducts();
  }, [location.pathname]);

  return (
    <div className='custom-ourproducts'>
      <span className='title more-products'>More Products</span>
      <div className='custom-gridproducts'>
        {allProducts.slice(0, 10).map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className='custom-mainproducts'>
            <img alt={product.productName} src={product.productImgs[0]} className='productimages2' />
            <p className='text underline'>
              {product.productName}
            </p>
            <p className='text-small'>
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;