import React, {useState} from 'react';
import './BookPage.css';
import Header from '../header/Header.js';
import BookList from '../bookList/BookList.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faFeatherAlt } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { getBookById } from '../bookData.js';

// function useState(defaultValue) {
//   const value = defaultValue
//   const set=(setValue)=>{
//     value = setValue
//   }
//   return [value, set]
// }

function BookPage() {

  let { bookId } = useParams();

  const book = getBookById(bookId);
  console.log(book)

// let url = useParams()
// console.log(url.bookId)
// let bookId = url.bookId

  const [count, setCount] = useState(1)
// const count = useState(1)[0]
// const setCount = useState(1)[1]

// const useStateTable = useState(1)
// const count = useStateTable[0]
// const setCount = useState[1]
// useState zwraca tablice, której zerowym elementem jest zmienna count, która będzie przechowywać naszą wartość (liczbę), a drugim elementem tej tablicy jest funkcja, która będzie zmieniać tą wartość.

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
      <div className="book-page__layout">
        <div className="book-page__picture-info">
          <div className="book-page__picture">
            <div className="book-page__return-button">
              <button type="button">
                <div className="button-arrow">
                  <FontAwesomeIcon icon={faArrowLeft} color="#77798C" />
                </div>
                Back
              </button>
            </div>
            <div className="book-page__picture-styling">
              <img src={book.img} height="450px" width="300px" />
            </div>
          </div>
          <div className="book-page__info">
            <div className="book-page__title">
              {book.title}
            </div>
            <div className="book-page__author">
              <div className="feather-icon">
                <FontAwesomeIcon icon={faFeatherAlt} color="##0D1136" />
              </div>
              {book.author}
            </div>
            <div className="book-page__description">
              {book.description}
              <a href="#bookinfo">Read More</a>
            </div>
            <div className="book-page__details">
              <div className="book-page__product-details">
                __typename
              </div>
              <div className="book-page__book-detail">
                Meta
              </div>
              <div className="book-page__product-details">
                Publisher
              </div>
              <div className="book-page__book-detail">
                Princenton Public Library
              </div>
              <div className="book-page__product-details">
                ISBN
              </div>
              <div className="book-page__book-detail">
                978-8-8929-3288-3
              </div>
              <div className="book-page__product-details">
                Edition
              </div>
              <div className="book-page__book-detail">
                New Edition, 2013
              </div>
              <div className="book-page__product-details">
                Languages
              </div>
              <div className="book-page__book-detail">
                Polish
              </div>
              <div className="book-page__product-details">
                Country
              </div>
              <div className="book-page__book-detail">
                Poland
              </div>
              <div className="book-page__product-details">
                Number of reader
              </div>
              <div className="book-page__book-detail">
                30000
              </div>
            </div>
            <div className="book-page__info-price">
              $25
            </div>
            <div className="book-page__info-button">
              <button className="button-sign" onClick={onClickButtonLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="2px" viewBox="0 0 12 2"><rect data-name="Rectangle 522" width="12" height="2" rx="1" fill="currentColor"></rect></svg>
              </button>{count}
              <button className="button-sign" onClick={onClickButtonRight}>+</button>
            </div>
            <div className="book-page__info-category">
              Novel
            </div>
          </div>
        </div>
      </div>
      <div id="bookinfo" className="book-page__book-section">
        <div className="book-description">
          About The Book
          <div className="book-page__description">
            Głównym bohaterem powieści jest Józef K., kawaler, prokurent
            bankowy, mieszkający w nieznanym z nazwy mieście, określanym jako
            „stolica”. Pewnego dnia budzi się w swoim mieszkaniu i zostaje
            zaskoczony najściem urzędników, którzy oświadczają mu, że zostaje
            aresztowany, mimo iż nic złego nie popełnił. Mimo aresztowania może
            prowadzić normalne życie, musi jedynie pozostać do dyspozycji sądu.
            Pomimo pozorów normalności w życiu K. następuje seria absurdalnych,
            niezrozumiałych wydarzeń. Wiadomość o aresztowaniu dochodzi do
            wszystkich znajomych Józefa, który staje się dla nich pariasem.
            Na przesłuchaniach K. nieudolnie protestuje przeciwko osaczeniu go
            przez władzę sądową, nie udaje mu się jednak zmienić tej sytuacji.
            Wobec tego szuka pomocy u innych: żony woźnego sądowego (która
            okazuje się prostytutką), wuja Karola, prawnika Hulda, malarza
            sądowego Titorelliego, innego oskarżonego – Blocka, w końcu u
            więziennego kapelana (który stara się naświetlić jego sytuację
            poprzez przypowieść). Uzyskane przez niego informacje są jednak
            niepełne i niespójne.
          </div>
        </div>
        <div className="book-page__about">
          About The Author
          <div className="book-page__author--bottom">
            <div className="feather-icon">
              <FontAwesomeIcon icon={faFeatherAlt} color="##0D1136" />
            </div>
            Franz Kafka
          </div>
          <div className="book-page__author-description">
             niemieckojęzyczny pisarz pochodzenia żydowskiego, przez całe życie
             związany z Pragą. W swoich powieściach stworzył model sytuacji
             zwanej sytuacją kafkowską i określanej w języku niemieckim za
             pomocą przymiotnika „kafkaesk”, którego istotą jest konflikt
             zniewolonej jednostki z anonimową, nadrzędną wobec niej instancją.
             Deformacja groteskowa, niejednoznaczne, paraboliczne obrazy oraz
             poczucie zagrożenia i niepewności składają się na panoramę
             literackiego świata Kafki.
          </div>
        </div>
        <div className="book-page__related">Related items
        </div>
      </div>
      <div className="book-page__related-books"><BookList></BookList></div>
    </div>
  );
}

export default BookPage;
