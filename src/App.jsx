import React from 'react'
import './index.css'
import LandingPage from './Pages/LandingPage'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Landinglayout from './Layouts/Landinglayout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landinglayout><LandingPage/></Landinglayout>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
