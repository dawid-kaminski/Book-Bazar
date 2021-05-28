import React, {useState} from 'react';
import { useHistory, useLocation } from "react-router-dom";
import './Basket.css';
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faTimesCircle, faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons'

function Basket() {

	const cartStore = useSelector((state)=>state).cart

	console.log(cartStore.list)

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

	const ClosedBasket = ()=>{
		return(
			<div className="closed-basket">
				<button className="basket" type="button" name="button" onClick={onClickOpenBasketButton}>
					<div className="closed-basket-items-amount">
						<FontAwesomeIcon icon={faShoppingBag} color="#ffffff"/>
						<div className="books-amount-closed-basket">
							{cartAmountSum} Items
						</div>
					</div>
					<div className="closed-basket-price">
						$
					</div>
				</button>
			</div>
		)
	}

	const OpenBasket = ()=>{
		return(
			<div className="open-basket" >
				<div className="open-basket-items-amount">
					<FontAwesomeIcon icon={faShoppingBag} color="#rgb(0, 158, 127)" size="2x"/>
					<div className="books-amount-open-basket">{cartAmountSum} Item</div>
					<button className="close-basket" onClick={onClickCloseBasketButton}>
						<FontAwesomeIcon icon={faTimesCircle} color="#rgb(0, 158, 127)" size="2x"/>
					</button>
				</div>
				<div className="open-basket-books-list">
					<div className="open-basket-item">
						<div className="open-basket-book-counter">
							<button className="plus-counter">
								<FontAwesomeIcon icon={faPlus} color="#rgb(119, 121, 140)"/>
							</button>
							<div className="book-count-state">

							</div>
							<button className="minus-counter">
								<FontAwesomeIcon icon={faMinus} color="#rgb(119, 121, 140)"/>
							</button>
						</div>
						<div className="book-picture">

						</div>
						<div className="book-details">
							<div className="book-name">

							</div>
							<div className="book-piece-price">
								$60
							</div>
							<div className="">

							</div>
						</div>
						<div className="book-total-price">
							$60.00
						</div>
						<div className="book-cancelation">
							<button className="close-basket" onClick={onClickCloseBasketButton}>
								<FontAwesomeIcon icon={faTimes} size="1x"/>
							</button>
						</div>
					</div>
				</div>
				<div className="open-basket-voucher">
					<button className="voucher">
						Do you have a voucher?
					</button>	
				</div>
				<div className="open-basket-checkout" onClick={onClickCheckoutPage}>
					<div className="open-basket-checkout-typing">
						Checkout
					</div>
					<div className="open-basket-checkout-price">
						$60
					</div>
				</div>
			</div>
		)
	}

	return(
			isBasketPopUpOpen === true ? <OpenBasket/> : <ClosedBasket/>
		)
	}

	export default Basket;