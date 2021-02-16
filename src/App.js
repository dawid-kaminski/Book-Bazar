import React from 'react';
import './App.css';
import Header from './header/Header.js';
import Navbar from './navbar/Navbar.js';
import Article from './article/Article.js';
import BookList from './bookList/BookList.js';
import Footer from './footer/Footer.js';
import BookPage from './bookPage/BookPage.js';
import BookNavbar from './BookNavbar/BookNavbar.js';
import YourOrder from './yourOrder/yourorder.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
 {/*       <YourOrder></YourOrder>   */}
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Navbar></Navbar>
            <div className="app__body">
              <Article></Article>
              <div className="app__book-list">
                <BookNavbar></BookNavbar>
                <BookList></BookList>
              </div>
            </div>
          </Route>
          <Route exact path="/book/:bookId">
            <BookPage></BookPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
