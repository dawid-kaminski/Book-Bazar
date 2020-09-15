import React, {useState} from 'react';
import './BookPage.css';
import Header from '../header/Header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faFeatherAlt } from '@fortawesome/free-solid-svg-icons'

// function useState(defaultValue) {
//   const value = defaultValue
//   const set=(setValue)=>{
//     value = setValue
//   }
//   return [value, set]
// }

function BookPage() {

  const [count, setCount] = useState(1)
// const count = useState(1)[0]
// const setCount = useState(1)[1]

  var onClickButtonLeft=()=>{
    if (count > 0) {
      setCount(count - 1)
    }
  }

  var onClickButtonRight=()=>{
    setCount(count + 1)
  }

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
              <img src="https://siedmiorog.pl/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/r/proces_prz_1_.jpg" height="450px" width="300px" />
            </div>
          </div>
          <div className="book-page-info">
            <div className="book-page-info-title">
              Proces
            </div>
            <div className="book-page-info-author">
              <div className="feather-icon">
                <FontAwesomeIcon icon={faFeatherAlt} color="##0D1136" />
              </div>
              Franz Kafka
            </div>
            <div className="book-page-info-description">
              Głównym bohaterem powieści jest Józef K., kawaler,
              prokurent bankowy, mieszkający w nieznanym z nazwy mieście,
              określanym jako „stolica”. Pewnego dnia budzi się w swoim
              mieszkaniu i zostaje zaskoczony najściem urzędników, którzy
              oświadczają mu, że zostaje aresztowany, mimo iż nic złego
              nie popełnił. Mimo aresztowania może prowadzić normalne życie,
              musi jedynie pozostać do dyspozycji sądu. Pomimo pozorów
              normalności w życiu K. następuje seria absurdalnych,
              niezrozumiałych wydarzeń.
              <a href="#">Read More</a>
            </div>
            <div className="book-page-info-details">
              <div className="book-page-info-category">
                __typename
              </div>
              <div className="book-page-info-category-reply">
                Meta
              </div>
              <div className="book-page-info-category">
                Publisher
              </div>
              <div className="book-page-info-category-reply">
                Princenton Public Library
              </div>
              <div className="book-page-info-category">
                ISBN
              </div>
              <div className="book-page-info-category-reply">
                978-8-8929-3288-3
              </div>
              <div className="book-page-info-category">
                Edition
              </div>
              <div className="book-page-info-category-reply">
                New Edition, 2013
              </div>
              <div className="book-page-info-category">
                Languages
              </div>
              <div className="book-page-info-category-reply">
                Polish
              </div>
              <div className="book-page-info-category">
                Country
              </div>
              <div className="book-page-info-category-reply">
                Poland
              </div>
              <div className="book-page-info-category">
                Number of reader
              </div>
              <div className="book-page-info-category-reply">
                30000
              </div>
            </div>
            <div className="book-page-info-price">
              $25
            </div>
            <div className="book-page-info-button">
              <button className="button-left" onClick={onClickButtonLeft}>-</button>{count}
              <button className="button-right" onClick={onClickButtonRight}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
