import React from 'react';
import './BookGenre.css';

var onClickBook=()=>{
  console.log("props")
}

function BookGenre(props) {
  return (
    <div className="book-genre" onClick={onClickBook}>
      {props.name}
    </div>
  );
}

export default BookGenre;
