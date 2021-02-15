import React, {useState, useEffect} from 'react';
import './Header.css';
import Logo from './pickbazarlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faQuestionCircle, faFlagUsa, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Header() {

  const [fixedHeader, setFixedHeader] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', (event) => {
      // console.log(event.target.getBoundingClientRect())
      if(window.scrollY > 400 && window.scrollY < 500) {
        setFixedHeader(true)
        console.log("true")
      } 
      if(window.scrollY < 400 && window.scrollY > 300) { 
        setFixedHeader(false)
        console.log("false")
      }
    });
    return () => {document.removeEventListener('scroll')}
  }, [])

  return (
    <div className={fixedHeader === true ? 'header-fixed' : 'header' } >
      <div className="header__pickbazarlogo">
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
      <div className={fixedHeader === true ? 'visible-searchbar' : 'invisible-searchbar' } >


      </div>
      <div className="header__right-menu">
        <div className="header__offer">
          Offer
        </div>
        <div className="header__need-help">
          <div className="header__question-mark">
            <FontAwesomeIcon icon={faQuestionCircle} color="black" />
          </div>
          Need Help
        </div>
        <div className="header__language-choice-placeholder">
          <button className="button-language" type="button" name="button">English</button>
          <div className="header__flag-placeholder">
            <FontAwesomeIcon icon={faFlagUsa} color="#009e7f" />
          </div>
        </div>
        <div className="header__button-join">
         <button className="button-join" type="button" name="button">Join</button>
        </div>
      </div>
    </div>
    );
}

export default Header;
