import React from 'react';
import './BookList.css';
import BookListItem from './BookListItem.js';
import { useLocation } from "react-router-dom";
import { getAllBooks } from '../bookData.js';

function useQuery() {
  console.log(new URLSearchParams(useLocation().search).get("genre"))
  return new URLSearchParams(useLocation().search);
}

function BookList() {

  const query = useQuery();
  console.log(query)
  const genre = query.get("genre")

  return (
    <div className="book-list">
      {
        getAllBooks().filter(book=>{
          if(genre === null){
            return true
          }
          return book.types.includes(genre)
        }).map((book)=>{
          return <BookListItem title={book.title} img={book.img} id={book.id} author={book.author} ></BookListItem>
        })
      }
    </div>
    );
}

export default BookList;
