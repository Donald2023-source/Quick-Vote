import { Avatar } from "@mui/material";
import React from "react";
import { Notifications } from "@mui/icons-material";
import DashboardMessage from "../../Components/DashboardMessage";
import MyCalendar from "../../Components/Calendar";
import Chart from "../../Components/BarChart";
import ActviityBar from "../../Components/ActviityBar";
import ElectionStats from "../../Components/ElectionStats";

const Student = () => {
  return (
    <div className="p-2 sm:p-4">
      <div className="lg:flex hidden gap-5 items-center justify-end mb-4">
        <Avatar className="hover:scale-105 hoverEffect cursor-pointer">
          D
        </Avatar>
        <span className="hover:scale-105 hoverEffect cursor-pointer">
          <Notifications />
        </span>
      </div>
      <div className="flex items-center w-full justify-between">
        <DashboardMessage name="Donald" />
      </div>
      <div className="flex flex-col sm:flex-row my-5 justify-between gap-4 sm:gap-5 w-full">
        <div className="w-full sm:w-[60%] flex flex-col gap-4">
          <div className="shadow w-full">
            <Chart />
          </div>
          <ActviityBar />
        </div>
        <ElectionStats className="w-full sm:w-[35%] border mx-0 sm:mx-4" />
      </div>
    </div>
  );
};
export default Student;
