import { Dashboard, Menu } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import DashboardMessage from "../../Components/DashboardMessage";
import MyCalendar from "../../Components/Calendar";
import Chart from "../../Components/BarChart";
import ActviityBar from "../../Components/ActviityBar";

const Student = () => {
  return (
    <div>
      <div className="flex items-end justify-end">
        <div className="flex items-center gap-3 font-semibold">
          <Avatar>J</Avatar>
          <p>Juan</p>
          <Menu className="md:hidden" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary">
          <span className="text-primary/50">Hello,</span> Juan
        </h2>
        <p className="text-primary py-2">
          Welcome to Ivote, Let's help you make the right decision
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-[5%] max-w-full">
        {/* This will the the Dashboard-Message and calender */}
        <div className="md:w-[65%] w-full border">
          <DashboardMessage name={'Juan'} />
        </div>
        <div className="w-full my-4 border flex-1"><MyCalendar /></div>
      </div>

      <div className="w-full flex gap-[5%] items-center">
        <div className="w-[65%] flex flex-col gap-8  border">
          {/* Chart and Activity Bar */}
          <div>
          <Chart/>
          </div>
          <ActviityBar />
        </div>
        
        <div className="flex-1 border">
          {/* Election Stats */}

        </div>
      </div>
    </div>
  );
};

export default Student;
