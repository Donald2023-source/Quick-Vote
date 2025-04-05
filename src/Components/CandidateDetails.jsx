import React from "react";
import SchoolIcon from "@mui/icons-material/School";
const CandidateDetails = ({ data, onClose }) => {
  console.log(data);

  return <div className="p-10 w-full relative">
    <div>
      <img className="h-28 object-cover rounded-full w-28" src={data.image} alt="" />
      <div>
        <p>vote</p>
        <h2 className="text-2xl text-primary font-bold tracking-wide">{data.name}</h2>
        
      </div>
    </div>
  </div>;
};

export default CandidateDetails;
