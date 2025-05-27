import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      alert('City not found or API error.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">Weather Dashboard</h1>
        <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
        {weatherData && (
          <WeatherCard
            city={weatherData.name}
            temp={weatherData.main.temp}
            description={weatherData.weather[0].description}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
            icon={weatherData.weather[0].icon}
          />
        )}
      </div>
    </div>
  );
};

export default App;
