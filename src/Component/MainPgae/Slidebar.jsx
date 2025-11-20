import React from "react";
import { slideBarIcon } from "../../Helper/Icon";
// 1. Import useLocation from react-router-dom
import { Link, useLocation } from "react-router-dom";

const Slidebar = () => {

  const location = useLocation();

  return (
    <div className="bg-transparent h-screen justify-center items-center flex flex-col pt-10">
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
  );
};

export default Slidebar;
