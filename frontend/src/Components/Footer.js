import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="container">
          <div className="footer-left">
            <h3>Foodies</h3>
            <p className="footer-links">
              <a href="/#" className="link-1">
                Home
              </a> 
              <a href="/about">About Us</a>
              <a href="/recipes">Recipe</a>
              <a href="/contact">Contact</a>
            </p>

            <p className="footer-company-name">MyFood © 2023</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>Sahyadri Campus</span> Adyar,Mangaluru
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+91-8877995544</p>
            </div>

            <div className="footer-connect">
          <div className="footer-contact">
            <span className="footer-icon">📧</span> <a href="mailto:info@healthcare.com">info@Foodies.com</a>
          </div>
          <div className="footer-contact">
            <span className="footer-icon">🐦</span> <a href="https://twitter.com/HealthcareHQ" target="_blank">@Foodies</a>
          </div>
          <div className="footer-contact">
            <span className="footer-icon">📷</span> <a href="https://www.instagram.com/healthcare_official" target="_blank">@Foodies_official</a>
          </div>
          <div className="footer-contact">
            <span className="footer-icon">📘</span> <a href="https://www.facebook.com/HealthcarePage" target="_blank">/FoodiesPage</a>
          </div>
          </div>
          </div>
         

          <div className="footer-right">
            <p style={{ color: "inherit" }} className="footer-company-about">
              <span>About the company</span>
              Welcome to Foodies – Your Trusted Food Recipe Website.

At Foodies, we are dedicated to providing top-notch recipe by users and information to cook delicious foods for individuals and communities to lead healthier lives. 
            </p>

            <div className="footer-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;