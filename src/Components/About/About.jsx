import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 md:ml-66 " src={AboutImg} alt="About img" />

          <ul>
            <div className="flex ml-89 gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-99">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a passionate frontend developer with 3 months of hands-on
                  experience as an intern at Pixel Stitch (remote). Skilled in
                  building responsive and interactive user interfaces using
                  React.js, HTML, CSS, JavaScript, and Tailwind CSS, I have
                  contributed to multiple projects focused on creating seamless
                  user experiences.During my internship, I collaborated closely
                  with senior developers and design teams to implement modern
                  web solutions, optimizing performance and usability. I’m
                  dedicated to continuous learning and am eager to leverage my
                  skills in creating engaging, user-centric applications.
                </p>
              </span>
            </div>
            {/* <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores
                </p>
              </span>
            </div> */}
            {/* <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis
                </p>
              </span>
            </div> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
