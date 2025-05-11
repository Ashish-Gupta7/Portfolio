import React from "react";
import About from "./About";
import Projects from "./Projects";
import Certificates from "./Certificates";

const Allnav = () => {
  return (
    <div className="min-[1024px]:hidden">
      <About />
      <Projects />
      <Certificates />
    </div>
  );
};

export default Allnav;
