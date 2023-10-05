import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ categories, selectedCategory, setSelectedCategory }) {
  const location = useLocation();
  const isFavoritesPage = location.pathname === "/favorites";

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="header">
      <div className="category-buttons">
        {isFavoritesPage ? (
          <h2>Favorites</h2>
        ) : (
          categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={category === selectedCategory ? 'active' : ''}
            >
              {category}
            </button>
          ))
        )}
      </div>
      <div className="navigation-buttons">
        <Link
          to="/favorites"
          className={`nav-link ${location.pathname === "/favorites" ? 'active' : ''}`}
        >
          Favorites
        </Link>
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? 'active' : ''}`}
        >
          Products
        </Link>
      </div>
    </div>
  );
}

export default Header;
