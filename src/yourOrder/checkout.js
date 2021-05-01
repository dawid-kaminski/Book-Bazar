import React from 'react';
import './checkout.css';
import { useSelector } from "react-redux";
import Header from '../header/Header.js';
import cart from '../ducks/cart';

function CheckOut() {
	const cartStore = useSelector((state)=>state).cart
  var y = document.scrollY
	console.log(cartStore)
// document.getElementById("root").addEventListener("scroll", ())

return (
	<div className="checkout">
		<div className="checkout-positioning">
			<div className="checkout-details">
				<div className="checkout-delivery-address">
					<div className="checkout-delivery-top">
						<div className="checkout-delivery-circle">
							1
						</div>
						<div className="checkout-delivery-top-name">
							Delivery Address
						</div>
						<button className="add-address">
							+ Add Address
						</button>
					</div>
					<div className="checkout-delivery-adress-list">
						<div className="checkout-delivery-home-address">
							<div className="checkout-delivery-typing">
								home
							</div>
							<div className="checkout-delivery-home-details-typing">
								{/* <div className="">27 Street, 2569</div>
								<div className="">Heritage Road Visalia,</div>
								<div className="">CA 93291</div> */}
								{"27 Street, 2569 \n Heritage Road Visalia, \n CA 93291"}
							</div>
						</div>
						<div className="checkout-delivery-office-address">
							<div className="checkout-delivery-typing">
								office
							</div>
						</div>
					</div>
				</div>
				<div className="checkout-delivery-schedule">
					<div className="checkout-delivery-top">
						<div className="checkout-delivery-circle">
							2
						</div>
						<div className="checkout-delivery-top-name">
							Delivery Schedule
						</div>
					</div>
				</div>
				<div className="checkout-delivery-contact-number">
					<div className="checkout-delivery-top">
						<div className="checkout-delivery-circle">
							3
						</div>
						<div className="checkout-delivery-top-name">
							Contact Number
						</div>
					</div>
				</div>
				<div className="checkout-delivery-payment-option">
					<div className="checkout-delivery-top">
						<div className="checkout-delivery-circle">
							4
						</div>
						<div className="checkout-delivery-top-name">
							Payment Option
						</div>
					</div>
				</div>
			</div>
			<div className="checkout-basket-positioning">
				<div className="checkout-basket">
					<div className="checkout-basket-your-order">
						Your Order
					</div>
					<div className="checkout-basket-cart">
						{cartStore.list.map((book)=>{
							return(
								<div className="checkout-basket-cart-item">
									<div>{book.id}</div>
									<div>{book.amount}</div>
								</div>
							)
						})}
					</div>
					<div className="checkout-basket-products">
					</div>
					<div className="checkout-basket-price">
						<div className="checkout-basket-price-sub-total">
							Sub Total
						</div>
						<div className="checkout-basket-price-delivery-fee">
							Delivery Fee
						</div>
						<div className="checkout-basket-price-discount">
							Discount
						</div>
						<div className="checkout-basket-price-total">
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
