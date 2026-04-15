


import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { House, Clock, ChartLine } from "lucide-react";
const Navbar = () => {
  return (
    <div className="w-full  bg-base-100 shadow-sm">
      <div className="navbar w-full justify-between items-center py-6 px-4 md:px-9">

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8 md:h-10" />

        {/* Links */}
        <ul className="flex items-center gap-2 md:gap-5 text-sm md:text-base">

          <li>
            <NavLink to="/" className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg ${isActive ? "bg-[#244D3F] text-white" : ""}`
            }>
              {({ isActive }) => (
                <>
                  <House color={isActive ? "#fff" : "#7b706f"} />
                  Home
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink to="/timeline" className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg ${isActive ? "bg-[#244D3F] text-white" : ""}`
            }>
              {({ isActive }) => (
                <>
                  <Clock color={isActive ? "#fff" : "#7b706f"} />
                  Timeline
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink to="/stats" className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg ${isActive ? "bg-[#244D3F] text-white" : ""}`
            }>
              {({ isActive }) => (
                <>
                  <ChartLine color={isActive ? "#fff" : "#7b706f"} />
                  Stats
                </>
              )}
            </NavLink>
          </li>

        </ul>

      </div>
    </div>
  );
};

export default Navbar;