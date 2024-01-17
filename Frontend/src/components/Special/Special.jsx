import React from 'react'
import './Special.css'
import Card1 from '../cards/Card1'
import {GiSmartphone} from 'react-icons/gi'
import {AiTwotoneSetting} from 'react-icons/ai'
import {TfiRulerPencil} from 'react-icons/tfi'


const Special = () => {
  return (
    <section className='special container'>
      <div className='header '>
        <h2>What is Special</h2>
        <div className='line'></div>
      </div>
      <div className='card__container'>
        <Card1 
        icon = {<GiSmartphone/>} 
        title={'Easy to use'}
        paragraph={'Online pandit booking is the most easiest, time saving and fastest way to get your pandit at home. Simply book the pandit, who will come to your home and perform the puja.'}
        />
        <Card1
        icon = {<TfiRulerPencil/>} 
        title={'Powerful Design'}
        paragraph={'Our powerful design and intuitive dashboard will help you feel confident you are booking the right service.Enjoy the best experience in booking a pandit.'}
        
        />
        <Card1
        icon = {<AiTwotoneSetting/>} 
        title={'Customizability'}
        paragraph={"Book an appointment today! Select your date, time,& service provider.We'll send you a confirmation. If you need to make changes later,you can do any time."}
        
        />

      </div>
    </section>
  )
}

export default Special
