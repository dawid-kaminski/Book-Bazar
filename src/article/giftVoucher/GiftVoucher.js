import React from "react";
import "../Article.css";
import Card from "./GiftVoucher.png";

function GiftVoucher() {
  return (
    <div className="article__coupon-content">
      <img src={Card} alt="" />
    </div>
  );
}

export default GiftVoucher;
