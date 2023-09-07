import React from 'react'
import Home from './Components/Home';
import About from './Components/About';
import Recipes from './Components/Recipes';
import Login from './Components/Login';
import Signup from './Components/Signup';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import AddRecipe from './Components/Addrecipes';
import SearchBar from './Components/SearchBar';
function App() {
  return (
    <>
        <BrowserRouter>
        <NavBar/>
          <Routes>
               <Route exact path="/" element={<Home/>}/>
               <Route exact path="/about" element={<About/>}/>
               <Route path="/recipes" element={<Recipes/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/contact" element={<Contact/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/add" element={<AddRecipe/>}/>
               <Route path="/search" element={<SearchBar/>}/>

          </Routes> 
          <Footer/>   
        </BrowserRouter>
        
        
    </>
  )
}

export default App