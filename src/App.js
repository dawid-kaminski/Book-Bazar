import React, {useState} from 'react';
import './App.css';
import Header from './header/Header.js';
import Navbar from './navbar/Navbar.js';
import Article from './article/Article.js';
import BookList from './bookList/BookList.js';
import BookPage from './bookPage/BookPage.js';
import BookNavbar from './BookNavbar/BookNavbar.js';
import CheckOut from './yourOrder/Checkout.js';
import LogInPopUp from './logInPopUp/LogInPopUp.js';
import Basket from './basket/Basket.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [isLogInPopUpOpen, setIsLogInPopUpOpen] = useState(false);

  return (
    <Router>
      <div className="app">
      <Header setIsLogInPopUpOpen ={setIsLogInPopUpOpen}></Header>
        <Switch>
          <Route exact path="/">
            {isLogInPopUpOpen === true ? <LogInPopUp setIsLogInPopUpOpen ={setIsLogInPopUpOpen}></LogInPopUp> : null }
            <Navbar></Navbar>
            <div className="app__body">
              <Article></Article>
              <div className="app__book-list">
                <BookNavbar></BookNavbar>
                <Basket></Basket>
                <BookList></BookList>
              </div>
            </div>
          </Route>
          <Route exact path="/book/:bookId">
            <Basket></Basket>
            <BookPage></BookPage>
          </Route>
          <Route exact path="/checkout">
            <CheckOut></CheckOut>  
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
