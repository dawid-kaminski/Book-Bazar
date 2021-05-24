import React, {useState} from 'react';
import './App.css';
import Header from './header/Header.js';
import Navbar from './navbar/Navbar.js';
import Article from './article/Article.js';
import BookList from './bookList/BookList.js';
import BookPage from './bookPage/BookPage.js';
import BookNavbar from './BookNavbar/BookNavbar.js';
import CheckOut from './yourOrder/checkout.js';
import LogInPopUp from './logInPopUp/LogInPopUp.js';
import Basket from './basket/Basket.js';
import Faq from './faq/Faq.js';
import AddAddress from './yourOrder/AddAddress.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [isLogInPopUpOpen, setIsLogInPopUpOpen] = useState(false);

  const [isDeliveryAddAddressOpen, setIsDeliveryAddAddressOpen] = useState(false);

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
            {isLogInPopUpOpen === true ? <LogInPopUp setIsLogInPopUpOpen ={setIsLogInPopUpOpen}></LogInPopUp> : null }
            <CheckOut setIsDeliveryAddAddressOpen={setIsDeliveryAddAddressOpen} />  
            {isDeliveryAddAddressOpen === true ? <AddAddress setIsDeliveryAddAddressOpen ={setIsDeliveryAddAddressOpen}></AddAddress> : null }
          </Route>
          <Route exact path="/faq">
            {isLogInPopUpOpen === true ? <LogInPopUp setIsLogInPopUpOpen ={setIsLogInPopUpOpen}></LogInPopUp> : null }
            <Faq></Faq>  
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
