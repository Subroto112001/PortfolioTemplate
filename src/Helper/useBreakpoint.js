// useBreakpoint.js

import { useState, useEffect } from "react";

const useBreakpoint = (breakpoint = 640) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      // Check if the current width is less than the specified breakpoint (default sm: 640px)
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once immediately to set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useBreakpoint;
