import React from "react";
import "./BookGenre.css";
import { useHistory } from "react-router-dom";
import data from "../BookNavbar.js";
import { getAllData } from "../BookNavbar.js";

function BookGenre(props) {
  const history = useHistory();

  var onClickBook = () => {
    history.push(`/?genre=${props.value}`);
  };

  return (
    <div className="book-genre" onClick={onClickBook}>
      {props.name}
    </div>
  );
}

export default BookGenre;
