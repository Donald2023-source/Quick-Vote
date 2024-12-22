import React from 'react';
import logo from '../assets/pngegg.png';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  const [nav, setNav] = useState(false);

  return (
    <nav>
      <div className='absolute z-40 flex items-center justify-between w-full py-3 px-7'>
        <span className='text-white flex items-center font-semibold space-x-3'>
          <img className='h-10' src={logo} alt="Quick-Vote Logo" />
          <h2 className='text-lg'>Quick-Vote</h2>
        </span>

        <span onClick={() => setNav(!nav)} className='text-white md:hidden cursor-pointer'>
          <MenuIcon />
        </span>

        <div
          className={`${
            nav ? 'translate-x-0' : 'md:translate-x-0 translate-x-32'
          } flex md:flex-row flex-col absolute md:relative md:top-0 lg:left-0 top-20 right-5 items-center gap-5 text-white transition-all`}
        >
          <li
            className={`list-none ${
              location.pathname === '/' ? 'border-b-2 font-semibold' : 'text-white'
            }`}
          >
            <a href="/">Home</a>
          </li>
          <li
            className={`list-none ${
              location.pathname === '/about' ? 'border-b-2 font-semibold' : 'text-white'
            }`}
          >
            <a href="/about">About</a>
          </li>
          <li
            className={`list-none ${
              location.pathname === '/vote' ? 'border-b-2 font-semibold' : 'text-white'
            }`}
          >
            <a href="/vote">Vote</a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
