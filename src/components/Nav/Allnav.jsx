import React from "react";
import About from "../Headings/About";
import Projects from "../Headings/Projects";
import Certificates from "../Headings/Certificates";
import Freelancing from "../Headings/Freelancing";

const Allnav = () => {
  return (
    <div className="min-[1024px]:hidden">
      <About />
      <Projects />
      <Certificates />
      <Freelancing />
    </div>
  );
};

export default Allnav;
