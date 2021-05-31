import React from 'react';
import './AddPaymentOption.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCreditCard } from '@fortawesome/free-solid-svg-icons'

function AddPaymentOption(props) {
  
  const onClickCloseAddPaymentOption = () => {
    props.setIsAddPaymentOptionOpen(false)
    console.log(props)
  }

  return(
    <div className="addpaymentoption">
      <div className="addpaymentoption__close" onClick={onClickCloseAddPaymentOption}>
      	<FontAwesomeIcon icon={faTimesCircle} color="#ffffff" size="2x"/>
      </div>
      <div className="addpaymentoption__form">
        <div className="addpaymentoption__placing">
          <div className="addpaymentoption__headline">
            Enter card info
          </div>
          <div className="addpaymentoption-input">
            <FontAwesomeIcon icon={faCreditCard} />
            <div className="addpaymentoption-input-placement">
              <input type="text" id="credit-card-number" placeholder="Card Number"/>
              <input type="text" id="credit-card-validation-date" placeholder="MM/YY"/>
            </div>
          </div>
          <div className="addpaymentoption__pay-button">
            <button>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPaymentOption;