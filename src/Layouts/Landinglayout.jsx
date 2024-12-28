import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Landinglayout = ({ children }) => {
  return (
    <div>
      <Navbar />
        {children}
      
      <span className='relative bottom-3 h-full flex items-end'>
        <Footer/>
      </span>
    </div>
  )
}

export default Landinglayout
