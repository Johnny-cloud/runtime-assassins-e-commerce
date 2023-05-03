import React from 'react'


function Rating({rate}) {

  if((rate) <= 2){
    return(
      <div>
       
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star "></span>
      <span className="fa fa-star "></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
    </div>
    )
  }else if(rate > 2 && rate <= 4){
    return(
      <div>
       
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
    </div>
    )
  }else if(rate > 4 && rate <= 6){
    return(
      <div>
       
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
    </div>
    )
  }else if(rate > 6 && rate <= 8){
    return(
      <div>
       
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
    </div>
    )
  }else if(rate > 8){
    return (
    <div>
       
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
    </div>
  )
  }
  
  
}

export default Rating