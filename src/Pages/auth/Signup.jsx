import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
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
      setStates(response.data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const handleStates = (e) => {
    const value = e.target.value;
    setSelectedState(value);
  };

  const fetchLGA = async () => {
    try {
      const response = await axios.get(
        `https://nga-states-lga.onrender.com/?state=${selectedState}`
      );
      setLGA(Array.isArray(response.data) ? response.data : []);
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
            <div className="flex flex-col gap-3  border w-full">
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

              <fieldset className="flex w-full items-center gap-5">
                <FormControl className="w-1/2">
                  <InputLabel>State Of Origin</InputLabel>
                  <Select
                    label="Select State of Origin"
                    onChange={handleStates}
                  >
                    {states.map((state, index) => (
                      <MenuItem key={index} value={state} className="text-sm">
                        {state}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl className="w-1/2">
                  <InputLabel>LGA</InputLabel>
                  <Select onChange={handleStates} label="Select LGA">
                    {LGA.map((lga, index) => (
                      <MenuItem key={index} value={lga} className="text-sm">
                        {lga}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </fieldset>

             <Button className="cursor-pointer">
              <label className="h-full w-full" htmlFor="file">Upload ID</label>
              <input className="hidden" type="file" name="" id="file" />
             </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
