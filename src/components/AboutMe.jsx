import React from 'react';
import AboutMeContent from './AboutMeContent';
import AboutMeImages from './AboutMeImages';
import Values from './Values';

const AboutMe = () => {
  return <div className="aboutMe">

    <h2 className="banner aboutMe-banner"><span className="highlight">Hello! </span>Let's get to know each other!</h2>

    <div className="aboutMe-content">
      <AboutMeContent />
    </div>

    <AboutMeImages />

    <div className="aboutMe-values">
      <Values />
    </div>

  </div>
}

export default AboutMe;