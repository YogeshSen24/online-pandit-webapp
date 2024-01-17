import React from 'react'
import './about.css'
import IMG from '../../assets/about (1).png'
import {AiFillAndroid} from 'react-icons/ai'

const About = () => {
  return (
    <section className='about'>
      <div className='about__left'>
        <div className="about__img">
            <img src={IMG} alt="" />
        </div>
      </div>
      <div className='about__right'>
        <div>
        <h2 className='about__heading' >About Online Pandit!</h2>
        <p>Online pandit is trusted name in India having a group of world renowned purohits and pandits who perform online pujas and yagnas for you. Get your puja performed in temples and religious places. Online pandit is dedicated to provide all kind of Puja service depending on your needs and requirement.</p>
        <button className='about__btn'>
            <span  className='icon'> <AiFillAndroid/> </span>
            <span className='about__btn-right' >
                <small>available on</small>
                <h4>GOOGLE PLAY</h4>
            </span>
        </button>
        </div>
      </div>
    </section>
  )
}

export default About
