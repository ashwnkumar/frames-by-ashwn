import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className=" flex justify-center items-center h-screen md:bg-[url('/Media/Singles/landing.jpg')] bg-[url('/Media/Singles/landing2.jpg')] my-5 mx-3 md:my-10 md:mx-20 text-custWhite">
      <div className="flex flex-col items-center justify-center">
        <h1 className="md:text-6xl text-5xl text-custOrange font-extralight">
          Capturing Moments, one <span className="text-custBlack">Frame</span>{" "}
          at a time.
        </h1>
        <NavLink to="portfolio">
          <button className="mt-10 text-3xl font-light border-2 text-custWhite border-custWhite px-8 py-3 hover:bg-custWhite hover:text-custBlack hover:scale-110 transition-all duration-300">
            Explore
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
