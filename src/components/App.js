import React, { useState, useEffect } from 'react';
import './App.css';
import MenuSelection from './MenuSelection';
import CropInfo from './CropInfo';
import FarmersStore from './FarmersStore';
import Weather from './Weather';
import SeedInfo from './SeedInfo';
import AgricultureStudies from './AgricultureStudies';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const mainMenuOptions = [
    { id: 1, name: 'Agriculture', icon: '🌾' },
    { id: 2, name: "Farmer's store (Buy and sell)", icon: '🏪' },
    { id: 3, name: 'Intercropping', icon: '🌱' },
    { id: 4, name: 'Market price', icon: '💰' },
    { id: 5, name: 'Weather', icon: '🌤️' },
    { id: 6, name: 'Fertilisers', icon: '🧪' },
    { id: 7, name: 'Seeds (availability & variety)', icon: '🌺' },
    { id: 8, name: 'Tools suggestion', icon: '🔧' },
    { id: 9, name: 'Agriculture studies', icon: '📚' },
    { id: 10, name: 'Government policies', icon: '📜' }
  ];

  const handleMainSelection = (optionId) => {
    setIsLoading(true);
    setSelectedOption(optionId);
    setSelectedSubOption(null);
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleSubSelection = (subOptionId) => {
    setIsLoading(true);
    setSelectedSubOption(subOptionId);
    setTimeout(() => setIsLoading(false), 500);
  };

  const renderComponent = () => {
    if (isLoading) {
      return <div className="loading content-container">Loading...</div>;
    }

    switch (selectedOption) {
      case 1:
        return <CropInfo onSubSelection={handleSubSelection} selectedSubOption={selectedSubOption} />;
      case 2:
        return <FarmersStore onSubSelection={handleSubSelection} selectedSubOption={selectedSubOption} />;
      case 5:
        return <Weather />;
      case 7:
        return <SeedInfo />;
      case 9:
        return <AgricultureStudies />;
      default:
        return (
          <div className="coming-soon">
            <span role="img" aria-label="construction">🚧</span>
            This feature is coming soon!
          </div>
        );
    }
  };

  return (
    <div className={`app ${isLoading ? 'loading' : ''}`}>
      <header className="app-header">
        <h1>
          <span role="img" aria-label="agriculture">🌾</span> 
          AgriInfoHub
        </h1>
        <p>Your one-stop solution for agricultural information</p>
      </header>
      
      <div className="main-container">
        {!selectedOption ? (
          <MenuSelection 
            options={mainMenuOptions} 
            onSelection={handleMainSelection} 
            title="Main Menu"
          />
        ) : (
          <div className="content-container">
            <button 
              className="back-button"
              onClick={() => handleMainSelection(null)}
            >
              <span role="img" aria-label="back">⬅️</span> Back to Main Menu
            </button>
            {renderComponent()}
          </div>
        )}
      </div>
      
      <footer className="app-footer">
        <p>
          <span role="img" aria-label="tech">��</span> 
          © 2025 AgriInfoHub - Supporting farmers with technology
        </p>
      </footer>
    </div>
  );
}

export default App;
