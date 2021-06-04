import React from 'react';
import './CheckoutDeliverySchedule.css';

function CheckoutDeliverySchedule() {
  return(
    <div className="checkout__delivery-schedule">
      <div className="checkout__delivery-top">
        <div className="checkout__delivery-circle">
          2
        </div>
       <div className="checkout__delivery-top-name">
          Delivery Schedule
        </div>
      </div>
      <div className="checkout__delivery-schedule-time">
        <div className="checkout__delivery-typing">
          Express-Delivery
        </div>
        <div className="checkout__delivery-home-details-typing">
          <div className="checkout__delivery-address-passage">
            90 min express delivery
          </div>
        </div>
      </div>
      <div className="checkout__delivery-schedule-time">
        <div className="checkout__delivery-typing">
          8am-11am
        </div>
        <div className="checkout-delivery-home-details-typing">
          <div className="checkout-delivery-address-passage">
            8.00 AM - 11.00 AM
          </div>
        </div>
      </div>
      <div className="checkout__delivery-schedule-time">
        <div className="checkout__delivery-typing">
          11am-2pm
        </div>
        <div className="checkout__delivery-home-details-typing">
          <div className="checkout__delivery-address-passage">
            11.00 AM - 2.00 PM
          </div>
        </div>
      </div>
      <div className="checkout__delivery-schedule-time">
        <div className="checkout__delivery-typing">
          2pm-5pm
        </div>
        <div className="checkout__delivery-home-details-typing">
          <div className="checkout__delivery-address-passage">
            2.00 PM - 5.00 PM
          </div>
        </div>
      </div>
      <div className="checkout__delivery-schedule-time">
        <div className="checkout__delivery-typing">
          5pm-8pm
        </div>
        <div className="checkout__delivery-home-details-typing">
          <div className="checkout__delivery-address-passage">
            5.00 PM - 8.00 PM
          </div>
        </div>
      </div>
      <div className="checkout__delivery-schedule-time">
        <div className="checkout__delivery-typing">
          Next Day
        </div>
        <div className="checkout__delivery-home-details-typing">
          <div className="checkout__delivery-address-passage">
            Next Day
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutDeliverySchedule;