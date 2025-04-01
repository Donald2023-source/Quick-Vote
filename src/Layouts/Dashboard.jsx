import React from "react";
import Sidebar from "../Components/Sidebar";

const Dashboard = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-[20%] ml-0">
        {/* Main content */}
        <div className="md:p-7 py-16 px-4">{children}</div>
      </main>
    </div>
  );
};

export default Dashboard;
