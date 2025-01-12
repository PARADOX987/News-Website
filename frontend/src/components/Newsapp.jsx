import React, { useState, useEffect } from 'react';
import Card from './Card';

const Newsapp = () => {
  const [search, setSearch] = useState('india'); 
  const [newsData, setNewsData] = useState(null);
  const API_KEY = 'a474a34e4c874f49932b14bfe7c27389';

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };

  useEffect(() => {
    getData();
  }, [search]); 

  const handleSearchClick = () => {
    getData();
  };

  const handleCategoryClick = (category) => {
    setSearch(category); // Update search with the selected category
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <nav className="bg-green-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Trendy News</h1>
          <div className="searchbar flex space-x-2">
            <input
              type="text"
              placeholder="Search News"
              className="text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
      <p className="font-bold text-2xl">Stay Updated With Trendy</p>
      <div className="categoryBtn py-4 flex justify-center space-x-6 bg-white shadow-md">
        <button
          onClick={() => handleCategoryClick('Sports')}
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sports
        </button>
        <button
          onClick={() => handleCategoryClick('Politics')}
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Politics
        </button>
        <button
          onClick={() => handleCategoryClick('Entertainment')}
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Entertainment
        </button>
        <button
          onClick={() => handleCategoryClick('Health')}
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Health
        </button>
        <button
          onClick={() => handleCategoryClick('Fitness')}
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Fitness
        </button>
      </div>

      <div className="mt-8 container mx-auto px-4">
        <Card data={newsData} />
      </div>
    </div>
  );
};

export default Newsapp;
