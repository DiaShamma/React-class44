
//ProductList.js

import React from 'react';
import { Link } from 'react-router-dom';


function ProductList({ products, selectedCategory }) {


  // Filter products based on the selected category
  const filteredProducts = products.filter((product) =>
    selectedCategory === null || selectedCategory.includes(product.category));

  // deleting "console.loge"

  return (
    <div className="product-list">
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default ProductList;
