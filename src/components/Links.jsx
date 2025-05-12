import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";

const Links = () => {
  return (
    <div className="flex gap-8 text-[25px] font-semibold h-[234px] items-end max-[1180px]:h-[200px] max-[1136px]:h-[220px] max-[1024px]:h-12">
      <a href="https://github.com/Ashish-Gupta7">
        <FaGithub className="text-white/70 hover:text-white" />
      </a>
      <a href="https://www.linkedin.com/in/ashishkumargupta7/">
        <FaLinkedin className="text-white/70 hover:text-white" />
      </a>
      <a href="https://www.instagram.com/iamashishgupta7">
        <FaInstagram className="text-white/70 hover:text-white" />
      </a>
      <a href="mailto:Ash300mr@gmail.com">
        <IoMailOpenOutline className="text-white/70 hover:text-white" />
      </a>
    </div>
  );
};

export default Links;
