import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const FaqListItem = (props)=>{

	const [isCustomerContactOpen, setIsCustomerContactOpen] = useState(false);

	const toggleModal = () => {
		setIsCustomerContactOpen(!isCustomerContactOpen)
		console.log("modal")
	}

		return(
			<div className="faq__customer-question-template" onClick={toggleModal}>
				<div className="customer-contact-closed">
					<div className="faq__customer-question-text-styling">
						{props.headerText}
					</div>
					<div className="faq__customer-contact-icon">
						{ isCustomerContactOpen === true ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
					</div>
				</div>
				{ isCustomerContactOpen === true ? <div className="text">
					{props.questionAnswear}
				</div> : null}
			</div>
		)
	}
	
	export default FaqListItem;