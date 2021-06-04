import React, { useState } from 'react';
import './AddVoucher.css';
import VoucherClosed from './VoucherClosed.js';
import VoucherOpen from './VoucherOpen.js'

function AddVoucher(props) {

  console.log(props)

  const [isVoucherInputOpen, setIsVoucherInputOpen] = useState(false);
	
  const voucherActivation = () => {
		setIsVoucherInputOpen(!isVoucherInputOpen)
		console.log("active")
	}

  return(
    <div>
      {isVoucherInputOpen === true ? <VoucherOpen /> : <VoucherClosed voucherActivation={voucherActivation} /> }
    </div>
  )
}

export default AddVoucher