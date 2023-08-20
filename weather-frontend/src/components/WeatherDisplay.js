import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
    if (!weatherData) {
        return null;
    }

    return (
        <div>
            <h2>Weather Conditions for {weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
    );
};

export default WeatherDisplay;
