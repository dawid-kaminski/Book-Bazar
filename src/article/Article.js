import React, {useState} from 'react';
import './Article.css';
import Coupon from './Coupon.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faFeatherAlt } from '@fortawesome/free-solid-svg-icons'

function Article() {

  const [activeIndex, setActiveIndex] = useState(2);

  var onClickButtonLeft=()=>{
    if (activeIndex <= 2) {
      setActiveIndex(1000)
    }
    else {
      setActiveIndex(activeIndex - 1)
    }
  }

  var onClickButtonRight=()=>{
    setActiveIndex(activeIndex + 1)
  }

  return (
    <div className="article">
      <div className="article__button-container">
        <button className="article__button-content--left" onClick={onClickButtonLeft}>{"<"}</button>
      </div>
      <div className="article__coupons">
        <Coupon index={activeIndex % 3} />
        <Coupon index={(activeIndex - 1) %3} />
        <Coupon index={(activeIndex - 2) %3} />
      </div>
      <div className="article__button-container">
        <button className="article__button-content--right" onClick={onClickButtonRight}>{">"}</button>
      </div>
    </div>
  );

}

export default Article;
