import React, { useContext } from "react";
import FavoritesContext from "../Contexts/FavoritesContext";
import HeartSolid from "../assets/heart-solid.svg";
import HeartRegular from "../assets/heart-regular.svg";
function ProductList({ products, selectedCategory }) {
 
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

 
  const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;


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
            {/* Toggle favorite status using SVGs */}
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
    </div>
  );
}

export default ProductList;
