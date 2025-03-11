import React from 'react';
import './FarmersStore.css';

function FarmersStore() {
  return (
    <div className="farmers-store-container">
      <h2>Farmer's Store</h2>
      <div className="coming-soon">
        This feature is coming soon!
        <p>You will be able to:</p>
        <ul>
          <li>Buy farming equipment</li>
          <li>Sell your produce</li>
          <li>Connect with other farmers</li>
          <li>Find local markets</li>
          <li>Get price updates</li>
        </ul>
      </div>
    </div>
  );
}

export default FarmersStore; 