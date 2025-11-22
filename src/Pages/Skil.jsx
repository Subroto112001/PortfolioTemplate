import React from "react";
import { Helmet } from "react-helmet-async"; // SEO Import
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SkillImage } from "../Helper/Image";
import { BackEnd, FrontEnd } from "../Helper/Info";

const Skil = () => {
  return (
    <div className="relative w-full h-screen z-10">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Skills | Ranocoder</title>
        <meta
          name="description"
          content="Technical skills including Front-end (React, Tailwind) and Back-end technologies."
        />
      </Helmet>

      <div className="py-10 px-2 sm:px-20 md:px-50 ">
        <div className="flex flex-col ">
          <div className="text-3xl flex items-end">
            <span className="p-2 bg-[#FDC435]">Skills</span>
            <div className="w-2/4 h-[3px] bg-[#FDC435]"></div>
          </div>

          {/* Background Animation */}
          <div className="absolute top-20 -right-20 lg:top-30 lg:-right-50 w-full -z-5 pointer-events-none opacity-30 lg:opacity-100 scale-50 lg:scale-100 transition-all duration-300 origin-center lg:origin-right">
            <div className="relative group mx-auto my-10 w-full max-w-[400px] aspect-square">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-purple-400/50 animate-[spin_20s_linear_infinite] z-0"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full border border-cyan-400/40 animate-[spin_10s_linear_infinite_reverse] z-0"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] animate-[spin_15s_linear_infinite] z-10 pointer-events-none">
                <div className="w-4 h-4 bg-[#ffffff] rounded-full shadow-[0_0_15px_#FDC435] absolute top-0 left-1/2 -translate-x-1/2"></div>
              </div>
              <span className="absolute top-10 right-0 text-3xl font-bold text-[#EF52FF] animate-[float_3s_ease-in-out_infinite_alternate] z-30">{`</>`}</span>
              <span className="absolute bottom-5 left-0 text-2xl font-bold text-[#FDC435] animate-[float_3.5s_ease-in-out_infinite_alternate_reverse] z-30">{`{ }`}</span>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#EF52FF] blur-[100px] opacity-40 -z-10 rounded-full"></div>
            </div>
          </div>

          <div className="flex justify-center items-center h-full w-full">
            <div className="mt-10 md:mt-30 flex flex-col justify-center items-center gap-3 sm:gap-8 relative z-20">
              {/* Front-End Skill */}
              <div className="flex flex-col items-center gap-3 md:gap-6 bg-[#e6e6fce5] p-2 sm:p-4 rounded-lg shadow-lg h-auto w-[90%] sm:w-full md:w-full lg:w-full">
                <h3 className="text-2xl">Front-End Skill</h3>
                <div className="flex flex-wrap justify-center sm:justify-center gap-4 md:gap-6">
                  {FrontEnd.map((item) => (
                    <div
                      className="flex w-18 sm:w-[90px] flex-col justify-start items-center gap-5 hover:scale-105 transition-all duration-500"
                      key={item.id}
                    >
                      <span className="text-3xl sm:text-4xl p-3 bg-[#EF52FF] text-white w-[60px] sm:w-[70px] flex justify-center items-center rounded-md shadow-xl">
                        {item.icon}
                      </span>
                      <p className="text-sm sm:text-base">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back-End Skill */}
              <div className="flex flex-col items-center gap-3 md:gap-6 bg-[#e6e6fce5] p-2 sm:p-4 rounded-lg shadow-lg h-auto w-[90%] sm:w-full md:w-full lg:w-full">
                <h3 className="text-2xl">Back-End Skill</h3>
                <div className="flex flex-wrap justify-center sm:justify-center gap-4 md:gap-6">
                  {BackEnd.map((item) => (
                    <div
                      className="flex w-18 sm:w-[90px] flex-col justify-start items-center gap-5 hover:scale-105 transition-all duration-500"
                      key={item.id}
                    >
                      <span className="text-3xl sm:text-4xl p-3 bg-[#EF52FF] text-white w-[60px] sm:w-[70px] flex justify-center items-center rounded-md shadow-xl">
                        {item.icon}
                      </span>
                      <p className="text-sm sm:text-base">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-13 left-0 opacity-100 -z-10 w-[300px] sm:w-[600px]">
        <picture>
          <img src={SkillImage.Vector2} alt="Background Vector" />
        </picture>
      </div>
    </div>
  );
};

export default Skil;
