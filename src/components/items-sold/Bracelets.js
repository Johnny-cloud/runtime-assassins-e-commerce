import React from 'react'
import Item from "./Item"

function Bracelets({bracelets, cart, setCart}) {
  return (
    <div className='items'>
      {bracelets.map(bracelet => <Item id={bracelet.id} item={bracelet} cart={cart} setCart={setCart}/>)}
    </div>
  )
}

export default Bracelets