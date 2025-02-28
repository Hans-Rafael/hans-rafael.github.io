import { useEffect, useState } from "react";
import { fetchGitHubProjects } from "@/utils/githubApi";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchGitHubProjects().then(setProjects);
  }, []);

  return (
    <div>
      <h1>Mis Proyectos</h1>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
