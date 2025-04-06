import React from "react";
import Sidebar from "../Components/Sidebar"; // Adjust path as needed
import { Avatar } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import OraganizationSidebar from "../Components/OrganizationSIdebar";

const OrganizationLayout = ({ children }) => {
 

  return (
    <div className="flex min-h-screen">
      <OraganizationSidebar />
      <main className="flex-1 md:ml-[20%] ml-0">
        <div className="hidden lg:flex items-end pt-7 px-7 justify-end">
          <div className="flex items-center gap-3 font-semibold">
            <Avatar>J</Avatar>
            <p>Juan</p>
          </div>
        </div>
        {/* Main content */}
        <div className="md:p-7 py-16 px-4">{children}</div>
      </main>
    </div>
  );
};

export default OrganizationLayout;
