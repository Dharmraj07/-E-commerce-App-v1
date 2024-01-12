import React from 'react';

const Cart = ({ cart }) => {
  console.log(cart);

  const calculateTotalPrice = () => {
    return cart.reduce((total, { product, quantity }) => {
      return total + product.price * quantity;
    }, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(({ product, quantity }) => (
          <li key={product.id}>
            
            {product.name} - Price: ${product.price} - Quantity: {quantity} 
          </li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Cart;
