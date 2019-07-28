import React from 'react';
import AboutMeContent from './AboutMeContent';
import AboutMeImages from './AboutMeImages';
import Values from './Values';

const AboutMe = ({ theme }) => {
  return <div className={`aboutMe home home-${theme}`}>

    <div className={`banner banner-${theme} aboutMe-banner`}>
        <h2 className={`vertical-centre`}><span className={`highlight highlight-${theme}`}>Hello! </span>Let's get to know each other!</h2>
      </div>

    <div className="aboutMe-content">
      <AboutMeContent theme={theme} />
    </div>

    <AboutMeImages />

    <div className="aboutMe-values">
      <Values theme={theme} />
    </div>

  </div>
}

export default AboutMe;