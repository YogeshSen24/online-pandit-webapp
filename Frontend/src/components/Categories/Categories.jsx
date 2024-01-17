import React from 'react'
import './categories.css'
import Card3 from '../cards/Card3'
import icon1 from '../../assets/yogi.png'
import icon2 from '../../assets/footprints.png'
import icon3 from '../../assets/wedding-ring.png'
import icon4 from '../../assets/house.png'
import icon5 from '../../assets/open-book.png'
import icon6 from '../../assets/astrology.png'
import icon7 from '../../assets/philosophy.png'
import icon8 from '../../assets/diwali-lamp.png'



const Categories = () => {
  return (
    <div className='categories'>
    <div className="header">
        <h2>Puja Categories</h2>
        <div className='line'></div>
    </div>
    
    
    <div className=' card3__container'>
      <Card3 heading={'Puja for soul'} icon={icon1}/>
      <Card3 heading={'Punya'} icon={icon2}/>
      <Card3 heading={'Marriage Ceremoney'} icon={icon3}/>
      <Card3 heading={'Griha Pravesh'} icon={icon4}/>

      <Card3 heading={'Bhagwat Katha'} icon={icon5}/>
      <Card3 heading={'kundali dosh'} icon={icon6}/>
      <Card3 heading={'Shanti Puja'} icon={icon7}/>
      <Card3 heading={'Festival Puja'} icon={icon8}/>
    </div>
    </div>
  )
}

export default Categories
