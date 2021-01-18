import React from 'react';
import './BookList.css';
import BookListItem from './BookListItem.js';
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function useQuery() {

console.log(new URLSearchParams(useLocation().search))

  console.log(new URLSearchParams(useLocation().search).get("genre"))
  return new URLSearchParams(useLocation().search);
}

function BookList() {
  const booklistStore = useSelector((state)=>state).booklist
  console.log(booklistStore)

  const query = useQuery();
  console.log(query)
  const genre = query.get("genre")

  return (
    <div className="book-list">
      {
        booklistStore.filter(book=>{
          if(genre === null){
            return true
          }
          return book.types.includes(genre)
        }).map((book)=>{
          return <BookListItem title={book.title} img={book.img} id={book.id} author={book.author} ></BookListItem>
        })
      }
      <button type="button">
        <div className="button-div">
          Load More
        </div>
      </button>
    </div>
    );
}

export default BookList;
