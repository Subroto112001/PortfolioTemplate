import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; // SEO Import
import { Virtuoso } from "react-virtuoso";
import { IoClose } from "react-icons/io5";
import { ProjectImage, SkillImage } from "../Helper/Image";
import { ProjectIcon } from "../Helper/Icon";
import { ProjectInfo } from "../Helper/Info";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index, item) => {
    setSelectedProject(item);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative z-10">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Projects | Ranocoder</title>
        <meta
          name="description"
          content="Showcase of my recent web development projects and case studies."
        />
      </Helmet>

      <div className="py-10 px-2 sm:px-50">
        <div>
          <div className="text-3xl flex items-end">
            <span className="p-2 bg-[#FDC435]">Project</span>
            <div className="w-2/4 h-[3px] bg-[#FDC435]"></div>
          </div>
        </div>

        {/* Animation Part */}
        <div className="absolute top-30 -right-50 w-full -z-5">
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

        <div className="mt-10 flex gap-3 flex-row z-20">
          <div className="w-full md:w-2/3 h-[80vh]">
            <Virtuoso
              data={ProjectInfo}
              className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ height: "100%", width: "100%" }}
              overscan={200}
              itemContent={(index, item) => (
                <div
                  onClick={() => handleProjectClick(index, item)}
                  className="mb-10 flex items-center gap-10 bg-[#e6e6fce5] p-5 rounded-lg shadow-lg mx-2 cursor-pointer transition-all hover:shadow-xl hover:scale-[1.02] hover:bg-[#d6d6fce5]"
                >
                  <picture className="w-1/2 sm:w-[250px]">
                    <img
                      src={item?.image}
                      alt={item?.title || "Project Thumbnail"} // Fixed Alt Tag for SEO
                      className="w-[200px] h-[100px] object-cover rounded-md"
                    />
                  </picture>
                  <div className="w-1/2 flex flex-col gap-3">
                    <h3 className="text-lg sm:text-3xl truncate font-bold">
                      {item?.title}
                    </h3>
                    <p className="text-md sm:text-2xl sm:w-[350px] truncate text-gray-700">
                      {item?.description}
                    </p>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-13 -right-30 opacity-100 -z-10 w-[300px] sm:w-[600px]">
        <picture>
          <img src={SkillImage.Vector4} alt="vector" />
        </picture>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-[#0000008f] bg-opacity-60 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {selectedProject.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <span className="text-xl">{ProjectIcon.iclose}</span>
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title} // Fixed Alt Tag
                  className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#FDC435] text-gray-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer" // Important for SEO and Security
                  className="px-6 py-3 bg-[#EF52FF] text-white rounded-lg font-medium hover:bg-[#FDC435] transition-colors flex items-center gap-2"
                >
                  <span className="text-xl">{ProjectIcon.github}</span>
                  View on GitHub
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer" // Important for SEO and Security
                  className="px-6 py-3 bg-[#EF52FF] text-white rounded-lg font-medium hover:bg-[#FDC435] transition-colors flex items-center gap-2"
                >
                  <span className="text-xl">{ProjectIcon.live}</span>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
