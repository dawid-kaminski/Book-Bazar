import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import './OrderSummary.css';

function OrderSummary() {

  const location = useLocation()
  const history = useHistory()
  const onClickBackHome=()=>{
    history.push(``)
  }

  return(
    <div className="summary">
      <div className="summary__order-sheet">
        <div className="summary__back-button">
          <button className="back-home-button" onClick={onClickBackHome} >
            Back to Home
          </button>
        </div>
        <div className="summary__headline">
          Order Received
        </div>
        <div className="summary__thanks">
          Thank you. Your order has been received
        </div>
      </div>
    </div>
  )
}

export default OrderSummary;