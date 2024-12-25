import React from 'react'
import hero2 from '../assets/Hero 2.jpg'
import Hero from '../Components/Hero'
import InventoryIcon from '@mui/icons-material/Inventory';
import CheckIcon from '@mui/icons-material/Check';
import Box1 from '../assets/Ballot Box 2.jpeg'
const LandingPage = () => {
    
  return (
    <div className='overflow-hidden'>
      <Hero/>

      <div className='w-full flex flex-col gap-10 p-12'>
         <div className='flex w-full border px-10 items-center justify-center gap-10'>
            <img className='w-[35%] rounded-lg h-[400px] object-cover' src={hero2} alt="" />
            <span className='flex flex-col gap-3'>
                <h2 className='font-bold text-xl'>What is Quick Vote</h2>
                <p className='leading-[2rem] w-[90%]'>
                Quick-Vote: Transforming the Voting Experience
                Quick-Vote is a secure, user-friendly voting platform designed to simplify and improve the election process. Utilizing advanced encryption and verification technologies, it ensures that votes remain anonymous, accurate, and free from fraud, providing a trusted solution for all types of elections, from local polls to national votes.
        
                With an intuitive interface, Quick-Vote makes voting accessible for all users, regardless of their technical expertise. The platform works seamlessly across devices, offering a smooth experience for participants. Its transparency and efficiency allow for real-time vote counting, reducing the chances of errors and ensuring that every vote is accurately tallied.

                Quick-Vote is ideal for governments, organizations, and individuals looking for a secure and reliable way to conduct elections. By prioritizing security, ease of use, and speed, Quick-Vote is revolutionizing the future of democratic participation, making voting faster, safer, and more accessible.
                </p>
            </span>
         </div>


         <div className='px-10 flex gap-3 justify-between'>
            <div className='w-[30%] flex flex-col items-center gap-2 shadow-lg py-5 px-3 rounded-lg'>
              <h4 className='text-green-600 bg-green-200 p-4 rounded-full w-fit'><InventoryIcon/></h4>
              <h2 className='text-lg font-bold'>Your Rights</h2>
              <p className='text-center leading-loose text-sm'>Voting rights ensure citizens can participate in elections, influencing government decisions. They are fundamental to democracy, granting equal representation and protecting individual freedoms.</p>
            </div>
            
            <div className='w-[30%] flex flex-col items-center gap-2 shadow-lg py-5 px-3 rounded-lg'>
              <h4 className='text-green-600 bg-green-200 p-4 rounded-full w-fit'><CheckIcon/></h4>
              <h2 className='text-lg font-bold'>Benefits</h2>
              <p className='text-center leading-loose text-sm'>Voting rights ensure citizens can participate in elections, influencing government decisions. They are fundamental to democracy, granting equal representation and protecting individual freedoms.</p>
            </div>

            <div className='w-[30%] flex flex-col items-center gap-2 shadow-lg py-5 px-3 rounded-lg'>
              <h4 className='text-green-600 bg-green-200 p-4 rounded-full w-fit'><InventoryIcon/></h4>
              <h2 className='text-lg font-bold'>Your Rights</h2>
              <p className='text-center leading-loose text-sm'>Voting rights ensure citizens can participate in elections, influencing government decisions. They are fundamental to democracy, granting equal representation and protecting individual freedoms.</p>
            </div>
         </div>

         <div className='flex flex-row-reverse w-full border px-10 items-center justify-center gap-10'>
            <img className='w-[35%] rounded-lg h-[400px] object-cover' src={hero2} alt="" />
            <span className='flex flex-col gap-3'>
                <h2 className='font-bold text-xl'>What is Quick Vote</h2>
                <p className='leading-[2rem] w-[90%]'>
                Quick-Vote: Transforming the Voting Experience
                Quick-Vote is a secure, user-friendly voting platform designed to simplify and improve the election process. Utilizing advanced encryption and verification technologies, it ensures that votes remain anonymous, accurate, and free from fraud, providing a trusted solution for all types of elections, from local polls to national votes.
        
                With an intuitive interface, Quick-Vote makes voting accessible for all users, regardless of their technical expertise. The platform works seamlessly across devices, offering a smooth experience for participants. Its transparency and efficiency allow for real-time vote counting, reducing the chances of errors and ensuring that every vote is accurately tallied.

                Quick-Vote is ideal for governments, organizations, and individuals looking for a secure and reliable way to conduct elections. By prioritizing security, ease of use, and speed, Quick-Vote is revolutionizing the future of democratic participation, making voting faster, safer, and more accessible.
                </p>
            </span>
         </div>

         

         <image className='w-32 absolute top-32' src={Box1} alt='Box' />
         
         <div className='flex w-full border px-10 items-center justify-center gap-10'>
            <img className='w-[35%] rounded-lg h-[400px] object-cover' src={hero2} alt="" />
            <span className='flex flex-col gap-3'>
                <h2 className='font-bold text-xl'>What is Quick Vote</h2>
                <p className='leading-[2rem] w-[90%]'>
                Quick-Vote: Transforming the Voting Experience
                Quick-Vote is a secure, user-friendly voting platform designed to simplify and improve the election process. Utilizing advanced encryption and verification technologies, it ensures that votes remain anonymous, accurate, and free from fraud, providing a trusted solution for all types of elections, from local polls to national votes.
        
                With an intuitive interface, Quick-Vote makes voting accessible for all users, regardless of their technical expertise. The platform works seamlessly across devices, offering a smooth experience for participants. Its transparency and efficiency allow for real-time vote counting, reducing the chances of errors and ensuring that every vote is accurately tallied.

                Quick-Vote is ideal for governments, organizations, and individuals looking for a secure and reliable way to conduct elections. By prioritizing security, ease of use, and speed, Quick-Vote is revolutionizing the future of democratic participation, making voting faster, safer, and more accessible.
                </p>
            </span>
         </div>
      </div>
    </div>
  )
}

export default LandingPage
