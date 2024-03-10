import React from 'react';
import { useLocation } from 'react-router-dom';
import '../components/productsmain.css';
import Products from '../components/products';
import CategoriesButtons from '../components/categoriesbuttons';

const ProductsPage = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  let text1 = "Explore the Essence of Elegance";
  let text2 = "Uncover Our Exquisite Furniture Collection";

  if (path.includes('/products/chairs')) {
    text1 = "Discover Elegant Chairs";
    text2 = "Explore our handpicked collection of elegant chairs";
  }

  if (path.includes('/products/tables')) {
    text1 = "Explore Stunning Tables";
    text2 = "Discover beautifully crafted tables for your living space";
  }

  if(path.includes('products/sofas')) {
    text1 = "Luxurious Sofas for Your Home"
    text2 = "Indulge in comfort with our luxurious sofa collection"
  }

  if(path.includes('products/lamps')) {
    text1 = "Illuminate Your Space with Stylish Lamps"
    text2 = "Add a touch of style with our curated lamp collection"
  }

  return (
    <div className='maincontent'>
      <div className='ourproducts'>
        <p className='title-xl'>
          {text1}
        </p>
        <p className='title'>
          {text2}
        </p>
        <CategoriesButtons />
        <Products />
      </div>
    </div>
  );
};

export default ProductsPage;
