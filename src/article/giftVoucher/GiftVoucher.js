import React from 'react';
import '../Article.css';
import Card from './GiftVoucher.png';

function GiftVoucher() {
  return (
    <div class="article__coupon-content">
      <img src={Card}
      style={{width: "100%", height: "100%"}}/>
    </div>
  );
}

export default GiftVoucher;
