const GITHUB_USERNAME = "Hans-Rafael"; // Tu usuario de GitHub
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/starred`;//solo los /starred

export async function fetchGitHubProjects() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return await res.json(); // Devuelve solo los repositorios 
  } catch (error) {
    console.error("Error al obtener proyectos de GitHub:", error);
    return [];
  }
}
