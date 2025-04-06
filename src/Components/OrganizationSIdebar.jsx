import React from "react";
import { twMerge } from "tailwind-merge";
import { Link, useLocation, useParams } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Menu, Settings } from "@mui/icons-material";
import { Avatar } from "@mui/material";


const OraganizationSidebar = ({ className }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const path = useLocation();
  
  const role = path.pathname.split("/")[1].replace("dashboard", "").replace("-", "")
  

  const navItems = [
    {
      name: "Dashboard",
      href: "/student-dashboard",
      icon: <SpaceDashboardIcon />,
    },
    { name: "Vote", href: `/${role}/vote`, icon: <HowToVoteIcon /> },
    {
      name: "Voters Guidelines",
      href: "/voters-guide",
      icon: <LibraryBooksIcon />,
    },
    { name: "Settings", href: "/settings", icon: <Settings /> },
  ];


  React.useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <>
      <div className="md:hidden fixed bg-white p-2 top-0 w-full justify-between z-30 flex items-center">
        <div>
          <Link to="/student-dashboard">
            <h3 className="text-white bg-primary py-2 px-4 rounded-full w-fit font-bold text-xl">
              <span className="text-blue-400">I</span>vote
            </h3>
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Avatar
            className="hover:scale-105 hoverEffect cursor-pointer"
            sx={{ width: 30, height: 30, fontSize: 14 }}
          >
            D
          </Avatar>
          {isOpen === false && (
            <button
              className="p-2 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu />
            </button>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={twMerge(
          "fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out",
          "bg-white border-r shadow-lg",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "w-64 md:w-1/5 h-screen",
          className
        )}
      >
        <aside className="p-5 h-full flex flex-col">
          <div className="flex items-center justify-between gap-5 mb-8">
            <Link to="/student-dashboard">
              <h3 className="text-white bg-primary py-2 px-4 rounded-full w-fit font-bold text-xl">
                <span className="text-blue-400">I</span>vote
              </h3>
            </Link>
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col gap-4 overflow-hidden">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.href}
                className={twMerge(
                  "flex items-center gap-4 py-2 px-4 rounded-lg transition-all duration-200",
                  path.pathname === item.href
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-700 hover:bg-primary hover:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="lg:text-base md:text-xs">{item.name}</span>
              </Link>
            ))}
          </nav>
        </aside>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default OraganizationSidebar;
