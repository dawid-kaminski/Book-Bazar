import React, { useState } from "react";
import "./AddVoucher.css";
import VoucherClosed from "./VoucherClosed.js";
import VoucherOpen from "./VoucherOpen.js";

function AddVoucher(props) {
  const [isVoucherInputOpen, setIsVoucherInputOpen] = useState(false);

  const voucherActivation = () => {
    setIsVoucherInputOpen(!isVoucherInputOpen);
  };

  return (
    <div className="mobile-voucher-open">
      {isVoucherInputOpen === true ? (
        <VoucherOpen />
      ) : (
        <VoucherClosed voucherActivation={voucherActivation} />
      )}
    </div>
  );
}

export default AddVoucher;
