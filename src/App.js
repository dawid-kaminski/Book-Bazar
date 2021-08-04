import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header.js";
import Navbar from "./navbar/Navbar.js";
import Article from "./article/Article.js";
import BookList from "./bookList/BookList.js";
import BookPage from "./bookPage/BookPage.js";
import BookNavbar from "./BookNavbar/BookNavbar.js";
import CheckOut from "./yourOrder/checkout.js";
import LogInPopUp from "./logInPopUp/LogInPopUp.js";
import Basket from "./basket/Basket.js";
import Faq from "./faq/Faq.js";
import OrderSummary from "./orderSummary/OrderSummary.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [isLogInPopUpOpen, setIsLogInPopUpOpen] = useState(false);

  return (
    <div className="router">
      <Router>
        <div className="app">
          <Header setIsLogInPopUpOpen={setIsLogInPopUpOpen} />
          <Switch>
            <Route exact path="/">
              {isLogInPopUpOpen === true ? (
                <LogInPopUp setIsLogInPopUpOpen={setIsLogInPopUpOpen} />
              ) : null}
              <Navbar />
              <div className="app__body">
                <Article />
                <div className="app__book-list">
                  <BookNavbar />
                  <Basket />
                  <BookList />
                </div>
              </div>
            </Route>
            <Route exact path="/book/:bookId">
              <Basket />
              <BookPage />
            </Route>
            <Route exact path="/checkout">
              {isLogInPopUpOpen === true ? (
                <LogInPopUp setIsLogInPopUpOpen={setIsLogInPopUpOpen} />
              ) : null}
              <CheckOut />
            </Route>
            <Route exact path="/faq">
              {isLogInPopUpOpen === true ? (
                <LogInPopUp setIsLogInPopUpOpen={setIsLogInPopUpOpen} />
              ) : null}
              <Faq />
            </Route>
            <Route exact path="/order-summary">
              {isLogInPopUpOpen === true ? (
                <LogInPopUp setIsLogInPopUpOpen={setIsLogInPopUpOpen} />
              ) : null}
              <OrderSummary />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
