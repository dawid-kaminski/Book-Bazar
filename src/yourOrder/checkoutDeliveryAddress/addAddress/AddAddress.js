import React, { useCallback } from "react";
import "./AddAddress.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { saveAddress } from "../../../ducks/checkout";

function AddAddress(props) {
  const dispatch = useDispatch();

  const onClickCloseDeliveryAddress = () => {
    props.setIsDeliveryAddAddressOpen(false);
  };

  const titleInput = React.createRef();

  const addressInput = React.createRef();

  const addAddress = (ev) => {
    ev.preventDefault();
    console.log(titleInput.current.value, addressInput.current.value);
  };

  const onClickSaveAddNewAddress = useCallback(() => {
    console.log({ titleInput: titleInput, addressInput: addressInput });
    dispatch(
      saveAddress({
        title: titleInput.current.value,
        address: addressInput.current.value,
      })
    );
  }, [dispatch, titleInput, addressInput]);

  return (
    <form className="addaddress" onSubmit={addAddress}>
      <div className="addaddress__close" onClick={onClickCloseDeliveryAddress}>
        <FontAwesomeIcon icon={faTimesCircle} color="#ffffff" size="2x" />
      </div>
      <div className="addaddress__form">
        <div className="addaddress__headline">Add New Address</div>
        <div className="addaddress__title">
          <input
            id="name"
            type="text"
            placeholder="Enter Title"
            class="addaddress__title-input"
            ref={titleInput}
          />
        </div>
        <div className="addaddress__address">
          <textarea
            id="info"
            type="text"
            placeholder="Enter Address"
            class="addaddress__address-textarea"
            ref={addressInput}
          />
        </div>
        <button
          className="button-save-address"
          onClick={onClickSaveAddNewAddress}
          type="submit"
        >
          Save Address
        </button>
      </div>
    </form>
  );
}

export default AddAddress;
