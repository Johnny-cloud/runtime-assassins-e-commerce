import React from 'react'
import Item from "./Item"

function HandBags({handBags,cart,setCart}) {
  return (
    <div className='items'>
      {handBags.map(handBag =><Item item={handBag} key={handBag.id} cart={cart} setCart={setCart}/>)}
    </div>
  )
}

export default HandBags