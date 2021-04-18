import React from 'react';
import './LogInPopUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function LogInPopUp(props) {

  const onClickJoinButton = () => {
    props.setIsLogInPopUpOpen(false)
    console.log(props)
  }

  return (
    <div className="loginpopup">
      <div className="loginpopup__close" onClick={onClickJoinButton}>
        <FontAwesomeIcon icon={faTimesCircle} color="#ffffff" size="2x"/>
      </div>
      <div className="loginpopup__form">
        <div className="loginpopup__welcome">
          Welcome Back
        </div>
        <div className="loginpopup__authentication">
          Login with your email & password
        </div>
        <div className="loginpopup__input-email">
          <input type="email" name="search" autoComplete="off" placeholder="demo@demo.com" />
        </div>
        <div className="loginpopup__input-password">
          <input type="password" name="search" placeholder="demo" />
        </div>
        <div className="loginpopup__button-continue">
          <button className="button-continue" type="button" name="button">Continue</button>
        </div>
        <div className="loginpopup__break">
          <div className="loginpopup__break-positioning">or</div>
        </div>
        <div className="loginpopup__button-facebook">
          <button className="button-fb" type="button" name="button" ><div className="fb-icon"><FontAwesomeIcon icon={faFacebookSquare} color="#ffffff" size="lg" /></div> Continue with Facebook</button>
        </div>
        <div className="loginpopup__button-google">
          <button className="button-google" type="button" name="button" ><div className="google-icon"><FontAwesomeIcon icon={faGoogle} color="#ffffff" size="lg" /></div> Continue with Google</button>
        </div>
        <div className="loginpopup__sign-up">
          Don't have any account? <button className="button-sign-up-or-reset-password" type="button" name="button" >Sign Up</button>
        </div>
        <div className="loginpopup__reset-password">
          Forgot your password? <button className="button-sign-up-or-reset-password" type="button" name="button" >Reset it</button>
        </div>
      </div>
    </div>
  );
}

export default LogInPopUp;