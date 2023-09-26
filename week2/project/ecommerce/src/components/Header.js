import React from 'react';

function Header({ categories, selectedCategory, setSelectedCategory, showFavorites, setShowFavorites }) {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowFavorites(false); // Switch back to products when a category is selected
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
        <button onClick={() => setShowFavorites(true)}>Favorites</button>
        <button onClick={() => setShowFavorites(false)}>Products</button>
      </div>
    </div>
  );
}

export default Header;
