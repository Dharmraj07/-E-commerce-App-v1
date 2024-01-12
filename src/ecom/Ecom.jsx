import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import products from './products';

const Ecom = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { product, quantity: 1 }]);
    }
  };
//   console.log(cart);

  return (
    <div>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default Ecom;
