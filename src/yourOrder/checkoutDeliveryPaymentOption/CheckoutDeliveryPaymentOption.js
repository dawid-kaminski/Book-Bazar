import React, { useState } from "react";
import "./CheckoutDeliveryPaymentOption.css";
import AddVoucher from "./addVoucher/AddVoucher.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcMastercard,
  faCcVisa,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";

function CheckoutDeliveryPaymentOption(props) {
  const history = useHistory();

  const onClickAddPaymentOption = () => {
    props.setIsAddPaymentOptionOpen(true);
  };

  const onClickSummary = () => {
    history.push("/order-summary");
  };

  const [isCardOpen, setIsCardOpen] = useState(0);

  const setCardActive = (value) => {
    setIsCardOpen(value);
  };

  return (
    <div className="checkout__delivery-payment-option">
      <div className="checkout__delivery-top">
        <div className="checkout__delivery-circle">4</div>
        <div className="checkout__delivery-top-name">Payment Option</div>
      </div>
      <div className="checkout__delivery-saved-cards-line">
        <div className="checkout__delivery-saved-cards">Saved Cards</div>
        <button className="add-address" onClick={onClickAddPaymentOption}>
          + Add Card
        </button>
      </div>
      <div className="checkout__delivery-payments-lineup">
        <div
          className={
            isCardOpen === 0
              ? "checkout__delivery-card checkout__delivery-card--active"
              : "checkout__delivery-card"
          }
          onClick={() => {
            setCardActive(0);
          }}
        >
          <div className="checkout__delivery-typing">
            <FontAwesomeIcon icon={faPaypal} color="#009e7f" /> PayPal
          </div>
          <div className="checkout__delivery-home-details-typing">
            <div className="checkout__delivery-card-number-passage">
              Card Number
            </div>
            <div className="checkout__delivery-number-passage">
              <span>****</span>
              <span>****</span>
              <span>****</span>
              <span>2349</span>
            </div>
            <div className="checkout__delivery-name-passage">
              Jhon Doe Smith
            </div>
          </div>
        </div>
        <div
          className={
            isCardOpen === 1
              ? "checkout__delivery-card checkout__delivery-card--active"
              : "checkout__delivery-card"
          }
          onClick={() => {
            setCardActive(1);
          }}
        >
          <div className="checkout__delivery-typing">
            <FontAwesomeIcon icon={faCcMastercard} color="#009e7f" /> Mastercard
          </div>
          <div className="checkout__delivery-home-details-typing">
            <div className="checkout__delivery-card-number-passage">
              Card Number
            </div>
            <div className="checkout__delivery-number-passage">
              <span>****</span>
              <span>****</span>
              <span>****</span>
              <span>2349</span>
            </div>
            <div className="checkout__delivery-name-passage">
              Jhon Doe Smith
            </div>
          </div>
        </div>
        <div
          className={
            isCardOpen === 2
              ? "checkout__delivery-card checkout__delivery-card--active"
              : "checkout__delivery-card"
          }
          onClick={() => {
            setCardActive(2);
          }}
        >
          <div className="checkout__delivery-typing">
            <FontAwesomeIcon icon={faCcVisa} color="#009e7f" /> Visa
          </div>
          <div className="checkout__delivery-home-details-typing">
            <div className="checkout__delivery-card-number-passage">
              Card Number
            </div>
            <div className="checkout__delivery-number-passage">
              <span>****</span>
              <span>****</span>
              <span>****</span>
              <span>2349</span>
            </div>
            <div className="checkout__delivery-name-passage">
              Jhon Doe Smith
            </div>
          </div>
        </div>
      </div>
      <AddVoucher />
      <div className="checkout__delivery-payment-terms-and-conditions">
        By making this purchase you agree to our
        <span className="terms-and-conditions">terms and conditions.</span>
      </div>
      <div className="checkout__delivery-payment-proceed-to-checkout">
        <button className="checkout-button" onClick={onClickSummary}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CheckoutDeliveryPaymentOption;
