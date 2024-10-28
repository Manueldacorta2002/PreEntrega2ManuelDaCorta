// src/components/CartWidget.js
import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to="/cart" className="cart-icon">
      🛒 {}
    </Link>
  );
};

export default CartWidget;
