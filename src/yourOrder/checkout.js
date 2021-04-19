import React from 'react';
import './checkout.css';
import Header from '../header/Header.js';

function CheckOut() {

  var y = document.scrollY

// document.getElementById("root").addEventListener("scroll", ())

return (
	<div className="checkout">
		<div className="checkout-positioning">
			<div className="checkout-details">
				<div className="checkout-delivery-address-positioning">
					<div className="checkout-delivery-address">
						sad
					</div>
				</div>
				<div className="checkout-delivery-address-positioning">
					<div className="checkout-delivery-address">
					</div>
				</div>
					<div className="checkout-delivery-address-positioning">
						<div className="checkout-delivery-address">
						</div>
					</div>
				<div className="checkout-delivery-address-positioning">
					<div className="checkout-delivery-address">
					</div>
				</div>
			</div>
			<div className="checkout-basket-positioning">
				<div className="checkout-basket">
					<div className="checkout-basket-your-order">
						Your Order
					</div>
					<div className="checkout-basket-products">
					</div>
					<div className="checkout-basket-price">
						<div className="checkout-basket-price-sub-total">
							Sub Total
						</div>
						<div className="checkout-basket-price-delivery-fee">
							Delivery Fee
						</div>
						<div className="checkout-basket-price-discount">
							Discount
						</div>
						<div className="checkout-basket-price-total">
							Total (Incl. VAT)
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)
}

export default CheckOut;
