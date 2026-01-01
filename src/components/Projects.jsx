import { projectData } from '../assets/data.js';
import ProjectCard from './cards/ProjectCard.jsx';

const Projects = () => {
  return (
    <section id="Projects" className="py-16 px-8 md:px-16 xl:px-30 lg:px-24">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-txt dark:text-primary-txt-light">
        Projects
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
        Here is the list of projects that I have worked on.
      </p>

      {/* Projects Grid */}
      <div className="mt-14 grid gap-10 lg:gap-14 sm:grid-cols-2">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            pic={project.pic}
            name={project.name}
            preview={project.preview}
            github={project.preview}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

