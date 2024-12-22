import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'

const LandingPage = () => {
    
  return (
    <div className='overflow-hidden'>
      <span >
        <Navbar/>
      </span>
      <Hero/>
    </div>
  )
}

export default LandingPage
