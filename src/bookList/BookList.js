import React from 'react';
import './BookList.css';
import BookListItem from './BookListItem.js';

const books = [
  {
    title: "Harry Potter",
    img: "https://livro.pl/media/catalog/product/cache/1/image/555x555/602f0fa2c1f0d1ba5e241f914e856ff9/1/4/14708446854683315.jpg_2.jpg"
  },
  {
    title: "Władca Pierścieni",
    img: "https://ecsmedia.pl/c/wladca-pierscieni-druzyna-pierscienia-dwie-wieze-powrot-krola-w-iext41745185.jpg"
  },
  {
    title: "Szczęście Rodzinne",
    img: "https://cf2-taniaksiazka.statiki.pl/images/large/35D/@9788726184952_52.jpg"
  },
  {
    title: "Listonosz",
    img: "https://cdn-lubimyczytac.pl/upload/books/247000/247064/357033-352x500.jpg"
  },
]

function BookList() {
  return (
    <div className="book-list">
      {
        books.map((book)=>{
          return <BookListItem title={book.title} img={book.img} ></BookListItem>
        })
      }
    </div>
    );
}

export default BookList;
