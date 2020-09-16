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
              <div className="book-page-info-product-details">
                __typename
              </div>
              <div className="book-page-info-product-details-reply">
                Meta
              </div>
              <div className="book-page-info-product-details">
                Publisher
              </div>
              <div className="book-page-info-product-details-reply">
                Princenton Public Library
              </div>
              <div className="book-page-info-product-details">
                ISBN
              </div>
              <div className="book-page-info-product-details-reply">
                978-8-8929-3288-3
              </div>
              <div className="book-page-info-product-details">
                Edition
              </div>
              <div className="book-page-info-product-details-reply">
                New Edition, 2013
              </div>
              <div className="book-page-info-product-details">
                Languages
              </div>
              <div className="book-page-info-product-details-reply">
                Polish
              </div>
              <div className="book-page-info-product-details">
                Country
              </div>
              <div className="book-page-info-product-details-reply">
                Poland
              </div>
              <div className="book-page-info-product-details">
                Number of reader
              </div>
              <div className="book-page-info-product-details-reply">
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
            <div className="book-page-info-category">
              Novel
            </div>
          </div>
        </div>
      </div>
      <div className="about-the-book-section">
        <div className="about-the-book">
          About The Book
          <div className="about-the-book-description">
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
        <div className="about-the-author">
          About The Author
          <div className="book-page-info-author-bottom">
            <div className="feather-icon">
              <FontAwesomeIcon icon={faFeatherAlt} color="##0D1136" />
            </div>
            Franz Kafka
          </div>
          <div className="about-the-author-description">
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
      </div>
    </div>
  );
}

export default BookPage;
