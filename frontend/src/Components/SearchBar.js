import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVegFilter, setIsVegFilter] = useState('all'); // Set default filter value to 'all'
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes(searchQuery, isVegFilter);
  }, [searchQuery, isVegFilter]);

  const fetchRecipes = (query, filter) => {
    // Build the query parameter based on provided filters
    const queryParams = [];
    if (query) {
      queryParams.push(`recipeName=${query}`);
    }
    if (filter !== 'all') {
      queryParams.push(`isVeg=${filter === 'true'}`);
    }

    const queryString = queryParams.join('&');

    axios
      .get(`http://localhost:3000/recipes${queryString ? `?${queryString}` : ''}`)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setIsVegFilter(e.target.value);
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for recipes"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => fetchRecipes(searchQuery, isVegFilter)}
            >
              Search
            </button>
          </div>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="filter">Filter by Vegetarian:</label>
          <select
            id="filter"
            className="form-control"
            onChange={handleFilterChange}
            value={isVegFilter}
          >
            <option value="all">All</option>
            <option value="true">Vegetarian</option>
            <option value="false">Non-Vegetarian</option>
          </select>
        </div>
      </div>

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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
