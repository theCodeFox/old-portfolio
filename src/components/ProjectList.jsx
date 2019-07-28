import React, { Component } from 'react';
import { navigate } from '@reach/router';

class ProjectList extends Component {
  state = {
    projects: [
      {name: 'pocketGP', alt: 'Pocket GP mobile App', title: 'Pocket GP: ', description: 'Cross platform mobile app supporting GPs and patients use their appointment times as efficiently as possible. Users can keep track of their ailments (including pictures and notes), with notifications and direct messaging between GP and patient.'},
      {name: 'hiveNews', alt: 'hive news screen shot',title: 'Hive News: ', description: 'Allows user to create their own articles or read other users articles and comments. They can comment and vote on what they like or dislike and make changes to their articles or comments, including deleting what is no longer needed.'},
      {name: 'portfolio', alt: 'portfolio screen shot', title: 'Portfolio: ', description: 'User can find out a little about me, Kay Vose (aka CodeFox), including what projects I have completed and how to contact me.'}
      ]
  }

  render() {
    const { projects } = this.state;
    const { theme } = this.props;
    return <div className="projectLinks">

      <span>Below is a list of all my personal projects. <span className={`highlight highlight-${theme}`}>Please click for more information:</span></span>

      <div className="projects">

        {projects.map((project, i) => {
          return <img
          className="project-button-image"
          src={require(`../images/${project.name}.png`)}
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
}

export default ProjectList;