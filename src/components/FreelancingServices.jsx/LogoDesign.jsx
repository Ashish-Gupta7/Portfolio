import React from "react";

const logos = [
  {
    name: "Hotel Ganesh Palace",
    image: "/images/logo/1.png",
  },
  {
    name: "Parihar Motors",
    image: "/images/logo/2.png",
  },
  {
    name: "Ganesh Motors",
    image: "/images/logo/3.png",
  },
  {
    name: "Shristi Online",
    image: "/images/logo/4.png",
  },
];

const LogoDesign = () => {
  return (
    <div className="relative flex flex-col gap-6 pb-20 -z-10">
      <h3 className="text-white text-lg font-semibold">Logo Designs</h3>

      <div className="flex flex-wrap gap-5 max-[430px]:flex-col max-[430px]:items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-lg overflow-hidden p-3 hover:scale-105 transition"
          >
            <img
              src={logo.image}
              alt={logo.name}
              className="w-full h-[150px] object-contain bg-white rounded"
            />
            <p className="text-white/80 text-sm mt-2 text-center">
              {logo.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoDesign;
