import React from "react";
import { useHistory } from "react-router-dom";
import "./OrderSummary.css";

function OrderSummary() {
  const history = useHistory();
  const onClickBackHome = () => {
    history.push(``);
  };

  return (
    <div className="summary">
      <div className="summary__order-sheet">
        <div className="summary__back-button">
          <button className="back-home-button" onClick={onClickBackHome}>
            Back to Home
          </button>
        </div>
        <div className="summary__headline">Order Received</div>
        <div className="summary__thanks">
          Thank you. Your order has been received
        </div>
        <div className="summary__info">
          <div className="summary__info-order-number-styling">
            <div className="summary__info-order-headline">Order Number</div>
            <div className="summary__info-order-subheading">1444</div>
          </div>
          <div className="summary__info-order-headline-styling">
            <div className="summary__info-order-headline">Date</div>
            <div className="summary__info-order-subheading">March 14, 2019</div>
          </div>
          <div className="summary__info-order-headline-styling">
            <div className="summary__info-order-headline">Total</div>
            <div className="summary__info-order-subheading">$10,944.00</div>
          </div>
          <div className="summary__info-order-headline-styling">
            <div className="summary__info-order-headline">Payment Method</div>
            <div className="summary__info-order-subheading">
              Cash on Delivery
            </div>
          </div>
        </div>
        <div className="summary__details">
          <div className="summary__details-headline">Order Details</div>
          <div className="summary__details-styling">
            <div className="summary__subheading-styling">
              <div className="summary__subheading-main">Total Item</div>
              <div className="summary__colon">:</div>
              <div className="summary__subheading-content">6 Items</div>
            </div>
            <div className="summary__subheading-styling">
              <div className="summary__subheading-main">Order Time</div>
              <div className="summary__colon">:</div>
              <div className="summary__subheading-content">1.00pm 10/12/19</div>
            </div>
            <div className="summary__subheading-styling">
              <div className="summary__subheading-main">Delivery Time</div>
              <div className="summary__colon">:</div>
              <div className="summary__subheading-content">
                90 Minute Express Delivery
              </div>
            </div>
            <div className="summary__subheading-styling">
              <div className="summary__subheading-main">Delivery Location</div>
              <div className="summary__colon">:</div>
              <div className="summary__subheading-content">
                1st Floor, House 149, Road-22, Mohakhali DOHS, Dhaka - North
              </div>
            </div>
          </div>
        </div>
        <div className="summary__total">
          <div className="summary__total-headline">Total Amount</div>
          <div className="summary__total-styling">
            <div className="summary__subheading-styling">
              <div className="summary__subheading-main">Total Item</div>
              <div className="summary__colon">:</div>
              <div className="summary__subheading-content">6 Items</div>
            </div>
            <div className="summary__subheading-styling">
              <div className="summary__subheading-main">Order Time</div>
              <div className="summary__colon">:</div>
              <div className="summary__subheading-content">1.00pm 10/12/19</div>
            </div>
            <div className="summary__subheading-styling">
              <div className="summary__subheading-main">Delivery Time</div>
              <div className="summary__colon">:</div>
              <div className="summary__subheading-content">
                90 Minute Express Delivery
              </div>
            </div>
            <div className="summary__last-subheading-styling">
              <div className="summary__subheading-main">Delivery Location</div>
              <div className="summary__colon">:</div>
              <div className="summary__subheading-content">
                1st Floor, House 149, Road-22, Mohakhali DOHS, Dhaka - North
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
