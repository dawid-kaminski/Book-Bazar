import React, { useState, useCallback } from "react";
import "./BookPage.css";
import BookList from "../bookList/BookList.js";
import { addBookToCart } from "../ducks/cart";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { getBookById } from "../bookData.js";

function BookPage() {
  const dispatch = useDispatch();
  let { bookId } = useParams();

  const book = getBookById(bookId);

  const [count, setCount] = useState(1);

  var onClickButtonLeft = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  var onClickButtonRight = () => {
    setCount(count + 1);
  };

  const onClick = useCallback(() => {
    dispatch(addBookToCart({ bookId: book.id, bookAmount: count }));
  }, [book.id, count, dispatch]);

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
              <img src={book.img} height="450px" width="300px" alt="" />
            </div>
          </div>
          <div className="book-page__info">
            <div className="book-page__title">{book.title}</div>
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
              <div className="book-page__product-details">__typename</div>
              <div className="book-page__book-detail">Meta</div>
              <div className="book-page__product-details">Publisher</div>
              <div className="book-page__book-detail">
                Princenton Public Library
              </div>
              <div className="book-page__product-details">ISBN</div>
              <div className="book-page__book-detail">978-8-8929-3288-3</div>
              <div className="book-page__product-details">Edition</div>
              <div className="book-page__book-detail">New Edition, 2013</div>
              <div className="book-page__product-details">Languages</div>
              <div className="book-page__book-detail">Polish</div>
              <div className="book-page__product-details">Country</div>
              <div className="book-page__book-detail">Poland</div>
              <div className="book-page__product-details">Number of reader</div>
              <div className="book-page__book-detail">30000</div>
            </div>
            <div className="book-page__info-price">{book.price}$</div>
            <div className="book-page__info-button">
              <div class="button">
                <button className="button-sign" onClick={onClickButtonLeft}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    height="2px"
                    viewBox="0 0 12 2"
                  >
                    <rect
                      data-name="Rectangle 522"
                      width="12"
                      height="2"
                      rx="1"
                      fill="currentColor"
                    ></rect>
                  </svg>
                </button>
                {count}
                <button className="button-sign" onClick={onClickButtonRight}>
                  +
                </button>
              </div>
              <div className="book-page__info-add--button">
                <button type="button" onClick={onClick}>
                  Add to cart
                </button>
              </div>
            </div>
            <div className="book-page__info-category">Novel</div>
          </div>
        </div>
      </div>
      <div id="bookinfo" className="book-page__book-section">
        <div className="book-description">
          About The Book
          <div className="book-page__description">{book.description}</div>
        </div>
        <div className="book-page__about">
          About The Author
          <div className="book-page__author--bottom">
            <div className="feather-icon">
              <FontAwesomeIcon icon={faFeatherAlt} color="##0D1136" />
            </div>
            {book.author}
          </div>
          <div className="book-page__author-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className="book-page__related">Related items</div>
      </div>
      <div className="book-page__related-books">
        <BookList></BookList>
      </div>
    </div>
  );
}

export default BookPage;
