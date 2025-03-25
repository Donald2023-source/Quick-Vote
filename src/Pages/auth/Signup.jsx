import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const Signup = () => {
  const [states, setStates] = useState([]);

  const fetchStates = async () => {
    try {
      const response = await axios.get("https://nga-states-lga.onrender.com/fetch");
      console.log(response.data);
      setStates(response.data); 
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <div className="px-10 h-screen py-3">
      <div className="flex gap-10 items-center justify-center h-full">
        <div className="w-1/3 bg-primary rounded-lg h-3/4 border">
          <h2 className="text-sm">Image section</h2>
        </div>
        <div>
          <form>
            <div className="flex gap-3">
              <fieldset>
                <TextField required className="w-64 text-sm" label="Full Name" variant="outlined" InputProps={{ style: { fontSize: '0.9 rem' } }}  />
              </fieldset>

              <fieldset>
                <TextField required type="email" className="w-64 text-sm" label="Email" variant="outlined" InputProps={{ style: { fontSize: '0.9rem' } }}  />
              </fieldset> 
              
             <FormControl className="w-64 f" fullWidth>
              <InputLabel>State Of Origin</InputLabel>
             <Select label="Select State of Origin" className="border px-4 py-2 w-64 text-sm rounded">
                {states.map((state, index) => (
                  <MenuItem key={index} value={state} className="text-sm">
                    {state}
                  </MenuItem>
                ))}
              </Select>
             </FormControl>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
