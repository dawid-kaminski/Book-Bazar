import React from 'react';
import './App.css';
import Header from './header/Header.js';
import Navbar from './navbar/Navbar.js';
import Article from './article/Article.js';
import BookList from './bookList/BookList.js';
import Footer from './footer/Footer.js';
import BookPage from './bookPage/BookPage.js';

function App() {
  return (
    <div className="App">
{/*   <Header></Header>
      <Navbar></Navbar>
      <Article></Article>
      <Footer></Footer>
      <BookList></BookList> */}
      <BookPage></BookPage>
    </div>
  );
}

export default App;
