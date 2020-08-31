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
  {
    title: "Duma i uprzedzenie",
    img: "https://www.nexto.pl/converter?t=11&img=%2Fupload%2Fsklep%2Fzielona_sowa%2Febook%2Fduma_i_uprzedzenie-jane_austin-zielona_sowa%2Fpublic%2Fduma_i_uprzedzenie-zielona_sowa-ebook-cov.jpg"
  },
  {
    title: "Wielki Gatsby",
    img: "https://ecsmedia.pl/c/wielki-gatsby-w-iext41765483.jpg"
  },
  {
    title: "Obrona Sokratesa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShb9SH5Y3KOLCEXK4s-12w5jzzlXA-Bu7JN2ekk7F9ZwdJ__C63Kg5IB31sw&usqp=CAc"
  },
  {
    title: "Proces",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH5ICCfKsR1V0a_iOpCKkWdgoqbddcEVcADdUFhc4Fj_b0S4xuUO18B621LPINDeVb77VLRKQ&usqp=CAc"
  },
  {
    title: "Nieznośna lekkość bytu",
    img: "https://ecsmedia.pl/c/nieznosna-lekkosc-bytu-b-iext43789567.jpg"
  },
  {
    title: "Małe życie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQurjLnrtjY-7uSDTkrOnvTgC1mnPvKjNh2SY4j9VLup86CG3mBTUnzwaNyAZq1HtruHkLG8&usqp=CAc"
  },
  {
    title: "Zbrodnia i Kara",
    img: "https://www.nieprzeczytane.pl/images/photos/okladki/1025/1024645/__b_9788365755377.jpg"
  },
  {
    title: "Dziennik Geniusza",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPmyKNuDSBqrKW0UQa4ygyQDjAoZfz-3mv3cBnhgumkjqAQlw4OLD-yGZD3fp_5rmSCUqldF4&usqp=CAc"
  },
  {
    title: "Wstęp do psychoanalizy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjF7Bvn50Zh6hyGXMxYB6iXhxv_gIJKWEWfoPlniH_rE_FV3MGP5RCarhFXYNySeG1GT29QEXi&usqp=CAc"
  },
  {
    title: "Sto lat samotności",
    img: "https://cdn-lubimyczytac.pl/upload/books/123000/123498/310421-352x500.jpg"
  },
  {
    title: "Sztuka Wojny",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvqQXbOzzuT1alza7YSgnsJUMcIts3UeJ62ef-8ZBPn6oOunubL6y6hIEEnw&usqp=CAc"
  },
  {
    title: "Mały Książę",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxueK3v1Y6zY37fmfUF403tlS90WOXYCGnzKU2-xTZicc6y-YOcBqBj7arz4U-9lAawKpNQYI&usqp=CAc"
  },
  {
    title: "Folwark Zwierzęcy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGF6ZRwkzVq9sr0_dvBSJUDjsBdfxMWCWFjmntWDxIMhyOpviFlvGn2YyQL8qnOntWPc38QQY&usqp=CAc"
  },
  {
    title: "Podziemny krąg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhSnJDJcIliu5pNC24rifjU4ZbTpzA-9xrgmBHl8NKty1ZcKQnODhm8-YzIqM&usqp=CAc"
  },
  {
    title: "Mechaniczna Pomarańcza",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZFVQOeN6iBRsE0xpUpkz0lZY6erJpIm2PEiEJGwY0eMNPZK4Gio0YfdeZnQ&usqp=CAc"
  },
  {
    title: "Pozostawieni",
    img: "https://images-na.ssl-images-amazon.com/images/I/41g9+AbZrkL._SX327_BO1,204,203,200_.jpg"
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
