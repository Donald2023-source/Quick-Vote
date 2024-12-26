import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // For the hamburger menu icon

const Navbar = () => {
  const [nav, setNav] = useState(false); // State for toggling the mobile menu visibility

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <nav className='relative'>
      {/* Wave Background */}
      <div>
        <svg className='absolute z-0 md:-top-[50px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#525BC3" fillOpacity="0.9" d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,240C840,277,960,299,1080,272C1200,245,1320,171,1380,133.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>

      {/* Navbar Content */}
      <div className='relative h-full z-10 flex items-center justify-between px-8 py-4'>
        <img className='h-10' src={logo} alt="Logo" />

        {/* Hamburger Menu for Mobile */}
        <span
          onClick={() => setNav(!nav)}
          className='text-white md:hidden cursor-pointer'
        >
          <MenuIcon />
        </span>

        {/* Navigation Links for Desktop and Mobile */}
        <div
          className={`${
            nav ? 'left-0 opacity-100' : 'left-full opacity-0'
          } md:opacity-100 md:left-0 flex items-center justify-center gap-10 h-screen md:h-auto md:flex-row flex-col absolute top-0 left-0 w-full bg-blue-500 transition-all duration-300 ease-in-out`}
        >
          {navLinks.map(link => (
            <Link key={link.name} to={link.href} className="text-white hover:underline">
              {link.name}
            </Link>
          ))}
          <button className='py-3 px-6 text-white rounded-lg bg-[#343da3d2]'>Get Started</button>
          <h2 onClick={() => setNav(false)} className='absolute top-4  right-10 font-bold text-white text-lg cursor-pointer'>X</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
