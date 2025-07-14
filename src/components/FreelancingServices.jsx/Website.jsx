import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Website = () => {
  const Data = [
    {
      image: "/images/Hotel_Ganesh_Palace.webp",
      heading: {
        name: "Hotel Ganesh Palace",
        link: "https://hotel-ganesh-palace.onrender.com",
      },
      details:
        "Hotel Ganesh Palace is a hotel website I built for my first client. It helps users explore rooms, check offers, and send booking inquiries easily. The site is responsive, clean, and user-friendly — made to improve the hotel’s online presence.",
      tech: [
        { name: "TailwindCSS", link: "https://tailwindcss.com" },
        {
          name: "JSX",
          link: "https://legacy.reactjs.org/docs/introducing-jsx.html",
        },
        { name: "ReactJS", link: "https://react.dev/" },
        { name: "render", link: "https://render.com/" },
      ],
    },
  ];

  return (
    <div className="relative flex flex-col gap-6 pb-20 -z-10">
      {/* Heading (sticky if needed) */}
      <div className="text-white text-lg font-semibold">Websites</div>
      {/* To make heading sticky, replace above line with:
      <div className="text-white text-lg font-semibold sticky top-0 z-10 bg-[#0f172a] py-3">
        Websites
      </div>
      */}

      {Data.map((elem, index) => (
        <div
          key={index}
          className="flex gap-6 max-[640px]:flex-col hover:bg-white/5 rounded-md px-6 py-3 transition"
        >
          {/* Image */}
          <div className="w-48 h-32 overflow-hidden rounded max-[950px]:w-36 max-[950px]:h-[108px] max-[640px]:w-48 max-[640px]:h-36">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt={elem.heading.name}
            />
          </div>

          {/* Details */}
          <div className="w-[75%] flex flex-col gap-3 max-[640px]:w-full">
            <a
              href={elem.heading.link}
              className="flex items-end gap-1 bg-zinc-600/20 text-emerald-400/90 font-semibold px-2 cursor-pointer hover:gap-2 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{elem.heading.name}</span>
              <FiArrowUpRight />
            </a>

            <div className="text-white/50 max-[640px]:text-sm">
              {elem.details}
            </div>

            <div className="flex gap-1 flex-wrap">
              {elem.tech.map((e, idx) => (
                <a
                  key={idx}
                  href={e.link}
                  className="text-white px-3 py-1 rounded-full bg-emerald-600 font-semibold text-xs hover:bg-emerald-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {e.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Website;
