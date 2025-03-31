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
        <div className="flex border">
          <div className="w-full flex flex-col gap-4">
            <div className="md:w-[70%] shadow overflow-auto w-full">
              <Chart />
            </div>
            <ActviityBar />
          </div>
          <ElectionStats className={'w-full'} />
        </div>
      </div>
    </div>
  );
};

export default Student;
