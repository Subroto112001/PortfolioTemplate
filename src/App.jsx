import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Mainpage from "./Pages/Mainpage";
import Skil from "./Pages/Skil";
import Education from "./Pages/Education";
import Project from "./Pages/Project";
import Blog from "./Pages/Blog";
import { HeadProvider } from "react-head";

const App = () => {
  return (
    <HeadProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}>
            <Route index element={<Home />} />
            <Route path="/skill" element={<Skil />} />
            <Route path="/education" element={<Education />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HeadProvider>
  );
};

export default App;
