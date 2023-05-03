import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'

function Cart({cart, setCart}) {
  console.log("Cart items :", cart)

  const [total, setTotal] = useState(0);

  useEffect(
    () => {
      setTotal(
        cart.reduce((sum, cartItem) =>  sum + (cartItem.amount * cartItem.quantity), 0 )
      )
    }, [cart]
  )
  
  function checkOut(){
        setCart([]);
        alert("Thank you for shopping with us!")
  }
  
  return (
    <div className='cart'>
      <h1>My cart</h1>
  
          <div className='row'>
            <div className='col-descr'><h2>Description</h2></div>
            <div className='col-amnt'><h2>Amount</h2></div>
            <div className='col-qty'><h2>Quantity</h2></div>
            <div className='col-act'></div>
          </div>
 
          {cart.map(cartItem => <CartItem item={cartItem} cart={cart} setCart={setCart}/> )}

          <div className='row'>
            <div className='col-descr'><h3>Total  </h3></div>
            <div className='col-amnt'><h3>{ total}</h3></div>
            <div className='col-act'><button className='checkout-btn' onClick={checkOut}>Checkout</button></div>
          </div>
   

      
    </div>
  )
}

export default Cart