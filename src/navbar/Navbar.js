import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-banner">
        Your own books store
      </div>
      <div className="navbar-banner-description">
        Get your favorite books from our wide range of books.
      </div>
      <div className="navbar-search-bar-container">
        <div className="navbar-search-bar">
          <div className="navbar-search-bar-book">
            book
          </div>
          <input type="search" name="search" placeholder="Search your products from here" />
          <div className="navbar-search-bar-search">
            <div className="navbar-search-bar-search-icon">
              <FontAwesomeIcon icon={faSearch} color="white"/>
            </div>
            Search
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
