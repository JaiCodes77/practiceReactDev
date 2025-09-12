import React from 'react';

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ₹{item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
