import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { SkillImage } from "../Helper/Image";
import { Virtuoso } from "react-virtuoso";

const Education = () => {
  const educationData = [
    {
      title: "M.S.C in Computer Science",
      university: "Daffodil International University",
      date: "2018 - 2022",
      icon: <GiGraduateCap />,
    },
    {
      title: "B.S.C in Computer Science",
      university: "Daffodil International University",
      date: "2018 - 2022",
      icon: <GiGraduateCap />,
    },
    {
      title: "APP Development",
      university: "Creative It Institute",
      date: "2018 - 2022",
      icon: <GiGraduateCap />,
    },
    {
      title: "MERN Stack Development",
      university: "Udemy",
      date: "2018 - 2022",
      icon: <GrTechnology />,
    },
  ];
  return (
    <div className="py-10 px-4 sm:px-10 relative group z-10">
      <div className="text-3xl flex items-end z-20">
        <span className="p-2 bg-[#FDC435] text-xl sm:text-3xl">Education</span>
        <div className="w-2/4 sm:w-1/2 h-[3px] bg-[#FDC435]"></div>
      </div>

      {/* --- REVISED IMAGE SECTION START --- */}
      {/* Adjusting for mobile responsiveness */}
      <div className="absolute top-20 sm:top-30 -left-16 sm:-left-100 w-full -z-5">
        <div className="relative group mx-auto my-10 w-full max-w-[300px] sm:max-w-[400px] aspect-square">
          {/* Main Image Container */}
          {/* Rotating dashed ring and planet orbit */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-purple-400/50 animate-[spin_20s_linear_infinite] z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full border border-cyan-400/40 animate-[spin_10s_linear_infinite_reverse] z-0"></div>

          {/* Orbiting planet */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] animate-[spin_15s_linear_infinite] z-10 pointer-events-none">
            <div className="w-4 h-4 bg-[#ffffff] rounded-full shadow-[0_0_15px_#FDC435] absolute top-0 left-1/2 -translate-x-1/2"></div>
          </div>

          {/* Floating Tech Symbols */}
          <span className="absolute top-10 right-0 text-xl sm:text-3xl font-bold text-[#EF52FF] animate-[float_3s_ease-in-out_infinite_alternate] z-30">
            {`</>`}
          </span>
          <span className="absolute bottom-5 left-0 text-xl sm:text-2xl font-bold text-[#FDC435] animate-[float_3.5s_ease-in-out_infinite_alternate_reverse] z-30">
            {`{ }`}
          </span>

          {/* Static Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[80%] h-[70%] sm:h-[80%] bg-[#EF52FF] blur-[100px] opacity-40 -z-10 rounded-full"></div>
        </div>
      </div>
      {/* --- REVISED IMAGE SECTION END --- */}
      <Virtuoso
        data={educationData}
        style={{ height: "550px", width: "100%" }}
        className="mt-4 block sm:hidden "
        itemContent={(index, item) => (
          <div
            className="flex flex-col gap-3 bg-[#e6e6fce5] p-5 rounded-lg shadow-lg w-full"
            key={index}
          >
            <h3 className="text-2xl sm:text-3xl flex gap-2 items-center">
              {item.icon} {item.title}
            </h3>
            <p className="text-xl sm:text-2xl">{item.university}</p>
            <p className="text-lg sm:text-xl italic">{item.date}</p>
          </div>
        )}
      />
      {/* Education Details - Mobile Adjustments */}
      <div className="mt-10 hidden sm:flex flex-col sm:flex-row gap-5 sm:gap-10 z-20">
        <div className="flex flex-col gap-10 sm:w-1/2">
          <div className="flex flex-col gap-3 bg-[#e6e6fce5] p-5 rounded-lg shadow-lg ">
            <h3 className="text-2xl sm:text-3xl flex gap-2 items-center">
              <GiGraduateCap /> M.S.C in Computer Science
            </h3>
            <p className="text-xl sm:text-2xl">
              Daffodil International University
            </p>
            <p className="text-lg sm:text-xl italic">2018 - 2022</p>
          </div>
          <div className="flex flex-col gap-3 bg-[#e6e6fce5] p-5 rounded-lg shadow-lg ">
            <h3 className="text-2xl sm:text-3xl flex gap-2 items-center">
              <GiGraduateCap /> B.S.C in Computer Science
            </h3>
            <p className="text-xl sm:text-2xl">
              Daffodil International University
            </p>
            <p className="text-lg sm:text-xl italic">2018 - 2022</p>
          </div>
        </div>
        <div className="flex flex-col gap-10 sm:w-1/2">
          <div className="flex flex-col gap-3 bg-[#e6e6fce5] p-5 rounded-lg shadow-lg ">
            <h3 className="text-2xl sm:text-3xl flex gap-2 items-center">
              <GiGraduateCap /> APP Development
            </h3>
            <p className="text-xl sm:text-2xl">Creative It Institute</p>
            <p className="text-lg sm:text-xl italic">2018 - 2022</p>
          </div>
          <div className="flex flex-col gap-3 bg-[#e6e6fce5] p-5 rounded-lg shadow-lg ">
            <h3 className="text-2xl sm:text-3xl flex gap-2 items-center">
              <GrTechnology /> MERN Stack Development
            </h3>
            <p className="text-xl sm:text-2xl">Udemy</p>
            <p className="text-lg sm:text-xl italic">2018 - 2022</p>
          </div>
        </div>
      </div>

      {/* Adjusting the right-side image */}
      <div className="absolute top-0 -right-10 sm:-right-30 opacity-100 -z-10 w-[150px] sm:w-[600px]">
        <picture>
          <img src={SkillImage.Vector3} alt="vector" className="w-full" />
        </picture>
      </div>
    </div>
  );
};

export default Education;
