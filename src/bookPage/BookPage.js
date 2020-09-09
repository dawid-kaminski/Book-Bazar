import React from 'react';
import './BookPage.css';
import Header from '../header/Header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function BookPage() {
  return (
    <div className="book-page">
      <Header></Header>
      <div className="book-page-layout">
        <div className="book-page-picture-info">
          <div className="book-page-picture">
            <div className="book-page-picture-return-button">
              <button type="button">
                <div className="button-arrow">
                  <FontAwesomeIcon icon={faArrowLeft} color="#77798C" />
                </div>
                Back
              </button>
            </div>
            <div className="book-page-picture-styling">
              <img src="https://siedmiorog.pl/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/r/proces_prz_1_.jpg" height="450px" width="450px" />
            </div>
          </div>
          <div className="book-page-info">

          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
