import React from 'react'
import CheckoutItem from './CheckoutItem';

function Checkout({cart, total}) {
    console.log(cart, total);
  return (
    <div className='container'>
        <div className='checkout-row-container'>
          <h2>Your order</h2>
        <div className='checkout-row'>
            <div className='col-descr'><h2>Description</h2></div>
            <div className='col-amnt'><h2>Amount (Kshs)</h2></div>
            <div className='col-qty'><h2>Quantity</h2></div>
            
          </div>
        {cart.map(cartItem => <CheckoutItem item={cartItem}/>)}
        <div className='checkout-row'>
            <div className='col-descr'><h3>Total  </h3></div>
            <div className='col-amnt'><h3>Kshs { total}</h3></div>
            <div className='col-act'></div>
          </div>
        </div>
        
    </div>
  )
}

export default Checkout