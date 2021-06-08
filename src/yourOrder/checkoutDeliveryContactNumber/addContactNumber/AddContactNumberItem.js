import React from 'react';
import './AddContactNumberItem.css';

function AddContactNumberItem(props) {
  return(
    <div className={props.isActive ? "checkout__contact-number checkout__contact-number--active" : "checkout__contact-number" } onClick={props.onClickItem} >
      <div className="checkout__delivery-typing">
        {props.title}
      </div>
      <div className="checkout__delivery-home-details-typing">
        <div className="checkout__delivery-address-passage">
          {props.number}
        </div>
      </div>
    </div>
  )
}

export default AddContactNumberItem;