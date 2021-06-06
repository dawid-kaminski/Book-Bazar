import React, {useState} from 'react';
import './Checkout.css';
import { useSelector } from "react-redux";
import Header from '../header/Header.js';
import CheckoutDeliveryAddress from './checkoutDeliveryAddress/CheckoutDeliveryAddress.js'
import CheckoutDeliverySchedule from './checkoutDeliverySchedule/CheckoutDeliverySchedule';
import CheckoutDeliveryContactNumber from './checkoutDeliveryContactNumber/CheckoutDeliveryContactNumber';
import CheckoutDeliveryPaymentOption from './checkoutDeliveryPaymentOption/CheckoutDeliveryPaymentOption';
import AddAddress from './checkoutDeliveryAddress/addAddress/AddAddress.js'
import AddContactNumber from './checkoutDeliveryContactNumber/addContactNumber/AddContactNumber.js'
import AddPaymentOption from './checkoutDeliveryPaymentOption/addPaymentOption/AddPaymentOption'
import cart from '../ducks/Cart';
import { getAllBooks } from "../BookData.js";
import { getBookById } from '../BookData.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function CheckOut() {
	const cartStore = useSelector((state)=>state).cart
	const bookList = useSelector((state)=>state).booklist
	console.log(bookList)
  var y = document.scrollY
	console.log(cartStore)
// document.getElementById("root").addEventListener("scroll", ())

	const [isDeliveryAddAddressOpen, setIsDeliveryAddAddressOpen] = useState(false);

  const [isContactNumberOpen, setIsContactNumberOpen] = useState(false);

  const [isAddPaymentOptionOpen, setIsAddPaymentOptionOpen] = useState(false);

return (
	<Router>
		{isDeliveryAddAddressOpen === true ? <AddAddress setIsDeliveryAddAddressOpen ={setIsDeliveryAddAddressOpen}/> : null }
		{isContactNumberOpen === true ? <AddContactNumber setIsContactNumberOpen ={setIsContactNumberOpen}/> : null }
	  {isAddPaymentOptionOpen === true ? <AddPaymentOption setIsAddPaymentOptionOpen ={setIsAddPaymentOptionOpen}/> : null }
		<div className="checkout">
			<div className="checkout-positioning">
				<div className="checkout__details">
					<CheckoutDeliveryAddress setIsDeliveryAddAddressOpen={setIsDeliveryAddAddressOpen} />
					<CheckoutDeliverySchedule />
					<CheckoutDeliveryContactNumber setIsContactNumberOpen ={setIsContactNumberOpen} />
					<CheckoutDeliveryPaymentOption setIsAddPaymentOptionOpen ={setIsAddPaymentOptionOpen} />
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
										{bookList.list.map((book)=>{return(<div>{book.img}</div>)})}
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
	</Router>
	)
}

export default CheckOut;
