import React, {useState} from 'react';
import './CheckoutDeliveryScheduleItem.css';

function CheckoutDeliveryScheduleItem(props) {

  return (
    <div className={props.isActive ? "schedule-time-on-click schedule-time-on-click--active" : "schedule-time-on-click" } onClick={props.onClickItem} >
      <div className="checkout__delivery-typing">
        {props.title}
      </div>
      <div className="checkout__delivery-home-details-typing">
        <div className="checkout__delivery-address-passage">
          {props.hour}
        </div>
      </div>
    </div>
  )
}

export default CheckoutDeliveryScheduleItem;