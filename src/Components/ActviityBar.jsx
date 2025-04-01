import React from "react";
import { Completed, Pending } from "./State";

const ActviityBar = () => {
  return (
    <div className="w-full border p-5 my-4 shadow-lg rounded-lg">
      <div>
        <div>
          <h2 className="font-semibold text-primary tracking-wider text-center">
            Elections Activity
          </h2>
          <div className="flex justify-between items-center w-[50%] mx-auto">
            <Pending />
            <Completed />
          </div>
        </div>

        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center justify-between">
            <h2>President Student Council</h2>
            <Pending />
          </div>
          <div className="flex items-center justify-between">
            <h2 >Student Post 1</h2>
            <Completed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActviityBar;
