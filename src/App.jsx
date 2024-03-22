import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import ProductsPage from './pages/productspage';
import ProductDetailPage from './pages/productdetailpage';
import NavBar from './components/navbar';
import Footer from './components/footer';
import CartComponent from './components/cartcomponent';
import Newsletter from './components/newsletter';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  const toggleClose = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <Router>
      <NavBar toggleCarrito={toggleCarrito} mostrarCarrito={mostrarCarrito} cartItemCount={cart.length} />
      <CartComponent isOpen={mostrarCarrito} onClose={toggleClose} cart={cart} setCart={setCart} onRemoveFromCart={removeFromCart} onClearCart={handleClearCart} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<ProductsPage />} />
        <Route
          path="/product/:productId"
          element={<ProductDetailPage setCart={setCart} cart={cart} />}
        />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;