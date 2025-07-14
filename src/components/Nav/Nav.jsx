import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/freelancing", label: "Freelancing" },
];

const Nav = () => {
  return (
    <nav className="flex flex-col gap-5 mt-[96px] max-[1024px]:hidden">
      {navItems.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
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
                <span className={isActive ? "text-white" : ""}>{label}</span>
              </div>
            );
          }}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
