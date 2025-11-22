import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import Slidebar from "../Component/MainPgae/Slidebar";
import { slideBarIcon } from "../Helper/Icon";
// Icons
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa"; // Added social icons
import { FaCircleInfo } from "react-icons/fa6";

const Mainpage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // 1. New State for Developer Modal
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const sidebarRef = useRef(null);
  const toggleRef = useRef(null);

  const handleSlidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const currentPathIndex = slideBarIcon.findIndex(
    (item) => item.path === location.pathname
  );

  const getNextPath = () => {
    if (
      currentPathIndex === -1 ||
      currentPathIndex === slideBarIcon.length - 1
    ) {
      return null;
    }
    return slideBarIcon[currentPathIndex + 1].path;
  };

  const getPrevPath = () => {
    if (currentPathIndex <= 0) {
      return null;
    }
    return slideBarIcon[currentPathIndex - 1].path;
  };

  const swipeConfig = {
    onSwipedLeft: () => {
      const nextPath = getNextPath();
      if (nextPath) navigate(nextPath);
    },
    onSwipedRight: () => {
      if (isSidebarOpen) {
        setIsSidebarOpen(false);
      } else {
        const prevPath = getPrevPath();
        if (prevPath) navigate(prevPath);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
    delta: 50,
  };

  const handlers = useSwipeable(isMobile ? swipeConfig : {});

  // Close sidebars/modals on click outside
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

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div
      {...handlers}
      className="h-screen bg-[#e6e6fce5] relative overflow-hidden font-sans"
    >
      <style>{`
        @keyframes slideAndFade {
          0% { transform: translateX(0) translateY(-50%); opacity: 1; }
          50% { transform: translateX(-25px) translateY(-50%); opacity: 0.3; }
          100% { transform: translateX(0) translateY(-50%); opacity: 1; }
        }
        .slide-fade-animation {
          animation: slideAndFade 2s ease-in-out infinite;
        }
        /* Modal Animation */
        @keyframes scaleIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .modal-scale {
            animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>

      <div className="flex justify-between h-full relative">
        <div className="w-full md:w-[93%] h-full scrollbar-hide">
          <Outlet />
        </div>

        <div className="hidden md:block md:w-[7%] fixed right-8 lg:right-5 top-0 h-screen z-10 ">
          <Slidebar />
        </div>

        {/* 2. Updated Info Icon with onClick Event */}
        <div
          className="absolute bottom-[1%] left-[1.5%] z-20 cursor-pointer group"
          onClick={() => setIsDevModalOpen(true)}
        >
          <span className="text-3xl text-gray-600 group-hover:text-[#FDC435] transition-colors duration-300">
            <FaCircleInfo />
          </span>
         
          <span className="absolute left-10 top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded text-xs shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            About Developer
          </span>
        </div>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <div
        className={`absolute top-1/2 right-[-10px] hover:right-0 z-30 flex md:hidden transition-all duration-300 
    ${
      isSidebarOpen
        ? "translate-x-full opacity-0"
        : "translate-x-0 opacity-100 slide-fade-animation"
    }
  `}
      >
        <button
          ref={toggleRef}
          onClick={handleSlidebarOpen}
          className="bg-[#FDC435] text-white pr-3 pt-3 pb-3 rounded-full shadow-lg shadow-orange-500/20 transition-all duration-300 group border border-r-0 border-white/40 hover:animate-none"
        >
          <FaChevronLeft className="text-3xl group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`absolute right-4 top-1/2 -translate-y-1/2 md:hidden z-40 
        transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) origin-right
        ${
          isSidebarOpen
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-20 opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div className="relative flex flex-col gap-5 justify-center items-center bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/60">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute -top-3 -right-3 bg-white text-red-400 rounded-full p-1 shadow-md scale-0 group-hover:scale-100 transition-transform hover:bg-red-50 "
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
                {isActive && (
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#FDC435] rounded-full" />
                )}
                <div
                  className={`
                    p-3 text-2xl rounded-xl transition-all duration-300 flex items-center justify-center
                    ${
                      isActive
                        ? "bg-[#FDC435] text-white shadow-lg shadow-[#FDC435]/40 scale-110"
                        : "bg-white text-gray-400 hover:bg-[#FDC435] hover:text-white hover:shadow-md hover:scale-105"
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

      {/* Dark Overlay (Sidebar) */}
      <div
        className={`absolute inset-0 bg-black/10 backdrop-blur-[2px] z-20 transition-opacity duration-300 md:hidden ${
          isSidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* 3. NEW: Developer Info Modal */}
      {isDevModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
            onClick={() => setIsDevModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-full max-w-sm md:max-w-md border border-white/50 modal-scale">
            <button
              onClick={() => setIsDevModalOpen(false)}
              className="absolute top-3 right-3 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
            >
              <IoClose size={24} />
            </button>

            <div className="text-center mt-2">
              <div className="w-20 h-20 bg-gradient-to-tr from-[#FDC435] to-orange-400 rounded-full mx-auto flex items-center justify-center shadow-lg mb-4 text-white text-3xl font-bold">
                {/* You can put an <img> here instead */}S
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                Subroto Kumar Barman
              </h2>
              <p className="text-[#FDC435] font-medium text-sm uppercase tracking-wide mb-4">
                Full Stack Developer
              </p>

              <div className="w-full h-[1px] bg-gray-200 my-4"></div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Passionate about building accessible and performant web
                applications. Creator of the Ranocoder portfolio and various
                open-source tools.
              </p>

              <div className="flex justify-center gap-6 mb-6">
                <a
                  href="https://github.com/Subroto112001"
                  target="_blank"
                  className="text-gray-500 hover:text-[#FDC435] hover:scale-110 transition-all text-2xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/subroto112001/"
                  target="_blank"
                  className="text-gray-500 hover:text-blue-600 hover:scale-110 transition-all text-2xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://skbarman.me/"
                  target="_blank"
                  className="text-gray-500 hover:text-green-500 hover:scale-110 transition-all text-2xl"
                >
                  <FaGlobe />
                </a>
              </div>

              <div className="text-xs text-gray-400">
                &copy; {new Date().getFullYear()} Ranocoder. All rights
                reserved.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mainpage;
