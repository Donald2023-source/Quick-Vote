import React, { useState, useEffect } from 'react';
import image1 from '../assets/Image 1.jpg';
import image2 from '../assets/Image 2.jpg';
import image3 from '../assets/Image 3.jpg';
import image4 from '../assets/Image 4.jpg';

const Hero = () => {
  const images = [
    { id: 1, img: image1 },
    { id: 2, img: image2 },
    { id: 3, img: image3 },
    { id: 4, img: image4 },
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
          </div>
        ))}
      </div>

      <div className='absolute top-0 w-full h-full bg-black/60'/>
    </div>
  );
};

export default Hero;
