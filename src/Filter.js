// src/components/Filter.js
import React, { useState } from 'react';

function Filter({ onTitleChange, onRatingChange }) {
  return (
    <div className="flex gap-4 mb-4 bg-lightPurple p-4 rounded-lg ">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => onTitleChange(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
      />
      <input
        type="number"
        placeholder="0"
        min="1"
        max="5"
        onChange={(e) => onRatingChange(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-auto"
      />
     
    </div>
    
  );
}

export default Filter;
