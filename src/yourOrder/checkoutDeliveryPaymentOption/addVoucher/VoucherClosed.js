import React from "react";
import "./VoucherClosed.css";

function VoucherClosed(props) {
  return (
    <div
      className="addvoucher__delivery-payment-voucher"
      onClick={props.voucherActivation}
    >
      <div className="addvoucher__delivery-payment-voucher">
        <button className="voucher">Do you have a voucher?</button>
      </div>
    </div>
  );
}

export default VoucherClosed;
