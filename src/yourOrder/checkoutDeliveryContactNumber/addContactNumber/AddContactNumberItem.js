import React from 'react';
import './AddContactNumberItem.css';

function AddContactNumberItem(props) {
  return(
    <div className="checkout__delivery-contact-number-secondary">
      <div className="checkout__delivery-typing">
       Secondary
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