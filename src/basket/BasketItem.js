import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { getBookById } from "../bookData.js";
import { addBookToCart, removeBookFromCart } from "../ducks/cart.js";
import { useDispatch } from "react-redux";

function BasketItem(props) {
  const bookDetails = getBookById(props.book.id);

  const bookTotalPrice = bookDetails.price * props.book.amount;

  const dispatch = useDispatch();

  const onClickPlusButton = useCallback(() => {
    dispatch(addBookToCart({ bookId: props.book.id, bookAmount: 1 }));
  }, [props.book.id, dispatch]);

  const onClickMinusButton = useCallback(() => {
    dispatch(removeBookFromCart({ bookId: props.book.id, bookAmount: 1 }));
  }, [props.book.id, dispatch]);

  const onClickRemoveBook = useCallback(() => {
    dispatch(
      removeBookFromCart({
        bookId: props.book.id,
        bookAmount: props.book.amount,
      })
    );
  }, [props.book.id, props.book.amount, dispatch]);

  return (
    <div className="open-basket__item">
      <div className="open-basket__book-counter">
        <button
          className="open-basket__plus-counter--button"
          onClick={onClickPlusButton}
        >
          <FontAwesomeIcon icon={faPlus} color="#rgb(119, 121, 140)" />
        </button>
        <div className="open-basket__book-count">{props.book.amount}</div>
        <button
          className="open-basket__minus-counter--button"
          onClick={onClickMinusButton}
        >
          <FontAwesomeIcon icon={faMinus} color="#rgb(119, 121, 140)" />
        </button>
      </div>
      <div className="open-basket__book-picture">
        <img src={bookDetails.img} alt="" height="60px" width="60px" />
      </div>
      <div className="open-basket__book-details">
        <div className="open-basket__book-title">{bookDetails.title}</div>
        <div className="open-basket__book-piece-price">
          ${bookDetails.price}
        </div>
      </div>
      <div className="open-basket__book-total-price">${bookTotalPrice}</div>
      <div className="open-basket__book-cancelation">
        <button
          className="open-basekt__close--button"
          onClick={onClickRemoveBook}
        >
          <FontAwesomeIcon icon={faTimes} size="1x" />
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
