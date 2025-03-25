import React, { useState, useEffect } from "react";
import img1 from "../../assets/Image 3.jpg";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import axios from "axios";
const Signup = () => {
  const [states, setStates] = useState([]);
  const [LGA, setLGA] = useState([]);

  const fetchStates = async () => {
    try {
      const response = await axios.get(
        "https://nga-states-lga.onrender.com/fetch"
      );
      setStates(response.data)
    } catch (error) {
      console.error(error)
    }
    
  };

  useEffect(() => {
    fetchStates();
  }, []);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    stateOfOrigin: "",
    DOB: "",
    LGA: "",
    passport: "",
    IDcard: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  return (
    <div className="flex overflow-hidden">
      <div className="w-1/3 rounded-r-2xl">
        <img className="w-full h-full" src={img1} alt="Signup image" />
      </div>

      <div className="flex-1 border mx-2 h-fit">
        <div className="border h-[95vh] flex items-center justify-center">
          <form
            className="h-full w-[60%] flex flex-col items-center border justify-center"
            action=""
          >
            <label
              htmlFor="file"
              className="cursor-pointer hover:scale-95 hoverEffect"
            >
              <fieldset className="h-20 p-3 w-20  rounded-full bg-primary flex items-center justify-center">
                <label htmlFor="file">
                  <PhotoCamera className="text-gray-300" />
                </label>
                <input className="hidden" type="file" id="file" />
              </fieldset>
            </label>

            <fieldset className="border p-3  text-sm w-full rounded-md">
              <legend className="font-normal text-sm px-4 tracking-wider">
                Full Name
              </legend>
              <input
                className="outline-none"
                type="text"
                placeholder="John Audu"
              />
            </fieldset>

            <div className="w-full">
            <div className="w-[45%]">
              <FormControl className="w-full" fullWidth>
                <InputLabel>State of Origin</InputLabel>
                <Select
                  name="stateOfOrigin"
                  value={formData.stateOfOrigin}
                  onChange={handleChange}
                  className="w-full"
                >
                  {states.map((state, index) => (
                    <MenuItem key={index} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl className="w-full" fullWidth>
                <InputLabel>State of Origin</InputLabel>
                <Select
                  name="stateOfOrigin"
                  value={formData.stateOfOrigin}
                  onChange={handleChange}
                  className="w-full"
                >
                  {states.map((state, index) => (
                    <MenuItem key={index} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
