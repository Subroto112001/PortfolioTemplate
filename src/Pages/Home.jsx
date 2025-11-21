import React from "react";
import { HeroImage } from "../Helper/Image";
import { socialIcon } from "../Helper/Icon";

const Home = () => {
  return (
    <div className="px-2 sm:pl-4 w-full relative z-10">
      <div className="flex flex-col justify-center items-center pb-20 sm:pb-0">
        <div className="flex flex-col sm:flex-row justify-between sm:gap-20 items-center mt-5 w-full">
          <div className="relative group sm:pl-20 pt-10 sm:pt-0">
            <div className="w-[140px] sm:w-[300px] h-[140px] sm:h-[300px] rounded-full border-4 border-white shadow-2xl relative z-20 overflow-hidden">
              <picture>
                <img
                  src={HeroImage.Author}
                  alt="Ranocoder"
                  className="w-full h-full rounded-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </picture>
            </div>

            {/* 2. Rotating Dashed Ring (Outer) */}
            <div className="absolute top-[200px] left-[220px] -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-purple-400/50 animate-[spin_10s_linear_infinite] z-0"></div>

            {/* 3. Reverse Rotating Ring (Inner) */}
            <div className="absolute top-[200px] left-[220px] -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-cyan-400/40 animate-[spin_15s_linear_infinite_reverse] z-0"></div>

            {/* 4. Orbiting Planet/Dot */}
            <div className="absolute top-[200px] left-[220px] -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] animate-[spin_8s_linear_infinite] z-10 pointer-events-none">
              <div className="w-4 h-4 bg-[#ffffff] rounded-full shadow-[0_0_10px_#FDC435] absolute top-0 left-1/2 -translate-x-1/2"></div>
            </div>

            {/* 5. Floating Tech Symbols */}
            <span className="absolute top-2 -right-5 text-3xl font-bold text-[#EF52FF] animate-bounce z-30 delay-75">
              {`</>`}
            </span>
            <span className="absolute bottom-0 -left-[-15px] text-2xl font-bold text-cyan-400 animate-[bounce_3s_infinite] z-30">
              {`{ }`}
            </span>

            {/* 6. Static Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#EF52FF] blur-[80px] opacity-40 -z-10"></div>
          </div>
          {/* --- IMAGE SECTION END --- */}

          <div className="flex flex-col justify-end items-center sm:items-end sm:text-right mt-6 sm:mt-0">
            <h1 className="text-xl sm:text-6xl font-bold mb-4 text-center sm:text-end">
              Hi, I'm Ranocoder
            </h1>
            <h2 className="text-lg sm:text-4xl font-semibold mb-6 text-center sm:text-end">
              Full Stack Developer
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center sm:justify-end">
              <button className="bg-[#EF52FF] rounded px-6 py-3 hover:scale-105 hover:-translate-y-2 transition duration-300 cursor-pointer shadow-lg shadow-purple-500/30 mb-3 sm:mb-0">
                Contact With Me
              </button>
              <button className="bg-[#EF52FF] text-gray-900 px-6 py-3 hover:scale-105 hover:-translate-y-2  rounded transition duration-300 cursor-pointer shadow-lg shadow-purple-500/30">
                Download Resume
              </button>
            </div>

            <div className="flex items-center justify-center sm:justify-end flex-row gap-5 sm:pt-15 mt-6 sm:mt-0">
              {socialIcon.map((icon, index) => (
                <span
                  key={index}
                  className="text-3xl p-3 text-white bg-[#EF52FF] rounded-md transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-2 shadow-lg"
                >
                  {icon.icon}
                </span>
              ))}
            </div>

            <p className="mt-6 sm:mt-10 text-center text-[12px] sm:text-[14px] sm:text-end text-gray-900">
              As a full-stack developer, I specialize in both front-end and
              <br className="hidden sm:block" />
              back-end technologies. I work with frameworks like React, Node.js,
              <br className="hidden sm:block" />
              and databases like MongoDB and MySQL. My expertise allows me to
              <br className="hidden sm:block" />
              create seamless web applications, handling everything from user
              <br className="hidden sm:block" />
              interfaces to server-side logic and database management for
              <br className="hidden sm:block" />
              scalable solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Different part of Owner */}
      <div className="absolute top-0 left-0 right-0 opacity-100 -z-10">
        <picture>
          <img src={HeroImage.BgVector} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default Home;
