import React from 'react';
import './BookList.css';
import BookListItem from './BookListItem.js';
import { getAllBooks } from '../bookData.js';

function BookList() {
  return (
    <div className="book-list">
      {
        getAllBooks().map((book)=>{
          return <BookListItem title={book.title} img={book.img} id={book.id} ></BookListItem>
        })
      }
    </div>
    );
}

export default BookList;
