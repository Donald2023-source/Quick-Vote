import React from 'react'
import img1 from '../assets/istockphoto-1269463469-612x612.jpg'
import img2 from '../assets/Work Together Image.png'
import img3 from '../assets/13038.jpg'
import img4 from '../assets/Accessibility.png'
import img5 from '../assets/Reliability.webp'
import img6 from '../assets/Availability.png'
import { motion } from 'framer-motion'
const LandingPage = () => {
  return (
    <div>
        <motion.div 
          >
            <div className='w-full h-[100vh] absolute top-0 bg-primary'/>
            
            <motion.div whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1 }} className='absolute text-white flex md:flex-row flex-col justify-between h-[90vh] md:px-20 items-center md:gap-5 gap-10 py-6 px-2'>
                <div className='md:w-[40%] flex-shrink md:pl-0 pl-4 space-y-4 flex flex-col items-start'>
                  <h2 className='font-bold text-4xl'>Get More With Ivote Voting System</h2>
                  <p className='leading-loose text-sm'>The iVote system is an innovative electronic voting solution designed to simplify and secure the electoral process. It combines technology and user-centric design to ensure a transparent, efficient, and reliable voting experience</p>

                  <button className='border py-2 hover:scale-105 transition-all px-5 rounded'>Get started</button>
                </div>
                
                <img className='md:h-80 h-fit md:w-fit w-80' src={ img1 } alt='Vote' />
            </motion.div >
            
        </motion.div>
        <div className='absolute top-[100%] md:mt-3 mt-20'>

          <motion.div whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1 }}
           className='flex md:flex-row flex-col-reverse justify-between lg:p-20 md:p-3 px-3 md:text-left text-center gap-24 items-center'>
            <img className='lg:h-96 h-64 md:w-96 w-64' src={ img2 } alt='alt'/>
            <div className='md:w-[48%] space-y-7'>
              <h2 className='font-bold text-3xl'>Make your Decision Smartly With Ivote</h2>
              <p className='md:leading-loose md:text-md text-sm '>Choosing the right voting platform is crucial for ensuring a smooth, secure, and inclusive voting experience. iVote emerges as a compelling option due to its innovative approach to modern voting needs. The platform offers a combination of user-friendly design, robust security features, and scalability, making it ideal for organizations, institutions, or governments aiming to streamline their electoral processes.</p>
            </div>
          </motion.div>

          <motion.div
           whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1 }}
           className='bg-primary w-full text-white my-5 flex md:flex-row flex-col items-center justify-between mx-auto md:text-left text-center gap-20 p-20'>
              <div className='space-y-6'>
                  <h2 className='text-3xl font-bold'>Make Your Vote Count</h2>
                  <p>Make your vote Count with Ivote. We are Reliable</p>
              </div>

              <img className='md:h-96' src={ img3 } alt=''/>
          </motion.div>


          <div>
              <div className='flex md:flex-row flex-col p-10 gap-10'>
                  <motion.div 
                  whileInView={{ scale: 1, opacity: 1 }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className='flex flex-col items-center md:w-[50%] shadow-xl py-8 px-4 gap-2 rounded-lg'>
                      <img className='h-14 rounded-full' src={ img4 } alt='' />
                      <h2 className='text-lg font-bold'>Accessibility</h2>
                      <p className='text-center'>iVote creates a platform where all users, regardless of ability, can participate in the democratic process with confidence and ease. Its commitment to accessibility ensures equitable and barrier-free voting for everyone.</p>
                  </motion.div>

                  <motion.div 
                  whileInView={{ scale: 1, opacity: 1 }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 1 }}
                   className='flex flex-col bg-primary/30 items-center shadow-lg py-8 px-4 justify-center gap-2 rounded-lg md:w-[50%]'>
                      <img className='h-14 rounded-full' src={ img5 } alt='' />
                      <h2 className='text-lg font-bold'>Reliability</h2>
                      <p className='text-center'>iVote ensures reliability through secure data handling, robust infrastructure, redundancy systems, transparent processes.</p>
                  </motion.div>

                  <motion.div 
                  whileInView={{ scale: 1, opacity: 1 }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 1 }} className='flex flex-col items-center py-8 shadow-xl rounded-lg justify-center gap-2 px-4 md:w-[50%]'>
                      <img className='h-14 rounded-full' src={ img6 } alt='' />
                      <h2 className='text-lg font-bold'>Accessibility</h2>
                      <p className='text-center'>iVote ensures accessibility with user-friendly design, assistive technology support, multi-language options, and device compatibility.</p>
                  </motion.div>
              </div>
          </div>


          <div className='md:p-20 py-12 md:px-4 px-10 bg-primary text-white flex md:flex-row flex-col md:items-center gap-10'>
              <div className='space-y-5'>
                  <h2 className='text-3xl font-semibold'>Subscribe to our NewsLetter</h2>
                  <p>Stay updated with our latext News</p>
              </div>

              <input className='p-3 md:w-96 w-72 text-black bg-white/80 outline-none rounded-lg' type="text" placeholder='Please enter Your email' />
          </div>
        </div>
    </div>
  )
}

export default LandingPage
