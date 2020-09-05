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
                <FontAwesomeIcon icon={faArrowLeft} color="#77798C" />
                Return
              </button>
            </div>
            <div className="book-page-picture-styling">

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
