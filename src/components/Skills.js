import React, { useEffect, useState } from "react";
import "../assets/style/Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/skills")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des skills :", error)
      );
  }, []);

  return (
    <div id="skills" className="skills">
      <h2>Compétences</h2>
      <div className="skill-list">
        {skills.map((skill, index) => {
          const skillClass = `skill-${index + 1}`;

          return (
            <div key={skill.id} className={skillClass}>
              <img src={skill.image} alt={skill.title} />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <p>{skill.description2}</p>
              <p>{skill.description3}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
