import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul className="mt-4">
        {projects.map((project, index) => (
          <li key={project.title} className="mb-4">
            <a
              href={project.link}
              target="black"
              className="text-blue-500 hover:underline"
            >
              <h2 className="text-xl font-semibold">
                {index + 1}.{project.title}
              </h2>
              <p>Git Repo:{project.ProjectRepository}</p>
              <p>{project.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
