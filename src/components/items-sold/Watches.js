import React from 'react'
import Item from './Item'

function Watches({watches, cart, setCart}) {
  return (
    <div className='items'>
      {watches.map(watch => <Item item={watch} key={watch.id} cart={cart} setCart={setCart}/>)}
    </div>
  )
}

export default Watches