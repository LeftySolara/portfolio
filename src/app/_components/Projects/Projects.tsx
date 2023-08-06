import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

const projectData: Array<Project> = [
  {
    id: 0,
    title: "Forum Application",
    description:
      "A forum where people can discuss a variety of programming topics.",
    link: "https://github.com/LeftySolara/segfault-backend",
  },
  {
    id: 1,
    title: "Pong Clone",
    description: "A recreation of the classic video game Pong.",
    link: "https://github.com/LeftySolara/pypong",
  },
  {
    id: 2,
    title: "Image to ASCII Art Converter",
    description:
      "Converts images to ASCII art in your terminal. Images are resized to fit your terminal window dimensions.",
    link: "https://github.com/LeftySolara/ascii_img",
  },
  {
    id: 3,
    title: "Example",
    description:
      "This is an example project and should be removed from this page before being pushed to production.",
    link: "https://example.com",
  },
  {
    id: 4,
    title: "Example",
    description:
      "This is an example project and should be removed from this page before being pushed to production.",
    link: "https://example.com",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      key={project.id}
      className="self-center border-2 rounded-md p-3 mt-4 h-36 w-full lg:w-5/6 lg:h-48"
    >
      <div className="flex flex-row justify-between">
        <FontAwesomeIcon icon={faFolderOpen} />
        <div>
          <a href={project.link}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <h3 className="font-heading font-bold text-green-600">{project.title}</h3>
      <p className="text-sm">{project.description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-col justify-center self-center w-5/6 mt-10">
      <h2 className="font-bold font-heading self-center text-green-600 text-3xl m-4">
        Projects
      </h2>
      <div className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-3 justify-evenly self-center">
        {projectData &&
          projectData.map((project) => <ProjectCard project={project} />)}
      </div>
    </div>
  );
};

export default Projects;
