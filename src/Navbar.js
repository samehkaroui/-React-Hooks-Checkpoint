import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Movie App</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#add-movie">Add Movie</a></li>
        <li><a href="#filter">Filter</a></li>
        <li><a href="#movies">Movies</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
