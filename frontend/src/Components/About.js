import React from 'react';
import './About.css'
// Import your image file
//import aboutImage from './about-image.jpg'; // Replace with your image file path

const About = () => {
  return (
    <div className="about-container">
    
      <h1 className="about-title">About Us</h1>
      <img src='https://www.routeget.com/wp-content/uploads/2018/07/about-us-300x300.png'></img>
      <p className="about-description">
        Welcome to our culinary world! We are a team of passionate chefs and food enthusiasts dedicated to sharing our love for cooking with you.
      </p>
      <p className="about-description">
        Our mission is to provide you with a delightful culinary experience by offering a wide range of carefully curated recipes from around the world. Whether you're a home cook looking for new ideas or an aspiring chef seeking inspiration, our platform is designed to cater to your needs.
      </p>
      <p className="about-description">
        We believe that food has the power to bring people together, create cherished memories, and ignite creativity. Through our recipes, we aim to simplify the art of cooking and empower you to explore diverse cuisines and flavors.
      </p>
      <p className="about-description">
        Thank you for joining us on this gastronomic journey. We look forward to being your culinary companion and helping you discover the joy of cooking.
      </p>
    </div>
  );
};

export default About;
