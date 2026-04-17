


import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { House, Clock, ChartLine, Menu, X } from "lucide-react";
const Navbar = () => {
  const [displayMenu,setDisplayMenu]=useState(false)
  const HandleMenu=()=>{
    setDisplayMenu(!displayMenu)
  }
  return (
    <div className="w-full  bg-base-100 shadow-sm relative">
      <div className="navbar w-full justify-between items-center py-6 px-5 md:px-9">

        {/* Logo */}
       <div  className="flex justify-center items-center md:gap-2 gap-5 justify-items-center">
        
         {
  displayMenu ? (
    <span onClick={HandleMenu} className="md:hidden">
      <X />
    </span>
  ) : (
    <span onClick={HandleMenu} className="md:hidden">
      <Menu />
    </span>
  )
}
{
  displayMenu && (
    <div className="absolute top-full left-3 w-fit bg-base-100 z-10 shadow-md md:hidden">
      <ul className="flex flex-col gap-1 p-5">

        <li className="hover:bg-base-300 rounded-lg p-1">
          <NavLink to="/" onClick={HandleMenu}>Home</NavLink>
        </li>

        <li className="hover:bg-base-300 p-1 rounded-lg">
          <NavLink to="/timeline" onClick={HandleMenu}>Timeline</NavLink>
        </li>

        <li className="hover:bg-base-300 p-1 rounded-lg">
          <NavLink to="/stats" onClick={HandleMenu}>Stats</NavLink>
        </li>

      </ul>
    </div>
  )
}
        <img src={logo} alt="Logo" className="h-8 md:h-10" />
       </div>

        {/* Links */}
        <ul className="md:flex items-center gap-2 md:gap-5 text-sm hidden md:text-base">

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