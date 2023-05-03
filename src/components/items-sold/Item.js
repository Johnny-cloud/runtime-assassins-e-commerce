import React, {  useState }  from 'react'
import Rating from './Rating';

function Item({item, cart, setCart}) {

  const [itemQuantity, setItemQuantity] = useState('')
  

  function handleChange(event){
    let inValue = parseInt(event.target.value);
    setItemQuantity(inValue);
    item[event.target.name]= inValue;  //give item a new property quantity
  }

  function addToCart(){

  if(item.quantity >= 1){
        if(cart.find(cartItem => cartItem.id === item.id && cartItem.description === item.description)){
          alert("Item already in cart")
        }else{
          setCart([...cart, item]);
          alert("Added to cart! Check it on My Cart section.")
          setItemQuantity(0);
        }
    }
    else{
      alert("Make sure the quantity is 1 or greater than 1.");
      return;
    }
 
    
    console.log(item);
  }

  return (
    <div className='item'>
      <img src={item.image} alt={item.description}/>
      <p>{item.description}</p>
      <p><strong>Ksh {item.amount}</strong></p>
      <div>
      
      <span><Rating rate={item.rating}/></span>
      </div>
      <div>
        <span><strong>Quantity</strong></span><input type="number" onChange={handleChange} name="quantity" value={itemQuantity} placeholder='0'></input>
      </div>
      
      <button onClick={addToCart} className='item-btn'>Add to cart</button>
    </div>
  )
}

export default Item