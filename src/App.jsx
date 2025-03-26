import React from 'react'
import './index.css'
import LandingPage from './Pages/LandingPage'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Landinglayout from './Layouts/Landinglayout'
import Contact from './Pages/Contact'
import Signup from './Pages/auth/Signup'
import Login from './Pages/auth/Login'
import Organization from './Pages/auth/Organization'
import Cooperative from './Pages/auth/Cooperative'
import Frontpage from './Pages/auth/Frontpage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landinglayout><LandingPage/></Landinglayout>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/auth/signup' element={<Signup />} />
          <Route path='/auth/signup/organization' element={<Organization />} />
          <Route path='/auth/signup/cooperative' element={<Cooperative />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth' element={<Frontpage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
