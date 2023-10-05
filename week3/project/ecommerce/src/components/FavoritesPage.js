import React, { useContext, useEffect, useState } from 'react';
import FavoritesContext from '../Contexts/FavoritesContext';
import HeartSolid from "../assets/heart-solid.svg";
import HeartRegular from "../assets/heart-regular.svg";

function FavoritesPage() {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavoriteProduct = async (id) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const product = await response.json();
        return product;
      } catch (err) {
        setError(err.message);
        return null;
      }
    };

    const fetchFavorites = async () => {
      setLoading(true);
      const fetchedProducts = await Promise.all(favorites.map(id => fetchFavoriteProduct(id)));
      setFavoriteProducts(fetchedProducts.filter(product => product !== null));
      setLoading(false);
    };

    fetchFavorites();
  }, [favorites]);

  const toggleFavorite = (id) => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="favorites-page">
      {favoriteProducts.length === 0 ? (
        <p>You haven't chosen any favorites yet!</p>
      ) : (
        <ul>
          {favoriteProducts.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <a href={product.description}>{product.title}</a>
              <button
                className="favorite-btn"
                onClick={() => toggleFavorite(product.id)}
              >
                {isFavorite(product.id) ? (
                  <img src={HeartSolid} alt="Remove from favorites" />
                ) : (
                  <img src={HeartRegular} alt="Add to favorites" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;
