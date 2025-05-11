import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Certificates from "./Certificates";
import Projects from "./Projects";

const Navroutes = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth <= 1024) return null;

  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
    </Routes>
  );
};

export default Navroutes;
