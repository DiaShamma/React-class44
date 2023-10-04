//Header.js

import React from 'react';
import { Link } from 'react-router-dom';

// ... rest of the imports ...

function Header({ categories, selectedCategory, setSelectedCategory }) {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="header">
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={category === selectedCategory ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="navigation-buttons">
        <Link to="/favorites">Favorites</Link>
        <Link to="/">Products</Link>
      </div>
    </div>
  );
}

export default Header;
