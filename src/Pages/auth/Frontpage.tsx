import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import svg from "../../assets/Geomtry1.svg";

const Frontpage = () => {
  return (
    <div className="w-screen h-screen bg-primary relative">
      <div className="w-full h-full z-20 absolute inset-0 flex flex-col  items-center justify-center">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white border py-2 px-4 rounded-full w-fit font-bold text-xl"
        >
          <span className="text-blue-400">I</span>vote
        </motion.div>
        <p className="pt-4 font-bold text-white">Please select a role</p>
        <div className="flex md:flex-row flex-col z-20 gap-8 px-4 py-10">
          <Link
            to={"/auth/signup/organization"}
            className="bg-[#ffffffc6] hover:scale-105 hoverEffect cursor-pointer backdrop:blur-2xl px-6 w-64 flex flex-col rounded-lg  gap-1 items-center justify-center py-10"
          >
            <BusinessIcon className="text-gray-500 text-xl" />
            <h2 className="text-base font-semibold tracking-wider">
              Organization
            </h2>
          </Link>

          <Link
            to={"/auth/signup/cooperative"}
            className="bg-[#ffffffc6] hover:scale-105 hoverEffect cursor-pointer backdrop:blur-2xl px-6 w-64 flex flex-col rounded-lg gap-1 items-center justify-center py-10"
          >
            <PeopleIcon className="text-gray-500 text-xl" />
            <h2 className="text-base font-semibold tracking-wider">
              Cooperative
            </h2>
          </Link>

          <Link
            to={"/auth/signup/student"}
            className="bg-[#ffffffc6] hover:scale-105 hoverEffect cursor-pointer backdrop:blur-2xl px-6 w-64 flex flex-col rounded-lg gap-1 items-center justify-center py-10"
          >
            <AccountCircleIcon className="text-gray-500 text-xl" />
            <h2 className="text-base font-semibold tracking-wider">Student</h2>
          </Link>
        </div>
        <motion.img
          initial={{ y: 10, x: 20 }}
          animate={{ x: 0, y: 1 }}
          transition={{ duration: 1, repeatType: "reverse", repeat: Infinity }}
          className="absolute h-[42rem] left-0 right-32 -top-4"
          src={svg}
          alt=""
        />
      </div>
      <div className="bg-black/30 w-full h-full absolute inset-0" />
    </div>
  );
};

export default Frontpage;
