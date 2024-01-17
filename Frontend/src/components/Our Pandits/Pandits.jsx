import React from 'react'
import './pandits.css'
import Card4 from '../cards/Card4'

const Pandits = () => {
  return (
    <div className='team'>
    <div className='header'>
        <h2>Awsome Services</h2>
        <div className='line'></div>
    </div>
    <div className='pandits card3__container'>
      <Card4/>
      <Card4/>
      <Card4/>
      <Card4/>
    </div>
    </div>
  )
}

export default Pandits
