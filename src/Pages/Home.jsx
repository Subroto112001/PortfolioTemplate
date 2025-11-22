import React from "react";
import { Helmet } from "react-helmet-async"; // SEO Import
import { HeroImage } from "../Helper/Image";
import { socialIcon } from "../Helper/Icon";
import { AuthorInfo } from "../Helper/Info";

const Home = () => {
  return (
    <div className="px-2 md:pl-4 w-full relative z-10">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Home | {AuthorInfo.name}</title>
        <meta
          name="description"
          content={`Welcome to the portfolio of ${AuthorInfo.name}, a ${AuthorInfo.role}.`}
        />
      </Helmet>

      <div className="flex flex-col justify-center items-center pb-20 md:pb-0 ">
        <div className="flex flex-col md:flex-row justify-between md:gap-20 items-center mt-5 w-full">
          <div className="relative group flex justify-center items-center ml-0 lg:ml-[10%] xl:ml-[20%] mt-10 md:mt-20">
            <div className="w-[140px] h-[140px] md:w-[300px] md:h-[300px] lg:w-[250px] lg:h-[250px] xl:w-[400px] xl:h-[400px] rounded-full border-4 border-white shadow-2xl relative z-20 overflow-hidden">
              <picture>
                <img
                  src={AuthorInfo.image}
                  alt={`${AuthorInfo.name} - ${AuthorInfo.role}`} // Fixed Alt Tag for SEO
                  className="w-full h-full rounded-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </picture>
            </div>

            {/* --- ANIMATIONS --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-purple-400/50 animate-[spin_10s_linear_infinite] z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-cyan-400/40 animate-[spin_15s_linear_infinite_reverse] z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] animate-[spin_8s_linear_infinite] z-10 pointer-events-none">
              <div className="w-4 h-4 bg-[#ffffff] rounded-full shadow-[0_0_10px_#FDC435] absolute top-0 left-1/2 -translate-x-1/2"></div>
            </div>
            <span className="absolute top-0 -right-5 md:-right-5 text-2xl md:text-3xl font-bold text-[#EF52FF] animate-bounce z-30 delay-75">
              {`</>`}
            </span>
            <span className="absolute bottom-0 left-0 md:-left-5 text-2xl font-bold text-cyan-400 animate-[bounce_3s_infinite] z-30">
              {`{ }`}
            </span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#EF52FF] blur-[80px] opacity-40 -z-10"></div>
          </div>

          {/* --- TEXT SECTION --- */}
          <div className="flex flex-col mr-0 md:mr-10 justify-end items-center md:items-end md:text-right mt-16 md:mt-30 w-full md:w-1/2 z-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold mb-4 text-center md:text-end">
              Hi, I'm {AuthorInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-center md:text-end">
              {AuthorInfo.role}
            </h2>

            <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-end">
              <button className="bg-[#EF52FF] rounded px-3 lg:px-6 py-3 hover:scale-105 hover:-translate-y-2 transition duration-300 cursor-pointer shadow-lg shadow-purple-500/30 mb-3 md:mb-0">
                Contact With Me
              </button>
              <button className="bg-[#EF52FF] text-gray-900 px-3 lg:px-6 py-3 hover:scale-105 hover:-translate-y-2 rounded transition duration-300 cursor-pointer shadow-lg shadow-purple-500/30">
                Download Resume
              </button>
            </div>

            <div className="flex items-center justify-center md:justify-end flex-row gap-5 md:pt-15 mt-6 md:mt-0">
              {socialIcon.map((icon, index) => (
                <span
                  key={index}
                  className="text-3xl p-3 text-white bg-[#EF52FF] rounded-md transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-2 shadow-lg"
                >
                  {icon.icon}
                </span>
              ))}
            </div>

            <p className="mt-6 md:mt-10 text-center text-[14px] md:text-[20px] md:text-end text-gray-900 w-[90%] md:w-full">
              {AuthorInfo.description}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 opacity-100 -z-10">
        <picture>
          <img src={HeroImage.BgVector} alt="Background Vector Art" />
        </picture>
      </div>
    </div>
  );
};

export default Home;
