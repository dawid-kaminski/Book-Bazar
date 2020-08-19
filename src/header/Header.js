import React from 'react';
import './Header.css';
import Logo from './pickbazarlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBook, faQuestionCircle, faFlagUsa, faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import { question-circle, faBook } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="header">
      <div className="pickbazarlogo">
        <img src={Logo} />
      </div>
      <div className="header-left-menu-choice-placeholder-position">
        <div className="header-left-menu-choice-placeholder">
            <div className="header-left-menu-choice-placeholder-book-icon">
              <FontAwesomeIcon icon={faBook} color="#009e7f" />
            </div>
          <div className="header-left-menu-choice-placeholder-book-button">
            Book
          </div>
          <div className="header-left-menu-choice-placeholder-angle-down">
            <FontAwesomeIcon icon={faAngleDown} color="#009e7f" />
          </div>
        </div>
      </div>
      <div className="header-right-menu-side">
        <div className="header-right-menu-side-offer">
          Offer
        </div>
        <div className="header-right-menu-side-need-help">
          <div className="header-right-menu-side-need-help-question-mark">
            <FontAwesomeIcon icon={faQuestionCircle} color="black" />
          </div>
          Need Help
        </div>
        <div className="header-right-menu-side-language-choice-placeholder-position">
          <button className="button-language" type="button" name="button">English</button>
          <div className="header-right-menu-side-language-choice-placeholder-position-flag">
            <FontAwesomeIcon icon={faFlagUsa} color="#009e7f" />
          </div>
        </div>
        <div className="header-right-menu-side-join-button">
          <button className="button-join" type="button" name="button">Join</button>
        </div>
      </div>
    </div>
    );
}

export default Header;
