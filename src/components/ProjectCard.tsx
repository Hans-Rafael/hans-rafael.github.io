import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description || "No description available"}</p>
      <a href={project.html_url} target="_blank" rel="noopener noreferrer">
        Ver en GitHub
      </a>
    </div>
  );
}
