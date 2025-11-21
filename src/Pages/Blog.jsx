import React, { useState } from "react";
import { Virtuoso } from "react-virtuoso";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BlogInfo } from "../Helper/Info";

// Blog Data Array

const Blog = () => {
  BlogInfo;
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (item) => {
    setSelectedBlog(item);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="relative w-full h-screen z-10">
      <div className="py-10 px-2 sm:px-50">
        {/* --- HEADER SECTION --- */}
        <div className="text-3xl flex items-end">
          <span className="p-2 bg-[#FDC435]">My Blog</span>
          <div className="w-2/4 h-[3px] bg-[#FDC435]"></div>
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

        {/* --- VIRTUOSO LIST SECTION --- */}
        <div className="mt-10 w-full flex gap-3 flex-row">
          <div className="w-full h-[80vh]">
            <Virtuoso
              data={BlogInfo}
              className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ height: "100%", width: "100%" }}
              overscan={200}
              itemContent={(index, item) => (
                <div
                  onClick={() => handleBlogClick(item)}
                  className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 bg-[#e6e6fce5] p-5 rounded-lg shadow-lg mx-2 hover:scale-[1.01] transition-transform duration-300 border border-white/50 cursor-pointer"
                >
                  {/* Image Section */}
                  <picture className="w-full sm:w-auto">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full sm:w-[250px] h-[150px] object-cover rounded-md shadow-md"
                    />
                  </picture>

                  {/* Content Section */}
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 hover:text-[#EF52FF] transition-colors cursor-pointer">
                        {item.title}
                      </h3>
                      <span className="bg-[#FDC435] text-xs font-bold px-2 py-1 rounded text-black">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-[#EF52FF]" /> {item.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaUser className="text-[#EF52FF]" /> {item.author}
                      </span>
                    </div>

                    <p className="text-lg sm:text-xl w-full text-gray-700 line-clamp-2">
                      {item.description}
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
          <div className="w-full h-32 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        </picture>
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 bg-[#0000008f] bg-opacity-60 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {selectedBlog.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Blog Image */}
              <div className="mb-6">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Blog Meta Info */}
              <div className="mb-6 flex gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#EF52FF]" />{" "}
                  {selectedBlog.date}
                </span>
                <span className="flex items-center gap-2">
                  <FaUser className="text-[#EF52FF]" /> {selectedBlog.author}
                </span>
                <span className="bg-[#FDC435] text-xs font-bold px-3 py-1 rounded text-black">
                  {selectedBlog.category}
                </span>
              </div>

              {/* Blog Full Content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Article
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedBlog.fullContent}
                </p>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedBlog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#FDC435] text-gray-800 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
