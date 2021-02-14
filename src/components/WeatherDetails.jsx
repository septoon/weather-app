import React from 'react'

function WeatherDetails({ city, temperature }) {
    const celsius = Math.floor(temperature-273,15)
    
    return (
        <div className="weather-details">
            <div className="city">{city}</div>
            <div className="temperature">{celsius} &deg; C</div>
        </div>
    );
}
 
export default WeatherDetails;
