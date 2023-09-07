import React from 'react';

const RecipeCard = ({ title, description, image }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <h2 className="recipe-title">{title}</h2>
      <p className="recipe-description">{description}</p>
      <a href="#" className="recipe-link">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
