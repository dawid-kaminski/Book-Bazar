import React, {useState} from 'react';
import './Checkout.css';
import { useSelector } from "react-redux";
import Header from '../header/Header.js';
import AddAddress from './AddAddress.js'
import cart from '../ducks/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcMastercard, faCcVisa, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'

function CheckOut(props) {
	const cartStore = useSelector((state)=>state).cart
  var y = document.scrollY
	console.log(cartStore)
// document.getElementById("root").addEventListener("scroll", ())

  const onClickAddDeliveryAddress = () => {
    props.setIsDeliveryAddAddressOpen(true)
    console.log(props)
  }

return (
	<div className="checkout">
		<div className="checkout-positioning">
			<div className="checkout__details">
				<div className="checkout__delivery-address">
					<div className="checkout__delivery-top">
						<div className="checkout__delivery-circle">
							1
						</div>
						<div className="checkout__delivery-top-name">
							Delivery Address
						</div>
						<button className="add-address" onClick={onClickAddDeliveryAddress} >
							+ Add Address
						</button>
					</div>
					<div className="checkout__delivery-adress-list">
						<div className="checkout__delivery-home-address">
							<div className="checkout__delivery-typing">
								home
							</div>
							<div className="checkout__delivery-home-details-typing">
								<div className="checkout__delivery-address-passage">
									33 Baker Street
								</div>
								<div className="checkout__delivery-address-passage">
									Crescent Road, CA
								</div>
								<div className="checkout__delivery-address-passage">
									65746
								</div>
							</div>
						</div>
						<div className="checkout__delivery-office-address">
							<div className="checkout__delivery-typing">
								office
							</div>
							<div className="checkout__delivery-address-passage">
								33 Baker Street
							</div>
							<div className="checkout__delivery-address-passage">
								Crescent Road, CA
							</div>
							<div className="checkout__delivery-address-passage">
								65746
							</div>
						</div>
					</div>
				</div>
				<div className="checkout__delivery-schedule">
					<div className="checkout__delivery-top">
						<div className="checkout__delivery-circle">
							2
						</div>
						<div className="checkout__delivery-top-name">
							Delivery Schedule
						</div>
					</div>
						<div className="checkout__delivery-schedule-time">
							<div className="checkout__delivery-typing">
								Express-Delivery
							</div>
							<div className="checkout__delivery-home-details-typing">
								<div className="checkout__delivery-address-passage">
									90 min express delivery
								</div>
							</div>
						</div>
						<div className="checkout__delivery-schedule-time">
							<div className="checkout__delivery-typing">
								8am-11am
							</div>
							<div className="checkout-delivery-home-details-typing">
								<div className="checkout-delivery-address-passage">
									8.00 AM - 11.00 AM
								</div>
							</div>
						</div>
						<div className="checkout__delivery-schedule-time">
							<div className="checkout__delivery-typing">
								11am-2pm
							</div>
							<div className="checkout__delivery-home-details-typing">
								<div className="checkout__delivery-address-passage">
									11.00 AM - 2.00 PM
								</div>
							</div>
						</div>
						<div className="checkout__delivery-schedule-time">
							<div className="checkout__delivery-typing">
								2pm-5pm
							</div>
							<div className="checkout__delivery-home-details-typing">
								<div className="checkout__delivery-address-passage">
									2.00 PM - 5.00 PM
								</div>
							</div>
						</div>
						<div className="checkout__delivery-schedule-time">
							<div className="checkout__delivery-typing">
								5pm-8pm
							</div>
							<div className="checkout__delivery-home-details-typing">
								<div className="checkout__delivery-address-passage">
									5.00 PM - 8.00 PM
								</div>
							</div>
						</div>
						<div className="checkout__delivery-schedule-time">
							<div className="checkout__delivery-typing">
								Next Day
							</div>
							<div className="checkout__delivery-home-details-typing">
								<div className="checkout__delivery-address-passage">
									Next Day
								</div>
							</div>
						</div>
				</div>
				<div className="checkout__delivery-contact-number">
					<div className="checkout__delivery-top">
						<div className="checkout__delivery-circle">
							3
						</div>
						<div className="checkout__delivery-top-name">
							Contact Number
						</div>
						<button className="add-address">
							+ Add Address
						</button>
					</div>
					<div className="checkout__delivery-contact-number-primary">
						<div className="checkout__delivery-typing">
							Primary
						</div>
						<div className="checkout__delivery-home-details-typing">
							<div className="checkout__delivery-address-passage">
								202-555-0191
							</div>
						</div>
					</div>
					<div className="checkout__delivery-contact-number-secondary">
						<div className="checkout__delivery-typing">
							Secondary
						</div>
						<div className="checkout__delivery-home-details-typing">
							<div className="checkout__delivery-address-passage">
								202-555-0701
							</div>
						</div>
					</div>
				</div>
				<div className="checkout__delivery-payment-option">
					<div className="checkout__delivery-top">
						<div className="checkout__delivery-circle">
							4
						</div>
						<div className="checkout__delivery-top-name">
							Payment Option
						</div>
					</div>
					<div className="checkout__delivery-saved-cards-line">
						<div className="checkout__delivery-saved-cards">
							Saved Cards
						</div>
						<button className="add-address">
							+ Add Address
						</button>
					</div>
					<div className="checkout__delivery-payments-lineup">
						<div className="checkout__delivery-card">
							<div className="checkout__delivery-typing">
								<FontAwesomeIcon icon={faPaypal} color="#009e7f" /> PayPal
							</div>
							<div className="checkout__delivery-home-details-typing">
								<div className="checkout__delivery-card-number-passage">
									Card Number
								</div>
								<div className="checkout__delivery-number-passage">
									<span>****</span><span>****</span><span>****</span><span>2349</span>
								</div>
								<div className="checkout__delivery-name-passage">
									Jhon Doe Smith
								</div>
							</div>
						</div>
						<div className="checkout__delivery-card">
							<div className="checkout__delivery-typing">
								<FontAwesomeIcon icon={faCcMastercard} color="#009e7f" /> Mastercard 
							</div>
							<div className="checkout__delivery-home-details-typing">
								<div className="checkout__delivery-card-number-passage">
									Card Number
								</div>
								<div className="checkout__delivery-number-passage">
									<span>****</span><span>****</span><span>****</span><span>2349</span>
								</div>
								<div className="checkout__delivery-name-passage">
									Jhon Doe Smith
								</div>
							</div>
						</div>
						<div className="checkout__delivery-card">
							<div className="checkout__delivery-typing">
								<FontAwesomeIcon icon={faCcVisa} color="#009e7f" /> Visa
							</div>
							<div className="checkout__delivery-home-details-typing">
								<div className="checkout__delivery-card-number-passage">
									Card Number
								</div>
								<div className="checkout__delivery-number-passage">
									<span>****</span><span>****</span><span>****</span><span>2349</span>
								</div>
								<div className="checkout__delivery-name-passage">
									Jhon Doe Smith
								</div>
							</div>
						</div>
					</div>
					<div className="checkout__delivery-payment-voucher">
						<button className="voucher">
							Do you have a voucher?
						</button>	
					</div>
					<div className="checkout__delivery-payment-terms-and-conditions">
						By making this purchase you agree to our<span className="terms-and-conditions">terms and conditions.</span>
					</div>
					<div className="checkout__delivery-payment-proceed-to-checkout">
						<button className="checkout-button">
							Proceed to Checkout
						</button>
					</div>
				</div>
			</div>
			<div className="checkout__basket-positioning">
				<div className="checkout__basket">
					<div className="checkout__basket-your-order">
						Your Order
					</div>
					<div className="checkout__basket-cart">
						{cartStore.list.map((book)=>{
							return(
								<div className="checkout__basket-cart-item">
									<div>{book.id}</div>
									<div>{book.amount}</div>
								</div>
							)
						})}
					</div>
					<div className="checkout__basket-products">
					</div>
					<div className="checkout__basket-price">
						<div className="checkout__basket-price-sub-total">
							Sub Total
						</div>
						<div className="checkout__basket-price-delivery-fee">
							Delivery Fee
						</div>
						<div className="checkout__basket-price-discount">
							Discount
						</div>
						<div className="checkout__basket-price-total">
							Total (Inlc. Vat)
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}

export default CheckOut;
