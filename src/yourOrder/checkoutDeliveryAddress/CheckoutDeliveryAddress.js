import React, { useMemo } from 'react';
import AddAddress from './addAddress/AddAddress.js';
import AddAddressItem from './addAddress/AddAddressItem.js';
import { useSelector } from "react-redux";
import { saveAddress } from "../../ducks/Checkout.js"
import './CheckoutDeliveryAddress.css';

function CheckoutDeliveryAddress(props) {

  const onClickAddDeliveryAddress = () => {
    props.setIsDeliveryAddAddressOpen(true)
    console.log(props)
  }

  const checkoutStore = useSelector((state)=>state.checkout)
	console.log(checkoutStore)

  const GetAddressItemRender = React.memo(({title, address}) => {
    return <AddAddressItem title={title} address={address} />  
  }, [])

  return(
    <div className="checkout__delivery-address">
      <div className="checkout__delivery-top">
        <div className="checkout__delivery-circle">
          1
        </div>
        <div className="checkout__delivery-top-name">
          Delivery Address
        </div>
        <button className="add-address" onClick={onClickAddDeliveryAddress} >
          + Add Address
        </button>
      </div>
      <div className="checkout__delivery-adress-list">
        <div className="checkout__delivery-home-address">
          <div className="checkout__delivery-typing">
            home
          </div>
          <div className="checkout__delivery-home-details-typing">
            <div className="checkout__delivery-address-passage">
              33 Baker Street
            </div>
            <div className="checkout__delivery-address-passage">
              Crescent Road, CA
            </div>
            <div className="checkout__delivery-address-passage">
              65746
            </div>
          </div>
        </div>
        <div className="checkout__delivery-office-address">
          <div className="checkout__delivery-typing">
            office
          </div>
          <div className="checkout__delivery-address-passage">
            33 Baker Street
          </div>
          <div className="checkout__delivery-address-passage">
            Crescent Road, CA
          </div>
          <div className="checkout__delivery-address-passage">
            65746
          </div>
        </div>
        {
          checkoutStore.addresses.map((title, address)=>
          {return <GetAddressItemRender title={title} address={address} />})
        }
      </div>
    </div>
  )
}

export default CheckoutDeliveryAddress;
