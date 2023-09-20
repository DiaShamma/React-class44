import React from 'react';

function ProductList({ products, selectedCategory }) {


  // Filter products based on the selected category
  const filteredProducts = products.filter((product) =>
    selectedCategory === null || selectedCategory.includes(product.category));

  console.log('filteredProducts:', filteredProducts)// Debugging: Log the filtered products

  return (
    <div className="product-list">
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
