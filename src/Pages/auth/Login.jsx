import React, { useState, useEffect } from "react";
import img1 from "../../assets/6931402.jpg";

import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../../store/Userinput";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const { voterId, password } = useSelector((state) => state.userInput);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateInput({ field: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add the login logic here, e.g., calling an API to validate the credentials.
    console.log('Login Submitted:', { voterId, password });
  };

  return (
    <div className="bg-primary flex items-center justify-center h-screen w-full overflow-hidden">
      <div className="bg-white w-[90%] md:w-[70%] lg:w-[70%] h-[96%] flex flex-col items-center md:flex-row rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="h-40 md:h-full md:w-[40%] flex-shrink-0">
          <img
            className="object-cover h-full w-full rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            src={img1}
            alt="Login"
          />
        </div>

        {/* Form Section */}
        <div className="p-6 md:py-3 md:px-20 flex-1 overflow-y-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-2">LOGIN</h2>
          <p className="text-gray-600">Please fill in the form below.</p>
          <Link to={'/auth/signup'} className="text-primary font-bold mb-4 cursor-pointer">
            Don't Have a Voter Id? Signup
          </Link>
          <form className="space-y-10 py-5" onSubmit={handleSubmit}>

            <fieldset className="w-full">
              <label className="font-semibold">Voter Id</label>
              <input
                type="text"
                className="border w-full py-2 px-4 outline-none rounded"
                name="voterId"
                value={voterId}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className="w-full">
              <label className="font-semibold">Password</label>
              <input
                type="password"
                className="border w-full py-2 px-4 outline-none rounded"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </fieldset>

            <button type="submit" className="border w-full py-2 px-4 outline-none rounded-lg bg-primary text-white">
              Submit
            </button>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
