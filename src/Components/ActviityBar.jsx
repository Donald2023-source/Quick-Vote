import React from "react";
import { Completed, Pending } from "./State";

const ActviityBar = () => {
  return (
    <div className="w-full border p-3 sm:p-5 my-4 shadow-lg rounded-lg">
      <h2 className="font-semibold text-primary tracking-wider text-center text-sm sm:text-base">
        Elections Activity
      </h2>
      <div className="flex justify-between items-center w-full mx-auto py-2">
        <Pending />
        <Completed />
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 py-4">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <h2>President Student Council</h2>
          <Pending />
        </div>
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <h2>Student Post 1</h2>
          <Completed />
        </div>
      </div>
    </div>
  );
};

export default ActviityBar;
