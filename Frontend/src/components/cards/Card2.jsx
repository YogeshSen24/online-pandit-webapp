import React from 'react'
import './cards.css'

const Card2 = ({icon , paragraph , heading}) => {
  return (
    <div className='card2'>
      <div className="card__header">
        <span className="icon">
          {icon}
        </span>
        <span className="heading">
          <h3>{heading}</h3>
        </span>
      </div>
      <div className="card__footer">
          <p>{paragraph}</p>
      </div>
    </div>
  )
}

export default Card2