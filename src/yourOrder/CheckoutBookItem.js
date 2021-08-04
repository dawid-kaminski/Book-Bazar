import React from "react";
import "./CheckoutBookItem.css";
import { getBookById } from "../bookData.js";

function CheckoutBookItem(props) {
  const bookDetails = getBookById(props.book.id);

  const bookTotalPrice = bookDetails.price * props.book.amount;

  return (
    <div className="checkout-book-item">
      <div className="checkout-book-item__amount">{props.book.amount}</div>
      <div className="checkout-book-item__multiply">x</div>
      <div className="checkout-book-item__title">{bookDetails.title}</div>
      <div className="checkout-book-item__price">${bookTotalPrice}</div>
    </div>
  );
}

export default CheckoutBookItem;
