import React, { useState } from 'react';
import './Faq.css';
import { useSelector } from "react-redux";
import Header from '../header/Header.js';
import cart from '../ducks/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function Faq(props) {

	const [isCustomerContactOpen, setIsCustomerContactOpen] = useState(false);

	const onClickOpenCustomerContact = () => {
		setIsCustomerContactOpen(true)
		console.log(props)
	}

	const onClickCloseCustomerContact = () => {
		setIsCustomerContactOpen(false)
	}

	const OpenCustomerContact = ()=>{
		return(
			<div className="customer-contact-open">
				<div className="faq__customer-contact-text">
					How to contact with Customer Service?
				</div>
				<div className="faq__customer-contact-icon">
					<FontAwesomeIcon icon={faPlus} />
				</div>
			</div>
		)
	}

		const CloseCustomerContact = ()=>{
		return(
			<div className="customer-contact-closed">
				<div className="faq__customer-contact-text">
					How to contact with Customer Service?
				</div>
				<div className="faq__customer-contact-icon">
					<FontAwesomeIcon icon={faPlus} />
				</div>
			</div>
		)
	}

	return (
		<div className="faq__background">
			<div className="faq">
				<div className="faq__headline">
					<div className="faq__headline-placement">
						F.A.Q
					</div>
				</div>
				<div className="faq__questions">
					<div className="faq__customer-contact" onClick={onClickOpenCustomerContact}>
					isCustomerContactOpen === true ? <OpenCustomerContact></OpenCustomerContact> : <CloseCustomerContact></CloseCustomerContact>
					</div>
					<div className="faq__system-information-update">
						<div className="faq__customer-contact-text">
							How to contact with Customer Service?
						</div>
					</div>
					<div className="faq__website-response-time">
						<div className="faq__customer-contact-text">
							How to contact with Customer Service?
						</div>
					</div>
					<div className="faq__account-creation">
						<div className="faq__customer-contact-text">
							How to contact with Customer Service?
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Faq;