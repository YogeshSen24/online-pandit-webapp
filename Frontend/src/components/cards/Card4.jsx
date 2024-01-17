import React from 'react'
import IMG1 from '../../assets/p2.jpg'
import IMG2 from '../../assets/p3.jpg'
import IMG3 from '../../assets/p4.jpg'
import IMG4 from '../../assets/p5.jpg'
import {AiFillFacebook} from 'react-icons/ai'
import {TfiYoutube} from 'react-icons/tfi'
import {FaWhatsappSquare} from 'react-icons/fa'
import {IoLogoInstagram} from 'react-icons/io'
import './cards.css'
const Card4 = (image) => {
  return (
    <div className='card4' id='card4Hover'>
        {/* <div className="after__hover">
            <a href=""><AiFillFacebook/></a>
            <a href=""><TfiYoutube/></a>
            <a href=""><FaWhatsappSquare/></a>
            <a href=""><IoLogoInstagram/></a>
        </div> */}
      <img className='cardhover' src={IMG1} alt="" />
      <h3>Sachidanand Sharma</h3>
      <p>Grah Pravesh</p>
    </div>
  )
}

export default Card4
