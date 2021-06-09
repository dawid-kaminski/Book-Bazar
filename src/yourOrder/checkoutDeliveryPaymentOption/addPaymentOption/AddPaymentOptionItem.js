import React, { useState } from 'react';
import './AddPaymentOptionItem.css';

function AddPaymentOptionItem(props) {
  
  return(
    <div className={props.isActive ? "checkout__delivery-card checkout__delivery-card--active" : "checkout__delivery-card" } onClick={props.onClickItem} />
  )
}

export default AddPaymentOptionItem;