import React, {useState} from 'react';
import { useHistory, useLocation } from "react-router-dom";
import BasketItem from './BasketItem';
import AddVoucher from '../yourOrder/checkoutDeliveryPaymentOption/addVoucher/AddVoucher.js'
import './Basket.css';
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { getBookById } from '../BookData';

function Basket() {

	const cartStore = useSelector((state)=>state).cart

	const cartAmount = cartStore.list.map(book=>book.amount)

	const cartAmountSum = cartAmount.length === 0 ? 0 : cartAmount.reduce((a, b)=>(a + b))

	const [isBasketPopUpOpen, setIsBasketPopUpOpen] = useState(false);

	const onClickOpenBasketButton = () => {
		setIsBasketPopUpOpen(true)
	}

	const onClickCloseBasketButton = () => {
		setIsBasketPopUpOpen(false)
	}

	const history = useHistory()

  var onClickCheckoutPage=()=>{
    history.push(`/checkout`)
  }

	const ClosedBasket = (props)=>{
		return(
			<div className="closed-basket">
				<button className="closed-basket__open--button" type="button" name="button" onClick={onClickOpenBasketButton}>
					<div className="closed-basket__items-amount">
						<FontAwesomeIcon icon={faShoppingBag} color="#ffffff"/>
						<div className="closed-basket__books-amount">
							{cartAmountSum} Items
						</div>
					</div>
					<div className="closed-basket__price">
						${cartStoreTotalPrice}
					</div>
				</button>
			</div>
		)
	}

	const OpenBasket = (props)=>{
		return(
			<div className="open-basket" >
				<div className="open-basket__items-amount">
					<FontAwesomeIcon icon={faShoppingBag} color="#rgb(0, 158, 127)" size="2x"/>
					<div className="open-basket__books-amount">
						{cartAmountSum} Item
					</div>
					<button className="open-basket__close--button-top" onClick={onClickCloseBasketButton}>
						<FontAwesomeIcon icon={faTimesCircle} color="#rgb(0, 158, 127)" size="2x"/>
					</button>
				</div>
				<div className="open-basket__books-list">
					{cartStore.list.map((book, index)=>{
						return <BasketItem key={index} book={book}/>
					})}
				</div>
				<div className="open-basket__checkout-and-voucher-positioning">
					<div className="open-basket__voucher">
						<AddVoucher/>
					</div>
					<div className="open-basket__checkout" onClick={onClickCheckoutPage}>
						<div className="open-basket__checkout-typing">
							Checkout
						</div>
						<div className="open-basket__checkout-price">
							${props.cartStoreTotalPrice}
						</div>
					</div>
				</div>
			</div>
		)
	}

	const cartStoreTotalPriceArray = cartStore.list.map((book)=>{
		const bookDetails = getBookById(book.id)
		return bookDetails.price * book.amount
	})

	const cartStoreTotalPrice = cartStoreTotalPriceArray.length > 0 ? cartStoreTotalPriceArray.reduce((a, b)=> a + b) : 0

	return(
			isBasketPopUpOpen === true ? <OpenBasket cartStoreTotalPrice={cartStoreTotalPrice} /> : <ClosedBasket/>
		)
	}

	export default Basket;