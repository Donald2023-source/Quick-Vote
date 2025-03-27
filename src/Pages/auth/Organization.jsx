import React, { useState, useEffect } from "react";
import img1 from "../../assets/Image 3.jpg";
import Button from "../../Components/Button";
import axios from "axios";
import BusinessIcon from "@mui/icons-material/Business";

const Organization = () => {
  const [name, setName] = useState();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(``);
      console.log("The button was clicked");
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="flex md:flex-row flex-col md:overflow-hidden">
      <div className="md:w-1/2 md:h-screen h-48 md:rounded-r-2xl">
        <img
          className="w-full h-full object-cover"
          src={img1}
          alt="Signup image"
        />
      </div>

      <form className="flex-1 w-full h-full flex items-center flex-col justify-center my-auto">
        <div className="w-full flex flex-col items-center gap-3">
          <BusinessIcon />
          <h2 className="text-left font-medium py-3 tracking-wider">
            Organization Name
          </h2>
        </div>
        <input
          onChange={handleChange}
          value={name}
          className="py-3 px-10 w-[60%] border outline-none text-left"
          type="text"
          placeholder="Enter Organization Name"
        />
      </form>
      <Button onClick={handleSignup}>Submit</Button>
    </div>
  );
};

export default Organization;
