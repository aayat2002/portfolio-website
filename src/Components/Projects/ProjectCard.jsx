// import React from "react";
// import bannerImg from "../../assets/photo-C8q0KQHG.webp";
// const ProjectCard = ({ title, main }) => {
//   return (
//     <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
//       <img className="p-4" src={bannerImg} alt="" />
//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//           Demo
//         </button>
//         <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//           Source Code
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import React from "react";

const ProjectCard = ({ title, description, demoLink, sourceLink }) => {
  return (
    <div className="p-4 md:p-6 bg-[#0c0e19] rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">{description}</p>
      <div className="mt-4 flex gap-4">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
            Demo
          </button>
        </a>
        <a href={sourceLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
