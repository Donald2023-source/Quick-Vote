import React, { useState, useEffect } from 'react';
import image1 from '../assets/Image 1.jpg';
import image2 from '../assets/Image 2.jpg';
import image3 from '../assets/Image 3.jpg';
import image4 from '../assets/Image 4.jpg';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@mui/material';

const Hero = () => {
  const images = [
    { id: 1, img: image1, text: 'A Better Way To Be Better' },
    { id: 2, img: image2, text: "Let's work Together" },
    { id: 3, img: image3, text: "Raise High our Pride" },
    { id: 4, img: image4, text: "A Better System of Doing Things" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="relative w-screen h-[500px] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((item) => (
          <div className="w-screen h-[500px] flex-shrink-0" key={item.id}>
            <img
              className="object-cover w-full h-full"
              src={item.img}
              alt={`Slide ${item.id}`}
            />
            <div className='absolute top-0 w-full h-full bg-black/60 z-10'/> 
            <div className='absolute top-0 h-full flex items-center justify-center w-full text-white z-20 font-semibold text-5xl'>
              <span className='flex flex-col items-center space-y-10'>
                <TypeAnimation className='md:text-5xl text-2xl' sequence={[`${item.text}`, 500]} speed={50} repeat={Infinity}/>
                <button className='cursor-pointer text-xl z-20 py-2 px-4 rounded-md bg-gradient-to-br  from-green-800 to-green-500'>Get Started</button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;