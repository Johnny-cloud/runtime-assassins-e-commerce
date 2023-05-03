import React from 'react'
import Item from './Item'

function Belts({belts, cart, setCart}) {
  return (
    <div className='items'>
      {belts.map(belt => <Item key={belt.id} item={belt} cart={cart} setCart={setCart}/>)}
    </div>
  )
}

export default Belts