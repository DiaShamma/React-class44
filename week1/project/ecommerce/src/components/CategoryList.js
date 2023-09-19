import React from 'react';

function CategoryList({ categories, setSelectedCategory, selectedCategory }) {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="category-list">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={category === selectedCategory ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
