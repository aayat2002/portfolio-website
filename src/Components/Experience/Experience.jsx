import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        {/* <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div> */}
        <div>
          {/* <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer , Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div> */}
          {/* <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <RiNetflixFill color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer.</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div> */}
          <div className=" gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            {/* <FaAmazon color="#FF9900" size={50} /> */}
            <span className="text-white">
              <ul className="text-sm p-2">
                <li>Pixel Stitch</li>
                <li>Worked as Frontend Developer Intern</li>
              </ul>

              <p className="text-sm leading-tight font-thin">
                April 2024 - Present , remote
              </p>
              <h2 className="leading-tight">
                • Managed and maintained Pixel Stitch’s website, ensuring
                consistent performance and functionality. Implemented various UI
                enhancements to improve user experience and interface
                aesthetics.
              </h2>
              <h2 className="leading-tight">
                • Collaborated with the development team to integrate new
                features and functionalities into the website
              </h2>

              <h2 className="leading-tight">
                • Received positive feedback from the team for proactive
                problem-solving and contribution to project success.
              </h2>

              <p className="text-sm leading-tight font-thin">
                • Tech Used: Html, Css, Reactjs, Javascript, Tailwind CSS.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
