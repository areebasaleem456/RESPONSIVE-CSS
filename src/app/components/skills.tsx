import React from "react";
import "../style/skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        <div data-aos="zoom-in-up" className="skills-left">
          <h2 className="skills-heading">Technologies I Work With</h2>
          <p className="skills-text">
            I have a solid foundation in web development,specializing in
            HTML,CSS,and JavaScript.My experience extends to using frameworks
            like React and Next.js to create dynamic and
            user-friendly-applications.I am also proficient in Tailwind CSS for
            efficient styling and design.With a passion for learning,I stay
            updated on the latest technologies to enhance my skills set.
          </p>
        </div>
        <div className="skills-right">
          <div className="skills-icons-grid">
            <div className="skills-space">
              <h2>Next.js</h2>
              <h2>TypeScript</h2>
              <h2>React.js</h2>
            </div>
            <div className="skills-space">
              <h2>Tailwind</h2>
              <h2>CSS</h2>
              <h2>Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
