import React, { useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Navbar from '../Components/Navbar';
const Contact = () => {

    const contactData = [
        { id: 1, name: 'Instagram', icon: InstagramIcon, text: '@ivote.ng' },
        { id: 2, name: 'Facebook', icon: FacebookIcon, text: 'oneIvote.ng' },
        { id: 3, name: 'LinkedIn', icon: LinkedInIcon, text: 'Ivote.ng' },
        { id: 4, name: 'WhatsApp', icon: WhatsAppIcon, text: '+234 8130283492' }
    ]

    const [visible, setVisible] = useState('@ivote.ng')

    const handleClick = (id) => {
        const selectedContact = contactData.find((item) => item.id === id)
        setVisible(selectedContact.text)
    }
    

  return (
    <div >
        <Navbar/>
      <div className='bg-gradient-to-r from-primary to-primary/70 h-full w-full absolute z-10 inset-0'>
        <div className='relative z-50 text-white h-full flex flex-col items-center justify-center left-0 right-0 px-20 py-10'>
            <div className='flex justify-center md:gap-10 gap-6'>
                {
                   
                    contactData.map((item) => {
                        const isActive = visible === item.text;
                        return (
                            <div key={item.id} onClick={() => handleClick(item.id)}>
                                <item.icon className={`shadow-lg hover:scale-105 transition cursor-pointer bg-[#36363873] ease-in-out duration-300 backdrop-blur-lg py-2 rounded-lg ${isActive ? 'bg-black' : ''}`} sx={{fontSize: '60px'}}/>
                                
                            </div>
                        )
                    })
                }
            </div>
            <div className='text-center py-7 font-semibold text-xl'>{ visible }</div>
        </div>
      </div>    
    </div>
  )
}

export default Contact
