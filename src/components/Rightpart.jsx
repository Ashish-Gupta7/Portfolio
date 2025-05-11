import React from "react";
import Navroutes from "./Navroutes";

const Rightpart = () => {
  return (
    <div className="h-[75%] w-[70%] max-[1024px]:w-full max-[1024px]:h-[cal(100% - 200px)] max-[1024px]:mt-4">
      <Navroutes />
    </div>
  );
};

export default Rightpart;
