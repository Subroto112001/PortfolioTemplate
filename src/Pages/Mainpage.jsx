import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Slidebar from "../Component/MainPgae/Slidebar";
import { slideBarIcon } from "../Helper/Icon";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";

const Mainpage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const handleSlidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen bg-[#e6e6fce5] relative overflow-hidden">
      <div className="flex justify-between">
        <div className="w-full sm:w-[93%]">
          <Outlet />
        </div>

        <div className="hidden sm:block sm:w-[7%] fixed right-0 top-0 h-screen z-10 ">
          <Slidebar />
        </div>
      </div>
      <div className="absolute top-5 right-3 z-20 flex sm:hidden">
        <span
          className="text-4xl bg-white px-2 py-1 rounded-md shadow-md"
          onClick={handleSlidebarOpen}
        >
          {isSidebarOpen ? <FiToggleRight /> : <FiToggleLeft />}
        </span>
      </div>
      {/* in mobile view slidebar */}
      <div
        className={`bg-transparent justify-center items-center flex-col absolute top-[150px] right-3 sm:hidden z-20 transition-all duration-500 ease-in-out ${
          isSidebarOpen
            ? "flex opacity-100 scale-100"
            : "flex opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-10 justify-center items-center bg-white p-4 rounded-lg shadow-lg z-10">
          {slideBarIcon.map((item) => {
            const isActive = location.pathname === item.path;
            const activeClass = isActive ? "bg-[#FDC435]" : "bg-[#EF52FF]";

            return (
              <Link to={item.path} key={item.id}>
                <div
                  className={`p-4 text-2xl rounded-md text-white hover:scale-115 transition-all duration-500 cursor-pointer
                 ${activeClass}
                
                   `}
                >
                  {item.icon}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* in mobile view slidebar */}
    </div>
  );
};

export default Mainpage;
