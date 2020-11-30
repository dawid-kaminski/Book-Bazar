import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-banner">
        Your own books store
      </div>
      <div className="navbar-banner-description">
        Get your favorite books from our wide range of books.
      </div>
      <div className="navbar-search-bar">
        <input type="search" name="search" placeholder="Search your products from here" />
      </div>
    </div>
  );
}

export default Navbar;
