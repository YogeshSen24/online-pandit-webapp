import React from 'react'
import './services.css'
import Card2 from '../cards/Card2'
import {IoBody} from 'react-icons/io5'
import {GiJug} from 'react-icons/gi'
import {TbCirclesRelation} from 'react-icons/tb'
import {FaHome} from 'react-icons/fa'
import {GiBookAura} from 'react-icons/gi'
import {GiLinkedRings} from 'react-icons/gi'
import {BsYinYang} from 'react-icons/bs'

const Services = () => {
  return (
    <div className='services container'>
        <div className='header'>
            <h2>Awsome Services</h2>
            <div className='line'></div>
        </div>
        <div className='card__container'>
            <Card2 icon={<IoBody/>} heading={"Pujas for Peace of Soul"} paragraph={"This Puja should be done for the peace and salvation of departed soul of the person."} />
            <Card2 icon={<GiJug/>} heading={"Punyahavachanam"} paragraph={"It is performed on the 11th day after childbirth or puberty,purifying the house and the members in the home."} />
            <Card2 icon={<TbCirclesRelation/>} heading={"Marriage Ceremoney"} paragraph={"Vivah puja acts as an invitation to the Gods and Goddesses by performing rituals to come and bless the couple."} />
            <Card2 icon={<FaHome/>} heading={"Griha Pravesh"} paragraph={"Griha Pravesh is the set of Pujas and rituals that are performed before a person starts to live in a new house."} />
            <Card2 icon={<GiBookAura/>} heading={"Bhagwat Katha"} paragraph={"Shrimad Bhagwat is the image of the God of God and that is why it is worshiped in reverence."} />
            <Card2 icon={<BsYinYang/>} heading={"Kundli Dosh"} paragraph={"The specific dosha nivaran Puja can help in removing the malefic effects of the dosha."} />
            <Card2 icon={<GiLinkedRings/>} heading={"Vastu"} paragraph={"Our consultants will guide you in constructing residential, commercial, industrial, educational projects."} />
            
        </div>
    </div>
  )
}

export default Services
