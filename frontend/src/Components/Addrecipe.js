import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    recipe: '',
    food: '',
    isVeg: true, // Default to 'true' for vegetarian
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for the "isVeg" property to convert it to a boolean
    if (name === 'isVeg') {
      setFormData({
        ...formData,
        [name]: value === 'true', // Convert the string to a boolean
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to add a new item
      await axios.post('http://localhost:3000/api/food', formData);

      // Clear the form after successful addition
      setFormData({
        imageUrl: '',
        recipe: '',
        food: '',
        isVeg: true, // Reset the isVeg property to 'true'
      });

      console.log('New item added successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipe" className="form-label">
            Recipe
          </label>
          <textarea
            className="form-control"
            id="recipe"
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="food" className="form-label">
            Food
          </label>
          <input
            type="text"
            className="form-control"
            id="food"
            name="food"
            value={formData.food}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="isVeg" className="form-label">
            Veg or Non-Veg
          </label>
          <select
            className="form-select"
            id="isVeg"
            name="isVeg"
            value={formData.isVeg.toString()} // Convert boolean to string
            onChange={handleChange}
          >
            <option value="true">Veg</option>
            <option value="false">Non-Veg</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
