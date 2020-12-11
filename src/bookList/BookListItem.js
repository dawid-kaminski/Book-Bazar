import React from 'react';
import {
  useHistory
} from "react-router-dom";
import './BookListItem.css';
import { getAllBooks } from '../bookData.js';

function BookListItem(props) {

  const history = useHistory()

  var onClickBook=()=>{
    console.log(props)
    console.log(history)
    history.push(`/book/${props.id}`)
  }

console.log(props.title)

  return (
      <div className="book-list-item" onClick={onClickBook}>
        <img src={props.img} height="180px" width="140px" />
        <div className="book-title">
          {props.title}
          {props.author}
        </div>
      </div>
    );
}

export default BookListItem;
