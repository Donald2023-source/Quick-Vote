import React from "react";
import { Guidelines } from "../data/data";
const VoteGuidelines = () => {
  return (
    <div>
        <h2 className="font-bold text-xl text-primary">VOTER'S GUIDELINE</h2>
      {Guidelines.map((data, index) => (
        <div key={index}>
          <div className="flex items-center gap-2 md:py-1 py-3">
            <span className="py-2 px-4 rounded-full bg-primary text-white">
              {data.id}
            </span>
            <h2>{data.text}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VoteGuidelines;
