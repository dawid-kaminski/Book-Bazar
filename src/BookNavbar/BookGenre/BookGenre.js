import React from 'react';
import './BookGenre.css';

function BookGenre(props) {
  return (
    <div className="bookGenre">
      {props.name}
    </div>
  );
}

export default BookGenre;
