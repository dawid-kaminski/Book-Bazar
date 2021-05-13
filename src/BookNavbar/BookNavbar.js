import React from 'react';
import './BookNavbar.css';
import BookGenre from './bookGenre/BookGenre.js';

const data = [
  {
    value: "all",
    name: "All",
  },
  {
    value: "children_literature",
    name: "Children Literature",
  },
  {
    value: "comic_book",
    name: "Comic Book"
  },
  {
    value: "fantasy",
    name: "Fantasy"
  },
  {
    value: "horror",
    name: "Horror"
  },
  {
    value: "novel",
    name: "Novel"
  },
  {
    value: "romantic",
    name: "Romantic"
  },
  {
    value: "science_fiction",
    name: "Science Fiction"
  },
  {
    value: "thriller",
    name: "Thriller"
  },
]

export function getAllData() {
  return data;
}

function BookNavbar() {
  return (
    <div className="bookNavbar">
    {
      data.map((genre)=>{
        return <BookGenre name={genre.name} value={genre.value}></BookGenre>
      })
    }
    </div>
  );
}

export default BookNavbar;
