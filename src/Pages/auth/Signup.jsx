import React, { useState, useEffect } from "react";
import img1 from "../../assets/6931402.jpg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../../store/Userinput";
import { Link } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState([]); // States list
  const [lga, setLGA] = useState([]); // LGAs for selected state
  const [passportPreview, setPassportPreview] = useState(null);

  const dispatch = useDispatch();

  const { fullName, stateOfOrigin, email, DOB, password, NIN } = useSelector(
    (state) => state.userInput
  );

  // Fetch states
  const fetchStates = async () => {
    try {
      const response = await axios.get(
        "https://nga-states-lga.onrender.com/fetch"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching states:", error.message);
    }
  };

  // Fetch LGAs for selected state
  const fetchLocalGovernments = async () => {
    if (!stateOfOrigin) return; // Prevent API call if no state is selected
    try {
      const response = await axios.get(
        `https://nga-states-lga.onrender.com/?state=${stateOfOrigin}`
      );
      setLGA(response.data);
    } catch (error) {
      console.error("Error fetching LGAs:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "passport" && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setPassportPreview(reader.result);
        dispatch(updateInput({ field: "passport", value: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      dispatch(updateInput({ field: name, value }));
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    fetchLocalGovernments();
  }, [stateOfOrigin]); 

  return (
    <div className="bg-primary flex items-center justify-center h-screen w-full overflow-hidden">
  <div className="bg-white w-[100%] md:w-[70%] lg:w-[70%] h-[98%] flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
    {/* Image Section */}
    <div className="h-40 md:h-full w-full md:w-[40%] flex-shrink-0">
      <img
        className="object-cover h-full w-full rounded-t-lg md:rounded-t-none md:rounded-l-lg"
        src={img1}
        alt="Signup"
      />
    </div>

    {/* Form Section */}
    <div className="p-6 md:py-5 md:px-10 flex-1 overflow-y-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-2">SIGN UP</h2>
      <p className="text-gray-600">Please fill in the form below.</p>
      <Link to={'/auth/login'} className="text-primary font-bold mb-4 cursor-pointer">Already Have voter Id? Login</Link>
      <form className="space-y-4">
        {/* Passport Upload */}
        <fieldset className="border-dashed border-2 border-gray-300 p-4 rounded-lg flex items-center justify-center">
          {passportPreview ? (
            <div className="mt-4">
              <img
                src={passportPreview}
                alt="Passport Preview"
                className="w-24 h-24 md:w-32 md:h-32 object-cover border rounded"
              />
            </div>
          ) : (
            <div>
              <label
                className="cursor-pointer text-center text-blue-600"
                htmlFor="passport"
              >
                Upload Passport
              </label>
              <input
                accept="image/*"
                name="passport"
                onChange={handleChange}
                className="hidden"
                id="passport"
                type="file"
                required
              />
            </div>
          )}
        </fieldset>

        {/* Fullname and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="flex flex-col">
            <label className="font-semibold">Fullname</label>
            <input
              className="border w-full py-2 px-4 outline-none rounded"
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              placeholder="Desmond Yusuf"
              required
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label className="font-semibold">Email</label>
            <input
              className="border w-full py-2 px-4 outline-none rounded"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="desmond234@gmail.com"
            />
          </fieldset>
        </div>

        {/* State of Origin */}
        <fieldset className="flex flex-col">
          <label className="font-semibold">State of Origin</label>
          <select
            className="border w-full py-2 px-4 outline-none rounded"
            name="stateOfOrigin"
            value={stateOfOrigin}
            onChange={handleChange}
            required
          >
            <option value="">Select State of Origin</option>
            {data.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </fieldset>

        {/* LGA */}
        <fieldset className="flex flex-col">
          <label className="font-semibold">LGA</label>
          <select
            className="border w-full py-2 px-4 outline-none rounded"
            name="lga"
            onChange={handleChange}
          >
            <option value="">Select LGA</option>
            {lga.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </fieldset>

        {/* Other Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="flex flex-col">
            <label className="font-semibold">Date of Birth</label>
            <input
              className="border w-full py-2 px-4 outline-none rounded"
              type="date"
              name="DOB"
              value={DOB}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label className="font-semibold">NIN</label>
            <input
              className="border w-full py-2 px-4 outline-none rounded"
              type="number"
              name="NIN"
              value={NIN}
              onChange={handleChange}
              placeholder="19228310295"
              required
            />
          </fieldset>
        </div>

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

        <button className="border w-full py-2 px-4 outline-none rounded-lg bg-primary text-white ">Submit</button>
        
      </form>
    </div>
  </div>
</div>

  );
};

export default Signup;
