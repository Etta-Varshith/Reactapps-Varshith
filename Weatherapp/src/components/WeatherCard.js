import React from 'react';

const WeatherCard = ({ city, temp, description, humidity, windSpeed, icon }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mt-4 text-gray-800">
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-xl font-medium">{city}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather icon"
        className="w-12 h-12"
      />
    </div>
    <p className="text-3xl font-bold mb-1">{temp}°C</p>
    <p className="capitalize">{description}</p>
    <div className="mt-2">
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} m/s</p>
    </div>
  </div>
);

export default WeatherCard;
