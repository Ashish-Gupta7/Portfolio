import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

const socialLinks = [
  { href: "https://github.com/Ashish-Gupta7", icon: <FaGithub /> },
  {
    href: "https://www.linkedin.com/in/ashishkumargupta7/",
    icon: <FaLinkedin />,
  },
  { href: "https://www.instagram.com/iamashishgupta7", icon: <FaInstagram /> },
  { href: "mailto:Ash300mr@gmail.com", icon: <IoMailOpenOutline /> },
];

const Links = () => {
  return (
    <div className="flex gap-8 text-[25px] font-semibold h-[204px] items-end max-[1180px]:h-[200px] max-[1136px]:h-[220px] max-[1024px]:h-12">
      {socialLinks.map(({ href, icon }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-emerald-700 transition-colors duration-200 hover:scale-110"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Links;
