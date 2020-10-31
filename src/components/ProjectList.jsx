import React from 'react';
import { navigate } from '@reach/router';

const ProjectList = ({ theme, projects }) => {
  return <div className="projectLinks">

    <span>Below is a list of all my personal projects. <span className={`highlight highlight-${theme}`}>Please click for more information:</span></span>

    <div className="projects">
      {projects.map((project, i) => {
        return <img
        className="project-button-image"
        src={project.image}
        alt={project.alt}
        key={`project-${i}`}
        onClick={() => {
          navigate(`/projects/${project.name.toLowerCase()}`, { state: { msg: 'project requested' } })
        }}
      />
      })}
    </div>

  </div>
}

export default ProjectList;