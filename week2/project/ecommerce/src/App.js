import './App.css';
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList.js';
import Header from './components/Header';
import FavoritesPage from './components/FavoritesPage';

function App() {
  const [allCategories, setAllCategories] = useState([]); // Initialize as empty array
  const [products, setProducts] = useState([]); // Initialize as empty array
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // To track loading status
  const [error, setError] = useState(null); // To track errors

  useEffect(() => {
    // Fetch categories
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => {
        setAllCategories(data);
        // Once categories are fetched, fetch products
        return fetch('https://fakestoreapi.com/products');
      })
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false); // Set loading to false after fetching data
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false); // Set loading to false if there's an error
      });
  }, []);

  if (isLoading) {
    return <div className="loader">Loading...</div>; // Added 'Loading...' text for clarity, adjust as needed
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
