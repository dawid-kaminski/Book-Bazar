import React, {useState} from 'react';
import './Basket.css';
import { useSelector } from "react-redux";

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

	const ClosedBasket = ()=>{
		return(
			<div className="closed-basket">
				<button className="basket" type="button" name="button" onClick={onClickOpenBasketButton}>
					<div className="books-amount">{cartAmountSum}</div>
				</button>
			</div>
		)
	}

	const OpenBasket = ()=>{
		return(
			<div className="open-basket" >
				<button className="basket" type="button" name="button" onClick={onClickCloseBasketButton}>
					<div className="books-amount">{cartAmountSum}</div>
				</button>
			</div>
		)
	}

	return(
			isBasketPopUpOpen === true ? <OpenBasket></OpenBasket> : <ClosedBasket></ClosedBasket>
		)
	}

	export default Basket;