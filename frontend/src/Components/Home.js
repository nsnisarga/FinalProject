import React from 'react';
import './Home.css'; // Import your stylesheet for styling
import Cards from './Card';

const Home = () => {
  return (
    <div>
      
      <div className="header-image">
        <br></br>
      <center>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/indian-food-circular-frame-with-copy-space_23-2148747658.jpg?w=996&t=st=1693932475~exp=1693933075~hmac=d1057d27a1f0d11b6b36a6ff0b6261bc4f09c34d2847a239f639d3b2b37fa42a"
          alt="Delicious Food"
        />
        <div className="header-content">
          <h1>Welcome to Foodies</h1>
          <p>Bringing You Exquisite Recipes from Around the World</p>
          <a href="/recipes" className="recipe-link">
            Explore Recipes
          </a>
        </div>
       </center>
      </div>

      <div className="mission-section text-center mt-5">
        <h2>Our Mission</h2>
        <p>
          At Foodies, our mission is to make cooking an enjoyable and rewarding experience for everyone. Our mobile app
          simplifies meal preparation and brings the joy of cooking to your kitchen. Here's how it works:
          Download the app, create your profile, and explore a world of delicious recipes.
          Choose your favorite recipes, and our step-by-step instructions will guide you through the cooking process.
          Cook with confidence, share your culinary creations, and connect with fellow food lovers.
        </p>
      </div>

      <Cards />
    </div>
  );
};

export default Home;
