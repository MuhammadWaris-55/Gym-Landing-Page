import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Stories from '../components/Stories'
import Facilities from '../components/Facilities'
import Trainers from '../components/Trainers'
import Stopping from '../components/Stopping'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Stories/>
      <Facilities/>
      <Trainers/>
      <Stopping/>
      <Footer/>
    </div>
  )
}

export default LandingPage
