import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css'; // Import your custom CSS file

const App = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async (location) => {
        try {
            const response = await fetch(`http://localhost:8000/api/get-weather/?location=${location}`);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData(null);
        }
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Weather Application</h1>
            <SearchForm onSearch={fetchWeatherData} />
            <WeatherDisplay weatherData={weatherData} />
        </div>
    );
};

export default App;
