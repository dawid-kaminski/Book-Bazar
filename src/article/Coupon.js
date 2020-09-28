import React, {useState} from 'react';
import CouponSavings from '../article/couponSavings/CouponSavings.js';
import FreeDelivery from '../article/freeDelivery/FreeDelivery.js';
import GiftVoucher from '../article/giftVoucher/GiftVoucher.js';

function Coupon(props) {
  return (
    <div className="article__coupon">
      {props.index === 0 && <CouponSavings></CouponSavings> }
      {props.index === 1 && <FreeDelivery></FreeDelivery> }
      {props.index === 2 && <GiftVoucher></GiftVoucher> }
    </div>
  );
}

export default Coupon;
