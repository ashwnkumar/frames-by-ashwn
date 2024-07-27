import React from "react";

function Bio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly md:py-20 py-10 px-5">
      <div className="w-10/12 md:max-w-md md:mb-0 mb-10">
        <img src="Media/Singles/bio2.jpg" alt="" />
      </div>
      <div className="max-w-3xl text-custBlack">
        <p className="md:text-3xl text-xl md:font-medium font-normal">
          <span className="md:text-5xl text-4xl font-medium">I'm Ashwin.</span>{" "}
          <br />
          <span className="md:text-2xl text-xl font-normal">
            Photographer | Engineer | Visual Storyteller
          </span>
          <br /> <br />
          Engineer by profession. Photograher by passion. Developed this website
          for the sole purpose of showcasing my skills as a budding Front End
          Developer. Getting my photos out there is an added benefit. <br />{" "}
          Website may go live soon or I might experiment on this as if it were
          my own little <span className="text-blue-400">ReactJS</span> lab rat
          lol. <br /> Stay tuned tho.
        </p>
      </div>
    </div>
  );
}

export default Bio;
