import React from 'react';
import { navigate } from '@reach/router';

// image imports
import lightPrevIcon from '../images/prev-light.png';
import lightNextIcon from '../images/next-light.png';
import darkPrevIcon from '../images/prev-dark.png';
import darkNextIcon from '../images/next-dark.png';

const ProjectScrollBanner = ({ prev, curr, next, theme }) => {
  return <div className={`scroll-banner scroll-banner-${theme}`}>
    <span
      className="scroll-banner-content small-text inline"
      onClick={() => navigate(`/projects/${prev.route}`, { state: { msg: 'project requested' } })}>
      <img className="scroll-banner-image" src={theme === "light" ? lightPrevIcon : darkPrevIcon} alt="previous project" />
      <h4 className="center hidden-text">{prev.label}</h4>
    </span>

    <span className="scroll-banner-content">
      <h4 className={`highlight highlight-${theme} center`}>{curr}</h4>
    </span>

    <span 
      className="scroll-banner-content small-text inline"
      onClick={() => navigate(`/projects/${next.route}`, { state: { msg: 'project requested' } })}>
      <h4 className="center hidden-text">{next.label}</h4>
      <img className="scroll-banner-image" src={theme = "light" ? lightNextIcon : darkNextIcon} alt="next project" />
    </span>

</div>
}

export default ProjectScrollBanner;