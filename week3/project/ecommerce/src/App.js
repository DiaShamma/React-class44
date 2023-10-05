import './App.css';
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import FavoritesPage from './components/FavoritesPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useFetch from "./hooks/useFetch";



function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoriesUrl = "https://fakestoreapi.com/products/categories";
  const productsUrl = "https://fakestoreapi.com/products";

  const { data: allCategories, isLoading: categoriesLoading, error: categoriesError } = useFetch(categoriesUrl);
  const { data: products, isLoading: productsLoading, error: productsError } = useFetch(productsUrl);





  if (categoriesLoading || productsLoading) {
    return <div className="loader">Loading...</div>;
  }


  if (categoriesError || productsError) {
    return <div>Error: {categoriesError || productsError}</div>;
  }

  return (
    <Router>
      <div className="App">
        <Header
          categories={allCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Routes>
          <Route path="/" element={<ProductList products={products} selectedCategory={selectedCategory} />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
