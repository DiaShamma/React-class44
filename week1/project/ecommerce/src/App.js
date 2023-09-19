import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';


function App() {
  // Define state variables and their initial values
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Use relative paths to access the JSON files from your App.js file
  // Assuming the JSON files are located in the src/fake-data directory
  const productsDataPath = './fake-data/all-products.js';
  const categoriesDataPath = './fake-data/all-categories.js';

  // Use these paths when fetching data
  useEffect(() => {
    // Fetch products data
    fetch(productsDataPath)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });

    // Fetch categories data
    fetch(categoriesDataPath)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  // Rest of your component code
  // ...

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" /> {/* Use the logo here */}
      <CategoryList categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <ProductList products={products} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
