import React from "react";
import Leftpart from "./Leftpart";
import Rightpart from "./Rightpart";

const Maincontent = () => {
  return (
    <>
      <div className="w-full h-full pointer-events-none absolute top-0 left-0 flex items-center justify-center max-[1024px]:overflow-auto">
        <div className="w-[75%] pointer-events-auto h-full flex justify-center mt-44 max-[1450px]:w-[85%] max-[1450px]:mt-36 max-[1250px]:w-[90%] max-[1250px]:mt-16 max-[1024px]:flex-col max-[1024px]:mt-0 max-[1024px]:w-full max-[1024px]:px-10 max-[1024px]:py-5 max-[780px]:py-1 max-[780px]:px-2">
          <Leftpart />
          <Rightpart />
        </div>
      </div>
    </>
  );
};

export default Maincontent;
