import React from 'react'
import './index.css'
import LandingPage from './Pages/LandingPage'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><LandingPage/></Layout>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
