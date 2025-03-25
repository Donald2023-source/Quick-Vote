import React, { useEffect } from "react";
import axios from "axios";
import { VotingAnimation } from "../../Components/VotingSvg";

const Signup = () => {

  const fetchStates = () => {
    try {
      const response = axios.get("https://nga-states-lga.onrender.com/fetch");
      if (response.ok) {
        console.log(response);
      }
    } catch (error) {
      console.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);
  


  return (
    <div className="px-10 h-screen py-3">
      <div className=" flex gap-10 items-center justify-center h-full">
        <div className="w-1/3 bg-primary rounded-lg h-3/4 border">
          <h2>Image section </h2>
        </div>
        <div>
          <form action="">
            <div className="flex gap-3">
              <fieldset className="border w-64 px-4 py-2 text-sm rounded ">
                <legend className="text-sm text-gray-400">Full Name</legend>
                <input type="text" placeholder="Full Name" />
              </fieldset>
              <fieldset className="border w-64 px-4 py-2 text-sm rounded ">
                <legend className="text-sm text-gray-400">Email</legend>
                <input type="text" placeholder="user@bingham.edu.ng" />
              </fieldset>

              <select name="" id="">
                <option value="">Select State of Origin </option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
