import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CandidateDetails from "./CandidateDetails";

const CandidateCard = ({ data, onClick }) => {
  const [isVisible, setIsVisible] = useState(false); // Fixed typo: isVsible -> isVisible

  const handleClick = () => {
    onClick(data); // Pass candidate data to parent
    console.log("Candidate data:", data);
    setIsVisible(true); // Show modal and backdrop
  };

  const handleClose = () => {
    setIsVisible(false); // Hide modal and backdrop
  };

  return (
    <div className="px-2 md:py-6 py-4 shadow-xl rounded-xl relative">
      <div className="flex flex-col gap-1 items-center justify-center">
        <div>
          {data.image ? (
            <img
              className="md:h-32 md:w-32 h-20 w-20 object-cover rounded-full p-2"
              src={data?.image}
              alt={data?.name}
            />
          ) : (
            <AccountCircleIcon />
          )}
        </div>
        <h2 className="text-xl text-primary font-bold">{data?.name}</h2>
        <p className="text-primary">{data?.department}</p>
        <div className="flex md:flex-row flex-col items-center md:gap-9 gap-3 py-3">
          <button
            onClick={handleClick}
            className="border rounded-2xl text-sm bg-primary text-white hover:scale-105 hoverEffect py-2 px-8"
          >
            Vote
          </button>
        </div>
      </div>

      {/* Modal and Backdrop */}
      {isVisible && (
        <div className="fixed border  inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute w-full inset-0 bg-black opacity-50"
            onClick={handleClose} // Click backdrop to close
          />
          {/* Modal */}
          <div className="relative bg-white border w-[60%] shadow-lg rounded-lg">
            <CandidateDetails data={data} onClose={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateCard;