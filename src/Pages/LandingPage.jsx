import React from 'react';
import Navbar from '../Components/Navbar';
import img1 from '../assets/istockphoto-1269463469-612x612.jpg';
import { motion } from 'framer-motion';

const LandingPage = () => {

  const steps = [
    { name: 'Step 1', role: 'SIGN UP', text: 'Create an account on this System to vote.'},
    { name: 'Step 2', role: 'VOTE', text: 'Vote you preffered candidate.'},
    { name: 'Step 3', role: 'VIEW ELECTION RESULTS', text: 'View election results of various candidates.'},
  ]
  return (
    <div>
      <div className="flex items-center md:flex-row gap-2 px-10 py-4 flex-col">
        {/* Text Section with Motion Effects */}
        <motion.div
          className="flex md:gap-10 gap-3 flex-col md:text-left text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="md:text-6xl text-4xl  text-center w-[60%] mx-auto text-primary font-bold">
            Evolve Your Way Of Decision With Ivote Online Voting System
          </h2>
          {/* <p className="leading-loose md:pr-5">
            Let’s revolutionize the voting process by making it simpler, faster, and more accessible for everyone. With
            cutting-edge technology and user-friendly tools, we aim to empower individuals to participate seamlessly in
            elections, ensuring every voice is heard and every vote is securely counted. Together, we can reshape the
            future of voting.
          </p> */}
        </motion.div>

        
        {/* <motion.img
          className="rounded-lg"
          src={img1}
          alt="Voting system illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        /> */}
      </div>

      <div className='bg-primary py-3 flex items-center justify-between px-6  '>
        {
          steps.map((item, idx) => (
            <div className={`${item.role === 'SIGN UP' ? 'bg-blue-200 rounded-lg shadow-xl' : 'text-white'} px-4 py-20`} key={idx}>
                <h4 className='text-primary/50'>{item.name}</h4>
                <h1 className={`font-bold text-xl  ${item.role === 'SIGN UP'? 'text-primary' : 'text-white '}`}>{item.role}</h1>
                <p className='text-lg'>{item.text}</p>  
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default LandingPage;
