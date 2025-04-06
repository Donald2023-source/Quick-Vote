import React from "react";
import { twMerge } from "tailwind-merge";
import { Link, useLocation } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { CandlestickChartTwoTone, Menu, Settings } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const OrganizationSidebar = ({ className, orgName }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const role = orgName || "organization";

  const navItems = [
    {
      name: "Dashboard",
      href: `/dashboard/${role}`, // Use orgName as part of the route
      icon: <SpaceDashboardIcon />,
    },

    {
      name: "Candidates",
      href: "/candidates", // Use orgName as part of the route
      icon: <CandlestickChartTwoTone />,
    },

    {
      name: "Voters Guidelines",
      href: "/voters-guide",
      icon: <LibraryBooksIcon />,
    },
    { name: "Settings", href: "/settings", icon: <Settings /> },
  ];

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <div className="md:hidden fixed bg-white p-2 top-0 w-full justify-between z-30 flex items-center">
        <div>
          <Link to={`/dashboard/${role}`}>
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
            {orgName ? orgName[0].toUpperCase() : "O"} {/* Dynamic initial */}
          </Avatar>
          {!isOpen && (
            <button
              className="p-2 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu />
            </button>
          )}
        </div>
      </div>

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
            <Link to={`/dashboard/${role}`}>
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
                  location.pathname === item.href
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

export default OrganizationSidebar;
