import React from "react";

const About = () => {
  return (
    <div className="about font-[inter] px-6 py-5 text-white/50 tracking-wide flex flex-col gap-5 max-[1024px]:px-0 max-[1024px]:mt-36 max-[640px]:text-sm max-[640px]:mt-28">
      <div className="text-white font-[inter] font-semibold text-sm mb-9 sticky top-0 stickyBg py-3 min-[1024px]:hidden max-[640px]:mb-2">
        ABOUT
      </div>
      <p>
        I’m a developer passionate about crafting accessible, pixel-perfect user
        interfaces that blend thoughtful design with robust engineering. My
        favorite work lies at the intersection of design and development,
        creating experiences that not only look great but are meticulously built
        for performance and usability.
      </p>
      <p>
        <span className="text-white">
          Actively seeking a role as a full stack web developer
        </span>{" "}
        where I can grow my skills while collaborating with a dynamic team to
        create impactful and high-performance digital products.
      </p>
      <p>
        In the past year, I’ve dedicated myself to learning full stack web
        development through hands-on projects and consistent practice.{" "}
        <span className="text-white">
          I’ve built real-world applications using the MERN stack
        </span>
        , focusing on user experience, performance, and clean code.
      </p>
      <p>
        When I'm not coding, I enjoy reading about tech trends, watching web
        development tutorials, and occasionally working on side projects. I also
        like listening to music, going on long walks to refresh my mind, and
        watching cricket.
      </p>
    </div>
  );
};

export default About;
