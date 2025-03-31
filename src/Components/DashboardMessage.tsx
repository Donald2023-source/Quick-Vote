import React from "react";
import VotingLoader from "./CastLoader";
import MyCalendar from "./Calendar";

const DashboardMessage = ({ name }) => {
  return (
    <div className="w-full">
      <div className="py-2 flex flex-col gap-1">
        <span className="flex gap-1 font-bold text-lg md:text-3xl text-primary/40">
          Hello, <h2 className="text-primary"> {name}! </h2>
        </span>
        <p className="text-sm text-primary md:py-3 md:font-semibold">
          Welcome to Quick vote, let's vote!.
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-between md:items-center md:w-full">
        <div className="flex bg-primary text-white md:w-[60%] items-center justify-between rounded-xl shadow-md p-4 my-3 min-h-[300px]">
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white text-lg tracking-wider">
              Ongoing Elections
            </h4>
            <h2 className="font-bold text-xl w-[80%] leading-7 text-white">
              President Student Council
            </h2>
            <button className=" py-2 w-fit border bg-gradient-to-r hover:from-primary hover:to-primary/60 hoverEffect hover:text-white hover:scale-105 px-10 rounded-full mx-auto">
              Vote now
            </button>
          </div>

          <VotingLoader className={"px-0 rounded bg-transparent"} />
        </div>
        <MyCalendar className={'w-full'} />
      </div>
    </div>
  );
};

export default DashboardMessage;
