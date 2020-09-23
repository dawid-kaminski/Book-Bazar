import React from 'react';
import './Article.css';
import CouponSavings from '../article/couponSavings/CouponSavings.js';
import FreeDelivery from '../article/freeDelivery/FreeDelivery.js';
import GiftVoucher from '../article/giftVoucher/GiftVoucher.js';

function Article() {
  return (
    <div class="article">
      <CouponSavings></CouponSavings>
      <FreeDelivery></FreeDelivery>
      <GiftVoucher></GiftVoucher>
    </div>
  );
}

export default Article;
