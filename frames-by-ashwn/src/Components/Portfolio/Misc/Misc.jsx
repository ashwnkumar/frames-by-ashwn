import React from "react";
import { Navigate, useNavigate } from "react-router";

import miscImages from "./Misc.json";

function Misc() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => navigate(-1)}
        className="border border-custBlack px-5 py-3 mt-10 text-2xl hover:bg-custBlack hover:text-custWhite hover:scale-105 transition-all"
      >
        Back to Portfolio
      </button>
      <div className="flex md:flex-row md:flex-wrap flex-col items-center justify-around md:p-10 p-3">
        {miscImages &&
          miscImages.map((item, index) => (
            <div
              key={index}
              className="relative h-auto max-w-md mx-7 my-5 overflow-hidden rounded-3xl group"
            >
              <img src={item.src} alt={item.alt} />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0   items-center justify-center text-custWhite opacity-0 group-hover:cursor-zoom-in flex group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-custWhite h-max w-max text-2xl font-normal">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Misc;
