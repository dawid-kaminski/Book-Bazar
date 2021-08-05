import React from "react";
import "./VoucherOpen.css";

function VoucherOpen() {
  return (
    <div className="addvoucher__open-voucher">
      <input
        type="text"
        placeholder="Enter voucher code here"
        id="voucher-code-input"
      />
      <button id="apply-voucher-button">Apply</button>
    </div>
  );
}

export default VoucherOpen;
