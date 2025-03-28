import React from "react";
import Sidebar from "../Components/Sidebar";

const Dashboard = ({ children }) => {
  return (
    <div className="flex flex-grow">
      <Sidebar className={""} />
      <div className="md:p-7 py-16 ml-4 flex-1">{children}</div>
    </div>
  );
};

export default Dashboard;
