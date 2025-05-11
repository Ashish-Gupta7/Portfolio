import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex flex-col gap-5 mt-[96px] max-[1024px]:hidden">
      <NavLink
        to="/"
        className="group w-max text-white/50 hover:text-white uppercase text-[13px] font-semibold tracking-wider"
      >
        {({ isActive }) => {
          const baseLineClasses =
            "h-[1px] transition-all duration-300 ease-in-out group-hover:bg-white";
          const activeWidth = "w-[75px] bg-white";
          const inactiveWidth = "w-[44px] group-hover:w-[75px] bg-white/50";

          return (
            <div className="w-full flex items-center gap-5 group">
              <span
                className={`${baseLineClasses} ${
                  isActive ? activeWidth : inactiveWidth
                }`}
              ></span>
              <span className={isActive ? "text-white" : ""}>About</span>
            </div>
          );
        }}
      </NavLink>
      <NavLink
        to="/projects"
        className="group w-max text-white/50 hover:text-white uppercase text-[13px] font-semibold tracking-wider"
      >
        {({ isActive }) => {
          const baseLineClasses =
            "h-[1px] transition-all duration-300 ease-in-out group-hover:bg-white";
          const activeWidth = "w-[75px] bg-white";
          const inactiveWidth = "w-[44px] group-hover:w-[75px] bg-white/50";

          return (
            <div className="w-full flex items-center gap-5 group">
              <span
                className={`${baseLineClasses} ${
                  isActive ? activeWidth : inactiveWidth
                }`}
              ></span>
              <span className={isActive ? "text-white" : ""}>Projects</span>
            </div>
          );
        }}
      </NavLink>
      <NavLink
        to="/certificates"
        className="group w-max text-white/50 hover:text-white uppercase text-[13px] font-semibold tracking-wider"
      >
        {({ isActive }) => {
          const baseLineClasses =
            "h-[1px] transition-all duration-300 ease-in-out group-hover:bg-white";
          const activeWidth = "w-[75px] bg-white";
          const inactiveWidth = "w-[44px] group-hover:w-[75px] bg-white/50";

          return (
            <div className="w-full flex items-center gap-5 group">
              <span
                className={`${baseLineClasses} ${
                  isActive ? activeWidth : inactiveWidth
                }`}
              ></span>
              <span className={isActive ? "text-white" : ""}>Certificates</span>
            </div>
          );
        }}
      </NavLink>
    </nav>
  );
};

export default Nav;
