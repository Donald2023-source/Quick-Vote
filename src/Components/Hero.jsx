import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import image1 from '../assets/Image 1.jpg';
import image2 from '../assets/Image 2.jpg';
import image3 from '../assets/Image 3.jpg';
import image4 from '../assets/Image 4.jpg';

const Hero = () => {
  
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    { id: 1, img: image1, text: 'A Better Way To Be Better' },
    { id: 2, img: image2, text: "Let's work Together" },
    { id: 3, img: image3, text: "Raise High our Pride" },
    { id: 4, img: image4, text: "A Better System of Doing Things" },
  ];

  useEffect(() => {
    if (!images.length) return; 

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <section className="w-full h-[500px] overflow-hidden relative">
      <div className="flex transition-transform duration-1000 ease-in-out w-full h-full" 
           style={{ transform: `translateX(-${currentImage * 100}%)` }}>
        
        {images.map((item) => (
          <div className="w-screen h-[500px] flex-shrink-0" key={item.id}>
            <img
              className="object-cover w-full h-full"
              src={item.img}
              alt={`Slide ${item.id}`}
            />
            <div className='absolute top-0 w-full h-full bg-black/60 z-10'/> 
            <div className='absolute top-0 h-full flex items-center justify-center w-full text-white z-20 font-semibold'>
              <span className='flex flex-col items-center space-y-10'>
                <TypeAnimation className='md:text-5xl text-2xl text-center w-full' sequence={[`${item.text}`, 200]} speed={50} repeat={Infinity}/>
                <button className='cursor-pointer md:text-xl z-20 py-2 px-4 rounded-md bg-green-800'>Get Started</button>
              </span>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Hero;
