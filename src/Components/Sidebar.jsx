import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Menu, Settings } from "@mui/icons-material";
const Sidebar = ({ className }) => {
  const navItems = [
    {
      name: "Dashboard",
      href: "/student-dashboard",
      icon: <SpaceDashboardIcon />,
    },
    { name: "Vote", href: "/student/vote", icon: <HowToVoteIcon /> },
    {
      name: "Voters Guidlines",
      href: "/voters-guidelines",
      icon: <LibraryBooksIcon />,
    },
    { name: "settings", href: "/settings", icon: <Settings /> },
  ];
  return (
    <div className={twMerge("w-1/5 h-screen border", className)}>
      <aside className="p-5">
        <div className="flex items-center gap-5">
          <Menu className="hover:scale-105 text-3xl cursor-pointer" />
          <Link className="" to={"/student-dashboard"}>
            <h3 className="text-white border  bg-primary py-2 px-4 rounded-full w-fit font-bold text-xl">
              <span className="text-blue-400">I</span>vote
            </h3>
          </Link>
        </div>
        <div>
          {navItems.map((item, idx) => {
            <div key={idx}>
              <Link to={item?.href}>
                {item?.icon}
                {item?.name}
              </Link>
            </div>;
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
