import React, { useState } from 'react';
import './SortMenu.css'; // Import CSS for styling

function SortMenu({setIsSingleColumn}) {
  const [sortOption, setSortOption] = useState(''); // State for the sort dropdown

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleGridLayoutChange = (isSingle) => {
    setIsSingleColumn(isSingle); // Set the grid layout (single column or 2 columns)
  };

  return (
    <div className="sort-menu">
      {/* Dropdown for "Sort by" */}
      <div className="dropdown">
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="sort-dropdown"
        >
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="date">Date</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>

      {/* Icons for grid layout */}
      <div className="icons">
        <div 
          className="icon grid-left" 
          onClick={() => handleGridLayoutChange(true)} // On left icon click, set single column layout
        >
          <img src="/OnePokemon/grid-1.png" alt="Single Column" />
        </div>
        <div 
          className="icon grid-right" 
          onClick={() => handleGridLayoutChange(false)} // On right icon click, set two-column layout
        >
          <img src="/OnePokemon/grid-2.png" alt="Two Columns" />
        </div>
      </div>
    </div>
  );
}

export default SortMenu;
