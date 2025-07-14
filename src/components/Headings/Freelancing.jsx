import React, { useState } from "react";
import Website from "../FreelancingServices.jsx/Website";
import SocialMedia from "../FreelancingServices.jsx/SocialMedia";
import LogoDesign from "../FreelancingServices.jsx/LogoDesign";
import VideoEditing from "../FreelancingServices.jsx/VideoEditing";

const Freelancing = () => {
  const [selectedService, setSelectedService] = useState(null);

  const navItems = [
    { label: "Website", component: <Website /> },
    { label: "Social Media", component: <SocialMedia /> },
    { label: "Logo Design", component: <LogoDesign /> },
    { label: "Video Editing", component: <VideoEditing /> },
  ];

  const selected = navItems.find((item) => item.label === selectedService);

  return (
    <div className="freelancing h-full font-[inter] px-6 py-5 text-white/50 tracking-wide flex flex-col gap-5 max-[1024px]:px-0 max-[1024px]:mt-36 max-[640px]:text-sm max-[640px]:mt-28 leading-relaxed max-[1024px]:h-[100vh] max-[1024px]:py-0">
      <div className="text-white font-semibold text-sm mb-9 sticky top-0 stickyBg py-3 min-[1024px]:hidden max-[640px]:mb-2">
        FREELANCING
      </div>

      {!selectedService && (
        <>
          <p>
            I’ve recently started freelancing to offer creative and technical
            services. I help people and small businesses build their online
            presence through:
          </p>

          <div>
            <p>
              <span className="text-white/90">Website development</span> using
              React, JavaScript, HTML, CSS, and Tailwind
            </p>
            <p>
              <span className="text-white/90">Social media post design</span>{" "}
              using Canva
            </p>
            <p>
              <span className="text-white/90">Logo design</span> for brands,
              businesses, and personal use
            </p>
            <p>
              <span className="text-white/90">Video editing</span> using Filmora
              (reels, shorts, intros, etc.)
            </p>
          </div>

          <p>
            I enjoy creating clean websites, eye-catching visuals, and short
            videos that match the client’s style and goals.
          </p>

          <p>
            I’m open to freelance work — from one-time gigs to long-term
            collaboration. If you need help with your digital content or
            branding, I’d love to work with you!
          </p>

          <p>
            <span className="text-white/90">
              Let’s build something great together.
            </span>{" "}
            Reach out anytime!
          </p>
        </>
      )}

      {selected && (
        <div className="relative h-full flex flex-col gap-6 pb-20">
          {selected.component}
          {/* Fixed Button */}
          <div className="fixed bottom-6 right-10 z-50">
            <button
              onClick={() => setSelectedService(null)}
              className="bg-emerald-500/40 text-white px-4 py-2 rounded-full hover:bg-emerald-500/70 transition-all text-sm shadow-md"
            >
              ← Back to Freelancing
            </button>
          </div>
        </div>
      )}

      {!selectedService && (
        <nav className="flex flex-wrap gap-5 mt-5">
          {navItems.map(({ label }) => (
            <button
              key={label}
              onClick={() => setSelectedService(label)}
              className="group w-max text-white hover:text-white uppercase text-xs bg-emerald-500/30 px-4 py-2 rounded-full tracking-wider hover:bg-emerald-500/50 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Freelancing;
