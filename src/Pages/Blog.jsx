import React from "react";
import { Virtuoso } from "react-virtuoso";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { SkillImage } from "../Helper/Image";

const Blog = () => {
  // We can simulate a large list of data based on the index,
  // just like the Project component does with totalCount.

  return (
    <div className="relative w-full h-screen z-10">
      <div className="py-10 px-2 sm:px-50 ">
        {/* --- HEADER SECTION --- */}

        <div className="text-3xl flex items-end">
          <span className="p-2 bg-[#FDC435]">My Blog</span>
          <div className="w-2/4 h-[3px] bg-[#FDC435]"></div>
        </div>

        {/* --- BACKGROUND ANIMATION (Copied from Project/Skil) --- */}
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

        {/* --- VIRTUOSO LIST SECTION --- */}
        <div className="mt-10 w-full flex gap-3 flex-row ">
          {/* Height Container - Critical for Virtuoso */}
          <div className="w-full h-[80vh]">
            <Virtuoso
              // --- HIDE SCROLLBAR CLASSES ---
              className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ height: "100%", width: "100%" }}
              totalCount={50} // Simulating 50 Blog Posts
              overscan={200}
              itemContent={(index) => (
                <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 bg-[#e6e6fce5] p-5 rounded-lg shadow-lg mx-2 hover:scale-[1.01] transition-transform duration-300 border border-white/50">
                  {/* Image Section */}
                  <picture className="w-full sm:w-auto">
                    <img
                      src={`https://picsum.photos/seed/${index + 10}/300/200`} // Random placeholder image
                      alt={`Blog ${index}`}
                      className="w-full sm:w-[250px] h-[150px] object-cover rounded-md shadow-md"
                    />
                  </picture>

                  {/* Content Section */}
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 hover:text-[#EF52FF] transition-colors cursor-pointer">
                        Tech Insights Vol. {index + 1}
                      </h3>
                      <span className="bg-[#FDC435] text-xs font-bold px-2 py-1 rounded text-black">
                        Dev
                      </span>
                    </div>

                    <div className="flex gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-[#EF52FF]" /> Nov{" "}
                        {index + 1}, 2024
                      </span>
                      <span className="flex items-center gap-2">
                        <FaUser className="text-[#EF52FF]" /> Admin
                      </span>
                    </div>

                    <p className="text-lg sm:text-xl w-full text-gray-700 line-clamp-2">
                      Learn how to master React performance, understand the
                      virtual DOM, and use libraries like Virtuoso for seamless
                      scrolling.
                    </p>

                    <button className="flex items-center gap-2 text-[#EF52FF] font-semibold mt-2 hover:translate-x-2 transition-transform w-fit">
                      Read Article <FaArrowRight />
                    </button>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>

      {/* --- DECORATIVE VECTOR (Bottom) --- */}
      <div className="absolute -bottom-13 -left-10 opacity-100 -z-10 w-[300px] sm:w-[600px]">
        <picture>
          {/* Using Vector2 or Vector4 depending on what you have available */}
          <img src={SkillImage?.Vector2 || SkillImage?.Vector4} alt="vector" />
        </picture>
      </div>
    </div>
  );
};

export default Blog;
