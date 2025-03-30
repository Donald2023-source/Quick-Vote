import React from "react";
import VotingLoader from "./CastLoader";
import MyCalendar from "./Calendar";

const DashboardMessage = ({ name }) => {
  return (
    <div className="w-full">
      <div>
        <span className="flex gap-1 font-bold text-3xl text-primary/40">
          Hello, <h2 className="text-primary"> {name}! </h2>
        </span>
        <p className="text-sm text-primary py-4 font-semibold">
          Welcome to Quick vote, let's vote!.
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex w-[50%] items-center justify-between rounded-xl shadow-md p-4 my-3 min-h-[300px]">
          <div className="flex flex-col gap-8">
            <h4 className="font-semibold text-primary text-lg tracking-wider">
              Ongoing Elections
            </h4>
            <h2 className="font-bold text-xl w-[80%] leading-7 text-primary">
              President Student Council
            </h2>
            <button className=" py-2 border-primary w-fit border bg-gradient-to-r hover:from-primary hover:to-primary/60 hoverEffect hover:text-white px-10 rounded-full mx-auto">
              Vote now
            </button>
          </div>

          <VotingLoader className={"px-0"} />
        </div>
        <MyCalendar/>
      </div>
    </div>
  );
};

export default DashboardMessage;
