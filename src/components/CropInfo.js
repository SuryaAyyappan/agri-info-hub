import React, { useState, useEffect } from 'react';
import MenuSelection from './MenuSelection';
import CropDetails from './CropDetails';
import './CropInfo.css';

function CropInfo({ onSubSelection, selectedSubOption }) {
  const [crops, setCrops] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const subOptions = [
    { id: 1, name: 'Know about different crops and trees' },
    { id: 2, name: 'Gap to be leaved between crops' },
    { id: 3, name: 'Irrigation' },
    { id: 4, name: 'Decoratable crops' },
    { id: 5, name: 'Yield gap' },
    { id: 6, name: 'Verdenary services' }
  ];

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchCrops = async () => {
      try {
        // This would be replaced with actual API call
        const cropsList = [
          { id: 1, name: 'Rice' },
          { id: 2, name: 'Wheat' },
          { id: 3, name: 'Bajra' },
          { id: 4, name: 'Jowar' },
          { id: 5, name: 'Drumstick' },
          // Add more crops as needed
          { id: 78, name: 'Curry Leaves' }
        ];
        setCrops(cropsList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crops:', error);
        setLoading(false);
      }
    };

    if (selectedSubOption === 1) {
      fetchCrops();
    }
  }, [selectedSubOption]);

  const handleCropSelection = (cropId) => {
    setSelectedCrop(cropId);
  };

  if (!selectedSubOption) {
    return (
      <MenuSelection 
        options={subOptions} 
        onSelection={onSubSelection} 
        title="Agriculture Information"
      />
    );
  }

  if (selectedSubOption === 1) {
    if (selectedCrop) {
      return (
        <div className="crop-details-container">
          <button className="back-button" onClick={() => setSelectedCrop(null)}>
            Back to Crops List
          </button>
          <CropDetails cropId={selectedCrop} />
        </div>
      );
    }

    return (
      <div className="crops-container">
        <h2>Select a Crop</h2>
        {loading ? (
          <p>Loading crops...</p>
        ) : (
          <div className="crops-grid">
            {crops.map(crop => (
              <button
                key={crop.id}
                className="crop-button"
                onClick={() => handleCropSelection(crop.id)}
              >
                {crop.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return <div className="coming-soon">This feature is coming soon!</div>;
}

export default CropInfo; 