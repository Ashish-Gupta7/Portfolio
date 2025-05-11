import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Certificates = () => {
  const Data = [
    {
      Time: "2019 - 2022",
      course: {
        name: "B.Sc. in Computer Science",
        link: "https://drive.google.com/file/d/1gepku2iIL2Sh5Wr9DhF3TJFZxmk2rGx6/view?usp=drivesdk",
      },
      details: (
        <>
          Learned core concepts of programming,{" "}
          <span className="text-white">databases</span>, operating systems, and
          data structures. Gained hands-on experience in Java, and{" "}
          <span className="text-white">basic web development</span>.
        </>
      ),
    },
    {
      Time: "2023 - 2024",
      course: {
        name: "Front-End Development",
        link: "https://drive.google.com/file/d/1-MWjt5QdzbbeGvUsu4h_UaxOk-Tg-qvP/view?usp=drivesdk",
      },
      details: (
        <>
          Learned{" "}
          <span className="text-white">
            HTML, CSS, JavaScript, and responsive web design
          </span>
          . Worked with modern frameworks like{" "}
          <span className="text-white">ReactJS</span> and libraries like{" "}
          <span className="text-white">TailwindCSS</span>. Built several UI
          projects including <span className="text-white">portfolios</span>,
          product pages, and dynamic forms.
        </>
      ),
    },
    {
      Time: "2024 - 2024",
      course: {
        name: "Back-End Development",
        link: "https://drive.google.com/file/d/1-MG6V9-uMNVYDbK8vF3qv5dONiJg_0gx/view?usp=drivesdk",
      },
      details: (
        <>
          Gained hands-on experience with{" "}
          <span className="text-white">Node.js, Express.js, and MongoDB</span> .
          Developed and integrated{" "}
          <span className="text-white">RESTful APIs</span> , implemented{" "}
          <span className="text-white">user authentication</span> , and built
          real-time chat applications. Worked with tools such as Postman,
          Multer, and Mongoose for backend logic and file handling. Built
          multiple real-world projects including chat apps, an e-commerce clone,
          and a <span className="text-white">personal portfolio</span>. Also
          gained experience with version control{" "}
          <span className="text-white">(Git/GitHub)</span> and deployment
          platforms like Render.
        </>
      ),
    },
  ];

  return (
    <div className="certificates text-white flex flex-col gap-5 max-[1024px]:mt-40 max-[1024px]:gap-10 max-[640px]:mt-32">
      <div className="text-white font-[inter] font-semibold mb-4 sticky top-0 stickyBg py-3 text-sm min-[1024px]:hidden max-[640px]:mb-0">
        CERTIFICATES
      </div>
      {Data.map((elem, index) => (
        <div
          key={index}
          className="flex justify-between min-[1024px]:hover:bg-white/5 min-[1024px]:hover:rounded-md min-[1024px]:px-6 min-[1024px]:py-5 max-[640px]:flex-col max-[640px]:gap-3"
        >
          <div>{elem.Time}</div>
          <div className="w-[75%] max-[640px]:w-full">
            <a
              className="w-full block bg-zinc-600/20 text-emerald-400/90 font-semibold px-2"
              href={elem.course.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {elem.course.name}
            </a>
            <p className="mt-2 text-white/50 max-[640px]:text-sm">
              {elem.details}
            </p>
          </div>
        </div>
      ))}
      <a
        href="https://drive.google.com/file/d/1fhgXKH7vRrM90Y7vWDcY7_9LwduLWmrJ/view?usp=sharing"
        className="flex items-center gap-2 hover:text-emerald-500 font-semibold mb-10"
        target="_blank"
      >
        <span>View Full Resume</span>
        <FiArrowUpRight />
      </a>
    </div>
  );
};

export default Certificates;
