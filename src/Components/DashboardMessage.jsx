import React from "react";
import VotingLoader from "./CastLoader";
import MyCalendar from "./Calendar";

const DashboardMessage = ({ name, post }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-6">
        <div className="flex bg-primary text-white w-full items-center justify-between rounded-xl shadow-md p-2 sm:p-4 min-h-[200px] sm:min-h-[270px] px-4 sm:px-10">
          <div className="flex flex-col gap-3 sm:gap-5">
            <h4 className="font-semibold text-sm sm:text-lg tracking-wider">
              Ongoing Elections
            </h4>
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl w-[80%] leading-6 sm:leading-7 text-white">
              {post}
            </h2>
            <button className="py-1 sm:py-2 w-fit border bg-gradient-to-r hover:from-primary hover:to-primary/60 hoverEffect hover:text-white hover:scale-105 px-6 sm:px-10 rounded-full mx-auto text-sm sm:text-base">
              Vote now
            </button>
          </div>
          <VotingLoader className="px-0 rounded bg-transparent w-24 sm:w-auto" />
        </div>
        
      </div>
    </div>
  );
};

export default DashboardMessage;
