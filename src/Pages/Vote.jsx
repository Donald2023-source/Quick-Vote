import React, { useState } from "react";
import CandidateCard from "../Components/CandidateCard";
import { Candidates } from "../data/data";
import CandidateDetails from "../Components/CandidateDetails";

const Vote = () => {
  
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleClick = (candidate) => {
      setSelectedCandidate(candidate);
      console.log(selectedCandidate)
  };

  return (
    <div>
      <div>
        <h2 className="text-primary md:text-left text-center py-3 text-2xl font-bold">
          VOTE NOW
        </h2>

        <div>
          <div className="flex items-center flex-col justify-center text-center ">
            <h2 className="text-primary font-semibold tracking-wider text-2xl">
              President Student Council
            </h2>
            <p className="text-primary text-sm border-b pb-2">
              You can Only Vote for One Candidate
            </p>
           
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3 py-4">
            {Candidates.President.map((data) => (
              <CandidateCard
                onClick={handleClick}
                key={data.image} // Consider using a unique id if available
                data={data}
              />
            ))}
          </div>

          <div className="mt-5 mb-2">
            <h2 className="text-primary border-b font-bold text-center text-2xl py-5">
              Vice-President Student Council
            </h2>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3 py-4">
              {Candidates.VicePresident.map((data) => (
                <CandidateCard 
                  key={data.image} // Consider using a unique id if available
                  data={data}
                  onClick={handleClick}
                />
              ))}
            </div>
          </div>

          <div className="mt-5 mb-2">
            <h2 className="text-primary border-b font-bold text-center text-2xl py-5">
              Secretary Student Council
            </h2>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3 py-4">
              {Candidates.VicePresident.map((data) => (
                <CandidateCard
                  key={data.image}
                  data={data}
                  onClick={handleClick}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Vote;
