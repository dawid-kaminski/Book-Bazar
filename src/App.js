import React from 'react';
import './App.css';
import Header from './header/Header.js';
import Navbar from './navbar/Navbar.js';
import Article from './article/Article.js';
import BookList from './bookList/BookList.js';
import Footer from './footer/Footer.js';
import BookPage from './bookPage/BookPage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Navbar></Navbar>
            <Article></Article>
{/*             <Footer></Footer> */}
            <BookList></BookList>
          </Route>
          <Route exact path="/bookpage">
            <BookPage></BookPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
