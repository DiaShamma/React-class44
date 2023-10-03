
//ProductList.js

import React, { useContext } from 'react';
import FavoritesContext from '../Contexts/FavoritesContext'; // Adjust the path based on your folder structure

function ProductList({ products, selectedCategory }) {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  // Filter products based on the selected category
  const filteredProducts = products.filter((product) =>
    selectedCategory === null || selectedCategory.includes(product.category)
  );

  const toggleFavorite = (id) => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div className="product-list">
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            {/* Toggle favorite status */}
            <button onClick={() => toggleFavorite(product.id)}>
              {isFavorite(product.id) ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
