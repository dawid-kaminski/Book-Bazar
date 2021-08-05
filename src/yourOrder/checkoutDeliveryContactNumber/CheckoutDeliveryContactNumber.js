import React, { useState } from "react";
import AddContactNumberItem from "./addContactNumber/AddContactNumberItem";
import { useSelector } from "react-redux";
import "./CheckoutDeliveryContactNumber.css";

function CheckoutDeliveryContactNumber(props) {
  const onClickAddContactNumber = () => {
    props.setIsContactNumberOpen(true);
  };

  const numberStore = useSelector((state) => state.number);

  const GetNumberItemRender = React.memo(({ number }) => {
    return <AddContactNumberItem number={number} />;
  }, []);

  const [isContactNumberActive, setisContactNumberActive] = useState(0);

  const setContactNumberActive = (value) => {
    setisContactNumberActive(value);
  };

  return (
    <div className="checkout__delivery-contact-number">
      <div className="checkout__delivery-top">
        <div className="checkout__delivery-circle">3</div>
        <div className="checkout__delivery-top-name">Contact Number</div>
        <button className="add-address" onClick={onClickAddContactNumber}>
          + Add Contact
        </button>
      </div>
      <AddContactNumberItem
        title={isContactNumberActive === 0 ? "Primary" : "Secondary"}
        number="202-555-0191"
        onClickItem={() => setContactNumberActive(0)}
        isActive={isContactNumberActive === 0}
      />
            
      <AddContactNumberItem
        title={isContactNumberActive === 1 ? "Primary" : "Secondary"}
        number="202-555-0701"
        onClickItem={() => setContactNumberActive(1)}
        isActive={isContactNumberActive === 1}
      />
      {numberStore.numbers.map((number) => {
        return <GetNumberItemRender number={number} />;
      })}
    </div>
  );
}

export default CheckoutDeliveryContactNumber;
