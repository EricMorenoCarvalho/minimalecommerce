import React, {useState, useEffect} from 'react';
import { PRODUCTSLIST } from './productslist';

const Products = ({limit}) => {
    const [allProducts, setAllProducts] = useState([]);

    const getAllProducts = () => {
      const shuffledProducts = PRODUCTSLIST.sort(() => 0.5 - Math.random());
      setAllProducts(shuffledProducts);
    };

    useEffect(() => {
        getAllProducts();
      }, []);

  return (
    <div className='gridproducts'>
    {allProducts.slice(0, limit).map(product => (
      <a key={product.id} href={`/products/${product.id}`} className='mainproducts'>
        <img alt={product.productName} src={product.productImgs[0]} className='productimages' />
        <p className='text nowrap underline'>
          {product.productName}
        </p>
        <p className='text-small'>
          ${product.price}
        </p>
      </a>
    ))}
  </div>
  );
};

export default Products;
