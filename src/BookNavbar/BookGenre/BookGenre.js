import React from 'react';
import './BookGenre.css';

function BookGenre(props) {
  return (
    <div className="book-genre">
      {props.name}
    </div>
  );
}

export default BookGenre;
