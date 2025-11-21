import React from "react";
import { Virtuoso } from "react-virtuoso";
import { ProjectImage, SkillImage } from "../Helper/Image";

const Project = () => {
  return (
    <div className="relative z-10">
      <div className="py-10 px-2 sm:px-50 ">
        <div className=" ">
          <div className="text-3xl flex items-end">
            <span className="p-2 bg-[#FDC435]">Project</span>
            <div className="w-2/4 h-[3px] bg-[#FDC435]"></div>
          </div>
        </div>

        {/* --- BACKGROUND ANIMATION --- */}
        <div className="absolute top-30 -right-50 w-full -z-5">
          <div className="relative group mx-auto my-10 w-full max-w-[400px] aspect-square">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-purple-400/50 animate-[spin_20s_linear_infinite] z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full border border-cyan-400/40 animate-[spin_10s_linear_infinite_reverse] z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] animate-[spin_15s_linear_infinite] z-10 pointer-events-none">
              <div className="w-4 h-4 bg-[#ffffff] rounded-full shadow-[0_0_15px_#FDC435] absolute top-0 left-1/2 -translate-x-1/2"></div>
            </div>
            <span className="absolute top-10 right-0 text-3xl font-bold text-[#EF52FF] animate-[float_3s_ease-in-out_infinite_alternate] z-30">
              {`</>`}
            </span>
            <span className="absolute bottom-5 left-0 text-2xl font-bold text-[#FDC435] animate-[float_3.5s_ease-in-out_infinite_alternate_reverse] z-30">
              {`{ }`}
            </span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#EF52FF] blur-[100px] opacity-40 -z-10 rounded-full"></div>
          </div>
        </div>

        <div className="mt-10 flex gap-3 flex-row z-20">
          {/* Height Container */}
          <div className="w-full h-[80vh]">
            <Virtuoso
              // --- HIDE SCROLLBAR CLASSES ADDED BELOW ---
              className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ height: "100%", width: "100%" }}
              totalCount={50}
              overscan={200}
              itemContent={(index) => (
                <div className="mb-10 flex items-center gap-10 bg-[#e6e6fce5] p-5 rounded-lg shadow-lg mx-2">
                  <picture className="w-1/2">
                    <img
                      src={ProjectImage?.Project1}
                      alt=""
                      className="w-[200px] h-[100px] object-cover rounded-md"
                    />
                  </picture>
                  <div className="w-1/2 flex flex-col gap-3">
                    <h3 className=" text-lg sm:text-3xl truncate font-bold">
                      E-commerce Website {index + 1}
                    </h3>
                    <p className="text-md sm:text-2xl  sm:w-[500px]  truncate text-gray-700">
                      Discover Brand Name, your ultimate online destination.
                    </p>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-13 -right-30 opacity-100 -z-10  w-[300px] sm:w-[600px]">
        <picture>
          <img src={SkillImage.Vector4} alt="vector" />
        </picture>
      </div>
    </div>
  );
};

export default Project;
