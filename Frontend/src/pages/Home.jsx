import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
const Home = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('status')==="on"){
      console.log("Logged In")
    } else {
      navigate('/login')
    }
  },[])


  return (
    <div >
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Home
