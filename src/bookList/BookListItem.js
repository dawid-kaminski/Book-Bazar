import React from 'react';
import './BookListItem.css';

function BookListItem(props) {
  var onClickBook=()=>{
    console.log(props.title)
  }

  return (
    <div className="book-list-item" onClick={onClickBook}>
    <img src={props.img} height="180px" width="140px" />
      {props.title}
    </div>
    );
}

export default BookListItem;
