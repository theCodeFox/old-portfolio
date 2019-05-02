import React from 'react';
import { navigate } from '@reach/router';

const ProjectScrollBanner = ({prev, curr, next}) => {
  return <div className="scroll-banner">
    <span
      className="scroll-banner-content inline"
      onClick={() => navigate(`/projects/${prev.route}`, { state: { msg: 'project requested' } })}>
      <img
        className="scroll-banner-image"
        src={require("../images/prev.png")}
        alt="previous project"
      />
      <h4 className="center">{prev.label}</h4>
    </span>

    <span className="scroll-banner-content">
      <h4 className="highlight center">{curr}</h4>
    </span>

    <span 
      className="scroll-banner-content inline"
      onClick={() => navigate(`/projects/${next.route}`, { state: { msg: 'project requested' } })}>
      <h4 className="center">{next.label}</h4>
      <img
        className="scroll-banner-image"
        src={require("../images/next.png")}
        alt="next project"
      />
    </span>

</div>
}

export default ProjectScrollBanner;