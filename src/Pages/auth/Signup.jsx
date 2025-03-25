import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Signup = () => {
  const [states, setStates] = useState([]);
  const [LGA, setLGA] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedLGA, setSelectedLGa] = useState("");

  const fetchStates = async () => {
    try {
      const response = await axios.get(
        "https://nga-states-lga.onrender.com/fetch"
      );
      console.log(response.data);
      setStates(response.data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const handleStates = (e) => {
    const value = e.target.value;
    setSelectedState(value);
    console.log(value);
  };

  const fetchLGA = async () => {
    try {
      const response = await axios.get(
        `https://nga-states-lga.onrender.com/?state=${selectedState}`
      );
      console.log(response.data);
      setLGA(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStates();
    fetchLGA();
  }, [selectedState]);

  return (
    <div className="px-10 h-screen py-3">
      <div className="flex gap-10 items-center justify-center h-full">
        <div className="w-1/3 bg-primary rounded-lg h-3/4 border">
          <h2 className="text-sm">Image section</h2>
        </div>
        <div>
          <form>
            <div className="flex flex-col gap-3  w-full">
              <fieldset className="flex items-center justify-between gap-5">
                <TextField
                  required
                  className="w-72 text-sm"
                  label="Full Name"
                  variant="outlined"
                  InputProps={{ style: { fontSize: "0.9 rem" } }}
                />

                <TextField
                  required
                  type="email"
                  className="w-72 text-sm"
                  label="Email"
                  variant="outlined"
                  InputProps={{ style: { fontSize: "0.9rem" } }}
                />
              </fieldset>

              <fieldset>
                <FormControl fullWidth>
                  <InputLabel>State Of Origin</InputLabel>
                  <Select
                    label="Select State of Origin"
                    className=" px-4 w-64 text-sm rounded"
                    onChange={handleStates}
                  >
                    {states.map((state, index) => (
                      <MenuItem key={index} value={state} className="text-sm">
                        {state}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>LGA</InputLabel>
                  <Select
                    onChange={handleStates}
                    label="Select State of Origin"
                    className=" px-4 w-64 text-sm rounded"
                  >
                    {states.map((state, index) => (
                      <MenuItem key={index} value={state} className="text-sm">
                        {state}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
