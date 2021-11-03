import React, { useState } from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import CheckoutDeliveryAddress from "./checkoutDeliveryAddress/CheckoutDeliveryAddress.js";
import CheckoutDeliverySchedule from "./checkoutDeliverySchedule/CheckoutDeliverySchedule";
import CheckoutDeliveryContactNumber from "./checkoutDeliveryContactNumber/CheckoutDeliveryContactNumber";
import CheckoutDeliveryPaymentOption from "./checkoutDeliveryPaymentOption/CheckoutDeliveryPaymentOption";
import AddAddress from "./checkoutDeliveryAddress/addAddress/AddAddress.js";
import AddContactNumber from "./checkoutDeliveryContactNumber/addContactNumber/AddContactNumber.js";
import AddPaymentOption from "./checkoutDeliveryPaymentOption/addPaymentOption/AddPaymentOption";
import { getBookById } from "../bookData.js";
import CheckoutBookItem from "./CheckoutBookItem.js";
import { BrowserRouter as Router } from "react-router-dom";

function CheckOut() {
  const cartStore = useSelector((state) => state).cart;

  const [isDeliveryAddAddressOpen, setIsDeliveryAddAddressOpen] =
    useState(false);

  const [isContactNumberOpen, setIsContactNumberOpen] = useState(false);

  const [isAddPaymentOptionOpen, setIsAddPaymentOptionOpen] = useState(false);

  const cartStoreTotalPriceArray = cartStore.list.map((book) => {
    const bookDetails = getBookById(book.id);
    return bookDetails.price * book.amount;
  });

  const cartStoreTotalPrice =
    cartStoreTotalPriceArray.length > 0
      ? cartStoreTotalPriceArray.reduce((a, b) => a + b)
      : 0;

  return (
    <Router>
      {isDeliveryAddAddressOpen === true ? (
        <AddAddress setIsDeliveryAddAddressOpen={setIsDeliveryAddAddressOpen} />
      ) : null}
      {isContactNumberOpen === true ? (
        <AddContactNumber setIsContactNumberOpen={setIsContactNumberOpen} />
      ) : null}
      {isAddPaymentOptionOpen === true ? (
        <AddPaymentOption
          setIsAddPaymentOptionOpen={setIsAddPaymentOptionOpen}
        />
      ) : null}
      <div className="checkout">
        <div className="checkout__positioning">
          <div className="checkout__details">
            <CheckoutDeliveryAddress
              setIsDeliveryAddAddressOpen={setIsDeliveryAddAddressOpen}
            />
            <CheckoutDeliverySchedule />
            <CheckoutDeliveryContactNumber
              setIsContactNumberOpen={setIsContactNumberOpen}
            />
            <CheckoutDeliveryPaymentOption
              setIsAddPaymentOptionOpen={setIsAddPaymentOptionOpen}
            />
          </div>
          <div className="checkout__basket-positioning">
            <div className="checkout__basket">
              <div className="checkout__basket-your-order">Your Order</div>
              <div className="checkout__basket-cart">
                {cartStore.list.map((book, index) => {
                  return <CheckoutBookItem key={index} book={book} />;
                })}
              </div>
              <div className="checkout__basket-products"></div>
              <div className="checkout__basket-price">
                <div className="checkout__basket-price-sub-total">
                  Sub Total
                  <div className="checkout__basket-price-sub-total--redux-input">
                    ${cartStoreTotalPrice}
                  </div>
                </div>
                <div className="checkout__basket-price-delivery-fee">
                  Delivery Fee
                  <div className="checkout__basket-price-delivery-fee-number">
                    $0
                  </div>
                </div>
                <div className="checkout__basket-price-discount">
                  Discount
                  <div className="checkout__basket-price-discount-number">
                    $0
                  </div>
                </div>
                <div className="checkout__basket-price-total">
                  Total (Inlc. Vat)
                  <div className="checkout__basket-price-total--redux-input">
                    ${cartStoreTotalPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default CheckOut;
