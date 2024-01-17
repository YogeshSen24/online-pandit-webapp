import React from 'react'
import './promotion.css'
import IMG from '../../assets/pandit-bg.png'
import PS from '../../assets/gplay.png'

const Promotion = () => {
  return (
    <div className='promotion'>
        <div className="promotion__container">
        <div className='promotion__left'>
            <div className='content'>
                <h1>Get The App Now!</h1>
                <p>Find the pandit for your puja's — 100% satisfaction guaranteed.</p>
                <a href=""><img src={PS} alt="" /></a>
            </div>
        </div> 
        <div  className='promotion__right'>
            <img src={IMG} alt="" />
        </div>
        </div> 
    </div>
  )
}

export default Promotion
