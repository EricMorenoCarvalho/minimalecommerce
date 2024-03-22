import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuantitySelector from './quantityselector';
import { PRODUCTSLIST } from '../components/productslist';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/productdetailpage.css';

const ProductDetail = ({ setCart, cart }) => {
  const { productId } = useParams();
  const product = PRODUCTSLIST.find((p) => p.id === parseInt(productId));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [productId]);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
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

  const multipliedPrice = (product.price * quantity).toFixed(2);

  return (
    <div className='productdetail'>
      <div className='productdetailslider'>
        <Slider {...sliderSettings} className=''>
          {product.productImgs.map((img, index) => (
            <div key={index}>
              <img alt={product.productName} src={img} className='productimages1' />
            </div>
          ))}
        </Slider>
        <div className='photo-count'>
          {currentSlide + 1} of {product.productImgs.length}
        </div>
      </div>

      <div className='productdetailtext'>
        <span className='title-xl'>{product.productName}</span>
        <p className='title'>${multipliedPrice}</p>
        <p className='text'>{product.description}</p>
        <div className='details-container'>
          <span className='text-small'>Material: {product.material}</span>
          <span className='text-small'>Weight: {product.weight}</span>
          <span className='text-small'>Dimensions: {product.dimensions}</span>
        </div>
        <p className='text'>
          Category: <b />
          <a className='black-text td-none underline' href={`/products/${product.category}`}>
            {product.category}
          </a>
        </p>
        <QuantitySelector
          quantity={quantity}
          onIncrease={handleIncreaseQuantity}
          onDecrease={handleDecreaseQuantity}
        />
        <div className='buycart-buttons'>
          <text className='button title'>
            Buy
          </text>
          <button className='button title bg-white' onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
