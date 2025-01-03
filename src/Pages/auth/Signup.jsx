import React, { useState, useEffect } from "react";
import img1 from "../../assets/6931402.jpg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const [data, setData] = useState([]);
  const [passportPreview,   setPassportPreview] = useState(null);

  const dispatch = useDispatch()

  const { fullname, StateOfOrigin, email} = useSelector((state) => state.userInput)
  
  const fetchStates = async () => {
    try {
      const response = await axios.get(
        "https://nga-states-lga.onrender.com/fetch"
      );
      setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchLocalGoverments = async() => {
    try {
      const response = await axios.get(`https://nga-states-lga.onrender.com/fetch/${data}`)
    } catch(error) {
      console.error('An error occured')
    }
  }

  const handleChange = (e) => {
    const { name, files } = e.target;

    if (name === "passport" && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setPassportPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <div className="bg-primary flex items-center justify-center h-screen w-full">
      <div className="bg-white w-[90%] md:w-[70%] lg:w-[60%] h-[95%] flex flex-col md:flex-row rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="h-40 md:h-full md:w-[40%]">
          <img
            className="object-cover h-full w-full rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            src={img1}
            alt="Signup"
          />
        </div>

        {/* Form Section */}
        <div className="p-6 md:p-8 flex-1">
          <h2 className="text-xl md:text-2xl font-bold mb-2">SIGN UP</h2>
          <p className="text-gray-600 mb-4">Please fill in the form below.</p>
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
                  name={fullname}
                  onChange={handleChange}
                  placeholder="Desmond Yusuf"
                />
              </fieldset>

              <fieldset className="flex flex-col">
                <label className="font-semibold">Email</label>
                <input
                  className="border w-full py-2 px-4 outline-none rounded"
                  type="email"
                  name={email}
                  onChange={handleChange}
                  placeholder="desmond234@gmail.com"
                />
              </fieldset>
            </div>

            {/* State of Origin */}
            <fieldset className="flex flex-col">
              <label className="font-semibold">State of Origin</label>
              <select onChange={handleChange}
                className="outline-none cursor-pointer border py-2 px-4 rounded w-full"
                name={StateOfOrigin}
                id=""
              >
                <option value="">Select State of Origin</option>
                {data.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
