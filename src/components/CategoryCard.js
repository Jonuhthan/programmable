import React from 'react';
import './CategoryCard.css';

// represents each individual box where users can choose which questions to be tested on
const CategoryCard = ({ title, description, imageSrc }) => {
  return (
    <div className="category-card">
      <img src={imageSrc} alt={title} className="category-image" />
      <div className="category-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
