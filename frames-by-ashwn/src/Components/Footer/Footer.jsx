import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen-lg py-5 pt-10 bg-custWhite border-t border-custBlack">
        <div className="relative group mb-2">
          <a
            href="https://www.instagram.com/frames.by.ashwn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="text-3xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <div className="bg-slate-700 text-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb px-4 py-2 bg-custBlack text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            @frames.by.ashwn
          </div>
        </div>
        <ul className="flex flex-row font-medium space-x-5 text-custBlack">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="bio">Bio</NavLink>
          </li>
        </ul>

        <p className="text-sm w-3/4 mt-3 text-center">
          &copy; 2024 || Designed and Developed by Ashwin Kumar. All rights
          reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
