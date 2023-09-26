//app.js

import './App.css';
import React, { useState } from 'react';
import ProductList from './components/ProductList.js';
import Header from './components/Header';
import FavoritesPage from './components/FavoritesPage';
import categories from './fake-data/all-categories';
import products from './fake-data/all-products';

function App() {
  const [allCategories] = useState(categories);
  // Initialize selectedCategory with the first category from your categories array
  // const [selectedCategory, setSelectedCategory] = useState(allCategories[3]);
  const [selectedCategory, setSelectedCategory] = useState(null);// changed to see all products on the landing page...

  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <div className="App">
      <Header
        categories={allCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />
      <main className="App-main">
        {showFavorites ? (
          <FavoritesPage products={products} />
        ) : (
          <ProductList products={products} selectedCategory={selectedCategory} />
        )}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
