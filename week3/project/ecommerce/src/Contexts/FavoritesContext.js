import { createContext } from 'react';
import React, { useState } from 'react';


const FavoritesContext = createContext({
  favorites: [],
  addFavorite: (id) => { },
  removeFavorite: (id) => { },
  isFavorite: (id) => { },
});



export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (id) => {
    setFavorites((prevFavorites) => [...prevFavorites, id]);
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favId) => favId !== id));
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};


export default FavoritesContext;