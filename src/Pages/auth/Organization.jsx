import React, { useState, useEffect } from "react";
import img1 from "../../assets/Image 3.jpg";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { PhotoCamera, Upload } from "@mui/icons-material";
import axios from "axios";
const Organization = () => {
  const [states, setStates] = useState([]);
  const [LGA, setLGA] = useState([]);

  const fetchStates = async () => {
    try {
      const response = await axios.get(
        "https://nga-states-lga.onrender.com/fetch"
      );
      setStates(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLGA = async () => {
    try {
      const response = await axios.get(
        `https://nga-states-lga.onrender.com/?state=${formData.stateOfOrigin}`
      );
      setLGA(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStates();
    if (formData.stateOfOrigin !== "") {
      fetchLGA();
    }
  }, [states]);

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
    <div className="flex md:flex-row flex-col md:overflow-hidden">
      <div className="md:w-1/2 md:h-screen h-48 md:rounded-r-2xl">
        <img
          className="w-full h-full object-cover"
          src={img1}
          alt="Signup image"
        />
      </div>

      <div className="flex-1 w-full h-full flex items-center flex-col justify-center my-auto">
        <h2 className="text-left font-medium py-3 tracking-wider">Organization Name</h2>
        <input
            className="py-3 px-10 w-[60%] border outline-none text-left"
            type="text"
            placeholder="Enter business Name"
          />
      </div>
    </div>
  );
};

export default Organization;
