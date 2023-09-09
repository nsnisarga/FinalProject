import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import your logo image
import logo from './Images/logo.jpg'; // Make sure to replace 'logo.png' with your actual logo file name

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md justify-content-center bg-primary navbar-dark">
        <Link className="navbar-brand" to="/">
         &nbsp;&nbsp;
        <img src={logo} alt="Logo" className="navbar-logo" style={{ width: '60px', height: '60px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link></li>
        </ul>
          
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/recipes" className="nav-link active">Recipe</Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link active">About</Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/contact" className="nav-link active">Contact</Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/add" className="nav-link active">Add recipe</Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/search" className="nav-link active">Search</Link>
          </li>
        </ul>
        <div className="container-fluid">
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/signup" className="nav-link">Signup</Link>
              </li> 
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
