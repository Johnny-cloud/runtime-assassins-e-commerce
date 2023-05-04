import React from 'react'

function CheckoutItem({item}) {
  return (
    <div className='checkout-row'>
        <div className='col-descr'><td>{item.description}</td></div>
        <div className='col-amnt'><td>{item.amount }</td></div>
        <div className='col-qty'><td>{item.quantity}</td></div>
    </div>
  )
}

export default CheckoutItem