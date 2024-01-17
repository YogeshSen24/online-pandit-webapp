import React from 'react'
import './cards.css'

const Card1 = ({icon , title , paragraph}) => {
  return (
    <div className='card1'>
      <div className='icon'>
        {icon}
      </div>
      <div className='title'>
        <h3>{title}</h3>
      </div>
      <div className='paragraph'>
        <p>{paragraph}</p>
      </div>
    </div>
  )
}

export default Card1
