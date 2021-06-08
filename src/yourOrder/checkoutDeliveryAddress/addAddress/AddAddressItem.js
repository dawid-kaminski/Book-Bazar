import React from 'react';
import './AddAddressItem.css';

function AddAddressItem(props) {
  return(
    <div className={props.isActive ? "checkout__address checkout__address--active" : "checkout__address" } onClick={props.onClickItem}>
      <div className="checkout__delivery-typing">
        {props.title}
      </div>
      <div className="checkout__delivery-home-details-typing">
        <div className="checkout__delivery-address-passage">
          {props.address}
        </div>
      </div>
    </div>
  )
}

export default AddAddressItem;