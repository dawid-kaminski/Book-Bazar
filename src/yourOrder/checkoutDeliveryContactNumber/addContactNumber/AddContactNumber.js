import React, { useCallback } from 'react';
import './AddContactNumber.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { saveNumber } from "../../../ducks/number.js"

function AddContactNumber(props) {

  const onClickOpenAddContactNumber = () => {
    props.setIsContactNumberOpen(false)
  }
  const dispatch = useDispatch()

  const numberInput = React.createRef()

  const addAddress = (ev) => {
		ev.preventDefault()
		console.log(numberInput.current.value)
	}

  const onClickSaveAddNewNumber = useCallback(
    () => {
			console.log({numberInput: numberInput})
      dispatch(saveNumber({number: numberInput.current.value}));
    },
  [dispatch, numberInput],
);

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
            <input type="text" placeholder="Enter a phone number" ref={numberInput} />
          </div>
          <div className="addcontactnumber__button" onClick={onClickSaveAddNewNumber} type="submit">
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