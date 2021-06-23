import React from 'react';
import {
  useHistory
} from "react-router-dom";
import './BookListItem.css';

function BookListItem(props) {

  const history = useHistory()

  var onClickBook=()=>{

    history.push(`/book/${props.id}`)
  }

  return (
    <div className="book-list-item" onClick={onClickBook}>
      <div className="book-list-item__img"><img src={props.img} height="180px" width="140px" /></div>
      <div className="book-list-item__book">
        <div className="book-list-item__book-title">{props.title}</div>
        <div className="book-list-item__book-author">{props.author}</div>
      </div>
    </div>
  );
}

export default BookListItem;
