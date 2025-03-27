import React, { useState } from "react";
import img1 from "../../assets/Image 3.jpg";
import Button from "../../Components/Button";
import axios from "axios";
import BusinessIcon from "@mui/icons-material/Business";
import { Link } from "react-router-dom";

const Organization = () => {
  const [formData, setFormData] = useState({
    name: "",
    uniqueId: "",
  });
  const [error, setError] = useState("");

  const alphanumericRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // ✅ Validate uniqueId only when input field is updated
    if (name === "uniqueId") {
      if (!alphanumericRegex.test(value)) {
        setError("ID must include both letters and numbers (A,a,1).");
      } else {
        setError(""); // Clear error when valid
      }
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (error) {
      console.error("Fix validation errors before submitting.");
      return;
    }

    try {
      const response = await axios.post(``, formData);
      console.log("The button was clicked", response.data);
    } catch (error) {
      console.error("Error", error);
    }
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

      <form className="flex-1 w-full h-full flex items-center flex-col justify-center mt-20 md:my-auto">
        <div className="w-full flex flex-col items-center gap-3">
          <BusinessIcon />
          <h2 className="text-left font-semibold py-3 tracking-wider">
            Organization Name
          </h2>
        </div>
        <div className="flex items-center justify-center flex-col md:w-[90%] w-full gap-4">
          <p className="text-gray-400 text-sm leading-7 md:px-32 px-20 text-center py-3">Please enter the appropriate informations for the fields below. ID should not be less than 5 characters</p>
          <input
            onChange={handleChange}
            value={formData.name}
            name="name"
            className="py-3 px-10 w-[60%] border outline-none text-left"
            type="text"
            placeholder="Enter Organization Name"
            required
          />
          <input
            onChange={handleChange}
            value={formData.uniqueId}
            name="uniqueId"
            className="py-3 px-10 w-[60%] border outline-none text-left"
            type="text"
            placeholder="Enter unique Id (Alphanumeric)"
            required
            maxLength={5}
          />
          {error && <h2 className="text-red-400">{error}</h2>}
        </div>
        <Button onClick={handleSignup}>Submit</Button>
        <p>Already have an account? <Link className="font-bold text-primary" to={'/login/organization'}>Login</Link></p>
      </form>
    </div>
  );
};

export default Organization;
