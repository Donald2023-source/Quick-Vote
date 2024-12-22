import React from 'react'
import './index.css'
import LandingPage from './Pages/LandingPage'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <LandingPage/>
      </BrowserRouter>

    </div>
  )
}

export default App
