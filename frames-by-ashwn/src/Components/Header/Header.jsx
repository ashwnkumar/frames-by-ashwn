import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-5 bg-custWhite text-custBlack sticky top-0 z-10">
      <Link to="/">
        <p id="header" className="text-4xl font-medium mb-5 md:mb-0">
          frames by ashwn.
        </p>
      </Link>
      <div className="font-medium text-xl">
        <ul className="flex flex-row items-center justify-evenly space-x-20">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "underline underline-offset-8" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `${isActive ? "underline underline-offset-8" : ""}`
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bio"
              className={({ isActive }) =>
                `${isActive ? "underline underline-offset-8" : ""}`
              }
            >
              Bio
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
