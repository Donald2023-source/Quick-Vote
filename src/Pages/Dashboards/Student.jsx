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
    <div>
      <div>
        <div className="lg:flex hidden gap-5 items-center justify-end">
          <Avatar className="hover:scale-105 hoverEffect cursor-pointer">
            D
          </Avatar>
          <span className="hover:scale-105 hoverEffect cursor-pointer">
            <Notifications />
          </span>
        </div>

        <div className="flex items-center w-full justify-between">
          <DashboardMessage name={"Donald"} />
        </div>
        <div className="flex md:flex-row my-5 justify-between gap-5 flex-col w-full">
          <div className="md:w-[60%] flex flex-col gap-4">
            <div className="shadow w-full">
              <Chart />
            </div>
            <ActviityBar />
          </div>
          <ElectionStats className=" flex-1 w-[30%] border mx-4" />
        </div>
      </div>
    </div>
  );
};

export default Student;
