import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Signup = () => {

    const [data, setData] = useState([])
    

    const fetchStates = async() => {
        try {
            const response = await axios.get('https://nga-states-lga.onrender.com/fetch')
            console.log(response.data)
            setData(response.data)
        } catch(error) {
            console.error(error.message)
        }   
    }

    useEffect(() => {
        fetchStates()
    }, [])

  return (
    <div className='w-full h-full flex md:flex-row flex-col'>
        <div className='w-1/3 bg-primary h-screen flex flex-col justify-center p-10 lg:p-20 text-white'>
            <h2 className='font-bold text-2xl'>SIGN UP</h2>
            <p className='text-sm'>Please enter all the necessary details</p>
        </div>

        <div>
            <h2>Get Started</h2>
            <form>
                <fieldset className='h-32 w-32 flex flex-col justify-center'>
                    <label className='border h-full flex items-center justify-center cursor-pointer' htmlFor='file'>Passport</label>
                    <input className='hidden' id='file' type="file" />
                </fieldset>

                <fieldset className='flex gap-5'>
                    <input className='py-2 px-4 rounded border outline-none' type="text" placeholder='Please enter your Fullname' />
                    <select name="" id="">
                        <option value="">Please select your state of origin</option>
                        {data.map((state) => (
                                <option>{state}</option>
                            ))}
                    </select>
                </fieldset>

                <fieldset className='flex gap-5'>
                    <input className='py-2 px-4 rounded border outline-none' type="text" placeholder='Please enter your Fullname' />
                    <input className='py-2 px-4 rounded border outline-none' type="number" placeholder='DOB' />
                </fieldset>
                    
            </form>
        </div>
    </div>
  )
}

export default Signup
