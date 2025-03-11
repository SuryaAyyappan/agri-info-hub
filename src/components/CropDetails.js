import React, { useState, useEffect } from 'react';
import './CropDetails.css';

function CropDetails({ cropId }) {
  const [cropInfo, setCropInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchCropDetails = async () => {
      try {
        // This would be replaced with actual API call
        // For now, using mock data
        const cropData = getCropMockData(cropId);
        setCropInfo(cropData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crop details:', error);
        setLoading(false);
      }
    };

    fetchCropDetails();
  }, [cropId]);

  const getCropMockData = (id) => {
    // Mock data based on crop ID
    const mockData = {
      1: { // Rice
        name: 'Rice',
        scientificName: 'Oryza sativa',
        growingSeason: 'Kharif (June-July to October-November)',
        waterRequirements: 'High water requirements, 1200-1800 mm',
        soilRequirements: 'Clay or clay loam soils with good water retention capacity',
        fertilizers: 'NPK 120:60:60 kg/ha',
        pests: 'Stem borer, brown plant hopper, leaf folder',
        diseases: 'Blast, bacterial leaf blight, sheath blight',
        harvestTime: '115-120 days after planting',
        yield: '3-5 tons/ha under normal conditions',
        tips: 'Proper water management during critical growth stages improves yield'
      },
      2: { // Wheat
        name: 'Wheat',
        scientificName: 'Triticum aestivum',
        growingSeason: 'Rabi (October-November to March-April)',
        waterRequirements: 'Medium water requirements, 450-650 mm',
        soilRequirements: 'Loam or clay loam soils with good drainage',
        fertilizers: 'NPK 120:60:40 kg/ha',
        pests: 'Aphids, termites, pink stem borer',
        diseases: 'Rust, loose smut, powdery mildew',
        harvestTime: '110-120 days after sowing',
        yield: '3-4.5 tons/ha under normal conditions',
        tips: 'Timely sowing and adequate irrigation at crown root initiation, flowering and grain filling stages'
      }
      // Add more crops as needed
    };

    return mockData[id] || {
      name: `Crop ${id}`,
      scientificName: 'Information not available',
      growingSeason: 'Information not available',
      waterRequirements: 'Information not available',
      soilRequirements: 'Information not available'
    };
  };

  if (loading) {
    return <p>Loading crop information...</p>;
  }

  if (!cropInfo) {
    return <p>Crop information not found.</p>;
  }

  return (
    <div className="crop-detail-card">
      <h2>{cropInfo.name}</h2>
      <div className="crop-info-container">
        <div className="crop-info-section">
          <h3>Basic Information</h3>
          <p><strong>Scientific Name:</strong> {cropInfo.scientificName}</p>
          <p><strong>Growing Season:</strong> {cropInfo.growingSeason}</p>
          <p><strong>Harvest Time:</strong> {cropInfo.harvestTime}</p>
          <p><strong>Average Yield:</strong> {cropInfo.yield}</p>
        </div>
        
        <div className="crop-info-section">
          <h3>Growing Requirements</h3>
          <p><strong>Water:</strong> {cropInfo.waterRequirements}</p>
          <p><strong>Soil:</strong> {cropInfo.soilRequirements}</p>
          <p><strong>Fertilizers:</strong> {cropInfo.fertilizers}</p>
        </div>
        
        <div className="crop-info-section">
          <h3>Pests and Diseases</h3>
          <p><strong>Common Pests:</strong> {cropInfo.pests}</p>
          <p><strong>Common Diseases:</strong> {cropInfo.diseases}</p>
        </div>
        
        {cropInfo.tips && (
          <div className="crop-info-section">
            <h3>Farming Tips</h3>
            <p>{cropInfo.tips}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CropDetails; 