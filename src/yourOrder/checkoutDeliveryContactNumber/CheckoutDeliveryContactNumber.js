import React, { useState } from 'react';
import AddContactNumber from './addContactNumber/AddContactNumber.js';
import './CheckoutDeliveryContactNumber.css';

function CheckoutDeliveryContactNumber(props) {

  const onClickAddContactNumber = () => {
    props.setIsContactNumberOpen(true)
    console.log(props)
  }

  return(
    <div className="checkout__delivery-contact-number">
      <div className="checkout__delivery-top">
        <div className="checkout__delivery-circle">
          3
        </div>
        <div className="checkout__delivery-top-name">
          Contact Number
        </div>
        <button className="add-address" onClick={onClickAddContactNumber} >
          + Add Contact
        </button>
      </div>
      <div className="checkout__delivery-contact-number-primary">
        <div className="checkout__delivery-typing">
          Primary
        </div>
        <div className="checkout__delivery-home-details-typing">
          <div className="checkout__delivery-address-passage">
            202-555-0191
          </div>
        </div>
      </div>
      <div className="checkout__delivery-contact-number-secondary">
        <div className="checkout__delivery-typing">
          Secondary
        </div>
        <div className="checkout__delivery-home-details-typing">
          <div className="checkout__delivery-address-passage">
            202-555-0701
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutDeliveryContactNumber;