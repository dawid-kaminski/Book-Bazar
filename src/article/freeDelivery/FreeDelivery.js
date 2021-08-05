import React from "react";
import "../Article.css";
import Card from "./FreeDelivery.png";

function FreeDelivery() {
  return (
    <div className="article__coupon-content">
      <img src={Card} alt="" />
    </div>
  );
}

export default FreeDelivery;
