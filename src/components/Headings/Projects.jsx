import React, { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Data = [
  {
    image: "/images/Omegle.webp",
    heading: {
      name: "Omegle Clone",
      link: "https://omegle-715v.onrender.com/",
    },
    details:
      "A real-time anonymous video and text chat application inspired by Omegle. It randomly connects two users for a one-on-one chat experience without requiring login or sign-up. Includes features like room creation, peer-to-peer media streaming, and message exchange.",
    tech: [
      { name: "Socket.io", link: "https://socket.io/" },
      {
        name: "WebRTC",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API",
      },
      { name: "ExpressJs", link: "https://expressjs.com/" },
      { name: "Node.js", link: "https://nodejs.org/en" },
      { name: "render", link: "https://render.com/" },
    ],
  },
  {
    image: "/images/Khatabook.webp",
    heading: {
      name: "Khatabook",
      link: "https://khatabook-mg0i.onrender.com/",
    },
    details:
      "A digital ledger system where users can register, create and manage multiple hisab (accounts), record transactions, and share individual hisab links with others for view-only access. Designed for simple and secure record-keeping, it helps users track finances easily and maintain transparency in shared records.",
    tech: [
      {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
      },
      {
        name: "MongoDB Atlas",
        link: "https://www.mongodb.com/products/platform/atlas-database",
      },
      {
        name: "TailwindCSS",
        link: "https://tailwindcss.com/docs/installation/play-cdn",
      },
      { name: "Ejs", link: "https://ejs.co/" },
    ],
  },
  {
    image: "/images/React-project.webp",
    heading: {
      name: "React-Project",
      link: "https://react-project6.onrender.com/",
    },
    details:
      "A dynamic product management app where users can add products based on selected categories. It offers a clean and user-friendly interface to organize items efficiently, helping users sort, manage, and view products as per their preferences. Ideal for basic inventory or catalog-like functionality.",
    tech: [
      {
        name: "ReactJS",
        link: "https://react.dev/",
      },
      {
        name: "JSX",
        link: "https://legacy.reactjs.org/docs/introducing-jsx.html",
      },
      {
        name: "Vite",
        link: "https://vite.dev/",
      },
      {
        name: "ESLint",
        link: "https://eslint.org/",
      },
    ],
  },
  {
    image: "/images/Ssshhh....webp",
    heading: {
      name: "Ssshhh...",
      link: "https://ashish-gupta7.github.io/ssshhh.../",
    },
    details:
      "A horror-themed experience where users can discover their estimated death date, find out their age on other planets, explore detailed information about ghosts. This interactive project blends curiosity with creepiness to give users a thrilling and eerie journey into the unknown.",
    tech: [
      {
        name: "TailwindCSS",
        link: "https://tailwindcss.com/docs/installation/play-cdn",
      },
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  {
    image: "/images/Obys-agency.webp",
    heading: {
      name: "Obys-agency",
      link: "https://ashish-gupta7.github.io/obys-agency/",
    },
    details:
      "A creative replica of the award-winning Obys Agency website featured on Awwwards.com. This project focuses on smooth animations, interactive scrolling, and modern layout to capture the essence of high-end portfolio design. Built to showcase visual storytelling and frontend creativity.",
    tech: [
      {
        name: "TailwindCSS",
        link: "https://tailwindcss.com/docs/installation/play-cdn",
      },
      {
        name: "GSAP",
        link: "https://gsap.com/",
      },
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  {
    image: "/images/Cyberfiction.webp",
    heading: {
      name: "Cyberfiction",
      link: "https://ashish-gupta7.github.io/cyberfiction/",
    },
    details:
      "A visually immersive clone of the futuristic Cyberfiction website, built using canvas and featuring 300+ images to replicate its interactive and cyberpunk-inspired experience. The project delivers smooth scroll-based animations, dynamic visuals, and a digital universe feel – offering a rich and creative frontend showcase.",
    tech: [
      {
        name: "Canvas",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
      },
      {
        name: "Locomotive JS",
        link: "https://locomotivemtl.github.io/locomotive-scroll/",
      },
      {
        name: "ScrollTrigger",
        link: "https://gsap.com/docs/v3/Plugins/ScrollTrigger/",
      },
      {
        name: "GSAP",
        link: "https://gsap.com/",
      },
    ],
  },
  {
    image: "/images/Ganttify.webp",
    heading: {
      name: "Ganttify",
      link: "https://ashish-gupta7.github.io/Ganttify/",
    },
    details:
      "A professional project and goal management platform inspired design that helps teams align with company objectives, track progress in real time, and manage workflows efficiently. It features Gantt charts, team collaboration, resource tracking, and customer testimonials – all presented with a clean, modern UI to deliver a complete business-focused experience.",
    tech: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="mt-3 flex flex-col gap-4 hide-scrollbar min-[1024px]:h-full min-[1024px]:overflow-y-scroll max-[1024px]:gap-16 max-[1024px]:mt-36 max-[640px]:mt-28">
      {/* Heading */}
      <div className="text-white font-[inter] font-semibold mb-5 text-sm sticky top-0 stickyBg py-3 min-[1024px]:hidden max-[640px]:mb-0">
        PROJECTS
      </div>

      {/* Project List */}
      {Data.map((elem, index) => (
        <div
          key={index}
          className="flex gap-6 min-[1024px]:hover:bg-white/5 min-[1024px]:hover:rounded-md min-[1024px]:px-6 min-[1024px]:py-2 max-[640px]:flex-col"
        >
          {/* Image */}
          <div className="w-48 h-32 overflow-hidden rounded max-[950px]:w-36 max-[950px]:h-[108px] max-[640px]:w-48 max-[640px]:h-36">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>

          {/* Details */}
          <div className="w-[75%] flex flex-col gap-3 max-[640px]:w-full">
            <a
              href={elem.heading.link}
              className="heading w-full flex items-end gap-1 bg-zinc-600/20 text-emerald-400/90 font-semibold px-2 cursor-pointer hover:items-center hover:gap-2"
              target="_blank"
            >
              <span>{elem.heading.name}</span>
              <FiArrowUpRight className="font-semibold" />
            </a>

            <div className="details text-white/50 max-[640px]:text-sm">
              {elem.details}
            </div>

            <div className="tech flex gap-1 flex-wrap">
              {elem.tech.map((e, idx) => (
                <a
                  key={idx}
                  href={e.link}
                  className="text-white px-3 py-1 rounded-full bg-emerald-600 font-semibold text-xs"
                  target="_blank"
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

export default Projects;
