import React from 'react';
import './SeedInfo.css';

function SeedInfo() {
  return (
    <div className="seed-info-container">
      <h2>Seed Information</h2>
      <div className="coming-soon">
        This feature is coming soon!
        <p>You will be able to find information about:</p>
        <ul>
          <li>Seed varieties</li>
          <li>Availability in your region</li>
          <li>Planting seasons</li>
          <li>Storage requirements</li>
          <li>Quality indicators</li>
        </ul>
      </div>
    </div>
  );
}

export default SeedInfo; 