import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Signup = () => {

    const [data, setData] = useState([])


    const fetchStates = async() => {
        try {
            const response = await axios.get('https://nga-states-lga.onrender.com/fetch')
            console.log(response)
        } catch(error) {
            console.error(error.message)
        }   
    }

    useEffect(() => {
        fetchStates()
    }, [])

  return (
    <div className='w-full h-full flex'>
        <div className='w-1/3 bg-primary h-screen flex flex-col justify-center p-20 text-white'>
            <h2 className='font-bold text-2xl'>SIGN UP</h2>
            <p>Please enter all the necessary details</p>
        </div>

        <div>
            <form>
                <h2>Get Started</h2>
            </form>
        </div>
    </div>
  )
}

export default Signup
