import React, { useEffect, useState } from "react";
import "../assets/style/Projects.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Récupérer les projets depuis l'API
  useEffect(() => {
    fetch("https://backend-beta-silk.vercel.app/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des projets :", error)
      );
  }, []);

  return (
    <div id="projects">
      <h2>Projets</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
