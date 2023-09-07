import React, { useState } from 'react';

const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    name: '',
    isVeg: false,
    ingredients: '',
    instructions: '',
    imageLink: '', // Add imageLink to the state
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRecipeData({
      ...recipeData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your backend to create the recipe
    try {
      const response = await fetch('http://localhost:3000/recipes', { // Update the backend API URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
      });

      if (response.ok) {
        // Recipe created successfully
        alert('Recipe created successfully!');
        setRecipeData({
          name: '',
          isVeg: false,
          ingredients: '',
          instructions: '',
          imageLink: '', // Reset the imageLink field
        });
      } else {
        const data = await response.json();
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the recipe.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Create a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Recipe Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={recipeData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-check-label">Is it Vegetarian?</label>
          <input
            type="checkbox"
            className="form-check-input"
            id="isVeg"
            name="isVeg"
            checked={recipeData.isVeg}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">
            Ingredients (comma-separated):
          </label>
          <input
            type="text"
            className="form-control"
            id="ingredients"
            name="ingredients"
            value={recipeData.ingredients}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="instructions" className="form-label">
            Instructions:
          </label>
          <textarea
            className="form-control"
            id="instructions"
            name="instructions"
            value={recipeData.instructions}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="imageLink" className="form-label">
            Image Link:
          </label>
          <input
            type="text"
            className="form-control"
            id="imageLink"
            name="imageLink"
            value={recipeData.imageLink}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
