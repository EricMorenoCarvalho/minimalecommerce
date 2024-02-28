import React, { useState } from 'react';
import { PRODUCTSLIST } from '../components/productslist';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/productdetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = PRODUCTSLIST.find((p) => p.id === parseInt(productId));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className='productdetail'>
      <Slider {...sliderSettings} className='productdetailslider'>
        {product.productImgs.map((img, index) => (
          <div key={index}>
            <img alt={product.productName} src={img} className='productimages1' />
          </div>
        ))}
      </Slider>
      <div className='productdetailtext'>
        <span className='title-xl'>{product.productName}</span>
        <p className='title'>${product.price}</p>
        <p className='text'>{product.description}</p>
        <div className='details-container'>
          <span className='text'>Material: {product.material}</span>
          <span className='text'>Weight: {product.weight}</span>
          <span className='text'>Dimensions: {product.dimensions}</span>
        </div>
        <p className='text'>Category: <Link className="black-text td-none underline" to={`/products/${product.category}`}>{product.category}</Link></p>
          <div className='button-container'>
            <button onClick={handleDecreaseQuantity}>-</button>
            <text className='text'>{quantity}</text>
            <button onClick={handleIncreaseQuantity}>+</button>
          <button className='button title'>Buy</button>
          <button className='button title'> Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
