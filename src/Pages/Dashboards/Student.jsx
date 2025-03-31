import { Avatar } from '@mui/material'
import React from 'react'
import { Notifications } from '@mui/icons-material'
import DashboardMessage from '../../Components/DashboardMessage'
import MyCalendar from '../../Components/Calendar'
import Chart from '../../Components/BarChart'


const Student = () => {
  return (
    <div>
      <div>
        <div className='lg:flex hidden gap-5 items-center justify-end'>
          <Avatar className='hover:scale-105 hoverEffect cursor-pointer'>D</Avatar>
          <span className='hover:scale-105 hoverEffect cursor-pointer'><Notifications/></span>
        </div>

        <div className='flex items-center justify-between'>
          <DashboardMessage name={"Donald"} />
        </div>
        <div className='w-[50%] shadow'>
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default Student
