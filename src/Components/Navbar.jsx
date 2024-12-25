import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/pngegg.png';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const location = useLocation();
  const [nav, setNav] = useState(false);

  return (
    <nav className="relative">
      <div className="absolute z-40 flex items-center justify-between overflow-hidden w-full py-3 md:px-7 px-4">
        
        <span className="text-white flex items-center font-semibold space-x-3">
          <img className="h-10" src={logo} alt="Quick-Vote Logo" />
          <h2 className="text-lg">Quick-Vote</h2>
        </span>

        {/* Hamburger Menu for mobile */}
        <span
          onClick={() => setNav(!nav)}
          className="text-white md:hidden cursor-pointer"
        >
          <MenuIcon />
        </span>

        {/* Navigation Links */}
        <div
          className={`${
            nav
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-full opacity-0'
          } md:translate-x-0 md:opacity-100 flex flex-col absolute md:relative md:top-0 lg:left-0 top-20 right-5 items-center gap-5 text-white transition-all transform md:flex-row md:flex`}
        >
          {/* Home Link */}
          <li
            className={`list-none ${
              location.pathname === '/' ? 'border-b-2 font-semibold' : 'text-white'
            }`}
          >
            <a href="/">Home</a>
          </li>
          {/* About Link */}
          <li
            className={`list-none ${
              location.pathname === '/about' ? 'border-b-2 font-semibold' : 'text-white'
            }`}
          >
            <a href="/about">About</a>
          </li>
          {/* Vote Link */}
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
