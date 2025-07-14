import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Bggridboxes = () => {
  const gridRef = useRef(null);
  const boxSize = 100;

  useEffect(() => {
    const grid = gridRef.current;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const cols = Math.ceil(screenWidth / boxSize);
    const rows = Math.ceil(screenHeight / boxSize);

    grid.style.gridTemplateColumns = `repeat(${cols}, ${boxSize}px)`;
    grid.style.gridTemplateRows = `repeat(${rows}, ${boxSize}px)`;

    const totalBoxes = cols * rows;

    for (let i = 0; i < totalBoxes; i++) {
      const box = document.createElement("div");
      box.className =
        "w-[100px] h-[100px] border border-white/5 transition-all duration-200";
      grid.appendChild(box);

      box.addEventListener("mouseenter", () => {
        gsap.to(box, {
          border: "1px solid #10d99933",
          scale: 1.2,
          duration: 0.3,
          ease: "power1.out",
        });
      });

      box.addEventListener("mouseleave", () => {
        gsap.to(box, {
          border: "1px solid #10d99933",
          scale: 1,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    }

    return () => {
      grid.innerHTML = "";
    };
  }, []);

  return (
    <>
      <div className="fixed w-full h-[100vh] -z-10 bg-gradient-to-t from-emerald-950 via-teal-950 to-[#17292e]">
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[70vh] blur-[260px] bg-teal-500"></div>
        <div
          ref={gridRef}
          className="relative grid backdrop-blur-xl backdrop-saturate-150 bg-[rgba(0,0,0,0.75)] overflow-hidden"
        ></div>
      </div>
    </>
  );
};

export default Bggridboxes;
