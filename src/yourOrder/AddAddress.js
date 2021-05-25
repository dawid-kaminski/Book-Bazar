import React from 'react';
import './AddAddress.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

function AddAddress(props) {

	const onClickCloseDeliveryAddress = () => {
    props.setIsDeliveryAddAddressOpen(false)
    console.log(props)
  }

	return(
		<div className="addaddress">
			<div className="addaddress__close" onClick={onClickCloseDeliveryAddress}>
      	<FontAwesomeIcon icon={faTimesCircle} color="#ffffff" size="2x"/>
      </div>
			<div className="addaddress__form">
				<div className="addaddress__headline">
					Add New Address
				</div>
				<div className="addaddress__title">
					<input id="name" type="text" placeholder="Enter Title" class="addaddress__title-input" />
				</div>
				<div className="addaddress__address">
					<textarea id="info" type="text" placeholder="Enter Address" class="addaddress__address-textarea" />
				</div>
				<button className="button-save-address">
					Save Address
				</button>
			</div>
		</div>
		)
	}

export default AddAddress;