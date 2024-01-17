import React from 'react'
import './Hero.css'
import Navbar from '../navbar/Navbar'
import PS from '../../assets/gplay.png'
import IMG from '../../assets/home1w.png'
import Special from '../Special/Special'
import About from '../About/About'

const Hero = () => {
  return (
    <section className='hero'>
        <Navbar/>

        <div className="main">
            <div className="main-left">
                <h1>Online Pandit App</h1>
                <p>Online pandit is trusted name in India having a group of world renowned purohits and pandits
                     who perform online pujas and yagnas for you. Get your puja performed in temples and religious
                     places. Online pandit is dedicated to provide all kind of Puja service depending on your needs and requirement.</p>
                <img src={PS} alt="" />
            </div>
            <div className="main-right">
                <img src={IMG} alt="" />
            </div>
        </div>
        <Special/>
       
    </section>
  )
}

export default Hero
