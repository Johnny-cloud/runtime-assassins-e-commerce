import React from 'react'
import CheckoutItem from './CheckoutItem';
import { Link } from 'react-router-dom';

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

        <div>
          <h2>Payment options</h2>
          <div>
            <Link><img className='payment' src='https://play-lh.googleusercontent.com/bRZF74-13jknePwUd1xam5ZCSdAJVuI_wqtkrisBgu7EEh1jobh2boZihlk-4ikY_S3V' alt='mpesa'/></Link>
            <Link><img className='payment' src='https://static.vecteezy.com/system/resources/previews/009/469/637/original/paypal-payment-icon-editorial-logo-free-vector.jpg' alt='paypal'/></Link>
            <Link><img className='payment' src='https://alfasegur.com/wp-content/uploads/2017/01/vissa.png' alt='visa'/></Link>
            <Link><img className='payment' src='https://hapakenya.com/wp-content/uploads/2014/04/MasterCard-Logo.jpg' alt='mastercard'/></Link>
          </div>
       </div>
        
    </div>
  )
}

export default Checkout