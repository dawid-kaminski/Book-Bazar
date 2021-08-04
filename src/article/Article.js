import React, { useState } from "react";
import "./Article.css";
import Coupon from "./Coupon.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Article() {
  const [activeIndex, setActiveIndex] = useState(2);

  const onClickButtonLeft = () => {
    if (activeIndex <= 2) {
      setActiveIndex(1000);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const onClickButtonRight = () => {
    setActiveIndex(activeIndex + 1);
  };

  return (
    <div className="article">
      <div className="article__button-container-left">
        <button className="article__button-content" onClick={onClickButtonLeft}>
          {" "}
          <FontAwesomeIcon icon={faAngleLeft} color="##0D1136" />
        </button>
      </div>
      <div className="article__coupons">
        <Coupon index={activeIndex % 3} />
        <Coupon index={(activeIndex - 1) % 3} />
        <Coupon index={(activeIndex - 2) % 3} />
      </div>
      <div className="article__button-container-right">
        <button
          className="article__button-content"
          onClick={onClickButtonRight}
        >
          <FontAwesomeIcon icon={faAngleRight} color="##0D1136" />
        </button>
      </div>
    </div>
  );
}

export default Article;
