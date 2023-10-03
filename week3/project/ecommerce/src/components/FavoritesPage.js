import React, { useContext } from 'react';
import FavoritesContext from '../Contexts/FavoritesContext';

function FavoritesPage({ products }) {
  const { favorites } = useContext(FavoritesContext);

  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return (
    <div className="favorites-page">
      <h2>Favorites</h2>
      <ul>
        {favoriteProducts.map(product => (
          <li key={product.id}>
            {product.name} {/* Assuming product has a 'name' property */}
            {/* You can display more product details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesPage;
