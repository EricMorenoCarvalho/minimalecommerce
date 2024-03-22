import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PRODUCTSLIST } from './productslist';

const Products = ({ limit }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation();

  useEffect(() => {
    const currentCategory = location.pathname.split('/')[2];

    if (currentCategory) {
      setSelectedCategory(currentCategory);
      getFilteredProducts(currentCategory);
    } else {
      getAllProducts();
    }
  }, [location.pathname]);

  useEffect(() => {
    if (selectedCategory !== 'All') {
      getFilteredProducts(selectedCategory);
    } else {
      getAllProducts();
    }
  }, [selectedCategory]);

  const getAllProducts = () => {
    const shuffledProducts = PRODUCTSLIST.sort(() => 0.5 - Math.random());
    setFilteredProducts(shuffledProducts);
  };

  const getFilteredProducts = (category) => {
    const lowerCaseCategory = category.toLowerCase();
    const filteredProducts = PRODUCTSLIST.filter(product => product.category.toLowerCase() === lowerCaseCategory);
    const shuffledProducts = filteredProducts.sort(() => 0.5 - Math.random());
    setFilteredProducts(shuffledProducts);
  };

  return (
    <div className='gridproducts'>
      {filteredProducts.slice(0, limit).map(product => (
        <Link key={product.id} to={`/product/${product.id}`} className='mainproducts'>
          <img alt={product.productName} src={product.productImgs[0]} className='productimages' />
          <p className='text nowrap underline'>
            {product.productName}
          </p>
          <p className='text-small'>
            ${product.price}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Products;