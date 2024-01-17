import React from 'react'
import './cards.css'


const Card3 = ({icon , heading}) => {
  return (
    <div className='card3'>
        <div className='icon'> <img src={icon} alt="" /> </div>
        <div className='heading'><h3>{heading}</h3></div>
        <div className="card3__btn">Book Now</div>
    </div>
  )
}

export default Card3