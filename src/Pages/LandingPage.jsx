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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}>
            <div className='w-full h-[90vh] absolute top-0 bg-primary'/>
            
            <div className='absolute text-white flex justify-center items-center gap-5 py-6'>
                <div className='w-[40%] space-y-4 flex flex-col items-start'>
                  <h2 className='font-bold text-4xl'>Get More With Ivote Voting System</h2>
                  <p className='leading-loose'>The iVote system is an innovative electronic voting solution designed to simplify and secure the electoral process. It combines technology and user-centric design to ensure a transparent, efficient, and reliable voting experience</p>

                  <button className='border py-2 hover:scale-105 transition-all px-5 rounded'>Get started</button>
                </div>
                
                <img src={ img1 } alt='Vote' />
            </div>
            
        </motion.div>
        <div className='absolute top-[100%] mt-3'>
          <motion.div initial={{ x: -100}} animate={{ x: 0}} transition={{ duration: 1.5}} className='flex justify-between p-20 gap-24 items-center'>
            <img className='h-96' src={ img2 } alt='alt'/>
            <div className='w-[48%] space-y-7'>
              <h2 className='font-bold text-3xl'>Make your Decision Smartly With Ivote</h2>
              <p className='leading-loose'>Choosing the right voting platform is crucial for ensuring a smooth, secure, and inclusive voting experience. iVote emerges as a compelling option due to its innovative approach to modern voting needs. The platform offers a combination of user-friendly design, robust security features, and scalability, making it ideal for organizations, institutions, or governments aiming to streamline their electoral processes.</p>
            </div>
          </motion.div>

          <div className='bg-primary w-full text-white my-5 flex items-center justify-between mx-auto gap-20 p-20'>
              <div className='space-y-6'>
                  <h2 className='text-3xl font-bold'>Make Your Vote Count</h2>
                  <p>Make your vote Count with Ivote. We are Reliable</p>
              </div>

              <img className='h-96' src={ img3 } alt=''/>
          </div>


          <div>
              <div className='flex p-10 gap-10'>
                  <div className='flex flex-col items-center w-[50%] shadow-xl py-8 px-4 gap-2 rounded-lg'>
                      <img className='h-14 rounded-full' src={ img4 } alt='' />
                      <h2 className='text-lg font-bold'>Accessibility</h2>
                      <p className='text-center'>iVote creates a platform where all users, regardless of ability, can participate in the democratic process with confidence and ease. Its commitment to accessibility ensures equitable and barrier-free voting for everyone.</p>
                  </div>

                  <div className='flex flex-col bg-primary/30 items-center shadow-lg py-8 px-4 justify-center gap-2 rounded-lg w-[50%]'>
                      <img className='h-14 rounded-full' src={ img5 } alt='' />
                      <h2 className='text-lg font-bold'>Reliability</h2>
                      <p className='text-center'>iVote ensures reliability through secure data handling, robust infrastructure, redundancy systems, transparent processes.</p>
                  </div>

                  <div className='flex flex-col items-center py-8 shadow-xl rounded-lg justify-center gap-2 px-4 w-[50%]'>
                      <img className='h-14 rounded-full' src={ img6 } alt='' />
                      <h2 className='text-lg font-bold'>Accessibility</h2>
                      <p className='text-center'>iVote ensures accessibility with user-friendly design, assistive technology support, multi-language options, and device compatibility.</p>
                  </div>
              </div>
          </div>


          <div className='p-20 bg-primary text-white flex  items-center justify-between'>
              <div className='space-y-5'>
                  <h2 className='text-3xl font-semibold'>Subscribe to our NewsLetter</h2>
                  <p>Stay updated with our latext News</p>
              </div>

              <input className='p-3 w-96 text-black bg-white/80 outline-none rounded-lg' type="text" placeholder='Please enter Your email' />
          </div>
        </div>
    </div>
  )
}

export default LandingPage
