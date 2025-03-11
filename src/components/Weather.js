import React, { useState } from 'react';
import './Weather.css';

function Weather() {
  const [selectedDistrict, setSelectedDistrict] = useState('ariyalur');

  const districts = [
    { id: 'ariyalur', name: 'Ariyalur', coords: '11.14,79.08' },
    { id: 'chengalpettu', name: 'Chengalpettu', coords: '12.68,79.99' },
    // Add more districts as needed
  ];

  const getWeatherUrl = (coords) => {
    return `https://forecast.weather.gov/MapClick.php?lat=${coords.split(',')[0]}&lon=${coords.split(',')[1]}&FcstType=graphical`;
  };

  const handleDistrictSelect = (districtId) => {
    setSelectedDistrict(districtId);
  };

  const selectedDistrictData = districts.find(d => d.id === selectedDistrict);

  return (
    <div className="weather-container">
      <h2>Weather Information</h2>
      <div className="districts-grid">
        {districts.map(district => (
          <button
            key={district.id}
            className={`district-button ${selectedDistrict === district.id ? 'active' : ''}`}
            onClick={() => handleDistrictSelect(district.id)}
          >
            {district.name}
          </button>
        ))}
      </div>
      
      <div className="weather-content">
        <div className="weather-frame">
          <iframe
            title={`Weather for ${selectedDistrictData?.name}`}
            src={getWeatherUrl(selectedDistrictData?.coords)}
            width="100%"
            height="800"
            frameBorder="0"
            scrolling="auto"
          />
        </div>
        
        <div className="weather-direct-link">
          <p>For detailed weather information, visit:</p>
          <a 
            href={`https://weather.com/en-IN/weather/today/l/${selectedDistrictData?.coords}?par=google`}
            target="_blank"
            rel="noopener noreferrer"
            className="weather-link"
          >
            Weather.com - {selectedDistrictData?.name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Weather; 