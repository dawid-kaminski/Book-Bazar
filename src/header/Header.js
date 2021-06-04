import React, {useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import './Header.css';
import Logo from './pickbazarlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faQuestionCircle, faFlagUsa, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import LogInPopUp from '../logInPopUp/LogInPopUp.js';

function Header(props) {
  const location = useLocation()
  const history = useHistory()
  const [isFixedHeader, setIsFixedHeader] = useState(false);

  var onClickMainPage=()=>{
    history.push(``)
  }

  const onClickJoinButton = () => {
    props.setIsLogInPopUpOpen(true)
    console.log(props)
  }

  const onClickNeedHelp = () => {
    history.push('/faq')
  }

  useEffect(() => {
    const listener = (event) => {
      // console.log(event.target.getBoundingClientRect())
      if(window.scrollY > 400 && isFixedHeader === false ) {
        setIsFixedHeader(true)
        console.log("true")
      } 
      if(window.scrollY < 400 && isFixedHeader === true ) { 
        setIsFixedHeader(false)
        console.log("false")
      }
    }
    document.addEventListener('scroll', listener );
    return () => {document.removeEventListener('scroll', listener)}
  }, [isFixedHeader])
  console.log(location.pathname === "/checkout")

  return (
    <div className={(isFixedHeader === true || location.pathname === "/checkout" || location.pathname === "/faq" || location.pathname === "/order-summary") ? 'header-fixed' : 'header' } >
      <div className="header__pickbazarlogo" onClick={onClickMainPage}>
        <img src={Logo} />
      </div>
      <div className="header__left-menu">
        <div className="header__choice-placeholder">
          <div className="header__book-icon">
            <FontAwesomeIcon icon={faBook} color="#009e7f" />
          </div>
          <div className="header__book-button">
            Book
          </div>
          <div className="header__choice-placeholder-angle-down">
            <FontAwesomeIcon icon={faAngleDown} color="#009e7f" />
          </div>
        </div>
      </div>
      <div className="header__right-menu">
        <div className={(isFixedHeader === true && location.pathname !== "/checkout") ? 'header__visible-searchbar' : 'header__invisible-searchbar' } >
          <div className="header__search-bar-container">
            <div className="header__search-bar">
              <div className="header__search-icon-placeholder">
                <div className="header__search-icon">
                  <FontAwesomeIcon icon={faSearch} color="black" size="1.2x"/>
                </div>
              </div>
              <input type="search" name="search" placeholder="Search your products from here" />
            </div>
          </div>
        </div>
        <div className="header__offer">
          Offer
        </div>
        <div className="header__need-help" onClick={onClickNeedHelp}>
          <div className="header__question-mark">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
          Need Help
        </div>
        <div className="header__language-choice-placeholder">
          <button className="button-language" type="button" name="button">
            English
          </button>
          <div className="header__flag-placeholder">
            <FontAwesomeIcon icon={faFlagUsa} color="#009e7f" />
          </div>
        </div>
        <div className="header__button-join">
          <button className="button-join" type="button" name="button" onClick={onClickJoinButton} >
             Join
          </button>
        </div>
      </div>
    </div>
    );
}

export default Header;
