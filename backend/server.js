const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/Food', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for the recipes
const recipeSchema = new mongoose.Schema({
  name: String,
  isVeg: Boolean,
  ingredients: [String],
  instructions: String,
  imageLink: String, // Add the image link field
});

// Define a model for the recipes
const Recipe = mongoose.model('Recipe', recipeSchema);

// API endpoints
app.get('/recipes', async (req, res) => {
  try {
    const { recipeName, isVeg } = req.query;

    const query = {};

    if (recipeName) {
      // Case-insensitive search for recipe names containing the query
      query.name = { $regex: recipeName, $options: 'i' };
    }

    if (isVeg !== undefined) {
      query.isVeg = isVeg;
    }

    const recipes = await Recipe.find(query);

    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching recipes' });
  }
});

app.post('/recipes', async (req, res) => {
  const { name, isVeg, ingredients, instructions, imageLink } = req.body;

  if (!name || ingredients.length === 0 || !instructions || !imageLink) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  try {
    const recipe = new Recipe({
      name,
      isVeg,
      ingredients,
      instructions,
      imageLink, // Include the image link
    });

    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ error: 'Error creating recipe' });
  }
});

app.delete('/recipes/:recipeName', async (req, res) => {
  const { recipeName } = req.params;

  try {
    const deletedRecipe = await Recipe.findOneAndDelete({ name: recipeName });

    if (!deletedRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(deletedRecipe);
  } catch (err) {
    res.status(500).json({ error: 'Error deleting recipe' });
  }
});

app.put('/recipes/:name', async (req, res) => {
  const { name } = req.params;
  const { isVeg, ingredients, instructions, imageLink } = req.body;

  try {
    // Find the recipe by name and update its properties
    const updatedRecipe = await Recipe.findOneAndUpdate(
      { name },
      {
        isVeg,
        ingredients,
        instructions,
        imageLink,
      },
      { new: true } // Return the updated recipe
    );

    if (!updatedRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(updatedRecipe);
  } catch (err) {
    res.status(500).json({ error: 'Error updating recipe' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
