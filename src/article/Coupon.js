import React, {useState} from 'react';
import CouponSavings from '../article/couponSavings/CouponSavings.js';
import FreeDelivery from '../article/freeDelivery/FreeDelivery.js';
import GiftVoucher from '../article/giftVoucher/GiftVoucher.js';
import './Article.css';

function Coupon(props) {
  return (
    <div className="article__coupon">
      {props.index === 0 && <CouponSavings/> }
      {props.index === 1 && <FreeDelivery/> }
      {props.index === 2 && <GiftVoucher/> }
    </div>
  );
}

export default Coupon;
