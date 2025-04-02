import React from "react";
import CandidateCard from "../Components/CandidateCard";
import { Candidates } from "../data/data";
const Vote = () => {
  return (
    <div>
      <div>
        <h2 className="text-primary text-2xl font-semibold">
          You May Now Cast Your Votes
        </h2>

        <div>
          <div className="flex items-center flex-col justify-center text-center ">
            <h2 className="text-primary font-semibold tracking-wider text-xl">
              {/* The post will be entered dynamically */}
              President Student Council
            </h2>
            <p className="text-primary text-sm">
              You can Only Vote for One Candidate
            </p>
          </div>
          <div>
            {
                Candidates.map((data) => (

                    <CandidateCard data={data} />
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vote;
