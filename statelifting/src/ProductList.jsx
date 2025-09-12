import React from 'react';

const products = [
  { id: 1, name: 'Apple', price: 30 },
  { id: 2, name: 'Banana', price: 10 },
  { id: 3, name: 'Orange', price: 20 },
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <span>{product.name} - ₹{product.price}</span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
