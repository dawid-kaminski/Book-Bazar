import React from 'react';
import './BookList.css';
import BookListItem from './BookListItem.js';

function BookList() {
  return (
    <div className="book-list">
      <BookListItem title="Harry Potter" img="https://livro.pl/media/catalog/product/cache/1/image/555x555/602f0fa2c1f0d1ba5e241f914e856ff9/1/4/14708446854683315.jpg_2.jpg"></BookListItem>
      <BookListItem title="Władca Pierścieni" img="https://ecsmedia.pl/c/wladca-pierscieni-druzyna-pierscienia-dwie-wieze-powrot-krola-w-iext41745185.jpg"></BookListItem>
      <BookListItem title="Szczęście Rodzinne" img="https://cf2-taniaksiazka.statiki.pl/images/large/35D/@9788726184952_52.jpg"></BookListItem>
      <BookListItem title="Listonosz" img="https://cdn-lubimyczytac.pl/upload/books/247000/247064/357033-352x500.jpg"></BookListItem>
      <BookListItem title="Proces" img="https://image.ceneostatic.pl/data/products/25978187/i-proces-franz-kafka.jpg"></BookListItem>
      <BookListItem title="Harry Potter" img="https://livro.pl/media/catalog/product/cache/1/image/555x555/602f0fa2c1f0d1ba5e241f914e856ff9/1/4/14708446854683315.jpg_2.jpg"></BookListItem>
      <BookListItem title="Władca Pierścieni" img="https://ecsmedia.pl/c/wladca-pierscieni-druzyna-pierscienia-dwie-wieze-powrot-krola-w-iext41745185.jpg"></BookListItem>
      <BookListItem title="Szczęście Rodzinne" img="https://cf2-taniaksiazka.statiki.pl/images/large/35D/@9788726184952_52.jpg"></BookListItem>
      <BookListItem title="Listonosz" img="https://cdn-lubimyczytac.pl/upload/books/247000/247064/357033-352x500.jpg"></BookListItem>
      <BookListItem title="Proces" img="https://image.ceneostatic.pl/data/products/25978187/i-proces-franz-kafka.jpg"></BookListItem>
    </div>
    );
}

export default BookList;
