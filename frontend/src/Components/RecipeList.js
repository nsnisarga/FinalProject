// RecipeList.js
import React from 'react';
import RecipeCard from './RecipeCard';
import "bootstrap/dist/css/bootstrap.min.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
