import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null); // Store the recipe being edited
  const [editModalVisible, setEditModalVisible] = useState(false); // Control the visibility of the edit modal

  useEffect(() => {
    // Fetch recipes from the backend when the component mounts
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    axios
      .get('http://localhost:3000/recipes') // Replace with your backend URL
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  };

  const handleDeleteRecipe = (recipeName) => {
    axios
      .delete(`http://localhost:3000/recipes/${recipeName}`)
      .then(() => {
        console.log(`Recipe "${recipeName}" deleted successfully`);
        // Filter out the deleted recipe from the recipes list
        setRecipes((prevRecipes) =>
          prevRecipes.filter((recipe) => recipe.name !== recipeName)
        );
      })
      .catch((error) => {
        console.error('Error deleting recipe:', error);
      });
  };

  const handleEditClick = (recipe) => {
    // Set the recipe to be edited
    setEditingRecipe(recipe);
    // Show the edit modal
    setEditModalVisible(true);
  };

  const handleCancelEdit = () => {
    // Clear the editing state
    setEditingRecipe(null);
    // Hide the edit modal
    setEditModalVisible(false);
  };

  const handleSaveEdit = (updatedRecipe) => {
    // Send a PUT request to update the recipe in the backend
    axios
      .put(`http://localhost:3000/recipes/${updatedRecipe.name}`, updatedRecipe)
      .then(() => {
        console.log(`Recipe "${updatedRecipe.name}" updated successfully`);
        // Update the recipe in the state
        setRecipes((prevRecipes) =>
          prevRecipes.map((recipe) =>
            recipe.name === updatedRecipe.name ? updatedRecipe : recipe
          )
        );
        // Clear the editing state
        setEditingRecipe(null);
        // Hide the edit modal
        setEditModalVisible(false);
      })
      .catch((error) => {
        console.error('Error updating recipe:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Recipe List</h1>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={recipe.imageLink}
                alt={recipe.name}
                className="card-img-top"
              />
              <div className="card-body">
                <div>
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">
                    {recipe.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
                    </li>
                    <li className="list-group-item">
                      <strong>Instructions:</strong> {recipe.instructions}
                    </li>
                  </ul>
                  <button
                    className="btn btn-primary mt-3 mr-2"
                    onClick={() => handleEditClick(recipe)}
                  >
                    Edit
                  </button>
                   &nbsp;&nbsp;
                  <button
                    className="btn btn-danger mt-3"
                    onClick={() => handleDeleteRecipe(recipe.name)}
                  >
                    Delete
                  </button>
                  &nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Recipe Modal */}
      {editingRecipe && (
        <div className={`modal ${editModalVisible ? 'd-block' : ''}`} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Recipe</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCancelEdit}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h5 className="card-title">
                  <input
                    type="text"
                    value={editingRecipe.name}
                    onChange={(e) =>
                      setEditingRecipe({
                        ...editingRecipe,
                        name: e.target.value,
                      })
                    }
                  />
                </h5>
                <p className="card-text">
                  <input
                    type="checkbox"
                    checked={editingRecipe.isVeg}
                    onChange={(e) =>
                      setEditingRecipe({
                        ...editingRecipe,
                        isVeg: e.target.checked,
                      })
                    }
                  />
                  Vegetarian
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Ingredients:</strong>{' '}
                    <input
                      type="text"
                      value={editingRecipe.ingredients.join(', ')}
                      onChange={(e) =>
                        setEditingRecipe({
                          ...editingRecipe,
                          ingredients: e.target.value.split(', '),
                        })
                      }
                    />
                  </li>
                  <li className="list-group-item">
                    <strong>Instructions:</strong>{' '}
                    <input
                      type="text"
                      value={editingRecipe.instructions}
                      onChange={(e) =>
                        setEditingRecipe({
                          ...editingRecipe,
                          instructions: e.target.value,
                        })
                      }
                    />
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => handleSaveEdit(editingRecipe)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
