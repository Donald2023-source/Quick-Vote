import React from "react";
import Sidebar from "../Components/Sidebar";

const Dashboard = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar className={""} />
      <div className="md:p-10 py-16 ml-4">{children}</div>
    </div>
  );
};

export default Dashboard;
