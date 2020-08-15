import React from 'react';
import './BookList.css';
import BookListItem from './BookListItem.js';

function BookList() {
  return (
    <div className="book-list">
      <BookListItem title="Harry Potter" img="https://livro.pl/media/catalog/product/cache/1/image/555x555/602f0fa2c1f0d1ba5e241f914e856ff9/1/4/14708446854683315.jpg_2.jpg"></BookListItem>
      <BookListItem title="Inne1" img="https://ecsmedia.pl/c/wladca-pierscieni-druzyna-pierscienia-dwie-wieze-powrot-krola-w-iext41745185.jpg"></BookListItem>
      <BookListItem title="Inne2" img="https://ecsmedia.pl/c/wladca-pierscieni-druzyna-pierscienia-dwie-wieze-powrot-krola-w-iext41745185.jpg"></BookListItem>
      <BookListItem title="Inne3" img="https://ecsmedia.pl/c/wladca-pierscieni-druzyna-pierscienia-dwie-wieze-powrot-krola-w-iext41745185.jpg"></BookListItem>
      <BookListItem title="Inne4" img="https://ecsmedia.pl/c/wladca-pierscieni-druzyna-pierscienia-dwie-wieze-powrot-krola-w-iext41745185.jpg"></BookListItem>
    </div>
    );
}

export default BookList;
