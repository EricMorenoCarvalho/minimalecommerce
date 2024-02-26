import React, { useState } from 'react';
import { PRODUCTSLIST } from '../components/productslist';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/productdetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = PRODUCTSLIST.find((p) => p.id === parseInt(productId));

  const [currentSlide, setCurrentSlide] = useState(0);

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
        <p className='title'>{product.productName}</p>
        <p className='text-small'>{product.description}</p>
        <p className='text-small'>Material: {product.material}</p>
        <p className='text-small'>Dimensions: {product.dimensions}</p>
        <p className='text'>${product.price}</p>
        <p className='text'>Category: {product.category}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
