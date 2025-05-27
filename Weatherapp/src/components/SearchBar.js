import React from 'react';

const SearchBar = ({ city, setCity, fetchWeather }) => (
  <div className="flex mb-4">
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city"
      className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none"
    />
    <button
      onClick={fetchWeather}
      className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
    >
      Search
    </button>
  </div>
);

export default SearchBar;
