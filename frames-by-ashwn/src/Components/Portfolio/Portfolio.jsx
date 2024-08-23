import React from "react";
import { NavLink } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-custHover">
        <p>The app is yet to be optimized for a smoother experience.</p>
        <p>Images might take some time to fully load. Give it a minute.</p>
      </div>
      <div className="flex md:flex-row md:flex-wrap flex-col gap-10 items-center justify-around md:p-10 p-3">
        <div className="relative overflow-hidden md:w-1/4 w-3/4 rounded-3xl">
          <img
            src="/Media/Portfolio/people.jpg"
            className="hover:scale-110 transition-all duration-300 -z-10  object-cover"
            alt=""
          />
          <div className="absolute inset-0 flex items-end pb-20 justify-center text-custWhite hover:backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <NavLink to="people">
              <button className="text-custwhite text-2xl font-normal border-2 hover:bg-custwhite hover:text-black hover:bg-custWhite border-custwhite px-6 py-3 transition-all">
                People
              </button>
            </NavLink>
          </div>
        </div>

        <div className="relative overflow-hidden md:w-1/4 w-3/4 rounded-3xl">
          <img
            src="/Media/Portfolio/places.jpg"
            className="hover:scale-110 transition-all duration-300 -z-10 w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 flex items-end pb-20 justify-center text-custWhite hover:backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <NavLink to="places">
              <button className="text-custwhite text-2xl font-normal border-2 hover:bg-custwhite hover:text-black hover:bg-custWhite border-custwhite px-6 py-3 transition-all">
                Places
              </button>
            </NavLink>
          </div>
        </div>

        <div className="relative overflow-hidden md:w-1/4 w-3/4 rounded-3xl">
          <img
            src="/Media/Portfolio/misc.jpg"
            className="hover:scale-110 transition-all duration-300 -z-10 w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 flex items-end pb-20 justify-center text-custWhite hover:backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <NavLink to="misc">
              <button className="text-custwhite text-2xl font-normal border-2 hover:bg-custwhite hover:text-black hover:bg-custWhite border-custwhite px-6 py-3 transition-all">
                Misc
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
