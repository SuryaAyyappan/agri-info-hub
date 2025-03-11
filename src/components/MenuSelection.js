import React from 'react';
import './MenuSelection.css';

function MenuSelection({ options, onSelection, title }) {
  return (
    <div className="menu-container">
      <h2>{title}</h2>
      <div className="menu-grid">
        {options.map(option => (
          <button
            key={option.id}
            className="menu-button"
            onClick={() => onSelection(option.id)}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MenuSelection; 