import React, {  useState }  from 'react'
//import Rating from './Rating';
import { Rating } from 'react-simple-star-rating'

function Item({item, cart, setCart}) {

  const [itemQuantity, setItemQuantity] = useState('')
  const [rateIn, setRateIn] = useState(0);
  const [rating, setRating] = useState(0)
  

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
  }

  function rate(){
    alert("Thank you for your feedback !");
    setRateIn(0)
  }

  function handleRateChange(event){
    let inVal = parseInt(event.target.value, 10);
    setRateIn(inVal);
    
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = ( value=50,  index=5) => console.log(value, index)
   // Catch Rating value
   const handleRating = (rate) => {
   console.log(rate);

    // other logic
  }


  return (
    <div className='item'>
      <img src={item.image} alt={item.description}/>
      <p>{item.description}</p>
      <p><strong>Ksh {item.amount}</strong></p>
      <div>
      
      <div className='rate'>
      {/* <Rating rate={item.rating}/>
        <div className='hover-rate'>
          <input type='number' value={rateIn} onChange={handleRateChange}></input><span></span> <strong> / 10</strong><br></br>
          <button className='rate-btn' onClick={rate}>Rate</button>
        </div> */}
        <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
      </div>
      
      </div>
      <div>
        <span><strong>Quantity</strong></span><input type="number" onChange={handleChange} name="quantity" value={itemQuantity} placeholder='0'></input>
      </div>
      
      <button onClick={addToCart} className='item-btn'>Add to cart</button>
    </div>
  )
}

export default Item