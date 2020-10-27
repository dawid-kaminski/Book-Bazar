import React from 'react';
import {
  useHistory
} from "react-router-dom";
import './BookListItem.css';

function BookListItem(props) {

  const history = useHistory()

  var onClickBook=()=>{
    console.log(props)
    console.log(history)
    history.push(`/book/${props.id}`)
  }

  return (
      <div className="book-list-item" onClick={onClickBook}>
        <img src={props.img} height="180px" width="140px" />
        {props.title}
      </div>
    );
}

export default BookListItem;
