import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { SkillImage } from "../Helper/Image";
import { Virtuoso } from "react-virtuoso";
import { educationData } from "../Helper/Info";

const Education = () => {
  
  // Helper component for rendering education items
  const EducationItem = ({ item }) => (
    <div className="bg-[#e6e6fce5] px-5 py-8 rounded-lg shadow-lg flex flex-col gap-3 w-full">
      <h3 className="text-2xl sm:text-3xl flex gap-2 items-center w-full min-w-0">
        <span className="flex-shrink-0 text-3xl">{item.icon}</span>
        <span className="w-full sm:truncate">{item.title}</span>
      </h3>
      <p className="text-xl sm:text-2xl w-full truncate">{item.university}</p>
      <p className="text-lg sm:text-xl italic">{item.date}</p>
    </div>
  );

  return (
    <div className="py-10 px-2 sm:px-20 md:px-50  relative group z-10">
      {/* Heading */}
      <div className="text-3xl flex items-end z-20">
        <span className="p-2 bg-[#FDC435]">Education</span>
        <div className="w-2/4 sm:w-1/2 h-[3px] bg-[#FDC435]"></div>
      </div>

      {/* --- BACKGROUND ANIMATION (omitted for brevity) --- */}
      {/* ... your existing background animation ... */}
      <div className="absolute top-20 sm:top-30 -left-16 sm:-left-100 w-full -z-5">
        <div className="relative group mx-auto my-10 w-full max-w-[300px] sm:max-w-[400px] aspect-square">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-purple-400/50 animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full border border-cyan-400/40 animate-[spin_10s_linear_infinite_reverse]"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] animate-[spin_15s_linear_infinite]">
            <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#FDC435] absolute top-0 left-1/2 -translate-x-1/2"></div>
          </div>

          <span className="absolute top-10 right-0 text-xl sm:text-3xl font-bold text-[#EF52FF] animate-[float_3s_ease-in-out_infinite_alternate]">{`</>`}</span>
          <span className="absolute bottom-5 left-0 text-xl sm:text-2xl font-bold text-[#FDC435] animate-[float_3.5s_ease-in-out_infinite_alternate_reverse]">{`{ }`}</span>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[80%] h-[70%] sm:h-[80%] bg-[#EF52FF] blur-[100px] opacity-40 rounded-full"></div>
        </div>
      </div>

      {/* ----------- MOBILE ONLY Virtuoso ----------- */}
      <div className="block sm:hidden mt-5 h-[84vh] p-4  z-20">
        <Virtuoso
          className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ height: "100%", width: "100%" }}
          data={educationData}
          itemContent={(index, item) => (
            // Re-using the EducationItem component for consistency
            <div className="mb-5 w-full ">
              <EducationItem item={item} />
            </div>
          )}
        />
      </div>

      {/* ----------- DESKTOP VIEW ----------- */}
 
      <div className="mt-20 h-full hidden sm:flex flex-row gap-10 z-20">
        <div className="flex flex-col gap-10 w-1/2">
          <EducationItem item={educationData[0]} />
          <EducationItem item={educationData[1]} />
        </div>

        <div className="flex flex-col gap-10 w-1/2">
          <EducationItem item={educationData[2]} />
          <EducationItem item={educationData[3]} />
        </div>
      </div>

      {/* RIGHT SIDE VECTOR */}
      <div className="absolute top-0 -right-10 sm:-right-30 w-[150px] sm:w-[600px] -z-10">
        <picture>
          <img src={SkillImage.Vector3} alt="vector" className="w-full" />
        </picture>
      </div>
    </div>
  );
};

export default Education;
