import React from "react";
import VotingLoader from "./CastLoader";
import MyCalendar from "./Calendar";

const DashboardMessage = ({ name }) => {
  return (
    <div className="w-full px-2 sm:px-4">
      <div className="flex flex-col gap-1">
        <span className="flex gap-1 font-bold text-base sm:text-lg md:text-3xl text-primary/40">
          Hello, <h2 className="text-primary"> {name}! </h2>
        </span>
        <p className="text-xs sm:text-sm text-primary py-1 md:py-3 md:font-semibold">
          Welcome to Quick vote, let's vote!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-6 my-4">
        <div className="flex bg-primary text-white w-full sm:w-[60%] items-center justify-between rounded-xl shadow-md p-2 sm:p-4 min-h-[200px] sm:min-h-[270px] px-4 sm:px-10">
          <div className="flex flex-col gap-3 sm:gap-5">
            <h4 className="font-semibold text-sm sm:text-lg tracking-wider">
              Ongoing Elections
            </h4>
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl w-full sm:w-[80%] leading-6 sm:leading-7 text-white">
              President Student Council
            </h2>
            <button className="py-1 sm:py-2 w-fit border bg-gradient-to-r hover:from-primary hover:to-primary/60 hoverEffect hover:text-white hover:scale-105 px-6 sm:px-10 rounded-full mx-auto text-sm sm:text-base">
              Vote now
            </button>
          </div>
          <VotingLoader className="px-0 rounded bg-transparent w-24 sm:w-auto" />
        </div>
        <MyCalendar className="w-full sm:w-[80%] h-full" />
      </div>
    </div>
  );
};

export default DashboardMessage