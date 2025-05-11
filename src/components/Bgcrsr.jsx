import React, { useEffect } from "react";
import gsap from "gsap";

const Bgcrsr = () => {
  useEffect(() => {
    const crsr1 = document.querySelector(".crsr-1");
    const crsr2 = document.querySelector(".crsr-2");

    const moveCrsr = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      gsap.to(crsr1, {
        x: x - crsr1.offsetWidth / 2,
        y: y - crsr1.offsetHeight / 2,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.to(crsr2, {
        x: x - crsr2.offsetWidth / 2,
        y: y - crsr2.offsetHeight / 2,
        duration: 0.05,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", moveCrsr);

    return () => {
      window.removeEventListener("mousemove", moveCrsr);
    };
  }, []);

  return (
    <>
      <div className="crsr-1 pointer-events-none w-24 h-24 border border-white/60 absolute rounded-full flex items-center justify-center max-[640px]:hidden"></div>
      <div className="crsr-2 pointer-events-none absolute w-[6px] h-[6px] rounded-full bg-white/50 max-[640px]:hidden"></div>
    </>
  );
};

export default Bgcrsr;
