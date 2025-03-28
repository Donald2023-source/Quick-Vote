import React from 'react'
import Sidebar from '../Components/Sidebar'

const Dashboard = ({children}) => {
  return (
    <div className='flex'>
      <Sidebar className={''} />
      <div>
        {children}
        
      </div>
    </div>
  )
}

export default Dashboard
