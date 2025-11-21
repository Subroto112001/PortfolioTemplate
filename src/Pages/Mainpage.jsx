import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Slidebar from "../Component/MainPgae/Slidebar";
import { slideBarIcon } from "../Helper/Icon";
import { CgShapeHalfCircle } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Mainpage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const sidebarRef = useRef(null);
  const toggleRef = useRef(null);

  const handleSlidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Click Outside Logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isSidebarOpen) return;
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <div className="h-screen bg-[#e6e6fce5] relative overflow-hidden font-sans">
      <div className="flex justify-between h-full">
        {/* Main Content */}
        <div className="w-full sm:w-[93%] h-full  scrollbar-hide">
          <Outlet />
        </div>

        <div className="hidden sm:block sm:w-[7%] fixed right-0 top-0 h-screen z-10 ">
          <Slidebar />
        </div>
      </div>

      <div
        className={`absolute top-1/2 -translate-y-1/2 right-[-10px] hover:right-0 z-30 flex sm:hidden transition-all duration-300 ${
          isSidebarOpen
            ? "translate-x-full opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        <button
          ref={toggleRef}
          onClick={handleSlidebarOpen}
          // Updated to #FDC435
          className="bg-[#FDC435] text-white pr-3 pt-3 pb-3 rounded-l-2xl shadow-lg shadow-orange-500/20 transition-all duration-300 group border border-r-0 border-white/40"
        >
          <CgShapeHalfCircle className="text-3xl animate-pulse group-hover:animate-none group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* 2. Mobile Sidebar Menu */}
      <div
        ref={sidebarRef}
        className={`absolute right-4 top-1/2 -translate-y-1/2 sm:hidden z-40
        transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) origin-right
        ${
          isSidebarOpen
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-20 opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div className="relative flex flex-col gap-5 justify-center items-center bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/60">
          {/* Close Button */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute -top-3 -right-3 bg-white text-red-400 rounded-full p-1 shadow-md scale-0 group-hover:scale-100 transition-transform hover:bg-red-50"
          >
            <IoClose size={20} />
          </button>

          {slideBarIcon.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                to={item.path}
                key={item.id || index}
                onClick={() => setIsSidebarOpen(false)}
                className="relative group"
              >
                {/* Active Indicator Dot */}
                {isActive && (
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#FDC435] rounded-full" />
                )}

                <div
                  className={`
                    p-3 text-2xl rounded-xl transition-all duration-300 flex items-center justify-center
                    ${
                      isActive
                        ? "bg-[#FDC435] text-white shadow-lg shadow-[#FDC435]/40 scale-110" // Active Yellow
                        : "bg-white text-gray-400 hover:bg-[#FDC435] hover:text-white hover:shadow-md hover:scale-105" // Inactive -> Hover Yellow
                    }
                  `}
                >
                  {item.icon}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Dark Overlay Backdrop */}
      <div
        className={`absolute inset-0 bg-black/10 backdrop-blur-[2px] z-20 transition-opacity duration-300 sm:hidden ${
          isSidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default Mainpage;
