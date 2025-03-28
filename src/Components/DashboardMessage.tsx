import React from "react";
import VotingLoader from "./CastLoader";

const DashboardMessage = ({ name }) => {
  return (
    <div className="w-[50%]">
      <div>
        <span className="flex gap-1 font-bold text-3xl text-primary/40">
          Hello, <h2 className="text-primary"> {name}! </h2>
        </span>
        <p className="text-sm text-primary py-2">Welcome to Quick vote, let's vote!.</p>
      </div>
      <div className="flex items-center rounded-xl border p-4 my-3">
        <div className="flex flex-col gap-5">
        <h4 className="font-semibold text-primary text-lg tracking-wider">Ongoing Elections</h4>
        <h2 className="font-bold text-3xl w-[80%] leading-10 text-primary">President Student Council</h2>
        <button className=" py-2 border-primary w-fit border bg-gradient-to-r hover:from-primary hover:to-primary/60 hoverEffect hover:text-white px-10 rounded-full mx-auto">Vote now</button>
        </div>
        <VotingLoader className={'rounded-xl'} />
      </div>
    </div>  
  );
};

export default DashboardMessage;
