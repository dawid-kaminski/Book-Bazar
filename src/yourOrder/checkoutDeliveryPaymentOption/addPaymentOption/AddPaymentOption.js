import React from "react";
import "./AddPaymentOption.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faCreditCard } from "@fortawesome/free-solid-svg-icons";

function AddPaymentOption(props) {
  const onClickCloseAddPaymentOption = () => {
    props.setIsAddPaymentOptionOpen(false);
  };

  return (
    <div className="add-payment-option">
      <div
        className="add-payment-option__close"
        onClick={onClickCloseAddPaymentOption}
      >
        <FontAwesomeIcon icon={faTimesCircle} color="#ffffff" size="2x" />
      </div>
      <div className="add-payment-option__form">
        <div className="add-payment-option__placing">
          <div className="add-payment-option__headline">Enter card info</div>
          <div className="add-payment-option--input">
            <FontAwesomeIcon icon={faCreditCard} />
            <div className="add-payment-option--input-placement">
              <input
                type="text"
                id="credit-card-number"
                placeholder="Card Number"
              />
              <input
                type="text"
                id="credit-card-validation-date"
                placeholder="MM/YY"
              />
            </div>
          </div>
          <div className="add-payment-option__pay--button">
            <button>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPaymentOption;
