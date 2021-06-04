import React from 'react';
import './AddContactNumber.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

function AddContactNumber(props) {

  const onClickOpenAddContactNumber = () => {
    props.setIsContactNumberOpen(false)
    console.log(props)
  }

  return(
    <div className="addcontactnumber">
      <div className="addcontactnumber__close" onClick={onClickOpenAddContactNumber}>
        <FontAwesomeIcon icon={faTimesCircle} color="#ffffff" size="2x"/>
      </div>
      <div className="addcontactnumber__form">
        <div className="addcontactnumber__placing">
          <div className="addcontactnumber__headline">
            Add New Contact
          </div>
          <div className="addcontactnumber__input">
            <input type="text" placeholder="Enter a phone number" />
          </div>
          <div className="addcontactnumber__button">
            <button id="button-contact">
              Save Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddContactNumber;