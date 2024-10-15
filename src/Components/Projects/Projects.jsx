// import React from "react";
// import ProjectCard from "./ProjectCard";

// const Projects = () => {
//   return (
//     <div id="Projects" className="p-10 md:p-24 text-white ">
//       <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
//       <div className="py-12 px-8 flex flex-wrap gap-5">
//         <ProjectCard
//           title="Blogging Website"
//           main="this is a bloggin website created in next js and used some component library used some component library"
//         />
//         <ProjectCard
//           title="Youtue Clone"
//           main="this is a bloggin website created in next js and used some component library used some component library"
//         />
//         <ProjectCard
//           title="Netflix Clone"
//           main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const projects = [
    {
      title: "Weather App",
      description:
        "Personal portfolio showcasing my frontend development projects using React.js.",
      demoLink: "https://weatherapp-bice-three.vercel.app/",
      sourceLink: "https://github.com/aayat2002/Weatherapp",
    },

    {
      title: "Quiz App",
      description:
        "Personal portfolio showcasing my frontend development projects using React.js.",
      demoLink: "https://quiz-app-9nhr.vercel.app/",
      sourceLink: "https://github.com/aayat2002/Quiz-App",
    },

    {
      title: "Food Delivery App",
      description:
        "A responsive frontend for a food delivery service using React.js and Tailwind CSS.",
      demoLink: "https://food-delivery-demo.com",
      sourceLink: "https://github.com/yourusername/food-delivery-app",
    },
    // Add more projects as needed
  ];

  return (
    <section className="p-6 md:p-10 bg-gray-900 text-white">
      <h2 className="text-2xl md:text-4xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
