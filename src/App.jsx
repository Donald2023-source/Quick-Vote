import React from 'react'
import './index.css'
import LandingPage from './Pages/LandingPage'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Landinglayout from './Layouts/Landinglayout'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landinglayout><LandingPage/></Landinglayout>}/>
          <Route path='/contact-us' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
