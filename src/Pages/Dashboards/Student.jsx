import { Dashboard, Menu } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import DashboardMessage from "../../Components/DashboardMessage";
import MyCalendar from "../../Components/Calendar";
import Chart from "../../Components/BarChart";
import ActviityBar from "../../Components/ActviityBar";
import ElectionStats from "../../Components/ElectionStats";
import { useFetch } from "../../Hooks/useFetch";


const Student = () => {
  const Posts = [
    "President Student Council",
    "Student Post 2",
    "Student Post 3",
    "Student Post 4",
  ];

  const { data} = useFetch('link to fetch posts')

  return (
    <div className="flex flex-col gap-6">
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
        <div className="md:w-[65%] w-full">
          <DashboardMessage post={"President Student Council"} name={"Juan"} />
        </div>
        <div className="w-full my-4 flex-1">
          <MyCalendar />
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col gap-[5%] items-center">
        <div className="md:w-[65%] flex flex-col gap-8">
          {/* Chart and Activity Bar */}
          <div>
            <Chart Posts={Posts} />
          </div>
          <ActviityBar />
        </div>

        <div className="flex-1 w-full h-full">
          {/* Election Stats */}
          <ElectionStats />
        </div>
      </div>
    </div>
  );
};

export default Student;
