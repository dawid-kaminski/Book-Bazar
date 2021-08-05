import React, { useState } from "react";
import AddAddressItem from "./addAddress/AddAddressItem.js";
import { useSelector } from "react-redux";
import "./CheckoutDeliveryAddress.css";

function CheckoutDeliveryAddress(props) {
  const onClickAddDeliveryAddress = () => {
    props.setIsDeliveryAddAddressOpen(true);
  };

  const checkoutStore = useSelector((state) => state.checkout);

  const GetAddressItemRender = React.memo(({ title, address }) => {
    return <AddAddressItem title={title} address={address} />;
  }, []);

  const [isAddressOpen, setIsAddressOpen] = useState(0);

  const setAddressActive = (value) => {
    setIsAddressOpen(value);
  };

  return (
    <div className="checkout__delivery-address">
      <div className="checkout__delivery-top">
        <div className="checkout__delivery-circle">1</div>
        <div className="checkout__delivery-top-name">Delivery Address</div>
        <button className="add-address" onClick={onClickAddDeliveryAddress}>
          + Add Address
        </button>
      </div>
      <div className="checkout__delivery-adress-list">
        <AddAddressItem
          title="home"
          address="33 Baker Street Crescent Road, CA 65746"
          onClickItem={() => setAddressActive(0)}
          isActive={isAddressOpen === 0}
        />
        <AddAddressItem
          title="office"
          address="33 Baker Street Crescent Road, CA 65746"
          onClickItem={() => setAddressActive(1)}
          isActive={isAddressOpen === 1}
        />
        {checkoutStore.addresses.map((title, address) => {
          return <GetAddressItemRender title={title} address={address} />;
        })}
      </div>
    </div>
  );
}

export default CheckoutDeliveryAddress;
