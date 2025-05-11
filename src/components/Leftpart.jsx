import React from "react";
import Nav from "./Nav";
import Links from "./Links";
import Allnav from "./Allnav";

const Leftpart = () => {
  return (
    <div className="left-part h-full w-[34%] max-[1024px]:w-full max-[1024px]:h-[200px] max-[1024px]:px-6 max-[1024px]:mt-6 max-[780px]:mt-3 max-[780px]:px-4">
      <h1 className="text-[50px] font-[inter] font-semibold text-white max-[1136px]:text-[40px] max-[1024px]:text-[60px] max-[640px]:text-[40px]">
        Ashish Gupta
      </h1>
      <h2 className="text-xl text-white/90 font-semibold max-[1136px]:text-lg max-[1024px]:text-xl max-[640px]:text-base">
        Full Stack Web Developer
      </h2>
      <h3 className="text-[17px] w-[80%] font-semibold text-white/70 mt-4 max-[1136px]:text-[15px] max-[1024px]:text-[17px] max-[1024px]:w-[40%] max-[1024px]:font-normal max-[780px]:w-full max-[640px]:text-sm">
        Your vision, my code—let’s make the web beautiful and usable for all.
      </h3>

      <Nav />

      <Links />

      <Allnav />
    </div>
  );
};

export default Leftpart;
