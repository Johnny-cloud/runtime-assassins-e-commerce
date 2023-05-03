import React from 'react'


function CartItem({cart, setCart, item}) {

    function removeFromCart(){
        setCart(cart.filter(cartItem => cartItem.id !== item.id))
      }


 
    return (
        <div className='row'>
                <div className='col-descr'>{item.description}</div>
                <div className='col-amnt'>{item.amount }</div>
                <div className='col-qty'>{item.quantity}</div>
                <div className='col-act'> <button onClick={removeFromCart} className='rmv-btn'>Remove from cart</button></div>
        </div>
      )
}

export default CartItem