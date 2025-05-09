import { useLocation, Link, useNavigation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact us", href: "/contact-us" },
  ];

  const [nav, setNav] = useState(false);
  const path = useLocation();

  return (
    <nav className="relative backdrop-blur-lg z-30 p-4 lg:px-20 md:px-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <h3 className="text-white border py-2 px-4 rounded-full w-fit font-bold text-xl">
            <span className="text-blue-400">I</span>vote
          </h3>
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, idx) => (
            <Link
              className={`text-white py-2 transition duration-300 ${
                path.pathname === link.href
                  ? "border-b-2 font-semibold"
                  : "hover:border-b-2"
              }`}
              key={idx}
              to={link.href}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to={"/auth"}
            className="text-white bg-gradient-to-r from-blue-700 to-purple-700 py-2 px-8 rounded hover:scale-105 transition-all"
          >
            Vote
          </Link>
        </div>

        <span
          className="text-2xl text-white md:hidden cursor-pointer"
          onClick={() => setNav(!nav)}
        >
          {nav ? <CloseIcon /> : <MenuIcon />}
        </span>
      </div>

      {nav && (
        <div className="md:hidden bg-gradient-to-r from-[#29349D] to-blue-500 fixed top-0 left-0 w-screen h-screen z-10 shadow-lg">
          <div className="flex flex-col items-center space-y-14 py-16">
            <span
              className="absolute top-4 right-6 text-3xl text-white cursor-pointer"
              onClick={() => setNav(false)}
            >
              <CloseIcon />
            </span>
            {navLinks.map((link, idx) => (
              <Link
                className={`text-white text-lg transition duration-300 ${
                  path.pathname === link.href
                    ? "border-b-2 font-semibold"
                    : "hover:border-b-2"
                }`}
                key={idx}
                to={link.href}
                onClick={() => setNav(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="text-white bg-gradient-to-r from-blue-700 to-purple-700 py-3 px-10 rounded hover:scale-105 transition-all">
              Vote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
