import React, { useState } from "react";
import "./CheckoutDeliverySchedule.css";
import CheckoutDeliveryScheduleItem from "./CheckoutDeliveryScheduleItem.js";

function CheckoutDeliverySchedule() {
  const [isDeliveryTimeOpen, setIsDeliveryTimeOpen] = useState(0);

  const setDeliveryTimeActive = (value) => {
    setIsDeliveryTimeOpen(value);
  };

  return (
    <div className="checkout__delivery-schedule">
      <div className="checkout__delivery-top">
        <div className="checkout__delivery-circle">2</div>
        <div className="checkout__delivery-top-name">Delivery Schedule</div>
      </div>
      <CheckoutDeliveryScheduleItem
        title="Express-Delivery"
        hour="90 min express delivery"
        onClickItem={() => setDeliveryTimeActive(0)}
        isActive={isDeliveryTimeOpen === 0}
      />
      <CheckoutDeliveryScheduleItem
        title="8am-11am"
        hour="8.00 AM - 11.00 AM"
        onClickItem={() => setDeliveryTimeActive(1)}
        isActive={isDeliveryTimeOpen === 1}
      />
      <CheckoutDeliveryScheduleItem
        title="11am-2pm"
        hour="11.00 AM - 2.00 PM"
        onClickItem={() => setDeliveryTimeActive(2)}
        isActive={isDeliveryTimeOpen === 2}
      />
      <CheckoutDeliveryScheduleItem
        title="2pm-5pm"
        hour="2.00 PM - 5.00 PM"
        onClickItem={() => setDeliveryTimeActive(3)}
        isActive={isDeliveryTimeOpen === 3}
      />
      <CheckoutDeliveryScheduleItem
        title="5pm-8pm"
        hour="5.00 PM - 8.00 PM"
        onClickItem={() => setDeliveryTimeActive(4)}
        isActive={isDeliveryTimeOpen === 4}
      />
      <CheckoutDeliveryScheduleItem
        title="Next Day"
        hour="Next Day"
        onClickItem={() => setDeliveryTimeActive(5)}
        isActive={isDeliveryTimeOpen === 5}
      />
    </div>
  );
}

export default CheckoutDeliverySchedule;
